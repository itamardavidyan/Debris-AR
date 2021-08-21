"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_dops_dops_ts"],{

/***/ "./src/js/plugins/dops/dops.ts":
/*!*************************************!*\
  !*** ./src/js/plugins/dops/dops.ts ***!
  \*************************************/
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
    var isDOPMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'dops',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"dops-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"dops-content\" class=\"side-menu\">\n            <form id=\"dops-form\">\n              <div class=\"switch row\">\n                <h5 class=\"center-align\">DOP Table</h5>\n                <div class=\"input-field col s3\">\n                  <input value=\"41\" id=\"dops-lat\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Latitude in Degrees\">\n                  <label for=\"dops-lat\" class=\"active\">Latitude</label>\n                </div>\n                <div class=\"input-field col s3\">\n                  <input value=\"-71\" id=\"dops-lon\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Longitude in Degrees\">\n                  <label for=\"dops-lon\" class=\"active\">Longitude</label>\n                </div>\n                <div class=\"input-field col s3\">\n                  <input value=\"-71\" id=\"dops-alt\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Altitude in KM\">\n                  <label for=\"dops-lon\" class=\"active\">Altitude</label>\n                </div>\n                <div class=\"input-field col s3\">\n                  <input value=\"15\" id=\"dops-el\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Minimum Elevation for GPS Lock\">\n                  <label for=\"dops-el\" class=\"active\">Mask</label>\n                </div>\n              </div>\n              <div class=\"row center\">\n                <button id=\"dops-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\"\n                  name=\"action\">Update DOP Data &#9658;\n                </button>\n              </div>\n            </form>\n            <div class=\"row\">\n              <table id=\"dops\" class=\"center-align striped-light centered\"></table>\n            </div>\n          </div>\n        </div>\n      "], ["\n        <div id=\"dops-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"dops-content\" class=\"side-menu\">\n            <form id=\"dops-form\">\n              <div class=\"switch row\">\n                <h5 class=\"center-align\">DOP Table</h5>\n                <div class=\"input-field col s3\">\n                  <input value=\"41\" id=\"dops-lat\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Latitude in Degrees\">\n                  <label for=\"dops-lat\" class=\"active\">Latitude</label>\n                </div>\n                <div class=\"input-field col s3\">\n                  <input value=\"-71\" id=\"dops-lon\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Longitude in Degrees\">\n                  <label for=\"dops-lon\" class=\"active\">Longitude</label>\n                </div>\n                <div class=\"input-field col s3\">\n                  <input value=\"-71\" id=\"dops-alt\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Altitude in KM\">\n                  <label for=\"dops-lon\" class=\"active\">Altitude</label>\n                </div>\n                <div class=\"input-field col s3\">\n                  <input value=\"15\" id=\"dops-el\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Minimum Elevation for GPS Lock\">\n                  <label for=\"dops-el\" class=\"active\">Mask</label>\n                </div>\n              </div>\n              <div class=\"row center\">\n                <button id=\"dops-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\"\n                  name=\"action\">Update DOP Data &#9658;\n                </button>\n              </div>\n            </form>\n            <div class=\"row\">\n              <table id=\"dops\" class=\"center-align striped-light centered\"></table>\n            </div>\n          </div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-form').on('submit', function (e) {
                _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                isDOPMenuOpen = true;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                    var lat = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-lat').val());
                    var lon = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-lon').val());
                    var alt = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-alt').val());
                    var el = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-el').val());
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.gpsElevationMask = el;
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satellite.getDOPsTable(lat, lon, alt);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-dops').addClass('bmenu-item-selected');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                });
                e.preventDefault();
            });
            // Allow resizing of the side menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
                },
                maxWidth: 450,
                minWidth: 280,
            });
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-dops\" class=\"bmenu-item\">\n          <img alt=\"gps\" src=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">DOPs</span>\n          <div class=\"status-icon\"></div>\n        </div>      \n      "], ["\n        <div id=\"menu-dops\" class=\"bmenu-item\">\n          <img alt=\"gps\" src=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">DOPs</span>\n          <div class=\"status-icon\"></div>\n        </div>      \n      "]))));
        },
    });
    // Add Advice Info
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'adviceReady',
        cbName: 'dops',
        cb: function () {
            var aM = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.adviceManager;
            aM.adviceCount.socrates = 0;
            aM.adviceList.socrates = function () {
                // Only Do this Twice
                if (aM.adviceCount.socrates >= 3)
                    return;
                aM.adviceCount.socrates += 1;
                aM.showAdvice('SOCRATES Near Conjunction List', 'Did you know that objects frequently come close to colliding? Using data from Center for Space Standars and Innovation you can find upcomming possible collisions.', jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-satellite-collision'), 'bottom');
            };
            aM.adviceArray.push(aM.adviceList.socrates);
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'dops',
        cb: function (iconName) {
            if (iconName === 'menu-dops') {
                if (isDOPMenuOpen) {
                    isDOPMenuOpen = false;
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    return;
                }
                else {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    isDOPMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                        var lat = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-lat').val());
                        var lon = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-lon').val());
                        var alt = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-alt').val());
                        var el = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-el').val());
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.gpsElevationMask = el;
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satellite.getDOPsTable(lat, lon, alt);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-dops').addClass('bmenu-item-selected');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    });
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'dops',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dops-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-dops').removeClass('bmenu-item-selected');
            isDOPMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_dops_dops_ts.9f3a652528395bbe39a5.js.map