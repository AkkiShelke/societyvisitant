webpackJsonp(["flat-list.module"],{

/***/ "../../../../../src/app/layout/flat-list/flat-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flat_list_component__ = __webpack_require__("../../../../../src/app/layout/flat-list/flat-list.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__flat_list_component__["a" /* FlatListComponent */]
    }
];
var FlatListRoutingModule = (function () {
    function FlatListRoutingModule() {
    }
    FlatListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], FlatListRoutingModule);
    return FlatListRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/flat-list/flat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-desktop\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/society_details']\">Society Details</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa fa-home\"></i> Flat List</li>\n        </ol>\n    </div>\n</div>\n<div class=\"example-header\">\n    <mat-form-field>\n      <input  matTooltip=\"Search Flat Owner Details!\" matTooltipPosition=\"above\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <div class=\"float-right\">\n        <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n        <button matTooltip=\"Register Flat Owner!\"  matTooltipPosition=\"above\" routerLink=\"/addflatowner\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-plus\" ></i> Add Flat</button>\n\n      </div>\n\n</div>\n  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n  \n       <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n      </ng-container>\n  \n      <!-- Block Column -->\n      <ng-container matColumnDef=\"block\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Block</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.block}} </mat-cell>\n      </ng-container>\n  \n      <!-- Flat No Column -->\n      <ng-container matColumnDef=\"flat_no\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Flat No</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.flat_no}} </mat-cell>\n      </ng-container>\n  \n      <!-- Floor Column -->\n      <ng-container matColumnDef=\"floor\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Floor</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.floor\"> {{row.floor}} </mat-cell>\n      </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"owner_name\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.owner_name\"> {{row.owner_name}} </mat-cell>\n        </ng-container>\n        \n\n         <!-- Status Column -->\n      <ng-container matColumnDef=\"flat_status\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.flat_status\"> {{row.flat_status}} </mat-cell>\n      </ng-container>\n\n\n        <!-- Contact Column -->\n      <ng-container matColumnDef=\"owner_contact\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Contact</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.owner_contact\"> {{row.owner_contact}} </mat-cell>\n      </ng-container>\n\n        <!-- Details Column -->\n        <ng-container matColumnDef=\"details\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Details</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\">\n          <button matTooltip=\"View Flat Owner's Details!\"  matTooltipPosition=\"above\" routerLink=\"/society_details\" class=\"btn btn-primary buttoncolor\" style=\"color:white;\"><i  class=\"fa fa-eye\"></i> View</button>\n        </mat-cell>\n        </ng-container>\n  \n      <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/flat-list/flat-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 12px;\n  width: 50%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.headertext {\n  font-size: large;\n  font-style: bold;\n  font-size: 12px;\n  color: black; }\n\n.mat-column-select {\n  overflow: visible; }\n\n.mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/flat-list/flat-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatListComponent = (function () {
    function FlatListComponent() {
        this.displayedColumns = ['select', 'id', 'block', 'flat_no', 'floor', 'owner_name', 'flat_status', 'owner_contact', 'details'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatTableDataSource */](users);
    }
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    FlatListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    FlatListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    FlatListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    FlatListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */])
    ], FlatListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */])
    ], FlatListComponent.prototype, "sort", void 0);
    FlatListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flat-list',
            template: __webpack_require__("../../../../../src/app/layout/flat-list/flat-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/flat-list/flat-list.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], FlatListComponent);
    return FlatListComponent;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    var status = STATUS[Math.round(Math.random() * (STATUS.length - 1))];
    var block = BLOCK[Math.round(Math.random() * (BLOCK.length - 1))];
    var floor = FLOOR[Math.round(Math.random() * (FLOOR.length - 1))];
    return {
        id: id.toString(),
        block: block,
        flat_no: Math.round(Math.random() * 100).toString(),
        floor: floor,
        owner_name: name,
        flat_status: status,
        owner_contact: Contact
    };
}
/** Constants used to fill up our data base. */
var LOCATION = ['Warje', 'Banner', 'Shivne', 'Kothroad', 'Hinjwadi', 'Karve nager', 'Ram nager'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
var STATUS = ['Owner', 'Rented'];
var BLOCK = ['A', 'B', 'C', 'D'];
var FLOOR = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
var Pincode = [411057];
var Contact = [9434534344];


/***/ }),

/***/ "../../../../../src/app/layout/flat-list/flat-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatListModule", function() { return FlatListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flat_list_component__ = __webpack_require__("../../../../../src/app/layout/flat-list/flat-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flat_list_routing_module__ = __webpack_require__("../../../../../src/app/layout/flat-list/flat-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FlatListModule = (function () {
    function FlatListModule() {
    }
    FlatListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__flat_list_routing_module__["a" /* FlatListRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTooltipModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__flat_list_component__["a" /* FlatListComponent */]]
        })
    ], FlatListModule);
    return FlatListModule;
}());



/***/ })

});
//# sourceMappingURL=flat-list.module.chunk.js.map