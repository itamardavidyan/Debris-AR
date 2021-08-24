"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_launchCalendar_launchCalendar_ts"],{

/***/ "./src/js/plugins/launchCalendar/launchCalendar.ts":
/*!*********************************************************!*\
  !*** ./src/js/plugins/launchCalendar/launchCalendar.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* */
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var init = function () {
    var isLaunchMenuOpen = true;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'launchCalendar',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div id=\"menu-launches\" class=\"bmenu-item\">\n        <img alt=\"calendar2\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABRUlEQVR4nO3cQWoCQRBAUQ25Tna5/wmy80BmFXDhgIPp/u343jIEHfhU05YkpxMAAAAA7+I8882+fq7Xez+/fJ+nPsefFZ7nY9YbcZ8AsadGbWuE380zR5YJiAkQEyAmQEyA2OeIF926FazwwefW3ucZceszATEBYkOOoC3VUbNlhecxATEBYkOOIDuix5mAmAAxAWICxASITd0FvTq7oAMSICZATICYALGp6+i9/usbq5W/oTMBMQFiAsQEiAkQW/oWtPc2Mvr3RzABMQFiSx9Bj9i7Il7h2LllAmICxKYeQavtauyCEKAmQEyAmACxpf9AY/RtZIUPZSYgJkDs5XdBKxwjzzABMQFih9oFrbDb2csExASICRATICZA7FC7oJVvO1tMQEyAmAAxAWICxPy/oJgJiAkQEyAmQEwAAAAAAAA4vl/1Vlb9QHsXDQAAAABJRU5ErkJggg==\">\n        <span class=\"bmenu-title\">Launch Calendar</span>\n        <div class=\"status-icon\"></div>\n      </div> \n    "], ["\n      <div id=\"menu-launches\" class=\"bmenu-item\">\n        <img alt=\"calendar2\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABRUlEQVR4nO3cQWoCQRBAUQ25Tna5/wmy80BmFXDhgIPp/u343jIEHfhU05YkpxMAAAAA7+I8882+fq7Xez+/fJ+nPsefFZ7nY9YbcZ8AsadGbWuE380zR5YJiAkQEyAmQEyA2OeIF926FazwwefW3ucZceszATEBYkOOoC3VUbNlhecxATEBYkOOIDuix5mAmAAxAWICxASITd0FvTq7oAMSICZATICYALGp6+i9/usbq5W/oTMBMQFiAsQEiAkQW/oWtPc2Mvr3RzABMQFiSx9Bj9i7Il7h2LllAmICxKYeQavtauyCEKAmQEyAmACxpf9AY/RtZIUPZSYgJkDs5XdBKxwjzzABMQFih9oFrbDb2csExASICRATICZA7FC7oJVvO1tMQEyAmAAxAWICxPy/oJgJiAkQEyAmQEwAAAAAAAA4vl/1Vlb9QHsXDQAAAABJRU5ErkJggg==\">\n        <span class=\"bmenu-title\">Launch Calendar</span>\n        <div class=\"status-icon\"></div>\n      </div> \n    "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('cbox_closed', function () {
                if (isLaunchMenuOpen) {
                    isLaunchMenuOpen = false;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-launches').removeClass('bmenu-item-selected');
                }
            });
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'launchCalendar',
        cb: function (iconName) {
            if (iconName === 'menu-launches') {
                if (isLaunchMenuOpen) {
                    isLaunchMenuOpen = false;
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isMobileModeEnabled)
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.searchToggle(false);
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isPreventColorboxClose = true;
                    setTimeout(function () {
                        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isPreventColorboxClose = false;
                    }, 2000);
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    try {
                        if (location.protocol === 'https:') {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default().colorbox({
                                href: 'https://space.skyrocket.de/doc_chr/lau2020.htm',
                                iframe: true,
                                width: '80%',
                                height: '80%',
                                fastIframe: false,
                                closeButton: false,
                            });
                        }
                        else {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default().colorbox({
                                href: 'http://space.skyrocket.de/doc_chr/lau2020.htm',
                                iframe: true,
                                width: '80%',
                                height: '80%',
                                fastIframe: false,
                                closeButton: false,
                            });
                        }
                    }
                    catch (error) {
                        console.debug(error);
                    }
                    isLaunchMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-launches').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    // Might be unnecessary
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'launchCalendar',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-launches').removeClass('bmenu-item-selected');
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_launchCalendar_launchCalendar_ts.392b57341229e1ecf1fc.js.map