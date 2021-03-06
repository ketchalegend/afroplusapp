(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header> </ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-slides pager=\"true\" style=\"background-color: black;\">\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/slide1.png\" />\n\n      <div class=\"slider-text\" style=\"color: white; margin-top: 60px;\">\n        <h2>Welcome to AfroPlus</h2>\n        <p>AfroPlus is here to serve you.</p>\n      </div>\n\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/tabs/home']\"\n          >SKIP</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/slidemap.png\" />\n\n      <div class=\"slider-text\" style=\"color: white;\">\n        <h2>Map Support</h2>\n        <p>\n          An integrated map function, allows you to get directions to your\n          favorite locations or guide you to interesting businesses near you.\n        </p>\n      </div>\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['tabs/home']\"\n          >SKIP</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/slide2.png\" />\n\n      <div class=\"slider-text\" style=\"color: white;\">\n        <h2>Connect with the Community</h2>\n        <p>\n          View informations to all relevant events and find out whats happening\n          around you\n        </p>\n        <p>Fast, Convinient and Free</p>\n      </div>\n\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/tabs/home']\"\n          >SKIP</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/ballon.png\" />\n\n      <div class=\"slider-text\" style=\"color: white;\">\n        <h2>Push Notifications</h2>\n        <p>\n          Allow push notifications to keep you updated. We will keep you posted\n          with important informations, news and events Don't miss out!\n        </p>\n      </div>\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/tabs/home']\"\n          >SKIP</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/plan.png\" />\n\n      <div class=\"slider-text\" style=\"color: white;\">\n        <h2>Offline Access</h2>\n        <p>\n          Bookmark your favorite listings in your personal wishlist. You can\n          access the informations later - without internet connection!\n        </p>\n      </div>\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" [routerLink]=\"['/tabs/home']\"\n          >SKIP</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img src=\"../../assets/slide3.png\" />\n\n      <div class=\"slider-text\" style=\"color: white;\">\n        <h2>Are you ready?</h2>\n        <p>Join the Afro+ Family today!</p>\n      </div>\n\n      <ion-button color=\"primary\" [routerLink]=\"['/tabs/home']\"\n        >Let's Get Started</ion-button\n      >\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/onboarding/onboarding-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/onboarding/onboarding.page.ts");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ "./src/app/onboarding/onboarding.module.ts":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-routing.module */ "./src/app/onboarding/onboarding-routing.module.ts");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/onboarding/onboarding.page.ts");







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
    })
], OnboardingPageModule);



/***/ }),

/***/ "./src/app/onboarding/onboarding.page.scss":
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-slide img {\n  padding: 15%;\n}\n\n.slider-text {\n  padding-top: 20%;\n}\n\n.slider-text h2 {\n  font-family: \"Avenir LT Std 55 Roman\";\n}\n\n.navigator {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNsaWRlIGltZyB7XG4gICAgcGFkZGluZzogMTUlO1xufVxuXG4uc2xpZGVyLXRleHQge1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi5zbGlkZXItdGV4dCBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXIgTFQgU3RkIDU1IFJvbWFuJztcbn1cblxuLm5hdmlnYXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xufSIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2xpZGUgaW1nIHtcbiAgcGFkZGluZzogMTUlO1xufVxuXG4uc2xpZGVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxuXG4uc2xpZGVyLXRleHQgaDIge1xuICBmb250LWZhbWlseTogXCJBdmVuaXIgTFQgU3RkIDU1IFJvbWFuXCI7XG59XG5cbi5uYXZpZ2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/onboarding/onboarding.page.ts":
/*!***********************************************!*\
  !*** ./src/app/onboarding/onboarding.page.ts ***!
  \***********************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let OnboardingPage = class OnboardingPage {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
};
OnboardingPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], OnboardingPage.prototype, "slides", void 0);
OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboarding.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/onboarding/onboarding.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], OnboardingPage);



/***/ })

}]);
//# sourceMappingURL=onboarding-onboarding-module-es2015.js.map