function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoriesList-categoriesList-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categoriesList/categoriesList.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categoriesList/categoriesList.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesListCategoriesListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar>\n      <!-- If Side menu is used-->\n      <ion-buttons slot=\"start\" style=\"position: absolute;\">\n        <ion-menu-button style=\"color: white\"></ion-menu-button>\n      </ion-buttons>\n      <ion-segment *ngIf=\"!GlobalFields.site_details.categoryListTabContent || GlobalFields.site_details.categoryListTabContent == 3\" [(ngModel)]=\"tabShown\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\n          <ion-segment-button value=\"1\">\n              <ion-label>{{'CATEGORIES' | translate}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n              <ion-label>{{'REGIONS' | translate}}</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n      <ion-title *ngIf=\"GlobalFields.site_details.categoryListTabContent ==1 || GlobalFields.site_details.categoryListTabContent == 2\">\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 1\">{{'CATEGORIES' | translate}}</span>\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 2\">{{'REGIONS' | translate}}</span>\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- Categories -->\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==1 && GlobalFields.listingCategories\" style=\"margin-top: 20px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n    <div *ngFor=\"let type of categories_by_type\" style=\"width: 100%; padding: 15px;\">\n        <h3 *ngIf=\"type.categories && type.categories.length>0\">{{type.type_name}}</h3>\n      <span *ngFor=\"let cat of type.categories\">\n        <ion-row *ngIf=\"cat.count\"  style=\"width: 100%; height: 130px;\"\n                 (click)=\"getListingsByCategory(cat, type.type_id)\">\n            <ion-col style=\"text-align: center\">\n                <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n                <div class=\"backImg\">\n                    <img-loader [src]=\"getBackgroundCached(cat)\" useImg\n                                [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n\n                    <div class=\"text\">\n                        <span class=\"categoryBox\">{{cat.name}}</span>\n                        <br>\n                        <span style=\"position: relative; top: 24%;\">{{cat.count}} {{'LISTINGS' | translate}}</span>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n      </span>\n    </div>\n\n</ion-content>\n\n<!-- Regions -->\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==2 && GlobalFields.regions\" style=\"margin-top: 20px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n    <div style=\"width: 100%; padding: 15px;\" *ngIf=\"regions_by_type && regions_by_type.length>0\">\n      <div *ngFor=\"let type of regions_by_type\">\n        <h3 *ngIf=\"type.regions && type.regions.length>0\">{{type.type_name}}</h3>\n        <span *ngFor=\"let reg of type.regions\">\n          <ion-row *ngIf=\"reg.count\" style=\"width: 100%; height: 130px;\"\n                   (click)=\"getListingsByRegion(reg, type.type_id)\">\n              <ion-col style=\"text-align: center\">\n                  <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n                  <div class=\"backImg\">\n                      <img-loader [src]=\"getBackgroundCachedRegions(reg)\" useImg\n                                  [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n                      <div class=\"text\">\n                          <span class=\"categoryBox\">{{reg.name}}</span>\n                          <br>\n                          <span style=\"position: relative; top: 24%;\">{{reg.count}} {{'LISTINGS' | translate}}</span>\n                      </div>\n                  </div>\n              </ion-col>\n          </ion-row>\n        </span>\n      </div>\n\n    </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/categoriesList/categoriesList.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/categoriesList/categoriesList.module.ts ***!
    \*********************************************************/

  /*! exports provided: CategoriesListModule */

  /***/
  function srcAppCategoriesListCategoriesListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesListModule", function () {
      return CategoriesListModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _categoriesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./categoriesList */
    "./src/app/categoriesList/categoriesList.ts");

    var CategoriesListModule = function CategoriesListModule() {
      _classCallCheck(this, CategoriesListModule);
    };

    CategoriesListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _categoriesList__WEBPACK_IMPORTED_MODULE_8__["CategoriesList"]
      }]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
      declarations: [_categoriesList__WEBPACK_IMPORTED_MODULE_8__["CategoriesList"]]
    })], CategoriesListModule);
    /***/
  },

  /***/
  "./src/app/categoriesList/categoriesList.scss":
  /*!****************************************************!*\
    !*** ./src/app/categoriesList/categoriesList.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesListCategoriesListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backImg {\n  height: 110px;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.text {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.categoryBox {\n  font-weight: 900;\n  font-size: 18pt;\n  position: relative;\n  top: 22%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9jYXRlZ29yaWVzTGlzdC9jYXRlZ29yaWVzTGlzdC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzTGlzdC9jYXRlZ29yaWVzTGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvREFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllc0xpc3QvY2F0ZWdvcmllc0xpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrSW1ne1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50ZXh0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmNhdGVnb3J5Qm94e1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMiU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuIiwiLmJhY2tJbWcge1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jYXRlZ29yeUJveCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIyJTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categoriesList/categoriesList.ts":
  /*!**************************************************!*\
    !*** ./src/app/categoriesList/categoriesList.ts ***!
    \**************************************************/

  /*! exports provided: CategoriesList */

  /***/
  function srcAppCategoriesListCategoriesListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesList", function () {
      return CategoriesList;
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


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/LocationService */
    "./src/app/services/LocationService.ts");

    var CategoriesList = /*#__PURE__*/function () {
      function CategoriesList(service, _sanitizer, translate, locationService, navController) {
        _classCallCheck(this, CategoriesList);

        this.service = service;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.locationService = locationService;
        this.navController = navController;
        this.GlobalFields = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.tabShown = 1;
        this.listOfTypes = [];
        this.categories_by_type = [];
        this.regions_by_type = [];
      }

      _createClass(CategoriesList, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategoriesForEachType();
          this.getRegionsForEachType();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.categoryListTabContent == 1) this.tabShown = 1;else if (_app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.categoryListTabContent == 2) this.tabShown = 2;else this.tabShown = 1;
          console.log('ionViewDidEnter');
          this.service.setWhiteBlackBackgroundStatusBar();
        }
      }, {
        key: "getListingsByCategory",
        value: function getListingsByCategory(selectedCat, typeId) {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].clearFilters();

          var category = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingCategories.find(function (cat) {
            return cat.slug == selectedCat.slug;
          });

          if (category) {
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.categories = [category.name];
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.selectedType = typeId; // select Listing Type

            this.GlobalFields.selectListingTypeDetail();

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

            this.navController.navigateForward('tabs/search');
          }
        }
      }, {
        key: "getCategoriesForEachType",
        value: function getCategoriesForEachType() {
          var _this = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingTypesDetails.forEach(function (type) {
            //check if regions in in the search filter
            if (type.categories && type.categories.length > 0) {
              var cats = type.categories.filter(function (cat) {
                return cat.count;
              });

              _this.categories_by_type.push({
                type_id: type.ID,
                type_name: type.post_title,
                categories: cats
              });
            }
          });
        }
      }, {
        key: "getRegionsForEachType",
        value: function getRegionsForEachType() {
          var _this2 = this;

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingTypesDetails.forEach(function (type) {
            //check if regions in in the search filter
            if (type.case27_listing_type_search_page && type.case27_listing_type_search_page.advanced && type.case27_listing_type_search_page.advanced.facets && type.case27_listing_type_search_page.advanced.facets && type.case27_listing_type_search_page.advanced.facets.some(function (el) {
              return el.show_field == 'region';
            })) {
              _this2.service.getRegionsByType(type.ID).subscribe(function (data) {
                if (data.success) data.data = data.data.filter(function (reg) {
                  return reg.count;
                });

                _this2.regions_by_type.push({
                  type_id: type.ID,
                  type_name: type.post_title,
                  regions: data.data
                });
              });
            }
          });
        }
      }, {
        key: "getListingsByRegion",
        value: function getListingsByRegion(selectedReg, typeId) {
          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].clearFilters();

          var region = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].regions.find(function (cat) {
            return cat.slug == selectedReg.slug;
          });

          if (region) {
            console.log(region);
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.region = region.name;
            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].filtersSearch.selectedType = typeId; // select Listing Type

            this.GlobalFields.selectListingTypeDetail();

            _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].getFilteredListingFirstTime(this.service, this.locationService, true);

            this.navController.navigateForward('tabs/search');
          }
        }
      }, {
        key: "getBackground",
        value: function getBackground(category) {
          var image = ''; //get the category from the categories call

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingCategories.forEach(function (cat) {
            if (cat.id == category.id) image = cat.image_url;
          });

          return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(to top, rgba(23, 23, 23, 0.38), rgba(23, 23, 23, 0.38)), url(".concat(image, ")"));
        }
      }, {
        key: "getBackgroundCached",
        value: function getBackgroundCached(category) {
          var image = ''; //get the category from the categories call

          _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].listingCategories.forEach(function (cat) {
            if (cat.id == category.id) image = cat.image_url;
          });

          if (!image) image = _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }, {
        key: "getBackgroundCachedRegions",
        value: function getBackgroundCachedRegions(reg) {
          if (reg.image_url) return reg.image_url;
          return _app_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
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
      }]);

      return CategoriesList;
    }();

    CategoriesList.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CategoriesList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'categoriesList',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categoriesList.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categoriesList/categoriesList.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categoriesList.scss */
      "./src/app/categoriesList/categoriesList.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], CategoriesList);
    /***/
  }
}]);
//# sourceMappingURL=categoriesList-categoriesList-module-es5.js.map