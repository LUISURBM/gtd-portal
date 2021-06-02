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
  emoji?: string;
  badge?: [{ type: string; value: string }];
  menuItems?: Menu[];
}

export const MENUITEMS: Menu[] = [
  {
    state: 'dashboard',
    name: 'inicio',
    type: 'link',
    icon: 'dashboard',
    emoji: '1F4CA',
  },
  {
    state: 'trabajador',
    name: 'Empleados',
    type: 'link',
    icon: 'face',
    emoji: '1F939',
  },
  {
    state: 'nómina',
    name: 'Nómina',
    type: 'link',
    icon: 'drive_folder_upload',
    emoji: '1F4C3',
    menuItems: [
      {
        state: '/nómina/individual',
        name: 'Nóminas Individuales',
        type: 'link',
        icon: 'work',
      },
      {
        state: '/nómina/view',
        name: 'Nómina Individual',
        type: 'link',
        icon: 'work',
      },
      {
        state: '/nómina/devengos',
        name: 'Nómina Individual / Devengos',
        type: 'link',
        icon: 'work',
      },
      {
        state: '/nómina/deducciones',
        name: 'Nómina Individual / Deducciones',
        type: 'link',
        icon: 'work',
      },
    ],
  },
  {
    state: 'subscription',
    type: 'link',
    name: 'Subscription',
    icon: 'subscriptions',
    emoji: '1F4B3',
  },
  {
    state: 'parámetros',
    type: 'link',
    name: 'Parámetros',
    icon: 'settings_applications',
    emoji: '2699',
  },
  {
    state: 'docs',
    name: 'docs',
    type: 'link',
    icon: 'dashboard',
    emoji: '1F4BC',
    menuItems: [
      {
        state: '/components/button',
        type: 'link',
        name: 'Buttons',
        icon: 'crop_7_5',
      },
      {
        state: 'components/grid',
        type: 'link',
        name: 'Grid List',
        icon: 'view_comfy',
      },
      {
        state: 'components/lists',
        type: 'link',
        name: 'Lists',
        icon: 'view_list',
      },
      {
        state: 'components/menu',
        type: 'link',
        name: 'Menu',
        icon: 'view_headline',
      },
      { state: 'components/tabs', type: 'link', name: 'Tabs', icon: 'tab' },
      {
        state: 'components/stepper',
        type: 'link',
        name: 'Stepper',
        icon: 'web',
      },
      {
        state: 'components/expansion',
        type: 'link',
        name: 'Expansion Panel',
        icon: 'vertical_align_center',
      },
      {
        state: 'components/chips',
        type: 'link',
        name: 'Chips',
        icon: 'vignette',
      },
      {
        state: 'components/toolbar',
        type: 'link',
        name: 'Toolbar',
        icon: 'voicemail',
      },
      {
        state: 'components/progress-snipper',
        type: 'link',
        name: 'Progress snipper',
        icon: 'border_horizontal',
      },
      {
        state: 'components/progress',
        type: 'link',
        name: 'Progress Bar',
        icon: 'blur_circular',
      },
      {
        state: 'components/dialog',
        type: 'link',
        name: 'Dialog',
        icon: 'assignment_turned_in',
      },
      {
        state: 'components/tooltip',
        type: 'link',
        name: 'Tooltip',
        icon: 'assistant',
      },
      {
        state: 'components/snackbar',
        type: 'link',
        name: 'Snackbar',
        icon: 'adb',
      },
      {
        state: 'components/slider',
        type: 'link',
        name: 'Slider',
        icon: 'developer_mode',
      },
      {
        state: 'components/slide-toggle',
        type: 'link',
        name: 'Slide Toggle',
        icon: 'all_inclusive',
      },
    ],
  },
];

@Injectable()
export class MenuItems {
  public menuState$: BehaviorSubject<MenuState> =
    new BehaviorSubject<MenuState>({
      menuItems: MENUITEMS,
    });

  filter(filter: string) {
    if (filter) {
      this.menuState$.next({
        menuItems: MENUITEMS.filter(
          (item) =>
            item.name
              ?.toLocaleLowerCase()
              .includes(filter?.toLocaleLowerCase()) ||
            item.menuItems?.filter((child) =>
              child.name
                ?.toLocaleLowerCase()
                .includes(filter?.toLocaleLowerCase())
            )
        ),
      });
    } else {
      this.menuState$.next({ menuItems: MENUITEMS });
    }
  }

  codePoint(emojiCodePoint:any) {
    return String.fromCodePoint(...emojiCodePoint.split('-').map((i:any) => parseInt(i,16)));
  }
}
