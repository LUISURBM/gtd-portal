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
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { InMemService } from '../../../srv/in-mem-service';
import { IncapacidadesService } from '../../../srv/payroll/api/rest/api';
import { gtdArrayToLowerCase, initTable, NgGtdDS } from '../../../types/common-types';
import {
  displayedColumns,
  Incapacidad,
  incapacidads,
  EMPTY,
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
    initTable(this.dataSource$, this.paginator, this.sort, gtdArrayToLowerCase(data?.body?.bodyDto), displayedColumns);
  };
  subscriptions: Subscription[];
  constructor(
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

    const request = {
      entidad: {
        cantidad: incapacidad.cantidad,
        fechaFin: incapacidad.fechaFin?.toISOString(),
        fechaInicio: incapacidad.fechaInicio?.toISOString(),
        id: undefined,
        pago: incapacidad.pago,
        tipo: incapacidad.tipo,
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
        switchMap((response: any) => {
          if (!(response.type === 4)) return of();
          if (response.type === 4 && response.status == 200)
            this._snackBar.open(`${incapacidad.tipo}`, 'creada!', {
              duration: 50000,
            });

          return this.listado(this.form.value);
        })
      )
      .subscribe({
        next: this.readResponseTList,
        error: this.readResponseError,
      });
  }

  delete(incapacidad: Incapacidad): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar incapacidad ${incapacidad.tipo}!?`)
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
          switchMap((data: any) =>
            data.type === 4 && data.status === 200
              ? this.listado(this.form.value)
              : of()
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
    const request = {
      entidad: {
        cantidad: incapacidad.cantidad,
        fechaFin: incapacidad.fechaFin?.toISOString(),
        fechaInicio: incapacidad.fechaInicio?.toISOString(),
        id: incapacidad.id,
        pago: incapacidad.pago,
        tipo: incapacidad.tipo,
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
          switchMap((response: any) => {
            this._snackBar.open(`${incapacidad.tipo}`, 'actualizada!', {
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

  openDialog(incapacidad?: Incapacidad): void {
    const dialogRef = this.dialog.open(IncapacidadFormComponent, {
      width: '450px',
      data: incapacidad ?? EMPTY,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
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
