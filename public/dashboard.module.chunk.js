webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n\n<div [@routerTransition] class=\"container-fluid\">\n\n    <div class=\"row\">\n        <!-- <div class=\"col-xl-4 col-lg-6\">\n            <div class=\"card text-white bg-primary\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col col-xs-3\">\n                            <i class=\"fa fa fa-pencil-square-o fa-5x\"></i>\n                        </div>\n                        <div class=\"col col-xs-9 text-right\">\n                            <div class=\"d-block\">\"Total Registerd Flat!\"</div>\n                            <div class=\"d-block huge\">{{count}}</div>\n            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <a class=\"float-left\">View Details {{data}}</a>\n                    <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\n                    \n                    </a>\n                </div>\n            </div>\n        </div> -->\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-pencil-square-o'\" [count]=\"flatlistcount\" [label]=\"'Total Registerd Flat!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-shield'\" [count]=\"securitylistcount\" [label]=\"'Total Security Guard!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-street-view'\" [count]=\"visitorlistcount\" [label]=\"'Total Visitors!'\" ></app-stat>\n        </div>\n        <!-- <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-support'\" [count]=\"13\" [label]=\"'New Tickets!'\"></app-stat>\n        </div> -->\n    </div>\n    <br>\n    \n\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input  matTooltip=\"Search Flat Owner Details!\" matTooltipPosition=\"above\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n      </mat-form-field>\n      <div class=\"float-right\" *ngIf=\"!managerexists\" >\n          <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n  \n          <button *ngIf=\"!chairmanexists\"  matTooltip=\"View Block List!\"  matTooltipPosition=\"above\" routerLink=\"/addblock\" class=\"  btn btn-success buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Block</button>\n          <button *ngIf=\"!chairmanexists\"  matTooltip=\"View Manager List!\"  matTooltipPosition=\"above\" routerLink=\"/addmanager\" class=\"  btn btn-primary buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Manager</button>\n          <button *ngIf=\"!chairmanexists\"  matTooltip=\"View Chairman List!\"  matTooltipPosition=\"above\" routerLink=\"/addchairman\" class=\"  btn btn-warning buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Chairman</button>\n          <button  matTooltip=\"View Security List!\"  matTooltipPosition=\"above\" routerLink=\"/addsecurity\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i> Security</button>\n          <button *ngIf=\"!chairmanexists\" matTooltip=\"Register Flat Owner!\"  matTooltipPosition=\"above\" routerLink=\"/addflatowner\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-plus\" ></i> Add Flat</button>\n  \n  \n      </div>\n      <div class=\"float-right\" *ngIf=\"managerexists\">\n        <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n        <button   matTooltip=\"View Chairman List!\"  matTooltipPosition=\"above\" routerLink=\"/addchairman\" class=\"  btn btn-warning buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Chairman</button>\n        <button  matTooltip=\"View Security List!\"  matTooltipPosition=\"above\" routerLink=\"/addsecurity\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i> Security</button>\n        <button matTooltip=\"Register Flat Owner!\"  matTooltipPosition=\"above\" routerLink=\"/addflatowner\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-plus\" ></i> Add Flat</button>\n\n\n    </div>\n  \n  </div>\n    \n    <div class=\"example-container mat-elevation-z8\">\n    \n      <mat-table [dataSource]=\"dataSource\" matSort>\n    \n         <!-- Checkbox Column -->\n      <ng-container matColumnDef=\"select\">\n          <mat-header-cell *matHeaderCellDef>\n            <mat-checkbox color=\"primary\" matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <mat-checkbox color=\"primary\" matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                          (change)=\"$event ? selection.toggle(row) : null\"\n                          [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </mat-cell>\n        </ng-container>\n  \n        <!-- Block Column -->\n        <ng-container matColumnDef=\"block\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Block</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.Flat_id.Chairman_id.Manager_id.Block_id.block_name}} </mat-cell>\n        </ng-container>\n    \n        <!-- Flat No Column -->\n        <ng-container matColumnDef=\"flat_no\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Flat No</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.Flat_id.flat_no}} </mat-cell>\n        </ng-container>\n    \n        <!-- Floor Column -->\n        <ng-container matColumnDef=\"floor\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Floor</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.floor\"> {{row.Flat_id.floor_no}} </mat-cell>\n        </ng-container>\n  \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"owner_name\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.owner_name\"> {{row.flatowner_name}} </mat-cell>\n          </ng-container>\n          \n  \n           <!-- Status Column -->\n  \n         <ng-container matColumnDef=\"flat_status\">\n            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"  >\n                    <div *ngIf=\"row.Flat_id.flat_status;then active else inactive\"></div>\n\n                        <ng-template #active>\n                            <mat-slide-toggle checked={{row.Flat_id.flat_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.Flat_id.flat_status,row.Flat_id._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                                Active</mat-slide-toggle>\n                            </ng-template> \n                        <ng-template #inactive>\n                            <mat-slide-toggle checked={{row.Flat_id.flat_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.Flat_id.flat_status,row.Flat_id._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                                Inactive</mat-slide-toggle>\n                            </ng-template> \n\n\n            </mat-cell>\n            </ng-container>\n                      \n  \n          <!-- Contact Column -->\n        <ng-container matColumnDef=\"owner_contact\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Contact</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.owner_contact\"> {{row.contact}} </mat-cell>\n        </ng-container>\n  \n\n             <!-- Actions Column -->\n     <ng-container matColumnDef=\"actions\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button matTooltip=\"View Flat Details!\"  matTooltipPosition=\"above\" class=\"btn btn-warning buttoncolor\"  style=\"color:white;\"   (click)=\"getFlatOwnerId(row)\"><i class=\"fa fa-info-circle \" ></i> View</button>\n        </mat-cell>\n        </ng-container>\n\n          <!-- Details Column -->\n          <!-- <ng-container matColumnDef=\"details\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Details</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\">\n            <button matTooltip=\"View Flat Owner's Details!\"  matTooltipPosition=\"above\" routerLink=\"/flatowner_details\" class=\"btn btn-primary buttoncolor\" style=\"color:white;\"><i  class=\"fa fa-eye\"></i> View</button>\n          </mat-cell>\n          </ng-container> -->\n    \n        <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 35%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.headertext {\n  font-size: large;\n  font-size: 12px;\n  font-style: bold;\n  color: black; }\n\n.mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = (function () {
    function DashboardComponent(http, router, toasterService, _formBuilder) {
        this.http = http;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.displayedColumns = ['select', 'block', 'flat_no', 'floor', 'owner_name', 'owner_contact', 'flat_status', 'actions'];
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.managerexists = false;
        this.chairmanexists = false;
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
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
        this.getFlatownerData();
        this.getListOfSecurity();
        this.getListOfVisitor();
    }
    DashboardComponent.prototype.getListOfSecurity = function () {
        var _this = this;
        this.http.get('api/securitylistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.securitylistcount = data.length;
            console.log(_this.securitylistcount);
        });
    };
    DashboardComponent.prototype.getListOfVisitor = function () {
        var _this = this;
        this.http.get('api/visitorlistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.visitorlistcount = data.length;
            console.log(_this.visitorlistcount);
        });
    };
    DashboardComponent.prototype.getFlatownerData = function () {
        var _this = this;
        this.http.get('api/flatownerlistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.flatdetails = data;
            _this.flatlistcount = _this.flatdetails.length;
            console.log(_this.flatdetails);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatTableDataSource */](_this.flatdetails);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.changeStatus = function (flat, id) {
        var _this = this;
        if (flat == true) {
            flat = false;
        }
        else if (flat == false) {
            flat = true;
        }
        var flat_details = {
            status: flat
        };
        console.log(flat_details);
        console.log(id);
        this.http.put('api/updateflatstatus/' + id, flat_details).subscribe(function (data) {
            var response = data;
            if (response.success == true) {
                _this.toasterService.pop('success', response.message);
            }
            else if (response.success == false) {
                _this.toasterService.pop('warning', response.message);
            }
            _this.getFlatownerData();
        });
    };
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    DashboardComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    DashboardComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DashboardComponent.prototype.getFlatOwnerId = function (flatowner) {
        console.log(flatowner);
        localStorage.setItem('flatowner', JSON.stringify(flatowner));
        this.router.navigate(['/flatowner_details']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */])
    ], DashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */])
    ], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* StatModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__["ToasterModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map