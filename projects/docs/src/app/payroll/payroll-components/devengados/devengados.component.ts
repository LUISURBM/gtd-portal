import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Subscription } from 'rxjs';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { gtdArrayToLowerCase, initTable, NgGtdDS, requestProcedure } from '../../../types/common-types';
import {
  Devengados,
  devengados,
  displayedColumns,
  EMPTY,
} from './devengados-data';
import { DevengadosFormComponent } from './devengados-form.component';
import { StoredProcedureService } from '../../../srv/payroll/api/procedure/storedProcedure.service';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-payroll-devengados',
  templateUrl: './devengados.component.html',
  styleUrls: ['./devengados.component.scss'],
})
export class DevengadosComponent implements OnInit, AfterViewInit {
  @ViewChild('formView') formView: any;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<ValuesCatalog>([]),
    displayedColumns: displayedColumns,
  });
  @Input() form:FormGroup;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  get data() {
    return this.dataSource$?.value?.datasource?.data?.[0];
  }
  subscriptions: Subscription[];
  valores:ValuesCatalog[] =[];

  constructor(
    builder: FormBuilder,
    private route: ActivatedRoute,
    public memSrv: InMemService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public navSrv: NavigationService,
    public http: HttpClient,
    storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = builder.group({
      id: 0,
      primerNombre: builder.control(''),
      trabajadorId: builder.control(''),
      nominaIndividualId: builder.control(''),
    })


    this.subscriptions = [
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = JSON.parse(params['data']);
            this.form.patchValue(data);

            const request: any = {
              body: {
                params: {
                  trabajadorId:
                    'FF841F95-5FDC-4879-A6BD-EE8C93A82943' as Object,
                    nominaIndividualId: 'FE841F95-5FDC-4879-A6BD-EE8C93A82941'/* data['nominaIndividualId'] */ as Object,
                },
              },
              header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarDevengadosTest',
              },
            };

            return storedProcedureAPISrv.exectuteProcedureUsingPOST(
              request,
              'events',
              true
            );
          })
        )
        .subscribe({
          next: (response: any) => {
            console.log(response);
            if (
              response?.type === 4 &&
              response?.status == 200 &&
              response?.body?.body
            ) {
              if (!response?.body?.body) return;
              response.body?.body?.forEach((b: any) => {
                var key = Object.keys(b)?.[0];
                const data = JSON.parse(b[key])?.[0];
                console.log(data);
                var keys = Object.keys(data);
                var n = keys.length;
                var newobj: any = {};

                while (n--) {
                  var gtdMember = keys[n];
                  var valor = data[gtdMember];
                  if (typeof valor === 'object') {
                    var keys1 = Object.keys(valor?.[0]);
                    var y = keys1.length;
                    while (y--) {
                      if (keys1[y].toLocaleLowerCase().split('id').length > 1)
                        continue;
                      this.valores.push({
                        id: y + 1,
                        value: valor?.[0]?.[keys1[y]],
                        code: `${key}${gtdMember}${keys1[y].charAt(0).toLowerCase()}${keys1[y].substr(
                          1,
                          keys1[y].length
                        )}`,
                        name: `${gtdMember}: ${keys1[y].charAt(0).toLowerCase()}${keys1[y].substr(
                          1,
                          keys1[y].length
                        )}`,
                        catalog: typeof valor?.[0]?.[keys1[y]],
                      });
                    }
                  } else {
                    if (gtdMember.toLocaleLowerCase().split('id').length > 1) continue;
                    if (gtdMember.toLowerCase().split('fecha').length > 1) {
                      valor = new Date(valor);
                    }
                    newobj[
                      `${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(1, gtdMember.length)}`
                    ] = valor;
                    this.valores.push({
                      id: n + 1,
                      value: valor,
                      code: `${key}${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(
                        1,
                        gtdMember.length
                      )}`,
                      name: `${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(
                        1,
                        gtdMember.length
                      )}`,
                      catalog: typeof valor,
                    });
                  }
                }
                console.log(data);
                console.log(this.valores);
                initTable(
                  this.dataSource$,
                  this.paginator,
                  this.sort,
                  gtdArrayToLowerCase(this.valores),
                  displayedColumns
                );

              });
            }
          },
          error: (error) => console.log(error),
        })

    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

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
}
