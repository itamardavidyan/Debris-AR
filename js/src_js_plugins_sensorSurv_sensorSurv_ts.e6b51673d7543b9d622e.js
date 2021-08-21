"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_sensorSurv_sensorSurv_ts"],{

/***/ "./src/js/plugins/sensorSurv/sensorSurv.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/sensorSurv/sensorSurv.ts ***!
  \*************************************************/
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
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, settingsManager = _a.settingsManager, sensorManager = _a.sensorManager, satSet = _a.satSet, uiManager = _a.uiManager;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'sensorFov',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"menu-surveillance\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"fence\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADGElEQVR4nO2dz25SQRTGv0MCKSk+h4sb6MKuKgsTN62xz1N31p0+j422iYldoJuyaetd+BraBoSUcQHXNMil989czpne77dkCDN8P5jhwpwBIIQQQgghhBCyUUR7AEXoDp1bdfv1rgT3fBraA6g7FKAMBShDAcpQgDIUoAwFKEMBylCAMhSgDAUoY0pAFLvWY+gjD2YE9C7ccWOMr08H7kllfVy67cYIZ92he19VH3kxIaB34Y6d4C0c9lptnFYhoXfptt0UJwBeADiyIkFdwL/wEyqQsBR+ggkJqgL+Cz/Bo4SU8BPUJagJiGLXmglept7BYa+5hU9R7Dol+ujMpjjF6vAX3eC55sKsJiCOZNJoYh/Aedp9BOg3xjgr8k5YLLgfBeivefxv0zFexZFM8j6+L1SnoKsduZUmXmONhCLT0QPTDoB5+H/GOPjZl985huwd9UXYt4SQwl+MxQZZgoPg+2SE/dYWfq1sbqITUviAIQHAfNGUET6vm7cdMEhrX9eWtLs2DuJIbnyM1wemBAAZ3wkFsPbKTzAnAPAvwWr4gFEBgD8JlsMHDAsAykuwHj5gXABQXEII4QMBCADySwglfCAQAUB2CSGFDwCSttOYbAb1ryLqDgUoQwHKUIAyFEAIIYQQQhTgd0HK8DpAGQpQhgKUoQBlKECZR/eTZLJ9MZifJLUHkIXcOyMCkmBeQOG9QYFIMC2g9O64ACSYFeBtf6hxCSYFeN8hbViCOQFVbU+3KsHUdUDGqsZBkTYfVZdVYEZAnqrGtPYqqy6rwoQAX4V1VVVdVom6AN9VjaFJ0D2qoKKS0pAk6B5VkGHBvWsX++RytSO3szYOMy7M9TyqQICTtPZ7xwgULimNI7l5aGGG4Ettjyq43pUPAN4s3+6zyGLddOQExz+eybuyfZRBfRFellBFhcsqCRbCBwxdCXeH7kiAwyzhF/3/gGTRd4JzC+EDhgQA84U5y3xc5g8csvaxKdSnoPtsIhhL4QPGBNQRClCGApShAGUoQBkKUIYClKEAZShAGQpQhgIIIYQQQgghhNSLv0Nm3xno+AzXAAAAAElFTkSuQmCC\"\n          />\n          <span class=\"bmenu-title\">Sesnor Fence</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-surveillance\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"fence\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADGElEQVR4nO2dz25SQRTGv0MCKSk+h4sb6MKuKgsTN62xz1N31p0+j422iYldoJuyaetd+BraBoSUcQHXNMil989czpne77dkCDN8P5jhwpwBIIQQQgghhBCyUUR7AEXoDp1bdfv1rgT3fBraA6g7FKAMBShDAcpQgDIUoAwFKEMBylCAMhSgDAUoY0pAFLvWY+gjD2YE9C7ccWOMr08H7kllfVy67cYIZ92he19VH3kxIaB34Y6d4C0c9lptnFYhoXfptt0UJwBeADiyIkFdwL/wEyqQsBR+ggkJqgL+Cz/Bo4SU8BPUJagJiGLXmglept7BYa+5hU9R7Dol+ujMpjjF6vAX3eC55sKsJiCOZNJoYh/Aedp9BOg3xjgr8k5YLLgfBeivefxv0zFexZFM8j6+L1SnoKsduZUmXmONhCLT0QPTDoB5+H/GOPjZl985huwd9UXYt4SQwl+MxQZZgoPg+2SE/dYWfq1sbqITUviAIQHAfNGUET6vm7cdMEhrX9eWtLs2DuJIbnyM1wemBAAZ3wkFsPbKTzAnAPAvwWr4gFEBgD8JlsMHDAsAykuwHj5gXABQXEII4QMBCADySwglfCAQAUB2CSGFDwCSttOYbAb1ryLqDgUoQwHKUIAyFEAIIYQQQhTgd0HK8DpAGQpQhgKUoQBlKECZR/eTZLJ9MZifJLUHkIXcOyMCkmBeQOG9QYFIMC2g9O64ACSYFeBtf6hxCSYFeN8hbViCOQFVbU+3KsHUdUDGqsZBkTYfVZdVYEZAnqrGtPYqqy6rwoQAX4V1VVVdVom6AN9VjaFJ0D2qoKKS0pAk6B5VkGHBvWsX++RytSO3szYOMy7M9TyqQICTtPZ7xwgULimNI7l5aGGG4Ettjyq43pUPAN4s3+6zyGLddOQExz+eybuyfZRBfRFellBFhcsqCRbCBwxdCXeH7kiAwyzhF/3/gGTRd4JzC+EDhgQA84U5y3xc5g8csvaxKdSnoPtsIhhL4QPGBNQRClCGApShAGUoQBkKUIYClKEAZShAGQpQhgIIIYQQQgghhNSLv0Nm3xno+AzXAAAAAElFTkSuQmCC\"\n          />\n          <span class=\"bmenu-title\">Sesnor Fence</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'sensorFov',
        cb: function (iconName) {
            if (iconName === 'menu-surveillance') {
                if (!sensorManager.checkSensorSelected()) {
                    // No Sensor Selected
                    if (settingsManager.plugins.topMenu)
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager.adviceList.survFenceDisabled();
                    uiManager.toast("Select a Sensor First!", 'caution');
                    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-surveillance:animated').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-surveillance').effect('shake', {
                            distance: 10,
                        });
                    }
                    return;
                }
                if (settingsManager.isShowSurvFence) {
                    settingsManager.isShowSurvFence = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-surveillance').removeClass('bmenu-item-selected');
                    satSet.satCruncher.postMessage({
                        isShowSurvFence: 'disable',
                        isShowFOVBubble: 'reset',
                    });
                    return;
                }
                else {
                    // Disable Satellite Overfly
                    settingsManager.isSatOverflyModeOn = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-fov').removeClass('bmenu-item-selected');
                    settingsManager.isShowSurvFence = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-surveillance').addClass('bmenu-item-selected');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-fov-bubble').removeClass('bmenu-item-selected');
                    satSet.satCruncher.postMessage({
                        isShowSatOverfly: 'reset',
                        isShowFOVBubble: 'enable',
                        isShowSurvFence: 'enable',
                    });
                    return;
                }
            }
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_sensorSurv_sensorSurv_ts.e6b51673d7543b9d622e.js.map