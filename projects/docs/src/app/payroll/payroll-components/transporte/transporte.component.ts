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
import { TransportesService } from '../../../srv/payroll/api/rest/transportes.service';
import { confirm, NgGtdDS } from '../../../types/common-types';
import { displayedColumns, Transporte } from './transporte-data';
import { TransporteFormComponent } from './transporte-form.component';

@Component({
  selector: 'app-payroll-transportes',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css'],
})
export class TransportesComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Transporte>([]),
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
    this.transportesAPISrv.listFindAllUsingGET65(
      data.devengadosId,
      'events',
      true,
      {}
    );
  readResponseTList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 25);
    if (!data.body) return;
    let newarray = data?.body?.bodyDto?.map?.((element: any) => {
      var key,
        keys = Object.keys(element);
      var n = keys.length;
      var newobj: any = {};
      while (n--) {
        key = keys[n];
        if (key.toLowerCase().split('fecha').length > 1) {
          element[key] =
            /* formatDate(element[key], 'full', 'es-Co') */ new Date(
              element[key]
            );
        }
        newobj[`${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`] =
          element[key];
      }
      return newobj;
    });
    console.log(newarray);
    let datasource = new MatTableDataSource<Transporte>(newarray);
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Ver';
      this.paginator._intl.getRangeLabel = (
        page: number,
        pageSize: number,
        length: number
      ) => {
        const pagesize = pageSize > length ? length : pageSize;
        return `Página ${page + 1}`;
      };
    }
    datasource.paginator = this.paginator;
    datasource.sort = this.sort;
    this.dataSource$.next({
      datasource: datasource,
      displayedColumns: displayedColumns,
      loading: 100,
    });
  };

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private transportesAPISrv: TransportesService
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
            return this.listado(data);
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

  add(transporte: Transporte): void {
    if (!transporte) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        auxilioTransporte: transporte.auxilioTransporte,
        viaticoManutAlojNS: transporte.viaticoManutAlojNS,
        viaticoManutAlojS: transporte.viaticoManutAlojS,
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
      this.transportesAPISrv
        .saveUsingPOST71(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(
                `${transporte.auxilioTransporte}`,
                'creado!',
                {
                  duration: 500000,
                }
              );

            return this.listado(response);
          })
        )
        .subscribe({
          next: this.readResponseTList,
          error: this.readResponseError,
        })
    );
  }

  delete(transporte: Transporte): void {
    this.subscriptions.push(
      confirm(
        this.dialog,
        `¿Eliminar transporte ${transporte.auxilioTransporte}!?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.transportesAPISrv.deleteUsingDELETE71(
                  transporte.id,
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

  edit(transporte: Transporte): void {
    const request = {
      entidad: {
        id: transporte.id,
        auxilioTransporte: transporte.auxilioTransporte,
        viaticoManutAlojNS: transporte.viaticoManutAlojNS,
        viaticoManutAlojS: transporte.viaticoManutAlojS,
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
      this.transportesAPISrv
        .updateUsingPUT71(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(
              `${transporte.auxilioTransporte}`,
              'actualizado!',
              {
                duration: 500000,
              }
            );
            return this.listado(response);
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

  openDialog(transporte?: Transporte): void {
    console.log(transporte);
    const dialogRef = this.dialog.open(TransporteFormComponent, {
      width: '450px',
      data: transporte ? transporte : { id: undefined, name: '' },
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
