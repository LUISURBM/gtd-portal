import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { InMemService } from '../../../srv/in-mem-service';
import { FilterValueComponent } from '../../../subscription/filter-value.component';
import { Anticipo, anticipos } from './anticipo-data';
import { AnticipoFormComponent } from './anticipo-form.component';

@Component({
  selector: 'app-payroll-anticipo',
  templateUrl: './anticipo.component.html',
  styleUrls: ['./anticipo.component.css']
})
export class AnticipoComponent implements OnInit, AfterViewInit {

  anticipoData: Anticipo[];
  displayedColumns: string[] = ["id", "valor", "fecha", "action"];
  dataSource: MatTableDataSource<Anticipo>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;


  constructor(public memSrv: InMemService
    ,public dialog: MatDialog
    ,private _snackBar: MatSnackBar) {
    this.anticipoData = anticipos;
    this.dataSource = new MatTableDataSource<Anticipo>(anticipos);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    this.openDialog(0);
  }


  add(name: Anticipo): void {
    if (!name) {
      return;
    }
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...name, id: this.memSrv.genId(this.dataSource.data, "anticipos") },
    ];
  }

  delete(anticipo: Anticipo): void {
    this.dataSource.data = this.dataSource.data.filter((h) => h.id !== anticipo.id);
    this._snackBar.open(`${anticipo.id}`, "deleted!", { duration: 5000 });
  }

  edit(anticipo: Anticipo): void {
    const editedData = this.dataSource.data.map((h) =>
      h.id !== anticipo.id ? h : anticipo
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
    const dialogRef = this.dialog.open(AnticipoFormComponent, {
      width: "350px",
      data: editing ? editing : { id: undefined, name: "" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result?.id) this.edit(result);
      else this.add(result);
    });
  }


}
