webpackJsonp(["visitor-details.module"],{

/***/ "../../../../../src/app/layout/visitor-details/visitor-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorDetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitor_details_component__ = __webpack_require__("../../../../../src/app/layout/visitor-details/visitor-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__visitor_details_component__["a" /* VisitorDetailsComponent */]
    }
];
var VisitorDetailsRoutingModule = (function () {
    function VisitorDetailsRoutingModule() {
    }
    VisitorDetailsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], VisitorDetailsRoutingModule);
    return VisitorDetailsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/visitor-details/visitor-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [@routerTransition] class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/visitorlist']\">Visitor List</a>\n                </li>\n                \n                <li class=\"breadcrumb-item active\"><i class=\"fa fa-list-ol\"></i> Visitor Details</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\" row\">\n        \n        <div class=\"col-md-12\">\n            <mat-card class=\"example-card\">\n                <mat-card-content>\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                                <img src=\"https://societyvisitant.herokuapp.com/{{visitor_profile_image}}\" class=\"rounded-circle pull-left\" alt=\"Profile Photo\" width=\"80\" height=\"80\"> \n\n                        </div>\n                        \n                        <div class=\"col-md-10\">\n                            <img src=\"https://societyvisitant.herokuapp.com/{{visitor_document_image}}\"  class=\"rounded pull-right\" alt=\"Document Image\" width=\"284\" height=\"216\"> \n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div>Date</div>\n                                    <div>{{visitor_date | date: 'dd/MM/yyyy'}}</div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div>In Time</div>\n                                    <div>{{visitor_in_time}}</div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div>Out Time</div>\n                                    <div>{{visitor_out_time}}</div>\n                                </div>\n                            </div>\n                            <br>\n                            \n                            <label>Visitor Name:- </label> {{visitor_name}}<br>\n                            <label>Email Id:- </label> {{visitor_email}}<br>\n                            <label>Contact:-</label> {{visitor_contact}} <br>\n                            <label>Vehicle Type:- </label> {{visitor_vehicle_type}}<br>\n                            <label>Vehicle No:- </label> {{visitor_vehicle_no}}<br> \n                            \n                        </div>\n                    </div>\n                    \n                    \n                    \n                </mat-card-content>\n                \n                \n            </mat-card>\n        </div>\n    </div>\n    <br>\n    <span flex></span>\n    <div class=\"row\"> <div class=\"col-md-12\">\n        \n        \n        <mat-card class=\"example-card\">\n            <mat-card-content>\n                \n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        \n                    </div>\n                    \n                    <div class=\"col-md-10\">\n                        <div *ngFor=\"let flat of flatlist\">\n                            <label>Block Name:- </label> {{flat.Chairman_id.Manager_id.Block_id.block_name}}<br>\n                            <label>Flat No:- </label> {{flat.flat_no}}<br>\n                            <label>Floor No:- </label> {{flat.floor_no}}<br>    \n                            \n                        </div> \n                        \n                    </div>\n                </div>\n            </mat-card-content>\n            \n        </mat-card>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/visitor-details/visitor-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-header-image {\n  background-image: url(\"https://localhost:8000/{{visitor_profile_image}}\");\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/visitor-details/visitor-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitorDetailsComponent = (function () {
    function VisitorDetailsComponent(http) {
        this.http = http;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.visitor = JSON.parse(localStorage['visitor']);
        this.visitor_name = this.visitor.visitor_name;
        this.visitor_email = this.visitor.email;
        this.visitor_contact = this.visitor.contact;
        this.visitor_date = this.visitor.Created_on;
        this.visitor_in_time = this.visitor.In_time;
        this.visitor_out_time = this.visitor.Out_time;
    }
    VisitorDetailsComponent.prototype.ngOnInit = function () {
        this.getFlatownerData();
    };
    VisitorDetailsComponent.prototype.getFlatownerData = function () {
        var _this = this;
        this.http.get('api/visitor/' + this.visitor._id).subscribe(function (data) {
            _this.visitor_details = data[0];
            console.log(_this.visitor_details);
            _this.visitor_name = _this.visitor_details.visitor_name;
            _this.visitor_email = _this.visitor_details.email;
            _this.visitor_contact = _this.visitor_details.contact;
            _this.visitor_date = _this.visitor_details.Created_on;
            _this.visitor_in_time = _this.visitor_details.In_time;
            _this.visitor_out_time = _this.visitor_details.Out_time;
            _this.visitor_profile_image = _this.visitor_details.profile_path;
            _this.visitor_document_image = _this.visitor_details.document_path;
            _this.visitor_vehicle_no = _this.visitor_details.vehicle_no;
            _this.visitor_vehicle_type = _this.visitor_details.vehicle_type;
            _this.flatlist = _this.visitor_details.Flat_id;
            localStorage.setItem('flatowner', JSON.stringify(_this.visitor_details));
        });
    };
    VisitorDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visitor-details',
            template: __webpack_require__("../../../../../src/app/layout/visitor-details/visitor-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/visitor-details/visitor-details.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], VisitorDetailsComponent);
    return VisitorDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/visitor-details/visitor-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorDetailsModule", function() { return VisitorDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitor_details_component__ = __webpack_require__("../../../../../src/app/layout/visitor-details/visitor-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visitor_details_routing_module__ = __webpack_require__("../../../../../src/app/layout/visitor-details/visitor-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VisitorDetailsModule = (function () {
    function VisitorDetailsModule() {
    }
    VisitorDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__visitor_details_routing_module__["a" /* VisitorDetailsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSlideToggleModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__visitor_details_component__["a" /* VisitorDetailsComponent */]]
        })
    ], VisitorDetailsModule);
    return VisitorDetailsModule;
}());



/***/ })

});
//# sourceMappingURL=visitor-details.module.chunk.js.map