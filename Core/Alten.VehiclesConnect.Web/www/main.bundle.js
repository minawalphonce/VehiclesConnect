webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_context__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_oauth_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customers_service__ = __webpack_require__(297);
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

/***/ 103:
/***/ (function(module, exports) {

//# sourceMappingURL=findVehicle.filter.js.map

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

//# sourceMappingURL=identity.dto.js.map

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

//# sourceMappingURL=vehicle.dto.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(182),
        styles: [__webpack_require__(171)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_ui_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_proxy__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(106);
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ui_ui_module__["a" /* UiModule */],
            __WEBPACK_IMPORTED_MODULE_4__api_proxy__["ApiProxyModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    AccountDropdownComponent.prototype.ngOnInit = function () {
    };
    return AccountDropdownComponent;
}());
AccountDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-account-dropdown',
        template: __webpack_require__(183),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], AccountDropdownComponent);

//# sourceMappingURL=account-dropdown.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(184),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], DashboardChartComponent);

//# sourceMappingURL=dashboard-chart.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function FiltersComponent() {
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    return FiltersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], FiltersComponent.prototype, "customers", void 0);
FiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-filters',
        template: __webpack_require__(185),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], FiltersComponent);

//# sourceMappingURL=filters.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(186),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    Object.defineProperty(ListComponent.prototype, "vehicles", {
        get: function () {
            return this._vehicles;
        },
        set: function (vehicles) {
            var _this = this;
            if (!vehicles)
                return;
            if (!this._vehicles)
                this._vehicles = vehicles;
            else {
                for (var ndx in this._vehicles) {
                    var foundNdx = vehicles.findIndex(function (v) { return v.id == _this._vehicles[ndx].id; });
                    if (foundNdx == -1)
                        this._vehicles.splice(foundNdx, 1);
                }
                var _loop_1 = function () {
                    var vehicle = vehicles[ndx];
                    if (this_1._vehicles.findIndex(function (v) { return v.id == vehicle.id; }) == -1) {
                        this_1._vehicles.push(vehicle);
                    }
                    else
                        this_1._vehicles.find(function (v) { return v.id == vehicle.id; }).isConnected = vehicle.isConnected;
                };
                var this_1 = this;
                for (var ndx in vehicles) {
                    _loop_1();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.track = function (vehicle) {
        return vehicle.id;
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ListComponent.prototype, "vehicles", null);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-list',
        template: __webpack_require__(187),
        styles: [__webpack_require__(176)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(188),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_proxy__ = __webpack_require__(60);
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
        this.vehicles$ = this.vehiclesService.findVehicles({});
        this.customers$ = this.customesService.GetCustomers();
        this.intervalId = setInterval(function () {
            _this.vehicles$ = _this.vehiclesService.findVehicles({});
        }, 1000 * 30);
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-dashboard',
        template: __webpack_require__(189),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_proxy__["VehiclesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_proxy__["VehiclesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__api_proxy__["CustomesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_proxy__["CustomesService"]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(190),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'vc-login',
        template: __webpack_require__(191),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_layout_layout_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_account_dropdown_account_dropdown_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_chart_dashboard_chart_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_list_list_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_filters_filters_component__ = __webpack_require__(110);
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
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__["a" /* LoginComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pages_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_account_dropdown_account_dropdown_component__["a" /* AccountDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_chart_dashboard_chart_component__["a" /* DashboardChartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_filters_filters_component__["a" /* FiltersComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".dropdown a {\n  padding: 5px 20px 6px 20px;\n}\n.dropdown .dropdown-menu {\n  padding: 0;\n}\n.dropdown .dropdown-menu > li {\n  border-bottom: 1px solid #f5f5f5;\n}\n.dropdown .dropdown-menu .avatar-area {\n  position: relative;\n  text-align: center;\n  margin: 10px auto;\n  width: 128px;\n}\n.dropdown .dropdown-menu .avatar-area .avatar {\n  width: 128px;\n  height: 128px;\n}\n.dropdown .dropdown-menu .dropdown-footer {\n  border-top: 3px solid #AC193D;\n  border-bottom: 0;\n  text-align: right;\n  font-size: 13px;\n}\n.dropdown .dropdown-menu .dropdown-footer a {\n  color: #717171;\n  font-size: 13px;\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".btn {\n  margin-top: 19px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".vehicules-container {\n  position: relative;\n  padding: 25px 25px;\n  background-color: #f5f5f5;\n}\n.vehicules-container .vehicules-list {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n}\n.vehicules-container .vehicules-list .vehicules-item {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  margin-bottom: 8px;\n  padding: 0 15px;\n  vertical-align: top;\n}\n.vehicules-container .vehicules-list .vehicules-item:last-child {\n  margin-bottom: 0;\n}\n.vehicules-container .vehicules-list .vehicules-item .info {\n  height: 50px;\n  padding: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .vin {\n  margin-left: 5px;\n  font-size: 13px;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .at {\n  margin-left: 2px;\n  color: #ccc;\n  font-size: 13px;\n}\n.vehicules-container .vehicules-list .vehicules-item .info .reg-number {\n  margin-left: 2px;\n  color: #999999;\n}\n.vehicules-container .vehicules-list .vehicules-item .state {\n  position: absolute;\n  top: 13px;\n  right: -12px;\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  background-color: #e5e5e5;\n  text-align: center;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  border: 2px solid #fff;\n}\n.vehicules-container .vehicules-list .vehicules-item .state i {\n  font-size: 13px;\n  color: #fff;\n  line-height: 20px;\n}\n.vehicules-container .vehicules-list .vehicules-item .state.connected {\n  background-color: #5cb85c;\n}\n.vehicules-container .vehicules-list .vehicules-item .state.disconnected {\n  background-color: #f0ad4e;\n}\n.vehicules-container .vehicules-list .vehicules-item .divider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 50px;\n  width: 1px;\n  background-color: #eee;\n  display: inline-block;\n}\n@media (max-width: 1200px) {\n  .vehicules-container .vehicules-list .vehicules-item .ticket-user {\n    border-bottom: 1px solid #eee;\n  }\n}\n@media (max-width: 768px) {\n  .vehicules-container .vehicules-list .vehicules-item .ticket-time {\n    border-bottom: 1px solid #eee;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\r\n  <li class=\"dropdown\" [class.open]=\"open\">\r\n    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" (click)=\"open = !open\">\r\n            <img src=\"http://127.0.0.1:8080/angular/assets/img/avatars/John-Smith.jpg\" width=\"29\" height=\"29\" />\r\n            Username\r\n          </a>\r\n    <ul class=\"dropdown-menu\">\r\n      <li>\r\n        <div class=\"avatar-area\">\r\n          <img src=\"http://127.0.0.1:8080/angular/assets/img/avatars/John-Smith.jpg\" class=\"avatar\" />\r\n        </div>\r\n      </li>\r\n      <li class=\"dropdown-footer\">\r\n        <a href=\"#\">\r\n      Sign Out\r\n      <i class=\"glyphicon glyphicon-log-out\"></i>\r\n    </a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\r\n  <div class=\"widget-body\">\r\n  <p>\r\n    dashboard-chart works!\r\n  </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget flat\">\n  <div class=\"widget-body\">\n    <div class=\"row\">\n      <div class=\"col-xs-3\">\n        <div class=\"form-group\">\n          <span class=\"control-label\">Customers</span>\n          <select class=\"form-control\">\n            <option *ngFor=\"let item of customers\" [value]=\"item.id\">\n              {{item.name}}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-xs-3\">\n        <div class=\"form-group\">\n          <span>Status</span>\n          <select class=\"form-control\">\n          <option>All</option>\n          <option>Disconnected</option>\n          <option>Connected</option>\n        </select>\n        </div>\n      </div>\n      <div class=\"col-xs-3\">\n        <button class=\"btn btn-primary\"  type=\"button\">\n        Search\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\">\r\n        <i class=\"glyphicon glyphicon-road\"></i>\r\n        Vehicles Connect\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <vc-navbar>\r\n      </vc-navbar>\r\n      <vc-account-dropdown>\r\n      </vc-account-dropdown>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\r\n  <div class=\"widget-header bordered-bottom bordered-themesecondary\">\r\n    <i class=\"widget-icon glyphicon glyphicon-stats\"></i>\r\n    <span class=\"widget-caption\">Vehicles Status</span>\r\n  </div>\r\n  <div class=\"widget-body\">\r\n    <div class=\"vehicules-container\">\r\n      <ul class=\"vehicules-list\">\r\n        <li *ngFor=\"let vehicle of vehicles; trackBy:track\" class=\"vehicules-item\">\r\n          <div class=\"row\">\r\n            <div class=\"info col-lg-6 col-sm-12\">\r\n              <span class=\"vin\">{{vehicle.vin}} - {{vehicle.registrationNumber}}</span>\r\n              <span class=\"at\">at</span>\r\n              <span class=\"reg-number\">{{vehicle.customer}}</span>\r\n            </div>\r\n            <div class=\"state connected\" *ngIf=\"vehicle.isConnected\">\r\n              <i class=\"glyphicon glyphicon-ok\"></i>\r\n            </div>\r\n            <div class=\"state disconnected\" *ngIf=\"!vehicle.isConnected\">\r\n              <i class=\"glyphicon glyphicon-remove\"></i>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\r\n  <li routerLinkActive=\"active\">\r\n    <a routerLink=\"/dashboard\">\r\n            Dashboard\r\n          </a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <vc-filters [customers]=\"customers$ | async\" ></vc-filters>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <vc-list [vehicles]=\"vehicles$ | async\">\r\n      </vc-list>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<vc-header></vc-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

//# sourceMappingURL=customer.dto.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_context__ = __webpack_require__(34);
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_oauth_service__ = __webpack_require__(61);
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_identity_dto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__models_identity_dto__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_0__models_identity_dto__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_1__models_vehicle_dto__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer_dto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__models_customer_dto__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_2__models_customer_dto__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__, "ApiProxyModule")) __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__["ApiProxyModule"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__, "VehiclesService")) __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__["VehiclesService"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__, "CustomesService")) __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_3__models_findVehicle_filter__["CustomesService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "VehiclesService", function() { return __WEBPACK_IMPORTED_MODULE_4__services_vehicles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customers_service__ = __webpack_require__(297);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "CustomesService", function() { return __WEBPACK_IMPORTED_MODULE_5__services_customers_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_context__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_proxy_module__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ApiProxyModule", function() { return __WEBPACK_IMPORTED_MODULE_7__api_proxy_module__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(63);
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_context__ = __webpack_require__(34);
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
                queryString[prop] = filter[prop];
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

/***/ 63:
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

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(63);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map