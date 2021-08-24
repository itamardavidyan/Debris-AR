"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_photoManager_photoManager_ts"],{

/***/ "./src/js/plugins/photoManager/photoManager.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/photoManager/photoManager.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoManager": () => (/* binding */ photoManager),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var photoManager = {
    dscovr: function () {
        var request = new XMLHttpRequest();
        request.open('GET', "https://epic.gsfc.nasa.gov/api/natural", true);
        request.onload = function () {
            photoManager.dscovrLoaded(request);
        };
        request.onerror = function () {
            console.debug('http://epic.gsfc.nasa.gov/ request failed!');
        };
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(-1, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager);
        request.send();
    },
    dscovrLoaded: function (req) {
        if (req.status >= 200 && req.status < 400) {
            // Success!
            var response = JSON.parse(req.response);
            var imageUrl = response[0].image;
            var dateStr = response[0].identifier;
            var year = dateStr.slice(0, 4);
            var month = dateStr.slice(4, 6);
            var day = dateStr.slice(6, 8);
            var hour = dateStr.slice(8, 10);
            var min = dateStr.slice(10, 12);
            var sec = dateStr.slice(12, 14);
            // Hours are in EST? Daylight savings time might make this break
            var dateObj = new Date(Date.UTC(year, month - 1, day, hour - 4, min, sec));
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.camSnap(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.latToPitch(response[0].centroid_coordinates.lat), _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.longToYaw(response[0].centroid_coordinates.lon, dateObj));
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.changeZoom(0.7);
            photoManager.colorbox("https://epic.gsfc.nasa.gov/archive/natural/" + year + "/" + month + "/" + day + "/png/" + imageUrl + ".png");
        }
    },
    meteosat11: function () {
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(40732).id, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager);
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.changeZoom(0.7);
        photoManager.colorbox("https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSG_RGBNatColour_LowResolution.jpg");
    },
    meteosat8: function () {
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(27509).id, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager);
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.changeZoom(0.7);
        photoManager.colorbox("https://eumetview.eumetsat.int/static-images/latestImages/EUMETSAT_MSGIODC_RGBNatColour_LowResolution.jpg");
    },
    goes1: function () {
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(41866).id, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager);
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.changeZoom(0.7);
        photoManager.colorbox("https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/latest.jpg");
    },
    himawari8: function () {
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.drawManager.selectSatManager.selectSat(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.satSet.getSatFromObjNum(40267).id, _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager);
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.cameraManager.changeZoom(0.7);
        var propTime = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.timeManager.propTimeVar; // Propagation time minus 30 minutes so that the pictures have time to become available
        if (propTime < Date.now()) {
            propTime = new Date(propTime - 1000 * 60 * 30);
        }
        else {
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.toast("Can't load pictures from the future. Loading most recent photos.", 'caution');
            propTime = new Date(Date.now() - 1000 * 60 * 30);
        }
        var year = propTime.getUTCFullYear();
        var mon = (propTime.getUTCMonth() + 1).toString().padStart(2, '0'); // NOTE:, this function requires months in range 1-12.
        var day = propTime.getUTCDate().toString().padStart(2, '0');
        var hour = propTime.getUTCHours().toString().padStart(2, '0');
        var min = (Math.floor(propTime.getUTCMinutes() / 10) * 10).toString().padStart(2, '0');
        var imgWidth, imgHeight;
        if (window.innerWidth < window.innerHeight) {
            imgWidth = window.innerWidth * 0.8;
            imgHeight = imgWidth;
        }
        else {
            imgHeight = window.innerHeight * 0.8;
            imgWidth = imgHeight;
        }
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isPreventColorboxClose = true;
        setTimeout(function () {
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isPreventColorboxClose = false;
        }, 2000);
        jquery__WEBPACK_IMPORTED_MODULE_0___default().colorbox({
            href: "https://himawari8.nict.go.jp/img/D531106/1d/550/" + year + "/" + mon + "/" + day + "/" + hour + min + "00_0_0.png",
            photo: true,
            width: imgWidth,
            height: imgHeight,
            scalePhotos: true,
            fastIframe: false,
            closeButton: false,
            onComplete: function () {
                var cbImg = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cboxLoadedContent img')[0];
                cbImg.style.width = '100%';
                cbImg.style.height = '100%';
                cbImg.style.marginTop = '';
            },
        });
    },
    colorbox: function (url) {
        _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isPreventColorboxClose = true;
        setTimeout(function () {
            _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.settingsManager.isPreventColorboxClose = false;
        }, 2000);
        jquery__WEBPACK_IMPORTED_MODULE_0___default().colorbox({
            href: url,
            photo: true,
            scalePhotos: true,
            height: '80%',
            fastIframe: false,
            closeButton: false,
        });
    },
};
var init = function () {
    // Register the program with the API
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.photoManager = photoManager;
    var isSatPhotoMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'photoManager',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"sat-photo-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"sat-photo-menu-content\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Satellites Imagery List</h5>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.meteosat8()\">MeteoSat 8</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.meteosat11()\">MeteoSat 11</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.himawari8()\">Himawari 8</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.dscovr()\">DSCOVR</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.goes1()\">GOES 1</li>\n            </ul>\n          </div>\n        </div>\n      "], ["\n        <div id=\"sat-photo-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"sat-photo-menu-content\" class=\"side-menu\">\n            <ul>\n              <h5 class=\"center-align\">Satellites Imagery List</h5>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.meteosat8()\">MeteoSat 8</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.meteosat11()\">MeteoSat 11</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.himawari8()\">Himawari 8</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.dscovr()\">DSCOVR</li>\n              <li class=\"link satPhotoRow\" onmouseup=\"keepTrackApi.programs.photoManager.goes1()\">GOES 1</li>\n            </ul>\n          </div>\n        </div>\n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-sat-photo\" class=\"bmenu-item\">\n          <img alt=\"photographs\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAALpElEQVR4nO2deZAcZRmHn7ezWYKCJ4ccKsWhhJ2ZDTszgUCEYAwSkKs0qAVyCkaUcIiAZVGJhYpaxSE3xSFgWUAwhQEkoAQUkECmZ5PMzBYW4EVxiSAgWIHsTv/8Y2dld9M9293TM5vRear2j+3v6+979/3Nd7/fLHTo0KFDhw4dOnTo0KFDhw4dmsAnH9WWk23DpojTikoyrvq6p/FMqqCTWlFfO9F0AXoK2lfwILCNGdelXJ3W7DrbiaYKkFqtfRxjBfD+2iMzuCzt6txm1ttOWLMKTvdrFh73Ae/zSZbgjErOLmtW/e1CUwTIFLW3xP34O38ECU6v5OzyZtjQLiQuQMZVn+AB4IMhsv/fi5CoADXn/xb4UITXhFhUztsVSdrSLiQmQG9Be3rGA0Rz/gjCOK2ctSuTsqddSGQWlC4q6xkrCXZ+FTgf+EdAuiEuT7lamIQ97UTDAvSs1gyGB9ygPr8qcUI5Z98H9gNeCshnBldlXJ3aqE3tRENdUE+/eh2PlcCHA7JUJU6o5O3nIw/SrnYHHgI+EvCODL5ZytlVjdjWLsRuAT396jWPB4jgfIByzv4IHECdliC4IuPq63FtayditYBUURnESoOtArL4On80IVvCN0o5uzqOje1CZAHSrtLASmDrgCxVjOPKWftFAmV5EidX8nZjVDvbhUhdUKqo6cBvqON8iRPCOB+gnLMy9Qdmx4zr0wV9LYqd7URoAXoGtIWJBwnuMjCxuF6340dtTDiQelNU46p0UcdHKbddCC3AQI+9ZcYpwDtBeWScXutWIhGmJSBuyLg6LmrZmzrRx4CCDsZYBkwLyPIPYG7NqdHKDjcmHB+1lW3KxJsFuTrQYDnNEWGi2VHVxImlvN0StexNkdgLsXRB8zHuBDYLyNLMllCVcfzgepZ3T2OuYI4jPiqHj+AxZPAixnMSK7cY5Her9rH1UW1oFQ2thFOuDjFYxiSJUPvpnqCo9cBSwQWVnP0pqh3NpuHd0EkWIQqDguu1OecM9NhbCZSXCIlsR2eKOlTilwR/GjcVEQD+aFUOLu1lf0movIZIZDu6lLW7TSwANgRk2RpY2cAU9UeN2DeO3TWFR6f36+MJlhmbRE/E0gUdjrGUBFtCpqDDZNxRp8y4VNYPse8ze9u/Ei43EomGpZTzthz4IjAYkCVSSwjp/Irg22bMGnLYCZhuxnyDy4DX6ryXmtbFhWHsaCZNiYpIFXWkiduBqQFZJmwJIZz/Nsaich83YOb5ZZixRh8YqvJDg6CtbQ9jZjlrxSA7mk1TArMqWbtTxpeI2RJCOH+9A/PKWbsuyPkAa/e01ys5O1WwKCCLIzg76P1W0LTALIBMQZ+XcSsRWkKYT74ZR5aydl8UW9IFXYHxDZ+kwW7YvpizV6KUlxRNDU0s5W2ZiS8TsiWkC5qv+oP4BhkLojofoNv4LvCqT9LUQTEvanlJ0fTg3FLelsk4BhgKyDIiwlkYvyJ4Qfe2GYdXsnZPHDuKOXsDuNk30dgvTplJ0JLw9ErWlso4mvoiXETC3c54BPcHPN+lkXIboSUCwLAIJr7C8P5NFBJxPoCMPwckbdNo2XFpmQAApbzdFlGExJwP4Jn/WGSgJMqPQ0sFACjl7VbgWCYWIVHnA3R7fNTvucSkrYZbLgAA4jWCxwNoYLZTj6ox1++5GU8nWU8UWi5ApqDDmjnbCSLraqqJYwKS23sl3LtaPemCzkmirGYxCKcCu/qlOVNY0WJz3q270QIyj2tHz+E+jB9nCloyUf5S3u6aYOt6msSdmaIOatS2EXpdzRb8JCjd8zgiqbqi0pAAcx5SF13cBuwIIGNx2tWEe/elvN2FOILgEJdpEsszRR3aiH1QC52Hu6izoypxSdrVeY3WFYeGBHh1S84X7Dvu8blhWkI5bytMHEVwS+iWWNpIS0it1j4MB5OFuS51YaaoM+LWFZfYm3E9Re3qiAr+g2nVxIxS3ioTldOszbdeV7M9uBeIdEPfjDNLWbs0yjuNELsFOOJCgmYy4owwzofmjAnpfu3nwQoiOh+Gu6NWtoRYAsxYo92AIwOSl0a9cJekCKmC5uBxL7BFQJYNwLcIjkVtqQixBKhWWQhM8Ul624b41viHvU/oExOVmYQImaI+bcavgfcGZNlgYkE5ZxcDc9kERIgugOQwfO67EQZXlva250Y/61mtGd4U+ps9O0qv1v4Sy4H3BLy7AXFUKW93QaiA4JbMjiILkFpDH7CDT9IQU8fOtbOupjoOdzD8iWza7Cjl6kAcVlCn2zGxoBY08G5dE4fGQ5NnR5EFMC/g8EI8Vuq1l0c/GoSTGbX6lLE46cVapqiDaoHCmwfk3WBiwcgnfzy1ljBp3VGcMaDP76GMuzd6xsZnsLXF2oTflhJWBIk7CY7Sruv8ESZThDgC+O6nSKwa/Xu6oJ2BPXwrNdaGqSiMCDTo/BEmS4ToXVBA3L4DL47Lt2dAEY+sy5rv0aAfIUQI4jthnT/CZIgQWQAFDHTdNnY2IcdfKINHo9YZU4TzGohFbZkIk3MgE4MYIjQaENwSEeJ0Qb6x9e/AdmPyef7zaw8+FbXOEf4XRYjTBfk6dso4AfDo98tnMLuRHc4AETYQfMa8SYsQYyXsf34qY9bo32sXIAZ884pb/URIF3RwjCnqBhMLZBxPG4oQ56sKzmI4iGqcFTxcztv+ox9lXH1dEPitJ4JHHXhEw19V86mRswUT3yvlbclEtmQKOgxqWxhAqqhjTNyE/z4VNPmmTpyt7OgCFJVFuD5JQzaVHUavhrOupr4DAwa7Ra0nrAjjyRR0rIyfEdy6NykRIndB5T7WAM/5JHVpkDHdRzFng/I4Cvh31HrCbluMp5S3WwxOBILC1hvqjkz8tF4eiSXTXW1XL89ooo8BZp7B7QGpp6ZWa0zw08BMW1u7KxBHhLPDbGWPp5SzmzFOImER0kUdLeN7dbL80/OY92TOXqyTZwzxzgOMa/Af8KaZw8XjH1aydo/nMVtECoB6ynPYd91e9lQcG8tZu0niZBISIV3U0YibqTO+yDhgYKYVotgZS4CBrD3D8N1gP76QcrXRjZSBmbZ2M+hBLATqHVeWMb7WDamBPlsXx74RKnm7MQkRJnK+4BUZn6lkrRTVxtiH8ilXu9iwI/02wzwTR5fydlvQ+zPWaKdqlRmIHXEQ4vkhhzVP9tnfgt7JFJQKe9Y85j1XXxVcS4yBOcQn/1XPYW7cD0tjX1VQ1GITSwKSPcGZSX0/dKaoMyQuMnFBnNlRuqiTEdcS/DdvJEII5//T85g7MNNC7e760ZAAcx5S1ytb8pDB7KA8MpZJnDWQs2fj1DG9Xx/v8riEUUEAcaeo6aJOQVxDCBFCOP81g8+Ucua74g9Lw5f0etdqB2+IVeAf+l3jHcTVqvKjyt729zDlph7XtnTxHYOF+IS/xBUh5WqhDS8O64lwGbCEOs7HmJfE9dZEbkn29GsPx+Nhgr/CcoSqYJWJu81hlePw0pQqzw9OxRyP7atiOzxmCT5nMItgBwwjzi3nLTDmM4jaCv1K4v39r8thXqXP/BajkUnsmmqqqOkm7gM+llSZE/CCjPlxZh4Qakzw4w2Dz5Zy9kScOv1I7DygkrUnnS72UYwDl8iIh7sc8nGdDzB8yZvTCH89KXHnQ8IHMutm2PNbvckBwGLg7STLrrEeOH/3v/DpNX32QqOFlbN2JWIRE4vwLzMOStr50Mx/YVLQznL4QW3buH5fPjFV4PYpU/ju2j3tr41bN5aUq0UGl+LvjzflcVBlpj2WdL0EVJgoKVe7OLBQw9F09WZKfjwrcbvBNeW8BV0xTYSMq9MFlzDWJ296Yv5A3v7QrHqbLsB/kZxel14Z+3nQZ2I3jG159z8svYHxEuJpgzVVj98P5FmHWcuukKZcnWbwU4b98oYnDmmm8zv4kCrqmLSrlzOu9ppsW/5v6fzbxQ4dOnTo0KFDhw4dOnTo0KFZ/AePo2zyCcUCXAAAAABJRU5ErkJggg==\">\n          <span class=\"bmenu-title\">Satellite Photos</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-sat-photo\" class=\"bmenu-item\">\n          <img alt=\"photographs\" src=\"\" delayedsrc=\"data:image/png;base64,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\">\n          <span class=\"bmenu-title\">Satellite Photos</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'photoManager',
        cb: function (iconName) {
            if (iconName === 'menu-sat-photo') {
                if (isSatPhotoMenuOpen) {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    isSatPhotoMenuOpen = false;
                    return;
                }
                else {
                    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs.uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sat-photo-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isSatPhotoMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-photo').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'photoManager',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sat-photo-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-sat-photo').removeClass('bmenu-item-selected');
            isSatPhotoMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_photoManager_photoManager_ts.1cfdad86a8bcc6122edf.js.map