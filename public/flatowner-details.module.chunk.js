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

module.exports = "<toaster-container></toaster-container>\n\n<div [@routerTransition] class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n                </li>\n    \n                <li class=\"breadcrumb-item active\"><i class=\"fa fa-list-ol\"></i> Flat Details</li>\n            </ol>\n        </div>\n    </div>\n<div class=\" row\">\n\n  <div class=\"col-md-12\">\n    <mat-card class=\"example-card\">\n        <div class=\"pull-right\" *ngIf=\"!chairmanexists\"><button class=\" btn btn-warning buttoncolor \" (click)=\"openFlatOwnerEditDialog();\"  style=\"color:white;\" mat-button><i class=\"fa fa-edit \" ></i> Edit</button>\n          <button  class=\" btn btn-success buttoncolor\" (click)=\"openNewFlatownerDialog()\" style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i> Flat Owner</button>\n          <button *ngIf=\"!tenantexists\" class=\" btn btn-success buttoncolor\" (click)=\"openNewTenantDialog()\" style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i> Tenant</button>\n          <button *ngIf=\"!memberexists\" class=\" btn btn-success buttoncolor\" (click)=\"openNewMemberDialog()\" style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i> Member</button>\n\n\n        </div> \n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Flat Details        \n        </mat-card-title>\n        <mat-card-subtitle>Flatowner details</mat-card-subtitle>\n       \n\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"row\">\n          <div class=\"col-md-1\">\n\n          </div>\n          <div class=\"col-md-5\">\n              <label>Flat NO: </label> {{flat_no}}<br>\n              <label>Flat-Owner Name: </label> {{flatowner_name}}<br>\n              <label>Contact:</label> {{flatowner_contact}}<br>\n            </div>\n            <div class=\"col-md-5\">\n                <label>Floor NO: </label> {{floor_no}}<br>\n                <label>Email Id:</label> {{flatowner_email}}<br>\n              </div>\n        </div>\n\n          \n\n      </mat-card-content>\n\n      \n    </mat-card>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n\n\n \n\n      <div class=\"col-md-6\" *ngIf=\"tenantexists\">\n          <mat-card class=\"example-card\">\n              <button *ngIf=\"!chairmanexists\" class=\" btn btn-success buttoncolor pull-right\" [disabled]=\"!activeNewTenant\" matTooltip=\"Disable All Tenant to Add Tenant!\" matTooltipPosition=\"above\" (click)=\"openNewTenantDialog()\"  style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i>  Tenant</button>\n\n          <mat-card-header>\n\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>Tenant Details        \n                </mat-card-title>\n                </mat-card-header>\n                </mat-card>\n                  <div class=\"example-container mat-elevation-z8\">\n  \n                      <mat-table [dataSource]=\"tenant_dataSource\" matSort>\n                 \n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\"> {{row.tenant_name}} </mat-cell>\n                        </ng-container>\n                    \n                          <!-- Email Column -->\n                          <ng-container matColumnDef=\"email\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n                          </ng-container>\n                  \n                          <!-- Contact Column -->\n                        <ng-container matColumnDef=\"contact\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Status Column -->\n  \n                        <ng-container matColumnDef=\"tenant_status\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" >\n                              \n                                <div *ngIf=\"row.tenant_status;then active else inactive\"></div>\n                       \n                                  <ng-template #active>\n                                      <mat-slide-toggle checked={{row.tenant_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.tenant_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                                          Active</mat-slide-toggle>\n                                      </ng-template> \n                                  <ng-template #inactive><mat-slide-toggle checked={{row.tenant_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.tenant_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                                          Inactive</mat-slide-toggle>\n                                      </ng-template> \n                            </mat-cell>\n                            </ng-container>\n                  \n                          <!-- Actions Column -->\n                          <ng-container matColumnDef=\"actions\">\n                          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n                          <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button class=\"btn btn-parimary\" (click)=\"openTenantEditDialog(row)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                          </mat-cell>\n                          </ng-container>\n                    \n                        <mat-header-row class=\"headertext\" *matHeaderRowDef=\"tenant_displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: tenant_displayedColumns;\">\n                        </mat-row>\n                      </mat-table>\n                    \n                      <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                    </div>\n\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"memberexists\">\n            <mat-card class=\"example-card\">\n                <button *ngIf=\"!chairmanexists\" class=\" btn btn-success buttoncolor pull-right\" (click)=\"openNewMemberDialog()\" style=\"color:white;\" mat-button><i class=\"fa fa-plus \" ></i>  Member</button>\n  \n            <mat-card-header>\n  \n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>Member Details        \n                  </mat-card-title>\n                  </mat-card-header>\n                  </mat-card>\n                    <div class=\"example-container mat-elevation-z8\">\n    \n                        <mat-table [dataSource]=\"member_dataSource\" matSort>\n                                       \n                      \n                          <!-- Name Column -->\n                          <ng-container matColumnDef=\"name\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.flatmember_name}} </mat-cell>\n                          </ng-container>\n                      \n                            <!-- Email Column -->\n                            <ng-container matColumnDef=\"email\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n                            </ng-container>\n                    \n                            <!-- Contact Column -->\n                          <ng-container matColumnDef=\"contact\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n                          </ng-container>\n  \n                          <!-- Status Column -->\n    \n                          <ng-container matColumnDef=\"member_status\">\n                              <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                              <mat-cell *matCellDef=\"let row\" >\n                                  <div *ngIf=\"row.flatmember_status;then active else inactive\"></div>\n\n                                <ng-template #active>\n                                      <mat-slide-toggle checked={{row.flatmember_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.flatmember_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                                          Active</mat-slide-toggle>\n                                      </ng-template> \n                                  <ng-template #inactive><mat-slide-toggle checked={{row.flatmember_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.flatmember_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                                          Inactive</mat-slide-toggle>\n                                      </ng-template> \n                              </mat-cell>\n                              </ng-container>\n                    \n                            <!-- Actions Column -->\n                            <ng-container matColumnDef=\"actions\">\n                            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button class=\"btn btn-parimary\" (click)=\"openMemberEditDialog(row)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                            </mat-cell>\n                            </ng-container>\n                      \n                          <mat-header-row class=\"headertext\" *matHeaderRowDef=\"member_displayedColumns\"></mat-header-row>\n                          <mat-row *matRowDef=\"let row; columns: member_displayedColumns;\">\n                          </mat-row>\n                        </mat-table>\n                      \n                        <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                      </div>\n  \n          </div>\n\n\n\n</div>"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TenantEditDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MemberEditDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NewFlatOwnerDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NewTenantDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NewMemberDialogComponent; });
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
        this.chairmanexists = false;
        this.owner_id = this.flatowner._id;
        //Tenant Table
        this.tenant_displayedColumns = ['name', 'email', 'contact', 'tenant_status', 'actions'];
        this.tenant_selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        //Member table
        this.member_displayedColumns = ['name', 'email', 'contact', 'member_status', 'actions'];
        this.member_selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.activeNewTenant = false;
        this.tenantexists = false;
        this.memberexists = false;
        this.flatmember_owner_id = this.flatowner._id;
        if (localStorage.getItem('chairman')) {
            this.chairman = JSON.parse(localStorage['chairman']);
            this.chairmanexists = true;
            console.log('ChairmanExists:' + this.chairmanexists);
        }
        this.getFlatownerData();
        this.toasterService = toasterService;
        this.checkInactivetenant();
    }
    FlatownerDetailsComponent.prototype.ngOnInit = function () {
    };
    FlatownerDetailsComponent.prototype.getFlatownerData = function () {
        var _this = this;
        this.http.get('api/flatowner/' + this.flatowner.Flat_id._id).subscribe(function (data) {
            if (data) {
                _this.flatownerdetails = data;
                console.log(_this.flatownerdetails);
                localStorage.setItem('flatowner', JSON.stringify(_this.flatownerdetails));
                _this.flat_no = _this.flatownerdetails.Flat_id.flat_no;
                _this.floor_no = _this.flatownerdetails.Flat_id.floor_no;
                _this.flatowner_name = _this.flatownerdetails.flatowner_name;
                _this.flatowner_email = _this.flatownerdetails.email;
                _this.flatowner_contact = _this.flatownerdetails.contact;
                _this.getTenantData();
                _this.getFlatmemberData();
            }
        });
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
    FlatownerDetailsComponent.prototype.checkInactivetenant = function () {
        var _this = this;
        this.http.get('api/inactivetanentbyflatowner/' + this.flatowner._id).subscribe(function (data) {
            var response = data;
            if (response.success == true) {
                _this.activeNewTenant = true;
            }
            else {
                _this.activeNewTenant = false;
            }
            console.log(_this.activeNewTenant);
        });
    };
    FlatownerDetailsComponent.prototype.checkInactiveMember = function () {
        var _this = this;
        this.http.get('api/inactivetanentbyflatowner/' + this.flatowner._id).subscribe(function (data) {
            var response = data;
            if (response.success == true) {
                _this.activeNewTenant = true;
            }
            else {
                _this.activeNewTenant = false;
            }
            console.log(_this.activeNewTenant);
        });
    };
    FlatownerDetailsComponent.prototype.changeTenantStatus = function (tenant, id) {
        var _this = this;
        if (tenant == true) {
            tenant = false;
        }
        else {
            tenant = true;
        }
        var tenant_details = {
            tenant_id: id,
            status: tenant
        };
        console.log(tenant_details);
        this.http.put('api/updatetenantstatus/' + this.flatowner._id, tenant_details).subscribe(function (data) {
            var response = data;
            if (response.success == true) {
                _this.toasterService.pop('success', response.message);
            }
            else if (response.success == false) {
                _this.toasterService.pop('warning', response.message);
            }
            _this.http.get('api/inactivetanentbyflatowner/' + _this.flatowner._id).subscribe(function (data) {
                var response = data;
                console.log(data);
                if (response.success == true) {
                    _this.activeNewTenant = true;
                    _this.toasterService.pop('Info', " Now Flat Owner Will handle Account");
                }
                else {
                    _this.activeNewTenant = false;
                }
                _this.getTenantData();
                _this.getFlatmemberData();
            });
        });
    };
    FlatownerDetailsComponent.prototype.changeMemberStatus = function (member, id) {
        var _this = this;
        console.log(member, id);
        if (member == true) {
            member = false;
        }
        else {
            member = true;
        }
        var member_details = {
            status: member
        };
        console.log(member_details);
        this.http.put('api/updateflatmemberstatus/' + id, member_details).subscribe(function (data) {
            var response = data;
            console.log(data);
            if (response.success == true) {
                _this.activeNewTenant = true;
                _this.toasterService.pop('success', response.message);
            }
            else if (response.success == false) {
                _this.toasterService.pop('warning', response.message);
            }
            _this.getFlatmemberData();
        });
    };
    FlatownerDetailsComponent.prototype.getFlatmemberData = function () {
        var _this = this;
        console.log("flat member method is get called");
        this.http.get('api/activetanentbyflatowner/' + this.flatowner._id).subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.active_tenant = data;
                _this.tenant_id = _this.active_tenant._id;
                _this.flatmember_owner_id = _this.active_tenant._id;
                console.log(_this.active_tenant);
                _this.http.get('api/memberlistbytenant/' + _this.tenant_id).subscribe(function (data) {
                    _this.member = data;
                    if (_this.member.length > 0) {
                        _this.memberexists = true;
                        _this.member_dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
                        _this.member_dataSource.paginator = _this.paginator;
                        _this.member_dataSource.sort = _this.sort;
                    }
                    else {
                        _this.memberexists = false;
                    }
                });
            }
            else {
                _this.http.get('api/memberlistbyflatowner/' + _this.flatowner._id).subscribe(function (data) {
                    _this.member = data;
                    if (_this.member.length > 0) {
                        _this.memberexists = true;
                        _this.member_dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
                        _this.member_dataSource.paginator = _this.paginator;
                        _this.member_dataSource.sort = _this.sort;
                    }
                    else {
                        _this.memberexists = false;
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
    //Add new Fllat Owner data Dialog box
    FlatownerDetailsComponent.prototype.openNewFlatownerDialog = function () {
        var _this = this;
        var flat_id = this.flatowner.Flat_id._id;
        console.log(flat_id);
        var dialogRef = this.dialog.open(NewFlatOwnerDialogComponent, {
            height: '340px',
            width: '630px',
            data: { flat_id: flat_id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == null || result == '') {
            }
            else {
                //Register Block
                _this.http.post('api/addflatowner', result).subscribe(function (data) {
                    _this.response = data;
                    if (_this.response.success == true) {
                        _this.toasterService.pop('success', _this.response.message);
                        _this.getFlatownerData();
                        _this.getTenantData();
                        _this.getFlatmemberData();
                    }
                    else {
                        _this.toasterService.pop('error', _this.response.message);
                    }
                });
                _this.checkInactivetenant();
            }
        });
    };
    //Add new data Dialog box
    FlatownerDetailsComponent.prototype.openNewTenantDialog = function () {
        var _this = this;
        var flatowner_id = this.flatowner._id;
        var dialogRef = this.dialog.open(NewTenantDialogComponent, {
            height: '340px',
            width: '630px',
            data: { flatowner_id: flatowner_id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == null || result == '') {
            }
            else {
                //Register Block
                _this.http.post('api/addtenant', result).subscribe(function (data) {
                    _this.response = data;
                    if (_this.response.success == true) {
                        _this.toasterService.pop('success', _this.response.message);
                        _this.getTenantData();
                        _this.getFlatmemberData();
                    }
                    else {
                        _this.toasterService.pop('error', _this.response.message);
                    }
                });
                _this.checkInactivetenant();
            }
        });
    };
    //Add new FlatMember data Dialog box
    FlatownerDetailsComponent.prototype.openNewMemberDialog = function () {
        var _this = this;
        var parent_id = this.flatmember_owner_id;
        var tenantisexitsts = this.tenantexists;
        console.log(parent_id, tenantisexitsts);
        var dialogRef = this.dialog.open(NewMemberDialogComponent, {
            height: '250px',
            width: '630px',
            data: { parent_id: parent_id, tenantisexitsts: tenantisexitsts }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == null || result == '') {
            }
            else {
                //Register Block
                _this.http.post('api/addflatmember', result).subscribe(function (data) {
                    _this.response = data;
                    if (_this.response.success == true) {
                        _this.toasterService.pop('success', _this.response.message);
                        _this.getFlatmemberData();
                    }
                    else {
                        _this.toasterService.pop('error', _this.response.message);
                    }
                });
                _this.checkInactivetenant();
            }
        });
    };
    // Edit Dialog Box
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

// Add new Flat Owner Dialog Box Component
var NewFlatOwnerDialogComponent = (function () {
    function NewFlatOwnerDialogComponent(http, _formBuilder, dialogRef, data) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(12)]],
            confirmpasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern]]
        });
    }
    NewFlatOwnerDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NewFlatOwnerDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewFlatOwnerDialogComponent.prototype, "emailCtrl", {
        get: function () { return this.firstFormGroup.get('emailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewFlatOwnerDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewFlatOwnerDialogComponent.prototype, "passwordCtrl", {
        get: function () { return this.firstFormGroup.get('passwordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewFlatOwnerDialogComponent.prototype, "confirmpasswordCtrl", {
        get: function () { return this.firstFormGroup.get('confirmpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    NewFlatOwnerDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    NewFlatOwnerDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    NewFlatOwnerDialogComponent.prototype.onSubmitClick = function () {
        console.log(this.data.flat_id);
        var flatownerdata = {
            society_id: this.societyadmin.id,
            flat_id: this.data.flat_id,
            flatowner_name: this.flatowner_name,
            flatowner_email: this.email,
            flatowner_contact: this.contact,
            flatowner_password: this.confirm_password
        };
        this.dialogRef.close(flatownerdata);
    };
    NewFlatOwnerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Flat Owner Registration</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n       \n        <mat-form-field>\n          <input matInput [(ngModel)]=\"flatowner_name\" placeholder=\"Flat Owner Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" formControlName=\"emailCtrl\" required>\n            <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\" class=\"text-danger\">\n            <div *ngIf=\"emailCtrl.errors.required\"><small>Required</small></div>\n    <div *ngIf=\"(emailCtrl.dirty)\" class=\"text-danger\">        \n    <div *ngIf=\"emailCtrl.errors.email\"><small>Invalid</small></div>\n    </div>\n    </div>\n\n            </mat-form-field>\n             \n    <mat-form-field>\n        <input matInput type=\"password\" [(ngModel)]=\"password\"  #passwordinput placeholder=\"Password\" formControlName=\"passwordCtrl\" required>\n        <mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n        <div *ngIf=\"passwordCtrl.invalid && (passwordCtrl.dirty || passwordCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"passwordCtrl.errors.required\"><small>Required</small></div>\n        <div *ngIf=\"passwordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n        <div *ngIf=\"passwordCtrl.errors.maxlength\"><small>Must not exceed 12 characters</small></div>\n      </div>   \n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\" pattern={{this.password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"confirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n        <mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n        <div *ngIf=\"confirmpasswordCtrl.invalid && (confirmpasswordCtrl.dirty || confirmpasswordCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"confirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n        <div *ngIf=\"confirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n      </div>  \n        </mat-form-field>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Submit</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], NewFlatOwnerDialogComponent);
    return NewFlatOwnerDialogComponent;
}());

// Add new Tenant Dialog Box Component
var NewTenantDialogComponent = (function () {
    function NewTenantDialogComponent(http, _formBuilder, dialogRef, data) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(12)]],
            confirmpasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern]]
        });
    }
    NewTenantDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NewTenantDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewTenantDialogComponent.prototype, "emailCtrl", {
        get: function () { return this.firstFormGroup.get('emailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewTenantDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewTenantDialogComponent.prototype, "passwordCtrl", {
        get: function () { return this.firstFormGroup.get('passwordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewTenantDialogComponent.prototype, "confirmpasswordCtrl", {
        get: function () { return this.firstFormGroup.get('confirmpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    NewTenantDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    NewTenantDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    NewTenantDialogComponent.prototype.onSubmitClick = function () {
        console.log(this.data.flatowner_id);
        var tenant = {
            society_id: this.societyadmin.id,
            flatowner_id: this.data.flatowner_id,
            tenant_name: this.tenant_name,
            tenant_email: this.email,
            tenant_contact: this.contact,
            tenant_password: this.confirm_password
        };
        this.dialogRef.close(tenant);
    };
    NewTenantDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Tenant Registration</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n       \n        <mat-form-field>\n          <input matInput [(ngModel)]=\"tenant_name\" placeholder=\"Tenant Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" formControlName=\"emailCtrl\" required>\n            <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\" class=\"text-danger\">\n            <div *ngIf=\"emailCtrl.errors.required\"><small>Required</small></div>\n    <div *ngIf=\"(emailCtrl.dirty)\" class=\"text-danger\">        \n    <div *ngIf=\"emailCtrl.errors.email\"><small>Invalid</small></div>\n    </div>\n    </div>\n\n            </mat-form-field>\n             \n    <mat-form-field>\n        <input matInput type=\"password\" [(ngModel)]=\"password\"  #passwordinput placeholder=\"Password\" formControlName=\"passwordCtrl\" required>\n        <mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n        <div *ngIf=\"passwordCtrl.invalid && (passwordCtrl.dirty || passwordCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"passwordCtrl.errors.required\"><small>Required</small></div>\n        <div *ngIf=\"passwordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n        <div *ngIf=\"passwordCtrl.errors.maxlength\"><small>Must not exceed 12 characters</small></div>\n      </div>   \n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\" pattern={{this.password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"confirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n        <mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n        <div *ngIf=\"confirmpasswordCtrl.invalid && (confirmpasswordCtrl.dirty || confirmpasswordCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"confirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n        <div *ngIf=\"confirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n      </div>  \n        </mat-form-field>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Submit</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], NewTenantDialogComponent);
    return NewTenantDialogComponent;
}());

// Add new Member Dialog Box Component
var NewMemberDialogComponent = (function () {
    function NewMemberDialogComponent(http, _formBuilder, dialogRef, data) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    }
    NewMemberDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NewMemberDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewMemberDialogComponent.prototype, "emailCtrl", {
        get: function () { return this.firstFormGroup.get('emailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewMemberDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    NewMemberDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    NewMemberDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    NewMemberDialogComponent.prototype.onSubmitClick = function () {
        if (this.data.tenantisexitsts == true) {
            var flatmemberbytenant = {
                society_id: this.societyadmin.id,
                tenant_id: this.data.parent_id,
                flatmember_name: this.flatmember_name,
                flatmember_email: this.email,
                flatmember_contact: this.contact,
            };
            this.dialogRef.close(flatmemberbytenant);
        }
        else if (this.data.tenantisexitsts == false) {
            var flatmemberbtflatowner = {
                society_id: this.societyadmin.id,
                flatowner_id: this.data.parent_id,
                flatmember_name: this.flatmember_name,
                flatmember_email: this.email,
                flatmember_contact: this.contact,
            };
            this.dialogRef.close(flatmemberbtflatowner);
        }
    };
    NewMemberDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Flat Member Registration</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n       \n        <mat-form-field>\n          <input matInput [(ngModel)]=\"flatmember_name\" placeholder=\"Flat Member Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" formControlName=\"emailCtrl\" required>\n            <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\" class=\"text-danger\">\n            <div *ngIf=\"emailCtrl.errors.required\"><small>Required</small></div>\n    <div *ngIf=\"(emailCtrl.dirty)\" class=\"text-danger\">        \n    <div *ngIf=\"emailCtrl.errors.email\"><small>Invalid</small></div>\n    </div>\n    </div>\n\n            </mat-form-field>\n             \n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Submit</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], NewMemberDialogComponent);
    return NewMemberDialogComponent;
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
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["b" /* FlatownerEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["g" /* TenantEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["c" /* MemberEditDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["d" /* NewFlatOwnerDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["f" /* NewTenantDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["e" /* NewMemberDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["a" /* FlatownerDetailsComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["b" /* FlatownerEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["g" /* TenantEditDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["c" /* MemberEditDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["d" /* NewFlatOwnerDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["f" /* NewTenantDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__flatowner_details_component__["e" /* NewMemberDialogComponent */]]
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