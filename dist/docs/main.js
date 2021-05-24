(self["webpackChunkng_gtd"] = self["webpackChunkng_gtd"] || []).push([["main"],{

/***/ 2512:
/*!*****************************************************!*\
  !*** ./projects/docs/src/app/app-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 1213);
/* harmony import */ var _srv_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./srv/selective-preloading-strategy.service */ 424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: "",
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: "",
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4139)).then((m) => m.HomeComponentsModule),
            },
            {
                // Needed for hash routing
                path: "error",
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4139)).then((m) => m.HomeComponentsModule),
            },
            {
                // Needed for hash routing
                path: "state",
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4139)).then((m) => m.HomeComponentsModule),
            },
            {
                // Needed for hash routing
                path: "code",
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4139)).then((m) => m.HomeComponentsModule),
            },
            {
                path: "profile",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("projects_docs_src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4562)).then((m) => m.ProfileModule),
            },
            {
                path: "dashboard",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("projects_docs_src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 7552)).then((m) => m.DashboardModule),
            },
            {
                path: "trabajador",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_docs_src_app_trabajador_trabajador_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./trabajador/trabajador.module */ 4030)).then((m) => m.DashboardModule),
            },
            {
                path: "nómina",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_docs_src_app_payroll_payroll_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payroll/payroll.module */ 4608)).then((m) => m.PayrollModule),
            },
            {
                path: "components",
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./material-component/material.module */ 8182)).then((m) => m.MaterialComponentsModule),
            },
            {
                path: "subscription",
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_subscription_subscription_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./subscription/subscription.module */ 8327)).then((m) => m.SubscriptionComponentsModule),
            },
        ],
    },
];
const isIframe = window !== window.parent && !window.opener;
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                preloadingStrategy: _srv_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_1__.SelectivePreloadingStrategyService,
                initialNavigation: !isIframe ? "enabled" : "disabled",
                useHash: true
            })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6127:
/*!************************************************!*\
  !*** ./projects/docs/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _srv_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./srv/theme.service */ 920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/spinner.component */ 6817);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);








function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("class", state_r2.uiPalette);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Buffer progress-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "<mat-progress-bar mode=\"buffer\">");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " is a horizontal progress-bar for indicating progress and activity.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(themeSrv, router) {
        this.themeSrv = themeSrv;
        this.router = router;
        this.title = 'docs';
        this.loading = true;
        this.router.events.subscribe((e) => {
            this.navigationInterceptor(e);
        });
    }
    get themeState$() {
        return this.themeSrv.themeState$;
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
            this.loading = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationError) {
            this.loading = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_srv_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 4, consts: [[4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "loading-overlay"], ["mode", "buffer"], [1, "d"], [1, "d", "d-2"], [1, "d", "d-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 15, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.themeState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["@keyframes dots {\n  50% {\n    transform: translateY(-0.4rem);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.d[_ngcontent-%COMP%] {\n  animation: dots 1.5s ease-out infinite;\n}\n.d-2[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n}\n.d-3[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsOEJBQUE7RUFDSjtFQUNFO0lBQ0Usd0JBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRSxzQ0FBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZG90cyB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS40cmVtKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZCB7XHJcbiAgICBhbmltYXRpb246IGRvdHMgMS41cyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmQtMiB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC41cztcclxuICB9XHJcbiAgLmQtMyB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 7672:
/*!*********************************************!*\
  !*** ./projects/docs/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loggerCallback": () => (/* binding */ loggerCallback),
/* harmony export */   "MSALInstanceFactory": () => (/* binding */ MSALInstanceFactory),
/* harmony export */   "MSALInterceptorConfigFactory": () => (/* binding */ MSALInterceptorConfigFactory),
/* harmony export */   "MSALGuardConfigFactory": () => (/* binding */ MSALGuardConfigFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @azure/msal-angular */ 3235);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/msal-browser */ 3495);
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-google-charts */ 159);
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! msal */ 7079);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9328);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 2512);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6127);
/* harmony import */ var _b2c_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./b2c-config */ 9257);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-material-module */ 4217);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/full.component */ 1213);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 9713);
/* harmony import */ var _layouts_full_helper_helper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/full/helper/helper.component */ 9476);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 7907);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ 5175);
/* harmony import */ var _srv_in_mem_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./srv/in-mem-data-service */ 3219);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./srv/in-mem-service */ 6556);
/* harmony import */ var _srv_style_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./srv/style-manager.service */ 273);
/* harmony import */ var _srv_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./srv/theme.service */ 920);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./types/common-types */ 5906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);





























const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1;
function loggerCallback(logLevel, message) {
    console.log(message);
}
function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.PublicClientApplication({
        auth: {
            clientId: '81564fb6-eaa3-4c3f-918b-b5f567d4b595',
            authority: _b2c_config__WEBPACK_IMPORTED_MODULE_3__.b2cPolicies.authorities.signUpSignIn.authority,
            redirectUri: 'https://payroll.dev.fpicolombia.com/',
            postLogoutRedirectUri: '/',
            knownAuthorities: [_b2c_config__WEBPACK_IMPORTED_MODULE_3__.b2cPolicies.authorityDomain],
        },
        cache: {
            cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserCacheLocation.LocalStorage,
            storeAuthStateInCookie: isIE, // set to true for IE 11
        },
        system: {
            loggerOptions: {
                loggerCallback,
                logLevel: msal__WEBPACK_IMPORTED_MODULE_15__.LogLevel.Info,
                piiLoggingEnabled: false,
            },
        },
    });
}
function MSALInterceptorConfigFactory() {
    const protectedResourceMap = new Map();
    protectedResourceMap.set(_b2c_config__WEBPACK_IMPORTED_MODULE_3__.apiConfig.uri, _b2c_config__WEBPACK_IMPORTED_MODULE_3__.apiConfig.scopes);
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.InteractionType.Redirect,
        protectedResourceMap,
    };
}
function MSALGuardConfigFactory() {
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.InteractionType.Redirect,
        authRequest: {
            scopes: [..._b2c_config__WEBPACK_IMPORTED_MODULE_3__.apiConfig.scopes],
        },
    };
}
class AppModule {
    constructor(overlayContainer, themeSrv) {
        overlayContainer.getContainerElement().classList.add(_types_common_types__WEBPACK_IMPORTED_MODULE_14__.NgGtdThemes.FpiSkin);
        themeSrv.themeState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)()).subscribe(([p, q]) => {
            console.log(p, q);
            if (q)
                overlayContainer.getContainerElement().classList.remove(p.uiPalette);
            if (p)
                overlayContainer.getContainerElement().classList.add(q.uiPalette);
        });
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_srv_theme_service__WEBPACK_IMPORTED_MODULE_13__.ThemeService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__.PathLocationStrategy,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS,
            useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalInterceptor,
            multi: true,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MSAL_INSTANCE,
            useFactory: MSALInstanceFactory,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MSAL_GUARD_CONFIG,
            useFactory: MSALGuardConfigFactory,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MSAL_INTERCEPTOR_CONFIG,
            useFactory: MSALInterceptorConfigFactory,
        },
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalService,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalGuard,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalBroadcastService,
        _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_11__.InMemService,
        _srv_in_mem_data_service__WEBPACK_IMPORTED_MODULE_10__.InMemDataService,
        _srv_theme_service__WEBPACK_IMPORTED_MODULE_13__.ThemeService,
        _srv_style_manager_service__WEBPACK_IMPORTED_MODULE_12__.StyleManagerService,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_4__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
            angular_google_charts__WEBPACK_IMPORTED_MODULE_27__.GoogleChartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_6__.AppHeaderComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.AppSidebarComponent,
        _layouts_full_helper_helper_component__WEBPACK_IMPORTED_MODULE_7__.HelperComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_4__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__.MsalModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
        angular_google_charts__WEBPACK_IMPORTED_MODULE_27__.GoogleChartsModule] }); })();


/***/ }),

/***/ 9257:
/*!*********************************************!*\
  !*** ./projects/docs/src/app/b2c-config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b2cPolicies": () => (/* binding */ b2cPolicies),
/* harmony export */   "apiConfig": () => (/* binding */ apiConfig)
/* harmony export */ });
/**
 * Enter here the user flows and custom policies for your B2C application,
 * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_susi",
        forgotPassword: "b2c_1_reset",
        editProfile: "b2c_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://login.microsoftonline.com/49f746c9-a2ca-4f9a-8999-a116947ff6f6",
        },
        forgotPassword: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_reset",
        },
        editProfile: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile"
        }
    },
    authorityDomain: "fabrikamb2c.b2clogin.com"
};
/**
 * Enter here the coordinates of your Web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
const apiConfig = {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me'
};


/***/ }),

/***/ 4217:
/*!*******************************************************!*\
  !*** ./projects/docs/src/app/demo-material-module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": () => (/* binding */ DemoMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 7091);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 8553);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 552);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ 346);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 2542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
DemoMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavContainer], imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] }); })();


/***/ }),

/***/ 1213:
/*!**************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/full.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _material_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material-component/toolbar/toolbar.component */ 8365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ 2243);
/* harmony import */ var _srv_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../srv/theme.service */ 920);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 9713);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 7907);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/spinner.component */ 6817);













/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media, menuItems, themeSrv) {
        this.menuItems = menuItems;
        this.themeSrv = themeSrv;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
    toggleMenu() {
        this.themeSrv.toggleMenu();
    }
    get themeState$() {
        return this.themeSrv.themeState$;
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_srv_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], viewQuery: function FullComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_material_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.selectedPane = _t.first);
    } }, decls: 11, vars: 0, consts: [[1, "main-container"], [1, "topbar", "telative"], ["mat-icon-button", "", "value", "sidebarclosed", 2, "color", "var(--secondary-light)!important", 3, "click"], ["fxFlex", ""], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FullComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.AppHeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9713:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/header/header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-angular */ 3235);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/msal-browser */ 3495);
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! msal */ 6930);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _b2c_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../b2c-config */ 9257);
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.component */ 5370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../srv/in-mem-service */ 6556);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _srv_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../srv/theme.service */ 920);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ 346);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 9895);



















function AppHeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_button_6_Template_button_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r12.ico);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r12.label, " ");
} }
function AppHeaderComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_button_9_Template_button_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r14.ico);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r14.label, " ");
} }
function AppHeaderComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_button_55_Template_button_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const option_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r23.changeTheme(option_r22.catalog); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "use", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "use", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("fill", option_r22.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("fill", option_r22.buttonColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("fill", option_r22.headingColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r22.label);
} }
const _c0 = function () { return ["profile"]; };
class AppHeaderComponent {
    constructor(msalGuardConfig, authService, msalBroadcastService, dialog, inMemSrv, http, themeSrv) {
        this.msalGuardConfig = msalGuardConfig;
        this.authService = authService;
        this.msalBroadcastService = msalBroadcastService;
        this.dialog = dialog;
        this.inMemSrv = inMemSrv;
        this.http = http;
        this.themeSrv = themeSrv;
        this.title = 'MSAL Angular v2 B2C Sample';
        this.isIframe = false;
        this.loginDisplay = false;
        this._destroying$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.messages = [{ option: 'Envíados 20', ico: 'send' }];
        this.notifications = [{ option: 'Recibidos 20', ico: 'send' }];
    }
    ngOnInit() {
        this.isIframe = window !== window.parent && !window.opener;
        this.setLoginDisplay();
        this.msalBroadcastService.inProgress$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((status) => status === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.InteractionStatus.None), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$))
            .subscribe(() => {
            this.setLoginDisplay();
        });
        this.msalBroadcastService.msalSubject$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((msg) => msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.EventType.LOGIN_SUCCESS ||
            msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.EventType.ACQUIRE_TOKEN_SUCCESS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$))
            .subscribe((result) => {
            var _a;
            let payload = result.payload;
            // We need to reject id tokens that were not issued with the default sign-in policy.
            // "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr")
            // To learn more about b2c tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
            if (((_a = payload.idTokenClaims) === null || _a === void 0 ? void 0 : _a.acr) === _b2c_config__WEBPACK_IMPORTED_MODULE_1__.b2cPolicies.names.forgotPassword) {
                window.alert('Password has been reset successfully. \nPlease sign-in with your new password.');
                return this.authService.logout();
            }
            else if (payload.idTokenClaims['acr'] === _b2c_config__WEBPACK_IMPORTED_MODULE_1__.b2cPolicies.names.editProfile) {
                window.alert('Profile has been updated successfully. \nPlease sign-in again.');
                return this.authService.logout();
            }
            return result;
        });
        this.msalBroadcastService.msalSubject$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)((msg) => msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.EventType.LOGIN_FAILURE ||
            msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.EventType.ACQUIRE_TOKEN_FAILURE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$))
            .subscribe((result) => {
            if (result.error instanceof msal__WEBPACK_IMPORTED_MODULE_9__.AuthError) {
                // Check for forgot password error
                // Learn more about AAD error codes at https://docs.microsoft.com/azure/active-directory/develop/reference-aadsts-error-codes
                if (result.error.message.includes('AADB2C90118')) {
                    // login request with reset authority
                    let resetPasswordFlowRequest = {
                        scopes: ['openid'],
                        authority: _b2c_config__WEBPACK_IMPORTED_MODULE_1__.b2cPolicies.authorities.forgotPassword.authority,
                    };
                    this.login(resetPasswordFlowRequest);
                }
            }
        });
    }
    setLoginDisplay() {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    }
    login(userFlowRequest) {
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.InteractionType.Popup) {
            if (this.msalGuardConfig.authRequest) {
                this.authService
                    .loginPopup(Object.assign(Object.assign({}, this.msalGuardConfig.authRequest), userFlowRequest))
                    .subscribe((response) => {
                    this.authService.instance.setActiveAccount(response.account);
                });
            }
            else {
                this.authService
                    .loginPopup(userFlowRequest)
                    .subscribe((response) => {
                    this.authService.instance.setActiveAccount(response.account);
                });
            }
        }
        else {
            if (this.msalGuardConfig.authRequest) {
                this.authService.loginRedirect(Object.assign(Object.assign({}, this.msalGuardConfig.authRequest), userFlowRequest));
            }
            else {
                this.authService.loginRedirect(userFlowRequest);
            }
        }
    }
    logout() {
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.InteractionType.Popup) {
            this.authService.logoutPopup({
                mainWindowRedirectUri: '/',
            });
        }
        else {
            this.authService.logoutRedirect();
        }
    }
    editProfile() {
        let editProfileFlowRequest = {
            scopes: ['openid'],
            authority: _b2c_config__WEBPACK_IMPORTED_MODULE_1__.b2cPolicies.authorities.editProfile.authority,
        };
        this.login(editProfileFlowRequest);
    }
    ngOnDestroy() {
        this._destroying$.next(undefined);
        this._destroying$.complete();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent, {
            width: '250px',
            data: { name: this.name, email: this.email },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            this.email = result;
        });
    }
    changeTheme(themeToSet) {
        this.themeSrv.setUiPalette(themeToSet);
    }
    invertTheme() {
        this.themeSrv.invertTheme();
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__.MSAL_GUARD_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__.MsalBroadcastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_in_mem_service__WEBPACK_IMPORTED_MODULE_3__.InMemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService)); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 56, vars: 14, consts: [["matBadge", "15", "mat-raised-button", "", "color", "accent", "matBadgeColor", "warn", 1, "m-r-20", "hidden-sm-up", 3, "matMenuTriggerFor"], ["matBadge", "15", "mat-raised-button", "", "color", "warn", "matBadgeColor", "warn", 1, "m-r-20", "hidden-sm-up", 3, "matMenuTriggerFor"], [1, "mymegamenu", 3, "click"], ["messagesMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["notificationsMenu", "matMenu"], ["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], ["src", "assets/images/logo__globaltek.png", "alt", "user", 1, "profile-pic"], [1, "mymegamenu"], ["options", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["profile", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor", "click"], ["accessibility", "matMenu"], ["palette", "matMenu"], ["role", "img", "svgicon", "theme-example", "aria-hidden", "true"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100%", "height", "100%", "viewBox", "0 0 80 80", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z", "id", "a"], ["d", "M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z", "id", "b"], ["d", "M0 0h80v17.24H0V0z", "id", "c"], [0, "xlink", "href", "#a"], [0, "xlink", "href", "#b"], [0, "xlink", "href", "#c"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_mat_menu_click_4_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppHeaderComponent_button_6_Template, 4, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-menu", 2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_mat_menu_click_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppHeaderComponent_button_9_Template, 4, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AppHeaderComponent_button_18_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AppHeaderComponent_button_19_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AppHeaderComponent_button_20_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Ver m\u00E1s ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-menu", 8, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Accesibilidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Desactivar notificaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_35_listener() { return ctx.editProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Editar perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_39_listener() { return ctx.invertTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "invert_colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Invertir colores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_43_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " Paleta colores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-menu", 8, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "open_in_full");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Pantalla completa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-menu", 2, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_mat_menu_click_53_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AppHeaderComponent_button_55_Template, 12, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loginDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loginDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.themeSrv.themes);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 5370:
/*!************************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/header/sign-in.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);









function SignInComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please, enter valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInComponent_div_8_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignInComponent_div_8_div_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.email);
} }
class SignInComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email])
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    get f() {
        return this.form.controls;
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in-dialog"]], decls: 14, vars: 5, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["mat-dialog-content", ""], ["matInput", "", "tabindex", "1", "formControlName", "email", "id", "email", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "tabindex", "2", 3, "mat-dialog-close"], ["mat-button", "", "tabindex", "-1", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What's your email?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_7_listener($event) { return ctx.data.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignInComponent_div_8_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_12_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx.data.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.email);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], encapsulation: 2 });


/***/ }),

/***/ 9476:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/helper/helper.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperComponent": () => (/* binding */ HelperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const _c0 = ["*"];
class HelperComponent {
    ngAfterViewInit() { }
}
HelperComponent.ɵfac = function HelperComponent_Factory(t) { return new (t || HelperComponent)(); };
HelperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelperComponent, selectors: [["app-helper-overview-grap"]], ngContentSelectors: _c0, decls: 18, vars: 0, consts: [[1, "fixed-plugin"], [1, "dropdown", "show-dropdown"], ["href", "#", "data-toggle", "dropdown"], [1, "fa", "fa-cog", "fa-2x"], [1, "dropdown-menu"], [1, "header-title"], [1, "adjustments-line"], ["href", "javascript:void(0)", 1, "switch-trigger", "active-color"], [1, "badge-colors", "ml-auto", "mr-auto"], ["data-color", "purple", 1, "badge", "filter", "badge-purple"], ["data-color", "azure", 1, "badge", "filter", "badge-azure"], ["data-color", "green", 1, "badge", "filter", "badge-green"], ["data-color", "orange", 1, "badge", "filter", "badge-warning"], ["data-color", "danger", 1, "badge", "filter", "badge-danger"], ["data-color", "rose", 1, "badge", "filter", "badge-rose", "active"], [1, "clearfix"]], template: function HelperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sidebar Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li.adjustments-line[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 2px !important;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   .bootstrap-switch[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px !important;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.1rem !important;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  transition: all 0.34s;\n  -webkit-transition: all 0.34s;\n  -moz-transition: all 0.34s;\n}\n\n.fixed-plugin[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  left: 0;\n  width: 64px;\n  height: 43px;\n  z-index: 3;\n  border-radius: 0 8px 8px 0;\n  text-align: center;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .fa-cog[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  padding: 10px;\n  border-radius: 0 0 6px 6px;\n  width: auto;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  right: 80px;\n  left: auto;\n  width: 290px;\n  border-radius: 0.1875rem;\n  padding: 0 10px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:after, .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:before {\n  right: 10px;\n  margin-left: auto;\n  left: auto;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .fa-circle-thin[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .fa-circle-thin[_ngcontent-%COMP%] {\n  color: #00bbff;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #777777;\n  text-align: center;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 0;\n  width: 100%;\n  height: 100px;\n  margin: 0 auto;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  border: 3px solid #FFFFFF;\n  border-radius: 50%;\n  cursor: pointer;\n  display: inline-block;\n  height: 23px;\n  margin-right: 5px;\n  position: relative;\n  width: 23px;\n  padding: 8px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge.active[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:hover {\n  border-color: #00bbff;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-black[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-azure[_ngcontent-%COMP%] {\n  background-color: #2CA8FF;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-green[_ngcontent-%COMP%] {\n  background-color: #18ce0f;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-orange[_ngcontent-%COMP%] {\n  background-color: #f96332;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-yellow[_ngcontent-%COMP%] {\n  background-color: #FFB236;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-danger[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-purple[_ngcontent-%COMP%] {\n  background-color: #9368E9;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-white[_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .badge-rose[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 10px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 18px 2px;\n  width: 25%;\n  float: left;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   li.adjustments-line[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   li.header-title[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   li.button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  min-height: inherit;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   li.button-container[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   li.button-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 12px 30px;\n  margin: 0.3125rem 1px;\n  font-size: 0.75rem;\n  border-radius: 0.2rem;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow, transform;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #9c27b0;\n  border-color: #9c27b0;\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #9124a3;\n  border-color: #701c7e;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #9124a3;\n  border-color: #701c7e;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #9124a3;\n  border-color: #701c7e;\n  box-shadow: 0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #9124a3;\n  border-color: #3f1048;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #9c27b0;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #9124a3;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #9c27b0;\n  border-color: #9c27b0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #9c27b0;\n  border-color: #9c27b0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #9c27b0;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-primary.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #9c27b0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  color: #333333;\n  background-color: #fafafa;\n  border-color: #ccc;\n  box-shadow: 0 2px 2px 0 rgba(250, 250, 250, 0.14), 0 3px 1px -2px rgba(250, 250, 250, 0.2), 0 1px 5px 0 rgba(250, 250, 250, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #333333;\n  background-color: #f2f2f2;\n  border-color: #adadad;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #333333;\n  background-color: #f2f2f2;\n  border-color: #adadad;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #333333;\n  background-color: #f2f2f2;\n  border-color: #adadad;\n  box-shadow: 0 2px 2px 0 rgba(250, 250, 250, 0.14), 0 3px 1px -2px rgba(250, 250, 250, 0.2), 0 1px 5px 0 rgba(250, 250, 250, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #333333;\n  background-color: #f2f2f2;\n  border-color: #8c8c8c;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #fafafa;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #fafafa;\n  border-color: #ccc;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #fafafa;\n  border-color: #ccc;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(250, 250, 250, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(250, 250, 250, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #fafafa;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-secondary.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #fafafa;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00bcd4;\n  border-color: #00bcd4;\n  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #00aec5;\n  border-color: #008697;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #00aec5;\n  border-color: #008697;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00aec5;\n  border-color: #008697;\n  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00aec5;\n  border-color: #004b55;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #00bcd4;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #00aec5;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #00bcd4;\n  border-color: #00bcd4;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #00bcd4;\n  border-color: #00bcd4;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #00bcd4;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-info.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #00bcd4;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #4caf50;\n  border-color: #4caf50;\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #47a44b;\n  border-color: #39843c;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #47a44b;\n  border-color: #39843c;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #47a44b;\n  border-color: #39843c;\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #47a44b;\n  border-color: #255627;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #4caf50;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #47a44b;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #4caf50;\n  border-color: #4caf50;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #4caf50;\n  border-color: #4caf50;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #4caf50;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-success.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #4caf50;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ff9800;\n  border-color: #ff9800;\n  box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f08f00;\n  border-color: #c27400;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f08f00;\n  border-color: #c27400;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f08f00;\n  border-color: #c27400;\n  box-shadow: 0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f08f00;\n  border-color: #804c00;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #ff9800;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #f08f00;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #ff9800;\n  border-color: #ff9800;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #ff9800;\n  border-color: #ff9800;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #ff9800;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-warning.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #ff9800;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f44336;\n  border-color: #f44336;\n  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f33527;\n  border-color: #e11b0c;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f33527;\n  border-color: #e11b0c;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f33527;\n  border-color: #e11b0c;\n  box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f33527;\n  border-color: #a21309;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #f44336;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #f33527;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #f44336;\n  border-color: #f44336;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #f44336;\n  border-color: #f44336;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #f44336;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-danger.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #f44336;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #e91e63;\n  border-color: #e91e63;\n  box-shadow: 0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ea2c6d;\n  border-color: #b8124a;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ea2c6d;\n  border-color: #b8124a;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ea2c6d;\n  border-color: #b8124a;\n  box-shadow: 0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ea2c6d;\n  border-color: #7b0c32;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #e91e63;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #ea2c6d;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #e91e63;\n  border-color: #e91e63;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #e91e63;\n  border-color: #e91e63;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #e91e63;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-rose.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #e91e63;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #999999;\n  border-color: #999999;\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #919191;\n  border-color: #7a7a7a;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #919191;\n  border-color: #7a7a7a;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #919191;\n  border-color: #7a7a7a;\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:active:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.active[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.active.focus[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle[_ngcontent-%COMP%]:focus, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle.focus[_ngcontent-%COMP%], .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle[_ngcontent-%COMP%]:hover, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle[_ngcontent-%COMP%]:focus, .show[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #919191;\n  border-color: #595959;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%], .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%] {\n  color: inherit;\n  background-color: #999999;\n}\n\n.open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover, .open[_ngcontent-%COMP%]    > .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.dropdown-toggle.bmd-btn-icon[_ngcontent-%COMP%]:hover {\n  background-color: #919191;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.disabled[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.disabled.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:disabled:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:disabled.focus {\n  background-color: #999999;\n  border-color: #999999;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.disabled[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #999999;\n  border-color: #999999;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.btn-link[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #999999;\n  box-shadow: none;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]:active, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.btn-link[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.btn-link[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.btn-default.btn-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: #999999;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.focus[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active.focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .btn.active.focus[_ngcontent-%COMP%] {\n  outline: 0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn.btn-round[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(.btn-facebook):not(.btn-twitter) {\n  display: block;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .button-container.github-star[_ngcontent-%COMP%] {\n  margin-left: 78px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   #sharrreTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 0;\n  height: 50px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   li.header-title[_ngcontent-%COMP%] {\n  height: 30px;\n  line-height: 25px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  display: inline-block;\n  margin-bottom: 0;\n  font-size: 1em;\n  color: #3C4858;\n  padding-top: 0px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge-colors[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   .togglebutton[_ngcontent-%COMP%] {\n  padding-right: 7px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   .togglebutton[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li.adjustments-line[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n  \n  border-radius: 0;\n  margin: 0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.img-holder[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  border-radius: 10px;\n  background-color: #FFF;\n  border: 3px solid #FFF;\n  padding-left: 0;\n  padding-right: 0;\n  opacity: 1;\n  cursor: pointer;\n  display: block;\n  max-height: 100px;\n  overflow: hidden;\n  padding: 0;\n  min-width: 25%;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.switch-trigger[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.switch-trigger[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a.img-holder[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:focus    > a.img-holder[_ngcontent-%COMP%] {\n  border-color: rgba(0, 187, 255, 0.53);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a.img-holder[_ngcontent-%COMP%], .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a.img-holder[_ngcontent-%COMP%] {\n  border-color: #00bbff;\n  background-color: #FFFFFF;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\n  width: 50%;\n  display: block;\n  width: 48%;\n  float: left;\n  font-weight: 600;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]:first-child {\n  margin-right: 2%;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .fixed-plugin[_ngcontent-%COMP%]   .adjustments-line[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: -40px !important;\n  opacity: 0;\n  left: -303px !important;\n  transform-origin: 100% 0;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:before, .fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 65px;\n  width: 16px;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:before {\n  border-bottom: 16px solid rgba(0, 0, 0, 0);\n  border-left: 16px solid rgba(0, 0, 0, 0.2);\n  border-top: 16px solid rgba(0, 0, 0, 0);\n  right: -16px;\n}\n\n.fixed-plugin[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:after {\n  border-bottom: 16px solid rgba(0, 0, 0, 0);\n  border-left: 16px solid #fff;\n  border-top: 16px solid rgba(0, 0, 0, 0);\n  right: -15px;\n}\n\n.wrapper-full-page[_ngcontent-%COMP%]    ~ .fixed-plugin[_ngcontent-%COMP%]   .dropdown.open[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translateY(-17%);\n}\n\n.wrapper-full-page[_ngcontent-%COMP%]    ~ .fixed-plugin[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translateY(-19%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdDQUFBO0FBQUY7O0FBR0E7O0VBRUUscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBOztFQUVFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTs7O0VBR0UsY0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBOztFQUVFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBOztFQUVFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsMENBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwR0FBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhIQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7O0VBSUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4SEFBQTtBQUFGOztBQUdBOzs7Ozs7Ozs7Ozs7RUFZRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBOzs7O0VBSUUseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOztFQUVFLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7O0VBR0UsbUlBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7OztFQUdFLDZCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpSUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7O0VBR0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7OztFQUlFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUlBQUE7QUFBRjs7QUFHQTs7Ozs7Ozs7Ozs7O0VBWUUsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTs7OztFQUlFLHlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTs7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7OztFQUdFLHFJQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBOzs7RUFHRSw2QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkhBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7OztFQUdFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7Ozs7RUFJRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJIQUFBO0FBQUY7O0FBR0E7Ozs7Ozs7Ozs7OztFQVlFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7Ozs7RUFJRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7O0VBRUUseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxpSUFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTs7O0VBR0UsNkJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJIQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7O0VBSUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwySEFBQTtBQUFGOztBQUdBOzs7Ozs7Ozs7Ozs7RUFZRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBOzs7O0VBSUUseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOztFQUVFLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7O0VBR0UsaUlBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7OztFQUdFLDZCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwySEFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7O0VBR0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7OztFQUlFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkhBQUE7QUFBRjs7QUFHQTs7Ozs7Ozs7Ozs7O0VBWUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTs7OztFQUlFLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7RUFFRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7OztFQUdFLGlJQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBOzs7RUFHRSw2QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkhBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7OztFQUdFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7Ozs7RUFJRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJIQUFBO0FBQUY7O0FBR0E7Ozs7Ozs7Ozs7OztFQVlFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7Ozs7RUFJRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7O0VBRUUseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxpSUFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTs7O0VBR0UsNkJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJIQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7O0VBSUUsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwySEFBQTtBQUFGOztBQUdBOzs7Ozs7Ozs7Ozs7RUFZRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBOzs7O0VBSUUseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOztFQUVFLHlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTs7O0VBR0UsaUlBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7OztFQUdFLDZCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBOztFQUVFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUlBQUE7QUFBRjs7QUFHQTs7RUFFRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7Ozs7RUFNRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBOzs7Ozs7OztFQVFFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUlBQUE7QUFBRjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBd0JFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7O0VBRUUsY0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7O0VBRUUseUJBQUE7QUFBRjs7QUFHQTs7Ozs7Ozs7RUFRRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7Ozs7RUFJRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7Ozs7OztFQU1FLHFJQUFBO0FBQUY7O0FBR0E7O0VBRUUsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTs7Ozs7O0VBTUUsNkJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7Ozs7OztFQU1FLFVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7O0VBRUUsNkJBQUE7QUFBRjs7QUFHQTs7RUFFRSxxQ0FBQTtBQUFGOztBQUdBOztFQUVFLHFCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7O0VBRUUsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsMENBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBS0UsMkJBQUE7QUFBRjs7QUFHQTtFQUtFLDJCQUFBO0FBQUYiLCJmaWxlIjoiaGVscGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSBsaS5hZGp1c3RtZW50cy1saW5lIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgbGkge1xyXG4gIHBhZGRpbmc6IDVweCAycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmFkanVzdG1lbnRzLWxpbmUgLmJvb3RzdHJhcC1zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuYWRqdXN0bWVudHMtbGluZSBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiBsaT5hLFxyXG4uZml4ZWQtcGx1Z2luIC5iYWRnZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zNHM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM0cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMzRzO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgei1pbmRleDogMztcclxuICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmZhLWNvZyB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudSB7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbiAgbGVmdDogYXV0bztcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudTphZnRlcixcclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmZhLWNpcmNsZS10aGluIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYWN0aXZlIC5mYS1jaXJjbGUtdGhpbiB7XHJcbiAgY29sb3I6ICMwMGJiZmY7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hLFxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudSBsaT5hOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi1tZW51IGxpPmE6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJhZGdlIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMjNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5iYWRnZS5hY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJhZGdlOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMwMGJiZmY7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJhZGdlLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5iYWRnZS1henVyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQThGRjtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYmFkZ2UtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOGNlMGY7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJhZGdlLW9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NjMzMjtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYmFkZ2UteWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMjM2O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5iYWRnZS1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJhZGdlLXB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzNjhFOTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYmFkZ2Utd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYmFkZ2Utcm9zZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiBoNSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudSBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMThweCAycHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiBsaS5hZGp1c3RtZW50cy1saW5lLFxyXG4uZml4ZWQtcGx1Z2luIGxpLmhlYWRlci10aXRsZSxcclxuLmZpeGVkLXBsdWdpbiBsaS5idXR0b24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiBsaS5idXR0b24tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gbGkuYnV0dG9uLWNvbnRhaW5lciBkaXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIG1hcmdpbjogMC4zMTI1cmVtIDFweDtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEyNGEzO1xyXG4gIGJvcmRlci1jb2xvcjogIzcwMWM3ZTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5OmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnkuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMjRhMztcclxuICBib3JkZXItY29sb3I6ICM3MDFjN2U7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeS5hY3RpdmUsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTI0YTM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzAxYzdlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5OmFjdGl2ZS5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMjRhMztcclxuICBib3JkZXItY29sb3I6ICMzZjEwNDg7XHJcbn1cclxuXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUuYm1kLWJ0bi1pY29uIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xyXG59XHJcblxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMjRhMztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnkuZGlzYWJsZWQuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeTpkaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5OmRpc2FibGVkLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xyXG4gIGJvcmRlci1jb2xvcjogIzljMjdiMDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnk6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI2cHggLTEycHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMik7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeS5idG4tbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM5YzI3YjA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1wcmltYXJ5LmJ0bi1saW5rOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXByaW1hcnkuYnRuLWxpbms6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcHJpbWFyeS5idG4tbGluazphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjOWMyN2IwO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMTIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBib3JkZXItY29sb3I6ICNhZGFkYWQ7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5OmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRhZGFkO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeTphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmFjdGl2ZSxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRhZGFkO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnk6YWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeTphY3RpdmU6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5OmFjdGl2ZS5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnkuYWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5hY3RpdmU6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBib3JkZXItY29sb3I6ICM4YzhjOGM7XHJcbn1cclxuXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZS5ibWQtYnRuLWljb24ge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZS5ibWQtYnRuLWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmRpc2FibGVkOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5kaXNhYmxlZC5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnk6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5OmRpc2FibGVkLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnkuZGlzYWJsZWQ6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5OmRpc2FibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5OmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMik7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmJ0bi1saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZhZmFmYTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXNlY29uZGFyeS5idG4tbGluazpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zZWNvbmRhcnkuYnRuLWxpbms6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc2Vjb25kYXJ5LmJ0bi1saW5rOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mbyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcclxuICBib3JkZXItY29sb3I6ICMwMGJjZDQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAxODgsIDIxMiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMTg4LCAyMTIsIDAuMTIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm86aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFlYzU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4Njk3O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm86Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mby5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWM1O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwODY5NztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvOmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvLmFjdGl2ZSxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvLmRyb3Bkb3duLXRvZ2dsZSxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWVjNTtcclxuICBib3JkZXItY29sb3I6ICMwMDg2OTc7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAxODgsIDIxMiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMTg4LCAyMTIsIDAuMTIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm86YWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm86YWN0aXZlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm86YWN0aXZlLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uYWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uYWN0aXZlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlLmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlLmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWM1O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNGI1NTtcclxufVxyXG5cclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvLmRyb3Bkb3duLXRvZ2dsZS5ibWQtYnRuLWljb24ge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XHJcbn1cclxuXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mby5kcm9wZG93bi10b2dnbGUuYm1kLWJ0bi1pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZWM1O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZGlzYWJsZWQ6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mby5kaXNhYmxlZC5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvOmRpc2FibGVkOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm86ZGlzYWJsZWQuZm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uZGlzYWJsZWQ6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mbzpkaXNhYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcclxuICBib3JkZXItY29sb3I6ICMwMGJjZDQ7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mbzpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvOmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMjZweCAtMTJweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMik7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mby5idG4tbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwMGJjZDQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1pbmZvLmJ0bi1saW5rOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWluZm8uYnRuLWxpbms6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4taW5mby5idG4tbGluazphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMDBiY2Q0O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNzYsIDE3NSwgODAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDc2LCAxNzUsIDgwLCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdhNDRiO1xyXG4gIGJvcmRlci1jb2xvcjogIzM5ODQzYztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3MuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzczpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YTQ0YjtcclxuICBib3JkZXItY29sb3I6ICMzOTg0M2M7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2VzczphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzcy5hY3RpdmUsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2E0NGI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzk4NDNjO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoNzYsIDE3NSwgODAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDc2LCAxNzUsIDgwLCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzOmFjdGl2ZTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzOmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzOmFjdGl2ZS5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmFjdGl2ZTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YTQ0YjtcclxuICBib3JkZXItY29sb3I6ICMyNTU2Mjc7XHJcbn1cclxuXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUuYm1kLWJ0bi1pY29uIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG59XHJcblxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YTQ0YjtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2VzczpkaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzOmRpc2FibGVkLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGJvcmRlci1jb2xvcjogIzRjYWY1MDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2VzczphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzczpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI2cHggLTEycHggcmdiYSg3NiwgMTc1LCA4MCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDc2LCAxNzUsIDgwLCAwLjIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3MuYnRuLWxpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjNGNhZjUwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tc3VjY2Vzcy5idG4tbGluazpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1zdWNjZXNzLmJ0bi1saW5rOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXN1Y2Nlc3MuYnRuLWxpbms6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzRjYWY1MDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmOTgwMDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDI1NSwgMTUyLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyNTUsIDE1MiwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZzpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwOGYwMDtcclxuICBib3JkZXItY29sb3I6ICNjMjc0MDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZzpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmc6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDhmMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzI3NDAwO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmc6YWN0aXZlLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmcuYWN0aXZlLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4ZjAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2MyNzQwMDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDI1NSwgMTUyLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyNTUsIDE1MiwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZzphY3RpdmU6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZzphY3RpdmU6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZzphY3RpdmUuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5hY3RpdmU6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5hY3RpdmU6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5hY3RpdmUuZm9jdXMsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGUuZm9jdXMsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGU6Zm9jdXMsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kcm9wZG93bi10b2dnbGUuZm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDhmMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODA0YzAwO1xyXG59XHJcblxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbiB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcclxufVxyXG5cclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZS5ibWQtYnRuLWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDhmMDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nLmRpc2FibGVkLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmc6ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZzpkaXNhYmxlZC5mb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcclxuICBib3JkZXItY29sb3I6ICNmZjk4MDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5kaXNhYmxlZDpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nOmRpc2FibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmOTgwMDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmc6YWN0aXZlLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nLmJ0bi1saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2ZmOTgwMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXdhcm5pbmcuYnRuLWxpbms6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4td2FybmluZy5idG4tbGluazpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi13YXJuaW5nLmJ0bi1saW5rOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZjk4MDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDI0NCwgNjcsIDU0LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgyNDQsIDY3LCA1NCwgMC4xMik7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjMzNTI3O1xyXG4gIGJvcmRlci1jb2xvcjogI2UxMWIwYztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXI6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlcjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzMzUyNztcclxuICBib3JkZXItY29sb3I6ICNlMTFiMGM7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyOmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuYWN0aXZlLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGUsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzMzUyNztcclxuICBib3JkZXItY29sb3I6ICNlMTFiMGM7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgyNDQsIDY3LCA1NCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMjQ0LCA2NywgNTQsIDAuMTIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlcjphY3RpdmU6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyOmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXI6YWN0aXZlLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5hY3RpdmU6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlLmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGU6aG92ZXIsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlLmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjMzNTI3O1xyXG4gIGJvcmRlci1jb2xvcjogI2EyMTMwOTtcclxufVxyXG5cclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbiB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzMzUyNztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuZGlzYWJsZWQ6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmRpc2FibGVkLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlcjpkaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXI6ZGlzYWJsZWQuZm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5kaXNhYmxlZDpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXI6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlcjpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXI6YWN0aXZlLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlcjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI2cHggLTEycHggcmdiYSgyNDQsIDY3LCA1NCwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5idG4tbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kYW5nZXIuYnRuLWxpbms6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGFuZ2VyLmJ0bi1saW5rOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRhbmdlci5idG4tbGluazphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2Uge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMjMzLCAzMCwgOTksIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDIzMywgMzAsIDk5LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDIzMywgMzAsIDk5LCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWEyYzZkO1xyXG4gIGJvcmRlci1jb2xvcjogI2I4MTI0YTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2UuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhMmM2ZDtcclxuICBib3JkZXItY29sb3I6ICNiODEyNGE7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZTphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZS5hY3RpdmUsXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZS5kcm9wZG93bi10b2dnbGUsXHJcbi5zaG93Pi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZS5kcm9wZG93bi10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTJjNmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYjgxMjRhO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMjMzLCAzMCwgOTksIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDIzMywgMzAsIDk5LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDIzMywgMzAsIDk5LCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlOmFjdGl2ZTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlOmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlOmFjdGl2ZS5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmFjdGl2ZTpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmFjdGl2ZTpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmFjdGl2ZS5mb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRyb3Bkb3duLXRvZ2dsZTpob3ZlcixcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRyb3Bkb3duLXRvZ2dsZS5mb2N1cyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhMmM2ZDtcclxuICBib3JkZXItY29sb3I6ICM3YjBjMzI7XHJcbn1cclxuXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZS5kcm9wZG93bi10b2dnbGUuYm1kLWJ0bi1pY29uIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xyXG59XHJcblxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2UuZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhMmM2ZDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRpc2FibGVkOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2UuZGlzYWJsZWQuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZTpkaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlOmRpc2FibGVkLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xyXG4gIGJvcmRlci1jb2xvcjogI2U5MWU2MztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmRpc2FibGVkOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2U6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2U6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZTphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI2cHggLTEycHggcmdiYSgyMzMsIDMwLCA5OSwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDIzMywgMzAsIDk5LCAwLjIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2UuYnRuLWxpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZTkxZTYzO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm9zZS5idG4tbGluazpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1yb3NlLmJ0bi1saW5rOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLXJvc2UuYnRuLWxpbms6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2U5MWU2MztcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTk5OTk5O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjEyKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTkxOTE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2E3YTdhO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG46Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQ6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdC5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTkxO1xyXG4gIGJvcmRlci1jb2xvcjogIzdhN2E3YTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuOmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmFjdGl2ZSxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmRyb3Bkb3duLXRvZ2dsZSxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmRyb3Bkb3duLXRvZ2dsZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0LmFjdGl2ZSxcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSxcclxuLnNob3c+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxOTE5MTtcclxuICBib3JkZXItY29sb3I6ICM3YTdhN2E7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxNTMsIDE1MywgMTUzLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG46YWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG46YWN0aXZlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG46YWN0aXZlLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYWN0aXZlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlLmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQ6YWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQ6YWN0aXZlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQ6YWN0aXZlLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuYWN0aXZlOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuYWN0aXZlOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuYWN0aXZlLmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlLmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlOmZvY3VzLFxyXG4uc2hvdz4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZHJvcGRvd24tdG9nZ2xlLmZvY3VzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTkxO1xyXG4gIGJvcmRlci1jb2xvcjogIzU5NTk1OTtcclxufVxyXG5cclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmRyb3Bkb3duLXRvZ2dsZS5ibWQtYnRuLWljb24sXHJcbi5vcGVuPi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdC5kcm9wZG93bi10b2dnbGUuYm1kLWJ0bi1pY29uIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4ub3Blbj4uZml4ZWQtcGx1Z2luIC5idG4uZHJvcGRvd24tdG9nZ2xlLmJtZC1idG4taWNvbjpob3ZlcixcclxuLm9wZW4+LmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0LmRyb3Bkb3duLXRvZ2dsZS5ibWQtYnRuLWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTkxOTE7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5kaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmRpc2FibGVkLmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG46ZGlzYWJsZWQ6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bjpkaXNhYmxlZC5mb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0LmRpc2FibGVkOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdDpkaXNhYmxlZDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0OmRpc2FibGVkLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG4gIGJvcmRlci1jb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmRpc2FibGVkOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG46ZGlzYWJsZWQ6aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdC5kaXNhYmxlZDpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0OmRpc2FibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG4gIGJvcmRlci1jb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG46YWN0aXZlLFxyXG4uZml4ZWQtcGx1Z2luIC5idG46aG92ZXIsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdDpmb2N1cyxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMjZweCAtMTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWxpbmssXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdC5idG4tbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1saW5rOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWxpbms6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tbGluazphY3RpdmUsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tZGVmYXVsdC5idG4tbGluazpob3ZlcixcclxuLmZpeGVkLXBsdWdpbiAuYnRuLmJ0bi1kZWZhdWx0LmJ0bi1saW5rOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uYnRuLWRlZmF1bHQuYnRuLWxpbms6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuOmZvY3VzLFxyXG4uZml4ZWQtcGx1Z2luIC5idG4uZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bjphY3RpdmU6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bjphY3RpdmUuZm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5hY3RpdmU6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5hY3RpdmUuZm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ0bi5idG4tcm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmJ1dHRvbi1jb250YWluZXIgLmJ0bjpub3QoLmJ0bi1mYWNlYm9vayk6bm90KC5idG4tdHdpdHRlcikge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idXR0b24tY29udGFpbmVyLmdpdGh1Yi1zdGFyIHtcclxuICBtYXJnaW4tbGVmdDogNzhweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAjc2hhcnJyZVRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiBsaS5oZWFkZXItdGl0bGUge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYWRqdXN0bWVudHMtbGluZSBwIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogIzNDNDg1ODtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5hZGp1c3RtZW50cy1saW5lIGEgLmJhZGdlLWNvbG9ycyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTJweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYWRqdXN0bWVudHMtbGluZSAudG9nZ2xlYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmFkanVzdG1lbnRzLWxpbmUgLnRvZ2dsZWJ1dHRvbiAudG9nZ2xlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLW1lbnU+bGkuYWRqdXN0bWVudHMtbGluZT5hIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyovXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLW1lbnU+bGk+YS5pbWctaG9sZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjRkZGO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudT5saT5hLnN3aXRjaC10cmlnZ2VyOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi1tZW51PmxpPmEuc3dpdGNoLXRyaWdnZXI6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi1tZW51PmxpOmhvdmVyPmEuaW1nLWhvbGRlcixcclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudT5saTpmb2N1cz5hLmltZy1ob2xkZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxODcsIDI1NSwgMC41Myk7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hLmltZy1ob2xkZXIsXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hLmltZy1ob2xkZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmJmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi1tZW51PmxpPmEgaW1nIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5idG4tc29jaWFsIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLXNvY2lhbCBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYnRuLXNvY2lhbDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuYWRqdXN0bWVudHMtbGluZSBhOmhvdmVyLFxyXG4uZml4ZWQtcGx1Z2luIC5hZGp1c3RtZW50cy1saW5lIGE6Zm9jdXMsXHJcbi5maXhlZC1wbHVnaW4gLmFkanVzdG1lbnRzLWxpbmUgYSB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XHJcbiAgdG9wOiAtNDBweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbGVmdDogLTMwM3B4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG59XHJcblxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi5zaG93IC5kcm9wZG93bi1tZW51IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLW1lbnU6YmVmb3JlLFxyXG4uZml4ZWQtcGx1Z2luIC5kcm9wZG93bi1tZW51OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2NXB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXItbGVmdDogMTZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIHJpZ2h0OiAtMTZweDtcclxufVxyXG5cclxuLmZpeGVkLXBsdWdpbiAuZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIHJpZ2h0OiAtMTVweDtcclxufVxyXG5cclxuLndyYXBwZXItZnVsbC1wYWdlfi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNyUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNyUpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTclKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNyUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTclKTtcclxufVxyXG5cclxuLndyYXBwZXItZnVsbC1wYWdlfi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTklKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTklKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE5JSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTklKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE5JSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7907:
/*!*************************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 2243);
/* harmony import */ var _srv_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../srv/theme.service */ 920);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../srv/navigation.service */ 2358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _helper_helper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/helper.component */ 9476);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 5002);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 2457);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 6671);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);





















const _c0 = ["snav"];
function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); _r6.value = ""; return ctx_r9.filter(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("label label-", badge_r14.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](badge_r14.value);
} }
function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const menuitem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r15.navSrv.navigate(menuitem_r11.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_a_1_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuitem_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuitem_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", menuitem_r11.badge);
} }
function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_a_1_Template, 7, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("group", menuitem_r11.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuitem_r11.type === "link");
} }
function AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-nav-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Buscar...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_icon_7_Template, 2, 0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_mat_list_item_8_Template, 2, 2, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuState_r5 = ctx.ngIf;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", menuState_r5.menuItems);
} }
function AppSidebarComponent_mat_drawer_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-drawer-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("backdropClick", function AppSidebarComponent_mat_drawer_container_0_Template_mat_drawer_container_backdropClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.close("backdrop"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-drawer", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("openedChange", function AppSidebarComponent_mat_drawer_container_0_Template_mat_drawer_openedChange_1_listener($event) { const state_r1 = ctx.ngIf; return state_r1.visibleMenu = $event; })("keydown.escape", function AppSidebarComponent_mat_drawer_container_0_Template_mat_drawer_keydown_escape_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.close("escape"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Administrador ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "em", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-menu", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Disable notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, AppSidebarComponent_mat_drawer_container_0_mat_nav_list_26_Template, 9, 3, "mat-nav-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "app-helper-overview-grap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppSidebarComponent_mat_drawer_container_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-drawer-content", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-top", ctx_r0.mobileQuery.matches ? 0 : 0, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opened", state_r1.visibleMenu)("mode", ctx_r0.mobileQuery.matches ? "over" : "side")("opened", ctx_r0.mobileQuery.matches)("disableClose", ctx_r0.mobileQuery.matches);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 8, ctx_r0.menuItemsSrv.menuState$));
} }
const _c1 = ["*"];
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItemsSrv, themeSrv, navSrv) {
        this.menuItemsSrv = menuItemsSrv;
        this.themeSrv = themeSrv;
        this.navSrv = navSrv;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({ menuItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl() });
        this.form.valueChanges.subscribe((filter) => {
            this.menuItemsSrv.filter(filter === null || filter === void 0 ? void 0 : filter.menuItem);
        });
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    get themeState$() {
        return this.themeSrv.themeState$;
    }
    filter(filterValue) {
        this.menuItemsSrv.filter(filterValue);
    }
    applyFilter(event) {
        var _a, _b, _c;
        const filterValue = ((_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.toLowerCase()) || '';
        this.filter(filterValue);
    }
    close(reason) {
        this.sidenav.close();
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService)); };
AppSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], viewQuery: function AppSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [["class", "example-sidenav-container", 3, "marginTop", "backdropClick", 4, "ngIf"], [1, "example-sidenav-container", 3, "backdropClick"], ["id", "snav", "fixedTopGap", "0", "disableClose", "", 1, "dark-sidebar", "pl-xs", 2, "direction", "rtl", 3, "opened", "mode", "disableClose", "openedChange", "keydown.escape"], ["snav", ""], [1, "user-profile"], [1, "profile-text"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], ["appAccordion", "", "style", "direction: ltr ", 4, "ngIf"], ["mat-icon-button", "", "value", "sidebarclosed", 2, "color", "var(--light-accent-text)", 3, "click"], [1, "page-wrapper"], ["appAccordion", "", 2, "direction", "ltr"], [3, "formGroup"], [1, "find-menu-item", 2, "direction", "ltr", "padding", "0px 15px"], ["type", "text", "matInput", "", "formControlName", "menuItem", "placeholder", "Buscar"], ["buscar", ""], ["matSuffix", "", "mat-fab", "", 3, "click", 4, "ngIf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-fab", "", 3, "click"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "click", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "click"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppSidebarComponent_mat_drawer_container_0_Template, 34, 10, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.themeState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawer, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _helper_helper_component__WEBPACK_IMPORTED_MODULE_3__.HelperComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatDrawerContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__.AccordionDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLinkActive, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionAnchorDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__.DefaultFlexDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_nghost-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%]{\r\n  overflow: none!important;\r\n  height: calc(100vh - 64px);\r\n}\r\n\r\n.sign-gtd[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  height: 69px;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: radial-gradient(circle, rgb(184, 176, 189) 0%, rgb(208, 216, 212) 50%, rgb(199, 196, 191) 100%);\r\n  -webkit-clip-path: url(#clip);\r\n          clip-path: url(#clip);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUiwyR0FBMkc7RUFDM0csNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXJ7XHJcbiAgb3ZlcmZsb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG4uc2lnbi1ndGQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgaGVpZ2h0OiA2OXB4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMTg0LCAxNzYsIDE4OSkgMCUsIHJnYigyMDgsIDIxNiwgMjEyKSA1MCUsIHJnYigxOTksIDE5NiwgMTkxKSAxMDAlKTtcclxuICBjbGlwLXBhdGg6IHVybCgjY2xpcCk7XHJcbn1cclxuIl19 */", ""] });


/***/ }),

/***/ 8365:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/material-component/toolbar/toolbar.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6627);






class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 68, vars: 0, consts: [[1, "no-shadow"], [1, ""], ["href", "https://material.angular.io/components/toolbar/overview"], ["color", "primary"], ["fxFlex", ""], ["mat-button", "", "href", "#", "mat-icon-button", ""], [1, "example-fill-remaining-space"], ["color", "accent"], ["color", "warn", 1, "bg-success"], [1, "example-spacer"], [1, "example-icon"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "matToolbar is a container for headers, titles, or actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Official Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Basic toolbar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The primary color toolbar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Primary Toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Multiple row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Second Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Positining toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Application Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Right Aligned Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "An accent toolbar using the second toolbar row:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Second Line Toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "A primary toolbar using the third toolbar row:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Custom Toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Second Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "verified_user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Third Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarRow], styles: [".no-shadow[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.example-fill-remaining-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBR0UsY0FBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2hhZG93IG1hdC10b29sYmFye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLy8gVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAvLyBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LlxyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ 5002:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/accordion.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccordionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ 6671:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/accordionanchor.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective)); };
AccordionAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 2457:
/*!***************************************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/accordionlink.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": () => (/* binding */ AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 5002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ 4665:
/*!*********************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective),
/* harmony export */   "AccordionLinkDirective": () => (/* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective),
/* harmony export */   "AccordionDirective": () => (/* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective)
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 6671);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 2457);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 5002);





/***/ }),

/***/ 2243:
/*!***************************************************************!*\
  !*** ./projects/docs/src/app/shared/menu-items/menu-items.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


const MENUITEMS = [
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
class MenuItems {
    constructor() {
        this.menuState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
            menuItems: MENUITEMS,
        });
    }
    filter(filter) {
        if (filter) {
            this.menuState$.next({
                menuItems: MENUITEMS.filter((item) => {
                    var _a;
                    return (_a = item.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(filter === null || filter === void 0 ? void 0 : filter.toLocaleLowerCase());
                })
            });
        }
        else {
            this.menuState$.next({ menuItems: MENUITEMS });
        }
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ 5175:
/*!*******************************************************!*\
  !*** ./projects/docs/src/app/shared/shared.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ 4665);
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ 2243);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ 6817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems,
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef,
            useValue: {},
        },
        { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayContainer, useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.FullscreenOverlayContainer },
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective,
        _spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent], exports: [_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective,
        _spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent] }); })();


/***/ }),

/***/ 6817:
/*!***********************************************************!*\
  !*** ./projects/docs/src/app/shared/spinner.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);




function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, encapsulation: 2 });


/***/ }),

/***/ 3219:
/*!**********************************************************!*\
  !*** ./projects/docs/src/app/srv/in-mem-data-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemDataService": () => (/* binding */ InMemDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



;
class InMemDataService {
    constructor() { }
    createDb(reqInfo) {
        const valuesCatalogList = [
            { id: 1, name: "Windstorm" },
            { id: 2, name: "Bombasto" },
            { id: 3, name: "Magneta" },
            { id: 4, name: "Tornado" },
        ];
        const nobodies = [];
        // entities with string ids that look like numbers
        const stringers = [
            { id: "10", name: "Bob String" },
            { id: "20", name: "Jill String" },
        ];
        // default returnType
        let returnType = "object";
        // let returnType  = 'observable';
        // let returnType  = 'promise';
        // demonstrate POST commands/resetDb
        // this example clears the collections if the request body tells it to do so
        if (reqInfo) {
            const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
            if (body.clear === true) {
                valuesCatalogList.length = 0;
                nobodies.length = 0;
                stringers.length = 0;
            }
            // 'returnType` can be 'object' | 'observable' | 'promise'
            returnType = body.returnType || "object";
        }
        const db = { valuesCatalogList, nobodies, stringers };
        switch (returnType) {
            case "observable":
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(db).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(3600));
            case "promise":
                return new Promise((resolve) => {
                    setTimeout(() => resolve(db), 3600);
                });
            default:
                return db;
        }
    }
}
InMemDataService.ɵfac = function InMemDataService_Factory(t) { return new (t || InMemDataService)(); };
InMemDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InMemDataService, factory: InMemDataService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 6556:
/*!*****************************************************!*\
  !*** ./projects/docs/src/app/srv/in-mem-service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemService": () => (/* binding */ InMemService)
/* harmony export */ });
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ 5233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _values_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values-catalog */ 7176);
/* harmony import */ var _in_mem_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in-mem-data-service */ 3219);




const valuesCatalogList = [
    { id: 1, name: "Windstorm" },
    { id: 2, name: "Bombasto" },
    { id: 3, name: "Magneta" },
    { id: 4, name: "Tornado" },
];
// Pseudo guid generator
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return (s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4());
}
class InMemService extends _in_mem_data_service__WEBPACK_IMPORTED_MODULE_2__.InMemDataService {
    constructor() {
        super();
        this.empresas = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(_values_catalog__WEBPACK_IMPORTED_MODULE_1__.VALUES_BUSINESS);
    }
    // Overrides id generator and delivers next available `id`, starting with 1001.
    genId(collection, collectionName) {
        if (collectionName === "nobodies") {
            console.log("genId override for 'nobodies'");
            return guid();
        }
        else if (collection) {
            console.log(`genId override for '${collectionName}'`);
            return (1 +
                collection.reduce((prev, curr) => Math.max(prev, curr.id || 0), 1000));
        }
    }
    // HTTP GET interceptor
    get(reqInfo) {
        const collectionName = reqInfo.collectionName;
        if (collectionName === "villains") {
            return this.getVillains(reqInfo);
        }
        return undefined; // let the default GET handle all others
    }
    // HTTP GET interceptor handles requests for villains
    getVillains(reqInfo) {
        return reqInfo.utils.createResponse$(() => {
            console.log("HTTP GET override");
            const collection = valuesCatalogList.slice();
            const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
            const id = reqInfo.id;
            // tslint:disable-next-line:triple-equals
            const data = id == undefined ? collection : reqInfo.utils.findById(collection, id);
            const options = data
                ? {
                    body: dataEncapsulation ? { data } : data,
                    status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK,
                }
                : {
                    body: { error: `'Villains' with id='${id}' not found` },
                    status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND,
                };
            return this.finishOptions(options, reqInfo);
        });
    }
    // parseRequestUrl override
    // Do this to manipulate the request URL or the parsed result
    // into something your data store can handle.
    // This example turns a request for `/foo/heroes` into just `/heroes`.
    // It leaves other URLs untouched and forwards to the default parser.
    // It also logs the result of the default parser.
    parseRequestUrl(url, utils) {
        const newUrl = url.replace(/\/foo\/heroes/, "/heroes");
        // console.log('newUrl', newUrl);
        const parsed = utils.parseRequestUrl(newUrl);
        console.log(`parseRequestUrl override of '${url}':`, parsed);
        return parsed;
    }
    // intercept ResponseOptions from default HTTP method handlers
    // add a response header and report interception to console.log
    responseInterceptor(resOptions, reqInfo) {
        var _a;
        resOptions.headers = (_a = resOptions === null || resOptions === void 0 ? void 0 : resOptions.headers) === null || _a === void 0 ? void 0 : _a.set("x-test", "test-header");
        const method = reqInfo.method.toUpperCase();
        const body = JSON.stringify(resOptions);
        console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);
        return resOptions;
    }
    /////////// helpers ///////////////
    finishOptions(options, { headers, url }) {
        options.statusText = (0,angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.getStatusText)(options.status);
        options.headers = headers;
        options.url = url;
        return options;
    }
    getDataParsed(data) {
        return 0;
    }
}
//


/***/ }),

/***/ 2358:
/*!*********************************************************!*\
  !*** ./projects/docs/src/app/srv/navigation.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




class NavigationService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.history = [];
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
            }
        });
    }
    get previous() {
        return [this.history[this.history.length - 1]];
    }
    navigate(route, data) {
        this.router.navigate([route, { data: data }], { skipLocationChange: true });
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 424:
/*!****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/selective-preloading-strategy.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectivePreloadingStrategyService": () => (/* binding */ SelectivePreloadingStrategyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class SelectivePreloadingStrategyService {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data.preload) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
}
SelectivePreloadingStrategyService.ɵfac = function SelectivePreloadingStrategyService_Factory(t) { return new (t || SelectivePreloadingStrategyService)(); };
SelectivePreloadingStrategyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SelectivePreloadingStrategyService, factory: SelectivePreloadingStrategyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 273:
/*!************************************************************!*\
  !*** ./projects/docs/src/app/srv/style-manager.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleManagerService": () => (/* binding */ StyleManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class StyleManagerService {
    constructor() { }
    setStyle(key, href) {
        getLinkElementForKey(key).setAttribute('href', href);
    }
    removeStyle(key) {
        const existingLinkElement = getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }
}
StyleManagerService.ɵfac = function StyleManagerService_Factory(t) { return new (t || StyleManagerService)(); };
StyleManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StyleManagerService, factory: StyleManagerService.ɵfac });
function getLinkElementForKey(key) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}
function getExistingLinkElementByKey(key) {
    return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}
function createLinkElementWithKey(key) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
}
function getClassNameForKey(key) {
    return `app-${key}`;
}


/***/ }),

/***/ 920:
/*!****************************************************!*\
  !*** ./projects/docs/src/app/srv/theme.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 5906);
/* harmony import */ var _values_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values-catalog */ 7176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _style_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-manager.service */ 273);





class ThemeService {
    constructor(styleManager) {
        var _a;
        this.styleManager = styleManager;
        this.themes = _values_catalog__WEBPACK_IMPORTED_MODULE_1__.THEMES_OPTIONS;
        this.themeState$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
            uiPalette: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin,
            visibleMenu: false,
        });
        (_a = this.themeState$) === null || _a === void 0 ? void 0 : _a.next({
            uiPalette: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin,
            visibleMenu: false,
        });
    }
    setTheme(themeToSet) {
        this.styleManager.setStyle('theme', `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`);
    }
    setUiPalette(themeToSet) {
        this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { uiPalette: themeToSet }));
    }
    invertTheme() {
        let themeToSet = _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin;
        this.themes.forEach((theme) => {
            if (this.themeState$.value.uiPalette == theme.catalog) {
                themeToSet = theme.alternate;
            }
            else if (this.themeState$.value.uiPalette == theme.alternate) {
                themeToSet = theme.catalog;
            }
        });
        this.setUiPalette(themeToSet);
    }
    changeTheme(themeToSet) {
        this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { uiPalette: themeToSet }));
    }
    toggleMenu() {
        this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { visibleMenu: !this.themeState$.value.visibleMenu }));
    }
    openFullscreen(documentElement) {
        if (documentElement.requestFullscreen) {
            documentElement.requestFullscreen();
        }
        else if (documentElement.mozRequestFullScreen) {
            /* Firefox */
            documentElement.mozRequestFullScreen();
        }
        else if (documentElement.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            documentElement.webkitRequestFullscreen();
        }
        else if (documentElement.msRequestFullscreen) {
            /* IE/Edge */
            documentElement.msRequestFullscreen();
        }
    }
    closeFullscreen(document) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_style_manager_service__WEBPACK_IMPORTED_MODULE_2__.StyleManagerService)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });


/***/ }),

/***/ 5906:
/*!*****************************************************!*\
  !*** ./projects/docs/src/app/types/common-types.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgGtdThemes": () => (/* binding */ NgGtdThemes),
/* harmony export */   "getEnumValues": () => (/* binding */ getEnumValues),
/* harmony export */   "getEnumKeyByEnumValue": () => (/* binding */ getEnumKeyByEnumValue),
/* harmony export */   "getEnumValueByEnumKey": () => (/* binding */ getEnumValueByEnumKey)
/* harmony export */ });
var NgGtdThemes;
(function (NgGtdThemes) {
    NgGtdThemes["FpiSkin"] = "fpi-skin-black";
    NgGtdThemes["FpiSkinBlack"] = "fpi-skin-alt";
    NgGtdThemes["NeGtd"] = "default-theme";
    NgGtdThemes["NeGtdBlack"] = "default-theme-black";
    NgGtdThemes["UnicornLightTheme"] = "unicorn-theme";
    NgGtdThemes["UnicornDarkTheme"] = "unicorn-dark-theme";
    NgGtdThemes["DeeppurpleAmber"] = "deeppurple-amber";
    NgGtdThemes["IndigoPink"] = "indigo-pink";
    NgGtdThemes["PinkBluegrey"] = "pink-bluegrey";
    NgGtdThemes["PurpleGreen"] = "purple-green";
    NgGtdThemes["AltTheme"] = "theme-alternate";
    NgGtdThemes["AltThemeBlack"] = "theme-alternate-black";
    NgGtdThemes["GtdBlueGrey"] = "gtd-blue";
    NgGtdThemes["GtdBlueBlack"] = "gtd-blue-black";
})(NgGtdThemes || (NgGtdThemes = {}));
;
function getEnumValues(e) {
    return Object.keys(e).map((i) => e[i]);
}
function getEnumKeyByEnumValue(myEnum, enumValue, predertermined = myEnum[0]) {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : predertermined;
}
function getEnumValueByEnumKey(myEnum, enumKey, predertermined = myEnum[0]) {
    let keys = Object.keys(myEnum).filter(x => myEnum.name == enumKey);
    return keys.length > 0 ? myEnum[keys[0]] : predertermined;
}


/***/ }),

/***/ 7176:
/*!*************************************************!*\
  !*** ./projects/docs/src/app/values-catalog.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatToDate": () => (/* binding */ formatToDate),
/* harmony export */   "VALUES_CATALOG": () => (/* binding */ VALUES_CATALOG),
/* harmony export */   "VALUES_BUSINESS": () => (/* binding */ VALUES_BUSINESS),
/* harmony export */   "THEMES_OPTIONS": () => (/* binding */ THEMES_OPTIONS)
/* harmony export */ });
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/common-types */ 5906);

function formatToDate(date) {
    return new Date(date);
}
const VALUES_CATALOG = [
    { id: 11, name: 'DR', code: '11DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 12, name: 'Narco', code: '12NA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 13, name: 'Bombasto', code: '13BO', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 14, name: 'Celeritas', code: '14CE', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 15, name: 'Magneta', code: '15MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 16, name: 'RubberMan', code: '16RU', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 17, name: 'Dynama', code: '17DY', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 18, name: 'Qr', code: '18DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 19, name: 'Magma', code: '19MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 20, name: 'Tornado', code: '20TO', catalog: 'VC', fecha: formatToDate('5/17/2021') }
];
const VALUES_BUSINESS = [
    { id: 11, name: 'cliente pruebas', code: '11DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 12, name: 'nestle de colombia s.a.', code: '12NA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 13, name: 'asdf sdfasdf', code: '13BO', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 14, name: 'Americas', code: '14CE', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 15, name: 'Colanta', code: '15MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 16, name: 'Justo & Bueno', code: '16RU', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 17, name: 'Duitama', code: '17DY', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 18, name: 'Barcelona', code: '18DR', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 19, name: 'Malaga', code: '19MA', catalog: 'VC', fecha: formatToDate('5/17/2021') },
    { id: 20, name: 'Tiendas boyacenses', code: '20TO', catalog: 'VC', fecha: formatToDate('5/17/2021') }
];
const THEMES_OPTIONS = [
    {
        "backgroundColor": "#F1F1F1",
        "buttonColor": "#f75c59",
        "headingColor": "#181818",
        "label": "Fpi Skin",
        "value": "Fpi Skin",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkinBlack
    },
    {
        "backgroundColor": "#fff",
        "buttonColor": "#ff4081",
        "headingColor": "#3f51b5",
        "label": "Indigo & Pink",
        "value": "indigo-pink",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.UnicornLightTheme,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.UnicornDarkTheme
    },
    {
        "backgroundColor": "#fff",
        "buttonColor": "#607d8b",
        "headingColor": "#7b1fa2",
        "label": "Deep purple Amber",
        "value": "Deep purple Amber",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.DeeppurpleAmber,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PurpleGreen
    },
    {
        "backgroundColor": "#fff",
        "buttonColor": "#607d8b",
        "headingColor": "#3f51b5",
        "label": "Indigo Pink",
        "value": "Indigo Pink",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.IndigoPink,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.IndigoPink
    },
    {
        "backgroundColor": "#303030",
        "buttonColor": "#607d8b",
        "headingColor": "#e91e63",
        "label": "PinkBlue grey",
        "value": "PinkBlue grey",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PinkBluegrey,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.UnicornLightTheme
    },
    {
        "backgroundColor": "#303030",
        "buttonColor": "#607d8b",
        "headingColor": "#7b1fa2",
        "label": "PurpleG reen",
        "value": "PurpleG reen",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PurpleGreen,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.DeeppurpleAmber
    },
    {
        "backgroundColor": "#fafafa",
        "buttonColor": "#797979",
        "headingColor": "#cc33ca",
        "label": "Alt theme",
        "value": "Alt theme",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.AltTheme,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.AltThemeBlack
    },
    {
        "backgroundColor": "#303030",
        "buttonColor": "#d7d7d7",
        "headingColor": "#cc33ca",
        "label": "Alt theme black",
        "value": "Alt theme black",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.NeGtd,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.NeGtdBlack
    },
    {
        "backgroundColor": "#c1ccd7",
        "buttonColor": "#cc33ca",
        "headingColor": "#097df2",
        "label": "GtdBlueGrey",
        "value": "GtdBlueGrey",
        "catalog": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.GtdBlueGrey,
        "alternate": _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.GtdBlueBlack
    }
];


/***/ }),

/***/ 2404:
/*!*******************************************************!*\
  !*** ./projects/docs/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_GATEWAY: 'http://localhost:8092/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 783:
/*!***********************************!*\
  !*** ./projects/docs/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7672);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2404);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7280:
/*!*********************************************************************!*\
  !*** ./projects/docs/$_lazy_route_resources/ lazy namespace object ***!
  \*********************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 7280;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(783)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map