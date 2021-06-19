import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
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
import { switchMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../shared/dialog/confirm/confirm-dialog.component';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { NominasIndividualesService } from '../../../srv/payroll/api/rest/nominasIndividuales.service';
import { NgGtdDS } from '../../../types/common-types';
import { displayedColumns, Individual, nominas } from './individual-data';
import { PayrollIndividualFormComponent } from './payroll-individual-form.component';

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

  listado = (data: any) =>
    this.nominaIndividualAPISrv.listFindAllUsingGET53(
      '5B067D71-9EC0-4910-8D53-018850FDED4E',
      data.nominaGeneralId,
      'events',
      true,
      {
        httpHeaderAccept: 'application/json',
      }
    );

  readList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 25);
    console.log(data);
    let newarray = data?.body?.bodyDto?.map?.((element: any) => {
      var key,
        keys = Object.keys(element);
      var n = keys.length;
      var newobj: any = {};
      while (n--) {
        key = keys[n];
        if (key.toLowerCase().split('fecha').length > 1) {
          element[key] = new Date(element[key]);
        }
        newobj[`${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`] =
          element[key];
      }
      return newobj;
    });
    console.log(newarray);
    let datasource = new MatTableDataSource<Individual>(newarray);
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
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public navSrv: NavigationService,
    private nominaIndividualAPISrv: NominasIndividualesService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      estado: '',
      nombre: '',
      nominaGeneralId: '',
    });

    this.subscriptions.push(
      this.form.valueChanges
        .pipe(
          switchMap((data: any) => {
            return this.listado(data);
          })
        )
        .subscribe({
          next: (data: any) => {
            this.readList(data);
          },
          error: (err: any) => {
            console.log(err);
          },
        }),
      this.route.params.subscribe((params) => {
        const data = JSON.parse(params['data']);
        this.form.patchValue(data);
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(payroll: Individual): void {
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
      .pipe(switchMap((response:any) => {
        if(!(response.type === 4)) return of()
        if(response.type === 4 && response.status == 200)
          this._snackBar.open(`${payroll.nombre}`, 'creada!', {
            duration: 500000,
          });
        return this.listado(response)
      }))
        .subscribe({
          next: this.readList,
          complete: this.loading,
          error: console.log,
        });
  }

  delete(payroll: Individual): void {
    this.subscriptions.push(
      this.confirm(`¿Eliminar nómina individual de ${payroll.trabajador}!?`)
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
          switchMap((data: any) =>
            data.type === 4 && data.status === 200
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

  edit(individual: Individual): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h: any) =>
      h.id !== individual.id ? h : individual
    );
    datasource.data = editedData;
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
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

  openDialog(individual: Individual): void {
    let datasource = this.dataSource$.value.datasource;
    const editing = datasource.data.filter(
      (v: any) => v.id == individual.id
    )?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(PayrollIndividualFormComponent, {
      width: '500px',
      data: editing ? editing : EMPTY,
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (individual) individual.loading = undefined;
        if (result?.id) this.edit(result);
        else if (result) this.add(result);
      })
    );
  }

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });

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
