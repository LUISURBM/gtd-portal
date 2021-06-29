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
    public navSrv: NavigationService
  ) {
    this.loading = true;
  }

  get themeState$() {
    return this.stateSrv.themeState$;
  }
}
