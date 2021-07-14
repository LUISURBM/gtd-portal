import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { LicenciasService } from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  gtdDate,
  gtdDateTime,
  gtdDateTimeInput,
  initTable,
  NgGtdDS,
  OpenDialog,
} from '../../../types/common-types';
import { UINoCreado, UINoEditado } from '../../../values-catalog';
import { displayedColumns, EMPTY, Licencia } from './licencia-data';
import { LicenciaFormComponent } from './licencia-form.component';

@Component({
  selector: 'app-payroll-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css'],
})
export class LicenciaComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Licencia>([]),
    displayedColumns: displayedColumns,
  });

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  readResponseError = (err: any) => {
    console.log(err);
  };

  subscriptions: Subscription[] = [];

  listado = (data: any) =>
    this.licenciasAPISrv.listFindAllDevengadosUsingGET22(
      data?.devengadosId,
      'events',
      true,
      {}
    );
  readResponseTList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 25);
    if (!data.body) return;
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(data?.body?.bodyDto),
      displayedColumns
    );
  };
  constructor(
    public stateSrv: AppStateService,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private licenciasAPISrv: LicenciasService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaGeneralId: undefined,
      devengadosId: undefined,
    });
    this.subscriptions = [
      this.form.valueChanges
        .pipe(
          switchMap((data) => {
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.readResponseTList,
          complete: this.loading,
          error: this.readResponseError,
        }),

      this.route.params.subscribe((params) => {
        const data = JSON.parse(params['data']);
        this.form.patchValue(data);
      }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(licencia: Licencia): void {
    if (!licencia) {
      return;
    }

    if (!licencia.fechaInicio || !licencia.fechaFin) {
      this.stateSrv.message(`Fecha inicio/fin son obligatorios`, UINoCreado);
      return;
    }
    if (licencia.fechaInicio > licencia.fechaFin) {
      this.stateSrv.message(
        `Fecha inicio debe ser inferior a Hora fin`,
        UINoCreado
      );
      return;
    }

    const request = {
      entidad: {
        cantidad: licencia.cantidad,
        fechaFin: gtdDateTime(licencia.fechaFin!),
        fechaInicio: gtdDateTime(licencia.fechaInicio!),
        id: undefined,
        pago: licencia.pago,
        valueCatalogType: licencia.valueCatalogType,
        devengadosId: this.form.value.devengadosId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toDateString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
        cuneNov: '',
        novedad: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };
    this.subscriptions.push(
      this.licenciasAPISrv
        .saveUsingPOST55(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`Licencia`, 'creada!', {
                duration: 50000,
              });

            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.readResponseTList,
          error: this.readResponseError,
        })
    );
  }

  delete(licencia: Licencia): void {
    this.subscriptions.push(
      confirm(this.dialog, `¿Eliminar licencia?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.licenciasAPISrv.deleteUsingDELETE55(
                  licencia.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) => {
            if (!(data.type === 4 && data.status === 200)) return of();
            if (data.type === 4 && data.status !== 200) {
              this._snackBar.open(`Bonificación`, 'No Eliminada!', {
                duration: 50000,
              });
              return of();
            }

            this._snackBar.open(`Bonificación`, 'Eliminada!', {
              duration: 50000,
            });
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: (data: any) => this.readResponseTList(data, 'eliminada!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(licencia: Licencia): void {
    if (!licencia) {
      return;
    }

    if (!licencia.fechaInicio || !licencia.fechaFin) {
      this.stateSrv.message(`Fecha inicio/fin son obligatorios`, UINoEditado);
      return;
    }
    if (licencia.fechaInicio > licencia.fechaFin) {
      this.stateSrv.message(
        `Fecha inicio debe ser inferior a Hora fin`,
        UINoEditado
      );
      return;
    }
    const request = {
      entidad: {
        cantidad: licencia.cantidad,
        fechaFin: gtdDateTime(licencia.fechaFin!),
        fechaInicio: gtdDateTime(licencia.fechaInicio!),
        pago: licencia.pago,
        valueCatalogType: licencia.valueCatalogType,
        id: licencia.id,
        devengadosId: this.form.value.devengadosId,
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
      this.licenciasAPISrv
        .updateUsingPUT55(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`Licencia`, 'actualizado!', {
              duration: 50000,
            });
            return this.listado(this.form.value);
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

  openDialog(licencia?: Licencia): void {
    OpenDialog(
      this.dialog,
      LicenciaFormComponent,
      {
        ...licencia,
        fechaInicio: gtdDate(licencia?.fechaInicio ?? new Date()),
        fechaFin: gtdDate(licencia?.fechaFin ?? new Date()),
      } ?? EMPTY
    ).subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
