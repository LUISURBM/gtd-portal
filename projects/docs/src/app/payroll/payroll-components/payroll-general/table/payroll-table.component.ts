import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { InMemService } from '../../../../srv/in-mem-service';
import { NavigationService } from '../../../../srv/navigation.service';
import { NgGtdDS } from '../../../../types/common-types';

import { BehaviorSubject } from 'rxjs';
import { displayedColumns, EMPTY, nominas, Payroll } from '../payroll-data';
import { PayrollGeneralFormComponent } from '../payroll-general.component';

@Component({
  selector: 'app-payroll-table',
  templateUrl: './payroll-table.component.html',
  styleUrls: ['./payroll-table.component.css'],
})
export class PayrollTableComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dataSource$: BehaviorSubject<NgGtdDS>;

  selection = new SelectionModel<Payroll>(false, []);

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
    this.dataSource$ = new BehaviorSubject<NgGtdDS>({
      datasource: new MatTableDataSource<Payroll>(nominas),
      displayedColumns: displayedColumns,
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

  add(name: Payroll): void {
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

  delete(libranza: Payroll): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h: any) => h.id !== libranza.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 2000 });
  }

  edit(libranza: Payroll): void {
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
    const dialogRef = this.dialog.open(PayrollGeneralFormComponent, {
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
