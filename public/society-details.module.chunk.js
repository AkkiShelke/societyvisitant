webpackJsonp(["society-details.module"],{

/***/ "../../../../../src/app/layout/society-details/society-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocietyDetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__society_details_component__ = __webpack_require__("../../../../../src/app/layout/society-details/society-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__society_details_component__["a" /* SocietyDetailsComponent */]
    }
];
var SocietyDetailsRoutingModule = (function () {
    function SocietyDetailsRoutingModule() {
    }
    SocietyDetailsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SocietyDetailsRoutingModule);
    return SocietyDetailsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/society-details/society-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] class=\"container-fluid\">\n  <app-page-header [heading]=\"'Socity Details'\" [icon]=\"'fa-desktop'\"></app-page-header>\n<mat-card>\n<h3 style=\"align:center;\">Society Name: Ayodhya society, Banner, Pune</h3>\n\n</mat-card>\n\n<div class=\"example-header\">\n    <mat-form-field>\n      <input  matTooltip=\"Search Flat Owner Details!\" matTooltipPosition=\"above\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <div class=\"float-right\">\n        <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n\n        <button matTooltip=\"View Block List!\"  matTooltipPosition=\"above\" routerLink=\"/addblock\" class=\"  btn btn-success buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Block</button>\n        <button matTooltip=\"View Manager List!\"  matTooltipPosition=\"above\" routerLink=\"/addmanager\" class=\"  btn btn-primary buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Manager</button>\n        <button matTooltip=\"View Chairman List!\"  matTooltipPosition=\"above\" routerLink=\"/addchairman\" class=\"  btn btn-warning buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i>  Chairman</button>\n        <button matTooltip=\"View Security List!\"  matTooltipPosition=\"above\" routerLink=\"/addsecurity\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-list-ol\" ></i> Security</button>\n        <button matTooltip=\"Register Flat Owner!\"  matTooltipPosition=\"above\" routerLink=\"/addflatowner\" class=\" btn btn-danger buttoncolor\" style=\"color:white;\"><i class=\"fa fa-plus\" ></i> Add Flat</button>\n\n\n    </div>\n\n</div>\n  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n  \n       <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n      </ng-container>\n  \n      <!-- Block Column -->\n      <ng-container matColumnDef=\"block\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Block</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.block}} </mat-cell>\n      </ng-container>\n  \n      <!-- Flat No Column -->\n      <ng-container matColumnDef=\"flat_no\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Flat No</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.flat_no}} </mat-cell>\n      </ng-container>\n  \n      <!-- Floor Column -->\n      <ng-container matColumnDef=\"floor\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Floor</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.floor\"> {{row.floor}} </mat-cell>\n      </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"owner_name\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.owner_name\"> {{row.owner_name}} </mat-cell>\n        </ng-container>\n        \n\n         <!-- Status Column -->\n      <ng-container matColumnDef=\"flat_status\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.flat_status\"> {{row.flat_status}} </mat-cell>\n      </ng-container>\n\n\n        <!-- Contact Column -->\n      <ng-container matColumnDef=\"owner_contact\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Contact</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.owner_contact\"> {{row.owner_contact}} </mat-cell>\n      </ng-container>\n\n        <!-- Details Column -->\n        <ng-container matColumnDef=\"details\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header>Details</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\">\n          <button matTooltip=\"View Flat Owner's Details!\"  matTooltipPosition=\"above\" routerLink=\"/society_details\" class=\"btn btn-primary buttoncolor\" style=\"color:white;\"><i  class=\"fa fa-eye\"></i> View</button>\n        </mat-cell>\n        </ng-container>\n  \n      <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/society-details/society-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 35%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.headertext {\n  font-size: large;\n  font-size: 12px;\n  font-style: bold;\n  color: black; }\n\n.mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/society-details/society-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocietyDetailsComponent; });
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




var SocietyDetailsComponent = (function () {
    function SocietyDetailsComponent() {
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
    SocietyDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SocietyDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    SocietyDetailsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SocietyDetailsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatPaginator */])
    ], SocietyDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSort */])
    ], SocietyDetailsComponent.prototype, "sort", void 0);
    SocietyDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-society-details',
            template: __webpack_require__("../../../../../src/app/layout/society-details/society-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/society-details/society-details.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], SocietyDetailsComponent);
    return SocietyDetailsComponent;
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

/***/ "../../../../../src/app/layout/society-details/society-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyDetailsModule", function() { return SocietyDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__society_details_component__ = __webpack_require__("../../../../../src/app/layout/society-details/society-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__society_details_routing_module__ = __webpack_require__("../../../../../src/app/layout/society-details/society-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SocietyDetailsModule = (function () {
    function SocietyDetailsModule() {
    }
    SocietyDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__society_details_routing_module__["a" /* SocietyDetailsRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatTooltipModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__society_details_component__["a" /* SocietyDetailsComponent */]]
        })
    ], SocietyDetailsModule);
    return SocietyDetailsModule;
}());



/***/ })

});
//# sourceMappingURL=society-details.module.chunk.js.map