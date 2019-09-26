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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var src_app_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");






var routes = [
    { path: 'contact', component: src_app_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'blog', component: src_app_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"] },
    { path: 'home', component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
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
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]
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

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .expand{\r\n    display: none !important;\r\n} */\r\n.page-title{\r\n    background-color: rgba(27, 26, 26, 0.25);\r\n    background-image: url('page-title.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    \r\n}\r\n.page-title .bg-overlay::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: inherit;\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n.page-title-content{\r\n    padding-top: 155px;\r\n    padding-bottom: 140px;\r\n}\r\n.title-content{\r\n    text-align: center;\r\n    font-size: 70px;\r\n    line-height: 1.1;\r\n    font-weight: 700;\r\n    position: relative;\r\n    font-family: 'Montserrat', sans-serif;\r\n    margin-bottom: 18px;\r\n    color: #fff;\r\n    margin-left: -2px;\r\n    letter-spacing: -0.02em;\r\n}\r\n.branche-content{\r\n    padding:110px 15px;\r\n}\r\n.title-bran{\r\n    font-size: 22px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n.desc-branch{\r\n    font-size: 15px;\r\n    color:#9b9b9b;\r\n    line-height: 1.5;\r\n    margin-bottom: 25px;\r\n\r\n}\r\n.img-content{\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n    position: relative;\r\n    \r\n}\r\n.header-img{\r\n    position: absolute;\r\n    text-align: center;\r\n    top:100px;\r\n    \r\n}\r\n.img-contact{\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    align-items: stretch;\r\n}\r\n.parallax-window {\r\n\tmin-height: 400px;\r\n\tbackground: transparent;\r\n}\r\n.parallax-window {\r\n    min-height: 400px;\r\n    background: transparent;\r\n}\r\n/* section {\r\n  padding: 0px 0 0px;\r\n  background: #fff;\r\n} */\r\n.contact-sec{\r\n    background: #9b9b9b !important;\r\n}\r\n.img-contact{\r\n    widows: 100%;\r\n    height:100%;\r\n    background: url('contact-bg.jpg');\r\n    background-size: cover;\r\n    background-position: 50% 0;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    float: left;\r\n}\r\n.form-content{\r\n    float: right;\r\n    padding-left: 0px !important;;\r\n    padding-right: 0px !important;\r\n    background: #f9f9f9;\r\n\r\n}\r\n.header-contact{\r\n    padding:200px 0;\r\n    text-align: center;\r\n}\r\n.header-contact img{\r\n    padding-bottom: 25px;\r\n}\r\n.header-contact h3{\r\n    color: #fff;\r\n    font-size: 38px;\r\n    margin-bottom: 25px;\r\n    font-weight: 700;\r\n    letter-spacing: -0.01em;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.inner-form{\r\n    padding-top:19px;\r\n    padding-right: 90px !important;\r\n    padding-left: 70px !important;\r\n}\r\n.form-space{\r\n    height: 65px;\r\n}\r\n.header-form{\r\n    margin-bottom: 47px;\r\n    font-size: 38px;    \r\n    font-weight: 700;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.header-form h3{\r\n    font-size: 38px;    \r\n    font-weight: 700;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.get-in-touch {\r\n    max-width: 650px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n  }\r\n.get-in-touch .title {\r\n    text-align: center;\r\n    font-family: 'Montserrat', sans-serif;  \r\n     text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    font-size: 15px;\r\n    line-height: 48px;\r\n    padding-bottom: 48px;\r\n  }\r\n.contact-form .form-field {\r\n    position: relative;\r\n    margin: 22px 0;\r\n  }\r\n.contact-form .input-text {\r\n    display: block;\r\n    width: 100%;\r\n    height: 36px;\r\n    border-width: 0 0 2px 0;\r\n    border-color: #9b9b9b;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 26px;\r\n    font-weight: 400;\r\n    background: transparent !important;\r\n  }\r\n.textarea-text{\r\n      height: auto !important;\r\n      min-height: 120px !important;\r\n\r\n  }\r\n.contact-form .input-text:focus {\r\n    outline: none;\r\n  }\r\n.contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {\r\n    transform: translateY(-24px);\r\n  }\r\n.contact-form .label {\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 11px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 26px;\r\n    font-weight: 400;\r\n    color: #888;\r\n    cursor: text;\r\n    transition: transform .2s ease-in-out;\r\n  }\r\n.contact-form .submit-btn {\r\n    border:0;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    min-width: 170px;\r\n    background-color: #e6ae48;\r\n    color: #fff;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-family: 'Montserrat', sans-serif;\r\n    border-radius: 50px;\r\n    margin-top: 0;\r\n  }\r\n.contact-form .submit-btn:hover{\r\n    background: #333;\r\n    transition: all 300ms linear 0ms;\r\n  }\r\n.contact-form{\r\n    display: block\r\n}\r\n.input-text.js-input:focus{\r\n    border-color: #e6ae48;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUNJLHdDQUF3QztJQUN4Qyx1Q0FBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFJaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsdUJBQXVCO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6QztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUVBLDJCQUEyQjtFQUNyQztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFDQUFxQztLQUNwQyx5QkFBeUI7SUFDMUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0VBQ3BDO0FBQ0E7TUFDSSx1QkFBdUI7TUFDdkIsNEJBQTRCOztFQUVoQztBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7SUFFVSw0QkFBNEI7RUFDdEM7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUVaLHFDQUFxQztFQUV2QztBQUNBO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQU1yQyxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxnQkFBZ0I7SUFNaEIsZ0NBQWdDO0VBQ2xDO0FBQ0Y7SUFDSTtBQUNKO0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5leHBhbmR7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLnBhZ2UtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNiwgMjYsIDAuMjUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFnZS10aXRsZS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLnBhZ2UtdGl0bGUgLmJnLW92ZXJsYXk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbi5wYWdlLXRpdGxlLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTU1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTQwcHg7XHJcbn1cclxuLnRpdGxlLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG59XHJcblxyXG4uYnJhbmNoZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzoxMTBweCAxNXB4O1xyXG59XHJcbi50aXRsZS1icmFue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRlc2MtYnJhbmNoe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IzliOWI5YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxufVxyXG4uaW1nLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5oZWFkZXItaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgXHJcbn1cclxuLmltZy1jb250YWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG4ucGFyYWxsYXgtd2luZG93IHtcclxuXHRtaW4taGVpZ2h0OiA0MDBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ucGFyYWxsYXgtd2luZG93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLyogc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0gKi9cclxuLmNvbnRhY3Qtc2Vje1xyXG4gICAgYmFja2dyb3VuZDogIzliOWI5YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLWNvbnRhY3R7XHJcbiAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QtYmcuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmZvcm0tY29udGVudHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG5cclxufVxyXG4uaGVhZGVyLWNvbnRhY3R7XHJcbiAgICBwYWRkaW5nOjIwMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlci1jb250YWN0IGltZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcbi5oZWFkZXItY29udGFjdCBoM3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmlubmVyLWZvcm17XHJcbiAgICBwYWRkaW5nLXRvcDoxOXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tc3BhY2V7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLmhlYWRlci1mb3Jte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDdweDtcclxuICAgIGZvbnQtc2l6ZTogMzhweDsgICAgXHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVyLWZvcm0gaDN7XHJcbiAgICBmb250LXNpemU6IDM4cHg7ICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uZ2V0LWluLXRvdWNoIHtcclxuICAgIG1heC13aWR0aDogNjUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgLmdldC1pbi10b3VjaCAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgIFxyXG4gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZm9ybSAuZm9ybS1maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDIycHggMDtcclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSAuaW5wdXQtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XHJcbiAgICBib3JkZXItY29sb3I6ICM5YjliOWI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHRhcmVhLXRleHR7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSAuaW5wdXQtdGV4dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0OmZvY3VzICsgLmxhYmVsLCAuY29udGFjdC1mb3JtIC5pbnB1dC10ZXh0Lm5vdC1lbXB0eSArIC5sYWJlbCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XHJcbiAgfVxyXG4gIC5jb250YWN0LWZvcm0gLmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBib3R0b206IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuY29udGFjdC1mb3JtIC5zdWJtaXQtYnRuIHtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWU0ODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLWtodG1sLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLmNvbnRhY3QtZm9ybSAuc3VibWl0LWJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLWtodG1sLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgfVxyXG4uY29udGFjdC1mb3Jte1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLmlucHV0LXRleHQuanMtaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6ICNlNmFlNDg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"page-title\">\n  <div class=\"bg-overlay\">  \n  </div>\n  <div class=\"container\">\n    <div class=\"page-title-content\">\n      <h1 class=\"title-content\">Contact Form</h1>\n\n    </div>\n  </div>\n  <!-- <ul>\n      <li *ngFor= \"let branche of branches\"> {{ branche.title }}</li>\n    </ul> -->\n\n</section>\n<!-- Start Branches -->\n<section class=\"branches-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\"  *ngFor= \"let branche of branches\">\n        <div class=\"branche-content\"  *ngIf=\" branche.id  < 5 \">\n          <div class=\"branche-title\">\n            <h3 class=\"title-bran\">{{ branche.title |  slice:0:15 }}</h3>\n          </div>\n          <div class=\"desc-branch\">\n            {{ branche.body | slice:0:120 }}\n          </div>\n          <div class=\"list-info\">\n              <ul class=\"side-info\">\n                  <li class=\"li-address\">\n                      <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n                      13 Gehan St, Mansoura, Egypt\n                  </li> \n                  <li class=\"li-phone\">\n                      <a href=\"tel:#\"> \n                            <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                            002 0104748481 \n                      </a>\n                  </li>\n                  <li class=\"li-email\">\n                      <a href=\"#\"> \n                            <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                            <!-- <i class=\"far fa-envelope\"></i> -->\n                            steps@gmail.com \n                      </a>\n                  </li>\n                </ul>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n<!-- End Branches -->\n<!-- Start Contact Form -->\n<section class=\"contact-sec\">\n      <div class=\"\">\n            <div class=\"col-md-6 col-sm-12  img-content\">\n                <div class=\"img-contact\">\n                    <div class=\"header-contact\">\n                        <img src=\"../assets/images/icon_bg.png\">\n                        <h3>\n                          <span>Need Help?!!</span>\n                          <br>\n                          Don’t Hesitate To Ask\n                        </h3>\n                        <div class=\"lines\">\n                          <span class=\"h-line-1\"></span>\n                          <span class=\"h-line-2\"></span>\n                          \n\n                        </div>\n                      </div>\n\n                </div>\n                <!-- <div class=\"header-img\">\n                  <div class=\"img-header\">\n                    <img src=\"../assets/images/icon_bg.png\">\n                  </div>\n                </div> -->\n            </div>\n            <div class=\"col-md-6 col-sm-12 form-content\">\n              <div class=\"inner-form\">\n                <div class=\"form-space\"></div>\n                <div class=\"inner-form\">\n                    <div class=\"header-form\">\n                        <h3>Write To Us</h3>\n                    </div>\n                    <div class=\"form-rows\">\n                    \n                        <form class=\"contact-form\">\n                          <div class=\"row\">\n                                <div class=\"form-field col-xl-6 col-xs-12\">\n                                    <input id=\"name\" class=\"input-text js-input\" type=\"text\" required>\n                                    <label class=\"label\" for=\"name\">Name</label>\n                                </div>\n                                <div class=\"form-field col-xl-6 col-xs-12\">\n                                    <input id=\"email\" class=\"input-text js-input\" type=\"email\" required>\n                                    <label class=\"label\" for=\"email\">Email</label>\n                                </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"form-field col-xl-6 col-xs-12\">\n                                  <input id=\"name\" class=\"input-text js-input\" type=\"text\" required>\n                                  <label class=\"label\" for=\"name\">Phone</label>\n                              </div>\n                              <div class=\"form-field col-xl-6 col-xs-12\">\n                                  <input id=\"email\" class=\"input-text js-input\" type=\"text\" required>\n                                  <label class=\"label\" for=\"email\">Subject</label>\n                              </div>\n                        </div>\n                            <div class=\"row\">\n                                <div class=\"form-field col-12\">\n                                    <textarea id=\"message\" cols=\"40\" rows=\"4\" class=\"input-text js-input textarea-text\" type=\"text\" placeholder=\"Message\" required></textarea>\n                                 </div>\n                            </div>\n                            <div class=\"form-field col x-100 align-center\">\n                               <input class=\"submit-btn\" type=\"submit\" value=\"SEND MESSAGE\">\n                            </div>\n                         </form>\n\n                </div>\n\n</div>\n</div>\n            </div>\n      </div>\n</section>\n     \n    \n<!-- End Contact Form -->\n\n\n\n\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { Observable } from 'rxjs/Observable';
var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (res) { _this.branches = res; });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = "<div class=\"side-nav\">\n  <div class=\"grapper-box-sidebar\">\n    <!-- close btn -->\n    <a class=\"btn-close\" href=\"#\">\n      <i class=\"fa fa-times\"></i>\n    </a>\n    <div class=\"sidebar-content\">\n      <div class=\"logo-sidebar\">\n          <a class=\"logo-desktop\" href=\"#\">\n              <img src=\"../../assets/images/logo.png\">\n          </a>\n      </div>\n      <div class=\"content-text\">\n        <h2 class=\"widget-title\">\n            We are Steps, our strategists will help you set an objective and choose your tools, developing a plan for your business. \n        </h2>\n        <ul class=\"side-info\">\n            <li class=\"li-address\">\n                <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n                13 Gehan St, Mansoura, Egypt\n            </li> \n            <li class=\"li-phone\">\n                <a href=\"tel:#\"> \n                      <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                      002 0104748481 \n                </a>\n            </li>\n            <li class=\"li-email\">\n                <a href=\"#\"> \n                      <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                      <!-- <i class=\"far fa-envelope\"></i> -->\n                      steps@gmail.com \n                </a>\n            </li>\n          </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\n</footer>\n"

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

module.exports = ".mat-toolbar-row,.mat-toolbar-single-row{\r\n    height: auto !important;\r\n    color:transparent !important;\r\n    background: #fff;\r\n\r\n}\r\n\r\n.header-site .nav-site .nav-flex{\r\n    display: flex;\r\n;    \r\n}\r\n\r\n.header-site .nav-site .site-branding{\r\n    float: left;\r\n}\r\n\r\n/********** Nav Bar************/\r\n\r\n.navbar{\r\n    padding:0 !important;\r\n}\r\n\r\nnav.main-navigation {\r\n    display: block;\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu {\r\n    display: block;\r\n    float: right;\r\n    padding-left: 0px;\r\n}\r\n\r\n.menu li {\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 100;\r\n    font-family: 'Montserrat', sans-serif;\r\n    transition: all 500ms linear 0ms;\r\n}\r\n\r\n.menu li{\r\n    margin:0 15px;\r\n}\r\n\r\n.menu li a.nav-link {\r\n    padding:0 !important;\r\n    font-weight: 700;\r\n    display: block;\r\n    transition: all 0.2s ease-in-out 0s;\r\n    font-size: 13px;\r\n    color: #333;\r\n    line-height: 80px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu li a:hover,.menu li:hover>a {\r\n    color: #e6ae48;\r\n    /* background: #9ca3da; */\r\n}\r\n\r\n.menu ul {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-width: 235px;\r\n    position: absolute;\r\n    left: 0px;\r\n    background: #fff;\r\n    z-index: 99;\r\n    transform: translate(0,20px);\r\n    transition: all 0.2s ease-out;\r\n    -ms-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    -o-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    transition: all 300ms linear 0ms;\r\n}\r\n\r\n.menu .sub-menu{\r\n    padding-top:23px;\r\n    padding-bottom:23px;\r\n    \r\n}\r\n\r\n.menu .sub-menu li{\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    line-height: 24px;\r\n}\r\n\r\n.menu .sub-menu li a{\r\n    color: #666;\r\n    border-bottom: 1px solid #eee;\r\n    padding: 10px 0;\r\n    font-size: 13px;\r\n    transition: all 300ms linear 0ms !important;\r\n}\r\n\r\n.menu .sub-menu li:last-child a{\r\n    border-bottom: 0px solid #eee;\r\n    \r\n}\r\n\r\n/* .menu ul:after {\r\n    bottom: 100%;\r\n    left: 20%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-bottom-color: #fff;\r\n    border-width: 6px;\r\n    margin-left: -6px;\r\n} */\r\n\r\n.menu ul li {\r\n    display: block;\r\n    float: none;\r\n    background: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.menu ul li a {\r\n    font-size: 13px;\r\n    display: block;\r\n    color: #797979;\r\n}\r\n\r\n.menu a.nav-link{\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu a.nav-link:before,\r\n.menu ul li a:before,.menu ul li>a:before,.menu a.nav-link:before{\r\n    background-color: #e6ae48;\r\n    height: 2px;\r\n    bottom: 3px !important;\r\n    transition: all 300ms linear 0ms !important;\r\n    content: \"\";\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    height: 2px;\r\n    position: absolute;\r\n    transition: opacity 0.3s ease 0s, bottom 0.3s ease 0s;\r\n    opacity: 0;\r\n    /* background-color: #fff; */\r\n    \r\n}\r\n\r\n.menu ul li  a.nav-link:hover:before,.menu a.nav-link.active::before {\r\n    opacity: 1 !important;\r\n}\r\n\r\n.menu ul li a:hover,.menu ul li:hover>a,.menu a.nav-link.homer.active {\r\n    color: #e6ae48;\r\n    transition: all 300ms linear 0ms !important;\r\n\r\n}\r\n\r\n.menu li:hover>ul {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: translate(0,0);\r\n}\r\n\r\n.menu ul ul {\r\n    left: 169px;\r\n    top: 0px;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transform: translate(20px,20px);\r\n    transition: all 0.2s ease-out;\r\n    -ms-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    -o-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\r\n    transition: all 300ms linear 0ms;\r\n    clip: rect(1px, 1px, 1px, 1px);\r\n}\r\n\r\n/* .menu ul ul:after {\r\n    left: -6px;\r\n    top: 10%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-color: rgba(255, 255, 255, 0);\r\n    border-right-color: #fff;\r\n    border-width: 6px;\r\n    margin-top: -6px;\r\n} */\r\n\r\n/* .menu li>ul ul:hover {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: translate(0,0);\r\n} */\r\n\r\n.responsive-menu {\r\n    display: none;\r\n    color: #333;\r\n    text-transform: uppercase;\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 979px) {\r\n    .mainWrap {\r\n        width: 768px;\r\n    }\r\n\r\n    .menu ul {\r\n        top: 37px;\r\n    }\r\n\r\n    .menu li a {\r\n        font-size: 12px;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* @media (max-width: 767px) {\r\n\r\n\r\n    .menu {\r\n        display: none;\r\n    }\r\n\r\n    .responsive-menu {\r\n        display: block;\r\n    }\r\n\r\n    nav {\r\n        margin: 0;\r\n        background: none;\r\n    }\r\n\r\n    .menu li {\r\n        display: block;\r\n        margin: 0;\r\n    }\r\n\r\n    .menu li a {\r\n        background: #fff;\r\n        color: #797979;\r\n    }\r\n\r\n    .menu li a:hover,.menu li:hover>a {\r\n        background: #9ca3da;\r\n        color: #fff;\r\n    }\r\n\r\n    .menu ul {\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        transform: initial;\r\n    }\r\n\r\n    .menu li:hover>ul {\r\n        visibility: visible;\r\n        opacity: 1;\r\n        position: relative;\r\n        transform: initial;\r\n    }\r\n\r\n    .menu ul ul {\r\n        left: 0;\r\n        transform: initial;\r\n    }\r\n\r\n    .menu li>ul ul:hover {\r\n        transform: initial;\r\n    }\r\n}\r\n */\r\n\r\n.site-right-menu{\r\n    float: right;\r\n    justify-self: flex-end;\r\n    margin-right:0px;\r\n}\r\n\r\n.site-right-menu .cart{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    margin-right: 10px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.site-right-menu .cart .icon-cart{\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    font-weight: 400;\r\n    line-height: 80px;\r\n}\r\n\r\n#cart  path {\r\n    \r\n    fill: #222;\r\n    fill-rule: evenodd;\r\n    \r\n  }\r\n\r\n.site-right-menu .cart .counter-items{\r\n    padding: 1px 2px 1px 3px;\r\n    color: #222;\r\n    position: relative;\r\n    font-weight: bold;\r\n    left: 0px;\r\n    top: -8px;\r\n\r\n  }\r\n\r\n.site-right-menu  .h-btn-search i{\r\n      font-size: 13px;\r\n      cursor: pointer;\r\n      font-weight: 700;\r\n      color: #333;\r\n      \r\n  }\r\n\r\n.site-right-menu .btn-icon-sidebar-popup{\r\n      display: inline-block;\r\n      position: relative;\r\n      color: #222;\r\n      height:34px;\r\n      line-height: 33px;\r\n      font-size: 26px;\r\n      cursor: pointer;\r\n      width: 16px;\r\n      margin-left: 17px;\r\n      text-align: left;\r\n  }\r\n\r\n.site-right-menu .btn-icon-sidebar-popup span,.site-right-menu span.btn-icon-sidebar-popup:after,\r\n  .site-right-menu span.btn-icon-sidebar-popup:before{\r\n      background:#222;    \r\n      content:\"\";\r\n      display: block;\r\n      right: 0;\r\n      left: 0;   \r\n      \r\n      position: absolute;\r\n      transition: all 300ms linear 0ms;\r\n  }\r\n\r\n.site-right-menu span.btn-icon-sidebar-popup:before{\r\n    top:35px;\r\n    width: 16px;\r\n    height: 2px;\r\n    font-weight: 700; \r\n}\r\n\r\n.site-right-menu span.btn-icon-sidebar-popup:after{\r\n    width:12px;\r\n    height: 2px;\r\n    top: 24px;\r\n    font-weight: 700; \r\n    \r\n}\r\n\r\n.site-right-menu .btn-icon-sidebar-popup span{\r\n    top:30px;\r\n    height: 2px;\r\n    width: 14px;\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsK0JBQStCOztBQUMvQjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGNBQWM7SUFJZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQ0FBcUM7SUFNckMsZ0NBQWdDO0FBQ3BDOztBQUlBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUk3QiwrQ0FBK0M7SUFDL0MsOENBQThDO0lBQzlDLDJDQUEyQztJQU0zQyxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZUFBZTtJQU1mLDJDQUEyQztBQUMvQzs7QUFDQTtJQUNJLDZCQUE2Qjs7QUFFakM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFNdEIsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQU1sQixxREFBcUQ7SUFDckQsVUFBVTtJQUNWLDRCQUE0Qjs7QUFFaEM7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBTWQsMkNBQTJDOztBQUUvQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFJN0IsK0NBQStDO0lBQy9DLDhDQUE4QztJQUM5QywyQ0FBMkM7SUFNM0MsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtBQUNsQzs7QUFFQTs7Ozs7Ozs7Ozs7OztHQWFHOztBQUVIOzs7O0dBSUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFNQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7OztBQUdKOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdERTs7QUFDRjtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0U7O0lBRUUsVUFBVTtJQUNWLGtCQUFrQjs7RUFFcEI7O0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFNBQVM7O0VBRVg7O0FBQ0E7TUFDSSxlQUFlO01BQ2YsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXOztFQUVmOztBQUVBO01BQ0kscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsZ0JBQWdCO0VBQ3BCOztBQUVBOztNQUVJLGVBQWU7TUFDZixVQUFVO01BQ1YsY0FBYztNQUNkLFFBQVE7TUFDUixPQUFPOztNQUVQLGtCQUFrQjtNQU1sQixnQ0FBZ0M7RUFDcEM7O0FBQ0E7SUFDRSxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7O0FBRXBCOztBQUNFO0lBQ0UsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXOztFQUViIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyLXJvdywubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyLXNpdGUgLm5hdi1zaXRlIC5uYXYtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbjsgICAgXHJcbn1cclxuLmhlYWRlci1zaXRlIC5uYXYtc2l0ZSAuc2l0ZS1icmFuZGluZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKiogTmF2IEJhcioqKioqKioqKioqKi9cclxuLm5hdmJhcntcclxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG59XHJcbm5hdi5tYWluLW5hdmlnYXRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLm1lbnUgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDUwMG1zIGxpbmVhciAwbXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyIDBtcztcclxufVxyXG5cclxuXHJcblxyXG4ubWVudSBsaXtcclxuICAgIG1hcmdpbjowIDE1cHg7XHJcbn1cclxuLm1lbnUgbGkgYS5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5tZW51IGxpIGE6aG92ZXIsLm1lbnUgbGk6aG92ZXI+YSB7XHJcbiAgICBjb2xvcjogI2U2YWU0ODtcclxuICAgIC8qIGJhY2tncm91bmQ6ICM5Y2EzZGE7ICovXHJcbn1cclxuXHJcbi5tZW51IHVsIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAyMzVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1raHRtbC1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxufVxyXG4ubWVudSAuc3ViLW1lbnV7XHJcbiAgICBwYWRkaW5nLXRvcDoyM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MjNweDtcclxuICAgIFxyXG59XHJcbi5tZW51IC5zdWItbWVudSBsaXtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4ubWVudSAuc3ViLW1lbnUgbGkgYXtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnUgLnN1Yi1tZW51IGxpOmxhc3QtY2hpbGQgYXtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZWVlO1xyXG4gICAgXHJcbn1cclxuXHJcbi8qIC5tZW51IHVsOmFmdGVyIHtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxufSAqL1xyXG5cclxuLm1lbnUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWVudSB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbn1cclxuLm1lbnUgYS5uYXYtbGlua3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLm1lbnUgYS5uYXYtbGluazpiZWZvcmUsXHJcbi5tZW51IHVsIGxpIGE6YmVmb3JlLC5tZW51IHVsIGxpPmE6YmVmb3JlLC5tZW51IGEubmF2LWxpbms6YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YWU0ODtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYm90dG9tOiAzcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGJvdHRvbSAwLjNzIGVhc2UgMHM7XHJcbiAgICAta2h0bWwtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGJvdHRvbSAwLjNzIGVhc2UgMHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBib3R0b20gMC4zcyBlYXNlIDBzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBib3R0b20gMC4zcyBlYXNlIDBzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGJvdHRvbSAwLjNzIGVhc2UgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgYm90dG9tIDAuM3MgZWFzZSAwcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgXHJcbn1cclxuLm1lbnUgdWwgbGkgIGEubmF2LWxpbms6aG92ZXI6YmVmb3JlLC5tZW51IGEubmF2LWxpbmsuYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudSB1bCBsaSBhOmhvdmVyLC5tZW51IHVsIGxpOmhvdmVyPmEsLm1lbnUgYS5uYXYtbGluay5ob21lci5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNlNmFlNDg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcbiAgICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcyAhaW1wb3J0YW50O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXMgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWVudSBsaTpob3Zlcj51bCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XHJcbn1cclxuXHJcbi5tZW51IHVsIHVsIHtcclxuICAgIGxlZnQ6IDE2OXB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLWtodG1sLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG59XHJcblxyXG4vKiAubWVudSB1bCB1bDphZnRlciB7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG59ICovXHJcblxyXG4vKiAubWVudSBsaT51bCB1bDpob3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XHJcbn0gKi9cclxuXHJcbi5yZXNwb25zaXZlLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XHJcbiAgICAubWFpbldyYXAge1xyXG4gICAgICAgIHdpZHRoOiA3NjhweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSB1bCB7XHJcbiAgICAgICAgdG9wOiAzN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IGxpIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcblxyXG4gICAgLm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3BvbnNpdmUtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IGxpIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUgbGkgYTpob3ZlciwubWVudSBsaTpob3Zlcj5hIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOWNhM2RhO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHVsIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUgbGk6aG92ZXI+dWwge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHVsIHVsIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAubWVudSBsaT51bCB1bDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgfVxyXG59XHJcbiAqL1xyXG4uc2l0ZS1yaWdodC1tZW51e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbn1cclxuLnNpdGUtcmlnaHQtbWVudSAuY2FydHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2l0ZS1yaWdodC1tZW51IC5jYXJ0IC5pY29uLWNhcnR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuICAjY2FydCAgcGF0aCB7XHJcbiAgICBcclxuICAgIGZpbGw6ICMyMjI7XHJcbiAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7XHJcbiAgICBcclxuICB9XHJcbiAgLnNpdGUtcmlnaHQtbWVudSAuY2FydCAuY291bnRlci1pdGVtc3tcclxuICAgIHBhZGRpbmc6IDFweCAycHggMXB4IDNweDtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IC04cHg7XHJcblxyXG4gIH1cclxuICAuc2l0ZS1yaWdodC1tZW51ICAuaC1idG4tc2VhcmNoIGl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuc2l0ZS1yaWdodC1tZW51IC5idG4taWNvbi1zaWRlYmFyLXBvcHVwe1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgIGhlaWdodDozNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5zaXRlLXJpZ2h0LW1lbnUgLmJ0bi1pY29uLXNpZGViYXItcG9wdXAgc3Bhbiwuc2l0ZS1yaWdodC1tZW51IHNwYW4uYnRuLWljb24tc2lkZWJhci1wb3B1cDphZnRlcixcclxuICAuc2l0ZS1yaWdodC1tZW51IHNwYW4uYnRuLWljb24tc2lkZWJhci1wb3B1cDpiZWZvcmV7XHJcbiAgICAgIGJhY2tncm91bmQ6IzIyMjsgICAgXHJcbiAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBsZWZ0OiAwOyAgIFxyXG4gICAgICBcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gICAgICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyIDBtcztcclxuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhciAwbXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXIgMG1zO1xyXG4gIH1cclxuICAuc2l0ZS1yaWdodC1tZW51IHNwYW4uYnRuLWljb24tc2lkZWJhci1wb3B1cDpiZWZvcmV7XHJcbiAgICB0b3A6MzVweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwOyBcclxufVxyXG4uc2l0ZS1yaWdodC1tZW51IHNwYW4uYnRuLWljb24tc2lkZWJhci1wb3B1cDphZnRlcntcclxuICAgIHdpZHRoOjEycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHRvcDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IFxyXG4gICAgXHJcbn1cclxuICAuc2l0ZS1yaWdodC1tZW51IC5idG4taWNvbi1zaWRlYmFyLXBvcHVwIHNwYW57XHJcbiAgICB0b3A6MzBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-site\">\n  <div class=\"header-layout\">\n     <!-- Start topbar-panel -->\n    <div class=\"topbar-panel\" id=\"topbarpanel\">\n      <div class=\"container\">\n        <!-- Top Info contact -->\n        <ul class=\"top-info\">\n          <li class=\"li-address\">\n              <i class=\"icon-map-pin\" aria-hidden=\"true\"></i>\n              13 Gehan St, Mansoura, Egypt\n          </li> \n          <li class=\"li-phone\">\n              <a href=\"tel:#\"> \n                    <i class=\"icon-phone\" aria-hidden=\"true\"></i>\n                    002 0104748481 \n              </a>\n          </li>\n          <li class=\"li-email\">\n              <a href=\"#\"> \n                    <i class=\"icon-paperclip\" aria-hidden=\"true\"></i>\n                    <!-- <i class=\"far fa-envelope\"></i> -->\n                    steps@gmail.com \n              </a>\n          </li>\n        </ul> \n        <!-- Top Social Media -->\n        <ul class=\"top-social\">\n          <li>Follow Us:</li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n          </li>\n          <li>\n              <a href=\"#\">\n                  <i class=\"fab fa-twitter\"></i>\n              </a>\n          </li>\n          <li>\n              <a href=\"#\">\n                  <i class=\"fab fa-google-plus-g\"></i>\n              </a>\n          </li>\n          <li>\n              <a href=\"#\">\n                  <i class=\"fab fa-linkedin-in\"></i>     \n              </a>\n          </li>\n\n        </ul>\n      </div>\n\n    </div>\n    <!-- End topbar-panel -->\n  </div>\n\n<div class=\"nav-site\">\n    <!-- Start  Nav in Desktop -->\n    <div class=\"container\">\n        <div class=\"navbar nav-flex\">\n            <div class=\"site-branding\">\n                <a class=\"logo-desktop\" href=\"#\">\n                    <img src=\"../../assets/images/logo.png\">\n                </a>\n            </div>\n\n            <!-- Menu -->\n            <nav class=\"main-navigation\">\n                   <ul class=\"menu\">\n                            <li><a class=\"nav-link active\" routerLink=\"/home\"> HOME</a>\n                                    <ul class=\"sub-menu\">\n                                            <li><a href=\"#\">Sub-Menu 1</a></li>\n                                            <li><a href=\"#\">Sub-Menu 2</a></li>\n                                            <li><a href=\"#\">Sub-Menu 3</a></li>\n                                            <li><a href=\"#\">Sub-Menu 4</a></li>\n                                            <li><a href=\"#\">Sub-Menu 5</a></li>   \n                                    </ul>\n                            </li>\n                            <li><a  class=\"nav-link top-none\" href=\"#\">ABOUT</a></li>\n                            <li><a class=\"nav-link top-none\" href=\"#\">PORTFOLIO</a>\n                            <ul class=\"sub-menu\">\n                            <li><a href=\"#\">Sub-Menu 1</a></li>\n                            <li><a href=\"#\">Sub-Menu 2</a></li>\n                                <li><a href=\"#\">Sub-Menu 3</a></li>\n                            </ul>\n                            </li>\n                            <li><a  class=\"nav-link top-none\" routerLink=\"/blog\"> BLOG</a></li>\n                            <li><a  class=\"nav-link top-none\" href=\"#\"> CATEGORIES</a>\n                            <ul class=\"sub-menu\">\n                            <li><a href=\"#\">Sub-Menu 1</a></li>\n                            <li><a href=\"#\">Sub-Menu 2</a></li>\n                                <li><a href=\"#\">Sub-Menu 3</a></li>\n                            </ul>\n                            </li>\n                            <li><a  class=\"nav-link top-none\" routerLink=\"/contact\"> CONTACT</a></li>\n                            <li><a  class=\"nav-link top-none\" href=\"#\"> SITEMAP</a></li>\n                            </ul>\n            </nav>\n            <!-- Right Menu -->\n        <div class=\"site-right-menu\">\n                <!-- Start Cart -->\n                <div class=\"cart\">\n                    <span class=\"icon-cart\">\n                       \n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"16.094\" viewBox=\"0 0 17 16.094\" id=\"cart\">\n                                     <path class=\"cls-1\" d=\"M1181.58,43h-3.59v2h2.27l0.94,3.323L1183.16,55h10.11l1.73-9h-13Zm10.46,10h-7.68l-1.37-5h10Zm-1.05,3a2,2,0,0,0-2,2c0,1.1.91,1,2.01,1s1.99,0.1,1.99-1A2,2,0,0,0,1190.99,56Zm-6,0a2,2,0,0,0-2,2c0,1.1.91,1,2.01,1s1.99,0.1,1.99-1A2,2,0,0,0,1184.99,56Z\" transform=\"translate(-1178 -43)\"></path>\n                                </svg>\n                              \n\n                        <span class=\"counter-items\">0</span>\n\n                    </span>                    \n                </div>\n                <!-- End Cart -->\n                <!-- Search  Icon -->\n                <span class=\"menu-right-item h-btn-search\">\n                    <i class=\"fa fa-search\"></i>\n                </span>\n                <!-- SideBar -->\n                <span class=\"btn-icon-sidebar-popup\"  mat-raised-button (click)=\"openDialog()\">\n                    <span></span>\n                </span>\n                \n                \n            </div>\n                \n        </div>\n        \n    </div>\n    <!-- End Nav in Desktop -->\n    \n</div>  \n</header>\n\n\n\n"

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");


// import { MatDialog } from '@angular/material';

// import { MatDialogModule } from '@angular/material';

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.openDialog = function () {
        // this.dialog.open(DialogComponent, {
        //   height: '100%',
        //   width: '600px',
        // });
        this.dialog.open(src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], { panelClass: 'dialog-style' });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Slider Home -->\n<section id=\"content\" class=\"\">\n\n</section>\n<!-- End Slider Home -->\n\n"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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