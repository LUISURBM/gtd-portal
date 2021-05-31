import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { CreditNotesService } from './api/creditNotes.service';
import { CustomersService } from './api/customers.service';
import { DebitNotesService } from './api/debitNotes.service';
import { EmployeesService } from './api/employees.service';
import { GreetingsService } from './api/greetings.service';
import { InvoicesService } from './api/invoices.service';
import { PayrollsService } from './api/payrolls.service';
import { ProductsService } from './api/products.service';
import { StoredProcedureService } from './api/storedProcedure.service';

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
