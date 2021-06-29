import { Routes } from '@angular/router';
import { TrabajadorFormComponent } from './trabajador-form.component';
import { TrabajadorViewComponent } from './trabajador-view.component';

import { TrabajadorComponent } from './trabajador.component';

export const trabajadorRoutes: Routes = [
  {
    path: '',
    component: TrabajadorComponent,
    pathMatch: 'full',
  },
  {
    path: 'view',
    component: TrabajadorViewComponent,
  },
  {
    path: 'form',
    component: TrabajadorFormComponent,
  },
];
