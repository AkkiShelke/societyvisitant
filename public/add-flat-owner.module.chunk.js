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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AddFlatOwnerRoutingModule);
    return AddFlatOwnerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div [@routerTransition] class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n                </li>\n\n                <li class=\"breadcrumb-item active\"><i class=\"fa fa-plus\"></i> Add Flat Details</li>\n            </ol>\n        </div>\n    </div><div class=\"row\">\n    <div class=\"col-md-1\">\n\n    </div>\n    <div class=\"col-md-10\">\n            <mat-horizontal-stepper [linear]=\"true\" #stepper>\n                    <mat-step [stepControl]=\"firstFormGroup\">\n                        <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    \n\n\n                                    <form [formGroup]=\"firstFormGroup\">\n                                            <ng-template matStepLabel>Flat Owner's Details</ng-template>\n                                            <mat-form-field>\n                                                    <mat-select [(value)]=\"block_id\" placeholder=\"Select Block\" formControlName=\"blockCtrl\" required>\n                                                    <mat-option *ngFor=\"let list of block\" (click)=\"getManager(list._id)\" [value]=\"list._id\">{{list.block_name}}</mat-option>\n                                                </mat-select>\n                                                <div *ngIf=\"blockCtrl.invalid && (blockCtrl.dirty || blockCtrl.touched)\" class=\"text-danger\">\n                                                        <div *ngIf=\"blockCtrl.errors.required\"><small>Required</small></div>\n                                                        </div>\n                                                </mat-form-field>\n                                                <mat-form-field>\n                                                        <mat-select [(value)]=\"manager_id\" placeholder=\"Select Manager\" formControlName=\"managerCtrl\" required>\n                                                        <mat-option *ngFor=\"let list of manager\" (click)=\"getChairman(list._id)\" [value]=\"list._id\">{{list.manager_name}}</mat-option>\n                                                    </mat-select>\n                                                    <div *ngIf=\"managerCtrl.invalid && (managerCtrl.dirty || managerCtrl.touched)\" class=\"text-danger\">\n                                                            <div *ngIf=\"managerCtrl.errors.required\"><small>Required</small></div>\n                                                            </div>\n                                                    </mat-form-field>\n                                                <mat-form-field>\n                                                        <mat-select [(value)]=\"chairman_id\" placeholder=\"Select Chairman\" formControlName=\"chairmanCtrl\" required>\n                                                        <mat-option *ngFor=\"let list of chairman\" [value]=\"list._id\">{{list.chairman_name}}</mat-option>\n                                                    </mat-select>\n                                                    <div *ngIf=\"chairmanCtrl.invalid && (chairmanCtrl.dirty || chairmanCtrl.touched)\" class=\"text-danger\">\n                                                            <div *ngIf=\"chairmanCtrl.errors.required\"><small>Required</small></div>\n                                                            </div>\n                                                    </mat-form-field>\n                                          <br>\n                                            <mat-form-field>\n                                              <input matInput [(ngModel)]=\"flatowner_name\" placeholder=\"Flat Owner Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n                                              <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n                                                    <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n                                                    </div>\n                                            </mat-form-field>\n                                            \n                                            <mat-form-field>\n                                                    <input  matInput [(ngModel)]=\"flatno\" placeholder=\"Flat Number\" formControlName=\"flatnoCtrl\"  required>\n                                                    <div *ngIf=\"flatnoCtrl.invalid && (flatnoCtrl.dirty || flatnoCtrl.touched)\" class=\"text-danger\">\n                                                            <div *ngIf=\"flatnoCtrl.errors.required\"><small>Required</small></div>\n                                                            </div>\n                                                </mat-form-field>\n\n                                            <mat-form-field>\n                                                    <input  matInput [(ngModel)]=\"floorno\" placeholder=\"Floor Number\" formControlName=\"floornoCtrl\"  required>\n                                                    <div *ngIf=\"floornoCtrl.invalid && (floornoCtrl.dirty || floornoCtrl.touched)\" class=\"text-danger\">\n                                                            <div *ngIf=\"floornoCtrl.errors.required\"><small>Required</small></div>\n                                                            </div>\n                                            </mat-form-field>\n                                            \n                                            <mat-form-field>\n                                                <input  name=\"email\" [(ngModel)]=\"flatowner_email\" matInput placeholder=\"Owner Email\" formControlName=\"emailCtrl\"  required>\n                                                 <mat-hint align=\"end\">abc@gmail.com</mat-hint> \n                                                 <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\" class=\"text-danger\">\n                                                        <div *ngIf=\"emailCtrl.errors.required\"><small>Required</small></div>\n                                                        <div *ngIf=\"emailCtrl.dirty\" class=\"text-danger\">        \n                                                        <div *ngIf=\"emailCtrl.errors.email\"><small>Invalid</small></div>\n                                                        </div>\n                                                </div>\n\n                                            </mat-form-field>\n                                            \n                                            <mat-form-field>\n                                                <input matInput #input [(ngModel)]=\"flatowner_contact\" placeholder=\"Owner Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n                                                <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n                                                <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n                                                        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n                                                        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n                                                        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n                                                        </div>\n                                            </mat-form-field>\n                                            <br>\n                                            <mat-form-field>\n                                                    <input matInput type=\"password\" [(ngModel)]=\"flatowner_password\"  #passwordinput placeholder=\"Password\" formControlName=\"passwordCtrl\"  required>\n                                                    <mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n                                                    <div *ngIf=\"passwordCtrl.invalid && (passwordCtrl.dirty || passwordCtrl.touched)\" class=\"text-danger\">\n                                                            <div *ngIf=\"passwordCtrl.errors.required\"><small>Password is required</small></div>\n                                                            <div *ngIf=\"passwordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n                                                            <div *ngIf=\"passwordCtrl.errors.maxlength\"><small>Must ot exceed 12 characters</small></div>\n                                                            </div>     \n                                                </mat-form-field>\n                                                  \n                                                  <mat-form-field>\n                                                    <input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"flatowner_confirm_password\" pattern={{this.flatowner_password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"confirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n                                                    <mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n                                                    <div *ngIf=\"confirmpasswordCtrl.invalid && (confirmpasswordCtrl.dirty || confirmpasswordCtrl.touched)\" class=\"text-danger\">\n                                                            <div *ngIf=\"confirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n                                                            <div *ngIf=\"confirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n                                                            </div>  \n                                                  </mat-form-field>\n                                        <br>\n                                                     <section class=\"example-section\">\n                                                      <label class=\"example-margin\">Flat status:</label>\n                                                 \n                                                            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"flat_status\" formControlName=\"statusCtrl\">\n                                                                    <mat-radio-button color=\"primary\" class=\"example-radio-button\" checked [value]=true> Active</mat-radio-button>\n                                                                    <mat-radio-button color=\"primary\" class=\"example-radio-button\" [value]=false> Inactive</mat-radio-button>\n                                                    \n                                                                </mat-radio-group>                                                            \n                                                    </section>\n        \n                                            \n                                            <br>\n                                              <div>\n                                              <button class=\"buttoncolor\" style=\"color:white;\" (click)=\"checkFlatAndFlatownerAvailable()\" mat-button >Next</button>\n                                            </div>\n                                          </form>\n                            </div>\n                        </div>\n                 \n                    </mat-step>\n\n                    \n                    <mat-step [stepControl]=\"secondFormGroup\">\n                        <mat-card>\n                            <div class=\"row\">\n                                    <div class=\"col-md-12 \">\n                                        <form [formGroup]=\"secondFormGroup\">\n                                                <ng-template matStepLabel>Tenant Details(optional)</ng-template>\n                                                \n        \n                                                <p>      <mat-slide-toggle [(ngModel)]=\"tenant_status\"  color=\"primary\"   #rented> Flat On Rent!</mat-slide-toggle>\n                                                </p>\n                                    \n                                               <div *ngIf=\"rented.checked\">\n                                                    <mat-form-field>\n                                                            <input  [(ngModel)]=\"tenant_name\" matInput placeholder=\"Tenant Name\" formControlName=\"tenantnameCtrl\"   >\n                                                            <div *ngIf=\"tenantnameCtrl.invalid && (tenantnameCtrl.dirty || tenantnameCtrl.touched)\" class=\"text-danger\">\n                                                                    <div *ngIf=\"tenantnameCtrl.errors.required\"><small>Required</small></div>\n                                                                    </div>\n                                                        </mat-form-field>\n                                                    <mat-form-field>\n                                                            <input  [(ngModel)]=\"tenant_email\" matInput placeholder=\"Email\" formControlName=\"tenantemailCtrl\"  >\n                                                            <div *ngIf=\"tenantemailCtrl.invalid && (tenantemailCtrl.dirty || tenantemailCtrl.touched)\" class=\"text-danger\">\n                                                                <div *ngIf=\"tenantemailCtrl.errors.required\"><small>Required</small></div>\n                                                                <div *ngIf=\"tenantemailCtrl.dirty\" class=\"text-danger\">        \n                                                                <div *ngIf=\"tenantemailCtrl.errors.email\"><small>Invalid</small></div>\n                                                                </div>\n                                                                </div>\n                                                    </mat-form-field>\n                                                    <mat-form-field>\n                                                            <input [(ngModel)]=\"tenant_contact\"  matInput placeholder=\"Contact\" formControlName=\"tenantcontactCtrl\" (keypress)=\"NumPress($event)\"   >\n                                                            <div *ngIf=\"tenantcontactCtrl.invalid && (tenantcontactCtrl.dirty || tenantcontactCtrl.touched)\" class=\"text-danger\">\n                                                                    <div *ngIf=\"tenantcontactCtrl.errors.required\"><small>Required</small></div>    \n                                                                    <div *ngIf=\"tenantcontactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n                                                                    <div *ngIf=\"tenantcontactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n                                                                    </div>\n                                                        </mat-form-field>\n                                                    <mat-form-field>\n                                                            <input matInput type=\"password\" [(ngModel)]=\"tenant_password\"  #passwordinput placeholder=\"Password\" formControlName=\"tenantpasswordCtrl\"  required>\n                                                            <mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n                                                            <div *ngIf=\"tenantpasswordCtrl.invalid && (tenantpasswordCtrl.dirty || tenantpasswordCtrl.touched)\" class=\"text-danger\">\n                                                                    <div *ngIf=\"tenantpasswordCtrl.errors.required\"><small>Required</small></div>\n                                                                    <div *ngIf=\"tenantpasswordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n                                                                    <div *ngIf=\"tenantpasswordCtrl.errors.maxlength\"><small>Must not exceed 12 characters</small></div>\n                                                                    </div>     \n                                                          </mat-form-field>\n                                                          \n                                                          <mat-form-field>\n                                                            <input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"tenant_confirm_password\" pattern={{this.tenant_password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"tenantconfirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n                                                            <mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n                                                            <div *ngIf=\"tenantconfirmpasswordCtrl.invalid && (tenantconfirmpasswordCtrl.dirty || tenantconfirmpasswordCtrl.touched)\" class=\"text-danger\">\n                                                                    <div *ngIf=\"tenantconfirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n                                                                    <div *ngIf=\"tenantconfirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n                                                                    </div>  \n                                                          </mat-form-field>\n                                               </div>\n                                               <br>\n                                               <br>\n\n                                               <button class=\"buttoncolor\" style=\"color:white;\" mat-button matStepperPrevious>Back</button>\n\n                                            <button class=\"buttoncolor\" style=\"color:white;\" (click)=\"checktenant()\"  mat-button >Next</button>\n                                            </form>\n                                          </div>\n                                                  \n                                </div>\n                        </mat-card>\n                  \n                    </mat-step>\n                    <mat-step [stepControl]=\"thirdFormGroup\">\n                        <mat-card>\n                \n                            <div class=\"row\">\n                                    <div class=\"col-md-12 \">\n\n                                        <form >\n                                                <ng-template matStepLabel>Flat Member Details</ng-template>\n                                                \n\n                                                        <label>Flat Member Details:</label>\n                                                        <br>\n                                                        \n                                                        <div *ngFor=\"let item of row; let i=index\">\n                                                        <mat-form-field>\n                                                          <input type=\"text\" matInput name=\"name{{i}}\"  [(ngModel)]=\"item.name\" placeholder=\"Name\" required/> \n                                                          \n                                                        </mat-form-field>\n                                                        <mat-form-field>\n                                                          <input type=\"text\" matInput name=\"email{{i}}\"  [(ngModel)]=\"item.email\"  placeholder=\"Email\" required/>\n                                                        </mat-form-field>\n                                                        <mat-form-field>\n                                                          <input type=\"text\" matInput name=\"cotact{{i}}\"  [(ngModel)]=\"item.contact\"  placeholder=\"Contact\" (keypress)=\"NumPress($event)\"  minlength=\"10\" maxlength=\"10\" required/> \n                                                        </mat-form-field>\n                                                          <button class=\"btn btn-danger buttoncolor\"  style=\"color:white;\" (click)=\"deleteRow(i)\">X</button>\n                                                        </div>\n                                                        <button class=\"btn btn-success buttoncolor pull-right\" style=\"color:white;\" (click)=\"addRow()\">Add Member</button>\n\n                                                          <br>\n                                                 <button class=\"buttoncolor\" style=\"color:white;\" mat-button matStepperPrevious>Back</button>\n                                            <button class=\"buttoncolor\" style=\"color:white;\" mat-button (click)=\"registerflatowner()\">Submit</button>\n                                            </form>\n                                          </div>\n                                                  \n                                </div>\n                        </mat-card>\n                  \n                    </mat-step>\n            \n                  </mat-horizontal-stepper>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px; }\n\n.example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.mat-form-field {\n  width: 30%; }\n\n.section {\n  font-size: 11px; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular5_toaster__);
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
    function AddFlatOwnerComponent(http, toasterService, _formBuilder, _cfr) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this._cfr = _cfr;
        // Initializtion
        this.row = [{}];
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.align = 'start';
        this.flat_status = true;
        this.tenant_status = false;
        this.tenant = false;
        this.toasterService = toasterService;
    }
    AddFlatOwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/blocklistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.block = data;
            console.log(_this.block);
        });
        this.firstFormGroup = this._formBuilder.group({
            blockCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            managerCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            chairmanCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            flatnoCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            floornoCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(12)]],
            confirmpasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern]],
            statusCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            tenantnameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            tenantemailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            tenantcontactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            tenantpasswordCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            tenantconfirmpasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern]],
        });
        this.thirdFormGroup = this._formBuilder.group({
            flatmembernameCtrl: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            flatmemberemailCtrl: [[__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            flatmembercontactCtrl: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    };
    Object.defineProperty(AddFlatOwnerComponent.prototype, "blockCtrl", {
        get: function () { return this.firstFormGroup.get('blockCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "managerCtrl", {
        get: function () { return this.firstFormGroup.get('managerCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "chairmanCtrl", {
        get: function () { return this.firstFormGroup.get('chairmanCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "flatnoCtrl", {
        get: function () { return this.firstFormGroup.get('flatnoCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "floornoCtrl", {
        get: function () { return this.firstFormGroup.get('floornoCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "emailCtrl", {
        get: function () { return this.firstFormGroup.get('emailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "passwordCtrl", {
        get: function () { return this.firstFormGroup.get('passwordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "confirmpasswordCtrl", {
        get: function () { return this.firstFormGroup.get('confirmpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "statusCtrl", {
        get: function () { return this.firstFormGroup.get('statusCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "tenantnameCtrl", {
        get: function () { return this.secondFormGroup.get('tenantnameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "tenantemailCtrl", {
        get: function () { return this.secondFormGroup.get('tenantemailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "tenantcontactCtrl", {
        get: function () { return this.secondFormGroup.get('tenantcontactCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "tenantpasswordCtrl", {
        get: function () { return this.secondFormGroup.get('tenantpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "tenantconfirmpasswordCtrl", {
        get: function () { return this.secondFormGroup.get('tenantconfirmpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "flatmembernameCtrl", {
        get: function () { return this.thirdFormGroup.get('flatmembernameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "flatmemberemailCtrl", {
        get: function () { return this.thirdFormGroup.get('flatmemberemailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFlatOwnerComponent.prototype, "flatmembercontactCtrl", {
        get: function () { return this.thirdFormGroup.get('flatmembercontactCtrl'); },
        enumerable: true,
        configurable: true
    });
    AddFlatOwnerComponent.prototype.changeStep = function (index) {
        this.stepper.selectedIndex = index;
    };
    AddFlatOwnerComponent.prototype.getManager = function (block_id) {
        var _this = this;
        this.http.get('api/managerlistbyblock/' + block_id).subscribe(function (data) {
            _this.manager = data;
            console.log(_this.manager);
        });
    };
    AddFlatOwnerComponent.prototype.getChairman = function (manager_id) {
        var _this = this;
        this.http.get('api/chairmanlistbymanager/' + manager_id).subscribe(function (data) {
            _this.chairman = data;
            console.log(_this.chairman);
        });
    };
    // Add New Row
    AddFlatOwnerComponent.prototype.addRow = function () {
        this.row.push({});
    };
    // Delete Rows
    AddFlatOwnerComponent.prototype.deleteRow = function (index) {
        this.row.splice(index, 1);
    };
    AddFlatOwnerComponent.prototype.checkFlatAndFlatownerAvailable = function () {
        var _this = this;
        var flat_details = {
            chairman_id: this.chairman_id,
            flat_no: this.flatno,
        };
        console.log(flat_details);
        this.http.post('api/checkflat', flat_details).subscribe(function (data) {
            _this.flatresponse = data;
            console.log(_this.flatresponse);
            if (_this.flatresponse.success == true) {
                _this.stepper.next();
            }
            else {
                _this.toasterService.pop('error', _this.flatresponse.message);
            }
        });
    };
    AddFlatOwnerComponent.prototype.checktenant = function () {
        if (this.tenant_status == true) {
            if (this.secondFormGroup.dirty && this.secondFormGroup.valid) {
                this.stepper.next();
            }
        }
        else {
            console.log(this.tenant_status);
            this.secondFormGroup.disable();
            this.stepper.next();
            console.log(this.tenant_status);
        }
    };
    AddFlatOwnerComponent.prototype.registerflatowner = function () {
        var _this = this;
        var flat_details = {
            society_id: this.societyadmin.id,
            chairman_id: this.chairman_id,
            flat_no: this.flatno,
            floor_no: this.floorno,
            flat_status: this.flat_status
        };
        console.log(flat_details);
        this.http.post('api/addflat', flat_details).subscribe(function (data) {
            _this.flatresponse = data;
            console.log(_this.flatresponse);
            if (_this.flatresponse.success == true) {
                _this.toasterService.pop('success', _this.flatresponse.message);
                var flatowner_details = {
                    society_id: _this.societyadmin.id,
                    flat_id: _this.flatresponse.result._id,
                    flatowner_name: _this.flatowner_name,
                    flatowner_email: _this.flatowner_email,
                    flatowner_contact: _this.flatowner_contact,
                    flatowner_password: _this.flatowner_confirm_password
                };
                console.log(flatowner_details);
                _this.http.post('api/addflatowner', flatowner_details).subscribe(function (data) {
                    _this.flatownerresponse = data;
                    console.log(_this.flatownerresponse);
                    if (_this.flatownerresponse.success == true) {
                        _this.toasterService.pop('success', _this.flatownerresponse.message);
                        console.log(_this.tenant_status);
                        console.log(_this.tenant_status);
                        if (_this.tenant_status = true) {
                            var tenant_details = {
                                society_id: _this.societyadmin.id,
                                flat_id: _this.flatresponse.result._id,
                                flatowner_id: _this.flatownerresponse.result._id,
                                tenant_name: _this.tenant_name,
                                tenant_email: _this.tenant_email,
                                tenant_contact: _this.tenant_contact,
                                tenant_password: _this.tenant_confirm_password
                            };
                            console.log(tenant_details);
                            _this.http.post('api/addtenant', tenant_details).subscribe(function (data) {
                                _this.tenantresponse = data;
                                console.log(_this.tenantresponse);
                                if (_this.tenantresponse.success == true) {
                                    _this.toasterService.pop('success', _this.tenantresponse.message);
                                    for (var i = 0; _this.row.length > i; i++) {
                                        console.log(_this.row[i]);
                                        var member_details = {
                                            society_id: _this.societyadmin.id,
                                            flatowner_id: _this.flatownerresponse.result._id,
                                            tenant_id: _this.tenantresponse.result._id,
                                            flatmember_name: _this.row[i].name,
                                            flatmember_email: _this.row[i].email,
                                            flatmember_contact: _this.row[i].contact
                                        };
                                        console.log(member_details);
                                        _this.http.post('api/addflatmember', member_details).subscribe(function (data) {
                                            _this.memberresponse = data;
                                            if (_this.memberresponse.success == true) {
                                                _this.toasterService.pop('success', "Flat Details enter Successfully");
                                            }
                                            else {
                                                _this.toasterService.pop('error', _this.memberresponse.message);
                                            }
                                        });
                                    }
                                }
                                else {
                                    _this.toasterService.pop('error', _this.tenantresponse.message);
                                    _this.stepper.selectedIndex = 1;
                                }
                            });
                        }
                        else {
                            for (var i = 0; _this.row.length > i; i++) {
                                console.log(_this.row[i]);
                                var member_details = {
                                    society_id: _this.societyadmin.id,
                                    flatowner_id: _this.flatownerresponse.result._id,
                                    flatmember_name: _this.row[i].name,
                                    flatmember_email: _this.row[i].email,
                                    flatmember_contact: _this.row[i].contact
                                };
                                console.log(member_details);
                                _this.http.post('api/addflatmember', member_details).subscribe(function (data) {
                                    _this.memberresponse = data;
                                    if (_this.memberresponse.success == true) {
                                        _this.toasterService.pop('success', "Flat Details enter Successfully");
                                    }
                                    else {
                                        _this.toasterService.pop('error', _this.memberresponse.message);
                                    }
                                });
                            }
                        }
                    }
                    else {
                        _this.toasterService.pop('error', _this.flatownerresponse.message);
                        _this.stepper.selectedIndex = 0;
                    }
                });
            }
            else {
                _this.toasterService.pop('error', _this.flatresponse.message);
                _this.stepper.selectedIndex = 0;
            }
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], AddFlatOwnerComponent.prototype, "stepper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], AddFlatOwnerComponent.prototype, "container", void 0);
    AddFlatOwnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-flat-owner',
            template: __webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/add-flat-owner/add-flat-owner.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], AddFlatOwnerComponent);
    return AddFlatOwnerComponent;
    var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular5_toaster__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_flat_owner_routing_module__["a" /* AddFlatOwnerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
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
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__["ToasterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_flat_owner_component__["a" /* AddFlatOwnerComponent */]]
        })
    ], AddFlatOwnerModule);
    return AddFlatOwnerModule;
}());



/***/ })

});
//# sourceMappingURL=add-flat-owner.module.chunk.js.map