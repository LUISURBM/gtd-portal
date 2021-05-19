import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgGtdThemes, ValueOption } from '../types/common-types';
import { THEMES_OPTIONS } from '../values-catalog';
import { StyleManagerService } from './style-manager.service';

interface ThemeState {
  uiPalette: NgGtdThemes;
  visibleMenu: boolean;
}
@Injectable()
export class ThemeService {
  themes: ValueOption[] = THEMES_OPTIONS;
  public themeState$: BehaviorSubject<ThemeState> =
    new BehaviorSubject<ThemeState>({
      uiPalette: NgGtdThemes.FpiSkin,
      visibleMenu: false,
    });

  constructor(private styleManager: StyleManagerService) {
    this.themeState$?.next({
      uiPalette: NgGtdThemes.FpiSkin,
      visibleMenu: false,
    });
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      'theme',
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }

  setUiPalette(themeToSet: NgGtdThemes) {
    this.themeState$.next({ ...this.themeState$.value, uiPalette: themeToSet });
  }

  invertTheme() {
    let themeToSet: NgGtdThemes = NgGtdThemes.FpiSkin;
    this.themes.forEach((theme) => {
      if (this.themeState$.value.uiPalette == theme.catalog) {
        themeToSet = theme.alternate;
      } else if (this.themeState$.value.uiPalette == theme.alternate) {
        themeToSet = theme.catalog;
      }
    });
    this.setUiPalette(themeToSet);
  }

  changeTheme(themeToSet: NgGtdThemes) {
    this.themeState$.next({ ...this.themeState$.value, uiPalette: themeToSet });
  }

  toggleMenu() {
    this.themeState$.next({
      ...this.themeState$.value,
      visibleMenu: !this.themeState$.value.visibleMenu,
    });
  }
}
