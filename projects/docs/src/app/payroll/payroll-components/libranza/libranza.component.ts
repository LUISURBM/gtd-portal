import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InMemService } from '../../../srv/in-mem-service';
import { LibranzasService } from '../../../srv/payroll/rest/api';
import { confirm, gtdArrayToLowerCase, initTable, NgGtdDS } from '../../../types/common-types';
import { Licencia } from '../licencias/licencia-data';
import { displayedColumns, Libranza, libranzas } from './libranza-data';
import { LibranzaFormComponent } from './libranza-form.component';

@Component({
  selector: 'app-payroll-libranza',
  templateUrl: './libranza.component.html',
  styleUrls: ['./libranza.component.css'],
})
export class LibranzaComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Libranza>([]),
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
    this.libranzasAPISrv.listFindAllDeduccionesIdUsingGET1(data?.deduccionesId, 'events', true, {});
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
    private libranzasAPISrv: LibranzasService
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

  add(libranza: Libranza): void {
    if (!libranza) {
      return;
    }

    const request = {
      entidad: {
        id: undefined,
        deduccion: libranza.deduccion,
        descripcion: libranza.descripcion,
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
      this.libranzasAPISrv
        .saveUsingPOST54(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`${libranza.descripcion}`, 'creada!', {
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

  delete(libranza: Libranza): void {
    this.subscriptions.push(
      confirm(this.dialog, '¿Eliminar libranza?')
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.libranzasAPISrv.deleteUsingDELETE54(
                  libranza.id,
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

  edit(libranza: Libranza): void {
    const request = {
      entidad: {
        deduccion: libranza.deduccion,
        descripcion: libranza.descripcion,
        id: libranza.id,
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
      this.libranzasAPISrv
        .updateUsingPUT54(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`${libranza.descripcion}`, 'actualizado!', {
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

  openDialog(libranza?: Libranza): void {
    console.log(libranza);
    const dialogRef = this.dialog.open(LibranzaFormComponent, {
      width: '450px',
      data: libranza ?? { id: undefined, name: '' },
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
