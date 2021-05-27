import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarComponent } from '../../material-component/toolbar/toolbar.component';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { ThemeService } from '../../srv/theme.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['full.component.scss'],
})
export class FullComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ToolbarComponent)
  selectedPane: any;

  constructor(
    public menuItems: MenuItems,
    public themeSrv: ThemeService,
    public router: Router
  ) {}


  ngOnInit(){
    console.log('configured routes: ', this.router.config);
  }
  ngOnDestroy(): void {}
  ngAfterViewInit() {}

  toggleMenu() {
    this.themeSrv.toggleMenu();
  }

  get themeState$() {
    return this.themeSrv.themeState$;
  }
}
