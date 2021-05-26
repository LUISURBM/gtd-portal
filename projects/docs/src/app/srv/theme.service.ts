import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
  MediaMatcher,
} from '@angular/cdk/layout';
import {
  ApplicationRef,
  ChangeDetectorRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgGtdThemes, ValueOption } from '../types/common-types';
import { THEMES_OPTIONS } from '../values-catalog';
import { StyleManagerService } from './style-manager.service';

interface ThemeState {
  uiPalette: NgGtdThemes;
  darkPalette?: boolean;
  visibleMenu: boolean;
  fullScreen: boolean;
  XSmall?: boolean;
  Small?: boolean;
  Medium?: boolean;
  Large?: boolean;
}
@Injectable()
export class ThemeService {
  themes: ValueOption[] = THEMES_OPTIONS;
  public themeState$: BehaviorSubject<ThemeState> =
    new BehaviorSubject<ThemeState>({
      uiPalette: NgGtdThemes.FpiSkin,
      visibleMenu: false,
      fullScreen: false,
    });

  constructor(
    breakpointObserver: BreakpointObserver,
    media: MediaMatcher,
    private styleManager: StyleManagerService,
    rendererFactory: RendererFactory2
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
      ])
      .subscribe({
        next: (state) =>
          this.themeState$?.next({
            uiPalette: NgGtdThemes.FpiSkin,
            visibleMenu: false,
            fullScreen: false,
            XSmall: state.breakpoints[Breakpoints.XSmall],
            Small: state.breakpoints[Breakpoints.Small],
            Medium: state.breakpoints[Breakpoints.Medium],
            Large: state.breakpoints[Breakpoints.Large],
          }),
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
    }
  }

  closeFullscreen(document: any) {
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
