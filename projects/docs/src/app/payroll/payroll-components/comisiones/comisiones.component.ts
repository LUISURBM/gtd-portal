import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { ComisionFormComponent } from './comision-form.component';
import { Comision, comisiones } from './comisiones-data';

@Component({
  selector: 'app-payroll-comision',
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent implements OnInit, AfterViewInit {
  libranzasData: Comision[];

  displayedColumns: string[] = ['id', 'comision', 'action'];
  dataSource: MatTableDataSource<Comision>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Comision>(comisiones);
    this.libranzasData = comisiones;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: Comision): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'comisiones') },
    ];
  }

  delete(libranza: Comision): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== libranza.id
    );
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 5000 });
  }

  edit(libranza: Comision): void {
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
    const dialogRef = this.dialog.open(ComisionFormComponent, {
      width: '450px',
      data: editing ? editing : { id: undefined, name: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }
}
