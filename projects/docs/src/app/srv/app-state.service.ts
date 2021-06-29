import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgGtdThemes, ValueOption } from '../types/common-types';
import { THEMES_OPTIONS } from '../values-catalog';
import { ValuesCatalog } from './in-mem-data-service';
import { StyleManagerService } from './style-manager.service';

export interface UIState {
  uiPalette: NgGtdThemes;
  darkPalette?: boolean;
  visibleMenu: boolean;
  fullScreen: boolean;
  loading?: boolean;
  XSmall?: boolean;
  Small?: boolean;
  Medium?: boolean;
  Large?: boolean;
  messages?: ValuesCatalog[];
  notifications?: ValuesCatalog[];
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  themes: ValueOption[] = THEMES_OPTIONS;
  public themeState$: BehaviorSubject<UIState> = new BehaviorSubject<UIState>({
    uiPalette: NgGtdThemes.FpiSkin,
    visibleMenu: false,
    fullScreen: false,
    loading: false,
  });

  constructor(
    breakpointObserver: BreakpointObserver,
    private styleManager: StyleManagerService
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
            ...this.themeState$.value,
            uiPalette: this.themeState$?.value.uiPalette ?? NgGtdThemes.FpiSkin,
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
  }

  closeFullscreen(document: any) {
    this.themeState$.next({ ...this.themeState$.value, fullScreen: false });
  }

  toggleLoading = () =>
    this.themeState$.next({
      ...this.themeState$.value,
      loading: !this.themeState$.value.loading,
    });

  message = (message: string, ico: string) =>
    this.themeState$.next({
      ...this.themeState$.value,
      messages: [
        {
          id: this.themeState$.value.messages?.length! + 1,
          code: ico,
          name: message,
        },
        ...this.themeState$.value.messages!,
      ],
    });
  notificate = (message: string, ico: string) =>
    this.themeState$.next({
      ...this.themeState$.value,
      notifications: [
        {
          id: this.themeState$.value.notifications?.length! + 1,
          code: ico,
          name: message,
        },
        ...this.themeState$.value.notifications!,
      ],
    });
}
