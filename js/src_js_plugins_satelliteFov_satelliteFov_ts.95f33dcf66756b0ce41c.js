"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_satelliteFov_satelliteFov_ts"],{

/***/ "./src/js/plugins/satelliteFov/satelliteFov.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/satelliteFov/satelliteFov.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * externalSources.ts is a plugin to allow downloading and parsing of external
 * data sources from the internet.
 *
 * http://keeptrack.space
 *
 * @Copyright (C) 2016-2021 Theodore Kruczek
 *
 * KeepTrack is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * KeepTrack is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with
 * KeepTrack. If not, see <http://www.gnu.org/licenses/>.
 *
 * TESTING: This plugin requires php to be installed on the server. It won't work
 * with the default http npm module.
 *
 * /////////////////////////////////////////////////////////////////////////////
 */
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var init = function () {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, settingsManager = _a.settingsManager, satSet = _a.satSet, objectManager = _a.objectManager, uiManager = _a.uiManager;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'satelliteFov',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"menu-sat-fov\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"sat2\"\n            src=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Satellite FOV</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-sat-fov\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"sat2\"\n            src=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Satellite FOV</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'satelliteFov',
        cb: function (iconName) {
            if (iconName === 'menu-sat-fov') {
                if (objectManager.selectedSat === -1 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val() === '') {
                    // No Sat Selected and No Search Present
                    if (settingsManager.plugins.topMenu)
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager.adviceList.satFOVDisabled();
                    uiManager.toast("Select a Satellite First!", 'caution');
                    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-fov:animated').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-fov').effect('shake', {
                            distance: 10,
                        });
                    }
                    return;
                }
                if (settingsManager.isSatOverflyModeOn) {
                    settingsManager.isSatOverflyModeOn = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-fov').removeClass('bmenu-item-selected');
                    satSet.satCruncher.postMessage({
                        isShowSatOverfly: 'reset',
                    });
                    return;
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-fov-bubble').removeClass('bmenu-item-selected');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-surveillance').removeClass('bmenu-item-selected');
                    settingsManager.isShowSurvFence = false;
                    settingsManager.isFOVBubbleModeOn = false;
                    settingsManager.isSatOverflyModeOn = true;
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val() !== '') {
                        // If Group Selected
                        uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val());
                    }
                    var satFieldOfView = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#satFieldOfView').val());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-fov').addClass('bmenu-item-selected');
                    satSet.satCruncher.postMessage({
                        isShowFOVBubble: 'reset',
                        isShowSurvFence: 'disable',
                        isShowSatOverfly: 'enable',
                        selectedSatFOV: satFieldOfView,
                    });
                    satSet.setColorScheme(settingsManager.currentColorScheme, true);
                    return;
                }
            }
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_satelliteFov_satelliteFov_ts.95f33dcf66756b0ce41c.js.map