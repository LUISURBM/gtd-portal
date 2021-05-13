import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { FilterValueComponent } from './filter.componet';
import { TrabajadorComponent } from './trabajador.component';
import { TrabajadorRoutes } from './trabajador.routing';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(TrabajadorRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [TrabajadorComponent, FilterValueComponent],
})
export class DashboardModule {}
