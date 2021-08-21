"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_nightToggle_nightToggle_ts"],{

/***/ "./src/js/plugins/nightToggle/nightToggle.ts":
/*!***************************************************!*\
  !*** ./src/js/plugins/nightToggle/nightToggle.ts ***!
  \***************************************************/
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
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'nightToggle',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"menu-day-night\" class=\"bmenu-item\">\n          <img alt=\"day-night\" src=\"\" delayedsrc=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">Night Toggle</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-day-night\" class=\"bmenu-item\">\n          <img alt=\"day-night\" src=\"\" delayedsrc=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">Night Toggle</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isDayNightToggle = false;
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'nightToggle',
        cb: function (iconName) {
            if (iconName === 'menu-day-night') {
                if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isDayNightToggle) {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isDayNightToggle = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-day-night').removeClass('bmenu-item-selected');
                    return;
                }
                else {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isDayNightToggle = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-day-night').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'nightToggle',
        cbName: 'nightToggle',
        cb: function (gl, nightTexture, texture) {
            if (!_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isDayNightToggle) {
                gl.bindTexture(gl.TEXTURE_2D, nightTexture);
            }
            else {
                gl.bindTexture(gl.TEXTURE_2D, texture);
            }
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_nightToggle_nightToggle_ts.b8a1139b478746513ed7.js.map