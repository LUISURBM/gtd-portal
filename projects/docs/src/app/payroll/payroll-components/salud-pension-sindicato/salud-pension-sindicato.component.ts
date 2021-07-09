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
import { SaludPensionSindicatosService } from '../../../srv/payroll/rest/api';
import { confirm, NgGtdDS } from '../../../types/common-types';
import {
  displayedColumns,
  EMPTY,
  SaludPensionSindicato
} from './salud-pension-sindicato-data';
import { SaludPensionSindicatoFormComponent } from './salud-pension-sindicato-form.component';

@Component({
  selector: 'app-payroll-salud-pension-sindicato',
  templateUrl: './salud-pension-sindicato.component.html',
  styleUrls: ['./salud-pension-sindicato.component.css'],
})
export class SaludPensionSindicatosComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<SaludPensionSindicato>([]),
    displayedColumns: displayedColumns,
  });

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  leerError = (err: any) => {
    console.log(err);
  };

  subscriptions: Subscription[] = [];

  listado = (data: any) =>
    this.saludPensionSindicatosAPISrv.listFindAllDeduccionesUsingGET7(
      data.deduccionesId,
      'events',
      true,
      {}
    );
  leerLista = (data: any, message?: string) => {
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
    let datasource = new MatTableDataSource<SaludPensionSindicato>(newarray);
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
    public stateSrv: AppStateService,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private saludPensionSindicatosAPISrv: SaludPensionSindicatosService
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
          next: this.leerLista,
          complete: this.loading,
          error: this.leerError,
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

  add(saludPensionSindicato: SaludPensionSindicato): void {
    if (!saludPensionSindicato) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        deduccion: saludPensionSindicato.deduccion!,
        porcentaje: saludPensionSindicato.porcentaje!,
        valueCatalogType: saludPensionSindicato.valueCatalogType!,
        deduccionesId: this.form.value.deduccionesId,
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
      this.saludPensionSindicatosAPISrv
        .saveUsingPOST68(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(
                `${saludPensionSindicato.valueCatalogType}`,
                'creada!',
                {
                  duration: 50000,
                }
              );

            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.leerLista,
          error: this.leerError,
        })
    );
  }

  delete(saludPensionSindicato: SaludPensionSindicato): void {
    this.subscriptions.push(
      confirm(
        this.dialog,
        `¿Eliminar salud, Pension & Sindicato?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.saludPensionSindicatosAPISrv.deleteUsingDELETE68(
                  saludPensionSindicato.id,
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
          next: (data: any) => this.leerLista(data, 'eliminada!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(saludPensionSindicato: SaludPensionSindicato): void {
    const request = {
      entidad: {
        id: saludPensionSindicato.id,
        deduccion: saludPensionSindicato.deduccion!,
        porcentaje: saludPensionSindicato.porcentaje,
        valueCatalogType: saludPensionSindicato.valueCatalogType!,
        deduccionesId: this.form.value.deduccionesId,
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
      this.saludPensionSindicatosAPISrv
        .updateUsingPUT68(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(
              `${saludPensionSindicato.valueCatalogType}`,
              'actualizado!',
              {
                duration: 50000,
              }
            );
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.leerLista,
          complete: this.loading,
          error: this.leerError,
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

  openDialog(saludPensionSindicato?: SaludPensionSindicato): void {
    const dialogRef = this.dialog.open(SaludPensionSindicatoFormComponent, {
      width: '450px',
      data: saludPensionSindicato ?? EMPTY,
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
