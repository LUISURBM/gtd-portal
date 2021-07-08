import { HttpClient } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { Configuration } from './configuration';
import { StoredProcedureService } from './rest/api';
import { PayrollsService } from './rest/payrolls.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [StoredProcedureService, PayrollsService],
})
export class ApiModule {
  public static forRoot(
    configurationFactory: () => Configuration
  ): ModuleWithProviders<any> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error(
        'ApiModule is already loaded. Import in your base AppModule only.'
      );
    }
    if (!http) {
      throw new Error(
        'Error importing HttpClientModule'
      );
    }
  }
}
