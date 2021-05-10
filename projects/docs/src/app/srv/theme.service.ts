import { Injectable } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import THEMES_CATALOG from '../../assets/themes.json';
import { BehaviorSubject } from 'rxjs';
import { NgGtdThemes } from '../types/common-types';

@Injectable()
export class ThemeService {
  themes: any;
  public uiPalette: BehaviorSubject<NgGtdThemes>;
  constructor(private styleManager: StyleManagerService) {
    this.themes = THEMES_CATALOG;
    this.uiPalette = new BehaviorSubject<NgGtdThemes>(NgGtdThemes.NeGtd);
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      'theme',
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }

  installTheme(themeName: string) {
    debugger
    if (document != null && document.getElementById('themeAsset')) {
      var element = <HTMLLinkElement>document.getElementById('themeAsset')!;
      element.href = `/projects/docs/src/assets/styles/theme/${themeName}.css`;
    }
    const theme = this.themes.find(
      (currentTheme: any) => currentTheme.name === themeName
    );
    if (!theme) {
      return;
    }
    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `/assets/theme/${theme.name}.scss`);
    }
  }

  changeTheme(themeToSet: NgGtdThemes) {
    // this.themeSrv.installTheme(themeToSet);
    this.uiPalette.next(themeToSet);
  }
}
