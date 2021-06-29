import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { PayrollModule } from '../payroll/payroll.module';
import { SharedModule } from '../shared/shared.module';
import { TrabajadorFormComponent } from './trabajador-form.component';
import { TrabajadorViewComponent } from './trabajador-view.component';
import { TrabajadorComponent } from './trabajador.component';
import { trabajadorRoutes } from './trabajador.routing';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(trabajadorRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    TrabajadorComponent,
    TrabajadorFormComponent,
    TrabajadorViewComponent,
  ],
})
export class TrabajadorModule {}
