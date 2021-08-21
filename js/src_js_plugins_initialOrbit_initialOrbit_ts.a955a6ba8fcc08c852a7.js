"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_initialOrbit_initialOrbit_ts"],{

/***/ "./src/js/plugins/initialOrbit/omManager.js":
/*!**************************************************!*\
  !*** ./src/js/plugins/initialOrbit/omManager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "omManager": () => (/* binding */ omManager)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/* /////////////////////////////////////////////////////////////////////////////

omManager.js Orbit Math Manager handles the conversion of state vector data,
keplerian elements, and two line element sets as well as initial orbit fitting
http://keeptrack.space

Copyright (C) 2016-2021 Theodore Kruczek
Copyright (C) 2020 Heather Kruczek

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

///////////////////////////////////////////////////////////////////////////// */
// sv - State Vectors
// [unixTime, x, y, z, xDot, yDot, zDot]
 // Constants

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var RADIUS_OF_EARTH = 6371000; // Radius of Earth in meters

var G = 6.6725985e-11;
var MILLISECONDS_PER_DAY = 1.15741e-8;
var MINUTES_PER_DAY = 1440;
var PI = Math.PI;
var TAU = 2 * PI;
var RAD2DEG = 360 / TAU; // Make Orbit Math Manager

var om = {}; // Public Functions

om.sat2sv = (sat, timeManager) => [timeManager.propTime(), sat.position.x, sat.position.y, sat.position.z, sat.velocity.x, sat.velocity.y, sat.velocity.z];

om.sat2kp = (sat, timeManager) => {
  var sv = om.sat2sv(sat, timeManager);
  return om.sv2kp(sv, timeManager);
};

om.sat2tle = (sat, timeManager) => {
  var kp = om.sat2kp(sat, timeManager);
  return om.kp2tle(kp, null, timeManager);
};

om.sv2kp = sv => {
  var kepler = _sv2kp(1, 1, sv, 'kg', 'M_Earth', [0, 0, 0, 0, 0, 0], 'km', 'm');

  return kepler;
};

om.kp2tle = (kp, epoch, timeManager) => {
  var inc = kp.inclination;
  var raan = kp.raan;
  var ecc = kp.eccentricity;
  var argpe = kp.argPe;
  var meana = kp.mo;
  var meanmo = 1440 / kp.period;
  epoch = typeof epoch == 'undefined' || epoch == null ? new Date(timeManager.propTime()) : epoch;
  var yy = epoch.getUTCFullYear() - 2000; // This won't work before year 2000, but that shouldn't matter

  var epochd = _dayOfYear(epoch.getUTCMonth(), epoch.getUTCDate(), epoch.getUTCHours(), epoch.getUTCMinutes(), epoch.getUTCSeconds());

  epochd = epochd * 1 + epoch.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
  var tle1 = "1 80000U 58001A   ".concat(yy).concat(_pad0(parseFloat(epochd).toFixed(8), 12), " 0.00000000 +00000-0 +00000-0 0 99990");
  var tle2 = "2 80000 ".concat(_pad0(inc.toFixed(4), 8), " ").concat(_pad0(raan.toFixed(4), 8), " ").concat(ecc.toPrecision(7).substr(2, 7), " ").concat(_pad0(parseFloat(argpe).toFixed(4), 8), " ").concat(_pad0(meana.toFixed(4), 8), " ").concat(_pad0(meanmo.toFixed(8), 11), "000010");
  return {
    tle1: tle1,
    tle2: tle2
  };
}; // State Vectors to Keplerian Min/Max/Avg


om.svs2kps = svs => {
  var kpList = [];

  for (var i = 0; i < svs.length; i++) {
    kpList.push(om.sv2kp(svs[i]));
  } // Results


  var r = {};
  {
    r.max = {};
    r.max.apogee = 0;
    r.max.argPe = 0;
    r.max.eccentricity = 0;
    r.max.inclination = 0;
    r.max.mo = 0;
    r.max.perigee = 0;
    r.max.period = 0;
    r.max.raan = 0;
    r.max.semiMajorAxis = 0;
    r.max.ta = 0;
    r.max.tl = 0;
    r.min = {};
    r.min.apogee = 1000000;
    r.min.argPe = 1000000;
    r.min.eccentricity = 1000000;
    r.min.inclination = 1000000;
    r.min.mo = 1000000;
    r.min.perigee = 1000000;
    r.min.period = 1000000;
    r.min.raan = 1000000;
    r.min.semiMajorAxis = 1000000;
    r.min.ta = 1000000;
    r.min.tl = 1000000;
    r.avg = {};
    r.avg.apogee = 0;
    r.avg.argPe = 0;
    r.avg.eccentricity = 0;
    r.avg.inclination = 0;
    r.avg.mo = 0;
    r.avg.perigee = 0;
    r.avg.period = 0;
    r.avg.raan = 0;
    r.avg.semiMajorAxis = 0;
    r.avg.ta = 0;
    r.avg.tl = 0;
  }

  for (var _i = 0; _i < kpList.length; _i++) {
    if (kpList[_i].apogee < r.min.apogee) r.min.apogee = kpList[_i].apogee;
    if (kpList[_i].apogee > r.max.apogee) r.max.apogee = kpList[_i].apogee;
    r.avg.apogee += kpList[_i].apogee;
    if (kpList[_i].argPe < r.min.argPe) r.min.argPe = kpList[_i].argPe;
    if (kpList[_i].argPe > r.max.argPe) r.max.argPe = kpList[_i].argPe;
    r.avg.argPe += kpList[_i].argPe;
    if (kpList[_i].eccentricity < r.min.eccentricity) r.min.eccentricity = kpList[_i].eccentricity;
    if (kpList[_i].eccentricity > r.max.eccentricity) r.max.eccentricity = kpList[_i].eccentricity;
    r.avg.eccentricity += kpList[_i].eccentricity;
    if (kpList[_i].inclination < r.min.inclination) r.min.inclination = kpList[_i].inclination;
    if (kpList[_i].inclination > r.max.inclination) r.max.inclination = kpList[_i].inclination;
    r.avg.inclination += kpList[_i].inclination;
    if (kpList[_i].mo < r.min.mo) r.min.mo = kpList[_i].mo;
    if (kpList[_i].mo > r.max.mo) r.max.mo = kpList[_i].mo;
    r.avg.mo += kpList[_i].mo;
    if (kpList[_i].perigee < r.min.perigee) r.min.perigee = kpList[_i].perigee;
    if (kpList[_i].perigee > r.max.perigee) r.max.perigee = kpList[_i].perigee;
    r.avg.perigee += kpList[_i].perigee;
    if (kpList[_i].period < r.min.period) r.min.period = kpList[_i].period;
    if (kpList[_i].period > r.max.period) r.max.period = kpList[_i].period;
    r.avg.period += kpList[_i].period;
    if (kpList[_i].raan < r.min.raan) r.min.raan = kpList[_i].raan;
    if (kpList[_i].raan > r.max.raan) r.max.raan = kpList[_i].raan;
    r.avg.raan += kpList[_i].raan;
    if (kpList[_i].semiMajorAxis < r.min.semiMajorAxis) r.min.semiMajorAxis = kpList[_i].semiMajorAxis;
    if (kpList[_i].semiMajorAxis > r.max.semiMajorAxis) r.max.semiMajorAxis = kpList[_i].semiMajorAxis;
    r.avg.semiMajorAxis += kpList[_i].semiMajorAxis;
    if (kpList[_i].ta < r.min.ta) r.min.ta = kpList[_i].ta;
    if (kpList[_i].ta > r.max.ta) r.max.ta = kpList[_i].ta;
    r.avg.ta += kpList[_i].ta;
    if (kpList[_i].tl < r.min.tl) r.min.tl = kpList[_i].tl;
    if (kpList[_i].tl > r.max.tl) r.max.tl = kpList[_i].tl;
    r.avg.tl += kpList[_i].tl;
  }

  r.avg.apogee /= kpList.length;
  r.avg.argPe /= kpList.length;
  r.avg.eccentricity /= kpList.length;
  r.avg.inclination /= kpList.length;
  r.avg.mo /= kpList.length;
  r.avg.perigee /= kpList.length;
  r.avg.period /= kpList.length;
  r.avg.raan /= kpList.length;
  r.avg.semiMajorAxis /= kpList.length;
  r.avg.ta /= kpList.length;
  r.avg.tl /= kpList.length;
  return r;
};

om.iod = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (svs, timeManager, satellite) {
    var kps = om.svs2kps(svs); // Sort SVs by Time

    svs.sort(function (a, b) {
      return a[0].value - b[0].value;
    }); // Change Time to Relative to the First Observation

    var epoch = new Date(svs[0][0]);
    return om.fitTles(epoch, svs, kps, timeManager, satellite);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

om.fitTles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (epoch, svs, kps, timeManager, satellite) {
    om.debug.closestApproach = 0;
    var STEPS = settingsManager.fitTleSteps; // const incI = (kps.max.inclination - kps.min.inclination) / STEPS;

    var raanI = (kps.max.raan - kps.min.raan) / STEPS; // const eccI = (kps.max.eccentricity - kps.min.eccentricity) / STEPS;

    var argpeI = (kps.max.argPe - kps.min.argPe) / STEPS;
    var meanaI = (kps.max.mo - kps.min.mo) / STEPS; // const periodI = (kps.max.period - kps.min.period) / STEPS;

    var bestIndicies = [10000000]; // Starts Really Large To Ensure First One is Better

    for (var r = -STEPS / 2; r < STEPS / 2; r++) {
      for (var a = -STEPS; a < STEPS; a++) {
        for (var m = -STEPS * 2; m < STEPS * 2; m++) {
          var _kp = {};
          _kp.inclination = kps.avg.inclination;
          _kp.raan = kps.avg.raan + raanI * r;
          _kp.eccentricity = kps.avg.eccentricity;
          _kp.argPe = kps.avg.argPe + argpeI * a;
          _kp.mo = kps.avg.mo + meanaI * m / 2;
          _kp.period = kps.avg.period;
          var tles = om.kp2tle(_kp, epoch, timeManager);
          var xError = 0;
          var yError = 0;
          var zError = 0;
          var posErrorAvg = 0;

          for (var svI = 0; svI < svs.length; svI++) {
            var eci = void 0;

            try {
              eci = _propagate(tles.tle1, tles.tle2, new Date(epoch + (svs[svI][0] - svs[0][0])), satellite);
              xError += Math.abs(eci.position.x - svs[svI][1]);
              yError += Math.abs(eci.position.y - svs[svI][2]);
              zError += Math.abs(eci.position.z - svs[svI][3]);
              posErrorAvg += Math.sqrt(xError ** 2 + yError ** 2 + zError ** 2);
            } catch (error) {// console.warn(eci);
            }
          }

          posErrorAvg /= svs.length; // console.log(posErrorAvg);
          // TODO: Better Decision on Best Indicies

          if (posErrorAvg < bestIndicies[0]) {
            bestIndicies = [posErrorAvg, r, a, m];
          }
        }
      }
    } // debug


    console.log("Closest Approach: ".concat(bestIndicies[0]));
    om.debug.closestApproach += bestIndicies[0]; // Calculate Best TLE

    var kp = {};
    kp.inclination = kps.avg.inclination;
    kp.raan = kps.avg.raan + raanI * bestIndicies[1];
    kp.eccentricity = kps.avg.eccentricity;
    kp.argPe = kps.avg.argPe + argpeI * bestIndicies[2];
    kp.mo = kps.avg.mo + meanaI * bestIndicies[3];
    kp.period = kps.avg.period;
    return om.kp2tle(kp, epoch);
  });

  return function (_x4, _x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

om.svs2analyst = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (svs, satSet, timeManager, satellite) {
    om.iod(svs, timeManager, satellite).then(tles => {
      satSet.insertNewAnalystSatellite(tles.tle1, tles.tle2, satSet.getIdFromObjNum(80000));
    });
  });

  return function (_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

om.testIod = satSet => {
  fetch('/metObs.json').then(response => response.json()).then(metObs => {
    for (var i = 0; i < metObs.length; i++) {
      var svs = metObs[i];
      om.svs2analyst(svs, satSet);
    }

    om.debug.closestApproach /= metObs.length;
    console.log("Average Approach: ".concat(om.debug.closestApproach));
  });
};

om.debug = {};
om.debug.closestApproach = 0;

var _propagate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (tle1, tle2, epoch, satellite) {
    var satrec = satellite.twoline2satrec(tle1, tle2); // perform and store sat init calcs

    var j = _jday(epoch.getUTCFullYear(), epoch.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
    epoch.getUTCDate(), epoch.getUTCHours(), epoch.getUTCMinutes(), epoch.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


    j += epoch.getUTCMilliseconds() * MILLISECONDS_PER_DAY; // let gmst = satellite.gstime(j);

    var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
    var eci = satellite.sgp4(satrec, m);
    return eci;
  });

  return function _propagate(_x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();

var _jday = (year, mon, day, hr, minute, sec) => {
  'use strict';

  return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
  ;
}; // Converts State Vectors to Keplerian Elements


var _sv2kp = (massPrimary, massSecondary, vector, massPrimaryU, massSecondaryU, vectorU, outputU, outputU2) => {
  var rx = vector[1] * 1000;
  var ry = vector[2] * 1000;
  var rz = vector[3] * 1000;
  var vx = vector[4] * 1000;
  var vy = vector[5] * 1000;
  var vz = vector[6] * 1000; // let rxu,
  //   ryu,
  //   rzu = 'm';
  // let vxu,
  //   vyu,
  //   vzu = 'm/s';

  if (!(massPrimaryU == 'kg' || typeof massPrimaryU == 'undefined')) {// if (massPrimaryU == 'g') {
    //   massPrimary = massPrimary / 1000;
    // }
    // if (massPrimaryU == 'M_Sun') {
    //   massPrimary = massPrimary * 1.98894729428839e30;
    // }
    // if (massPrimaryU == 'M_Mercury') {
    //   massPrimary = massPrimary * 3.30192458710471e23;
    // }
    // if (massPrimaryU == 'M_Venus') {
    //   massPrimary = massPrimary * 4.86862144253118e24;
    // }
    // if (massPrimaryU == 'M_Earth') {
    //   massPrimary = massPrimary * 5.97378250603408e24;
    // }
    // if (massPrimaryU == 'M_Mars') {
    //   massPrimary = massPrimary * 6.41863349674674e23;
    // }
    // if (massPrimaryU == 'M_Jupiter') {
    //   massPrimary = massPrimary * 1.89863768365072e27;
    // }
    // if (massPrimaryU == 'M_Saturn') {
    //   massPrimary = massPrimary * 5.68470940139966e26;
    // }
    // if (massPrimaryU == 'M_Uranus') {
    //   massPrimary = massPrimary * 8.68333186484441e25;
    // }
    // if (massPrimaryU == 'M_Neptune') {
    //   massPrimary = massPrimary * 1.02431564713932e26;
    // }
    // if (massPrimaryU == 'M_Pluto') {
    //   massPrimary = massPrimary * 1.30861680530754e22;
    // }
    // if (massPrimaryU == 'M_Moon') {
    //   massPrimary = massPrimary * 7.34777534869879e22;
    // }
    // if (massPrimaryU == 'M_Phobos') {
    //   massPrimary = massPrimary * 1.03409569809204e16;
    // }
    // if (massPrimaryU == 'M_Deimos') {
    //   massPrimary = massPrimary * 1.79842730102965e15;
    // }
    // if (massPrimaryU == 'M_Io') {
    //   massPrimary = massPrimary * 8.9320629865446e22;
    // }
    // if (massPrimaryU == 'M_Europa') {
    //   massPrimary = massPrimary * 4.79990319196655e22;
    // }
    // if (massPrimaryU == 'M_Ganymede') {
    //   massPrimary = massPrimary * 1.48187846087315e23;
    // }
    // if (massPrimaryU == 'M_Callisto') {
    //   massPrimary = massPrimary * 1.07595283170753e23;
    // }
    // if (massPrimaryU == 'M_Amalthea') {
    //   massPrimary = massPrimary * 7.49344708762353e18;
    // }
    // if (massPrimaryU == 'M_Himalia') {
    //   massPrimary = massPrimary * 9.55630662185067e18;
    // }
    // if (massPrimaryU == 'M_Elara') {
    //   massPrimary = massPrimary * 7.76699816441212e17;
    // }
    // if (massPrimaryU == 'M_Pasiphae') {
    //   massPrimary = massPrimary * 1.90926209704339e17;
    // }
    // if (massPrimaryU == 'M_Sinope') {
    //   massPrimary = massPrimary * 7.76699816441212e16;
    // }
    // if (massPrimaryU == 'M_Lysithea') {
    //   massPrimary = massPrimary * 7.76699816441212e16;
    // }
    // if (massPrimaryU == 'M_Carme') {
    //   massPrimary = massPrimary * 9.55630662185067e16;
    // }
    // if (massPrimaryU == 'M_Ananke') {
    //   massPrimary = massPrimary * 3.81852419408679e16;
    // }
    // if (massPrimaryU == 'M_Leda') {
    //   massPrimary = massPrimary * 5.6778056079615e15;
    // }
    // if (massPrimaryU == 'M_Thebe') {
    //   massPrimary = massPrimary * 7.76699816441212e17;
    // }
    // if (massPrimaryU == 'M_Adrastea') {
    //   massPrimary = massPrimary * 1.90926209704339e16;
    // }
    // if (massPrimaryU == 'M_Metis') {
    //   massPrimary = massPrimary * 9.55630662185067e16;
    // }
    // if (massPrimaryU == 'M_Mimas') {
    //   massPrimary = massPrimary * 3.81429321227243e19;
    // }
    // if (massPrimaryU == 'M_Enceladus') {
    //   massPrimary = massPrimary * 1.17050220435577e20;
    // }
    // if (massPrimaryU == 'M_Tethys') {
    //   massPrimary = massPrimary * 6.17639232970985e20;
    // }
    // if (massPrimaryU == 'M_Dione') {
    //   massPrimary = massPrimary * 1.09569832670221e21;
    // }
    // if (massPrimaryU == 'M_Rhea') {
    //   massPrimary = massPrimary * 2.31572188769539e21;
    // }
    // if (massPrimaryU == 'M_Titan') {
    //   massPrimary = massPrimary * 1.34555202850711e23;
    // }
    // if (massPrimaryU == 'M_Hyperion') {
    //   massPrimary = massPrimary * 5.54593618108186e18;
    // }
    // if (massPrimaryU == 'M_Iapetus') {
    //   massPrimary = massPrimary * 1.80652899243564e21;
    // }
    // if (massPrimaryU == 'M_Phoebe') {
    //   massPrimary = massPrimary * 8.28855423929348e18;
    // }
    // if (massPrimaryU == 'M_Janus') {
    //   massPrimary = massPrimary * 1.8972946850153e18;
    // }
    // if (massPrimaryU == 'M_Epimetheus') {
    //   massPrimary = massPrimary * 5.26205381601159e17;
    // }
    // if (massPrimaryU == 'M_Atlas') {
    //   massPrimary = massPrimary * 1.13924780048507e15;
    // }
    // if (massPrimaryU == 'M_Prometheus') {
    //   massPrimary = massPrimary * 1.87289854971031e17;
    // }
    // if (massPrimaryU == 'M_Pandora') {
    //   massPrimary = massPrimary * 1.48445610732647e17;
    // }
    // if (massPrimaryU == 'M_Ariel') {
    //   massPrimary = massPrimary * 1.29013922898875e21;
    // }
    // if (massPrimaryU == 'M_Umbriel') {
    //   massPrimary = massPrimary * 1.25880780428295e21;
    // }
    // if (massPrimaryU == 'M_Titania') {
    //   massPrimary = massPrimary * 3.4460391356142e21;
    // }
    // if (massPrimaryU == 'M_Oberon') {
    //   massPrimary = massPrimary * 2.99680258484984e21;
    // }
    // if (massPrimaryU == 'M_Miranda') {
    //   massPrimary = massPrimary * 6.51349484606072e19;
    // }
    // if (massPrimaryU == 'M_Triton') {
    //   massPrimary = massPrimary * 2.13993058500051e22;
    // }
    // if (massPrimaryU == 'M_Charon') {
    //   massPrimary = massPrimary * 1.62268483858135e21;
    // }
    // if (massPrimaryU == 'M_Ceres') {
    //   massPrimary = massPrimary * 8.70013290062687e20;
    // }
    // if (massPrimaryU == 'M_Pallas') {
    //   massPrimary = massPrimary * 3.1800485774705e20;
    // }
    // if (massPrimaryU == 'M_Vesta') {
    //   massPrimary = massPrimary * 3.00004582780236e20;
    // }
  }

  if (!(massSecondaryU == 'kg' || typeof massSecondaryU == 'undefined')) {
    // if (massSecondaryU == 'g') {
    //   massSecondary = massSecondary / 1000;
    // }
    // if (massSecondaryU == 'M_Sun') {
    //   massSecondary = massSecondary * 1.98894729428839e30;
    // }
    // if (massSecondaryU == 'M_Mercury') {
    //   massSecondary = massSecondary * 3.30192458710471e23;
    // }
    // if (massSecondaryU == 'M_Venus') {
    //   massSecondary = massSecondary * 4.86862144253118e24;
    // }
    if (massSecondaryU == 'M_Earth') {
      massSecondary = massSecondary * 5.97378250603408e24;
    } // if (massSecondaryU == 'M_Mars') {
    //   massSecondary = massSecondary * 6.41863349674674e23;
    // }
    // if (massSecondaryU == 'M_Jupiter') {
    //   massSecondary = massSecondary * 1.89863768365072e27;
    // }
    // if (massSecondaryU == 'M_Saturn') {
    //   massSecondary = massSecondary * 5.68470940139966e26;
    // }
    // if (massSecondaryU == 'M_Uranus') {
    //   massSecondary = massSecondary * 8.68333186484441e25;
    // }
    // if (massSecondaryU == 'M_Neptune') {
    //   massSecondary = massSecondary * 1.02431564713932e26;
    // }
    // if (massSecondaryU == 'M_Pluto') {
    //   massSecondary = massSecondary * 1.30861680530754e22;
    // }
    // if (massSecondaryU == 'M_Moon') {
    //   massSecondary = massSecondary * 7.34777534869879e22;
    // }
    // if (massSecondaryU == 'M_Phobos') {
    //   massSecondary = massSecondary * 1.03409569809204e16;
    // }
    // if (massSecondaryU == 'M_Deimos') {
    //   massSecondary = massSecondary * 1.79842730102965e15;
    // }
    // if (massSecondaryU == 'M_Io') {
    //   massSecondary = massSecondary * 8.9320629865446e22;
    // }
    // if (massSecondaryU == 'M_Europa') {
    //   massSecondary = massSecondary * 4.79990319196655e22;
    // }
    // if (massSecondaryU == 'M_Ganymede') {
    //   massSecondary = massSecondary * 1.48187846087315e23;
    // }
    // if (massSecondaryU == 'M_Callisto') {
    //   massSecondary = massSecondary * 1.07595283170753e23;
    // }
    // if (massSecondaryU == 'M_Amalthea') {
    //   massSecondary = massSecondary * 7.49344708762353e18;
    // }
    // if (massSecondaryU == 'M_Himalia') {
    //   massSecondary = massSecondary * 9.55630662185067e18;
    // }
    // if (massSecondaryU == 'M_Elara') {
    //   massSecondary = massSecondary * 7.76699816441212e17;
    // }
    // if (massSecondaryU == 'M_Pasiphae') {
    //   massSecondary = massSecondary * 1.90926209704339e17;
    // }
    // if (massSecondaryU == 'M_Sinope') {
    //   massSecondary = massSecondary * 7.76699816441212e16;
    // }
    // if (massSecondaryU == 'M_Lysithea') {
    //   massSecondary = massSecondary * 7.76699816441212e16;
    // }
    // if (massSecondaryU == 'M_Carme') {
    //   massSecondary = massSecondary * 9.55630662185067e16;
    // }
    // if (massSecondaryU == 'M_Ananke') {
    //   massSecondary = massSecondary * 3.81852419408679e16;
    // }
    // if (massSecondaryU == 'M_Leda') {
    //   massSecondary = massSecondary * 5.6778056079615e15;
    // }
    // if (massSecondaryU == 'M_Thebe') {
    //   massSecondary = massSecondary * 7.76699816441212e17;
    // }
    // if (massSecondaryU == 'M_Adrastea') {
    //   massSecondary = massSecondary * 1.90926209704339e16;
    // }
    // if (massSecondaryU == 'M_Metis') {
    //   massSecondary = massSecondary * 9.55630662185067e16;
    // }
    // if (massSecondaryU == 'M_Mimas') {
    //   massSecondary = massSecondary * 3.81429321227243e19;
    // }
    // if (massSecondaryU == 'M_Enceladus') {
    //   massSecondary = massSecondary * 1.17050220435577e20;
    // }
    // if (massSecondaryU == 'M_Tethys') {
    //   massSecondary = massSecondary * 6.17639232970985e20;
    // }
    // if (massSecondaryU == 'M_Dione') {
    //   massSecondary = massSecondary * 1.09569832670221e21;
    // }
    // if (massSecondaryU == 'M_Rhea') {
    //   massSecondary = massSecondary * 2.31572188769539e21;
    // }
    // if (massSecondaryU == 'M_Titan') {
    //   massSecondary = massSecondary * 1.34555202850711e23;
    // }
    // if (massSecondaryU == 'M_Hyperion') {
    //   massSecondary = massSecondary * 5.54593618108186e18;
    // }
    // if (massSecondaryU == 'M_Iapetus') {
    //   massSecondary = massSecondary * 1.80652899243564e21;
    // }
    // if (massSecondaryU == 'M_Phoebe') {
    //   massSecondary = massSecondary * 8.28855423929348e18;
    // }
    // if (massSecondaryU == 'M_Janus') {
    //   massSecondary = massSecondary * 1.8972946850153e18;
    // }
    // if (massSecondaryU == 'M_Epimetheus') {
    //   massSecondary = massSecondary * 5.26205381601159e17;
    // }
    // if (massSecondaryU == 'M_Atlas') {
    //   massSecondary = massSecondary * 1.13924780048507e15;
    // }
    // if (massSecondaryU == 'M_Prometheus') {
    //   massSecondary = massSecondary * 1.87289854971031e17;
    // }
    // if (massSecondaryU == 'M_Pandora') {
    //   massSecondary = massSecondary * 1.48445610732647e17;
    // }
    // if (massSecondaryU == 'M_Ariel') {
    //   massSecondary = massSecondary * 1.29013922898875e21;
    // }
    // if (massSecondaryU == 'M_Umbriel') {
    //   massSecondary = massSecondary * 1.25880780428295e21;
    // }
    // if (massSecondaryU == 'M_Titania') {
    //   massSecondary = massSecondary * 3.4460391356142e21;
    // }
    // if (massSecondaryU == 'M_Oberon') {
    //   massSecondary = massSecondary * 2.99680258484984e21;
    // }
    // if (massSecondaryU == 'M_Miranda') {
    //   massSecondary = massSecondary * 6.51349484606072e19;
    // }
    // if (massSecondaryU == 'M_Triton') {
    //   massSecondary = massSecondary * 2.13993058500051e22;
    // }
    // if (massSecondaryU == 'M_Charon') {
    //   massSecondary = massSecondary * 1.62268483858135e21;
    // }
    // if (massSecondaryU == 'M_Ceres') {
    //   massSecondary = massSecondary * 8.70013290062687e20;
    // }
    // if (massSecondaryU == 'M_Pallas') {
    //   massSecondary = massSecondary * 3.1800485774705e20;
    // }
    // if (massSecondaryU == 'M_Vesta') {
    //   massSecondary = massSecondary * 3.00004582780236e20;
    // }

  }

  if (typeof vectorU != 'undefined') {// rxu = vectorU[0];
    // ryu = vectorU[1];
    // rzu = vectorU[2];
    // vxu = vectorU[3];
    // vyu = vectorU[4];
    // vzu = vectorU[5];
    // if (rxu == 'cm') {
    //   rx = rx / 100;
    // }
    // if (rxu == 'km') {
    //   rx = rx * 1000;
    // }
    // if (rxu == 'AU') {
    //   rx = rx * 149597870691;
    // }
    // if (rxu == 'LY') {
    //   rx = rx * 9.4605e15;
    // }
    // if (rxu == 'PC') {
    //   rx = rx * 3.0857e16;
    // }
    // if (rxu == 'mi') {
    //   rx = rx * 1609.344;
    // }
    // if (rxu == 'ft') {
    //   rx = rx * 0.3048;
    // }
    // if (ryu == 'cm') {
    //   ry = ry / 100;
    // }
    // if (ryu == 'km') {
    //   ry = ry * 1000;
    // }
    // if (ryu == 'AU') {
    //   ry = ry * 149597870691;
    // }
    // if (ryu == 'LY') {
    //   ry = ry * 9.4605e15;
    // }
    // if (ryu == 'PC') {
    //   ry = ry * 3.0857e16;
    // }
    // if (ryu == 'mi') {
    //   ry = ry * 1609.344;
    // }
    // if (ryu == 'ft') {
    //   ry = ry * 0.3048;
    // }
    // if (rzu == 'cm') {
    //   rz = rz / 100;
    // }
    // if (rzu == 'km') {
    //   rz = rz * 1000;
    // }
    // if (rzu == 'AU') {
    //   rz = rz * 149597870691;
    // }
    // if (rzu == 'LY') {
    //   rz = rz * 9.4605e15;
    // }
    // if (rzu == 'PC') {
    //   rz = rz * 3.0857e16;
    // }
    // if (rzu == 'mi') {
    //   rz = rz * 1609.344;
    // }
    // if (rzu == 'ft') {
    //   rz = rz * 0.3048;
    // }
    // if (vxu == 'km/s') {
    //   vx = vx * 1000;
    // }
    // if (vyu == 'km/s') {
    //   vy = vy * 1000;
    // }
    // if (vzu == 'km/s') {
    //   vz = vz * 1000;
    // }
  } // Prevent divide by 0 errors


  if (rx == 0) {
    rx = 0.000000000000001;
  }

  if (ry == 0) {
    ry = 0.000000000000001;
  }

  if (rz == 0) {
    rz = 0.000000000000001;
  }

  if (vx == 0) {
    vx = 0.000000000000001;
  }

  if (vy == 0) {
    vy = 0.000000000000001;
  }

  if (vz == 0) {
    vz = 0.000000000000001;
  }

  var mu = G * (massPrimary + massSecondary);
  var r = Math.sqrt(rx * rx + ry * ry + rz * rz);
  var v = Math.sqrt(vx * vx + vy * vy + vz * vz);
  var a = 1 / (2 / r - v * v / mu); //  semi-major axis

  var hx = ry * vz - rz * vy;
  var hy = rz * vx - rx * vz;
  var hz = rx * vy - ry * vx;
  var h = Math.sqrt(hx * hx + hy * hy + hz * hz);
  var p = h * h / mu;
  var q = rx * vx + ry * vy + rz * vz; // dot product of r*v

  var e = Math.sqrt(1 - p / a); // eccentricity

  var ex = 1 - r / a;
  var ey = q / Math.sqrt(a * mu);
  var i = Math.acos(hz / h);
  var lan = 0;

  if (i != 0) {
    lan = _arctan2(hx, -hy);
  }

  var tax = h * h / (r * mu) - 1;
  var tay = h * q / (r * mu);

  var ta = _arctan2(tay, tax);

  var cw = (rx * Math.cos(lan) + ry * Math.sin(lan)) / r;
  var sw = 0;

  if (i == 0 || i == PI) {
    sw = (ry * Math.cos(lan) - rx * Math.sin(lan)) / r;
  } else {
    sw = rz / (r * Math.sin(i));
  }

  var w = _arctan2(sw, cw) - ta;

  if (w < 0) {
    w = TAU + w;
  }

  var u = _arctan2(ey, ex); // eccentric anomoly


  var m = u - e * Math.sin(u); // Mean anomoly

  var tl = w + ta + lan; // True longitude

  while (tl >= TAU) {
    tl = tl - TAU;
  }

  var PlusMinus = a * e;
  var periapsis = a - PlusMinus - RADIUS_OF_EARTH;
  var apoapsis = a + PlusMinus - RADIUS_OF_EARTH;
  var period = TAU * Math.sqrt(a * a * a / (G * (massPrimary + massSecondary)));

  if (typeof outputU == 'undefined') {
    outputU = 'm';
  } else {
    // if (outputU == 'cm') {
    //   a = a * 100;
    // }
    if (outputU == 'km') {
      a = a / 1000;
    } // if (outputU == 'AU') {
    //   a = a / 149597870691;
    // }
    // if (outputU == 'LY') {
    //   a = a / 9.4605e15;
    // }
    // if (outputU == 'PC') {
    //   a = a / 3.0857e16;
    // }
    // if (outputU == 'mi') {
    //   a = a / 1609.344;
    // }
    // if (outputU == 'ft') {
    //   a = a / 0.3048;
    // }
    // if (outputU == 'cm') {
    //   periapsis = periapsis * 100;
    // }
    // if (outputU == 'km') {
    //   periapsis = periapsis / 1000;
    // }
    // if (outputU == 'AU') {
    //   periapsis = periapsis / 149597870691;
    // }
    // if (outputU == 'LY') {
    //   periapsis = periapsis / 9.4605e15;
    // }
    // if (outputU == 'PC') {
    //   periapsis = periapsis / 3.0857e16;
    // }
    // if (outputU == 'mi') {
    //   periapsis = periapsis / 1609.344;
    // }
    // if (outputU == 'ft') {
    //   periapsis = periapsis / 0.3048;
    // }
    // if (outputU == 'cm') {
    //   apoapsis = apoapsis * 100;
    // }


    if (outputU == 'km') {
      apoapsis = apoapsis / 1000;
    } // if (outputU == 'AU') {
    //   apoapsis = apoapsis / 149597870691;
    // }
    // if (outputU == 'LY') {
    //   apoapsis = apoapsis / 9.4605e15;
    // }
    // if (outputU == 'PC') {
    //   apoapsis = apoapsis / 3.0857e16;
    // }
    // if (outputU == 'mi') {
    //   apoapsis = apoapsis / 1609.344;
    // }
    // if (outputU == 'ft') {
    //   apoapsis = apoapsis / 0.3048;
    // }

  }

  if (typeof outputU2 == 'undefined') {
    outputU2 = 's';
  } else {
    if (outputU2 == 'm') {
      period = period / 60;
    } // if (outputU2 == 'h') {
    //   period = period / 3600;
    // }
    // if (outputU2 == 'd') {
    //   period = period / 86400;
    // }
    // if (outputU2 == 'yr') {
    //   period = period / 3.15581e7;
    // }
    // if (outputU2 == 'Ky') {
    //   period = period / 3.15581e10;
    // }
    // if (outputU2 == 'My') {
    //   period = period / 3.15581e13;
    // }
    // if (outputU2 == 'By') {
    //   period = period / 3.15581e16;
    // }

  } // toDegrees


  i = RAD2DEG * i;
  lan = RAD2DEG * lan;
  w = RAD2DEG * w;
  m = RAD2DEG * m;
  ta = RAD2DEG * ta;
  tl = RAD2DEG * tl;
  return {
    semiMajorAxis: a,
    eccentricity: e,
    inclination: i,
    raan: lan,
    argPe: w,
    mo: m,
    ta: ta,
    tl: tl,
    perigee: periapsis,
    apogee: apoapsis,
    period: period
  };
}; // Converts Keplerian Elements to State Vectors

/*
  const _kp2sv = (a, ec, i, w0, o0, m0, massPrimary, massSecondary, massPrimaryU, massSecondaryU, aU, vectorU) => {
    let rxu,
      ryu,
      rzu = 'm';
    let vxu,
      vyu,
      vzu = 'm/s';

    i = DEG2RAD * i;
    w0 = DEG2RAD * w0;
    o0 = DEG2RAD * o0;
    m0 = DEG2RAD * m0;

    if (typeof aU == 'undefined') {
      aU = 'm';
    } else {
      if (aU == 'cm') {
        a = a / 100;
      }
      if (aU == 'km') {
        a = a * 1000;
      }
      if (aU == 'AU') {
        a = a * 149597870691;
      }
      if (aU == 'LY') {
        a = a * 9.4605e15;
      }
      if (aU == 'PC') {
        a = a * 3.0857e16;
      }
      if (aU == 'mi') {
        a = a * 1609.344;
      }
      if (aU == 'ft') {
        a = a * 0.3048;
      }
    }

    if (!(massPrimaryU == 'kg' || typeof massPrimaryU == 'undefined')) {
      if (massPrimaryU == 'g') {
        massPrimary = massPrimary / 1000;
      }
      if (massPrimaryU == 'M_Sun') {
        massPrimary = massPrimary * 1.98894729428839e30;
      }
      if (massPrimaryU == 'M_Mercury') {
        massPrimary = massPrimary * 3.30192458710471e23;
      }
      if (massPrimaryU == 'M_Venus') {
        massPrimary = massPrimary * 4.86862144253118e24;
      }
      if (massPrimaryU == 'M_Earth') {
        massPrimary = massPrimary * 5.97378250603408e24;
      }
      if (massPrimaryU == 'M_Mars') {
        massPrimary = massPrimary * 6.41863349674674e23;
      }
      if (massPrimaryU == 'M_Jupiter') {
        massPrimary = massPrimary * 1.89863768365072e27;
      }
      if (massPrimaryU == 'M_Saturn') {
        massPrimary = massPrimary * 5.68470940139966e26;
      }
      if (massPrimaryU == 'M_Uranus') {
        massPrimary = massPrimary * 8.68333186484441e25;
      }
      if (massPrimaryU == 'M_Neptune') {
        massPrimary = massPrimary * 1.02431564713932e26;
      }
      if (massPrimaryU == 'M_Pluto') {
        massPrimary = massPrimary * 1.30861680530754e22;
      }
      if (massPrimaryU == 'M_Moon') {
        massPrimary = massPrimary * 7.34777534869879e22;
      }
      if (massPrimaryU == 'M_Phobos') {
        massPrimary = massPrimary * 1.03409569809204e16;
      }
      if (massPrimaryU == 'M_Deimos') {
        massPrimary = massPrimary * 1.79842730102965e15;
      }
      if (massPrimaryU == 'M_Io') {
        massPrimary = massPrimary * 8.9320629865446e22;
      }
      if (massPrimaryU == 'M_Europa') {
        massPrimary = massPrimary * 4.79990319196655e22;
      }
      if (massPrimaryU == 'M_Ganymede') {
        massPrimary = massPrimary * 1.48187846087315e23;
      }
      if (massPrimaryU == 'M_Callisto') {
        massPrimary = massPrimary * 1.07595283170753e23;
      }
      if (massPrimaryU == 'M_Amalthea') {
        massPrimary = massPrimary * 7.49344708762353e18;
      }
      if (massPrimaryU == 'M_Himalia') {
        massPrimary = massPrimary * 9.55630662185067e18;
      }
      if (massPrimaryU == 'M_Elara') {
        massPrimary = massPrimary * 7.76699816441212e17;
      }
      if (massPrimaryU == 'M_Pasiphae') {
        massPrimary = massPrimary * 1.90926209704339e17;
      }
      if (massPrimaryU == 'M_Sinope') {
        massPrimary = massPrimary * 7.76699816441212e16;
      }
      if (massPrimaryU == 'M_Lysithea') {
        massPrimary = massPrimary * 7.76699816441212e16;
      }
      if (massPrimaryU == 'M_Carme') {
        massPrimary = massPrimary * 9.55630662185067e16;
      }
      if (massPrimaryU == 'M_Ananke') {
        massPrimary = massPrimary * 3.81852419408679e16;
      }
      if (massPrimaryU == 'M_Leda') {
        massPrimary = massPrimary * 5.6778056079615e15;
      }
      if (massPrimaryU == 'M_Thebe') {
        massPrimary = massPrimary * 7.76699816441212e17;
      }
      if (massPrimaryU == 'M_Adrastea') {
        massPrimary = massPrimary * 1.90926209704339e16;
      }
      if (massPrimaryU == 'M_Metis') {
        massPrimary = massPrimary * 9.55630662185067e16;
      }
      if (massPrimaryU == 'M_Mimas') {
        massPrimary = massPrimary * 3.81429321227243e19;
      }
      if (massPrimaryU == 'M_Enceladus') {
        massPrimary = massPrimary * 1.17050220435577e20;
      }
      if (massPrimaryU == 'M_Tethys') {
        massPrimary = massPrimary * 6.17639232970985e20;
      }
      if (massPrimaryU == 'M_Dione') {
        massPrimary = massPrimary * 1.09569832670221e21;
      }
      if (massPrimaryU == 'M_Rhea') {
        massPrimary = massPrimary * 2.31572188769539e21;
      }
      if (massPrimaryU == 'M_Titan') {
        massPrimary = massPrimary * 1.34555202850711e23;
      }
      if (massPrimaryU == 'M_Hyperion') {
        massPrimary = massPrimary * 5.54593618108186e18;
      }
      if (massPrimaryU == 'M_Iapetus') {
        massPrimary = massPrimary * 1.80652899243564e21;
      }
      if (massPrimaryU == 'M_Phoebe') {
        massPrimary = massPrimary * 8.28855423929348e18;
      }
      if (massPrimaryU == 'M_Janus') {
        massPrimary = massPrimary * 1.8972946850153e18;
      }
      if (massPrimaryU == 'M_Epimetheus') {
        massPrimary = massPrimary * 5.26205381601159e17;
      }
      if (massPrimaryU == 'M_Atlas') {
        massPrimary = massPrimary * 1.13924780048507e15;
      }
      if (massPrimaryU == 'M_Prometheus') {
        massPrimary = massPrimary * 1.87289854971031e17;
      }
      if (massPrimaryU == 'M_Pandora') {
        massPrimary = massPrimary * 1.48445610732647e17;
      }
      if (massPrimaryU == 'M_Ariel') {
        massPrimary = massPrimary * 1.29013922898875e21;
      }
      if (massPrimaryU == 'M_Umbriel') {
        massPrimary = massPrimary * 1.25880780428295e21;
      }
      if (massPrimaryU == 'M_Titania') {
        massPrimary = massPrimary * 3.4460391356142e21;
      }
      if (massPrimaryU == 'M_Oberon') {
        massPrimary = massPrimary * 2.99680258484984e21;
      }
      if (massPrimaryU == 'M_Miranda') {
        massPrimary = massPrimary * 6.51349484606072e19;
      }
      if (massPrimaryU == 'M_Triton') {
        massPrimary = massPrimary * 2.13993058500051e22;
      }
      if (massPrimaryU == 'M_Charon') {
        massPrimary = massPrimary * 1.62268483858135e21;
      }
      if (massPrimaryU == 'M_Ceres') {
        massPrimary = massPrimary * 8.70013290062687e20;
      }
      if (massPrimaryU == 'M_Pallas') {
        massPrimary = massPrimary * 3.1800485774705e20;
      }
      if (massPrimaryU == 'M_Vesta') {
        massPrimary = massPrimary * 3.00004582780236e20;
      }
    }
    if (!(massSecondaryU == 'kg' || typeof massSecondaryU == 'undefined')) {
      if (massSecondaryU == 'g') {
        massSecondary = massSecondary / 1000;
      }
      if (massSecondaryU == 'M_Sun') {
        massSecondary = massSecondary * 1.98894729428839e30;
      }
      if (massSecondaryU == 'M_Mercury') {
        massSecondary = massSecondary * 3.30192458710471e23;
      }
      if (massSecondaryU == 'M_Venus') {
        massSecondary = massSecondary * 4.86862144253118e24;
      }
      if (massSecondaryU == 'M_Earth') {
        massSecondary = massSecondary * 5.97378250603408e24;
      }
      if (massSecondaryU == 'M_Mars') {
        massSecondary = massSecondary * 6.41863349674674e23;
      }
      if (massSecondaryU == 'M_Jupiter') {
        massSecondary = massSecondary * 1.89863768365072e27;
      }
      if (massSecondaryU == 'M_Saturn') {
        massSecondary = massSecondary * 5.68470940139966e26;
      }
      if (massSecondaryU == 'M_Uranus') {
        massSecondary = massSecondary * 8.68333186484441e25;
      }
      if (massSecondaryU == 'M_Neptune') {
        massSecondary = massSecondary * 1.02431564713932e26;
      }
      if (massSecondaryU == 'M_Pluto') {
        massSecondary = massSecondary * 1.30861680530754e22;
      }
      if (massSecondaryU == 'M_Moon') {
        massSecondary = massSecondary * 7.34777534869879e22;
      }
      if (massSecondaryU == 'M_Phobos') {
        massSecondary = massSecondary * 1.03409569809204e16;
      }
      if (massSecondaryU == 'M_Deimos') {
        massSecondary = massSecondary * 1.79842730102965e15;
      }
      if (massSecondaryU == 'M_Io') {
        massSecondary = massSecondary * 8.9320629865446e22;
      }
      if (massSecondaryU == 'M_Europa') {
        massSecondary = massSecondary * 4.79990319196655e22;
      }
      if (massSecondaryU == 'M_Ganymede') {
        massSecondary = massSecondary * 1.48187846087315e23;
      }
      if (massSecondaryU == 'M_Callisto') {
        massSecondary = massSecondary * 1.07595283170753e23;
      }
      if (massSecondaryU == 'M_Amalthea') {
        massSecondary = massSecondary * 7.49344708762353e18;
      }
      if (massSecondaryU == 'M_Himalia') {
        massSecondary = massSecondary * 9.55630662185067e18;
      }
      if (massSecondaryU == 'M_Elara') {
        massSecondary = massSecondary * 7.76699816441212e17;
      }
      if (massSecondaryU == 'M_Pasiphae') {
        massSecondary = massSecondary * 1.90926209704339e17;
      }
      if (massSecondaryU == 'M_Sinope') {
        massSecondary = massSecondary * 7.76699816441212e16;
      }
      if (massSecondaryU == 'M_Lysithea') {
        massSecondary = massSecondary * 7.76699816441212e16;
      }
      if (massSecondaryU == 'M_Carme') {
        massSecondary = massSecondary * 9.55630662185067e16;
      }
      if (massSecondaryU == 'M_Ananke') {
        massSecondary = massSecondary * 3.81852419408679e16;
      }
      if (massSecondaryU == 'M_Leda') {
        massSecondary = massSecondary * 5.6778056079615e15;
      }
      if (massSecondaryU == 'M_Thebe') {
        massSecondary = massSecondary * 7.76699816441212e17;
      }
      if (massSecondaryU == 'M_Adrastea') {
        massSecondary = massSecondary * 1.90926209704339e16;
      }
      if (massSecondaryU == 'M_Metis') {
        massSecondary = massSecondary * 9.55630662185067e16;
      }
      if (massSecondaryU == 'M_Mimas') {
        massSecondary = massSecondary * 3.81429321227243e19;
      }
      if (massSecondaryU == 'M_Enceladus') {
        massSecondary = massSecondary * 1.17050220435577e20;
      }
      if (massSecondaryU == 'M_Tethys') {
        massSecondary = massSecondary * 6.17639232970985e20;
      }
      if (massSecondaryU == 'M_Dione') {
        massSecondary = massSecondary * 1.09569832670221e21;
      }
      if (massSecondaryU == 'M_Rhea') {
        massSecondary = massSecondary * 2.31572188769539e21;
      }
      if (massSecondaryU == 'M_Titan') {
        massSecondary = massSecondary * 1.34555202850711e23;
      }
      if (massSecondaryU == 'M_Hyperion') {
        massSecondary = massSecondary * 5.54593618108186e18;
      }
      if (massSecondaryU == 'M_Iapetus') {
        massSecondary = massSecondary * 1.80652899243564e21;
      }
      if (massSecondaryU == 'M_Phoebe') {
        massSecondary = massSecondary * 8.28855423929348e18;
      }
      if (massSecondaryU == 'M_Janus') {
        massSecondary = massSecondary * 1.8972946850153e18;
      }
      if (massSecondaryU == 'M_Epimetheus') {
        massSecondary = massSecondary * 5.26205381601159e17;
      }
      if (massSecondaryU == 'M_Atlas') {
        massSecondary = massSecondary * 1.13924780048507e15;
      }
      if (massSecondaryU == 'M_Prometheus') {
        massSecondary = massSecondary * 1.87289854971031e17;
      }
      if (massSecondaryU == 'M_Pandora') {
        massSecondary = massSecondary * 1.48445610732647e17;
      }
      if (massSecondaryU == 'M_Ariel') {
        massSecondary = massSecondary * 1.29013922898875e21;
      }
      if (massSecondaryU == 'M_Umbriel') {
        massSecondary = massSecondary * 1.25880780428295e21;
      }
      if (massSecondaryU == 'M_Titania') {
        massSecondary = massSecondary * 3.4460391356142e21;
      }
      if (massSecondaryU == 'M_Oberon') {
        massSecondary = massSecondary * 2.99680258484984e21;
      }
      if (massSecondaryU == 'M_Miranda') {
        massSecondary = massSecondary * 6.51349484606072e19;
      }
      if (massSecondaryU == 'M_Triton') {
        massSecondary = massSecondary * 2.13993058500051e22;
      }
      if (massSecondaryU == 'M_Charon') {
        massSecondary = massSecondary * 1.62268483858135e21;
      }
      if (massSecondaryU == 'M_Ceres') {
        massSecondary = massSecondary * 8.70013290062687e20;
      }
      if (massSecondaryU == 'M_Pallas') {
        massSecondary = massSecondary * 3.1800485774705e20;
      }
      if (massSecondaryU == 'M_Vesta') {
        massSecondary = massSecondary * 3.00004582780236e20;
      }
    }

    let mass = massPrimary + massSecondary;

    let eca = m0 + ec / 2;
    let diff = 10000;
    let eps = 0.000001;
    let e1 = 0;

    while (diff > eps) {
      e1 = eca - (eca - ec * Math.sin(eca) - m0) / (1 - ec * Math.cos(eca));
      diff = Math.abs(e1 - eca);
      eca = e1;
    }

    let ceca = Math.cos(eca);
    let seca = Math.sin(eca);
    e1 = a * Math.sqrt(Math.abs(1 - ec * ec));
    let xw = a * (ceca - ec);
    let yw = e1 * seca;

    let edot = Math.sqrt((G * mass) / a) / (a * (1 - ec * ceca));
    let xdw = -a * edot * seca;
    let ydw = e1 * edot * ceca;

    let cw = Math.cos(w0);
    let sw = Math.sin(w0);
    let co = Math.cos(o0);
    let so = Math.sin(o0);
    let ci = Math.cos(i);
    let si = Math.sin(i);
    let swci = sw * ci;
    let cwci = cw * ci;
    let pX = cw * co - so * swci;
    let pY = cw * so + co * swci;
    let pZ = sw * si;
    let qx = -sw * co - so * cwci;
    let qy = -sw * so + co * cwci;
    let qz = cw * si;
    rx = xw * pX + yw * qx;
    ry = xw * pY + yw * qy;
    rz = xw * pZ + yw * qz;
    vx = xdw * pX + ydw * qx;
    vy = xdw * pY + ydw * qy;
    vz = xdw * pZ + ydw * qz;

    if (typeof vectorU != 'undefined') {
      rxu = vectorU[0];
      ryu = vectorU[1];
      rzu = vectorU[2];
      vxu = vectorU[3];
      vyu = vectorU[4];
      vzu = vectorU[5];
      if (rxu == 'cm') {
        rx = rx * 100;
      }
      if (rxu == 'km') {
        rx = rx / 1000;
      }
      if (rxu == 'AU') {
        rx = rx / 149597870691;
      }
      if (rxu == 'LY') {
        rx = rx / 9.4605e15;
      }
      if (rxu == 'PC') {
        rx = rx / 3.0857e16;
      }
      if (rxu == 'mi') {
        rx = rx / 1609.344;
      }
      if (rxu == 'ft') {
        rx = rx / 0.3048;
      }

      if (ryu == 'cm') {
        ry = ry * 100;
      }
      if (ryu == 'km') {
        ry = ry / 1000;
      }
      if (ryu == 'AU') {
        ry = ry / 149597870691;
      }
      if (ryu == 'LY') {
        ry = ry / 9.4605e15;
      }
      if (ryu == 'PC') {
        ry = ry / 3.0857e16;
      }
      if (ryu == 'mi') {
        ry = ry / 1609.344;
      }
      if (ryu == 'ft') {
        ry = ry / 0.3048;
      }

      if (rzu == 'cm') {
        rz = rz * 100;
      }
      if (rzu == 'km') {
        rz = rz / 1000;
      }
      if (rzu == 'AU') {
        rz = rz / 149597870691;
      }
      if (rzu == 'LY') {
        rz = rz / 9.4605e15;
      }
      if (rzu == 'PC') {
        rz = rz / 3.0857e16;
      }
      if (rzu == 'mi') {
        rz = rz / 1609.344;
      }
      if (rzu == 'ft') {
        rz = rz / 0.3048;
      }

      if (vxu == 'km/s') {
        vx = vx / 1000;
      }
      if (vyu == 'km/s') {
        vy = vy / 1000;
      }
      if (vzu == 'km/s') {
        vz = vz / 1000;
      }
    }

    return {
      position: {
        x: rx,
        y: ry,
        z: rz,
      },
      velocityX: vx,
      velocityY: vy,
      velocityZ: vz,
    };
  };
  */
// Internal Functions


var _arctan2 = (y, x) => {
  var u;

  if (x != 0) {
    u = Math.atan(y / x);
    if (x < 0) u = u + PI;
    if (x > 0 && y < 0) u = u + TAU;
  } else {
    if (y < 0) u = -PI / 2;
    if (y == 0) u = 0;
    if (y > 0) u = PI / 2;
  }

  return u;
};

var _dayOfYear = (mon, day, hr, minute, sec) => // eslint-disable-next-line implicit-arrow-linebreak
(Math.floor(275 * mon / 9.0) + day + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0).toFixed(5);

var _pad0 = (str, max) => str.length < max ? _pad0('0' + str, max) : str;

var omManager = om;


/***/ }),

/***/ "./src/js/plugins/initialOrbit/initialOrbit.ts":
/*!*****************************************************!*\
  !*** ./src/js/plugins/initialOrbit/initialOrbit.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");
/* harmony import */ var _app_js_plugins_initialOrbit_omManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/plugins/initialOrbit/omManager.js */ "./src/js/plugins/initialOrbit/omManager.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



var init = function () {
    var _a = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs, uiManager = _a.uiManager, satSet = _a.satSet, timeManager = _a.timeManager, satellite = _a.satellite, settingsManager = _a.settingsManager;
    var isObfitMenuOpen = false;
    // Add HTML
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'initialOrbit',
        cb: function () {
            // Side Menu
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div id=\"obfit-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"obfit-content\" class=\"side-menu\">\n            <form id=\"obfit-form\">\n              <div class=\"switch row\">\n                <h5 class=\"center-align\">Initial Orbit Determination</h5>\n              </div>\n              <div class=\"switch row\">\n                <h6 class=\"center-align\">Observation 1</h5>\n                <div class=\"input-field col s12\">\n                  <input value=\"1606439414717\" id=\"obfit-t1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Time in Unix Time\">\n                  <label for=\"obfit-t\" class=\"active\">Time</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"-3323.62939453125\" id=\"obfit-x1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"X\">\n                  <label for=\"obfit-lat\" class=\"active\">X</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"-4930.19384765625\" id=\"obfit-y1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y\">\n                  <label for=\"obfit-lat\" class=\"active\">Y</label>\n                </div><div class=\"input-field col s4\">\n                  <input value=\"-3303.053955078125\" id=\"obfit-z1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z\">\n                  <label for=\"obfit-lat\" class=\"active\">Z</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"3.2059669494628906\" id=\"obfit-xd1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                  data-delay=\"50\" data-tooltip=\"X Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">X Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"-4.953164100646973\" id=\"obfit-yd1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Y Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"4.8763322830200195\" id=\"obfit-zd1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Z Dot</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <h6 class=\"center-align\">Observation 2 (Optional)</h5>\n                <div class=\"input-field col s12\">\n                  <input value=\"\" id=\"obfit-t2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Time in Unix Time\">\n                  <label for=\"obfit-t\" class=\"active\">Time</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-x2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"X\">\n                  <label for=\"obfit-lat\" class=\"active\">X</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-y2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y\">\n                  <label for=\"obfit-lat\" class=\"active\">Y</label>\n                </div><div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-z2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z\">\n                  <label for=\"obfit-lat\" class=\"active\">Z</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-xd2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                  data-delay=\"50\" data-tooltip=\"X Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">X Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-yd2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Y Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-zd2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Z Dot</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <h6 class=\"center-align\">Observation 3 (Optional)</h5>\n                <div class=\"input-field col s12\">\n                  <input value=\"\" id=\"obfit-t3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Time in Unix Time\">\n                  <label for=\"obfit-t\" class=\"active\">Time</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-x3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"X\">\n                  <label for=\"obfit-lat\" class=\"active\">X</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-y3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y\">\n                  <label for=\"obfit-lat\" class=\"active\">Y</label>\n                </div><div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-z3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z\">\n                  <label for=\"obfit-lat\" class=\"active\">Z</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-xd3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                  data-delay=\"50\" data-tooltip=\"X Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">X Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-yd3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Y Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-zd3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Z Dot</label>\n                </div>\n              </div>\n              <div class=\"row center\">\n                <button id=\"obfit-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\"\n                  name=\"action\">Create Analyst Satellite &#9658;\n                </button>\n              </div>\n            </form>\n            <div class=\"row\">\n              <table id=\"obfit\" class=\"center-align striped-light centered\"></table>\n            </div>\n          </div>\n        </div>     \n      "], ["\n        <div id=\"obfit-menu\" class=\"side-menu-parent start-hidden text-select\">\n          <div id=\"obfit-content\" class=\"side-menu\">\n            <form id=\"obfit-form\">\n              <div class=\"switch row\">\n                <h5 class=\"center-align\">Initial Orbit Determination</h5>\n              </div>\n              <div class=\"switch row\">\n                <h6 class=\"center-align\">Observation 1</h5>\n                <div class=\"input-field col s12\">\n                  <input value=\"1606439414717\" id=\"obfit-t1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Time in Unix Time\">\n                  <label for=\"obfit-t\" class=\"active\">Time</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"-3323.62939453125\" id=\"obfit-x1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"X\">\n                  <label for=\"obfit-lat\" class=\"active\">X</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"-4930.19384765625\" id=\"obfit-y1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y\">\n                  <label for=\"obfit-lat\" class=\"active\">Y</label>\n                </div><div class=\"input-field col s4\">\n                  <input value=\"-3303.053955078125\" id=\"obfit-z1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z\">\n                  <label for=\"obfit-lat\" class=\"active\">Z</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"3.2059669494628906\" id=\"obfit-xd1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                  data-delay=\"50\" data-tooltip=\"X Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">X Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"-4.953164100646973\" id=\"obfit-yd1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Y Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"4.8763322830200195\" id=\"obfit-zd1\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Z Dot</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <h6 class=\"center-align\">Observation 2 (Optional)</h5>\n                <div class=\"input-field col s12\">\n                  <input value=\"\" id=\"obfit-t2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Time in Unix Time\">\n                  <label for=\"obfit-t\" class=\"active\">Time</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-x2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"X\">\n                  <label for=\"obfit-lat\" class=\"active\">X</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-y2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y\">\n                  <label for=\"obfit-lat\" class=\"active\">Y</label>\n                </div><div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-z2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z\">\n                  <label for=\"obfit-lat\" class=\"active\">Z</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-xd2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                  data-delay=\"50\" data-tooltip=\"X Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">X Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-yd2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Y Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-zd2\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Z Dot</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <h6 class=\"center-align\">Observation 3 (Optional)</h5>\n                <div class=\"input-field col s12\">\n                  <input value=\"\" id=\"obfit-t3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Time in Unix Time\">\n                  <label for=\"obfit-t\" class=\"active\">Time</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-x3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"X\">\n                  <label for=\"obfit-lat\" class=\"active\">X</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-y3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y\">\n                  <label for=\"obfit-lat\" class=\"active\">Y</label>\n                </div><div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-z3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z\">\n                  <label for=\"obfit-lat\" class=\"active\">Z</label>\n                </div>\n              </div>\n              <div class=\"switch row\">\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-xd3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                  data-delay=\"50\" data-tooltip=\"X Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">X Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-yd3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Y Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Y Dot</label>\n                </div>\n                <div class=\"input-field col s4\">\n                  <input value=\"\" id=\"obfit-zd3\" type=\"text\" class=\"tooltipped\" data-position=\"right\"\n                    data-delay=\"50\" data-tooltip=\"Z Dot\">\n                  <label for=\"obfit-lat\" class=\"active\">Z Dot</label>\n                </div>\n              </div>\n              <div class=\"row center\">\n                <button id=\"obfit-submit\" class=\"btn btn-ui waves-effect waves-light\" type=\"submit\"\n                  name=\"action\">Create Analyst Satellite &#9658;\n                </button>\n              </div>\n            </form>\n            <div class=\"row\">\n              <table id=\"obfit\" class=\"center-align striped-light centered\"></table>\n            </div>\n          </div>\n        </div>     \n      "]))));
            // Bottom Icon
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"menu-obfit\" class=\"bmenu-item\">\n          <img\n            alt=\"obfit\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Initial Orbit</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "], ["\n        <div id=\"menu-obfit\" class=\"bmenu-item\">\n          <img\n            alt=\"obfit\"\n            src=\"\"\n            delayedsrc=\"data:image/png;base64,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\"\n          />\n          <span class=\"bmenu-title\">Initial Orbit</span>\n          <div class=\"status-icon\"></div>\n        </div>\n      "]))));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#obfit-menu').resizable({
                handles: 'e',
                stop: function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
                },
                maxWidth: 650,
                minWidth: 400,
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#obfit-form').on('submit', function (e) {
                var t1v, x1v, y1v, z1v, xd1v, yd1v, zd1v;
                var t2v, x2v, y2v, z2v, xd2v, yd2v, zd2v;
                var t3v, x3v, y3v, z3v, xd3v, yd3v, zd3v;
                var isOb1 = true;
                var isOb2 = true;
                var isOb3 = true;
                var t1 = document.getElementById('obfit-t1').value;
                if (t1.length > 0) {
                    t1v = parseFloat(t1);
                }
                else {
                    t1v = NaN;
                }
                var x1 = document.getElementById('obfit-x1').value;
                if (x1.length > 0) {
                    x1v = parseFloat(x1);
                }
                else {
                    x1v = NaN;
                }
                var y1 = document.getElementById('obfit-y1').value;
                if (y1.length > 0) {
                    y1v = parseFloat(y1);
                }
                else {
                    y1v = NaN;
                }
                var z1 = document.getElementById('obfit-z1').value;
                if (z1.length > 0) {
                    z1v = parseFloat(z1);
                }
                else {
                    z1v = NaN;
                }
                var xd1 = document.getElementById('obfit-xd1').value;
                if (xd1.length > 0) {
                    xd1v = parseFloat(xd1);
                }
                else {
                    xd1v = NaN;
                }
                var yd1 = document.getElementById('obfit-yd1').value;
                if (yd1.length > 0) {
                    yd1v = parseFloat(yd1);
                }
                else {
                    yd1v = NaN;
                }
                var zd1 = document.getElementById('obfit-zd1').value;
                if (zd1.length > 0) {
                    zd1v = parseFloat(zd1);
                }
                else {
                    zd1v = NaN;
                }
                var t2 = document.getElementById('obfit-t2').value;
                if (t2.length > 0) {
                    t2v = parseFloat(t2);
                }
                else {
                    isOb2 = false;
                }
                var x2 = document.getElementById('obfit-x2').value;
                if (x2.length > 0) {
                    x2v = parseFloat(x2);
                }
                else {
                    isOb2 = false;
                }
                var y2 = document.getElementById('obfit-y2').value;
                if (y2.length > 0) {
                    y2v = parseFloat(y2);
                }
                else {
                    isOb2 = false;
                }
                var z2 = document.getElementById('obfit-z2').value;
                if (z2.length > 0) {
                    z2v = parseFloat(z2);
                }
                else {
                    isOb2 = false;
                }
                var xd2 = document.getElementById('obfit-xd2').value;
                if (xd2.length > 0) {
                    xd2v = parseFloat(xd2);
                }
                else {
                    isOb2 = false;
                }
                var yd2 = document.getElementById('obfit-yd2').value;
                if (yd2.length > 0) {
                    yd2v = parseFloat(yd2);
                }
                else {
                    isOb2 = false;
                }
                var zd2 = document.getElementById('obfit-zd2').value;
                if (zd2.length > 0) {
                    zd2v = parseFloat(zd2);
                }
                else {
                    isOb2 = false;
                }
                var t3 = document.getElementById('obfit-t3').value;
                if (t3.length > 0) {
                    t3v = parseFloat(t3);
                }
                else {
                    isOb3 = false;
                }
                var x3 = document.getElementById('obfit-x3').value;
                if (x3.length > 0) {
                    x3v = parseFloat(x3);
                }
                else {
                    isOb3 = false;
                }
                var y3 = document.getElementById('obfit-y3').value;
                if (y3.length > 0) {
                    y3v = parseFloat(y3);
                }
                else {
                    isOb3 = false;
                }
                var z3 = document.getElementById('obfit-z3').value;
                if (z3.length > 0) {
                    z3v = parseFloat(z3);
                }
                else {
                    isOb3 = false;
                }
                var xd3 = document.getElementById('obfit-xd3').value;
                if (xd3.length > 0) {
                    xd3v = parseFloat(xd3);
                }
                else {
                    isOb3 = false;
                }
                var yd3 = document.getElementById('obfit-yd3').value;
                if (yd3.length > 0) {
                    yd3v = parseFloat(yd3);
                }
                else {
                    isOb3 = false;
                }
                var zd3 = document.getElementById('obfit-zd3').value;
                if (zd3.length > 0) {
                    zd3v = parseFloat(zd3);
                }
                else {
                    isOb3 = false;
                }
                var svs = [];
                var sv1 = [];
                {
                    if (isOb1 && isNaN(parseFloat(t1))) {
                        isOb1 = false;
                        uiManager.toast("Time 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1 && isNaN(parseFloat(x1))) {
                        isOb1 = false;
                        uiManager.toast("X 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1 && isNaN(parseFloat(y1))) {
                        isOb1 = false;
                        uiManager.toast("Y 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1 && isNaN(parseFloat(z1))) {
                        isOb1 = false;
                        uiManager.toast("Z 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1 && isNaN(parseFloat(xd1))) {
                        isOb1 = false;
                        uiManager.toast("X Dot 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1 && isNaN(parseFloat(yd1))) {
                        isOb1 = false;
                        uiManager.toast("Y Dot 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1 && isNaN(parseFloat(zd1))) {
                        isOb1 = false;
                        uiManager.toast("Z Dot 1 is Invalid!", 'critical');
                        return false;
                    }
                    if (isOb1) {
                        sv1 = [t1v, x1v, y1v, z1v, xd1v, yd1v, zd1v];
                        svs.push(sv1);
                    }
                }
                var sv2 = [];
                {
                    if (isOb2 && isNaN(parseFloat(t2))) {
                        isOb2 = false;
                        uiManager.toast("Time 2 is Invalid!", 'caution');
                    }
                    if (isOb2 && isNaN(parseFloat(x2))) {
                        isOb2 = false;
                        uiManager.toast("X 2 is Invalid!", 'caution');
                    }
                    if (isOb2 && isNaN(parseFloat(y2))) {
                        isOb2 = false;
                        uiManager.toast("Y 2 is Invalid!", 'caution');
                    }
                    if (isOb2 && isNaN(parseFloat(z2))) {
                        isOb2 = false;
                        uiManager.toast("Z 2 is Invalid!", 'caution');
                    }
                    if (isOb2 && isNaN(parseFloat(xd2))) {
                        isOb2 = false;
                        uiManager.toast("X Dot 2 is Invalid!", 'caution');
                    }
                    if (isOb2 && isNaN(parseFloat(yd2))) {
                        isOb2 = false;
                        uiManager.toast("Y Dot 2 is Invalid!", 'caution');
                    }
                    if (isOb2 && isNaN(parseFloat(zd2))) {
                        isOb2 = false;
                        uiManager.toast("Z Dot 2 is Invalid!", 'caution');
                    }
                    if (isOb2) {
                        sv2 = [t2v, x2v, y2v, z2v, xd2v, yd2v, zd2v];
                        svs.push(sv2);
                    }
                }
                isOb3 = !isOb2 ? false : isOb3;
                var sv3 = [];
                {
                    if (isOb3 && isNaN(parseFloat(t3))) {
                        isOb3 = false;
                        uiManager.toast("Time 3 is Invalid!", 'caution');
                    }
                    if (isOb3 && isNaN(parseFloat(x3))) {
                        isOb3 = false;
                        uiManager.toast("X 3 is Invalid!", 'caution');
                    }
                    if (isOb3 && isNaN(parseFloat(y3))) {
                        isOb3 = false;
                        uiManager.toast("Y 3 is Invalid!", 'caution');
                    }
                    if (isOb3 && isNaN(parseFloat(z3))) {
                        isOb3 = false;
                        uiManager.toast("Z 3 is Invalid!", 'caution');
                    }
                    if (isOb3 && isNaN(parseFloat(xd3))) {
                        isOb3 = false;
                        uiManager.toast("X Dot 3 is Invalid!", 'caution');
                    }
                    if (isOb3 && isNaN(parseFloat(yd3))) {
                        isOb3 = false;
                        uiManager.toast("Y Dot 3 is Invalid!", 'caution');
                    }
                    if (isOb3 && isNaN(parseFloat(zd3))) {
                        isOb3 = false;
                        uiManager.toast("Z Dot 3 is Invalid!", 'caution');
                    }
                    if (isOb3) {
                        sv3 = [t3v, x3v, y3v, z3v, xd3v, yd3v, zd3v];
                        svs.push(sv3);
                    }
                }
                console.log(svs);
                _app_js_plugins_initialOrbit_omManager_js__WEBPACK_IMPORTED_MODULE_2__.omManager.svs2analyst(svs, satSet, timeManager, satellite);
                e.preventDefault();
            });
        },
    });
    // Add JavaScript
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'initialOrbit',
        cb: function (iconName) {
            if (iconName === 'menu-obfit') {
                if (isObfitMenuOpen) {
                    isObfitMenuOpen = false;
                    uiManager.hideSideMenus();
                    return;
                }
                else {
                    if (settingsManager.isMobileModeEnabled)
                        uiManager.searchToggle(false);
                    uiManager.hideSideMenus();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#obfit-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                    isObfitMenuOpen = true;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-obfit').addClass('bmenu-item-selected');
                    return;
                }
            }
        },
    });
    _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'initialOrbit',
        cb: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#obfit-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-obfit').removeClass('bmenu-item-selected');
            isObfitMenuOpen = false;
        },
    });
};
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_initialOrbit_initialOrbit_ts.a955a6ba8fcc08c852a7.js.map