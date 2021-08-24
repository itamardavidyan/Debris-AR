"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_selectSatManager_satInfoboxCore_ts"],{

/***/ "./src/js/plugins/selectSatManager/satInfoboxCore.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/selectSatManager/satInfoboxCore.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/constants.js */ "./src/js/lib/constants.js");
/* harmony import */ var _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/suncalc.js */ "./src/js/lib/suncalc.js");
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* harmony import */ var _app_js_settingsManager_settingsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/settingsManager/settingsManager */ "./src/js/settingsManager/settingsManager.ts");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var satInfoboxCore = {
    sensorInfo: {
        isLoaded: false,
        cbName: 'sensorInfo',
        cb: function (sat) {
            if (!satInfoboxCore.sensorInfo.isLoaded && _app_js_settingsManager_settingsManager__WEBPACK_IMPORTED_MODULE_3__.settingsManager.plugins.sensor) {
                $('#sat-infobox').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <li class=\"divider\"></li>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Distance from the Sensor\">\n            Range\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-range\">xxxx km</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Angle (Left/Right) from the Sensor\">\n            Azimuth\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-azimuth\">XX deg</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Angle (Up/Down) from the Sensor\">\n            Elevation\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-elevation\">XX deg</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Linear Width at Target's Range\">\n            Beam Width\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-beamwidth\">xxxx km</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Time for RF/Light to Reach Target\">\n            Max Tmx Time\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-maxTmx\">xxxx ms</div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Is the Sun Affected the Sensor\">\n            Sun\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-sun\">Sun Stuff</div>\n        </div>\n        <div id=\"sat-info-nextpass-row\" class=\"sat-info-row sat-only-info\">\n          <div id=\"sat-info-nextpass\" class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Next Time in Coverage\">\n            Next Pass\n          </div>\n          <div id=\"sat-nextpass\" class=\"sat-info-value\">00:00:00z</div>\n        </div> \n        "], ["\n        <li class=\"divider\"></li>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Distance from the Sensor\">\n            Range\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-range\">xxxx km</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Angle (Left/Right) from the Sensor\">\n            Azimuth\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-azimuth\">XX deg</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Angle (Up/Down) from the Sensor\">\n            Elevation\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-elevation\">XX deg</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Linear Width at Target's Range\">\n            Beam Width\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-beamwidth\">xxxx km</div>\n        </div>\n        <div class=\"sat-info-row\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Time for RF/Light to Reach Target\">\n            Max Tmx Time\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-maxTmx\">xxxx ms</div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Is the Sun Affected the Sensor\">\n            Sun\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-sun\">Sun Stuff</div>\n        </div>\n        <div id=\"sat-info-nextpass-row\" class=\"sat-info-row sat-only-info\">\n          <div id=\"sat-info-nextpass\" class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Next Time in Coverage\">\n            Next Pass\n          </div>\n          <div id=\"sat-nextpass\" class=\"sat-info-value\">00:00:00z</div>\n        </div> \n        "]))));
                satInfoboxCore.sensorInfo.isLoaded = true;
            }
            if (!sat.missile) {
                $('.sat-only-info').show();
            }
            else {
                $('.sat-only-info').hide();
            }
        },
    },
    launchData: {
        isLoaded: false,
        cbName: 'launchData',
        cb: function (sat) {
            if (!satInfoboxCore.launchData.isLoaded) {
                $('#sat-infobox').append("\n          <li class=\"divider\"></li>\n          <div class=\"sat-info-row\">\n            <div class=\"sat-info-key\">Type</div>\n            <div class=\"sat-info-value\" id=\"sat-type\">PAYLOAD</div>\n          </div>\n          <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key\">Country</div>\n          <div class=\"sat-info-value\" id=\"sat-country\">COUNTRY</div>\n          </div>\n          <div class=\"sat-info-row\" id=\"sat-site-row\">\n            <div class=\"sat-info-key\">Site</div>\n            <div class=\"sat-info-value\" id=\"sat-site\">SITE</div>\n            </div>\n          <div class=\"sat-info-row\">\n          <div class=\"sat-info-key\"></div>\n          <div class=\"sat-info-value\" id=\"sat-sitec\">LAUNCH COUNTRY</div>\n          </div>\n          <div class=\"sat-info-row\">\n          <div class=\"sat-info-key\">Rocket</div>\n          <div class=\"sat-info-value\" id=\"sat-vehicle\">VEHICLE</div>\n          </div>\n          <div class=\"sat-info-row sat-only-info\">\n            <div class=\"sat-info-key\">RCS</div>\n            <div class=\"sat-info-value\" id=\"sat-rcs\">NO DATA</div>\n          </div>  \n        ");
                satInfoboxCore.launchData.isLoaded = true;
            }
            // /////////////////////////////////////////////////////////////////////////
            // Country Correlation Table
            // /////////////////////////////////////////////////////////////////////////
            var country = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.extractCountry(sat.C);
            $('#sat-country').html(country);
            // /////////////////////////////////////////////////////////////////////////
            // Launch Site Correlation Table
            // /////////////////////////////////////////////////////////////////////////
            var site = [];
            var missileLV;
            var missileOrigin;
            var satLvString;
            if (sat.missile) {
                site = sat.desc.split('(');
                missileOrigin = site[0].substr(0, site[0].length - 1);
                missileLV = sat.desc.split('(')[1].split(')')[0]; // Remove the () from the booster type
                site.site = missileOrigin;
                site.sitec = sat.C;
            }
            else {
                site = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.extractLaunchSite(sat.LS);
            }
            $('#sat-site').html(site.site);
            $('#sat-sitec').html(site.sitec);
            // /////////////////////////////////////////////////////////////////////////
            // Launch Vehicle Correlation Table
            // /////////////////////////////////////////////////////////////////////////
            if (sat.missile) {
                sat.LV = missileLV;
                $('#sat-vehicle').html(sat.LV);
            }
            else {
                $('#sat-vehicle').html(sat.LV); // Set to JSON record
                if (sat.LV === 'U') {
                    $('#sat-vehicle').html('Unknown');
                } // Replace with Unknown if necessary
                satLvString = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.extractLiftVehicle(sat.LV); // Replace with link if available
                $('#sat-vehicle').html(satLvString);
            }
            $('a.iframe').colorbox({
                iframe: true,
                width: '80%',
                height: '80%',
                fastIframe: false,
                closeButton: false,
            });
        },
    },
    orbitalData: {
        isLoaded: false,
        cbName: 'orbitalData',
        cb: function (sat) {
            var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs, uiManager = _a.uiManager, satSet = _a.satSet, objectManager = _a.objectManager, searchBox = _a.searchBox, satellite = _a.satellite;
            if (!satInfoboxCore.orbitalData.isLoaded) {
                $('#ui-wrapper').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          <div id=\"sat-infobox\" class=\"text-select\">\n            <div id=\"sat-info-top-links\">\n              <div id=\"sat-info-title\" class=\"center-text\">This is a title</div>\n            </div>\n            <li class=\"divider\"></li>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key\">COSPAR</div>\n              <div class=\"sat-info-value\" id=\"sat-intl-des\">xxxx-xxxA</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key\">NORAD</div>\n              <div class=\"sat-info-value\" id=\"sat-objnum\">99999</div>\n            </div>          \n            <li class=\"divider\"></li>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Highest Point in the Orbit\">\n                Apogee\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-apogee\">xxx km</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Lowest Point in the Orbit\">\n                Perigee\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-perigee\">xxx km</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Angle Measured from Equator on the Ascending Node\">\n                Inclination\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-inclination\">xxx.xx</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"How Circular the Orbit Is (0 is a Circle)\">\n                Eccentricity\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-eccentricity\">x.xx</div>\n            </div>\n            <div class=\"sat-info-row\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Latitude Over Earth\">\n                Latitude\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-latitude\">x.xx</div>\n            </div>\n            <div class=\"sat-info-row\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Longitude Over Earth\">\n                Longitude\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-longitude\">x.xx</div>\n            </div>\n            <div class=\"sat-info-row\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Altitude Above Sea Level\">\n                Altitude\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-altitude\">xxx km</div>\n            </div> \n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Time for One Complete Revolution Around Earth\">\n                Period\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-period\">xxx min</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Velocity of the Satellite (Higher the Closer to Earth it Is)\">\n                Velocity\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-velocity\">xxx km/s</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Time Since Official Orbit Calculated (Older ELSETs are Less Accuarate Usually)\">\n                Age of ELSET\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-elset-age\">xxx.xxxx</div>\n            </div>\n          </div>\n        "], ["\n          <div id=\"sat-infobox\" class=\"text-select\">\n            <div id=\"sat-info-top-links\">\n              <div id=\"sat-info-title\" class=\"center-text\">This is a title</div>\n            </div>\n            <li class=\"divider\"></li>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key\">COSPAR</div>\n              <div class=\"sat-info-value\" id=\"sat-intl-des\">xxxx-xxxA</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key\">NORAD</div>\n              <div class=\"sat-info-value\" id=\"sat-objnum\">99999</div>\n            </div>          \n            <li class=\"divider\"></li>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Highest Point in the Orbit\">\n                Apogee\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-apogee\">xxx km</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Lowest Point in the Orbit\">\n                Perigee\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-perigee\">xxx km</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Angle Measured from Equator on the Ascending Node\">\n                Inclination\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-inclination\">xxx.xx</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"How Circular the Orbit Is (0 is a Circle)\">\n                Eccentricity\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-eccentricity\">x.xx</div>\n            </div>\n            <div class=\"sat-info-row\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Latitude Over Earth\">\n                Latitude\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-latitude\">x.xx</div>\n            </div>\n            <div class=\"sat-info-row\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Longitude Over Earth\">\n                Longitude\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-longitude\">x.xx</div>\n            </div>\n            <div class=\"sat-info-row\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Altitude Above Sea Level\">\n                Altitude\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-altitude\">xxx km</div>\n            </div> \n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Time for One Complete Revolution Around Earth\">\n                Period\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-period\">xxx min</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Current Velocity of the Satellite (Higher the Closer to Earth it Is)\">\n                Velocity\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-velocity\">xxx km/s</div>\n            </div>\n            <div class=\"sat-info-row sat-only-info\">\n              <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n                data-tooltip=\"Time Since Official Orbit Calculated (Older ELSETs are Less Accuarate Usually)\">\n                Age of ELSET\n              </div>\n              <div class=\"sat-info-value\" id=\"sat-elset-age\">xxx.xxxx</div>\n            </div>\n          </div>\n        "]))));
                // Create a Sat Info Box Initializing Script
                $('#sat-infobox').draggable({
                    containment: 'window',
                    drag: function () {
                        $('#sat-infobox').height(600);
                    },
                });
                $('#sat-infobox').resizable({
                    handles: 'all',
                    // alsoResize: '#bottom-icons-container',
                    // No larger than the stack of icons
                    maxHeight: 900,
                    minHeight: 200,
                    maxWidth: 600,
                    minWidth: 350,
                });
                // If right click kill and reinit
                $('#sat-infobox').on('mousedown', function (e) {
                    if (e.button === 2) {
                        $('#sat-infobox').removeClass().removeAttr('style');
                        return;
                    }
                });
                satInfoboxCore.orbitalData.isLoaded = true;
            }
            if (!sat.missile) {
                try {
                    $('a.iframe').colorbox({
                        iframe: true,
                        width: '80%',
                        height: '80%',
                        fastIframe: false,
                        closeButton: false,
                    });
                }
                catch (error) {
                    console.warn(error);
                }
                $('#sat-apogee').html(sat.apogee.toFixed(0) + ' km');
                $('#sat-perigee').html(sat.perigee.toFixed(0) + ' km');
                $('#sat-inclination').html((sat.inclination * _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_0__.RAD2DEG).toFixed(2) + '°');
                $('#sat-eccentricity').html(sat.eccentricity.toFixed(3));
                $('#sat-period').html(sat.period.toFixed(2) + ' min');
                $('#sat-period').tooltip({
                    // delay: 50,
                    html: 'Mean Motion: ' + _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_0__.MINUTES_PER_DAY / sat.period.toFixed(2),
                    position: 'left',
                });
                // TODO: Error checking on Iframe
                var now = new Date();
                var jday = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.getDayOfYear(now);
                now = now.getFullYear();
                now = now.toString().substr(2, 2);
                var daysold = void 0;
                if (sat.TLE1.substr(18, 2) === now) {
                    daysold = jday - sat.TLE1.substr(20, 3);
                }
                else {
                    daysold = jday + parseInt(now) * 365 - (parseInt(sat.TLE1.substr(18, 2)) * 365 + parseInt(sat.TLE1.substr(20, 3)));
                }
                $('#sat-elset-age').html(daysold + ' Days');
                $('#sat-elset-age').tooltip({
                    // delay: 50,
                    html: 'Epoch Year: ' + sat.TLE1.substr(18, 2).toString() + ' Day: ' + sat.TLE1.substr(20, 8).toString(),
                    position: 'left',
                });
                if (!_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.isSensorManagerLoaded) {
                    $('#sat-sun').parent().hide();
                }
                else {
                    now = new Date(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.propRealTime + _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.timeManager.propOffset);
                    var sunTime = _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_1__.SunCalc.getTimes(now, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.sensorManager.currentSensor.lat, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.sensorManager.currentSensor.lon);
                    var satInSun = -1;
                    if (typeof sat.isInSun !== 'undefined') {
                        satInSun = sat.isInSun();
                    }
                    // If No Sensor, then Ignore Sun Exclusion
                    if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.sensorManager.currentSensor.lat == null) {
                        if (satInSun == 0)
                            $('#sat-sun').html('No Sunlight');
                        if (satInSun == 1)
                            $('#sat-sun').html('Limited Sunlight');
                        if (satInSun == 2)
                            $('#sat-sun').html('Direct Sunlight');
                        // If Radar Selected, then Say the Sun Doesn't Matter
                    }
                    else if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.sensorManager.currentSensor.type !== 'Optical' && _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.sensorManager.currentSensor.type !== 'Observer') {
                        $('#sat-sun').html('No Effect');
                        // If Dawn Dusk Can be Calculated then show if the satellite is in the sun
                    }
                    else if (sunTime.dawn.getTime() - now.getTime() > 0 || sunTime.dusk.getTime() - now.getTime() < 0) {
                        if (satInSun == 0)
                            $('#sat-sun').html('No Sunlight');
                        if (satInSun == 1)
                            $('#sat-sun').html('Limited Sunlight');
                        if (satInSun == 2)
                            $('#sat-sun').html('Direct Sunlight');
                        // If Optical Sesnor but Dawn Dusk Can't Be Calculated, then you are at a
                        // high latitude and we need to figure that out
                    }
                    else if (sunTime.night != 'Invalid Date' && (sunTime.dawn == 'Invalid Date' || sunTime.dusk == 'Invalid Date')) {
                        if (satInSun == 0)
                            $('#sat-sun').html('No Sunlight');
                        if (satInSun == 1)
                            $('#sat-sun').html('Limited Sunlight');
                        if (satInSun == 2)
                            $('#sat-sun').html('Direct Sunlight');
                    }
                    else {
                        // Unless you are in sun exclusion
                        $('#sat-sun').html('Sun Exclusion');
                    }
                    if (satInSun == -1)
                        $('#sat-sun').html('Unable to Calculate');
                }
            }
            $('#all-objects-link').on('click', function () {
                if (objectManager.selectedSat === -1) {
                    return;
                }
                var intldes = satSet.getSatExtraOnly(objectManager.selectedSat).intlDes;
                var searchStr = intldes.slice(0, 8);
                uiManager.doSearch(searchStr);
                $('#search').val(searchStr);
            });
            $('#near-orbits-link').on('click', function () {
                // searchBox.doArraySearch(satellite.findNearbyObjectsByOrbit(satSet.getSat(objectManager.selectedSat)));
                var searchStr = searchBox.doArraySearch(satellite.findNearbyObjectsByOrbit(satSet.getSat(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.objectManager.selectedSat)));
                searchBox.doSearch(searchStr, false, satSet);
            });
            $('#near-objects-link').on('click', function () {
                if (objectManager.selectedSat === -1) {
                    return;
                }
                var sat = objectManager.selectedSat;
                var SCCs = [];
                var pos = satSet.getSatPosOnly(sat).position;
                var posXmin = pos.x - 100;
                var posXmax = pos.x + 100;
                var posYmin = pos.y - 100;
                var posYmax = pos.y + 100;
                var posZmin = pos.z - 100;
                var posZmax = pos.z + 100;
                $('#search').val('');
                for (var i = 0; i < satSet.numSats; i++) {
                    pos = satSet.getSatPosOnly(i).position;
                    if (pos.x < posXmax && pos.x > posXmin && pos.y < posYmax && pos.y > posYmin && pos.z < posZmax && pos.z > posZmin) {
                        SCCs.push(satSet.getSatExtraOnly(i).SCC_NUM);
                    }
                }
                for (var i = 0; i < SCCs.length; i++) {
                    if (i < SCCs.length - 1) {
                        $('#search').val($('#search').val() + SCCs[i] + ',');
                    }
                    else {
                        $('#search').val($('#search').val() + SCCs[i]);
                    }
                }
                uiManager.doSearch($('#search').val());
            });
        },
    },
    satMissionData: {
        isLoaded: false,
        cbName: 'satMissionData',
        cb: function (sat) {
            if (!satInfoboxCore.satMissionData.isLoaded) {
                $('#sat-infobox').append("\n        <li class=\"divider\"></li>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Visual Magnitude - Smaller Numbers Are Brighter\">\n            Visual Mag\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-vmag\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Primary User of the Satellite\">\n            User\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-user\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Main Function of the Satellite\">\n            Purpose\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-purpose\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Contractor Who Built the Satellite\">\n            Contractor\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-contractor\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Mass at Lift Off\">\n            Lift Mass\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-lmass\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\" data-tooltip=\"Unfueled Mass\">\n            Dry Mass\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-dmass\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"How Long the Satellite was Expected to be Operational\">\n            Life Expectancy\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-life\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\">\n          <div class=\"sat-info-key  tooltipped\" data-position=\"left\" data-delay=\"50\"\n            data-tooltip=\"Power of the Satellite\">\n            Power\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-power\">\n            NO DATA\n          </div>\n        </div>              \n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source1w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source1\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source2w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source2\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source3w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source3\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source4w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source4\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source5w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source5\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source6w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source6\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source7w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source7\">\n            NO DATA\n          </div>\n        </div>\n        <div class=\"sat-info-row sat-only-info\" id=\"sat-source8w\">\n          <div class=\"sat-info-key\">\n            Source\n          </div>\n          <div class=\"sat-info-value\" id=\"sat-source8\">\n            NO DATA\n          </div>\n        </div>\n        ");
                satInfoboxCore.satMissionData.isLoaded = true;
            }
            if (!sat.missile) {
                $('.sat-only-info').show();
            }
            else {
                $('.sat-only-info').hide();
            }
            if (!sat.missile) {
                if (typeof sat.U != 'undefined' && sat.U != '') {
                    $('#sat-user').html(sat.U);
                }
                else {
                    $('#sat-user').html('Unknown');
                }
                if (typeof sat.P != 'undefined' && sat.P != '') {
                    $('#sat-purpose').html(sat.P);
                }
                else {
                    $('#sat-purpose').html('Unknown');
                }
                if (typeof sat.Con != 'undefined' && sat.Con != '') {
                    $('#sat-contractor').html(sat.Con);
                }
                else {
                    $('#sat-contractor').html('Unknown');
                }
                if (typeof sat.LM != 'undefined' && sat.LM != '') {
                    $('#sat-lmass').html(sat.LM + ' kg');
                }
                else {
                    $('#sat-lmass').html('Unknown');
                }
                if (typeof sat.DM != 'undefined' && sat.DM != '') {
                    $('#sat-dmass').html(sat.DM + ' kg');
                }
                else {
                    $('#sat-dmass').html('Unknown');
                }
                if (typeof sat.Li != 'undefined' && sat.Li != '') {
                    $('#sat-life').html(sat.Li + ' yrs');
                }
                else {
                    $('#sat-life').html('Unknown');
                }
                if (typeof sat.Pw != 'undefined' && sat.Pw != '') {
                    $('#sat-power').html(sat.Pw + ' w');
                }
                else {
                    $('#sat-power').html('Unknown');
                }
                if (typeof sat.vmag != 'undefined' && sat.vmag != '') {
                    $('#sat-vmag').html(sat.vmag);
                }
                else {
                    $('#sat-vmag').html('Unknown');
                }
                if (typeof sat.S1 != 'undefined' && sat.S1 != '') {
                    $('#sat-source1').html("<a class=\"iframe\" href=\"" + sat.S1 + "\">" + sat.S1.split('//').splice(1) + "</a>");
                    $('#sat-source1w').show();
                }
                else {
                    $('#sat-source1').html('Unknown');
                    $('#sat-source1w').hide();
                }
                if (typeof sat.S2 != 'undefined' && sat.S2 != '') {
                    $('#sat-source2').html("<a class=\"iframe\" href=\"" + sat.S2 + "\">" + sat.S2.split('//').splice(1) + "</a>");
                    $('#sat-source2w').show();
                }
                else {
                    $('#sat-source2').html('Unknown');
                    $('#sat-source2w').hide();
                }
                if (typeof sat.S3 != 'undefined' && sat.S3 != '') {
                    $('#sat-source3').html("<a class=\"iframe\" href=\"" + sat.S3 + "\">" + sat.S3.split('//').splice(1) + "</a>");
                    $('#sat-source3w').show();
                }
                else {
                    $('#sat-source3').html('Unknown');
                    $('#sat-source3w').hide();
                }
                if (typeof sat.S4 != 'undefined' && sat.S4 != '') {
                    $('#sat-source4').html("<a class=\"iframe\" href=\"" + sat.S4 + "\">" + sat.S4.split('//').splice(1) + "</a>");
                    $('#sat-source4w').show();
                }
                else {
                    $('#sat-source4').html('Unknown');
                    $('#sat-source4w').hide();
                }
                if (typeof sat.S5 != 'undefined' && sat.S5 != '') {
                    $('#sat-source5').html("<a class=\"iframe\" href=\"" + sat.S5 + "\">" + sat.S5.split('//').splice(1) + "</a>");
                    $('#sat-source5w').show();
                }
                else {
                    $('#sat-source5').html('Unknown');
                    $('#sat-source5w').hide();
                }
                if (typeof sat.S6 != 'undefined' && sat.S6 != '') {
                    $('#sat-source6').html("<a class=\"iframe\" href=\"" + sat.S6 + "\">" + sat.S6.split('//').splice(1) + "</a>");
                    $('#sat-source6w').show();
                }
                else {
                    $('#sat-source6').html('Unknown');
                    $('#sat-source6w').hide();
                }
                if (typeof sat.S7 != 'undefined' && sat.S7 != '') {
                    $('#sat-source7').html("<a class=\"iframe\" href=\"" + sat.S7 + "\">" + sat.S7.split('//').splice(1) + "</a>");
                    $('#sat-source7w').show();
                }
                else {
                    $('#sat-source7').html('Unknown');
                    $('#sat-source7w').hide();
                }
                if (typeof sat.URL != 'undefined' && sat.URL != '') {
                    $('#sat-source8').html("<a class=\"iframe\" href=\"" + sat.URL + "\">" + sat.URL.split('//').splice(1) + "</a>");
                    $('#sat-source8w').show();
                }
                else {
                    $('#sat-source8').html('Unknown');
                    $('#sat-source8w').hide();
                }
                $('a.iframe').colorbox({
                    iframe: true,
                    width: '80%',
                    height: '80%',
                    fastIframe: false,
                    closeButton: false,
                });
            }
        },
    },
    intelData: {
        cbName: 'intelData',
        cb: function (sat, satId) {
            if (satId !== -1) {
                if (typeof sat.TTP != 'undefined') {
                    $('#sat-ttp-wrapper').show();
                    $('#sat-ttp').html(sat.TTP);
                }
                else {
                    $('#sat-ttp-wrapper').hide();
                }
                if (typeof sat.NOTES != 'undefined') {
                    $('#sat-notes-wrapper').show();
                    $('#sat-notes').html(sat.NOTES);
                }
                else {
                    $('#sat-notes-wrapper').hide();
                }
                if (typeof sat.FMISSED != 'undefined') {
                    $('#sat-fmissed-wrapper').show();
                    $('#sat-fmissed').html(sat.FMISSED);
                }
                else {
                    $('#sat-fmissed-wrapper').hide();
                }
                if (typeof sat.ORPO != 'undefined') {
                    $('#sat-oRPO-wrapper').show();
                    $('#sat-oRPO').html(sat.ORPO);
                }
                else {
                    $('#sat-oRPO-wrapper').hide();
                }
                if (typeof sat.constellation != 'undefined') {
                    $('#sat-constellation-wrapper').show();
                    $('#sat-constellation').html(sat.constellation);
                }
                else {
                    $('#sat-constellation-wrapper').hide();
                }
                if (typeof sat.maneuver != 'undefined') {
                    $('#sat-maneuver-wrapper').show();
                    $('#sat-maneuver').html(sat.maneuver);
                }
                else {
                    $('#sat-maneuver-wrapper').hide();
                }
                if (typeof sat.associates != 'undefined') {
                    $('#sat-associates-wrapper').show();
                    $('#sat-associates').html(sat.associates);
                }
                else {
                    $('#sat-associates-wrapper').hide();
                }
            }
        },
    },
    objectData: {
        cbName: 'objectData',
        cb: function (sat) {
            $('#sat-info-title').html(sat.ON);
            var objtype;
            if (sat.OT === 0) {
                objtype = 'TBA';
            }
            if (sat.OT === 1) {
                objtype = 'Payload';
            }
            if (sat.OT === 2) {
                objtype = 'Rocket Body';
            }
            if (sat.OT === 3) {
                objtype = 'Debris';
            }
            if (sat.OT === 4) {
                if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.programs.settingsManager.offline) {
                    objtype = 'Special';
                }
                else {
                    objtype = 'Amateur Sat';
                }
            }
            if (sat.OT === 5) {
                objtype = 'Measurement';
            }
            if (sat.OT === 6) {
                objtype = 'Radar Track';
            }
            if (sat.OT === 7) {
                objtype = 'Radar Object';
            }
            if (sat.missile) {
                objtype = 'Ballistic Missile';
            }
            $('#sat-type').html(objtype);
            if (sat.URL && sat.URL !== '') {
                $('#sat-info-title').html("<a class='iframe' href='" + sat.URL + "'>" + sat.ON + '</a>');
            }
            $('#edit-satinfo-link').html("<a class='iframe' href='editor.htm?scc=" + sat.SCC_NUM + "&popup=true'>Edit Satellite Info</a>");
            $('a.iframe').colorbox({
                iframe: true,
                width: '80%',
                height: '80%',
                fastIframe: false,
                closeButton: false,
            });
            $('#sat-intl-des').html(sat.intlDes);
            if (sat.OT === 'unknown') {
                $('#sat-objnum').html(1 + sat.TLE2.substr(2, 7).toString());
            }
            else {
                $('#sat-objnum').html(sat.SCC_NUM);
            }
            // /////////////////////////////////////////////////////////////////////////
            // RCS Correlation Table
            // /////////////////////////////////////////////////////////////////////////
            if (sat.R === null || typeof sat.R == 'undefined') {
                $('#sat-rcs').html('Unknown');
            }
            else {
                $('#sat-rcs').html(sat.R);
            }
        },
    },
};
var init = function () {
    // Register launch data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: satInfoboxCore.launchData.cbName,
        cb: satInfoboxCore.launchData.cb,
    });
    // Register orbital element data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: satInfoboxCore.orbitalData.cbName,
        cb: satInfoboxCore.orbitalData.cb,
    });
    // Register sensor data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: satInfoboxCore.sensorInfo.cbName,
        cb: satInfoboxCore.sensorInfo.cb,
    });
    // Register mission data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: satInfoboxCore.satMissionData.cbName,
        cb: satInfoboxCore.satMissionData.cb,
    });
    // Register intel data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: satInfoboxCore.intelData.cbName,
        cb: satInfoboxCore.intelData.cb,
    });
    // Register object data
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'selectSatData',
        cbName: satInfoboxCore.objectData.cbName,
        cb: satInfoboxCore.objectData.cb,
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_selectSatManager_satInfoboxCore_ts.9eab977db84db8c89669.js.map