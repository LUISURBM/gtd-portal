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
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { AnticiposService } from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  gtdEmptyEntity,
  initTable,
  NgGtdDS,
} from '../../../types/common-types';
import { UIEliminado } from '../../../values-catalog';
import { Anticipo, displayedColumns } from './anticipo-data';
import { AnticipoFormComponent } from './anticipo-form.component';

@Component({
  selector: 'app-payroll-anticipo',
  templateUrl: './anticipo.component.html',
  styleUrls: ['./anticipo.component.css'],
})
export class AnticipoComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Anticipo>([]),
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
    data?.deduccionesId &&
    data?.deduccionesId != null &&
    data?.deduccionesId != undefined &&
    data?.deduccionesId != 'undefined'
      ? this.anticiposAPISrv.listFindAllDeduccionesUsingGET4(
          data?.deduccionesId,
          'events',
          true,
          {}
        )
      : this.anticiposAPISrv.listFindAllDevengadosUsingGET14(
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
    private anticiposAPISrv: AnticiposService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaGeneralId: undefined,
      devengadosId: undefined,
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

  add(anticipo: Anticipo): void {
    if (!anticipo) {
      return;
    }
    if (gtdEmptyEntity(anticipo)) {
      return;
    }
    const request = {
      entidad: {
        id: undefined,
        anticipo: anticipo.anticipo,
        devengadosId:
          this.form.value.devengadosId &&
          this.form.value.devengadosId != null &&
          this.form.value.devengadosId != undefined &&
          this.form.value.devengadosId != 'undefined'
            ? this.form.value.devengadosId
            : undefined,
        deduccionesId:
          this.form.value.deduccionesId &&
          this.form.value.deduccionesId != null &&
          this.form.value.deduccionesId != undefined &&
          this.form.value.deduccionesId != 'undefined'
            ? this.form.value.deduccionesId
            : undefined,
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
      this.anticiposAPISrv
        .saveUsingPOST37(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`Anticipo`, 'creado!', {
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

  delete(anticipo: Anticipo): void {
    this.subscriptions.push(
      confirm(this.dialog, `¿Eliminar anticipo?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.anticiposAPISrv.deleteUsingDELETE37(
                  anticipo.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((response: any) => {
            if (response?.type !== 4) return of();
            if (response?.type === 4 && response?.status === 200) {
              this.stateSrv.message(`Anticipo`, UIEliminado);
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

  edit(anticipo: Anticipo): void {

    if (gtdEmptyEntity(anticipo)) {
      return;
    }
    const request = {
      entidad: {
        id: anticipo.id,
        anticipo: anticipo.anticipo,
        devengadosId:
          this.form.value.devengadosId &&
          this.form.value.devengadosId != null &&
          this.form.value.devengadosId != undefined &&
          this.form.value.devengadosId != 'undefined'
            ? this.form.value.devengadosId
            : undefined,
        deduccionesId:
          this.form.value.deduccionesId &&
          this.form.value.deduccionesId != null &&
          this.form.value.deduccionesId != undefined &&
          this.form.value.deduccionesId != 'undefined'
            ? this.form.value.deduccionesId
            : undefined,
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
      this.anticiposAPISrv
        .updateUsingPUT37(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`Anticipo`, 'actualizado!', {
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

  openDialog(anticipo?: Anticipo): void {
    console.log(anticipo);
    const dialogRef = this.dialog.open(AnticipoFormComponent, {
      width: '450px',
      data: anticipo ?? { id: undefined, name: '' },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (result?.id) this.edit(result);
        else this.add(result);
      })
    );
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
