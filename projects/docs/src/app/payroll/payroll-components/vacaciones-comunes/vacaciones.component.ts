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
import { forkJoin } from 'rxjs';
import {
  BehaviorSubject,
  merge,
  Observable,
  of,
  scheduled,
  Subscription,
} from 'rxjs';
import { mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { InMemService } from '../../../srv/in-mem-service';
import { VacacionesCompensadasService } from '../../../srv/payroll/api/rest/vacacionesCompensadas.service';
import { VacacionesComunesService } from '../../../srv/payroll/api/rest/vacacionesComunes.service';
import {
  confirm,
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
} from '../../../types/common-types';
import {
  catalogs,
  displayedColumns,
  Vacacion,
  vacaciones,
} from './vacacion-data';
import { VacacionFormComponent } from './vacacion-form.component';

@Component({
  selector: 'app-payroll-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css'],
})
export class VacacionesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('formView') formView: any;
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Vacacion>([]),
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
    forkJoin([
      this.vacacionesCompensadasAPISrv.listFindAllDevengadosUsingGET26(
        data?.devengadosId,
        'events',
        true
      ),
      this.vacacionesComunesAPISrv.listFindAllDevengadosUsingGET27(
        data?.devengadosId,
        'events',
        true
      ),
    ]);
  readResponseTList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 25);
    if (!data.body) return;
    const dataarray = [
      ...data?.[0]?.body?.bodyDto,
      ...data?.[1]?.body?.bodyDto,
    ];
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(dataarray),
      displayedColumns
    );
  };
  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private vacacionesCompensadasAPISrv: VacacionesCompensadasService,
    private vacacionesComunesAPISrv: VacacionesComunesService
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
        console.log(data);
        this.form.patchValue(data);
      }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.paginator = this.paginator;
    datasource.sort = this.sort;
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  add(vacacion: Vacacion): void {
    if (!vacacion) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        cantidad: vacacion.cantidad,
        fechaFin: vacacion.fechaFin.toISOString(),
        fechaInicio: vacacion.fechaInicio.toISOString(),
        pago: vacacion.pago,
        valueCatalogTipo: vacacion.catalog,
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
      this.save(request)
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`${vacacion.catalog}`, 'creada!', {
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

  delete(vacacion: Vacacion): void {
    this.subscriptions.push(
      confirm(this.dialog, `¿Eliminar vacación ${vacacion.catalog}!?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion ? this.remove(vacacion) : of()
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

  edit(vacacion: Vacacion): void {
    const request = {
      entidad: {
        cantidad: vacacion.cantidad,
        fechaFin: vacacion.fechaFin.toISOString(),
        fechaInicio: vacacion.fechaInicio.toISOString(),
        pago: vacacion.pago,
        valueCatalogTipo: vacacion.catalog,
        id: vacacion.id,
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
      this.update(request)
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`${vacacion.catalog}`, 'actualizado!', {
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

  openDialog(vacacion?: Vacacion): void {
    const dialogRef = this.dialog.open(VacacionFormComponent, {
      width: '450px',
      data: vacacion ?? { id: undefined, name: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }

  save = (request: any) => {
    if (request.entidad.valueCatalogTipo === catalogs[0].code)
      return this.vacacionesCompensadasAPISrv.saveUsingPOST72(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else if (request.entidad.valueCatalogTipo === catalogs[1].code)
      return this.vacacionesComunesAPISrv.saveUsingPOST73(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else return of();
  };

  remove = (request: any) => {
    if (request.entidad.valueCatalogTipo === catalogs[0].code)
      return this.vacacionesCompensadasAPISrv.deleteUsingDELETE72(
        request.id,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else if (request.entidad.valueCatalogTipo === catalogs[1].code)
      return this.vacacionesComunesAPISrv.deleteUsingDELETE73(
        request.id,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else return of();
  };
  update = (request: any) => {
    if (request.entidad.valueCatalogTipo === catalogs[0].code)
      return this.vacacionesCompensadasAPISrv.updateUsingPUT72(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else if (request.entidad.valueCatalogTipo === catalogs[1].code)
      return this.vacacionesComunesAPISrv.updateUsingPUT73(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else return of();
  };

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
