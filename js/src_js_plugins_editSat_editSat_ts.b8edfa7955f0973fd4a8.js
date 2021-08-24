"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_editSat_editSat_ts"],{

/***/ "./src/js/plugins/editSat/editSat.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/editSat/editSat.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/constants */ "./src/js/lib/constants.js");
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};




var init = function () {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs, satellite = _a.satellite, timeManager = _a.timeManager, orbitManager = _a.orbitManager, uiManager = _a.uiManager, satSet = _a.satSet, objectManager = _a.objectManager, settingsManager = _a.settingsManager;
    var isEditSatMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'editSat',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"editSat-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"editSat-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <h5 class=\"center-align\">Edit Satellite</h5>\n              <form id=\"editSat\">\n                <div class=\"input-field col s12\">\n                  <input disabled value=\"AAAAA\" id=\"es-scc\" type=\"text\" maxlength=\"5\" />\n                  <label for=\"disabled\" class=\"active\">Satellite SCC#</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AA\" id=\"es-year\" type=\"text\" maxlength=\"2\" />\n                  <label for=\"es-year\" class=\"active\">Epoch Year</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAAAAAA\" id=\"es-day\" type=\"text\" maxlength=\"12\" />\n                  <label for=\"es-day\" class=\"active\">Epoch Day</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-inc\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-inc\" class=\"active\">Inclination</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-rasc\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-rasc\" class=\"active\">Right Ascension</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-meanmo\" type=\"text\" maxlength=\"11\" />\n                  <label for=\"es-meanmo\" class=\"active\">Mean Motion</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AA.AAAAAAAA\" id=\"es-ecen\" type=\"text\" maxlength=\"7\" />\n                  <label for=\"es-ecen\" class=\"active\">Eccentricity</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AA.AAAAAAAA\" id=\"es-argPe\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-argPe\" class=\"active\">Argument of Perigee</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-meana\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-meana\" class=\"active\">Mean Anomaly</label>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Update Satellite &#9658;</button>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-newTLE\" class=\"btn btn-ui waves-effect waves-light\" type=\"button\" name=\"action\">Update Epoch to Now &#9658;</button>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-save\" class=\"btn btn-ui waves-effect waves-light\" type=\"button\" name=\"action\">Save TLE &#9658;</button>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-open\" class=\"btn btn-ui waves-effect waves-light\" type=\"button\" name=\"action\">Load TLE &#9658;</button>\n                  <input id=\"editSat-file\" class=\"start-hidden\" type=\"file\" name=\"files[]\" />\n                </div>\n              </form>\n            </div>\n            <div id=\"es-error\" class=\"center-align menu-selectable start-hidden\">\n              <h6 class=\"center-align\">Error</h6>\n            </div>\n          </div>\n        </div>\n      "], ["\n        <div id=\"editSat-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"editSat-content\" class=\"side-menu\">\n            <div class=\"row\">\n              <h5 class=\"center-align\">Edit Satellite</h5>\n              <form id=\"editSat\">\n                <div class=\"input-field col s12\">\n                  <input disabled value=\"AAAAA\" id=\"es-scc\" type=\"text\" maxlength=\"5\" />\n                  <label for=\"disabled\" class=\"active\">Satellite SCC#</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AA\" id=\"es-year\" type=\"text\" maxlength=\"2\" />\n                  <label for=\"es-year\" class=\"active\">Epoch Year</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAAAAAA\" id=\"es-day\" type=\"text\" maxlength=\"12\" />\n                  <label for=\"es-day\" class=\"active\">Epoch Day</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-inc\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-inc\" class=\"active\">Inclination</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-rasc\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-rasc\" class=\"active\">Right Ascension</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-meanmo\" type=\"text\" maxlength=\"11\" />\n                  <label for=\"es-meanmo\" class=\"active\">Mean Motion</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AA.AAAAAAAA\" id=\"es-ecen\" type=\"text\" maxlength=\"7\" />\n                  <label for=\"es-ecen\" class=\"active\">Eccentricity</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AA.AAAAAAAA\" id=\"es-argPe\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-argPe\" class=\"active\">Argument of Perigee</label>\n                </div>\n                <div class=\"input-field col s12\">\n                  <input placeholder=\"AAA.AAAA\" id=\"es-meana\" type=\"text\" maxlength=\"8\" />\n                  <label for=\"es-meana\" class=\"active\">Mean Anomaly</label>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\" name=\"action\">Update Satellite &#9658;</button>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-newTLE\" class=\"btn btn-ui waves-effect waves-light\" type=\"button\" name=\"action\">Update Epoch to Now &#9658;</button>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-save\" class=\"btn btn-ui waves-effect waves-light\" type=\"button\" name=\"action\">Save TLE &#9658;</button>\n                </div>\n                <div class=\"center-align row\">\n                  <button id=\"editSat-open\" class=\"btn btn-ui waves-effect waves-light\" type=\"button\" name=\"action\">Load TLE &#9658;</button>\n                  <input id=\"editSat-file\" class=\"start-hidden\" type=\"file\" name=\"files[]\" />\n                </div>\n              </form>\n            </div>\n            <div id=\"es-error\" class=\"center-align menu-selectable start-hidden\">\n              <h6 class=\"center-align\">Error</h6>\n            </div>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-editSat\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"edit\"\n            src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAGYUlEQVR4nO2dW2wUVRjHf990W6hYm1BMa3zh0iiyXSjdbmNiNCDhgRCIMRBJfDG+iEAMJAZjeDDExEh8IAoGE3w3QiBE1GgiFiMPUHdb6G65SKLREMWAECBy6WU+H3qhlJnduWzb3Z3ze5w55zsn///M9505nZ2CwWAwGAwGg8FgMBgMBoOhFEimtT7epzWTOYZMZvByYlmnxq49xipV1gArgCeBGSOnryCcUeWoNcjh3mflUrHGNQaoSiLDOuB94GkPPe6h7ItV8UFPm1wJO3ykDZjbqTPr6vgceNVvX4WrKOtzKTkeZg6RNSDepU2WxbfA0hBh+kV5rTclXwQNEEkDWk5qo8Q4BsSLEG4Am5XZDvkpSOfIGTBy5XcCCws07RblokI9wnNAXZ62/8QsEkFqguW3QznjRXyF71VYlG2XZG9KNmRTsurRfhpF2A7cdunWOGCzI8icInMHeBJf+SjXzjuIqNP5lm5tF5uvgUaH0/dkkGa/S9RI3AEe086HuZRsdxMfINcmaYTVwH8Op2fYMV72O7eKN8CT+MLebLu86yVeNikZhfccwwhr/M6vog1oOamNlsUPFC64C5ov6owCbcbQWvYA1x46rrT6nGLlGhDv0iaJcRwvS01lVe1NDnjd9+mLSz/w88TjAg1+944q0gAfS837KGutuxz0KqDCDYfDUt3PI57HpAINCCT+KD5MEOd9o3unWx2NcaWiDPAivsBnCF+5BvFgQiKtC4EOh1OX8q2inKgYAzw+ZO3rTbLJnsn6wCaoWsAnOD1DKcf8zrsiDPAqfi7JZkS0Ly79QU1YnGEXsNKxi8VRv3MvewM8LjX355JsGZ8exkyAI669hk04MrpETaR1p8LbLq1/nXOT7/zOv6y3Ivxe+Y4x+rTGustBlLWuAw3fKX+ibHFtoqzrTckhH9MfCV2mFEP8sVheTMjPgWySDX4LMJRpCgqadtzwlI5cEDgt1bweRHwoQwM8/jFlfzbJRkRsr3H74tJv1/IK/ky4UGWxuneJOG3OeaKsUtBkiT+eeJ/WWHf4EnipQNMLMYsXe9rkryDjjFI2d4CXvR2FfdkkbwQVH6BvEQMClws0O2/bLAsrPpSJAcXO+a6oSiLNHoWNeVpdiFms6OuQQiZ5ouRT0FSkHWBMfITNeVoVJe2Mp6QNqHTxoYQNiIL4UKIGREV8KEEDoiQ+lJgBURMfSsiAKIoPJWJAVMWHEjAgyuLDNBsQdfFhGg0w4g8zLQYY8e8z5QYY8R9kSg0w4j/MlBlgxHdmSgww4rsz6QYY8fMzqQYY8QszaQYY8b0xKQYY8b1TdAOM+P4oqgFGfP8UzQAjfjCKYoARPzihDTDihyMWpnO8S5uk8A/i/rZi7AwrfkuGTxHezNPqvG2zvKe9OG+sTRWhXk20qthG4V8jPmEPcrYlrW+tP6BVvgcZEV8oLH6xXhecSsK9G2qT9NjyMYGPz8+nc+EpbfAcv8LFhzAGqAri+2tTz1dX0TXyM8+C8RNp9hQQv6gvyk4HgQ1IpJkHzA7QdT5wYskpfcq1xf2cn6/gFu0V8ekk+B0grunnrAqHgHyviTfYVXzjmI4ikHbGE6YGOBsg/JhLyjqElMKJPP2bqy0OP1CYIyY+hKoBtDsdFiUNw9/VmXOL5cAu1xjCC+fms2k4XjRy/kSCPYgNf+z0Ks41YHG2XbIPHMjoVlV2u0S7acVYNDTIjihd+aMEMmDxKZ2nVfzmcOp2wy3qjy+XwYknEr/o3jxF9TLQlGfIihQfgqYgyyX/K2ecxAeoEbblqQmRFB8CGqBuKyAZzv9OZNplQISt5F8dTaTicv5EghZhRwMEMvk6ZZOSUeGwxzHKbmMtCIE24xSWOhUPhe6Jx5Z1auzfOp4ZeW5Iop6+ZFWWG2tB8F2EW3t07tAQvzucun2nntmzrtOsQnJUcIVWYJaPISJx5Y/i+w4YtGlzca269gbXbMvfR+smEJkrfxTfNcByeQADqiGU+BVfcJ3wbYC6bUGEI1JpZzxBinCYf3gwnuso3Vhk7CF2RyntjMeXAS1pXQA8HmCcGwI5IIOSESVzJsXZUB/WqBB8GWApHVp43WTE9oEvA9QiNf45VuEqI0JjkRkSMufa5I8iz7Gi8VcDbASL3WLTpdCVS4nThpzBYDAYDAaDwWAwGAwGg6E0+R+jRKFzzvAhBwAAAABJRU5ErkJggg==\"\n          />\n          <span class=\"bmenu-title\">Edit Satellite</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-editSat\" class=\"bmenu-item bmenu-item-disabled\">\n          <img\n            alt=\"edit\"\n            src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAGYUlEQVR4nO2dW2wUVRjHf990W6hYm1BMa3zh0iiyXSjdbmNiNCDhgRCIMRBJfDG+iEAMJAZjeDDExEh8IAoGE3w3QiBE1GgiFiMPUHdb6G65SKLREMWAECBy6WU+H3qhlJnduWzb3Z3ze5w55zsn///M9505nZ2CwWAwGAwGg8FgMBgMBoOhFEimtT7epzWTOYZMZvByYlmnxq49xipV1gArgCeBGSOnryCcUeWoNcjh3mflUrHGNQaoSiLDOuB94GkPPe6h7ItV8UFPm1wJO3ykDZjbqTPr6vgceNVvX4WrKOtzKTkeZg6RNSDepU2WxbfA0hBh+kV5rTclXwQNEEkDWk5qo8Q4BsSLEG4Am5XZDvkpSOfIGTBy5XcCCws07RblokI9wnNAXZ62/8QsEkFqguW3QznjRXyF71VYlG2XZG9KNmRTsurRfhpF2A7cdunWOGCzI8icInMHeBJf+SjXzjuIqNP5lm5tF5uvgUaH0/dkkGa/S9RI3AEe086HuZRsdxMfINcmaYTVwH8Op2fYMV72O7eKN8CT+MLebLu86yVeNikZhfccwwhr/M6vog1oOamNlsUPFC64C5ov6owCbcbQWvYA1x46rrT6nGLlGhDv0iaJcRwvS01lVe1NDnjd9+mLSz/w88TjAg1+944q0gAfS837KGutuxz0KqDCDYfDUt3PI57HpAINCCT+KD5MEOd9o3unWx2NcaWiDPAivsBnCF+5BvFgQiKtC4EOh1OX8q2inKgYAzw+ZO3rTbLJnsn6wCaoWsAnOD1DKcf8zrsiDPAqfi7JZkS0Ly79QU1YnGEXsNKxi8VRv3MvewM8LjX355JsGZ8exkyAI669hk04MrpETaR1p8LbLq1/nXOT7/zOv6y3Ivxe+Y4x+rTGustBlLWuAw3fKX+ibHFtoqzrTckhH9MfCV2mFEP8sVheTMjPgWySDX4LMJRpCgqadtzwlI5cEDgt1bweRHwoQwM8/jFlfzbJRkRsr3H74tJv1/IK/ky4UGWxuneJOG3OeaKsUtBkiT+eeJ/WWHf4EnipQNMLMYsXe9rkryDjjFI2d4CXvR2FfdkkbwQVH6BvEQMClws0O2/bLAsrPpSJAcXO+a6oSiLNHoWNeVpdiFms6OuQQiZ5ouRT0FSkHWBMfITNeVoVJe2Mp6QNqHTxoYQNiIL4UKIGREV8KEEDoiQ+lJgBURMfSsiAKIoPJWJAVMWHEjAgyuLDNBsQdfFhGg0w4g8zLQYY8e8z5QYY8R9kSg0w4j/MlBlgxHdmSgww4rsz6QYY8fMzqQYY8QszaQYY8b0xKQYY8b1TdAOM+P4oqgFGfP8UzQAjfjCKYoARPzihDTDihyMWpnO8S5uk8A/i/rZi7AwrfkuGTxHezNPqvG2zvKe9OG+sTRWhXk20qthG4V8jPmEPcrYlrW+tP6BVvgcZEV8oLH6xXhecSsK9G2qT9NjyMYGPz8+nc+EpbfAcv8LFhzAGqAri+2tTz1dX0TXyM8+C8RNp9hQQv6gvyk4HgQ1IpJkHzA7QdT5wYskpfcq1xf2cn6/gFu0V8ekk+B0grunnrAqHgHyviTfYVXzjmI4ikHbGE6YGOBsg/JhLyjqElMKJPP2bqy0OP1CYIyY+hKoBtDsdFiUNw9/VmXOL5cAu1xjCC+fms2k4XjRy/kSCPYgNf+z0Ks41YHG2XbIPHMjoVlV2u0S7acVYNDTIjihd+aMEMmDxKZ2nVfzmcOp2wy3qjy+XwYknEr/o3jxF9TLQlGfIihQfgqYgyyX/K2ecxAeoEbblqQmRFB8CGqBuKyAZzv9OZNplQISt5F8dTaTicv5EghZhRwMEMvk6ZZOSUeGwxzHKbmMtCIE24xSWOhUPhe6Jx5Z1auzfOp4ZeW5Iop6+ZFWWG2tB8F2EW3t07tAQvzucun2nntmzrtOsQnJUcIVWYJaPISJx5Y/i+w4YtGlzca269gbXbMvfR+smEJkrfxTfNcByeQADqiGU+BVfcJ3wbYC6bUGEI1JpZzxBinCYf3gwnuso3Vhk7CF2RyntjMeXAS1pXQA8HmCcGwI5IIOSESVzJsXZUB/WqBB8GWApHVp43WTE9oEvA9QiNf45VuEqI0JjkRkSMufa5I8iz7Gi8VcDbASL3WLTpdCVS4nThpzBYDAYDAaDwWAwGAwGg6E0+R+jRKFzzvAhBwAAAABJRU5ErkJggg==\"\n          />\n          <span class=\"bmenu-title\">Edit Satellite</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('height', '');
                },
                maxWidth: 450,
                minWidth: 280,
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-newTLE').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeIn(1000, function () {
                    try {
                        // Update Satellite TLE so that Epoch is Now but ECI position is very very close
                        var satId = satSet.getIdFromObjNum(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-scc').val());
                        var mainsat = satSet.getSat(satId);
                        // Launch Points are the Satellites Current Location
                        var TEARR = mainsat.getTEARR();
                        var launchLat, launchLon, alt;
                        launchLon = satellite.degreesLong(TEARR.lon);
                        launchLat = satellite.degreesLat(TEARR.lat);
                        alt = TEARR.alt;
                        var upOrDown = mainsat.getDirection();
                        var currentEpoch = satellite.currentEpoch(timeManager.propTime());
                        mainsat.TLE1 = mainsat.TLE1.substr(0, 18) + currentEpoch[0] + currentEpoch[1] + mainsat.TLE1.substr(32);
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs.cameraManager.camSnapMode = false;
                        var TLEs;
                        // Ignore argument of perigee for round orbits OPTIMIZE
                        if (mainsat.apogee - mainsat.perigee < 300) {
                            TLEs = satellite.getOrbitByLatLon(mainsat, launchLat, launchLon, upOrDown, timeManager.propOffset);
                        }
                        else {
                            TLEs = satellite.getOrbitByLatLon(mainsat, launchLat, launchLon, upOrDown, timeManager.propOffset, alt);
                        }
                        var TLE1 = TLEs[0];
                        var TLE2 = TLEs[1];
                        satSet.satCruncher.postMessage({
                            typ: 'satEdit',
                            id: satId,
                            TLE1: TLE1,
                            TLE2: TLE2,
                        });
                        orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
                        //
                        // Reload Menu with new TLE
                        //
                        var sat = satSet.getSatExtraOnly(objectManager.selectedSat);
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-scc').val(sat.SCC_NUM);
                        var inc = (sat.inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toPrecision(7);
                        inc = inc.split('.');
                        inc[0] = inc[0].substr(-3, 3);
                        inc[1] = inc[1].substr(0, 4);
                        inc = (inc[0] + '.' + inc[1]).toString();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-inc').val(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(inc, 8));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-year').val(sat.TLE1.substr(18, 2));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-day').val(sat.TLE1.substr(20, 12));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-meanmo').val(sat.TLE2.substr(52, 11));
                        var rasc = (sat.raan * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toPrecision(7);
                        rasc = rasc.split('.');
                        rasc[0] = rasc[0].substr(-3, 3);
                        rasc[1] = rasc[1].substr(0, 4);
                        rasc = (rasc[0] + '.' + rasc[1]).toString();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-rasc').val(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(rasc, 8));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-ecen').val(sat.eccentricity.toPrecision(7).substr(2, 7));
                        var argPe = (sat.argPe * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toPrecision(7);
                        argPe = argPe.split('.');
                        argPe[0] = argPe[0].substr(-3, 3);
                        argPe[1] = argPe[1].substr(0, 4);
                        argPe = (argPe[0] + '.' + argPe[1]).toString();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-argPe').val(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(argPe, 8));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-meana').val(sat.TLE2.substr(44 - 1, 7 + 1));
                    }
                    catch (error) {
                        console.debug(error);
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading-screen').fadeOut('slow');
                });
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat').on('submit', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').hide();
                var scc = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-scc').val();
                var satId = satSet.getIdFromObjNum(scc);
                if (satId === null) {
                    console.log('Not a Real Satellite');
                    e.preventDefault();
                    return false;
                }
                var sat = satSet.getSatExtraOnly(satId);
                var intl = sat.TLE1.substr(9, 8);
                var inc = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-inc').val();
                inc = parseFloat(inc).toPrecision(7);
                inc = inc.split('.');
                inc[0] = inc[0].substr(-3, 3);
                if (inc[1]) {
                    inc[1] = inc[1].substr(0, 4);
                }
                else {
                    inc[1] = '0000';
                }
                inc = (inc[0] + '.' + inc[1]).toString();
                inc = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(inc, 8);
                var meanmo = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-meanmo').val();
                meanmo = parseFloat(meanmo).toPrecision(10);
                meanmo = meanmo.split('.');
                meanmo[0] = meanmo[0].substr(-2, 2);
                if (meanmo[1]) {
                    meanmo[1] = meanmo[1].substr(0, 8);
                }
                else {
                    meanmo[1] = '00000000';
                }
                meanmo = (meanmo[0] + '.' + meanmo[1]).toString();
                meanmo = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(meanmo, 8);
                var rasc = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-rasc').val();
                rasc = parseFloat(rasc).toPrecision(7);
                rasc = rasc.split('.');
                rasc[0] = rasc[0].substr(-3, 3);
                if (rasc[1]) {
                    rasc[1] = rasc[1].substr(0, 4);
                }
                else {
                    rasc[1] = '0000';
                }
                rasc = (rasc[0] + '.' + rasc[1]).toString();
                rasc = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(rasc, 8);
                var ecen = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-ecen').val();
                var argPe = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-argPe').val();
                argPe = parseFloat(argPe).toPrecision(7);
                argPe = argPe.split('.');
                argPe[0] = argPe[0].substr(-3, 3);
                if (argPe[1]) {
                    argPe[1] = argPe[1].substr(0, 4);
                }
                else {
                    argPe[1] = '0000';
                }
                argPe = (argPe[0] + '.' + argPe[1]).toString();
                argPe = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(argPe, 8);
                var meana = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-meana').val();
                meana = parseFloat(meana).toPrecision(7);
                meana = meana.split('.');
                meana[0] = meana[0].substr(-3, 3);
                if (meana[1]) {
                    meana[1] = meana[1].substr(0, 4);
                }
                else {
                    meana[1] = '0000';
                }
                meana = (meana[0] + '.' + meana[1]).toString();
                meana = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(meana, 8);
                var epochyr = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-year').val();
                var epochday = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-day').val();
                var TLE1Ending = sat.TLE1.substr(32, 39);
                var TLE1 = '1 ' + scc + 'U ' + intl + ' ' + epochyr + epochday + TLE1Ending; // M' and M'' are both set to 0 to put the object in a perfect stable orbit
                var TLE2 = '2 ' + scc + ' ' + inc + ' ' + rasc + ' ' + ecen + ' ' + argPe + ' ' + meana + ' ' + meanmo + '    10';
                if (satellite.altitudeCheck(TLE1, TLE2, timeManager.propOffset) > 1) {
                    satSet.satCruncher.postMessage({
                        typ: 'satEdit',
                        id: satId,
                        active: true,
                        TLE1: TLE1,
                        TLE2: TLE2,
                    });
                    orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
                    sat.active = true;
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').html('Failed Altitude Check</br>Try Different Parameters');
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').show();
                }
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-save').on('click', function (e) {
                try {
                    var scc = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-scc').val();
                    var satId = satSet.getIdFromObjNum(scc);
                    var sat = satSet.getSatExtraOnly(satId);
                    var sat2 = {
                        TLE1: sat.TLE1,
                        TLE2: sat.TLE2,
                    };
                    var variable = JSON.stringify(sat2);
                    var blob = new Blob([variable], {
                        type: 'text/plain;charset=utf-8',
                    });
                    (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, scc + '.tle');
                }
                catch (error) {
                    // console.warn(error);
                }
                e.preventDefault();
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-open').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-file').trigger('click');
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-file').on('change', function (evt) {
                if (!window.FileReader)
                    return; // Browser is not compatible
                try {
                    var reader = new FileReader();
                    reader.onload = function (evt) {
                        if (evt.target.readyState !== 2)
                            return;
                        if (evt.target.error) {
                            console.log('error');
                            return;
                        }
                        var object = JSON.parse(evt.target.result);
                        var scc = parseInt(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(object.TLE1.substr(2, 5).trim(), 5));
                        var satId = satSet.getIdFromObjNum(scc);
                        var sat = satSet.getSatExtraOnly(satId);
                        if (satellite.altitudeCheck(object.TLE1, object.TLE2, timeManager.propOffset) > 1) {
                            satSet.satCruncher.postMessage({
                                typ: 'satEdit',
                                id: sat.id,
                                active: true,
                                TLE1: object.TLE1,
                                TLE2: object.TLE2,
                            });
                            orbitManager.updateOrbitBuffer(sat.id, true, object.TLE1, object.TLE2);
                            sat.active = true;
                        }
                        else {
                            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').html('Failed Altitude Check</br>Try Different Parameters');
                            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').show();
                        }
                    };
                    reader.readAsText(evt.target.files[0]);
                    evt.preventDefault();
                }
                catch (error) {
                    // console.warn(error);
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-error').hide();
            });
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'editSat',
        cb: function (iconName) {
            if (iconName === 'menu-editSat') {
                if (isEditSatMenuOpen) {
                    isEditSatMenuOpen = false;
                    uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (objectManager.selectedSat !== -1) {
                        if (settingsManager.isMobileModeEnabled)
                            uiManager.searchToggle(false);
                        uiManager.hideSideMenus();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-editSat').addClass('bmenu-item-selected');
                        isEditSatMenuOpen = true;
                        var sat = satSet.getSatExtraOnly(objectManager.selectedSat);
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-scc').val(sat.SCC_NUM);
                        var inc = (sat.inclination * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toPrecision(7);
                        inc = inc.split('.');
                        inc[0] = inc[0].substr(-3, 3);
                        inc[1] = inc[1].substr(0, 4);
                        inc = (inc[0] + '.' + inc[1]).toString();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-inc').val(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(inc, 8));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-year').val(sat.TLE1.substr(18, 2));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-day').val(sat.TLE1.substr(20, 12));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-meanmo').val(sat.TLE2.substr(52, 11));
                        var rasc = (sat.raan * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toPrecision(7);
                        rasc = rasc.split('.');
                        rasc[0] = rasc[0].substr(-3, 3);
                        rasc[1] = rasc[1].substr(0, 4);
                        rasc = (rasc[0] + '.' + rasc[1]).toString();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-rasc').val(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(rasc, 8));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-ecen').val(sat.eccentricity.toPrecision(7).substr(2, 7));
                        var argPe = (sat.argPe * _app_js_lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG).toPrecision(7);
                        argPe = argPe.split('.');
                        argPe[0] = argPe[0].substr(-3, 3);
                        argPe[1] = argPe[1].substr(0, 4);
                        argPe = (argPe[0] + '.' + argPe[1]).toString();
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-argPe').val(_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.stringPad.pad0(argPe, 8));
                        jquery__WEBPACK_IMPORTED_MODULE_1___default()('#es-meana').val(sat.TLE2.substr(44 - 1, 7 + 1));
                        // $('#es-rasc').val(sat.TLE2.substr(18 - 1, 7 + 1).toString());
                    }
                    else {
                        if (settingsManager.plugins.topMenu)
                            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs.adviceManager.adviceList.editSatDisabled();
                        uiManager.toast("Select a Satellite First!", 'caution');
                        if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-editSat:animated').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-editSat').effect('shake', {
                                distance: 10,
                            });
                        }
                    }
                }
                return;
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'rmbMenuActions',
        cbName: 'editSat',
        cb: function (iconName, clickedSat) {
            if (iconName === 'edit-sat-rmb') {
                objectManager.setSelectedSat(clickedSat);
                if (!isEditSatMenuOpen) {
                    uiManager.bottomIconPress({
                        currentTarget: { id: 'menu-editSat' },
                    });
                }
                return;
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'editSat',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#editSat-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-editSat').removeClass('bmenu-item-selected');
            isEditSatMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_editSat_editSat_ts.b8edfa7955f0973fd4a8.js.map