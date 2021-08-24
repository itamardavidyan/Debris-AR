"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_countries_countries_ts"],{

/***/ "./src/js/plugins/countries/countries.ts":
/*!***********************************************!*\
  !*** ./src/js/plugins/countries/countries.ts ***!
  \***********************************************/
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
var _this = undefined;


var init = function () {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, groups = _a.groups, orbitManager = _a.orbitManager, satSet = _a.satSet, searchBox = _a.searchBox, objectManager = _a.objectManager, uiManager = _a.uiManager, settingsManager = _a.settingsManager;
    var isCountriesMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'countries',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"countries-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"country-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Countries</h5>\n              <li class=\"divider\"></li>\n              <li class=\"menu-selectable country-option\" data-group=\"Canada\">Canadian</li>\n              <li class=\"menu-selectable country-option\" data-group=\"China\">Chinese</li>\n              <li class=\"menu-selectable country-option\" data-group=\"France\">French</li>\n              <li class=\"menu-selectable country-option\" data-group=\"India\">Indian</li>\n              <li class=\"menu-selectable country-option\" data-group=\"Israel\">Israeli</li>\n              <li class=\"menu-selectable country-option\" data-group=\"Japan\">Japanese</li>\n              <li class=\"menu-selectable country-option\" data-group=\"Russia\">Russian / USSR</li>\n              <li class=\"menu-selectable country-option\" data-group=\"UnitedKingdom\">British</li>\n              <li class=\"menu-selectable country-option\" data-group=\"UnitedStates\">American</li>\n            </ul>\n          </div>\n        </div>\n      "], ["\n        <div id=\"countries-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"country-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Countries</h5>\n              <li class=\"divider\"></li>\n              <li class=\"menu-selectable country-option\" data-group=\"Canada\">Canadian</li>\n              <li class=\"menu-selectable country-option\" data-group=\"China\">Chinese</li>\n              <li class=\"menu-selectable country-option\" data-group=\"France\">French</li>\n              <li class=\"menu-selectable country-option\" data-group=\"India\">Indian</li>\n              <li class=\"menu-selectable country-option\" data-group=\"Israel\">Israeli</li>\n              <li class=\"menu-selectable country-option\" data-group=\"Japan\">Japanese</li>\n              <li class=\"menu-selectable country-option\" data-group=\"Russia\">Russian / USSR</li>\n              <li class=\"menu-selectable country-option\" data-group=\"UnitedKingdom\">British</li>\n              <li class=\"menu-selectable country-option\" data-group=\"UnitedStates\">American</li>\n            </ul>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-countries\" class=\"bmenu-item\">\n          <img\n            alt=\"flag\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABc0lEQVR4nO3aT26CQBzF8QdOTO/gGdy1x+k52k1ddKW9Rf8cx523IQS6M0ZDCpMZH0O/n53kZ0J8GeQxSAAAAAAAAAAAAAAAIItqzND22Pe5T2SJTo/Vn79vfY8TwTACMIsJoFGvl1BrE2ptJL1KaozzRQsR39mdnqqPi8+H7bGXpL1pvmiTV0ArfV0f6zp9uuZLN3kFPNS3d05hrVXXeuYvjbnrmJvpK6DT8/Wxrr09dq/50sX0gEbSLtT6ls4/2Luk9cDXc8+flbgCFlXESgyAHmBGAGYpL0GNer2FlX6kkdf6vPN2Yy6JMUVsCAUtQrJLEAUtTrIAhgqUa74U6VYABS1K2j/hmRY0lzF/whQxM3qAGQGYsSNmxo6YGTtiZovaEZvb3VqW94IoXGktakdsbv5dEZsbXk0sAAEAAADAgCKWEUWsAARgRgBmBGBGAAAAADDgWVBGPAsqAAGYEYAZAZgRAAAAAAAAAAAAAAAAWKZfZIMQFE8x07MAAAAASUVORK5CYII=\"\n          />\n          <span class=\"bmenu-title\">Countries</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-countries\" class=\"bmenu-item\">\n          <img\n            alt=\"flag\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABc0lEQVR4nO3aT26CQBzF8QdOTO/gGdy1x+k52k1ddKW9Rf8cx523IQS6M0ZDCpMZH0O/n53kZ0J8GeQxSAAAAAAAAAAAAAAAIItqzND22Pe5T2SJTo/Vn79vfY8TwTACMIsJoFGvl1BrE2ptJL1KaozzRQsR39mdnqqPi8+H7bGXpL1pvmiTV0ArfV0f6zp9uuZLN3kFPNS3d05hrVXXeuYvjbnrmJvpK6DT8/Wxrr09dq/50sX0gEbSLtT6ls4/2Luk9cDXc8+flbgCFlXESgyAHmBGAGYpL0GNer2FlX6kkdf6vPN2Yy6JMUVsCAUtQrJLEAUtTrIAhgqUa74U6VYABS1K2j/hmRY0lzF/whQxM3qAGQGYsSNmxo6YGTtiZovaEZvb3VqW94IoXGktakdsbv5dEZsbXk0sAAEAAADAgCKWEUWsAARgRgBmBGBGAAAAADDgWVBGPAsqAAGYEYAZAZgRAAAAAAAAAAAAAAAAWKZfZIMQFE8x07MAAAAASUVORK5CYII=\"\n          />\n          <span class=\"bmenu-title\">Countries</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            var groupSelected = function (groupName) {
                var searchDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search');
                if (typeof groupName == 'undefined')
                    return;
                if (typeof groups[groupName] == 'undefined')
                    return;
                groups.selectGroup(groups[groupName], orbitManager);
                searchDOM.val('');
                var results = groups[groupName].sats;
                for (var i = 0; i < results.length; i++) {
                    var satId = groups[groupName].sats[i].satId;
                    var scc = satSet.getSat(satId).SCC_NUM;
                    if (i === results.length - 1) {
                        searchDOM.val(searchDOM.val() + scc);
                    }
                    else {
                        searchDOM.val(searchDOM.val() + scc + ',');
                    }
                }
                searchBox.fillResultBox(groups[groupName].sats, satSet);
                objectManager.setSelectedSat(-1); // Clear selected sat
                // Close Menus
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(true);
                uiManager.hideSideMenus();
            };
            var countryMenuClick = function (groupName) {
                if (typeof groups == 'undefined')
                    return;
                switch (groupName) {
                    case 'Canada':
                        if (typeof groups.Canada == 'undefined') {
                            groups.Canada = groups.createGroup('countryRegex', /CA/u);
                        }
                        break;
                    case 'China':
                        if (typeof groups.China == 'undefined') {
                            groups.China = groups.createGroup('countryRegex', /PRC/u);
                        }
                        break;
                    case 'France':
                        if (typeof groups.France == 'undefined') {
                            groups.France = groups.createGroup('countryRegex', /FR/u);
                        }
                        break;
                    case 'India':
                        if (typeof groups.India == 'undefined') {
                            groups.India = groups.createGroup('countryRegex', /IND/u);
                        }
                        break;
                    case 'Israel':
                        if (typeof groups.Israel == 'undefined') {
                            groups.Israel = groups.createGroup('countryRegex', /ISRA/u);
                        }
                        break;
                    case 'Japan':
                        if (typeof groups.Japan == 'undefined') {
                            groups.Japan = groups.createGroup('countryRegex', /JPN/u);
                        }
                        break;
                    case 'Russia':
                        if (typeof groups.Russia == 'undefined') {
                            groups.Russia = groups.createGroup('countryRegex', /CIS/u);
                        }
                        break;
                    case 'UnitedKingdom':
                        if (typeof groups.UnitedKingdom == 'undefined') {
                            groups.UnitedKingdom = groups.createGroup('countryRegex', /UK/u);
                        }
                        break;
                    case 'UnitedStates':
                        if (typeof groups.UnitedStates == 'undefined') {
                            groups.UnitedStates = groups.createGroup('countryRegex', /US/u);
                        }
                        break;
                }
                groupSelected(groupName);
            };
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#country-menu>ul>li').on('click', function () {
                countryMenuClick(jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).data('group'));
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#countries-menu').resizable({
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
        cbName: 'countries',
        cb: function (iconName) {
            if (iconName === 'menu-countries') {
                if (isCountriesMenuOpen) {
                    uiManager.hideSideMenus();
                    isCountriesMenuOpen = false;
                    return;
                }
                else {
                    if (settingsManager.isMobileModeEnabled)
                        uiManager.searchToggle(false);
                    uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#countries-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isCountriesMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-countries').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'countries',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#countries-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-countries').removeClass('bmenu-item-selected');
            isCountriesMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_countries_countries_ts.f1fc127bc811ae969ae9.js.map