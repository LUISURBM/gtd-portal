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
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { HorariosAdicionalesService } from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdApiDateTime,
  gtdArrayToLowerCase, gtdDateTime,
  gtdDateTimeInput,
  initTable,
  NgGtdDS,
  OpenDialog
} from '../../../types/common-types';
import { UICreado, UIEliminado, UINoCreado, UINoEditado } from '../../../values-catalog';
import {
  displayedColumns, HorarioAdicional
} from './horario-adicional-data';
import { HorarioAdicionalFormComponent } from './horario-adicional-form.component';

@Component({
  selector: 'app-payroll-horarios-adicionales',
  templateUrl: './horarios-adicionales.component.html',
  styleUrls: ['./horario-adicional.component.css'],
})
export class HorariosAdicionalesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<HorarioAdicional>([]),
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
    this.horariosAdicionalesAPISrv.findAllDevengadoIdUsingGET3(
      data?.devengadosId,
      'events',
      true,
      {}
    );
  readResponseTList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 15);
    if (!data.body) return;
    this.loading(85);
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
    private horariosAdicionalesAPISrv: HorariosAdicionalesService
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

  ngAfterViewInit(): void {}

  add(horarioAdicional: HorarioAdicional) {
    if (!horarioAdicional) {
      return;
    }
    if (!horarioAdicional.horaFin || !horarioAdicional.horaInicio) {
      this.stateSrv.message(`Hora inicio/fin son obligatorios`, UINoCreado);
      return;
    }

    const hFin = new Date(Date.parse(horarioAdicional.horaFin));
    const hInicio = new Date(Date.parse(horarioAdicional.horaInicio));
    if (hInicio > hFin) {
      this.stateSrv.message(
        `Hora inicio debe ser inferior a Hora fin`,
        UINoCreado
      );
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        cantidad: horarioAdicional.cantidad!,
        pago: horarioAdicional.pago!,
        porcentaje: horarioAdicional.porcentaje!,
        horaInicio: gtdApiDateTime(horarioAdicional.horaInicio!),
        horaFin: gtdApiDateTime(horarioAdicional.horaFin!),
        valueCatalogType: horarioAdicional.valueCatalogType!,
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
      this.horariosAdicionalesAPISrv
        .saveUsingPOST50(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((data: any) => {
            horarioAdicional.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Horario Adicional`, UICreado);
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

  delete(horarioAdicional: HorarioAdicional): void {
    this.subscriptions.push(
      confirm(
        this.dialog,
        `¿Eliminar horarioAdicional ${horarioAdicional.catalog}?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.horariosAdicionalesAPISrv.deleteUsingDELETE50(
                  horarioAdicional.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) => {
            horarioAdicional.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Horario Adicional`, UIEliminado);
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

  edit(horarioAdicional: HorarioAdicional): void {
    if (!horarioAdicional) {
      return;
    }
    if (!horarioAdicional.horaFin || !horarioAdicional.horaInicio) {
      this.stateSrv.message(`Hora inicio/fin son obligatorios`, UINoEditado);
      return;
    }

    const hFin = new Date(Date.parse(horarioAdicional.horaFin));
    const hInicio = new Date(Date.parse(horarioAdicional.horaInicio));
    if (hInicio > hFin) {
      this.stateSrv.message(
        `Hora inicio debe ser inferior a Hora fin`,
        UINoEditado
      );
      return;
    }
    const request = {
      entidad: {
        id: horarioAdicional.id,
        cantidad: horarioAdicional.cantidad,
        pago: horarioAdicional.pago,
        porcentaje: horarioAdicional.porcentaje,
        horaInicio: gtdApiDateTime(horarioAdicional.horaInicio!),
        horaFin: gtdApiDateTime(horarioAdicional.horaFin!),
        valueCatalogType: horarioAdicional.valueCatalogType!,
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
      this.horariosAdicionalesAPISrv
        .updateUsingPUT50(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((data: any) => {
            horarioAdicional.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              this.stateSrv.message(`Horario Adicional`, UICreado);
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

  openDialog(horarioAdicional?: HorarioAdicional): void {
    this.subscriptions.push(
      OpenDialog(this.dialog, HorarioAdicionalFormComponent, {
        ...horarioAdicional,
        horaInicio: gtdDateTimeInput(horarioAdicional?.horaInicio ?? new Date()),
        horaFin: gtdDateTimeInput(horarioAdicional?.horaFin ?? new Date()),
      }).subscribe((result) => {
        console.log(result);
        if (result?.id) this.edit(result);
        else this.add(result);
      })
    );
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
