import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import {
  displayedColumns,
  EMPTY,
  OtraDeduccion,
  otrasDeducciones,
} from './otra-deduccion-data';
import { OtraDeduccionFormComponent } from './otra-deduccion-form.component';

@Component({
  selector: 'app-payroll-otras-deducciones',
  templateUrl: './otras-deducciones.component.html',
  styleUrls: ['./otra-deduccion.component.css'],
})
export class OtrasDeduccionesComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<OtraDeduccion>;
  displayedColumns = displayedColumns;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<OtraDeduccion>(otrasDeducciones);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: OtraDeduccion): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      {
        ...name,
        id: this.memSrv.genId(this.dataSource.data, 'otrasDeducciones'),
      },
    ];
  }

  delete(libranza: OtraDeduccion): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== libranza.id
    );
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 2000 });
  }

  edit(libranza: OtraDeduccion): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== libranza.id ? h : libranza
    );
    this.dataSource.data = editedData;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(id?: number): void {
    const editing = this.dataSource.data.filter((v) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(OtraDeduccionFormComponent, {
      width: '450px',
      data: editing ? editing : EMPTY,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }
}
