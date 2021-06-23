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
import { BonosEPCTVService } from '../../../srv/payroll/api/rest/bonosEPCTV.service';
import { LicenciasService } from '../../../srv/payroll/api/rest/licencias.service';
import { confirm, gtdArrayToLowerCase, initTable, NgGtdDS } from '../../../types/common-types';
import { Bono, bonos, displayedColumns, EMPTY } from './bono-data';
import { BonoEPCTVFormComponent } from './bono-form.component';

@Component({
  selector: 'app-payroll-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bono.component.css'],
})
export class BonosEPCTVComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Bono>(bonos),
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
    this.bonosAPISrv.listFindAllDevengadosUsingGET16( data?.devengadosId, 'events', true, {});
  readResponseTList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 25);
    if (!data.body) return;
    initTable(this.dataSource$, this.paginator, this.sort, gtdArrayToLowerCase(data?.body?.bodyDto), displayedColumns);
  };

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private bonosAPISrv: BonosEPCTVService
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

  add(bono: Bono): void {
    if (!bono) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        pagoAlimentacionNS: bono.pagoAlimentacionNS,
        pagoAlimentacionS: bono.pagoAlimentacionS,
        pagoNS: bono.pagoNS,
        pagoS: bono.pagoS,
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
      this.bonosAPISrv
        .saveUsingPOST41(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`Bono`, 'creado!', {
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

  delete(bono: Bono): void {
    this.subscriptions.push(
      confirm(this.dialog, `¿Eliminar bono!?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.bonosAPISrv.deleteUsingDELETE41(bono.id, 'events', true, {
                  httpHeaderAccept: 'application/json',
                })
              : of()
          ),
          switchMap((data: any) =>
            data.type === 4 && data.status === 200
              ? this.listado(this.form.value)
              : of()
          )
        )
        .subscribe({
          next: (data: any) => this.readResponseTList(data, 'eliminado!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(bono: Bono): void {
    const request = {
      entidad: {
        id: bono.id,
        pagoAlimentacionNS: bono.pagoAlimentacionNS,
        pagoAlimentacionS: bono.pagoAlimentacionS,
        pagoNS: bono.pagoNS,
        pagoS: bono.pagoS,
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
      this.bonosAPISrv
        .updateUsingPUT41(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`Bono`, 'actualizado!', {
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

  openDialog(bono?: Bono): void {
    const dialogRef = this.dialog.open(BonoEPCTVFormComponent, {
      width: '450px',
      data: bono ?? EMPTY,
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
