(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form *ngIf=\"showLoginPage\" [formGroup]=\"loginForm\" class=\"form-group mt-4_\" autocomplete=\"on\" novalidate\r\n  style=\"height:100%;\">\r\n\r\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\"></ngx-loading>\r\n\r\n  <div class=\"login-wrapper\">\r\n    \r\n    <div class=\"login-box\">\r\n      <div class=\"navbar1\" >\r\n        <a class=\"navbar-brand\" ><img src=\"assets/images/dashboard.png\" alt=\"dashboard\" style=\"width:250px; margin-bottom:5em;\"></a>\r\n       </div>    \r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\">\r\n        <span>Username</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n        <span>Password</span></div>\r\n\r\n        <div class=\"form-group\">       \r\n          <span>Forgort Password</span></div>\r\n\r\n      \r\n      <div class=\"btn-bar\">\r\n        <button type=\"submit\" class=\"btn btn-primary \" (click)=\"onSubmit()\">Login</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, login_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        {
            path: '',
            component: login_component_1.LoginComponent
        }
    ];
    let LoginRoutingModule = class LoginRoutingModule {
    };
    LoginRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LoginRoutingModule);
    exports.LoginRoutingModule = LoginRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts"), __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, login_component_1, login_routing_module_1, forms_1, ngx_loading_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let LoginModule = class LoginModule {
    };
    LoginModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent],
            imports: [
                common_1.CommonModule,
                login_routing_module_1.LoginRoutingModule,
                forms_1.FormsModule,
                ngx_loading_1.NgxLoadingModule.forRoot({}),
                forms_1.ReactiveFormsModule
            ]
        })
    ], LoginModule);
    exports.LoginModule = LoginModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/login/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! src/app/shared/HttpService */ "./src/app/shared/HttpService.ts"), __webpack_require__(/*! src/app/shared/App.Config */ "./src/app/shared/App.Config.ts"), __webpack_require__(/*! src/app/shared/Constant */ "./src/app/shared/Constant.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"), __webpack_require__(/*! src/app/services/auth/AuthService */ "./src/app/services/auth/AuthService.ts"), __webpack_require__(/*! src/app/services/token.storage.service */ "./src/app/services/token.storage.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, HttpService_1, App_Config_1, Constant_1, forms_1, router_1, ngx_toastr_1, AuthService_1, token_storage_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let LoginComponent = class LoginComponent {
        constructor(fb, httpService, router, toaster, authService, route, tokenStorage) {
            this.fb = fb;
            this.httpService = httpService;
            this.router = router;
            this.toaster = toaster;
            this.authService = authService;
            this.route = route;
            this.tokenStorage = tokenStorage;
            this.difference = "";
            this.loginOut = new core_1.EventEmitter();
            this.showLoginPage = false;
            this.loading = true;
            this.apiServer = App_Config_1.AppConfig.settings.apiServer;
            // let checkConfg = new CompareJSON(this.httpService);
            // checkConfg.compareJonFile("assets/configurables/config.deploy.json", AppConfig.settings, false).then(x => this.difference = x);
        }
        ngOnInit() {
            this.showLoginPage = true;
            this.loading = false;
            this.init();
        }
        init() {
            this.loginForm = this.fb.group({
                email: ['', forms_1.Validators.required],
                password: ['', forms_1.Validators.required]
            });
        }
        onSubmit() {
            if (this.loginForm.invalid) {
                return;
            }
            if (this.difference != "") {
                this.toaster.error(this.difference + " missing in config file", "", { timeOut: 0 });
                return;
            }
            let email = this.loginForm.value.email;
            let password = this.loginForm.value.password;
            this.loading = true;
            let url = this.apiServer[Constant_1.Constants.BASE_URL] + this.apiServer["authentication"]["endPoint"];
            this.httpService.userAuthentication(url, email, password).subscribe((response) => {
                if (response.status == 200 && response.body != undefined) {
                    debugger;
                    let data = response.body;
                    this.loading = false;
                    sessionStorage.basic = email;
                    this.authService.saveToken(JSON.stringify(data.token));
                    this.tokenStorage.saveToken(data.token);
                    sessionStorage.setItem('userToken', JSON.stringify(data.token));
                    sessionStorage.setItem('userName', email);
                    let routingPath = "generic/dashboard/category";
                    this.router.navigate([routingPath]);
                }
            }, (err) => {
                this.loading = false;
                if (err.error.Message != undefined) {
                    throw err;
                }
                else {
                    throw err;
                }
            });
        }
    };
    LoginComponent.ctorParameters = () => [
        { type: forms_1.FormBuilder },
        { type: HttpService_1.HttpService },
        { type: router_1.Router },
        { type: ngx_toastr_1.ToastrService },
        { type: AuthService_1.AuthService },
        { type: router_1.ActivatedRoute },
        { type: token_storage_service_1.TokenStorageService }
    ];
    tslib_1.__decorate([
        core_1.Output()
    ], LoginComponent.prototype, "loginOut", void 0);
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-login',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login/login.component.scss")).default]
        })
    ], LoginComponent);
    exports.LoginComponent = LoginComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=2.js.map