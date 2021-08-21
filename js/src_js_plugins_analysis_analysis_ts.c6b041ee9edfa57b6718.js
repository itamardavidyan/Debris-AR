"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_analysis_analysis_ts"],{

/***/ "./src/js/plugins/analysis/analysis.ts":
/*!*********************************************!*\
  !*** ./src/js/plugins/analysis/analysis.ts ***!
  \*********************************************/
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
 * analysis.ts is a plugin for viewing trend data on TLEs and calculating best
 * pass times.
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
 * /////////////////////////////////////////////////////////////////////////////
 */
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var init = function () {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, satellite = _a.satellite, sensorManager = _a.sensorManager, objectManager = _a.objectManager, satSet = _a.satSet, uiManager = _a.uiManager;
    var isAnalysisMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'analysis',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"analysis-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"analysis-inner-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Analysis Menu</h5>\n              <li class=\"divider\"></li>\n              <div class=\"row\"></div>\n              <form id=\"analysis-form\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input value=\"25544\" id=\"anal-sat\" type=\"text\" />\n                    <label for=\"anal-sat\" class=\"active\">Satellite Number</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <select value=\"0\" id=\"anal-type\" type=\"text\">\n                      <optgroup label=\"Orbital Parameters\">\n                        <option value=\"inc\">Inclination</option>\n                        <option value=\"ap\">Apogee</option>\n                        <option value=\"pe\">Perigee</option>\n                        <option value=\"per\">Period</option>\n                        <option value=\"e\">Eccentricity</option>\n                        <option value=\"ra\">RAAN</option>\n                        <option value=\"all\">All</option>\n                      </optgroup>\n                      <optgroup id=\"anal-look-opt\" label=\"Look Angles\">\n                        <option value=\"az\">Azimuth</option>\n                        <option value=\"el\">Elevation</option>\n                        <option value=\"rng\">Range</option>\n                        <option value=\"rae\">All</option>\n                      </optgroup>\n                    </select>\n                    <label for=\"disabled\">Chart Type</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <center>\n                    <button id=\"analysis-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">View Trends &#9658;</button>\n                  </center>\n                </div>\n              </form>\n            </ul>\n            <div class=\"row\">\n              <center>\n                <button class=\"btn btn-ui waves-effect waves-light\" onclick=\"satSet.exportTle2Txt();\">Export TLEs &#9658;</button>\n              </center>\n            </div>\n            <div class=\"row\">\n              <center>\n                <button class=\"btn btn-ui waves-effect waves-light\" onclick=\"satSet.exportTle2Csv();\">Export Catalog CSV &#9658;</button>\n              </center>\n            </div>\n            <div class=\"row\">\n              <center>\n                <button id=\"findCsoBtn\" class=\"btn btn-ui waves-effect waves-light\">Find Close Objects &#9658;</button>\n              </center>\n            </div>\n            <div class=\"row\"></div>\n            <h5 class=\"center-align\">Best Pass Times</h5>\n            <li class=\"divider\"></li>\n            <div class=\"row\"></div>\n            <div class=\"row\">\n              <form id=\"analysis-bpt\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input value=\"25544,00005\" id=\"analysis-bpt-sats\" type=\"text\" />\n                    <label for=\"analysis-bpt-sats\" class=\"active\">Satellite Numbers</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <center>\n                    <button id=\"analysis-bpt-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Generate Best Pass Times &#9658;</button>\n                  </center>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      "], ["\n        <div id=\"analysis-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"analysis-inner-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Analysis Menu</h5>\n              <li class=\"divider\"></li>\n              <div class=\"row\"></div>\n              <form id=\"analysis-form\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input value=\"25544\" id=\"anal-sat\" type=\"text\" />\n                    <label for=\"anal-sat\" class=\"active\">Satellite Number</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <select value=\"0\" id=\"anal-type\" type=\"text\">\n                      <optgroup label=\"Orbital Parameters\">\n                        <option value=\"inc\">Inclination</option>\n                        <option value=\"ap\">Apogee</option>\n                        <option value=\"pe\">Perigee</option>\n                        <option value=\"per\">Period</option>\n                        <option value=\"e\">Eccentricity</option>\n                        <option value=\"ra\">RAAN</option>\n                        <option value=\"all\">All</option>\n                      </optgroup>\n                      <optgroup id=\"anal-look-opt\" label=\"Look Angles\">\n                        <option value=\"az\">Azimuth</option>\n                        <option value=\"el\">Elevation</option>\n                        <option value=\"rng\">Range</option>\n                        <option value=\"rae\">All</option>\n                      </optgroup>\n                    </select>\n                    <label for=\"disabled\">Chart Type</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <center>\n                    <button id=\"analysis-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">View Trends &#9658;</button>\n                  </center>\n                </div>\n              </form>\n            </ul>\n            <div class=\"row\">\n              <center>\n                <button class=\"btn btn-ui waves-effect waves-light\" onclick=\"satSet.exportTle2Txt();\">Export TLEs &#9658;</button>\n              </center>\n            </div>\n            <div class=\"row\">\n              <center>\n                <button class=\"btn btn-ui waves-effect waves-light\" onclick=\"satSet.exportTle2Csv();\">Export Catalog CSV &#9658;</button>\n              </center>\n            </div>\n            <div class=\"row\">\n              <center>\n                <button id=\"findCsoBtn\" class=\"btn btn-ui waves-effect waves-light\">Find Close Objects &#9658;</button>\n              </center>\n            </div>\n            <div class=\"row\"></div>\n            <h5 class=\"center-align\">Best Pass Times</h5>\n            <li class=\"divider\"></li>\n            <div class=\"row\"></div>\n            <div class=\"row\">\n              <form id=\"analysis-bpt\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input value=\"25544,00005\" id=\"analysis-bpt-sats\" type=\"text\" />\n                    <label for=\"analysis-bpt-sats\" class=\"active\">Satellite Numbers</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <center>\n                    <button id=\"analysis-bpt-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Generate Best Pass Times &#9658;</button>\n                  </center>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-analysis\" class=\"bmenu-item\">\n          <img\n            alt=\"analysis\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFDUlEQVR4nO2cUVMbVRTH/2dDbBBQHxVfWxhLkwBJWh/6MWy0dqyjY9Gh01E/QeknUKdTRqmjY51aTf0YPNiGEEOgHbCvUh9VQFIhe3xJnQzZm92b7O5BPL+33XPv2Qt/9vzvPckAKIqiKIqiKIqiKIqiKIqiKErkkO2E9BJzFAs5KtTzZPU7daJaiBIMFUAYFUAYFUAYFUCYgbAS2br/f52wdoP6BgijAgijAgijAgijAggT2i5Ie0S9oW+AMCqAMCqAMCqAMCqAMNoL6hHtBR0RVABhVABhVABhVABhQtsFSTC1zKP7Ln71CG3W8/Ry7AvqgUPxBmTKPDdZ5RO285qMnNd9Apa7zZus8olMmedsnxcF4gKkKzzDhKvNJpbTFZ6xmux6C+ASlozPW+JzzSbKTLhq/bwIEBUgU+ZTYHzSuhwG44v0Epcmq/xCkPlMyHsHOgUYX+SRTIVvASgBeL417rNsmad6WnxIiAkwvsgjTPgRwLMHQuf2m7ifvcdjAdJMe91MOqi2X2fv8VgyhQoz3jowNOUS7owv8kjwlYeLmADHBnEDwLgpvsP4rdv8qWUeBfCSR2izOk2b7Tf2h7FJwL4h1fgzKXzpt96oEBEgXeEZj7/GpzQSjNcfvUp/dsthMmBmVA7eW5ugbWIUAfxlSFeU8oPYBThQ9zsg4EqtQFVT/F8MBgynUwAAWCnQKggfGfMJ+UGsAkys8TATSuis+wAAJny/kqdA5cDGgJ9Sz9FNBm4ZwimXUDr+Ez8X5PlhEasAiQbmAbxiCG/s7cKmDHgacNPnDOAkMQvggSF8fHAANy3W0DexCeBX910HxfWztBUkVzcDfpinx93mrmRpx3EPjx/EIoBf3Qdhdm2aakHz2RiwF7XTtMaMK8YBMfpB5AL41X0Ad+o5+toqqaUBe7FaoK8AfGMIx+YHkQvg7OJzmOv+A0riknVS8hbA8an/HWmSuIzufjBvuzRbIhXgVJnfBXDBEG64Dt5cydKObV6GtwB7XXZAXrT5gWkNF9IVfsd2fTaIN+Ns6ceADyORCtCqs7cN4ZTj4rtMjYdscvbagvYiU+Mh10EJgGkNt639yZLI3wB3EB8AeGgIn+Q9y313Dy1oE7yHGwBOGsKPdvcxa5vTlsgFCNCHOW9TZ3s5AXvR8qe3DeGGwyj69aPCIBYPaPVhPjYOYMxPLHM2YLqeTsDtZO/zBBGuGwcQPgzUjwqB2Ey4nqMFInxrCKccFyW/vnwYBtxW903nklI9RwtBcoVBrLugZgqzMPvBWHIQXX/wfk/AAODuYR7d6779uaQPYhXAzw+I8UZmid8zJujzBJyu8CUCLhrCsdX9dmI/B/j5AQPXTX2Yfgy41Y/61DggxrrfjshBzM8PmoQfDH2Yngw4QD8q1rrfjthJ+MkuLgNYN8WHCC+2X3cx4Md+BjywjVE2fwlt/e8GzGUvYsQEWD9LW8R4DZ1+cPcYUKidoY32m10M2Lf81M7QBg9iGtxh8g2HcT7o5xBRINoLOuAHW8y4WM9TsZKnPzoG92nAaxO0XS/Q+wCKAH4HIFb32xFvxtVztECMa4kEcqsFMvlCaC3oep7uJhI4TYxrUnW/nUPx5dyVAs35jQmrBQ0AP0/RLwB8nxkHh0KAINTzNCq9higQL0H/d1QAYVQAYVQAYVQAYfT/BQmjb4AwKoAwKoAwKoAwKoCiKIqiKIqiKIqiKIqiKIqiHH3+ARw90MK30gxuAAAAAElFTkSuQmCC\"\n          />\n          <span class=\"bmenu-title\">Analysis</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-analysis\" class=\"bmenu-item\">\n          <img\n            alt=\"analysis\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFDUlEQVR4nO2cUVMbVRTH/2dDbBBQHxVfWxhLkwBJWh/6MWy0dqyjY9Gh01E/QeknUKdTRqmjY51aTf0YPNiGEEOgHbCvUh9VQFIhe3xJnQzZm92b7O5BPL+33XPv2Qt/9vzvPckAKIqiKIqiKIqiKIqiKIqiKErkkO2E9BJzFAs5KtTzZPU7daJaiBIMFUAYFUAYFUAYFUCYgbAS2br/f52wdoP6BgijAgijAgijAgijAggT2i5Ie0S9oW+AMCqAMCqAMCqAMCqAMNoL6hHtBR0RVABhVABhVABhVABhQtsFSTC1zKP7Ln71CG3W8/Ry7AvqgUPxBmTKPDdZ5RO285qMnNd9Apa7zZus8olMmedsnxcF4gKkKzzDhKvNJpbTFZ6xmux6C+ASlozPW+JzzSbKTLhq/bwIEBUgU+ZTYHzSuhwG44v0Epcmq/xCkPlMyHsHOgUYX+SRTIVvASgBeL417rNsmad6WnxIiAkwvsgjTPgRwLMHQuf2m7ifvcdjAdJMe91MOqi2X2fv8VgyhQoz3jowNOUS7owv8kjwlYeLmADHBnEDwLgpvsP4rdv8qWUeBfCSR2izOk2b7Tf2h7FJwL4h1fgzKXzpt96oEBEgXeEZj7/GpzQSjNcfvUp/dsthMmBmVA7eW5ugbWIUAfxlSFeU8oPYBThQ9zsg4EqtQFVT/F8MBgynUwAAWCnQKggfGfMJ+UGsAkys8TATSuis+wAAJny/kqdA5cDGgJ9Sz9FNBm4ZwimXUDr+Ez8X5PlhEasAiQbmAbxiCG/s7cKmDHgacNPnDOAkMQvggSF8fHAANy3W0DexCeBX910HxfWztBUkVzcDfpinx93mrmRpx3EPjx/EIoBf3Qdhdm2aakHz2RiwF7XTtMaMK8YBMfpB5AL41X0Ad+o5+toqqaUBe7FaoK8AfGMIx+YHkQvg7OJzmOv+A0riknVS8hbA8an/HWmSuIzufjBvuzRbIhXgVJnfBXDBEG64Dt5cydKObV6GtwB7XXZAXrT5gWkNF9IVfsd2fTaIN+Ns6ceADyORCtCqs7cN4ZTj4rtMjYdscvbagvYiU+Mh10EJgGkNt639yZLI3wB3EB8AeGgIn+Q9y313Dy1oE7yHGwBOGsKPdvcxa5vTlsgFCNCHOW9TZ3s5AXvR8qe3DeGGwyj69aPCIBYPaPVhPjYOYMxPLHM2YLqeTsDtZO/zBBGuGwcQPgzUjwqB2Ey4nqMFInxrCKccFyW/vnwYBtxW903nklI9RwtBcoVBrLugZgqzMPvBWHIQXX/wfk/AAODuYR7d6779uaQPYhXAzw+I8UZmid8zJujzBJyu8CUCLhrCsdX9dmI/B/j5AQPXTX2Yfgy41Y/61DggxrrfjshBzM8PmoQfDH2Yngw4QD8q1rrfjthJ+MkuLgNYN8WHCC+2X3cx4Md+BjywjVE2fwlt/e8GzGUvYsQEWD9LW8R4DZ1+cPcYUKidoY32m10M2Lf81M7QBg9iGtxh8g2HcT7o5xBRINoLOuAHW8y4WM9TsZKnPzoG92nAaxO0XS/Q+wCKAH4HIFb32xFvxtVztECMa4kEcqsFMvlCaC3oep7uJhI4TYxrUnW/nUPx5dyVAs35jQmrBQ0AP0/RLwB8nxkHh0KAINTzNCq9higQL0H/d1QAYVQAYVQAYVQAYfT/BQmjb4AwKoAwKoAwKoAwKoCiKIqiKIqiKIqiKIqiKIqiHH3+ARw90MK30gxuAAAAAElFTkSuQmCC\"\n          />\n          <span class=\"bmenu-title\">Analysis</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#analysis-form').on('submit', function (e) {
                var chartType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#anal-type').val();
                var sat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#anal-sat').val();
                var sensor = sensorManager.currentSensor.shortName;
                if (typeof sensor == 'undefined') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default().colorbox({
                        href: "analysis/index.htm?sat=" + sat + "&type=" + chartType,
                        iframe: true,
                        width: '60%',
                        height: '60%',
                        fastIframe: false,
                        closeButton: false,
                    });
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default().colorbox({
                        href: "analysis/index.htm?sat=" + sat + "&type=" + chartType + "&sensor=" + sensor,
                        iframe: true,
                        width: '60%',
                        height: '60%',
                        fastIframe: false,
                        closeButton: false,
                    });
                }
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#analysis-bpt').on('submit', function (e) {
                var sats = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#analysis-bpt-sats').val();
                if (!sensorManager.checkSensorSelected()) {
                    uiManager.toast("You must select a sensor first!", 'critical');
                }
                else {
                    satellite.findBestPasses(sats, sensorManager.selectedSensor);
                }
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findCsoBtn').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                    var searchStr = satellite.findCloseObjects();
                    uiManager.doSearch(searchStr);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                });
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#analysis-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
                },
                maxWidth: 450,
                minWidth: 280,
            });
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'analysis',
        cb: function (iconName) {
            if (iconName === 'menu-analysis') {
                if (isAnalysisMenuOpen) {
                    isAnalysisMenuOpen = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-analysis').removeClass('bmenu-item-selected');
                    uiManager.hideSideMenus();
                    return;
                }
                else {
                    uiManager.hideSideMenus();
                    isAnalysisMenuOpen = true;
                    if (objectManager.selectedSat != -1) {
                        var sat = satSet.getSat(objectManager.selectedSat);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#anal-sat').val(sat.SCC_NUM);
                    }
                    if (sensorManager.checkSensorSelected()) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#anal-type').html("<optgroup label=\"Orbital Parameters\">\n                <option value='inc'>Inclination</option>\n                <option value='ap'>Apogee</option>\n                <option value='pe'>Perigee</option>\n                <option value='per'>Period</option>\n                <option value='e'>Eccentricity</option>\n                <option value='ra'>RAAN</option>\n                <option value='all'>All</option>\n              </optgroup>\n              <optgroup id=\"anal-look-opt\" label=\"Look Angles\">\n                <option value='az'>Azimuth</option>\n                <option value='el'>Elevation</option>\n                <option value='rng'>Range</option>\n                <option value='rae'>All</option>\n              </optgroup>");
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#anal-type').html("<optgroup label=\"Orbital Parameters\">\n                <option value='inc'>Inclination</option>\n                <option value='ap'>Apogee</option>\n                <option value='pe'>Perigee</option>\n                <option value='per'>Period</option>\n                <option value='e'>Eccentricity</option>\n                <option value='ra'>RAAN</option>\n                <option value='all'>All</option>\n              </optgroup>");
                    }
                    // Reinitialize the Material CSS Code
                    var elems = document.querySelectorAll('select');
                    M.FormSelect.init(elems);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#analysis-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-analysis').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: 'analysis',
        cb: function (sat) {
            if (uiManager.isAnalysisMenuOpen) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#anal-sat').val(sat.SCC_NUM);
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'analysis',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#analysis-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-analysis').removeClass('bmenu-item-selected');
            isAnalysisMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_analysis_analysis_ts.c6b041ee9edfa57b6718.js.map