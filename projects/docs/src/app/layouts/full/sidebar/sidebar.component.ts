import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { NavigationService } from '../../../srv/navigation.service';
import { ThemeService } from '../../../srv/theme.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  styles: [''],
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  form: FormGroup;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItemsSrv: MenuItems,
    public themeSrv: ThemeService,
    public navSrv: NavigationService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.form = new FormGroup({ menuItem: new FormControl() });
    this.form.valueChanges.subscribe((filter) => {

      this.menuItemsSrv.filter(filter?.menuItem);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  get themeState$() {
    return this.themeSrv.themeState$;
  }

  filter(filterValue: string) {
    this.menuItemsSrv.filter(filterValue);
  }

  applyFilter(event?: Event) {
    const filterValue =
      (event?.target as HTMLInputElement)?.value?.trim()?.toLowerCase() || '';
    this.filter(filterValue);
  }
}
