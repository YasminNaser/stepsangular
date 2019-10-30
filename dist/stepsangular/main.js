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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var src_app_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var src_app_category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/category/category.component */ "./src/app/category/category.component.ts");









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: src_app_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'category', component: src_app_category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"] },
    { path: 'contact', component: src_app_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'profile', component: src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: '**', component: src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main role=\"main\">\n    <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Steps App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");

















// For Google Map 






// var firebaseConfig = {
//   apiKey: "AIzaSyC5xWffVvzDmLIqZQOmU03_US-KL4IEovM",
//   authDomain: "steps-bb36c.firebaseapp.com",
//   databaseURL: "https://steps-bb36c.firebaseio.com",
//   projectId: "steps-bb36c",
//   storageBucket: "steps-bb36c.appspot.com",
//   messagingSenderId: "967818533041",
//   appId: "1:967818533041:web:e46256c57ca180e68faa90",
//   measurementId: "G-HBN9KZF00G"
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_22__["CategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_15__["CustomFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC3NVM-2584m6EdL_ie-riCC5Kx009IpC4'
                }),
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  category works!\n</p>\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .expand{\r\n    display: none !important;\r\n} */\r\n.page-title{\r\n    background-color: rgba(27, 26, 26, 0.25);\r\n    background-image: url('page-title.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    \r\n}\r\n.page-title .bg-overlay::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: inherit;\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n.page-title-content{\r\n    padding-top: 155px;\r\n    padding-bottom: 140px;\r\n}\r\n.title-content{\r\n    text-align: center;\r\n    font-size: 70px;\r\n    line-height: 1.1;\r\n    font-weight: 700;\r\n    position: relative;\r\n    font-family: 'Montserrat', sans-serif;\r\n    margin-bottom: 18px;\r\n    color: #fff;\r\n    margin-left: -2px;\r\n    letter-spacing: -0.02em;\r\n}\r\n.branche-content{\r\n    padding:110px 15px;\r\n}\r\n.title-bran{\r\n    font-size: 22px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n.desc-branch{\r\n    font-size: 15px;\r\n    color:#9b9b9b;\r\n    line-height: 1.5;\r\n    margin-bottom: 25px;\r\n\r\n}\r\n.img-content{\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n    position: relative;\r\n    \r\n}\r\n.header-img{\r\n    position: absolute;\r\n    text-align: center;\r\n    top:100px;\r\n    \r\n}\r\n.img-contact{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    align-items: stretch;\r\n}\r\n.parallax-window {\r\n\tmin-height: 400px;\r\n\tbackground: transparent;\r\n}\r\n.parallax-window {\r\n    min-height: 400px;\r\n    background: transparent;\r\n}\r\n/* section {\r\n  padding: 0px 0 0px;\r\n  background: #fff;\r\n} */\r\n.contact-sec{\r\n    background: #9b9b9b !important;\r\n}\r\n.img-contact{\r\n    widows: 100%;\r\n    height:100%;\r\n    background: url('contact-bg.jpg');\r\n    background-size: cover;\r\n    background-position: 50% 0;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    float: left;\r\n}\r\n.form-content{\r\n    float: right;\r\n    padding-left: 0px !important;;\r\n    padding-right: 0px !important;\r\n    background: #f9f9f9;\r\n\r\n}\r\n.header-contact{\r\n    padding:200px 0;\r\n    text-align: center;\r\n}\r\n.header-contact img{\r\n    padding-bottom: 25px;\r\n}\r\n.header-contact h3{\r\n    color: #fff;\r\n    font-size: 38px;\r\n    margin-bottom: 25px;\r\n    font-weight: 700;\r\n    letter-spacing: -0.01em;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.inner-form{\r\n    padding-top:19px;\r\n    padding-right: 90px !important;\r\n    padding-left: 70px !important;\r\n}\r\n.form-space{\r\n    height: 65px;\r\n}\r\n.header-form{\r\n    margin-bottom: 47px;\r\n    font-size: 38px;    \r\n    font-weight: 700;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.header-form h3{\r\n    font-size: 38px;    \r\n    font-weight: 700;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.get-in-touch {\r\n    max-width: 650px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n  }\r\n.get-in-touch .title {\r\n    text-align: center;\r\n    font-family: 'Montserrat', sans-serif;  \r\n     text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    font-size: 15px;\r\n    line-height: 48px;\r\n    padding-bottom: 48px;\r\n  }\r\n.contact-form .form-field {\r\n    position: relative;\r\n    margin: 22px 0;\r\n  }\r\n.contact-form .input-text {\r\n    display: block;\r\n    width: 100%;\r\n    height: 36px;\r\n    border-width: 0 0 2px 0;\r\n    border-color: #9b9b9b;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 26px;\r\n    font-weight: 400;\r\n    background: transparent !important;\r\n  }\r\n.textarea-text{\r\n      height: auto !important;\r\n      min-height: 120px !important;\r\n\r\n  }\r\n.contact-form .input-text:focus {\r\n    outline: none;\r\n  }\r\n.contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {\r\n    transform: translateY(-24px);\r\n  }\r\n.contact-form .label {\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 11px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 26px;\r\n    font-weight: 400;\r\n    color: #888;\r\n    cursor: text;\r\n    transition: transform .2s ease-in-out;\r\n  }\r\n.contact-form .submit-btn {\r\n    border:0;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    min-width: 170px;\r\n    background-color: #e6ae48;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-family: 'Montserrat', sans-serif;\r\n    border-radius: 50px;\r\n    margin-top: 0;\r\n  }\r\n.contact-form .submit-btn:hover{\r\n    background: #333;\r\n    transition: all 300ms linear 0ms;\r\n  }\r\n.contact-form{\r\n    display: block\r\n}\r\n.input-text.js-input:focus{\r\n    border-color: #e6ae48;\r\n}\r\nagm-map {\r\n    height: 550px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUNJLHdDQUF3QztJQUN4Qyx1Q0FBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFJaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsdUJBQXVCO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6QztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUVBLDJCQUEyQjtFQUNyQztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFDQUFxQztLQUNwQyx5QkFBeUI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0VBQ3BDO0FBQ0E7TUFDSSx1QkFBdUI7TUFDdkIsNEJBQTRCOztFQUVoQztBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7SUFFVSw0QkFBNEI7RUFDdEM7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUVaLHFDQUFxQztFQUV2QztBQUNBO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQU1yQyxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxnQkFBZ0I7SUFNaEIsZ0NBQWdDO0VBQ2xDO0FBQ0Y7SUFDSTtBQUNKO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5leHBhbmR7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLnBhZ2UtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNiwgMjYsIDAuMjUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFnZS10aXRsZS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLnBhZ2UtdGl0bGUgLmJnLW92ZXJsYXk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbi5wYWdlLXRpdGxlLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTU1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTQwcHg7XHJcbn1cclxuLnRpdGxlLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG59XHJcblxyXG4uYnJhbmNoZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzoxMTBweCAxNXB4O1xyXG59XHJcbi50aXRsZS1icmFue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRlc2MtYnJhbmNoe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IzliOWI5YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxufVxyXG4uaW1nLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5oZWFkZXItaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgXHJcbn1cclxuLmltZy1jb250YWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG4ucGFyYWxsYXgtd2luZG93IHtcclxuXHRtaW4taGVpZ2h0OiA0MDBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ucGFyYWxsYXgtd2luZG93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLyogc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0gKi9cclxuLmNvbnRhY3Qtc2Vje1xyXG4gICAgYmFja2dyb3VuZDogIzliOWI5YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLWNvbnRhY3R7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QtYmcuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmZvcm0tY29udGVudHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG5cclxufVxyXG4uaGVhZGVyLWNvbnRhY3R7XHJcbiAgICBwYWRkaW5nOjIwMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlci1jb250YWN0IGltZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdCBoM3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmlubmVyLWZvcm17XHJcbiAgICBwYWRkaW5nLXRvcDoxOXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tc3BhY2V7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLmhlYWRlci1mb3Jte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDdweDtcclxuICAgIGZvbnQtc2l6ZTogMzhweDsgICAgXHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVyLWZvcm0gaDN7XHJcbiAgICBmb250LXNpemU6IDM4cHg7ICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uZ2V0LWluLXRvdWNoIHtcclxuICAgIG1heC13aWR0aDogNjUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgLmdldC1pbi10b3VjaCAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgIFxyXG4gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZm9ybSAuZm9ybS1maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDIycHggMDtcclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSAuaW5wdXQtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YjliOWI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHRhcmVhLXRleHR7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSAuaW5wdXQtdGV4dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0OmZvY3VzICsgLmxhYmVsLCAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0Lm5vdC1lbXB0eSArIC5sYWJlbCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgfVxyXG4gIC5jb250YWN0LWZvcm0gLmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBib3R0b206IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuY29udGFjdC1mb3JtIC5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWU0ODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLWtodG1sLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSAuc3VibWl0LWJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLWtodG1sLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgfVxyXG4uY29udGFjdC1mb3Jte1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLmlucHV0LXRleHQuanMtaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNmFlNDg7XHJcbn1cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"page-title\">\n  <div class=\"bg-overlay\">  \n  </div>\n  <div class=\"container\">\n    <div class=\"page-title-content\">\n      <h1 class=\"title-content\">Contact Form</h1>\n\n    </div>\n  </div>\n  <!-- <ul>\n      <li *ngFor= \"let branche of branches\"> {{ branche.title }}</li>\n    </ul> -->\n\n</section>\n<!-- Start Branches -->\n<section class=\"branches-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\"  *ngFor= \"let branche of branches\">\n        <div class=\"branche-content\"  *ngIf=\" branche.id  < 5 \">\n          <div class=\"branche-title\">\n            <h3 class=\"title-bran\">{{ branche.title |  slice:0:15 }}</h3>\n          </div>\n          <div class=\"desc-branch\">\n            {{ branche.body | slice:0:120 }}\n          </div>\n          <div class=\"list-info\">\n              <ul class=\"side-info\">\n                  <li class=\"li-address\">\n                      <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n                      13 Gehan St, Mansoura, Egypt\n                  </li> \n                  <li class=\"li-phone\">\n                      <a href=\"tel:#\"> \n                            <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                            002 0104748481 \n                      </a>\n                  </li>\n                  <li class=\"li-email\">\n                      <a href=\"#\"> \n                            <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                            <!-- <i class=\"far fa-envelope\"></i> -->\n                            steps@gmail.com \n                      </a>\n                  </li>\n                </ul>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n<!-- End Branches -->\n<!-- Start Contact Form -->\n<section class=\"contact-sec\">\n      <div class=\"\">\n            <div class=\"col-md-6 col-sm-12  img-content\">\n                <div class=\"img-contact\">\n                    <div class=\"header-contact\">\n                        <img src=\"../assets/images/icon_bg.png\">\n                        <h3>\n                          <span>Need Help?!!</span>\n                          <br>\n                          Don’t Hesitate To Ask\n                        </h3>\n                        <div class=\"lines\">\n                          <span class=\"h-line-1\"></span>\n                          <span class=\"h-line-2\"></span>\n                          \n\n                        </div>\n                      </div>\n\n                </div>\n           \n            </div>\n            <div class=\"col-md-6 col-sm-12 form-content\">\n              <div class=\"inner-form\">\n                <div class=\"form-space\"></div>\n                <div class=\"inner-form\">\n                    <div class=\"header-form\">\n                        <h3>Write To Us</h3>\n                    </div>\n                    <div class=\"form-rows\">\n                    \n                        <form class=\"contact-form\" name=\"from\" [formGroup]=\"from\" (ngSubmit)=\"onSubmit()\">\n                          <div class=\"row\">\n                                <div class=\"form-field col-xl-6 col-xs-12\">\n                                    <input  class=\"input-text js-input\" type=\"text\" id=\"name\" #name formControlName=\"name\">\n                                    \n                                    \n                                    <label class=\"label\" for=\"name\">Name</label>\n                                    <p *ngIf=\"name.value.errors?.rangeLength\">error message</p>\n                                    \n                                </div>\n                                <div class=\"form-field col-xl-6 col-xs-12\">\n                                    <input  class=\"input-text js-input\" type=\"email\" id=\"email\" #email FormControlName=\"email\">\n                                    <label class=\"label\" for=\"email\">Email</label>\n                                </div>\n                                <div *ngIf=\"from.get('email').touched && from.get('email').invalid\" class=\"alert alert-danger\"> Error</div>\n                                \n                          </div>\n                          <div class=\"row\">\n                              <div class=\"form-field col-xl-6 col-xs-12\">\n                                  <input class=\"input-text js-input\" type=\"text\" id=\"phone\" #phone FormControlName=\"email\" >\n                                  <label class=\"label\" for=\"name\">Phone</label>\n                              </div>\n                              <div class=\"form-field col-xl-6 col-xs-12\">\n                                  <input  class=\"input-text js-input\" type=\"text\" id=\"subject\" #subject FormControlName=\"subject\">\n                                  <label class=\"label\" for=\"email\">Subject</label>\n                              </div>\n                        </div>\n                            <div class=\"row\">\n                                <div class=\"form-field col-12\">\n                                    <textarea id=\"message\" cols=\"40\" rows=\"4\" class=\"input-text js-input textarea-text\" type=\"text\" placeholder=\"Message\"\n                                     required\n                                     id=\"message\" #message FormControlName=\"message\"></textarea>\n                                 </div>\n                            </div>\n                            <div class=\"form-field col x-100 align-center\">\n                               <button class=\"submit-btn\" type=\"submit\" value=\"\" [disabled]=\"!from.valid\">SEND MESSAGE</button>\n                            </div>\n                         </form>\n\n                </div>\n\n</div>\n</div>\n            </div>\n      </div>\n</section>\n     \n    \n<!-- End Contact Form -->\n\n<!-- Map -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"   >\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" icon=\"http://maps.google.com/mapfiles/ms/icons/green-dot.png\" ></agm-marker>\n</agm-map>\n\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(service) {
        this.service = service;
        this.title = 'My first AGM project';
        this.lat = 31.130024;
        this.lng = 31.340092;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get().subscribe(function (res) { _this.branches = res; });
        this.from = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].rangeLength([5, 9]))
        });
    };
    Object.defineProperty(ContactComponent.prototype, "email", {
        get: function () {
            return this.from.get('email');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ContactComponent.prototype.onSubmit = function () {
        console.log(this.from.value);
        if (this.from.invalid) {
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav\">\n  <div class=\"grapper-box-sidebar\">\n    <!-- close btn -->\n    <a class=\"btn-close\" href=\"#\">\n      <i class=\"fa fa-times\"></i>\n    </a>\n    <div class=\"sidebar-content\">\n      <div class=\"logo-sidebar\">\n          <a class=\"logo-desktop\" href=\"#\">\n              <img src=\"../../assets/images/logo.png\">\n          </a>\n      </div>\n      <div class=\"content-text\">\n        <h2 class=\"widget-title\">\n            We are Steps, our strategists will help you set an objective and choose your tools, developing a plan for your business. \n        </h2>\n        <!-- UL Infoo Contact-->\n        <ul class=\"side-info\">\n            <li class=\"li-address\">\n                <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n                13 Gehan St, Mansoura, Egypt\n            </li> \n            <li class=\"li-phone\">\n                <a href=\"tel:#\"> \n                      <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                      002 0104748481 \n                </a>\n            </li>\n            <li class=\"li-email\">\n                <a href=\"#\"> \n                      <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                      steps@gmail.com \n                </a>\n            </li>\n          </ul>\n          <!-- UL latest photos from instagram -->\n          <ul class=\"instagram-latest-photos\">\n              <li>\n                  <img src=\"../assets/images/insta1.jpg\" alt=\"instaram\"> \n                  <div class=\"over-layer-insta\">\n                      <a href=\"#\">\n                          <div class=\"white-dotte-link\">\n                                <i class=\"fas fa-ellipsis-h\"></i>\n                          </div>\n                      </a>\n\n                  </div>\n              </li>\n              <li>\n                    <img src=\"../assets/images/insta2.jpg\" alt=\"instaram\"> \n                    <div class=\"over-layer-insta\">\n                        <a href=\"#\">\n                            <div class=\"white-dotte-link\">\n                                  <i class=\"fas fa-ellipsis-h\"></i>\n                            </div>\n                        </a>\n  \n                    </div>\n                </li>\n                <li>\n                        <img src=\"../assets/images/insta3.jpg\" alt=\"instaram\"> \n                        <div class=\"over-layer-insta\">\n                            <a href=\"#\">\n                                <div class=\"white-dotte-link\">\n                                      <i class=\"fas fa-ellipsis-h\"></i>\n                                </div>\n                            </a>\n      \n                        </div>\n                    </li>\n                    <li>\n                            <img src=\"../assets/images/insta4.jpg\" alt=\"instaram\"> \n                            <div class=\"over-layer-insta\">\n                                <a href=\"#\">\n                                    <div class=\"white-dotte-link\">\n                                          <i class=\"fas fa-ellipsis-h\"></i>\n                                    </div>\n                                </a>\n          \n                            </div>\n                        </li>\n                        <li>\n                                <img src=\"../assets/images/insta5.jpg\" alt=\"instaram\"> \n                                <div class=\"over-layer-insta\">\n                                    <a href=\"#\">\n                                        <div class=\"white-dotte-link\">\n                                              <i class=\"fas fa-ellipsis-h\"></i>\n                                        </div>\n                                    </a>\n              \n                                </div>\n                            </li>\n                            <li>\n                                    <img src=\"../assets/images/insta1.jpg\" alt=\"instaram\"> \n                                    <div class=\"over-layer-insta\">\n                                        <a href=\"#\">\n                                            <div class=\"white-dotte-link\">\n                                                  <i class=\"fas fa-ellipsis-h\"></i>\n                                            </div>\n                                        </a>\n                  \n                                    </div>\n                                </li>\n          </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer{\r\n    background-color: #222;\r\n    font-size: 15px;\r\n    line-height: 22px;\r\n    font-weight: 400;\r\n    color:#9b9b9b;\r\n    width: 100%;\r\n    height: 500px;\r\n    /* position: absolute;\r\n    bottom: 0;\r\n    left: 0; */\r\n}\r\n#footer .top-footer{\r\n    padding:85px 0 50px;\r\n    border-bottom:2px solid #2b2b2b;\r\n}\r\n#footer .top-footer .top-footer-logo{\r\n    margin-bottom: 25px;\r\n}\r\n#footer .top-footer .text-logo-footer{\r\n    margin-bottom:20px;\r\n}\r\n#footer .top-footer .text-logo-footer p{\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    color: #9b9b9b;\r\n}\r\n#footer .top-footer .footer-title{\r\n    margin-bottom:30px;\r\n    color:#fff;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-family: \"Montserrat\";\r\n\r\n}\r\n.post-item{\r\n    margin-bottom: 20px;\r\n}\r\n.post-item .post-date{\r\n    color:#616161;\r\n    line-height: 1;\r\n    margin-bottom: 11px;\r\n\r\n}\r\n.post-item  .post-title h5{\r\n    line-height: 22px;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: bold;\r\n}\r\n.post-item  .post-title a{\r\n    color: #cecece;\r\n}\r\n.post-item  .post-title a:hover{\r\n    color:#e6ae48\r\n}\r\n.newsletter-form{\r\n    display: block;\r\n    margin-bottom: 23px;\r\n}\r\n.newsletter-form .form-group{\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiOztjQUVVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IzliOWI5YjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7ICovXHJcbn1cclxuI2Zvb3RlciAudG9wLWZvb3RlcntcclxuICAgIHBhZGRpbmc6ODVweCAwIDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMmIyYjJiO1xyXG59XHJcbiNmb290ZXIgLnRvcC1mb290ZXIgLnRvcC1mb290ZXItbG9nb3tcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuI2Zvb3RlciAudG9wLWZvb3RlciAudGV4dC1sb2dvLWZvb3RlcntcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG4jZm9vdGVyIC50b3AtZm9vdGVyIC50ZXh0LWxvZ28tZm9vdGVyIHB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM5YjliOWI7XHJcbn1cclxuI2Zvb3RlciAudG9wLWZvb3RlciAuZm9vdGVyLXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuXHJcbn1cclxuLnBvc3QtaXRlbXtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBvc3QtaXRlbSAucG9zdC1kYXRle1xyXG4gICAgY29sb3I6IzYxNjE2MTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuXHJcbn1cclxuLnBvc3QtaXRlbSAgLnBvc3QtdGl0bGUgaDV7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucG9zdC1pdGVtICAucG9zdC10aXRsZSBhe1xyXG4gICAgY29sb3I6ICNjZWNlY2U7XHJcbn1cclxuLnBvc3QtaXRlbSAgLnBvc3QtdGl0bGUgYTpob3ZlcntcclxuICAgIGNvbG9yOiNlNmFlNDhcclxufVxyXG4ubmV3c2xldHRlci1mb3Jte1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG59XHJcbi5uZXdzbGV0dGVyLWZvcm0gLmZvcm0tZ3JvdXB7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n    <div class=\"top-footer\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!-- Col-Footer-->\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                    <!-- Logo -->\n                    <div class=\"top-footer-logo\">\n                        <a href=\"#\">\n                                <img src=\"../../assets/images/w-logo.png\">\n                        </a>\n                    </div>\n                    <div class=\"text-logo-footer\">\n                        <p>\n                                We are Steps, our strategists will help you set an objective and choose your tools, developing a plan for your business.                                 \n                        </p>\n\n\n                    </div>\n                    <!-- Contacts -->\n                    <div class=\"list-info\">\n                            <ul class=\"side-info\">\n                                <li class=\"li-address\">\n                                    <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n                                    13 Gehan St, Mansoura, Egypt\n                                </li> \n                                <li class=\"li-phone\">\n                                    <a href=\"tel:#\"> \n                                          <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                                          002 0104748481 \n                                    </a>\n                                </li>\n                                <li class=\"li-email\">\n                                    <a href=\"#\"> \n                                          <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                                          steps@gmail.com \n                                    </a>\n                                </li>\n                              </ul>\n                        </div>\n                </div>\n                <!-- Col Footer -->\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                    <div class=\"posts-fb\">\n                        <h2 class=\"footer-title\">Recent Posts</h2>\n                        <div class=\"posts-footer-fb\">\n                            <!-- Post Item -->\n                            <div class=\"post-item\">\n                                <div class=\"post-date\">\n                                        Oct 15, 2017\n                                </div>\n                                <div class=\"post-title\">\n                                   <h5>\n                                        <a href=\"#\">\n                                                Four ways to cheer up on Blue Monday!\n                                        </a>\n                                   </h5>\n                                </div>\n\n                            </div>\n                               <!-- Post Item -->\n                               <div class=\"post-item\">\n                                    <div class=\"post-date\">\n                                            Oct 15, 2017\n                                    </div>\n                                    <div class=\"post-title\">\n                                       <h5>\n                                            <a href=\"#\">\n                                                    Four ways to cheer up on Blue Monday!\n                                            </a>\n                                       </h5>\n                                    </div>\n    \n                                </div>\n                                   <!-- Post Item -->\n                            <div class=\"post-item\">\n                                    <div class=\"post-date\">\n                                            Oct 15, 2017\n                                    </div>\n                                    <div class=\"post-title\">\n                                       <h5>\n                                            <a href=\"#\">\n                                                    Four ways to cheer up on Blue Monday!\n                                            </a>\n                                       </h5>\n                                    </div>\n    \n                                </div>\n                                \n\n                        </div>\n                    </div>\n                </div>\n                <!-- Col Footer -->\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                        <div class=\"posts-fb\">\n                            <h2 class=\"footer-title\">INSTAGRAM</h2>\n                            <div class=\"insta-photos\">\n                                    <!-- UL latest photos from instagram -->\n                                         <ul class=\"instagram-latest-photos\"> \n     \n                                             <li>\n                                                 <img src=\"../assets/images/insta1.jpg\" alt=\"instaram\"> \n                                                 <div class=\"over-layer-insta\">\n                                                     <a href=\"#\">\n                                                         <div class=\"white-dotte-link\">\n                                                             <i class=\"fas fa-ellipsis-h\"></i>\n                                                         </div>\n                                                     </a>\n                             \n                                                 </div>\n                                             </li>\n                                             <li>\n                                                 <img src=\"../assets/images/insta2.jpg\" alt=\"instaram\"> \n                                                 <div class=\"over-layer-insta\">\n                                                     <a href=\"#\">\n                                                         <div class=\"white-dotte-link\">\n                                                                 <i class=\"fas fa-ellipsis-h\"></i>\n                                                         </div>\n                                                     </a>\n                                 \n                                                 </div>\n                                             </li>\n                                             <li>\n                                                     <img src=\"../assets/images/insta3.jpg\" alt=\"instaram\"> \n                                                     <div class=\"over-layer-insta\">\n                                                         <a href=\"#\">\n                                                             <div class=\"white-dotte-link\">\n                                                                     <i class=\"fas fa-ellipsis-h\"></i>\n                                                             </div>\n                                                         </a>\n                                     \n                                                     </div>\n                                                 </li>\n                                                 <li>\n                                                         <img src=\"../assets/images/insta4.jpg\" alt=\"instaram\"> \n                                                         <div class=\"over-layer-insta\">\n                                                             <a href=\"#\">\n                                                                 <div class=\"white-dotte-link\">\n                                                                         <i class=\"fas fa-ellipsis-h\"></i>\n                                                                 </div>\n                                                             </a>\n                                         \n                                                         </div>\n                                                     </li>\n                                                     <li>\n                                                             <img src=\"../assets/images/insta5.jpg\" alt=\"instaram\"> \n                                                             <div class=\"over-layer-insta\">\n                                                                 <a href=\"#\">\n                                                                     <div class=\"white-dotte-link\">\n                                                                             <i class=\"fas fa-ellipsis-h\"></i>\n                                                                     </div>\n                                                                 </a>\n                                             \n                                                             </div>\n                                                         </li>\n                                                         <li>\n                                                                 <img src=\"../assets/images/insta1.jpg\" alt=\"instaram\"> \n                                                                 <div class=\"over-layer-insta\">\n                                                                     <a href=\"#\">\n                                                                         <div class=\"white-dotte-link\">\n                                                                                 <i class=\"fas fa-ellipsis-h\"></i>\n                                                                         </div>\n                                                                     </a>\n                                                 \n                                                                 </div>\n                                                             </li>\n                                         </ul>\n                             </div>\n                        </div>\n                     \n                </div>\n                <!-- Col Footer -->\n                <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n                    <div class=\"posts-fb\">\n                            <h2 class=\"footer-title\">STAY UPDATED</h2>\n                            <!-- Form -->\n                            <form class=\"newsletter-form\">\n                                <div class=\"form-group\">\n                                    \n                                </div>\n\n                            </form>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"bottom-footer\">\n\n    </div>\n\n\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar-row,.mat-toolbar-single-row{\r\n    height: auto !important;\r\n    color:transparent !important;\r\n    background: #fff;\r\n\r\n}\r\n\r\n.header-site .nav-site .nav-flex{\r\n    display: flex;\r\n;    \r\n}\r\n\r\n.header-site .nav-site .site-branding{\r\n    float: left;\r\n}\r\n\r\n/********** Nav Bar************/\r\n\r\n.navbar{\r\n    padding:0 !important;\r\n}\r\n\r\nnav.main-navigation {\r\n    display: block;\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu {\r\n    display: block;\r\n    float: right;\r\n    padding-left: 0px;\r\n}\r\n\r\n.profile-menu{\r\n    display: inline-block;\r\n    float: none;\r\n\r\n}\r\n\r\n.profile-menu a{\r\n    cursor: pointer;\r\n}\r\n\r\n.user{\r\n    padding-left: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu li {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 100;\r\n    font-family: 'Montserrat', sans-serif;\r\n    transition: all 500ms linear 0ms;\r\n}\r\n\r\n.menu li{\r\n    margin:0 15px;\r\n}\r\n\r\n.menu li a.nav-link {\r\n    padding:0 !important;\r\n    font-weight: 700;\r\n    display: block;\r\n    transition: all 0.2s ease-in-out 0s;\r\n    font-size: 13px;\r\n    color: #333;\r\n    line-height: 80px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu li a:hover,.menu li:hover>a {\r\n    color: #e6ae48;\r\n    /* background: #9ca3da; */\r\n}\r\n\r\n.menu ul {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-width: 235px;\r\n    position: absolute;\r\n    left: 0px;\r\n    background: #fff;\r\n    z-index: 99;\r\n    transform: translate(0,20px);\r\n    transition: all 0.2s ease-out;\r\n    -ms-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    -o-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    transition: all 300ms linear 0ms;\r\n}\r\n\r\n.menu .sub-menu{\r\n    padding-top:23px;\r\n    padding-bottom:23px;\r\n    \r\n}\r\n\r\n.menu .sub-menu li{\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    line-height: 24px;\r\n}\r\n\r\n.menu .sub-menu li a{\r\n    color: #666;\r\n    border-bottom: 1px solid #eee;\r\n    padding: 10px 0;\r\n    font-size: 13px;\r\n    transition: all 300ms linear 0ms !important;\r\n}\r\n\r\n.menu .sub-menu li:last-child a{\r\n    border-bottom: 0px solid #eee;\r\n    \r\n}\r\n\r\n/* .menu ul:after {\r\n    bottom: 100%;\r\n    left: 20%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-bottom-color: #fff;\r\n    border-width: 6px;\r\n    margin-left: -6px;\r\n} */\r\n\r\n.menu ul li {\r\n    display: block;\r\n    float: none;\r\n    background: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.menu ul li a {\r\n    font-size: 13px;\r\n    display: block;\r\n    color: #797979;\r\n}\r\n\r\n.menu a.nav-link{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu a.nav-link:before,\r\n.menu ul li a:before,.menu ul li>a:before,.menu a.nav-link:before{\r\n    background-color: #e6ae48;\r\n    height: 2px;\r\n    bottom: 3px !important;\r\n    transition: all 300ms linear 0ms !important;\r\n    content: \"\";\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    height: 2px;\r\n    position: absolute;\r\n    transition: opacity 0.3s ease 0s, bottom 0.3s ease 0s;\r\n    opacity: 0;\r\n    /* background-color: #fff; */\r\n    \r\n}\r\n\r\n.menu ul li  a.nav-link:hover:before,.menu a.nav-link.active::before {\r\n    opacity: 1 !important;\r\n}\r\n\r\n.menu ul li a:hover,.menu ul li:hover>a,.menu a.nav-link.homer.active {\r\n    color: #e6ae48;\r\n    transition: all 300ms linear 0ms !important;\r\n\r\n}\r\n\r\n.menu li:hover>ul {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: translate(0,0);\r\n}\r\n\r\n.menu ul ul {\r\n    left: 169px;\r\n    top: 0px;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transform: translate(20px,20px);\r\n    transition: all 0.2s ease-out;\r\n    -ms-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    -o-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    transition: all 300ms linear 0ms;\r\n    clip: rect(1px, 1px, 1px, 1px);\r\n}\r\n\r\n/* .menu ul ul:after {\r\n    left: -6px;\r\n    top: 10%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-right-color: #fff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n} */\r\n\r\n/* .menu li>ul ul:hover {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: translate(0,0);\r\n} */\r\n\r\n.responsive-menu {\r\n    display: none;\r\n    color: #333;\r\n    text-transform: uppercase;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 979px) {\r\n    .mainWrap {\r\n        width: 768px;\r\n    }\r\n\r\n    .menu ul {\r\n        top: 37px;\r\n    }\r\n\r\n    .menu li a {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* @media (max-width: 767px) {\r\n\r\n\r\n    .menu {\r\n        display: none;\r\n    }\r\n\r\n    .responsive-menu {\r\n        display: block;\r\n    }\r\n\r\n    nav {\r\n        margin: 0;\r\n        background: none;\r\n    }\r\n\r\n    .menu li {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n\r\n    .menu li a {\r\n        background: #fff;\r\n        color: #797979;\r\n    }\r\n\r\n    .menu li a:hover,.menu li:hover>a {\r\n        background: #9ca3da;\r\n        color: #fff;\r\n    }\r\n\r\n    .menu ul {\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        transform: initial;\r\n    }\r\n\r\n    .menu li:hover>ul {\r\n        visibility: visible;\r\n        opacity: 1;\r\n        position: relative;\r\n        transform: initial;\r\n    }\r\n\r\n    .menu ul ul {\r\n        left: 0;\r\n        transform: initial;\r\n    }\r\n\r\n    .menu li>ul ul:hover {\r\n        transform: initial;\r\n    }\r\n}\r\n */\r\n\r\n.site-right-menu{\r\n    float: right;\r\n    justify-self: flex-end;\r\n    margin-right:0px;\r\n}\r\n\r\n.site-right-menu .cart{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    margin-right: 10px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.site-right-menu .cart .icon-cart{\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    line-height: 80px;\r\n}\r\n\r\n#cart  path {\r\n    \r\n    fill: #222;\r\n    fill-rule: evenodd;\r\n    \r\n  }\r\n\r\n.site-right-menu .cart .counter-items{\r\n    padding: 1px 2px 1px 3px;\r\n    color: #222;\r\n    position: relative;\r\n    font-weight: bold;\r\n    left: 0px;\r\n    top: -8px;\r\n\r\n  }\r\n\r\n.site-right-menu  .h-btn-search i{\r\n      font-size: 13px;\r\n      cursor: pointer;\r\n      font-weight: 700;\r\n      color: #333;\r\n      \r\n  }\r\n\r\n.site-right-menu .btn-icon-sidebar-popup{\r\n      display: inline-block;\r\n      position: relative;\r\n      color: #222;\r\n      height:34px;\r\n      line-height: 33px;\r\n      font-size: 26px;\r\n      cursor: pointer;\r\n      width: 16px;\r\n      margin-left: 17px;\r\n      text-align: left;\r\n  }\r\n\r\n.site-right-menu .btn-icon-sidebar-popup span,.site-right-menu span.btn-icon-sidebar-popup:after,\r\n  .site-right-menu span.btn-icon-sidebar-popup:before{\r\n      background:#222;    \r\n      content:\"\";\r\n      display: block;\r\n      right: 0;\r\n      left: 0;   \r\n      \r\n      position: absolute;\r\n      transition: all 300ms linear 0ms;\r\n  }\r\n\r\n.site-right-menu span.btn-icon-sidebar-popup:before{\r\n    top:35px;\r\n    width: 16px;\r\n    height: 2px;\r\n    font-weight: 700; \r\n}\r\n\r\n.site-right-menu span.btn-icon-sidebar-popup:after{\r\n    width:12px;\r\n    height: 2px;\r\n    top: 24px;\r\n    font-weight: 700; \r\n    \r\n}\r\n\r\n.site-right-menu .btn-icon-sidebar-popup span{\r\n    top:30px;\r\n    height: 2px;\r\n    width: 14px;\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsK0JBQStCOztBQUMvQjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGNBQWM7SUFJZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVzs7QUFFZjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFDQUFxQztJQU1yQyxnQ0FBZ0M7QUFDcEM7O0FBSUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBSTdCLCtDQUErQztJQUMvQyw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBTTNDLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixlQUFlO0lBTWYsMkNBQTJDO0FBQy9DOztBQUNBO0lBQ0ksNkJBQTZCOztBQUVqQzs7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHOztBQUVIO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQU10QiwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBTWxCLHFEQUFxRDtJQUNyRCxVQUFVO0lBQ1YsNEJBQTRCOztBQUVoQzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFNZCwyQ0FBMkM7O0FBRS9DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUk3QiwrQ0FBK0M7SUFDL0MsOENBQThDO0lBQzlDLDJDQUEyQztJQU0zQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7Ozs7R0FJRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQU1BO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0o7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBd0RFOztBQUNGO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDRTs7SUFFRSxVQUFVO0lBQ1Ysa0JBQWtCOztFQUVwQjs7QUFDQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsU0FBUzs7RUFFWDs7QUFDQTtNQUNJLGVBQWU7TUFDZixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFdBQVc7O0VBRWY7O0FBRUE7TUFDSSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixlQUFlO01BQ2YsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7O0FBRUE7O01BRUksZUFBZTtNQUNmLFVBQVU7TUFDVixjQUFjO01BQ2QsUUFBUTtNQUNSLE9BQU87O01BRVAsa0JBQWtCO01BTWxCLGdDQUFnQztFQUNwQzs7QUFDQTtJQUNFLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjs7QUFFcEI7O0FBQ0U7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7O0VBRWIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXItcm93LC5tYXQtdG9vbGJhci1zaW5nbGUtcm93e1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXItc2l0ZSAubmF2LXNpdGUgLm5hdi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuOyAgICBcclxufVxyXG4uaGVhZGVyLXNpdGUgLm5hdi1zaXRlIC5zaXRlLWJyYW5kaW5ne1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKiBOYXYgQmFyKioqKioqKioqKioqL1xyXG4ubmF2YmFye1xyXG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbn1cclxubmF2Lm1haW4tbmF2aWdhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi5wcm9maWxlLW1lbnV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuXHJcbn1cclxuLnByb2ZpbGUtbWVudSBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi51c2Vye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudSBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyIDBtcztcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyIDBtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyIDBtcztcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXIgMG1zO1xyXG59XHJcblxyXG5cclxuXHJcbi5tZW51IGxpe1xyXG4gICAgbWFyZ2luOjAgMTVweDtcclxufVxyXG4ubWVudSBsaSBhLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1lbnUgbGkgYTpob3ZlciwubWVudSBsaTpob3Zlcj5hIHtcclxuICAgIGNvbG9yOiAjZTZhZTQ4O1xyXG4gICAgLyogYmFja2dyb3VuZDogIzljYTNkYTsgKi9cclxufVxyXG5cclxuLm1lbnUgdWwge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDIzNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLWtodG1sLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG59XHJcbi5tZW51IC5zdWItbWVudXtcclxuICAgIHBhZGRpbmctdG9wOjIzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyM3B4O1xyXG4gICAgXHJcbn1cclxuLm1lbnUgLnN1Yi1tZW51IGxpe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5tZW51IC5zdWItbWVudSBsaSBhe1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxufVxyXG4ubWVudSAuc3ViLW1lbnUgbGk6bGFzdC1jaGlsZCBhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNlZWU7XHJcbiAgICBcclxufVxyXG5cclxuLyogLm1lbnUgdWw6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59ICovXHJcblxyXG4ubWVudSB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tZW51IHVsIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxufVxyXG4ubWVudSBhLm5hdi1saW5re1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubWVudSBhLm5hdi1saW5rOmJlZm9yZSxcclxuLm1lbnUgdWwgbGkgYTpiZWZvcmUsLm1lbnUgdWwgbGk+YTpiZWZvcmUsLm1lbnUgYS5uYXYtbGluazpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhZTQ4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3R0b206IDNweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLWtodG1sLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgYm90dG9tIDAuM3MgZWFzZSAwcztcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgYm90dG9tIDAuM3MgZWFzZSAwcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGJvdHRvbSAwLjNzIGVhc2UgMHM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGJvdHRvbSAwLjNzIGVhc2UgMHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgYm90dG9tIDAuM3MgZWFzZSAwcztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBib3R0b20gMC4zcyBlYXNlIDBzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbiAgICBcclxufVxyXG4ubWVudSB1bCBsaSAgYS5uYXYtbGluazpob3ZlcjpiZWZvcmUsLm1lbnUgYS5uYXYtbGluay5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51IHVsIGxpIGE6aG92ZXIsLm1lbnUgdWwgbGk6aG92ZXI+YSwubWVudSBhLm5hdi1saW5rLmhvbWVyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2U2YWU0ODtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5tZW51IGxpOmhvdmVyPnVsIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxufVxyXG5cclxuLm1lbnUgdWwgdWwge1xyXG4gICAgbGVmdDogMTY5cHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAta2h0bWwtYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLWtodG1sLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XHJcbn1cclxuXHJcbi8qIC5tZW51IHVsIHVsOmFmdGVyIHtcclxuICAgIGxlZnQ6IC02cHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbn0gKi9cclxuXHJcbi8qIC5tZW51IGxpPnVsIHVsOmhvdmVyIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxufSAqL1xyXG5cclxuLnJlc3BvbnNpdmUtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcclxuICAgIC5tYWluV3JhcCB7XHJcbiAgICAgICAgd2lkdGg6IDc2OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHVsIHtcclxuICAgICAgICB0b3A6IDM3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUgbGkgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVzcG9uc2l2ZS1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBuYXYge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUgbGkgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSBsaSBhOmhvdmVyLC5tZW51IGxpOmhvdmVyPmEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM5Y2EzZGE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUgdWwge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSBsaTpob3Zlcj51bCB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUgdWwgdWwge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IGxpPnVsIHVsOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICB9XHJcbn1cclxuICovXHJcbi5zaXRlLXJpZ2h0LW1lbnV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjBweDtcclxufVxyXG4uc2l0ZS1yaWdodC1tZW51IC5jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zaXRlLXJpZ2h0LW1lbnUgLmNhcnQgLmljb24tY2FydHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxufVxyXG4gICNjYXJ0ICBwYXRoIHtcclxuICAgIFxyXG4gICAgZmlsbDogIzIyMjtcclxuICAgIGZpbGwtcnVsZTogZXZlbm9kZDtcclxuICAgIFxyXG4gIH1cclxuICAuc2l0ZS1yaWdodC1tZW51IC5jYXJ0IC5jb3VudGVyLWl0ZW1ze1xyXG4gICAgcGFkZGluZzogMXB4IDJweCAxcHggM3B4O1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogLThweDtcclxuXHJcbiAgfVxyXG4gIC5zaXRlLXJpZ2h0LW1lbnUgIC5oLWJ0bi1zZWFyY2ggaXtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5zaXRlLXJpZ2h0LW1lbnUgLmJ0bi1pY29uLXNpZGViYXItcG9wdXB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgaGVpZ2h0OjM0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtcmlnaHQtbWVudSAuYnRuLWljb24tc2lkZWJhci1wb3B1cCBzcGFuLC5zaXRlLXJpZ2h0LW1lbnUgc3Bhbi5idG4taWNvbi1zaWRlYmFyLXBvcHVwOmFmdGVyLFxyXG4gIC5zaXRlLXJpZ2h0LW1lbnUgc3Bhbi5idG4taWNvbi1zaWRlYmFyLXBvcHVwOmJlZm9yZXtcclxuICAgICAgYmFja2dyb3VuZDojMjIyOyAgICBcclxuICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGxlZnQ6IDA7ICAgXHJcbiAgICAgIFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgfVxyXG4gIC5zaXRlLXJpZ2h0LW1lbnUgc3Bhbi5idG4taWNvbi1zaWRlYmFyLXBvcHVwOmJlZm9yZXtcclxuICAgIHRvcDozNXB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG59XHJcbi5zaXRlLXJpZ2h0LW1lbnUgc3Bhbi5idG4taWNvbi1zaWRlYmFyLXBvcHVwOmFmdGVye1xyXG4gICAgd2lkdGg6MTJweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgXHJcbiAgICBcclxufVxyXG4gIC5zaXRlLXJpZ2h0LW1lbnUgLmJ0bi1pY29uLXNpZGViYXItcG9wdXAgc3BhbntcclxuICAgIHRvcDozMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-site\">\n  <div class=\"header-layout\">\n     <!-- Start topbar-panel -->\n    <div class=\"topbar-panel\" id=\"topbarpanel\">\n      <div class=\"container\">\n        <!-- Top Info contact -->\n        <ul class=\"top-info\">\n          <li class=\"li-address\">\n              <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n              13 Gehan St, Mansoura, Egypt\n          </li> \n          <li class=\"li-phone\">\n              <a href=\"tel:#\"> \n                    <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                    002 0104748481 \n              </a>\n          </li>\n          <li class=\"li-email\">\n              <a href=\"#\"> \n                    <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                    <!-- <i class=\"far fa-envelope\"></i> -->\n                    steps@gmail.com \n              </a>\n          </li>\n        </ul> \n        <!-- Top Social Media -->\n        <ul class=\"top-social\">\n          <li>Follow Us:</li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n          </li>\n          <li>\n              <a href=\"#\">\n                  <i class=\"fab fa-twitter\"></i>\n              </a>\n          </li>\n          <li>\n              <a href=\"#\">\n                  <i class=\"fab fa-google-plus-g\"></i>\n              </a>\n          </li>\n          <li>\n              <a href=\"#\">\n                  <i class=\"fab fa-linkedin-in\"></i>     \n              </a>\n          </li>\n\n        </ul>\n      </div>\n\n    </div>\n    <!-- End topbar-panel -->\n  </div>\n\n<div class=\"nav-site\">\n    <!-- Start  Nav in Desktop -->\n    <div class=\"container\">\n        <div class=\"navbar nav-flex\">\n            <div class=\"site-branding\">\n                <a class=\"logo-desktop\" routerLink=\"/home\">\n                    <img src=\"../../assets/images/logo.png\">\n                </a>\n            </div>\n\n            <!-- Menu -->\n            <nav class=\"main-navigation\">\n                   <ul class=\"menu\">\n                            <li><a class=\"nav-link active\" routerLink=\"/home\"> HOME</a>\n                                    <ul class=\"sub-menu\">\n                                            <li><a routerLink=\"/home\">Sub-Menu 1</a></li>\n                                            <li><a routerLink=\"/home\">Sub-Menu 2</a></li>\n                                            <li><a routerLink=\"/home\">Sub-Menu 3</a></li>\n                                            <li><a routerLink=\"/home\">Sub-Menu 4</a></li>\n                                            <li><a routerLink=\"/home\">Sub-Menu 5</a></li>   \n                                    </ul>\n                            </li>\n                            <li><a  class=\"nav-link top-none\" href=\"#\">ABOUT</a></li>\n                            <li><a class=\"nav-link top-none\" href=\"#\">PORTFOLIO</a>\n                            <ul class=\"sub-menu\">\n                            <li><a href=\"#\">Sub-Menu 1</a></li>\n                            <li><a href=\"#\">Sub-Menu 2</a></li>\n                                <li><a href=\"#\">Sub-Menu 3</a></li>\n                            </ul>\n                            </li>\n                            <!-- <li><a  class=\"nav-link top-none\" routerLink=\"/blog\"> BLOG</a></li> -->\n                            <li><a  class=\"nav-link top-none\" href=\"#\"> CATEGORIES</a>\n                            <ul class=\"sub-menu\">\n                            <li><a href=\"#\">Sub-Menu 1</a></li>\n                            <li><a href=\"#\">Sub-Menu 2</a></li>\n                                <li><a href=\"#\">Sub-Menu 3</a></li>\n                            </ul>\n                            </li>\n                            <li><a  class=\"nav-link top-none\" routerLink=\"/contact\"> CONTACT</a></li>\n                            <!-- <li><a  class=\"nav-link top-none\" href=\"#\"> SITEMAP</a></li> -->\n                            </ul>\n            </nav>\n            <!-- Right Menu -->\n        <div class=\"site-right-menu\">\n         \n                <!-- Start Cart -->\n                <div class=\"cart\">\n                    <span class=\"icon-cart\">\n                       \n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"16.094\" viewBox=\"0 0 17 16.094\" id=\"cart\">\n                                     <path class=\"cls-1\" d=\"M1181.58,43h-3.59v2h2.27l0.94,3.323L1183.16,55h10.11l1.73-9h-13Zm10.46,10h-7.68l-1.37-5h10Zm-1.05,3a2,2,0,0,0-2,2c0,1.1.91,1,2.01,1s1.99,0.1,1.99-1A2,2,0,0,0,1190.99,56Zm-6,0a2,2,0,0,0-2,2c0,1.1.91,1,2.01,1s1.99,0.1,1.99-1A2,2,0,0,0,1184.99,56Z\" transform=\"translate(-1178 -43)\"></path>\n                                </svg>\n                              \n\n                        <span class=\"counter-items\">0</span>\n\n                    </span>                    \n                </div>\n                <!-- End Cart -->\n                <!-- Search  Icon -->\n                <span class=\"menu-right-item h-btn-search\">\n                    <i class=\"fa fa-search\"></i>\n                </span>\n                   <!-- Login -->\n            <ng-template #anonymouseUser>\n                <span class=\"menu-right-item h-btn-search user\"  mat-raised-button (click)=\"openlogin()\">\n                    <i class=\"fa fa-user\"></i> Login\n                </span>\n            </ng-template>\n            <ul class=\"menu profile-menu\" *ngIf=\"user else anonymouseUser\">\n                <li><a class=\"nav-link\" routerLink=\"/home\"> <i class=\"fa fa-user\"></i> {{user.displayName}} </a>\n                        <ul class=\"sub-menu\">\n                                <li><a routerLink=\"/profile\">My-Profile</a></li>\n                                <li><a (click)=\"logout()\">LogOut</a></li>   \n                        </ul>\n                </li>\n            </ul>\n                <!-- SideBar -->\n                <span class=\"btn-icon-sidebar-popup\"  mat-raised-button (click)=\"openDialog()\">\n                    <span></span>\n                </span>\n                \n                \n            </div>\n                \n        </div>\n        \n    </div>\n    <!-- End Nav in Desktop -->\n    \n</div>  \n</header>\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);


// import { MatDialog } from '@angular/material';


// import { MatDialogModule } from '@angular/material';


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, login, afAuth) {
        var _this = this;
        this.dialog = dialog;
        this.login = login;
        this.afAuth = afAuth;
        //Rest To User
        this.afAuth.authState.subscribe(function (user) { return _this.user = user; });
    }
    HeaderComponent.prototype.openDialog = function () {
        // this.dialog.open(DialogComponent, {
        //   height: '100%',
        //   width: '600px',
        // });
        this.dialog.open(src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], { panelClass: 'dialog-style' });
    };
    HeaderComponent.prototype.openlogin = function () {
        // this.dialog.open(DialogComponent, {
        //   height: '100%',
        //   width: '600px',
        // });
        this.login.open(src_app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], { panelClass: 'login-style' });
    };
    HeaderComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".latest-posts{\r\n    padding-top:100px;\r\n}\r\n.latest-posts .img-post:before{\r\n\r\n    opacity: 1;\r\n\r\n}\r\n.latest-posts .img-post:before,.latest-posts .img-post:hover:before{\r\n    right: 0;\r\n    top: 0;\r\n}\r\n.latest-posts .img-post::after{\r\n    \r\n\r\n    opacity: 0.7;\r\n\r\n}\r\n.latest-posts .img-post:after,.latest-posts .img-post:hover:after{\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n.latest-posts .img-post:hover:after,.latest-posts .img-post:hover:before{\r\n    content: \"\";\r\n    background: #fff;\r\n    height: 0;\r\n    width: 0;\r\n    z-index: 1;\r\n    position: absolute;\r\n    transition-duration: 1.1s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsTUFBTTtBQUNWO0FBRUE7OztJQUdJLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUdsQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXRlc3QtcG9zdHN7XHJcbiAgICBwYWRkaW5nLXRvcDoxMDBweDtcclxufVxyXG4ubGF0ZXN0LXBvc3RzIC5pbWctcG9zdDpiZWZvcmV7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxuXHJcbn1cclxuLmxhdGVzdC1wb3N0cyAuaW1nLXBvc3Q6YmVmb3JlLC5sYXRlc3QtcG9zdHMgLmltZy1wb3N0OmhvdmVyOmJlZm9yZXtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LXBvc3RzIC5pbWctcG9zdDo6YWZ0ZXJ7XHJcbiAgICBcclxuXHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcblxyXG59XHJcbi5sYXRlc3QtcG9zdHMgLmltZy1wb3N0OmFmdGVyLC5sYXRlc3QtcG9zdHMgLmltZy1wb3N0OmhvdmVyOmFmdGVye1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4ubGF0ZXN0LXBvc3RzIC5pbWctcG9zdDpob3ZlcjphZnRlciwubGF0ZXN0LXBvc3RzIC5pbWctcG9zdDpob3ZlcjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4xcztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDEuMXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjFzO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Slider Home -->\n\n\n\n    <!-- Start WOWSlider.com BODY section -->\n<!-- Start WOWSlider.com BODY section --> <!-- add to the <body> of your page -->\n        <div id=\"wowslider-container1\">\n                <div class=\"ws_images\"><ul>\n                    <li><img src=\"../assets/data1/images/insta1.jpg\" alt=\"insta1\" title=\"insta1\" id=\"wows1_0\"/></li>\n                    <li><img src=\"../assets/data1/images/insta2.jpg\" alt=\"insta2\" title=\"insta2\" id=\"wows1_1\"/></li>\n                    <li><img src=\"../assets/data1/images/insta3.jpg\" alt=\"insta3\" title=\"insta3\" id=\"wows1_2\"/></li>\n                    <li><a><img src=\"../assets/data1/images/insta4.jpg\" alt=\"bootstrap slideshow\" title=\"insta4\" id=\"wows1_3\"/></a></li>\n                    <li><img src=\"../assets/data1/images/insta5.jpg\" alt=\"insta5\" title=\"insta5\" id=\"wows1_4\"/></li>\n                </ul></div>\n                <div class=\"ws_bullets\"><div>\n                    <a href=\"#\" title=\"insta1\"><span><img src=\"../assets/data1/tooltips/insta1.jpg\" alt=\"insta1\"/>1</span></a>\n                    <a href=\"#\" title=\"insta2\"><span><img src=\"../assets/data1/tooltips/insta2.jpg\" alt=\"insta2\"/>2</span></a>\n                    <a href=\"#\" title=\"insta3\"><span><img src=\"../assets/data1/tooltips/insta3.jpg\" alt=\"insta3\"/>3</span></a>\n                    <a href=\"#\" title=\"insta4\"><span><img src=\"../assets/data1/tooltips/insta4.jpg\" alt=\"insta4\"/>4</span></a>\n                    <a href=\"#\" title=\"insta5\"><span><img src=\"../assets/data1/tooltips/insta5.jpg\" alt=\"insta5\"/>5</span></a>\n                </div></div>\n                <div class=\"ws_script\" style=\"position:absolute;left:-99%\"><a href=\"http://wowslider.net\">css slider</a> by WOWSlider.com v8.8</div>\n                <div class=\"ws_shadow\"></div>\n                </div>\t\n   \n        <!-- End WOWSlider.com BODY section -->\n    \n\n\n<!-- End Slider Home -->\n<!-- Start Latest Articles -->\n<section class=\"latest-posts\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- 3articles -->\n            <div class=\"col-md-4 col-sm-6 col-xs-12\"  *ngFor= \"let branche of branches\">\n                <!-- Post -->\n                <div class=\"post\"  *ngIf=\" branche.id  < 4 \">\n                    <h5 class=\"sub-title-post\">{{ branche.title |  slice:0:13 }}</h5>\n                    <h3 class=\"title-post\">{{ branche.title |  slice:0:19 }}</h3>\n                    <div class=\"img-post\">\n                        <img src=\"../assets/images/post.jpg\">\n                    </div>\n                    <div class=\"desc-post\">\n                            {{ branche.body | slice:0:120 }}\n                    </div>\n                    <a class=\"btn-more\" href=\"#\">Read More</a>\n                    \n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Latest Articles -->\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get().subscribe(function (res) { _this.branches = res; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"loging()\" class=\"btn-login\"> Login </button>\n<!-- <button (click)=\"loginfb()\" class=\"btn-login\"> Login </button> -->\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth) {
        this.afAuth = afAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loging = function () {
        this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");






var material = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                material
            ],
            exports: [
                material
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: "\n    <p>\n      page-not-found works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.get = function () {
        return this.http.get(this.url);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Training\stepsangular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map