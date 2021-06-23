import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { animationsForm5 } from '../../animations/form-animation';
import { ToolbarComponent } from '../../material-component/toolbar/toolbar.component';
import { Menu, MenuItems } from '../../shared/menu-items/menu-items';
import { AppStateService } from '../../srv/app-state.service';
import { NavigationService } from '../../srv/navigation.service';
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['full.component.scss']
})
export class FullComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ToolbarComponent)
  selectedPane: any;

  get activeRoute() {
    const items = decodeURIComponent(this.router.url)?.split('/');
    const item = this.menuItemsSrv?.menuState$?.value?.menuItems?.filter(item => {
      return item.state === `${items[1]}`;
    }).map( item => {
      const items2 = items[2]?.split(';')?.[0] ?? items[2]!;
      if(item.state === `${items[1]}`){
        return item.menuItems?.filter(item => item.state === `/${items[1]}/${items2}`)?.[0]?.name;
      }
      return item.state;
    } )?.[0];
    return `${item ?? 'Nómina'}`;
  }

  constructor(
    public menuItemsSrv: MenuItems,
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

  codePoint(emojiCodePoint:number) {
    return String.fromCodePoint(emojiCodePoint);
  }

}
