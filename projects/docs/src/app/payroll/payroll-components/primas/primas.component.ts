import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InMemService } from '../../../srv/in-mem-service';
import { displayedColumns, EMPTY, Prima, primas } from './prima-data';
import { PrimaFormComponent } from './prima-form.component';

@Component({
  selector: 'app-payroll-primas',
  templateUrl: './primas.component.html',
  styleUrls: ['./prima.component.css'],
})
export class PrimasComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Prima>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = displayedColumns;

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Prima>(primas);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  add(name: Prima): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, 'primas') },
    ];
  }

  delete(prima: Prima): void {
    this.dataSource.data = this.dataSource.data.filter(
      (h) => h.id !== prima.id
    );
    this._snackBar.open(`${prima.id}`, 'deleted!', { duration: 5000 });
  }

  edit(prima: Prima): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== prima.id ? h : prima
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
    const dialogRef = this.dialog.open(PrimaFormComponent, {
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
