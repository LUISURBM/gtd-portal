import { Location } from '@angular/common';
import { HostListener, Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface NavState {
  loading?: number;
  states?: RouteState[];
}
export interface RouteState {
  route?: string;
  data?: any;
}
@Injectable({ providedIn: 'root' })
export class NavigationService implements OnDestroy {
  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
    console.log('⏮ back button pressed');
    event.preventDefault();
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
  subscriptions: any[] = [];
  private history: string[] = [];
  public routeState$: BehaviorSubject<NavState> = new BehaviorSubject<NavState>(
    {
      states: [],
    }
  );

  get previous() {
    return [this.history[this.history.length - 1]];
  }
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.subscriptions.push(
      location.subscribe((v: any) => {
        console.log(v);
      }),
      this.routeState$.subscribe(),
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.navigationInterceptor(event);
          this.history.push(event.urlAfterRedirects);
        }
      })
    );
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  navigation = (loading?: number) => {
    this.routeState$.next({ ...this.routeState$.value, loading: loading });
  };

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log(`👾 app-> event: NavigationStart`);
      this.navigation(10);
    }
    if (event instanceof NavigationEnd) {
      console.log(`👾 app-> event: NavigationEnd`);
      this.navigation();
    }
    if (event instanceof NavigationCancel) {
      console.log(`👾 app-> event: NavigationCancel`);
      this.navigation();
    }
    if (event instanceof NavigationError) {
      console.log(`👾 app-> event: NavigationError`);
      this.navigation();
    }
  }

  navigate(route: string, data?: any, localRoute?: ActivatedRoute): void {
    this.routeState$.next({
      ...this.routeState$.value,
      states: [...this.routeState$.value.states!, { route, data }],
    });
    this.location.go(route);
    this.router.navigate([route, { data: data }], {
      skipLocationChange: true,
      relativeTo: localRoute ?? this.route,
    });
  }
}
