"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_datetime_datetime_ts"],{

/***/ "./src/js/plugins/datetime/datetime.ts":
/*!*********************************************!*\
  !*** ./src/js/plugins/datetime/datetime.ts ***!
  \*********************************************/
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
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, settingsManager = _a.settingsManager, timeManager = _a.timeManager, satSet = _a.satSet, uiManager = _a.uiManager;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'datetime',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nav-wrapper').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <ul id=\"nav-mobile\">\n          <li id=\"jday\"></li>\n          <div id=\"datetime\" class=\"tooltipped\" data-position=\"top\" data-delay=\"50\" data-tooltip=\"Time Menu\">\n            <div id=\"datetime-text\">Placeholder Text</div>\n            <div id=\"datetime-input\">\n              <form id=\"datetime-input-form\">\n                <input type=\"text\" id=\"datetime-input-tb\" readonly=\"true\" />\n              </form>\n            </div>\n          </div>\n        </ul>\n      "], ["\n        <ul id=\"nav-mobile\">\n          <li id=\"jday\"></li>\n          <div id=\"datetime\" class=\"tooltipped\" data-position=\"top\" data-delay=\"50\" data-tooltip=\"Time Menu\">\n            <div id=\"datetime-text\">Placeholder Text</div>\n            <div id=\"datetime-input\">\n              <form id=\"datetime-input-form\">\n                <input type=\"text\" id=\"datetime-input-tb\" readonly=\"true\" />\n              </form>\n            </div>\n          </div>\n        </ul>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-text').on('click', function () {
                timeManager.propRealTime = Date.now();
                timeManager.propTime();
                _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.methods.updateDateTime(new Date(timeManager.propRealTime + timeManager.propOffset));
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input-form').on('change', function (e) {
                var selectedDate = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input-tb').datepicker('getDate');
                var today = new Date();
                var jday = timeManager.getDayOfYear(timeManager.propTime());
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jday').html(jday);
                timeManager.propOffset = selectedDate.getTime() - today.getTime();
                satSet.satCruncher.postMessage({
                    typ: 'offset',
                    dat: timeManager.propOffset.toString() + ' ' + (1.0).toString(),
                });
                timeManager.propRealTime = Date.now();
                timeManager.propTime();
                // Reset last update times when going backwards in time
                settingsManager.lastBoxUpdateTime = timeManager.now;
                // TODO: Migrate to watchlist.ts
                try {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.watchlist.lastOverlayUpdateTime = timeManager.now * 1 - 7000;
                    uiManager.updateNextPassOverlay(true);
                }
                catch (_a) {
                    // Ignore
                }
                // satSet.findRadarDataFirstDataTime();
                e.preventDefault();
            });
            // Initialize the date/time picker
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input-tb')
                .datetimepicker({
                dateFormat: 'yy-mm-dd',
                timeFormat: 'HH:mm:ss',
                timezone: '+0000',
                gotoCurrent: true,
                addSliderAccess: true,
                // minDate: -14, // No more than 7 days in the past
                // maxDate: 14, // or 7 days in the future to make sure ELSETs are valid
                sliderAccessArgs: { touchonly: false },
            })
                .on('change.dp', function () {
                // This code gets called when the done button is pressed or the time sliders are closed
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input').fadeOut();
                // TODO: Migrate to watchlist.ts
                try {
                    uiManager.updateNextPassOverlay(true);
                }
                catch (_a) {
                    // Intentionally ignored
                }
                settingsManager.isEditTime = false;
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-text').on('click', function () {
                if (!settingsManager.isEditTime) {
                    // $('#datetime-text').fadeOut();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input').fadeIn();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input-tb').trigger('focus');
                    settingsManager.isEditTime = true;
                }
            });
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'updateDateTime',
        cbName: 'datetime',
        cb: function (date) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input-tb').datepicker('setDate', date);
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_datetime_datetime_ts.69790ace026495c48a41.js.map