import { SelectionModel } from '@angular/cdk/collections';
import { formatDate } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../../shared/dialog/confirm/confirm-dialog.component';
import { MenuItems } from '../../../../shared/menu-items/menu-items';
import { InMemService } from '../../../../srv/in-mem-service';
import { NavigationService } from '../../../../srv/navigation.service';
import { NominasGeneralesService } from '../../../../srv/payroll/api/rest/nominasGenerales.service';
import { StoredProcedureService } from '../../../../srv/payroll/api/procedure/storedProcedure.service';
import { NgGtdDS } from '../../../../types/common-types';
import { MY_FORMATS } from '../../payroll-individual/payroll-individual-table.component';
import { PayrollGeneralFormComponent } from '../form/payroll-general-form.component';
import { displayedColumns, EMPTY, Payroll } from '../payroll-data';

@Component({
  selector: 'app-payroll-table',
  templateUrl: './payroll-table.component.html',
  styleUrls: ['./payroll-table.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class PayrollTableComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Payroll>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  selection = new SelectionModel<Payroll>(false, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  today = new Date();
  startDate = new Date(
    this.today.getFullYear(),
    this.today.getMonth() + 2,
    this.today.getDate()
  );

  get selected() {
    return this.selection?.selected[0] ?? EMPTY;
  }

  request: any = {
    body: {
      params: {
        businessSubscriptionId:
          '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'obtenerListaNominaGeneral',
    },
  };
  requestCatalogos: any = {
    body: {
      params: {
        codigoCatalogo: '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarValoresCatalogosPorCodigoCatalogo',
    },
  };

  subscriptions: Subscription[];
  JSON = JSON;
  constructor(
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public navSrv: NavigationService,
    private storedProcedureAPISrv: StoredProcedureService,
    private nominaGeneralAPISrv: NominasGeneralesService,
    public menuItemsSrv: MenuItems
  ) {
    this.loading(30);
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
    });

    this.subscriptions = [
      this.storedProcedureAPISrv
        .exectuteProcedureUsingPOST(this.request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .subscribe({
          next: this.readResponseTList,
          complete: this.loading,
          error: this.readResponseError,
        }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  catalogos = this.storedProcedureAPISrv.exectuteProcedureUsingPOST(
    this.request,
    'events',
    true,
    { httpHeaderAccept: 'application/json' }
  );
  eliminar = (payroll: Payroll) =>
    this.nominaGeneralAPISrv
      .deleteUsingDELETE57(payroll.id, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((general) => {
          this._snackBar.open(`${payroll.nombre}`, 'eliminado!', {
            duration: 500000,
          });
          return this.listado;
        })
      );
  listado = this.storedProcedureAPISrv.exectuteProcedureUsingPOST(
    this.request,
    'events',
    true,
    { httpHeaderAccept: 'application/json' }
  );
  readResponseError = (err: any) => {
    console.log(err);
  };
  readResponseTList = (data: any) => {
    this.loading((data?.type ?? 1) * 25);
    if (!data.body) return;
    let newarray = data?.body?.body?.map?.((element: any) => {
      var key,
        keys = Object.keys(element);
      var n = keys.length;
      var newobj: any = {};
      while (n--) {
        key = keys[n];
        if (key.toLowerCase().split('fecha').length > 1) {
          element[key] =
            /* formatDate(element[key], 'full', 'es-Co') */ new Date(
              element[key]
            );
        }
        newobj[`${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`] =
          element[key];
      }
      return newobj;
    });
    console.log(newarray);
    let datasource = new MatTableDataSource<Payroll>(newarray);
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Ver';
      this.paginator._intl.getRangeLabel = (
        page: number,
        pageSize: number,
        length: number
      ) => {
        const pagesize = pageSize > length ? length : pageSize;
        return `Página ${page + 1}`;
      };
    }
    datasource.paginator = this.paginator;
    datasource.sort = this.sort;
    this.dataSource$.next({
      datasource: datasource,
      displayedColumns: displayedColumns,
      loading: 100,
    });
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(payroll: Payroll): void {
    const validations = this.dataSource$.value.datasource.data
      .filter(
        (p: Payroll) =>
          p.fechaCorte === payroll.fechaCorte || p.nombre === payroll.nombre
      )
      .map((p: Payroll) => {
        const mismoCorte =
          p.fechaCorte.getMonth() === payroll.fechaCorte.getMonth() &&
          p.fechaCorte.getUTCFullYear() === payroll.fechaCorte.getUTCFullYear();
        return mismoCorte
          ? `!Fecha corte ${formatDate(p.fechaCorte, 'MM/yyyy', 'es-CO')} asociada a ${p.nombre}!`
          : p.nombre === payroll.nombre
          ? `!'${p.nombre}' ya existe!`
          : undefined;
      });
    if (payroll.nombre.length < 1) {
      this._snackBar.open('Nombre inválido', 'cerrar', { duration: 500000 })
      return;
    }
    if (validations.length > 0) {
      validations.forEach((m) =>
        this._snackBar.open(`${m}`, 'cerrar', { duration: 500000 })
      );
      return;
    }
    if (!payroll) {
      return;
    }
    const request = {
      entidad: {
        nombre: payroll.nombre,
        descripcion: payroll.descripcion,
        estadoId: '487C190C-F0F3-4E4E-9B60-A959C2124CCE',
        fechaCorte: payroll.fechaCorte.toISOString(),
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toISOString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.nominaGeneralAPISrv
        .saveUsingPOST57(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(switchMap((response:any) => {
          if(!(response.type === 4)) return of()
          if(response.type === 4 && response.status == 200)
            this._snackBar.open(`${payroll.nombre}`, 'creada!', {
              duration: 500000,
            });
          return this.listado;
        }))
        .subscribe({
          next: this.readResponseTList,
          complete: this.loading,
          error: this.readResponseError,
        })
    );
  }

  delete(payroll: Payroll): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar ${payroll.nombre}!?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion ? this.eliminar(payroll) : of()
          )
        )
        .subscribe({
          next: this.readResponseTList,
          complete: () => {
            payroll.loading = undefined;
            this.loading;
          },
          error: this.readResponseError,
        })
    );
  }

  edit(payroll: Payroll): void {
    const request = {
      entidad: {
        nombre: payroll.nombre,
        descripcion: payroll.descripcion,
        estadoId: '487C190C-F0F3-4E4E-9B60-A959C2124CCE',
        fechaCorte: payroll.fechaCorte.toISOString(),
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toISOString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
        id: payroll.id,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.nominaGeneralAPISrv
        .updateUsingPUT57(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((general) => {
            this._snackBar.open(`${payroll.nombre}`, 'actualizado!', {
              duration: 500000,
            });
            return this.listado;
          })
        )
        .subscribe({
          next: this.readResponseTList,
          complete: this.loading,
          error: this.readResponseError,
        })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    let datasource = this.dataSource$.value.datasource;
    datasource.filter = filterValue.trim().toLowerCase();

    if (datasource.paginator) {
      datasource.paginator.firstPage();
    }
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  openDialog(payroll?: Payroll): void {
    let datasource = this.dataSource$.value.datasource;
    const editing = datasource.data.filter(
      (v: any) => v.id == payroll?.id
    )?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(PayrollGeneralFormComponent, {
      width: '500px',
      data: editing ? editing : EMPTY,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (payroll) payroll.loading = undefined;
        if (result?.id) this.edit(result);
        else if (result) this.add(result);
      })
    );
  }

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });

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
