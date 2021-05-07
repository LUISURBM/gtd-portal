import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartistModule } from "ng-chartist";
import { DemoMaterialModule } from "../demo-material-module";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile.routing";

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
