import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { InMemService } from '../../../srv/in-mem-service';
import { FechasPagosService } from '../../../srv/payroll/rest/api';
import { NgGtdDS, initTable, gtdArrayToLowerCase } from '../../../types/common-types';
import { NotaFormComponent } from '../notas/nota-form.component';
import { FechaPagoFormComponent } from './fecha-pago-form.component';
import { FechaPago, fechaPagos,displayedColumns } from './fechas-pago-data';


@Component({
  selector: 'app-payroll-fechas-pago',
  templateUrl: './fechas-pago.component.html',
  styleUrls: ['./fechas-pago.component.css']
})
export class FechasPagoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('formView') formView: any;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<FechaPago>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  form: FormGroup;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  subscriptions: Subscription[];

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    public fechasPagosAPISrv: FechasPagosService
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

    eliminar = (fechaPago: FechaPago) =>
      this.fechasPagosAPISrv
        .deleteUsingDELETE48(fechaPago.id, 'events', true, {
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
              this._snackBar.open(`Fecha Pago`, 'eliminada!', {
                duration: 50000,
              });
              return this.listado();
            }
            this._snackBar.open(`Fecha Pago`, 'no eliminada!', {
              duration: 50000,
            });
            return of();
          })
        );
    listado = () => {
      this.avance(20);
      return this.fechasPagosAPISrv.listFindAllNominaIndividualIdUsingGET1(
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
        gtdArrayToLowerCase(data?.body?.bodyDto),
        displayedColumns
      );
      this.avance(100);
    };

    ngOnInit(): void {}

    ngAfterViewInit(): void {}

    add(fechaPago: FechaPago): void {
      const validations = this.dataSource$.value.datasource.data
        .filter((n: FechaPago) => n.fechaPago === fechaPago.fechaPago)
        .map((n: FechaPago) => {
          return n.fechaPago === fechaPago.fechaPago ? `${fechaPago.fechaPago}' ya existe!` : undefined;
        });
      if (!fechaPago.fechaPago) {
        this._snackBar.open('FechaPago inválido', 'cerrar', { duration: 50000 });
        return;
      }
      if (validations.length > 0) {
        validations.forEach((m) =>
          this._snackBar.open(`${m}`, 'cerrar', { duration: 50000 })
        );
        return;
      }
      if (!fechaPago) {
        return;
      }
      const request = {
        entidad: {
          fechaPago: fechaPago.fechaPago.toISOString(),
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
        this.fechasPagosAPISrv
          .saveUsingPOST48(request, 'events', true, {
            httpHeaderAccept: 'application/json',
          })
          .pipe(
            switchMap((response: any) => {
              if (!(response.type === 4)) return of();
              if (response.type === 4 && response.status == 200)
                this._snackBar.open(`Fecha Pago`, 'creada!', {
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

    delete(fechaPago: FechaPago): void {
      this.subscriptions.push(
        this.confirm(`¿Eliminar '${fechaPago.fechaPago}'!?`)
          .pipe(
            switchMap((confirmacion) =>
              confirmacion ? this.eliminar(fechaPago) : of()
            )
          )
          .subscribe({
            next: this.leerListado,
            complete: () => {
              fechaPago.loading = undefined;
              this.avance;
            },
            error: this.readResponseError,
          })
      );
    }

    edit(fechaPago: FechaPago): void {
      const request = {
        entidad: {
          fechaPago: fechaPago.fechaPago.toISOString(),
          nominaIndividualId: this.form.value.nominaIndividualId,
          businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
          enabled: true,
          eventDate: new Date().toISOString(),
          eventType: 'CREATE',
          eventUser: 'LFUM',
          removed: false,
          id: fechaPago.id,
        },
        headerRequest: {
          cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        },
      };

      this.subscriptions.push(
        this.fechasPagosAPISrv
          .updateUsingPUT48(request, 'events', true, {
            httpHeaderAccept: 'application/json',
          })
          .pipe(
            switchMap((general) => {
              this._snackBar.open(`FechaPago`, 'actualizado!', {
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

    openDialog(fechaPago?: FechaPago): void {
      const dialogRef = this.dialog.open(NotaFormComponent, {
        width: '500px',
        data: fechaPago ?? { fechaPago: '' },
      });

      this.subscriptions.push(
        dialogRef.afterClosed().subscribe((result) => {
          console.log(result);
          if (fechaPago) fechaPago.loading = undefined;
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
