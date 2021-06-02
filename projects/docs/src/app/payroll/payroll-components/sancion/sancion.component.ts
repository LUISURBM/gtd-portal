import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { Sancion, sanciones } from './sancion-data';
import { SancionFormComponent } from './sancion-form.component';

@Component({
  selector: 'app-payroll-sancion',
  templateUrl: './sancion.component.html',
  styleUrls: ['./sancion.component.css'],
})
export class SancionComponent implements OnInit, AfterViewInit {
  sancionesData: Sancion[];

  displayedColumns: string[] = ['id', 'sancionPriv', 'sancionPublic', 'action'];
  dataSource: MatTableDataSource<Sancion>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Sancion>(sanciones);
    this.sancionesData = sanciones;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: Sancion): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'sanciones') },
    ];
  }

  delete(sancion: Sancion): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== sancion.id
    );
    this._snackBar.open(`${sancion.id}`, 'deleted!', { duration: 2000 });
  }

  edit(sancion: Sancion): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== sancion.id ? h : sancion
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
    const dialogRef = this.dialog.open(SancionFormComponent, {
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
