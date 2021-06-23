import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { StoredProcedureService } from '../../../srv/payroll/api/procedure/storedProcedure.service';
import { gtdArrayToLowerCase, initTable, NgGtdDS } from '../../../types/common-types';
import {
  Deducciones,
  deducciones,
  displayedColumns,
  EMPTY,
} from './deducciones-data';
import { DeduccionesFormComponent } from './deducciones-form.component';

@Component({
  selector: 'app-payroll-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.scss'],
})
export class DeduccionesComponent implements OnInit, AfterViewInit {
  @ViewChild('formView') formView: any;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<ValuesCatalog>([]),
    displayedColumns: displayedColumns,
  });
  @Input() form?:FormGroup;
  @Input() trabajadorId = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  subscriptions: Subscription[];

  constructor(
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public navSrv: NavigationService,
    storedProcedureAPISrv: StoredProcedureService
  ) {
    const request: any = {
      body: {
        params: {
          nominaIndividualId: 'FE841F95-5FDC-4879-A6BD-EE8C93A82941' as Object,
          trabajadorId: this.trabajadorId as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultarDeduccionesView',
      },
    };

    this.subscriptions = [
      storedProcedureAPISrv
        .exectuteProcedureUsingPOST(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .subscribe((response: any) => {
          console.log(response);
          let valores: ValuesCatalog[] = [];
          response.body?.body?.forEach((b: any) => {
            var key = Object.keys(b)?.[0];
            const data = JSON.parse(b[key])?.[0];
            console.log(data);
            var keys = Object.keys(data);
            var n = keys.length;
            var newobj: any = {};

            while (n--) {
              key = keys[n];
              var valor = data[key];
              if (typeof valor === 'object') {
                var keys1 = Object.keys(valor?.[0]);
                var y = keys1.length;
                while (y--) {
                  if (keys1[y].toLocaleLowerCase().split('id').length > 1)
                    continue;
                  valores.push({
                    id: y + 1,
                    code: valor?.[0]?.[keys1[y]],
                    name: `${keys1[y].charAt(0).toLowerCase()}${keys1[y].substr(
                      1,
                      keys1[y].length
                    )}`,
                  });
                }
              } else {
                if (key.toLocaleLowerCase().split('id').length > 1) continue;
                if (key.toLowerCase().split('fecha').length > 1) {
                  valor = new Date(valor);
                }
                newobj[
                  `${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`
                ] = valor;
                valores.push({
                  id: n + 1,
                  code: valor,
                  name: `${key.charAt(0).toLowerCase()}${key.substr(
                    1,
                    key.length
                  )}`,
                });
              }
            }
            console.log(data);
            console.log(valores);
            initTable(
              this.dataSource$,
              this.paginator,
              this.sort,
              gtdArrayToLowerCase(valores),
              displayedColumns
            );
          });
        }),
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void { }

  add(name: Deducciones): void {
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

  delete(deduccion: Deducciones): void {
    let datasource = this.dataSource$.value.datasource;
    datasource.data = datasource.data.filter((h) => h.id !== deduccion.id);
    this.dataSource$.next({
      ...this.dataSource$.value,
      datasource: datasource,
    });
    this._snackBar.open(`${deduccion.id}`, 'deleted!', { duration: 5000 });
  }

  edit(deduccion: Deducciones): void {
    let datasource = this.dataSource$.value.datasource;
    const editedData = datasource.data.map((h) =>
      h.id !== deduccion.id ? h : deduccion
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
    const dialogRef = this.dialog.open(DeduccionesFormComponent, {
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
