import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { animationsForm5 } from '../../animations/form-animation';
import { ToolbarComponent } from '../../material-component/toolbar/toolbar.component';
import { Menu, MenuItems } from '../../shared/menu-items/menu-items';
import { AppStateService } from '../../srv/app-state.service';
import { NavigationService } from '../../srv/navigation.service';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['full.component.scss'],
  animations: [slideInAnimation]
})
export class FullComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ToolbarComponent)
  selectedPane: any;

  get activeRoute() {
    const items = decodeURIComponent(this.router.url)?.split('/');
    const item = this.menuItemsSrv?.menuState$?.value?.menuItems?.filter(item => {
      return item.state === `${items[1]}`;
    }).map( item => {
      const items2 = items[2]?.split(';')?.[0] ?? items[2]!;
      if(item.state === `${items[1]}`){
        return item.menuItems?.filter(item => item.state === `/${items[1]}/${items2}`)?.[0]?.name;
      }
      return item.state;
    } )?.[0];
    return `${item ?? 'Nómina'}`;
  }

  constructor(
    public menuItemsSrv: MenuItems,
    public stateSrv: AppStateService,
    public router: Router,
    public navSrv: NavigationService
  ) {}

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }
  ngOnDestroy(): void {}
  ngAfterViewInit() {}

  toggleMenu() {
    this.stateSrv.toggleMenu();
  }

  get themeState$() {
    return this.stateSrv.themeState$;
  }

  codePoint(emojiCodePoint:number) {
    return String.fromCodePoint(emojiCodePoint);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
