"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_topMenu_topMenu_ts"],{

/***/ "./src/js/plugins/topMenu/topMenu.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/topMenu/topMenu.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var init = function () {
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'topMenu',
        cb: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Bottom Icon
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-container').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"help-screen\" class=\"valign-wrapper\">\n          <div id=\"help-inner-container\" class=\"valign\">\n            <p>\n              <span id=\"help-header\" class=\"logo-font\">TITLE</span>\n              <span id=\"help-close\">X</span>\n            </p>\n            <span id=\"help-text\">ADVICE</span>\n          </div>\n        </div>\n      "], ["\n        <div id=\"help-screen\" class=\"valign-wrapper\">\n          <div id=\"help-inner-container\" class=\"valign\">\n            <p>\n              <span id=\"help-header\" class=\"logo-font\">TITLE</span>\n              <span id=\"help-close\">X</span>\n            </p>\n            <span id=\"help-text\">ADVICE</span>\n          </div>\n        </div>\n      "]))));
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @app/js/uiManager/ui-advice */ "./src/js/uiManager/ui-advice.js")).then(function (mod) {
                                mod.init();
                                _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.menuController();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_topMenu_topMenu_ts.0a860e7270a2fe27ba13.js.map