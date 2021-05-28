import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../../../shared/menu-items/menu-items';
import { NavigationService } from '../../../srv/navigation.service';
import { AppStateService } from '../../../srv/local-app.service';
import { MENU_ITEMS } from './deducciones-data';

@Component({
  selector: 'app-deducciones-view',
  styleUrls: ['./deducciones.component.scss'],
  templateUrl: './deducciones-view.component.html'
})
export class DeduccionesViewComponent {
  position = 'below';
  public menuItems: Menu[];

  form: FormGroup;
  constructor(
    public builder: FormBuilder,
    private route: ActivatedRoute,
    public stateSrv: AppStateService,
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

  toggleFullScreen = () =>  this.stateSrv.toggleFullScreen(this.elRef.nativeElement);

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
