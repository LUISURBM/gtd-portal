import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../../shared/menu-items/menu-items';
import { EMPTY, MENU_ITEMS } from './devengados-data';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../../../srv/theme.service';

@Component({
  selector: 'app-devengados-view',
  styleUrls: ['./devengados.component.scss'],
  templateUrl: './devengados-view.component.html',
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

  toggleFullScreen() {
    this.themeSrv.openFullscreen(this.elRef.nativeElement.offsetParent);
  }
}
