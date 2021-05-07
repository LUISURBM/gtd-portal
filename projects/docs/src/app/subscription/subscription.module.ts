import { CdkTableModule } from "@angular/cdk/table";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { FilterValueComponent } from "./filter-value.component";
import { SubscriptionComponent } from "./subscription.component";
import { SubscriptionRoutingModule } from "./subscription.routing.module";
import {MatSortModule} from '@angular/material/sort';
import { DemoMaterialModule } from "../demo-material-module";

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
  ],
  providers: [],
  entryComponents: [FilterValueComponent],
  declarations: [SubscriptionComponent, FilterValueComponent],
})
export class SubscriptionComponentsModule {}
