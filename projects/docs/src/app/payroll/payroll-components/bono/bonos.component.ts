import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import { NgGtdDS } from '../../../types/common-types';
import { Bono, bonos, displayedColumns, EMPTY } from './bono-data';
import { BonoEPCTVFormComponent } from './bono-form.component';

@Component({
  selector: 'app-payroll-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bono.component.css'],
})
export class BonosEPCTVComponent implements OnInit, AfterViewInit {
  dataSource$: BehaviorSubject<NgGtdDS>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource$ = new BehaviorSubject<NgGtdDS>({
      datasource: new MatTableDataSource<Bono>(bonos),
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

  add(name: Bono): void {
    if (!name) {
      return;
    }
    let datasource = this.dataSource$.value.datasource;
    datasource.data = [
      ...datasource.data,
      { ...name, id: this.memSrv.genId(datasource.data, 'bonosEPCTV') },
    ];
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  delete(libranza: Bono): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h) => h.id !== libranza.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 2000 });
  }

  edit(libranza: Bono): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h) =>
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
    const editing = datasource.data.filter((v) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(BonoEPCTVFormComponent, {
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