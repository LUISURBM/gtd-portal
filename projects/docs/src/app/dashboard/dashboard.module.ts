import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { SalesOverviewGrapComponent } from './dashboard-components/sales-overview-grap/sales-overview-grap.component';
import { VisiterGraphComponent } from './dashboard-components/visiter-graph/visiter-graph.component';
import { StickerComponent } from './dashboard-components/sticker/sticker.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { PayrollOverviewGrapComponent } from './dashboard-components/payroll-overview-grap/payroll-overview-grap.component';
import { PaymentOverviewGrapComponent } from './dashboard-components/payment-overview-grap/payment-overview-grap.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    GoogleChartsModule,
  ],
  declarations: [
    DashboardComponent,
    SalesOverviewGrapComponent,
    VisiterGraphComponent,
    StickerComponent,
    ContactsComponent,
    ActivityComponent,
    PayrollOverviewGrapComponent,
    PaymentOverviewGrapComponent
  ],
})
export class DashboardModule {}
