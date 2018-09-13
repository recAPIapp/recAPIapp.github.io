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
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/popular/popular.component */ "./src/app/components/popular/popular.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pantry/pantry.component */ "./src/app/components/pantry/pantry.component.ts");
/* harmony import */ var _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/feature-results/feature-results.component */ "./src/app/components/feature-results/feature-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'popular', component: _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_5__["PopularComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'userInfo', component: _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"] },
    { path: 'categories', component: _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_9__["FoodCategoryComponent"] },
    { path: 'pantry', component: _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_10__["PantryComponent"] },
    { path: 'feature', component: _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_11__["FeatureResultsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-menu></app-menu>\r\n<h1 class=\"site-heading text-center text-white d-none d-lg-block\">\r\n        <span class=\"site-heading-upper text-primary mb-3\">A Free Recipe Searching Application</span>\r\n        <span class=\"site-heading-lower\">RecAPI</span>\r\n      </h1>\r\n<!-- <router-outlet class=\"background-image\"></router-outlet> -->\r\n<div >\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.title = 'RecipeApp';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/popular/popular.component */ "./src/app/components/popular/popular.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
/* harmony import */ var _components_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/results-modal/results-modal.component */ "./src/app/components/results-modal/results-modal.component.ts");
/* harmony import */ var _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login-register/login-register.component */ "./src/app/components/login-register/login-register.component.ts");
/* harmony import */ var _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pantry/pantry.component */ "./src/app/components/pantry/pantry.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/feature-results/feature-results.component */ "./src/app/components/feature-results/feature-results.component.ts");
/* harmony import */ var _components_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/feature-instructions/feature-instructions.component */ "./src/app/components/feature-instructions/feature-instructions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { ScrollSpyModule } from 'ngx-scrollspy';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _components_popular_popular_component__WEBPACK_IMPORTED_MODULE_8__["PopularComponent"],
                _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__["UserInfoComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_14__["SearchResultsComponent"],
                _components_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_15__["ResultsModalComponent"],
                _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_16__["LoginRegisterComponent"],
                _components_food_category_food_category_component__WEBPACK_IMPORTED_MODULE_17__["FoodCategoryComponent"],
                _components_pantry_pantry_component__WEBPACK_IMPORTED_MODULE_18__["PantryComponent"],
                _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_20__["FeatureResultsComponent"],
                _components_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_21__["FeatureInstructionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"]
                // ScrollSpyModule.forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_14__["SearchResultsComponent"],
                _components_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_15__["ResultsModalComponent"],
                _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_16__["LoginRegisterComponent"],
                _components_feature_results_feature_results_component__WEBPACK_IMPORTED_MODULE_20__["FeatureResultsComponent"],
                _components_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_21__["FeatureInstructionsComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section about-heading\">\r\n  <div class=\"container\">\r\n      <img class=\"img-fluid rounded about-heading-img mb-3 mb-lg-0\" src=\"../../../assets/images/lunch.jpg\" alt=\"\">\r\n      <div class=\"about-heading-content\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-9 col-lg-10 mx-auto\">\r\n            <div class=\"bg-faded rounded p-5\">\r\n              <h2 class=\"section-heading mb-4\">\r\n                <span class=\"section-heading-upper\">Recipes For The Unimaginative</span>\r\n                <span class=\"section-heading-lower\">About Our Application</span>\r\n              </h2>\r\n              <p>\r\n                We are RecAPI and our app will allow users to login and keep track of their virtual cabinet representing their ingredients.\r\n                These ingredients will be used to determine what recipes can be created. It will allow users to search for recipes\r\n                with certain ingredients, create their own recipes, and will also make recommendations based on the user's pantry.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n<section class=\"page-section\">\r\n    <div class=\"container\">\r\n      <div class=\"product-item\">\r\n        <div class=\"product-item-title d-flex\">\r\n            <!-- <div class=\"about-heading-content\"> -->\r\n          <div class=\"bg-faded p-5 d-flex ml-auto rounded\">\r\n            <h2 class=\"section-heading mb-0\">\r\n              <span class=\"section-heading-upper\">Keep Track of your Pantry</span>\r\n              <span class=\"section-heading-lower\">Your Ingredients</span>\r\n            </h2>\r\n          </div>\r\n          \r\n        </div>\r\n        <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/burgers.jpg\" alt=\"\">\r\n        <div class=\"product-item-description d-flex mr-auto\">\r\n          <div class=\"bg-faded p-5 rounded\">\r\n            <p class=\"mb-0\">\r\n              Have a lot of things in your kitchen you don't know what to do with?\r\n              This application is designed with you in mind. Get inspired with ResApi\r\n               (pronounced like recipe)! No more wondering what to cook or thinking \r\n               you don't have anything to make. Let ResApi do the work for you by\r\n               suggesting recipes tailored to you.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"page-section\">\r\n    <div class=\"container\">\r\n      <div class=\"product-item\">\r\n        <div class=\"product-item-title d-flex\">\r\n          <div class=\"bg-faded p-5 d-flex ml-auto rounded\">\r\n            <h2 class=\"section-heading mb-0\">\r\n              <span class=\"section-heading-upper\">Save Your Ingredients &amp; Recipes</span>\r\n              <span class=\"section-heading-lower\">Be a Member of the Family</span>\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/rice.jpg\" alt=\"\">\r\n        <div class=\"product-item-description d-flex mr-auto\">\r\n          <div class=\"bg-faded p-5 rounded\">\r\n            <p class=\"mb-0\">\r\n              Not only can you take inventory of what is in your own kitchen, but you\r\n              can keep track of it by creating an account and saving your list of \r\n              ingredients to come back to each time you log in. Keep track of your\r\n              food, save recipes you like, and stay excited about cooking!\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"page-section\">\r\n      <div class=\"container\">\r\n        <div class=\"product-item\">\r\n          <div class=\"product-item-title d-flex\">\r\n            <div class=\"bg-faded p-5 d-flex mr-auto rounded\">\r\n              <h2 class=\"section-heading mb-0\">\r\n                <span class=\"section-heading-upper\">Delicious Recipes, Good Eats</span>\r\n                <span class=\"section-heading-lower\">Kitchen &amp; Pantry</span>\r\n              </h2>\r\n            </div>\r\n          </div>\r\n          <img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\"./../../../assets/images/dark.jpg\" alt=\"\">\r\n          <div class=\"product-item-description d-flex ml-auto\">\r\n            <div class=\"bg-faded p-5 rounded\">\r\n              <p class=\"mb-0\">\r\n                Use this application to keep track of your ingredients. Based on what\r\n                you add to your virtual \"pantry,\" you will get a list of suggested recipes\r\n                to prepare. Use the \"Add Ingredients\" tab to start putting together your\r\n                own pantry.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/feature-instructions/feature-instructions.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/feature-instructions/feature-instructions.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/feature-instructions/feature-instructions.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/feature-instructions/feature-instructions.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h3 class=\"modal-title\">{{ instructions.title}}</h3>\r\n\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h4>Instructions:</h4>\r\n    <ol class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\" *ngFor=\"let s of steps\">{{ s.step }}</li>\r\n    </ol>\r\n    <br>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button (click)=\"close()\" class=\"btn btn-outline-danger btn-lg\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/feature-instructions/feature-instructions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/feature-instructions/feature-instructions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FeatureInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureInstructionsComponent", function() { return FeatureInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeatureInstructionsComponent = /** @class */ (function () {
    function FeatureInstructionsComponent(modalService, route, router, searchAlgorithmService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.searchAlgorithmService = searchAlgorithmService;
    }
    FeatureInstructionsComponent.prototype.ngOnInit = function () {
    };
    FeatureInstructionsComponent.prototype.open = function (results) {
        var _this = this;
        console.log(results);
        this.instructions = results;
        this.modalService.open(this.content);
        this.searchAlgorithmService.searchRecipeInstructionById(results.id).subscribe(function (data) {
            console.log(data);
            _this.steps = data[0].steps;
            // results.steps = data;
            // console.log(data);
        });
        // this.instructions.steps = this.steps;
    };
    FeatureInstructionsComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])
    ], FeatureInstructionsComponent.prototype, "content", void 0);
    FeatureInstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-instructions',
            template: __webpack_require__(/*! ./feature-instructions.component.html */ "./src/app/components/feature-instructions/feature-instructions.component.html"),
            styles: [__webpack_require__(/*! ./feature-instructions.component.css */ "./src/app/components/feature-instructions/feature-instructions.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_3__["SearchAlgorithmService"]])
    ], FeatureInstructionsComponent);
    return FeatureInstructionsComponent;
}());



/***/ }),

/***/ "./src/app/components/feature-results/feature-results.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/feature-results/feature-results.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    min-height: 450px;\r\n    margin-top: 2rem!important;\r\n}"

/***/ }),

/***/ "./src/app/components/feature-results/feature-results.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/feature-results/feature-results.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container col-10\">\r\n<div class=\"row card-group\">\r\n  <div class=\"col-3 mb-1 mt-1\" (click)=\"open(r)\" *ngFor=\"let r of this.searchAlgorithmService.resultSet\">\r\n  <div class=\"card\">\r\n    <img class=\"card-img-top\" src=\"{{r.image}}\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{ r.title }}</h5>\r\n      <p class=\"card-text\">Likes: {{ r.likes }}</p>\r\n      <p class=\"card-text\"> Used Ingredients: {{ r.usedIngredientCount }}</p>\r\n      <p class=\"card-text\">Missed Ingredients: {{ r.missedIngredientCount }}</p>\r\n      <button class=\"btn btn-primary\">Details</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n<app-feature-instructions></app-feature-instructions>"

/***/ }),

/***/ "./src/app/components/feature-results/feature-results.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/feature-results/feature-results.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureResultsComponent", function() { return FeatureResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
/* harmony import */ var _feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feature-instructions/feature-instructions.component */ "./src/app/components/feature-instructions/feature-instructions.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeatureResultsComponent = /** @class */ (function () {
    function FeatureResultsComponent(searchAlgorithmService, modalService) {
        this.searchAlgorithmService = searchAlgorithmService;
        this.modalService = modalService;
    }
    FeatureResultsComponent.prototype.ngOnInit = function () {
        this.set();
    };
    FeatureResultsComponent.prototype.set = function () {
        this.results = this.searchAlgorithmService.resultSet;
    };
    // openDetails(result: FeatureResults) {
    //   this.searchAlgorithmService.searchRecipeInstructionById(392463).subscribe(
    //     data => {
    //       console.log(data);
    //     }
    //   );
    // }
    FeatureResultsComponent.prototype.open = function (result) {
        console.log(result);
        this.modal.open(result);
        // this.searchAlgorithmService.searchRecipeInstructionById(result.id).subscribe(
        //       data => {
        //          result.steps = data;
        //        }
        //      );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_2__["FeatureInstructionsComponent"]),
        __metadata("design:type", _feature_instructions_feature_instructions_component__WEBPACK_IMPORTED_MODULE_2__["FeatureInstructionsComponent"])
    ], FeatureResultsComponent.prototype, "modal", void 0);
    FeatureResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-results',
            template: __webpack_require__(/*! ./feature-results.component.html */ "./src/app/components/feature-results/feature-results.component.html"),
            styles: [__webpack_require__(/*! ./feature-results.component.css */ "./src/app/components/feature-results/feature-results.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__["SearchAlgorithmService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], FeatureResultsComponent);
    return FeatureResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/food-category/food-category.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/food-category/food-category.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n.column {\r\n    float: left;\r\n    width: 33.33%;\r\n    /* width: 30%; */\r\n    padding: 15px;\r\n  }\r\n.row {\r\n  height: 40%;\r\n}\r\nimg{\r\n  \r\n  transition: width .3s;\r\n  width: 90%;\r\n}\r\nimg:hover{\r\n  width: 100%;\r\n  /* margin-bottom: -10px; */\r\n}\r\n.bg-faded.p-5.rounded.category-view{\r\n  width: 500px;\r\n  height: 500px;\r\n}\r\n.button {\r\n  background-color: #e6a756; /* Safari */\r\n  transition-duration: 0.3s;\r\n  margin-right: 15px;\r\n  margin-top: 15px;\r\n}\r\n.button:hover {\r\n  box-shadow: 0 12px 16px 0 rgba(85, 77, 62, 0.24),0 17px 50px 0 rgba(126, 106, 65, 0.19);\r\n}\r\n.btn-meat{\r\n  background: rgb(214, 177, 165);\r\n\r\n}\r\n.btn-veggies{\r\n  background-color: rgb(247, 255, 233);\r\n\r\n}\r\n.btn-dairy{\r\n  background-color: rgb(255, 252, 240);\r\n  /* 848586  */\r\n\r\n}\r\n.btn-fruits{\r\n  background-color: rgb(255, 251, 255);\r\n\r\n}\r\n.btn-spices{\r\n  background-color: rgb(233, 211, 205);\r\n\r\n}\r\n.btn-grains{\r\n  background-color: rgb(207, 187, 177);\r\n\r\n}\r\n.change-category {\r\n  margin-top: 10%;\r\n  margin-bottom: 0%;\r\n}\r\n/* Clear floats after image containers */\r\n.row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n:host {\r\n    position: relative;\r\n  }\r\n.gradient {\r\n    position: absolute;\r\n  }\r\n.content {\r\n    position: relative;\r\n  }\r\n#category-view{\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    width: 400px;\r\n    height: 400px\r\n  }\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/food-category/food-category.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/food-category/food-category.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <section class=\"page-section\">\r\n        <div class=\"container\">\r\n          <div class=\"product-item-description d-flex mr-auto\">\r\n\r\n            <div class=\"bg-faded p-5 rounded category-view\" *ngIf=\"!showIngredients\">\r\n              <h2 class=\"section-heading mb-0\">\r\n                <span class=\"section-heading-upper\">Select a food group to begin adding ingredients</span>\r\n                <span class=\"section-heading-lower\">Categories</span>\r\n              </h2>\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/meat.png\" width=\"100\" (click)=\"showCarne()\">\r\n                </div>\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/dairy.png\" width=\"100\" (click)=\"showDairy()\">\r\n                </div>\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/veggie.png\" width=\"95\" (click)=\"showVeggie()\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/fruit.png\" width=\"100\" (click)=\"showFruit()\">\r\n                </div>\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/wheat.png\" width=\"100\" (click)=\"showGrain()\">\r\n                </div>\r\n                <div class=\"column\">\r\n                  <img src=\"../../../assets/images/spice.png\" width=\"90\" (click)=\"showHerbSpice()\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"bg-faded p-5 rounded\" *ngIf=\"showIngredients\">\r\n              <div>\r\n                <h2 class=\"section-heading mb-0\">\r\n                  <span class=\"section-heading-upper\">Click on your {{this.currentCategory}} to add to your pantry</span>\r\n                  <span class=\"section-heading-lower\">{{this.currentCategory}}</span>\r\n                </h2>\r\n                <br>\r\n                <div class=\"card-deck row\">\r\n                  <div class=\"card-block\" *ngFor=\"let ingredient of ingredients\">\r\n                    <button class=\"btn btn-sm button\" [ngClass]=\"{\r\n                      'btn-meat':ingredient.category === 'meats',\r\n                      'btn-dairy':ingredient.category === 'dairy',\r\n                      'btn-veggies':ingredient.category === 'veggies',\r\n                      'btn-fruits':ingredient.category === 'fruits',\r\n                      'btn-spices':ingredient.category === 'spices',\r\n                      'btn-grains':ingredient.category === 'grains'}\" (click)=\"addToPantry(ingredient)\" >{{ingredient.name}}</button>\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <label class=\"change-category \">\r\n                <button (click)=\"this.showIngredients=false;\" class=\"btn btn-primary\">Back To Categories</button>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </section>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-pantry></app-pantry>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/food-category/food-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/food-category/food-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: FoodCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoryComponent", function() { return FoodCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pantry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pantry.service */ "./src/app/services/pantry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodCategoryComponent = /** @class */ (function () {
    function FoodCategoryComponent(router, foodService, pantryService) {
        var _this = this;
        this.foodService = foodService;
        this.pantryService = pantryService;
        this.ingredients = [];
        this.ingredient = [];
        this.state = 'inavtive';
        this.setCategory = function (category) {
            if (_this.currentCategory == category)
                return;
            _this.currentCategory = category;
        };
    }
    FoodCategoryComponent.prototype.ngOnInit = function () {
        this.showIngredients = false;
    };
    FoodCategoryComponent.prototype.sortIngredients = function () {
        this.ingredients.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
    };
    FoodCategoryComponent.prototype.showCarne = function () {
        this.ingredients = this.foodService.getMeats();
        this.sortIngredients();
        this.currentCategory = "meats";
        this.showIngredients = true;
        this.categoryColor = "btn btn-sm btn-warning";
    };
    FoodCategoryComponent.prototype.showDairy = function () {
        this.ingredients = this.foodService.getDairy();
        this.sortIngredients();
        this.currentCategory = "dairy";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showVeggie = function () {
        this.ingredients = this.foodService.getVeggies();
        this.sortIngredients();
        this.currentCategory = "veggies";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showFruit = function () {
        this.ingredients = this.foodService.getFruits();
        this.sortIngredients();
        this.currentCategory = "fruits";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showGrain = function () {
        this.ingredients = this.foodService.getStarches();
        this.sortIngredients();
        this.currentCategory = "grains";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.showHerbSpice = function () {
        this.ingredients = this.foodService.getSpices();
        this.sortIngredients();
        this.currentCategory = "herbs-spices";
        this.showIngredients = true;
    };
    FoodCategoryComponent.prototype.addToPantry = function (ingredient) {
        this.pantryService.ingredient.push(ingredient);
        this.ingredients.splice(this.ingredients.indexOf(ingredient, 0), 1);
    };
    FoodCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-category',
            template: __webpack_require__(/*! ./food-category.component.html */ "./src/app/components/food-category/food-category.component.html"),
            styles: [__webpack_require__(/*! ./food-category.component.css */ "./src/app/components/food-category/food-category.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_1__["HandleArraysService"], _services_pantry_service__WEBPACK_IMPORTED_MODULE_3__["PantryService"]])
    ], FoodCategoryComponent);
    return FoodCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section clearfix\">\r\n    <div class=\"container\">\r\n      <div class=\"intro\">\r\n        <img class=\"intro-img img-fluid mb-3 mb-lg-0 rounded\" src=\"./../../../assets/images/jar.jpg\" alt=\"\">\r\n        <div class=\"intro-text left-0 text-center bg-faded p-5 rounded\">\r\n          <h2 class=\"section-heading mb-4\">\r\n            <span class=\"section-heading-upper\">Delicious Recipes</span>\r\n            <span class=\"section-heading-lower\">From Your Kitchen</span>\r\n          </h2>\r\n          <p class=\"mb-3\">\r\n            Cooking is hard when you don't know what you're doing. You \r\n            probably went shopping a while ago &amp; bought a bunch of food you know is \r\n            going bad, but you don't know what to do with any of it. Allow this app\r\n            to help. Here, you can put together a list the food you have &amp; find recipes\r\n            to make.\r\n            \r\n          </p>\r\n          <div class=\"intro-button mx-auto\">\r\n            <a class=\"btn btn-primary btn-xl\" routerLink=\"/categories\">Get Started!</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login-register/login-register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login-register/login-register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n<div class=\"modal-header\" style=\"margin: 0 auto\">\r\n\r\n  <h4 class=\"modal-title\">Login Or Register</h4>\r\n\r\n</div>\r\n\r\n<div id=\"login-overlay\">\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        <div class=\"well\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\" class=\"control-label\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"\" required title=\"Please enter your username\"\r\n              placeholder=\"username...\" [(ngModel)]='username'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" value=\"\" required title=\"Please enter your password\"\r\n              placeholder=\"password...\" [(ngModel)]='password'>\r\n          </div>\r\n\r\n          <!-- <div [hidden]=\"hidden\" id=\"loginErrorMsg\" class=\"alert alert-error hide\">Wrong username/password!</div> -->\r\n\r\n          <button type=\"submit\" class=\"btn btn-success btn-block\"  (click)=\"login()\" (click)=\"dismissModal('Close click')\">Login</button>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"col-xs-12 col-md-6\">\r\n        <div class=\"well\">\r\n          \r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\" class=\"control-label\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" value=\"\" required title=\"Enter first name\"\r\n              placeholder=\"Enter first name...\" [(ngModel)]='firstName'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\" class=\"control-label\">Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" value=\"\" required title=\"Enter last name\"\r\n              placeholder=\"Enter last name...\" [(ngModel)]='lastName'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"newUsername\" class=\"control-label\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"newUsername\" name=\"newUsername\" value=\"\" required title=\"Select a username\"\r\n              placeholder=\"Select a username...\" [(ngModel)]='newUsername'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"newPassword\" class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" value=\"\" required title=\"Choose your password\"\r\n              placeholder=\"Choose your password...\" [(ngModel)]='newPassword'>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmPassword\" class=\"control-label\">Confirm Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" value=\"\" required\r\n              title=\"Confirm password\" placeholder=\"Confirm password...\" [(ngModel)]='confirmPassword'>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group\">\r\n            <label for=\"newEmail\" class=\"control-label\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"newEmail\" name=\"newEmail\" value=\"\" required title=\"Enter email address\"\r\n              placeholder=\"Enter email address...\" [(ngModel)]='newEmail'>\r\n          </div> -->\r\n\r\n          <div [hidden]=\"hidden1\" id=\"registerErrorMsg\" class=\"alert alert-error hide\">Fill in fields!</div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"checkPasswords()\" (click)=\"dismissModal('Close click')\">Register\r\n            now!</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-danger btn-lg\" (click)=\"dismissModal('Close click')\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login-register/login-register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(modalService, route, router, authService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.show = false;
        this.hidden = true;
        this.hidden1 = true;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
        console.log('inside the login-register component');
    };
    //dummy method to test navbar look while logged in/out
    LoginRegisterComponent.prototype.login1 = function () {
        if (this.username == null || this.password == null) {
            alert('please enter in something.');
        }
        else {
            this.authService.isLoggedIn = true;
            console.log(this.authService.isLoggedIn + " logged in???");
            this.modalService.dismissAll('Cross click');
            this.router.navigate(['home']);
        }
    };
    LoginRegisterComponent.prototype.login = function () {
        var _this = this;
        if (this.username == null || this.password == null) {
            alert('please enter in something.');
        }
        else {
            this.hidden = !this.hidden;
            this.show = !this.show;
            this.authService.login(this.username, this.password).subscribe(function (user) {
                console.log(user);
                _this.authService.loggedInUser = user;
                if (user != null) {
                    _this.authService.isLoggedIn = true;
                    // this.router.navigate(['userInfo']);
                    _this.authService.getPantryByUsername(user.username).subscribe(function (pantryid) {
                        console.log('printing pantryid: ');
                        console.log(pantryid);
                        _this.authService.dataObject = pantryid;
                        if (pantryid != null) {
                            console.log("good");
                        }
                    });
                }
            });
        }
    };
    LoginRegisterComponent.prototype.checkPasswords = function () {
        if (this.newPassword !== this.confirmPassword) {
            alert('passwords do not match');
            // this.confirmPassword == null;
            return;
        }
        else {
            this.registerUser();
        }
    };
    LoginRegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.firstName == null || this.lastName == null || this.newUsername == null
            || this.newPassword == null || this.confirmPassword == null) {
            alert('please fill  in all fields');
            this.hidden1 = !this.hidden1;
        }
        else {
            this.hidden = !this.hidden;
            this.show = !this.show;
            // SENDING NEW INFO TO BE REGISTERED IN THE USER_LOGIN TABLE
            this.authService.registerUser(this.firstName, this.lastName, this.newUsername, this.newPassword).subscribe(function (data) {
                console.log(data);
                _this.authService.loggedInUser = data;
                if (data != null) {
                    // this.authService.isLoggedIn = true;
                    // this.router.navigate(['userInfo']);
                    // SENDING NEW INFO TO BE REGISTERED IN THE USER_INFO TABLE
                    _this.authService.registerUserInfo(_this.firstName, _this.lastName, _this.newUsername, _this.newPassword).subscribe(function (data2) {
                        console.log(data2);
                        if (data2 != null) {
                            // MAKING A PANTRY FOR NEW USER
                            _this.authService.registerUserPantry(_this.newUsername).subscribe(function (data3) {
                                console.log(data3);
                            });
                        }
                    });
                }
            });
        }
    };
    LoginRegisterComponent.prototype.dismissModal = function (any) {
        this.modalService.dismissAll('Cross click');
    };
    LoginRegisterComponent.prototype.getUsersPantry = function () {
        var _this = this;
        console.log('printing info in getUsersPantry() ');
        this.authService.login(this.username, this.password).subscribe(function (data) {
            console.log(data);
            _this.authService.loggedInUser = data;
            if (data != null) {
                _this.authService.isLoggedIn = true;
            }
        });
    };
    LoginRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-register',
            template: __webpack_require__(/*! ./login-register.component.html */ "./src/app/components/login-register/login-register.component.html"),
            styles: [__webpack_require__(/*! ./login-register.component.css */ "./src/app/components/login-register/login-register.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n  .dark-modal .close {\r\n    color: white;\r\n  }\r\n  .light-blue-backdrop {\r\n    background-color: #5cb3fd;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ng-template #content let-modal> -->\r\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n  <div class=\"modal-header\" style=\"margin: 0 auto\">\r\n\r\n    <h4 class=\"modal-title\">Login</h4>\r\n\r\n  </div>\r\n\r\n    <div id=\"login-overlay\" >\r\n\r\n          <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n\r\n                  <div class=\"col-xs-12 col-md-6\">\r\n                      <div class=\"well\">\r\n                            \r\n                              <div class=\"form-group\">\r\n                                  <label for=\"username\" class=\"control-label\">Username</label>\r\n                                  <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"\" required title=\"Please enter your username\" placeholder=\"username...\"[(ngModel)]='username'>\r\n                              </div>\r\n\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"password\" class=\"control-label\">Password</label>\r\n                                  <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" value=\"\" required title=\"Please enter your password\" placeholder=\"password...\" [(ngModel)]='password'>\r\n                              </div>\r\n\r\n                              <div [hidden]=\"hidden\" id=\"loginErrorMsg\" class=\"alert alert-error hide\">Wrong username/password!</div>\r\n\r\n                              <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"login()\">Login</button>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-xs-12 col-md-6\">\r\n                      <p class=\"lead\">Register now for <span class=\"text-info\">FREE</span></p>\r\n\r\n                      <ul class=\"list-unstyled\" style=\"line-height: 2\">\r\n                          <li><span class=\"fa fa-check text-info\"></span> Save items in your pantry</li>\r\n                          <li><span class=\"fa fa-check text-info\"></span> Fast recipes</li>\r\n                          <li><span class=\"fa fa-check text-info\"></span> Save your favorites</li>\r\n                          \r\n                          <li><a href=\"/about/\"><u>Read more</u></a></li>\r\n                      </ul>\r\n                      \r\n                      <p><a routerLink=\"/register\" (click)=\"modal.close('Close click')\" class=\"btn btn-info btn-block\">Register now!</a></p>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n  </div> -->\r\n\r\n<!-- </ng-template> -->\r\n\r\n<!-- <button class=\"btn btn-primary ml-2 mt-2\" (click)=\"openLoginModal(content)\">\r\n  \r\n  Login modal\r\n\r\n</button> -->\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(modalService, route, router, authService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.show = false;
        this.hidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('inside the login component');
    };
    // openLoginModal(content) {
    //   this.modalService.open(content, { size: 'lg' });
    // }
    LoginComponent.prototype.login = function () {
        if (this.username == null || this.password == null) {
            alert('please enter in something.');
        }
        else {
            console.log("printing info... ");
            console.log(this.username);
            console.log(this.password);
            this.hidden = !this.hidden;
            this.show = !this.show;
            //SOME LOGIN LOGIC
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    float: left;\r\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- LOGGED IN -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark py-lg-4\" id=\"mainNav\" *ngIf=\"authService.isLoggedIn\">\r\n  <a class=\"icon\" routerLink=\"/home\">\r\n    <img src=\"./../../../assets/images/bowl.png\" width=\"200%\" hspace=\"50\">\r\n  </a>\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none\" href=\"#\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- MENU WHEN USER LOGGED IN -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\" >\r\n      <ul class=\"navbar-nav mx-auto\">\r\n        <li class=\"nav-item px-lg-4\">\r\n          <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/popular\">Joke</a>\r\n        </li>\r\n        <li class=\"nav-item px-lg-4\">\r\n          <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/about\">About</a>\r\n        </li>\r\n        <li class=\"nav-item px-lg-4\">\r\n          <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/categories\">Add Ingredients</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav col-4 offset-3\">\r\n        <input type=\"text\" placeholder=\"Search our awesome recipes\" [(ngModel)]=\"search\"  (keydown.enter)=\"searchRecipe()\" class=\"form-control col-9 mt-2\">\r\n        <button class=\"btn btn-beige ml-2 mt-2\" (click)=\"searchRecipe()\">\r\n          <span class=\"oi oi-zoom-out\"></span>\r\n        </button>\r\n        <button (click)=\"logout1()\" class=\"btn btn-primary ml-2 mt-2 \">Logout</button>\r\n        <button [hidden]=\"loggedIn\" class=\"btn btn-primary ml-2 mt-2\" routerLink=\"/userInfo\">Account\r\n          <span class=\"oi oi-person\"></span>\r\n        </button>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- LOGGED OUT -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark py-lg-4\" id=\"mainNav\" *ngIf=\"!authService.isLoggedIn\">\r\n    <a class=\"icon\" routerLink=\"/home\">\r\n      <img src=\"./../../../assets/images/bowl.png\" width=\"200%\" hspace=\"50\">\r\n    </a>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none\" href=\"#\"></a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <!--MENU WHEN USER IN LOGGED OUT -->\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <li class=\"nav-item px-lg-4\">\r\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/popular\">Joke</a>\r\n          </li>\r\n          <li class=\"nav-item px-lg-4\">\r\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item px-lg-4\">\r\n            <a class=\"nav-link text-uppercase text-expanded\" routerLink=\"/categories\">Add Ingredients</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav col-4 offset-3\">\r\n          <input type=\"text\" placeholder=\"Search our awesome recipes\" [(ngModel)]=\"search\" class=\"form-control col-9 mt-2\">\r\n          <button class=\"btn btn-beige ml-2 mt-2\" (click)=\"searchRecipe()\">\r\n            <span class=\"oi oi-zoom-out\"></span>\r\n          </button>\r\n          <button (click)=\"openLoginRegisterModal()\" class=\"btn btn-primary ml-2 mt-2 \">Log in/Register</button>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-register/login-register.component */ "./src/app/components/login-register/login-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuComponent = /** @class */ (function () {
    function MenuComponent(modalService, authService, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.loggedIn = this.authService.isLoggedIn;
    }
    //dummy logout
    MenuComponent.prototype.logout1 = function () {
        this.authService.logout1();
    };
    MenuComponent.prototype.ngOnInit = function () {
        console.log(this.loggedIn + " IN MENU COMPONENT");
    };
    MenuComponent.prototype.searchRecipe = function () {
        var _this = this;
        if (this.search !== undefined) {
            this.authService.searchRecipes(this.search).subscribe(function (data) {
                _this.authService.recipe = data;
                // this.router.navigate(['search']);
                _this.reload('search');
            });
        }
        this.clearData();
    };
    MenuComponent.prototype.reload = function (link) {
        var _this = this;
        this.router.navigate(['/'], { skipLocationChange: true }).then(function () { _this.router.navigate([link]); });
    };
    MenuComponent.prototype.clearData = function () {
        this.search = '';
    };
    MenuComponent.prototype.open = function () {
        var modalRef = this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
    };
    MenuComponent.prototype.openLoginRegisterModal = function () {
        return this.modalService.open(_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_5__["LoginRegisterComponent"]);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/pantry/pantry.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/pantry/pantry.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n    background-color: #e6a756; /* Safari */\r\n    transition-duration: 0.3s;\r\n    margin-right: 15px;\r\n    margin-top: 15px;\r\n  }\r\n  .button:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(85, 77, 62, 0.24),0 17px 50px 0 rgba(126, 106, 65, 0.19);\r\n  }\r\n  .btn-meat{\r\n    background: rgb(214, 177, 165);\r\n  \r\n  }\r\n  .btn-veggies{\r\n    background-color: rgb(247, 255, 233);\r\n  \r\n  }\r\n  .btn-dairy{\r\n    background-color: rgb(255, 252, 240);\r\n    /* 848586  */\r\n  \r\n  }\r\n  .btn-fruits{\r\n    background-color: rgb(255, 251, 255);\r\n  \r\n  }\r\n  .btn-spices{\r\n    background-color: rgb(233, 211, 205);\r\n  \r\n  }\r\n  .btn-grains{\r\n    background-color: rgb(207, 187, 177);\r\n  \r\n  }"

/***/ }),

/***/ "./src/app/components/pantry/pantry.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/pantry/pantry.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\r\n    <section class=\"page-section\">\r\n        <div class=\"bg-faded p-5 rounded\">\r\n            <h2 class=\"section-heading mb-0\">\r\n                <span class=\"section-heading-upper\">My Virtual Pantry</span>\r\n                <span class=\"section-heading-lower\">My Ingredients</span>\r\n            </h2>\r\n            <div class=\"card-deck row\">\r\n                <button class=\"btn btn-sm button\"\r\n                    (click)=\"removeItemFromPantry(i)\" *ngFor=\"let i of this.pantryService.ingredient\"\r\n                    [ngClass]=\"{\r\n                        'btn-meat':i.category === 'meats',\r\n                        'btn-dairy':i.category === 'dairy',\r\n                        'btn-veggies':i.category === 'veggies',\r\n                        'btn-fruits':i.category === 'fruits',\r\n                        'btn-spices':i.category === 'spices',\r\n                        'btn-grains':i.category === 'grains'}\">\r\n                    {{i.name }}</button>\r\n            </div>\r\n            <div class=\"card-deck row\">\r\n                <button class=\"btn btn-sm button\"\r\n                    (click)=\"removeItemFromPantry(i)\" *ngFor=\"let i of this.userPantryIngredients\"\r\n                    [ngClass]=\"{\r\n                        'btn-meat':i.category === 'meats',\r\n                        'btn-dairy':i.category === 'dairy',\r\n                        'btn-veggies':i.category === 'veggies',\r\n                        'btn-fruits':i.category === 'fruits',\r\n                        'btn-spices':i.category === 'spices',\r\n                        'btn-grains':i.category === 'grains'}\">\r\n                    {{i.name}}</button>\r\n            </div>\r\n            <br>\r\n            <hr>\r\n            <button class=\"btn btn-primary\" (click)=\"addSelectionToArray()\">Submit</button>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pantry/pantry.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/pantry/pantry.component.ts ***!
  \*******************************************************/
/*! exports provided: PantryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryComponent", function() { return PantryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pantry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pantry.service */ "./src/app/services/pantry.service.ts");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
/* harmony import */ var _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food-category/food-category.component */ "./src/app/components/food-category/food-category.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/handle-arrays.service */ "./src/app/services/handle-arrays.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PantryComponent = /** @class */ (function () {
    function PantryComponent(handleArrays, authService, foodCategory, router, pantryService, searchAlgorithmService) {
        this.handleArrays = handleArrays;
        this.authService = authService;
        this.foodCategory = foodCategory;
        this.router = router;
        this.pantryService = pantryService;
        this.searchAlgorithmService = searchAlgorithmService;
        this.ingredient = [];
        this.userPantry = [];
        this.databasestring = "";
        this.userPantryIngredients = [];
    }
    PantryComponent.prototype.ngOnInit = function () {
        this.unpackUserPantryArray();
    };
    // to be used to sort the pantry items
    PantryComponent.prototype.sortIngredients = function () {
        this.ingredient.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
    };
    PantryComponent.prototype.sortIngredientsType = function (arr) {
        arr.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
        return arr;
    };
    PantryComponent.prototype.addSelectionToArray = function () {
        var _this = this;
        this.ingredient = this.pantryService.ingredient;
        this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe(function (data) {
            _this.searchAlgorithmService.resultSet = data;
        });
        this.turnArrayToString();
        this.router.navigate(['feature']);
    };
    PantryComponent.prototype.removeItemFromPantry = function (ingredient) {
        this.pantryService.ingredient.splice(this.pantryService.ingredient.indexOf(ingredient, 0), 1);
        this.foodCategory.ingredients.push(ingredient);
    };
    PantryComponent.prototype.turnArrayToString = function () {
        this.databasestring = String(this.pantryService.ingredient[0].id);
        for (var i = 1; i < this.pantryService.ingredient.length; i++) {
            this.databasestring = String(this.databasestring + "," + this.pantryService.ingredient[i].id);
        }
        this.pantryService.userPantryString = this.databasestring;
        this.authService.userPantryString = this.databasestring;
    };
    PantryComponent.prototype.unpackUserPantryArray = function () {
        var array = this.authService.dataObject.ingredients.split(',');
        for (var i = 0; i < array.length; i++) {
            this.userPantry.push(Number(array[i]));
        }
        console.log(this.userPantry);
        this.findPantry();
    };
    PantryComponent.prototype.findPantry = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.userPantryIngredients.push(this_1.handleArrays.pantry.find(function (o) { return o.id === _this.userPantry[i]; }));
        };
        var this_1 = this;
        for (var i = 0; i < this.userPantry.length; i++) {
            _loop_1(i);
        }
        console.log(this.userPantryIngredients);
    };
    PantryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pantry',
            template: __webpack_require__(/*! ./pantry.component.html */ "./src/app/components/pantry/pantry.component.html"),
            styles: [__webpack_require__(/*! ./pantry.component.css */ "./src/app/components/pantry/pantry.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handle_arrays_service__WEBPACK_IMPORTED_MODULE_6__["HandleArraysService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _food_category_food_category_component__WEBPACK_IMPORTED_MODULE_3__["FoodCategoryComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_pantry_service__WEBPACK_IMPORTED_MODULE_1__["PantryService"], _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_2__["SearchAlgorithmService"]])
    ], PantryComponent);
    return PantryComponent;
}());



/***/ }),

/***/ "./src/app/components/popular/popular.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/popular/popular.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/popular/popular.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popular/popular.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section cta\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-9 mx-auto\">\r\n                <div class=\"cta-inner text-center rounded\">\r\n                    <h2 class=\"section-heading mb-4\">\r\n                        <span class=\"section-heading-upper\">Comin' in Hot</span>\r\n                        <span class=\"section-heading-lower\">Food Fact</span>\r\n                    </h2>\r\n                    <p class=\"mb-0\">\r\n                        {{joke}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/popular/popular.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popular/popular.component.ts ***!
  \*********************************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-algorithm.service */ "./src/app/services/search-algorithm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularComponent = /** @class */ (function () {
    // public joke: String[] = [];
    function PopularComponent(searchService) {
        this.searchService = searchService;
    }
    PopularComponent.prototype.ngOnInit = function () {
        this.getJoke();
    };
    PopularComponent.prototype.getJoke = function () {
        var _this = this;
        this.searchService.searchJoke().subscribe(function (data) {
            _this.joke = data.text;
        });
    };
    PopularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular',
            template: __webpack_require__(/*! ./popular.component.html */ "./src/app/components/popular/popular.component.html"),
            styles: [__webpack_require__(/*! ./popular.component.css */ "./src/app/components/popular/popular.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_algorithm_service__WEBPACK_IMPORTED_MODULE_1__["SearchAlgorithmService"]])
    ], PopularComponent);
    return PopularComponent;
}());



/***/ }),

/***/ "./src/app/components/results-modal/results-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/results-modal/results-modal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* */"

/***/ }),

/***/ "./src/app/components/results-modal/results-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/results-modal/results-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h3 class=\"modal-title\">{{ recipes.label }}</h3>\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h4>Ingredients:</h4>\r\n    <ol class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\" *ngFor=\"let i of recipes.ingredientLines\">{{ i }}</li>\r\n    </ol>\r\n    <br>\r\n    <h4>Health Labels:</h4>\r\n    <ul class=\"list-inline\">\r\n      <li class=\"list-inline-item\" *ngFor=\"let i of recipes.healthLabels\">{{ i }},</li>\r\n      <br>\r\n      <p><img src=\"{{recipes.image}}\" class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-sm-0\"></p>\r\n    </ul>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    \r\n    <p>Click <a href=\"{{ recipes.url}}\" target=\"_blank\"> here</a> for more details about this recipe</p>\r\n    <button (click)=\"close()\" class=\"btn btn-outline-danger btn-lg\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/results-modal/results-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/results-modal/results-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResultsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsModalComponent", function() { return ResultsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsModalComponent = /** @class */ (function () {
    function ResultsModalComponent(modalService, route, router, authService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ResultsModalComponent.prototype.ngOnInit = function () {
    };
    ResultsModalComponent.prototype.open = function (recipes) {
        this.recipes = recipes;
        this.modalService.open(this.content);
    };
    ResultsModalComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"])
    ], ResultsModalComponent.prototype, "content", void 0);
    ResultsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results-modal',
            template: __webpack_require__(/*! ./results-modal.component.html */ "./src/app/components/results-modal/results-modal.component.html"),
            styles: [__webpack_require__(/*! ./results-modal.component.css */ "./src/app/components/results-modal/results-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ResultsModalComponent);
    return ResultsModalComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-results.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section\">\r\n<div class=\"container\">\r\n    <div class=\"jumbotron mt-2 bg-faded\">\r\n        <h2 class=\"offset-5 text-dark\">Search Results</h2>\r\n        <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Top Results</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr (click)=\"open(r)\" *ngFor=\"let r of recipe\">\r\n                <td>{{ r.label }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        \r\n    </div>\r\n    \r\n</div>\r\n</section>\r\n<app-results-modal></app-results-modal>"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-modal/results-modal.component */ "./src/app/components/results-modal/results-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(modalService, authService) {
        this.modalService = modalService;
        this.authService = authService;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.parseJson();
    };
    SearchResultsComponent.prototype.parseJson = function () {
        this.recipe = this.authService.recipe.hits.map(function (hit) { return hit.recipe; });
        this.authService.recipes = this.recipe;
    };
    SearchResultsComponent.prototype.open = function (recipe) {
        this.modal.open(recipe);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_3__["ResultsModalComponent"]),
        __metadata("design:type", _results_modal_results_modal_component__WEBPACK_IMPORTED_MODULE_3__["ResultsModalComponent"])
    ], SearchResultsComponent.prototype, "modal", void 0);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/components/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/components/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section\">\r\n  <div class=\"container\">\r\n    <div class=\"product-item-description d-flex mr-auto\">\r\n\r\n      <div class=\"bg-faded p-5 rounded\">\r\n\r\n        <h2 class=\"section-heading mb-0\">\r\n          <span class=\"section-heading-lower\">Welcome User!</span>\r\n          <span class=\"section-heading-upper\">User Info will go here</span>\r\n        </h2>\r\n        <br>\r\n\r\n        <h2 class=\"section-heading mb-0\">\r\n          <span class=\"section-heading-lower\">Recipes You've Liked</span>\r\n          <span class=\"section-heading-upper\">User's saved Recipes will go here</span>\r\n        </h2>\r\n\r\n        <!-- <h2 class=\"section-heading mb-0\">\r\n        <table class=\"table table-striped table-light mt-2\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Pantry_New_Item_ID</th>\r\n              <th scope=\"col\">Item_Name</th>\r\n              <th scope=\"col\">Item_Category</th>\r\n              <th scope=\"col\">Item_Weight</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of ingredients\">\r\n              <td>{{ i.id }}</td>\r\n              <td>{{ i.name }}</td>\r\n              <td>{{ i.category }}</td>\r\n              <td>{{ i.weight }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        </h2> -->\r\n\r\n      </div>\r\n      <app-pantry></app-pantry>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(authService) {
        this.authService = authService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.usersPantryItems = function () {
        // this.authService.getUsersPantryItems().subscribe(
        //   data => {
        //     if (data != null) {
        //       console.log(data);
        //       this.authService.allPantryItems = data;
        //       this.ingredients = this.authService.allPantryItems;
        //       console.log('loaded ingredients');
        //     }
        //     else {
        //       console.error('Error loading ingredients');
        //     }
        //   }
        // );
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/components/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.searchRecipes = function (search) {
        return this.http.get("https://api.edamam.com/search?q=" + search + "&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=40");
    };
    AuthService.prototype.loginTrueOrFalse = function () {
        if (this.isLoggedIn == false) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout1 = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.login = function (username, password) {
        console.log('sending info to /login/validate ');
        console.log(username);
        console.log(password);
        return this.http.post('http://localhost:8081/Backend/login/validate', {
            username: username,
            password: password
        });
    };
    // creates a new entry in the User_Login table -- WORKS
    AuthService.prototype.registerUser = function (firstName, lastName, newUsername, newPassword) {
        console.log('sending info to /login/create ');
        console.log(newUsername);
        console.log(newPassword);
        return this.http.post('http://localhost:8081/Backend/login/create', {
            username: newUsername,
            password: newPassword
        });
    };
    // this one creates a new entry in the User_Info table -- WORKS
    AuthService.prototype.registerUserInfo = function (firstName, lastName, newUsername, newPassword) {
        console.log('sending info to /info/create ');
        console.log(firstName);
        console.log(lastName);
        console.log(newUsername);
        return this.http.post('http://localhost:8081/Backend/info/create', {
            firstname: firstName,
            lastname: lastName,
            username: { username: newUsername }
        });
    };
    // CREATES A PANTRY FOR NEW USER -- WORKS
    AuthService.prototype.registerUserPantry = function (newUsername) {
        console.log('sending info to /pantry/create ');
        console.log(newUsername);
        return this.http.post('http://localhost:8081/Backend/pantry/create', {
            username: { username: newUsername }
        });
    };
    // returns pantry items when given pantry id
    AuthService.prototype.getUsersPantryItems = function (id) {
        console.log('sending info to /items/retrieve ');
        console.log(id);
        return this.http.post('http://localhost:8081/Backend/items/retrieve', {
            id: id
        });
    };
    // returns pantry id when given a username
    AuthService.prototype.getPantryByUsername = function (username) {
        console.log('sending info to /pantry/retrieve ');
        console.log(username);
        return this.http.post('http://localhost:8081/Backend/pantry/retrieve', {
            username: username
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/handle-arrays.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/handle-arrays.service.ts ***!
  \***************************************************/
/*! exports provided: HandleArraysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleArraysService", function() { return HandleArraysService; });
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

var HandleArraysService = /** @class */ (function () {
    function HandleArraysService() {
        this.therecipes = [];
        this.meats = [
            { id: 1, name: 'Beef', category: 'meats', weight: 12 },
            { id: 2, name: 'Chicken', category: 'meats', weight: 12 },
            { id: 3, name: 'Turkey', category: 'meats', weight: 12 },
            { id: 4, name: 'Pork', category: 'meats', weight: 12 },
            { id: 5, name: 'Shrimp', category: 'meats', weight: 12 },
            { id: 6, name: 'Salmon', category: 'meats', weight: 12 },
            { id: 7, name: 'Tuna', category: 'meats', weight: 12 },
            { id: 8, name: 'Tilapia', category: 'meats', weight: 12 },
            { id: 9, name: 'Halibut', category: 'meats', weight: 12 },
            { id: 10, name: 'Lamb', category: 'meats', weight: 12 },
            { id: 11, name: 'Sardines', category: 'meats', weight: 12 },
            { id: 12, name: 'Liver', category: 'meats', weight: 12 },
            { id: 13, name: 'Ham', category: 'meats', weight: 12 },
            { id: 14, name: 'Bacon', category: 'meats', weight: 12 },
            { id: 15, name: 'Tripe', category: 'meats', weight: 12 },
            { id: 16, name: 'Scallop', category: 'meats', weight: 12 },
            { id: 17, name: 'Anchovies', category: 'meats', weight: 12 },
            { id: 18, name: 'Lobster', category: 'meats', weight: 12 },
            { id: 19, name: 'Steak', category: 'meats', weight: 12 },
            { id: 20, name: 'Egg', category: 'meats', weight: 12 },
            { id: 21, name: 'Tofu', category: 'meats', weight: 12 },
            { id: 22, name: 'Tempeh', category: 'meats', weight: 12 }
        ];
        this.veggies = [
            { id: 23, name: 'Broccoli', category: 'veggies', weight: 4 },
            { id: 24, name: 'Squash', category: 'veggies', weight: 4 },
            { id: 25, name: 'Spinach', category: 'veggies', weight: 4 },
            { id: 26, name: 'Carrots', category: 'veggies', weight: 4 },
            { id: 27, name: 'Onion', category: 'veggies', weight: 4 },
            { id: 28, name: 'Cabbage', category: 'veggies', weight: 4 },
            { id: 29, name: 'Zucchini', category: 'veggies', weight: 4 },
            { id: 30, name: 'Eggplant', category: 'veggies', weight: 4 },
            { id: 31, name: 'Corn', category: 'veggies', weight: 4 },
            { id: 32, name: 'Lettuce', category: 'veggies', weight: 4 },
            { id: 33, name: 'Chives', category: 'veggies', weight: 4 },
            { id: 34, name: 'Asparagus', category: 'veggies', weight: 4 },
            { id: 35, name: 'Garlic', category: 'veggies', weight: 4 },
            { id: 36, name: 'Peas', category: 'veggies', weight: 4 },
            { id: 37, name: 'Chickpea', category: 'veggies', weight: 4 },
            { id: 38, name: 'Mushroom', category: 'veggies', weight: 4 },
            { id: 39, name: 'Celery', category: 'veggies', weight: 4 },
            { id: 40, name: 'Kale', category: 'veggies', weight: 4 },
            { id: 41, name: 'Radish', category: 'veggies', weight: 4 },
            { id: 42, name: 'Artichokes', category: 'veggies', weight: 4 },
            { id: 43, name: 'Arugula', category: 'veggies', weight: 4 },
            { id: 44, name: 'Spring Beans', category: 'veggies', weight: 4 },
            { id: 45, name: 'Beets', category: 'veggies', weight: 4 },
            { id: 46, name: 'Belgian Endive', category: 'veggies', weight: 4 },
            { id: 47, name: 'Bok Choy', category: 'veggies', weight: 4 },
            { id: 48, name: 'Broccoli Rabe', category: 'veggies', weight: 4 },
            { id: 49, name: 'Brussel Sprouts', category: 'veggies', weight: 4 },
            { id: 50, name: 'Cauliflower', category: 'veggies', weight: 4 },
            { id: 51, name: 'Collard Greens', category: 'veggies', weight: 4 },
            { id: 52, name: 'Crookneck', category: 'veggies', weight: 4 },
            { id: 53, name: 'Fennel', category: 'veggies', weight: 4 },
            { id: 54, name: 'Ginger Root', category: 'veggies', weight: 4 },
            { id: 55, name: 'Horseradish', category: 'veggies', weight: 4 },
            { id: 56, name: 'Jicama', category: 'veggies', weight: 4 },
            { id: 57, name: 'Edamame', category: 'veggies', weight: 4 },
            { id: 58, name: 'Lentils', category: 'veggies', weight: 4 },
            { id: 59, name: 'Pinto beans', category: 'veggies', weight: 4 },
            { id: 60, name: 'Black beans', category: 'veggies', weight: 4 },
            { id: 61, name: 'Pickles', category: 'veggies', weight: 4 },
            { id: 62, name: 'Olives', category: 'veggies', weight: 4 }
        ];
        this.fruits = [
            { id: 63, name: 'Tomato', category: 'fruits', weight: 7 },
            { id: 64, name: 'Bell Pepper', category: 'fruits', weight: 7 },
            { id: 65, name: 'Cucumber', category: 'fruits', weight: 7 },
            { id: 66, name: 'Olives', category: 'fruits', weight: 7 },
            { id: 67, name: 'Avocado', category: 'fruits', weight: 7 },
            { id: 68, name: 'Banana', category: 'fruits', weight: 7 },
            { id: 69, name: 'Pineapple', category: 'fruits', weight: 7 },
            { id: 70, name: 'Cherry', category: 'fruits', weight: 7 },
            { id: 71, name: 'Lemon', category: 'fruits', weight: 7 },
            { id: 72, name: 'Lime', category: 'fruits', weight: 7 },
            { id: 73, name: 'Orange', category: 'fruits', weight: 7 },
            { id: 74, name: 'Pear', category: 'fruits', weight: 7 },
            { id: 75, name: 'Mango', category: 'fruits', weight: 7 },
            { id: 76, name: 'Jalepeno Pepper', category: 'fruits', weight: 7 },
            { id: 77, name: 'Strawberry', category: 'fruits', weight: 7 },
            { id: 78, name: 'Blueberry', category: 'fruits', weight: 7 },
            { id: 79, name: 'Watermelon', category: 'fruits', weight: 7 },
            { id: 80, name: 'Apple', category: 'fruits', weight: 7 },
            { id: 81, name: 'Plum', category: 'fruits', weight: 7 },
            { id: 82, name: 'Peach', category: 'fruits', weight: 7 },
            { id: 83, name: 'Grapes', category: 'fruits', weight: 7 },
            { id: 84, name: 'Coconut', category: 'fruits', weight: 7 },
            { id: 85, name: 'Cherries', category: 'fruits', weight: 7 },
            { id: 86, name: 'Raspberry', category: 'fruits', weight: 7 },
            { id: 87, name: 'Blackberry', category: 'fruits', weight: 7 }
        ];
        this.dairy = [
            { id: 88, name: 'Buttermilk', category: 'dairy', weight: 5 },
            { id: 89, name: 'Butter', category: 'dairy', weight: 5 },
            { id: 90, name: 'Sour cream', category: 'dairy', weight: 5 },
            { id: 91, name: 'Cheddar Cheese', category: 'dairy', weight: 5 },
            { id: 92, name: 'Cottage Cheese', category: 'dairy', weight: 5 },
            { id: 93, name: 'Mozzarella', category: 'dairy', weight: 5 },
            { id: 94, name: 'Milk', category: 'dairy', weight: 5 },
            { id: 95, name: 'Swiss Cheese', category: 'dairy', weight: 5 },
            { id: 96, name: 'Cream', category: 'dairy', weight: 5 },
            { id: 97, name: 'Cheese', category: 'dairy', weight: 5 },
            { id: 98, name: 'Cream Cheese', category: 'dairy', weight: 5 },
            { id: 99, name: 'Eggnog', category: 'dairy', weight: 5 },
            { id: 100, name: 'Soymilk', category: 'dairy', weight: 5 }
        ];
        this.spices = [
            { id: 101, name: 'Lemon pepper', category: 'spices', weight: 2 },
            { id: 102, name: 'Chili Powder', category: 'spices', weight: 2 },
            { id: 103, name: 'Oregano', category: 'spices', weight: 2 },
            { id: 104, name: 'Cayenne pepper', category: 'spices', weight: 2 },
            { id: 105, name: 'Paprika', category: 'spices', weight: 2 },
            { id: 106, name: 'Basil', category: 'spices', weight: 2 },
            { id: 107, name: 'Red Pepper', category: 'spices', weight: 2 },
            { id: 108, name: 'Pepper', category: 'spices', weight: 2 },
            { id: 109, name: 'Salt', category: 'spices', weight: 2 },
            { id: 110, name: 'Cumin', category: 'spices', weight: 2 },
            { id: 111, name: 'Thyme', category: 'spices', weight: 2 },
            { id: 112, name: 'Cinnamon', category: 'spices', weight: 2 },
            { id: 113, name: 'Ginger', category: 'spices', weight: 2 },
            { id: 114, name: 'Parsley', category: 'spices', weight: 2 },
            { id: 115, name: 'Ketchup', category: 'spices', weight: 2 },
            { id: 116, name: 'Mustard', category: 'spices', weight: 2 },
            { id: 117, name: 'Sesame', category: 'spices', weight: 2 },
            { id: 118, name: 'Onion powder', category: 'spices', weight: 2 },
            { id: 119, name: 'Bay leaf', category: 'spices', weight: 2 },
            { id: 120, name: 'Sugar', category: 'spices', weight: 2 },
            { id: 121, name: 'Powdered sugar', category: 'spices', weight: 2 },
            { id: 121, name: 'Cilantro', category: 'spices', weight: 2 },
            { id: 122, name: 'Cloves', category: 'spices', weight: 2 },
            { id: 123, name: 'Cream of tarter', category: 'spices', weight: 2 },
            { id: 124, name: 'Curry powder', category: 'spices', weight: 2 },
            { id: 125, name: 'Nutmeg', category: 'spices', weight: 2 },
            { id: 126, name: 'Rosemary', category: 'spices', weight: 2 },
            { id: 127, name: 'Vanilla extract', category: 'spices', weight: 2 },
            { id: 128, name: 'Dill weed', category: 'spices', weight: 2 },
            { id: 129, name: 'All spice', category: 'spices', weight: 2 },
            { id: 130, name: 'Poppy seeds', category: 'spices', weight: 2 },
            { id: 131, name: 'Peanut butter', category: 'spices', weight: 2 },
            { id: 132, name: 'Jelly', category: 'spices', weight: 2 },
            { id: 133, name: 'Soy sauce', category: 'spices', weight: 2 }
        ];
        this.starches = [
            { id: 134, name: 'White Rice', category: 'grains', weight: 15 },
            { id: 135, name: 'Brown Rice', category: 'grains', weight: 15 },
            { id: 136, name: 'Wheat', category: 'grains', weight: 15 },
            { id: 137, name: 'Bread', category: 'grains', weight: 15 },
            { id: 138, name: 'Rye', category: 'grains', weight: 15 },
            { id: 139, name: 'Cornmeal', category: 'grains', weight: 15 },
            { id: 140, name: 'Tortilla', category: 'grains', weight: 15 },
            { id: 141, name: 'Rice', category: 'grains', weight: 15 },
            { id: 142, name: 'Lasagna', category: 'grains', weight: 15 },
            { id: 143, name: 'Linguini', category: 'grains', weight: 15 },
            { id: 144, name: 'Spaghetti', category: 'grains', weight: 15 },
            { id: 145, name: 'Fettucini', category: 'grains', weight: 15 },
            { id: 146, name: 'Ravioli', category: 'grains', weight: 15 },
            { id: 147, name: 'Baking powder', category: 'grains', weight: 15 },
            { id: 148, name: 'Flour', category: 'grains', weight: 15 },
            { id: 149, name: 'Oats', category: 'grains', weight: 15 },
            { id: 150, name: 'Quinoa', category: 'grains', weight: 15 }
        ];
        this.pantry = [
            { id: 1, name: 'Beef', category: 'meats', weight: 12 },
            { id: 2, name: 'Chicken', category: 'meats', weight: 12 },
            { id: 3, name: 'Turkey', category: 'meats', weight: 12 },
            { id: 4, name: 'Pork', category: 'meats', weight: 12 },
            { id: 5, name: 'Shrimp', category: 'meats', weight: 12 },
            { id: 6, name: 'Salmon', category: 'meats', weight: 12 },
            { id: 7, name: 'Tuna', category: 'meats', weight: 12 },
            { id: 8, name: 'Tilapia', category: 'meats', weight: 12 },
            { id: 9, name: 'Halibut', category: 'meats', weight: 12 },
            { id: 10, name: 'Lamb', category: 'meats', weight: 12 },
            { id: 11, name: 'Sardines', category: 'meats', weight: 12 },
            { id: 12, name: 'Liver', category: 'meats', weight: 12 },
            { id: 13, name: 'Ham', category: 'meats', weight: 12 },
            { id: 14, name: 'Bacon', category: 'meats', weight: 12 },
            { id: 15, name: 'Tripe', category: 'meats', weight: 12 },
            { id: 16, name: 'Scallop', category: 'meats', weight: 12 },
            { id: 17, name: 'Anchovies', category: 'meats', weight: 12 },
            { id: 18, name: 'Lobster', category: 'meats', weight: 12 },
            { id: 19, name: 'Steak', category: 'meats', weight: 12 },
            { id: 20, name: 'Egg', category: 'meats', weight: 12 },
            { id: 21, name: 'Tofu', category: 'meats', weight: 12 },
            { id: 22, name: 'Tempeh', category: 'meats', weight: 12 },
            { id: 23, name: 'Broccoli', category: 'veggies', weight: 4 },
            { id: 24, name: 'Squash', category: 'veggies', weight: 4 },
            { id: 25, name: 'Spinach', category: 'veggies', weight: 4 },
            { id: 26, name: 'Carrots', category: 'veggies', weight: 4 },
            { id: 27, name: 'Onion', category: 'veggies', weight: 4 },
            { id: 28, name: 'Cabbage', category: 'veggies', weight: 4 },
            { id: 29, name: 'Zucchini', category: 'veggies', weight: 4 },
            { id: 30, name: 'Eggplant', category: 'veggies', weight: 4 },
            { id: 31, name: 'Corn', category: 'veggies', weight: 4 },
            { id: 32, name: 'Lettuce', category: 'veggies', weight: 4 },
            { id: 33, name: 'Chives', category: 'veggies', weight: 4 },
            { id: 34, name: 'Asparagus', category: 'veggies', weight: 4 },
            { id: 35, name: 'Garlic', category: 'veggies', weight: 4 },
            { id: 36, name: 'Peas', category: 'veggies', weight: 4 },
            { id: 37, name: 'Chickpea', category: 'veggies', weight: 4 },
            { id: 38, name: 'Mushroom', category: 'veggies', weight: 4 },
            { id: 39, name: 'Celery', category: 'veggies', weight: 4 },
            { id: 40, name: 'Kale', category: 'veggies', weight: 4 },
            { id: 41, name: 'Radish', category: 'veggies', weight: 4 },
            { id: 42, name: 'Artichokes', category: 'veggies', weight: 4 },
            { id: 43, name: 'Arugula', category: 'veggies', weight: 4 },
            { id: 44, name: 'Spring Beans', category: 'veggies', weight: 4 },
            { id: 45, name: 'Beets', category: 'veggies', weight: 4 },
            { id: 46, name: 'Belgian Endive', category: 'veggies', weight: 4 },
            { id: 47, name: 'Bok Choy', category: 'veggies', weight: 4 },
            { id: 48, name: 'Broccoli Rabe', category: 'veggies', weight: 4 },
            { id: 49, name: 'Brussel Sprouts', category: 'veggies', weight: 4 },
            { id: 50, name: 'Cauliflower', category: 'veggies', weight: 4 },
            { id: 51, name: 'Collard Greens', category: 'veggies', weight: 4 },
            { id: 52, name: 'Crookneck', category: 'veggies', weight: 4 },
            { id: 53, name: 'Fennel', category: 'veggies', weight: 4 },
            { id: 54, name: 'Ginger Root', category: 'veggies', weight: 4 },
            { id: 55, name: 'Horseradish', category: 'veggies', weight: 4 },
            { id: 56, name: 'Jicama', category: 'veggies', weight: 4 },
            { id: 57, name: 'Edamame', category: 'veggies', weight: 4 },
            { id: 58, name: 'Lentils', category: 'veggies', weight: 4 },
            { id: 59, name: 'Pinto beans', category: 'veggies', weight: 4 },
            { id: 60, name: 'Black beans', category: 'veggies', weight: 4 },
            { id: 61, name: 'Pickles', category: 'veggies', weight: 4 },
            { id: 62, name: 'Olives', category: 'veggies', weight: 4 },
            { id: 63, name: 'Tomato', category: 'fruits', weight: 7 },
            { id: 64, name: 'Bell Pepper', category: 'fruits', weight: 7 },
            { id: 65, name: 'Cucumber', category: 'fruits', weight: 7 },
            { id: 66, name: 'Olives', category: 'fruits', weight: 7 },
            { id: 67, name: 'Avocado', category: 'fruits', weight: 7 },
            { id: 68, name: 'Banana', category: 'fruits', weight: 7 },
            { id: 69, name: 'Pineapple', category: 'fruits', weight: 7 },
            { id: 70, name: 'Cherry', category: 'fruits', weight: 7 },
            { id: 71, name: 'Lemon', category: 'fruits', weight: 7 },
            { id: 72, name: 'Lime', category: 'fruits', weight: 7 },
            { id: 73, name: 'Orange', category: 'fruits', weight: 7 },
            { id: 74, name: 'Pear', category: 'fruits', weight: 7 },
            { id: 75, name: 'Mango', category: 'fruits', weight: 7 },
            { id: 76, name: 'Jalepeno Pepper', category: 'fruits', weight: 7 },
            { id: 77, name: 'Strawberry', category: 'fruits', weight: 7 },
            { id: 78, name: 'Blueberry', category: 'fruits', weight: 7 },
            { id: 79, name: 'Watermelon', category: 'fruits', weight: 7 },
            { id: 80, name: 'Apple', category: 'fruits', weight: 7 },
            { id: 81, name: 'Plum', category: 'fruits', weight: 7 },
            { id: 82, name: 'Peach', category: 'fruits', weight: 7 },
            { id: 83, name: 'Grapes', category: 'fruits', weight: 7 },
            { id: 84, name: 'Coconut', category: 'fruits', weight: 7 },
            { id: 85, name: 'Cherries', category: 'fruits', weight: 7 },
            { id: 86, name: 'Raspberry', category: 'fruits', weight: 7 },
            { id: 87, name: 'Blackberry', category: 'fruits', weight: 7 },
            { id: 88, name: 'Buttermilk', category: 'dairy', weight: 5 },
            { id: 89, name: 'Butter', category: 'dairy', weight: 5 },
            { id: 90, name: 'Sour cream', category: 'dairy', weight: 5 },
            { id: 91, name: 'Cheddar Cheese', category: 'dairy', weight: 5 },
            { id: 92, name: 'Cottage Cheese', category: 'dairy', weight: 5 },
            { id: 93, name: 'Mozzarella', category: 'dairy', weight: 5 },
            { id: 94, name: 'Milk', category: 'dairy', weight: 5 },
            { id: 95, name: 'Swiss Cheese', category: 'dairy', weight: 5 },
            { id: 96, name: 'Cream', category: 'dairy', weight: 5 },
            { id: 97, name: 'Cheese', category: 'dairy', weight: 5 },
            { id: 98, name: 'Cream Cheese', category: 'dairy', weight: 5 },
            { id: 99, name: 'Eggnog', category: 'dairy', weight: 5 },
            { id: 100, name: 'Soymilk', category: 'dairy', weight: 5 },
            { id: 101, name: 'Lemon pepper', category: 'spices', weight: 2 },
            { id: 102, name: 'Chili Powder', category: 'spices', weight: 2 },
            { id: 103, name: 'Oregano', category: 'spices', weight: 2 },
            { id: 104, name: 'Cayenne pepper', category: 'spices', weight: 2 },
            { id: 105, name: 'Paprika', category: 'spices', weight: 2 },
            { id: 106, name: 'Basil', category: 'spices', weight: 2 },
            { id: 107, name: 'Red Pepper', category: 'spices', weight: 2 },
            { id: 108, name: 'Pepper', category: 'spices', weight: 2 },
            { id: 109, name: 'Salt', category: 'spices', weight: 2 },
            { id: 110, name: 'Cumin', category: 'spices', weight: 2 },
            { id: 111, name: 'Thyme', category: 'spices', weight: 2 },
            { id: 112, name: 'Cinnamon', category: 'spices', weight: 2 },
            { id: 113, name: 'Ginger', category: 'spices', weight: 2 },
            { id: 114, name: 'Parsley', category: 'spices', weight: 2 },
            { id: 115, name: 'Ketchup', category: 'spices', weight: 2 },
            { id: 116, name: 'Mustard', category: 'spices', weight: 2 },
            { id: 117, name: 'Sesame', category: 'spices', weight: 2 },
            { id: 118, name: 'Onion powder', category: 'spices', weight: 2 },
            { id: 119, name: 'Bay leaf', category: 'spices', weight: 2 },
            { id: 120, name: 'Sugar', category: 'spices', weight: 2 },
            { id: 121, name: 'Powdered sugar', category: 'spices', weight: 2 },
            { id: 121, name: 'Cilantro', category: 'spices', weight: 2 },
            { id: 122, name: 'Cloves', category: 'spices', weight: 2 },
            { id: 123, name: 'Cream of tarter', category: 'spices', weight: 2 },
            { id: 124, name: 'Curry powder', category: 'spices', weight: 2 },
            { id: 125, name: 'Nutmeg', category: 'spices', weight: 2 },
            { id: 126, name: 'Rosemary', category: 'spices', weight: 2 },
            { id: 127, name: 'Vanilla extract', category: 'spices', weight: 2 },
            { id: 128, name: 'Dill weed', category: 'spices', weight: 2 },
            { id: 129, name: 'All spice', category: 'spices', weight: 2 },
            { id: 130, name: 'Poppy seeds', category: 'spices', weight: 2 },
            { id: 131, name: 'Peanut butter', category: 'spices', weight: 2 },
            { id: 132, name: 'Jelly', category: 'spices', weight: 2 },
            { id: 133, name: 'Soy sauce', category: 'spices', weight: 2 },
            { id: 134, name: 'White Rice', category: 'grains', weight: 15 },
            { id: 135, name: 'Brown Rice', category: 'grains', weight: 15 },
            { id: 136, name: 'Wheat', category: 'grains', weight: 15 },
            { id: 137, name: 'Bread', category: 'grains', weight: 15 },
            { id: 138, name: 'Rye', category: 'grains', weight: 15 },
            { id: 139, name: 'Cornmeal', category: 'grains', weight: 15 },
            { id: 140, name: 'Tortilla', category: 'grains', weight: 15 },
            { id: 141, name: 'Rice', category: 'grains', weight: 15 },
            { id: 142, name: 'Lasagna', category: 'grains', weight: 15 },
            { id: 143, name: 'Linguini', category: 'grains', weight: 15 },
            { id: 144, name: 'Spaghetti', category: 'grains', weight: 15 },
            { id: 145, name: 'Fettucini', category: 'grains', weight: 15 },
            { id: 146, name: 'Ravioli', category: 'grains', weight: 15 },
            { id: 147, name: 'Baking powder', category: 'grains', weight: 15 },
            { id: 148, name: 'Flour', category: 'grains', weight: 15 },
            { id: 149, name: 'Oats', category: 'grains', weight: 15 },
            { id: 150, name: 'Quinoa', category: 'grains', weight: 15 }
        ];
    }
    HandleArraysService.prototype.getStarches = function () {
        return this.starches;
    };
    HandleArraysService.prototype.getSpices = function () {
        return this.spices;
    };
    HandleArraysService.prototype.getDairy = function () {
        return this.dairy;
    };
    HandleArraysService.prototype.getFruits = function () {
        return this.fruits;
    };
    HandleArraysService.prototype.getVeggies = function () {
        return this.veggies;
    };
    HandleArraysService.prototype.getMeats = function () {
        return this.meats;
    };
    HandleArraysService.prototype.getRecipes = function () {
        return this.therecipes;
    };
    HandleArraysService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HandleArraysService);
    return HandleArraysService;
}());



/***/ }),

/***/ "./src/app/services/pantry.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pantry.service.ts ***!
  \********************************************/
/*! exports provided: PantryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantryService", function() { return PantryService; });
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

var PantryService = /** @class */ (function () {
    function PantryService() {
        this.ingredient = [];
    }
    PantryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PantryService);
    return PantryService;
}());



/***/ }),

/***/ "./src/app/services/search-algorithm.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/search-algorithm.service.ts ***!
  \******************************************************/
/*! exports provided: SearchAlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAlgorithmService", function() { return SearchAlgorithmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchAlgorithmService = /** @class */ (function () {
    function SearchAlgorithmService(http) {
        this.http = http;
        this.searchUrl = "";
    }
    // randomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // searchPantryRecipes(searchArray: Ingredient[]) {
    //   let starchcount : number;
    //   let meatCount : number;
    //   let fruitCount : number;
    //   let vegetableCount : number;
    //   let dairyCount : number;
    //   let spicesCount : number;
    //   let random: number = this.randomInt(0, searchArray.length)
    //   while (this.selectedPantry.length <= 5)
    //     for (let i = random; i < searchArray.length; i++) {
    //       if (searchArray[i].weight >12) {
    //         this.selectedPantry.add
    //       }
    //     }
    // }
    //Retrives JSON array of recipes from pantry
    SearchAlgorithmService.prototype.searchPantryRecipes = function (searchArray) {
        this.searchUrl = searchArray[0].name;
        for (var i = 1; i < searchArray.length; i++) {
            this.searchUrl = this.searchUrl + "%2C" + searchArray[i].name;
        }
        console.log(this.searchUrl);
        return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + this.searchUrl + '&limitLicense=false&number=12&ranking=2', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
        });
    };
    //Retrives a JSON recipe with URL to instructions
    SearchAlgorithmService.prototype.searchRecipeInstructionById = function (id) {
        return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/analyzedInstructions", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
        });
    };
    SearchAlgorithmService.prototype.searchJoke = function () {
        return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
        });
    };
    SearchAlgorithmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchAlgorithmService);
    return SearchAlgorithmService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dylan\Desktop\Project2\RecipeSuggestionApp\Frontend\RecipeApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map