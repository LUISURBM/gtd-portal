import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { Totales, totales, displayedColumns } from './totales-data';
import { TotalesFormComponent } from './totales-form.component';

@Component({
  selector: 'app-payroll-totales',
  templateUrl: './totales.component.html',
  styleUrls: ['./totales.component.css'],
})
export class TotalesComponent implements OnInit, AfterViewInit {
  totalesData: Totales[];
  displayedColumns = displayedColumns;

  dataSource: MatTableDataSource<Totales>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Totales>(totales);
    this.totalesData = totales;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: Totales): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'totales') },
    ];
  }

  delete(totales: Totales): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== totales.id
    );
    this._snackBar.open(`${totales.id}`, 'deleted!', { duration: 5000 });
  }

  edit(totales: Totales): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== totales.id ? h : totales
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
    const dialogRef = this.dialog.open(TotalesFormComponent, {
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
