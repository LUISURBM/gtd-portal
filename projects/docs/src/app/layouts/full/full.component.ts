import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ToolbarComponent } from '../../material-component/toolbar/toolbar.component';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { ThemeService } from '../../srv/theme.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['full.component.scss'],
})
export class FullComponent implements OnDestroy, AfterViewInit {
  @ViewChild(ToolbarComponent)
  selectedPane: any;

  constructor(public menuItems: MenuItems, public themeSrv: ThemeService) {}

  ngOnDestroy(): void {

  }
  ngAfterViewInit() {}

  toggleMenu() {
    this.themeSrv.toggleMenu();
  }

  get themeState$() {
    return this.themeSrv.themeState$;
  }
}
