/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/external/meuusjs.js":
/*!****************************************!*\
  !*** ./src/js/lib/external/meuusjs.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A)
/* harmony export */ });
/*!
 Copyright (c) 2016 Fabio Soldati, www.peakfinder.org
 License MIT: http://www.opensource.org/licenses/MIT
*/
var A = {
  JMod: 2400000.5,
  J2000: 2451545,
  J1900: 2415020,
  B1900: 2415020.3135,
  B1950: 2433282.4235,
  JulianYear: 365.25,
  JulianCentury: 36525,
  BesselianYear: 365.2421988,
  AU: 149597870
};

A.EclCoord = function (a, b, c) {
  if (isNaN(a) || isNaN(b)) throw Error("Invalid EclCoord object: (" + a + ", " + b + ")");
  this.lat = a;
  this.lng = b;
  void 0 !== c && (this.h = c);
};

A.EclCoord.prototype = {
  toWgs84String: function toWgs84String() {
    return A.Math.formatNum(180 * this.lat / Math.PI) + ", " + A.Math.formatNum(180 * -this.lng / Math.PI);
  }
};

A.EclCoord.fromWgs84 = function (a, b, c) {
  return new A.EclCoord(a * Math.PI / 180, -b * Math.PI / 180, c);
};

A.EqCoord = function (a, b) {
  if (isNaN(a) || isNaN(b)) throw Error("Invalid EqCoord object: (" + a + ", " + b + ")");
  this.ra = a;
  this.dec = b;
};

A.EqCoord.prototype = {
  toString: function toString() {
    return "ra:" + A.Math.formatNum(180 * this.ra / Math.PI) + ", dec:" + A.Math.formatNum(180 * this.dec / Math.PI);
  }
};

A.HzCoord = function (a, b) {
  if (isNaN(a) || isNaN(b)) throw Error("Invalid HzCoord object: (" + a + ", " + b + ")");
  this.az = a;
  this.alt = b;
};

A.HzCoord.prototype = {
  toString: function toString() {
    return "azi:" + A.Math.formatNum(180 * this.az / Math.PI) + ", alt:" + A.Math.formatNum(180 * this.alt / Math.PI);
  }
};
A.Coord = {
  dmsToDeg: function dmsToDeg(a, b, c, d) {
    d = (60 * (60 * b + c) + d) / 3600;
    return a ? -d : d;
  },
  calcAngle: function calcAngle(a, b, c, d) {
    return A.Coord.dmsToDeg(a, b, c, d) * Math.PI / 180;
  },
  calcRA: function calcRA(a, b, c) {
    return A.Coord.dmsToDeg(!1, a, b, c) % 24 * 15 * Math.PI / 180;
  },
  secondsToHMSStr: function secondsToHMSStr(a) {
    var b = Math.floor(a / 86400);
    a = A.Math.pMod(a, 86400);
    var c = Math.floor(a / 3600) % 24,
        d = Math.floor(a / 60) % 60;
    a = Math.floor(a % 60);
    return (0 !== b ? b + "d " : "") + (10 > c ? "0" : "") + c + ":" + (10 > d ? "0" : "") + d + ":" + (10 > a ? "0" : "") + a;
  },
  secondsToHMStr: function secondsToHMStr(a) {
    var b = Math.floor(a / 86400);
    a = A.Math.pMod(a, 86400);
    var c = Math.floor(a / 3600) % 24;
    a = Math.floor(a / 60) % 60;
    return (0 !== b ? b + "d " : "") + (10 > c ? "0" : "") + c + ":" + (10 > a ? "0" : "") + a;
  },
  eqToEcl: function eqToEcl(a, b) {
    var c = Math.sin(a.ra),
        d = Math.sin(a.dec),
        e = Math.cos(a.dec),
        f = Math.sin(b);
    b = Math.cos(b);
    return new A.EclCoord(Math.atan2(c * b + d / e * f, Math.cos(a.ra)), Math.asin(d * b - e * f * c));
  },
  eclToEq: function eclToEq(a, b) {
    var c = Math.sin(a.lat),
        d = Math.sin(a.lng),
        e = Math.cos(a.lng),
        f = Math.sin(b);
    b = Math.cos(b);
    a = Math.atan2(c * b - d / e * f, Math.cos(a.lat));
    0 > a && (a += 2 * Math.PI);
    return new A.EqCoord(a, Math.asin(d * b + e * f * c));
  },
  eqToHz: function eqToHz(a, b, c) {
    c = c - b.lng - a.ra;
    var d = Math.cos(c),
        e = Math.sin(b.lat);
    b = Math.cos(b.lat);
    var f = Math.sin(a.dec);
    a = Math.cos(a.dec);
    return new A.HzCoord(Math.atan2(Math.sin(c), d * e - f / a * b), Math.asin(e * f + b * a * d));
  }
};
A.DeltaT = {
  jdToJde: function jdToJde(a, b) {
    b || (b = A.DeltaT.estimate(a));
    return a + b / 86400;
  },
  jdeToJd: function jdeToJd(a, b) {
    b || (b = A.DeltaT.estimate(a));
    return a - b / 86400;
  },
  decimalYear: function decimalYear(a) {
    a = A.JulianDay.jdToCalendar(a);
    return a.y + (a.m - .5) / 12;
  },
  estimate: function estimate(a) {
    var b = A.DeltaT.decimalYear(a);
    a = Math.pow;
    return -500 > b ? -20 + 32 * a((b - 1820) / 100, 2) : 500 > b ? (b /= 100, 10583.6 - 1014.41 * b + 33.78311 * a(b, 2) - 5.952053 * a(b, 3) - .1798452 * a(b, 4) + .022174192 * a(b, 5) + .0090316521 * a(b, 6)) : 1600 > b ? (b = (b - 1E3) / 100, 1574.2 - 556.01 * b + 71.23472 * a(b, 2) + .319781 * a(b, 3) - .8503463 * a(b, 4) - .005050998 * a(b, 5) + .0083572073 * a(b, 6)) : 1700 > b ? (b -= 1600, 120 - .9808 * b - .01532 * a(b, 2) + a(b, 3) / 7129) : 1800 > b ? (b -= 1700, 8.83 + .1603 * b - .0059285 * a(b, 2) + 1.3336E-4 * a(b, 3) - a(b, 4) / 1174E3) : 1860 > b ? (b -= 1800, 13.72 - .332447 * b + .0068612 * a(b, 2) + .0041116 * a(b, 3) - 3.7436E-4 * a(b, 4) + 1.21272E-5 * a(b, 5) - 1.699E-7 * a(b, 6) + 8.75E-10 * a(b, 7)) : 1900 > b ? (b -= 1860, 7.62 + .5737 * b - .251754 * a(b, 2) + .01680668 * a(b, 3) - 4.473624E-4 * a(b, 4) + a(b, 5) / 233174) : 1920 > b ? (b -= 1900, -2.79 + 1.494119 * b - .0598939 * a(b, 2) + .0061966 * a(b, 3) - 1.97E-4 * a(b, 4)) : 1941 > b ? (b -= 1920, 21.2 + .84493 * b - .0761 * a(b, 2) + .0020936 * a(b, 3)) : 1961 > b ? (b -= 1950, 29.07 + .407 * b - a(b, 2) / 233 + a(b, 3) / 2547) : 1986 > b ? (b -= 1975, 45.45 + 1.067 * b - a(b, 2) / 260 - a(b, 3) / 718) : 2005 > b ? (b -= 2E3, 63.86 + .3345 * b - .060374 * a(b, 2) + .0017275 * a(b, 3) + 6.51814E-4 * a(b, 4) + 2.373599E-5 * a(b, 5)) : 2050 > b ? (b -= 2E3, 62.92 + .32217 * b + .005589 * a(b, 2)) : 2150 > b ? -20 + 32 * a((b - 1820) / 100, 2) - .5628 * (2150 - b) : -20 + 32 * a((b - 1820) / 100, 2);
  }
};
A.Globe = {
  Er: 6378.14,
  Fl: 1 / 298.257,
  parallaxConstants: function parallaxConstants(a, b) {
    b || (b = 0);
    var c = 1 - A.Globe.Fl;
    b = .001 * b / A.Globe.Er;
    return {
      rhoslat: Math.sin(Math.atan(c * Math.tan(a))) * c + b * Math.sin(a),
      rhoclat: Math.cos(Math.atan(c * Math.tan(a))) + b * Math.cos(a)
    };
  }
};
A.Interp = {
  newLen3: function newLen3(a, b, c) {
    if (3 != c.length) throw "Error not 3";
    if (b == a) throw "Error no x range";
    var d = c[1] - c[0],
        e = c[2] - c[1];
    return {
      x1: a,
      x3: b,
      y: c,
      a: d,
      b: e,
      c: e - d,
      abSum: d + e,
      xSum: b + a,
      xDiff: b - a
    };
  },
  interpolateX: function interpolateX(a, b) {
    return A.Interp.interpolateN(a, (2 * b - a.xSum) / a.xDiff);
  },
  interpolateN: function interpolateN(a, b) {
    return a.y[1] + .5 * b * (a.abSum + b * a.c);
  }
};

A.JulianDay = function (a, b) {
  a instanceof Date && (a = A.JulianDay.dateToJD(a));
  this.jd = a;
  this.deltaT = b ? b : A.DeltaT.estimate(this.jd);
  this.jde = A.DeltaT.jdToJde(this.jd, this.deltaT);
};

A.JulianDay.prototype = {
  toCalendar: function toCalendar() {
    return A.JulianDay.jdToCalendar(this.jd);
  },
  toDate: function toDate() {
    return A.JulianDay.jdToDate(this.jd);
  },
  jdJ2000Century: function jdJ2000Century() {
    return (this.jd - A.J2000) / A.JulianCentury;
  },
  jdeJ2000Century: function jdeJ2000Century() {
    return (this.jde - A.J2000) / A.JulianCentury;
  },
  startOfDay: function startOfDay() {
    return new A.JulianDay(Math.floor(this.jde - .5) + .5, this.deltaT);
  }
};
A.JulianDay.gregorianTimeStart = Date.UTC(1582, 9, 4);

A.JulianDay.jdFromGregorian = function (a, b, c) {
  return new A.JulianDay(A.JulianDay.jdFromGregorian(a, b, c));
};

A.JulianDay.jdFromJulian = function (a, b, c) {
  return new A.JulianDay(A.JulianDay.calendarJulianToJD(a, b, c));
};

A.JulianDay.jdFromJDE = function (a) {
  var b = A.DeltaT.estimate(a);
  a = A.DeltaT.jdeToJd(a, b);
  return new A.JulianDay(a, b);
};

A.JulianDay.dateToJD = function (a) {
  var b = a.getUTCDate() + A.JulianDay.secondsFromHMS(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds()) / 86400;
  return a.getTime() < A.JulianDay.gregorianTimeStart ? A.JulianDay.calendarJulianToJD(a.getUTCFullYear(), a.getUTCMonth() + 1, b) : A.JulianDay.calendarGregorianToJD(a.getUTCFullYear(), a.getUTCMonth() + 1, b);
};

A.JulianDay.calendarGregorianToJD = function (a, b, c) {
  if (1 == b || 2 == b) a--, b += 12;
  var d = Math.floor(a / 100);
  return Math.floor(36525 * (a + 4716) / 100) + Math.floor(306 * (b + 1) / 10) + (2 - d + Math.floor(d / 4)) + c - 1524.5;
};

A.JulianDay.calendarJulianToJD = function (a, b, c) {
  if (1 == b || 2 == b) a--, b += 12;
  return Math.floor(36525 * (a + 4716) / 100) + Math.floor(306 * (b + 1) / 10) + c - 1524.5;
};

A.JulianDay.secondsFromHMS = function (a, b, c) {
  return 3600 * a + 60 * b + c;
};

A.JulianDay.jdToDate = function (a) {
  var b = A.JulianDay.jdToCalendar(a);
  a = A.Math.modF(a + .5)[1];
  a = Math.round(86400 * a);
  return new Date(Date.UTC(b.y, b.m - 1, Math.floor(b.d), Math.floor(a / 3600) % 24, Math.floor(a / 60) % 60, Math.floor(a % 60)));
};

A.JulianDay.jdToCalendar = function (a) {
  a = A.Math.modF(a + .5);
  var b = a[0],
      c = b;
  2299151 <= b && (c = Math.floor((100 * b - 186721625) / 3652425), c = b + 1 + c - Math.floor(c / 4));
  var d = c + 1524;
  b = Math.floor((100 * d - 12210) / 36525);
  var e = Math.floor(36525 * b / 100);
  c = Math.floor(1E4 * (d - e) / 306001);
  a = d - e - Math.floor(306001 * c / 1E4) + a[1];
  c = 14 == c || 15 == c ? c - 13 : c - 1;
  return {
    y: 1 == c || 2 == c ? Math.floor(b) - 4715 : Math.floor(b) - 4716,
    m: c,
    d: a
  };
};

A.JulianDay.leapYearGregorian = function (a) {
  return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400;
};

A.JulianDay.dayOfYear = function (a, b, c, d) {
  a = 2;
  d && a--;
  return A.JulianDay._wholeMonths(b, a) + c;
};

A.JulianDay._wholeMonths = function (a, b) {
  return Math.round(275 * a / 9 - (a + 9) / 12 * b - 30);
};

A.Math = {
  pMod: function pMod(a, b) {
    a %= b;
    0 > a && (a += b);
    return a;
  },
  modF: function modF(a) {
    return 0 > a ? (a = -a, [-Math.floor(a), -(a % 1)]) : [Math.floor(a), a % 1];
  },
  horner: function horner(a, b) {
    var c = b.length - 1;
    if (0 >= c) throw "empty array not supported";

    for (var d = b[c]; 0 < c;) {
      c--, d = d * a + b[c];
    }

    return d;
  },
  formatNum: function formatNum(a, b) {
    b = Math.pow(10, b | 4);
    return Math.round(a * b) / b;
  }
};
A.Moon = {
  parallax: function parallax(a) {
    return Math.asin(6378.14 / a);
  },
  apparentEquatorial: function apparentEquatorial(a) {
    var b = A.Moon.geocentricPosition(a),
        c = A.Nutation.nutation(a);
    a = A.Nutation.meanObliquityLaskar(a) + c.deltaobliquity;
    return {
      eq: A.Coord.eclToEq(new A.EclCoord(b.lng + c.deltalng, b.lat), a),
      delta: b.delta
    };
  },
  apparentTopocentric: function apparentTopocentric(a, b, c) {
    var d = A.Moon.apparentEquatorial(a),
        e = A.Globe.parallaxConstants(b.lat, b.h),
        f = A.Moon.parallax(d.delta);
    c || (c = A.Sidereal.apparentInRa(a));
    return {
      eq: A.Parallax.topocentric(d.eq, f, e.rhoslat, e.rhoclat, b.lng, c),
      delta: d.delta
    };
  },
  topocentricPosition: function topocentricPosition(a, b, c) {
    var d = A.Sidereal.apparentInRa(a);
    a = A.Moon.apparentTopocentric(a, b, d);
    var e = A.Coord.eqToHz(a.eq, b, d);
    !0 === c && (e.alt += A.Refraction.bennett2(e.alt));
    b = A.Moon.parallacticAngle(b.lat, d - (b.lng + a.eq.ra), a.eq.dec);
    return {
      hz: e,
      eq: a.eq,
      delta: a.delta,
      q: b
    };
  },
  approxTransit: function approxTransit(a, b) {
    a = a.startOfDay();
    return A.Rise.approxTransit(b, A.Sidereal.apparent0UT(a), A.Moon.apparentTopocentric(a, b).eq);
  },
  approxTimes: function approxTimes(a, b) {
    a = a.startOfDay();
    var c = A.Moon.apparentTopocentric(a, b),
        d = A.Moon.parallax(c.delta);
    d = A.Rise.stdh0Lunar(d);
    a = A.Sidereal.apparent0UT(a);
    return A.Rise.approxTimes(b, d, a, c.eq);
  },
  times: function times(a, b) {
    a = a.startOfDay();
    var c = A.Moon.apparentTopocentric(new A.JulianDay(a.jd - 1, a.deltaT), b),
        d = A.Moon.apparentTopocentric(a, b),
        e = A.Moon.apparentTopocentric(new A.JulianDay(a.jd + 1, a.deltaT), b),
        f = A.Moon.parallax(d.delta);
    f = A.Rise.stdh0Lunar(f);
    var g = A.Sidereal.apparent0UT(a);
    return A.Rise.times(b, a.deltaT, f, g, [c.eq, d.eq, e.eq]);
  },
  parallacticAngle: function parallacticAngle(a, b, c) {
    return Math.atan2(Math.sin(b), Math.tan(a) * Math.cos(c) - Math.sin(c) * Math.cos(b));
  },
  geocentricPosition: function geocentricPosition(a) {
    var b = Math.PI / 180,
        c = a.jdeJ2000Century();
    a = A.Math.pMod(A.Math.horner(c, [218.3164477 * b, 481267.88123421 * b, -.0015786 * b, b / 538841, -b / 65194E3]), 2 * Math.PI);
    var d = A.Math.pMod(A.Math.horner(c, [297.8501921 * b, 445267.1114034 * b, -.0018819 * b, b / 545868, -b / 113065E3]), 2 * Math.PI),
        e = A.Math.pMod(A.Math.horner(c, [357.5291092 * b, 35999.0502909 * b, -1.535E-4 * b, b / 2449E4]), 2 * Math.PI),
        f = A.Math.pMod(A.Math.horner(c, [134.9633964 * b, 477198.8675055 * b, .0087414 * b, b / 69699, -b / 14712E3]), 2 * Math.PI),
        g = A.Math.pMod(A.Math.horner(c, [93.272095 * b, 483202.0175233 * b, -.0036539 * b, -b / 3526E3, b / 86331E4]), 2 * Math.PI),
        l = 119.75 * b + 131.849 * b * c,
        m = 53.09 * b + 479264.29 * b * c,
        h = 313.45 * b + 481266.484 * b * c;
    c = A.Math.horner(c, [1, -.002516, -7.4E-6]);
    var p = c * c;
    m = 3958 * Math.sin(l) + 1962 * Math.sin(a - g) + 318 * Math.sin(m);
    var n = 0;
    l = -2235 * Math.sin(a) + 382 * Math.sin(h) + 175 * Math.sin(l - g) + 175 * Math.sin(l + g) + 127 * Math.sin(a - f) - 115 * Math.sin(a + f);

    for (h = 0; h < A.Moon.ta.length; h++) {
      var k = A.Moon.ta[h];
      var r = d * k[0] + e * k[1] + f * k[2] + g * k[3],
          q = Math.sin(r);
      r = Math.cos(r);

      switch (k[1]) {
        case 0:
          m += k[4] * q;
          n += k[5] * r;
          break;

        case 1:
        case -1:
          m += k[4] * q * c;
          n += k[5] * r * c;
          break;

        case 2:
        case -2:
          m += k[4] * q * p;
          n += k[5] * r * p;
          break;

        default:
          throw "error";
      }
    }

    for (h = 0; h < A.Moon.tb.length; h++) {
      switch (k = A.Moon.tb[h], q = Math.sin(d * k[0] + e * k[1] + f * k[2] + g * k[3]), k[1]) {
        case 0:
          l += k[4] * q;
          break;

        case 1:
        case -1:
          l += k[4] * q * c;
          break;

        case 2:
        case -2:
          l += k[4] * q * p;
          break;

        default:
          throw "error";
      }
    }

    return {
      lng: A.Math.pMod(a, 2 * Math.PI) + 1E-6 * m * b,
      lat: 1E-6 * l * b,
      delta: 385000.56 + .001 * n
    };
  },
  ta: [[0, 0, 1, 0, 6288774, -20905355], [2, 0, -1, 0, 1274027, -3699111], [2, 0, 0, 0, 658314, -2955968], [0, 0, 2, 0, 213618, -569925], [0, 1, 0, 0, -185116, 48888], [0, 0, 0, 2, -114332, -3149], [2, 0, -2, 0, 58793, 246158], [2, -1, -1, 0, 57066, -152138], [2, 0, 1, 0, 53322, -170733], [2, -1, 0, 0, 45758, -204586], [0, 1, -1, 0, -40923, -129620], [1, 0, 0, 0, -34720, 108743], [0, 1, 1, 0, -30383, 104755], [2, 0, 0, -2, 15327, 10321], [0, 0, 1, 2, -12528, 0], [0, 0, 1, -2, 10980, 79661], [4, 0, -1, 0, 10675, -34782], [0, 0, 3, 0, 10034, -23210], [4, 0, -2, 0, 8548, -21636], [2, 1, -1, 0, -7888, 24208], [2, 1, 0, 0, -6766, 30824], [1, 0, -1, 0, -5163, -8379], [1, 1, 0, 0, 4987, -16675], [2, -1, 1, 0, 4036, -12831], [2, 0, 2, 0, 3994, -10445], [4, 0, 0, 0, 3861, -11650], [2, 0, -3, 0, 3665, 14403], [0, 1, -2, 0, -2689, -7003], [2, 0, -1, 2, -2602, 0], [2, -1, -2, 0, 2390, 10056], [1, 0, 1, 0, -2348, 6322], [2, -2, 0, 0, 2236, -9884], [0, 1, 2, 0, -2120, 5751], [0, 2, 0, 0, -2069, 0], [2, -2, -1, 0, 2048, -4950], [2, 0, 1, -2, -1773, 4130], [2, 0, 0, 2, -1595, 0], [4, -1, -1, 0, 1215, -3958], [0, 0, 2, 2, -1110, 0], [3, 0, -1, 0, -892, 3258], [2, 1, 1, 0, -810, 2616], [4, -1, -2, 0, 759, -1897], [0, 2, -1, 0, -713, -2117], [2, 2, -1, 0, -700, 2354], [2, 1, -2, 0, 691, 0], [2, -1, 0, -2, 596, 0], [4, 0, 1, 0, 549, -1423], [0, 0, 4, 0, 537, -1117], [4, -1, 0, 0, 520, -1571], [1, 0, -2, 0, -487, -1739], [2, 1, 0, -2, -399, 0], [0, 0, 2, -2, -381, -4421], [1, 1, 1, 0, 351, 0], [3, 0, -2, 0, -340, 0], [4, 0, -3, 0, 330, 0], [2, -1, 2, 0, 327, 0], [0, 2, 1, 0, -323, 1165], [1, 1, -1, 0, 299, 0], [2, 0, 3, 0, 294, 0], [2, 0, -1, -2, 0, 8752]],
  tb: [[0, 0, 0, 1, 5128122], [0, 0, 1, 1, 280602], [0, 0, 1, -1, 277693], [2, 0, 0, -1, 173237], [2, 0, -1, 1, 55413], [2, 0, -1, -1, 46271], [2, 0, 0, 1, 32573], [0, 0, 2, 1, 17198], [2, 0, 1, -1, 9266], [0, 0, 2, -1, 8822], [2, -1, 0, -1, 8216], [2, 0, -2, -1, 4324], [2, 0, 1, 1, 4200], [2, 1, 0, -1, -3359], [2, -1, -1, 1, 2463], [2, -1, 0, 1, 2211], [2, -1, -1, -1, 2065], [0, 1, -1, -1, -1870], [4, 0, -1, -1, 1828], [0, 1, 0, 1, -1794], [0, 0, 0, 3, -1749], [0, 1, -1, 1, -1565], [1, 0, 0, 1, -1491], [0, 1, 1, 1, -1475], [0, 1, 1, -1, -1410], [0, 1, 0, -1, -1344], [1, 0, 0, -1, -1335], [0, 0, 3, 1, 1107], [4, 0, 0, -1, 1021], [4, 0, -1, 1, 833], [0, 0, 1, -3, 777], [4, 0, -2, 1, 671], [2, 0, 0, -3, 607], [2, 0, 2, -1, 596], [2, -1, 1, -1, 491], [2, 0, -2, 1, -451], [0, 0, 3, -1, 439], [2, 0, 2, 1, 422], [2, 0, -3, -1, 421], [2, 1, -1, 1, -366], [2, 1, 0, 1, -351], [4, 0, 0, 1, 331], [2, -1, 1, 1, 315], [2, -2, 0, -1, 302], [0, 0, 1, 3, -283], [2, 1, 1, -1, -229], [1, 1, 0, -1, 223], [1, 1, 0, 1, 223], [0, 1, -2, -1, -220], [2, 1, -1, -1, -220], [1, 0, 1, 1, -185], [2, -1, -2, -1, 181], [0, 1, 2, 1, -177], [4, 0, -2, -1, 176], [4, -1, -1, -1, 166], [1, 0, 1, -1, -164], [4, 0, 1, -1, 132], [1, 0, -1, -1, -119], [4, -1, 0, -1, 115], [2, -2, 0, 1, 107]]
};
A.MoonIllum = {
  phaseAngleEq: function phaseAngleEq(a, b, c, d) {
    a = A.MoonIllum._coselong(a, c);
    return Math.atan2(d * Math.sin(Math.acos(a)), b - d * a);
  },
  phaseAngleEq2: function phaseAngleEq2(a, b) {
    return Math.acos(-A.MoonIllum._coselong(a, b));
  },
  illuminated: function illuminated(a) {
    return (1 + Math.cos(a)) / 2;
  },
  positionAngle: function positionAngle(a, b) {
    var c = Math.cos(b.dec);
    return Math.atan2(c * Math.sin(b.ra - a.ra), Math.sin(b.dec) * Math.cos(a.dec) - c * Math.sin(a.dec) * Math.cos(b.ra - a.ra));
  },
  _coselong: function _coselong(a, b) {
    return Math.sin(b.dec) * Math.sin(a.dec) + Math.cos(b.dec) * Math.cos(a.dec) * Math.cos(b.ra - a.ra);
  }
};
A.Nutation = {
  nutation: function nutation(a) {
    a = a.jdeJ2000Century();

    for (var b = A.Math.horner(a, [297.85036, 445267.11148, -.0019142, 1 / 189474]) * Math.PI / 180, c = A.Math.horner(a, [357.52772, 35999.05034, -1.603E-4, -1 / 3E5]) * Math.PI / 180, d = A.Math.horner(a, [134.96298, 477198.867398, .0086972, 1 / 5620]) * Math.PI / 180, e = A.Math.horner(a, [93.27191, 483202.017538, -.0036825, 1 / 327270]) * Math.PI / 180, f = A.Math.horner(a, [125.04452, -1934.136261, .0020708, 1 / 45E4]) * Math.PI / 180, g = 0, l = 0, m = A.Nutation.table22A.length - 1; 0 <= m; m--) {
      var h = A.Nutation.table22A[m],
          p = h[0] * b + h[1] * c + h[2] * d + h[3] * e + h[4] * f,
          n = Math.cos(p);
      g += Math.sin(p) * (h[5] + h[6] * a);
      l += n * (h[7] + h[8] * a);
    }

    return {
      deltalng: 1E-4 / 3600 * g * (Math.PI / 180),
      deltaobliquity: 1E-4 / 3600 * l * (Math.PI / 180)
    };
  },
  nutationInRA: function nutationInRA(a) {
    var b = A.Nutation.meanObliquityLaskar(a);
    a = A.Nutation.nutation(a);
    return a.deltalng * Math.cos(b + a.deltaobliquity);
  },
  trueObliquity: function trueObliquity(a) {
    var b = A.Nutation.meanObliquityLaskar(a);
    a = A.Nutation.nutation(a);
    return b + a.deltaobliquity;
  },
  meanObliquity: function meanObliquity(a) {
    return A.Math.horner(a.jdeJ2000Century(), [84381.448 / 3600 * (Math.PI / 180), -46.815 / 3600 * (Math.PI / 180), -5.9E-4 / 3600 * (Math.PI / 180), .001813 / 3600 * (Math.PI / 180)]);
  },
  meanObliquityLaskar: function meanObliquityLaskar(a) {
    return A.Math.horner(.01 * a.jdeJ2000Century(), [84381.448 / 3600 * (Math.PI / 180), -4680.93 / 3600 * (Math.PI / 180), -1.55 / 3600 * (Math.PI / 180), 1999.25 / 3600 * (Math.PI / 180), -51.38 / 3600 * (Math.PI / 180), -249.67 / 3600 * (Math.PI / 180), -39.05 / 3600 * (Math.PI / 180), 7.12 / 3600 * (Math.PI / 180), 27.87 / 3600 * (Math.PI / 180), 5.79 / 3600 * (Math.PI / 180), 2.45 / 3600 * (Math.PI / 180)]);
  },
  table22A: [[0, 0, 0, 0, 1, -171996, -174.2, 92025, 8.9], [-2, 0, 0, 2, 2, -13187, -1.6, 5736, -3.1], [0, 0, 0, 2, 2, -2274, -.2, 977, -.5], [0, 0, 0, 0, 2, 2062, .2, -895, .5], [0, 1, 0, 0, 0, 1426, -3.4, 54, -.1], [0, 0, 1, 0, 0, 712, .1, -7, 0], [-2, 1, 0, 2, 2, -517, 1.2, 224, -.6], [0, 0, 0, 2, 1, -386, -.4, 200, 0], [0, 0, 1, 2, 2, -301, 0, 129, -.1], [-2, -1, 0, 2, 2, 217, -.5, -95, .3], [-2, 0, 1, 0, 0, -158, 0, 0, 0], [-2, 0, 0, 2, 1, 129, .1, -70, 0], [0, 0, -1, 2, 2, 123, 0, -53, 0], [2, 0, 0, 0, 0, 63, 0, 0, 0], [0, 0, 1, 0, 1, 63, .1, -33, 0], [2, 0, -1, 2, 2, -59, 0, 26, 0], [0, 0, -1, 0, 1, -58, -.1, 32, 0], [0, 0, 1, 2, 1, -51, 0, 27, 0], [-2, 0, 2, 0, 0, 48, 0, 0, 0], [0, 0, -2, 2, 1, 46, 0, -24, 0], [2, 0, 0, 2, 2, -38, 0, 16, 0], [0, 0, 2, 2, 2, -31, 0, 13, 0], [0, 0, 2, 0, 0, 29, 0, 0, 0], [-2, 0, 1, 2, 2, 29, 0, -12, 0], [0, 0, 0, 2, 0, 26, 0, 0, 0], [-2, 0, 0, 2, 0, -22, 0, 0, 0], [0, 0, -1, 2, 1, 21, 0, -10, 0], [0, 2, 0, 0, 0, 17, -.1, 0, 0], [2, 0, -1, 0, 1, 16, 0, -8, 0], [-2, 2, 0, 2, 2, -16, .1, 7, 0], [0, 1, 0, 0, 1, -15, 0, 9, 0], [-2, 0, 1, 0, 1, -13, 0, 7, 0], [0, -1, 0, 0, 1, -12, 0, 6, 0], [0, 0, 2, -2, 0, 11, 0, 0, 0], [2, 0, -1, 2, 1, -10, 0, 5, 0], [2, 0, 1, 2, 2, -8, 0, 3, 0], [0, 1, 0, 2, 2, 7, 0, -3, 0], [-2, 1, 1, 0, 0, -7, 0, 0, 0], [0, -1, 0, 2, 2, -7, 0, 3, 0], [2, 0, 0, 2, 1, -7, 0, 3, 0], [2, 0, 1, 0, 0, 6, 0, 0, 0], [-2, 0, 2, 2, 2, 6, 0, -3, 0], [-2, 0, 1, 2, 1, 6, 0, -3, 0], [2, 0, -2, 0, 1, -6, 0, 3, 0], [2, 0, 0, 0, 1, -6, 0, 3, 0], [0, -1, 1, 0, 0, 5, 0, 0, 0], [-2, -1, 0, 2, 1, -5, 0, 3, 0], [-2, 0, 0, 0, 1, -5, 0, 3, 0], [0, 0, 2, 2, 1, -5, 0, 3, 0], [-2, 0, 2, 0, 1, 4, 0, 0, 0], [-2, 1, 0, 2, 1, 4, 0, 0, 0], [0, 0, 1, -2, 0, 4, 0, 0, 0], [-1, 0, 1, 0, 0, -4, 0, 0, 0], [-2, 1, 0, 0, 0, -4, 0, 0, 0], [1, 0, 0, 0, 0, -4, 0, 0, 0], [0, 0, 1, 2, 0, 3, 0, 0, 0], [0, 0, -2, 2, 2, -3, 0, 0, 0], [-1, -1, 1, 0, 0, -3, 0, 0, 0], [0, 1, 1, 0, 0, -3, 0, 0, 0], [0, -1, 1, 2, 2, -3, 0, 0, 0], [2, -1, -1, 2, 2, -3, 0, 0, 0], [0, 0, 3, 2, 2, -3, 0, 0, 0], [2, -1, 0, 2, 2, -3, 0, 0, 0]]
};
A.Parallax = {
  earthsunParallax: 8.794 / 60 / 60 * Math.PI / 180,
  horizontal: function horizontal(a) {
    return 8.794 / 60 / 60 * Math.PI / 180 / a;
  },
  topocentric: function topocentric(a, b, c, d, e, f) {
    e = A.Math.pMod(f - e - a.ra, 2 * Math.PI);
    b = Math.sin(b);
    f = Math.cos(e);
    var g = Math.cos(a.dec);
    e = Math.atan2(-d * b * Math.sin(e), g - d * b * f);
    return new A.EqCoord(a.ra + e, Math.atan2((Math.sin(a.dec) - c * b) * Math.cos(e), g - d * b * f));
  },
  topocentric2: function topocentric2(a, b, c, d, e, f) {
    e = A.Math.pMod(f - e - a.ra, 2 * Math.PI);
    f = Math.cos(a.dec);
    return new A.EqCoord(a.ra + -b * d * Math.sin(e) / f, a.dec + -b * (c * f - d * Math.cos(e) * Math.sin(a.dec)));
  }
};
A.Refraction = {
  bennett: function bennett(a) {
    0 > a && (a = 0);
    var b = Math.PI / 180;
    return b / 60 / Math.tan(a + 7.31 * b * b / (a + 4.4 * b));
  },
  bennett2: function bennett2(a) {
    var b = Math.PI / 180,
        c = 60 / b,
        d = .06 / c;
    c = 14.7 * c * b;
    b *= 13;
    a = A.Refraction.bennett(a);
    return a - d * Math.sin(c * a + b);
  },
  saemundsson: function saemundsson(a) {
    var b = Math.PI / 180;
    return 1.02 * b / 60 / Math.tan(a + 10.3 * b * b / (a + 5.11 * b));
  }
};
A.Rise = {
  meanRefraction: .5667 * Math.PI / 180,
  stdh0Stellar: -.5667 * Math.PI / 180,
  stdh0Solar: -.8333 * Math.PI / 180,
  stdh0LunarMean: .125 * Math.PI / 180,
  stdh0Lunar: function stdh0Lunar(a) {
    return .7275 * a - A.Rise.meanRefraction;
  },
  circumpolar: function circumpolar(a, b, c) {
    a = (Math.sin(b) - Math.sin(a) * Math.sin(c)) / (Math.cos(a) * Math.cos(c));
    return -1 > a || 1 < a ? null : a;
  },
  approxTransit: function approxTransit(a, b, c) {
    return 43200 * (c.ra + a.lng) / Math.PI - b;
  },
  approxTimes: function approxTimes(a, b, c, d) {
    b = A.Rise.circumpolar(a.lat, b, d.dec);
    if (!b) return null;
    b = 43200 * Math.acos(b) / Math.PI;
    a = 43200 * (d.ra + a.lng) / Math.PI - c;
    return {
      transit: A.Math.pMod(a, 86400),
      transitd: Math.floor(a / 86400),
      rise: A.Math.pMod(a - b, 86400),
      rised: Math.floor((a - b) / 86400),
      set: A.Math.pMod(a + b, 86400),
      setd: Math.floor((a + b) / 86400)
    };
  },
  times: function times(a, b, c, d, e) {
    function f(e) {
      var f = A.Math.pMod(d + 360.985647 * e / 360, 86400),
          g = e + b,
          h = A.Interp.interpolateX(l, g);
      g = A.Interp.interpolateX(m, g);
      f = f * Math.PI / 43200 - (a.lng + h);
      h = Math.cos(g);
      return A.Math.pMod(e + (p * Math.sin(g) + n * h * Math.cos(f) - c) / (h * n * Math.sin(f)) * 43200 / Math.PI, 86400);
    }

    var g = A.Rise.approxTimes(a, c, d, e[1]);
    if (!g) return null;
    var l = A.Interp.newLen3(-86400, 86400, [e[0].ra, e[1].ra, e[2].ra]),
        m = A.Interp.newLen3(-86400, 86400, [e[0].dec, e[1].dec, e[2].dec]);
    e = d + 360.985647 * g.transit / 360;
    var h = A.Interp.interpolateX(l, g.transit + b);
    g.transit = A.Math.pMod(g.transit - (e - 43200 * (a.lng + h) / Math.PI), 86400);
    var p = Math.sin(a.lat),
        n = Math.cos(a.lat);
    g.rise = f(g.rise);
    g.set = f(g.set);
    return g;
  }
};
A.Sidereal = {
  iau82: [24110.54841, 8640184.812866, .093104, 6.2E-6],
  jdToCFrac: function jdToCFrac(a) {
    a = A.Math.modF(a.jd + .5);
    return [new A.JulianDay(a[0] - .5).jdJ2000Century(), a[1]];
  },
  mean: function mean(a) {
    return A.Math.pMod(A.Sidereal._mean(a), 86400);
  },
  _mean: function _mean(a) {
    a = A.Sidereal._mean0UT(a);
    return a.s + 86636.55536784 * a.f;
  },
  _meanInRA: function _meanInRA(a) {
    a = A.Sidereal._mean0UT(a);
    return a.s * Math.PI / 43200 + 2.0054758187 * a.f * Math.PI;
  },
  mean0UT: function mean0UT(a) {
    a = A.Sidereal._mean0UT(a);
    return A.Math.pMod(a.s, 86400);
  },
  _mean0UT: function _mean0UT(a) {
    a = A.Sidereal.jdToCFrac(a);
    return {
      s: A.Math.horner(a[0], A.Sidereal.iau82),
      f: a[1]
    };
  },
  apparentInRa: function apparentInRa(a) {
    var b = A.Sidereal._meanInRA(a);

    a = A.Nutation.nutationInRA(a);
    return A.Math.pMod(b + a, 2 * Math.PI);
  },
  apparent: function apparent(a) {
    var b = A.Sidereal._mean(a);

    a = 648E3 * A.Nutation.nutationInRA(a) / Math.PI / 15;
    return A.Math.pMod(b + a, 86400);
  },
  apparentLocal: function apparentLocal(a, b) {
    a = A.Sidereal.apparent(a);
    return A.Math.pMod(a - 43200 * b / Math.PI, 86400);
  },
  apparent0UT: function apparent0UT(a) {
    var b = A.Math.modF(a.jd + .5);
    a = A.Math.modF(a.jde + .5);
    b = A.Math.horner((b[0] - .5 - A.J2000) / 36525, A.Sidereal.iau82) + 86636.55536784 * b[1];
    a = 648E3 * A.Nutation.nutationInRA(new A.JulianDay(a[0])) / Math.PI / 15;
    return A.Math.pMod(b + a, 86400);
  }
};
A.Solar = {
  earthsunDelta: 149597870,
  apparentEquatorial: function apparentEquatorial(a) {
    var b = a.jdJ2000Century(),
        c = A.Solar.node(b);
    b = A.Solar.apparentLongitude(b, c);
    a = A.Nutation.meanObliquityLaskar(a) + .00256 * Math.PI / 180 * Math.cos(c);
    c = Math.sin(b);
    return new A.EqCoord(Math.atan2(Math.cos(a) * c, Math.cos(b)), Math.asin(Math.sin(a) * c));
  },
  apparentTopocentric: function apparentTopocentric(a, b, c) {
    var d = A.Solar.apparentEquatorial(a),
        e = A.Globe.parallaxConstants(b.lat, b.h);
    c || (c = A.Sidereal.apparentInRa(a));
    return A.Parallax.topocentric2(d, A.Parallax.earthsunParallax, e.rhoslat, e.rhoclat, b.lng, c);
  },
  topocentricPosition: function topocentricPosition(a, b, c) {
    var d = A.Sidereal.apparentInRa(a);
    a = A.Solar.apparentTopocentric(a, b, d);
    b = A.Coord.eqToHz(a, b, d);
    !0 === c && (b.alt += A.Refraction.bennett2(b.alt));
    return {
      hz: b,
      eq: a
    };
  },
  approxTransit: function approxTransit(a, b) {
    a = a.startOfDay();
    return A.Rise.approxTransit(b, A.Sidereal.apparent0UT(a), A.Solar.apparentTopocentric(a, b));
  },
  approxTimes: function approxTimes(a, b) {
    var c = a.startOfDay();
    a = A.Solar.apparentTopocentric(c, b);
    var d = A.Rise.stdh0Solar;
    c = A.Sidereal.apparent0UT(c);
    return A.Rise.approxTimes(b, d, c, a);
  },
  times: function times(a, b) {
    a = a.startOfDay();
    var c = A.Solar.apparentTopocentric(new A.JulianDay(a.jd - 1, a.deltaT), b),
        d = A.Solar.apparentTopocentric(a, b),
        e = A.Solar.apparentTopocentric(new A.JulianDay(a.jd + 1, a.deltaT), b),
        f = A.Rise.stdh0Solar,
        g = A.Sidereal.apparent0UT(a);
    return A.Rise.times(b, a.deltaT, f, g, [c, d, e]);
  },
  meanAnomaly: function meanAnomaly(a) {
    return A.Math.horner(a, [357.52911, 35999.05029, -1.537E-4]) * Math.PI / 180;
  },
  trueLongitude: function trueLongitude(a) {
    var b = A.Math.horner(a, [280.46646, 36000.76983, 3.032E-4]) * Math.PI / 180,
        c = A.Solar.meanAnomaly(a);
    a = (A.Math.horner(a, [1.914602, -.004817, -1.4E-5]) * Math.sin(c) + (.019993 - 1.01E-4 * a) * Math.sin(2 * c) + 2.89E-4 * Math.sin(3 * c)) * Math.PI / 180;
    return {
      s: A.Math.pMod(b + a, 2 * Math.PI),
      v: A.Math.pMod(c + a, 2 * Math.PI)
    };
  },
  apparentLongitude: function apparentLongitude(a, b) {
    b || (b = A.Solar.node(a));
    return A.Solar.trueLongitude(a).s - .00569 * Math.PI / 180 - .00478 * Math.PI / 180 * Math.sin(b);
  },
  node: function node(a) {
    return (125.04 - 1934.136 * a) * Math.PI / 180;
  }
};
A.Solistice = {
  march: function march(a) {
    return 1E3 > a ? A.Solistice._eq(a, A.Solistice.mc0) : A.Solistice._eq(a - 2E3, A.Solistice.mc2);
  },
  june: function june(a) {
    return 1E3 > a ? A.Solistice._eq(a, A.Solistice.jc0) : A.Solistice._eq(a - 2E3, A.Solistice.jc2);
  },
  september: function september(a) {
    return 1E3 > a ? A.Solistice._eq(a, A.Solistice.sc0) : A.Solistice._eq(a - 2E3, A.Solistice.sc2);
  },
  december: function december(a) {
    return 1E3 > a ? A.Solistice._eq(a, A.Solistice.dc0) : A.Solistice._eq(a - 2E3, A.Solistice.dc2);
  },
  _eq: function _eq(a, b) {
    a = A.Math.horner(.001 * a, b);
    b = (a - A.J2000) / A.JulianCentury;
    var c = 35999.373 * Math.PI / 180 * b - 2.47 * Math.PI / 180;
    c = 1 + .0334 * Math.cos(c) + 7E-4 * Math.cos(2 * c);

    for (var d = 0, e = this.terms.length - 1; 0 <= e; e--) {
      var f = this.terms[e];
      d += f[0] * Math.cos((f[1] + f[2] * b) * Math.PI / 180);
    }

    return a + 1E-5 * d / c;
  },
  mc0: [1721139.29189, 365242.1374, .06134, .00111, -7.1E-4],
  jc0: [1721233.25401, 365241.72562, -.05232, .00907, 2.5E-4],
  sc0: [1721325.70455, 365242.49558, -.11677, -.00297, 7.4E-4],
  dc0: [1721414.39987, 365242.88257, -.00769, -.00933, -6E-5],
  mc2: [2451623.80984, 365242.37404, .05169, -.00411, -5.7E-4],
  jc2: [2451716.56767, 365241.62603, .00325, .00888, -3E-4],
  sc2: [2451810.21715, 365242.01767, -.11575, .00337, 7.8E-4],
  dc2: [2451900.05952, 365242.74049, -.06223, -.00823, 3.2E-4],
  terms: [[485, 324.96, 1934.136], [203, 337.23, 32964.467], [199, 342.08, 20.186], [182, 27.85, 445267.112], [156, 73.14, 45036.886], [136, 171.52, 22518.443], [77, 222.54, 65928.934], [74, 296.72, 3034.906], [70, 243.58, 9037.513], [58, 119.81, 33718.147], [52, 297.17, 150.678], [50, 21.02, 2281.226], [45, 247.54, 29929.562], [44, 325.15, 31555.956], [29, 60.93, 4443.417], [18, 155.12, 67555.328], [17, 288.79, 4562.452], [16, 198.04, 62894.029], [14, 199.76, 31436.921], [12, 95.39, 14577.848], [12, 287.11, 31931.756], [12, 320.81, 34777.259], [9, 227.73, 1222.114], [8, 15.45, 16859.074]]
};


/***/ }),

/***/ "./src/js/lib/external/numeric.js":
/*!****************************************!*\
  !*** ./src/js/lib/external/numeric.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var numeric =  false ? 0 : exports;

if (typeof __webpack_require__.g !== 'undefined') {
  __webpack_require__.g.numeric = numeric;
}

numeric.version = '1.2.6'; // 1. Utility functions

numeric.bench = function bench(f, interval) {
  var t1, t2, n, i;

  if (typeof interval === 'undefined') {
    interval = 15;
  }

  n = 0.5;
  t1 = new Date();

  while (1) {
    n *= 2;

    for (i = n; i > 3; i -= 4) {
      f();
      f();
      f();
      f();
    }

    while (i > 0) {
      f();
      i--;
    }

    t2 = new Date();
    if (t2 - t1 > interval) break;
  }

  for (i = n; i > 3; i -= 4) {
    f();
    f();
    f();
    f();
  }

  while (i > 0) {
    f();
    i--;
  }

  t2 = new Date();
  return 1000 * (3 * n - 1) / (t2 - t1);
};

numeric._myIndexOf = function _myIndexOf(w) {
  var n = this.length,
      k;

  for (k = 0; k < n; ++k) {
    if (this[k] === w) return k;
  }

  return -1;
};

numeric.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf : numeric._myIndexOf;
numeric.Function = Function;
numeric.precision = 4;
numeric.largeArray = 50;

numeric.prettyPrint = function prettyPrint(x) {
  function fmtnum(x) {
    if (x === 0) {
      return '0';
    }

    if (isNaN(x)) {
      return 'NaN';
    }

    if (x < 0) {
      return '-' + fmtnum(-x);
    }

    if (isFinite(x)) {
      var scale = Math.floor(Math.log(x) / Math.log(10));
      var normalized = x / Math.pow(10, scale);
      var basic = normalized.toPrecision(numeric.precision);

      if (parseFloat(basic) === 10) {
        scale++;
        normalized = 1;
        basic = normalized.toPrecision(numeric.precision);
      }

      return parseFloat(basic).toString() + 'e' + scale.toString();
    }

    return 'Infinity';
  }

  var ret = [];

  function foo(x) {
    var k;

    if (typeof x === 'undefined') {
      ret.push(Array(numeric.precision + 8).join(' '));
      return false;
    }

    if (typeof x === 'string') {
      ret.push('"' + x + '"');
      return false;
    }

    if (typeof x === 'boolean') {
      ret.push(x.toString());
      return false;
    }

    if (typeof x === 'number') {
      var a = fmtnum(x);
      var b = x.toPrecision(numeric.precision);
      var c = parseFloat(x.toString()).toString();
      var d = [a, b, c, parseFloat(b).toString(), parseFloat(c).toString()];

      for (k = 1; k < d.length; k++) {
        if (d[k].length < a.length) a = d[k];
      }

      ret.push(Array(numeric.precision + 8 - a.length).join(' ') + a);
      return false;
    }

    if (x === null) {
      ret.push('null');
      return false;
    }

    if (typeof x === 'function') {
      ret.push(x.toString());
      var flag = false;

      for (k in x) {
        if (x.hasOwnProperty(k)) {
          if (flag) ret.push(',\n');else ret.push('\n{');
          flag = true;
          ret.push(k);
          ret.push(': \n');
          foo(x[k]);
        }
      }

      if (flag) ret.push('}\n');
      return true;
    }

    if (x instanceof Array) {
      if (x.length > numeric.largeArray) {
        ret.push('...Large Array...');
        return true;
      }

      var flag = false;
      ret.push('[');

      for (k = 0; k < x.length; k++) {
        if (k > 0) {
          ret.push(',');
          if (flag) ret.push('\n ');
        }

        flag = foo(x[k]);
      }

      ret.push(']');
      return true;
    }

    ret.push('{');
    var flag = false;

    for (k in x) {
      if (x.hasOwnProperty(k)) {
        if (flag) ret.push(',\n');
        flag = true;
        ret.push(k);
        ret.push(': \n');
        foo(x[k]);
      }
    }

    ret.push('}');
    return true;
  }

  foo(x);
  return ret.join('');
};

numeric.parseDate = function parseDate(d) {
  function foo(d) {
    if (typeof d === 'string') {
      return Date.parse(d.replace(/-/g, '/'));
    }

    if (!(d instanceof Array)) {
      throw new Error('parseDate: parameter must be arrays of strings');
    }

    var ret = [],
        k;

    for (k = 0; k < d.length; k++) {
      ret[k] = foo(d[k]);
    }

    return ret;
  }

  return foo(d);
};

numeric.parseFloat = function parseFloat_(d) {
  function foo(d) {
    if (typeof d === 'string') {
      return parseFloat(d);
    }

    if (!(d instanceof Array)) {
      throw new Error('parseFloat: parameter must be arrays of strings');
    }

    var ret = [],
        k;

    for (k = 0; k < d.length; k++) {
      ret[k] = foo(d[k]);
    }

    return ret;
  }

  return foo(d);
};

numeric.parseCSV = function parseCSV(t) {
  var foo = t.split('\n');
  var j, k;
  var ret = [];
  var pat = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
  var patnum = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;

  var stripper = function stripper(n) {
    return n.substr(0, n.length - 1);
  };

  var count = 0;

  for (k = 0; k < foo.length; k++) {
    var bar = (foo[k] + ',').match(pat),
        baz;

    if (bar.length > 0) {
      ret[count] = [];

      for (j = 0; j < bar.length; j++) {
        baz = stripper(bar[j]);

        if (patnum.test(baz)) {
          ret[count][j] = parseFloat(baz);
        } else ret[count][j] = baz;
      }

      count++;
    }
  }

  return ret;
};

numeric.toCSV = function toCSV(A) {
  var s = numeric.dim(A);
  var i, j, m, n, row, ret;
  m = s[0];
  n = s[1];
  ret = [];

  for (i = 0; i < m; i++) {
    row = [];

    for (j = 0; j < m; j++) {
      row[j] = A[i][j].toString();
    }

    ret[i] = row.join(', ');
  }

  return ret.join('\n') + '\n';
};

numeric.getURL = function getURL(url) {
  var client = new XMLHttpRequest();
  client.overrideMimeType("text/html");
  client.open('GET', url, false);
  client.send();
  return client;
};

numeric.imageURL = function imageURL(img) {
  function base64(A) {
    var n = A.length,
        i,
        x,
        y,
        z,
        p,
        q,
        r,
        s;
    var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var ret = '';

    for (i = 0; i < n; i += 3) {
      x = A[i];
      y = A[i + 1];
      z = A[i + 2];
      p = x >> 2;
      q = ((x & 3) << 4) + (y >> 4);
      r = ((y & 15) << 2) + (z >> 6);
      s = z & 63;

      if (i + 1 >= n) {
        r = s = 64;
      } else if (i + 2 >= n) {
        s = 64;
      }

      ret += key.charAt(p) + key.charAt(q) + key.charAt(r) + key.charAt(s);
    }

    return ret;
  }

  function crc32Array(a, from, to) {
    if (typeof from === 'undefined') {
      from = 0;
    }

    if (typeof to === 'undefined') {
      to = a.length;
    }

    var table = [0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d];
    var crc = -1,
        y = 0,
        n = a.length,
        i;

    for (i = from; i < to; i++) {
      y = (crc ^ a[i]) & 0xff;
      crc = crc >>> 8 ^ table[y];
    }

    return crc ^ -1;
  }

  var h = img[0].length,
      w = img[0][0].length,
      s1,
      s2,
      next,
      k,
      length,
      a,
      b,
      i,
      j,
      adler32,
      crc32;
  var stream = [137, 80, 78, 71, 13, 10, 26, 10, //  0: PNG signature
  0, 0, 0, 13, //  8: IHDR Chunk length
  73, 72, 68, 82, // 12: "IHDR"
  w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, w & 255, // 16: Width
  h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255, // 20: Height
  8, // 24: bit depth
  2, // 25: RGB
  0, // 26: deflate
  0, // 27: no filter
  0, // 28: no interlace
  -1, -2, -3, -4, // 29: CRC
  -5, -6, -7, -8, // 33: IDAT Chunk length
  73, 68, 65, 84, // 37: "IDAT"
  // RFC 1950 header starts here
  8, // 41: RFC1950 CMF
  29 // 42: RFC1950 FLG
  ];
  crc32 = crc32Array(stream, 12, 29);
  stream[29] = crc32 >> 24 & 255;
  stream[30] = crc32 >> 16 & 255;
  stream[31] = crc32 >> 8 & 255;
  stream[32] = crc32 & 255;
  s1 = 1;
  s2 = 0;

  for (i = 0; i < h; i++) {
    if (i < h - 1) {
      stream.push(0);
    } else {
      stream.push(1);
    }

    a = 3 * w + 1 + (i === 0) & 255;
    b = 3 * w + 1 + (i === 0) >> 8 & 255;
    stream.push(a);
    stream.push(b);
    stream.push(~a & 255);
    stream.push(~b & 255);
    if (i === 0) stream.push(0);

    for (j = 0; j < w; j++) {
      for (k = 0; k < 3; k++) {
        a = img[k][i][j];
        if (a > 255) a = 255;else if (a < 0) a = 0;else a = Math.round(a);
        s1 = (s1 + a) % 65521;
        s2 = (s2 + s1) % 65521;
        stream.push(a);
      }
    }

    stream.push(0);
  }

  adler32 = (s2 << 16) + s1;
  stream.push(adler32 >> 24 & 255);
  stream.push(adler32 >> 16 & 255);
  stream.push(adler32 >> 8 & 255);
  stream.push(adler32 & 255);
  length = stream.length - 41;
  stream[33] = length >> 24 & 255;
  stream[34] = length >> 16 & 255;
  stream[35] = length >> 8 & 255;
  stream[36] = length & 255;
  crc32 = crc32Array(stream, 37);
  stream.push(crc32 >> 24 & 255);
  stream.push(crc32 >> 16 & 255);
  stream.push(crc32 >> 8 & 255);
  stream.push(crc32 & 255);
  stream.push(0);
  stream.push(0);
  stream.push(0);
  stream.push(0); //    a = stream.length;

  stream.push(73); // I

  stream.push(69); // E

  stream.push(78); // N

  stream.push(68); // D

  stream.push(174); // CRC1

  stream.push(66); // CRC2

  stream.push(96); // CRC3

  stream.push(130); // CRC4

  return 'data:image/png;base64,' + base64(stream);
}; // 2. Linear algebra with Arrays.


numeric._dim = function _dim(x) {
  var ret = [];

  while (typeof x === 'object') {
    ret.push(x.length);
    x = x[0];
  }

  return ret;
};

numeric.dim = function dim(x) {
  var y, z;

  if (typeof x === 'object') {
    y = x[0];

    if (typeof y === 'object') {
      z = y[0];

      if (typeof z === 'object') {
        return numeric._dim(x);
      }

      return [x.length, y.length];
    }

    return [x.length];
  }

  return [];
};

numeric.mapreduce = function mapreduce(body, init) {
  return Function('x', 'accum', '_s', '_k', 'if(typeof accum === "undefined") accum = ' + init + ';\n' + 'if(typeof x === "number") { var xi = x; ' + body + '; return accum; }\n' + 'if(typeof _s === "undefined") _s = numeric.dim(x);\n' + 'if(typeof _k === "undefined") _k = 0;\n' + 'var _n = _s[_k];\n' + 'var i,xi;\n' + 'if(_k < _s.length-1) {\n' + '    for(i=_n-1;i>=0;i--) {\n' + '        accum = arguments.callee(x[i],accum,_s,_k+1);\n' + '    }' + '    return accum;\n' + '}\n' + 'for(i=_n-1;i>=1;i-=2) { \n' + '    xi = x[i];\n' + '    ' + body + ';\n' + '    xi = x[i-1];\n' + '    ' + body + ';\n' + '}\n' + 'if(i === 0) {\n' + '    xi = x[i];\n' + '    ' + body + '\n' + '}\n' + 'return accum;');
};

numeric.mapreduce2 = function mapreduce2(body, setup) {
  return Function('x', 'var n = x.length;\n' + 'var i,xi;\n' + setup + ';\n' + 'for(i=n-1;i!==-1;--i) { \n' + '    xi = x[i];\n' + '    ' + body + ';\n' + '}\n' + 'return accum;');
};

numeric.same = function same(x, y) {
  var i, n;

  if (!(x instanceof Array) || !(y instanceof Array)) {
    return false;
  }

  n = x.length;

  if (n !== y.length) {
    return false;
  }

  for (i = 0; i < n; i++) {
    if (x[i] === y[i]) {
      continue;
    }

    if (typeof x[i] === 'object') {
      if (!same(x[i], y[i])) return false;
    } else {
      return false;
    }
  }

  return true;
};

numeric.rep = function rep(s, v, k) {
  if (typeof k === 'undefined') {
    k = 0;
  }

  var n = s[k],
      ret = Array(n),
      i;

  if (k === s.length - 1) {
    for (i = n - 2; i >= 0; i -= 2) {
      ret[i + 1] = v;
      ret[i] = v;
    }

    if (i === -1) {
      ret[0] = v;
    }

    return ret;
  }

  for (i = n - 1; i >= 0; i--) {
    ret[i] = numeric.rep(s, v, k + 1);
  }

  return ret;
};

numeric.dotMMsmall = function dotMMsmall(x, y) {
  var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0;
  p = x.length;
  q = y.length;
  r = y[0].length;
  ret = Array(p);

  for (i = p - 1; i >= 0; i--) {
    foo = Array(r);
    bar = x[i];

    for (k = r - 1; k >= 0; k--) {
      woo = bar[q - 1] * y[q - 1][k];

      for (j = q - 2; j >= 1; j -= 2) {
        i0 = j - 1;
        woo += bar[j] * y[j][k] + bar[i0] * y[i0][k];
      }

      if (j === 0) {
        woo += bar[0] * y[0][k];
      }

      foo[k] = woo;
    }

    ret[i] = foo;
  }

  return ret;
};

numeric._getCol = function _getCol(A, j, x) {
  var n = A.length,
      i;

  for (i = n - 1; i > 0; --i) {
    x[i] = A[i][j];
    --i;
    x[i] = A[i][j];
  }

  if (i === 0) x[0] = A[0][j];
};

numeric.dotMMbig = function dotMMbig(x, y) {
  var gc = numeric._getCol,
      p = y.length,
      v = Array(p);
  var m = x.length,
      n = y[0].length,
      A = new Array(m),
      xj;
  var VV = numeric.dotVV;
  var i, j, k, z;
  --p;
  --m;

  for (i = m; i !== -1; --i) {
    A[i] = Array(n);
  }

  --n;

  for (i = n; i !== -1; --i) {
    gc(y, i, v);

    for (j = m; j !== -1; --j) {
      z = 0;
      xj = x[j];
      A[j][i] = VV(xj, v);
    }
  }

  return A;
};

numeric.dotMV = function dotMV(x, y) {
  var p = x.length,
      q = y.length,
      i;
  var ret = Array(p),
      dotVV = numeric.dotVV;

  for (i = p - 1; i >= 0; i--) {
    ret[i] = dotVV(x[i], y);
  }

  return ret;
};

numeric.dotVM = function dotVM(x, y) {
  var i, j, k, p, q, r, ret, foo, bar, woo, i0, k0, p0, r0, s1, s2, s3, baz, accum;
  p = x.length;
  q = y[0].length;
  ret = Array(q);

  for (k = q - 1; k >= 0; k--) {
    woo = x[p - 1] * y[p - 1][k];

    for (j = p - 2; j >= 1; j -= 2) {
      i0 = j - 1;
      woo += x[j] * y[j][k] + x[i0] * y[i0][k];
    }

    if (j === 0) {
      woo += x[0] * y[0][k];
    }

    ret[k] = woo;
  }

  return ret;
};

numeric.dotVV = function dotVV(x, y) {
  var i,
      n = x.length,
      i1,
      ret = x[n - 1] * y[n - 1];

  for (i = n - 2; i >= 1; i -= 2) {
    i1 = i - 1;
    ret += x[i] * y[i] + x[i1] * y[i1];
  }

  if (i === 0) {
    ret += x[0] * y[0];
  }

  return ret;
};

numeric.dot = function dot(x, y) {
  var d = numeric.dim;

  switch (d(x).length * 1000 + d(y).length) {
    case 2002:
      if (y.length < 10) return numeric.dotMMsmall(x, y);else return numeric.dotMMbig(x, y);

    case 2001:
      return numeric.dotMV(x, y);

    case 1002:
      return numeric.dotVM(x, y);

    case 1001:
      return numeric.dotVV(x, y);

    case 1000:
      return numeric.mulVS(x, y);

    case 1:
      return numeric.mulSV(x, y);

    case 0:
      return x * y;

    default:
      throw new Error('numeric.dot only works on vectors and matrices');
  }
};

numeric.diag = function diag(d) {
  var i,
      i1,
      j,
      n = d.length,
      A = Array(n),
      Ai;

  for (i = n - 1; i >= 0; i--) {
    Ai = Array(n);
    i1 = i + 2;

    for (j = n - 1; j >= i1; j -= 2) {
      Ai[j] = 0;
      Ai[j - 1] = 0;
    }

    if (j > i) {
      Ai[j] = 0;
    }

    Ai[i] = d[i];

    for (j = i - 1; j >= 1; j -= 2) {
      Ai[j] = 0;
      Ai[j - 1] = 0;
    }

    if (j === 0) {
      Ai[0] = 0;
    }

    A[i] = Ai;
  }

  return A;
};

numeric.getDiag = function (A) {
  var n = Math.min(A.length, A[0].length),
      i,
      ret = Array(n);

  for (i = n - 1; i >= 1; --i) {
    ret[i] = A[i][i];
    --i;
    ret[i] = A[i][i];
  }

  if (i === 0) {
    ret[0] = A[0][0];
  }

  return ret;
};

numeric.identity = function identity(n) {
  return numeric.diag(numeric.rep([n], 1));
};

numeric.pointwise = function pointwise(params, body, setup) {
  if (typeof setup === 'undefined') {
    setup = '';
  }

  var fun = [];
  var k;
  var avec = /\[i\]$/,
      p,
      thevec = '';
  var haveret = false;

  for (k = 0; k < params.length; k++) {
    if (avec.test(params[k])) {
      p = params[k].substring(0, params[k].length - 3);
      thevec = p;
    } else {
      p = params[k];
    }

    if (p === 'ret') haveret = true;
    fun.push(p);
  }

  fun[params.length] = '_s';
  fun[params.length + 1] = '_k';
  fun[params.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + thevec + ');\n' + 'if(typeof _k === "undefined") _k = 0;\n' + 'var _n = _s[_k];\n' + 'var i' + (haveret ? '' : ', ret = Array(_n)') + ';\n' + 'if(_k < _s.length-1) {\n' + '    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(' + params.join(',') + ',_s,_k+1);\n' + '    return ret;\n' + '}\n' + setup + '\n' + 'for(i=_n-1;i!==-1;--i) {\n' + '    ' + body + '\n' + '}\n' + 'return ret;';
  return Function.apply(null, fun);
};

numeric.pointwise2 = function pointwise2(params, body, setup) {
  if (typeof setup === 'undefined') {
    setup = '';
  }

  var fun = [];
  var k;
  var avec = /\[i\]$/,
      p,
      thevec = '';
  var haveret = false;

  for (k = 0; k < params.length; k++) {
    if (avec.test(params[k])) {
      p = params[k].substring(0, params[k].length - 3);
      thevec = p;
    } else {
      p = params[k];
    }

    if (p === 'ret') haveret = true;
    fun.push(p);
  }

  fun[params.length] = 'var _n = ' + thevec + '.length;\n' + 'var i' + (haveret ? '' : ', ret = Array(_n)') + ';\n' + setup + '\n' + 'for(i=_n-1;i!==-1;--i) {\n' + body + '\n' + '}\n' + 'return ret;';
  return Function.apply(null, fun);
};

numeric._biforeach = function _biforeach(x, y, s, k, f) {
  if (k === s.length - 1) {
    f(x, y);
    return;
  }

  var i,
      n = s[k];

  for (i = n - 1; i >= 0; i--) {
    _biforeach(typeof x === 'object' ? x[i] : x, typeof y === 'object' ? y[i] : y, s, k + 1, f);
  }
};

numeric._biforeach2 = function _biforeach2(x, y, s, k, f) {
  if (k === s.length - 1) {
    return f(x, y);
  }

  var i,
      n = s[k],
      ret = Array(n);

  for (i = n - 1; i >= 0; --i) {
    ret[i] = _biforeach2(typeof x === 'object' ? x[i] : x, typeof y === 'object' ? y[i] : y, s, k + 1, f);
  }

  return ret;
};

numeric._foreach = function _foreach(x, s, k, f) {
  if (k === s.length - 1) {
    f(x);
    return;
  }

  var i,
      n = s[k];

  for (i = n - 1; i >= 0; i--) {
    _foreach(x[i], s, k + 1, f);
  }
};

numeric._foreach2 = function _foreach2(x, s, k, f) {
  if (k === s.length - 1) {
    return f(x);
  }

  var i,
      n = s[k],
      ret = Array(n);

  for (i = n - 1; i >= 0; i--) {
    ret[i] = _foreach2(x[i], s, k + 1, f);
  }

  return ret;
};
/*numeric.anyV = numeric.mapreduce('if(xi) return true;','false');
numeric.allV = numeric.mapreduce('if(!xi) return false;','true');
numeric.any = function(x) { if(typeof x.length === "undefined") return x; return numeric.anyV(x); }
numeric.all = function(x) { if(typeof x.length === "undefined") return x; return numeric.allV(x); }*/


numeric.ops2 = {
  add: '+',
  sub: '-',
  mul: '*',
  div: '/',
  mod: '%',
  and: '&&',
  or: '||',
  eq: '===',
  neq: '!==',
  lt: '<',
  gt: '>',
  leq: '<=',
  geq: '>=',
  band: '&',
  bor: '|',
  bxor: '^',
  lshift: '<<',
  rshift: '>>',
  rrshift: '>>>'
};
numeric.opseq = {
  addeq: '+=',
  subeq: '-=',
  muleq: '*=',
  diveq: '/=',
  modeq: '%=',
  lshifteq: '<<=',
  rshifteq: '>>=',
  rrshifteq: '>>>=',
  bandeq: '&=',
  boreq: '|=',
  bxoreq: '^='
};
numeric.mathfuns = ['abs', 'acos', 'asin', 'atan', 'ceil', 'cos', 'exp', 'floor', 'log', 'round', 'sin', 'sqrt', 'tan', 'isNaN', 'isFinite'];
numeric.mathfuns2 = ['atan2', 'pow', 'max', 'min'];
numeric.ops1 = {
  neg: '-',
  not: '!',
  bnot: '~',
  clone: ''
};
numeric.mapreducers = {
  any: ['if(xi) return true;', 'var accum = false;'],
  all: ['if(!xi) return false;', 'var accum = true;'],
  sum: ['accum += xi;', 'var accum = 0;'],
  prod: ['accum *= xi;', 'var accum = 1;'],
  norm2Squared: ['accum += xi*xi;', 'var accum = 0;'],
  norminf: ['accum = max(accum,abs(xi));', 'var accum = 0, max = Math.max, abs = Math.abs;'],
  norm1: ['accum += abs(xi)', 'var accum = 0, abs = Math.abs;'],
  sup: ['accum = max(accum,xi);', 'var accum = -Infinity, max = Math.max;'],
  inf: ['accum = min(accum,xi);', 'var accum = Infinity, min = Math.min;']
};

(function () {
  var i, o;

  for (i = 0; i < numeric.mathfuns2.length; ++i) {
    o = numeric.mathfuns2[i];
    numeric.ops2[o] = o;
  }

  for (i in numeric.ops2) {
    if (numeric.ops2.hasOwnProperty(i)) {
      o = numeric.ops2[i];
      var code,
          codeeq,
          setup = '';

      if (numeric.myIndexOf.call(numeric.mathfuns2, i) !== -1) {
        setup = 'var ' + o + ' = Math.' + o + ';\n';

        code = function code(r, x, y) {
          return r + ' = ' + o + '(' + x + ',' + y + ')';
        };

        codeeq = function codeeq(x, y) {
          return x + ' = ' + o + '(' + x + ',' + y + ')';
        };
      } else {
        code = function code(r, x, y) {
          return r + ' = ' + x + ' ' + o + ' ' + y;
        };

        if (numeric.opseq.hasOwnProperty(i + 'eq')) {
          codeeq = function codeeq(x, y) {
            return x + ' ' + o + '= ' + y;
          };
        } else {
          codeeq = function codeeq(x, y) {
            return x + ' = ' + x + ' ' + o + ' ' + y;
          };
        }
      }

      numeric[i + 'VV'] = numeric.pointwise2(['x[i]', 'y[i]'], code('ret[i]', 'x[i]', 'y[i]'), setup);
      numeric[i + 'SV'] = numeric.pointwise2(['x', 'y[i]'], code('ret[i]', 'x', 'y[i]'), setup);
      numeric[i + 'VS'] = numeric.pointwise2(['x[i]', 'y'], code('ret[i]', 'x[i]', 'y'), setup);
      numeric[i] = Function('var n = arguments.length, i, x = arguments[0], y;\n' + 'var VV = numeric.' + i + 'VV, VS = numeric.' + i + 'VS, SV = numeric.' + i + 'SV;\n' + 'var dim = numeric.dim;\n' + 'for(i=1;i!==n;++i) { \n' + '  y = arguments[i];\n' + '  if(typeof x === "object") {\n' + '      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n' + '      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n' + '  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n' + '  else ' + codeeq('x', 'y') + '\n' + '}\nreturn x;\n');
      numeric[o] = numeric[i];
      numeric[i + 'eqV'] = numeric.pointwise2(['ret[i]', 'x[i]'], codeeq('ret[i]', 'x[i]'), setup);
      numeric[i + 'eqS'] = numeric.pointwise2(['ret[i]', 'x'], codeeq('ret[i]', 'x'), setup);
      numeric[i + 'eq'] = Function('var n = arguments.length, i, x = arguments[0], y;\n' + 'var V = numeric.' + i + 'eqV, S = numeric.' + i + 'eqS\n' + 'var s = numeric.dim(x);\n' + 'for(i=1;i!==n;++i) { \n' + '  y = arguments[i];\n' + '  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n' + '  else numeric._biforeach(x,y,s,0,S);\n' + '}\nreturn x;\n');
    }
  }

  for (i = 0; i < numeric.mathfuns2.length; ++i) {
    o = numeric.mathfuns2[i];
    delete numeric.ops2[o];
  }

  for (i = 0; i < numeric.mathfuns.length; ++i) {
    o = numeric.mathfuns[i];
    numeric.ops1[o] = o;
  }

  for (i in numeric.ops1) {
    if (numeric.ops1.hasOwnProperty(i)) {
      setup = '';
      o = numeric.ops1[i];

      if (numeric.myIndexOf.call(numeric.mathfuns, i) !== -1) {
        if (Math.hasOwnProperty(o)) setup = 'var ' + o + ' = Math.' + o + ';\n';
      }

      numeric[i + 'eqV'] = numeric.pointwise2(['ret[i]'], 'ret[i] = ' + o + '(ret[i]);', setup);
      numeric[i + 'eq'] = Function('x', 'if(typeof x !== "object") return ' + o + 'x\n' + 'var i;\n' + 'var V = numeric.' + i + 'eqV;\n' + 'var s = numeric.dim(x);\n' + 'numeric._foreach(x,s,0,V);\n' + 'return x;\n');
      numeric[i + 'V'] = numeric.pointwise2(['x[i]'], 'ret[i] = ' + o + '(x[i]);', setup);
      numeric[i] = Function('x', 'if(typeof x !== "object") return ' + o + '(x)\n' + 'var i;\n' + 'var V = numeric.' + i + 'V;\n' + 'var s = numeric.dim(x);\n' + 'return numeric._foreach2(x,s,0,V);\n');
    }
  }

  for (i = 0; i < numeric.mathfuns.length; ++i) {
    o = numeric.mathfuns[i];
    delete numeric.ops1[o];
  }

  for (i in numeric.mapreducers) {
    if (numeric.mapreducers.hasOwnProperty(i)) {
      o = numeric.mapreducers[i];
      numeric[i + 'V'] = numeric.mapreduce2(o[0], o[1]);
      numeric[i] = Function('x', 's', 'k', o[1] + 'if(typeof x !== "object") {' + '    xi = x;\n' + o[0] + ';\n' + '    return accum;\n' + '}' + 'if(typeof s === "undefined") s = numeric.dim(x);\n' + 'if(typeof k === "undefined") k = 0;\n' + 'if(k === s.length-1) return numeric.' + i + 'V(x);\n' + 'var xi;\n' + 'var n = x.length, i;\n' + 'for(i=n-1;i!==-1;--i) {\n' + '   xi = arguments.callee(x[i]);\n' + o[0] + ';\n' + '}\n' + 'return accum;\n');
    }
  }
})();

numeric.truncVV = numeric.pointwise(['x[i]', 'y[i]'], 'ret[i] = round(x[i]/y[i])*y[i];', 'var round = Math.round;');
numeric.truncVS = numeric.pointwise(['x[i]', 'y'], 'ret[i] = round(x[i]/y)*y;', 'var round = Math.round;');
numeric.truncSV = numeric.pointwise(['x', 'y[i]'], 'ret[i] = round(x/y[i])*y[i];', 'var round = Math.round;');

numeric.trunc = function trunc(x, y) {
  if (typeof x === 'object') {
    if (typeof y === 'object') return numeric.truncVV(x, y);
    return numeric.truncVS(x, y);
  }

  if (typeof y === 'object') return numeric.truncSV(x, y);
  return Math.round(x / y) * y;
};

numeric.inv = function inv(x) {
  var s = numeric.dim(x),
      abs = Math.abs,
      m = s[0],
      n = s[1];
  var A = numeric.clone(x),
      Ai,
      Aj;
  var I = numeric.identity(m),
      Ii,
      Ij;
  var i, j, k, x;

  for (j = 0; j < n; ++j) {
    var i0 = -1;
    var v0 = -1;

    for (i = j; i !== m; ++i) {
      k = abs(A[i][j]);

      if (k > v0) {
        i0 = i;
        v0 = k;
      }
    }

    Aj = A[i0];
    A[i0] = A[j];
    A[j] = Aj;
    Ij = I[i0];
    I[i0] = I[j];
    I[j] = Ij;
    x = Aj[j];

    for (k = j; k !== n; ++k) {
      Aj[k] /= x;
    }

    for (k = n - 1; k !== -1; --k) {
      Ij[k] /= x;
    }

    for (i = m - 1; i !== -1; --i) {
      if (i !== j) {
        Ai = A[i];
        Ii = I[i];
        x = Ai[j];

        for (k = j + 1; k !== n; ++k) {
          Ai[k] -= Aj[k] * x;
        }

        for (k = n - 1; k > 0; --k) {
          Ii[k] -= Ij[k] * x;
          --k;
          Ii[k] -= Ij[k] * x;
        }

        if (k === 0) Ii[0] -= Ij[0] * x;
      }
    }
  }

  return I;
};

numeric.det = function det(x) {
  var s = numeric.dim(x);

  if (s.length !== 2 || s[0] !== s[1]) {
    throw new Error('numeric: det() only works on square matrices');
  }

  var n = s[0],
      ret = 1,
      i,
      j,
      k,
      A = numeric.clone(x),
      Aj,
      Ai,
      alpha,
      temp,
      k1,
      k2,
      k3;

  for (j = 0; j < n - 1; j++) {
    k = j;

    for (i = j + 1; i < n; i++) {
      if (Math.abs(A[i][j]) > Math.abs(A[k][j])) {
        k = i;
      }
    }

    if (k !== j) {
      temp = A[k];
      A[k] = A[j];
      A[j] = temp;
      ret *= -1;
    }

    Aj = A[j];

    for (i = j + 1; i < n; i++) {
      Ai = A[i];
      alpha = Ai[j] / Aj[j];

      for (k = j + 1; k < n - 1; k += 2) {
        k1 = k + 1;
        Ai[k] -= Aj[k] * alpha;
        Ai[k1] -= Aj[k1] * alpha;
      }

      if (k !== n) {
        Ai[k] -= Aj[k] * alpha;
      }
    }

    if (Aj[j] === 0) {
      return 0;
    }

    ret *= Aj[j];
  }

  return ret * A[j][j];
};

numeric.transpose = function transpose(x) {
  var i,
      j,
      m = x.length,
      n = x[0].length,
      ret = Array(n),
      A0,
      A1,
      Bj;

  for (j = 0; j < n; j++) {
    ret[j] = Array(m);
  }

  for (i = m - 1; i >= 1; i -= 2) {
    A1 = x[i];
    A0 = x[i - 1];

    for (j = n - 1; j >= 1; --j) {
      Bj = ret[j];
      Bj[i] = A1[j];
      Bj[i - 1] = A0[j];
      --j;
      Bj = ret[j];
      Bj[i] = A1[j];
      Bj[i - 1] = A0[j];
    }

    if (j === 0) {
      Bj = ret[0];
      Bj[i] = A1[0];
      Bj[i - 1] = A0[0];
    }
  }

  if (i === 0) {
    A0 = x[0];

    for (j = n - 1; j >= 1; --j) {
      ret[j][0] = A0[j];
      --j;
      ret[j][0] = A0[j];
    }

    if (j === 0) {
      ret[0][0] = A0[0];
    }
  }

  return ret;
};

numeric.negtranspose = function negtranspose(x) {
  var i,
      j,
      m = x.length,
      n = x[0].length,
      ret = Array(n),
      A0,
      A1,
      Bj;

  for (j = 0; j < n; j++) {
    ret[j] = Array(m);
  }

  for (i = m - 1; i >= 1; i -= 2) {
    A1 = x[i];
    A0 = x[i - 1];

    for (j = n - 1; j >= 1; --j) {
      Bj = ret[j];
      Bj[i] = -A1[j];
      Bj[i - 1] = -A0[j];
      --j;
      Bj = ret[j];
      Bj[i] = -A1[j];
      Bj[i - 1] = -A0[j];
    }

    if (j === 0) {
      Bj = ret[0];
      Bj[i] = -A1[0];
      Bj[i - 1] = -A0[0];
    }
  }

  if (i === 0) {
    A0 = x[0];

    for (j = n - 1; j >= 1; --j) {
      ret[j][0] = -A0[j];
      --j;
      ret[j][0] = -A0[j];
    }

    if (j === 0) {
      ret[0][0] = -A0[0];
    }
  }

  return ret;
};

numeric._random = function _random(s, k) {
  var i,
      n = s[k],
      ret = Array(n),
      rnd;

  if (k === s.length - 1) {
    rnd = Math.random;

    for (i = n - 1; i >= 1; i -= 2) {
      ret[i] = rnd();
      ret[i - 1] = rnd();
    }

    if (i === 0) {
      ret[0] = rnd();
    }

    return ret;
  }

  for (i = n - 1; i >= 0; i--) {
    ret[i] = _random(s, k + 1);
  }

  return ret;
};

numeric.random = function random(s) {
  return numeric._random(s, 0);
};

numeric.norm2 = function norm2(x) {
  return Math.sqrt(numeric.norm2Squared(x));
};

numeric.linspace = function linspace(a, b, n) {
  if (typeof n === 'undefined') n = Math.max(Math.round(b - a) + 1, 1);

  if (n < 2) {
    return n === 1 ? [a] : [];
  }

  var i,
      ret = Array(n);
  n--;

  for (i = n; i >= 0; i--) {
    ret[i] = (i * b + (n - i) * a) / n;
  }

  return ret;
};

numeric.getBlock = function getBlock(x, from, to) {
  var s = numeric.dim(x);

  function foo(x, k) {
    var i,
        a = from[k],
        n = to[k] - a,
        ret = Array(n);

    if (k === s.length - 1) {
      for (i = n; i >= 0; i--) {
        ret[i] = x[i + a];
      }

      return ret;
    }

    for (i = n; i >= 0; i--) {
      ret[i] = foo(x[i + a], k + 1);
    }

    return ret;
  }

  return foo(x, 0);
};

numeric.setBlock = function setBlock(x, from, to, B) {
  var s = numeric.dim(x);

  function foo(x, y, k) {
    var i,
        a = from[k],
        n = to[k] - a;

    if (k === s.length - 1) {
      for (i = n; i >= 0; i--) {
        x[i + a] = y[i];
      }
    }

    for (i = n; i >= 0; i--) {
      foo(x[i + a], y[i], k + 1);
    }
  }

  foo(x, B, 0);
  return x;
};

numeric.getRange = function getRange(A, I, J) {
  var m = I.length,
      n = J.length;
  var i, j;
  var B = Array(m),
      Bi,
      AI;

  for (i = m - 1; i !== -1; --i) {
    B[i] = Array(n);
    Bi = B[i];
    AI = A[I[i]];

    for (j = n - 1; j !== -1; --j) {
      Bi[j] = AI[J[j]];
    }
  }

  return B;
};

numeric.blockMatrix = function blockMatrix(X) {
  var s = numeric.dim(X);
  if (s.length < 4) return numeric.blockMatrix([X]);
  var m = s[0],
      n = s[1],
      M,
      N,
      i,
      j,
      Xij;
  M = 0;
  N = 0;

  for (i = 0; i < m; ++i) {
    M += X[i][0].length;
  }

  for (j = 0; j < n; ++j) {
    N += X[0][j][0].length;
  }

  var Z = Array(M);

  for (i = 0; i < M; ++i) {
    Z[i] = Array(N);
  }

  var I = 0,
      J,
      ZI,
      k,
      l,
      Xijk;

  for (i = 0; i < m; ++i) {
    J = N;

    for (j = n - 1; j !== -1; --j) {
      Xij = X[i][j];
      J -= Xij[0].length;

      for (k = Xij.length - 1; k !== -1; --k) {
        Xijk = Xij[k];
        ZI = Z[I + k];

        for (l = Xijk.length - 1; l !== -1; --l) {
          ZI[J + l] = Xijk[l];
        }
      }
    }

    I += X[i][0].length;
  }

  return Z;
};

numeric.tensor = function tensor(x, y) {
  if (typeof x === 'number' || typeof y === 'number') return numeric.mul(x, y);
  var s1 = numeric.dim(x),
      s2 = numeric.dim(y);

  if (s1.length !== 1 || s2.length !== 1) {
    throw new Error('numeric: tensor product is only defined for vectors');
  }

  var m = s1[0],
      n = s2[0],
      A = Array(m),
      Ai,
      i,
      j,
      xi;

  for (i = m - 1; i >= 0; i--) {
    Ai = Array(n);
    xi = x[i];

    for (j = n - 1; j >= 3; --j) {
      Ai[j] = xi * y[j];
      --j;
      Ai[j] = xi * y[j];
      --j;
      Ai[j] = xi * y[j];
      --j;
      Ai[j] = xi * y[j];
    }

    while (j >= 0) {
      Ai[j] = xi * y[j];
      --j;
    }

    A[i] = Ai;
  }

  return A;
}; // 3. The Tensor type T


numeric.T = function T(x, y) {
  this.x = x;
  this.y = y;
};

numeric.t = function t(x, y) {
  return new numeric.T(x, y);
};

numeric.Tbinop = function Tbinop(rr, rc, cr, cc, setup) {
  var io = numeric.indexOf;

  if (typeof setup !== 'string') {
    var k;
    setup = '';

    for (k in numeric) {
      if (numeric.hasOwnProperty(k) && (rr.indexOf(k) >= 0 || rc.indexOf(k) >= 0 || cr.indexOf(k) >= 0 || cc.indexOf(k) >= 0) && k.length > 1) {
        setup += 'var ' + k + ' = numeric.' + k + ';\n';
      }
    }
  }

  return Function(['y'], 'var x = this;\n' + 'if(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n' + setup + '\n' + 'if(x.y) {' + '  if(y.y) {' + '    return new numeric.T(' + cc + ');\n' + '  }\n' + '  return new numeric.T(' + cr + ');\n' + '}\n' + 'if(y.y) {\n' + '  return new numeric.T(' + rc + ');\n' + '}\n' + 'return new numeric.T(' + rr + ');\n');
};

numeric.T.prototype.add = numeric.Tbinop('add(x.x,y.x)', 'add(x.x,y.x),y.y', 'add(x.x,y.x),x.y', 'add(x.x,y.x),add(x.y,y.y)');
numeric.T.prototype.sub = numeric.Tbinop('sub(x.x,y.x)', 'sub(x.x,y.x),neg(y.y)', 'sub(x.x,y.x),x.y', 'sub(x.x,y.x),sub(x.y,y.y)');
numeric.T.prototype.mul = numeric.Tbinop('mul(x.x,y.x)', 'mul(x.x,y.x),mul(x.x,y.y)', 'mul(x.x,y.x),mul(x.y,y.x)', 'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))');

numeric.T.prototype.reciprocal = function reciprocal() {
  var mul = numeric.mul,
      div = numeric.div;

  if (this.y) {
    var d = numeric.add(mul(this.x, this.x), mul(this.y, this.y));
    return new numeric.T(div(this.x, d), div(numeric.neg(this.y), d));
  }

  return new T(div(1, this.x));
};

numeric.T.prototype.div = function div(y) {
  if (!(y instanceof numeric.T)) y = new numeric.T(y);

  if (y.y) {
    return this.mul(y.reciprocal());
  }

  var div = numeric.div;

  if (this.y) {
    return new numeric.T(div(this.x, y.x), div(this.y, y.x));
  }

  return new numeric.T(div(this.x, y.x));
};

numeric.T.prototype.dot = numeric.Tbinop('dot(x.x,y.x)', 'dot(x.x,y.x),dot(x.x,y.y)', 'dot(x.x,y.x),dot(x.y,y.x)', 'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))');

numeric.T.prototype.transpose = function transpose() {
  var t = numeric.transpose,
      x = this.x,
      y = this.y;

  if (y) {
    return new numeric.T(t(x), t(y));
  }

  return new numeric.T(t(x));
};

numeric.T.prototype.transjugate = function transjugate() {
  var t = numeric.transpose,
      x = this.x,
      y = this.y;

  if (y) {
    return new numeric.T(t(x), numeric.negtranspose(y));
  }

  return new numeric.T(t(x));
};

numeric.Tunop = function Tunop(r, c, s) {
  if (typeof s !== 'string') {
    s = '';
  }

  return Function('var x = this;\n' + s + '\n' + 'if(x.y) {' + '  ' + c + ';\n' + '}\n' + r + ';\n');
};

numeric.T.prototype.exp = numeric.Tunop('return new numeric.T(ex)', 'return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))', 'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;');
numeric.T.prototype.conj = numeric.Tunop('return new numeric.T(x.x);', 'return new numeric.T(x.x,numeric.neg(x.y));');
numeric.T.prototype.neg = numeric.Tunop('return new numeric.T(neg(x.x));', 'return new numeric.T(neg(x.x),neg(x.y));', 'var neg = numeric.neg;');
numeric.T.prototype.sin = numeric.Tunop('return new numeric.T(numeric.sin(x.x))', 'return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));');
numeric.T.prototype.cos = numeric.Tunop('return new numeric.T(numeric.cos(x.x))', 'return x.exp().add(x.neg().exp()).div(2);');
numeric.T.prototype.abs = numeric.Tunop('return new numeric.T(numeric.abs(x.x));', 'return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));', 'var mul = numeric.mul;');
numeric.T.prototype.log = numeric.Tunop('return new numeric.T(numeric.log(x.x));', 'var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\n' + 'return new numeric.T(numeric.log(r.x),theta.x);');
numeric.T.prototype.norm2 = numeric.Tunop('return numeric.norm2(x.x);', 'var f = numeric.norm2Squared;\n' + 'return Math.sqrt(f(x.x)+f(x.y));');

numeric.T.prototype.inv = function inv() {
  var A = this;

  if (typeof A.y === 'undefined') {
    return new numeric.T(numeric.inv(A.x));
  }

  var n = A.x.length,
      i,
      j,
      k;
  var Rx = numeric.identity(n),
      Ry = numeric.rep([n, n], 0);
  var Ax = numeric.clone(A.x),
      Ay = numeric.clone(A.y);
  var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
  var i, j, k, d, d1, ax, ay, bx, by, temp;

  for (i = 0; i < n; i++) {
    ax = Ax[i][i];
    ay = Ay[i][i];
    d = ax * ax + ay * ay;
    k = i;

    for (j = i + 1; j < n; j++) {
      ax = Ax[j][i];
      ay = Ay[j][i];
      d1 = ax * ax + ay * ay;

      if (d1 > d) {
        k = j;
        d = d1;
      }
    }

    if (k !== i) {
      temp = Ax[i];
      Ax[i] = Ax[k];
      Ax[k] = temp;
      temp = Ay[i];
      Ay[i] = Ay[k];
      Ay[k] = temp;
      temp = Rx[i];
      Rx[i] = Rx[k];
      Rx[k] = temp;
      temp = Ry[i];
      Ry[i] = Ry[k];
      Ry[k] = temp;
    }

    Aix = Ax[i];
    Aiy = Ay[i];
    Rix = Rx[i];
    Riy = Ry[i];
    ax = Aix[i];
    ay = Aiy[i];

    for (j = i + 1; j < n; j++) {
      bx = Aix[j];
      by = Aiy[j];
      Aix[j] = (bx * ax + by * ay) / d;
      Aiy[j] = (by * ax - bx * ay) / d;
    }

    for (j = 0; j < n; j++) {
      bx = Rix[j];
      by = Riy[j];
      Rix[j] = (bx * ax + by * ay) / d;
      Riy[j] = (by * ax - bx * ay) / d;
    }

    for (j = i + 1; j < n; j++) {
      Ajx = Ax[j];
      Ajy = Ay[j];
      Rjx = Rx[j];
      Rjy = Ry[j];
      ax = Ajx[i];
      ay = Ajy[i];

      for (k = i + 1; k < n; k++) {
        bx = Aix[k];
        by = Aiy[k];
        Ajx[k] -= bx * ax - by * ay;
        Ajy[k] -= by * ax + bx * ay;
      }

      for (k = 0; k < n; k++) {
        bx = Rix[k];
        by = Riy[k];
        Rjx[k] -= bx * ax - by * ay;
        Rjy[k] -= by * ax + bx * ay;
      }
    }
  }

  for (i = n - 1; i > 0; i--) {
    Rix = Rx[i];
    Riy = Ry[i];

    for (j = i - 1; j >= 0; j--) {
      Rjx = Rx[j];
      Rjy = Ry[j];
      ax = Ax[j][i];
      ay = Ay[j][i];

      for (k = n - 1; k >= 0; k--) {
        bx = Rix[k];
        by = Riy[k];
        Rjx[k] -= ax * bx - ay * by;
        Rjy[k] -= ax * by + ay * bx;
      }
    }
  }

  return new numeric.T(Rx, Ry);
};

numeric.T.prototype.get = function get(i) {
  var x = this.x,
      y = this.y,
      k = 0,
      ik,
      n = i.length;

  if (y) {
    while (k < n) {
      ik = i[k];
      x = x[ik];
      y = y[ik];
      k++;
    }

    return new numeric.T(x, y);
  }

  while (k < n) {
    ik = i[k];
    x = x[ik];
    k++;
  }

  return new numeric.T(x);
};

numeric.T.prototype.set = function set(i, v) {
  var x = this.x,
      y = this.y,
      k = 0,
      ik,
      n = i.length,
      vx = v.x,
      vy = v.y;

  if (n === 0) {
    if (vy) {
      this.y = vy;
    } else if (y) {
      this.y = undefined;
    }

    this.x = x;
    return this;
  }

  if (vy) {
    if (y) {
      /* ok */
    } else {
      y = numeric.rep(numeric.dim(x), 0);
      this.y = y;
    }

    while (k < n - 1) {
      ik = i[k];
      x = x[ik];
      y = y[ik];
      k++;
    }

    ik = i[k];
    x[ik] = vx;
    y[ik] = vy;
    return this;
  }

  if (y) {
    while (k < n - 1) {
      ik = i[k];
      x = x[ik];
      y = y[ik];
      k++;
    }

    ik = i[k];
    x[ik] = vx;
    if (vx instanceof Array) y[ik] = numeric.rep(numeric.dim(vx), 0);else y[ik] = 0;
    return this;
  }

  while (k < n - 1) {
    ik = i[k];
    x = x[ik];
    k++;
  }

  ik = i[k];
  x[ik] = vx;
  return this;
};

numeric.T.prototype.getRows = function getRows(i0, i1) {
  var n = i1 - i0 + 1,
      j;
  var rx = Array(n),
      ry,
      x = this.x,
      y = this.y;

  for (j = i0; j <= i1; j++) {
    rx[j - i0] = x[j];
  }

  if (y) {
    ry = Array(n);

    for (j = i0; j <= i1; j++) {
      ry[j - i0] = y[j];
    }

    return new numeric.T(rx, ry);
  }

  return new numeric.T(rx);
};

numeric.T.prototype.setRows = function setRows(i0, i1, A) {
  var j;
  var rx = this.x,
      ry = this.y,
      x = A.x,
      y = A.y;

  for (j = i0; j <= i1; j++) {
    rx[j] = x[j - i0];
  }

  if (y) {
    if (!ry) {
      ry = numeric.rep(numeric.dim(rx), 0);
      this.y = ry;
    }

    for (j = i0; j <= i1; j++) {
      ry[j] = y[j - i0];
    }
  } else if (ry) {
    for (j = i0; j <= i1; j++) {
      ry[j] = numeric.rep([x[j - i0].length], 0);
    }
  }

  return this;
};

numeric.T.prototype.getRow = function getRow(k) {
  var x = this.x,
      y = this.y;

  if (y) {
    return new numeric.T(x[k], y[k]);
  }

  return new numeric.T(x[k]);
};

numeric.T.prototype.setRow = function setRow(i, v) {
  var rx = this.x,
      ry = this.y,
      x = v.x,
      y = v.y;
  rx[i] = x;

  if (y) {
    if (!ry) {
      ry = numeric.rep(numeric.dim(rx), 0);
      this.y = ry;
    }

    ry[i] = y;
  } else if (ry) {
    ry = numeric.rep([x.length], 0);
  }

  return this;
};

numeric.T.prototype.getBlock = function getBlock(from, to) {
  var x = this.x,
      y = this.y,
      b = numeric.getBlock;

  if (y) {
    return new numeric.T(b(x, from, to), b(y, from, to));
  }

  return new numeric.T(b(x, from, to));
};

numeric.T.prototype.setBlock = function setBlock(from, to, A) {
  if (!(A instanceof numeric.T)) A = new numeric.T(A);
  var x = this.x,
      y = this.y,
      b = numeric.setBlock,
      Ax = A.x,
      Ay = A.y;

  if (Ay) {
    if (!y) {
      this.y = numeric.rep(numeric.dim(this), 0);
      y = this.y;
    }

    b(x, from, to, Ax);
    b(y, from, to, Ay);
    return this;
  }

  b(x, from, to, Ax);
  if (y) b(y, from, to, numeric.rep(numeric.dim(Ax), 0));
};

numeric.T.rep = function rep(s, v) {
  var T = numeric.T;
  if (!(v instanceof T)) v = new T(v);
  var x = v.x,
      y = v.y,
      r = numeric.rep;
  if (y) return new T(r(s, x), r(s, y));
  return new T(r(s, x));
};

numeric.T.diag = function diag(d) {
  if (!(d instanceof numeric.T)) d = new numeric.T(d);
  var x = d.x,
      y = d.y,
      diag = numeric.diag;
  if (y) return new numeric.T(diag(x), diag(y));
  return new numeric.T(diag(x));
};

numeric.T.eig = function eig() {
  if (this.y) {
    throw new Error('eig: not implemented for complex matrices.');
  }

  return numeric.eig(this.x);
};

numeric.T.identity = function identity(n) {
  return new numeric.T(numeric.identity(n));
};

numeric.T.prototype.getDiag = function getDiag() {
  var n = numeric;
  var x = this.x,
      y = this.y;

  if (y) {
    return new n.T(n.getDiag(x), n.getDiag(y));
  }

  return new n.T(n.getDiag(x));
}; // 4. Eigenvalues of real matrices


numeric.house = function house(x) {
  var v = numeric.clone(x);
  var s = x[0] >= 0 ? 1 : -1;
  var alpha = s * numeric.norm2(x);
  v[0] += alpha;
  var foo = numeric.norm2(v);

  if (foo === 0) {
    /* this should not happen */
    throw new Error('eig: internal error');
  }

  return numeric.div(v, foo);
};

numeric.toUpperHessenberg = function toUpperHessenberg(me) {
  var s = numeric.dim(me);

  if (s.length !== 2 || s[0] !== s[1]) {
    throw new Error('numeric: toUpperHessenberg() only works on square matrices');
  }

  var m = s[0],
      i,
      j,
      k,
      x,
      v,
      A = numeric.clone(me),
      B,
      C,
      Ai,
      Ci,
      Q = numeric.identity(m),
      Qi;

  for (j = 0; j < m - 2; j++) {
    x = Array(m - j - 1);

    for (i = j + 1; i < m; i++) {
      x[i - j - 1] = A[i][j];
    }

    if (numeric.norm2(x) > 0) {
      v = numeric.house(x);
      B = numeric.getBlock(A, [j + 1, j], [m - 1, m - 1]);
      C = numeric.tensor(v, numeric.dot(v, B));

      for (i = j + 1; i < m; i++) {
        Ai = A[i];
        Ci = C[i - j - 1];

        for (k = j; k < m; k++) {
          Ai[k] -= 2 * Ci[k - j];
        }
      }

      B = numeric.getBlock(A, [0, j + 1], [m - 1, m - 1]);
      C = numeric.tensor(numeric.dot(B, v), v);

      for (i = 0; i < m; i++) {
        Ai = A[i];
        Ci = C[i];

        for (k = j + 1; k < m; k++) {
          Ai[k] -= 2 * Ci[k - j - 1];
        }
      }

      B = Array(m - j - 1);

      for (i = j + 1; i < m; i++) {
        B[i - j - 1] = Q[i];
      }

      C = numeric.tensor(v, numeric.dot(v, B));

      for (i = j + 1; i < m; i++) {
        Qi = Q[i];
        Ci = C[i - j - 1];

        for (k = 0; k < m; k++) {
          Qi[k] -= 2 * Ci[k];
        }
      }
    }
  }

  return {
    H: A,
    Q: Q
  };
};

numeric.epsilon = 2.220446049250313e-16;

numeric.QRFrancis = function (H, maxiter) {
  if (typeof maxiter === 'undefined') {
    maxiter = 10000;
  }

  H = numeric.clone(H);
  var H0 = numeric.clone(H);
  var s = numeric.dim(H),
      m = s[0],
      x,
      v,
      a,
      b,
      c,
      d,
      det,
      tr,
      Hloc,
      Q = numeric.identity(m),
      Qi,
      Hi,
      B,
      C,
      Ci,
      i,
      j,
      k,
      iter;

  if (m < 3) {
    return {
      Q: Q,
      B: [[0, m - 1]]
    };
  }

  var epsilon = numeric.epsilon;

  for (iter = 0; iter < maxiter; iter++) {
    for (j = 0; j < m - 1; j++) {
      if (Math.abs(H[j + 1][j]) < epsilon * (Math.abs(H[j][j]) + Math.abs(H[j + 1][j + 1]))) {
        var QH1 = numeric.QRFrancis(numeric.getBlock(H, [0, 0], [j, j]), maxiter);
        var QH2 = numeric.QRFrancis(numeric.getBlock(H, [j + 1, j + 1], [m - 1, m - 1]), maxiter);
        B = Array(j + 1);

        for (i = 0; i <= j; i++) {
          B[i] = Q[i];
        }

        C = numeric.dot(QH1.Q, B);

        for (i = 0; i <= j; i++) {
          Q[i] = C[i];
        }

        B = Array(m - j - 1);

        for (i = j + 1; i < m; i++) {
          B[i - j - 1] = Q[i];
        }

        C = numeric.dot(QH2.Q, B);

        for (i = j + 1; i < m; i++) {
          Q[i] = C[i - j - 1];
        }

        return {
          Q: Q,
          B: QH1.B.concat(numeric.add(QH2.B, j + 1))
        };
      }
    }

    a = H[m - 2][m - 2];
    b = H[m - 2][m - 1];
    c = H[m - 1][m - 2];
    d = H[m - 1][m - 1];
    tr = a + d;
    det = a * d - b * c;
    Hloc = numeric.getBlock(H, [0, 0], [2, 2]);

    if (tr * tr >= 4 * det) {
      var s1, s2;
      s1 = 0.5 * (tr + Math.sqrt(tr * tr - 4 * det));
      s2 = 0.5 * (tr - Math.sqrt(tr * tr - 4 * det));
      Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc), numeric.mul(Hloc, s1 + s2)), numeric.diag(numeric.rep([3], s1 * s2)));
    } else {
      Hloc = numeric.add(numeric.sub(numeric.dot(Hloc, Hloc), numeric.mul(Hloc, tr)), numeric.diag(numeric.rep([3], det)));
    }

    x = [Hloc[0][0], Hloc[1][0], Hloc[2][0]];
    v = numeric.house(x);
    B = [H[0], H[1], H[2]];
    C = numeric.tensor(v, numeric.dot(v, B));

    for (i = 0; i < 3; i++) {
      Hi = H[i];
      Ci = C[i];

      for (k = 0; k < m; k++) {
        Hi[k] -= 2 * Ci[k];
      }
    }

    B = numeric.getBlock(H, [0, 0], [m - 1, 2]);
    C = numeric.tensor(numeric.dot(B, v), v);

    for (i = 0; i < m; i++) {
      Hi = H[i];
      Ci = C[i];

      for (k = 0; k < 3; k++) {
        Hi[k] -= 2 * Ci[k];
      }
    }

    B = [Q[0], Q[1], Q[2]];
    C = numeric.tensor(v, numeric.dot(v, B));

    for (i = 0; i < 3; i++) {
      Qi = Q[i];
      Ci = C[i];

      for (k = 0; k < m; k++) {
        Qi[k] -= 2 * Ci[k];
      }
    }

    var J;

    for (j = 0; j < m - 2; j++) {
      for (k = j; k <= j + 1; k++) {
        if (Math.abs(H[k + 1][k]) < epsilon * (Math.abs(H[k][k]) + Math.abs(H[k + 1][k + 1]))) {
          var QH1 = numeric.QRFrancis(numeric.getBlock(H, [0, 0], [k, k]), maxiter);
          var QH2 = numeric.QRFrancis(numeric.getBlock(H, [k + 1, k + 1], [m - 1, m - 1]), maxiter);
          B = Array(k + 1);

          for (i = 0; i <= k; i++) {
            B[i] = Q[i];
          }

          C = numeric.dot(QH1.Q, B);

          for (i = 0; i <= k; i++) {
            Q[i] = C[i];
          }

          B = Array(m - k - 1);

          for (i = k + 1; i < m; i++) {
            B[i - k - 1] = Q[i];
          }

          C = numeric.dot(QH2.Q, B);

          for (i = k + 1; i < m; i++) {
            Q[i] = C[i - k - 1];
          }

          return {
            Q: Q,
            B: QH1.B.concat(numeric.add(QH2.B, k + 1))
          };
        }
      }

      J = Math.min(m - 1, j + 3);
      x = Array(J - j);

      for (i = j + 1; i <= J; i++) {
        x[i - j - 1] = H[i][j];
      }

      v = numeric.house(x);
      B = numeric.getBlock(H, [j + 1, j], [J, m - 1]);
      C = numeric.tensor(v, numeric.dot(v, B));

      for (i = j + 1; i <= J; i++) {
        Hi = H[i];
        Ci = C[i - j - 1];

        for (k = j; k < m; k++) {
          Hi[k] -= 2 * Ci[k - j];
        }
      }

      B = numeric.getBlock(H, [0, j + 1], [m - 1, J]);
      C = numeric.tensor(numeric.dot(B, v), v);

      for (i = 0; i < m; i++) {
        Hi = H[i];
        Ci = C[i];

        for (k = j + 1; k <= J; k++) {
          Hi[k] -= 2 * Ci[k - j - 1];
        }
      }

      B = Array(J - j);

      for (i = j + 1; i <= J; i++) {
        B[i - j - 1] = Q[i];
      }

      C = numeric.tensor(v, numeric.dot(v, B));

      for (i = j + 1; i <= J; i++) {
        Qi = Q[i];
        Ci = C[i - j - 1];

        for (k = 0; k < m; k++) {
          Qi[k] -= 2 * Ci[k];
        }
      }
    }
  }

  throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
};

numeric.eig = function eig(A, maxiter) {
  var QH = numeric.toUpperHessenberg(A);
  var QB = numeric.QRFrancis(QH.H, maxiter);
  var T = numeric.T;
  var n = A.length,
      i,
      k,
      flag = false,
      B = QB.B,
      H = numeric.dot(QB.Q, numeric.dot(QH.H, numeric.transpose(QB.Q)));
  var Q = new T(numeric.dot(QB.Q, QH.Q)),
      Q0;
  var m = B.length,
      j;
  var a, b, c, d, p1, p2, disc, x, y, p, q, n1, n2;
  var sqrt = Math.sqrt;

  for (k = 0; k < m; k++) {
    i = B[k][0];

    if (i === B[k][1]) {// nothing
    } else {
      j = i + 1;
      a = H[i][i];
      b = H[i][j];
      c = H[j][i];
      d = H[j][j];
      if (b === 0 && c === 0) continue;
      p1 = -a - d;
      p2 = a * d - b * c;
      disc = p1 * p1 - 4 * p2;

      if (disc >= 0) {
        if (p1 < 0) x = -0.5 * (p1 - sqrt(disc));else x = -0.5 * (p1 + sqrt(disc));
        n1 = (a - x) * (a - x) + b * b;
        n2 = c * c + (d - x) * (d - x);

        if (n1 > n2) {
          n1 = sqrt(n1);
          p = (a - x) / n1;
          q = b / n1;
        } else {
          n2 = sqrt(n2);
          p = c / n2;
          q = (d - x) / n2;
        }

        Q0 = new T([[q, -p], [p, q]]);
        Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
      } else {
        x = -0.5 * p1;
        y = 0.5 * sqrt(-disc);
        n1 = (a - x) * (a - x) + b * b;
        n2 = c * c + (d - x) * (d - x);

        if (n1 > n2) {
          n1 = sqrt(n1 + y * y);
          p = (a - x) / n1;
          q = b / n1;
          x = 0;
          y /= n1;
        } else {
          n2 = sqrt(n2 + y * y);
          p = c / n2;
          q = (d - x) / n2;
          x = y / n2;
          y = 0;
        }

        Q0 = new T([[q, -p], [p, q]], [[x, y], [y, -x]]);
        Q.setRows(i, j, Q0.dot(Q.getRows(i, j)));
      }
    }
  }

  var R = Q.dot(A).dot(Q.transjugate()),
      n = A.length,
      E = numeric.T.identity(n);

  for (j = 0; j < n; j++) {
    if (j > 0) {
      for (k = j - 1; k >= 0; k--) {
        var Rk = R.get([k, k]),
            Rj = R.get([j, j]);

        if (numeric.neq(Rk.x, Rj.x) || numeric.neq(Rk.y, Rj.y)) {
          x = R.getRow(k).getBlock([k], [j - 1]);
          y = E.getRow(j).getBlock([k], [j - 1]);
          E.set([j, k], R.get([k, j]).neg().sub(x.dot(y)).div(Rk.sub(Rj)));
        } else {
          E.setRow(j, E.getRow(k));
          continue;
        }
      }
    }
  }

  for (j = 0; j < n; j++) {
    x = E.getRow(j);
    E.setRow(j, x.div(x.norm2()));
  }

  E = E.transpose();
  E = Q.transjugate().dot(E);
  return {
    lambda: R.getDiag(),
    E: E
  };
}; // 5. Compressed Column Storage matrices


numeric.ccsSparse = function ccsSparse(A) {
  var m = A.length,
      n,
      foo,
      i,
      j,
      counts = [];

  for (i = m - 1; i !== -1; --i) {
    foo = A[i];

    for (j in foo) {
      j = parseInt(j);

      while (j >= counts.length) {
        counts[counts.length] = 0;
      }

      if (foo[j] !== 0) counts[j]++;
    }
  }

  var n = counts.length;
  var Ai = Array(n + 1);
  Ai[0] = 0;

  for (i = 0; i < n; ++i) {
    Ai[i + 1] = Ai[i] + counts[i];
  }

  var Aj = Array(Ai[n]),
      Av = Array(Ai[n]);

  for (i = m - 1; i !== -1; --i) {
    foo = A[i];

    for (j in foo) {
      if (foo[j] !== 0) {
        counts[j]--;
        Aj[Ai[j] + counts[j]] = i;
        Av[Ai[j] + counts[j]] = foo[j];
      }
    }
  }

  return [Ai, Aj, Av];
};

numeric.ccsFull = function ccsFull(A) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2],
      s = numeric.ccsDim(A),
      m = s[0],
      n = s[1],
      i,
      j,
      j0,
      j1,
      k;
  var B = numeric.rep([m, n], 0);

  for (i = 0; i < n; i++) {
    j0 = Ai[i];
    j1 = Ai[i + 1];

    for (j = j0; j < j1; ++j) {
      B[Aj[j]][i] = Av[j];
    }
  }

  return B;
};

numeric.ccsTSolve = function ccsTSolve(A, b, x, bj, xj) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2],
      m = Ai.length - 1,
      max = Math.max,
      n = 0;
  if (typeof bj === 'undefined') x = numeric.rep([m], 0);
  if (typeof bj === 'undefined') bj = numeric.linspace(0, x.length - 1);
  if (typeof xj === 'undefined') xj = [];

  function dfs(j) {
    var k;
    if (x[j] !== 0) return;
    x[j] = 1;

    for (k = Ai[j]; k < Ai[j + 1]; ++k) {
      dfs(Aj[k]);
    }

    xj[n] = j;
    ++n;
  }

  var i, j, j0, j1, k, l, l0, l1, a;

  for (i = bj.length - 1; i !== -1; --i) {
    dfs(bj[i]);
  }

  xj.length = n;

  for (i = xj.length - 1; i !== -1; --i) {
    x[xj[i]] = 0;
  }

  for (i = bj.length - 1; i !== -1; --i) {
    j = bj[i];
    x[j] = b[j];
  }

  for (i = xj.length - 1; i !== -1; --i) {
    j = xj[i];
    j0 = Ai[j];
    j1 = max(Ai[j + 1], j0);

    for (k = j0; k !== j1; ++k) {
      if (Aj[k] === j) {
        x[j] /= Av[k];
        break;
      }
    }

    a = x[j];

    for (k = j0; k !== j1; ++k) {
      l = Aj[k];
      if (l !== j) x[l] -= a * Av[k];
    }
  }

  return x;
};

numeric.ccsDFS = function ccsDFS(n) {
  this.k = Array(n);
  this.k1 = Array(n);
  this.j = Array(n);
};

numeric.ccsDFS.prototype.dfs = function dfs(J, Ai, Aj, x, xj, Pinv) {
  var m = 0,
      foo,
      n = xj.length;
  var k = this.k,
      k1 = this.k1,
      j = this.j,
      km,
      k11;
  if (x[J] !== 0) return;
  x[J] = 1;
  j[0] = J;
  k[0] = km = Ai[J];
  k1[0] = k11 = Ai[J + 1];

  while (1) {
    if (km >= k11) {
      xj[n] = j[m];
      if (m === 0) return;
      ++n;
      --m;
      km = k[m];
      k11 = k1[m];
    } else {
      foo = Pinv[Aj[km]];

      if (x[foo] === 0) {
        x[foo] = 1;
        k[m] = km;
        ++m;
        j[m] = foo;
        km = Ai[foo];
        k1[m] = k11 = Ai[foo + 1];
      } else ++km;
    }
  }
};

numeric.ccsLPSolve = function ccsLPSolve(A, B, x, xj, I, Pinv, dfs) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2],
      m = Ai.length - 1,
      n = 0;
  var Bi = B[0],
      Bj = B[1],
      Bv = B[2];
  var i, i0, i1, j, J, j0, j1, k, l, l0, l1, a;
  i0 = Bi[I];
  i1 = Bi[I + 1];
  xj.length = 0;

  for (i = i0; i < i1; ++i) {
    dfs.dfs(Pinv[Bj[i]], Ai, Aj, x, xj, Pinv);
  }

  for (i = xj.length - 1; i !== -1; --i) {
    x[xj[i]] = 0;
  }

  for (i = i0; i !== i1; ++i) {
    j = Pinv[Bj[i]];
    x[j] = Bv[i];
  }

  for (i = xj.length - 1; i !== -1; --i) {
    j = xj[i];
    j0 = Ai[j];
    j1 = Ai[j + 1];

    for (k = j0; k < j1; ++k) {
      if (Pinv[Aj[k]] === j) {
        x[j] /= Av[k];
        break;
      }
    }

    a = x[j];

    for (k = j0; k < j1; ++k) {
      l = Pinv[Aj[k]];
      if (l !== j) x[l] -= a * Av[k];
    }
  }

  return x;
};

numeric.ccsLUP1 = function ccsLUP1(A, threshold) {
  var m = A[0].length - 1;
  var L = [numeric.rep([m + 1], 0), [], []],
      U = [numeric.rep([m + 1], 0), [], []];
  var Li = L[0],
      Lj = L[1],
      Lv = L[2],
      Ui = U[0],
      Uj = U[1],
      Uv = U[2];
  var x = numeric.rep([m], 0),
      xj = numeric.rep([m], 0);
  var i, j, k, j0, j1, a, e, c, d, K;
  var sol = numeric.ccsLPSolve,
      max = Math.max,
      abs = Math.abs;
  var P = numeric.linspace(0, m - 1),
      Pinv = numeric.linspace(0, m - 1);
  var dfs = new numeric.ccsDFS(m);

  if (typeof threshold === 'undefined') {
    threshold = 1;
  }

  for (i = 0; i < m; ++i) {
    sol(L, A, x, xj, i, Pinv, dfs);
    a = -1;
    e = -1;

    for (j = xj.length - 1; j !== -1; --j) {
      k = xj[j];
      if (k <= i) continue;
      c = abs(x[k]);

      if (c > a) {
        e = k;
        a = c;
      }
    }

    if (abs(x[i]) < threshold * a) {
      j = P[i];
      a = P[e];
      P[i] = a;
      Pinv[a] = i;
      P[e] = j;
      Pinv[j] = e;
      a = x[i];
      x[i] = x[e];
      x[e] = a;
    }

    a = Li[i];
    e = Ui[i];
    d = x[i];
    Lj[a] = P[i];
    Lv[a] = 1;
    ++a;

    for (j = xj.length - 1; j !== -1; --j) {
      k = xj[j];
      c = x[k];
      xj[j] = 0;
      x[k] = 0;

      if (k <= i) {
        Uj[e] = k;
        Uv[e] = c;
        ++e;
      } else {
        Lj[a] = P[k];
        Lv[a] = c / d;
        ++a;
      }
    }

    Li[i + 1] = a;
    Ui[i + 1] = e;
  }

  for (j = Lj.length - 1; j !== -1; --j) {
    Lj[j] = Pinv[Lj[j]];
  }

  return {
    L: L,
    U: U,
    P: P,
    Pinv: Pinv
  };
};

numeric.ccsDFS0 = function ccsDFS0(n) {
  this.k = Array(n);
  this.k1 = Array(n);
  this.j = Array(n);
};

numeric.ccsDFS0.prototype.dfs = function dfs(J, Ai, Aj, x, xj, Pinv, P) {
  var m = 0,
      foo,
      n = xj.length;
  var k = this.k,
      k1 = this.k1,
      j = this.j,
      km,
      k11;
  if (x[J] !== 0) return;
  x[J] = 1;
  j[0] = J;
  k[0] = km = Ai[Pinv[J]];
  k1[0] = k11 = Ai[Pinv[J] + 1];

  while (1) {
    if (isNaN(km)) throw new Error('Ow!');

    if (km >= k11) {
      xj[n] = Pinv[j[m]];
      if (m === 0) return;
      ++n;
      --m;
      km = k[m];
      k11 = k1[m];
    } else {
      foo = Aj[km];

      if (x[foo] === 0) {
        x[foo] = 1;
        k[m] = km;
        ++m;
        j[m] = foo;
        foo = Pinv[foo];
        km = Ai[foo];
        k1[m] = k11 = Ai[foo + 1];
      } else ++km;
    }
  }
};

numeric.ccsLPSolve0 = function ccsLPSolve0(A, B, y, xj, I, Pinv, P, dfs) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2],
      m = Ai.length - 1,
      n = 0;
  var Bi = B[0],
      Bj = B[1],
      Bv = B[2];
  var i, i0, i1, j, J, j0, j1, k, l, l0, l1, a;
  i0 = Bi[I];
  i1 = Bi[I + 1];
  xj.length = 0;

  for (i = i0; i < i1; ++i) {
    dfs.dfs(Bj[i], Ai, Aj, y, xj, Pinv, P);
  }

  for (i = xj.length - 1; i !== -1; --i) {
    j = xj[i];
    y[P[j]] = 0;
  }

  for (i = i0; i !== i1; ++i) {
    j = Bj[i];
    y[j] = Bv[i];
  }

  for (i = xj.length - 1; i !== -1; --i) {
    j = xj[i];
    l = P[j];
    j0 = Ai[j];
    j1 = Ai[j + 1];

    for (k = j0; k < j1; ++k) {
      if (Aj[k] === l) {
        y[l] /= Av[k];
        break;
      }
    }

    a = y[l];

    for (k = j0; k < j1; ++k) {
      y[Aj[k]] -= a * Av[k];
    }

    y[l] = a;
  }
};

numeric.ccsLUP0 = function ccsLUP0(A, threshold) {
  var m = A[0].length - 1;
  var L = [numeric.rep([m + 1], 0), [], []],
      U = [numeric.rep([m + 1], 0), [], []];
  var Li = L[0],
      Lj = L[1],
      Lv = L[2],
      Ui = U[0],
      Uj = U[1],
      Uv = U[2];
  var y = numeric.rep([m], 0),
      xj = numeric.rep([m], 0);
  var i, j, k, j0, j1, a, e, c, d, K;
  var sol = numeric.ccsLPSolve0,
      max = Math.max,
      abs = Math.abs;
  var P = numeric.linspace(0, m - 1),
      Pinv = numeric.linspace(0, m - 1);
  var dfs = new numeric.ccsDFS0(m);

  if (typeof threshold === 'undefined') {
    threshold = 1;
  }

  for (i = 0; i < m; ++i) {
    sol(L, A, y, xj, i, Pinv, P, dfs);
    a = -1;
    e = -1;

    for (j = xj.length - 1; j !== -1; --j) {
      k = xj[j];
      if (k <= i) continue;
      c = abs(y[P[k]]);

      if (c > a) {
        e = k;
        a = c;
      }
    }

    if (abs(y[P[i]]) < threshold * a) {
      j = P[i];
      a = P[e];
      P[i] = a;
      Pinv[a] = i;
      P[e] = j;
      Pinv[j] = e;
    }

    a = Li[i];
    e = Ui[i];
    d = y[P[i]];
    Lj[a] = P[i];
    Lv[a] = 1;
    ++a;

    for (j = xj.length - 1; j !== -1; --j) {
      k = xj[j];
      c = y[P[k]];
      xj[j] = 0;
      y[P[k]] = 0;

      if (k <= i) {
        Uj[e] = k;
        Uv[e] = c;
        ++e;
      } else {
        Lj[a] = P[k];
        Lv[a] = c / d;
        ++a;
      }
    }

    Li[i + 1] = a;
    Ui[i + 1] = e;
  }

  for (j = Lj.length - 1; j !== -1; --j) {
    Lj[j] = Pinv[Lj[j]];
  }

  return {
    L: L,
    U: U,
    P: P,
    Pinv: Pinv
  };
};

numeric.ccsLUP = numeric.ccsLUP0;

numeric.ccsDim = function ccsDim(A) {
  return [numeric.sup(A[1]) + 1, A[0].length - 1];
};

numeric.ccsGetBlock = function ccsGetBlock(A, i, j) {
  var s = numeric.ccsDim(A),
      m = s[0],
      n = s[1];

  if (typeof i === 'undefined') {
    i = numeric.linspace(0, m - 1);
  } else if (typeof i === 'number') {
    i = [i];
  }

  if (typeof j === 'undefined') {
    j = numeric.linspace(0, n - 1);
  } else if (typeof j === 'number') {
    j = [j];
  }

  var p,
      p0,
      p1,
      P = i.length,
      q,
      Q = j.length,
      r,
      jq,
      ip;
  var Bi = numeric.rep([n], 0),
      Bj = [],
      Bv = [],
      B = [Bi, Bj, Bv];
  var Ai = A[0],
      Aj = A[1],
      Av = A[2];
  var x = numeric.rep([m], 0),
      count = 0,
      flags = numeric.rep([m], 0);

  for (q = 0; q < Q; ++q) {
    jq = j[q];
    var q0 = Ai[jq];
    var q1 = Ai[jq + 1];

    for (p = q0; p < q1; ++p) {
      r = Aj[p];
      flags[r] = 1;
      x[r] = Av[p];
    }

    for (p = 0; p < P; ++p) {
      ip = i[p];

      if (flags[ip]) {
        Bj[count] = p;
        Bv[count] = x[i[p]];
        ++count;
      }
    }

    for (p = q0; p < q1; ++p) {
      r = Aj[p];
      flags[r] = 0;
    }

    Bi[q + 1] = count;
  }

  return B;
};

numeric.ccsDot = function ccsDot(A, B) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2];
  var Bi = B[0],
      Bj = B[1],
      Bv = B[2];
  var sA = numeric.ccsDim(A),
      sB = numeric.ccsDim(B);
  var m = sA[0],
      n = sA[1],
      o = sB[1];
  var x = numeric.rep([m], 0),
      flags = numeric.rep([m], 0),
      xj = Array(m);
  var Ci = numeric.rep([o], 0),
      Cj = [],
      Cv = [],
      C = [Ci, Cj, Cv];
  var i, j, k, j0, j1, i0, i1, l, p, a, b;

  for (k = 0; k !== o; ++k) {
    j0 = Bi[k];
    j1 = Bi[k + 1];
    p = 0;

    for (j = j0; j < j1; ++j) {
      a = Bj[j];
      b = Bv[j];
      i0 = Ai[a];
      i1 = Ai[a + 1];

      for (i = i0; i < i1; ++i) {
        l = Aj[i];

        if (flags[l] === 0) {
          xj[p] = l;
          flags[l] = 1;
          p = p + 1;
        }

        x[l] = x[l] + Av[i] * b;
      }
    }

    j0 = Ci[k];
    j1 = j0 + p;
    Ci[k + 1] = j1;

    for (j = p - 1; j !== -1; --j) {
      b = j0 + j;
      i = xj[j];
      Cj[b] = i;
      Cv[b] = x[i];
      flags[i] = 0;
      x[i] = 0;
    }

    Ci[k + 1] = Ci[k] + p;
  }

  return C;
};

numeric.ccsLUPSolve = function ccsLUPSolve(LUP, B) {
  var L = LUP.L,
      U = LUP.U,
      P = LUP.P;
  var Bi = B[0];
  var flag = false;

  if (typeof Bi !== 'object') {
    B = [[0, B.length], numeric.linspace(0, B.length - 1), B];
    Bi = B[0];
    flag = true;
  }

  var Bj = B[1],
      Bv = B[2];
  var n = L[0].length - 1,
      m = Bi.length - 1;
  var x = numeric.rep([n], 0),
      xj = Array(n);
  var b = numeric.rep([n], 0),
      bj = Array(n);
  var Xi = numeric.rep([m + 1], 0),
      Xj = [],
      Xv = [];
  var sol = numeric.ccsTSolve;
  var i,
      j,
      j0,
      j1,
      k,
      J,
      N = 0;

  for (i = 0; i < m; ++i) {
    k = 0;
    j0 = Bi[i];
    j1 = Bi[i + 1];

    for (j = j0; j < j1; ++j) {
      J = LUP.Pinv[Bj[j]];
      bj[k] = J;
      b[J] = Bv[j];
      ++k;
    }

    bj.length = k;
    sol(L, b, x, bj, xj);

    for (j = bj.length - 1; j !== -1; --j) {
      b[bj[j]] = 0;
    }

    sol(U, x, b, xj, bj);
    if (flag) return b;

    for (j = xj.length - 1; j !== -1; --j) {
      x[xj[j]] = 0;
    }

    for (j = bj.length - 1; j !== -1; --j) {
      J = bj[j];
      Xj[N] = J;
      Xv[N] = b[J];
      b[J] = 0;
      ++N;
    }

    Xi[i + 1] = N;
  }

  return [Xi, Xj, Xv];
};

numeric.ccsbinop = function ccsbinop(body, setup) {
  if (typeof setup === 'undefined') setup = '';
  return Function('X', 'Y', 'var Xi = X[0], Xj = X[1], Xv = X[2];\n' + 'var Yi = Y[0], Yj = Y[1], Yv = Y[2];\n' + 'var n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\n' + 'var Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\n' + 'var x = numeric.rep([m],0),y = numeric.rep([m],0);\n' + 'var xk,yk,zk;\n' + 'var i,j,j0,j1,k,p=0;\n' + setup + 'for(i=0;i<n;++i) {\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Xj[j];\n' + '    x[k] = 1;\n' + '    Zj[p] = k;\n' + '    ++p;\n' + '  }\n' + '  j0 = Yi[i]; j1 = Yi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Yj[j];\n' + '    y[k] = Yv[j];\n' + '    if(x[k] === 0) {\n' + '      Zj[p] = k;\n' + '      ++p;\n' + '    }\n' + '  }\n' + '  Zi[i+1] = p;\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n' + '  j0 = Zi[i]; j1 = Zi[i+1];\n' + '  for(j=j0;j!==j1;++j) {\n' + '    k = Zj[j];\n' + '    xk = x[k];\n' + '    yk = y[k];\n' + body + '\n' + '    Zv[j] = zk;\n' + '  }\n' + '  j0 = Xi[i]; j1 = Xi[i+1];\n' + '  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n' + '  j0 = Yi[i]; j1 = Yi[i+1];\n' + '  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n' + '}\n' + 'return [Zi,Zj,Zv];');
};

(function () {
  var k, A, B, C;

  for (k in numeric.ops2) {
    if (isFinite(eval('1' + numeric.ops2[k] + '0'))) A = '[Y[0],Y[1],numeric.' + k + '(X,Y[2])]';else A = 'NaN';
    if (isFinite(eval('0' + numeric.ops2[k] + '1'))) B = '[X[0],X[1],numeric.' + k + '(X[2],Y)]';else B = 'NaN';
    if (isFinite(eval('1' + numeric.ops2[k] + '0')) && isFinite(eval('0' + numeric.ops2[k] + '1'))) C = 'numeric.ccs' + k + 'MM(X,Y)';else C = 'NaN';
    numeric['ccs' + k + 'MM'] = numeric.ccsbinop('zk = xk ' + numeric.ops2[k] + 'yk;');
    numeric['ccs' + k] = Function('X', 'Y', 'if(typeof X === "number") return ' + A + ';\n' + 'if(typeof Y === "number") return ' + B + ';\n' + 'return ' + C + ';\n');
  }
})();

numeric.ccsScatter = function ccsScatter(A) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2];
  var n = numeric.sup(Aj) + 1,
      m = Ai.length;
  var Ri = numeric.rep([n], 0),
      Rj = Array(m),
      Rv = Array(m);
  var counts = numeric.rep([n], 0),
      i;

  for (i = 0; i < m; ++i) {
    counts[Aj[i]]++;
  }

  for (i = 0; i < n; ++i) {
    Ri[i + 1] = Ri[i] + counts[i];
  }

  var ptr = Ri.slice(0),
      k,
      Aii;

  for (i = 0; i < m; ++i) {
    Aii = Aj[i];
    k = ptr[Aii];
    Rj[k] = Ai[i];
    Rv[k] = Av[i];
    ptr[Aii] = ptr[Aii] + 1;
  }

  return [Ri, Rj, Rv];
};

numeric.ccsGather = function ccsGather(A) {
  var Ai = A[0],
      Aj = A[1],
      Av = A[2];
  var n = Ai.length - 1,
      m = Aj.length;
  var Ri = Array(m),
      Rj = Array(m),
      Rv = Array(m);
  var i, j, j0, j1, p;
  p = 0;

  for (i = 0; i < n; ++i) {
    j0 = Ai[i];
    j1 = Ai[i + 1];

    for (j = j0; j !== j1; ++j) {
      Rj[p] = i;
      Ri[p] = Aj[j];
      Rv[p] = Av[j];
      ++p;
    }
  }

  return [Ri, Rj, Rv];
}; // The following sparse linear algebra routines are deprecated.


numeric.sdim = function dim(A, ret, k) {
  if (typeof ret === 'undefined') {
    ret = [];
  }

  if (typeof A !== 'object') return ret;

  if (typeof k === 'undefined') {
    k = 0;
  }

  if (!(k in ret)) {
    ret[k] = 0;
  }

  if (A.length > ret[k]) ret[k] = A.length;
  var i;

  for (i in A) {
    if (A.hasOwnProperty(i)) dim(A[i], ret, k + 1);
  }

  return ret;
};

numeric.sclone = function clone(A, k, n) {
  if (typeof k === 'undefined') {
    k = 0;
  }

  if (typeof n === 'undefined') {
    n = numeric.sdim(A).length;
  }

  var i,
      ret = Array(A.length);

  if (k === n - 1) {
    for (i in A) {
      if (A.hasOwnProperty(i)) ret[i] = A[i];
    }

    return ret;
  }

  for (i in A) {
    if (A.hasOwnProperty(i)) ret[i] = clone(A[i], k + 1, n);
  }

  return ret;
};

numeric.sdiag = function diag(d) {
  var n = d.length,
      i,
      ret = Array(n),
      i1,
      i2,
      i3;

  for (i = n - 1; i >= 1; i -= 2) {
    i1 = i - 1;
    ret[i] = [];
    ret[i][i] = d[i];
    ret[i1] = [];
    ret[i1][i1] = d[i1];
  }

  if (i === 0) {
    ret[0] = [];
    ret[0][0] = d[i];
  }

  return ret;
};

numeric.sidentity = function identity(n) {
  return numeric.sdiag(numeric.rep([n], 1));
};

numeric.stranspose = function transpose(A) {
  var ret = [],
      n = A.length,
      i,
      j,
      Ai;

  for (i in A) {
    if (!A.hasOwnProperty(i)) continue;
    Ai = A[i];

    for (j in Ai) {
      if (!Ai.hasOwnProperty(j)) continue;

      if (typeof ret[j] !== 'object') {
        ret[j] = [];
      }

      ret[j][i] = Ai[j];
    }
  }

  return ret;
};

numeric.sLUP = function LUP(A, tol) {
  throw new Error('The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.');
};

numeric.sdotMM = function dotMM(A, B) {
  var p = A.length,
      q = B.length,
      BT = numeric.stranspose(B),
      r = BT.length,
      Ai,
      BTk;
  var i, j, k, accum;
  var ret = Array(p),
      reti;

  for (i = p - 1; i >= 0; i--) {
    reti = [];
    Ai = A[i];

    for (k = r - 1; k >= 0; k--) {
      accum = 0;
      BTk = BT[k];

      for (j in Ai) {
        if (!Ai.hasOwnProperty(j)) continue;

        if (j in BTk) {
          accum += Ai[j] * BTk[j];
        }
      }

      if (accum) reti[k] = accum;
    }

    ret[i] = reti;
  }

  return ret;
};

numeric.sdotMV = function dotMV(A, x) {
  var p = A.length,
      Ai,
      i,
      j;
  var ret = Array(p),
      accum;

  for (i = p - 1; i >= 0; i--) {
    Ai = A[i];
    accum = 0;

    for (j in Ai) {
      if (!Ai.hasOwnProperty(j)) continue;
      if (x[j]) accum += Ai[j] * x[j];
    }

    if (accum) ret[i] = accum;
  }

  return ret;
};

numeric.sdotVM = function dotMV(x, A) {
  var i, j, Ai, alpha;
  var ret = [],
      accum;

  for (i in x) {
    if (!x.hasOwnProperty(i)) continue;
    Ai = A[i];
    alpha = x[i];

    for (j in Ai) {
      if (!Ai.hasOwnProperty(j)) continue;

      if (!ret[j]) {
        ret[j] = 0;
      }

      ret[j] += alpha * Ai[j];
    }
  }

  return ret;
};

numeric.sdotVV = function dotVV(x, y) {
  var i,
      ret = 0;

  for (i in x) {
    if (x[i] && y[i]) ret += x[i] * y[i];
  }

  return ret;
};

numeric.sdot = function dot(A, B) {
  var m = numeric.sdim(A).length,
      n = numeric.sdim(B).length;
  var k = m * 1000 + n;

  switch (k) {
    case 0:
      return A * B;

    case 1001:
      return numeric.sdotVV(A, B);

    case 2001:
      return numeric.sdotMV(A, B);

    case 1002:
      return numeric.sdotVM(A, B);

    case 2002:
      return numeric.sdotMM(A, B);

    default:
      throw new Error('numeric.sdot not implemented for tensors of order ' + m + ' and ' + n);
  }
};

numeric.sscatter = function scatter(V) {
  var n = V[0].length,
      Vij,
      i,
      j,
      m = V.length,
      A = [],
      Aj;

  for (i = n - 1; i >= 0; --i) {
    if (!V[m - 1][i]) continue;
    Aj = A;

    for (j = 0; j < m - 2; j++) {
      Vij = V[j][i];
      if (!Aj[Vij]) Aj[Vij] = [];
      Aj = Aj[Vij];
    }

    Aj[V[j][i]] = V[j + 1][i];
  }

  return A;
};

numeric.sgather = function gather(A, ret, k) {
  if (typeof ret === 'undefined') ret = [];
  if (typeof k === 'undefined') k = [];
  var n, i, Ai;
  n = k.length;

  for (i in A) {
    if (A.hasOwnProperty(i)) {
      k[n] = parseInt(i);
      Ai = A[i];

      if (typeof Ai === 'number') {
        if (Ai) {
          if (ret.length === 0) {
            for (i = n + 1; i >= 0; --i) {
              ret[i] = [];
            }
          }

          for (i = n; i >= 0; --i) {
            ret[i].push(k[i]);
          }

          ret[n + 1].push(Ai);
        }
      } else gather(Ai, ret, k);
    }
  }

  if (k.length > n) k.pop();
  return ret;
}; // 6. Coordinate matrices


numeric.cLU = function LU(A) {
  var I = A[0],
      J = A[1],
      V = A[2];
  var p = I.length,
      m = 0,
      i,
      j,
      k,
      a,
      b,
      c;

  for (i = 0; i < p; i++) {
    if (I[i] > m) m = I[i];
  }

  m++;
  var L = Array(m),
      U = Array(m),
      left = numeric.rep([m], Infinity),
      right = numeric.rep([m], -Infinity);
  var Ui, Uj, alpha;

  for (k = 0; k < p; k++) {
    i = I[k];
    j = J[k];
    if (j < left[i]) left[i] = j;
    if (j > right[i]) right[i] = j;
  }

  for (i = 0; i < m - 1; i++) {
    if (right[i] > right[i + 1]) right[i + 1] = right[i];
  }

  for (i = m - 1; i >= 1; i--) {
    if (left[i] < left[i - 1]) left[i - 1] = left[i];
  }

  var countL = 0,
      countU = 0;

  for (i = 0; i < m; i++) {
    U[i] = numeric.rep([right[i] - left[i] + 1], 0);
    L[i] = numeric.rep([i - left[i]], 0);
    countL += i - left[i] + 1;
    countU += right[i] - i + 1;
  }

  for (k = 0; k < p; k++) {
    i = I[k];
    U[i][J[k] - left[i]] = V[k];
  }

  for (i = 0; i < m - 1; i++) {
    a = i - left[i];
    Ui = U[i];

    for (j = i + 1; left[j] <= i && j < m; j++) {
      b = i - left[j];
      c = right[i] - i;
      Uj = U[j];
      alpha = Uj[b] / Ui[a];

      if (alpha) {
        for (k = 1; k <= c; k++) {
          Uj[k + b] -= alpha * Ui[k + a];
        }

        L[j][i - left[j]] = alpha;
      }
    }
  }

  var Ui = [],
      Uj = [],
      Uv = [],
      Li = [],
      Lj = [],
      Lv = [];
  var p, q, foo;
  p = 0;
  q = 0;

  for (i = 0; i < m; i++) {
    a = left[i];
    b = right[i];
    foo = U[i];

    for (j = i; j <= b; j++) {
      if (foo[j - a]) {
        Ui[p] = i;
        Uj[p] = j;
        Uv[p] = foo[j - a];
        p++;
      }
    }

    foo = L[i];

    for (j = a; j < i; j++) {
      if (foo[j - a]) {
        Li[q] = i;
        Lj[q] = j;
        Lv[q] = foo[j - a];
        q++;
      }
    }

    Li[q] = i;
    Lj[q] = i;
    Lv[q] = 1;
    q++;
  }

  return {
    U: [Ui, Uj, Uv],
    L: [Li, Lj, Lv]
  };
};

numeric.cLUsolve = function LUsolve(lu, b) {
  var L = lu.L,
      U = lu.U,
      ret = numeric.clone(b);
  var Li = L[0],
      Lj = L[1],
      Lv = L[2];
  var Ui = U[0],
      Uj = U[1],
      Uv = U[2];
  var p = Ui.length,
      q = Li.length;
  var m = ret.length,
      i,
      j,
      k;
  k = 0;

  for (i = 0; i < m; i++) {
    while (Lj[k] < i) {
      ret[i] -= Lv[k] * ret[Lj[k]];
      k++;
    }

    k++;
  }

  k = p - 1;

  for (i = m - 1; i >= 0; i--) {
    while (Uj[k] > i) {
      ret[i] -= Uv[k] * ret[Uj[k]];
      k--;
    }

    ret[i] /= Uv[k];
    k--;
  }

  return ret;
};

numeric.cgrid = function grid(n, shape) {
  if (typeof n === 'number') n = [n, n];
  var ret = numeric.rep(n, -1);
  var i, j, count;

  if (typeof shape !== 'function') {
    switch (shape) {
      case 'L':
        shape = function shape(i, j) {
          return i >= n[0] / 2 || j < n[1] / 2;
        };

        break;

      default:
        shape = function shape(i, j) {
          return true;
        };

        break;
    }
  }

  count = 0;

  for (i = 1; i < n[0] - 1; i++) {
    for (j = 1; j < n[1] - 1; j++) {
      if (shape(i, j)) {
        ret[i][j] = count;
        count++;
      }
    }
  }

  return ret;
};

numeric.cdelsq = function delsq(g) {
  var dir = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  var s = numeric.dim(g),
      m = s[0],
      n = s[1],
      i,
      j,
      k,
      p,
      q;
  var Li = [],
      Lj = [],
      Lv = [];

  for (i = 1; i < m - 1; i++) {
    for (j = 1; j < n - 1; j++) {
      if (g[i][j] < 0) continue;

      for (k = 0; k < 4; k++) {
        p = i + dir[k][0];
        q = j + dir[k][1];
        if (g[p][q] < 0) continue;
        Li.push(g[i][j]);
        Lj.push(g[p][q]);
        Lv.push(-1);
      }

      Li.push(g[i][j]);
      Lj.push(g[i][j]);
      Lv.push(4);
    }
  }

  return [Li, Lj, Lv];
};

numeric.cdotMV = function dotMV(A, x) {
  var ret,
      Ai = A[0],
      Aj = A[1],
      Av = A[2],
      k,
      p = Ai.length,
      N;
  N = 0;

  for (k = 0; k < p; k++) {
    if (Ai[k] > N) N = Ai[k];
  }

  N++;
  ret = numeric.rep([N], 0);

  for (k = 0; k < p; k++) {
    ret[Ai[k]] += Av[k] * x[Aj[k]];
  }

  return ret;
}; // 7. Splines


numeric.Spline = function Spline(x, yl, yr, kl, kr) {
  this.x = x;
  this.yl = yl;
  this.yr = yr;
  this.kl = kl;
  this.kr = kr;
};

numeric.Spline.prototype._at = function _at(x1, p) {
  var x = this.x;
  var yl = this.yl;
  var yr = this.yr;
  var kl = this.kl;
  var kr = this.kr;
  var x1, a, b, t;
  var add = numeric.add,
      sub = numeric.sub,
      mul = numeric.mul;
  a = sub(mul(kl[p], x[p + 1] - x[p]), sub(yr[p + 1], yl[p]));
  b = add(mul(kr[p + 1], x[p] - x[p + 1]), sub(yr[p + 1], yl[p]));
  t = (x1 - x[p]) / (x[p + 1] - x[p]);
  var s = t * (1 - t);
  return add(add(add(mul(1 - t, yl[p]), mul(t, yr[p + 1])), mul(a, s * (1 - t))), mul(b, s * t));
};

numeric.Spline.prototype.at = function at(x0) {
  if (typeof x0 === 'number') {
    var x = this.x;
    var n = x.length;
    var p,
        q,
        mid,
        floor = Math.floor,
        a,
        b,
        t;
    p = 0;
    q = n - 1;

    while (q - p > 1) {
      mid = floor((p + q) / 2);
      if (x[mid] <= x0) p = mid;else q = mid;
    }

    return this._at(x0, p);
  }

  var n = x0.length,
      i,
      ret = Array(n);

  for (i = n - 1; i !== -1; --i) {
    ret[i] = this.at(x0[i]);
  }

  return ret;
};

numeric.Spline.prototype.diff = function diff() {
  var x = this.x;
  var yl = this.yl;
  var yr = this.yr;
  var kl = this.kl;
  var kr = this.kr;
  var n = yl.length;
  var i, dx, dy;
  var zl = kl,
      zr = kr,
      pl = Array(n),
      pr = Array(n);
  var add = numeric.add,
      mul = numeric.mul,
      div = numeric.div,
      sub = numeric.sub;

  for (i = n - 1; i !== -1; --i) {
    dx = x[i + 1] - x[i];
    dy = sub(yr[i + 1], yl[i]);
    pl[i] = div(add(mul(dy, 6), mul(kl[i], -4 * dx), mul(kr[i + 1], -2 * dx)), dx * dx);
    pr[i + 1] = div(add(mul(dy, -6), mul(kl[i], 2 * dx), mul(kr[i + 1], 4 * dx)), dx * dx);
  }

  return new numeric.Spline(x, zl, zr, pl, pr);
};

numeric.Spline.prototype.roots = function roots() {
  function sqr(x) {
    return x * x;
  }

  function heval(y0, y1, k0, k1, x) {
    var A = k0 * 2 - (y1 - y0);
    var B = -k1 * 2 + (y1 - y0);
    var t = (x + 1) * 0.5;
    var s = t * (1 - t);
    return (1 - t) * y0 + t * y1 + A * s * (1 - t) + B * s * t;
  }

  var ret = [];
  var x = this.x,
      yl = this.yl,
      yr = this.yr,
      kl = this.kl,
      kr = this.kr;

  if (typeof yl[0] === 'number') {
    yl = [yl];
    yr = [yr];
    kl = [kl];
    kr = [kr];
  }

  var m = yl.length,
      n = x.length - 1,
      i,
      j,
      k,
      y,
      s,
      t;
  var ai,
      bi,
      ci,
      di,
      ret = Array(m),
      ri,
      k0,
      k1,
      y0,
      y1,
      A,
      B,
      D,
      dx,
      cx,
      stops,
      z0,
      z1,
      zm,
      t0,
      t1,
      tm;
  var sqrt = Math.sqrt;

  for (i = 0; i !== m; ++i) {
    ai = yl[i];
    bi = yr[i];
    ci = kl[i];
    di = kr[i];
    ri = [];

    for (j = 0; j !== n; j++) {
      if (j > 0 && bi[j] * ai[j] < 0) ri.push(x[j]);
      dx = x[j + 1] - x[j];
      cx = x[j];
      y0 = ai[j];
      y1 = bi[j + 1];
      k0 = ci[j] / dx;
      k1 = di[j + 1] / dx;
      D = sqr(k0 - k1 + 3 * (y0 - y1)) + 12 * k1 * y0;
      A = k1 + 3 * y0 + 2 * k0 - 3 * y1;
      B = 3 * (k1 + k0 + 2 * (y0 - y1));

      if (D <= 0) {
        z0 = A / B;
        if (z0 > x[j] && z0 < x[j + 1]) stops = [x[j], z0, x[j + 1]];else stops = [x[j], x[j + 1]];
      } else {
        z0 = (A - sqrt(D)) / B;
        z1 = (A + sqrt(D)) / B;
        stops = [x[j]];
        if (z0 > x[j] && z0 < x[j + 1]) stops.push(z0);
        if (z1 > x[j] && z1 < x[j + 1]) stops.push(z1);
        stops.push(x[j + 1]);
      }

      t0 = stops[0];
      z0 = this._at(t0, j);

      for (k = 0; k < stops.length - 1; k++) {
        t1 = stops[k + 1];
        z1 = this._at(t1, j);

        if (z0 === 0) {
          ri.push(t0);
          t0 = t1;
          z0 = z1;
          continue;
        }

        if (z1 === 0 || z0 * z1 > 0) {
          t0 = t1;
          z0 = z1;
          continue;
        }

        var side = 0;

        while (1) {
          tm = (z0 * t1 - z1 * t0) / (z0 - z1);

          if (tm <= t0 || tm >= t1) {
            break;
          }

          zm = this._at(tm, j);

          if (zm * z1 > 0) {
            t1 = tm;
            z1 = zm;
            if (side === -1) z0 *= 0.5;
            side = -1;
          } else if (zm * z0 > 0) {
            t0 = tm;
            z0 = zm;
            if (side === 1) z1 *= 0.5;
            side = 1;
          } else break;
        }

        ri.push(tm);
        t0 = stops[k + 1];
        z0 = this._at(t0, j);
      }

      if (z1 === 0) ri.push(t1);
    }

    ret[i] = ri;
  }

  if (typeof this.yl[0] === 'number') return ret[0];
  return ret;
};

numeric.spline = function spline(x, y, k1, kn) {
  var n = x.length,
      b = [],
      dx = [],
      dy = [];
  var i;
  var sub = numeric.sub,
      mul = numeric.mul,
      add = numeric.add;

  for (i = n - 2; i >= 0; i--) {
    dx[i] = x[i + 1] - x[i];
    dy[i] = sub(y[i + 1], y[i]);
  }

  if (typeof k1 === 'string' || typeof kn === 'string') {
    k1 = kn = 'periodic';
  } // Build sparse tridiagonal system


  var T = [[], [], []];

  switch (typeof k1) {
    case 'undefined':
      b[0] = mul(3 / (dx[0] * dx[0]), dy[0]);
      T[0].push(0, 0);
      T[1].push(0, 1);
      T[2].push(2 / dx[0], 1 / dx[0]);
      break;

    case 'string':
      b[0] = add(mul(3 / (dx[n - 2] * dx[n - 2]), dy[n - 2]), mul(3 / (dx[0] * dx[0]), dy[0]));
      T[0].push(0, 0, 0);
      T[1].push(n - 2, 0, 1);
      T[2].push(1 / dx[n - 2], 2 / dx[n - 2] + 2 / dx[0], 1 / dx[0]);
      break;

    default:
      b[0] = k1;
      T[0].push(0);
      T[1].push(0);
      T[2].push(1);
      break;
  }

  for (i = 1; i < n - 1; i++) {
    b[i] = add(mul(3 / (dx[i - 1] * dx[i - 1]), dy[i - 1]), mul(3 / (dx[i] * dx[i]), dy[i]));
    T[0].push(i, i, i);
    T[1].push(i - 1, i, i + 1);
    T[2].push(1 / dx[i - 1], 2 / dx[i - 1] + 2 / dx[i], 1 / dx[i]);
  }

  switch (typeof kn) {
    case 'undefined':
      b[n - 1] = mul(3 / (dx[n - 2] * dx[n - 2]), dy[n - 2]);
      T[0].push(n - 1, n - 1);
      T[1].push(n - 2, n - 1);
      T[2].push(1 / dx[n - 2], 2 / dx[n - 2]);
      break;

    case 'string':
      T[1][T[1].length - 1] = 0;
      break;

    default:
      b[n - 1] = kn;
      T[0].push(n - 1);
      T[1].push(n - 1);
      T[2].push(1);
      break;
  }

  if (typeof b[0] !== 'number') b = numeric.transpose(b);else b = [b];
  var k = Array(b.length);

  if (typeof k1 === 'string') {
    for (i = k.length - 1; i !== -1; --i) {
      k[i] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(T)), b[i]);
      k[i][n - 1] = k[i][0];
    }
  } else {
    for (i = k.length - 1; i !== -1; --i) {
      k[i] = numeric.cLUsolve(numeric.cLU(T), b[i]);
    }
  }

  if (typeof y[0] === 'number') k = k[0];else k = numeric.transpose(k);
  return new numeric.Spline(x, y, y, k, k);
}; // 8. FFT


numeric.fftpow2 = function fftpow2(x, y) {
  var n = x.length;
  if (n === 1) return;
  var cos = Math.cos,
      sin = Math.sin,
      i,
      j;
  var xe = Array(n / 2),
      ye = Array(n / 2),
      xo = Array(n / 2),
      yo = Array(n / 2);
  j = n / 2;

  for (i = n - 1; i !== -1; --i) {
    --j;
    xo[j] = x[i];
    yo[j] = y[i];
    --i;
    xe[j] = x[i];
    ye[j] = y[i];
  }

  fftpow2(xe, ye);
  fftpow2(xo, yo);
  j = n / 2;
  var t,
      k = -6.2831853071795864769252867665590057683943387987502116419 / n,
      ci,
      si;

  for (i = n - 1; i !== -1; --i) {
    --j;
    if (j === -1) j = n / 2 - 1;
    t = k * i;
    ci = cos(t);
    si = sin(t);
    x[i] = xe[j] + ci * xo[j] - si * yo[j];
    y[i] = ye[j] + ci * yo[j] + si * xo[j];
  }
};

numeric._ifftpow2 = function _ifftpow2(x, y) {
  var n = x.length;
  if (n === 1) return;
  var cos = Math.cos,
      sin = Math.sin,
      i,
      j;
  var xe = Array(n / 2),
      ye = Array(n / 2),
      xo = Array(n / 2),
      yo = Array(n / 2);
  j = n / 2;

  for (i = n - 1; i !== -1; --i) {
    --j;
    xo[j] = x[i];
    yo[j] = y[i];
    --i;
    xe[j] = x[i];
    ye[j] = y[i];
  }

  _ifftpow2(xe, ye);

  _ifftpow2(xo, yo);

  j = n / 2;
  var t,
      k = 6.2831853071795864769252867665590057683943387987502116419 / n,
      ci,
      si;

  for (i = n - 1; i !== -1; --i) {
    --j;
    if (j === -1) j = n / 2 - 1;
    t = k * i;
    ci = cos(t);
    si = sin(t);
    x[i] = xe[j] + ci * xo[j] - si * yo[j];
    y[i] = ye[j] + ci * yo[j] + si * xo[j];
  }
};

numeric.ifftpow2 = function ifftpow2(x, y) {
  numeric._ifftpow2(x, y);

  numeric.diveq(x, x.length);
  numeric.diveq(y, y.length);
};

numeric.convpow2 = function convpow2(ax, ay, bx, by) {
  numeric.fftpow2(ax, ay);
  numeric.fftpow2(bx, by);
  var i,
      n = ax.length,
      axi,
      bxi,
      ayi,
      byi;

  for (i = n - 1; i !== -1; --i) {
    axi = ax[i];
    ayi = ay[i];
    bxi = bx[i];
    byi = by[i];
    ax[i] = axi * bxi - ayi * byi;
    ay[i] = axi * byi + ayi * bxi;
  }

  numeric.ifftpow2(ax, ay);
};

numeric.T.prototype.fft = function fft() {
  var x = this.x,
      y = this.y;
  var n = x.length,
      log = Math.log,
      log2 = log(2),
      p = Math.ceil(log(2 * n - 1) / log2),
      m = Math.pow(2, p);
  var cx = numeric.rep([m], 0),
      cy = numeric.rep([m], 0),
      cos = Math.cos,
      sin = Math.sin;
  var k,
      c = -3.14159265358979323846264338327950288419716939937510582 / n,
      t;
  var a = numeric.rep([m], 0),
      b = numeric.rep([m], 0),
      nhalf = Math.floor(n / 2);

  for (k = 0; k < n; k++) {
    a[k] = x[k];
  }

  if (typeof y !== 'undefined') for (k = 0; k < n; k++) {
    b[k] = y[k];
  }
  cx[0] = 1;

  for (k = 1; k <= m / 2; k++) {
    t = c * k * k;
    cx[k] = cos(t);
    cy[k] = sin(t);
    cx[m - k] = cos(t);
    cy[m - k] = sin(t);
  }

  var X = new numeric.T(a, b),
      Y = new numeric.T(cx, cy);
  X = X.mul(Y);
  numeric.convpow2(X.x, X.y, numeric.clone(Y.x), numeric.neg(Y.y));
  X = X.mul(Y);
  X.x.length = n;
  X.y.length = n;
  return X;
};

numeric.T.prototype.ifft = function ifft() {
  var x = this.x,
      y = this.y;
  var n = x.length,
      log = Math.log,
      log2 = log(2),
      p = Math.ceil(log(2 * n - 1) / log2),
      m = Math.pow(2, p);
  var cx = numeric.rep([m], 0),
      cy = numeric.rep([m], 0),
      cos = Math.cos,
      sin = Math.sin;
  var k,
      c = 3.14159265358979323846264338327950288419716939937510582 / n,
      t;
  var a = numeric.rep([m], 0),
      b = numeric.rep([m], 0),
      nhalf = Math.floor(n / 2);

  for (k = 0; k < n; k++) {
    a[k] = x[k];
  }

  if (typeof y !== 'undefined') for (k = 0; k < n; k++) {
    b[k] = y[k];
  }
  cx[0] = 1;

  for (k = 1; k <= m / 2; k++) {
    t = c * k * k;
    cx[k] = cos(t);
    cy[k] = sin(t);
    cx[m - k] = cos(t);
    cy[m - k] = sin(t);
  }

  var X = new numeric.T(a, b),
      Y = new numeric.T(cx, cy);
  X = X.mul(Y);
  numeric.convpow2(X.x, X.y, numeric.clone(Y.x), numeric.neg(Y.y));
  X = X.mul(Y);
  X.x.length = n;
  X.y.length = n;
  return X.div(n);
}; //9. Unconstrained optimization


numeric.gradient = function gradient(f, x) {
  var n = x.length;
  var f0 = f(x);
  if (isNaN(f0)) throw new Error('gradient: f(x) is a NaN!');
  var max = Math.max;
  var i,
      x0 = numeric.clone(x),
      f1,
      f2,
      J = Array(n);
  var div = numeric.div,
      sub = numeric.sub,
      errest,
      roundoff,
      max = Math.max,
      eps = 1e-3,
      abs = Math.abs,
      min = Math.min;
  var t0,
      t1,
      t2,
      it = 0,
      d1,
      d2,
      N;

  for (i = 0; i < n; i++) {
    var h = max(1e-6 * f0, 1e-8);

    while (1) {
      ++it;

      if (it > 20) {
        throw new Error('Numerical gradient fails');
      }

      x0[i] = x[i] + h;
      f1 = f(x0);
      x0[i] = x[i] - h;
      f2 = f(x0);
      x0[i] = x[i];

      if (isNaN(f1) || isNaN(f2)) {
        h /= 16;
        continue;
      }

      J[i] = (f1 - f2) / (2 * h);
      t0 = x[i] - h;
      t1 = x[i];
      t2 = x[i] + h;
      d1 = (f1 - f0) / h;
      d2 = (f0 - f2) / h;
      N = max(abs(J[i]), abs(f0), abs(f1), abs(f2), abs(t0), abs(t1), abs(t2), 1e-8);
      errest = min(max(abs(d1 - J[i]), abs(d2 - J[i]), abs(d1 - d2)) / N, h / N);

      if (errest > eps) {
        h /= 16;
      } else break;
    }
  }

  return J;
};

numeric.uncmin = function uncmin(f, x0, tol, gradient, maxit, callback, options) {
  var grad = numeric.gradient;

  if (typeof options === 'undefined') {
    options = {};
  }

  if (typeof tol === 'undefined') {
    tol = 1e-8;
  }

  if (typeof gradient === 'undefined') {
    gradient = function gradient(x) {
      return grad(f, x);
    };
  }

  if (typeof maxit === 'undefined') maxit = 1000;
  x0 = numeric.clone(x0);
  var n = x0.length;
  var f0 = f(x0),
      f1,
      df0;
  if (isNaN(f0)) throw new Error('uncmin: f(x0) is a NaN!');
  var max = Math.max,
      norm2 = numeric.norm2;
  tol = max(tol, numeric.epsilon);
  var step,
      g0,
      g1,
      H1 = options.Hinv || numeric.identity(n);
  var dot = numeric.dot,
      inv = numeric.inv,
      sub = numeric.sub,
      add = numeric.add,
      ten = numeric.tensor,
      div = numeric.div,
      mul = numeric.mul;
  var all = numeric.all,
      isfinite = numeric.isFinite,
      neg = numeric.neg;
  var it = 0,
      i,
      s,
      x1,
      y,
      Hy,
      Hs,
      ys,
      i0,
      t,
      nstep,
      t1,
      t2;
  var msg = '';
  g0 = gradient(x0);

  while (it < maxit) {
    if (typeof callback === 'function') {
      if (callback(it, x0, f0, g0, H1)) {
        msg = 'Callback returned true';
        break;
      }
    }

    if (!all(isfinite(g0))) {
      msg = 'Gradient has Infinity or NaN';
      break;
    }

    step = neg(dot(H1, g0));

    if (!all(isfinite(step))) {
      msg = 'Search direction has Infinity or NaN';
      break;
    }

    nstep = norm2(step);

    if (nstep < tol) {
      msg = 'Newton step smaller than tol';
      break;
    }

    t = 1;
    df0 = dot(g0, step); // line search

    x1 = x0;

    while (it < maxit) {
      if (t * nstep < tol) {
        break;
      }

      s = mul(step, t);
      x1 = add(x0, s);
      f1 = f(x1);

      if (f1 - f0 >= 0.1 * t * df0 || isNaN(f1)) {
        t *= 0.5;
        ++it;
        continue;
      }

      break;
    }

    if (t * nstep < tol) {
      msg = 'Line search step size smaller than tol';
      break;
    }

    if (it === maxit) {
      msg = 'maxit reached during line search';
      break;
    }

    g1 = gradient(x1);
    y = sub(g1, g0);
    ys = dot(y, s);
    Hy = dot(H1, y);
    H1 = sub(add(H1, mul((ys + dot(y, Hy)) / (ys * ys), ten(s, s))), div(add(ten(Hy, s), ten(s, Hy)), ys));
    x0 = x1;
    f0 = f1;
    g0 = g1;
    ++it;
  }

  return {
    solution: x0,
    f: f0,
    gradient: g0,
    invHessian: H1,
    iterations: it,
    message: msg
  };
}; // 10. Ode solver (Dormand-Prince)


numeric.Dopri = function Dopri(x, y, f, ymid, iterations, msg, events) {
  this.x = x;
  this.y = y;
  this.f = f;
  this.ymid = ymid;
  this.iterations = iterations;
  this.events = events;
  this.message = msg;
};

numeric.Dopri.prototype._at = function _at(xi, j) {
  function sqr(x) {
    return x * x;
  }

  var sol = this;
  var xs = sol.x;
  var ys = sol.y;
  var k1 = sol.f;
  var ymid = sol.ymid;
  var n = xs.length;
  var x0, x1, xh, y0, y1, yh, xi;
  var floor = Math.floor,
      h;
  var c = 0.5;
  var add = numeric.add,
      mul = numeric.mul,
      sub = numeric.sub,
      p,
      q,
      w;
  x0 = xs[j];
  x1 = xs[j + 1];
  y0 = ys[j];
  y1 = ys[j + 1];
  h = x1 - x0;
  xh = x0 + c * h;
  yh = ymid[j];
  p = sub(k1[j], mul(y0, 1 / (x0 - xh) + 2 / (x0 - x1)));
  q = sub(k1[j + 1], mul(y1, 1 / (x1 - xh) + 2 / (x1 - x0)));
  w = [sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh), sqr(xi - x0) * sqr(xi - x1) / sqr(x0 - xh) / sqr(x1 - xh), sqr(xi - x0) * (xi - xh) / sqr(x1 - x0) / (x1 - xh), (xi - x0) * sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh), (xi - x1) * sqr(xi - x0) * (xi - xh) / sqr(x0 - x1) / (x1 - xh)];
  return add(add(add(add(mul(y0, w[0]), mul(yh, w[1])), mul(y1, w[2])), mul(p, w[3])), mul(q, w[4]));
};

numeric.Dopri.prototype.at = function at(x) {
  var i,
      j,
      k,
      floor = Math.floor;

  if (typeof x !== 'number') {
    var n = x.length,
        ret = Array(n);

    for (i = n - 1; i !== -1; --i) {
      ret[i] = this.at(x[i]);
    }

    return ret;
  }

  var x0 = this.x;
  i = 0;
  j = x0.length - 1;

  while (j - i > 1) {
    k = floor(0.5 * (i + j));
    if (x0[k] <= x) i = k;else j = k;
  }

  return this._at(x, i);
};

numeric.dopri = function dopri(x0, x1, y0, f, tol, maxit, event) {
  if (typeof tol === 'undefined') {
    tol = 1e-6;
  }

  if (typeof maxit === 'undefined') {
    maxit = 1000;
  }

  var xs = [x0],
      ys = [y0],
      k1 = [f(x0, y0)],
      k2,
      k3,
      k4,
      k5,
      k6,
      k7,
      ymid = [];
  var A2 = 1 / 5;
  var A3 = [3 / 40, 9 / 40];
  var A4 = [44 / 45, -56 / 15, 32 / 9];
  var A5 = [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729];
  var A6 = [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656];
  var b = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84];
  var bm = [0.5 * 6025192743 / 30085553152, 0, 0.5 * 51252292925 / 65400821598, 0.5 * -2691868925 / 45128329728, 0.5 * 187940372067 / 1594534317056, 0.5 * -1776094331 / 19743644256, 0.5 * 11237099 / 235043384];
  var c = [1 / 5, 3 / 10, 4 / 5, 8 / 9, 1, 1];
  var e = [-71 / 57600, 0, 71 / 16695, -71 / 1920, 17253 / 339200, -22 / 525, 1 / 40];
  var i = 0,
      er,
      j;
  var h = (x1 - x0) / 10;
  var it = 0;
  var add = numeric.add,
      mul = numeric.mul,
      y1,
      erinf;
  var max = Math.max,
      min = Math.min,
      abs = Math.abs,
      norminf = numeric.norminf,
      pow = Math.pow;
  var any = numeric.any,
      lt = numeric.lt,
      and = numeric.and,
      sub = numeric.sub;
  var e0, e1, ev;
  var ret = new numeric.Dopri(xs, ys, k1, ymid, -1, '');
  if (typeof event === 'function') e0 = event(x0, y0);

  while (x0 < x1 && it < maxit) {
    ++it;
    if (x0 + h > x1) h = x1 - x0;
    k2 = f(x0 + c[0] * h, add(y0, mul(A2 * h, k1[i])));
    k3 = f(x0 + c[1] * h, add(add(y0, mul(A3[0] * h, k1[i])), mul(A3[1] * h, k2)));
    k4 = f(x0 + c[2] * h, add(add(add(y0, mul(A4[0] * h, k1[i])), mul(A4[1] * h, k2)), mul(A4[2] * h, k3)));
    k5 = f(x0 + c[3] * h, add(add(add(add(y0, mul(A5[0] * h, k1[i])), mul(A5[1] * h, k2)), mul(A5[2] * h, k3)), mul(A5[3] * h, k4)));
    k6 = f(x0 + c[4] * h, add(add(add(add(add(y0, mul(A6[0] * h, k1[i])), mul(A6[1] * h, k2)), mul(A6[2] * h, k3)), mul(A6[3] * h, k4)), mul(A6[4] * h, k5)));
    y1 = add(add(add(add(add(y0, mul(k1[i], h * b[0])), mul(k3, h * b[2])), mul(k4, h * b[3])), mul(k5, h * b[4])), mul(k6, h * b[5]));
    k7 = f(x0 + h, y1);
    er = add(add(add(add(add(mul(k1[i], h * e[0]), mul(k3, h * e[2])), mul(k4, h * e[3])), mul(k5, h * e[4])), mul(k6, h * e[5])), mul(k7, h * e[6]));
    if (typeof er === 'number') erinf = abs(er);else erinf = norminf(er);

    if (erinf > tol) {
      // reject
      h = 0.2 * h * pow(tol / erinf, 0.25);

      if (x0 + h === x0) {
        ret.msg = 'Step size became too small';
        break;
      }

      continue;
    }

    ymid[i] = add(add(add(add(add(add(y0, mul(k1[i], h * bm[0])), mul(k3, h * bm[2])), mul(k4, h * bm[3])), mul(k5, h * bm[4])), mul(k6, h * bm[5])), mul(k7, h * bm[6]));
    ++i;
    xs[i] = x0 + h;
    ys[i] = y1;
    k1[i] = k7;

    if (typeof event === 'function') {
      var yi,
          xl = x0,
          xr = x0 + 0.5 * h,
          xi;
      e1 = event(xr, ymid[i - 1]);
      ev = and(lt(e0, 0), lt(0, e1));

      if (!any(ev)) {
        xl = xr;
        xr = x0 + h;
        e0 = e1;
        e1 = event(xr, y1);
        ev = and(lt(e0, 0), lt(0, e1));
      }

      if (any(ev)) {
        var xc, yc, en, ei;
        var side = 0,
            sl = 1.0,
            sr = 1.0;

        while (1) {
          if (typeof e0 === 'number') xi = (sr * e1 * xl - sl * e0 * xr) / (sr * e1 - sl * e0);else {
            xi = xr;

            for (j = e0.length - 1; j !== -1; --j) {
              if (e0[j] < 0 && e1[j] > 0) xi = min(xi, (sr * e1[j] * xl - sl * e0[j] * xr) / (sr * e1[j] - sl * e0[j]));
            }
          }
          if (xi <= xl || xi >= xr) break;
          yi = ret._at(xi, i - 1);
          ei = event(xi, yi);
          en = and(lt(e0, 0), lt(0, ei));

          if (any(en)) {
            xr = xi;
            e1 = ei;
            ev = en;
            sr = 1.0;
            if (side === -1) sl *= 0.5;else sl = 1.0;
            side = -1;
          } else {
            xl = xi;
            e0 = ei;
            sl = 1.0;
            if (side === 1) sr *= 0.5;else sr = 1.0;
            side = 1;
          }
        }

        y1 = ret._at(0.5 * (x0 + xi), i - 1);
        ret.f[i] = f(xi, yi);
        ret.x[i] = xi;
        ret.y[i] = yi;
        ret.ymid[i - 1] = y1;
        ret.events = ev;
        ret.iterations = it;
        return ret;
      }
    }

    x0 += h;
    y0 = y1;
    e0 = e1;
    h = min(0.8 * h * pow(tol / erinf, 0.25), 4 * h);
  }

  ret.iterations = it;
  return ret;
}; // 11. Ax = b


numeric.LU = function (A, fast) {
  fast = fast || false;
  var abs = Math.abs;
  var i, j, k, absAjk, Akk, Ak, Pk, Ai;
  var max;
  var n = A.length,
      n1 = n - 1;
  var P = new Array(n);
  if (!fast) A = numeric.clone(A);

  for (k = 0; k < n; ++k) {
    Pk = k;
    Ak = A[k];
    max = abs(Ak[k]);

    for (j = k + 1; j < n; ++j) {
      absAjk = abs(A[j][k]);

      if (max < absAjk) {
        max = absAjk;
        Pk = j;
      }
    }

    P[k] = Pk;

    if (Pk != k) {
      A[k] = A[Pk];
      A[Pk] = Ak;
      Ak = A[k];
    }

    Akk = Ak[k];

    for (i = k + 1; i < n; ++i) {
      A[i][k] /= Akk;
    }

    for (i = k + 1; i < n; ++i) {
      Ai = A[i];

      for (j = k + 1; j < n1; ++j) {
        Ai[j] -= Ai[k] * Ak[j];
        ++j;
        Ai[j] -= Ai[k] * Ak[j];
      }

      if (j === n1) Ai[j] -= Ai[k] * Ak[j];
    }
  }

  return {
    LU: A,
    P: P
  };
};

numeric.LUsolve = function LUsolve(LUP, b) {
  var i, j;
  var LU = LUP.LU;
  var n = LU.length;
  var x = numeric.clone(b);
  var P = LUP.P;
  var Pi, LUi, LUii, tmp;

  for (i = n - 1; i !== -1; --i) {
    x[i] = b[i];
  }

  for (i = 0; i < n; ++i) {
    Pi = P[i];

    if (P[i] !== i) {
      tmp = x[i];
      x[i] = x[Pi];
      x[Pi] = tmp;
    }

    LUi = LU[i];

    for (j = 0; j < i; ++j) {
      x[i] -= x[j] * LUi[j];
    }
  }

  for (i = n - 1; i >= 0; --i) {
    LUi = LU[i];

    for (j = i + 1; j < n; ++j) {
      x[i] -= x[j] * LUi[j];
    }

    x[i] /= LUi[i];
  }

  return x;
};

numeric.solve = function solve(A, b, fast) {
  return numeric.LUsolve(numeric.LU(A, fast), b);
}; // 12. Linear programming


numeric.echelonize = function echelonize(A) {
  var s = numeric.dim(A),
      m = s[0],
      n = s[1];
  var I = numeric.identity(m);
  var P = Array(m);
  var i, j, k, l, Ai, Ii, Z, a;
  var abs = Math.abs;
  var diveq = numeric.diveq;
  A = numeric.clone(A);

  for (i = 0; i < m; ++i) {
    k = 0;
    Ai = A[i];
    Ii = I[i];

    for (j = 1; j < n; ++j) {
      if (abs(Ai[k]) < abs(Ai[j])) k = j;
    }

    P[i] = k;
    diveq(Ii, Ai[k]);
    diveq(Ai, Ai[k]);

    for (j = 0; j < m; ++j) {
      if (j !== i) {
        Z = A[j];
        a = Z[k];

        for (l = n - 1; l !== -1; --l) {
          Z[l] -= Ai[l] * a;
        }

        Z = I[j];

        for (l = m - 1; l !== -1; --l) {
          Z[l] -= Ii[l] * a;
        }
      }
    }
  }

  return {
    I: I,
    A: A,
    P: P
  };
};

numeric.__solveLP = function __solveLP(c, A, b, tol, maxit, x, flag) {
  var sum = numeric.sum,
      log = numeric.log,
      mul = numeric.mul,
      sub = numeric.sub,
      dot = numeric.dot,
      div = numeric.div,
      add = numeric.add;
  var m = c.length,
      n = b.length,
      y;
  var unbounded = false,
      cb,
      i0 = 0;
  var alpha = 1.0;
  var f0,
      df0,
      AT = numeric.transpose(A),
      svd = numeric.svd,
      transpose = numeric.transpose,
      leq = numeric.leq,
      sqrt = Math.sqrt,
      abs = Math.abs;
  var muleq = numeric.muleq;
  var norm = numeric.norminf,
      any = numeric.any,
      min = Math.min;
  var all = numeric.all,
      gt = numeric.gt;
  var p = Array(m),
      A0 = Array(n),
      e = numeric.rep([n], 1),
      H;
  var solve = numeric.solve,
      z = sub(b, dot(A, x)),
      count;
  var dotcc = dot(c, c);
  var g;

  for (count = i0; count < maxit; ++count) {
    var i, j, d;

    for (i = n - 1; i !== -1; --i) {
      A0[i] = div(A[i], z[i]);
    }

    var A1 = transpose(A0);

    for (i = m - 1; i !== -1; --i) {
      p[i] =
      /*x[i]+*/
      sum(A1[i]);
    }

    alpha = 0.25 * abs(dotcc / dot(c, p));
    var a1 = 100 * sqrt(dotcc / dot(p, p));
    if (!isFinite(alpha) || alpha > a1) alpha = a1;
    g = add(c, mul(alpha, p));
    H = dot(A1, A0);

    for (i = m - 1; i !== -1; --i) {
      H[i][i] += 1;
    }

    d = solve(H, div(g, alpha), true);
    var t0 = div(z, dot(A, d));
    var t = 1.0;

    for (i = n - 1; i !== -1; --i) {
      if (t0[i] < 0) t = min(t, -0.999 * t0[i]);
    }

    y = sub(x, mul(d, t));
    z = sub(b, dot(A, y));
    if (!all(gt(z, 0))) return {
      solution: x,
      message: '',
      iterations: count
    };
    x = y;
    if (alpha < tol) return {
      solution: y,
      message: '',
      iterations: count
    };

    if (flag) {
      var s = dot(c, g),
          Ag = dot(A, g);
      unbounded = true;

      for (i = n - 1; i !== -1; --i) {
        if (s * Ag[i] < 0) {
          unbounded = false;
          break;
        }
      }
    } else {
      if (x[m - 1] >= 0) unbounded = false;else unbounded = true;
    }

    if (unbounded) return {
      solution: y,
      message: 'Unbounded',
      iterations: count
    };
  }

  return {
    solution: x,
    message: 'maximum iteration count exceeded',
    iterations: count
  };
};

numeric._solveLP = function _solveLP(c, A, b, tol, maxit) {
  var m = c.length,
      n = b.length,
      y;
  var sum = numeric.sum,
      log = numeric.log,
      mul = numeric.mul,
      sub = numeric.sub,
      dot = numeric.dot,
      div = numeric.div,
      add = numeric.add;
  var c0 = numeric.rep([m], 0).concat([1]);
  var J = numeric.rep([n, 1], -1);
  var A0 = numeric.blockMatrix([[A, J]]);
  var b0 = b;
  var y = numeric.rep([m], 0).concat(Math.max(0, numeric.sup(numeric.neg(b))) + 1);

  var x0 = numeric.__solveLP(c0, A0, b0, tol, maxit, y, false);

  var x = numeric.clone(x0.solution);
  x.length = m;
  var foo = numeric.inf(sub(b, dot(A, x)));

  if (foo < 0) {
    return {
      solution: NaN,
      message: 'Infeasible',
      iterations: x0.iterations
    };
  }

  var ret = numeric.__solveLP(c, A, b, tol, maxit - x0.iterations, x, true);

  ret.iterations += x0.iterations;
  return ret;
};

numeric.solveLP = function solveLP(c, A, b, Aeq, beq, tol, maxit) {
  if (typeof maxit === 'undefined') maxit = 1000;
  if (typeof tol === 'undefined') tol = numeric.epsilon;
  if (typeof Aeq === 'undefined') return numeric._solveLP(c, A, b, tol, maxit);
  var m = Aeq.length,
      n = Aeq[0].length,
      o = A.length;
  var B = numeric.echelonize(Aeq);
  var flags = numeric.rep([n], 0);
  var P = B.P;
  var Q = [];
  var i;

  for (i = P.length - 1; i !== -1; --i) {
    flags[P[i]] = 1;
  }

  for (i = n - 1; i !== -1; --i) {
    if (flags[i] === 0) Q.push(i);
  }

  var g = numeric.getRange;
  var I = numeric.linspace(0, m - 1),
      J = numeric.linspace(0, o - 1);
  var Aeq2 = g(Aeq, I, Q),
      A1 = g(A, J, P),
      A2 = g(A, J, Q),
      dot = numeric.dot,
      sub = numeric.sub;
  var A3 = dot(A1, B.I);
  var A4 = sub(A2, dot(A3, Aeq2)),
      b4 = sub(b, dot(A3, beq));
  var c1 = Array(P.length),
      c2 = Array(Q.length);

  for (i = P.length - 1; i !== -1; --i) {
    c1[i] = c[P[i]];
  }

  for (i = Q.length - 1; i !== -1; --i) {
    c2[i] = c[Q[i]];
  }

  var c4 = sub(c2, dot(c1, dot(B.I, Aeq2)));

  var S = numeric._solveLP(c4, A4, b4, tol, maxit);

  var x2 = S.solution;
  if (x2 !== x2) return S;
  var x1 = dot(B.I, sub(beq, dot(Aeq2, x2)));
  var x = Array(c.length);

  for (i = P.length - 1; i !== -1; --i) {
    x[P[i]] = x1[i];
  }

  for (i = Q.length - 1; i !== -1; --i) {
    x[Q[i]] = x2[i];
  }

  return {
    solution: x,
    message: S.message,
    iterations: S.iterations
  };
};

numeric.MPStoLP = function MPStoLP(MPS) {
  if (MPS instanceof String) {
    MPS.split('\n');
  }

  var state = 0;
  var states = ['Initial state', 'NAME', 'ROWS', 'COLUMNS', 'RHS', 'BOUNDS', 'ENDATA'];
  var n = MPS.length;
  var i,
      j,
      z,
      N = 0,
      rows = {},
      sign = [],
      rl = 0,
      vars = {},
      nv = 0;
  var name;
  var c = [],
      A = [],
      b = [];

  function err(e) {
    throw new Error('MPStoLP: ' + e + '\nLine ' + i + ': ' + MPS[i] + '\nCurrent state: ' + states[state] + '\n');
  }

  for (i = 0; i < n; ++i) {
    z = MPS[i];
    var w0 = z.match(/\S*/g);
    var w = [];

    for (j = 0; j < w0.length; ++j) {
      if (w0[j] !== '') w.push(w0[j]);
    }

    if (w.length === 0) continue;

    for (j = 0; j < states.length; ++j) {
      if (z.substr(0, states[j].length) === states[j]) break;
    }

    if (j < states.length) {
      state = j;

      if (j === 1) {
        name = w[1];
      }

      if (j === 6) return {
        name: name,
        c: c,
        A: numeric.transpose(A),
        b: b,
        rows: rows,
        vars: vars
      };
      continue;
    }

    switch (state) {
      case 0:
      case 1:
        err('Unexpected line');

      case 2:
        switch (w[0]) {
          case 'N':
            if (N === 0) N = w[1];else err('Two or more N rows');
            break;

          case 'L':
            rows[w[1]] = rl;
            sign[rl] = 1;
            b[rl] = 0;
            ++rl;
            break;

          case 'G':
            rows[w[1]] = rl;
            sign[rl] = -1;
            b[rl] = 0;
            ++rl;
            break;

          case 'E':
            rows[w[1]] = rl;
            sign[rl] = 0;
            b[rl] = 0;
            ++rl;
            break;

          default:
            err('Parse error ' + numeric.prettyPrint(w));
        }

        break;

      case 3:
        if (!vars.hasOwnProperty(w[0])) {
          vars[w[0]] = nv;
          c[nv] = 0;
          A[nv] = numeric.rep([rl], 0);
          ++nv;
        }

        var p = vars[w[0]];

        for (j = 1; j < w.length; j += 2) {
          if (w[j] === N) {
            c[p] = parseFloat(w[j + 1]);
            continue;
          }

          var q = rows[w[j]];
          A[p][q] = (sign[q] < 0 ? -1 : 1) * parseFloat(w[j + 1]);
        }

        break;

      case 4:
        for (j = 1; j < w.length; j += 2) {
          b[rows[w[j]]] = (sign[rows[w[j]]] < 0 ? -1 : 1) * parseFloat(w[j + 1]);
        }

        break;

      case 5:
        /*FIXME*/
        break;

      case 6:
        err('Internal error');
    }
  }

  err('Reached end of file without ENDATA');
}; // seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yipee'); Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="http://bit.ly/srandom-512"></script>
//                             Seeds using physical random bits downloaded
//                             from random.org.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from call.jsonlib.com,
//                             which is faster than random.org.
//
// Examples:
//
//   Math.seedrandom("hello");            // Use "hello" as the seed.
//   document.write(Math.random());       // Always 0.5463663768140734
//   document.write(Math.random());       // Always 0.43973793770592234
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable.
//
//   Math.random = rng1;                  // Continue "hello" prng sequence.
//   document.write(Math.random());       // Always 0.554769432473455
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway.  Seeding is more expensive,
// especially if you use auto-seeding.  Some details (timings on Chrome 4):
//
// Our Math.random()            - avg less than 0.002 milliseconds per call
// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom()                 - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

/**
 * All code is in an anonymous closure to keep the global namespace clean.
 *
 * @param {number=} overflow
 * @param {number=} startdenom
 */
// Patched by Seb so that seedrandom.js does not pollute the Math object.
// My tests suggest that doing Math.trouble = 1 makes Math lookups about 5%
// slower.


numeric.seedrandom = {
  pow: Math.pow,
  random: Math.random
};

(function (pool, math, width, chunks, significance, overflow, startdenom) {
  //
  // seedrandom()
  // This is the seedrandom function described above.
  //
  math['seedrandom'] = function seedrandom(seed, use_entropy) {
    var key = [];
    var arc4; // Flatten the seed string or build one from local entropy if needed.

    seed = mixkey(flatten(use_entropy ? [seed, pool] : arguments.length ? seed : [new Date().getTime(), pool, window], 3), key); // Use the seed to initialize an ARC4 generator.

    arc4 = new ARC4(key); // Mix the randomness into accumulated entropy.

    mixkey(arc4.S, pool); // Override Math.random
    // This function returns a random double in [0, 1) that contains
    // randomness in every bit of the mantissa of the IEEE 754 value.

    math['random'] = function random() {
      // Closure to return a random double:
      var n = arc4.g(chunks); // Start with a numerator n < 2 ^ 48

      var d = startdenom; //   and denominator d = 2 ^ 48.

      var x = 0; //   and no 'extra last byte'.

      while (n < significance) {
        // Fill up all significant digits by
        n = (n + x) * width; //   shifting numerator and

        d *= width; //   denominator and generating a

        x = arc4.g(1); //   new least-significant-byte.
      }

      while (n >= overflow) {
        // To avoid rounding up, before adding
        n /= 2; //   last byte, shift everything

        d /= 2; //   right using integer math until

        x >>>= 1; //   we have exactly the desired bits.
      }

      return (n + x) / d; // Form the number within [0, 1).
    }; // Return the seed that was used


    return seed;
  }; //
  // ARC4
  //
  // An ARC4 implementation.  The constructor takes a key in the form of
  // an array of at most (width) integers that should be 0 <= x < (width).
  //
  // The g(count) method returns a pseudorandom integer that concatenates
  // the next (count) outputs from ARC4.  Its return value is a number x
  // that is in the range 0 <= x < (width ^ count).
  //

  /** @constructor */


  function ARC4(key) {
    var t,
        u,
        me = this,
        keylen = key.length;
    var i = 0,
        j = me.i = me.j = me.m = 0;
    me.S = [];
    me.c = []; // The empty key [] is treated as [0].

    if (!keylen) {
      key = [keylen++];
    } // Set up S using the standard key scheduling algorithm.


    while (i < width) {
      me.S[i] = i++;
    }

    for (i = 0; i < width; i++) {
      t = me.S[i];
      j = lowbits(j + t + key[i % keylen]);
      u = me.S[j];
      me.S[i] = u;
      me.S[j] = t;
    } // The "g" method returns the next (count) outputs as one number.


    me.g = function getnext(count) {
      var s = me.S;
      var i = lowbits(me.i + 1);
      var t = s[i];
      var j = lowbits(me.j + t);
      var u = s[j];
      s[i] = u;
      s[j] = t;
      var r = s[lowbits(t + u)];

      while (--count) {
        i = lowbits(i + 1);
        t = s[i];
        j = lowbits(j + t);
        u = s[j];
        s[i] = u;
        s[j] = t;
        r = r * width + s[lowbits(t + u)];
      }

      me.i = i;
      me.j = j;
      return r;
    }; // For robust unpredictability discard an initial batch of values.
    // See http://www.rsa.com/rsalabs/node.asp?id=2009


    me.g(width);
  } //
  // flatten()
  // Converts an object tree to nested arrays of strings.
  //

  /** @param {Object=} result
   * @param {string=} prop
   * @param {string=} typ */


  function flatten(obj, depth, result, prop, typ) {
    result = [];
    typ = typeof obj;

    if (depth && typ == 'object') {
      for (prop in obj) {
        if (prop.indexOf('S') < 5) {
          // Avoid FF3 bug (local/sessionStorage)
          try {
            result.push(flatten(obj[prop], depth - 1));
          } catch (e) {}
        }
      }
    }

    return result.length ? result : obj + (typ != 'string' ? '\0' : '');
  } //
  // mixkey()
  // Mixes a string seed into a key that is an array of integers, and
  // returns a shortened string seed that is equivalent to the result key.
  //

  /** @param {number=} smear
   * @param {number=} j */


  function mixkey(seed, key, smear, j) {
    seed += ''; // Ensure the seed is a string

    smear = 0;

    for (j = 0; j < seed.length; j++) {
      key[lowbits(j)] = lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
    }

    seed = '';

    for (j in key) {
      seed += String.fromCharCode(key[j]);
    }

    return seed;
  } //
  // lowbits()
  // A quick "n mod width" for width a power of 2.
  //


  function lowbits(n) {
    return n & width - 1;
  } //
  // The following constants are related to IEEE 754 limits.
  //


  startdenom = math.pow(width, chunks);
  significance = math.pow(2, significance);
  overflow = significance * 2; //
  // When seedrandom.js is loaded, we immediately mix a few bits
  // from the built-in RNG into the entropy pool.  Because we do
  // not want to intefere with determinstic PRNG state later,
  // seedrandom will not call math.random on its own again after
  // initialization.
  //

  mixkey(math.random(), pool); // End anonymous scope, and pass initial values.
})([], // pool: entropy pool starts empty
numeric.seedrandom, // math: package containing random, pow, and seedrandom
256, // width: each RC4 output is 0 <= x < 256
6, // chunks: at least six RC4 outputs for each double
52 // significance: there are 52 significant digits in a double
);
/* This file is a slightly modified version of quadprog.js from Alberto Santini.
 * It has been slightly modified by Sébastien Loisel to make sure that it handles
 * 0-based Arrays instead of 1-based Arrays.
 * License is in resources/LICENSE.quadprog */


(function (exports) {
  function base0to1(A) {
    if (typeof A !== 'object') {
      return A;
    }

    var ret = [],
        i,
        n = A.length;

    for (i = 0; i < n; i++) {
      ret[i + 1] = base0to1(A[i]);
    }

    return ret;
  }

  function base1to0(A) {
    if (typeof A !== 'object') {
      return A;
    }

    var ret = [],
        i,
        n = A.length;

    for (i = 1; i < n; i++) {
      ret[i - 1] = base1to0(A[i]);
    }

    return ret;
  }

  function dpori(a, lda, n) {
    var i, j, k, kp1, t;

    for (k = 1; k <= n; k = k + 1) {
      a[k][k] = 1 / a[k][k];
      t = -a[k][k]; //~ dscal(k - 1, t, a[1][k], 1);

      for (i = 1; i < k; i = i + 1) {
        a[i][k] = t * a[i][k];
      }

      kp1 = k + 1;

      if (n < kp1) {
        break;
      }

      for (j = kp1; j <= n; j = j + 1) {
        t = a[k][j];
        a[k][j] = 0; //~ daxpy(k, t, a[1][k], 1, a[1][j], 1);

        for (i = 1; i <= k; i = i + 1) {
          a[i][j] = a[i][j] + t * a[i][k];
        }
      }
    }
  }

  function dposl(a, lda, n, b) {
    var i, k, kb, t;

    for (k = 1; k <= n; k = k + 1) {
      //~ t = ddot(k - 1, a[1][k], 1, b[1], 1);
      t = 0;

      for (i = 1; i < k; i = i + 1) {
        t = t + a[i][k] * b[i];
      }

      b[k] = (b[k] - t) / a[k][k];
    }

    for (kb = 1; kb <= n; kb = kb + 1) {
      k = n + 1 - kb;
      b[k] = b[k] / a[k][k];
      t = -b[k]; //~ daxpy(k - 1, t, a[1][k], 1, b[1], 1);

      for (i = 1; i < k; i = i + 1) {
        b[i] = b[i] + t * a[i][k];
      }
    }
  }

  function dpofa(a, lda, n, info) {
    var i, j, jm1, k, t, s;

    for (j = 1; j <= n; j = j + 1) {
      info[1] = j;
      s = 0;
      jm1 = j - 1;

      if (jm1 < 1) {
        s = a[j][j] - s;

        if (s <= 0) {
          break;
        }

        a[j][j] = Math.sqrt(s);
      } else {
        for (k = 1; k <= jm1; k = k + 1) {
          //~ t = a[k][j] - ddot(k - 1, a[1][k], 1, a[1][j], 1);
          t = a[k][j];

          for (i = 1; i < k; i = i + 1) {
            t = t - a[i][j] * a[i][k];
          }

          t = t / a[k][k];
          a[k][j] = t;
          s = s + t * t;
        }

        s = a[j][j] - s;

        if (s <= 0) {
          break;
        }

        a[j][j] = Math.sqrt(s);
      }

      info[1] = 0;
    }
  }

  function qpgen2(dmat, dvec, fddmat, n, sol, crval, amat, bvec, fdamat, q, meq, iact, nact, iter, work, ierr) {
    var i, j, l, l1, info, it1, iwzv, iwrv, iwrm, iwsv, iwuv, nvl, r, iwnbv, temp, sum, t1, tt, gc, gs, nu, t1inf, t2min, vsmall, tmpa, tmpb, go;
    r = Math.min(n, q);
    l = 2 * n + r * (r + 5) / 2 + 2 * q + 1;
    vsmall = 1.0e-60;

    do {
      vsmall = vsmall + vsmall;
      tmpa = 1 + 0.1 * vsmall;
      tmpb = 1 + 0.2 * vsmall;
    } while (tmpa <= 1 || tmpb <= 1);

    for (i = 1; i <= n; i = i + 1) {
      work[i] = dvec[i];
    }

    for (i = n + 1; i <= l; i = i + 1) {
      work[i] = 0;
    }

    for (i = 1; i <= q; i = i + 1) {
      iact[i] = 0;
    }

    info = [];

    if (ierr[1] === 0) {
      dpofa(dmat, fddmat, n, info);

      if (info[1] !== 0) {
        ierr[1] = 2;
        return;
      }

      dposl(dmat, fddmat, n, dvec);
      dpori(dmat, fddmat, n);
    } else {
      for (j = 1; j <= n; j = j + 1) {
        sol[j] = 0;

        for (i = 1; i <= j; i = i + 1) {
          sol[j] = sol[j] + dmat[i][j] * dvec[i];
        }
      }

      for (j = 1; j <= n; j = j + 1) {
        dvec[j] = 0;

        for (i = j; i <= n; i = i + 1) {
          dvec[j] = dvec[j] + dmat[j][i] * sol[i];
        }
      }
    }

    crval[1] = 0;

    for (j = 1; j <= n; j = j + 1) {
      sol[j] = dvec[j];
      crval[1] = crval[1] + work[j] * sol[j];
      work[j] = 0;

      for (i = j + 1; i <= n; i = i + 1) {
        dmat[i][j] = 0;
      }
    }

    crval[1] = -crval[1] / 2;
    ierr[1] = 0;
    iwzv = n;
    iwrv = iwzv + n;
    iwuv = iwrv + r;
    iwrm = iwuv + r + 1;
    iwsv = iwrm + r * (r + 1) / 2;
    iwnbv = iwsv + q;

    for (i = 1; i <= q; i = i + 1) {
      sum = 0;

      for (j = 1; j <= n; j = j + 1) {
        sum = sum + amat[j][i] * amat[j][i];
      }

      work[iwnbv + i] = Math.sqrt(sum);
    }

    nact = 0;
    iter[1] = 0;
    iter[2] = 0;

    function fn_goto_50() {
      iter[1] = iter[1] + 1;
      l = iwsv;

      for (i = 1; i <= q; i = i + 1) {
        l = l + 1;
        sum = -bvec[i];

        for (j = 1; j <= n; j = j + 1) {
          sum = sum + amat[j][i] * sol[j];
        }

        if (Math.abs(sum) < vsmall) {
          sum = 0;
        }

        if (i > meq) {
          work[l] = sum;
        } else {
          work[l] = -Math.abs(sum);

          if (sum > 0) {
            for (j = 1; j <= n; j = j + 1) {
              amat[j][i] = -amat[j][i];
            }

            bvec[i] = -bvec[i];
          }
        }
      }

      for (i = 1; i <= nact; i = i + 1) {
        work[iwsv + iact[i]] = 0;
      }

      nvl = 0;
      temp = 0;

      for (i = 1; i <= q; i = i + 1) {
        if (work[iwsv + i] < temp * work[iwnbv + i]) {
          nvl = i;
          temp = work[iwsv + i] / work[iwnbv + i];
        }
      }

      if (nvl === 0) {
        return 999;
      }

      return 0;
    }

    function fn_goto_55() {
      for (i = 1; i <= n; i = i + 1) {
        sum = 0;

        for (j = 1; j <= n; j = j + 1) {
          sum = sum + dmat[j][i] * amat[j][nvl];
        }

        work[i] = sum;
      }

      l1 = iwzv;

      for (i = 1; i <= n; i = i + 1) {
        work[l1 + i] = 0;
      }

      for (j = nact + 1; j <= n; j = j + 1) {
        for (i = 1; i <= n; i = i + 1) {
          work[l1 + i] = work[l1 + i] + dmat[i][j] * work[j];
        }
      }

      t1inf = true;

      for (i = nact; i >= 1; i = i - 1) {
        sum = work[i];
        l = iwrm + i * (i + 3) / 2;
        l1 = l - i;

        for (j = i + 1; j <= nact; j = j + 1) {
          sum = sum - work[l] * work[iwrv + j];
          l = l + j;
        }

        sum = sum / work[l1];
        work[iwrv + i] = sum;

        if (iact[i] < meq) {
          // continue;
          break;
        }

        if (sum < 0) {
          // continue;
          break;
        }

        t1inf = false;
        it1 = i;
      }

      if (!t1inf) {
        t1 = work[iwuv + it1] / work[iwrv + it1];

        for (i = 1; i <= nact; i = i + 1) {
          if (iact[i] < meq) {
            // continue;
            break;
          }

          if (work[iwrv + i] < 0) {
            // continue;
            break;
          }

          temp = work[iwuv + i] / work[iwrv + i];

          if (temp < t1) {
            t1 = temp;
            it1 = i;
          }
        }
      }

      sum = 0;

      for (i = iwzv + 1; i <= iwzv + n; i = i + 1) {
        sum = sum + work[i] * work[i];
      }

      if (Math.abs(sum) <= vsmall) {
        if (t1inf) {
          ierr[1] = 1; // GOTO 999

          return 999;
        } else {
          for (i = 1; i <= nact; i = i + 1) {
            work[iwuv + i] = work[iwuv + i] - t1 * work[iwrv + i];
          }

          work[iwuv + nact + 1] = work[iwuv + nact + 1] + t1; // GOTO 700

          return 700;
        }
      } else {
        sum = 0;

        for (i = 1; i <= n; i = i + 1) {
          sum = sum + work[iwzv + i] * amat[i][nvl];
        }

        tt = -work[iwsv + nvl] / sum;
        t2min = true;

        if (!t1inf) {
          if (t1 < tt) {
            tt = t1;
            t2min = false;
          }
        }

        for (i = 1; i <= n; i = i + 1) {
          sol[i] = sol[i] + tt * work[iwzv + i];

          if (Math.abs(sol[i]) < vsmall) {
            sol[i] = 0;
          }
        }

        crval[1] = crval[1] + tt * sum * (tt / 2 + work[iwuv + nact + 1]);

        for (i = 1; i <= nact; i = i + 1) {
          work[iwuv + i] = work[iwuv + i] - tt * work[iwrv + i];
        }

        work[iwuv + nact + 1] = work[iwuv + nact + 1] + tt;

        if (t2min) {
          nact = nact + 1;
          iact[nact] = nvl;
          l = iwrm + (nact - 1) * nact / 2 + 1;

          for (i = 1; i <= nact - 1; i = i + 1) {
            work[l] = work[i];
            l = l + 1;
          }

          if (nact === n) {
            work[l] = work[n];
          } else {
            for (i = n; i >= nact + 1; i = i - 1) {
              if (work[i] === 0) {
                // continue;
                break;
              }

              gc = Math.max(Math.abs(work[i - 1]), Math.abs(work[i]));
              gs = Math.min(Math.abs(work[i - 1]), Math.abs(work[i]));

              if (work[i - 1] >= 0) {
                temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
              } else {
                temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
              }

              gc = work[i - 1] / temp;
              gs = work[i] / temp;

              if (gc === 1) {
                // continue;
                break;
              }

              if (gc === 0) {
                work[i - 1] = gs * temp;

                for (j = 1; j <= n; j = j + 1) {
                  temp = dmat[j][i - 1];
                  dmat[j][i - 1] = dmat[j][i];
                  dmat[j][i] = temp;
                }
              } else {
                work[i - 1] = temp;
                nu = gs / (1 + gc);

                for (j = 1; j <= n; j = j + 1) {
                  temp = gc * dmat[j][i - 1] + gs * dmat[j][i];
                  dmat[j][i] = nu * (dmat[j][i - 1] + temp) - dmat[j][i];
                  dmat[j][i - 1] = temp;
                }
              }
            }

            work[l] = work[nact];
          }
        } else {
          sum = -bvec[nvl];

          for (j = 1; j <= n; j = j + 1) {
            sum = sum + sol[j] * amat[j][nvl];
          }

          if (nvl > meq) {
            work[iwsv + nvl] = sum;
          } else {
            work[iwsv + nvl] = -Math.abs(sum);

            if (sum > 0) {
              for (j = 1; j <= n; j = j + 1) {
                amat[j][nvl] = -amat[j][nvl];
              }

              bvec[nvl] = -bvec[nvl];
            }
          } // GOTO 700


          return 700;
        }
      }

      return 0;
    }

    function fn_goto_797() {
      l = iwrm + it1 * (it1 + 1) / 2 + 1;
      l1 = l + it1;

      if (work[l1] === 0) {
        // GOTO 798
        return 798;
      }

      gc = Math.max(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
      gs = Math.min(Math.abs(work[l1 - 1]), Math.abs(work[l1]));

      if (work[l1 - 1] >= 0) {
        temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
      } else {
        temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
      }

      gc = work[l1 - 1] / temp;
      gs = work[l1] / temp;

      if (gc === 1) {
        // GOTO 798
        return 798;
      }

      if (gc === 0) {
        for (i = it1 + 1; i <= nact; i = i + 1) {
          temp = work[l1 - 1];
          work[l1 - 1] = work[l1];
          work[l1] = temp;
          l1 = l1 + i;
        }

        for (i = 1; i <= n; i = i + 1) {
          temp = dmat[i][it1];
          dmat[i][it1] = dmat[i][it1 + 1];
          dmat[i][it1 + 1] = temp;
        }
      } else {
        nu = gs / (1 + gc);

        for (i = it1 + 1; i <= nact; i = i + 1) {
          temp = gc * work[l1 - 1] + gs * work[l1];
          work[l1] = nu * (work[l1 - 1] + temp) - work[l1];
          work[l1 - 1] = temp;
          l1 = l1 + i;
        }

        for (i = 1; i <= n; i = i + 1) {
          temp = gc * dmat[i][it1] + gs * dmat[i][it1 + 1];
          dmat[i][it1 + 1] = nu * (dmat[i][it1] + temp) - dmat[i][it1 + 1];
          dmat[i][it1] = temp;
        }
      }

      return 0;
    }

    function fn_goto_798() {
      l1 = l - it1;

      for (i = 1; i <= it1; i = i + 1) {
        work[l1] = work[l];
        l = l + 1;
        l1 = l1 + 1;
      }

      work[iwuv + it1] = work[iwuv + it1 + 1];
      iact[it1] = iact[it1 + 1];
      it1 = it1 + 1;

      if (it1 < nact) {
        // GOTO 797
        return 797;
      }

      return 0;
    }

    function fn_goto_799() {
      work[iwuv + nact] = work[iwuv + nact + 1];
      work[iwuv + nact + 1] = 0;
      iact[nact] = 0;
      nact = nact - 1;
      iter[2] = iter[2] + 1;
      return 0;
    }

    go = 0;

    while (true) {
      go = fn_goto_50();

      if (go === 999) {
        return;
      }

      while (true) {
        go = fn_goto_55();

        if (go === 0) {
          break;
        }

        if (go === 999) {
          return;
        }

        if (go === 700) {
          if (it1 === nact) {
            fn_goto_799();
          } else {
            while (true) {
              fn_goto_797();
              go = fn_goto_798();

              if (go !== 797) {
                break;
              }
            }

            fn_goto_799();
          }
        }
      }
    }
  }

  function solveQP(Dmat, dvec, Amat, bvec, meq, factorized) {
    Dmat = base0to1(Dmat);
    dvec = base0to1(dvec);
    Amat = base0to1(Amat);
    var i,
        n,
        q,
        nact,
        r,
        crval = [],
        iact = [],
        sol = [],
        work = [],
        iter = [],
        message;
    meq = meq || 0;
    factorized = factorized ? base0to1(factorized) : [undefined, 0];
    bvec = bvec ? base0to1(bvec) : []; // In Fortran the array index starts from 1

    n = Dmat.length - 1;
    q = Amat[1].length - 1;

    if (!bvec) {
      for (i = 1; i <= q; i = i + 1) {
        bvec[i] = 0;
      }
    }

    for (i = 1; i <= q; i = i + 1) {
      iact[i] = 0;
    }

    nact = 0;
    r = Math.min(n, q);

    for (i = 1; i <= n; i = i + 1) {
      sol[i] = 0;
    }

    crval[1] = 0;

    for (i = 1; i <= 2 * n + r * (r + 5) / 2 + 2 * q + 1; i = i + 1) {
      work[i] = 0;
    }

    for (i = 1; i <= 2; i = i + 1) {
      iter[i] = 0;
    }

    qpgen2(Dmat, dvec, n, n, sol, crval, Amat, bvec, n, q, meq, iact, nact, iter, work, factorized);
    message = '';

    if (factorized[1] === 1) {
      message = 'constraints are inconsistent, no solution!';
    }

    if (factorized[1] === 2) {
      message = 'matrix D in quadratic function is not positive definite!';
    }

    return {
      solution: base1to0(sol),
      value: base1to0(crval),
      unconstrained_solution: base1to0(dvec),
      iterations: base1to0(iter),
      iact: base1to0(iact),
      message: message
    };
  }

  exports.solveQP = solveQP;
})(numeric);
/*
Shanti Rao sent me this routine by private email. I had to modify it
slightly to work on Arrays instead of using a Matrix object.
It is apparently translated from http://stitchpanorama.sourceforge.net/Python/svd.py
*/


numeric.svd = function svd(A) {
  var temp; //Compute the thin SVD from G. H. Golub and C. Reinsch, Numer. Math. 14, 403-420 (1970)

  var prec = numeric.epsilon; //Math.pow(2,-52) // assumes double prec

  var tolerance = 1e-64 / prec;
  var itmax = 50;
  var c = 0;
  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  var u = numeric.clone(A);
  var m = u.length;
  var n = u[0].length;
  if (m < n) throw 'Need more rows than columns';
  var e = new Array(n);
  var q = new Array(n);

  for (i = 0; i < n; i++) {
    e[i] = q[i] = 0.0;
  }

  var v = numeric.rep([n, n], 0); //	v.zero();

  function pythag(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a > b) return a * Math.sqrt(1.0 + b * b / a / a);else if (b == 0.0) return a;
    return b * Math.sqrt(1.0 + a * a / b / b);
  } //Householder's reduction to bidiagonal form


  var f = 0.0;
  var g = 0.0;
  var h = 0.0;
  var x = 0.0;
  var y = 0.0;
  var z = 0.0;
  var s = 0.0;

  for (i = 0; i < n; i++) {
    e[i] = g;
    s = 0.0;
    l = i + 1;

    for (j = i; j < m; j++) {
      s += u[j][i] * u[j][i];
    }

    if (s <= tolerance) g = 0.0;else {
      f = u[i][i];
      g = Math.sqrt(s);
      if (f >= 0.0) g = -g;
      h = f * g - s;
      u[i][i] = f - g;

      for (j = l; j < n; j++) {
        s = 0.0;

        for (k = i; k < m; k++) {
          s += u[k][i] * u[k][j];
        }

        f = s / h;

        for (k = i; k < m; k++) {
          u[k][j] += f * u[k][i];
        }
      }
    }
    q[i] = g;
    s = 0.0;

    for (j = l; j < n; j++) {
      s = s + u[i][j] * u[i][j];
    }

    if (s <= tolerance) g = 0.0;else {
      f = u[i][i + 1];
      g = Math.sqrt(s);
      if (f >= 0.0) g = -g;
      h = f * g - s;
      u[i][i + 1] = f - g;

      for (j = l; j < n; j++) {
        e[j] = u[i][j] / h;
      }

      for (j = l; j < m; j++) {
        s = 0.0;

        for (k = l; k < n; k++) {
          s += u[j][k] * u[i][k];
        }

        for (k = l; k < n; k++) {
          u[j][k] += s * e[k];
        }
      }
    }
    y = Math.abs(q[i]) + Math.abs(e[i]);
    if (y > x) x = y;
  } // accumulation of right hand gtransformations


  for (i = n - 1; i != -1; i += -1) {
    if (g != 0.0) {
      h = g * u[i][i + 1];

      for (j = l; j < n; j++) {
        v[j][i] = u[i][j] / h;
      }

      for (j = l; j < n; j++) {
        s = 0.0;

        for (k = l; k < n; k++) {
          s += u[i][k] * v[k][j];
        }

        for (k = l; k < n; k++) {
          v[k][j] += s * v[k][i];
        }
      }
    }

    for (j = l; j < n; j++) {
      v[i][j] = 0;
      v[j][i] = 0;
    }

    v[i][i] = 1;
    g = e[i];
    l = i;
  } // accumulation of left hand transformations


  for (i = n - 1; i != -1; i += -1) {
    l = i + 1;
    g = q[i];

    for (j = l; j < n; j++) {
      u[i][j] = 0;
    }

    if (g != 0.0) {
      h = u[i][i] * g;

      for (j = l; j < n; j++) {
        s = 0.0;

        for (k = l; k < m; k++) {
          s += u[k][i] * u[k][j];
        }

        f = s / h;

        for (k = i; k < m; k++) {
          u[k][j] += f * u[k][i];
        }
      }

      for (j = i; j < m; j++) {
        u[j][i] = u[j][i] / g;
      }
    } else for (j = i; j < m; j++) {
      u[j][i] = 0;
    }

    u[i][i] += 1;
  } // diagonalization of the bidiagonal form


  prec = prec * x;

  for (k = n - 1; k != -1; k += -1) {
    for (var iteration = 0; iteration < itmax; iteration++) {
      // test f splitting
      var test_convergence = false;

      for (l = k; l != -1; l += -1) {
        if (Math.abs(e[l]) <= prec) {
          test_convergence = true;
          break;
        }

        if (Math.abs(q[l - 1]) <= prec) break;
      }

      if (!test_convergence) {
        // cancellation of e[l] if l>0
        c = 0.0;
        s = 1.0;
        var l1 = l - 1;

        for (i = l; i < k + 1; i++) {
          f = s * e[i];
          e[i] = c * e[i];
          if (Math.abs(f) <= prec) break;
          g = q[i];
          h = pythag(f, g);
          q[i] = h;
          c = g / h;
          s = -f / h;

          for (j = 0; j < m; j++) {
            y = u[j][l1];
            z = u[j][i];
            u[j][l1] = y * c + z * s;
            u[j][i] = -y * s + z * c;
          }
        }
      } // test f convergence


      z = q[k];

      if (l == k) {
        //convergence
        if (z < 0.0) {
          //q[k] is made non-negative
          q[k] = -z;

          for (j = 0; j < n; j++) {
            v[j][k] = -v[j][k];
          }
        }

        break; //break out of iteration loop and move on to next k value
      }

      if (iteration >= itmax - 1) throw 'Error: no convergence.'; // shift from bottom 2x2 minor

      x = q[l];
      y = q[k - 1];
      g = e[k - 1];
      h = e[k];
      f = ((y - z) * (y + z) + (g - h) * (g + h)) / (2.0 * h * y);
      g = pythag(f, 1.0);
      if (f < 0.0) f = ((x - z) * (x + z) + h * (y / (f - g) - h)) / x;else f = ((x - z) * (x + z) + h * (y / (f + g) - h)) / x; // next QR transformation

      c = 1.0;
      s = 1.0;

      for (i = l + 1; i < k + 1; i++) {
        g = e[i];
        y = q[i];
        h = s * g;
        g = c * g;
        z = pythag(f, h);
        e[i - 1] = z;
        c = f / z;
        s = h / z;
        f = x * c + g * s;
        g = -x * s + g * c;
        h = y * s;
        y = y * c;

        for (j = 0; j < n; j++) {
          x = v[j][i - 1];
          z = v[j][i];
          v[j][i - 1] = x * c + z * s;
          v[j][i] = -x * s + z * c;
        }

        z = pythag(f, h);
        q[i - 1] = z;
        c = f / z;
        s = h / z;
        f = c * g + s * y;
        x = -s * g + c * y;

        for (j = 0; j < m; j++) {
          y = u[j][i - 1];
          z = u[j][i];
          u[j][i - 1] = y * c + z * s;
          u[j][i] = -y * s + z * c;
        }
      }

      e[l] = 0.0;
      e[k] = f;
      q[k] = x;
    }
  } //vt= transpose(v)
  //return (u,q,vt)


  for (i = 0; i < q.length; i++) {
    if (q[i] < prec) q[i] = 0;
  } //sort eigenvalues


  for (i = 0; i < n; i++) {
    //writeln(q)
    for (j = i - 1; j >= 0; j--) {
      if (q[j] < q[i]) {
        //  writeln(i,'-',j)
        c = q[j];
        q[j] = q[i];
        q[i] = c;

        for (k = 0; k < u.length; k++) {
          temp = u[k][i];
          u[k][i] = u[k][j];
          u[k][j] = temp;
        }

        for (k = 0; k < v.length; k++) {
          temp = v[k][i];
          v[k][i] = v[k][j];
          v[k][j] = temp;
        } //	   u.swapCols(i,j)
        //	   v.swapCols(i,j)


        i = j;
      }
    }
  }

  return {
    U: u,
    S: q,
    V: v
  };
};

/***/ }),

/***/ "./src/js/lib/suncalc.js":
/*!*******************************!*\
  !*** ./src/js/lib/suncalc.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SunCalc": () => (/* binding */ SunCalc)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
SunCalc is a JavaScript library for calculating sun/moon position and light phases.
https://github.com/mourner/suncalc

Original Copyright (c) 2011-2015, Vladimir Agafonkin
ES2019 Modifications Copyright (c) 2020, Theoodre Kruczek
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas
*/
class SunCalc {
  // https://tauday.com/tau-manifesto
  // calculations for sun times
  // sun times configuration (angle, morning name, evening name)
  static toJulian(date) {
    return date.valueOf() / SunCalc.MILLISECONDS_IN_A_DAY - 0.5 + SunCalc.J1970;
  }

  static fromJulian(j) {
    return new Date((j + 0.5 - SunCalc.J1970) * SunCalc.MILLISECONDS_IN_A_DAY);
  }

  static toDays(date) {
    return SunCalc.toJulian(date) - SunCalc.J2000;
  }

  // obliquity of the Earth
  static rightAscension(l, b) {
    return Math.atan2(Math.sin(l) * Math.cos(SunCalc.e) - Math.tan(b) * Math.sin(SunCalc.e), Math.cos(l));
  }

  static declination(l, b) {
    return Math.asin(Math.sin(b) * Math.cos(SunCalc.e) + Math.cos(b) * Math.sin(SunCalc.e) * Math.sin(l));
  }

  static azimuth(H, phi, dec) {
    return Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
  }

  static altitude(H, phi, dec) {
    return Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
  }

  static siderealTime(d, lw) {
    return SunCalc.TAU / 360 * (280.16 + 360.9856235 * d) - lw;
  }

  static astroRefraction(h) {
    if (h < 0) // the following formula works for positive altitudes only.
      h = 0; // if h = -0.08901179 a div/0 would occur.
    // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    // 1.02 / Math.tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to SunCalc.TAU / 360:

    return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
  } // general sun calculations


  static solarMeanAnomaly(d) {
    return SunCalc.TAU / 360 * (357.5291 + 0.98560028 * d);
  }

  static eclipticLongitude(M) {
    var C = SunCalc.TAU / 360 * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M)),
        // equation of center
    P = SunCalc.TAU / 360 * 102.9372; // perihelion of the Earth

    return M + C + P + SunCalc.TAU / 2;
  }

  static sunCoords(d) {
    var M = SunCalc.solarMeanAnomaly(d),
        L = SunCalc.eclipticLongitude(M);
    return {
      dec: SunCalc.declination(L, 0),
      ra: SunCalc.rightAscension(L, 0)
    };
  }

  static julianCycle(d, lw) {
    return Math.round(d - SunCalc.J0 - lw / (2 * SunCalc.TAU / 2));
  }

  static approxTransit(Ht, lw, n) {
    return SunCalc.J0 + (Ht + lw) / (2 * SunCalc.TAU / 2) + n;
  }

  static solarTransitJ(ds, M, L) {
    return SunCalc.J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
  }

  static hourAngle(h, phi, d) {
    return Math.acos((Math.sin(h) - Math.sin(phi) * Math.sin(d)) / (Math.cos(phi) * Math.cos(d)));
  } // returns set time for the given sun altitude


  static getSetJ(h, lw, phi, dec, n, M, L) {
    var w = SunCalc.hourAngle(h, phi, dec),
        a = SunCalc.approxTransit(w, lw, n);
    return SunCalc.solarTransitJ(a, M, L);
  }

  static moonCoords(d) {
    // geocentric ecliptic coordinates of the moon
    var L = SunCalc.TAU / 360 * (218.316 + 13.176396 * d),
        // ecliptic longitude
    M = SunCalc.TAU / 360 * (134.963 + 13.064993 * d),
        // mean anomaly
    F = SunCalc.TAU / 360 * (93.272 + 13.22935 * d),
        // mean distance
    l = L + SunCalc.TAU / 360 * 6.289 * Math.sin(M),
        // longitude
    b = SunCalc.TAU / 360 * 5.128 * Math.sin(F),
        // latitude
    dt = 385001 - 20905 * Math.cos(M); // distance to the moon in km

    return {
      ra: SunCalc.rightAscension(l, b),
      dec: SunCalc.declination(l, b),
      dist: dt
    };
  }

  static hoursLater(date, h) {
    return new Date(date.valueOf() + h * SunCalc.MILLISECONDS_IN_A_DAY / 24);
  } // Make some variables we can reusue a bunch


  static getStarPosition(date, lat, lng, c) {
    SunCalc.lw = SunCalc.DEG2RAD * -lng;
    SunCalc.phi = SunCalc.DEG2RAD * lat;
    SunCalc.d = SunCalc.toDays(date);
    SunCalc.H = SunCalc.siderealTime(SunCalc.d, SunCalc.lw) - c.ra / 12 * Math.PI;
    SunCalc.h = SunCalc.altitude(SunCalc.H, SunCalc.phi, c.dec / 180 * Math.PI);
    SunCalc.h += SunCalc.astroRefraction(SunCalc.h); // altitude correction for refraction

    return {
      azimuth: SunCalc.azimuth(SunCalc.H, SunCalc.phi, c.dec / 180 * Math.PI),
      altitude: SunCalc.h,
      vmag: c.vmag,
      name: c.name,
      pname: c.pname,
      dist: c.dist
    };
  } // calculates sun position for a given date and latitude/longitude


  static getSunPosition(date, lat, lng) {
    var lw = SunCalc.TAU / 360 * -lng,
        phi = SunCalc.TAU / 360 * lat,
        d = SunCalc.toDays(date),
        c = SunCalc.sunCoords(d),
        H = SunCalc.siderealTime(d, lw) - c.ra;
    return {
      azimuth: SunCalc.azimuth(H, phi, c.dec),
      altitude: SunCalc.altitude(H, phi, c.dec)
    };
  } // adds a custom time to the times config


  static addTime(angle, riseName, setName) {
    SunCalc.times.push([angle, riseName, setName]);
  } // calculates sun times for a given date and latitude/longitude


  static getTimes(date, lat, lng) {
    var lw = SunCalc.TAU / 360 * -lng,
        phi = SunCalc.TAU / 360 * lat,
        d = SunCalc.toDays(date),
        n = SunCalc.julianCycle(d, lw),
        ds = SunCalc.approxTransit(0, lw, n),
        M = SunCalc.solarMeanAnomaly(ds),
        L = SunCalc.eclipticLongitude(M),
        dec = SunCalc.declination(L, 0),
        Jnoon = SunCalc.solarTransitJ(ds, M, L),
        i,
        len,
        time,
        Jset,
        Jrise;
    var result = {
      solarNoon: SunCalc.fromJulian(Jnoon),
      nadir: SunCalc.fromJulian(Jnoon - 0.5)
    };

    for (i = 0, len = SunCalc.times.length; i < len; i += 1) {
      time = SunCalc.times[i];
      Jset = SunCalc.getSetJ(time[0] * SunCalc.TAU / 360, lw, phi, dec, n, M, L);
      Jrise = Jnoon - (Jset - Jnoon);
      result[time[1]] = SunCalc.fromJulian(Jrise);
      result[time[2]] = SunCalc.fromJulian(Jset);
    }

    return result;
  } // moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas


  static getMoonPosition(date, lat, lng) {
    var lw = SunCalc.TAU / 360 * -lng,
        phi = SunCalc.TAU / 360 * lat,
        d = SunCalc.toDays(date),
        c = SunCalc.moonCoords(d),
        H = SunCalc.siderealTime(d, lw) - c.ra,
        h = SunCalc.altitude(H, phi, c.dec),
        // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    pa = Math.atan2(Math.sin(H), Math.tan(phi) * Math.cos(c.dec) - Math.sin(c.dec) * Math.cos(H));
    h = h + SunCalc.astroRefraction(h); // altitude correction for refraction

    return {
      azimuth: SunCalc.azimuth(H, phi, c.dec),
      altitude: h,
      distance: c.dist,
      parallacticAngle: pa
    };
  } // calculations for illumination parameters of the moon,
  // based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
  // Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.


  static getMoonIllumination(date) {
    var d = SunCalc.toDays(date || new Date()),
        s = SunCalc.sunCoords(d),
        m = SunCalc.moonCoords(d),
        sdist = 149598000,
        // distance from Earth to Sun in km
    phi = Math.acos(Math.sin(s.dec) * Math.sin(m.dec) + Math.cos(s.dec) * Math.cos(m.dec) * Math.cos(s.ra - m.ra)),
        inc = Math.atan2(sdist * Math.sin(phi), m.dist - sdist * Math.cos(phi)),
        angle = Math.atan2(Math.cos(s.dec) * Math.sin(s.ra - m.ra), Math.sin(s.dec) * Math.cos(m.dec) - Math.cos(s.dec) * Math.sin(m.dec) * Math.cos(s.ra - m.ra));
    return {
      fraction: (1 + Math.cos(inc)) / 2,
      phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / SunCalc.TAU / 2,
      angle: angle
    };
  } // calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article


  static getMoonTimes(date, lat, lng, inUTC) {
    var t = new Date(date);
    if (inUTC) t.setUTCHours(0, 0, 0, 0);else t.setHours(0, 0, 0, 0);
    var hc = 0.133 * SunCalc.TAU / 360,
        h0 = SunCalc.getMoonPosition(t, lat, lng).altitude - hc,
        h1,
        h2,
        rise,
        set,
        a,
        b,
        xe,
        ye,
        d,
        roots,
        x1,
        x2,
        dx; // go in 2-hour chunks, each time seeing if a 3-point quadratic curve crosses zero (which means rise or set)

    for (var i = 1; i <= 24; i += 2) {
      h1 = SunCalc.getMoonPosition(SunCalc.hoursLater(t, i), lat, lng).altitude - hc;
      h2 = SunCalc.getMoonPosition(SunCalc.hoursLater(t, i + 1), lat, lng).altitude - hc;
      a = (h0 + h2) / 2 - h1;
      b = (h2 - h0) / 2;
      xe = -b / (2 * a);
      ye = (a * xe + b) * xe + h1;
      d = b * b - 4 * a * h1;
      roots = 0;

      if (d >= 0) {
        dx = Math.sqrt(d) / (Math.abs(a) * 2);
        x1 = xe - dx;
        x2 = xe + dx;
        if (Math.abs(x1) <= 1) roots++;
        if (Math.abs(x2) <= 1) roots++;
        if (x1 < -1) x1 = x2;
      }

      if (roots === 1) {
        if (h0 < 0) rise = i + x1;else set = i + x1;
      } else if (roots === 2) {
        rise = i + (ye < 0 ? x2 : x1);
        set = i + (ye < 0 ? x1 : x2);
      }

      if (rise && set) break;
      h0 = h2;
    }

    var result = {};
    if (rise) result.rise = SunCalc.hoursLater(t, rise);
    if (set) result.set = SunCalc.hoursLater(t, set);
    if (!rise && !set) result[ye > 0 ? 'alwaysUp' : 'alwaysDown'] = true;
    return result;
  }

}

_defineProperty(SunCalc, "MILLISECONDS_IN_A_DAY", 1000 * 60 * 60 * 24);

_defineProperty(SunCalc, "TAU", Math.PI * 2);

_defineProperty(SunCalc, "J1970", 2440588);

_defineProperty(SunCalc, "J2000", 2451545);

_defineProperty(SunCalc, "J0", 0.0009);

_defineProperty(SunCalc, "times", [[-0.833, 'sunrise', 'sunset'], [-0.3, 'sunriseEnd', 'sunsetStart'], [-6, 'dawn', 'dusk'], [-12, 'nauticalDawn', 'nauticalDusk'], [-18, 'nightEnd', 'night'], [6, 'goldenHourEnd', 'goldenHour']]);

_defineProperty(SunCalc, "e", SunCalc.TAU / 360 * 23.4397);

_defineProperty(SunCalc, "lw", void 0);

_defineProperty(SunCalc, "phi", void 0);

_defineProperty(SunCalc, "d", void 0);

_defineProperty(SunCalc, "H", void 0);

_defineProperty(SunCalc, "h", void 0);

_defineProperty(SunCalc, "DEG2RAD", SunCalc.TAU / 360);



/***/ }),

/***/ "./node_modules/satellite.js/dist/satellite.es.js":
/*!********************************************************!*\
  !*** ./node_modules/satellite.js/dist/satellite.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constants": () => (/* binding */ constants),
/* harmony export */   "degreesLat": () => (/* binding */ degreesLat),
/* harmony export */   "degreesLong": () => (/* binding */ degreesLong),
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "dopplerFactor": () => (/* binding */ dopplerFactor),
/* harmony export */   "ecfToEci": () => (/* binding */ ecfToEci),
/* harmony export */   "ecfToLookAngles": () => (/* binding */ ecfToLookAngles),
/* harmony export */   "eciToEcf": () => (/* binding */ eciToEcf),
/* harmony export */   "eciToGeodetic": () => (/* binding */ eciToGeodetic),
/* harmony export */   "geodeticToEcf": () => (/* binding */ geodeticToEcf),
/* harmony export */   "gstime": () => (/* binding */ gstime),
/* harmony export */   "invjday": () => (/* binding */ invjday),
/* harmony export */   "jday": () => (/* binding */ jday),
/* harmony export */   "propagate": () => (/* binding */ propagate),
/* harmony export */   "radiansLat": () => (/* binding */ radiansLat),
/* harmony export */   "radiansLong": () => (/* binding */ radiansLong),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees),
/* harmony export */   "sgp4": () => (/* binding */ sgp4),
/* harmony export */   "twoline2satrec": () => (/* binding */ twoline2satrec)
/* harmony export */ });
/*!
 * satellite-js v4.1.3
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */

var pi = Math.PI;
var twoPi = pi * 2;
var deg2rad = pi / 180.0;
var rad2deg = 180 / pi;
var minutesPerDay = 1440.0;
var mu = 398600.5; // in km3 / s2

var earthRadius = 6378.137; // in km

var xke = 60.0 / Math.sqrt(earthRadius * earthRadius * earthRadius / mu);
var vkmpersec = earthRadius * xke / 60.0;
var tumin = 1.0 / xke;
var j2 = 0.00108262998905;
var j3 = -0.00000253215306;
var j4 = -0.00000161098761;
var j3oj2 = j3 / j2;
var x2o3 = 2.0 / 3.0;

var constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pi: pi,
  twoPi: twoPi,
  deg2rad: deg2rad,
  rad2deg: rad2deg,
  minutesPerDay: minutesPerDay,
  mu: mu,
  earthRadius: earthRadius,
  xke: xke,
  vkmpersec: vkmpersec,
  tumin: tumin,
  j2: j2,
  j3: j3,
  j4: j4,
  j3oj2: j3oj2,
  x2o3: x2o3
});

/* -----------------------------------------------------------------------------
 *
 *                           procedure days2mdhms
 *
 *  this procedure converts the day of the year, days, to the equivalent month
 *    day, hour, minute and second.
 *
 *  algorithm     : set up array for the number of days per month
 *                  find leap year - use 1900 because 2000 is a leap year
 *                  loop through a temp value while the value is < the days
 *                  perform int conversions to the correct day and month
 *                  convert remainder into h m s using type conversions
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    year        - year                           1900 .. 2100
 *    days        - julian day of the year         0.0  .. 366.0
 *
 *  outputs       :
 *    mon         - month                          1 .. 12
 *    day         - day                            1 .. 28,29,30,31
 *    hr          - hour                           0 .. 23
 *    min         - minute                         0 .. 59
 *    sec         - second                         0.0 .. 59.999
 *
 *  locals        :
 *    dayofyr     - day of year
 *    temp        - temporary extended values
 *    inttemp     - temporary int value
 *    i           - index
 *    lmonth[12]  - int array containing the number of days per month
 *
 *  coupling      :
 *    none.
 * --------------------------------------------------------------------------- */
function days2mdhms(year, days) {
  var lmonth = [31, year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dayofyr = Math.floor(days); //  ----------------- find month and day of month ----------------

  var i = 1;
  var inttemp = 0;

  while (dayofyr > inttemp + lmonth[i - 1] && i < 12) {
    inttemp += lmonth[i - 1];
    i += 1;
  }

  var mon = i;
  var day = dayofyr - inttemp; //  ----------------- find hours minutes and seconds -------------

  var temp = (days - dayofyr) * 24.0;
  var hr = Math.floor(temp);
  temp = (temp - hr) * 60.0;
  var minute = Math.floor(temp);
  var sec = (temp - minute) * 60.0;
  return {
    mon: mon,
    day: day,
    hr: hr,
    minute: minute,
    sec: sec
  };
}
/* -----------------------------------------------------------------------------
 *
 *                           procedure jday
 *
 *  this procedure finds the julian date given the year, month, day, and time.
 *    the julian date is defined by each elapsed day since noon, jan 1, 4713 bc.
 *
 *  algorithm     : calculate the answer in one step for efficiency
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    year        - year                           1900 .. 2100
 *    mon         - month                          1 .. 12
 *    day         - day                            1 .. 28,29,30,31
 *    hr          - universal time hour            0 .. 23
 *    min         - universal time min             0 .. 59
 *    sec         - universal time sec             0.0 .. 59.999
 *
 *  outputs       :
 *    jd          - julian date                    days from 4713 bc
 *
 *  locals        :
 *    none.
 *
 *  coupling      :
 *    none.
 *
 *  references    :
 *    vallado       2007, 189, alg 14, ex 3-14
 *
 * --------------------------------------------------------------------------- */

function jdayInternal(year, mon, day, hr, minute, sec) {
  var msec = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((msec / 60000 + sec / 60.0 + minute) / 60.0 + hr) / 24.0 // ut in days
  // # - 0.5*sgn(100.0*year + mon - 190002.5) + 0.5;
  ;
}

function jday(year, mon, day, hr, minute, sec, msec) {
  if (year instanceof Date) {
    var date = year;
    return jdayInternal(date.getUTCFullYear(), date.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
    date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  }

  return jdayInternal(year, mon, day, hr, minute, sec, msec);
}
/* -----------------------------------------------------------------------------
 *
 *                           procedure invjday
 *
 *  this procedure finds the year, month, day, hour, minute and second
 *  given the julian date. tu can be ut1, tdt, tdb, etc.
 *
 *  algorithm     : set up starting values
 *                  find leap year - use 1900 because 2000 is a leap year
 *                  find the elapsed days through the year in a loop
 *                  call routine to find each individual value
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    jd          - julian date                    days from 4713 bc
 *
 *  outputs       :
 *    year        - year                           1900 .. 2100
 *    mon         - month                          1 .. 12
 *    day         - day                            1 .. 28,29,30,31
 *    hr          - hour                           0 .. 23
 *    min         - minute                         0 .. 59
 *    sec         - second                         0.0 .. 59.999
 *
 *  locals        :
 *    days        - day of year plus fractional
 *                  portion of a day               days
 *    tu          - julian centuries from 0 h
 *                  jan 0, 1900
 *    temp        - temporary double values
 *    leapyrs     - number of leap years from 1900
 *
 *  coupling      :
 *    days2mdhms  - finds month, day, hour, minute and second given days and year
 *
 *  references    :
 *    vallado       2007, 208, alg 22, ex 3-13
 * --------------------------------------------------------------------------- */

function invjday(jd, asArray) {
  // --------------- find year and days of the year -
  var temp = jd - 2415019.5;
  var tu = temp / 365.25;
  var year = 1900 + Math.floor(tu);
  var leapyrs = Math.floor((year - 1901) * 0.25); // optional nudge by 8.64x10-7 sec to get even outputs

  var days = temp - ((year - 1900) * 365.0 + leapyrs) + 0.00000000001; // ------------ check for case of beginning of a year -----------

  if (days < 1.0) {
    year -= 1;
    leapyrs = Math.floor((year - 1901) * 0.25);
    days = temp - ((year - 1900) * 365.0 + leapyrs);
  } // ----------------- find remaing data  -------------------------


  var mdhms = days2mdhms(year, days);
  var mon = mdhms.mon,
      day = mdhms.day,
      hr = mdhms.hr,
      minute = mdhms.minute;
  var sec = mdhms.sec - 0.00000086400;

  if (asArray) {
    return [year, mon, day, hr, minute, Math.floor(sec)];
  }

  return new Date(Date.UTC(year, mon - 1, day, hr, minute, Math.floor(sec)));
}

/* -----------------------------------------------------------------------------
 *
 *                           procedure dpper
 *
 *  this procedure provides deep space long period periodic contributions
 *    to the mean elements.  by design, these periodics are zero at epoch.
 *    this used to be dscom which included initialization, but it's really a
 *    recurring function.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    e3          -
 *    ee2         -
 *    peo         -
 *    pgho        -
 *    pho         -
 *    pinco       -
 *    plo         -
 *    se2 , se3 , sgh2, sgh3, sgh4, sh2, sh3, si2, si3, sl2, sl3, sl4 -
 *    t           -
 *    xh2, xh3, xi2, xi3, xl2, xl3, xl4 -
 *    zmol        -
 *    zmos        -
 *    ep          - eccentricity                           0.0 - 1.0
 *    inclo       - inclination - needed for lyddane modification
 *    nodep       - right ascension of ascending node
 *    argpp       - argument of perigee
 *    mp          - mean anomaly
 *
 *  outputs       :
 *    ep          - eccentricity                           0.0 - 1.0
 *    inclp       - inclination
 *    nodep        - right ascension of ascending node
 *    argpp       - argument of perigee
 *    mp          - mean anomaly
 *
 *  locals        :
 *    alfdp       -
 *    betdp       -
 *    cosip  , sinip  , cosop  , sinop  ,
 *    dalf        -
 *    dbet        -
 *    dls         -
 *    f2, f3      -
 *    pe          -
 *    pgh         -
 *    ph          -
 *    pinc        -
 *    pl          -
 *    sel   , ses   , sghl  , sghs  , shl   , shs   , sil   , sinzf , sis   ,
 *    sll   , sls
 *    xls         -
 *    xnoh        -
 *    zf          -
 *    zm          -
 *
 *  coupling      :
 *    none.
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dpper(satrec, options) {
  var e3 = satrec.e3,
      ee2 = satrec.ee2,
      peo = satrec.peo,
      pgho = satrec.pgho,
      pho = satrec.pho,
      pinco = satrec.pinco,
      plo = satrec.plo,
      se2 = satrec.se2,
      se3 = satrec.se3,
      sgh2 = satrec.sgh2,
      sgh3 = satrec.sgh3,
      sgh4 = satrec.sgh4,
      sh2 = satrec.sh2,
      sh3 = satrec.sh3,
      si2 = satrec.si2,
      si3 = satrec.si3,
      sl2 = satrec.sl2,
      sl3 = satrec.sl3,
      sl4 = satrec.sl4,
      t = satrec.t,
      xgh2 = satrec.xgh2,
      xgh3 = satrec.xgh3,
      xgh4 = satrec.xgh4,
      xh2 = satrec.xh2,
      xh3 = satrec.xh3,
      xi2 = satrec.xi2,
      xi3 = satrec.xi3,
      xl2 = satrec.xl2,
      xl3 = satrec.xl3,
      xl4 = satrec.xl4,
      zmol = satrec.zmol,
      zmos = satrec.zmos;
  var init = options.init,
      opsmode = options.opsmode;
  var ep = options.ep,
      inclp = options.inclp,
      nodep = options.nodep,
      argpp = options.argpp,
      mp = options.mp; // Copy satellite attributes into local variables for convenience
  // and symmetry in writing formulae.

  var alfdp;
  var betdp;
  var cosip;
  var sinip;
  var cosop;
  var sinop;
  var dalf;
  var dbet;
  var dls;
  var f2;
  var f3;
  var pe;
  var pgh;
  var ph;
  var pinc;
  var pl;
  var sinzf;
  var xls;
  var xnoh;
  var zf;
  var zm; //  ---------------------- constants -----------------------------

  var zns = 1.19459e-5;
  var zes = 0.01675;
  var znl = 1.5835218e-4;
  var zel = 0.05490; //  --------------- calculate time varying periodics -----------

  zm = zmos + zns * t; // be sure that the initial call has time set to zero

  if (init === 'y') {
    zm = zmos;
  }

  zf = zm + 2.0 * zes * Math.sin(zm);
  sinzf = Math.sin(zf);
  f2 = 0.5 * sinzf * sinzf - 0.25;
  f3 = -0.5 * sinzf * Math.cos(zf);
  var ses = se2 * f2 + se3 * f3;
  var sis = si2 * f2 + si3 * f3;
  var sls = sl2 * f2 + sl3 * f3 + sl4 * sinzf;
  var sghs = sgh2 * f2 + sgh3 * f3 + sgh4 * sinzf;
  var shs = sh2 * f2 + sh3 * f3;
  zm = zmol + znl * t;

  if (init === 'y') {
    zm = zmol;
  }

  zf = zm + 2.0 * zel * Math.sin(zm);
  sinzf = Math.sin(zf);
  f2 = 0.5 * sinzf * sinzf - 0.25;
  f3 = -0.5 * sinzf * Math.cos(zf);
  var sel = ee2 * f2 + e3 * f3;
  var sil = xi2 * f2 + xi3 * f3;
  var sll = xl2 * f2 + xl3 * f3 + xl4 * sinzf;
  var sghl = xgh2 * f2 + xgh3 * f3 + xgh4 * sinzf;
  var shll = xh2 * f2 + xh3 * f3;
  pe = ses + sel;
  pinc = sis + sil;
  pl = sls + sll;
  pgh = sghs + sghl;
  ph = shs + shll;

  if (init === 'n') {
    pe -= peo;
    pinc -= pinco;
    pl -= plo;
    pgh -= pgho;
    ph -= pho;
    inclp += pinc;
    ep += pe;
    sinip = Math.sin(inclp);
    cosip = Math.cos(inclp);
    /* ----------------- apply periodics directly ------------ */
    // sgp4fix for lyddane choice
    // strn3 used original inclination - this is technically feasible
    // gsfc used perturbed inclination - also technically feasible
    // probably best to readjust the 0.2 limit value and limit discontinuity
    // 0.2 rad = 11.45916 deg
    // use next line for original strn3 approach and original inclination
    // if (inclo >= 0.2)
    // use next line for gsfc version and perturbed inclination

    if (inclp >= 0.2) {
      ph /= sinip;
      pgh -= cosip * ph;
      argpp += pgh;
      nodep += ph;
      mp += pl;
    } else {
      //  ---- apply periodics with lyddane modification ----
      sinop = Math.sin(nodep);
      cosop = Math.cos(nodep);
      alfdp = sinip * sinop;
      betdp = sinip * cosop;
      dalf = ph * cosop + pinc * cosip * sinop;
      dbet = -ph * sinop + pinc * cosip * cosop;
      alfdp += dalf;
      betdp += dbet;
      nodep %= twoPi; //  sgp4fix for afspc written intrinsic functions
      //  nodep used without a trigonometric function ahead

      if (nodep < 0.0 && opsmode === 'a') {
        nodep += twoPi;
      }

      xls = mp + argpp + cosip * nodep;
      dls = pl + pgh - pinc * nodep * sinip;
      xls += dls;
      xnoh = nodep;
      nodep = Math.atan2(alfdp, betdp); //  sgp4fix for afspc written intrinsic functions
      //  nodep used without a trigonometric function ahead

      if (nodep < 0.0 && opsmode === 'a') {
        nodep += twoPi;
      }

      if (Math.abs(xnoh - nodep) > pi) {
        if (nodep < xnoh) {
          nodep += twoPi;
        } else {
          nodep -= twoPi;
        }
      }

      mp += pl;
      argpp = xls - mp - cosip * nodep;
    }
  }

  return {
    ep: ep,
    inclp: inclp,
    nodep: nodep,
    argpp: argpp,
    mp: mp
  };
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure dscom
 *
 *  this procedure provides deep space common items used by both the secular
 *    and periodics subroutines.  input is provided as shown. this routine
 *    used to be called dpper, but the functions inside weren't well organized.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    epoch       -
 *    ep          - eccentricity
 *    argpp       - argument of perigee
 *    tc          -
 *    inclp       - inclination
 *    nodep       - right ascension of ascending node
 *    np          - mean motion
 *
 *  outputs       :
 *    sinim  , cosim  , sinomm , cosomm , snodm  , cnodm
 *    day         -
 *    e3          -
 *    ee2         -
 *    em          - eccentricity
 *    emsq        - eccentricity squared
 *    gam         -
 *    peo         -
 *    pgho        -
 *    pho         -
 *    pinco       -
 *    plo         -
 *    rtemsq      -
 *    se2, se3         -
 *    sgh2, sgh3, sgh4        -
 *    sh2, sh3, si2, si3, sl2, sl3, sl4         -
 *    s1, s2, s3, s4, s5, s6, s7          -
 *    ss1, ss2, ss3, ss4, ss5, ss6, ss7, sz1, sz2, sz3         -
 *    sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
 *    xgh2, xgh3, xgh4, xh2, xh3, xi2, xi3, xl2, xl3, xl4         -
 *    nm          - mean motion
 *    z1, z2, z3, z11, z12, z13, z21, z22, z23, z31, z32, z33         -
 *    zmol        -
 *    zmos        -
 *
 *  locals        :
 *    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10         -
 *    betasq      -
 *    cc          -
 *    ctem, stem        -
 *    x1, x2, x3, x4, x5, x6, x7, x8          -
 *    xnodce      -
 *    xnoi        -
 *    zcosg  , zsing  , zcosgl , zsingl , zcosh  , zsinh  , zcoshl , zsinhl ,
 *    zcosi  , zsini  , zcosil , zsinil ,
 *    zx          -
 *    zy          -
 *
 *  coupling      :
 *    none.
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dscom(options) {
  var epoch = options.epoch,
      ep = options.ep,
      argpp = options.argpp,
      tc = options.tc,
      inclp = options.inclp,
      nodep = options.nodep,
      np = options.np;
  var a1;
  var a2;
  var a3;
  var a4;
  var a5;
  var a6;
  var a7;
  var a8;
  var a9;
  var a10;
  var cc;
  var x1;
  var x2;
  var x3;
  var x4;
  var x5;
  var x6;
  var x7;
  var x8;
  var zcosg;
  var zsing;
  var zcosh;
  var zsinh;
  var zcosi;
  var zsini;
  var ss1;
  var ss2;
  var ss3;
  var ss4;
  var ss5;
  var ss6;
  var ss7;
  var sz1;
  var sz2;
  var sz3;
  var sz11;
  var sz12;
  var sz13;
  var sz21;
  var sz22;
  var sz23;
  var sz31;
  var sz32;
  var sz33;
  var s1;
  var s2;
  var s3;
  var s4;
  var s5;
  var s6;
  var s7;
  var z1;
  var z2;
  var z3;
  var z11;
  var z12;
  var z13;
  var z21;
  var z22;
  var z23;
  var z31;
  var z32;
  var z33; // -------------------------- constants -------------------------

  var zes = 0.01675;
  var zel = 0.05490;
  var c1ss = 2.9864797e-6;
  var c1l = 4.7968065e-7;
  var zsinis = 0.39785416;
  var zcosis = 0.91744867;
  var zcosgs = 0.1945905;
  var zsings = -0.98088458; //  --------------------- local variables ------------------------

  var nm = np;
  var em = ep;
  var snodm = Math.sin(nodep);
  var cnodm = Math.cos(nodep);
  var sinomm = Math.sin(argpp);
  var cosomm = Math.cos(argpp);
  var sinim = Math.sin(inclp);
  var cosim = Math.cos(inclp);
  var emsq = em * em;
  var betasq = 1.0 - emsq;
  var rtemsq = Math.sqrt(betasq); //  ----------------- initialize lunar solar terms ---------------

  var peo = 0.0;
  var pinco = 0.0;
  var plo = 0.0;
  var pgho = 0.0;
  var pho = 0.0;
  var day = epoch + 18261.5 + tc / 1440.0;
  var xnodce = (4.5236020 - 9.2422029e-4 * day) % twoPi;
  var stem = Math.sin(xnodce);
  var ctem = Math.cos(xnodce);
  var zcosil = 0.91375164 - 0.03568096 * ctem;
  var zsinil = Math.sqrt(1.0 - zcosil * zcosil);
  var zsinhl = 0.089683511 * stem / zsinil;
  var zcoshl = Math.sqrt(1.0 - zsinhl * zsinhl);
  var gam = 5.8351514 + 0.0019443680 * day;
  var zx = 0.39785416 * stem / zsinil;
  var zy = zcoshl * ctem + 0.91744867 * zsinhl * stem;
  zx = Math.atan2(zx, zy);
  zx += gam - xnodce;
  var zcosgl = Math.cos(zx);
  var zsingl = Math.sin(zx); //  ------------------------- do solar terms ---------------------

  zcosg = zcosgs;
  zsing = zsings;
  zcosi = zcosis;
  zsini = zsinis;
  zcosh = cnodm;
  zsinh = snodm;
  cc = c1ss;
  var xnoi = 1.0 / nm;
  var lsflg = 0;

  while (lsflg < 2) {
    lsflg += 1;
    a1 = zcosg * zcosh + zsing * zcosi * zsinh;
    a3 = -zsing * zcosh + zcosg * zcosi * zsinh;
    a7 = -zcosg * zsinh + zsing * zcosi * zcosh;
    a8 = zsing * zsini;
    a9 = zsing * zsinh + zcosg * zcosi * zcosh;
    a10 = zcosg * zsini;
    a2 = cosim * a7 + sinim * a8;
    a4 = cosim * a9 + sinim * a10;
    a5 = -sinim * a7 + cosim * a8;
    a6 = -sinim * a9 + cosim * a10;
    x1 = a1 * cosomm + a2 * sinomm;
    x2 = a3 * cosomm + a4 * sinomm;
    x3 = -a1 * sinomm + a2 * cosomm;
    x4 = -a3 * sinomm + a4 * cosomm;
    x5 = a5 * sinomm;
    x6 = a6 * sinomm;
    x7 = a5 * cosomm;
    x8 = a6 * cosomm;
    z31 = 12.0 * x1 * x1 - 3.0 * x3 * x3;
    z32 = 24.0 * x1 * x2 - 6.0 * x3 * x4;
    z33 = 12.0 * x2 * x2 - 3.0 * x4 * x4;
    z1 = 3.0 * (a1 * a1 + a2 * a2) + z31 * emsq;
    z2 = 6.0 * (a1 * a3 + a2 * a4) + z32 * emsq;
    z3 = 3.0 * (a3 * a3 + a4 * a4) + z33 * emsq;
    z11 = -6.0 * a1 * a5 + emsq * (-24.0 * x1 * x7 - 6.0 * x3 * x5);
    z12 = -6.0 * (a1 * a6 + a3 * a5) + emsq * (-24.0 * (x2 * x7 + x1 * x8) + -6.0 * (x3 * x6 + x4 * x5));
    z13 = -6.0 * a3 * a6 + emsq * (-24.0 * x2 * x8 - 6.0 * x4 * x6);
    z21 = 6.0 * a2 * a5 + emsq * (24.0 * x1 * x5 - 6.0 * x3 * x7);
    z22 = 6.0 * (a4 * a5 + a2 * a6) + emsq * (24.0 * (x2 * x5 + x1 * x6) - 6.0 * (x4 * x7 + x3 * x8));
    z23 = 6.0 * a4 * a6 + emsq * (24.0 * x2 * x6 - 6.0 * x4 * x8);
    z1 = z1 + z1 + betasq * z31;
    z2 = z2 + z2 + betasq * z32;
    z3 = z3 + z3 + betasq * z33;
    s3 = cc * xnoi;
    s2 = -0.5 * s3 / rtemsq;
    s4 = s3 * rtemsq;
    s1 = -15.0 * em * s4;
    s5 = x1 * x3 + x2 * x4;
    s6 = x2 * x3 + x1 * x4;
    s7 = x2 * x4 - x1 * x3; //  ----------------------- do lunar terms -------------------

    if (lsflg === 1) {
      ss1 = s1;
      ss2 = s2;
      ss3 = s3;
      ss4 = s4;
      ss5 = s5;
      ss6 = s6;
      ss7 = s7;
      sz1 = z1;
      sz2 = z2;
      sz3 = z3;
      sz11 = z11;
      sz12 = z12;
      sz13 = z13;
      sz21 = z21;
      sz22 = z22;
      sz23 = z23;
      sz31 = z31;
      sz32 = z32;
      sz33 = z33;
      zcosg = zcosgl;
      zsing = zsingl;
      zcosi = zcosil;
      zsini = zsinil;
      zcosh = zcoshl * cnodm + zsinhl * snodm;
      zsinh = snodm * zcoshl - cnodm * zsinhl;
      cc = c1l;
    }
  }

  var zmol = (4.7199672 + (0.22997150 * day - gam)) % twoPi;
  var zmos = (6.2565837 + 0.017201977 * day) % twoPi; //  ------------------------ do solar terms ----------------------

  var se2 = 2.0 * ss1 * ss6;
  var se3 = 2.0 * ss1 * ss7;
  var si2 = 2.0 * ss2 * sz12;
  var si3 = 2.0 * ss2 * (sz13 - sz11);
  var sl2 = -2.0 * ss3 * sz2;
  var sl3 = -2.0 * ss3 * (sz3 - sz1);
  var sl4 = -2.0 * ss3 * (-21.0 - 9.0 * emsq) * zes;
  var sgh2 = 2.0 * ss4 * sz32;
  var sgh3 = 2.0 * ss4 * (sz33 - sz31);
  var sgh4 = -18.0 * ss4 * zes;
  var sh2 = -2.0 * ss2 * sz22;
  var sh3 = -2.0 * ss2 * (sz23 - sz21); //  ------------------------ do lunar terms ----------------------

  var ee2 = 2.0 * s1 * s6;
  var e3 = 2.0 * s1 * s7;
  var xi2 = 2.0 * s2 * z12;
  var xi3 = 2.0 * s2 * (z13 - z11);
  var xl2 = -2.0 * s3 * z2;
  var xl3 = -2.0 * s3 * (z3 - z1);
  var xl4 = -2.0 * s3 * (-21.0 - 9.0 * emsq) * zel;
  var xgh2 = 2.0 * s4 * z32;
  var xgh3 = 2.0 * s4 * (z33 - z31);
  var xgh4 = -18.0 * s4 * zel;
  var xh2 = -2.0 * s2 * z22;
  var xh3 = -2.0 * s2 * (z23 - z21);
  return {
    snodm: snodm,
    cnodm: cnodm,
    sinim: sinim,
    cosim: cosim,
    sinomm: sinomm,
    cosomm: cosomm,
    day: day,
    e3: e3,
    ee2: ee2,
    em: em,
    emsq: emsq,
    gam: gam,
    peo: peo,
    pgho: pgho,
    pho: pho,
    pinco: pinco,
    plo: plo,
    rtemsq: rtemsq,
    se2: se2,
    se3: se3,
    sgh2: sgh2,
    sgh3: sgh3,
    sgh4: sgh4,
    sh2: sh2,
    sh3: sh3,
    si2: si2,
    si3: si3,
    sl2: sl2,
    sl3: sl3,
    sl4: sl4,
    s1: s1,
    s2: s2,
    s3: s3,
    s4: s4,
    s5: s5,
    s6: s6,
    s7: s7,
    ss1: ss1,
    ss2: ss2,
    ss3: ss3,
    ss4: ss4,
    ss5: ss5,
    ss6: ss6,
    ss7: ss7,
    sz1: sz1,
    sz2: sz2,
    sz3: sz3,
    sz11: sz11,
    sz12: sz12,
    sz13: sz13,
    sz21: sz21,
    sz22: sz22,
    sz23: sz23,
    sz31: sz31,
    sz32: sz32,
    sz33: sz33,
    xgh2: xgh2,
    xgh3: xgh3,
    xgh4: xgh4,
    xh2: xh2,
    xh3: xh3,
    xi2: xi2,
    xi3: xi3,
    xl2: xl2,
    xl3: xl3,
    xl4: xl4,
    nm: nm,
    z1: z1,
    z2: z2,
    z3: z3,
    z11: z11,
    z12: z12,
    z13: z13,
    z21: z21,
    z22: z22,
    z23: z23,
    z31: z31,
    z32: z32,
    z33: z33,
    zmol: zmol,
    zmos: zmos
  };
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure dsinit
 *
 *  this procedure provides deep space contributions to mean motion dot due
 *    to geopotential resonance with half day and one day orbits.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    cosim, sinim-
 *    emsq        - eccentricity squared
 *    argpo       - argument of perigee
 *    s1, s2, s3, s4, s5      -
 *    ss1, ss2, ss3, ss4, ss5 -
 *    sz1, sz3, sz11, sz13, sz21, sz23, sz31, sz33 -
 *    t           - time
 *    tc          -
 *    gsto        - greenwich sidereal time                   rad
 *    mo          - mean anomaly
 *    mdot        - mean anomaly dot (rate)
 *    no          - mean motion
 *    nodeo       - right ascension of ascending node
 *    nodedot     - right ascension of ascending node dot (rate)
 *    xpidot      -
 *    z1, z3, z11, z13, z21, z23, z31, z33 -
 *    eccm        - eccentricity
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    xn          - mean motion
 *    nodem       - right ascension of ascending node
 *
 *  outputs       :
 *    em          - eccentricity
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    nm          - mean motion
 *    nodem       - right ascension of ascending node
 *    irez        - flag for resonance           0-none, 1-one day, 2-half day
 *    atime       -
 *    d2201, d2211, d3210, d3222, d4410, d4422, d5220, d5232, d5421, d5433    -
 *    dedt        -
 *    didt        -
 *    dmdt        -
 *    dndt        -
 *    dnodt       -
 *    domdt       -
 *    del1, del2, del3        -
 *    ses  , sghl , sghs , sgs  , shl  , shs  , sis  , sls
 *    theta       -
 *    xfact       -
 *    xlamo       -
 *    xli         -
 *    xni
 *
 *  locals        :
 *    ainv2       -
 *    aonv        -
 *    cosisq      -
 *    eoc         -
 *    f220, f221, f311, f321, f322, f330, f441, f442, f522, f523, f542, f543  -
 *    g200, g201, g211, g300, g310, g322, g410, g422, g520, g521, g532, g533  -
 *    sini2       -
 *    temp        -
 *    temp1       -
 *    theta       -
 *    xno2        -
 *
 *  coupling      :
 *    getgravconst
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dsinit(options) {
  var cosim = options.cosim,
      argpo = options.argpo,
      s1 = options.s1,
      s2 = options.s2,
      s3 = options.s3,
      s4 = options.s4,
      s5 = options.s5,
      sinim = options.sinim,
      ss1 = options.ss1,
      ss2 = options.ss2,
      ss3 = options.ss3,
      ss4 = options.ss4,
      ss5 = options.ss5,
      sz1 = options.sz1,
      sz3 = options.sz3,
      sz11 = options.sz11,
      sz13 = options.sz13,
      sz21 = options.sz21,
      sz23 = options.sz23,
      sz31 = options.sz31,
      sz33 = options.sz33,
      t = options.t,
      tc = options.tc,
      gsto = options.gsto,
      mo = options.mo,
      mdot = options.mdot,
      no = options.no,
      nodeo = options.nodeo,
      nodedot = options.nodedot,
      xpidot = options.xpidot,
      z1 = options.z1,
      z3 = options.z3,
      z11 = options.z11,
      z13 = options.z13,
      z21 = options.z21,
      z23 = options.z23,
      z31 = options.z31,
      z33 = options.z33,
      ecco = options.ecco,
      eccsq = options.eccsq;
  var emsq = options.emsq,
      em = options.em,
      argpm = options.argpm,
      inclm = options.inclm,
      mm = options.mm,
      nm = options.nm,
      nodem = options.nodem,
      irez = options.irez,
      atime = options.atime,
      d2201 = options.d2201,
      d2211 = options.d2211,
      d3210 = options.d3210,
      d3222 = options.d3222,
      d4410 = options.d4410,
      d4422 = options.d4422,
      d5220 = options.d5220,
      d5232 = options.d5232,
      d5421 = options.d5421,
      d5433 = options.d5433,
      dedt = options.dedt,
      didt = options.didt,
      dmdt = options.dmdt,
      dnodt = options.dnodt,
      domdt = options.domdt,
      del1 = options.del1,
      del2 = options.del2,
      del3 = options.del3,
      xfact = options.xfact,
      xlamo = options.xlamo,
      xli = options.xli,
      xni = options.xni;
  var f220;
  var f221;
  var f311;
  var f321;
  var f322;
  var f330;
  var f441;
  var f442;
  var f522;
  var f523;
  var f542;
  var f543;
  var g200;
  var g201;
  var g211;
  var g300;
  var g310;
  var g322;
  var g410;
  var g422;
  var g520;
  var g521;
  var g532;
  var g533;
  var sini2;
  var temp;
  var temp1;
  var xno2;
  var ainv2;
  var aonv;
  var cosisq;
  var eoc;
  var q22 = 1.7891679e-6;
  var q31 = 2.1460748e-6;
  var q33 = 2.2123015e-7;
  var root22 = 1.7891679e-6;
  var root44 = 7.3636953e-9;
  var root54 = 2.1765803e-9;
  var rptim = 4.37526908801129966e-3; // equates to 7.29211514668855e-5 rad/sec

  var root32 = 3.7393792e-7;
  var root52 = 1.1428639e-7;
  var znl = 1.5835218e-4;
  var zns = 1.19459e-5; // -------------------- deep space initialization ------------

  irez = 0;

  if (nm < 0.0052359877 && nm > 0.0034906585) {
    irez = 1;
  }

  if (nm >= 8.26e-3 && nm <= 9.24e-3 && em >= 0.5) {
    irez = 2;
  } // ------------------------ do solar terms -------------------


  var ses = ss1 * zns * ss5;
  var sis = ss2 * zns * (sz11 + sz13);
  var sls = -zns * ss3 * (sz1 + sz3 - 14.0 - 6.0 * emsq);
  var sghs = ss4 * zns * (sz31 + sz33 - 6.0);
  var shs = -zns * ss2 * (sz21 + sz23); // sgp4fix for 180 deg incl

  if (inclm < 5.2359877e-2 || inclm > pi - 5.2359877e-2) {
    shs = 0.0;
  }

  if (sinim !== 0.0) {
    shs /= sinim;
  }

  var sgs = sghs - cosim * shs; // ------------------------- do lunar terms ------------------

  dedt = ses + s1 * znl * s5;
  didt = sis + s2 * znl * (z11 + z13);
  dmdt = sls - znl * s3 * (z1 + z3 - 14.0 - 6.0 * emsq);
  var sghl = s4 * znl * (z31 + z33 - 6.0);
  var shll = -znl * s2 * (z21 + z23); // sgp4fix for 180 deg incl

  if (inclm < 5.2359877e-2 || inclm > pi - 5.2359877e-2) {
    shll = 0.0;
  }

  domdt = sgs + sghl;
  dnodt = shs;

  if (sinim !== 0.0) {
    domdt -= cosim / sinim * shll;
    dnodt += shll / sinim;
  } // ----------- calculate deep space resonance effects --------


  var dndt = 0.0;
  var theta = (gsto + tc * rptim) % twoPi;
  em += dedt * t;
  inclm += didt * t;
  argpm += domdt * t;
  nodem += dnodt * t;
  mm += dmdt * t; // sgp4fix for negative inclinations
  // the following if statement should be commented out
  // if (inclm < 0.0)
  // {
  //   inclm  = -inclm;
  //   argpm  = argpm - pi;
  //   nodem = nodem + pi;
  // }
  // -------------- initialize the resonance terms -------------

  if (irez !== 0) {
    aonv = Math.pow(nm / xke, x2o3); // ---------- geopotential resonance for 12 hour orbits ------

    if (irez === 2) {
      cosisq = cosim * cosim;
      var emo = em;
      em = ecco;
      var emsqo = emsq;
      emsq = eccsq;
      eoc = em * emsq;
      g201 = -0.306 - (em - 0.64) * 0.440;

      if (em <= 0.65) {
        g211 = 3.616 - 13.2470 * em + 16.2900 * emsq;
        g310 = -19.302 + 117.3900 * em - 228.4190 * emsq + 156.5910 * eoc;
        g322 = -18.9068 + 109.7927 * em - 214.6334 * emsq + 146.5816 * eoc;
        g410 = -41.122 + 242.6940 * em - 471.0940 * emsq + 313.9530 * eoc;
        g422 = -146.407 + 841.8800 * em - 1629.014 * emsq + 1083.4350 * eoc;
        g520 = -532.114 + 3017.977 * em - 5740.032 * emsq + 3708.2760 * eoc;
      } else {
        g211 = -72.099 + 331.819 * em - 508.738 * emsq + 266.724 * eoc;
        g310 = -346.844 + 1582.851 * em - 2415.925 * emsq + 1246.113 * eoc;
        g322 = -342.585 + 1554.908 * em - 2366.899 * emsq + 1215.972 * eoc;
        g410 = -1052.797 + 4758.686 * em - 7193.992 * emsq + 3651.957 * eoc;
        g422 = -3581.690 + 16178.110 * em - 24462.770 * emsq + 12422.520 * eoc;

        if (em > 0.715) {
          g520 = -5149.66 + 29936.92 * em - 54087.36 * emsq + 31324.56 * eoc;
        } else {
          g520 = 1464.74 - 4664.75 * em + 3763.64 * emsq;
        }
      }

      if (em < 0.7) {
        g533 = -919.22770 + 4988.6100 * em - 9064.7700 * emsq + 5542.21 * eoc;
        g521 = -822.71072 + 4568.6173 * em - 8491.4146 * emsq + 5337.524 * eoc;
        g532 = -853.66600 + 4690.2500 * em - 8624.7700 * emsq + 5341.4 * eoc;
      } else {
        g533 = -37995.780 + 161616.52 * em - 229838.20 * emsq + 109377.94 * eoc;
        g521 = -51752.104 + 218913.95 * em - 309468.16 * emsq + 146349.42 * eoc;
        g532 = -40023.880 + 170470.89 * em - 242699.48 * emsq + 115605.82 * eoc;
      }

      sini2 = sinim * sinim;
      f220 = 0.75 * (1.0 + 2.0 * cosim + cosisq);
      f221 = 1.5 * sini2;
      f321 = 1.875 * sinim * (1.0 - 2.0 * cosim - 3.0 * cosisq);
      f322 = -1.875 * sinim * (1.0 + 2.0 * cosim - 3.0 * cosisq);
      f441 = 35.0 * sini2 * f220;
      f442 = 39.3750 * sini2 * sini2;
      f522 = 9.84375 * sinim * (sini2 * (1.0 - 2.0 * cosim - 5.0 * cosisq) + 0.33333333 * (-2.0 + 4.0 * cosim + 6.0 * cosisq));
      f523 = sinim * (4.92187512 * sini2 * (-2.0 - 4.0 * cosim + 10.0 * cosisq) + 6.56250012 * (1.0 + 2.0 * cosim - 3.0 * cosisq));
      f542 = 29.53125 * sinim * (2.0 - 8.0 * cosim + cosisq * (-12.0 + 8.0 * cosim + 10.0 * cosisq));
      f543 = 29.53125 * sinim * (-2.0 - 8.0 * cosim + cosisq * (12.0 + 8.0 * cosim - 10.0 * cosisq));
      xno2 = nm * nm;
      ainv2 = aonv * aonv;
      temp1 = 3.0 * xno2 * ainv2;
      temp = temp1 * root22;
      d2201 = temp * f220 * g201;
      d2211 = temp * f221 * g211;
      temp1 *= aonv;
      temp = temp1 * root32;
      d3210 = temp * f321 * g310;
      d3222 = temp * f322 * g322;
      temp1 *= aonv;
      temp = 2.0 * temp1 * root44;
      d4410 = temp * f441 * g410;
      d4422 = temp * f442 * g422;
      temp1 *= aonv;
      temp = temp1 * root52;
      d5220 = temp * f522 * g520;
      d5232 = temp * f523 * g532;
      temp = 2.0 * temp1 * root54;
      d5421 = temp * f542 * g521;
      d5433 = temp * f543 * g533;
      xlamo = (mo + nodeo + nodeo - (theta + theta)) % twoPi;
      xfact = mdot + dmdt + 2.0 * (nodedot + dnodt - rptim) - no;
      em = emo;
      emsq = emsqo;
    } //  ---------------- synchronous resonance terms --------------


    if (irez === 1) {
      g200 = 1.0 + emsq * (-2.5 + 0.8125 * emsq);
      g310 = 1.0 + 2.0 * emsq;
      g300 = 1.0 + emsq * (-6.0 + 6.60937 * emsq);
      f220 = 0.75 * (1.0 + cosim) * (1.0 + cosim);
      f311 = 0.9375 * sinim * sinim * (1.0 + 3.0 * cosim) - 0.75 * (1.0 + cosim);
      f330 = 1.0 + cosim;
      f330 *= 1.875 * f330 * f330;
      del1 = 3.0 * nm * nm * aonv * aonv;
      del2 = 2.0 * del1 * f220 * g200 * q22;
      del3 = 3.0 * del1 * f330 * g300 * q33 * aonv;
      del1 = del1 * f311 * g310 * q31 * aonv;
      xlamo = (mo + nodeo + argpo - theta) % twoPi;
      xfact = mdot + xpidot + dmdt + domdt + dnodt - (no + rptim);
    } //  ------------ for sgp4, initialize the integrator ----------


    xli = xlamo;
    xni = no;
    atime = 0.0;
    nm = no + dndt;
  }

  return {
    em: em,
    argpm: argpm,
    inclm: inclm,
    mm: mm,
    nm: nm,
    nodem: nodem,
    irez: irez,
    atime: atime,
    d2201: d2201,
    d2211: d2211,
    d3210: d3210,
    d3222: d3222,
    d4410: d4410,
    d4422: d4422,
    d5220: d5220,
    d5232: d5232,
    d5421: d5421,
    d5433: d5433,
    dedt: dedt,
    didt: didt,
    dmdt: dmdt,
    dndt: dndt,
    dnodt: dnodt,
    domdt: domdt,
    del1: del1,
    del2: del2,
    del3: del3,
    xfact: xfact,
    xlamo: xlamo,
    xli: xli,
    xni: xni
  };
}

/* -----------------------------------------------------------------------------
 *
 *                           function gstime
 *
 *  this function finds the greenwich sidereal time.
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs          description                    range / units
 *    jdut1       - julian date in ut1             days from 4713 bc
 *
 *  outputs       :
 *    gstime      - greenwich sidereal time        0 to 2pi rad
 *
 *  locals        :
 *    temp        - temporary variable for doubles   rad
 *    tut1        - julian centuries from the
 *                  jan 1, 2000 12 h epoch (ut1)
 *
 *  coupling      :
 *    none
 *
 *  references    :
 *    vallado       2004, 191, eq 3-45
 * --------------------------------------------------------------------------- */

function gstimeInternal(jdut1) {
  var tut1 = (jdut1 - 2451545.0) / 36525.0;
  var temp = -6.2e-6 * tut1 * tut1 * tut1 + 0.093104 * tut1 * tut1 + (876600.0 * 3600 + 8640184.812866) * tut1 + 67310.54841; // # sec

  temp = temp * deg2rad / 240.0 % twoPi; // 360/86400 = 1/240, to deg, to rad
  //  ------------------------ check quadrants ---------------------

  if (temp < 0.0) {
    temp += twoPi;
  }

  return temp;
}

function gstime() {
  if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof Date || arguments.length > 1) {
    return gstimeInternal(jday.apply(void 0, arguments));
  }

  return gstimeInternal.apply(void 0, arguments);
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure initl
 *
 *  this procedure initializes the sgp4 propagator. all the initialization is
 *    consolidated here instead of having multiple loops inside other routines.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    ecco        - eccentricity                           0.0 - 1.0
 *    epoch       - epoch time in days from jan 0, 1950. 0 hr
 *    inclo       - inclination of satellite
 *    no          - mean motion of satellite
 *    satn        - satellite number
 *
 *  outputs       :
 *    ainv        - 1.0 / a
 *    ao          - semi major axis
 *    con41       -
 *    con42       - 1.0 - 5.0 cos(i)
 *    cosio       - cosine of inclination
 *    cosio2      - cosio squared
 *    eccsq       - eccentricity squared
 *    method      - flag for deep space                    'd', 'n'
 *    omeosq      - 1.0 - ecco * ecco
 *    posq        - semi-parameter squared
 *    rp          - radius of perigee
 *    rteosq      - square root of (1.0 - ecco*ecco)
 *    sinio       - sine of inclination
 *    gsto        - gst at time of observation               rad
 *    no          - mean motion of satellite
 *
 *  locals        :
 *    ak          -
 *    d1          -
 *    del         -
 *    adel        -
 *    po          -
 *
 *  coupling      :
 *    getgravconst
 *    gstime      - find greenwich sidereal time from the julian date
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function initl(options) {
  var ecco = options.ecco,
      epoch = options.epoch,
      inclo = options.inclo,
      opsmode = options.opsmode;
  var no = options.no; // sgp4fix use old way of finding gst
  // ----------------------- earth constants ---------------------
  // sgp4fix identify constants and allow alternate values
  // ------------- calculate auxillary epoch quantities ----------

  var eccsq = ecco * ecco;
  var omeosq = 1.0 - eccsq;
  var rteosq = Math.sqrt(omeosq);
  var cosio = Math.cos(inclo);
  var cosio2 = cosio * cosio; // ------------------ un-kozai the mean motion -----------------

  var ak = Math.pow(xke / no, x2o3);
  var d1 = 0.75 * j2 * (3.0 * cosio2 - 1.0) / (rteosq * omeosq);
  var delPrime = d1 / (ak * ak);
  var adel = ak * (1.0 - delPrime * delPrime - delPrime * (1.0 / 3.0 + 134.0 * delPrime * delPrime / 81.0));
  delPrime = d1 / (adel * adel);
  no /= 1.0 + delPrime;
  var ao = Math.pow(xke / no, x2o3);
  var sinio = Math.sin(inclo);
  var po = ao * omeosq;
  var con42 = 1.0 - 5.0 * cosio2;
  var con41 = -con42 - cosio2 - cosio2;
  var ainv = 1.0 / ao;
  var posq = po * po;
  var rp = ao * (1.0 - ecco);
  var method = 'n'; //  sgp4fix modern approach to finding sidereal time

  var gsto;

  if (opsmode === 'a') {
    //  sgp4fix use old way of finding gst
    //  count integer number of days from 0 jan 1970
    var ts70 = epoch - 7305.0;
    var ds70 = Math.floor(ts70 + 1.0e-8);
    var tfrac = ts70 - ds70; //  find greenwich location at epoch

    var c1 = 1.72027916940703639e-2;
    var thgr70 = 1.7321343856509374;
    var fk5r = 5.07551419432269442e-15;
    var c1p2p = c1 + twoPi;
    gsto = (thgr70 + c1 * ds70 + c1p2p * tfrac + ts70 * ts70 * fk5r) % twoPi;

    if (gsto < 0.0) {
      gsto += twoPi;
    }
  } else {
    gsto = gstime(epoch + 2433281.5);
  }

  return {
    no: no,
    method: method,
    ainv: ainv,
    ao: ao,
    con41: con41,
    con42: con42,
    cosio: cosio,
    cosio2: cosio2,
    eccsq: eccsq,
    omeosq: omeosq,
    posq: posq,
    rp: rp,
    rteosq: rteosq,
    sinio: sinio,
    gsto: gsto
  };
}

/*-----------------------------------------------------------------------------
 *
 *                           procedure dspace
 *
 *  this procedure provides deep space contributions to mean elements for
 *    perturbing third body.  these effects have been averaged over one
 *    revolution of the sun and moon.  for earth resonance effects, the
 *    effects have been averaged over no revolutions of the satellite.
 *    (mean motion)
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    d2201, d2211, d3210, d3222, d4410, d4422, d5220, d5232, d5421, d5433 -
 *    dedt        -
 *    del1, del2, del3  -
 *    didt        -
 *    dmdt        -
 *    dnodt       -
 *    domdt       -
 *    irez        - flag for resonance           0-none, 1-one day, 2-half day
 *    argpo       - argument of perigee
 *    argpdot     - argument of perigee dot (rate)
 *    t           - time
 *    tc          -
 *    gsto        - gst
 *    xfact       -
 *    xlamo       -
 *    no          - mean motion
 *    atime       -
 *    em          - eccentricity
 *    ft          -
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    xli         -
 *    mm          - mean anomaly
 *    xni         - mean motion
 *    nodem       - right ascension of ascending node
 *
 *  outputs       :
 *    atime       -
 *    em          - eccentricity
 *    argpm       - argument of perigee
 *    inclm       - inclination
 *    xli         -
 *    mm          - mean anomaly
 *    xni         -
 *    nodem       - right ascension of ascending node
 *    dndt        -
 *    nm          - mean motion
 *
 *  locals        :
 *    delt        -
 *    ft          -
 *    theta       -
 *    x2li        -
 *    x2omi       -
 *    xl          -
 *    xldot       -
 *    xnddt       -
 *    xndt        -
 *    xomi        -
 *
 *  coupling      :
 *    none        -
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function dspace(options) {
  var irez = options.irez,
      d2201 = options.d2201,
      d2211 = options.d2211,
      d3210 = options.d3210,
      d3222 = options.d3222,
      d4410 = options.d4410,
      d4422 = options.d4422,
      d5220 = options.d5220,
      d5232 = options.d5232,
      d5421 = options.d5421,
      d5433 = options.d5433,
      dedt = options.dedt,
      del1 = options.del1,
      del2 = options.del2,
      del3 = options.del3,
      didt = options.didt,
      dmdt = options.dmdt,
      dnodt = options.dnodt,
      domdt = options.domdt,
      argpo = options.argpo,
      argpdot = options.argpdot,
      t = options.t,
      tc = options.tc,
      gsto = options.gsto,
      xfact = options.xfact,
      xlamo = options.xlamo,
      no = options.no;
  var atime = options.atime,
      em = options.em,
      argpm = options.argpm,
      inclm = options.inclm,
      xli = options.xli,
      mm = options.mm,
      xni = options.xni,
      nodem = options.nodem,
      nm = options.nm;
  var fasx2 = 0.13130908;
  var fasx4 = 2.8843198;
  var fasx6 = 0.37448087;
  var g22 = 5.7686396;
  var g32 = 0.95240898;
  var g44 = 1.8014998;
  var g52 = 1.0508330;
  var g54 = 4.4108898;
  var rptim = 4.37526908801129966e-3; // equates to 7.29211514668855e-5 rad/sec

  var stepp = 720.0;
  var stepn = -720.0;
  var step2 = 259200.0;
  var delt;
  var x2li;
  var x2omi;
  var xl;
  var xldot;
  var xnddt;
  var xndt;
  var xomi;
  var dndt = 0.0;
  var ft = 0.0; //  ----------- calculate deep space resonance effects -----------

  var theta = (gsto + tc * rptim) % twoPi;
  em += dedt * t;
  inclm += didt * t;
  argpm += domdt * t;
  nodem += dnodt * t;
  mm += dmdt * t; // sgp4fix for negative inclinations
  // the following if statement should be commented out
  // if (inclm < 0.0)
  // {
  //   inclm = -inclm;
  //   argpm = argpm - pi;
  //   nodem = nodem + pi;
  // }

  /* - update resonances : numerical (euler-maclaurin) integration - */

  /* ------------------------- epoch restart ----------------------  */
  //   sgp4fix for propagator problems
  //   the following integration works for negative time steps and periods
  //   the specific changes are unknown because the original code was so convoluted
  // sgp4fix take out atime = 0.0 and fix for faster operation

  if (irez !== 0) {
    //  sgp4fix streamline check
    if (atime === 0.0 || t * atime <= 0.0 || Math.abs(t) < Math.abs(atime)) {
      atime = 0.0;
      xni = no;
      xli = xlamo;
    } // sgp4fix move check outside loop


    if (t > 0.0) {
      delt = stepp;
    } else {
      delt = stepn;
    }

    var iretn = 381; // added for do loop

    while (iretn === 381) {
      //  ------------------- dot terms calculated -------------
      //  ----------- near - synchronous resonance terms -------
      if (irez !== 2) {
        xndt = del1 * Math.sin(xli - fasx2) + del2 * Math.sin(2.0 * (xli - fasx4)) + del3 * Math.sin(3.0 * (xli - fasx6));
        xldot = xni + xfact;
        xnddt = del1 * Math.cos(xli - fasx2) + 2.0 * del2 * Math.cos(2.0 * (xli - fasx4)) + 3.0 * del3 * Math.cos(3.0 * (xli - fasx6));
        xnddt *= xldot;
      } else {
        // --------- near - half-day resonance terms --------
        xomi = argpo + argpdot * atime;
        x2omi = xomi + xomi;
        x2li = xli + xli;
        xndt = d2201 * Math.sin(x2omi + xli - g22) + d2211 * Math.sin(xli - g22) + d3210 * Math.sin(xomi + xli - g32) + d3222 * Math.sin(-xomi + xli - g32) + d4410 * Math.sin(x2omi + x2li - g44) + d4422 * Math.sin(x2li - g44) + d5220 * Math.sin(xomi + xli - g52) + d5232 * Math.sin(-xomi + xli - g52) + d5421 * Math.sin(xomi + x2li - g54) + d5433 * Math.sin(-xomi + x2li - g54);
        xldot = xni + xfact;
        xnddt = d2201 * Math.cos(x2omi + xli - g22) + d2211 * Math.cos(xli - g22) + d3210 * Math.cos(xomi + xli - g32) + d3222 * Math.cos(-xomi + xli - g32) + d5220 * Math.cos(xomi + xli - g52) + d5232 * Math.cos(-xomi + xli - g52) + 2.0 * d4410 * Math.cos(x2omi + x2li - g44) + d4422 * Math.cos(x2li - g44) + d5421 * Math.cos(xomi + x2li - g54) + d5433 * Math.cos(-xomi + x2li - g54);
        xnddt *= xldot;
      } //  ----------------------- integrator -------------------
      //  sgp4fix move end checks to end of routine


      if (Math.abs(t - atime) >= stepp) {
        iretn = 381;
      } else {
        ft = t - atime;
        iretn = 0;
      }

      if (iretn === 381) {
        xli += xldot * delt + xndt * step2;
        xni += xndt * delt + xnddt * step2;
        atime += delt;
      }
    }

    nm = xni + xndt * ft + xnddt * ft * ft * 0.5;
    xl = xli + xldot * ft + xndt * ft * ft * 0.5;

    if (irez !== 1) {
      mm = xl - 2.0 * nodem + 2.0 * theta;
      dndt = nm - no;
    } else {
      mm = xl - nodem - argpm + theta;
      dndt = nm - no;
    }

    nm = no + dndt;
  }

  return {
    atime: atime,
    em: em,
    argpm: argpm,
    inclm: inclm,
    xli: xli,
    mm: mm,
    xni: xni,
    nodem: nodem,
    dndt: dndt,
    nm: nm
  };
}

/*----------------------------------------------------------------------------
 *
 *                             procedure sgp4
 *
 *  this procedure is the sgp4 prediction model from space command. this is an
 *    updated and combined version of sgp4 and sdp4, which were originally
 *    published separately in spacetrack report //3. this version follows the
 *    methodology from the aiaa paper (2006) describing the history and
 *    development of the code.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    satrec  - initialised structure from sgp4init() call.
 *    tsince  - time since epoch (minutes)
 *
 *  outputs       :
 *    r           - position vector                     km
 *    v           - velocity                            km/sec
 *  return code - non-zero on error.
 *                   1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
 *                   2 - mean motion less than 0.0
 *                   3 - pert elements, ecc < 0.0  or  ecc > 1.0
 *                   4 - semi-latus rectum < 0.0
 *                   5 - epoch elements are sub-orbital
 *                   6 - satellite has decayed
 *
 *  locals        :
 *    am          -
 *    axnl, aynl        -
 *    betal       -
 *    cosim   , sinim   , cosomm  , sinomm  , cnod    , snod    , cos2u   ,
 *    sin2u   , coseo1  , sineo1  , cosi    , sini    , cosip   , sinip   ,
 *    cosisq  , cossu   , sinsu   , cosu    , sinu
 *    delm        -
 *    delomg      -
 *    dndt        -
 *    eccm        -
 *    emsq        -
 *    ecose       -
 *    el2         -
 *    eo1         -
 *    eccp        -
 *    esine       -
 *    argpm       -
 *    argpp       -
 *    omgadf      -
 *    pl          -
 *    r           -
 *    rtemsq      -
 *    rdotl       -
 *    rl          -
 *    rvdot       -
 *    rvdotl      -
 *    su          -
 *    t2  , t3   , t4    , tc
 *    tem5, temp , temp1 , temp2  , tempa  , tempe  , templ
 *    u   , ux   , uy    , uz     , vx     , vy     , vz
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    nm          - mean motion
 *    nodem       - right asc of ascending node
 *    xinc        -
 *    xincp       -
 *    xl          -
 *    xlm         -
 *    mp          -
 *    xmdf        -
 *    xmx         -
 *    xmy         -
 *    nodedf      -
 *    xnode       -
 *    nodep       -
 *    np          -
 *
 *  coupling      :
 *    getgravconst-
 *    dpper
 *    dspace
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report //3 1980
 *    hoots, norad spacetrack report //6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function sgp4(satrec, tsince) {
  /* eslint-disable no-param-reassign */
  var coseo1;
  var sineo1;
  var cosip;
  var sinip;
  var cosisq;
  var delm;
  var delomg;
  var eo1;
  var argpm;
  var argpp;
  var su;
  var t3;
  var t4;
  var tc;
  var tem5;
  var temp;
  var tempa;
  var tempe;
  var templ;
  var inclm;
  var mm;
  var nm;
  var nodem;
  var xincp;
  var xlm;
  var mp;
  var nodep;
  /* ------------------ set mathematical constants --------------- */
  // sgp4fix divisor for divide by zero check on inclination
  // the old check used 1.0 + cos(pi-1.0e-9), but then compared it to
  // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistency

  var temp4 = 1.5e-12; // --------------------- clear sgp4 error flag -----------------

  satrec.t = tsince;
  satrec.error = 0; //  ------- update for secular gravity and atmospheric drag -----

  var xmdf = satrec.mo + satrec.mdot * satrec.t;
  var argpdf = satrec.argpo + satrec.argpdot * satrec.t;
  var nodedf = satrec.nodeo + satrec.nodedot * satrec.t;
  argpm = argpdf;
  mm = xmdf;
  var t2 = satrec.t * satrec.t;
  nodem = nodedf + satrec.nodecf * t2;
  tempa = 1.0 - satrec.cc1 * satrec.t;
  tempe = satrec.bstar * satrec.cc4 * satrec.t;
  templ = satrec.t2cof * t2;

  if (satrec.isimp !== 1) {
    delomg = satrec.omgcof * satrec.t; //  sgp4fix use mutliply for speed instead of pow

    var delmtemp = 1.0 + satrec.eta * Math.cos(xmdf);
    delm = satrec.xmcof * (delmtemp * delmtemp * delmtemp - satrec.delmo);
    temp = delomg + delm;
    mm = xmdf + temp;
    argpm = argpdf - temp;
    t3 = t2 * satrec.t;
    t4 = t3 * satrec.t;
    tempa = tempa - satrec.d2 * t2 - satrec.d3 * t3 - satrec.d4 * t4;
    tempe += satrec.bstar * satrec.cc5 * (Math.sin(mm) - satrec.sinmao);
    templ = templ + satrec.t3cof * t3 + t4 * (satrec.t4cof + satrec.t * satrec.t5cof);
  }

  nm = satrec.no;
  var em = satrec.ecco;
  inclm = satrec.inclo;

  if (satrec.method === 'd') {
    tc = satrec.t;
    var dspaceOptions = {
      irez: satrec.irez,
      d2201: satrec.d2201,
      d2211: satrec.d2211,
      d3210: satrec.d3210,
      d3222: satrec.d3222,
      d4410: satrec.d4410,
      d4422: satrec.d4422,
      d5220: satrec.d5220,
      d5232: satrec.d5232,
      d5421: satrec.d5421,
      d5433: satrec.d5433,
      dedt: satrec.dedt,
      del1: satrec.del1,
      del2: satrec.del2,
      del3: satrec.del3,
      didt: satrec.didt,
      dmdt: satrec.dmdt,
      dnodt: satrec.dnodt,
      domdt: satrec.domdt,
      argpo: satrec.argpo,
      argpdot: satrec.argpdot,
      t: satrec.t,
      tc: tc,
      gsto: satrec.gsto,
      xfact: satrec.xfact,
      xlamo: satrec.xlamo,
      no: satrec.no,
      atime: satrec.atime,
      em: em,
      argpm: argpm,
      inclm: inclm,
      xli: satrec.xli,
      mm: mm,
      xni: satrec.xni,
      nodem: nodem,
      nm: nm
    };
    var dspaceResult = dspace(dspaceOptions);
    em = dspaceResult.em;
    argpm = dspaceResult.argpm;
    inclm = dspaceResult.inclm;
    mm = dspaceResult.mm;
    nodem = dspaceResult.nodem;
    nm = dspaceResult.nm;
  }

  if (nm <= 0.0) {
    // printf("// error nm %f\n", nm);
    satrec.error = 2; // sgp4fix add return

    return [false, false];
  }

  var am = Math.pow(xke / nm, x2o3) * tempa * tempa;
  nm = xke / Math.pow(am, 1.5);
  em -= tempe; // fix tolerance for error recognition
  // sgp4fix am is fixed from the previous nm check

  if (em >= 1.0 || em < -0.001) {
    // || (am < 0.95)
    // printf("// error em %f\n", em);
    satrec.error = 1; // sgp4fix to return if there is an error in eccentricity

    return [false, false];
  } //  sgp4fix fix tolerance to avoid a divide by zero


  if (em < 1.0e-6) {
    em = 1.0e-6;
  }

  mm += satrec.no * templ;
  xlm = mm + argpm + nodem;
  nodem %= twoPi;
  argpm %= twoPi;
  xlm %= twoPi;
  mm = (xlm - argpm - nodem) % twoPi; // ----------------- compute extra mean quantities -------------

  var sinim = Math.sin(inclm);
  var cosim = Math.cos(inclm); // -------------------- add lunar-solar periodics --------------

  var ep = em;
  xincp = inclm;
  argpp = argpm;
  nodep = nodem;
  mp = mm;
  sinip = sinim;
  cosip = cosim;

  if (satrec.method === 'd') {
    var dpperParameters = {
      inclo: satrec.inclo,
      init: 'n',
      ep: ep,
      inclp: xincp,
      nodep: nodep,
      argpp: argpp,
      mp: mp,
      opsmode: satrec.operationmode
    };
    var dpperResult = dpper(satrec, dpperParameters);
    ep = dpperResult.ep;
    nodep = dpperResult.nodep;
    argpp = dpperResult.argpp;
    mp = dpperResult.mp;
    xincp = dpperResult.inclp;

    if (xincp < 0.0) {
      xincp = -xincp;
      nodep += pi;
      argpp -= pi;
    }

    if (ep < 0.0 || ep > 1.0) {
      //  printf("// error ep %f\n", ep);
      satrec.error = 3; //  sgp4fix add return

      return [false, false];
    }
  } //  -------------------- long period periodics ------------------


  if (satrec.method === 'd') {
    sinip = Math.sin(xincp);
    cosip = Math.cos(xincp);
    satrec.aycof = -0.5 * j3oj2 * sinip; //  sgp4fix for divide by zero for xincp = 180 deg

    if (Math.abs(cosip + 1.0) > 1.5e-12) {
      satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / (1.0 + cosip);
    } else {
      satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / temp4;
    }
  }

  var axnl = ep * Math.cos(argpp);
  temp = 1.0 / (am * (1.0 - ep * ep));
  var aynl = ep * Math.sin(argpp) + temp * satrec.aycof;
  var xl = mp + argpp + nodep + temp * satrec.xlcof * axnl; // --------------------- solve kepler's equation ---------------

  var u = (xl - nodep) % twoPi;
  eo1 = u;
  tem5 = 9999.9;
  var ktr = 1; //    sgp4fix for kepler iteration
  //    the following iteration needs better limits on corrections

  while (Math.abs(tem5) >= 1.0e-12 && ktr <= 10) {
    sineo1 = Math.sin(eo1);
    coseo1 = Math.cos(eo1);
    tem5 = 1.0 - coseo1 * axnl - sineo1 * aynl;
    tem5 = (u - aynl * coseo1 + axnl * sineo1 - eo1) / tem5;

    if (Math.abs(tem5) >= 0.95) {
      if (tem5 > 0.0) {
        tem5 = 0.95;
      } else {
        tem5 = -0.95;
      }
    }

    eo1 += tem5;
    ktr += 1;
  } //  ------------- short period preliminary quantities -----------


  var ecose = axnl * coseo1 + aynl * sineo1;
  var esine = axnl * sineo1 - aynl * coseo1;
  var el2 = axnl * axnl + aynl * aynl;
  var pl = am * (1.0 - el2);

  if (pl < 0.0) {
    //  printf("// error pl %f\n", pl);
    satrec.error = 4; //  sgp4fix add return

    return [false, false];
  }

  var rl = am * (1.0 - ecose);
  var rdotl = Math.sqrt(am) * esine / rl;
  var rvdotl = Math.sqrt(pl) / rl;
  var betal = Math.sqrt(1.0 - el2);
  temp = esine / (1.0 + betal);
  var sinu = am / rl * (sineo1 - aynl - axnl * temp);
  var cosu = am / rl * (coseo1 - axnl + aynl * temp);
  su = Math.atan2(sinu, cosu);
  var sin2u = (cosu + cosu) * sinu;
  var cos2u = 1.0 - 2.0 * sinu * sinu;
  temp = 1.0 / pl;
  var temp1 = 0.5 * j2 * temp;
  var temp2 = temp1 * temp; // -------------- update for short period periodics ------------

  if (satrec.method === 'd') {
    cosisq = cosip * cosip;
    satrec.con41 = 3.0 * cosisq - 1.0;
    satrec.x1mth2 = 1.0 - cosisq;
    satrec.x7thm1 = 7.0 * cosisq - 1.0;
  }

  var mrt = rl * (1.0 - 1.5 * temp2 * betal * satrec.con41) + 0.5 * temp1 * satrec.x1mth2 * cos2u; // sgp4fix for decaying satellites

  if (mrt < 1.0) {
    // printf("// decay condition %11.6f \n",mrt);
    satrec.error = 6;
    return {
      position: false,
      velocity: false
    };
  }

  su -= 0.25 * temp2 * satrec.x7thm1 * sin2u;
  var xnode = nodep + 1.5 * temp2 * cosip * sin2u;
  var xinc = xincp + 1.5 * temp2 * cosip * sinip * cos2u;
  var mvt = rdotl - nm * temp1 * satrec.x1mth2 * sin2u / xke;
  var rvdot = rvdotl + nm * temp1 * (satrec.x1mth2 * cos2u + 1.5 * satrec.con41) / xke; // --------------------- orientation vectors -------------------

  var sinsu = Math.sin(su);
  var cossu = Math.cos(su);
  var snod = Math.sin(xnode);
  var cnod = Math.cos(xnode);
  var sini = Math.sin(xinc);
  var cosi = Math.cos(xinc);
  var xmx = -snod * cosi;
  var xmy = cnod * cosi;
  var ux = xmx * sinsu + cnod * cossu;
  var uy = xmy * sinsu + snod * cossu;
  var uz = sini * sinsu;
  var vx = xmx * cossu - cnod * sinsu;
  var vy = xmy * cossu - snod * sinsu;
  var vz = sini * cossu; // --------- position and velocity (in km and km/sec) ----------

  var r = {
    x: mrt * ux * earthRadius,
    y: mrt * uy * earthRadius,
    z: mrt * uz * earthRadius
  };
  var v = {
    x: (mvt * ux + rvdot * vx) * vkmpersec,
    y: (mvt * uy + rvdot * vy) * vkmpersec,
    z: (mvt * uz + rvdot * vz) * vkmpersec
  };
  return {
    position: r,
    velocity: v
  };
  /* eslint-enable no-param-reassign */
}

/*-----------------------------------------------------------------------------
 *
 *                             procedure sgp4init
 *
 *  this procedure initializes variables for sgp4.
 *
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *  author        : david vallado                  719-573-2600   28 jun 2005
 *
 *  inputs        :
 *    opsmode     - mode of operation afspc or improved 'a', 'i'
 *    satn        - satellite number
 *    bstar       - sgp4 type drag coefficient              kg/m2er
 *    ecco        - eccentricity
 *    epoch       - epoch time in days from jan 0, 1950. 0 hr
 *    argpo       - argument of perigee (output if ds)
 *    inclo       - inclination
 *    mo          - mean anomaly (output if ds)
 *    no          - mean motion
 *    nodeo       - right ascension of ascending node
 *
 *  outputs       :
 *    rec      - common values for subsequent calls
 *    return code - non-zero on error.
 *                   1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
 *                   2 - mean motion less than 0.0
 *                   3 - pert elements, ecc < 0.0  or  ecc > 1.0
 *                   4 - semi-latus rectum < 0.0
 *                   5 - epoch elements are sub-orbital
 *                   6 - satellite has decayed
 *
 *  locals        :
 *    cnodm  , snodm  , cosim  , sinim  , cosomm , sinomm
 *    cc1sq  , cc2    , cc3
 *    coef   , coef1
 *    cosio4      -
 *    day         -
 *    dndt        -
 *    em          - eccentricity
 *    emsq        - eccentricity squared
 *    eeta        -
 *    etasq       -
 *    gam         -
 *    argpm       - argument of perigee
 *    nodem       -
 *    inclm       - inclination
 *    mm          - mean anomaly
 *    nm          - mean motion
 *    perige      - perigee
 *    pinvsq      -
 *    psisq       -
 *    qzms24      -
 *    rtemsq      -
 *    s1, s2, s3, s4, s5, s6, s7          -
 *    sfour       -
 *    ss1, ss2, ss3, ss4, ss5, ss6, ss7         -
 *    sz1, sz2, sz3
 *    sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
 *    tc          -
 *    temp        -
 *    temp1, temp2, temp3       -
 *    tsi         -
 *    xpidot      -
 *    xhdot1      -
 *    z1, z2, z3          -
 *    z11, z12, z13, z21, z22, z23, z31, z32, z33         -
 *
 *  coupling      :
 *    getgravconst-
 *    initl       -
 *    dscom       -
 *    dpper       -
 *    dsinit      -
 *    sgp4        -
 *
 *  references    :
 *    hoots, roehrich, norad spacetrack report #3 1980
 *    hoots, norad spacetrack report #6 1986
 *    hoots, schumacher and glover 2004
 *    vallado, crawford, hujsak, kelso  2006
 ----------------------------------------------------------------------------*/

function sgp4init(satrec, options) {
  /* eslint-disable no-param-reassign */
  var opsmode = options.opsmode,
      satn = options.satn,
      epoch = options.epoch,
      xbstar = options.xbstar,
      xecco = options.xecco,
      xargpo = options.xargpo,
      xinclo = options.xinclo,
      xmo = options.xmo,
      xno = options.xno,
      xnodeo = options.xnodeo;
  var cosim;
  var sinim;
  var cc1sq;
  var cc2;
  var cc3;
  var coef;
  var coef1;
  var cosio4;
  var em;
  var emsq;
  var eeta;
  var etasq;
  var argpm;
  var nodem;
  var inclm;
  var mm;
  var nm;
  var perige;
  var pinvsq;
  var psisq;
  var qzms24;
  var s1;
  var s2;
  var s3;
  var s4;
  var s5;
  var sfour;
  var ss1;
  var ss2;
  var ss3;
  var ss4;
  var ss5;
  var sz1;
  var sz3;
  var sz11;
  var sz13;
  var sz21;
  var sz23;
  var sz31;
  var sz33;
  var tc;
  var temp;
  var temp1;
  var temp2;
  var temp3;
  var tsi;
  var xpidot;
  var xhdot1;
  var z1;
  var z3;
  var z11;
  var z13;
  var z21;
  var z23;
  var z31;
  var z33;
  /* ------------------------ initialization --------------------- */
  // sgp4fix divisor for divide by zero check on inclination
  // the old check used 1.0 + Math.cos(pi-1.0e-9), but then compared it to
  // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistency

  var temp4 = 1.5e-12; // ----------- set all near earth variables to zero ------------

  satrec.isimp = 0;
  satrec.method = 'n';
  satrec.aycof = 0.0;
  satrec.con41 = 0.0;
  satrec.cc1 = 0.0;
  satrec.cc4 = 0.0;
  satrec.cc5 = 0.0;
  satrec.d2 = 0.0;
  satrec.d3 = 0.0;
  satrec.d4 = 0.0;
  satrec.delmo = 0.0;
  satrec.eta = 0.0;
  satrec.argpdot = 0.0;
  satrec.omgcof = 0.0;
  satrec.sinmao = 0.0;
  satrec.t = 0.0;
  satrec.t2cof = 0.0;
  satrec.t3cof = 0.0;
  satrec.t4cof = 0.0;
  satrec.t5cof = 0.0;
  satrec.x1mth2 = 0.0;
  satrec.x7thm1 = 0.0;
  satrec.mdot = 0.0;
  satrec.nodedot = 0.0;
  satrec.xlcof = 0.0;
  satrec.xmcof = 0.0;
  satrec.nodecf = 0.0; // ----------- set all deep space variables to zero ------------

  satrec.irez = 0;
  satrec.d2201 = 0.0;
  satrec.d2211 = 0.0;
  satrec.d3210 = 0.0;
  satrec.d3222 = 0.0;
  satrec.d4410 = 0.0;
  satrec.d4422 = 0.0;
  satrec.d5220 = 0.0;
  satrec.d5232 = 0.0;
  satrec.d5421 = 0.0;
  satrec.d5433 = 0.0;
  satrec.dedt = 0.0;
  satrec.del1 = 0.0;
  satrec.del2 = 0.0;
  satrec.del3 = 0.0;
  satrec.didt = 0.0;
  satrec.dmdt = 0.0;
  satrec.dnodt = 0.0;
  satrec.domdt = 0.0;
  satrec.e3 = 0.0;
  satrec.ee2 = 0.0;
  satrec.peo = 0.0;
  satrec.pgho = 0.0;
  satrec.pho = 0.0;
  satrec.pinco = 0.0;
  satrec.plo = 0.0;
  satrec.se2 = 0.0;
  satrec.se3 = 0.0;
  satrec.sgh2 = 0.0;
  satrec.sgh3 = 0.0;
  satrec.sgh4 = 0.0;
  satrec.sh2 = 0.0;
  satrec.sh3 = 0.0;
  satrec.si2 = 0.0;
  satrec.si3 = 0.0;
  satrec.sl2 = 0.0;
  satrec.sl3 = 0.0;
  satrec.sl4 = 0.0;
  satrec.gsto = 0.0;
  satrec.xfact = 0.0;
  satrec.xgh2 = 0.0;
  satrec.xgh3 = 0.0;
  satrec.xgh4 = 0.0;
  satrec.xh2 = 0.0;
  satrec.xh3 = 0.0;
  satrec.xi2 = 0.0;
  satrec.xi3 = 0.0;
  satrec.xl2 = 0.0;
  satrec.xl3 = 0.0;
  satrec.xl4 = 0.0;
  satrec.xlamo = 0.0;
  satrec.zmol = 0.0;
  satrec.zmos = 0.0;
  satrec.atime = 0.0;
  satrec.xli = 0.0;
  satrec.xni = 0.0; // sgp4fix - note the following variables are also passed directly via satrec.
  // it is possible to streamline the sgp4init call by deleting the "x"
  // variables, but the user would need to set the satrec.* values first. we
  // include the additional assignments in case twoline2rv is not used.

  satrec.bstar = xbstar;
  satrec.ecco = xecco;
  satrec.argpo = xargpo;
  satrec.inclo = xinclo;
  satrec.mo = xmo;
  satrec.no = xno;
  satrec.nodeo = xnodeo; //  sgp4fix add opsmode

  satrec.operationmode = opsmode; // ------------------------ earth constants -----------------------
  // sgp4fix identify constants and allow alternate values

  var ss = 78.0 / earthRadius + 1.0; // sgp4fix use multiply for speed instead of pow

  var qzms2ttemp = (120.0 - 78.0) / earthRadius;
  var qzms2t = qzms2ttemp * qzms2ttemp * qzms2ttemp * qzms2ttemp;
  satrec.init = 'y';
  satrec.t = 0.0;
  var initlOptions = {
    satn: satn,
    ecco: satrec.ecco,
    epoch: epoch,
    inclo: satrec.inclo,
    no: satrec.no,
    method: satrec.method,
    opsmode: satrec.operationmode
  };
  var initlResult = initl(initlOptions);
  var ao = initlResult.ao,
      con42 = initlResult.con42,
      cosio = initlResult.cosio,
      cosio2 = initlResult.cosio2,
      eccsq = initlResult.eccsq,
      omeosq = initlResult.omeosq,
      posq = initlResult.posq,
      rp = initlResult.rp,
      rteosq = initlResult.rteosq,
      sinio = initlResult.sinio;
  satrec.no = initlResult.no;
  satrec.con41 = initlResult.con41;
  satrec.gsto = initlResult.gsto;
  satrec.error = 0; // sgp4fix remove this check as it is unnecessary
  // the mrt check in sgp4 handles decaying satellite cases even if the starting
  // condition is below the surface of te earth
  // if (rp < 1.0)
  // {
  //   printf("// *** satn%d epoch elts sub-orbital ***\n", satn);
  //   satrec.error = 5;
  // }

  if (omeosq >= 0.0 || satrec.no >= 0.0) {
    satrec.isimp = 0;

    if (rp < 220.0 / earthRadius + 1.0) {
      satrec.isimp = 1;
    }

    sfour = ss;
    qzms24 = qzms2t;
    perige = (rp - 1.0) * earthRadius; // - for perigees below 156 km, s and qoms2t are altered -

    if (perige < 156.0) {
      sfour = perige - 78.0;

      if (perige < 98.0) {
        sfour = 20.0;
      } // sgp4fix use multiply for speed instead of pow


      var qzms24temp = (120.0 - sfour) / earthRadius;
      qzms24 = qzms24temp * qzms24temp * qzms24temp * qzms24temp;
      sfour = sfour / earthRadius + 1.0;
    }

    pinvsq = 1.0 / posq;
    tsi = 1.0 / (ao - sfour);
    satrec.eta = ao * satrec.ecco * tsi;
    etasq = satrec.eta * satrec.eta;
    eeta = satrec.ecco * satrec.eta;
    psisq = Math.abs(1.0 - etasq);
    coef = qzms24 * Math.pow(tsi, 4.0);
    coef1 = coef / Math.pow(psisq, 3.5);
    cc2 = coef1 * satrec.no * (ao * (1.0 + 1.5 * etasq + eeta * (4.0 + etasq)) + 0.375 * j2 * tsi / psisq * satrec.con41 * (8.0 + 3.0 * etasq * (8.0 + etasq)));
    satrec.cc1 = satrec.bstar * cc2;
    cc3 = 0.0;

    if (satrec.ecco > 1.0e-4) {
      cc3 = -2.0 * coef * tsi * j3oj2 * satrec.no * sinio / satrec.ecco;
    }

    satrec.x1mth2 = 1.0 - cosio2;
    satrec.cc4 = 2.0 * satrec.no * coef1 * ao * omeosq * (satrec.eta * (2.0 + 0.5 * etasq) + satrec.ecco * (0.5 + 2.0 * etasq) - j2 * tsi / (ao * psisq) * (-3.0 * satrec.con41 * (1.0 - 2.0 * eeta + etasq * (1.5 - 0.5 * eeta)) + 0.75 * satrec.x1mth2 * (2.0 * etasq - eeta * (1.0 + etasq)) * Math.cos(2.0 * satrec.argpo)));
    satrec.cc5 = 2.0 * coef1 * ao * omeosq * (1.0 + 2.75 * (etasq + eeta) + eeta * etasq);
    cosio4 = cosio2 * cosio2;
    temp1 = 1.5 * j2 * pinvsq * satrec.no;
    temp2 = 0.5 * temp1 * j2 * pinvsq;
    temp3 = -0.46875 * j4 * pinvsq * pinvsq * satrec.no;
    satrec.mdot = satrec.no + 0.5 * temp1 * rteosq * satrec.con41 + 0.0625 * temp2 * rteosq * (13.0 - 78.0 * cosio2 + 137.0 * cosio4);
    satrec.argpdot = -0.5 * temp1 * con42 + 0.0625 * temp2 * (7.0 - 114.0 * cosio2 + 395.0 * cosio4) + temp3 * (3.0 - 36.0 * cosio2 + 49.0 * cosio4);
    xhdot1 = -temp1 * cosio;
    satrec.nodedot = xhdot1 + (0.5 * temp2 * (4.0 - 19.0 * cosio2) + 2.0 * temp3 * (3.0 - 7.0 * cosio2)) * cosio;
    xpidot = satrec.argpdot + satrec.nodedot;
    satrec.omgcof = satrec.bstar * cc3 * Math.cos(satrec.argpo);
    satrec.xmcof = 0.0;

    if (satrec.ecco > 1.0e-4) {
      satrec.xmcof = -x2o3 * coef * satrec.bstar / eeta;
    }

    satrec.nodecf = 3.5 * omeosq * xhdot1 * satrec.cc1;
    satrec.t2cof = 1.5 * satrec.cc1; // sgp4fix for divide by zero with xinco = 180 deg

    if (Math.abs(cosio + 1.0) > 1.5e-12) {
      satrec.xlcof = -0.25 * j3oj2 * sinio * (3.0 + 5.0 * cosio) / (1.0 + cosio);
    } else {
      satrec.xlcof = -0.25 * j3oj2 * sinio * (3.0 + 5.0 * cosio) / temp4;
    }

    satrec.aycof = -0.5 * j3oj2 * sinio; // sgp4fix use multiply for speed instead of pow

    var delmotemp = 1.0 + satrec.eta * Math.cos(satrec.mo);
    satrec.delmo = delmotemp * delmotemp * delmotemp;
    satrec.sinmao = Math.sin(satrec.mo);
    satrec.x7thm1 = 7.0 * cosio2 - 1.0; // --------------- deep space initialization -------------

    if (2 * pi / satrec.no >= 225.0) {
      satrec.method = 'd';
      satrec.isimp = 1;
      tc = 0.0;
      inclm = satrec.inclo;
      var dscomOptions = {
        epoch: epoch,
        ep: satrec.ecco,
        argpp: satrec.argpo,
        tc: tc,
        inclp: satrec.inclo,
        nodep: satrec.nodeo,
        np: satrec.no,
        e3: satrec.e3,
        ee2: satrec.ee2,
        peo: satrec.peo,
        pgho: satrec.pgho,
        pho: satrec.pho,
        pinco: satrec.pinco,
        plo: satrec.plo,
        se2: satrec.se2,
        se3: satrec.se3,
        sgh2: satrec.sgh2,
        sgh3: satrec.sgh3,
        sgh4: satrec.sgh4,
        sh2: satrec.sh2,
        sh3: satrec.sh3,
        si2: satrec.si2,
        si3: satrec.si3,
        sl2: satrec.sl2,
        sl3: satrec.sl3,
        sl4: satrec.sl4,
        xgh2: satrec.xgh2,
        xgh3: satrec.xgh3,
        xgh4: satrec.xgh4,
        xh2: satrec.xh2,
        xh3: satrec.xh3,
        xi2: satrec.xi2,
        xi3: satrec.xi3,
        xl2: satrec.xl2,
        xl3: satrec.xl3,
        xl4: satrec.xl4,
        zmol: satrec.zmol,
        zmos: satrec.zmos
      };
      var dscomResult = dscom(dscomOptions);
      satrec.e3 = dscomResult.e3;
      satrec.ee2 = dscomResult.ee2;
      satrec.peo = dscomResult.peo;
      satrec.pgho = dscomResult.pgho;
      satrec.pho = dscomResult.pho;
      satrec.pinco = dscomResult.pinco;
      satrec.plo = dscomResult.plo;
      satrec.se2 = dscomResult.se2;
      satrec.se3 = dscomResult.se3;
      satrec.sgh2 = dscomResult.sgh2;
      satrec.sgh3 = dscomResult.sgh3;
      satrec.sgh4 = dscomResult.sgh4;
      satrec.sh2 = dscomResult.sh2;
      satrec.sh3 = dscomResult.sh3;
      satrec.si2 = dscomResult.si2;
      satrec.si3 = dscomResult.si3;
      satrec.sl2 = dscomResult.sl2;
      satrec.sl3 = dscomResult.sl3;
      satrec.sl4 = dscomResult.sl4;
      sinim = dscomResult.sinim;
      cosim = dscomResult.cosim;
      em = dscomResult.em;
      emsq = dscomResult.emsq;
      s1 = dscomResult.s1;
      s2 = dscomResult.s2;
      s3 = dscomResult.s3;
      s4 = dscomResult.s4;
      s5 = dscomResult.s5;
      ss1 = dscomResult.ss1;
      ss2 = dscomResult.ss2;
      ss3 = dscomResult.ss3;
      ss4 = dscomResult.ss4;
      ss5 = dscomResult.ss5;
      sz1 = dscomResult.sz1;
      sz3 = dscomResult.sz3;
      sz11 = dscomResult.sz11;
      sz13 = dscomResult.sz13;
      sz21 = dscomResult.sz21;
      sz23 = dscomResult.sz23;
      sz31 = dscomResult.sz31;
      sz33 = dscomResult.sz33;
      satrec.xgh2 = dscomResult.xgh2;
      satrec.xgh3 = dscomResult.xgh3;
      satrec.xgh4 = dscomResult.xgh4;
      satrec.xh2 = dscomResult.xh2;
      satrec.xh3 = dscomResult.xh3;
      satrec.xi2 = dscomResult.xi2;
      satrec.xi3 = dscomResult.xi3;
      satrec.xl2 = dscomResult.xl2;
      satrec.xl3 = dscomResult.xl3;
      satrec.xl4 = dscomResult.xl4;
      satrec.zmol = dscomResult.zmol;
      satrec.zmos = dscomResult.zmos;
      nm = dscomResult.nm;
      z1 = dscomResult.z1;
      z3 = dscomResult.z3;
      z11 = dscomResult.z11;
      z13 = dscomResult.z13;
      z21 = dscomResult.z21;
      z23 = dscomResult.z23;
      z31 = dscomResult.z31;
      z33 = dscomResult.z33;
      var dpperOptions = {
        inclo: inclm,
        init: satrec.init,
        ep: satrec.ecco,
        inclp: satrec.inclo,
        nodep: satrec.nodeo,
        argpp: satrec.argpo,
        mp: satrec.mo,
        opsmode: satrec.operationmode
      };
      var dpperResult = dpper(satrec, dpperOptions);
      satrec.ecco = dpperResult.ep;
      satrec.inclo = dpperResult.inclp;
      satrec.nodeo = dpperResult.nodep;
      satrec.argpo = dpperResult.argpp;
      satrec.mo = dpperResult.mp;
      argpm = 0.0;
      nodem = 0.0;
      mm = 0.0;
      var dsinitOptions = {
        cosim: cosim,
        emsq: emsq,
        argpo: satrec.argpo,
        s1: s1,
        s2: s2,
        s3: s3,
        s4: s4,
        s5: s5,
        sinim: sinim,
        ss1: ss1,
        ss2: ss2,
        ss3: ss3,
        ss4: ss4,
        ss5: ss5,
        sz1: sz1,
        sz3: sz3,
        sz11: sz11,
        sz13: sz13,
        sz21: sz21,
        sz23: sz23,
        sz31: sz31,
        sz33: sz33,
        t: satrec.t,
        tc: tc,
        gsto: satrec.gsto,
        mo: satrec.mo,
        mdot: satrec.mdot,
        no: satrec.no,
        nodeo: satrec.nodeo,
        nodedot: satrec.nodedot,
        xpidot: xpidot,
        z1: z1,
        z3: z3,
        z11: z11,
        z13: z13,
        z21: z21,
        z23: z23,
        z31: z31,
        z33: z33,
        ecco: satrec.ecco,
        eccsq: eccsq,
        em: em,
        argpm: argpm,
        inclm: inclm,
        mm: mm,
        nm: nm,
        nodem: nodem,
        irez: satrec.irez,
        atime: satrec.atime,
        d2201: satrec.d2201,
        d2211: satrec.d2211,
        d3210: satrec.d3210,
        d3222: satrec.d3222,
        d4410: satrec.d4410,
        d4422: satrec.d4422,
        d5220: satrec.d5220,
        d5232: satrec.d5232,
        d5421: satrec.d5421,
        d5433: satrec.d5433,
        dedt: satrec.dedt,
        didt: satrec.didt,
        dmdt: satrec.dmdt,
        dnodt: satrec.dnodt,
        domdt: satrec.domdt,
        del1: satrec.del1,
        del2: satrec.del2,
        del3: satrec.del3,
        xfact: satrec.xfact,
        xlamo: satrec.xlamo,
        xli: satrec.xli,
        xni: satrec.xni
      };
      var dsinitResult = dsinit(dsinitOptions);
      satrec.irez = dsinitResult.irez;
      satrec.atime = dsinitResult.atime;
      satrec.d2201 = dsinitResult.d2201;
      satrec.d2211 = dsinitResult.d2211;
      satrec.d3210 = dsinitResult.d3210;
      satrec.d3222 = dsinitResult.d3222;
      satrec.d4410 = dsinitResult.d4410;
      satrec.d4422 = dsinitResult.d4422;
      satrec.d5220 = dsinitResult.d5220;
      satrec.d5232 = dsinitResult.d5232;
      satrec.d5421 = dsinitResult.d5421;
      satrec.d5433 = dsinitResult.d5433;
      satrec.dedt = dsinitResult.dedt;
      satrec.didt = dsinitResult.didt;
      satrec.dmdt = dsinitResult.dmdt;
      satrec.dnodt = dsinitResult.dnodt;
      satrec.domdt = dsinitResult.domdt;
      satrec.del1 = dsinitResult.del1;
      satrec.del2 = dsinitResult.del2;
      satrec.del3 = dsinitResult.del3;
      satrec.xfact = dsinitResult.xfact;
      satrec.xlamo = dsinitResult.xlamo;
      satrec.xli = dsinitResult.xli;
      satrec.xni = dsinitResult.xni;
    } // ----------- set variables if not deep space -----------


    if (satrec.isimp !== 1) {
      cc1sq = satrec.cc1 * satrec.cc1;
      satrec.d2 = 4.0 * ao * tsi * cc1sq;
      temp = satrec.d2 * tsi * satrec.cc1 / 3.0;
      satrec.d3 = (17.0 * ao + sfour) * temp;
      satrec.d4 = 0.5 * temp * ao * tsi * (221.0 * ao + 31.0 * sfour) * satrec.cc1;
      satrec.t3cof = satrec.d2 + 2.0 * cc1sq;
      satrec.t4cof = 0.25 * (3.0 * satrec.d3 + satrec.cc1 * (12.0 * satrec.d2 + 10.0 * cc1sq));
      satrec.t5cof = 0.2 * (3.0 * satrec.d4 + 12.0 * satrec.cc1 * satrec.d3 + 6.0 * satrec.d2 * satrec.d2 + 15.0 * cc1sq * (2.0 * satrec.d2 + cc1sq));
    }
    /* finally propogate to zero epoch to initialize all others. */
    // sgp4fix take out check to let satellites process until they are actually below earth surface
    // if(satrec.error == 0)

  }

  sgp4(satrec, 0);
  satrec.init = 'n';
  /* eslint-enable no-param-reassign */
}

/* -----------------------------------------------------------------------------
 *
 *                           function twoline2rv
 *
 *  this function converts the two line element set character string data to
 *    variables and initializes the sgp4 variables. several intermediate varaibles
 *    and quantities are determined. note that the result is a structure so multiple
 *    satellites can be processed simultaneously without having to reinitialize. the
 *    verification mode is an important option that permits quick checks of any
 *    changes to the underlying technical theory. this option works using a
 *    modified tle file in which the start, stop, and delta time values are
 *    included at the end of the second line of data. this only works with the
 *    verification mode. the catalog mode simply propagates from -1440 to 1440 min
 *    from epoch and is useful when performing entire catalog runs.
 *
 *  author        : david vallado                  719-573-2600    1 mar 2001
 *
 *  inputs        :
 *    longstr1    - first line of the tle
 *    longstr2    - second line of the tle
 *    typerun     - type of run                    verification 'v', catalog 'c',
 *                                                 manual 'm'
 *    typeinput   - type of manual input           mfe 'm', epoch 'e', dayofyr 'd'
 *    opsmode     - mode of operation afspc or improved 'a', 'i'
 *    whichconst  - which set of constants to use  72, 84
 *
 *  outputs       :
 *    satrec      - structure containing all the sgp4 satellite information
 *
 *  coupling      :
 *    getgravconst-
 *    days2mdhms  - conversion of days to month, day, hour, minute, second
 *    jday        - convert day month year hour minute second into julian date
 *    sgp4init    - initialize the sgp4 variables
 *
 *  references    :
 *    norad spacetrack report #3
 *    vallado, crawford, hujsak, kelso  2006
 --------------------------------------------------------------------------- */

/**
 * Return a Satellite imported from two lines of TLE data.
 *
 * Provide the two TLE lines as strings `longstr1` and `longstr2`,
 * and select which standard set of gravitational constants you want
 * by providing `gravity_constants`:
 *
 * `sgp4.propagation.wgs72` - Standard WGS 72 model
 * `sgp4.propagation.wgs84` - More recent WGS 84 model
 * `sgp4.propagation.wgs72old` - Legacy support for old SGP4 behavior
 *
 * Normally, computations are made using letious recent improvements
 * to the algorithm.  If you want to turn some of these off and go
 * back into "afspc" mode, then set `afspc_mode` to `True`.
 */

function twoline2satrec(longstr1, longstr2) {
  var opsmode = 'i';
  var xpdotp = 1440.0 / (2.0 * pi); // 229.1831180523293;

  var year = 0;
  var satrec = {};
  satrec.error = 0;
  satrec.satnum = longstr1.substring(2, 7);
  satrec.epochyr = parseInt(longstr1.substring(18, 20), 10);
  satrec.epochdays = parseFloat(longstr1.substring(20, 32));
  satrec.ndot = parseFloat(longstr1.substring(33, 43));
  satrec.nddot = parseFloat(".".concat(parseInt(longstr1.substring(44, 50), 10), "E").concat(longstr1.substring(50, 52)));
  satrec.bstar = parseFloat("".concat(longstr1.substring(53, 54), ".").concat(parseInt(longstr1.substring(54, 59), 10), "E").concat(longstr1.substring(59, 61))); // satrec.satnum = longstr2.substring(2, 7);

  satrec.inclo = parseFloat(longstr2.substring(8, 16));
  satrec.nodeo = parseFloat(longstr2.substring(17, 25));
  satrec.ecco = parseFloat(".".concat(longstr2.substring(26, 33)));
  satrec.argpo = parseFloat(longstr2.substring(34, 42));
  satrec.mo = parseFloat(longstr2.substring(43, 51));
  satrec.no = parseFloat(longstr2.substring(52, 63)); // ---- find no, ndot, nddot ----

  satrec.no /= xpdotp; //   rad/min
  // satrec.nddot= satrec.nddot * Math.pow(10.0, nexp);
  // satrec.bstar= satrec.bstar * Math.pow(10.0, ibexp);
  // ---- convert to sgp4 units ----

  satrec.a = Math.pow(satrec.no * tumin, -2.0 / 3.0);
  satrec.ndot /= xpdotp * 1440.0; // ? * minperday

  satrec.nddot /= xpdotp * 1440.0 * 1440; // ---- find standard orbital elements ----

  satrec.inclo *= deg2rad;
  satrec.nodeo *= deg2rad;
  satrec.argpo *= deg2rad;
  satrec.mo *= deg2rad;
  satrec.alta = satrec.a * (1.0 + satrec.ecco) - 1.0;
  satrec.altp = satrec.a * (1.0 - satrec.ecco) - 1.0; // ----------------------------------------------------------------
  // find sgp4epoch time of element set
  // remember that sgp4 uses units of days from 0 jan 1950 (sgp4epoch)
  // and minutes from the epoch (time)
  // ----------------------------------------------------------------
  // ---------------- temp fix for years from 1957-2056 -------------------
  // --------- correct fix will occur when year is 4-digit in tle ---------

  if (satrec.epochyr < 57) {
    year = satrec.epochyr + 2000;
  } else {
    year = satrec.epochyr + 1900;
  }

  var mdhmsResult = days2mdhms(year, satrec.epochdays);
  var mon = mdhmsResult.mon,
      day = mdhmsResult.day,
      hr = mdhmsResult.hr,
      minute = mdhmsResult.minute,
      sec = mdhmsResult.sec;
  satrec.jdsatepoch = jday(year, mon, day, hr, minute, sec); //  ---------------- initialize the orbit at sgp4epoch -------------------

  sgp4init(satrec, {
    opsmode: opsmode,
    satn: satrec.satnum,
    epoch: satrec.jdsatepoch - 2433281.5,
    xbstar: satrec.bstar,
    xecco: satrec.ecco,
    xargpo: satrec.argpo,
    xinclo: satrec.inclo,
    xmo: satrec.mo,
    xno: satrec.no,
    xnodeo: satrec.nodeo
  });
  return satrec;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function propagate() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Return a position and velocity vector for a given date and time.
  var satrec = args[0];
  var date = Array.prototype.slice.call(args, 1);
  var j = jday.apply(void 0, _toConsumableArray(date));
  var m = (j - satrec.jdsatepoch) * minutesPerDay;
  return sgp4(satrec, m);
}

function dopplerFactor(location, position, velocity) {
  var mfactor = 7.292115E-5;
  var c = 299792.458; // Speed of light in km/s

  var range = {
    x: position.x - location.x,
    y: position.y - location.y,
    z: position.z - location.z
  };
  range.w = Math.sqrt(Math.pow(range.x, 2) + Math.pow(range.y, 2) + Math.pow(range.z, 2));
  var rangeVel = {
    x: velocity.x + mfactor * location.y,
    y: velocity.y - mfactor * location.x,
    z: velocity.z
  };

  function sign(value) {
    return value >= 0 ? 1 : -1;
  }

  var rangeRate = (range.x * rangeVel.x + range.y * rangeVel.y + range.z * rangeVel.z) / range.w;
  return 1 + rangeRate / c * sign(rangeRate);
}

function radiansToDegrees(radians) {
  return radians * rad2deg;
}
function degreesToRadians(degrees) {
  return degrees * deg2rad;
}
function degreesLat(radians) {
  if (radians < -pi / 2 || radians > pi / 2) {
    throw new RangeError('Latitude radians must be in range [-pi/2; pi/2].');
  }

  return radiansToDegrees(radians);
}
function degreesLong(radians) {
  if (radians < -pi || radians > pi) {
    throw new RangeError('Longitude radians must be in range [-pi; pi].');
  }

  return radiansToDegrees(radians);
}
function radiansLat(degrees) {
  if (degrees < -90 || degrees > 90) {
    throw new RangeError('Latitude degrees must be in range [-90; 90].');
  }

  return degreesToRadians(degrees);
}
function radiansLong(degrees) {
  if (degrees < -180 || degrees > 180) {
    throw new RangeError('Longitude degrees must be in range [-180; 180].');
  }

  return degreesToRadians(degrees);
}
function geodeticToEcf(geodetic) {
  var longitude = geodetic.longitude,
      latitude = geodetic.latitude,
      height = geodetic.height;
  var a = 6378.137;
  var b = 6356.7523142;
  var f = (a - b) / a;
  var e2 = 2 * f - f * f;
  var normal = a / Math.sqrt(1 - e2 * (Math.sin(latitude) * Math.sin(latitude)));
  var x = (normal + height) * Math.cos(latitude) * Math.cos(longitude);
  var y = (normal + height) * Math.cos(latitude) * Math.sin(longitude);
  var z = (normal * (1 - e2) + height) * Math.sin(latitude);
  return {
    x: x,
    y: y,
    z: z
  };
}
function eciToGeodetic(eci, gmst) {
  // http://www.celestrak.com/columns/v02n03/
  var a = 6378.137;
  var b = 6356.7523142;
  var R = Math.sqrt(eci.x * eci.x + eci.y * eci.y);
  var f = (a - b) / a;
  var e2 = 2 * f - f * f;
  var longitude = Math.atan2(eci.y, eci.x) - gmst;

  while (longitude < -pi) {
    longitude += twoPi;
  }

  while (longitude > pi) {
    longitude -= twoPi;
  }

  var kmax = 20;
  var k = 0;
  var latitude = Math.atan2(eci.z, Math.sqrt(eci.x * eci.x + eci.y * eci.y));
  var C;

  while (k < kmax) {
    C = 1 / Math.sqrt(1 - e2 * (Math.sin(latitude) * Math.sin(latitude)));
    latitude = Math.atan2(eci.z + a * C * e2 * Math.sin(latitude), R);
    k += 1;
  }

  var height = R / Math.cos(latitude) - a * C;
  return {
    longitude: longitude,
    latitude: latitude,
    height: height
  };
}
function ecfToEci(ecf, gmst) {
  // ccar.colorado.edu/ASEN5070/handouts/coordsys.doc
  //
  // [X]     [C -S  0][X]
  // [Y]  =  [S  C  0][Y]
  // [Z]eci  [0  0  1][Z]ecf
  //
  var X = ecf.x * Math.cos(gmst) - ecf.y * Math.sin(gmst);
  var Y = ecf.x * Math.sin(gmst) + ecf.y * Math.cos(gmst);
  var Z = ecf.z;
  return {
    x: X,
    y: Y,
    z: Z
  };
}
function eciToEcf(eci, gmst) {
  // ccar.colorado.edu/ASEN5070/handouts/coordsys.doc
  //
  // [X]     [C -S  0][X]
  // [Y]  =  [S  C  0][Y]
  // [Z]eci  [0  0  1][Z]ecf
  //
  //
  // Inverse:
  // [X]     [C  S  0][X]
  // [Y]  =  [-S C  0][Y]
  // [Z]ecf  [0  0  1][Z]eci
  var x = eci.x * Math.cos(gmst) + eci.y * Math.sin(gmst);
  var y = eci.x * -Math.sin(gmst) + eci.y * Math.cos(gmst);
  var z = eci.z;
  return {
    x: x,
    y: y,
    z: z
  };
}

function topocentric(observerGeodetic, satelliteEcf) {
  // http://www.celestrak.com/columns/v02n02/
  // TS Kelso's method, except I'm using ECF frame
  // and he uses ECI.
  var longitude = observerGeodetic.longitude,
      latitude = observerGeodetic.latitude;
  var observerEcf = geodeticToEcf(observerGeodetic);
  var rx = satelliteEcf.x - observerEcf.x;
  var ry = satelliteEcf.y - observerEcf.y;
  var rz = satelliteEcf.z - observerEcf.z;
  var topS = Math.sin(latitude) * Math.cos(longitude) * rx + Math.sin(latitude) * Math.sin(longitude) * ry - Math.cos(latitude) * rz;
  var topE = -Math.sin(longitude) * rx + Math.cos(longitude) * ry;
  var topZ = Math.cos(latitude) * Math.cos(longitude) * rx + Math.cos(latitude) * Math.sin(longitude) * ry + Math.sin(latitude) * rz;
  return {
    topS: topS,
    topE: topE,
    topZ: topZ
  };
}
/**
 * @param {Object} tc
 * @param {Number} tc.topS Positive horizontal vector S due south.
 * @param {Number} tc.topE Positive horizontal vector E due east.
 * @param {Number} tc.topZ Vector Z normal to the surface of the earth (up).
 * @returns {Object}
 */


function topocentricToLookAngles(tc) {
  var topS = tc.topS,
      topE = tc.topE,
      topZ = tc.topZ;
  var rangeSat = Math.sqrt(topS * topS + topE * topE + topZ * topZ);
  var El = Math.asin(topZ / rangeSat);
  var Az = Math.atan2(-topE, topS) + pi;
  return {
    azimuth: Az,
    elevation: El,
    rangeSat: rangeSat // Range in km

  };
}

function ecfToLookAngles(observerGeodetic, satelliteEcf) {
  var topocentricCoords = topocentric(observerGeodetic, satelliteEcf);
  return topocentricToLookAngles(topocentricCoords);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./src/js/webworker/positionCruncher.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js_lib_external_numeric_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/external/numeric.js */ "./src/js/lib/external/numeric.js");
/* harmony import */ var _app_js_lib_external_numeric_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_js_lib_external_numeric_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var satellite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! satellite.js */ "./node_modules/satellite.js/dist/satellite.es.js");
/* harmony import */ var _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/external/meuusjs.js */ "./src/js/lib/external/meuusjs.js");
/* harmony import */ var _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/lib/suncalc.js */ "./src/js/lib/suncalc.js");
/* /////////////////////////////////////////////////////////////////////////////

(c) 2016-2020, Theodore Kruczek
(c) 2015-2016, James Yoder

http://keeptrack.space

Original source code released by James Yoder at https://github.com/jeyoder/ThingsInSpace/
under the MIT License. Please reference http://keeptrack.space/license/thingsinspace.txt

All additions and modifications of original code is Copyright © 2016-2020 by
Theodore Kruczek. All rights reserved. No part of this web site may be reproduced,
published, distributed, displayed, performed, copied or stored for public or private
use, without written permission of the author.

No part of this code may be modified or changed or exploited in any way used
for derivative works, or offered for sale, or used to construct any kind of database
or mirrored at any other location without the express written permission of the author.

///////////////////////////////////////////////////////////////////////////// */






/** CONSTANTS */

var PI = Math.PI;
var TAU = 2 * PI; // PI * 2 -- This makes understanding the formulas easier

var DEG2RAD = TAU / 360; // Used to convert degrees to radians

var RAD2DEG = 360 / TAU; // Used to convert radians to degrees

var RADIUS_OF_EARTH = 6371; // Radius of Earth in kilometers

var GROUND_BUFFER_DISTANCE = 1; // Distance objects are placed above earth to avoid z-buffer fighting

var RADIUS_OF_SUN = 695700; // Radius of the Sun in kilometers

var STAR_DISTANCE = 250000; // Artificial Star Distance - Lower numberrReduces webgl depth buffer
// const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

/** ARRAYS */

var satCache = []; // Cache of Satellite Data from TLE.json and Static Data from variable.js

var sensorMarkerArray = [0]; // Array of Markers used to show sensor fence and FOV

var satPos, satVel; // Array of current Satellite and Static Positions and Velocities

var satInView; // Array of booleans showing if current Satellite is in view of Sensor

var satInSun; // Array of booleans showing if current Satellite is in sunlight

var satelliteSelected = [-1]; // Array used to determine which satellites are selected

/** TIME VARIABLES */

var globalPropagationRate = 1000; // Limits how often the propagation loop runs

var globalPropagationRateMultiplier = 1; // Used to slow down propagation rate on slow computers

var propagationRunning = false; // Prevent Propagation From Running Twice

var divisor = 1; // When running at high speeds, allow faster propagation

var propOffset = 0; // offset varting us propagate in the future (or past)

var propRate = 1; // vars us run time faster (or slower) than normal

var propRealTime = Date.now(); // vars us run time faster (or slower) than normal

/** Settings */

var selectedSatFOV = 90; // FOV in Degrees

var isShowFOVBubble = false; // Flag for if FOV bubble is shown

var isShowSurvFence = false; // Flag for if fence markers are shown

var isResetFOVBubble = false;
var isShowSatOverfly = false;
var isResetSatOverfly = false;
var isMultiSensor = false;
var isIgnoreNonRadar = true;
var isSunlightView = false;
var isLowPerf = false;
var isResetMarker = false;
var isResetInView = false;
var fieldOfViewSetLength;
var len;
var postMessageArray = {};
/** OBSERVER VARIABLES */

var sensor = {};
var mSensor = {};
var defaultGd = {
  lat: null,
  longitude: 0,
  latitude: 0,
  height: 0
};
sensor.defaultGd = defaultGd;
sensor.observerGd = defaultGd; // Handles Incomming Messages to sat-cruncher from main thread

onmessage = function onmessage(m) {
  // Set propRealTime Once
  if (typeof propRealTime == 'undefined') {
    propRealTime = Date.now();
  }

  if (m.data.isSunlightView) {
    isSunlightView = m.data.isSunlightView; // if (isSunlightView == false) isResetSunlight = true;
  }

  if (m.data.satelliteSelected) {
    satelliteSelected = m.data.satelliteSelected;

    if (satelliteSelected[0] === -1) {
      isResetSatOverfly = true;
      if (isResetMarker == false) isResetMarker = true;
    }
  }

  if (m.data.isSlowCPUModeEnabled) {
    globalPropagationRateMultiplier *= 2;
  }

  if (m.data.isLowPerf) {
    isLowPerf = true;
  } // //////////////////////////////
  // SAT OVERFLY AND FOV BUBBLE
  // /////////////////////////////


  if (m.data.fieldOfViewSetLength) {
    fieldOfViewSetLength = m.data.fieldOfViewSetLength;
  }

  if (m.data.isShowSatOverfly === 'enable') {
    isShowSatOverfly = true;
    selectedSatFOV = m.data.selectedSatFOV;
  }

  if (m.data.isShowSatOverfly === 'reset') {
    isResetSatOverfly = true;
    isShowSatOverfly = false;
    if (isResetMarker == false) isResetMarker = true;
  }

  if (m.data.isShowFOVBubble === 'enable') {
    isShowFOVBubble = true;
  }

  if (m.data.isShowFOVBubble === 'reset') {
    isResetFOVBubble = true;
    isShowFOVBubble = false;
    if (isResetMarker == false) isResetMarker = true;
  }

  if (m.data.isShowSurvFence === 'enable') {
    isShowSurvFence = true;
    if (isResetMarker == false) isResetMarker = true;
  }

  if (m.data.isShowSurvFence === 'disable') {
    isShowSurvFence = false;
    if (isResetMarker == false) isResetMarker = true;
  } // ////////////////////////////////


  if (m.data.multiSensor) {
    isMultiSensor = true;
    mSensor = m.data.sensor;
    sensor = m.data.sensor;
    globalPropagationRate = 2000;
    if (isResetInView == false) isResetInView = true;
  } else if (m.data.sensor) {
    sensor = m.data.sensor;

    if (m.data.setlatlong) {
      if (m.data.resetObserverGd) {
        globalPropagationRate = 1000;
        sensor.observerGd = defaultGd;
        mSensor = {};
        if (isResetInView == false) isResetInView = true;
      } else {
        globalPropagationRate = 2000;
        sensor.observerGd = {
          longitude: m.data.sensor.lon * DEG2RAD,
          latitude: m.data.sensor.lat * DEG2RAD,
          height: m.data.sensor.alt * 1 // Convert from string

        };
        if (isResetInView == false) isResetInView = true;
      }
    }

    isMultiSensor = false;
  }

  var oldPropRate = propRate;

  switch (m.data.typ) {
    case 'offset':
      propOffset = Number(m.data.dat.split(' ')[0]);
      propRate = Number(m.data.dat.split(' ')[1]);

      if (!(oldPropRate == 0 && propRate == 0)) {
        // Update propRealTime only if updating propOffset
        propRealTime = Date.now();
      } // Changing this to 0.1 caused issues...


      divisor = 1;
      return;

    case 'satdata':
      var satData = JSON.parse(m.data.dat);
      len = satData.length;
      var i = 0;
      var extraData = [];
      var extra = {};
      var satrec;

      while (i < len) {
        extra = {};
        satrec = null;

        if (satData[i].static || satData[i].missile || satData[i].isRadarData) {
          satrec = satData[i];
          delete satrec['id'];
          extraData.push(extra);
          satCache.push(satrec);
          i++;
          continue;
        } else {
          satrec = satellite_js__WEBPACK_IMPORTED_MODULE_1__.twoline2satrec( // perform and store sat init calcs
          satData[i].TLE1, satData[i].TLE2);
          extra.lowAlt = satrec.isimp;
          extra.inclination = satrec.inclo; // rads

          extra.eccentricity = satrec.ecco;
          extra.raan = satrec.nodeo; // rads

          extra.argPe = satrec.argpo; // rads

          extra.meanMotion = satrec.no * 60 * 24 / TAU; // convert rads/minute to rev/day

          extra.semiMajorAxis = Math.pow(8681663.653 / extra.meanMotion, 2 / 3);
          extra.semiMinorAxis = extra.semiMajorAxis * Math.sqrt(1 - Math.pow(extra.eccentricity, 2));
          extra.apogee = extra.semiMajorAxis * (1 + extra.eccentricity) - RADIUS_OF_EARTH;
          satrec.apogee = extra.apogee;
          extra.perigee = extra.semiMajorAxis * (1 - extra.eccentricity) - RADIUS_OF_EARTH;
          extra.period = 1440.0 / extra.meanMotion;
          extraData.push(extra);
          delete satrec['id'];
          satCache.push(satrec);
          i++;
        }
      }

      satPos = new Float32Array(len * 3);
      satVel = new Float32Array(len * 3);
      satInView = new Int8Array(len);
      satInSun = new Int8Array(len);
      postMessage({
        extraData: JSON.stringify(extraData)
      });
      satData = null;
      break;

    case 'satEdit':
      satCache[m.data.id] = satellite_js__WEBPACK_IMPORTED_MODULE_1__.twoline2satrec( // replace old TLEs
      m.data.TLE1, m.data.TLE2);
      satrec = satCache[m.data.id];
      extraData = [];
      extra = {}; // keplerian elements

      extra.inclination = satrec.inclo; // rads

      extra.eccentricity = satrec.ecco;
      extra.raan = satrec.nodeo; // rads

      extra.argPe = satrec.argpo; // rads

      extra.meanMotion = satrec.no * 60 * 24 / (2 * PI); // convert rads/minute to rev/day
      // fun other data

      extra.semiMajorAxis = Math.pow(8681663.653 / extra.meanMotion, 2 / 3);
      extra.semiMinorAxis = extra.semiMajorAxis * Math.sqrt(1 - Math.pow(extra.eccentricity, 2));
      extra.apogee = extra.semiMajorAxis * (1 + extra.eccentricity) - RADIUS_OF_EARTH;
      extra.perigee = extra.semiMajorAxis * (1 - extra.eccentricity) - RADIUS_OF_EARTH;
      extra.period = 1440.0 / extra.meanMotion;
      extra.TLE1 = m.data.TLE1;
      extra.TLE2 = m.data.TLE2;
      extraData.push(extra);
      postMessage({
        extraUpdate: true,
        extraData: JSON.stringify(extraData),
        satId: m.data.id
      });
      break;

    case 'newMissile':
      satCache[m.data.id] = m.data;
      break;
  }

  if (!propagationRunning) {
    len = -1; // propagteCruncher needs to start at -1 not 0

    propagateCruncher();
  }
}; // Prevent Memory Leak by declaring variables outside of function


var geodeticCoords;
var siteXYZ;
var sitex, sitey, sitez;
var slat, slon, clat, clon;
var azRad, elRad;
var south, east, zenith;
var x, y, z;
var sunAz, sunEl, sunRange, sunElRel, sunR, sunECI, sunG;

var _lookAnglesToEcf = (azimuthDeg, elevationDeg, slantRange, obsLat, obsLong, obsAlt) => {
  // site ecef in meters
  geodeticCoords = {};
  geodeticCoords.latitude = obsLat;
  geodeticCoords.longitude = obsLong;
  geodeticCoords.height = obsAlt;
  siteXYZ = satellite_js__WEBPACK_IMPORTED_MODULE_1__.geodeticToEcf(geodeticCoords);
  sitex = siteXYZ.x;
  sitey = siteXYZ.y;
  sitez = siteXYZ.z; // some needed calculations

  slat = Math.sin(obsLat);
  slon = Math.sin(obsLong);
  clat = Math.cos(obsLat);
  clon = Math.cos(obsLong);
  azRad = DEG2RAD * azimuthDeg;
  elRad = DEG2RAD * elevationDeg; // az,el,range to sez convertion

  south = -slantRange * Math.cos(elRad) * Math.cos(azRad);
  east = slantRange * Math.cos(elRad) * Math.sin(azRad);
  zenith = slantRange * Math.sin(elRad);
  x = slat * clon * south + -slon * east + clat * clon * zenith + sitex;
  y = slat * slon * south + clon * east + clat * slon * zenith + sitey;
  z = -clat * south + slat * zenith + sitez;
  return {
    x: x,
    y: y,
    z: z
  };
}; // //////////////////////////////////////////////////////////////////////////
// Benchmarking
// var averageTimeForCrunchLoop = 0;
// var totalCrunchTime1 = 0;
// var averageTimeForPropagate = 0;
// var totalCrunchTime2 = 0;
// var numOfCrunches = 0;
// //////////////////////////////////////////////////////////////////////////


var propagateCruncher = () => {
  // OPTIMIZE: 25.9ms
  // var startTime1 = performance.now();
  // numOfCrunches++;
  propagationRunning = true;
  var now = propTime();
  var j = jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
  now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
  j += now.getUTCMilliseconds() * 1.15741e-8; // days per millisecond

  var gmst = satellite_js__WEBPACK_IMPORTED_MODULE_1__.gstime(j);
  var isSunExclusion = false;

  if (isSunlightView && !isMultiSensor) {
    var jdo = new _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.JulianDay(j); // now

    var coord = _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.EclCoord.fromWgs84(0, 0, 0);
    var coord2 = _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.EclCoord.fromWgs84(sensor.observerGd.latitude * RAD2DEG, sensor.observerGd.longitude * RAD2DEG, sensor.observerGd.height); // AZ / EL Calculation

    var tp = _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.Solar.topocentricPosition(jdo, coord, false);
    var tpRel = _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.Solar.topocentricPosition(jdo, coord2, false);
    sunAz = tp.hz.az * RAD2DEG + 180 % 360;
    sunEl = tp.hz.alt * RAD2DEG % 360;
    sunElRel = tpRel.hz.alt * RAD2DEG % 360; // Range Calculation

    var T = new _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.JulianDay(_app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.JulianDay.dateToJD(now)).jdJ2000Century();
    sunG = _app_js_lib_external_meuusjs_js__WEBPACK_IMPORTED_MODULE_2__.A.Solar.meanAnomaly(T) * 180 / PI;
    sunG = sunG % 360.0;
    sunR = 1.00014 - 0.01671 * Math.cos(sunG) - 0.00014 * Math.cos(2 * sunG);
    sunRange = sunR * 149597870700 / 1000; // au to km conversion
    // RAE to ECI

    sunECI = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(sunAz, sunEl, sunRange, 0, 0, 0), gmst);

    if (sensor.observerGd !== defaultGd && (sensor.type === 'Optical' || sensor.type === 'Observer') && sunElRel > -6) {
      isSunExclusion = true;
    } else {
      isSunExclusion = false;
    }
  }

  var j2 = j;
  j2 = jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
  now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds() + 1);
  j2 += now.getUTCMilliseconds() * 1.15741e-8; // days per millisecond

  var gmstNext = satellite_js__WEBPACK_IMPORTED_MODULE_1__.gstime(j2);
  len = satCache.length - 1;

  if (!isResetSatOverfly && !isShowSatOverfly && !isResetFOVBubble && !isShowFOVBubble || isLowPerf) {
    len -= fieldOfViewSetLength;
  }

  var i = -1; // var startTime2 = 0;
  // var stopTime2 = 0;

  var positionEcf, lookangles, azimuth, elevation, rangeSat;
  var x, y, z;
  var cosLat, sinLat, cosLon, sinLon;
  var curMissivarTime;
  var s, m, pv, tLen, t;
  var sat;
  var isSensorChecked = false;
  var az, el, rng, pos;
  var q, q2;
  var semiDiamEarth, semiDiamSun, theta;
  var starPosition;
  var snum;
  var lat, long;
  var satSelPosX, satSelPosY, satSelPosZ, satSelPosEcf, satSelPos, satSelGeodetic, satHeight, satSelPosEarth, deltaLat, deltaLatInt, deltaLon, deltaLonInt;

  while (i < len) {
    i++; // At the beginning so i starts at 0
    // totalCrunchTime2 += (stopTime2 - startTime2);

    sat = satCache[i];

    if (sat.satnum) {
      // Skip reentries
      if (sat.skip) continue;
      m = (j - sat.jdsatepoch) * 1440.0; // 1440 = minutes_per_day
      // startTime2 = performance.now();

      pv = satellite_js__WEBPACK_IMPORTED_MODULE_1__.sgp4(sat, m); // stopTime2 = performance.now();

      try {
        satPos[i * 3] = pv.position.x;
        satPos[i * 3 + 1] = pv.position.y;
        satPos[i * 3 + 2] = pv.position.z;
        satVel[i * 3] = pv.velocity.x;
        satVel[i * 3 + 1] = pv.velocity.y;
        satVel[i * 3 + 2] = pv.velocity.z; // Make sure that objects with an imprecise orbit or an old elset
        // are not failing to propagate

        if (sat.isimp || m / 1440 > 30) {
          var a = 6378.137;
          var b = 6356.7523142;
          var R = Math.sqrt(pv.position.x * pv.position.x + pv.position.y * pv.position.y);
          var f = (a - b) / a;
          var e2 = 2 * f - f * f;
          var lon = Math.atan2(pv.position.y, pv.position.x) - gmst;

          while (lon < -PI) {
            lon += TAU;
          }

          while (lon > PI) {
            lon -= TAU;
          }

          var kmax = 20;
          var k = 0;

          var _lat = Math.atan2(pv.position.z, Math.sqrt(pv.position.x * pv.position.x + pv.position.y * pv.position.y));

          var C = void 0;

          while (k < kmax) {
            C = 1 / Math.sqrt(1 - e2 * (Math.sin(_lat) * Math.sin(_lat)));
            _lat = Math.atan2(pv.position.z + a * C * e2 * Math.sin(_lat), R);
            k += 1;
          }

          var alt = R / Math.cos(_lat) - a * C;

          if (alt > sat.apogee + 1000) {
            throw new Error('Impossible orbit');
          }
        } // Skip Calculating Lookangles if No Sensor is Selected


        if (!isSensorChecked) {
          if (sensor.observerGd !== defaultGd && !isMultiSensor) {
            positionEcf = satellite_js__WEBPACK_IMPORTED_MODULE_1__.eciToEcf(pv.position, gmst); // pv.position is called positionEci originally

            lookangles = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToLookAngles(sensor.observerGd, positionEcf);
            azimuth = lookangles.azimuth;
            elevation = lookangles.elevation;
            rangeSat = lookangles.rangeSat;
          } else {
            isSensorChecked = true;
          }
        }
      } catch (e) {
        // This is probably a reentry and should be skipped from now on.
        satCache[i].skip = true;
        satPos[i * 3] = 0;
        satPos[i * 3 + 1] = 0;
        satPos[i * 3 + 2] = 0;
        satVel[i * 3] = 0;
        satVel[i * 3 + 1] = 0;
        satVel[i * 3 + 2] = 0;
        positionEcf = 0;
        lookangles = 0;
        azimuth = 0;
        elevation = 0;
        rangeSat = 0;
      }

      satInView[i] = false; // Default in case no sensor selected

      satInSun[i] = 2; // Default in case

      if (isSunlightView) {
        semiDiamEarth = Math.asin(RADIUS_OF_EARTH / Math.sqrt(Math.pow(-satPos[i * 3], 2) + Math.pow(-satPos[i * 3 + 1], 2) + Math.pow(-satPos[i * 3 + 2], 2))) * RAD2DEG;
        semiDiamSun = Math.asin(RADIUS_OF_SUN / Math.sqrt(Math.pow(-satPos[i * 3] + sunECI.x, 2) + Math.pow(-satPos[i * 3 + 1] + sunECI.y, 2) + Math.pow(-satPos[i * 3 + 2] + sunECI.z, 2))) * RAD2DEG; // Angle between earth and sun

        theta = Math.acos(self.numeric.dot([-satPos[i * 3], -satPos[i * 3 + 1], -satPos[i * 3 + 2]], [-satPos[i * 3] + sunECI.x, -satPos[i * 3 + 1] + sunECI.y, -satPos[i * 3 + 2] + sunECI.z]) / (Math.sqrt(Math.pow(-satPos[i * 3], 2) + Math.pow(-satPos[i * 3 + 1], 2) + Math.pow(-satPos[i * 3 + 2], 2)) * Math.sqrt(Math.pow(-satPos[i * 3] + sunECI.x, 2) + Math.pow(-satPos[i * 3 + 1] + sunECI.y, 2) + Math.pow(-satPos[i * 3 + 2] + sunECI.z, 2)))) * RAD2DEG;

        if (semiDiamEarth > semiDiamSun && theta < semiDiamEarth - semiDiamSun) {
          satInSun[i] = 0; // Umbral
        } // var isPenumbral = false;


        if (Math.abs(semiDiamEarth - semiDiamSun) < theta && theta < semiDiamEarth + semiDiamSun) {
          satInSun[i] = 1; // Penumbral
        }

        if (semiDiamSun > semiDiamEarth) {
          satInSun[i] = 1; // Penumbral
        }

        if (theta < semiDiamSun - semiDiamEarth) {
          satInSun[i] = 1; // Penumbral
        }
      }

      if (sensor.observerGd !== defaultGd && !isSunExclusion) {
        if (isMultiSensor) {
          for (s = 0; s < mSensor.length; s++) {
            if (!(sensor.type == 'Optical' && satInSun[i] == 0)) {
              if (satInView[i]) break;
              sensor = mSensor[s];
              sensor.observerGd = {
                longitude: sensor.lon * DEG2RAD,
                latitude: sensor.lat * DEG2RAD,
                height: sensor.alt * 1 // Convert from string

              };

              try {
                positionEcf = satellite_js__WEBPACK_IMPORTED_MODULE_1__.eciToEcf(pv.position, gmst); // pv.position is called positionEci originally

                lookangles = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToLookAngles(sensor.observerGd, positionEcf);
              } catch (e) {
                continue;
              }

              azimuth = lookangles.azimuth;
              elevation = lookangles.elevation;
              rangeSat = lookangles.rangeSat;
              azimuth *= RAD2DEG;
              elevation *= RAD2DEG;

              if (sensor.obsminaz > sensor.obsmaxaz) {
                if ((azimuth >= sensor.obsminaz || azimuth <= sensor.obsmaxaz) && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && rangeSat <= sensor.obsmaxrange && rangeSat >= sensor.obsminrange || (azimuth >= sensor.obsminaz2 || azimuth <= sensor.obsmaxaz2) && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && rangeSat <= sensor.obsmaxrange2 && rangeSat >= sensor.obsminrange2) {
                  satInView[i] = true;
                }
              } else {
                if (azimuth >= sensor.obsminaz && azimuth <= sensor.obsmaxaz && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && rangeSat <= sensor.obsmaxrange && rangeSat >= sensor.obsminrange || azimuth >= sensor.obsminaz2 && azimuth <= sensor.obsmaxaz2 && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && rangeSat <= sensor.obsmaxrange2 && rangeSat >= sensor.obsminrange2) {
                  satInView[i] = true;
                }
              }
            }
          }
        } else {
          if (!(sensor.type == 'Optical' && satInSun[i] == 0)) {
            azimuth *= RAD2DEG;
            elevation *= RAD2DEG;

            if (sensor.obsminaz > sensor.obsmaxaz) {
              if ((azimuth >= sensor.obsminaz || azimuth <= sensor.obsmaxaz) && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && rangeSat <= sensor.obsmaxrange && rangeSat >= sensor.obsminrange || (azimuth >= sensor.obsminaz2 || azimuth <= sensor.obsmaxaz2) && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && rangeSat <= sensor.obsmaxrange2 && rangeSat >= sensor.obsminrange2) {
                satInView[i] = true;
              }
            } else {
              if (azimuth >= sensor.obsminaz && azimuth <= sensor.obsmaxaz && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && rangeSat <= sensor.obsmaxrange && rangeSat >= sensor.obsminrange || azimuth >= sensor.obsminaz2 && azimuth <= sensor.obsmaxaz2 && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && rangeSat <= sensor.obsmaxrange2 && rangeSat >= sensor.obsminrange2) {
                satInView[i] = true;
              }
            }
          }
        }
      }
    } else if (satCache[i].isRadarData) {
      if (satCache[i].skip) continue;
      satCache[i].skip = true;
      satPos[i * 3] = 0;
      satPos[i * 3 + 1] = 0;
      satPos[i * 3 + 2] = 0;
      satVel[i * 3] = 0;
      satVel[i * 3 + 1] = 0;
      satVel[i * 3 + 2] = 0;
    } else if (satCache[i].static && !satCache[i].marker) {
      if (satCache[i].type == 'Star') {
        // INFO: 0 Latitude returns upside down results. Using 180 looks right, but more verification needed.
        // WARNING: 180 and 0 really matter...unclear why
        starPosition = _app_js_lib_suncalc_js__WEBPACK_IMPORTED_MODULE_3__.SunCalc.getStarPosition(now, 180, 0, satCache[i]);
        starPosition = _lookAnglesToEcf(starPosition.azimuth * RAD2DEG, starPosition.altitude * RAD2DEG, STAR_DISTANCE, 0, 0, 0); // Reduce Random Jitter by Requiring New Positions to be Similar to Old
        // THIS MIGHT BE A HORRIBLE

        if (satPos[i * 3] == 0 || satPos[i * 3] - starPosition.x < 0.1 && satPos[i * 3] - starPosition.x > -0.1) satPos[i * 3] = starPosition.x;
        if (satPos[i * 3 + 1] == 0 || satPos[i * 3 + 1] - starPosition.y < 0.1 && satPos[i * 3 + 1] - starPosition.y > -0.1) satPos[i * 3 + 1] = starPosition.y;
        if (satPos[i * 3 + 2] == 0 || satPos[i * 3 + 2] - starPosition.z < 0.1 && satPos[i * 3 + 2] - starPosition.z > -0.1) satPos[i * 3 + 2] = starPosition.z;
      } else {
        cosLat = Math.cos(satCache[i].lat * DEG2RAD);
        sinLat = Math.sin(satCache[i].lat * DEG2RAD);
        cosLon = Math.cos(satCache[i].lon * DEG2RAD + gmst);
        sinLon = Math.sin(satCache[i].lon * DEG2RAD + gmst);
        satPos[i * 3] = (RADIUS_OF_EARTH + GROUND_BUFFER_DISTANCE + satCache[i].alt) * cosLat * cosLon; // 6371 is radius of earth

        satPos[i * 3 + 1] = (RADIUS_OF_EARTH + GROUND_BUFFER_DISTANCE + satCache[i].alt) * cosLat * sinLon;
        satPos[i * 3 + 2] = (RADIUS_OF_EARTH + GROUND_BUFFER_DISTANCE + satCache[i].alt) * sinLat;
      }

      satVel[i * 3] = 0;
      satVel[i * 3 + 1] = 0;
      satVel[i * 3 + 2] = 0;
    } else if (satCache[i].missile) {
      if (!satCache[i].active) {
        continue;
      } // Skip inactive missiles


      tLen = satCache[i].altList.length;

      for (t = 0; t < tLen; t++) {
        if (satCache[i].startTime * 1 + t * 1000 >= now * 1) {
          curMissivarTime = t;
          break;
        }
      }

      satCache[i].lastTime = satCache[i].lastTime >= 0 ? satCache[i].lastTime : 0;
      cosLat = Math.cos(satCache[i].latList[satCache[i].lastTime + 1] * DEG2RAD);
      sinLat = Math.sin(satCache[i].latList[satCache[i].lastTime + 1] * DEG2RAD);
      cosLon = Math.cos(satCache[i].lonList[satCache[i].lastTime + 1] * DEG2RAD + gmstNext);
      sinLon = Math.sin(satCache[i].lonList[satCache[i].lastTime + 1] * DEG2RAD + gmstNext);

      if (satCache[i].lastTime == 0) {
        satVel[i * 3] = 0;
        satVel[i * 3 + 1] = 0;
        satVel[i * 3 + 2] = 0;
      } else if (satVel[i * 3] == 0 && satVel[i * 3 + 1] == 0 && satVel[i * 3 + 2] == 0) {
        satVel[i * 3] = (6371 + satCache[i].altList[satCache[i].lastTime + 1]) * cosLat * cosLon - satPos[i * 3];
        satVel[i * 3 + 1] = (6371 + satCache[i].altList[satCache[i].lastTime + 1]) * cosLat * sinLon - satPos[i * 3 + 1];
        satVel[i * 3 + 2] = (6371 + satCache[i].altList[satCache[i].lastTime + 1]) * sinLat - satPos[i * 3 + 2];
      } else {
        satVel[i * 3] += (6371 + satCache[i].altList[satCache[i].lastTime + 1]) * cosLat * cosLon - satPos[i * 3];
        satVel[i * 3 + 1] += (6371 + satCache[i].altList[satCache[i].lastTime + 1]) * cosLat * sinLon - satPos[i * 3 + 1];
        satVel[i * 3 + 2] += (6371 + satCache[i].altList[satCache[i].lastTime + 1]) * sinLat - satPos[i * 3 + 2];
        satVel[i * 3] *= 0.5;
        satVel[i * 3 + 1] *= 0.5;
        satVel[i * 3 + 2] *= 0.5;
      }

      cosLat = Math.cos(satCache[i].latList[curMissivarTime] * DEG2RAD);
      sinLat = Math.sin(satCache[i].latList[curMissivarTime] * DEG2RAD);
      cosLon = Math.cos(satCache[i].lonList[curMissivarTime] * DEG2RAD + gmst);
      sinLon = Math.sin(satCache[i].lonList[curMissivarTime] * DEG2RAD + gmst);
      satPos[i * 3] = (6371 + satCache[i].altList[curMissivarTime]) * cosLat * cosLon;
      satPos[i * 3 + 1] = (6371 + satCache[i].altList[curMissivarTime]) * cosLat * sinLon;
      satPos[i * 3 + 2] = (6371 + satCache[i].altList[curMissivarTime]) * sinLat;
      satCache[i].lastTime = curMissivarTime;
      x = satPos[i * 3];
      y = satPos[i * 3 + 1];
      z = satPos[i * 3 + 2];
      positionEcf = satellite_js__WEBPACK_IMPORTED_MODULE_1__.eciToEcf({
        x: x,
        y: y,
        z: z
      }, gmst);

      if (satellite_js__WEBPACK_IMPORTED_MODULE_1__.eciToGeodetic({
        x: x,
        y: y,
        z: z
      }, gmst).height <= 150 && satCache[i].missile === false) {
        console.error(satCache[i].SCC_NUM);
        satCache[i].skip = true;
      }

      lookangles = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToLookAngles(sensor.observerGd, positionEcf);
      azimuth = lookangles.azimuth * RAD2DEG;
      elevation = lookangles.elevation * RAD2DEG;
      rangeSat = lookangles.rangeSat;
      satInView[i] = false; // Default in case no sensor selected

      if (sensor.obsminaz > sensor.obsmaxaz) {
        if ((azimuth >= sensor.obsminaz || azimuth <= sensor.obsmaxaz) && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && rangeSat <= sensor.obsmaxrange && rangeSat >= sensor.obsminrange || (azimuth >= sensor.obsminaz2 || azimuth <= sensor.obsmaxaz2) && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && rangeSat <= sensor.obsmaxrange2 && rangeSat >= sensor.obsminrange2) {
          satInView[i] = true;
        } else {
          satInView[i] = false;
        }
      } else {
        if (azimuth >= sensor.obsminaz && azimuth <= sensor.obsmaxaz && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && rangeSat <= sensor.obsmaxrange && rangeSat >= sensor.obsminrange || azimuth >= sensor.obsminaz2 && azimuth <= sensor.obsmaxaz2 && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && rangeSat <= sensor.obsmaxrange2 && rangeSat >= sensor.obsminrange2) {
          satInView[i] = true;
        } else {
          satInView[i] = false;
        }
      }
    } else if (isShowFOVBubble || isResetFOVBubble) {
      // //////////////////////////////////
      // FOV Bubble Drawing Code - START
      // //////////////////////////////////
      if (!isMultiSensor && sensor.observerGd !== defaultGd) {
        mSensor[0] = sensor;
        mSensor.length = 1;
      }

      sensorMarkerArray = [];

      for (s = 0; s < mSensor.length + 1; s++) {
        sensorMarkerArray.push(i); // We intentionally go past the last sensor so we can record the last marker's id

        if (s == mSensor.length) break;
        sensor = mSensor[s];
        sensor.observerGd = {
          longitude: sensor.lon * DEG2RAD,
          latitude: sensor.lat * DEG2RAD,
          height: sensor.alt * 1 // Convert from string

        };

        if (satCache[i].marker) {
          satPos[i * 3] = 0;
          satPos[i * 3 + 1] = 0;
          satPos[i * 3 + 2] = 0;
          satVel[i * 3] = 0;
          satVel[i * 3 + 1] = 0;
          satVel[i * 3 + 2] = 0;

          if (isResetFOVBubble) {
            continue;
          }

          if (!isShowFOVBubble) continue;
          if (sensor.observerGd === defaultGd) continue; // Ignore Optical and Mechanical Sensors When showing Many

          if (isIgnoreNonRadar) {
            if (mSensor.length > 1 && sensor.type === 'Optical') continue;
            if (mSensor.length > 1 && sensor.type === 'Observer') continue;
            if (mSensor.length > 1 && sensor.type === 'Mechanical') continue;
          } // az, el, rng, pos;


          q = Math.abs(sensor.obsmaxaz - sensor.obsminaz) < 30 ? 0.25 : 2;
          q2 = sensor.obsmaxrange - sensor.obsminrange < 500 ? 1000 : 30; // Don't show anything but the floor if in surveillance only mode
          // Unless it is a volume search radar

          if (!isShowSurvFence || sensor.volume) {
            // Only on non-360 FOV
            if (sensor.obsminaz !== 0 && sensor.obsmaxaz !== 360) {
              // //////////////////////////////////
              // Min AZ FOV
              // //////////////////////////////////
              for (rng = Math.max(sensor.obsminrange, 100); rng < Math.min(sensor.obsmaxrange, 60000); rng += Math.min(sensor.obsmaxrange, 60000) / q2) {
                az = sensor.obsminaz;

                for (el = sensor.obsminel; el < sensor.obsmaxel; el += q) {
                  pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);

                  try {
                    satCache[i].active = true;
                    satPos[i * 3] = pos.x;
                    satPos[i * 3 + 1] = pos.y;
                    satPos[i * 3 + 2] = pos.z;
                    satVel[i * 3] = 0;
                    satVel[i * 3 + 1] = 0;
                    satVel[i * 3 + 2] = 0;
                    i++;
                  } catch (e) {
                    console.log(e);
                  }
                }
              } // //////////////////////////////////
              // Max AZ FOV
              // //////////////////////////////////


              for (rng = Math.max(sensor.obsminrange, 100); rng < Math.min(sensor.obsmaxrange, 60000); rng += Math.min(sensor.obsmaxrange, 60000) / q2) {
                az = sensor.obsmaxaz;

                for (el = sensor.obsminel; el < sensor.obsmaxel; el += q) {
                  pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);
                  satCache[i].active = true;
                  satPos[i * 3] = pos.x;
                  satPos[i * 3 + 1] = pos.y;
                  satPos[i * 3 + 2] = pos.z;
                  satVel[i * 3] = 0;
                  satVel[i * 3 + 1] = 0;
                  satVel[i * 3 + 2] = 0;
                  i++;
                }
              }

              if (typeof sensor.obsminaz2 != 'undefined') {
                ////////////////////////////////
                // Cobra DANE Types
                ////////////////////////////////
                // //////////////////////////////////
                // Min AZ 2 FOV
                // //////////////////////////////////
                for (rng = Math.max(sensor.obsminrange2, 100); rng < Math.min(sensor.obsmaxrange2, 60000); rng += Math.min(sensor.obsmaxrange2, 60000) / q2) {
                  az = sensor.obsminaz2;

                  for (el = sensor.obsminel2; el < sensor.obsmaxel2; el += q) {
                    pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);
                    satCache[i].active = true;
                    satPos[i * 3] = pos.x;
                    satPos[i * 3 + 1] = pos.y;
                    satPos[i * 3 + 2] = pos.z;
                    satVel[i * 3] = 0;
                    satVel[i * 3 + 1] = 0;
                    satVel[i * 3 + 2] = 0;
                    i++;
                  }
                } // //////////////////////////////////
                // Max AZ 2 FOV
                // //////////////////////////////////


                for (rng = Math.max(sensor.obsminrange2, 100); rng < Math.min(sensor.obsmaxrange2, 60000); rng += Math.min(sensor.obsmaxrange2, 60000) / q2) {
                  az = sensor.obsmaxaz2;

                  for (el = sensor.obsminel2; el < sensor.obsmaxel2; el += q) {
                    pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);
                    satCache[i].active = true;
                    satPos[i * 3] = pos.x;
                    satPos[i * 3 + 1] = pos.y;
                    satPos[i * 3 + 2] = pos.z;
                    satVel[i * 3] = 0;
                    satVel[i * 3 + 1] = 0;
                    satVel[i * 3 + 2] = 0;
                    i++;
                  }
                }
              } // Only on 360 FOV

            } else {
              for (rng = Math.max(sensor.obsminrange, 100); rng < Math.min(sensor.obsmaxrange, 60000); rng += Math.min(sensor.obsmaxrange, 60000) / q2) {
                el = sensor.obsmaxel;

                for (az = sensor.obsminaz; az < sensor.obsmaxaz; az += q) {
                  pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);
                  satCache[i].active = true;
                  satPos[i * 3] = pos.x;
                  satPos[i * 3 + 1] = pos.y;
                  satPos[i * 3 + 2] = pos.z;
                  satVel[i * 3] = 0;
                  satVel[i * 3 + 1] = 0;
                  satVel[i * 3 + 2] = 0;
                  i++;
                }
              }
            }
          } // //////////////////////////////////
          // Floor of FOV
          // //////////////////////////////////


          for (rng = Math.max(sensor.obsminrange, 100); rng < Math.min(sensor.obsmaxrange, 60000); rng += Math.min(sensor.obsmaxrange, 60000) / q2) {
            for (az = 0; az < Math.max(360, sensor.obsmaxaz); az += q) {
              if (sensor.obsminaz > sensor.obsmaxaz) {
                if (az >= sensor.obsminaz || az <= sensor.obsmaxaz) {// Intentional
                } else {
                  continue;
                }
              } else {
                if (az >= sensor.obsminaz && az <= sensor.obsmaxaz) {// Intentional
                } else {
                  continue;
                }
              }

              pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, sensor.obsminel, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);

              if (i === len) {
                console.error('No More Markers');
                break;
              }

              satCache[i].active = true;
              satPos[i * 3] = pos.x;
              satPos[i * 3 + 1] = pos.y;
              satPos[i * 3 + 2] = pos.z;
              satVel[i * 3] = 0;
              satVel[i * 3 + 1] = 0;
              satVel[i * 3 + 2] = 0;
              i++;
            }
          } // //////////////////////////////////
          // Top of FOV for Small FOV
          // //////////////////////////////////


          if (sensor.obsmaxel - sensor.obsminel < 20) {
            for (rng = Math.max(sensor.obsminrange, 100); rng < Math.min(sensor.obsmaxrange, 60000); rng += Math.min(sensor.obsmaxrange, 60000) / q2) {
              for (az = 0; az < Math.max(360, sensor.obsmaxaz); az += q) {
                if (sensor.obsminaz > sensor.obsmaxaz) {
                  if (az >= sensor.obsminaz || az <= sensor.obsmaxaz) {// Intentional
                  } else {
                    continue;
                  }
                } else {
                  if (az >= sensor.obsminaz && az <= sensor.obsmaxaz) {// Intentional
                  } else {
                    continue;
                  }
                }

                pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, sensor.obsmaxel, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);

                if (i === len) {
                  console.error('No More Markers');
                  break;
                }

                satCache[i].active = true;
                satPos[i * 3] = pos.x;
                satPos[i * 3 + 1] = pos.y;
                satPos[i * 3 + 2] = pos.z;
                satVel[i * 3] = 0;
                satVel[i * 3 + 1] = 0;
                satVel[i * 3 + 2] = 0;
                i++;
              }
            }
          }

          if (typeof sensor.obsminaz2 != 'undefined') {
            ////////////////////////////////
            // Cobra DANE Types
            ////////////////////////////////
            // //////////////////////////////////
            // Floor of FOV
            // //////////////////////////////////
            q = 2;

            for (rng = Math.max(sensor.obsminrange2, 100); rng < Math.min(sensor.obsmaxrange2, 60000); rng += Math.min(sensor.obsmaxrange2, 60000) / q2) {
              for (az = 0; az < 360; az += 1 * q) {
                if (sensor.obsminaz2 > sensor.obsmaxaz2) {
                  if (az >= sensor.obsminaz2 || az <= sensor.obsmaxaz2) {// Intentional
                  } else {
                    continue;
                  }
                } else {
                  if (az >= sensor.obsminaz2 && az <= sensor.obsmaxaz2) {// Intentional
                  } else {
                    continue;
                  }
                }

                pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, sensor.obsminel2, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);

                if (i === len) {
                  console.error('No More Markers');
                  break;
                }

                satCache[i].active = true;
                satPos[i * 3] = pos.x;
                satPos[i * 3 + 1] = pos.y;
                satPos[i * 3 + 2] = pos.z;
                satVel[i * 3] = 0;
                satVel[i * 3 + 1] = 0;
                satVel[i * 3 + 2] = 0;
                i++;
              }
            }
          } // Don't show anything but the floor if in surveillance only mode
          // Unless it is a volume search radar


          if (!isShowSurvFence || sensor.volume) {
            // //////////////////////////////////
            // Outside Edge of FOV
            // //////////////////////////////////
            rng = Math.min(sensor.obsmaxrange, 60000);

            for (az = 0; az < Math.max(360, sensor.obsmaxaz); az += q) {
              if (sensor.obsminaz > sensor.obsmaxaz) {
                if (az >= sensor.obsminaz || az <= sensor.obsmaxaz) {// Intentional
                } else {
                  continue;
                }
              } else {
                if (az >= sensor.obsminaz && az <= sensor.obsmaxaz) {// Intentional
                } else {
                  continue;
                }
              }

              for (el = sensor.obsminel; el < sensor.obsmaxel; el += q) {
                pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);

                if (i === len) {
                  console.error('No More Markers');
                  break;
                }

                satCache[i].active = true;
                satPos[i * 3] = pos.x;
                satPos[i * 3 + 1] = pos.y;
                satPos[i * 3 + 2] = pos.z;
                satVel[i * 3] = 0;
                satVel[i * 3 + 1] = 0;
                satVel[i * 3 + 2] = 0;
                i++;
              }
            }

            if (typeof sensor.obsminaz2 != 'undefined') {
              ////////////////////////////////
              // Cobra DANE Types
              ////////////////////////////////
              // //////////////////////////////////
              // Outside of FOV
              // //////////////////////////////////
              rng = Math.min(sensor.obsmaxrange2, 60000);

              for (az = 0; az < Math.max(360, sensor.obsmaxaz2); az += q) {
                if (sensor.obsminaz2 > sensor.obsmaxaz2) {
                  if (az >= sensor.obsminaz2 || az <= sensor.obsmaxaz2) {// Intentional
                  } else {
                    continue;
                  }
                } else {
                  if (az >= sensor.obsminaz2 && az <= sensor.obsmaxaz2) {// Intentional
                  } else {
                    continue;
                  }
                }

                for (el = sensor.obsminel2; el < sensor.obsmaxel2; el += q) {
                  pos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(_lookAnglesToEcf(az, el, rng, sensor.observerGd.latitude, sensor.observerGd.longitude, sensor.observerGd.height), gmst);

                  if (i === len) {
                    console.error('No More Markers');
                    break;
                  }

                  satCache[i].active = true;
                  satPos[i * 3] = pos.x;
                  satPos[i * 3 + 1] = pos.y;
                  satPos[i * 3 + 2] = pos.z;
                  satVel[i * 3] = 0;
                  satVel[i * 3 + 1] = 0;
                  satVel[i * 3 + 2] = 0;
                  i++;
                }
              }
            }
          }
        }
      } // //////////////////////////////////
      // FOV Bubble Drawing Code - STOP
      // //////////////////////////////////

    } else if (isShowSatOverfly || isResetSatOverfly) {
      // //////////////////////////////////
      // Satellite Overfly Drawing Code - START
      // //////////////////////////////////
      if (satCache[i].marker) {
        if (isResetSatOverfly && satCache[i].active === true) {
          satCache[i].active = false;
          satPos[i * 3] = 0;
          satPos[i * 3 + 1] = 0;
          satPos[i * 3 + 2] = 0;
          satVel[i * 3] = 0;
          satVel[i * 3 + 1] = 0;
          satVel[i * 3 + 2] = 0;
          continue;
        }

        for (snum = 0; snum < satelliteSelected.length + 1; snum++) {
          if (snum === satelliteSelected.length) {
            sensorMarkerArray.push(i);
            break;
          }

          if (satelliteSelected[snum] !== -1) {
            if (!isShowSatOverfly) continue; // Find the ECI position of the Selected Satellite

            satSelPosX = satPos[satelliteSelected[snum] * 3];
            satSelPosY = satPos[satelliteSelected[snum] * 3 + 1];
            satSelPosZ = satPos[satelliteSelected[snum] * 3 + 2];
            satSelPosEcf = {
              x: satSelPosX,
              y: satSelPosY,
              z: satSelPosZ
            };
            satSelPos = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToEci(satSelPosEcf, gmst); // Find the Lat/Long of the Selected Satellite

            satSelGeodetic = satellite_js__WEBPACK_IMPORTED_MODULE_1__.eciToGeodetic(satSelPos, gmst); // pv.position is called positionEci originally

            satHeight = satSelGeodetic.height;
            satSelPosEarth = {
              longitude: satSelGeodetic.longitude,
              latitude: satSelGeodetic.latitude,
              height: 1
            };
            deltaLatInt = 1;
            if (satHeight < 2500 && selectedSatFOV <= 60) deltaLatInt = 0.5;
            if (satHeight > 7000 || selectedSatFOV >= 90) deltaLatInt = 2;
            if (satelliteSelected.length > 1) deltaLatInt = 2;

            for (deltaLat = -60; deltaLat < 60; deltaLat += deltaLatInt) {
              lat = Math.max(Math.min(Math.round(satSelGeodetic.latitude * RAD2DEG) + deltaLat, 90), -90) * DEG2RAD;
              if (lat > 90) continue;
              deltaLonInt = 1; // Math.max((Math.abs(lat)*RAD2DEG/15),1);

              if (satHeight < 2500 && selectedSatFOV <= 60) deltaLonInt = 0.5;
              if (satHeight > 7000 || selectedSatFOV >= 90) deltaLonInt = 2;
              if (satelliteSelected.length > 1) deltaLonInt = 2;

              for (deltaLon = 0; deltaLon < 181; deltaLon += deltaLonInt) {
                // //////////
                // Add Long
                // //////////
                long = satSelGeodetic.longitude + deltaLon * DEG2RAD;
                satSelPosEarth = {
                  longitude: long,
                  latitude: lat,
                  height: 15
                }; // Find the Az/El of the position on the earth

                lookangles = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToLookAngles(satSelPosEarth, satSelPosEcf); // azimuth = lookangles.azimuth;

                elevation = lookangles.elevation; // rangeSat = lookangles.rangeSat;

                if (elevation * RAD2DEG > 0 && 90 - elevation * RAD2DEG < selectedSatFOV) {
                  satSelPosEarth = satellite_js__WEBPACK_IMPORTED_MODULE_1__.geodeticToEcf(satSelPosEarth);

                  if (i === len) {
                    console.error('Ran out of Markers');
                    continue; // Only get so many markers.
                  }

                  satCache[i].active = true;
                  satPos[i * 3] = satSelPosEarth.x;
                  satPos[i * 3 + 1] = satSelPosEarth.y;
                  satPos[i * 3 + 2] = satSelPosEarth.z;
                  satVel[i * 3] = 0;
                  satVel[i * 3 + 1] = 0;
                  satVel[i * 3 + 2] = 0;
                  i++;
                } // //////////
                // Minus Long
                // //////////


                if (deltaLon === 0 || deltaLon === 180) continue; // Don't Draw Two Dots On the Center Line

                long = satSelGeodetic.longitude - deltaLon * DEG2RAD;
                satSelPosEarth = {
                  longitude: long,
                  latitude: lat,
                  height: 15
                }; // Find the Az/El of the position on the earth

                lookangles = satellite_js__WEBPACK_IMPORTED_MODULE_1__.ecfToLookAngles(satSelPosEarth, satSelPosEcf); // azimuth = lookangles.azimuth;

                elevation = lookangles.elevation; // rangeSat = lookangles.rangeSat;

                if (elevation * RAD2DEG > 0 && 90 - elevation * RAD2DEG < selectedSatFOV) {
                  satSelPosEarth = satellite_js__WEBPACK_IMPORTED_MODULE_1__.geodeticToEcf(satSelPosEarth);

                  if (i === len) {
                    console.error('Ran out of Markers');
                    continue; // Only get so many markers.
                  }

                  satCache[i].active = true;
                  satPos[i * 3] = satSelPosEarth.x;
                  satPos[i * 3 + 1] = satSelPosEarth.y;
                  satPos[i * 3 + 2] = satSelPosEarth.z;
                  satVel[i * 3] = 0;
                  satVel[i * 3 + 1] = 0;
                  satVel[i * 3 + 2] = 0;
                  i++;
                }

                if (lat === 90 || lat === -90) break; // One Dot for the Poles
              }
            }
          }
        }
      } // //////////////////////////////////
      // Satellite Overfly Drawing Code - STOP
      // //////////////////////////////////

    }

    isResetSatOverfly = false;

    if (satCache[i].marker) {
      for (; i < len; i++) {
        if (!satCache[i].active) {
          len -= fieldOfViewSetLength;
          break;
        }

        satPos[i * 3] = 0;
        satPos[i * 3 + 1] = 0;
        satPos[i * 3 + 2] = 0;
        satVel[i * 3] = 0;
        satVel[i * 3 + 1] = 0;
        satVel[i * 3 + 2] = 0;
        satCache[i].active = false;
      }
    }
  }

  if (isResetFOVBubble) {
    isResetFOVBubble = false;
    len -= fieldOfViewSetLength;
  }

  postMessageArray = {
    satPos: satPos,
    satVel: satVel
  }; // Add In View Data if Sensor Selected

  if (sensor.observerGd !== defaultGd) {
    postMessageArray.satInView = satInView;
  } else {
    postMessageArray.satInView = [];
  } // Add Sun View Data if Enabled


  if (isSunlightView) {
    postMessageArray.satInSun = satInSun;
  } else {
    postMessageArray.satInSun = [];
  } // If there is at least one sensor showing markers


  if (sensorMarkerArray.length >= 1) {
    postMessageArray.sensorMarkerArray = sensorMarkerArray;
  } else {
    postMessageArray.sensorMarkerArray = [];
  }

  postMessage(postMessageArray); // The longer the delay the more jitter at higher speeds of propagation

  setTimeout(() => {
    propagateCruncher();
  }, 1 * globalPropagationRate * globalPropagationRateMultiplier / divisor); // //////////////////////////////////////////////////////////////////////////
  // Benchmarking
  //
  // var stopTime1 = performance.now();
  // if (numOfCrunches > 5) {
  // totalCrunchTime1 += (stopTime1 - startTime1);
  // averageTimeForCrunchLoop = totalCrunchTime1 / (numOfCrunches - 5);
  // averageTimeForPropagate = totalCrunchTime2 / (numOfCrunches - 5);
  // }
  // //////////////////////////////////////////////////////////////////////////
};
/* Returns Ordinal Day (Commonly Called J Day) */


var jday = (year, mon, day, hr, minute, sec) => {
  'use strict';

  return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
  ;
};
/* Returns Current Propagation Time */


var propTime = () => {
  'use strict';

  var now = new Date();
  var realElapsedMsec = Number(now) - Number(propRealTime);
  var scaledMsec = realElapsedMsec * propRate;
  now.setTime(Number(propRealTime) + propOffset + scaledMsec);
  return now;
};
})();

/******/ })()
;
//# sourceMappingURL=positionCruncher.js.map