import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { InMemService } from '../../../srv/in-mem-service';
import { PeriodosService } from '../../../srv/payroll/rest/api';
import { gtdArrayToLowerCase, initTable, NgGtdDS } from '../../../types/common-types';
import { Nota } from '../notas/notas-data';
import { displayedColumns, Periodo } from './periodo-data';
import { PeriodoFormComponent } from './periodo-form.component';

@Component({
  selector: 'app-payroll-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodo.component.css'],
})
export class PeriodosComponent implements OnInit, AfterViewInit {
  @ViewChild('formView') formView: any;
  form: FormGroup;


  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Periodo>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  subscriptions: Subscription[];

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    public periodosAPISrv: PeriodosService
  ) {
    this.avance(0);
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaIndividualId: ''
    });
    this.avance(10);
    this.subscriptions = [
      this.listado().subscribe({
        next: this.leerListado,
        complete: this.avance,
        error: this.readResponseError,
      }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  eliminar = (nota: Periodo) =>
    this.periodosAPISrv
      .deleteUsingDELETE65(nota.id, 'events', true, {
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
            this._snackBar.open(`Periodo`, 'eliminada!', {
              duration: 50000,
            });
            return this.listado();
          }
          this._snackBar.open(`Periodo`, 'no eliminada!', {
            duration: 50000,
          });
          return of();
        })
      );
  listado = () => {
    this.avance(20);
    return this.periodosAPISrv.listFindAllUsingGET41(
      this.form.value.nominaIndividualId,
      'events',
      true
    );
  };
  readResponseError = (err: any) => {
    console.log(err);
  };
  leerListado = (data?: any) => {
    this.avance((data?.type ?? 1) * 15);
    if (!data.body) return;
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(data?.body?.body),
      displayedColumns
    );
    this.avance(100);
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(periodo: Periodo): void {
    const validations = this.dataSource$.value.datasource.data
      .filter((p: Periodo) => p.fechaIngreso.getMonth() === periodo.fechaIngreso.getMonth())
      .map((p: Periodo) => {
        return `${periodo.fechaIngreso.getMonth()}' ya existe!`;
      });
    if (!periodo.fechaIngreso) {
      this._snackBar.open('Periodo inválido', 'cerrar', { duration: 50000 });
      return;
    }
    if (validations.length > 0) {
      validations.forEach((m:string) =>
        this._snackBar.open(`${m}`, 'cerrar', { duration: 50000 })
      );
      return;
    }
    if (!periodo) {
      return;
    }
    const request = {
      entidad: {
        fechaGen: periodo.fechaGen.toISOString(),
        fechaIngreso: periodo.fechaIngreso.toISOString(),
        fechaLiquidacion: periodo.fechaLiquidacion.toISOString(),
        fechaLiquidacionInicio: periodo.fechaLiquidacionInicio.toISOString(),
        fechaLiquidacionFin: periodo.fechaLiquidacionFin.toISOString(),
        fechaRetiro: periodo.fechaRetiro.toISOString(),
        tiempoLaborado: periodo.tiempoLaborado,
        nominaIndividualId: this.form.value.nominaIndividualId,
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
      this.periodosAPISrv
        .saveUsingPOST65(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`Periodo`, 'creada!', {
                duration: 50000,
              });
            return this.listado();
          })
        )
        .subscribe({
          next: this.leerListado,
          complete: () => this.avance(92),
          error: this.readResponseError,
        })
    );
  }

  delete(periodo: Periodo): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar Periodo'!?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion ? this.eliminar(periodo) : of()
          )
        )
        .subscribe({
          next: this.leerListado,
          complete: () => {
            periodo.loading = undefined;
            this.avance;
          },
          error: this.readResponseError,
        })
    );
  }

  edit(periodo: Periodo): void {
    const request = {
      entidad: {
        id: periodo.id,
        fechaGen: periodo.fechaGen.toISOString(),
        fechaIngreso: periodo.fechaIngreso.toISOString(),
        fechaLiquidacion: periodo.fechaLiquidacion.toISOString(),
        fechaLiquidacionInicio: periodo.fechaLiquidacionInicio.toISOString(),
        fechaLiquidacionFin: periodo.fechaLiquidacionFin.toISOString(),
        fechaRetiro: periodo.fechaRetiro.toISOString(),
        tiempoLaborado: periodo.tiempoLaborado,
        nominaIndividualId: this.form.value.nominaIndividualId,
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
      this.periodosAPISrv
        .updateUsingPUT65(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((general) => {
            this._snackBar.open(`Nota`, 'actualizado!', {
              duration: 50000,
            });
            return this.listado();
          })
        )
        .subscribe({
          next: this.leerListado,
          complete: this.avance,
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

  openDialog(nota?: Nota): void {
    const dialogRef = this.dialog.open(PeriodoFormComponent, {
      width: '500px',
      data: nota ?? { nota: '' },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (nota) nota.loading = undefined;
        if (result?.id) this.edit(result);
        else if (result) this.add(result);
      })
    );
  }

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  loading: number | undefined = 0;
  avance = (loading?: number) => {
    this.loading = loading;
  };

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
