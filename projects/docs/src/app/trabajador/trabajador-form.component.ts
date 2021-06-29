import { Component, Inject, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InMemService } from '../srv/in-mem-service';
import { NavigationService } from '../srv/navigation.service';
import {
  StoredProcedureService,
  TrabajadoresService
} from '../srv/payroll/rest/api';
import { valoresCatalogos } from '../types/common-types';

@Component({
  selector: 'app-trabajador-form',
  templateUrl: './trabajador-form.component.html',
})
export class TrabajadorFormComponent implements OnDestroy {
  @ViewChild('formView') formView: any;
  position = 'below';
  form = new FormGroup({
    id: new FormControl(undefined),

    tipoDocumento: new FormControl(''),
    numeroDocumento: new FormControl(''),
    primerNombre: new FormControl(''),
    otrosNombres: new FormControl(''),
    primerApellido: new FormControl(''),
    segundoApellido: new FormControl(''),

    lugarTrabajoDepartamentoEstado: new FormControl(),
    lugarTrabajoDireccion: new FormControl(''),
    lugarTrabajoMunicipioCiudad: new FormControl(''),
    lugarTrabajoPais: new FormControl(''),

    altoRiesgoPension: new FormControl(false),
    pais: new FormControl(''),
    departamento: new FormControl(''),
    ciudad: new FormControl(''),
    codigoTrabajador: new FormControl(''),
    salarioIntegral: new FormControl(false),
    subTipoTrabajador: new FormControl(''),
    sueldo: new FormControl(0),
    tipoContrato: new FormControl(''),
    tipoTrabajador: new FormControl(''),
    fechaIngreso: new FormControl(new Date()),
    fechaRetiro: new FormControl(new Date()),
    direccion: new FormControl(''),
    numeroCuenta: new FormControl(''),
    departamentoArea: new FormControl(''),
    eps: new FormControl(''),
    fondoPension: new FormControl(''),
    tipoCuenta: new FormControl(''),
    bancoPago: new FormControl(''),
    formaPago: new FormControl(''),
    metodoPago: new FormControl(''),
  });

  step = 0;
  tiposDocumento: any[] = [];
  tiposContrato: any[] = [];
  tiposTrabajador: any[] = [];
  subTiposTrabajador: any = [];
  paises: any = [];
  departamentos: any = [];
  ciudades: any = [];
  fondosPensionNE: any = [];
  ePSsNE: any = [];
  departamentoAreasNE: any = [];
  formasPago: any = [];
  bancos: any = [];
  tiposCuenta: any = [];
  metodosPago: any = [];

  requestPaises: any = {
    body: {},
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarLugaresTrabajoPais',
    },
  };

  requestTiposIdentificaciones: any = {
    body: {},
    header: {
      cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
      esquema: 'payroll',
      procedimientoAlmacenado: 'ConsultarTiposIdentificacionesNE',
    },
  };
  requestDepartamentos = (paisCode: any) => {
    return {
      body: {
        params: {
          numericCode: paisCode as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultaDepartamentoEstadoNE',
      },
    };
  };
  requestCiudades = (paisCode: any, department: any) => {
    return {
      body: {
        params: {
          countryCode: paisCode as Object,
          departamentoCode: department as Object,
        },
      },
      header: {
        cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
        esquema: 'payroll',
        procedimientoAlmacenado: 'ConsultaCiudadNE',
      },
    };
  };

  listadoTiposIdentificaciones =
    this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(
      this.requestTiposIdentificaciones,
      'events',
      true,
      { httpHeaderAccept: 'application/json' }
    );

  exectuteProcedureUsingPOST1 = (params: any) =>
    this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(
      params,
      'events',
      true,
      { httpHeaderAccept: 'application/json' }
    );
  listadoTiposContrato = this.exectuteProcedureUsingPOST1(
    valoresCatalogos({
      codigoCatalogo: 'TipoContratoTrabajadorNE',
    })
  );
  listadoTiposTrabajador = this.exectuteProcedureUsingPOST1(
    valoresCatalogos({ codigoCatalogo: 'TipoTrabajadorNE' })
  );
  listadoSubTiposTrabajador = this.exectuteProcedureUsingPOST1(
    valoresCatalogos({ codigoCatalogo: 'SubTipoTrabajadorNE' })
  );
  listadoPaises = this.exectuteProcedureUsingPOST1(this.requestPaises);
  listadoFondoPensionesNE = this.exectuteProcedureUsingPOST1(
    valoresCatalogos({ codigoCatalogo: 'FondoPensionNE' })
  );
  listadoEPSsNE = this.exectuteProcedureUsingPOST1(
    valoresCatalogos({ codigoCatalogo: 'EPSNE' })
  );
  listadoDepartamentoAreaNE = this.exectuteProcedureUsingPOST1(
    valoresCatalogos({ codigoCatalogo: 'DepartamentoAreaNE' })
  );
  listadoDepartamentos = (paisCode: any) =>
    this.exectuteProcedureUsingPOST1(this.requestDepartamentos(paisCode));
  listadoCiudades = (paisCode: any, departamentoCode: any) =>
    this.exectuteProcedureUsingPOST1(
      this.requestCiudades(paisCode, departamentoCode)
    );
  listadoTiposCuenta = () =>
    this.exectuteProcedureUsingPOST1(
      valoresCatalogos({ codigoCatalogo: 'TipoCuentaPagoNE' })
    );
  listadoBancos = () =>
    this.exectuteProcedureUsingPOST1(
      valoresCatalogos({ codigoCatalogo: 'BancoPagoNE' })
    );
  listadoFormasPago = () =>
    this.exectuteProcedureUsingPOST1(
      valoresCatalogos({ codigoCatalogo: 'FormaPagoNE' })
    );
  listadoMetodosPago = () =>
    this.exectuteProcedureUsingPOST1(
      valoresCatalogos({ codigoCatalogo: 'MetodoPagoNE' })
    );

  subscriptions: Subscription[] = [];

  leerTiposDocumento = (data?: any) => {
    if (!data.body?.body) return;
    this.tiposDocumento = data.body?.body;
  };
  leerTiposContrato = (data?: any) => {
    if (!data.body?.body) return;
    this.tiposContrato = data.body?.body;
  };
  leerTiposTrabajador = (data?: any) => {
    if (!data.body?.body) return;
    this.tiposTrabajador = data.body?.body;
  };
  leerSubTiposTrabajador = (data?: any) => {
    if (!data.body?.body) return;
    this.subTiposTrabajador = data.body?.body;
  };
  leerPaises = (data?: any) => {
    if (!data.body?.body) return;
    this.paises = data.body?.body;
  };
  leerDepartamentos = (data?: any) => {
    if (!data.body?.body) return;
    this.departamentos = data.body?.body;
  };
  leerCiudades = (data?: any) => {
    if (!data.body?.body) return;
    this.ciudades = data.body?.body;
  };
  leerFondoPensionNE = (data?: any) => {
    if (!data.body?.body) return;
    this.fondosPensionNE = data.body?.body;
  };
  leerEPSNE = (data?: any) => {
    if (!data.body?.body) return;
    this.ePSsNE = data.body?.body;
  };
  leerDepartamentoAreaNE = (data?: any) => {
    if (!data.body?.body) return;
    this.departamentoAreasNE = data.body?.body;
  };
  leerTiposCuentaNE = (data?: any) => {
    if (!data.body?.body) return;
    this.tiposCuenta = data.body?.body;
  };
  leerFormasPagoNE = (data?: any) => {
    if (!data.body?.body) return;
    this.formasPago = data.body?.body;
  };
  leerMetodosPagoNE = (data?: any) => {
    if (!data.body?.body) return;
    this.metodosPago = data.body?.body;
  };
  leerBancosNE = (data?: any) => {
    if (!data.body?.body) return;
    this.bancos = data.body?.body;
  };

  constructor(
    public dialogRef: MatDialogRef<TrabajadorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public inMemSrv: InMemService,
    public builder: FormBuilder,
    public navSrv: NavigationService,
    private storedProcedureAPISrv: StoredProcedureService,
    private trabajadoresAPISrv: TrabajadoresService
  ) {
    this.subscriptions = [
      this.listadoTiposIdentificaciones.subscribe({
        next: this.leerTiposDocumento,
        error: (err: any) => console.log(err),
      }),
      this.listadoTiposContrato.subscribe({
        next: this.leerTiposContrato,
        error: (err: any) => console.log(err),
      }),
      this.listadoTiposTrabajador.subscribe({
        next: this.leerTiposTrabajador,
        error: (err: any) => console.log(err),
      }),
      this.listadoSubTiposTrabajador.subscribe({
        next: this.leerSubTiposTrabajador,
        error: (err: any) => console.log(err),
      }),
      this.listadoPaises.subscribe({
        next: this.leerPaises,
        error: (err: any) => console.log(err),
      }),
      this.listadoDepartamentoAreaNE.subscribe({
        next: this.leerDepartamentoAreaNE,
        error: (err: any) => console.log(err),
      }),
      this.listadoEPSsNE.subscribe({
        next: this.leerEPSNE,
        error: (err: any) => console.log(err),
      }),
      this.listadoFondoPensionesNE.subscribe({
        next: this.leerFondoPensionNE,
        error: (err: any) => console.log(err),
      }),
      this.listadoFormasPago().subscribe({
        next: this.leerFormasPagoNE,
        error: (err: any) => console.log(err),
      }),
      this.listadoMetodosPago().subscribe({
        next: this.leerMetodosPagoNE,
        error: (err: any) => console.log(err),
      }),
      this.listadoTiposCuenta().subscribe({
        next: this.leerTiposCuentaNE,
        error: (err: any) => console.log(err),
      }),
      this.listadoBancos().subscribe({
        next: this.leerBancosNE,
        error: (err: any) => console.log(err),
      }),
      this.form.controls['pais'].valueChanges
        .pipe(switchMap((data) => this.listadoDepartamentos(data)))
        .subscribe({
          next: this.leerDepartamentos,
          error: (err: any) => console.log(err),
        }),
      this.form.controls['departamento'].valueChanges
        .pipe(
          switchMap((data) => this.listadoCiudades(this.form.value.pais, data))
        )
        .subscribe({
          next: this.leerCiudades,
          error: (err: any) => console.log(err),
        }),
    ];
    if (data) this.form.patchValue(data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    console.log(this.form.value);

    const request = {
      entidad: {
        id: undefined,
        codigoTrabajador: this.form.value.codigoTrabajador,
        activo: this.form.value.activo,
        altoRiesgoPension: this.form.value.altoRiesgoPension,
        lugarTrabajoDepartamentoEstado:
          this.form.value.lugarTrabajoDepartamentoEstado,
        lugarTrabajoDireccion: this.form.value.lugarTrabajoDireccion,
        lugarTrabajoMunicipioCiudad:
          this.form.value.lugarTrabajoMunicipioCiudad,
        lugarTrabajoPais: this.form.value.lugarTrabajoPais,
        nominaIndividualId: this.form.value.nominaIndividualId!,
        numeroDocumento: this.form.value.numeroDocumento,
        otrosNombres: this.form.value.otrosNombres!,
        primerApellido: this.form.value.primerApellido,
        primerNombre: this.form.value.primerNombre,
        salarioIntegral: this.form.value.salarioIntegral,
        segundoApellido: this.form.value.segundoApellido,
        subTipoTrabajador: this.form.value.subTipoTrabajador,
        sueldo: this.form.value.sueldo!,
        tipoContrato: this.form.value.tipoContrato,
        tipoDocumento: this.form.value.tipoDocumento,
        tipoTrabajador: this.form.value.tipoTrabajador,
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
        .saveUsingPOST70(request, 'events', true)
        .subscribe({
          next: (v: any) => {},
        })
    );
    this.navSrv.navigate('/trabajador', this.form.value);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  get f() {
    return this.form.controls;
  }
}
