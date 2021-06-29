import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AnticiposService } from './api/anticipos.service';
import { AuxiliosService } from './api/auxilios.service';
import { BasicosService } from './api/basicos.service';
import { BonificacionesService } from './api/bonificaciones.service';
import { BonosEPCTVService } from './api/bonosEPCTV.service';
import { CesantiasService } from './api/cesantias.service';
import { ComisionesService } from './api/comisiones.service';
import { CompensacionesService } from './api/compensaciones.service';
import { DeduccionesService } from './api/deducciones.service';
import { DevengadosService } from './api/devengados.service';
import { EmpleadoresService } from './api/empleadores.service';
import { FechasPagosService } from './api/fechasPagos.service';
import { FondosSPService } from './api/fondosSP.service';
import { HorariosAdicionalesService } from './api/horariosAdicionales.service';
import { HuelgasLegalesService } from './api/huelgasLegales.service';
import { IncapacidadesService } from './api/incapacidades.service';
import { InformacionesGeneralesService } from './api/informacionesGenerales.service';
import { InvoicesService } from './api/invoices.service';
import { LibranzasService } from './api/libranzas.service';
import { LicenciasService } from './api/licencias.service';
import { LugaresGeneracionXMLService } from './api/lugaresGeneracionXML.service';
import { NominasGeneralesService } from './api/nominasGenerales.service';
import { NominasIndividualesService } from './api/nominasIndividuales.service';
import { NotasService } from './api/notas.service';
import { NumerosSecuenciaXMLService } from './api/numerosSecuenciaXML.service';
import { OtrasDeduccionesService } from './api/otrasDeducciones.service';
import { OtrosConceptosService } from './api/otrosConceptos.service';
import { PagosService } from './api/pagos.service';
import { PagosTercerosService } from './api/pagosTerceros.service';
import { PayrollsService } from './api/payrolls.service';
import { PeriodosService } from './api/periodos.service';
import { PrimasService } from './api/primas.service';
import { ProveedoresXMLService } from './api/proveedoresXML.service';
import { SaludPensionSindicatosService } from './api/saludPensionSindicatos.service';
import { SancionesService } from './api/sanciones.service';
import { StoredProcedureService } from './api/storedProcedure.service';
import { TrabajadoresService } from './api/trabajadores.service';
import { TransportesService } from './api/transportes.service';
import { VacacionesCompensadasService } from './api/vacacionesCompensadas.service';
import { VacacionesComunesService } from './api/vacacionesComunes.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
