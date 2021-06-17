import { Component, OnDestroy } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'docs';
  loading: boolean;
  subscriptions:Subscription[] = [];
  constructor(public stateSrv: AppStateService, private router: Router) {
    this.loading = true;
    this.subscriptions.push (this.router.events.subscribe((e: any) => {
      this.navigationInterceptor(e);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription:Subscription) => subscription.unsubscribe());
  }

  get themeState$() {
    return this.stateSrv.themeState$;
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log(`👾 app-> event: NavigationStart`);
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      console.log(`👾 app-> event: NavigationEnd`);
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      console.log(`👾 app-> event: NavigationCancel`);
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      console.log(`👾 app-> event: NavigationError`);
      this.loading = false;
    }
  }
}
