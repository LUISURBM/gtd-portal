import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { confirm } from '../types/common-types';

export interface DirtyComponent {
  isDirty$: BehaviorSubject<boolean>;
}

@Injectable({ providedIn: 'root' })
export class DirtyCheckGuard
  implements CanActivate, CanDeactivate<DirtyComponent>
{
  constructor(private dialog: MatDialog) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    return true;
  }

  canDeactivate(component: DirtyComponent) {
    return component.isDirty$.pipe(
      switchMap((dirty) => {
        if (dirty === false) {
          return of(true);
        }
        return confirm(
          this.dialog,
          `Tiene cambios sin guardar ¿Desea salir de la página actual?`
        );
      }),
      take(1)
    );
  }
}
