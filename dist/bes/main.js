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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/agriculture.service.ts":
/*!****************************************!*\
  !*** ./src/app/agriculture.service.ts ***!
  \****************************************/
/*! exports provided: AgricultureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultureService", function() { return AgricultureService; });
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


var AgricultureService = /** @class */ (function () {
    function AgricultureService(http) {
        this.http = http;
        this.apiRoot = "http://localhost:3000/static_pages/help";
        this.apiRoot1 = "http://localhost:3000/rainfalls";
    }
    AgricultureService.prototype.barchart = function () {
        var _this = this;
        var url = "" + this.apiRoot;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(_this.j);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Basic Column Chart in Angular"
                },
                data: [{
                        type: "column",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    AgricultureService.prototype.pie = function () {
        var _this = this;
        var url = "" + this.apiRoot;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Basic Column Chart in Angular"
                },
                data: [{
                        type: "pie",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    AgricultureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AgricultureService);
    return AgricultureService;
}());



/***/ }),

/***/ "./src/app/agriculture/agriculture.component.css":
/*!*******************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/agriculture/agriculture.component.html":
/*!********************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"clearfix pageTitleSection\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"pageTitle\">\n            <h2>Rainfall Data</h2>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"clearfix bg-light pr\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-xs-12\">\n            <div class=\"categoryBox\">\n              <div class=\"contactSelect\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(data)\">\n                <div class=\"col-sm-2\">\n                    <select  class='select-option' required [(ngModel)]='data.districts' name=\"districts\">\n                        <option [ngValue]=\"undefined\" disabled  selected> District  </option>\n                        <option *ngFor='let option of Districts' [ngValue]=\"option\">{{option}}</option>\n                    </select>\n                </div>\n\n                <div class=\"col-sm-2\">\n                    <select class='select-option' required [(ngModel)]='data.years' name=\"years\">\n                        <option [ngValue]=\"undefined\" disabled  selected> Year  </option>\n                        <option class='option' *ngFor='let option of years' [ngValue]=\"option\">{{option}}</option>\n                    </select>\n                </div>\n\n\n                <div class=\"col-sm-2\">\n                        <select class='select-option' required [(ngModel)]='data.view' name=\"view\">\n                            <option [ngValue]=\"undefined\" disabled  selected> Views  </option>\n                            <option class='option' *ngFor='let option of views' [ngValue]=\"option\">{{option}}</option>\n                        </select>\n                    </div>\n                <div class=\"col-sm-2\">\n                        <select class='select-option' required [(ngModel)]='data.rain_fall_type' name=\"rain_fall_type\">\n                            <option [ngValue]=\"undefined\" disabled  selected> Rain Fall Type  </option>\n                            <option class='option' *ngFor='let option of rain_fall_type' [ngValue]=\"option\">{{option}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"col-sm-2\">\n                            <select class='select-option' required [(ngModel)]='data.Comparison' name=\"Comparison\">\n                                <option [ngValue]=\"undefined\" disabled  selected> Comparison  </option>\n                                <option class='option' *ngFor='let option of Comparison' [ngValue]=\"option\">{{option}}</option>\n                            </select>\n                        </div>\n                <div class=\"col-sm-2\">\n                        <!-- <button  type=\"button\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Submit</button> -->\n                        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n                </form>\n                    <div style=\"clear: both;\"> </div>\t\t\t\n                    <div *ngIf=\"visbile_chart\" id=\"chartContainer\" class=\"ftr\" style=\"min-height: 300px; width: 100%; margin-top: 30px;\"></div>\n                   <!-- <h2>{{title}}</h2>\n                    <object *ngIf=\"visbile\" data=\"assets/img/biharmap.svg\" id=\"biharsvg\" type=\"image/svg+xml\"></object>\n                    \n                    <div style=\"position: relative;\"> \n                    <div class=\"fil-box\">\n                        <div><span class=\"dot yellow\"></span>14.0% and Over</div>\n                        <div><span class=\"dot orange\"></span>12.0% to 13.9%</div>\n                        <div><span class=\"dot red\"></span>10.0% to 11.9%</div>\n                        <div><span class=\"dot light-green\"></span>8.0% to 9.9%</div>\n                        <div><span class=\"dot mid-green\"></span>6.0% to 5.9%</div>\n                        <div><span class=\"dot dark-green\"></span>3.9% or lower</div>\n                        </div>\n                    </div> -->\n                    <div *ngIf=\"visbile\">\n                            <h2>{{title}}</h2>\n                        <app-svgcomponent ></app-svgcomponent>\n                    </div>\n                   \n                    <app-modal></app-modal>\n                    <!-- <object data=\"assets/img/bihar.svg\" id=\"biharsvg\" type=\"image/svg+xml\"></object> -->\n                  \n                </div>\n             </div>\n         </div>\n     </div>\n</div>\n\n</section>"

/***/ }),

/***/ "./src/app/agriculture/agriculture.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.ts ***!
  \******************************************************/
/*! exports provided: AgricultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultureComponent", function() { return AgricultureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/svg.service */ "./src/app/services/svg.service.ts");
/* harmony import */ var _services_agriculture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/agriculture.service */ "./src/app/services/agriculture.service.ts");
/* harmony import */ var _data_districts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/districts */ "./src/app/data/districts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgricultureComponent = /** @class */ (function () {
    function AgricultureComponent(AgricultureService, SvgService) {
        this.AgricultureService = AgricultureService;
        this.SvgService = SvgService;
        // title:string;
        this.title = "";
        this.Districts = _data_districts__WEBPACK_IMPORTED_MODULE_3__["Districts"];
        this.visbile = false;
        this.visbile_chart = true;
        this.years = [2016, 2017];
        this.views = ["Graph", "Trend Line", "Map View", "Table"];
        this.rain_fall_type = ["All", "Winter Rain", "Hot Weather Rain", "South West Monsoon Rain", "North West Monsoon Rain"];
        this.Comparison = ["None", "Bihar vs District"];
        this.data = {};
        // this.AgricultureService.barchart();
        // this.SvgService.barchart1("Muzaffarpur",2016);
    }
    AgricultureComponent.prototype.onSubmit = function (user) {
        if (user.view == "Graph") {
            this.visbile_chart = true;
            this.visbile = false;
            // this.AgricultureService.pie();
            if (user.districts == "All") {
                this.AgricultureService.bar_chart_all(user.districts, user.years, user.rain_fall_type);
            }
            else if (user.Comparison == "Bihar vs District") {
                this.AgricultureService.barchart_bihar_vs_district(user.years, user.districts, user.rain_fall_type, user.Comparison);
            }
            else {
                this.SvgService.barchart1(user.districts, user.years, user.rain_fall_type);
            }
        }
        else if (user.view == "Trend Line") {
            this.visbile_chart = true;
            this.visbile = false;
            if (user.districts == "All") {
                this.AgricultureService.trend_line_all(user.districts, user.years, user.rain_fall_type, user.view);
            }
            else if (user.Comparison == "Bihar vs District") {
                this.AgricultureService.trend_line_bihar_vs_district(user.years, user.districts, user.rain_fall_type, user.Comparison);
            }
            else {
                this.SvgService.trend_line(user.districts, user.years, user.rain_fall_type);
            }
        }
        else if (user.view == "Table") {
            this.visbile_chart = true;
            this.visbile = false;
            this.SvgService.table(user.years, user.districts, user.rain_fall_type, user.Comparison);
        }
        else if (user.view == "Map View") {
            var that_1 = this;
            // this.AgricultureService.barchart();
            this.visbile_chart = false;
            this.visbile = true;
            this.title = user.rain_fall_type;
            // this.SvgService.test("echamparan");
            setTimeout(function () {
                //  that.SvgService.test("echamparan");
                that_1.SvgService.svg();
                var u = "wchamparan";
                that_1.SvgService.test(u, user.view, user.rain_fall_type, user.years);
            }, 500);
            // this.SvgService.svg();
        }
        console.log(user);
    };
    // test(a) {
    //   let map = document.getElementById("biharsvg") as HTMLObjectElement;
    //   let svgDoc = map.contentDocument; // should be fine
    //   let echamparan = svgDoc.getElementById(a);
    //   echamparan.classList.add("mystyle");
    //   console.log(echamparan); 
    // }
    AgricultureComponent.prototype.ngOnInit = function () {
        // this.SvgService.barchart("wchamparan");
        // this.SvgService.svg();
    };
    AgricultureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agriculture',
            template: __webpack_require__(/*! ./agriculture.component.html */ "./src/app/agriculture/agriculture.component.html"),
            styles: [__webpack_require__(/*! ./agriculture.component.css */ "./src/app/agriculture/agriculture.component.css")]
        }),
        __metadata("design:paramtypes", [_services_agriculture_service__WEBPACK_IMPORTED_MODULE_2__["AgricultureService"], _services_svg_service__WEBPACK_IMPORTED_MODULE_1__["SvgService"]])
    ], AgricultureComponent);
    return AgricultureComponent;
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

module.exports = "<div class=\"main-wrapper\">\n  <!-- HEADER -->\n  <!-- TOP INFO BAR -->\n<app-header></app-header>\n<!-- ICONS SECTION -->\n<router-outlet></router-outlet>\n\n<!-- FOOTER -->\n<app-footer></app-footer>\n</div>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maincontent/maincontent.component */ "./src/app/maincontent/maincontent.component.ts");
/* harmony import */ var _route_definitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-definitions */ "./src/app/route-definitions.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./agriculture/agriculture.component */ "./src/app/agriculture/agriculture.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _svgcomponent_svgcomponent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svgcomponent/svgcomponent.component */ "./src/app/svgcomponent/svgcomponent.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_7__["MaincontentComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"],
                _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_12__["AgricultureComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
                _svgcomponent_svgcomponent_component__WEBPACK_IMPORTED_MODULE_14__["SvgcomponentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_route_definitions__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/districts.ts":
/*!***********************************!*\
  !*** ./src/app/data/districts.ts ***!
  \***********************************/
/*! exports provided: Districts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Districts", function() { return Districts; });
var Districts = [
    "All",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Bihar",
    "Buxar",
    "Darbhanga",
    "E. Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohats",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "W. Champaran"
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <!-- FOOTER INFO --><!-- COPY RIGHT -->\n  <div class=\"clearfix copyRight\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"copyRightWrapper\">\n            <div class=\"row\">\n              \n              <div class=\"col-sm-12 col-xs-12\">\n                <div class=\"copyRightText\">\n                  <p>Copyright © 2018. All Rights Reserved by <a href=\"#\">Bihar Economic Survey</a></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</footer>"

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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper navbarWhite\">\n\n  <div class=\"container-fluid header-bg\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-sm-4 col-xs-6 header-left empty\">empty\n      </div>\n      <div class=\"col-lg-8 col-sm-8 col-xs-6 header-right empty\">empty\n      </div>\n    </div>\n  </div>\n\n  <!-- NAVBAR -->\n  <nav id=\"menuBar\" class=\"navbar navbar-default lightHeader\" role=\"navigation\">\n\n    <div class=\"container\">\n\n      <div class=\"row\"> \n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>  \n        <div class=\"col-sm-3 col-xs-12\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n\n         \n          <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/img/logo-blue.png\" alt=\"logo\" class=\"bihar-logo\"></a>\n\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n         <div class=\"col-sm-6 col-xs-12\">\n         \n         <div class=\"page-header text-center\">\n  <h2>Bihar Economic Survey <small>Government of Bihar</small></h2>\n</div>\n        \n        </div>\n        <div class=\"col-sm-3 col-xs-12\">\n        <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/img/logo-ind-gov.png\" alt=\"logo\" class=\"india-logo\"></a>\n        </div>\n    \n    \n      </div>\n      \n    </div>\n  \n  \n <div class=\"col-sm-12\"> <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active dropdown singleDrop\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">home <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"index.html\">Map Version</a></li>\n                  <li><a href=\"index-2.html\">Travel Version</a></li>\n                  <li><a href=\"index-3.html\">Automobile Version</a></li>\n                </ul>\n            </li>\n            <li class=\" dropdown megaDropMenu\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Listing <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n              <ul class=\"row dropdown-menu\">\n                <li class=\"col-sm-4 col-xs-12\">\n                  <ul class=\"list-unstyled\">\n                      <li><h5>listing Grids</h5></li>\n                      <li><a href=\"category-grid.html\">Listing Grid Left</a></li>\n                      <li><a href=\"category-grid-right.html\">Listing Grid Right</a></li>\n                      <li><a href=\"category-grid-full.html\">Listing Grid Fullwidth</a></li>\n                      <li><h5>listing lists</h5></li>\n                      <li><a href=\"category-list-left.html\">Listing list Left</a></li>\n                      <li><a href=\"category-list-right.html\">Listing list Right</a></li>\n                      <li><a href=\"category-list-full.html\">Listing list Full</a></li>\n                  </ul>\n                </li>\n                <li class=\"col-sm-4 col-xs-12\">\n                  <ul class=\"list-unstyled\">\n                      <li><h5>listing Sidebar Map</h5></li>\n                      <li><a href=\"listing-sidebar-map-left.html\">Listing Sidebar Map left</a></li>\n                      <li><a href=\"listing-sidebar-map-right.html\">Listing Sidebar Map right</a></li>\n                      <li><a href=\"listing-sidebar-map-full.html\">Listing Sidebar Map Full</a></li>\n                      <li><h5>listing Details</h5></li>\n                      <li><a href=\"listing-details-left.html\">Listing Details Left</a></li>\n                      <li><a href=\"listing-details-right.html\">Listing Details Right</a></li>\n                      <li><a href=\"listing-details-full.html\">Listing Details Full</a></li>\n                  </ul>\n                </li>\n                <li class=\"col-sm-4 col-xs-12\">\n                  <ul class=\"list-unstyled\">\n                      <li class=\"mega-img\">\n                          <a href=\"#\"><img src=\"/assets/img/works/works-big-3.png\" alt=\"\"></a>\n                      </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li class=\" dropdown singleDrop\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">pages <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n              <ul class=\"dropdown-menu dropdown-menu-left\">\n                <li><a href=\"contact-us.html\">Contact Us</a></li>\n                <li><a href=\"terms-of-services.html\">Terms and Conditions</a></li>\n                <li><a href=\"sign-up.html\">Create Account</a></li>\n                <li><a href=\"login.html\">Login</a></li>\n                <li><a href=\"pricing-table.html\">Pricing</a></li>\n                <li><a href=\"payment-process.html\">Payment</a></li>\n                <li><a href=\"how-it-works.html\">How It Works</a></li>\n              </ul>\n            </li>\n            <li class=\"\"><a href=\"blog.html\">blog </a></li>\n            <li class=\" dropdown singleDrop\">\n              <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">admin <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n              <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li><a href=\"dashboard.html\">Dashboard</a></li>\n                <li><a href=\"add-listings.html\">Add Listing</a></li>\n                <li><a href=\"edit-listings.html\">Edit Listing</a></li>\n                <li><a href=\"listings.html\">My Listings</a></li>\n                <li><a href=\"profile.html\">My Profile</a></li>\n                <li><a href=\"oders.html\">My Orders</a></li>\n              </ul>\n            </li>\n          </ul>\n        </div> </div>\n  </nav>\n</div>"

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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/maincontent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maincontent/maincontent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maincontent/maincontent.component.html":
/*!********************************************************!*\
  !*** ./src/app/maincontent/maincontent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"clearfix interestArea filterProtfolio\">\n  <!-- BUTTON SECTION -->\n  <div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"filter-container isotopeFilters\">\n          <ul class=\"list-inline filter\">\n            <li class=\"active\"><a href=\"#\" data-filter=\"*\">2016 - 17</a></li>\n            <li><a href=\"#\" data-filter=\".recentItem\">2017 - 18</a></li>\n            <li><a href=\"#\" data-filter=\".featuredItem\">2018 - 19</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"test\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-profits\"></i>\n            Economy Overview\n          </span>\n        </a>\n      </div>\n      <div class=\"col-sm-3 col-xs-6\">\n         \n        <a routerLink=\"/agriculture\"  class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-rupee\"></i>\n           Rain Fall\n          </span>\n        </a>\n      </div>\n    <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"category-grid.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-marijuana-plantation\"></i>\n            Agriculture and Allied\n          </span>\n        </a>\n      </div>\n        <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"category-list-left.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-industry\"></i>\n            Enterprises\n          </span>\n        </a>\n      </div>\n    <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"category-grid-right.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-skyline\"></i>\n            Infrastructure\n          </span>\n        </a>\n      </div>\n          <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"category-list-right.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-light-bulb\"></i>\n            Energy\n          </span>\n        </a>\n      </div>\n        <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"category-grid-full.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-house\"></i>\n            Rural Development\n          </span>\n        </a>\n      </div>\n        <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"all-business.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-office-block\"></i>\n            Urban Development\n          </span>\n        </a>\n      </div>\n          <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"all-business.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-money\"></i>\n            Banking and Allied\n          </span>\n        </a>\n      </div>\n        <div class=\"col-sm-3 col-xs-6\">\n        <a href=\"all-business.html\" class=\"interestContent\">\n          <span>\n            <i class=\"flaticon flaticon-customer\"></i>\n            Human Development\n          </span>\n        </a>\n      </div>\n    </div>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/maincontent/maincontent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maincontent/maincontent.component.ts ***!
  \******************************************************/
/*! exports provided: MaincontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincontentComponent", function() { return MaincontentComponent; });
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

var MaincontentComponent = /** @class */ (function () {
    function MaincontentComponent() {
    }
    MaincontentComponent.prototype.ngOnInit = function () {
    };
    MaincontentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maincontent',
            template: __webpack_require__(/*! ./maincontent.component.html */ "./src/app/maincontent/maincontent.component.html"),
            styles: [__webpack_require__(/*! ./maincontent.component.css */ "./src/app/maincontent/maincontent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaincontentComponent);
    return MaincontentComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal\">\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n        <span id =\"close\" class=\"close\">&times;</span>\n        <div  id=\"chartContainer1\" class=\"ftr\" style=\"height: 300px; width: 100%; margin-top: 30px;\"></div>\n\n    </div>\n</div> "

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/svg.service */ "./src/app/services/svg.service.ts");
/* harmony import */ var _agriculture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agriculture.service */ "./src/app/agriculture.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent(AgricultureService, SvgService) {
        this.AgricultureService = AgricultureService;
        this.SvgService = SvgService;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_agriculture_service__WEBPACK_IMPORTED_MODULE_2__["AgricultureService"], _services_svg_service__WEBPACK_IMPORTED_MODULE_1__["SvgService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/route-definitions.ts":
/*!**************************************!*\
  !*** ./src/app/route-definitions.ts ***!
  \**************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maincontent/maincontent.component */ "./src/app/maincontent/maincontent.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agriculture/agriculture.component */ "./src/app/agriculture/agriculture.component.ts");



var appRoutes = [
    {
        path: '',
        component: _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_0__["MaincontentComponent"]
    },
    {
        path: 'test',
        component: _test_test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"]
    },
    {
        path: 'agriculture',
        component: _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_2__["AgricultureComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/agriculture.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/agriculture.service.ts ***!
  \*************************************************/
/*! exports provided: AgricultureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultureService", function() { return AgricultureService; });
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


var AgricultureService = /** @class */ (function () {
    function AgricultureService(http) {
        this.http = http;
        this.apiRoot = "http://localhost:3000/static_pages/help";
        // private apiRoot1: string = "http://localhost:3000/rainfalls";
        this.apiRoot1 = "http://bihar.aaupf.org//rainfalls";
    }
    AgricultureService.prototype.barchart = function () {
        var _this = this;
        var url = "" + this.apiRoot;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(_this.j);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Basic Column Chart in Angular"
                },
                data: [{
                        type: "column",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    AgricultureService.prototype.trend_line_bihar_vs_district = function (year, district, rain_fall_type, compare) {
        var _this = this;
        var url = this.apiRoot1 + "/test?search=" + district + "&year=" + year + "&rain_fall_type=" + rain_fall_type + "&compare=" + compare;
        // let url = `${this.apiRoot}`;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(res);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: rain_fall_type + " " + year
                },
                data: [{
                        type: "line",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    AgricultureService.prototype.barchart_bihar_vs_district = function (year, district, rain_fall_type, compare) {
        var _this = this;
        // let url = `${this.apiRoot}`;
        var url = this.apiRoot1 + "/test?search=" + district + "&year=" + year + "&rain_fall_type=" + rain_fall_type + "&compare=" + compare;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(_this.j);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: rain_fall_type + " " + year
                },
                data: [{
                        type: "column",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    AgricultureService.prototype.trend_line_all = function (data, year, rain_fall_type, views) {
        var _this = this;
        var url = this.apiRoot1 + "/test?search=" + data + "&year=" + year + "&rain_fall_type=" + rain_fall_type + "&views=" + views;
        // let url = `${this.apiRoot}`;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            var y = _this.j;
            function compareDataPointX(dataPoint1, dataPoint2) {
                return dataPoint1.y - dataPoint2.y;
            }
            var z = [
                { y: 1, label: "Khagaria" },
                { y: 2, label: "Khagaria" }
            ];
            if (rain_fall_type == "All") {
                var bar_data = y;
            }
            else {
                var bar_data = [
                    {
                        type: "line",
                        dataPoints: y
                    }
                ];
            }
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: rain_fall_type + " " + year
                },
                data: bar_data
            });
            chart.options.data[0].dataPoints.sort(compareDataPointX);
            chart.render();
        });
    };
    AgricultureService.prototype.bar_chart_all = function (data, year, rain_fall_type) {
        var _this = this;
        // let url = `${this.apiRoot}`;
        var url = this.apiRoot1 + "/test?search=" + data + "&year=" + year + "&rain_fall_type=" + rain_fall_type;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            var y = _this.j;
            function compareDataPointX(dataPoint1, dataPoint2) {
                return dataPoint1.y - dataPoint2.y;
            }
            var z = [
                { y: 1, label: "Khagaria" },
                { y: 2, label: "Khagaria" }
            ];
            if (rain_fall_type == "All") {
                var bar_data = y;
            }
            else {
                var bar_data = [
                    {
                        type: "column",
                        dataPoints: y
                    }
                ];
            }
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: rain_fall_type + " " + year
                },
                data: bar_data
            });
            chart.options.data[0].dataPoints.sort(compareDataPointX);
            chart.render();
        });
    };
    AgricultureService.prototype.pie = function () {
        var _this = this;
        var url = "" + this.apiRoot;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Basic Column Chart in Angular"
                },
                data: [{
                        type: "pie",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    AgricultureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AgricultureService);
    return AgricultureService;
}());



/***/ }),

/***/ "./src/app/services/svg.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/svg.service.ts ***!
  \*****************************************/
/*! exports provided: SvgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgService", function() { return SvgService; });
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


var SvgService = /** @class */ (function () {
    function SvgService(http) {
        this.http = http;
        this.apiRoot = "http://localhost:3000/static_pages/help";
        // private apiRoot1: string = "http://localhost:3000/rainfalls";
        this.apiRoot1 = "http://bihar.aaupf.org//rainfalls";
    }
    SvgService.prototype.test = function (a, views, rain_fall_type, year) {
        var _this = this;
        var url = this.apiRoot1 + "/test?views=" + views + '&rain_fall_type=' + rain_fall_type + '&year=' + year;
        console.log(url);
        // title;
        var title = rain_fall_type;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            _this.map_districts(_this.j);
        });
        // District.classList.add("mystyle");
        // console.log(url);
    };
    SvgService.prototype.map_districts = function (l) {
        var map = document.getElementById("biharsvg");
        var svgDoc = map.contentDocument; // should be fine
        // let District = svgDoc.getElementById(a);
        var dis = "";
        var dis_y = "";
        var dis_w = "";
        var dis_z = "";
        // console.log(dis);
        for (var k in l) {
            if (l.hasOwnProperty(k)) {
                if (l[k].below_min) {
                    for (var index = 0; index < l[k].below_min.length; index++) {
                        var element = l[k].below_min[index];
                        //  console.log(element.label+ "Min");
                        var string = element.label.toLowerCase();
                        if (index == l[k].below_min.length - 1) {
                            dis += "#" + string + "";
                        }
                        else {
                            dis += "#" + string + ",";
                        }
                    }
                }
                else if (l[k].min) {
                    for (var index = 0; index < l[k].min.length; index++) {
                        var element = l[k].min[index];
                        if (element.label == "W. Champaran") {
                            var string = "wchamparan";
                        }
                        else {
                            var string = element.label.toLowerCase();
                        }
                        if (index == l[k].min.length - 1) {
                            dis_y += "#" + string + "";
                        }
                        else {
                            dis_y += "#" + string + ",";
                        }
                    }
                }
                else if (l[k].blow_max) {
                    for (var index = 0; index < l[k].blow_max.length; index++) {
                        var element = l[k].blow_max[index];
                        if (element.label == "E. Champaran") {
                            var string = "echamparan";
                        }
                        else {
                            var string = element.label.toLowerCase();
                        }
                        if (index == l[k].blow_max.length - 1) {
                            dis_w += "#" + string + "";
                        }
                        else {
                            dis_w += "#" + string + ",";
                        }
                    }
                }
                else if (l[k].max) {
                    for (var index = 0; index < l[k].max.length; index++) {
                        var element = l[k].max[index];
                        var string = element.label.toLowerCase();
                        if (index == l[k].max.length - 1) {
                            dis_z += "#" + string + "";
                        }
                        else {
                            dis_z += "#" + string + ",";
                        }
                    }
                }
                else {
                }
            }
        }
        var de = svgDoc.querySelectorAll(".fil0");
        var x = svgDoc.querySelectorAll(dis);
        var y = svgDoc.querySelectorAll(dis_y);
        var w = svgDoc.querySelectorAll(dis_w);
        var z = svgDoc.querySelectorAll(dis_z);
        // var i;
        // for (i = 0; i < x.length; i++) {
        //     x[i].classList.add("mystyle");
        // }
        // console.log(dis);
        // console.log(dis_y + "Second");
        // console.log(dis_w) + "Third";
        // console.log(dis_z) + "Forth";
        var yellow;
        var orange;
        var green;
        var red;
        yellow = "Yellow";
        orange = "Orange";
        green = "Green";
        red = "Red";
        var i;
        // // for (i = 0; i < de.length; i++) {
        // //     x[i].classList.remove(yellow);
        // // }
        for (i = 0; i < de.length; i++) {
            console.log(de[i].classList.item(0));
            // console.log(i);
            de[i].classList.remove("Red", "Yellow", "Orange", "Green");
        }
        this.color_map(x, yellow);
        this.color_map(y, orange);
        this.color_map(w, green);
        this.color_map(z, red);
        // this.color_map(y,color)
    };
    SvgService.prototype.color_map = function (x, color) {
        // let x = svgDoc.querySelectorAll(dis);
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.add(color);
        }
    };
    SvgService.prototype.svg = function () {
        var that = this;
        console.log("Test");
        var a = document.getElementById("biharsvg");
        var svgDoc = a.contentDocument;
        var wchamparan = svgDoc.getElementById("wchamparan");
        var modal = document.getElementById('myModal');
        var wchamparan1 = svgDoc.getElementById("wchamparan").getAttribute("id");
        ;
        var span = document.getElementById("close");
        span.onclick = function () {
            modal.style.display = "none";
        };
        wchamparan.onclick = function () {
            modal.style.display = "block";
            that.barmodal(wchamparan1);
        };
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        //   let a = document.getElementById("biharsvg")  as HTMLObjectElement;
        //   a.addEventListener("load", () =>{
        //        var svgDoc = a.contentDocument; 
        //        var wchamparan = svgDoc.getElementById("wchamparan");
        //        wchamparan.onclick = ()  =>{
        //         this.bar()
        //         console.log("hello");
        //      }
        // })
    };
    SvgService.prototype.svg1 = function () {
        var that = this;
        var a = document.getElementById("biharsvg");
        var svgDoc = a.contentDocument;
        var wchamparan = svgDoc.getElementById("wchamparan");
        wchamparan.onclick = function () {
            alert("hello");
        };
    };
    SvgService.prototype.bar = function () {
        console.log("Bar");
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Basic Column Chart in Angular"
            },
            data: [{
                    type: "column",
                    dataPoints: [
                        { y: 71, label: "Apple" },
                        { y: 55, label: "Mango" },
                        { y: 50, label: "Orange" },
                        { y: 65, label: "Banana" },
                        { y: 95, label: "Pineapple" },
                        { y: 68, label: "Pears" },
                        { y: 28, label: "Grapes" },
                        { y: 34, label: "Lychee" },
                        { y: 14, label: "Jackfruit" }
                    ]
                }]
        });
        chart.render();
    };
    SvgService.prototype.trend_line = function (data, year, rain_fall_type) {
        var _this = this;
        var url = this.apiRoot1 + "/test?search=" + data + "&year=" + year + "&rain_fall_type=" + rain_fall_type;
        // let url = `${this.apiRoot}`;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(res);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: rain_fall_type + " " + year
                },
                data: [{
                        type: "line",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    SvgService.prototype.table = function (year, district, rain_fall_type, compare) {
        var _this = this;
        var url = this.apiRoot1 + "/test?search=" + district + "&year=" + year + "&rain_fall_type=" + rain_fall_type + "&compare=" + compare;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(res);
            var chart = new CanvasJS.Chart("chartContainer", {
                data: [
                    {
                        type: "column",
                        dataPoints: _this.j
                    }
                ]
            });
            _this.createTable(chart, rain_fall_type, year);
        });
    };
    SvgService.prototype.barmodal = function (abc) {
        if (abc == "wchamparan") {
            this.barchart(abc);
        }
        else {
            alert("ahhh");
        }
        // let chart = new CanvasJS.Chart("chartContainer1", {
        //   animationEnabled: true,
        //   exportEnabled: true,
        //   title: {
        //     text: "Basic Column Chart in Angular"
        //   },
        //   data: [{
        //     type: "column",
        //     dataPoints: [
        //       { y: 71, label: "Apple" },
        //       { y: 55, label: "Mango" },
        //       { y: 50, label: "Orange" },
        //       { y: 65, label: "Banana" },
        //       { y: 95, label: "Pineapple" },
        //       { y: 68, label: "Pears" },
        //       { y: 28, label: "Grapes" },
        //       { y: 34, label: "Lychee" },
        //       { y: 14, label: "Jackfruit" }
        //     ]
        //   }]
        // });
        // chart.render();
    };
    SvgService.prototype.barchart = function (data) {
        var _this = this;
        var url = this.apiRoot + "?search=" + data;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            var chart = new CanvasJS.Chart("chartContainer1", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: data
                },
                data: [{
                        type: "column",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    SvgService.prototype.barchart1 = function (data, year, rain_fall_type) {
        var _this = this;
        var url = this.apiRoot1 + "/test?search=" + data + "&year=" + year + "&rain_fall_type=" + rain_fall_type;
        // let url = `${this.apiRoot}`;
        console.log(url);
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            console.log(res);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: rain_fall_type + " " + year
                },
                data: [{
                        type: "column",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    SvgService.prototype.pie = function () {
        var _this = this;
        var url = "" + this.apiRoot;
        this.http.get(url).
            subscribe(function (res) {
            _this.j = res;
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    text: "Basic Column Chart in Angular"
                },
                data: [{
                        type: "pie",
                        dataPoints: _this.j
                    }]
            });
            chart.render();
        });
    };
    SvgService.prototype.createTable = function (chart, rain_fall_type, year) {
        var table = document.createElement("TABLE");
        var row, header, cell1, cell2;
        var data = chart.options.data;
        table.style.border = "1px solid #000";
        header = table.createTHead();
        row = header.insertRow(0);
        table.setAttribute("id", "myId");
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.style.border = "1px solid #000";
        cell2.style.border = "1px solid #000";
        cell1.innerHTML = "<b>Value</b>";
        cell2.innerHTML = "<b>Districts</b>";
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].dataPoints.length; j++) {
                console.log(data[i].dataPoints[j].y);
                row = table.insertRow(1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.style.border = "1px solid #000";
                cell2.style.border = "1px solid #000";
                cell1.innerHTML = data[i].dataPoints[j].y;
                cell2.innerHTML = data[i].dataPoints[j].label;
            }
        }
        document.getElementById("chartContainer").innerHTML = "<h1>" + rain_fall_type + " " + year + "</h2>";
        document.getElementById("chartContainer").appendChild(table);
    };
    SvgService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SvgService);
    return SvgService;
}());



/***/ }),

/***/ "./src/app/svgcomponent/svgcomponent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/svgcomponent/svgcomponent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/svgcomponent/svgcomponent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/svgcomponent/svgcomponent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<object  data=\"assets/img/biharmap.svg\" id=\"biharsvg\" type=\"image/svg+xml\"></object>\n                    \n<div style=\"position: relative;\"> \n<div class=\"fil-box\">\n    <div><span class=\"dot yellow\"></span>Below Min</div>\n    <div><span class=\"dot orange\"></span>Minimum</div>\n    <div><span class=\"dot dark-green\"></span>Below Max</div>\n    <div><span class=\"dot red\"></span>Maximum</div>\n    <!-- <div><span class=\"dot light-green\"></span>8.0% to 9.9%</div>\n    <div><span class=\"dot mid-green\"></span>6.0% to 5.9%</div> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/svgcomponent/svgcomponent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/svgcomponent/svgcomponent.component.ts ***!
  \********************************************************/
/*! exports provided: SvgcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgcomponentComponent", function() { return SvgcomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/svg.service */ "./src/app/services/svg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvgcomponentComponent = /** @class */ (function () {
    function SvgcomponentComponent(SvgService) {
        this.SvgService = SvgService;
        this.title = "";
    }
    SvgcomponentComponent.prototype.ngOnInit = function () {
    };
    SvgcomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-svgcomponent',
            template: __webpack_require__(/*! ./svgcomponent.component.html */ "./src/app/svgcomponent/svgcomponent.component.html"),
            styles: [__webpack_require__(/*! ./svgcomponent.component.css */ "./src/app/svgcomponent/svgcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [_services_svg_service__WEBPACK_IMPORTED_MODULE_1__["SvgService"]])
    ], SvgcomponentComponent);
    return SvgcomponentComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mystyle {\n    fill: #941818;\n}"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"clearfix interestArea filterProtfolio\">\n  <!-- BUTTON SECTION -->\n  <div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"filter-container isotopeFilters\">\n          <ul class=\"list-inline filter\">\n            <li class=\"active\"><a href=\"#\" data-filter=\"*\">2016 - 17</a></li>\n            <li><a href=\"#\" data-filter=\".recentItem\">2017 - 18</a></li>\n            <li><a href=\"#\" data-filter=\".featuredItem\">2018 - 19</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n      <select class='select-option' required [(ngModel)]='optionSelected' (ngModelChange)=\"toNumber()\">\n          <option class='option' *ngFor='let option of options' [ngValue]=\"option\">{{option}}</option>\n      </select>\n    <div id=\"chartContainer\" style=\"height: 370px; width: 100%;\"></div>\n    <button (click)=\"appendToContainer()\">I am button</button>\n    <object data=\"assets/img/bihar.svg\" id=\"biharsvg\" type=\"image/svg+xml\"></object>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/svg.service */ "./src/app/services/svg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(SvgService) {
        this.SvgService = SvgService;
        this.options = [1, 2, 3];
    }
    TestComponent.prototype.appendToContainer = function () {
        var a;
        a = "echamparan";
        // this.SvgService.test(a)
    };
    TestComponent.prototype.toNumber = function () {
        console.log(this.optionSelected);
        if (this.optionSelected == 1) {
            // this.SvgService.barchart();
        }
        else if (this.optionSelected == 2) {
            this.SvgService.pie();
        }
        else if (this.optionSelected == 3) {
            // this.SvgService.barchart();
        }
    };
    TestComponent.prototype.test = function (a) {
        var map = document.getElementById("biharsvg");
        var svgDoc = map.contentDocument; // should be fine
        var echamparan = svgDoc.getElementById(a);
        echamparan.classList.add("mystyle");
        console.log(echamparan);
    };
    TestComponent.prototype.ngOnInit = function () {
        // this.SvgService.barchart();
        this.SvgService.svg();
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_svg_service__WEBPACK_IMPORTED_MODULE_1__["SvgService"]])
    ], TestComponent);
    return TestComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/nilay/angular/bes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map