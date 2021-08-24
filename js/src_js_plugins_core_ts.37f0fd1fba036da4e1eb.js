"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_core_ts"],{

/***/ "./src/js/plugins/core.ts":
/*!********************************!*\
  !*** ./src/js/plugins/core.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCorePlugins": () => (/* binding */ loadCorePlugins)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Register all core modules
var loadCorePlugins = function (keepTrackApi) { return __awaiter(void 0, void 0, void 0, function () {
    var plugins, Atmosphere;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                plugins = keepTrackApi.programs.settingsManager.plugins;
                if (!plugins.satInfoboxCore) return [3 /*break*/, 2];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_selectSatManager_satInfoboxCore_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/selectSatManager/satInfoboxCore */ "./src/js/plugins/selectSatManager/satInfoboxCore.ts")).then(function (mod) { return mod.init(); })];
            case 1:
                _c.sent();
                _c.label = 2;
            case 2:
                if (!plugins.updateSelectBoxCore) return [3 /*break*/, 4];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_updateSelectBox_updateSelectBoxCore_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/updateSelectBox/updateSelectBoxCore */ "./src/js/plugins/updateSelectBox/updateSelectBoxCore.ts")).then(function (mod) { return mod.init(); })];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                if (!plugins.atmosphere) return [3 /*break*/, 6];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_atmosphere_atmosphere_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/atmosphere/atmosphere */ "./src/js/plugins/atmosphere/atmosphere.ts"))];
            case 5:
                Atmosphere = (_c.sent()).Atmosphere;
                keepTrackApi.programs.sceneManager.registerAtmoshpere(Atmosphere);
                _c.label = 6;
            case 6:
                if (!plugins.topMenu) return [3 /*break*/, 8];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_topMenu_topMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/topMenu/topMenu */ "./src/js/plugins/topMenu/topMenu.ts")).then(function (mod) { return mod.init(); })];
            case 7:
                _c.sent();
                _c.label = 8;
            case 8:
                if (!plugins.datetime) return [3 /*break*/, 10];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_datetime_datetime_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/datetime/datetime */ "./src/js/plugins/datetime/datetime.ts")).then(function (mod) { return mod.init(); })];
            case 9:
                _c.sent();
                _c.label = 10;
            case 10:
                if (!plugins.social) return [3 /*break*/, 12];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_social_social_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/social/social */ "./src/js/plugins/social/social.ts")).then(function (mod) { return mod.init(); })];
            case 11:
                _c.sent();
                _c.label = 12;
            case 12:
                if (!plugins.classification) return [3 /*break*/, 14];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_classification_classification_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/classification/classification */ "./src/js/plugins/classification/classification.ts")).then(function (mod) { return mod.init(); })];
            case 13:
                _c.sent();
                _c.label = 14;
            case 14:
                if (!plugins.sensor) return [3 /*break*/, 16];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sensor_sensor_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensor/sensor */ "./src/js/plugins/sensor/sensor.ts")).then(function (mod) { return mod.init(); })];
            case 15:
                _c.sent();
                _c.label = 16;
            case 16:
                if (!plugins.watchlist) return [3 /*break*/, 18];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_watchlist_watchlist_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/watchlist/watchlist */ "./src/js/plugins/watchlist/watchlist.ts")).then(function (mod) { return mod.init(); })];
            case 17:
                _c.sent();
                _c.label = 18;
            case 18:
                if (!plugins.nextLaunch) return [3 /*break*/, 20];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_nextLaunch_nextLaunch_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nextLaunch/nextLaunch */ "./src/js/plugins/nextLaunch/nextLaunch.ts")).then(function (mod) { return mod.init(); })];
            case 19:
                _c.sent();
                _c.label = 20;
            case 20:
                if (!plugins.findSat) return [3 /*break*/, 22];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_findSat_findSat_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/findSat/findSat */ "./src/js/plugins/findSat/findSat.ts")).then(function (mod) { return mod.init(); })];
            case 21:
                _c.sent();
                _c.label = 22;
            case 22:
                if (!plugins.shortTermFences) return [3 /*break*/, 24];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_shortTermFences_shortTermFences_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/shortTermFences/shortTermFences */ "./src/js/plugins/shortTermFences/shortTermFences.ts")).then(function (mod) { return mod.init(); })];
            case 23:
                _c.sent();
                _c.label = 24;
            case 24:
                if (!plugins.collisions) return [3 /*break*/, 26];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_collisions_collisions_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/collisions/collisions */ "./src/js/plugins/collisions/collisions.ts")).then(function (mod) { return mod.init(); })];
            case 25:
                _c.sent();
                _c.label = 26;
            case 26:
                if (!plugins.breakup) return [3 /*break*/, 28];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_breakup_breakup_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/breakup/breakup */ "./src/js/plugins/breakup/breakup.ts")).then(function (mod) { return mod.init(); })];
            case 27:
                _c.sent();
                _c.label = 28;
            case 28:
                if (!plugins.editSat) return [3 /*break*/, 30];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_editSat_editSat_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/editSat/editSat */ "./src/js/plugins/editSat/editSat.ts")).then(function (mod) { return mod.init(); })];
            case 29:
                _c.sent();
                _c.label = 30;
            case 30:
                if (!plugins.newLaunch) return [3 /*break*/, 32];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_newLaunch_newLaunch_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/newLaunch/newLaunch */ "./src/js/plugins/newLaunch/newLaunch.ts")).then(function (mod) { return mod.init(); })];
            case 31:
                _c.sent();
                _c.label = 32;
            case 32:
                if (!plugins.satChanges) return [3 /*break*/, 34];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_satChanges_satChanges_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satChanges/satChanges */ "./src/js/plugins/satChanges/satChanges.ts")).then(function (mod) { return mod.init(); })];
            case 33:
                _c.sent();
                _c.label = 34;
            case 34:
                if (!plugins.initialOrbit) return [3 /*break*/, 36];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_initialOrbit_initialOrbit_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/initialOrbit/initialOrbit */ "./src/js/plugins/initialOrbit/initialOrbit.ts")).then(function (mod) { return mod.init(); })];
            case 35:
                _c.sent();
                _c.label = 36;
            case 36:
                if (!plugins.missile) return [3 /*break*/, 38];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_missile_missile_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/missile/missile */ "./src/js/plugins/missile/missile.ts")).then(function (mod) { return mod.init(); })];
            case 37:
                _c.sent();
                _c.label = 38;
            case 38:
                if (!plugins.stereoMap) return [3 /*break*/, 40];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_stereoMap_stereoMap_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/stereoMap/stereoMap */ "./src/js/plugins/stereoMap/stereoMap.ts")).then(function (mod) { return mod.init(); })];
            case 39:
                _c.sent();
                _c.label = 40;
            case 40:
                if (!plugins.sensorFov) return [3 /*break*/, 42];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sensorFov_sensorFov_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensorFov/sensorFov */ "./src/js/plugins/sensorFov/sensorFov.ts")).then(function (mod) { return mod.init(); })];
            case 41:
                _c.sent();
                _c.label = 42;
            case 42:
                if (!plugins.sensorSurv) return [3 /*break*/, 44];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sensorSurv_sensorSurv_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sensorSurv/sensorSurv */ "./src/js/plugins/sensorSurv/sensorSurv.ts")).then(function (mod) { return mod.init(); })];
            case 43:
                _c.sent();
                _c.label = 44;
            case 44:
                if (!plugins.satelliteView) return [3 /*break*/, 46];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_satelliteView_satelliteView_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satelliteView/satelliteView */ "./src/js/plugins/satelliteView/satelliteView.ts")).then(function (mod) { return mod.init(); })];
            case 45:
                _c.sent();
                _c.label = 46;
            case 46:
                if (!plugins.satelliteFov) return [3 /*break*/, 48];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_satelliteFov_satelliteFov_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/satelliteFov/satelliteFov */ "./src/js/plugins/satelliteFov/satelliteFov.ts")).then(function (mod) { return mod.init(); })];
            case 47:
                _c.sent();
                _c.label = 48;
            case 48:
                if (!plugins.planetarium) return [3 /*break*/, 50];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_planetarium_planetarium_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/planetarium/planetarium */ "./src/js/plugins/planetarium/planetarium.ts")).then(function (mod) { return mod.init(); })];
            case 49:
                _c.sent();
                _c.label = 50;
            case 50:
                if (!plugins.astronomy) return [3 /*break*/, 52];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_astronomy_astronomy_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/astronomy/astronomy */ "./src/js/plugins/astronomy/astronomy.ts")).then(function (mod) { return mod.init(); })];
            case 51:
                _c.sent();
                _c.label = 52;
            case 52:
                if (!plugins.nightToggle) return [3 /*break*/, 54];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_nightToggle_nightToggle_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nightToggle/nightToggle */ "./src/js/plugins/nightToggle/nightToggle.ts")).then(function (mod) { return mod.init(); })];
            case 53:
                _c.sent();
                _c.label = 54;
            case 54:
                if (!plugins.dops) return [3 /*break*/, 56];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_dops_dops_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/dops/dops */ "./src/js/plugins/dops/dops.ts")).then(function (mod) { return mod.init(); })];
            case 55:
                _c.sent();
                _c.label = 56;
            case 56:
                if (!plugins.constellations) return [3 /*break*/, 58];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_constellations_constellations_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/constellations/constellations */ "./src/js/plugins/constellations/constellations.ts")).then(function (mod) { return mod.init(); })];
            case 57:
                _c.sent();
                _c.label = 58;
            case 58:
                if (!plugins.countries) return [3 /*break*/, 60];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_countries_countries_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/countries/countries */ "./src/js/plugins/countries/countries.ts")).then(function (mod) { return mod.init(); })];
            case 59:
                _c.sent();
                _c.label = 60;
            case 60:
                if (!plugins.colorsMenu) return [3 /*break*/, 62];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_colorsMenu_colorsMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/colorsMenu/colorsMenu */ "./src/js/plugins/colorsMenu/colorsMenu.ts")).then(function (mod) { return mod.init(); })];
            case 61:
                _c.sent();
                _c.label = 62;
            case 62:
                if (!plugins.photo) return [3 /*break*/, 64];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_photo_photo_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/photo/photo */ "./src/js/plugins/photo/photo.ts")).then(function (mod) { return mod.init(); })];
            case 63:
                _c.sent();
                _c.label = 64;
            case 64:
                if (!plugins.launchCalendar) return [3 /*break*/, 66];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_launchCalendar_launchCalendar_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/launchCalendar/launchCalendar */ "./src/js/plugins/launchCalendar/launchCalendar.ts")).then(function (mod) { return mod.init(); })];
            case 65:
                _c.sent();
                _c.label = 66;
            case 66:
                if (!plugins.timeMachine) return [3 /*break*/, 68];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_timeMachine_timeMachine_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/timeMachine/timeMachine */ "./src/js/plugins/timeMachine/timeMachine.ts")).then(function (mod) { return mod.init(); })];
            case 67:
                _c.sent();
                _c.label = 68;
            case 68:
                if (!plugins.photoManager) return [3 /*break*/, 70];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_photoManager_photoManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/photoManager/photoManager */ "./src/js/plugins/photoManager/photoManager.ts")).then(function (mod) { return mod.init(); })];
            case 69:
                _c.sent();
                _c.label = 70;
            case 70:
                if (!plugins.recorderManager) return [3 /*break*/, 72];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_recorderManager_recorderManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/recorderManager/recorderManager */ "./src/js/plugins/recorderManager/recorderManager.ts")).then(function (mod) { return mod.init(); })];
            case 71:
                _c.sent();
                _c.label = 72;
            case 72:
                if (!plugins.analysis) return [3 /*break*/, 74];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_analysis_analysis_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/analysis/analysis */ "./src/js/plugins/analysis/analysis.ts")).then(function (mod) { return mod.init(); })];
            case 73:
                _c.sent();
                _c.label = 74;
            case 74:
                if (!plugins.twitter) return [3 /*break*/, 76];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_twitter_twitter_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/twitter/twitter */ "./src/js/plugins/twitter/twitter.ts")).then(function (mod) { return mod.init(); })];
            case 75:
                _c.sent();
                _c.label = 76;
            case 76:
                if (!plugins.externalSources) return [3 /*break*/, 78];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_externalSources_externalSources_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/externalSources/externalSources */ "./src/js/plugins/externalSources/externalSources.ts")).then(function (mod) { return mod.init(); })];
            case 77:
                _c.sent();
                _c.label = 78;
            case 78:
                if (!plugins.aboutManager) return [3 /*break*/, 80];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_aboutManager_aboutManager_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/aboutManager/aboutManager */ "./src/js/plugins/aboutManager/aboutManager.ts")).then(function (mod) { return mod.init(); })];
            case 79:
                _c.sent();
                _c.label = 80;
            case 80:
                if (!plugins.settingsMenu) return [3 /*break*/, 82];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_settingsMenu_settingsMenu_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/settingsMenu/settingsMenu */ "./src/js/plugins/settingsMenu/settingsMenu.ts")).then(function (mod) { return mod.init(); })];
            case 81:
                _c.sent();
                _c.label = 82;
            case 82:
                if (!plugins.soundManager) return [3 /*break*/, 84];
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ "src_js_plugins_sounds_sounds_ts").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/sounds/sounds */ "./src/js/plugins/sounds/sounds.ts")).then(function (mod) { return mod.init(); })];
            case 83:
                _c.sent();
                _c.label = 84;
            case 84:
                keepTrackApi.register({
                    method: 'uiManagerFinal',
                    cbName: 'core',
                    cb: function () {
                        var bicDom = document.getElementById('bottom-icons-container');
                        if (bicDom) {
                            var bottomHeight_1 = bicDom.offsetHeight;
                            document.documentElement.style.setProperty('--bottom-menu-height', bottomHeight_1 + 'px');
                        }
                        else {
                            document.documentElement.style.setProperty('--bottom-menu-height', '0px');
                        }
                        if (plugins.topMenu) {
                            var topMenuHeight = parseInt(document.documentElement.style.getPropertyValue('--top-menu-height').replace('px', ''));
                            if (isNaN(topMenuHeight))
                                topMenuHeight = 0;
                            document.documentElement.style.setProperty('--top-menu-height', topMenuHeight + 25 + 'px');
                        }
                        if (document.getElementById('bottom-icons') && document.getElementById('bottom-icons').innerText == '') {
                            document.getElementById('nav-footer').style.visibility = 'hidden';
                        }
                        var bottomHeight = document.getElementById('bottom-icons-container').offsetHeight;
                        document.documentElement.style.setProperty('--bottom-menu-top', bottomHeight + 'px');
                        $('#versionNumber-text').html(keepTrackApi.programs.settingsManager.versionNumber + " - " + keepTrackApi.programs.settingsManager.versionDate);
                        // Only turn on analytics if on keeptrack.space ()
                        if (window.location.hostname === 'keeptrack.space' || window.location.hostname === 'www.keeptrack.space') {
                            var newScript = document.createElement('script');
                            newScript.type = 'text/javascript';
                            newScript.setAttribute('async', 'true');
                            newScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-ENHWK6L0X7');
                            document.documentElement.firstChild.appendChild(newScript);
                            window.dataLayer = window.dataLayer || [];
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            var gtag = function (_a, _b) {
                                // eslint-disable-next-line prefer-rest-params
                                window.dataLayer.push(arguments);
                            };
                            gtag('js', new Date());
                            gtag('config', 'G-ENHWK6L0X7');
                        }
                    },
                });
                return [2 /*return*/];
        }
    });
}); };


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_core_ts.37f0fd1fba036da4e1eb.js.map