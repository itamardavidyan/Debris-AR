"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_externalSources_externalSources_ts"],{

/***/ "./src/js/plugins/externalSources/externalSources.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/externalSources/externalSources.ts ***!
  \***********************************************************/
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
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, satSet = _a.satSet, uiManager = _a.uiManager;
    var isExternalMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'shortTermFences',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"external-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"external-inner-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">External TLE Menu</h5>\n              <li class=\"divider\"></li>\n            </ul>\n            <h5 class=\"center-align\">N2YO Lookup</h5>\n            <li class=\"divider\"></li>\n            <div class=\"row\"></div>\n            <form id=\"n2yo-form\">\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input value=\"25544\" id=\"ext-n2yo\" type=\"text\" />\n                  <label for=\"anal-sat\" class=\"active\">Satellite Number</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <center>\n                  <button id=\"n2yo-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Load TLE &#9658;</button>\n                </center>\n              </div>\n            </form>\n            <h5 class=\"center-align\">Celestrak Lookup</h5>\n            <li class=\"divider\"></li>\n            <div class=\"row\"></div>\n            <form id=\"celestrak-form\">\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input value=\"25544\" id=\"ext-celestrak\" type=\"text\" />\n                  <label for=\"anal-sat\" class=\"active\">Satellite Number</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <center>\n                  <button id=\"celestrak-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Load TLE &#9658;</button>\n                </center>\n              </div>\n            </form>\n          </div>\n        </div>\n      "], ["\n        <div id=\"external-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"external-inner-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">External TLE Menu</h5>\n              <li class=\"divider\"></li>\n            </ul>\n            <h5 class=\"center-align\">N2YO Lookup</h5>\n            <li class=\"divider\"></li>\n            <div class=\"row\"></div>\n            <form id=\"n2yo-form\">\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input value=\"25544\" id=\"ext-n2yo\" type=\"text\" />\n                  <label for=\"anal-sat\" class=\"active\">Satellite Number</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <center>\n                  <button id=\"n2yo-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Load TLE &#9658;</button>\n                </center>\n              </div>\n            </form>\n            <h5 class=\"center-align\">Celestrak Lookup</h5>\n            <li class=\"divider\"></li>\n            <div class=\"row\"></div>\n            <form id=\"celestrak-form\">\n              <div class=\"row\">\n                <div class=\"input-field col s12\">\n                  <input value=\"25544\" id=\"ext-celestrak\" type=\"text\" />\n                  <label for=\"anal-sat\" class=\"active\">Satellite Number</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <center>\n                  <button id=\"celestrak-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Load TLE &#9658;</button>\n                </center>\n              </div>\n            </form>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-external\" class=\"bmenu-item\">\n          <img\n            alt=\"external\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACS0lEQVR4nO3cPW4TURSG4fdGCCkKO7HshqFLgeiCxH7SxZReDymygKTCTTAusg6Q8mPhS4GCLMBxzMydc+6Z7yljR558r8YeW1ZARERERERERERERKS4ZH0ApYznOff1WIsm/feOB10eiOxPAYwpgDEFMKYAxsJeBbUxuc5HecU58PY599dVUIf2Hb8tBdjQ9/igAL9ZjA8KAMBomV+tV1zwxPgZLks89uADTK7z0cEtnxIcb7tPgqvVHe9LPP6LNr/c5+ct+8iJ6dfX6eOu+z3naSfB1f0dJzfH6dt43v2fG+4MKDV+pwe5IVSA2saHQAFqHB+CBKh1fAgQoObxoeVV0DZtPhspwev4EOAM2MXz+BA8gPfxIXCAGsaHoAFqGR8CBqhpfAgWoLbxIVCAGseHIAFqHR8KvRHrU9fjTz7n6Zc3afqv20q8waz6DCgxfk6cdXqQO1QbIML4UGmAKONDhQEijQ+VBYg2PlQUoMSlpvX4UEmAmq/zd3EfIPL44DxA9PHBcYAhjA9OAwxlfHAYYEjjg7MAQxsfHAUY4vjg5OPo0TK/XN9y8dRXxDNcrg85uWnS9z6PrTQXZ8BylB4SnG+7/fH7+ctRrPHBSQCARZNmwOmfP4/4tLPJTQD4O0L08cHJa8CmRZNm43kmwYfo44OzM+DRokmzH4e8iz4+OA0Av16YrY+hD24DDIUCGFMAYwpgTAGMKYAxBTCmAMYUwJgCGFMAY0U+DfX6f4Q80hlgTAGMKYAxBTCmACIiIiIiIiIiIiIi8f0EO/G3ftHy+QwAAAAASUVORK5CYII=\"\n          />\n          <span class=\"bmenu-title\">External Source</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-external\" class=\"bmenu-item\">\n          <img\n            alt=\"external\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACS0lEQVR4nO3cPW4TURSG4fdGCCkKO7HshqFLgeiCxH7SxZReDymygKTCTTAusg6Q8mPhS4GCLMBxzMydc+6Z7yljR558r8YeW1ZARERERERERERERKS4ZH0ApYznOff1WIsm/feOB10eiOxPAYwpgDEFMKYAxsJeBbUxuc5HecU58PY599dVUIf2Hb8tBdjQ9/igAL9ZjA8KAMBomV+tV1zwxPgZLks89uADTK7z0cEtnxIcb7tPgqvVHe9LPP6LNr/c5+ct+8iJ6dfX6eOu+z3naSfB1f0dJzfH6dt43v2fG+4MKDV+pwe5IVSA2saHQAFqHB+CBKh1fAgQoObxoeVV0DZtPhspwev4EOAM2MXz+BA8gPfxIXCAGsaHoAFqGR8CBqhpfAgWoLbxIVCAGseHIAFqHR8KvRHrU9fjTz7n6Zc3afqv20q8waz6DCgxfk6cdXqQO1QbIML4UGmAKONDhQEijQ+VBYg2PlQUoMSlpvX4UEmAmq/zd3EfIPL44DxA9PHBcYAhjA9OAwxlfHAYYEjjg7MAQxsfHAUY4vjg5OPo0TK/XN9y8dRXxDNcrg85uWnS9z6PrTQXZ8BylB4SnG+7/fH7+ctRrPHBSQCARZNmwOmfP4/4tLPJTQD4O0L08cHJa8CmRZNm43kmwYfo44OzM+DRokmzH4e8iz4+OA0Av16YrY+hD24DDIUCGFMAYwpgTAGMKYAxBTCmAMYUwJgCGFMAY0U+DfX6f4Q80hlgTAGMKYAxBTCmACIiIiIiIiIiIiIi8f0EO/G3ftHy+QwAAAAASUVORK5CYII=\"\n          />\n          <span class=\"bmenu-title\">External Source</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#n2yo-form').on('submit', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                    var satnum = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ext-n2yo').val());
                    searchN2yo(satnum);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                });
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#celestrak-form').on('submit', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                    var satnum = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ext-celestrak').val());
                    searchCelestrak(satnum);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                });
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#external-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
                },
                maxWidth: 450,
                minWidth: 280,
            });
        },
    });
    var searchCelestrak = function (satNum, analsat) {
        var satData = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.satData;
        // If no Analyst Satellite specified find the first unused one
        if (typeof analsat == 'undefined') {
            for (var i = 15000; i < satData.length; i++) {
                if (satData[i].SCC_NUM >= 80000 && !satData[i].active) {
                    analsat = i;
                    break;
                }
            }
        }
        else {
            // Satnum to Id
            analsat = satSet.getIdFromObjNum(analsat);
        }
        var request = new XMLHttpRequest();
        request.open('GET', "php/get_data.php?type=c&sat=" + satNum, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var tles = JSON.parse(this.response).split('\n');
                var TLE1 = tles[1];
                var TLE2 = tles[2];
                if (TLE1.substr(0, 2) !== '1 ')
                    throw new Error('N2YO TLE 1 is not a valid TLE');
                if (TLE2.substr(0, 2) !== '2 ')
                    throw new Error('N2YO TLE 2 is not a valid TLE');
                satSet.insertNewAnalystSatellite(TLE1, TLE2, analsat);
            }
            else {
                // We reached our target server, but it returned an error
                console.debug('Celestrack request returned an error!');
            }
        };
        request.onerror = function () {
            console.debug('Celestrack request failed!');
        };
        request.send();
    };
    var searchN2yo = function (satNum, analsat) {
        var satData = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.satData;
        // If no Analyst Satellite specified find the first unused one
        if (typeof analsat == 'undefined') {
            for (var i = 15000; i < satData.length; i++) {
                if (satData[i].SCC_NUM >= 80000 && !satData[i].active) {
                    analsat = i;
                    break;
                }
            }
        }
        else {
            // Satnum to Id
            analsat = satSet.getIdFromObjNum(analsat);
        }
        var request = new XMLHttpRequest();
        request.open('GET', "php/get_data.php?type=n&sat=" + satNum, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var tles = this.response.split('<div id="tle">')[1].split('<pre>')[1].split('\n');
                var TLE1 = tles[1];
                var TLE2 = tles[2];
                if (TLE1.substr(0, 2) !== '1 ')
                    throw new Error('N2YO TLE 1 is not a valid TLE');
                if (TLE2.substr(0, 2) !== '2 ')
                    throw new Error('N2YO TLE 2 is not a valid TLE');
                satSet.insertNewAnalystSatellite(TLE1, TLE2, analsat);
            }
            else {
                // We reached our target server, but it returned an error
                console.debug('N2YO request returned an error!');
            }
        };
        request.onerror = function () {
            console.debug('N2YO request failed!');
        };
        request.send();
    };
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'shortTermFences',
        cb: function (iconName) {
            if (iconName === 'menu-external') {
                if (isExternalMenuOpen) {
                    isExternalMenuOpen = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-external').removeClass('bmenu-item-selected');
                    uiManager.hideSideMenus();
                    return;
                }
                else {
                    uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#external-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.watchlist.updateWatchlist();
                    isExternalMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-external').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'shortTermFences',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#external-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-external').removeClass('bmenu-item-selected');
            isExternalMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_externalSources_externalSources_ts.f790d43d445c4b6873ce.js.map