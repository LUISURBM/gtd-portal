import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MsalBroadcastService, MsalGuardConfiguration,
  MsalService, MSAL_GUARD_CONFIG
} from '@azure/msal-angular';
import {
  AuthenticationResult,

  EventMessage,
  EventType, InteractionStatus,




  InteractionType, PopupRequest, RedirectRequest
} from '@azure/msal-browser';
import { AuthError } from 'msal';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { b2cPolicies } from '../../../b2c-config';
import { InMemService } from '../../../srv/in-mem-service';
import { AppStateService } from '../../../srv/local-app.service';
import {
  NgGtdThemes
} from '../../../types/common-types';
import { SignInComponent } from './sign-in.component';

interface IdTokenClaims extends AuthenticationResult {
  idTokenClaims: {
    acr?: string;
  };
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  title = 'MSAL Angular v2 B2C Sample';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  email: string | undefined;
  name: 'compañer@' | undefined;
  messages: any[]= [{option:'Envíados 20', ico: 'send'}];
  notifications: any[] = [{option:'Recibidos 20', ico: 'send'}];

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    public dialog: MatDialog,
    public inMemSrv: InMemService,
    public http: HttpClient,
    public stateSrv: AppStateService
  ) {
  }

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
    this.setLoginDisplay();

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_SUCCESS ||
            msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        let payload: IdTokenClaims = <AuthenticationResult>result.payload;

        // We need to reject id tokens that were not issued with the default sign-in policy.
        // "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr")
        // To learn more about b2c tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview

        if (payload.idTokenClaims?.acr === b2cPolicies.names.forgotPassword) {
          window.alert(
            'Password has been reset successfully. \nPlease sign-in with your new password.'
          );
          return this.authService.logout();
        } else if (
          payload.idTokenClaims['acr'] === b2cPolicies.names.editProfile
        ) {
          window.alert(
            'Profile has been updated successfully. \nPlease sign-in again.'
          );
          return this.authService.logout();
        }

        return result;
      });

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_FAILURE ||
            msg.eventType === EventType.ACQUIRE_TOKEN_FAILURE
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        if (result.error instanceof AuthError) {
          // Check for forgot password error
          // Learn more about AAD error codes at https://docs.microsoft.com/azure/active-directory/develop/reference-aadsts-error-codes
          if (result.error.message.includes('AADB2C90118')) {
            // login request with reset authority
            let resetPasswordFlowRequest = {
              scopes: ['openid'],
              authority: b2cPolicies.authorities.forgotPassword.authority,
            };

            this.login(resetPasswordFlowRequest);
          }
        }
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService
          .loginPopup({
            ...this.msalGuardConfig.authRequest,
            ...userFlowRequest,
          } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      } else {
        this.authService
          .loginPopup(userFlowRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({
          ...this.msalGuardConfig.authRequest,
          ...userFlowRequest,
        } as RedirectRequest);
      } else {
        this.authService.loginRedirect(userFlowRequest);
      }
    }
  }

  logout() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: '/',
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

  editProfile() {
    let editProfileFlowRequest = {
      scopes: ['openid'],
      authority: b2cPolicies.authorities.editProfile.authority,
    };

    this.login(editProfileFlowRequest);
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '250px',
      data: { name: this.name, email: this.email },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }

  changeTheme(themeToSet: NgGtdThemes) {
    this.stateSrv.setUiPalette(themeToSet);
  }

  invertTheme() {
    this.stateSrv.invertTheme();
  }
}
