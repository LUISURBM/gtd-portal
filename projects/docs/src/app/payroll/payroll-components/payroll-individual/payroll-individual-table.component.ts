import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { NgGtdDS } from '../../../types/common-types';
import { Individual, nominas, displayedColumns } from './individual-data';
import { PayrollIndividualFormComponent } from './payroll-individual-form.component';
import { StoredProcedureService } from '../../../srv/payroll/api/storedProcedure.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

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
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class PayrollIndividualTableComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Individual>(nominas),
    displayedColumns: displayedColumns,
  })

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

  constructor(
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public navSrv: NavigationService
    ,private storedProcedureAPISrv: StoredProcedureService
    ) {
    this.form = this.formBuilder.group({
      filtro: '',
      periodo: this.formBuilder.group({
        id: 1,
        fechaGen: new Date(),
        fechaIngreso: new Date(),
        fechaLiquidacion: new Date(),
        fechaLiquidacionInicio: new Date(),
        fechaLiquidacionFin: new Date(),
        fechaRetiro: new Date(),
        tiempoLaborado: new Date(),
      }),
    });

    const request: any = {
      body: {
        params: {
          businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
          nominaGeneralId: '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultarListNominasIndividualesTest',
      },
    };

    storedProcedureAPISrv
      .exectuteProcedureUsingPOST(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .subscribe({
        next: (data:any) => {console.log(data);
        let newarray = data?.body?.body?.map((element: any) => {
          var key,
            keys = Object.keys(element);
          var n = keys.length;
          var newobj: any = {};
          while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = element[key];
          }
          return newobj;
        });


        this.dataSource$.next({
          datasource: new MatTableDataSource<Individual>(newarray),
          displayedColumns: displayedColumns,
        });
      },
        error: (err: any) => {
          console.log(err);
        }
      });
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

  add(name: Individual): void {
    if (!name) {
      return;
    }
    let datasource = this.dataSource$.value.datasource;
    datasource.data = [
      ...datasource.data,
      { ...name, id: this.memSrv.genId(datasource.data, 'nominas') },
    ];
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  delete(libranza: Individual): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h: any) => h.id !== libranza.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 2000 });
  }

  edit(libranza: Individual): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h: any) =>
      h.id !== libranza.id ? h : libranza
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

  openDialog(id?: number): void {
    let datasource = this.dataSource$.value.datasource;
    const editing = datasource.data.filter((v: any) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(PayrollIndividualFormComponent, {
      width: '500px',
      data: editing ? editing : EMPTY,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }
}
