webpackJsonp(["add-manager.module"],{

/***/ "../../../../../src/app/layout/add-manager/add-manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_manager_component__ = __webpack_require__("../../../../../src/app/layout/add-manager/add-manager.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__add_manager_component__["a" /* AddManagerComponent */]
    }
];
var AddManagerRoutingModule = (function () {
    function AddManagerRoutingModule() {
    }
    AddManagerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AddManagerRoutingModule);
    return AddManagerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-manager/add-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div [@routerTransition] class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xl-12\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n\n            <li class=\"breadcrumb-item active\"><i class=\"fa fa-list-ol\"></i> Manager List</li>\n        </ol>\n    </div>\n</div>\n\n\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input  matTooltip=\"Search Manager Details!\" matTooltipPosition=\"above\" style=\"width: 50%;\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <div class=\"pull-right\">\n        <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n    <button class=\" btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"openDialog()\"  matTooltip=\"Register Manager!\" matTooltipPosition=\"above\" ><i class=\"fa fa-plus\"></i> Add Manager</button>\n      </div>\n  </div>\n  \n  <div class=\"example-container mat-elevation-z8\">\n  \n    <mat-table [dataSource]=\"dataSource\" matSort>\n            <!-- Checkbox Column -->\n            <ng-container matColumnDef=\"select\">\n              <mat-header-cell *matHeaderCellDef>\n                <mat-checkbox color=\"primary\" matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                              [checked]=\"selection.hasValue() && isAllSelected()\"\n                              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n              </mat-header-cell>\n              <mat-cell  *matCellDef=\"let row\">\n                <mat-checkbox color=\"primary\" matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                              (change)=\"$event ? selection.toggle(row) : null\"\n                              [checked]=\"selection.isSelected(row)\">\n                </mat-checkbox>\n              </mat-cell>\n            </ng-container>\n  \n      <!-- Block Column -->\n      <ng-container matColumnDef=\"block\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Block </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Block_id.block_name}} </mat-cell>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.manager_name}} </mat-cell>\n      </ng-container>\n  \n        <!-- Email Column -->\n        <ng-container matColumnDef=\"email\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.email\"> {{row.email}} </mat-cell>\n        </ng-container>\n\n        <!-- Contact Column -->\n      <ng-container matColumnDef=\"contact\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.contact\"> {{row.contact}} </mat-cell>\n      </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"manager_status\">\n          <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" >\n\n              <mat-slide-toggle checked={{row.manager_status}}   (change)=\"changeStatus(row.manager_status,row._id)\" color=\"primary\" matTooltip=\"change the status!\" matTooltipPosition=\"above\">Active</mat-slide-toggle>\n          \n          </mat-cell>\n          </ng-container>\n\n        <!-- Actions Column -->\n        <ng-container matColumnDef=\"actions\">\n        <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button matTooltip=\"Edit Manager!\" matTooltipPosition=\"above\"  class=\"btn btn-parimary\" (click)=\"openEditDialog(row._id)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n        </mat-cell>\n        </ng-container>\n  \n      <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/layout/add-manager/add-manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\n  background-color: lightblue; }\n  .mat-dialog-content form {\n    padding: 1% 2%; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n  .example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n  .mat-form-field {\n  font-size: 14px;\n  width: 35%; }\n  .mat-table {\n  overflow: auto;\n  max-height: 500px; }\n  .headertext {\n  font-size: large;\n  font-style: bold;\n  color: black;\n  font-size: 12px; }\n  .mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/add-manager/add-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManagerComponent; });
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







var AddManagerComponent = (function () {
    function AddManagerComponent(http, dialog, toasterService, _formBuilder) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.displayedColumns = ['select', 'block', 'name', 'email', 'contact', 'manager_status', 'actions'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.toasterService = toasterService;
        this.getManagerData();
    }
    AddManagerComponent.prototype.getManagerData = function () {
        var _this = this;
        this.http.get('api/managerlistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.manager = data;
            console.log(_this.manager);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddManagerComponent.prototype.changeStatus = function (manager, id) {
        var _this = this;
        manager = !manager;
        var manager_details = {
            status: manager
        };
        console.log(manager_details);
        this.http.put('api/updatemanagerstatus/' + id, manager_details).subscribe(function (data) {
            console.log(data);
            var response = data;
            if (response.success == true) {
                _this.toasterService.pop('success', response.message);
            }
            else {
                _this.toasterService.pop('error', response.message);
            }
            _this.getManagerData();
        });
    };
    AddManagerComponent.prototype.openDialog = function () {
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
                //Register Block
                _this.http.post('api/addmanager', result).subscribe(function (data) {
                    _this.response = data;
                    if (_this.response.success == true) {
                        _this.toasterService.pop('success', _this.response.message);
                        _this.getManagerData();
                    }
                    else {
                        _this.toasterService.pop('error', _this.response.message);
                    }
                });
            }
        });
    };
    AddManagerComponent.prototype.openEditDialog = function (manager_id) {
        var _this = this;
        console.log(manager_id);
        var dialogRef = this.dialog.open(EditDialogComponent, {
            height: '360px',
            width: '260px',
            data: { manager_id: manager_id },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            _this.getManagerData();
            if (result == null || result == '') {
            }
            else {
            }
        });
    };
    AddManagerComponent.prototype.ngOnInit = function () {
    };
    AddManagerComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AddManagerComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AddManagerComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    //Contact Validation
    AddManagerComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Only String (Name)
    AddManagerComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */])
    ], AddManagerComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */])
    ], AddManagerComponent.prototype, "sort", void 0);
    AddManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-manager',
            template: __webpack_require__("../../../../../src/app/layout/add-manager/add-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/add-manager/add-manager.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddManagerComponent);
    return AddManagerComponent;
    var _a;
}());

//Dialog Box Component
var TestDialogComponent = (function () {
    function TestDialogComponent(http, _formBuilder, dialogRef, data) {
        var _this = this;
        this.http = http;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.http.get('api/blocklistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.block = data;
        });
        this.firstFormGroup = this._formBuilder.group({
            blockCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            nameCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            emailCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]],
            contactCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(12)]],
            confirmpasswordCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern]]
        });
    }
    TestDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/blocklistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.block = data;
            console.log(_this.block);
        });
    };
    Object.defineProperty(TestDialogComponent.prototype, "blockCtrl", {
        get: function () { return this.firstFormGroup.get('blockCtrl'); },
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
    //Only String (Name)
    TestDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Contact Validation
    TestDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TestDialogComponent.prototype.onSubmitClick = function () {
        console.log(this.block_id);
        var manager = {
            society_id: this.societyadmin.id,
            block_id: this.block_id,
            manager_name: this.manager_name,
            email: this.email,
            contact: this.contact,
            password: this.confirm_password
        };
        this.dialogRef.close(manager);
    };
    TestDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <div matDialogTitle>Manager Registration</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n        <mat-form-field>\n            <mat-select [(value)]=\"block_id\" placeholder=\"Select Block\" formControlName=\"blockCtrl\" required>\n            <mat-option *ngFor=\"let list of block\" [value]=\"list._id\">{{list.block_name}}</mat-option>\n        </mat-select>\n        <div *ngIf=\"blockCtrl.invalid && (blockCtrl.dirty || blockCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"blockCtrl.errors.required\"><small>Required</small></div>\n      </div>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"manager_name\" placeholder=\"Manager Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" formControlName=\"emailCtrl\" required>\n            <div *ngIf=\"emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)\" class=\"text-danger\">\n            <div *ngIf=\"emailCtrl.errors.required\"><small>Required</small></div>\n    <div *ngIf=\"(emailCtrl.dirty)\" class=\"text-danger\">        \n    <div *ngIf=\"emailCtrl.errors.email\"><small>Invalid</small></div>\n    </div>\n    </div>\n\n            </mat-form-field>\n             \n    <mat-form-field>\n        <input matInput type=\"password\" [(ngModel)]=\"password\"  #passwordinput placeholder=\"Password\" formControlName=\"passwordCtrl\" required>\n        <mat-hint align=\"end\">{{passwordinput.value?.length || 0}}/[Min 6 -Max 12]</mat-hint>\n        <div *ngIf=\"passwordCtrl.invalid && (passwordCtrl.dirty || passwordCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"passwordCtrl.errors.required\"><small>Required</small></div>\n        <div *ngIf=\"passwordCtrl.errors.minlength\"><small>At least 6 characters long</small></div>\n        <div *ngIf=\"passwordCtrl.errors.maxlength\"><small>Must not exceed 12 characters</small></div>\n      </div>   \n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\" pattern={{this.password}} #confirmpasswrdinput placeholder=\"Confirm Password\" formControlName=\"confirmpasswordCtrl\" minlength=\"6\" maxlength=\"12\" required>\n        <mat-hint align=\"end\">{{confirmpasswrdinput.value?.length || 0}}</mat-hint>\n        <div *ngIf=\"confirmpasswordCtrl.invalid && (confirmpasswordCtrl.dirty || confirmpasswordCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"confirmpasswordCtrl.errors.required\"><small>Re-Enter the Password</small></div>\n        <div *ngIf=\"confirmpasswordCtrl.errors.pattern\"><small>Password is not match</small></div>\n      </div>  \n        </mat-form-field>\n\n    </form>\n    <br>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Submit</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
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
        this.http.get('api/manager/' + this.data.manager_id).subscribe(function (data) {
            _this.manager = data;
            _this.manager_name = _this.manager.manager_name;
            _this.contact = _this.manager.contact;
            console.log(_this.manager);
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
        console.log(this.manager_name, this.contact);
        var update_data = {
            manager_name: this.manager_name,
            contact: this.contact
        };
        console.log(update_data);
        this.http.put('api/updatemanager/' + this.manager._id, update_data).subscribe(function (data) {
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
            template: "\n  <div matDialogTitle>Edit Manager Details</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"manager_name\" placeholder=\"Manager Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n        </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n        <input matInput [(ngModel)]=\"contact\" #contactinput placeholder=\"Contact\" (keypress)=\"NumPress($event)\" formControlName=\"contactCtrl\" minlength=\"10\" maxlength=\"10\" required>\n        <mat-hint align=\"end\">{{contactinput.value?.length || 0}}/10</mat-hint>\n        <div *ngIf=\"contactCtrl.invalid && (contactCtrl.dirty || contactCtrl.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contactCtrl.errors.required\"><small>Required</small></div>    \n        <div *ngIf=\"contactCtrl.errors.minlength\"><small>Should be 10 Digit</small></div>\n        <div *ngIf=\"contactCtrl.errors.maxlength\"><small>Should be 10 Digit</small></div>\n    </div>\n\n    </mat-form-field>    \n    </form>\n    <br>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"pull-right\">\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancle</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"onSubmitClick()\" mat-button [disabled]=\"!firstFormGroup.valid\" matDialogClose>Update</button>\n\n  </mat-dialog-actions>",
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object])
    ], EditDialogComponent);
    return EditDialogComponent;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-manager/add-manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManagerModule", function() { return AddManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_manager_component__ = __webpack_require__("../../../../../src/app/layout/add-manager/add-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_manager_routing_module__ = __webpack_require__("../../../../../src/app/layout/add-manager/add-manager-routing.module.ts");
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










var AddManagerModule = (function () {
    function AddManagerModule() {
    }
    AddManagerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_manager_routing_module__["a" /* AddManagerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__["ToasterModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSlideToggleModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__add_manager_component__["c" /* TestDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__add_manager_component__["b" /* EditDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_manager_component__["a" /* AddManagerComponent */], __WEBPACK_IMPORTED_MODULE_2__add_manager_component__["c" /* TestDialogComponent */], __WEBPACK_IMPORTED_MODULE_2__add_manager_component__["b" /* EditDialogComponent */]]
        })
    ], AddManagerModule);
    return AddManagerModule;
}());



/***/ })

});
//# sourceMappingURL=add-manager.module.chunk.js.map