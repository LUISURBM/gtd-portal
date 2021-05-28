import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface MenuState {
  menuItems: Menu[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?:[{ type: string, value: string}],
  menuItems?: Menu[];
}

export const MENUITEMS:Menu[] = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard' },
  { state: 'trabajador', name: 'Trabajador', type: 'link', icon: 'face' },
  { state: 'nómina', name: 'Nómina', type: 'link', icon: 'people' },
  { state: 'subscription', type: 'link', name: 'Subscription', icon: 'subscriptions' },
  { state: '/components/button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
  { state: 'components/grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
  { state: 'components/lists', type: 'link', name: 'Lists', icon: 'view_list' },
  { state: 'components/menu', type: 'link', name: 'Menu', icon: 'view_headline' },
  { state: 'components/tabs', type: 'link', name: 'Tabs', icon: 'tab' },
  { state: 'components/stepper', type: 'link', name: 'Stepper', icon: 'web' },
  {
    state: 'components/expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center'
  },
  { state: 'components/chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'components/toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'components/progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'components/progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'components/dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'components/tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'components/snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'components/slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'components/slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
];

@Injectable()
export class MenuItems {
  public menuState$: BehaviorSubject<MenuState> =
    new BehaviorSubject<MenuState>({
      menuItems: MENUITEMS,
    });

  filter(filter: string) {
    if(filter) {
      this.menuState$.next({
        menuItems: MENUITEMS.filter((item) => item.name
            ?.toLocaleLowerCase()
            .includes(filter?.toLocaleLowerCase())) } );
    } else
    { this.menuState$.next({ menuItems: MENUITEMS }); }
  }
}
