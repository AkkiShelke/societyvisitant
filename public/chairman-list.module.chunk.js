webpackJsonp(["chairman-list.module"],{

/***/ "../../../../../src/app/layout/chairman-list/chairman-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChairmanListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chairman_list_component__ = __webpack_require__("../../../../../src/app/layout/chairman-list/chairman-list.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__chairman_list_component__["a" /* ChairmanListComponent */]
    }
];
var ChairmanListRoutingModule = (function () {
    function ChairmanListRoutingModule() {
    }
    ChairmanListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], ChairmanListRoutingModule);
    return ChairmanListRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/chairman-list/chairman-list.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div [@routerTransition] class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\"><i class=\"fa fa-user-circle-o\"></i> Chairman List</li>\n        </ol>\n    </div>\n</div>\n<div class=\"example-header\">\n    <mat-form-field>\n      <input matTooltip=\"Search Chairman Details!\" matTooltipPosition=\"above\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <div class=\"pull-right\">\n        <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n        <button class=\" btn btn-warning buttoncolor\" style=\"color:white;\" routerLink=\"/addchairman\" matTooltip=\"Edit Chairman list!\" matTooltipPosition=\"above\"><i class=\"fa fa-edit\"></i> Edit list</button>\n    </div>\n\n  </div>\n  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n         <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox color=\"primary\" matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox color=\"primary\" matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n  \n      <!-- ID Column -->\n      <!-- <ng-container matColumnDef=\"id\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n      </ng-container> -->\n  \n      <!-- Block Column\n      <ng-container matColumnDef=\"block\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Block </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.block}} </mat-cell>\n      </ng-container> -->\n  \n       <!-- Manager Column -->\n       <ng-container matColumnDef=\"manager\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Manager </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Manager_id.manager_name}} </mat-cell>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.chairman_name}} </mat-cell>\n      </ng-container>\n  \n        <!-- Email Column -->\n        <ng-container matColumnDef=\"email\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n        </ng-container>\n\n        <!-- Contact Column -->\n      <ng-container matColumnDef=\"contact\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n      </ng-container>\n        \n           <!-- Status Column -->\n           <ng-container matColumnDef=\"chairman_status\">\n            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" >\n                <div *ngIf=\"row.chairman_status;then active else inactive\"></div>\n\n                <ng-template #active>\n                    <mat-slide-toggle checked={{row.chairman_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.chairman_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                        Active</mat-slide-toggle>\n                    </ng-template> \n                <ng-template #inactive><mat-slide-toggle checked={{row.chairman_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.chairman_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                        Inactive</mat-slide-toggle>\n                    </ng-template> \n            </mat-cell>\n            </ng-container>   \n  \n      <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/layout/chairman-list/chairman-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 50%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.headertext {\n  font-size: large;\n  font-style: bold;\n  color: black;\n  font-size: 12px; }\n\n.mat-column-select {\n  overflow: visible; }\n\n.mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/chairman-list/chairman-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChairmanListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChairmanListComponent = (function () {
    function ChairmanListComponent(http, toasterService, _formBuilder) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.displayedColumns = ['select', 'manager', 'name', 'email', 'contact', 'chairman_status',];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.toasterService = toasterService;
        this.getChairmanData();
    }
    ChairmanListComponent.prototype.getChairmanData = function () {
        var _this = this;
        this.http.get('api/chairmanlistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.chairman = data;
            console.log(_this.chairman);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatTableDataSource */](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ChairmanListComponent.prototype.changeStatus = function (chairman, id) {
        var _this = this;
        if (chairman == true) {
            chairman = false;
        }
        else {
            chairman = true;
        }
        var chairman_details = {
            status: chairman
        };
        console.log(chairman_details);
        this.http.put('api/updatechairmanstatus/' + id, chairman_details).subscribe(function (data) {
            console.log(data);
            var response = data;
            if (response.success == true) {
                _this.toasterService.pop('success', response.message);
            }
            else if (response.success == false) {
                _this.toasterService.pop('warning', response.message);
            }
            _this.getChairmanData();
        });
    };
    ChairmanListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ChairmanListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ChairmanListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ChairmanListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatPaginator */])
    ], ChairmanListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSort */])
    ], ChairmanListComponent.prototype, "sort", void 0);
    ChairmanListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chairman-list',
            template: __webpack_require__("../../../../../src/app/layout/chairman-list/chairman-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/chairman-list/chairman-list.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], ChairmanListComponent);
    return ChairmanListComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/layout/chairman-list/chairman-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChairmanListModule", function() { return ChairmanListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chairman_list_component__ = __webpack_require__("../../../../../src/app/layout/chairman-list/chairman-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chairman_list_routing_module__ = __webpack_require__("../../../../../src/app/layout/chairman-list/chairman-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChairmanListModule = (function () {
    function ChairmanListModule() {
    }
    ChairmanListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__chairman_list_routing_module__["a" /* ChairmanListRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular5_toaster__["ToasterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__chairman_list_component__["a" /* ChairmanListComponent */]]
        })
    ], ChairmanListModule);
    return ChairmanListModule;
}());



/***/ })

});
//# sourceMappingURL=chairman-list.module.chunk.js.map