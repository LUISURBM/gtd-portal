(self["webpackChunkng_gtd"] = self["webpackChunkng_gtd"] || []).push([["projects_docs_src_app_trabajador_trabajador_module_ts"],{

/***/ 99010:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/trabajador/trabajador-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajadorFormComponent": () => (/* binding */ TrabajadorFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 55906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../srv/in-mem-service */ 46556);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../srv/navigation.service */ 12358);
/* harmony import */ var _srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../srv/payroll/rest/api */ 43560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _guards_gtd_text_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/gtd-text.formatter */ 77590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _shared_unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/unicode-emoji.pipe */ 87919);





















const _c0 = ["formView"];
function TrabajadorFormComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " c\u00F3digo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_17_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.f.codigoTrabajador.errors == null ? null : ctx_r0.f.codigoTrabajador.errors.required);
} }
function TrabajadorFormComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " nombre es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_20_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f.primerNombre.errors == null ? null : ctx_r1.f.primerNombre.errors.required);
} }
function TrabajadorFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 50);
} }
function TrabajadorFormComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Apellido es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_26_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.f.primerApellido.errors == null ? null : ctx_r3.f.primerApellido.errors.required);
} }
function TrabajadorFormComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Segundo Apellido es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_29_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.f.segundoApellido.errors == null ? null : ctx_r4.f.segundoApellido.errors.required);
} }
function TrabajadorFormComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r29.id)("matTooltip", catalog_r29.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r29.description, " ");
} }
function TrabajadorFormComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " numero de documento es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_37_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.f.numeroDocumento.errors == null ? null : ctx_r6.f.numeroDocumento.errors.required);
} }
function TrabajadorFormComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r31.id)("matTooltip", catalog_r31.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r31.name, " ");
} }
function TrabajadorFormComponent_mat_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r32.id)("matTooltip", catalog_r32.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r32.name, " ");
} }
function TrabajadorFormComponent_div_82_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " direcci\u00F3n es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_82_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.f.sueldo.errors == null ? null : ctx_r11.f.sueldo.errors.required);
} }
function TrabajadorFormComponent_mat_option_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r34.id)("matTooltip", catalog_r34.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r34.name, " ");
} }
function TrabajadorFormComponent_mat_option_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r35.id)("matTooltip", catalog_r35.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r35.name, " ");
} }
function TrabajadorFormComponent_mat_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r36.id)("matTooltip", catalog_r36.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r36.name, " ");
} }
function TrabajadorFormComponent_mat_option_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r37.id)("matTooltip", catalog_r37.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r37.name, " ");
} }
function TrabajadorFormComponent_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " direcci\u00F3n es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_107_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.f.direccion.errors == null ? null : ctx_r16.f.direccion.errors.required);
} }
function TrabajadorFormComponent_mat_option_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r39.id)("matTooltip", catalog_r39.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r39.name, " ");
} }
function TrabajadorFormComponent_mat_option_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r40.id)("matTooltip", catalog_r40.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r40.name, " ");
} }
function TrabajadorFormComponent_mat_option_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r41.id)("matTooltip", catalog_r41.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r41.name, " ");
} }
function TrabajadorFormComponent_mat_option_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r42.id)("matTooltip", catalog_r42.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r42.name, " ");
} }
function TrabajadorFormComponent_mat_option_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r43.id)("matTooltip", catalog_r43.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r43.name, " ");
} }
function TrabajadorFormComponent_mat_option_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r44.id)("matTooltip", catalog_r44.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r44.name, " ");
} }
function TrabajadorFormComponent_mat_option_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalog_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catalog_r45.id)("matTooltip", catalog_r45.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catalog_r45.name, " ");
} }
function TrabajadorFormComponent_div_159_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " numero de documento es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TrabajadorFormComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrabajadorFormComponent_div_159_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r24.f.numeroCuenta.errors == null ? null : ctx_r24.f.numeroCuenta.errors.required);
} }
class TrabajadorFormComponent {
    constructor(dialogRef, data, route, inMemSrv, builder, navSrv, storedProcedureAPISrv, trabajadoresAPISrv) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.route = route;
        this.inMemSrv = inMemSrv;
        this.builder = builder;
        this.navSrv = navSrv;
        this.storedProcedureAPISrv = storedProcedureAPISrv;
        this.trabajadoresAPISrv = trabajadoresAPISrv;
        this.position = 'below';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(undefined),
            tipoDocumento: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            numeroDocumento: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            primerNombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            otrosNombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            primerApellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            segundoApellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            lugarTrabajoDepartamentoEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            lugarTrabajoDireccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            lugarTrabajoMunicipioCiudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            lugarTrabajoPais: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            altoRiesgoPension: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            codigoTrabajador: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            salarioIntegral: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false),
            subTipoTrabajador: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            sueldo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0),
            tipoContrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            tipoTrabajador: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            fechaIngreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date()),
            fechaRetiro: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date()),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            numeroCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            departamentoArea: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            eps: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            fondoPension: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            tipoCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            bancoPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            formaPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            metodoPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.step = 0;
        this.tiposDocumento = [];
        this.tiposContrato = [];
        this.tiposTrabajador = [];
        this.subTiposTrabajador = [];
        this.paises = [];
        this.departamentos = [];
        this.ciudades = [];
        this.fondosPensionNE = [];
        this.ePSsNE = [];
        this.departamentoAreasNE = [];
        this.formasPago = [];
        this.bancos = [];
        this.tiposCuenta = [];
        this.metodosPago = [];
        this.requestPaises = {
            body: {},
            header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarLugaresTrabajoPais',
            },
        };
        this.requestTiposIdentificaciones = {
            body: {},
            header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarTiposIdentificacionesNE',
            },
        };
        this.requestDepartamentos = (paisCode) => {
            return {
                body: {
                    params: {
                        numericCode: paisCode,
                    },
                },
                header: {
                    cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                    esquema: 'payroll',
                    procedimientoAlmacenado: 'ConsultaDepartamentoEstadoNE',
                },
            };
        };
        this.requestCiudades = (paisCode, department) => {
            return {
                body: {
                    params: {
                        countryCode: paisCode,
                        departamentoCode: department,
                    },
                },
                header: {
                    cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                    esquema: 'payroll',
                    procedimientoAlmacenado: 'ConsultaCiudadNE',
                },
            };
        };
        this.listadoTiposIdentificaciones = this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(this.requestTiposIdentificaciones, 'events', true, { httpHeaderAccept: 'application/json' });
        this.exectuteProcedureUsingPOST1 = (params) => this.storedProcedureAPISrv.exectuteProcedureUsingPOST1(params, 'events', true, { httpHeaderAccept: 'application/json' });
        this.listadoTiposContrato = this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({
            codigoCatalogo: 'TipoContratoTrabajadorNE',
        }));
        this.listadoTiposTrabajador = this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'TipoTrabajadorNE' }));
        this.listadoSubTiposTrabajador = this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'SubTipoTrabajadorNE' }));
        this.listadoPaises = this.exectuteProcedureUsingPOST1(this.requestPaises);
        this.listadoFondoPensionesNE = this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'FondoPensionNE' }));
        this.listadoEPSsNE = this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'EPSNE' }));
        this.listadoDepartamentoAreaNE = this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'DepartamentoAreaNE' }));
        this.listadoDepartamentos = (paisCode) => this.exectuteProcedureUsingPOST1(this.requestDepartamentos(paisCode));
        this.listadoCiudades = (paisCode, departamentoCode) => this.exectuteProcedureUsingPOST1(this.requestCiudades(paisCode, departamentoCode));
        this.listadoTiposCuenta = () => this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'TipoCuentaPagoNE' }));
        this.listadoBancos = () => this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'BancoPagoNE' }));
        this.listadoFormasPago = () => this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'FormaPagoNE' }));
        this.listadoMetodosPago = () => this.exectuteProcedureUsingPOST1((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.valoresCatalogos)({ codigoCatalogo: 'MetodoPagoNE' }));
        this.subscriptions = [];
        this.leerTiposDocumento = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.tiposDocumento = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerTiposContrato = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.tiposContrato = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerTiposTrabajador = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.tiposTrabajador = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerSubTiposTrabajador = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.subTiposTrabajador = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerPaises = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.paises = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerDepartamentos = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.departamentos = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerCiudades = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.ciudades = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerFondoPensionNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.fondosPensionNE = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerEPSNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.ePSsNE = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerDepartamentoAreaNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.departamentoAreasNE = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerTiposCuentaNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.tiposCuenta = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerFormasPagoNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.formasPago = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerMetodosPagoNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.metodosPago = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.leerBancosNE = (data) => {
            var _a, _b;
            if (!((_a = data.body) === null || _a === void 0 ? void 0 : _a.body))
                return;
            this.bancos = (_b = data.body) === null || _b === void 0 ? void 0 : _b.body;
        };
        this.subscriptions = [
            this.listadoTiposIdentificaciones.subscribe({
                next: this.leerTiposDocumento,
                error: (err) => console.log(err),
            }),
            this.listadoTiposContrato.subscribe({
                next: this.leerTiposContrato,
                error: (err) => console.log(err),
            }),
            this.listadoTiposTrabajador.subscribe({
                next: this.leerTiposTrabajador,
                error: (err) => console.log(err),
            }),
            this.listadoSubTiposTrabajador.subscribe({
                next: this.leerSubTiposTrabajador,
                error: (err) => console.log(err),
            }),
            this.listadoPaises.subscribe({
                next: this.leerPaises,
                error: (err) => console.log(err),
            }),
            this.listadoDepartamentoAreaNE.subscribe({
                next: this.leerDepartamentoAreaNE,
                error: (err) => console.log(err),
            }),
            this.listadoEPSsNE.subscribe({
                next: this.leerEPSNE,
                error: (err) => console.log(err),
            }),
            this.listadoFondoPensionesNE.subscribe({
                next: this.leerFondoPensionNE,
                error: (err) => console.log(err),
            }),
            this.listadoFormasPago().subscribe({
                next: this.leerFormasPagoNE,
                error: (err) => console.log(err),
            }),
            this.listadoMetodosPago().subscribe({
                next: this.leerMetodosPagoNE,
                error: (err) => console.log(err),
            }),
            this.listadoTiposCuenta().subscribe({
                next: this.leerTiposCuentaNE,
                error: (err) => console.log(err),
            }),
            this.listadoBancos().subscribe({
                next: this.leerBancosNE,
                error: (err) => console.log(err),
            }),
            this.form.controls['pais'].valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)((data) => this.listadoDepartamentos(data)))
                .subscribe({
                next: this.leerDepartamentos,
                error: (err) => console.log(err),
            }),
            this.form.controls['departamento'].valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)((data) => this.listadoCiudades(this.form.value.pais, data)))
                .subscribe({
                next: this.leerCiudades,
                error: (err) => console.log(err),
            }),
        ];
        if (data)
            this.form.patchValue(data);
        this.route.params.subscribe((params) => {
            const data1 = JSON.parse(params['data']);
            this.form.patchValue(data1);
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
    onNoClick() {
        this.dialogRef.close();
    }
    save() {
        console.log(this.form.value);
        const request = {
            entidad: {
                id: undefined,
                codigoTrabajador: this.form.value.codigoTrabajador,
                activo: this.form.value.activo,
                altoRiesgoPension: this.form.value.altoRiesgoPension,
                lugarTrabajoDepartamentoEstado: this.form.value.lugarTrabajoDepartamentoEstado,
                lugarTrabajoDireccion: this.form.value.lugarTrabajoDireccion,
                lugarTrabajoMunicipioCiudad: this.form.value.lugarTrabajoMunicipioCiudad,
                lugarTrabajoPais: this.form.value.lugarTrabajoPais,
                nominaIndividualId: this.form.value.nominaIndividualId,
                numeroDocumento: this.form.value.numeroDocumento,
                otrosNombres: this.form.value.otrosNombres,
                primerApellido: this.form.value.primerApellido,
                primerNombre: this.form.value.primerNombre,
                salarioIntegral: this.form.value.salarioIntegral,
                segundoApellido: this.form.value.segundoApellido,
                subTipoTrabajador: this.form.value.subTipoTrabajador,
                sueldo: this.form.value.sueldo,
                tipoContrato: this.form.value.tipoContrato,
                tipoDocumento: this.form.value.tipoDocumento,
                tipoTrabajador: this.form.value.tipoTrabajador,
                businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                enabled: true,
                eventDate: new Date().toDateString(),
                eventType: 'CREATE',
                eventUser: 'LFUM',
                removed: false,
                cuneNov: '',
                novedad: false,
            },
            headerRequest: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
            },
        };
        this.subscriptions.push(this.trabajadoresAPISrv
            .saveUsingPOST70(request, 'events', true)
            .subscribe({
            next: (v) => { },
        }));
        this.navSrv.navigate('/trabajador', this.form.value);
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
TrabajadorFormComponent.ɵfac = function TrabajadorFormComponent_Factory(t) { return new (t || TrabajadorFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_srv_in_mem_service__WEBPACK_IMPORTED_MODULE_1__.InMemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_3__.StoredProcedureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_3__.TrabajadoresService)); };
TrabajadorFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TrabajadorFormComponent, selectors: [["app-trabajador-form"]], viewQuery: function TrabajadorFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.formView = _t.first);
    } }, decls: 160, vars: 37, consts: [[1, "d-flex", "main-container", "main-form", 2, "overflow", "visible", 3, "formGroup"], [1, "card", "mat-card"], [1, "card-header", "mat-card-header", "card-header-primary", "card-header-icon"], [1, "card-title"], [1, "card-icon"], [1, "material-icons"], ["mat-dialog-title", ""], [1, "card-category"], [1, "card-body", "row"], [1, "col-6"], ["gtdTextFormatter", "", "matInput", "", "tabindex", "1", "formControlName", "codigoTrabajador", "placeholder", "C\u00F3digo de trabajador", "id", "codigoTrabajador", "type", "number", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["gtdTextFormatter", "", "matInput", "", "tabindex", "1", "formControlName", "primerNombre", "placeholder", "Primer Nombre", "id", "primerNombre", "type", "text", 1, "form-control"], [1, "col-12"], ["gtdTextFormatter", "", "matInput", "", "tabindex", "1", "formControlName", "otrosNombres", "placeholder", "Segundo Nombre", "id", "otrosNombres", "type", "text", 1, "form-control"], ["gtdTextFormatter", "", "matInput", "", "tabindex", "1", "formControlName", "primerApellido", "placeholder", "Apellido", "id", "primerApellido", "type", "text", 1, "form-control"], ["gtdTextFormatter", "", "matInput", "", "tabindex", "1", "formControlName", "segundoApellido", "placeholder", "Segundo Apellido", "id", "segundoApellido", "type", "text", 1, "form-control"], ["appearance", "fill", 1, "col-6"], ["formControlName", "tipoDocumento"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], ["matInput", "", "tabindex", "1", "formControlName", "numeroDocumento", "placeholder", "Numero de documento", "id", "numeroDocumento", "type", "number", 1, "form-control"], [1, "card-body"], ["appearance", "fill", 1, "col-6", "example-full-width"], ["matInput", "", "formControlName", "fechaIngreso", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["pickerIngreso", ""], ["matInput", "", "formControlName", "fechaRetiro", 3, "matDatepicker"], ["pickerRetiro", ""], ["appearance", "fill", 1, "col-4"], ["formControlName", "tipoContrato"], ["formControlName", "tipoTrabajador"], ["formControlName", "altoRiesgoPension", 1, "col-4"], [1, "col-4"], ["matInput", "", "tabindex", "1", "formControlName", "sueldo", "placeholder", "99999999", "id", "sueldo", "type", "number", 1, "form-control"], ["formControlName", "subTipoTrabajador"], ["formControlName", "salarioIntegral", 1, "col-4"], ["formControlName", "pais"], ["formControlName", "departamento"], ["formControlName", "ciudad"], ["matInput", "", "tabindex", "1", "formControlName", "direccion", "placeholder", "Ej. Av. 4 # 78 - 9", "id", "direccion", "type", "number", 1, "form-control"], ["formControlName", "departamentoArea"], ["formControlName", "eps"], ["formControlName", "fondoPension"], ["formControlName", "tipoCuenta"], ["formControlName", "bancoPago"], ["formControlName", "formaPago"], ["formControlName", "metodoPago"], [1, "col-8"], ["matInput", "", "tabindex", "1", "formControlName", "numeroCuenta", "placeholder", "Numero de cuenta", "id", "numeroCuenta", "type", "number", 1, "form-control"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value", "matTooltip"]], template: function TrabajadorFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "gtdEmoji");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Formulario Trabajador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Agregar Trabajador nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Informaci\u00F3n de Trabajador");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, TrabajadorFormComponent_div_17_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, TrabajadorFormComponent_div_20_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, TrabajadorFormComponent_div_23_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, TrabajadorFormComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, TrabajadorFormComponent_div_29_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Tipo de Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, TrabajadorFormComponent_mat_option_34_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, TrabajadorFormComponent_div_37_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "gtdEmoji");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Formulario Informaci\u00F3n laboral");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Agregar nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Informaci\u00F3n laboral");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Fecha de ingreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "mat-datepicker-toggle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "mat-datepicker", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Fecha de retiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "mat-datepicker-toggle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "mat-datepicker", 25, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Tipo de Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, TrabajadorFormComponent_mat_option_70_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Tipo trabajador");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, TrabajadorFormComponent_mat_option_75_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "mat-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Alto Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Sueldo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, TrabajadorFormComponent_div_82_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Subtipo de trabajador");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, TrabajadorFormComponent_mat_option_87_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "mat-checkbox", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Salario Integral");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, TrabajadorFormComponent_mat_option_94_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Departamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, TrabajadorFormComponent_mat_option_99_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "mat-select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](104, TrabajadorFormComponent_mat_option_104_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, TrabajadorFormComponent_div_107_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Departamento \u00C1rea");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "mat-select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, TrabajadorFormComponent_mat_option_112_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "E.P.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, TrabajadorFormComponent_mat_option_117_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Fondo Pensi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "mat-select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, TrabajadorFormComponent_mat_option_122_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](129, "gtdEmoji");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Formulario Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Agregar nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "Tipo de cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "mat-select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](141, TrabajadorFormComponent_mat_option_141_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "Banco");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "mat-select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](146, TrabajadorFormComponent_mat_option_146_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "Forma");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "mat-select", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, TrabajadorFormComponent_mat_option_151_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "M\u00E9todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "mat-select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, TrabajadorFormComponent_mat_option_156_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "mat-form-field", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](158, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](159, TrabajadorFormComponent_div_159_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](58);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 31, "1F468"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.codigoTrabajador.touched && ctx.f.codigoTrabajador.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.primerNombre.touched && ctx.f.primerNombre.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.otrosNombres.touched && ctx.f.otrosNombres.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.primerApellido.touched && ctx.f.primerApellido.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.segundoApellido.touched && ctx.f.segundoApellido.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tiposDocumento);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.numeroDocumento.touched && ctx.f.numeroDocumento.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](44, 33, "1F468"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tiposContrato);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tiposTrabajador);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.sueldo.touched && ctx.f.sueldo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.subTiposTrabajador);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.paises);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.departamentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ciudades);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.direccion.touched && ctx.f.direccion.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.departamentoAreasNE);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ePSsNE);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.fondosPensionNE);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](129, 35, "1F468"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tiposCuenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bancos);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.formasPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.metodosPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f.numeroCuenta.touched && ctx.f.numeroCuenta.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _guards_gtd_text_formatter__WEBPACK_IMPORTED_MODULE_4__.GtdTextFormatterDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip], pipes: [_shared_unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_5__.DecodeEmojiPipe], encapsulation: 2 });


/***/ }),

/***/ 86445:
/*!***********************************************************************!*\
  !*** ./projects/docs/src/app/trabajador/trabajador-view.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajadorViewComponent": () => (/* binding */ TrabajadorViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92404);
/* harmony import */ var _trabajador_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajador-data */ 55251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../srv/app-state.service */ 55419);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../srv/navigation.service */ 12358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/accordion/accordion.directive */ 75002);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/accordion/accordionlink.directive */ 42457);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/accordion/accordionanchor.directive */ 16671);
/* harmony import */ var _trabajador_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trabajador-form.component */ 99010);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _shared_unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/unicode-emoji.pipe */ 87919);

























function TrabajadorViewComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " arrow_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Nueva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function TrabajadorViewComponent_div_0_mat_chip_list_14_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function TrabajadorViewComponent_div_0_mat_chip_list_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-chip-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_mat_chip_list_14_Template_mat_chip_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r14.navSrv.navigate("/n\u00F3mina/deducciones/view/form"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u2795 Deducci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_mat_chip_list_14_Template_mat_chip_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r16.navSrv.navigate("/n\u00F3mina/devengos/view/form"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u2795 Devengo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_mat_chip_list_14_Template_mat_chip_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r17.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, TrabajadorViewComponent_div_0_mat_chip_list_14_span_10_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(state_r1.XSmall || state_r1.Small));
} }
function TrabajadorViewComponent_div_0_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r19.navSrv.navigate("/n\u00F3mina/deducciones/view/form"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u2795 Deducci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function TrabajadorViewComponent_div_0_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r21.navSrv.navigate("/n\u00F3mina/devengos/view/form"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u2795 Devengo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function TrabajadorViewComponent_div_0_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Pantalla completa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function TrabajadorViewComponent_div_0_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "close_fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Pantalla normal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function TrabajadorViewComponent_div_0_mat_icon_39_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_mat_icon_39_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](38); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); _r10.value = ""; return ctx_r23.filter(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function TrabajadorViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31); return _r9.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r27.navSrv.navigate("/n\u00F3mina/view"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "gtdEmoji");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Luis F. Urbina ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, TrabajadorViewComponent_div_0_ng_container_12_Template, 5, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, TrabajadorViewComponent_div_0_mat_chip_list_14_Template, 11, 1, "mat-chip-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-menu", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, TrabajadorViewComponent_div_0_button_20_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, TrabajadorViewComponent_div_0_button_21_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r28.toggleFullScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, TrabajadorViewComponent_div_0_ng_container_23_Template, 4, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, TrabajadorViewComponent_div_0_ng_container_24_Template, 4, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r29.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-sidenav-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "mat-sidenav", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "mat-nav-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Buscar...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, TrabajadorViewComponent_div_0_mat_icon_39_Template, 2, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "mat-list-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function TrabajadorViewComponent_div_0_Template_a_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](49); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); _r9.toggle(); return ctx_r30.scrollToElement(_r12.formView); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "mat-sidenav-content", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "app-trabajador-form", null, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](19);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](38);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 12, "1F468"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(state_r1.XSmall || state_r1.Small));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(state_r1.XSmall || state_r1.Small));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", state_r1.XSmall || state_r1.Small);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", state_r1.XSmall || state_r1.Small);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !state_r1.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", state_r1.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("mode", state_r1.XSmall || state_r1.Small ? "over" : "side")("opened", !(state_r1.XSmall || state_r1.Small));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r10.value);
} }
class TrabajadorViewComponent {
    constructor(builder, router, route, stateSrv, elRef, navSrv, http) {
        this.builder = builder;
        this.router = router;
        this.route = route;
        this.stateSrv = stateSrv;
        this.elRef = elRef;
        this.navSrv = navSrv;
        this.http = http;
        this.position = 'below';
        this.payrollDataUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_GATEWAY;
        this.toggleFullScreen = () => this.stateSrv.toggleFullScreen(this.elRef.nativeElement);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'content-Type': 'application/json',
                Authorization: '82e2f0e5-30b2-4e6b-a7ce-99fa407d3b68',
            }),
        };
        this.http
            .post(this.payrollDataUrl + 'documents/payrolls/procedure', {
            body: {
                params: {
                    trabajadorId: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                },
            },
            header: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
                esquema: 'payroll',
                procedimientoAlmacenado: 'ConsultarDevengadosTest',
            },
        }, httpOptions)
            .subscribe((data) => {
            console.dir(data);
            debugger;
        });
        this.menuItems = _trabajador_data__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS;
        this.form = this.builder.group({
            menuItem: builder.control(''),
            filtro: '',
            fechaCorte: new Date(),
            nominaGeneralId: undefined,
            devengadosId: undefined,
            id: builder.control(''),
            tipoDocumento: builder.control(''),
            numeroDocumento: builder.control(Number),
            primerNombre: builder.control(''),
            otrosNombres: builder.control(''),
            primerApellido: builder.control(''),
            segundoApellido: builder.control(''),
            lugarTrabajoDepartamentoEstado: builder.control(''),
            lugarTrabajoDireccion: builder.control(''),
            lugarTrabajoMunicipioCiudad: builder.control(''),
            lugarTrabajoPais: builder.control(''),
            altoRiesgoPension: builder.control(Boolean),
            codigoTrabajador: builder.control(Number),
            salarioIntegral: builder.control(''),
            subTipoTrabajador: builder.control(''),
            sueldo: builder.control(''),
            tipoContrato: builder.control(''),
            tipoTrabajador: builder.control(''),
        });
        this.route.params.subscribe((params) => {
            const data1 = params['data'];
            this.form.patchValue(data1);
        });
        this.form.valueChanges.subscribe((filter) => {
            this.filter(filter === null || filter === void 0 ? void 0 : filter.menuItem);
        });
    }
    ngOnInit() {
        console.log('configured routes: ', this.router.config);
    }
    onNoClick() { }
    save() { }
    get f() {
        return this.form.controls;
    }
    filter(menuItemName) {
        this.menuItems = _trabajador_data__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS;
        if (menuItemName) {
            this.menuItems = this.menuItems.filter((item) => {
                var _a;
                return (_a = item.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(menuItemName === null || menuItemName === void 0 ? void 0 : menuItemName.toLocaleLowerCase());
            });
        }
    }
    scrollToElement(el) {
        el.nativeElement.scrollIntoView();
    }
}
TrabajadorViewComponent.ɵfac = function TrabajadorViewComponent_Factory(t) { return new (t || TrabajadorViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_srv_app_state_service__WEBPACK_IMPORTED_MODULE_2__.AppStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient)); };
TrabajadorViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TrabajadorViewComponent, selectors: [["app-trabajador-view"]], decls: 2, vars: 3, consts: [["class", "m-0 d-flex main-container main-form", 4, "ngIf"], [1, "m-0", "d-flex", "main-container", "main-form"], ["color", "primary", 1, "topbar", "telative"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], [1, "navbar-header", "d-flex", "align-items-center", "ml-2"], [1, "ml-2", "navbar-brand", 3, "click"], [4, "ngIf"], ["fxFlex", ""], ["ariaOrientation", "horizontal", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", 3, "matMenuTriggerFor"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["style.marginTop.px", "0", 1, "page-container"], ["id", "formMenu", "fixedTopGap", "0", "opened", "true", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 2, "direction", "rtl", 3, "mode", "opened"], ["formMenu", ""], ["appAccordion", "", 2, "direction", "ltr"], [1, "m-0", "d-flex", "main-container", "main-form", 3, "formGroup"], [1, "find-menu-item", 2, "direction", "ltr", "padding", "0px 15px"], ["type", "text", "matInput", "", "formControlName", "menuItem", "placeholder", "Buscar"], ["buscar", ""], ["matSuffix", "", "mat-fab", "", 3, "click", 4, "ngIf"], ["appAccordionLink", "", "routerLinkActive", "selected"], ["appAccordionToggle", "", 1, "", 3, "click"], [1, "page-wrapper"], ["formView", ""], [1, "material-icons-outlined"], [1, "ml-2", "navbar-brand"], ["ariaOrientation", "horizontal"], ["color", "primary", "selected", "true", 3, "click"], [1, "primary", 3, "click"], ["matSuffix", "", "mat-fab", "", 3, "click"]], template: function TrabajadorViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, TrabajadorViewComponent_div_0_Template, 50, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx.stateSrv.themeState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_4__.AccordionDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionAnchorDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenavContent, _trabajador_form_component__WEBPACK_IMPORTED_MODULE_7__.TrabajadorFormComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _shared_unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_8__.DecodeEmojiPipe], encapsulation: 2 });


/***/ }),

/***/ 12690:
/*!******************************************************************!*\
  !*** ./projects/docs/src/app/trabajador/trabajador.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajadorComponent": () => (/* binding */ TrabajadorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _types_common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/common-types */ 55906);
/* harmony import */ var _trabajador_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajador-data */ 55251);
/* harmony import */ var _trabajador_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trabajador-form.component */ 99010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _srv_in_mem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../srv/in-mem-service */ 46556);
/* harmony import */ var _srv_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../srv/navigation.service */ 12358);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../srv/payroll/rest/api */ 43560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _shared_unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/unicode-emoji.pipe */ 87919);



























function TrabajadorComponent_mat_card_0_mat_card_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", dataSource_r1.loading);
} }
function TrabajadorComponent_mat_card_0_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajadorComponent_mat_card_0_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrabajadorComponent_mat_card_0_td_29_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const element_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.navSrv.navigate("/trabajador/form", ctx_r17.trabajadorData(element_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r16.codigoTrabajador);
} }
function TrabajadorComponent_mat_card_0_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Numero Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajadorComponent_mat_card_0_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r19.numeroDocumento);
} }
function TrabajadorComponent_mat_card_0_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajadorComponent_mat_card_0_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"]("", element_r20.primerNombre, " ", element_r20.otrosNombres, " ", element_r20.primerApellido, " ", element_r20.segundoApellido, "");
} }
function TrabajadorComponent_mat_card_0_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajadorComponent_mat_card_0_td_38_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrabajadorComponent_mat_card_0_td_38_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const element_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r24.navSrv.navigate("/trabajador/form", ctx_r24.trabajadorData(element_r21)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TrabajadorComponent_mat_card_0_td_38_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrabajadorComponent_mat_card_0_td_38_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r27.navSrv.navigate("/n\u00F3mina/individual"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "gtdEmoji");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "1F4C3"));
} }
function TrabajadorComponent_mat_card_0_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrabajadorComponent_mat_card_0_td_38_button_1_Template, 3, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrabajadorComponent_mat_card_0_td_38_button_2_Template, 4, 3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r21.id);
} }
function TrabajadorComponent_mat_card_0_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 34);
} }
function TrabajadorComponent_mat_card_0_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 35);
} }
function TrabajadorComponent_mat_card_0_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Sin datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 20, 200, 2000]; };
function TrabajadorComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "em", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "gtdEmoji");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Trabajadores");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Total creados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Encontrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function TrabajadorComponent_mat_card_0_Template_input_keyup_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrabajadorComponent_mat_card_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.navSrv.navigate("/trabajador/form"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, TrabajadorComponent_mat_card_0_mat_card_24_Template, 2, 1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](27, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, TrabajadorComponent_mat_card_0_th_28_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, TrabajadorComponent_mat_card_0_td_29_Template, 3, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](30, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, TrabajadorComponent_mat_card_0_th_31_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, TrabajadorComponent_mat_card_0_td_32_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, TrabajadorComponent_mat_card_0_th_34_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, TrabajadorComponent_mat_card_0_td_35_Template, 2, 4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](36, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, TrabajadorComponent_mat_card_0_th_37_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, TrabajadorComponent_mat_card_0_td_38_Template, 3, 2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, TrabajadorComponent_mat_card_0_tr_39_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, TrabajadorComponent_mat_card_0_tr_40_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, TrabajadorComponent_mat_card_0_tr_41_Template, 4, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "mat-paginator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, "1F468"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](dataSource_r1.datasource.data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (dataSource_r1 == null ? null : dataSource_r1.loading) != 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", dataSource_r1.datasource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", dataSource_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", dataSource_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0));
} }
class TrabajadorComponent {
    constructor(memSrv, navSrv, dialog, _snackBar, formBuilder, route, trabajadoresAPISrv) {
        this.memSrv = memSrv;
        this.navSrv = navSrv;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.formBuilder = formBuilder;
        this.route = route;
        this.trabajadoresAPISrv = trabajadoresAPISrv;
        this.dataSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject({
            datasource: new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource([]),
            displayedColumns: _trabajador_data__WEBPACK_IMPORTED_MODULE_1__.displayedColumns,
        });
        this.readResponseError = (err) => {
            console.log(err);
        };
        this.subscriptions = [];
        this.listado = (data) => this.trabajadoresAPISrv.listtrabajadorUsingGET1('events', true, {});
        this.readResponseTList = (data, message) => {
            var _a, _b;
            this.loading(((_a = data === null || data === void 0 ? void 0 : data.type) !== null && _a !== void 0 ? _a : 1) * 15);
            if (!data.body)
                return;
            this.loading(75);
            (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.initTable)(this.dataSource$, this.paginator, this.sort, (0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.gtdArrayToLowerCase)((_b = data === null || data === void 0 ? void 0 : data.body) === null || _b === void 0 ? void 0 : _b.bodyDto), _trabajador_data__WEBPACK_IMPORTED_MODULE_1__.displayedColumns);
            this.loading(100);
        };
        this.loading = (loading = 100) => this.dataSource$.next(Object.assign(Object.assign({}, this.dataSource$.value), { loading: loading }));
        this.form = this.formBuilder.group({
            filtro: '',
            fechaCorte: new Date(),
            nominaGeneralId: undefined,
            devengadosId: undefined,
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            tipoDocumento: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            numeroDocumento: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(Number),
            primerNombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            otrosNombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            primerApellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            segundoApellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            lugarTrabajoDepartamentoEstado: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            lugarTrabajoDireccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            lugarTrabajoMunicipioCiudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            lugarTrabajoPais: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            altoRiesgoPension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(Boolean),
            codigoTrabajador: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(Number),
            salarioIntegral: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            subTipoTrabajador: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            sueldo: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            tipoContrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            tipoTrabajador: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            numeroCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        });
        this.subscriptions = [
            this.form.valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((data) => {
                return this.listado(this.form.value);
            }))
                .subscribe({
                next: this.readResponseTList,
                complete: this.loading,
                error: this.readResponseError,
            }),
            this.route.params.subscribe((params) => {
                if (!params['data'] || params['data'] === 'undefined')
                    this.form.reset();
                else {
                    const data = JSON.parse(params['data']);
                    console.log(data);
                    this.form.patchValue(data);
                }
            }),
        ];
    }
    trabajadorData(element) {
        return JSON.stringify(element);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    add(trabajador) {
        if (!trabajador) {
            return;
        }
        const request = {
            entidad: {
                activo: trabajador.activo,
                altoRiesgoPension: trabajador.altoRiesgoPension,
                codigoTrabajador: trabajador.codigoTrabajador,
                lugarTrabajoDepartamentoEstado: trabajador.lugarTrabajoDepartamentoEstado,
                lugarTrabajoDireccion: trabajador.lugarTrabajoDireccion,
                lugarTrabajoMunicipioCiudad: trabajador.lugarTrabajoMunicipioCiudad,
                lugarTrabajoPais: trabajador.lugarTrabajoPais,
                numeroDocumento: trabajador.numeroDocumento,
                otrosNombres: trabajador.otrosNombres,
                primerApellido: trabajador.primerApellido,
                primerNombre: trabajador.primerNombre,
                salarioIntegral: trabajador.salarioIntegral,
                segundoApellido: trabajador.segundoApellido,
                subTipoTrabajador: trabajador.subTipoTrabajador,
                sueldo: trabajador.sueldo,
                tipoContrato: trabajador.tipoContrato,
                tipoDocumento: trabajador.tipoDocumento,
                tipoTrabajador: trabajador.tipoTrabajador,
                id: undefined,
                devengadosId: this.form.value.devengadosId,
                businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                enabled: true,
                eventDate: new Date().toDateString(),
                eventType: 'CREATE',
                eventUser: 'LFUM',
                removed: false,
                cuneNov: '',
                novedad: false,
            },
            headerRequest: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
            },
        };
        this.subscriptions.push(this.trabajadoresAPISrv
            .saveUsingPOST70(request, 'events', true, {
            httpHeaderAccept: 'application/json',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((response) => {
            if (!(response.type === 4))
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)();
            if (response.type === 4 && response.status == 200)
                this._snackBar.open(`${trabajador.primerNombre}`, 'creado!', {
                    duration: 50000,
                });
            return this.listado(this.form.value);
        }))
            .subscribe({
            next: this.readResponseTList,
            error: this.readResponseError,
        }));
    }
    delete(trabajador) {
        this.subscriptions.push((0,_types_common_types__WEBPACK_IMPORTED_MODULE_0__.confirm)(this.dialog, `¿Eliminar trabajador ${trabajador.primerNombre}?`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((confirmacion) => confirmacion
            ? this.trabajadoresAPISrv.deleteUsingDELETE70(trabajador.id, 'events', true, {
                httpHeaderAccept: 'application/json',
            })
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((data) => data.type === 4 && data.status === 200
            ? this.listado(this.form.value)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)()))
            .subscribe({
            next: (data) => this.readResponseTList(data, 'eliminada!'),
            error: (err) => {
                console.log(err);
            },
        }));
    }
    edit(trabajador) {
        const request = {
            entidad: {
                activo: trabajador.activo,
                altoRiesgoPension: trabajador.altoRiesgoPension,
                codigoTrabajador: trabajador.codigoTrabajador,
                lugarTrabajoDepartamentoEstado: trabajador.lugarTrabajoDepartamentoEstado,
                lugarTrabajoDireccion: trabajador.lugarTrabajoDireccion,
                lugarTrabajoMunicipioCiudad: trabajador.lugarTrabajoMunicipioCiudad,
                lugarTrabajoPais: trabajador.lugarTrabajoPais,
                numeroDocumento: trabajador.numeroDocumento,
                otrosNombres: trabajador.otrosNombres,
                primerApellido: trabajador.primerApellido,
                primerNombre: trabajador.primerNombre,
                salarioIntegral: trabajador.salarioIntegral,
                segundoApellido: trabajador.segundoApellido,
                subTipoTrabajador: trabajador.subTipoTrabajador,
                sueldo: trabajador.sueldo,
                tipoContrato: trabajador.tipoContrato,
                tipoDocumento: trabajador.tipoDocumento,
                tipoTrabajador: trabajador.tipoTrabajador,
                id: trabajador.id,
                businessSubscriptionId: '5B067D71-9EC0-4910-8D53-018850FDED4E',
                enabled: true,
                eventDate: new Date().toISOString(),
                eventType: 'CREATE',
                eventUser: 'LFUM',
                removed: false,
            },
            headerRequest: {
                cliente: 'FF841F95-5FDC-4879-A6BD-EE8C93A82943',
            },
        };
        this.subscriptions.push(this.trabajadoresAPISrv
            .updateUsingPUT70(request, 'events', true, {
            httpHeaderAccept: 'application/json',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((response) => {
            this._snackBar.open(`${trabajador.primerNombre}`, 'actualizado!', {
                duration: 50000,
            });
            return this.listado(this.form.value);
        }))
            .subscribe({
            next: this.readResponseTList,
            complete: this.loading,
            error: this.readResponseError,
        }));
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        let datasource = this.dataSource$.value.datasource;
        datasource.filter = filterValue.trim().toLowerCase();
        if (datasource.paginator) {
            datasource.paginator.firstPage();
        }
        this.dataSource$.next(Object.assign(Object.assign({}, this.dataSource$.value), { datasource: datasource }));
    }
    openDialog(trabajador) {
        console.log(trabajador);
        const dialogRef = this.dialog.open(_trabajador_form_component__WEBPACK_IMPORTED_MODULE_2__.TrabajadorFormComponent, {
            width: '450px',
            data: trabajador !== null && trabajador !== void 0 ? trabajador : { id: undefined, name: '' },
        });
        this.subscriptions.push(dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            if (result === null || result === void 0 ? void 0 : result.id)
                this.edit(result);
            else
                this.add(result);
        }));
    }
}
TrabajadorComponent.ɵfac = function TrabajadorComponent_Factory(t) { return new (t || TrabajadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_in_mem_service__WEBPACK_IMPORTED_MODULE_3__.InMemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_srv_payroll_rest_api__WEBPACK_IMPORTED_MODULE_5__.TrabajadoresService)); };
TrabajadorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TrabajadorComponent, selectors: [["app-trabajador"]], viewQuery: function TrabajadorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 2, vars: 3, consts: [["class", "m-3 card", 4, "ngIf"], [1, "m-3", "card"], [1, "card-header", "card-header-primary", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-title"], [1, "example-full-width"], ["type", "tel", "matInput", "", "placeholder", "Buscar por nombre \u00F3 c\u00F3digo", 3, "keyup"], ["input", ""], ["mat-icon-button", "", "matSuffix", "", "color", "primary", 3, "click"], ["class", "m-0", "style", "display: flex; justify-content: center; align-items: center", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "table-responsive-sm", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "codigoTrabajador"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "numeroDocumento"], ["matColumnDef", "nombre"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "m-0", 2, "display", "flex", "justify-content", "center", "align-items", "center"], ["mode", "determinate", 3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "click"], ["mat-header-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "tabindex", "4", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "primary", "tabindex", "4", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TrabajadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TrabajadorComponent_mat_card_0_Template, 43, 10, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.dataSource$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _shared_unicode_emoji_pipe__WEBPACK_IMPORTED_MODULE_6__.DecodeEmojiPipe], styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWJhamFkb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6InRyYWJhamFkb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tcmVsYXRpdmUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFkZC1jb250YWN0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogNTdweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 44030:
/*!***************************************************************!*\
  !*** ./projects/docs/src/app/trabajador/trabajador.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajadorModule": () => (/* binding */ TrabajadorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-material-module */ 14217);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 45175);
/* harmony import */ var _trabajador_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trabajador-form.component */ 99010);
/* harmony import */ var _trabajador_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trabajador-view.component */ 86445);
/* harmony import */ var _trabajador_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trabajador.component */ 12690);
/* harmony import */ var _trabajador_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trabajador.routing */ 57127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);














class TrabajadorModule {
}
TrabajadorModule.ɵfac = function TrabajadorModule_Factory(t) { return new (t || TrabajadorModule)(); };
TrabajadorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TrabajadorModule });
TrabajadorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_trabajador_routing__WEBPACK_IMPORTED_MODULE_5__.trabajadorRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TrabajadorModule, { declarations: [_trabajador_component__WEBPACK_IMPORTED_MODULE_4__.TrabajadorComponent,
        _trabajador_form_component__WEBPACK_IMPORTED_MODULE_2__.TrabajadorFormComponent,
        _trabajador_view_component__WEBPACK_IMPORTED_MODULE_3__.TrabajadorViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 57127:
/*!****************************************************************!*\
  !*** ./projects/docs/src/app/trabajador/trabajador.routing.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trabajadorRoutes": () => (/* binding */ trabajadorRoutes)
/* harmony export */ });
/* harmony import */ var _trabajador_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trabajador-form.component */ 99010);
/* harmony import */ var _trabajador_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajador-view.component */ 86445);
/* harmony import */ var _trabajador_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trabajador.component */ 12690);



const trabajadorRoutes = [
    {
        path: '',
        component: _trabajador_component__WEBPACK_IMPORTED_MODULE_2__.TrabajadorComponent,
        pathMatch: 'full',
    },
    {
        path: 'view',
        component: _trabajador_view_component__WEBPACK_IMPORTED_MODULE_1__.TrabajadorViewComponent,
    },
    {
        path: 'form',
        component: _trabajador_form_component__WEBPACK_IMPORTED_MODULE_0__.TrabajadorFormComponent,
    },
];


/***/ })

}]);
//# sourceMappingURL=projects_docs_src_app_trabajador_trabajador_module_ts.js.map