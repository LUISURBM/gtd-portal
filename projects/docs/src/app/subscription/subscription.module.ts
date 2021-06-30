import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DemoMaterialModule } from '../demo-material-module';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionFormComponent } from './subscription-form.component';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRoutingModule } from './subscription.routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    SubscriptionRoutingModule,
    SharedModule,
  ],
  providers: [],
  entryComponents: [SubscriptionFormComponent],
  declarations: [SubscriptionComponent, SubscriptionFormComponent],
})
export class SubscriptionComponentsModule {}
