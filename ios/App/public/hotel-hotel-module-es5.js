function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotel-hotel-module"], {
  /***/
  "./src/app/hotel/hotel.module.ts":
  /*!***************************************!*\
    !*** ./src/app/hotel/hotel.module.ts ***!
    \***************************************/

  /*! exports provided: HotelPageModule */

  /***/
  function srcAppHotelHotelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelPageModule", function () {
      return HotelPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hotel_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hotel.page */
    "./src/app/hotel/hotel.page.ts");

    var HotelPageModule = function HotelPageModule() {
      _classCallCheck(this, HotelPageModule);
    };

    HotelPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HotelPageModule
    });
    HotelPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HotelPageModule_Factory(t) {
        return new (t || HotelPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _hotel_page__WEBPACK_IMPORTED_MODULE_5__["HotelPage"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HotelPageModule, {
        declarations: [_hotel_page__WEBPACK_IMPORTED_MODULE_5__["HotelPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
            path: '',
            component: _hotel_page__WEBPACK_IMPORTED_MODULE_5__["HotelPage"]
          }])],
          declarations: [_hotel_page__WEBPACK_IMPORTED_MODULE_5__["HotelPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/hotel/hotel.page.ts":
  /*!*************************************!*\
    !*** ./src/app/hotel/hotel.page.ts ***!
    \*************************************/

  /*! exports provided: HotelPage */

  /***/
  function srcAppHotelHotelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelPage", function () {
      return HotelPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HotelPage_ion_item_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r11.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.note, " ");
      }
    }

    var HotelPage = /*#__PURE__*/function () {
      function HotelPage() {
        _classCallCheck(this, HotelPage);

        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];

        for (var i = 1; i < 11; i++) {
          this.items.push({
            title: 'Item ' + i,
            note: 'This is item #' + i,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
        }
      }

      _createClass(HotelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotelPage;
    }();

    HotelPage.ɵfac = function HotelPage_Factory(t) {
      return new (t || HotelPage)();
    };

    HotelPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HotelPage,
      selectors: [["app-list"]],
      decls: 9,
      vars: 1,
      consts: [["color", "primary"], ["slot", "start"], [4, "ngFor", "ngForOf"], ["slot", "start", 3, "name"], ["slot", "end", 1, "item-note"]],
      template: function HotelPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hotel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HotelPage_ion_item_8_Template, 5, 3, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: 'hotel.page.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=hotel-hotel-module-es5.js.map