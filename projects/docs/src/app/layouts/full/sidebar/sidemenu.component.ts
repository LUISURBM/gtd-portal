import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { NavigationService } from '../../../srv/navigation.service';
import { AppStateService } from '../../../srv/app-state.service';
import { animationsForm4 } from '../../../animations/form-animation';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  styles: [''],
  animations: animationsForm4
})
export class AppSideMenuComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  form: FormGroup;
  private _mobileQueryListener: () => void;
  @ViewChild('snav') sidenav!: MatSidenav;
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: '#DDBDF1'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 4, rows: 4, color: 'lightgreen'},
  ];
  state = "open";

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItemsSrv: MenuItems,
    public stateSrv: AppStateService,
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
    return this.stateSrv.themeState$;
  }

  filter(filterValue: string) {
    this.menuItemsSrv.filter(filterValue);
  }

  applyFilter(event?: Event) {
    const filterValue =
      (event?.target as HTMLInputElement)?.value?.trim()?.toLowerCase() || '';
    this.filter(filterValue);
  }


  close(reason: string) {
    this.sidenav.close();
  }

  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }
}
