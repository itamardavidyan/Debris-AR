"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_classification_classification_ts"],{

/***/ "./src/js/plugins/classification/classification.ts":
/*!*********************************************************!*\
  !*** ./src/js/plugins/classification/classification.ts ***!
  \*********************************************************/
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


var init = function () {
    var settingsManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'classification',
        cb: function () {
            if (settingsManager.classificationStr !== '') {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#main-container').prepend(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"classification-container\">\n          <span>", "</span>\n        </div>        \n      "], ["\n        <div id=\"classification-container\">\n          <span>", "</span>\n        </div>        \n      "])), settingsManager.classificationStr));
                var topMenuHeight = parseInt(document.documentElement.style.getPropertyValue('--top-menu-height').replace('px', ''));
                if (isNaN(topMenuHeight))
                    topMenuHeight = 0;
                document.documentElement.style.setProperty('--top-menu-height', topMenuHeight + 20 + 'px');
                if (settingsManager.classificationStr.slice(0, 12) === 'Unclassified') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#classification-container').css({ 'background-color': 'var(--classificationUnclassifiedBackgroundColor)', 'color': 'white' });
                }
                if (settingsManager.classificationStr.slice(0, 6) === 'Secret') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#classification-container').css({ 'background-color': 'var(--classificationSecretBackgroundColor)', 'color': 'white' });
                }
                if (settingsManager.classificationStr.slice(0, 10) === 'Top Secret') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#classification-container').css({ 'background-color': 'var(--classificationTopSecretBackgroundColor)', 'color': 'black' });
                }
                if (settingsManager.classificationStr.slice(0, 15) === 'Top Secret//SCI') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#classification-container').css({ 'background-color': 'var(--classificationTopSecretSCIBackgroundColor)', 'color': 'black' });
                }
            }
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_classification_classification_ts.a3c25ff9b4620b073231.js.map