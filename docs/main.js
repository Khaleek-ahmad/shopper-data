(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet> \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generic/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer style=\"background-color: #ffffff; border-top:1px #d8dbe0 solid;\" class=\"d-flex justify-content-center\">Copyright &copy; 2020 Innodata Inc. </footer>\r\n<!-- - Ver {{appVersion}} -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/main/main.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generic/main/main.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layout_container\">\r\n        <app-sidebar style=\"background-color: #b77332; width: 210px !important;\"></app-sidebar>\r\n        <div id=\"mainwrapper\" style=\"background-color: #ebedef;\">\r\n                <app-navbar></app-navbar>\r\n                <router-outlet></router-outlet>\r\n                <!-- <app-footer></app-footer> -->\r\n        </div>\r\n</div>\r\n<div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/navbar/navbar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generic/navbar/navbar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\r\n   <div class=\"container-fluid\">\r\n      <nav class=\"navbar top-navbar navbar-expand navbar-light\">\r\n         <a class=\"navbar-brand\" [routerLink]=\"['/generic/dashboard']\"><img src=\"assets/images/colleps.jpg\"\r\n               alt=\"Dashboard\"></a>\r\n         <div class=\"brand-info\">\r\n          \r\n         </div>\r\n         <div class=\"navbar-collapse\">\r\n                       <ul class=\"navbar-nav align-items-center\" id=\"topright_menu\">\r\n               <li class=\"nav-item w-100\">\r\n                  <ul class=\"navbar-nav nav-right align-items-center justify-content-end\">\r\n                     <li class=\"nav-item dropdown user-info\" [ngClass]=\"{'show': isClassVisible }\">\r\n\r\n                        <a class=\"d-flex justify-content-end text-white align-items-center\" style=\"cursor: pointer\"\r\n                           data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                           <i class=\"fa fa-user profile\"></i>\r\n                           <span class=\"user\">\r\n                              <b>Welcome to: {{userName}}</b>\r\n                           \r\n                           </span>\r\n                           <span></span>\r\n                         \r\n                           <i class=\"fa fa-angle-down\"></i>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu multi-level list-unstyled dropdown-menu-right animated fadeInLeft\"\r\n                           (mousehover)=\"isClassVisible = !isClassVisible;\">\r\n\r\n                           <li>\r\n                              <a (click)=\"logout()\">\r\n                                 <i class=\"fa fa-lock\"></i> Logout</a>\r\n                           </li>\r\n                         \r\n                        </ul>\r\n                     </li>\r\n                  </ul>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n      </nav>\r\n   </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/sidebar/sidebar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generic/sidebar/sidebar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar1\" style=\"background-color: #fff; padding:3px 0 2px 3px;\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/generic/dashboard']\"><img src=\"assets/images/dashboard.png\" width=\"200\"\r\n                        alt=\"logo\"></a>\r\n</div>\r\n<aside id=\"sidebar\" class=\"sidepanel \" [ngClass]=\"{'collapse': isCloseVisible}\">\r\n        <ul class=\"navbar-nav\">\r\n                <li><a routerLink=\"dashboard/category\" routerLinkActive=\"active\">Category</a></li>\r\n                <li><a routerLink=\"dashboard/product\">Product</a></li>\r\n                <li><a routerLink=\"dashboard/order\">Order</a></li>\r\n        </ul>\r\n</aside>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n  {{title}}\r\n</h1>\r\n\r\n<div mat-dialog-content>\r\n  <p>{{message}}</p>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onDismiss()\">No</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">Yes</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, not_found_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        { path: '', loadChildren: () => new Promise((resolve_1, reject_1) => { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then(m => m.LoginModule) },
        { path: 'login', redirectTo: '', pathMatch: 'full' },
        { path: 'generic', loadChildren: () => new Promise((resolve_2, reject_2) => { Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./generic/generic.module */ "./src/app/generic/generic.module.ts")]; (resolve_2).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_2.bind(this)); }).then(m => m.GenericModule) },
        { path: '**', component: not_found_component_1.NotFoundComponent },
    ];
    let AppRoutingModule = class AppRoutingModule {
    };
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    exports.AppRoutingModule = AppRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! bn-ng-idle */ "./node_modules/bn-ng-idle/fesm2015/bn-ng-idle.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./shared/App.Config */ "./src/app/shared/App.Config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, bn_ng_idle_1, router_1, App_Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AppComponent = class AppComponent {
        constructor(bnIdle, router) {
            this.bnIdle = bnIdle;
            this.router = router;
            this.title = 'dashboard';
            if (App_Config_1.AppConfig.settings)
                this.apiServer = App_Config_1.AppConfig.settings.apiServer;
            let sessionTime = this.apiServer.authentication.sessionTimeOut * 60;
        }
    };
    AppComponent.ctorParameters = () => [
        { type: bn_ng_idle_1.BnNgIdleService },
        { type: router_1.Router }
    ];
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    exports.AppComponent = AppComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts"), __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts"), __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts"), __webpack_require__(/*! ./generic/generic.module */ "./src/app/generic/generic.module.ts"), __webpack_require__(/*! ./shared/HttpService */ "./src/app/shared/HttpService.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"), __webpack_require__(/*! ./shared/App.Config */ "./src/app/shared/App.Config.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"), __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js"), __webpack_require__(/*! ./services/auth/AuthService */ "./src/app/services/auth/AuthService.ts"), __webpack_require__(/*! ./services/auth/auth-gaurd-service */ "./src/app/services/auth/auth-gaurd-service.ts"), __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, platform_browser_1, core_1, app_routing_module_1, app_component_1, not_found_component_1, generic_module_1, HttpService_1, http_1, App_Config_1, common_1, ngx_toastr_1, animations_1, AuthService_1, auth_gaurd_service_1, confirm_dialog_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initializeApp(appConfig) {
        return () => appConfig.load();
    }
    exports.initializeApp = initializeApp;
    let AppModule = class AppModule {
    };
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                not_found_component_1.NotFoundComponent,
                confirm_dialog_component_1.ConfirmDialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                generic_module_1.GenericModule,
                http_1.HttpClientModule,
                http_1.HttpClientJsonpModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
            ],
            providers: [HttpService_1.HttpService,
                // { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                App_Config_1.AppConfig,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: initializeApp,
                    deps: [App_Config_1.AppConfig], multi: true
                },
                // {
                //   provide: ErrorHandler,
                //   useClass: GlobalErrorHandler
                // },
                AuthService_1.AuthService,
                auth_gaurd_service_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent],
            exports: [confirm_dialog_component_1.ConfirmDialogComponent],
            entryComponents: [confirm_dialog_component_1.ConfirmDialogComponent]
        })
    ], AppModule);
    exports.AppModule = AppModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/generic/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/generic/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyaWMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/generic/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/generic/footer/footer.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! src/app/shared/App.Config */ "./src/app/shared/App.Config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, App_Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let FooterComponent = class FooterComponent {
        constructor() {
            if (App_Config_1.AppConfig.settings)
                this.apiServer = App_Config_1.AppConfig.settings.apiServer;
        }
        ngOnInit() {
            this.appVersion = this.apiServer.version.appVersion;
            // console.log("application version ",this.appVersion);
        }
    };
    FooterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-footer',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/footer/footer.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/generic/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    exports.FooterComponent = FooterComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/generic/generic-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/generic/generic-routing.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./main/main.component */ "./src/app/generic/main/main.component.ts"), __webpack_require__(/*! ../services/auth/auth-gaurd-service */ "./src/app/services/auth/auth-gaurd-service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, main_component_1, auth_gaurd_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        {
            path: '', component: main_component_1.MainComponent,
            children: [
                {
                    path: 'dashboard',
                    loadChildren: () => new Promise((resolve_1, reject_1) => { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then(m => m.DashboardModule),
                    canActivate: [auth_gaurd_service_1.AuthGuard]
                },
            ]
        }
        //{ path: '**', component: PageNotFoundComponent }
    ];
    let GenericRoutingModule = class GenericRoutingModule {
    };
    GenericRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], GenericRoutingModule);
    exports.GenericRoutingModule = GenericRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/generic/generic.module.ts":
/*!*******************************************!*\
  !*** ./src/app/generic/generic.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/generic/navbar/navbar.component.ts"), __webpack_require__(/*! ./generic-routing.module */ "./src/app/generic/generic-routing.module.ts"), __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/generic/sidebar/sidebar.component.ts"), __webpack_require__(/*! ./main/main.component */ "./src/app/generic/main/main.component.ts"), __webpack_require__(/*! ./footer/footer.component */ "./src/app/generic/footer/footer.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, navbar_component_1, generic_routing_module_1, sidebar_component_1, main_component_1, footer_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GenericModule = class GenericModule {
    };
    GenericModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [navbar_component_1.NavbarComponent, sidebar_component_1.SidebarComponent, main_component_1.MainComponent, footer_component_1.FooterComponent],
            imports: [
                common_1.CommonModule,
                generic_routing_module_1.GenericRoutingModule
            ],
            exports: [navbar_component_1.NavbarComponent, sidebar_component_1.SidebarComponent],
            providers: []
        })
    ], GenericModule);
    exports.GenericModule = GenericModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/generic/main/main.component.scss":
/*!**************************************************!*\
  !*** ./src/app/generic/main/main.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyaWMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/generic/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/generic/main/main.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MainComponent = class MainComponent {
        //isCloseVisible:boolean =false;
        constructor(router) {
            this.router = router;
        }
        ngOnInit() {
            $(".content-wrapper").css("height", $(window).height() - 110);
        }
        ngAfterViewInit() {
            $(".content-wrapper").css("height", $(window).height() - 110);
        }
        ngDoCheck() {
            $(".content-wrapper").css("height", $(window).height() - 110);
        }
    };
    MainComponent.ctorParameters = () => [
        { type: router_1.Router }
    ];
    MainComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-main',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/main/main.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./main.component.scss */ "./src/app/generic/main/main.component.scss")).default]
        })
    ], MainComponent);
    exports.MainComponent = MainComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/generic/navbar/navbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/generic/navbar/navbar.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-submenu {\n  position: relative;\n}\n\na {\n  cursor: pointer;\n}\n\n.dropdown-submenu > .dropdown-menu {\n  top: 0;\n  right: 100%;\n  margin-top: -6px;\n  margin-left: -1px;\n  border-radius: 0 6px 6px 6px;\n}\n\n.dropdown-submenu:hover > .dropdown-menu {\n  display: block;\n}\n\n.dropdown-submenu > a:after {\n  display: block;\n  content: \" \";\n  float: right;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #ccc;\n  margin-top: 5px;\n  margin-right: -10px;\n}\n\n.dropdown-submenu:hover > a:after {\n  border-left-color: #fff;\n}\n\n.dropdown-submenu.pull-left {\n  float: none;\n}\n\n.dropdown-submenu.pull-left > .dropdown-menu {\n  right: -100%;\n  margin-left: 10px;\n  border-radius: 6px 0 6px 6px;\n}\n\n/*====================*/\n\n.user-info > a {\n  font-size: 14px;\n}\n\n.user-info > a > .user {\n  font-weight: bold;\n  padding: 0 10px 0 0px;\n  font-size: 14px;\n  color: #b77332;\n}\n\n.user-info > a > span {\n  padding: 0 6px 0 0;\n  font-size: 12px;\n  color: #1a468f;\n}\n\n.user-info > a > i {\n  font-size: 20px;\n}\n\n.user-info > a .profile {\n  background-color: #44494c;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 100%;\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: center;\n  font-size: 20px;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n\n.box-shadow {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  overflow-y: hidden;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJpYy9uYXZiYXIvRjpcXF9LaGFsZWVrU2JcXHNob3BwZXItZGF0YS9zcmNcXGFwcFxcZ2VuZXJpY1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dlbmVyaWMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0FDRVI7O0FEQUk7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFHQSw0QkFBQTtBQ0dKOztBREFJO0VBQ0EsY0FBQTtBQ0dKOztBREFJO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFJO0VBQ0EsdUJBQUE7QUNHSjs7QURBSTtFQUNBLFdBQUE7QUNHSjs7QURBSTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUdBLDRCQUFBO0FDR0o7O0FEREksdUJBQUE7O0FBR0E7RUFDSSxlQUFBO0FDRVI7O0FEQ0k7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUNDUjs7QURFSTtFQUNJLGVBQUE7QUNDUjs7QURHSTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNEUjs7QURLSTtFQUNJLGlEQUFBO0FDRlI7O0FES0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtBQ0hSOztBRFVJO0VBQ0ksaUNBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyaWMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1zdWJtZW51IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi1zdWJtZW51Pi5kcm9wZG93bi1tZW51IHtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDZweCA2cHggNnB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDZweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZHJvcGRvd24tc3VibWVudTpob3Zlcj4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRyb3Bkb3duLXN1Ym1lbnU+YTphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXI+YTphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRyb3Bkb3duLXN1Ym1lbnUucHVsbC1sZWZ0IHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZHJvcGRvd24tc3VibWVudS5wdWxsLWxlZnQ+LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggMCA2cHggNnB4O1xyXG4gICAgfVxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PSovXHJcbiAgXHJcblxyXG4gICAgLnVzZXItaW5mbz5hIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC51c2VyLWluZm8+YT4udXNlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogI2I3NzMzMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVzZXItaW5mbz5hPnNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4IDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLy8gY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgICAgICBjb2xvcjogIzFhNDY4ZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVzZXItaW5mbz5hPmkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAudXNlci1pbmZvPmEgLnByb2ZpbGUge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzMDhiZDY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNDQ0OTRjO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9ICAgIFxyXG5cclxuXHJcbiAgICAuYm94LXNoYWRvdyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2LXNjcm9sbGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAvL2hlaWdodDogMi43NXJlbTtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyAubmF2LXNjcm9sbGVyIG5hdiB7XHJcbiAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgLy8gfVxyXG4gICAgLmJnLXdoaXRlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIH0iLCIuZHJvcGRvd24tc3VibWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnUgPiAuZHJvcGRvd24tbWVudSB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCA2cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCA2cHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggNnB4O1xufVxuXG4uZHJvcGRvd24tc3VibWVudTpob3ZlciA+IC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1zdWJtZW51ID4gYTphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIiBcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gYTphZnRlciB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24tc3VibWVudS5wdWxsLWxlZnQge1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnUucHVsbC1sZWZ0ID4gLmRyb3Bkb3duLW1lbnUge1xuICByaWdodDogLTEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4IDAgNnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDAgNnB4IDZweDtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PSovXG4udXNlci1pbmZvID4gYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVzZXItaW5mbyA+IGEgPiAudXNlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDEwcHggMCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNiNzczMzI7XG59XG5cbi51c2VyLWluZm8gPiBhID4gc3BhbiB7XG4gIHBhZGRpbmc6IDAgNnB4IDAgMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzFhNDY4Zjtcbn1cblxuLnVzZXItaW5mbyA+IGEgPiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udXNlci1pbmZvID4gYSAucHJvZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ5NGM7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLm5hdi1zY3JvbGxlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/generic/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/generic/navbar/navbar.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let NavbarComponent = class NavbarComponent {
        constructor(router, elem) {
            this.router = router;
            this.elem = elem;
        }
        ngOnInit() {
            this.userName = sessionStorage.getItem('userName');
        }
        logout() {
            sessionStorage.clear();
            this.router.navigate(['']);
        }
        toggle() {
            this.isCloseVisible = !this.isCloseVisible;
        }
    };
    NavbarComponent.ctorParameters = () => [
        { type: router_1.Router },
        { type: core_1.ElementRef }
    ];
    NavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/navbar/navbar.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/generic/navbar/navbar.component.scss")).default]
        })
    ], NavbarComponent);
    exports.NavbarComponent = NavbarComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/generic/sidebar/sidebar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/generic/sidebar/sidebar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyaWMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/generic/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/generic/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SidebarComponent = class SidebarComponent {
        constructor() {
        }
        ngOnInit() {
        }
    };
    SidebarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generic/sidebar/sidebar.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/generic/sidebar/sidebar.component.scss")).default]
        })
    ], SidebarComponent);
    exports.SidebarComponent = SidebarComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let NotFoundComponent = class NotFoundComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    NotFoundComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-not-found',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")).default]
        })
    ], NotFoundComponent);
    exports.NotFoundComponent = NotFoundComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/services/auth/AuthService.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth/AuthService.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AuthService = class AuthService {
        constructor() {
            this.token$ = new rxjs_1.BehaviorSubject('');
        }
        getToken() {
            return this.token$.asObservable();
        }
        saveToken(value) {
            this.token$.next(value);
        }
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    exports.AuthService = AuthService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/services/auth/auth-gaurd-service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-gaurd-service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./AuthService */ "./src/app/services/auth/AuthService.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, AuthService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AuthGuard = class AuthGuard {
        constructor(_authService, _router) {
            this._authService = _authService;
            this._router = _router;
        }
        canActivate(next, state) {
            let token = null;
            this._authService.getToken().subscribe(x => token = x);
            if (token == null) {
                token = sessionStorage.getItem("userToken");
            }
            if (token) {
                console.log("User permitted to access the route");
                return true;
            }
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = () => [
        { type: AuthService_1.AuthService },
        { type: router_1.Router }
    ];
    AuthGuard = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthGuard);
    exports.AuthGuard = AuthGuard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/shared/App.Config.ts":
/*!**************************************!*\
  !*** ./src/app/shared/App.Config.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"), __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, http_1, environment_1) {
    "use strict";
    var AppConfig_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    "use strict";
    let AppConfig = AppConfig_1 = class AppConfig {
        constructor(http) {
            this.http = http;
        }
        load() {
            const jsonFile = `assets/configurables/config.${environment_1.environment.name}.json`;
            return this.http.get(jsonFile).toPromise()
                .then((response) => {
                AppConfig_1.settings = response;
            });
        }
    };
    AppConfig.ctorParameters = () => [
        { type: http_1.HttpClient }
    ];
    AppConfig = AppConfig_1 = tslib_1.__decorate([
        core_1.Injectable()
    ], AppConfig);
    exports.AppConfig = AppConfig;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/shared/HttpService.ts":
/*!***************************************!*\
  !*** ./src/app/shared/HttpService.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let HttpService = class HttpService {
        constructor(_http) {
            this._http = _http;
        }
        getService(url, param, responseType = '') {
            //debugger;
            const headers = new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            });
            if (responseType != '') {
                return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true, responseType: 'text' });
            }
            else {
                return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true });
            }
        }
        // getService(url: any, param: any, responseType: string = ''): Observable<any> {
        //   //debugger;
        //   let headers = new HttpHeaders()
        //   headers = headers.set('Authorization', `Bearer ${this.token}`);
        //   return this._http.get(url, { headers });
        // }
        // getAgentService(url: string, param: any, responseType: string = ''): Observable<any> {
        //   debugger;
        //   const headers = new HttpHeaders({
        //     'Content-Type': 'application/json', 
        //     'Access-Control-Allow-Origin': '*', 
        //     'Access-Control-Allow-Credentials': 'true', 
        //     'Authorization': `Bearer ${param}`
        //     //'Authorization': 'Bearer ' + JSON.parse(param)
        //   });
        //   if (responseType != '') {
        //     return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true, responseType: 'text' });
        //   }
        //   else {
        //     return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true });
        //   }
        // }
        userAuthentication(url, email, password) {
            const credentials = { "email": email, "password": password };
            var reqHeader = new http_1.HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'true' });
            return this.post(credentials, url, reqHeader);
        }
        getService_111(url, param, responseType = '') {
            const headers = new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            });
            if (responseType != '') {
                return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true, responseType: 'text' });
            }
            else {
                return this._http.get(url, { headers, params: param, observe: 'response', reportProgress: true });
            }
        }
        postService(model, url, header, isFile = false) {
            //debugger;
            if (isFile) {
                return this.post(model, url, header, isFile);
            }
            else {
                if (header == undefined)
                    header = new http_1.HttpHeaders().set('Content-Type', 'application/json');
                //.set('observe','response');
                return this.post(model, url, header);
            }
        }
        post(model, url, headers, isFile = false) {
            //debugger;
            var body = model;
            if (!isFile) {
                body = JSON.stringify(model);
            }
            return this._http.post(url, body, { headers, observe: 'response', reportProgress: true });
        }
        putService(model, url, header) {
            debugger;
            if (header == undefined)
                header = new http_1.HttpHeaders().set('Content-Type', 'application/json');
            return this.put(model, url, header);
        }
        put(model, url, headers) {
            var body = JSON.stringify(model);
            return this._http.put(url, body, { headers, observe: 'response', reportProgress: true });
        }
        deleteService(url, header) {
            if (header == undefined)
                header = new http_1.HttpHeaders().set('Content-Type', 'application/json');
            return this.delete(url, header);
        }
        delete(url, headers) {
            return this._http.delete(url, { responseType: 'text' });
        }
    };
    HttpService.ctorParameters = () => [
        { type: http_1.HttpClient }
    ];
    HttpService = tslib_1.__decorate([
        core_1.Injectable()
    ], HttpService);
    exports.HttpService = HttpService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, material_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ConfirmDialogComponent = class ConfirmDialogComponent {
        constructor(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            // Update view with given values
            this.title = data.title;
            this.message = data.message;
        }
        ngOnInit() {
        }
        onConfirm() {
            // Close the dialog, return true
            this.dialogRef.close(true);
        }
        onDismiss() {
            // Close the dialog, return false
            this.dialogRef.close(false);
        }
    };
    ConfirmDialogComponent.ctorParameters = () => [
        { type: material_1.MatDialogRef },
        { type: ConfirmDialogModel, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
    ];
    ConfirmDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-confirm-dialog',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html")).default
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], ConfirmDialogComponent);
    exports.ConfirmDialogComponent = ConfirmDialogComponent;
    /**
     * Class to represent confirm dialog model.
     *
     * It has been kept here to keep it as part of shared component.
     */
    class ConfirmDialogModel {
        constructor(title, message) {
            this.title = title;
            this.message = message;
        }
    }
    exports.ConfirmDialogModel = ConfirmDialogModel;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = {
        production: false,
        name: 'dev'
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js"), __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts"), __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_dynamic_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
        .catch(err => console.error(err));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\_KhaleekSb\shopper-data\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map