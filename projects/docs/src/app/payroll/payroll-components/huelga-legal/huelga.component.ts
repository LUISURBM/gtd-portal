import { Basico } from './../basicos/basico-data';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import {
  gtdArrayToLowerCase,
  gtdDate,
  gtdDateTime,
  initTable,
  NgGtdDS,
  OpenDialog,
} from '../../../types/common-types';
import { displayedColumns, Huelga, huelgas } from './huelga-data';
import { HuelgaFormComponent } from './huelga-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HuelgasLegalesService } from '../../../srv/payroll/rest/api';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { AppStateService } from '../../../srv/app-state.service';
import {
  UICreado,
  UIEditado,
  UIEliminado,
  UINoCreado,
  UINoEditado,
} from '../../../values-catalog';

@Component({
  selector: 'app-payroll-huelgas',
  templateUrl: './huelgas.component.html',
  styleUrls: ['./huelgas.component.css'],
})
export class HuelgasComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Huelga>([]),
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
    this.huelgasAPISrv.listFindAllDevengadosUsingGET20(
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
    private huelgasAPISrv: HuelgasLegalesService
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

  add(huelga: Huelga): void {
    if (!huelga) {
      return;
    }

    if (!huelga.fechaInicio || !huelga.fechaFin) {
      this.stateSrv.message(`Fecha inicio/fin son obligatorios`, UINoCreado);
      return;
    }
    if (huelga.fechaInicio > huelga.fechaFin) {
      this.stateSrv.message(
        `Fecha inicio debe ser inferior a Hora fin`,
        UINoCreado
      );
      return;
    }

    const request = {
      entidad: {
        cantidad: huelga.cantidad,
        fechaFin: gtdDateTime(huelga.fechaFin!),
        fechaInicio: gtdDateTime(huelga.fechaInicio!),
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
      this.huelgasAPISrv
        .saveUsingPOST51(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((data: any) => {
            huelga.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Huelga`, UICreado);
              return this.listado(this.form.value);
            }
            return of();
          })
        )
        .subscribe({
          next: this.readResponseTList,
          error: this.readResponseError,
        })
    );
  }

  delete(huelga: Huelga): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar huelga?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.huelgasAPISrv.deleteUsingDELETE51(
                  huelga.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) => {
            huelga.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Huelga`, UIEliminado);
              return this.listado(this.form.value);
            }
            return of();
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

  edit(huelga: Huelga): void {
    if (!huelga) {
      return;
    }

    if (!huelga.fechaInicio || !huelga.fechaFin) {
      this.stateSrv.message(`Fecha inicio/fin son obligatorios`, UINoEditado);
      return;
    }
    if (huelga.fechaInicio > huelga.fechaFin) {
      this.stateSrv.message(
        `Fecha inicio debe ser inferior a Hora fin`,
        UINoEditado
      );
      return;
    }
    const request = {
      entidad: {
        cantidad: huelga.cantidad,
        fechaFin: gtdDateTime(huelga.fechaFin!),
        fechaInicio: gtdDateTime(huelga.fechaInicio!),
        id: huelga.id,
        devengadosId: this.form.value.devengadosId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date()?.toString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.huelgasAPISrv
        .updateUsingPUT51(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((data: any) => {
            huelga.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Huelga`, UIEditado);
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

  openDialog(huelga?: Huelga): void {
    this.subscriptions.push(
      OpenDialog(this.dialog, HuelgaFormComponent, huelga).subscribe(
        (result) => {
          console.log(result);
          if (result?.id) this.edit(result);
          else this.add(result);
        }
      )
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
