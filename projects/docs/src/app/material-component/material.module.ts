import { CdkTableModule } from "@angular/cdk/table";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import "hammerjs";
import { DemoMaterialModule } from "../demo-material-module";
import { SignInComponent } from "../layouts/full/header/sign-in.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ChipsComponent } from "./chips/chips.component";
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent,
} from "./dialog/dialog.component";
import { ExpansionComponent } from "./expansion/expansion.component";
import { GridComponent } from "./grid/grid.component";
import { ListsComponent } from "./lists/lists.component";
import { MaterialComponent } from "./material.component";
import { MaterialRoutingModule } from "./material.routing.module";
import { MenuComponent } from "./menu/menu.component";
import { ProgressSnipperComponent } from "./progress-snipper/progress-snipper.component";
import { ProgressComponent } from "./progress/progress.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SliderComponent } from "./slider/slider.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

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
    MaterialRoutingModule,
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent, SignInComponent],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    SignInComponent,
    MaterialComponent,
  ],
})
export class MaterialComponentsModule {}
