export * from './creditNotes.service';
import { CreditNotesService } from './creditNotes.service';
export * from './creditNotes.serviceInterface'
export * from './customers.service';
import { CustomersService } from './customers.service';
export * from './customers.serviceInterface'
export * from './debitNotes.service';
import { DebitNotesService } from './debitNotes.service';
export * from './debitNotes.serviceInterface'
export * from './employees.service';
import { EmployeesService } from './employees.service';
export * from './employees.serviceInterface'
export * from './greetings.service';
import { GreetingsService } from './greetings.service';
export * from './greetings.serviceInterface'
export * from './invoices.service';
import { InvoicesService } from './invoices.service';
export * from './invoices.serviceInterface'
export * from './payrolls.service';
import { PayrollsService } from './payrolls.service';
export * from './payrolls.serviceInterface'
export * from './products.service';
import { ProductsService } from './products.service';
export * from './products.serviceInterface'
export * from './storedProcedure.service';
import { StoredProcedureService } from './storedProcedure.service';
export * from './storedProcedure.serviceInterface'
export const APIS = [CreditNotesService, CustomersService, DebitNotesService, EmployeesService, GreetingsService, InvoicesService, PayrollsService, ProductsService, StoredProcedureService];
