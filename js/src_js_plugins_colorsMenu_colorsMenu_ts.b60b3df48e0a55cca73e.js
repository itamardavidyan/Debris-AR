"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_colorsMenu_colorsMenu_ts"],{

/***/ "./src/js/plugins/colorsMenu/colorsMenu.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/colorsMenu/colorsMenu.ts ***!
  \*************************************************/
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
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, ColorScheme = _a.ColorScheme, satSet = _a.satSet, objectManager = _a.objectManager, uiManager = _a.uiManager, settingsManager = _a.settingsManager;
    var isColorSchemeMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'colorsMenu',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"color-scheme-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"colors-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Color Schemes</h5>\n              <li class=\"divider\"></li>\n              <li class=\"menu-selectable\" data-color=\"default\">Object Type</li>\n              <li class=\"menu-selectable\" data-color=\"sunlight\">Sunlight</li>\n              <li class=\"menu-selectable\" data-color=\"velocity\">Velocity</li>\n              <li class=\"menu-selectable\" data-color=\"rcs\">Radar Cross Section</li>\n              <li class=\"menu-selectable\" data-color=\"smallsats\">Small Satellites</li>\n              <li class=\"menu-selectable\" data-color=\"countries\">Countries</li>\n              <li class=\"menu-selectable\" data-color=\"near-earth\">Near Earth</li>\n              <li class=\"menu-selectable\" data-color=\"deep-space\">Deep Space</li>\n              <li class=\"menu-selectable\" data-color=\"elset-age\">Elset Age</li>\n              <li class=\"menu-selectable\" data-color=\"lost-objects\">Lost Objects</li>\n            </ul>\n          </div>\n        </div>\n      "], ["\n        <div id=\"color-scheme-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"colors-menu\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Color Schemes</h5>\n              <li class=\"divider\"></li>\n              <li class=\"menu-selectable\" data-color=\"default\">Object Type</li>\n              <li class=\"menu-selectable\" data-color=\"sunlight\">Sunlight</li>\n              <li class=\"menu-selectable\" data-color=\"velocity\">Velocity</li>\n              <li class=\"menu-selectable\" data-color=\"rcs\">Radar Cross Section</li>\n              <li class=\"menu-selectable\" data-color=\"smallsats\">Small Satellites</li>\n              <li class=\"menu-selectable\" data-color=\"countries\">Countries</li>\n              <li class=\"menu-selectable\" data-color=\"near-earth\">Near Earth</li>\n              <li class=\"menu-selectable\" data-color=\"deep-space\">Deep Space</li>\n              <li class=\"menu-selectable\" data-color=\"elset-age\">Elset Age</li>\n              <li class=\"menu-selectable\" data-color=\"lost-objects\">Lost Objects</li>\n            </ul>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-color-scheme\" class=\"bmenu-item\">\n          <img\n            alt=\"colors\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Color Schemes</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-color-scheme\" class=\"bmenu-item\">\n          <img\n            alt=\"colors\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Color Schemes</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#colors-menu>ul>li').on('click', function () {
                objectManager.setSelectedSat(-1); // clear selected sat
                var colorName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('color');
                if (colorName !== 'sunlight') {
                    satSet.satCruncher.postMessage({
                        isSunlightView: false,
                    });
                }
                switch (colorName) {
                    case 'default':
                        uiManager.legendMenuChange('default');
                        satSet.setColorScheme(ColorScheme.default, true);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                    case 'velocity':
                        uiManager.legendMenuChange('velocity');
                        satSet.setColorScheme(ColorScheme.velocity);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                    case 'sunlight':
                        uiManager.legendMenuChange('sunlight');
                        satSet.setColorScheme(ColorScheme.sunlight, true);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        settingsManager.isForceColorScheme = true;
                        satSet.satCruncher.postMessage({
                            isSunlightView: true,
                        });
                        break;
                    case 'near-earth':
                        uiManager.legendMenuChange('near');
                        satSet.setColorScheme(ColorScheme.leo);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                    case 'deep-space':
                        uiManager.legendMenuChange('deep');
                        satSet.setColorScheme(ColorScheme.geo);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                    case 'elset-age':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                            uiManager.legendMenuChange('ageOfElset');
                            satSet.setColorScheme(ColorScheme.ageOfElset);
                            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                        });
                        break;
                    case 'lost-objects':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val('');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, function () {
                            settingsManager.lostSatStr = '';
                            satSet.setColorScheme(ColorScheme.lostobjects);
                            document.getElementById('search').value = settingsManager.lostSatStr;
                            uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                            uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val());
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
                        });
                        break;
                    case 'rcs':
                        uiManager.legendMenuChange('rcs');
                        satSet.setColorScheme(ColorScheme.rcs);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                    case 'smallsats':
                        uiManager.legendMenuChange('small');
                        satSet.setColorScheme(ColorScheme.smallsats);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                    case 'countries':
                        uiManager.legendMenuChange('countries');
                        satSet.setColorScheme(ColorScheme.countries);
                        uiManager.colorSchemeChangeAlert(settingsManager.currentColorScheme);
                        break;
                }
                // Close Open Menus
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#color-scheme-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
                },
                maxWidth: 450,
                minWidth: 280,
            });
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'rightBtnMenuAdd',
        cbName: 'photo',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#right-btn-menu-ul').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["   \n        <li class=\"rmb-menu-item\" id=\"colors-rmb\"><a href=\"#\">Colors &#x27A4;</a></li>\n      "], ["   \n        <li class=\"rmb-menu-item\" id=\"colors-rmb\"><a href=\"#\">Colors &#x27A4;</a></li>\n      "]))));
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'colorsMenu',
        cb: function (iconName) {
            if (iconName === 'menu-color-scheme') {
                if (isColorSchemeMenuOpen) {
                    uiManager.hideSideMenus();
                    isColorSchemeMenuOpen = false;
                    return;
                }
                else {
                    if (settingsManager.isMobileModeEnabled)
                        uiManager.searchToggle(false);
                    uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#color-scheme-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isColorSchemeMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-color-scheme').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'colorsMenu',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#color-scheme-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-color-scheme').removeClass('bmenu-item-selected');
            isColorSchemeMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_colorsMenu_colorsMenu_ts.b60b3df48e0a55cca73e.js.map