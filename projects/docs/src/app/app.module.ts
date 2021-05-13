import { OverlayContainer } from '@angular/cdk/overlay';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptor,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LogLevel } from 'msal';
import { pairwise } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { apiConfig, b2cPolicies } from './b2c-config';
import { DemoMaterialModule } from './demo-material-module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { HelperComponent } from './layouts/full/helper/helper.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { InMemDataService } from './srv/in-mem-data-service';
import { InMemService } from './srv/in-mem-service';
import { StyleManagerService } from './srv/style-manager.service';
import { ThemeService } from './srv/theme.service';
import { NgGtdThemes } from './types/common-types';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '81564fb6-eaa3-4c3f-918b-b5f567d4b595',
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      redirectUri: 'https://payroll.dev.fpicolombia.com/',
      postLogoutRedirectUri: '/',
      knownAuthorities: [b2cPolicies.authorityDomain],
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(apiConfig.uri, apiConfig.scopes);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: [...apiConfig.scopes],
    },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    HelperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService),
    SharedModule,
    AppRoutingModule,
    MsalModule,
    MatToolbarModule,
    GoogleChartsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory,
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory,
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    InMemService,
    InMemDataService,
    ThemeService,
    StyleManagerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer, inMemSrv: ThemeService) {
    overlayContainer.getContainerElement().classList.add(NgGtdThemes.NeGtd);
    inMemSrv.themeState$.pipe(pairwise()).subscribe(([p, q]) => {
      console.log(p, q);
      if (q) overlayContainer.getContainerElement().classList.remove(p.uiPalette);
      if (p) overlayContainer.getContainerElement().classList.add(q.uiPalette);
    });
  }
}
