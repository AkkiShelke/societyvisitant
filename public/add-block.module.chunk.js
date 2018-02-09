webpackJsonp(["add-block.module"],{

/***/ "../../../../../src/app/layout/add-block/add-block-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlockRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_block_component__ = __webpack_require__("../../../../../src/app/layout/add-block/add-block.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_1__add_block_component__["a" /* AddBlockComponent */]
    }
];
var AddBlockRoutingModule = (function () {
    function AddBlockRoutingModule() {
    }
    AddBlockRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AddBlockRoutingModule);
    return AddBlockRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-block/add-block.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div [@routerTransition] class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-12\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                  <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n              </li>\n    \n              <li class=\"breadcrumb-item active\"><i class=\"fa fa-list-ol\"></i>Block List</li>\n          </ol>\n      </div>\n  </div>\n  <div class=\"example-header\">\n        <mat-form-field>\n          <input matTooltip=\"Search Block Details!\" matTooltipPosition=\"above\"  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        </mat-form-field>\n        <div class=\"pull-right\">\n            <button class=\" btn btn-danger\" matTooltip=\"Send Message!\" matTooltipPosition=\"above\"><i class=\"fa fa-paper-plane\"></i></button>\n\n            <button class=\"btn btn-success buttoncolor\" style=\"color:white;\" (click)=\"openDialog()\"  matTooltip=\"Register Block!\" matTooltipPosition=\"above\"  ><i class=\"fa fa-plus\"></i> Add BLock</button>\n                \n        </div>\n\n      </div>\n      \n      <div class=\"example-container mat-elevation-z8\">\n      \n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n             <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox color=\"primary\"  matTooltip=\"Select All Rows!\" matTooltipPosition=\"above\"  (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox color=\"primary\" matTooltip=\"Select This Row!\" matTooltipPosition=\"above\"  (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n      \n          <!-- ID Column\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n          </ng-container> -->\n      \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"block_name\">\n            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.block_name}} </mat-cell>\n          </ng-container>\n      \n          <!-- Location Column -->\n          <ng-container matColumnDef=\"no_of_flats\">\n            <mat-header-cell class=\"headertext\" *matHeaderCellDef mat-sort-header> Flats </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.flats\"> {{row.no_of_flats}} </mat-cell>\n          </ng-container>\n\n\n            <!-- Details Column -->\n            <!-- <ng-container matColumnDef=\"details\">\n            <mat-header-cell  class=\"headertext\" *matHeaderCellDef mat-sort-header> Details </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.color]=\"row.details\"><button routerLink=\"/society_details\" (click)=\"saveBlockId(row)\"  matTooltip=\"View Block's Details!\" matTooltipPosition=\"above\" class=\"btn btn-primary buttoncolor\" style=\"color:white;\"><i  class=\"fa fa-eye\"></i> View</button>\n            </mat-cell>\n            </ng-container> -->\n      \n          <mat-header-row class=\"headertext\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n      \n        <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n      </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/layout/add-block/add-block.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\n  background-color: lightblue; }\n  .mat-dialog-content form {\n    padding: 1% 2%; }\n  .example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n  .example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n  .mat-form-field {\n  font-size: 14px;\n  width: 35%; }\n  .mat-table {\n  overflow: auto;\n  max-height: 500px; }\n  .headertext {\n  font-size: large;\n  font-style: bold;\n  color: black;\n  font-size: 12px; }\n  .mat-cell {\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/add-block/add-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TestDialogComponent; });
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







var AddBlockComponent = (function () {
    function AddBlockComponent(http, dialog, toasterService, _formBuilder) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        //Dialogbox
        this.version = __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* VERSION */];
        this.displayedColumns = ['select', 'block_name', 'no_of_flats'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.toasterService = toasterService;
        this.getBlockData();
    }
    AddBlockComponent.prototype.getBlockData = function () {
        var _this = this;
        this.http.get('api/blocklistdetails/' + this.societyadmin.id).subscribe(function (data) {
            _this.block = data;
            console.log(_this.block);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTableDataSource */](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AddBlockComponent.prototype.saveBlockId = function (block_details) {
        console.log(block_details);
    };
    AddBlockComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(TestDialogComponent, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result == null || result == '') {
            }
            else {
                //Register Block
                _this.http.post('api/addblock', result).subscribe(function (data) {
                    _this.response = data;
                    if (_this.response.success == true) {
                        _this.toasterService.pop('success', _this.response.message);
                        _this.getBlockData();
                    }
                    else {
                        _this.toasterService.pop('error', _this.response.message);
                    }
                });
            }
        });
    };
    // openMe() {
    //   this.fileNameDialogRef = this.dialog.open(TestDialogComponent, {
    //     height: '30%',
    //     width: '50%',
    //     data: {},
    //   });
    //   this.fileNameDialogRef.beforeClose
    // }
    AddBlockComponent.prototype.ngOnInit = function () {
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    AddBlockComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AddBlockComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AddBlockComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatPaginator */])
    ], AddBlockComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSort */])
    ], AddBlockComponent.prototype, "sort", void 0);
    AddBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-block',
            template: __webpack_require__("../../../../../src/app/layout/add-block/add-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/add-block/add-block.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular5_toaster__["ToasterService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddBlockComponent);
    return AddBlockComponent;
    var _a;
}());

//Dialog Box Component
var TestDialogComponent = (function () {
    function TestDialogComponent(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.societyadmin = JSON.parse(localStorage['societyadmin']);
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(12)]],
            flatCtrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
    }
    Object.defineProperty(TestDialogComponent.prototype, "nameCtrl", {
        get: function () { return this.firstFormGroup.get('nameCtrl'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDialogComponent.prototype, "flatCtrl", {
        get: function () { return this.firstFormGroup.get('flatCtrl'); },
        enumerable: true,
        configurable: true
    });
    TestDialogComponent.prototype.ngOnInit = function () {
    };
    //Only String (Name)
    TestDialogComponent.prototype.StringPress = function (event) {
        var pattern = /[a-z\+\A-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Number Validation
    TestDialogComponent.prototype.NumPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TestDialogComponent.prototype.onSubmitClick = function () {
        var block = {
            society_id: this.societyadmin.id,
            block_name: this.block_name,
            no_of_flats: this.no_of_flats,
        };
        this.dialogRef.close(block);
    };
    TestDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  \n  <div matDialogTitle [@routerTransition] class=\"container-fluid\">Block Registration</div>\n  <mat-dialog-content>\n        <form [formGroup]=\"firstFormGroup\" >\n        <ng-template matStepLabel>Fill out your Details</ng-template>\n        <mat-form-field class=\"input-full-width\" fxFlex=\"49\">\n          <input matInput [(ngModel)]=\"block_name\" placeholder=\"Block Name\" (keypress)=\"StringPress($event)\"  formControlName=\"nameCtrl\" required>\n          <div *ngIf=\"nameCtrl.invalid && (nameCtrl.dirty || nameCtrl.touched)\" class=\"text-danger\">\n          <div *ngIf=\"nameCtrl.errors.required\"><small>Required</small></div>\n          <div *ngIf=\"nameCtrl.errors.minlength\"><small>At least 4 characters long.</small></div>\n          <div *ngIf=\"nameCtrl.errors.maxlength\"><small>Must not exceed 12 characters.</small></div>\n        </div>     \n        </mat-form-field>\n\n        <mat-form-field class=\"input-full-width\" fxFlex=\"49\">\n            <input matInput [(ngModel)]=\"no_of_flats\" (keypress)=\"NumPress($event)\" placeholder=\"Total No Of Flats\"  formControlName=\"flatCtrl\" required>\n            <div *ngIf=\"flatCtrl.invalid && (flatCtrl.dirty || flatCtrl.touched)\" class=\"text-danger\">\n            <div *ngIf=\"flatCtrl.errors.required\"><small>Required</small></div>\n          </div>             \n            </mat-form-field>\n\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions >\n    <button class=\"btn btn-danger buttoncolor\" style=\"color:white;\" mat-button matDialogClose>Cancel</button>\n        <button type=\"button\" class=\"btn btn-success buttoncolor\" (click)=\"onSubmitClick()\" style=\"color:white;\"mat-button  [disabled]=\"!firstFormGroup.valid\" >Submit</button>\n\n  </mat-dialog-actions>",
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogRef */], Object])
    ], TestDialogComponent);
    return TestDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/add-block/add-block.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlockModule", function() { return AddBlockModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_block_component__ = __webpack_require__("../../../../../src/app/layout/add-block/add-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_block_routing_module__ = __webpack_require__("../../../../../src/app/layout/add-block/add-block-routing.module.ts");
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










var AddBlockModule = (function () {
    function AddBlockModule() {
    }
    AddBlockModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_block_routing_module__["a" /* AddBlockRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular5_toaster__["ToasterModule"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__add_block_component__["b" /* TestDialogComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_block_component__["a" /* AddBlockComponent */], __WEBPACK_IMPORTED_MODULE_2__add_block_component__["b" /* TestDialogComponent */]]
        })
    ], AddBlockModule);
    return AddBlockModule;
}());



/***/ })

});
//# sourceMappingURL=add-block.module.chunk.js.map