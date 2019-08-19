webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert-view/alert-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alert-view/alert-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isShow\">\n  {{ message }}\n</div>\n"

/***/ }),

/***/ "./src/app/alert-view/alert-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertViewComponent = /** @class */ (function () {
    function AlertViewComponent() {
        this._isShow = false;
    }
    Object.defineProperty(AlertViewComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (message) {
            this._message = message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertViewComponent.prototype, "isShow", {
        get: function () {
            return this._isShow;
        },
        set: function (isShow) {
            this._isShow = isShow;
        },
        enumerable: true,
        configurable: true
    });
    AlertViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AlertViewComponent.prototype, "message", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AlertViewComponent.prototype, "isShow", null);
    AlertViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-alert-view',
            template: __webpack_require__("./src/app/alert-view/alert-view.component.html"),
            styles: [__webpack_require__("./src/app/alert-view/alert-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertViewComponent);
    return AlertViewComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".line{\n  width: 100%;\n  border: 1px solid rgba(174, 173, 165, 0.49);\n  clear: both;\n}\n\ntable {\n  text-align: center;\n  width: 100%;\n}\n\ntd.leftText{\n  text-align: left;\n}\n\n.dropdown-menu{\n  max-height: 300px;\n  overflow-y: scroll;\n}\n\n.margin10{\n  margin-left: 10px;\n}\n\n.kakaobtn{\n  width: 34px;\n  height:35px;\n  float: right;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4NDVBOThBOTRGMjA2ODExODIyQUFDNkQzRjAxMENDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NzVFOUE0Q0I5N0UxMUUzODgxMEIyQUUxQkFDQUI4RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NzVFOUE0QkI5N0UxMUUzODgxMEIyQUUxQkFDQUI4RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzlGNTNDN0IzQzIwNjgxMTgyMkE5MDRDQUVBNDVFMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODQ1QTk4QTk0RjIwNjgxMTgyMkFBQzZEM0YwMTBDQzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7b5aqZAAACp0lEQVR42uyYXUhTYRjH/+/Zmc6NNqcui8xWWUpdSKOLoLTs6yKIGGERIaGQDRIvokDwQoqCiG76uLCELEi6EIpuCkoCK0lZGF6LBH1cqLP24c4+zrbT+y4hwjnfbedsBv3hudh2ePbjeZ+v9xBlFkxbqF2ndpCaGfmRn9oQtS5iwyShILX0wyi1UhRGXmq7SGIGTwmBEwWUouAZA/FTkFUFBgmyo1GwAvRvgvi8AkbelmDikwGfp/TweHSQggRGk4KKijg2bpZRvyOM3Y0hWEoT6oN8+yKi/74Fb14bEYuRZZ2KooL9hyS0tvtQVR3LHYQmEQYemfGg1wJZJhmHW69X0Oby4fQZPwjJEiRBI3utpxyvXphyPv/DR4LovjwHQcgC5PZNKwafqFfVzacC6Lz4MzOQifFidJytVL0y7vZNo94RSflbymD191k0KdF0foVUJTruNmgCwvwy/1wgU5NFyWrRqJUn/XOBBIMEWmop/4tArNaEpiBLddxFIDW10WQj0kLMb81WmQ/EYFDQ2BTSBKRhXwhGY4K/fFvP+VSPCps/bPZwly/TBructgtmo44LXtg3ydkNvYGHZvTeyX2VbT/vRUubP7c14MP7Ety4WgbPrC5jgLLyOC51/8CevcvnHNc+IkkCjh5Yh2iUr8esrozDeSIAZ/M8TCa+diDyPPT9q/gXBBvnDU0SZPodg2SJaLMtbGiOMOq2RdOO/KxBPo79mT1V62Po6pmjK2FE3ariecg9+hvk+MkAXJ3eZK9RW1wgUbom3ro3A8fO8P/rRP5AVsqVU5BCeFfoaFCGYWFkDFfo1cFfKAj234xB93gQ09vrMGyvxhq9iLX0mIrydBzzNBJDz1/CdawFbpasILZkGbM3RcUsb/KVGtQiC2+OYr8EGADzIgaiRkvdUgAAAABJRU5ErkJggg==');\n}\n\n.qrcodebtn{\n  width: 32px;\n  height:32px;\n  float: right;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAClklEQVRYw+VX623jMAymg44hp2vQzRqmukZdzyGnaxzpNWxpD2uP3I9aOZ0iPwLfjwJHQEBoRiTFjw+pAIAbrFMBx2hV/+mg8sP0En4opXxVVS79g4gcMkBEffrNWoveexWH6EZExyw955QEuz8HgpiMMR/OuUtOJiIUywMPANC27ddSJBFxaNv2a5cDzrmLtRbjnJimSTnnMMdHzn6JSI2IrixLH/5rrQ379jkAAFBVlRMRCjwz11prCSdlZh/4lD4/P43W+p58a/l1gu86L2JjCd2YuY4/EJGIyDus9Ih5T7YHzLYKACg2k5CZCREfytNai0QkRCSIODRNY2I5Ijpmpi39iw5M06TCyZ1zaK29RMoHpZQXkTq311p7CfnBzPU0TQqeobhOM+shxCESAbLc+pd95iEn9hxoyYFsEqV1DgAwjiNer9c2V2YB/+v12uZ4RByqqnJvb28PubRYhnGoEdF5f7cHzjl07o8upZSfna1TPjcLjob89uRahWARs1hJ6gAz1yt1nspXc2axDNM6HscRiUhyfcEY85GeMt7fdV0b5kVKLwvGB0QErXVPRH3AFABAa92P44jTNCki6omotta+pjrO57MHgMP4L0IU130OohV+G4I9jSimeSgFeSEi75GDKb/twAyDY2YKq2ma+yhtmsYg4rCEedM0JvQCIpJoHO93oCxLH0YqIrqqqoZY7r1/XZoFhymHcdr74Ym6X+sDJ9geFkV8ucjJAaCISvYmIvUcnaD7V3zf2HUpjec9EUnXdW0sD5gTkYzjeMc47RPMTNbay9N9IP1WlqUvy7IXkbRPvAN8938i6rXWvTFGhWEV+DXI/+93QTF7svY027zX7TjtXxQ/ze4ObDh5hH726/g3+bT5yY2vCPgAAAAASUVORK5CYII=');\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../assets/lotto.png\" width=\"30\" height=\"30\" alt=\"\">\n  </a>\n  <div class=\"dropdown\">\n    <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      {{ winData.drwNo }}회 ({{ winData.drwNoDate }})\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n      <button class=\"dropdown-item\" type=\"button\" (click)=\"getWinData(i.drwNo)\" *ngFor=\"let i of winDataList\" >{{ i.drwNo }}회 ({{ i.drwNoDate }})</button>\n    </div>\n  </div>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">로또 당첨 확률 체감기</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">로또 번호 통계</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<table class=\"table\" *ngIf=\"isMain\">\n  <tbody>\n  <tr>\n    <td colspan=\"2\">\n      <app-ball #ball1 [ballNumber]=\"winData.drwtNo1\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball2 [ballNumber]=\"winData.drwtNo2\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball3 [ballNumber]=\"winData.drwtNo3\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball4 [ballNumber]=\"winData.drwtNo4\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball5 [ballNumber]=\"winData.drwtNo5\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball6 [ballNumber]=\"winData.drwtNo6\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball6 [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #bnusNo [ballNumber]=\"winData.bnusNo\" [isWinBall]=\"true\"></app-ball>\n    </td>\n  </tr>\n  <tr>\n    <td class=\"leftText\">\n      총 판매금액\n    </td>\n    <td class=\"leftText\">\n      {{ winData.totSellamnt | number }}원\n    </td>\n  </tr>\n  <tr>\n    <td class=\"leftText\">\n      1등 당첨금\n    </td>\n    <td class=\"leftText\">\n      {{ winData.firstWinamnt | number }}원\n    </td>\n  </tr>\n  <tr>\n    <td class=\"leftText\">\n      1등 당첨자\n    </td>\n    <td class=\"leftText\">\n      {{ winData.firstPrzwnerCo }}명\n      <div (click)=\"sendWinNumberForKakao()\" class=\"margin10 kakaobtn\"></div>\n      <div (click)=\"qrCameraCall()\" class=\"margin10 qrcodebtn\"></div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<app-length-number *ngIf=\"showLengthView\" (closeLengthView)=\"updateShowLengthView($event)\"></app-length-number>\n<app-select-number *ngIf=\"showSelectView\" (closeSelectView)=\"updateShowSelectView($event)\"></app-select-number>\n<app-hold-number *ngIf=\"showHoldView\" (closeHoldView)=\"updateShowHoldView($event)\"></app-hold-number>\n<app-save-data #saveData\n               (showHoldView)=\"updateShowHoldView($event)\"\n               (showLengthView)=\"updateShowLengthView($event)\"\n               (showSelectView)=\"updateShowSelectView($event)\"></app-save-data>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottonumber_service__ = __webpack_require__("./src/app/lottonumber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__ = __webpack_require__("./src/app/ball/ball.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_data_save_data_component__ = __webpack_require__("./src/app/save-data/save-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as $ from 'jquery';
var AppComponent = /** @class */ (function () {
    function AppComponent(lottoService) {
        this.lottoService = lottoService;
        this.isMain = true;
        this.showHoldView = false;
        this.closeHoldView = false;
        this.closeSelectView = false;
        this.closeLengthView = false;
        this.showSelectView = false;
        this.showLengthView = false;
        this.winData = {
            "totSellamnt": 0,
            "returnValue": "success",
            "drwNoDate": "",
            "firstWinamnt": 0,
            "drwtNo6": 0,
            "drwtNo4": 0,
            "firstPrzwnerCo": 0,
            "drwtNo5": 0,
            "bnusNo": 0,
            "drwtNo2": 0,
            "drwNo": 0,
            "drwtNo3": 0,
            "drwtNo1": 0
        };
    }
    AppComponent.prototype.updateShowHoldView = function (e) {
        this.showHoldView = !this.showHoldView;
        this.showSelectView = false;
        this.showLengthView = false;
        this.setMainStatus();
    };
    AppComponent.prototype.updateShowSelectView = function (e) {
        this.showSelectView = !this.showSelectView;
        this.showHoldView = false;
        this.showLengthView = false;
        this.setMainStatus();
    };
    AppComponent.prototype.updateShowLengthView = function (e) {
        this.showLengthView = !this.showLengthView;
        this.showHoldView = false;
        this.showSelectView = false;
        this.setMainStatus();
    };
    AppComponent.prototype.setMainStatus = function () {
        if (this.showSelectView || this.showHoldView || this.showLengthView) {
            this.isMain = false;
        }
        else {
            this.isMain = true;
        }
    };
    AppComponent.prototype.getWinNumber = function () {
        var _this = this;
        this.lottoService.getWinNumber().subscribe(function (data) {
            _this.winDataList = data;
            _this.winDataList.sort(function (o1, o2) { return o2.drwNo - o1.drwNo; });
            _this.winData = _this.winDataList[0];
            _this.saveData.setWinData(_this.winData);
            _this.callTrigger();
        }, function (err) { return console.log(err); }, function () { return console.log('done loading winnumber'); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getWinNumber();
    };
    AppComponent.prototype.getWinData = function (drwNo) {
        var _this = this;
        this.showLengthView = false;
        this.showHoldView = false;
        this.showSelectView = false;
        this.setMainStatus();
        setTimeout(function () {
            _this.winDataList.forEach(function (winData) {
                if (winData.drwNo == drwNo) {
                    _this.winData = winData;
                    _this.saveData.setWinData(_this.winData);
                    _this.callTrigger();
                    return;
                }
            });
        }, 200);
    };
    AppComponent.prototype.callTrigger = function () {
        this.ball1.animationStatus('spin');
        this.ball2.animationStatus('spin');
        this.ball3.animationStatus('spin');
        this.ball4.animationStatus('spin');
        this.ball5.animationStatus('spin');
        this.ball6.animationStatus('spin');
        this.bnusNo.animationStatus('spin');
    };
    AppComponent.prototype.sendWinNumberForKakao = function () {
        console.log('kakao');
    };
    AppComponent.prototype.qrCameraCall = function () {
        console.log('qrcode');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('saveData'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__save_data_save_data_component__["a" /* SaveDataComponent */])
    ], AppComponent.prototype, "saveData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('ball1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "ball1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('ball2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "ball2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('ball3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "ball3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('ball4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "ball4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('ball5'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "ball5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('ball6'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "ball6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('bnusNo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */])
    ], AppComponent.prototype, "bnusNo", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__lottonumber_service__["a" /* LottonumberService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ball_ball_component__ = __webpack_require__("./src/app/ball/ball.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__number_pipe__ = __webpack_require__("./src/app/number.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lottonumber_service__ = __webpack_require__("./src/app/lottonumber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__save_data_save_data_component__ = __webpack_require__("./src/app/save-data/save-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hold_number_hold_number_component__ = __webpack_require__("./src/app/hold-number/hold-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__random_number_random_number_component__ = __webpack_require__("./src/app/random-number/random-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_view_alert_view_component__ = __webpack_require__("./src/app/alert-view/alert-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__select_number_select_number_component__ = __webpack_require__("./src/app/select-number/select-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__length_number_length_number_component__ = __webpack_require__("./src/app/length-number/length-number.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ball_ball_component__["a" /* BallComponent */],
                __WEBPACK_IMPORTED_MODULE_5__number_pipe__["a" /* NumberPipe */],
                __WEBPACK_IMPORTED_MODULE_9__save_data_save_data_component__["a" /* SaveDataComponent */],
                __WEBPACK_IMPORTED_MODULE_10__hold_number_hold_number_component__["a" /* HoldNumberComponent */],
                __WEBPACK_IMPORTED_MODULE_11__random_number_random_number_component__["a" /* RandomNumberComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alert_view_alert_view_component__["a" /* AlertViewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__select_number_select_number_component__["a" /* SelectNumberComponent */],
                __WEBPACK_IMPORTED_MODULE_14__length_number_length_number_component__["a" /* LengthNumberComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientJsonpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__lottonumber_service__["a" /* LottonumberService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ball/ball.component.css":
/***/ (function(module, exports) {

module.exports = ".ball{\n  width: 30px;\n  height:30px;\n  font-size: 18px;\n  border: 2px solid;\n  border-radius: 30px;\n  text-align: center;\n  float: left;\n  margin: 5px;\n}\n\n.show{\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-name: infinite-move;\n          animation-name: infinite-move;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  animation-interation-count: infinite;\n}\n\n@-webkit-keyframes infinite-move {\n  from {-webkit-transform: rotate(0deg);transform: rotate(0deg)}\n  to{-webkit-transform: rotate(360deg);transform: rotate(360deg)}\n}\n\n@keyframes infinite-move {\n  from {-webkit-transform: rotate(0deg);transform: rotate(0deg)}\n  to{-webkit-transform: rotate(360deg);transform: rotate(360deg)}\n}\n\n.red{\n  border-color: red;\n}\n\n.paran{\n  border-color: blue;\n}\n\n.purple{\n  border-color: purple;\n}\n\n.wien{\n  border-color: orchid;\n}\n\n.yellow{\n  border-color: yellowgreen;\n}\n\n.none{\n  border-color: #fff;\n}\n\n.noMatch{\n  opacity: 0.3;\n}\n"

/***/ }),

/***/ "./src/app/ball/ball.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getCSSClasses()\"\n     [@rotation]=\"_animationStatus\"\n     (@rotation.done)=\"animation($event)\">{{ ballNumber == 0 ? '+' : ballNumber }}</div>\n"

/***/ }),

/***/ "./src/app/ball/ball.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as $ from 'jquery';
var BallComponent = /** @class */ (function () {
    function BallComponent() {
        this._isWinBall = false;
        this._animationStatus = 'stop';
        this.recheckBall = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    BallComponent.prototype.updateBall = function () {
        this.recheckBall.emit(this._id);
    };
    BallComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BallComponent.prototype, "isWinBall", {
        get: function () {
            return this._isWinBall;
        },
        set: function (isWinBall) {
            this._isWinBall = isWinBall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BallComponent.prototype, "ballNumber", {
        get: function () {
            return this._ballNumber;
        },
        set: function (ballNumber) {
            this._ballNumber = ballNumber;
            if (this._ballNumber < 10) {
                this.className = 'red';
            }
            else if (this._ballNumber < 20) {
                this.className = 'paran';
            }
            else if (this._ballNumber < 30) {
                this.className = 'purple';
            }
            else if (this._ballNumber < 40) {
                this.className = 'wien';
            }
            else {
                this.className = 'yellow';
            }
            if (this._ballNumber == 0) {
                this.className = 'none';
            }
        },
        enumerable: true,
        configurable: true
    });
    BallComponent.prototype.animationStatus = function (status) {
        this._animationStatus = status;
    };
    Object.defineProperty(BallComponent.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
            this.updateBall();
        },
        enumerable: true,
        configurable: true
    });
    BallComponent.prototype.getCSSClasses = function () {
        return {
            'ball': true,
            'red': this.className === 'red',
            'paran': this.className === 'paran',
            'purple': this.className === 'purple',
            'wien': this.className === 'wien',
            'yellow': this.className === 'yellow',
            'none': this.className === 'none',
            'noMatch': this.isWinBall ? false : !this.isMatch
        };
    };
    BallComponent.prototype.isWinNumber = function (isTrue) {
        this.isMatch = isTrue;
    };
    BallComponent.prototype.animation = function (e) {
        this._animationStatus = 'stop';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], BallComponent.prototype, "recheckBall", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BallComponent.prototype, "isWinBall", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], BallComponent.prototype, "ballNumber", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BallComponent.prototype, "id", null);
    BallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-ball',
            template: __webpack_require__("./src/app/ball/ball.component.html"),
            styles: [__webpack_require__("./src/app/ball/ball.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('rotation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('stop, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('spin', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'rotate(360deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('stop => spin', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'rotate(0deg)' }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'rotate(360deg)' })
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BallComponent);
    return BallComponent;
}());



/***/ }),

/***/ "./src/app/hold-number/hold-number.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  max-height: 250px;\n  overflow-y: scroll;\n}\n\n.dropdown > button {\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  border: 2px solid black;\n  text-align: center;\n  float: left;\n  margin: 5px;\n  background: #ffffff;\n  color: black;\n  padding: 0;\n}\n\n.dropdown-toggle::after{\n  margin: 0;\n}\n\n.gamebtn{\n  text-align: center;\n  border: 2px solid olivedrab;\n  border-radius: 5px;\n  font-size: 15px;\n  width: 40px;\n  float: right;\n  margin: 5px;\n}\n\n.custombtn{\n  text-align: center;\n  border: 2px solid olivedrab;\n  border-radius: 5px;\n  font-size: 15px;\n  width: 40%;\n  float: left;\n  height:30px;\n  margin: 5px;\n}\n\n.col3{\n  width: 30%;\n}\n"

/***/ }),

/***/ "./src/app/hold-number/hold-number.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n    <td>\n      <h5>번호 생성 <div class=\"gamebtn\" (click)=\"closeHoldNumber()\">닫기</div></h5>\n      <app-alert-view #alertView></app-alert-view>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ number1 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a *ngFor=\"let i of numbers\" class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,i)\">{{i}}</a>\n        </div>\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ number2 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n          <a *ngFor=\"let i of numbers\" class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,i)\">{{i}}</a>\n        </div>\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ number3 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n          <a *ngFor=\"let i of numbers\" class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,i)\">{{i}}</a>\n        </div>\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ number4 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n          <a *ngFor=\"let i of numbers\" class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,i)\">{{i}}</a>\n        </div>\n      </div><div class=\"dropdown\">\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{ number5 }}\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton5\">\n        <a *ngFor=\"let i of numbers\" class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,i)\">{{i}}</a>\n      </div>\n    </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ number6 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\n          <a *ngFor=\"let i of numbers\" class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(6,i)\">{{i}}</a>\n        </div>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class=\"custombtn\" (click)=\"createRandomNumber()\">자동 생성</div>\n      <div class=\"custombtn\" (click)=\"saveNumber()\">저장</div>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/hold-number/hold-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ball_ball_component__ = __webpack_require__("./src/app/ball/ball.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_view_alert_view_component__ = __webpack_require__("./src/app/alert-view/alert-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lottonumber_service__ = __webpack_require__("./src/app/lottonumber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HoldNumberComponent = /** @class */ (function () {
    function HoldNumberComponent(lottoNumberService) {
        this.lottoNumberService = lottoNumberService;
        this.number1 = 1;
        this.number2 = 1;
        this.number3 = 1;
        this.number4 = 1;
        this.number5 = 1;
        this.number6 = 1;
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45
        ];
        this.closeHoldView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    HoldNumberComponent.prototype.ngOnInit = function () {
    };
    HoldNumberComponent.prototype.closeHoldNumber = function () {
        this.closeHoldView.emit(true);
    };
    HoldNumberComponent.prototype.clickBall = function (number) {
        this.ballList.forEach(function (ball) {
            if (ball.ballNumber == number) {
                ball.isWinNumber(true);
                ball.animationStatus('spin');
            }
        });
    };
    HoldNumberComponent.prototype.validationNumber = function (number) {
        return (this.number1 == number || this.number2 == number || this.number3 == number || this.number4 == number || this.number5 == number || this.number6 == number);
    };
    HoldNumberComponent.prototype.saveNumber = function () {
        var saveNumber = [this.number1, this.number2, this.number3, this.number4, this.number5, this.number6];
        saveNumber.sort(function (o1, o2) { return o1 - o2; });
        for (var i = 0; i < saveNumber.length; i++) {
            for (var k = (i + 1); k < saveNumber.length; k++) {
                if (saveNumber[i] == saveNumber[k]) {
                    this.showAlert();
                    return;
                }
            }
        }
        this.lottoNumberService.saveUserNumber(saveNumber);
    };
    HoldNumberComponent.prototype.createRandomNumber = function () {
        this.alertView.isShow = false;
        var saveNumber = [Math.floor((Math.random() * 45) + 1), Math.floor((Math.random() * 45) + 1), Math.floor((Math.random() * 45) + 1), Math.floor((Math.random() * 45) + 1), Math.floor((Math.random() * 45) + 1), Math.floor((Math.random() * 45) + 1)];
        for (var i = 0; i < saveNumber.length; i++) {
            for (var k = (i + 1); k < saveNumber.length; k++) {
                if (saveNumber[i] == saveNumber[k]) {
                    this.createRandomNumber();
                    return;
                }
            }
        }
        saveNumber.sort(function (o1, o2) { return o1 - o2; });
        this.number1 = saveNumber[0];
        this.number2 = saveNumber[1];
        this.number3 = saveNumber[2];
        this.number4 = saveNumber[3];
        this.number5 = saveNumber[4];
        this.number6 = saveNumber[5];
    };
    HoldNumberComponent.prototype.showAlert = function () {
        this.alertView.isShow = true;
        this.alertView.message = '중복된 번호가 있습니다.';
    };
    HoldNumberComponent.prototype.setNumber = function (position, number) {
        if (this.validationNumber(number)) {
            this.showAlert();
            return;
        }
        else {
            this.alertView.isShow = false;
        }
        switch (position) {
            case 1:
                this.number1 = number;
                break;
            case 2:
                this.number2 = number;
                break;
            case 3:
                this.number3 = number;
                break;
            case 4:
                this.number4 = number;
                break;
            case 5:
                this.number5 = number;
                break;
            case 6:
                this.number6 = number;
                break;
            default:
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__ball_ball_component__["a" /* BallComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* QueryList */])
    ], HoldNumberComponent.prototype, "ballList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('alertView'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__alert_view_alert_view_component__["a" /* AlertViewComponent */])
    ], HoldNumberComponent.prototype, "alertView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], HoldNumberComponent.prototype, "closeHoldView", void 0);
    HoldNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-hold-number',
            template: __webpack_require__("./src/app/hold-number/hold-number.component.html"),
            styles: [__webpack_require__("./src/app/hold-number/hold-number.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__lottonumber_service__["a" /* LottonumberService */]])
    ], HoldNumberComponent);
    return HoldNumberComponent;
}());



/***/ }),

/***/ "./src/app/length-number/length-number.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n    <td colspan=\"2\">\n      <h5>범위 지정 생성 <div class=\"gamebtn\" (click)=\"closeLengthNumber()\">닫기</div></h5>\n      <app-alert-view #alertView></app-alert-view>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball [ballNumber]=\"1\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"9\" [isWinBall]=\"true\"></app-ball>\n    </td>\n    <td>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ length1 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,0)\">0</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,1)\">1</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,2)\">2</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,3)\">3</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,4)\">4</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,5)\">5</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(1,6)\">6</a>\n        </div>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball [ballNumber]=\"10\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"19\" [isWinBall]=\"true\"></app-ball>\n    </td>\n    <td>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ length2 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,0)\">0</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,1)\">1</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,2)\">2</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,3)\">3</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,4)\">4</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,5)\">5</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(2,6)\">6</a>\n        </div>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball [ballNumber]=\"20\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"29\" [isWinBall]=\"true\"></app-ball>\n    </td>\n    <td>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ length3 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,0)\">0</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,1)\">1</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,2)\">2</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,3)\">3</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,4)\">4</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,5)\">5</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(3,6)\">6</a>\n        </div>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball [ballNumber]=\"30\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"39\" [isWinBall]=\"true\"></app-ball>\n    </td>\n    <td>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ length4 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,0)\">0</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,1)\">1</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,2)\">2</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,3)\">3</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,4)\">4</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,5)\">5</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(4,6)\">6</a>\n        </div>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball [ballNumber]=\"40\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <app-ball [ballNumber]=\"45\" [isWinBall]=\"true\"></app-ball>\n    </td>\n    <td>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ length5 }}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton5\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,0)\">0</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,1)\">1</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,2)\">2</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,3)\">3</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,4)\">4</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,5)\">5</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"setNumber(5,6)\">6</a>\n        </div>\n      </div>\n    </td>\n  </tr>\n  <tr>\n    <td colspan=\"2\">\n      <app-ball #ball1 [ballNumber]=\"saveNumbers[0]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball2 [ballNumber]=\"saveNumbers[1]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball3 [ballNumber]=\"saveNumbers[2]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball4 [ballNumber]=\"saveNumbers[3]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball5 [ballNumber]=\"saveNumbers[4]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball6 [ballNumber]=\"saveNumbers[5]\" [isWinBall]=\"true\"></app-ball>\n    </td>\n  </tr>\n  <tr>\n    <td colspan=\"2\">\n      <div class=\"custombtn\" (click)=\"createChoiceNumber()\">생성</div>\n      <div class=\"custombtn\" (click)=\"saveNumber()\">저장</div>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/length-number/length-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LengthNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_view_alert_view_component__ = __webpack_require__("./src/app/alert-view/alert-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lottonumber_service__ = __webpack_require__("./src/app/lottonumber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LengthNumberComponent = /** @class */ (function () {
    function LengthNumberComponent(lottoNumberService) {
        this.lottoNumberService = lottoNumberService;
        this.closeLengthView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.length1 = 0;
        this.length2 = 0;
        this.length3 = 0;
        this.length4 = 0;
        this.length5 = 0;
        this.saveNumbers = [1, 1, 1, 1, 1, 1];
    }
    LengthNumberComponent.prototype.closeLengthNumber = function () {
        this.closeLengthView.emit(true);
    };
    LengthNumberComponent.prototype.setNumber = function (type, number) {
        switch (type) {
            case 1:
                this.length1 = number;
                break;
            case 2:
                this.length2 = number;
                break;
            case 3:
                this.length3 = number;
                break;
            case 4:
                this.length4 = number;
                break;
            case 5:
                this.length5 = number;
                break;
        }
        if (this.length1 + this.length2 + this.length3 + this.length4 + this.length5 > 6) {
            this.alertView.isShow = true;
            this.alertView.message = '지정 범위 합이 6이 넘습니다';
            this.setNumber(type, 0);
            return;
        }
    };
    LengthNumberComponent.prototype.createChoiceNumber = function () {
        this.alertView.isShow = false;
        if (this.length1 + this.length2 + this.length3 + this.length4 + this.length5 > 6) {
            this.alertView.isShow = true;
            this.alertView.message = '지정 범위 합이 6이 넘습니다';
            return;
        }
        var choiceLength = [this.length1, this.length2, this.length3, this.length4, this.length5];
        var createNumbers = [];
        for (var i = 0; i < choiceLength.length; i++) {
            for (var k = 0; k < choiceLength[i]; k++) {
                var rndNum = Math.floor(Math.random() * (9 + (i > 0 ? 1 : 0)) + (i > 0 ? 0 : 1)) + (i * 10);
                if (rndNum > 45) {
                    rndNum = Math.floor(Math.random() * 5 + 1) + (40);
                }
                createNumbers.push(rndNum);
            }
        }
        var _loop_1 = function (i) {
            if (createNumbers.filter(function (v) { return v == createNumbers[i]; }).length > 1) {
                this_1.createChoiceNumber();
                return { value: void 0 };
            }
        };
        var this_1 = this;
        for (var i = 0; i < createNumbers.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        while (createNumbers.length < 6) {
            var _loop_2 = function (i) {
                var rndNum = Math.floor(Math.random() * 45 + 1);
                if (createNumbers.filter(function (v) { return v == rndNum; }).length > 0) {
                    i--;
                }
                else {
                    createNumbers.push(rndNum);
                }
                out_i_1 = i;
            };
            var out_i_1;
            for (var i = 0; i < (6 - createNumbers.length); i++) {
                _loop_2(i);
                i = out_i_1;
            }
        }
        this.saveNumbers = createNumbers.sort(function (o1, o2) { return o1 - o2; });
    };
    LengthNumberComponent.prototype.saveNumber = function () {
        this.saveNumbers.sort(function (o1, o2) { return o1 - o2; });
        for (var i = 0; i < this.saveNumbers.length; i++) {
            for (var k = (i + 1); k < this.saveNumbers.length; k++) {
                if (this.saveNumbers[i] == this.saveNumbers[k]) {
                    this.alertView.isShow = true;
                    this.alertView.message = '중복된 번호가 있습니다.';
                    return;
                }
            }
        }
        this.lottoNumberService.saveUserNumber(this.saveNumbers);
    };
    LengthNumberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('alertView'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__alert_view_alert_view_component__["a" /* AlertViewComponent */])
    ], LengthNumberComponent.prototype, "alertView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], LengthNumberComponent.prototype, "closeLengthView", void 0);
    LengthNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-length-number',
            template: __webpack_require__("./src/app/length-number/length-number.component.html"),
            styles: [__webpack_require__("./src/app/hold-number/hold-number.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__lottonumber_service__["a" /* LottonumberService */]])
    ], LengthNumberComponent);
    return LengthNumberComponent;
}());



/***/ }),

/***/ "./src/app/lottonumber.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LottonumberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var LottonumberService = /** @class */ (function () {
    function LottonumberService(http) {
        this.http = http;
        this.userNumbers = [];
        this.componentMethodCall = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    LottonumberService.prototype.getWinNumber = function () {
        return this.http.get('https://parkminkyu.github.io/bok/lottoHistory.json');
    };
    LottonumberService.prototype.saveUserNumber = function (numbers) {
        var _this = this;
        var saveData = {
            "drwtNo6": 0,
            "drwtNo4": 0,
            "drwtNo5": 0,
            "drwtNo2": 0,
            "saveNo": 0,
            "drwtNo3": 0,
            "drwtNo1": 0
        };
        saveData.drwtNo1 = numbers[0];
        saveData.drwtNo2 = numbers[1];
        saveData.drwtNo3 = numbers[2];
        saveData.drwtNo4 = numbers[3];
        saveData.drwtNo5 = numbers[4];
        saveData.drwtNo6 = numbers[5];
        Promise.resolve(saveData).then(this.insertUserNumberToIndexedDB).then(function (data) {
            _this.userNumbers.push(data);
            _this.userNumbers.sort(function (o1, o2) { return o2.saveNo - o1.saveNo; });
        });
    };
    LottonumberService.prototype.insertUserNumberToIndexedDB = function (saveData) {
        return new Promise(function (resolve, reject) {
            IndexedDB.checkDB();
            IndexedDB.dataBaseName = 'MyLotto';
            IndexedDB.schemaName = 'number';
            IndexedDB.createSchema('saveNo');
            IndexedDB.selectMaxValue('keyIndex', function (data) {
                if (data == null)
                    saveData.saveNo = 1;
                else
                    saveData.saveNo = (data.saveNo + 1);
                IndexedDB.insert(saveData, function (data) {
                    if (data == 1) {
                        resolve(saveData);
                    }
                });
            });
        });
    };
    LottonumberService.prototype.getUserNumbers = function () {
        var _this = this;
        Promise.resolve().then(this.setUserNumbers).then(function (data) {
            data.sort(function (o1, o2) { return o2.saveNo - o1.saveNo; });
            data.forEach(function (d) {
                _this.userNumbers.push(d);
            });
        });
        return this.userNumbers;
    };
    LottonumberService.prototype.setUserNumbers = function () {
        return new Promise(function (resolve, reject) {
            IndexedDB.checkDB();
            IndexedDB.dataBaseName = 'MyLotto';
            IndexedDB.schemaName = 'number';
            IndexedDB.createSchema('saveNo');
            IndexedDB.selectAll(function (data) {
                resolve(data);
            });
        });
    };
    LottonumberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LottonumberService);
    return LottonumberService;
}());



/***/ }),

/***/ "./src/app/number.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberPipe = /** @class */ (function () {
    function NumberPipe() {
    }
    NumberPipe.prototype.transform = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    NumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'number'
        })
    ], NumberPipe);
    return NumberPipe;
}());



/***/ }),

/***/ "./src/app/random-number/random-number.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/random-number/random-number.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  random-number works!\n</p>\n"

/***/ }),

/***/ "./src/app/random-number/random-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RandomNumberComponent = /** @class */ (function () {
    function RandomNumberComponent() {
    }
    RandomNumberComponent.prototype.ngOnInit = function () {
    };
    RandomNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-random-number',
            template: __webpack_require__("./src/app/random-number/random-number.component.html"),
            styles: [__webpack_require__("./src/app/random-number/random-number.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RandomNumberComponent);
    return RandomNumberComponent;
}());



/***/ }),

/***/ "./src/app/save-data/save-data.component.css":
/***/ (function(module, exports) {

module.exports = ".ball{\n  width: 30px;\n  height:30px;\n  font-size: 18px;\n  border: 2px solid;\n  border-radius: 30px;\n  text-align: center;\n  float: left;\n  margin: 5px;\n}\n\n.margin10{\n  margin-left: 10px;\n}\n\n.gamebtn{\n  text-align: center;\n  border: 2px solid olivedrab;\n  border-radius: 5px;\n  font-size: 15px;\n  width: 40px;\n  height:40px;\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/save-data/save-data.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tbody>\n  <tr>\n    <td class=\"leftText\">\n      <h5>저장 번호 확인\n        <div (click)=\"lengthNumber()\" class=\"margin10 gamebtn\">\n          범 위<br>\n          선 택\n        </div>\n        <div (click)=\"selectNumber()\" class=\"margin10 gamebtn\">\n          선 택<br>\n          번 호\n        </div>\n        <div (click)=\"holdNumber()\" class=\"margin10 gamebtn\">\n          번 호<br>\n          생 성\n        </div>\n      </h5>\n    </td>\n  </tr>\n  <tr *ngIf=\" userNumbers.length == 0 \">\n    <td>\n      <h5>저장된 번호가 없습니다.</h5>\n    </td>\n  </tr>\n  <tr *ngFor=\"let i of userNumbers\">\n    <td>\n      <app-ball [ballNumber]=\"i.drwtNo1\" (recheckBall)=\"recheckBallUpdate($event)\" [id]=\"i.saveNo\"></app-ball>\n      <app-ball [ballNumber]=\"i.drwtNo2\"></app-ball>\n      <app-ball [ballNumber]=\"i.drwtNo3\"></app-ball>\n      <app-ball [ballNumber]=\"i.drwtNo4\"></app-ball>\n      <app-ball [ballNumber]=\"i.drwtNo5\"></app-ball>\n      <app-ball [ballNumber]=\"i.drwtNo6\"></app-ball>\n      <app-ball [ballNumber]=\"0\" [isWinBall]=\"true\"></app-ball>\n      <div class=\"ball\" id=\"result{{i.saveNo}}\"></div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/save-data/save-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottonumber_service__ = __webpack_require__("./src/app/lottonumber.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ball_ball_component__ = __webpack_require__("./src/app/ball/ball.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveDataComponent = /** @class */ (function () {
    function SaveDataComponent(numberService) {
        this.numberService = numberService;
        this.saveData = {
            "drwtNo6": 0,
            "drwtNo4": 0,
            "drwtNo5": 0,
            "drwtNo2": 0,
            "saveNo": 0,
            "drwtNo3": 0,
            "drwtNo1": 0
        };
        this.winData = {
            "totSellamnt": 0,
            "returnValue": "success",
            "drwNoDate": "",
            "firstWinamnt": 0,
            "drwtNo6": 0,
            "drwtNo4": 0,
            "firstPrzwnerCo": 0,
            "drwtNo5": 0,
            "bnusNo": 0,
            "drwtNo2": 0,
            "drwNo": 0,
            "drwtNo3": 0,
            "drwtNo1": 0
        };
        this.showHoldView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.showSelectView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.showLengthView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.userNumbers = [];
        this.userNumbers = this.numberService.getUserNumbers();
        /*Promise.resolve().then(this.numberService.getUserNumbers).then(data =>{
           this.userNumbers = data;
           this.userNumbers.sort((o1, o2) => o2.saveNo - o1.saveNo);
        });*/
    }
    SaveDataComponent.prototype.setWinData = function (winData) {
        this.winData = winData;
        this.checkWinData();
        this.setRanking();
    };
    SaveDataComponent.prototype.recheckBallUpdate = function (e) {
        var _this = this;
        if (this.winData.drwNo != 0) {
            setTimeout(function () {
                _this.checkWinData();
                _this.setRanking();
            }, 500);
        }
    };
    SaveDataComponent.prototype.checkWinData = function () {
        var _this = this;
        this.viewBallList.forEach(function (ball) {
            ball.isWinNumber(false);
            if (_this.checkWinSaveNumber(ball.ballNumber)) {
                ball.animationStatus('spin');
                ball.isWinNumber(true);
            }
        });
    };
    SaveDataComponent.prototype.resetSaveBall = function () {
        console.log(2);
    };
    SaveDataComponent.prototype.checkWinSaveNumber = function (saveNumber) {
        return (this.winData.drwtNo1 == saveNumber ||
            this.winData.drwtNo2 == saveNumber ||
            this.winData.drwtNo3 == saveNumber ||
            this.winData.drwtNo4 == saveNumber ||
            this.winData.drwtNo5 == saveNumber ||
            this.winData.drwtNo6 == saveNumber);
    };
    SaveDataComponent.prototype.checkBonusSaveNumber = function (saveNumber) {
        return this.winData.bnusNo == saveNumber;
    };
    SaveDataComponent.prototype.setRanking = function () {
        var _this = this;
        this.userNumbers.forEach(function (saveData) {
            document.getElementById('result' + saveData.saveNo).innerText = _this.checkRanking(saveData);
        });
    };
    SaveDataComponent.prototype.checkRanking = function (saveData) {
        var isMatchNum = 0;
        if (this.checkWinSaveNumber(saveData.drwtNo1))
            isMatchNum++;
        if (this.checkWinSaveNumber(saveData.drwtNo2))
            isMatchNum++;
        if (this.checkWinSaveNumber(saveData.drwtNo3))
            isMatchNum++;
        if (this.checkWinSaveNumber(saveData.drwtNo4))
            isMatchNum++;
        if (this.checkWinSaveNumber(saveData.drwtNo5))
            isMatchNum++;
        if (this.checkWinSaveNumber(saveData.drwtNo6))
            isMatchNum++;
        switch (isMatchNum) {
            case 3:
                return '5';
            case 4:
                return '4';
            case 5:
                if (this.checkBonusSaveNumber(saveData.drwtNo1)
                    || this.checkBonusSaveNumber(saveData.drwtNo2)
                    || this.checkBonusSaveNumber(saveData.drwtNo3)
                    || this.checkBonusSaveNumber(saveData.drwtNo4)
                    || this.checkBonusSaveNumber(saveData.drwtNo5)
                    || this.checkBonusSaveNumber(saveData.drwtNo6)) {
                    return '2';
                }
                return '3';
            case 6:
                return '1';
            default:
                return '꽝';
        }
    };
    SaveDataComponent.prototype.holdNumber = function () {
        this.showHoldView.emit(true);
    };
    SaveDataComponent.prototype.lengthNumber = function () {
        this.showLengthView.emit(true);
    };
    SaveDataComponent.prototype.selectNumber = function () {
        this.showSelectView.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__ball_ball_component__["a" /* BallComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* QueryList */])
    ], SaveDataComponent.prototype, "viewBallList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SaveDataComponent.prototype, "showHoldView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SaveDataComponent.prototype, "showSelectView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SaveDataComponent.prototype, "showLengthView", void 0);
    SaveDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-save-data',
            template: __webpack_require__("./src/app/save-data/save-data.component.html"),
            styles: [__webpack_require__("./src/app/save-data/save-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__lottonumber_service__["a" /* LottonumberService */]])
    ], SaveDataComponent);
    return SaveDataComponent;
}());



/***/ }),

/***/ "./src/app/select-number/select-number.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n    <td>\n      <h5>선택 생성 <div class=\"gamebtn\" (click)=\"closeSelectNumber()\">닫기</div></h5>\n      <app-alert-view #alertView></app-alert-view>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball *ngFor=\"let i of numbers\" [ballNumber]=\"i\" [id]=\"i\" (click)=\"checkBall(i)\"></app-ball>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <app-ball #ball1 [ballNumber]=\"saveNumbers[0]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball2 [ballNumber]=\"saveNumbers[1]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball3 [ballNumber]=\"saveNumbers[2]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball4 [ballNumber]=\"saveNumbers[3]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball5 [ballNumber]=\"saveNumbers[4]\" [isWinBall]=\"true\"></app-ball>\n      <app-ball #ball6 [ballNumber]=\"saveNumbers[5]\" [isWinBall]=\"true\"></app-ball>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <div class=\"custombtn col3\" (click)=\"createInNumber()\">선택 포함 생성</div>\n      <div class=\"custombtn col3\" (click)=\"createOutNumber()\">선택 제외 생성</div>\n      <div class=\"custombtn col3\" (click)=\"saveNumber()\">저장</div>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/select-number/select-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ball_ball_component__ = __webpack_require__("./src/app/ball/ball.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_view_alert_view_component__ = __webpack_require__("./src/app/alert-view/alert-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lottonumber_service__ = __webpack_require__("./src/app/lottonumber.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectNumberComponent = /** @class */ (function () {
    function SelectNumberComponent(lottoNumberService) {
        this.lottoNumberService = lottoNumberService;
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45
        ];
        this.numbersMapping = [
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false
        ];
        this.saveNumbers = [1, 1, 1, 1, 1, 1];
        this.closeSelectView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SelectNumberComponent.prototype.createInNumber = function () {
        var tempNumber = [];
        for (var i = 0; i < this.numbers.length; i++) {
            if (this.numbersMapping[i]) {
                tempNumber.push(this.numbers[i]);
            }
        }
        if (tempNumber.length < 6) {
            var createNumbers = [];
            for (var i = 0; i < tempNumber.length; i++) {
                createNumbers.push(tempNumber[i]);
            }
            while (createNumbers.length < 6) {
                var _loop_1 = function (i) {
                    var rndNum = Math.floor(Math.random() * 45 + 1);
                    if (createNumbers.filter(function (v) { return v == rndNum; }).length > 0) {
                        i--;
                    }
                    else {
                        createNumbers.push(rndNum);
                    }
                    out_i_1 = i;
                };
                var out_i_1;
                for (var i = 0; i < (6 - createNumbers.length); i++) {
                    _loop_1(i);
                    i = out_i_1;
                }
            }
            this.saveNumbers = createNumbers.sort(function (o1, o2) { return o1 - o2; });
        }
        else {
            this.createNumber(tempNumber);
        }
    };
    SelectNumberComponent.prototype.createOutNumber = function () {
        var tempNumber = [];
        for (var i = 0; i < this.numbers.length; i++) {
            if (!this.numbersMapping[i]) {
                tempNumber.push(this.numbers[i]);
            }
        }
        if (tempNumber.length < 6) {
            this.alertView.isShow = true;
            this.alertView.message = '제외수가 너무 많습니다. (최대 39개)';
            return;
        }
        this.createNumber(tempNumber);
    };
    SelectNumberComponent.prototype.createNumber = function (tempNumber) {
        this.alertView.isShow = false;
        this.saveNumbers[0] = tempNumber[Math.floor(Math.random() * tempNumber.length)];
        this.saveNumbers[1] = tempNumber[Math.floor(Math.random() * tempNumber.length)];
        this.saveNumbers[2] = tempNumber[Math.floor(Math.random() * tempNumber.length)];
        this.saveNumbers[3] = tempNumber[Math.floor(Math.random() * tempNumber.length)];
        this.saveNumbers[4] = tempNumber[Math.floor(Math.random() * tempNumber.length)];
        this.saveNumbers[5] = tempNumber[Math.floor(Math.random() * tempNumber.length)];
        for (var i = 0; i < this.saveNumbers.length; i++) {
            for (var k = (i + 1); k < this.saveNumbers.length; k++) {
                if (this.saveNumbers[i] == this.saveNumbers[k]) {
                    this.createNumber(tempNumber);
                    return;
                }
            }
        }
        this.saveNumbers.sort(function (o1, o2) { return o1 - o2; });
    };
    SelectNumberComponent.prototype.saveNumber = function () {
        this.saveNumbers.sort(function (o1, o2) { return o1 - o2; });
        for (var i = 0; i < this.saveNumbers.length; i++) {
            for (var k = (i + 1); k < this.saveNumbers.length; k++) {
                if (this.saveNumbers[i] == this.saveNumbers[k]) {
                    this.alertView.isShow = true;
                    this.alertView.message = '중복된 번호가 있습니다.';
                    return;
                }
            }
        }
        this.lottoNumberService.saveUserNumber(this.saveNumbers);
    };
    SelectNumberComponent.prototype.closeSelectNumber = function () {
        this.closeSelectView.emit(true);
    };
    SelectNumberComponent.prototype.checkBall = function (number) {
        var _this = this;
        this.ballList.forEach(function (ball) {
            if (ball.id == number) {
                _this.numbersMapping[number - 1] = !_this.numbersMapping[number - 1];
                ball.isWinNumber(_this.numbersMapping[number - 1]);
            }
        });
    };
    SelectNumberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__ball_ball_component__["a" /* BallComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* QueryList */])
    ], SelectNumberComponent.prototype, "ballList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('alertView'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__alert_view_alert_view_component__["a" /* AlertViewComponent */])
    ], SelectNumberComponent.prototype, "alertView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectNumberComponent.prototype, "closeSelectView", void 0);
    SelectNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-select-number',
            template: __webpack_require__("./src/app/select-number/select-number.component.html"),
            styles: [__webpack_require__("./src/app/hold-number/hold-number.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__lottonumber_service__["a" /* LottonumberService */]])
    ], SelectNumberComponent);
    return SelectNumberComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map