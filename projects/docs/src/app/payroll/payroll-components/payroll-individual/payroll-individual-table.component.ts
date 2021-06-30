import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, EMPTY, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AppStateService } from '../../../srv/app-state.service';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import {
  NominasIndividualesService,
  StoredProcedureService
} from '../../../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
  txtEliminar
} from '../../../types/common-types';
import { displayedColumns, Individual } from './individual-data';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-payroll-individual-table',
  templateUrl: './payroll-individual-table.component.html',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayrollIndividualTableComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  form: FormGroup = new FormGroup({});
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Individual>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  selection = new SelectionModel<Individual>(false, []);

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

  get request(): any {
    return {
      body: {
        params: {
          businessSubscriptionId:
            '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
          nominaGeneralId: this.form.value.nominaGeneralId as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultarListNominasIndividualesTest',
      },
    };
  }

  listado = (data: any) =>
    this.procedureAPISrv
      .exectuteProcedureUsingPOST1(this.request, 'events', true)
      .pipe(
        tap({
          next: (x) => this.avance((x?.type ?? 1) * 25),
          complete: () => this.avance(),
          error: (err) => {
            console.error(err);
          },
        })
      );

  readList = (data: any, message?: string) => {
    if (!data.body) return;
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(data?.body?.body),
      displayedColumns
    );
  };

  constructor(
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    private nominaIndividualAPISrv: NominasIndividualesService,
    public procedureAPISrv: StoredProcedureService,
    public stateSrv: AppStateService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      estado: '',
      nombre: '',
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

  async add(payroll: Individual): Promise<void> {
    if (!payroll) {
      return;
    }

    const request = {
      entidad: {
        nombre: payroll.nombre,
        descripcion: payroll.descripcion,
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

    this.nominaIndividualAPISrv
      .saveUsingPOST58(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((response: any) => {
          if (!(response.type === 4)) return of();
          if (response.type === 4 && response.status == 200)
            this._snackBar.open(`${payroll.nombre}`, 'creada!', {
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

  delete(payroll: Individual): void {
    this.subscriptions.push(
      confirm(
        this.dialog,
        `¿Eliminar nómina individual de ${payroll.trabajador}!?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.nominaIndividualAPISrv.deleteUsingDELETE58(
                  payroll.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) => {
            payroll.loading = undefined;
            if (data?.type === 4 && data?.status === 200) {
              return this.listado(this.form.value);
            }
            return of();
          })
        )
        .subscribe({
          next: (data: any) => this.readList(data, 'eliminada!'),
          complete: () => {
            payroll.loading = undefined;
            this.avance;
          },
          error: (err: any) => {
            console.log(err);
          },
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

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  avance = (loading?: any) => {
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
  };
  txtEliminar = (payroll: Individual) =>
    txtEliminar(
      this.stateSrv.textos?.PreguntaEliminadoNE?.name ?? "¿Eliminar 'P_1'?",
      'Nómina Individual'
    );
}
