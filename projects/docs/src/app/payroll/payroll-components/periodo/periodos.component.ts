import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { displayedColumns, EMPTY, Periodo, periodos } from './periodo-data';
import { PeriodoFormComponent } from './periodo-form.component';

@Component({
  selector: 'app-payroll-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodo.component.css'],
})
export class PeriodosComponent implements OnInit, AfterViewInit {
  periodosData: Periodo[];

  displayedColumns = displayedColumns;
  dataSource: MatTableDataSource<Periodo>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Periodo>(periodos);
    this.periodosData = periodos;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: Periodo): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'periodos') },
    ];
  }

  delete(periodo: Periodo): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== periodo.id
    );
    this._snackBar.open(`${periodo.id}`, 'deleted!', { duration: 2000 });
  }

  edit(periodo: Periodo): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== periodo.id ? h : periodo
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
    const dialogRef = this.dialog.open(PeriodoFormComponent, {
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
