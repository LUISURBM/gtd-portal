import { Routes } from '@angular/router';
import { DirtyCheckGuard } from '../guards/dirty-check.guard';
import { AnticipoComponent } from './payroll-components/anticipo/anticipo.component';
import { AuxiliosComponent } from './payroll-components/auxilio/auxilios.component';
import { BasicosComponent } from './payroll-components/basicos/basicos.component';
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
import { FondoSPComponent } from './payroll-components/fondo-sp/fondo-sp.component';
import { HorariosAdicionalesComponent } from './payroll-components/horarios-adicionales/horarios-adicionales.component';
import { HuelgasComponent } from './payroll-components/huelga-legal/huelga.component';
import { IncapacidadesComponent } from './payroll-components/incapacidades/incapacidades.component';
import { LibranzaComponent } from './payroll-components/libranza/libranza.component';
import { LicenciaComponent } from './payroll-components/licencias/licencias.component';
import { OtrasDeduccionesComponent } from './payroll-components/otras-deducciones/otras-deducciones.component';
import { OtrosConceptosComponent } from './payroll-components/otros-conceptos/otros-conceptos.component';
import { PagosTercerosComponent } from './payroll-components/pagos-terceros/pagos-terceros.component';
import { PayrollTableComponent } from './payroll-components/payroll-general/table/payroll-table.component';
import { PayrollIndividualFormComponent } from './payroll-components/payroll-individual/payroll-individual-form.component';
import { PayrollIndividualTableComponent } from './payroll-components/payroll-individual/payroll-individual-table.component';
import { PayrollindividualViewComponent } from './payroll-components/payroll-individual/payroll-individual-view.component';
import { PrimasComponent } from './payroll-components/primas/primas.component';
import { SaludPensionSindicatosComponent } from './payroll-components/salud-pension-sindicato/salud-pension-sindicato.component';
import { SancionComponent } from './payroll-components/sancion/sancion.component';
import { TransportesComponent } from './payroll-components/transporte/transporte.component';
import { VacacionesComponent } from './payroll-components/vacaciones-comunes/vacaciones.component';

export const PayrollRoutes: Routes = [
  {
    path: '',
    component: PayrollTableComponent,
    pathMatch: 'full',
  },
  {
    path: 'individual',
    component: PayrollIndividualTableComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'view',
    component: PayrollindividualViewComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'form',
    component: PayrollIndividualFormComponent,
    canActivate: [DirtyCheckGuard],
    canDeactivate: [DirtyCheckGuard],
  },
  {
    path: 'devengos',
    component: DevengadosViewComponent,
    children: [
      {
        path: 'listado',
        component: DevengadosComponent,
      },
      {
        path: '',
        component: DevengadosFormComponent,
        pathMatch: 'full',
      },
      {
        path: 'licencias',
        component: LicenciaComponent,
      },
      {
        path: 'incapacidades',
        component: IncapacidadesComponent,
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
        path: 'primas',
        component: PrimasComponent,
      },
      {
        path: 'basicos',
        component: BasicosComponent,
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
      {
        path: 'huelgas-legales',
        component: HuelgasComponent,
      },
    ],
  },
  {
    path: 'deducciones',
    component: DeduccionesViewComponent,
    children: [
      {
        path: 'listado',
        component: DeduccionesComponent,
      },
      {
        path: '',
        component: DeduccionesFormComponent,
        pathMatch: 'full',
      },
      {
        path: 'anticipos',
        component: AnticipoComponent,
      },
      {
        path: 'fondo-sp',
        component: FondoSPComponent,
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
];
