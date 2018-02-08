webpackJsonp(["flatowner-details.module"],{

/***/ "../../../../../src/app/layout/flatowner-details/flatowner-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatownerDetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatowner_details_component__ = __webpack_require__("../../../../../src/app/layout/flatowner-details/flatowner-details.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__flatowner_details_component__["a" /* FlatownerDetailsComponent */]
    }
];
var FlatownerDetailsRoutingModule = (function () {
    function FlatownerDetailsRoutingModule() {
    }
    FlatownerDetailsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], FlatownerDetailsRoutingModule);
    return FlatownerDetailsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/flatowner-details/flatowner-details.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n\n<div [@routerTransition] class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n                </li>\n    \n                <li class=\"breadcrumb-item active\"><i class=\"fa fa-list-ol\"></i> Flat Details</li>\n            </ol>\n        </div>\n    </div>\n<div class=\" row\">\n\n  <div class=\"col-md-12\">\n    <mat-card class=\"example-card\">\n        <div class=\"pull-right\"><button class=\" btn btn-warning buttoncolor \" (click)=\"openFlatOwnerEditDialog();\"  style=\"color:white;\" mat-button><i class=\"fa fa-edit \" ></i> Edit</button>\n          <button class=\" btn btn-warning buttoncolor\"  style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i> Flat Owner</button>\n          <button *ngIf=\"!tenantexists\" class=\" btn btn-warning buttoncolor\"  style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i> Tenant</button>\n          <button *ngIf=\"!memberexists\" class=\" btn btn-warning buttoncolor\"  style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i> Member</button>\n\n\n        </div> \n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Flat Details        \n        </mat-card-title>\n        <mat-card-subtitle>Flatowner details</mat-card-subtitle>\n       \n\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"row\">\n          <div class=\"col-md-1\">\n\n          </div>\n          <div class=\"col-md-5\">\n              <label>Flat NO: </label> {{flatownerdetails.Flat_id.flat_no}}<br>\n              <label>Flat-Owner Name: </label> {{flatownerdetails.flatowner_name}}<br>\n              <label>Contact:</label> {{flatownerdetails.contact}}<br>\n            </div>\n            <div class=\"col-md-5\">\n                <label>Floor NO: </label> {{flatownerdetails.Flat_id.floor_no}}<br>\n                <label>Email Id:</label> {{flatownerdetails.email}}<br>\n              </div>\n        </div>\n\n          \n\n      </mat-card-content>\n\n      \n    </mat-card>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n\n\n\n\n      <div class=\"col-md-6\" *ngIf=\"tenantexists\">\n          <mat-card class=\"example-card\">\n              <button class=\" btn btn-warning buttoncolor pull-right\"  style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i>  Tenant</button>\n\n          <mat-card-header>\n\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>Tenant Details        \n                </mat-card-title>\n                </mat-card-header>\n                </mat-card>\n                  <div class=\"example-container mat-elevation-z8\">\n  \n                      <mat-table [dataSource]=\"tenant_dataSource\" matSort>\n                              <!-- Checkbox Column -->\n                      <ng-container matColumnDef=\"select\" >\n                          <mat-header-cell *matHeaderCellDef >\n                            <mat-checkbox matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? tenant_masterToggle() : null\"\n                                          [checked]=\"tenant_selection.hasValue() && tenant_isAllSelected()\"\n                                          [indeterminate]=\"tenant_selection.hasValue() && !tenant_isAllSelected()\">\n                            </mat-checkbox>\n                          </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\">\n                            <mat-checkbox matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                                          (change)=\"$event ? tenant_selection.toggle(row) : null\"\n                                          [checked]=\"tenant_selection.isSelected(row)\">\n                            </mat-checkbox>\n                          </mat-cell>\n                        </ng-container>\n                    \n\n                    \n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\"> {{row.tenant_name}} </mat-cell>\n                        </ng-container>\n                    \n                          <!-- Email Column -->\n                          <ng-container matColumnDef=\"email\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n                          </ng-container>\n                  \n                          <!-- Contact Column -->\n                        <ng-container matColumnDef=\"contact\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Status Column -->\n  \n                        <ng-container matColumnDef=\"tenant_status\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" >\n                              \n                                              \n                                <mat-slide-toggle checked={{row.tenant_status}} (click)=\"changeStatus(row.tenant_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\"></mat-slide-toggle>\n                            \n                            </mat-cell>\n                            </ng-container>\n                  \n                          <!-- Actions Column -->\n                          <ng-container matColumnDef=\"actions\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button class=\"btn btn-parimary\" (click)=\"openTenantEditDialog(row)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                          </mat-cell>\n                          </ng-container>\n                    \n                        <mat-header-row class=\"headertext\" *matHeaderRowDef=\"tenant_displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: tenant_displayedColumns;\">\n                        </mat-row>\n                      </mat-table>\n                    \n                      <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                    </div>\n\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"memberexists\">\n            <mat-card class=\"example-card\">\n                <button class=\" btn btn-warning buttoncolor pull-right\"  style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i>  Menber</button>\n  \n            <mat-card-header>\n  \n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>Member Details        \n                  </mat-card-title>\n                  </mat-card-header>\n                  </mat-card>\n                    <div class=\"example-container mat-elevation-z8\">\n    \n                        <mat-table [dataSource]=\"member_dataSource\" matSort>\n                                <!-- Checkbox Column -->\n                        <ng-container matColumnDef=\"select\" >\n                            <mat-header-cell *matHeaderCellDef >\n                              <mat-checkbox matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? member_masterToggle() : null\"\n                                            [checked]=\"member_selection.hasValue() && member_isAllSelected()\"\n                                            [indeterminate]=\"member_selection.hasValue() && !member_isAllSelected()\">\n                              </mat-checkbox>\n                            </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\">\n                              <mat-checkbox matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                                            (change)=\"$event ? member_selection.toggle(row) : null\"\n                                            [checked]=\"member_selection.isSelected(row)\">\n                              </mat-checkbox>\n                            </mat-cell>\n                          </ng-container>\n                      \n  \n                      \n                          <!-- Name Column -->\n                          <ng-container matColumnDef=\"name\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.flatmember_name}} </mat-cell>\n                          </ng-container>\n                      \n                            <!-- Email Column -->\n                            <ng-container matColumnDef=\"email\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n                            </ng-container>\n                    \n                            <!-- Contact Column -->\n                          <ng-container matColumnDef=\"contact\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n                          </ng-container>\n  \n                          <!-- Status Column -->\n    \n                          <ng-container matColumnDef=\"member_status\">\n                              <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                              <mat-cell *matCellDef=\"let row\" >\n                                \n                                                \n                                  <mat-slide-toggle checked={{row.flatmember_status}} (click)=\"changeStatus(row.flatmember_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\"></mat-slide-toggle>\n                              \n                              </mat-cell>\n                              </ng-container>\n                    \n                            <!-- Actions Column -->\n                            <ng-container matColumnDef=\"actions\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button class=\"btn btn-parimary\" (click)=\"openMemberEditDialog(row)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                            </mat-cell>\n                            </ng-container>\n                      \n                          <mat-header-row class=\"headertext\" *matHeaderRowDef=\"member_displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: member_displayedColumns;\">\n                          </mat-row>\n                        </mat-table>\n                      \n                        <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                      </div>\n  \n          </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/flatowner-details/flatowner-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  max-width: 100%; }\n\n.example-header-image {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/flatowner.png")) + ");\n  background-size: cover; }\n\n.mat-dialog-content {\n  background-color: lightblue; }\n\n.mat-dialog-content form {\n    padding: 1% 2%; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.headertext {\n  font-size: large;\n  font-style: bold;\n  color: black;\n  font-size: 12px; }\n\n.mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/flatowner-details/flatowner-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatownerDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FlatownerEditDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TenantEditDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MemberEditDialogComponent; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var FlatownerDetailsComponent = (function () {
    function FlatownerDetailsComponent(http, dialog, toasterService) {
        this.http = http;
        this.dialog = dialog;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.flatowner = JSON.parse(localStorage['flatowner']);
        this.owner_id = this.flatowner._id;
        //Tenant Table
        this.tenant_displayedColumns = ['select', 'name', 'email', 'contact', 'tenant_status', 'actions'];
        this.tenant_selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        //Member table
        this.member_displayedColumns = ['select', 'name', 'email', 'contact', 'member_status', 'actions'];
        this.member_selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.tenantexists = false;
        this.memberexists = false;
        this.getFlatownerData();
        this.toasterService = toasterService;
        this.getTenantData();
        this.getFlatmemberData();
    }
    FlatownerDetailsComponent.prototype.ngOnInit = function () {
    };
    FlatownerDetailsComponent.prototype.getTenantData = function () {
        var _this = this;
        this.http.get('api/tanentlistbyflatowner/' + this.flatowner._id).subscribe(function (data) {
            _this.tenant = data;
            console.log(_this.tenant);
            if (_this.tenant.length > 0) {
                _this.tenantexists = true;
                _this.tenant_dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
                _this.tenant_dataSource.paginator = _this.paginator;
                _this.tenant_dataSource.sort = _this.sort;
            }
        });
    };
    FlatownerDetailsComponent.prototype.changeStatus = function (tenant, id) {
        tenant = !tenant;
        var tenant_details = {
            status: tenant
        };
        console.log(tenant_details);
        this.http.put('api/updatetenantstatus/' + id, tenant_details).subscribe(function (data) {
            console.log(data);
        });
        this.getTenantData();
    };
    FlatownerDetailsComponent.prototype.getFlatmemberData = function () {
        var _this = this;
        this.http.get('api/activetanentbyflatowner/' + this.flatowner._id).subscribe(function (data) {
            _this.active_tenant = data;
            if (_this.tenant.length > 0) {
                _this.tenant_id = _this.active_tenant._id;
                console.log(_this.active_tenant);
                _this.http.get('api/memberlistbytenant/' + _this.tenant_id).subscribe(function (data) {
                    _this.member = data;
                    console.log(_this.member);
                    if (_this.member.length > 0) {
                        _this.memberexists = true;
                        _this.member_dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
                        _this.member_dataSource.paginator = _this.paginator;
                        _this.member_dataSource.sort = _this.sort;
                    }
                });
            }
            else {
                _this.http.get('api/memberlistbyflatowner/' + _this.flatowner._id).subscribe(function (data) {
                    _this.member = data;
                    if (_this.member.length > 0) {
                        console.log(_this.member);
                        _this.memberexists = true;
                        _this.member_dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
                        _this.member_dataSource.paginator = _this.paginator;
                        _this.member_dataSource.sort = _this.sort;
                    }
                });
            }
        });
    };
    // Tenant Table operations
    FlatownerDetailsComponent.prototype.tenant_applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.tenant_dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    FlatownerDetailsComponent.prototype.tenant_isAllSelected = function () {
        var numSelected = this.tenant_selection.selected.length;
        var numRows = this.tenant_dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    FlatownerDetailsComponent.prototype.tenant_masterToggle = function () {
        var _this = this;
        this.tenant_isAllSelected() ?
            this.tenant_selection.clear() :
            this.tenant_dataSource.data.forEach(function (row) { return _this.tenant_selection.select(row); });
    };
    //member Table operations
    FlatownerDetailsComponent.prototype.member_applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.member_dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    FlatownerDetailsComponent.prototype.member_isAllSelected = function () {
        var numSelected = this.member_selection.selected.length;
        var numRows = this.member_dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    FlatownerDetailsComponent.prototype.member_masterToggle = function () {
        var _this = this;
        this.member_isAllSelected() ?
            this.member_selection.clear() :
            this.member_dataSource.data.forEach(function (row) { return _this.member_selection.select(row); });
    };
    FlatownerDetailsComponent.prototype.openFlatOwnerEditDialog = function () {
        var _this = this;
        var flatowner_id = this.flatowner._id;
        var dialogRef = this.dialog.open(FlatownerEditDialogComponent, {
            height: '360px',
            width: '260px',
            data: { flatowner_id: flatowner_id },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getFlatownerData();
            if (result == null || result == '') {
            }
            else {
            }
        });
    };
    FlatownerDetailsComponent.prototype.openTenantEditDialog = function (tenant) {
        var _this = this;
        var dialogRef = this.dialog.open(TenantEditDialogComponent, {
            height: '360px',
            width: '260px',
            data: { tenant: tenant },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getTenantData();
            if (result == null || result == '') {
            }
            else {
            }
        });
    };
    FlatownerDetailsComponent.prototype.openMemberEditDialog = function (member) {
        var _this = this;
        var dialogRef = this.dialog.open(MemberEditDialogComponent, {
            height: '360px',
            width: '260px',
            data: { member: member },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getFlatmemberData();
            if (result == null || result == '') {
            }
            else {
            }
        });
    };
    FlatownerDetailsComponent.prototype.getFlatownerData = function () {
        var _this = this;
        this.http.get('api/flatowner/' + this.flatowner._id).subscribe(function (data) {
            _this.flatownerdetails = data;
            console.log(_this.flatownerdetails);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */])
    ], FlatownerDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */])
    ], FlatownerDetailsComponent.prototype, "sort", void 0);
    FlatownerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flatowner-details',
            template: __webpack_require__("../../../../../src/app/layout/flatowner-details/flatowner-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/flatowner-details/flatowner-details.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], FlatownerDetailsComponent);
    return FlatownerDetailsComponent;
    var _a;
}());

//  Edit Dialog Box Component for Flatowner
var FlatownerEditDialogComponent = (function () {
    function FlatownerEditDialogComponent(http, _formBuilder, dialogRef, data, toasterService) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.toasterService = toasterService;
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    }
    FlatownerEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/flatowner/' + this.data.flatowner_id).subscribe(function (data) {
            _this.flatowner = data;
            _this.flatowner_name = _this.flatowner.flatowner_name;
            _this.contact = _this.flatowner.contact;
            console.log(_this.flatowner);
        });
    };
    Object.defineProperty(FlatownerEditDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatownerEditDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    FlatownerEditDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    FlatownerEditDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    FlatownerEditDialogComponent.prototype.onSubmitClick = function () {
        var _this = this;
        console.log(this.flatowner_name, this.contact);
        var update_data = {
            flatowner_name: this.flatowner_name,
            contact: this.contact
        };
        console.log(update_data);
        this.http.put('api/updateflatowner/' + this.flatowner._id, update_data).subscribe(function (data) {
            _this.response = data;
            if (_this.response.success == true) {
                _this.toasterService.pop('success', _this.response.message);
            }
            else {
                _this.toasterService.pop('error', _this.response.message);
            }
        });
        this.dialogRef.close();
    };
    FlatownerEditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Edit Flat Owner Details</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"flatowner_name\" placeholder=\"Flat Owner's Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>    \n    </form>\n    <br>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Update</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], FlatownerEditDialogComponent);
    return FlatownerEditDialogComponent;
    var _a;
}());

//  Edit Dialog Box Component for Tenant
var TenantEditDialogComponent = (function () {
    function TenantEditDialogComponent(http, _formBuilder, dialogRef, data, toasterService) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.tenant_name = this.data.tenant.tenant_name;
        this.contact = this.data.tenant.contact;
        this.toasterService = toasterService;
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    }
    TenantEditDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TenantEditDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TenantEditDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    TenantEditDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    TenantEditDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TenantEditDialogComponent.prototype.onSubmitClick = function () {
        var _this = this;
        console.log(this.tenant_name, this.contact);
        var update_data = {
            tenant_name: this.tenant_name,
            contact: this.contact
        };
        console.log(update_data);
        this.http.put('api/updatetenant/' + this.data.tenant._id, update_data).subscribe(function (data) {
            _this.response = data;
            if (_this.response.success == true) {
                _this.toasterService.pop('success', _this.response.message);
            }
            else {
                _this.toasterService.pop('error', _this.response.message);
            }
        });
        this.dialogRef.close();
    };
    TenantEditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Edit Tenant Details</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"tenant_name\" placeholder=\"Tenant's Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>    \n    </form>\n    <br>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Update</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], TenantEditDialogComponent);
    return TenantEditDialogComponent;
    var _a;
}());

//  Edit Dialog Box Component for Flat Member
var MemberEditDialogComponent = (function () {
    function MemberEditDialogComponent(http, _formBuilder, dialogRef, data, toasterService) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.flatmember_name = this.data.member.flatmember_name;
        this.contact = this.data.member.contact;
        this.toasterService = toasterService;
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    }
    MemberEditDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MemberEditDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MemberEditDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    MemberEditDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    MemberEditDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    MemberEditDialogComponent.prototype.onSubmitClick = function () {
        var _this = this;
        console.log(this.flatmember_name, this.contact);
        var update_data = {
            flatmember_name: this.flatmember_name,
            contact: this.contact
        };
        console.log(update_data);
        this.http.put('api/updateflatmember/' + this.data.member._id, update_data).subscribe(function (data) {
            _this.response = data;
            if (_this.response.success == true) {
                _this.toasterService.pop('success', _this.response.message);
            }
            else {
                _this.toasterService.pop('error', _this.response.message);
            }
        });
        this.dialogRef.close();
    };
    MemberEditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Edit Tenant Details</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"flatmember_name\" placeholder=\"Flat Member's Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>    \n    </form>\n    <br>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Update</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], MemberEditDialogComponent);
    return MemberEditDialogComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/layout/flatowner-details/flatowner-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatownerDetailsModule", function() { return FlatownerDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__ = __webpack_require__("../../../../../src/app/layout/flatowner-details/flatowner-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flatowner_details_routing_module__ = __webpack_require__("../../../../../src/app/layout/flatowner-details/flatowner-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular5_toaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FlatownerDetailsModule = (function () {
    function FlatownerDetailsModule() {
    }
    FlatownerDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__flatowner_details_routing_module__["a" /* FlatownerDetailsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular5_toaster__["ToasterModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatSlideToggleModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["b" /* FlatownerEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["d" /* TenantEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["c" /* MemberEditDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["a" /* FlatownerDetailsComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["b" /* FlatownerEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["d" /* TenantEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["c" /* MemberEditDialogComponent */]]
        })
    ], FlatownerDetailsModule);
    return FlatownerDetailsModule;
}());



/***/ }),

/***/ "../../../../../src/assets/images/flatowner.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "flatowner.a1d40c3876bd1460ff1e.png";

/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ })

});
//# sourceMappingURL=flatowner-details.module.chunk.js.map