import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { NgGtdDS } from '../../../types/common-types';
import {
  Devengados,
  devengados,
  displayedColumns,
  EMPTY,
} from './devengados-data';
import { DevengadosFormComponent } from './devengados-form.component';

@Component({
  selector: 'app-payroll-devengados',
  templateUrl: './devengados.component.html',
  styleUrls: ['./devengados.component.css'],
})
export class DevengadosComponent implements OnInit, AfterViewInit {
  dataSource$: BehaviorSubject<NgGtdDS>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    ,public navSrv: NavigationService
  ) {
    this.dataSource$ = new BehaviorSubject<NgGtdDS>({
      datasource: new MatTableDataSource<Devengados>(devengados),
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

  add(name: Devengados): void {
    if (!name) {
      return;
    }
    let datasource = this.dataSource$.value.datasource;
    datasource.data = [
      ...datasource.data,
      { ...name, id: this.memSrv.genId(datasource.data, 'incapacidads') },
    ];
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  delete(devengados: Devengados): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h) => h.id !== devengados.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${devengados.id}`, 'deleted!', { duration: 2000 });
  }

  edit(devengados: Devengados): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h) =>
      h.id !== devengados.id ? h : devengados
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
    const editing = datasource.data.filter((v) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(DevengadosFormComponent, {
      width: '250px',
      data: editing ? editing : EMPTY,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }
}
