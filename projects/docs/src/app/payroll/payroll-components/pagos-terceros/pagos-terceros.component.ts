import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { pagosTerceros, PagoTercero, displayedColumns, EMPTY } from './pago-tercero-data';
import { PagoTerceroFormComponent } from './pago-tercero-form.component';

@Component({
  selector: 'app-payroll-pagos-terceros',
  templateUrl: './pagos-terceros.component.html',
  styleUrls: ['./pago-tercero.component.css'],
})
export class PagosTercerosComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<PagoTercero>;
  displayedColumns = displayedColumns;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<PagoTercero>(pagosTerceros);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: PagoTercero): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'pagosTerceros') },
    ];
  }

  delete(libranza: PagoTercero): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== libranza.id
    );
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 5000 });
  }

  edit(libranza: PagoTercero): void {
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
    const dialogRef = this.dialog.open(PagoTerceroFormComponent, {
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
