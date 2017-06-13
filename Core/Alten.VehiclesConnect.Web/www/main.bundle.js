webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(92);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_context__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_oauth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customers_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProxyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ApiProxyModule = (function () {
    function ApiProxyModule() {
    }
    return ApiProxyModule;
}());
ApiProxyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_oauth_service__["a" /* OAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__["a" /* VehiclesService */],
            __WEBPACK_IMPORTED_MODULE_5__services_customers_service__["a" /* CustomesService */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_context__["a" /* AuthenticationContext */]
        ],
    })
], ApiProxyModule);

//# sourceMappingURL=api-proxy.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

//# sourceMappingURL=customer.dto.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

//# sourceMappingURL=findVehicle.filter.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

//# sourceMappingURL=identity.dto.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

//# sourceMappingURL=vehicle.dto.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-root',
        template: __webpack_require__(238),
        styles: [__webpack_require__(225)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_ui_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_proxy__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ui_ui_module__["a" /* UiModule */],
            __WEBPACK_IMPORTED_MODULE_3__api_proxy__["ApiProxyModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountDropdownComponent = (function () {
    function AccountDropdownComponent() {
    }
    AccountDropdownComponent.prototype.onLogoutClicked = function () {
        alert('Sorry!! it is just a dummy link');
    };
    return AccountDropdownComponent;
}());
AccountDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-account-dropdown',
        template: __webpack_require__(239),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], AccountDropdownComponent);

//# sourceMappingURL=account-dropdown.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardChartComponent = (function () {
    function DashboardChartComponent() {
    }
    DashboardChartComponent.prototype.ngOnInit = function () {
    };
    return DashboardChartComponent;
}());
DashboardChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-dashboard-chart',
        template: __webpack_require__(240),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], DashboardChartComponent);

//# sourceMappingURL=dashboard-chart.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersComponent = (function () {
    function FiltersComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.filter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.filterForm = formBuilder.group({
            'customerId': '',
            'showConnectedOnly': ''
        });
    }
    FiltersComponent.prototype.onFilterClicked = function () {
        this.filter.emit(this.filterForm.value);
    };
    return FiltersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], FiltersComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "customers", void 0);
FiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-filters',
        template: __webpack_require__(241),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], FiltersComponent);

var _a;
//# sourceMappingURL=filters.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-header',
        template: __webpack_require__(242),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.track = function (vehicle) {
        return vehicle.id;
    };
    return ListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ListComponent.prototype, "vehicles", void 0);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-list',
        template: __webpack_require__(243),
        styles: [__webpack_require__(230)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogsComponent = (function () {
    function LogsComponent() {
    }
    return LogsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], LogsComponent.prototype, "list", void 0);
LogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-logs',
        template: __webpack_require__(244),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], LogsComponent);

//# sourceMappingURL=logs.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-navbar',
        template: __webpack_require__(245),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PingListComponent = (function () {
    function PingListComponent() {
        this.ping = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.startPings = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.stopPings = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    PingListComponent.prototype.pingOnceClicked = function (item) {
        this.ping.emit(item);
    };
    PingListComponent.prototype.startPingingClicked = function (item) {
        this.startPings.emit(item);
    };
    PingListComponent.prototype.stopPingingClicked = function (item) {
        this.stopPings.emit(item);
    };
    return PingListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PingListComponent.prototype, "list", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], PingListComponent.prototype, "ping", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], PingListComponent.prototype, "startPings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], PingListComponent.prototype, "stopPings", void 0);
PingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-ping-list',
        template: __webpack_require__(246),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [])
], PingListComponent);

//# sourceMappingURL=ping-list.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_proxy__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(vehiclesService, customesService) {
        var _this = this;
        this.vehiclesService = vehiclesService;
        this.customesService = customesService;
        this.customers$ = this.customesService.GetCustomers();
        this.filter$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]({
            showConnectedOnly: null,
            coustomerId: null,
        });
        this.vehicles$ = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000 * 5)
            .combineLatest(this.filter$)
            .switchMap(function (_a) {
            var filter = _a[1];
            return _this.vehiclesService.findVehicles(filter);
        });
    }
    DashboardComponent.prototype.onFilter = function (filter) {
        this.filter$.next(filter);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-dashboard',
        template: __webpack_require__(247),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_proxy__["VehiclesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_proxy__["VehiclesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_proxy__["CustomesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_proxy__["CustomesService"]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-layout',
        template: __webpack_require__(248),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_proxy__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PingComponent = (function () {
    function PingComponent(vehiclesService) {
        this.vehiclesService = vehiclesService;
        this.vericles$ = vehiclesService.findVehicles({});
        this.logs = [];
        this.pingTimers = {};
    }
    PingComponent.prototype.pingOnce = function (item) {
        this.ping(item);
    };
    PingComponent.prototype.startPinging = function (item) {
        var _this = this;
        this.pingTimers[item.id] = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000 * 60).subscribe(function () { return _this.ping(item); });
    };
    PingComponent.prototype.stopPinging = function (item) {
        if (this.pingTimers[item.id]) {
            this.pingTimers[item.id].unsubscribe();
            delete this.pingTimers[item.id];
        }
    };
    PingComponent.prototype.ping = function (item) {
        this.vehiclesService.pingVehicle(item.id).subscribe();
        this.logs.push("ping vehicle : " + item.id + " - " + item.vin);
    };
    PingComponent.prototype.ngOnDestroy = function () {
        // tslint:disable-next-line:forin
        for (var subs in this.pingTimers) {
            this.pingTimers[subs].unsubscribe();
        }
    };
    return PingComponent;
}());
PingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-ping',
        template: __webpack_require__(249),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_proxy__["VehiclesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_proxy__["VehiclesService"]) === "function" && _a || Object])
], PingComponent);

var _a;
//# sourceMappingURL=ping.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_layout_layout_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_account_dropdown_account_dropdown_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_chart_dashboard_chart_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_list_list_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_filters_filters_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ping_ping_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ping_list_ping_list_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_logs_logs_component__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_layout_layout_component__["a" /* LayoutComponent */], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'ping', component: __WEBPACK_IMPORTED_MODULE_12__pages_ping_ping_component__["a" /* PingComponent */] },
        ]
    }
];
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_account_dropdown_account_dropdown_component__["a" /* AccountDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_chart_dashboard_chart_component__["a" /* DashboardChartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_filters_filters_component__["a" /* FiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_ping_ping_component__["a" /* PingComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_ping_list_ping_list_component__["a" /* PingListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_logs_logs_component__["a" /* LogsComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".dropdown a {\n  padding: 5px 20px 6px 20px;\n}\n.dropdown .dropdown-menu {\n  padding: 0;\n}\n.dropdown .dropdown-menu > li {\n  border-bottom: 1px solid #f5f5f5;\n}\n.dropdown .dropdown-menu .avatar-area {\n  position: relative;\n  text-align: center;\n  margin: 10px auto;\n  width: 128px;\n}\n.dropdown .dropdown-menu .avatar-area .avatar {\n  width: 128px;\n  height: 128px;\n}\n.dropdown .dropdown-menu .dropdown-footer {\n  border-top: 3px solid #AC193D;\n  border-bottom: 0;\n  text-align: right;\n  font-size: 13px;\n}\n.dropdown .dropdown-menu .dropdown-footer a {\n  color: #717171;\n  font-size: 13px;\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".btn {\n  margin-top: 19px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".vehicules-container {\n  position: relative;\n  background-color: #f5f5f5;\n}\n.vehicules-container .vehicules-list {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n}\n.vehicules-container .vehicules-list .vehicules-item {\n  position: relative;\n  background-color: #fceedb;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  margin-bottom: 8px;\n  padding: 0 15px;\n  vertical-align: top;\n}\n.vehicules-container .vehicules-list .vehicules-item:last-child {\n  margin-bottom: 0;\n}\n.vehicules-container .vehicules-list .vehicules-item.connected {\n  background-color: #c7e6c7;\n}\n.vehicules-container .vehicules-list .vehicules-item .info {\n  height: 60px;\n  padding: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 3px;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .vin {\n  margin-left: 5px;\n  font-size: 13px;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .at {\n  margin-left: 2px;\n  color: #ccc;\n  font-size: 13px;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .reg-number {\n  margin-left: 2px;\n  color: #999999;\n}\n.vehicules-container .vehicules-list .vehicules-item .status {\n  line-height: 40px;\n  height: 60px;\n  padding: 10px;\n}\n.vehicules-container .vehicules-list .vehicules-item .divider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 60px;\n  width: 1px;\n  background-color: #eee;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\n  <li class=\"dropdown\" [class.open]=\"open\">\n    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" (click)=\"open = !open\">\n            <img src=\"https://avatars.io/facebook/DanielKarimson\" width=\"29\" height=\"29\" />\n            Daniel Karimson\n          </a>\n    <ul class=\"dropdown-menu\">\n      <li>\n        <div class=\"avatar-area\">\n          <img src=\"https://avatars.io/facebook/DanielKarimson\" class=\"avatar\" />\n        </div>\n      </li>\n      <li class=\"dropdown-footer\">\n        <a href=\"javascript:void(0)\" (click)=\"onLogoutClicked()\">\n          Sign Out\n          <i class=\"glyphicon glyphicon-log-out\"></i>\n        </a>\n      </li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\n  <div class=\"widget-body\">\n  <p>\n    dashboard-chart works!\n  </p>\n  </div>\n</div>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\r\n  <div class=\"widget-body\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">\r\n          <div class=\"form-group\">\r\n            <span class=\"control-label\">Customers</span>\r\n            <select class=\"form-control\" formControlName=\"customerId\">\r\n            <option value=\"\">All</option>\r\n            <option *ngFor=\"let item of customers\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </option>\r\n          </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          <div class=\"form-group\">\r\n            <span>Status</span>\r\n            <select class=\"form-control\" formControlName=\"showConnectedOnly\">\r\n              <option value=\"\">All</option>\r\n              <option value=\"false\">Disconnected</option>\r\n              <option value=\"true\">Connected</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onFilterClicked()\">\r\n              Search\r\n              <i class=\"glyphicon glyphicon-search\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\">\n        <i class=\"glyphicon glyphicon-road\"></i>\n        Vehicles Connect\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <vc-navbar>\n      </vc-navbar>\n      <vc-account-dropdown>\n      </vc-account-dropdown>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\r\n  <div class=\"widget-header bordered-bottom bordered-themesecondary\">\r\n    <i class=\"widget-icon glyphicon glyphicon-stats\"></i>\r\n    <span class=\"widget-caption\">Vehicles Status</span>\r\n  </div>\r\n  <div class=\"widget-body\">\r\n    <div class=\"vehicules-container\">\r\n      <ul class=\"vehicules-list\">\r\n        <li *ngFor=\"let vehicle of vehicles; trackBy:track\" class=\"vehicules-item\" [class.connected]=\"vehicle.isConnected\">\r\n          <div class=\"row\">\r\n            <div class=\"info col-lg-10 col-sm-12\">\r\n              <img src=\"assets/1497295058_LorryGreen.png\" class=\"avatar\" *ngIf=\"vehicle.isConnected\" />\r\n              <img src=\"assets/1497295671_TruckYellow.png\" class=\"avatar\" *ngIf=\"!vehicle.isConnected\" />\r\n              <span class=\"vin\">{{vehicle.vin}} - {{vehicle.registrationNumber}}</span>\r\n              <span class=\"at\">at</span>\r\n              <span class=\"reg-number\">{{vehicle.customer}}</span>\r\n            </div>\r\n            <div class=\"status col-lg-2 col-sm-6 col-xs-12\">\r\n              <div class=\"divider hidden-md hidden-sm hidden-xs\"></div>\r\n              <span *ngIf=\"vehicle.isConnected\">Connected</span>\r\n              <span *ngIf=\"!vehicle.isConnected\">Disconnected</span>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\n  <div class=\"widget-header bordered-bottom bordered-themesecondary\">\n    <span class=\"widget-caption\">Logs</span>\n  </div>\n  <div class=\"widget-body\">\n    <div *ngFor=\"let item of list\">\n      <span>{{item}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/dashboard\">Dashboard</a>\r\n  </li>\r\n  <li routerLinkActive=\"active\">\r\n    <a target=\"_blank\" routerLink=\"/ping\">\r\n      Ping Simulator\r\n      <i class=\"glyphicon glyphicon-new-window\"></i>\r\n    </a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>\n        Vehicle Id\n      </th>\n      <th>\n        Vin\n      </th>\n      <th>\n        Registration Number\n      </th>\n      <th>\n      </th>\n      <th>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of list\">\n      <td>\n        {{item.id}}\n      </td>\n      <td>\n        {{item.vin}}\n      </td>\n      <td>\n        {{item.registrationNumber}}\n      </td>\n      <td>\n        <a class=\"btn btn-primary\" (click)=\"pingOnceClicked(item)\">\n          Ping\n        </a>\n      </td>\n      <td>\n        <a class=\"btn btn-default\" (click)=\"startPingingClicked(item)\">\n          <i class=\"glyphicon glyphicon-play\"></i>\n        </a>\n        <a class=\"btn btn-default\" (click)=\"stopPingingClicked(item)\">\n          <i class=\"glyphicon glyphicon-stop\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-12 col-lg-10\">\r\n      <vc-filters [customers]=\"customers$ | async\" (filter)=\"onFilter($event)\" ></vc-filters>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-12 col-lg-10\">\r\n      <vc-list [vehicles]=\"vehicles$ | async\">\r\n      </vc-list>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<vc-header></vc-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\n  <div class=\"widget\">\n    <div class=\"widget-body\">\n      <vc-ping-list [list]=\"vericles$ | async\" (ping)=\"pingOnce($event)\" (startPings)=\"startPinging($event)\" (stopPings)=\"stopPinging($event)\" >\n      </vc-ping-list>\n    </div>\n  </div>\n  <hr />\n  <vc-logs [list]=\"logs\">\n  </vc-logs>\n</div>"

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationContext; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationContext = (function () {
    function AuthenticationContext(oAuthService) {
        this.oAuthService = oAuthService;
        this.identity$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    Object.defineProperty(AuthenticationContext.prototype, "accessToken", {
        get: function () {
            if (this.identity$.value)
                return this.identity$.value.access_token;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "isAuthenticated", {
        get: function () {
            return this.accessToken != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationContext.prototype, "identityChange", {
        get: function () {
            return this.identity$;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationContext.prototype.signIn = function (username, password) {
        var _this = this;
        return this.oAuthService.getToken(username, password)
            .map(function (identity) {
            _this.identity$.next(identity);
            return true;
        });
    };
    AuthenticationContext.prototype.signOut = function () {
        this.identity$.next(null);
    };
    return AuthenticationContext;
}());
AuthenticationContext = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__["a" /* OAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__["a" /* OAuthService */]) === "function" && _a || Object])
], AuthenticationContext);

var _a;
//# sourceMappingURL=authentication-context.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_identity_dto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_dto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customers_service__ = __webpack_require__(89);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_5__services_customers_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_context__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_proxy_module__ = __webpack_require__(153);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_7__api_proxy_module__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_context__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomesService = (function () {
    function CustomesService(http, authenticationContext) {
        this.http = http;
        this.authenticationContext = authenticationContext;
    }
    CustomesService.prototype.GetCustomers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }
        return this.http.request("/api/customers", {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestMethod */].Get,
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    return CustomesService;
}());
CustomesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_context__["a" /* AuthenticationContext */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_context__["a" /* AuthenticationContext */]) === "function" && _b || Object])
], CustomesService);

var _a, _b;
//# sourceMappingURL=customers.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OAuthService = (function () {
    function OAuthService(http) {
        this.http = http;
    }
    OAuthService.prototype.getToken = function (username, password) {
        var req = "grant_type=password&username=" + username + "&password=" + password;
        if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].clientId) {
            req = req + ("&client_id=" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].clientId);
        }
        return this.http.post('/token', req).map(function (res) { return res.json(); });
    };
    return OAuthService;
}());
OAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], OAuthService);

var _a;
//# sourceMappingURL=oauth.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_context__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehiclesService = (function () {
    function VehiclesService(http, authenticationContext) {
        this.http = http;
        this.authenticationContext = authenticationContext;
    }
    VehiclesService.prototype.findVehicles = function (filter) {
        var queryString = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var prop in filter) {
            if (filter[prop]) {
                queryString.set(prop, filter[prop]);
            }
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }
        return this.http.request("/api/vehicles", {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestMethod */].Get,
            search: queryString,
            headers: headers
        })
            .map(function (res) { return res.json(); });
        // .catch(error => );
    };
    VehiclesService.prototype.findVehicleById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }
        return this.http.request("/api/vehicles/" + id, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestMethod */].Get,
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    VehiclesService.prototype.pingVehicle = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        if (this.authenticationContext.isAuthenticated) {
            headers.append('Authorization', 'bearer ' + this.authenticationContext.accessToken);
        }
        return this.http.request("/api/vehicles/" + id + "/ping", {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestMethod */].Put,
            headers: headers
        })
            .map(function (res) { return ({}); });
    };
    return VehiclesService;
}());
VehiclesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_context__["a" /* AuthenticationContext */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_context__["a" /* AuthenticationContext */]) === "function" && _b || Object])
], VehiclesService);

var _a, _b;
//# sourceMappingURL=vehicles.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    clientId: null,
};
//# sourceMappingURL=environment.js.map

/***/ })

},[518]);
//# sourceMappingURL=main.bundle.js.map