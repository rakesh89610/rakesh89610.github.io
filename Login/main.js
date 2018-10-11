(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login1_login1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login1/login1.component */ "./src/app/login1/login1.component.ts");
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login2/login2.component */ "./src/app/login2/login2.component.ts");
/* harmony import */ var _login3_login3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login3/login3.component */ "./src/app/login3/login3.component.ts");
/* harmony import */ var _login4_login4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login4/login4.component */ "./src/app/login4/login4.component.ts");
/* harmony import */ var _login5_login5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login5/login5.component */ "./src/app/login5/login5.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _subpost_subpost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subpost/subpost.component */ "./src/app/subpost/subpost.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'login1', component: _login1_login1_component__WEBPACK_IMPORTED_MODULE_2__["Login1Component"] },
    { path: 'login2', component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__["Login2Component"] },
    { path: 'login3', component: _login3_login3_component__WEBPACK_IMPORTED_MODULE_4__["Login3Component"] },
    { path: 'login4', component: _login4_login4_component__WEBPACK_IMPORTED_MODULE_5__["Login4Component"] },
    { path: 'login5', component: _login5_login5_component__WEBPACK_IMPORTED_MODULE_6__["Login5Component"] },
    { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"] },
    { path: 'post/:id', component: _subpost_subpost_component__WEBPACK_IMPORTED_MODULE_8__["SubpostComponent"] },
    { path: 'userlogin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_login1_login1_component__WEBPACK_IMPORTED_MODULE_2__["Login1Component"], _login2_login2_component__WEBPACK_IMPORTED_MODULE_3__["Login2Component"], _login3_login3_component__WEBPACK_IMPORTED_MODULE_4__["Login3Component"], _login4_login4_component__WEBPACK_IMPORTED_MODULE_5__["Login4Component"], _login5_login5_component__WEBPACK_IMPORTED_MODULE_6__["Login5Component"], _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"], _subpost_subpost_component__WEBPACK_IMPORTED_MODULE_8__["SubpostComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Login Panel</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Login Model Box<span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/login1\" routerLinkActive=\"active\">Login Demo 1</a></li>\n          <li><a routerLink=\"/login2\">Login Demo 2</a></li>\n          <li><a routerLink=\"/login3\">Login Demo 3</a></li>\n          <li><a routerLink=\"/login4\">Login Demo 4</a></li>\n          <li><a routerLink=\"/login5\">Login Demo 5</a></li>\n        </ul>\n      </li>\n      <li><a routerLink=\"/post\">Post Component</a>\n        \n\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a  routerLink=\"/userlogin\" ><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Login';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container.card {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: rgb(104, 145, 162);\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n    color: rgb(12, 97, 33);\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card card-container\">\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n        <p id=\"profile-name\" class=\"profile-name-card\"></p>\n        <form class=\"form-signin\">\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n            <div id=\"remember\" class=\"checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                </label>\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">{{ title }}</button>\n        </form><!-- /form -->\n        <a href=\"#\" class=\"forgot-password\">\n            Forgot the password?\n        </a>\n    </div><!-- /card-container -->\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.title = 'Login From';
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login1/login1.component.css":
/*!*********************************************!*\
  !*** ./src/app/login1/login1.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login1/login1.component.html":
/*!**********************************************!*\
  !*** ./src/app/login1/login1.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header>\n        <h1>Techno Login/Registration</h1>\n    </header>\n    <section>\n        <div id=\"container_demo\">\n            <a class=\"hiddenanchor\" id=\"toregister\"></a>\n            <a class=\"hiddenanchor\" id=\"tologin\"></a>\n            <div id=\"wrapper\">\n                <div id=\"row\">\n                    <div id=\"login\" class=\"animate form col-md-12\">\n                        <form action=\"#\" autocomplete=\"on\">\n                            <h1>Log in</h1>\n                            <p>\n                                <label for=\"username\" class=\"uname\"> Your email or username </label>\n                                <input id=\"username\" name=\"username\" required=\"required\" type=\"text\"\n                                       placeholder=\"myusername or mymail@mail.com\"/>\n                            </p>\n                            <p>\n                                <label for=\"password\" class=\"youpasswd\"> Your password </label>\n                                <input id=\"password\" name=\"password\" required=\"required\" type=\"password\"\n                                       placeholder=\"eg. X8df!90EO\"/>\n                            </p>\n                            <p class=\"keeplogin\">\n                                <input type=\"checkbox\" name=\"loginkeeping\" id=\"loginkeeping\" value=\"loginkeeping\"/>\n                                <label for=\"loginkeeping\">Keep me logged in</label>\n                            </p>\n                            <p class=\"login button\">\n                                <input type=\"submit\" value=\"Sign In\"/>\n                            </p>\n                            <p class=\"change_link\">\n                                Not a member yet ?\n                                <a href=\"#toregister\" class=\"to_register\">Join us</a>\n                            </p>\n                        </form>\n                    </div>\n                </div>\n\n                <div id=\"register\" class=\"animate form\">\n                    <form action=\"#\" autocomplete=\"on\">\n                        <h1> Sign up </h1>\n                        <p>\n                            <label for=\"usernamesignup\" class=\"uname\">Your username</label>\n                            <input id=\"usernamesignup\" name=\"usernamesignup\" required=\"required\" type=\"text\"\n                                   placeholder=\"mysuperusername690\"/>\n                        </p>\n                        <p>\n                            <label for=\"emailsignup\" class=\"youmail\"> Your email</label>\n                            <input id=\"emailsignup\" name=\"emailsignup\" required=\"required\" type=\"email\"\n                                   placeholder=\"mysupermail@mail.com\"/>\n                        </p>\n                        <p>\n                            <label for=\"passwordsignup\" class=\"youpasswd\">Your password </label>\n                            <input id=\"passwordsignup\" name=\"passwordsignup\" required=\"required\" type=\"password\"\n                                   placeholder=\"eg. X8df!90EO\"/>\n                        </p>\n                        <p>\n                            <label for=\"passwordsignup_confirm\" class=\"youpasswd\">Please confirm your password </label>\n                            <input id=\"passwordsignup_confirm\" name=\"passwordsignup_confirm\" required=\"required\"\n                                   type=\"password\" placeholder=\"eg. X8df!90EO\"/>\n                        </p>\n                        <p class=\"signin button\">\n                            <input type=\"submit\" value=\"Sign up\"/>\n                        </p>\n                        <p class=\"change_link\">\n                            Already a member ?\n                            <a href=\"#tologin\" class=\"to_register\"> Go and log in </a>\n                        </p>\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div> \n"

/***/ }),

/***/ "./src/app/login1/login1.component.ts":
/*!********************************************!*\
  !*** ./src/app/login1/login1.component.ts ***!
  \********************************************/
/*! exports provided: Login1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Component", function() { return Login1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login1Component = /** @class */ (function () {
    function Login1Component() {
    }
    Login1Component.prototype.ngOnInit = function () {
    };
    Login1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login1',
            template: __webpack_require__(/*! ./login1.component.html */ "./src/app/login1/login1.component.html"),
            styles: [__webpack_require__(/*! ./login1.component.css */ "./src/app/login1/login1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Login1Component);
    return Login1Component;
}());



/***/ }),

/***/ "./src/app/login2/login2.component.css":
/*!*********************************************!*\
  !*** ./src/app/login2/login2.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login2/login2.component.html":
/*!**********************************************!*\
  !*** ./src/app/login2/login2.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/login2/login2.component.ts":
/*!********************************************!*\
  !*** ./src/app/login2/login2.component.ts ***!
  \********************************************/
/*! exports provided: Login2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Component", function() { return Login2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login2Component = /** @class */ (function () {
    function Login2Component() {
    }
    Login2Component.prototype.ngOnInit = function () {
    };
    Login2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login2',
            template: __webpack_require__(/*! ./login2.component.html */ "./src/app/login2/login2.component.html"),
            styles: [__webpack_require__(/*! ./login2.component.css */ "./src/app/login2/login2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Login2Component);
    return Login2Component;
}());



/***/ }),

/***/ "./src/app/login3/login3.component.css":
/*!*********************************************!*\
  !*** ./src/app/login3/login3.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login3/login3.component.html":
/*!**********************************************!*\
  !*** ./src/app/login3/login3.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/login3/login3.component.ts":
/*!********************************************!*\
  !*** ./src/app/login3/login3.component.ts ***!
  \********************************************/
/*! exports provided: Login3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login3Component", function() { return Login3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login3Component = /** @class */ (function () {
    function Login3Component() {
    }
    Login3Component.prototype.ngOnInit = function () {
    };
    Login3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login3',
            template: __webpack_require__(/*! ./login3.component.html */ "./src/app/login3/login3.component.html"),
            styles: [__webpack_require__(/*! ./login3.component.css */ "./src/app/login3/login3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Login3Component);
    return Login3Component;
}());



/***/ }),

/***/ "./src/app/login4/login4.component.css":
/*!*********************************************!*\
  !*** ./src/app/login4/login4.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login4/login4.component.html":
/*!**********************************************!*\
  !*** ./src/app/login4/login4.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login4 works!\n</p>\n"

/***/ }),

/***/ "./src/app/login4/login4.component.ts":
/*!********************************************!*\
  !*** ./src/app/login4/login4.component.ts ***!
  \********************************************/
/*! exports provided: Login4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login4Component", function() { return Login4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login4Component = /** @class */ (function () {
    function Login4Component() {
    }
    Login4Component.prototype.ngOnInit = function () {
    };
    Login4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login4',
            template: __webpack_require__(/*! ./login4.component.html */ "./src/app/login4/login4.component.html"),
            styles: [__webpack_require__(/*! ./login4.component.css */ "./src/app/login4/login4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Login4Component);
    return Login4Component;
}());



/***/ }),

/***/ "./src/app/login5/login5.component.css":
/*!*********************************************!*\
  !*** ./src/app/login5/login5.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login5/login5.component.html":
/*!**********************************************!*\
  !*** ./src/app/login5/login5.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login5 works!\n</p>\n"

/***/ }),

/***/ "./src/app/login5/login5.component.ts":
/*!********************************************!*\
  !*** ./src/app/login5/login5.component.ts ***!
  \********************************************/
/*! exports provided: Login5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login5Component", function() { return Login5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login5Component = /** @class */ (function () {
    function Login5Component() {
    }
    Login5Component.prototype.ngOnInit = function () {
    };
    Login5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login5',
            template: __webpack_require__(/*! ./login5.component.html */ "./src/app/login5/login5.component.html"),
            styles: [__webpack_require__(/*! ./login5.component.css */ "./src/app/login5/login5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Login5Component);
    return Login5Component;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    padding-top: 54px;\n  }\n  \n  @media (min-width: 992px) {\n    body {\n      padding-top: 56px;\n    }\n  }"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n\n    <!-- Bootstrap core CSS -->\n   \n\n  </head>\n\n  <body>\n\n  \n\n    <!-- Page Content -->\n    <div class=\"container\">\n\n      <div class=\"row\">\n\n        <!-- Blog Entries Column -->\n        <div class=\"col-md-8\">\n\n          <h1 class=\"my-4\">Page Heading\n            <small>Secondary Text</small>\n          </h1>\n\n       \n          <!-- Blog Post -->\n          <div class=\"card mb-4\">\n                     \n            <div class=\"card-body\" *ngFor=\"let post of posts\">\n\n              <h2 class=\"card-title\"> <p> {{ post.id }}</p>       \n                <a [routerLink]=\"[post.id]\"> {{post.title}} </a>             \n              </h2>\n              <p class=\"card-text\">\n                \n                  {{post.body}}\n              </p>\n              <a href=\"#\" class=\"btn btn-primary\">{{post.id}} &rarr;</a>\n            </div>\n\n\n            <div class=\"card-footer text-muted\">\n              Posted on January 1, 2017 by\n              <a href=\"#\">Start Bootstrap</a>\n            </div>\n          </div>\n\n      \n\n          <!-- Pagination -->\n          \n\n        </div>\n\n        <!-- Sidebar Widgets Column -->\n        <div class=\"col-md-4\">\n\n          <!-- Search Widget -->\n          <div class=\"card my-4\">\n            <h5 class=\"card-header\">Search</h5>\n            <div class=\"card-body\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <span class=\"input-group-btn\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n\n          <!-- Categories Widget -->\n          <div class=\"card my-4\">\n            <h5 class=\"card-header\">Categories</h5>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <ul class=\"list-unstyled mb-0\">\n                    <li>\n                      <a href=\"#\">Web Design</a>\n                    </li>\n                    <li>\n                      <a href=\"#\">HTML</a>\n                    </li>\n                    <li>\n                      <a href=\"#\">Freebies</a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"col-lg-6\">\n                  <ul class=\"list-unstyled mb-0\">\n                    <li>\n                      <a href=\"#\">JavaScript</a>\n                    </li>\n                    <li>\n                      <a href=\"#\">CSS</a>\n                    </li>\n                    <li>\n                      <a href=\"#\">Tutorials</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Side Widget -->\n          <div class=\"card my-4\">\n            <h5 class=\"card-header\">Side Widget</h5>\n            <div class=\"card-body\">\n              You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n    <!-- Footer -->\n    <footer class=\"py-5 bg-dark\">\n      <div class=\"container\">\n        <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2018</p>\n      </div>\n      <!-- /.container -->\n    </footer>\n\n\n\n  </body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
        var _this = this;
        this.posts = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.posts = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/subpost/subpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/subpost/subpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subpost/subpost.component.html":
/*!************************************************!*\
  !*** ./src/app/subpost/subpost.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n     \n  <div class=\"card-body\">\n\n      <h2 class=\"card-title\"> <p> {{ post.id }}</p>       \n         {{post.title}}              \n      </h2>\n      <p class=\"card-text\">\n        \n          {{post.body}}\n      </p>\n      <a href=\"#\" class=\"btn btn-primary\">{{post.id}} &rarr;</a>\n    </div>\n\n\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 2017 by\n      <a href=\"#\">Start Bootstrap</a>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/subpost/subpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subpost/subpost.component.ts ***!
  \**********************************************/
/*! exports provided: SubpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubpostComponent", function() { return SubpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubpostComponent = /** @class */ (function () {
    function SubpostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.post = {};
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log(err); });
    }
    SubpostComponent.prototype.ngOnInit = function () {
    };
    SubpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subpost',
            template: __webpack_require__(/*! ./subpost.component.html */ "./src/app/subpost/subpost.component.html"),
            styles: [__webpack_require__(/*! ./subpost.component.css */ "./src/app/subpost/subpost.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SubpostComponent);
    return SubpostComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rakeshroy/Login/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map