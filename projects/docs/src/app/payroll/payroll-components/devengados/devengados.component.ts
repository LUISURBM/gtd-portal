import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { NgGtdDS } from '../../../types/common-types';
import {
  Devengados,
  devengados,
  displayedColumns,
  EMPTY,
} from './devengados-data';
import { DevengadosFormComponent } from './devengados-form.component';
import { StoredProcedureService } from '../../../srv/payroll/api/storedProcedure.service';

@Component({
  selector: 'app-payroll-devengados',
  templateUrl: './devengados.component.html',
  styleUrls: ['./devengados.component.scss'],
})
export class DevengadosComponent implements OnInit, AfterViewInit {
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Devengados>(devengados),
    displayedColumns: displayedColumns,
  });

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  private payrollDataUrl = environment.API_GATEWAY;

  get data() {
    return this.dataSource$?.value?.datasource?.data?.[0];
  }

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public navSrv: NavigationService,
    public http: HttpClient,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    const request: any = {
      body: {
        params: {
          trabajadorId: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943' as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultarDevengadosTest',
      },
    };

    storedProcedureAPISrv
      .exectuteProcedureUsingPOST(request, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .subscribe((data) => {
        console.log(data);
      });

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: '82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68',
      }),
    };
    this.http
      .post<any>(
        this.payrollDataUrl + 'documents/payrolls/procedure',
        request,
        httpOptions
      )
      .subscribe((data: any) => {
        console.dir(data);
        let newarray = data?.body.map((element: any) => {
          var key,
            keys = Object.keys(element);
          var n = keys.length;
          var newobj: any = {};
          while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = element[key];
          }
          return newobj;
        });

        this.dataSource$.next({
          datasource: new MatTableDataSource<Devengados>(newarray),
          displayedColumns: displayedColumns,
        });
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.paginator = this.paginator;
    datasource.sort = this.sort;
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  add(name: Devengados): void {
    if (!name) {
      return;
    }
    let datasource = this.dataSource$.value.datasource;
    datasource.data = [
      ...datasource.data,
      { ...name, id: this.memSrv.genId(datasource.data, 'incapacidads') },
    ];
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  delete(devengados: Devengados): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h) => h.id !== devengados.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${devengados.id}`, 'deleted!', { duration: 2000 });
  }

  edit(devengados: Devengados): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h) =>
      h.id !== devengados.id ? h : devengados
    );
    datasource.data = editedData;
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    let datasource = this.dataSource$.value.datasource;
    datasource.filter = filterValue.trim().toLowerCase();

    if (datasource.paginator) {
      datasource.paginator.firstPage();
    }
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
  }

  openDialog(id?: number): void {
    let datasource = this.dataSource$.value.datasource;
    const editing = datasource.data.filter((v) => v.id == id)?.[0];
    console.log(editing);
    const dialogRef = this.dialog.open(DevengadosFormComponent, {
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
