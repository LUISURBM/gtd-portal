import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu, MenuItems } from '../../../shared/menu-items/menu-items';
import { AppStateService } from '../../../srv/app-state.service';
import { NavigationService } from '../../../srv/navigation.service';
import { DevengadosService } from '../../../srv/payroll/api/rest/devengados.service';
import { MENU_ITEMS } from './devengados-data';
export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
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
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
@Component({
  selector: 'app-devengados-view',
  styleUrls: ['./devengados.component.scss'],
  templateUrl: './devengados-view.component.html',
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class DevengadosViewComponent {
  position = 'below';
  public menuItems: Menu[];

  form: FormGroup;

  subscriptions: Subscription[] = [];
  constructor(
    public builder: FormBuilder,
    public route: ActivatedRoute,
    public stateSrv: AppStateService,
    private elRef: ElementRef,
    public navSrv: NavigationService,
    public menuItemsSrv: MenuItems,
    public devengosAPISrv: DevengadosService
  ) {
    this.menuItems = MENU_ITEMS;

    this.form = this.builder.group({
      menuItem: builder.control(''),
      nominaGeneralId: builder.control(''),
      nominaIndividualId: undefined,
      devengadosId: undefined,
      fechaCorte: new Date(),
      trabajador: builder.group({
        id: builder.control(''),
        primerNombre: builder.control(''),
        sueldo: builder.control(0),
      }),
    });

    this.subscriptions.push(
      this.route.params.subscribe((params) => {
        const data1 = JSON.parse(params['data']);
        console.log(data1);
        this.form.patchValue(data1);
      }),
      this.form.valueChanges.subscribe((filter) => {
        this.filter(filter?.menuItem);
      })
    );
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

  toggleFullScreen = () =>
    this.stateSrv.toggleFullScreen(this.elRef.nativeElement);

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  devengosData = () => {
    return JSON.stringify({
      nominaIndividualId: this.form.value.nominaIndividualId,
      devengadosId: this.form.value.devengadosId,
    });
  };
}
