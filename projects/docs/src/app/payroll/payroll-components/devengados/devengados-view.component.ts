import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../../../shared/menu-items/menu-items';
import { EMPTY, MENU_ITEMS } from './devengados-data';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../../../srv/theme.service';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { NavigationService } from '../../../srv/navigation.service';
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
@Component({
  selector: 'app-devengados-view',
  styleUrls: ['./devengados.component.scss'],
  templateUrl: './devengados-view.component.html',
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class DevengadosViewComponent {
  position = 'below';
  public menuItems: Menu[];

  form: FormGroup;
  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public themeSrv: ThemeService,
    private elRef:ElementRef
    , public navSrv: NavigationService
  ) {
    this.menuItems = MENU_ITEMS;

    this.form = this.builder.group({
      menuItem: builder.control(''),
    });

    this.route.queryParams.subscribe((params) => {
      const data1 = params['data'];
      this.form.patchValue(data1);
    });
    this.form.valueChanges.subscribe((filter) => {
      this.filter(filter?.menuItem);
    });
  }

  onNoClick(): void {}

  save() {}

  get f() {
    return this.form.controls;
  }

  filter(menuItemName: string) {
    this.menuItems = MENU_ITEMS;
    if (menuItemName) {
      this.menuItems = this.menuItems.filter((item) =>
        item.name
          ?.toLocaleLowerCase()
          .includes(menuItemName?.toLocaleLowerCase())
      );
    }
  }

  toggleFullScreen = () =>  this.themeSrv.toggleFullScreen(this.elRef.nativeElement);

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
