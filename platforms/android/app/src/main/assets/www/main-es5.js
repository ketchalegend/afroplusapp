function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app style=\"background-color: black;\">\n<div *ngIf=\"GlobalFields.isLoggedIn; else notLoggedIn\">\n <ion-content *ngIf=\"GlobalFields.loading\" class=\"cards-bg social-cards\" style=\"z-index: 99999;\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <loading [softLoading]=\"false\"></loading>\n  </ion-content>\n  <ion-content *ngIf=\"GlobalFields.loadingSoft\" class=\"cards-bg social-cards\" style=\"z-index: 99999;\">\n    <loading [softLoading]=\"true\"></loading>\n  </ion-content>\n<!-- <ion-toolbar *ngIf=\"checkPlatform()\"></ion-toolbar> -->\n\n\n    <!-- The app side menu, if used-->\n    <app-sideMenu *ngIf=\"!GlobalFields.loading && GlobalFields.site_details\"></app-sideMenu>\n\n    <!-- the main content -->\n    <ion-router-outlet id=\"main\"  *ngIf=\"!GlobalFields.loading\" [swipeGesture]=\"true\" main></ion-router-outlet>\n\n    </div>\n<ng-template #notLoggedIn>\n    <div\n      class=\"img-container\"\n      style=\"\n        width: 70%;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 50px;\n        margin-bottom: -120px;\n      \"\n    >\n      <img src=\"../../assets/slide1.png\" />\n    </div>\n\n    <div\n      style=\"\n        text-align: center;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: auto;\n        margin-top: auto;\n      \"\n    >\n      <div style=\"padding-bottom: 25px\" style=\"color: white; \">\n        <strong>Welcome to AfroPlus.</strong>\n\n        <p>Please register or login into your account</p>\n      </div>\n\n      <loginComponent style=\"color: white;\"></loginComponent>\n    </div>\n  </ng-template>\n\n\n  <!--<ion-nav *ngIf=\"!GlobalFields.loading\" #myNav [root]=\"rootPage\"></ion-nav> -->\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.html":
  /*!**********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.html ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- If Side menu is used-->\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar [class.sidebarHeader]=\"GlobalFields.site_details.homeType != 1 \">\n    <ion-buttons slot=\"start\" style=\"position: absolute;\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n    <div *ngIf=\"GlobalFields.site_details.logoUrl\" style=\"text-align: center; width: 100%\"><img [src]=\"GlobalFields.site_details.logoUrl\" style=\"height: 38px; width: auto; max-width: none !important;\"></div>\n    <ion-title *ngIf=\"!GlobalFields.site_details.logoUrl\">{{appName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Header Airbnb type home if TABS-->\n<ion-header *ngIf=\"GlobalFields.site_details.homeType == 1\" [class]=\"headerClass\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar>\n    <!-- If Side menu is used-->\n    <ion-buttons   slot=\"start\">\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n    </ion-buttons>\n    <div style=\"margin: 5px; margin-top: 15px; height: 65px; z-index: 100 !important;\">\n      <ion-row class=\"filters\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-col no-padding  size=\"2\" style=\"text-align: center\"><img style=\"height: 50px;\" src=\"{{GlobalFields.site_details.logoUrl}}\"></ion-col>\n          <ion-col no-padding  size=\"10\">\n            <button class=\"btn-search\" (click)=\"openModalSearch()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'SEARCH' | translate }} </button>\n            <!--<<button *ngIf=\"GlobalFields.address\" class=\"btn-search\" (click)=\"searchNearMe()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'TRY_WITH' | translate }} \"{{GlobalFields.address}}\"</button>\n            <button *ngIf=\"!GlobalFields.address\" class=\"btn-search\" (click)=\"navController.navigateForward('tabs/search')\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'SEARCH' | translate }} </button>-->\n          </ion-col>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content class=\"cards-bg social-cards\" [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\"> -->\n<ion-content class=\"cards-bg social-cards\" dir=\"{{GlobalFields.getLanguageLayout()}}\"  [ngStyle]=\"getBackgroundBasedOnHomeType()\" >\n\n\n  <!-- Airbnb type home-->\n    <span class=\"section\" *ngIf=\"GlobalFields.listingTypesDetails && GlobalFields.site_details.homeType == 1\">\n        <ion-label class=\"titleSection\">  {{ 'WHAT_SEARCH' | translate }}</ion-label>\n        <ion-toolbar>\n            <ion-row class=\"filters\">\n              <ion-col no-padding col-12>\n                <ion-slides [options]=\"slideOpts3\" >\n                  <ion-slide *ngFor=\"let type of GlobalFields.listingTypesDetails\" style=\"margin: 0px;\" (click)=\"searchByType(type.ID)\">\n                    <ion-card style=\"padding: 0;width: 100%; margin-right: 0px !important; margin-bottom: 15px !important;; height: 125px; \">\n                      <div *ngIf=\"type.img_cover\" class=\"backImgAirbnbTypes\">\n                        <img-loader [src]=\"type.img_cover\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\n                      </div>\n                      <div *ngIf=\"!type.img_cover\" class=\"backImgAirbnbTypes\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\n                        <ion-card-header style=\" padding: 0; height: 100%; line-height: 35px; text-align: left; padding-left: 15px;\">\n                            <span class=\"airbnbTypeName\">{{type.post_title}}</span>\n                        </ion-card-header>\n                    </ion-card>\n                  </ion-slide>\n                  <ion-slide></ion-slide>\n                </ion-slides>\n              </ion-col>\n            </ion-row>\n        </ion-toolbar>\n    </span>\n\n\n    <!-- Tripadvisor type home-->\n    <div *ngIf=\"GlobalFields.listingTypesDetails && GlobalFields.site_details.homeType == 3\">\n        <div class=\"backImgTrip\">\n            <img-loader *ngIf=\"GlobalFields.site_details.iconUrl\" [src]=\"GlobalFields.site_details.iconUrl\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\n            <div *ngIf=\"!GlobalFields.site_details.iconUrl\" class=\"backImg\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\n            <div class=\"btn-search-trip\">\n                <button (click)=\"openModalSearch()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'WHAT_SEARCH' | translate }} </button>\n            </div>\n        </div>\n        <section class=\"gridTripAdvisor\" *ngIf=\"GlobalFields.listingTypesDetails.length>1\">\n            <div class=\"divGridTrip\" *ngFor=\"let type of GlobalFields.listingTypesDetails\" (click)=\"searchByType(type.ID)\">\n                <span>\n                    <i *ngIf=\"type.icon\" class=\"{{type.icon}}\"></i>\n                    <br>\n                    {{type.post_title}}\n                </span>\n            </div>\n        </section>\n\n        <div class=\"section\">\n            <ion-label class=\"titleSection\"> {{ 'EXPLORE' | translate }} {{ 'NEAR_YOU' | translate }}</ion-label>\n            <div class=\"backImgTrip\" style=\"height: 100px;\">\n                <div class=\"backImg\" [style.background]=\"'url(../../assets/imgs/GoogleMapTA.jpg)'\"></div>\n                <button class=\"btn-near-trip\" (click)=\"searchNearMe()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-map-pin\"></i> {{'SEARCH' | translate}} </button>\n            </div>\n        </div>\n    </div>\n\n  <!-- MyListing type home with custom search -->\n  <div *ngIf=\"GlobalFields.site_details.homeType == 2 && GlobalFields.selectedTypeDetail\" class=\"totalPageBackImg \">\n\n      <img-loader [src]=\"GlobalFields.selectedTypeDetail.img_cover\" useImg [imgAttributes]=\"getImgCachedClass('imgCachedAsBackground shadedImgCached mylistingHomeImgCached')\"></img-loader>\n\n      <!--  <div class=\"backImgLogo2\" [style.background]=\"'url(' + GlobalFields.site_details.logoUrl + ')'\"></div> -->\n        <img *ngIf=\"GlobalFields.site_details.iconUrl\" src=\"{{GlobalFields.site_details.iconUrl}}\" [class]=\"'imgLogoHorizontal' + GlobalFields.getLanguageLayout()\" >\n\n\n        <ul col-12 style=\"display: flex; padding: 0; margin: 10px; width: 100%; z-index:9; position: relative; top: 10%; margin-top: 15px; overflow: scroll;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n            <li *ngFor=\"let type of GlobalFields.listingTypesDetails\" [class]=\"'typesListHorizontalWhite' + isSelected(type.ID)\" (click)=\"GlobalFields.filtersSearch.selectedType = type.ID; selectListingType()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                <span *ngIf=\"type.post_title\">{{type.post_title}}</span>\n            </li>\n        </ul>\n\n\n        <div *ngIf=\"GlobalFields.selectedTypeDetail\" class=\"basicSearchContainer\">\n            <div *ngFor=\"let filter of GlobalFields.selectedTypeDetail.case27_listing_type_search_page.basic.facets\"  class=\"filterSectionBasic\">\n\n                <div *ngIf=\"filter.type == 'location'\" >\n                        <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                        <i *ngIf=\"GlobalFields.filtersSearch.location != GlobalFields.address\" (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: right; margin-top: 30px;\"></i>\n                        <i *ngIf=\"GlobalFields.filtersSearch.location == GlobalFields.address\"  (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: right; margin-top: 30px;\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n                        <!--<ion-input clearInput placeholder=\"{{filter.placeholder}}\" style=\"width: 90%; margin: auto;\" [(ngModel)]=\"GlobalFields.filtersSearch.location\" ></ion-input>-->\n                        <div style=\"width: 90%; margin: auto;\">\n                          <googleMapsAutocomplete [value]=\"GlobalFields.filtersSearch.location\" [placeholder]=\"filter.placeholder\" (addressName)=\"GlobalFields.filtersSearch.location=$event\"></googleMapsAutocomplete>\n                        </div>\n                </div>\n\n                <span *ngIf=\"(filter.type == 'wp-search' || filter.type == 'text')  && !filter.show_field\">\n                        <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                        <ion-input clearInput placeholder=\"{{filter.placeholder}}\"  [(ngModel)]=\"GlobalFields.filtersSearch.search_keywords\"></ion-input>\n                </span>\n\n                <span *ngIf=\"(filter.type == 'wp-search' || filter.type == 'text' ) && filter.show_field=='job_title'\">\n                        <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                        <ion-input clearInput placeholder=\"{{filter.placeholder}}\"  [(ngModel)]=\"GlobalFields.filtersSearch.name\"></ion-input>\n                </span>\n\n                <span *ngIf=\"filter.type == 'date'\">\n                   <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                    <ion-item style=\"\">\n                      <ion-datetime display-format=\"MMM DD, YYYY HH:mm\" placeholder=\"{{'SELECT' | translate}}\" [(ngModel)]=\"GlobalFields.filtersSearch.date\"></ion-datetime>\n                    </ion-item>\n                </span>\n\n                <span *ngIf=\"filter.type == 'dropdown' || filter.type == 'checkboxes'\">\n\n                  <!-- categories-->\n                    <div *ngIf=\"filter.show_field == 'job_category' && GlobalFields.selectedTypeDetail.categories\">\n                      <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                      <ion-item style=\"padding:0px;\">\n                        <ion-select multiple=\"true\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFields.filtersSearch.categories\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringCategories()}}\">\n                          <ion-select-option  *ngFor=\"let c of GlobalFields.selectedTypeDetail.categories\" value=\"{{c.name}}\">{{c.name}}</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                    </div>\n\n\n                    <!-- region-->\n                    <div *ngIf=\"filter.show_field == 'region'\">\n                      <ion-label >{{filter.label}}</ion-label>\n                      <ion-item style=\"padding:0px;\">\n                        <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\" [(ngModel)]=\"GlobalFields.filtersSearch.region\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringRegions()}}\">\n                          <ion-select-option  *ngFor=\"let r of GlobalFields.regions\" value=\"{{r.name}}\">{{r.name}}</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                    </div>\n\n                    <!-- tags -->\n                    <div  *ngIf=\"filter.show_field == 'job_tags'\">\n                     <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                      <ion-item *ngFor=\"let t of GlobalFields.filtersSearch.tags\" style=\" font-size: 10pt; padding: 0; margin-bottom: -11px; background-color: transparent;\">\n                        <ion-label>{{t.val.name}}</ion-label>\n                        <ion-checkbox slot=\"end\" [(ngModel)]=\"t.isChecked\" ></ion-checkbox>\n                      </ion-item>\n                    </div>\n\n                </span>\n\n\n                <span *ngIf=\"(filter.type == 'dropdown' || filter.type == 'checkboxes' ) && filter.show_field != 'job_tags' && filter.show_field != 'job_category' && filter.show_field != 'job_region' && filter.show_field != 'region'\">\n\n                    <!-- Dropdown Custom taxonomies fields -->\n                    <div *ngIf=\"!GlobalFields.keyIsACustomField(filter.show_field)\">\n                      <ion-label>{{filter.label}}</ion-label>\n                      <ion-item style=\"padding:0px;\">\n                        <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\" [(ngModel)]=\"GlobalFields.getCustomTaxonomiesByKey(filter.show_field).selected\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringTaxonomies(filter.show_field)}}\">\n                          <ion-select-option  *ngFor=\"let t of GlobalFields.getCustomTaxonomiesByKey(filter.show_field).options\" value=\"{{t.name}}\">{{t.name}}</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                    </div>\n\n                    <!-- Dropdown Custom fields fields -->\n                    <div *ngIf=\"GlobalFields.getCustomFieldsByKey(filter.show_field)\">\n                      <ion-label>{{filter.label}}</ion-label>\n                      <ion-item style=\"padding:0px;\">\n                        <ion-select  [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"   [(ngModel)]=\"GlobalFields.getCustomFieldsByKey(filter.show_field).selected\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringCustomFields(filter.show_field)}}\">\n                          <ion-select-option  *ngFor=\"let c of GlobalFields.getCustomFieldsByKey(filter.show_field).options\" value=\"{{c.label}}\">{{c.label}}</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                    </div>\n                </span>\n\n                <!-- Text Custom text fields -->\n                <span *ngIf=\"filter.show_field && (filter.type == 'wp-search' || filter.type == 'text' )\">\n                    <i class=\"fas fa-search iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n                    <ion-input clearInput placeholder=\"{{filter.placeholder}}\" [(ngModel)]=\"GlobalFields.getCustomTextFieldsByKey(filter.show_field).selected\"></ion-input>\n                </span>\n\n                <!-- proximity -->\n                <span *ngIf=\"filter.type == 'proximity'\">\n                    <ion-label class=\"titleSectionFilterBasic\">{{filter.label}}</ion-label>\n                    {{GlobalFields.filtersSearch.range}} <span *ngIf=\"GlobalFields.getUnitRangeProximity('basic')=='imperial'\">Miles</span> <span *ngIf=\"GlobalFields.getUnitRangeProximity('basic')!='imperial'\">Km</span>\n                    <ion-item>\n                      <ion-range [(ngModel)]=\"GlobalFields.filtersSearch.range\"\n                                 min=\"{{GlobalFields.getMinimumProximity('basic')}}\"\n                                 max=\"{{GlobalFields.getMaximumProximity('basic')}}\"\n                                 step=\"{{GlobalFields.getStepProximity('basic')}}\"\n                                 color=\"secondary\" pin=\"true\"></ion-range>\n                    </ion-item>\n                </span>\n\n            </div>\n\n            <ion-button color=\"light\" expand=\"block\" fill=\"outline\" style=\"margin-top:20px; border-radius: 5px;\" (click)=\"searchByBasicSearchFilter()\"><i class=\"fas fa-search\" style=\"font-size: 16px; padding: 10px; margin-bottom: 2px;\"></i> {{'SEARCH' | translate}}</ion-button>\n\n        </div>\n\n        <span class=\"swipe swipeDown swipeSpan\">{{'SWIPE_SEE_MORE' | translate}} <br> <i class=\"fas fa-chevron-down\"></i></span>\n\n    </div>\n\n\n  <!-- listings by types -->\n\n    <!-- Loading-->\n    <div *ngIf=\"byTypesListings==undefined\" class=\"section\">\n      <ion-list style=\"padding: 5px\">\n        <div *ngFor=\"let items of [1,2,3]\">\n          <ion-thumbnail style=\"width: 100%; height: 100px;\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n            <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n          </ion-label>\n          <br>\n        </div>\n      </ion-list>\n    </div>\n\n\n    <span *ngFor=\"let type of GlobalFields.listingTypesDetails;  let j = index\">\n      <!-- Loading-->\n      <div *ngIf=\"byTypesListings[j]==undefined\" class=\"section\">\n        <ion-list style=\"padding: 5px\">\n          <div *ngFor=\"let items of [1,2,3]\">\n            <ion-thumbnail style=\"width: 100%; height: 100px;\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n              <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n              <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n            </ion-label>\n            <br>\n          </div>\n        </ion-list>\n      </div>\n\n      <div class=\"section\" *ngIf=\"byTypesListings[j] && byTypesListings[j].length>0\" style=\"padding-bottom: 0;\">\n          <ion-label class=\"titleSection\">\n              {{ 'EXPLORE' | translate }}  {{type.post_title}}\n              <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" color=\"light\" fill=\"clear\" class=\"btnLight\" style=\"margin-top: 0px; position: absolute; right: 0; font-size: 10pt;\" (click)=\"searchByType(type.ID)\">{{'SEE_ALL' | translate}} ></ion-button>\n              <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" color=\"light\" fill=\"clear\" class=\"btnLight\" style=\"margin-top: 0px; position: absolute; left: 0; font-size: 10pt;\" (click)=\"searchByType(type.ID)\">{{'SEE_ALL' | translate}} ></ion-button>\n          </ion-label>\n          <div *ngIf=\"!loadingByTypes && byTypesListings && byTypesListings.length>0\">\n              <ion-slides [options]=\"slideOpts2\">\n                  <ion-slide *ngFor=\"let listing of byTypesListings[j];  let i = index\"  style=\"padding: 5px;\">\n                      <page-listingList [listing]=\"listing\" [type]=\"'1'\" [search]=\"false\"></page-listingList>\n                  </ion-slide>\n              </ion-slides>\n          </div>\n        <!-- Loading -->\n          <div *ngIf=\"loadingByTypes\">\n            <ion-slides  [options]=\"slideOpts2\">\n              <ion-slide *ngFor=\"let items of [1,2,3]\">\n                <ion-thumbnail style=\"width: 100%; height: 100px;\">\n                  <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-thumbnail>\n                <ion-label>\n                  <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n                  <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n                  <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n                </ion-label>\n                <br>\n              </ion-slide>\n            </ion-slides>\n          </div>\n      </div>\n    </span>\n\n\n\n\n  <!-- recent listings -->\n\n  <ion-grid class=\"section\">\n      <ion-label class=\"titleSection\">{{ 'RECENT_LISTINGS' | translate }}</ion-label>\n    <!-- Loading-->\n    <ion-row *ngIf=\"recentListings==undefined\" >\n      <ion-col col-6>\n          <ion-list style=\"padding: 5px\">\n            <div *ngFor=\"let items of [1,2,3]\">\n              <ion-thumbnail style=\"width: 100%; height: 100px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-thumbnail>\n              <ion-label>\n                <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n                <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n                <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n              </ion-label>\n              <br>\n            </div>\n          </ion-list>\n      </ion-col>\n      <ion-col col-6>\n        <ion-list style=\"padding: 5px\">\n          <div *ngFor=\"let items of [1,2,3]\">\n            <ion-thumbnail style=\"width: 100%; height: 100px;\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n              <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n              <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n            </ion-label>\n            <br>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n      <ion-row  style=\"margin-right: 0;\">\n        <ion-col col-6 style=\"padding-right: 5px\">\n        <span *ngFor=\"let listing of recentListings;  let i = index\">\n            <div *ngIf=\"i%2==0\" style=\"height: 180px;\">\n                <page-listingList [listing]=\"listing\" [type]=\"'1'\"  [search]=\"false\"></page-listingList>\n            </div>\n        </span>\n      </ion-col>\n\n      <ion-col col-6 style=\"padding-left: 5px\">\n        <span *ngFor=\"let listing of recentListings;  let i = index\">\n            <div style=\"height: 180px;\" *ngIf=\"i%2!=0\">\n                <page-listingList [listing]=\"listing\" [type]=\"'1'\"  [search]=\"false\" ></page-listingList>\n            </div>\n        </span>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n  <!-- Recent posts -->\n\n  <div *ngIf=\"posts && posts.length>0\" class=\"section\">\n      <ion-label class=\"titleSection\" style=\"margin-bottom: 10px\">{{ 'EXPLORE_POST' | translate }}</ion-label>\n      <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" color=\"light\" fill=\"clear\" class=\"btnLight\" style=\"margin-top: 0px; position: absolute; right: 0; font-size: 10pt;\" [routerLink]=\"'posts'\">{{'SEE_ALL' | translate}} ></ion-button>\n      <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" color=\"light\" fill=\"clear\" class=\"btnLight\" style=\"margin-top: 0px; position: absolute; left: 0; font-size: 10pt;\"  [routerLink]=\"'posts'\">{{'SEE_ALL' | translate}} ></ion-button>\n    <ion-row  class=\"filters\" *ngIf=\"posts\">\n          <ion-col no-padding col-12>\n              <ion-slides   [options]=\"slideOpts1\" >\n                  <ion-slide *ngFor=\"let post of posts\" (click)=\"openModalPost(post)\">\n\n                      <ion-card class=\"card card-ios\" >\n\n                        <img-loader *ngIf=\"post.img_cover\" [src]=\"post.img_cover\" useImg [imgAttributes]=\"'postImg'\"></img-loader>\n\n<!--\n                        <div *ngIf=\"post.img_cover\"  class=\"postImg\" [style.background]=\"'url(' + post.img_cover + ')'\"></div>\n -->                         <div *ngIf=\"!post.img_cover\"  class=\"postImg\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\n\n                          <ion-card-content style=\"text-align: left;\">\n                              <ion-label style=\"padding-left: 5px; font-size: 12pt; color: black\" *ngIf=\"post.title.rendered && post.title.rendered\">{{post.title.rendered}}</ion-label>\n                              <p [innerHTML]=\"post.excerpt.rendered\" style=\"font-size: smaller; color: #979797; padding: 5px; padding-top: 0;\"></p>\n                          </ion-card-content>\n                      </ion-card>\n\n                  </ion-slide>\n\n              </ion-slides>\n          </ion-col>\n      </ion-row>\n\n  </div>\n\n\n\n    <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modalGenericSearch/modal-generic-search.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/modalGenericSearch/modal-generic-search.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeModalGenericSearchModalGenericSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header (swiperight)=\"closeModal()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar style=\"padding: 10px;\">\n    <ion-row class=\"filters\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n      <ion-col no-padding  size=\"1\" style=\"text-align: center\">\n        <button class=\"btnFloatingWhite\" (click)=\"closeModal()\">\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-back-outline\"></ion-icon>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col no-padding  size=\"11\">\n        <ion-input clearInput placeholder=\"{{'WHAT_SEARCH' | translate}}\"\n                   [(ngModel)]=\"searchQuery\" enterkeyhint=\"search\"\n                   style=\"margin-left: 20px;padding-left: 0px !important; width: calc(100% - 10px);\"\n                   (keyup.enter)=\"generalSearch()\"\n                   (change)=\"results=undefined\"\n        ></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"padding-top: 20px;\">\n\n  <!-- Loading animation-->\n  <div *ngIf=\"loading\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div>\n\n    <ion-list *ngIf=\"!results && !loading\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n      <!-- Search near me\n      <ion-item style=\"color: #484848;\" [detail]=\"false\" (click)=\"searchNearMe()\">\n        <span slot=\"start\" class=\"iconType\" style=\"font-size: 12pt\"><i class=\"fas fa-location-arrow\"></i></span>\n        <ion-label style=\"text-transform: capitalize\">\n          <b>{{'NEAR_YOU' | translate}}</b>\n        </ion-label>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      </ion-item>\n      -->\n      <!-- Listing types-->\n      <ion-list-header>\n        <ion-label style=\"text-transform: capitalize\"><b>{{'NEAR_YOU' | translate}}</b></ion-label>\n      </ion-list-header>\n      <ion-item  *ngFor=\"let type of GlobalFields.listingTypesDetails\"\n                 style=\"color: #484848;\" [detail]=\"false\"\n                 (click)=\"searchNearMe(type.ID)\">\n        <span slot=\"start\" class=\"iconType\"><i *ngIf=\"type.icon\" class=\"{{type.icon}}\"></i></span>\n        <ion-label>\n          {{type.post_title}}\n        </ion-label>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n    <!-- Results -->\n\n    <span *ngIf=\"results && !loading\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n      <!-- No results -->\n      <ion-list *ngIf=\"(!results.listings || results.listings.length==0) && (!results.categories || results.categories.length==0)\n      && (!results.tags || results.tags.length==0) && (!results.regions || results.regions.length==0)\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-item style=\"color: #484848;\" [detail]=\"false\">\n            <span slot=\"start\" class=\"iconType\">\n            </span>\n            <ion-label>\n              <b>{{'NO_RESULTS' | translate}}</b>\n            </ion-label>\n        </ion-item>\n      </ion-list>\n\n\n      <!-- Listings -->\n      <ion-list *ngIf=\"results.listings && results.listings.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <ion-list-header>\n          <ion-label><b>{{'LISTINGS' | translate}}</b></ion-label>\n        </ion-list-header>\n        <span *ngFor=\"let listing of results.listings\">\n          <ion-item *ngIf=\"listing.listing_type\" (click)=\"getListingDetails(listing)\"\n                     style=\"color: #484848;\" [detail]=\"false\">\n            <span slot=\"start\" class=\"iconType\">\n              <div *ngIf=\"listing.logo\" class=\"imageCacheGeneralSearch\">\n                <img-loader [src]=\"listing.logo\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\n              </div>\n            </span>\n            <ion-label>\n              <b>{{listing.name}}</b>\n              <br>\n              <span style=\"font-size: 9pt\">{{listing.listing_type.title}}</span>\n            </ion-label>\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        </ion-item>\n        </span>\n      </ion-list>\n\n      <!-- Categories -->\n      <ion-list *ngIf=\"results.categories && results.categories.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <ion-list-header>\n          <ion-label><b>{{'CATEGORIES' | translate}}</b></ion-label>\n        </ion-list-header>\n        <span *ngFor=\"let cat of results.categories\">\n          <ion-item *ngFor=\"let listingType of cat.listing_types\"\n                     style=\"color: #484848;\" [detail]=\"false\" (click)=\"getListingsByCategory(cat.name,listingType.id)\">\n            <span slot=\"start\" class=\"iconType\"><i class=\"{{cat.icon}}\"></i></span>\n          <ion-label>\n            <b>{{cat.name}}</b>\n            <br>\n            <span style=\"font-size: 9pt\">{{listingType.title}}</span>\n          </ion-label>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        </ion-item>\n        </span>\n      </ion-list>\n\n      <!-- Tags -->\n      <ion-list *ngIf=\"results.tags && results.tags.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <ion-list-header>\n          <ion-label><b>Tags</b></ion-label>\n        </ion-list-header>\n        <span *ngFor=\"let tag of results.tags\">\n          <ion-item *ngFor=\"let listingType of tag.listing_types\" (click)=\"getListingsByTag(tag, listingType.id)\"\n                     style=\"color: #484848;\" [detail]=\"false\">\n            <span slot=\"start\" class=\"iconType\"><i class=\"{{tag.icon}}\"></i></span>\n          <ion-label>\n            <b>{{tag.name}}</b>\n            <br>\n            <span style=\"font-size: 9pt\">{{listingType.title}}</span>\n          </ion-label>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        </ion-item>\n        </span>\n      </ion-list>\n\n      <!-- Regions -->\n      <ion-list *ngIf=\"results.regions && results.regions.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <ion-list-header>\n          <ion-label><b>{{'REGIONS' | translate}}</b></ion-label>\n        </ion-list-header>\n        <span *ngFor=\"let reg of results.regions\">\n          <ion-item *ngFor=\"let listingType of reg.listing_types\" (click)=\"getListingsByRegion(reg.name, listingType.id)\"\n                     style=\"color: #484848;\" [detail]=\"false\">\n            <span slot=\"start\" class=\"iconType\"><i class=\"{{reg.icon}}\"></i></span>\n          <ion-label>\n            <b>{{reg.name}}</b>\n            <br>\n            <span style=\"font-size: 9pt\">{{listingType.title}}</span>\n          </ion-label>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        </ion-item>\n        </span>\n      </ion-list>\n\n    </span>\n  </div>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modalPost/modalPost.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/modalPost/modalPost.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeModalPostModalPostHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header (swiperight)=\"closeModal()\">\n  <ion-toolbar style=\"background: linear-gradient( to bottom, #00000057, transparent );\" >\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingLeftDiv': 'btnFloatingRightDiv'\">\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"closeModal()\">\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"arrow-back\"></ion-icon>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"arrow-forward\"></ion-icon>\n        <!--<span class=\"swipe\">{{ 'SWIPE' | translate }}</span> -->\n      </button>\n    </div>\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingRightDiv': 'btnFloatingLeftDiv'\">\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"share()\">\n        <i class=\"far fa-share-square\"></i>\n      </button>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<div style=\"position: fixed; height: 90%; z-index: 1; width: 10%\" (swiperight)=\"closeModal()\"></div>\n\n<ion-content style=\"position: absolute;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <img *ngIf=\"post.img_cover\"\n       class=\"imgTypes\" style=\"border-radius: 0\"\n       src=\"{{post.img_cover}}\"/>\n\n  <br>\n  <div class=\"section titleSection\" style=\"white-space: normal;\" > {{post.title.rendered}}</div>\n\n  <div #dynamic [innerHTML]=\"post.content.rendered\" style=\"padding: 16px;\"></div>\n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/popoverSearch/popoverSearch.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/popoverSearch/popoverSearch.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePopoverSearchPopoverSearchHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"arrow-up\"></div>\n<ion-card-content>\n  <ion-list *ngIf=\"GlobalFields.searchByStringListings && GlobalFields.searchByStringListings.length>0\" style=\"border: none !important;\">\n    <ion-item *ngFor=\"let listing of GlobalFields.searchByStringListings\" style=\"border: none !important;\">\n      <ion-row (click)=\"openModalListing(listing)\" style=\"width: 100%; padding: 5px;\">\n        <ion-col no-padding  size=\"3\">\n          <div *ngIf=\"listing.img_cover\" class=\"circularLittleImg\" [style.background]=\"'url(' + listing.img_cover + ')'\"></div>\n        </ion-col>\n        <ion-col no-padding  size=\"9\">\n          <p class=\"listingType\" *ngIf=\"GlobalFields.getListingTypeNameBySlug(listing.listing_data._case27_listing_type)\">{{GlobalFields.getListingTypeNameBySlug(listing.listing_data._case27_listing_type)}}</p>\n          <!-- recensioni-->\n          <span class=\"reviewCounterLittle\" *ngIf=\"!listing.listing_data._case27_review_count || listing.listing_data._case27_review_count == '0'\">0 recensioni</span>\n          <div class=\"reviewsLabelHeaderLittle\" *ngIf=\"listing.listing_data._case27_review_count && listing.listing_data._case27_review_count != '0'\">\n            <label class=\"reviewsNoBox\">\n              {{listing.listing_data._case27_average_rating}}\n              <ion-icon name=\"star\" class=\"starReviewLittle\"></ion-icon>\n            </label>\n            <br>\n            <label class=\"reviewCounterLittle\"> {{listing.listing_data._case27_review_count}} recensione/i</label>\n          </div>\n          <p class=\"listingTitle\" *ngIf=\"listing.title\">{{listing.title.rendered}}</p>\n          <p style=\"font-size: smaller; color: #979797; margin: 0px;\" *ngIf=\"listing.listing_data\">{{listing.listing_data._job_location}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <div style=\"width: 100%; text-align: center; background-color: white;\">\n    <div class=\"lds-ellipsis\" *ngIf=\"!GlobalFields.searchByStringListings || GlobalFields.searchByStringListings.length==0\"><div></div><div></div><div></div><div></div></div>\n  </div>\n</ion-card-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/postsPage/postsPage.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/postsPage/postsPage.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePostsPagePostsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"navigateAsRoot\"  slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-back-button *ngIf=\"!navigateAsRoot\" slot=\"start\" defaultHref=\"tabs/home\" ></ion-back-button>\n    <ion-title>{{'BLOG' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <ion-header collapse=\"condense\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'BLOG' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <div *ngIf=\"!loading && posts && posts.length==0\">\n    No posts\n  </div>\n\n  <div *ngFor=\"let post of posts\" style=\"margin: 10px\">\n    <ion-card class=\"card card-ios\" (click)=\"openModalPost(post)\">\n\n\n      <img-loader *ngIf=\"post.img_cover\" [src]=\"post.img_cover\" useImg [imgAttributes]=\"'postImg'\"></img-loader>\n      <div *ngIf=\"!post.img_cover\"  class=\"postImg\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\n\n        <ion-card-content style=\"text-align: left;\">\n            <ion-label style=\"padding-left: 5px; font-size: 12pt; color: black\" *ngIf=\"post.title.rendered && post.title.rendered\">{{post.title.rendered}}</ion-label>\n            <p [innerHTML]=\"post.excerpt.rendered\" style=\"font-size: smaller; color: #979797; padding: 5px; padding-top: 0;\"></p>\n        </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Paging -->\n  <div *ngIf=\"!loading && posts && lastNumber>9\" style=\"width: 100%; text-align: center; margin-top: 10px; margin-bottom: 20px;\" (click)=\"loadMorePosts()\">\n    <ion-icon name=\"refresh\"></ion-icon> {{'LOAD_MORE' | translate}}\n  </div>\n\n  <!-- Loading -->\n  <div *ngIf=\"loading\">\n    <ion-list style=\"padding: 15px\">\n      <div *ngFor=\"let items of [1,2,3]\">\n        <ion-thumbnail style=\"width: 100%; height: 200px;\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n          <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n        </ion-label>\n        <br>\n      </div>\n    </ion-list>\n  </div>\n\n\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingListCustomFieldsToDisplayCustomFieldsToDisplayHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Custom fields -->\n<span *ngIf=\"filteredCustomFields && filteredCustomFields.length>0\">\n    <section [class.gridBox]=\"type=='2' && !isWhiteBackground()\"\n             [class.gridBoxWhiteBackground]=\"type=='2' && isWhiteBackground()\" [class.floatGridBox]=\"type=='1'\">\n        <span *ngFor=\"let field of filteredCustomFields\" (click)=\"searchByType(type.ID)\">\n            <span *ngIf=\"listing.listing_data[field.show_field]\">\n                <div *ngIf=\"field.show_field\" [class.divGridBox]=\"type=='2'\" [class.badgeLeftFloat]=\"type=='1'\">\n                  <!--Location-->\n                    <span *ngIf=\"field.show_field.includes('location'); else elsePhone\">\n                        <i class=\"fas fa-map-marker-alt\"></i> {{listing.listing_data[field.show_field]}}\n                    </span>\n                  <!--Phone number-->\n                  <ng-template #elsePhone>\n                    <span *ngIf=\"field.show_field.includes('phone'); else elseEmail\">\n                        <i class=\"fas fa-phone\"></i> {{listing.listing_data[field.show_field]}}\n                    </span>\n                  </ng-template>\n                  <!-- Email -->\n                  <ng-template #elseEmail>\n                    <span *ngIf=\"field.show_field.includes('email'); else elseDate\">\n                        <i class=\"fas fa-envelope\"></i> {{listing.listing_data[field.show_field]}}\n                    </span>\n                  </ng-template>\n                  <!-- Date -->\n                  <ng-template #elseDate>\n                    <span *ngIf=\"field.show_field.includes('date'); else elsePriceRange\">\n                        <i class=\"fas fa-clock\"></i> {{listing.listing_data[field.show_field]}}\n                    </span>\n                  </ng-template>\n                  <!-- Price range-->\n                  <ng-template #elsePriceRange>\n                    <span *ngIf=\"field.show_field == 'price_range'; else elsePrice\">\n                        {{listing.listing_data[field.show_field]}}\n                    </span>\n                  </ng-template>\n                  <!-- Price -->\n                  <ng-template #elsePrice>\n                    <span *ngIf=\"field.show_field.includes('price') && field.show_field!='price_range'; else elseReview\">\n                        {{listing.listing_data[field.show_field]}}\n                    </span>\n                  </ng-template>\n                  <!-- Review -->\n                  <ng-template #elseReview>\n                    <span *ngIf=\"field.show_field.includes('rating'); else elseOther\">\n                         <i class=\"fas fa-star\"></i> {{listing.listing_data[field.show_field]}}\n                    </span>\n                  </ng-template>\n\n                  <!-- Other -->\n                  <ng-template #elseOther>\n                    <span *ngIf=\" listing.listing_data[field.show_field]\">\n                        <span>{{listing.listing_data[field.show_field]}}</span>\n                    </span>\n                  </ng-template>\n\n                </div>\n            </span>\n        </span>\n    </section>\n</span>\n\n<!-- Taxonomies -->\n<span *ngIf=\"customTaxonomies && customTaxonomies.length>0 && type=='3'\">\n    <section class=\"gridBox taxonomiesContainer\"\n             [class]=\"!isWhiteBackground() ? 'gridBox taxonomiesContainer' : 'gridBox whiteBackTaxonomiesContainer' \"\n             *ngIf=\"customTaxonomies[0].first_category\">\n        <span *ngFor=\"let field of customTaxonomies\" (click)=\"searchByType(type.ID)\">\n            <!-- Categories -->\n            <div class=\"divGridBox\" *ngIf=\"field.first_category\">\n                <span><i style=\"font-size: 10pt; padding: 3px; border-radius: 100px; color: white\"\n                         [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"\n                         class=\"{{field.icon_font}}\"></i> {{field.first_category}} <span\n                  *ngIf=\"field.others && field.others.length>0\"> +{{field.others.length}}</span></span>\n            </div>\n        </span>\n    </section>\n</span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listingList/listingList.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listingList/listingList.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingListListingListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-------------------- Box type - Airbnb style\n<ion-card *ngIf=\"type=='1'\" [className]=\"getCardClass() + isWhiteBackgroundBorder()\" (click)=\"getListingDetails(listing)\" style=\"height: auto; margin:0px !important; border-radius: 0 !important;\">\n\n    <div [className]=\"getImgClass()\">\n        <img-loader [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"></img-loader>\n    </div>\n\n    <ion-card-content style=\"text-align: left; padding: 4px; height: inherit; font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <ion-grid class=\"listingType\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n            <ion-row>\n                <ion-col size=\"12\" class=\"typeTitle\">\n\n                    <span style=\"font-weight: 400;\">{{GlobalFields.getListingTypeNameBySlug(listing.listing_data._case27_listing_type)}}</span>\n\n                    <!-- Sponsored\n                    <span class=\"sponsoredAirbnb\" *ngIf=\"listing.listing_data._featured\">Featured</span>\n\n                    <!-- reviews\n                    <span class=\"reviewCounterLittle\" *ngIf=\"!listing.listing_data._case27_review_count || listing.listing_data._case27_review_count == '0'\">0 {{ 'REVIEWS' | translate }}</span>\n                    <span class=\"reviewCounterLittle\" *ngIf=\"listing.listing_data._case27_review_count && listing.listing_data._case27_review_count != '0'\">\n                        <i class=\"fas fa-star starReviewAirbnb\"  style=\"float: initial; color: #f4b34d\"></i>\n                        <span class=\"reviewCounterLittle\" style=\"float: initial; font-size: small;\"> {{getTruncatedDecimal(listing.listing_data._case27_average_rating)}}</span>\n                        <span class=\"reviewCounterLittle\"  style=\"float: initial; font-weight: 200;\"> ({{listing.listing_data._case27_review_count}})</span>\n                    </span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <p class=\"listingTitleAirbnb\" style=\"-webkit-box-orient: vertical;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{listing.title.rendered}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\n        <p class=\"listingLocation\" style=\"-webkit-box-orient: vertical;\" *ngIf=\"listing.listing_data\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{listing.listing_data._job_location}}</p>\n    </ion-card-content>\n</ion-card>\n-------------------->\n\n<!-------------------- Box with logo type\n<ion-card *ngIf=\"type=='3'\" [className]=\"getCardClass()\" (click)=\"getListingDetails(listing)\" style=\"height: auto; margin:0px !important; border: 1px solid #f0f0f0; background: #676767;\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <div class=\"backImgSquaredAndLogo\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n        <img-loader [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"></img-loader>\n\n        <span style=\"width: 100%; padding: 15px; float: left; display: inline-flex;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n            <!-- Sponsored\n            <div class=\"badgeLeftFloat boltIcon\" *ngIf=\"listing.listing_data._featured\"><i class=\"fas fa-bolt\"></i></div>\n            <!-- Type\n            <div class=\"badgeLeftFloat\">{{GlobalFields.getListingTypeNameBySlug(listing.listing_data._case27_listing_type)}}</div>\n            <!--Reviews\n            <div class=\"badgeLeftFloat\" *ngIf=\"listing.listing_data._case27_review_count && listing.listing_data._case27_review_count != '0'\">\n                <span *ngFor=\"let star of getStartsHtml(listing.listing_data._case27_average_rating)\">\n                    <ion-icon name='star{{star}}'style='float: initial; font-size: 15px'></ion-icon>\n                </span>\n            </div>\n        </span>\n        <!-- White content\n        <ion-card-content style=\"text-align: center; padding: 4px; background-color: white; height: 100px; position: relative; top: 100px\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n            <div *ngIf=\"listing.listing_data._job_logo\" class=\"logoCircleImg\">\n                <img-loader [src]=\"listing.listing_data._job_logo\" useImg [imgAttributes]=\"getImgCachedClassByClass('logoImgCache')\"></img-loader>\n            </div>\n            <p class=\"listingTitle\" style=\"-webkit-box-orient: vertical; width: 100%; position: relative; top: -20px;\">{{listing.title.rendered}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\n            <p class=\"listingLocation\" style=\"-webkit-box-orient: vertical; width: 100%; position: relative; top: -20px;\" *ngIf=\"listing.listing_data\">{{listing.listing_data._job_location}}</p>\n        </ion-card-content>\n    </div>\n\n</ion-card>\n\n -------------------->\n\n\n\n<!-- Box Type (Default for ML) or Box with logo Type (Alternate for ML)-->\n\n<ion-card *ngIf=\"listingType && type!='2'\" [className]=\"getCardClass()\" (click)=\"getListingDetails(listing)\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"height: auto; margin: 0px !important; \">\n    <!-- Img -->\n    <div [class.backImgBigger]=\"type=='1' && search\" [class.backImg]=\"type=='1' && (!search || GlobalFields.isWhiteBackground())\"\n         [class.backImgSquaredAndLogo]=\"type=='3'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <img-loader [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"></img-loader>\n        <!-- Custom fields HEADER-->\n        <span *ngIf=\"search && listingType.case27_listing_type_result_template.buttons\">\n            <custom-fields [listing]=\"listing\" [listingType]=\"listingType\" [customFields]=\"listingType.case27_listing_type_result_template.buttons\" [type]=\"'1'\"></custom-fields>\n        </span>\n    </div>\n    <!-- White content -->\n    <ion-card-content [class.whiteContentBoxStyleOnWhiteBack]=\"type=='1'\" [class.whiteContentBoxLogoStyle]=\"type=='3'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <!-- Logo -->\n        <div *ngIf=\"type=='3' && listing.listing_data._job_logo\" class=\"logoCircleImg\">\n            <img-loader [src]=\"listing.listing_data._job_logo\" useImg [imgAttributes]=\"getImgCachedClassByClass('logoImgCache')\"></img-loader>\n        </div>\n        <!-- Type & reviews -->\n        <ion-grid class=\"listingType\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n            <ion-row>\n                <ion-col size=\"12\" class=\"typeTitle\">\n                    <span style=\"font-weight: 400;\">{{listingType.post_title}}</span>\n                    <!-- Featured -->\n                    <span *ngIf=\"listing.listing_data._featured\" class=\"sponsoredAirbnb\">{{'FEATURED' | translate}}</span>\n                    <!-- reviews-->\n                    <span class=\"reviewCounterLittle\" *ngIf=\"!listing.listing_data._case27_review_count || listing.listing_data._case27_review_count == '0'\">0 {{ 'REVIEWS' | translate }}</span>\n                    <span class=\"reviewCounterLittle\" *ngIf=\"listing.listing_data._case27_review_count && listing.listing_data._case27_review_count != '0'\">\n                        <i class=\"fas fa-star starReviewAirbnb\"  style=\"float: initial; color: #ffc106\"></i>\n                        <span class=\"reviewCounterLittle\" style=\"float: initial; font-size: small; \"> {{getTruncatedDecimal(listing.listing_data._case27_average_rating)}}</span>\n                        <span class=\"reviewCounterLittle\"  style=\"float: initial; font-weight: 200; \"> ({{listing.listing_data._case27_review_count}})</span>\n                    </span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <!-- Title & Location-->\n        <div [class.titleLocationLeft]=\"type=='1'\" [class.titleLocationCenter]=\"type=='3'\">\n            <p class=\"listingTitleAirbnb\" dir=\"{{GlobalFields.getLanguageLayout()}}\">{{listing.title.rendered}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\n            <p class=\"listingLocation\" *ngIf=\"listing.listing_data\"   dir=\"{{GlobalFields.getLanguageLayout()}}\"></p>\n        </div>\n        <span>\n            <!-- Custom fields FOOTER-->\n            <div *ngIf=\"search && listingType.case27_listing_type_result_template.info_fields\" >\n                <custom-fields [listing]=\"listing\" [listingType]=\"listingType\" [customFields]=\"listingType.case27_listing_type_result_template.info_fields\" [type]=\"'2'\"></custom-fields>\n            </div>\n            <!-- Custom Taxonomies FOOTER-->\n            <span *ngIf=\"search && listingType.case27_listing_type_result_template.info_fields\">\n                <custom-fields [listing]=\"listing\" [listingType]=\"listingType\" [customFields]=\"listingType.case27_listing_type_result_template.footer\" [type]=\"'3'\"></custom-fields>\n            </span>\n        </span>\n\n    </ion-card-content>\n</ion-card>\n\n\n\n\n\n\n\n\n\n<!-------------------- List type -------------------->\n<ion-row *ngIf=\"type=='2'\" [className]=\"'rowListType' + isWhiteBackgroundBoxShadow()\"  (click)=\"getListingDetails(listing)\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-col size=\"4\" style=\"padding: 0 !important;\">\n\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\">\n            <img-loader [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"  [class.imgLoaderRTL]=\"GlobalFields.getLanguageLayout()=='rtl'\"></img-loader>\n        </div>\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\">\n            <div class=\"imgRTLList\" [style.background]=\"'url(' +getListingImg(listing)+')'\"></div>\n        </div>\n\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding-top: 10px;\">\n        <div class=\"listingType\" *ngIf=\"GlobalFields.getListingTypeNameBySlug(listing.listing_data._case27_listing_type)\">\n            {{GlobalFields.getListingTypeNameBySlug(listing.listing_data._case27_listing_type)}}\n            <!-- reviews-->\n            <span class=\"reviewCounterLittleList\" *ngIf=\"!listing.listing_data._case27_review_count || listing.listing_data._case27_review_count == '0'\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">0 {{'REVIEWS' | translate}}</span>\n            <div class=\"reviewsLabelHeaderLittle\" *ngIf=\"listing.listing_data._case27_review_count && listing.listing_data._case27_review_count != '0'\">\n                <label class=\"reviewsBoxList\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                    <label class=\"reviewScoreLittleList\">{{getTruncatedDecimal(listing.listing_data._case27_average_rating)}}</label>\n                    <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"star\" class=\"starReviewList\" ></ion-icon>\n                    <label class=\"reviewCounterLittleList\">{{'ON' | translate}} {{listing.listing_data._case27_review_count}} {{'REVIEWS' | translate}}</label>\n                </label>\n            </div>\n        </div>\n        <p class=\"listingTitle\" style=\"margin:0px; line-height: 16px !important; font-size: 12px !important; max-height: 30px\" >{{listing.title.rendered}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i></p>\n        <p class=\"listingAddressLittle\" *ngIf=\"listing.listing_data\">{{listing.listing_data._job_location}}</p>\n\n        <!-- Sponsored -->\n        <div class=\"boltIconList\" *ngIf=\"listing.listing_data._featured\"><i class=\"fas fa-bolt\"></i></div>\n    </ion-col>\n</ion-row>\n\n\n<!-------------------- List type with new data structure (no _key and no listingData) -------------------->\n<ion-row *ngIf=\"type=='2b'\" [className]=\"'rowListType' + isWhiteBackgroundBoxShadow()\"  (click)=\"getListingDetails(listing)\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-col size=\"4\" style=\"padding: 0 !important;\">\n\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\">\n            <img-loader [src]=\"getListingImgNewStructureData(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"  [class.imgLoaderRTL]=\"GlobalFields.getLanguageLayout()=='rtl'\"></img-loader>\n        </div>\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\">\n            <div class=\"imgRTLList\" [style.background]=\"'url(' +getListingImgNewStructureData(listing)+')'\"></div>\n        </div>\n\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding-top: 10px;\">\n        <div class=\"listingType\" *ngIf=\"GlobalFields.getListingTypeNameBySlug(listing._case27_listing_type)\">\n            {{GlobalFields.getListingTypeNameBySlug(listing._case27_listing_type)}}\n            <!-- reviews-->\n            <span class=\"reviewCounterLittleList\" *ngIf=\"!listing._case27_review_count || listing._case27_review_count == '0'\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">0 {{'REVIEWS' | translate}}</span>\n            <div class=\"reviewsLabelHeaderLittle\" *ngIf=\"listing._case27_review_count && listing._case27_review_count != '0'\">\n                <label class=\"reviewsBoxList\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                    <label class=\"reviewScoreLittleList\">{{getTruncatedDecimal(listing._case27_average_rating)}}</label>\n                    <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"star\" class=\"starReviewList\" ></ion-icon>\n                    <label class=\"reviewCounterLittleList\">{{'ON' | translate}} {{listing._case27_review_count}} {{'REVIEWS' | translate}}</label>\n                </label>\n            </div>\n        </div>\n        <p class=\"listingTitle\" style=\"margin:0px; line-height: 16px !important; font-size: 12px !important; max-height: 30px\" >{{listing.name}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i></p>\n        <p class=\"listingAddressLittle\">{{listing.job_location}}</p>\n\n        <!-- Sponsored -->\n        <div class=\"boltIconList\" *ngIf=\"listing.featured\"><i class=\"fas fa-bolt\"></i></div>\n    </ion-col>\n</ion-row>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/listingPage.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/listingPage.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingPageListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header (swiperight)=\"closeModal()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar style=\"background: linear-gradient( to bottom, #00000057, transparent );\" >\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingLeftDiv': 'btnFloatingRightDiv'\">\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"closeModal()\">\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"arrow-back\"></ion-icon>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"arrow-forward\"></ion-icon>\n        <!--<span class=\"swipe\">{{ 'SWIPE' | translate }}</span> -->\n      </button>\n\n    </div>\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingRightDiv': 'btnFloatingLeftDiv'\" *ngIf=\"GlobalFields.selectedListing\">\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"share()\">\n        <i class=\"far fa-share-square\"></i>\n      </button>\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" *ngIf=\"GlobalFields.isLoggedIn\" (click)=\"writeReview()\">\n        <i class=\"far fa-comment-alt\"></i>\n      </button>\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" *ngIf=\"GlobalFields.isLoggedIn &&  GlobalFields.selectedListing\">\n        <i class=\"fas fa-heart\" [class.fullHearth]=\"GlobalFields.selectedListing.isBookmarked\" (click)=\"GlobalFields.selectedListing.isBookmarked ? undoBookmark() : doBookmark()\"></i>\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf=\"GlobalFields.selectedListing && iniFinished\" class=\"topContent\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n\n  <div style=\"position: fixed; height: 90%; z-index: 1; width: 10%\" (swiperight)=\"closeModal()\" (swipeleft)=\"closeModal()\"></div>\n\n<!------------ AIRBNB STYLE ------ ------>\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 1\">\n    <div swipe-vertical (swipedown)=\"closeModal()\" class=\"postImg\" [style.background]=\"getBackground(GlobalFields.selectedListing)\"></div>\n  </span>\n<!------------END AIRBNB STYLE ------------>\n\n<!------------ MYLISTING STYLE ------------>\n\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 2\">\n      <!--  <div class=\"postImgVertical\" [style.background]=\"getBackgroundDarker(GlobalFields.selectedListing)\"> -->\n        <div class=\"postImgVertical\">\n\n          <img-loader [src]=\"getBackgroundDarkerCached(GlobalFields.selectedListing)\" useImg [imgAttributes]=\"getImgCachedClass('listingPageImgMyListingCached')\"></img-loader>\n\n\n          <div class=\"titleInTheMiddle\">\n              <!--logo-->\n            <div *ngIf=\"GlobalFields.selectedListing.job_logo\" class=\"postLogoImgCentered\"\n                 [style.background]=\"'url(' + GlobalFields.selectedListing.job_logo + ')'\"></div>\n\n            <div *ngIf=\"!GlobalFields.selectedListing.job_logo\" class=\"postLogoImgCentered\"></div>\n\n            <!-- Title -->\n            <div class=\"\">{{GlobalFields.getListingTypeNameBySlug(GlobalFields.selectedListing._case27_listing_type)}}</div>\n            <div class=\"listingPageTitleWhite\">{{GlobalFields.selectedListing.name}} <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </div>\n\n            <!-- reviews numb-->\n            <br>\n            <span class=\"reviewCounterWhite\" *ngIf=\"!GlobalFields.selectedListing.review_count || GlobalFields.selectedListing.review_count == 0\">{{ 'NO_REVIEWS' | translate }}</span>\n            <div *ngIf=\"GlobalFields.selectedListing.review_count && GlobalFields.selectedListing.review_count > 0\">\n              <span *ngFor=\"let star of getStartsHtml(GlobalFields.selectedListing.rating)\">\n                <ion-icon name='star{{star}}'style='float: initial; font-size: 20px'></ion-icon>\n              </span>\n              <div class=\"reviewCounterWhite\"> {{GlobalFields.selectedListing.review_count}} {{ 'REVIEW_REVIEWS' | translate }}</div>\n            </div>\n\n            <br>\n            <!-- Tagline -->\n            <div class=\"listingPageSubtitleWhite\" *ngIf=\"GlobalFields.selectedListing.job_tagline\">\n              {{GlobalFields.selectedListing.job_tagline}}\n            </div>\n\n          </div>\n        </div>\n  </span>\n\n<!------------END MYLISTING STYLE ------------>\n\n\n\n\n  <ion-card-content style=\"padding: 5px; margin-bottom: 100px\">\n\n<!------------ AIRBNB STYLE ------------>\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 1\">\n      <!--logo-->\n      <div *ngIf=\"GlobalFields.selectedListing.job_logo\" class=\"postLogoImg\"\n           [style.background]=\"'url(' + GlobalFields.selectedListing.job_logo + ')'\"></div>\n      <div *ngIf=\"!GlobalFields.selectedListing.job_logo\" class=\"postLogoImgPlaceholder\"></div>\n\n      <!-- reviews numb-->\n      <div class=\"reviewsLabelHeader\">\n        <span class=\"reviewCounter\" *ngIf=\"!GlobalFields.selectedListing.review_count || GlobalFields.selectedListing.review_count == 0\">{{ 'NO_REVIEWS' | translate }}</span>\n        <div *ngIf=\"GlobalFields.selectedListing.review_count && GlobalFields.selectedListing.review_count > 0\">\n          <label class=\"reviewsBox\">\n            {{getTruncatedDecimal(GlobalFields.selectedListing.rating)}}\n            <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\n          </label>\n          <div class=\"reviewCounter\"> {{GlobalFields.selectedListing.review_count}} {{ 'REVIEW_REVIEWS' | translate }}</div>\n        </div>\n      </div>\n      <div class=\"listingPageType\">\n        {{GlobalFields.getListingTypeNameBySlug(GlobalFields.selectedListing._case27_listing_type)}}</div>\n      <br *ngIf=\"GlobalFields.selectedListing.job_logo\">\n      <p class=\"listingPageTitle\">{{GlobalFields.selectedListing.name}} <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\n      <div class=\"listingPageSubtitle\" *ngIf=\"GlobalFields.selectedListing.job_tagline\">\n        {{GlobalFields.selectedListing.job_tagline}}\n      </div>\n    </span>\n<!------------END AIRBNB STYLE ------------>\n\n    <div class=\"divisor\" *ngIf=\"showContactInfo() && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"showContactInfo() && (GlobalFields.selectedListing.job_location ||\n    GlobalFields.selectedListing.job_phone || GlobalFields.selectedListing.job_email ||  GlobalFields.selectedListing.job_email)\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-address-card faIconGoodPosition\"></i>\n        {{'CONTACT_INFO' | translate}}</b><br><br>\n      <ion-row *ngIf=\"GlobalFields.selectedListing.job_location\">\n        <div class=\" iconCircleBox\">\n          <i class=\"fas fa-map-marker-alt\"></i>\n        </div>\n          <p class=\"labelHeader\">\n              <a (click)=\"goToNavigatorAction(GlobalFields.selectedListing.job_location)\"  style=\"width: 100%; color: inherit; \">\n\n              {{GlobalFields.selectedListing.job_location}}\n            </a>\n          </p>\n      </ion-row>\n      <ion-row  *ngIf=\"GlobalFields.selectedListing.job_phone\">\n        <div class=\"iconCircleBox\">\n          <i class=\"fas fa-phone\"></i>\n        </div>\n          <p  class=\"labelHeader\" (click)=\"callNumberAction(GlobalFields.selectedListing.job_phone)\">{{GlobalFields.selectedListing.job_phone}}</p>\n      </ion-row>\n      <ion-row *ngIf=\"GlobalFields.selectedListing.job_email\">\n          <div class=\" iconCircleBox\">\n            <i class=\"fas fa-envelope\"></i>\n          </div>\n          <p class=\"labelHeader\">\n            <a (click)=\"openLink('mailto:' + GlobalFields.selectedListing.job_email + '?Subject=My%20Custom%20Subject')\" style=\"width: 100%; color: inherit; \">\n              {{GlobalFields.selectedListing.job_email}}\n            </a>\n          </p>\n      </ion-row>\n    </div>\n\n\n    <!-- Categories -->\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.pure_taxonomies && GlobalFields.selectedListing.pure_taxonomies.job_listing_category && GlobalFields.isWhiteBackground()\" ></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.selectedListing.pure_taxonomies && GlobalFields.selectedListing.pure_taxonomies.job_listing_category\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-bookmark faIconGoodPosition\"></i>\n        {{'CATEGORIES' | translate}}\n      </b>\n      <div  class=\"listCategories\">\n        <span *ngFor=\"let cat of GlobalFields.selectedListing.pure_taxonomies.job_listing_category\" style=\"font-size: 9pt\">\n          <i *ngIf=\"!cat.icon\" class=\"fas fa-bookmark iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          <i *ngIf=\"cat.icon\" class=\"{{cat.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          {{cat.name}}\n        </span>\n      </div>\n    </div>\n\n\n    <!-- Regions -->\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.pure_taxonomies && GlobalFields.selectedListing.pure_taxonomies.region && GlobalFields.selectedListing.pure_taxonomies.region.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.selectedListing.pure_taxonomies && GlobalFields.selectedListing.pure_taxonomies.region && GlobalFields.selectedListing.pure_taxonomies.region.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-map-marker faIconGoodPosition\"></i>\n        {{'REGIONS' | translate}}\n      </b>\n      <div class=\"listCategories\">\n          <span *ngFor=\"let region of GlobalFields.selectedListing.pure_taxonomies.region\"  style=\"font-size: 9pt\">\n            <i *ngIf=\"!region.icon\" class=\"fas fa-map-marker iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n            <i *ngIf=\"region.icon\" class=\"{{region.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n            {{region.name}}\n          </span>\n      </div>\n    </div>\n\n\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.job_description && GlobalFields.isWhiteBackground()\"></div>\n\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.selectedListing.job_description\">\n     <b class=\"descriptionTitle\">\n       <i class=\"fas fa-align-left faIconGoodPosition\"></i>\n       {{ 'DESCRIPTION' | translate }}</b><br>\n      <p class=\"description\" [innerHTML]=\"GlobalFields.selectedListing.job_description\"></p>\n    </div>\n\n    <!-- Gallery -->\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.job_gallery && GlobalFields.selectedListing.job_gallery.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\"  *ngIf=\"GlobalFields.selectedListing.job_gallery && GlobalFields.selectedListing.job_gallery.length>0\">\n     <!-- <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let media of GlobalFields.selectedListing.job_gallery; let i = index\">\n          <div *ngIf=\"media\" class=\"postImg\" [style.background]=\"'url(' +media+')'\" (click)=\"openImgPopover(media)\">\n          </div>\n        </ion-slide>\n      </ion-slides>-->\n\n      <div class=\"sliderWithCSS\">\n        <div *ngFor=\"let media of GlobalFields.selectedListing.job_gallery; let i = index\" class=\"galleryImg\" [style.background]=\"'url(' +media+')'\" (click)=\"openImgPopover(media)\">\n        </div>\n      </div>\n\n    </div>\n\n\n    <!-- Video -->\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.job_video_url && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.selectedListing.job_video_url && GlobalFields.selectedListing.job_video_url!=''\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fab fa-youtube faIconGoodPosition\"></i>\n        Video\n      </b>\n      <div class=\"labelCustomDetails\" style=\"text-align: right\">\n        <a *ngIf=\"!youtubeUrl\" (click)=\"openLink(GlobalFields.selectedListing.job_video_url)\"> Youtube <i class=\"fas fa-external-link-alt\"></i></a>\n        <iframe *ngIf=\"youtubeUrl\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n                sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\n                style=\"width: 100%; height: 100%; border: none\"\n                [src]=\"youtubeUrl\" frameborder=\"0\"></iframe>\n      </div>\n    </div>\n\n\n  <!-- Custom taxonomies -->\n    <span *ngIf=\"custTaxonomies && custTaxonomies.length>0\">\n      <span *ngFor=\"let custTax of custTaxonomies\">\n        <div class=\"divisor\" *ngIf=\"custTax.show_in_detail_view && GlobalFields.isWhiteBackground()\"></div>\n        <div *ngIf=\"custTax.show_in_detail_view\" [className]=\"getClassContainer()\">\n           <b class=\"descriptionTitle\">\n            {{custTax.label}}\n          </b><br>\n          <div  class=\"listCategories\">\n            <span *ngFor=\"let val of custTax.value\" style=\"font-size: 9pt\">\n              <i *ngIf=\"val.icon\" class=\"{{val.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              <i *ngIf=\"!val.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              {{val.name}}\n            </span>\n          </div>\n        </div>\n      </span>\n    </span>\n\n   <!-- Custom Related Listings -->\n    <span *ngIf=\"custRelatedListings && custRelatedListings.length>0\">\n      <span *ngFor=\"let custRelatedListing of custRelatedListings\">\n        <div class=\"divisor\"></div>\n        <div [className]=\"getClassContainer()\">\n          <b class=\"descriptionTitle\">\n            {{custRelatedListing.label}}\n          </b>\n          <span *ngFor=\"let listing of custRelatedListing.listings\">\n            <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></page-listingList>\n          </span>\n          <span *ngIf=\"custRelatedListing.listings.length==0\">\n            0 {{'LISTINGS' | translate}}\n          </span>\n        </div>\n      </span>\n    </span>\n\n\n    <!-- Table of custom fields -->\n    <div class=\"divisor\" *ngIf=\"existCustomFieldToBeShown && custFields && custFields.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\"  *ngIf=\"existCustomFieldToBeShown && custFields && custFields.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-grip-vertical faIconGoodPosition\"></i>\n        {{ 'DETAILS' | translate }} </b><br><br>\n      <span *ngFor=\"let field of custFields\" >\n        <ion-row  class=\"fontFamily tableRow\" *ngIf=\"fieldToBeShown(field.key) && getNiceString(field.key)\">\n          <!-- Not an Html field value-->\n          <ion-col col-4 style=\"text-transform: capitalize; padding-top: 10px;\" *ngIf=\"!isHTML(field.value)\">\n            <span *ngIf=\"!isHTML(getNiceString(field.key))\">{{getNiceString(field.key)}}</span>\n            <!-- If the label is an html-->\n            <div *ngIf=\"isHTML(getNiceString(field.key))\" class=\"labelHTML\"[innerHTML]=\"getNiceString(field.key)\"></div>\n          </ion-col>\n          <!-- not html -->\n          <ion-col col-8 style=\"text-align: right\" *ngIf=\"!isHTML(field.value)\">\n            <p class=\"labelCustomDetails\" *ngIf=\"!isArray(field.value) && getCustomFieldFromListingType(field.key) && getCustomFieldFromListingType(field.key).type != 'url'\">\n              {{getPrefixIfExist(field)}} {{field.value}} {{getSuffixIfExist(field)}}\n            </p>\n            <div class=\"labelCustomDetails\" *ngIf=\"getCustomFieldFromListingType(field.key) && getCustomFieldFromListingType(field.key).type=='url'\"><a (click)=\"openLink(field.value)\">{{field.value}}</a></div>\n            <div class=\"labelCustomDetails\" *ngIf=\"isArray(field.value)\">{{getStringFromArray(field.value)}}</div>\n          </ion-col>\n          <!-- Html field, full width-->\n          <ion-col *ngIf=\"isHTML(field.value)\"  col-12>\n            {{getNiceString(field.key)}} <br><br>\n            <div class=\"labelHTML\" *ngIf=\"isHTML(field.value) && !isURL(field.value)\" [innerHTML]=\"field.value\"></div>\n          </ion-col>\n        </ion-row>\n      </span>\n    </div>\n\n\n    <!-- Map -->\n\n    <div class=\"divisor\"  *ngIf=\"fieldToBeShown('job_location') && GlobalFields.selectedListing.job_location && showContactInfo() && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"fieldToBeShown('job_location') && GlobalFields.selectedListing.job_location && showContactInfo()\">\n      <a (click)=\"goToNavigatorAction(GlobalFields.selectedListing.job_location)\">\n        <b class=\"descriptionTitle\">\n          <i class=\"fas fa-map-marked-alt faIconGoodPosition\"></i>\n          {{ 'WHERE' | translate }}\n          <span style=\"float: right; font-weight: 200; font-size: small;\"> {{ 'GET_DIRECTIONS' | translate }}</span>\n        </b><br><br>\n        <img *ngIf=\"Constants.GoogleMapsKEY && Constants.GoogleMapsKEY != ''\" src=\"{{'https://maps.googleapis.com/maps/api/staticmap?center=' + GlobalFields.selectedListing.job_location +'&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:%7C' + GlobalFields.selectedListing.job_location +'&key=' + Constants.GoogleMapsKEY}}\">\n        <div style=\"text-align: right; color: #484848; font-size: small; margin-top: 10px\">{{GlobalFields.selectedListing.job_location}}</div>\n      </a>\n    </div>\n\n    <!-- Working hours -->\n    <div class=\"divisor\" *ngIf=\"fieldToBeShown('work_hours') && GlobalFields.selectedListing.work_hours && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"fieldToBeShown('work_hours') && GlobalFields.selectedListing.work_hours\"> <!-- Tabella custom fields -->\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-clock faIconGoodPosition\"></i>\n        {{ 'WORK_HOURS' | translate }} </b><br><br>\n      <ion-row *ngFor=\"let day of daysOfTheWeek; let i = index\" class=\"fontFamily tableRow\">\n        <ion-col col-4 style=\"text-transform: capitalize;\">\n          {{daysOfTheWeekLabel[i]}}\n        </ion-col>\n        <ion-col col-8 style=\"text-align: right\">\n          <span *ngIf=\"GlobalFields.selectedListing.work_hours[day].status == 'closed-all-day'\">{{ 'CLOSED_DAY' | translate }}</span>\n          <span *ngIf=\"GlobalFields.selectedListing.work_hours[day].status == 'by-appointment-only'\">By appointment only</span>\n          <span *ngIf=\"GlobalFields.selectedListing.work_hours[day].status == 'open-all-day'\">{{ 'OPEN_DAY' | translate }}</span>\n          <span *ngIf=\"GlobalFields.selectedListing.work_hours[day].status == 'enter-hours'\">\n            <div [innerHTML]=\"getWorkingHours(GlobalFields.selectedListing.work_hours[day])\"></div>\n           </span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"fontFamily tableRow\" *ngIf=\"GlobalFields.selectedListing.work_hours.timezone\">\n        <ion-col col-4 style=\"text-transform: capitalize;\">\n          {{'TIMEZONE' | translate}}\n        </ion-col>\n        <ion-col col-8 style=\"text-align: right\">\n          {{GlobalFields.selectedListing.work_hours.timezone}}\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- tags -->\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.pure_taxonomies && GlobalFields.selectedListing.pure_taxonomies.case27_job_listing_tags && GlobalFields.isWhiteBackground()\" ></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.selectedListing.pure_taxonomies && GlobalFields.selectedListing.pure_taxonomies.case27_job_listing_tags\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-hashtag faIconGoodPosition\"></i>\n        Tags:\n      </b>\n      <div  class=\"listCategories\">\n        <span *ngFor=\"let tag of GlobalFields.selectedListing.pure_taxonomies.case27_job_listing_tags\" style=\"font-size: 9pt\">\n          <i *ngIf=\"!tag.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          <i *ngIf=\"tag.icon\" class=\"{{tag.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          {{tag.name}}\n        </span>\n      </div>\n    </div>\n\n\n    <!-- Comments Bubble -->\n\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.comments && GlobalFields.selectedListing.comments.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.site_details.reviewStyle == 1 &&  GlobalFields.selectedListing.comments && GlobalFields.selectedListing.comments.length>0\" class=\"listCategories\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-star faIconGoodPosition\"></i>\n        {{ 'REVIEWS' | translate }}\n      </b>\n      <div style=\"max-height: 300px; overflow-y: auto;\">\n        <ion-grid *ngFor=\"let comm of GlobalFields.selectedListing.comments\">\n          <ion-row>\n            <div col-2 style=\"width: 60px\">\n              <img src=\"{{comm.avatar}}\" style=\"height: 50px; width: 50px; border-radius: 50px; vertical-align: middle;\">\n            </div>\n            <ion-col col-6 style=\"text-transform: capitalize;\">\n              <div class=\"listingTitle\">{{comm.author}}</div>\n              <div class=\"listingLocation\">{{comm.date}}</div>\n            </ion-col>\n            <ion-col col-4 style=\"text-align: right\">\n              <label class=\"reviewsBox\" style=\"position: inherit\">\n                {{getTruncatedDecimal(comm.rating)}}\n                <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\n              </label>\n              <ion-button *ngIf=\"comm.ratings\"  fill=\"clear\" class=\"btnRatings\"  (click)=\"openRatingsPopover($event, comm.ratings)\"><i class=\"fas fa-chevron-down\"></i></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"fontFamily\">\n            <ion-col col-12>\n              <div class=\"speech-bubble\">\n                <div class=\"commentBox\">{{comm.content}}</div>\n                <img class=\"imgComments\" *ngFor=\"let img of comm.gallery\" src=\"{{img}}\" (click)=\"openImgPopover(img)\">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <!-- Comments Card-->\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.site_details.reviewStyle != 1 &&  GlobalFields.selectedListing.comments && GlobalFields.selectedListing.comments.length>0\" class=\"listCategories\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-star faIconGoodPosition\"></i>\n        {{ 'REVIEWS' | translate }}\n      </b>\n      <div style=\"max-height: 300px; overflow-y: auto;\">\n        <ion-grid *ngFor=\"let comm of GlobalFields.selectedListing.comments\" class=\"cardReview\">\n          <ion-row>\n            <div col-2 style=\"width: 60px\">\n              <img src=\"{{comm.avatar}}\" style=\"height: 50px; width: 50px; border-radius: 50px; vertical-align: middle;\">\n            </div>\n            <ion-col col-6 style=\"text-transform: capitalize;\">\n              <div class=\"listingTitle\">{{comm.author}}</div>\n              <div class=\"listingLocation\">{{comm.date}}</div>\n            </ion-col>\n            <ion-col col-4 style=\"text-align: right\">\n              <label class=\"reviewsBox\" style=\"position: inherit\">\n                {{getTruncatedDecimal(comm.rating)}}\n                <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\n              </label>\n              <ion-button *ngIf=\"comm.ratings\"  fill=\"clear\" class=\"btnRatings\"  (click)=\"openRatingsPopover($event, comm.ratings)\"><i class=\"fas fa-chevron-down\"></i></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"fontFamily\">\n\n            <ion-col col-12>\n              <div>\n                <div class=\"commentBoxCard\">{{comm.content}}</div>\n              </div>\n              <img class=\"imgComments\" *ngFor=\"let img of comm.gallery\" src=\"{{img}}\" (click)=\"openImgPopover(img)\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <!-- Write a review button -->\n      <div style=\"width: 100%; margin-top: 10px; display: flex;\">\n        <button class=\"addReview\" *ngIf=\"GlobalFields.isLoggedIn\"  (click)=\"writeReview()\" >\n          <i class=\"far fa-star\"></i> {{'WRITE_REVIEW' | translate}}\n        </button>\n        <button class=\"addReview\" *ngIf=\"!GlobalFields.isLoggedIn\" (click)=\"goToLogin()\" >\n          <i class=\"far fa-star\"></i> {{'WRITE_REVIEW' | translate}}\n        </button>\n      </div>\n\n    </div>\n\n\n    <!-- Related listings -->\n    <div class=\"divisor\" *ngIf=\"GlobalFields.selectedListing.related_listing && GlobalFields.selectedListing.related_listing.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div  class=\"sectionContainer\" *ngIf=\"GlobalFields.selectedListing.related_listing && GlobalFields.selectedListing.related_listing.length>0\">\n      <b class=\"descriptionTitle\">\n        <!--<i class=\"far fa-star faIconGoodPosition\"></i>-->\n        {{'RELATED_LISTINGS' | translate}}\n      </b>\n      <div *ngFor=\"let listing of GlobalFields.selectedListing.related_listing;  let i = index\" style=\"margin:5px\">\n        <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></page-listingList>\n      </div>\n    </div>\n\n  </ion-card-content>\n\n\n</ion-content>\n\n\n\n\n\n\n<ion-footer style=\"background-color: white !important; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\" *ngIf=\"showContactInfo()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar  style=\"background-color: white !important;\">\n      <div *ngIf=\"GlobalFields.selectedListing && iniFinished\" style=\"display: inline-flex; width: 100%;list-style-type: none; padding-bottom:10px; white-space: nowrap; overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch;\">\n\n        <!-- Send message -->\n        <div *ngIf=\"GlobalFields.selectedListing.author && GlobalFields.site_details.showDirectMessageBtn\" (click)=\"goToMessage()\"\n             class=\"fastBtnsContainer\" style=\"color: #2196F3; border: none; font-size: 15pt; position: absolute; margin: -9px; height: 100%; z-index: 9; line-height: 60px; width: 50px; background-color: white; box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.07);\">\n          <i class=\"fas fa-paper-plane\"></i>\n        </div>\n\n        <!-- Fast btns -->\n        <span style=\"display: inline-flex;\" [class.fastBtnPaddingLeft]=\"GlobalFields.site_details.showDirectMessageBtn && GlobalFields.selectedListing.author && GlobalFields.getLanguageLayout() =='ltr'\" [class.fastBtnPaddingRight]=\"GlobalFields.site_details.showDirectMessageBtn && GlobalFields.selectedListing.author && GlobalFields.getLanguageLayout() =='rtl'\">\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFields.selectedListing.job_website\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#2ba3ff'\">\n            <a (click)=\"openLink(GlobalFields.selectedListing.job_website)\">\n              <i class=\"fas fa-globe\" style=\"color: #2ba3ff\"></i>\n              <!-- <img src=\"../../assets/imgs/social_icons/envelope.svg\" style=\"height: 40px;\"/> -->\n              <span [className]=\"getActionLabelClass()\"> Website</span>\n            </a>\n          </div>\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFields.selectedListing.job_email\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#FFC107'\">\n            <a (click)=\"openLink('mailto:' + GlobalFields.selectedListing.job_email + '?Subject=My%20Custom%20Subject')\">\n              <i class=\"fas fa-envelope\" style=\"color: #FFC107\"></i>\n              <span [className]=\"getActionLabelClass()\"> Email</span>\n            </a>\n          </div>\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFields.selectedListing.job_phone && GlobalFields.site_details.showWhatsappBtn\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#25d366'\">\n            <a (click)=\"openLink('https://wa.me/' + clearSpaces(GlobalFields.selectedListing.job_phone))\">\n              <i class=\"fab fa-whatsapp\" style=\"color: #25d366\"></i>\n              <!-- <img src=\"../../assets/imgs/social_icons/whatsapp.svg\" style=\"height: 40px;\"/> -->\n              <span [className]=\"getActionLabelClass()\"> WhatsApp</span>\n            </a>\n          </div>\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFields.selectedListing.job_phone\" (click)=\"callNumberAction(GlobalFields.selectedListing.job_phone)\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#E91E63'\">\n            <i class=\"fas fa-phone\" style=\"color: #E91E63\"></i>\n            <!-- <img src=\"../../assets/imgs/social_icons/phone-call.svg\" style=\"height: 40px;\"/> -->\n            <span [className]=\"getActionLabelClass()\"> {{'CALL' | translate}}</span>\n          </div>\n\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFields.selectedListing.job_location\" (click)=\"goToNavigatorAction(GlobalFields.selectedListing.job_location)\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#03A9F4'\">\n              <i class=\"fas fa-map-marker-alt\" style=\"color: #03A9F4\"></i>\n              <span  [className]=\"getActionLabelClass()\" > {{'GO' | translate}}</span>\n          </div>\n          <div *ngIf=\"GlobalFields.selectedListing.links\" style=\"display: flex;\">\n            <span  *ngFor=\"let link of GlobalFields.selectedListing.links\">\n              <div  [className]=\"getActionContainerClass()\"  *ngIf=\"link.network && link.network!=''\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor(link.network)\">\n                  <a (click)=\"openLink(link.url)\" [style.color]=\"link.color\">\n                   <i class=\"{{getLinkIcon(link.network)}}\"></i>\n                    <!-- <img src=\"../../assets/imgs/social_icons/{{getLinkIcon(link.network)}}.svg\" style=\"height: 40px;\"/> -->\n                   <span [className]=\"getActionLabelClass()\"> {{link.network}}</span>\n                  </a>\n              </div>\n            </span>\n          </div>\n        </span>\n\n\n\n      </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/modalWriteReview/modalWriteReview.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/modalWriteReview/modalWriteReview.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingPageModalWriteReviewModalWriteReviewHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n  <ion-toolbar  class=\"toolbarHeader\">\n    <div class=\"headerContainer\">\n      <div class=\"headerCol1\">\n        <ion-icon name=\"close\" style=\"font-size: 20px; margin: 3px;\" (click)=\"closeModal()\"></ion-icon>\n      </div>\n      <div class=\"headerCol2\">\n        <h3 style=\"margin: 0\">{{'WRITE_REVIEW' | translate}}</h3>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <div style=\"padding: 15px; margin-top: 15px\">\n\n    <!-- Stars chooser-->\n    <div *ngFor=\"let field of customFieldsStars\"  style=\"margin-bottom: 15px;\">\n      <ion-label position=\"floating\">{{field.label}}</ion-label><br>\n      <span *ngFor=\"let star of getStartsHtml(field.value); let i = index\">\n      <i [class]=\"star\" style='float: initial; font-size: 20px' (click)=\"field.value = i+1\"></i>\n    </span>\n    </div>\n\n    <div  style=\"margin-bottom: 15px;\">\n      <ion-label position=\"floating\">{{'YOUR_MESSAGE' | translate}}</ion-label>\n      <ion-textarea placeholder=\"{{'YOUR_MESSAGE' | translate}}\" [(ngModel)]=\"comment\" rows=\"6\" autoGrow=\"true\" spellcheck=\"true\"  style=\"border-bottom: solid 1px #d2d2d2; background-color: #f7f7f7; border-radius: 5px; padding: 5px; min-height: 100px;\"></ion-textarea>\n    </div>\n\n    <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\n    <br *ngIf=\"errorMgs\">\n    <br *ngIf=\"errorMgs\">\n\n\n    <ion-label position=\"floating\">{{'PHOTO' | translate}}</ion-label>\n    <div *ngIf=\"gallery\">\n      <span *ngFor=\"let img of gallery; let i = index\">\n        <img class=\"reviewImg\"  src=\"{{img.url}}\">\n        <i class=\"far fa-trash-alt\" style=\"color: #e43854\" (click)=\"deleteOldImg(i)\"></i>\n      </span>\n    </div>\n    <div style=\"display: inline\">\n      <div class=\"imgContainerInline\" *ngFor=\"let img of new_gallery; let i = index\">\n        <img [src]=\"img\" class=\"newReviewImg\">\n        <i class=\"far fa-trash-alt\" style=\"color: #e43854\" (click)=\"deleteNewImg(i)\"></i>\n      </div>\n    </div>\n\n    <br>\n    <ion-button (click)=\"openImagePicker()\"><i class=\"fas fa-plus\"></i></ion-button>\n    <br>\n\n    <br><br>\n\n    <button class=\"btnSendReview\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"postAReview()\">\n      <span style=\"color: white\"><i class=\"far fa-comment-alt\" style=\"margin-right: 15px; text-transform: unset;\"></i> {{'WRITE_REVIEW' | translate}}</span>\n    </button>\n\n    <br><br>\n  </div>\n</ion-content>\n\n<!--\n<ion-footer  style=\"display: inline-flex;  padding: 5px; padding-top: 10px; border-top: solid #dbdbdb 1px; padding-bottom: 25px; box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-button color=\"success\" style=\"width: 100%; border-radius:5px; font-size: 18px; margin-left: 5px; font-weight: 600;\" (click)=\"postAReview();\">\n    <i class=\"far fa-comment-alt\" style=\"margin-right: 15px; text-transform: unset;\"></i>   {{'WRITE_REVIEW' | translate}}\n  </ion-button>\n</ion-footer>\n\n-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/popoverImg/popoverImg.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/popoverImg/popoverImg.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingPagePopoverImgPopoverImgHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100%; width: 100%;\">\n    <img src=\"{{GlobalFields.selectedImg}}\" style=\"width: 100%; height: auto; margin-bottom: -10px\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/popoverRatings/popoverRatings.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/popoverRatings/popoverRatings.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingPagePopoverRatingsPopoverRatingsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Custom ratings table -->\n<div *ngIf=\"GlobalFields.customRatingsSelected\" style=\"padding: 5px; background-color: white;\">\n  <span *ngFor=\"let rate of GlobalFields.customRatingsSelected\" >\n    <ion-row  class=\"fontFamily tableRowThinner\">\n      <ion-col col-4 style=\"text-transform: capitalize;\">\n        {{getNiceStringFromKey(rate.key)}}\n      </ion-col>\n      <ion-col col-8 style=\"text-align: right\">\n        <label class=\"reviewsBox\" style=\"position: inherit\">\n          {{getTruncatedDecimal(rate.value)}}\n        </label>\n        </ion-col>\n    </ion-row>\n  </span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoadingLoadingHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content *ngIf=\"!softLoading\" style=\"height: 100%; width: 100%; position: absolute; z-index: 99999; background-color: white\">\n\n\n  <div style=\"height: 100%; width: 100%; background-color: white; overflow-y: hidden\">\n\n\n    <div *ngIf=\"!GlobalFields.errorIni\">\n      <ion-list style=\"padding: 15px\">\n        <div *ngFor=\"let items of [1,2,3]\">\n          <ion-thumbnail style=\"width: 100%; height: 200px;\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n          <br>\n        </div>\n      </ion-list>\n    </div>\n\n\n    <div *ngIf=\"GlobalFields.errorIni\"\n         style=\"position: fixed; text-align: center; margin: auto; bottom: 10%; width: 100%;\"> Server not available, try\n      again <br>\n      <ion-button color=\"success\" (click)=\"retryInit()\"><i class=\"fas fa-redo-alt\" style=\"margin-right: 5px\"></i>\n        Refresh\n      </ion-button>\n      <br><br>\n      <span style=\"color: red; font-size: smaller\">{{GlobalFields.errorString}}</span>\n    </div>\n\n  </div>\n\n  <!-- <div class=\"cssload-spin-box\"></div>-->\n\n\n</ion-content>\n\n<ion-content *ngIf=\"softLoading\" style=\"height: 100%; width: 100%; z-index: 99999;\">\n\n  <div style=\"height: 100%; width: 100%; background-color: rgba(189,189,189,0.6)\">\n\n  </div>\n  <div class=\"cssload-spin-box\"></div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/loginComponent/loginComponent.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/loginComponent/loginComponent.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageLoginComponentLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"successMsg\"\n     style=\"    text-align: center; color: #51e986; padding: 5px; border: solid 2px; border-radius: 5px; margin: 10px;\">\n    <i class=\"far fa-check-circle\" style=\"font-size: 20pt; color: #51e986\"></i>\n    <br>\n\n    {{'PSW_RECOVERY_MSG' | translate}}\n</div>\n<!-- Login -->\n\n<!-- Login -->\n<span *ngIf=\"tabToShown == 0 && GlobalFields.site_details\">\n  <ion-label class=\"nameLabel\">\n    {{'LOGIN' | translate}}\n  </ion-label>\n\n  <button class=\"socialLoginBtn\" *ngIf=\"GlobalFields.site_details.socialLoginGoogleEnabled\" (click)=\"socialLogin(2)\" style=\"color:#DB4437;\">\n    <i class=\"fab fa-google\"></i> Google login\n  </button>\n\n  <button class=\"socialLoginBtn\" *ngIf=\"GlobalFields.site_details.socialLoginFacebookEnabled\" (click)=\"socialLogin(1)\" style=\"background-color: #4267B2; color: white\">\n    <i class=\"fab fa-facebook\"></i> Facebook login\n  </button>\n\n  <button class=\"socialLoginBtn\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\" (click)=\"tabToShown=1\">\n    <i class=\"fas fa-envelope\"></i> {{'LOGIN_WITH_YOUR_EMAIL' | translate}}\n  </button>\n\n  <br>\n  <br *ngIf=\"errorMgs\">\n  <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\n  <br *ngIf=\"errorMgs\">\n  <br *ngIf=\"errorMgs\">\n\n</span>\n\n\n\n\n<span *ngIf=\"tabToShown == 1\">\n  <ion-label class=\"nameLabel\">\n    <button class=\"loginBackBtn\" (click)=\"tabToShown=0\" *ngIf=\"GlobalFields.site_details.socialLoginGoogleEnabled || GlobalFields.site_details.socialLoginFacebookEnabled\">\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"arrow-back\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"arrow-forward\"></ion-icon>\n    </button>\n    {{'LOGIN' | translate}}\n  </ion-label>\n  <br>\n  <div *ngIf=\"Constants.url.includes('mylistingdemo.danceup.dance')\" style=\"font-size: small; margin-top: 10px\">Username:<i> prova </i><br> Password:<i> password </i></div>\n  <ion-item lines=\"none\">\n      <ion-label position=\"floating\" style=\"color: white;\"> Username / Email</ion-label>\n      <ion-input style=\"color: #dfa315 !important;\" [(ngModel)]=\"GlobalFields.username\" [inputmode]=\"'text'\" type=\"text\"  clearInput></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label position=\"floating\" style=\"color: white;\">{{'PASSWORD' | translate}}</ion-label>\n    <ion-input style=\"color: #dfa315 !important;\" [(ngModel)]=\"GlobalFields.password\" [inputmode]=\"'password'\" type=\"password\" clearInput></ion-input>\n  </ion-item>\n  <br>\n  <br *ngIf=\"errorMgs\">\n  <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\n  <br *ngIf=\"errorMgs\">\n  <br *ngIf=\"errorMgs\">\n  <button class=\"btnLogin\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"login()\">\n    <span style=\"color: white\">{{'SIGN_IN' | translate}}</span>\n  </button>\n  <br><br>\n  <div>\n    <!--<a (click)=\"openLink(Constants.url + GlobalFields.site_details.relativeRegistrationUrl)\"><i class=\"far fa-user\" style=\"margin-right: 10px; color: #c7cdcf\"></i> {{'NO_ACCOUNT' | translate}} </a> -->\n    <a (click)=\"tabToShown = 2; errorMgs = undefined\"><i class=\"far fa-user\"\n                                                         style=\"margin-right: 10px; color: #c7cdcf\"></i> {{'NO_ACCOUNT' | translate}} </a>\n  </div>\n  <br>\n  <div>\n    <!--<a (click)=\"openLink(Constants.url  + GlobalFields.site_details.relativeForgotPasswordUrl)\"><i class=\"fas fa-lock\" style=\"margin-right: 10px; color: #c7cdcf\"></i> {{'FORGOT_PASSWORD' | translate}}</a>-->\n    <a (click)=\"tabToShown = 3; errorMgs = undefined\"><i class=\"fas fa-lock\"\n                                                         style=\"margin-right: 10px; color: #c7cdcf\"></i> {{'FORGOT_PASSWORD' | translate}}</a>\n  </div>\n</span>\n\n<!-- Registration-->\n<span *ngIf=\"tabToShown == 2\">\n        <ion-label class=\"nameLabel\"\n                   [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"> {{'SIGN_UP' | translate}}</ion-label>\n        <br><br>\n        <div>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input placeholder=\"Email\" [(ngModel)]=\"GlobalFields.username\" [inputmode]=\"'text'\" type=\"text\"\n                     style=\"margin-left: 10px; width: calc(100% - 10px); color: #dfa315 !important;\"></ion-input>\n        </div>\n        <br>\n        <div>\n          <ion-label position=\"floating\">{{'PASSWORD' | translate}}</ion-label>\n          <ion-input placeholder=\"{{'PASSWORD' | translate}}\" [(ngModel)]=\"GlobalFields.password\"\n                     [inputmode]=\"'password'\" type=\"password\"\n                     style=\"margin-left: 10px; width: calc(100% - 10px); color: #dfa315 !important;\"></ion-input>\n        </div>\n        <br>\n        <br>\n        <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\n        <br *ngIf=\"errorMgs\">\n        <br *ngIf=\"errorMgs\">\n        <button class=\"btnLogin\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"registration()\">\n          <span style=\"color: white\">{{'SIGN_UP' | translate}}</span>\n        </button>\n        <br><br>\n        <div>\n          <a (click)=\"tabToShown = 1; errorMgs = undefined\"><i class=\"far fa-user\"\n                                                               style=\"margin-right: 10px; color: #c7cdcf\"></i> {{'LOGIN' | translate}} </a>\n        </div>\n        <br>\n    </span>\n\n\n<!-- Password recovery -->\n<span *ngIf=\"tabToShown == 3\">\n        <ion-label class=\"nameLabel\"\n                   [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"> {{'PSW_RECOVERY' | translate}}</ion-label>\n        <br><br>\n        <div>\n          <ion-label position=\"floating\">{{'USERNAME' | translate}}/Email</ion-label>\n          <ion-input placeholder=\"Email\" [(ngModel)]=\"GlobalFields.username\" [inputmode]=\"'text'\" type=\"text\"\n                     style=\"margin-left: 10px; width: calc(100% - 10px)\"></ion-input>\n        </div>\n        <br>\n        <br>\n        <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\n        <br *ngIf=\"errorMgs\">\n        <br *ngIf=\"errorMgs\">\n        <button class=\"btnLogin\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"pswRecovery()\">\n          <span style=\"color: white\">{{'SEND' | translate}}</span>\n        </button>\n        <br><br>\n        <div>\n          <a (click)=\"tabToShown = 1; errorMgs = undefined\"><i class=\"far fa-user\"\n                                                               style=\"margin-right: 10px; color: #c7cdcf\"></i> {{'LOGIN' | translate}} </a>\n        </div>\n        <br>\n    </span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/filterModal/filterModal.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/filterModal/filterModal.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchPageFilterModalFilterModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n  <ion-toolbar *ngIf=\"GlobalFields.listingTypesDetails\">\n    <ion-row class=\"filters\">\n      <div style=\"background-color: white; position: fixed; padding: 10px; text-align: center; width: 30px; height: 100%;\">\n        <ion-icon name=\"close\" style=\"font-size: 20px; margin-top: -2px;\" (click)=\"closeModal()\"></ion-icon>\n      </div>\n      <ul col-12 style=\"padding: 0; margin: 0; margin-bottom: -5px; margin-left: 40px; display: inline-block; display:inline; display: inline-flex; height: fit-content; width: 100%; overflow: scroll;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <li *ngFor=\"let type of GlobalFields.listingTypesDetails\" dir=\"{{GlobalFields.getLanguageLayout()}}\"\n            [class]=\"'typesListHorizontal' + isSelected(type.ID)\"\n            [ngStyle]=\"isSelectedGetPrimaryColor(type.ID)\"\n            (click)=\"GlobalFields.filtersSearch.selectedType = type.ID; clearFilters()\">\n          <span *ngIf=\"type.post_title\">{{type.post_title}}</span>\n        </li>\n      </ul>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content *ngIf=\"GlobalFields.selectedTypeDetail\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n  <div style=\"padding: 15px; height: 100%; width: 100%; margin-top: 10px; margin-bottom: 130px\">\n\n    <div *ngFor=\"let filter of GlobalFields.selectedTypeDetail.case27_listing_type_search_page.advanced.facets\"  class=\"filterSection\">\n\n\n\n      <div *ngIf=\"filter.type == 'location'\" >\n            <i class=\"fas fa-map-marker-alt iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n            <i *ngIf=\"GlobalFields.filtersSearch.location != GlobalFields.address\" (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: right; margin-top: 40px;\"></i>\n            <i *ngIf=\"GlobalFields.filtersSearch.location == GlobalFields.address\"  (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: right; margin-top: 40px;\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n          <!--  <ion-input clearInput placeholder=\"{{filter.placeholder}}\"  [(ngModel)]=\"GlobalFields.filtersSearch.location\" ></ion-input> -->\n            <div style=\"width: 90%; margin: auto;\">\n              <googleMapsAutocomplete [value]=\"GlobalFields.filtersSearch.location\" [placeholder]=\"filter.placeholder\" (addressName)=\"GlobalFields.filtersSearch.location=$event\"></googleMapsAutocomplete>\n            </div>\n      </div>\n\n      <span *ngIf=\"(filter.type == 'wp-search' || filter.type == 'text' ) && !filter.show_field\">\n            <i class=\"fas fa-search iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n            <ion-input clearInput placeholder=\"{{filter.placeholder}}\"  [(ngModel)]=\"GlobalFields.filtersSearch.search_keywords\"></ion-input>\n      </span>\n\n      <span *ngIf=\"(filter.type == 'wp-search' || filter.type == 'text' ) && filter.show_field=='job_title'\">\n            <i class=\"fas fa-search iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n            <ion-input clearInput placeholder=\"{{filter.placeholder}}\"  [(ngModel)]=\"GlobalFields.filtersSearch.name\"></ion-input>\n      </span>\n\n\n      <span *ngIf=\"filter.type == 'date'\">\n        <i class=\"fas fa-calendar-alt iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n        <ion-item style=\"\">\n          <ion-datetime display-format=\"MMM DD, YYYY HH:mm\" placeholder=\"{{'SELECT' | translate}}\" [(ngModel)]=\"GlobalFields.filtersSearch.date\"></ion-datetime>\n        </ion-item>\n      </span>\n\n      <span *ngIf=\"filter.type == 'dropdown' || filter.type == 'checkboxes'\">\n\n        <!-- categories-->\n        <div *ngIf=\"filter.show_field == 'job_category' && GlobalFields.selectedTypeDetail.categories\">\n          <i class=\"fas fa-tasks iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n          <i *ngIf=\"GlobalFields.filtersSearch.categories && GlobalFields.filtersSearch.categories.length > 0\" (click)=\"GlobalFields.filtersSearch.categories = []\" class=\"far fa-trash-alt rightClearBtn\"></i>\n          <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\n            <ion-select multiple=\"true\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFields.filtersSearch.categories\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringCategories()}}\">\n              <ion-select-option  *ngFor=\"let c of GlobalFields.selectedTypeDetail.categories\" value=\"{{c.name}}\">{{c.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <!-- region-->\n        <div *ngIf=\"filter.show_field == 'region'\">\n          <i class=\"fas fa-tasks iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n          <i *ngIf=\"GlobalFields.filtersSearch.region\" (click)=\"GlobalFields.filtersSearch.region = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\n          <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\n            <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\" [(ngModel)]=\"GlobalFields.filtersSearch.region\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringRegions()}}\">\n              <ion-select-option  *ngFor=\"let r of GlobalFields.regions\" value=\"{{r.name}}\">{{r.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <!-- tags -->\n        <div  *ngIf=\"filter.show_field == 'job_tags'\">\n         <i class=\"far fa-check-circle iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n          <ion-item *ngFor=\"let t of GlobalFields.filtersSearch.tags\" style=\" font-size: 10pt; padding: 0; margin-bottom: -11px; background-color: transparent;\">\n            <ion-label>{{t.val.name}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"t.isChecked\" ></ion-checkbox>\n          </ion-item>\n        </div>\n\n\n      </span>\n\n\n      <!--Custom fields Dropdowns -->\n      <span *ngIf=\"(filter.type == 'dropdown' || filter.type == 'checkboxes' ) && filter.show_field != 'job_tags' && filter.show_field != 'job_category' && filter.show_field != 'job_region' && filter.show_field != 'region'\">\n\n        <!-- Dropdown Custom taxonomies fields -->\n        <div *ngIf=\"!GlobalFields.keyIsACustomField(filter.show_field) && GlobalFields.getCustomTaxonomiesByKey(filter.show_field)\">\n          <i class=\"fas fa-tasks iconsChoices\"></i>  <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n          <i *ngIf=\"GlobalFields.getCustomTaxonomiesByKey(filter.show_field).selected\" (click)=\"GlobalFields.getCustomTaxonomiesByKey(filter.show_field).selected = []\" class=\"far fa-trash-alt rightClearBtn\"></i>\n          <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\n            <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"   [(ngModel)]=\"GlobalFields.getCustomTaxonomiesByKey(filter.show_field).selected\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringTaxonomies(filter.show_field)}}\">\n              <ion-select-option  *ngFor=\"let t of GlobalFields.getCustomTaxonomiesByKey(filter.show_field).options\" value=\"{{t.name}}\">{{t.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <!-- Dropdown Custom fields fields -->\n        <div *ngIf=\"GlobalFields.keyIsACustomField(filter.show_field) && GlobalFields.getCustomFieldsByKey(filter.show_field)\">\n          <i class=\"fas fa-tasks iconsChoices\"></i>  <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n          <i *ngIf=\"GlobalFields.getCustomFieldsByKey(filter.show_field).selected\" (click)=\"GlobalFields.getCustomFieldsByKey(filter.show_field).selected = []\" class=\"far fa-trash-alt rightClearBtn\"></i>\n          <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\n            <ion-select  [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"   [(ngModel)]=\"GlobalFields.getCustomFieldsByKey(filter.show_field).selected\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringCustomFields(filter.show_field)}}\">\n              <ion-select-option  *ngFor=\"let c of GlobalFields.getCustomFieldsByKey(filter.show_field).options\" value=\"{{c.label}}\">{{c.label}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n      </span>\n\n      <!-- Text Custom text fields -->\n      <span *ngIf=\"filter.show_field && (filter.type == 'wp-search' || filter.type == 'text' ) && GlobalFields.getCustomTextFieldsByKey(filter.show_field)\">\n            <i class=\"fas fa-search iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n            <ion-input clearInput placeholder=\"{{filter.placeholder}}\" [(ngModel)]=\"GlobalFields.getCustomTextFieldsByKey(filter.show_field).selected\"></ion-input>\n      </span>\n\n\n\n      <!-- proximity -->\n      <span *ngIf=\"filter.type == 'proximity'\">\n        <i class=\"far fa-dot-circle iconsChoices\"> </i> <ion-label class=\"titleSectionFilter\">{{filter.label}}</ion-label>\n        {{GlobalFields.filtersSearch.range}} <span *ngIf=\"GlobalFields.getUnitRangeProximity('advanced')=='imperial'\">Miles</span> <span *ngIf=\"GlobalFields.getUnitRangeProximity('advanced')!='imperial'\">Km</span>\n        <ion-item>\n          <ion-range [(ngModel)]=\"GlobalFields.filtersSearch.range\"\n                     min=\"{{GlobalFields.getMinimumProximity('advanced')}}\"\n                     max=\"{{GlobalFields.getMaximumProximity('advanced')}}\"\n                     step=\"{{GlobalFields.getStepProximity('advanced')}}\"\n                     color=\"secondary\" pin=\"true\"></ion-range>\n        </ion-item>\n      </span>\n\n\n    </div>\n\n\n    <div class=\"filterSection\" style=\"text-align: right; color: #f13224;\" (click)=\"clearFilters()\"><i class=\"far fa-trash-alt\"></i> Clear the filter</div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n<ion-footer style=\"display: inline-flex; padding: 5px; padding-bottom: 20px; background-color: white; border: none;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <button class=\"buttonSearch\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\" (click)=\"getFilteredListingsFirstTime(); closeModal()\">\n    <ion-icon style=\"margin-bottom:-3px;\" name=\"search\"></ion-icon> <ion-text style=\"margin-left: 8px;\">{{'SHOW_RESULTS' | translate}}</ion-text>\n  </button>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/mapModal/mapModal.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/mapModal/mapModal.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchPageMapModalMapModalHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ionHeaderHeader\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n    <ion-toolbar  class=\"toolbarHeader\">\n        <div class=\"headerContainer\">\n            <div class=\"headerCol1\" (click)=\"closeModal()\">\n                <i class=\"fas fa-times\"  ></i>\n            </div>\n            <div class=\"headerCol2\">\n                <span>{{'MAP' | translate}}</span>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content  style=\"overflow: hidden;\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n\n    <!-- ***************** Google Maps ***************** -->\n\n    <!-- https://github.com/SebastianM/angular-google-maps -->\n    <!-- https://www.npmjs.com/package/agm-direction -->\n    <span *ngIf=\"GlobalFields.site_details.mapType == 1\">\n        <agm-map *ngIf=\"!loading\"\n                 [latitude]=\"myLat\"\n                 [longitude]=\"myLng\"\n                 [zoom]=\"currentZoom\"\n                 [zoomControl]=\"false\"\n                 [streetViewControl]=\"false\"\n                 [clickableIcons]=\"false\"\n                 (centerChange)=\"centerChanged($event)\"\n                 [gestureHandling]=\"'greedy'\">\n\n            <agm-marker *ngIf=\"GlobalFields.lat && GlobalFields.long\"\n                    [latitude]=\"GlobalFields.lat\"\n                    [longitude]=\"GlobalFields.long\"\n                    [iconUrl]= \"{url: '../../../assets/imgs/street-view.png', labelOrigin:{x:22.5,y:20}, scaledSize: {height: 40, width: 40}}\">\n\n               <!-- <agm-info-window>\n                    <ion-button color=\"primary\">Search nearby listings</ion-button>\n                </agm-info-window>\n                -->\n            </agm-marker>\n\n           <!-- <agm-marker\n                    *ngFor=\"let m of positions; let i = index\"\n                    (markerClick)=\"clickedMarker(m)\"\n                    [latitude]=\"m.lat\"\n                    [longitude]=\"m.lng\"\n                    [markerDraggable]=\"m.draggable\"\n                    [label]=\"m.labelOptions\"\n                    [iconUrl]=\"m.iconUrl\">\n\n                <agm-info-window [isOpen]=\"m.listing == selectedListing\">\n                    <div style=\"width: 100%;\" *ngIf=\"selectedListing!=undefined\">\n                        <page-listingList [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"false\"></page-listingList>\n                    </div>\n                </agm-info-window>\n\n            </agm-marker>\n\n            -->\n\n             <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n               <agm-overlay\n                       *ngFor=\"let m of positions; let i = index\"\n                       (markerClick)=\"clickedMarker(m)\"\n                       [latitude]=\"m.lat\"\n                       [longitude]=\"m.lng\">\n\n                    <!-- Custom pin HTML-->\n                    <div class=\"imgMapPin\"><img [src]=\"m.iconImgUrlHtml\"><i class=\"iconMapPin {{m.iconNameHtml}}\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"></i></div>\n\n                   <!-- Window opened on click-->\n                    <agm-info-window [isOpen]=\"m.listing == selectedListing\">\n                        <div style=\"width: 100%;\" *ngIf=\"selectedListing!=undefined\">\n                            <page-listingList [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"false\"></page-listingList>\n                        </div>\n                    </agm-info-window>\n\n               </agm-overlay>\n              </agm-marker-cluster>\n\n\n\n            <!--  <agm-direction *ngFor=\"let pos of positions\" [origin]=\"pos\" [destination]=\"pos\"></agm-direction> -->\n        </agm-map>\n    </span>\n\n\n    <!-- ***************** Open Street Maps ***************** -->\n\n    <span *ngIf=\"GlobalFields.site_details.mapType == 2\">\n        <div id=\"map\" style=\"width:100%; height:100%;\"></div>\n\n\n        <div *ngIf=\"showSelected\" class=\"listingCard\">\n            <page-listingList [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"true\"></page-listingList>\n        </div>\n\n    </span>\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/searchPage.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/searchPage.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchPageSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Lista tipi listing -->\n<ion-header translucent=\"true\">\n  <ion-toolbar *ngIf=\"GlobalFields.listingTypesDetails\">\n    <!-- If Side menu is used-->\n    <ion-buttons  slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"filters\">\n      <ul col-12 style=\"padding: 0;margin: 0; margin-bottom: -5px; display: inline-block; display:inline; display: inline-flex; height: fit-content; width: 100%; overflow: scroll;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <li *ngFor=\"let type of GlobalFields.listingTypesDetails\" dir=\"{{GlobalFields.getLanguageLayout()}}\"\n            [class]=\"'typesListHorizontal' + isSelected(type.ID)\"\n            [ngStyle]=\"isSelectedGetPrimaryColor(type.ID)\"\n            (click)=\"GlobalFields.filtersSearch.selectedType = type.ID; selectListingType(true)\">\n          <span *ngIf=\"type.post_title\">{{type.post_title}}</span>\n        </li>\n      </ul>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content class=\"cards-bg social-cards\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\"> -->\n<ion-content class=\"cards-bg social-cards\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJsonSearchPage()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <!-- Filter/Map buttons Float Buttons Style-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==1\">\n    <ion-fab-button class=\"filterDefaultBtnFiltersContainer\"   color=\"primary\" (click)=\"openFilter()\">\n      <i class=\"fas fa-filter\" style=\"font-size: 22px; color: white;\"></i>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==1\">\n    <ion-fab-button class=\"filterDefaultBtnFiltersContainer\"  color=\"primary\" (click)=\"openMap()\" [disabled]=\"!GlobalFields.filteredListings || !(GlobalFields.filteredListings.length > 0)\">\n      <i class=\"fas fa-map-marked-alt\" style=\"font-size: 22px; color: white;\"></i>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" slot=\"fixed\" style=\"left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\">\n    <ion-fab-button color=\"medium\" class=\"tripBtnFiltersContainer\" [class.tripBtnFiltersContainerAndroid]=\"isAndroid\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==2\">\n      <button (click)=\"openMap()\" style=\"border-radius: 50px 0 0 50px; border-right: 1px solid #eeeeee !important;\" [disabled]=\"!GlobalFields.filteredListings || !(GlobalFields.filteredListings.length > 0)\"><i class=\"fas fa-map-marked-alt\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'MAP' | translate}}</button>\n      <button (click)=\"openFilter()\" style=\"border-radius: 0 50px 50px 0;\"><i class=\"fas fa-filter\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'FILTERS' | translate}}</button>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Filter/Map buttons TripAdvisor Style\n  <div class=\"tripBtnFiltersContainer\" [class.tripBtnFiltersContainerAndroid]=\"isAndroid\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==2\">\n    <button (click)=\"openMap()\" style=\"border-radius: 50px 0 0 50px; border-right: 1px solid #eeeeee !important;\"><i class=\"fas fa-map-marked-alt\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'MAP' | translate}}</button>\n    <button (click)=\"openFilter()\" style=\"border-radius: 0 50px 50px 0;\"><i class=\"fas fa-filter\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'FILTERS' | translate}}</button>\n  </div>\n  -->\n\n  <ion-row>\n\n    <ion-row style=\"width: 100%;\">\n      <ion-col col-6 style=\"float: left\">\n        <ion-item *ngIf=\"GlobalFields.selectedTypeDetail\">\n         <ion-select interface=\"popover\" [(ngModel)]=\"GlobalFields.filtersSearch.order\" style=\"max-width: 100%;\"\n                     [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"\n                     (ionChange)=\"selectListingType(false)\">\n           <ion-label>asd <ion-icon name=\"list\" style=\"font-size: 24px !important; color: #484848 !important; font-weight: bolder; position: relative; top: 3px;\"></ion-icon></ion-label>\n          <ion-select-option *ngFor=\"let order of GlobalFields.selectedTypeDetail.case27_listing_type_search_page.order.options\"\n                  value=\"{{order.key}}\">{{order.label}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      </ion-col>\n      <ion-col col-6 style=\"float: right\">\n        <button class=\"btnOrderSearch\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <span *ngIf=\"!GlobalFields.filtersSearch.countListings && GlobalFields.filtersSearch.countListings != 0\"></span>\n          <span *ngIf=\"GlobalFields.filtersSearch.countListings == 0\">{{'NO_RESULTS' | translate}}</span>\n          <span *ngIf=\"GlobalFields.filtersSearch.countListings && GlobalFields.filtersSearch.countListings > 0\"> {{GlobalFields.filtersSearch.countListings}} {{'RESULTS' | translate}}</span>\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- List of results-->\n    <ion-row *ngIf=\"GlobalFields.filteredListings && GlobalFields.filteredListings.length>0\" style=\"width: 100%; margin-bottom: 100px;\">\n\n      <ion-col col-12 style=\"padding: 10px;\">\n        <div *ngFor=\"let listing of GlobalFields.filteredListings;  let i = index\" style=\"margin-bottom: 15px;\">\n          <page-listingList [listing]=\"listing\" [type]=\"getListType(GlobalFields.selectedTypeDetail.case27_listing_type_result_template.template)\" [search]=\"true\"></page-listingList>\n        </div>\n\n        <!-- <div style=\"width: 100%; text-align: center;\" *ngIf=\"!GlobalFields.filtersSearch.noMorePage && !loadingMoreData\" (click)=\"loadData()\">\n          <ion-icon name=\"refresh\"></ion-icon> {{'LOAD_MORE' | translate}}\n        </div>\n        <div style=\"width: 100%; text-align: center;\" *ngIf=\"loadingMoreData\">\n          <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>\n        </div>-->\n\n        <div style=\"text-align: center; width: 100%; height: 300px; color: #afafaf; padding-top: 100px;\" *ngIf=\"loadingMoreData\">\n          <div style=\"margin-bottom: -10px\">\n            Loading more\n          </div>\n          <div class=\"lds-ellipsis\" ><div></div><div></div><div></div><div></div></div>\n        </div>\n\n         <ion-infinite-scroll *ngIf=\"!this.loadingMoreData && !GlobalFields.filtersSearch.noMorePage\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n              <ion-infinite-scroll-content\n                loadingSpinner=\"dots\"\n                loadingText=\"{{'LOAD_MORE' | translate}}\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"GlobalFields.filteredListings && GlobalFields.filteredListings.length==0\" style=\"width: 100%;\">\n      <ion-col>\n        <div *ngIf=\"GlobalFields.filtersSearch.location\" class=\"noResults\">\n          {{'NO_NEAR_RESULTS' | translate}} <i>{{GlobalFields.filtersSearch.location}}</i> <br><br> {{'EDIT_FILTER_RETRY' | translate}}.\n        </div>\n        <div *ngIf=\"!GlobalFields.filtersSearch.location\" class=\"noResults\">\n         {{'NO_RESULTS' | translate}}. <br><br> {{'EDIT_FILTER_RETRY' | translate}}.\n        </div>\n\n        <ion-button expand=\"full\" color=\"primary\"  (click)=\"openFilter()\"><ion-icon name=\"switch\"></ion-icon> {{'FILTERS' | translate}}</ion-button>\n\n        <div (click)=\"clearFilters()\" style=\"padding: 15px; text-align: center; color: #F44336;\">\n          <i class=\"fas fa-trash\"></i> Clear filters\n        </div>\n\n\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"width: 100%; text-align: center; background-color: transparent; position: fixed; top: 50%;\" *ngIf=\"GlobalFields.filteredListings == undefined\">\n      <div class=\"lds-ellipsis\" ><div></div><div></div><div></div><div></div></div>\n    </div>\n\n\n  </ion-row>\n\n  <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopPage/productList/productList.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopPage/productList/productList.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopPageProductListProductListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<!-- Product -->\n<ion-card *ngIf=\"!packages && product.status=='publish'\" style=\"list-style: none\" (click)=\"GlobalFields.selectedProduct=product\" [routerLink]=\"['/tabs/shop/product']\">\n  <div style=\"text-align: center; background-color: whitesmoke;\">\n    <img *ngIf=\"product.images && product.images.length>0\" src=\"{{product.images[0].src}}\" style=\"height: 150px; width: auto\"/>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle [innerHTML]=\"product.price_html\"></ion-card-subtitle>\n    <ion-card-title style=\"font-size: 12pt\">\n      {{product.name}}\n      <button style=\"float: right; margin-bottom: 10px; padding: 10px; border-radius: 50px; box-shadow: 0 2px 8px rgba(0,0,0,.15)!important; background-color: white;\">\n        <i class=\"fas fa-shopping-cart\"></i>\n      </button>\n    </ion-card-title>\n  </ion-card-header>\n  <!--<ion-card-content></ion-card-content>-->\n</ion-card>\n\n<!-- Package -->\n<ion-card *ngIf=\"packages\" style=\"list-style: none\" (click)=\"GlobalFields.selectedProduct=product\" (click)=\"openPackage()\">\n  <div style=\"text-align: center; background-color: whitesmoke;\">\n    <img *ngIf=\"product.image\" src=\"{{product.image}}\" style=\"height: 150px; width: auto\"/>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle [innerHTML]=\"product.price_html\"></ion-card-subtitle>\n    <ion-card-title style=\"font-size: 12pt\">\n      {{product.name}}\n      <button style=\"float: right; margin-bottom: 10px; padding: 10px; border-radius: 50px; box-shadow: 0 2px 8px rgba(0,0,0,.15)!important; background-color: white;\">\n        <i class=\"fas fa-shopping-cart\"></i>\n      </button>\n    </ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div [innerHTML]=\"product.description\"></div>\n  </ion-card-content>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sideMenu/sideMenu.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sideMenu/sideMenu.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSideMenuSideMenuHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu menuId=\"appMenu\" contentId=\"main\" side=\"start\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <ion-header translucent=\"true\" style=\"background-color: #dfa315;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar>\n      <ion-title>\n        {{'MENU' | translate}}\n      </ion-title>\n      <ion-buttons slot=\"end\" (click)=\"closeSidebar()\">\n        <ion-button color=\"dark\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style=\"background-color: black;\">\n\n    <br>\n    <ion-list>\n\n     <ion-item  style=\"color: white;\" class=\"menuItem\"\n                \n                [routerLink]=\"['/tabs/home']\"\n                (click)=\"closeSidebar()\">\n        <i class=\"fas fa-home\" style=\"font-size: 22px\"></i>\n        Home\n      </ion-item>\n\n      <!--- Login -->\n      <ion-item class=\"menuItem\" *ngIf=\"!GlobalFields.isLoggedIn\"  [routerLink]=\"['/tabs/menuPage']\" style=\"color: white;\"  [routerDirection]=\"'root'\"  (click)=\"closeSidebar()\">\n        <i class=\"{{GlobalFields.site_details.profileTabIcon}}\" style=\"font-size: 22px\"></i>\n        {{'LOGIN' | translate}}\n      </ion-item>\n      <!--- Profile -->\n      <ion-item class=\"menuItem\" *ngIf=\"GlobalFields.isLoggedIn\"  [routerLink]=\"['/tabs/menuPage']\" style=\"color: white;\"  [routerDirection]=\"'root'\"  (click)=\"closeSidebar()\">\n        <img *ngIf=\"GlobalFields.isLoggedIn && GlobalFields.profile && GlobalFields.profile.user\" src=\"{{GlobalFields.profile.user.avatar}}\" style=\"height: 25px; border-radius: 55px; margin-right: 15px;\">\n        {{GlobalFields.profile.user.display_name}}\n      </ion-item>\n\n    <!--  <ion-item class=\"menuItem\" [routerLink]=\"['/tabs/home']\" [ngStyle]=\"getStyleSelectedTab('home')\" (click)=\"closeSidebar()\">\n        <i class=\"{{GlobalFields.site_details.homeTabIcon}}\" style=\"font-size: 22px\"></i>\n        Home\n      </ion-item> -->\n\n\n\n      <ion-item  style=\"color: white;\" class=\"menuItem\" *ngIf=\"GlobalFields.site_details.showCategoriesList\"\n                \n                [routerLink]=\"['/tabs/categoriesList']\"\n                (click)=\"closeSidebar()\">\n        <i class=\"{{GlobalFields.site_details.categoriesTabIcon}}\" style=\"font-size: 22px\"></i>\n        {{'CATEGORIES' | translate}}\n      </ion-item>\n\n      <ion-item style=\"color: white;\" class=\"menuItem\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.shopTabIcon\"\n                [routerLink]=\"['/tabs/shop']\" \n                (click)=\"closeSidebar()\">\n        <i class=\"{{GlobalFields.site_details.shopTabIcon}}\" style=\"font-size: 22px\"></i>\n        {{'SHOP' | translate}}\n      </ion-item>\n\n      <ion-item style=\"color: white;\" class=\"menuItem\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.postsTabIcon\"\n                [routerLink]=\"['/tabs/home/posts']\" [routerDirection]=\"'root'\" \n                (click)=\"GlobalFields.navigateAsRoot=true; closeSidebar()\">\n        <i class=\"{{GlobalFields.site_details.postsTabIcon}}\" style=\"font-size: 22px\"></i>\n        {{'BLOG' | translate}}\n      </ion-item>\n\n      <ion-item style=\"color: white;\" class=\"menuItem\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.msgTabIcon\"\n                [routerLink]=\"['/tabs/messages']\" \n                (click)=\"closeSidebar()\">\n        <i class=\"{{GlobalFields.site_details.msgTabIcon}}\" style=\"font-size: 22px\"></i>\n        {{'MESSAGES' | translate}}\n      </ion-item>\n\n      <ion-item  style=\"color: white !important;\" class=\"menuItem\" [routerLink]=\"['/tabs/menuPage/settings']\" [routerDirection]=\"'root'\"\n                (click)=\"GlobalFields.navigateAsRoot=true; closeSidebar()\">\n        <i class=\"fas fa-cog\" style=\"font-size: 22px\"></i>\n        {{'SETTINGS' | translate}}\n      </ion-item>\n\n      <ion-item style=\"color: white;\" [disabled]=\"!GlobalFields.isLoggedIn\" button\n              [routerLink]=\"['/tabs/menuPage/myListingsPage']\" [detail]=\"false\" (click)=\"closeSidebar()\">\n      <ion-icon name=\"list-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'MY_LISTINGS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>\n\n    <ion-item style=\"color: white;\" [disabled]=\"!GlobalFields.isLoggedIn\" button [detail]=\"false\"\n              [routerLink]=\"['/tabs/menuPage/bookmarksPage']\" (click)=\"closeSidebar()\">\n      <ion-icon name=\"heart-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'BOOKMARKS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>\n\n      <ion-item *ngIf=\"GlobalFields.site_details.enableNotifications\" (click)=\"closeSidebar()\" style=\"color: white;\" button [detail]=\"false\" [routerLink]=\"['/tabs/menuPage/notificationsPage']\">\n      <ion-icon name=\"notifications-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'NOTIFICATIONS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>\n\n      <ion-item  style=\"color: white;\" *ngIf=\"GlobalFields.isLoggedIn\" (click)=\"closeSidebar()\" button (click)=\"logout()\" [detail]=\"false\">\n      <ion-icon name=\"log-out-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'LOGOUT' | translate}}\n      </ion-label>\n    </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n\n</ion-menu>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/modalAdd/modalAdd.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/modalAdd/modalAdd.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsModalAddModalAddHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf=\"!selectedType\" class=\"ionHeaderHeader\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n  <ion-toolbar  class=\"toolbarHeader\">\n    <div class=\"headerContainer\">\n      <div class=\"headerCol1\">\n        <ion-icon name=\"close\" style=\"font-size: 30px; margin: 3px;\" (click)=\"closeModal()\"></ion-icon>\n      </div>\n      <div class=\"headerCol2\">\n        <span>{{'CREATE_LISTING' | translate}}</span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"GlobalFields.listingTypesDetails && selectedType && selectedTypeDetail\" style=\"background-color: white; border-bottom: 1px solid #ebebeb;\">\n  <ion-toolbar>\n    <ion-row class=\"filters\">\n      <div style=\"background-color: white; position: fixed; text-align: center; width: 30px; height: 100%;\">\n        <ion-icon name=\"close\" style=\"font-size: 30px; margin: 3px;\" (click)=\"closeModal()\"></ion-icon>\n      </div>\n      <ul col-12 style=\"padding: 0; margin: 0; margin-bottom: -5px; margin-left: 40px; display: inline-block; display:inline; display: inline-flex; height: fit-content; width: 100%; overflow: scroll;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <li dir=\"{{GlobalFields.getLanguageLayout()}}\"\n            class=\"typesListHorizontal selectedtypesListHorizontal\"\n            [ngStyle]=\"this.GlobalFields.getPrimaryColorJson()\">\n          <span *ngIf=\"selectedTypeDetail.post_title\">{{selectedTypeDetail.post_title}}</span>\n        </li>\n      </ul>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <div style=\"height: 100%; width: 100%; margin-top: 10px; margin-bottom: 130px\" *ngIf=\"newListing\">\n\n\n\n    <!-- Type choosing-->\n    <div *ngIf=\"!selectedType\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"text-align: center; display: grid\">\n\n      <div style=\"font-weight: 600; font-size: 30px;\">{{'CREATE_LISTING' | translate}}</div>\n      <div style=\"color: #898989; font-size: 18px;\">{{'CREATE_LISTING_TYPE' | translate}}</div>\n      <br>\n\n      <ion-row *ngFor=\"let type of GlobalFields.listingTypesDetails\" style=\"width: 100%; height: 130px;\" (click)=\"newListing._case27_listing_type = type.slug\">\n        <ion-col style=\"text-align: center\">\n          <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n          <div class=\"backImg\" (click)=\"selectedType = type.ID; selectListingType()\" >\n            <img-loader [src]=\"getBackgroundCached(type)\" useImg [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n\n            <div class=\"text\">\n              <span style=\"font-weight: 900; font-size: 20pt; position: relative; top: 22%;\"> {{type.post_title}}</span>\n\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- Login -->\n    <div *ngIf=\"!GlobalFields.isLoggedIn && selectedType \">\n      <div class=\"pageSection\">\n        <loginComponent (loginComplete)=\"checkPackages()\"></loginComponent>\n      </div>\n    </div>\n\n    <!-- Loading Packages -->\n    <div *ngIf=\"loadingPackages && GlobalFields.isLoggedIn && selectedType\">\n      <ion-list style=\"padding: 15px\">\n        <div *ngFor=\"let items of [1,2,3]\">\n          <ion-thumbnail style=\"width: 100%; height: 200px;\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n            <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n            <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n          </ion-label>\n          <br>\n        </div>\n      </ion-list>\n    </div>\n\n    <!-- Packages -->\n    <div *ngIf=\"!loadingPackages && GlobalFields.isLoggedIn && selectedType && !can_create_listing\">\n      <div style=\"font-weight: 600; font-size: 30px; text-align: center\">{{\"CHOOSE_A_PACKAGE\" | translate}}</div>\n      <br>\n      <!-- Already have packages-->\n      <span *ngIf=\"packagesAlreadyBought && packagesAlreadyBought.length>0\">\n          <div style=\"color: #898989; font-size: 18px; text-align: center\">{{\"USE_AVAILABLE_PACKAGE\" | translate}}</div>\n          <ion-card *ngFor=\"let package of packagesAlreadyBought\" style=\"padding: 0px 15px;\" (click)=\"newListing.listing_package=package.id; can_create_listing=true\">\n            <h3>{{package.name}}</h3>\n            <span *ngIf=\"package.limit > 0\">{{'REMAINING_LISTINGS' | translate}}: {{package.limit - package.count}}</span><br>\n            <span *ngIf=\"package.duration > 0\">{{'LISTED_FOR' | translate}} {{package.duration}} days</span>\n            <button style=\"float: right; margin-bottom: 10px; padding: 10px; border-radius: 50px; box-shadow: 0 2px 8px rgba(0,0,0,.15)!important; background-color: white;\">\n              {{'SELECT' | translate}}\n            </button>\n          </ion-card>\n          <hr>\n          <div style=\"color: #898989; font-size: 18px; text-align: center\">Or buy a new one</div>\n          <br>\n        </span>\n      <div *ngIf=\"packagesToBuy && packagesToBuy.length>0\">\n           <span *ngFor=\"let prod of packagesToBuy\" >\n            <productList [product]=\"prod\" [packages]=\"true\"></productList>\n           </span>\n      </div>\n    </div>\n\n    <!-- Creation form -->\n    <div *ngIf=\"GlobalFields.isLoggedIn && selectedType && can_create_listing\" class=\"animated fadeIn\">\n          <span *ngFor=\"let field of fieldsTypeSelected\">\n            <span *ngIf=\"field.show_in_submit_form && canShowPackageCondition(field)\">\n                <!-- Header -->\n                <div *ngIf=\"field.type == 'form-heading'\" class=\"headerSection\">\n                    <div class=\"divisor\"  *ngIf=\"GlobalFields.isWhiteBackground()\"></div>\n                    <ion-label class=\"titleSectionFilter\">{{field.label}}<span *ngIf=\"field.required\">*</span></ion-label>\n                </div>\n              <!-- Input fields text-->\n                <div *ngIf=\"field.type == 'text'\" class=\"filterSectionForm\">\n                    <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-pen iconField\"></i></label>\n                    <ion-input clearInput placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"newListing[field.slug]\"></ion-input>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n              <!-- Input fields number-->\n                <div *ngIf=\"field.type == 'number'\" class=\"filterSectionForm\">\n                    <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-pen iconField\"></i></label>\n                    <ion-input clearInput placeholder=\"{{field.placeholder}}\" type=\"number\" [(ngModel)]=\"newListing[field.slug]\"></ion-input>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n                <div *ngIf=\"field.type == 'wp-editor' || field.type == 'texteditor'\" class=\"filterSectionForm\">\n                    <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-pen iconField\"></i></label>\n                    <ion-textarea class=\"textareaEditor\" rows=\"15\" cols=\"20\"  placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"newListing[field.slug]\"></ion-textarea>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n                <div *ngIf=\"field.type == 'url'\" class=\"filterSectionForm\">\n                    <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-globe iconField\"></i></label>\n                    <ion-input clearInput type=\"url\" inputmode=\"url\" placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"newListing[field.slug]\"></ion-input>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n                <div *ngIf=\"field.type == 'email'\" class=\"filterSectionForm\">\n                    <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-envelope iconField\"></i></label>\n                    <ion-input clearInput  type=\"email\" inputmode=\"email\" placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"newListing[field.slug]\"></ion-input>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n                <div *ngIf=\"field.type == 'location'\" class=\"filterSectionForm\">\n                  <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-map-marked-alt iconField\"></i></label>\n                    <i *ngIf=\"newListing[field.slug] != GlobalFields.address\" (click)=\"getMyAddress(field.slug)\" class=\"fas fa-location-arrow\" style=\" float: right; margin-top: 30px;\"></i>\n                    <i *ngIf=\"newListing[field.slug] == GlobalFields.address\"  (click)=\"getMyAddress(field.slug)\" class=\"fas fa-location-arrow\" style=\" float: right; margin-top: 30px;\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n                 <!-- <ion-input clearInput placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"newListing[field.slug]\" style=\"width: 90%; margin: auto;\"></ion-input>-->\n                   <div style=\"width: 90%; margin: auto;\">\n                    <googleMapsAutocomplete [value]=\"newListing[field.slug]\" [placeholder]=\"field.placeholder\" (addressName)=\"newListing[field.slug]=$event\"></googleMapsAutocomplete>\n                  </div>\n                  <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n\n              <!-- Date -->\n                <div *ngIf=\"field.type == 'date'\" class=\"filterSectionForm\">\n                  <label>{{field.label}}<span *ngIf=\"field.required\">*</span></label> <i class=\"far fa-calendar-check iconField\"></i>\n                  <!-- <span *ngIf=\"field.format == 'datetime'\"> -->\n                        <ion-item>\n                            <ion-datetime displayFormat=\"DDDD MMM D, YYYY\" min=\"1900\" max=\"2100\" [(ngModel)]=\"newListing[field.slug]\" placeholder=\"{{'SELECT' | translate}}\"></ion-datetime>\n                          </ion-item>\n                  <!-- </span> -->\n                     <br>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n              <!-- Files -->\n                <div *ngIf=\"field.type == 'file'\" class=\"filterSectionForm\">\n                  <label>{{field.label}}<span *ngIf=\"field.required\">*</span></label>\n                    <br>\n                        <ion-button (click)=\"openImagePicker(field.multiple, field.slug)\"><i class=\"fas fa-camera\"></i></ion-button>\n                    <br>\n                    <div *ngIf=\"uploadingImg\" class=\"loadingUpload\"><i class=\"fas fa-spinner fa-spin\"></i></div>\n                  <!-- Imgs -->\n                    <span *ngIf=\"!field.multiple && newListing[field.slug]\">\n                      <img src={{newListing[field.slug]}} class=\"imgPreview\">\n                    </span>\n                    <span *ngIf=\"field.multiple && newListing[field.slug]\">\n                        <span *ngFor=\"let img of newListing[field.slug]; let i=index\">\n                           <img  src={{img}} class=\"imgPreview\">\n                           <i class=\"far fa-trash-alt\" style=\"color: #e43854; padding: 10px;margin-left: 5px;\" (click)=\"deleteNewImg(i, field.slug)\"></i>\n                        </span>\n                    </span>\n                    <br>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n\n              <!-- Categories -->\n                <div *ngIf=\"field.type == 'term-select' && field.slug =='job_category'\" class=\"filterSectionForm\">\n                  <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"far fa-check-circle iconField\"></i></label>\n                    <br>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                    <ion-item style=\"padding:0px;\">\n                        <ion-select multiple=\"true\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFields.addForm.categories\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringCategories()}}\">\n                            <ion-select-option  *ngFor=\"let c of selectedTypeDetail.categories\" value=\"{{c.name}}\">{{c.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </div>\n\n              <!-- Tags -->\n                <div *ngIf=\"field.type == 'term-select' && field.slug =='job_tags'\" class=\"filterSectionForm\">\n                  <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"far fa-check-circle iconField\"></i></label>\n                    <br>\n                    <div style=\"max-height: 200px; overflow-y: auto; border: solid 1px #cfced2; padding: 0 10px 30px 0; border-radius: 5px; background-color: #f4f4f4;\">\n                        <ion-item *ngFor=\"let t of GlobalFields.addForm.tags\" style=\" font-size: 10pt; padding: 0; margin-bottom: -11px; background-color: transparent;\">\n                            <ion-label>{{t.val.name}}</ion-label>\n                            <ion-checkbox slot=\"end\" [(ngModel)]=\"t.isChecked\" ></ion-checkbox>\n                        </ion-item>\n                    </div>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n              <!-- Regions -->\n                <div *ngIf=\"field.type == 'term-select' && field.slug =='region'\" class=\"filterSectionForm\">\n                    <label>{{field.label}}<span *ngIf=\"field.required\">*</span><i class=\"fas fa-check-circle iconField\"></i></label>\n                    <div style=\"max-height: 200px; overflow-y: auto; border: solid 1px #cfced2; padding: 0 10px 30px 0; border-radius: 5px; background-color: #f4f4f4;\">\n                        <ion-item *ngFor=\"let t of GlobalFields.addForm.regions\" style=\" font-size: 10pt; padding: 0; margin-bottom: -11px; background-color: transparent;\">\n                            <ion-label>{{t.val.name}}</ion-label>\n                            <ion-checkbox slot=\"end\" [(ngModel)]=\"t.isChecked\" ></ion-checkbox>\n                        </ion-item>\n                    </div>\n                </div>\n\n              <!-- Select price range -->\n                <div *ngIf=\"field.type == 'select' && field.slug =='price_range'\" class=\"filterSectionForm\">\n                <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-dollar-sign iconField\"></i></label>\n                  <br>\n                  <div style=\"max-height: 200px; overflow-y: auto\">\n                      <ion-item style=\"padding:0px;\">\n                          <ion-select multiple=\"false\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFields.addForm.price_range\" placeholder=\"{{'SELECT' | translate}}\">\n                              <ion-select-option  *ngFor=\"let key of getKeys(field.options)\" value=\"{{field.options[key]}}\">{{field.options[key]}}</ion-select-option>\n                          </ion-select>\n                      </ion-item>\n                  </div>\n                  <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n\n              <!-- Working hours -->\n               <div *ngIf=\"field.type == 'work-hours'\" class=\"filterSectionForm\">\n                <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-clock iconField\"></i></label>\n                  <br>\n\n                  <div>\n\n                    <ul class=\"days_header\">\n                      <li [ngStyle]=\"selectedDay=='Monday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Monday'\">Mon</li>\n                      <li [ngStyle]=\"selectedDay=='Tuesday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Tuesday'\">Tue</li>\n                      <li [ngStyle]=\"selectedDay=='Wednesday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Wednesday'\">Wed</li>\n                      <li [ngStyle]=\"selectedDay=='Thursday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Thursday'\">Thu</li>\n                      <li [ngStyle]=\"selectedDay=='Friday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Friday'\">Fri</li>\n                      <li [ngStyle]=\"selectedDay=='Saturday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Saturday'\">Sat</li>\n                      <li [ngStyle]=\"selectedDay=='Sunday' ? GlobalFields.getPrimaryColorJson() : undefined\" (click)=\"selectedDay='Sunday'\">Sun</li>\n                    </ul>\n                    <div *ngFor=\"let i of ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']\">\n                      <div *ngIf=\"selectedDay==i && newListing.work_hours[i]\">\n                        <ion-item (click)=\"newListing.work_hours[i].status='enter-hours'\" style=\"font-size: 10pt;\">\n                          <ion-label>{{'ENTER_HOURS' | translate}}</ion-label> <i class=\"fas fa-check\" *ngIf=\"newListing.work_hours[i].status=='enter-hours'\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n                        </ion-item>\n                        <ion-item (click)=\"newListing.work_hours[i].status='open-all-day'\" style=\"font-size: 10pt;\">\n                          <ion-label>{{'OPEN_DAY' | translate}}</ion-label> <i class=\"fas fa-check\" *ngIf=\"newListing.work_hours[i].status=='open-all-day'\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n                        </ion-item>\n                        <ion-item (click)=\"newListing.work_hours[i].status='closed-all-day'\" style=\"font-size: 10pt;\">\n                          <ion-label>{{'CLOSED_DAY' | translate}}</ion-label> <i class=\"fas fa-check\" *ngIf=\"newListing.work_hours[i].status=='closed-all-day'\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n                        </ion-item>\n                        <ion-item (click)=\"newListing.work_hours[i].status='by-appointment-only'\" style=\"font-size: 10pt;\">\n                          <ion-label>{{\"BY_APPOINTMENT_ONLY\" | translate}}</ion-label> <i class=\"fas fa-check\" *ngIf=\"newListing.work_hours[i].status=='by-appointment-only'\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n                        </ion-item>\n                        <br>\n                        <!-- Enter Hours-->\n                        <div *ngIf=\"newListing.work_hours[i].status=='enter-hours'\">\n                          <span *ngIf=\"newListing.work_hours[i].entry_hours\">\n                            <div *ngFor=\"let hrs of newListing.work_hours[i].entry_hours; let ind = index\" style=\"display: inline-flex;\">\n                              <ion-item style=\"font-size: 9pt\">\n                                <ion-label style=\"font-weight: bold;\">{{\"FROM\" |translate}}:</ion-label>\n                                <ion-datetime [(ngModel)]=\"hrs.from\" placeholder=\"{{'SELECT' | translate}}\" display-timezone=\"utc\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n                              </ion-item>\n                              <ion-item style=\"font-size: 9pt\">\n                                <ion-label style=\"font-weight: bold;\">{{\"TO\" |translate}}:</ion-label>\n                                <ion-datetime [(ngModel)]=\"hrs.to\" placeholder=\"{{'SELECT' | translate}}\" display-timezone=\"utc\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n                              </ion-item>\n                              <button (click)=\"deleteEntryFromWorkHrs(ind)\"><i class=\"fas fa-trash\"></i></button>\n                             </div>\n                          </span>\n                          <button class=\"addWorkHoursBtn\" (click)=\"addWorkHours()\">{{'ADD' | translate}}</button>\n                        </div>\n                      </div>\n                    </div>\n                    <br><br>\n                    <label>{{'TIMEZONE' | translate}}</label>\n                    <ion-select multiple=\"false\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"\n                                style=\"border-bottom: solid 1px #d5d3d7; padding: 10px;\"\n                                [compareWith]=\"compareWithSocialNet\" [(ngModel)]=\"newListing.work_hours.timezone\" placeholder=\"{{'SELECT' | translate}}\">\n                      <ion-select-option  *ngFor=\"let key of GlobalFields.timeZones\" value=\"{{key}}\">{{key}}</ion-select-option>\n                    </ion-select>\n\n                  </div>\n\n\n                  <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n              <!-- Social Network Links -->\n               <div *ngIf=\"field.type == 'links'\" class=\"filterSectionForm\">\n                <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-link iconField\"></i></label>\n                  <br>\n                  <div>\n                    <span *ngIf=\"newListing.links\">\n                      <div *ngFor=\"let link of newListing.links; let ind = index\" style=\"display: inline-flex; width: 100%; padding: 5px;\">\n                        <div style=\"font-size: 9pt; width: 100%\">\n                          <ion-select multiple=\"false\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"\n                                      style=\"border-bottom: solid 1px #d5d3d7; padding: 10px;\"\n                                      [compareWith]=\"compareWithSocialNet\" [(ngModel)]=\"link.network\" placeholder=\"{{'SELECT' | translate}}\">\n                            <ion-select-option  *ngFor=\"let key of socialNetworks\" value=\"{{key}}\">{{key}}</ion-select-option>\n                          </ion-select>\n                          <ion-input clearInput type=\"url\" inputmode=\"url\" placeholder=\"https://\" [(ngModel)]=\"link.url\"></ion-input>\n                        </div>\n                        <button (click)=\"deleteEntryFromLinks(ind)\"><i class=\"fas fa-trash\"></i></button>\n                       </div>\n                    </span>\n                    <button class=\"addWorkHoursBtn\" (click)=\"addSocialNetLink()\">{{'ADD' | translate}}</button>\n                  </div>\n\n                  <i style=\"font-size: x-small\">{{field.description}}</i>\n                </div>\n\n\n              <!-- CUSTOM --->\n\n              <!-- Custom fields select-->\n                  <div *ngIf=\"(field.type == 'select' || field.type == 'multiselect') && field.is_custom\"  class=\"filterSectionForm\">\n                      <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-tasks iconField\"></i></label>\n                      <br>\n                      <div style=\"max-height: 200px; overflow-y: auto\">\n                        <ion-item style=\"padding:0px;\">\n                            <ion-select multiple=\"{{field.type=='select' ? 'false' : 'true'}}\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFields.getCustomFieldsByKeyAddForm(field.slug).selected\" placeholder=\"{{'SELECT' | translate}}\">\n                                <ion-select-option  *ngFor=\"let key of getKeys(field.options)\" value=\"{{field.options[key]}}\">{{field.options[key]}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                    </div>\n                    <i style=\"font-size: x-small\">{{field.description}}</i>\n                  </div>\n\n\n              <!--Custom Taxonomies -->\n                <span *ngIf=\"field.type == 'term-select' && field.slug !='job_tags' && field.slug !='job_category' && field.slug !='region'\">\n                    <div *ngIf=\"GlobalFields.getCustomTaxonomiesByKeyAddForm(field.slug)\" class=\"filterSectionForm\">\n                        <label>{{field.label}}<span *ngIf=\"field.required\">*</span> <i class=\"fas fa-tasks iconField\"></i></label>\n                        <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\n                          <ion-select multiple=\"{{field['terms-template']=='multiselect' ? 'true' : 'false'}}\" [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"   [(ngModel)]=\"GlobalFields.getCustomTaxonomiesByKeyAddForm(field.slug).selected\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{toStringTaxonomies(field.slug)}}\">\n                            <ion-select-option  *ngFor=\"let t of GlobalFields.getCustomTaxonomiesByKeyAddForm(field.slug).options\" value=\"{{t.term_id}}\">{{t.name}}</ion-select-option>\n                          </ion-select>\n                        </ion-item>\n                  </div>\n                </span>\n\n            </span>\n\n          </span>\n\n      <!--<button (click)=\"log(newListing)\">log</button> -->\n\n\n      <ion-button class=\"confirmBtn\" color=\"success\" (click)=\"saveListing(); closeModal()\" [disabled]=\"checkIfFieldsMissing()\">\n        {{'SAVE' | translate}}\n      </ion-button>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUtilitiesGoogleMapsAutocompleteGoogleMapsAutocompleteHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Google Maps -->\n<div style=\"position: relative\" *ngIf=\"GlobalFields.site_details.mapType==1\">\n<input #googleSearch class=\"form-control googleAutoCompleteInput\" autocorrect=\"off\" autocapitalize=\"off\"\n       spellcheck=\"off\" type=\"text\" clearInput=\"true\"\n       placeholder=\"{{placeholder}}\">\n  <i class=\"fas fa-times cancelText\" *ngIf=\"value && value!=''\" (click)=\"cancelText()\"></i>\n</div>\n\n<!-- OpenStreetMap -->\n<div style=\"position: relative\" *ngIf=\"GlobalFields.site_details.mapType==2\">\n  <input class=\"form-control googleAutoCompleteInput\" autocorrect=\"off\" autocapitalize=\"off\"\n         spellcheck=\"off\" type=\"text\" clearInput=\"true\"\n         placeholder=\"{{placeholder}}\"\n         [(ngModel)]=\"openStreetValue\" (input)=\"findAddressOpenStreetMaps(openStreetValue)\">\n  <i class=\"fas fa-times cancelText\" *ngIf=\"openStreetValue && openStreetValue!=''\" (click)=\"cancelText()\"></i>\n\n  <div class=\"openStreetResultsBox\" *ngIf=\"resultsOpenStreetMap && resultsOpenStreetMap.features\">\n    <ul>\n      <li *ngFor=\"let res of resultsOpenStreetMap.features\" (click)=\"selectOpenStreetResult(res.properties)\">\n        <i class=\"fas fa-map-marker-alt\"></i>\n        <span *ngIf=\"res.properties.name\">{{res.properties.name}}</span>\n        <span *ngIf=\"res.properties.state\">,{{res.properties.state}}</span>\n        <span *ngIf=\"res.properties.country\">,{{res.properties.country}}</span>\n      </li>\n      <li *ngIf=\"resultsOpenStreetMap.features.length==0\">\n        {{'NO_RESULTS' | translate}}\n      </li>\n    </ul>\n  </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Constants.ts":
  /*!******************************!*\
    !*** ./src/app/Constants.ts ***!
    \******************************/

  /*! exports provided: Constants */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.url = 'https://afroplus.de'; //change it with your mylisting website

    Constants.GoogleMapsKEY = 'AIzaSyBjXH608Z3zK5cKunqt3RabQlc73yM9u-U'; //Eg 'AIzaSy-your_Key' change it, then run the next command: ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator --variable GOOGLE_API_KEY_FOR_ANDROID="AIzaSy-your_Key"
    //OneSignal Constants

    Constants.OneSignal_appID = 'b7937ef-a920-4730-8438-b38e4a50d09d'; //Onesignal app id

    Constants.OneSignal_googleProjectNumber = '360755607868'; //Firebase project number (Only for Android)
    //WooCommerce Constants

    Constants.ConsumerKeyWoo = 'ck_4e1849ff84ca6c65457177b4819e83dfdc04dd32'; //demo

    Constants.ConsumerSecretWoo = 's_43127b4edb55ab48873955ca8bb36275ba3f002c'; //demo
    //WP CONSTANTS

    Constants.LISTING_STATUS_PUBLISHED = 'publish';
    Constants.LISTING_STATUS_PENDING = 'pending';
    Constants.LISTING_STATUS_DRAFT = 'draft';
    Constants.LISTING_STATUS_AUTO_DRAFT = 'auto-draft';
    Constants.LISTING_STATUS_FUTURE = 'future';
    Constants.LISTING_STATUS_INHERIT = 'inherit';
    Constants.LISTING_STATUS_TRASH = 'trash';
    Constants.LISTING_STATUS_ANY = 'any';
    /***/
  },

  /***/
  "./src/app/GlobalFields.ts":
  /*!*********************************!*\
    !*** ./src/app/GlobalFields.ts ***!
    \*********************************/

  /*! exports provided: GlobalFields */

  /***/
  function srcAppGlobalFieldsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalFields", function () {
      return GlobalFields;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./entities/FiltersSearch */
    "./src/app/entities/FiltersSearch.ts");

    var GlobalFields = /*#__PURE__*/function () {
      function GlobalFields() {
        _classCallCheck(this, GlobalFields);
      }

      _createClass(GlobalFields, null, [{
        key: "presentAlert",
        value: function presentAlert(alertController) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return alertController.create({
                      header: 'Alert',
                      subHeader: 'Subtitle',
                      message: 'This is an alert message.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "init",
        value: function init(service, dialogs, platform, geolocation, nativeGeocoder, alertController, translate, themeService, locationService) {
          var _this = this;

          console.log('loading');
          this.loading = true; // chiamate concatenate per mostrare loading

          GlobalFields.filtersSearch = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_1__["FiltersSearch"]();
          var goodAPIs = 0;
          setTimeout(function () {
            if (goodAPIs < 3) {
              GlobalFields.errorIni = true;
              GlobalFields.errorString = 'Timeout reached. Check your internet connection or the website availability.';
            }
          }, 20000); // call 1

          service.getConfig().subscribe(function (data) {
            //this.presentAlert(alertController);
            _this.site_details = data;
            _this.site_details.listingPageType = parseInt(_this.site_details.listingPageType);

            _this.setLang(_this.site_details.language, translate);

            _this.updateColor(themeService);

            _this.setCustomFont(themeService);

            if (!_this.site_details.placeholderImgUrl || _this.site_details.placeholderImgUrl == '') _this.site_details.placeholderImgUrl = 'assets/imgs/no_img.jpg';
            goodAPIs++;
            GlobalFields.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService); // OneSignal Code start:

            if (_this.site_details.enableNotifications) service.initOneSignal();
          }, function (err) {
            GlobalFields.errorIni = true;
            GlobalFields.errorString = err.message;
            console.log(err);
          }); // call 2

          service.getAllCategoriesListings().subscribe(function (data) {
            _this.listingCategories = data;
            console.log('getAllCategoriesListings'); // goodAPIs++;
            // GlobalFields.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService);
          }, function (err) {//GlobalFields.errorIni = true; GlobalFields.errorString = err.message; console.log(err)
          }); // call 3

          service.getAllTypeDetails().subscribe(function (data) {
            _this.listingTypesDetails = data;

            var _iterator = _createForOfIteratorHelper(_this.listingTypesDetails),
                _step;

            try {
              var _loop = function _loop() {
                var type = _step.value;

                if (type.featured_media != 0) {
                  service.getMediaById(type.featured_media).subscribe(function (data) {
                    console.log('url: ' + data.source_url);

                    if (data) {
                      type.img_cover = data.source_url;
                    }
                  });
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this.filtersSearch.selectedType = _this.listingTypesDetails[0].ID;
            GlobalFields.selectListingTypeDetail();
            console.log(GlobalFields.listingCustomFieldKeys);

            for (var key in data) {
              var opts = data[key];
              GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions.push({
                key: key,
                options: opts,
                selected: []
              });
            }

            goodAPIs++;
            GlobalFields.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService); // call 4

            service.getCustomTaxonomies().subscribe(function (data) {
              _this.listingCustomTaxonomies = data;
              console.log('getCustomTaxonomies');
              GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions = []; //prepare the custom taxonomies

              for (var key in data) {
                var _opts = data[key];
                GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions.push({
                  key: key,
                  options: _opts,
                  selected: []
                });
              } //prepare the custom fields


              GlobalFields.listingCustomFieldKeys = [];
              GlobalFields.filtersSearch.customFieldsDropdownKeysOptions = [];
              GlobalFields.filtersSearch.customFieldsText = [];
              GlobalFields.listingTypesDetails.forEach(function (type) {
                //array of keys
                for (var _key2 in type.case27_listing_type_fields) {
                  if (type.case27_listing_type_fields[_key2]) {
                    if (type.case27_listing_type_fields[_key2].is_custom) {
                      GlobalFields.listingCustomFieldKeys.push(_key2);
                    }
                  }
                } //array of custom fields for dropdowns


                var facets = type.case27_listing_type_search_page.advanced.facets;
                GlobalFields.listingCustomFieldKeys.forEach(function (key) {
                  var field = type.case27_listing_type_search_page.advanced.facets.find(function (temp) {
                    return temp.show_field == key;
                  });

                  if (field) {
                    if (field.type == 'text' || field.type == 'wp-search') GlobalFields.filtersSearch.customFieldsText.push({
                      key: field.show_field,
                      selected: ''
                    });else GlobalFields.filtersSearch.customFieldsDropdownKeysOptions.push({
                      key: field.show_field,
                      options: field.data_choices,
                      selected: []
                    });
                  }
                });
              });
              goodAPIs++;
              GlobalFields.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService);
            }, function (err) {
              GlobalFields.errorIni = true;
              GlobalFields.errorString = err.message;
            });
          }, function (err) {
            GlobalFields.errorIni = true;
            GlobalFields.errorString = err.message;
            console.log(err);
          }); // call 5

          service.getAllTags().subscribe(function (data) {
            _this.listingTags = data; //goodAPIs++;
            //GlobalFields.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService);
          }, function (err) {// GlobalFields.errorIni = true; GlobalFields.errorString = err.message; console.log(err)
          }); // call 6

          service.getRegions().subscribe(function (data) {
            _this.regions = data;
            console.log('getRegions'); //goodAPIs++;
            //GlobalFields.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService);
          }, function (err) {//GlobalFields.errorIni = true; GlobalFields.errorString = err.message;
          });
          service.getRecentViewedListing();

          if (!platform.is('mobileweb')) {
            console.log('non ?? browser');
            console.log(platform);
            /*dialogs.alert('Please wait')
                .then(() => console.log('Dialog dismissed'))
                .catch(e => console.log('Error displaying dialog', e));
                */
          }
        }
      }, {
        key: "endOfCalls",
        value: function endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService) {
          if (goodAPIs == 3) {
            // fine
            this.getLocation(geolocation, nativeGeocoder, alertController, service, locationService);
            service.getProfileFromStorage();
            this.loading = false;
            console.log('end loading');
          }
        } //Get the user role if the user is logged in to avoid getting in n times

      }, {
        key: "getUserRole",
        value: function getUserRole() {
          if (GlobalFields.site_details.userRoles && GlobalFields.site_details.userRoles.roles && GlobalFields.site_details.userRoles.roles.length > 0 && GlobalFields.profile && GlobalFields.profile.user && GlobalFields.profile.user.role) {
            GlobalFields.userRole = GlobalFields.site_details.userRoles.roles.find(function (r) {
              return r.slug == GlobalFields.profile.user.role;
            });
          }
        } //get current location in myLat long

      }, {
        key: "getLocation",
        value: function getLocation(geolocation, nativeGeocoder, alertController, service, locationService) {
          console.log("Getting the location");
          console.log(geolocation);
          geolocation.getCurrentPosition({
            enableHighAccuracy: true
          }).then(function (resp) {
            GlobalFields.lat = resp.coords.latitude;
            GlobalFields["long"] = resp.coords.longitude;
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            GlobalFields.getMyAddress(service, locationService, nativeGeocoder);
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
          var watch = geolocation.watchPosition();
          watch.subscribe(function (data) {// data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
          });
        }
      }, {
        key: "getListingTypeNameBySlug",
        value: function getListingTypeNameBySlug(slug) {
          var res = GlobalFields.listingTypesDetails.find(function (temp) {
            return temp.post_name == slug;
          });
          if (res) return res.post_title;else return '-';
        }
      }, {
        key: "getListingTypeBySlug",
        value: function getListingTypeBySlug(slug) {
          var res = GlobalFields.listingTypesDetails.find(function (temp) {
            return temp.post_name == slug;
          });
          if (res) return res;else return undefined;
        }
      }, {
        key: "getListingTypeKeyById",
        value: function getListingTypeKeyById(id) {
          var res = GlobalFields.listingTypesDetails.find(function (temp) {
            return temp.ID == id;
          });
          if (res) return res.post_name;else return '-';
        }
      }, {
        key: "getListingTypeById",
        value: function getListingTypeById(id) {
          var res = GlobalFields.listingTypesDetails.find(function (temp) {
            return temp.ID == id;
          });
          return res;
        }
      }, {
        key: "getListingTypeTitleById",
        value: function getListingTypeTitleById(id) {
          var res = GlobalFields.listingTypesDetails.find(function (temp) {
            return temp.ID == id;
          });
          if (res) return res.post_title;else return '-';
        }
      }, {
        key: "getListingTypeTitleBySlug",
        value: function getListingTypeTitleBySlug(slug) {
          var res = GlobalFields.listingTypesDetails.find(function (temp) {
            return temp.post_name == slug;
          });
          if (res) return res.post_title;else return '-';
        } //means the page must be the first

      }, {
        key: "getFilteredListingFirstTime",
        value: function getFilteredListingFirstTime(service, locationService, stats) {
          GlobalFields.filteredListings = undefined;
          GlobalFields.filtersSearch.currentPage = 1;
          GlobalFields.filtersSearch.countListings = undefined;

          if (GlobalFields.filtersSearch.location) {
            //address
            if (GlobalFields.site_details.mapType == 1) {
              //Google Maps
              locationService.getMyLatLongFromGoogle(GlobalFields.filtersSearch.location).subscribe(function (d) {
                var data = d.data ? d.data : d;
                if (stats) GlobalFields.filtersSearch.countListings = d.count;

                if (data && data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
                  GlobalFields.filtersSearch.lat = data.results[0].geometry.location.lat;
                  GlobalFields.filtersSearch.lng = data.results[0].geometry.location.lng;
                }

                console.log('Get listings near lat long gmap ' + GlobalFields.filtersSearch.lat + ';' + GlobalFields.filtersSearch.lng);
                service.getFilteredListings(stats).subscribe(function (d) {
                  var data = d.data ? d.data : d;
                  if (stats) GlobalFields.filtersSearch.countListings = d.count;

                  if (GlobalFields.filtersSearch.currentPage == 1) {
                    GlobalFields.filteredListings = [];
                    GlobalFields.filtersSearch.noMorePage = false;
                  }

                  GlobalFields.filteredListings = GlobalFields.filteredListings.concat(GlobalFields.fixWrongImgCoverField(data));
                  if (GlobalFields.filteredListings.length < 10 || data.length == 0) GlobalFields.filtersSearch.noMorePage = true;
                });
              });
            } else {
              //Open Street Maps
              locationService.getLatLongFromOpenMaps(GlobalFields.filtersSearch.location).subscribe(function (data) {
                console.log(data);

                if (data && data.length > 0) {
                  GlobalFields.filtersSearch.lat = parseFloat(data[0].lat);
                  GlobalFields.filtersSearch.lng = parseFloat(data[0].lon);
                }

                console.log('Get listings near lat long openstreet ' + GlobalFields.filtersSearch.lat + ';' + GlobalFields.filtersSearch.lng);
                service.getFilteredListings(stats).subscribe(function (d) {
                  var data = d.data ? d.data : d;
                  if (stats) GlobalFields.filtersSearch.countListings = d.count;

                  if (GlobalFields.filtersSearch.currentPage == 1) {
                    GlobalFields.filteredListings = [];
                    GlobalFields.filtersSearch.noMorePage = false;
                  }

                  GlobalFields.filteredListings = GlobalFields.filteredListings.concat(GlobalFields.fixWrongImgCoverField(data));
                  if (GlobalFields.filteredListings.length < 10 || data.length == 0) GlobalFields.filtersSearch.noMorePage = true;
                });
              });
            }
          } else {
            service.getFilteredListings(stats).subscribe(function (d) {
              if (d) {
                var data = d.data ? d.data : d;
                if (stats) GlobalFields.filtersSearch.countListings = d.count;

                if (GlobalFields.filtersSearch.currentPage == 1) {
                  GlobalFields.filteredListings = [];
                  GlobalFields.filtersSearch.noMorePage = false;
                }

                GlobalFields.filteredListings = GlobalFields.filteredListings.concat(GlobalFields.fixWrongImgCoverField(data));
                if (GlobalFields.filteredListings.length < 10 || data.length == 0) GlobalFields.filtersSearch.noMorePage = true;
              } else GlobalFields.filteredListings = [];
            });
          }
        }
      }, {
        key: "fixWrongImgCoverField",
        value: function fixWrongImgCoverField(listings) {
          if (listings) {
            for (var i = 0; i < listings.length; i++) {
              if (!listings[i].img_cover) listings[i].img_cover = listings[i].img_cover;
            }

            return listings;
          } else return [];
        }
      }, {
        key: "getImgFeaturedListing",
        value: function getImgFeaturedListing(listings, service) {
          if (listings) {
            var _loop2 = function _loop2(i) {
              service.getListingCoverDetails(listings[i]._links['wp:attachment'][0].href).subscribe(function (data) {
                if (data && data.length > 0) {
                  listings[i].img_cover = data[0].source_url;
                } else {
                  listings[i].img_cover = '';
                }
              });
            };

            for (var i = 0; i < listings.length; i++) {
              _loop2(i);
            }
          }
        }
      }, {
        key: "getCategoryId",
        value: function getCategoryId(id) {
          this.listingCategories.forEach(function (cat) {
            if (cat.id == id) {
              return cat;
            }
          });
          return undefined;
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress(service, locationService, nativeGeocoder) {
          console.log('Get my location');
          var options = {
            useLocale: true,
            maxResults: 5
          };

          if (GlobalFields.site_details.mapType == 1) {
            //Google Maps
            nativeGeocoder.reverseGeocode(GlobalFields.lat, GlobalFields["long"], options).then(function (result) {
              console.log(JSON.stringify(result));
              GlobalFields.address = '';
              if (result[0].thoroughfare) //Street
                GlobalFields.address = result[0].thoroughfare + ', ';
              if (result[0].subThoroughfare) //Address number
                GlobalFields.address = GlobalFields.address + result[0].subThoroughfare + ', ';
              GlobalFields.address = GlobalFields.address + result[0].locality + ', ' + result[0].countryName;
            })["catch"](function (error) {
              console.log(error);
              locationService.getMyAddressFromGoogle(GlobalFields.lat, GlobalFields["long"]).subscribe(function (data) {
                if (data && data.results && data.results.length > 0) {
                  GlobalFields.address = data.results[0].formatted_address;
                }
              });
            });
          } else {
            //Open Street Maps
            locationService.getAddressFromOpenMaps(GlobalFields.lat, GlobalFields["long"]).subscribe(function (res) {
              GlobalFields.address = res.display_name;
            });
          }
        }
      }, {
        key: "setLang",
        value: function setLang(lang, translate) {
          GlobalFields.languages.forEach(function (l) {
            if (l.flag == lang) {
              l.isChecked = true;
              translate.use(lang);
              console.log('language setted'); //change font based on language

              var html = document.getElementById('mainHtmlTag');
              if (html) html.className = l.fontStyleClass;
            } else {
              l.isChecked = false;
            }
          });
        }
      }, {
        key: "getPrimaryColorJson",
        value: function getPrimaryColorJson() {
          return {
            'color': this.site_details.primaryColor
          };
        }
      }, {
        key: "getPrimaryColorBackgroundJson",
        value: function getPrimaryColorBackgroundJson() {
          return {
            'background-color': this.site_details.primaryColor
          };
        }
      }, {
        key: "getBodyColorJson",
        value: function getBodyColorJson() {
          return {
            'color': this.site_details.bodyBackgroundColor
          };
        }
      }, {
        key: "isWhiteBackground",
        value: function isWhiteBackground() {
          if (!this.site_details.bodyBackgroundColor || this.site_details.bodyBackgroundColor == 'white' || this.site_details.bodyBackgroundColor == '#fff' || this.site_details.bodyBackgroundColor == '#ffffff') return true;else return false;
        }
      }, {
        key: "getBodyColorBackgroundJson",
        value: function getBodyColorBackgroundJson() {
          return {
            'background-color': this.site_details.bodyBackgroundColor
          };
        } //Return white background if listing list type is airbnb

      }, {
        key: "getBodyColorBackgroundJsonSearchPage",
        value: function getBodyColorBackgroundJsonSearchPage() {
          return {
            'background-color': this.site_details.bodyBackgroundColor
          };
        }
      }, {
        key: "updateColor",
        value: function updateColor(themeService) {
          var color = this.site_details.primaryColor; // I'M ASSUMING THE PICKER RETURNS IT AS A STRING LIKE '#333333'

          GlobalFields.theme.primary = this.site_details.primaryColor;
          themeService.setTheme(GlobalFields.theme);
          var myTags = document.getElementsByClassName('dynamic-primary-color');

          for (var i = 0; i < myTags.length; i++) {
            myTags.item(i).style.color = color; // myTags[i].style.backgroundColor = color;
            // UPDATE ANYTHING ELSE YOU WANT
          }
        }
      }, {
        key: "setCustomFont",
        value: function setCustomFont(themeService) {
          if (this.site_details.customGoogleFontFamily) themeService.setGlobalFont(this.site_details.customGoogleFontFamily);else themeService.setGlobalFont('Didact Gothic');
        }
      }, {
        key: "getLatLongFromAddress",
        value: function getLatLongFromAddress(locationService, address) {
          if (GlobalFields.site_details.mapType == 1) {
            locationService.getMyLatLongFromGoogle(address).subscribe(function (data) {
              if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
                GlobalFields.filtersSearch.lat = data.results[0].geometry.location.lat;
                GlobalFields.filtersSearch.lng = data.results[0].geometry.location.lng;
              }
            });
          } else {
            //Open Street Maps
            locationService.getLatLongFromOpenMaps(address).subscribe(function (data) {
              console.log(data);

              if (data && data.length > 0) {
                GlobalFields.filtersSearch.lat = data[0].lat;
                GlobalFields.filtersSearch.lng = data[0].lon;
              }
            });
          }
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          //clear all but not the location
          GlobalFields.filtersSearch.categories = [];
          GlobalFields.filtersSearch.location = undefined;
          GlobalFields.filtersSearch.region = undefined;
          GlobalFields.filtersSearch.tags = [];
          GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions.forEach(function (t) {
            return t.selected = undefined;
          });
          GlobalFields.filtersSearch.customFieldsDropdownKeysOptions.forEach(function (t) {
            return t.selected = undefined;
          });
          GlobalFields.filtersSearch.range = undefined;
          GlobalFields.filtersSearch.name = undefined;
          GlobalFields.filtersSearch.date = undefined; //GlobalFields.filtersSearch.lat = undefined;
          //GlobalFields.filtersSearch.lng = undefined;
          //GlobalFields.filtersSearch.location = undefined;
        }
      }, {
        key: "selectListingTypeDetail",
        value: function selectListingTypeDetail() {
          GlobalFields.selectedTypeDetail = GlobalFields.listingTypesDetails.find(function (res) {
            return res.ID == GlobalFields.filtersSearch.selectedType;
          }); // set default value to the range

          if (GlobalFields.selectedTypeDetail) GlobalFields.selectedTypeDetail.case27_listing_type_search_page.advanced.facets.forEach(function (filter) {
            if (filter.type == 'proximity') {
              GlobalFields.filtersSearch.range = GlobalFields.getDefaultProximity('advanced');
            }
          });
        }
      }, {
        key: "getCustomTaxonomiesByKey",
        value: function getCustomTaxonomiesByKey(key) {
          var res = GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions.find(function (a) {
            return a.key == key;
          });
          return res;
        }
      }, {
        key: "getCustomFieldsByKey",
        value: function getCustomFieldsByKey(key) {
          var res = GlobalFields.filtersSearch.customFieldsDropdownKeysOptions.find(function (a) {
            return a.key == key;
          });
          return res;
        }
      }, {
        key: "getCustomTextFieldsByKey",
        value: function getCustomTextFieldsByKey(key) {
          var res = GlobalFields.filtersSearch.customFieldsText.find(function (a) {
            return a.key == key;
          });
          return res;
        }
      }, {
        key: "getCustomTaxonomiesByKeyAddForm",
        value: function getCustomTaxonomiesByKeyAddForm(key) {
          var res = GlobalFields.addForm.customTaxonomiesDropdownKeysOptions.find(function (a) {
            return a.key == key;
          });
          return res;
        }
      }, {
        key: "getCustomFieldsByKeyAddForm",
        value: function getCustomFieldsByKeyAddForm(key) {
          var res = GlobalFields.addForm.customFieldsDropdownKeysOptions.find(function (a) {
            return a.key == key;
          });
          return res;
        }
      }, {
        key: "getCustomFieldsMultiselectByKeyAddForm",
        value: function getCustomFieldsMultiselectByKeyAddForm(key) {
          var res = GlobalFields.addForm.customFieldsMultiselectKeysOptions.find(function (a) {
            return a.key == key;
          });
          return res;
        }
      }, {
        key: "filterNotCustomFields",
        value: function filterNotCustomFields(fields) {
          var res = [];
          if (fields && fields.length > 0) fields.forEach(function (key) {
            if (!key.includes('cover') && !key.includes('job_video') && !key.includes('description') && !key.includes('edited') && !key.includes('logo') && !key.includes('expires') && !key.includes('tagline') && !key.includes('links') && !key.includes('geo') && !key.includes('price_range') && !key.includes('key') && !key.includes('thumbnail_id') && !key.includes('work_hours') && !key.includes('case27_listing_type') && !key.includes('job_category') && !key.includes('location') && !key.includes('phone') && !key.includes('email') && !key.includes('title') && !key.includes('yoast') && !key.includes('gallery') && !key.includes('tags') && !key.includes('package_id') && !key.includes('region') && !key.includes('edit') && !key.includes('claimed') && !key.includes('case27') && !key.includes('meta') && !key.includes('Meta') && !key.includes('wp') && !key.includes('application') && !key.includes('featured') && !key.includes('jetpack') && !key.includes('_job_date') && !key.includes('oembed') && !key.includes('cache')) if (!GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions.find(function (tax) {
              return tax.key == key;
            })) {
              res.push(key);
            }
          });
          return res;
        }
      }, {
        key: "filterNotCustomTaxonomies",
        value: function filterNotCustomTaxonomies(fields) {
          var res = [];

          for (var key in fields) {
            if (!key.includes('job_listing_category') && !key.includes('region') && !key.includes('case27_job_listing_tags')) res.push(key);
          }

          return res;
        }
      }, {
        key: "keyIsACustomField",
        value: function keyIsACustomField(key) {
          var a = GlobalFields.listingCustomFieldKeys.find(function (k) {
            return k == key;
          });
          if (a) return true;else return false;
        }
      }, {
        key: "duplicateObj",
        value: function duplicateObj(obj) {
          return JSON.parse(JSON.stringify(obj));
        }
      }, {
        key: "openAlert",
        value: function openAlert(alertController, header, subHeader, msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return alertController.create({
                      header: 'Error',
                      subHeader: 'Error on your server',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "openSuccessAlert",
        value: function openSuccessAlert(alertController, header, subHeader, msg, btnMsg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return alertController.create({
                      header: header,
                      subHeader: subHeader,
                      message: msg,
                      buttons: [btnMsg]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "getLanguageLayout",
        value: function getLanguageLayout() {
          var language = GlobalFields.languages.find(function (l) {
            return l.isChecked;
          });

          if (language) {
            if (language.flag == 'sa' || language.flag == 'il') return 'rtl';else return 'ltr';
          }
        } //Proximity default values

        /*
        In the array GlobalFields.selectedTypeDetail.case27_listing_type_search_page.advanced.facets[] search for type=='proximity'
        Can also have options setted instead of the single fields
        * {
          default: "20"
          default_label: ""
          is_primary: false
          label: "Proximity:"
          max: "80"
          options: []
          step: 1
          type: "proximity"
          units: "metric"
          }
        *
        * */

      }, {
        key: "getMinimumProximity",
        value: function getMinimumProximity(search_type) {
          var v = 0;

          if (GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type] && GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
            var opt = GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(function (el) {
              return el.type == 'proximity';
            });
            if (opt) v = opt.min;

            if (!v && opt.options && opt.options.lenght > 0) {
              //case it has options array
              var o = opt.options.find(function (el) {
                return el.name == 'min';
              });
              if (o) v = o.value;
            }

            if (!v) v = 0;
          }

          return v;
          /*let v = 0;
          if (obj.options && obj.options.length > 0) {
            obj.options.forEach(o => {
              if (o.name == 'min')
                v = parseInt(o.value);
            });
          } else {
            if (obj.min)
              v = parseInt(obj.min);
          }
          return v;
          */
        }
      }, {
        key: "getMaximumProximity",
        value: function getMaximumProximity(search_type) {
          var v = 500;

          if (GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type] && GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
            var opt = GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(function (el) {
              return el.type == 'proximity';
            });
            if (opt) v = opt.max;

            if (!v && opt.options && opt.options.lenght > 0) {
              //case it has options array
              var o = opt.options.find(function (el) {
                return el.name == 'max';
              });
              if (o) v = o.value;
            }

            if (!v) v = 500;
          }

          return v;
          /*
          if (obj.options && obj.options.length > 0) {
            obj.options.forEach(o => {
              if (o.name == 'max')
                v = parseInt(o.value);
            });
          } else {
            if (obj.max)
              v = parseInt(obj.max);
          }
          return v;
               */
        }
      }, {
        key: "getUnitRangeProximity",
        value: function getUnitRangeProximity(search_type) {
          var v = 'metric';

          if (GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type] && GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
            var opt = GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(function (el) {
              return el.type == 'proximity';
            });
            if (opt) v = opt.units;

            if (!v && opt.options) {
              //case it has options array
              var o = opt.options.find(function (el) {
                return el.name == 'units';
              });
              if (o) v = o.value;
            }

            if (!v) v = 'metric';
          }

          return v;
          /*  let v = '';
            if (obj.options && obj.options.length > 0) {
              obj.options.forEach(o => {
                if (o.name == 'units')
                  v = o.value;
              });
            } else {
              if (obj.units)
                v = obj.units;
            }
            return v;
           */
        }
      }, {
        key: "getStepProximity",
        value: function getStepProximity(search_type) {
          var v = 1;

          if (GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type] && GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
            var opt = GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(function (el) {
              return el.type == 'proximity';
            });
            if (opt) v = opt.step;

            if (!v && opt.options && opt.options.lenght > 0) {
              //case it has options array
              var o = opt.options.find(function (el) {
                return el.name == 'step';
              });
              if (o) v = o.value;
            }

            if (!v) v = 1;
          }

          return v;
        }
      }, {
        key: "getDefaultProximity",
        value: function getDefaultProximity(search_type) {
          var v = 10;

          if (GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type] && GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
            var opt = GlobalFields.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(function (el) {
              return el.type == 'proximity';
            });
            if (opt) v = opt["default"];

            if (!v && opt.options && opt.options.lenght > 0) {
              //case it has options array
              var o = opt.options.find(function (el) {
                return el.name == 'default';
              });
              if (o) v = o.value;
            }

            if (!v) v = 10;
          }

          return v;
        }
      }, {
        key: "getOnlyTimeFromDate",
        value: function getOnlyTimeFromDate(time) {
          var t1 = time.split('T');
          console.log(t1);

          if (t1 && t1.length > 1) {
            //the format is 2020-09-01T07:00:54.821-00:00
            var t2 = t1[1].split(':');

            if (t2.length > 1) {
              var hr = t2[0];
              var mm = t2[1];
              console.log(hr + ':' + mm);
              return hr + ':' + mm;
            }
          } else if (t1 && t1.length == 1) {
            //the format is 18:00
            var _t = t1[0].split(':');

            if (_t.length > 1) {
              var _hr = _t[0];
              var _mm = _t[1];
              console.log(_hr + ':' + _mm);
              return _hr + ':' + _mm;
            }
          }
        }
      }]);

      return GlobalFields;
    }();

    GlobalFields.listingTypesDetails = [];
    GlobalFields.listingTags = [];
    GlobalFields.listingCategories = [];
    GlobalFields.posts = [];
    GlobalFields.filteredListings = [];
    GlobalFields.recentViewedListings = [];
    GlobalFields.notifications = [];
    GlobalFields.searchByStringListings = [];
    GlobalFields.searchString = '';
    GlobalFields.oldSearchString = '';
    GlobalFields.regions = [];
    GlobalFields.selectedImg = '';
    GlobalFields.customRatingsSelected = [];
    GlobalFields.oldReview = undefined; //app status part

    GlobalFields.loading = true;
    GlobalFields.loadingSoft = false;
    GlobalFields.errorIni = false; //account part

    GlobalFields.isLoggedIn = false;
    GlobalFields.username = '';
    GlobalFields.password = '';
    GlobalFields.nonce = '';
    GlobalFields.bookmarkedListings = [];
    GlobalFields.showTabs = true; //theme data

    GlobalFields.theme = {
      primary: '#39BFBD',
      secondary: '#4CE0B3',
      tertiary: '#FF5E79',
      light: '#ffffff',
      medium: '#B682A5',
      dark: '#34162A'
    }; //languages

    GlobalFields.languages = [{
      val: 'English',
      isChecked: true,
      flag: 'gb',
      fontStyleClass: 'fontStyle1'
    }]; //Sitemenu controller

    GlobalFields.navigateAsRoot = false;
    GlobalFields.timeZones = ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek', 'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Fort_Nelson', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Macquarie', 'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/Syowa', 'Antarctica/Troll', 'Antarctica/Vostok', 'Arctic/Longyearbyen', 'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Atyrau', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Chita', 'Asia/Choibalsan', 'Asia/Colombo', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kathmandu', 'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Riyadh', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Tomsk', 'Asia/Ulaanbaatar', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faroe', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena', 'Atlantic/Stanley', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Kirov', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Saratov', 'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Wake', 'Pacific/Wallis', 'UTC'];
    GlobalFields.dataIsReady = true;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'onboarding',
      pathMatch: 'full'
    }, {
      path: 'onboarding',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | onboarding-onboarding-module */
        "onboarding-onboarding-module").then(__webpack_require__.bind(null,
        /*! ./onboarding/onboarding.module */
        "./src/app/onboarding/onboarding.module.ts")).then(function (m) {
          return m.OnboardingPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/dialogs/ngx */
    "./node_modules/@ionic-native/dialogs/ngx/index.js");
    /* harmony import */


    var _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tabs/modalAdd/modalAdd */
    "./src/app/tabs/modalAdd/modalAdd.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ionic_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ionic-cache */
    "./node_modules/ionic-cache/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js"); // declare var admob;


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, router, splashScreen, statusBar, service, dialogs, modalCtrl, cache, geolocation, nativeGeocoder, alertController, translate, themeService, locationService, storage, navCtrl) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.service = service;
        this.dialogs = dialogs;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.translate = translate;
        this.themeService = themeService;
        this.locationService = locationService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"];
        this.appPages = [{
          title: 'home',
          url: '/home',
          icon: 'home'
        }];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        console.log('ini app');
        this.initializeApp(); //https://ionicframework.com/docs/v3/developer-resources/ng2-translate/

        translate.setDefaultLang('gb');
        cache.setDefaultTTL(60 * 60); //set default cache TTL for 1 hour

        this.GlobalFields.init(service, dialogs, platform, geolocation, nativeGeocoder, alertController, translate, themeService, locationService);
        this.platform.ready().then(function () {
          if (_this2.platform.is('android')) _this2.backButtonEvent();
        });
      } //Add feature of back button in Android


      _createClass(AppComponent, [{
        key: "backButtonEvent",
        value: function backButtonEvent() {
          var _this3 = this;

          this.platform.backButton.subscribeWithPriority(0, function () {
            _this3.routerOutlets.forEach(function (outlet) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (this.router.url != '/tabs/home') {
                          // await this.router.navigate(['/']);
                          // await this.location.back();
                          this.navCtrl.back();
                        } else if (this.router.url == '/tabs/home') {
                          /*if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                            this.lastTimeBackPress = new Date().getTime();
                            this.presentAlertConfirm();
                          } else {
                            navigator['app'].exitApp();
                          }*/
                          navigator['app'].exitApp();
                        }

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      // header: 'Confirm!',
                      message: 'Are you sure you want to exit the app?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Close App',
                        handler: function handler() {
                          navigator['app'].exitApp();
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this4 = this;

          this.platform.ready().then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(this.platform.platforms());
                      this.statusBar.hide();
                      _context6.next = 4;
                      return this.storage.get('onboarding');

                    case 4:
                      this.stateValue = _context6.sent;
                      console.log(this.stateValue);
                      console.log('String', this.stateValue);

                      if (!this.stateValue) {
                        this.storage.set('onboarding', 'visit');
                      } else {
                        this.storage.get('tabs');
                        this.router.navigate(['/tabs/home']);
                      }

                      if (this.platform.is('android')) {
                        _GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].mode = 'md';
                        this.statusBar.overlaysWebView(false);
                      } else {
                        _GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].mode = 'ios';
                        this.splashScreen.hide();
                        this.statusBar.hide(); //this.statusBar.overlaysWebView(false);
                        //this.statusBar.styleDefault();
                        //styleDefault not work on ios 13 so need to put light content when dark mode is enabled
                        //this.statusBar.styleLightContent();
                      } //this.createBanner();


                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "checkPlatform",
        value: function checkPlatform() {
          if (this.platform.is('mobileweb') || !this.platform.is('ios')) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "openAddModal",
        value: function openAddModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var profileModal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_8__["ModalAddNode"],
                      componentProps: {
                        userId: 8675309
                      }
                    });

                  case 2:
                    profileModal = _context7.sent;
                    _context7.next = 5;
                    return profileModal.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "goTo",
        value: function goTo(url) {
          this.router.navigateByUrl(url);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]
      }, {
        type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
      }, {
        type: _services_theme_service__WEBPACK_IMPORTED_MODULE_14__["ThemeService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_15__["LocationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"], _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], ionic_cache__WEBPACK_IMPORTED_MODULE_10__["CacheService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _services_theme_service__WEBPACK_IMPORTED_MODULE_14__["ThemeService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_15__["LocationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, HttpLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tabs/modalAdd/modalAdd */
    "./src/app/tabs/modalAdd/modalAdd.ts");
    /* harmony import */


    var _home_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/modalPost/modalPost */
    "./src/app/home/modalPost/modalPost.ts");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");
    /* harmony import */


    var _searchPage_filterModal_filterModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./searchPage/filterModal/filterModal */
    "./src/app/searchPage/filterModal/filterModal.ts");
    /* harmony import */


    var _home_popoverSearch_popoverSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/popoverSearch/popoverSearch */
    "./src/app/home/popoverSearch/popoverSearch.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var ionic_cache__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ionic-cache */
    "./node_modules/ionic-cache/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/dialogs/ngx */
    "./node_modules/@ionic-native/dialogs/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _searchPage_search_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./searchPage/search.module */
    "./src/app/searchPage/search.module.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _listingPage_popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./listingPage/popoverRatings/popoverRatings */
    "./src/app/listingPage/popoverRatings/popoverRatings.ts");
    /* harmony import */


    var _listingPage_popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./listingPage/popoverImg/popoverImg */
    "./src/app/listingPage/popoverImg/popoverImg.ts");
    /* harmony import */


    var _sideMenu_sideMenu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./sideMenu/sideMenu */
    "./src/app/sideMenu/sideMenu.ts");
    /* harmony import */


    var _listingPage_modalWriteReview_modalWriteReview__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./listingPage/modalWriteReview/modalWriteReview */
    "./src/app/listingPage/modalWriteReview/modalWriteReview.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/__ivy_ngcc__/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _listingList_listingList__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./listingList/listingList */
    "./src/app/listingList/listingList.ts");
    /* harmony import */


    var _menuPage_loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./menuPage/loginComponent/loginComponent.module */
    "./src/app/menuPage/loginComponent/loginComponent.module.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _listingList_customFieldsToDisplay_customFieldsToDisplay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./listingList/customFieldsToDisplay/customFieldsToDisplay */
    "./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./services/WooCommerceService */
    "./src/app/services/WooCommerceService.ts");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _home_modalGenericSearch_modal_generic_search_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./home/modalGenericSearch/modal-generic-search.component */
    "./src/app/home/modalGenericSearch/modal-generic-search.component.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js"); // imgCache: https://www.npmjs.com/package/ionic-image-loader


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_9__["ModalAddNode"], _home_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_10__["ModalPost"], _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_11__["ListingPage"], _sideMenu_sideMenu__WEBPACK_IMPORTED_MODULE_34__["SideMenu"], _listingPage_popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_32__["PopoverRatings"], _listingPage_modalWriteReview_modalWriteReview__WEBPACK_IMPORTED_MODULE_35__["ModalWriteReview"], _listingPage_popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_33__["PopoverImg"], _searchPage_filterModal_filterModal__WEBPACK_IMPORTED_MODULE_12__["FilterModal"], _home_popoverSearch_popoverSearch__WEBPACK_IMPORTED_MODULE_13__["PopoverSearch"], _home_modalGenericSearch_modal_generic_search_component__WEBPACK_IMPORTED_MODULE_48__["ModalGenericSearch"]],
      entryComponents: [_listingPage_listingPage__WEBPACK_IMPORTED_MODULE_11__["ListingPage"], _sideMenu_sideMenu__WEBPACK_IMPORTED_MODULE_34__["SideMenu"], _listingPage_popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_32__["PopoverRatings"], _listingPage_modalWriteReview_modalWriteReview__WEBPACK_IMPORTED_MODULE_35__["ModalWriteReview"], _listingPage_popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_33__["PopoverImg"], _home_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_10__["ModalPost"], _searchPage_filterModal_filterModal__WEBPACK_IMPORTED_MODULE_12__["FilterModal"], _home_popoverSearch_popoverSearch__WEBPACK_IMPORTED_MODULE_13__["PopoverSearch"], _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_9__["ModalAddNode"], _listingList_listingList__WEBPACK_IMPORTED_MODULE_38__["ListingList"], _listingList_customFieldsToDisplay_customFieldsToDisplay__WEBPACK_IMPORTED_MODULE_43__["CustomFieldsToDisplay"], _home_modalGenericSearch_modal_generic_search_component__WEBPACK_IMPORTED_MODULE_48__["ModalGenericSearch"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], ionic_cache__WEBPACK_IMPORTED_MODULE_17__["CacheModule"].forRoot({
        keyPrefix: 'custom-listing-app'
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
        }
      }), _home_home_module__WEBPACK_IMPORTED_MODULE_28__["HomePageModule"], _searchPage_search_module__WEBPACK_IMPORTED_MODULE_29__["SearchPageModule"], _shared_module__WEBPACK_IMPORTED_MODULE_30__["SharedModule"], _menuPage_loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_39__["LoginComponentModule"]],
      providers: [_services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"], _services_theme_service__WEBPACK_IMPORTED_MODULE_21__["ThemeService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_22__["LocationService"], _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_45__["WooCommerceService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_23__["Dialogs"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_25__["NativeGeocoder"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_27__["LaunchNavigator"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_26__["CallNumber"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_18__["SocialSharing"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_31__["NativeStorage"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_37__["WebView"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_36__["IonicImageLoader"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_40__["ImagePicker"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_41__["InAppBrowser"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_42__["Base64"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_44__["OneSignal"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_46__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_47__["Facebook"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_49__["AppVersion"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_module__WEBPACK_IMPORTED_MODULE_30__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"], _sideMenu_sideMenu__WEBPACK_IMPORTED_MODULE_34__["SideMenu"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/entities/FiltersSearch.ts":
  /*!*******************************************!*\
    !*** ./src/app/entities/FiltersSearch.ts ***!
    \*******************************************/

  /*! exports provided: WorkHoursDay, FiltersSearch */

  /***/
  function srcAppEntitiesFiltersSearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkHoursDay", function () {
      return WorkHoursDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersSearch", function () {
      return FiltersSearch;
    });

    var WorkHoursDay = function WorkHoursDay() {
      _classCallCheck(this, WorkHoursDay);

      this.status = 'enter-hours'; //enter-hours, open-all-day, closed-all-day, by-appointment-only

      this.entry_hours = [];
    };

    var FiltersSearch = function FiltersSearch() {
      _classCallCheck(this, FiltersSearch);

      this.categories = [];
      this.price_range = []; //can be an array or a string

      this.regions = []; //used by ionic checkbox

      this.tags = [];
      this.customTaxonomiesDropdownKeysOptions = [];
      this.customFieldsDropdownKeysOptions = [];
      this.customFieldsMultiselectKeysOptions = [];
      this.customFieldsText = [];
      this.customFieldsNumber = [];
      this.gallery = [];
      this.currentPage = 1;
      this.noMorePage = false;
      this.work_hours = {
        Monday: undefined,
        Tuesday: undefined,
        Wednesday: undefined,
        Thursday: undefined,
        Friday: undefined,
        Saturday: undefined,
        Sunday: undefined
      };
    };
    /***/

  },

  /***/
  "./src/app/entities/Product.ts":
  /*!*************************************!*\
    !*** ./src/app/entities/Product.ts ***!
    \*************************************/

  /*! exports provided: ProdImg, Package, Product */

  /***/
  function srcAppEntitiesProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdImg", function () {
      return ProdImg;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Package", function () {
      return Package;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var ProdImg = function ProdImg() {
      _classCallCheck(this, ProdImg);
    };

    var Package = function Package() {
      _classCallCheck(this, Package);
    };

    var Product = function Product() {
      _classCallCheck(this, Product);

      this.attributes = [];
      this.categories = [];
      this.cross_sell_ids = [];
      this.default_attributes = [];
      this.downloads = [];
      this.grouped_products = [];
      this.images = [];
      this.meta_data = [];
      this.upsell_ids = [];
      this.variations = [];
    };
    /***/

  },

  /***/
  "./src/app/entities/checkboxType.ts":
  /*!******************************************!*\
    !*** ./src/app/entities/checkboxType.ts ***!
    \******************************************/

  /*! exports provided: CheckboxType */

  /***/
  function srcAppEntitiesCheckboxTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxType", function () {
      return CheckboxType;
    });

    var CheckboxType = /*#__PURE__*/function () {
      function CheckboxType() {
        _classCallCheck(this, CheckboxType);
      }

      _createClass(CheckboxType, [{
        key: "CheckboxType",
        value: function CheckboxType() {
          this.val = undefined;
          this.isChecked = false;
        }
      }]);

      return CheckboxType;
    }();
    /***/

  },

  /***/
  "./src/app/entities/listing.ts":
  /*!*************************************!*\
    !*** ./src/app/entities/listing.ts ***!
    \*************************************/

  /*! exports provided: AddFormSelectItem, Listing */

  /***/
  function srcAppEntitiesListingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFormSelectItem", function () {
      return AddFormSelectItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Listing", function () {
      return Listing;
    });
    /* harmony import */


    var _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./FiltersSearch */
    "./src/app/entities/FiltersSearch.ts");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../GlobalFields */
    "./src/app/GlobalFields.ts");

    var AddFormSelectItem = function AddFormSelectItem() {
      _classCallCheck(this, AddFormSelectItem);
    };

    var Listing = function Listing() {
      _classCallCheck(this, Listing);

      this.job_gallery = [];
      this.work_hours = {
        Monday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        Tuesday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        Wednesday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        Thursday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        Friday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        Saturday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        Sunday: new _FiltersSearch__WEBPACK_IMPORTED_MODULE_0__["WorkHoursDay"](),
        timezone: _GlobalFields__WEBPACK_IMPORTED_MODULE_1__["GlobalFields"].site_details ? _GlobalFields__WEBPACK_IMPORTED_MODULE_1__["GlobalFields"].site_details.timezone : undefined
      };
      this.links = [];
    };
    /***/

  },

  /***/
  "./src/app/entities/listingTypeDetail.ts":
  /*!***********************************************!*\
    !*** ./src/app/entities/listingTypeDetail.ts ***!
    \***********************************************/

  /*! exports provided: FieldsAddForm, ListingTypeDetail */

  /***/
  function srcAppEntitiesListingTypeDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldsAddForm", function () {
      return FieldsAddForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingTypeDetail", function () {
      return ListingTypeDetail;
    });

    var FieldsAddForm = function FieldsAddForm() {
      _classCallCheck(this, FieldsAddForm);
    };

    var ListingTypeDetail = function ListingTypeDetail() {
      _classCallCheck(this, ListingTypeDetail);
    };
    /***/

  },

  /***/
  "./src/app/entities/post.ts":
  /*!**********************************!*\
    !*** ./src/app/entities/post.ts ***!
    \**********************************/

  /*! exports provided: Post */

  /***/
  function srcAppEntitiesPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });

    var Post = function Post() {
      _classCallCheck(this, Post);
    };
    /***/

  },

  /***/
  "./src/app/entities/user.ts":
  /*!**********************************!*\
    !*** ./src/app/entities/user.ts ***!
    \**********************************/

  /*! exports provided: User */

  /***/
  function srcAppEntitiesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/home.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../utilities/utilities.module */
    "./src/app/utilities/utilities.module.ts");
    /* harmony import */


    var _postsPage_postsPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./postsPage/postsPage */
    "./src/app/home/postsPage/postsPage.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
      }, {
        path: 'posts',
        component: _postsPage_postsPage__WEBPACK_IMPORTED_MODULE_10__["PostsPage"]
      }]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_9__["UtilitiesModule"]],
      declarations: [_home__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _postsPage_postsPage__WEBPACK_IMPORTED_MODULE_10__["PostsPage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.scss":
  /*!********************************!*\
    !*** ./src/app/home/home.scss ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-background {\n  background-color: white;\n}\n\n.social-cards ion-col {\n  background-color: transparent !important;\n}\n\n.searchText {\n  color: #9E9E9E;\n}\n\n.inputSearchText {\n  color: black;\n}\n\n.section {\n  padding: 15px;\n  padding-bottom: 35px;\n  margin-bottom: 15px;\n  background-color: white;\n}\n\n.titleSection {\n  font-size: 15pt;\n  height: 50px;\n}\n\n.regionTitle {\n  height: 150px;\n  text-align: center;\n  line-height: 140px;\n  background-color: rgba(45, 45, 45, 0.54);\n  border-radius: 5px;\n  color: white;\n  font-size: 16pt;\n  font-weight: 900;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.horizontalList {\n  overflow-x: auto;\n  display: inline-flex;\n  width: 100%;\n}\n\n.divHorizontalList {\n  width: 50% !important;\n  max-width: none !important;\n  margin: 5px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin: -5px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 10pt;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.social-cards ion-col {\n  padding: 0;\n  background-color: #f3f5f8;\n}\n\n.imgList {\n  height: 100px;\n  border-radius: 5px;\n}\n\n.imgTypes {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  border-radius: 5px;\n}\n\n.centralArrow {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.totalPageBackImg {\n  background: black;\n  position: relative;\n  width: 100%;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 20px;\n  padding-bottom: 50px;\n  overflow: hidden;\n}\n\n.totalPageBackImg::after {\n  content: \"\";\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n}\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 2px;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n.backImgSquared {\n  width: 100px;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.backImgLogo {\n  background-size: 100% !important;\n  height: 50px;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.backImgLogo2 {\n  background-size: 100% !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  position: relative;\n  top: 10%;\n  left: 25%;\n  display: flow-root;\n  height: 100px;\n  z-index: 4;\n  width: 50%;\n}\n\n.postImg {\n  width: 100%;\n  height: 200px;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.homeTypeLabel {\n  padding: 5px;\n  font-size: 12pt;\n  color: black;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.basicSearchContainer {\n  padding: 20px;\n  z-index: 9;\n  background-color: white;\n  position: relative;\n  top: 10%;\n  margin: 15px;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.imgLogoHorizontalltr {\n  width: 50%;\n  height: auto;\n  margin-left: 25%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n}\n\n.imgLogoHorizontalrtl {\n  margin-right: 25% !important;\n  margin-left: 0 !important;\n  width: 50%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n}\n\n.btn-search {\n  background-color: #ffffff !important;\n  transition: box-shadow 200ms ease-in !important;\n  border: 1px solid #EBEBEB !important;\n  border-radius: 63px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n  color: #222323;\n  padding: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 2px);\n  display: block;\n  margin: 5px;\n  font-size: 10pt;\n}\n\n.btn-search i {\n  font-size: 12pt;\n  margin-right: 10px;\n}\n\n.typeTitle {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n}\n\n.btnLight {\n  /* border: solid 1px #4392ff;*/\n  border-radius: 10px;\n  float: right;\n  /*padding: 10px;*/\n}\n\n.loadingSlide {\n  padding: 5px;\n  height: 200px;\n  line-height: 200px;\n  border: 1px solid #f0f0f0;\n  border-radius: 10px;\n  margin: 5px;\n  color: #c2c2c2;\n}\n\n.swipeSpan {\n  text-align: center;\n  color: white;\n  height: 50px;\n  line-height: 1;\n  position: absolute;\n  width: 140px;\n  left: 50%;\n  margin-left: -70px;\n}\n\n/* Airbnb */\n\n.airbnbTypeName {\n  color: #222222 !important;\n  font-weight: 600;\n}\n\n.backImgAirbnbTypes {\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  border-radius: 5px 0 0;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n/* Tripadvisor */\n\n.backImgTrip {\n  width: 100%;\n  height: 140px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.gridTripAdvisor {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: #f3f3f3;\n}\n\n.divGridTrip {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 49.75%;\n  margin-bottom: 0.5%;\n  background: white;\n  height: 60px;\n  margin: 0px;\n  margin-bottom: 1px;\n}\n\n.divGridTrip span {\n  text-align: center;\n  text-align: center;\n  color: #4c4c4c;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 700;\n}\n\n.divGridTrip i {\n  font-size: 20px;\n}\n\n.divGridTrip:nth-last-child(n+5):first-child,\n.divGridTrip:nth-last-child(n+5):first-child ~ *,\n.divGridTrip:nth-last-child(n+6):first-child,\n.divGridTrip:nth-last-child(n+6):first-child ~ * {\n  flex-basis: 33%;\n}\n\n.divGridTrip:nth-child(5):last-child {\n  margin-right: auto;\n  margin-left: 0.5%;\n}\n\n.btn-search-trip {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  text-align: center;\n}\n\n.btn-search-trip button {\n  background-color: #ffffff !important;\n  transition: box-shadow 200ms ease-in !important;\n  border: 1px solid #EBEBEB !important;\n  width: 60%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  display: block;\n  text-align: left;\n  font-size: small;\n  border-radius: 50px;\n  padding: 12px 20px;\n  padding-right: 30px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);\n  color: #4c4c4c;\n}\n\n.btn-search-trip i {\n  float: right;\n  margin-right: -20px;\n  color: #000a12;\n}\n\n.btn-near-trip {\n  border: 1px solid #EBEBEB !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin: 0 auto;\n  display: block;\n  text-align: left;\n  font-size: small;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);\n  color: #010a11;\n  position: absolute;\n  right: 8px;\n  bottom: 8px;\n  padding: 10px 24px;\n  border-radius: 0 !important;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9ob21lL2hvbWUuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx1QkFBQTtBQ0FGOztBREVBO0VBQ0Usd0NBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDSUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFSjs7QURHQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSwrQkFBQTtLQUFBLDRCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNGRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtBQ0hGOztBREtBO0VBQ0UsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNERjs7QURLQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwrR0FBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURJQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsMkJBQUE7RUFDQSxrQ0FBQTtBQ0RGOztBREtBO0VBQ0MsOEJBQUE7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURNQSxXQUFBOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQSxnQkFBQTs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURTQTs7OztFQU1FLGVBQUE7QUNSRjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNURjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNvY2lhbC1jYXJkcyBpb24tY29se1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaFRleHR7XG4gIGNvbG9yOiAjOUU5RTlFO1xufVxuLmlucHV0U2VhcmNoVGV4dHtcbiAgY29sb3I6YmxhY2s7XG59XG5cbi5zZWN0aW9ue1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGl0bGVTZWN0aW9ue1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGhlaWdodDogNTBweDtcbn1cblxuXG4ucmVnaW9uVGl0bGV7XG4gIGhlaWdodDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA0NSwgNDUsIDAuNTQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBmb250LXdlaWdodDogOTAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG4uaG9yaXpvbnRhbExpc3R7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXZIb3Jpem9udGFsTGlzdHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuXG4gIGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjotNXB4O1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxufVxuXG4uc29jaWFsLWNhcmRzIGlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY4O1xufVxuXG5cblxuLmltZ0xpc3R7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmltZ1R5cGVze1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jZW50cmFsQXJyb3d7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG59XG5cblxuLnRvdGFsUGFnZUJhY2tJbWd7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4udG90YWxQYWdlQmFja0ltZzo6YWZ0ZXIge1xuICBjb250ZW50OicnO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICBvcGFjaXR5OjAuMjtcbn1cblxuLmJhY2tJbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ1NxdWFyZWR7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5iYWNrSW1nTG9nb3tcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5iYWNrSW1nTG9nbzJ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAyNSU7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgei1pbmRleDogNDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5wb3N0SW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lVHlwZUxhYmVse1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luOiAwO1xufVxuXG5cbi5iYXNpY1NlYXJjaENvbnRhaW5lcntcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDo5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG5cbi5pbWdMb2dvSG9yaXpvbnRhbGx0cntcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuLmltZ0xvZ29Ib3Jpem9udGFscnRsIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNSUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cblxuLmJ0bi1zZWFyY2h7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLWluICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogIzIyMjMyMztcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmJ0bi1zZWFyY2ggaXtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50eXBlVGl0bGV7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcblxufVxuXG4uYnRuTGlnaHR7XG4gLyogYm9yZGVyOiBzb2xpZCAxcHggIzQzOTJmZjsqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qcGFkZGluZzogMTBweDsqL1xufVxuXG4ubG9hZGluZ1NsaWRle1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjYzJjMmMyO1xufVxuXG4uc3dpcGVTcGFue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xufVxuXG5cbi8qIEFpcmJuYiAqL1xuXG4uYWlyYm5iVHlwZU5hbWV7XG4gIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYmFja0ltZ0FpcmJuYlR5cGVze1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogVHJpcGFkdmlzb3IgKi9cblxuLmJhY2tJbWdUcmlwe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5cbi5ncmlkVHJpcEFkdmlzb3J7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4uZGl2R3JpZFRyaXB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA0OS43NSU7XG4gIG1hcmdpbi1ib3R0b206IC41JTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmRpdkdyaWRUcmlwIHNwYW57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRpdkdyaWRUcmlwIGl7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG4uZGl2R3JpZFRyaXA6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkVHJpcDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkIH4gKixcblxuLmRpdkdyaWRUcmlwOm50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQsXG4uZGl2R3JpZFRyaXA6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCB+ICoge1xuXG4gIGZsZXgtYmFzaXM6IDMzJTtcbn1cblxuXG4uZGl2R3JpZFRyaXA6bnRoLWNoaWxkKDUpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAuNSU7XG59XG5cbi5idG4tc2VhcmNoLXRyaXB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bi1zZWFyY2gtdHJpcCBidXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLWluICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDYwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsLjE2KTtcbiAgY29sb3I6ICM0YzRjNGM7XG59XG5cbi5idG4tc2VhcmNoLXRyaXAgaXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBjb2xvcjogIzAwMGExMjtcbn1cblxuLmJ0bi1uZWFyLXRyaXB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogIzAxMGExMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3R0b206IDhweDtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbiIsIi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaFRleHQge1xuICBjb2xvcjogIzlFOUU5RTtcbn1cblxuLmlucHV0U2VhcmNoVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZVNlY3Rpb24ge1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnJlZ2lvblRpdGxlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgMC41NCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmhvcml6b250YWxMaXN0IHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2SG9yaXpvbnRhbExpc3Qge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogLTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjg7XG59XG5cbi5pbWdMaXN0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW1nVHlwZXMge1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jZW50cmFsQXJyb3cge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnRvdGFsUGFnZUJhY2tJbWcge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3RhbFBhZ2VCYWNrSW1nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uYmFja0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ1NxdWFyZWQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5iYWNrSW1nTG9nbyB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrSW1nTG9nbzIge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMjUlO1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gIGhlaWdodDogMTAwcHg7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uaG9tZVR5cGVMYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBjb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDA7XG59XG5cbi5iYXNpY1NlYXJjaENvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmltZ0xvZ29Ib3Jpem9udGFsbHRyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuXG4uaW1nTG9nb0hvcml6b250YWxydGwge1xuICBtYXJnaW4tcmlnaHQ6IDI1JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTAlO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuXG4uYnRuLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLWluICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogIzIyMjMyMztcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmJ0bi1zZWFyY2ggaSB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udHlwZVRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xufVxuXG4uYnRuTGlnaHQge1xuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjNDM5MmZmOyovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgLypwYWRkaW5nOiAxMHB4OyovXG59XG5cbi5sb2FkaW5nU2xpZGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjYzJjMmMyO1xufVxuXG4uc3dpcGVTcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNzBweDtcbn1cblxuLyogQWlyYm5iICovXG4uYWlyYm5iVHlwZU5hbWUge1xuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmFja0ltZ0FpcmJuYlR5cGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFRyaXBhZHZpc29yICovXG4uYmFja0ltZ1RyaXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZ3JpZFRyaXBBZHZpc29yIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5kaXZHcmlkVHJpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA0OS43NSU7XG4gIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5kaXZHcmlkVHJpcCBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGl2R3JpZFRyaXAgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRpdkdyaWRUcmlwOm50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQsXG4uZGl2R3JpZFRyaXA6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCB+ICosXG4uZGl2R3JpZFRyaXA6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkVHJpcDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkIH4gKiB7XG4gIGZsZXgtYmFzaXM6IDMzJTtcbn1cblxuLmRpdkdyaWRUcmlwOm50aC1jaGlsZCg1KTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMC41JTtcbn1cblxuLmJ0bi1zZWFyY2gtdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXNlYXJjaC10cmlwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLWluICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDYwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGNvbG9yOiAjNGM0YzRjO1xufVxuXG4uYnRuLXNlYXJjaC10cmlwIGkge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIGNvbG9yOiAjMDAwYTEyO1xufVxuXG4uYnRuLW5lYXItdHJpcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogIzAxMGExMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3R0b206IDhweDtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.ts":
  /*!******************************!*\
    !*** ./src/app/home/home.ts ***!
    \******************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modalPost_modalPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modalPost/modalPost */
    "./src/app/home/modalPost/modalPost.ts");
    /* harmony import */


    var _popoverSearch_popoverSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./popoverSearch/popoverSearch */
    "./src/app/home/popoverSearch/popoverSearch.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _modalGenericSearch_modal_generic_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modalGenericSearch/modal-generic-search.component */
    "./src/app/home/modalGenericSearch/modal-generic-search.component.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var HomePage_1; // DOC: https://ionicframework.com/docs/building/running
    // to build the apk: sudo ionic cordova build --release android
    // per testare app: https://cordova-plugin-fcm.appspot.com/
    // PER GENERARE APK: sudo cordova build android --release
    // FIREBASE EXAMPLE -> https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71

    var HomePage = HomePage_1 = /*#__PURE__*/function () {
      function HomePage(service, locationService, modalCtrl, popoverController, navController, statusBar, platform, nativeGeocoder, _sanitizer, translate, alertController, menu, appVersion) {
        var _this5 = this;

        _classCallCheck(this, HomePage);

        /*  this.imgCacheService.store("http://www.like-agency.it/media/k2/items/cache/d6086de322f98f66cc694f32ea284557_XL.jpg").then( res =>{
              console.log(res);
          });
          this.imgCacheService.restore("http://www.like-agency.it/media/k2/items/cache/d6086de322f98f66cc694f32ea284557_XL.jpg");
         */
        this.service = service;
        this.locationService = locationService;
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.navController = navController;
        this.statusBar = statusBar;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.alertController = alertController;
        this.menu = menu;
        this.appVersion = appVersion;
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"];
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.post = _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__["ListingPage"];
        this.resultSearchListings = [];
        this.posts = [];
        this.oldScollPostion = 0;
        this.headerClass = '';
        this.slideOpts1 = {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true
        };
        this.slideOptsLess1 = {
          slidesPerView: 1.4,
          spaceBetween: 10,
          centeredSlides: true
        };
        this.slideOpts2 = {
          slidesPerView: 1.3
        };
        this.slideOpts3 = {
          slidesPerView: 2.8
        };
        this.loadingByTypes = true;
        this.waitSearch = true;
        this.appVersion.getAppName().then(function (value) {
          _this5.appName = value;
        })["catch"](function (err) {
          _this5.appName = 'Custom Listing App';
        });
        service.getRecentListings().subscribe(function (data) {
          _this5.recentListings = data;
        });
        this.byTypesListings = [];

        var _loop3 = function _loop3(i) {
          _this5.loadingByTypes = true;

          _this5.byTypesListings.push([]);

          service.getListingsFilteredByType(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].listingTypesDetails[i].ID).subscribe(function (data) {
            _this5.byTypesListings[i] = data; //  this.GlobalFields.getImgFeaturedListing(this.byTypesListings[i], this.service);

            console.log(_this5.byTypesListings);
            _this5.loadingByTypes = false;
          });
        };

        for (var i = 0; i < this.GlobalFields.listingTypesDetails.length; i++) {
          _loop3(i);
        }

        service.getRecentPosts().subscribe(function (data) {
          _this5.posts = data;

          _this5.posts.forEach(function (post) {
            service.getMediaById(post.featured_media).subscribe(function (data) {
              console.log('url: ' + data.source_url);

              if (data) {
                post.img_cover = data.source_url;
              }
            });
          });
        });
        this.GlobalFields.getMyAddress(this.service, this.locationService, this.nativeGeocoder);
      }

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          /* if (GlobalFields.site_details.homeType == 2)
               this.service.setTransparentBackgroundStatusBar();
           else*/
          this.service.setWhiteBlackBackgroundStatusBar();
          /* this.subscription = this.platform.backButton.subscribe(()=>{
             navigator['app'].exitApp();
           });*/
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {//   this.subscription.unsubscribe();
        }
        /*
          openModalPost(post: Post) {
            let postModal = this.modalCtrl.create(ModalPost, {post: post});
            postModal.present();
          }
        */

      }, {
        key: "openModalSearch",
        value: function openModalSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalCtrl.create({
                      component: _modalGenericSearch_modal_generic_search_component__WEBPACK_IMPORTED_MODULE_14__["ModalGenericSearch"]
                    });

                  case 2:
                    modal = _context8.sent;
                    _context8.next = 5;
                    return modal.present();

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openModalPost",
        value: function openModalPost(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalCtrl.create({
                      component: _modalPost_modalPost__WEBPACK_IMPORTED_MODULE_6__["ModalPost"],
                      componentProps: {
                        post: post
                      }
                    });

                  case 2:
                    modal = _context9.sent;
                    _context9.next = 5;
                    return modal.present();

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
        /*
            openModalListing(listing: Listing) {
                   this.service.selectedListing = listing;
                   const listingModal = this.modalCtrl.create(ListingPage);
                listingModal.present();
                   //  this.navCtrl.push(ListingPage);
               }
           */

      }, {
        key: "getListingDetails",
        value: function getListingDetails(listing) {
          var _this6 = this;

          this.GlobalFields.loadingSoft = true;
          this.service.getListingDetailsById(listing.id).subscribe(function (data) {
            _this6.GlobalFields.selectedListing = data;

            _this6.openModalListing();
          }, function (error) {
            console.log(error);
            var msg = '';
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this6.GlobalFields.openAlert(_this6.alertController, 'Error', 'Error on web server', msg);

            _this6.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var listingModal;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.modalCtrl.create({
                      component: _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__["ListingPage"]
                    });

                  case 2:
                    listingModal = _context10.sent;
                    _context10.next = 5;
                    return listingModal.present();

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "isFeatured",
        value: function isFeatured(listing) {
          /* if (!listing.listing_data._featured)
                return '';
            if (listing.listing_data._featured == '1')
                return 'featured';
            else */
          return '';
        }
        /*
          async openModalListing(listing: Listing) {
            const modal = await this.modalCtrl.create(ListingPage,{ listing: listing });
            return await modal.present();
          }
        */

      }, {
        key: "getRandomRegionBack",
        value: function getRandomRegionBack(i) {
          var a = Math.round(i % 3) + 1;
          return '../../assets/imgs/r_' + a + '.jpg';
        }
      }, {
        key: "searchByName",
        value: function searchByName(ev) {
          this.GlobalFields.searchString = ev.target.value;
        }
      }, {
        key: "doTheSearch",
        value: function doTheSearch(ev) {
          var _this7 = this;

          var val = this.GlobalFields.searchString; //stessa stringa, per limitare le chiamate

          if (val == this.GlobalFields.oldSearchString) {
            if (!HomePage_1.popover) {
              var otps = {
                cssClass: 'searchPopover',
                mode: 'ios'
              };
              this.presentPopover(otps);
            }
          } //stringa di cerca diversa dalla prima
          else {
              setTimeout(function () {
                _this7.waitSearch = false;

                if (!_this7.waitSearch && val && val != '') {
                  _this7.service.getListingsBySearchString(val).subscribe(function (data) {
                    _this7.resultSearchListings = data;
                    _this7.GlobalFields.searchByStringListings = data;
                    _this7.GlobalFields.oldSearchString = data; //this.GlobalFields.getImgFeaturedListing(this.GlobalFields.searchByStringListings, this.service);
                  });

                  if (!HomePage_1.popover) {
                    var _otps = {
                      cssClass: 'searchPopover',
                      mode: 'ios'
                    };

                    _this7.presentPopover(_otps);
                  }

                  _this7.waitSearch = true;
                }
              }, 500);
            }
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(otps) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.popoverController.create({
                      component: _popoverSearch_popoverSearch__WEBPACK_IMPORTED_MODULE_7__["PopoverSearch"],
                      cssClass: 'searchPopover',
                      mode: 'ios',
                      event: event
                    });

                  case 2:
                    HomePage_1.popover = _context11.sent;
                    _context11.next = 5;
                    return HomePage_1.popover.present();

                  case 5:
                    HomePage_1.popover.onDidDismiss(function () {
                      // Navigate to new page.  Popover should be gone at this point completely
                      HomePage_1.popover = undefined;
                    });

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "searchByType",
        value: function searchByType(id) {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType = id;
          this.selectListingType();

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "searchByBasicSearchFilter",
        value: function searchByBasicSearchFilter() {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].basicSearch = true;
          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "toStringCategories",
        value: function toStringCategories() {
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories || _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories.length == 0) return '';else if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories.length > 3) return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories.length + ' selected';else return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories.toString();
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          if (this.GlobalFields.filtersSearch.selectedType == id) return ' selectedtypesListHorizontalWhite';else return '';
        }
      }, {
        key: "selectListingType",
        value: function selectListingType() {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          console.log(this.GlobalFields.filtersSearch.selectedType);
          this.GlobalFields.selectListingTypeDetail();
        }
      }, {
        key: "getBackground",
        value: function getBackground(image) {
          return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(to top, rgba(255, 255, 255, 0.17), rgba(23, 23, 23, 0.38)), url(".concat(image, ")"));
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress() {
          this.GlobalFields.filtersSearch.location = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].address;
        }
      }, {
        key: "searchNearMe",
        value: function searchNearMe() {
          console.log(this.GlobalFields.address);
          this.GlobalFields.filtersSearch.location = this.GlobalFields.address; // set default value to the proximity range

          this.GlobalFields.filtersSearch.range = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getDefaultProximity('basic');
          this.GlobalFields.getFilteredListingFirstTime(this.service, this.locationService, true);
          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "toStringTaxonomies",
        value: function toStringTaxonomies(key) {
          var tax = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getCustomTaxonomiesByKey(key);

          if (tax) {
            return tax.selected;
          }
        }
      }, {
        key: "toStringCustomFields",
        value: function toStringCustomFields(key) {
          var tax = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getCustomFieldsByKey(key);

          if (tax) {
            /*  if (!tax.selected || tax.selected.length == 0)
                  return "";
              else if (tax.selected.length > 3)
                  return tax.selected.length + " selected";
              else {*/
            return tax.selected; // }
          }
        }
      }, {
        key: "toStringRegions",
        value: function toStringRegions() {
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.region) return '';
          return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.region;
        }
      }, {
        key: "onScrollHideHeader",
        value: function onScrollHideHeader(event) {
          // console.log(event);
          if (event.detail.scrollTop > 50 && !this.isElementInViewPort()) {
            if (this.oldScollPostion < event.detail.scrollTop) this.headerClass = 'headerHidden';
            if (this.oldScollPostion > event.detail.scrollTop) this.headerClass = 'headerShown';
          }

          this.oldScollPostion = event.detail.scrollTop;
        } //This function just check if element is fully in vertical viewport or not

      }, {
        key: "isElementInViewPort",
        value: function isElementInViewPort() {
          var el = document.getElementById('check-point');

          if (el) {
            var rect = el.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
          }

          return true;
        }
      }, {
        key: "getImgCachedClass",
        value: function getImgCachedClass(class_to_add) {
          var class_name = 'shadedImgCached ' + class_to_add;
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
      }, {
        key: "getBackgroundBasedOnHomeType",
        value: function getBackgroundBasedOnHomeType() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.homeType == 3) return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getBodyColorBackgroundJson();
        }
      }, {
        key: "openSideMenu",
        value: function openSideMenu() {
          this.menu.enable(true, 'appMenu');
        }
      }]);

      return HomePage;
    }();

    HomePage.popover = undefined;

    HomePage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_13__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__["AppVersion"]
      }];
    };

    HomePage = HomePage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.scss */
      "./src/app/home/home.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"], _services_LocationService__WEBPACK_IMPORTED_MODULE_13__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_15__["AppVersion"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/home/modalGenericSearch/modal-generic-search.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/modalGenericSearch/modal-generic-search.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeModalGenericSearchModalGenericSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".iconType {\n  font-size: 13pt;\n  background-color: #f1f1f1 !important;\n  border-radius: 10px;\n  height: 35px;\n  text-align: center;\n  line-height: 40px;\n  width: 35px;\n  color: #3a3a3a;\n}\n\n.imageCacheGeneralSearch {\n  width: 35px;\n  height: 35px;\n  background-position: center !important;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  border-radius: 5px;\n  background-color: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9ob21lL21vZGFsR2VuZXJpY1NlYXJjaC9tb2RhbC1nZW5lcmljLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9tb2RhbEdlbmVyaWNTZWFyY2gvbW9kYWwtZ2VuZXJpYy1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL21vZGFsR2VuZXJpY1NlYXJjaC9tb2RhbC1nZW5lcmljLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uVHlwZXtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzVweDtcbiAgY29sb3I6ICMzYTNhM2E7XG59XG5cbi5pbWFnZUNhY2hlR2VuZXJhbFNlYXJjaHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLmljb25UeXBlIHtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGNvbG9yOiAjM2EzYTNhO1xufVxuXG4uaW1hZ2VDYWNoZUdlbmVyYWxTZWFyY2gge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/modalGenericSearch/modal-generic-search.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home/modalGenericSearch/modal-generic-search.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ModalGenericSearch */

  /***/
  function srcAppHomeModalGenericSearchModalGenericSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalGenericSearch", function () {
      return ModalGenericSearch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");
    /* harmony import */


    var _entities_checkboxType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../entities/checkboxType */
    "./src/app/entities/checkboxType.ts");

    var ModalGenericSearch = /*#__PURE__*/function () {
      function ModalGenericSearch(viewCtrl, service, navController, locationService, alertController) {
        _classCallCheck(this, ModalGenericSearch);

        this.viewCtrl = viewCtrl;
        this.service = service;
        this.navController = navController;
        this.locationService = locationService;
        this.alertController = alertController;
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.loading = false;
      }

      _createClass(ModalGenericSearch, [{
        key: "getImgCachedClass",
        value: function getImgCachedClass(class_to_add) {
          var class_name = 'shadedImgCached ' + class_to_add;
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
      }, {
        key: "generalSearch",
        value: function generalSearch() {
          var _this8 = this;

          this.loading = true;
          this.service.getGeneralSearch(this.searchQuery).subscribe(function (res) {
            if (res && res.success) {
              _this8.results = res.data; //Get the icons for Tags

              if (_this8.results && _this8.results.tags.length > 0) _this8.results.tags.forEach(function (tag) {
                var t2 = _this8.GlobalFields.listingTags.find(function (t) {
                  return t.term_id == tag.id;
                });

                if (t2) tag.icon = t2.icon;else tag.icon = 'fas fa-hashtag';
              }); //Get the icons for Categories

              if (_this8.results && _this8.results.categories.length > 0) _this8.results.categories.forEach(function (cat) {
                var c2 = _this8.GlobalFields.listingCategories.find(function (c) {
                  return c.id == cat.id;
                });

                if (c2) cat.icon = c2.icon;else cat.icon = 'fas fa-bookmark';
              }); //Get the icons for Regions

              if (_this8.results && _this8.results.regions.length > 0) _this8.results.regions.forEach(function (reg) {
                var r2 = _this8.GlobalFields.regions.find(function (r) {
                  return r.id == reg.id;
                });

                if (r2) reg.icon = r2.icon;else reg.icon = 'fas fa-globe';
              });
              _this8.loading = false;
            }
          }, function (err) {
            _this8.results = undefined;
          });
        }
      }, {
        key: "searchNearMe",
        value: function searchNearMe(id) {
          this.closeModal();
          console.log(this.GlobalFields.address);

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType = id;
          this.GlobalFields.selectListingTypeDetail();
          this.GlobalFields.filtersSearch.location = this.GlobalFields.address; // set default value to the proximity range

          this.GlobalFields.filtersSearch.range = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getDefaultProximity('basic');
          this.GlobalFields.getFilteredListingFirstTime(this.service, this.locationService, true);
          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "searchByType",
        value: function searchByType(id) {
          this.closeModal();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType = id;
          this.GlobalFields.selectListingTypeDetail();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "getListingDetails",
        value: function getListingDetails(listing) {
          var _this9 = this;

          console.log('getListingDetails');
          this.GlobalFields.loadingSoft = true;
          this.service.getListingDetailsById(listing.id).subscribe(function (data) {
            _this9.GlobalFields.selectedListing = data;

            _this9.openModalListing();
          }, function (error) {
            console.log(error);
            var msg = '';
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this9.GlobalFields.openAlert(_this9.alertController, 'Error', 'Error on web server', msg);

            _this9.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var listingModal;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    console.log('openModalListing');
                    _context12.next = 3;
                    return this.viewCtrl.create({
                      component: _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_7__["ListingPage"]
                    });

                  case 3:
                    listingModal = _context12.sent;
                    _context12.next = 6;
                    return listingModal.present();

                  case 6:
                    return _context12.abrupt("return", _context12.sent);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "getListingsByCategory",
        value: function getListingsByCategory(catName, typeId) {
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories = [catName];
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType = typeId; // select Listing Type

          this.GlobalFields.selectListingTypeDetail();
          this.closeModal();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "getListingsByTag",
        value: function getListingsByTag(selTag, typeId) {
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType = typeId; // select Listing Type

          this.GlobalFields.selectListingTypeDetail(); //prepareOptionsTags

          this.GlobalFields.selectedTypeDetail.tags.forEach(function (tag) {
            var c = new _entities_checkboxType__WEBPACK_IMPORTED_MODULE_8__["CheckboxType"]();
            c.isChecked = tag.id == selTag.id;
            c.val = tag;

            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.tags.push(c);
          });
          this.closeModal();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "getListingsByRegion",
        value: function getListingsByRegion(regName, typeId) {
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].clearFilters();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.region = regName;
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType = typeId; // select Listing Type

          this.GlobalFields.selectListingTypeDetail();
          this.closeModal();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

          this.navController.navigateForward('tabs/search');
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.viewCtrl.dismiss();
        }
      }]);

      return ModalGenericSearch;
    }();

    ModalGenericSearch.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    ModalGenericSearch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modalGenericSearch',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-generic-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modalGenericSearch/modal-generic-search.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-generic-search.component.scss */
      "./src/app/home/modalGenericSearch/modal-generic-search.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], ModalGenericSearch);
    /***/
  },

  /***/
  "./src/app/home/modalPost/modalPost.scss":
  /*!***********************************************!*\
    !*** ./src/app/home/modalPost/modalPost.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeModalPostModalPostScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titleID {\n  width: calc(100% - 10px);\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n\nimg {\n  width: 100%;\n  border: 0;\n  height: auto;\n}\n\n.section {\n  padding: 16px;\n  margin-bottom: -26px;\n}\n\n.titleSection {\n  font-size: 16pt;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.btnFloatingRightDiv {\n  display: inline;\n  float: right;\n  padding: 0;\n}\n\n.btnFloatingLeftDiv {\n  display: inline;\n  float: left;\n  padding: 0;\n}\n\n.btnFloating {\n  font-size: 21px;\n  position: relative;\n  right: 0px;\n  background-color: transparent;\n  margin-bottom: 5px;\n  color: white;\n  padding: 0;\n}\n\n.backBtn {\n  font-size: 32px !important;\n  font-weight: 600;\n  margin-top: -6px;\n  transition: none 0s ease 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9ob21lL21vZGFsUG9zdC9tb2RhbFBvc3Quc2NzcyIsInNyYy9hcHAvaG9tZS9tb2RhbFBvc3QvbW9kYWxQb3N0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbW9kYWxQb3N0L21vZGFsUG9zdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jdGl0bGVJRCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuXG5pbWcge1xuICB3aWR0aDogMTAwJSA7XG4gIGJvcmRlcjogMCA7XG4gIGhlaWdodDogYXV0byA7XG59XG5cbi5zZWN0aW9ue1xuICBwYWRkaW5nOjE2cHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNnB4O1xufVxuLnRpdGxlU2VjdGlvbntcbiAgZm9udC1zaXplOiAxNnB0O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbn1cbi5oZWFkZXItbWQgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcblxufVxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ0bkZsb2F0aW5nUmlnaHREaXYge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ0bkZsb2F0aW5nTGVmdERpdiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idG5GbG9hdGluZyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5iYWNrQnRuIHtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG59XG4iLCIjdGl0bGVJRCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNnB4O1xufVxuXG4udGl0bGVTZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbWQgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuRmxvYXRpbmdSaWdodERpdiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnRuRmxvYXRpbmdMZWZ0RGl2IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ0bkZsb2F0aW5nIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/modalPost/modalPost.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/modalPost/modalPost.ts ***!
    \*********************************************/

  /*! exports provided: ModalPost */

  /***/
  function srcAppHomeModalPostModalPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPost", function () {
      return ModalPost;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_entities_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/entities/post */
    "./src/app/entities/post.ts");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var ModalPost = /*#__PURE__*/function () {
      function ModalPost(viewCtrl, inputData, socialSharing, inAppBrowser) {
        var _this10 = this;

        _classCallCheck(this, ModalPost);

        this.viewCtrl = viewCtrl;
        this.socialSharing = socialSharing;
        this.inAppBrowser = inAppBrowser;
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_6__["GlobalFields"];
        this.post = inputData.data.post;
        console.log(this.post);
        setTimeout(function () {
          var el = _this10.dynamic.nativeElement;
          var arrayOfLinks = el.querySelectorAll('a');

          var _loop4 = function _loop4(i) {
            var anchor = arrayOfLinks[i];

            anchor.onclick = function (ev) {
              console.log("Opening link");

              var browser = _this10.inAppBrowser.create(anchor.href, '_blank');

              ev.preventDefault();
              return false;
            };
          };

          for (var i = 0; i < arrayOfLinks.length; i++) {
            _loop4(i);
          }

          ;
        }, 1000); //this.service.setTransparentBackgroundStatusBar();
      }

      _createClass(ModalPost, [{
        key: "closeModal",
        value: function closeModal() {
          this.viewCtrl.dismiss();
        }
      }, {
        key: "share",
        value: function share() {
          this.socialSharing.share("Check this link", "", "", this.post.link).then(function () {
            console.log('Successful share');
          })["catch"](function (error) {
            console.log('Error sharing:', error);
          });
        }
      }]);

      return ModalPost;
    }();

    ModalPost.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamic'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ModalPost.prototype, "dynamic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_entities_post__WEBPACK_IMPORTED_MODULE_3__["Post"])], ModalPost.prototype, "post", void 0);
    ModalPost = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modalPost',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modalPost.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/modalPost/modalPost.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modalPost.scss */
      "./src/app/home/modalPost/modalPost.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])], ModalPost);
    /***/
  },

  /***/
  "./src/app/home/popoverSearch/popoverSearch.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/popoverSearch/popoverSearch.ts ***!
    \*****************************************************/

  /*! exports provided: PopoverSearch */

  /***/
  function srcAppHomePopoverSearchPopoverSearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverSearch", function () {
      return PopoverSearch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");

    var PopoverSearch = /*#__PURE__*/function () {
      function PopoverSearch(popoverController, service) {
        _classCallCheck(this, PopoverSearch);

        this.popoverController = popoverController;
        this.service = service;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
      }
      /*openModalListing(listing: Listing) {
           this.service.selectedListing = listing;
           const listingModal = this.popoverController.create(ListingPage);
        listingModal.present();
         }
      */


      _createClass(PopoverSearch, [{
        key: "openModalListing",
        value: function openModalListing(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var modal;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.GlobalFields.selectedListing = listing;
                    _context13.next = 3;
                    return this.popoverController.create({
                      component: _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_5__["ListingPage"],
                      componentProps: {
                        value: 123
                      }
                    });

                  case 3:
                    modal = _context13.sent;
                    _context13.next = 6;
                    return modal.present();

                  case 6:
                    return _context13.abrupt("return", _context13.sent);

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "closePopover",
        value: function closePopover() {
          this.popoverController.dismiss();
        }
      }]);

      return PopoverSearch;
    }();

    PopoverSearch.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"]
      }];
    };

    PopoverSearch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'popover-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popoverSearch.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/popoverSearch/popoverSearch.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"]])], PopoverSearch);
    /***/
  },

  /***/
  "./src/app/home/postsPage/postsPage.scss":
  /*!***********************************************!*\
    !*** ./src/app/home/postsPage/postsPage.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePostsPagePostsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".postImg {\n  width: 100%;\n  height: 200px;\n  background-position: center !important;\n  background-size: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9ob21lL3Bvc3RzUGFnZS9wb3N0c1BhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9wb3N0c1BhZ2UvcG9zdHNQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9zdHNQYWdlL3Bvc3RzUGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RJbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cbiIsIi5wb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/postsPage/postsPage.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/postsPage/postsPage.ts ***!
    \*********************************************/

  /*! exports provided: PostsPage */

  /***/
  function srcAppHomePostsPagePostsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsPage", function () {
      return PostsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _modalPost_modalPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../modalPost/modalPost */
    "./src/app/home/modalPost/modalPost.ts");

    var PostsPage = /*#__PURE__*/function () {
      function PostsPage(modalCtrl, statusBar, service) {
        _classCallCheck(this, PostsPage);

        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.service = service;
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.posts = [];
        this.loading = true;
        this.lastNumber = 20;
        this.page = 1;
        this.navigateAsRoot = false;
        this.loadMorePosts();
      }

      _createClass(PostsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //To avoid showing the back button if the navigation to this page is as root page
          this.navigateAsRoot = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].navigateAsRoot;
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].navigateAsRoot = false;
        }
      }, {
        key: "loadMorePosts",
        value: function loadMorePosts() {
          var _this11 = this;

          this.loading = true;
          this.service.getRecentPosts(this.page).subscribe(function (data) {
            if (data && data.length > 0) {
              _this11.posts = _this11.posts.concat(data);
              _this11.lastNumber = data.length;
              _this11.page = _this11.page + 1;
              _this11.loading = false;

              _this11.posts.forEach(function (post) {
                if (!post.img_cover) _this11.service.getMediaById(post.featured_media).subscribe(function (data) {
                  console.log('url: ' + data.source_url);

                  if (data) {
                    post.img_cover = data.source_url;
                  }
                });
              });
            } else {
              _this11.lastNumber = 0;
              _this11.loading = false;
            }
          });
        }
      }, {
        key: "openModalPost",
        value: function openModalPost(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var modal;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.modalCtrl.create({
                      component: _modalPost_modalPost__WEBPACK_IMPORTED_MODULE_7__["ModalPost"],
                      componentProps: {
                        post: post
                      }
                    });

                  case 2:
                    modal = _context14.sent;
                    _context14.next = 5;
                    return modal.present();

                  case 5:
                    return _context14.abrupt("return", _context14.sent);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return PostsPage;
    }();

    PostsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]
      }];
    };

    PostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'postsPoage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./postsPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/postsPage/postsPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./postsPage.scss */
      "./src/app/home/postsPage/postsPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]])], PostsPage);
    /***/
  },

  /***/
  "./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingListCustomFieldsToDisplayCustomFieldsToDisplayScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Custom fields box type */\n.backImgTrip {\n  width: 100%;\n  height: 140px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n.gridBox {\n  display: flex;\n  padding: 5px 10px 0 10px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.gridBoxWhiteBackground {\n  display: flex;\n  padding: 0;\n  padding-top: 5px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.floatGridBox {\n  margin-bottom: 15px;\n  margin-left: 10px;\n  display: flex;\n  position: absolute;\n  top: 10px;\n  flex-wrap: wrap;\n  /*justify-content: space-between;*/\n}\n.divGridBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 49.75%;\n  margin-bottom: 0.5%;\n  height: 20px;\n  margin: 0px;\n  margin-bottom: 1px;\n}\n.divGridBox span {\n  text-align: center;\n  text-align: center;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 500;\n}\n.divGridBox:nth-last-child(n+5):first-child,\n.divGridBox:nth-last-child(n+5):first-child ~ *,\n.divGridBox:nth-last-child(n+6):first-child,\n.divGridBox:nth-last-child(n+6):first-child ~ * {\n  flex-basis: 33%;\n}\n.divGridBox:nth-child(5):last-child {\n  margin-right: auto;\n  margin-left: 0.5%;\n}\n.badgeLeftFloat {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 32px;\n  min-width: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  align-items: center;\n  text-align: center;\n  top: 20px;\n  line-height: 32px;\n  z-index: 9;\n  background-color: #adadada3;\n  font-size: 8pt;\n  padding: 0 10px;\n  color: #ffffff;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n}\n.taxonomiesContainer {\n  padding: 10px;\n  border-top: solid 1px #eeeeee;\n  width: 90%;\n  margin: auto;\n  margin-top: 10px;\n}\n.whiteBackTaxonomiesContainer {\n  padding: 10px;\n  padding-left: 0;\n  width: 100%;\n  margin-top: 0px;\n}\n@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .badgeLeftFloat {\n    background-color: rgba(168, 168, 168, 0.64);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9saXN0aW5nTGlzdC9jdXN0b21GaWVsZHNUb0Rpc3BsYXkvY3VzdG9tRmllbGRzVG9EaXNwbGF5LnNjc3MiLCJzcmMvYXBwL2xpc3RpbmdMaXN0L2N1c3RvbUZpZWxkc1RvRGlzcGxheS9jdXN0b21GaWVsZHNUb0Rpc3BsYXkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSwyQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREtBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNGRjtBREtBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FET0E7Ozs7RUFNRSxlQUFBO0FDTkY7QURVQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNQRjtBRFdBO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUkY7QURZQTtFQUNFO0lBQ0UsMkNBQUE7RUNURjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlzdGluZ0xpc3QvY3VzdG9tRmllbGRzVG9EaXNwbGF5L2N1c3RvbUZpZWxkc1RvRGlzcGxheS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEN1c3RvbSBmaWVsZHMgYm94IHR5cGUgKi9cbi5iYWNrSW1nVHJpcHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuXG4uZ3JpZEJveHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdyaWRCb3hXaGl0ZUJhY2tncm91bmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmxvYXRHcmlkQm94e1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cbn1cblxuLmRpdkdyaWRCb3h7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA0OS43NSU7XG4gIG1hcmdpbi1ib3R0b206IC41JTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uZGl2R3JpZEJveCBzcGFue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG5cbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQsXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkIH4gKixcblxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQgfiAqIHtcblxuICBmbGV4LWJhc2lzOiAzMyU7XG59XG5cblxuLmRpdkdyaWRCb3g6bnRoLWNoaWxkKDUpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAuNSU7XG59XG5cblxuLmJhZGdlTGVmdEZsb2F0e1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtaW4td2lkdGg6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYWRhZGEzO1xuICBmb250LXNpemU6IDhwdDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwIDJweCA4cHg7XG59XG5cbi50YXhvbm9taWVzQ29udGFpbmVye1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VlZWVlZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ud2hpdGVCYWNrVGF4b25vbWllc0NvbnRhaW5lcntcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5cbkBzdXBwb3J0cyBub3QgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xuICAuYmFkZ2VMZWZ0RmxvYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY4LCAxNjgsIDE2OCwgMC42NCk7XG4gIH1cbn1cbiIsIi8qIEN1c3RvbSBmaWVsZHMgYm94IHR5cGUgKi9cbi5iYWNrSW1nVHJpcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ncmlkQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdyaWRCb3hXaGl0ZUJhY2tncm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsb2F0R3JpZEJveCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xufVxuXG4uZGl2R3JpZEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA0OS43NSU7XG4gIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmRpdkdyaWRCb3ggc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCB+ICosXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCB+ICoge1xuICBmbGV4LWJhc2lzOiAzMyU7XG59XG5cbi5kaXZHcmlkQm94Om50aC1jaGlsZCg1KTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMC41JTtcbn1cblxuLmJhZGdlTGVmdEZsb2F0IHtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGFkYWRhMztcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMCAycHggOHB4O1xufVxuXG4udGF4b25vbWllc0NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWVlZWVlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi53aGl0ZUJhY2tUYXhvbm9taWVzQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5Ac3VwcG9ydHMgbm90IChiYWNrZHJvcC1maWx0ZXI6IG5vbmUpIHtcbiAgLmJhZGdlTGVmdEZsb2F0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OCwgMTY4LCAxNjgsIDAuNjQpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.ts ***!
    \****************************************************************************/

  /*! exports provided: CustomFieldsToDisplay */

  /***/
  function srcAppListingListCustomFieldsToDisplayCustomFieldsToDisplayTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomFieldsToDisplay", function () {
      return CustomFieldsToDisplay;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_entities_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/entities/listing */
    "./src/app/entities/listing.ts");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _entities_listingTypeDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../entities/listingTypeDetail */
    "./src/app/entities/listingTypeDetail.ts"); // DOC: https://ionicframework.com/docs/building/running
    // to build the apk: sudo ionic cordova build --release android
    // per testare app: https://cordova-plugin-fcm.appspot.com/
    // PER GENERARE APK: sudo cordova build android --release
    // FIREBASE EXAMPLE -> https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71


    var CustomFieldsToDisplay = /*#__PURE__*/function () {
      function CustomFieldsToDisplay(service, modalCtrl, navController, platform, translate, _sanitizer, alertController) {
        _classCallCheck(this, CustomFieldsToDisplay);

        this.service = service;
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.platform = platform;
        this.translate = translate;
        this._sanitizer = _sanitizer;
        this.alertController = alertController;
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"];
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.customFields = []; //Info fiends and buttons

        this.filteredCustomFields = []; //Footers

        this.customTaxonomies = [];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.todayDayKey = days[new Date().getDay()];
      }

      _createClass(CustomFieldsToDisplay, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.listing && this.listingType) {
            if (this.type == '1') {
              //Buttons (Header)
              this.filteredCustomFields = this.filteredCustomFields.concat(this.listingType.case27_listing_type_result_template.buttons);
              /*this.filteredCustomFields = this.customFields.filter(field =>
                field.show_field && (
                  field.show_field == 'work_hours' ||
                  field.show_field == 'job_phone' ||
                  field.show_field == 'job_email' ||
                  field.show_field == 'job_date' ||
                  field.show_field == 'price_range' ||
                  field.show_field.includes('price')
                )
              );*/

              console.log(this.filteredCustomFields);
            } else if (this.type == '2') {
              //Info fields (Under title)
              this.filteredCustomFields = this.filteredCustomFields.concat(this.listingType.case27_listing_type_result_template.info_fields);
              /*this.filteredCustomFields = this.customFields.filter(field =>
                field.show_field && (
                  field.show_field == 'work_hours' ||
                  field.show_field == 'job_phone' ||
                  field.show_field == 'job_email' ||
                  field.show_field == 'job_date' ||
                  field.show_field == 'price_range' ||
                  field.show_field.includes('price')
                )
              );*/

              console.log(this.filteredCustomFields);
            } else if (this.type == '3') {
              //taxonimies in the footer
              if (this.listing.footer && this.listing.footer.sections && this.listing.footer.sections.length > 0) this.customTaxonomies = this.customTaxonomies.concat(this.listing.footer.sections && this.listing.footer.sections);
            }
          }
        }
      }, {
        key: "isWhiteBackground",
        value: function isWhiteBackground() {
          return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isWhiteBackground();
        }
      }]);

      return CustomFieldsToDisplay;
    }();

    CustomFieldsToDisplay.popover = undefined;

    CustomFieldsToDisplay.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_entities_listing__WEBPACK_IMPORTED_MODULE_2__["Listing"])], CustomFieldsToDisplay.prototype, "listing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CustomFieldsToDisplay.prototype, "customFieldsType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CustomFieldsToDisplay.prototype, "customFields", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _entities_listingTypeDetail__WEBPACK_IMPORTED_MODULE_9__["ListingTypeDetail"])], CustomFieldsToDisplay.prototype, "listingType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CustomFieldsToDisplay.prototype, "type", void 0);
    CustomFieldsToDisplay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'custom-fields',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customFieldsToDisplay.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customFieldsToDisplay.scss */
      "./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], CustomFieldsToDisplay);
    /***/
  },

  /***/
  "./src/app/listingList/listingList.scss":
  /*!**********************************************!*\
    !*** ./src/app/listingList/listingList.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingListListingListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-background {\n  background-color: white;\n}\n\n.social-cards ion-col {\n  background-color: transparent !important;\n}\n\n.searchText {\n  color: #9E9E9E;\n}\n\n.inputSearchText {\n  color: black;\n}\n\n.section {\n  padding: 5px;\n  margin: 15px;\n  margin-bottom: 45px;\n}\n\n.titleSection {\n  font-size: 16pt;\n  height: 50px;\n}\n\n.regionTitle {\n  height: 150px;\n  text-align: center;\n  line-height: 140px;\n  background-color: rgba(45, 45, 45, 0.54);\n  border-radius: 5px;\n  color: white;\n  font-size: 16pt;\n  font-weight: 900;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.horizontalList {\n  overflow-x: auto;\n  display: inline-flex;\n  width: 100%;\n}\n\n.rowListType {\n  background: white;\n  margin: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  height: 90px;\n}\n\n.listingAddressLittle {\n  margin: 0px;\n  font-size: 7pt;\n  color: #979797;\n  max-height: 30px;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  visibility: visible;\n}\n\n.divHorizontalList {\n  width: 50% !important;\n  max-width: none !important;\n  margin: 5px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin: -5px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 10pt;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.social-cards ion-col {\n  padding: 0;\n  background-color: #f3f5f8;\n}\n\n.imgList {\n  height: 100px;\n  border-radius: 5px;\n}\n\n.imgTypes {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  border-radius: 5px;\n}\n\n.centralArrow {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.totalPageBackImg {\n  background: url(https://cdn-images-1.medium.com/max/1600/0*I-sI3u34g0ydRqyA);\n  position: relative;\n  width: 100%;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 20px;\n  padding-bottom: 50px;\n}\n\n.totalPageBackImg::after {\n  content: \"\";\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n}\n\n.borderList {\n  /*border: 1px solid #f0f0f0;*/\n  border: none;\n  border-radius: 5px;\n}\n\n.boxShadowList {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.backImgBigger {\n  width: 100%;\n  height: 150px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n  position: relative;\n}\n\n.backImgList {\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px 0 0 5px;\n  overflow: hidden;\n}\n\n.backImgList[dir=ltr] {\n  margin-right: -25px;\n}\n\n.imgRTLList {\n  background: url(//i0.wp.com/danceup.dance/wp-content/uploads/listing-uploads/gallery/2019/12/imgListing-6.jpeg);\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n}\n\n/*White background*/\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  border-radius: 5px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n}\n\n.backImgSquaredAndLogo {\n  width: 100%;\n  height: 130px;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n.backImgSquared {\n  width: 100px;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.backImgLogo {\n  background-size: 100% !important;\n  height: 50px;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.backImgLogo2 {\n  background-size: 100% !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  position: relative;\n  top: 10%;\n  left: 25%;\n  display: flow-root;\n  height: 100px;\n  z-index: 4;\n  width: 50%;\n}\n\n.postImg {\n  width: 100%;\n  height: 300px;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.homeTypeLabel {\n  padding: 5px;\n  font-size: 12pt;\n  color: black;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.basicSearchContainer {\n  padding: 20px;\n  z-index: 9;\n  background-color: white;\n  position: relative;\n  top: 10%;\n  margin: 15px;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.imgLogoHorizontal {\n  width: 50%;\n  height: auto;\n  margin-left: 25%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n}\n\n.typeTitle {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  padding: 0;\n  text-align: initial;\n}\n\n.btnLight {\n  /* border: solid 1px #4392ff;*/\n  border-radius: 10px;\n  float: right;\n  /*padding: 10px;*/\n}\n\n.reviewCounterLittle {\n  color: #6b6b6b;\n  font-size: 9pt;\n  font-weight: 400;\n  float: right;\n  line-height: 1;\n  text-transform: none !important;\n}\n\n.reviewCounterLittleList {\n  color: #6b6b6b;\n  font-weight: 400;\n  line-height: 1;\n  font-size: 8pt;\n  margin-top: 5px;\n  text-transform: none !important;\n}\n\n.reviewCounterLittleList[dir=rtl] {\n  float: left;\n}\n\n.reviewCounterLittleList[dir=ltr] {\n  float: right;\n}\n\n.reviewScoreLittle {\n  font-size: 11pt;\n  font-weight: bolder;\n  float: left;\n  line-height: 1.7;\n  text-transform: none !important;\n}\n\n.reviewScoreLittleList {\n  font-size: 10pt;\n  font-weight: bolder;\n  float: left;\n  line-height: 1.7;\n  text-transform: none !important;\n}\n\n.starReview {\n  font-size: medium;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 2px;\n}\n\n.starReviewList {\n  font-size: medium;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 1px;\n}\n\nstarReviewAirbnb {\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 1px;\n}\n\n.listingType {\n  font-weight: 800 !important;\n  line-height: 16px !important;\n  letter-spacing: normal !important;\n  text-transform: uppercase !important;\n  color: #767676;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  font-size: 11px !important;\n  overflow: hidden !important;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n  /* text-align: left;*/\n  text-align: initial;\n}\n\n.badgeLeftFloat {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  top: 20px;\n  line-height: 20px;\n  z-index: 9;\n  background-color: #ffffff2e;\n  font-size: 8pt;\n  padding: 6px 10px;\n  color: #fff;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n}\n\n.boltIcon {\n  width: 32px;\n  padding-left: 12px;\n  border: solid 1px #FFEB3B;\n  color: #FFEB3B;\n  font-size: 9pt;\n}\n\n.boltIconList {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  width: 23px;\n  text-align: center;\n  height: 23px;\n  border: solid 1px;\n  padding-left: 2px;\n  line-height: 24px;\n  color: #ffc106;\n  border-radius: 100px;\n  font-size: 8pt;\n}\n\n.logoCircleImg {\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-radius: 50%;\n  z-index: 9;\n  background-color: #fff;\n  background-size: cover;\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-position: center !important;\n  background-size: cover !important;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n\n.sponsoredAirbnb {\n  background-color: #FFC107;\n  color: white;\n  padding: 1px 3px !important;\n  margin-left: 5px !important;\n  -webkit-box-align: center !important;\n  font-size: 8px !important;\n  line-height: 12px !important;\n  border-radius: 2px;\n  align-items: center !important;\n  display: inline-flex !important;\n  display: inline-block !important;\n  vertical-align: top !important;\n  white-space: normal !important;\n  -webkit-animation-duration: 0.3s !important;\n          animation-duration: 0.3s !important;\n  -webkit-animation-name: keyframe_18jn58a !important;\n          animation-name: keyframe_18jn58a !important;\n  -webkit-animation-timing-function: ease-in-out !important;\n          animation-timing-function: ease-in-out !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.sponsoredAirbnb i {\n  display: none;\n}\n\n.sponsoredFloat {\n  height: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  left: 15px;\n  top: 15px;\n  position: fixed;\n  line-height: 16px;\n  z-index: 9;\n  background-color: #ffffff2e;\n  padding: 6px 10px;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n  width: 32px;\n  padding-left: 12px;\n  border: solid 1px #FFEB3B;\n  color: #FFEB3B;\n  font-size: 9pt;\n}\n\n.sponsoredFloat span {\n  display: none;\n}\n\n/* Custom fields box type */\n\n.backImgTrip {\n  width: 100%;\n  height: 140px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.gridBox {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.floatGridBox {\n  margin-bottom: 15px;\n  display: flex;\n  position: fixed;\n  top: 10px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.divGridBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 49.75%;\n  margin-bottom: 0.5%;\n  height: 30px;\n  margin: 0px;\n  margin-bottom: 1px;\n}\n\n.divGridBox span {\n  text-align: center;\n  text-align: center;\n  color: #4c4c4c;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 700;\n}\n\n.divGridBox i {\n  font-size: 20px;\n}\n\n.divGridBox:nth-last-child(n+5):first-child,\n.divGridBox:nth-last-child(n+5):first-child ~ *,\n.divGridBox:nth-last-child(n+6):first-child,\n.divGridBox:nth-last-child(n+6):first-child ~ * {\n  flex-basis: 33%;\n}\n\n.divGridBox:nth-child(5):last-child {\n  margin-right: auto;\n  margin-left: 0.5%;\n}\n\n.paddingTopLogoBoxFooter {\n  bottom: 10px;\n  position: absolute;\n  width: 90%;\n  left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9saXN0aW5nTGlzdC9saXN0aW5nTGlzdC5zY3NzIiwic3JjL2FwcC9saXN0aW5nTGlzdC9saXN0aW5nTGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7QUNBRjs7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0lGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURERTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSUo7O0FEREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUo7O0FER0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsK0JBQUE7S0FBQSw0QkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0FDRkY7O0FETUE7RUFDRSw0RUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUVFLDBDQUFBO0FDSkY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsK0dBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNORjs7QURTQSxtQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURXQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUkY7O0FEV0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFlBO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtBQ1RGOztBRFdBO0VBQ0UsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDUkY7O0FEVUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNQRjs7QURXQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwrR0FBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNSRjs7QURXQTtFQUNFLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNDLDhCQUFBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURZQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDVEY7O0FEWUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFdBO0VBQ0UsV0FBQTtBQ1JGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNSRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1BGOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNORjs7QURXQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNELHFCQUFBO0VBQ0MsbUJBQUE7QUNSRjs7QURXQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7QUNSRjs7QURXQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEVUE7RUFDRSxhQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtBQ1BGOztBRFlBLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNURjs7QURhQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGNBOzs7O0VBTUUsZUFBQTtBQ2JGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNkRjs7QURrQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ2ZGIiwiZmlsZSI6InNyYy9hcHAvbGlzdGluZ0xpc3QvbGlzdGluZ0xpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNvY2lhbC1jYXJkcyBpb24tY29se1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaFRleHR7XG4gIGNvbG9yOiAjOUU5RTlFO1xufVxuLmlucHV0U2VhcmNoVGV4dHtcbiAgY29sb3I6YmxhY2s7XG59XG5cbi5zZWN0aW9ue1xuICBwYWRkaW5nOjVweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLnRpdGxlU2VjdGlvbntcbiAgZm9udC1zaXplOiAxNnB0O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cblxuLnJlZ2lvblRpdGxle1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjU0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuLmhvcml6b250YWxMaXN0e1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3dMaXN0VHlwZXtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogOTBweFxufVxuXG4ubGlzdGluZ0FkZHJlc3NMaXR0bGV7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDdwdDtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZGl2SG9yaXpvbnRhbExpc3R7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46LTVweDtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmODtcbn1cblxuXG5cbi5pbWdMaXN0e1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbWdUeXBlc3tcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2VudHJhbEFycm93e1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxufVxuXG5cbi50b3RhbFBhZ2VCYWNrSW1ne1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMTYwMC8wKkktc0kzdTM0ZzB5ZFJxeUEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuXG4udG90YWxQYWdlQmFja0ltZzo6YWZ0ZXIge1xuICBjb250ZW50OicnO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICBvcGFjaXR5OjAuMjtcbn1cblxuLmJvcmRlckxpc3R7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDsqL1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJveFNoYWRvd0xpc3R7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLDAsMCwuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsLjEpO1xufVxuXG5cbi5iYWNrSW1nQmlnZ2Vye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4uYmFja0ltZ0xpc3R7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tJbWdMaXN0W2Rpcj1cImx0clwiXXtcbiAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbn1cblxuLmltZ1JUTExpc3R7XG4gIGJhY2tncm91bmQ6IHVybCgvL2kwLndwLmNvbS9kYW5jZXVwLmRhbmNlL3dwLWNvbnRlbnQvdXBsb2Fkcy9saXN0aW5nLXVwbG9hZHMvZ2FsbGVyeS8yMDE5LzEyL2ltZ0xpc3RpbmctNi5qcGVnKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qV2hpdGUgYmFja2dyb3VuZCovXG4uYmFja0ltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuXG4uYmFja0ltZ1NxdWFyZWRBbmRMb2dve1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tJbWdTcXVhcmVke1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLmJhY2tJbWdMb2dve1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmJhY2tJbWdMb2dvMntcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDI1JTtcbiAgZGlzcGxheTogZmxvdy1yb290O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogNTAlO1xufVxuLnBvc3RJbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmhvbWVUeXBlTGFiZWx7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBjb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDA7XG59XG5cblxuLmJhc2ljU2VhcmNoQ29udGFpbmVye1xuICBwYWRkaW5nOiAyMHB4O1xuICB6LWluZGV4Ojk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbn1cblxuLmltZ0xvZ29Ib3Jpem9udGFse1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG59XG5cbi50eXBlVGl0bGV7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxuLmJ0bkxpZ2h0e1xuIC8qIGJvcmRlcjogc29saWQgMXB4ICM0MzkyZmY7Ki9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAvKnBhZGRpbmc6IDEwcHg7Ki9cbn1cblxuXG4ucmV2aWV3Q291bnRlckxpdHRsZXtcbiAgY29sb3I6ICM2YjZiNmI7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3R7XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbi5yZXZpZXdDb3VudGVyTGl0dGxlTGlzdFtkaXI9XCJydGxcIl17XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnJldmlld0NvdW50ZXJMaXR0bGVMaXN0W2Rpcj1cImx0clwiXXtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbi5yZXZpZXdTY29yZUxpdHRsZXtcbiAgZm9udC1zaXplOiAxMXB0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbi5yZXZpZXdTY29yZUxpdHRsZUxpc3R7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zdGFyUmV2aWV3e1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZjMTA2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4uc3RhclJldmlld0xpc3R7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuc3RhclJldmlld0FpcmJuYntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuXG5cbi5saXN0aW5nVHlwZXtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYigxMTgsIDExOCwgMTE4KTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuIC8qIHRleHQtYWxpZ246IGxlZnQ7Ki9cbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxuLmJhZGdlTGVmdEZsb2F0e1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjE1KSAwIDJweCA4cHg7XG59XG5cbi5ib2x0SWNvbntcbiAgd2lkdGg6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGRUIzQjtcbiAgY29sb3I6ICNGRkVCM0I7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uYm9sdEljb25MaXN0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZjMTA2O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiA4cHQ7XG59XG5cbi5sb2dvQ2lyY2xlSW1ne1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zcG9uc29yZWRBaXJibmJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXB4IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEycHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXlmcmFtZV8xOGpuNThhICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLnNwb25zb3JlZEFpcmJuYiBpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwb25zb3JlZEZsb2F0e1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwIDJweCA4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNGRkVCM0I7XG4gIGNvbG9yOiAjRkZFQjNCO1xuICBmb250LXNpemU6IDlwdDtcbn1cblxuLnNwb25zb3JlZEZsb2F0IHNwYW57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuXG4vKiBDdXN0b20gZmllbGRzIGJveCB0eXBlICovXG4uYmFja0ltZ1RyaXB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cblxuLmdyaWRCb3h7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmxvYXRHcmlkQm94e1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kaXZHcmlkQm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNDkuNzUlO1xuICBtYXJnaW4tYm90dG9tOiAuNSU7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmRpdkdyaWRCb3ggc3BhbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGl2R3JpZEJveCBpe1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQgfiAqLFxuXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCB+ICoge1xuXG4gIGZsZXgtYmFzaXM6IDMzJTtcbn1cblxuXG4uZGl2R3JpZEJveDpudGgtY2hpbGQoNSk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC41JTtcbn1cblxuXG4ucGFkZGluZ1RvcExvZ29Cb3hGb290ZXJ7XG4gIGJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICBsZWZ0OiA1JTtcbn0iLCIudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hUZXh0IHtcbiAgY29sb3I6ICM5RTlFOUU7XG59XG5cbi5pbnB1dFNlYXJjaFRleHQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbi50aXRsZVNlY3Rpb24ge1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnJlZ2lvblRpdGxlIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgMC41NCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmhvcml6b250YWxMaXN0IHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm93TGlzdFR5cGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubGlzdGluZ0FkZHJlc3NMaXR0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiA3cHQ7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZGl2SG9yaXpvbnRhbExpc3Qge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogLTVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjg7XG59XG5cbi5pbWdMaXN0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW1nVHlwZXMge1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jZW50cmFsQXJyb3cge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnRvdGFsUGFnZUJhY2tJbWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMTYwMC8wKkktc0kzdTM0ZzB5ZFJxeUEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLnRvdGFsUGFnZUJhY2tJbWc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5ib3JkZXJMaXN0IHtcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyovXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYm94U2hhZG93TGlzdCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5iYWNrSW1nQmlnZ2VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYWNrSW1nTGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tJbWdMaXN0W2Rpcj1sdHJdIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbn1cblxuLmltZ1JUTExpc3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoLy9pMC53cC5jb20vZGFuY2V1cC5kYW5jZS93cC1jb250ZW50L3VwbG9hZHMvbGlzdGluZy11cGxvYWRzL2dhbGxlcnkvMjAxOS8xMi9pbWdMaXN0aW5nLTYuanBlZyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKldoaXRlIGJhY2tncm91bmQqL1xuLmJhY2tJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tJbWdTcXVhcmVkQW5kTG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ1NxdWFyZWQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5iYWNrSW1nTG9nbyB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrSW1nTG9nbzIge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMjUlO1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gIGhlaWdodDogMTAwcHg7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uaG9tZVR5cGVMYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBjb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDA7XG59XG5cbi5iYXNpY1NlYXJjaENvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmltZ0xvZ29Ib3Jpem9udGFsIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuXG4udHlwZVRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG4uYnRuTGlnaHQge1xuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjNDM5MmZmOyovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgLypwYWRkaW5nOiAxMHB4OyovXG59XG5cbi5yZXZpZXdDb3VudGVyTGl0dGxlIHtcbiAgY29sb3I6ICM2YjZiNmI7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3Qge1xuICBjb2xvcjogIzZiNmI2YjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXdDb3VudGVyTGl0dGxlTGlzdFtkaXI9cnRsXSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3RbZGlyPWx0cl0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZXZpZXdTY29yZUxpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXdTY29yZUxpdHRsZUxpc3Qge1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS43O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3RhclJldmlldyB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cblxuLnN0YXJSZXZpZXdMaXN0IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG5zdGFyUmV2aWV3QWlyYm5iIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLmxpc3RpbmdUeXBlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLyogdGV4dC1hbGlnbjogbGVmdDsqL1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG4uYmFkZ2VMZWZ0RmxvYXQge1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMCAycHggOHB4O1xufVxuXG4uYm9sdEljb24ge1xuICB3aWR0aDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkZFQjNCO1xuICBjb2xvcjogI0ZGRUIzQjtcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5ib2x0SWNvbkxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZjMTA2O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiA4cHQ7XG59XG5cbi5sb2dvQ2lyY2xlSW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc3BvbnNvcmVkQWlyYm5iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHggM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTJweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3MgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleWZyYW1lXzE4am41OGEgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5zcG9uc29yZWRBaXJibmIgaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zcG9uc29yZWRGbG9hdCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmU7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDAgMnB4IDhweDtcbiAgd2lkdGg6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGRUIzQjtcbiAgY29sb3I6ICNGRkVCM0I7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uc3BvbnNvcmVkRmxvYXQgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEN1c3RvbSBmaWVsZHMgYm94IHR5cGUgKi9cbi5iYWNrSW1nVHJpcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ncmlkQm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mbG9hdEdyaWRCb3gge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kaXZHcmlkQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDQ5Ljc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMC41JTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uZGl2R3JpZEJveCBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGl2R3JpZEJveCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCB+ICosXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCB+ICoge1xuICBmbGV4LWJhc2lzOiAzMyU7XG59XG5cbi5kaXZHcmlkQm94Om50aC1jaGlsZCg1KTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMC41JTtcbn1cblxuLnBhZGRpbmdUb3BMb2dvQm94Rm9vdGVyIHtcbiAgYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/listingList/listingList.ts":
  /*!********************************************!*\
    !*** ./src/app/listingList/listingList.ts ***!
    \********************************************/

  /*! exports provided: ListingList */

  /***/
  function srcAppListingListListingListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingList", function () {
      return ListingList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");
    /* harmony import */


    var _app_entities_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/entities/listing */
    "./src/app/entities/listing.ts");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _home_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../home/modalPost/modalPost */
    "./src/app/home/modalPost/modalPost.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); // DOC: https://ionicframework.com/docs/building/running
    // to build the apk: sudo ionic cordova build --release android
    // per testare app: https://cordova-plugin-fcm.appspot.com/
    // PER GENERARE APK: sudo cordova build android --release
    // FIREBASE EXAMPLE -> https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71


    var ListingList = /*#__PURE__*/function () {
      function ListingList(service, modalCtrl, navController, platform, translate, _sanitizer, alertController) {
        _classCallCheck(this, ListingList);

        this.service = service;
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.platform = platform;
        this.translate = translate;
        this._sanitizer = _sanitizer;
        this.alertController = alertController;
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"];
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"];
      }

      _createClass(ListingList, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.listing && this.listing.listing_data) {
            this.listingType = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].getListingTypeBySlug(this.listing.listing_data._case27_listing_type);
          }
        }
      }, {
        key: "openModalPost",
        value: function openModalPost(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var modal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.modalCtrl.create({
                      component: _home_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_9__["ModalPost"],
                      componentProps: {
                        post: post
                      }
                    });

                  case 2:
                    modal = _context15.sent;
                    _context15.next = 5;
                    return modal.present();

                  case 5:
                    return _context15.abrupt("return", _context15.sent);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getListingDetails",
        value: function getListingDetails(listing) {
          var _this12 = this;

          console.log("getListingDetails");
          this.GlobalFields.loadingSoft = true;
          this.service.getListingDetailsById(listing.id).subscribe(function (data) {
            _this12.GlobalFields.selectedListing = data;

            _this12.openModalListing();
          }, function (error) {
            console.log(error);
            var msg = '';
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this12.GlobalFields.openAlert(_this12.alertController, 'Error', 'Error on web server', msg);

            _this12.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var listingModal;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    console.log("openModalListing");
                    _context16.next = 3;
                    return this.modalCtrl.create({
                      component: _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__["ListingPage"]
                    });

                  case 3:
                    listingModal = _context16.sent;
                    _context16.next = 6;
                    return listingModal.present();

                  case 6:
                    return _context16.abrupt("return", _context16.sent);

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "isFeatured",
        value: function isFeatured(listing) {
          /* if (!listing.listing_data._featured)
                return '';
            if (listing.listing_data._featured == '1')
                return 'featured';
            else */
          return '';
        }
      }, {
        key: "isWhiteBackgroundBorder",
        value: function isWhiteBackgroundBorder() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].isWhiteBackground()) return '';else return ' borderList';
        }
      }, {
        key: "isWhiteBackgroundBoxShadow",
        value: function isWhiteBackgroundBoxShadow() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].isWhiteBackground()) return '';else return ' boxShadowList';
        }
      }, {
        key: "getCardClass",
        value: function getCardClass() {
          if (this.search) return 'listCardNoFixedHeight card card-ios ';else return 'listCard card card-ios ';
        }
      }, {
        key: "getImgClass",
        value: function getImgClass() {
          if (this.search) return 'backImgBigger';else return 'backImg';
        }
      }, {
        key: "getImgCachedClass",
        value: function getImgCachedClass(type) {
          var class_name = "imgCachedAsBackground ";

          if (type == '1') {
            if (this.search) class_name = class_name + 'backImgBiggerCached backgroundListingImgCached shadedImgCachedAirbnb';else class_name = class_name + 'backImgCached backgroundListingImgCached shadedImgCachedAirbnb';
          }

          if (type == '2' || type == '2b') class_name = class_name + 'backImgListCache';
          if (type == '3') class_name = class_name + 'backImgSquaredAndLogoCached shadedImgCached';
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
      }, {
        key: "getImgCachedClassByClass",
        value: function getImgCachedClassByClass(classes) {
          var class_name = "imgCachedAsBackground " + classes;
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
        /*
          async openModalListing(listing: Listing) {
            const modal = await this.modalCtrl.create(ListingPage,{ listing: listing });
            return await modal.present();
          }
        */

      }, {
        key: "isClaimed",
        value: function isClaimed() {
          if (this.listing['_claimed'] && this.listing['_claimed'] == '1') return true;else return false;
        }
      }, {
        key: "getBackground",
        value: function getBackground(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.listing_data && listing.listing_data._job_cover) image = listing.listing_data._job_cover;else if (!listing.img_cover && listing.listing_data && !listing.listing_data._job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].site_details.placeholderImgUrl;
          return this._sanitizer.bypassSecurityTrustStyle("url(".concat(image, ")"));
        }
      }, {
        key: "getListingImg",
        value: function getListingImg(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.listing_data && listing.listing_data._job_cover) image = listing.listing_data._job_cover;else if (!listing.img_cover && listing.listing_data && !listing.listing_data._job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }, {
        key: "getListingImgNewStructureData",
        value: function getListingImgNewStructureData(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.job_cover) image = listing.job_cover;else if (!listing.img_cover && !listing.job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }, {
        key: "getBackgroundDarker",
        value: function getBackgroundDarker(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.listing_data && listing.listing_data._job_cover) image = listing.listing_data._job_cover;else if (!listing.img_cover && listing.listing_data && !listing.listing_data._job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_5__["GlobalFields"].site_details.placeholderImgUrl;
          return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(to top, rgba(23, 23, 23, 0.52), rgba(23, 23, 23, 0.52)), url(".concat(image, ")"));
        }
      }, {
        key: "getStartsHtml",
        value: function getStartsHtml(rating) {
          var num = parseFloat(rating) / 2;
          var res = [];

          while (num >= 1) {
            res.push("");
            num = num - 1;
          }

          if (num < 1 && num > 0) res.push('-half');

          for (var i = 0; i < 5 - res.length; i++) {
            res.push('-outline');
          }

          return res;
        }
      }, {
        key: "getTruncatedDecimal",
        value: function getTruncatedDecimal(n) {
          var num = parseFloat(n);
          return num.toFixed(1);
        }
      }]);

      return ListingList;
    }();

    ListingList.popover = undefined;

    ListingList.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_7__["Service"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_entities_listing__WEBPACK_IMPORTED_MODULE_3__["Listing"])], ListingList.prototype, "listing", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ListingList.prototype, "search", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ListingList.prototype, "type", void 0);
    ListingList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-listingList',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listingList.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listingList/listingList.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listingList.scss */
      "./src/app/listingList/listingList.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_7__["Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], ListingList);
    /***/
  },

  /***/
  "./src/app/listingPage/listingPage.scss":
  /*!**********************************************!*\
    !*** ./src/app/listingPage/listingPage.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingPageListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blackOverlayPostImg {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  background: linear-gradient(to bottom, #ffffff00, rgba(23, 23, 23, 0.27));\n  height: 250px;\n}\n\n.postLogoImg {\n  border-radius: 50px;\n  position: relative;\n  border: solid white 3px;\n  background-position: center !important;\n  background-size: cover !important;\n  background-color: white !important;\n  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05) !important;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  margin-top: -50px;\n}\n\n.postLogoImgCentered {\n  border-radius: 50px;\n  background-position: center !important;\n  background-size: cover !important;\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n}\n\n.postLogoImgPlaceholder {\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n}\n\n.listingPageType {\n  font-weight: 800 !important;\n  line-height: 16px !important;\n  letter-spacing: normal !important;\n  text-transform: uppercase !important;\n  color: #767676;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  margin-bottom: 2px !important;\n  font-size: 11px !important;\n  overflow: hidden !important;\n  font-weight: bold;\n  margin-top: -5px;\n  padding: 5px;\n  text-align: left;\n  width: 100%;\n  padding-right: 5px;\n  margin-top: -20px;\n}\n\n.listingPageTitle {\n  font-weight: 800 !important;\n  font-size: 22px !important;\n  line-height: 23px !important;\n  margin-bottom: -10px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 2 !important;\n  overflow: hidden !important;\n  padding: 10px;\n}\n\n.listingPageTitleWhite {\n  font-weight: 900 !important;\n  font-size: 30px !important;\n  margin-bottom: -10px;\n  letter-spacing: normal !important;\n  text-overflow: ellipsis !important;\n  -webkit-line-clamp: 2 !important;\n  overflow: hidden !important;\n  padding: 0;\n  line-height: 1.2;\n}\n\n.listingPageSubtitle {\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  padding: 10px;\n  font-size: smaller;\n  color: #979797;\n}\n\n.listingPageSubtitleWhite {\n  text-overflow: ellipsis !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  padding: 10px;\n  font-weight: bold;\n}\n\n.iconStyle {\n  padding-left: 10px;\n  font-size: large;\n  max-width: 8.33333%;\n}\n\n.labelHeader {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  position: relative;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  top: 8px;\n  width: calc(100% - 50px);\n  font-style: italic;\n}\n\n.labelCustomDetails {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  color: #484848 !important;\n  line-height: 35px;\n}\n\n.labelHTML {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  line-height: 1.4444444444em !important;\n  color: #484848 !important;\n  text-align: left;\n}\n\n.categoryLabel {\n  padding: 4px;\n  margin: 5px;\n  width: 100% !important;\n  color: #232323;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n  margin-bottom: 4px !important;\n  text-align: left !important;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-color: rgba(0, 0, 0, 0.1) !important;\n  -o-border-image: initial !important;\n     border-image: initial !important;\n  border-radius: 3px !important;\n}\n\n.listCategories {\n  list-style-type: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  line-height: 3;\n}\n\n.descriptionTitle {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 14px !important;\n  font-weight: 500;\n  line-height: 1.4444444444em !important;\n  color: #484848 !important;\n  padding: 5px;\n  text-transform: uppercase;\n}\n\n.description {\n  margin: 0px !important;\n  font-size: 14px !important;\n  font-weight: 400 !important;\n  line-height: 1.4em !important;\n  color: #484848 !important;\n  padding: 5px;\n  white-space: pre-wrap;\n  padding-left: 10px;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.backBtn {\n  font-size: 32px !important;\n  font-weight: 600;\n  margin-top: -6px;\n  transition: none 0s ease 0s;\n}\n\n.tableRow {\n  margin: -10px 15px 5px 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 5px;\n  padding-bottom: 2px;\n  font-size: smaller;\n}\n\n.mainDetails {\n  margin: 15px;\n  border-radius: 15px;\n  background-image: linear-gradient(to bottom right, #f3f3f3, #f5f5f5);\n  padding: 5px;\n}\n\n.iconGoodPosition {\n  position: relative;\n  top: 2px;\n  left: 0px;\n}\n\n.faIconGoodPosition {\n  font-size: 17px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.iconCircleBox {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  line-height: 29px;\n  margin-right: 5px;\n  margin-left: 5px;\n  color: #70778b;\n  font-size: 13px;\n  border-radius: 50px;\n  text-align: center;\n  background-color: #f3f3f6;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconCircleBoxCatRegions {\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  line-height: 28px;\n  margin-left: 10px;\n  color: #70778b;\n  font-size: 14px;\n  border-radius: 50px;\n  text-align: center;\n  background-color: #f3f3f6;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconCircleBoxCatRegions[dir=rtl] {\n  margin-left: 0px;\n  margin-right: 10px;\n}\n\n.reviewsLabelHeader {\n  text-align: right;\n  width: 100%;\n  padding-right: 5px;\n  font-size: small;\n  margin-top: -45px;\n}\n\n.reviewsLabelHeaderLittle {\n  font-size: small;\n  text-align: right;\n  margin-top: -20px;\n}\n\n.fastBtnPaddingLeft {\n  padding-left: 50px;\n}\n\n.fastBtnPaddingRight {\n  padding-right: 50px;\n}\n\n.fastBtnsContainer {\n  margin: 5px;\n  padding: 2px;\n  padding-left: 7px;\n  padding-right: 7px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid #e7e7ed;\n  border-radius: 2px;\n  text-align: center;\n}\n\n.fastBtnsContainerFull {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  position: relative;\n  right: 0px;\n  height: 30px;\n  margin: 5px;\n  color: black !important;\n  background-color: white !important;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.29);\n}\n\n.fastBtnLabel {\n  color: #70778b;\n  font-size: 10pt;\n}\n\n.fastBtnLabelWhite {\n  color: #4c4c4c;\n  font-size: 10pt;\n}\n\n.fastBtnIcon {\n  position: relative;\n  top: 3px;\n}\n\n.fastBtnIcon[dir=ltr] {\n  right: 5px;\n}\n\n.fastBtnIcon[dir=rtl] {\n  left: 5px;\n}\n\n.topBar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 50px;\n  padding: 5px;\n  padding-top: 10px;\n  background: linear-gradient(to bottom, #00000057, transparent);\n}\n\n.bottomBar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  bottom: 0;\n  height: 50px;\n  padding-top: 10px;\n  background: white;\n  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05) !important;\n  border-top: 1px solid #EBEBEB !important;\n  padding: 10px 0 !important;\n}\n\nion-conten {\n  --offset-top: 50px;\n}\n\n.sliderWithCSS {\n  overflow-x: auto;\n  height: 250px;\n  width: 100%;\n  list-style-type: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  line-height: 3;\n}\n\n.postImg {\n  width: 100%;\n  height: 250px;\n  display: inline-block;\n  font-size: 1pt;\n  background-position: center !important;\n  background-size: cover !important;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(255, 255, 255, 0));\n}\n\n.galleryImg {\n  margin: 5px;\n  width: 90%;\n  height: 250px;\n  display: inline-block;\n  font-size: 1pt;\n  background-position: center !important;\n  background-size: cover !important;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(255, 255, 255, 0));\n}\n\n.postImgVertical {\n  width: 100%;\n  height: 450px;\n  background-position: center !important;\n  background-size: cover !important;\n  background: black;\n}\n\n.titleInTheMiddle {\n  z-index: 20;\n  transform: translateY(50%);\n  color: white;\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n}\n\n.speech-bubble {\n  position: relative;\n  background-image: linear-gradient(to bottom right, #4889ff, #00a1ff);\n  border-radius: 0.4em;\n  padding: 15px;\n  color: white;\n}\n\n.speech-bubble:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 0;\n  height: 0;\n  border: 15px solid transparent;\n  border-bottom-color: #438cff;\n  border-top: 0;\n  border-left: 0;\n  margin-left: -7.5px;\n  margin-top: -14px;\n}\n\n.commentBox {\n  white-space: normal;\n  line-height: 1.2;\n  font-size: 10pt;\n}\n\n.commentBoxCard {\n  white-space: normal;\n  line-height: 1;\n  color: #575757;\n  font-size: 9pt;\n}\n\n.cardReview {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: whitesmoke;\n}\n\n.btnRatings {\n  margin-top: -10px;\n  margin-left: -10px;\n  color: #4a4a4a;\n  margin-right: -10px;\n}\n\n.imgComments {\n  height: 50px;\n  margin: 5px;\n}\n\n.addReview {\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  position: relative;\n  right: 0px;\n  height: 30px;\n  min-width: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  line-height: 1px;\n  color: black;\n  background-color: white;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n}\n\n.fullHearth {\n  color: #FF5722;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9saXN0aW5nUGFnZS9saXN0aW5nUGFnZS5zY3NzIiwic3JjL2FwcC9saXN0aW5nUGFnZS9saXN0aW5nUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlFQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0RBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0hGOztBRE1BO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDSkY7O0FETUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDBEQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0tBQUEsZ0NBQUE7RUFDQSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UsMEJBQUE7QUNIRjs7QURNQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNIRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNGRjs7QURLQTtFQUNFLGlDQUFBO0FDRkY7O0FETUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtBQ0hGOztBRE9BO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRFFBO0VBQ0Usa0JBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7QUNMRjs7QURPQTtFQUNFLFNBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4REFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0RBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsOEVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSw4RUFBQTtBQ0pGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFFQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxvRUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNMRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2xpc3RpbmdQYWdlL2xpc3RpbmdQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4uYmxhY2tPdmVybGF5UG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmMDAsIHJnYmEoMjMsIDIzLCAyMywgMC4yNykpO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ucG9zdExvZ29JbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggOXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG5cbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4ucG9zdExvZ29JbWdDZW50ZXJlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RMb2dvSW1nUGxhY2Vob2xkZXIge1xuXG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbi5saXN0aW5nUGFnZVR5cGUge1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc2NzY3NjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5saXN0aW5nUGFnZVRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5saXN0aW5nUGFnZVRpdGxlV2hpdGUge1xuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubGlzdGluZ1BhZ2VTdWJ0aXRsZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiAjOTc5Nzk3XG59XG5cbi5saXN0aW5nUGFnZVN1YnRpdGxlV2hpdGUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uU3R5bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG59XG5cbi5sYWJlbEhlYWRlciB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmxhYmVsQ3VzdG9tRGV0YWlscyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuLmxhYmVsSFRNTCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS40NDQ0NDQ0NDQ0NDQ0NDQ0ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5TGFiZWwge1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzIzMjMyMztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0Q2F0ZWdvcmllcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMztcbn1cblxuLmRlc2NyaXB0aW9uVGl0bGUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ0NDQ0NDQ0NDQ0NDQ0NDRlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbn1cbi5oZWFkZXItbWQgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcblxufVxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4uYmFja0J0biB7XG4gIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xufVxuXG5cbi50YWJsZVJvdyB7XG4gIG1hcmdpbjogLTEwcHggMTVweCA1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5cbi5tYWluRGV0YWlscyB7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2YzZjNmMyAsICNmNWY1ZjUpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pY29uR29vZFBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uZmFJY29uR29vZFBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmljb25DaXJjbGVCb3h7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogIzcwNzc4YjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmljb25DaXJjbGVCb3hDYXRSZWdpb25ze1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pY29uQ2lyY2xlQm94Q2F0UmVnaW9uc1tkaXI9XCJydGxcIl17XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJldmlld3NMYWJlbEhlYWRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbn1cbi5yZXZpZXdzTGFiZWxIZWFkZXJMaXR0bGUge1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG5cbn1cblxuLmZhc3RCdG5QYWRkaW5nTGVmdHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uZmFzdEJ0blBhZGRpbmdSaWdodHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiB9XG5cbi5mYXN0QnRuc0NvbnRhaW5lcntcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2VkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhc3RCdG5zQ29udGFpbmVyRnVsbHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcbn1cblxuLmZhc3RCdG5MYWJlbHtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmZhc3RCdG5MYWJlbFdoaXRle1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uZmFzdEJ0bkljb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi5mYXN0QnRuSWNvbltkaXI9XCJsdHJcIl17XG4gIHJpZ2h0OiA1cHg7XG59XG4uZmFzdEJ0bkljb25bZGlyPVwicnRsXCJde1xuICBsZWZ0OiA1cHg7XG59XG5cbi50b3BCYXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gYm90dG9tLCAjMDAwMDAwNTcsIHRyYW5zcGFyZW50ICk7XG59XG5cbi5ib3R0b21CYXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCA5cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW57XG4gIC0tb2Zmc2V0LXRvcDogNTBweDtcbn1cblxuLnNsaWRlcldpdGhDU1N7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDM7XG59XG5cbi5wb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcHQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5nYWxsZXJ5SW1nIHtcbiAgbWFyZ2luOjVweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDFwdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuXG4ucG9zdEltZ1ZlcnRpY2FsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnRpdGxlSW5UaGVNaWRkbGV7XG4gIHotaW5kZXg6IDIwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zcGVlY2gtYnViYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNDg4OWZmLCAjMDBhMWZmKTtcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlZWNoLWJ1YmJsZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0MzhjZmY7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogLTcuNXB4O1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cblxuLmNvbW1lbnRCb3h7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmNvbW1lbnRCb3hDYXJke1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM1NzU3NTc7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uY2FyZFJldmlld3tcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYnRuUmF0aW5nc3tcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5pbWdDb21tZW50c3tcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmFkZFJldmlld3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmZ1bGxIZWFydGh7XG4gIGNvbG9yOiAjRkY1NzIyXG59XG4iLCIuYmxhY2tPdmVybGF5UG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmMDAsIHJnYmEoMjMsIDIzLCAyMywgMC4yNykpO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ucG9zdExvZ29JbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggOXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLnBvc3RMb2dvSW1nQ2VudGVyZWQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0TG9nb0ltZ1BsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLmxpc3RpbmdQYWdlVHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzY3Njc2O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmxpc3RpbmdQYWdlVGl0bGUge1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdGluZ1BhZ2VUaXRsZVdoaXRlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmxpc3RpbmdQYWdlU3VidGl0bGUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBjb2xvcjogIzk3OTc5Nztcbn1cblxuLmxpc3RpbmdQYWdlU3VidGl0bGVXaGl0ZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb25TdHlsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmxhYmVsSGVhZGVyIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgdG9wOiA4cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGFiZWxDdXN0b21EZXRhaWxzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4ubGFiZWxIVE1MIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ0NDQ0NDQ0NDRlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2F0ZWdvcnlMYWJlbCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmxpc3RDYXRlZ29yaWVzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiAzO1xufVxuXG4uZGVzY3JpcHRpb25UaXRsZSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDQ0NDQ0NDQ0NGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZCAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrQnRuIHtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG59XG5cbi50YWJsZVJvdyB7XG4gIG1hcmdpbjogLTEwcHggMTVweCA1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4ubWFpbkRldGFpbHMge1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNmM2YzZjMsICNmNWY1ZjUpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pY29uR29vZFBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uZmFJY29uR29vZFBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmljb25DaXJjbGVCb3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pY29uQ2lyY2xlQm94Q2F0UmVnaW9ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzcwNzc4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmljb25DaXJjbGVCb3hDYXRSZWdpb25zW2Rpcj1ydGxdIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmV2aWV3c0xhYmVsSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xufVxuXG4ucmV2aWV3c0xhYmVsSGVhZGVyTGl0dGxlIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uZmFzdEJ0blBhZGRpbmdMZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uZmFzdEJ0blBhZGRpbmdSaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5mYXN0QnRuc0NvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYXN0QnRuc0NvbnRhaW5lckZ1bGwge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjkpO1xufVxuXG4uZmFzdEJ0bkxhYmVsIHtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmZhc3RCdG5MYWJlbFdoaXRlIHtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmZhc3RCdG5JY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cblxuLmZhc3RCdG5JY29uW2Rpcj1sdHJdIHtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmZhc3RCdG5JY29uW2Rpcj1ydGxdIHtcbiAgbGVmdDogNXB4O1xufVxuXG4udG9wQmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMDU3LCB0cmFuc3BhcmVudCk7XG59XG5cbi5ib3R0b21CYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAzcHggOXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVuIHtcbiAgLS1vZmZzZXQtdG9wOiA1MHB4O1xufVxuXG4uc2xpZGVyV2l0aENTUyB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDM7XG59XG5cbi5wb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcHQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5nYWxsZXJ5SW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcHQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5wb3N0SW1nVmVydGljYWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udGl0bGVJblRoZU1pZGRsZSB7XG4gIHotaW5kZXg6IDIwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zcGVlY2gtYnViYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNDg4OWZmLCAjMDBhMWZmKTtcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWVjaC1idWJibGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0MzhjZmY7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogLTcuNXB4O1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cblxuLmNvbW1lbnRCb3gge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5jb21tZW50Qm94Q2FyZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzU3NTc1NztcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5jYXJkUmV2aWV3IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYnRuUmF0aW5ncyB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uaW1nQ29tbWVudHMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWRkUmV2aWV3IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmZ1bGxIZWFydGgge1xuICBjb2xvcjogI0ZGNTcyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/listingPage/listingPage.ts":
  /*!********************************************!*\
    !*** ./src/app/listingPage/listingPage.ts ***!
    \********************************************/

  /*! exports provided: ListingPage */

  /***/
  function srcAppListingPageListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListingPage", function () {
      return ListingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _app_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./popoverRatings/popoverRatings */
    "./src/app/listingPage/popoverRatings/popoverRatings.ts");
    /* harmony import */


    var _popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./popoverImg/popoverImg */
    "./src/app/listingPage/popoverImg/popoverImg.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _modalWriteReview_modalWriteReview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modalWriteReview/modalWriteReview */
    "./src/app/listingPage/modalWriteReview/modalWriteReview.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var ListingPage = /*#__PURE__*/function () {
      function ListingPage(service, modalCtrl, statusBar, callNumber, platform, launchNavigator, socialSharing, translate, popoverController, _sanitizer, navController, inAppBrowser) {
        _classCallCheck(this, ListingPage);

        this.service = service;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.callNumber = callNumber;
        this.platform = platform;
        this.launchNavigator = launchNavigator;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.popoverController = popoverController;
        this._sanitizer = _sanitizer;
        this.navController = navController;
        this.inAppBrowser = inAppBrowser;
        this.custFields = [];
        this.custRelatedListings = [];
        this.custTaxonomies = [];
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.Constants = _app_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"];
        this.iniFinished = false;
        this.existCustomFieldToBeShown = true;
        this.daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.daysOfTheWeekLabel = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.slideOpts = {
          slidesPerView: 1
        };
        this.ini();
      }

      _createClass(ListingPage, [{
        key: "ini",
        value: function ini() {
          var _this13 = this;

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing._case27_listing_type) _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedTypeDetail = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingTypesDetails.find(function (res) {
            return res.post_name == _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing._case27_listing_type;
          });

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedTypeDetail) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.selectedType = this.GlobalFields.selectedTypeDetail.ID;
            this.GlobalFields.selectListingTypeDetail();
          }

          console.log(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedTypeDetail);
          console.log(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing); //controlla se ?? un array, se non lo ?? lo converte in array

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_gallery && !Array.isArray(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_gallery)) {
            this.translateToArray();
          }

          this.getCategories();
          this.getCustomFields();
          this.getCustomTaxonomies();
          console.log(this.custFields);
          console.log(this.custTaxonomies);
          console.log(this.custRelatedListings);
          this.existCustomFieldToBeShown = this.ifExistCustomFieldTaxToBeShown();
          this.iniFinished = true;
          this.GlobalFields.loadingSoft = false; //preprare custom ratings

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.comments.forEach(function (comm) {
            if (comm.ratings) comm.ratings = _this13.generateArray(comm.ratings);
          }); //check if is bookmarked


          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].bookmarkedListings && _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].bookmarkedListings.find(function (el) {
            return el.id == _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.id;
          })) _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.isBookmarked = true;else _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.isBookmarked = false;
          this.service.storeRecentViewedListing(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing);
          this.translate.get('DAY_MON').subscribe(function (msg1) {
            _this13.translate.get('DAY_TUE').subscribe(function (msg2) {
              _this13.translate.get('DAY_WED').subscribe(function (msg3) {
                _this13.translate.get('DAY_THU').subscribe(function (msg4) {
                  _this13.translate.get('DAY_FRI').subscribe(function (msg5) {
                    _this13.translate.get('DAY_SAT').subscribe(function (msg6) {
                      _this13.translate.get('DAY_SUN').subscribe(function (msg7) {
                        _this13.daysOfTheWeekLabel = [msg1, msg2, msg3, msg4, msg5, msg6, msg7];
                      });
                    });
                  });
                });
              });
            });
          });
        }
      }, {
        key: "ifExistCustomFieldTaxToBeShown",
        value: function ifExistCustomFieldTaxToBeShown() {
          if (this.custFields && this.custFields.some(function (el) {
            return el.show_in_detail_view;
          })) return true;else return false;
        }
      }, {
        key: "translateToArray",
        value: function translateToArray() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_gallery) {
            var i = 1;
            var res = [];

            while (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_gallery[i + '']) {
              res.push(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_gallery[i + '']);
              i = i + 1;
            }

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_gallery = res;
            return;
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.GlobalFields.selectedListing = undefined; //this.navCtrl.pop();

          this.modalCtrl.dismiss({});
        }
      }, {
        key: "getCustomField",
        value: function getCustomField(key) {
          var res = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing['_' + key];
          if (!res) res = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing[key];
          return res;
        }
      }, {
        key: "fieldToBeShown",
        value: function fieldToBeShown(key) {
          var field = this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[key];
          if (field && field.show_in_detail_view) return true;else false;
        }
      }, {
        key: "isPresentCustomField",
        value: function isPresentCustomField(key) {
          var a = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing[key];
          var b = this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[key.substr(1)];
          if (a != undefined && b != undefined) return true;else return false;
        }
        /*
          openModalGallery(index: number) {
            let photos = [];
            for (let media of {.listing_data._job_gallery) {
              photos.push({url: media});
            }
            let modal = this.modalCtrl.create(GalleryModal, {
              photos: photos,
              initialSlide: index
            });
            modal.present();
          }
        */

      }, {
        key: "openModalGallery",
        value: function openModalGallery(index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17);
          }));
        }
      }, {
        key: "getNiceString",
        value: function getNiceString(s) {
          var field = this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[s];
          if (field) return field.label;else return '';
        }
      }, {
        key: "getCustomFieldFromListingType",
        value: function getCustomFieldFromListingType(s) {
          var field = this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[s];
          return field;
        }
      }, {
        key: "generateArray",
        value: function generateArray(obj) {
          return Object.keys(obj).map(function (key) {
            return {
              key: key,
              value: obj[key]
            };
          });
        }
      }, {
        key: "getStringFromArray",
        value: function getStringFromArray(arr) {
          if (arr && Array.isArray(arr)) return arr.join();
        }
      }, {
        key: "isHTML",
        value: function isHTML(str) {
          if (str && !Array.isArray(str)) {
            var a = document.createElement('div');
            a.innerHTML = str;

            for (var c = a.childNodes, i = c.length; i--;) {
              if (c[i].nodeType == 1) return true;
            }
          }

          return false;
        }
      }, {
        key: "isURL",
        value: function isURL(str) {
          if (str && !Array.isArray(str)) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

            return !!pattern.test(str);
          }

          return false;
        }
      }, {
        key: "isArray",
        value: function isArray(str) {
          console.log(str);

          if (str && Array.isArray(str)) {
            return true;
          }

          return false;
        }
      }, {
        key: "isShortCode",
        value: function isShortCode(str) {
          if (str && typeof str === 'string') return str.includes("[") && str.includes("]");else true;
        }
      }, {
        key: "getWorkingHours",
        value: function getWorkingHours(day) {
          var res = '';
          if (day && day.entry_hours) day.entry_hours.forEach(function (d, i) {
            res = res + d.from + ' - ' + d.to;
            if (i < day.entry_hours.length - 1) res = res + "<br>";
          });
          if (res != '') return res;else return '-';
        }
      }, {
        key: "getStartsHtml",
        value: function getStartsHtml(rating) {
          var num = parseFloat(rating);
          var res = [];
          var maxNumberStarts = 5;

          for (var i = 0; i < maxNumberStarts; i++) {
            if (num >= 1) {
              res.push('');
              num = num - 1;
            } else if (num > 0) {
              res.push('-half');
              num = 0;
            } else {
              res.push('-outline');
            }
          }

          return res;
        }
      }, {
        key: "getNumberFromString",
        value: function getNumberFromString(s) {
          return parseInt(s);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var res = [];

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_listing_category) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_listing_category.forEach(function (id) {
              var p = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getCategoryId(id);

              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingCategories.forEach(function (cat) {
                if (cat.id == id) {
                  res.push(cat);
                }
              });
            });
          }

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_listing_category = res;
        }
      }, {
        key: "getCustomFields",
        value: function getCustomFields() {
          var _this14 = this;

          //filtra tutti i campi che non devono compararire
          var keys = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filterNotCustomFields(Object.keys(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing));

          this.custFields = [];
          this.custRelatedListings = [];
          if (keys && Array.isArray(keys)) keys.forEach(function (key) {
            var okKey;
            if (key[0] == '_') okKey = key.substr(1); //starts with "_" only in listing.listing_data
            else okKey = key;

            if (okKey != 'related_listing' && okKey != 'job_duration') {
              var listingTypeField = _this14.getCustomFieldFromListingType(okKey);

              console.log(listingTypeField);

              if (listingTypeField) {
                var value = _this14.getCustomFieldTaxonomyOptionByKey(okKey, _this14.getCustomField(okKey));

                console.log(value);

                if (value) {
                  //not custom related listings
                  if (value != '' && !_this14.isShortCode(value) && listingTypeField.type != "related-listing") _this14.custFields.push({
                    key: okKey,
                    value: value,
                    show_in_detail_view: _this14.fieldToBeShown(okKey)
                  }); //custom related listings

                  if (listingTypeField.type == "related-listing") _this14.custRelatedListings.push({
                    key: okKey,
                    label: listingTypeField.label,
                    listings: value
                  });
                }
              }
            }
          });
        }
      }, {
        key: "getCustomTaxonomies",
        value: function getCustomTaxonomies() {
          var _this15 = this;

          var keys = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filterNotCustomTaxonomies(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.pure_taxonomies);

          this.custTaxonomies = [];
          console.log(keys);
          if (keys && Array.isArray(keys)) keys.forEach(function (key) {
            var listingTypeField = _this15.getCustomFieldFromListingType(key);

            console.log(listingTypeField);

            if (listingTypeField) {
              var value = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.pure_taxonomies[key];
              console.log(value);
              if (value && value != '') _this15.custTaxonomies.push({
                key: key,
                label: listingTypeField.default_label,
                value: value,
                show_in_detail_view: _this15.fieldToBeShown(key)
              });
            }
          });
        }
      }, {
        key: "getLinkIcon",
        value: function getLinkIcon(net) {
          switch (net) {
            case 'Facebook':
            case 'facebook':
            case 'fb':
              {
                return 'fab fa-facebook';
              }

            case 'Instagram':
            case 'instagram':
            case 'insta':
              {
                return 'fab fa-instagram';
              }

            case 'Website':
            case 'website':
            case 'web':
              {
                return 'fas fa-globe';
              }

            case 'Twitter':
            case 'twitter':
              {
                return 'fab fa-twitter';
              }

            case 'Pinterest':
            case 'pinterest':
              {
                return 'fab fa-pinterest';
              }

            case 'YouTube':
            case 'youtube':
              {
                return 'fab fa-youtube';
              }

            case 'Google+':
            case 'google':
              {
                return 'fab fa-google';
              }

            case 'Reddit':
            case 'reddit':
              {
                return 'fab fa-reddit';
              }

            case 'Snapchat':
            case 'snapchat':
              {
                return 'fab fa-snapchat';
              }

            case 'Tumblr':
            case 'tumblr':
              {
                return 'fab fa-tumblr';
              }

            default:
              return 'fas fa-link';
          }
        }
      }, {
        key: "getLinkColor",
        value: function getLinkColor(net) {
          switch (net) {
            case 'Facebook':
            case 'facebook':
            case 'fb':
              {
                return '#3B5998';
              }

            case 'Instagram':
            case 'instagram':
            case 'insta':
              {
                return '#E1306C';
              }

            case 'Website':
            case 'website':
            case 'web':
              {
                return '#499EFF';
              }

            case 'Twitter':
            case 'twitter':
              {
                return '#1dcaff';
              }

            case 'Pinterest':
            case 'pinterest':
              {
                return '#E60023';
              }

            case 'YouTube':
            case 'youtube':
              {
                return '#F44336';
              }

            case 'Google+':
            case 'google':
              {
                return '#F44336';
              }

            case 'Reddit':
            case 'reddit':
              {
                return '#ff4500';
              }

            case 'Snapchat':
            case 'snapchat':
              {
                return '#FFEB3B';
              }

            case 'Tumblr':
            case 'tumblr':
              {
                return '#34526f';
              }

            default:
              return '#499EFF';
          }
        }
      }, {
        key: "callNumberAction",
        value: function callNumberAction(number) {
          console.log('Call number ' + number);

          if (!this.platform.is('mobileweb')) //non ?? browser
            {
              this.callNumber.callNumber(this.clearSpaces(number) + '', true).then(function (res) {
                return console.log('Launched dialer!', res);
              })["catch"](function (err) {
                return console.log('Error launching dialer', err);
              });
            }
        }
      }, {
        key: "goToNavigatorAction",
        value: function goToNavigatorAction(address) {
          console.log('Go to ' + address);

          if (!this.platform.is('mobileweb')) //non ?? browser
            {
              this.launchNavigator;
              this.launchNavigator.navigate(address).then(function (success) {
                return console.log('Launched navigator');
              }, function (error) {
                return console.log('Error launching navigator', error);
              });
            }
        }
      }, {
        key: "clearSpaces",
        value: function clearSpaces(s) {
          return s.replace(' ', '').replace(' ', '').replace(' ', '');
        }
      }, {
        key: "share",
        value: function share() {
          this.socialSharing.share('Check this link', '', '', _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.link).then(function () {
            console.log('Successful share');
          })["catch"](function (error) {
            console.log('Error sharing:', error);
          });
        }
      }, {
        key: "getActionContainerClass",
        value: function getActionContainerClass() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.actionButtonStyle == '2') return 'fastBtnsContainer';else return 'fastBtnsContainerFull';
        }
      }, {
        key: "getActionLabelClass",
        value: function getActionLabelClass() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.actionButtonStyle == '2') return 'fastBtnLabel';else return 'fastBtnLabelWhite';
        }
      }, {
        key: "getCustomFieldTaxonomyOptionByKey",
        value: function getCustomFieldTaxonomyOptionByKey(key, optID) {
          /*   console.log(key);
             console.log(optID);
             console.log(GlobalFields.filtersSearch.customFieldsDropdownKeysOptions);
             console.log(GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions);
          */
          //is a custom field ?
          var field = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.customFieldsDropdownKeysOptions.find(function (term) {
            return term.key == key;
          });

          if (field && field.options) {
            var opt = field.options.find(function (temp) {
              return temp.term_id == optID;
            });
            if (opt) //is not an array
              return opt.name;else if (Array.isArray(optID)) {
              //is an array
              var res = '';

              var _loop5 = function _loop5(i) {
                var opt = field.options.find(function (temp) {
                  return temp.term_id == optID[i];
                });

                if (opt) {
                  if (i < optID.length - 1) res += opt.name + ', ';else res += opt.name;
                }
              };

              for (var i = 0; i < optID.length; i++) {
                _loop5(i);
              }

              return res;
            } else if (optID.constructor === Object) {
              //is an object
              var _res = '';

              for (var property in optID) {
                _res += optID[property] + ' ';
              }

              return _res;
            }
          } //is a taxonomy ?


          field = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.customTaxonomiesDropdownKeysOptions.find(function (term) {
            return term.key == key;
          });

          if (field && field.options) {
            var _opt = field.options.find(function (temp) {
              return temp.term_id == optID;
            });

            if (_opt) //is not an array
              return _opt.name;else if (Array.isArray(optID)) {
              //is an array
              var _res2 = '';

              var _loop6 = function _loop6(_i) {
                var opt = field.options.find(function (temp) {
                  return temp.term_id == optID[_i];
                });

                if (opt) {
                  if (_i < optID.length - 1) _res2 += opt.name + ', ';else _res2 += opt.name;
                }
              };

              for (var _i = 0; _i < optID.length; _i++) {
                _loop6(_i);
              }

              return _res2;
            } else if (optID.constructor === Object) {
              //is an object
              var _res3 = '';

              for (var _property in optID) {
                _res3 += optID[_property] + ' ';
              }

              return _res3;
            }
          }

          return optID;
        }
      }, {
        key: "showContactInfo",
        value: function showContactInfo() {
          //if no data to show
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing || !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_email && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_phone && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.job_location && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.links) return false;
          if (this.GlobalFields.site_details.contactInfoChoice == '1') //show always
            return true;
          if (this.GlobalFields.site_details.contactInfoChoice == '3') //hide always
            return false;
          if (this.GlobalFields.site_details.contactInfoChoice == '2' && this.GlobalFields.selectedListing['claimed'] && this.GlobalFields.selectedListing['claimed'] == '1') return true;else return false;
        }
      }, {
        key: "isClaimed",
        value: function isClaimed() {
          if (this.GlobalFields.selectedListing['claimed'] && this.GlobalFields.selectedListing['claimed'] == '1') return true;else return false;
        }
      }, {
        key: "openRatingsPopover",
        value: function openRatingsPopover(ev, ratings) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var popover;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].customRatingsSelected = ratings;
                    _context18.next = 3;
                    return this.popoverController.create({
                      component: _popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_12__["PopoverRatings"],
                      cssClass: '',
                      event: ev,
                      translucent: true
                    });

                  case 3:
                    popover = _context18.sent;
                    _context18.next = 6;
                    return popover.present();

                  case 6:
                    return _context18.abrupt("return", _context18.sent);

                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "openImgPopover",
        value: function openImgPopover(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var popover;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedImg = url;
                    _context19.next = 3;
                    return this.popoverController.create({
                      component: _popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_13__["PopoverImg"],
                      cssClass: 'popoverImg',
                      translucent: true
                    });

                  case 3:
                    popover = _context19.sent;
                    _context19.next = 6;
                    return popover.present();

                  case 6:
                    return _context19.abrupt("return", _context19.sent);

                  case 7:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "getClassContainer",
        value: function getClassContainer() {
          if (this.GlobalFields.isWhiteBackground()) return 'sectionContainer';else return 'sectionContainerNotWhiteBackground';
        }
      }, {
        key: "getBackground",
        value: function getBackground(listing) {
          var image = '';
          if (listing && listing.img_cover) image = listing.img_cover;
          if (listing && !listing.img_cover && listing.job_cover) image = listing.job_cover;else if (!listing || !listing.img_cover && !listing.job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
          return this._sanitizer.bypassSecurityTrustStyle("url(".concat(image, ")"));
        }
      }, {
        key: "getBackgroundDarker",
        value: function getBackgroundDarker(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.job_cover) image = listing.job_cover;else if (!listing.img_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
          return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(to top, rgba(23, 23, 23, 0.52), rgba(23, 23, 23, 0.52)), url(".concat(image, ")"));
        }
      }, {
        key: "getBackgroundDarkerCached",
        value: function getBackgroundDarkerCached(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.job_cover) image = listing.job_cover;else if (!listing.img_cover && !listing.job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }, {
        key: "writeReview",
        value: function writeReview() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.GlobalFields.oldReview = this.youAlreadyReviewed();
                    _context20.next = 3;
                    return this.modalCtrl.create({
                      component: _modalWriteReview_modalWriteReview__WEBPACK_IMPORTED_MODULE_15__["ModalWriteReview"]
                    });

                  case 3:
                    modal = _context20.sent;
                    modal.present();
                    _context20.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _yield$modal$onWillDi = _context20.sent;
                    data = _yield$modal$onWillDi.data;
                    this.ini();

                  case 10:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.navController.navigateForward('tabs/menuPage');
          this.closeModal();
        }
      }, {
        key: "doBookmark",
        value: function doBookmark() {
          var _this16 = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.isBookmarked = true;
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = true;
          this.service.doBookmark(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.id).subscribe(function (data) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;

            _this16.service.getBookmarkedListings().subscribe(function (data) {
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].bookmarkedListings = data;
            });
          }, function (err) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;

            _this16.service.refreshCookie();
          });
        }
      }, {
        key: "undoBookmark",
        value: function undoBookmark() {
          var _this17 = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.isBookmarked = false;
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = true;
          this.service.undoBookmark(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.id).subscribe(function (data) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;

            _this17.service.getBookmarkedListings().subscribe(function (data) {
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].bookmarkedListings = data;
            });
          }, function (err) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;

            _this17.service.refreshCookie();
          });
        }
      }, {
        key: "getTruncatedDecimal",
        value: function getTruncatedDecimal(n) {
          var num = parseFloat(n);
          return num.toFixed(1);
        }
      }, {
        key: "youAlreadyReviewed",
        value: function youAlreadyReviewed() {
          var _this18 = this;

          return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.comments.find(function (comm) {
            return comm.author_id == _this18.GlobalFields.profile.user.id;
          });
        }
      }, {
        key: "getImgCachedClass",
        value: function getImgCachedClass(class_to_add) {
          var class_name = " " + class_to_add;
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
      }, {
        key: "goToMessage",
        value: function goToMessage() {
          this.GlobalFields.msgToOwner = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedListing.author;
          this.closeModal();
          this.navController.navigateForward('tabs/messages');
        }
      }, {
        key: "openLink",
        value: function openLink(url) {
          console.log(url);
          var browser = this.inAppBrowser.create(url, '_system'); // browser.close();
        }
      }, {
        key: "getPrefixIfExist",
        value: function getPrefixIfExist(field) {
          var res = "";

          if (this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options && this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options.cover_details && this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.length > 0) {
            this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.forEach(function (obj) {
              if (obj.field == field.key) res = obj.prefix;
            });
          }

          return res;
        }
      }, {
        key: "getSuffixIfExist",
        value: function getSuffixIfExist(field) {
          var res = "";

          if (this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options && this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options.cover_details && this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.length > 0) {
            this.GlobalFields.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.forEach(function (obj) {
              if (obj.field == field.key) res = obj.suffix;
            });
          }

          return res;
        }
      }, {
        key: "checkIfHasPackageToBeShown",
        value: function checkIfHasPackageToBeShown(_key) {
          var _this19 = this;

          var key = _key.replace('_', '');

          var field = this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[key]; //    conditions?: {key?: string, compare?: string, value?: string}[];

          if (field) {
            if (!field.conditions) return true;
            if (field.conditions.length == 0) return true;
            if (field.conditions.some(function (cond) {
              return cond.some(function (c) {
                if (c.key == '__listing_package' && c.compare == '==' && (!c.value || c.value == "" || c.value == _this19.GlobalFields.selectedListing.package_id)) return true;else return false;
              });
            })) return true;
          }

          return false;
        }
      }, {
        key: "getSanifiedUrl",
        value: function getSanifiedUrl(url) {
          if (url && url.includes('youtube') && url.split('?').length > 0) {
            var r_url = 'https://youtube.com/embed/' + url.split('?')[1].replace('v=', '');
            console.log(r_url);
            return this._sanitizer.bypassSecurityTrustResourceUrl(r_url);
          }
        }
      }]);

      return ListingPage;
    }();

    ListingPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__["LaunchNavigator"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"]
      }];
    };

    ListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-listing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listingPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/listingPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listingPage.scss */
      "./src/app/listingPage/listingPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__["LaunchNavigator"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"]])], ListingPage);
    /***/
  },

  /***/
  "./src/app/listingPage/modalWriteReview/modalWriteReview.scss":
  /*!********************************************************************!*\
    !*** ./src/app/listingPage/modalWriteReview/modalWriteReview.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingPageModalWriteReviewModalWriteReviewScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tableRowThinner {\n  font-size: 10pt;\n}\n\n.btnSubmit {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n}\n\n.formContainer {\n  position: fixed;\n  top: 15%;\n  width: calc(90% - 20px);\n  border-radius: 5px;\n  left: 30px;\n  padding: 15px;\n  background-color: white;\n}\n\n.formLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 32px;\n  font-weight: bolder;\n  line-height: 1.125em;\n}\n\n.empty {\n  color: rgba(45, 45, 45, 0.21);\n}\n\n.colored {\n  color: #ffc106;\n}\n\n.reviewImg {\n  margin: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.newReviewImg {\n  margin: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50px;\n  height: 50px;\n}\n\n.imgContainerInline {\n  display: inline;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.btnSendReview {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9saXN0aW5nUGFnZS9tb2RhbFdyaXRlUmV2aWV3L21vZGFsV3JpdGVSZXZpZXcuc2NzcyIsInNyYy9hcHAvbGlzdGluZ1BhZ2UvbW9kYWxXcml0ZVJldmlldy9tb2RhbFdyaXRlUmV2aWV3LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nUGFnZS9tb2RhbFdyaXRlUmV2aWV3L21vZGFsV3JpdGVSZXZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZVJvd1RoaW5uZXIge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5idG5TdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1JTtcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGVmdDogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtTGFiZWwge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsaW5lLWhlaWdodDogMS4xMjVlbTtcbn1cblxuLmVtcHR5IHtcbiAgY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgLjIxKTtcbn1cblxuLmNvbG9yZWQge1xuICBjb2xvcjogI2ZmYzEwNjtcbn1cblxuLnJldmlld0ltZyB7XG4gIG1hcmdpbjogNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3UmV2aWV3SW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQ29udGFpbmVySW5saW5le1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJ0blNlbmRSZXZpZXd7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggM3B4IDEwcHg7XG59IiwiLnRhYmxlUm93VGhpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTUlO1xuICB3aWR0aDogY2FsYyg5MCUgLSAyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZWZ0OiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm1MYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4uZW1wdHkge1xuICBjb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjIxKTtcbn1cblxuLmNvbG9yZWQge1xuICBjb2xvcjogI2ZmYzEwNjtcbn1cblxuLnJldmlld0ltZyB7XG4gIG1hcmdpbjogNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3UmV2aWV3SW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQ29udGFpbmVySW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5idG5TZW5kUmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAzcHggMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/listingPage/modalWriteReview/modalWriteReview.ts":
  /*!******************************************************************!*\
    !*** ./src/app/listingPage/modalWriteReview/modalWriteReview.ts ***!
    \******************************************************************/

  /*! exports provided: ModalWriteReview */

  /***/
  function srcAppListingPageModalWriteReviewModalWriteReviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalWriteReview", function () {
      return ModalWriteReview;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");

    var ModalWriteReview = /*#__PURE__*/function () {
      function ModalWriteReview(translate, service, statusBar, modalCtrl, navParams, alertController, imagePicker, sanitizer, webview, platform, base64) {
        _classCallCheck(this, ModalWriteReview);

        this.translate = translate;
        this.service = service;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.imagePicker = imagePicker;
        this.sanitizer = sanitizer;
        this.webview = webview;
        this.platform = platform;
        this.base64 = base64;
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.customFieldsStars = [];
        this.review = undefined;
        this.gallery = [];
        this.new_gallery = []; //string[] ios | SafeHtml[] android

        this.new_gallery_File = [];
        this.new_gallery_Name = [];
        this.cameraOptions = {
          maximumImagesCount: 1,
          quality: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["OutputType"].DATA_URL
        };
        this.errorMgs = '';

        for (var key in this.GlobalFields.selectedTypeDetail.review_fields) {
          if (this.GlobalFields.selectedTypeDetail.review_fields.hasOwnProperty(key)) {
            var field = this.GlobalFields.selectedTypeDetail.review_fields[key];
            this.customFieldsStars.push({
              key: field.id,
              value: 0,
              label: field.label
            });
          }
        }

        if (this.GlobalFields.oldReview) {
          //already inserted a comment
          this.comment = this.GlobalFields.oldReview.content;
          if (this.GlobalFields.oldReview.gallery) this.gallery = this.GlobalFields.oldReview.gallery_images;
          console.log(this.customFieldsStars);
          console.log(this.GlobalFields.oldReview); //just 1 rating

          if (this.GlobalFields.oldReview.ratings.length == 1) {
            for (var i = 0; i < this.customFieldsStars.length; i++) {
              this.customFieldsStars[i].value = parseInt(this.GlobalFields.oldReview.ratings[0].value) / 2;
            }
          } //more ratings
          else {
              for (var _i2 = 0; _i2 < this.customFieldsStars.length; _i2++) {
                var index = undefined;

                for (var j = 0; j < this.GlobalFields.oldReview.ratings.length; j++) {
                  if (this.GlobalFields.oldReview.ratings[j].key == this.customFieldsStars[_i2].key) index = j;
                }

                if (index != undefined) this.customFieldsStars[_i2].value = parseInt(this.GlobalFields.oldReview.ratings[index].value) / 2;else this.customFieldsStars[_i2].value = 0;
              }
            }
        }
      }

      _createClass(ModalWriteReview, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.service.setWhiteBlackBackgroundStatusBar();
        }
      }, {
        key: "postAReview",
        value: function postAReview() {
          var _this20 = this;

          this.errorMgs = '';

          if (!this.comment || this.comment == '') {
            this.errorMgs = 'Enter a message';
            return;
          }

          this.customFieldsStars.forEach(function (elem) {
            if (elem.value == 0) {
              _this20.errorMgs = 'Enter at list 1 star';
              return;
            }
          });

          if (!this.errorMgs) {
            this.GlobalFields.loadingSoft = true;
            var galleryIds = [];
            if (this.gallery && this.gallery.length > 0) this.gallery.forEach(function (img) {
              galleryIds.push(img.id);
            });
            this.service.postAReview(this.GlobalFields.selectedListing.id, this.comment, this.customFieldsStars, galleryIds, this.new_gallery_File, this.new_gallery_Name).subscribe(function () {
              _this20.service.clearAllCache();

              setTimeout(function () {
                _this20.service.getListingDetailsById(_this20.GlobalFields.selectedListing.id).subscribe(function (data) {
                  _this20.GlobalFields.selectedListing = data;
                  _this20.GlobalFields.loadingSoft = false;

                  _this20.service.getFilteredListings().subscribe(function (data2) {
                    _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings.concat(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].fixWrongImgCoverField(data2));
                  });

                  _this20.closeModal();
                }, function (error) {
                  console.log(error);
                  var msg = '';
                  if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

                  _this20.GlobalFields.openAlert(_this20.alertController, 'Error', 'Error on server', msg);

                  _this20.GlobalFields.loadingSoft = false;
                });
              }, 100);
            }, function (err) {
              _this20.errorMgs = 'Error on server';
              console.log(err);
              _this20.GlobalFields.loadingSoft = false;
            });
          }
        }
      }, {
        key: "getStartsHtml",
        value: function getStartsHtml(rating) {
          var num = rating;
          var max = 5;
          var res = [];

          while (num >= 1) {
            res.push('fas fa-star colored');
            num = num - 1;
            max = max - 1;
          }

          for (var i = 0; i < max; i++) {
            res.push('far fa-star empty');
          }

          return res;
        }
      }, {
        key: "getSecurePageURL",
        value: function getSecurePageURL(url) {
          if (!url.includes('https')) {
            url.replace('http', 'https');
          }

          return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + url);
        }
      }, {
        key: "openImagePicker",
        value: function openImagePicker() {
          var _this21 = this;

          var outputType = 0; //0 Return image file URI, 1 base64img on android crash BUT WORKS FOR Information google-ios

          if (this.platform.is('ios')) outputType = 1;
          if (this.platform.is('android')) outputType = 0;

          try {
            var options = {
              maximumImagesCount: 15,
              outputType: outputType
            };
            this.imagePicker.getPictures(options).then(function (results) {
              var _loop7 = function _loop7(i) {
                console.log(results[i]);

                if (results[i] != 0 && results[i] != '0' && results[i] != 'K') {
                  //This is returned when no permission when button is clicked
                  if (outputType === 0) {
                    //file URI - Android
                    _this21.base64.encodeFile(results[i]).then(function (base64File) {
                      // this.new_gallery.push(base64File);
                      if (base64File) {
                        //base64File.replace("image/*", "image/jpeg")
                        console.log(base64File);

                        _this21.new_gallery.push(window.Ionic.WebView.convertFileSrc(results[i]));

                        _this21.new_gallery_Name.push(results[i]);

                        _this21.new_gallery_File.push(_this21.service.dataURItoBlob(base64File));
                      }
                    }, function (err) {
                      console.log(err);
                    });
                  }

                  if (outputType === 1) {
                    //base64 - Information google-ios
                    _this21.new_gallery.push('data:image/jpeg;base64,' + results[i]);

                    _this21.new_gallery_Name.push(results[i]);

                    _this21.new_gallery_File.push(_this21.service.dataURItoBlob(_this21.new_gallery[_this21.new_gallery.length - 1]));
                  }
                }
              };

              for (var i = 0; i < results.length; i++) {
                _loop7(i);
              }
            }, function (err) {
              //For testing in browser
              console.log(err);
            });
          } catch (error) {
            console.error(error);
          }
        }
      }, {
        key: "deleteOldImg",
        value: function deleteOldImg(index) {
          this.gallery.splice(index, 1);
        }
      }, {
        key: "deleteNewImg",
        value: function deleteNewImg(index) {
          this.new_gallery.splice(index, 1);
          this.new_gallery_File.splice(index, 1);
          this.new_gallery_Name.splice(index, 1);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          //this.service.setTransparentBackgroundStatusBar();
          this.modalCtrl.dismiss({});
        }
      }]);

      return ModalWriteReview;
    }();

    ModalWriteReview.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64"]
      }];
    };

    ModalWriteReview = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modalWriteReview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modalWriteReview.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/modalWriteReview/modalWriteReview.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modalWriteReview.scss */
      "./src/app/listingPage/modalWriteReview/modalWriteReview.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64"]])], ModalWriteReview);
    /***/
  },

  /***/
  "./src/app/listingPage/popoverImg/popoverImg.scss":
  /*!********************************************************!*\
    !*** ./src/app/listingPage/popoverImg/popoverImg.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingPagePopoverImgPopoverImgScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RpbmdQYWdlL3BvcG92ZXJJbWcvcG9wb3ZlckltZy5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/listingPage/popoverImg/popoverImg.ts":
  /*!******************************************************!*\
    !*** ./src/app/listingPage/popoverImg/popoverImg.ts ***!
    \******************************************************/

  /*! exports provided: PopoverImg */

  /***/
  function srcAppListingPagePopoverImgPopoverImgTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverImg", function () {
      return PopoverImg;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);

    var PopoverImg = function PopoverImg() {
      _classCallCheck(this, PopoverImg);

      this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
    };

    PopoverImg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'popoverImg',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popoverImg.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/popoverImg/popoverImg.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popoverImg.scss */
      "./src/app/listingPage/popoverImg/popoverImg.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PopoverImg);
    /***/
  },

  /***/
  "./src/app/listingPage/popoverRatings/popoverRatings.scss":
  /*!****************************************************************!*\
    !*** ./src/app/listingPage/popoverRatings/popoverRatings.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingPagePopoverRatingsPopoverRatingsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tableRowThinner {\n  font-size: 10pt;\n}\n\n.btnSubmit {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n}\n\n.formContainer {\n  position: fixed;\n  top: 15%;\n  width: calc(90% - 20px);\n  border-radius: 5px;\n  left: 30px;\n  padding: 15px;\n  background-color: white;\n}\n\n.formLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 32px;\n  font-weight: bolder;\n  line-height: 1.125em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9saXN0aW5nUGFnZS9wb3BvdmVyUmF0aW5ncy9wb3BvdmVyUmF0aW5ncy5zY3NzIiwic3JjL2FwcC9saXN0aW5nUGFnZS9wb3BvdmVyUmF0aW5ncy9wb3BvdmVyUmF0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nUGFnZS9wb3BvdmVyUmF0aW5ncy9wb3BvdmVyUmF0aW5ncy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlUm93VGhpbm5lciB7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuLmJ0blN1Ym1pdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLmZvcm1Db250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTUlO1xuICAgIHdpZHRoOiBjYWxjKDkwJSAtIDIwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuLmZvcm1MYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufSIsIi50YWJsZVJvd1RoaW5uZXIge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5idG5TdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1JTtcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGVmdDogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtTGFiZWwge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsaW5lLWhlaWdodDogMS4xMjVlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/listingPage/popoverRatings/popoverRatings.ts":
  /*!**************************************************************!*\
    !*** ./src/app/listingPage/popoverRatings/popoverRatings.ts ***!
    \**************************************************************/

  /*! exports provided: PopoverRatings */

  /***/
  function srcAppListingPagePopoverRatingsPopoverRatingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverRatings", function () {
      return PopoverRatings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");

    var PopoverRatings = /*#__PURE__*/function () {
      function PopoverRatings(translate, service) {
        _classCallCheck(this, PopoverRatings);

        this.translate = translate;
        this.service = service;
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
      }

      _createClass(PopoverRatings, [{
        key: "getNiceStringFromKey",
        value: function getNiceStringFromKey(s) {
          var res = '';
          var arr = s.split('\_');

          if (arr.length > 0) {
            arr.forEach(function (r) {
              res += r + ' ';
            });
          }

          arr = res.split('-');
          res = '';

          if (arr.length > 0) {
            arr.forEach(function (r) {
              res += r + ' ';
            });
          }

          res = res.replace('job', '');
          return this.camelize(res);
        }
      }, {
        key: "camelize",
        value: function camelize(str) {
          return str.match(/^(?:[^A-Z]+)|[A-Z](?:[^A-Z]*)+/g).join(' ').toLowerCase().replace(/^[a-z]/, function (v) {
            return v.toUpperCase();
          });
        }
      }, {
        key: "getTruncatedDecimal",
        value: function getTruncatedDecimal(n) {
          var num = parseFloat(n);
          return num.toFixed(1);
        }
      }]);

      return PopoverRatings;
    }();

    PopoverRatings.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"]
      }];
    };

    PopoverRatings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'popoverRatings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popoverRatings.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/listingPage/popoverRatings/popoverRatings.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popoverRatings.scss */
      "./src/app/listingPage/popoverRatings/popoverRatings.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"]])], PopoverRatings);
    /***/
  },

  /***/
  "./src/app/loading/loading.scss":
  /*!**************************************!*\
    !*** ./src/app/loading/loading.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoadingLoadingScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cssload-spin-box {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 15px;\n  height: 15px;\n  border-radius: 100%;\n  box-shadow: 15px 15px white, -15px 15px #fc953a, -15px -15px white, 15px -15px #fc953a;\n  -o-box-shadow: 15px 15px white, -15px 15px #fc953a, -15px -15px white, 15px -15px #fc953a;\n  -ms-box-shadow: 15px 15px white, -15px 15px #fc953a, -15px -15px white, 15px -15px #fc953a;\n  -webkit-box-shadow: 15px 15px white, -15px 15px #fc953a, -15px -15px white, 15px -15px #fc953a;\n  -moz-box-shadow: 15px 15px white, -15px 15px #fc953a, -15px -15px white, 15px -15px #fc953a;\n  animation: cssload-spin ease infinite 4.6s;\n  -o-animation: cssload-spin ease infinite 4.6s;\n  -ms-animation: cssload-spin ease infinite 4.6s;\n  -webkit-animation: cssload-spin ease infinite 4.6s;\n  -moz-animation: cssload-spin ease infinite 4.6s;\n}\n\n@keyframes cssload-spin {\n  0%, 100% {\n    box-shadow: 15px 15px #d93c90, -15px 15px #fc953a, -15px -15px #2959e6, 15px -15px #dfdfdf;\n  }\n  25% {\n    box-shadow: -15px 15px #2958e6, -15px -15px #18db94, 15px -15px #18db94, 15px 15px #d93c90;\n  }\n  50% {\n    box-shadow: -15px -15px #2958e6, 15px -15px #18db94, 15px 15px #fc953a, -15px 15px #18db94;\n  }\n  75% {\n    box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n  }\n}\n\n@-webkit-keyframes cssload-spin {\n  0%, 100% {\n    box-shadow: 15px 15px #d93c90, -15px 15px #fc953a, -15px -15px #2959e6, 15px -15px #dfdfdf;\n  }\n  25% {\n    box-shadow: -15px 15px #2958e6, -15px -15px #18db94, 15px -15px #18db94, 15px 15px #d93c90;\n  }\n  50% {\n    box-shadow: -15px -15px #2958e6, 15px -15px #18db94, 15px 15px #fc953a, -15px 15px #18db94;\n  }\n  75% {\n    box-shadow: 15px -15px #dfdfdf, 15px 15px #4f4d49, -15px 15px #dfdfdf, -15px -15px #4f4d49;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuc2NzcyIsInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNGQUFBO0VBQ0EseUZBQUE7RUFDQSwwRkFBQTtFQUNBLDhGQUFBO0VBQ0EsMkZBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7RUFDQSxrREFBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FESUE7RUFDRTtJQUVFLDBGQUFBO0VDRkY7RURJQTtJQUNFLDBGQUFBO0VDRkY7RURJQTtJQUNFLDBGQUFBO0VDRkY7RURJQTtJQUNFLDBGQUFBO0VDRkY7QUFDRjs7QURxQ0E7RUFDRTtJQUVFLDBGQUFBO0VDUkY7RURVQTtJQUNFLDBGQUFBO0VDUkY7RURVQTtJQUNFLDBGQUFBO0VDUkY7RURVQTtJQUNFLDBGQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc2xvYWQtc3Bpbi1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggcmdiKDI1NSwyNTUsMjU1KSwgLTE1cHggMTVweCByZ2IoMjUyLDE0OSw1OCksIC0xNXB4IC0xNXB4IHJnYigyNTUsMjU1LDI1NSksIDE1cHggLTE1cHggcmdiKDI1MiwxNDksNTgpO1xuICAtby1ib3gtc2hhZG93OiAxNXB4IDE1cHggcmdiKDI1NSwyNTUsMjU1KSwgLTE1cHggMTVweCByZ2IoMjUyLDE0OSw1OCksIC0xNXB4IC0xNXB4IHJnYigyNTUsMjU1LDI1NSksIDE1cHggLTE1cHggcmdiKDI1MiwxNDksNTgpO1xuICAtbXMtYm94LXNoYWRvdzogMTVweCAxNXB4IHJnYigyNTUsMjU1LDI1NSksIC0xNXB4IDE1cHggcmdiKDI1MiwxNDksNTgpLCAtMTVweCAtMTVweCByZ2IoMjU1LDI1NSwyNTUpLCAxNXB4IC0xNXB4IHJnYigyNTIsMTQ5LDU4KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNXB4IDE1cHggcmdiKDI1NSwyNTUsMjU1KSwgLTE1cHggMTVweCByZ2IoMjUyLDE0OSw1OCksIC0xNXB4IC0xNXB4IHJnYigyNTUsMjU1LDI1NSksIDE1cHggLTE1cHggcmdiKDI1MiwxNDksNTgpO1xuICAtbW96LWJveC1zaGFkb3c6IDE1cHggMTVweCByZ2IoMjU1LDI1NSwyNTUpLCAtMTVweCAxNXB4IHJnYigyNTIsMTQ5LDU4KSwgLTE1cHggLTE1cHggcmdiKDI1NSwyNTUsMjU1KSwgMTVweCAtMTVweCByZ2IoMjUyLDE0OSw1OCk7XG4gIGFuaW1hdGlvbjogY3NzbG9hZC1zcGluIGVhc2UgaW5maW5pdGUgNC42cztcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gZWFzZSBpbmZpbml0ZSA0LjZzO1xuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gZWFzZSBpbmZpbml0ZSA0LjZzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIGVhc2UgaW5maW5pdGUgNC42cztcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtc3BpbiBlYXNlIGluZmluaXRlIDQuNnM7XG59XG5cblxuXG5Aa2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggcmdiKDIxNyw2MCwxNDQpLCAtMTVweCAxNXB4IHJnYigyNTIsMTQ5LDU4KSwgLTE1cHggLTE1cHggcmdiKDQxLDg5LDIzMCksIDE1cHggLTE1cHggcmdiKDIyMywyMjMsMjIzKTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IC0xNXB4IDE1cHggcmdiKDQxLDg4LDIzMCksIC0xNXB4IC0xNXB4IHJnYigyNCwyMTksMTQ4KSwgMTVweCAtMTVweCByZ2IoMjQsMjE5LDE0OCksIDE1cHggMTVweCByZ2IoMjE3LDYwLDE0NCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAtMTVweCByZ2IoNDEsODgsMjMwKSwgMTVweCAtMTVweCByZ2IoMjQsMjE5LDE0OCksIDE1cHggMTVweCByZ2IoMjUyLDE0OSw1OCksIC0xNXB4IDE1cHggcmdiKDI0LDIxOSwxNDgpO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAtMTVweCAjZGZkZmRmLCAxNXB4IDE1cHggIzRmNGQ0OSwgLTE1cHggMTVweCAjZGZkZmRmLCAtMTVweCAtMTVweCAjNGY0ZDQ5O1xuICB9XG59XG5cbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCByZ2IoMjE3LDYwLDE0NCksIC0xNXB4IDE1cHggcmdiKDI1MiwxNDksNTgpLCAtMTVweCAtMTVweCByZ2IoNDEsODksMjMwKSwgMTVweCAtMTVweCByZ2IoMjIzLDIyMywyMjMpO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggMTVweCByZ2IoNDEsODgsMjMwKSwgLTE1cHggLTE1cHggcmdiKDI0LDIxOSwxNDgpLCAxNXB4IC0xNXB4IHJnYigyNCwyMTksMTQ4KSwgMTVweCAxNXB4IHJnYigyMTcsNjAsMTQ0KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IC0xNXB4IC0xNXB4IHJnYig0MSw4OCwyMzApLCAxNXB4IC0xNXB4IHJnYigyNCwyMTksMTQ4KSwgMTVweCAxNXB4IHJnYigyNTIsMTQ5LDU4KSwgLTE1cHggMTVweCByZ2IoMjQsMjE5LDE0OCk7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IC0xNXB4ICNkZmRmZGYsIDE1cHggMTVweCAjNGY0ZDQ5LCAtMTVweCAxNXB4ICNkZmRmZGYsIC0xNXB4IC0xNXB4ICM0ZjRkNDk7XG4gIH1cbn1cblxuQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCByZ2IoMjE3LDYwLDE0NCksIC0xNXB4IDE1cHggcmdiKDI1MiwxNDksNTgpLCAtMTVweCAtMTVweCByZ2IoNDEsODksMjMwKSwgMTVweCAtMTVweCByZ2IoMjIzLDIyMywyMjMpO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggMTVweCByZ2IoNDEsODgsMjMwKSwgLTE1cHggLTE1cHggcmdiKDI0LDIxOSwxNDgpLCAxNXB4IC0xNXB4IHJnYigyNCwyMTksMTQ4KSwgMTVweCAxNXB4IHJnYigyMTcsNjAsMTQ0KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IC0xNXB4IC0xNXB4IHJnYig0MSw4OCwyMzApLCAxNXB4IC0xNXB4IHJnYigyNCwyMTksMTQ4KSwgMTVweCAxNXB4IHJnYigyNTIsMTQ5LDU4KSwgLTE1cHggMTVweCByZ2IoMjQsMjE5LDE0OCk7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IC0xNXB4ICNkZmRmZGYsIDE1cHggMTVweCAjNGY0ZDQ5LCAtMTVweCAxNXB4ICNkZmRmZGYsIC0xNXB4IC0xNXB4ICM0ZjRkNDk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggcmdiKDIxNyw2MCwxNDQpLCAtMTVweCAxNXB4IHJnYigyNTIsMTQ5LDU4KSwgLTE1cHggLTE1cHggcmdiKDQxLDg5LDIzMCksIDE1cHggLTE1cHggcmdiKDIyMywyMjMsMjIzKTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IC0xNXB4IDE1cHggcmdiKDQxLDg4LDIzMCksIC0xNXB4IC0xNXB4IHJnYigyNCwyMTksMTQ4KSwgMTVweCAtMTVweCByZ2IoMjQsMjE5LDE0OCksIDE1cHggMTVweCByZ2IoMjE3LDYwLDE0NCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAtMTVweCByZ2IoNDEsODgsMjMwKSwgMTVweCAtMTVweCByZ2IoMjQsMjE5LDE0OCksIDE1cHggMTVweCByZ2IoMjUyLDE0OSw1OCksIC0xNXB4IDE1cHggcmdiKDI0LDIxOSwxNDgpO1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAtMTVweCAjZGZkZmRmLCAxNXB4IDE1cHggIzRmNGQ0OSwgLTE1cHggMTVweCAjZGZkZmRmLCAtMTVweCAtMTVweCAjNGY0ZDQ5O1xuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4IHJnYigyMTcsNjAsMTQ0KSwgLTE1cHggMTVweCByZ2IoMjUyLDE0OSw1OCksIC0xNXB4IC0xNXB4IHJnYig0MSw4OSwyMzApLCAxNXB4IC0xNXB4IHJnYigyMjMsMjIzLDIyMyk7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAxNXB4IHJnYig0MSw4OCwyMzApLCAtMTVweCAtMTVweCByZ2IoMjQsMjE5LDE0OCksIDE1cHggLTE1cHggcmdiKDI0LDIxOSwxNDgpLCAxNXB4IDE1cHggcmdiKDIxNyw2MCwxNDQpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggLTE1cHggcmdiKDQxLDg4LDIzMCksIDE1cHggLTE1cHggcmdiKDI0LDIxOSwxNDgpLCAxNXB4IDE1cHggcmdiKDI1MiwxNDksNTgpLCAtMTVweCAxNXB4IHJnYigyNCwyMTksMTQ4KTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDE1cHggLTE1cHggI2RmZGZkZiwgMTVweCAxNXB4ICM0ZjRkNDksIC0xNXB4IDE1cHggI2RmZGZkZiwgLTE1cHggLTE1cHggIzRmNGQ0OTtcbiAgfVxufVxuIiwiLmNzc2xvYWQtc3Bpbi1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiAxNXB4IDE1cHggd2hpdGUsIC0xNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggLTE1cHggd2hpdGUsIDE1cHggLTE1cHggI2ZjOTUzYTtcbiAgLW8tYm94LXNoYWRvdzogMTVweCAxNXB4IHdoaXRlLCAtMTVweCAxNXB4ICNmYzk1M2EsIC0xNXB4IC0xNXB4IHdoaXRlLCAxNXB4IC0xNXB4ICNmYzk1M2E7XG4gIC1tcy1ib3gtc2hhZG93OiAxNXB4IDE1cHggd2hpdGUsIC0xNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggLTE1cHggd2hpdGUsIDE1cHggLTE1cHggI2ZjOTUzYTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNXB4IDE1cHggd2hpdGUsIC0xNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggLTE1cHggd2hpdGUsIDE1cHggLTE1cHggI2ZjOTUzYTtcbiAgLW1vei1ib3gtc2hhZG93OiAxNXB4IDE1cHggd2hpdGUsIC0xNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggLTE1cHggd2hpdGUsIDE1cHggLTE1cHggI2ZjOTUzYTtcbiAgYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gZWFzZSBpbmZpbml0ZSA0LjZzO1xuICAtby1hbmltYXRpb246IGNzc2xvYWQtc3BpbiBlYXNlIGluZmluaXRlIDQuNnM7XG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtc3BpbiBlYXNlIGluZmluaXRlIDQuNnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gZWFzZSBpbmZpbml0ZSA0LjZzO1xuICAtbW96LWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIGVhc2UgaW5maW5pdGUgNC42cztcbn1cblxuQGtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4ICNkOTNjOTAsIC0xNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggLTE1cHggIzI5NTllNiwgMTVweCAtMTVweCAjZGZkZmRmO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggMTVweCAjMjk1OGU2LCAtMTVweCAtMTVweCAjMThkYjk0LCAxNXB4IC0xNXB4ICMxOGRiOTQsIDE1cHggMTVweCAjZDkzYzkwO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggLTE1cHggIzI5NThlNiwgMTVweCAtMTVweCAjMThkYjk0LCAxNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggMTVweCAjMThkYjk0O1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAtMTVweCAjZGZkZmRmLCAxNXB4IDE1cHggIzRmNGQ0OSwgLTE1cHggMTVweCAjZGZkZmRmLCAtMTVweCAtMTVweCAjNGY0ZDQ5O1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggI2Q5M2M5MCwgLTE1cHggMTVweCAjZmM5NTNhLCAtMTVweCAtMTVweCAjMjk1OWU2LCAxNXB4IC0xNXB4ICNkZmRmZGY7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAxNXB4ICMyOTU4ZTYsIC0xNXB4IC0xNXB4ICMxOGRiOTQsIDE1cHggLTE1cHggIzE4ZGI5NCwgMTVweCAxNXB4ICNkOTNjOTA7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAtMTVweCAjMjk1OGU2LCAxNXB4IC0xNXB4ICMxOGRiOTQsIDE1cHggMTVweCAjZmM5NTNhLCAtMTVweCAxNXB4ICMxOGRiOTQ7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IC0xNXB4ICNkZmRmZGYsIDE1cHggMTVweCAjNGY0ZDQ5LCAtMTVweCAxNXB4ICNkZmRmZGYsIC0xNXB4IC0xNXB4ICM0ZjRkNDk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggI2Q5M2M5MCwgLTE1cHggMTVweCAjZmM5NTNhLCAtMTVweCAtMTVweCAjMjk1OWU2LCAxNXB4IC0xNXB4ICNkZmRmZGY7XG4gIH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAxNXB4ICMyOTU4ZTYsIC0xNXB4IC0xNXB4ICMxOGRiOTQsIDE1cHggLTE1cHggIzE4ZGI5NCwgMTVweCAxNXB4ICNkOTNjOTA7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAtMTVweCAtMTVweCAjMjk1OGU2LCAxNXB4IC0xNXB4ICMxOGRiOTQsIDE1cHggMTVweCAjZmM5NTNhLCAtMTVweCAxNXB4ICMxOGRiOTQ7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAxNXB4IC0xNXB4ICNkZmRmZGYsIDE1cHggMTVweCAjNGY0ZDQ5LCAtMTVweCAxNXB4ICNkZmRmZGYsIC0xNXB4IC0xNXB4ICM0ZjRkNDk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAxNXB4ICNkOTNjOTAsIC0xNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggLTE1cHggIzI5NTllNiwgMTVweCAtMTVweCAjZGZkZmRmO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggMTVweCAjMjk1OGU2LCAtMTVweCAtMTVweCAjMThkYjk0LCAxNXB4IC0xNXB4ICMxOGRiOTQsIDE1cHggMTVweCAjZDkzYzkwO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogLTE1cHggLTE1cHggIzI5NThlNiwgMTVweCAtMTVweCAjMThkYjk0LCAxNXB4IDE1cHggI2ZjOTUzYSwgLTE1cHggMTVweCAjMThkYjk0O1xuICB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMTVweCAtMTVweCAjZGZkZmRmLCAxNXB4IDE1cHggIzRmNGQ0OSwgLTE1cHggMTVweCAjZGZkZmRmLCAtMTVweCAtMTVweCAjNGY0ZDQ5O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCAjZDkzYzkwLCAtMTVweCAxNXB4ICNmYzk1M2EsIC0xNXB4IC0xNXB4ICMyOTU5ZTYsIDE1cHggLTE1cHggI2RmZGZkZjtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IC0xNXB4IDE1cHggIzI5NThlNiwgLTE1cHggLTE1cHggIzE4ZGI5NCwgMTVweCAtMTVweCAjMThkYjk0LCAxNXB4IDE1cHggI2Q5M2M5MDtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IC0xNXB4IC0xNXB4ICMyOTU4ZTYsIDE1cHggLTE1cHggIzE4ZGI5NCwgMTVweCAxNXB4ICNmYzk1M2EsIC0xNXB4IDE1cHggIzE4ZGI5NDtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDE1cHggLTE1cHggI2RmZGZkZiwgMTVweCAxNXB4ICM0ZjRkNDksIC0xNXB4IDE1cHggI2RmZGZkZiwgLTE1cHggLTE1cHggIzRmNGQ0OTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/loading/loading.ts":
  /*!************************************!*\
    !*** ./src/app/loading/loading.ts ***!
    \************************************/

  /*! exports provided: Loading */

  /***/
  function srcAppLoadingLoadingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Loading", function () {
      return Loading;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/dialogs/ngx */
    "./node_modules/@ionic-native/dialogs/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/LocationService */
    "./src/app/services/LocationService.ts");

    var Loading = /*#__PURE__*/function () {
      function Loading(service, dialogs, platform, geolocation, nativeGeocoder, alertController, translate, themeService, locationService) {
        _classCallCheck(this, Loading);

        this.service = service;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.translate = translate;
        this.themeService = themeService;
        this.locationService = locationService;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
      }

      _createClass(Loading, [{
        key: "retryInit",
        value: function retryInit() {
          _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].errorIni = false;
          this.service.clearAllCache();

          _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].init(this.service, this.dialogs, this.platform, this.geolocation, this.nativeGeocoder, this.alertController, this.translate, this.themeService, this.locationService);
        }
      }]);

      return Loading;
    }();

    Loading.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"]
      }, {
        type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Loading.prototype, "softLoading", void 0);
    Loading = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'loading',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loading.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loading.scss */
      "./src/app/loading/loading.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"], _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_4__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"]])], Loading);
    /***/
  },

  /***/
  "./src/app/menuPage/loginComponent/loginComponent.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/menuPage/loginComponent/loginComponent.module.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponentModule */

  /***/
  function srcAppMenuPageLoginComponentLoginComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentModule", function () {
      return LoginComponentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _loginComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loginComponent */
    "./src/app/menuPage/loginComponent/loginComponent.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");

    var LoginComponentModule = function LoginComponentModule() {
      _classCallCheck(this, LoginComponentModule);
    };

    LoginComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
      declarations: [_loginComponent__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      entryComponents: [_loginComponent__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      exports: [_loginComponent__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
    })], LoginComponentModule);
    /***/
  },

  /***/
  "./src/app/menuPage/loginComponent/loginComponent.scss":
  /*!*************************************************************!*\
    !*** ./src/app/menuPage/loginComponent/loginComponent.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageLoginComponentLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section {\n  margin-bottom: 50px;\n}\n\n.nameLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 32px;\n  font-weight: bolder;\n  line-height: 1.125em;\n}\n\n.iconMenu {\n  font-size: 16pt;\n  color: #565656;\n  width: 25px;\n}\n\n.iconRightMenu {\n  float: right;\n  margin-top: 5px;\n  color: #666666;\n  font-size: 16pt;\n}\n\n.btnLogin {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 10px;\n}\n\n.btnLogin:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.elementListTopMenu {\n  margin: 5px;\n  margin-bottom: 0px;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.2px;\n  color: #484848;\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  cursor: pointer !important;\n  display: grid;\n  position: relative;\n  text-align: center;\n  width: 25%;\n  background: none;\n  font-weight: 800;\n  outline: none;\n  text-decoration: none;\n  transition: background 0.3s ease 0s, border-color 0.3s ease 0s;\n}\n\n.statsBox {\n  width: 100%;\n  height: 75px;\n  padding: 20px;\n  border-radius: 2px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  color: white;\n}\n\n.statsBox h2 {\n  margin-right: 15px;\n}\n\n.statsBox p {\n  margin-top: 25px;\n}\n\n.statsBox i {\n  color: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  right: 50px;\n  font-size: 28px;\n}\n\n.numberStats {\n  text-align: center;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-around;\n  color: #757d83;\n}\n\n.numberStats p span {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  color: #383838;\n  display: flex;\n  /* -webkit-box-align: center; */\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s ease;\n}\n\n.animated-bars {\n  width: 2px;\n  background: rgba(0, 0, 0, 0.15);\n  height: 12px;\n  border-radius: 0;\n  position: relative;\n  transition: 0.2s ease;\n  margin: auto;\n}\n\n.socialLoginBtn {\n  width: 95%;\n  margin: 10px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 50px;\n  box-shadow: 0 2px 6px 0 rgba(20, 30, 39, 0.19);\n}\n\n.socialLoginBtn:hover, .socialLoginBtn:active {\n  background-color: #f1f1f1;\n  transform: scale(1.1);\n}\n\n.loginBackBtn {\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  padding: 0;\n  position: relative;\n  right: 0px;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  line-height: 1px;\n  color: black;\n  background-color: white;\n  box-shadow: 0 2px 6px 0 rgba(20, 30, 39, 0.19);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9tZW51UGFnZS9sb2dpbkNvbXBvbmVudC9sb2dpbkNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9sb2dpbkNvbXBvbmVudC9sb2dpbkNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhEQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFHQSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBR0EsYUFBQTtFQUNBLCtCQUFBO0VBRUEsbUJBQUE7RUFHQSx1QkFBQTtFQUVBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDQUY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9tZW51UGFnZS9sb2dpbkNvbXBvbmVudC9sb2dpbkNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubmFtZUxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1ZW07XG59XG5cbi5pY29uTWVudSB7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgY29sb3I6ICM1NjU2NTY7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uaWNvblJpZ2h0TWVudSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxNnB0O1xufVxuXG4uYnRuTG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDNweCAxMHB4O1xufVxuXG4uYnRuTG9naW46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cblxuLmVsZW1lbnRMaXN0VG9wTWVudSB7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogODAwO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlIDBzLCBib3JkZXItY29sb3IgMC4zcyBlYXNlIDBzO1xufVxuXG4uc3RhdHNCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHNCb3ggaDIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zdGF0c0JveCBwIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnN0YXRzQm94IGkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMTUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5udW1iZXJTdGF0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogIzc1N2Q4Mztcbn1cblxuLm51bWJlclN0YXRzIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgKi9cbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcbn1cblxuLmFuaW1hdGVkLWJhcnMge1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc29jaWFsTG9naW5CdG4ge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDIwLCAzMCwgMzksIC4xOSk7XG59XG5cblxuLnNvY2lhbExvZ2luQnRuOmhvdmVyLCAuc29jaWFsTG9naW5CdG46YWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5sb2dpbkJhY2tCdG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgbGluZS1oZWlnaHQ6IDFweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgyMCwgMzAsIDM5LCAwLjE5KTtcbn1cbiIsIi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLm5hbWVMYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4uaWNvbk1lbnUge1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGNvbG9yOiAjNTY1NjU2O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmljb25SaWdodE1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbn1cblxuLmJ0bkxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAzcHggMTBweDtcbn1cblxuLmJ0bkxvZ2luOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4uZWxlbWVudExpc3RUb3BNZW51IHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UgMHMsIGJvcmRlci1jb2xvciAwLjNzIGVhc2UgMHM7XG59XG5cbi5zdGF0c0JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0c0JveCBoMiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnN0YXRzQm94IHAge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uc3RhdHNCb3ggaSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5udW1iZXJTdGF0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogIzc1N2Q4Mztcbn1cblxuLm51bWJlclN0YXRzIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgKi9cbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uYW5pbWF0ZWQtYmFycyB7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zb2NpYWxMb2dpbkJ0biB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMjAsIDMwLCAzOSwgMC4xOSk7XG59XG5cbi5zb2NpYWxMb2dpbkJ0bjpob3ZlciwgLnNvY2lhbExvZ2luQnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmxvZ2luQmFja0J0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgbGluZS1oZWlnaHQ6IDFweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgyMCwgMzAsIDM5LCAwLjE5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/menuPage/loginComponent/loginComponent.ts":
  /*!***********************************************************!*\
    !*** ./src/app/menuPage/loginComponent/loginComponent.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppMenuPageLoginComponentLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(service, translate, navController, inAppBrowser, googlePlus, fb, oneSignal) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.inAppBrowser = inAppBrowser;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.oneSignal = oneSignal;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"];
        this.errorMgs = '';
        this.successMsg = false;
        this.loginComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tabToShown = 0;
      }

      _createClass(LoginComponent, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (!_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.socialLoginGoogleEnabled && !_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.socialLoginFacebookEnabled) {
            this.tabToShown = 1;
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this22 = this;

          this.errorMgs = undefined;
          this.GlobalFields.loadingSoft = true;
          this.service.getNonce().subscribe(function (data) {
            if (data) {
              _this22.GlobalFields.nonce = JSON.parse(data).nonce;

              _this22.service.login(_this22.GlobalFields.username, _this22.GlobalFields.password, _this22.GlobalFields.nonce).subscribe(function (data) {
                _this22.storeProfileDoLogin(data);

                _this22.GlobalFields.loadingSoft = false;
              }, function (err) {
                _this22.GlobalFields.loadingSoft = false;
                console.log(err.error);
                _this22.GlobalFields.profile = {
                  error: err.error.error
                };
                _this22.GlobalFields.isLoggedIn = false;
                _this22.errorMgs = _this22.GlobalFields.profile.error;
                console.log(_this22.GlobalFields.profile);
                console.log(_this22.errorMgs);
              });
            }
          }, function (err) {
            _this22.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "registration",
        value: function registration() {
          var _this23 = this;

          this.errorMgs = undefined;
          this.GlobalFields.loadingSoft = true;
          this.service.getNonceRegistration().subscribe(function (data) {
            if (data) {
              _this23.GlobalFields.nonce = JSON.parse(data).nonce;

              _this23.service.registration(_this23.GlobalFields.username, _this23.GlobalFields.password, JSON.parse(data).nonce).subscribe(function (data) {
                _this23.storeProfileDoLogin(data);
              }, function (err) {
                _this23.GlobalFields.loadingSoft = false;
                console.log(err.error);
                _this23.GlobalFields.profile = {
                  error: err.error.error
                };
                _this23.GlobalFields.isLoggedIn = false;
                _this23.errorMgs = _this23.GlobalFields.profile.error;
                console.log(_this23.GlobalFields.profile);
                console.log(_this23.errorMgs);
              });
            }
          }, function (err) {
            _this23.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "pswRecovery",
        value: function pswRecovery() {
          var _this24 = this;

          this.errorMgs = undefined;
          this.GlobalFields.loadingSoft = true;
          this.service.getNoncePswRecovery().subscribe(function (data) {
            if (data) {
              _this24.service.pswRecovery(_this24.GlobalFields.username, JSON.parse(data).nonce).subscribe(function (data) {
                if (data.success) {
                  _this24.successMsg = true;
                  _this24.tabToShown = 1;
                } else {
                  _this24.successMsg = false;
                  _this24.errorMgs = 'Invalid username or email';
                }

                _this24.GlobalFields.loadingSoft = false;
              }, function (err) {
                _this24.GlobalFields.loadingSoft = false;
                console.log(err.error);
                _this24.GlobalFields.isLoggedIn = false;
                _this24.errorMgs = err.error;
              });
            }
          }, function (err) {
            _this24.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "openLink",
        value: function openLink(url) {
          console.log(url);
          var browser = this.inAppBrowser.create(url, '_blank');
        }
      }, {
        key: "socialLogin",
        value: function socialLogin(type) {
          var _this25 = this;

          this.errorMgs = undefined;

          if (type == 2) {
            this.googlePlus.login({}).then(function (res) {
              console.log('Ok login con google');
              console.log(res);

              if (res && res.accessToken) {
                _this25.GlobalFields.loadingSoft = true;

                _this25.service.socialLogin(type, res.accessToken).subscribe(function (data) {
                  if (data) {
                    _this25.storeProfileDoLogin(data);
                  }
                }, function (err) {
                  _this25.errorMgs = err;
                  _this25.GlobalFields.loadingSoft = false;
                });
              }
            })["catch"](function (err) {
              console.log('Errore in login con google');
              console.error(err);
              if (err != 12501 && err != '12501') //12501 is the error of google popup closed, so avoid showing error for this
                _this25.errorMgs = err;
            });
          } else if (type == 1) {
            try {
              this.fb.login(['public_profile', 'email']).then(function (res) {
                console.log('Logged into Facebook!');
                console.log(res);

                if (res && res.authResponse && res.authResponse.accessToken) {
                  _this25.GlobalFields.loadingSoft = true;

                  _this25.service.socialLogin(type, res.authResponse.accessToken).subscribe(function (data) {
                    if (data) {
                      _this25.storeProfileDoLogin(data);
                    }
                  }, function (err) {
                    _this25.errorMgs = err;
                    _this25.GlobalFields.loadingSoft = false;
                  });
                }
              })["catch"](function (e) {
                console.log('Error logging into Facebook');
                console.log(e);

                if (e) {
                  if (e.errorCode != 4201 && e.errorCode != '4201') _this25.errorMgs = e.errorMessage;
                } else _this25.errorMgs = "error";
              }); //this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
            } catch (Error) {
              console.log('Errore di facebook');
            }
          }
        }
      }, {
        key: "storeProfileDoLogin",
        value: function storeProfileDoLogin(user) {
          this.GlobalFields.profile = user;
          this.GlobalFields.getUserRole();

          if (this.GlobalFields.profile.status == 'error') {
            //Login error
            this.GlobalFields.isLoggedIn = false;
            console.log(user);
            this.errorMgs = this.GlobalFields.profile.error;
            console.log(this.errorMgs);
          } else if (this.GlobalFields.profile.error) {
            //Login error
            this.GlobalFields.isLoggedIn = false;
            console.log(user);
            this.errorMgs = this.GlobalFields.profile.error;
            console.log(this.errorMgs);
          } else {
            //Login ok
            this.errorMgs = '';
            this.service.storeProfile(this.GlobalFields.profile); //Send External ID to OneSignal

            if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.enableNotifications && this.GlobalFields.profile && this.GlobalFields.profile.user) this.oneSignal.setExternalUserId(this.GlobalFields.profile.user.id + "");
            this.GlobalFields.isLoggedIn = true;
            this.loginComplete.emit(true);
          }

          this.GlobalFields.loadingSoft = false;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LoginComponent.prototype, "loginComplete", void 0);
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'loginComponent',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loginComponent.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/loginComponent/loginComponent.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loginComponent.scss */
      "./src/app/menuPage/loginComponent/loginComponent.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/searchPage/filterModal/filterModal.scss":
  /*!*********************************************************!*\
    !*** ./src/app/searchPage/filterModal/filterModal.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchPageFilterModalFilterModalScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sectionTitleFilter {\n  font-size: 20px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  padding: 5px;\n  margin-bottom: 10px;\n  line-height: 26px !important;\n}\n\n.iconsChoices {\n  padding-right: 5px;\n  font-size: 22px;\n  padding-left: 5px;\n}\n\n.rightClearBtn {\n  margin-right: 10px;\n  float: right;\n  margin-top: 50px;\n  z-index: 999;\n  color: #f13224;\n}\n\n.buttonSearch {\n  background-color: white;\n  width: 80%;\n  margin: auto;\n  font-size: 16px;\n  height: 35px;\n  font-weight: 600;\n  color: #3fdc7e;\n  border-radius: 50px;\n  border: solid 1px #f3f3f3;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9zZWFyY2hQYWdlL2ZpbHRlck1vZGFsL2ZpbHRlck1vZGFsLnNjc3MiLCJzcmMvYXBwL3NlYXJjaFBhZ2UvZmlsdGVyTW9kYWwvZmlsdGVyTW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hQYWdlL2ZpbHRlck1vZGFsL2ZpbHRlck1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZWN0aW9uVGl0bGVGaWx0ZXJ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDcyLCA3MiwgNzIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXN7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnJpZ2h0Q2xlYXJCdG57XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGNvbG9yOiAjZjEzMjI0O1xufVxuXG4uYnV0dG9uU2VhcmNoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYig2MywgMjIwLCAxMjYpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4iLCIuc2VjdGlvblRpdGxlRmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5yaWdodENsZWFyQnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmMTMyMjQ7XG59XG5cbi5idXR0b25TZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZmRjN2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/searchPage/filterModal/filterModal.ts":
  /*!*******************************************************!*\
    !*** ./src/app/searchPage/filterModal/filterModal.ts ***!
    \*******************************************************/

  /*! exports provided: FilterModal */

  /***/
  function srcAppSearchPageFilterModalFilterModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterModal", function () {
      return FilterModal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _app_entities_checkboxType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/entities/checkboxType */
    "./src/app/entities/checkboxType.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    var FilterModal = /*#__PURE__*/function () {
      function FilterModal(service, locationService, modalCrtl, translate, statusBar, modalCtrl, geolocation, nativeGeocoder, alertController) {
        _classCallCheck(this, FilterModal);

        this.service = service;
        this.locationService = locationService;
        this.modalCrtl = modalCrtl;
        this.translate = translate;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.categories = [];
        this.types = [];
        this.iniFilter();
        this.service.setWhiteBlackBackgroundStatusBar();
        console.log(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.customFieldsText);
      }

      _createClass(FilterModal, [{
        key: "iniFilter",
        value: function iniFilter() {
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch) {
            this.prepareOptionsTags(); // this.prepareCustomFieldsDropdown();
          } else {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].selectListingTypeDetail();

            if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.tags.length == 0) this.prepareOptionsTags();
            /*  if (this.GlobalFields.filtersSearch.customFieldsDropdownKeys.length == 0 ||
                  this.GlobalFields.filtersSearch.customFieldsDropdownKeys.length == 0 ||
                  this.GlobalFields.filtersSearch.customFieldsDropdown.length == 0)
                  this.prepareCustomFieldsDropdown();
                  */
          }
        }
      }, {
        key: "prepareOptionsTags",
        value: function prepareOptionsTags() {
          this.GlobalFields.selectedTypeDetail.tags.forEach(function (cat) {
            var c = new _app_entities_checkboxType__WEBPACK_IMPORTED_MODULE_3__["CheckboxType"]();
            c.isChecked = false;
            c.val = cat;

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.tags.push(c);

            console.log(cat);
          });
        } //prepara un array di stringhe per le key dei custom fields dropdown e uno dove ogni elemento ?? un array di opzioni
        //poi inizializza a [] nella posizione corrispondente

        /*  prepareCustomFieldsDropdown() {
              this.GlobalFields.filtersSearch.customFieldsDropdownKeys = [];
              this.GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions = [];
              this.GlobalFields.filtersSearch.customFieldsDropdown = [];
                 this.GlobalFields.selectedTypeDetail.case27_listing_type_search_page.advanced.facets.forEach(filter => {
                  if (filter.show_field && filter.show_field != 'job_tags' && filter.show_field != 'job_category' && filter.show_field != 'job_region' && filter.show_field != 'job_title') { //its a custom field
                      this.GlobalFields.filtersSearch.customFieldsDropdownKeys.push(filter.show_field);
                      let options = [];
                      if (this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options)
                          for (const key of Object.keys(this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options)) {
                              options.push(this.GlobalFields.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options[key]);
                          }
                      this.GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions.push(
                          {key: filter.show_field, options: options}
                      );
                  }
              });
              for (let i = 0; i < this.GlobalFields.filtersSearch.customFieldsDropdownKeys.length; i++) {
                  GlobalFields.filtersSearch.customFieldsDropdown.push([]);
              }
                 console.log(this.GlobalFields.filtersSearch.customTaxonomiesDropdownKeysOptions);
             }
        */

      }, {
        key: "getFilteredListingsFirstTime",
        value: function getFilteredListingsFirstTime() {
          this.GlobalFields.getFilteredListingFirstTime(this.service, this.locationService, true);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCrtl.dismiss();
        }
      }, {
        key: "toStringCategories",
        value: function toStringCategories() {
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.categories || _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.categories.length == 0) return "";else if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.categories.length > 3) return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.categories.length + " selected";else return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.categories.toString();
        }
      }, {
        key: "toStringRegions",
        value: function toStringRegions() {
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.region) return "";
          return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.region;
        }
      }, {
        key: "toStringTaxonomies",
        value: function toStringTaxonomies(key) {
          var tax = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].getCustomTaxonomiesByKey(key);

          if (tax) {
            /* if (!tax.selected || tax.selected.length == 0)
                 return "";
             else if (tax.selected.length > 3)
                 return tax.selected.length + " selected";
             else {*/
            return tax.selected; // }
          }
        }
      }, {
        key: "toStringCustomFields",
        value: function toStringCustomFields(key) {
          var tax = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].getCustomFieldsByKey(key);

          if (tax) {
            /*  if (!tax.selected || tax.selected.length == 0)
                  return "";
              else if (tax.selected.length > 3)
                  return tax.selected.length + " selected";
              else {*/
            return tax.selected; // }
          }
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress() {
          this.GlobalFields.getLocation(this.geolocation, this.nativeGeocoder, this.alertController, this.service, this.locationService);
          this.GlobalFields.filtersSearch.location = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].address;
        }
      }, {
        key: "selectListingType",
        value: function selectListingType(reloadOrder) {
          this.GlobalFields.filteredListings = undefined;
          this.GlobalFields.clearFilters();
          this.GlobalFields.selectListingTypeDetail();
          console.log(this.GlobalFields.selectedTypeDetail);
          if (reloadOrder) this.GlobalFields.filtersSearch.order = this.GlobalFields.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.tags.length == 0) this.prepareOptionsTags();
          this.GlobalFields.getFilteredListingFirstTime(this.service, this.locationService);
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          if (this.GlobalFields.filtersSearch.selectedType == id) return ' selectedtypesListHorizontal';else return '';
        }
      }, {
        key: "isSelectedGetPrimaryColor",
        value: function isSelectedGetPrimaryColor(id) {
          if (this.GlobalFields.filtersSearch.selectedType == id) return this.GlobalFields.getPrimaryColorJson();else return undefined;
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].clearFilters();

          this.iniFilter();
        }
      }]);

      return FilterModal;
    }();

    FilterModal.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_7__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    FilterModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filterModal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/filterModal/filterModal.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filterModal.scss */
      "./src/app/searchPage/filterModal/filterModal.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_LocationService__WEBPACK_IMPORTED_MODULE_7__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], FilterModal);
    /***/
  },

  /***/
  "./src/app/searchPage/mapModal/mapModal.scss":
  /*!***************************************************!*\
    !*** ./src/app/searchPage/mapModal/mapModal.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchPageMapModalMapModalScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sectionTitleFilter {\n  font-size: 20px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  padding: 5px;\n  margin-bottom: 10px;\n  line-height: 26px !important;\n}\n\n.iconsChoices {\n  font-size: 22px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.listingCard {\n  position: fixed;\n  z-index: 999;\n  bottom: 15px;\n  width: 90% !important;\n  left: 5%;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9zZWFyY2hQYWdlL21hcE1vZGFsL21hcE1vZGFsLnNjc3MiLCJzcmMvYXBwL3NlYXJjaFBhZ2UvbWFwTW9kYWwvbWFwTW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSwwREFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoUGFnZS9tYXBNb2RhbC9tYXBNb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2VjdGlvblRpdGxlRmlsdGVye1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYig3MiwgNzIsIDcyKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjZweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbnNDaG9pY2Vze1xuICBmb250LXNpemU6IDIycHhcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLW1kIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG5cbn1cbi5oZWFkZXItbWQ6OmFmdGVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuXG4uYmFja0ltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0aW5nQ2FyZHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1JTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAwcHggIWltcG9ydGFudDtcbn1cblxuXG4iLCIuc2VjdGlvblRpdGxlRmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZCAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0aW5nQ2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBib3R0b206IDE1cHg7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgbGVmdDogNSU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/searchPage/mapModal/mapModal.ts":
  /*!*************************************************!*\
    !*** ./src/app/searchPage/mapModal/mapModal.ts ***!
    \*************************************************/

  /*! exports provided: MapModal */

  /***/
  function srcAppSearchPageMapModalMapModalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModal", function () {
      return MapModal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");
    /* harmony import */


    var _filterModal_filterModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../filterModal/filterModal */
    "./src/app/searchPage/filterModal/filterModal.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! leaflet.markercluster */
    "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_10__);

    var MapModal = /*#__PURE__*/function () {
      function MapModal(service, modalCtrl, locationService, statusBar, alertController, plt) {
        _classCallCheck(this, MapModal);

        this.service = service;
        this.modalCtrl = modalCtrl;
        this.locationService = locationService;
        this.statusBar = statusBar;
        this.alertController = alertController;
        this.plt = plt; // slides: https://docs.google.com/presentation/d/e/2PACX-1vScoho1ensbR4qCI9AIuQN55BZVvK73pAjI7sumDvW3CrxxHnrmpXWUjx2-8CpFibqU1EjLKCRhuthJ/pub?start=false&loop=false&delayms=3000&slide=id.g291e604610_0_6

        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.selectedListing = undefined;
        this.myLat = 51.673858;
        this.myLng = 7.815982;
        this.loadingMoreData = false;
        this.currentZoom = 11;
        this.showSelected = false;
        this.loading = true;
        this.allListings = [];
        this.positions = []; //this.service.setTransparentBackgroundStatusBar();
      }

      _createClass(MapModal, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //show only listings in the result
          if (!this.GlobalFields.site_details.showMapAllListings) {
            this.getPositions();
            this.iniMaps();
          } else //show all the listings
            this.getAllListings();
        }
      }, {
        key: "iniMaps",
        value: function iniMaps() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 2) // Open Street Maps
            this.getPositionsOSMaps();else if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 1) // Google Maps
            this.loading = false;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "getPositions",
        value: function getPositions() {
          var _this26 = this;

          this.loading = true;
          this.positions = [];
          this.myLat = 0;
          this.myLng = 0;
          console.log("get positions");
          var listings = [];
          if (!this.GlobalFields.site_details.showMapAllListings) listings = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings;else listings = this.allListings;
          listings.forEach(function (listing) {
            if (!isNaN(parseFloat(listing.listing_data.geolocation_lat)) && !isNaN(parseFloat(listing.listing_data.geolocation_long))) {
              _this26.loading = true; //Custom HTML icon

              var typeDetail = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].listingTypesDetails.find(function (res) {
                return res.post_name == listing.listing_data._case27_listing_type;
              });

              var iconName = typeDetail ? typeDetail.icon : "";

              _this26.positions.push({
                lat: parseFloat(listing.listing_data.geolocation_lat),
                lng: parseFloat(listing.listing_data.geolocation_long),
                label: listing.title.rendered,
                draggable: false,
                listing: listing,
                iconUrl: _this26.getMarkerIcon(listing),
                iconNameHtml: iconName,
                iconImgUrlHtml: _this26.getListingImg(listing),
                labelOptions: {
                  color: 'white',
                  fontFamily: 'roboto',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  text: " "
                }
              });
            }
          }); //center of the map as mean lat and mean long of the results

          this.myLat = this.getMeanLat();
          this.myLng = this.getMeanLng();

          if (this.myLat == 0 && this.myLat == 0 && _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat && _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat) {
            this.myLat = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat;
            this.myLng = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat;
          }

          if (!this.GlobalFields.filtersSearch.location) this.currentZoom = 6;
          console.log(this.myLat + " " + this.myLng);
        }
      }, {
        key: "getPositionsOSMaps",
        value: function getPositionsOSMaps() {
          var _this27 = this;

          this.loading = true;
          console.log(this.currentZoom);
          console.log(this.GlobalFields.filtersSearch.location);
          this.osMap = new leaflet__WEBPACK_IMPORTED_MODULE_9__["Map"]('map').setView([this.myLng, this.myLat], this.currentZoom);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"  target="_blank">OpenStreetMap</a> contributors'
          }).addTo(this.osMap);
          var customMarkerIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["icon"])({
            iconUrl: '../../assets/imgs/placeholder_location.png',
            iconSize: [64, 64],
            popupAnchor: [0, -20]
          });
          var makerToOpen;
          var markers = new leaflet__WEBPACK_IMPORTED_MODULE_9__["MarkerClusterGroup"]();

          var _loop8 = function _loop8(i) {
            var pos = _this27.positions[i];
            var html = '<div class="imgMapPin" style="background-image: url(' + pos.iconImgUrlHtml + ')"><i class="iconMapPin ' + pos.iconNameHtml + '" style="background-color:' + _this27.GlobalFields.site_details.primaryColor + ' "></i></div>'; //Custom icon

            var defaultIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["divIcon"])({
              iconUrl: '../../../assets/imgs/maps/marker-icon.png',
              shadowUrl: '../../../assets/imgs/maps/marker-shadow.png',
              html: html
            }); //Marker.prototype.options.icon = defaultIcon; //Set all the pins as equal

            var m = Object(leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"])([pos.lat, pos.lng], {
              icon: defaultIcon
            });
            m.bindPopup("<b>".concat(pos.label, "</b><br><span class=\"listingLocation\">").concat(pos.listing.listing_data._job_location, "</span>"), {
              autoClose: false
            }).on('click', function () {
              return _this27.clickedMarker(pos);
            }).on('popupclose', function () {
              return _this27.showSelected = false;
            }); // if(!this.GlobalFields.site_details.showMapAllListings)
            //     m.addTo(this.osMap);
            // else

            markers.addLayer(m);
            if (i == 0) makerToOpen = m;
          };

          for (var i = 0; i < this.positions.length; i++) {
            _loop8(i);
          } // if(this.GlobalFields.site_details.showMapAllListings)


          this.osMap.addLayer(markers); //this.osMap.setView([this.myLng, this.myLat], this.currentZoom);

          this.osMap.panTo([this.myLat, this.myLng]); //this.osMap.openPopup(makerToOpen.getPopup());

          setTimeout(function () {
            _this27.loading = false; //  this.osMap.panTo((new L.LatLng(this.myLat, this.myLng)));
          }, 1000);
        }
      }, {
        key: "getMeanLat",
        value: function getMeanLat() {
          var lat = 0;
          this.positions.forEach(function (mark) {
            lat = lat + mark.lat;
          });
          if (this.positions.length > 0) return lat / this.positions.length;
          return lat;
        }
      }, {
        key: "getMeanLng",
        value: function getMeanLng() {
          var lng = 0;
          this.positions.forEach(function (mark) {
            lng = lng + mark.lng;
          });
          if (this.positions.length > 0) return lng / this.positions.length;
          return lng;
        }
      }, {
        key: "clickedMarker",
        value: function clickedMarker(marker) {
          this.selectedListing = marker.listing;
          this.showSelected = true;
          console.log(marker.listing);
        }
      }, {
        key: "getMarkerIcon",
        value: function getMarkerIcon(listing) {
          var imgUrl = "";
          if (this.GlobalFields.site_details.placeholderLocationImgUrl && this.GlobalFields.site_details.placeholderLocationImgUrl != "") imgUrl = this.GlobalFields.site_details.placeholderLocationImgUrl;else {
            if (listing.listing_data._job_logo) imgUrl = listing.listing_data._job_logo;else imgUrl = "../../assets/imgs/placeholder_location.png";
          }
          var res = {
            url: imgUrl,
            labelOrigin: {
              x: 22.5,
              y: 20
            },
            scaledSize: this.getImgSize(imgUrl)
          };
          return res;
        }
      }, {
        key: "getImgSize",
        value: function getImgSize(url) {
          var res = {
            height: 40,
            width: 40
          };
          var img = new Image();
          img.src = url;

          if (Number(img.height) >= 40 && Number(img.width) >= 40) {
            if (Number(img.height) > Number(img.width)) res = {
              height: 40,
              width: 40 * (Number(img.width) / Number(img.height))
            };else if (Number(img.width) > Number(img.height)) res = {
              width: 40,
              height: 40 * (Number(img.height) / Number(img.width))
            };
          } else {
            res = {
              width: Number(img.width),
              height: Number(img.height)
            };
          }

          if (res.height == 0 || res.width == 0) res = {
            height: 40,
            width: 40
          };
          return res;
        }
      }, {
        key: "getImgWidth",
        value: function getImgWidth(url) {
          var img = new Image();
          img.src = url;

          if (Number(img.height) < 260) {
            return 'auto';
          } else {
            return '100%';
          }
        }
      }, {
        key: "getListingDetails",
        value: function getListingDetails(listing) {
          var _this28 = this;

          this.GlobalFields.loadingSoft = true;
          this.service.getListingDetailsById(listing.id).subscribe(function (data) {
            if (data) {
              _this28.GlobalFields.selectedListing = data;

              _this28.openModalListing();
            }
          }, function (error) {
            console.log(error);
            var msg = "";
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this28.GlobalFields.openAlert(_this28.alertController, "Error", "Error on web server", msg);

            _this28.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var modal;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.modalCtrl.create({
                      component: _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_5__["ListingPage"]
                    });

                  case 2:
                    modal = _context21.sent;
                    _context21.next = 5;
                    return modal.present();

                  case 5:
                    return _context21.abrupt("return", _context21.sent);

                  case 6:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "openFilter",
        value: function openFilter(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var filterModal;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.GlobalFields.selectedListing = listing;
                    _context22.next = 3;
                    return this.modalCtrl.create({
                      component: _filterModal_filterModal__WEBPACK_IMPORTED_MODULE_6__["FilterModal"]
                    });

                  case 3:
                    filterModal = _context22.sent;
                    _context22.next = 6;
                    return filterModal.present();

                  case 6:
                    return _context22.abrupt("return", _context22.sent);

                  case 7:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "goToMyLocation",
        value: function goToMyLocation() {
          if (this.GlobalFields.lat && this.GlobalFields["long"]) {
            this.loading = true;
            this.myLat = this.GlobalFields.lat;
            this.myLng = this.GlobalFields["long"];
            this.currentZoom = 12;
            this.loading = false;
            console.log("goToMyLocation");
          }
        }
      }, {
        key: "centerChanged",
        value: function centerChanged(event) {//console.log(event);

          /*  this.myLat = event.myLat;
            this.myLng = event.myLng;
            */
        }
      }, {
        key: "loadData",
        value: function loadData() {
          this.loadingMoreData = true;
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.currentPage++;

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.location) {
            //address
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].getLatLongFromAddress(this.locationService, _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.location);

            this.callServiceToGetFilteredListings();
          } else {
            //no address
            this.callServiceToGetFilteredListings();
          }
        }
      }, {
        key: "callServiceToGetFilteredListings",
        value: function callServiceToGetFilteredListings() {
          var _this29 = this;

          this.service.getFilteredListings().subscribe(function (data) {
            if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.currentPage == 1) {
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings = [];
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.noMorePage = false;
            }

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings.concat(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].fixWrongImgCoverField(data));
            console.log(data);

            _this29.getPositions();

            _this29.loadingMoreData = false;
            if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filteredListings.length < 10 || data.length == 0) _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].filtersSearch.noMorePage = true;
          });
        }
      }, {
        key: "getAllListings",
        value: function getAllListings() {
          var _this30 = this;

          this.service.getAllListings().subscribe(function (res) {
            if (res.success) {
              _this30.allListings = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].fixWrongImgCoverField(res.data);

              _this30.getPositions();

              _this30.iniMaps();
            }
          });
        }
      }, {
        key: "getListingImg",
        value: function getListingImg(listing) {
          var image = '';
          if (listing.img_cover) image = listing.img_cover;
          if (!listing.img_cover && listing.listing_data && listing.listing_data._job_cover) image = listing.listing_data._job_cover;else if (!listing.img_cover && listing.listing_data && !listing.listing_data._job_cover) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }]);

      return MapModal;
    }();

    MapModal.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_7__["LocationService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    MapModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'map-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mapModal.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/mapModal/mapModal.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mapModal.scss */
      "./src/app/searchPage/mapModal/mapModal.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_LocationService__WEBPACK_IMPORTED_MODULE_7__["LocationService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], MapModal);
    /***/
  },

  /***/
  "./src/app/searchPage/search.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/searchPage/search.module.ts ***!
    \*********************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppSearchPageSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _searchPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./searchPage */
    "./src/app/searchPage/searchPage.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _mapModal_mapModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./mapModal/mapModal */
    "./src/app/searchPage/mapModal/mapModal.ts");
    /* harmony import */


    var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../utilities/utilities.module */
    "./src/app/utilities/utilities.module.ts");

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _searchPage__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
      }]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_10__["UtilitiesModule"]],
      declarations: [_searchPage__WEBPACK_IMPORTED_MODULE_6__["SearchPage"], _mapModal_mapModal__WEBPACK_IMPORTED_MODULE_9__["MapModal"]],
      exports: [_mapModal_mapModal__WEBPACK_IMPORTED_MODULE_9__["MapModal"], _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_10__["UtilitiesModule"]]
    })], SearchPageModule);
    /***/
  },

  /***/
  "./src/app/searchPage/searchPage.scss":
  /*!********************************************!*\
    !*** ./src/app/searchPage/searchPage.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchPageSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".oneColumnListImg {\n  width: 100%;\n  height: calc(100% - 70px);\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.btnToolSearch {\n  font-size: 20px;\n  width: 100%;\n  line-height: 2;\n  background-color: #ffffff;\n  padding: 5px;\n  text-align: center;\n  text-transform: uppercase !important;\n  color: #5294ff !important;\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  font-weight: 800 !important;\n  background-color: white !important;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;\n  cursor: pointer !important;\n  border-radius: 80px !important;\n  border-width: initial !important;\n  border-style: none !important;\n  border-color: initial !important;\n  -o-border-image: initial !important;\n     border-image: initial !important;\n}\n\n.btnOrderSearch {\n  width: 100%;\n  line-height: 2;\n  background-color: transparent;\n  padding: 10px;\n  font-size: 14px !important;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  font-weight: 500;\n}\n\n.btnOrderSearch[dir=ltr] {\n  text-align: right;\n}\n\n.btnOrderSearch[dir=rtl] {\n  text-align: left;\n}\n\n.btnToolSearch span {\n  font-size: small;\n}\n\n.topFixed {\n  width: 100%;\n  bottom: 100px;\n  position: fixed;\n  z-index: 99;\n}\n\n.noResults {\n  font-size: small;\n  padding: 15px;\n}\n\n.filterDefaultBtnFiltersContainer {\n  background: transparent;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border-radius: 50px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.33);\n}\n\n.tripBtnFiltersContainerAndroid {\n  bottom: 55px !important;\n}\n\n/*\n.tripBtnFiltersContainer{\n  background: white;\n  position: fixed;\n  bottom: 75px;\n  z-index: 99999;\n  margin: auto;\n  left: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 170px;\n  height: 35px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  transition: box-shadow 200ms ease-in !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  font-size: 10pt;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.29);\n  border: solid 1px #f3f3f3;\n} */\n\n.tripBtnFiltersContainer {\n  background: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 200px;\n  height: 40px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.33);\n  border: solid 1px #f3f3f3;\n}\n\n.tripBtnFiltersContainer button {\n  background: transparent;\n  padding: 0 5px;\n  width: 50%;\n  height: 45px !important;\n  text-overflow: ellipsis;\n  font-size: 13pt;\n}\n\n.tripBtnFiltersContainer button:focus {\n  background-color: #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9zZWFyY2hQYWdlL3NlYXJjaFBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoUGFnZS9zZWFyY2hQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBR0EseUJBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7S0FBQSxnQ0FBQTtBQ0ZGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDTEY7O0FEU0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNORjs7QURXQTtFQUNFLHVCQUFBO0FDUkY7O0FEVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7O0FBMkJBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNQRjs7QURTQTtFQUNFLHlCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hQYWdlL3NlYXJjaFBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ub25lQ29sdW1uTGlzdEltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3MHB4KTtcbiAgaGVpZ2h0OiAtbW96LWNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi5idG5Ub29sU2VhcmNoe1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1Mjk0ZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG5cblxuLmJ0bk9yZGVyU2VhcmNoe1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDcyLCA3MiwgNzIpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG5PcmRlclNlYXJjaFtkaXI9XCJsdHJcIl17XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuT3JkZXJTZWFyY2hbZGlyPVwicnRsXCJde1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5idG5Ub29sU2VhcmNoIHNwYW57XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50b3BGaXhlZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5ub1Jlc3VsdHN7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cblxuLmZpbHRlckRlZmF1bHRCdG5GaWx0ZXJzQ29udGFpbmVye1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbn1cblxuXG5cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lckFuZHJvaWR7XG4gIGJvdHRvbTogNTVweCAhaW1wb3J0YW50O1xufVxuLypcbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA3NXB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGVhc2UtaW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2YzZjNmMztcbn0gKi9cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG59XG5cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lciBidXR0b257XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEzcHQ7XG59XG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXIgYnV0dG9uOmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xufVxuIiwiLm9uZUNvbHVtbkxpc3RJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5Ub29sU2VhcmNoIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTI5NGZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4uYnRuT3JkZXJTZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnRuT3JkZXJTZWFyY2hbZGlyPWx0cl0ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ0bk9yZGVyU2VhcmNoW2Rpcj1ydGxdIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ0blRvb2xTZWFyY2ggc3BhbiB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50b3BGaXhlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDEwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4ubm9SZXN1bHRzIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmZpbHRlckRlZmF1bHRCdG5GaWx0ZXJzQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG5cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lckFuZHJvaWQge1xuICBib3R0b206IDU1cHggIWltcG9ydGFudDtcbn1cblxuLypcbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA3NXB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGVhc2UtaW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2YzZjNmMztcbn0gKi9cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xufVxuXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbn1cblxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyIGJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/searchPage/searchPage.ts":
  /*!******************************************!*\
    !*** ./src/app/searchPage/searchPage.ts ***!
    \******************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppSearchPageSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../listingPage/listingPage */
    "./src/app/listingPage/listingPage.ts");
    /* harmony import */


    var _filterModal_filterModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./filterModal/filterModal */
    "./src/app/searchPage/filterModal/filterModal.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _mapModal_mapModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mapModal/mapModal */
    "./src/app/searchPage/mapModal/mapModal.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/LocationService */
    "./src/app/services/LocationService.ts");

    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(service, locationService, modalCtrl, statusBar, platform, translate, alertController) {
        _classCallCheck(this, SearchPage);

        this.service = service;
        this.locationService = locationService;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.platform = platform;
        this.translate = translate;
        this.alertController = alertController;
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.loadingMoreData = false;
        this.oldScollPostion = 0;
        this.headerClass = '';
        this.customPopoverOptions = {
          header: 'Seleziona l\'ordine'
        };

        if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].basicSearch && (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.location && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.categories || _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.categories.length == 0)) {
          this.selectListingType(true);
        }
      }

      _createClass(SearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('ios')) this.isAndroid = false;else this.isAndroid = true;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.service.setWhiteBlackBackgroundStatusBar();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].basicSearch = false;
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var modal;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.modalCtrl.create({
                      component: _listingPage_listingPage__WEBPACK_IMPORTED_MODULE_4__["ListingPage"]
                    });

                  case 2:
                    modal = _context23.sent;
                    _context23.next = 5;
                    return modal.present();

                  case 5:
                    return _context23.abrupt("return", _context23.sent);

                  case 6:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "openFilter",
        value: function openFilter(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var filterModal;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    this.GlobalFields.selectedListing = listing;
                    _context24.next = 3;
                    return this.modalCtrl.create({
                      component: _filterModal_filterModal__WEBPACK_IMPORTED_MODULE_5__["FilterModal"]
                    });

                  case 3:
                    filterModal = _context24.sent;
                    _context24.next = 6;
                    return filterModal.present();

                  case 6:
                    return _context24.abrupt("return", _context24.sent);

                  case 7:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "openMap",
        value: function openMap(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var mapModal;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    this.GlobalFields.selectedListing = listing;
                    _context25.next = 3;
                    return this.modalCtrl.create({
                      component: _mapModal_mapModal__WEBPACK_IMPORTED_MODULE_8__["MapModal"]
                    });

                  case 3:
                    mapModal = _context25.sent;
                    _context25.next = 6;
                    return mapModal.present();

                  case 6:
                    return _context25.abrupt("return", _context25.sent);

                  case 7:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          if (this.GlobalFields.filtersSearch.selectedType == id) return ' selectedtypesListHorizontal';else return '';
        }
      }, {
        key: "isSelectedGetPrimaryColor",
        value: function isSelectedGetPrimaryColor(id) {
          if (this.GlobalFields.filtersSearch.selectedType == id) return this.GlobalFields.getPrimaryColorJson();else return undefined;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          this.loadingMoreData = true;
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.currentPage++;

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.location) {
            //address
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getLatLongFromAddress(this.locationService, _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.location);

            this.callServiceToGetFilteredListings();
          } else {
            //no address
            this.callServiceToGetFilteredListings();
          }
        }
      }, {
        key: "toggleInfiniteScroll",
        value: function toggleInfiniteScroll() {
          this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
        }
      }, {
        key: "selectListingType",
        value: function selectListingType(reloadOrder) {
          this.GlobalFields.filteredListings = undefined;
          var setLocation = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.location;
          this.GlobalFields.clearFilters();
          if (setLocation) _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.location = setLocation;
          this.GlobalFields.selectListingTypeDetail();
          console.log(this.GlobalFields.selectedTypeDetail);
          if (reloadOrder && this.GlobalFields.selectedTypeDetail.case27_listing_type_search_page.order && this.GlobalFields.selectedTypeDetail.case27_listing_type_search_page.order.options && this.GlobalFields.selectedTypeDetail.case27_listing_type_search_page.order.options.length > 0) this.GlobalFields.filtersSearch.order = this.GlobalFields.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;
          this.GlobalFields.getFilteredListingFirstTime(this.service, this.locationService, true);
        }
      }, {
        key: "callServiceToGetFilteredListings",
        value: function callServiceToGetFilteredListings() {
          var _this31 = this;

          this.service.getFilteredListings(true).subscribe(function (d) {
            var data = d.data ? d.data : d;
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.countListings = d.count;

            if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.currentPage == 1) {
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filteredListings = [];
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.noMorePage = false;
            }

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filteredListings = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filteredListings.concat(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].fixWrongImgCoverField(data));
            console.log(data);
            _this31.loadingMoreData = false;
            if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filteredListings.length < 10 || data.length < 10) _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.noMorePage = true;
          });
        }
      }, {
        key: "onScrollHideHeader",
        value: function onScrollHideHeader(event) {
          // console.log(event);
          if (event.detail.scrollTop > 50 && !this.isElementInViewPort()) {
            if (this.oldScollPostion < event.detail.scrollTop) this.headerClass = 'headerHidden';
            if (this.oldScollPostion > event.detail.scrollTop) this.headerClass = 'headerShown';
          }

          this.oldScollPostion = event.detail.scrollTop;
        } //This function just check if element is fully in vertical viewport or not

      }, {
        key: "isElementInViewPort",
        value: function isElementInViewPort() {
          var el = document.getElementById('check-point');

          if (el) {
            var rect = el.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
          }

          return true;
        }
      }, {
        key: "getListType",
        value: function getListType(type) {
          if (type == 'alternate') return 3; //box with logo

          if (type == 'default') return 1; //box
          else return 2; //list
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].clearFilters();

          this.selectListingType(true);
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], SearchPage.prototype, "infiniteScroll", void 0);
    SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./searchPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/searchPage/searchPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./searchPage.scss */
      "./src/app/searchPage/searchPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"], _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], SearchPage);
    /***/
  },

  /***/
  "./src/app/services/LocationService.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/LocationService.ts ***!
    \*********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ionic_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ionic-cache */
    "./node_modules/ionic-cache/__ivy_ngcc__/dist/index.js");

    var LocationService = /*#__PURE__*/function () {
      function LocationService(http, cache) {
        _classCallCheck(this, LocationService);

        this.http = http;
        this.cache = cache;
      }

      _createClass(LocationService, [{
        key: "getMyAddressFromGoogle",
        value: function getMyAddressFromGoogle(lat, _long) {
          return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + _long + "&key=" + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].GoogleMapsKEY);
        }
      }, {
        key: "getMyLatLongFromGoogle",
        value: function getMyLatLongFromGoogle(address) {
          return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].GoogleMapsKEY);
        }
      }, {
        key: "getAddressFromOpenMaps",
        value: function getAddressFromOpenMaps(lat, _long2) {
          return this.http.get("https://nominatim.openstreetmap.org/reverse.php?format=json&lat=" + lat + "&lon=" + _long2);
        }
      }, {
        key: "getLatLongFromOpenMaps",
        value: function getLatLongFromOpenMaps(address) {
          var addr = address.replace(' ', '+');
          console.log(address);
          console.log(addr);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept-Language');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.http.get("https://nominatim.openstreetmap.org/search?q=" + addr + '&format=json&polygon=1&addressdetails=1', {
            headers: headers
          });
        }
      }, {
        key: "getAutocompleteOpenMaps",
        value: function getAutocompleteOpenMaps(q) {
          return this.http.get("https://photon.komoot.io/api/?q=" + q);
        }
      }]);

      return LocationService;
    }();

    LocationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ionic_cache__WEBPACK_IMPORTED_MODULE_4__["CacheService"]
      }];
    };

    LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ionic_cache__WEBPACK_IMPORTED_MODULE_4__["CacheService"]])], LocationService);
    /***/
  },

  /***/
  "./src/app/services/Service.ts":
  /*!*************************************!*\
    !*** ./src/app/services/Service.ts ***!
    \*************************************/

  /*! exports provided: Service */

  /***/
  function srcAppServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Service", function () {
      return Service;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var ionic_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ionic-cache */
    "./node_modules/ionic-cache/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _LocationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _entities_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../entities/user */
    "./src/app/entities/user.ts");

    var Service = /*#__PURE__*/function () {
      function Service(http, cache, locationService, nativeStorage, statusBar, platform, googlePlus, fb, oneSignal, navController) {
        _classCallCheck(this, Service);

        this.http = http;
        this.cache = cache;
        this.locationService = locationService;
        this.nativeStorage = nativeStorage;
        this.statusBar = statusBar;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.oneSignal = oneSignal;
        this.navController = navController;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
          'Content-Type': 'multipart/form-data'
        });
        this.suffix1 = '/wp-json/'; //PLEASE DON'T TOUCH IT

        this.suffix2 = 'wp/v2/'; //PLEASE DON'T TOUCH IT

        this.suffix3 = '/api/'; //PLEASE DON'T TOUCH IT

        this.suffix4 = 'authenticationcla/'; //PLEASE DON'T TOUCH IT

        this.suffix5 = 'bookmarkcla/'; //PLEASE DON'T TOUCH IT

        this.suffix6 = 'listingcla/'; //PLEASE DON'T TOUCH IT

        this.suffix7 = 'messagecla/'; //PLEASE DON'T TOUCH IT

        this.suffix8 = 'packagecla/'; //PLEASE DON'T TOUCH IT

        this.suffix2CustomApp = 'custom-listing-app/'; //PLEASE DON'T TOUCH IT
      } // doc della cache: https://www.npmjs.com/package/ionic-cache


      _createClass(Service, [{
        key: "getWebSiteDetails",
        value: function getWebSiteDetails() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1;
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); //return this.http.get(Constants.url + this.suffix1);
        } // doc della cache: https://www.npmjs.com/package/ionic-cache

      }, {
        key: "getConfig",
        value: function getConfig() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'config';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); // return this.http.get(url);
        }
      }, {
        key: "getCustomTaxonomies",
        value: function getCustomTaxonomies() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'taxonomies';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request);
        }
      }, {
        key: "getRecentListings",
        value: function getRecentListings() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'search?limit=10&sort=latest&order=DESC';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request);
        }
      }, {
        key: "getListingsBySearchString",
        value: function getListingsBySearchString(search) {
          return this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2 + 'job_listing?&orderby=relevance&order=asc&per_page=10&search=' + search);
        }
      }, {
        key: "getListingDetailsById",
        value: function getListingDetailsById(id) {
          //    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'listing_detail/' + id;
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'listing/' + id;
          var cacheKey = url;
          var request = this.http.get(url);
          var TTL = 60 * 60 * 24; // 1 day

          return this.cache.loadFromObservable(cacheKey, request, 'listing-details', TTL); //return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'job_listing/' + id);
        }
      }, {
        key: "getAllTypesListings",
        value: function getAllTypesListings() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2 + 'case27_listing_type';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); //return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'case27_listing_type');
        }
      }, {
        key: "getAllTypeDetails",
        value: function getAllTypeDetails() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'types';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'types');
        }
      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'tags';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'tags');
        }
      }, {
        key: "getAllCategoriesListings",
        value: function getAllCategoriesListings() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'categories';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories');
        }
      }, {
        key: "getRecentPosts",
        value: function getRecentPosts(page) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2 + 'posts';
          page = page ? page : 1;
          url = url + '?per_page=10&page=' + page;
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request);
        }
      }, {
        key: "getRegions",
        value: function getRegions() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'regions';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request); //return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'region?&order=desc&orderby=count');
        }
      }, {
        key: "getListingCoverDetails",
        value: function getListingCoverDetails(href) {
          return this.http.get(href);
        }
      }, {
        key: "getMediaById",
        value: function getMediaById(id) {
          return this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2 + 'media/' + id);
        }
      }, {
        key: "getListingFiltered",
        value: function getListingFiltered() {
          var cats = [];
          var categoriesParam = '';

          for (var i = 0; i < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories.length; i++) {
            var cat = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories[i];

            if (cat.isChecked) {
              cats.push(cat.val.id);
            }
          }

          categoriesParam = cats.toString();
          return this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2 + 'job_listing?job_listing_category=' + categoriesParam);
        }
      }, {
        key: "getListingsFilteredByType",
        value: function getListingsFilteredByType(id) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'search?limit=10&type=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getListingTypeKeyById(id);

          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request);
        }
      }, {
        key: "getHtmlFromCustomPageUrl",
        value: function getHtmlFromCustomPageUrl(pageID) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2 + 'pages/' + pageID;
          var request = this.http.get(url);
          var cacheKey = url; // return this.cache.loadFromObservable(cacheKey, request);

          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "storeRecentViewedListing",
        value: function storeRecentViewedListing(listing) {
          this.getRecentViewedListing();
          if (!_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings = [];
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings.find(function (temp) {
            return temp.id == listing.id;
          })) return;
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings.length == 10) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings[9] = listing;else _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings.push(listing);
          this.nativeStorage.setItem('recentViewedListingCLA', {
            property: 'value',
            anotherProperty: _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings
          }).then(function () {
            return console.log('Stored item!');
          }, function (error) {
            return console.error('Error storing item', error);
          });
        }
      }, {
        key: "getRecentViewedListing",
        value: function getRecentViewedListing() {
          this.nativeStorage.getItem('recentViewedListingCLA').then(function (data) {
            console.log(data);
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].recentViewedListings = data.anotherProperty;
          }, function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "storeNotifications",
        value: function storeNotifications(notification) {
          var _this32 = this;

          //first get them
          this.nativeStorage.getItem('notificationsCLA').then(function (data) {
            console.log(data);
            if (notification && data.anotherProperty) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = data.anotherProperty; //store it

            _this32.storeNotifications2(notification);
          }, function (error) {
            console.error(error);

            _this32.storeNotifications2(notification);
          });
        }
      }, {
        key: "storeNotifications2",
        value: function storeNotifications2(notification) {
          if (!_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = [];
          var a = [notification];
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = a.concat(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications);
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications.length == 11) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications.slice(0, 9);
          this.nativeStorage.setItem('notificationsCLA', {
            property: 'value',
            anotherProperty: _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications
          }).then(function () {
            return console.log('Stored item!');
          }, function (error) {
            console.error('Error storing item', error);
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = [];
          });
        }
      }, {
        key: "getNotifications",
        value: function getNotifications() {
          this.nativeStorage.getItem('notificationsCLA').then(function (data) {
            console.log(data);
            if (data && data.anotherProperty) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = data.anotherProperty;
          }, function (error) {
            console.error(error);
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].notifications = [];
          });
        }
      }, {
        key: "getFilteredListings",
        value: function getFilteredListings(stats) {
          var page = '&page=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.currentPage; //type

          var type = 'type=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getListingTypeKeyById(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.selectedType);

          var stats_q = '';
          if (stats) stats_q = '&stats=1'; //tags

          var tags = '';
          console.log(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.tags);

          var selectedTags = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.tags.filter(function (el) {
            return el.isChecked;
          });

          console.log(selectedTags);

          if (selectedTags) {
            for (var i = 0; i < selectedTags.length; i++) {
              var t = selectedTags[i];

              if (t.isChecked) {
                tags += '&job_tags[]=' + t.val.slug;
              }
            }
          } //region, it's just 1 or none selected


          var regions = '';

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.region) {
            var r = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].regions.find(function (temp) {
              return temp.name == _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.region;
            });

            if (r) {
              if (regions == '') //is the first to add
                regions = '&region=' + r.slug;
            }
          } //order


          var order = '';
          if (!_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.order) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.order = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;

          var orderObj = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].selectedTypeDetail.case27_listing_type_search_page.order.options.find(function (res) {
            return res.key == _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.order;
          });

          if (orderObj) {
            var clauses = orderObj.clauses;
            if (clauses && clauses.length > 0) order = '&sort=' + orderObj.key + '&order=' + clauses[0].order;
          } //categories


          var categories = '';

          var _loop9 = function _loop9(_i3) {
            var c = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].listingCategories.find(function (temp) {
              return temp.name == _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories[_i3];
            });

            console.log(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].listingCategories);
            console.log(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories[_i3]);
            console.log(c);
            if (c) categories += '&job_category[]=' + c.slug;
          };

          for (var _i3 = 0; _i3 < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.categories.length; _i3++) {
            _loop9(_i3);
          } //custom taxonomies, is just 1 or none selected per each custom tax


          var customTaxonomies = '';

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customTaxonomiesDropdownKeysOptions) {
            var _loop10 = function _loop10(_i4) {
              var tax = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customTaxonomiesDropdownKeysOptions[_i4];

              if (tax && tax.selected && tax.options) {
                customTaxonomies = '&' + tax.key + '=';
                var opt = tax.options.find(function (temp) {
                  return temp.name == tax.selected;
                });
                if (opt) customTaxonomies = '&' + tax.key + '=' + opt.slug;
              }
            };

            for (var _i4 = 0; _i4 < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customTaxonomiesDropdownKeysOptions.length; _i4++) {
              _loop10(_i4);
            }
          } //custom fields, is just 1 or none selected per each custom field


          var customFields = '';

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customFieldsDropdownKeysOptions) {
            var _loop11 = function _loop11(_i5) {
              var cust = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customFieldsDropdownKeysOptions[_i5];

              if (cust && cust.selected && cust.options) {
                var opt = cust.options.find(function (temp) {
                  return temp.label == cust.selected;
                });
                if (opt) customFields = '&' + cust.key + '=' + opt.value;
              }
            };

            for (var _i5 = 0; _i5 < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customFieldsDropdownKeysOptions.length; _i5++) {
              _loop11(_i5);
            }
          } //custom text fields, is just a string or "" per each custom field


          var customTextFields = '';

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customFieldsText) {
            for (var _i6 = 0; _i6 < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customFieldsText.length; _i6++) {
              var field = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.customFieldsText[_i6];

              if (field && field.selected != '') {
                customTextFields = '&' + field.key + '=' + field.selected;
              }
            }
          } //proximity


          var proximity = '';
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.range != undefined) proximity = '&proximity=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.range; //address

          var address = '';
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.location && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.lat && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.lng) //address specified and translated into lat lng
            address = '&lat=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.lat + '&lng=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.lng; //name

          var name = '';
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.name) address = '&title=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.name; //Generic search

          var search_keywords = '';
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.search_keywords) address = '&search_keywords=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].filtersSearch.search_keywords;
          return this.http.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'search?limit=10&' + type + stats_q + page + name + address + proximity + tags + regions + categories + order + customTaxonomies + customFields + customTextFields);
        }
      }, {
        key: "getAllListings",
        value: function getAllListings() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'search-geo';
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request);
        }
      }, {
        key: "getRegionsByType",
        value: function getRegionsByType(listingTypeId) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'terms?taxonomy=region&format_levels=true&';
          url = url + 'listing_type=' + listingTypeId;
          var cacheKey = url;
          var request = this.http.get(url);
          return this.cache.loadFromObservable(cacheKey, request);
        }
      }, {
        key: "clearAllCache",
        value: function clearAllCache() {
          this.cache.clearAll();
        }
      }, {
        key: "setTransparentBackgroundStatusBar",
        value: function setTransparentBackgroundStatusBar() {
          /*  console.log("setTransparentBackgroundStatusBar");
            if (this.platform.is('android')){
                this.statusBar.overlaysWebView(false);
            }else {
                this.statusBar.overlaysWebView(true);
                //this.statusBar.styleLightContent();
                this.statusBar.backgroundColorByName('black');
                this.statusBar.styleDefault();
            }*/
        }
      }, {
        key: "setWhiteBlackBackgroundStatusBar",
        value: function setWhiteBlackBackgroundStatusBar() {
          /* console.log("setWhiteBlackBackgroundStatusBar");
           if (this.platform.is('android'))
               this.setTransparentBackgroundStatusBar();
           else{
               this.statusBar.overlaysWebView(false);
               this.statusBar.backgroundColorByName('black');
               this.statusBar.styleDefault();
           }
           */
        }
      }, {
        key: "initOneSignal",
        value: function initOneSignal() {
          var _this33 = this;

          console.log('Oensignal startInit');
          console.log(this.oneSignal.startInit(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].OneSignal_appID, _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].OneSignal_googleProjectNumber));
          console.log('Oensignal inFocusDisplaying');
          console.log(this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification));
          this.oneSignal.handleNotificationReceived().subscribe(function (res) {
            // do something when notification is received
            //Is a direct message notification, no need to store it
            if (res && res.payload && !res.payload.additionalData) _this33.storeNotifications(res);
            console.log(res);
          });
          this.oneSignal.handleNotificationOpened().subscribe(function (res) {
            // do something when a notification is opened
            //Is a direct message notification
            if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn && res && res.notification.payload && res.notification.payload.additionalData && res.notification.payload.additionalData.notification_type == 1 && res.notification.payload.additionalData.sender) {
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].senderMsgSelected = new _entities_user__WEBPACK_IMPORTED_MODULE_13__["User"]();
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].senderMsgSelected.id = res.notification.payload.additionalData.sender.id;
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].senderMsgSelected.name = res.notification.payload.additionalData.sender.nickname;
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loadingSoft = true;

              _this33.getMsgsOfAChat(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].senderMsgSelected.id).subscribe(function (data) {
                _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].msgsSelected = data;
                _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loadingSoft = false;

                _this33.navController.navigateForward('tabs/messages/chatPage');
              });

              console.log(res);
            }
          });
          console.log('Oensignal endInit');
          this.oneSignal.endInit();
        }
      }, {
        key: "getGeneralSearch",
        value: function getGeneralSearch(q) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix1 + this.suffix2CustomApp + 'quick-search?s=' + q;
          return this.http.get(url);
        } //**************************************************** AUTHENTICATED AND LOGIN CALLS ***************************************************

      }, {
        key: "socialLogin",
        value: function socialLogin(type, authToken) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix4 + 'connect';
          var body = new FormData();
          body.append('type', type + '');
          body.append('access_token', authToken);
          return this.http.post(url, body);
        }
      }, {
        key: "getNonce",
        value: function getNonce() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + 'get_nonce/?controller=authenticationcla&method=generate_auth_cookie';
          var request = this.http.get(url);
          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "getNonceRegistration",
        value: function getNonceRegistration() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + 'get_nonce/?controller=authenticationcla&method=register_user';
          var request = this.http.get(url);
          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "getNoncePswRecovery",
        value: function getNoncePswRecovery() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + 'get_nonce/?controller=authenticationcla&method=reset_password';
          var request = this.http.get(url);
          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "loginOld",
        value: function loginOld(username, password, nonce) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix4 + 'generate_auth_cookie/?username=' + username + '&password=' + password + '&nonce=' + nonce;
          var request = this.http.get(url);
          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "login",
        value: function login(username, password, nonce) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix4 + 'generate_auth_cookie';
          var body = new FormData();
          body.append('username', username);
          body.append('password', password);
          body.append('nonce', nonce);
          return this.http.post(url, body);
        }
      }, {
        key: "registration",
        value: function registration(email, password, nonce) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix4 + 'register_user';
          var body = new FormData();
          body.append('user_email', email);
          body.append('user_login', email);
          body.append('user_pass', password);
          body.append('nonce', nonce);
          body.append('notify', 'both');
          return this.http.post(url, body);
        }
      }, {
        key: "pswRecovery",
        value: function pswRecovery(email, nonce) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix4 + 'reset_password';
          var body = new FormData();
          body.append('user_login', email);
          body.append('nonce', nonce);
          return this.http.post(url, body);
        }
      }, {
        key: "storeProfile",
        value: function storeProfile(profile) {
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.auth_username = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].username;
          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.auth_password = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].password;
          this.nativeStorage.setItem('profileCLA', {
            property: 'value',
            anotherProperty: _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile
          }).then(function () {
            return console.log('Stored item!');
          }, function (error) {
            return console.error('Error storing item', error);
          });
        }
      }, {
        key: "getProfileFromStorage",
        value: function getProfileFromStorage() {
          this.nativeStorage.getItem('profileCLA').then(function (data) {
            console.log(data);
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile = data.anotherProperty;

            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getUserRole();

            if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn = true;
          }, function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          //Send External ID to OneSignal
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.enableNotifications && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.user) try {
            this.oneSignal.setExternalUserId('');
          } catch (e) {
            console.log(e);
          }
          this.nativeStorage.remove('profileCLA').then(function (data) {
            console.log(data);
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn = false;
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile = undefined;
          }, function (error) {
            console.error(error);
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn = false;
            _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile = undefined;
          });

          try {
            this.googlePlus.disconnect().then(function (res) {
              console.log(res);
            })["catch"](function (e) {
              console.log(e);
            });
            this.fb.logout().then(function (res) {
              console.log(res);
            })["catch"](function (e) {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "refreshCookie",
        value: function refreshCookie() {
          var _this34 = this;

          _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loading = true;
          this.getNonce().subscribe(function (data) {
            if (data) {
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].nonce = JSON.parse(data).nonce;

              _this34.getProfileFromStorage();

              console.log(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile);
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].username = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.auth_username;
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].password = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.auth_password;

              _this34.login(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].username, _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].password, _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].nonce).subscribe(function (data) {
                _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getUserRole();

                if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.status == 'error') {
                  //Login error
                  _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn = false;
                  _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loading = false;
                } else {
                  //Login ok
                  _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile = data;

                  _this34.storeProfile(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile);

                  _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn = true;
                  _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loading = true;
                }

                _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loading = false;
              }, function (err) {
                _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loading = false;
              });
            }
          }, function (err) {
            try {
              _this34.logout();

              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile = JSON.parse(err.error);
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].isLoggedIn = false;
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loadingSoft = false;
            } catch (e) {
              //no network
              _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].loadingSoft = false;
            }
          });
        }
      }, {
        key: "getCurrentUserInfo",
        value: function getCurrentUserInfo() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix4 + 'get_currentuserinfo/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          var cacheKey = url;
          return this.http.get(url);
        }
      }, {
        key: "getMyListings",
        value: function getMyListings(currentPage) {
          var page = '&page=' + currentPage;
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix6 + 'get_listings/?limit=20' + page + '&cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          return this.http.get(url);
        }
      }, {
        key: "getBookmarkedListings",
        value: function getBookmarkedListings() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix5 + 'get_bookmarks/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          return this.http.get(url);
        }
      }, {
        key: "doBookmark",
        value: function doBookmark(listing_id) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix5 + 'bookmark_listing/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie + '&listing_id=' + listing_id;
          return this.http.get(url);
        }
      }, {
        key: "undoBookmark",
        value: function undoBookmark(listing_id) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix5 + 'remove_bookmark/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie + '&listing_id=' + listing_id;
          return this.http.get(url);
        }
      }, {
        key: "postAReview",
        value: function postAReview(listingId, text, customFieldsStars, gallery, new_galleryFile, new_galleryName) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix6 + 'post_review';
          var body = new FormData(); // Add your values in here
          //body.append('review_gallery[]', "");

          body.append('cookie', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie);
          body.append('content', text);
          body.append('post_id', listingId);

          if (new_galleryFile && new_galleryName) {
            for (var i = 0; i < new_galleryFile.length; i++) {
              var el = new_galleryFile[i]; //BLOB -> image to upload (one entry per image to upload)

              console.log(el);
              var ns = new_galleryName[i].split('/');
              var fileName = 'reviewImg.jpeg';
              if (ns && ns.length > 0) fileName = ns[ns.length - 1];
              var ext = el.type && el.type.split('/') && el.type.split('/').length > 0 ? el.type.split('/')[1] : 'jpg';
              body.append('review_gallery[]', el, fileName);
            }
          }

          if (gallery) {
            gallery.forEach(function (el) {
              body.append('review_gallery_ids[]', el + '');
            });
          }

          for (var _i7 = 0; _i7 < customFieldsStars.length; _i7++) {
            var field = customFieldsStars[_i7];
            body.append(field.key, field.value * 2 + '');
          }

          return this.http.post(url, body);
        } //get users to start a new conversation

      }, {
        key: "getRecipientsList",
        value: function getRecipientsList() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix7 + 'post_review/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
        }
      }, {
        key: "uploadImgListing",
        value: function uploadImgListing(file, file_name, field) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix6 + 'upload';
          console.log(file);
          console.log(file_name);
          var body = new FormData();
          var ext = file.type && file.type.split('/') && file.type.split('/').length > 0 ? file.type.split('/')[1] : 'jpg';
          if (ext.includes('*') && file_name.split('.').length > 0) ext = file_name.split('.')[file_name.split('.').length - 1];
          body.append('cookie', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie);
          body.append(field, file, 'imgListing.' + ext);
          return this.http.post(url, body);
        }
      }, {
        key: "getChats",
        value: function getChats() {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix7 + 'read_messages/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          return this.http.get(url);
        }
      }, {
        key: "getMsgsOfAChat",
        value: function getMsgsOfAChat(userID) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix7 + 'read_conversation/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          url = url + '&opponent_id=' + userID;
          return this.http.get(url);
        }
      }, {
        key: "markAsSeenChat",
        value: function markAsSeenChat(userID) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix7 + 'mark_as_seen/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          url = url + '&opponent_id=' + userID;
          return this.http.get(url);
        }
      }, {
        key: "sendMsg",
        value: function sendMsg(message, receiver_id) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix7 + 'send_message';
          var body = new FormData();
          body.append('cookie', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie);
          body.append('message', message);
          body.append('receiver_id', receiver_id.toString());
          return this.http.post(url, body);
        }
      }, {
        key: "getMsgUsersByString",
        value: function getMsgUsersByString(term) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix7 + 'get_recipients_list';
          var body = new FormData();
          body.append('cookie', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie);
          body.append('term', term);
          return this.http.post(url, body);
        }
      }, {
        key: "saveListing",
        value: function saveListing(listing, fieldsTypeSelected, status) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix6 + 'save';
          var listingTypeSlug = listing._case27_listing_type;

          var listingType = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].listingTypesDetails.find(function (res) {
            return res.post_name == listingTypeSlug;
          });

          var body = new FormData();
          body.append('cookie', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie);
          body.append('_case27_listing_type', listingTypeSlug);
          body.append('post_status', status ? status : 'pending');
          if (listing.id) body.append('id', listing.id + ''); //Consuming of a package if selected one

          if (listing.listing_package) body.append('listing_package', listing.listing_package + '');
          fieldsTypeSelected.forEach(function (field) {
            if (field.show_in_submit_form) {
              //text
              if (field.type == 'text' || field.type == 'wp-editor' || field.type == 'texteditor' || field.type == 'email' || field.type == 'location' || field.type == 'date' || field.type == 'number') if (listing[field.slug]) body.append(field.slug, listing[field.slug]);

              if (field.type == 'file') {
                console.log(field);
              } //logo, cover img


              if (field.type == 'file' && !field.multiple) if (listing[field.slug]) body.append('current_' + field.slug, listing[field.slug]); //gallery

              if (field.type == 'file' && field.multiple && listing[field.slug]) {
                var gallery = listing[field.slug];
                console.log(gallery);
                if (gallery) gallery.forEach(function (url) {
                  body.append('current_' + field.slug + '[]', url);
                });
              } //Categories


              if (field.type == 'term-select' && field.slug == 'job_category') {
                var _loop12 = function _loop12(i) {
                  var c = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].listingCategories.find(function (temp) {
                    return temp.name == _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.categories[i];
                  });

                  if (c) body.append('job_category[]', c.id + '');
                };

                for (var i = 0; i < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.categories.length; i++) {
                  _loop12(i);
                }
              } //Tags


              if (field.type == 'term-select' && field.slug == 'job_tags') {
                console.log(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.tags);

                var selectedTags = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.tags.filter(function (el) {
                  return el.isChecked;
                });

                if (selectedTags) {
                  for (var _i8 = 0; _i8 < selectedTags.length; _i8++) {
                    var t = selectedTags[_i8];

                    if (t.isChecked && t.val) {
                      body.append('job_tags[]', t.val.term_taxonomy_id + '');
                    }
                  }
                }
              } //Regions


              if (field.type == 'term-select' && field.slug == 'region') {
                var selectedUIElements = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.regions.filter(function (el) {
                  return el.isChecked;
                });

                if (selectedUIElements) {
                  var regions = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].regions;

                  for (var _i9 = 0; _i9 < _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.regions.length; _i9++) {
                    var uiElement = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.regions[_i9];

                    if (uiElement.isChecked) {
                      var region = regions[_i9];

                      if (field['terms-template'] == "single-select") {
                        body.append('region', region.id + '');
                        break;
                      } else {
                        body.append('region[]', region.id + '');
                      }
                    }
                  }
                }
              } //prices


              if (field.type == 'select' && field.slug == 'price_range' && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.price_range) {
                if (Array.isArray(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.price_range)) _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.price_range.forEach(function (value) {
                  body.append(field.slug, value);
                });else body.append(field.slug, _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.price_range);
              } //Working hours


              if (field.type == 'work-hours' && listing.work_hours) {
                var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                days.forEach(function (day) {
                  if (listing.work_hours[day]) {
                    body.append(field.slug + '[' + day + ']' + '[status]', listing.work_hours[day].status);

                    if (listing.work_hours[day].entry_hours && listing.work_hours[day].entry_hours.length > 0) {
                      listing.work_hours[day].entry_hours.forEach(function (e, i) {
                        body.append(field.slug + '[' + day + ']' + '[' + i + ']' + '[from]', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getOnlyTimeFromDate(e.from));
                        body.append(field.slug + '[' + day + ']' + '[' + i + ']' + '[to]', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getOnlyTimeFromDate(e.to));
                      });
                    }
                  }
                });
                body.append(field.slug + '[timezone]', listing.work_hours.timezone);
              } //Social Networks Links


              if (field.type == 'links' && listing.links) {
                listing.links.forEach(function (link, i) {
                  body.append(field.slug + '[' + i + ']' + '[network]', link.network);
                  body.append(field.slug + '[' + i + ']' + '[url]', link.url);
                });
              } //custom taxonomies, is just 1 or none selected for each custom tax


              if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.customTaxonomiesDropdownKeysOptions) {
                var customTax = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.customTaxonomiesDropdownKeysOptions.find(function (el) {
                  return el.key == field.slug;
                });

                if (customTax && customTax.selected) {
                  console.log(_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.customTaxonomiesDropdownKeysOptions);
                  console.log(customTax); //If has options as array

                  if (customTax.options && Array.isArray(customTax.options) && !Array.isArray(customTax.selected)) {
                    console.log("opt1");
                    var opt = customTax.options.find(function (temp) {
                      return temp.label == customTax.selected;
                    });
                    if (opt) body.append(field.slug + '[]', opt.id + '');
                  } //If has options is not an array and selected is an array
                  else if (customTax && customTax.selected && customTax.options && Array.isArray(customTax.selected)) {
                      console.log("opt2");
                      customTax.selected.forEach(function (sel) {
                        body.append(field.slug + '[]', sel + '');
                      });
                    } //If has options is not an array and selected is not an array
                    else if (customTax && customTax.selected && customTax.options && !Array.isArray(customTax.selected)) {
                        console.log("opt3");
                        body.append(field.slug, customTax.selected + '');
                      }
                }
              } //custom fields, is just 1 or none selected for each custom field


              if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.customFieldsDropdownKeysOptions) {
                var customField = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].addForm.customFieldsDropdownKeysOptions.find(function (el) {
                  return el.key == field.slug;
                }); //If has options as array


                if (customField && customField.selected && customField.options && Array.isArray(customField.options)) {
                  var _opt2 = customField.options.find(function (temp) {
                    return temp.label == customField.selected;
                  });

                  if (_opt2) body.append(field.slug + '[]', _opt2.id + ''); //If has options is not an array and selected is an array
                } else if (customField && customField.selected && customField.options && Array.isArray(customField.selected)) {
                  customField.selected.forEach(function (sel) {
                    body.append(field.slug + '[]', sel + '');
                  }); //If has options is not an array and selected is not an array
                } else if (customField && customField.selected && customField.options && !Array.isArray(customField.selected)) {
                  body.append(field.slug, customField.selected + '');
                }
              }
            }
          });
          return this.http.post(url, body);
        }
      }, {
        key: "getMyListingDetailsById",
        value: function getMyListingDetailsById(id) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix6 + 'get/?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie + '&listing_id=' + id;
          var cacheKey = url;
          var request = this.http.get(url);
          var TTL = 60 * 60 * 24; // 1 day

          return this.http.get(url); //  return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'get/?listing_id=' + id);
        }
      }, {
        key: "deleteListing",
        value: function deleteListing(id) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix6 + 'delete';
          var body = new FormData();
          body.append('cookie', _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie);
          body.append('listing_id', id + '');
          return this.http.post(url, body);
        }
        /*Example response:
         {
          "success": true,
          "can_create_listing": false,
          "packages": []
         }
        if the value of can_create_listing" is false, the user must buy one of the "packages" returned by this endpoint.
        */

      }, {
        key: "getPackagesPermission",
        value: function getPackagesPermission(listingTypeSelectedID) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.suffix3 + this.suffix8 + 'list_by_type/?';
          url = url + 'cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].profile.cookie;
          url = url + '&type=' + listingTypeSelectedID;
          return this.http.get(url);
        }
      }, {
        key: "getImgBlob",
        value: function getImgBlob(file_uri) {
          return this.http.get(file_uri, {
            'responseType': 'blob'
          });
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          // convert base64 to raw binary data held in a string
          var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

          var arrayBuffer = new ArrayBuffer(byteString.length);

          var _ia = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            _ia[i] = byteString.charCodeAt(i);
          }

          var dataView = new DataView(arrayBuffer);
          var blob = new Blob([dataView], {
            type: mimeString
          });
          return blob;
        }
      }]);

      return Service;
    }();

    Service.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ionic_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
      }, {
        type: _LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
      }];
    };

    Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ionic_cache__WEBPACK_IMPORTED_MODULE_5__["CacheService"], _LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])], Service);
    /***/
  },

  /***/
  "./src/app/services/WooCommerceService.ts":
  /*!************************************************!*\
    !*** ./src/app/services/WooCommerceService.ts ***!
    \************************************************/

  /*! exports provided: WooCommerceService */

  /***/
  function srcAppServicesWooCommerceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WooCommerceService", function () {
      return WooCommerceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WooCommerceService = /*#__PURE__*/function () {
      //API DOC: https://woocommerce.github.io/woocommerce-rest-api-docs
      function WooCommerceService(http) {
        _classCallCheck(this, WooCommerceService);

        this.http = http;
        this.prefix = '/wp-json/wc/v3/';
      }

      _createClass(WooCommerceService, [{
        key: "getAllProductCategories",
        value: function getAllProductCategories(page) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.prefix + 'products/categories?consumer_key=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerKeyWoo + '&consumer_secret=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerSecretWoo;
          page = page ? page : 1;
          url = url + '&per_page=100&page=' + page;
          var cacheKey = url;
          return this.http.get(url);
        }
      }, {
        key: "getAllProducts",
        value: function getAllProducts(page, categoriesSelected) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.prefix + 'products?consumer_key=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerKeyWoo + '&consumer_secret=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerSecretWoo;
          page = page ? page : 1;
          url = url + '&per_page=20&page=' + page;
          url = url + '&status=publish';
          if (categoriesSelected && categoriesSelected.length > 0) categoriesSelected.forEach(function (cat) {
            url = url + '&category=' + cat;
          });
          var cacheKey = url;
          return this.http.get(url);
        }
      }, {
        key: "getPromotionPackages",
        value: function getPromotionPackages(page) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.prefix + 'products?consumer_key=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerKeyWoo + '&consumer_secret=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerSecretWoo + '&type=job_package&status=publish';
          page = page ? page : 1;
          url = url + '&per_page=20&page=' + page;
          var cacheKey = url;
          return this.http.get(url);
        }
      }, {
        key: "getProductsByIds",
        value: function getProductsByIds(ids) {
          var url = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].url + this.prefix + 'products?consumer_key=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerKeyWoo + '&consumer_secret=' + _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ConsumerSecretWoo;
          url = url + '&per_page=20';

          if (ids && ids.length > 0) {
            ids.forEach(function (el) {
              url = url + '&include[]=' + el;
            });
          }

          var cacheKey = url;
          return this.http.get(url);
        }
      }]);

      return WooCommerceService;
    }();

    WooCommerceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    WooCommerceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], WooCommerceService);
    /***/
  },

  /***/
  "./src/app/services/theme.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/theme.service.ts ***!
    \*******************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppServicesThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! color */
    "./node_modules/color/index.js");
    /* harmony import */


    var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../GlobalFields */
    "./src/app/GlobalFields.ts");

    var defaults = {
      primary: '#3880ff',
      secondary: '#4ca6ff',
      tertiary: '#8a7fff',
      success: '#40dc7e',
      warning: '#ffce00',
      danger: '#ff4c6a',
      dark: '#222428',
      medium: '#989aa2',
      light: '#f4f5f8'
    };

    function contrast(color) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      color = color__WEBPACK_IMPORTED_MODULE_3__(color);
      return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
    }

    function CSSTextGenerator(colors) {
      colors = Object.assign(Object.assign({}, defaults), colors);
      var _colors = colors,
          primary = _colors.primary,
          secondary = _colors.secondary,
          tertiary = _colors.tertiary,
          success = _colors.success,
          warning = _colors.warning,
          danger = _colors.danger,
          dark = _colors.dark,
          medium = _colors.medium,
          light = _colors.light;
      var shadeRatio = 0.1;
      var tintRatio = 0.1;
      return "\n    --ion-color-base: ".concat(light, ";\n    --ion-color-contrast: ").concat(dark, ";\n\n    --ion-color-primary: ").concat(primary, ";\n    --ion-color-primary-rgb: 56,128,255;\n    --ion-color-primary-contrast: ").concat(contrast(primary), ";\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade:  ").concat(color__WEBPACK_IMPORTED_MODULE_3__(primary).darken(shadeRatio), ";\n\n    --ion-color-light-contrast: ").concat(primary, ";\n    --ion-color-light: ").concat(primary, ";\n\n\n\n    // omitted other styles, see full source code\n");
    } // Doc: https://angularfirebase.com/lessons/css-variables-in-ionic-4/?fbclid=IwAR24aJCajuVIrr3LwT7iyi78uiFdWaBhPbSvJaJ3NDj5dgDSGodjPbGP9z0


    var ThemeService = /*#__PURE__*/function () {
      function ThemeService(document) {
        _classCallCheck(this, ThemeService);

        this.document = document;
      } // Override all global variables with a new theme


      _createClass(ThemeService, [{
        key: "setTheme",
        value: function setTheme(theme) {
          var cssText = CSSTextGenerator(theme);
          this.setGlobalCSS(cssText);
        } // Define a single CSS variable

      }, {
        key: "setVariable",
        value: function setVariable(name, value) {
          this.document.documentElement.style.setProperty(name, value);
        }
      }, {
        key: "setGlobalCSS",
        value: function setGlobalCSS(css) {
          this.document.documentElement.style.cssText = css;
        }
      }, {
        key: "setGlobalFont",
        value: function setGlobalFont(fontFamily) {
          var head = document.getElementsByTagName("head")[0];
          console.log(head);

          if (head) {
            var linkTag1 = document.createElement('link');
            linkTag1.rel = 'preconnect';
            linkTag1.href = 'https://fonts.gstatic.com';
            var linkTag2 = document.createElement('link');
            linkTag2.rel = 'stylesheet';
            linkTag2.href = 'https://fonts.googleapis.com/css2?family=' + fontFamily.replace(' ', '+') + '&display=swap';
            head.appendChild(linkTag1);
            head.appendChild(linkTag2);
          } //Change Ionic variable


          document.documentElement.style.setProperty("--ion-font-family", this.getGlobalFontStyle());
        }
      }, {
        key: "getGlobalFontStyle",
        value: function getGlobalFontStyle() {
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details && _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.customGoogleFontFamily) return "'" + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.customGoogleFontFamily + "', sans-serif";else return "'Didact Gothic', sans-serif";
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document])], ThemeService);
    /***/
  },

  /***/
  "./src/app/shared.module.ts":
  /*!**********************************!*\
    !*** ./src/app/shared.module.ts ***!
    \**********************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _listingList_listingList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listingList/listingList */
    "./src/app/listingList/listingList.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _loading_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loading/loading */
    "./src/app/loading/loading.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/__ivy_ngcc__/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _listingList_customFieldsToDisplay_customFieldsToDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./listingList/customFieldsToDisplay/customFieldsToDisplay */
    "./src/app/listingList/customFieldsToDisplay/customFieldsToDisplay.ts");
    /* harmony import */


    var _shopPage_productList_productList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shopPage/productList/productList */
    "./src/app/shopPage/productList/productList.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
      declarations: [_listingList_listingList__WEBPACK_IMPORTED_MODULE_3__["ListingList"], _loading_loading__WEBPACK_IMPORTED_MODULE_7__["Loading"], _listingList_customFieldsToDisplay_customFieldsToDisplay__WEBPACK_IMPORTED_MODULE_9__["CustomFieldsToDisplay"], _shopPage_productList_productList__WEBPACK_IMPORTED_MODULE_10__["ProductList"]],
      exports: [_listingList_listingList__WEBPACK_IMPORTED_MODULE_3__["ListingList"], _listingList_customFieldsToDisplay_customFieldsToDisplay__WEBPACK_IMPORTED_MODULE_9__["CustomFieldsToDisplay"], _loading_loading__WEBPACK_IMPORTED_MODULE_7__["Loading"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _shopPage_productList_productList__WEBPACK_IMPORTED_MODULE_10__["ProductList"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shopPage/productList/productList.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shopPage/productList/productList.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopPageProductListProductListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BQYWdlL3Byb2R1Y3RMaXN0L3Byb2R1Y3RMaXN0LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shopPage/productList/productList.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shopPage/productList/productList.ts ***!
    \*****************************************************/

  /*! exports provided: ProductList */

  /***/
  function srcAppShopPageProductListProductListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductList", function () {
      return ProductList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _entities_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../entities/Product */
    "./src/app/entities/Product.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var ProductList = /*#__PURE__*/function () {
      function ProductList(service, router, inAppBrowser) {
        _classCallCheck(this, ProductList);

        this.service = service;
        this.router = router;
        this.inAppBrowser = inAppBrowser;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.products = [];
      }

      _createClass(ProductList, [{
        key: "openPackage",
        value: function openPackage() {
          var url = this.product.permalink;
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile) url = url + '?cla_cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie;
          var browser = this.inAppBrowser.create(url, '_blank');
        }
      }]);

      return ProductList;
    }();

    ProductList.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _entities_Product__WEBPACK_IMPORTED_MODULE_4__["Product"])], ProductList.prototype, "product", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProductList.prototype, "packages", void 0);
    ProductList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'productList',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./productList.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopPage/productList/productList.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./productList.scss */
      "./src/app/shopPage/productList/productList.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])], ProductList);
    /***/
  },

  /***/
  "./src/app/sideMenu/sideMenu.scss":
  /*!****************************************!*\
    !*** ./src/app/sideMenu/sideMenu.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSideMenuSideMenuScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonAddListing {\n  background-color: white;\n  width: 80%;\n  margin: auto;\n  font-size: 16px;\n  height: 35px;\n  font-weight: 600;\n  color: #3fdc7e;\n  border-radius: 50px;\n  border: solid 1px #f3f3f3;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n\n.menuItem i {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9zaWRlTWVudS9zaWRlTWVudS5zY3NzIiwic3JjL2FwcC9zaWRlTWVudS9zaWRlTWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zaWRlTWVudS9zaWRlTWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbkFkZExpc3Rpbmd7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiKDYzLCAyMjAsIDEyNik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuXG4ubWVudUl0ZW0gaSB7XG4gIHdpZHRoOiA0MHB4O1xufVxuIiwiLmJ1dHRvbkFkZExpc3Rpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZmRjN2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1lbnVJdGVtIGkge1xuICB3aWR0aDogNDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sideMenu/sideMenu.ts":
  /*!**************************************!*\
    !*** ./src/app/sideMenu/sideMenu.ts ***!
    \**************************************/

  /*! exports provided: SideMenu */

  /***/
  function srcAppSideMenuSideMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenu", function () {
      return SideMenu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tabs/modalAdd/modalAdd */
    "./src/app/tabs/modalAdd/modalAdd.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var SideMenu = /*#__PURE__*/function () {
      function SideMenu(modalCtrl, router, appVersion, menu) {
        var _this35 = this;

        _classCallCheck(this, SideMenu);

        this.modalCtrl = modalCtrl;
        this.router = router;
        this.appVersion = appVersion;
        this.menu = menu;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.selectedPath = '';
        this.appName = '';
        this.selectedPath = this.router.url;
        this.router.events.subscribe(function (event) {
          if (event && event.url) {
            _this35.selectedPath = event.url;
          }
        });
        appVersion.getAppName().then(function (value) {
          console.log("Getting the app name");
          console.log(value);
          _this35.appName = value;
        })["catch"](function (err) {
          _this35.appName = "";
        });
      }

      _createClass(SideMenu, [{
        key: "getStyleSelectedTab",
        value: function getStyleSelectedTab(path) {
          if (path == 'home') {
            //To avoid highlighting it if posts page is opened
            if (this.selectedPath.includes('home/posts')) return {};else {
              if (this.selectedPath.includes(path)) return {
                'color': this.GlobalFields.site_details.primaryColor,
                'border-bottom': 'solid 2px'
              };
            }
          }

          if (path == 'menuPage') {
            //To avoid highlighting it if posts page is opened
            if (this.selectedPath.includes('settings')) return {};else {
              if (this.selectedPath.includes(path)) return {
                'color': this.GlobalFields.site_details.primaryColor,
                'border-bottom': 'solid 2px'
              };
            }
          } else if (this.selectedPath.includes(path)) return {
            'color': this.GlobalFields.site_details.primaryColor,
            'border-bottom': 'solid 2px'
          };
        }
      }, {
        key: "openAddModal",
        value: function openAddModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var profileModal;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.modalCtrl.create({
                      component: _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_4__["ModalAddNode"],
                      componentProps: {
                        userId: 8675309
                      }
                    });

                  case 2:
                    profileModal = _context26.sent;
                    _context26.next = 5;
                    return profileModal.present();

                  case 5:
                    return _context26.abrupt("return", _context26.sent);

                  case 6:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          this.menu.close('appMenu');
        }
      }]);

      return SideMenu;
    }();

    SideMenu.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    SideMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sideMenu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sideMenu.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sideMenu/sideMenu.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sideMenu.scss */
      "./src/app/sideMenu/sideMenu.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], SideMenu);
    /***/
  },

  /***/
  "./src/app/tabs/modalAdd/modalAdd.scss":
  /*!*********************************************!*\
    !*** ./src/app/tabs/modalAdd/modalAdd.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsModalAddModalAddScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titleID {\n  width: calc(100% - 10px);\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n\n.iconField {\n  margin-left: 10px;\n}\n\n.typesListHorizontal {\n  opacity: 0.3;\n}\n\n.selectedtypesListHorizontal {\n  opacity: 1 !important;\n}\n\n.filterSectionForm {\n  background: #fff;\n  transition: box-shadow 0.25s ease-in-out;\n  border-radius: 3px;\n  padding: 15px;\n}\n\n.headerSection {\n  background: #fff;\n  margin-top: 25px;\n  transition: box-shadow 0.25s ease-in-out;\n  border-radius: 3px;\n  padding: 15px;\n}\n\n.confirmBtn {\n  width: 100%;\n  border-radius: 5px;\n  font-size: 18px;\n  margin-top: 60px;\n  margin-bottom: 60px;\n  font-weight: 600;\n  text-transform: initial;\n}\n\n.imgPreview {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50px;\n  height: 50px;\n}\n\n.loadingUpload {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  background-color: #ececec;\n  color: #494949;\n}\n\n.typeList {\n  width: 90%;\n  height: 110px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.typeTitle {\n  font-weight: 900;\n  font-size: 20pt;\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n}\n\n.textOnImg {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.backImg {\n  width: 90%;\n  height: 110px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.text {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.categoryImgCached {\n  position: initial !important;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.textareaEditor {\n  background-color: whitesmoke;\n  padding: 5px;\n  font-size: 8pt;\n  font-style: italic;\n  color: #373737;\n  border-bottom: solid 1px #dedede;\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.days_header {\n  padding: 0;\n}\n\n.days_header li {\n  display: table-cell;\n  list-style: none;\n  font-weight: 600;\n  padding: 10px;\n  border-radius: 0;\n  font-size: 13px;\n  cursor: pointer;\n  color: #d5d3d7;\n  border-bottom: solid 1px;\n}\n\n.addWorkHoursBtn {\n  margin-top: 15px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.05);\n  color: #242429 !important;\n  padding: 12px;\n  font-size: 14px !important;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC90YWJzL21vZGFsQWRkL21vZGFsQWRkLnNjc3MiLCJzcmMvYXBwL3RhYnMvbW9kYWxBZGQvbW9kYWxBZGQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9EQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9EQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0RBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvbW9kYWxBZGQvbW9kYWxBZGQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3RpdGxlSUQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pY29uRmllbGR7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnR5cGVzTGlzdEhvcml6b250YWx7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLnNlbGVjdGVkdHlwZXNMaXN0SG9yaXpvbnRhbHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyU2VjdGlvbkZvcm17XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uaGVhZGVyU2VjdGlvbntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jb25maXJtQnRue1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xufVxuXG4uaW1nUHJldmlld3tcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2FkaW5nVXBsb2Fke1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBjb2xvcjogIzQ5NDk0OTtcbn1cblxuLnR5cGVMaXN0e1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnR5cGVUaXRsZXtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dE9uSW1ne1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmJhY2tJbWd7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4udGV4dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jYXRlZ29yeUltZ0NhY2hlZHtcbiAgcG9zaXRpb246IGluaXRpYWwgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnRleHRhcmVhRWRpdG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMzczNzM3O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmRheXNfaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cbi5kYXlzX2hlYWRlciBsaXtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZDVkM2Q3O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG59XG4uYWRkV29ya0hvdXJzQnRue1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDUpO1xuICBjb2xvcjogIzI0MjQyOSFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbiIsIiN0aXRsZUlEIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbkZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50eXBlc0xpc3RIb3Jpem9udGFsIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uc2VsZWN0ZWR0eXBlc0xpc3RIb3Jpem9udGFsIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyU2VjdGlvbkZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5oZWFkZXJTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uY29uZmlybUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG5cbi5pbWdQcmV2aWV3IHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sb2FkaW5nVXBsb2FkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgY29sb3I6ICM0OTQ5NDk7XG59XG5cbi50eXBlTGlzdCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udHlwZVRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dE9uSW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5iYWNrSW1nIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jYXRlZ29yeUltZ0NhY2hlZCB7XG4gIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi50ZXh0YXJlYUVkaXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMzNzM3Mzc7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZGF5c19oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF5c19oZWFkZXIgbGkge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNkNWQzZDc7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbn1cblxuLmFkZFdvcmtIb3Vyc0J0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBjb2xvcjogIzI0MjQyOSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/modalAdd/modalAdd.ts":
  /*!*******************************************!*\
    !*** ./src/app/tabs/modalAdd/modalAdd.ts ***!
    \*******************************************/

  /*! exports provided: ModalAddNode */

  /***/
  function srcAppTabsModalAddModalAddTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalAddNode", function () {
      return ModalAddNode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _entities_checkboxType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../entities/checkboxType */
    "./src/app/entities/checkboxType.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _entities_listing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../entities/listing */
    "./src/app/entities/listing.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/WooCommerceService */
    "./src/app/services/WooCommerceService.ts");
    /* harmony import */


    var _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../entities/FiltersSearch */
    "./src/app/entities/FiltersSearch.ts");

    var ModalAddNode = /*#__PURE__*/function () {
      function ModalAddNode(service, wooCommerceService, viewCtrl, imagePicker, translate, alertController, base64, platform) {
        var _this36 = this;

        _classCallCheck(this, ModalAddNode);

        //     this.selectedType = this.GlobalFields.filtersSearch.selectedType;
        //     this.selectedTypeDetail = this.GlobalFields.selectedTypeDetail;
        //     this.selectListingType()
        this.service = service;
        this.wooCommerceService = wooCommerceService;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.translate = translate;
        this.alertController = alertController;
        this.base64 = base64;
        this.platform = platform;
        this.selectedTypeDetail = undefined;
        this.fieldsTypeSelected = [];
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.photos = [];
        this.uploadingImg = false;
        this.imgs_to_upload = []; //For packages logic

        this.loadingPackages = true; //After selecting a listing type says if can be created a listing or not due to packages

        this.can_create_listing = false; //After selecting a listing type says if can be created a listing or not due to packages

        this.packagesToBuy = []; //Are products, not the right packages

        this.packagesAlreadyBought = []; //On listing creation this is the packaged that can be used
        //Working hours

        this.selectedDay = 'Monday'; //Social networks

        this.socialNetworks = ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'Snapchat', 'Tumblr', 'Reddit', 'LinkedIn', 'Pinterest', 'DeviantArt', 'VKontakte', 'SoundCloud', 'Website', 'Other'];

        this.compareWithSocialNet = function (o1, o2) {
          return o1 === o2;
        };

        _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm = this.GlobalFields.duplicateObj(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch); // is edit

        if (this.GlobalFields.listingToEdit && this.GlobalFields.listingToEdit.id) {
          this.newListing = this.GlobalFields.listingToEdit;

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingTypesDetails.find(function (res) {
            return res.post_name == _this36.GlobalFields.listingToEdit._case27_listing_type;
          })) {
            this.selectedType = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingTypesDetails.find(function (res) {
              return res.post_name == _this36.GlobalFields.listingToEdit._case27_listing_type;
            }).ID;
            this.selectListingType();
            this.preSelectCustomTaxonomies();
          }

          this.loadingPackages = false;
          this.can_create_listing = true;
          console.log(this.GlobalFields.listingToEdit);
          console.log(this.newListing);
        } else // is new listing
          this.newListing = new _entities_listing__WEBPACK_IMPORTED_MODULE_7__["Listing"]();

        this.prepareWorkHrs();
        this.GlobalFields.listingToEdit = undefined;
        this.translate.get('SUCCESS_CREATION_MSG_1').subscribe(function (msg) {
          _this36.success_creation_msg_1 = msg;
        });
        this.translate.get('SUCCESS_CREATION_MSG_2').subscribe(function (msg) {
          _this36.success_creation_msg_2 = msg;
        });
        this.translate.get('SUCCESS_MSG').subscribe(function (msg) {
          _this36.success_msg = msg;
        });
        this.translate.get('SUCCESS_UPDATE_MSG_1').subscribe(function (msg) {
          _this36.success_update_msg_1 = msg;
        });
        this.translate.get('ALERT_CLOSE').subscribe(function (msg) {
          _this36.close_msg = msg;
        });
        this.platform.ready().then(function () {
          _this36.onResumeSubscription = platform.resume.subscribe(function () {
            // do something meaningful when the app is put in the foreground
            console.log('platform.resume event');

            _this36.checkPackages();
          });
        });
      } //After opening the browser for the pckages purchasing a check is needed again


      _createClass(ModalAddNode, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this37 = this;

          this.checkPackages(); //Check if token is still correct or expired and refresh it

          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.service.getCurrentUserInfo().subscribe(function (data) {}, function (err) {
              _this37.service.refreshCookie();
            });
          }
        }
      }, {
        key: "iniFormAd",
        value: function iniFormAd() {
          var _this38 = this;

          //prepare addForm object
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.customTaxonomiesDropdownKeysOptions = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.tags = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.regions = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.customFieldsDropdownKeysOptions = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.customFieldsText = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.customFieldsNumber = [];
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Monday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Tuesday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Wednesday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Thursday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Friday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Saturday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.Sunday = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.work_hours.timezone = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details ? _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.timezone : undefined; //prepare CustomTaxonomies

          var _loop13 = function _loop13(key) {
            if (key != 'region') {
              var opts = _this38.GlobalFields.listingCustomTaxonomies[key];

              if (_this38.fieldsTypeSelected.find(function (el) {
                return el.slug == key;
              })) {
                var selected = [];
                if (_this38.newListing && _this38.newListing.id && _this38.newListing[key]) selected = _this38.newListing[key];

                _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.customTaxonomiesDropdownKeysOptions.push({
                  key: key,
                  options: opts,
                  selected: selected
                });
              }
            }
          };

          for (var key in this.GlobalFields.listingCustomTaxonomies) {
            _loop13(key);
          } //array of custom fields for dropdowns


          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingCustomFieldKeys.forEach(function (key) {
            var field = _this38.selectedTypeDetail.case27_listing_type_fields[key];

            if (field && (field.type == 'term-select' || field.type == 'select' || field.type == 'multiselect')) {
              var selected = [];
              if (_this38.newListing && _this38.newListing.id && _this38.newListing[key]) selected = _this38.newListing[key];

              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.customFieldsDropdownKeysOptions.push({
                key: field.slug,
                options: field.options,
                selected: selected
              });
            }
          });
        }
      }, {
        key: "selectListingType",
        value: function selectListingType() {
          var _this39 = this;

          this.selectedTypeDetail = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingTypesDetails.find(function (res) {
            return res.ID == _this39.selectedType;
          });
          this.newListing._case27_listing_type = this.selectedTypeDetail.post_name;
          console.log(this.selectedTypeDetail);
          this.getfieldsTypeSelected();
          this.iniFormAd();
          this.prepareOptionsCategories();
          this.prepareOptionsTags();
          this.prepareOptionsRegions();
          this.checkPackages();
        }
      }, {
        key: "preSelectCustomTaxonomies",
        value: function preSelectCustomTaxonomies() {
          var _this40 = this;

          //Prepare the custom taxonomies alrady selected
          this.fieldsTypeSelected.forEach(function (field) {
            if (field.type == 'term-select' && field.slug != 'job_tags' && field.slug != 'job_category' && field.slug != 'region') {
              console.log(field.slug);
              console.log(_this40.newListing[field.slug]);

              _this40.newListing[field.slug].forEach(function (term_id) {
                _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getCustomTaxonomiesByKeyAddForm(field.slug).selected.push(term_id + '');
              });
            }
          });
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          if (this.selectedType == id) return ' selectedtypesListHorizontal';else return '';
        }
      }, {
        key: "isSelectedGetPrimaryColor",
        value: function isSelectedGetPrimaryColor(id) {
          if (this.selectedType == id) return this.GlobalFields.getPrimaryColorJson();else return undefined;
        }
      }, {
        key: "getKeys",
        value: function getKeys(obj) {
          var res = Object.keys(obj);
          if (res) return res;else return [];
        }
      }, {
        key: "getfieldsTypeSelected",
        value: function getfieldsTypeSelected() {
          var _this41 = this;

          var keys = this.getKeys(this.selectedTypeDetail.case27_listing_type_fields);
          this.fieldsTypeSelected = [];
          keys.forEach(function (key) {
            _this41.fieldsTypeSelected.push(_this41.selectedTypeDetail.case27_listing_type_fields[key]);
          });
          this.fieldsTypeSelected.sort(function (a, b) {
            return a.priority > b.priority ? 1 : b.priority > a.priority ? -1 : 0;
          });
          console.log(this.fieldsTypeSelected);
        }
      }, {
        key: "getClassContainer",
        value: function getClassContainer() {
          if (this.GlobalFields.isWhiteBackground()) return 'sectionContainer';else return 'sectionContainerNotWhiteBackground';
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.viewCtrl.dismiss();
        }
      }, {
        key: "getPictures",
        value: function getPictures() {
          if (!this.imagePicker) {
            console.log('asd');
          }

          this.imagePicker.getPictures(undefined).then(function (results) {
            for (var i = 0; i < results.length; i++) {
              console.log('Image URI: ' + results[i]);
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "prepareWorkHrs",
        value: function prepareWorkHrs() {
          console.log(this.newListing.work_hours);

          if (!this.newListing.work_hours || this.newListing.work_hours.length == 0) {
            this.newListing.work_hours = {
              Monday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"](),
              Tuesday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"](),
              Wednesday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"](),
              Thursday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"](),
              Friday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"](),
              Saturday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"](),
              Sunday: new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]()
            };
            console.log(this.newListing.work_hours);
          }
        }
      }, {
        key: "prepareOptionsCategories",
        value: function prepareOptionsCategories() {
          var _this42 = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories = [];
          this.selectedTypeDetail.categories.forEach(function (cat) {
            if (_this42.newListing && _this42.newListing.id) if (_this42.newListing.job_category && _this42.newListing.job_category.find(function (el) {
              return el == cat.id;
            })) {
              _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories.push(cat.name);
            }
          });
        }
      }, {
        key: "prepareOptionsTags",
        value: function prepareOptionsTags() {
          var _this43 = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.tags = [];
          this.selectedTypeDetail.tags.forEach(function (cat) {
            var c = new _entities_checkboxType__WEBPACK_IMPORTED_MODULE_5__["CheckboxType"]();
            if (_this43.newListing && _this43.newListing.id) if (_this43.newListing.job_tags && _this43.newListing.job_tags.find(function (el) {
              return el == cat.id;
            })) c.isChecked = true;else c.isChecked = false;
            c.val = cat;

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.tags.push(c);
          });
        }
      }, {
        key: "prepareOptionsRegions",
        value: function prepareOptionsRegions() {
          var _this44 = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.regions = [];
          this.GlobalFields.regions.forEach(function (cat) {
            var c = new _entities_checkboxType__WEBPACK_IMPORTED_MODULE_5__["CheckboxType"]();
            if (_this44.newListing && _this44.newListing.id) if (_this44.newListing.region && _this44.newListing.region.find(function (el) {
              return el == cat.id;
            })) c.isChecked = true;else c.isChecked = false;
            c.val = cat;

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.regions.push(c);
          });
        }
      }, {
        key: "toStringCategories",
        value: function toStringCategories() {
          if (!_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories || _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories.length == 0) return '';else if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories.length > 3) return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories.length + ' selected';else return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories.toString();
        }
      }, {
        key: "toStringTaxonomies",
        value: function toStringTaxonomies(key) {
          var tax = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getCustomTaxonomiesByKey(key);

          if (tax) {
            /* if (!tax.selected || tax.selected.length == 0)
                 return "";
             else if (tax.selected.length > 3)
                 return tax.selected.length + " selected";
             else {*/
            return tax.selected; // }
          }
        }
      }, {
        key: "getImgCachedClass",
        value: function getImgCachedClass(class_to_add) {
          var class_name = 'imgCachedAsBackground ' + class_to_add;
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
      }, {
        key: "getBackgroundCached",
        value: function getBackgroundCached(type) {
          var image = '';
          image = type.img_cover;
          if (!image) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }, {
        key: "openImagePicker",
        value: function openImagePicker(multiple, field) {
          var _this45 = this;

          var outputType = 0; //0 Return image file URI, 1 base64img on android crash BUT WORKS FOR Information google-ios

          if (this.platform.is('ios')) outputType = 1;
          if (this.platform.is('android')) outputType = 0;

          try {
            var howMany = multiple ? 15 : 1; //const howMany = 1;

            var options = {
              maximumImagesCount: howMany,
              outputType: outputType
            };
            this.imagePicker.getPictures(options).then(function (results) {
              _this45.howManyToUpload = results.length;
              _this45.howManyUploaded = 0;

              if (Array.isArray(results)) {
                var _loop14 = function _loop14(i) {
                  _this45.GlobalFields.loadingSoft = true;

                  if (outputType === 0) {
                    //file URI - Android
                    console.log(results[i]);

                    _this45.base64.encodeFile(results[i]).then(function (base64File) {
                      console.log(base64File);

                      _this45.uploadImg(_this45.dataURItoBlob(base64File), results[i], multiple, field);
                    }, function (err) {
                      console.log(err);
                      _this45.GlobalFields.loadingSoft = true;
                    });
                  }

                  if (outputType === 1) //base64 - Information google-ios
                    _this45.uploadImg(_this45.dataURItoBlob('data:image/jpeg;base64,' + results[i]), results[i], multiple, field);
                };

                for (var i = 0; i < results.length; i++) {
                  _loop14(i);
                }
              }
            }, function (err) {
              console.log(err);
              _this45.GlobalFields.loadingSoft = false;
            });
          } catch (error) {
            console.error(error);
          }
        }
      }, {
        key: "uploadImg",
        value: function uploadImg(blob, fileName, multiple, field) {
          var _this46 = this;

          return this.service.uploadImgListing(blob, fileName, !multiple ? field : field + '[]').subscribe(function (res) {
            _this46.howManyUploaded = _this46.howManyUploaded + 1;

            if (res && res.files && res.files.length > 0 && res.files[0].attachment_url) {
              if (!multiple) _this46.newListing[field] = res.files[0].attachment_url;else {
                if (!_this46.newListing[field]) _this46.newListing[field] = [];

                _this46.newListing[field].push(res.files[0].attachment_url);
              }
            }

            if (_this46.howManyToUpload == _this46.howManyUploaded) _this46.GlobalFields.loadingSoft = false;
          }, function (error) {
            console.log(error);
            var msg = '';
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this46.GlobalFields.openAlert(_this46.alertController, 'Error', 'Error on web server', msg);

            _this46.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "findImgsByField",
        value: function findImgsByField(field) {
          var res = this.imgs_to_upload.filter(function (el) {
            return el.field == field;
          });
          if (!res) return [];
          return res;
        }
      }, {
        key: "deleteImgByField",
        value: function deleteImgByField(field) {
          var res = this.imgs_to_upload.filter(function (el) {
            return el.field != field;
          });
          if (!res) return this.imgs_to_upload;
          return res;
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          // convert base64 to raw binary data held in a string
          console.log(dataURI);
          var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

          var arrayBuffer = new ArrayBuffer(byteString.length);

          var _ia = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            _ia[i] = byteString.charCodeAt(i);
          }

          var dataView = new DataView(arrayBuffer);
          var blob = new Blob([dataView], {
            type: mimeString
          });
          return blob;
        }
        /*
            takePhoto()
            {
                const options : CameraOptions =
                    {
                        quality: 50,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE
                    }
                this.camera.getPicture(options) .then((imageData) =>
                    {
                        this.base64Image = "data:image/jpeg;base64," + imageData;
                        this.photos.push(this.base64Image);
                        this.photos.reverse();
                    },
                    (err) =>
                    {
                        console.log(err);
                    });
            }
        */

      }, {
        key: "deleteNewImg",
        value: function deleteNewImg(index, slug) {
          console.log(index);
          console.log(slug);
          console.log(this.newListing[slug]);

          if (this.newListing[slug] && this.newListing[slug].length > index) {
            this.newListing[slug].splice(index, 1);
          }
        }
      }, {
        key: "saveListing",
        value: function saveListing() {
          var _this47 = this;

          console.log(this.GlobalFields.addForm);
          this.GlobalFields.loadingSoft = true;
          this.service.saveListing(this.newListing, this.fieldsTypeSelected).subscribe(function () {
            _this47.GlobalFields.loadingSoft = false;

            _this47.service.clearAllCache();

            if (!_this47.newListing.id) //is new listing
              _this47.GlobalFields.openSuccessAlert(_this47.alertController, _this47.success_msg, _this47.success_creation_msg_1, _this47.success_creation_msg_2, _this47.close_msg);else //is Edit
              _this47.GlobalFields.openSuccessAlert(_this47.alertController, _this47.success_msg, _this47.success_update_msg_1, _this47.success_creation_msg_2, _this47.close_msg);

            _this47.closeModal();
          }, function (error) {
            var msg = '';
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this47.GlobalFields.openAlert(_this47.alertController, 'Error', 'Error on web server', error);

            _this47.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "checkIfFieldsMissing",
        value: function checkIfFieldsMissing() {
          var _this48 = this;

          //  return false;
          return this.fieldsTypeSelected.some(function (field) {
            return field && field.required && _this48.isVoidField(field) && _this48.canShowPackageCondition(field);
          });
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress(slug) {
          this.newListing[slug] = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].address;
        }
      }, {
        key: "isVoidField",
        value: function isVoidField(field) {
          if (!field) return true;
          if (field.slug == 'job_category' && _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.categories.length == 0) return true;
          if (field.slug == 'job_category') return false;
          if (field.slug == 'job_tags' && _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.tags.length == 0) return true;
          if (field.slug == 'job_tags') return false;
          if (field.slug == 'region' && _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.regions.length == 0) return true;
          if (field.slug == 'region') return false;
          if (field.slug == 'price_range' && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm.price_range) return true;
          if (field.slug == 'price_range') return false; //not custom

          if (!field.is_custom && field.type != 'term-select' && field.type != 'select' && field.type != 'multiselect' && (!this.newListing[field.slug] || this.newListing[field.slug].length == 0)) {
            return true;
          } //Custom term-select field (it has is_custom to false)


          if (!field.is_custom && field.type == 'term-select' && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getCustomTaxonomiesByKeyAddForm(field.slug).selected) return true; //Custom select OR multiselect field

          if (field.is_custom && (field.type == 'select' || field.type == 'multiselect') && !_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getCustomFieldsByKeyAddForm(field.slug).selected) return true; //custom field
          //TODO: check missing types of mandatory custom fields

          if (field.is_custom && (field.type == 'number' || field.type == 'text' || field.type == 'texteditor' || field.type == 'wp-editor') && this.newListing[field.slug] == undefined) return true;
          return false;
        }
      }, {
        key: "addWorkHours",
        value: function addWorkHours() {
          if (!this.newListing.work_hours[this.selectedDay]) this.newListing.work_hours[this.selectedDay] = new _entities_FiltersSearch__WEBPACK_IMPORTED_MODULE_11__["WorkHoursDay"]();
          if (!this.newListing.work_hours[this.selectedDay].entry_hours) this.newListing.work_hours[this.selectedDay].entry_hours = [];
          this.newListing.work_hours[this.selectedDay].entry_hours.push({
            from: undefined,
            to: undefined
          });
        }
      }, {
        key: "addSocialNetLink",
        value: function addSocialNetLink() {
          if (!this.newListing.links) this.newListing.links = [];
          this.newListing.links.push({
            network: undefined,
            url: undefined
          });
          console.log(this.newListing.links);
        }
      }, {
        key: "checkPackages",
        value: function checkPackages() {
          var _this49 = this;

          if (!this.can_create_listing) {
            if (this.newListing && this.newListing.id) this.can_create_listing = true;else {
              if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn && this.selectedType) {
                this.loadingPackages = true;
                this.service.getPackagesPermission(this.selectedType).subscribe(function (data) {
                  if (data && data.success) {
                    _this49.can_create_listing = data.can_create_listing;
                    _this49.packagesToBuy = data.products;
                    _this49.packagesAlreadyBought = data.packages;
                    _this49.loadingPackages = false;
                  }
                });
              }
            }
          }
        }
      }, {
        key: "getOnlyTimeFromDate",
        value: function getOnlyTimeFromDate(time) {
          var t1 = time.split('T');
          console.log(t1);

          if (t1 && t1.length > 1) {
            var t2 = t1[1].split(':');

            if (t2.length > 1) {
              var hr = t2[0];
              var mm = t2[1];
              console.log(hr + ':' + mm);
              return hr + ':' + mm;
            }
          }
        }
      }, {
        key: "log",
        value: function log(obj) {
          console.log(obj);
          console.log(_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].addForm);
        }
      }, {
        key: "deleteEntryFromWorkHrs",
        value: function deleteEntryFromWorkHrs(i) {
          if (this.newListing.work_hours[this.selectedDay].entry_hours && this.newListing.work_hours[this.selectedDay].entry_hours.length > 0) {
            this.newListing.work_hours[this.selectedDay].entry_hours.splice(i, 1);
          }
        }
      }, {
        key: "deleteEntryFromLinks",
        value: function deleteEntryFromLinks(i) {
          if (this.newListing.links && this.newListing.links.length > 0) {
            this.newListing.links.splice(i, 1);
          }
        }
      }, {
        key: "canShowPackageCondition",
        value: function canShowPackageCondition(field) {
          var _this50 = this;

          var res = false;
          if (!field || !field.conditions || field.conditions.length == 0) res = true;else if (field) {
            if (field.conditions && field.conditions.length > 0 && field.conditions[0] && field.conditions[0].length > 0) field.conditions.forEach(function (conditions) {
              return conditions.forEach(function (cond) {
                if (cond.key == '__listing_package' && cond.compare == '==') {
                  if (cond.value == '') {
                    res = true;
                  } else if (cond.value == '--none--') {
                    res = true;
                  } //Is edit
                  else if (_this50.newListing.id) {
                      if (_this50.newListing.product_id && cond.value == _this50.newListing.product_id + '') res = true;else if (!_this50.newListing.product_id || _this50.newListing.product_id == '') res = true;
                    } //Is new listing
                    else if (_this50.packagesAlreadyBought && _this50.packagesAlreadyBought.length > 0) {
                        var pack = _this50.packagesAlreadyBought.filter(function (el) {
                          return el.id == _this50.newListing.listing_package;
                        });

                        if (pack && pack.length > 0) {
                          if (cond.value == pack[0].product_id + '') res = true;
                        }
                      }
                }
              });
            });
          }
          return res;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // always unsubscribe your subscriptions to prevent leaks
          this.onResumeSubscription.unsubscribe();
        }
      }]);

      return ModalAddNode;
    }();

    ModalAddNode.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"]
      }, {
        type: _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_10__["WooCommerceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    ModalAddNode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modalAdd.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/modalAdd/modalAdd.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modalAdd.scss */
      "./src/app/tabs/modalAdd/modalAdd.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_8__["Service"], _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_10__["WooCommerceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], ModalAddNode);
    /***/
  },

  /***/
  "./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUtilitiesGoogleMapsAutocompleteGoogleMapsAutocompleteScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".googleAutoCompleteInput {\n  border: 0;\n  border-bottom: solid 1px #e4e3e6;\n  padding: 5px;\n  width: 100%;\n}\n\n.openStreetResultsBox {\n  background-color: #fff;\n  position: absolute !important;\n  z-index: 1000;\n  border-radius: 2px;\n  border-top: 1px solid #d9d9d9;\n  font-family: Arial, sans-serif;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  max-height: 175px;\n  overflow: auto;\n}\n\n.openStreetResultsBox ul {\n  margin: 0;\n  padding: 0;\n}\n\n.openStreetResultsBox li {\n  list-style: none;\n  padding: 7px;\n}\n\n.openStreetResultsBox li:active {\n  background-color: #dcdcdc;\n}\n\n.openStreetResultsBox i {\n  margin-right: 10px;\n  color: #777777;\n}\n\n.cancelText {\n  position: absolute;\n  top: 5px;\n  right: 3px;\n  border-radius: 100px;\n  background-color: #ffffff;\n  padding: 5px;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC91dGlsaXRpZXMvZ29vZ2xlTWFwc0F1dG9jb21wbGV0ZS9nb29nbGVNYXBzQXV0b2NvbXBsZXRlLnNjc3MiLCJzcmMvYXBwL3V0aWxpdGllcy9nb29nbGVNYXBzQXV0b2NvbXBsZXRlL2dvb2dsZU1hcHNBdXRvY29tcGxldGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBR0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNDLHlCQUFBO0FDQ0Q7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdGllcy9nb29nbGVNYXBzQXV0b2NvbXBsZXRlL2dvb2dsZU1hcHNBdXRvY29tcGxldGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmdvb2dsZUF1dG9Db21wbGV0ZUlucHV0e1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTRlM2U2O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3BlblN0cmVldFJlc3VsdHNCb3h7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCxzYW5zLXNlcmlmO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LWhlaWdodDogMTc1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ub3BlblN0cmVldFJlc3VsdHNCb3ggdWx7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm9wZW5TdHJlZXRSZXN1bHRzQm94IGxpe1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG59XG4ub3BlblN0cmVldFJlc3VsdHNCb3ggbGk6YWN0aXZle1xuIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XG59XG4ub3BlblN0cmVldFJlc3VsdHNCb3ggaXtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmNhbmNlbFRleHR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuIiwiLmdvb2dsZUF1dG9Db21wbGV0ZUlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2U0ZTNlNjtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wZW5TdHJlZXRSZXN1bHRzQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm9wZW5TdHJlZXRSZXN1bHRzQm94IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ub3BlblN0cmVldFJlc3VsdHNCb3ggbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5vcGVuU3RyZWV0UmVzdWx0c0JveCBsaTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xufVxuXG4ub3BlblN0cmVldFJlc3VsdHNCb3ggaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5jYW5jZWxUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM2NjY2NjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.ts ***!
    \****************************************************************************/

  /*! exports provided: GoogleMapsAutocomplete */

  /***/
  function srcAppUtilitiesGoogleMapsAutocompleteGoogleMapsAutocompleteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsAutocomplete", function () {
      return GoogleMapsAutocomplete;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var GoogleMapsAutocomplete = /*#__PURE__*/function () {
      function GoogleMapsAutocomplete(service, locationService, translate, mapsAPILoader, ngZone) {
        _classCallCheck(this, GoogleMapsAutocomplete);

        this.service = service;
        this.locationService = locationService;
        this.translate = translate;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"];
        this.addressName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.service.setWhiteBlackBackgroundStatusBar();
      }

      _createClass(GoogleMapsAutocomplete, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 1) //Google Maps
            this.findAddressGoogleMaps();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log("OnChange to " + this.value);
          this.loadExistingText();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log(this.searchElementRef);
          if (this.searchElementRef) this.googleInput = this.searchElementRef.nativeElement;
          this.loadExistingText();
        }
      }, {
        key: "loadExistingText",
        value: function loadExistingText() {
          if (this.value) {
            if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 1) //Google Maps
              console.log(this.googleInput);
            if (this.googleInput) this.googleInput.value = this.value;else //Open Street Map
              this.openStreetValue = this.value;
          }
        }
      }, {
        key: "cancelText",
        value: function cancelText() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 1) //Google Maps
            if (this.googleInput) this.googleInput.value = '';else //Open Street Map
              this.openStreetValue = '';
          this.addressName.emit('');
        } //https://photon.komoot.io/

      }, {
        key: "findAddressOpenStreetMaps",
        value: function findAddressOpenStreetMaps(q) {
          var _this51 = this;

          this.locationService.getAutocompleteOpenMaps(q).subscribe(function (data) {
            _this51.resultsOpenStreetMap = data;
            if (data && data.features && data.features.length > 0 && data.features[0].properties) data.features[0].properties.name;
            console.log(data);
          });
        }
      }, {
        key: "selectOpenStreetResult",
        value: function selectOpenStreetResult(value) {
          this.openStreetValue = '';
          if (value.name) this.openStreetValue = value.name;
          if (value.state) this.openStreetValue = this.openStreetValue + ', ' + value.state;
          if (value.country) this.openStreetValue = this.openStreetValue + ', ' + value.country;
          this.resultsOpenStreetMap = undefined;
          this.addressName.emit(this.openStreetValue);
        }
      }, {
        key: "findAddressGoogleMaps",
        value: function findAddressGoogleMaps() {
          var _this52 = this;

          this.mapsAPILoader.load().then(function () {
            // @ts-ignore google var works, has not to be imported
            var autocomplete = new google.maps.places.Autocomplete(_this52.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
              _this52.ngZone.run(function () {
                // some details
                var place = autocomplete.getPlace();
                console.log(place);
                if (place.formatted_address) _this52.addressName.emit(place.name + ' ' + place.formatted_address);else _this52.addressName.emit(place.name);
                /*this.address = place.formatted_address;
                this.web_site = place.website;
                this.name = place.name;
                this.zip_code = place.address_components[place.address_components.length - 1].long_name;
                //set latitude, longitude and zoom
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                this.zoom = 12;
                */
              });
            });
          });
        }
      }]);

      return GoogleMapsAutocomplete;
    }();

    GoogleMapsAutocomplete.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GoogleMapsAutocomplete.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GoogleMapsAutocomplete.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GoogleMapsAutocomplete.prototype, "addressName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('googleSearch'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GoogleMapsAutocomplete.prototype, "searchElementRef", void 0);
    GoogleMapsAutocomplete = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'googleMapsAutocomplete',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./googleMapsAutocomplete.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./googleMapsAutocomplete.scss */
      "./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"], _services_LocationService__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GoogleMapsAutocomplete);
    /***/
  },

  /***/
  "./src/app/utilities/utilities.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/utilities/utilities.module.ts ***!
    \***********************************************/

  /*! exports provided: UtilitiesModule */

  /***/
  function srcAppUtilitiesUtilitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilitiesModule", function () {
      return UtilitiesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _googleMapsAutocomplete_googleMapsAutocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./googleMapsAutocomplete/googleMapsAutocomplete */
    "./src/app/utilities/googleMapsAutocomplete/googleMapsAutocomplete.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/__ivy_ngcc__/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var agm_overlays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! agm-overlays */
    "./node_modules/agm-overlays/__ivy_ngcc__/fesm2015/agm-overlays.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/js-marker-clusterer */
    "./node_modules/@agm/js-marker-clusterer/__ivy_ngcc__/fesm2015/agm-js-marker-clusterer.js");
    /* harmony import */


    var agm_direction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! agm-direction */
    "./node_modules/agm-direction/__ivy_ngcc__/fesm2015/agm-direction.js");

    var UtilitiesModule = function UtilitiesModule() {
      _classCallCheck(this, UtilitiesModule);
    };

    UtilitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], //https://github.com/zyra/ionic-image-loader/tree/v4
      ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoader"].forRoot(), //https://github.com/SebastianM/angular-googlemaps
      agm_overlays__WEBPACK_IMPORTED_MODULE_9__["AgmOverlays"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
        apiKey: _Constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].GoogleMapsKEY,
        libraries: ["places"]
      }), _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_12__["AgmJsMarkerClustererModule"], // https://www.npmjs.com/package/agm-direction
      agm_direction__WEBPACK_IMPORTED_MODULE_13__["AgmDirectionModule"]],
      declarations: [_googleMapsAutocomplete_googleMapsAutocomplete__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsAutocomplete"]],
      entryComponents: [_googleMapsAutocomplete_googleMapsAutocomplete__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsAutocomplete"]],
      exports: [_googleMapsAutocomplete_googleMapsAutocomplete__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsAutocomplete"], agm_overlays__WEBPACK_IMPORTED_MODULE_9__["AgmOverlays"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"], _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_12__["AgmJsMarkerClustererModule"], agm_direction__WEBPACK_IMPORTED_MODULE_13__["AgmDirectionModule"]]
    })], UtilitiesModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/emmanuelketchabepa/Desktop/customlistingapp_v1_6_2/app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map