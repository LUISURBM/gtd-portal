import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { AppStateService } from '../../../srv/app-state.service';
import { ValuesCatalog } from '../../../srv/in-mem-data-service';
import { NavigationService } from '../../../srv/navigation.service';
import { StoredProcedureService } from '../../../srv/payroll/rest/storedProcedure.service';
import { EnumCatalogs } from '../../../types/common-types';
import { catalogosSaludPensionSindicatoReq } from '../salud-pension-sindicato/salud-pension-sindicato-data';
import { MENU_ITEMS } from './deducciones-data';
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
  selector: 'app-deducciones-view',
  styleUrls: ['./deducciones.component.scss'],
  templateUrl: './deducciones-view.component.html',
  animations: [slideInAnimation],
})
export class DeduccionesViewComponent implements OnInit {
  position = 'below';
  public FULL_ITEMS: ValuesCatalog[] = [];
  public menuItems: ValuesCatalog[] = [];

  form: FormGroup;
  subscriptions: Subscription[] = [];

  catalogosSaludPensionSindicato$ = this.storedProcedureAPISrv
    .exectuteProcedureUsingPOST1(
      catalogosSaludPensionSindicatoReq,
      'events',
      true,
      { httpHeaderAccept: 'application/json' }
    )
    .pipe(
      tap({
        next: (data: any) => {
          if (!data.body?.body) return;
          const saludPScatalogs = {
            saludPensionSindicato: data.body?.body,
          } as EnumCatalogs;
          this.stateSrv.agregarCatalogo(saludPScatalogs);

          this.FULL_ITEMS = [
            ...MENU_ITEMS,
            ...data.body?.body?.map((c: ValuesCatalog, i: number) => {
              return {
                ...c,
                state: 'salud-pension-sindicato',
                emoji: '1F468',
              };
            }),
          ];
          this.menuItems = this.FULL_ITEMS;
        },
      })
    );

  constructor(
    public builder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public stateSrv: AppStateService,
    private elRef: ElementRef,
    public navSrv: NavigationService,
    public menuItemsSrv: MenuItems,
    private storedProcedureAPISrv: StoredProcedureService
  ) {
    this.form = this.builder.group({
      menuItem: builder.control(''),
      nominaIndividualId: undefined,
      nominaGeneralId: undefined,
      deduccionesId: builder.control(''),
      fechaCorte: new Date(),
      primerNombre: builder.control(''),
    });
    this.subscriptions = [
      this.catalogosSaludPensionSindicato$.subscribe({
        error: console.log,
      }),
      this.route.params.subscribe((params) => {
        const data1 = JSON.parse(params['data']);
        this.form.patchValue(data1);
      }),
      this.form.valueChanges.subscribe((filter) => {
        this.filter(filter?.menuItem);
      }),
    ];
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.navSrv.navigate(
      '/nónima/view',
      JSON.stringify({
        nominaIndividualId: this.form.value.nominaIndividualId.id,
        nominaGeneralId: this.form.value.nominaGeneralId,
        fechaCorte: this.form.value.fechaCorte,
      })
    );
  }

  save() {}

  get f() {
    return this.form.controls;
  }

  filter(menuItemName: string) {
    this.menuItems = this.FULL_ITEMS;
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

  generalData = () => {
    return JSON.stringify({
      nominaIndividualId: this.form.value.nominaIndividualId,
      nominaGeneralId: this.form.value.nominaGeneralId,
      fechaCorte: this.form.value.fechaCorte,
    });
  };

  deduccionesData = (route: ValuesCatalog) => {
    return JSON.stringify({
      nominaIndividualId: this.form.value.nominaIndividualId,
      nominaGeneralId: this.form.value.nominaGeneralId,
      deduccionesId: this.form.value.deduccionesId,
      fechaCorte: this.form.value.fechaCorte,
      ruta: route,
    });
  };

  individualData = () => {
    return JSON.stringify({
      nominaGeneralId: this.form.value.nominaGeneralId,
      nominaIndividualId: this.form.value.nominaIndividualId,
      fechaCorte: this.form.value.fechaCorte,
    });
  };

  primerNombreTrabajador() {
    return `${this.form.value.primerNombre ?? ''}`;
  }
}
