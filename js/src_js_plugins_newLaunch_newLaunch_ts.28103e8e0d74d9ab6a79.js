"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_newLaunch_newLaunch_ts"],{

/***/ "./src/js/plugins/newLaunch/newLaunch.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/newLaunch/newLaunch.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.js");
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var init = function () {
    var isNewLaunchMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'newLaunch',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"newLaunch-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"newLaunch-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <h5 class=\"center-align\">New Launch</h5>\n              <form id=\"newLaunch\" class=\"col s12\">\n                <div class=\"input-field col s12\">\n                  <input disabled value=\"00005\" id=\"nl-scc\" type=\"text\">\n                  <label for=\"disabled\" class=\"active\">Satellite SCC#</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input disabled value=\"50.00\" id=\"nl-inc\" type=\"text\">\n                  <label for=\"disabled\" class=\"active\">Inclination</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <select value=\"50.00\" id=\"nl-updown\" type=\"text\">\n                    <option value=\"N\">North</option>\n                    <option value=\"S\">South</option>\n                  </select>\n                  <label for=\"disabled\">Launching North or South</label>\n                </div>\n                <div class=\"input-field col s12\" id=\"nl-launch-menu\">\n                  <select id=\"nl-facility\">\n                    <optgroup label=\"United States\">\n                      <option value=\"CAS\">Canary Island Air Space (Pegasus)</option>\n                      <option value=\"AFETR\">Cape Canaveral AFS | Kennedy Space Center</option>\n                      <option value=\"ERAS\">Eastern Range Air Space (Pegasus)</option>\n                      <option value=\"KODAK\">Kodiak Launch Complex</option>\n                      <option value=\"KWAJ\">Reagan Test Site</option>\n                      <option value=\"AFWTR\">Vandenberg AFB</option>\n                      <option value=\"WLPIS\">Wallops Flight Facility</option>\n                      <option value=\"WRAS\">Western Range Air Space (Pegasus)</option>\n                    </optgroup>\n                    <optgroup label=\"Russia\">\n                      <option value=\"KYMTR\">Kasputin Yar MSC</option>\n                      <option value=\"PKMTR\">Plesetsk MSC</option>\n                      <option value=\"SEAL\">Sea Launch Platform</option>\n                      <option value=\"SADOL\">Submarine Launch, Barents Sea</option>\n                      <option value=\"TTMTR\">Tyuratam MSC | Baikonur Cosmodrome</option>\n                      <option value=\"VOSTO\">Vostochny Cosmodrome</option>\n                      <option value=\"OREN\">Yasny (Dombarovskiy) Cosmodrome</option>\n                    </optgroup>\n                    <optgroup label=\"China\">\n                      <option value=\"JSC\">Jiuquan SLC</option>\n                      <option value=\"TSC\">Taiyuan SLC</option>\n                      <option value=\"WSC\">Wenchang SLC</option>\n                      <option value=\"XSC\">Xichang SLC</option>\n                    </optgroup>\n                    <optgroup label=\"Japan\">\n                      <option value=\"TNSTA\">Tanegashima Space Center</option>\n                      <option value=\"KSCUT\">Uchinoura Space Center</option>\n                    </optgroup>\n                    <optgroup label=\"North Korea\">\n                      <option value=\"YUN\">Sohae Satellite Launch Station</option>\n                      <option value=\"TNGH\">Tonghae Satellite Launching Ground</option>\n                    </optgroup>\n                    <optgroup label=\"Other\">\n                      <option value=\"FRGUI\">Guiana Space Centre (Kourou FG)</option>\n                      <option value=\"HGSTR\">Hammaguira Space Track Range</option>\n                      <option value=\"NSC\">Naro Space Center</option>\n                      <option value=\"YAVNE\">Palmachim Air Force Base</option>\n                      <option value=\"RLLC\">Rocket Labs Launch Complex</option>\n                      <option value=\"SNMLP\">San Marco Launch Platform</option>\n                      <option value=\"SRI\">Satish Dhawan Space Centre (Sriharikota IN)</option>\n                      <option value=\"SEM\">Semnan Spaceport</option>\n                      <option value=\"WOMRA\">Woomera Test Range</option>\n                    </optgroup>\n                  </select>\n                  <label>Launch Facility</label>\n                </div>\n                <div class=\"center-align\">\n                  <button class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Create Launch\n                    Nominal &#9658;\n                  </button>\n                </div>\n              </form>\n            </div>\n            <div id=\"nl-error\" class=\"center-align menu-selectable start-hidden\">\n              <h6 class=\"center-align\">Error</h6>\n            </div>\n          </div>\n        </div>\n      "], ["\n        <div id=\"newLaunch-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"newLaunch-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <h5 class=\"center-align\">New Launch</h5>\n              <form id=\"newLaunch\" class=\"col s12\">\n                <div class=\"input-field col s12\">\n                  <input disabled value=\"00005\" id=\"nl-scc\" type=\"text\">\n                  <label for=\"disabled\" class=\"active\">Satellite SCC#</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input disabled value=\"50.00\" id=\"nl-inc\" type=\"text\">\n                  <label for=\"disabled\" class=\"active\">Inclination</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <select value=\"50.00\" id=\"nl-updown\" type=\"text\">\n                    <option value=\"N\">North</option>\n                    <option value=\"S\">South</option>\n                  </select>\n                  <label for=\"disabled\">Launching North or South</label>\n                </div>\n                <div class=\"input-field col s12\" id=\"nl-launch-menu\">\n                  <select id=\"nl-facility\">\n                    <optgroup label=\"United States\">\n                      <option value=\"CAS\">Canary Island Air Space (Pegasus)</option>\n                      <option value=\"AFETR\">Cape Canaveral AFS | Kennedy Space Center</option>\n                      <option value=\"ERAS\">Eastern Range Air Space (Pegasus)</option>\n                      <option value=\"KODAK\">Kodiak Launch Complex</option>\n                      <option value=\"KWAJ\">Reagan Test Site</option>\n                      <option value=\"AFWTR\">Vandenberg AFB</option>\n                      <option value=\"WLPIS\">Wallops Flight Facility</option>\n                      <option value=\"WRAS\">Western Range Air Space (Pegasus)</option>\n                    </optgroup>\n                    <optgroup label=\"Russia\">\n                      <option value=\"KYMTR\">Kasputin Yar MSC</option>\n                      <option value=\"PKMTR\">Plesetsk MSC</option>\n                      <option value=\"SEAL\">Sea Launch Platform</option>\n                      <option value=\"SADOL\">Submarine Launch, Barents Sea</option>\n                      <option value=\"TTMTR\">Tyuratam MSC | Baikonur Cosmodrome</option>\n                      <option value=\"VOSTO\">Vostochny Cosmodrome</option>\n                      <option value=\"OREN\">Yasny (Dombarovskiy) Cosmodrome</option>\n                    </optgroup>\n                    <optgroup label=\"China\">\n                      <option value=\"JSC\">Jiuquan SLC</option>\n                      <option value=\"TSC\">Taiyuan SLC</option>\n                      <option value=\"WSC\">Wenchang SLC</option>\n                      <option value=\"XSC\">Xichang SLC</option>\n                    </optgroup>\n                    <optgroup label=\"Japan\">\n                      <option value=\"TNSTA\">Tanegashima Space Center</option>\n                      <option value=\"KSCUT\">Uchinoura Space Center</option>\n                    </optgroup>\n                    <optgroup label=\"North Korea\">\n                      <option value=\"YUN\">Sohae Satellite Launch Station</option>\n                      <option value=\"TNGH\">Tonghae Satellite Launching Ground</option>\n                    </optgroup>\n                    <optgroup label=\"Other\">\n                      <option value=\"FRGUI\">Guiana Space Centre (Kourou FG)</option>\n                      <option value=\"HGSTR\">Hammaguira Space Track Range</option>\n                      <option value=\"NSC\">Naro Space Center</option>\n                      <option value=\"YAVNE\">Palmachim Air Force Base</option>\n                      <option value=\"RLLC\">Rocket Labs Launch Complex</option>\n                      <option value=\"SNMLP\">San Marco Launch Platform</option>\n                      <option value=\"SRI\">Satish Dhawan Space Centre (Sriharikota IN)</option>\n                      <option value=\"SEM\">Semnan Spaceport</option>\n                      <option value=\"WOMRA\">Woomera Test Range</option>\n                    </optgroup>\n                  </select>\n                  <label>Launch Facility</label>\n                </div>\n                <div class=\"center-align\">\n                  <button class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Create Launch\n                    Nominal &#9658;\n                  </button>\n                </div>\n              </form>\n            </div>\n            <div id=\"nl-error\" class=\"center-align menu-selectable start-hidden\">\n              <h6 class=\"center-align\">Error</h6>\n            </div>\n          </div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newLaunch').on('submit', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-error').hide();
                    var scc = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-scc').val();
                    var satId = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.getIdFromObjNum(scc);
                    var sat = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.getSat(satId);
                    var upOrDown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-updown').val();
                    var launchFac = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-facility').val();
                    var launchLat, launchLon;
                    if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.isLaunchSiteManagerLoaded) {
                        for (var launchSite in _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.launchSiteManager.launchSiteList) {
                            if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.launchSiteManager.launchSiteList[launchSite].name === launchFac) {
                                launchLat = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.launchSiteManager.launchSiteList[launchSite].lat;
                                launchLon = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.launchSiteManager.launchSiteList[launchSite].lon;
                            }
                        }
                    }
                    if (launchLon > 180) {
                        // if West not East
                        launchLon -= 360; // Convert from 0-360 to -180-180
                    }
                    // if (sat.inclination * RAD2DEG < launchLat) {
                    //   keepTrackApi.programs.uiManager.toast(`Satellite Inclination Lower than Launch Latitude!`, 'critical');
                    //   $('#loading-screen').fadeOut('slow');
                    //   return;
                    // }
                    // Set time to 0000z for relative time.
                    var today = new Date(); // Need to know today for offset calculation
                    var quadZTime = new Date(today.getFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0); // New Date object of the future collision
                    // Date object defaults to local time.
                    quadZTime.setUTCHours(0); // Move to UTC Hour
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.propOffset = quadZTime.getTime() - today.getTime(); // Find the offset from today
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.cameraManager.camSnapMode = false;
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.satCruncher.postMessage({
                        // Tell satSet.satCruncher we have changed times for orbit calculations
                        typ: 'offset',
                        dat: _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.propOffset.toString() + ' ' + (1.0).toString(),
                    });
                    var TLEs = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.propOffset);
                    var TLE1 = TLEs[0];
                    var TLE2 = TLEs[1];
                    if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.altitudeCheck(TLE1, TLE2, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.propOffset) > 1) {
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.satCruncher.postMessage({
                            typ: 'satEdit',
                            id: satId,
                            active: true,
                            TLE1: TLE1,
                            TLE2: TLE2,
                        });
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
                        sat = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.getSat(satId);
                    }
                    else {
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.toast("Failed Altitude Test - Try a Different Satellite!", 'critical');
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                });
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-error').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-error').hide();
            });
            // Allow resizing of the side menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newLaunch-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
                },
                maxWidth: 450,
                minWidth: 280,
            });
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-newLaunch\" class=\"bmenu-item\">\n          <img alt=\"rocket\" src=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">New Launch</span>\n          <div class=\"status-icon\"></div>\n        </div>  \n      "], ["\n        <div id=\"menu-newLaunch\" class=\"bmenu-item\">\n          <img alt=\"rocket\" src=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">New Launch</span>\n          <div class=\"status-icon\"></div>\n        </div>  \n      "]))));
        },
    });
    var aM = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.adviceManager;
    // Add Advice Info
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'adviceReady',
        cbName: 'newLaunch',
        cb: function () {
            aM.adviceCount.newLaunch = 0;
            aM.adviceCount.newLaunchDisabled = 0;
            aM.adviceList.newLaunchDisabled = function () {
                // Only Do this Twice
                if (aM.adviceCount.newLaunchDisabled >= 3)
                    return;
                aM.adviceCount.newLaunchDisabled += 1;
                aM.adviceManager.showAdvice('Create Launch Nominal', 'Creating a Launch Nominal requres a satellite to be selected first. Pick a satellite whose orbit is close to your upcomming launch!', null, 'bottom-right');
            };
            aM.adviceArray.push(aM.adviceList.socrates);
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'newLaunch',
        cb: function (iconName) {
            if (iconName === 'menu-newLaunch') {
                if (isNewLaunchMenuOpen) {
                    isNewLaunchMenuOpen = false;
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.selectedSat !== -1) {
                        if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.settingsManager.isMobileModeEnabled)
                            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.searchToggle(false);
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.hideSideMenus();
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newLaunch-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-newLaunch').addClass('bmenu-item-selected');
                        isNewLaunchMenuOpen = true;
                        var sat = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.getSatExtraOnly(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.selectedSat);
                        if (sat) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-scc').val(sat.SCC_NUM);
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-inc').val((sat.inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG).toPrecision(2));
                        }
                    }
                    else {
                        aM.adviceList.newLaunchDisabled();
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.toast("Select a Satellite First!", 'caution');
                        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-newLaunch:animated').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-newLaunch').effect('shake', {
                                distance: 10,
                            });
                        }
                    }
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'newLaunch',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newLaunch-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-newLaunch').removeClass('bmenu-item-selected');
            isNewLaunchMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_newLaunch_newLaunch_ts.28103e8e0d74d9ab6a79.js.map