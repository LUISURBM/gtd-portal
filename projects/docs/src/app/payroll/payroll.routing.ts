import { Routes } from '@angular/router';
import { AnticipoComponent } from './payroll-components/anticipo/anticipo.component';
import { AuxiliosComponent } from './payroll-components/auxilio/auxilios.component';
import { BonificacionesComponent } from './payroll-components/bonificaciones/bonificaciones.component';
import { BonosEPCTVComponent } from './payroll-components/bono/bonos.component';
import { CesantiasComponent } from './payroll-components/cesantias/cesantias.component';
import { ComisionesComponent } from './payroll-components/comisiones/comisiones.component';
import { CompensacionesComponent } from './payroll-components/compensaciones/compensaciones.component';
import { DeduccionesFormComponent } from './payroll-components/deducciones/deducciones-form.component';
import { DeduccionesViewComponent } from './payroll-components/deducciones/deducciones-view.component';
import { DeduccionesComponent } from './payroll-components/deducciones/deducciones.component';
import { DevengadosFormComponent } from './payroll-components/devengados/devengados-form.component';
import { DevengadosViewComponent } from './payroll-components/devengados/devengados-view.component';
import { DevengadosComponent } from './payroll-components/devengados/devengados.component';
import { HorariosAdicionalesComponent } from './payroll-components/horarios-adicionales/horarios-adicionales.component';
import { LibranzaComponent } from './payroll-components/libranza/libranza.component';
import { LicenciaComponent } from './payroll-components/licencias/licencias.component';
import { OtrasDeduccionesComponent } from './payroll-components/otras-deducciones/otras-deducciones.component';
import { OtrosConceptosComponent } from './payroll-components/otros-conceptos/otros-conceptos.component';
import { PagosTercerosComponent } from './payroll-components/pagos-terceros/pagos-terceros.component';
import { PayrollTableComponent } from './payroll-components/payroll-general/table/payroll-table.component';
import { PayrollIndividualFormComponent } from './payroll-components/payroll-individual/payroll-individual-form.component';
import { PayrollIndividualTableComponent } from './payroll-components/payroll-individual/payroll-individual-table.component';
import { PayrollindividualViewComponent } from './payroll-components/payroll-individual/payroll-individual-view.component';
import { SaludPensionSindicatosComponent } from './payroll-components/salud-pension-sindicato/salud-pension-sindicato.component';
import { SancionComponent } from './payroll-components/sancion/sancion.component';
import { TransportesComponent } from './payroll-components/transporte/transporte.component';
import { VacacionesComponent } from './payroll-components/vacaciones-comunes/vacaciones.component';

export const PayrollRoutes: Routes = [
  {
    path: '',
    component: PayrollTableComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'individual',
        component: PayrollIndividualTableComponent,
      },
      {
        path: 'view',
        component: PayrollindividualViewComponent,
      },
      {
        path: 'form',
        component: PayrollIndividualFormComponent,
      },
      {
        path: 'devengos',
        children: [
          {
            path: '',
            component: DevengadosComponent,
            pathMatch: 'full',
          },
          {
            path: 'view',
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
                path: 'comisiones',
                component: ComisionesComponent,
              },
              {
                path: 'horariosAdicionales',
                component: HorariosAdicionalesComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'deducciones',
        children: [
          {
            path: '',
            component: DeduccionesComponent,
            pathMatch: 'full',
          },
          {
            path: 'view',
            component: DeduccionesViewComponent,
            children: [
              {
                path: 'form',
                component: DeduccionesFormComponent,
              },
              {
                path: 'anticipos',
                component: AnticipoComponent,
              },
              {
                path: 'libranzas',
                component: LibranzaComponent,
              },
              {
                path: 'otras-deducciones',
                component: OtrasDeduccionesComponent,
              },
              {
                path: 'pago-terceros',
                component: PagosTercerosComponent,
              },
              {
                path: 'sanciones',
                component: SancionComponent,
              },
              {
                path: 'salud-pension-sindicato',
                component: SaludPensionSindicatosComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];
