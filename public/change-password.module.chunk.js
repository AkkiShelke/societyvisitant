webpackJsonp(["change-password.module"],{

/***/ "../../../../../src/app/layout/change-password/change-password-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_password_component__ = __webpack_require__("../../../../../src/app/layout/change-password/change-password.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__change_password_component__["a" /* ChangePasswordComponent */]
    }
];
var ChangePasswordRoutingModule = (function () {
    function ChangePasswordRoutingModule() {
    }
    ChangePasswordRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], ChangePasswordRoutingModule);
    return ChangePasswordRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div [@routerTransition] class=\"container-fluid\">\n  <app-page-header [heading]=\"' Change Password'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n  \n  <div class=\"row\" style=\"margin-top: 5%;\">\n          <div class=\"col-md-4\">\n          </div>\n          <div class=\"col-md-3\">\n                  <form [formGroup]=\"firstFormGroup\" >\n            \n                  <mat-form-field>\n                    <input matInput type=\"password\" [(ngModel)]=\"current_password\" placeholder=\"Current Password\" (focusout)=\"checkcurrentpassword()\" formControlName=\"current_passwordCtrl\" required>\n                    <div *ngIf=\"current_passwordCtrl.invalid && (current_passwordCtrl.dirty || current_passwordCtrl.touched)\" class=\"text-danger\">\n                    <div *ngIf=\"current_passwordCtrl.errors.required\"><small>Required</small></div>\n                  </div>\n                  </mat-form-field>\n                  \n                       \n              <mat-form-field>\n                  <input  matInput type=\"password\" [(ngModel)]=\"new_password\"  #passwordinput placeholder=\"New Password\" formControlName=\"new_passwordCtrl\" required>\n                  <mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n                  <div *ngIf=\"new_passwordCtrl.invalid && (new_passwordCtrl.dirty || new_passwordCtrl.touched)\" class=\"text-danger\">\n                  <div *ngIf=\"new_passwordCtrl.errors.required\"><small>Required</small></div>\n                  <div *ngIf=\"new_passwordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n                  <div *ngIf=\"new_passwordCtrl.errors.maxlength\"><small>Must not exceed 12 characters</small></div>\n                </div>   \n              </mat-form-field>\n          \n              <mat-form-field>\n                  <input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\" pattern={{this.new_password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"confirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n                  <mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n                  <div *ngIf=\"confirmpasswordCtrl.invalid && (confirmpasswordCtrl.dirty || confirmpasswordCtrl.touched)\" class=\"text-danger\">\n                  <div *ngIf=\"confirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n                  <div *ngIf=\"confirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n                </div>  \n                  </mat-form-field>\n          \n              </form>\n              <br>\n   \n                  <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"changepassword()\" mat-button [disabled]=\"!validpassword\" matDialogClose> Change password</button>\n          \n  \n              </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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





var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(http, toasterService, _formBuilder) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.managerexists = false;
        this.chairmanexists = false;
        this.validpassword = false;
        this.toasterService = toasterService;
        if (localStorage.getItem('manager')) {
            this.manager = JSON.parse(localStorage['manager']);
            this.managerexists = true;
        }
        console.log('ManagerExists:' + this.managerexists);
        if (localStorage.getItem('chairman')) {
            this.chairman = JSON.parse(localStorage['chairman']);
            this.chairmanexists = true;
        }
        console.log('ChairmanExists:' + this.chairmanexists);
        this.firstFormGroup = this._formBuilder.group({
            current_passwordCtrl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            new_passwordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].maxLength(12)]],
            confirmpasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern]]
        });
    }
    Object.defineProperty(ChangePasswordComponent.prototype, "current_passwordCtrl", {
        get: function () { return this.firstFormGroup.get('current_passwordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "new_passwordCtrl", {
        get: function () { return this.firstFormGroup.get('new_passwordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "confirmpasswordCtrl", {
        get: function () { return this.firstFormGroup.get('confirmpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.checkcurrentpassword = function () {
        var _this = this;
        console.log("Checking current password");
        if (this.chairmanexists == true) {
            var chairman_password = {
                password: this.current_password
            };
            console.log(chairman_password);
            this.http.post('api/checkchairmancurrentpassword/' + this.chairman.id, chairman_password).subscribe(function (data) {
                console.log(data);
                var response;
                response = data;
                if (response.success == true) {
                    _this.toasterService.pop('success', response.message);
                    _this.validpassword = true;
                }
                else {
                    _this.toasterService.pop('error', response.message);
                    _this.validpassword = false;
                }
            });
        }
        else if (this.managerexists == true) {
            var manager_password = {
                password: this.current_password
            };
            console.log(manager_password);
            this.http.post('api/checkmanagercurrentpassword/' + this.manager.id, manager_password).subscribe(function (data) {
                console.log(data);
                var response;
                response = data;
                if (response.success == true) {
                    _this.toasterService.pop('success', response.message);
                }
                else {
                    _this.toasterService.pop('error', response.message);
                }
            });
        }
        else {
            var society_password = {
                password: this.current_password
            };
            console.log(society_password);
            this.http.post('api/checksocietycurrentpassword/' + this.societyadmin.id, society_password).subscribe(function (data) {
                console.log(data);
                var response;
                response = data;
                if (response.success == true) {
                    _this.toasterService.pop('success', response.message);
                    _this.validpassword = true;
                }
                else {
                    _this.toasterService.pop('error', response.message);
                    _this.validpassword = false;
                }
            });
        }
    };
    ChangePasswordComponent.prototype.changepassword = function () {
        var _this = this;
        if (this.chairmanexists == true) {
            var chairman_password = {
                password: this.current_password,
                newpassword: this.confirm_password
            };
            console.log(chairman_password);
            this.http.put('api/changechairmancurrentpassword/' + this.chairman.id, chairman_password).subscribe(function (data) {
                console.log(data);
                var response;
                response = data;
                if (response.success == true) {
                    _this.toasterService.pop('success', response.message);
                }
                else {
                    _this.toasterService.pop('error', response.message);
                }
            });
        }
        else if (this.managerexists == true) {
            var manager_password = {
                password: this.current_password,
                newpassword: this.confirm_password
            };
            console.log(manager_password);
            this.http.put('api/changemanagercurrentpassword/' + this.manager.id, manager_password).subscribe(function (data) {
                console.log(data);
                var response;
                response = data;
                if (response.success == true) {
                    _this.toasterService.pop('success', response.message);
                }
                else {
                    _this.toasterService.pop('error', response.message);
                }
            });
        }
        else {
            var society_password = {
                password: this.current_password,
                newpassword: this.confirm_password
            };
            console.log(society_password);
            this.http.put('api/changesocietycurrentpassword/' + this.societyadmin.id, society_password).subscribe(function (data) {
                console.log(data);
                var response;
                response = data;
                if (response.success == true) {
                    _this.toasterService.pop('success', response.message);
                }
                else {
                    _this.toasterService.pop('error', response.message);
                }
            });
        }
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/layout/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/change-password/change-password.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_component__ = __webpack_require__("../../../../../src/app/layout/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_routing_module__ = __webpack_require__("../../../../../src/app/layout/change-password/change-password-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChangePasswordModule = (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__change_password_routing_module__["a" /* ChangePasswordRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__["ToasterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__change_password_component__["a" /* ChangePasswordComponent */]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ })

});
//# sourceMappingURL=change-password.module.chunk.js.map