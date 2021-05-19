import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MaterialComponent } from './material.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const MaterialRoutes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'button',
            component: ButtonsComponent,
          },
          {
            path: 'grid',
            component: GridComponent,
          },
          {
            path: 'lists',
            component: ListsComponent,
          },
          {
            path: 'menu',
            component: MenuComponent,
          },
          {
            path: 'tabs',
            component: TabsComponent,
          },
          {
            path: 'stepper',
            component: StepperComponent,
          },
          {
            path: 'expansion',
            component: ExpansionComponent,
          },
          {
            path: 'chips',
            component: ChipsComponent,
          },
          {
            path: 'toolbar',
            component: ToolbarComponent,
          },
          {
            path: 'progress-snipper',
            component: ProgressSnipperComponent,
          },
          {
            path: 'progress',
            component: ProgressComponent,
          },
          {
            path: 'dialog',
            component: DialogComponent,
          },
          {
            path: 'tooltip',
            component: TooltipComponent,
          },
          {
            path: 'snackbar',
            component: SnackbarComponent,
          },
          {
            path: 'slider',
            component: SliderComponent,
          },
          {
            path: 'slide-toggle',
            component: SlideToggleComponent,
          },
          {
            path: '',
            redirectTo: '/button',
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(MaterialRoutes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
