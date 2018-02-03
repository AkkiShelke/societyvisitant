webpackJsonp(["add-flat-owner.module"],{

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFlatOwnerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_flat_owner_component__ = __webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__add_flat_owner_component__["a" /* AddFlatOwnerComponent */]
    }
];
var AddFlatOwnerRoutingModule = (function () {
    function AddFlatOwnerRoutingModule() {
    }
    AddFlatOwnerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AddFlatOwnerRoutingModule);
    return AddFlatOwnerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n                <li class=\"breadcrumb-item\">\n                  <i class=\"fa fa-desktop\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/society_details']\">Society Details</a>\n              </li>\n                <li class=\"breadcrumb-item active\"><i class=\"fa fa-plus\"></i> Add Flat Details</li>\n            </ol>\n        </div>\n    </div><div class=\"row\">\n    <div class=\"col-md-2\">\n\n    </div>\n    <div class=\"col-md-8\">\n            <mat-horizontal-stepper [linear]=\"false\">\n                    <mat-step [stepControl]=\"firstFormGroup\">\n                        <div class=\"row\">\n                                <div class=\"col-md-3\"></div>\n                                <div class=\"col-md-7\">\n                              \n\n                                    <form [formGroup]=\"firstFormGroup\">\n                                            <ng-template matStepLabel>Fill out your Details</ng-template>\n                                            <mat-form-field>\n                                              <mat-select [(value)]=\"block\" placeholder=\"Select Block\" formControlName=\"blockCtrl\"  required>\n                                                  \n                                                  <mat-option value=\"option1\">Block A</mat-option>\n                                                  <mat-option value=\"option2\">Block B</mat-option>\n                                              </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                            <mat-form-field>\n                                              <input matInput placeholder=\"Owner Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n                                            </mat-form-field>\n                                  \n                                            \n                                            <mat-form-field>\n                                                <input  name=\"email\" matInput placeholder=\"Owner Email\" formControlName=\"emailCtrl\"  required>\n                                                 <mat-hint align=\"end\">abc@gmail.com</mat-hint> \n                                           \n                                              \n                                            </mat-form-field>\n                                            <mat-form-field>\n                                                <input matInput #input placeholder=\"Owner Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n                                                <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n                                            </mat-form-field>\n\n                                            \n                                        <br>\n                                                     <section class=\"example-section\">\n                                                      <label class=\"example-margin\">Flat status:</label>\n                                                      <mat-radio-group >\n                                                        <mat-radio-button class=\"example-margin\" checked value=\"active\">Active</mat-radio-button>\n                                                        <mat-radio-button class=\"example-margin\" value=\"Inactive\">Inactive</mat-radio-button>\n                                                      </mat-radio-group>\n                                                    </section>\n                                                \n                                            \n                                            <br>\n                                              <div>\n                                              <button class=\"buttoncolor\" style=\"color:white;\" mat-button matStepperNext>Next</button>\n                                            </div>\n                                          </form>\n                            </div>\n                        </div>\n                 \n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                        <mat-card>\n                \n                            <div class=\"row\">\n                                    <div class=\"col-md-3\"></div>\n                                    <div class=\"col-md-8 \">\n                                        <form [formGroup]=\"secondFormGroup\">\n                                                <ng-template matStepLabel>Fill out your Addresss</ng-template>\n                                                \n        \n                                                <p>      <mat-slide-toggle #rented> Flat On Rent!</mat-slide-toggle>\n                                                    <!-- <label><input #rented type=\"checkbox\" name=\"size\" (change)=\"0\" > On Rent</label> -->\n                                                </p>\n                                    \n                                               <div *ngIf=\"rented.checked\">\n                                                    <mat-form-field>\n                                                            <input   matInput placeholder=\"Tenant Name\"  required>\n                                                    </mat-form-field>\n                                                    <mat-form-field>\n                                                            <input   matInput placeholder=\"Email\"  required>\n                                                    </mat-form-field>\n                                                    <mat-form-field>\n                                                            <input   matInput placeholder=\"Contact\"  required>\n                                                    </mat-form-field>\n                                               </div>\n\n                                                <label>Flat Member Details:</label>\n                                                <div class=\"row\" #parent></div>\n                                                <button type=\"button\" \n                                                (click)=\"addComponent()\" class=\" flow-right btn btn-success buttoncolor\" style=\"color:white;\" mat-button ><i class=\"fa fa-plus\"></i> Add Member</button>\n                                               <br>\n                                                <br>\n                                                 <button class=\"buttoncolor\" style=\"color:white;\" mat-button matStepperPrevious>Back</button>\n                                            <button class=\"buttoncolor\" style=\"color:white;\" mat-button matStepperNext>Submit</button>\n                                            </form>\n                                          </div>\n                                                  \n                                </div>\n                        </mat-card>\n                  \n                    </mat-step>\n                    <mat-step>\n                      <ng-template matStepLabel>Done</ng-template>\n                      Registration successfull.\n                      \n                    </mat-step>\n                  </mat-horizontal-stepper>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px; }\n\n.example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.mat-form-field {\n  width: 100%; }\n\n.section {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFlatOwnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address__ = __webpack_require__("../../../../../src/app/layout/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamicfield_component__ = __webpack_require__("../../../../../src/app/layout/add-flat-owner/dynamicfield.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddFlatOwnerComponent = (function () {
    function AddFlatOwnerComponent(_formBuilder, _cfr) {
        this._formBuilder = _formBuilder;
        this._cfr = _cfr;
        this.align = 'start';
        this.address = new __WEBPACK_IMPORTED_MODULE_3__address__["a" /* Address */]();
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email,
        ]);
    }
    AddFlatOwnerComponent.prototype.ngOnInit = function () {
        this.addComponent();
        this.firstFormGroup = this._formBuilder.group({
            blockCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            emailCtrl: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({});
    };
    AddFlatOwnerComponent.prototype.addComponent = function () {
        var comp = this._cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__dynamicfield_component__["a" /* ExpComponent */]);
        var expComponent = this.container.createComponent(comp);
        expComponent.instance._ref = expComponent;
    };
    AddFlatOwnerComponent.prototype.removeObject = function () {
        this._ref.destroy();
    };
    //Contact Validation
    AddFlatOwnerComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Only String (Name)
    AddFlatOwnerComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('parent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */])
    ], AddFlatOwnerComponent.prototype, "container", void 0);
    AddFlatOwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-flat-owner',
            template: __webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AddFlatOwnerComponent);
    return AddFlatOwnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFlatOwnerModule", function() { return AddFlatOwnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_flat_owner_component__ = __webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_flat_owner_routing_module__ = __webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dynamicfield_component__ = __webpack_require__("../../../../../src/app/layout/add-flat-owner/dynamicfield.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddFlatOwnerModule = (function () {
    function AddFlatOwnerModule() {
    }
    AddFlatOwnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__add_flat_owner_routing_module__["a" /* AddFlatOwnerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_index__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatSlideToggleModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__dynamicfield_component__["a" /* ExpComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_flat_owner_component__["a" /* AddFlatOwnerComponent */], __WEBPACK_IMPORTED_MODULE_7__dynamicfield_component__["a" /* ExpComponent */]]
        })
    ], AddFlatOwnerModule);
    return AddFlatOwnerModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/dynamicfield.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"pullright\">\n    <mat-form-field  style=\"width:100%;\">\n        <input matInput placeholder=\"Member Name\"   required>\n</mat-form-field>\n<mat-form-field  style=\"width:100%;\">\n        <input matInput placeholder=\"Email\"    required>\n</mat-form-field>\n<mat-form-field  style=\"width:100%;\">\n        <input matInput placeholder=\"Contact\" required>\n</mat-form-field>\n\n<button class=\"pull-right btn btn-danger buttoncolor\"  (click)=\"removeObject()\" style=\"color:white;\" mat-button > X</button>\n\n          \n                    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/dynamicfield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpComponent = (function () {
    function ExpComponent() {
    }
    ExpComponent.prototype.removeObject = function () {
        this._ref.destroy();
    };
    ExpComponent.prototype.save = function () {
        alert('Saved Successfully!');
    };
    ExpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exp',
            template: __webpack_require__("../../../../../src/app/layout/add-flat-owner/dynamicfield.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ExpComponent);
    return ExpComponent;
}());



/***/ })

});
//# sourceMappingURL=add-flat-owner.module.chunk.js.map