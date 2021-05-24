import { Routes } from '@angular/router';
import { AnticipoComponent } from './payroll-components/anticipo/anticipo.component';
import { AuxiliosComponent } from './payroll-components/auxilio/auxilios.component';
import { BonificacionesComponent } from './payroll-components/bonificaciones/bonificaciones.component';
import { BonosEPCTVComponent } from './payroll-components/bono/bonos.component';
import { CesantiasComponent } from './payroll-components/cesantias/cesantias.component';
import { ComisionesComponent } from './payroll-components/comisiones/comisiones.component';
import { CompensacionesComponent } from './payroll-components/compensaciones/compensaciones.component';
import { DevengadosFormComponent } from './payroll-components/devengados/devengados-form.component';
import { DevengadosViewComponent } from './payroll-components/devengados/devengados-view.component';
import { DevengadosComponent } from './payroll-components/devengados/devengados.component';
import { HorariosAdicionalesComponent } from './payroll-components/horarios-adicionales/horarios-adicionales.component';
import { LicenciaComponent } from './payroll-components/licencias/licencias.component';
import { OtrosConceptosComponent } from './payroll-components/otros-conceptos/otros-conceptos.component';
import { PagoTerceroFormComponent } from './payroll-components/pagos-terceros/pago-tercero-form.component';
import { PagosTercerosComponent } from './payroll-components/pagos-terceros/pagos-terceros.component';
import { PayrollFormComponent } from './payroll-components/payroll-table/payroll-form.component';
import { TransportesComponent } from './payroll-components/transporte/transporte.component';
import { VacacionesComponent } from './payroll-components/vacaciones-comunes/vacaciones.component';
import { PayrollComponent } from './payroll.component';

export const PayrollRoutes: Routes = [
  {
    path: '',
    component: PayrollComponent,
    pathMatch: 'full',
  },
  {
    path: 'form',
    component: PayrollFormComponent,
  },
  {
    path: 'devengados',
    component: DevengadosComponent,
  },
  {
    path: 'devengados/view',
    component: DevengadosViewComponent,
    children: [
      {
        path: 'form',
        component: DevengadosFormComponent,
      },
      {
        path: 'licencias',
        component: LicenciaComponent,
      },
      {
        path: 'auxilios',
        component: AuxiliosComponent,
      },
      {
        path: 'vacaciones',
        component: VacacionesComponent,
      },
      {
        path: 'bonificaciones',
        component: BonificacionesComponent,
      },
      {
        path: 'anticipos',
        component: AnticipoComponent,
      },
      {
        path: 'pagosTerceros',
        component: PagosTercerosComponent,
      },
      {
        path: 'bonos',
        component: BonosEPCTVComponent,
      },
      {
        path: 'compensaciones',
        component: CompensacionesComponent,
      },
      {
        path: 'cesantías',
        component: CesantiasComponent,
      },
      {
        path: 'transportes',
        component: TransportesComponent,
      },
      {
        path: 'otrosConceptos',
        component: OtrosConceptosComponent,
      },
      {
        path: 'comisines',
        component: ComisionesComponent,
      },
      {
        path: 'horariosAdicionales',
        component: HorariosAdicionalesComponent,
      },
    ],
  },
];
