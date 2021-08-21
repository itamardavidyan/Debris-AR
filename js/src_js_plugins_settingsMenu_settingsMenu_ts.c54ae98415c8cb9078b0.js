"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_settingsMenu_settingsMenu_ts"],{

/***/ "./src/js/plugins/settingsMenu/settingsMenu.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/settingsMenu/settingsMenu.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
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
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs, satellite = _a.satellite, satSet = _a.satSet, ColorScheme = _a.ColorScheme, settingsManager = _a.settingsManager, uiManager = _a.uiManager;
    var isSettingsMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'settingsMenu',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"settings-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"settings-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <form id=\"settings-form\">\n                <div id=\"settings-general\">\n                  <h5 class=\"center-align\">General Settings</h5>\n                  <div class=\"switch row\">\n                    <label class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"Non-selectable satellites will be hidden instead of grayed out.\">\n                      <input id=\"settings-hos\" type=\"checkbox\" />\n                      <span class=\"lever\"></span>\n                      Hide Other Satellites\n                    </label>\n                  </div>\n                  <div class=\"switch row\">\n                    <label class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"Every 3 seconds a new satellite will be selected from FOV\">\n                      <input id=\"settings-demo-mode\" type=\"checkbox\" />\n                      <span class=\"lever\"></span>\n                      Enable Demo Mode\n                    </label>\n                  </div>\n                  <div class=\"switch row\">\n                    <label class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"Small text labels will appear next to all satellites in FOV.\">\n                      <input id=\"settings-sat-label-mode\" type=\"checkbox\" checked />\n                      <span class=\"lever\"></span>\n                      Enable Satellite Label Mode\n                    </label>\n                  </div>\n                </div>\n                <div class=\"row light-blue darken-3\" style=\"height:4px; display:block;\"></div>\n                <div id=\"settings-colors\">\n                  <h5 class=\"center-align\">Color Settings</h5>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Payload</p>\n                      <button id=\"settings-color-payload\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Rocket Body</p>\n                      <button id=\"settings-color-rocketBody\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Debris</p>\n                      <button id=\"settings-color-debris\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>In View</p>\n                      <button id=\"settings-color-inview\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Missile</p>\n                      <button id=\"settings-color-missile\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Missile (FOV)</p>\n                      <button id=\"settings-color-missileInview\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>TruSat</p>\n                      <button id=\"settings-color-trusat\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                </div>\n                <div class=\"row\"></div>\n                <div class=\"row light-blue darken-3\" style=\"height:4px; display:block;\"></div>\n                <div id=\"satOverfly-opt\">\n                  <h5 class=\"center-align\">Satellite Overfly Settings</h5>\n                  <div class=\"input-field col s12\">\n                    <input value=\"30\" id=\"satFieldOfView\" type=\"text\" class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"What is the satellite's field of view in degrees\" />\n                    <label for=\"satFieldOfView\" class=\"active\">Satellite Field of View</label>\n                  </div>\n                  <div class=\"row\"></div>\n                </div>\n                <div class=\"row light-blue darken-3\" style=\"height:4px; display:block;\"></div>\n                <div id=\"fastCompSettings\">\n                  <h5 class=\"center-align\">Fast CPU Required</h5>\n                  <div class=\"switch row\">\n                    <label>\n                      <input id=\"settings-snp\" type=\"checkbox\" />\n                      <span class=\"lever\"></span>\n                      Show Next Pass on Hover\n                    </label>\n                  </div>\n                  <div class=\"row\"></div>\n                  <br />\n                  <div class=\"row center\">\n                    <button id=\"settings-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Update Settings &#9658;</button>\n                  </div>\n                </div>\n                <!-- <div id=\"settings-lowperf\" class=\"row center\">\n                  <button class=\"red btn waves-effect waves-light\" onclick=\"uiManager.startLowPerf();\">Low End PC Version &#9658;</button>\n                </div> -->\n              </form>\n            </div>\n          </div>\n        </div>\n      "], ["\n        <div id=\"settings-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"settings-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <form id=\"settings-form\">\n                <div id=\"settings-general\">\n                  <h5 class=\"center-align\">General Settings</h5>\n                  <div class=\"switch row\">\n                    <label class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"Non-selectable satellites will be hidden instead of grayed out.\">\n                      <input id=\"settings-hos\" type=\"checkbox\" />\n                      <span class=\"lever\"></span>\n                      Hide Other Satellites\n                    </label>\n                  </div>\n                  <div class=\"switch row\">\n                    <label class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"Every 3 seconds a new satellite will be selected from FOV\">\n                      <input id=\"settings-demo-mode\" type=\"checkbox\" />\n                      <span class=\"lever\"></span>\n                      Enable Demo Mode\n                    </label>\n                  </div>\n                  <div class=\"switch row\">\n                    <label class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"Small text labels will appear next to all satellites in FOV.\">\n                      <input id=\"settings-sat-label-mode\" type=\"checkbox\" checked />\n                      <span class=\"lever\"></span>\n                      Enable Satellite Label Mode\n                    </label>\n                  </div>\n                </div>\n                <div class=\"row light-blue darken-3\" style=\"height:4px; display:block;\"></div>\n                <div id=\"settings-colors\">\n                  <h5 class=\"center-align\">Color Settings</h5>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Payload</p>\n                      <button id=\"settings-color-payload\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Rocket Body</p>\n                      <button id=\"settings-color-rocketBody\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Debris</p>\n                      <button id=\"settings-color-debris\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>In View</p>\n                      <button id=\"settings-color-inview\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Missile</p>\n                      <button id=\"settings-color-missile\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>Missile (FOV)</p>\n                      <button id=\"settings-color-missileInview\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                  <div class=\"input-field col s6\">\n                    <center>\n                      <p>TruSat</p>\n                      <button id=\"settings-color-trusat\" class=\"btn waves-effect waves-light\"></button>\n                    </center>\n                  </div>\n                </div>\n                <div class=\"row\"></div>\n                <div class=\"row light-blue darken-3\" style=\"height:4px; display:block;\"></div>\n                <div id=\"satOverfly-opt\">\n                  <h5 class=\"center-align\">Satellite Overfly Settings</h5>\n                  <div class=\"input-field col s12\">\n                    <input value=\"30\" id=\"satFieldOfView\" type=\"text\" class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" data-tooltip=\"What is the satellite's field of view in degrees\" />\n                    <label for=\"satFieldOfView\" class=\"active\">Satellite Field of View</label>\n                  </div>\n                  <div class=\"row\"></div>\n                </div>\n                <div class=\"row light-blue darken-3\" style=\"height:4px; display:block;\"></div>\n                <div id=\"fastCompSettings\">\n                  <h5 class=\"center-align\">Fast CPU Required</h5>\n                  <div class=\"switch row\">\n                    <label>\n                      <input id=\"settings-snp\" type=\"checkbox\" />\n                      <span class=\"lever\"></span>\n                      Show Next Pass on Hover\n                    </label>\n                  </div>\n                  <div class=\"row\"></div>\n                  <br />\n                  <div class=\"row center\">\n                    <button id=\"settings-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Update Settings &#9658;</button>\n                  </div>\n                </div>\n                <!-- <div id=\"settings-lowperf\" class=\"row center\">\n                  <button class=\"red btn waves-effect waves-light\" onclick=\"uiManager.startLowPerf();\">Low End PC Version &#9658;</button>\n                </div> -->\n              </form>\n            </div>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-settings\" class=\"bmenu-item\">\n          <img\n            alt=\"settings\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Settings</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-settings\" class=\"bmenu-item\">\n          <img\n            alt=\"settings\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Settings</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-form').on('change', function (e) {
                var isDMChecked = document.getElementById('settings-demo-mode').checked;
                var isSLMChecked = document.getElementById('settings-sat-label-mode').checked;
                if (isSLMChecked && e.target.id === 'settings-demo-mode') {
                    document.getElementById('settings-sat-label-mode').checked = false;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-demo-mode').removeClass('lever:after');
                }
                if (isDMChecked && e.target.id === 'settings-sat-label-mode') {
                    document.getElementById('settings-demo-mode').checked = false;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-sat-label-mode').removeClass('lever:after');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-riseset').on('change', function () {
                var isRiseSetChecked = document.getElementById('settings-riseset').checked;
                if (isRiseSetChecked) {
                    satellite.isRiseSetLookangles = true;
                }
                else {
                    satellite.isRiseSetLookangles = false;
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-form').on('submit', function (e) {
                var isHOSChecked = document.getElementById('settings-hos').checked;
                var isDMChecked = document.getElementById('settings-demo-mode').checked;
                var isSLMChecked = document.getElementById('settings-sat-label-mode').checked;
                var isSNPChecked = document.getElementById('settings-snp').checked;
                if (isSLMChecked) {
                    settingsManager.isSatLabelModeOn = true;
                }
                else {
                    settingsManager.isSatLabelModeOn = false;
                }
                if (isDMChecked) {
                    settingsManager.isDemoModeOn = true;
                }
                else {
                    settingsManager.isDemoModeOn = false;
                }
                if (isHOSChecked) {
                    settingsManager.colors.transparent = [1.0, 1.0, 1.0, 0];
                }
                else {
                    settingsManager.colors.transparent = [1.0, 1.0, 1.0, 0.1];
                }
                ColorScheme.reloadColors();
                if (isSNPChecked) {
                    settingsManager.isShowNextPass = true;
                }
                else {
                    settingsManager.isShowNextPass = false;
                }
                settingsManager.isForceColorScheme = true;
                satSet.setColorScheme(settingsManager.currentColorScheme); // force color recalc
                e.preventDefault();
            });
            var isNotColorPickerInitialSetup = false;
            (function () {
                var colorPalette = [
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([1.0, 0.0, 0.0, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([1.0, 0.75, 0.0, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0.85, 0.5, 0.0, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([1.0, 1.0, 0.0, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0, 1, 0, 1]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0.2, 1.0, 0.0, 0.5]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0.2, 1.0, 1.0, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0, 0, 1, 1]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0.2, 0.4, 1.0, 1]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0.64, 0.0, 0.64, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([1.0, 0.0, 0.6, 1.0]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([0.5, 0.5, 0.5, 1]),
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)([1, 1, 1, 1]), // White
                ];
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-payload').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.payload),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.payload = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-rocketBody').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.rocketBody),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.rocketBody = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-debris').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.debris),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.debris = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-inview').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.inview),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.inview = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-missile').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.missile),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.missile = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-missileInview').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.missileInview),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.missileInview = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-color-trusat').colorPick({
                    initialColor: (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.rgbCss)(settingsManager.colors.trusat),
                    palette: colorPalette,
                    onColorSelected: function () {
                        this.element.css('cssText', "background-color: " + this.color + " !important; color: " + this.color + ";");
                        if (isNotColorPickerInitialSetup) {
                            settingsManager.colors.trusat = (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.parseRgba)(this.color);
                            uiManager.legendColorsChange();
                            satSet.setColorScheme(settingsManager.currentColorScheme, true);
                            localStorage.setItem('settingsManager-colors', JSON.stringify(settingsManager.colors));
                        }
                    },
                });
                isNotColorPickerInitialSetup = true;
            })();
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'settingsMenu',
        cb: function (iconName) {
            if (iconName === 'menu-settings') {
                if (isSettingsMenuOpen) {
                    isSettingsMenuOpen = false;
                    uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (settingsManager.isMobileModeEnabled)
                        uiManager.searchToggle(false);
                    uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isSettingsMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-settings').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'sensor',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-settings').removeClass('bmenu-item-selected');
            isSettingsMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_settingsMenu_settingsMenu_ts.c54ae98415c8cb9078b0.js.map