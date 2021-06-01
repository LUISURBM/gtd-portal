import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarComponent } from '../../material-component/toolbar/toolbar.component';
import { Menu, MenuItems } from '../../shared/menu-items/menu-items';
import { AppStateService } from '../../srv/local-app.service';
import { NavigationService } from '../../srv/navigation.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['full.component.scss'],
})
export class FullComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ToolbarComponent)
  selectedPane: any;

  get activeRoute() {
    const items = this.menuItems?.menuState$?.value?.menuItems?.filter(item => item.name === this.router.url.split('/')[0]).map((item: Menu) => {
      return `${item.name} ${item.menuItems?.filter(item => item.name === this.router.url.split('/')[1])?.map( item => item.name )?.[0]}`;
    });
    return `${items[0] ?? 'Nómina'}`;
  }

  constructor(
    public menuItems: MenuItems,
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
}
