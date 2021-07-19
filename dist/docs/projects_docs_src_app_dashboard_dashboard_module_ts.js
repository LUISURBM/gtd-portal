(self["webpackChunkng_gtd"] = self["webpackChunkng_gtd"] || []).push([["projects_docs_src_app_dashboard_dashboard_module_ts"],{

/***/ 32307:
/*!****************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/activity/activity-data.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activities": () => (/* binding */ activities)
/* harmony export */ });
const activities = [
    {
        name: 'Nirav joshi',
        image: 'assets/images/users/1.jpg',
        commentTime: '5 minute ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
        bottomImage: 'assets/images/big/img2.jpg',
        buttonColor: ''
    },
    {
        name: 'Sunil joshi',
        image: 'assets/images/users/2.jpg',
        commentTime: '3 minute ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
        bottomImage: '',
        buttonColor: 'primary'
    },
    {
        name: 'Vishal Bhatt',
        image: 'assets/images/users/3.jpg',
        commentTime: '1 minute ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
        bottomImage: 'assets/images/big/img1.jpg',
        buttonColor: ''
    },
    {
        name: 'Dhiren Adesara',
        image: 'assets/images/users/4.jpg',
        commentTime: '7 minute ago',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
        bottomImage: '',
        buttonColor: 'warn'
    }
];


/***/ }),

/***/ 22175:
/*!*********************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/activity/activity.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityComponent": () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var _activity_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-data */ 32307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);











function ActivityComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", activity_r1.bottomImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ActivityComponent_div_4_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Check Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("color", activity_r1.buttonColor);
} }
function ActivityComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ActivityComponent_div_4_div_10_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ActivityComponent_div_4_button_11_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", activity_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", activity_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", activity_r1.commentTime, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r1.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", activity_r1.bottomImage !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", activity_r1.bottomImage === "");
} }
class ActivityComponent {
    constructor() {
        this.activityData = _activity_data__WEBPACK_IMPORTED_MODULE_0__.activities;
    }
    ngOnInit() {
    }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(); };
ActivityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], decls: 35, vars: 1, consts: [["label", "Activity"], ["class", "d-flex no-blcok", 4, "ngFor", "ngForOf"], ["label", "Profile"], [1, "basic-form"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Some text value"], ["matInput", "", "placeholder", "EmailId", "type", "email"], ["matInput", "", "placeholder", "Password", "type", "password"], ["placeholder", "Select"], ["value", "option"], ["matInput", "", "placeholder", "Textarea"], ["mat-raised-button", "", "color", "primary"], [1, "d-flex", "no-blcok"], [1, "m-r-20"], ["width", "50", "alt", "Image", 1, "img-circle", 3, "src"], [1, "p-b-20", "b-b", "m-b-30"], [1, "m-0"], [1, "text-muted"], ["fxLayout", "row wrap", 4, "ngIf"], ["mat-raised-button", "", 3, "color", 4, "ngIf"], ["fxFlex.gt-sm", "20", "fxFlex", "100"], ["alt", "Image", 1, "img-responsive", "rounded", 3, "src"], ["mat-raised-button", "", 3, "color"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ActivityComponent_div_4_Template, 12, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Form Basic Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Option2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Option3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 78170:
/*!***************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/contacts/contact-data.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
const contacts = [
    {
        image: 'assets/images/users/1.jpg',
        class: 'online',
        name: 'Pavan kumar',
        email: 'info@wrappixel.com'
    },
    {
        image: 'assets/images/users/2.jpg',
        class: 'busy',
        name: 'Sonu Nigam',
        email: 'pamela1987@gmail.com'
    },
    {
        image: 'assets/images/users/4.jpg',
        class: 'offline',
        name: 'Pavan kumar',
        email: 'kat@gmail.com'
    },
    {
        image: 'assets/images/users/5.jpg',
        class: 'online',
        name: 'Andrew',
        email: 'info@wrappixel.com'
    },
    {
        image: 'assets/images/users/6.jpg',
        class: 'busy',
        name: 'Jonathan Joe',
        email: 'jj@gmail.com'
    },
];


/***/ }),

/***/ 46059:
/*!*********************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/contacts/contacts.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _contact_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-data */ 78170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





function ContactsComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", contact_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("profile-status pull-right ", contact_r1.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", contact_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r1.email);
} }
class ContactsComponent {
    constructor() {
        this.contactsData = _contact_data__WEBPACK_IMPORTED_MODULE_0__.contacts;
    }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 11, vars: 1, consts: [[1, "p-20", "bg-info", "position-relative"], [1, "card-title", "text-white", "m-0"], [1, "card-subtitle", "text-white", "m-0", "op-5"], ["mat-mini-fab", "", "color", "accent", 1, "add-contact"], [1, "message-box", "contact-box", "p-20"], [1, "message-widget", "contact-widget"], ["href", "#", 4, "ngFor", "ngForOf"], ["href", "#"], [1, "user-img"], ["alt", "user", 1, "img-circle", 3, "src"], [1, "mail-contnet"], [1, "mail-desc"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Checkout my contacts here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContactsComponent_a_10_Template, 9, 6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contactsData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 37571:
/*!*******************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/metrics/metrics.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsComponent": () => (/* binding */ MetricsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);


class MetricsComponent {
    ngAfterViewInit() { }
}
MetricsComponent.ɵfac = function MetricsComponent_Factory(t) { return new (t || MetricsComponent)(); };
MetricsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetricsComponent, selectors: [["app-metrics-overview-grap"]], decls: 64, vars: 0, consts: [["fxLayout", "row wrap", 1, "d-flex", "mt-3"], [1, "col-lg-3", "col-md-6", "col-sm-6", "d-flex", "justify-content-center"], [1, "mat-card", "card", "card-stats", "w-100"], [1, "card-header", "card-header-warning", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-category"], [1, "card-title"], [1, "card-footer"], [1, "stats"], [1, "material-icons", "text-danger"], ["href", "/n\u00F3mina"], [1, "card-header", "card-header-success", "card-header-icon"], [1, "card-header", "card-header-danger", "card-header-icon"], [1, "card-header", "card-header-info", "card-header-icon"]], template: function MetricsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "drive_folder_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total a pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$534'098.010 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ver m\u00E1s...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total vacaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "$1'018.010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00FAltimas 24h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Total devengados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "$475'098.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " sin procesar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "money_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total deducciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$42'087.999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Actualizado hace 1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRyaWNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 54316:
/*!***********************************************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/payment-overview-grap/payment-overview-grap.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentOverviewGrapComponent": () => (/* binding */ PaymentOverviewGrapComponent)
/* harmony export */ });
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ 30159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../srv/payroll/rest/api */ 43560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 93738);





const data = __webpack_require__(/*! ./data.json */ 19327);
class PaymentOverviewGrapComponent {
    constructor(storedProcedureAPISrv) {
        this.storedProcedureAPISrv = storedProcedureAPISrv;
        this.type = angular_google_charts__WEBPACK_IMPORTED_MODULE_1__.ChartType.AreaChart;
        this.data = [
            ['2015', 930, 540, 900, 1890],
            ['2016', 1030, 399, 900, 1890],
            ['2017', 985, 500, 900, 1890],
            ['2018', 1000, 540, 900, 1890],
            ['2019', 1170, 560, 900, 1890],
            ['2020', 660, 1120, 900, 1890],
        ];
        this.columnNames = ['Corte', 'Devengados', 'Deducciones', 'Total nómina', 'Total vacaciones'];
        this.options = {
            legend: { position: 'bottom', alignment: 'start' },
            isStacked: true,
            hAxis: {
                title: 'Year',
            },
            width: '100%',
            height: 350,
            backgroundColor: { fill: 'transparent' }
        };
        this.width = 500;
        this.height = 500;
        const request = {
            body: {
                params: {
                    businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                    grafica: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                },
            },
            header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultaHistoricosTest',
            },
        };
        storedProcedureAPISrv
            .exectuteProcedureUsingPOST1(request, 'events', true, {
            httpHeaderAccept: 'application/json',
        })
            .subscribe({
            next: (data) => {
                var _a, _b, _c, _d;
                console.log(data);
                let newarray = (_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.body) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.map) === null || _c === void 0 ? void 0 : _c.call(_b, (element) => {
                    var key, keys = Object.keys(element), asArray = [];
                    var n = keys.length;
                    var newobj = {};
                    while (n--) {
                        key = keys[n];
                        newobj[key.toLowerCase()] = element[key];
                        asArray.push(key);
                        asArray.push(element[key]);
                    }
                    return asArray;
                })) !== null && _d !== void 0 ? _d : data;
                // console.log(newarray);
                // this.data = newarray;
            },
            error: (err) => {
                // console.log(err);
            }
        });
    }
    ngOnInit() { }
}
PaymentOverviewGrapComponent.ɵfac = function PaymentOverviewGrapComponent_Factory(t) { return new (t || PaymentOverviewGrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_0__.StoredProcedureService)); };
PaymentOverviewGrapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentOverviewGrapComponent, selectors: [["app-payment-overview-grap"]], decls: 16, vars: 6, consts: [[1, "d-flex", "flex-wrap"], [1, "ml-auto"], [1, "list-inline"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-10", "m-r-10"], [1, "barchrt", 2, "height", "448px"], ["id", "piechart", 3, "type", "data", "columns", "options", "width", "height"]], template: function PaymentOverviewGrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Historico de pagos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Total pagos a corte");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "May");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "google-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.type)("data", ctx.data)("columns", ctx.columnNames)("options", ctx.options)("width", ctx.width)("height", ctx.height);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, angular_google_charts__WEBPACK_IMPORTED_MODULE_1__.GoogleChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LW92ZXJ2aWV3LWdyYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 40526:
/*!***********************************************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/payroll-overview-grap/payroll-overview-grap.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollOverviewGrapComponent": () => (/* binding */ PayrollOverviewGrapComponent)
/* harmony export */ });
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ 30159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../srv/payroll/rest/api */ 43560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 93738);





const data = __webpack_require__(/*! ./data.json */ 20201);
class PayrollOverviewGrapComponent {
    constructor(storedProcedureAPISrv) {
        this.storedProcedureAPISrv = storedProcedureAPISrv;
        this.type = angular_google_charts__WEBPACK_IMPORTED_MODULE_1__.ChartType.PieChart;
        this.data = [
            ['Indefinido', 45],
            ['Término fijo', 26],
            ['Obra o labor', 12],
            ['Prestación de servicios', 8],
            ['Aprendizaje', 8]
        ];
        this.columnNames = ['Browser', 'Percentage'];
        this.options = {
            legend: { position: 'bottom', alignment: 'start' },
            width: '100%',
            height: '300px',
            backgroundColor: { fill: 'transparent' }
        };
        this.width = 100;
        this.height = 300;
        const request = {
            body: {
                params: {
                    businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                    grafica: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                },
            },
            header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultaGraficosTest',
            },
        };
        storedProcedureAPISrv
            .exectuteProcedureUsingPOST1(request, 'events', true, {
            httpHeaderAccept: 'application/json',
        })
            .subscribe({
            next: (data) => {
                var _a, _b, _c, _d;
                console.log(data);
                let newarray = (_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.body) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.map) === null || _c === void 0 ? void 0 : _c.call(_b, (element) => {
                    var key, keys = Object.keys(element), asArray = [];
                    var n = keys.length;
                    var newobj = {};
                    while (n--) {
                        key = keys[n];
                        newobj[key.toLowerCase()] = element[key];
                        asArray.push(key);
                        asArray.push(element[key]);
                    }
                    return asArray;
                })) !== null && _d !== void 0 ? _d : data;
                // console.log(newarray);
                // this.data = newarray;
            },
            error: (err) => {
                // console.log(err);
            }
        });
    }
    ngOnInit() {
    }
}
PayrollOverviewGrapComponent.ɵfac = function PayrollOverviewGrapComponent_Factory(t) { return new (t || PayrollOverviewGrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_0__.StoredProcedureService)); };
PayrollOverviewGrapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PayrollOverviewGrapComponent, selectors: [["app-payroll-overview-grap"]], decls: 16, vars: 5, consts: [[1, "d-flex", "flex-wrap"], [1, "ml-auto"], [1, "list-inline"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-20", "m-r-10"], ["id", "chart_wrap", 1, "barchrt", 2, "height", "448px"], ["id", "piechart", 3, "type", "data", "columns", "options", "height"]], template: function PayrollOverviewGrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Personas X Tipo de Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Total de personas por tipo de contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "May");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "google-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.type)("data", ctx.data)("columns", ctx.columnNames)("options", ctx.options)("height", ctx.height);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, angular_google_charts__WEBPACK_IMPORTED_MODULE_1__.GoogleChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLW92ZXJ2aWV3LWdyYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 39087:
/*!**************************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/sales-overview-grap/chart-values.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BAR_CHART_1": () => (/* binding */ BAR_CHART_1),
/* harmony export */   "BAR_CHART_0": () => (/* binding */ BAR_CHART_0)
/* harmony export */ });
const BAR_CHART_1 = {
    type: 'Bar',
    data: {
        labels: [
            'HHRR (12)',
            'ID (1)',
            'Infrastructura (7)',
            'Comercial (5)',
            'Soporte (3)',
            'Otros (8)',
        ],
        series: [
            [800000, 1200000, 1400000, 1300000, 90000, 9000],
            [200000, 400000, 500000, 300000, 90000, 9000],
            [100000, 200000, 400000, 600000, 90000, 9000],
        ],
    },
    options: {
        seriesBarDistance: 15,
        stackBars: true,
        axisX: {
            showGrid: false,
            offset: 60,
        },
        axisY: {
            showGrid: true,
            offset: 40,
        },
        height: 480
    },
    responsiveOptions: [
        [
            'screen and (min-width: 640px)',
            {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 1 === 0 ? `${value}` : '';
                    },
                },
            },
        ],
    ],
};
const BAR_CHART_0 = {
    type: 'Bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        series: [
            [9, 4, 11, 7, 10, 12],
            [3, 2, 9, 5, 8, 10],
        ],
    },
    options: {
        seriesBarDistance: 15,
        high: 12,
        axisX: {
            showGrid: false,
            offset: 60,
        },
        axisY: {
            showGrid: true,
            offset: 40,
        },
        height: 360,
    },
    responsiveOptions: [
        [
            'screen and (min-width: 640px)',
            {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 1 === 0 ? `${value}` : '';
                    },
                },
            },
        ],
    ],
};


/***/ }),

/***/ 72164:
/*!*******************************************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/sales-overview-grap/sales-overview-grap.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOverviewGrapComponent": () => (/* binding */ SalesOverviewGrapComponent)
/* harmony export */ });
/* harmony import */ var _chart_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-values */ 39087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ 14735);




const data = __webpack_require__(/*! ./data.json */ 39279);
class SalesOverviewGrapComponent {
    constructor() {
        this.barChart1 = _chart_values__WEBPACK_IMPORTED_MODULE_0__.BAR_CHART_1;
    }
    ngOnInit() {
    }
}
SalesOverviewGrapComponent.ɵfac = function SalesOverviewGrapComponent_Factory(t) { return new (t || SalesOverviewGrapComponent)(); };
SalesOverviewGrapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SalesOverviewGrapComponent, selectors: [["app-sales-overview-grap"]], decls: 20, vars: 5, consts: [[1, "d-flex", "flex-wrap"], [1, "ml-auto"], [1, "list-inline"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-10", "m-r-10"], [1, "text-info", "m-0"], [1, "barchrt", 2, "height", "448px"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"]], template: function SalesOverviewGrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Total pagado por \u00E1rea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Corte a corte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.barChart1.data)("type", ctx.barChart1.type)("options", ctx.barChart1.options)("responsiveOptions", ctx.barChart1.responsiveOptions)("events", ctx.barChart1.events);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, ng_chartist__WEBPACK_IMPORTED_MODULE_3__.ChartistComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vdmVydmlldy1ncmFwLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 30235:
/*!*******************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/sticker/sticker.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StickerComponent": () => (/* binding */ StickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);




class StickerComponent {
    constructor() { }
    ngOnInit() {
    }
}
StickerComponent.ɵfac = function StickerComponent_Factory(t) { return new (t || StickerComponent)(); };
StickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickerComponent, selectors: [["app-sticker"]], decls: 28, vars: 0, consts: [[1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Photo of a Shiba Inu"], [1, "pro-img"], ["src", "assets/images/users/4.jpg", "width", "100", "alt", "user", 1, "img-circle"], [1, "m-b-0"], [1, "m-t-0"], ["mat-raised-button", "", "color", "warn"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100"], [1, "m-0", "font-light"]], template: function StickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angela Dominic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Web Designer & Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "23,469");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6035");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGlja2VyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 62642:
/*!*******************************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/visiter-graph/visiter-graph.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisiterGraphComponent": () => (/* binding */ VisiterGraphComponent)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ 58096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ 14735);




class VisiterGraphComponent {
    constructor() {
        this.donuteChart1 = {
            type: 'Pie',
            data: _data_json__WEBPACK_IMPORTED_MODULE_0__.Pie,
            options: {
                donut: true,
                height: 260,
                showLabel: false,
                donutWidth: 20
            }
        };
    }
    ngOnInit() {
    }
}
VisiterGraphComponent.ɵfac = function VisiterGraphComponent_Factory(t) { return new (t || VisiterGraphComponent)(); };
VisiterGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisiterGraphComponent, selectors: [["app-visiter-graph"]], decls: 23, vars: 5, consts: [[1, "piechart", 2, "height", "448px"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "list-inline", "text-center"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-10", "m-r-10"], [1, "text-info", "m-0"], [1, "text-purple", "m-0"]], template: function VisiterGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nuestro Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Todas las \u00E1reas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "x-chartist", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Comercial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Soporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.donuteChart1.data)("type", ctx.donuteChart1.type)("options", ctx.donuteChart1.options)("responsiveOptions", ctx.donuteChart1.responsiveOptions)("events", ctx.donuteChart1.events);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, ng_chartist__WEBPACK_IMPORTED_MODULE_3__.ChartistComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGVyLWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 16388:
/*!****************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _dashboard_components_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-components/metrics/metrics.component */ 37571);
/* harmony import */ var _dashboard_components_payment_overview_grap_payment_overview_grap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-components/payment-overview-grap/payment-overview-grap.component */ 54316);
/* harmony import */ var _dashboard_components_payroll_overview_grap_payroll_overview_grap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-components/payroll-overview-grap/payroll-overview-grap.component */ 40526);
/* harmony import */ var _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-components/sales-overview-grap/sales-overview-grap.component */ 72164);
/* harmony import */ var _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-components/visiter-graph/visiter-graph.component */ 62642);







class DashboardComponent {
    ngAfterViewInit() { }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 11, vars: 0, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "33", "fxFlex.gt-xs", "100"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-metrics-overview-grap");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-payment-overview-grap");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-payroll-overview-grap");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-sales-overview-grap");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-visiter-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _dashboard_components_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_0__.MetricsComponent, _dashboard_components_payment_overview_grap_payment_overview_grap_component__WEBPACK_IMPORTED_MODULE_1__.PaymentOverviewGrapComponent, _dashboard_components_payroll_overview_grap_payroll_overview_grap_component__WEBPACK_IMPORTED_MODULE_2__.PayrollOverviewGrapComponent, _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_3__.SalesOverviewGrapComponent, _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_4__.VisiterGraphComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 87552:
/*!*************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-google-charts */ 30159);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-material-module */ 14217);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 45175);
/* harmony import */ var _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-components/activity/activity.component */ 22175);
/* harmony import */ var _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-components/contacts/contacts.component */ 46059);
/* harmony import */ var _dashboard_components_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-components/metrics/metrics.component */ 37571);
/* harmony import */ var _dashboard_components_payment_overview_grap_payment_overview_grap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-components/payment-overview-grap/payment-overview-grap.component */ 54316);
/* harmony import */ var _dashboard_components_payroll_overview_grap_payroll_overview_grap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-components/payroll-overview-grap/payroll-overview-grap.component */ 40526);
/* harmony import */ var _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-components/sales-overview-grap/sales-overview-grap.component */ 72164);
/* harmony import */ var _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-components/sticker/sticker.component */ 30235);
/* harmony import */ var _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-components/visiter-graph/visiter-graph.component */ 62642);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard.component */ 16388);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard.routing */ 93894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);



















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
            ng_chartist__WEBPACK_IMPORTED_MODULE_15__.ChartistModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_11__.DashboardRoutes),
            angular_google_charts__WEBPACK_IMPORTED_MODULE_17__.GoogleChartsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.DashboardComponent,
        _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_7__.SalesOverviewGrapComponent,
        _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_9__.VisiterGraphComponent,
        _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_8__.StickerComponent,
        _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__.ContactsComponent,
        _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_2__.ActivityComponent,
        _dashboard_components_payroll_overview_grap_payroll_overview_grap_component__WEBPACK_IMPORTED_MODULE_6__.PayrollOverviewGrapComponent,
        _dashboard_components_payment_overview_grap_payment_overview_grap_component__WEBPACK_IMPORTED_MODULE_5__.PaymentOverviewGrapComponent,
        _dashboard_components_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_4__.MetricsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_15__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, angular_google_charts__WEBPACK_IMPORTED_MODULE_17__.GoogleChartsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 93894:
/*!**************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard.routing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 16388);

const DashboardRoutes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    }];


/***/ }),

/***/ 19327:
/*!**********************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/payment-overview-grap/data.json ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},"Pie":{"series":[20,10,30,40]}}');

/***/ }),

/***/ 20201:
/*!**********************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/payroll-overview-grap/data.json ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},"Pie":{"series":[20,10,30,40]}}');

/***/ }),

/***/ 39279:
/*!********************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/sales-overview-grap/data.json ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},"Pie":{"series":[20,10,30,40]}}');

/***/ }),

/***/ 58096:
/*!**************************************************************************************!*\
  !*** ./projects/docs/src/app/dashboard/dashboard-components/visiter-graph/data.json ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},"Pie":{"series":[20,10,30,40]}}');

/***/ })

}]);
//# sourceMappingURL=projects_docs_src_app_dashboard_dashboard_module_ts.js.map