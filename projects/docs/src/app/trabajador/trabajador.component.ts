import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InMemService } from '../srv/in-mem-service';
import { NavigationService } from '../srv/navigation.service';
import { TrabajadoresService } from '../srv/payroll/rest/api';
import {
  confirm,
  gtdArrayToLowerCase,
  initTable,
  NgGtdDS,
} from '../types/common-types';
import { displayedColumns, Trabajador } from './trabajador-data';
import { TrabajadorFormComponent } from './trabajador-form.component';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss'],
})
export class TrabajadorComponent implements AfterViewInit, OnDestroy {
  form: FormGroup;
  dataSource$: BehaviorSubject<NgGtdDS> = new BehaviorSubject<NgGtdDS>({
    datasource: new MatTableDataSource<Trabajador>([]),
    displayedColumns: displayedColumns,
  });

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  readResponseError = (err: any) => {
    console.log(err);
  };

  subscriptions: Subscription[] = [];

  listado = (data: any) =>
    this.trabajadoresAPISrv.listtrabajadorUsingGET1('events', true, {});
  readResponseTList = (data: any, message?: string) => {
    this.loading((data?.type ?? 1) * 15);
    if (!data.body) return;
    this.loading(75);
    initTable(
      this.dataSource$,
      this.paginator,
      this.sort,
      gtdArrayToLowerCase(data?.body?.bodyDto),
      displayedColumns
    );
    this.loading(100);
  };
  constructor(
    public memSrv: InMemService,
    public navSrv: NavigationService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private trabajadoresAPISrv: TrabajadoresService
  ) {
    this.form = this.formBuilder.group({
      filtro: '',
      fechaCorte: new Date(),
      nominaGeneralId: undefined,
      devengadosId: undefined,
      id: new FormControl(),

      tipoDocumento: new FormControl(''),
      numeroDocumento: new FormControl(Number),
      primerNombre: new FormControl(''),
      otrosNombres: new FormControl(''),
      primerApellido: new FormControl(''),
      segundoApellido: new FormControl(''),

      lugarTrabajoDepartamentoEstado: new FormControl(),
      lugarTrabajoDireccion: new FormControl(''),
      lugarTrabajoMunicipioCiudad: new FormControl(),
      lugarTrabajoPais: new FormControl(),

      altoRiesgoPension: new FormControl(Boolean),
      codigoTrabajador: new FormControl(Number),
      salarioIntegral: new FormControl(),
      subTipoTrabajador: new FormControl(),
      sueldo: new FormControl(),
      tipoContrato: new FormControl(),
      tipoTrabajador: new FormControl(),

      pais: new FormControl(''),
      departamento: new FormControl(''),
      ciudad: new FormControl(''),
      numeroCuenta: new FormControl(),
    });
    this.subscriptions = [
      this.form.valueChanges
        .pipe(
          switchMap((data) => {
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.readResponseTList,
          complete: this.loading,
          error: this.readResponseError,
        }),
      this.route.params.subscribe((params) => {
        if (!params['data'] || params['data'] === 'undefined')
          this.form.reset();
        else {
          const data = JSON.parse(params['data']);
          console.log(data);
          this.form.patchValue(data);
        }
      }),
    ];
  }

  trabajadorData(element: Trabajador) {
    return JSON.stringify(element);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  add(trabajador: Trabajador): void {
    if (!trabajador) {
      return;
    }

    const request = {
      entidad: {
        activo: trabajador.activo!,
        altoRiesgoPension: trabajador.altoRiesgoPension!,
        codigoTrabajador: trabajador.codigoTrabajador!,
        lugarTrabajoDepartamentoEstado:
          trabajador.lugarTrabajoDepartamentoEstado!,
        lugarTrabajoDireccion: trabajador.lugarTrabajoDireccion!,
        lugarTrabajoMunicipioCiudad: trabajador.lugarTrabajoMunicipioCiudad!,
        lugarTrabajoPais: trabajador.lugarTrabajoPais!,
        numeroDocumento: trabajador.numeroDocumento!,
        otrosNombres: trabajador.otrosNombres!,
        primerApellido: trabajador.primerApellido!,
        primerNombre: trabajador.primerNombre!,
        salarioIntegral: trabajador.salarioIntegral!,
        segundoApellido: trabajador.segundoApellido!,
        subTipoTrabajador: trabajador.subTipoTrabajador!,
        sueldo: trabajador.sueldo!,
        tipoContrato: trabajador.tipoContrato!,
        tipoDocumento: trabajador.tipoDocumento!,
        tipoTrabajador: trabajador.tipoTrabajador!,
        id: undefined,
        devengadosId: this.form.value.devengadosId,
        businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
        enabled: true,
        eventDate: new Date().toDateString(),
        eventType: 'CREATE',
        eventUser: 'LFUM',
        removed: false,
        cuneNov: '',
        novedad: false,
      },
      headerRequest: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      },
    };
    this.subscriptions.push(
      this.trabajadoresAPISrv
        .saveUsingPOST70(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            if (!(response.type === 4)) return of();
            if (response.type === 4 && response.status == 200)
              this._snackBar.open(`${trabajador.primerNombre}`, 'creado!', {
                duration: 50000,
              });

            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.readResponseTList,
          error: this.readResponseError,
        })
    );
  }

  delete(trabajador: Trabajador): void {
    this.subscriptions.push(
      confirm(this.dialog, `¿Eliminar trabajador ${trabajador.primerNombre}!?`)
        .pipe(
          switchMap((confirmacion) =>
            confirmacion
              ? this.trabajadoresAPISrv.deleteUsingDELETE70(
                  trabajador.id,
                  'events',
                  true,
                  {
                    httpHeaderAccept: 'application/json',
                  }
                )
              : of()
          ),
          switchMap((data: any) =>
            data.type === 4 && data.status === 200
              ? this.listado(this.form.value)
              : of()
          )
        )
        .subscribe({
          next: (data: any) => this.readResponseTList(data, 'eliminada!'),
          error: (err: any) => {
            console.log(err);
          },
        })
    );
  }

  edit(trabajador: Trabajador): void {
    const request = {
      entidad: {
        activo: trabajador.activo!,
        altoRiesgoPension: trabajador.altoRiesgoPension!,
        codigoTrabajador: trabajador.codigoTrabajador!,
        lugarTrabajoDepartamentoEstado:
          trabajador.lugarTrabajoDepartamentoEstado!,
        lugarTrabajoDireccion: trabajador.lugarTrabajoDireccion!,
        lugarTrabajoMunicipioCiudad: trabajador.lugarTrabajoMunicipioCiudad!,
        lugarTrabajoPais: trabajador.lugarTrabajoPais!,
        numeroDocumento: trabajador.numeroDocumento!,
        otrosNombres: trabajador.otrosNombres!,
        primerApellido: trabajador.primerApellido!,
        primerNombre: trabajador.primerNombre!,
        salarioIntegral: trabajador.salarioIntegral!,
        segundoApellido: trabajador.segundoApellido!,
        subTipoTrabajador: trabajador.subTipoTrabajador!,
        sueldo: trabajador.sueldo!,
        tipoContrato: trabajador.tipoContrato!,
        tipoDocumento: trabajador.tipoDocumento!,
        tipoTrabajador: trabajador.tipoTrabajador!,
        id: trabajador.id,
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
      this.trabajadoresAPISrv
        .updateUsingPUT70(request, 'events', true, {
          httpHeaderAccept: 'application/json',
        })
        .pipe(
          switchMap((response: any) => {
            this._snackBar.open(`${trabajador.primerNombre}`, 'actualizado!', {
              duration: 50000,
            });
            return this.listado(this.form.value);
          })
        )
        .subscribe({
          next: this.readResponseTList,
          complete: this.loading,
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

  openDialog(trabajador?: Trabajador): void {
    console.log(trabajador);
    const dialogRef = this.dialog.open(TrabajadorFormComponent, {
      width: '450px',
      data: trabajador ?? { id: undefined, name: '' },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        if (result?.id) this.edit(result);
        else this.add(result);
      })
    );
  }

  loading = (loading = 100) =>
    this.dataSource$.next({ ...this.dataSource$.value, loading: loading });
}
