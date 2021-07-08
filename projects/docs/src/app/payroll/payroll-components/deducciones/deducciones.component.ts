import {
  AfterViewInit,
  Component, OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { InMemService } from '../../../srv/in-mem-service';
import { NavigationService } from '../../../srv/navigation.service';
import { StoredProcedureService } from '../../../srv/payroll/rest/api';
import {
  gtdArrayToLowerCase,
  gtdExtractDataProcedure,
  initTable,
  NgGtdDS
} from '../../../types/common-types';
import {
  displayedColumns
} from './deducciones-data';

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
  form: FormGroup;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  subscriptions: Subscription[];

  constructor(
    builder: FormBuilder,
    public memSrv: InMemService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public navSrv: NavigationService,
    storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = builder.group({
      id: 0,
      primerNombre: builder.control(''),
      trabajadorId: builder.control(''),
      nominaIndividualId: builder.control(''),
    });

    this.subscriptions = [
      this.route.params
        .pipe(
          switchMap((params) => {
            const data = params['data']? JSON.parse(params['data']) : params;
            this.form.patchValue(data);

            const request: any = {
              body: {
                params: {
                  trabajadorId: data['trabajadorId'] as Object,
                  nominaIndividualId: data['nominaIndividualId'] as Object,
                },
              },
              header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarDeduccionesView',
              },
            };

            return storedProcedureAPISrv.exectuteProcedureUsingPOST1(
              request,
              'events',
              true
            );
          })
        )
        .subscribe((response: any) => {
          console.log(response);
          if (!response?.body?.body) return;
          const valores: ValuesCatalog[] = gtdExtractDataProcedure(
            response.body?.body
          );
          console.log(valores);
          initTable(
            this.dataSource$,
            this.paginator,
            this.sort,
            gtdArrayToLowerCase(valores),
            displayedColumns
          );
        }),
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
