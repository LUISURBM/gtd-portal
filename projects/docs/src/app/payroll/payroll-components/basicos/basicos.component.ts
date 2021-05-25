import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import { NgGtdDS } from '../../../types/common-types';
import { Basico, basicos, displayedColumns, EMPTY } from './basico-data';
import { BasicoFormComponent } from './basico-form.component';
import { BasicoService } from '../../../service/mgmt/basicos/basicos';

@Component({
  selector: 'app-payroll-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basico.component.css'],
})
export class BasicosComponent implements OnInit, AfterViewInit {
  dataSource$: BehaviorSubject<NgGtdDS>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private basicoService:BasicoService
  ) {
    this.dataSource$ = new BehaviorSubject<NgGtdDS>({
      datasource: new MatTableDataSource<Basico>(basicos),
      displayedColumns: displayedColumns,
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.basicoService.getAllHuelgas()
    .subscribe(response => {

      console.log(response);
      let datasource = new MatTableDataSource<Basico>(response);
      datasource.paginator = this.paginator;
      datasource.sort = this.sort;
      this.dataSource$.next({
        ...this.dataSource$.value,
        datasource: datasource,
      });

    });

  }

  add(basico: Basico): void {
    if (!basico) {
      return;
    }
    this.basicoService.save(basico);
  }

  delete(basico: Basico): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h) => h.id !== basico.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${basico.id}`, 'deleted!', { duration: 2000 });
  }

  edit(basico: Basico): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h) =>
      h.id !== basico.id ? h : basico
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
    const dialogRef = this.dialog.open(BasicoFormComponent, {
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
