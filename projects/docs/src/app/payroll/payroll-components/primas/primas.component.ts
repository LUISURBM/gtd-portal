import { SelectionModel } from '@angular/cdk/collections';
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
import { switchMap, tap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { PrimasService } from '../../../srv/payroll/rest/api';
import {
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
  OpenDialog,
} from '../../../types/common-types';
import { displayedColumns, EMPTY, Prima } from './prima-data';
import { PrimaFormComponent } from './prima-form.component';

@Component({
  selector: 'app-prima-primas',
  templateUrl: './primas.component.html',
  styleUrls: ['./prima.component.css'],
})
export class PrimasComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup = new FormGroup({});

  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Prima>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  selection = new SelectionModel<Prima>(false, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  today = new Date();
  startDate = new Date(
    this.today.getFullYear(),
    this.today.getMonth() + 2,
    this.today.getDate()
  );

  get selected() {
    return this.selection?.selected[0] ?? EMPTY;
  }

  subscriptions: Subscription[] = [];

  JSON = JSON;

  listado = (data: any) =>
    this.primasAPISrv
      .listFindAllUsingGET16(data.devengadosId, 'events', true)
      .pipe(
        tap({
          next: (x: any) => this.avance((x?.type ?? 1) * 25),
          error: (err) => {
            console.error(err);
          },
        })
      );

  readList = (data: any, message?: string) => {
    this.avance((data?.type ?? 1) * 25);
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
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    private primasAPISrv: PrimasService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      estado: '',
      nombre: '',
      devengadosId: '',
      nominaGeneralId: '',
    });

    this.subscriptions.push(
      this.form.valueChanges.pipe(switchMap(this.listado)).subscribe({
        next: this.readList,
        complete: this.avance,
        error: console.log,
      }),
      this.route.params.subscribe((params) =>
        this.form.patchValue(JSON.parse(params['data']))
      )
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(prima: Prima): void {
    if (!prima) {
      return;
    }

    const request = {
      entidad: {
        cantidad: prima.cantidad,
        pagoNs: prima.pagoNs,
        pago: prima.pago,
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

    this.primasAPISrv
      .saveUsingPOST66(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((response: any) => {
          if (!(response.type === 4)) return of();
          if (response.type === 4 && response.status == 200)
            this._snackBar.open(`Prima`, 'creada!', {
              duration: 50000,
            });
          return this.listado(this.form.value);
        })
      )
      .subscribe({
        next: this.readList,
        complete: this.avance,
        error: console.log,
      });
  }

  delete(prima: Prima): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar Prima?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.primasAPISrv.deleteUsingDELETE66(
                  prima.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) =>
            data?.type === 4 && data?.status === 200
              ? this.listado(this.form.value)
              : of()
          )
        )
        .subscribe({
          next: (data: any) => this.readList(data, 'eliminada!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(prima: Prima): void {
    const request = {
      entidad: {
        id: prima.id,
        cantidad: prima.cantidad,
        pagoNs: prima.pagoNs,
        pago: prima.pago,
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
      this.primasAPISrv
        .updateUsingPUT66(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`Prima`, 'actualizado!', {
              duration: 50000,
            });
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.readList,
          complete: this.avance,
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

  openDialog(prima?: Prima): void {
    const dialogRef = this.dialog.open(PrimaFormComponent, {
      width: '500px',
      data: prima,
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (prima) prima.loading = undefined;
        if (result?.id) this.edit(result);
        else if (result) this.add(result);
      })
    );
  }

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  avance = (loading?: any) => {
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
  };

  confirm(pregunta: string, titulo?: string) {
    return OpenDialog(this.dialog, ConfirmDialogComponent, {
      titulo: titulo,
      pregunta: pregunta,
    });
  }
}
