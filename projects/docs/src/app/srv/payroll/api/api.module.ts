import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { PayrollsService } from './rest/payrolls.service';
import { BasicoService } from '../../../service/mgmt/basicos/basicos';
import { Configuration } from './configuration';
import { StoredProcedureService } from './procedure/storedProcedure.service';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [BasicoService, StoredProcedureService, PayrollsService]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<any> {
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
