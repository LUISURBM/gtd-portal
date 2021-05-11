import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartistModule } from 'ng-chartist';
import { DemoMaterialModule } from '../demo-material-module';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { MetricsComponent } from './dashboard-components/metrics/metrics.component';
import { PaymentOverviewGrapComponent } from './dashboard-components/payment-overview-grap/payment-overview-grap.component';
import { PayrollOverviewGrapComponent } from './dashboard-components/payroll-overview-grap/payroll-overview-grap.component';
import { SalesOverviewGrapComponent } from './dashboard-components/sales-overview-grap/sales-overview-grap.component';
import { StickerComponent } from './dashboard-components/sticker/sticker.component';
import { VisiterGraphComponent } from './dashboard-components/visiter-graph/visiter-graph.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

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
    PaymentOverviewGrapComponent,
    MetricsComponent
  ],
})
export class DashboardModule {}
