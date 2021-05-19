import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { AnticipoFormComponent } from './payroll-components/anticipo/anticipo-form.component';
import { AnticipoComponent } from './payroll-components/anticipo/anticipo.component';
import { AuxilioFormComponent } from './payroll-components/auxilio/auxilio-form.component';
import { AuxiliosComponent } from './payroll-components/auxilio/auxilios.component';
import { BasicoFormComponent } from './payroll-components/basicos/basico-form.component';
import { BasicosComponent } from './payroll-components/basicos/basicos.component';
import { BonificacionFormComponent } from './payroll-components/bonificaciones/bonificacion-form.component';
import { BonificacionesComponent } from './payroll-components/bonificaciones/bonificaciones.component';
import { BonoEPCTVFormComponent } from './payroll-components/bono/bono-form.component';
import { BonosEPCTVComponent } from './payroll-components/bono/bonos.component';
import { CesantiaFormComponent } from './payroll-components/cesantias/cesantia-form.component';
import { CesantiasComponent } from './payroll-components/cesantias/cesantias.component';
import { ComisionFormComponent } from './payroll-components/comisiones/comision-form.component';
import { ComisionesComponent } from './payroll-components/comisiones/comisiones.component';
import { CompensacionFormComponent } from './payroll-components/compensaciones/compensacion-form.component';
import { CompensacionesComponent } from './payroll-components/compensaciones/compensaciones.component';
import { DevengadosFormComponent } from './payroll-components/devengados/devengados-form.component';
import { DevengadosComponent } from './payroll-components/devengados/devengados.component';
import { EmpleadorFormComponent } from './payroll-components/empleador/empleador-form.component';
import { EmpleadoresComponent } from './payroll-components/empleador/empleadores.component';
import { FechaPagoFormComponent } from './payroll-components/fechas-pago/fecha-pago-form.component';
import { FechasPagoComponent } from './payroll-components/fechas-pago/fechas-pago.component';
import { HorarioAdicionalFormComponent } from './payroll-components/horarios-adicionales/horario-adicional-form.component';
import { HorariosAdicionalesComponent } from './payroll-components/horarios-adicionales/horarios-adicionales.component';
import { HuelgaFormComponent } from './payroll-components/huelga-legal/huelga-form.component';
import { HuelgasComponent } from './payroll-components/huelga-legal/huelga.component';
import { IncapacidadFormComponent } from './payroll-components/incapacidades/incapacidad-form.component';
import { IncapacidadesComponent } from './payroll-components/incapacidades/incapacidades.component';
import { LibranzaFormComponent } from './payroll-components/libranza/libranza-form.component';
import { LibranzaComponent } from './payroll-components/libranza/libranza.component';
import { LicenciaFormComponent } from './payroll-components/licencias/licencia-form.component';
import { LicenciaComponent } from './payroll-components/licencias/licencias.component';
import { LugarGeneracionXMLFormComponent } from './payroll-components/lugar-gen-xml/lugar-gen-xml-form.component';
import { LugaresGeneracionXMLComponent } from './payroll-components/lugar-gen-xml/lugar-gen-xml.component';
import { NotaFormComponent } from './payroll-components/notas/nota-form.component';
import { NotasComponent } from './payroll-components/notas/notas.component';
import { OtraDeduccionFormComponent } from './payroll-components/otras-deducciones/otra-deduccion-form.component';
import { OtrasDeduccionesComponent } from './payroll-components/otras-deducciones/otras-deducciones.component';
import { OtroConceptoFormComponent } from './payroll-components/otros-conceptos/otro-concepto-form.component';
import { OtrosConceptosComponent } from './payroll-components/otros-conceptos/otros-conceptos.component';
import { PagoFormComponent } from './payroll-components/pago/pago-form.component';
import { PagosComponent } from './payroll-components/pago/pagos.component';
import { PagoTerceroFormComponent } from './payroll-components/pagos-terceros/pago-tercero-form.component';
import { PagosTercerosComponent } from './payroll-components/pagos-terceros/pagos-terceros.component';
import { PayrollFormComponent } from './payroll-components/payroll-table/payroll-form.component';
import { PayrollTableComponent } from './payroll-components/payroll-table/payroll-table.component';
import { PeriodoFormComponent } from './payroll-components/periodo/periodo-form.component';
import { PeriodosComponent } from './payroll-components/periodo/periodos.component';
import { PrimaFormComponent } from './payroll-components/primas/prima-form.component';
import { PrimasComponent } from './payroll-components/primas/primas.component';
import { ProveedorXMLFormComponent } from './payroll-components/proveedor-xml/proveedor-xml-form.component';
import { ProveedoresXMLComponent } from './payroll-components/proveedor-xml/proveedores-xml.component';
import { SaludPensionSindicatoFormComponent } from './payroll-components/salud-pension-sindicato/salud-pension-sindicato-form.component';
import { SaludPensionSindicatosComponent } from './payroll-components/salud-pension-sindicato/salud-pension-sindicato.component';
import { SancionFormComponent } from './payroll-components/sancion/sancion-form.component';
import { SancionComponent } from './payroll-components/sancion/sancion.component';
import { TransporteFormComponent } from './payroll-components/transporte/transporte-form.component';
import { TransportesComponent } from './payroll-components/transporte/transporte.component';
import { VacacionFormComponent } from './payroll-components/vacaciones-comunes/vacacion-form.component';
import { VacacionesComponent } from './payroll-components/vacaciones-comunes/vacaciones.component';
import { PayrollComponent } from './payroll.component';
import { PayrollRoutes } from './payroll.routing';
@NgModule({
  declarations: [
    PayrollComponent,
    AnticipoComponent,
    AnticipoFormComponent,
    SancionComponent,
    SancionFormComponent,
    LibranzaComponent,
    LibranzaFormComponent,
    NotasComponent,
    NotaFormComponent,
    FechasPagoComponent,
    FechaPagoFormComponent,
    ComisionesComponent,
    ComisionFormComponent,
    VacacionesComponent,
    VacacionFormComponent,
    HuelgasComponent,
    HuelgaFormComponent,
    LicenciaComponent,
    LicenciaFormComponent,
    TransportesComponent,
    TransporteFormComponent,
    OtrosConceptosComponent,
    OtroConceptoFormComponent,
    CompensacionesComponent,
    CompensacionFormComponent,
    AuxiliosComponent,
    AuxilioFormComponent,
    BonosEPCTVComponent,
    BonoEPCTVFormComponent,
    IncapacidadesComponent,
    IncapacidadFormComponent,
    HorariosAdicionalesComponent,
    HorarioAdicionalFormComponent,
    BonificacionesComponent,
    BonificacionFormComponent,
    CesantiasComponent,
    CesantiaFormComponent,
    PagosTercerosComponent,
    PagoTerceroFormComponent,
    SaludPensionSindicatosComponent,
    SaludPensionSindicatoFormComponent,
    OtrasDeduccionesComponent,
    OtraDeduccionFormComponent,
    PeriodosComponent,
    PeriodoFormComponent,
    LugaresGeneracionXMLComponent,
    LugarGeneracionXMLFormComponent,
    ProveedorXMLFormComponent,
    ProveedoresXMLComponent,
    EmpleadoresComponent,
    EmpleadorFormComponent,
    PagosComponent,
    PagoFormComponent,
    DevengadosComponent,
    DevengadosFormComponent,
    BasicosComponent,
    BasicoFormComponent,
    PrimasComponent,
    PrimaFormComponent,
    PayrollTableComponent,
    PayrollFormComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(PayrollRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
})
export class PayrollModule {}
