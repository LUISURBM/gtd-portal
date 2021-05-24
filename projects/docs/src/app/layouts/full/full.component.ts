import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy,AfterViewInit, ViewChild} from '@angular/core';
import { ToolbarComponent } from '../../material-component/toolbar/toolbar.component';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { ThemeService } from '../../srv/theme.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: [ 'full.component.scss'],

})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  @ViewChild(ToolbarComponent)
  selectedPane: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    public themeSrv: ThemeService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}

  toggleMenu(){
    this.themeSrv.toggleMenu();
  }

  get themeState$() {
    return this.themeSrv.themeState$;
  }

}
