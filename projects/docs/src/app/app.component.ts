import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AppStateService } from './srv/app-state.service';
import { NavigationService } from './srv/navigation.service';
import { StoredProcedureService } from './srv/payroll/rest/api';
import { valoresCatalogos } from './types/common-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'docs';
  loading: boolean;
  subscriptions: Subscription[] = [];
  states: any[] = [];
  constructor(
    public stateSrv: AppStateService,
    public navSrv: NavigationService,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.loading = true;
    this.subscriptions.push(
      this.exectuteProcedureUsingPOST1(
        valoresCatalogos({
          codigoCatalogo: 'TextosNE',
        })
      ).subscribe({
        next: this.leerTextos,
        error: (err: any) => console.log(err),
      })
    );
  }

  leerTextos = (data?: any) => {
    if (!data.body?.body) return;
    this.stateSrv.setTextos(
      data.body?.body?.reduce((y: any, t: any) => {
        y[y['code']] = { name: y['name'], description: y['description'] };
        y[t['code']] = { name: t['name'], description: t['description'] };
        return y;
      })
    );
  };
  exectuteProcedureUsingPOST1 = (params: any) =>
    this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(
      params,
      'events',
      true,
      { httpHeaderAccept: 'application/json' }
    );
  get themeState$() {
    return this.stateSrv.themeState$;
  }
}
