import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
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
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { IncapacidadesService } from '../../../srv/payroll/rest/api';
import {
  gtdArrayToLowerCase, gtdDate,
  gtdDateTime,
  initTable,
  NgGtdDS,
  OpenDialog
} from '../../../types/common-types';
import { UICreado, UIEditado, UIEliminado, UINoCreado, UINoEditado } from '../../../values-catalog';
import {
  displayedColumns, EMPTY, Incapacidad
} from './incapacidad-data';
import { IncapacidadFormComponent } from './incapacidad-form.component';

@Component({
  selector: 'app-payroll-incapacidades',
  templateUrl: './incapacidades.component.html',
  styleUrls: ['./incpacidad.component.css'],
})
export class IncapacidadesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Incapacidad>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  readResponseError = (err: any) => {
    console.log(err);
  };

  listado = (data: any) =>
    this.incapacidadesAPISrv.listFindAllDevengadosUsingGET21(
      data.devengadosId,
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
  subscriptions: Subscription[];
  constructor(
    public stateSrv: AppStateService,
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private incapacidadesAPISrv: IncapacidadesService
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

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  add(incapacidad: Incapacidad): void {
    if (!incapacidad) {
      return;
    }

    if (!incapacidad.fechaInicio || !incapacidad.fechaFin) {
      this.stateSrv.message(`Fecha inicio/fin son obligatorios`, UINoCreado);
      return;
    }
    if (incapacidad.fechaInicio > incapacidad.fechaFin) {
      this.stateSrv.message(
        `Fecha inicio debe ser inferior a Hora fin`,
        UINoCreado
      );
      return;
    }
    const request = {
      entidad: {
        cantidad: incapacidad.cantidad,
        fechaFin: gtdDateTime(incapacidad.fechaFin!),
        fechaInicio: gtdDateTime(incapacidad.fechaInicio!),
        id: undefined,
        pago: incapacidad.pago,
        valueCatalogType: incapacidad.valueCatalogType,
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

    this.incapacidadesAPISrv
      .saveUsingPOST52(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((data: any) => {
          incapacidad.loading = undefined;
          if (data?.type === 4 && data?.status === 200) {
            this.stateSrv.message(`Incapacidad`, UICreado);
            return this.listado(this.form.value);
          }
          return of();
        })
      )
      .subscribe({
        next: this.readResponseTList,
        error: this.readResponseError,
      });
  }

  delete(incapacidad: Incapacidad): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar incapacidad?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.incapacidadesAPISrv.deleteUsingDELETE52(
                  incapacidad.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) =>{
            incapacidad.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Incapacidad`, UIEliminado);
              return this.listado(this.form.value);
            }
            return of();
          }
          )
        )
        .subscribe({
          next: (data: any) => this.readResponseTList(data, 'eliminada!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(incapacidad: Incapacidad): void {
    if (!incapacidad) {
      return;
    }

    if (!incapacidad.fechaInicio || !incapacidad.fechaFin) {
      this.stateSrv.message(`Fecha inicio/fin son obligatorios`, UINoEditado);
      return;
    }
    if (incapacidad.fechaInicio > incapacidad.fechaFin) {
      this.stateSrv.message(
        `Fecha inicio debe ser inferior a Hora fin`,
        UINoEditado
      );
      return;
    }
    const request = {
      entidad: {
        cantidad: incapacidad.cantidad,
        fechaFin: gtdDateTime(incapacidad.fechaFin!),
        fechaInicio: gtdDateTime(incapacidad.fechaInicio!),
        id: incapacidad.id,
        pago: incapacidad.pago,
        valueCatalogType: incapacidad.valueCatalogType,
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
      this.incapacidadesAPISrv
        .updateUsingPUT52(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((data: any) => {
            incapacidad.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Incapacidad`, UIEditado);
              return this.listado(this.form.value);
            }
            return of();
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

  openDialog(incapacidad?: Incapacidad): void {
    this.subscriptions.push(
      OpenDialog(
        this.dialog,
        IncapacidadFormComponent,
        incapacidad ?? EMPTY
      ).subscribe((result) => {
        console.log(result);
        if (result?.id) this.edit(result);
        else this.add(result);
      })
    );
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
