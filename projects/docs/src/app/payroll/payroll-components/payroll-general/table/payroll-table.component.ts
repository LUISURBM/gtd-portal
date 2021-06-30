import { SelectionModel } from '@angular/cdk/collections';
import { formatDate } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MenuItems } from '../../../../shared/menu-items/menu-items';
import { AppStateService } from '../../../../srv/app-state.service';
import { InMemService } from '../../../../srv/in-mem-service';
import { NavigationService } from '../../../../srv/navigation.service';
import {
  NominasGeneralesService,
  StoredProcedureService,
} from '../../../../srv/payroll/rest/api';
import {
  confirm,
  EnumString,
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
  OpenDialog,
  txtEliminar,
  valoresCatalogos,
} from '../../../../types/common-types';
import {
  UICreado,
  UIEditado,
  UIEliminado,
  UINoEliminado,
  UIOk,
} from '../../../../values-catalog';
import { MY_FORMATS } from '../../payroll-individual/payroll-individual-table.component';
import { PayrollGeneralFormComponent } from '../form/payroll-general-form.component';
import { displayedColumns, EMPTY, Payroll } from '../payroll-data';

@Component({
  selector: 'app-payroll-table',
  templateUrl: './payroll-table.component.html',
  styleUrls: ['./payroll-table.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class PayrollTableComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Payroll>([]),
    displayedColumns: displayedColumns,
    loading: 0,
  });

  selection = new SelectionModel<Payroll>(false, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  today = new Date();
  startDate = new Date(
    this.today.getFullYear(),
    this.today.getMonth() + 2,
    this.today.getDate()
  );

  get selected() {
    return this.selection?.selected[0] ?? EMPTY;
  }

  request: any = {
    body: {
      params: {
        businessSubscriptionId:
          '5B067D71-9EC0-4910-8D53-018850FDED4E' as Object,
      },
    },
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'obtenerListaNominaGeneral',
    },
  };

  subscriptions: Subscription[];
  JSON = JSON;

  constructor(
    public formBuilder: FormBuilder,
    public memSrv: InMemService,
    public dialog: MatDialog,
    public navSrv: NavigationService,
    private storedProcedureAPISrv: StoredProcedureService,
    private nominaGeneralAPISrv: NominasGeneralesService,
    public menuItemsSrv: MenuItems,
    public stateSrv: AppStateService
  ) {
    this.avance(0);
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
    });
    this.avance(10);
    this.subscriptions = [
      this.listado().subscribe({
        next: this.leerListado,
        complete: this.avance,
        error: this.readResponseError,
      }),
    ];
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  eliminar = (payroll: Payroll) =>
    this.nominaGeneralAPISrv
      .deleteUsingDELETE57(payroll.id, 'events', true, {
        httpHeaderAccept: 'application/json',
      })
      .pipe(
        switchMap((response: any) => {
          if (response?.type !== 4) return of();
          if (
            response?.type === 4 &&
            response?.status === 200 &&
            response?.body?.bodyDto?.[0]
          ) {
            this.stateSrv.message(`${payroll.nombre}`, UIEliminado);
            return this.listado();
          }
          return of();
        })
      );
  listado = () => {
    this.avance(20);
    return this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(
      this.request,
      'events',
      true
    );
  };
  readResponseError = (err: any) => {
    console.log(err);
  };
  leerListado = (data?: any) => {
    this.avance((data?.type ?? 1) * 15);
    if (!data.body) return;
    this.avance(75);
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(data?.body?.body),
      displayedColumns
    );
    this.avance(100);
  };
  exectuteProcedureUsingPOST1 = (params: any) =>
    this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(
      params,
      'events',
      true,
      { httpHeaderAccept: 'application/json' }
    );

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(payroll: Payroll): void {
    const validations = this.dataSource$.value.datasource.data
      .filter((p: Payroll) => {
        const mismoCorte =
          p.fechaCorte.getMonth() === payroll.fechaCorte.getMonth() &&
          p.fechaCorte.getUTCFullYear() === payroll.fechaCorte.getUTCFullYear();
        return mismoCorte || p.nombre === payroll.nombre;
      })
      .map((p: Payroll) => {
        const mismoCorte =
          p.fechaCorte.getMonth() === payroll.fechaCorte.getMonth() &&
          p.fechaCorte.getUTCFullYear() === payroll.fechaCorte.getUTCFullYear();
        return mismoCorte
          ? `!Fecha corte ${formatDate(
              p.fechaCorte,
              'MM/yyyy',
              'es-CO'
            )} asociada a '${p.nombre}'!`
          : p.nombre === payroll.nombre
          ? `!'${p.nombre}' ya existe!`
          : undefined;
      });
    if (payroll.nombre.length < 1) {
      this.stateSrv.message(`Nombre inválido`, UIOk);
      return;
    }
    if (validations.length > 0) {
      validations.forEach((m) => this.stateSrv.message(`${m}`, UINoEliminado));
      return;
    }
    if (!payroll) {
      return;
    }
    const request = {
      entidad: {
        nombre: payroll.nombre,
        descripcion: payroll.descripcion,
        estadoId: '487C190C-F0F3-4E4E-9B60-A959C2124CCE',
        fechaCorte: payroll.fechaCorte.toISOString(),
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toISOString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.nominaGeneralAPISrv
        .saveUsingPOST57(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this.stateSrv.message(`${payroll.nombre}`, UICreado);

            return this.listado();
          })
        )
        .subscribe({
          next: this.leerListado,
          complete: () => this.avance(92),
          error: this.readResponseError,
        })
    );
  }

  delete(payroll: Payroll): void {
    this.subscriptions.push(
      confirm(
        this.dialog,
        `¿Eliminar ${formatDate(payroll.fechaCorte, 'MM/YYY', 'es-Co')} '${
          payroll.nombre
        }'?`
      )
        .pipe(
          switchMap((confirmacion) =>
            confirmacion ? this.eliminar(payroll) : of()
          )
        )
        .subscribe({
          next: this.leerListado,
          complete: () => {
            payroll.loading = undefined;
            this.avance;
          },
          error: this.readResponseError,
        })
    );
  }

  edit(payroll: Payroll): void {
    const request = {
      entidad: {
        nombre: payroll.nombre,
        descripcion: payroll.descripcion,
        estadoId: '487C190C-F0F3-4E4E-9B60-A959C2124CCE',
        fechaCorte: payroll.fechaCorte.toISOString(),
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toISOString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
        id: payroll.id,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };

    this.subscriptions.push(
      this.nominaGeneralAPISrv
        .updateUsingPUT57(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((general) => {
            this.stateSrv.message(`${payroll.nombre}`, UIEditado);
            return this.listado();
          })
        )
        .subscribe({
          next: this.leerListado,
          complete: this.avance,
          error: this.readResponseError,
        })
    );
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

  openDialog(payroll?: Payroll): void {
    this.subscriptions.push(
      OpenDialog(
        this.dialog,
        PayrollGeneralFormComponent,
        payroll ?? EMPTY
      ).subscribe((result) => {
        console.log(result);
        if (payroll) payroll.loading = undefined;
        if (result?.id) this.edit(result);
        else if (result) this.add(result);
      })
    );
  }

  closeDatePicker(eventData: any, dp?: any) {
    this.form.patchValue({ ...this.form.value, fechaCorte: eventData });
    dp.close();
  }

  loading: number | undefined = 0;
  avance = (loading?: number) => {
    this.loading = loading;
  };

  txtEliminar = (payroll: Payroll) =>
    txtEliminar(
      this.stateSrv.textos?.PreguntaEliminadoNE?.name ?? "¿Eliminar 'P_1'?",
      payroll.nombre
    );
}
