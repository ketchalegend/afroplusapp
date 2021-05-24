(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customPage/customPage.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customPage/customPage.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If Side menu is used-->\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar class=\"sidebarHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Marketplace</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <div *ngIf=\"isAUrl\" style=\"height: 100%\">\n        <iframe [src]='secureUrl'\n                #iframe\n                webkitallowfullscreen mozallowfullscreen allowfullscreen\n                sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\n                style=\"width: 100%; height: 100%; border: none;\">\n        </iframe>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/newsPage/customPage.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newsPage/customPage.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If Side menu is used-->\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar class=\"sidebarHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>News</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n    <div *ngIf=\"!isAUrl\" [innerHTML]=\"html\" style=\"padding: 16px; margin-top: 15px\"></div>\n\n    <div *ngIf=\"isAUrl\" style=\"height: 100%\">\n        <iframe [src]='secureUrl'\n                #iframe\n                webkitallowfullscreen mozallowfullscreen allowfullscreen\n                sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\n                style=\"width: 100%; height: 100%; border: none\">\n        </iframe>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.html ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-tabs *ngIf=\"!GlobalFields.loading\" mode=\"ios\" style=\"height: 100%\">\n\n  <!-- Loading-->\n  <ion-tab-bar *ngIf=\"!GlobalFields.msgsSelected && GlobalFields.loading\"  mode=\"ios\" slot=\"bottom\"   dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"border-top: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n  <!-- Tabs -->\n  <ion-tab-bar *ngIf=\"GlobalFields.showTabs && !GlobalFields.loading\"  mode=\"ios\" slot=\"bottom\"  dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"border-top: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n    <ion-tab-button class=\"tab\" mode=\"ios\"[routerLink]=\"['/tabs/home']\" style=\"background-color: black;\" [ngStyle]=\"getStyleSelectedTab('home')\">\n        <img src=\"../../assets/tabhome.png\" style=\"max-width: 40%;\"/>\n    </ion-tab-button>\n\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" [routerLink]=\"['/tabs/search']\" style=\"background-color: black;\" [ngStyle]=\"getStyleSelectedTab('search')\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.searchTabIcon\">\n        <img src=\"../../assets/place.png\" style=\"max-width: 40%;\"/>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" color=\"primary\" style=\"background-color: black;\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.faPlusCustomTab\" (click)=\"openAddModal()\">\n               <img src=\"../../assets/add.png\" style=\"max-width: 40%;\"/>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" style=\"background-color: black;\"\n                    (click)=\"openLink('https://marketplace.afroplus.de')\" [ngStyle]=\"getStyleSelectedTab('customPage')\">\n               <img src=\"../../assets/shopping.png\" style=\"max-width: 40%;\"/>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" style=\"background-color: black;\"\n                    [routerLink]=\"['/tabs/newsPage']\" [ngStyle]=\"getStyleSelectedTab('newsPage')\">\n               <img src=\"../../assets/news.png\" style=\"max-width: 40%;\"/>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n\n\n\n<!--\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button  color=\"primary\" (click)=\"openAddModal()\">\n            <i class=\"fas fa-plus \"   style=\"font-size: 22px\"></i>\n        </ion-fab-button>\n    </ion-fab>\n-->\n");

/***/ }),

/***/ "./src/app/customPage/customPage.scss":
/*!********************************************!*\
  !*** ./src/app/customPage/customPage.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbVBhZ2UvY3VzdG9tUGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customPage/customPage.ts":
/*!******************************************!*\
  !*** ./src/app/customPage/customPage.ts ***!
  \******************************************/
/*! exports provided: CustomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPage", function() { return CustomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let CustomPage = class CustomPage {
    constructor(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.html = '';
        this.isAUrl = false;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.loadUrl();
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        //To be called only when something changed (eg user logged out)
        this.isLoggedIn = (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile != undefined && _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie != undefined);
        console.log(this.wasLoggedIn);
        console.log(this.isLoggedIn);
        if (this.wasLoggedIn != this.isLoggedIn) {
            console.log("Call it again");
            console.log(this.GlobalFields.site_details.newsPageUrl);
            let url = this.GlobalFields.site_details.newsPageUrl;
            this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://marketplace.afroplus.de/');
            console.log(this.secureUrl);
        }
    }
    //It store the url to be called by the iframe
    loadUrl() {
        this.isAUrl = this.isURL('https://marketplace.afroplus.de/');
        if (!this.isAUrl)
            this.getHtml();
        else {
            let url = 'https://marketplace.afroplus.de/';
            if (this.isLoggedIn) {
                this.wasLoggedIn = true;
                url = url + '?cla_cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie;
            }
            else {
                this.wasLoggedIn = false;
                url = url + '?cla_cookie=' + 'logout';
            }
            if (!url.includes('https')) {
                url.replace('http', 'https');
            }
            this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    }
    getHtml() {
        this.service.getHtmlFromCustomPageUrl(this.GlobalFields.site_details.customPageUrl).subscribe((data) => {
            data = JSON.parse(data);
            if (data && data.content)
                this.html = data.content.rendered;
        });
    }
    isURL(str) {
        let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
};
CustomPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
CustomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customPage/customPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customPage.scss */ "./src/app/customPage/customPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], CustomPage);



/***/ }),

/***/ "./src/app/newsPage/customPage.scss":
/*!******************************************!*\
  !*** ./src/app/newsPage/customPage.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3NQYWdlL2N1c3RvbVBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/newsPage/customPage.ts":
/*!****************************************!*\
  !*** ./src/app/newsPage/customPage.ts ***!
  \****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let NewsPage = class NewsPage {
    constructor(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.html = '';
        this.isAUrl = false;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.loadUrl();
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        //To be called only when something changed (eg user logged out)
        this.isLoggedIn = (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile != undefined && _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie != undefined);
        console.log(this.wasLoggedIn);
        console.log(this.isLoggedIn);
        if (this.wasLoggedIn != this.isLoggedIn) {
            console.log("Call it again");
            console.log(this.GlobalFields.site_details.newsPageUrl);
            let url = this.GlobalFields.site_details.newsPageUrl;
            this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://news.afroplus.de/');
            console.log(this.secureUrl);
        }
    }
    //It store the url to be called by the iframe
    loadUrl() {
        this.isAUrl = this.isURL('https://news.afroplus.de/');
        if (!this.isAUrl)
            this.getHtml();
        else {
            let url = 'https://news.afroplus.de/';
            if (this.isLoggedIn) {
                this.wasLoggedIn = true;
                url = url + '?cla_cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie;
            }
            else {
                this.wasLoggedIn = false;
                url = url + '?cla_cookie=' + 'logout';
            }
            if (!url.includes('https')) {
                url.replace('http', 'https');
            }
            this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    }
    getHtml() {
        this.service.getHtmlFromCustomPageUrl(this.GlobalFields.site_details.newsPageUrl).subscribe((data) => {
            data = JSON.parse(data);
            if (data && data.content)
                this.html = data.content.rendered;
        });
    }
    isURL(str) {
        let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
};
NewsPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/newsPage/customPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customPage.scss */ "./src/app/newsPage/customPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], NewsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./src/app/tabs/tabs.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/app/tabs/tabs.ts");




const routes = [
    {
        path: '',
        component: _tabs__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../searchPage/search.module */ "./src/app/searchPage/search.module.ts")).then(m => m.SearchPageModule)
                    }
                ]
            },
            {
                path: 'customPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | customPage-customPage-module */ "customPage-customPage-module").then(__webpack_require__.bind(null, /*! ../customPage/customPage.module */ "./src/app/customPage/customPage.module.ts")).then(m => m.CustomPageModule)
                    }
                ]
            },
            {
                path: 'newsPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | newsPage-customPage-module */ "newsPage-customPage-module").then(__webpack_require__.bind(null, /*! ../newsPage/customPage.module */ "./src/app/newsPage/customPage.module.ts")).then(m => m.NewsPageModule)
                    }
                ]
            },
            {
                path: 'shop',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | shopPage-shopPage-module */ "shopPage-shopPage-module").then(__webpack_require__.bind(null, /*! ../shopPage/shopPage.module */ "./src/app/shopPage/shopPage.module.ts")).then(m => m.ShopPageModule)
                    }
                ]
            },
            {
                path: 'menuPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | menuPage-menuPage-module */ "menuPage-menuPage-module").then(__webpack_require__.bind(null, /*! ../menuPage/menuPage.module */ "./src/app/menuPage/menuPage.module.ts")).then(m => m.MenuPageModule)
                    }
                ]
            },
            {
                path: 'categoriesList',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | categoriesList-categoriesList-module */ "categoriesList-categoriesList-module").then(__webpack_require__.bind(null, /*! ../categoriesList/categoriesList.module */ "./src/app/categoriesList/categoriesList.module.ts")).then(m => m.CategoriesListModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | messagesPage-messagesPage-module */ "messagesPage-messagesPage-module").then(__webpack_require__.bind(null, /*! ../messagesPage/messagesPage.module */ "./src/app/messagesPage/messagesPage.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.ts":
/*!******************************!*\
  !*** ./src/app/tabs/tabs.ts ***!
  \******************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home */ "./src/app/home/home.ts");
/* harmony import */ var _customPage_customPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPage/customPage */ "./src/app/customPage/customPage.ts");
/* harmony import */ var _newsPage_customPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newsPage/customPage */ "./src/app/newsPage/customPage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalAdd/modalAdd */ "./src/app/tabs/modalAdd/modalAdd.ts");
/* harmony import */ var _searchPage_searchPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../searchPage/searchPage */ "./src/app/searchPage/searchPage.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











let TabsPage = class TabsPage {
    constructor(modalCtrl, router, inAppBrowser) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.inAppBrowser = inAppBrowser;
        this.tab1Root = _home_home__WEBPACK_IMPORTED_MODULE_2__["HomePage"];
        this.tab2Root = _searchPage_searchPage__WEBPACK_IMPORTED_MODULE_7__["SearchPage"];
        this.tab3Root = _customPage_customPage__WEBPACK_IMPORTED_MODULE_3__["CustomPage"];
        this.tab4Root = _newsPage_customPage__WEBPACK_IMPORTED_MODULE_4__["NewsPage"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_9__["GlobalFields"];
        this.selectedPath = '';
        this.selectedPath = this.router.url;
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    /*
        openAddModal() {
            let profileModal = this.modalCtrl.create(ModalAddNode, {userId: 8675309});
            profileModal.present();
        }
    */
    openAddModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const profileModal = yield this.modalCtrl.create({
                component: _modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_6__["ModalAddNode"],
                componentProps: { userId: 8675309 }
            });
            return yield profileModal.present();
        });
    }
    getStyleSelectedTab(path) {
        if (this.selectedPath.includes(path))
            return { 'color': this.GlobalFields.site_details.primaryColor, 'border-bottom': 'solid 2px' };
    }
    showCircleAsPlusIcon() {
        let count = 0;
        const tabs = document.getElementsByClassName("tab");
        if (tabs && tabs.length > 0)
            count = tabs.length;
        count;
        return (count % 2 == 1 ? true : false);
    }
    openLink(url) {
        console.log(url);
        const browser = this.inAppBrowser.create(url, '_blank');
        // browser.close();
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map