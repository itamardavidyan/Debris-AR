"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_recorderManager_recorderManager_ts"],{

/***/ "./src/js/plugins/recorderManager/CanvasRecorder.js":
/*!**********************************************************!*\
  !*** ./src/js/plugins/recorderManager/CanvasRecorder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasRecorder": () => (/* binding */ CanvasRecorder)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// CanvasRecorder.js - smusamashah
// To record canvas effitiently using MediaRecorder
// https://webrtc.github.io/samples/src/content/capture/canvas-record/
class CanvasRecorder {
  constructor(canvas, videoBitsPerSec) {
    var recordedBlobs = [];
    var supportedType = null;
    var mediaRecorder = null;
    var isVideoRecording = false; // var stream = canvas.captureStream();

    var displayMediaOptions = {
      video: {
        cursor: 'always'
      },
      audio: false
    };
    var video = document.createElement('video');
    video.style.display = 'none';

    var startCapture = displayMediaOptions => {
      var captureStream = null;

      if (window.location.protocol === 'https:' || settingsManager.offline) {
        if ('getDisplayMedia' in navigator) {
          return navigator.getDisplayMedia(displayMediaOptions).catch(err => {
            console.warn('Error:' + err);
            return null;
          });
        } else if ('getDisplayMedia' in navigator.mediaDevices) {
          return navigator.mediaDevices.getDisplayMedia(displayMediaOptions).catch(err => {
            console.warn('Error:' + err);
            return null;
          });
        } else {
          console.error('No Recording Support');
          isVideoRecording = false;
          $('#menu-record').removeClass('bmenu-item-selected');
          $('#menu-record').addClass('bmenu-item-disabled');
          M.toast({
            html: "Compatibility Error with Recording"
          });

          if (!$('#menu-record:animated').length) {
            $('#menu-record').effect('shake', {
              distance: 10
            });
          }

          return false;
        }
      } else {
        console.error('No Recording Support in Http! Try Https!');
        isVideoRecording = false;
        $('#menu-record').removeClass('bmenu-item-selected');
        $('#menu-record').addClass('bmenu-item-disabled');
        M.toast({
          html: "Recording Only Available with HTTPS"
        });

        if (!$('#menu-record:animated').length) {
          $('#menu-record').effect('shake', {
            distance: 10
          });
        }

        return false;
      }
    };

    var startRecording = () => {
      var selectCapture = new Promise(function (resolve, reject) {
        resolve(startCapture());
      });
      selectCapture.then(function startRecording(srcObject) {
        if (srcObject == false) return;
        isVideoRecording = true;
        $('#menu-record').addClass('bmenu-item-selected');
        var stream = srcObject;
        video.srcObject = srcObject;
        var types = ['video/webm', 'video/webm,codecs=vp9', 'video/vp8', 'video/webm;codecs=vp8', 'video/webm;codecs=daala', 'video/webm;codecs=h264', 'video/mpeg'];

        for (var i in types) {
          if (MediaRecorder.isTypeSupported(types[i])) {
            supportedType = types[i];
            break;
          }
        }

        if (supportedType == null) {
          console.log('No supported type found for MediaRecorder');
        }

        var options = {
          mimeType: supportedType,
          videoBitsPerSecond: videoBitsPerSec || 10000000 // 10.0Mbps
          // videoBitsPerSecond: videoBitsPerSec || 5000000 // 5.0Mbps
          // videoBitsPerSecond: videoBitsPerSec || 2500000 // 2.5Mbps

        };
        recordedBlobs = [];

        try {
          mediaRecorder = new MediaRecorder(stream, options);
        } catch (e) {
          // alert('MediaRecorder is not supported by this browser.');
          isVideoRecording = false;
          $('#menu-record').removeClass('bmenu-item-selected');
          console.warn('Exception while creating MediaRecorder:', e);
          return;
        }

        console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
        mediaRecorder.onstop = handleStop;
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start(100); // collect 100ms of data blobs

        console.log('MediaRecorder started', mediaRecorder);
      });
    };

    var handleDataAvailable = event => {
      if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
      }
    };

    var handleStop = event => {
      console.log('Recorder stopped: ', event);
      var superBuffer = new Blob(recordedBlobs, {
        type: supportedType
      });
      video.src = window.URL.createObjectURL(superBuffer);
    };

    var stopRecording = () => {
      mediaRecorder.stop();
      console.log('Recorded Blobs: ', recordedBlobs);
      video.controls = true;
    };

    var download = fileName => {
      var name = fileName || 'recording.webm';
      var blob = new Blob(recordedBlobs, {
        type: supportedType
      });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    };

    var checkIfRecording = () => {
      return isVideoRecording;
    };

    var setIsRecording = bool => {
      isVideoRecording = bool;
    };

    this.checkIfRecording = checkIfRecording;
    this.setIsRecording = setIsRecording;
    this.start = startRecording;
    this.stop = stopRecording;
    this.save = download;
  }

}

/***/ }),

/***/ "./src/js/plugins/recorderManager/recorderManager.ts":
/*!***********************************************************!*\
  !*** ./src/js/plugins/recorderManager/recorderManager.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_plugins_recorderManager_CanvasRecorder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/plugins/recorderManager/CanvasRecorder.js */ "./src/js/plugins/recorderManager/CanvasRecorder.js");
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* */
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var recorder;
var init = function () {
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'recorderManager',
        cb: function () {
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div id=\"menu-record\" class=\"bmenu-item\">\n        <img alt=\"video\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO3cPWwbdRjH8e/jvKA2qHuFCgtUFMcXqGOxgFAkBOUlXdkgEhuDB0AIwQILS8vQEAkWhFo21nRBUBBigcZHsZ2Il04FISQWBhApceyHBZh6vTv73ur8PqvvHv/1//n/v0d3OoOIiIiIiIiIiIiIiIjINLOyB5BUfcfnZ6+zMnKeMjjpcBw4AtyW5/f2l+3/OWp03Mc9N8rsOIMqUrPjh/egzS7tERwFSDULFVfpABpb/uQevAccK3sseamVPYAbcreg429hXGSKJx+quALca42Q9x3Wyh5KESq3AhohZzggkw8V64Iaoa/hfHCTQxzjko34cDhDZ/8vfv7hIfsjk++O6HCSdDKTqMwWtHTZ6yNnI+pzg2vUeL530i4VOa68VSKAoOsLowEfAQsRh3R9npV+YL8XOa4iVOIa4AM2gPtu+BlctTkem8bJhwoE0Ah9jeiL7vUZ55nekv1W3IiKVWoAS5e9zk32fYwXui27UuCQChd5hU9732Na5d0Flb4FHXQKoGSVaENvdUHXFxjwhsOLRPyoo7YyBTChIPRVBrzjcNc45yuAMd1/xe8Z7rPuzqlJ6qQOIO+uoCxJu75mxw8PnFeGQ17FJn8apxWQQhD66p6zgXFnVjUVQAJLX/vx4Qzr7jyedW21oTGCjp8dzbBtJJr8L9PWVwAxHF4C5mIO+9Wc5/pNHklbXwFMZmCwvrvPvb2WXcAs9e2bzK4Bed87qlr3ZfA5TrvXsu1J6uginN4v5rzWa9mFLIopgOQGBu8OD/H6Tt3+zKqoAkjC+NSh3W/ad1mXVgAx3FjdbtrFvOqrC4qR5+RDASsgbfdy0J7EaQWUTAGUTAGUTAGUTAGULPcu6KB1NWlpBZRMAZRMAZRMAZRMAZQssy6oak+sbhVaATEWQ386z/oKIIY5m43QP1kM/UQe9RVAEs6j5nSDjp+r7/jtWZZWAMnNObRru3wfbPmzWRVVAOnd4cb5oOOfBVu+OGkxBTAmhxU3vgk6fu7ur/zIuHUUwGTmHNqHZv/dltxTt+IKIIbB28Ag5rCjbpxvhHyRtr4CiNFbtpdrQxYdPk5w+MNp6yuABLoP2o/by3bKjNPAT1nWVgAp9Jq2OQ8nzHkT+DuLmnpTPkbUPa7/XtLDkr2kF1VHK2BM3z5gV/ste8KM0wbXxq2jACbUa9omc9QNzgKjtOdrC4qhP+uYcgpARERERERERERERERERHL0D2BAC2IfonfQAAAAAElFTkSuQmCC\">\n        <span class=\"bmenu-title\">Record Video</span>\n        <div class=\"status-icon\"></div>\n      </div>     \n    "], ["\n      <div id=\"menu-record\" class=\"bmenu-item\">\n        <img alt=\"video\" src=\"\" delayedsrc=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO3cPWwbdRjH8e/jvKA2qHuFCgtUFMcXqGOxgFAkBOUlXdkgEhuDB0AIwQILS8vQEAkWhFo21nRBUBBigcZHsZ2Il04FISQWBhApceyHBZh6vTv73ur8PqvvHv/1//n/v0d3OoOIiIiIiIiIiIiIiIjINLOyB5BUfcfnZ6+zMnKeMjjpcBw4AtyW5/f2l+3/OWp03Mc9N8rsOIMqUrPjh/egzS7tERwFSDULFVfpABpb/uQevAccK3sseamVPYAbcreg429hXGSKJx+quALca42Q9x3Wyh5KESq3AhohZzggkw8V64Iaoa/hfHCTQxzjko34cDhDZ/8vfv7hIfsjk++O6HCSdDKTqMwWtHTZ6yNnI+pzg2vUeL530i4VOa68VSKAoOsLowEfAQsRh3R9npV+YL8XOa4iVOIa4AM2gPtu+BlctTkem8bJhwoE0Ah9jeiL7vUZ55nekv1W3IiKVWoAS5e9zk32fYwXui27UuCQChd5hU9732Na5d0Flb4FHXQKoGSVaENvdUHXFxjwhsOLRPyoo7YyBTChIPRVBrzjcNc45yuAMd1/xe8Z7rPuzqlJ6qQOIO+uoCxJu75mxw8PnFeGQ17FJn8apxWQQhD66p6zgXFnVjUVQAJLX/vx4Qzr7jyedW21oTGCjp8dzbBtJJr8L9PWVwAxHF4C5mIO+9Wc5/pNHklbXwFMZmCwvrvPvb2WXcAs9e2bzK4Bed87qlr3ZfA5TrvXsu1J6uginN4v5rzWa9mFLIopgOQGBu8OD/H6Tt3+zKqoAkjC+NSh3W/ad1mXVgAx3FjdbtrFvOqrC4qR5+RDASsgbfdy0J7EaQWUTAGUTAGUTAGUTAGULPcu6KB1NWlpBZRMAZRMAZRMAZRMAZQssy6oak+sbhVaATEWQ386z/oKIIY5m43QP1kM/UQe9RVAEs6j5nSDjp+r7/jtWZZWAMnNObRru3wfbPmzWRVVAOnd4cb5oOOfBVu+OGkxBTAmhxU3vgk6fu7ur/zIuHUUwGTmHNqHZv/dltxTt+IKIIbB28Ag5rCjbpxvhHyRtr4CiNFbtpdrQxYdPk5w+MNp6yuABLoP2o/by3bKjNPAT1nWVgAp9Jq2OQ8nzHkT+DuLmnpTPkbUPa7/XtLDkr2kF1VHK2BM3z5gV/ste8KM0wbXxq2jACbUa9omc9QNzgKjtOdrC4qhP+uYcgpARERERERERERERERERHL0D2BAC2IfonfQAAAAAElFTkSuQmCC\">\n        <span class=\"bmenu-title\">Record Video</span>\n        <div class=\"status-icon\"></div>\n      </div>     \n    "]))));
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'uiManagerOnReady',
        cbName: 'recorderManager',
        cb: function () {
            try {
                recorder = new _app_js_plugins_recorderManager_CanvasRecorder_js__WEBPACK_IMPORTED_MODULE_1__.CanvasRecorder(document.getElementById('keeptrack-canvas'));
            }
            catch (e) {
                console.log(e);
            }
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_2__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'recordVideo',
        cb: function (iconName) {
            if (iconName === 'menu-record') {
                if (recorder.checkIfRecording()) {
                    recorder.stop();
                    recorder.save('keeptrack.webm');
                    recorder.setIsRecording(false);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-record').removeClass('bmenu-item-selected');
                    return;
                }
                else {
                    try {
                        recorder.start();
                    }
                    catch (e) {
                        M.toast({
                            html: "Compatibility Error with Recording",
                        });
                        recorder.setIsRecording(false);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-record').removeClass('bmenu-item-selected');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-record').addClass('bmenu-item-disabled');
                        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-record:animated').length) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-record').effect('shake', {
                                distance: 10,
                            });
                        }
                    }
                    return;
                }
            }
        },
    });
};
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_recorderManager_recorderManager_ts.82eedd942240a5885572.js.map