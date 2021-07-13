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
import { BehaviorSubject, forkJoin, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { VacacionesCompensadasService } from '../../../srv/payroll/rest/api';
import { VacacionesComunesService } from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  gtdDate,
  initTable,
  NgGtdDS,
  OpenDialog,
} from '../../../types/common-types';
import { UIEditado, UIEliminado, UINoEditado } from '../../../values-catalog';
import { catalogs, displayedColumns, EMPTY, Vacacion } from './vacacion-data';
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
    this.loading(75);
    if (!(data?.[0]?.body?.bodyDto || data?.[1]?.body?.bodyDto)) return;
    const compensadas = data?.[0]?.body?.bodyDto.map((dto: any) => {
      return { ...dto, valueCatalogName: catalogs[0].name };
    });
    const comunes = data?.[1]?.body?.bodyDto.map((dto: any) => {
      return { ...dto, valueCatalogName: catalogs[1].name };
    });
    const dataarray = [...compensadas, ...comunes];
    this.loading(85);
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(dataarray),
      displayedColumns
    );
    this.loading(100);
  };
  constructor(
    public stateSrv: AppStateService,
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
        fechaFin: vacacion.fechaFin,
        fechaInicio: vacacion.fechaInicio,
        pago: vacacion.pago,
        valueCatalogName: vacacion.valueCatalogName,
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
            if (response.type !== 4) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`${vacacion.valueCatalogName}`, 'creada!', {
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
      confirm(this.dialog, `¿Eliminar vacación ${vacacion.valueCatalogName}?`)
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
        fechaFin: vacacion.fechaFin,
        fechaInicio: vacacion.fechaInicio,
        pago: vacacion.pago,
        valueCatalogName: vacacion.valueCatalogName,
        prevValueCatalogName: vacacion.prevValueCatalogName,
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
        ?.pipe(
          switchMap((response: any) => {
            this._snackBar.open(
              `${vacacion.valueCatalogName}`,
              'actualizado!',
              {
                duration: 50000,
              }
            );
            return this.listado(this.form.value);
          })
        )
        ?.subscribe({
          next: this.readResponseTList,
          complete: this.loading,
          error: this.readResponseError,
        })!
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
    this.subscriptions.push(
      OpenDialog(
        this.dialog,
        VacacionFormComponent,
        vacacion ?? EMPTY
      ).subscribe((result) => {
        console.log(result);
        if (result) result.prevValueCatalogName = vacacion?.valueCatalogName;
        if (result?.id) this.edit(result);
        else this.add(result);
      })
    );
  }

  save = (request: any) => {
    if (request.entidad.valueCatalogName === catalogs[0].name)
      return this.vacacionesCompensadasAPISrv.saveUsingPOST72(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else if (request.entidad.valueCatalogName === catalogs[1].name)
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
    let toReturn;
    if (request.valueCatalogName === catalogs[0].name)
      toReturn = this.vacacionesCompensadasAPISrv.deleteUsingDELETE72(
        request.id,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else if (request.valueCatalogName === catalogs[1].name)
      toReturn = this.vacacionesComunesAPISrv.deleteUsingDELETE73(
        request.id,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    else toReturn = of();
    return toReturn.pipe(
      tap({
        next: () =>
          this.stateSrv.message(`${request.valueCatalogName}`, UIEliminado),
      })
    );
  };
  update = (request: any) => {
    let toReturn;
    if (
      request.entidad.prevValueCatalogName !== request.entidad.valueCatalogName
    ) {
      if (request.entidad.valueCatalogName === catalogs[0].name) {
        toReturn = this.vacacionesComunesAPISrv.deleteUsingDELETE73(
          request.entidad.id,
          'events',
          true,
          {
            httpHeaderAccept: 'application/json',
          }
        );
      } else if (request.entidad.valueCatalogName === catalogs[1].name) {
        toReturn = this.vacacionesCompensadasAPISrv.deleteUsingDELETE72(
          request.entidad.id,
          'events',
          true,
          {
            httpHeaderAccept: 'application/json',
          }
        );
      }
      return toReturn?.pipe(
        switchMap((response: any) =>
          response?.type === 4 && response?.status === 200
            ? this.save(request)
            : of()
        )
      );
    } else if (request.entidad.valueCatalogName === catalogs[0].name) {
      toReturn = this.vacacionesCompensadasAPISrv.updateUsingPUT72(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    } else if (request.entidad.valueCatalogName === catalogs[1].name) {
      toReturn = this.vacacionesComunesAPISrv.updateUsingPUT73(
        request,
        'events',
        true,
        {
          httpHeaderAccept: 'application/json',
        }
      );
    } else {
      toReturn = of();
    }
    return toReturn.pipe(
      tap({
        next: (response: any) => {
          if (
            response?.type === 4 &&
            response?.status === 200 &&
            response?.body?.bodyDto?.[0]
          ) {
            this.stateSrv.message(
              `${request?.entidad?.nombre ?? 'Vacación'}`,
              UIEditado
            );
          } else if (response?.type === 4 && response?.status !== 200) {
            this.stateSrv.message(
              `${request?.entidad?.nombre ?? 'Vacación'}`,
              UINoEditado
            );
          }
        },
      })
    );
  };

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
