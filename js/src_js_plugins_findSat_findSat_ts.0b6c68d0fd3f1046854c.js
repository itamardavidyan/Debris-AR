"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_findSat_findSat_ts"],{

/***/ "./src/js/plugins/findSat/findSat.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/findSat/findSat.ts ***!
  \*******************************************/
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
    var isFindByLooksMenuOpen = false;
    var checkInc = function (possibles, minInc, maxInc) {
        var incRes = [];
        for (var i = 0; i < possibles.length; i++) {
            if (possibles[i].inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG < maxInc && possibles[i].inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG > minInc) {
                incRes.push(possibles[i]);
            }
        }
        return incRes;
    };
    var checkPeriod = function (possibles, minPeriod, maxPeriod) {
        var periodRes = [];
        for (var i = 0; i < possibles.length; i++) {
            if (possibles[i].period < maxPeriod && possibles[i].period > minPeriod && periodRes.length <= 200) {
                // Don't display more than 200 results - this is because LEO and GEO belt have a lot of satellites
                periodRes.push(possibles[i]);
            }
        }
        if (periodRes.length >= 200) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks-results').text('Limited to 200 Results!');
        }
        return periodRes;
    };
    var checkRcs = function (possibles, minRcs, maxRcs) {
        var rcsRes = [];
        for (var i = 0; i < possibles.length; i++) {
            if (parseFloat(possibles[i].R) < maxRcs && parseFloat(possibles[i].R) > minRcs && rcsRes.length <= 200) {
                // Don't display more than 200 results - this is because LEO and GEO belt have a lot of satellites
                rcsRes.push(possibles[i]);
            }
        }
        if (rcsRes.length >= 200) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks-results').text('Limited to 200 Results!');
        }
        return rcsRes;
    };
    var searchAzElRange = function (azimuth, elevation, range, inclination, azMarg, elMarg, rangeMarg, incMarg, period, periodMarg, rcs, rcsMarg, objtypeStr) {
        var isCheckAz = !isNaN(parseFloat(azimuth)) && isFinite(parseFloat(azimuth));
        var isCheckEl = !isNaN(parseFloat(elevation)) && isFinite(parseFloat(elevation));
        var isCheckRange = !isNaN(parseFloat(range)) && isFinite(parseFloat(range));
        var isCheckInclination = !isNaN(parseFloat(inclination)) && isFinite(parseFloat(inclination));
        var isCheckPeriod = !isNaN(parseFloat(period)) && isFinite(parseFloat(period));
        var isCheckRcs = !isNaN(parseFloat(rcs)) && isFinite(parseFloat(rcs));
        var isCheckAzMarg = !isNaN(parseFloat(azMarg)) && isFinite(parseFloat(azMarg));
        var isCheckElMarg = !isNaN(parseFloat(elMarg)) && isFinite(parseFloat(elMarg));
        var isCheckRangeMarg = !isNaN(parseFloat(rangeMarg)) && isFinite(parseFloat(rangeMarg));
        var isCheckIncMarg = !isNaN(parseFloat(incMarg)) && isFinite(parseFloat(incMarg));
        var isCheckPeriodMarg = !isNaN(parseFloat(periodMarg)) && isFinite(parseFloat(periodMarg));
        var isCheckRcsMarg = !isNaN(parseFloat(rcsMarg)) && isFinite(parseFloat(rcsMarg));
        var objtype = parseFloat(objtypeStr); // String to Number
        if (!isCheckEl && !isCheckRange && !isCheckAz && !isCheckInclination && !isCheckPeriod && !isCheckRcs)
            return; // Ensure there is a number typed.
        var checkInview = function (possibles) {
            var inviewRes = [];
            for (var i = 0; i < possibles.length; i++) {
                if (possibles[i].inview) {
                    inviewRes.push(possibles[i]);
                }
            }
            return inviewRes;
        };
        var checkObjtype = function (possibles) {
            var objtypeRes = [];
            for (var i = 0; i < possibles.length; i++) {
                if (possibles[i].OT === objtype) {
                    objtypeRes.push(possibles[i]);
                }
            }
            return objtypeRes;
        };
        var checkAz = function (possibles, minaz, maxaz) {
            var azRes = [];
            for (var i = 0; i < possibles.length; i++) {
                if (possibles[i].az < maxaz && possibles[i].az > minaz) {
                    azRes.push(possibles[i]);
                }
            }
            return azRes;
        };
        var checkEl = function (possibles, minel, maxel) {
            var elRes = [];
            for (var i = 0; i < possibles.length; i++) {
                if (possibles[i].el < maxel && possibles[i].el > minel) {
                    elRes.push(possibles[i]);
                }
            }
            return elRes;
        };
        var checkRange = function (possibles, minrange, maxrange) {
            var rangeRes = [];
            for (var i = 0; i < possibles.length; i++) {
                if (possibles[i].rng < maxrange && possibles[i].rng > minrange) {
                    rangeRes.push(possibles[i]);
                }
            }
            return rangeRes;
        };
        if (!isCheckAzMarg) {
            azMarg = 5;
        }
        if (!isCheckElMarg) {
            elMarg = 5;
        }
        if (!isCheckRangeMarg) {
            rangeMarg = 200;
        }
        if (!isCheckIncMarg) {
            incMarg = 1;
        }
        if (!isCheckPeriodMarg) {
            periodMarg = 0.5;
        }
        if (!isCheckRcsMarg) {
            rcsMarg = rcs / 10;
        }
        var res = [];
        var s = 0;
        var satData = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satSet.satData;
        for (var i = 0; i < satData.length; i++) {
            if (satData[i].static || satData[i].missile || !satData[i].active) {
                continue;
            }
            res.push(satData[i]);
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.getTEARR(res[s]);
            res[s].az = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.currentTEARR.az;
            res[s].el = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.currentTEARR.el;
            res[s].rng = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.currentTEARR.rng;
            res[s].inview = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.satellite.currentTEARR.inview;
            s++;
        }
        if (!isCheckInclination && !isCheckPeriod) {
            res = checkInview(res);
        }
        if (objtype !== 0) {
            res = checkObjtype(res);
        }
        if (isCheckAz) {
            azimuth = parseFloat(azimuth); // Convert azimuth to int
            azMarg = parseFloat(azMarg);
            var minaz = azimuth - azMarg;
            var maxaz = azimuth + azMarg;
            res = checkAz(res, minaz, maxaz);
        }
        if (isCheckEl) {
            elevation = parseFloat(elevation); // Convert elevation to int
            elMarg = parseFloat(elMarg);
            var minel = elevation - elMarg;
            var maxel = elevation + elMarg;
            res = checkEl(res, minel, maxel);
        }
        if (isCheckRange) {
            range = parseFloat(range); // Convert range to int
            rangeMarg = parseFloat(rangeMarg);
            var minrange = range - rangeMarg;
            var maxrange = range + rangeMarg;
            res = checkRange(res, minrange, maxrange);
        }
        if (isCheckInclination) {
            inclination = parseFloat(inclination); // Convert inclination to int
            incMarg = parseFloat(incMarg);
            var minInc = inclination - incMarg;
            var maxInc = inclination + incMarg;
            res = checkInc(res, minInc, maxInc);
        }
        if (isCheckPeriod) {
            period = parseFloat(period); // Convert period to int
            periodMarg = parseFloat(periodMarg);
            var minPeriod = period - periodMarg;
            var maxPeriod = period + periodMarg;
            res = checkPeriod(res, minPeriod, maxPeriod);
        }
        if (isCheckRcs) {
            rcs = parseFloat(rcs); // Convert period to int
            rcsMarg = parseFloat(rcsMarg);
            var minRcs = rcs - rcsMarg;
            var maxRcs = rcs + rcsMarg;
            res = checkRcs(res, minRcs, maxRcs);
        }
        // $('#findByLooks-results').text('');
        // IDEA: Intentionally doesn't clear previous searches. Could be an option later.
        var sccList = [];
        for (var i = 0; i < res.length; i++) {
            // $('#findByLooks-results').append(res[i].SCC_NUM + '<br />');
            if (i < res.length - 1) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val() + res[i].SCC_NUM + ',');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val() + res[i].SCC_NUM);
            }
            sccList.push(res[i].SCC_NUM);
        }
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val());
        // console.log(sccList);
        return res;
    };
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'findSat',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"findByLooks-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"findByLooks-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <h5 class=\"center-align\">Find By Looks</h5>\n              <form id=\"findByLooks\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <select value=0 id=\"fbl-type\" type=\"text\">\n                      <option value=0>All</option>\n                      <option value=1>Payload</option>\n                      <option value=2>Rocket Body</option>\n                      <option value=3>Debris</option>\n                    </select>\n                    <label for=\"disabled\">Object Type</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"xxx.x\" id=\"fbl-azimuth\" type=\"text\">\n                    <label for=\"fbl-azimuth\" class=\"active\">Azimuth</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"5\" id=\"fbl-azimuth-margin\" type=\"text\">\n                    <label for=\"fbl-azimuth-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-elevation\" type=\"text\">\n                    <label for=\"fbl-elevation \"class=\"active\">Elevation</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"5\" id=\"fbl-elevation-margin\" type=\"text\">\n                    <label for=\"fbl-elevation-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"xxxx.x\" id=\"fbl-range\" type=\"text\">\n                    <label for=\"fbl-range \"class=\"active\">Range</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"500\" id=\"fbl-range-margin\" type=\"text\">\n                    <label for=\"fbl-range-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-inc\" type=\"text\">\n                    <label for=\"fbl-inc \"class=\"active\">Inclination</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input value=\"0.5\" placeholder=\"0.5\" id=\"fbl-inc-margin\" type=\"text\">\n                    <label for=\"fbl-inc-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-period\" type=\"text\">\n                    <label for=\"fbl-period \"class=\"active\">Period</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input value=\"10\" placeholder=\"10\" id=\"fbl-period-margin\" type=\"text\">\n                    <label for=\"fbl-period-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-rcs\" type=\"text\">\n                    <label for=\"fbl-rcs \"class=\"active\">RCS</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input value=\"10\" placeholder=\"10\" id=\"fbl-rcs-margin\" type=\"text\">\n                    <label for=\"fbl-rcs-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"center-align\">\n                  <button id=\"findByLooks-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\"\n                    name=\"action\">Find Satellite(s) &#9658;\n                  </button>\n                </div>\n              </form>\n              <div class=\"row center-align\" style=\"margin-top:20px;\">\n                <span id=\"fbl-error\" class=\"menu-selectable\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      "], ["\n        <div id=\"findByLooks-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"findByLooks-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <h5 class=\"center-align\">Find By Looks</h5>\n              <form id=\"findByLooks\">\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <select value=0 id=\"fbl-type\" type=\"text\">\n                      <option value=0>All</option>\n                      <option value=1>Payload</option>\n                      <option value=2>Rocket Body</option>\n                      <option value=3>Debris</option>\n                    </select>\n                    <label for=\"disabled\">Object Type</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"xxx.x\" id=\"fbl-azimuth\" type=\"text\">\n                    <label for=\"fbl-azimuth\" class=\"active\">Azimuth</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"5\" id=\"fbl-azimuth-margin\" type=\"text\">\n                    <label for=\"fbl-azimuth-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-elevation\" type=\"text\">\n                    <label for=\"fbl-elevation \"class=\"active\">Elevation</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"5\" id=\"fbl-elevation-margin\" type=\"text\">\n                    <label for=\"fbl-elevation-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"xxxx.x\" id=\"fbl-range\" type=\"text\">\n                    <label for=\"fbl-range \"class=\"active\">Range</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"500\" id=\"fbl-range-margin\" type=\"text\">\n                    <label for=\"fbl-range-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-inc\" type=\"text\">\n                    <label for=\"fbl-inc \"class=\"active\">Inclination</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input value=\"0.5\" placeholder=\"0.5\" id=\"fbl-inc-margin\" type=\"text\">\n                    <label for=\"fbl-inc-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-period\" type=\"text\">\n                    <label for=\"fbl-period \"class=\"active\">Period</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input value=\"10\" placeholder=\"10\" id=\"fbl-period-margin\" type=\"text\">\n                    <label for=\"fbl-period-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"XX.X\" id=\"fbl-rcs\" type=\"text\">\n                    <label for=\"fbl-rcs \"class=\"active\">RCS</label>\n                  </div>\n                  <div class=\"input-field col s12 m6 l6\">\n                    <input value=\"10\" placeholder=\"10\" id=\"fbl-rcs-margin\" type=\"text\">\n                    <label for=\"fbl-rcs-margin \"class=\"active\">Margin</label>\n                  </div>\n                </div>\n                <div class=\"center-align\">\n                  <button id=\"findByLooks-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\"\n                    name=\"action\">Find Satellite(s) &#9658;\n                  </button>\n                </div>\n              </form>\n              <div class=\"row center-align\" style=\"margin-top:20px;\">\n                <span id=\"fbl-error\" class=\"menu-selectable\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-error').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-error').hide();
            });
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-find-sat\" class=\"bmenu-item\">\n          <img alt=\"find2\" src=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">Find Satellite</span>\n          <div class=\"status-icon\"></div>\n        </div>     \n      "], ["\n        <div id=\"menu-find-sat\" class=\"bmenu-item\">\n          <img alt=\"find2\" src=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">Find Satellite</span>\n          <div class=\"status-icon\"></div>\n        </div>     \n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks').on('submit', function (e) {
                var fblAzimuth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-azimuth').val();
                var fblElevation = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-elevation').val();
                var fblRange = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-range').val();
                var fblInc = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-inc').val();
                var fblPeriod = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-period').val();
                var fblRcs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-rcs').val();
                var fblAzimuthM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-azimuth-margin').val();
                var fblElevationM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-elevation-margin').val();
                var fblRangeM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-range-margin').val();
                var fblIncM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-inc-margin').val();
                var fblPeriodM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-period-margin').val();
                var fblRcsM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-rcs-margin').val();
                var fblType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-type').val();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val(''); // Reset the search first
                var res = searchAzElRange(fblAzimuth, fblElevation, fblRange, fblInc, fblAzimuthM, fblElevationM, fblRangeM, fblIncM, fblPeriod, fblPeriodM, fblRcs, fblRcsM, fblType);
                if (typeof res === 'undefined') {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.toast("No Search Criteria Entered", 'critical');
                }
                else if (res.length === 0) {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.toast("No Satellites Found", 'critical');
                }
                e.preventDefault();
            });
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'findSat',
        cb: function (iconName) {
            if (iconName === 'menu-find-sat') {
                if (isFindByLooksMenuOpen) {
                    isFindByLooksMenuOpen = false;
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.settingsManager.isMobileModeEnabled)
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.searchToggle(false);
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isFindByLooksMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-find-sat').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'findSat',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-find-sat').removeClass('bmenu-item-selected');
            isFindByLooksMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_findSat_findSat_ts.0b6c68d0fd3f1046854c.js.map