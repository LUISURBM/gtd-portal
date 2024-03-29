import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ValuesCatalog } from '../../srv/in-mem-data-service';

interface MenuState {
  menuItems: ValuesCatalog[];
}

export const MENUITEMS: ValuesCatalog[] = [
  {
    state: 'dashboard',
    name: 'Tableros',
    type: 'link',
    icon: 'dashboard',
    emoji: '1F4CA',
  },
  {
    state: 'nómina',
    name: 'Nóminas',
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
        name: 'Nómina Individual  >  Devengos',
        type: 'link',
        icon: 'work',
      },
      {
        state: '/nómina/deducciones',
        name: 'Nómina Individual  >  Deducciones',
        type: 'link',
        icon: 'work',
      },
    ],
  },
  {
    state: 'trabajador',
    name: 'Trabajadores',
    type: 'link',
    icon: 'face',
    emoji: '1F939',
  },
  {
    state: 'subscripciones',
    type: 'link',
    name: 'Subscripciones',
    icon: 'subscriptions',
    emoji: '1F4B3',
  },
  {
    state: 'parámetros',
    type: 'link',
    name: 'Parámetros',
    icon: 'settings_applications',
    emoji: '2699',
    menuItems: [
      {
        state: 'button',
        type: 'link',
        name: 'Buttons',
        icon: 'crop_7_5',
      },
      {
        state: 'grid',
        type: 'link',
        name: 'Grid List',
        icon: 'view_comfy',
      },
      {
        state: 'lists',
        type: 'link',
        name: 'Lists',
        icon: 'view_list',
      },
      {
        state: 'menu',
        type: 'link',
        name: 'Menu',
        icon: 'view_headline',
      },
      { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
      {
        state: 'stepper',
        type: 'link',
        name: 'Stepper',
        icon: 'web',
      },
      {
        state: 'expansion',
        type: 'link',
        name: 'Expansion Panel',
        icon: 'vertical_align_center',
      },
      {
        state: 'chips',
        type: 'link',
        name: 'Chips',
        icon: 'vignette',
      },
      {
        state: 'toolbar',
        type: 'link',
        name: 'Toolbar',
        icon: 'voicemail',
      },
      {
        state: 'progress-snipper',
        type: 'link',
        name: 'Progress snipper',
        icon: 'border_horizontal',
      },
      {
        state: 'progress',
        type: 'link',
        name: 'Progress Bar',
        icon: 'blur_circular',
      },
      {
        state: 'dialog',
        type: 'link',
        name: 'Dialog',
        icon: 'assignment_turned_in',
      },
      {
        state: 'tooltip',
        type: 'link',
        name: 'Tooltip',
        icon: 'assistant',
      },
      {
        state: 'snackbar',
        type: 'link',
        name: 'Snackbar',
        icon: 'adb',
      },
      {
        state: 'slider',
        type: 'link',
        name: 'Slider',
        icon: 'developer_mode',
      },
      {
        state: 'slide-toggle',
        type: 'link',
        name: 'Slide Toggle',
        icon: 'all_inclusive',
      },
    ],
  },
  {
    state: 'login',
    name: 'Inicio sesión',
    type: 'link',
    icon: 'login',
    emoji: '1F465',
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

  codePoint(emojiCodePoint: any) {
    return String.fromCodePoint(
      ...emojiCodePoint.split('-').map((i: any) => parseInt(i, 16))
    );
  }
}
