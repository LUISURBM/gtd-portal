import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { AnticipoComponent } from './payroll-components/anticipo/anticipo.component';
import { PayrollRoutes } from './payroll.routing';
import { PayrollComponent } from "./payroll.component";
@NgModule({
  declarations: [
    PayrollComponent,
    AnticipoComponent],
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
})
export class PayrollModule {}
