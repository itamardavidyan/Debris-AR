"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_nextLaunch_nextLaunch_ts"],{

/***/ "./src/js/plugins/nextLaunch/nextLaunch.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/nextLaunch/nextLaunch.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextLaunchManager": () => (/* binding */ nextLaunchManager),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/external/dateFormat.js */ "./src/js/lib/external/dateFormat.js");
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* harmony import */ var _app_js_settingsManager_settingsManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/js/settingsManager/settingsManager */ "./src/js/settingsManager/settingsManager.ts");
/* */
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};





/**
 * @returns {HTMLTableElement | boolean} The Table Element to be modified in the UI or a false boolean to kill the parent method
 */
var _getTableElement = function () {
    var tbl = document.getElementById('nextLaunch-table'); // Identify the table to update
    if (tbl == null) {
        console.warn('nextLaunchManager.showTable failed to find nextLaunch-table element!');
        return false;
    }
    return tbl;
};
var _makeTableHeaders = function (tbl) {
    var tr = tbl.insertRow();
    var tdT = tr.insertCell();
    tdT.appendChild(document.createTextNode('Launch Window'));
    tdT.setAttribute('style', 'text-decoration: underline; width: 120px;');
    var tdN = tr.insertCell();
    tdN.appendChild(document.createTextNode('Mission'));
    tdN.setAttribute('style', 'text-decoration: underline; width: 140px;');
    var tdL = tr.insertCell();
    tdL.appendChild(document.createTextNode('Location'));
    tdL.setAttribute('style', 'text-decoration: underline');
    var tdA = tr.insertCell();
    tdA.appendChild(document.createTextNode('Agency'));
    tdA.setAttribute('style', 'text-decoration: underline');
    var tdC = tr.insertCell();
    tdC.appendChild(document.createTextNode('Country'));
    tdC.setAttribute('style', 'text-decoration: underline');
};
var _initTable = function (tbl, launchList) {
    _makeTableHeaders(tbl);
    for (var i = 0; i < launchList.length; i++) {
        var tr = tbl.insertRow();
        // Time Cells
        var tdT = tr.insertCell();
        var timeText = void 0;
        if (launchList[i].windowStart.valueOf() <= Date.now() - 1000 * 60 * 60 * 24) {
            timeText = 'TBD';
        }
        else {
            timeText = (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(launchList[i].windowStart, 'isoDateTime', true) + ' UTC';
        }
        tdT.appendChild(document.createTextNode(timeText));
        // Name Cells
        var tdN = tr.insertCell();
        // Mission Name Text
        var nameText = typeof launchList[i].missionName != 'undefined' ? launchList[i].missionName : 'Unknown';
        // Mission Name HTML Setup
        var nameHTML = void 0;
        if (typeof launchList[i].missionURL == 'undefined' || launchList[i].missionURL == '') {
            nameHTML = "" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(nameText, 15);
        }
        else {
            nameHTML = "<a class='iframe' href=\"" + launchList[i].missionURL + "\">" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(nameText, 15) + "</a>";
        }
        // Rocket Name HTML Setup
        var rocketHTML = void 0;
        if (typeof launchList[i].rocketURL == 'undefined') {
            rocketHTML = "" + launchList[i].rocket;
        }
        else {
            rocketHTML = "<a class='iframe' href=\"" + launchList[i].rocketURL + "\">" + launchList[i].rocket + "</a>";
        }
        // Set Name and Rocket HTML
        tdN.innerHTML = nameHTML + "<br />" + rocketHTML;
        // Location Name HTML Setup
        var locationHTML = void 0;
        if (typeof launchList[i].locationURL == 'undefined' || launchList[i].locationURL == '') {
            locationHTML = "" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(launchList[i].location, 25);
        }
        else {
            if (window.location.protocol === 'http:') {
                locationHTML = "<a class='iframe' href=\"" + launchList[i].locationURL + "\">" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(launchList[i].location, 25) + "</a>";
            }
            else {
                locationHTML = "<a class='iframe' href=\"" + launchList[i].locationURL + "\">" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(launchList[i].location, 25) + "</a>";
            }
        }
        var tdL = tr.insertCell();
        tdL.innerHTML = locationHTML;
        // Agency Name HTML Setup
        var agencyHTML = void 0;
        if (typeof launchList[i].agencyURL == 'undefined') {
            agencyHTML = "" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(launchList[i].agency, 30);
        }
        else {
            if (window.location.protocol === 'http:') {
                agencyHTML = "<a class='iframe' href=\"" + launchList[i].agencyURL + "\">" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(launchList[i].agency, 30) + "</a>";
            }
            else {
                agencyHTML = "<a class='iframe' href=\"" + launchList[i].agencyURL + "\">" + (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.truncateString)(launchList[i].agency, 30) + "</a>";
            }
        }
        var tdA = tr.insertCell();
        tdA.innerHTML = agencyHTML;
        // Country Cell
        var tdC = tr.insertCell();
        tdC.innerHTML = "<span class=\"badge dark-blue-badge\" data-badge-caption=\"" + launchList[i].country + "\"></span>";
    }
};
var nextLaunchManager = {
    launchList: [],
    init: function () {
        if (_app_js_settingsManager_settingsManager__WEBPACK_IMPORTED_MODULE_4__.settingsManager.offline) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-nextLaunch').hide();
            return;
        }
        // Won't Work Offline
        if (window.location.hostname === 'localhost')
            return;
        jquery__WEBPACK_IMPORTED_MODULE_1___default().get('https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=20&mode=detailed')
            .done(function (resp) { return nextLaunchManager.processData(resp); })
            .fail(function () { return console.warn("https://ll.thespacedevs.com/2.0.0/ is Unavailable!"); });
    },
    showTable: function () {
        var tbl = _getTableElement();
        if (typeof tbl == 'boolean')
            return;
        // Only needs populated once
        if (tbl.innerHTML == '') {
            _initTable(tbl, nextLaunchManager.launchList);
            try {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('a.iframe').colorbox({
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
        }
    },
    processData: function (resp) {
        for (var i = 0; i < resp.results.length; i++) {
            /**
             * Info from launchlibrary.net
             */
            var launchLibResult = resp.results[i];
            var launchInfo = {
                name: '',
                updated: null,
                windowStart: new Date(launchLibResult.window_start),
                windowEnd: new Date(launchLibResult.window_end),
                location: '',
                locationURL: '',
                agency: '',
                agencyURL: '',
                country: '',
                mission: '',
                missionName: '',
                missionType: '',
                missionURL: '',
                rocket: '',
                rocketConfig: '',
                rocketFamily: '',
                rocketURL: '',
            };
            if (typeof launchLibResult.last_updated !== 'undefined')
                launchInfo.updated = new Date(launchLibResult.last_updated);
            launchInfo.name = typeof launchLibResult.name != 'undefined' ? launchLibResult.name : 'Unknown';
            launchInfo.location = launchLibResult.pad.location.name.split(',', 1);
            launchInfo.location = launchInfo.location[0];
            launchInfo.locationURL = launchLibResult.pad.wiki_url;
            if (typeof launchLibResult.launch_service_provider != 'undefined') {
                launchInfo.agency = typeof launchLibResult.launch_service_provider.name != 'undefined' ? launchLibResult.launch_service_provider.name : 'Unknown';
                launchInfo.country = typeof launchLibResult.launch_service_provider.country_code != 'undefined' ? launchLibResult.launch_service_provider.country_code : 'Unknown';
                if (typeof launchLibResult.launch_service_provider.wiki_url != 'undefined') {
                    launchInfo.agencyURL = launchLibResult.launch_service_provider.wiki_url;
                }
            }
            else {
                launchInfo.agency = 'Unknown';
                launchInfo.country = 'UNK';
                launchInfo.agencyURL = '';
            }
            if (launchLibResult.mission != null) {
                launchInfo.mission = launchLibResult.mission.description;
                launchInfo.missionName = launchLibResult.mission.name;
                launchInfo.missionType = launchLibResult.mission.type;
                if (typeof launchLibResult.mission.wiki_url != 'undefined') {
                    launchInfo.missionURL = launchLibResult.mission.wiki_url;
                }
            }
            launchInfo.rocket = launchLibResult.rocket.configuration.full_name;
            launchInfo.rocketConfig = launchLibResult.rocket.configuration.name;
            launchInfo.rocketFamily = launchLibResult.rocket.configuration.family;
            if (typeof launchLibResult.rocket.configuration.wiki_url != 'undefined') {
                launchInfo.rocketURL = launchLibResult.rocket.configuration.wiki_url;
            }
            nextLaunchManager.launchList[i] = launchInfo;
        }
    },
};
var init = function () {
    // Load CSS
    __webpack_require__.e(/*! import() */ "src_js_plugins_nextLaunch_nextLaunch_css").then(__webpack_require__.bind(__webpack_require__, /*! @app/js/plugins/nextLaunch/nextLaunch.css */ "./src/js/plugins/nextLaunch/nextLaunch.css")).then(function (resp) { return resp; });
    var isNextLaunchMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'nextLaunchManager',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div id=\"nextLaunch-menu\" class=\"side-menu-parent start-hidden text-select\">\n        <div id=\"nextLaunch-content\" class=\"side-menu\">\n          <div class=\"row\">\n            <h5 class=\"center-align\">Next Launches</h5>\n            <table id=\"nextLaunch-table\" class=\"center-align striped-light centered\"></table>\n          </div>\n          <div class=\"row\">\n            <center>\n              <button id=\"export-launch-info\" class=\"btn btn-ui waves-effect waves-light\">Export Launch Info &#9658;</button>\n            </center>\n          </div>\n        </div>\n      </div>\n    "], ["\n      <div id=\"nextLaunch-menu\" class=\"side-menu-parent start-hidden text-select\">\n        <div id=\"nextLaunch-content\" class=\"side-menu\">\n          <div class=\"row\">\n            <h5 class=\"center-align\">Next Launches</h5>\n            <table id=\"nextLaunch-table\" class=\"center-align striped-light centered\"></table>\n          </div>\n          <div class=\"row\">\n            <center>\n              <button id=\"export-launch-info\" class=\"btn btn-ui waves-effect waves-light\">Export Launch Info &#9658;</button>\n            </center>\n          </div>\n        </div>\n      </div>\n    "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-nextLaunch\" class=\"bmenu-item\">\n          <img alt=\"calendar\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABNUlEQVR4nO3cQWrCQBiAUS29Tne9/wm680C6Erow0GBnvtG8txQxkY8/jBP1dAIAAADgKM4zD/b1c70+evzyfZ56HncrnM/HrAPxmACxp0Zta4SP5plLlgmICRATICZATIDY54gX3VoVrPDB57e95zNi1WcCYgLEhlyCtlSXmi0rnI8JiAkQG3IJskf0dyYgJkBMgJgAMQFiU/eCXp29oDckQEyAmAAxAWJTt6P3+q87VivfoTMBMQFiAsQEiAkQW3oVtHc1Mvr5I5iAmAAxAWICxASITV0Frba3Yy8IAWoCxASICRAb8kv5FfZYRhjxfk1ATICYADEBYgLEDr0XtAITEBMgJkBMgJgAsaX/rOMVv+ezlwmICRATICZATICY/wuKmYCYADEBYgLEBAAAAAAAgPd3AzYrWtKgtEhrAAAAAElFTkSuQmCC\">\n          <span class=\"bmenu-title\">Next Launches</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-nextLaunch\" class=\"bmenu-item\">\n          <img alt=\"calendar\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABNUlEQVR4nO3cQWrCQBiAUS29Tne9/wm680C6Erow0GBnvtG8txQxkY8/jBP1dAIAAADgKM4zD/b1c70+evzyfZ56HncrnM/HrAPxmACxp0Zta4SP5plLlgmICRATICZATIDY54gX3VoVrPDB57e95zNi1WcCYgLEhlyCtlSXmi0rnI8JiAkQG3IJskf0dyYgJkBMgJgAMQFiU/eCXp29oDckQEyAmAAxAWJTt6P3+q87VivfoTMBMQFiAsQEiAkQW3oVtHc1Mvr5I5iAmAAxAWICxASITV0Frba3Yy8IAWoCxASICRAb8kv5FfZYRhjxfk1ATICYADEBYgLEDr0XtAITEBMgJkBMgJgAsaX/rOMVv+ezlwmICRATICZATICY/wuKmYCYADEBYgLEBAAAAAAAgPd3AzYrWtKgtEhrAAAAAElFTkSuQmCC\">\n          <span class=\"bmenu-title\">Next Launches</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nextLaunch-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('height', '');
                },
                maxWidth: 650,
                minWidth: 450,
            });
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#export-launch-info').on('click', function () {
                (0,_app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_0__.saveCsv)(nextLaunchManager.launchList, 'launchList');
            });
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'nextLaunch',
        cb: function (iconName) {
            if (iconName === 'menu-nextLaunch') {
                if (isNextLaunchMenuOpen) {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs.uiManager.hideSideMenus();
                    isNextLaunchMenuOpen = false;
                    return;
                }
                else {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs.uiManager.hideSideMenus();
                    nextLaunchManager.showTable();
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nextLaunch-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isNextLaunchMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-nextLaunch').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'nextLaunch',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#nextLaunch-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-nextLaunch').removeClass('bmenu-item-selected');
            isNextLaunchMenuOpen = false;
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.register({
        method: 'onCruncherReady',
        cbName: 'nextLaunch',
        cb: function () {
            nextLaunchManager.init();
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_nextLaunch_nextLaunch_ts.a283603793408da8f6d2.js.map