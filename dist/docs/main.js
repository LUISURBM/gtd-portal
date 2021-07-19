(self["webpackChunkng_gtd"] = self["webpackChunkng_gtd"] || []).push([["main"],{

/***/ 27150:
/*!************************************************************!*\
  !*** ./projects/docs/src/app/animations/form-animation.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationsForm": () => (/* binding */ animationsForm),
/* harmony export */   "animationsForm2": () => (/* binding */ animationsForm2),
/* harmony export */   "animationsForm1": () => (/* binding */ animationsForm1),
/* harmony export */   "animationsForm3": () => (/* binding */ animationsForm3),
/* harmony export */   "animationsForm4": () => (/* binding */ animationsForm4),
/* harmony export */   "animationsForm5": () => (/* binding */ animationsForm5)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 17238);

const animationsForm = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('heightGrow', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            height: 0,
            padding: 0,
            overflow: 'hidden'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            height: 'auto',
            padding: '1.25rem'
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease'))
    ]),
];
const animationsForm2 = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('heightGrow', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void <=> *', []),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '{{startHeight}}px', opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.5s ease'),
        ], { params: { startHeight: 0 } })
    ])
];
const animationsForm1 = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('heightGrow', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void <=> *', []),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '{{startHeight}}px', opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.5s ease')], {
            params: { startHeight: 0 }
        })
    ])
];
const animationsForm3 = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('heightGrow', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ maxHeight: '100px', overflow: 'auto' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ maxHeight: '60px' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.2s ease')),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease')),
    ])
];
const animationsForm4 = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('flyInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            width: 120,
            transform: 'translateX(0)', opacity: 1
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s 0.1s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    transform: 'translateX(0)',
                    width: 120
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    opacity: 1
                }))
            ])
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    transform: 'translateX(50px)',
                    width: 10
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s 0.2s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    opacity: 0
                }))
            ])
        ])
    ])
];
const animationsForm5 = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }))
        ])
    ])
];


/***/ }),

/***/ 72512:
/*!*****************************************************!*\
  !*** ./projects/docs/src/app/app-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 51213);
/* harmony import */ var _security_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security/login-form.component */ 80782);
/* harmony import */ var _srv_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srv/selective-preloading-strategy.service */ 80424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






const routes = [
    { path: 'login', component: _security_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LogInFormComponent },
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("projects_docs_src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 87552)).then((m) => m.DashboardModule),
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 24139)).then((m) => m.HomeComponentsModule),
            },
            {
                // Needed for hash routing
                path: 'error',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 24139)).then((m) => m.HomeComponentsModule),
            },
            {
                // Needed for hash routing
                path: 'state',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 24139)).then((m) => m.HomeComponentsModule),
            },
            {
                // Needed for hash routing
                path: 'code',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 24139)).then((m) => m.HomeComponentsModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("projects_docs_src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 24562)).then((m) => m.ProfileModule),
            },
            {
                path: 'trabajador',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_docs_src_app_trabajador_trabajador_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./trabajador/trabajador.module */ 44030)).then((m) => m.TrabajadorModule),
            },
            {
                path: 'nómina',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_docs_src_app_payroll_payroll_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payroll/payroll.module */ 34608)).then((m) => m.PayrollModule),
            },
            {
                path: 'parámetros',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./material-component/material.module */ 8182)).then((m) => m.MaterialComponentsModule),
            },
            {
                path: 'subscripciones',
                loadChildren: () => __webpack_require__.e(/*! import() */ "projects_docs_src_app_subscription_subscription_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./subscription/subscription.module */ 98327)).then((m) => m.SubscriptionComponentsModule),
            },
        ],
    },
    { path: '**', redirectTo: '/dashboard' },
];
const isIframe = window !== window.parent && !window.opener;
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                preloadingStrategy: _srv_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__.SelectivePreloadingStrategyService,
                initialNavigation: !isIframe ? 'enabled' : 'disabled',
                useHash: true,
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 36127:
/*!************************************************!*\
  !*** ./projects/docs/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/common-types */ 55906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./srv/app-state.service */ 55419);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srv/navigation.service */ 12358);
/* harmony import */ var _srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./srv/payroll/rest/api */ 43560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/spinner.component */ 16817);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);










function AppComponent_div_0_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_mat_card_3_Template, 2, 0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("class", state_r2.uiPalette);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", state_r2.loading);
} }
function AppComponent_div_2_mat_card_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Buffer progress-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "<mat-progress-bar mode=\"buffer\">");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " is a horizontal progress-bar for indicating progress and activity.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-progress-bar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_2_mat_card_content_1_Template, 8, 0, "mat-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", route_r4.loading);
} }
class AppComponent {
    constructor(stateSrv, navSrv, storedProcedureAPISrv) {
        this.stateSrv = stateSrv;
        this.navSrv = navSrv;
        this.storedProcedureAPISrv = storedProcedureAPISrv;
        this.title = 'docs';
        this.subscriptions = [];
        this.states = [];
        this.leerTextos = (data) => {
            var _a, _b, _c;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.stateSrv.setTextos((_c = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.reduce((y, t) => {
                y[y['code']] = { name: y['name'], description: y['description'] };
                y[t['code']] = { name: t['name'], description: t['description'] };
                return y;
            }));
        };
        this.exectuteProcedureUsingPOST1 = (params) => this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(params, 'events', true, { httpHeaderAccept: 'application/json' });
        this.loading = true;
        this.subscriptions.push(this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({
            codigoCatalogo: 'TextosNE',
        })).subscribe({
            next: this.leerTextos,
            error: (err) => console.log(err),
        }));
    }
    get themeState$() {
        return this.stateSrv.themeState$;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_1__.AppStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_3__.StoredProcedureService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "m-0", "style", "display: flex; justify-content: center; align-items: center", 4, "ngIf"], [1, "m-0", 2, "display", "flex", "justify-content", "center", "align-items", "center"], ["mode", "indeterminate"], [1, "loading-overlay"], [1, "d"], [1, "d", "d-2"], [1, "d", "d-3"], ["mode", "buffer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_2_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.themeState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx.navSrv.routeState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["@keyframes dots {\n  50% {\n    transform: translateY(-0.4rem);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.d[_ngcontent-%COMP%] {\n  animation: dots 1.5s ease-out infinite;\n}\n.d-2[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n}\n.d-3[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsOEJBQUE7RUFDSjtFQUNFO0lBQ0Usd0JBQUE7RUFDSjtBQUNGO0FBRUU7RUFDRSxzQ0FBQTtBQUFKO0FBRUU7RUFDRSxxQkFBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZG90cyB7XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS40cmVtKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZCB7XHJcbiAgICBhbmltYXRpb246IGRvdHMgMS41cyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmQtMiB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC41cztcclxuICB9XHJcbiAgLmQtMyB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 87672:
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
/* harmony export */   "apiConfigFactory": () => (/* binding */ apiConfigFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/es-CO */ 21299);
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @azure/msal-angular */ 33235);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @azure/msal-browser */ 34683);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @azure/msal-browser */ 24867);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @azure/msal-browser */ 42317);
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angular-google-charts */ 30159);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 59328);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 92404);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 72512);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 36127);
/* harmony import */ var _b2c_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./b2c-config */ 79257);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-material-module */ 14217);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full/full.component */ 51213);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 9713);
/* harmony import */ var _layouts_full_helper_helper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/helper/helper.component */ 29476);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 67907);
/* harmony import */ var _layouts_full_sidebar_sidemenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full/sidebar/sidemenu.component */ 48561);
/* harmony import */ var _security_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/login-form.component */ 80782);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ 45175);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/spinner.component */ 16817);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./srv/app-state.service */ 55419);
/* harmony import */ var _srv_in_mem_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./srv/in-mem-data-service */ 3219);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./srv/in-mem-service */ 46556);
/* harmony import */ var _srv_payroll_api_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./srv/payroll/api.module */ 76653);
/* harmony import */ var _srv_payroll_configuration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./srv/payroll/configuration */ 14073);
/* harmony import */ var _srv_style_manager_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./srv/style-manager.service */ 90273);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types/common-types */ 55906);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);





































(0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.registerLocaleData)((_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_0___default()), 'es-Co');
(0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.getLocaleNumberSymbol)('es-CO', _angular_common__WEBPACK_IMPORTED_MODULE_21__.NumberSymbol.CurrencyGroup);
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1;
const loggerCallback = (level, message, containsPii) => {
    console.log(message);
};
function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_22__.PublicClientApplication({
        auth: {
            clientId: '81564fb6-eaa3-4c3f-918b-b5f567d4b595',
            authority: _b2c_config__WEBPACK_IMPORTED_MODULE_4__.b2cPolicies.authorities.signUpSignIn.authority,
            redirectUri: 'https://payroll.dev.fpicolombia.com/',
            postLogoutRedirectUri: '/',
            knownAuthorities: [_b2c_config__WEBPACK_IMPORTED_MODULE_4__.b2cPolicies.authorityDomain],
        },
        cache: {
            cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserCacheLocation.LocalStorage,
            storeAuthStateInCookie: isIE, // set to true for IE 11
        },
        system: {
            loggerOptions: {
                loggerCallback,
                logLevel: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_24__.LogLevel.Info,
                piiLoggingEnabled: false,
            },
        },
    });
}
function MSALInterceptorConfigFactory() {
    const protectedResourceMap = new Map();
    protectedResourceMap.set(_b2c_config__WEBPACK_IMPORTED_MODULE_4__.apiConfig.uri, _b2c_config__WEBPACK_IMPORTED_MODULE_4__.apiConfig.scopes);
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_23__.InteractionType.Redirect,
        protectedResourceMap,
    };
}
function MSALGuardConfigFactory() {
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_23__.InteractionType.Redirect,
        authRequest: {
            scopes: [..._b2c_config__WEBPACK_IMPORTED_MODULE_4__.apiConfig.scopes],
        },
    };
}
function apiConfigFactory() {
    const params = {
        apiKeys: {
            'content-Type': 'application/json',
            Authorization: `82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68`,
        },
        basePath: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API_GATEWAY,
    };
    return new _srv_payroll_configuration__WEBPACK_IMPORTED_MODULE_18__.Configuration(params);
}
class AppModule {
    constructor(overlayContainer, stateSrv) {
        overlayContainer.getContainerElement().classList.add(_types_common_types__WEBPACK_IMPORTED_MODULE_20__.NgGtdThemes.FpiSkin);
        stateSrv.themeState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.pairwise)()).subscribe(([p, q]) => {
            if (q)
                overlayContainer.getContainerElement().classList.remove(p.uiPalette);
            if (p)
                overlayContainer.getContainerElement().classList.add(q.uiPalette);
        });
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_14__.AppStateService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.CurrencyPipe,
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_26__.DEFAULT_CURRENCY_CODE, useValue: 'COP' },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_26__.LOCALE_ID, useValue: 'es-Co' },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__.PathLocationStrategy,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HTTP_INTERCEPTORS,
            useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MsalInterceptor,
            multi: true,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MSAL_INSTANCE,
            useFactory: MSALInstanceFactory,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MSAL_GUARD_CONFIG,
            useFactory: MSALGuardConfigFactory,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MSAL_INTERCEPTOR_CONFIG,
            useFactory: MSALInterceptorConfigFactory,
        },
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MsalService,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MsalGuard,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MsalBroadcastService,
        _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_16__.InMemService,
        _srv_in_mem_data_service__WEBPACK_IMPORTED_MODULE_15__.InMemDataService,
        _srv_app_state_service__WEBPACK_IMPORTED_MODULE_14__.AppStateService,
        _srv_style_manager_service__WEBPACK_IMPORTED_MODULE_19__.StyleManagerService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__.FlexLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MsalModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__.MatToolbarModule,
            angular_google_charts__WEBPACK_IMPORTED_MODULE_35__.GoogleChartsModule,
            _srv_payroll_api_module__WEBPACK_IMPORTED_MODULE_17__.ApiModule.forRoot(apiConfigFactory),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_7__.AppHeaderComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.AppSidebarComponent,
        _layouts_full_sidebar_sidemenu_component__WEBPACK_IMPORTED_MODULE_10__.AppSideMenuComponent,
        _layouts_full_helper_helper_component__WEBPACK_IMPORTED_MODULE_8__.HelperComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_13__.SpinnerComponent,
        _security_login_form_component__WEBPACK_IMPORTED_MODULE_11__.LogInFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_29__.MsalModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__.MatToolbarModule,
        angular_google_charts__WEBPACK_IMPORTED_MODULE_35__.GoogleChartsModule, _srv_payroll_api_module__WEBPACK_IMPORTED_MODULE_17__.ApiModule] }); })();


/***/ }),

/***/ 79257:
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

/***/ 4219:
/*!************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/pivot-table/config.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PIVOT_CFG": () => (/* binding */ PIVOT_CFG)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 71137);

const PIVOT_CFG = {
    dataSource: {
        data: _data__WEBPACK_IMPORTED_MODULE_0__.PIVOT_DATA,
    },
    slice: {
        rows: [
            {
                uniqueName: 'Concepto',
                sort: 'asc',
            },
            {
                uniqueName: 'Category',
                sort: 'asc',
            },
            {
                uniqueName: 'Measures',
            },
        ],
        columns: [
            {
                uniqueName: 'Tipo',
                sort: 'asc',
            },
        ],
        measures: [
            {
                uniqueName: 'Pago',
                aggregation: 'sum',
                format: "currency"
            },
            {
                uniqueName: 'Cantidad',
                aggregation: 'sum',
                format: "currency"
            },
        ],
        expands: {
            expandAll: false,
            rows: [
                {
                    tuple: ['Concepto.Devengado'],
                },
            ],
            columns: [
                {
                    tuple: ['Category.Auxilio'],
                },
            ],
        },
        drills: {
            drillAll: false,
        },
    },
    options: {
        grid: {
            type: 'compact',
            title: '',
            showFilter: true,
            showHeaders: true,
            showTotals: true,
            showGrandTotals: 'on',
            showHierarchies: true,
            showHierarchyCaptions: true,
            showReportFiltersArea: true,
        },
        configuratorActive: false,
        configuratorButton: true,
        showAggregations: true,
        showCalculatedValuesButton: true,
        drillThrough: true,
        showDrillThroughConfigurator: true,
        sorting: 'on',
        datePattern: 'dd/MM/yyyy',
        dateTimePattern: 'dd/MM/yyyy HH:mm:ss',
        saveAllFormats: false,
        showDefaultSlice: true,
        defaultHierarchySortName: 'asc',
    },
    formats: [
        {
            name: '',
            thousandsSeparator: ' ',
            decimalSeparator: '.',
            decimalPlaces: 2,
            maxSymbols: 20,
            currencySymbol: '',
            currencySymbolAlign: 'left',
            nullValue: ' ',
            infinityValue: 'Infinity',
            divideByZeroValue: 'Infinity',
        },
    ],
};


/***/ }),

/***/ 71137:
/*!**********************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/pivot-table/data.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PIVOT_DATA": () => (/* binding */ PIVOT_DATA)
/* harmony export */ });
const PIVOT_DATA = [
    ['Category', 'Size', 'Tipo', 'Concepto', 'Fecha inicio', 'Operacion', 'Cantidad', 'Pago'],
    { 'Category': 'Anticipos', 'Size': '112 oz', 'Tipo': 'D2', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 42 },
    { 'Category': 'Anticipos', 'Size': '256 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 115, 'Pago': 44 },
    { 'Category': 'Anticipos', 'Size': '291 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 244, 'Pago': 22 },
    { 'Category': 'Anticipos', 'Size': '126 oz', 'Tipo': 'D2', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 501556, 'Pago': 9 },
    { 'Category': 'Anticipos', 'Size': '310 oz', 'Tipo': 'D2', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 292, 'Pago': 36 },
    { 'Category': 'Anticipos', 'Size': '277 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 1222, 'Pago': 38 },
    { 'Category': 'Anticipos', 'Size': '147 oz', 'Tipo': 'D1', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 242, 'Pago': 37 },
    { 'Category': 'Anticipos', 'Size': '181 oz', 'Tipo': 'D2', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 99, 'Pago': 66 },
    { 'Category': 'Anticipos', 'Size': '181 oz', 'Tipo': 'D2', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 99, 'Pago': 66 },
    { 'Category': 'Anticipos', 'Size': '278 oz', 'Tipo': 'D2', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 89, 'Pago': 47 },
    { 'Category': 'Anticipos', 'Size': '344 oz', 'Tipo': 'D2', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 150, 'Pago': 30 },
    { 'Category': 'Anticipos', 'Size': '124 oz', 'Tipo': 'D2', 'Concepto': 'Devengado', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 578, 'Pago': 8 },
    { 'Category': 'Anticipos', 'Size': '23 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/10/2020', 'Operacion': 'Devengado', 'Cantidad': 64, 'Pago': 70 },
    { 'Category': 'Anticipos', 'Size': '124 oz', 'Tipo': 'D4', 'Concepto': 'Devengado', 'Fecha inicio': '12/10/2020', 'Operacion': 'Devengado', 'Cantidad': 556, 'Pago': 95 },
    { 'Category': 'Auxilio', 'Size': '76 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 1664, 'Pago': 75 },
    { 'Category': 'Auxilio', 'Size': '217 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 2995, 'Pago': 88 },
    { 'Category': 'Auxilio', 'Size': '251 oz', 'Tipo': 'D4', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 1487, 'Pago': 100 },
    { 'Category': 'Auxilio', 'Size': '292 oz', 'Tipo': 'D4', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 9245, 'Pago': 29 },
    { 'Category': 'Auxilio', 'Size': '266 oz', 'Tipo': 'D4', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 9008, 'Pago': 66 },
    { 'Category': 'Auxilio', 'Size': '109 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 1531, 'Pago': 31 },
    { 'Category': 'Auxilio', 'Size': '54 oz', 'Tipo': 'D2', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 5421, 'Pago': 22 },
    { 'Category': 'Auxilio', 'Size': '93 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 6975, 'Pago': 41 },
    { 'Category': 'Auxilio', 'Size': '297 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/09/2020', 'Operacion': 'Deduccion', 'Cantidad': 4320, 'Pago': 100 },
    { 'Category': 'Auxilio', 'Size': '339 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 3200, 'Pago': 41 },
    { 'Category': 'Auxilio', 'Size': '205 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 22, 'Pago': 41 },
    { 'Category': 'Auxilio', 'Size': '226 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/10/2020', 'Operacion': 'Devengado', 'Cantidad': 22, 'Pago': 42 },
    { 'Category': 'Auxilio', 'Size': '311 oz', 'Tipo': 'D6', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Devengado', 'Cantidad': 75, 'Pago': 70 },
    { 'Category': 'Auxilio', 'Size': '282 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 6377, 'Pago': 49 },
    { 'Category': 'Auxilio', 'Size': '100 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/10/2020', 'Operacion': 'Devengado', 'Cantidad': 6650, 'Pago': 4 },
    { 'Category': 'Basico', 'Size': '284 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 981, 'Pago': 36 },
    { 'Category': 'Basico', 'Size': '192 oz', 'Tipo': 'D1', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 38 },
    { 'Category': 'Basico', 'Size': '25 oz', 'Tipo': 'D6', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 72 },
    { 'Category': 'Basico', 'Size': '39 oz', 'Tipo': 'D6', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 90 },
    { 'Category': 'Basico', 'Size': '36 oz', 'Tipo': 'D4', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 93 },
    { 'Category': 'Basico', 'Size': '208 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/09/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 40 },
    { 'Category': 'Basico', 'Size': '147 oz', 'Tipo': 'D1', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 24 },
    { 'Category': 'Basico', 'Size': '68 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 40 },
    { 'Category': 'Bono', 'Size': '144 oz', 'Tipo': 'D4', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 26 },
    { 'Category': 'Bono', 'Size': '283 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 42 },
    { 'Category': 'Bono', 'Size': '299 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 58 },
    { 'Category': 'Bono', 'Size': '88 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 35 },
    { 'Category': 'Bono', 'Size': '161 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 42 },
    { 'Category': 'Bono', 'Size': '25 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 97 },
    { 'Category': 'Bono', 'Size': '317 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 64 },
    { 'Category': 'Bono', 'Size': '295 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 10 },
    { 'Category': 'Bono', 'Size': '69 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 36 },
    { 'Category': 'Bono', 'Size': '320 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/09/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 78 },
    { 'Category': 'Bono', 'Size': '340 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 62 },
    { 'Category': 'Bono', 'Size': '49 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 29 },
    { 'Category': 'Bono', 'Size': '94 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 98 },
    { 'Category': 'Bono', 'Size': '203 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 62 },
    { 'Category': 'Bono', 'Size': '350 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/09/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 46 },
    { 'Category': 'Bono', 'Size': '200 oz', 'Tipo': 'D4', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 88 },
    { 'Category': 'Bono', 'Size': '231 oz', 'Tipo': 'D3', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 94 },
    { 'Category': 'Bono', 'Size': '26 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 14 },
    { 'Category': 'Bono', 'Size': '140 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 76 },
    { 'Category': 'Bono', 'Size': '158 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 35 },
    { 'Category': 'Bono', 'Size': '116 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 21 },
    { 'Category': 'Bono', 'Size': '263 oz', 'Tipo': 'D1', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 43 },
    { 'Category': 'Comision', 'Size': '349 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 47 },
    { 'Category': 'Comision', 'Size': '67 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 8 },
    { 'Category': 'Comision', 'Size': '70 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 14 },
    { 'Category': 'Comision', 'Size': '17 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 10 },
    { 'Category': 'Comision', 'Size': '270 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 18 },
    { 'Category': 'Comision', 'Size': '105 oz', 'Tipo': 'D4', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 3 },
    { 'Category': 'Comision', 'Size': '91 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 46 },
    { 'Category': 'Comision', 'Size': '39 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 64 },
    { 'Category': 'Comision', 'Size': '4 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/12/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 22 },
    { 'Category': 'Comision', 'Size': '128 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 49 },
    { 'Category': 'Comision', 'Size': '193 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 59 },
    { 'Category': 'Cesantia', 'Size': '159 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 65 },
    { 'Category': 'Cesantia', 'Size': '159 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 65 },
    { 'Category': 'Cesantia', 'Size': '63 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 53 },
    { 'Category': 'Cesantia', 'Size': '246 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 17 },
    { 'Category': 'Cesantia', 'Size': '246 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 17 },
    { 'Category': 'Cesantia', 'Size': '280 oz', 'Tipo': 'D4', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 92 },
    { 'Category': 'Cesantia', 'Size': '280 oz', 'Tipo': 'D4', 'Concepto': 'Deduccion', 'Fecha inicio': '12/10/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 92 },
    { 'Category': 'Cesantia', 'Size': '103 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 7 },
    { 'Category': 'Cesantia', 'Size': '103 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 7 },
    { 'Category': 'Cesantia', 'Size': '184 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 57 },
    { 'Category': 'Compensacion', 'Size': '184 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 57 },
    { 'Category': 'Huelga Legal', 'Size': '340 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 37 },
    { 'Category': 'Nota', 'Size': '340 oz', 'Tipo': 'D3', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 37 },
    { 'Category': 'Incapacidad', 'Size': '251 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 33 },
    { 'Category': 'Licencia', 'Size': '251 oz', 'Tipo': 'D5', 'Concepto': 'Devengado', 'Fecha inicio': '12/11/2020', 'Operacion': 'Deduccion', 'Cantidad': 987, 'Pago': 33 },
    { 'Category': 'Libranza', 'Size': '92 oz', 'Tipo': 'D5', 'Concepto': 'Deduccion', 'Fecha inicio': '12/11/2020', 'Operacion': 'Devengado', 'Cantidad': 987, 'Pago': 33 },
];


/***/ }),

/***/ 63716:
/*!***************************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/pivot-table/pivot-table.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebdatarocksComponent": () => (/* binding */ WebdatarocksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var webdatarocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdatarocks */ 8216);
/* harmony import */ var webdatarocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webdatarocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ 4219);




class WebdatarocksComponent {
    constructor(el) {
        this.el = el;
        // params
        this.toolbar = false;
        this.width = 200;
        this.height = 200;
        this.report = _config__WEBPACK_IMPORTED_MODULE_1__.PIVOT_CFG;
        // events
        this.cellclick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.celldoubleclick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dataerror = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.datafilecancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dataloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.datachanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.fieldslistclose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.fieldslistopen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.filteropen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loadingdata = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loadinglocalization = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loadingreportfile = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.localizationerror = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.localizationloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.openingreportfile = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.querycomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.queryerror = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.reportchange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.reportcomplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.reportfilecancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.reportfileerror = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.reportfileloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.runningquery = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.beforetoolbarcreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.aftergriddraw = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.beforegriddraw = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.root = this.el.nativeElement;
        this.webDataRocks = new (webdatarocks__WEBPACK_IMPORTED_MODULE_0___default())({
            container: this.root.getElementsByClassName('wbr-ng-wrapper')[0],
            width: this.width,
            height: this.height,
            toolbar: this.toolbar,
            report: this.report,
            global: this.global,
            customizeCell: this.customizeCell,
            cellclick: (cell) => this.cellclick.next(cell),
            celldoubleclick: (cell) => this.celldoubleclick.next(cell),
            dataerror: (event) => this.dataerror.next(event),
            datafilecancelled: () => this.datafilecancelled.next(),
            dataloaded: () => this.dataloaded.next(),
            datachanged: (event) => this.datachanged.next(event),
            fieldslistclose: () => this.fieldslistclose.next(),
            fieldslistopen: () => this.fieldslistopen.next(),
            filteropen: () => this.filteropen.next(),
            loadingdata: () => this.loadingdata.next(),
            loadinglocalization: () => this.loadinglocalization.next(),
            loadingreportfile: () => this.loadingreportfile.next(),
            localizationerror: () => this.localizationerror.next(),
            localizationloaded: () => this.localizationloaded.next(),
            openingreportfile: () => this.openingreportfile.next(),
            querycomplete: () => this.querycomplete.next(),
            queryerror: () => this.queryerror.next(),
            ready: () => this.ready.next(this.webDataRocks),
            reportchange: () => this.reportchange.next(),
            reportcomplete: () => this.reportcomplete.next(),
            reportfilecancelled: () => this.reportfilecancelled.next(),
            reportfileerror: () => this.reportfileerror.next(),
            reportfileloaded: () => this.reportfileloaded.next(),
            runningquery: () => this.runningquery.next(),
            update: () => this.update.next(),
            beforetoolbarcreated: (toolbar) => this.beforetoolbarcreated.next(toolbar),
            aftergriddraw: (event) => this.aftergriddraw.next(event),
            beforegriddraw: (event) => this.beforegriddraw.next(event),
        });
    }
}
WebdatarocksComponent.ɵfac = function WebdatarocksComponent_Factory(t) { return new (t || WebdatarocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
WebdatarocksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebdatarocksComponent, selectors: [["wbr-pivot"]], inputs: { toolbar: "toolbar", width: "width", height: "height", report: "report", global: "global", customizeCell: "customizeCell" }, outputs: { cellclick: "cellclick", celldoubleclick: "celldoubleclick", dataerror: "dataerror", datafilecancelled: "datafilecancelled", dataloaded: "dataloaded", datachanged: "datachanged", fieldslistclose: "fieldslistclose", fieldslistopen: "fieldslistopen", filteropen: "filteropen", fullscreen: "fullscreen", loadingdata: "loadingdata", loadinglocalization: "loadinglocalization", loadingreportfile: "loadingreportfile", localizationerror: "localizationerror", localizationloaded: "localizationloaded", openingreportfile: "openingreportfile", querycomplete: "querycomplete", queryerror: "queryerror", ready: "ready", reportchange: "reportchange", reportcomplete: "reportcomplete", reportfilecancelled: "reportfilecancelled", reportfileerror: "reportfileerror", reportfileloaded: "reportfileloaded", runningquery: "runningquery", update: "update", beforetoolbarcreated: "beforetoolbarcreated", aftergriddraw: "aftergriddraw", beforegriddraw: "beforegriddraw" }, decls: 2, vars: 0, consts: [[1, "wbr-ng-wrapper"]], template: function WebdatarocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 14217:
/*!*******************************************************!*\
  !*** ./projects/docs/src/app/demo-material-module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": () => (/* binding */ DemoMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 19238);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 97091);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 70946);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 18553);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 80521);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 87636);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 20552);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 36410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 54436);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
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

/***/ 60183:
/*!***********************************************************!*\
  !*** ./projects/docs/src/app/guards/dirty-check.guard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirtyCheckGuard": () => (/* binding */ DirtyCheckGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 55906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);





class DirtyCheckGuard {
    constructor(dialog) {
        this.dialog = dialog;
    }
    canActivate(route, state) {
        debugger;
        return true;
    }
    canDeactivate(component) {
        return component.isDirty$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((dirty) => {
            if (dirty === false) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            }
            return (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.confirm)(this.dialog, `Tiene cambios sin guardar ¿Desea salir de la página actual?`);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
}
DirtyCheckGuard.ɵfac = function DirtyCheckGuard_Factory(t) { return new (t || DirtyCheckGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
DirtyCheckGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DirtyCheckGuard, factory: DirtyCheckGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27863:
/*!*************************************************************!*\
  !*** ./projects/docs/src/app/guards/gtd-input.formatter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GtdInputFormatterDirective": () => (/* binding */ GtdInputFormatterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 55906);





class GtdInputFormatterDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.formatValue(value);
    }
    formatValue(value) {
        if (value !== null) {
            this.elementRef.nativeElement.value = (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.numberWithCommas)(value);
        }
        else {
            this.elementRef.nativeElement.value = '';
        }
    }
    unFormatValue() {
        const value = (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.parseLocaleNumber)(this.elementRef.nativeElement.value, 'es-CO');
        this._value = value.toString();
        if (value) {
            this.elementRef.nativeElement.value = this._value;
        }
        else {
            this.elementRef.nativeElement.value = '';
        }
    }
    onInput(value) {
        // here we cut any non numerical symbols
        this._value = value;
        this.formatValue(value);
        this._onChange(this._value);
    }
    _onBlur() {
        // this.formatValue(this._value!); // add commas
    }
    onFocus() {
        // this.unFormatValue(); // remove commas for editing purpose
    }
    _onChange(value) { }
    writeValue(value) {
        this._value = value;
        this.formatValue(this._value); // format Value
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() { }
}
GtdInputFormatterDirective.ɵfac = function GtdInputFormatterDirective_Factory(t) { return new (t || GtdInputFormatterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
GtdInputFormatterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GtdInputFormatterDirective, selectors: [["input", "gtdInputFormatter", ""]], hostBindings: function GtdInputFormatterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function GtdInputFormatterDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target.value); })("blur", function GtdInputFormatterDirective_blur_HostBindingHandler() { return ctx._onBlur(); })("focus", function GtdInputFormatterDirective_focus_HostBindingHandler() { return ctx.onFocus(); });
    } }, inputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MAT_INPUT_VALUE_ACCESSOR,
                useExisting: GtdInputFormatterDirective,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => GtdInputFormatterDirective),
                multi: true,
            },
        ])] });


/***/ }),

/***/ 77590:
/*!************************************************************!*\
  !*** ./projects/docs/src/app/guards/gtd-text.formatter.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GtdTextFormatterDirective": () => (/* binding */ GtdTextFormatterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 55906);





class GtdTextFormatterDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.formatValue(value);
    }
    formatValue(value) {
        if (value !== null) {
            this._value = (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.safeText)(value);
            this.elementRef.nativeElement.value = (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.safeText)(value);
        }
        else {
            this._value = '';
            this.elementRef.nativeElement.value = '';
        }
    }
    unFormatValue() {
        var _a;
        this._value = (_a = this._value) === null || _a === void 0 ? void 0 : _a.toString();
        if (this._value) {
            this.elementRef.nativeElement.value = this._value;
        }
        else {
            this.elementRef.nativeElement.value = '';
        }
    }
    onInput(value) {
        // here we cut any non numerical symbols
        this._value = (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.safeText)(value);
        this.formatValue(value);
        this._onChange(this._value);
    }
    _onBlur() {
        // this.formatValue(this._value!); // add commas
    }
    onFocus() {
        // this.unFormatValue(); // remove commas for editing purpose
    }
    _onChange(value) { }
    writeValue(value) {
        this._value = (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.safeText)(value);
        this.formatValue(this._value); // format Value
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() { }
}
GtdTextFormatterDirective.ɵfac = function GtdTextFormatterDirective_Factory(t) { return new (t || GtdTextFormatterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
GtdTextFormatterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GtdTextFormatterDirective, selectors: [["input", "gtdTextFormatter", ""]], hostBindings: function GtdTextFormatterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function GtdTextFormatterDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target.value); })("blur", function GtdTextFormatterDirective_blur_HostBindingHandler() { return ctx._onBlur(); })("focus", function GtdTextFormatterDirective_focus_HostBindingHandler() { return ctx.onFocus(); });
    } }, inputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MAT_INPUT_VALUE_ACCESSOR,
                useExisting: GtdTextFormatterDirective,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => GtdTextFormatterDirective),
                multi: true,
            },
        ])] });


/***/ }),

/***/ 51213:
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ 42243);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../srv/app-state.service */ 55419);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../srv/navigation.service */ 12358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 67907);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/spinner.component */ 16817);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ 9713);















function FullComponent_div_0_mat_toolbar_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FullComponent_div_0_mat_toolbar_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r4.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "apps");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FullComponent_div_0_mat_toolbar_6_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r6.navSrv.navigate("/n\u00F3mina"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.activeRoute);
} }
function FullComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-drawer-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("backdropClick", function FullComponent_div_0_Template_mat_drawer_container_backdropClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.stateSrv.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-drawer", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-drawer-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FullComponent_div_0_mat_toolbar_6_Template, 10, 1, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-top", state_r1.Medium ? 0 : 0, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opened", state_r1.visibleMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !state_r1.fullScreen);
} }
class FullComponent {
    constructor(menuItemsSrv, stateSrv, router, navSrv) {
        this.menuItemsSrv = menuItemsSrv;
        this.stateSrv = stateSrv;
        this.router = router;
        this.navSrv = navSrv;
    }
    get activeRoute() {
        var _a, _b, _c, _d, _e, _f;
        const items = (_a = decodeURIComponent(this.router.url)) === null || _a === void 0 ? void 0 : _a.split('/');
        const item = (_f = (_e = (_d = (_c = (_b = this.menuItemsSrv) === null || _b === void 0 ? void 0 : _b.menuState$) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.menuItems) === null || _e === void 0 ? void 0 : _e.filter((item) => {
            return item.state === `${items[1]}`;
        }).map((item) => {
            var _a, _b, _c, _d, _e, _f;
            const items2 = (_c = (_b = (_a = items[2]) === null || _a === void 0 ? void 0 : _a.split(';')) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : items[2];
            if (item.state === `${items[1]}`) {
                return (_f = (_e = (_d = item.menuItems) === null || _d === void 0 ? void 0 : _d.filter((item) => item.state === `/${items[1]}/${items2}`)) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.name;
            }
            return item.state;
        })) === null || _f === void 0 ? void 0 : _f[0];
        return `${item !== null && item !== void 0 ? item : 'Nómina Electrónica'}`;
    }
    toggleMenu() {
        this.stateSrv.toggleMenu();
    }
    get themeState$() {
        return this.stateSrv.themeState$;
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__.AppStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], viewQuery: function FullComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_material_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.selectedPane = _t.first);
    } }, decls: 2, vars: 3, consts: [["class", "main-container", 4, "ngIf"], [1, "main-container"], [1, "page-container", 3, "backdropClick"], ["id", "snav", "mode", "over", "disableClose", "false", 1, "dark-sidebar", "pl-xs", 2, "direction", "rtl", 3, "opened"], ["snav", ""], [1, "page-wrapper"], ["class", "topbar telative", 4, "ngIf"], [1, "topbar", "telative"], ["mat-icon-button", "", "value", "sidebarclosed", 2, "color", "var(--secondary-light)!important", 3, "click"], [1, "navbar-header", "d-flex", "align-items-center"], [1, "navbar-brand", 3, "click"], ["fxFlex", ""]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, FullComponent_div_0_Template, 9, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.themeState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawer, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_6__.AppHeaderComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["h3[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImZ1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @azure/msal-angular */ 33235);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-browser */ 24867);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-browser */ 70536);
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! msal */ 26930);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _b2c_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../b2c-config */ 79257);
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.component */ 35370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../srv/in-mem-service */ 46556);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../srv/app-state.service */ 55419);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 76627);


















function AppHeaderComponent_ng_container_0_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_button_3_Template_button_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r14.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r14.name);
} }
function AppHeaderComponent_ng_container_0_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_button_6_Template_button_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r16.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
} }
function AppHeaderComponent_ng_container_0_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Log In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_ng_container_0_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_ng_container_0_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppHeaderComponent_ng_container_0_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_button_52_Template_button_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const option_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); ctx_r25.changeTheme(option_r24.catalog); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "use", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "use", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("fill", option_r24.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("fill", option_r24.buttonColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("fill", option_r24.headingColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r24.label);
} }
const _c0 = function () { return ["profile"]; };
function AppHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-menu", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_Template_mat_menu_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppHeaderComponent_ng_container_0_button_3_Template, 5, 2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", 1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_Template_mat_menu_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppHeaderComponent_ng_container_0_button_6_Template, 4, 2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-menu", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AppHeaderComponent_ng_container_0_button_15_Template, 4, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AppHeaderComponent_ng_container_0_button_16_Template, 4, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AppHeaderComponent_ng_container_0_button_17_Template, 4, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Ver m\u00E1s ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-menu", 7, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "accessibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Accesibilidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Desactivar notificaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Editar perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.invertTheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "invert_colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Invertir colores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_Template_button_click_40_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "palette");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Paleta colores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-menu", 7, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Pantalla completa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-menu", 1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppHeaderComponent_ng_container_0_Template_mat_menu_click_50_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, AppHeaderComponent_ng_container_0_button_52_Template, 12, 4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", state_r1.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", state_r1.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loginDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loginDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loginDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.stateSrv.themes);
} }
class AppHeaderComponent {
    constructor(msalGuardConfig, authService, msalBroadcastService, dialog, inMemSrv, http, stateSrv) {
        this.msalGuardConfig = msalGuardConfig;
        this.authService = authService;
        this.msalBroadcastService = msalBroadcastService;
        this.dialog = dialog;
        this.inMemSrv = inMemSrv;
        this.http = http;
        this.stateSrv = stateSrv;
        this.title = 'MSAL Angular v2 B2C Sample';
        this.isIframe = false;
        this.loginDisplay = false;
        this._destroying$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.isIframe = window !== window.parent && !window.opener;
        this.setLoginDisplay();
        this.msalBroadcastService.inProgress$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((status) => status === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.InteractionStatus.None), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$))
            .subscribe(() => {
            this.setLoginDisplay();
        });
        this.msalBroadcastService.msalSubject$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((msg) => msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__.EventType.LOGIN_SUCCESS ||
            msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__.EventType.ACQUIRE_TOKEN_SUCCESS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$))
            .subscribe((result) => {
            var _a;
            let payload = result.payload;
            // We need to reject id tokens that were not issued with the default sign-in policy.
            // "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr")
            // To learn more about b2c tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
            if (((_a = payload.idTokenClaims) === null || _a === void 0 ? void 0 : _a.acr) === _b2c_config__WEBPACK_IMPORTED_MODULE_0__.b2cPolicies.names.forgotPassword) {
                window.alert('Password has been reset successfully. \nPlease sign-in with your new password.');
                return this.authService.logout();
            }
            else if (payload.idTokenClaims['acr'] === _b2c_config__WEBPACK_IMPORTED_MODULE_0__.b2cPolicies.names.editProfile) {
                window.alert('Profile has been updated successfully. \nPlease sign-in again.');
                return this.authService.logout();
            }
            return result;
        });
        this.msalBroadcastService.msalSubject$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((msg) => msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__.EventType.LOGIN_FAILURE ||
            msg.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__.EventType.ACQUIRE_TOKEN_FAILURE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$))
            .subscribe((result) => {
            if (result.error instanceof msal__WEBPACK_IMPORTED_MODULE_10__.AuthError) {
                // Check for forgot password error
                // Learn more about AAD error codes at https://docs.microsoft.com/azure/active-directory/develop/reference-aadsts-error-codes
                if (result.error.message.includes('AADB2C90118')) {
                    // login request with reset authority
                    let resetPasswordFlowRequest = {
                        scopes: ['openid'],
                        authority: _b2c_config__WEBPACK_IMPORTED_MODULE_0__.b2cPolicies.authorities.forgotPassword.authority,
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
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.InteractionType.Popup) {
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
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.InteractionType.Popup) {
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
            authority: _b2c_config__WEBPACK_IMPORTED_MODULE_0__.b2cPolicies.authorities.editProfile.authority,
        };
        this.login(editProfileFlowRequest);
    }
    ngOnDestroy() {
        this._destroying$.next(undefined);
        this._destroying$.complete();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent, {
            width: '450px',
            data: { name: this.name, email: this.email },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            this.email = result;
        });
    }
    changeTheme(themeToSet) {
        this.stateSrv.setUiPalette(themeToSet);
    }
    invertTheme() {
        this.stateSrv.invertTheme();
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MSAL_GUARD_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_11__.MsalBroadcastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_srv_in_mem_service__WEBPACK_IMPORTED_MODULE_2__.InMemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_3__.AppStateService)); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "mymegamenu", 3, "click"], ["messagesMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["notificationsMenu", "matMenu"], ["mat-icon-button", "", 1, "m-4"], ["src", "assets/images/logo__globaltek.png", "alt", "user", 1, "profile-pic"], [1, "mymegamenu"], ["options", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["profile", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor", "click"], ["accessibility", "matMenu"], ["palette", "matMenu"], [1, "mt-4"], ["role", "img", "svgicon", "theme-example", "aria-hidden", "true"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100%", "height", "100%", "viewBox", "0 0 80 80", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z", "id", "a"], ["d", "M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z", "id", "b"], ["d", "M0 0h80v17.24H0V0z", "id", "c"], [0, "xlink", "href", "#a"], [0, "xlink", "href", "#b"], [0, "xlink", "href", "#c"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppHeaderComponent_ng_container_0_Template, 53, 11, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.stateSrv.themeState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 35370:
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);









function SignInComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email es obligatorio.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Aceptar");
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

/***/ 29476:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/helper/helper.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperComponent": () => (/* binding */ HelperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

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

/***/ 67907:
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
/* harmony import */ var _animations_form_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations/form-animation */ 27150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 42243);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../srv/app-state.service */ 55419);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../srv/navigation.service */ 12358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 75002);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 42457);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 16671);


















const _c0 = ["snav"];
function AppSidebarComponent_ng_container_0_mat_icon_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppSidebarComponent_ng_container_0_mat_icon_30_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); _r3.value = ""; ctx_r6.filter(""); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AppSidebarComponent_ng_container_0_mat_nav_list_31_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppSidebarComponent_ng_container_0_mat_nav_list_31_mat_list_item_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r13.stateSrv.toggleMenu(); })("click", function AppSidebarComponent_ng_container_0_mat_nav_list_31_mat_list_item_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const menuitem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r15.navSrv.navigate(menuitem_r10.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r12.menuItemsSrv.codePoint(menuitem_r10.emoji), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuitem_r10.name);
} }
function AppSidebarComponent_ng_container_0_mat_nav_list_31_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppSidebarComponent_ng_container_0_mat_nav_list_31_mat_list_item_1_a_1_Template, 5, 2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("group", menuitem_r10.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuitem_r10.type === "link");
} }
function AppSidebarComponent_ng_container_0_mat_nav_list_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-nav-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppSidebarComponent_ng_container_0_mat_nav_list_31_mat_list_item_1_Template, 2, 2, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuState_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", menuState_r8.menuItems);
} }
function AppSidebarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Administrador ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "em", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-menu", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Disable notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Buscar...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AppSidebarComponent_ng_container_0_mat_icon_30_Template, 2, 0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, AppSidebarComponent_ng_container_0_mat_nav_list_31_Template, 2, 1, "mat-nav-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 4, ctx_r0.menuItemsSrv.menuState$));
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItemsSrv, stateSrv, navSrv) {
        this.menuItemsSrv = menuItemsSrv;
        this.stateSrv = stateSrv;
        this.navSrv = navSrv;
        this.tiles = [
            { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 3, rows: 1, color: '#DDBDF1' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            // {text: 'Four', cols: 4, rows: 4, color: 'lightgreen'},
        ];
        this.state = "open";
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
        return this.stateSrv.themeState$;
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
    changeState() {
        (this.state == "closed") ? this.state = "open" : this.state = "closed";
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__.AppStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
AppSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], viewQuery: function AppSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "user-profile"], [1, "profile-text"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], [3, "formGroup"], [1, "mt-4", "find-menu-item", 2, "direction", "ltr", "padding", "0px 15px"], ["type", "text", "matInput", "", "formControlName", "menuItem", "placeholder", "Buscar"], ["buscar", ""], ["matSuffix", "", "mat-fab", "", 3, "click", 4, "ngIf"], ["appAccordion", "", "style", "direction: ltr ", 4, "ngIf"], ["matSuffix", "", "mat-fab", "", 3, "click"], ["appAccordion", "", 2, "direction", "ltr"], ["appAccordionLink", "", "routerLinkActive", "selected", "class", "list-item", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 1, "list-item", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "click", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "click"], [1, "dd-icon"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppSidebarComponent_ng_container_0_Template, 33, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.themeState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkActive, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionAnchorDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_nghost-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow: none !important;\n  height: calc(100vh - 64px);\n}\n\n.sign-gtd[_ngcontent-%COMP%] {\n  position: sticky;\n  height: 69px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: radial-gradient(circle, #b8b0bd 0%, #d0d8d4 50%, #c7c4bf 100%);\n  -webkit-clip-path: url(#clip);\n          clip-path: url(#clip);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #EEE;\n  overflow-x: hidden;\n}\n\n.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  *zoom: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px auto;\n  padding: 50px 0;\n  clear: both;\n}\n\n@media only screen and (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1210px;\n  }\n}\n\n@media only screen and (min-width: 960px) and (max-width: 1199px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1030px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 959px) {\n  .container[_ngcontent-%COMP%] {\n    width: 682px;\n  }\n}\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    width: 428px;\n    margin: 0 auto;\n  }\n}\n\n@media only screen and (max-width: 479px) {\n  .container[_ngcontent-%COMP%] {\n    width: 320px;\n    margin: 0 auto;\n  }\n}\n\n.mcd-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #FFF;\n  \n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  \n  width: 250px;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 12px 20px;\n  color: #777;\n  \n  \n  text-align: left;\n  height: 36px;\n  position: relative;\n  border-bottom: 1px solid #EEE;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  \n  \n  float: left;\n  font-size: 20px;\n  margin: 0 10px 0 0;\n  \n}\n\n\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0;\n}\n\n\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  text-transform: uppercase;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 300ms linear;\n  -o-transition: all 300ms linear;\n  -ms-transition: all 300ms linear;\n  -moz-transition: all 300ms linear;\n  -webkit-transition: all 300ms linear;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: moveFromTop 300ms ease-in-out;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: moveFromLeft 300ms ease-in-out;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: moveFromRight 300ms ease-in-out;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #e67e22;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  position: relative;\n  color: #e67e22;\n  border: 0;\n  \n  box-shadow: 0 0 5px #DDD;\n  -moz-box-shadow: 0 0 5px #DDD;\n  -webkit-box-shadow: 0 0 5px #DDD;\n  \n  border-left: 4px solid #e67e22;\n  border-right: 4px solid #e67e22;\n  margin: 0 -4px;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  \n  \n  top: 42%;\n  left: 0;\n  border-left: 5px solid #e67e22;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  \n}\n\n\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 42%;\n  right: 0;\n  border-right: 5px solid #e67e22;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  height: auto;\n  min-width: 200px;\n  padding: 0;\n  margin: 0;\n  background: #FFF;\n  \n  opacity: 0;\n  visibility: hidden;\n  transition: all 300ms linear;\n  -o-transition: all 300ms linear;\n  -ms-transition: all 300ms linear;\n  -moz-transition: all 300ms linear;\n  -webkit-transition: all 300ms linear;\n  \n  z-index: 1000;\n  \n  left: 280px;\n  top: 0px;\n  border-left: 4px solid #e67e22;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  \n  \n  top: 25px;\n  left: -9px;\n  border-right: 5px solid #e67e22;\n  border-bottom: 5px solid transparent;\n  border-top: 5px solid transparent;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n  visibility: visible;\n  \n  \n  left: 250px;\n  \n}\n\n\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: left;\n  border: 0;\n  border-bottom: 1px solid #EEE;\n  \n  height: auto;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  left: 230px;\n  top: 0;\n  border: 0;\n  border-left: 4px solid #e67e22;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  \n  \n  left: -9px;\n  \n  border-right: 5px solid #e67e22;\n  border-bottom: 5px solid transparent;\n  border-top: 5px solid transparent;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 200px;\n}\n\n\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%] {\n  \n  padding: 10px 10px 15px 10px;\n  clear: both;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline-block;\n  font-size: 18px;\n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #EEE;\n  padding: 10px;\n  background: #FFF;\n  outline: none;\n  color: #777;\n  \n  width: 170px;\n  float: left;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #e67e22;\n  \n  background: #e67e22;\n  outline: none;\n  color: #FFF;\n  margin-left: -4px;\n  \n  float: left;\n  padding: 10px 10px 11px 10px;\n  \n}\n\n.mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #e67e22;\n}\n\n.search-mobile[_ngcontent-%COMP%] {\n  display: none !important;\n  background: #e67e22;\n  border-left: 1px solid #e67e22;\n  border-radius: 0 3px 3px 0;\n}\n\n.search-mobile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #FFF;\n  margin: 0 !important;\n}\n\n@media only screen and (min-width: 960px) and (max-width: 1199px) {\n  .mcd-menu[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 959px) {\n  .mcd-menu[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 120px;\n    font-size: 12px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.search[_ngcontent-%COMP%]   buton[_ngcontent-%COMP%] {\n    padding: 8px 10px 9px 10px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    min-width: 180px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    min-width: 180px;\n    left: 200px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    left: 180px;\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    left: 150px;\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .mcd-menu[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 12px 16px;\n    height: 20px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 10px;\n    padding: 3px 0;\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    background: #e67e22;\n    color: #FFF;\n    min-width: 100%;\n    text-transform: lowercase;\n    font-weight: normal;\n    text-align: center;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    min-width: 180px;\n    left: 70px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    min-width: 180px;\n    left: 50px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    left: 180px;\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    left: 35px;\n    top: 45px;\n    border: 0;\n    border-top: 4px solid #e67e22;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:before {\n    left: 30px;\n    top: -9px;\n    border: 0;\n    border-bottom: 5px solid #e67e22;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    left: 30px;\n    min-width: 150px;\n    top: 35px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 479px) {\n  .mcd-menu[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 12px 16px;\n    height: 20px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 10px;\n    padding: 3px 0;\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    background: #e67e22;\n    color: #FFF;\n    min-width: 100%;\n    text-transform: lowercase;\n    font-weight: normal;\n    text-align: center;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    min-width: 180px;\n    left: 70px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    min-width: 180px;\n    left: 50px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    left: 180px;\n    min-width: 150px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    left: 35px;\n    top: 45px;\n    border: 0;\n    border-top: 4px solid #e67e22;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:before {\n    left: 30px;\n    top: -9px;\n    border: 0;\n    border-bottom: 5px solid #e67e22;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    left: 30px;\n    min-width: 150px;\n    top: 35px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .mcd-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMEVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBQ0E7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtHQUdFLE9BRkU7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0k7SUFDSSxhQUFBO0VBSU47QUFDRjs7QUFEQTtFQUNJO0lBQ0ksYUFBQTtFQUdOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLFlBQUE7RUFFTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsY0FBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxjQUFBO0VBQU47QUFDRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBRUEsT0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FBSkY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBO21DQUFBO0VBR0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxPQUFBO0FBSEY7O0FBS0E7RUFDRTs7dUJBQUE7RUFJQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUFIRjs7QUFNQSxPQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUFIRjs7QUFLQSxPQUFBOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFFQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBSEY7O0FBS0E7RUFDSSxVQUFBO0VBS0Esd0NBQUE7QUFGSjs7QUFJQTtFQUNJLFVBQUE7RUFLQSx5Q0FBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtFQUtBLDBDQUFBO0FBQUo7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0E7O29CQUFBO0VBR0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBRUEsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0E7Ozs7dUNBQUE7RUFNQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxPQUFBO0FBQUY7O0FBR0EsT0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBQUY7O0FBRUEsT0FBQTs7QUEyREE7O0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7QUFKRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBOzs7O3VDQUFBO0VBTUEsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsT0FBQTtBQUpGOztBQU1BOztFQUVFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsT0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBSkY7O0FBTUE7O0VBQUE7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFFQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUFKRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUZGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUFERjs7QUFHQTtFQUNFLFFBQUE7RUFDQSxXQUFBO0FBQUY7O0FBS0E7O0VBQUE7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsT0FBQTtBQURGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFJQTtFQUNDLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBREQ7O0FBR0E7RUFDQyxXQUFBO0VBQ0Esb0JBQUE7QUFBRDs7QUFJQTtFQUNJO0lBQ0YsaUJBQUE7RUFEQTtBQUNGOztBQUlBO0VBQ0k7SUFDRixZQUFBO0VBRkE7O0VBSUQ7SUFDQyxZQUFBO0VBREE7O0VBR0Q7SUFDQyxlQUFBO0VBQUE7O0VBRUQ7SUFDQyxlQUFBO0VBQ0E7O0VBQ0Q7SUFDQyxlQUFBO0VBRUE7O0VBQUQ7SUFDQyxZQUFBO0lBQ0EsZUFBQTtFQUdBOztFQUREO0lBQ0MsMEJBQUE7RUFJQTs7RUFGRDtJQUNDLGdCQUFBO0VBS0E7O0VBSEQ7SUFDQyxnQkFBQTtJQUNBLFdBQUE7RUFNQTs7RUFKRDtJQUNDLGdCQUFBO0VBT0E7O0VBTEQ7SUFDQyxXQUFBO0lBQ0EsZ0JBQUE7RUFRQTs7RUFORDtJQUNDLFdBQUE7SUFDQSxnQkFBQTtFQVNBOztFQVBEO0lBQ0MsZUFBQTtFQVVBOztFQVJEO0lBQ0MsZUFBQTtFQVdBO0FBQ0Y7O0FBUkE7RUFFQztJQUNDLFdBQUE7RUFTQTs7RUFQRDtJQUNDLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBVUE7O0VBUkQ7SUFDQyxhQUFBO0VBV0E7O0VBVEQ7SUFDQyxhQUFBO0VBWUE7O0VBVkQ7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxPQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQWFBOztFQVhEO0lBQ0MsYUFBQTtFQWNBOztFQVhEO0lBQ0MsZ0JBQUE7SUFDQSxVQUFBO0VBY0E7O0VBWkQ7SUFDQyxnQkFBQTtJQUNBLFVBQUE7RUFlQTs7RUFiRDtJQUNDLGdCQUFBO0VBZ0JBOztFQWREO0lBQ0MsV0FBQTtJQUNBLGdCQUFBO0VBaUJBOztFQWZEO0lBQ0MsVUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsNkJBQUE7RUFrQkE7O0VBaEJEO0lBQ0MsVUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQ0FBQTtJQUNBLG1DQUFBO0VBbUJBOztFQWpCRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFvQkE7O0VBbEJEO0lBQ0MsZUFBQTtFQXFCQTs7RUFuQkQ7SUFDQyxlQUFBO0VBc0JBO0FBQ0Y7O0FBbEJBO0VBQ0k7SUFDRixXQUFBO0VBb0JBOztFQWxCRDtJQUNDLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBcUJBOztFQW5CRDtJQUNDLGFBQUE7RUFzQkE7O0VBcEJEO0lBQ0MsYUFBQTtFQXVCQTs7RUFyQkQ7SUFDQyxjQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxPQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQXdCQTs7RUF0QkQ7SUFDQyxhQUFBO0VBeUJBOztFQXRCRDtJQUNDLGdCQUFBO0lBQ0EsVUFBQTtFQXlCQTs7RUF2QkQ7SUFDQyxnQkFBQTtJQUNBLFVBQUE7RUEwQkE7O0VBeEJEO0lBQ0MsZ0JBQUE7RUEyQkE7O0VBekJEO0lBQ0MsV0FBQTtJQUNBLGdCQUFBO0VBNEJBOztFQTFCRDtJQUNDLFVBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLDZCQUFBO0VBNkJBOztFQTNCRDtJQUNDLFVBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGdDQUFBO0lBQ0Esa0NBQUE7SUFDQSxtQ0FBQTtFQThCQTs7RUE1QkQ7SUFDQyxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VBK0JBOztFQTdCRDtJQUNDLGVBQUE7RUFnQ0E7O0VBOUJEO0lBQ0MsZUFBQTtFQWlDQTtBQUNGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXJ7XHJcbiAgb3ZlcmZsb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG4uc2lnbi1ndGQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgaGVpZ2h0OiA2OXB4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMTg0LCAxNzYsIDE4OSkgMCUsIHJnYigyMDgsIDIxNiwgMjEyKSA1MCUsIHJnYigxOTksIDE5NiwgMTkxKSAxMDAlKTtcclxuICBjbGlwLXBhdGg6IHVybCgjY2xpcCk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICNFRUU7XHJcblx0b3ZlcmZsb3cteDpoaWRkZW47XHJcbn1cclxuLmNsZWFyZml4OmJlZm9yZSxcclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uY2xlYXJmaXgge1xyXG4gICAgKnpvb206IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTIxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA2ODJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNDI4cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ubWNkLW1lbnUge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAvKmhlaWdodDogMTAwcHg7Ki9cclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcblxyXG4gIC8qID09ICovXHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIC8qID09ICovXHJcbn1cclxuLm1jZC1tZW51IGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLypmbG9hdDpsZWZ0OyovXHJcbn1cclxuLm1jZC1tZW51IGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U3RTdFNzsqL1xyXG5cclxuICAvKiA9PSAqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcclxuICAvKiA9PSAqL1xyXG59XHJcbi5tY2QtbWVudSBsaSBhIGkge1xyXG4gIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7Ki9cclxuXHJcbiAgLyogPT0gKi9cclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gIC8qID09ICovXHJcblxyXG59XHJcbi8qID09ICovXHJcbi5tY2QtbWVudSBsaSBhIHAge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCA7XHJcbn1cclxuLyogPT0gKi9cclxuXHJcbi5tY2QtbWVudSBsaSBhIHN0cm9uZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubWNkLW1lbnUgbGkgYSBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubWNkLW1lbnUgbGkgYSBpLCAubWNkLW1lbnUgbGkgYSBzdHJvbmcsIC5tY2QtbWVudSBsaSBhIHNtYWxsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG59XHJcbi5tY2QtbWVudSBsaTpob3ZlciA+IGEgaSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVGcm9tVG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei1hbmltYXRpb246IG1vdmVGcm9tVG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogbW92ZUZyb21Ub3AgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby1hbmltYXRpb246IG1vdmVGcm9tVG9wIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlRnJvbVRvcCAzMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG4ubWNkLW1lbnUgbGk6aG92ZXIgYSBzdHJvbmcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlRnJvbUxlZnQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92ZUZyb21MZWZ0IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLWFuaW1hdGlvbjogbW92ZUZyb21MZWZ0IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tYW5pbWF0aW9uOiBtb3ZlRnJvbUxlZnQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IG1vdmVGcm9tTGVmdCAzMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG4ubWNkLW1lbnUgbGk6aG92ZXIgYSBzbWFsbCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVGcm9tUmlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogbW92ZUZyb21SaWdodCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy1hbmltYXRpb246IG1vdmVGcm9tUmlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby1hbmltYXRpb246IG1vdmVGcm9tUmlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IG1vdmVGcm9tUmlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tY2QtbWVudSBsaTpob3ZlciA+IGEge1xyXG4gIGNvbG9yOiAjZTY3ZTIyO1xyXG59XHJcbi5tY2QtbWVudSBsaSBhLmFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZTY3ZTIyO1xyXG4gIGJvcmRlcjowO1xyXG4gIC8qYm9yZGVyLXRvcDogNHB4IHNvbGlkICNlNjdlMjI7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlNjdlMjI7XHJcbiAgbWFyZ2luLXRvcDogLTRweDsqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI0RERDtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggI0RERDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggI0RERDtcclxuXHJcbiAgLyogPT0gKi9cclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNlNjdlMjI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2U2N2UyMjtcclxuICBtYXJnaW46IDAgLTRweDtcclxuICAvKiA9PSAqL1xyXG59XHJcbi5tY2QtbWVudSBsaSBhLmFjdGl2ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qdG9wOiAwO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2U2N2UyMjtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXHJcblxyXG4gIC8qID09ICovXHJcbiAgdG9wOiA0MiU7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAvKiA9PSAqL1xyXG59XHJcblxyXG4vKiA9PSAqL1xyXG4ubWNkLW1lbnUgbGkgYS5hY3RpdmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDIlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4vKiA9PSAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVGcm9tVG9wIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVGcm9tTGVmdCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlRnJvbVJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ubWNkLW1lbnUgbGkgdWwsXHJcbi5tY2QtbWVudSBsaSB1bCBsaSB1bCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLypib3JkZXItdG9wOiA0cHggc29saWQgI2U2N2UyMjsqL1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG4gIC8qdG9wOiAxMzBweDsqL1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gIC8qID09ICovXHJcbiAgbGVmdDoyODBweDtcclxuICB0b3A6IDBweDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNlNjdlMjI7XHJcbiAgLyogPT0gKi9cclxufVxyXG4ubWNkLW1lbnUgbGkgdWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKnRvcDogLThweDtcclxuICBsZWZ0OiAyMyU7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xyXG5cclxuICAvKiA9PSAqL1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAtOXB4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAvKiA9PSAqL1xyXG59XHJcbi5tY2QtbWVudSBsaTpob3ZlciA+IHVsLFxyXG4ubWNkLW1lbnUgbGkgdWwgbGk6aG92ZXIgPiB1bCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIC8qdG9wOiAxMDBweDsqL1xyXG5cclxuICAvKiA9PSAqL1xyXG4gIGxlZnQ6MjUwcHg7XHJcbiAgLyogPT0gKi9cclxufVxyXG4vKi5tY2QtbWVudSBsaSB1bCBsaSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbn0qL1xyXG4ubWNkLW1lbnUgbGkgdWwgbGkgYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcclxuXHJcbiAgLyogPT0gKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogPT0gKi9cclxufVxyXG4ubWNkLW1lbnUgbGkgdWwgbGkgYSBpIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcclxufVxyXG4ubWNkLW1lbnUgbGkgdWwgbGkgdWwge1xyXG4gIGxlZnQ6IDIzMHB4O1xyXG4gIHRvcDogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZTY3ZTIyO1xyXG59XHJcbi5tY2QtbWVudSBsaSB1bCBsaSB1bDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICAvKmxlZnQ6IC0xNHB4OyovXHJcbiAgLyogPT0gKi9cclxuICBsZWZ0OiAtOXB4O1xyXG4gIC8qID09ICovXHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2U2N2UyMjtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5tY2QtbWVudSBsaSB1bCBsaTpob3ZlciA+IHVsIHtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAyMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKi5tY2QtbWVudSBsaS5mbG9hdCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59Ki9cclxuLm1jZC1tZW51IGxpIGEuc2VhcmNoIHtcclxuICAvKnBhZGRpbmc6IDI5cHggMjBweCAzMHB4IDEwcHg7Ki9cclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAxMHB4O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5tY2QtbWVudSBsaSBhLnNlYXJjaCBpIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubWNkLW1lbnUgbGkgYS5zZWFyY2ggaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRUU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICM3Nzc7XHJcblxyXG4gIC8qID09ICovXHJcbiAgd2lkdGg6MTcwcHg7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICAvKiA9PSAqL1xyXG59XHJcbi5tY2QtbWVudSBsaSBhLnNlYXJjaCBidXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNjdlMjI7XHJcbiAgLypwYWRkaW5nOiAxMHB4OyovXHJcbiAgYmFja2dyb3VuZDogI2U2N2UyMjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG5cclxuICAvKiA9PSAqL1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDExcHggMTBweDtcclxuICAvKiA9PSAqL1xyXG59XHJcbi5tY2QtbWVudSBsaSBhLnNlYXJjaCBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2N2UyMjtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtbW9iaWxlIHtcclxuXHRkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiNlNjdlMjI7XHJcblx0Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNlNjdlMjI7XHJcblx0Ym9yZGVyLXJhZGl1czowIDNweCAzcHggMDtcclxufVxyXG4uc2VhcmNoLW1vYmlsZSBpIHtcclxuXHRjb2xvcjojRkZGO1xyXG5cdG1hcmdpbjowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAubWNkLW1lbnUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgLm1jZC1tZW51IHtcclxuXHRcdHdpZHRoOiAyMDBweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIGEge1xyXG5cdFx0aGVpZ2h0OjMwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSBhIGkge1xyXG5cdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgYSBzdHJvbmcge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgYSBzbWFsbCB7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSBhLnNlYXJjaCBpbnB1dCB7XHJcblx0XHR3aWR0aDogMTIwcHg7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSBhLnNlYXJjaCBidXRvbntcclxuXHRcdHBhZGRpbmc6IDhweCAxMHB4IDlweCAxMHB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgPiB1bCB7XHJcblx0XHRtaW4td2lkdGg6MTgwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaTpob3ZlciA+IHVsIHtcclxuXHRcdG1pbi13aWR0aDoxODBweDtcclxuXHRcdGxlZnQ6MjAwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaSA+IHVsLCAubWNkLW1lbnUgbGkgdWwgbGkgdWwgbGkgPiB1bCB7XHJcblx0XHRtaW4td2lkdGg6MTUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaTpob3ZlciA+IHVsIHtcclxuXHRcdGxlZnQ6MTgwcHg7XHJcblx0XHRtaW4td2lkdGg6MTUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaSB1bCBsaTpob3ZlciA+IHVsIHtcclxuXHRcdGxlZnQ6MTUwcHg7XHJcblx0XHRtaW4td2lkdGg6MTUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBhIHtcclxuXHRcdGZvbnQtc2l6ZToxMnB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgdWwgYSBpIHtcclxuXHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG5cdC5tY2QtbWVudSB7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIGEge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZzogMTJweCAxNnB4O1xyXG5cdFx0aGVpZ2h0OjIwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSBhIHNtYWxsIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSBhIHN0cm9uZyB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgYTpob3ZlciBzdHJvbmcsLm1jZC1tZW51IGxpIGEuYWN0aXZlIHN0cm9uZyB7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOjEwcHg7XHJcblx0XHRwYWRkaW5nOjNweCAwO1xyXG5cdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRib3R0b206MHB4O1xyXG5cdFx0bGVmdDowO1xyXG5cdFx0YmFja2dyb3VuZDojZTY3ZTIyO1xyXG5cdFx0Y29sb3I6I0ZGRjtcclxuXHRcdG1pbi13aWR0aDoxMDAlO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSAuc2VhcmNoIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubWNkLW1lbnUgbGkgPiB1bCB7XHJcblx0XHRtaW4td2lkdGg6MTgwcHg7XHJcblx0XHRsZWZ0OjcwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaTpob3ZlciA+IHVsIHtcclxuXHRcdG1pbi13aWR0aDoxODBweDtcclxuXHRcdGxlZnQ6NTBweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGxpID4gdWwsIC5tY2QtbWVudSBsaSB1bCBsaSB1bCBsaSA+IHVsIHtcclxuXHRcdG1pbi13aWR0aDoxNTBweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGxpOmhvdmVyID4gdWwge1xyXG5cdFx0bGVmdDoxODBweDtcclxuXHRcdG1pbi13aWR0aDoxNTBweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGxpIHVsIGxpID4gdWwge1xyXG5cdFx0bGVmdDozNXB4O1xyXG5cdFx0dG9wOiA0NXB4O1xyXG5cdFx0Ym9yZGVyOjA7XHJcblx0XHRib3JkZXItdG9wOjRweCBzb2xpZCAjZTY3ZTIyO1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgdWwgbGkgdWwgbGkgPiB1bDpiZWZvcmUge1xyXG5cdFx0bGVmdDozMHB4O1xyXG5cdFx0dG9wOiAtOXB4O1xyXG5cdFx0Ym9yZGVyOjA7XHJcblx0XHRib3JkZXItYm90dG9tOjVweCBzb2xpZCAjZTY3ZTIyO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGxpIHVsIGxpOmhvdmVyID4gdWwge1xyXG5cdFx0bGVmdDozMHB4O1xyXG5cdFx0bWluLXdpZHRoOjE1MHB4O1xyXG5cdFx0dG9wOiAzNXB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgdWwgYSB7XHJcblx0XHRmb250LXNpemU6MTJweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGEgaSB7XHJcblx0XHRmb250LXNpemU6MTRweDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcbiAgICAubWNkLW1lbnUge1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSBhIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDEycHggMTZweDtcclxuXHRcdGhlaWdodDoyMHB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgYSBzbWFsbCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgYSBzdHJvbmcge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIGE6aG92ZXIgc3Ryb25nLC5tY2QtbWVudSBsaSBhLmFjdGl2ZSBzdHJvbmcge1xyXG5cdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdGZvbnQtc2l6ZToxMHB4O1xyXG5cdFx0cGFkZGluZzozcHggMDtcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0Ym90dG9tOjBweDtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdGJhY2tncm91bmQ6I2U2N2UyMjtcclxuXHRcdGNvbG9yOiNGRkY7XHJcblx0XHRtaW4td2lkdGg6MTAwJTtcclxuXHRcdHRleHQtdHJhbnNmb3JtOmxvd2VyY2FzZTtcclxuXHRcdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGkgLnNlYXJjaCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0Lm1jZC1tZW51IGxpID4gdWwge1xyXG5cdFx0bWluLXdpZHRoOjE4MHB4O1xyXG5cdFx0bGVmdDo3MHB4O1xyXG5cdH1cclxuXHQubWNkLW1lbnUgbGk6aG92ZXIgPiB1bCB7XHJcblx0XHRtaW4td2lkdGg6MTgwcHg7XHJcblx0XHRsZWZ0OjUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaSA+IHVsLCAubWNkLW1lbnUgbGkgdWwgbGkgdWwgbGkgPiB1bCB7XHJcblx0XHRtaW4td2lkdGg6MTUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaTpob3ZlciA+IHVsIHtcclxuXHRcdGxlZnQ6MTgwcHg7XHJcblx0XHRtaW4td2lkdGg6MTUwcHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaSB1bCBsaSA+IHVsIHtcclxuXHRcdGxlZnQ6MzVweDtcclxuXHRcdHRvcDogNDVweDtcclxuXHRcdGJvcmRlcjowO1xyXG5cdFx0Ym9yZGVyLXRvcDo0cHggc29saWQgI2U2N2UyMjtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGxpIHVsIGxpID4gdWw6YmVmb3JlIHtcclxuXHRcdGxlZnQ6MzBweDtcclxuXHRcdHRvcDogLTlweDtcclxuXHRcdGJvcmRlcjowO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTo1cHggc29saWQgI2U2N2UyMjtcclxuXHRcdGJvcmRlci1sZWZ0OjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRcdGJvcmRlci1yaWdodDo1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBsaSB1bCBsaTpob3ZlciA+IHVsIHtcclxuXHRcdGxlZnQ6MzBweDtcclxuXHRcdG1pbi13aWR0aDoxNTBweDtcclxuXHRcdHRvcDogMzVweDtcclxuXHR9XHJcblx0Lm1jZC1tZW51IGxpIHVsIGEge1xyXG5cdFx0Zm9udC1zaXplOjEycHg7XHJcblx0fVxyXG5cdC5tY2QtbWVudSBsaSB1bCBhIGkge1xyXG5cdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0fVxyXG5cclxufVxyXG4iXX0= */", ""], data: { animation: _animations_form_animation__WEBPACK_IMPORTED_MODULE_0__.animationsForm4 } });


/***/ }),

/***/ 48561:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/layouts/full/sidebar/sidemenu.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSideMenuComponent": () => (/* binding */ AppSideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _animations_form_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations/form-animation */ 27150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 42243);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../srv/app-state.service */ 55419);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../srv/navigation.service */ 12358);







const _c0 = ["snav"];
class AppSideMenuComponent {
    constructor(changeDetectorRef, media, menuItemsSrv, stateSrv, navSrv) {
        this.menuItemsSrv = menuItemsSrv;
        this.stateSrv = stateSrv;
        this.navSrv = navSrv;
        this.tiles = [
            { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 3, rows: 1, color: '#DDBDF1' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            // {text: 'Four', cols: 4, rows: 4, color: 'lightgreen'},
        ];
        this.state = "open";
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({ menuItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl() });
        this.form.valueChanges.subscribe((filter) => {
            this.menuItemsSrv.filter(filter === null || filter === void 0 ? void 0 : filter.menuItem);
        });
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    get themeState$() {
        return this.stateSrv.themeState$;
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
    changeState() {
        (this.state == "closed") ? this.state = "open" : this.state = "closed";
    }
}
AppSideMenuComponent.ɵfac = function AppSideMenuComponent_Factory(t) { return new (t || AppSideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__.AppStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService)); };
AppSideMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppSideMenuComponent, selectors: [["app-sidemenu"]], viewQuery: function AppSideMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 155, vars: 0, consts: [[1, "app"], [1, "sidebar"], [1, "sidebar-nav"], ["href", "#"], [1, "ion-bag"], [1, "nav-flyout"], [1, "ion-ios-color-filter-outline"], [1, "ion-ios-clock-outline"], [1, "ion-android-star-outline"], [1, "ion-heart-broken"], [1, "ion-ios-settings"], [1, ""], [1, "ion-ios-alarm-outline"], [1, "ion-ios-camera-outline"], [1, "ion-ios-chatboxes-outline"], [1, "ion-ios-cog-outline"], [1, "ion-ios-briefcase-outline"], [1, "ion-ios-flame-outline"], [1, "ion-ios-lightbulb-outline"], [1, "ion-ios-location-outline"], [1, "ion-ios-locked-outline"], [1, "ion-ios-navigate-outline"], [1, "ion-ios-analytics-outline"], [1, "ion-ios-timer-outline"], [1, "ion-arrow-graph-down-left"], [1, "ion-ios-partlysunny-outline"], [1, "ion-ios-game-controller-a-outline"], [1, "ion-ios-paper-outline"], [1, "ion-ios-filing-outline"], [1, "ion-ios-information-outline"], [1, "ion-ios-paperplane-outline"], [1, "ion-ios-medical-outline"]], template: function AppSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Derps");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Times");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Hates");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Beat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Creeper");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Hate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Grinder");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Folio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Burn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Bulbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Where You");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "On Lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Ghostface");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Graphicals");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Timers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "You Lose");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Stormy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Lookie Look");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "Dork Mfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "File Cab");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](118, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Planes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](122, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](126, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Ass Finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Burn");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Bulbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "Where You");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "On Lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "Ghostface");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](152, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Cocaine");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600);\nbody[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 100%;\n  overflow-y: scroll;\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  background-color: #fefefe;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  transition: all 0.6s ease;\n}\na[_ngcontent-%COMP%]:hover {\n  transition: all 0.6s ease;\n}\n.app[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 17em;\n  height: 100%;\n  top: 0;\n  overflow: hidden;\n  background-color: #19222a;\n  -webkit-transform: translateZ(0);\n  visibility: visible;\n  -webkit-backface-visibility: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  background-color: #09f;\n  width: 100%;\n  display: block;\n  padding: 0.75em 1em;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #19222a;\n  height: 100%;\n  font-weight: 400;\n  font-size: 1.2em;\n  overflow: auto;\n  padding-bottom: 6em;\n  z-index: 9;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  \n  \n  \n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  display: inline-block;\n  width: 100%;\n  \n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.75em;\n  padding: 1.05em 1em;\n  position: relative;\n  display: block;\n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.9);\n  transition: all 0.6s ease;\n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  padding-right: 0.5em;\n  width: 9em;\n  display: inline;\n  vertical-align: middle;\n}\n.sidebar-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  content: \"\uF125\";\n  font-family: ionicons;\n  font-size: 0.5em;\n  width: 10px;\n  color: #fff;\n  position: absolute;\n  right: 0.75em;\n  top: 45%;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-flyout[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #080D11;\n  z-index: 9;\n  left: 2.5em;\n  top: 0;\n  height: 100vh;\n  transform: translateX(100%);\n  transition: all 0.5s ease;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-flyout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   .nav-flyout[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNSLGdGQUFBO0FBVVI7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDRCxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNDLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQVJGO0FBVUE7RUFDRSxxQkFBQTtFQWpCQSx5QkFrQkE7QUFKRjtBQU1FO0VBcEJBLHlCQXFCRztBQURMO0FBS0E7RUFDRSxhQUFBO0FBRkY7QUFJQTs7aUJBQUE7QUFHQTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQUZGO0FBSUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQU1BOztpQkFBQTtBQUdBO0VBQ0UsZUFBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQXlDRjs7bUJBQUE7RUFhQTs7bUJBQUE7RUFrQkE7O21CQUFBO0FBbkVBO0FBRkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUlKO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0VBQ0EsV0FBQTtFQWNOOzttQkFBQTtBQVJBO0FBSk07RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFNUjtBQUpRO0VBQ0Usb0NBQUE7RUF6RlIseUJBMEZRO0FBU1Y7QUFITTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBS1I7QUFHRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBREo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBdElGLDJCQUFBO0VBTUEseUJBa0lFO0FBREo7QUFHSTtFQUNFLDJDQUFBO0FBRE47QUFTTTtFQW5KSix3QkFBQTtFQU1BLHlCQStJTTtBQUpSIiwiZmlsZSI6InNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybzo0MDAsMzAwLDYwMCk7XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbmE6aG92ZXIge1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cblxuLmFwcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS1cblNpZGViYXJcbi0tLS0tLS0tLS0tLS0tLS0qL1xuLnNpZGViYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxN2VtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjIyYTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNpZGViYXIgaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5ZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1ZW0gMWVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tXG5TaWRlYmFyIE5hdlxuLS0tLS0tLS0tLS0tLS0tLSovXG4uc2lkZWJhci1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTIyMmE7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA2ZW07XG4gIHotaW5kZXg6IDk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLyogLS0tLS0tLS0tLS0tLVxuICBDaGV2IGVsZW1lbnRzXG4gIC0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKiAtLS0tLS0tLS0tLS0tXG4gIE5hdi1GbHlvdXRcbiAgLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIC0tLS0tLS0tLS0tLS1cbiAgSG92ZXJcbiAgLS0tLS0tLS0tLS0tLS0tLSovXG59XG4uc2lkZWJhci1uYXYgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnNpZGViYXItbmF2IHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgLyogLS0tLS0tLS0tLS0tLVxuICBTaWRlYmFyOiBpY29uc1xuICAtLS0tLS0tLS0tLS0tLS0tKi9cbn1cbi5zaWRlYmFyLW5hdiB1bCBsaSBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHBhZGRpbmc6IDEuMDVlbSAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZWJhci1uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG59XG4uc2lkZWJhci1uYXYgdWwgbGkgaSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogOWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc2lkZWJhci1uYXYgPiB1bCA+IGxpID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74SlXCI7XG4gIGZvbnQtZmFtaWx5OiBpb25pY29ucztcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgd2lkdGg6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjc1ZW07XG4gIHRvcDogNDUlO1xufVxuLnNpZGViYXItbmF2IC5uYXYtZmx5b3V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwRDExO1xuICB6LWluZGV4OiA5O1xuICBsZWZ0OiAyLjVlbTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnNpZGViYXItbmF2IC5uYXYtZmx5b3V0IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuLnNpZGViYXItbmF2IHVsID4gbGk6aG92ZXIgLm5hdi1mbHlvdXQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufSJdfQ== */", ""], data: { animation: _animations_form_animation__WEBPACK_IMPORTED_MODULE_0__.animationsForm4 } });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);






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
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarRow], styles: [".no-shadow[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.example-fill-remaining-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: var(--app-bar) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBR0UsY0FBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UscUNBQUE7QUFFRiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNoYWRvdyBtYXQtdG9vbGJhcntcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8vIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAvLyBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LlxyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYXIpIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 80782:
/*!****************************************************************!*\
  !*** ./projects/docs/src/app/security/login-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInFormComponent": () => (/* binding */ LogInFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../srv/in-mem-service */ 46556);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../srv/navigation.service */ 12358);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);









const _c0 = ["formView"];
function LogInFormComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " numero de documento es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LogInFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LogInFormComponent_div_12_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.nombreUsuario.errors == null ? null : ctx_r0.f.nombreUsuario.errors.required);
} }
function LogInFormComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " nombre es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LogInFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LogInFormComponent_div_15_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.contrasena.errors == null ? null : ctx_r1.f.contrasena.errors.required);
} }
class LogInFormComponent {
    constructor(inMemSrv, builder, navSrv) {
        this.inMemSrv = inMemSrv;
        this.builder = builder;
        this.navSrv = navSrv;
        this.position = 'below';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            nombreUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            contrasena: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.step = 0;
    }
    onNoClick() {
        this.form.reset();
    }
    save() {
        this.navSrv.navigate('/nómina', this.form.value);
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    get f() {
        return this.form.controls;
    }
}
LogInFormComponent.ɵfac = function LogInFormComponent_Factory(t) { return new (t || LogInFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_srv_in_mem_service__WEBPACK_IMPORTED_MODULE_0__.InMemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
LogInFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LogInFormComponent, selectors: [["app-login-form"]], viewQuery: function LogInFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.formView = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "wrapper", "wrapper-full-page"], ["filter-color", "black", 1, "page-header", "login-page", "header-filter", 2, "background-image", "url('../../assets/images/login.jpg')", "background-size", "cover", "background-position", "top center"], [1, "container"], [1, "row", "justify-content-center"], [3, "formGroup"], [1, "card", "mat-card"], [1, "mat-card-header", "card-header-primary"], [1, "text-center", "card-title"], [1, "card-body"], ["matInput", "", "tabindex", "1", "formControlName", "nombreUsuario", "placeholder", "Nombre de usuario", "id", "nombreUsuario", "type", "text", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "tabindex", "1", "formControlName", "contrasena", "placeholder", "Clave", "id", "contrasena", "type", "password", 1, "form-control"], ["mat-button", "", "tabindex", "-1", "color", "accent", 3, "click"], ["mat-button", "", "tabindex", "3", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function LogInFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00A1Bienvenido a N\u00F3mina Electr\u00F3nica! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LogInFormComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LogInFormComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LogInFormComponent_Template_button_click_16_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LogInFormComponent_Template_button_click_18_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.nombreUsuario.touched && ctx.f.nombreUsuario.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.contrasena.touched && ctx.f.contrasena.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  top: 23vh;\n}\n\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .mat-card[_ngcontent-%COMP%] {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    background-color: rgba(255, 255, 255, 0.5) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSxxREFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkLWNvbnRhY3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgb3BhY2l0eTogLjk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgdG9wOiAyM3ZoO1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XHJcbiAgLm1hdC1jYXJkIHtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 75002:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/accordion.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




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

/***/ 16671:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/accordionanchor.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 42457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



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

/***/ 42457:
/*!***************************************************************************!*\
  !*** ./projects/docs/src/app/shared/accordion/accordionlink.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": () => (/* binding */ AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 75002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



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

/***/ 64665:
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
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 16671);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 42457);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 75002);





/***/ }),

/***/ 14289:
/*!*********************************************************************************!*\
  !*** ./projects/docs/src/app/shared/dialog/confirm/confirm-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



function ConfirmDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);
} }
class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.position = 'below';
        this.titulo = 'Confirmar';
        this.pregunta = '¿Confirma?';
        this.titulo = data === null || data === void 0 ? void 0 : data.titulo;
        this.pregunta = data === null || data === void 0 ? void 0 : data.pregunta;
    }
    onNoClick() {
        this.dialogRef.close(false);
    }
    save() {
        this.dialogRef.close(true);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 11, vars: 2, consts: [["mat-dialog-title", "", "cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", "cdkDragHandle", "", 1, "m-0", "d-flex", "main-container", "main-form", 2, "overflow", "visible"], [1, "m-0", "mat-card", "card"], ["class", "card-header", 4, "ngIf"], ["mat-dialog-content", "", 1, "card-body", "flex-row"], [1, "card-title", "text-center"], ["mat-dialog-actions", "", 1, "flex-row", "m-2"], ["mat-button", "", "type", "button", "tabindex", "-1", 1, "mat-button", "col-4", 3, "click"], ["mat-button", "", "type", "button", "tabindex", "5", 1, "mat-button", "col-md-6", 3, "click"], [1, "card-header"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmDialogComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Si!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pregunta);
    } }, encapsulation: 2 });


/***/ }),

/***/ 42243:
/*!***************************************************************!*\
  !*** ./projects/docs/src/app/shared/menu-items/menu-items.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENUITEMS": () => (/* binding */ MENUITEMS),
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


const MENUITEMS = [
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
                    var _a, _b;
                    return ((_a = item.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(filter === null || filter === void 0 ? void 0 : filter.toLocaleLowerCase())) ||
                        ((_b = item.menuItems) === null || _b === void 0 ? void 0 : _b.filter((child) => {
                            var _a;
                            return (_a = child.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(filter === null || filter === void 0 ? void 0 : filter.toLocaleLowerCase());
                        }));
                }),
            });
        }
        else {
            this.menuState$.next({ menuItems: MENUITEMS });
        }
    }
    codePoint(emojiCodePoint) {
        return String.fromCodePoint(...emojiCodePoint.split('-').map((i) => parseInt(i, 16)));
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ 45175:
/*!*******************************************************!*\
  !*** ./projects/docs/src/app/shared/shared.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _dashboard_dashboard_components_pivot_table_pivot_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard-components/pivot-table/pivot-table.component */ 63716);
/* harmony import */ var _guards_dirty_check_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/dirty-check.guard */ 60183);
/* harmony import */ var _guards_gtd_input_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/gtd-input.formatter */ 27863);
/* harmony import */ var _guards_gtd_text_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/gtd-text.formatter */ 77590);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion */ 64665);
/* harmony import */ var _dialog_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/confirm/confirm-dialog.component */ 14289);
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-items/menu-items */ 42243);
/* harmony import */ var _unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unicode-emoji.pipe */ 87919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);










class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _guards_dirty_check_guard__WEBPACK_IMPORTED_MODULE_1__.DirtyCheckGuard,
        _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_6__.MenuItems,
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef,
            useValue: {},
        },
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA,
            useValue: {}, // Add any data you wish to test if it is passed/used correctly
        },
        // { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionDirective,
        _unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_7__.DecodeEmojiPipe,
        _dialog_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent,
        _guards_gtd_input_formatter__WEBPACK_IMPORTED_MODULE_2__.GtdInputFormatterDirective,
        _guards_gtd_text_formatter__WEBPACK_IMPORTED_MODULE_3__.GtdTextFormatterDirective,
        _dashboard_dashboard_components_pivot_table_pivot_table_component__WEBPACK_IMPORTED_MODULE_0__.WebdatarocksComponent], exports: [_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionDirective,
        _unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_7__.DecodeEmojiPipe,
        _dialog_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent,
        _guards_gtd_input_formatter__WEBPACK_IMPORTED_MODULE_2__.GtdInputFormatterDirective,
        _guards_gtd_text_formatter__WEBPACK_IMPORTED_MODULE_3__.GtdTextFormatterDirective,
        _dashboard_dashboard_components_pivot_table_pivot_table_component__WEBPACK_IMPORTED_MODULE_0__.WebdatarocksComponent] }); })();


/***/ }),

/***/ 16817:
/*!***********************************************************!*\
  !*** ./projects/docs/src/app/shared/spinner.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);





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
        this.isSpinnerVisible = false;
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
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], ["color", "accent", 1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 87919:
/*!************************************************************!*\
  !*** ./projects/docs/src/app/shared/unicode-emoji.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeEmojiPipe": () => (/* binding */ DecodeEmojiPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DecodeEmojiPipe {
    transform(emojiCodePoint, exponent = 1) {
        return String.fromCodePoint(...emojiCodePoint.split('-').map((i) => parseInt(i, 16)));
    }
}
DecodeEmojiPipe.ɵfac = function DecodeEmojiPipe_Factory(t) { return new (t || DecodeEmojiPipe)(); };
DecodeEmojiPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gtdEmoji", type: DecodeEmojiPipe, pure: true });


/***/ }),

/***/ 55419:
/*!********************************************************!*\
  !*** ./projects/docs/src/app/srv/app-state.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStateService": () => (/* binding */ AppStateService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 55906);
/* harmony import */ var _values_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values-catalog */ 87176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _style_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-manager.service */ 90273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);








class AppStateService {
    constructor(breakpointObserver, styleManager, _snackBar) {
        this.styleManager = styleManager;
        this._snackBar = _snackBar;
        this.themes = _values_catalog__WEBPACK_IMPORTED_MODULE_1__.THEMES_OPTIONS;
        this.themeState$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
            uiPalette: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin,
            visibleMenu: false,
            fullScreen: false,
            loading: false,
        });
        this.toggleLoading = () => this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { loading: !this.themeState$.value.loading }));
        this.message = (message, state) => {
            var _a, _b;
            this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { messages: [
                    {
                        id: ((_a = this.themeState$.value.messages) === null || _a === void 0 ? void 0 : _a.length) + 1,
                        code: state.tipo,
                        name: `${message}: ${state.accion}`,
                    },
                    ...((_b = this.themeState$.value.messages) !== null && _b !== void 0 ? _b : []),
                ] }));
            this._snackBar.open(`${message}: ${state.accion}`, state.tipo, {
                duration: 50000,
            });
        };
        this.notificate = (message, ico) => {
            var _a, _b;
            return this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { notifications: [
                    {
                        id: ((_a = this.themeState$.value.notifications) === null || _a === void 0 ? void 0 : _a.length) + 1,
                        code: ico,
                        name: message,
                    },
                    ...((_b = this.themeState$.value.notifications) !== null && _b !== void 0 ? _b : []),
                ] }));
        };
        this.setTextos = (textos) => this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { textos: textos }));
        this.agregarCatalogo = (catalogo) => {
            var _a;
            return this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { catalogos: Object.assign(Object.assign({}, ((_a = this.themeState$.value.catalogos) !== null && _a !== void 0 ? _a : {})), catalogo) }));
        };
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large,
        ])
            .subscribe({
            next: (state) => {
                var _a, _b, _c;
                return (_a = this.themeState$) === null || _a === void 0 ? void 0 : _a.next(Object.assign(Object.assign({}, this.themeState$.value), { uiPalette: (_c = (_b = this.themeState$) === null || _b === void 0 ? void 0 : _b.value.uiPalette) !== null && _c !== void 0 ? _c : _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin, XSmall: state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.XSmall], Small: state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Small], Medium: state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Medium], Large: state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Large] }));
            },
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
    toggleMenu() {
        this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { visibleMenu: !this.themeState$.value.visibleMenu }));
    }
    toggleFullScreen(nativeElement) {
        if (!this.themeState$.value.fullScreen) {
            this.openFullscreen(nativeElement);
        }
        else {
            this.closeFullscreen(nativeElement);
        }
    }
    openFullscreen(documentElement) {
        this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { fullScreen: true }));
    }
    closeFullscreen(document) {
        this.themeState$.next(Object.assign(Object.assign({}, this.themeState$.value), { fullScreen: false }));
    }
    get textos() {
        return this.themeState$.value.textos;
    }
}
AppStateService.ɵfac = function AppStateService_Factory(t) { return new (t || AppStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_style_manager_service__WEBPACK_IMPORTED_MODULE_2__.StyleManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
AppStateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AppStateService, factory: AppStateService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 65792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



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

/***/ 46556:
/*!*****************************************************!*\
  !*** ./projects/docs/src/app/srv/in-mem-service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemService": () => (/* binding */ InMemService)
/* harmony export */ });
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ 95233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _values_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values-catalog */ 87176);
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

/***/ 12358:
/*!*********************************************************!*\
  !*** ./projects/docs/src/app/srv/navigation.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);






class NavigationService {
    constructor(router, location, route, _snackBar) {
        this.router = router;
        this.location = location;
        this.route = route;
        this._snackBar = _snackBar;
        this.subscriptions = [];
        this.history = [];
        this.routeState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
            states: [],
        });
        this.navigation = (loading) => {
            this.routeState$.next(Object.assign(Object.assign({}, this.routeState$.value), { loading: loading }));
        };
        this.subscriptions.push(location.subscribe((v) => {
            console.log(v);
        }), this.routeState$.subscribe(), this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.navigationInterceptor(event);
                this.history.push(event.urlAfterRedirects);
                _snackBar.dismiss();
            }
        }));
    }
    onBrowserBackBtnClose(event) {
        console.log('⏮ back button pressed');
        event.preventDefault();
        this.router.navigate(['/dashboard'], { replaceUrl: true });
    }
    get previous() {
        return [this.history[this.history.length - 1]];
    }
    ngOnDestroy() {
        throw new Error('Method not implemented.');
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
            console.log(`👾 app-> event: NavigationStart`);
            this.navigation(10);
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
            console.log(`👾 app-> event: NavigationEnd`);
            this.navigation();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel) {
            console.log(`👾 app-> event: NavigationCancel`);
            this.navigation();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
            console.log(`👾 app-> event: NavigationError`);
            this.navigation();
        }
    }
    navigate(route, data, localRoute) {
        this.routeState$.next(Object.assign(Object.assign({}, this.routeState$.value), { states: [...this.routeState$.value.states, { route, data }] }));
        this.location.go(route);
        this.router.navigate([route, { data: data }], {
            skipLocationChange: true,
            relativeTo: localRoute !== null && localRoute !== void 0 ? localRoute : this.route,
        });
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76653:
/*!*********************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/api.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiModule": () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 14073);
/* harmony import */ var _rest_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest/api */ 43560);
/* harmony import */ var _rest_payrolls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest/payrolls.service */ 10315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);





class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('Error importing HttpClientModule');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration, useFactory: configurationFactory }],
        };
    }
}
ApiModule.ɵfac = function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient, 8)); };
ApiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_rest_api__WEBPACK_IMPORTED_MODULE_1__.StoredProcedureService, _rest_payrolls_service__WEBPACK_IMPORTED_MODULE_2__.PayrollsService], imports: [[]] });


/***/ }),

/***/ 14073:
/*!************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/configuration.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
        this.encoder = configurationParameters.encoder;
        if (configurationParameters.credentials) {
            this.credentials = configurationParameters.credentials;
        }
        else {
            this.credentials = {};
        }
        // init default apiKey credential
        if (!this.credentials['apiKey']) {
            this.credentials['apiKey'] = () => {
                if (this.apiKeys === null || this.apiKeys === undefined) {
                    return undefined;
                }
                else {
                    return this.apiKeys['apiKey'] || this.apiKeys['Authorization'];
                }
            };
        }
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        const type = contentTypes.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        const type = accepts.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
    lookupCredential(key) {
        const value = this.credentials[key];
        return typeof value === 'function'
            ? value()
            : value;
    }
}


/***/ }),

/***/ 3574:
/*!******************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/encoder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomHttpParameterCodec": () => (/* binding */ CustomHttpParameterCodec)
/* harmony export */ });
/**
 * Custom HttpParameterCodec
 * Workaround for https://github.com/angular/angular/issues/18261
 */
class CustomHttpParameterCodec {
    encodeKey(k) {
        return encodeURIComponent(k);
    }
    encodeValue(v) {
        return encodeURIComponent(v);
    }
    decodeKey(k) {
        return decodeURIComponent(k);
    }
    decodeValue(v) {
        return decodeURIComponent(v);
    }
}


/***/ }),

/***/ 22459:
/*!*********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/anticipos.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnticiposService": () => (/* binding */ AnticiposService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class AnticiposService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE37(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE37.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/anticipos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET37(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET37.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/anticipos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDeduccionesUsingGET4(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllDeduccionesUsingGET4.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/anticipos/list/deducciones/${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET14(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET14.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/anticipos/list/devengados/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST37(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST37.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/anticipos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT37(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT37.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/anticipos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
AnticiposService.ɵfac = function AnticiposService_Factory(t) { return new (t || AnticiposService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
AnticiposService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AnticiposService, factory: AnticiposService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63698:
/*!******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/anticipos.serviceInterface.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 43560:
/*!*******************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/api.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnticiposService": () => (/* reexport safe */ _anticipos_service__WEBPACK_IMPORTED_MODULE_0__.AnticiposService),
/* harmony export */   "AuxiliosService": () => (/* reexport safe */ _auxilios_service__WEBPACK_IMPORTED_MODULE_2__.AuxiliosService),
/* harmony export */   "BasicosService": () => (/* reexport safe */ _basicos_service__WEBPACK_IMPORTED_MODULE_4__.BasicosService),
/* harmony export */   "BonificacionesService": () => (/* reexport safe */ _bonificaciones_service__WEBPACK_IMPORTED_MODULE_6__.BonificacionesService),
/* harmony export */   "BonosEPCTVService": () => (/* reexport safe */ _bonosEPCTV_service__WEBPACK_IMPORTED_MODULE_8__.BonosEPCTVService),
/* harmony export */   "CesantiasService": () => (/* reexport safe */ _cesantias_service__WEBPACK_IMPORTED_MODULE_10__.CesantiasService),
/* harmony export */   "ComisionesService": () => (/* reexport safe */ _comisiones_service__WEBPACK_IMPORTED_MODULE_12__.ComisionesService),
/* harmony export */   "CompensacionesService": () => (/* reexport safe */ _compensaciones_service__WEBPACK_IMPORTED_MODULE_14__.CompensacionesService),
/* harmony export */   "DeduccionesService": () => (/* reexport safe */ _deducciones_service__WEBPACK_IMPORTED_MODULE_16__.DeduccionesService),
/* harmony export */   "DevengadosService": () => (/* reexport safe */ _devengados_service__WEBPACK_IMPORTED_MODULE_18__.DevengadosService),
/* harmony export */   "EmpleadoresService": () => (/* reexport safe */ _empleadores_service__WEBPACK_IMPORTED_MODULE_20__.EmpleadoresService),
/* harmony export */   "FechasPagosService": () => (/* reexport safe */ _fechasPagos_service__WEBPACK_IMPORTED_MODULE_22__.FechasPagosService),
/* harmony export */   "FondosSPService": () => (/* reexport safe */ _fondosSP_service__WEBPACK_IMPORTED_MODULE_24__.FondosSPService),
/* harmony export */   "HorariosAdicionalesService": () => (/* reexport safe */ _horariosAdicionales_service__WEBPACK_IMPORTED_MODULE_26__.HorariosAdicionalesService),
/* harmony export */   "HuelgasLegalesService": () => (/* reexport safe */ _huelgasLegales_service__WEBPACK_IMPORTED_MODULE_28__.HuelgasLegalesService),
/* harmony export */   "IncapacidadesService": () => (/* reexport safe */ _incapacidades_service__WEBPACK_IMPORTED_MODULE_30__.IncapacidadesService),
/* harmony export */   "InformacionesGeneralesService": () => (/* reexport safe */ _informacionesGenerales_service__WEBPACK_IMPORTED_MODULE_32__.InformacionesGeneralesService),
/* harmony export */   "LibranzasService": () => (/* reexport safe */ _libranzas_service__WEBPACK_IMPORTED_MODULE_34__.LibranzasService),
/* harmony export */   "LicenciasService": () => (/* reexport safe */ _licencias_service__WEBPACK_IMPORTED_MODULE_36__.LicenciasService),
/* harmony export */   "LugaresGeneracionXMLService": () => (/* reexport safe */ _lugaresGeneracionXML_service__WEBPACK_IMPORTED_MODULE_38__.LugaresGeneracionXMLService),
/* harmony export */   "NominasGeneralesService": () => (/* reexport safe */ _nominasGenerales_service__WEBPACK_IMPORTED_MODULE_40__.NominasGeneralesService),
/* harmony export */   "NominasIndividualesService": () => (/* reexport safe */ _nominasIndividuales_service__WEBPACK_IMPORTED_MODULE_42__.NominasIndividualesService),
/* harmony export */   "NotasService": () => (/* reexport safe */ _notas_service__WEBPACK_IMPORTED_MODULE_44__.NotasService),
/* harmony export */   "NumerosSecuenciaXMLService": () => (/* reexport safe */ _numerosSecuenciaXML_service__WEBPACK_IMPORTED_MODULE_46__.NumerosSecuenciaXMLService),
/* harmony export */   "OtrasDeduccionesService": () => (/* reexport safe */ _otrasDeducciones_service__WEBPACK_IMPORTED_MODULE_48__.OtrasDeduccionesService),
/* harmony export */   "OtrosConceptosService": () => (/* reexport safe */ _otrosConceptos_service__WEBPACK_IMPORTED_MODULE_50__.OtrosConceptosService),
/* harmony export */   "PagosService": () => (/* reexport safe */ _pagos_service__WEBPACK_IMPORTED_MODULE_52__.PagosService),
/* harmony export */   "PagosTercerosService": () => (/* reexport safe */ _pagosTerceros_service__WEBPACK_IMPORTED_MODULE_54__.PagosTercerosService),
/* harmony export */   "PayrollsService": () => (/* reexport safe */ _payrolls_service__WEBPACK_IMPORTED_MODULE_56__.PayrollsService),
/* harmony export */   "PeriodosService": () => (/* reexport safe */ _periodos_service__WEBPACK_IMPORTED_MODULE_58__.PeriodosService),
/* harmony export */   "PrimasService": () => (/* reexport safe */ _primas_service__WEBPACK_IMPORTED_MODULE_60__.PrimasService),
/* harmony export */   "ProveedoresXMLService": () => (/* reexport safe */ _proveedoresXML_service__WEBPACK_IMPORTED_MODULE_62__.ProveedoresXMLService),
/* harmony export */   "SaludPensionSindicatosService": () => (/* reexport safe */ _saludPensionSindicatos_service__WEBPACK_IMPORTED_MODULE_64__.SaludPensionSindicatosService),
/* harmony export */   "SancionesService": () => (/* reexport safe */ _sanciones_service__WEBPACK_IMPORTED_MODULE_66__.SancionesService),
/* harmony export */   "StoredProcedureService": () => (/* reexport safe */ _storedProcedure_service__WEBPACK_IMPORTED_MODULE_68__.StoredProcedureService),
/* harmony export */   "TrabajadoresService": () => (/* reexport safe */ _trabajadores_service__WEBPACK_IMPORTED_MODULE_70__.TrabajadoresService),
/* harmony export */   "TransportesService": () => (/* reexport safe */ _transportes_service__WEBPACK_IMPORTED_MODULE_72__.TransportesService),
/* harmony export */   "VacacionesCompensadasService": () => (/* reexport safe */ _vacacionesCompensadas_service__WEBPACK_IMPORTED_MODULE_74__.VacacionesCompensadasService),
/* harmony export */   "VacacionesComunesService": () => (/* reexport safe */ _vacacionesComunes_service__WEBPACK_IMPORTED_MODULE_76__.VacacionesComunesService),
/* harmony export */   "APIS": () => (/* binding */ APIS)
/* harmony export */ });
/* harmony import */ var _anticipos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anticipos.service */ 22459);
/* harmony import */ var _anticipos_serviceInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anticipos.serviceInterface */ 63698);
/* harmony import */ var _auxilios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auxilios.service */ 21758);
/* harmony import */ var _auxilios_serviceInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auxilios.serviceInterface */ 81066);
/* harmony import */ var _basicos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basicos.service */ 61541);
/* harmony import */ var _basicos_serviceInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basicos.serviceInterface */ 5443);
/* harmony import */ var _bonificaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bonificaciones.service */ 71319);
/* harmony import */ var _bonificaciones_serviceInterface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bonificaciones.serviceInterface */ 83750);
/* harmony import */ var _bonosEPCTV_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bonosEPCTV.service */ 46163);
/* harmony import */ var _bonosEPCTV_serviceInterface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bonosEPCTV.serviceInterface */ 78787);
/* harmony import */ var _cesantias_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cesantias.service */ 52480);
/* harmony import */ var _cesantias_serviceInterface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cesantias.serviceInterface */ 42444);
/* harmony import */ var _comisiones_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comisiones.service */ 11448);
/* harmony import */ var _comisiones_serviceInterface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comisiones.serviceInterface */ 66467);
/* harmony import */ var _compensaciones_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./compensaciones.service */ 22246);
/* harmony import */ var _compensaciones_serviceInterface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./compensaciones.serviceInterface */ 58503);
/* harmony import */ var _deducciones_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./deducciones.service */ 65885);
/* harmony import */ var _deducciones_serviceInterface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./deducciones.serviceInterface */ 90562);
/* harmony import */ var _devengados_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./devengados.service */ 67203);
/* harmony import */ var _devengados_serviceInterface__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./devengados.serviceInterface */ 72071);
/* harmony import */ var _empleadores_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./empleadores.service */ 60564);
/* harmony import */ var _empleadores_serviceInterface__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./empleadores.serviceInterface */ 96084);
/* harmony import */ var _fechasPagos_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fechasPagos.service */ 11792);
/* harmony import */ var _fechasPagos_serviceInterface__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fechasPagos.serviceInterface */ 45680);
/* harmony import */ var _fondosSP_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fondosSP.service */ 22583);
/* harmony import */ var _fondosSP_serviceInterface__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fondosSP.serviceInterface */ 9930);
/* harmony import */ var _horariosAdicionales_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./horariosAdicionales.service */ 91998);
/* harmony import */ var _horariosAdicionales_serviceInterface__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./horariosAdicionales.serviceInterface */ 80814);
/* harmony import */ var _huelgasLegales_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./huelgasLegales.service */ 33270);
/* harmony import */ var _huelgasLegales_serviceInterface__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./huelgasLegales.serviceInterface */ 14468);
/* harmony import */ var _incapacidades_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./incapacidades.service */ 59804);
/* harmony import */ var _incapacidades_serviceInterface__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./incapacidades.serviceInterface */ 97689);
/* harmony import */ var _informacionesGenerales_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./informacionesGenerales.service */ 13084);
/* harmony import */ var _informacionesGenerales_serviceInterface__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./informacionesGenerales.serviceInterface */ 4951);
/* harmony import */ var _libranzas_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./libranzas.service */ 21799);
/* harmony import */ var _libranzas_serviceInterface__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./libranzas.serviceInterface */ 62715);
/* harmony import */ var _licencias_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./licencias.service */ 94763);
/* harmony import */ var _licencias_serviceInterface__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./licencias.serviceInterface */ 62738);
/* harmony import */ var _lugaresGeneracionXML_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lugaresGeneracionXML.service */ 29647);
/* harmony import */ var _lugaresGeneracionXML_serviceInterface__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./lugaresGeneracionXML.serviceInterface */ 52752);
/* harmony import */ var _nominasGenerales_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./nominasGenerales.service */ 13684);
/* harmony import */ var _nominasGenerales_serviceInterface__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./nominasGenerales.serviceInterface */ 36995);
/* harmony import */ var _nominasIndividuales_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nominasIndividuales.service */ 24952);
/* harmony import */ var _nominasIndividuales_serviceInterface__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./nominasIndividuales.serviceInterface */ 29692);
/* harmony import */ var _notas_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./notas.service */ 42725);
/* harmony import */ var _notas_serviceInterface__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./notas.serviceInterface */ 35189);
/* harmony import */ var _numerosSecuenciaXML_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./numerosSecuenciaXML.service */ 25120);
/* harmony import */ var _numerosSecuenciaXML_serviceInterface__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./numerosSecuenciaXML.serviceInterface */ 21010);
/* harmony import */ var _otrasDeducciones_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./otrasDeducciones.service */ 81667);
/* harmony import */ var _otrasDeducciones_serviceInterface__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./otrasDeducciones.serviceInterface */ 72440);
/* harmony import */ var _otrosConceptos_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./otrosConceptos.service */ 29020);
/* harmony import */ var _otrosConceptos_serviceInterface__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./otrosConceptos.serviceInterface */ 24196);
/* harmony import */ var _pagos_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pagos.service */ 8276);
/* harmony import */ var _pagos_serviceInterface__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pagos.serviceInterface */ 318);
/* harmony import */ var _pagosTerceros_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pagosTerceros.service */ 68275);
/* harmony import */ var _pagosTerceros_serviceInterface__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pagosTerceros.serviceInterface */ 52486);
/* harmony import */ var _payrolls_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./payrolls.service */ 10315);
/* harmony import */ var _payrolls_serviceInterface__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./payrolls.serviceInterface */ 33894);
/* harmony import */ var _periodos_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./periodos.service */ 52926);
/* harmony import */ var _periodos_serviceInterface__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./periodos.serviceInterface */ 9318);
/* harmony import */ var _primas_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./primas.service */ 21238);
/* harmony import */ var _primas_serviceInterface__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./primas.serviceInterface */ 40457);
/* harmony import */ var _proveedoresXML_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./proveedoresXML.service */ 96165);
/* harmony import */ var _proveedoresXML_serviceInterface__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./proveedoresXML.serviceInterface */ 8449);
/* harmony import */ var _saludPensionSindicatos_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./saludPensionSindicatos.service */ 75788);
/* harmony import */ var _saludPensionSindicatos_serviceInterface__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./saludPensionSindicatos.serviceInterface */ 80415);
/* harmony import */ var _sanciones_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./sanciones.service */ 19931);
/* harmony import */ var _sanciones_serviceInterface__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./sanciones.serviceInterface */ 45344);
/* harmony import */ var _storedProcedure_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./storedProcedure.service */ 97695);
/* harmony import */ var _storedProcedure_serviceInterface__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./storedProcedure.serviceInterface */ 80025);
/* harmony import */ var _trabajadores_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./trabajadores.service */ 68964);
/* harmony import */ var _trabajadores_serviceInterface__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./trabajadores.serviceInterface */ 91630);
/* harmony import */ var _transportes_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./transportes.service */ 38805);
/* harmony import */ var _transportes_serviceInterface__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./transportes.serviceInterface */ 32292);
/* harmony import */ var _vacacionesCompensadas_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./vacacionesCompensadas.service */ 27316);
/* harmony import */ var _vacacionesCompensadas_serviceInterface__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./vacacionesCompensadas.serviceInterface */ 98871);
/* harmony import */ var _vacacionesComunes_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./vacacionesComunes.service */ 64686);
/* harmony import */ var _vacacionesComunes_serviceInterface__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./vacacionesComunes.serviceInterface */ 29286);





















































































































const APIS = [_anticipos_service__WEBPACK_IMPORTED_MODULE_0__.AnticiposService, _auxilios_service__WEBPACK_IMPORTED_MODULE_2__.AuxiliosService, _basicos_service__WEBPACK_IMPORTED_MODULE_4__.BasicosService, _bonificaciones_service__WEBPACK_IMPORTED_MODULE_6__.BonificacionesService, _bonosEPCTV_service__WEBPACK_IMPORTED_MODULE_8__.BonosEPCTVService, _cesantias_service__WEBPACK_IMPORTED_MODULE_10__.CesantiasService, _comisiones_service__WEBPACK_IMPORTED_MODULE_12__.ComisionesService, _compensaciones_service__WEBPACK_IMPORTED_MODULE_14__.CompensacionesService, _deducciones_service__WEBPACK_IMPORTED_MODULE_16__.DeduccionesService, _devengados_service__WEBPACK_IMPORTED_MODULE_18__.DevengadosService, _empleadores_service__WEBPACK_IMPORTED_MODULE_20__.EmpleadoresService, _fechasPagos_service__WEBPACK_IMPORTED_MODULE_22__.FechasPagosService, _fondosSP_service__WEBPACK_IMPORTED_MODULE_24__.FondosSPService, _horariosAdicionales_service__WEBPACK_IMPORTED_MODULE_26__.HorariosAdicionalesService, _huelgasLegales_service__WEBPACK_IMPORTED_MODULE_28__.HuelgasLegalesService, _incapacidades_service__WEBPACK_IMPORTED_MODULE_30__.IncapacidadesService, _informacionesGenerales_service__WEBPACK_IMPORTED_MODULE_32__.InformacionesGeneralesService, _libranzas_service__WEBPACK_IMPORTED_MODULE_34__.LibranzasService, _licencias_service__WEBPACK_IMPORTED_MODULE_36__.LicenciasService, _lugaresGeneracionXML_service__WEBPACK_IMPORTED_MODULE_38__.LugaresGeneracionXMLService, _nominasGenerales_service__WEBPACK_IMPORTED_MODULE_40__.NominasGeneralesService, _nominasIndividuales_service__WEBPACK_IMPORTED_MODULE_42__.NominasIndividualesService, _notas_service__WEBPACK_IMPORTED_MODULE_44__.NotasService, _numerosSecuenciaXML_service__WEBPACK_IMPORTED_MODULE_46__.NumerosSecuenciaXMLService, _otrasDeducciones_service__WEBPACK_IMPORTED_MODULE_48__.OtrasDeduccionesService, _otrosConceptos_service__WEBPACK_IMPORTED_MODULE_50__.OtrosConceptosService, _pagos_service__WEBPACK_IMPORTED_MODULE_52__.PagosService, _pagosTerceros_service__WEBPACK_IMPORTED_MODULE_54__.PagosTercerosService, _payrolls_service__WEBPACK_IMPORTED_MODULE_56__.PayrollsService, _periodos_service__WEBPACK_IMPORTED_MODULE_58__.PeriodosService, _primas_service__WEBPACK_IMPORTED_MODULE_60__.PrimasService, _proveedoresXML_service__WEBPACK_IMPORTED_MODULE_62__.ProveedoresXMLService, _saludPensionSindicatos_service__WEBPACK_IMPORTED_MODULE_64__.SaludPensionSindicatosService, _sanciones_service__WEBPACK_IMPORTED_MODULE_66__.SancionesService, _storedProcedure_service__WEBPACK_IMPORTED_MODULE_68__.StoredProcedureService, _trabajadores_service__WEBPACK_IMPORTED_MODULE_70__.TrabajadoresService, _transportes_service__WEBPACK_IMPORTED_MODULE_72__.TransportesService, _vacacionesCompensadas_service__WEBPACK_IMPORTED_MODULE_74__.VacacionesCompensadasService, _vacacionesComunes_service__WEBPACK_IMPORTED_MODULE_76__.VacacionesComunesService];


/***/ }),

/***/ 21758:
/*!********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/auxilios.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuxiliosService": () => (/* binding */ AuxiliosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class AuxiliosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE38(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE38.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/auxilios/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findAllDevengadoIdUsingGET2(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling findAllDevengadoIdUsingGET2.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/auxilios/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET38(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET38.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/auxilios/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST38(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST38.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/auxilios`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT38(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT38.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/auxilios`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
AuxiliosService.ɵfac = function AuxiliosService_Factory(t) { return new (t || AuxiliosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
AuxiliosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuxiliosService, factory: AuxiliosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81066:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/auxilios.serviceInterface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 61541:
/*!*******************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/basicos.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicosService": () => (/* binding */ BasicosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class BasicosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE39(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE39.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/basicos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET39(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET39.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/basicos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST39(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST39.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/basicos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT39(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT39.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/basicos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
BasicosService.ɵfac = function BasicosService_Factory(t) { return new (t || BasicosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
BasicosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BasicosService, factory: BasicosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5443:
/*!****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/basicos.serviceInterface.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 71319:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/bonificaciones.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BonificacionesService": () => (/* binding */ BonificacionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class BonificacionesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE40(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE40.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/bonificaciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET40(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET40.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/bonificaciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET15(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET15.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/bonificaciones/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST40(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST40.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/bonificaciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT40(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT40.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/bonificaciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
BonificacionesService.ɵfac = function BonificacionesService_Factory(t) { return new (t || BonificacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
BonificacionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BonificacionesService, factory: BonificacionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83750:
/*!***********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/bonificaciones.serviceInterface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 46163:
/*!**********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/bonosEPCTV.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BonosEPCTVService": () => (/* binding */ BonosEPCTVService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class BonosEPCTVService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE41(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE41.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/bonosEPCTV/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET41(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET41.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/bonosEPCTV/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET16(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET16.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/bonosEPCTV/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST41(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST41.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/bonosEPCTV`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT41(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT41.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/bonosEPCTV`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
BonosEPCTVService.ɵfac = function BonosEPCTVService_Factory(t) { return new (t || BonosEPCTVService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
BonosEPCTVService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BonosEPCTVService, factory: BonosEPCTVService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 78787:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/bonosEPCTV.serviceInterface.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 52480:
/*!*********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/cesantias.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CesantiasService": () => (/* binding */ CesantiasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class CesantiasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE42(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE42.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/cesantias/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET42(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET42.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/cesantias/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET10(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllUsingGET10.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/cesantias/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST42(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST42.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/cesantias`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT42(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT42.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/cesantias`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
CesantiasService.ɵfac = function CesantiasService_Factory(t) { return new (t || CesantiasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
CesantiasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CesantiasService, factory: CesantiasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42444:
/*!******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/cesantias.serviceInterface.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 11448:
/*!**********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/comisiones.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComisionesService": () => (/* binding */ ComisionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class ComisionesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE43(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE43.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/comisiones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET43(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET43.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/comisiones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET17(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET17.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/comisiones/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST43(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST43.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/comisiones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT43(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT43.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/comisiones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
ComisionesService.ɵfac = function ComisionesService_Factory(t) { return new (t || ComisionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
ComisionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ComisionesService, factory: ComisionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66467:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/comisiones.serviceInterface.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 22246:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/compensaciones.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompensacionesService": () => (/* binding */ CompensacionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class CompensacionesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE44(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE44.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/compensaciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET44(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET44.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/compensaciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET18(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET18.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/compensaciones/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST44(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST44.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/compensaciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT44(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT44.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/compensaciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
CompensacionesService.ɵfac = function CompensacionesService_Factory(t) { return new (t || CompensacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
CompensacionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CompensacionesService, factory: CompensacionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58503:
/*!***********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/compensaciones.serviceInterface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 65885:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/deducciones.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeduccionesService": () => (/* binding */ DeduccionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class DeduccionesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE45(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE45.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/deducciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findAllDeduccionUsingGET1(deduccionId, observe = 'body', reportProgress = false, options) {
        if (deduccionId === null || deduccionId === undefined) {
            throw new Error('Required parameter deduccionId was null or undefined when calling findAllDeduccionUsingGET1.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/deducciones/list/${encodeURIComponent(String(deduccionId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET45(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET45.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/deducciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST45(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST45.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/deducciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT45(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT45.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/deducciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
DeduccionesService.ɵfac = function DeduccionesService_Factory(t) { return new (t || DeduccionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
DeduccionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DeduccionesService, factory: DeduccionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90562:
/*!********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/deducciones.serviceInterface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 67203:
/*!**********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/devengados.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevengadosService": () => (/* binding */ DevengadosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class DevengadosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE46(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE46.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/devengados/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET46(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET46.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/devengados/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET19(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET19.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/devengados/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST46(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST46.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/devengados`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT46(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT46.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/devengados`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
DevengadosService.ɵfac = function DevengadosService_Factory(t) { return new (t || DevengadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
DevengadosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DevengadosService, factory: DevengadosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72071:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/devengados.serviceInterface.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 60564:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/empleadores.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoresService": () => (/* binding */ EmpleadoresService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class EmpleadoresService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE47(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE47.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/empleadores/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET47(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET47.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/empleadores/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST47(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST47.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/empleadores`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT47(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT47.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/empleadores`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
EmpleadoresService.ɵfac = function EmpleadoresService_Factory(t) { return new (t || EmpleadoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
EmpleadoresService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EmpleadoresService, factory: EmpleadoresService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96084:
/*!********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/empleadores.serviceInterface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 11792:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/fechasPagos.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FechasPagosService": () => (/* binding */ FechasPagosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class FechasPagosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE48(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE48.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/fechaPagos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET48(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET48.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/fechaPagos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllNominaIndividualIdUsingGET1(payrollId, observe = 'body', reportProgress = false, options) {
        if (payrollId === null || payrollId === undefined) {
            throw new Error('Required parameter payrollId was null or undefined when calling listFindAllNominaIndividualIdUsingGET1.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/fechaPagos/list/${encodeURIComponent(String(payrollId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST48(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST48.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/fechaPagos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT48(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT48.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/fechaPagos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
FechasPagosService.ɵfac = function FechasPagosService_Factory(t) { return new (t || FechasPagosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
FechasPagosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FechasPagosService, factory: FechasPagosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45680:
/*!********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/fechasPagos.serviceInterface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 22583:
/*!********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/fondosSP.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FondosSPService": () => (/* binding */ FondosSPService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class FondosSPService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE49(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE49.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/fondosSP/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET49(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET49.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/fondosSP/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST49(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST49.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/fondosSP`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT49(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT49.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/fondosSP`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
FondosSPService.ɵfac = function FondosSPService_Factory(t) { return new (t || FondosSPService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
FondosSPService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FondosSPService, factory: FondosSPService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9930:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/fondosSP.serviceInterface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 91998:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/horariosAdicionales.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorariosAdicionalesService": () => (/* binding */ HorariosAdicionalesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class HorariosAdicionalesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE50(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE50.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/horariosAdicionales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findAllDevengadoIdUsingGET3(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling findAllDevengadoIdUsingGET3.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/horariosAdicionales/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET50(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET50.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/horariosAdicionales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST50(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST50.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/horariosAdicionales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT50(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT50.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/horariosAdicionales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
HorariosAdicionalesService.ɵfac = function HorariosAdicionalesService_Factory(t) { return new (t || HorariosAdicionalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
HorariosAdicionalesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HorariosAdicionalesService, factory: HorariosAdicionalesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80814:
/*!****************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/horariosAdicionales.serviceInterface.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 33270:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/huelgasLegales.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HuelgasLegalesService": () => (/* binding */ HuelgasLegalesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class HuelgasLegalesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE51(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE51.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/huelgasLegales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET51(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET51.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/huelgasLegales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET20(devengadoId, observe = 'body', reportProgress = false, options) {
        if (devengadoId === null || devengadoId === undefined) {
            throw new Error('Required parameter devengadoId was null or undefined when calling listFindAllDevengadosUsingGET20.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/huelgasLegales/list/${encodeURIComponent(String(devengadoId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST51(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST51.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/huelgasLegales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT51(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT51.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/huelgasLegales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
HuelgasLegalesService.ɵfac = function HuelgasLegalesService_Factory(t) { return new (t || HuelgasLegalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
HuelgasLegalesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HuelgasLegalesService, factory: HuelgasLegalesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14468:
/*!***********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/huelgasLegales.serviceInterface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 59804:
/*!*************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/incapacidades.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncapacidadesService": () => (/* binding */ IncapacidadesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class IncapacidadesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE52(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE52.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/incapacidades/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET52(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET52.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/incapacidades/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET21(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET21.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/incapacidades/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST52(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST52.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/incapacidades`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT52(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT52.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/incapacidades`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
IncapacidadesService.ɵfac = function IncapacidadesService_Factory(t) { return new (t || IncapacidadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
IncapacidadesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: IncapacidadesService, factory: IncapacidadesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97689:
/*!**********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/incapacidades.serviceInterface.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 13084:
/*!**********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/informacionesGenerales.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionesGeneralesService": () => (/* binding */ InformacionesGeneralesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class InformacionesGeneralesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE53(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE53.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/informacionesGenerales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET53(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET53.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/informacionesGenerales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET11(deducionesId, observe = 'body', reportProgress = false, options) {
        if (deducionesId === null || deducionesId === undefined) {
            throw new Error('Required parameter deducionesId was null or undefined when calling listFindAllUsingGET11.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/informacionesGenerales/list/${encodeURIComponent(String(deducionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST53(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST53.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/informacionesGenerales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT53(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT53.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/informacionesGenerales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
InformacionesGeneralesService.ɵfac = function InformacionesGeneralesService_Factory(t) { return new (t || InformacionesGeneralesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
InformacionesGeneralesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: InformacionesGeneralesService, factory: InformacionesGeneralesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4951:
/*!*******************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/informacionesGenerales.serviceInterface.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 21799:
/*!*********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/libranzas.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibranzasService": () => (/* binding */ LibranzasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class LibranzasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE54(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE54.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/libranzas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET54(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET54.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/libranzas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDeduccionesIdUsingGET1(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllDeduccionesIdUsingGET1.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/libranzas/list/${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST54(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST54.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/libranzas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT54(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT54.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/libranzas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
LibranzasService.ɵfac = function LibranzasService_Factory(t) { return new (t || LibranzasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
LibranzasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LibranzasService, factory: LibranzasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62715:
/*!******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/libranzas.serviceInterface.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 94763:
/*!*********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/licencias.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenciasService": () => (/* binding */ LicenciasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class LicenciasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE55(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE55.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/licencias/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET55(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET55.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/licencias/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET22(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET22.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/licencias/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST55(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST55.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/licencias`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT55(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT55.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/licencias`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
LicenciasService.ɵfac = function LicenciasService_Factory(t) { return new (t || LicenciasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
LicenciasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LicenciasService, factory: LicenciasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62738:
/*!******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/licencias.serviceInterface.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 29647:
/*!********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/lugaresGeneracionXML.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LugaresGeneracionXMLService": () => (/* binding */ LugaresGeneracionXMLService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class LugaresGeneracionXMLService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE56(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE56.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/lugaresGeneracionXML/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET56(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET56.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/lugaresGeneracionXML/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST56(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST56.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/lugaresGeneracionXML`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT56(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT56.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/lugaresGeneracionXML`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
LugaresGeneracionXMLService.ɵfac = function LugaresGeneracionXMLService_Factory(t) { return new (t || LugaresGeneracionXMLService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
LugaresGeneracionXMLService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LugaresGeneracionXMLService, factory: LugaresGeneracionXMLService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52752:
/*!*****************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/lugaresGeneracionXML.serviceInterface.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 13684:
/*!****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/nominasGenerales.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NominasGeneralesService": () => (/* binding */ NominasGeneralesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class NominasGeneralesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE57(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE57.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/nominasGenerales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET57(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET57.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/nominasGenerales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET12(businessSubscriptionId, observe = 'body', reportProgress = false, options) {
        if (businessSubscriptionId === null || businessSubscriptionId === undefined) {
            throw new Error('Required parameter businessSubscriptionId was null or undefined when calling listFindAllUsingGET12.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/nominasGenerales/list/${encodeURIComponent(String(businessSubscriptionId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST57(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST57.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/nominasGenerales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT57(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT57.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/nominasGenerales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
NominasGeneralesService.ɵfac = function NominasGeneralesService_Factory(t) { return new (t || NominasGeneralesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
NominasGeneralesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NominasGeneralesService, factory: NominasGeneralesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36995:
/*!*************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/nominasGenerales.serviceInterface.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 24952:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/nominasIndividuales.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NominasIndividualesService": () => (/* binding */ NominasIndividualesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class NominasIndividualesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE58(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE58.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/nominasIndividuales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET58(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET58.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/nominasIndividuales/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET13(businessSubscriptionId, nominaGeneralId, observe = 'body', reportProgress = false, options) {
        if (businessSubscriptionId === null || businessSubscriptionId === undefined) {
            throw new Error('Required parameter businessSubscriptionId was null or undefined when calling listFindAllUsingGET13.');
        }
        if (nominaGeneralId === null || nominaGeneralId === undefined) {
            throw new Error('Required parameter nominaGeneralId was null or undefined when calling listFindAllUsingGET13.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/nominasIndividuales/list/${encodeURIComponent(String(businessSubscriptionId))}/${encodeURIComponent(String(nominaGeneralId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST58(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST58.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/nominasIndividuales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT58(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT58.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/nominasIndividuales`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
NominasIndividualesService.ɵfac = function NominasIndividualesService_Factory(t) { return new (t || NominasIndividualesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
NominasIndividualesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NominasIndividualesService, factory: NominasIndividualesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29692:
/*!****************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/nominasIndividuales.serviceInterface.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 42725:
/*!*****************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/notas.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotasService": () => (/* binding */ NotasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class NotasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE59(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE59.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/notas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET59(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET59.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/notas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST59(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST59.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/notas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT59(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT59.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/notas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
NotasService.ɵfac = function NotasService_Factory(t) { return new (t || NotasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
NotasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NotasService, factory: NotasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35189:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/notas.serviceInterface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 25120:
/*!*******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/numerosSecuenciaXML.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumerosSecuenciaXMLService": () => (/* binding */ NumerosSecuenciaXMLService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class NumerosSecuenciaXMLService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE60(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE60.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/numerosSecuenciaXML/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET60(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET60.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/numerosSecuenciaXML/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST60(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST60.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/numerosSecuenciaXML`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT60(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT60.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/numerosSecuenciaXML`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
NumerosSecuenciaXMLService.ɵfac = function NumerosSecuenciaXMLService_Factory(t) { return new (t || NumerosSecuenciaXMLService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
NumerosSecuenciaXMLService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NumerosSecuenciaXMLService, factory: NumerosSecuenciaXMLService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21010:
/*!****************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/numerosSecuenciaXML.serviceInterface.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 81667:
/*!****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/otrasDeducciones.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtrasDeduccionesService": () => (/* binding */ OtrasDeduccionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class OtrasDeduccionesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE61(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE61.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/otrasDeducciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET61(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET61.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/otrasDeducciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDeduccionesUsingGET5(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllDeduccionesUsingGET5.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/otrasDeducciones/list/${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST61(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST61.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/otrasDeducciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT61(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT61.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/otrasDeducciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
OtrasDeduccionesService.ɵfac = function OtrasDeduccionesService_Factory(t) { return new (t || OtrasDeduccionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
OtrasDeduccionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OtrasDeduccionesService, factory: OtrasDeduccionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72440:
/*!*************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/otrasDeducciones.serviceInterface.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 29020:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/otrosConceptos.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtrosConceptosService": () => (/* binding */ OtrosConceptosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class OtrosConceptosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE62(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE62.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/otrosConceptos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET62(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET62.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/otrosConceptos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET23(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET23.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/otrosConceptos/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST62(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST62.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/otrosConceptos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT62(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT62.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/otrosConceptos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
OtrosConceptosService.ɵfac = function OtrosConceptosService_Factory(t) { return new (t || OtrosConceptosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
OtrosConceptosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OtrosConceptosService, factory: OtrosConceptosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 24196:
/*!***********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/otrosConceptos.serviceInterface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8276:
/*!*****************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/pagos.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagosService": () => (/* binding */ PagosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class PagosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE63(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE63.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/pagos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET63(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET63.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/pagos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET14(payrollId, observe = 'body', reportProgress = false, options) {
        if (payrollId === null || payrollId === undefined) {
            throw new Error('Required parameter payrollId was null or undefined when calling listFindAllUsingGET14.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/pagos/list/${encodeURIComponent(String(payrollId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST63(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST63.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/pagos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT63(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT63.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/pagos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
PagosService.ɵfac = function PagosService_Factory(t) { return new (t || PagosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
PagosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PagosService, factory: PagosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 318:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/pagos.serviceInterface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 68275:
/*!*************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/pagosTerceros.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagosTercerosService": () => (/* binding */ PagosTercerosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class PagosTercerosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE64(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE64.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/pagosTerceros/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET64(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET64.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/pagosTerceros/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDeduccionesUsingGET6(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllDeduccionesUsingGET6.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/pagosTerceros/list/deducciones/${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET24(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET24.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/pagosTerceros/list/devengados/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST64(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST64.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/pagosTerceros`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT64(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT64.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/pagosTerceros`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
PagosTercerosService.ɵfac = function PagosTercerosService_Factory(t) { return new (t || PagosTercerosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
PagosTercerosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PagosTercerosService, factory: PagosTercerosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52486:
/*!**********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/pagosTerceros.serviceInterface.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 10315:
/*!********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/payrolls.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollsService": () => (/* binding */ PayrollsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class PayrollsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    payrollListUsingGET1(observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/payrolls/list`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    sendListUsingPOST4(list, observe = 'body', reportProgress = false, options) {
        if (list === null || list === undefined) {
            throw new Error('Required parameter list was null or undefined when calling sendListUsingPOST4.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/payrolls/send-list`, list, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
PayrollsService.ɵfac = function PayrollsService_Factory(t) { return new (t || PayrollsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
PayrollsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PayrollsService, factory: PayrollsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33894:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/payrolls.serviceInterface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 52926:
/*!********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/periodos.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodosService": () => (/* binding */ PeriodosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class PeriodosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE65(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE65.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/periodos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET65(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET65.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/periodos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET15(param, observe = 'body', reportProgress = false, options) {
        if (param === null || param === undefined) {
            throw new Error('Required parameter param was null or undefined when calling listFindAllUsingGET15.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/periodos/list/${encodeURIComponent(String())}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST65(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST65.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/periodos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT65(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT65.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/periodos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
PeriodosService.ɵfac = function PeriodosService_Factory(t) { return new (t || PeriodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
PeriodosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PeriodosService, factory: PeriodosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9318:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/periodos.serviceInterface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 21238:
/*!******************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/primas.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimasService": () => (/* binding */ PrimasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class PrimasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE66(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE66.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/primas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET66(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET66.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/primas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET16(param, observe = 'body', reportProgress = false, options) {
        if (param === null || param === undefined) {
            throw new Error('Required parameter param was null or undefined when calling listFindAllUsingGET16.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/primas/list/${encodeURIComponent(String(param))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST66(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST66.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/primas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT66(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT66.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/primas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
PrimasService.ɵfac = function PrimasService_Factory(t) { return new (t || PrimasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
PrimasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PrimasService, factory: PrimasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40457:
/*!***************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/primas.serviceInterface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 96165:
/*!**************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/proveedoresXML.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProveedoresXMLService": () => (/* binding */ ProveedoresXMLService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class ProveedoresXMLService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE67(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE67.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/proveedoresXML/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET67(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET67.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/proveedoresXML/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET17(param, observe = 'body', reportProgress = false, options) {
        if (param === null || param === undefined) {
            throw new Error('Required parameter param was null or undefined when calling listFindAllUsingGET17.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/proveedoresXML/list/${encodeURIComponent(String())}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST67(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST67.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/proveedoresXML`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT67(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT67.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/proveedoresXML`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
ProveedoresXMLService.ɵfac = function ProveedoresXMLService_Factory(t) { return new (t || ProveedoresXMLService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
ProveedoresXMLService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProveedoresXMLService, factory: ProveedoresXMLService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8449:
/*!***********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/proveedoresXML.serviceInterface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 75788:
/*!**********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/saludPensionSindicatos.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaludPensionSindicatosService": () => (/* binding */ SaludPensionSindicatosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class SaludPensionSindicatosService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE68(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE68.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/saludPensionSindicatos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET68(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET68.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/saludPensionSindicatos/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDeduccionesUsingGET7(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllDeduccionesUsingGET7.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/saludPensionSindicatos/list${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET18(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllUsingGET18.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/saludPensionSindicatos/list/${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST68(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST68.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/saludPensionSindicatos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT68(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT68.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/saludPensionSindicatos`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
SaludPensionSindicatosService.ɵfac = function SaludPensionSindicatosService_Factory(t) { return new (t || SaludPensionSindicatosService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
SaludPensionSindicatosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SaludPensionSindicatosService, factory: SaludPensionSindicatosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80415:
/*!*******************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/saludPensionSindicatos.serviceInterface.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 19931:
/*!*********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/sanciones.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SancionesService": () => (/* binding */ SancionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class SancionesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE69(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE69.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/sanciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET69(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET69.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/sanciones/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllUsingGET19(deduccionesId, observe = 'body', reportProgress = false, options) {
        if (deduccionesId === null || deduccionesId === undefined) {
            throw new Error('Required parameter deduccionesId was null or undefined when calling listFindAllUsingGET19.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/sanciones/list/${encodeURIComponent(String(deduccionesId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST69(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST69.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/sanciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT69(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT69.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/sanciones`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
SancionesService.ɵfac = function SancionesService_Factory(t) { return new (t || SancionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
SancionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SancionesService, factory: SancionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45344:
/*!******************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/sanciones.serviceInterface.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 97695:
/*!***************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/storedProcedure.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredProcedureService": () => (/* binding */ StoredProcedureService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class StoredProcedureService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    exectuteProcedureUsingPOST1(request, observe = 'body', reportProgress = false, options) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling exectuteProcedureUsingPOST1.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/procedure`, request, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
StoredProcedureService.ɵfac = function StoredProcedureService_Factory(t) { return new (t || StoredProcedureService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
StoredProcedureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StoredProcedureService, factory: StoredProcedureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80025:
/*!************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/storedProcedure.serviceInterface.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 68964:
/*!************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/trabajadores.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajadoresService": () => (/* binding */ TrabajadoresService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class TrabajadoresService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE70(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE70.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/trabajadores/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET70(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET70.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/trabajadores/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listtrabajadorUsingGET1(observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/trabajadores/list`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST70(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST70.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/trabajadores`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT70(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT70.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/trabajadores`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
TrabajadoresService.ɵfac = function TrabajadoresService_Factory(t) { return new (t || TrabajadoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
TrabajadoresService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TrabajadoresService, factory: TrabajadoresService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91630:
/*!*********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/trabajadores.serviceInterface.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 38805:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/transportes.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportesService": () => (/* binding */ TransportesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class TransportesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE71(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE71.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/transportes/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET71(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET71.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/transportes/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET25(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET25.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/transportes/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST71(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST71.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/transportes`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT71(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT71.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/transportes`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
TransportesService.ɵfac = function TransportesService_Factory(t) { return new (t || TransportesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
TransportesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TransportesService, factory: TransportesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32292:
/*!********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/transportes.serviceInterface.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 27316:
/*!*********************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/vacacionesCompensadas.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacacionesCompensadasService": () => (/* binding */ VacacionesCompensadasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class VacacionesCompensadasService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE72(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE72.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/vacacionesCompensadas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET72(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET72.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/vacacionesCompensadas/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET26(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET26.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/vacacionesCompensadas/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST72(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST72.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/vacacionesCompensadas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT72(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT72.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/vacacionesCompensadas`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
VacacionesCompensadasService.ɵfac = function VacacionesCompensadasService_Factory(t) { return new (t || VacacionesCompensadasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
VacacionesCompensadasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: VacacionesCompensadasService, factory: VacacionesCompensadasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98871:
/*!******************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/vacacionesCompensadas.serviceInterface.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 64686:
/*!*****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/vacacionesComunes.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacacionesComunesService": () => (/* binding */ VacacionesComunesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 3574);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 73636);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







class VacacionesComunesService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:8092';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpParameterCodec();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    deleteUsingDELETE73(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE73.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/nomina-general/vacacionesComunes/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    findByIdUsingGET73(id, observe = 'body', reportProgress = false, options) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET73.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/vacacionesComunes/${encodeURIComponent(String(id))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    listFindAllDevengadosUsingGET27(devengadosId, observe = 'body', reportProgress = false, options) {
        if (devengadosId === null || devengadosId === undefined) {
            throw new Error('Required parameter devengadosId was null or undefined when calling listFindAllDevengadosUsingGET27.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/nomina-general/vacacionesComunes/list/${encodeURIComponent(String(devengadosId))}`, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveUsingPOST73(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling saveUsingPOST73.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/nomina-general/vacacionesComunes`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateUsingPUT73(dto, observe = 'body', reportProgress = false, options) {
        if (dto === null || dto === undefined) {
            throw new Error('Required parameter dto was null or undefined when calling updateUsingPUT73.');
        }
        let headers = this.defaultHeaders;
        let credential;
        // authentication (apiKey) required
        credential = this.configuration.lookupCredential('apiKey');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType_ = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/nomina-general/vacacionesComunes`, dto, {
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
VacacionesComunesService.ɵfac = function VacacionesComunesService_Factory(t) { return new (t || VacacionesComunesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8)); };
VacacionesComunesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: VacacionesComunesService, factory: VacacionesComunesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29286:
/*!**************************************************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/rest/vacacionesComunes.serviceInterface.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 73636:
/*!********************************************************!*\
  !*** ./projects/docs/src/app/srv/payroll/variables.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_PATH": () => (/* binding */ BASE_PATH),
/* harmony export */   "COLLECTION_FORMATS": () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ 80424:
/*!****************************************************************************!*\
  !*** ./projects/docs/src/app/srv/selective-preloading-strategy.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectivePreloadingStrategyService": () => (/* binding */ SelectivePreloadingStrategyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


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

/***/ 90273:
/*!************************************************************!*\
  !*** ./projects/docs/src/app/srv/style-manager.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleManagerService": () => (/* binding */ StyleManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

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

/***/ 55906:
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
/* harmony export */   "getEnumValueByEnumKey": () => (/* binding */ getEnumValueByEnumKey),
/* harmony export */   "initTable": () => (/* binding */ initTable),
/* harmony export */   "gtdArrayToLowerCase": () => (/* binding */ gtdArrayToLowerCase),
/* harmony export */   "confirm": () => (/* binding */ confirm),
/* harmony export */   "OpenDialog": () => (/* binding */ OpenDialog),
/* harmony export */   "requestProcedure": () => (/* binding */ requestProcedure),
/* harmony export */   "gtdIsNull": () => (/* binding */ gtdIsNull),
/* harmony export */   "gtdNombreCompleto": () => (/* binding */ gtdNombreCompleto),
/* harmony export */   "gtdSueldoTrabajador": () => (/* binding */ gtdSueldoTrabajador),
/* harmony export */   "gtdBeforeUnload": () => (/* binding */ gtdBeforeUnload),
/* harmony export */   "gtdDate": () => (/* binding */ gtdDate),
/* harmony export */   "gtdDateTimeInput": () => (/* binding */ gtdDateTimeInput),
/* harmony export */   "gtdApiDateTime": () => (/* binding */ gtdApiDateTime),
/* harmony export */   "gtdDateTime": () => (/* binding */ gtdDateTime),
/* harmony export */   "numberWithCommas": () => (/* binding */ numberWithCommas),
/* harmony export */   "stringWithCommas": () => (/* binding */ stringWithCommas),
/* harmony export */   "safeText": () => (/* binding */ safeText),
/* harmony export */   "gtdScrollEvent": () => (/* binding */ gtdScrollEvent),
/* harmony export */   "parseLocaleNumber": () => (/* binding */ parseLocaleNumber),
/* harmony export */   "gtdExtractDataProcedure": () => (/* binding */ gtdExtractDataProcedure),
/* harmony export */   "valoresCatalogos": () => (/* binding */ valoresCatalogos),
/* harmony export */   "txtEliminar": () => (/* binding */ txtEliminar),
/* harmony export */   "gtdEmptyEntity": () => (/* binding */ gtdEmptyEntity)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _shared_dialog_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/dialog/confirm/confirm-dialog.component */ 14289);





var NgGtdThemes;
(function (NgGtdThemes) {
    NgGtdThemes["FpiSkin"] = "fpi-skin-black";
    NgGtdThemes["FpiSkinBlack"] = "fpi-skin-alt";
    NgGtdThemes["NeGtd"] = "default-theme";
    NgGtdThemes["NeGtdBlack"] = "default-theme-black";
    NgGtdThemes["UnicornLightTheme"] = "unicorn-theme";
    NgGtdThemes["UnicornDarkTheme"] = "unicorn-dark-theme";
    NgGtdThemes["AltTheme"] = "theme-alternate";
    NgGtdThemes["AltThemeBlack"] = "theme-alternate-black";
    NgGtdThemes["GtdBlueGrey"] = "gtd-blue";
    NgGtdThemes["GtdBlueBlack"] = "gtd-blue-black";
    // init angular css themes
    NgGtdThemes["DeeppurpleAmber"] = "deeppurple-amber";
    NgGtdThemes["IndigoPink"] = "indigo-pink";
    NgGtdThemes["PinkBluegrey"] = "pink-bluegrey";
    NgGtdThemes["PurpleGreen"] = "purple-green";
    // end angular css themes
})(NgGtdThemes || (NgGtdThemes = {}));
function getEnumValues(e) {
    return Object.keys(e).map((i) => e[i]);
}
function getEnumKeyByEnumValue(myEnum, enumValue, predertermined = myEnum[0]) {
    let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : predertermined;
}
function getEnumValueByEnumKey(myEnum, enumKey, predertermined = myEnum[0]) {
    let keys = Object.keys(myEnum).filter((x) => myEnum.name == enumKey);
    return keys.length > 0 ? myEnum[keys[0]] : predertermined;
}
const initTable = (dataSource$, paginator, sort, newarray, displayedColumns) => {
    let datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(newarray);
    if (paginator) {
        paginator._intl.itemsPerPageLabel = 'Ver';
        paginator._intl.previousPageLabel = 'Anterior';
        paginator._intl.firstPageLabel = 'Primero';
        paginator._intl.lastPageLabel = 'Último';
        paginator._intl.nextPageLabel = 'Siguiente';
        paginator._intl.getRangeLabel = (page, pageSize, length) => `Página ${page + 1}`;
    }
    datasource.paginator = paginator;
    datasource.sort = sort;
    dataSource$.next({
        datasource: datasource,
        displayedColumns: displayedColumns,
        loading: 100,
    });
};
const gtdArrayToLowerCase = (bodyDto) => {
    var _a;
    return (_a = bodyDto === null || bodyDto === void 0 ? void 0 : bodyDto.map) === null || _a === void 0 ? void 0 : _a.call(bodyDto, (element) => {
        var key, keys = Object.keys(element);
        var n = keys.length;
        var newobj = {};
        while (n--) {
            key = keys[n];
            if (!element[key])
                continue;
            if (key.toLowerCase().split('fecha').length > 1) {
                element[key] = gtdDateTime(element[key]);
            } /* else if (typeof element[key] === 'number') {
              element[key] = numberWithCommas(element[key]);
            } */
            newobj[`${key.charAt(0).toLowerCase()}${key.substr(1, key.length)}`] =
                element[key];
        }
        try {
            newobj[`valueCatalogName`] = JSON.parse(newobj[`valueCatalogName`]);
        }
        catch (e) { }
        return newobj;
    });
};
const confirm = (dialog, pregunta, titulo) => {
    const dialogRef = dialog.open(_shared_dialog_confirm_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
        width: '350px',
        data: {
            titulo: titulo,
            pregunta: pregunta,
        },
    });
    return dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
};
const OpenDialog = (dialog, cmp, data) => dialog
    .open(cmp, {
    hasBackdrop: true,
    backdropClass: 'gtd-overlay-backdrop',
    closeOnNavigation: true,
    disableClose: true,
    width: '500px',
    data: data,
})
    .afterClosed();
const requestProcedure = (nominaIndividualId, trabajadorId) => {
    return {
        body: {
            params: {
                nominaIndividualId: nominaIndividualId,
                trabajadorId: trabajadorId,
            },
        },
        header: {
            cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
            esquema: 'payroll',
            procedimientoAlmacenado: 'ConsultarDevengadosTest',
        },
    };
};
const gtdIsNull = (data) => data === undefined ||
    data === null ||
    data === 'null' ||
    data === 'undefined';
const gtdNombreCompleto = (trabajador) => {
    var _a, _b, _c, _d;
    return `${(_a = trabajador === null || trabajador === void 0 ? void 0 : trabajador.primerNombre) !== null && _a !== void 0 ? _a : ''} ${(_b = trabajador === null || trabajador === void 0 ? void 0 : trabajador.otrosNombres) !== null && _b !== void 0 ? _b : ''} ${(_c = trabajador === null || trabajador === void 0 ? void 0 : trabajador.primerApellido) !== null && _c !== void 0 ? _c : ''} ${(_d = trabajador === null || trabajador === void 0 ? void 0 : trabajador.segundoApellido) !== null && _d !== void 0 ? _d : ''}`;
};
const gtdSueldoTrabajador = (sueldo) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(Number(sueldo), 'es-CO', '1.2-2');
const gtdBeforeUnload = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(window, 'beforeunload');
const gtdDate = (value = new Date()) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(value, 'yyyy-MM-dd', 'es-Co');
const gtdDateTimeInput = (value = new Date()) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(value, 'yyyy-MM-ddThh:mm', 'es-Co');
const gtdApiDateTime = (value = new Date()) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(value, 'yyyy-MM-ddThh:mmZZZZZ', 'es-Co');
const gtdDateTime = (value = new Date()) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(value, 'yyyy-MM-ddThh:mmZZZZZ', 'es-Co');
const numberWithCommas = (value) => {
    var _a;
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(typeof value === 'number' ? value : (_a = +(value === null || value === void 0 ? void 0 : value.replace(/\./g, ''))) !== null && _a !== void 0 ? _a : 0, 'es-Co', '1.0-2');
};
const stringWithCommas = (value) => (+value).toLocaleString('es-CO');
const safeText = (value) => value === null || value === void 0 ? void 0 : value.replace(/[^\w\s]/gi, '');
const gtdScrollEvent = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(window, 'scroll');
const parseLocaleNumber = (stringNumber, locale) => {
    var thousandSeparator = Intl.NumberFormat(locale)
        .format(11111)
        .replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat(locale)
        .format(1.1)
        .replace(/\p{Number}/gu, '');
    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.'));
};
const gtdExtractDataProcedure = (body) => {
    var _a;
    return (_a = body.map((b) => {
        var _a, _b, _c, _d;
        let valores = [];
        var key = (_a = Object.keys(b)) === null || _a === void 0 ? void 0 : _a[0];
        const data = (_b = JSON.parse(b[key])) === null || _b === void 0 ? void 0 : _b[0];
        console.log(data);
        var keys = Object.keys(data);
        var n = keys.length;
        var newobj = {};
        while (n--) {
            var gtdMember = keys[n];
            var valor = data[gtdMember];
            if (Array.isArray(valor)) {
                valor.forEach((v, i) => {
                    var keys1 = Object.keys(v);
                    valores.push(...keys1.map((k, y) => {
                        return {
                            id: keys.length - n + i + y,
                            value: typeof v[k] === 'number' ? numberWithCommas(v[k]) : v[k],
                            code: `${k}${gtdMember}`,
                            name: `${gtdMember}: ${k}`,
                            catalog: typeof v[k],
                        };
                    }));
                });
            }
            else if (typeof valor === 'object') {
                var keys1 = Object.keys(valor === null || valor === void 0 ? void 0 : valor[0]);
                var y = keys1.length;
                while (y--) {
                    if (keys1[y].toLocaleLowerCase().split('id').length > 1)
                        continue;
                    valores.push({
                        id: y + 1,
                        value: (_c = valor === null || valor === void 0 ? void 0 : valor[0]) === null || _c === void 0 ? void 0 : _c[keys1[y]],
                        code: `${key}${gtdMember}${keys1[y].charAt(0).toLowerCase()}${keys1[y].substr(1, keys1[y].length)}`,
                        name: `${gtdMember}: ${keys1[y].charAt(0).toLowerCase()}${keys1[y].substr(1, keys1[y].length)}`,
                        catalog: typeof ((_d = valor === null || valor === void 0 ? void 0 : valor[0]) === null || _d === void 0 ? void 0 : _d[keys1[y]]),
                    });
                }
            }
            else {
                if (gtdMember.toLocaleLowerCase().split('id').length > 1)
                    continue;
                if (gtdMember.toLowerCase().split('fecha').length > 1) {
                    valor = new Date(valor);
                }
                newobj[`${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(1, gtdMember.length)}`] = valor;
                valores.push({
                    id: n + 1,
                    value: valor,
                    code: `${key}${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(1, gtdMember.length)}`,
                    name: `${gtdMember.charAt(0).toLowerCase()}${gtdMember.substr(1, gtdMember.length)}`,
                    catalog: typeof valor,
                });
            }
        }
        return valores;
    })) === null || _a === void 0 ? void 0 : _a[0];
};
const valoresCatalogos = (params) => {
    return {
        body: {
            params: params,
        },
        header: {
            cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
            esquema: 'payroll',
            procedimientoAlmacenado: 'ConsultarValoresCatalogosPorCodigoCatalogo',
        },
    };
};
const txtEliminar = (texto, objeto) => {
    return `${texto.replace('P_1', objeto)}`;
};
const gtdEmptyEntity = (bodyDto) => {
    return Object.keys(bodyDto)
        .map((i) => i.toLowerCase().split('id').length > 1 ? undefined : !bodyDto[i])
        .reduce((x, y) => x && y);
};


/***/ }),

/***/ 87176:
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
/* harmony export */   "THEMES_OPTIONS": () => (/* binding */ THEMES_OPTIONS),
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "UIOk": () => (/* binding */ UIOk),
/* harmony export */   "UIEliminado": () => (/* binding */ UIEliminado),
/* harmony export */   "UINoEliminado": () => (/* binding */ UINoEliminado),
/* harmony export */   "UICreado": () => (/* binding */ UICreado),
/* harmony export */   "UINoCreado": () => (/* binding */ UINoCreado),
/* harmony export */   "UIEditado": () => (/* binding */ UIEditado),
/* harmony export */   "UINoEditado": () => (/* binding */ UINoEditado)
/* harmony export */ });
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/common-types */ 55906);

function formatToDate(date) {
    return new Date(date);
}
const VALUES_CATALOG = [
    {
        id: 11,
        name: 'DR',
        code: '11DR',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 12,
        name: 'Narco',
        code: '12NA',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 13,
        name: 'Bombasto',
        code: '13BO',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 14,
        name: 'Celeritas',
        code: '14CE',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 15,
        name: 'Magneta',
        code: '15MA',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 16,
        name: 'RubberMan',
        code: '16RU',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 17,
        name: 'Dynama',
        code: '17DY',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 18,
        name: 'Qr',
        code: '18DR',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 19,
        name: 'Magma',
        code: '19MA',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 20,
        name: 'Tornado',
        code: '20TO',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
];
const VALUES_BUSINESS = [
    {
        id: 11,
        name: 'cliente pruebas',
        code: '11DR',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 12,
        name: 'nestle de colombia s.a.',
        code: '12NA',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 13,
        name: 'asdf sdfasdf',
        code: '13BO',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 14,
        name: 'Americas',
        code: '14CE',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 15,
        name: 'Colanta',
        code: '15MA',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 16,
        name: 'Justo & Bueno',
        code: '16RU',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 17,
        name: 'Duitama',
        code: '17DY',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 18,
        name: 'Barcelona',
        code: '18DR',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 19,
        name: 'Malaga',
        code: '19MA',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
    {
        id: 20,
        name: 'Tiendas boyacenses',
        code: '20TO',
        catalog: 'VC',
        fecha: formatToDate('5/17/2021'),
    },
];
const THEMES_OPTIONS = [
    {
        backgroundColor: '#F1F1F1',
        buttonColor: '#f75c59',
        headingColor: '#181818',
        label: 'FPI Skin',
        value: 'FPI Skin',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkin,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.FpiSkinBlack,
    },
    {
        backgroundColor: '#fff',
        buttonColor: '#ff4081',
        headingColor: '#3f51b5',
        label: 'Unicorn',
        value: 'Unicorn',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.UnicornLightTheme,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.UnicornDarkTheme,
    },
    {
        backgroundColor: '#fafafa',
        buttonColor: '#797979',
        headingColor: '#cc33ca',
        label: 'Alt theme',
        value: 'Alt theme',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.AltTheme,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.AltThemeBlack,
    },
    {
        backgroundColor: '#303030',
        buttonColor: '#d7d7d7',
        headingColor: '#cc33ca',
        label: 'NE Skin',
        value: 'NE Skin',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.NeGtd,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.NeGtdBlack,
    },
    {
        backgroundColor: '#c1ccd7',
        buttonColor: '#cc33ca',
        headingColor: '#097df2',
        label: 'GTD Azul',
        value: 'GTD Azul',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.GtdBlueGrey,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.GtdBlueBlack,
    },
    // init angular css themes
    {
        backgroundColor: '#fff',
        buttonColor: '#607d8b',
        headingColor: '#7b1fa2',
        label: 'Deep purple Amber',
        value: 'Deep purple Amber',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.DeeppurpleAmber,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PurpleGreen,
    },
    {
        backgroundColor: '#fff',
        buttonColor: '#607d8b',
        headingColor: '#3f51b5',
        label: 'Indigo Pink',
        value: 'Indigo Pink',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.IndigoPink,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.IndigoPink,
    },
    {
        backgroundColor: '#303030',
        buttonColor: '#607d8b',
        headingColor: '#e91e63',
        label: 'PinkBlue grey',
        value: 'PinkBlue grey',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PinkBluegrey,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PinkBluegrey,
    },
    {
        backgroundColor: '#303030',
        buttonColor: '#607d8b',
        headingColor: '#7b1fa2',
        label: 'Purple green',
        value: 'Purple green',
        catalog: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.PurpleGreen,
        alternate: _types_common_types__WEBPACK_IMPORTED_MODULE_0__.NgGtdThemes.DeeppurpleAmber,
    },
];
const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const UIOk = { tipo: '🎯', accion: 'Cerrar' };
const UIEliminado = { tipo: '🎯', accion: '¡Eliminado!' };
const UINoEliminado = { tipo: '🎯', accion: '¡No Eliminado!' };
const UICreado = { tipo: '🎯', accion: '¡Creado!' };
const UINoCreado = { tipo: '🎯', accion: '¡No Creado!' };
const UIEditado = { tipo: '🎯', accion: 'Editado!' };
const UINoEditado = { tipo: '🎯', accion: '¡No Editado!' };


/***/ }),

/***/ 92404:
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
    // API_GATEWAY: 'https://devapi.fpicolombia.com'
    API_GATEWAY: 'http://localhost:8092'
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

/***/ 30783:
/*!***********************************!*\
  !*** ./projects/docs/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 87672);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92404);




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
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(30783)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map