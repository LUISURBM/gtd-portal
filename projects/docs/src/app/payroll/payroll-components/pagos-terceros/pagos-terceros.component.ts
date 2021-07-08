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
import { InMemService } from '../../../srv/in-mem-service';
import { PagosTercerosService } from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
} from '../../../types/common-types';
import { displayedColumns, EMPTY, PagoTercero } from './pago-tercero-data';
import { PagoTerceroFormComponent } from './pago-tercero-form.component';

@Component({
  selector: 'app-payroll-pagos-terceros',
  templateUrl: './pagos-terceros.component.html',
  styleUrls: ['./pago-tercero.component.css'],
})
export class PagosTercerosComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<PagoTercero>([]),
    displayedColumns: displayedColumns,
  });

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  readResponseError = (err: any) => {
    console.log(err);
  };

  subscriptions: Subscription[] = [];

  listado = (data: any) =>
    this.pagosTercerosAPISrv.listFindAllDeduccionesUsingGET6(
      data.deduccionesId,
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
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pagosTercerosAPISrv: PagosTercerosService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaGeneralId: undefined,
      deduccionesId: undefined,
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

  add(pagoTercero: PagoTercero): void {
    if (!pagoTercero) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        pagoTercero: pagoTercero.pagoTercero,
        deduccionesId: this.form.value.deduccionesId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018859FDED4E',
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
      this.pagosTercerosAPISrv
        .saveUsingPOST64(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`${pagoTercero.pagoTercero}`, 'creada!', {
                duration: 590000,
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

  delete(pagoTercero: PagoTercero): void {
    this.subscriptions.push(
      confirm(
        this.dialog,
        `¿Eliminar Pago Tercero ${pagoTercero.pagoTercero}?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.pagosTercerosAPISrv.deleteUsingDELETE64(
                  pagoTercero.id,
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

  edit(pagoTercero: PagoTercero): void {
    const request = {
      entidad: {
        pagoTercero: pagoTercero.pagoTercero,
        id: pagoTercero.id,
        deduccionesId: this.form.value.deduccionesId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018859FDED4E',
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
      this.pagosTercerosAPISrv
        .updateUsingPUT64(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`${pagoTercero.pagoTercero}`, 'actualizado!', {
              duration: 590000,
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

  openDialog(pagoTercero?: PagoTercero): void {
    console.log(pagoTercero);
    const dialogRef = this.dialog.open(PagoTerceroFormComponent, {
      width: '459px',
      data: pagoTercero ? pagoTercero : EMPTY,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
