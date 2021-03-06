function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuPage-menuPage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/bookmarksPage/bookmarksPage.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/bookmarksPage/bookmarksPage.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageBookmarksPageBookmarksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header dir=\"{{GlobalFields.getLanguageLayout()}}\"  translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar >\n        <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'BOOKMARKS' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: white\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'BOOKMARKS' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <div style=\"padding: 15px;\">\n\n      <div *ngIf=\"GlobalFields.isLoggedIn \" style=\"padding-right: 0;padding-left: 0;\">\n        <span *ngIf=\"!loadingSection && GlobalFields.bookmarkedListings\">\n                 <!--   <div *ngFor=\"let listing of GlobalFields.bookmarkedListings;  let i = index\" style=\"margin:0px\">\n                   Commands\n                    <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\"></page-listingList>\n                  </div>\n          -->\n                  <ion-row *ngFor=\"let listing of GlobalFields.bookmarkedListings;  let i = index\" style=\"margin:0px\"\n                           dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                            <ion-col size=\"11\" style=\"padding: 0 !important;\">\n                                <page-listingList [listing]=\"listing\" [type]=\"'2'\" [search]=\"true\"></page-listingList>\n                            </ion-col>\n                            <ion-col size=\"1\" style=\"padding: 0 !important; text-align: center; line-height: 100px;\">\n                              <button class=\"btnAction\" (click)=\"undoBookmark(listing.id)\"><i class=\"fas fa-heart\" style=\"color: #FF5722;\"></i></button>\n                            </ion-col>\n                  </ion-row>\n\n              </span>\n          <span *ngIf=\"!loadingSection && (!GlobalFields.bookmarkedListings || GlobalFields.bookmarkedListings.length==0)\"\n                style=\"padding-left: 25px;\"> {{'NO_RESULTS' | translate}}</span>\n          <div *ngIf=\"loadingSection\" style=\"width: 100%; text-align: center;\"><i class=\"fas fa-spinner fa-spin\"></i>\n          </div>\n      </div>\n\n\n\n\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/menuPage.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/menuPage.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar>\n    <!-- If Side menu is used-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'MENU' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- <ion-content  class=\"cards-bg social-cards\"   [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\">-->\n<ion-content class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'MENU' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <!-- [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" -->\n\n  <!--- Profile -->\n  <div *ngIf=\"GlobalFields.isLoggedIn\">\n    <div style=\"padding: 10px; margin-bottom: 30px; margin-top: 15px\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-label class=\"nameLabel\">{{GlobalFields.profile.user.display_name}}</ion-label>\n            <br>\n            <div>{{GlobalFields.profile.user.email}}</div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img src=\"{{GlobalFields.profile.user.avatar}}\"\n                 style=\"float: right; height: 50px; border-radius: 55px;\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <ion-list dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-item style=\"color: #484848;\" [disabled]=\"!GlobalFields.isLoggedIn\" button\n              [routerLink]=\"['/tabs/menuPage/myListingsPage']\" [detail]=\"false\">\n      <ion-icon name=\"list-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'MY_LISTINGS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>\n    <ion-item style=\"color: #484848;\" [disabled]=\"!GlobalFields.isLoggedIn\" button [detail]=\"false\"\n              [routerLink]=\"['/tabs/menuPage/bookmarksPage']\">\n      <ion-icon name=\"heart-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'BOOKMARKS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>\n\n    <!--<ion-item style=\"color: #484848;\" button [detail]=\"false\" [routerLink]=\"['/tabs/shop/cart']\">\n      <ion-icon name=\"cart-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        Cart\n      </ion-label>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>-->\n    <ion-item *ngIf=\"GlobalFields.site_details.enableNotifications\" style=\"color: #484848;\" button [detail]=\"false\" [routerLink]=\"['/tabs/menuPage/notificationsPage']\">\n      <ion-icon name=\"notifications-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'NOTIFICATIONS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n    </ion-item>\n    <ion-item style=\"color: #484848;\" button [detail]=\"false\" [routerLink]=\"['/tabs/menuPage/settings']\">\n      <ion-icon name=\"cog-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'SETTINGS' | translate}}\n      </ion-label>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>    </ion-item>\n    <ion-item *ngIf=\"GlobalFields.isLoggedIn\" style=\"color: #484848;\" button (click)=\"logout()\" [detail]=\"false\">\n      <ion-icon name=\"log-out-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\n      <ion-label>\n        {{'LOGOUT' | translate}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n\n  <div *ngIf=\"!GlobalFields.isLoggedIn\" class=\"pageSection\"\n       style=\"margin: 10px; padding: 15px; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.07) !important;\">\n    <loginComponent></loginComponent>\n  </div>\n\n\n\n\n  <!-- Recently viewed-->\n  <div class=\"section\" style=\"margin-top: 50px; padding: 15px\"\n       *ngIf=\"GlobalFields.isLoggedIn && GlobalFields.recentViewedListings && GlobalFields.recentViewedListings.length > 0\">\n    <h4 style=\"margin: 0\"><i class=\"fas fa-history\"></i> {{'RECENTLY_VIEWED' | translate}}</h4><br>\n    <div *ngFor=\"let listing of GlobalFields.recentViewedListings;  let i = index\" style=\"margin:5px\">\n      <page-listingList [listing]=\"listing\" [type]=\"'2b'\" [search]=\"true\"></page-listingList>\n    </div>\n  </div>\n\n\n  <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/myListingsPage/myListingsPage.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/myListingsPage/myListingsPage.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageMyListingsPageMyListingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar >\n        <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'MY_LISTINGS' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: white\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'MY_LISTINGS' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div style=\"padding: 15px;\">\n\n      <ion-segment [(ngModel)]=\"selectedTab\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\n          <ion-segment-button value=\"1\">\n              <ion-label>{{'STATS' | translate}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n              <ion-label>{{'LISTINGS' | translate}}</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n    <br>\n\n      <!-- STATS SEGMENT -->\n      <div *ngIf=\"selectedTab == 1\">\n          <!-- Stats listings-->\n          <div *ngIf=\"GlobalFields.isLoggedIn && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache\"\n               class=\"pageSection\">\n              <h3><i class=\"fas fa-signal\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'STATS' | translate}}\n              </h3><br>\n              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.listings\"> <!-- stats listings -->\n              <div class=\"statsBox\" style=\"background: #6c1cff;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                  <h2 dir=\"{{GlobalFields.getLanguageLayout()}}\">{{currentUserInfo.user.meta._mylisting_stats_cache.listings.published}}</h2>\n                  <p dir=\"{{GlobalFields.getLanguageLayout()}}\">{{'LISTINGS_PUB' | translate}}</p>\n                  <i class=\"far fa-window-maximize\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              </div>\n              <div class=\"statsBox\" style=\"background: #911cff;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                  <h2 dir=\"{{GlobalFields.getLanguageLayout()}}\">{{currentUserInfo.user.meta._mylisting_stats_cache.listings.pending_approval}}</h2>\n                  <p dir=\"{{GlobalFields.getLanguageLayout()}}\">{{'LISTINGS_PEN' | translate}}</p>\n                  <i class=\"fas fa-pencil-ruler\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              </div>\n              <div class=\"statsBox\" style=\"background: #0079e0;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                  <h2 dir=\"{{GlobalFields.getLanguageLayout()}}\">{{currentUserInfo.user.meta._mylisting_stats_cache.listings.expired}}</h2>\n                  <p dir=\"{{GlobalFields.getLanguageLayout()}}\">{{'LISTINGS_EXP' | translate}}</p>\n                  <i class=\"far fa-clock\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              </div>\n          </span>\n          </div>\n\n\n          <!-- Views -->\n          <div *ngIf=\"GlobalFields.isLoggedIn\" class=\"pageSection\">\n              <h3><i class=\"far fa-eye\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'VIEWS' | translate}}</h3>\n              <br>\n              <!-- stats listings -->\n              <div class=\"numberStats\">\n                  <p>\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.views\">\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastday\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastday}}</span>\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastday\">-</span>\n                          </span>\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\n                      {{'LAST_24_HOURS' | translate}}\n                  </p>\n                  <p>\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.views\">\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastweek\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastweek}}</span>\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastweek\">-</span>\n                          </span>\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\n                      {{'LAST_7_DAYS' | translate}}\n                  </p>\n                  <p>\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.views\">\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastmonth\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastmonth}}</span>\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastmonth\">-</span>\n                          </span>\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\n                      {{'LAST_30_DAYS' | translate}}\n                  </p>\n              </div>\n          </div>\n\n          <!-- Unique views -->\n          <div *ngIf=\"GlobalFields.isLoggedIn\" class=\"pageSection\">\n              <h3><i class=\"fas fa-user-clock\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'UNIQUE_VIEWS' |\n                  translate}}</h3><br>\n              <!-- stats listings -->\n              <div class=\"numberStats\">\n                  <p>\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views\">\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastday\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastday}}</span>\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastday\">-</span>\n                          </span>\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\n                      {{'LAST_24_HOURS' | translate}}\n                  </p>\n                  <p>\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views\">\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastweek\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastweek}}</span>\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastweek\">-</span>\n                          </span>\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\n                      {{'LAST_7_DAYS' | translate}}\n                  </p>\n                  <p>\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views\">\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastmonth\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastmonth}}</span>\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastmonth\">-</span>\n                          </span>\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\n                      {{'LAST_30_DAYS' | translate}}\n                  </p>\n              </div>\n          </div>\n      </div>\n\n\n      <!-- MYLISTINGS SEGMENT -->\n      <div *ngIf=\"selectedTab == 2\">\n          <!-- My listings-->\n          <div *ngIf=\"GlobalFields.isLoggedIn\" style=\"padding-left: 5px; padding-right: 5px;\">\n              <span *ngIf=\"!loadingSection && myListings\">\n                  <div *ngFor=\"let listing of myListings;  let i = index\" style=\"position: relative\">\n                      <div *ngIf=\"listing.post_status == Constants.LISTING_STATUS_PENDING\"\n                           dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"text-align: right\">\n                          <span class=\"statusListing\"> {{'APPROVAL_PENDING' | translate}}</span>\n                      </div>\n                      <ion-row dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                            <ion-col size=\"11\" style=\"padding: 0 !important;\">\n                                <page-listingList [listing]=\"listing\" [type]=\"'2'\" [search]=\"true\"></page-listingList>\n                            </ion-col>\n                            <ion-col size=\"1\" style=\"padding: 0 !important; text-align: center;\">\n                              <button class=\"btnAction\" (click)=\"editListing(listing)\"><i class=\"fas fa-pencil-alt\" style=\"color: #00BCD4;\"></i></button>\n                              <button class=\"btnAction\" (click)=\"deleteListing(listing)\"><i class=\"fas fa-trash-alt\" style=\"color: #ff0000;\"></i></button>\n                            </ion-col>\n                      </ion-row>\n                  </div>\n              </span>\n              <div style=\"width: 100%; text-align: center;\" *ngIf=\"!noMoreMyListings && !loadingMoreData\"\n                   (click)=\"loadMoreMyListings()\">\n                  <ion-icon name=\"refresh\"></ion-icon>\n                  {{'LOAD_MORE' | translate}}\n              </div>\n\n              <div style=\"width: 100%; text-align: center;\" *ngIf=\"loadingMoreData\">\n                  <div class=\"lds-ellipsis\">\n                      <div></div>\n                      <div></div>\n                      <div></div>\n                      <div></div>\n                  </div>\n              </div>\n              <span *ngIf=\"!loadingMoreData && (!myListings || myListings.length==0)\" style=\"padding-left: 25px;\"> {{'NO_RESULTS' | translate}}</span>\n          </div>\n      </div>\n\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/notificationsPage/notificationsPage.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/notificationsPage/notificationsPage.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageNotificationsPageNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'NOTIFICATIONS' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <ion-header collapse=\"condense\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'NOTIFICATIONS' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div style=\"padding: 15px;\" *ngIf=\"GlobalFields.notifications && GlobalFields.notifications.length>0\">\n\n    <ion-list dir=\"{{GlobalFields.getLanguageLayout()}}\">\n      <ion-item *ngFor=\"let notif of GlobalFields.notifications\" style=\"margin-bottom: 10px\">\n        <span *ngIf=\"notif.payload\" style=\"width: 100%\">\n          <ion-label><b>{{notif.payload.title}}</b></ion-label>\n          <p>{{notif.payload.body}}</p>\n          <div style=\"width: 100%; text-align: right\" *ngIf=\"notif.payload && notif.payload.launchURL\">\n            <a (click)=\"openLink(notif.payload.launchURL)\">{{'EXPLORE' | translate}}</a>\n          </div>\n        </span>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n  <div style=\"padding: 15px;\"\n       *ngIf=\"!GlobalFields.notifications || (GlobalFields.notifications && GlobalFields.notifications.length==0)\"\n       dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    {{'NO_RESULTS' | translate}}\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/settingsPage/settingsPage.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/settingsPage/settingsPage.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageSettingsPageSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"navigateAsRoot\"  slot=\"start\">\n      <ion-menu-button style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n    <ion-back-button *ngIf=\"!navigateAsRoot\" slot=\"start\" defaultHref=\"tabs/menuPage\" ></ion-back-button>\n    <ion-title>{{'SETTINGS' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: white\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'SETTINGS' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div style=\"padding: 15px;\">\n\n      <div class=\"section\">\n          <ion-label>{{'CACHE_CONTROL' | translate}}</ion-label><br><br>\n          <ion-button color=\"danger\" (click)=\"clearCache()\">{{'CLEAR_CACHE' | translate}}</ion-button>\n      </div>\n      <div class=\"sectionLittler\" *ngIf=\"GlobalFields.site_details.privatePolicyUrl\">\n          <a (click)=\"openLink(GlobalFields.site_details.privatePolicyUrl)\" >{{'SEE_OUR_PRI_POL' | translate}}.</a>\n      </div>\n      <div class=\"sectionLittler\" *ngIf=\"GlobalFields.site_details.aboutUsUrl\">\n          <a (click)=\"openLink(GlobalFields.site_details.aboutUsUrl)\" >About us.</a>\n      </div>\n      <div class=\"sectionLittler\" *ngIf=\"GlobalFields.site_details.contactUsUrl\">\n          <a (click)=\"openLink(GlobalFields.site_details.contactUsUrl)\">Contact us.</a>\n      </div>\n\n      <div class=\"section\" style=\"margin-top: 40px;\">\n          <ion-label>{{'LANGUAGE' | translate}}</ion-label><br><br>\n          <ion-list style=\"margin-right: -15px; margin-left: -15px;\">\n\n                  <ion-item  *ngFor=\"let lang of GlobalFields.languages\">\n                      <ion-label><img src=\"../../assets/imgs/flags/{{lang.flag}}.png\" height=\"17\" width=\"25\"/> {{lang.val}}</ion-label>\n                      <ion-checkbox (ionFocus)=\"setLang(lang.flag)\" [(ngModel)]=\"lang.isChecked\"></ion-checkbox>\n                  </ion-item>\n          </ion-list>\n      </div>\n\n  </div>\n\n  <div *ngIf=\"appVersionNumber\" style=\"padding: 15px;\">\n    App version: {{appVersionNumber}}\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/menuPage/bookmarksPage/bookmarksPage.scss":
  /*!***********************************************************!*\
    !*** ./src/app/menuPage/bookmarksPage/bookmarksPage.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageBookmarksPageBookmarksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9tZW51UGFnZS9ib29rbWFya3NQYWdlL2Jvb2ttYXJrc1BhZ2Uuc2NzcyIsInNyYy9hcHAvbWVudVBhZ2UvYm9va21hcmtzUGFnZS9ib29rbWFya3NQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21lbnVQYWdlL2Jvb2ttYXJrc1BhZ2UvYm9va21hcmtzUGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbkxpdHRsZXJ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iLCIuc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zZWN0aW9uTGl0dGxlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menuPage/bookmarksPage/bookmarksPage.ts":
  /*!*********************************************************!*\
    !*** ./src/app/menuPage/bookmarksPage/bookmarksPage.ts ***!
    \*********************************************************/

  /*! exports provided: BookmarksPage */

  /***/
  function srcAppMenuPageBookmarksPageBookmarksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarksPage", function () {
      return BookmarksPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/dialogs/ngx */
    "./node_modules/@ionic-native/dialogs/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BookmarksPage = /*#__PURE__*/function () {
      function BookmarksPage(service, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, router, modalCtrl) {
        _classCallCheck(this, BookmarksPage);

        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.loadingSection = false;
      }

      _createClass(BookmarksPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.service.setWhiteBlackBackgroundStatusBar();

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.getBookmarkedListings();
            this.getCurrentUserInfo();
          } else {
            this.router.navigateByUrl('tabs/menuPage');
          }
        }
      }, {
        key: "getCurrentUserInfo",
        value: function getCurrentUserInfo() {
          var _this = this;

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.service.getCurrentUserInfo().subscribe(function (data) {
              _this.currentUserInfo = data;
              _this.loadingSection = false;
            }, function (err) {
              _this.service.refreshCookie();
            });
          }
        }
      }, {
        key: "getBookmarkedListings",
        value: function getBookmarkedListings() {
          var _this2 = this;

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.service.getBookmarkedListings().subscribe(function (data) {
              _this2.GlobalFields.bookmarkedListings = data;
              _this2.loadingSection = false;
            }, function (err) {
              _this2.service.refreshCookie();
            });
          }
        }
      }, {
        key: "undoBookmark",
        value: function undoBookmark(id) {
          var _this3 = this;

          this.loadingSection = true;
          this.service.undoBookmark(id).subscribe(function (data) {
            _this3.getBookmarkedListings();
          }, function (err) {
            _this3.service.refreshCookie();
          });
        }
      }]);

      return BookmarksPage;
    }();

    BookmarksPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    BookmarksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'bookmarksPage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bookmarksPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/bookmarksPage/bookmarksPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bookmarksPage.scss */
      "./src/app/menuPage/bookmarksPage/bookmarksPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], BookmarksPage);
    /***/
  },

  /***/
  "./src/app/menuPage/menuPage.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/menuPage/menuPage.module.ts ***!
    \*********************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppMenuPageMenuPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
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


    var _menuPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menuPage */
    "./src/app/menuPage/menuPage.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _settingsPage_settingsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settingsPage/settingsPage */
    "./src/app/menuPage/settingsPage/settingsPage.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./loginComponent/loginComponent.module */
    "./src/app/menuPage/loginComponent/loginComponent.module.ts");
    /* harmony import */


    var _myListingsPage_myListingsPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./myListingsPage/myListingsPage */
    "./src/app/menuPage/myListingsPage/myListingsPage.ts");
    /* harmony import */


    var _bookmarksPage_bookmarksPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./bookmarksPage/bookmarksPage */
    "./src/app/menuPage/bookmarksPage/bookmarksPage.ts");
    /* harmony import */


    var _notificationsPage_notificationsPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./notificationsPage/notificationsPage */
    "./src/app/menuPage/notificationsPage/notificationsPage.ts");

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _menuPage__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
      }, {
        path: 'settings',
        component: _settingsPage_settingsPage__WEBPACK_IMPORTED_MODULE_8__["SettingsPage"]
      }, {
        path: 'myListingsPage',
        component: _myListingsPage_myListingsPage__WEBPACK_IMPORTED_MODULE_11__["MyListingsPage"]
      }, {
        path: 'bookmarksPage',
        component: _bookmarksPage_bookmarksPage__WEBPACK_IMPORTED_MODULE_12__["BookmarksPage"]
      }, {
        path: 'notificationsPage',
        component: _notificationsPage_notificationsPage__WEBPACK_IMPORTED_MODULE_13__["NotificationsPage"]
      }]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_10__["LoginComponentModule"]],
      declarations: [_menuPage__WEBPACK_IMPORTED_MODULE_6__["MenuPage"], _settingsPage_settingsPage__WEBPACK_IMPORTED_MODULE_8__["SettingsPage"], _myListingsPage_myListingsPage__WEBPACK_IMPORTED_MODULE_11__["MyListingsPage"], _bookmarksPage_bookmarksPage__WEBPACK_IMPORTED_MODULE_12__["BookmarksPage"], _notificationsPage_notificationsPage__WEBPACK_IMPORTED_MODULE_13__["NotificationsPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/menuPage/menuPage.scss":
  /*!****************************************!*\
    !*** ./src/app/menuPage/menuPage.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  margin: 0;\n}\n\n.section {\n  margin-bottom: 50px;\n  padding: 10px;\n}\n\n.nameLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 24px;\n  font-weight: bolder;\n  line-height: 1.125em;\n}\n\n.iconMenu {\n  font-size: 16pt;\n  color: #565656;\n  width: 25px;\n}\n\n.iconRightMenu {\n  float: right;\n  margin-top: 5px;\n  color: #666666;\n  font-size: 16pt;\n}\n\n.btnLogin {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n}\n\n.elementListTopMenu {\n  margin: 5px;\n  margin-bottom: 0px;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.2px;\n  color: #484848;\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  cursor: pointer !important;\n  display: grid;\n  position: relative;\n  text-align: center;\n  width: 25%;\n  background: none;\n  font-weight: 800;\n  outline: none;\n  text-decoration: none;\n  transition: background 0.3s ease 0s, border-color 0.3s ease 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9tZW51UGFnZS9tZW51UGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9tZW51UGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhEQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tZW51UGFnZS9tZW51UGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uYW1lTGFiZWx7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4uaWNvbk1lbnV7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgY29sb3I6ICM1NjU2NTY7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uaWNvblJpZ2h0TWVudXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXNpemU6IDE2cHQ7XG59XG5cbi5idG5Mb2dpbntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi5lbGVtZW50TGlzdFRvcE1lbnV7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogODAwO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlIDBzLCBib3JkZXItY29sb3IgMC4zcyBlYXNlIDBzO1xufVxuIiwiaDMge1xuICBtYXJnaW46IDA7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm5hbWVMYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4uaWNvbk1lbnUge1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGNvbG9yOiAjNTY1NjU2O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmljb25SaWdodE1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbn1cblxuLmJ0bkxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZWxlbWVudExpc3RUb3BNZW51IHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UgMHMsIGJvcmRlci1jb2xvciAwLjNzIGVhc2UgMHM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menuPage/menuPage.ts":
  /*!**************************************!*\
    !*** ./src/app/menuPage/menuPage.ts ***!
    \**************************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppMenuPageMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
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
    /*! ../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Constants */
    "./src/app/Constants.ts");

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(service, translate, navController) {
        _classCallCheck(this, MenuPage);

        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"];
        this.errorMgs = '';
        this.selectedMenu = 1;
        this.oldScollPostion = 0;
        this.headerClass = '';
      }

      _createClass(MenuPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log('ionViewDidEnter');
          this.service.getRecentViewedListing();
          this.service.setWhiteBlackBackgroundStatusBar();
        }
      }, {
        key: "loginComplete",
        value: function loginComplete(finished) {
          if (finished) {
            //Login ok
            this.errorMgs = '';
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.service.logout();
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          if (this.selectedMenu == id) return ' selectedtypesListHorizontal primary';else return '';
        }
      }, {
        key: "isSelectedGetPrimaryColor",
        value: function isSelectedGetPrimaryColor(id) {
          if (this.selectedMenu == id) return this.GlobalFields.getPrimaryColorJson();else return undefined;
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
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'menuPage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menuPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/menuPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menuPage.scss */
      "./src/app/menuPage/menuPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], MenuPage);
    /***/
  },

  /***/
  "./src/app/menuPage/myListingsPage/myListingsPage.scss":
  /*!*************************************************************!*\
    !*** ./src/app/menuPage/myListingsPage/myListingsPage.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageMyListingsPageMyListingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n\n.section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n\n.statsSection {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 15px;\n  transition: box-shadow 0.25s ease-in-out;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);\n  border-radius: 3px;\n}\n\n.statsBox {\n  width: 100%;\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n  height: 60px;\n  padding: 15px;\n  margin-bottom: 10px;\n  align-items: center;\n  color: white;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n}\n\n.statsBox h2[dir=ltr] {\n  margin-right: 15px;\n}\n\n.statsBox h2[dir=rtl] {\n  margin-left: 15px;\n}\n\n.statsBox p {\n  margin-top: 25px;\n}\n\n.statsBox i {\n  color: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  font-size: 28px;\n}\n\n.statsBox i[dir=ltr] {\n  right: 50px;\n}\n\n.statsBox i[dir=rtl] {\n  left: 50px;\n}\n\n.numberStats {\n  text-align: center;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-around;\n  color: #757d83;\n}\n\n.numberStats p span {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  color: #383838;\n  display: flex;\n  /* -webkit-box-align: center; */\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s ease;\n}\n\n.animated-bars {\n  width: 2px;\n  background: rgba(0, 0, 0, 0.15);\n  height: 12px;\n  border-radius: 0;\n  position: relative;\n  transition: 0.2s ease;\n  margin: auto;\n}\n\n.statusListing {\n  padding: 5px;\n  border-radius: 50px;\n  background-color: #eeeeee;\n  /*position: absolute;\n  bottom: 5px;\n  z-index: 99999;*/\n  font-size: 7pt;\n  left: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9tZW51UGFnZS9teUxpc3RpbmdzUGFnZS9teUxpc3RpbmdzUGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9teUxpc3RpbmdzUGFnZS9teUxpc3RpbmdzUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBR0Esd0NBQUE7RUFHQSwyQ0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUdBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRjs7QURMQTtFQUNFLFVBQUE7QUNRRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUdBLGFBQUE7RUFDQSwrQkFBQTtFQUVBLG1CQUFBO0VBR0EsdUJBQUE7RUFFQSxxQkFBQTtBQ1NGOztBRE5BO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLFlBQUE7QUNTRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0E7O2tCQUFBO0VBR0EsY0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL21lbnVQYWdlL215TGlzdGluZ3NQYWdlL215TGlzdGluZ3NQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZWN0aW9uTGl0dGxlcntcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbkxpdHRsZXJ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGF0c1NlY3Rpb257XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMDcpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4wNyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuXG4uc3RhdHNCb3h7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG59XG4uc3RhdHNCb3ggaDJbZGlyPVwibHRyXCJde1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc3RhdHNCb3ggaDJbZGlyPVwicnRsXCJde1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5zdGF0c0JveCBwe1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnN0YXRzQm94IGkge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuMTUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5zdGF0c0JveCBpW2Rpcj1cImx0clwiXXtcbiAgcmlnaHQ6IDUwcHg7XG59XG4uc3RhdHNCb3ggaVtkaXI9XCJydGxcIl17XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5udW1iZXJTdGF0c3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGNvbG9yOiAjNzU3ZDgzO1xufVxuLm51bWJlclN0YXRzIHAgc3BhbntcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzM4MzgzODtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOyAqL1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlO1xufVxuXG4uYW5pbWF0ZWQtYmFycyB7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjE1KTtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlO1xuICBtYXJnaW46IGF1dG87XG59XG5cblxuLnN0YXR1c0xpc3Rpbmd7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICB6LWluZGV4OiA5OTk5OTsqL1xuICBmb250LXNpemU6IDdwdDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuIiwiLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2VjdGlvbkxpdHRsZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zZWN0aW9uTGl0dGxlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGF0c1NlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RhdHNCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHNCb3ggaDJbZGlyPWx0cl0ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zdGF0c0JveCBoMltkaXI9cnRsXSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc3RhdHNCb3ggcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5zdGF0c0JveCBpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uc3RhdHNCb3ggaVtkaXI9bHRyXSB7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG4uc3RhdHNCb3ggaVtkaXI9cnRsXSB7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5udW1iZXJTdGF0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogIzc1N2Q4Mztcbn1cblxuLm51bWJlclN0YXRzIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgKi9cbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uYW5pbWF0ZWQtYmFycyB7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdGF0dXNMaXN0aW5nIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHotaW5kZXg6IDk5OTk5OyovXG4gIGZvbnQtc2l6ZTogN3B0O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menuPage/myListingsPage/myListingsPage.ts":
  /*!***********************************************************!*\
    !*** ./src/app/menuPage/myListingsPage/myListingsPage.ts ***!
    \***********************************************************/

  /*! exports provided: MyListingsPage */

  /***/
  function srcAppMenuPageMyListingsPageMyListingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyListingsPage", function () {
      return MyListingsPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/dialogs/ngx */
    "./node_modules/@ionic-native/dialogs/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../tabs/modalAdd/modalAdd */
    "./src/app/tabs/modalAdd/modalAdd.ts");

    var MyListingsPage = /*#__PURE__*/function () {
      function MyListingsPage(service, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, router, modalCtrl) {
        var _this4 = this;

        _classCallCheck(this, MyListingsPage);

        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"];
        this.selectedTab = 1;
        this.currentPage = 1;
        this.loadingSection = false;
        this.loadingMoreData = false;
        this.noMoreMyListings = false;
        this.translate.get('ARE_YOU_SURE').subscribe(function (msg) {
          _this4.are_you_sure = msg;
        });
        this.translate.get('ARE_YOU_SURE_DELETING').subscribe(function (msg) {
          _this4.you_are_deleting = msg;
        });
        this.translate.get('ALERT_YES').subscribe(function (msg) {
          _this4.yes = msg;
        });
        this.translate.get('CANCEL').subscribe(function (msg) {
          _this4.cancel = msg;
        });
        this.translate.get('SUCCESS_MSG').subscribe(function (msg) {
          _this4.success_msg = msg;
        });
        this.translate.get('SUCCESS_DELETE_MSG').subscribe(function (msg) {
          _this4.success_delete_msg = msg;
        });
        this.translate.get('ALERT_CLOSE').subscribe(function (msg) {
          _this4.close_msg = msg;
        });
      }

      _createClass(MyListingsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.service.setWhiteBlackBackgroundStatusBar();

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.getMyListings();
            this.getCurrentUserInfo();
          } else {
            this.router.navigateByUrl('tabs/menuPage');
          }
        }
      }, {
        key: "getMyListings",
        value: function getMyListings() {
          var _this5 = this;

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingMoreData = true;
            this.service.getMyListings(this.currentPage).subscribe(function (data) {
              if (!_this5.myListings || _this5.currentPage == 1) _this5.myListings = [];
              _this5.myListings = _this5.myListings.concat(data);
              if (data && data.length < 20) _this5.noMoreMyListings = true;
              _this5.loadingMoreData = false;
            }, function (err) {
              _this5.service.refreshCookie();
            });
          }
        }
      }, {
        key: "loadMoreMyListings",
        value: function loadMoreMyListings() {
          this.loadingMoreData = true;
          this.currentPage++;
          this.getMyListings();
        }
      }, {
        key: "getCurrentUserInfo",
        value: function getCurrentUserInfo() {
          var _this6 = this;

          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.service.getCurrentUserInfo().subscribe(function (data) {
              _this6.currentUserInfo = data;
              _this6.loadingSection = false;
            }, function (err) {
              _this6.service.refreshCookie();
            });
          }
        }
      }, {
        key: "editListing",
        value: function editListing(listing) {
          var _this7 = this;

          this.GlobalFields.loadingSoft = true;
          this.service.getMyListingDetailsById(listing.id).subscribe(function (data) {
            if (data) {
              _this7.GlobalFields.listingToEdit = data;

              _this7.openAddModal();

              _this7.GlobalFields.loadingSoft = false;
            }
          }, function (error) {
            console.log(error);
            var msg = "";
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this7.GlobalFields.openAlert(_this7.alertController, "Error", "Error on web server", msg);

            _this7.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "deleteListing",
        value: function deleteListing(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var name, id, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    name = listing && listing.title && listing.title.rendered ? listing.title.rendered : "";
                    id = listing && listing.id ? listing.id : undefined;
                    _context.next = 4;
                    return this.alertController.create({
                      header: this.are_you_sure,
                      message: this.you_are_deleting + ' <strong>' + name + '</strong>',
                      buttons: [{
                        text: this.cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: this.yes,
                        handler: function handler() {
                          _this8.GlobalFields.loadingSoft = true;

                          _this8.service.deleteListing(listing.id).subscribe(function (data) {
                            _this8.GlobalFields.openSuccessAlert(_this8.alertController, _this8.success_msg, _this8.success_delete_msg, "", _this8.close_msg);

                            _this8.GlobalFields.loadingSoft = false;
                            _this8.currentPage = 1;

                            _this8.service.clearAllCache();

                            _this8.getMyListings();
                          }, function (error) {
                            console.log(error);
                            var msg = "";
                            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

                            _this8.GlobalFields.openAlert(_this8.alertController, "Error", "Error on web server", msg);

                            _this8.GlobalFields.loadingSoft = false;
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context.sent;
                    _context.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openAddModal",
        value: function openAddModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(this.listingToEdit);
                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: _tabs_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_11__["ModalAddNode"],
                      componentProps: {
                        a: undefined
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MyListingsPage;
    }();

    MyListingsPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    MyListingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'myListingsPage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./myListingsPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/myListingsPage/myListingsPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./myListingsPage.scss */
      "./src/app/menuPage/myListingsPage/myListingsPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], MyListingsPage);
    /***/
  },

  /***/
  "./src/app/menuPage/notificationsPage/notificationsPage.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/menuPage/notificationsPage/notificationsPage.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageNotificationsPageNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9tZW51UGFnZS9ub3RpZmljYXRpb25zUGFnZS9ub3RpZmljYXRpb25zUGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9ub3RpZmljYXRpb25zUGFnZS9ub3RpZmljYXRpb25zUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tZW51UGFnZS9ub3RpZmljYXRpb25zUGFnZS9ub3RpZmljYXRpb25zUGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbkxpdHRsZXJ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59IiwiLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2VjdGlvbkxpdHRsZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menuPage/notificationsPage/notificationsPage.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/menuPage/notificationsPage/notificationsPage.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppMenuPageNotificationsPageNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(service, translate, navController, inAppBrowser) {
        _classCallCheck(this, NotificationsPage);

        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.inAppBrowser = inAppBrowser;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.service.getNotifications();
      }

      _createClass(NotificationsPage, [{
        key: "openLink",
        value: function openLink(url) {
          console.log(url);
          var browser = this.inAppBrowser.create(url, '_blank'); // browser.close();
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }];
    };

    NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'notificationsPage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notificationsPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/notificationsPage/notificationsPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notificationsPage.scss */
      "./src/app/menuPage/notificationsPage/notificationsPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])], NotificationsPage);
    /***/
  },

  /***/
  "./src/app/menuPage/settingsPage/settingsPage.scss":
  /*!*********************************************************!*\
    !*** ./src/app/menuPage/settingsPage/settingsPage.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageSettingsPageSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbW1hbnVlbGtldGNoYWJlcGEvRGVza3RvcC9jdXN0b21saXN0aW5nYXBwX3YxXzZfMi9hcHAvc3JjL2FwcC9tZW51UGFnZS9zZXR0aW5nc1BhZ2Uvc2V0dGluZ3NQYWdlLnNjc3MiLCJzcmMvYXBwL21lbnVQYWdlL3NldHRpbmdzUGFnZS9zZXR0aW5nc1BhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbWVudVBhZ2Uvc2V0dGluZ3NQYWdlL3NldHRpbmdzUGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uc2VjdGlvbkxpdHRsZXJ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59IiwiLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2VjdGlvbkxpdHRsZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menuPage/settingsPage/settingsPage.ts":
  /*!*******************************************************!*\
    !*** ./src/app/menuPage/settingsPage/settingsPage.ts ***!
    \*******************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppMenuPageSettingsPageSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/dialogs/ngx */
    "./node_modules/@ionic-native/dialogs/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/theme.service */
    "./src/app/services/theme.service.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(service, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, themeService, locationService, inAppBrowser, appVersion) {
        var _this9 = this;

        _classCallCheck(this, SettingsPage);

        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.themeService = themeService;
        this.locationService = locationService;
        this.inAppBrowser = inAppBrowser;
        this.appVersion = appVersion;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.appVersionNumber = '';
        this.navigateAsRoot = false;
        this.appVersion.getVersionNumber().then(function (value) {
          _this9.appVersionNumber = value;
        })["catch"](function (err) {
          console.log(err);
        });
      }

      _createClass(SettingsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //To avoid showing the back button if the navigation to this page is as root page
          this.navigateAsRoot = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].navigateAsRoot;
          _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].navigateAsRoot = false;
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          var _this10 = this;

          this.service.clearAllCache();
          this.GlobalFields.loading = true;
          setTimeout(function () {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].init(_this10.service, _this10.dialogs, _this10.platform, _this10.geolocation, _this10.nativeGeocoder, _this10.alertController, _this10.translate, _this10.themeService, _this10.locationService);
          }, 200);
        }
      }, {
        key: "setLang",
        value: function setLang(lang) {
          _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].setLang(lang, this.translate);

          _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loading = true;
          setTimeout(function () {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loading = false;
          }, 100);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navController.pop();
        }
      }, {
        key: "openLink",
        value: function openLink(url) {
          console.log(url);
          var browser = this.inAppBrowser.create(url, '_blank'); // browser.close();
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"]
      }];
    };

    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./settingsPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/settingsPage/settingsPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./settingsPage.scss */
      "./src/app/menuPage/settingsPage/settingsPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=menuPage-menuPage-module-es5.js.map