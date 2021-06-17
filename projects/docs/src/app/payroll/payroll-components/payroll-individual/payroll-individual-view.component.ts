import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { Menu } from '../../../shared/menu-items/menu-items';
import { AppStateService } from '../../../srv/app-state.service';
import { NavigationService } from '../../../srv/navigation.service';
import { NominasIndividualesService } from '../../../srv/payroll/api/rest/nominasIndividuales.service';
import { MENU_ITEMS } from '../payroll-general/payroll-data';
import { Individual } from './individual-data';

@Component({
  selector: 'app-payroll-individual-view',
  templateUrl: './payroll-individual-view.component.html',
})
export class PayrollindividualViewComponent implements OnInit, OnDestroy {
  position = 'below';
  public menuItems: Menu[];

  form: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(
    public builder: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
    public stateSrv: AppStateService,
    private elRef: ElementRef,
    public navSrv: NavigationService,
    public http: HttpClient,
    private nominaIndividualAPISrv: NominasIndividualesService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.menuItems = MENU_ITEMS;

    const form = this.builder.group({
      menuItem: builder.control(''),
      id: undefined,
      trabajador: builder.group({
        id: builder.control(''),
        primerNombre: builder.control(''),
        sueldo: builder.control(0),
      }),
      deducciones: builder.group({
        id: builder.control(''),
      }),
      devengados: builder.group({
        id: builder.control(''),
      }),
      deduccion: 0,
      devengos: 0,
      totalAPagar: 0,
      nominaGeneralId: builder.control(''),
      nominaIndividualId: undefined,
      fechaCorte: new Date(),
    });
    this.form = form;
    this.subscriptions.push(
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = JSON.parse(params['data']);
            this.form.patchValue(data);
            if (data['nominaIndividualId'] === undefined) return of(form.value);
            return nominaIndividualAPISrv.findByIdUsingGET58(
              data['nominaIndividualId'],
              'events',
              true,
              {
                httpHeaderAccept: 'application/json',
              }
            );
          })
        )
        .subscribe({
          next: (data: any) => {
            console.log(data);
            if (data?.type === 4 && data?.status == 200 && data?.body?.bodyDto)
              this.form.patchValue({
                ...data?.body?.bodyDto,
                nominaGeneralId: this.form.value.nominaGeneralId,
                fechaCorte: this.form.value.fechaCorte,
              });
          },
          error: (err: any) => {
            console.log(err);
          },
        }),
      this.form.valueChanges.subscribe((filter) => {
        this.filter(filter?.menuItem);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }

  generalData = () => {
    return JSON.stringify({
      nominaGeneralId: this.form.value.nominaGeneralId.id,
      fechaCorte: this.form.value.fechaCorte,
    });
  }

  individualData = () => {
    return JSON.stringify({
      nominaIndividualId: this.form.value.nominaIndividualId,
      nominaGeneralId: this.form.value.nominaGeneralId,
      fechaCorte: this.form.value.fechaCorte,
      trabajador: this.form.value.trabajador,
      devengadosId: this.form.value.devengados.id,
      deduccionesId: this.form.value.deducciones.id,
    });
  }

  onNoClick(): void {}

  save() {
    if (this.form.errors) {
      return;
    }

    const request = {
      entidad: {
        id: this.form.value.id,
        trabajador: this.form.value.trabajador,
        nominaGeneralId: this.form.value.nominaGeneralId,
        devengadosTotal: this.form.value.devengadosTotal,
        deduccionesTotal: this.form.value.deduccionesTotal,
        comprobanteTotal: this.form.value.comprobanteTotal,
        novedad: false,
        cuneNov: '',
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.nominaIndividualAPISrv
      .saveUsingPOST58(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
          if (data?.type === 4 && data?.status == 200 && data?.body?.bodyDto) {
            this._snackBar.open(
              `Nómina Individual para ${data?.body?.bodyDto?.trabajador?.primerNombre}`,
              'creada!',
              { duration: 5000 }
            );
            this.form.patchValue(data?.body?.bodyDto);
          } else if (data?.type === 4) {
            this._snackBar.open(
              `Nómina Individual para ${data?.body?.bodyDto?.trabajador?.primerNombre}`,
              'no creada!',
              { duration: 5000 }
            );
          }
        },
        error: (err: any) => {
          console.log(err);
          this._snackBar.open(`${err}`, '!no eliminado!', { duration: 5000 });
        },
      });
  }

  get f() {
    return this.form.controls;
  }

  filter(menuItemName: string) {
    this.menuItems = MENU_ITEMS;
    if (menuItemName) {
      this.menuItems = this.menuItems.filter((item) =>
        item.name
          ?.toLocaleLowerCase()
          .includes(menuItemName?.toLocaleLowerCase())
      );
    }
  }

  toggleFullScreen = () =>
    this.stateSrv.toggleFullScreen(this.elRef.nativeElement);

  scrollToElement(el: ElementRef): void {
    // document?.getElementById(el)?.scrollTo({ behavior: "smooth", top: 0 });
    // this.router.navigate([], { fragment: el });
    el.nativeElement.scrollIntoView();
  }

  eliminar = (payroll: Individual) =>
    this.nominaIndividualAPISrv
      .deleteUsingDELETE58(payroll.id, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((general) => {
          this._snackBar.open(`${payroll.nombre}`, 'eliminado!', {
            duration: 500000,
          });
          return of(
            this.navSrv.navigate(
              '/nómina/individual',
              this.form.value.nominaGeneralId
            )
          );
        })
      );

  delete(): void {
    this.subscriptions.push(
      this.confirm(
        `¿Eliminar nómina ${this.form.value.trabajador.primerNombre}!?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion ? this.eliminar(this.form.value.id) : of()
          )
        )
        .subscribe({
          next: (data: any) => {
            if (data.type === 4 && data.status === 200) {
              this._snackBar.open(
                `Nómina individual para ${this.form.value.trabajador.nombre}`,
                'creada!',
                {
                  duration: 500000,
                }
              );
            } else if (data.type === 4) {
              this._snackBar.open(
                `Nómina individual para ${this.form.value.trabajador.nombre}`,
                'creada!',
                {
                  duration: 500000,
                }
              );
            }
          },
          complete: () => {},
          error: (error: any) => console.log(error),
        })
    );
  }

  confirm(pregunta: string, titulo?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        titulo: titulo,
        pregunta: pregunta,
      },
    });

    return dialogRef.afterClosed();
  }
}
