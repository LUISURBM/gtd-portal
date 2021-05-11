import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrabajadorRoutes } from './trabajador.routing';
import { ChartistModule } from 'ng-chartist';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrabajadorComponent } from "./trabajador.component";
import { FilterValueComponent } from './filter.componet';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(TrabajadorRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [TrabajadorComponent,FilterValueComponent]
})
export class DashboardModule {}
