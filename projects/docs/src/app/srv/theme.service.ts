import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgGtdThemes, ValueOption } from '../types/common-types';
import { THEMES_OPTIONS } from '../values-catalog';
import { StyleManagerService } from './style-manager.service';

interface ThemeState {
  uiPalette: NgGtdThemes;
  darkPalette?: boolean;
  visibleMenu: boolean;
  fullScreen: boolean;
}
@Injectable()
export class ThemeService {
  themes: ValueOption[] = THEMES_OPTIONS;
  public themeState$: BehaviorSubject<ThemeState> =
    new BehaviorSubject<ThemeState>({
      uiPalette: NgGtdThemes.FpiSkin,
      visibleMenu: false,
      fullScreen: false
    });

  private renderer: Renderer2;
  constructor(
    private styleManager: StyleManagerService,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.themeState$?.next({
      uiPalette: NgGtdThemes.FpiSkin,
      visibleMenu: false,
      fullScreen: false
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

  toggleFullScreen(nativeElement: any) {
    if (!this.themeState$.value.fullScreen) {
      this.openFullscreen(nativeElement);
    } else {
      this.closeFullscreen(nativeElement);
    }
  }

  openFullscreen(documentElement: any) {
    this.themeState$.next({ ...this.themeState$.value, fullScreen: true });
    this.renderer.addClass(documentElement, 'full-screen-view');
    if (documentElement.requestFullscreen) {
      documentElement.requestFullscreen();
    } else if (documentElement.mozRequestFullScreen) {
      /* Firefox */
      documentElement.mozRequestFullScreen();
    } else if (documentElement.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      documentElement.webkitRequestFullscreen();
    } else if (documentElement.msRequestFullscreen) {
      /* IE/Edge */
      documentElement.msRequestFullscreen();
    } else {
      this.themeState$.next({ ...this.themeState$.value, fullScreen: false });
      this.renderer.removeClass(documentElement, 'full-screen-view');
    }
  }

  closeFullscreen(document: any) {
    this.renderer.removeClass(document, 'full-screen-view');
    this.themeState$.next({ ...this.themeState$.value, fullScreen: false });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    } else {
      (document as any).exitFullscreen();
    }
  }
}
