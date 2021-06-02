import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { FechaPagoFormComponent } from './fecha-pago-form.component';
import { FechaPago, fechaPagos } from './fechas-pago-data';


@Component({
  selector: 'app-payroll-fechas-pago',
  templateUrl: './fechas-pago.component.html',
  styleUrls: ['./fechas-pago.component.css']
})
export class FechasPagoComponent implements OnInit, AfterViewInit {
  libranzasData: FechaPago[];

  displayedColumns: string[] = ['id', 'fechaPago', 'action'];
  dataSource: MatTableDataSource<FechaPago>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<FechaPago>(fechaPagos);
    this.libranzasData = fechaPagos;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: FechaPago): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'fechasPagos') },
    ];
  }

  delete(libranza: FechaPago): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== libranza.id
    );
    this._snackBar.open(`${libranza.id}`, 'deleted!', { duration: 2000 });
  }

  edit(libranza: FechaPago): void {
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
    const dialogRef = this.dialog.open(FechaPagoFormComponent, {
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
