import { Component, ElementRef, OnDestroy } from '@angular/core';
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
import { NominasIndividualesService } from '../../../srv/payroll/rest/api';
import {
  gtdIsNull,
  gtdNombreCompleto,
  confirm,
  gtdScrollEvent,
} from '../../../types/common-types';
import { MENU_ITEMS } from '../payroll-general/payroll-data';
import { MENU_ITEMS as ITEMS_DEDUCCIONES } from '../deducciones/deducciones-data';
import { MENU_ITEMS as ITEMS_DEVENGADOS } from '../devengados/devengados-data';

@Component({
  selector: 'app-payroll-individual-view',
  templateUrl: './payroll-individual-view.component.html',
  styleUrls: ['./payroll-individual-view.component.scss'],
})
export class PayrollindividualViewComponent implements OnDestroy {
  position = 'below';
  public menuItems: Menu[];

  form: FormGroup;

  isDirty$: any;
  subscriptions: Subscription[] = [];
  get request() {
    return {
      entidad: {
        id: this.form.value.id,
        trabajadorId: this.form.value.trabajador.id,
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
  deduccionesItems = ITEMS_DEDUCCIONES;
  devengadosItems = ITEMS_DEVENGADOS;
  constructor(
    public builder: FormBuilder,
    public dialog: MatDialog,
    public router: Router,
    public stateSrv: AppStateService,
    private elRef: ElementRef,
    public navSrv: NavigationService,
    private nominaIndividualAPISrv: NominasIndividualesService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.menuItems = MENU_ITEMS;

    const form = this.builder.group({
      menuItem: builder.control(''),
      id: undefined,
      sueldo: builder.control(0),
      trabajador: builder.group({
        id: builder.control(''),
        primerNombre: builder.control(''),
        sueldo: builder.control(''),
      }),
      deduccionesId: builder.control(''),
      devengadosId: builder.control(''),
      deduccion: 0,
      devengos: 0,
      totalAPagar: 0,
      nominaGeneralId: builder.control(''),
      nominaIndividualId: undefined,
      fechaCorte: new Date(),
      loading: builder.control(true),
    });
    this.form = form;

    this.subscriptions = [
      this.form.valueChanges.subscribe({
        next: (data) => this.filter(data?.menuItem),
      }),
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = params['data']? JSON.parse(params['data']) : params;
            this.form.patchValue(data);
            if (gtdIsNull(data['nominaIndividualId'])) return of(form.value);
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
            if (data.loading) this.loading();
            if (data?.type === 4 && data?.status == 200 && data?.body?.bodyDto)
              this.form.patchValue({
                ...data?.body?.bodyDto,
                loading: false,
                trabajador: {
                  id: data?.body?.bodyDto?.trabajador?.id,
                  primerNombre: gtdNombreCompleto(
                    data?.body?.bodyDto?.trabajador
                  ),
                },
                nominaGeneralId: this.form.value.nominaGeneralId,
                nominaIndividualId: this.form.value.nominaIndividualId,
                fechaCorte: this.form.value.fechaCorte,
              });
          },
          complete: () => {
            console.log('💨 individual-view');
          },
          error: (err: any) => {
            console.log(err);
          },
        }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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
      primerNombre: this.form.value.trabajador.primerNombre,
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
            `Nómina Individual para ${this.form.value?.trabajador.primerNombre}`,
            this.isEditing ? 'Actualizada' : 'creada!',
            { duration: 5000 }
          );
          this.form.patchValue(data?.body?.bodyDto);
        } else if (data?.type === 4) {
          this._snackBar.open(
            `Nómina Individual para ${this.form.value?.trabajador.primerNombre}`,
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
      confirm(
        this.dialog,
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

  loading = () =>
    this.form.patchValue({
      ...this.form.value,
      loading: !this.form.value.loading,
    });
}
