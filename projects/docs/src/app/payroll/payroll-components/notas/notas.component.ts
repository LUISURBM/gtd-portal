import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { NotaFormComponent } from './nota-form.component';
import { Nota, notas } from './notas-data';

@Component({
  selector: 'app-payroll-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit, AfterViewInit {
  libranzasData: Nota[];

  displayedColumns: string[] = ['id', 'nota', 'action'];
  dataSource: MatTableDataSource<Nota>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Nota>(notas);
    this.libranzasData = notas;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: Nota): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'notas') },
    ];
  }

  delete(libranza: Nota): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== libranza.id
    );
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 2000 });
  }

  edit(libranza: Nota): void {
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
    const dialogRef = this.dialog.open(NotaFormComponent, {
      width: '250px',
      data: editing ? editing : { id: undefined, name: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }
}
