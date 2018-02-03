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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], ChangePasswordRoutingModule);
    return ChangePasswordRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\n  <app-page-header [heading]=\"' Change Password'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n  \n  <div class=\"row\" style=\"margin-top: 5%;\">\n          <div class=\"col-md-4\">\n          </div>\n          <div class=\"col-md-4\">\n                  <form role=\"form\">\n                          <div class=\"form-group has-success\">\n                                  <label class=\"form-control-label\" for=\"inputSuccess\">Current Password</label>\n                                  <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                              </div>\n      \n                          <div class=\"form-group has-success\">\n                                  <label class=\"form-control-label\" for=\"inputSuccess\">New Psssword</label>\n                                  <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                              </div>\n      \n                          <div class=\"form-group has-success\">\n                              <label class=\"form-control-label\" for=\"inputSuccess\">Confirm Password</label>\n                              <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                          </div>\n          \n                          <div class=\"form-group has-success\">\n                              <button  type=\"submit\" class=\"btn btn-secondary\">Change Password</button>\n        \n                          </div>\n          \n                      </form>\n              </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/layout/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/change-password/change-password.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__change_password_routing_module__["a" /* ChangePasswordRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* PageHeaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__change_password_component__["a" /* ChangePasswordComponent */]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ })

});
//# sourceMappingURL=change-password.module.chunk.js.map