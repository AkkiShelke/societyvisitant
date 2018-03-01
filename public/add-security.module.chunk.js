webpackJsonp(["add-security.module"],{

/***/ "../../../../../src/app/layout/add-security/add-security-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSecurityRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_security_component__ = __webpack_require__("../../../../../src/app/layout/add-security/add-security.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__add_security_component__["a" /* AddSecurityComponent */]
    }
];
var AddSecurityRoutingModule = (function () {
    function AddSecurityRoutingModule() {
    }
    AddSecurityRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AddSecurityRoutingModule);
    return AddSecurityRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-security/add-security.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div [@routerTransition] class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n\n            <li class=\"breadcrumb-item active\"><i class=\"fa fa-list-ol\"></i> Security List</li>\n        </ol>\n    </div>\n</div>\n\n<div class=\"example-header\">\n  <mat-form-field>\n    <input  matTooltip=\"Search Security Details!\" matTooltipPosition=\"above\" style=\"width: 50%;\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n  </mat-form-field>\n  <div class=\"pull-right\">\n      <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n  <button *ngIf=\"!chairmanexists\" class=\" btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"openDialog()\"  matTooltip=\"Register Security!\" matTooltipPosition=\"above\" ><i class=\"fa fa-plus\"></i> Add Security</button>\n</div>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox color=\"primary\" matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell  *matCellDef=\"let row\">\n          <mat-checkbox color=\"primary\" matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n    <!-- ID Column -->\n    <!-- <ng-container matColumnDef=\"id\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container> -->\n\n    <!-- Block Column -->\n    <ng-container matColumnDef=\"block\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Manager </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.Manager_id.manager_name}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.security_name}} </mat-cell>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n    </ng-container>\n\n\n\n      <!-- Contact Column -->\n    <ng-container matColumnDef=\"contact\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n    </ng-container>\n\n     <!-- Status Column -->\n    <ng-container matColumnDef=\"security_status\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >\n          <div *ngIf=\"row.security_status;then active else inactive\"></div>\n\n          <ng-template #active>\n              <mat-slide-toggle checked={{row.security_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.security_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                  Active</mat-slide-toggle>\n              </ng-template> \n          <ng-template #inactive><mat-slide-toggle checked={{row.security_status}}   [disabled]=\"chairmanexists\"   (change)=\"changeStatus(row.security_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">  \n                  Inactive</mat-slide-toggle>\n              </ng-template> \n      </mat-cell>\n      </ng-container>  \n\n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button matTooltip=\"Edit Security!\" matTooltipPosition=\"above\" matTooltip=\"Edit Security!\" matTooltipPosition=\"above\" class=\"btn btn-parimary\" (click)=\"openEditDialog(row._id)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n      </mat-cell>\n      </ng-container>\n\n    <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/add-security/add-security.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 12px;\n  width: 50%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.headertext {\n  font-size: large;\n  font-style: bold;\n  font-size: 12px;\n  color: black; }\n\n.mat-column-select {\n  overflow: visible; }\n\n.mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/add-security/add-security.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSecurityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TestDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditDialogComponent; });
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







var AddSecurityComponent = (function () {
    function AddSecurityComponent(http, dialog, toasterService, _formBuilder) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.chairmanexists = false;
        this.displayedColumns = ['select', 'block', 'name', 'email', 'contact', 'security_status', 'actions'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.toasterService = toasterService;
        if (localStorage.getItem('chairman')) {
            this.chairman = JSON.parse(localStorage['chairman']);
            this.chairmanexists = true;
        }
        console.log('ChairmanExists:' + this.chairmanexists);
        this.getSecurityData();
    }
    AddSecurityComponent.prototype.getSecurityData = function () {
        var _this = this;
        this.http.get('api/securitylistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.security = data;
            console.log(_this.security);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatTableDataSource */](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddSecurityComponent.prototype.changeStatus = function (security, id) {
        var _this = this;
        if (security == true) {
            security = false;
        }
        else {
            security = true;
        }
        var security_details = {
            status: security
        };
        console.log(security_details);
        this.http.put('api/updatesecuritystatus/' + id, security_details).subscribe(function (data) {
            console.log(data);
            var response = data;
            if (response.success == true) {
                _this.toasterService.pop('success', response.message);
            }
            else if (response.success == false) {
                _this.toasterService.pop('warning', response.message);
            }
            _this.getSecurityData();
        });
    };
    AddSecurityComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(TestDialogComponent, {
            height: '350px',
            width: '620px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == null || result == '') {
            }
            else {
                //Register Security
                _this.http.post('api/addsecurity', result).subscribe(function (data) {
                    _this.response = data;
                    if (_this.response.success == true) {
                        _this.toasterService.pop('success', _this.response.message);
                        _this.getSecurityData();
                    }
                    else {
                        _this.toasterService.pop('error', _this.response.message);
                    }
                });
            }
        });
    };
    AddSecurityComponent.prototype.openEditDialog = function (security_id) {
        var _this = this;
        console.log(security_id);
        var dialogRef = this.dialog.open(EditDialogComponent, {
            height: '360px',
            width: '260px',
            data: { security_id: security_id },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            _this.getSecurityData();
            if (result == null || result == '') {
            }
            else {
            }
        });
    };
    AddSecurityComponent.prototype.ngOnInit = function () {
    };
    AddSecurityComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AddSecurityComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AddSecurityComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatPaginator */])
    ], AddSecurityComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSort */])
    ], AddSecurityComponent.prototype, "sort", void 0);
    AddSecurityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-security',
            template: __webpack_require__("../../../../../src/app/layout/add-security/add-security.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/add-security/add-security.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddSecurityComponent);
    return AddSecurityComponent;
    var _a;
}());

//Dialog Box Component
var TestDialogComponent = (function () {
    function TestDialogComponent(http, _formBuilder, dialogRef, data) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.firstFormGroup = this._formBuilder.group({
            managerCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(12)]],
            confirmpasswordCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    }
    Object.defineProperty(TestDialogComponent.prototype, "managerCtrl", {
        get: function () { return this.firstFormGroup.get('managerCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDialogComponent.prototype, "emailCtrl", {
        get: function () { return this.firstFormGroup.get('emailCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDialogComponent.prototype, "passwordCtrl", {
        get: function () { return this.firstFormGroup.get('passwordCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDialogComponent.prototype, "confirmpasswordCtrl", {
        get: function () { return this.firstFormGroup.get('confirmpasswordCtrl'); },
        enumerable: true,
        configurable: true
    });
    TestDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/managerlistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.manager = data;
            console.log(_this.manager);
        });
    };
    //Contact Validation
    TestDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Only String (Name)
    TestDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TestDialogComponent.prototype.onSubmitClick = function () {
        console.log(this.manager_id);
        var security = {
            society_id: this.societyadmin.id,
            manager_id: this.manager_id,
            security_name: this.security_name,
            email: this.security_email,
            contact: this.security_contact,
            password: this.security_confirm_password
        };
        this.dialogRef.close(security);
    };
    TestDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Security Registration</div>\n  <mat-dialog-content>\n  <form [formGroup]=\"firstFormGroup\" >\n  <ng-template matStepLabel>Fill out your Details</ng-template>\n  <mat-form-field>\n  <mat-select [(value)]=\"manager_id\" placeholder=\"Select Manager\" formControlName=\"managerCtrl\" required>\n  <mat-option *ngFor=\"let list of manager\" [value]=\"list._id\">{{list.manager_name}}</mat-option>\n</mat-select>\n<div *ngIf=\"managerCtrl.invalid && (managerCtrl.dirty || managerCtrl.touched)\" class=\"text-danger\">\n<div *ngIf=\"managerCtrl.errors.required\"><small>Required</small></div>\n</div>\n</mat-form-field>\n<mat-form-field>\n<input matInput [(ngModel)]=\"security_name\" placeholder=\"Security Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n<div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n<div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n</div>\n</mat-form-field>\n\n<mat-form-field>\n<input matInput [(ngModel)]=\"security_contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n<mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n<div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n<div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n<div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n<div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n</div>\n</mat-form-field>\n\n<mat-form-field>\n<input matInput [(ngModel)]=\"security_email\" placeholder=\"Email\" formControlName=\"emailCtrl\" required>\n<div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\" class=\"text-danger\">\n<div *ngIf=\"emailCtrl.errors.required\"><small>Required</small></div>\n<div *ngIf=\"emailCtrl.dirty\" class=\"text-danger\">        \n<div *ngIf=\"emailCtrl.errors.email\"><small>Invalid</small></div>\n</div>\n</div>\n\n</mat-form-field>\n\n \n<mat-form-field>\n<input matInput type=\"password\" [(ngModel)]=\"security_password\"  #passwordinput placeholder=\"Password\" formControlName=\"passwordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n<mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n<div *ngIf=\"passwordCtrl.invalid && (passwordCtrl.dirty || passwordCtrl.touched)\" class=\"text-danger\">\n<div *ngIf=\"passwordCtrl.errors.required\"><small>Required</small></div>\n<div *ngIf=\"passwordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n<div *ngIf=\"passwordCtrl.errors.maxlength\"><small>Must not exceed 12 characters</small></div>\n</div>   \n</mat-form-field>\n\n<mat-form-field>\n<input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"security_confirm_password\" pattern={{this.security_password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"confirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n<mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n<div *ngIf=\"confirmpasswordCtrl.invalid && (confirmpasswordCtrl.dirty || confirmpasswordCtrl.touched)\" class=\"text-danger\">\n<div *ngIf=\"confirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n<div *ngIf=\"confirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n</div>  \n</mat-form-field>\n\n</form>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" (click)=\"onSubmitClick()\" style=\"color:white;\"mat-button [disabled]=\"!firstFormGroup.valid\" >Submit</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialogRef */], Object])
    ], TestDialogComponent);
    return TestDialogComponent;
}());

//  Edit Dialog Box Component
var EditDialogComponent = (function () {
    function EditDialogComponent(http, _formBuilder, dialogRef, data, toasterService) {
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.toasterService = toasterService;
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    }
    EditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/security/' + this.data.security_id).subscribe(function (data) {
            _this.security = data;
            _this.security_name = _this.security.security_name;
            _this.contact = _this.security.contact;
            console.log(_this.security);
        });
    };
    Object.defineProperty(EditDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditDialogComponent.prototype, "contactCtrl", {
        get: function () { return this.firstFormGroup.get('contactCtrl'); },
        enumerable: true,
        configurable: true
    });
    //Only String (Name)
    EditDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    EditDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    EditDialogComponent.prototype.onSubmitClick = function () {
        var _this = this;
        console.log(this.security_name, this.contact);
        var update_data = {
            security_name: this.security_name,
            contact: this.contact
        };
        console.log(update_data);
        this.http.put('api/updatesecurity/' + this.security._id, update_data).subscribe(function (data) {
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
    EditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Edit Security Details</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Update out your Details</ng-template>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"security_name\" placeholder=\"Security Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>    \n    </form>\n    <br>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Update</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialogRef */], Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], EditDialogComponent);
    return EditDialogComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-security/add-security.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSecurityModule", function() { return AddSecurityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_security_component__ = __webpack_require__("../../../../../src/app/layout/add-security/add-security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_security_routing_module__ = __webpack_require__("../../../../../src/app/layout/add-security/add-security-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__ = __webpack_require__("../../../../angular5-toaster/dist/bundles/angular5-toaster.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular5_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular5_toaster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AddSecurityModule = (function () {
    function AddSecurityModule() {
    }
    AddSecurityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_security_routing_module__["a" /* AddSecurityRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__["ToasterModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSlideToggleModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__add_security_component__["c" /* TestDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__add_security_component__["b" /* EditDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_security_component__["a" /* AddSecurityComponent */], __WEBPACK_IMPORTED_MODULE_2__add_security_component__["c" /* TestDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__add_security_component__["b" /* EditDialogComponent */]]
        })
    ], AddSecurityModule);
    return AddSecurityModule;
}());



/***/ })

});
//# sourceMappingURL=add-security.module.chunk.js.map