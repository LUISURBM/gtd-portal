import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { Menu } from '../../../shared/menu-items/menu-items';
import { AppStateService, UIState } from '../../../srv/app-state.service';
import { NavigationService } from '../../../srv/navigation.service';
import { NominasIndividualesService } from '../../../srv/payroll/api/rest/nominasIndividuales.service';
import { TrabajadoresService } from '../../../srv/payroll/api/rest/trabajadores.service';
import { MENU_ITEMS } from '../payroll-general/payroll-data';

@Component({
  selector: 'app-payroll-individual-view',
  templateUrl: './payroll-individual-view.component.html',
})
export class PayrollindividualViewComponent implements OnInit, OnDestroy {
  position = 'below';
  public menuItems: Menu[];

  form: FormGroup;

  subscriptions: Subscription[] = [];
  get request() {
    return {
      entidad: {
        id: this.form.value.id,
        trabajadorId: this.form.value.trabajadorId,
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
  }

  get isEditing() {
    return (
      this.form.value.id &&
      this.form.value.id != null &&
      this.form.value.id != undefined &&
      this.form.value.id != 'undefined'
    );
  }

  get saveOrUpdate() {
    return !this.isEditing
      ? this.nominaIndividualAPISrv.saveUsingPOST58(
          this.request,
          'events',
          true,
          {
            httpHeaderAccept: 'application/json',
          }
        )
      : this.nominaIndividualAPISrv.updateUsingPUT58(
          this.request,
          'events',
          true,
          {
            httpHeaderAccept: 'application/json',
          }
        );
  }

  constructor(
    public builder: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
    public stateSrv: AppStateService,
    private elRef: ElementRef,
    public navSrv: NavigationService,
    private nominaIndividualAPISrv: NominasIndividualesService,
    private trabajadoresAPISrv: TrabajadoresService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private appState: AppStateService
  ) {
    this.menuItems = MENU_ITEMS;

    const form = this.builder.group({
      menuItem: builder.control(''),
      id: undefined,
      trabajadorId: builder.control(''),
      sueldo: builder.control(0),
      primerNombre: builder.control(''),
      deduccionesId: builder.control(''),
      devengadosId: builder.control(''),
      deduccion: 0,
      devengos: 0,
      totalAPagar: 0,
      nominaGeneralId: builder.control(''),
      nominaIndividualId: undefined,
      fechaCorte: new Date(),
      loading: builder.control(undefined),
    });
    this.loading();
    this.form = form;
    this.subscriptions = [
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = JSON.parse(params['data']);
            this.form.patchValue(data);
            if (data['nominaIndividualId'] === undefined) return of(form.value);
            return nominaIndividualAPISrv
              .findByIdUsingGET58(data['nominaIndividualId'], 'events', true, {
                httpHeaderAccept: 'application/json',
              })
              .pipe(
                switchMap((individual:any) => {
                  if (!individual?.body?.bodyDto?.trabajadorId) return of();
                  return this.trabajadoresAPISrv.findByIdUsingGET70(
                    individual?.body?.bodyDto?.trabajadorId,
                    'events',
                    true
                  );
                })
              );
          })
        )
        .subscribe({
          next: (data: any) => {
            if (data?.type === 4 && data?.status == 200 && data?.body?.bodyDto)
              this.form.patchValue({
                ...data?.body?.bodyDto,
                nominaGeneralId: this.form.value.nominaGeneralId,
                nominaIndividualId: this.form.value.id,
                fechaCorte: this.form.value.fechaCorte,
              });
          },
          complete: () => {
            this.loading();
          },
          error: (err: any) => {
            console.log(err);
          },
        }),
      this.form.valueChanges.subscribe((filter) => {
        this.filter(filter?.menuItem);
      })
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }

  generalData = () => {
    return JSON.stringify({
      nominaGeneralId: this.form.value.nominaGeneralId,
      fechaCorte: this.form.value.fechaCorte,
    });
  };

  individualData = () => {
    return JSON.stringify({
      nominaIndividualId: this.form.value.nominaIndividualId,
      nominaGeneralId: this.form.value.nominaGeneralId,
      fechaCorte: this.form.value.fechaCorte,
      trabajador: this.form.value.trabajador,
      devengadosId: this.form.value.devengadosId,
      deduccionesId: this.form.value.deduccionesId,
    });
  };

  onNoClick(): void {
    this.navSrv.navigate('/nómina/individual', {
      nominaGeneralId: this.form.value.nominaIndividualId,
      fechaCorte: this.form.value.fechaCorte,
    });
  }

  save() {
    if (this.form.errors) {
      return;
    }

    this.saveOrUpdate.subscribe({
      next: (data: any) => {
        console.log(data);
        if (data?.type === 4 && data?.status == 200 && data?.body?.bodyDto) {
          this._snackBar.open(
            `Nómina Individual para ${this.form.value?.primerNombre}`,
            this.isEditing ? 'Actualizada' : 'creada!',
            { duration: 5000 }
          );
          this.form.patchValue(data?.body?.bodyDto);
        } else if (data?.type === 4) {
          this._snackBar.open(
            `Nómina Individual para ${this.form.value?.primerNombre}`,
            'no creada!',
            { duration: 5000 }
          );
        }
      },
      error: (err: any) => {
        console.log(err);
        this._snackBar.open(`${err}`, '!no creado!', { duration: 5000 });
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

  eliminar = (payrollId: string) =>
    this.nominaIndividualAPISrv
      .deleteUsingDELETE58(payrollId, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((response: any) => {
          if (response?.type !== 4) return of();
          if (
            response?.type === 4 &&
            response?.status === 200 &&
            response?.body?.bodyDto?.[0]
          ) {
            this._snackBar.open(
              `${this.form.value.trabajador.primerNombre}`,
              'eliminado!',
              {
                duration: 50000,
              }
            );
            return of(
              this.navSrv.navigate(
                '/nómina/individual',
                this.form.value.nominaGeneralId
              )
            );
          }
          this._snackBar.open(
            `${this.form.value.trabajador.primerNombre}`,
            'no eliminado!',
            {
              duration: 50000,
            }
          );
          return of();
        })
      );

  delete(): void {
    this.subscriptions.push(
      this.confirm(
        `¿Eliminar nómina ${this.form.value.trabajador.primerNombre}!?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.eliminar(this.form.value.nominaIndividualId)
              : of()
          )
        )
        .subscribe({
          next: (data: any) => {
            if (data.type === 4 && data.status === 200) {
              this._snackBar.open(
                `Nómina individual para ${this.form.value.trabajador.nombre}`,
                'creada!',
                {
                  duration: 50000,
                }
              );
            } else if (data.type === 4) {
              this._snackBar.open(
                `Nómina individual para ${this.form.value.trabajador.nombre}`,
                'creada!',
                {
                  duration: 50000,
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

  loading = () =>this.appState.toggleLoading();
}
