"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_planetarium_planetarium_ts"],{

/***/ "./src/js/plugins/planetarium/planetarium.ts":
/*!***************************************************!*\
  !*** ./src/js/plugins/planetarium/planetarium.ts ***!
  \***************************************************/
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
 * planetarium.ts is a plugin for showing the satellites above from the perspective
 * of a view on the earth.
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
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, settingsManager = _a.settingsManager, drawManager = _a.drawManager, starManager = _a.starManager, objectManager = _a.objectManager, uiManager = _a.uiManager, orbitManager = _a.orbitManager, sensorManager = _a.sensorManager;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'planetarium',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"menu-planetarium\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"planetarium\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Planetarium View</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-planetarium\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"planetarium\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Planetarium View</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.planetarium = {};
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.planetarium.isPlanetariumView = false;
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'planetarium',
        cb: function (iconName) {
            if (iconName === 'menu-planetarium') {
                var cameraManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager;
                if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.planetarium.isPlanetariumView) {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.planetarium.isPlanetariumView = false;
                    cameraManager.panReset = true;
                    cameraManager.localRotateReset = true;
                    settingsManager.fieldOfView = 0.6;
                    drawManager.glInit();
                    uiManager.hideSideMenus();
                    orbitManager.clearInViewOrbit(); // Clear Orbits if Switching from Planetarium View
                    cameraManager.cameraType.current = cameraManager.cameraType.default; // Back to normal Camera Mode
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fov-text').html('');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-planetarium').removeClass('bmenu-item-selected');
                    return;
                }
                else {
                    if (sensorManager.checkSensorSelected()) {
                        cameraManager.cameraType.current = cameraManager.cameraType.planetarium; // Activate Planetarium Camera Mode
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fov-text').html('FOV: ' + (settingsManager.fieldOfView * 100).toFixed(2) + ' deg');
                        uiManager.legendMenuChange('planetarium');
                        if (objectManager.isStarManagerLoaded) {
                            starManager.clearConstellations();
                        }
                        // If astronomy plugin is available then set it to false
                        if (typeof _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.astronomy !== 'undefined') {
                            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.astronomy.isAstronomyView = false;
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-astronomy').removeClass('bmenu-item-selected');
                        }
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.planetarium.isPlanetariumView = true;
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-planetarium').addClass('bmenu-item-selected');
                    }
                    else {
                        if (settingsManager.plugins.topMenu)
                            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager.adviceList.planetariumDisabled();
                        uiManager.toast("Select a Sensor First!", 'caution');
                        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-planetarium:animated').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-planetarium').effect('shake', {
                                distance: 10,
                            });
                        }
                    }
                    return;
                }
            }
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_planetarium_planetarium_ts.2e066bdc2ce1f38176b8.js.map