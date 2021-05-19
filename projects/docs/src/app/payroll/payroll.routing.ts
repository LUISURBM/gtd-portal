import { Routes } from '@angular/router';
import { PayrollFormComponent } from './payroll-components/payroll-table/payroll-form.component';
import { PayrollComponent } from './payroll.component';

export const PayrollRoutes: Routes = [
  {
    path: '',
    component: PayrollComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: PayrollFormComponent,
  },
];
