/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/constants.js":
/*!*********************************!*\
  !*** ./src/js/lib/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZOOM_EXP": () => (/* binding */ ZOOM_EXP),
/* harmony export */   "TAU": () => (/* binding */ TAU),
/* harmony export */   "DEG2RAD": () => (/* binding */ DEG2RAD),
/* harmony export */   "RAD2DEG": () => (/* binding */ RAD2DEG),
/* harmony export */   "RADIUS_OF_EARTH": () => (/* binding */ RADIUS_OF_EARTH),
/* harmony export */   "MILLISECONDS_PER_DAY": () => (/* binding */ MILLISECONDS_PER_DAY),
/* harmony export */   "RADIUS_OF_SUN": () => (/* binding */ RADIUS_OF_SUN),
/* harmony export */   "MINUTES_PER_DAY": () => (/* binding */ MINUTES_PER_DAY),
/* harmony export */   "PLANETARIUM_DIST": () => (/* binding */ PLANETARIUM_DIST),
/* harmony export */   "SUN_SCALAR_DISTANCE": () => (/* binding */ SUN_SCALAR_DISTANCE),
/* harmony export */   "RADIUS_OF_DRAW_SUN": () => (/* binding */ RADIUS_OF_DRAW_SUN),
/* harmony export */   "RADIUS_OF_DRAW_MOON": () => (/* binding */ RADIUS_OF_DRAW_MOON),
/* harmony export */   "MOON_SCALAR_DISTANCE": () => (/* binding */ MOON_SCALAR_DISTANCE),
/* harmony export */   "cMPerSec": () => (/* binding */ cMPerSec),
/* harmony export */   "cKmPerMs": () => (/* binding */ cKmPerMs),
/* harmony export */   "cKmPerSec": () => (/* binding */ cKmPerSec)
/* harmony export */ });
var ZOOM_EXP = 3;
var TAU = 2 * Math.PI;
var DEG2RAD = TAU / 360;
var RAD2DEG = 360 / TAU;
var RADIUS_OF_EARTH = 6371.0;
var MILLISECONDS_PER_DAY = 1.15741e-8;
var RADIUS_OF_SUN = 695700;
var MINUTES_PER_DAY = 1440;
var PLANETARIUM_DIST = 3;
var RADIUS_OF_DRAW_SUN = 9000;
var SUN_SCALAR_DISTANCE = 250000;
var RADIUS_OF_DRAW_MOON = 4000;
var MOON_SCALAR_DISTANCE = 200000;
var cMPerSec = 299792458;
var cKmPerSec = 299792458 / 1000;
var cKmPerMs = 299792458 / 1000 / 1000;


/***/ }),

/***/ "./src/js/lib/external/Chart.js":
/*!**************************************!*\
  !*** ./src/js/lib/external/Chart.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * Chart.js v3.0.0-alpha
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */(function(global,factory){ true?module.exports=factory():0;})(this,function(){'use strict';function _typeof(obj){'@babel/helpers - typeof';if(typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function');}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _possibleConstructorReturn(self,call){if(call&&(typeof call==='object'||typeof call==='function')){return call;}return _assertThisInitialized(self);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _get(target,property,receiver){if(typeof Reflect!=='undefined'&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==='[object Arguments]')return Array.from(iter);}function _nonIterableSpread(){throw new TypeError('Invalid attempt to spread non-iterable instance');}function noop(){}var uid=function(){var id=0;return function(){return id++;};}();function isNullOrUndef(value){return value===null||typeof value==='undefined';}function isArray(value){if(Array.isArray&&Array.isArray(value)){return true;}var type=Object.prototype.toString.call(value);if(type.substr(0,7)==='[object'&&type.substr(-6)==='Array]'){return true;}return false;}function isObject(value){return value!==null&&Object.prototype.toString.call(value)==='[object Object]';}var isNumberFinite=function isNumberFinite(value){return(typeof value==='number'||value instanceof Number)&&isFinite(+value);};function valueOrDefault(value,defaultValue){return typeof value==='undefined'?defaultValue:value;}function valueAtIndexOrDefault(value,index,defaultValue){return valueOrDefault(isArray(value)?value[index]:value,defaultValue);}function callback(fn,args,thisArg){if(fn&&typeof fn.call==='function'){return fn.apply(thisArg,args);}}function each(loopable,fn,thisArg,reverse){var i,len,keys;if(isArray(loopable)){len=loopable.length;if(reverse){for(i=len-1;i>=0;i--){fn.call(thisArg,loopable[i],i);}}else{for(i=0;i<len;i++){fn.call(thisArg,loopable[i],i);}}}else if(isObject(loopable)){keys=Object.keys(loopable);len=keys.length;for(i=0;i<len;i++){fn.call(thisArg,loopable[keys[i]],keys[i]);}}}function arrayEquals(a0,a1){var i,ilen,v0,v1;if(!a0||!a1||a0.length!==a1.length){return false;}for(i=0,ilen=a0.length;i<ilen;++i){v0=a0[i];v1=a1[i];if(v0 instanceof Array&&v1 instanceof Array){if(!arrayEquals(v0,v1)){return false;}}else if(v0!==v1){return false;}}return true;}function _elementsEqual(a0,a1){var i,ilen,v0,v1;if(!a0||!a1||a0.length!==a1.length){return false;}for(i=0,ilen=a0.length;i<ilen;++i){v0=a0[i];v1=a1[i];if(v0.datasetIndex!==v1.datasetIndex||v0.index!==v1.index){return false;}}return true;}function clone(source){if(isArray(source)){return source.map(clone);}if(isObject(source)){var target={};var keys=Object.keys(source);var klen=keys.length;var k=0;for(;k<klen;++k){target[keys[k]]=clone(source[keys[k]]);}return target;}return source;}function _merger(key,target,source,options){var tval=target[key];var sval=source[key];if(isObject(tval)&&isObject(sval)){merge(tval,sval,options);}else{target[key]=clone(sval);}}function merge(target,source,options){var sources=isArray(source)?source:[source];var ilen=sources.length;if(!isObject(target)){return target;}options=options||{};var merger=options.merger||_merger;for(var i=0;i<ilen;++i){source=sources[i];if(!isObject(source)){continue;}var keys=Object.keys(source);for(var k=0,klen=keys.length;k<klen;++k){merger(keys[k],target,source,options);}}return target;}function mergeIf(target,source){return merge(target,source,{merger:_mergerIf});}function _mergerIf(key,target,source){var tval=target[key];var sval=source[key];if(isObject(tval)&&isObject(sval)){mergeIf(tval,sval);}else if(!Object.prototype.hasOwnProperty.call(target,key)){target[key]=clone(sval);}}function inherits(extensions){var me=this;var ChartElement=extensions&&Object.prototype.hasOwnProperty.call(extensions,'constructor')?extensions.constructor:function(){return me.apply(this,arguments);};var Surrogate=function Surrogate(){this.constructor=ChartElement;};Surrogate.prototype=me.prototype;ChartElement.prototype=new Surrogate();ChartElement.extend=inherits;if(extensions){_extends(ChartElement.prototype,extensions);}ChartElement.__super__=me.prototype;return ChartElement;}function _deprecated(scope,value,previous,current){if(value!==undefined){console.warn(scope+': "'+previous+'" is deprecated. Please use "'+current+'" instead');}}var coreHelpers=/*#__PURE__*/Object.freeze({__proto__:null,noop:noop,uid:uid,isNullOrUndef:isNullOrUndef,isArray:isArray,isObject:isObject,isFinite:isNumberFinite,valueOrDefault:valueOrDefault,valueAtIndexOrDefault:valueAtIndexOrDefault,callback:callback,each:each,arrayEquals:arrayEquals,_elementsEqual:_elementsEqual,clone:clone,_merger:_merger,merge:merge,mergeIf:mergeIf,_mergerIf:_mergerIf,inherits:inherits,_deprecated:_deprecated});var PI=Math.PI;var RAD_PER_DEG=PI/180;var DOUBLE_PI=PI*2;var HALF_PI=PI/2;var QUARTER_PI=PI/4;var TWO_THIRDS_PI=PI*2/3;function _measureText(ctx,data,gc,longest,string){var textWidth=data[string];if(!textWidth){textWidth=data[string]=ctx.measureText(string).width;gc.push(string);}if(textWidth>longest){longest=textWidth;}return longest;}function _longestText(ctx,font,arrayOfThings,cache){cache=cache||{};var data=cache.data=cache.data||{};var gc=cache.garbageCollect=cache.garbageCollect||[];if(cache.font!==font){data=cache.data={};gc=cache.garbageCollect=[];cache.font=font;}ctx.save();ctx.font=font;var longest=0;var ilen=arrayOfThings.length;var i,j,jlen,thing,nestedThing;for(i=0;i<ilen;i++){thing=arrayOfThings[i];if(thing!==undefined&&thing!==null&&isArray(thing)!==true){longest=_measureText(ctx,data,gc,longest,thing);}else if(isArray(thing)){for(j=0,jlen=thing.length;j<jlen;j++){nestedThing=thing[j];if(nestedThing!==undefined&&nestedThing!==null&&!isArray(nestedThing)){longest=_measureText(ctx,data,gc,longest,nestedThing);}}}}ctx.restore();var gcLen=gc.length/2;if(gcLen>arrayOfThings.length){for(i=0;i<gcLen;i++){delete data[gc[i]];}gc.splice(0,gcLen);}return longest;}function _alignPixel(chart,pixel,width){var devicePixelRatio=chart.currentDevicePixelRatio;var halfWidth=width/2;return Math.round((pixel-halfWidth)*devicePixelRatio)/devicePixelRatio+halfWidth;}function clear(chart){chart.ctx.clearRect(0,0,chart.width,chart.height);}function drawPoint(ctx,options,x,y){var type,xOffset,yOffset,size,cornerRadius;var style=options.pointStyle;var rotation=options.rotation;var radius=options.radius;var rad=(rotation||0)*RAD_PER_DEG;if(style&&_typeof(style)==='object'){type=style.toString();if(type==='[object HTMLImageElement]'||type==='[object HTMLCanvasElement]'){ctx.save();ctx.translate(x,y);ctx.rotate(rad);ctx.drawImage(style,-style.width/2,-style.height/2,style.width,style.height);ctx.restore();return;}}if(isNaN(radius)||radius<=0){return;}ctx.beginPath();switch(style){default:ctx.arc(x,y,radius,0,DOUBLE_PI);ctx.closePath();break;case'triangle':ctx.moveTo(x+Math.sin(rad)*radius,y-Math.cos(rad)*radius);rad+=TWO_THIRDS_PI;ctx.lineTo(x+Math.sin(rad)*radius,y-Math.cos(rad)*radius);rad+=TWO_THIRDS_PI;ctx.lineTo(x+Math.sin(rad)*radius,y-Math.cos(rad)*radius);ctx.closePath();break;case'rectRounded':cornerRadius=radius*0.516;size=radius-cornerRadius;xOffset=Math.cos(rad+QUARTER_PI)*size;yOffset=Math.sin(rad+QUARTER_PI)*size;ctx.arc(x-xOffset,y-yOffset,cornerRadius,rad-PI,rad-HALF_PI);ctx.arc(x+yOffset,y-xOffset,cornerRadius,rad-HALF_PI,rad);ctx.arc(x+xOffset,y+yOffset,cornerRadius,rad,rad+HALF_PI);ctx.arc(x-yOffset,y+xOffset,cornerRadius,rad+HALF_PI,rad+PI);ctx.closePath();break;case'rect':if(!rotation){size=Math.SQRT1_2*radius;ctx.rect(x-size,y-size,2*size,2*size);break;}rad+=QUARTER_PI;case'rectRot':xOffset=Math.cos(rad)*radius;yOffset=Math.sin(rad)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+yOffset,y-xOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.lineTo(x-yOffset,y+xOffset);ctx.closePath();break;case'crossRot':rad+=QUARTER_PI;case'cross':xOffset=Math.cos(rad)*radius;yOffset=Math.sin(rad)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x+yOffset,y-xOffset);ctx.lineTo(x-yOffset,y+xOffset);break;case'star':xOffset=Math.cos(rad)*radius;yOffset=Math.sin(rad)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x+yOffset,y-xOffset);ctx.lineTo(x-yOffset,y+xOffset);rad+=QUARTER_PI;xOffset=Math.cos(rad)*radius;yOffset=Math.sin(rad)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x+yOffset,y-xOffset);ctx.lineTo(x-yOffset,y+xOffset);break;case'line':xOffset=Math.cos(rad)*radius;yOffset=Math.sin(rad)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);break;case'dash':ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(rad)*radius,y+Math.sin(rad)*radius);break;}ctx.fill();if(options.borderWidth>0){ctx.stroke();}}function _isPointInArea(point,area){var epsilon=0.5;return point.x>area.left-epsilon&&point.x<area.right+epsilon&&point.y>area.top-epsilon&&point.y<area.bottom+epsilon;}function clipArea(ctx,area){ctx.save();ctx.beginPath();ctx.rect(area.left,area.top,area.right-area.left,area.bottom-area.top);ctx.clip();}function unclipArea(ctx){ctx.restore();}function _steppedLineTo(ctx,previous,target,flip,mode){if(!previous){return ctx.lineTo(target.x,target.y);}if(mode==='middle'){var midpoint=(previous.x+target.x)/2.0;ctx.lineTo(midpoint,previous.y);ctx.lineTo(midpoint,target.y);}else if(mode==='after'!==!!flip){ctx.lineTo(previous.x,target.y);}else{ctx.lineTo(target.x,previous.y);}ctx.lineTo(target.x,target.y);}function _bezierCurveTo(ctx,previous,target,flip){if(!previous){return ctx.lineTo(target.x,target.y);}ctx.bezierCurveTo(flip?previous.controlPointPreviousX:previous.controlPointNextX,flip?previous.controlPointPreviousY:previous.controlPointNextY,flip?target.controlPointNextX:target.controlPointPreviousX,flip?target.controlPointNextY:target.controlPointPreviousY,target.x,target.y);}var canvas=/*#__PURE__*/Object.freeze({__proto__:null,_measureText:_measureText,_longestText:_longestText,_alignPixel:_alignPixel,clear:clear,drawPoint:drawPoint,_isPointInArea:_isPointInArea,clipArea:clipArea,unclipArea:unclipArea,_steppedLineTo:_steppedLineTo,_bezierCurveTo:_bezierCurveTo});var PI$1=Math.PI;var TAU=2*PI$1;var PITAU=TAU+PI$1;function _factorize(value){var result=[];var sqrt=Math.sqrt(value);var i;for(i=1;i<sqrt;i++){if(value%i===0){result.push(i);result.push(value/i);}}if(sqrt===(sqrt|0)){result.push(sqrt);}result.sort(function(a,b){return a-b;}).pop();return result;}var log10=Math.log10||function(x){var exponent=Math.log(x)*Math.LOG10E;var powerOf10=Math.round(exponent);var isPowerOf10=x===Math.pow(10,powerOf10);return isPowerOf10?powerOf10:exponent;};function isNumber(n){return!isNaN(parseFloat(n))&&isFinite(n);}function almostEquals(x,y,epsilon){return Math.abs(x-y)<epsilon;}function almostWhole(x,epsilon){var rounded=Math.round(x);return rounded-epsilon<=x&&rounded+epsilon>=x;}function _setMinAndMaxByKey(array,target,property){var i,ilen,value;for(i=0,ilen=array.length;i<ilen;i++){value=array[i][property];if(!isNaN(value)){target.min=Math.min(target.min,value);target.max=Math.max(target.max,value);}}}var sign=Math.sign?function(x){return Math.sign(x);}:function(x){x=+x;if(x===0||isNaN(x)){return x;}return x>0?1:-1;};function toRadians(degrees){return degrees*(PI$1/180);}function toDegrees(radians){return radians*(180/PI$1);}function _decimalPlaces(x){if(!isNumberFinite(x)){return;}var e=1;var p=0;while(Math.round(x*e)/e!==x){e*=10;p++;}return p;}function getAngleFromPoint(centrePoint,anglePoint){var distanceFromXCenter=anglePoint.x-centrePoint.x;var distanceFromYCenter=anglePoint.y-centrePoint.y;var radialDistanceFromCenter=Math.sqrt(distanceFromXCenter*distanceFromXCenter+distanceFromYCenter*distanceFromYCenter);var angle=Math.atan2(distanceFromYCenter,distanceFromXCenter);if(angle<-0.5*PI$1){angle+=TAU;}return{angle:angle,distance:radialDistanceFromCenter};}function distanceBetweenPoints(pt1,pt2){return Math.sqrt(Math.pow(pt2.x-pt1.x,2)+Math.pow(pt2.y-pt1.y,2));}function _angleDiff(a,b){return(a-b+PITAU)%TAU-PI$1;}function _normalizeAngle(a){return(a%TAU+TAU)%TAU;}function _angleBetween(angle,start,end){var a=_normalizeAngle(angle);var s=_normalizeAngle(start);var e=_normalizeAngle(end);var angleToStart=_normalizeAngle(s-a);var angleToEnd=_normalizeAngle(e-a);var startToAngle=_normalizeAngle(a-s);var endToAngle=_normalizeAngle(a-e);return a===s||a===e||angleToStart>angleToEnd&&startToAngle<endToAngle;}function _limitValue(value,min,max){return Math.max(min,Math.min(max,value));}var math=/*#__PURE__*/Object.freeze({__proto__:null,_factorize:_factorize,log10:log10,isNumber:isNumber,almostEquals:almostEquals,almostWhole:almostWhole,_setMinAndMaxByKey:_setMinAndMaxByKey,sign:sign,toRadians:toRadians,toDegrees:toDegrees,_decimalPlaces:_decimalPlaces,getAngleFromPoint:getAngleFromPoint,distanceBetweenPoints:distanceBetweenPoints,_angleDiff:_angleDiff,_normalizeAngle:_normalizeAngle,_angleBetween:_angleBetween,_limitValue:_limitValue});var EPSILON=Number.EPSILON||1e-14;function splineCurve(firstPoint,middlePoint,afterPoint,t){var previous=firstPoint.skip?middlePoint:firstPoint;var current=middlePoint;var next=afterPoint.skip?middlePoint:afterPoint;var d01=Math.sqrt(Math.pow(current.x-previous.x,2)+Math.pow(current.y-previous.y,2));var d12=Math.sqrt(Math.pow(next.x-current.x,2)+Math.pow(next.y-current.y,2));var s01=d01/(d01+d12);var s12=d12/(d01+d12);s01=isNaN(s01)?0:s01;s12=isNaN(s12)?0:s12;var fa=t*s01;var fb=t*s12;return{previous:{x:current.x-fa*(next.x-previous.x),y:current.y-fa*(next.y-previous.y)},next:{x:current.x+fb*(next.x-previous.x),y:current.y+fb*(next.y-previous.y)}};}function splineCurveMonotone(points){var pointsWithTangents=(points||[]).map(function(point){return{model:point,deltaK:0,mK:0};});var pointsLen=pointsWithTangents.length;var i,pointBefore,pointCurrent,pointAfter;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointAfter&&!pointAfter.model.skip){var slopeDeltaX=pointAfter.model.x-pointCurrent.model.x;pointCurrent.deltaK=slopeDeltaX!==0?(pointAfter.model.y-pointCurrent.model.y)/slopeDeltaX:0;}if(!pointBefore||pointBefore.model.skip){pointCurrent.mK=pointCurrent.deltaK;}else if(!pointAfter||pointAfter.model.skip){pointCurrent.mK=pointBefore.deltaK;}else if(sign(pointBefore.deltaK)!==sign(pointCurrent.deltaK)){pointCurrent.mK=0;}else{pointCurrent.mK=(pointBefore.deltaK+pointCurrent.deltaK)/2;}}var alphaK,betaK,tauK,squaredMagnitude;for(i=0;i<pointsLen-1;++i){pointCurrent=pointsWithTangents[i];pointAfter=pointsWithTangents[i+1];if(pointCurrent.model.skip||pointAfter.model.skip){continue;}if(almostEquals(pointCurrent.deltaK,0,EPSILON)){pointCurrent.mK=pointAfter.mK=0;continue;}alphaK=pointCurrent.mK/pointCurrent.deltaK;betaK=pointAfter.mK/pointCurrent.deltaK;squaredMagnitude=Math.pow(alphaK,2)+Math.pow(betaK,2);if(squaredMagnitude<=9){continue;}tauK=3/Math.sqrt(squaredMagnitude);pointCurrent.mK=alphaK*tauK*pointCurrent.deltaK;pointAfter.mK=betaK*tauK*pointCurrent.deltaK;}var deltaX;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointBefore&&!pointBefore.model.skip){deltaX=(pointCurrent.model.x-pointBefore.model.x)/3;pointCurrent.model.controlPointPreviousX=pointCurrent.model.x-deltaX;pointCurrent.model.controlPointPreviousY=pointCurrent.model.y-deltaX*pointCurrent.mK;}if(pointAfter&&!pointAfter.model.skip){deltaX=(pointAfter.model.x-pointCurrent.model.x)/3;pointCurrent.model.controlPointNextX=pointCurrent.model.x+deltaX;pointCurrent.model.controlPointNextY=pointCurrent.model.y+deltaX*pointCurrent.mK;}}}function capControlPoint(pt,min,max){return Math.max(Math.min(pt,max),min);}function capBezierPoints(points,area){var i,ilen,point;for(i=0,ilen=points.length;i<ilen;++i){point=points[i];if(!_isPointInArea(point,area)){continue;}if(i>0&&_isPointInArea(points[i-1],area)){point.controlPointPreviousX=capControlPoint(point.controlPointPreviousX,area.left,area.right);point.controlPointPreviousY=capControlPoint(point.controlPointPreviousY,area.top,area.bottom);}if(i<points.length-1&&_isPointInArea(points[i+1],area)){point.controlPointNextX=capControlPoint(point.controlPointNextX,area.left,area.right);point.controlPointNextY=capControlPoint(point.controlPointNextY,area.top,area.bottom);}}}function _updateBezierControlPoints(points,options,area,loop){var i,ilen,point,controlPoints;if(options.spanGaps){points=points.filter(function(pt){return!pt.skip;});}if(options.cubicInterpolationMode==='monotone'){splineCurveMonotone(points);}else{var prev=loop?points[points.length-1]:points[0];for(i=0,ilen=points.length;i<ilen;++i){point=points[i];controlPoints=splineCurve(prev,point,points[Math.min(i+1,ilen-(loop?0:1))%ilen],options.tension);point.controlPointPreviousX=controlPoints.previous.x;point.controlPointPreviousY=controlPoints.previous.y;point.controlPointNextX=controlPoints.next.x;point.controlPointNextY=controlPoints.next.y;prev=point;}}if(options.capBezierPoints){capBezierPoints(points,area);}}var curve=/*#__PURE__*/Object.freeze({__proto__:null,splineCurve:splineCurve,splineCurveMonotone:splineCurveMonotone,_updateBezierControlPoints:_updateBezierControlPoints});function isConstrainedValue(value){return value!==undefined&&value!==null&&value!=='none';}function _getParentNode(domNode){var parent=domNode.parentNode;if(parent&&parent.toString()==='[object ShadowRoot]'){parent=parent.host;}return parent;}function parseMaxStyle(styleValue,node,parentProperty){var valueInPixels;if(typeof styleValue==='string'){valueInPixels=parseInt(styleValue,10);if(styleValue.indexOf('%')!==-1){valueInPixels=valueInPixels/100*node.parentNode[parentProperty];}}else{valueInPixels=styleValue;}return valueInPixels;}function getConstraintDimension(domNode,maxStyle,percentageProperty){var view=document.defaultView;var parentNode=_getParentNode(domNode);var constrainedNode=view.getComputedStyle(domNode)[maxStyle];var constrainedContainer=view.getComputedStyle(parentNode)[maxStyle];var hasCNode=isConstrainedValue(constrainedNode);var hasCContainer=isConstrainedValue(constrainedContainer);var infinity=Number.POSITIVE_INFINITY;if(hasCNode||hasCContainer){return Math.min(hasCNode?parseMaxStyle(constrainedNode,domNode,percentageProperty):infinity,hasCContainer?parseMaxStyle(constrainedContainer,parentNode,percentageProperty):infinity);}}function getStyle(el,property){return el.currentStyle?el.currentStyle[property]:document.defaultView.getComputedStyle(el,null).getPropertyValue(property);}function getConstraintWidth(domNode){return getConstraintDimension(domNode,'max-width','clientWidth');}function getConstraintHeight(domNode){return getConstraintDimension(domNode,'max-height','clientHeight');}function _calculatePadding(container,padding,parentDimension){padding=getStyle(container,padding);return padding.indexOf('%')>-1?parentDimension*parseInt(padding,10)/100:parseInt(padding,10);}function getRelativePosition(evt,chart){var mouseX,mouseY;var e=evt.originalEvent||evt;var canvasElement=evt.target||evt.srcElement;var boundingRect=canvasElement.getBoundingClientRect();var touches=e.touches;if(touches&&touches.length>0){mouseX=touches[0].clientX;mouseY=touches[0].clientY;}else{mouseX=e.clientX;mouseY=e.clientY;}var paddingLeft=parseFloat(getStyle(canvasElement,'padding-left'));var paddingTop=parseFloat(getStyle(canvasElement,'padding-top'));var paddingRight=parseFloat(getStyle(canvasElement,'padding-right'));var paddingBottom=parseFloat(getStyle(canvasElement,'padding-bottom'));var width=boundingRect.right-boundingRect.left-paddingLeft-paddingRight;var height=boundingRect.bottom-boundingRect.top-paddingTop-paddingBottom;mouseX=Math.round((mouseX-boundingRect.left-paddingLeft)/width*canvasElement.width/chart.currentDevicePixelRatio);mouseY=Math.round((mouseY-boundingRect.top-paddingTop)/height*canvasElement.height/chart.currentDevicePixelRatio);return{x:mouseX,y:mouseY};}function getMaximumWidth(domNode){var container=_getParentNode(domNode);if(!container){if(typeof domNode.clientWidth==='number'){return domNode.clientWidth;}return domNode.width;}var clientWidth=container.clientWidth;var paddingLeft=_calculatePadding(container,'padding-left',clientWidth);var paddingRight=_calculatePadding(container,'padding-right',clientWidth);var w=clientWidth-paddingLeft-paddingRight;var cw=getConstraintWidth(domNode);return isNaN(cw)?w:Math.min(w,cw);}function getMaximumHeight(domNode){var container=_getParentNode(domNode);if(!container){if(typeof domNode.clientHeight==='number'){return domNode.clientHeight;}return domNode.height;}var clientHeight=container.clientHeight;var paddingTop=_calculatePadding(container,'padding-top',clientHeight);var paddingBottom=_calculatePadding(container,'padding-bottom',clientHeight);var h=clientHeight-paddingTop-paddingBottom;var ch=getConstraintHeight(domNode);return isNaN(ch)?h:Math.min(h,ch);}function retinaScale(chart,forceRatio){var pixelRatio=chart.currentDevicePixelRatio=forceRatio||typeof window!=='undefined'&&window.devicePixelRatio||1;var canvas=chart.canvas,width=chart.width,height=chart.height;canvas.height=height*pixelRatio;canvas.width=width*pixelRatio;chart.ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);if(canvas.style&&!canvas.style.height&&!canvas.style.width){canvas.style.height=height+'px';canvas.style.width=width+'px';}}var dom=/*#__PURE__*/Object.freeze({__proto__:null,_getParentNode:_getParentNode,getStyle:getStyle,getRelativePosition:getRelativePosition,getMaximumWidth:getMaximumWidth,getMaximumHeight:getMaximumHeight,retinaScale:retinaScale});var effects={linear:function linear(t){return t;},easeInQuad:function easeInQuad(t){return t*t;},easeOutQuad:function easeOutQuad(t){return-t*(t-2);},easeInOutQuad:function easeInOutQuad(t){if((t/=0.5)<1){return 0.5*t*t;}return-0.5*(--t*(t-2)-1);},easeInCubic:function easeInCubic(t){return t*t*t;},easeOutCubic:function easeOutCubic(t){return(t-=1)*t*t+1;},easeInOutCubic:function easeInOutCubic(t){if((t/=0.5)<1){return 0.5*t*t*t;}return 0.5*((t-=2)*t*t+2);},easeInQuart:function easeInQuart(t){return t*t*t*t;},easeOutQuart:function easeOutQuart(t){return-((t-=1)*t*t*t-1);},easeInOutQuart:function easeInOutQuart(t){if((t/=0.5)<1){return 0.5*t*t*t*t;}return-0.5*((t-=2)*t*t*t-2);},easeInQuint:function easeInQuint(t){return t*t*t*t*t;},easeOutQuint:function easeOutQuint(t){return(t-=1)*t*t*t*t+1;},easeInOutQuint:function easeInOutQuint(t){if((t/=0.5)<1){return 0.5*t*t*t*t*t;}return 0.5*((t-=2)*t*t*t*t+2);},easeInSine:function easeInSine(t){return-Math.cos(t*(Math.PI/2))+1;},easeOutSine:function easeOutSine(t){return Math.sin(t*(Math.PI/2));},easeInOutSine:function easeInOutSine(t){return-0.5*(Math.cos(Math.PI*t)-1);},easeInExpo:function easeInExpo(t){return t===0?0:Math.pow(2,10*(t-1));},easeOutExpo:function easeOutExpo(t){return t===1?1:-Math.pow(2,-10*t)+1;},easeInOutExpo:function easeInOutExpo(t){if(t===0){return 0;}if(t===1){return 1;}if((t/=0.5)<1){return 0.5*Math.pow(2,10*(t-1));}return 0.5*(-Math.pow(2,-10*--t)+2);},easeInCirc:function easeInCirc(t){if(t>=1){return t;}return-(Math.sqrt(1-t*t)-1);},easeOutCirc:function easeOutCirc(t){return Math.sqrt(1-(t-=1)*t);},easeInOutCirc:function easeInOutCirc(t){if((t/=0.5)<1){return-0.5*(Math.sqrt(1-t*t)-1);}return 0.5*(Math.sqrt(1-(t-=2)*t)+1);},easeInElastic:function easeInElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if(t===1){return 1;}if(!p){p=0.3;}{s=p/(2*Math.PI)*Math.asin(1/a);}return-(a*Math.pow(2,10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p));},easeOutElastic:function easeOutElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if(t===1){return 1;}if(!p){p=0.3;}{s=p/(2*Math.PI)*Math.asin(1/a);}return a*Math.pow(2,-10*t)*Math.sin((t-s)*(2*Math.PI)/p)+1;},easeInOutElastic:function easeInOutElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if((t/=0.5)===2){return 1;}if(!p){p=0.45;}{s=p/(2*Math.PI)*Math.asin(1/a);}if(t<1){return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p));}return a*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p)*0.5+1;},easeInBack:function easeInBack(t){var s=1.70158;return t*t*((s+1)*t-s);},easeOutBack:function easeOutBack(t){var s=1.70158;return(t-=1)*t*((s+1)*t+s)+1;},easeInOutBack:function easeInOutBack(t){var s=1.70158;if((t/=0.5)<1){return 0.5*(t*t*(((s*=1.525)+1)*t-s));}return 0.5*((t-=2)*t*(((s*=1.525)+1)*t+s)+2);},easeInBounce:function easeInBounce(t){return 1-effects.easeOutBounce(1-t);},easeOutBounce:function easeOutBounce(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){return 7.5625*(t-=1.5/2.75)*t+0.75;}if(t<2.5/2.75){return 7.5625*(t-=2.25/2.75)*t+0.9375;}return 7.5625*(t-=2.625/2.75)*t+0.984375;},easeInOutBounce:function easeInOutBounce(t){if(t<0.5){return effects.easeInBounce(t*2)*0.5;}return effects.easeOutBounce(t*2-1)*0.5+0.5;}};var Defaults=function(){function Defaults(){_classCallCheck(this,Defaults);this.color='rgba(0,0,0,0.1)';this.elements={};this.events=['mousemove','mouseout','click','touchstart','touchmove'];this.fontColor='#666';this.fontFamily="'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";this.fontSize=12;this.fontStyle='normal';this.lineHeight=1.2;this.hover={onHover:null,mode:'nearest',intersect:true};this.maintainAspectRatio=true;this.onClick=null;this.responsive=true;this.showLines=true;this.plugins=undefined;this.scale=undefined;this.legend=undefined;this.title=undefined;this.tooltips=undefined;this.doughnut=undefined;}_createClass(Defaults,[{key:'set',value:function set(scope,values){return merge(this[scope]||(this[scope]={}),values);}}]);return Defaults;}();var defaults=new Defaults();function toFontString(font){if(!font||isNullOrUndef(font.size)||isNullOrUndef(font.family)){return null;}return(font.style?font.style+' ':'')+(font.weight?font.weight+' ':'')+font.size+'px '+font.family;}function toLineHeight(value,size){var matches=(''+value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!matches||matches[1]==='normal'){return size*1.2;}value=+matches[2];switch(matches[3]){case'px':return value;case'%':value/=100;break;}return size*value;}function toPadding(value){var t,r,b,l;if(isObject(value)){t=+value.top||0;r=+value.right||0;b=+value.bottom||0;l=+value.left||0;}else{t=r=b=l=+value||0;}return{top:t,right:r,bottom:b,left:l,height:t+b,width:l+r};}function _parseFont(options){var size=valueOrDefault(options.fontSize,defaults.fontSize);if(typeof size==='string'){size=parseInt(size,10);}var font={family:valueOrDefault(options.fontFamily,defaults.fontFamily),lineHeight:toLineHeight(valueOrDefault(options.lineHeight,defaults.lineHeight),size),size:size,style:valueOrDefault(options.fontStyle,defaults.fontStyle),weight:null,string:''};font.string=toFontString(font);return font;}function resolve(inputs,context,index,info){var cacheable=true;var i,ilen,value;for(i=0,ilen=inputs.length;i<ilen;++i){value=inputs[i];if(value===undefined){continue;}if(context!==undefined&&typeof value==='function'){value=value(context);cacheable=false;}if(index!==undefined&&isArray(value)){value=value[index];cacheable=false;}if(value!==undefined){if(info&&!cacheable){info.cacheable=false;}return value;}}}var options=/*#__PURE__*/Object.freeze({__proto__:null,toLineHeight:toLineHeight,toPadding:toPadding,_parseFont:_parseFont,resolve:resolve});var getRightToLeftAdapter=function getRightToLeftAdapter(rectX,width){return{x:function x(_x){return rectX+rectX+width-_x;},setWidth:function setWidth(w){width=w;},textAlign:function textAlign(align){if(align==='center'){return align;}return align==='right'?'left':'right';},xPlus:function xPlus(x,value){return x-value;},leftForLtr:function leftForLtr(x,itemWidth){return x-itemWidth;}};};var getLeftToRightAdapter=function getLeftToRightAdapter(){return{x:function x(_x2){return _x2;},setWidth:function setWidth(w){},textAlign:function textAlign(align){return align;},xPlus:function xPlus(x,value){return x+value;},leftForLtr:function leftForLtr(x,_itemWidth){return x;}};};function getRtlAdapter(rtl,rectX,width){return rtl?getRightToLeftAdapter(rectX,width):getLeftToRightAdapter();}function overrideTextDirection(ctx,direction){var style,original;if(direction==='ltr'||direction==='rtl'){style=ctx.canvas.style;original=[style.getPropertyValue('direction'),style.getPropertyPriority('direction')];style.setProperty('direction',direction,'important');ctx.prevTextDirection=original;}}function restoreTextDirection(ctx,original){if(original!==undefined){delete ctx.prevTextDirection;ctx.canvas.style.setProperty('direction',original[0],original[1]);}}var rtl=/*#__PURE__*/Object.freeze({__proto__:null,getRtlAdapter:getRtlAdapter,overrideTextDirection:overrideTextDirection,restoreTextDirection:restoreTextDirection});/*!
     * @kurkle/color v0.1.6
     * https://github.com/kurkle/color#readme
     * (c) 2020 Jukka Kurkela
     * Released under the MIT License
     */var map={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15};var hex='0123456789ABCDEF';var h1=function h1(b){return hex[b&0xf];};var h2=function h2(b){return hex[(b&0xf0)>>4]+hex[b&0xf];};var eq=function eq(b){return(b&0xf0)>>4===(b&0xf);};function isShort(v){return eq(v.r)&&eq(v.g)&&eq(v.b)&&eq(v.a);}function hexParse(str){var len=str.length;var ret;if(str[0]==='#'){if(len===4||len===5){ret={r:255&map[str[1]]*17,g:255&map[str[2]]*17,b:255&map[str[3]]*17,a:len===5?map[str[4]]*17:255};}else if(len===7||len===9){ret={r:map[str[1]]<<4|map[str[2]],g:map[str[3]]<<4|map[str[4]],b:map[str[5]]<<4|map[str[6]],a:len===9?map[str[7]]<<4|map[str[8]]:255};}}return ret;}function _hexString(v){var f=isShort(v)?h1:h2;return v?'#'+f(v.r)+f(v.g)+f(v.b)+(v.a<255?f(v.a):''):v;}function round(v){return v+0.5|0;}var lim=function lim(v,l,h){return Math.max(Math.min(v,h),l);};function p2b(v){return lim(round(v*2.55),0,255);}function n2b(v){return lim(round(v*255),0,255);}function b2n(v){return lim(round(v/2.55)/100,0,1);}function n2p(v){return lim(round(v*100),0,100);}var RGB_RE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rgbParse(str){var m=RGB_RE.exec(str);var a=255;var r,g,b;if(!m){return;}if(m[7]!==r){var v=+m[7];a=255&(m[8]?p2b(v):v*255);}r=+m[1];g=+m[3];b=+m[5];r=255&(m[2]?p2b(r):r);g=255&(m[4]?p2b(g):g);b=255&(m[6]?p2b(b):b);return{r:r,g:g,b:b,a:a};}function _rgbString(v){return v&&(v.a<255?'rgba('.concat(v.r,', ').concat(v.g,', ').concat(v.b,', ').concat(b2n(v.a),')'):'rgb('.concat(v.r,', ').concat(v.g,', ').concat(v.b,')'));}var HUE_RE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hsl2rgbn(h,s,l){var a=s*Math.min(l,1-l);var f=function f(n){var k=arguments.length>1&&arguments[1]!==undefined?arguments[1]:(n+h/30)%12;return l-a*Math.max(Math.min(k-3,9-k,1),-1);};return[f(0),f(8),f(4)];}function hsv2rgbn(h,s,v){var f=function f(n){var k=arguments.length>1&&arguments[1]!==undefined?arguments[1]:(n+h/60)%6;return v-v*s*Math.max(Math.min(k,4-k,1),0);};return[f(5),f(3),f(1)];}function hwb2rgbn(h,w,b){var rgb=hsl2rgbn(h,1,0.5);var i;if(w+b>1){i=1/(w+b);w*=i;b*=i;}for(i=0;i<3;i++){rgb[i]*=1-w-b;rgb[i]+=w;}return rgb;}function rgb2hsl(v){var range=255;var r=v.r/range;var g=v.g/range;var b=v.b/range;var max=Math.max(r,g,b);var min=Math.min(r,g,b);var l=(max+min)/2;var h,s,d;if(max!==min){d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);h=max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4;h=h*60+0.5;}return[h|0,s||0,l];}function calln(f,a,b,c){return(Array.isArray(a)?f(a[0],a[1],a[2]):f(a,b,c)).map(n2b);}function hsl2rgb(h,s,l){return calln(hsl2rgbn,h,s,l);}function hwb2rgb(h,w,b){return calln(hwb2rgbn,h,w,b);}function hsv2rgb(h,s,v){return calln(hsv2rgbn,h,s,v);}function hue(h){return(h%360+360)%360;}function hueParse(str){var m=HUE_RE.exec(str);var a=255;var v;if(!m){return;}if(m[5]!==v){a=m[6]?p2b(+m[5]):n2b(+m[5]);}var h=hue(+m[2]);var p1=+m[3]/100;var p2=+m[4]/100;if(m[1]==='hwb'){v=hwb2rgb(h,p1,p2);}else if(m[1]==='hsv'){v=hsv2rgb(h,p1,p2);}else{v=hsl2rgb(h,p1,p2);}return{r:v[0],g:v[1],b:v[2],a:a};}function _rotate(v,deg){var h=rgb2hsl(v);h[0]=hue(h[0]+deg);h=hsl2rgb(h);v.r=h[0];v.g=h[1];v.b=h[2];}function _hslString(v){if(!v){return;}var a=rgb2hsl(v);var h=a[0];var s=n2p(a[1]);var l=n2p(a[2]);return v.a<255?'hsla('.concat(h,', ').concat(s,'%, ').concat(l,'%, ').concat(b2n(v.a),')'):'hsl('.concat(h,', ').concat(s,'%, ').concat(l,'%)');}var map$1={x:'dark',Z:'light',Y:'re',X:'blu',W:'gr',V:'medium',U:'slate',A:'ee',T:'ol',S:'or',B:'ra',C:'lateg',D:'ights',R:'in',Q:'turquois',E:'hi',P:'ro',O:'al',N:'le',M:'de',L:'yello',F:'en',K:'ch',G:'arks',H:'ea',I:'ightg',J:'wh'};function unpack(obj){var unpacked={};var keys=Object.keys(obj);var tkeys=Object.keys(map$1);var i,j,k,ok,nk;for(i=0;i<keys.length;i++){ok=nk=keys[i];for(j=0;j<tkeys.length;j++){k=tkeys[j];nk=nk.replace(k,map$1[k]);}k=parseInt(obj[ok],16);unpacked[nk]=[k>>16&0xff,k>>8&0xff,k&0xff];}return unpacked;}var names=unpack({OiceXe:'f0f8ff',antiquewEte:'faebd7',aqua:'ffff',aquamarRe:'7fffd4',azuY:'f0ffff',beige:'f5f5dc',bisque:'ffe4c4',black:'0',blanKedOmond:'ffebcd',Xe:'ff',XeviTet:'8a2be2',bPwn:'a52a2a',burlywood:'deb887',caMtXe:'5f9ea0',KartYuse:'7fff00',KocTate:'d2691e',cSO:'ff7f50',cSnflowerXe:'6495ed',cSnsilk:'fff8dc',crimson:'dc143c',cyan:'ffff',xXe:'8b',xcyan:'8b8b',xgTMnPd:'b8860b',xWay:'a9a9a9',xgYF:'6400',xgYy:'a9a9a9',xkhaki:'bdb76b',xmagFta:'8b008b',xTivegYF:'556b2f',xSange:'ff8c00',xScEd:'9932cc',xYd:'8b0000',xsOmon:'e9967a',xsHgYF:'8fbc8f',xUXe:'483d8b',xUWay:'2f4f4f',xUgYy:'2f4f4f',xQe:'ced1',xviTet:'9400d3',dAppRk:'ff1493',dApskyXe:'bfff',dimWay:'696969',dimgYy:'696969',dodgerXe:'1e90ff',fiYbrick:'b22222',flSOwEte:'fffaf0',foYstWAn:'228b22',fuKsia:'ff00ff',gaRsbSo:'dcdcdc',ghostwEte:'f8f8ff',gTd:'ffd700',gTMnPd:'daa520',Way:'808080',gYF:'8000',gYFLw:'adff2f',gYy:'808080',honeyMw:'f0fff0',hotpRk:'ff69b4',RdianYd:'cd5c5c',Rdigo:'4b0082',ivSy:'fffff0',khaki:'f0e68c',lavFMr:'e6e6fa',lavFMrXsh:'fff0f5',lawngYF:'7cfc00',NmoncEffon:'fffacd',ZXe:'add8e6',ZcSO:'f08080',Zcyan:'e0ffff',ZgTMnPdLw:'fafad2',ZWay:'d3d3d3',ZgYF:'90ee90',ZgYy:'d3d3d3',ZpRk:'ffb6c1',ZsOmon:'ffa07a',ZsHgYF:'20b2aa',ZskyXe:'87cefa',ZUWay:'778899',ZUgYy:'778899',ZstAlXe:'b0c4de',ZLw:'ffffe0',lime:'ff00',limegYF:'32cd32',lRF:'faf0e6',magFta:'ff00ff',maPon:'800000',VaquamarRe:'66cdaa',VXe:'cd',VScEd:'ba55d3',VpurpN:'9370db',VsHgYF:'3cb371',VUXe:'7b68ee',VsprRggYF:'fa9a',VQe:'48d1cc',VviTetYd:'c71585',midnightXe:'191970',mRtcYam:'f5fffa',mistyPse:'ffe4e1',moccasR:'ffe4b5',navajowEte:'ffdead',navy:'80',Tdlace:'fdf5e6',Tive:'808000',TivedBb:'6b8e23',Sange:'ffa500',SangeYd:'ff4500',ScEd:'da70d6',pOegTMnPd:'eee8aa',pOegYF:'98fb98',pOeQe:'afeeee',pOeviTetYd:'db7093',papayawEp:'ffefd5',pHKpuff:'ffdab9',peru:'cd853f',pRk:'ffc0cb',plum:'dda0dd',powMrXe:'b0e0e6',purpN:'800080',YbeccapurpN:'663399',Yd:'ff0000',Psybrown:'bc8f8f',PyOXe:'4169e1',saddNbPwn:'8b4513',sOmon:'fa8072',sandybPwn:'f4a460',sHgYF:'2e8b57',sHshell:'fff5ee',siFna:'a0522d',silver:'c0c0c0',skyXe:'87ceeb',UXe:'6a5acd',UWay:'708090',UgYy:'708090',snow:'fffafa',sprRggYF:'ff7f',stAlXe:'4682b4',tan:'d2b48c',teO:'8080',tEstN:'d8bfd8',tomato:'ff6347',Qe:'40e0d0',viTet:'ee82ee',JHt:'f5deb3',wEte:'ffffff',wEtesmoke:'f5f5f5',Lw:'ffff00',LwgYF:'9acd32'});names.transparent=[0,0,0,0];function nameParse(str){var a=names[str];return a&&{r:a[0],g:a[1],b:a[2],a:a.length===4?a[3]:255};}function modHSL(v,i,ratio){if(v){var tmp=rgb2hsl(v);tmp[i]=Math.max(0,Math.min(tmp[i]+tmp[i]*ratio,i===0?360:1));tmp=hsl2rgb(tmp);v.r=tmp[0];v.g=tmp[1];v.b=tmp[2];}}function clone$1(v,proto){return v?_extends(proto||{},v):v;}function fromObject(input){var v={r:0,g:0,b:0,a:255};if(Array.isArray(input)){if(input.length>=3){v={r:input[0],g:input[1],b:input[2],a:255};if(input.length>3){v.a=n2b(input[3]);}}}else{v=clone$1(input,{r:0,g:0,b:0,a:1});v.a=n2b(v.a);}return v;}function functionParse(str){if(str.charAt(0)==='r'){return rgbParse(str);}return hueParse(str);}var Color=function(){function Color(input){_classCallCheck(this,Color);if(input instanceof Color){return input;}var type=_typeof(input);var v;if(type==='object'){v=fromObject(input);}else if(type==='string'){v=hexParse(input)||nameParse(input)||functionParse(input);}this._rgb=v;this._valid=!!v;}_createClass(Color,[{key:'rgbString',value:function rgbString(){return _rgbString(this._rgb);}},{key:'hexString',value:function hexString(){return _hexString(this._rgb);}},{key:'hslString',value:function hslString(){return _hslString(this._rgb);}},{key:'mix',value:function mix(color,weight){var me=this;if(color){var c1=me.rgb;var c2=color.rgb;var w2;var p=weight===w2?0.5:weight;var w=2*p-1;var a=c1.a-c2.a;var w1=((w*a===-1?w:(w+a)/(1+w*a))+1)/2.0;w2=1-w1;c1.r=0xff&w1*c1.r+w2*c2.r+0.5;c1.g=0xff&w1*c1.g+w2*c2.g+0.5;c1.b=0xff&w1*c1.b+w2*c2.b+0.5;c1.a=p*c1.a+(1-p)*c2.a;me.rgb=c1;}return me;}},{key:'clone',value:function clone(){return new Color(this.rgb);}},{key:'alpha',value:function alpha(a){this._rgb.a=n2b(a);return this;}},{key:'clearer',value:function clearer(ratio){var rgb=this._rgb;rgb.a*=1-ratio;return this;}},{key:'greyscale',value:function greyscale(){var rgb=this._rgb;var val=round(rgb.r*0.3+rgb.g*0.59+rgb.b*0.11);rgb.r=rgb.g=rgb.b=val;return this;}},{key:'opaquer',value:function opaquer(ratio){var rgb=this._rgb;rgb.a*=1+ratio;return this;}},{key:'negate',value:function negate(){var v=this._rgb;v.r=255-v.r;v.g=255-v.g;v.b=255-v.b;return this;}},{key:'lighten',value:function lighten(ratio){modHSL(this._rgb,2,ratio);return this;}},{key:'darken',value:function darken(ratio){modHSL(this._rgb,2,-ratio);return this;}},{key:'saturate',value:function saturate(ratio){modHSL(this._rgb,1,ratio);return this;}},{key:'desaturate',value:function desaturate(ratio){modHSL(this._rgb,1,-ratio);return this;}},{key:'rotate',value:function rotate(deg){_rotate(this._rgb,deg);return this;}},{key:'valid',get:function get(){return this._valid;}},{key:'rgb',get:function get(){var v=clone$1(this._rgb);if(v){v.a=b2n(v.a);}return v;},set:function set(obj){this._rgb=fromObject(obj);}}]);return Color;}();function index(input){return new Color(input);}var isPatternOrGradient=function isPatternOrGradient(value){return value instanceof CanvasGradient||value instanceof CanvasPattern;};function color(value){return isPatternOrGradient(value)?value:index(value);}function getHoverColor(value){return isPatternOrGradient(value)?value:index(value).saturate(0.5).darken(0.1).hexString();}var helpers=_objectSpread2({},coreHelpers,{canvas:canvas,curve:curve,dom:dom,easing:{effects:effects},options:options,math:math,rtl:rtl,requestAnimFrame:function(){if(typeof window==='undefined'){return function(callback){callback();};}return window.requestAnimationFrame;}(),fontString:function fontString(pixelSize,fontStyle,fontFamily){return fontStyle+' '+pixelSize+'px '+fontFamily;},color:color,getHoverColor:getHoverColor});function drawFPS(chart,count,date,lastDate){var fps=1000/(date-lastDate)|0;var ctx=chart.ctx;ctx.save();ctx.clearRect(0,0,50,24);ctx.fillStyle='black';ctx.textAlign='right';if(count){ctx.fillText(count,50,8);ctx.fillText(fps+' fps',50,18);}ctx.restore();}var Animator=function(){function Animator(){_classCallCheck(this,Animator);this._request=null;this._charts=new Map();this._running=false;this._lastDate=undefined;}_createClass(Animator,[{key:'_notify',value:function _notify(chart,anims,date,type){var callbacks=anims.listeners[type]||[];var numSteps=anims.duration;callbacks.forEach(function(fn){return fn({chart:chart,numSteps:numSteps,currentStep:date-anims.start});});}},{key:'_refresh',value:function _refresh(){var me=this;if(me._request){return;}me._running=true;me._request=helpers.requestAnimFrame.call(window,function(){me._update();me._request=null;if(me._running){me._refresh();}});}},{key:'_update',value:function _update(){var me=this;var date=Date.now();var remaining=0;me._charts.forEach(function(anims,chart){if(!anims.running||!anims.items.length){return;}var items=anims.items;var i=items.length-1;var draw=false;var item;for(;i>=0;--i){item=items[i];if(item._active){item.tick(date);draw=true;}else{items[i]=items[items.length-1];items.pop();}}if(draw){chart.draw();}if(chart.options.animation.debug){drawFPS(chart,items.length,date,me._lastDate);}me._notify(chart,anims,date,'progress');if(!items.length){anims.running=false;me._notify(chart,anims,date,'complete');}remaining+=items.length;});me._lastDate=date;if(remaining===0){me._running=false;}}},{key:'_getAnims',value:function _getAnims(chart){var charts=this._charts;var anims=charts.get(chart);if(!anims){anims={running:false,items:[],listeners:{complete:[],progress:[]}};charts.set(chart,anims);}return anims;}},{key:'listen',value:function listen(chart,event,cb){this._getAnims(chart).listeners[event].push(cb);}},{key:'add',value:function add(chart,items){var _this$_getAnims$items;if(!items||!items.length){return;}(_this$_getAnims$items=this._getAnims(chart).items).push.apply(_this$_getAnims$items,_toConsumableArray(items));}},{key:'has',value:function has(chart){return this._getAnims(chart).items.length>0;}},{key:'start',value:function start(chart){var anims=this._charts.get(chart);if(!anims){return;}anims.running=true;anims.start=Date.now();anims.duration=anims.items.reduce(function(acc,cur){return Math.max(acc,cur._duration);},0);this._refresh();}},{key:'running',value:function running(chart){if(!this._running){return false;}var anims=this._charts.get(chart);if(!anims||!anims.running||!anims.items.length){return false;}return true;}},{key:'stop',value:function stop(chart){var anims=this._charts.get(chart);if(!anims||!anims.items.length){return;}var items=anims.items;var i=items.length-1;for(;i>=0;--i){items[i].cancel();}anims.items=[];this._notify(chart,anims,Date.now(),'complete');}},{key:'remove',value:function remove(chart){return this._charts['delete'](chart);}}]);return Animator;}();var Animator$1=new Animator();var transparent='transparent';var interpolators={boolean:function boolean(from,to,factor){return factor>0.5?to:from;},color:function color(from,to,factor){var c0=helpers.color(from||transparent);var c1=c0.valid&&helpers.color(to||transparent);return c1&&c1.valid?c1.mix(c0,factor).hexString():to;},number:function number(from,to,factor){return from+(to-from)*factor;}};var Animation=function(){function Animation(cfg,target,prop,to){_classCallCheck(this,Animation);var currentValue=target[prop];to=resolve([cfg.to,to,currentValue,cfg.from]);var from=resolve([cfg.from,currentValue,to]);this._active=true;this._fn=cfg.fn||interpolators[cfg.type||_typeof(from)];this._easing=effects[cfg.easing||'linear'];this._start=Math.floor(Date.now()+(cfg.delay||0));this._duration=Math.floor(cfg.duration);this._loop=!!cfg.loop;this._target=target;this._prop=prop;this._from=from;this._to=to;}_createClass(Animation,[{key:'active',value:function active(){return this._active;}},{key:'cancel',value:function cancel(){var me=this;if(me._active){me.tick(Date.now());me._active=false;}}},{key:'tick',value:function tick(date){var me=this;var elapsed=date-me._start;var duration=me._duration;var prop=me._prop;var from=me._from;var loop=me._loop;var to=me._to;var factor;me._active=from!==to&&(loop||elapsed<duration);if(!me._active){me._target[prop]=to;return;}if(elapsed<0){me._target[prop]=from;return;}factor=elapsed/duration%2;factor=loop&&factor>1?2-factor:factor;factor=me._easing(Math.min(1,Math.max(0,factor)));me._target[prop]=me._fn(from,to,factor);}}]);return Animation;}();var numbers=['x','y','borderWidth','radius','tension'];var colors=['borderColor','backgroundColor'];defaults.set('animation',{duration:1000,easing:'easeOutQuart',onProgress:noop,onComplete:noop,colors:{type:'color',properties:colors},numbers:{type:'number',properties:numbers},active:{duration:400},resize:{duration:0},show:{colors:{type:'color',properties:colors,from:'transparent'},visible:{type:'boolean',duration:0}},hide:{colors:{type:'color',properties:colors,to:'transparent'},visible:{type:'boolean',easing:'easeInExpo'}}});function copyOptions(target,values){var oldOpts=target.options;var newOpts=values.options;if(!oldOpts||!newOpts||newOpts.$shared){return;}if(oldOpts.$shared){target.options=_extends({},oldOpts,newOpts,{$shared:false});}else{_extends(oldOpts,newOpts);}delete values.options;}function extensibleConfig(animations){var result={};Object.keys(animations).forEach(function(key){var value=animations[key];if(!isObject(value)){result[key]=value;}});return result;}var Animations=function(){function Animations(chart,animations){_classCallCheck(this,Animations);this._chart=chart;this._properties=new Map();this.configure(animations);}_createClass(Animations,[{key:'configure',value:function configure(animations){if(!isObject(animations)){return;}var animatedProps=this._properties;var animDefaults=extensibleConfig(animations);Object.keys(animations).forEach(function(key){var cfg=animations[key];if(!isObject(cfg)){return;}(cfg.properties||[key]).forEach(function(prop){if(!animatedProps.has(prop)){animatedProps.set(prop,_extends({},animDefaults,cfg));}else if(prop===key){animatedProps.set(prop,_extends({},animatedProps.get(prop),cfg));}});});}},{key:'_animateOptions',value:function _animateOptions(target,values){var newOptions=values.options;var animations=[];if(!newOptions){return animations;}var options=target.options;if(options){if(options.$shared){target.options=options=_extends({},options,{$shared:false,$animations:{}});}animations=this._createAnimations(options,newOptions);}else{target.options=newOptions;}return animations;}},{key:'_createAnimations',value:function _createAnimations(target,values){var animatedProps=this._properties;var animations=[];var running=target.$animations||(target.$animations={});var props=Object.keys(values);var i;for(i=props.length-1;i>=0;--i){var prop=props[i];if(prop.charAt(0)==='$'){continue;}if(prop==='options'){animations.push.apply(animations,_toConsumableArray(this._animateOptions(target,values)));continue;}var value=values[prop];var animation=running[prop];if(animation){animation.cancel();}var cfg=animatedProps.get(prop);if(!cfg||!cfg.duration){target[prop]=value;continue;}running[prop]=animation=new Animation(cfg,target,prop,value);animations.push(animation);}return animations;}},{key:'update',value:function update(target,values){if(this._properties.size===0){copyOptions(target,values);_extends(target,values);return;}var animations=this._createAnimations(target,values);if(animations.length){Animator$1.add(this._chart,animations);return true;}}}]);return Animations;}();var resolve$1=helpers.options.resolve;var arrayEvents=['push','pop','shift','splice','unshift'];function listenArrayEvents(array,listener){if(array._chartjs){array._chartjs.listeners.push(listener);return;}Object.defineProperty(array,'_chartjs',{configurable:true,enumerable:false,value:{listeners:[listener]}});arrayEvents.forEach(function(key){var method='_onData'+key.charAt(0).toUpperCase()+key.slice(1);var base=array[key];Object.defineProperty(array,key,{configurable:true,enumerable:false,value:function value(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var res=base.apply(this,args);array._chartjs.listeners.forEach(function(object){if(typeof object[method]==='function'){object[method].apply(object,args);}});return res;}});});}function scaleClip(scale,allowedOverflow){var opts=scale&&scale.options||{};var reverse=opts.reverse;var min=opts.min===undefined?allowedOverflow:0;var max=opts.max===undefined?allowedOverflow:0;return{start:reverse?max:min,end:reverse?min:max};}function defaultClip(xScale,yScale,allowedOverflow){if(allowedOverflow===false){return false;}var x=scaleClip(xScale,allowedOverflow);var y=scaleClip(yScale,allowedOverflow);return{top:y.end,right:x.end,bottom:y.start,left:x.start};}function toClip(value){var t,r,b,l;if(helpers.isObject(value)){t=value.top;r=value.right;b=value.bottom;l=value.left;}else{t=r=b=l=value;}return{top:t,right:r,bottom:b,left:l};}function unlistenArrayEvents(array,listener){var stub=array._chartjs;if(!stub){return;}var listeners=stub.listeners;var index=listeners.indexOf(listener);if(index!==-1){listeners.splice(index,1);}if(listeners.length>0){return;}arrayEvents.forEach(function(key){delete array[key];});delete array._chartjs;}function getSortedDatasetIndices(chart,filterVisible){var keys=[];var metasets=chart._getSortedDatasetMetas(filterVisible);var i,ilen;for(i=0,ilen=metasets.length;i<ilen;++i){keys.push(metasets[i].index);}return keys;}function _applyStack(stack,value,dsIndex,allOther){var keys=stack.keys;var i,ilen,datasetIndex,otherValue;for(i=0,ilen=keys.length;i<ilen;++i){datasetIndex=+keys[i];if(datasetIndex===dsIndex){if(allOther){continue;}break;}otherValue=stack.values[datasetIndex];if(!isNaN(otherValue)&&(value===0||helpers.math.sign(value)===helpers.math.sign(otherValue))){value+=otherValue;}}return value;}function convertObjectDataToArray(data){var keys=Object.keys(data);var adata=new Array(keys.length);var i,ilen,key;for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];adata[i]={x:key,y:data[key]};}return adata;}function isStacked(scale,meta){var stacked=scale&&scale.options.stacked;return stacked||stacked===undefined&&meta.stack!==undefined;}function getStackKey(indexScale,valueScale,meta){return indexScale.id+'.'+valueScale.id+'.'+meta.stack+'.'+meta.type;}function getUserBounds(scale){var _scale$getUserBounds=scale.getUserBounds(),min=_scale$getUserBounds.min,max=_scale$getUserBounds.max,minDefined=_scale$getUserBounds.minDefined,maxDefined=_scale$getUserBounds.maxDefined;return{min:minDefined?min:Number.NEGATIVE_INFINITY,max:maxDefined?max:Number.POSITIVE_INFINITY};}function getOrCreateStack(stacks,stackKey,indexValue){var subStack=stacks[stackKey]||(stacks[stackKey]={});return subStack[indexValue]||(subStack[indexValue]={});}function updateStacks(controller,parsed){var chart=controller.chart,meta=controller._cachedMeta;var stacks=chart._stacks||(chart._stacks={});var iScale=meta.iScale,vScale=meta.vScale,datasetIndex=meta.index;var iAxis=iScale.axis;var vAxis=vScale.axis;var key=getStackKey(iScale,vScale,meta);var ilen=parsed.length;var stack;for(var i=0;i<ilen;++i){var item=parsed[i];var index=item[iAxis],value=item[vAxis];var itemStacks=item._stacks||(item._stacks={});stack=itemStacks[vAxis]=getOrCreateStack(stacks,key,index);stack[datasetIndex]=value;}}function getFirstScaleId(chart,axis){var scales=chart.scales;return Object.keys(scales).filter(function(key){return scales[key].axis===axis;}).shift();}var DatasetController=function(){function DatasetController(chart,datasetIndex){_classCallCheck(this,DatasetController);this.chart=chart;this._ctx=chart.ctx;this.index=datasetIndex;this._cachedAnimations={};this._cachedDataOpts={};this._cachedMeta=this.getMeta();this._type=this._cachedMeta.type;this._config=undefined;this._parsing=false;this._data=undefined;this._dataCopy=undefined;this._objectData=undefined;this._labels=undefined;this._scaleStacked={};this.initialize();}_createClass(DatasetController,[{key:'initialize',value:function initialize(){var me=this;var meta=me._cachedMeta;me.configure();me.linkScales();meta._stacked=isStacked(meta.vScale,meta);me.addElements();}},{key:'updateIndex',value:function updateIndex(datasetIndex){this.index=datasetIndex;}},{key:'linkScales',value:function linkScales(){var me=this;var chart=me.chart;var meta=me._cachedMeta;var dataset=me.getDataset();var xid=meta.xAxisID=dataset.xAxisID||getFirstScaleId(chart,'x');var yid=meta.yAxisID=dataset.yAxisID||getFirstScaleId(chart,'y');var rid=meta.rAxisID=dataset.rAxisID||getFirstScaleId(chart,'r');meta.xScale=me.getScaleForId(xid);meta.yScale=me.getScaleForId(yid);meta.rScale=me.getScaleForId(rid);meta.iScale=me._getIndexScale();meta.vScale=me._getValueScale();}},{key:'getDataset',value:function getDataset(){return this.chart.data.datasets[this.index];}},{key:'getMeta',value:function getMeta(){return this.chart.getDatasetMeta(this.index);}},{key:'getScaleForId',value:function getScaleForId(scaleID){return this.chart.scales[scaleID];}},{key:'getValueScaleId',value:function getValueScaleId(){return this._cachedMeta.yAxisID;}},{key:'getIndexScaleId',value:function getIndexScaleId(){return this._cachedMeta.xAxisID;}},{key:'_getValueScale',value:function _getValueScale(){return this.getScaleForId(this.getValueScaleId());}},{key:'_getIndexScale',value:function _getIndexScale(){return this.getScaleForId(this.getIndexScaleId());}},{key:'_getOtherScale',value:function _getOtherScale(scale){var meta=this._cachedMeta;return scale===meta.iScale?meta.vScale:meta.iScale;}},{key:'reset',value:function reset(){this._update('reset');}},{key:'_destroy',value:function _destroy(){if(this._data){unlistenArrayEvents(this._data,this);}}},{key:'_dataCheck',value:function _dataCheck(){var me=this;var dataset=me.getDataset();var data=dataset.data||(dataset.data=[]);if(helpers.isObject(data)){if(me._objectData===data){return false;}me._data=convertObjectDataToArray(data);me._objectData=data;}else{if(me._data===data&&helpers.arrayEquals(data,me._dataCopy)){return false;}if(me._data){unlistenArrayEvents(me._data,me);}me._dataCopy=data.slice(0);if(data&&Object.isExtensible(data)){listenArrayEvents(data,me);}me._data=data;}return true;}},{key:'_labelCheck',value:function _labelCheck(){var me=this;var iScale=me._cachedMeta.iScale;var labels=iScale?iScale.getLabels():me.chart.data.labels;if(me._labels===labels){return false;}me._labels=labels;return true;}},{key:'addElements',value:function addElements(){var me=this;var meta=me._cachedMeta;me._dataCheck();var data=me._data;var metaData=meta.data=new Array(data.length);for(var i=0,ilen=data.length;i<ilen;++i){metaData[i]=new me.dataElementType();}if(me.datasetElementType){meta.dataset=new me.datasetElementType();}}},{key:'buildOrUpdateElements',value:function buildOrUpdateElements(){var me=this;var dataChanged=me._dataCheck();var labelsChanged=me._labelCheck();var scaleChanged=me._scaleCheck();var meta=me._cachedMeta;var dataset=me.getDataset();var stackChanged=false;meta._stacked=isStacked(meta.vScale,meta);if(meta.stack!==dataset.stack){stackChanged=true;meta._parsed.forEach(function(parsed){delete parsed._stacks[meta.vScale.id][meta.index];});meta.stack=dataset.stack;}me._resyncElements(dataChanged||labelsChanged||scaleChanged||stackChanged);if(stackChanged){updateStacks(me,meta._parsed);}}},{key:'configure',value:function configure(){var me=this;me._config=helpers.merge({},[me.chart.options[me._type].datasets,me.getDataset()],{merger:function merger(key,target,source){if(key!=='data'){helpers._merger(key,target,source);}}});me._parsing=resolve$1([me._config.parsing,me.chart.options.parsing,true]);}},{key:'parse',value:function parse(start,count){var me=this;var meta=me._cachedMeta,data=me._data;var iScale=meta.iScale,vScale=meta.vScale,_stacked=meta._stacked;var iAxis=iScale.axis;var sorted=true;var i,parsed,cur,prev;if(start>0){sorted=meta._sorted;prev=meta._parsed[start-1];}if(me._parsing===false){meta._parsed=data;meta._sorted=true;}else{if(helpers.isArray(data[start])){parsed=me.parseArrayData(meta,data,start,count);}else if(helpers.isObject(data[start])){parsed=me.parseObjectData(meta,data,start,count);}else{parsed=me.parsePrimitiveData(meta,data,start,count);}for(i=0;i<count;++i){meta._parsed[i+start]=cur=parsed[i];if(sorted){if(prev&&cur[iAxis]<prev[iAxis]){sorted=false;}prev=cur;}}meta._sorted=sorted;}if(_stacked){updateStacks(me,parsed);}iScale.invalidateCaches();vScale.invalidateCaches();}},{key:'parsePrimitiveData',value:function parsePrimitiveData(meta,data,start,count){var iScale=meta.iScale,vScale=meta.vScale;var iAxis=iScale.axis;var vAxis=vScale.axis;var labels=iScale.getLabels();var singleScale=iScale===vScale;var parsed=new Array(count);var i,ilen,index;for(i=0,ilen=count;i<ilen;++i){var _parsed$i;index=i+start;parsed[i]=(_parsed$i={},_defineProperty(_parsed$i,iAxis,singleScale||iScale.parse(labels[index],index)),_defineProperty(_parsed$i,vAxis,vScale.parse(data[index],index)),_parsed$i);}return parsed;}},{key:'parseArrayData',value:function parseArrayData(meta,data,start,count){var xScale=meta.xScale,yScale=meta.yScale;var parsed=new Array(count);var i,ilen,index,item;for(i=0,ilen=count;i<ilen;++i){index=i+start;item=data[index];parsed[i]={x:xScale.parse(item[0],index),y:yScale.parse(item[1],index)};}return parsed;}},{key:'parseObjectData',value:function parseObjectData(meta,data,start,count){var xScale=meta.xScale,yScale=meta.yScale;var parsed=new Array(count);var i,ilen,index,item;for(i=0,ilen=count;i<ilen;++i){index=i+start;item=data[index];parsed[i]={x:xScale.parseObject(item,'x',index),y:yScale.parseObject(item,'y',index)};}return parsed;}},{key:'getParsed',value:function getParsed(index){return this._cachedMeta._parsed[index];}},{key:'applyStack',value:function applyStack(scale,parsed){var chart=this.chart;var meta=this._cachedMeta;var value=parsed[scale.axis];var stack={keys:getSortedDatasetIndices(chart,true),values:parsed._stacks[scale.axis]};return _applyStack(stack,value,meta.index);}},{key:'getMinMax',value:function getMinMax(scale,canStack){var meta=this._cachedMeta;var _parsed=meta._parsed;var sorted=meta._sorted&&scale===meta.iScale;var ilen=_parsed.length;var otherScale=this._getOtherScale(scale);var stack=canStack&&meta._stacked&&{keys:getSortedDatasetIndices(this.chart,true),values:null};var min=Number.POSITIVE_INFINITY;var max=Number.NEGATIVE_INFINITY;var _getUserBounds=getUserBounds(otherScale),otherMin=_getUserBounds.min,otherMax=_getUserBounds.max;var i,value,parsed,otherValue;function _compute(){if(stack){stack.values=parsed._stacks[scale.axis];min=Math.min(min,value);max=Math.max(max,value);value=_applyStack(stack,value,meta.index,true);}min=Math.min(min,value);max=Math.max(max,value);}function _skip(){parsed=_parsed[i];value=parsed[scale.axis];otherValue=parsed[otherScale.axis];return isNaN(value)||otherMin>otherValue||otherMax<otherValue;}for(i=0;i<ilen;++i){if(_skip()){continue;}_compute();if(sorted){break;}}if(sorted){for(i=ilen-1;i>=0;--i){if(_skip()){continue;}_compute();break;}}return{min:min,max:max};}},{key:'getAllParsedValues',value:function getAllParsedValues(scale){var parsed=this._cachedMeta._parsed;var values=[];var i,ilen,value;for(i=0,ilen=parsed.length;i<ilen;++i){value=parsed[i][scale.axis];if(!isNaN(value)){values.push(value);}}return values;}},{key:'_cacheScaleStackStatus',value:function _cacheScaleStackStatus(){var me=this;var meta=me._cachedMeta;var iScale=meta.iScale;var vScale=meta.vScale;var cache=me._scaleStacked={};if(iScale&&vScale){cache[iScale.id]=iScale.options.stacked;cache[vScale.id]=vScale.options.stacked;}}},{key:'_scaleCheck',value:function _scaleCheck(){var me=this;var meta=me._cachedMeta;var iScale=meta.iScale;var vScale=meta.vScale;var cache=me._scaleStacked;return!cache||!iScale||!vScale||cache[iScale.id]!==iScale.options.stacked||cache[vScale.id]!==vScale.options.stacked;}},{key:'getMaxOverflow',value:function getMaxOverflow(){return false;}},{key:'getLabelAndValue',value:function getLabelAndValue(index){var me=this;var meta=me._cachedMeta;var iScale=meta.iScale;var vScale=meta.vScale;var parsed=me.getParsed(index);return{label:iScale?''+iScale.getLabelForValue(parsed[iScale.axis]):'',value:vScale?''+vScale.getLabelForValue(parsed[vScale.axis]):''};}},{key:'_update',value:function _update(mode){var me=this;var meta=me._cachedMeta;me.configure();me._cachedAnimations={};me._cachedDataOpts={};me.update(mode);meta._clip=toClip(helpers.valueOrDefault(me._config.clip,defaultClip(meta.xScale,meta.yScale,me.getMaxOverflow())));me._cacheScaleStackStatus();}},{key:'update',value:function update(mode){}},{key:'draw',value:function draw(){var ctx=this._ctx;var meta=this._cachedMeta;var elements=meta.data||[];var ilen=elements.length;var i=0;if(meta.dataset){meta.dataset.draw(ctx);}for(;i<ilen;++i){elements[i].draw(ctx);}}},{key:'_addAutomaticHoverColors',value:function _addAutomaticHoverColors(index,options){var me=this;var getHoverColor=helpers.getHoverColor;var normalOptions=me.getStyle(index);var missingColors=Object.keys(normalOptions).filter(function(key){return key.indexOf('Color')!==-1&&!(key in options);});var i=missingColors.length-1;var color;for(;i>=0;i--){color=missingColors[i];options[color]=getHoverColor(normalOptions[color]);}}},{key:'getStyle',value:function getStyle(index,active){var me=this;var meta=me._cachedMeta;var dataset=meta.dataset;if(!me._config){me.configure();}var options=dataset&&index===undefined?me.resolveDatasetElementOptions(active):me.resolveDataElementOptions(index||0,active&&'active');if(active){me._addAutomaticHoverColors(index,options);}return options;}},{key:'_getContext',value:function _getContext(index,active){return{chart:this.chart,dataIndex:index,dataset:this.getDataset(),datasetIndex:this.index,active:active};}},{key:'resolveDatasetElementOptions',value:function resolveDatasetElementOptions(active){var me=this;var chart=me.chart;var datasetOpts=me._config;var options=chart.options.elements[me.datasetElementType._type]||{};var elementOptions=me.datasetElementOptions;var values={};var context=me._getContext(undefined,active);var i,ilen,key,readKey,value;for(i=0,ilen=elementOptions.length;i<ilen;++i){key=elementOptions[i];readKey=active?'hover'+key.charAt(0).toUpperCase()+key.slice(1):key;value=resolve$1([datasetOpts[readKey],options[readKey]],context);if(value!==undefined){values[key]=value;}}return values;}},{key:'resolveDataElementOptions',value:function resolveDataElementOptions(index,mode){var me=this;var active=mode==='active';var cached=me._cachedDataOpts;if(cached[mode]){return cached[mode];}var chart=me.chart;var datasetOpts=me._config;var options=chart.options.elements[me.dataElementType._type]||{};var elementOptions=me.dataElementOptions;var values={};var context=me._getContext(index,active);var info={cacheable:!active};var keys,i,ilen,key,value,readKey;if(helpers.isArray(elementOptions)){for(i=0,ilen=elementOptions.length;i<ilen;++i){key=elementOptions[i];readKey=active?'hover'+key.charAt(0).toUpperCase()+key.slice(1):key;value=resolve$1([datasetOpts[readKey],options[readKey]],context,index,info);if(value!==undefined){values[key]=value;}}}else{keys=Object.keys(elementOptions);for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];readKey=active?'hover'+key.charAt(0).toUpperCase()+key.slice(1):key;value=resolve$1([datasetOpts[elementOptions[readKey]],datasetOpts[readKey],options[readKey]],context,index,info);if(value!==undefined){values[key]=value;}}}if(info.cacheable){values.$shared=true;cached[mode]=values;}return values;}},{key:'_resolveAnimations',value:function _resolveAnimations(index,mode,active){var me=this;var chart=me.chart;var cached=me._cachedAnimations;mode=mode||'default';if(cached[mode]){return cached[mode];}var info={cacheable:true};var context=me._getContext(index,active);var datasetAnim=resolve$1([me._config.animation],context,index,info);var chartAnim=resolve$1([chart.options.animation],context,index,info);var config=helpers.mergeIf({},[datasetAnim,chartAnim]);if(config[mode]){config=_extends({},config,config[mode]);}var animations=new Animations(chart,config);if(info.cacheable){cached[mode]=animations&&Object.freeze(animations);}return animations;}},{key:'getSharedOptions',value:function getSharedOptions(mode,el,options){if(!mode){this._sharedOptions=options&&options.$shared;}if(mode!=='reset'&&options&&options.$shared&&el&&el.options&&el.options.$shared){return{target:el.options,options:options};}}},{key:'includeOptions',value:function includeOptions(mode,sharedOptions){if(mode==='hide'||mode==='show'){return true;}return mode!=='resize'&&!sharedOptions;}},{key:'updateElement',value:function updateElement(element,index,properties,mode){if(mode==='reset'||mode==='none'){_extends(element,properties);}else{this._resolveAnimations(index,mode).update(element,properties);}}},{key:'updateSharedOptions',value:function updateSharedOptions(sharedOptions,mode){if(sharedOptions){this._resolveAnimations(undefined,mode).update(sharedOptions.target,sharedOptions.options);}}},{key:'_setStyle',value:function _setStyle(element,index,mode,active){element.active=active;this._resolveAnimations(index,mode,active).update(element,{options:this.getStyle(index,active)});}},{key:'removeHoverStyle',value:function removeHoverStyle(element,datasetIndex,index){this._setStyle(element,index,'active',false);}},{key:'setHoverStyle',value:function setHoverStyle(element,datasetIndex,index){this._setStyle(element,index,'active',true);}},{key:'_removeDatasetHoverStyle',value:function _removeDatasetHoverStyle(){var element=this._cachedMeta.dataset;if(element){this._setStyle(element,undefined,'active',false);}}},{key:'_setDatasetHoverStyle',value:function _setDatasetHoverStyle(){var element=this._cachedMeta.dataset;if(element){this._setStyle(element,undefined,'active',true);}}},{key:'_resyncElements',value:function _resyncElements(changed){var me=this;var meta=me._cachedMeta;var numMeta=meta.data.length;var numData=me._data.length;if(numData>numMeta){me._insertElements(numMeta,numData-numMeta);if(changed&&numMeta){me.parse(0,numMeta);}}else if(numData<numMeta){meta.data.splice(numData,numMeta-numData);meta._parsed.splice(numData,numMeta-numData);me.parse(0,numData);}else if(changed){me.parse(0,numData);}}},{key:'_insertElements',value:function _insertElements(start,count){var me=this;var elements=new Array(count);var meta=me._cachedMeta;var data=meta.data;var i;for(i=0;i<count;++i){elements[i]=new me.dataElementType();}data.splice.apply(data,[start,0].concat(elements));if(me._parsing){var _meta$_parsed;(_meta$_parsed=meta._parsed).splice.apply(_meta$_parsed,[start,0].concat(_toConsumableArray(new Array(count))));}me.parse(start,count);me.updateElements(elements,start,'reset');}},{key:'updateElements',value:function updateElements(element,start,mode){}},{key:'_removeElements',value:function _removeElements(start,count){var me=this;if(me._parsing){me._cachedMeta._parsed.splice(start,count);}me._cachedMeta.data.splice(start,count);}},{key:'_onDataPush',value:function _onDataPush(){var count=arguments.length;this._insertElements(this.getDataset().data.length-count,count);}},{key:'_onDataPop',value:function _onDataPop(){this._removeElements(this._cachedMeta.data.length-1,1);}},{key:'_onDataShift',value:function _onDataShift(){this._removeElements(0,1);}},{key:'_onDataSplice',value:function _onDataSplice(start,count){this._removeElements(start,count);this._insertElements(start,arguments.length-2);}},{key:'_onDataUnshift',value:function _onDataUnshift(){this._insertElements(0,arguments.length);}}]);return DatasetController;}();_defineProperty(DatasetController,'extend',helpers.inherits);DatasetController.prototype.datasetElementType=null;DatasetController.prototype.dataElementType=null;DatasetController.prototype.datasetElementOptions=['backgroundColor','borderCapStyle','borderColor','borderDash','borderDashOffset','borderJoinStyle','borderWidth'];DatasetController.prototype.dataElementOptions=['backgroundColor','borderColor','borderWidth','pointStyle'];var Element$1=function(){function Element(){_classCallCheck(this,Element);this.x=undefined;this.y=undefined;this.active=false;this.options=undefined;this.$animations=undefined;}_createClass(Element,[{key:'tooltipPosition',value:function tooltipPosition(useFinalPosition){var _this$getProps=this.getProps(['x','y'],useFinalPosition),x=_this$getProps.x,y=_this$getProps.y;return{x:x,y:y};}},{key:'hasValue',value:function hasValue(){return isNumber(this.x)&&isNumber(this.y);}},{key:'getProps',value:function getProps(props,_final){var me=this;var anims=this.$animations;if(!_final||!anims){return me;}var ret={};props.forEach(function(prop){ret[prop]=anims[prop]&&anims[prop].active?anims[prop]._to:me[prop];});return ret;}}]);return Element;}();_defineProperty(Element$1,'extend',inherits);var TAU$1=Math.PI*2;defaults.set('elements',{arc:{backgroundColor:defaults.color,borderAlign:'center',borderColor:'#fff',borderWidth:2}});function clipArc(ctx,arc){var startAngle=arc.startAngle,endAngle=arc.endAngle,pixelMargin=arc.pixelMargin,x=arc.x,y=arc.y;var angleMargin=pixelMargin/arc.outerRadius;ctx.beginPath();ctx.arc(x,y,arc.outerRadius,startAngle-angleMargin,endAngle+angleMargin);if(arc.innerRadius>pixelMargin){angleMargin=pixelMargin/arc.innerRadius;ctx.arc(x,y,arc.innerRadius-pixelMargin,endAngle+angleMargin,startAngle-angleMargin,true);}else{ctx.arc(x,y,pixelMargin,endAngle+Math.PI/2,startAngle-Math.PI/2);}ctx.closePath();ctx.clip();}function drawFullCircleBorders(ctx,vm,arc,inner){var endAngle=arc.endAngle;var i;if(inner){arc.endAngle=arc.startAngle+TAU$1;clipArc(ctx,arc);arc.endAngle=endAngle;if(arc.endAngle===arc.startAngle&&arc.fullCircles){arc.endAngle+=TAU$1;arc.fullCircles--;}}ctx.beginPath();ctx.arc(arc.x,arc.y,arc.innerRadius,arc.startAngle+TAU$1,arc.startAngle,true);for(i=0;i<arc.fullCircles;++i){ctx.stroke();}ctx.beginPath();ctx.arc(arc.x,arc.y,vm.outerRadius,arc.startAngle,arc.startAngle+TAU$1);for(i=0;i<arc.fullCircles;++i){ctx.stroke();}}function drawBorder(ctx,vm,arc){var options=vm.options;var inner=options.borderAlign==='inner';if(inner){ctx.lineWidth=options.borderWidth*2;ctx.lineJoin='round';}else{ctx.lineWidth=options.borderWidth;ctx.lineJoin='bevel';}if(arc.fullCircles){drawFullCircleBorders(ctx,vm,arc,inner);}if(inner){clipArc(ctx,arc);}ctx.beginPath();ctx.arc(arc.x,arc.y,vm.outerRadius,arc.startAngle,arc.endAngle);ctx.arc(arc.x,arc.y,arc.innerRadius,arc.endAngle,arc.startAngle,true);ctx.closePath();ctx.stroke();}var Arc=function(_Element){_inherits(Arc,_Element);function Arc(cfg){var _this;_classCallCheck(this,Arc);_this=_possibleConstructorReturn(this,_getPrototypeOf(Arc).call(this));_this.options=undefined;_this.circumference=undefined;_this.startAngle=undefined;_this.endAngle=undefined;_this.innerRadius=undefined;_this.outerRadius=undefined;if(cfg){_extends(_assertThisInitialized(_this),cfg);}return _this;}_createClass(Arc,[{key:'inRange',value:function inRange(chartX,chartY,useFinalPosition){var point=this.getProps(['x','y'],useFinalPosition);var _getAngleFromPoint=getAngleFromPoint(point,{x:chartX,y:chartY}),angle=_getAngleFromPoint.angle,distance=_getAngleFromPoint.distance;var _this$getProps=this.getProps(['startAngle','endAngle','innerRadius','outerRadius','circumference'],useFinalPosition),startAngle=_this$getProps.startAngle,endAngle=_this$getProps.endAngle,innerRadius=_this$getProps.innerRadius,outerRadius=_this$getProps.outerRadius,circumference=_this$getProps.circumference;var betweenAngles=circumference>=TAU$1||_angleBetween(angle,startAngle,endAngle);var withinRadius=distance>=innerRadius&&distance<=outerRadius;return betweenAngles&&withinRadius;}},{key:'getCenterPoint',value:function getCenterPoint(useFinalPosition){var _this$getProps2=this.getProps(['x','y','startAngle','endAngle','innerRadius','outerRadius'],useFinalPosition),x=_this$getProps2.x,y=_this$getProps2.y,startAngle=_this$getProps2.startAngle,endAngle=_this$getProps2.endAngle,innerRadius=_this$getProps2.innerRadius,outerRadius=_this$getProps2.outerRadius;var halfAngle=(startAngle+endAngle)/2;var halfRadius=(innerRadius+outerRadius)/2;return{x:x+Math.cos(halfAngle)*halfRadius,y:y+Math.sin(halfAngle)*halfRadius};}},{key:'tooltipPosition',value:function tooltipPosition(useFinalPosition){return this.getCenterPoint(useFinalPosition);}},{key:'draw',value:function draw(ctx){var me=this;var options=me.options;var pixelMargin=options.borderAlign==='inner'?0.33:0;var arc={x:me.x,y:me.y,innerRadius:me.innerRadius,outerRadius:Math.max(me.outerRadius-pixelMargin,0),pixelMargin:pixelMargin,startAngle:me.startAngle,endAngle:me.endAngle,fullCircles:Math.floor(me.circumference/TAU$1)};var i;ctx.save();ctx.fillStyle=options.backgroundColor;ctx.strokeStyle=options.borderColor;if(arc.fullCircles){arc.endAngle=arc.startAngle+TAU$1;ctx.beginPath();ctx.arc(arc.x,arc.y,arc.outerRadius,arc.startAngle,arc.endAngle);ctx.arc(arc.x,arc.y,arc.innerRadius,arc.endAngle,arc.startAngle,true);ctx.closePath();for(i=0;i<arc.fullCircles;++i){ctx.fill();}arc.endAngle=arc.startAngle+me.circumference%TAU$1;}ctx.beginPath();ctx.arc(arc.x,arc.y,arc.outerRadius,arc.startAngle,arc.endAngle);ctx.arc(arc.x,arc.y,arc.innerRadius,arc.endAngle,arc.startAngle,true);ctx.closePath();ctx.fill();if(options.borderWidth){drawBorder(ctx,me,arc);}ctx.restore();}}]);return Arc;}(Element$1);_defineProperty(Arc,'_type','arc');function _pointInLine(p1,p2,t,mode){return{x:p1.x+t*(p2.x-p1.x),y:p1.y+t*(p2.y-p1.y)};}function _steppedInterpolation(p1,p2,t,mode){return{x:p1.x+t*(p2.x-p1.x),y:mode==='middle'?t<0.5?p1.y:p2.y:mode==='after'?t<1?p1.y:p2.y:t>0?p2.y:p1.y};}function _bezierInterpolation(p1,p2,t,mode){var cp1={x:p1.controlPointNextX,y:p1.controlPointNextY};var cp2={x:p2.controlPointPreviousX,y:p2.controlPointPreviousY};var a=_pointInLine(p1,cp1,t);var b=_pointInLine(cp1,cp2,t);var c=_pointInLine(cp2,p2,t);var d=_pointInLine(a,b,t);var e=_pointInLine(b,c,t);return _pointInLine(d,e,t);}function propertyFn(property){if(property==='angle'){return{between:_angleBetween,compare:_angleDiff,normalize:_normalizeAngle};}return{between:function between(n,s,e){return n>=s&&n<=e;},compare:function compare(a,b){return a-b;},normalize:function normalize(x){return x;}};}function makeSubSegment(start,end,loop,count){return{start:start%count,end:end%count,loop:loop&&(end-start+1)%count===0};}function getSegment(segment,points,bounds){var property=bounds.property,startBound=bounds.start,endBound=bounds.end;var _propertyFn=propertyFn(property),between=_propertyFn.between,normalize=_propertyFn.normalize;var count=points.length;var start=segment.start,end=segment.end,loop=segment.loop;var i,ilen;if(loop){start+=count;end+=count;for(i=0,ilen=count;i<ilen;++i){if(!between(normalize(points[start%count][property]),startBound,endBound)){break;}start--;end--;}start%=count;end%=count;}if(end<start){end+=count;}return{start:start,end:end,loop:loop};}function _boundSegment(segment,points,bounds){if(!bounds){return[segment];}var property=bounds.property,startBound=bounds.start,endBound=bounds.end;var count=points.length;var _propertyFn2=propertyFn(property),compare=_propertyFn2.compare,between=_propertyFn2.between,normalize=_propertyFn2.normalize;var _getSegment=getSegment(segment,points,bounds),start=_getSegment.start,end=_getSegment.end,loop=_getSegment.loop;var result=[];var inside=false;var subStart=null;var i,value,point,prev;for(i=start;i<=end;++i){point=points[i%count];if(point.skip){continue;}value=normalize(point[property]);inside=between(value,startBound,endBound);if(subStart===null&&inside){subStart=i>start&&compare(value,startBound)>0?prev:i;}if(subStart!==null&&(!inside||compare(value,endBound)===0)){result.push(makeSubSegment(subStart,i,loop,count));subStart=null;}prev=i;}if(subStart!==null){result.push(makeSubSegment(subStart,end,loop,count));}return result;}function _boundSegments(line,bounds){var result=[];var segments=line.segments;for(var i=0;i<segments.length;i++){var sub=_boundSegment(segments[i],line.points,bounds);if(sub.length){result.push.apply(result,_toConsumableArray(sub));}}return result;}function findStartAndEnd(points,count,loop,spanGaps){var start=0;var end=count-1;if(loop&&!spanGaps){while(start<count&&!points[start].skip){start++;}}while(start<count&&points[start].skip){start++;}start%=count;if(loop){end+=start;}while(end>start&&points[end%count].skip){end--;}end%=count;return{start:start,end:end};}function solidSegments(points,start,max,loop){var count=points.length;var result=[];var last=start;var prev=points[start];var end;for(end=start+1;end<=max;++end){var cur=points[end%count];if(cur.skip||cur.stop){if(!prev.skip){loop=false;result.push({start:start%count,end:(end-1)%count,loop:loop});start=last=cur.stop?end:null;}}else{last=end;if(prev.skip){start=end;}}prev=cur;}if(last!==null){result.push({start:start%count,end:last%count,loop:loop});}return result;}function _computeSegments(line){var points=line.points;var spanGaps=line.options.spanGaps;var count=points.length;if(!count){return[];}var loop=!!line._loop;var _findStartAndEnd=findStartAndEnd(points,count,loop,spanGaps),start=_findStartAndEnd.start,end=_findStartAndEnd.end;if(spanGaps===true){return[{start:start,end:end,loop:loop}];}var max=end<start?end+count:end;var completeLoop=!!line._fullLoop&&start===0&&end===count-1;return solidSegments(points,start,max,completeLoop);}var defaultColor=defaults.color;defaults.set('elements',{line:{backgroundColor:defaultColor,borderCapStyle:'butt',borderColor:defaultColor,borderDash:[],borderDashOffset:0,borderJoinStyle:'miter',borderWidth:3,capBezierPoints:true,fill:true,tension:0.4}});function setStyle(ctx,vm){ctx.lineCap=vm.borderCapStyle;ctx.setLineDash(vm.borderDash);ctx.lineDashOffset=vm.borderDashOffset;ctx.lineJoin=vm.borderJoinStyle;ctx.lineWidth=vm.borderWidth;ctx.strokeStyle=vm.borderColor;}function lineTo(ctx,previous,target){ctx.lineTo(target.x,target.y);}function getLineMethod(options){if(options.stepped){return _steppedLineTo;}if(options.tension){return _bezierCurveTo;}return lineTo;}function pathSegment(ctx,line,segment,params){var start=segment.start,end=segment.end,loop=segment.loop;var points=line.points,options=line.options;var lineMethod=getLineMethod(options);var count=points.length;var _ref=params||{},_ref$move=_ref.move,move=_ref$move===void 0?true:_ref$move,reverse=_ref.reverse;var ilen=end<start?count+end-start:end-start;var i,point,prev;for(i=0;i<=ilen;++i){point=points[(start+(reverse?ilen-i:i))%count];if(point.skip){continue;}else if(move){ctx.moveTo(point.x,point.y);move=false;}else{lineMethod(ctx,prev,point,reverse,options.stepped);}prev=point;}if(loop){point=points[(start+(reverse?ilen:0))%count];lineMethod(ctx,prev,point,reverse,options.stepped);}return!!loop;}function fastPathSegment(ctx,line,segment,params){var points=line.points;var count=points.length;var start=segment.start,end=segment.end;var _ref2=params||{},_ref2$move=_ref2.move,move=_ref2$move===void 0?true:_ref2$move,reverse=_ref2.reverse;var ilen=end<start?count+end-start:end-start;var avgX=0;var countX=0;var i,point,prevX,minY,maxY,lastY;if(move){point=points[(start+(reverse?ilen:0))%count];ctx.moveTo(point.x,point.y);}for(i=0;i<=ilen;++i){point=points[(start+(reverse?ilen-i:i))%count];if(point.skip){continue;}var x=point.x;var y=point.y;var truncX=x|0;if(truncX===prevX){if(y<minY){minY=y;}else if(y>maxY){maxY=y;}avgX=(countX*avgX+x)/++countX;}else{if(minY!==maxY){ctx.lineTo(avgX,maxY);ctx.lineTo(avgX,minY);ctx.lineTo(avgX,lastY);}ctx.lineTo(x,y);prevX=truncX;countX=0;minY=maxY=y;}lastY=y;}}function _getSegmentMethod(line){var opts=line.options;var borderDash=opts.borderDash&&opts.borderDash.length;var useFastPath=!line._loop&&!opts.tension&&!opts.stepped&&!borderDash;return useFastPath?fastPathSegment:pathSegment;}function _getInterpolationMethod(options){if(options.stepped){return _steppedInterpolation;}if(options.tension){return _bezierInterpolation;}return _pointInLine;}var Line=function(_Element){_inherits(Line,_Element);function Line(cfg){var _this;_classCallCheck(this,Line);_this=_possibleConstructorReturn(this,_getPrototypeOf(Line).call(this));_this.options=undefined;_this._loop=undefined;_this._fullLoop=undefined;_this._controlPointsUpdated=undefined;_this._points=undefined;_this._segments=undefined;if(cfg){_extends(_assertThisInitialized(_this),cfg);}return _this;}_createClass(Line,[{key:'updateControlPoints',value:function updateControlPoints(chartArea){var me=this;if(me._controlPointsUpdated){return;}var options=me.options;if(options.tension&&!options.stepped){var loop=options.spanGaps?me._loop:me._fullLoop;_updateBezierControlPoints(me._points,options,chartArea,loop);}}},{key:'first',value:function first(){var segments=this.segments;var points=this.points;return segments.length&&points[segments[0].start];}},{key:'last',value:function last(){var segments=this.segments;var points=this.points;var count=segments.length;return count&&points[segments[count-1].end];}},{key:'interpolate',value:function interpolate(point,property){var me=this;var options=me.options;var value=point[property];var points=me.points;var segments=_boundSegments(me,{property:property,start:value,end:value});if(!segments.length){return;}var result=[];var _interpolate=_getInterpolationMethod(options);var i,ilen;for(i=0,ilen=segments.length;i<ilen;++i){var _segments$i=segments[i],start=_segments$i.start,end=_segments$i.end;var p1=points[start];var p2=points[end];if(p1===p2){result.push(p1);continue;}var t=Math.abs((value-p1[property])/(p2[property]-p1[property]));var interpolated=_interpolate(p1,p2,t,options.stepped);interpolated[property]=point[property];result.push(interpolated);}return result.length===1?result[0]:result;}},{key:'pathSegment',value:function pathSegment(ctx,segment,params){var segmentMethod=_getSegmentMethod(this);return segmentMethod(ctx,this,segment,params);}},{key:'path',value:function path(ctx){var me=this;var segments=me.segments;var ilen=segments.length;var segmentMethod=_getSegmentMethod(me);var loop=me._loop;for(var i=0;i<ilen;++i){loop&=segmentMethod(ctx,me,segments[i]);}return!!loop;}},{key:'draw',value:function draw(ctx){var me=this;if(!me.points.length){return;}ctx.save();setStyle(ctx,me.options);ctx.beginPath();if(me.path(ctx)){ctx.closePath();}ctx.stroke();ctx.restore();}},{key:'points',set:function set(points){this._points=points;delete this._segments;},get:function get(){return this._points;}},{key:'segments',get:function get(){return this._segments||(this._segments=_computeSegments(this));}}]);return Line;}(Element$1);_defineProperty(Line,'_type','line');var defaultColor$1=defaults.color;defaults.set('elements',{point:{backgroundColor:defaultColor$1,borderColor:defaultColor$1,borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:'circle',radius:3}});var Point=function(_Element){_inherits(Point,_Element);function Point(cfg){var _this;_classCallCheck(this,Point);_this=_possibleConstructorReturn(this,_getPrototypeOf(Point).call(this));_this.options=undefined;_this.skip=undefined;_this.stop=undefined;if(cfg){_extends(_assertThisInitialized(_this),cfg);}return _this;}_createClass(Point,[{key:'inRange',value:function inRange(mouseX,mouseY,useFinalPosition){var options=this.options;var _this$getProps=this.getProps(['x','y'],useFinalPosition),x=_this$getProps.x,y=_this$getProps.y;return Math.pow(mouseX-x,2)+Math.pow(mouseY-y,2)<Math.pow(options.hitRadius+options.radius,2);}},{key:'inXRange',value:function inXRange(mouseX,useFinalPosition){var options=this.options;var _this$getProps2=this.getProps(['x'],useFinalPosition),x=_this$getProps2.x;return Math.abs(mouseX-x)<options.radius+options.hitRadius;}},{key:'inYRange',value:function inYRange(mouseY,useFinalPosition){var options=this.options;var _this$getProps3=this.getProps(['x'],useFinalPosition),y=_this$getProps3.y;return Math.abs(mouseY-y)<options.radius+options.hitRadius;}},{key:'getCenterPoint',value:function getCenterPoint(useFinalPosition){var _this$getProps4=this.getProps(['x','y'],useFinalPosition),x=_this$getProps4.x,y=_this$getProps4.y;return{x:x,y:y};}},{key:'size',value:function size(){var options=this.options||{};var radius=Math.max(options.radius,options.hoverRadius)||0;var borderWidth=radius&&options.borderWidth||0;return(radius+borderWidth)*2;}},{key:'draw',value:function draw(ctx,chartArea){var me=this;var options=me.options;if(me.skip||options.radius<=0){return;}if(chartArea===undefined||_isPointInArea(me,chartArea)){ctx.strokeStyle=options.borderColor;ctx.lineWidth=options.borderWidth;ctx.fillStyle=options.backgroundColor;drawPoint(ctx,options,me.x,me.y);}}},{key:'getRange',value:function getRange(){var options=this.options||{};return options.radius+options.hitRadius;}}]);return Point;}(Element$1);_defineProperty(Point,'_type','point');var defaultColor$2=defaults.color;defaults.set('elements',{rectangle:{backgroundColor:defaultColor$2,borderColor:defaultColor$2,borderSkipped:'bottom',borderWidth:0}});function getBarBounds(bar,useFinalPosition){var _bar$getProps=bar.getProps(['x','y','base','width','height'],useFinalPosition),x=_bar$getProps.x,y=_bar$getProps.y,base=_bar$getProps.base,width=_bar$getProps.width,height=_bar$getProps.height;var left,right,top,bottom,half;if(bar.horizontal){half=height/2;left=Math.min(x,base);right=Math.max(x,base);top=y-half;bottom=y+half;}else{half=width/2;left=x-half;right=x+half;top=Math.min(y,base);bottom=Math.max(y,base);}return{left:left,top:top,right:right,bottom:bottom};}function swap(orig,v1,v2){return orig===v1?v2:orig===v2?v1:orig;}function parseBorderSkipped(bar){var edge=bar.options.borderSkipped;var res={};if(!edge){return res;}if(bar.horizontal){if(bar.base>bar.x){edge=swap(edge,'left','right');}}else if(bar.base<bar.y){edge=swap(edge,'bottom','top');}res[edge]=true;return res;}function skipOrLimit(skip,value,min,max){return skip?0:Math.max(Math.min(value,max),min);}function parseBorderWidth(bar,maxW,maxH){var value=bar.options.borderWidth;var skip=parseBorderSkipped(bar);var t,r,b,l;if(isObject(value)){t=+value.top||0;r=+value.right||0;b=+value.bottom||0;l=+value.left||0;}else{t=r=b=l=+value||0;}return{t:skipOrLimit(skip.top,t,0,maxH),r:skipOrLimit(skip.right,r,0,maxW),b:skipOrLimit(skip.bottom,b,0,maxH),l:skipOrLimit(skip.left,l,0,maxW)};}function boundingRects(bar){var bounds=getBarBounds(bar);var width=bounds.right-bounds.left;var height=bounds.bottom-bounds.top;var border=parseBorderWidth(bar,width/2,height/2);return{outer:{x:bounds.left,y:bounds.top,w:width,h:height},inner:{x:bounds.left+border.l,y:bounds.top+border.t,w:width-border.l-border.r,h:height-border.t-border.b}};}function _inRange(bar,x,y,useFinalPosition){var skipX=x===null;var skipY=y===null;var bounds=!bar||skipX&&skipY?false:getBarBounds(bar,useFinalPosition);return bounds&&(skipX||x>=bounds.left&&x<=bounds.right)&&(skipY||y>=bounds.top&&y<=bounds.bottom);}var Rectangle=function(_Element){_inherits(Rectangle,_Element);function Rectangle(cfg){var _this;_classCallCheck(this,Rectangle);_this=_possibleConstructorReturn(this,_getPrototypeOf(Rectangle).call(this));_this.options=undefined;_this.horizontal=undefined;_this.base=undefined;_this.width=undefined;_this.height=undefined;if(cfg){_extends(_assertThisInitialized(_this),cfg);}return _this;}_createClass(Rectangle,[{key:'draw',value:function draw(ctx){var options=this.options;var _boundingRects=boundingRects(this),inner=_boundingRects.inner,outer=_boundingRects.outer;ctx.save();if(outer.w!==inner.w||outer.h!==inner.h){ctx.beginPath();ctx.rect(outer.x,outer.y,outer.w,outer.h);ctx.clip();ctx.rect(inner.x,inner.y,inner.w,inner.h);ctx.fillStyle=options.borderColor;ctx.fill('evenodd');}ctx.fillStyle=options.backgroundColor;ctx.fillRect(inner.x,inner.y,inner.w,inner.h);ctx.restore();}},{key:'inRange',value:function inRange(mouseX,mouseY,useFinalPosition){return _inRange(this,mouseX,mouseY,useFinalPosition);}},{key:'inXRange',value:function inXRange(mouseX,useFinalPosition){return _inRange(this,mouseX,null,useFinalPosition);}},{key:'inYRange',value:function inYRange(mouseY,useFinalPosition){return _inRange(this,null,mouseY,useFinalPosition);}},{key:'getCenterPoint',value:function getCenterPoint(useFinalPosition){var _this$getProps=this.getProps(['x','y','base','horizontal',useFinalPosition]),x=_this$getProps.x,y=_this$getProps.y,base=_this$getProps.base,horizontal=_this$getProps.horizontal;return{x:horizontal?(x+base)/2:x,y:horizontal?y:(y+base)/2};}},{key:'getRange',value:function getRange(axis){return axis==='x'?this.width/2:this.height/2;}}]);return Rectangle;}(Element$1);_defineProperty(Rectangle,'_type','rectangle');var elements=/*#__PURE__*/Object.freeze({__proto__:null,Arc:Arc,Line:Line,Point:Point,Rectangle:Rectangle});defaults.set('bar',{hover:{mode:'index'},datasets:{categoryPercentage:0.8,barPercentage:0.9,animation:{numbers:{type:'number',properties:['x','y','base','width','height']}}},scales:{x:{type:'category',offset:true,gridLines:{offsetGridLines:true}},y:{type:'linear',beginAtZero:true}}});function computeMinSampleSize(scale,pixels){var min=scale._length;var prev,curr,i,ilen;for(i=1,ilen=pixels.length;i<ilen;++i){min=Math.min(min,Math.abs(pixels[i]-pixels[i-1]));}for(i=0,ilen=scale.ticks.length;i<ilen;++i){curr=scale.getPixelForTick(i);min=i>0?Math.min(min,Math.abs(curr-prev)):min;prev=curr;}return min;}function computeFitCategoryTraits(index,ruler,options){var thickness=options.barThickness;var count=ruler.stackCount;var curr=ruler.pixels[index];var min=isNullOrUndef(thickness)?computeMinSampleSize(ruler.scale,ruler.pixels):-1;var size,ratio;if(isNullOrUndef(thickness)){size=min*options.categoryPercentage;ratio=options.barPercentage;}else{size=thickness*count;ratio=1;}return{chunk:size/count,ratio:ratio,start:curr-size/2};}function computeFlexCategoryTraits(index,ruler,options){var pixels=ruler.pixels;var curr=pixels[index];var prev=index>0?pixels[index-1]:null;var next=index<pixels.length-1?pixels[index+1]:null;var percent=options.categoryPercentage;if(prev===null){prev=curr-(next===null?ruler.end-ruler.start:next-curr);}if(next===null){next=curr+curr-prev;}var start=curr-(curr-Math.min(prev,next))/2*percent;var size=Math.abs(next-prev)/2*percent;return{chunk:size/ruler.stackCount,ratio:options.barPercentage,start:start};}function parseFloatBar(arr,item,vScale,i){var startValue=vScale.parse(arr[0],i);var endValue=vScale.parse(arr[1],i);var min=Math.min(startValue,endValue);var max=Math.max(startValue,endValue);var barStart=min;var barEnd=max;if(Math.abs(min)>Math.abs(max)){barStart=max;barEnd=min;}item[vScale.axis]=barEnd;item._custom={barStart:barStart,barEnd:barEnd,start:startValue,end:endValue,min:min,max:max};}function parseArrayOrPrimitive(meta,data,start,count){var iScale=meta.iScale;var vScale=meta.vScale;var labels=iScale.getLabels();var singleScale=iScale===vScale;var parsed=[];var i,ilen,item,entry;for(i=start,ilen=start+count;i<ilen;++i){entry=data[i];item={};item[iScale.axis]=singleScale||iScale.parse(labels[i],i);if(isArray(entry)){parseFloatBar(entry,item,vScale,i);}else{item[vScale.axis]=vScale.parse(entry,i);}parsed.push(item);}return parsed;}function isFloatBar(custom){return custom&&custom.barStart!==undefined&&custom.barEnd!==undefined;}var BarController=function(_DatasetController){_inherits(BarController,_DatasetController);function BarController(){_classCallCheck(this,BarController);return _possibleConstructorReturn(this,_getPrototypeOf(BarController).apply(this,arguments));}_createClass(BarController,[{key:'parsePrimitiveData',value:function parsePrimitiveData(meta,data,start,count){return parseArrayOrPrimitive(meta,data,start,count);}},{key:'parseArrayData',value:function parseArrayData(meta,data,start,count){return parseArrayOrPrimitive(meta,data,start,count);}},{key:'parseObjectData',value:function parseObjectData(meta,data,start,count){var iScale=meta.iScale,vScale=meta.vScale;var vProp=vScale.axis;var parsed=[];var i,ilen,item,obj,value;for(i=start,ilen=start+count;i<ilen;++i){obj=data[i];item={};item[iScale.axis]=iScale.parseObject(obj,iScale.axis,i);value=obj[vProp];if(isArray(value)){parseFloatBar(value,item,vScale,i);}else{item[vScale.axis]=vScale.parseObject(obj,vProp,i);}parsed.push(item);}return parsed;}},{key:'getLabelAndValue',value:function getLabelAndValue(index){var me=this;var meta=me._cachedMeta;var iScale=meta.iScale,vScale=meta.vScale;var parsed=me.getParsed(index);var custom=parsed._custom;var value=isFloatBar(custom)?'['+custom.start+', '+custom.end+']':''+vScale.getLabelForValue(parsed[vScale.axis]);return{label:''+iScale.getLabelForValue(parsed[iScale.axis]),value:value};}},{key:'initialize',value:function initialize(){var me=this;_get(_getPrototypeOf(BarController.prototype),'initialize',this).call(this);var meta=me._cachedMeta;meta.stack=me.getDataset().stack;meta.bar=true;}},{key:'update',value:function update(mode){var me=this;var meta=me._cachedMeta;me.updateElements(meta.data,0,mode);}},{key:'updateElements',value:function updateElements(rectangles,start,mode){var me=this;var reset=mode==='reset';var vscale=me._cachedMeta.vScale;var base=vscale.getBasePixel();var horizontal=vscale.isHorizontal();var ruler=me._getRuler();var firstOpts=me.resolveDataElementOptions(start,mode);var sharedOptions=me.getSharedOptions(mode,rectangles[start],firstOpts);var includeOptions=me.includeOptions(mode,sharedOptions);var i;for(i=0;i<rectangles.length;i++){var index=start+i;var options=me.resolveDataElementOptions(index,mode);var vpixels=me._calculateBarValuePixels(index,options);var ipixels=me._calculateBarIndexPixels(index,ruler,options);var properties={horizontal:horizontal,base:reset?base:vpixels.base,x:horizontal?reset?base:vpixels.head:ipixels.center,y:horizontal?ipixels.center:reset?base:vpixels.head,height:horizontal?ipixels.size:undefined,width:horizontal?undefined:ipixels.size};if(includeOptions){properties.options=options;}me.updateElement(rectangles[i],index,properties,mode);}me.updateSharedOptions(sharedOptions,mode);}},{key:'_getStacks',value:function _getStacks(last){var me=this;var meta=me._cachedMeta;var iScale=meta.iScale;var metasets=iScale.getMatchingVisibleMetas(me._type);var stacked=iScale.options.stacked;var ilen=metasets.length;var stacks=[];var i,item;for(i=0;i<ilen;++i){item=metasets[i];if(stacked===false||stacks.indexOf(item.stack)===-1||stacked===undefined&&item.stack===undefined){stacks.push(item.stack);}if(item.index===last){break;}}if(!stacks.length){stacks.push(undefined);}return stacks;}},{key:'_getStackCount',value:function _getStackCount(){return this._getStacks().length;}},{key:'_getStackIndex',value:function _getStackIndex(datasetIndex,name){var stacks=this._getStacks(datasetIndex);var index=name!==undefined?stacks.indexOf(name):-1;return index===-1?stacks.length-1:index;}},{key:'_getRuler',value:function _getRuler(){var me=this;var meta=me._cachedMeta;var iScale=meta.iScale;var pixels=[];var i,ilen;for(i=0,ilen=meta.data.length;i<ilen;++i){pixels.push(iScale.getPixelForValue(me.getParsed(i)[iScale.axis]));}return{pixels:pixels,start:iScale._startPixel,end:iScale._endPixel,stackCount:me._getStackCount(),scale:iScale};}},{key:'_calculateBarValuePixels',value:function _calculateBarValuePixels(index,options){var me=this;var meta=me._cachedMeta;var vScale=meta.vScale;var minBarLength=options.minBarLength;var parsed=me.getParsed(index);var custom=parsed._custom;var value=parsed[vScale.axis];var start=0;var length=meta._stacked?me.applyStack(vScale,parsed):value;var head,size;if(length!==value){start=length-value;length=value;}if(isFloatBar(custom)){value=custom.barStart;length=custom.barEnd-custom.barStart;if(value!==0&&sign(value)!==sign(custom.barEnd)){start=0;}start+=value;}var base=_limitValue(vScale.getPixelForValue(start),vScale._startPixel-10,vScale._endPixel+10);head=vScale.getPixelForValue(start+length);size=head-base;if(minBarLength!==undefined&&Math.abs(size)<minBarLength){size=size<0?-minBarLength:minBarLength;head=base+size;}return{size:size,base:base,head:head,center:head+size/2};}},{key:'_calculateBarIndexPixels',value:function _calculateBarIndexPixels(index,ruler,options){var me=this;var range=options.barThickness==='flex'?computeFlexCategoryTraits(index,ruler,options):computeFitCategoryTraits(index,ruler,options);var stackIndex=me._getStackIndex(me.index,me._cachedMeta.stack);var center=range.start+range.chunk*stackIndex+range.chunk/2;var size=Math.min(valueOrDefault(options.maxBarThickness,Infinity),range.chunk*range.ratio);return{base:center-size/2,head:center+size/2,center:center,size:size};}},{key:'draw',value:function draw(){var me=this;var chart=me.chart;var meta=me._cachedMeta;var vScale=meta.vScale;var rects=meta.data;var ilen=rects.length;var i=0;clipArea(chart.ctx,chart.chartArea);for(;i<ilen;++i){if(!isNaN(me.getParsed(i)[vScale.axis])){rects[i].draw(me._ctx);}}unclipArea(chart.ctx);}}]);return BarController;}(DatasetController);BarController.prototype.dataElementType=Rectangle;BarController.prototype.dataElementOptions=['backgroundColor','borderColor','borderSkipped','borderWidth','barPercentage','barThickness','categoryPercentage','maxBarThickness','minBarLength'];defaults.set('bubble',{animation:{numbers:{properties:['x','y','borderWidth','radius']}},scales:{x:{type:'linear'},y:{type:'linear'}},tooltips:{callbacks:{title:function title(){return'';}}}});var BubbleController=function(_DatasetController){_inherits(BubbleController,_DatasetController);function BubbleController(){_classCallCheck(this,BubbleController);return _possibleConstructorReturn(this,_getPrototypeOf(BubbleController).apply(this,arguments));}_createClass(BubbleController,[{key:'parseObjectData',value:function parseObjectData(meta,data,start,count){var xScale=meta.xScale,yScale=meta.yScale;var parsed=[];var i,ilen,item;for(i=start,ilen=start+count;i<ilen;++i){item=data[i];parsed.push({x:xScale.parseObject(item,'x',i),y:yScale.parseObject(item,'y',i),_custom:item&&item.r&&+item.r});}return parsed;}},{key:'getMaxOverflow',value:function getMaxOverflow(){var me=this;var meta=me._cachedMeta;var i=(meta.data||[]).length-1;var max=0;for(;i>=0;--i){max=Math.max(max,me.getStyle(i,true).radius);}return max>0&&max;}},{key:'getLabelAndValue',value:function getLabelAndValue(index){var me=this;var meta=me._cachedMeta;var xScale=meta.xScale,yScale=meta.yScale;var parsed=me.getParsed(index);var x=xScale.getLabelForValue(parsed.x);var y=yScale.getLabelForValue(parsed.y);var r=parsed._custom;return{label:meta.label,value:'('+x+', '+y+(r?', '+r:'')+')'};}},{key:'update',value:function update(mode){var me=this;var points=me._cachedMeta.data;me.updateElements(points,0,mode);}},{key:'updateElements',value:function updateElements(points,start,mode){var me=this;var reset=mode==='reset';var _me$_cachedMeta=me._cachedMeta,xScale=_me$_cachedMeta.xScale,yScale=_me$_cachedMeta.yScale;var firstOpts=me.resolveDataElementOptions(start,mode);var sharedOptions=me.getSharedOptions(mode,points[start],firstOpts);var includeOptions=me.includeOptions(mode,sharedOptions);for(var i=0;i<points.length;i++){var point=points[i];var index=start+i;var parsed=!reset&&me.getParsed(index);var x=reset?xScale.getPixelForDecimal(0.5):xScale.getPixelForValue(parsed.x);var y=reset?yScale.getBasePixel():yScale.getPixelForValue(parsed.y);var properties={x:x,y:y,skip:isNaN(x)||isNaN(y)};if(includeOptions){properties.options=me.resolveDataElementOptions(i,mode);if(reset){properties.options.radius=0;}}me.updateElement(point,index,properties,mode);}me.updateSharedOptions(sharedOptions,mode);}},{key:'resolveDataElementOptions',value:function resolveDataElementOptions(index,mode){var me=this;var chart=me.chart;var dataset=me.getDataset();var parsed=me.getParsed(index);var values=_get(_getPrototypeOf(BubbleController.prototype),'resolveDataElementOptions',this).call(this,index,mode);var context={chart:chart,dataIndex:index,dataset:dataset,datasetIndex:me.index};if(values.$shared){values=_extends({},values,{$shared:false});}if(mode!=='active'){values.radius=0;}values.radius+=resolve([parsed&&parsed._custom,me._config.radius,chart.options.elements.point.radius],context,index);return values;}}]);return BubbleController;}(DatasetController);BubbleController.prototype.dataElementType=Point;BubbleController.prototype.dataElementOptions=['backgroundColor','borderColor','borderWidth','hitRadius','radius','pointStyle','rotation'];var PI$2=Math.PI;var DOUBLE_PI$1=PI$2*2;var HALF_PI$1=PI$2/2;defaults.set('doughnut',{animation:{numbers:{type:'number',properties:['circumference','endAngle','innerRadius','outerRadius','startAngle','x','y']},animateRotate:true,animateScale:false},legend:{labels:{generateLabels:function generateLabels(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var style=meta.controller.getStyle(i);return{text:label,fillStyle:style.backgroundColor,strokeStyle:style.borderColor,lineWidth:style.borderWidth,hidden:!chart.getDataVisibility(i),index:i};});}return[];}},onClick:function onClick(e,legendItem){this.chart.toggleDataVisibility(legendItem.index);this.chart.update();}},cutoutPercentage:50,rotation:-HALF_PI$1,circumference:DOUBLE_PI$1,tooltips:{callbacks:{title:function title(){return'';},label:function label(tooltipItem,data){var dataLabel=data.labels[tooltipItem.index];var value=': '+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];if(isArray(dataLabel)){dataLabel=dataLabel.slice();dataLabel[0]+=value;}else{dataLabel+=value;}return dataLabel;}}}});function getRatioAndOffset(rotation,circumference,cutout){var ratioX=1;var ratioY=1;var offsetX=0;var offsetY=0;if(circumference<DOUBLE_PI$1){var startAngle=rotation%DOUBLE_PI$1;startAngle+=startAngle>=PI$2?-DOUBLE_PI$1:startAngle<-PI$2?DOUBLE_PI$1:0;var endAngle=startAngle+circumference;var startX=Math.cos(startAngle);var startY=Math.sin(startAngle);var endX=Math.cos(endAngle);var endY=Math.sin(endAngle);var contains0=startAngle<=0&&endAngle>=0||endAngle>=DOUBLE_PI$1;var contains90=startAngle<=HALF_PI$1&&endAngle>=HALF_PI$1||endAngle>=DOUBLE_PI$1+HALF_PI$1;var contains180=startAngle===-PI$2||endAngle>=PI$2;var contains270=startAngle<=-HALF_PI$1&&endAngle>=-HALF_PI$1||endAngle>=PI$2+HALF_PI$1;var minX=contains180?-1:Math.min(startX,startX*cutout,endX,endX*cutout);var minY=contains270?-1:Math.min(startY,startY*cutout,endY,endY*cutout);var maxX=contains0?1:Math.max(startX,startX*cutout,endX,endX*cutout);var maxY=contains90?1:Math.max(startY,startY*cutout,endY,endY*cutout);ratioX=(maxX-minX)/2;ratioY=(maxY-minY)/2;offsetX=-(maxX+minX)/2;offsetY=-(maxY+minY)/2;}return{ratioX:ratioX,ratioY:ratioY,offsetX:offsetX,offsetY:offsetY};}var DoughnutController=function(_DatasetController){_inherits(DoughnutController,_DatasetController);function DoughnutController(chart,datasetIndex){var _this;_classCallCheck(this,DoughnutController);_this=_possibleConstructorReturn(this,_getPrototypeOf(DoughnutController).call(this,chart,datasetIndex));_this.innerRadius=undefined;_this.outerRadius=undefined;_this.offsetX=undefined;_this.offsetY=undefined;return _this;}_createClass(DoughnutController,[{key:'linkScales',value:function linkScales(){}},{key:'parse',value:function parse(start,count){var data=this.getDataset().data;var meta=this._cachedMeta;var i,ilen;for(i=start,ilen=start+count;i<ilen;++i){meta._parsed[i]=+data[i];}}},{key:'getRingIndex',value:function getRingIndex(datasetIndex){var ringIndex=0;for(var j=0;j<datasetIndex;++j){if(this.chart.isDatasetVisible(j)){++ringIndex;}}return ringIndex;}},{key:'update',value:function update(mode){var me=this;var chart=me.chart;var chartArea=chart.chartArea,options=chart.options;var meta=me._cachedMeta;var arcs=meta.data;var cutout=options.cutoutPercentage/100||0;var chartWeight=me._getRingWeight(me.index);var _getRatioAndOffset=getRatioAndOffset(options.rotation,options.circumference,cutout),ratioX=_getRatioAndOffset.ratioX,ratioY=_getRatioAndOffset.ratioY,offsetX=_getRatioAndOffset.offsetX,offsetY=_getRatioAndOffset.offsetY;var borderWidth=me.getMaxBorderWidth();var maxWidth=(chartArea.right-chartArea.left-borderWidth)/ratioX;var maxHeight=(chartArea.bottom-chartArea.top-borderWidth)/ratioY;var outerRadius=Math.max(Math.min(maxWidth,maxHeight)/2,0);var innerRadius=Math.max(outerRadius*cutout,0);var radiusLength=(outerRadius-innerRadius)/me._getVisibleDatasetWeightTotal();me.offsetX=offsetX*outerRadius;me.offsetY=offsetY*outerRadius;meta.total=me.calculateTotal();me.outerRadius=outerRadius-radiusLength*me._getRingWeightOffset(me.index);me.innerRadius=Math.max(me.outerRadius-radiusLength*chartWeight,0);me.updateElements(arcs,0,mode);}},{key:'_circumference',value:function _circumference(i,reset){var me=this;var opts=me.chart.options;var meta=me._cachedMeta;return reset&&opts.animation.animateRotate?0:this.chart.getDataVisibility(i)?me.calculateCircumference(meta._parsed[i]*opts.circumference/DOUBLE_PI$1):0;}},{key:'updateElements',value:function updateElements(arcs,start,mode){var me=this;var reset=mode==='reset';var chart=me.chart;var chartArea=chart.chartArea;var opts=chart.options;var animationOpts=opts.animation;var centerX=(chartArea.left+chartArea.right)/2;var centerY=(chartArea.top+chartArea.bottom)/2;var animateScale=reset&&animationOpts.animateScale;var innerRadius=animateScale?0:me.innerRadius;var outerRadius=animateScale?0:me.outerRadius;var firstOpts=me.resolveDataElementOptions(start,mode);var sharedOptions=me.getSharedOptions(mode,arcs[start],firstOpts);var includeOptions=me.includeOptions(mode,sharedOptions);var startAngle=opts.rotation;var i;for(i=0;i<start;++i){startAngle+=me._circumference(i,reset);}for(i=0;i<arcs.length;++i){var index=start+i;var circumference=me._circumference(index,reset);var arc=arcs[i];var properties={x:centerX+me.offsetX,y:centerY+me.offsetY,startAngle:startAngle,endAngle:startAngle+circumference,circumference:circumference,outerRadius:outerRadius,innerRadius:innerRadius};if(includeOptions){properties.options=me.resolveDataElementOptions(index,mode);}startAngle+=circumference;me.updateElement(arc,index,properties,mode);}me.updateSharedOptions(sharedOptions,mode);}},{key:'calculateTotal',value:function calculateTotal(){var meta=this._cachedMeta;var metaData=meta.data;var total=0;var i;for(i=0;i<metaData.length;i++){var value=meta._parsed[i];if(!isNaN(value)&&this.chart.getDataVisibility(i)){total+=Math.abs(value);}}return total;}},{key:'calculateCircumference',value:function calculateCircumference(value){var total=this._cachedMeta.total;if(total>0&&!isNaN(value)){return DOUBLE_PI$1*(Math.abs(value)/total);}return 0;}},{key:'getMaxBorderWidth',value:function getMaxBorderWidth(arcs){var me=this;var max=0;var chart=me.chart;var i,ilen,meta,controller,options;if(!arcs){for(i=0,ilen=chart.data.datasets.length;i<ilen;++i){if(chart.isDatasetVisible(i)){meta=chart.getDatasetMeta(i);arcs=meta.data;controller=meta.controller;if(controller!==me){controller.configure();}break;}}}if(!arcs){return 0;}for(i=0,ilen=arcs.length;i<ilen;++i){options=controller.resolveDataElementOptions(i);if(options.borderAlign!=='inner'){max=Math.max(max,options.borderWidth||0,options.hoverBorderWidth||0);}}return max;}},{key:'_getRingWeightOffset',value:function _getRingWeightOffset(datasetIndex){var ringWeightOffset=0;for(var i=0;i<datasetIndex;++i){if(this.chart.isDatasetVisible(i)){ringWeightOffset+=this._getRingWeight(i);}}return ringWeightOffset;}},{key:'_getRingWeight',value:function _getRingWeight(datasetIndex){return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight,1),0);}},{key:'_getVisibleDatasetWeightTotal',value:function _getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1;}}]);return DoughnutController;}(DatasetController);DoughnutController.prototype.dataElementType=Arc;DoughnutController.prototype.dataElementOptions=['backgroundColor','borderColor','borderWidth','borderAlign','hoverBackgroundColor','hoverBorderColor','hoverBorderWidth'];defaults.set('horizontalBar',{hover:{mode:'index',axis:'y'},scales:{x:{type:'linear',beginAtZero:true},y:{type:'category',offset:true,gridLines:{offsetGridLines:true}}},datasets:{categoryPercentage:0.8,barPercentage:0.9},elements:{rectangle:{borderSkipped:'left'}},tooltips:{mode:'index',axis:'y'}});var HorizontalBarController=function(_BarController){_inherits(HorizontalBarController,_BarController);function HorizontalBarController(){_classCallCheck(this,HorizontalBarController);return _possibleConstructorReturn(this,_getPrototypeOf(HorizontalBarController).apply(this,arguments));}_createClass(HorizontalBarController,[{key:'getValueScaleId',value:function getValueScaleId(){return this._cachedMeta.xAxisID;}},{key:'getIndexScaleId',value:function getIndexScaleId(){return this._cachedMeta.yAxisID;}}]);return HorizontalBarController;}(BarController);defaults.set('line',{showLines:true,spanGaps:false,hover:{mode:'index'},scales:{x:{type:'category'},y:{type:'linear'}}});var LineController=function(_DatasetController){_inherits(LineController,_DatasetController);function LineController(chart,datasetIndex){var _this;_classCallCheck(this,LineController);_this=_possibleConstructorReturn(this,_getPrototypeOf(LineController).call(this,chart,datasetIndex));_this._showLine=false;return _this;}_createClass(LineController,[{key:'update',value:function update(mode){var me=this;var meta=me._cachedMeta;var line=meta.dataset;var points=meta.data||[];var options=me.chart.options;var config=me._config;var showLine=me._showLine=valueOrDefault(config.showLine,options.showLines);if(showLine&&mode!=='resize'){var properties={points:points,options:me.resolveDatasetElementOptions()};me.updateElement(line,undefined,properties,mode);}me.updateElements(points,0,mode);}},{key:'updateElements',value:function updateElements(points,start,mode){var me=this;var reset=mode==='reset';var _me$_cachedMeta=me._cachedMeta,xScale=_me$_cachedMeta.xScale,yScale=_me$_cachedMeta.yScale,_stacked=_me$_cachedMeta._stacked;var firstOpts=me.resolveDataElementOptions(start,mode);var sharedOptions=me.getSharedOptions(mode,points[start],firstOpts);var includeOptions=me.includeOptions(mode,sharedOptions);var spanGaps=valueOrDefault(me._config.spanGaps,me.chart.options.spanGaps);var maxGapLength=isNumber(spanGaps)?spanGaps:Number.POSITIVE_INFINITY;var prevParsed;for(var i=0;i<points.length;++i){var index=start+i;var point=points[i];var parsed=me.getParsed(index);var x=xScale.getPixelForValue(parsed.x);var y=reset?yScale.getBasePixel():yScale.getPixelForValue(_stacked?me.applyStack(yScale,parsed):parsed.y);var properties={x:x,y:y,skip:isNaN(x)||isNaN(y),stop:i>0&&parsed.x-prevParsed.x>maxGapLength};if(includeOptions){properties.options=me.resolveDataElementOptions(index,mode);}me.updateElement(point,index,properties,mode);prevParsed=parsed;}me.updateSharedOptions(sharedOptions,mode);}},{key:'resolveDatasetElementOptions',value:function resolveDatasetElementOptions(active){var me=this;var config=me._config;var options=me.chart.options;var lineOptions=options.elements.line;var values=_get(_getPrototypeOf(LineController.prototype),'resolveDatasetElementOptions',this).call(this,active);values.spanGaps=valueOrDefault(config.spanGaps,options.spanGaps);values.tension=valueOrDefault(config.lineTension,lineOptions.tension);values.stepped=resolve([config.stepped,lineOptions.stepped]);return values;}},{key:'getMaxOverflow',value:function getMaxOverflow(){var me=this;var meta=me._cachedMeta;var border=me._showLine&&meta.dataset.options.borderWidth||0;var data=meta.data||[];if(!data.length){return border;}var firstPoint=data[0].size();var lastPoint=data[data.length-1].size();return Math.max(border,firstPoint,lastPoint)/2;}},{key:'draw',value:function draw(){var me=this;var ctx=me._ctx;var chart=me.chart;var meta=me._cachedMeta;var points=meta.data||[];var area=chart.chartArea;var active=[];var ilen=points.length;var i,point;if(me._showLine){meta.dataset.draw(ctx,area);}for(i=0;i<ilen;++i){point=points[i];if(point.active){active.push(point);}else{point.draw(ctx,area);}}for(i=0,ilen=active.length;i<ilen;++i){active[i].draw(ctx,area);}}}]);return LineController;}(DatasetController);LineController.prototype.datasetElementType=Line;LineController.prototype.dataElementType=Point;LineController.prototype.datasetElementOptions=['backgroundColor','borderCapStyle','borderColor','borderDash','borderDashOffset','borderJoinStyle','borderWidth','capBezierPoints','cubicInterpolationMode','fill'];LineController.prototype.dataElementOptions={backgroundColor:'pointBackgroundColor',borderColor:'pointBorderColor',borderWidth:'pointBorderWidth',hitRadius:'pointHitRadius',hoverHitRadius:'pointHitRadius',hoverBackgroundColor:'pointHoverBackgroundColor',hoverBorderColor:'pointHoverBorderColor',hoverBorderWidth:'pointHoverBorderWidth',hoverRadius:'pointHoverRadius',pointStyle:'pointStyle',radius:'pointRadius',rotation:'pointRotation'};defaults.set('polarArea',{animation:{numbers:{type:'number',properties:['x','y','startAngle','endAngle','innerRadius','outerRadius']},animateRotate:true,animateScale:true},scales:{r:{type:'radialLinear',angleLines:{display:false},beginAtZero:true,gridLines:{circular:true},pointLabels:{display:false}}},startAngle:0,legend:{labels:{generateLabels:function generateLabels(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var style=meta.controller.getStyle(i);return{text:label,fillStyle:style.backgroundColor,strokeStyle:style.borderColor,lineWidth:style.borderWidth,hidden:!chart.getDataVisibility(i),index:i};});}return[];}},onClick:function onClick(e,legendItem){this.chart.toggleDataVisibility(legendItem.index);this.chart.update();}},tooltips:{callbacks:{title:function title(){return'';},label:function label(item,data){return data.labels[item.index]+': '+item.value;}}}});function getStartAngleRadians(deg){return toRadians(deg)-0.5*Math.PI;}var PolarAreaController=function(_DatasetController){_inherits(PolarAreaController,_DatasetController);function PolarAreaController(chart,datasetIndex){var _this;_classCallCheck(this,PolarAreaController);_this=_possibleConstructorReturn(this,_getPrototypeOf(PolarAreaController).call(this,chart,datasetIndex));_this.innerRadius=undefined;_this.outerRadius=undefined;return _this;}_createClass(PolarAreaController,[{key:'getIndexScaleId',value:function getIndexScaleId(){return this._cachedMeta.rAxisID;}},{key:'getValueScaleId',value:function getValueScaleId(){return this._cachedMeta.rAxisID;}},{key:'update',value:function update(mode){var arcs=this._cachedMeta.data;this._updateRadius();this.updateElements(arcs,0,mode);}},{key:'_updateRadius',value:function _updateRadius(){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var opts=chart.options;var minSize=Math.min(chartArea.right-chartArea.left,chartArea.bottom-chartArea.top);var outerRadius=Math.max(minSize/2,0);var innerRadius=Math.max(opts.cutoutPercentage?outerRadius/100*opts.cutoutPercentage:1,0);var radiusLength=(outerRadius-innerRadius)/chart.getVisibleDatasetCount();me.outerRadius=outerRadius-radiusLength*me.index;me.innerRadius=me.outerRadius-radiusLength;}},{key:'updateElements',value:function updateElements(arcs,start,mode){var me=this;var reset=mode==='reset';var chart=me.chart;var dataset=me.getDataset();var opts=chart.options;var animationOpts=opts.animation;var scale=chart.scales.r;var centerX=scale.xCenter;var centerY=scale.yCenter;var datasetStartAngle=getStartAngleRadians(opts.startAngle);var angle=datasetStartAngle;var i;me._cachedMeta.count=me.countVisibleElements();for(i=0;i<start;++i){angle+=me._computeAngle(i);}for(i=0;i<arcs.length;i++){var arc=arcs[i];var index=start+i;var startAngle=angle;var endAngle=angle+me._computeAngle(index);var outerRadius=this.chart.getDataVisibility(index)?scale.getDistanceFromCenterForValue(dataset.data[index]):0;angle=endAngle;if(reset){if(animationOpts.animateScale){outerRadius=0;}if(animationOpts.animateRotate){startAngle=datasetStartAngle;endAngle=datasetStartAngle;}}var properties={x:centerX,y:centerY,innerRadius:0,outerRadius:outerRadius,startAngle:startAngle,endAngle:endAngle,options:me.resolveDataElementOptions(index)};me.updateElement(arc,index,properties,mode);}}},{key:'countVisibleElements',value:function countVisibleElements(){var _this2=this;var dataset=this.getDataset();var meta=this._cachedMeta;var count=0;meta.data.forEach(function(element,index){if(!isNaN(dataset.data[index])&&_this2.chart.getDataVisibility(index)){count++;}});return count;}},{key:'_computeAngle',value:function _computeAngle(index){var me=this;var meta=me._cachedMeta;var count=meta.count;var dataset=me.getDataset();if(isNaN(dataset.data[index])||!this.chart.getDataVisibility(index)){return 0;}var context={chart:me.chart,dataIndex:index,dataset:dataset,datasetIndex:me.index};return resolve([me.chart.options.elements.arc.angle,2*Math.PI/count],context,index);}}]);return PolarAreaController;}(DatasetController);PolarAreaController.prototype.dataElementType=Arc;PolarAreaController.prototype.dataElementOptions=['backgroundColor','borderColor','borderWidth','borderAlign','hoverBackgroundColor','hoverBorderColor','hoverBorderWidth'];defaults.set('pie',clone(defaults.doughnut));defaults.set('pie',{cutoutPercentage:0});defaults.set('radar',{spanGaps:false,scales:{r:{type:'radialLinear'}},elements:{line:{tension:0}}});var RadarController=function(_DatasetController){_inherits(RadarController,_DatasetController);function RadarController(){_classCallCheck(this,RadarController);return _possibleConstructorReturn(this,_getPrototypeOf(RadarController).apply(this,arguments));}_createClass(RadarController,[{key:'getIndexScaleId',value:function getIndexScaleId(){return this._cachedMeta.rAxisID;}},{key:'getValueScaleId',value:function getValueScaleId(){return this._cachedMeta.rAxisID;}},{key:'getLabelAndValue',value:function getLabelAndValue(index){var me=this;var vScale=me._cachedMeta.vScale;var parsed=me.getParsed(index);return{label:vScale.getLabels()[index],value:''+vScale.getLabelForValue(parsed[vScale.axis])};}},{key:'update',value:function update(mode){var me=this;var meta=me._cachedMeta;var line=meta.dataset;var points=meta.data||[];var labels=meta.iScale.getLabels();var properties={points:points,_loop:true,_fullLoop:labels.length===points.length,options:me.resolveDatasetElementOptions()};me.updateElement(line,undefined,properties,mode);me.updateElements(points,0,mode);line.updateControlPoints(me.chart.chartArea);}},{key:'updateElements',value:function updateElements(points,start,mode){var me=this;var dataset=me.getDataset();var scale=me.chart.scales.r;var reset=mode==='reset';var i;for(i=0;i<points.length;i++){var point=points[i];var index=start+i;var options=me.resolveDataElementOptions(index);var pointPosition=scale.getPointPositionForValue(index,dataset.data[index]);var x=reset?scale.xCenter:pointPosition.x;var y=reset?scale.yCenter:pointPosition.y;var properties={x:x,y:y,angle:pointPosition.angle,skip:isNaN(x)||isNaN(y),options:options};me.updateElement(point,index,properties,mode);}}},{key:'resolveDatasetElementOptions',value:function resolveDatasetElementOptions(active){var me=this;var config=me._config;var options=me.chart.options;var values=_get(_getPrototypeOf(RadarController.prototype),'resolveDatasetElementOptions',this).call(this,active);values.spanGaps=valueOrDefault(config.spanGaps,options.spanGaps);values.tension=valueOrDefault(config.lineTension,options.elements.line.tension);return values;}}]);return RadarController;}(DatasetController);RadarController.prototype.datasetElementType=Line;RadarController.prototype.dataElementType=Point;RadarController.prototype.datasetElementOptions=['backgroundColor','borderColor','borderCapStyle','borderDash','borderDashOffset','borderJoinStyle','borderWidth','fill'];RadarController.prototype.dataElementOptions={backgroundColor:'pointBackgroundColor',borderColor:'pointBorderColor',borderWidth:'pointBorderWidth',hitRadius:'pointHitRadius',hoverBackgroundColor:'pointHoverBackgroundColor',hoverBorderColor:'pointHoverBorderColor',hoverBorderWidth:'pointHoverBorderWidth',hoverRadius:'pointHoverRadius',pointStyle:'pointStyle',radius:'pointRadius',rotation:'pointRotation'};defaults.set('scatter',{scales:{x:{type:'linear'},y:{type:'linear'}},datasets:{showLine:false},tooltips:{callbacks:{title:function title(){return'';},label:function label(item){return'('+item.label+', '+item.value+')';}}}});var controllers={bar:BarController,bubble:BubbleController,doughnut:DoughnutController,horizontalBar:HorizontalBarController,line:LineController,polarArea:PolarAreaController,pie:DoughnutController,radar:RadarController,scatter:LineController};function _lookup(table,value){var hi=table.length-1;var lo=0;var mid;while(hi-lo>1){mid=lo+hi>>1;if(table[mid]<value){lo=mid;}else{hi=mid;}}return{lo:lo,hi:hi};}function _lookupByKey(table,key,value){var hi=table.length-1;var lo=0;var mid;while(hi-lo>1){mid=lo+hi>>1;if(table[mid][key]<value){lo=mid;}else{hi=mid;}}return{lo:lo,hi:hi};}function _rlookupByKey(table,key,value){var hi=table.length-1;var lo=0;var mid;while(hi-lo>1){mid=lo+hi>>1;if(table[mid][key]<value){hi=mid;}else{lo=mid;}}return{lo:lo,hi:hi};}function getRelativePosition$1(e,chart){if('native'in e){return{x:e.x,y:e.y};}return helpers.dom.getRelativePosition(e,chart);}function evaluateAllVisibleItems(chart,handler){var metasets=chart.getSortedVisibleDatasetMetas();var index,data,element;for(var i=0,ilen=metasets.length;i<ilen;++i){var _metasets$i=metasets[i];index=_metasets$i.index;data=_metasets$i.data;for(var j=0,jlen=data.length;j<jlen;++j){element=data[j];if(!element.skip){handler(element,index,j);}}}}function binarySearch(metaset,axis,value,intersect){var controller=metaset.controller,data=metaset.data,_sorted=metaset._sorted;var iScale=controller._cachedMeta.iScale;if(iScale&&axis===iScale.axis&&_sorted&&data.length){var lookupMethod=iScale._reversePixels?_rlookupByKey:_lookupByKey;if(!intersect){return lookupMethod(data,axis,value);}else if(controller._sharedOptions){var el=data[0];var range=typeof el.getRange==='function'&&el.getRange(axis);if(range){var start=lookupMethod(data,axis,value-range);var end=lookupMethod(data,axis,value+range);return{lo:start.lo,hi:end.hi};}}}return{lo:0,hi:data.length-1};}function optimizedEvaluateItems(chart,axis,position,handler,intersect){var metasets=chart.getSortedVisibleDatasetMetas();var value=position[axis];for(var i=0,ilen=metasets.length;i<ilen;++i){var _metasets$i2=metasets[i],index=_metasets$i2.index,data=_metasets$i2.data;var _binarySearch=binarySearch(metasets[i],axis,value,intersect),lo=_binarySearch.lo,hi=_binarySearch.hi;for(var j=lo;j<=hi;++j){var element=data[j];if(!element.skip){handler(element,index,j);}}}}function getDistanceMetricForAxis(axis){var useX=axis.indexOf('x')!==-1;var useY=axis.indexOf('y')!==-1;return function(pt1,pt2){var deltaX=useX?Math.abs(pt1.x-pt2.x):0;var deltaY=useY?Math.abs(pt1.y-pt2.y):0;return Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2));};}function getIntersectItems(chart,position,axis,useFinalPosition){var items=[];if(!_isPointInArea(position,chart.chartArea)){return items;}var evaluationFunc=function evaluationFunc(element,datasetIndex,index){if(element.inRange(position.x,position.y,useFinalPosition)){items.push({element:element,datasetIndex:datasetIndex,index:index});}};optimizedEvaluateItems(chart,axis,position,evaluationFunc,true);return items;}function getNearestItems(chart,position,axis,intersect,useFinalPosition){var distanceMetric=getDistanceMetricForAxis(axis);var minDistance=Number.POSITIVE_INFINITY;var items=[];if(!_isPointInArea(position,chart.chartArea)){return items;}var evaluationFunc=function evaluationFunc(element,datasetIndex,index){if(intersect&&!element.inRange(position.x,position.y,useFinalPosition)){return;}var center=element.getCenterPoint(useFinalPosition);var distance=distanceMetric(position,center);if(distance<minDistance){items=[{element:element,datasetIndex:datasetIndex,index:index}];minDistance=distance;}else if(distance===minDistance){items.push({element:element,datasetIndex:datasetIndex,index:index});}};optimizedEvaluateItems(chart,axis,position,evaluationFunc);return items;}var Interaction={modes:{index:function index(chart,e,options,useFinalPosition){var position=getRelativePosition$1(e,chart);var axis=options.axis||'x';var items=options.intersect?getIntersectItems(chart,position,axis,useFinalPosition):getNearestItems(chart,position,axis,false,useFinalPosition);var elements=[];if(!items.length){return[];}chart.getSortedVisibleDatasetMetas().forEach(function(meta){var index=items[0].index;var element=meta.data[index];if(element&&!element.skip){elements.push({element:element,datasetIndex:meta.index,index:index});}});return elements;},dataset:function dataset(chart,e,options,useFinalPosition){var position=getRelativePosition$1(e,chart);var axis=options.axis||'xy';var items=options.intersect?getIntersectItems(chart,position,axis,useFinalPosition):getNearestItems(chart,position,axis,false,useFinalPosition);if(items.length>0){var datasetIndex=items[0].datasetIndex;var data=chart.getDatasetMeta(datasetIndex).data;items=[];for(var i=0;i<data.length;++i){items.push({element:data[i],datasetIndex:datasetIndex,index:i});}}return items;},point:function point(chart,e,options,useFinalPosition){var position=getRelativePosition$1(e,chart);var axis=options.axis||'xy';return getIntersectItems(chart,position,axis,useFinalPosition);},nearest:function nearest(chart,e,options,useFinalPosition){var position=getRelativePosition$1(e,chart);var axis=options.axis||'xy';return getNearestItems(chart,position,axis,options.intersect,useFinalPosition);},x:function x(chart,e,options,useFinalPosition){var position=getRelativePosition$1(e,chart);var items=[];var intersectsItem=false;evaluateAllVisibleItems(chart,function(element,datasetIndex,index){if(element.inXRange(position.x,useFinalPosition)){items.push({element:element,datasetIndex:datasetIndex,index:index});}if(element.inRange(position.x,position.y,useFinalPosition)){intersectsItem=true;}});if(options.intersect&&!intersectsItem){return[];}return items;},y:function y(chart,e,options,useFinalPosition){var position=getRelativePosition$1(e,chart);var items=[];var intersectsItem=false;evaluateAllVisibleItems(chart,function(element,datasetIndex,index){if(element.inYRange(position.y,useFinalPosition)){items.push({element:element,datasetIndex:datasetIndex,index:index});}if(element.inRange(position.x,position.y,useFinalPosition)){intersectsItem=true;}});if(options.intersect&&!intersectsItem){return[];}return items;}}};var STATIC_POSITIONS=['left','top','right','bottom'];function filterByPosition(array,position){return array.filter(function(v){return v.pos===position;});}function filterDynamicPositionByAxis(array,axis){return array.filter(function(v){return STATIC_POSITIONS.indexOf(v.pos)===-1&&v.box.axis===axis;});}function sortByWeight(array,reverse){return array.sort(function(a,b){var v0=reverse?b:a;var v1=reverse?a:b;return v0.weight===v1.weight?v0.index-v1.index:v0.weight-v1.weight;});}function wrapBoxes(boxes){var layoutBoxes=[];var i,ilen,box;for(i=0,ilen=(boxes||[]).length;i<ilen;++i){box=boxes[i];layoutBoxes.push({index:i,box:box,pos:box.position,horizontal:box.isHorizontal(),weight:box.weight});}return layoutBoxes;}function setLayoutDims(layouts,params){var i,ilen,layout;for(i=0,ilen=layouts.length;i<ilen;++i){layout=layouts[i];layout.width=layout.horizontal?layout.box.fullWidth&&params.availableWidth:params.vBoxMaxWidth;layout.height=layout.horizontal&&params.hBoxMaxHeight;}}function buildLayoutBoxes(boxes){var layoutBoxes=wrapBoxes(boxes);var left=sortByWeight(filterByPosition(layoutBoxes,'left'),true);var right=sortByWeight(filterByPosition(layoutBoxes,'right'));var top=sortByWeight(filterByPosition(layoutBoxes,'top'),true);var bottom=sortByWeight(filterByPosition(layoutBoxes,'bottom'));var centerHorizontal=filterDynamicPositionByAxis(layoutBoxes,'x');var centerVertical=filterDynamicPositionByAxis(layoutBoxes,'y');return{leftAndTop:left.concat(top),rightAndBottom:right.concat(centerVertical).concat(bottom).concat(centerHorizontal),chartArea:filterByPosition(layoutBoxes,'chartArea'),vertical:left.concat(right).concat(centerVertical),horizontal:top.concat(bottom).concat(centerHorizontal)};}function getCombinedMax(maxPadding,chartArea,a,b){return Math.max(maxPadding[a],chartArea[a])+Math.max(maxPadding[b],chartArea[b]);}function updateDims(chartArea,params,layout){var box=layout.box;var maxPadding=chartArea.maxPadding;if(layout.size){chartArea[layout.pos]-=layout.size;}layout.size=layout.horizontal?box.height:box.width;chartArea[layout.pos]+=layout.size;if(box.getPadding){var boxPadding=box.getPadding();maxPadding.top=Math.max(maxPadding.top,boxPadding.top);maxPadding.left=Math.max(maxPadding.left,boxPadding.left);maxPadding.bottom=Math.max(maxPadding.bottom,boxPadding.bottom);maxPadding.right=Math.max(maxPadding.right,boxPadding.right);}var newWidth=params.outerWidth-getCombinedMax(maxPadding,chartArea,'left','right');var newHeight=params.outerHeight-getCombinedMax(maxPadding,chartArea,'top','bottom');if(newWidth!==chartArea.w||newHeight!==chartArea.h){chartArea.w=newWidth;chartArea.h=newHeight;return layout.horizontal?newWidth!==chartArea.w:newHeight!==chartArea.h;}}function handleMaxPadding(chartArea){var maxPadding=chartArea.maxPadding;function updatePos(pos){var change=Math.max(maxPadding[pos]-chartArea[pos],0);chartArea[pos]+=change;return change;}chartArea.y+=updatePos('top');chartArea.x+=updatePos('left');updatePos('right');updatePos('bottom');}function getMargins(horizontal,chartArea){var maxPadding=chartArea.maxPadding;function marginForPositions(positions){var margin={left:0,top:0,right:0,bottom:0};positions.forEach(function(pos){margin[pos]=Math.max(chartArea[pos],maxPadding[pos]);});return margin;}return horizontal?marginForPositions(['left','right']):marginForPositions(['top','bottom']);}function fitBoxes(boxes,chartArea,params){var refitBoxes=[];var i,ilen,layout,box,refit,changed;for(i=0,ilen=boxes.length;i<ilen;++i){layout=boxes[i];box=layout.box;box.update(layout.width||chartArea.w,layout.height||chartArea.h,getMargins(layout.horizontal,chartArea));if(updateDims(chartArea,params,layout)){changed=true;if(refitBoxes.length){refit=true;}}if(!box.fullWidth){refitBoxes.push(layout);}}return refit?fitBoxes(refitBoxes,chartArea,params)||changed:changed;}function placeBoxes(boxes,chartArea,params){var userPadding=params.padding;var x=chartArea.x;var y=chartArea.y;var i,ilen,layout,box;for(i=0,ilen=boxes.length;i<ilen;++i){layout=boxes[i];box=layout.box;if(layout.horizontal){box.left=box.fullWidth?userPadding.left:chartArea.left;box.right=box.fullWidth?params.outerWidth-userPadding.right:chartArea.left+chartArea.w;box.top=y;box.bottom=y+box.height;box.width=box.right-box.left;y=box.bottom;}else{box.left=x;box.right=x+box.width;box.top=chartArea.top;box.bottom=chartArea.top+chartArea.h;box.height=box.bottom-box.top;x=box.right;}}chartArea.x=x;chartArea.y=y;}defaults.set('layout',{padding:{top:0,right:0,bottom:0,left:0}});var layouts={defaults:{},addBox:function addBox(chart,item){if(!chart.boxes){chart.boxes=[];}item.fullWidth=item.fullWidth||false;item.position=item.position||'top';item.weight=item.weight||0;item._layers=item._layers||function(){return[{z:0,draw:function draw(chartArea){item.draw(chartArea);}}];};chart.boxes.push(item);},removeBox:function removeBox(chart,layoutItem){var index=chart.boxes?chart.boxes.indexOf(layoutItem):-1;if(index!==-1){chart.boxes.splice(index,1);}},configure:function configure(chart,item,options){var props=['fullWidth','position','weight'];var ilen=props.length;var i=0;var prop;for(;i<ilen;++i){prop=props[i];if(Object.prototype.hasOwnProperty.call(options,prop)){item[prop]=options[prop];}}},update:function update(chart,width,height){if(!chart){return;}var layoutOptions=chart.options.layout||{};var padding=toPadding(layoutOptions.padding);var availableWidth=width-padding.width;var availableHeight=height-padding.height;var boxes=buildLayoutBoxes(chart.boxes);var verticalBoxes=boxes.vertical;var horizontalBoxes=boxes.horizontal;var params=Object.freeze({outerWidth:width,outerHeight:height,padding:padding,availableWidth:availableWidth,vBoxMaxWidth:availableWidth/2/verticalBoxes.length,hBoxMaxHeight:availableHeight/2});var chartArea=_extends({maxPadding:_extends({},padding),w:availableWidth,h:availableHeight,x:padding.left,y:padding.top},padding);setLayoutDims(verticalBoxes.concat(horizontalBoxes),params);fitBoxes(verticalBoxes,chartArea,params);if(fitBoxes(horizontalBoxes,chartArea,params)){fitBoxes(verticalBoxes,chartArea,params);}handleMaxPadding(chartArea);placeBoxes(boxes.leftAndTop,chartArea,params);chartArea.x+=chartArea.w;chartArea.y+=chartArea.h;placeBoxes(boxes.rightAndBottom,chartArea,params);chart.chartArea={left:chartArea.left,top:chartArea.top,right:chartArea.left+chartArea.w,bottom:chartArea.top+chartArea.h,height:chartArea.h,width:chartArea.w};each(boxes.chartArea,function(layout){var box=layout.box;_extends(box,chart.chartArea);box.update(chartArea.w,chartArea.h);});}};var BasePlatform=function(){function BasePlatform(){_classCallCheck(this,BasePlatform);}_createClass(BasePlatform,[{key:'acquireContext',value:function acquireContext(canvas,options){}},{key:'releaseContext',value:function releaseContext(context){return false;}},{key:'addEventListener',value:function addEventListener(chart,type,listener){}},{key:'removeEventListener',value:function removeEventListener(chart,type,listener){}},{key:'getDevicePixelRatio',value:function getDevicePixelRatio(){return 1;}}]);return BasePlatform;}();var BasicPlatform=function(_BasePlatform){_inherits(BasicPlatform,_BasePlatform);function BasicPlatform(){_classCallCheck(this,BasicPlatform);return _possibleConstructorReturn(this,_getPrototypeOf(BasicPlatform).apply(this,arguments));}_createClass(BasicPlatform,[{key:'acquireContext',value:function acquireContext(item){return item&&item.getContext&&item.getContext('2d')||null;}}]);return BasicPlatform;}(BasePlatform);var MapShim=function(){if(typeof Map!=='undefined'){return Map;}function getIndex(arr,key){var result=-1;arr.some(function(entry,index){if(entry[0]===key){result=index;return true;}return false;});return result;}return function(){function class_1(){this.__entries__=[];}Object.defineProperty(class_1.prototype,'size',{get:function get(){return this.__entries__.length;},enumerable:true,configurable:true});class_1.prototype.get=function(key){var index=getIndex(this.__entries__,key);var entry=this.__entries__[index];return entry&&entry[1];};class_1.prototype.set=function(key,value){var index=getIndex(this.__entries__,key);if(~index){this.__entries__[index][1]=value;}else{this.__entries__.push([key,value]);}};class_1.prototype['delete']=function(key){var entries=this.__entries__;var index=getIndex(entries,key);if(~index){entries.splice(index,1);}};class_1.prototype.has=function(key){return!!~getIndex(this.__entries__,key);};class_1.prototype.clear=function(){this.__entries__.splice(0);};class_1.prototype.forEach=function(callback,ctx){if(ctx===void 0){ctx=null;}for(var _i=0,_a=this.__entries__;_i<_a.length;_i++){var entry=_a[_i];callback.call(ctx,entry[1],entry[0]);}};return class_1;}();}();var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined'&&window.document===document;var global$1=function(){if(typeof __webpack_require__.g!=='undefined'&&__webpack_require__.g.Math===Math){return __webpack_require__.g;}if(typeof self!=='undefined'&&self.Math===Math){return self;}if(typeof window!=='undefined'&&window.Math===Math){return window;}return Function('return this')();}();var requestAnimationFrame$1=function(){if(typeof requestAnimationFrame==='function'){return requestAnimationFrame.bind(global$1);}return function(callback){return setTimeout(function(){return callback(Date.now());},1000/60);};}();var trailingTimeout=2;function throttle(callback,delay){var leadingCall=false,trailingCall=false,lastCallTime=0;function resolvePending(){if(leadingCall){leadingCall=false;callback();}if(trailingCall){proxy();}}function timeoutCallback(){requestAnimationFrame$1(resolvePending);}function proxy(){var timeStamp=Date.now();if(leadingCall){if(timeStamp-lastCallTime<trailingTimeout){return;}trailingCall=true;}else{leadingCall=true;trailingCall=false;setTimeout(timeoutCallback,delay);}lastCallTime=timeStamp;}return proxy;}var REFRESH_DELAY=20;var transitionKeys=['top','right','bottom','left','width','height','size','weight'];var mutationObserverSupported=typeof MutationObserver!=='undefined';var ResizeObserverController=function(){function ResizeObserverController(){this.connected_=false;this.mutationEventsAdded_=false;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=throttle(this.refresh.bind(this),REFRESH_DELAY);}ResizeObserverController.prototype.addObserver=function(observer){if(!~this.observers_.indexOf(observer)){this.observers_.push(observer);}if(!this.connected_){this.connect_();}};ResizeObserverController.prototype.removeObserver=function(observer){var observers=this.observers_;var index=observers.indexOf(observer);if(~index){observers.splice(index,1);}if(!observers.length&&this.connected_){this.disconnect_();}};ResizeObserverController.prototype.refresh=function(){var changesDetected=this.updateObservers_();if(changesDetected){this.refresh();}};ResizeObserverController.prototype.updateObservers_=function(){var activeObservers=this.observers_.filter(function(observer){return observer.gatherActive(),observer.hasActive();});activeObservers.forEach(function(observer){return observer.broadcastActive();});return activeObservers.length>0;};ResizeObserverController.prototype.connect_=function(){if(!isBrowser||this.connected_){return;}document.addEventListener('transitionend',this.onTransitionEnd_);window.addEventListener('resize',this.refresh);if(mutationObserverSupported){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:true,childList:true,characterData:true,subtree:true});}else{document.addEventListener('DOMSubtreeModified',this.refresh);this.mutationEventsAdded_=true;}this.connected_=true;};ResizeObserverController.prototype.disconnect_=function(){if(!isBrowser||!this.connected_){return;}document.removeEventListener('transitionend',this.onTransitionEnd_);window.removeEventListener('resize',this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect();}if(this.mutationEventsAdded_){document.removeEventListener('DOMSubtreeModified',this.refresh);}this.mutationsObserver_=null;this.mutationEventsAdded_=false;this.connected_=false;};ResizeObserverController.prototype.onTransitionEnd_=function(_a){var _b=_a.propertyName,propertyName=_b===void 0?'':_b;var isReflowProperty=transitionKeys.some(function(key){return!!~propertyName.indexOf(key);});if(isReflowProperty){this.refresh();}};ResizeObserverController.getInstance=function(){if(!this.instance_){this.instance_=new ResizeObserverController();}return this.instance_;};ResizeObserverController.instance_=null;return ResizeObserverController;}();var defineConfigurable=function defineConfigurable(target,props){for(var _i=0,_a=Object.keys(props);_i<_a.length;_i++){var key=_a[_i];Object.defineProperty(target,key,{value:props[key],enumerable:false,writable:false,configurable:true});}return target;};var getWindowOf=function getWindowOf(target){var ownerGlobal=target&&target.ownerDocument&&target.ownerDocument.defaultView;return ownerGlobal||global$1;};var emptyRect=createRectInit(0,0,0,0);function toFloat(value){return parseFloat(value)||0;}function getBordersSize(styles){var positions=[];for(var _i=1;_i<arguments.length;_i++){positions[_i-1]=arguments[_i];}return positions.reduce(function(size,position){var value=styles['border-'+position+'-width'];return size+toFloat(value);},0);}function getPaddings(styles){var positions=['top','right','bottom','left'];var paddings={};for(var _i=0,positions_1=positions;_i<positions_1.length;_i++){var position=positions_1[_i];var value=styles['padding-'+position];paddings[position]=toFloat(value);}return paddings;}function getSVGContentRect(target){var bbox=target.getBBox();return createRectInit(0,0,bbox.width,bbox.height);}function getHTMLElementContentRect(target){var clientWidth=target.clientWidth,clientHeight=target.clientHeight;if(!clientWidth&&!clientHeight){return emptyRect;}var styles=getWindowOf(target).getComputedStyle(target);var paddings=getPaddings(styles);var horizPad=paddings.left+paddings.right;var vertPad=paddings.top+paddings.bottom;var width=toFloat(styles.width),height=toFloat(styles.height);if(styles.boxSizing==='border-box'){if(Math.round(width+horizPad)!==clientWidth){width-=getBordersSize(styles,'left','right')+horizPad;}if(Math.round(height+vertPad)!==clientHeight){height-=getBordersSize(styles,'top','bottom')+vertPad;}}if(!isDocumentElement(target)){var vertScrollbar=Math.round(width+horizPad)-clientWidth;var horizScrollbar=Math.round(height+vertPad)-clientHeight;if(Math.abs(vertScrollbar)!==1){width-=vertScrollbar;}if(Math.abs(horizScrollbar)!==1){height-=horizScrollbar;}}return createRectInit(paddings.left,paddings.top,width,height);}var isSVGGraphicsElement=function(){if(typeof SVGGraphicsElement!=='undefined'){return function(target){return target instanceof getWindowOf(target).SVGGraphicsElement;};}return function(target){return target instanceof getWindowOf(target).SVGElement&&typeof target.getBBox==='function';};}();function isDocumentElement(target){return target===getWindowOf(target).document.documentElement;}function getContentRect(target){if(!isBrowser){return emptyRect;}if(isSVGGraphicsElement(target)){return getSVGContentRect(target);}return getHTMLElementContentRect(target);}function createReadOnlyRect(_a){var x=_a.x,y=_a.y,width=_a.width,height=_a.height;var Constr=typeof DOMRectReadOnly!=='undefined'?DOMRectReadOnly:Object;var rect=Object.create(Constr.prototype);defineConfigurable(rect,{x:x,y:y,width:width,height:height,top:y,right:x+width,bottom:height+y,left:x});return rect;}function createRectInit(x,y,width,height){return{x:x,y:y,width:width,height:height};}var ResizeObservation=function(){function ResizeObservation(target){this.broadcastWidth=0;this.broadcastHeight=0;this.contentRect_=createRectInit(0,0,0,0);this.target=target;}ResizeObservation.prototype.isActive=function(){var rect=getContentRect(this.target);this.contentRect_=rect;return rect.width!==this.broadcastWidth||rect.height!==this.broadcastHeight;};ResizeObservation.prototype.broadcastRect=function(){var rect=this.contentRect_;this.broadcastWidth=rect.width;this.broadcastHeight=rect.height;return rect;};return ResizeObservation;}();var ResizeObserverEntry=function(){function ResizeObserverEntry(target,rectInit){var contentRect=createReadOnlyRect(rectInit);defineConfigurable(this,{target:target,contentRect:contentRect});}return ResizeObserverEntry;}();var ResizeObserverSPI=function(){function ResizeObserverSPI(callback,controller,callbackCtx){this.activeObservations_=[];this.observations_=new MapShim();if(typeof callback!=='function'){throw new TypeError('The callback provided as parameter 1 is not a function.');}this.callback_=callback;this.controller_=controller;this.callbackCtx_=callbackCtx;}ResizeObserverSPI.prototype.observe=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');}if(typeof Element==='undefined'||!(Element instanceof Object)){return;}if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".');}var observations=this.observations_;if(observations.has(target)){return;}observations.set(target,new ResizeObservation(target));this.controller_.addObserver(this);this.controller_.refresh();};ResizeObserverSPI.prototype.unobserve=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');}if(typeof Element==='undefined'||!(Element instanceof Object)){return;}if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".');}var observations=this.observations_;if(!observations.has(target)){return;}observations['delete'](target);if(!observations.size){this.controller_.removeObserver(this);}};ResizeObserverSPI.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this);};ResizeObserverSPI.prototype.gatherActive=function(){var _this=this;this.clearActive();this.observations_.forEach(function(observation){if(observation.isActive()){_this.activeObservations_.push(observation);}});};ResizeObserverSPI.prototype.broadcastActive=function(){if(!this.hasActive()){return;}var ctx=this.callbackCtx_;var entries=this.activeObservations_.map(function(observation){return new ResizeObserverEntry(observation.target,observation.broadcastRect());});this.callback_.call(ctx,entries,ctx);this.clearActive();};ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0);};ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0;};return ResizeObserverSPI;}();var observers=typeof WeakMap!=='undefined'?new WeakMap():new MapShim();var ResizeObserver=function(){function ResizeObserver(callback){if(!(this instanceof ResizeObserver)){throw new TypeError('Cannot call a class as a function.');}if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.');}var controller=ResizeObserverController.getInstance();var observer=new ResizeObserverSPI(callback,controller,this);observers.set(this,observer);}return ResizeObserver;}();['observe','unobserve','disconnect'].forEach(function(method){ResizeObserver.prototype[method]=function(){var _a;return(_a=observers.get(this))[method].apply(_a,arguments);};});var index$1=function(){if(typeof global$1.ResizeObserver!=='undefined'){return global$1.ResizeObserver;}return ResizeObserver;}();var EXPANDO_KEY='$chartjs';var EVENT_TYPES={touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup',pointerenter:'mouseenter',pointerdown:'mousedown',pointermove:'mousemove',pointerup:'mouseup',pointerleave:'mouseout',pointerout:'mouseout'};function readUsedSize(element,property){var value=helpers.dom.getStyle(element,property);var matches=value&&value.match(/^(\d+)(\.\d+)?px$/);return matches?+matches[1]:undefined;}function initCanvas(canvas,config){var style=canvas.style;var renderHeight=canvas.getAttribute('height');var renderWidth=canvas.getAttribute('width');canvas[EXPANDO_KEY]={initial:{height:renderHeight,width:renderWidth,style:{display:style.display,height:style.height,width:style.width}}};style.display=style.display||'block';style.boxSizing=style.boxSizing||'border-box';if(renderWidth===null||renderWidth===''){var displayWidth=readUsedSize(canvas,'width');if(displayWidth!==undefined){canvas.width=displayWidth;}}if(renderHeight===null||renderHeight===''){if(canvas.style.height===''){canvas.height=canvas.width/(config.options.aspectRatio||2);}else{var displayHeight=readUsedSize(canvas,'height');if(displayHeight!==undefined){canvas.height=displayHeight;}}}return canvas;}var supportsEventListenerOptions=function(){var passiveSupported=false;try{var options={get passive(){passiveSupported=true;return false;}};window.addEventListener('test',null,options);window.removeEventListener('test',null,options);}catch(e){}return passiveSupported;}();var eventListenerOptions=supportsEventListenerOptions?{passive:true}:false;function addListener(node,type,listener){node.addEventListener(type,listener,eventListenerOptions);}function removeListener(node,type,listener){node.removeEventListener(type,listener,eventListenerOptions);}function createEvent(type,chart,x,y,nativeEvent){return{type:type,chart:chart,native:nativeEvent||null,x:x!==undefined?x:null,y:y!==undefined?y:null};}function fromNativeEvent(event,chart){var type=EVENT_TYPES[event.type]||event.type;var pos=helpers.dom.getRelativePosition(event,chart);return createEvent(type,chart,pos.x,pos.y,event);}function throttled(fn,thisArg){var ticking=false;var args=[];return function(){for(var _len=arguments.length,rest=new Array(_len),_key=0;_key<_len;_key++){rest[_key]=arguments[_key];}args=Array.prototype.slice.call(rest);if(!ticking){ticking=true;helpers.requestAnimFrame.call(window,function(){ticking=false;fn.apply(thisArg,args);});}};}function watchForResize(element,fn){var resize=throttled(function(width,height){var w=element.clientWidth;fn(width,height);if(w<element.clientWidth){fn();}},window);var observer=new index$1(function(entries){var entry=entries[0];resize(entry.contentRect.width,entry.contentRect.height);});observer.observe(element);return observer;}function watchForAttachment(element,fn){var observer=new MutationObserver(function(entries){var parent=_getParentNode(element);entries.forEach(function(entry){for(var i=0;i<entry.addedNodes.length;i++){var added=entry.addedNodes[i];if(added===element||added===parent){fn(entry.target);}}});});observer.observe(document,{childList:true,subtree:true});return observer;}function watchForDetachment(element,fn){var parent=_getParentNode(element);if(!parent){return;}var observer=new MutationObserver(function(entries){entries.forEach(function(entry){for(var i=0;i<entry.removedNodes.length;i++){if(entry.removedNodes[i]===element){fn();break;}}});});observer.observe(parent,{childList:true});return observer;}function removeObserver(proxies,type){var observer=proxies[type];if(observer){observer.disconnect();proxies[type]=undefined;}}function unlistenForResize(proxies){removeObserver(proxies,'attach');removeObserver(proxies,'detach');removeObserver(proxies,'resize');}function listenForResize(canvas,proxies,listener){var detached=function detached(){return listenForResize(canvas,proxies,listener);};unlistenForResize(proxies);var container=_getParentNode(canvas);if(container){proxies.resize=watchForResize(container,listener);proxies.detach=watchForDetachment(canvas,detached);}else{proxies.attach=watchForAttachment(canvas,function(){removeObserver(proxies,'attach');var parent=_getParentNode(canvas);proxies.resize=watchForResize(parent,listener);proxies.detach=watchForDetachment(canvas,detached);});}}var DomPlatform=function(_BasePlatform){_inherits(DomPlatform,_BasePlatform);function DomPlatform(){_classCallCheck(this,DomPlatform);return _possibleConstructorReturn(this,_getPrototypeOf(DomPlatform).apply(this,arguments));}_createClass(DomPlatform,[{key:'acquireContext',value:function acquireContext(canvas,config){var context=canvas&&canvas.getContext&&canvas.getContext('2d');if(context&&context.canvas===canvas){initCanvas(canvas,config);return context;}return null;}},{key:'releaseContext',value:function releaseContext(context){var canvas=context.canvas;if(!canvas[EXPANDO_KEY]){return false;}var initial=canvas[EXPANDO_KEY].initial;['height','width'].forEach(function(prop){var value=initial[prop];if(helpers.isNullOrUndef(value)){canvas.removeAttribute(prop);}else{canvas.setAttribute(prop,value);}});var style=initial.style||{};Object.keys(style).forEach(function(key){canvas.style[key]=style[key];});canvas.width=canvas.width;delete canvas[EXPANDO_KEY];return true;}},{key:'addEventListener',value:function addEventListener(chart,type,listener){this.removeEventListener(chart,type);var canvas=chart.canvas;var proxies=chart.$proxies||(chart.$proxies={});if(type==='resize'){return listenForResize(canvas,proxies,listener);}var proxy=proxies[type]=throttled(function(event){listener(fromNativeEvent(event,chart));},chart);addListener(canvas,type,proxy);}},{key:'removeEventListener',value:function removeEventListener(chart,type){var canvas=chart.canvas;var proxies=chart.$proxies||(chart.$proxies={});if(type==='resize'){return unlistenForResize(proxies);}var proxy=proxies[type];if(!proxy){return;}removeListener(canvas,type,proxy);proxies[type]=undefined;}},{key:'getDevicePixelRatio',value:function getDevicePixelRatio(){return window.devicePixelRatio;}}]);return DomPlatform;}(BasePlatform);var platforms={BasicPlatform:BasicPlatform,DomPlatform:DomPlatform,BasePlatform:BasePlatform};defaults.set('plugins',{});var PluginService=function(){function PluginService(){_classCallCheck(this,PluginService);this._plugins=[];this._cacheId=0;}_createClass(PluginService,[{key:'register',value:function register(plugins){var p=this._plugins;[].concat(plugins).forEach(function(plugin){if(p.indexOf(plugin)===-1){p.push(plugin);}});this._cacheId++;}},{key:'unregister',value:function unregister(plugins){var p=this._plugins;[].concat(plugins).forEach(function(plugin){var idx=p.indexOf(plugin);if(idx!==-1){p.splice(idx,1);}});this._cacheId++;}},{key:'clear',value:function clear(){this._plugins=[];this._cacheId++;}},{key:'count',value:function count(){return this._plugins.length;}},{key:'getAll',value:function getAll(){return this._plugins;}},{key:'notify',value:function notify(chart,hook,args){var descriptors=this._descriptors(chart);var ilen=descriptors.length;var i,descriptor,plugin,params,method;for(i=0;i<ilen;++i){descriptor=descriptors[i];plugin=descriptor.plugin;method=plugin[hook];if(typeof method==='function'){params=[chart].concat(args||[]);params.push(descriptor.options);if(method.apply(plugin,params)===false){return false;}}}return true;}},{key:'_descriptors',value:function _descriptors(chart){var cache=chart.$plugins||(chart.$plugins={});if(cache.id===this._cacheId){return cache.descriptors;}var plugins=[];var descriptors=[];var config=chart&&chart.config||{};var options=config.options&&config.options.plugins||{};this._plugins.concat(config.plugins||[]).forEach(function(plugin){var idx=plugins.indexOf(plugin);if(idx!==-1){return;}var id=plugin.id;var opts=options[id];if(opts===false){return;}if(opts===true){opts=clone(defaults.plugins[id]);}plugins.push(plugin);descriptors.push({plugin:plugin,options:opts||{}});});cache.descriptors=descriptors;cache.id=this._cacheId;return descriptors;}},{key:'invalidate',value:function invalidate(chart){delete chart.$plugins;}}]);return PluginService;}();var pluginsCore=new PluginService();var scaleService={constructors:{},defaults:{},registerScale:function registerScale(scaleConstructor){var me=this;var type=scaleConstructor.id;me.constructors[type]=scaleConstructor;me.defaults[type]=clone(scaleConstructor.defaults);},getScaleConstructor:function getScaleConstructor(type){return Object.prototype.hasOwnProperty.call(this.constructors,type)?this.constructors[type]:undefined;},getScaleDefaults:function getScaleDefaults(type){return Object.prototype.hasOwnProperty.call(this.defaults,type)?merge({},[defaults.scale,this.defaults[type]]):{};},updateScaleDefaults:function updateScaleDefaults(type,additions){var me=this;if(Object.prototype.hasOwnProperty.call(me.defaults,type)){me.defaults[type]=_extends(me.defaults[type],additions);}},addScalesToLayout:function addScalesToLayout(chart){each(chart.scales,function(scale){scale.fullWidth=scale.options.fullWidth;scale.position=scale.options.position;scale.weight=scale.options.weight;layouts.addBox(chart,scale);});}};var version='3.0.0-alpha';var valueOrDefault$1=helpers.valueOrDefault;function mergeScaleConfig(config,options){options=options||{};var chartDefaults=defaults[config.type]||{scales:{}};var configScales=options.scales||{};var firstIDs={};var scales={};Object.keys(configScales).forEach(function(id){var axis=id[0];firstIDs[axis]=firstIDs[axis]||id;scales[id]=helpers.mergeIf({},[configScales[id],chartDefaults.scales[axis]]);});if(options.scale){scales[options.scale.id||'r']=helpers.mergeIf({},[options.scale,chartDefaults.scales.r]);firstIDs.r=firstIDs.r||options.scale.id||'r';}config.data.datasets.forEach(function(dataset){var datasetDefaults=defaults[dataset.type||config.type]||{scales:{}};var defaultScaleOptions=datasetDefaults.scales||{};Object.keys(defaultScaleOptions).forEach(function(defaultID){var id=dataset[defaultID+'AxisID']||firstIDs[defaultID]||defaultID;scales[id]=scales[id]||{};helpers.mergeIf(scales[id],[configScales[id],defaultScaleOptions[defaultID]]);});});Object.keys(scales).forEach(function(key){var scale=scales[key];helpers.mergeIf(scale,scaleService.getScaleDefaults(scale.type));});return scales;}function mergeConfig(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return helpers.merge({},args,{merger:function merger(key,target,source,options){if(key!=='scales'&&key!=='scale'){helpers._merger(key,target,source,options);}}});}function initConfig(config){config=config||{};var data=config.data=config.data||{datasets:[],labels:[]};data.datasets=data.datasets||[];data.labels=data.labels||[];var scaleConfig=mergeScaleConfig(config,config.options);config.options=mergeConfig(defaults,defaults[config.type],config.options||{});config.options.scales=scaleConfig;return config;}function isAnimationDisabled(config){return!config.animation;}function updateConfig(chart){var newOptions=chart.options;helpers.each(chart.scales,function(scale){layouts.removeBox(chart,scale);});var scaleConfig=mergeScaleConfig(chart.config,newOptions);newOptions=mergeConfig(defaults,defaults[chart.config.type],newOptions);chart.options=chart.config.options=newOptions;chart.options.scales=scaleConfig;chart._animationsDisabled=isAnimationDisabled(newOptions);chart.ensureScalesHaveIDs();chart.buildOrUpdateScales();}var KNOWN_POSITIONS=new Set(['top','bottom','left','right','chartArea']);function positionIsHorizontal(position,axis){return position==='top'||position==='bottom'||!KNOWN_POSITIONS.has(position)&&axis==='x';}function compare2Level(l1,l2){return function(a,b){return a[l1]===b[l1]?a[l2]-b[l2]:a[l1]-b[l1];};}function onAnimationsComplete(ctx){var chart=ctx.chart;var animationOptions=chart.options.animation;pluginsCore.notify(chart,'afterRender');helpers.callback(animationOptions&&animationOptions.onComplete,[ctx],chart);}function onAnimationProgress(ctx){var chart=ctx.chart;var animationOptions=chart.options.animation;helpers.callback(animationOptions&&animationOptions.onProgress,[ctx],chart);}function isDomSupported(){return typeof window!=='undefined'&&typeof document!=='undefined';}function getCanvas(item){if(isDomSupported()&&typeof item==='string'){item=document.getElementById(item);}else if(item.length){item=item[0];}if(item&&item.canvas){item=item.canvas;}return item;}var Chart=function(){function Chart(item,config){_classCallCheck(this,Chart);var me=this;config=initConfig(config);var initialCanvas=getCanvas(item);this.platform=me._initializePlatform(initialCanvas,config);var context=me.platform.acquireContext(initialCanvas,config);var canvas=context&&context.canvas;var height=canvas&&canvas.height;var width=canvas&&canvas.width;this.id=helpers.uid();this.ctx=context;this.canvas=canvas;this.config=config;this.width=width;this.height=height;this.aspectRatio=height?width/height:null;this.options=config.options;this._bufferedRender=false;this._layers=[];this._metasets=[];this.boxes=[];this.currentDevicePixelRatio=undefined;this.chartArea=undefined;this.data=undefined;this.active=undefined;this.lastActive=[];this._lastEvent=undefined;this._listeners={};this._sortedMetasets=[];this._updating=false;this.scales={};this.scale=undefined;this.$plugins=undefined;this.$proxies={};this._hiddenIndices={};Chart.instances[me.id]=me;Object.defineProperty(me,'data',{get:function get(){return me.config.data;},set:function set(value){me.config.data=value;}});if(!context||!canvas){console.error("Failed to create chart: can't acquire context from the given item");return;}Animator$1.listen(me,'complete',onAnimationsComplete);Animator$1.listen(me,'progress',onAnimationProgress);me._initialize();me.update();}_createClass(Chart,[{key:'_initialize',value:function _initialize(){var me=this;pluginsCore.notify(me,'beforeInit');if(me.options.responsive){me.resize(true);}else{helpers.dom.retinaScale(me,me.options.devicePixelRatio);}me.bindEvents();pluginsCore.notify(me,'afterInit');return me;}},{key:'_initializePlatform',value:function _initializePlatform(canvas,config){if(config.platform){return new config.platform();}else if(!isDomSupported()||typeof OffscreenCanvas!=='undefined'&&canvas instanceof OffscreenCanvas){return new BasicPlatform();}return new DomPlatform();}},{key:'clear',value:function clear(){helpers.canvas.clear(this);return this;}},{key:'stop',value:function stop(){Animator$1.stop(this);return this;}},{key:'resize',value:function resize(silent,width,height){var me=this;var options=me.options;var canvas=me.canvas;var aspectRatio=options.maintainAspectRatio&&me.aspectRatio;if(width===undefined||height===undefined){width=getMaximumWidth(canvas);height=getMaximumHeight(canvas);}var newWidth=Math.max(0,Math.floor(width));var newHeight=Math.max(0,Math.floor(aspectRatio?newWidth/aspectRatio:height));var oldRatio=me.currentDevicePixelRatio;var newRatio=options.devicePixelRatio||me.platform.getDevicePixelRatio();if(me.width===newWidth&&me.height===newHeight&&oldRatio===newRatio){return;}canvas.width=me.width=newWidth;canvas.height=me.height=newHeight;if(canvas.style){canvas.style.width=newWidth+'px';canvas.style.height=newHeight+'px';}helpers.dom.retinaScale(me,newRatio);if(!silent){var newSize={width:newWidth,height:newHeight};pluginsCore.notify(me,'resize',[newSize]);if(options.onResize){options.onResize(me,newSize);}me.stop();me.update('resize');}}},{key:'ensureScalesHaveIDs',value:function ensureScalesHaveIDs(){var options=this.options;var scalesOptions=options.scales||{};var scaleOptions=options.scale;helpers.each(scalesOptions,function(axisOptions,axisID){axisOptions.id=axisID;});if(scaleOptions){scaleOptions.id=scaleOptions.id||'scale';}}},{key:'buildOrUpdateScales',value:function buildOrUpdateScales(){var me=this;var options=me.options;var scaleOpts=options.scales;var scales=me.scales||{};var updated=Object.keys(scales).reduce(function(obj,id){obj[id]=false;return obj;},{});var items=[];if(scaleOpts){items=items.concat(Object.keys(scaleOpts).map(function(axisID){var axisOptions=scaleOpts[axisID];var isRadial=axisID.charAt(0).toLowerCase()==='r';var isHorizontal=axisID.charAt(0).toLowerCase()==='x';return{options:axisOptions,dposition:isRadial?'chartArea':isHorizontal?'bottom':'left',dtype:isRadial?'radialLinear':isHorizontal?'category':'linear'};}));}helpers.each(items,function(item){var scaleOptions=item.options;var id=scaleOptions.id;var scaleType=valueOrDefault$1(scaleOptions.type,item.dtype);if(scaleOptions.position===undefined||positionIsHorizontal(scaleOptions.position,scaleOptions.axis||id[0])!==positionIsHorizontal(item.dposition)){scaleOptions.position=item.dposition;}updated[id]=true;var scale=null;if(id in scales&&scales[id].type===scaleType){scale=scales[id];scale.options=scaleOptions;scale.ctx=me.ctx;scale.chart=me;}else{var scaleClass=scaleService.getScaleConstructor(scaleType);if(!scaleClass){return;}scale=new scaleClass({id:id,type:scaleType,options:scaleOptions,ctx:me.ctx,chart:me});scales[scale.id]=scale;}scale.axis=scale.options.position==='chartArea'?'r':scale.isHorizontal()?'x':'y';scale._userMin=scale.parse(scale.options.min);scale._userMax=scale.parse(scale.options.max);if(item.isDefault){me.scale=scale;}});helpers.each(updated,function(hasUpdated,id){if(!hasUpdated){delete scales[id];}});me.scales=scales;scaleService.addScalesToLayout(this);}},{key:'_updateMetasetIndex',value:function _updateMetasetIndex(meta,index){var metasets=this._metasets;var oldIndex=meta.index;if(oldIndex!==index){metasets[oldIndex]=metasets[index];metasets[index]=meta;meta.index=index;}}},{key:'_updateMetasets',value:function _updateMetasets(){var me=this;var metasets=me._metasets;var numData=me.data.datasets.length;var numMeta=metasets.length;if(numMeta>numData){for(var i=numData;i<numMeta;++i){me._destroyDatasetMeta(i);}metasets.splice(numData,numMeta-numData);}me._sortedMetasets=metasets.slice(0).sort(compare2Level('order','index'));}},{key:'buildOrUpdateControllers',value:function buildOrUpdateControllers(){var me=this;var newControllers=[];var datasets=me.data.datasets;var i,ilen;for(i=0,ilen=datasets.length;i<ilen;i++){var dataset=datasets[i];var meta=me.getDatasetMeta(i);var type=dataset.type||me.config.type;if(meta.type&&meta.type!==type){me._destroyDatasetMeta(i);meta=me.getDatasetMeta(i);}meta.type=type;meta.order=dataset.order||0;me._updateMetasetIndex(meta,i);meta.label=''+dataset.label;meta.visible=me.isDatasetVisible(i);if(meta.controller){meta.controller.updateIndex(i);meta.controller.linkScales();}else{var ControllerClass=controllers[meta.type];if(ControllerClass===undefined){throw new Error('"'+meta.type+'" is not a chart type.');}meta.controller=new ControllerClass(me,i);newControllers.push(meta.controller);}}me._updateMetasets();return newControllers;}},{key:'_resetElements',value:function _resetElements(){var me=this;helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.reset();},me);}},{key:'reset',value:function reset(){this._resetElements();pluginsCore.notify(this,'reset');}},{key:'update',value:function update(mode){var me=this;var i,ilen;me._updating=true;updateConfig(me);pluginsCore.invalidate(me);if(pluginsCore.notify(me,'beforeUpdate')===false){return;}var newControllers=me.buildOrUpdateControllers();for(i=0,ilen=me.data.datasets.length;i<ilen;i++){me.getDatasetMeta(i).controller.buildOrUpdateElements();}me._updateLayout();if(me.options.animation){helpers.each(newControllers,function(controller){controller.reset();});}me._updateDatasets(mode);pluginsCore.notify(me,'afterUpdate');me._layers.sort(compare2Level('z','_idx'));if(me._lastEvent){me._eventHandler(me._lastEvent,true);}me.render();me._updating=false;}},{key:'_updateLayout',value:function _updateLayout(){var me=this;if(pluginsCore.notify(me,'beforeLayout')===false){return;}layouts.update(me,me.width,me.height);me._layers=[];helpers.each(me.boxes,function(box){var _me$_layers;if(box.configure){box.configure();}(_me$_layers=me._layers).push.apply(_me$_layers,_toConsumableArray(box._layers()));},me);me._layers.forEach(function(item,index){item._idx=index;});pluginsCore.notify(me,'afterLayout');}},{key:'_updateDatasets',value:function _updateDatasets(mode){var me=this;var isFunction=typeof mode==='function';if(pluginsCore.notify(me,'beforeDatasetsUpdate')===false){return;}for(var i=0,ilen=me.data.datasets.length;i<ilen;++i){me._updateDataset(i,isFunction?mode({datasetIndex:i}):mode);}pluginsCore.notify(me,'afterDatasetsUpdate');}},{key:'_updateDataset',value:function _updateDataset(index,mode){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index,mode:mode};if(pluginsCore.notify(me,'beforeDatasetUpdate',[args])===false){return;}meta.controller._update(mode);pluginsCore.notify(me,'afterDatasetUpdate',[args]);}},{key:'render',value:function render(){var me=this;var animationOptions=me.options.animation;if(pluginsCore.notify(me,'beforeRender')===false){return;}var onComplete=function onComplete(){pluginsCore.notify(me,'afterRender');helpers.callback(animationOptions&&animationOptions.onComplete,[],me);};if(Animator$1.has(me)){if(!Animator$1.running(me)){Animator$1.start(me);}}else{me.draw();onComplete();}}},{key:'draw',value:function draw(){var me=this;var i;me.clear();if(me.width<=0||me.height<=0){return;}if(pluginsCore.notify(me,'beforeDraw')===false){return;}var layers=me._layers;for(i=0;i<layers.length&&layers[i].z<=0;++i){layers[i].draw(me.chartArea);}me._drawDatasets();for(;i<layers.length;++i){layers[i].draw(me.chartArea);}pluginsCore.notify(me,'afterDraw');}},{key:'_getSortedDatasetMetas',value:function _getSortedDatasetMetas(filterVisible){var me=this;var metasets=me._sortedMetasets;var result=[];var i,ilen;for(i=0,ilen=metasets.length;i<ilen;++i){var meta=metasets[i];if(!filterVisible||meta.visible){result.push(meta);}}return result;}},{key:'getSortedVisibleDatasetMetas',value:function getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(true);}},{key:'_drawDatasets',value:function _drawDatasets(){var me=this;if(pluginsCore.notify(me,'beforeDatasetsDraw')===false){return;}var metasets=me.getSortedVisibleDatasetMetas();for(var i=metasets.length-1;i>=0;--i){me._drawDataset(metasets[i]);}pluginsCore.notify(me,'afterDatasetsDraw');}},{key:'_drawDataset',value:function _drawDataset(meta){var me=this;var ctx=me.ctx;var clip=meta._clip;var area=me.chartArea;var args={meta:meta,index:meta.index};if(pluginsCore.notify(me,'beforeDatasetDraw',[args])===false){return;}helpers.canvas.clipArea(ctx,{left:clip.left===false?0:area.left-clip.left,right:clip.right===false?me.width:area.right+clip.right,top:clip.top===false?0:area.top-clip.top,bottom:clip.bottom===false?me.height:area.bottom+clip.bottom});meta.controller.draw();helpers.canvas.unclipArea(ctx);pluginsCore.notify(me,'afterDatasetDraw',[args]);}},{key:'getElementAtEvent',value:function getElementAtEvent(e){return Interaction.modes.nearest(this,e,{intersect:true});}},{key:'getElementsAtEvent',value:function getElementsAtEvent(e){return Interaction.modes.index(this,e,{intersect:true});}},{key:'getElementsAtXAxis',value:function getElementsAtXAxis(e){return Interaction.modes.index(this,e,{intersect:false});}},{key:'getElementsAtEventForMode',value:function getElementsAtEventForMode(e,mode,options,useFinalPosition){var method=Interaction.modes[mode];if(typeof method==='function'){return method(this,e,options,useFinalPosition);}return[];}},{key:'getDatasetAtEvent',value:function getDatasetAtEvent(e){return Interaction.modes.dataset(this,e,{intersect:true});}},{key:'getDatasetMeta',value:function getDatasetMeta(datasetIndex){var me=this;var dataset=me.data.datasets[datasetIndex];var metasets=me._metasets;var meta=metasets.filter(function(x){return x._dataset===dataset;}).pop();if(!meta){meta=metasets[datasetIndex]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:dataset.order||0,index:datasetIndex,_dataset:dataset,_parsed:[],_sorted:false};}return meta;}},{key:'getVisibleDatasetCount',value:function getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length;}},{key:'isDatasetVisible',value:function isDatasetVisible(datasetIndex){var meta=this.getDatasetMeta(datasetIndex);return typeof meta.hidden==='boolean'?!meta.hidden:!this.data.datasets[datasetIndex].hidden;}},{key:'setDatasetVisibility',value:function setDatasetVisibility(datasetIndex,visible){var meta=this.getDatasetMeta(datasetIndex);meta.hidden=!visible;}},{key:'toggleDataVisibility',value:function toggleDataVisibility(index){this._hiddenIndices[index]=!this._hiddenIndices[index];}},{key:'getDataVisibility',value:function getDataVisibility(index){return!this._hiddenIndices[index];}},{key:'_updateDatasetVisibility',value:function _updateDatasetVisibility(datasetIndex,visible){var me=this;var mode=visible?'show':'hide';var meta=me.getDatasetMeta(datasetIndex);var anims=meta.controller._resolveAnimations(undefined,mode);me.setDatasetVisibility(datasetIndex,visible);anims.update(meta,{visible:visible});me.update(function(ctx){return ctx.datasetIndex===datasetIndex?mode:undefined;});}},{key:'hide',value:function hide(datasetIndex){this._updateDatasetVisibility(datasetIndex,false);}},{key:'show',value:function show(datasetIndex){this._updateDatasetVisibility(datasetIndex,true);}},{key:'_destroyDatasetMeta',value:function _destroyDatasetMeta(datasetIndex){var me=this;var meta=me._metasets&&me._metasets[datasetIndex];if(meta){meta.controller._destroy();delete me._metasets[datasetIndex];}}},{key:'destroy',value:function destroy(){var me=this;var canvas=me.canvas;var i,ilen;me.stop();Animator$1.remove(me);for(i=0,ilen=me.data.datasets.length;i<ilen;++i){me._destroyDatasetMeta(i);}if(canvas){me.unbindEvents();helpers.canvas.clear(me);me.platform.releaseContext(me.ctx);me.canvas=null;me.ctx=null;}pluginsCore.notify(me,'destroy');delete Chart.instances[me.id];}},{key:'toBase64Image',value:function toBase64Image(){var _this$canvas;return(_this$canvas=this.canvas).toDataURL.apply(_this$canvas,arguments);}},{key:'bindEvents',value:function bindEvents(){var me=this;var listeners=me._listeners;var listener=function listener(e){me._eventHandler(e);};helpers.each(me.options.events,function(type){me.platform.addEventListener(me,type,listener);listeners[type]=listener;});if(me.options.responsive){listener=function listener(width,height){if(me.canvas){me.resize(false,width,height);}};me.platform.addEventListener(me,'resize',listener);listeners.resize=listener;}}},{key:'unbindEvents',value:function unbindEvents(){var me=this;var listeners=me._listeners;if(!listeners){return;}delete me._listeners;helpers.each(listeners,function(listener,type){me.platform.removeEventListener(me,type,listener);});}},{key:'updateHoverStyle',value:function updateHoverStyle(items,mode,enabled){var prefix=enabled?'set':'remove';var meta,item,i,ilen;if(mode==='dataset'){meta=this.getDatasetMeta(items[0].datasetIndex);meta.controller['_'+prefix+'DatasetHoverStyle']();}for(i=0,ilen=items.length;i<ilen;++i){item=items[i];if(item){this.getDatasetMeta(item.datasetIndex).controller[prefix+'HoverStyle'](item.element,item.datasetIndex,item.index);}}}},{key:'_updateHoverStyles',value:function _updateHoverStyles(){var me=this;var options=me.options||{};var hoverOptions=options.hover;if(me.lastActive.length){me.updateHoverStyle(me.lastActive,hoverOptions.mode,false);}if(me.active.length&&hoverOptions.mode){me.updateHoverStyle(me.active,hoverOptions.mode,true);}}},{key:'_eventHandler',value:function _eventHandler(e,replay){var me=this;if(pluginsCore.notify(me,'beforeEvent',[e,replay])===false){return;}me._handleEvent(e,replay);pluginsCore.notify(me,'afterEvent',[e,replay]);me.render();return me;}},{key:'_handleEvent',value:function _handleEvent(e,replay){var me=this;var options=me.options;var hoverOptions=options.hover;var useFinalPosition=replay;var changed=false;if(e.type==='mouseout'){me.active=[];me._lastEvent=null;}else{me.active=me.getElementsAtEventForMode(e,hoverOptions.mode,hoverOptions,useFinalPosition);me._lastEvent=e.type==='click'?me._lastEvent:e;}helpers.callback(options.onHover||options.hover.onHover,[e['native'],me.active],me);if(e.type==='mouseup'||e.type==='click'){if(options.onClick&&helpers.canvas._isPointInArea(e,me.chartArea)){options.onClick.call(me,e['native'],me.active);}}changed=!helpers._elementsEqual(me.active,me.lastActive);if(changed||replay){me._updateHoverStyles();}me.lastActive=me.active;return changed;}}]);return Chart;}();_defineProperty(Chart,'version',version);_defineProperty(Chart,'instances',{});function _abstract(){throw new Error('This method is not implemented: either no adapter can be found or an incomplete integration was provided.');}var DateAdapter=function(){function DateAdapter(options){_classCallCheck(this,DateAdapter);this.options=options||{};}_createClass(DateAdapter,[{key:'formats',value:function formats(){return _abstract();}},{key:'parse',value:function parse(value,format){return _abstract();}},{key:'format',value:function format(timestamp,_format){return _abstract();}},{key:'add',value:function add(timestamp,amount,unit){return _abstract();}},{key:'diff',value:function diff(a,b,unit){return _abstract();}},{key:'startOf',value:function startOf(timestamp,unit,weekday){return _abstract();}},{key:'endOf',value:function endOf(timestamp,unit){return _abstract();}}]);return DateAdapter;}();DateAdapter.override=function(members){_extends(DateAdapter.prototype,members);};var _adapters={_date:DateAdapter};var Ticks={formatters:{values:function values(value){return isArray(value)?value:''+value;},numeric:function numeric(tickValue,index,ticks){if(tickValue===0){return'0';}var delta=ticks.length>3?ticks[2].value-ticks[1].value:ticks[1].value-ticks[0].value;if(Math.abs(delta)>1&&tickValue!==Math.floor(tickValue)){delta=tickValue-Math.floor(tickValue);}var logDelta=log10(Math.abs(delta));var maxTick=Math.max(Math.abs(ticks[0].value),Math.abs(ticks[ticks.length-1].value));var minTick=Math.min(Math.abs(ticks[0].value),Math.abs(ticks[ticks.length-1].value));var locale=this.chart.options.locale;if(maxTick<1e-4||minTick>1e7){var logTick=log10(Math.abs(tickValue));var numExponential=Math.floor(logTick)-Math.floor(logDelta);numExponential=Math.max(Math.min(numExponential,20),0);return tickValue.toExponential(numExponential);}var numDecimal=-1*Math.floor(logDelta);numDecimal=Math.max(Math.min(numDecimal,20),0);return new Intl.NumberFormat(locale,{minimumFractionDigits:numDecimal,maximumFractionDigits:numDecimal}).format(tickValue);}}};defaults.set('scale',{display:true,offset:false,reverse:false,beginAtZero:false,gridLines:{display:true,color:'rgba(0,0,0,0.1)',lineWidth:1,drawBorder:true,drawOnChartArea:true,drawTicks:true,tickMarkLength:10,offsetGridLines:false,borderDash:[],borderDashOffset:0.0},scaleLabel:{display:false,labelString:'',padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:false,lineWidth:0,strokeStyle:'',padding:0,display:true,autoSkip:true,autoSkipPadding:0,labelOffset:0,callback:Ticks.formatters.values,minor:{},major:{}}});function sample(arr,numItems){var result=[];var increment=arr.length/numItems;var len=arr.length;var i=0;for(;i<len;i+=increment){result.push(arr[Math.floor(i)]);}return result;}function getPixelForGridLine(scale,index,offsetGridLines){var length=scale.ticks.length;var validIndex=Math.min(index,length-1);var start=scale._startPixel;var end=scale._endPixel;var epsilon=1e-6;var lineValue=scale.getPixelForTick(validIndex);var offset;if(offsetGridLines){if(length===1){offset=Math.max(lineValue-start,end-lineValue);}else if(index===0){offset=(scale.getPixelForTick(1)-lineValue)/2;}else{offset=(lineValue-scale.getPixelForTick(validIndex-1))/2;}lineValue+=validIndex<index?offset:-offset;if(lineValue<start-epsilon||lineValue>end+epsilon){return;}}return lineValue;}function garbageCollect(caches,length){each(caches,function(cache){var gc=cache.gc;var gcLen=gc.length/2;var i;if(gcLen>length){for(i=0;i<gcLen;++i){delete cache.data[gc[i]];}gc.splice(0,gcLen);}});}function getTickMarkLength(options){return options.drawTicks?options.tickMarkLength:0;}function getScaleLabelHeight(options){if(!options.display){return 0;}var font=_parseFont(options);var padding=toPadding(options.padding);return font.lineHeight+padding.height;}function getEvenSpacing(arr){var len=arr.length;var i,diff;if(len<2){return false;}for(diff=arr[0],i=1;i<len;++i){if(arr[i]-arr[i-1]!==diff){return false;}}return diff;}function calculateSpacing(majorIndices,ticks,axisLength,ticksLimit){var evenMajorSpacing=getEvenSpacing(majorIndices);var spacing=ticks.length/ticksLimit;if(!evenMajorSpacing){return Math.max(spacing,1);}var factors=_factorize(evenMajorSpacing);for(var i=0,ilen=factors.length-1;i<ilen;i++){var factor=factors[i];if(factor>spacing){return factor;}}return Math.max(spacing,1);}function getMajorIndices(ticks){var result=[];var i,ilen;for(i=0,ilen=ticks.length;i<ilen;i++){if(ticks[i].major){result.push(i);}}return result;}function skipMajors(ticks,newTicks,majorIndices,spacing){var count=0;var next=majorIndices[0];var i;spacing=Math.ceil(spacing);for(i=0;i<ticks.length;i++){if(i===next){newTicks.push(ticks[i]);count++;next=majorIndices[count*spacing];}}}function skip(ticks,newTicks,spacing,majorStart,majorEnd){var start=valueOrDefault(majorStart,0);var end=Math.min(valueOrDefault(majorEnd,ticks.length),ticks.length);var count=0;var length,i,next;spacing=Math.ceil(spacing);if(majorEnd){length=majorEnd-majorStart;spacing=length/Math.floor(length/spacing);}next=start;while(next<0){count++;next=Math.round(start+count*spacing);}for(i=Math.max(start,0);i<end;i++){if(i===next){newTicks.push(ticks[i]);count++;next=Math.round(start+count*spacing);}}}var Scale=function(_Element){_inherits(Scale,_Element);function Scale(cfg){var _this;_classCallCheck(this,Scale);_this=_possibleConstructorReturn(this,_getPrototypeOf(Scale).call(this));_this.id=cfg.id;_this.type=cfg.type;_this.options=cfg.options;_this.ctx=cfg.ctx;_this.chart=cfg.chart;_this.top=undefined;_this.bottom=undefined;_this.left=undefined;_this.right=undefined;_this.width=undefined;_this.height=undefined;_this._margins={left:0,right:0,top:0,bottom:0};_this.maxWidth=undefined;_this.maxHeight=undefined;_this.paddingTop=undefined;_this.paddingBottom=undefined;_this.paddingLeft=undefined;_this.paddingRight=undefined;_this.axis=undefined;_this.labelRotation=undefined;_this.min=undefined;_this.max=undefined;_this.ticks=[];_this._gridLineItems=null;_this._labelItems=null;_this._labelSizes=null;_this._length=0;_this._longestTextCache={};_this._startPixel=undefined;_this._endPixel=undefined;_this._reversePixels=false;_this._userMax=undefined;_this._userMin=undefined;_this._ticksLength=0;_this._borderValue=0;return _this;}_createClass(Scale,[{key:'parse',value:function parse(raw,index){return raw;}},{key:'parseObject',value:function parseObject(obj,axis,index){if(obj[axis]!==undefined){return this.parse(obj[axis],index);}return null;}},{key:'getUserBounds',value:function getUserBounds(){var min=this._userMin;var max=this._userMax;if(isNullOrUndef(min)||isNaN(min)){min=Number.POSITIVE_INFINITY;}if(isNullOrUndef(max)||isNaN(max)){max=Number.NEGATIVE_INFINITY;}return{min:min,max:max,minDefined:isNumberFinite(min),maxDefined:isNumberFinite(max)};}},{key:'getMinMax',value:function getMinMax(canStack){var me=this;var _me$getUserBounds=me.getUserBounds(),min=_me$getUserBounds.min,max=_me$getUserBounds.max,minDefined=_me$getUserBounds.minDefined,maxDefined=_me$getUserBounds.maxDefined;var minmax;if(minDefined&&maxDefined){return{min:min,max:max};}var metas=me.getMatchingVisibleMetas();for(var i=0,ilen=metas.length;i<ilen;++i){minmax=metas[i].controller.getMinMax(me,canStack);if(!minDefined){min=Math.min(min,minmax.min);}if(!maxDefined){max=Math.max(max,minmax.max);}}return{min:min,max:max};}},{key:'invalidateCaches',value:function invalidateCaches(){}},{key:'getPadding',value:function getPadding(){var me=this;return{left:me.paddingLeft||0,top:me.paddingTop||0,right:me.paddingRight||0,bottom:me.paddingBottom||0};}},{key:'getTicks',value:function getTicks(){return this.ticks;}},{key:'getLabels',value:function getLabels(){var data=this.chart.data;return this.options.labels||(this.isHorizontal()?data.xLabels:data.yLabels)||data.labels||[];}},{key:'beforeUpdate',value:function beforeUpdate(){callback(this.options.beforeUpdate,[this]);}},{key:'update',value:function update(maxWidth,maxHeight,margins){var me=this;var tickOpts=me.options.ticks;var sampleSize=tickOpts.sampleSize;me.beforeUpdate();me.maxWidth=maxWidth;me.maxHeight=maxHeight;me._margins=_extends({left:0,right:0,top:0,bottom:0},margins);me.ticks=null;me._labelSizes=null;me._gridLineItems=null;me._labelItems=null;me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();me.beforeDataLimits();me.determineDataLimits();me.afterDataLimits();me.beforeBuildTicks();me.ticks=me.buildTicks()||[];me.afterBuildTicks();var samplingEnabled=sampleSize<me.ticks.length;me._convertTicksToLabels(samplingEnabled?sample(me.ticks,sampleSize):me.ticks);me.configure();me.beforeCalculateLabelRotation();me.calculateLabelRotation();me.afterCalculateLabelRotation();me.beforeFit();me.fit();me.afterFit();me.ticks=tickOpts.display&&(tickOpts.autoSkip||tickOpts.source==='auto')?me._autoSkip(me.ticks):me.ticks;if(samplingEnabled){me._convertTicksToLabels(me.ticks);}me.afterUpdate();}},{key:'configure',value:function configure(){var me=this;var reversePixels=me.options.reverse;var startPixel,endPixel;if(me.isHorizontal()){startPixel=me.left;endPixel=me.right;}else{startPixel=me.top;endPixel=me.bottom;reversePixels=!reversePixels;}me._startPixel=startPixel;me._endPixel=endPixel;me._reversePixels=reversePixels;me._length=endPixel-startPixel;}},{key:'afterUpdate',value:function afterUpdate(){callback(this.options.afterUpdate,[this]);}},{key:'beforeSetDimensions',value:function beforeSetDimensions(){callback(this.options.beforeSetDimensions,[this]);}},{key:'setDimensions',value:function setDimensions(){var me=this;if(me.isHorizontal()){me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;me.top=0;me.bottom=me.height;}me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;}},{key:'afterSetDimensions',value:function afterSetDimensions(){callback(this.options.afterSetDimensions,[this]);}},{key:'beforeDataLimits',value:function beforeDataLimits(){callback(this.options.beforeDataLimits,[this]);}},{key:'determineDataLimits',value:function determineDataLimits(){}},{key:'afterDataLimits',value:function afterDataLimits(){callback(this.options.afterDataLimits,[this]);}},{key:'beforeBuildTicks',value:function beforeBuildTicks(){callback(this.options.beforeBuildTicks,[this]);}},{key:'buildTicks',value:function buildTicks(){return[];}},{key:'afterBuildTicks',value:function afterBuildTicks(){callback(this.options.afterBuildTicks,[this]);}},{key:'beforeTickToLabelConversion',value:function beforeTickToLabelConversion(){callback(this.options.beforeTickToLabelConversion,[this]);}},{key:'generateTickLabels',value:function generateTickLabels(ticks){var me=this;var tickOpts=me.options.ticks;var i,ilen,tick;for(i=0,ilen=ticks.length;i<ilen;i++){tick=ticks[i];tick.label=callback(tickOpts.callback,[tick.value,i,ticks],me);}}},{key:'afterTickToLabelConversion',value:function afterTickToLabelConversion(){callback(this.options.afterTickToLabelConversion,[this]);}},{key:'beforeCalculateLabelRotation',value:function beforeCalculateLabelRotation(){callback(this.options.beforeCalculateLabelRotation,[this]);}},{key:'calculateLabelRotation',value:function calculateLabelRotation(){var me=this;var options=me.options;var tickOpts=options.ticks;var numTicks=me.ticks.length;var minRotation=tickOpts.minRotation||0;var maxRotation=tickOpts.maxRotation;var labelRotation=minRotation;var tickWidth,maxHeight,maxLabelDiagonal;if(!me._isVisible()||!tickOpts.display||minRotation>=maxRotation||numTicks<=1||!me.isHorizontal()){me.labelRotation=minRotation;return;}var labelSizes=me._getLabelSizes();var maxLabelWidth=labelSizes.widest.width;var maxLabelHeight=labelSizes.highest.height-labelSizes.highest.offset;var maxWidth=Math.min(me.maxWidth,me.chart.width-maxLabelWidth);tickWidth=options.offset?me.maxWidth/numTicks:maxWidth/(numTicks-1);if(maxLabelWidth+6>tickWidth){tickWidth=maxWidth/(numTicks-(options.offset?0.5:1));maxHeight=me.maxHeight-getTickMarkLength(options.gridLines)-tickOpts.padding-getScaleLabelHeight(options.scaleLabel);maxLabelDiagonal=Math.sqrt(maxLabelWidth*maxLabelWidth+maxLabelHeight*maxLabelHeight);labelRotation=toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height+6)/tickWidth,1)),Math.asin(Math.min(maxHeight/maxLabelDiagonal,1))-Math.asin(maxLabelHeight/maxLabelDiagonal)));labelRotation=Math.max(minRotation,Math.min(maxRotation,labelRotation));}me.labelRotation=labelRotation;}},{key:'afterCalculateLabelRotation',value:function afterCalculateLabelRotation(){callback(this.options.afterCalculateLabelRotation,[this]);}},{key:'beforeFit',value:function beforeFit(){callback(this.options.beforeFit,[this]);}},{key:'fit',value:function fit(){var me=this;var minSize={width:0,height:0};var chart=me.chart;var opts=me.options;var tickOpts=opts.ticks;var scaleLabelOpts=opts.scaleLabel;var gridLineOpts=opts.gridLines;var display=me._isVisible();var labelsBelowTicks=opts.position!=='top'&&me.axis==='x';var isHorizontal=me.isHorizontal();if(isHorizontal){minSize.width=me.maxWidth;}else if(display){minSize.width=getTickMarkLength(gridLineOpts)+getScaleLabelHeight(scaleLabelOpts);}if(!isHorizontal){minSize.height=me.maxHeight;}else if(display){minSize.height=getTickMarkLength(gridLineOpts)+getScaleLabelHeight(scaleLabelOpts);}if(tickOpts.display&&display){var labelSizes=me._getLabelSizes();var firstLabelSize=labelSizes.first;var lastLabelSize=labelSizes.last;var widestLabelSize=labelSizes.widest;var highestLabelSize=labelSizes.highest;var lineSpace=highestLabelSize.offset*0.8;var tickPadding=tickOpts.padding;if(isHorizontal){var isRotated=me.labelRotation!==0;var angleRadians=toRadians(me.labelRotation);var cosRotation=Math.cos(angleRadians);var sinRotation=Math.sin(angleRadians);var labelHeight=sinRotation*widestLabelSize.width+cosRotation*(highestLabelSize.height-(isRotated?highestLabelSize.offset:0))+(isRotated?0:lineSpace);minSize.height=Math.min(me.maxHeight,minSize.height+labelHeight+tickPadding);var offsetLeft=me.getPixelForTick(0)-me.left;var offsetRight=me.right-me.getPixelForTick(me.ticks.length-1);var paddingLeft,paddingRight;if(isRotated){paddingLeft=labelsBelowTicks?cosRotation*firstLabelSize.width+sinRotation*firstLabelSize.offset:sinRotation*(firstLabelSize.height-firstLabelSize.offset);paddingRight=labelsBelowTicks?sinRotation*(lastLabelSize.height-lastLabelSize.offset):cosRotation*lastLabelSize.width+sinRotation*lastLabelSize.offset;}else{paddingLeft=firstLabelSize.width/2;paddingRight=lastLabelSize.width/2;}me.paddingLeft=Math.max((paddingLeft-offsetLeft)*me.width/(me.width-offsetLeft),0)+3;me.paddingRight=Math.max((paddingRight-offsetRight)*me.width/(me.width-offsetRight),0)+3;}else{var labelWidth=tickOpts.mirror?0:widestLabelSize.width+tickPadding+lineSpace;minSize.width=Math.min(me.maxWidth,minSize.width+labelWidth);me.paddingTop=firstLabelSize.height/2;me.paddingBottom=lastLabelSize.height/2;}}me._handleMargins();if(isHorizontal){me.width=me._length=chart.width-me._margins.left-me._margins.right;me.height=minSize.height;}else{me.width=minSize.width;me.height=me._length=chart.height-me._margins.top-me._margins.bottom;}}},{key:'_handleMargins',value:function _handleMargins(){var me=this;if(me._margins){me._margins.left=Math.max(me.paddingLeft,me._margins.left);me._margins.top=Math.max(me.paddingTop,me._margins.top);me._margins.right=Math.max(me.paddingRight,me._margins.right);me._margins.bottom=Math.max(me.paddingBottom,me._margins.bottom);}}},{key:'afterFit',value:function afterFit(){callback(this.options.afterFit,[this]);}},{key:'isHorizontal',value:function isHorizontal(){var _this$options=this.options,axis=_this$options.axis,position=_this$options.position;return position==='top'||position==='bottom'||axis==='x';}},{key:'isFullWidth',value:function isFullWidth(){return this.options.fullWidth;}},{key:'_convertTicksToLabels',value:function _convertTicksToLabels(ticks){var me=this;me.beforeTickToLabelConversion();me.generateTickLabels(ticks);me.afterTickToLabelConversion();}},{key:'_getLabelSizes',value:function _getLabelSizes(){var me=this;var labelSizes=me._labelSizes;if(!labelSizes){me._labelSizes=labelSizes=me._computeLabelSizes();}return labelSizes;}},{key:'_computeLabelSizes',value:function _computeLabelSizes(){var me=this;var ctx=me.ctx;var caches=me._longestTextCache;var sampleSize=me.options.ticks.sampleSize;var widths=[];var heights=[];var offsets=[];var ticks=me.ticks;if(sampleSize<ticks.length){ticks=sample(ticks,sampleSize);}var length=ticks.length;var i,j,jlen,label,tickFont,fontString,cache,lineHeight,width,height,nestedLabel;for(i=0;i<length;++i){label=ticks[i].label;tickFont=me._resolveTickFontOptions(i);ctx.font=fontString=tickFont.string;cache=caches[fontString]=caches[fontString]||{data:{},gc:[]};lineHeight=tickFont.lineHeight;width=height=0;if(!isNullOrUndef(label)&&!isArray(label)){width=_measureText(ctx,cache.data,cache.gc,width,label);height=lineHeight;}else if(isArray(label)){for(j=0,jlen=label.length;j<jlen;++j){nestedLabel=label[j];if(!isNullOrUndef(nestedLabel)&&!isArray(nestedLabel)){width=_measureText(ctx,cache.data,cache.gc,width,nestedLabel);height+=lineHeight;}}}widths.push(width);heights.push(height);offsets.push(lineHeight/2);}garbageCollect(caches,length);var widest=widths.indexOf(Math.max.apply(null,widths));var highest=heights.indexOf(Math.max.apply(null,heights));function valueAt(idx){return{width:widths[idx]||0,height:heights[idx]||0,offset:offsets[idx]||0};}return{first:valueAt(0),last:valueAt(length-1),widest:valueAt(widest),highest:valueAt(highest)};}},{key:'getLabelForValue',value:function getLabelForValue(value){return value;}},{key:'getPixelForValue',value:function getPixelForValue(value){return NaN;}},{key:'getValueForPixel',value:function getValueForPixel(pixel){}},{key:'getPixelForTick',value:function getPixelForTick(index){var me=this;var offset=me.options.offset;var numTicks=me.ticks.length;var tickWidth=1/Math.max(numTicks-(offset?0:1),1);return index<0||index>numTicks-1?null:me.getPixelForDecimal(index*tickWidth+(offset?tickWidth/2:0));}},{key:'getPixelForDecimal',value:function getPixelForDecimal(decimal){var me=this;if(me._reversePixels){decimal=1-decimal;}return me._startPixel+decimal*me._length;}},{key:'getDecimalForPixel',value:function getDecimalForPixel(pixel){var decimal=(pixel-this._startPixel)/this._length;return this._reversePixels?1-decimal:decimal;}},{key:'getBasePixel',value:function getBasePixel(){return this.getPixelForValue(this.getBaseValue());}},{key:'getBaseValue',value:function getBaseValue(){var min=this.min,max=this.max;return min<0&&max<0?max:min>0&&max>0?min:0;}},{key:'_autoSkip',value:function _autoSkip(ticks){var me=this;var tickOpts=me.options.ticks;var axisLength=me._length;var ticksLimit=tickOpts.maxTicksLimit||axisLength/me._tickSize();var majorIndices=tickOpts.major.enabled?getMajorIndices(ticks):[];var numMajorIndices=majorIndices.length;var first=majorIndices[0];var last=majorIndices[numMajorIndices-1];var newTicks=[];if(numMajorIndices>ticksLimit){skipMajors(ticks,newTicks,majorIndices,numMajorIndices/ticksLimit);return newTicks;}var spacing=calculateSpacing(majorIndices,ticks,axisLength,ticksLimit);if(numMajorIndices>0){var i,ilen;var avgMajorSpacing=numMajorIndices>1?Math.round((last-first)/(numMajorIndices-1)):null;skip(ticks,newTicks,spacing,isNullOrUndef(avgMajorSpacing)?0:first-avgMajorSpacing,first);for(i=0,ilen=numMajorIndices-1;i<ilen;i++){skip(ticks,newTicks,spacing,majorIndices[i],majorIndices[i+1]);}skip(ticks,newTicks,spacing,last,isNullOrUndef(avgMajorSpacing)?ticks.length:last+avgMajorSpacing);return newTicks;}skip(ticks,newTicks,spacing);return newTicks;}},{key:'_tickSize',value:function _tickSize(){var me=this;var optionTicks=me.options.ticks;var rot=toRadians(me.labelRotation);var cos=Math.abs(Math.cos(rot));var sin=Math.abs(Math.sin(rot));var labelSizes=me._getLabelSizes();var padding=optionTicks.autoSkipPadding||0;var w=labelSizes?labelSizes.widest.width+padding:0;var h=labelSizes?labelSizes.highest.height+padding:0;return me.isHorizontal()?h*cos>w*sin?w/cos:h/sin:h*sin<w*cos?h/cos:w/sin;}},{key:'_isVisible',value:function _isVisible(){var display=this.options.display;if(display!=='auto'){return!!display;}return this.getMatchingVisibleMetas().length>0;}},{key:'_computeGridLineItems',value:function _computeGridLineItems(chartArea){var me=this;var axis=me.axis;var chart=me.chart;var options=me.options;var gridLines=options.gridLines,position=options.position;var offsetGridLines=gridLines.offsetGridLines;var isHorizontal=me.isHorizontal();var ticks=me.ticks;var ticksLength=ticks.length+(offsetGridLines?1:0);var tl=getTickMarkLength(gridLines);var items=[];var context={scale:me,tick:ticks[0]};var axisWidth=gridLines.drawBorder?resolve([gridLines.borderWidth,gridLines.lineWidth,0],context,0):0;var axisHalfWidth=axisWidth/2;var alignBorderValue=function alignBorderValue(pixel){return _alignPixel(chart,pixel,axisWidth);};var borderValue,i,lineValue,alignedLineValue;var tx1,ty1,tx2,ty2,x1,y1,x2,y2;if(position==='top'){borderValue=alignBorderValue(me.bottom);ty1=me.bottom-tl;ty2=borderValue-axisHalfWidth;y1=alignBorderValue(chartArea.top)+axisHalfWidth;y2=chartArea.bottom;}else if(position==='bottom'){borderValue=alignBorderValue(me.top);y1=chartArea.top;y2=alignBorderValue(chartArea.bottom)-axisHalfWidth;ty1=borderValue+axisHalfWidth;ty2=me.top+tl;}else if(position==='left'){borderValue=alignBorderValue(me.right);tx1=me.right-tl;tx2=borderValue-axisHalfWidth;x1=alignBorderValue(chartArea.left)+axisHalfWidth;x2=chartArea.right;}else if(position==='right'){borderValue=alignBorderValue(me.left);x1=chartArea.left;x2=alignBorderValue(chartArea.right)-axisHalfWidth;tx1=borderValue+axisHalfWidth;tx2=me.left+tl;}else if(axis==='x'){if(position==='center'){borderValue=alignBorderValue((chartArea.top+chartArea.bottom)/2);}else if(isObject(position)){var positionAxisID=Object.keys(position)[0];var value=position[positionAxisID];borderValue=alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));}y1=chartArea.top;y2=chartArea.bottom;ty1=borderValue+axisHalfWidth;ty2=ty1+tl;}else if(axis==='y'){if(position==='center'){borderValue=alignBorderValue((chartArea.left+chartArea.right)/2);}else if(isObject(position)){var _positionAxisID=Object.keys(position)[0];var _value=position[_positionAxisID];borderValue=alignBorderValue(me.chart.scales[_positionAxisID].getPixelForValue(_value));}tx1=borderValue-axisHalfWidth;tx2=tx1-tl;x1=chartArea.left;x2=chartArea.right;}for(i=0;i<ticksLength;++i){var tick=ticks[i]||{};context={scale:me,tick:tick};var lineWidth=resolve([gridLines.lineWidth],context,i);var lineColor=resolve([gridLines.color],context,i);var borderDash=gridLines.borderDash||[];var borderDashOffset=resolve([gridLines.borderDashOffset],context,i);lineValue=getPixelForGridLine(me,i,offsetGridLines);if(lineValue===undefined){continue;}alignedLineValue=_alignPixel(chart,lineValue,lineWidth);if(isHorizontal){tx1=tx2=x1=x2=alignedLineValue;}else{ty1=ty2=y1=y2=alignedLineValue;}items.push({tx1:tx1,ty1:ty1,tx2:tx2,ty2:ty2,x1:x1,y1:y1,x2:x2,y2:y2,width:lineWidth,color:lineColor,borderDash:borderDash,borderDashOffset:borderDashOffset});}me._ticksLength=ticksLength;me._borderValue=borderValue;return items;}},{key:'_computeLabelItems',value:function _computeLabelItems(chartArea){var me=this;var axis=me.axis;var options=me.options;var position=options.position,optionTicks=options.ticks;var isMirrored=optionTicks.mirror;var isHorizontal=me.isHorizontal();var ticks=me.ticks;var tickPadding=optionTicks.padding;var tl=getTickMarkLength(options.gridLines);var rotation=-toRadians(me.labelRotation);var items=[];var i,ilen,tick,label,x,y,textAlign,pixel,font,lineHeight,lineCount,textOffset;if(position==='top'){y=me.bottom-tl-tickPadding;textAlign=!rotation?'center':'left';}else if(position==='bottom'){y=me.top+tl+tickPadding;textAlign=!rotation?'center':'right';}else if(position==='left'){x=me.right-(isMirrored?0:tl)-tickPadding;textAlign=isMirrored?'left':'right';}else if(position==='right'){x=me.left+(isMirrored?0:tl)+tickPadding;textAlign=isMirrored?'right':'left';}else if(axis==='x'){if(position==='center'){y=(chartArea.top+chartArea.bottom)/2+tl+tickPadding;}else if(isObject(position)){var positionAxisID=Object.keys(position)[0];var value=position[positionAxisID];y=me.chart.scales[positionAxisID].getPixelForValue(value)+tl+tickPadding;}textAlign=!rotation?'center':'right';}else if(axis==='y'){if(position==='center'){x=(chartArea.left+chartArea.right)/2-tl-tickPadding;}else if(isObject(position)){var _positionAxisID2=Object.keys(position)[0];var _value2=position[_positionAxisID2];x=me.chart.scales[_positionAxisID2].getPixelForValue(_value2);}textAlign='right';}for(i=0,ilen=ticks.length;i<ilen;++i){tick=ticks[i];label=tick.label;pixel=me.getPixelForTick(i)+optionTicks.labelOffset;font=me._resolveTickFontOptions(i);lineHeight=font.lineHeight;lineCount=isArray(label)?label.length:1;if(isHorizontal){x=pixel;if(position==='top'){textOffset=(Math.sin(rotation)*(lineCount/2)+0.5)*lineHeight;textOffset-=(rotation===0?lineCount-0.5:Math.cos(rotation)*(lineCount/2))*lineHeight;}else{textOffset=Math.sin(rotation)*(lineCount/2)*lineHeight;textOffset+=(rotation===0?0.5:Math.cos(rotation)*(lineCount/2))*lineHeight;}}else{y=pixel;textOffset=(1-lineCount)*lineHeight/2;}items.push({x:x,y:y,rotation:rotation,label:label,font:font,textOffset:textOffset,textAlign:textAlign});}return items;}},{key:'drawGrid',value:function drawGrid(chartArea){var me=this;var gridLines=me.options.gridLines;var ctx=me.ctx;var chart=me.chart;var context={scale:me,tick:me.ticks[0]};var axisWidth=gridLines.drawBorder?resolve([gridLines.borderWidth,gridLines.lineWidth,0],context,0):0;var items=me._gridLineItems||(me._gridLineItems=me._computeGridLineItems(chartArea));var i,ilen;if(gridLines.display){for(i=0,ilen=items.length;i<ilen;++i){var item=items[i];var width=item.width;var color=item.color;if(width&&color){ctx.save();ctx.lineWidth=width;ctx.strokeStyle=color;if(ctx.setLineDash){ctx.setLineDash(item.borderDash);ctx.lineDashOffset=item.borderDashOffset;}ctx.beginPath();if(gridLines.drawTicks){ctx.moveTo(item.tx1,item.ty1);ctx.lineTo(item.tx2,item.ty2);}if(gridLines.drawOnChartArea){ctx.moveTo(item.x1,item.y1);ctx.lineTo(item.x2,item.y2);}ctx.stroke();ctx.restore();}}}if(axisWidth){var firstLineWidth=axisWidth;context={scale:me,tick:me.ticks[me._ticksLength-1]};var lastLineWidth=resolve([gridLines.lineWidth,1],context,me._ticksLength-1);var borderValue=me._borderValue;var x1,x2,y1,y2;if(me.isHorizontal()){x1=_alignPixel(chart,me.left,firstLineWidth)-firstLineWidth/2;x2=_alignPixel(chart,me.right,lastLineWidth)+lastLineWidth/2;y1=y2=borderValue;}else{y1=_alignPixel(chart,me.top,firstLineWidth)-firstLineWidth/2;y2=_alignPixel(chart,me.bottom,lastLineWidth)+lastLineWidth/2;x1=x2=borderValue;}ctx.lineWidth=axisWidth;ctx.strokeStyle=resolve([gridLines.borderColor,gridLines.color],context,0);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}}},{key:'drawLabels',value:function drawLabels(chartArea){var me=this;var optionTicks=me.options.ticks;if(!optionTicks.display){return;}var ctx=me.ctx;var items=me._labelItems||(me._labelItems=me._computeLabelItems(chartArea));var i,j,ilen,jlen;for(i=0,ilen=items.length;i<ilen;++i){var item=items[i];var tickFont=item.font;var useStroke=tickFont.lineWidth>0&&tickFont.strokeStyle!=='';ctx.save();ctx.translate(item.x,item.y);ctx.rotate(item.rotation);ctx.font=tickFont.string;ctx.fillStyle=tickFont.color;ctx.textBaseline='middle';ctx.textAlign=item.textAlign;if(useStroke){ctx.strokeStyle=tickFont.strokeStyle;ctx.lineWidth=tickFont.lineWidth;}var label=item.label;var y=item.textOffset;if(isArray(label)){for(j=0,jlen=label.length;j<jlen;++j){if(useStroke){ctx.strokeText(''+label[j],0,y);}ctx.fillText(''+label[j],0,y);y+=tickFont.lineHeight;}}else{if(useStroke){ctx.strokeText(label,0,y);}ctx.fillText(label,0,y);}ctx.restore();}}},{key:'drawTitle',value:function drawTitle(chartArea){var me=this;var ctx=me.ctx;var options=me.options;var scaleLabel=options.scaleLabel;if(!scaleLabel.display){return;}var scaleLabelFontColor=valueOrDefault(scaleLabel.fontColor,defaults.fontColor);var scaleLabelFont=_parseFont(scaleLabel);var scaleLabelPadding=toPadding(scaleLabel.padding);var halfLineHeight=scaleLabelFont.lineHeight/2;var scaleLabelAlign=scaleLabel.align;var position=options.position;var isReverse=me.options.reverse;var rotation=0;var textAlign;var scaleLabelX,scaleLabelY;if(me.isHorizontal()){switch(scaleLabelAlign){case'start':scaleLabelX=me.left+(isReverse?me.width:0);textAlign=isReverse?'right':'left';break;case'end':scaleLabelX=me.left+(isReverse?0:me.width);textAlign=isReverse?'left':'right';break;default:scaleLabelX=me.left+me.width/2;textAlign='center';}scaleLabelY=position==='top'?me.top+halfLineHeight+scaleLabelPadding.top:me.bottom-halfLineHeight-scaleLabelPadding.bottom;}else{var isLeft=position==='left';scaleLabelX=isLeft?me.left+halfLineHeight+scaleLabelPadding.top:me.right-halfLineHeight-scaleLabelPadding.top;switch(scaleLabelAlign){case'start':scaleLabelY=me.top+(isReverse?0:me.height);textAlign=isReverse===isLeft?'right':'left';break;case'end':scaleLabelY=me.top+(isReverse?me.height:0);textAlign=isReverse===isLeft?'left':'right';break;default:scaleLabelY=me.top+me.height/2;textAlign='center';}rotation=isLeft?-0.5*Math.PI:0.5*Math.PI;}ctx.save();ctx.translate(scaleLabelX,scaleLabelY);ctx.rotate(rotation);ctx.textAlign=textAlign;ctx.textBaseline='middle';ctx.fillStyle=scaleLabelFontColor;ctx.font=scaleLabelFont.string;ctx.fillText(scaleLabel.labelString,0,0);ctx.restore();}},{key:'draw',value:function draw(chartArea){var me=this;if(!me._isVisible()){return;}me.drawGrid(chartArea);me.drawTitle();me.drawLabels(chartArea);}},{key:'_layers',value:function _layers(){var me=this;var opts=me.options;var tz=opts.ticks&&opts.ticks.z||0;var gz=opts.gridLines&&opts.gridLines.z||0;if(!me._isVisible()||tz===gz||me.draw!==me._draw){return[{z:tz,draw:function draw(chartArea){me.draw(chartArea);}}];}return[{z:gz,draw:function draw(chartArea){me.drawGrid(chartArea);me.drawTitle();}},{z:tz,draw:function draw(chartArea){me.drawLabels(chartArea);}}];}},{key:'getMatchingVisibleMetas',value:function getMatchingVisibleMetas(type){var me=this;var metas=me.chart.getSortedVisibleDatasetMetas();var axisID=me.axis+'AxisID';var result=[];var i,ilen;for(i=0,ilen=metas.length;i<ilen;++i){var meta=metas[i];if(meta[axisID]===me.id&&(!type||meta.type===type)){result.push(meta);}}return result;}},{key:'_resolveTickFontOptions',value:function _resolveTickFontOptions(index){var me=this;var options=me.options.ticks;var context={chart:me.chart,scale:me,tick:me.ticks[index],index:index};return _extends(_parseFont({fontFamily:resolve([options.fontFamily],context),fontSize:resolve([options.fontSize],context),fontStyle:resolve([options.fontStyle],context),lineHeight:resolve([options.lineHeight],context)}),{color:resolve([options.fontColor,defaults.fontColor],context),lineWidth:resolve([options.lineWidth],context),strokeStyle:resolve([options.strokeStyle],context)});}}]);return Scale;}(Element$1);Scale.prototype._draw=Scale.prototype.draw;var defaultConfig={};var CategoryScale=function(_Scale){_inherits(CategoryScale,_Scale);function CategoryScale(cfg){var _this;_classCallCheck(this,CategoryScale);_this=_possibleConstructorReturn(this,_getPrototypeOf(CategoryScale).call(this,cfg));_this._numLabels=0;_this._startValue=undefined;_this._valueRange=0;return _this;}_createClass(CategoryScale,[{key:'parse',value:function parse(raw,index){var labels=this.getLabels();if(labels[index]===raw){return index;}var first=labels.indexOf(raw);var last=labels.lastIndexOf(raw);return first===-1||first!==last?index:first;}},{key:'determineDataLimits',value:function determineDataLimits(){var me=this;var max=me.getLabels().length-1;me.min=Math.max(me._userMin||0,0);me.max=Math.min(me._userMax||max,max);}},{key:'buildTicks',value:function buildTicks(){var me=this;var min=me.min;var max=me.max;var offset=me.options.offset;var labels=me.getLabels();labels=min===0&&max===labels.length-1?labels:labels.slice(min,max+1);me._numLabels=labels.length;me._valueRange=Math.max(labels.length-(offset?0:1),1);me._startValue=me.min-(offset?0.5:0);return labels.map(function(l){return{value:l};});}},{key:'getLabelForValue',value:function getLabelForValue(value){var me=this;var labels=me.getLabels();if(value>=0&&value<labels.length){return labels[value];}return value;}},{key:'configure',value:function configure(){var me=this;_get(_getPrototypeOf(CategoryScale.prototype),'configure',this).call(this);if(!me.isHorizontal()){me._reversePixels=!me._reversePixels;}}},{key:'getPixelForValue',value:function getPixelForValue(value){var me=this;if(typeof value!=='number'){value=me.parse(value);}return me.getPixelForDecimal((value-me._startValue)/me._valueRange);}},{key:'getPixelForTick',value:function getPixelForTick(index){var me=this;var ticks=me.ticks;if(index<0||index>ticks.length-1){return null;}return me.getPixelForValue(index*me._numLabels/ticks.length+me.min);}},{key:'getValueForPixel',value:function getValueForPixel(pixel){var me=this;var value=Math.round(me._startValue+me.getDecimalForPixel(pixel)*me._valueRange);return Math.min(Math.max(value,0),me.ticks.length-1);}},{key:'getBasePixel',value:function getBasePixel(){return this.bottom;}}]);return CategoryScale;}(Scale);_defineProperty(CategoryScale,'id','category');_defineProperty(CategoryScale,'defaults',defaultConfig);function niceNum(range,round){var exponent=Math.floor(log10(range));var fraction=range/Math.pow(10,exponent);var niceFraction;if(round){if(fraction<1.5){niceFraction=1;}else if(fraction<3){niceFraction=2;}else if(fraction<7){niceFraction=5;}else{niceFraction=10;}}else if(fraction<=1.0){niceFraction=1;}else if(fraction<=2){niceFraction=2;}else if(fraction<=5){niceFraction=5;}else{niceFraction=10;}return niceFraction*Math.pow(10,exponent);}function generateTicks(generationOptions,dataRange){var ticks=[];var MIN_SPACING=1e-14;var stepSize=generationOptions.stepSize,min=generationOptions.min,max=generationOptions.max,precision=generationOptions.precision;var unit=stepSize||1;var maxNumSpaces=generationOptions.maxTicks-1;var rmin=dataRange.min,rmax=dataRange.max;var spacing=niceNum((rmax-rmin)/maxNumSpaces/unit)*unit;var factor,niceMin,niceMax,numSpaces;if(spacing<MIN_SPACING&&isNullOrUndef(min)&&isNullOrUndef(max)){return[{value:rmin},{value:rmax}];}numSpaces=Math.ceil(rmax/spacing)-Math.floor(rmin/spacing);if(numSpaces>maxNumSpaces){spacing=niceNum(numSpaces*spacing/maxNumSpaces/unit)*unit;}if(stepSize||isNullOrUndef(precision)){factor=Math.pow(10,_decimalPlaces(spacing));}else{factor=Math.pow(10,precision);spacing=Math.ceil(spacing*factor)/factor;}niceMin=Math.floor(rmin/spacing)*spacing;niceMax=Math.ceil(rmax/spacing)*spacing;if(stepSize&&!isNullOrUndef(min)&&!isNullOrUndef(max)){if(almostWhole((max-min)/stepSize,spacing/1000)){niceMin=min;niceMax=max;}}numSpaces=(niceMax-niceMin)/spacing;if(almostEquals(numSpaces,Math.round(numSpaces),spacing/1000)){numSpaces=Math.round(numSpaces);}else{numSpaces=Math.ceil(numSpaces);}niceMin=Math.round(niceMin*factor)/factor;niceMax=Math.round(niceMax*factor)/factor;ticks.push({value:isNullOrUndef(min)?niceMin:min});for(var j=1;j<numSpaces;++j){ticks.push({value:Math.round((niceMin+j*spacing)*factor)/factor});}ticks.push({value:isNullOrUndef(max)?niceMax:max});return ticks;}var LinearScaleBase=function(_Scale){_inherits(LinearScaleBase,_Scale);function LinearScaleBase(cfg){var _this;_classCallCheck(this,LinearScaleBase);_this=_possibleConstructorReturn(this,_getPrototypeOf(LinearScaleBase).call(this,cfg));_this.start=undefined;_this.end=undefined;_this._startValue=undefined;_this._endValue=undefined;_this._valueRange=0;return _this;}_createClass(LinearScaleBase,[{key:'parse',value:function parse(raw,index){if(isNullOrUndef(raw)){return NaN;}if((typeof raw==='number'||raw instanceof Number)&&!isFinite(+raw)){return NaN;}return+raw;}},{key:'handleTickRangeOptions',value:function handleTickRangeOptions(){var me=this;var opts=me.options;if(opts.beginAtZero){var minSign=sign(me.min);var maxSign=sign(me.max);if(minSign<0&&maxSign<0){me.max=0;}else if(minSign>0&&maxSign>0){me.min=0;}}var setMin=opts.min!==undefined||opts.suggestedMin!==undefined;var setMax=opts.max!==undefined||opts.suggestedMax!==undefined;if(opts.min!==undefined){me.min=opts.min;}else if(opts.suggestedMin!==undefined){if(me.min===null){me.min=opts.suggestedMin;}else{me.min=Math.min(me.min,opts.suggestedMin);}}if(opts.max!==undefined){me.max=opts.max;}else if(opts.suggestedMax!==undefined){if(me.max===null){me.max=opts.suggestedMax;}else{me.max=Math.max(me.max,opts.suggestedMax);}}if(setMin!==setMax){if(me.min>=me.max){if(setMin){me.max=me.min+1;}else{me.min=me.max-1;}}}if(me.min===me.max){me.max++;if(!opts.beginAtZero){me.min--;}}}},{key:'getTickLimit',value:function getTickLimit(){var me=this;var tickOpts=me.options.ticks;var maxTicksLimit=tickOpts.maxTicksLimit,stepSize=tickOpts.stepSize;var maxTicks;if(stepSize){maxTicks=Math.ceil(me.max/stepSize)-Math.floor(me.min/stepSize)+1;}else{maxTicks=me.computeTickLimit();maxTicksLimit=maxTicksLimit||11;}if(maxTicksLimit){maxTicks=Math.min(maxTicksLimit,maxTicks);}return maxTicks;}},{key:'computeTickLimit',value:function computeTickLimit(){return Number.POSITIVE_INFINITY;}},{key:'handleDirectionalChanges',value:function handleDirectionalChanges(ticks){return ticks;}},{key:'buildTicks',value:function buildTicks(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var maxTicks=me.getTickLimit();maxTicks=Math.max(2,maxTicks);var numericGeneratorOptions={maxTicks:maxTicks,min:opts.min,max:opts.max,precision:tickOpts.precision,stepSize:valueOrDefault(tickOpts.fixedStepSize,tickOpts.stepSize)};var ticks=generateTicks(numericGeneratorOptions,me);ticks=me.handleDirectionalChanges(ticks);_setMinAndMaxByKey(ticks,me,'value');if(opts.reverse){ticks.reverse();me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}return ticks;}},{key:'configure',value:function configure(){var me=this;var ticks=me.ticks;var start=me.min;var end=me.max;_get(_getPrototypeOf(LinearScaleBase.prototype),'configure',this).call(this);if(me.options.offset&&ticks.length){var offset=(end-start)/Math.max(ticks.length-1,1)/2;start-=offset;end+=offset;}me._startValue=start;me._endValue=end;me._valueRange=end-start;}},{key:'getLabelForValue',value:function getLabelForValue(value){return new Intl.NumberFormat(this.options.locale).format(value);}}]);return LinearScaleBase;}(Scale);var defaultConfig$1={ticks:{callback:Ticks.formatters.numeric}};var LinearScale=function(_LinearScaleBase){_inherits(LinearScale,_LinearScaleBase);function LinearScale(){_classCallCheck(this,LinearScale);return _possibleConstructorReturn(this,_getPrototypeOf(LinearScale).apply(this,arguments));}_createClass(LinearScale,[{key:'determineDataLimits',value:function determineDataLimits(){var me=this;var options=me.options;var minmax=me.getMinMax(true);var min=minmax.min;var max=minmax.max;me.min=isNumberFinite(min)?min:valueOrDefault(options.suggestedMin,0);me.max=isNumberFinite(max)?max:valueOrDefault(options.suggestedMax,1);if(options.stacked&&min>0){me.min=0;}me.handleTickRangeOptions();}},{key:'computeTickLimit',value:function computeTickLimit(){var me=this;if(me.isHorizontal()){return Math.ceil(me.width/40);}var tickFont=_parseFont(me.options.ticks);return Math.ceil(me.height/tickFont.lineHeight);}},{key:'handleDirectionalChanges',value:function handleDirectionalChanges(ticks){return this.isHorizontal()?ticks:ticks.reverse();}},{key:'getPixelForValue',value:function getPixelForValue(value){var me=this;return me.getPixelForDecimal((value-me._startValue)/me._valueRange);}},{key:'getValueForPixel',value:function getValueForPixel(pixel){return this._startValue+this.getDecimalForPixel(pixel)*this._valueRange;}},{key:'getPixelForTick',value:function getPixelForTick(index){var ticks=this.ticks;if(index<0||index>ticks.length-1){return null;}return this.getPixelForValue(ticks[index].value);}}]);return LinearScale;}(LinearScaleBase);_defineProperty(LinearScale,'id','linear');_defineProperty(LinearScale,'defaults',defaultConfig$1);function isMajor(tickVal){var remain=tickVal/Math.pow(10,Math.floor(log10(tickVal)));return remain===1;}function finiteOrDefault(value,def){return isNumberFinite(value)?value:def;}function generateTicks$1(generationOptions,dataRange){var endExp=Math.floor(log10(dataRange.max));var endSignificand=Math.ceil(dataRange.max/Math.pow(10,endExp));var ticks=[];var tickVal=finiteOrDefault(generationOptions.min,Math.pow(10,Math.floor(log10(dataRange.min))));var exp=Math.floor(log10(tickVal));var significand=Math.floor(tickVal/Math.pow(10,exp));var precision=exp<0?Math.pow(10,Math.abs(exp)):1;do{ticks.push({value:tickVal,major:isMajor(tickVal)});++significand;if(significand===10){significand=1;++exp;precision=exp>=0?1:precision;}tickVal=Math.round(significand*Math.pow(10,exp)*precision)/precision;}while(exp<endExp||exp===endExp&&significand<endSignificand);var lastTick=finiteOrDefault(generationOptions.max,tickVal);ticks.push({value:lastTick,major:isMajor(tickVal)});return ticks;}var defaultConfig$2={ticks:{callback:Ticks.formatters.numeric,major:{enabled:true}}};var LogarithmicScale=function(_Scale){_inherits(LogarithmicScale,_Scale);function LogarithmicScale(cfg){var _this;_classCallCheck(this,LogarithmicScale);_this=_possibleConstructorReturn(this,_getPrototypeOf(LogarithmicScale).call(this,cfg));_this.start=undefined;_this.end=undefined;_this._startValue=undefined;_this._valueRange=0;return _this;}_createClass(LogarithmicScale,[{key:'parse',value:function parse(raw,index){var value=LinearScaleBase.prototype.parse.apply(this,[raw,index]);if(value===0){return undefined;}return isNumberFinite(value)&&value>0?value:NaN;}},{key:'determineDataLimits',value:function determineDataLimits(){var me=this;var minmax=me.getMinMax(true);var min=minmax.min;var max=minmax.max;me.min=isNumberFinite(min)?Math.max(0,min):null;me.max=isNumberFinite(max)?Math.max(0,max):null;me.handleTickRangeOptions();}},{key:'handleTickRangeOptions',value:function handleTickRangeOptions(){var me=this;var DEFAULT_MIN=1;var DEFAULT_MAX=10;var min=me.min;var max=me.max;if(min===max){if(min<=0){min=DEFAULT_MIN;max=DEFAULT_MAX;}else{min=Math.pow(10,Math.floor(log10(min))-1);max=Math.pow(10,Math.floor(log10(max))+1);}}if(min<=0){min=Math.pow(10,Math.floor(log10(max))-1);}if(max<=0){max=Math.pow(10,Math.floor(log10(min))+1);}me.min=min;me.max=max;}},{key:'buildTicks',value:function buildTicks(){var me=this;var opts=me.options;var generationOptions={min:me._userMin,max:me._userMax};var ticks=generateTicks$1(generationOptions,me);var reverse=!me.isHorizontal();_setMinAndMaxByKey(ticks,me,'value');if(opts.reverse){reverse=!reverse;me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}if(reverse){ticks.reverse();}return ticks;}},{key:'getLabelForValue',value:function getLabelForValue(value){return value===undefined?'0':new Intl.NumberFormat(this.options.locale).format(value);}},{key:'getPixelForTick',value:function getPixelForTick(index){var ticks=this.ticks;if(index<0||index>ticks.length-1){return null;}return this.getPixelForValue(ticks[index].value);}},{key:'configure',value:function configure(){var me=this;var start=me.min;_get(_getPrototypeOf(LogarithmicScale.prototype),'configure',this).call(this);me._startValue=log10(start);me._valueRange=log10(me.max)-log10(start);}},{key:'getPixelForValue',value:function getPixelForValue(value){var me=this;if(value===undefined||value===0){value=me.min;}return me.getPixelForDecimal(value===me.min?0:(log10(value)-me._startValue)/me._valueRange);}},{key:'getValueForPixel',value:function getValueForPixel(pixel){var me=this;var decimal=me.getDecimalForPixel(pixel);return Math.pow(10,me._startValue+decimal*me._valueRange);}}]);return LogarithmicScale;}(Scale);_defineProperty(LogarithmicScale,'id','logarithmic');_defineProperty(LogarithmicScale,'defaults',defaultConfig$2);var valueOrDefault$2=helpers.valueOrDefault;var valueAtIndexOrDefault$1=helpers.valueAtIndexOrDefault;var resolve$2=helpers.options.resolve;var defaultConfig$3={display:true,animate:true,position:'chartArea',angleLines:{display:true,color:'rgba(0,0,0,0.1)',lineWidth:1,borderDash:[],borderDashOffset:0.0},gridLines:{circular:false},ticks:{showLabelBackdrop:true,backdropColor:'rgba(255,255,255,0.75)',backdropPaddingY:2,backdropPaddingX:2,callback:Ticks.formatters.numeric},pointLabels:{display:true,fontSize:10,callback:function callback(label){return label;}}};function getTickBackdropHeight(opts){var tickOpts=opts.ticks;if(tickOpts.display&&opts.display){return valueOrDefault$2(tickOpts.fontSize,defaults.fontSize)+tickOpts.backdropPaddingY*2;}return 0;}function measureLabelSize(ctx,lineHeight,label){if(helpers.isArray(label)){return{w:_longestText(ctx,ctx.font,label),h:label.length*lineHeight};}return{w:ctx.measureText(label).width,h:lineHeight};}function determineLimits(angle,pos,size,min,max){if(angle===min||angle===max){return{start:pos-size/2,end:pos+size/2};}else if(angle<min||angle>max){return{start:pos-size,end:pos};}return{start:pos,end:pos+size};}function fitWithPointLabels(scale){var plFont=helpers.options._parseFont(scale.options.pointLabels);var furthestLimits={l:0,r:scale.width,t:0,b:scale.height-scale.paddingTop};var furthestAngles={};var i,textSize,pointPosition;scale.ctx.font=plFont.string;scale._pointLabelSizes=[];var valueCount=scale.chart.data.labels.length;for(i=0;i<valueCount;i++){pointPosition=scale.getPointPosition(i,scale.drawingArea+5);textSize=measureLabelSize(scale.ctx,plFont.lineHeight,scale.pointLabels[i]);scale._pointLabelSizes[i]=textSize;var angleRadians=scale.getIndexAngle(i);var angle=toDegrees(angleRadians);var hLimits=determineLimits(angle,pointPosition.x,textSize.w,0,180);var vLimits=determineLimits(angle,pointPosition.y,textSize.h,90,270);if(hLimits.start<furthestLimits.l){furthestLimits.l=hLimits.start;furthestAngles.l=angleRadians;}if(hLimits.end>furthestLimits.r){furthestLimits.r=hLimits.end;furthestAngles.r=angleRadians;}if(vLimits.start<furthestLimits.t){furthestLimits.t=vLimits.start;furthestAngles.t=angleRadians;}if(vLimits.end>furthestLimits.b){furthestLimits.b=vLimits.end;furthestAngles.b=angleRadians;}}scale._setReductions(scale.drawingArea,furthestLimits,furthestAngles);}function getTextAlignForAngle(angle){if(angle===0||angle===180){return'center';}else if(angle<180){return'left';}return'right';}function fillText(ctx,text,position,lineHeight){var y=position.y+lineHeight/2;var i,ilen;if(helpers.isArray(text)){for(i=0,ilen=text.length;i<ilen;++i){ctx.fillText(text[i],position.x,y);y+=lineHeight;}}else{ctx.fillText(text,position.x,y);}}function adjustPointPositionForLabelHeight(angle,textSize,position){if(angle===90||angle===270){position.y-=textSize.h/2;}else if(angle>270||angle<90){position.y-=textSize.h;}}function drawPointLabels(scale){var ctx=scale.ctx;var opts=scale.options;var pointLabelOpts=opts.pointLabels;var tickBackdropHeight=getTickBackdropHeight(opts);var outerDistance=scale.getDistanceFromCenterForValue(opts.ticks.reverse?scale.min:scale.max);var plFont=helpers.options._parseFont(pointLabelOpts);ctx.save();ctx.font=plFont.string;ctx.textBaseline='middle';for(var i=scale.chart.data.labels.length-1;i>=0;i--){var extra=i===0?tickBackdropHeight/2:0;var pointLabelPosition=scale.getPointPosition(i,outerDistance+extra+5);var pointLabelFontColor=valueAtIndexOrDefault$1(pointLabelOpts.fontColor,i,defaults.fontColor);ctx.fillStyle=pointLabelFontColor;var angleRadians=scale.getIndexAngle(i);var angle=toDegrees(angleRadians);ctx.textAlign=getTextAlignForAngle(angle);adjustPointPositionForLabelHeight(angle,scale._pointLabelSizes[i],pointLabelPosition);fillText(ctx,scale.pointLabels[i],pointLabelPosition,plFont.lineHeight);}ctx.restore();}function drawRadiusLine(scale,gridLineOpts,radius,index){var ctx=scale.ctx;var circular=gridLineOpts.circular;var valueCount=scale.chart.data.labels.length;var lineColor=valueAtIndexOrDefault$1(gridLineOpts.color,index-1,undefined);var lineWidth=valueAtIndexOrDefault$1(gridLineOpts.lineWidth,index-1,undefined);var pointPosition;if(!circular&&!valueCount||!lineColor||!lineWidth){return;}ctx.save();ctx.strokeStyle=lineColor;ctx.lineWidth=lineWidth;if(ctx.setLineDash){ctx.setLineDash(gridLineOpts.borderDash||[]);ctx.lineDashOffset=gridLineOpts.borderDashOffset||0.0;}ctx.beginPath();if(circular){ctx.arc(scale.xCenter,scale.yCenter,radius,0,Math.PI*2);}else{pointPosition=scale.getPointPosition(0,radius);ctx.moveTo(pointPosition.x,pointPosition.y);for(var i=1;i<valueCount;i++){pointPosition=scale.getPointPosition(i,radius);ctx.lineTo(pointPosition.x,pointPosition.y);}}ctx.closePath();ctx.stroke();ctx.restore();}function numberOrZero(param){return isNumber(param)?param:0;}var RadialLinearScale=function(_LinearScaleBase){_inherits(RadialLinearScale,_LinearScaleBase);function RadialLinearScale(cfg){var _this;_classCallCheck(this,RadialLinearScale);_this=_possibleConstructorReturn(this,_getPrototypeOf(RadialLinearScale).call(this,cfg));_this.xCenter=undefined;_this.yCenter=undefined;_this.drawingArea=undefined;_this.pointLabels=[];return _this;}_createClass(RadialLinearScale,[{key:'setDimensions',value:function setDimensions(){var me=this;me.width=me.maxWidth;me.height=me.maxHeight;me.paddingTop=getTickBackdropHeight(me.options)/2;me.xCenter=Math.floor(me.width/2);me.yCenter=Math.floor((me.height-me.paddingTop)/2);me.drawingArea=Math.min(me.height-me.paddingTop,me.width)/2;}},{key:'determineDataLimits',value:function determineDataLimits(){var me=this;var minmax=me.getMinMax(false);var min=minmax.min;var max=minmax.max;me.min=helpers.isFinite(min)&&!isNaN(min)?min:0;me.max=helpers.isFinite(max)&&!isNaN(max)?max:0;me.handleTickRangeOptions();}},{key:'computeTickLimit',value:function computeTickLimit(){return Math.ceil(this.drawingArea/getTickBackdropHeight(this.options));}},{key:'generateTickLabels',value:function generateTickLabels(ticks){var me=this;LinearScaleBase.prototype.generateTickLabels.call(me,ticks);me.pointLabels=me.chart.data.labels.map(function(value,index){var label=helpers.callback(me.options.pointLabels.callback,[value,index],me);return label||label===0?label:'';});}},{key:'fit',value:function fit(){var me=this;var opts=me.options;if(opts.display&&opts.pointLabels.display){fitWithPointLabels(me);}else{me.setCenterPoint(0,0,0,0);}}},{key:'_setReductions',value:function _setReductions(largestPossibleRadius,furthestLimits,furthestAngles){var me=this;var radiusReductionLeft=furthestLimits.l/Math.sin(furthestAngles.l);var radiusReductionRight=Math.max(furthestLimits.r-me.width,0)/Math.sin(furthestAngles.r);var radiusReductionTop=-furthestLimits.t/Math.cos(furthestAngles.t);var radiusReductionBottom=-Math.max(furthestLimits.b-(me.height-me.paddingTop),0)/Math.cos(furthestAngles.b);radiusReductionLeft=numberOrZero(radiusReductionLeft);radiusReductionRight=numberOrZero(radiusReductionRight);radiusReductionTop=numberOrZero(radiusReductionTop);radiusReductionBottom=numberOrZero(radiusReductionBottom);me.drawingArea=Math.min(Math.floor(largestPossibleRadius-(radiusReductionLeft+radiusReductionRight)/2),Math.floor(largestPossibleRadius-(radiusReductionTop+radiusReductionBottom)/2));me.setCenterPoint(radiusReductionLeft,radiusReductionRight,radiusReductionTop,radiusReductionBottom);}},{key:'setCenterPoint',value:function setCenterPoint(leftMovement,rightMovement,topMovement,bottomMovement){var me=this;var maxRight=me.width-rightMovement-me.drawingArea;var maxLeft=leftMovement+me.drawingArea;var maxTop=topMovement+me.drawingArea;var maxBottom=me.height-me.paddingTop-bottomMovement-me.drawingArea;me.xCenter=Math.floor((maxLeft+maxRight)/2+me.left);me.yCenter=Math.floor((maxTop+maxBottom)/2+me.top+me.paddingTop);}},{key:'getIndexAngle',value:function getIndexAngle(index){var chart=this.chart;var angleMultiplier=Math.PI*2/chart.data.labels.length;var options=chart.options||{};var startAngle=options.startAngle||0;return _normalizeAngle(index*angleMultiplier+toRadians(startAngle));}},{key:'getDistanceFromCenterForValue',value:function getDistanceFromCenterForValue(value){var me=this;if(helpers.isNullOrUndef(value)){return NaN;}var scalingFactor=me.drawingArea/(me.max-me.min);if(me.options.reverse){return(me.max-value)*scalingFactor;}return(value-me.min)*scalingFactor;}},{key:'getPointPosition',value:function getPointPosition(index,distanceFromCenter){var me=this;var angle=me.getIndexAngle(index)-Math.PI/2;return{x:Math.cos(angle)*distanceFromCenter+me.xCenter,y:Math.sin(angle)*distanceFromCenter+me.yCenter,angle:angle};}},{key:'getPointPositionForValue',value:function getPointPositionForValue(index,value){return this.getPointPosition(index,this.getDistanceFromCenterForValue(value));}},{key:'getBasePosition',value:function getBasePosition(index){return this.getPointPositionForValue(index||0,this.getBaseValue());}},{key:'drawGrid',value:function drawGrid(){var me=this;var ctx=me.ctx;var opts=me.options;var gridLineOpts=opts.gridLines;var angleLineOpts=opts.angleLines;var lineWidth=valueOrDefault$2(angleLineOpts.lineWidth,gridLineOpts.lineWidth);var lineColor=valueOrDefault$2(angleLineOpts.color,gridLineOpts.color);var i,offset,position;if(opts.pointLabels.display){drawPointLabels(me);}if(gridLineOpts.display){me.ticks.forEach(function(tick,index){if(index!==0){offset=me.getDistanceFromCenterForValue(me.ticks[index].value);drawRadiusLine(me,gridLineOpts,offset,index);}});}if(angleLineOpts.display&&lineWidth&&lineColor){ctx.save();ctx.lineWidth=lineWidth;ctx.strokeStyle=lineColor;if(ctx.setLineDash){ctx.setLineDash(resolve$2([angleLineOpts.borderDash,gridLineOpts.borderDash,[]]));ctx.lineDashOffset=resolve$2([angleLineOpts.borderDashOffset,gridLineOpts.borderDashOffset,0.0]);}for(i=me.chart.data.labels.length-1;i>=0;i--){offset=me.getDistanceFromCenterForValue(opts.ticks.reverse?me.min:me.max);position=me.getPointPosition(i,offset);ctx.beginPath();ctx.moveTo(me.xCenter,me.yCenter);ctx.lineTo(position.x,position.y);ctx.stroke();}ctx.restore();}}},{key:'drawLabels',value:function drawLabels(){var me=this;var ctx=me.ctx;var opts=me.options;var tickOpts=opts.ticks;if(!tickOpts.display){return;}var startAngle=me.getIndexAngle(0);var tickFont=helpers.options._parseFont(tickOpts);var tickFontColor=valueOrDefault$2(tickOpts.fontColor,defaults.fontColor);var offset,width;ctx.save();ctx.font=tickFont.string;ctx.translate(me.xCenter,me.yCenter);ctx.rotate(startAngle);ctx.textAlign='center';ctx.textBaseline='middle';me.ticks.forEach(function(tick,index){if(index===0&&!opts.reverse){return;}offset=me.getDistanceFromCenterForValue(me.ticks[index].value);if(tickOpts.showLabelBackdrop){width=ctx.measureText(tick.label).width;ctx.fillStyle=tickOpts.backdropColor;ctx.fillRect(-width/2-tickOpts.backdropPaddingX,-offset-tickFont.size/2-tickOpts.backdropPaddingY,width+tickOpts.backdropPaddingX*2,tickFont.size+tickOpts.backdropPaddingY*2);}ctx.fillStyle=tickFontColor;ctx.fillText(tick.label,0,-offset);});ctx.restore();}},{key:'drawTitle',value:function drawTitle(){}}]);return RadialLinearScale;}(LinearScaleBase);_defineProperty(RadialLinearScale,'id','radialLinear');_defineProperty(RadialLinearScale,'defaults',defaultConfig$3);var MAX_INTEGER=Number.MAX_SAFE_INTEGER||9007199254740991;var INTERVALS={millisecond:{common:true,size:1,steps:1000},second:{common:true,size:1000,steps:60},minute:{common:true,size:60000,steps:60},hour:{common:true,size:3600000,steps:24},day:{common:true,size:86400000,steps:30},week:{common:false,size:604800000,steps:4},month:{common:true,size:2.628e9,steps:12},quarter:{common:false,size:7.884e9,steps:4},year:{common:true,size:3.154e10}};var UNITS=Object.keys(INTERVALS);function sorter(a,b){return a-b;}function arrayUnique(items){var set=new Set();var i,ilen;for(i=0,ilen=items.length;i<ilen;++i){set.add(items[i]);}if(set.size===ilen){return items;}return _toConsumableArray(set);}function _parse(scale,input){if(isNullOrUndef(input)){return null;}var adapter=scale._adapter;var options=scale.options.time;var parser=options.parser;var value=input;if(typeof parser==='function'){value=parser(value);}if(!isNumberFinite(value)){value=typeof parser==='string'?adapter.parse(value,parser):adapter.parse(value);}if(value===null){return value;}if(options.round){value=scale._adapter.startOf(value,options.round);}return+value;}function getDataTimestamps(scale){var isSeries=scale.options.distribution==='series';var timestamps=scale._cache.data||[];var i,ilen;if(timestamps.length){return timestamps;}var metas=scale.getMatchingVisibleMetas();if(isSeries&&metas.length){return metas[0].controller.getAllParsedValues(scale);}for(i=0,ilen=metas.length;i<ilen;++i){timestamps=timestamps.concat(metas[i].controller.getAllParsedValues(scale));}return scale._cache.data=arrayUnique(timestamps.sort(sorter));}function getLabelTimestamps(scale){var isSeries=scale.options.distribution==='series';var timestamps=scale._cache.labels||[];var i,ilen;if(timestamps.length){return timestamps;}var labels=scale.getLabels();for(i=0,ilen=labels.length;i<ilen;++i){timestamps.push(_parse(scale,labels[i]));}return scale._cache.labels=isSeries?timestamps:arrayUnique(timestamps.sort(sorter));}function getAllTimestamps(scale){var timestamps=scale._cache.all||[];if(timestamps.length){return timestamps;}var data=getDataTimestamps(scale);var label=getLabelTimestamps(scale);if(data.length&&label.length){timestamps=arrayUnique(data.concat(label).sort(sorter));}else{timestamps=data.length?data:label;}timestamps=scale._cache.all=timestamps;return timestamps;}function buildLookupTable(timestamps,min,max,distribution){if(distribution==='linear'||!timestamps.length){return[{time:min,pos:0},{time:max,pos:1}];}var table=[];var items=[min];var i,ilen,prev,curr,next;for(i=0,ilen=timestamps.length;i<ilen;++i){curr=timestamps[i];if(curr>min&&curr<max){items.push(curr);}}items.push(max);for(i=0,ilen=items.length;i<ilen;++i){next=items[i+1];prev=items[i-1];curr=items[i];if(prev===undefined||next===undefined||Math.round((next+prev)/2)!==curr){table.push({time:curr,pos:i/(ilen-1)});}}return table;}function interpolate(table,skey,sval,tkey){var _lookupByKey2=_lookupByKey(table,skey,sval),lo=_lookupByKey2.lo,hi=_lookupByKey2.hi;var prev=table[lo];var next=table[hi];var span=next[skey]-prev[skey];var ratio=span?(sval-prev[skey])/span:0;var offset=(next[tkey]-prev[tkey])*ratio;return prev[tkey]+offset;}function determineUnitForAutoTicks(minUnit,min,max,capacity){var ilen=UNITS.length;for(var i=UNITS.indexOf(minUnit);i<ilen-1;++i){var interval=INTERVALS[UNITS[i]];var factor=interval.steps?interval.steps:MAX_INTEGER;if(interval.common&&Math.ceil((max-min)/(factor*interval.size))<=capacity){return UNITS[i];}}return UNITS[ilen-1];}function determineUnitForFormatting(scale,numTicks,minUnit,min,max){for(var i=UNITS.length-1;i>=UNITS.indexOf(minUnit);i--){var unit=UNITS[i];if(INTERVALS[unit].common&&scale._adapter.diff(max,min,unit)>=numTicks-1){return unit;}}return UNITS[minUnit?UNITS.indexOf(minUnit):0];}function determineMajorUnit(unit){for(var i=UNITS.indexOf(unit)+1,ilen=UNITS.length;i<ilen;++i){if(INTERVALS[UNITS[i]].common){return UNITS[i];}}}function addTick(timestamps,ticks,time){if(!timestamps.length){return;}var _lookup2=_lookup(timestamps,time),lo=_lookup2.lo,hi=_lookup2.hi;var timestamp=timestamps[lo]>=time?timestamps[lo]:timestamps[hi];ticks.add(timestamp);}function generate(scale){var adapter=scale._adapter;var min=scale.min;var max=scale.max;var options=scale.options;var timeOpts=options.time;var minor=timeOpts.unit||determineUnitForAutoTicks(timeOpts.minUnit,min,max,scale._getLabelCapacity(min));var stepSize=valueOrDefault(timeOpts.stepSize,1);var weekday=minor==='week'?timeOpts.isoWeekday:false;var ticks=new Set();var first=min;var time;if(weekday){first=+adapter.startOf(first,'isoWeek',weekday);}first=+adapter.startOf(first,weekday?'day':minor);if(adapter.diff(max,min,minor)>100000*stepSize){throw new Error(min+' and '+max+' are too far apart with stepSize of '+stepSize+' '+minor);}if(scale.options.ticks.source==='data'){var timestamps=getDataTimestamps(scale);for(time=first;time<max;time=+adapter.add(time,stepSize,minor)){addTick(timestamps,ticks,time);}if(time===max||options.bounds==='ticks'){addTick(timestamps,ticks,time);}}else{for(time=first;time<max;time=+adapter.add(time,stepSize,minor)){ticks.add(time);}if(time===max||options.bounds==='ticks'){ticks.add(time);}}return _toConsumableArray(ticks);}function computeOffsets(table,timestamps,min,max,options){var start=0;var end=0;var first,last;if(options.offset&&timestamps.length){first=interpolate(table,'time',timestamps[0],'pos');if(timestamps.length===1){start=1-first;}else{start=(interpolate(table,'time',timestamps[1],'pos')-first)/2;}last=interpolate(table,'time',timestamps[timestamps.length-1],'pos');if(timestamps.length===1){end=last;}else{end=(last-interpolate(table,'time',timestamps[timestamps.length-2],'pos'))/2;}}return{start:start,end:end,factor:1/(start+1+end)};}function setMajorTicks(scale,ticks,map,majorUnit){var adapter=scale._adapter;var first=+adapter.startOf(ticks[0].value,majorUnit);var last=ticks[ticks.length-1].value;var major,index;for(major=first;major<=last;major=+adapter.add(major,1,majorUnit)){index=map[major];if(index>=0){ticks[index].major=true;}}return ticks;}function ticksFromTimestamps(scale,values,majorUnit){var ticks=[];var map={};var ilen=values.length;var i,value;for(i=0;i<ilen;++i){value=values[i];map[value]=i;ticks.push({value:value,major:false});}return ilen===0||!majorUnit?ticks:setMajorTicks(scale,ticks,map,majorUnit);}function getTimestampsForTicks(scale){if(scale.options.ticks.source==='labels'){return getLabelTimestamps(scale);}return generate(scale);}function getTimestampsForTable(scale){return scale.options.distribution==='series'?getAllTimestamps(scale):[scale.min,scale.max];}function getLabelBounds(scale){var arr=getLabelTimestamps(scale);var min=Number.POSITIVE_INFINITY;var max=Number.NEGATIVE_INFINITY;if(arr.length){min=arr[0];max=arr[arr.length-1];}return{min:min,max:max};}function filterBetween(timestamps,min,max){var start=0;var end=timestamps.length-1;while(start<end&&timestamps[start]<min){start++;}while(end>start&&timestamps[end]>max){end--;}end++;return start>0||end<timestamps.length?timestamps.slice(start,end):timestamps;}var defaultConfig$4={distribution:'linear',bounds:'data',adapters:{},time:{parser:false,unit:false,round:false,isoWeekday:false,minUnit:'millisecond',displayFormats:{}},ticks:{autoSkip:false,source:'auto',major:{enabled:false}}};var TimeScale=function(_Scale){_inherits(TimeScale,_Scale);function TimeScale(props){var _this;_classCallCheck(this,TimeScale);_this=_possibleConstructorReturn(this,_getPrototypeOf(TimeScale).call(this,props));var options=_this.options;var time=options.time||(options.time={});var adapter=_this._adapter=new _adapters._date(options.adapters.date);_this._cache={data:[],labels:[],all:[]};_this._unit='day';_this._majorUnit=undefined;_this._offsets={};_this._table=[];mergeIf(time.displayFormats,adapter.formats());return _this;}_createClass(TimeScale,[{key:'parse',value:function parse(raw,index){if(raw===undefined){return NaN;}return _parse(this,raw);}},{key:'parseObject',value:function parseObject(obj,axis,index){if(obj&&obj.t){return this.parse(obj.t,index);}if(obj[axis]!==undefined){return this.parse(obj[axis],index);}return null;}},{key:'invalidateCaches',value:function invalidateCaches(){this._cache={data:[],labels:[],all:[]};}},{key:'determineDataLimits',value:function determineDataLimits(){var me=this;var options=me.options;var adapter=me._adapter;var unit=options.time.unit||'day';var _me$getUserBounds=me.getUserBounds(),min=_me$getUserBounds.min,max=_me$getUserBounds.max,minDefined=_me$getUserBounds.minDefined,maxDefined=_me$getUserBounds.maxDefined;function _applyBounds(bounds){if(!minDefined&&!isNaN(bounds.min)){min=Math.min(min,bounds.min);}if(!maxDefined&&!isNaN(bounds.max)){max=Math.max(max,bounds.max);}}if(!minDefined||!maxDefined){_applyBounds(getLabelBounds(me));if(options.bounds!=='ticks'||options.ticks.source!=='labels'){_applyBounds(me.getMinMax(false));}}min=isNumberFinite(min)&&!isNaN(min)?min:+adapter.startOf(Date.now(),unit);max=isNumberFinite(max)&&!isNaN(max)?max:+adapter.endOf(Date.now(),unit)+1;me.min=Math.min(min,max);me.max=Math.max(min+1,max);}},{key:'buildTicks',value:function buildTicks(){var me=this;var options=me.options;var timeOpts=options.time;var tickOpts=options.ticks;var distribution=options.distribution;var timestamps=getTimestampsForTicks(me);if(options.bounds==='ticks'&&timestamps.length){me.min=me._userMin||timestamps[0];me.max=me._userMax||timestamps[timestamps.length-1];}var min=me.min;var max=me.max;var ticks=filterBetween(timestamps,min,max);me._unit=timeOpts.unit||(tickOpts.autoSkip?determineUnitForAutoTicks(timeOpts.minUnit,me.min,me.max,me._getLabelCapacity(min)):determineUnitForFormatting(me,ticks.length,timeOpts.minUnit,me.min,me.max));me._majorUnit=!tickOpts.major.enabled||me._unit==='year'?undefined:determineMajorUnit(me._unit);me._table=buildLookupTable(getTimestampsForTable(me),min,max,distribution);me._offsets=computeOffsets(me._table,getDataTimestamps(me),min,max,options);if(options.reverse){ticks.reverse();}return ticksFromTimestamps(me,ticks,me._majorUnit);}},{key:'getLabelForValue',value:function getLabelForValue(value){var me=this;var adapter=me._adapter;var timeOpts=me.options.time;if(timeOpts.tooltipFormat){return adapter.format(value,timeOpts.tooltipFormat);}return adapter.format(value,timeOpts.displayFormats.datetime);}},{key:'_tickFormatFunction',value:function _tickFormatFunction(time,index,ticks,format){var me=this;var options=me.options;var formats=options.time.displayFormats;var unit=me._unit;var majorUnit=me._majorUnit;var minorFormat=unit&&formats[unit];var majorFormat=majorUnit&&formats[majorUnit];var tick=ticks[index];var major=majorUnit&&majorFormat&&tick&&tick.major;var label=me._adapter.format(time,format||(major?majorFormat:minorFormat));var formatter=options.ticks.callback;return formatter?formatter(label,index,ticks):label;}},{key:'generateTickLabels',value:function generateTickLabels(ticks){var i,ilen,tick;for(i=0,ilen=ticks.length;i<ilen;++i){tick=ticks[i];tick.label=this._tickFormatFunction(tick.value,i,ticks);}}},{key:'getPixelForValue',value:function getPixelForValue(value){var me=this;var offsets=me._offsets;var pos=interpolate(me._table,'time',value,'pos');return me.getPixelForDecimal((offsets.start+pos)*offsets.factor);}},{key:'getPixelForTick',value:function getPixelForTick(index){var ticks=this.ticks;if(index<0||index>ticks.length-1){return null;}return this.getPixelForValue(ticks[index].value);}},{key:'getValueForPixel',value:function getValueForPixel(pixel){var me=this;var offsets=me._offsets;var pos=me.getDecimalForPixel(pixel)/offsets.factor-offsets.end;return interpolate(me._table,'pos',pos,'time');}},{key:'_getLabelSize',value:function _getLabelSize(label){var me=this;var ticksOpts=me.options.ticks;var tickLabelWidth=me.ctx.measureText(label).width;var angle=toRadians(me.isHorizontal()?ticksOpts.maxRotation:ticksOpts.minRotation);var cosRotation=Math.cos(angle);var sinRotation=Math.sin(angle);var tickFontSize=valueOrDefault(ticksOpts.fontSize,defaults.fontSize);return{w:tickLabelWidth*cosRotation+tickFontSize*sinRotation,h:tickLabelWidth*sinRotation+tickFontSize*cosRotation};}},{key:'_getLabelCapacity',value:function _getLabelCapacity(exampleTime){var me=this;var timeOpts=me.options.time;var displayFormats=timeOpts.displayFormats;var format=displayFormats[timeOpts.unit]||displayFormats.millisecond;var exampleLabel=me._tickFormatFunction(exampleTime,0,ticksFromTimestamps(me,[exampleTime],me._majorUnit),format);var size=me._getLabelSize(exampleLabel);var capacity=Math.floor(me.isHorizontal()?me.width/size.w:me.height/size.h)-1;return capacity>0?capacity:1;}}]);return TimeScale;}(Scale);_defineProperty(TimeScale,'id','time');_defineProperty(TimeScale,'defaults',defaultConfig$4);var scales=/*#__PURE__*/Object.freeze({__proto__:null,CategoryScale:CategoryScale,LinearScale:LinearScale,LogarithmicScale:LogarithmicScale,RadialLinearScale:RadialLinearScale,TimeScale:TimeScale});defaults.set('plugins',{filler:{propagate:true}});function getLineByIndex(chart,index){var meta=chart.getDatasetMeta(index);var visible=meta&&chart.isDatasetVisible(index);return visible?meta.dataset:null;}function parseFillOption(line){var options=line.options;var fillOption=options.fill;var fill=valueOrDefault(fillOption&&fillOption.target,fillOption);if(fill===undefined){fill=!!options.backgroundColor;}if(fill===false||fill===null){return false;}if(fill===true){return'origin';}return fill;}function decodeFill(line,index,count){var fill=parseFillOption(line);var target=parseFloat(fill);if(isNumberFinite(target)&&Math.floor(target)===target){if(fill[0]==='-'||fill[0]==='+'){target=index+target;}if(target===index||target<0||target>=count){return false;}return target;}return['origin','start','end'].indexOf(fill)>=0?fill:false;}function computeLinearBoundary(source){var _source$scale=source.scale,scale=_source$scale===void 0?{}:_source$scale,fill=source.fill;var target=null;var horizontal;if(fill==='start'){target=scale.bottom;}else if(fill==='end'){target=scale.top;}else if(scale.getBasePixel){target=scale.getBasePixel();}if(isNumberFinite(target)){horizontal=scale.isHorizontal();return{x:horizontal?target:null,y:horizontal?null:target};}return null;}var simpleArc=function(){function simpleArc(opts){_classCallCheck(this,simpleArc);this.x=opts.x;this.y=opts.y;this.radius=opts.radius;}_createClass(simpleArc,[{key:'pathSegment',value:function pathSegment(ctx,bounds,opts){var x=this.x,y=this.y,radius=this.radius;bounds=bounds||{start:0,end:Math.PI*2};if(opts.reverse){ctx.arc(x,y,radius,bounds.end,bounds.start,true);}else{ctx.arc(x,y,radius,bounds.start,bounds.end);}return!opts.bounds;}},{key:'interpolate',value:function interpolate(point,property){var x=this.x,y=this.y,radius=this.radius;var angle=point.angle;if(property==='angle'){return{x:x+Math.cos(angle)*radius,y:y+Math.sin(angle)*radius,angle:angle};}}}]);return simpleArc;}();function computeCircularBoundary(source){var scale=source.scale,fill=source.fill;var options=scale.options;var length=scale.getLabels().length;var target=[];var start=options.reverse?scale.max:scale.min;var end=options.reverse?scale.min:scale.max;var value=fill==='start'?start:fill==='end'?end:scale.getBaseValue();var i,center;if(options.gridLines.circular){center=scale.getPointPositionForValue(0,start);return new simpleArc({x:center.x,y:center.y,radius:scale.getDistanceFromCenterForValue(value)});}for(i=0;i<length;++i){target.push(scale.getPointPositionForValue(i,value));}return target;}function computeBoundary(source){var scale=source.scale||{};if(scale.getPointPositionForValue){return computeCircularBoundary(source);}return computeLinearBoundary(source);}function pointsFromSegments(boundary,line){var _ref=boundary||{},_ref$x=_ref.x,x=_ref$x===void 0?null:_ref$x,_ref$y=_ref.y,y=_ref$y===void 0?null:_ref$y;var linePoints=line.points;var points=[];line.segments.forEach(function(segment){var first=linePoints[segment.start];var last=linePoints[segment.end];if(y!==null){points.push({x:first.x,y:y,_prop:'x',_ref:first});points.push({x:last.x,y:y,_prop:'x',_ref:last});}else if(x!==null){points.push({x:x,y:first.y,_prop:'y',_ref:first});points.push({x:x,y:last.y,_prop:'y',_ref:last});}});return points;}function getTarget(source){var chart=source.chart,fill=source.fill,line=source.line;if(isNumberFinite(fill)){return getLineByIndex(chart,fill);}var boundary=computeBoundary(source);var points=[];var _loop=false;var _refPoints=false;if(boundary instanceof simpleArc){return boundary;}if(isArray(boundary)){_loop=true;points=boundary;}else{points=pointsFromSegments(boundary,line);_refPoints=true;}return points.length?new Line({points:points,options:{tension:0},_loop:_loop,_fullLoop:_loop,_refPoints:_refPoints}):null;}function resolveTarget(sources,index,propagate){var source=sources[index];var fill=source.fill;var visited=[index];var target;if(!propagate){return fill;}while(fill!==false&&visited.indexOf(fill)===-1){if(!isNumberFinite(fill)){return fill;}target=sources[fill];if(!target){return false;}if(target.visible){return fill;}visited.push(fill);fill=target.fill;}return false;}function _clip(ctx,target,clipY){ctx.beginPath();target.path(ctx);ctx.lineTo(target.last().x,clipY);ctx.lineTo(target.first().x,clipY);ctx.closePath();ctx.clip();}function getBounds(property,first,last,loop){if(loop){return;}var start=first[property];var end=last[property];if(property==='angle'){start=_normalizeAngle(start);end=_normalizeAngle(end);}return{property:property,start:start,end:end};}function _getEdge(a,b,prop,fn){if(a&&b){return fn(a[prop],b[prop]);}return a?a[prop]:b?b[prop]:0;}function _segments(line,target,property){var segments=line.segments;var points=line.points;var tpoints=target.points;var parts=[];if(target._refPoints){for(var i=0,ilen=tpoints.length;i<ilen;++i){var point=tpoints[i];var prop=point._prop;if(prop){point[prop]=point._ref[prop];}}}for(var _i=0;_i<segments.length;_i++){var segment=segments[_i];var bounds=getBounds(property,points[segment.start],points[segment.end],segment.loop);if(!target.segments){parts.push({source:segment,target:bounds,start:points[segment.start],end:points[segment.end]});continue;}var subs=_boundSegments(target,bounds);for(var j=0;j<subs.length;++j){var sub=subs[j];var subBounds=getBounds(property,tpoints[sub.start],tpoints[sub.end],sub.loop);var fillSources=_boundSegment(segment,points,subBounds);for(var k=0;k<fillSources.length;k++){parts.push({source:fillSources[k],target:sub,start:_defineProperty({},property,_getEdge(bounds,subBounds,'start',Math.max)),end:_defineProperty({},property,_getEdge(bounds,subBounds,'end',Math.min))});}}}return parts;}function clipBounds(ctx,scale,bounds){var _scale$chart$chartAre=scale.chart.chartArea,top=_scale$chart$chartAre.top,bottom=_scale$chart$chartAre.bottom;var _ref2=bounds||{},property=_ref2.property,start=_ref2.start,end=_ref2.end;if(property==='x'){ctx.beginPath();ctx.rect(start,top,end-start,bottom-top);ctx.clip();}}function interpolatedLineTo(ctx,target,point,property){var interpolatedPoint=target.interpolate(point,property);if(interpolatedPoint){ctx.lineTo(interpolatedPoint.x,interpolatedPoint.y);}}function _fill(ctx,cfg){var line=cfg.line,target=cfg.target,property=cfg.property,color=cfg.color,scale=cfg.scale;var segments=_segments(cfg.line,cfg.target,property);ctx.fillStyle=color;for(var i=0,ilen=segments.length;i<ilen;++i){var _segments$i=segments[i],src=_segments$i.source,tgt=_segments$i.target,start=_segments$i.start,end=_segments$i.end;ctx.save();clipBounds(ctx,scale,getBounds(property,start,end));ctx.beginPath();var lineLoop=!!line.pathSegment(ctx,src);if(lineLoop){ctx.closePath();}else{interpolatedLineTo(ctx,target,end,property);}var targetLoop=!!target.pathSegment(ctx,tgt,{move:lineLoop,reverse:true});var loop=lineLoop&&targetLoop;if(!loop){interpolatedLineTo(ctx,target,start,property);}ctx.closePath();ctx.fill(loop?'evenodd':'nonzero');ctx.restore();}}function doFill(ctx,cfg){var line=cfg.line,target=cfg.target,above=cfg.above,below=cfg.below,area=cfg.area,scale=cfg.scale;var property=line._loop?'angle':'x';ctx.save();if(property==='x'&&below!==above){_clip(ctx,target,area.top);_fill(ctx,{line:line,target:target,color:above,scale:scale,property:property});ctx.restore();ctx.save();_clip(ctx,target,area.bottom);}_fill(ctx,{line:line,target:target,color:below,scale:scale,property:property});ctx.restore();}var filler={id:'filler',afterDatasetsUpdate:function afterDatasetsUpdate(chart,options){var count=(chart.data.datasets||[]).length;var propagate=options.propagate;var sources=[];var meta,i,line,source;for(i=0;i<count;++i){meta=chart.getDatasetMeta(i);line=meta.dataset;source=null;if(line&&line.options&&line instanceof Line){source={visible:chart.isDatasetVisible(i),fill:decodeFill(line,i,count),chart:chart,scale:meta.vScale,line:line,target:undefined};}meta.$filler=source;sources.push(source);}for(i=0;i<count;++i){source=sources[i];if(!source||source.fill===false){continue;}source.fill=resolveTarget(sources,i,propagate);source.target=source.fill!==false&&getTarget(source);}},beforeDatasetsDraw:function beforeDatasetsDraw(chart){var metasets=chart.getSortedVisibleDatasetMetas();var area=chart.chartArea;var i,meta;for(i=metasets.length-1;i>=0;--i){meta=metasets[i].$filler;if(meta){meta.line.updateControlPoints(area);}}},beforeDatasetDraw:function beforeDatasetDraw(chart,args){var area=chart.chartArea;var ctx=chart.ctx;var meta=args.meta.$filler;if(!meta||meta.fill===false){return;}var line=meta.line,target=meta.target,scale=meta.scale;var lineOpts=line.options;var fillOption=lineOpts.fill;var color=lineOpts.backgroundColor||defaults.color;var _ref3=fillOption||{},_ref3$above=_ref3.above,above=_ref3$above===void 0?color:_ref3$above,_ref3$below=_ref3.below,below=_ref3$below===void 0?color:_ref3$below;if(target&&line.points.length){clipArea(ctx,area);doFill(ctx,{line:line,target:target,above:above,below:below,area:area,scale:scale});unclipArea(ctx);}}};defaults.set('legend',{display:true,position:'top',align:'center',fullWidth:true,reverse:false,weight:1000,onClick:function onClick(e,legendItem){var index=legendItem.datasetIndex;var ci=this.chart;if(ci.isDatasetVisible(index)){ci.hide(index);legendItem.hidden=true;}else{ci.show(index);legendItem.hidden=false;}},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function generateLabels(chart){var datasets=chart.data.datasets;var options=chart.options.legend||{};var usePointStyle=options.labels&&options.labels.usePointStyle;return chart._getSortedDatasetMetas().map(function(meta){var style=meta.controller.getStyle(usePointStyle?0:undefined);return{text:datasets[meta.index].label,fillStyle:style.backgroundColor,hidden:!meta.visible,lineCap:style.borderCapStyle,lineDash:style.borderDash,lineDashOffset:style.borderDashOffset,lineJoin:style.borderJoinStyle,lineWidth:style.borderWidth,strokeStyle:style.borderColor,pointStyle:style.pointStyle,rotation:style.rotation,datasetIndex:meta.index};},this);}},title:{display:false,position:'center',text:''}});function getBoxWidth(labelOpts,fontSize){return labelOpts.usePointStyle&&labelOpts.boxWidth>fontSize?fontSize:labelOpts.boxWidth;}var Legend=function(_Element){_inherits(Legend,_Element);function Legend(config){var _this;_classCallCheck(this,Legend);_this=_possibleConstructorReturn(this,_getPrototypeOf(Legend).call(this));_extends(_assertThisInitialized(_this),config);_this.legendHitBoxes=[];_this._hoveredItem=null;_this.doughnutMode=false;_this.chart=config.chart;_this.options=config.options;_this.ctx=config.ctx;_this.legendItems=undefined;_this.columnWidths=undefined;_this.columnHeights=undefined;_this.lineWidths=undefined;_this._minSize=undefined;_this.maxHeight=undefined;_this.maxWidth=undefined;_this.top=undefined;_this.bottom=undefined;_this.left=undefined;_this.right=undefined;_this.height=undefined;_this.width=undefined;_this._margins=undefined;_this.paddingTop=undefined;_this.paddingBottom=undefined;_this.paddingLeft=undefined;_this.paddingRight=undefined;_this.position=undefined;_this.weight=undefined;_this.fullWidth=undefined;return _this;}_createClass(Legend,[{key:'beforeUpdate',value:function beforeUpdate(){}},{key:'update',value:function update(maxWidth,maxHeight,margins){var me=this;me.beforeUpdate();me.maxWidth=maxWidth;me.maxHeight=maxHeight;me._margins=margins;me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();me.beforeFit();me.fit();me.afterFit();me.afterUpdate();}},{key:'afterUpdate',value:function afterUpdate(){}},{key:'beforeSetDimensions',value:function beforeSetDimensions(){}},{key:'setDimensions',value:function setDimensions(){var me=this;if(me.isHorizontal()){me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;me.top=0;me.bottom=me.height;}me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;me._minSize={width:0,height:0};}},{key:'afterSetDimensions',value:function afterSetDimensions(){}},{key:'beforeBuildLabels',value:function beforeBuildLabels(){}},{key:'buildLabels',value:function buildLabels(){var me=this;var labelOpts=me.options.labels||{};var legendItems=callback(labelOpts.generateLabels,[me.chart],me)||[];if(labelOpts.filter){legendItems=legendItems.filter(function(item){return labelOpts.filter(item,me.chart.data);});}if(me.options.reverse){legendItems.reverse();}me.legendItems=legendItems;}},{key:'afterBuildLabels',value:function afterBuildLabels(){}},{key:'beforeFit',value:function beforeFit(){}},{key:'fit',value:function fit(){var me=this;var opts=me.options;var labelOpts=opts.labels;var display=opts.display;var ctx=me.ctx;var labelFont=_parseFont(labelOpts);var fontSize=labelFont.size;var hitboxes=me.legendHitBoxes=[];var minSize=me._minSize;var isHorizontal=me.isHorizontal();var titleHeight=me._computeTitleHeight();if(isHorizontal){minSize.width=me.maxWidth;minSize.height=display?10:0;}else{minSize.width=display?10:0;minSize.height=me.maxHeight;}if(!display){me.width=minSize.width=me.height=minSize.height=0;return;}ctx.font=labelFont.string;if(isHorizontal){var lineWidths=me.lineWidths=[0];var totalHeight=titleHeight;ctx.textAlign='left';ctx.textBaseline='middle';me.legendItems.forEach(function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var width=boxWidth+fontSize/2+ctx.measureText(legendItem.text).width;if(i===0||lineWidths[lineWidths.length-1]+width+2*labelOpts.padding>minSize.width){totalHeight+=fontSize+labelOpts.padding;lineWidths[lineWidths.length-(i>0?0:1)]=0;}hitboxes[i]={left:0,top:0,width:width,height:fontSize};lineWidths[lineWidths.length-1]+=width+labelOpts.padding;});minSize.height+=totalHeight;}else{var vPadding=labelOpts.padding;var columnWidths=me.columnWidths=[];var columnHeights=me.columnHeights=[];var totalWidth=labelOpts.padding;var currentColWidth=0;var currentColHeight=0;var heightLimit=minSize.height-titleHeight;me.legendItems.forEach(function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var itemWidth=boxWidth+fontSize/2+ctx.measureText(legendItem.text).width;if(i>0&&currentColHeight+fontSize+2*vPadding>heightLimit){totalWidth+=currentColWidth+labelOpts.padding;columnWidths.push(currentColWidth);columnHeights.push(currentColHeight);currentColWidth=0;currentColHeight=0;}currentColWidth=Math.max(currentColWidth,itemWidth);currentColHeight+=fontSize+vPadding;hitboxes[i]={left:0,top:0,width:itemWidth,height:fontSize};});totalWidth+=currentColWidth;columnWidths.push(currentColWidth);columnHeights.push(currentColHeight);minSize.width+=totalWidth;}me.width=minSize.width;me.height=minSize.height;}},{key:'afterFit',value:function afterFit(){}},{key:'isHorizontal',value:function isHorizontal(){return this.options.position==='top'||this.options.position==='bottom';}},{key:'draw',value:function draw(){var me=this;var opts=me.options;var labelOpts=opts.labels;var defaultColor=defaults.color;var lineDefault=defaults.elements.line;var legendHeight=me.height;var columnHeights=me.columnHeights;var legendWidth=me.width;var lineWidths=me.lineWidths;if(!opts.display){return;}me.drawTitle();var rtlHelper=getRtlAdapter(opts.rtl,me.left,me._minSize.width);var ctx=me.ctx;var fontColor=valueOrDefault(labelOpts.fontColor,defaults.fontColor);var labelFont=_parseFont(labelOpts);var fontSize=labelFont.size;var cursor;ctx.textAlign=rtlHelper.textAlign('left');ctx.textBaseline='middle';ctx.lineWidth=0.5;ctx.strokeStyle=fontColor;ctx.fillStyle=fontColor;ctx.font=labelFont.string;var boxWidth=getBoxWidth(labelOpts,fontSize);var hitboxes=me.legendHitBoxes;var drawLegendBox=function drawLegendBox(x,y,legendItem){if(isNaN(boxWidth)||boxWidth<=0){return;}ctx.save();var lineWidth=valueOrDefault(legendItem.lineWidth,lineDefault.borderWidth);ctx.fillStyle=valueOrDefault(legendItem.fillStyle,defaultColor);ctx.lineCap=valueOrDefault(legendItem.lineCap,lineDefault.borderCapStyle);ctx.lineDashOffset=valueOrDefault(legendItem.lineDashOffset,lineDefault.borderDashOffset);ctx.lineJoin=valueOrDefault(legendItem.lineJoin,lineDefault.borderJoinStyle);ctx.lineWidth=lineWidth;ctx.strokeStyle=valueOrDefault(legendItem.strokeStyle,defaultColor);if(ctx.setLineDash){ctx.setLineDash(valueOrDefault(legendItem.lineDash,lineDefault.borderDash));}if(labelOpts&&labelOpts.usePointStyle){var drawOptions={radius:boxWidth*Math.SQRT2/2,pointStyle:legendItem.pointStyle,rotation:legendItem.rotation,borderWidth:lineWidth};var centerX=rtlHelper.xPlus(x,boxWidth/2);var centerY=y+fontSize/2;drawPoint(ctx,drawOptions,centerX,centerY);}else{ctx.fillRect(rtlHelper.leftForLtr(x,boxWidth),y,boxWidth,fontSize);if(lineWidth!==0){ctx.strokeRect(rtlHelper.leftForLtr(x,boxWidth),y,boxWidth,fontSize);}}ctx.restore();};var fillText=function fillText(x,y,legendItem,textWidth){var halfFontSize=fontSize/2;var xLeft=rtlHelper.xPlus(x,boxWidth+halfFontSize);var yMiddle=y+halfFontSize;ctx.fillText(legendItem.text,xLeft,yMiddle);if(legendItem.hidden){ctx.beginPath();ctx.lineWidth=2;ctx.moveTo(xLeft,yMiddle);ctx.lineTo(rtlHelper.xPlus(xLeft,textWidth),yMiddle);ctx.stroke();}};var alignmentOffset=function alignmentOffset(dimension,blockSize){switch(opts.align){case'start':return labelOpts.padding;case'end':return dimension-blockSize;default:return(dimension-blockSize+labelOpts.padding)/2;}};var isHorizontal=me.isHorizontal();var titleHeight=this._computeTitleHeight();if(isHorizontal){cursor={x:me.left+alignmentOffset(legendWidth,lineWidths[0]),y:me.top+labelOpts.padding+titleHeight,line:0};}else{cursor={x:me.left+labelOpts.padding,y:me.top+alignmentOffset(legendHeight,columnHeights[0])+titleHeight,line:0};}overrideTextDirection(me.ctx,opts.textDirection);var itemHeight=fontSize+labelOpts.padding;me.legendItems.forEach(function(legendItem,i){var textWidth=ctx.measureText(legendItem.text).width;var width=boxWidth+fontSize/2+textWidth;var x=cursor.x;var y=cursor.y;rtlHelper.setWidth(me._minSize.width);if(isHorizontal){if(i>0&&x+width+labelOpts.padding>me.left+me._minSize.width){y=cursor.y+=itemHeight;cursor.line++;x=cursor.x=me.left+alignmentOffset(legendWidth,lineWidths[cursor.line]);}}else if(i>0&&y+itemHeight>me.top+me._minSize.height){x=cursor.x=x+me.columnWidths[cursor.line]+labelOpts.padding;cursor.line++;y=cursor.y=me.top+alignmentOffset(legendHeight,columnHeights[cursor.line]);}var realX=rtlHelper.x(x);drawLegendBox(realX,y,legendItem);hitboxes[i].left=rtlHelper.leftForLtr(realX,hitboxes[i].width);hitboxes[i].top=y;fillText(realX,y,legendItem,textWidth);if(isHorizontal){cursor.x+=width+labelOpts.padding;}else{cursor.y+=itemHeight;}});restoreTextDirection(me.ctx,opts.textDirection);}},{key:'drawTitle',value:function drawTitle(){var me=this;var opts=me.options;var titleOpts=opts.title;var titleFont=_parseFont(titleOpts);var titlePadding=toPadding(titleOpts.padding);if(!titleOpts.display){return;}var rtlHelper=getRtlAdapter(opts.rtl,me.left,me._minSize.width);var ctx=me.ctx;var fontColor=valueOrDefault(titleOpts.fontColor,defaults.fontColor);var position=titleOpts.position;var x,textAlign;var halfFontSize=titleFont.size/2;var y=me.top+titlePadding.top+halfFontSize;var left=me.left;var maxWidth=me.width;if(this.isHorizontal()){maxWidth=Math.max.apply(Math,_toConsumableArray(me.lineWidths));switch(opts.align){case'start':break;case'end':left=me.right-maxWidth;break;default:left=(me.left+me.right)/2-maxWidth/2;break;}}else{var maxHeight=Math.max.apply(Math,_toConsumableArray(me.columnHeights));switch(opts.align){case'start':break;case'end':y+=me.height-maxHeight;break;default:y+=(me.height-maxHeight)/2;break;}}switch(position){case'start':x=left;textAlign='left';break;case'end':x=left+maxWidth;textAlign='right';break;default:x=left+maxWidth/2;textAlign='center';break;}ctx.textAlign=rtlHelper.textAlign(textAlign);ctx.textBaseline='middle';ctx.strokeStyle=fontColor;ctx.fillStyle=fontColor;ctx.font=titleFont.string;ctx.fillText(titleOpts.text,x,y);}},{key:'_computeTitleHeight',value:function _computeTitleHeight(){var titleOpts=this.options.title;var titleFont=_parseFont(titleOpts);var titlePadding=toPadding(titleOpts.padding);return titleOpts.display?titleFont.lineHeight+titlePadding.height:0;}},{key:'_getLegendItemAt',value:function _getLegendItemAt(x,y){var me=this;var i,hitBox,lh;if(x>=me.left&&x<=me.right&&y>=me.top&&y<=me.bottom){lh=me.legendHitBoxes;for(i=0;i<lh.length;++i){hitBox=lh[i];if(x>=hitBox.left&&x<=hitBox.left+hitBox.width&&y>=hitBox.top&&y<=hitBox.top+hitBox.height){return me.legendItems[i];}}}return null;}},{key:'handleEvent',value:function handleEvent(e){var me=this;var opts=me.options;var type=e.type==='mouseup'?'click':e.type;if(type==='mousemove'){if(!opts.onHover&&!opts.onLeave){return;}}else if(type==='click'){if(!opts.onClick){return;}}else{return;}var hoveredItem=me._getLegendItemAt(e.x,e.y);if(type==='click'){if(hoveredItem&&opts.onClick){opts.onClick.call(me,e['native'],hoveredItem);}}else{if(opts.onLeave&&hoveredItem!==me._hoveredItem){if(me._hoveredItem){opts.onLeave.call(me,e['native'],me._hoveredItem);}me._hoveredItem=hoveredItem;}if(opts.onHover&&hoveredItem){opts.onHover.call(me,e['native'],hoveredItem);}}}}]);return Legend;}(Element$1);function createNewLegendAndAttach(chart,legendOpts){var legend=new Legend({ctx:chart.ctx,options:legendOpts,chart:chart});layouts.configure(chart,legend,legendOpts);layouts.addBox(chart,legend);chart.legend=legend;}var legend={id:'legend',_element:Legend,beforeInit:function beforeInit(chart){var legendOpts=chart.options.legend;if(legendOpts){createNewLegendAndAttach(chart,legendOpts);}},afterUpdate:function afterUpdate(chart){var legendOpts=chart.options.legend;var legend=chart.legend;if(legendOpts){mergeIf(legendOpts,defaults.legend);if(legend){layouts.configure(chart,legend,legendOpts);legend.options=legendOpts;legend.buildLabels();}else{createNewLegendAndAttach(chart,legendOpts);}}else if(legend){layouts.removeBox(chart,legend);delete chart.legend;}},afterEvent:function afterEvent(chart,e){var legend=chart.legend;if(legend){legend.handleEvent(e);}}};defaults.set('title',{align:'center',display:false,fontStyle:'bold',fullWidth:true,padding:10,position:'top',text:'',weight:2000});var Title=function(_Element){_inherits(Title,_Element);function Title(config){var _this;_classCallCheck(this,Title);_this=_possibleConstructorReturn(this,_getPrototypeOf(Title).call(this));_extends(_assertThisInitialized(_this),config);_this.chart=config.chart;_this.options=config.options;_this.ctx=config.ctx;_this._margins=undefined;_this._padding=undefined;_this.legendHitBoxes=[];_this.top=undefined;_this.bottom=undefined;_this.left=undefined;_this.right=undefined;_this.width=undefined;_this.height=undefined;_this.maxWidth=undefined;_this.maxHeight=undefined;_this.position=undefined;_this.weight=undefined;_this.fullWidth=undefined;return _this;}_createClass(Title,[{key:'beforeUpdate',value:function beforeUpdate(){}},{key:'update',value:function update(maxWidth,maxHeight,margins){var me=this;me.beforeUpdate();me.maxWidth=maxWidth;me.maxHeight=maxHeight;me._margins=margins;me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();me.beforeFit();me.fit();me.afterFit();me.afterUpdate();}},{key:'afterUpdate',value:function afterUpdate(){}},{key:'beforeSetDimensions',value:function beforeSetDimensions(){}},{key:'setDimensions',value:function setDimensions(){var me=this;if(me.isHorizontal()){me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;me.top=0;me.bottom=me.height;}}},{key:'afterSetDimensions',value:function afterSetDimensions(){}},{key:'beforeBuildLabels',value:function beforeBuildLabels(){}},{key:'buildLabels',value:function buildLabels(){}},{key:'afterBuildLabels',value:function afterBuildLabels(){}},{key:'beforeFit',value:function beforeFit(){}},{key:'fit',value:function fit(){var me=this;var opts=me.options;var minSize={};var isHorizontal=me.isHorizontal();if(!opts.display){me.width=minSize.width=me.height=minSize.height=0;return;}var lineCount=helpers.isArray(opts.text)?opts.text.length:1;me._padding=helpers.options.toPadding(opts.padding);var textSize=lineCount*helpers.options._parseFont(opts).lineHeight+me._padding.height;me.width=minSize.width=isHorizontal?me.maxWidth:textSize;me.height=minSize.height=isHorizontal?textSize:me.maxHeight;}},{key:'afterFit',value:function afterFit(){}},{key:'isHorizontal',value:function isHorizontal(){var pos=this.options.position;return pos==='top'||pos==='bottom';}},{key:'draw',value:function draw(){var me=this;var ctx=me.ctx;var opts=me.options;if(!opts.display){return;}var fontOpts=helpers.options._parseFont(opts);var lineHeight=fontOpts.lineHeight;var offset=lineHeight/2+me._padding.top;var rotation=0;var top=me.top;var left=me.left;var bottom=me.bottom;var right=me.right;var maxWidth,titleX,titleY;var align;if(me.isHorizontal()){switch(opts.align){case'start':titleX=left;align='left';break;case'end':titleX=right;align='right';break;default:titleX=left+(right-left)/2;align='center';break;}titleY=top+offset;maxWidth=right-left;}else{titleX=opts.position==='left'?left+offset:right-offset;switch(opts.align){case'start':titleY=opts.position==='left'?bottom:top;align='left';break;case'end':titleY=opts.position==='left'?top:bottom;align='right';break;default:titleY=top+(bottom-top)/2;align='center';break;}maxWidth=bottom-top;rotation=Math.PI*(opts.position==='left'?-0.5:0.5);}ctx.save();ctx.fillStyle=helpers.valueOrDefault(opts.fontColor,defaults.fontColor);ctx.font=fontOpts.string;ctx.translate(titleX,titleY);ctx.rotate(rotation);ctx.textAlign=align;ctx.textBaseline='middle';var text=opts.text;if(helpers.isArray(text)){var y=0;for(var i=0;i<text.length;++i){ctx.fillText(text[i],0,y,maxWidth);y+=lineHeight;}}else{ctx.fillText(text,0,0,maxWidth);}ctx.restore();}}]);return Title;}(Element$1);function createNewTitleBlockAndAttach(chart,titleOpts){var title=new Title({ctx:chart.ctx,options:titleOpts,chart:chart});layouts.configure(chart,title,titleOpts);layouts.addBox(chart,title);chart.titleBlock=title;}var title={id:'title',_element:Title,beforeInit:function beforeInit(chart){var titleOpts=chart.options.title;if(titleOpts){createNewTitleBlockAndAttach(chart,titleOpts);}},beforeUpdate:function beforeUpdate(chart){var titleOpts=chart.options.title;var titleBlock=chart.titleBlock;if(titleOpts){helpers.mergeIf(titleOpts,defaults.title);if(titleBlock){layouts.configure(chart,titleBlock,titleOpts);titleBlock.options=titleOpts;}else{createNewTitleBlockAndAttach(chart,titleOpts);}}else if(titleBlock){layouts.removeBox(chart,titleBlock);delete chart.titleBlock;}}};var valueOrDefault$3=helpers.valueOrDefault;var getRtlHelper=helpers.rtl.getRtlAdapter;defaults.set('tooltips',{enabled:true,custom:null,mode:'nearest',position:'average',intersect:true,backgroundColor:'rgba(0,0,0,0.8)',titleFontStyle:'bold',titleSpacing:2,titleMarginBottom:6,titleFontColor:'#fff',titleAlign:'left',bodySpacing:2,bodyFontColor:'#fff',bodyAlign:'left',footerFontStyle:'bold',footerSpacing:2,footerMarginTop:6,footerFontColor:'#fff',footerAlign:'left',yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:'#fff',displayColors:true,borderColor:'rgba(0,0,0,0)',borderWidth:0,animation:{duration:400,easing:'easeOutQuart',numbers:{type:'number',properties:['x','y','width','height']},opacity:{easing:'linear',duration:200}},callbacks:{beforeTitle:helpers.noop,title:function title(tooltipItems,data){var title='';var labels=data.labels;var labelCount=labels?labels.length:0;if(tooltipItems.length>0){var item=tooltipItems[0];if(item.label){title=item.label;}else if(labelCount>0&&item.index<labelCount){title=labels[item.index];}}return title;},afterTitle:helpers.noop,beforeBody:helpers.noop,beforeLabel:helpers.noop,label:function label(tooltipItem,data){var label=data.datasets[tooltipItem.datasetIndex].label||'';if(label){label+=': ';}var value=tooltipItem.value;if(!helpers.isNullOrUndef(value)){label+=value;}return label;},labelColor:function labelColor(tooltipItem,chart){var meta=chart.getDatasetMeta(tooltipItem.datasetIndex);var options=meta.controller.getStyle(tooltipItem.index);return{borderColor:options.borderColor,backgroundColor:options.backgroundColor};},labelTextColor:function labelTextColor(){return this.options.bodyFontColor;},afterLabel:helpers.noop,afterBody:helpers.noop,beforeFooter:helpers.noop,footer:helpers.noop,afterFooter:helpers.noop}});var positioners={average:function average(items){if(!items.length){return false;}var i,len;var x=0;var y=0;var count=0;for(i=0,len=items.length;i<len;++i){var el=items[i].element;if(el&&el.hasValue()){var pos=el.tooltipPosition();x+=pos.x;y+=pos.y;++count;}}return{x:x/count,y:y/count};},nearest:function nearest(items,eventPosition){var x=eventPosition.x;var y=eventPosition.y;var minDistance=Number.POSITIVE_INFINITY;var i,len,nearestElement;for(i=0,len=items.length;i<len;++i){var el=items[i].element;if(el&&el.hasValue()){var center=el.getCenterPoint();var d=helpers.math.distanceBetweenPoints(eventPosition,center);if(d<minDistance){minDistance=d;nearestElement=el;}}}if(nearestElement){var tp=nearestElement.tooltipPosition();x=tp.x;y=tp.y;}return{x:x,y:y};}};function pushOrConcat(base,toPush){if(toPush){if(helpers.isArray(toPush)){Array.prototype.push.apply(base,toPush);}else{base.push(toPush);}}return base;}function splitNewlines(str){if((typeof str==='string'||str instanceof String)&&str.indexOf('\n')>-1){return str.split('\n');}return str;}function createTooltipItem(chart,item){var datasetIndex=item.datasetIndex,index=item.index;var _chart$getDatasetMeta=chart.getDatasetMeta(datasetIndex).controller.getLabelAndValue(index),label=_chart$getDatasetMeta.label,value=_chart$getDatasetMeta.value;return{label:label,value:value,index:index,datasetIndex:datasetIndex};}function resolveOptions(options){options=_extends({},defaults.tooltips,options);options.bodyFontFamily=valueOrDefault$3(options.bodyFontFamily,defaults.fontFamily);options.bodyFontStyle=valueOrDefault$3(options.bodyFontStyle,defaults.fontStyle);options.bodyFontSize=valueOrDefault$3(options.bodyFontSize,defaults.fontSize);options.boxHeight=valueOrDefault$3(options.boxHeight,options.bodyFontSize);options.boxWidth=valueOrDefault$3(options.boxWidth,options.bodyFontSize);options.titleFontFamily=valueOrDefault$3(options.titleFontFamily,defaults.fontFamily);options.titleFontStyle=valueOrDefault$3(options.titleFontStyle,defaults.fontStyle);options.titleFontSize=valueOrDefault$3(options.titleFontSize,defaults.fontSize);options.footerFontFamily=valueOrDefault$3(options.footerFontFamily,defaults.fontFamily);options.footerFontStyle=valueOrDefault$3(options.footerFontStyle,defaults.fontStyle);options.footerFontSize=valueOrDefault$3(options.footerFontSize,defaults.fontSize);return options;}function getTooltipSize(tooltip){var ctx=tooltip._chart.ctx;var body=tooltip.body,footer=tooltip.footer,options=tooltip.options,title=tooltip.title;var bodyFontSize=options.bodyFontSize,footerFontSize=options.footerFontSize,titleFontSize=options.titleFontSize,boxWidth=options.boxWidth,boxHeight=options.boxHeight;var titleLineCount=title.length;var footerLineCount=footer.length;var bodyLineItemCount=body.length;var height=options.yPadding*2;var width=0;var combinedBodyLength=body.reduce(function(count,bodyItem){return count+bodyItem.before.length+bodyItem.lines.length+bodyItem.after.length;},0);combinedBodyLength+=tooltip.beforeBody.length+tooltip.afterBody.length;if(titleLineCount){height+=titleLineCount*titleFontSize+(titleLineCount-1)*options.titleSpacing+options.titleMarginBottom;}if(combinedBodyLength){var bodyLineHeight=options.displayColors?Math.max(boxHeight,bodyFontSize):bodyFontSize;height+=bodyLineItemCount*bodyLineHeight+(combinedBodyLength-bodyLineItemCount)*bodyFontSize+(combinedBodyLength-1)*options.bodySpacing;}if(footerLineCount){height+=options.footerMarginTop+footerLineCount*footerFontSize+(footerLineCount-1)*options.footerSpacing;}var widthPadding=0;var maxLineWidth=function maxLineWidth(line){width=Math.max(width,ctx.measureText(line).width+widthPadding);};ctx.save();ctx.font=helpers.fontString(titleFontSize,options.titleFontStyle,options.titleFontFamily);helpers.each(tooltip.title,maxLineWidth);ctx.font=helpers.fontString(bodyFontSize,options.bodyFontStyle,options.bodyFontFamily);helpers.each(tooltip.beforeBody.concat(tooltip.afterBody),maxLineWidth);widthPadding=options.displayColors?boxWidth+2:0;helpers.each(body,function(bodyItem){helpers.each(bodyItem.before,maxLineWidth);helpers.each(bodyItem.lines,maxLineWidth);helpers.each(bodyItem.after,maxLineWidth);});widthPadding=0;ctx.font=helpers.fontString(footerFontSize,options.footerFontStyle,options.footerFontFamily);helpers.each(tooltip.footer,maxLineWidth);ctx.restore();width+=2*options.xPadding;return{width:width,height:height};}function determineAlignment(chart,options,size){var x=size.x,y=size.y,width=size.width,height=size.height;var chartArea=chart.chartArea;var xAlign='center';var yAlign='center';if(y<height){yAlign='top';}else if(y>chart.height-height){yAlign='bottom';}var lf,rf;var midX=(chartArea.left+chartArea.right)/2;var midY=(chartArea.top+chartArea.bottom)/2;if(yAlign==='center'){lf=function lf(value){return value<=midX;};rf=function rf(value){return value>midX;};}else{lf=function lf(value){return value<=width/2;};rf=function rf(value){return value>=chart.width-width/2;};}var olf=function olf(value){return value+width+options.caretSize+options.caretPadding>chart.width;};var orf=function orf(value){return value-width-options.caretSize-options.caretPadding<0;};var yf=function yf(value){return value<=midY?'top':'bottom';};if(lf(x)){xAlign='left';if(olf(x)){xAlign='center';yAlign=yf(y);}}else if(rf(x)){xAlign='right';if(orf(x)){xAlign='center';yAlign=yf(y);}}return{xAlign:options.xAlign?options.xAlign:xAlign,yAlign:options.yAlign?options.yAlign:yAlign};}function alignX(size,xAlign,chartWidth){var x=size.x,width=size.width;if(xAlign==='right'){x-=width;}else if(xAlign==='center'){x-=width/2;if(x+width>chartWidth){x=chartWidth-width;}if(x<0){x=0;}}return x;}function alignY(size,yAlign,paddingAndSize){var y=size.y,height=size.height;if(yAlign==='top'){y+=paddingAndSize;}else if(yAlign==='bottom'){y-=height+paddingAndSize;}else{y-=height/2;}return y;}function getBackgroundPoint(options,size,alignment,chart){var caretSize=options.caretSize,caretPadding=options.caretPadding,cornerRadius=options.cornerRadius;var xAlign=alignment.xAlign,yAlign=alignment.yAlign;var paddingAndSize=caretSize+caretPadding;var radiusAndPadding=cornerRadius+caretPadding;var x=alignX(size,xAlign,chart.width);var y=alignY(size,yAlign,paddingAndSize);if(yAlign==='center'){if(xAlign==='left'){x+=paddingAndSize;}else if(xAlign==='right'){x-=paddingAndSize;}}else if(xAlign==='left'){x-=radiusAndPadding;}else if(xAlign==='right'){x+=radiusAndPadding;}return{x:x,y:y};}function getAlignedX(tooltip,align){var options=tooltip.options;return align==='center'?tooltip.x+tooltip.width/2:align==='right'?tooltip.x+tooltip.width-options.xPadding:tooltip.x+options.xPadding;}function getBeforeAfterBodyLines(callback){return pushOrConcat([],splitNewlines(callback));}var Tooltip=function(_Element){_inherits(Tooltip,_Element);function Tooltip(config){var _this;_classCallCheck(this,Tooltip);_this=_possibleConstructorReturn(this,_getPrototypeOf(Tooltip).call(this));_this.opacity=0;_this._active=[];_this._chart=config._chart;_this._eventPosition=undefined;_this._size=undefined;_this._cachedAnimations=undefined;_this.$animations=undefined;_this.options=undefined;_this.dataPoints=undefined;_this.title=undefined;_this.beforeBody=undefined;_this.body=undefined;_this.afterBody=undefined;_this.footer=undefined;_this.xAlign=undefined;_this.yAlign=undefined;_this.x=undefined;_this.y=undefined;_this.height=undefined;_this.width=undefined;_this.caretX=undefined;_this.caretY=undefined;_this.labelColors=undefined;_this.labelTextColors=undefined;_this.initialize();return _this;}_createClass(Tooltip,[{key:'initialize',value:function initialize(){var me=this;me.options=resolveOptions(me._chart.options.tooltips);}},{key:'_resolveAnimations',value:function _resolveAnimations(){var me=this;var cached=me._cachedAnimations;if(cached){return cached;}var chart=me._chart;var opts=chart.options.animation&&me.options.animation;var animations=new Animations(me._chart,opts);me._cachedAnimations=Object.freeze(animations);return animations;}},{key:'getTitle',value:function getTitle(tooltipitem,data){var me=this;var opts=me.options;var callbacks=opts.callbacks;var beforeTitle=callbacks.beforeTitle.apply(me,[tooltipitem,data]);var title=callbacks.title.apply(me,[tooltipitem,data]);var afterTitle=callbacks.afterTitle.apply(me,[tooltipitem,data]);var lines=[];lines=pushOrConcat(lines,splitNewlines(beforeTitle));lines=pushOrConcat(lines,splitNewlines(title));lines=pushOrConcat(lines,splitNewlines(afterTitle));return lines;}},{key:'getBeforeBody',value:function getBeforeBody(tooltipitem,data){return getBeforeAfterBodyLines(this.options.callbacks.beforeBody.apply(this,[tooltipitem,data]));}},{key:'getBody',value:function getBody(tooltipItems,data){var me=this;var callbacks=me.options.callbacks;var bodyItems=[];helpers.each(tooltipItems,function(tooltipItem){var bodyItem={before:[],lines:[],after:[]};pushOrConcat(bodyItem.before,splitNewlines(callbacks.beforeLabel.call(me,tooltipItem,data)));pushOrConcat(bodyItem.lines,callbacks.label.call(me,tooltipItem,data));pushOrConcat(bodyItem.after,splitNewlines(callbacks.afterLabel.call(me,tooltipItem,data)));bodyItems.push(bodyItem);});return bodyItems;}},{key:'getAfterBody',value:function getAfterBody(tooltipitem,data){return getBeforeAfterBodyLines(this.options.callbacks.afterBody.apply(this,[tooltipitem,data]));}},{key:'getFooter',value:function getFooter(tooltipitem,data){var me=this;var callbacks=me.options.callbacks;var beforeFooter=callbacks.beforeFooter.apply(me,[tooltipitem,data]);var footer=callbacks.footer.apply(me,[tooltipitem,data]);var afterFooter=callbacks.afterFooter.apply(me,[tooltipitem,data]);var lines=[];lines=pushOrConcat(lines,splitNewlines(beforeFooter));lines=pushOrConcat(lines,splitNewlines(footer));lines=pushOrConcat(lines,splitNewlines(afterFooter));return lines;}},{key:'_createItems',value:function _createItems(){var me=this;var active=me._active;var options=me.options;var data=me._chart.data;var labelColors=[];var labelTextColors=[];var tooltipItems=[];var i,len;for(i=0,len=active.length;i<len;++i){tooltipItems.push(createTooltipItem(me._chart,active[i]));}if(options.filter){tooltipItems=tooltipItems.filter(function(a){return options.filter(a,data);});}if(options.itemSort){tooltipItems=tooltipItems.sort(function(a,b){return options.itemSort(a,b,data);});}helpers.each(tooltipItems,function(tooltipItem){labelColors.push(options.callbacks.labelColor.call(me,tooltipItem,me._chart));labelTextColors.push(options.callbacks.labelTextColor.call(me,tooltipItem,me._chart));});me.labelColors=labelColors;me.labelTextColors=labelTextColors;me.dataPoints=tooltipItems;return tooltipItems;}},{key:'update',value:function update(changed){var me=this;var options=me.options;var active=me._active;var properties;if(!active.length){if(me.opacity!==0){properties={opacity:0};}}else{var data=me._chart.data;var position=positioners[options.position].call(me,active,me._eventPosition);var tooltipItems=me._createItems();me.title=me.getTitle(tooltipItems,data);me.beforeBody=me.getBeforeBody(tooltipItems,data);me.body=me.getBody(tooltipItems,data);me.afterBody=me.getAfterBody(tooltipItems,data);me.footer=me.getFooter(tooltipItems,data);var size=me._size=getTooltipSize(me);var positionAndSize=_extends({},position,size);var alignment=determineAlignment(me._chart,options,positionAndSize);var backgroundPoint=getBackgroundPoint(options,positionAndSize,alignment,me._chart);me.xAlign=alignment.xAlign;me.yAlign=alignment.yAlign;properties={opacity:1,x:backgroundPoint.x,y:backgroundPoint.y,width:size.width,height:size.height,caretX:position.x,caretY:position.y};}if(properties){me._resolveAnimations().update(me,properties);}if(changed&&options.custom){options.custom.call(me);}}},{key:'drawCaret',value:function drawCaret(tooltipPoint,ctx,size){var caretPosition=this.getCaretPosition(tooltipPoint,size);ctx.lineTo(caretPosition.x1,caretPosition.y1);ctx.lineTo(caretPosition.x2,caretPosition.y2);ctx.lineTo(caretPosition.x3,caretPosition.y3);}},{key:'getCaretPosition',value:function getCaretPosition(tooltipPoint,size){var xAlign=this.xAlign,yAlign=this.yAlign,options=this.options;var cornerRadius=options.cornerRadius,caretSize=options.caretSize;var ptX=tooltipPoint.x,ptY=tooltipPoint.y;var width=size.width,height=size.height;var x1,x2,x3,y1,y2,y3;if(yAlign==='center'){y2=ptY+height/2;if(xAlign==='left'){x1=ptX;x2=x1-caretSize;}else{x1=ptX+width;x2=x1+caretSize;}x3=x1;y1=y2+caretSize;y3=y2-caretSize;}else{if(xAlign==='left'){x2=ptX+cornerRadius+caretSize;}else if(xAlign==='right'){x2=ptX+width-cornerRadius-caretSize;}else{x2=this.caretX;}x1=x2-caretSize;x3=x2+caretSize;if(yAlign==='top'){y1=ptY;y2=y1-caretSize;}else{y1=ptY+height;y2=y1+caretSize;}y3=y1;}return{x1:x1,x2:x2,x3:x3,y1:y1,y2:y2,y3:y3};}},{key:'drawTitle',value:function drawTitle(pt,ctx){var me=this;var options=me.options;var title=me.title;var length=title.length;var titleFontSize,titleSpacing,i;if(length){var rtlHelper=getRtlHelper(options.rtl,me.x,me.width);pt.x=getAlignedX(me,options.titleAlign);ctx.textAlign=rtlHelper.textAlign(options.titleAlign);ctx.textBaseline='middle';titleFontSize=options.titleFontSize;titleSpacing=options.titleSpacing;ctx.fillStyle=options.titleFontColor;ctx.font=helpers.fontString(titleFontSize,options.titleFontStyle,options.titleFontFamily);for(i=0;i<length;++i){ctx.fillText(title[i],rtlHelper.x(pt.x),pt.y+titleFontSize/2);pt.y+=titleFontSize+titleSpacing;if(i+1===length){pt.y+=options.titleMarginBottom-titleSpacing;}}}}},{key:'_drawColorBox',value:function _drawColorBox(ctx,pt,i,rtlHelper){var me=this;var options=me.options;var labelColors=me.labelColors[i];var boxHeight=options.boxHeight,boxWidth=options.boxWidth,bodyFontSize=options.bodyFontSize;var colorX=getAlignedX(me,'left');var rtlColorX=rtlHelper.x(colorX);var yOffSet=boxHeight<bodyFontSize?(bodyFontSize-boxHeight)/2:0;var colorY=pt.y+yOffSet;ctx.fillStyle=options.multiKeyBackground;ctx.fillRect(rtlHelper.leftForLtr(rtlColorX,boxWidth),colorY,boxWidth,boxHeight);ctx.lineWidth=1;ctx.strokeStyle=labelColors.borderColor;ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX,boxWidth),colorY,boxWidth,boxHeight);ctx.fillStyle=labelColors.backgroundColor;ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX,1),boxWidth-2),colorY+1,boxWidth-2,boxHeight-2);ctx.fillStyle=me.labelTextColors[i];}},{key:'drawBody',value:function drawBody(pt,ctx){var me=this;var body=me.body,options=me.options;var bodyFontSize=options.bodyFontSize,bodySpacing=options.bodySpacing,bodyAlign=options.bodyAlign,displayColors=options.displayColors,boxHeight=options.boxHeight,boxWidth=options.boxWidth;var bodyLineHeight=bodyFontSize;var xLinePadding=0;var rtlHelper=getRtlHelper(options.rtl,me.x,me.width);var fillLineOfText=function fillLineOfText(line){ctx.fillText(line,rtlHelper.x(pt.x+xLinePadding),pt.y+bodyLineHeight/2);pt.y+=bodyLineHeight+bodySpacing;};var bodyAlignForCalculation=rtlHelper.textAlign(bodyAlign);var bodyItem,textColor,lines,i,j,ilen,jlen;ctx.textAlign=bodyAlign;ctx.textBaseline='middle';ctx.font=helpers.fontString(bodyFontSize,options.bodyFontStyle,options.bodyFontFamily);pt.x=getAlignedX(me,bodyAlignForCalculation);ctx.fillStyle=options.bodyFontColor;helpers.each(me.beforeBody,fillLineOfText);xLinePadding=displayColors&&bodyAlignForCalculation!=='right'?bodyAlign==='center'?boxWidth/2+1:boxWidth+2:0;for(i=0,ilen=body.length;i<ilen;++i){bodyItem=body[i];textColor=me.labelTextColors[i];ctx.fillStyle=textColor;helpers.each(bodyItem.before,fillLineOfText);lines=bodyItem.lines;if(displayColors&&lines.length){me._drawColorBox(ctx,pt,i,rtlHelper);bodyLineHeight=Math.max(bodyFontSize,boxHeight);}for(j=0,jlen=lines.length;j<jlen;++j){fillLineOfText(lines[j]);bodyLineHeight=bodyFontSize;}helpers.each(bodyItem.after,fillLineOfText);}xLinePadding=0;bodyLineHeight=bodyFontSize;helpers.each(me.afterBody,fillLineOfText);pt.y-=bodySpacing;}},{key:'drawFooter',value:function drawFooter(pt,ctx){var me=this;var options=me.options;var footer=me.footer;var length=footer.length;var footerFontSize,i;if(length){var rtlHelper=getRtlHelper(options.rtl,me.x,me.width);pt.x=getAlignedX(me,options.footerAlign);pt.y+=options.footerMarginTop;ctx.textAlign=rtlHelper.textAlign(options.footerAlign);ctx.textBaseline='middle';footerFontSize=options.footerFontSize;ctx.fillStyle=options.footerFontColor;ctx.font=helpers.fontString(footerFontSize,options.footerFontStyle,options.footerFontFamily);for(i=0;i<length;++i){ctx.fillText(footer[i],rtlHelper.x(pt.x),pt.y+footerFontSize/2);pt.y+=footerFontSize+options.footerSpacing;}}}},{key:'drawBackground',value:function drawBackground(pt,ctx,tooltipSize){var xAlign=this.xAlign,yAlign=this.yAlign,options=this.options;var x=pt.x,y=pt.y;var width=tooltipSize.width,height=tooltipSize.height;var radius=options.cornerRadius;ctx.fillStyle=options.backgroundColor;ctx.strokeStyle=options.borderColor;ctx.lineWidth=options.borderWidth;ctx.beginPath();ctx.moveTo(x+radius,y);if(yAlign==='top'){this.drawCaret(pt,ctx,tooltipSize);}ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);if(yAlign==='center'&&xAlign==='right'){this.drawCaret(pt,ctx,tooltipSize);}ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);if(yAlign==='bottom'){this.drawCaret(pt,ctx,tooltipSize);}ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);if(yAlign==='center'&&xAlign==='left'){this.drawCaret(pt,ctx,tooltipSize);}ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();ctx.fill();if(options.borderWidth>0){ctx.stroke();}}},{key:'_updateAnimationTarget',value:function _updateAnimationTarget(){var me=this;var chart=me._chart;var options=me.options;var anims=me.$animations;var animX=anims&&anims.x;var animY=anims&&anims.y;if(animX||animY){var position=positioners[options.position].call(me,me._active,me._eventPosition);if(!position){return;}var size=me._size=getTooltipSize(me);var positionAndSize=_extends({},position,me._size);var alignment=determineAlignment(chart,options,positionAndSize);var point=getBackgroundPoint(options,positionAndSize,alignment,chart);if(animX._to!==point.x||animY._to!==point.y){me.xAlign=alignment.xAlign;me.yAlign=alignment.yAlign;me.width=size.width;me.height=size.height;me.caretX=position.x;me.caretY=position.y;me._resolveAnimations().update(me,point);}}}},{key:'draw',value:function draw(ctx){var me=this;var options=me.options;var opacity=me.opacity;if(!opacity){return;}me._updateAnimationTarget();var tooltipSize={width:me.width,height:me.height};var pt={x:me.x,y:me.y};opacity=Math.abs(opacity)<1e-3?0:opacity;var hasTooltipContent=me.title.length||me.beforeBody.length||me.body.length||me.afterBody.length||me.footer.length;if(options.enabled&&hasTooltipContent){ctx.save();ctx.globalAlpha=opacity;me.drawBackground(pt,ctx,tooltipSize);helpers.rtl.overrideTextDirection(ctx,options.textDirection);pt.y+=options.yPadding;me.drawTitle(pt,ctx);me.drawBody(pt,ctx);me.drawFooter(pt,ctx);helpers.rtl.restoreTextDirection(ctx,options.textDirection);ctx.restore();}}},{key:'handleEvent',value:function handleEvent(e,replay){var me=this;var options=me.options;var lastActive=me._active||[];var changed=false;var active=[];if(e.type!=='mouseout'){active=me._chart.getElementsAtEventForMode(e,options.mode,options,replay);if(options.reverse){active.reverse();}}changed=replay||!helpers._elementsEqual(active,lastActive);if(changed){me._active=active;if(options.enabled||options.custom){me._eventPosition={x:e.x,y:e.y};me.update(true);}}return changed;}}]);return Tooltip;}(Element$1);Tooltip.positioners=positioners;var tooltip={id:'tooltip',_element:Tooltip,positioners:positioners,afterInit:function afterInit(chart){var tooltipOpts=chart.options.tooltips;if(tooltipOpts){chart.tooltip=new Tooltip({_chart:chart});}},beforeUpdate:function beforeUpdate(chart){if(chart.tooltip){chart.tooltip.initialize();}},reset:function reset(chart){if(chart.tooltip){chart.tooltip.initialize();}},afterDraw:function afterDraw(chart){var tooltip=chart.tooltip;var args={tooltip:tooltip};if(pluginsCore.notify(chart,'beforeTooltipDraw',[args])===false){return;}tooltip.draw(chart.ctx);pluginsCore.notify(chart,'afterTooltipDraw',[args]);},afterEvent:function afterEvent(chart,e,replay){if(chart.tooltip){var useFinalPosition=replay;chart.tooltip.handleEvent(e,useFinalPosition);}}};var plugins={filler:filler,legend:legend,title:title,tooltip:tooltip};Chart.helpers=helpers;Chart._adapters=_adapters;Chart.Animation=Animation;Chart.Animator=Animator$1;Chart.animationService=Animations;Chart.controllers=controllers;Chart.DatasetController=DatasetController;Chart.defaults=defaults;Chart.Element=Element$1;Chart.elements=elements;Chart.Interaction=Interaction;Chart.layouts=layouts;Chart.platforms=platforms;Chart.plugins=pluginsCore;Chart.Scale=Scale;Chart.scaleService=scaleService;Chart.Ticks=Ticks;Object.keys(scales).forEach(function(key){return Chart.scaleService.registerScale(scales[key]);});for(var k in plugins){if(Object.prototype.hasOwnProperty.call(plugins,k)){Chart.plugins.register(plugins[k]);}}if(typeof window!=='undefined'){window.Chart=Chart;}return Chart;});

/***/ }),

/***/ "./src/js/lib/external/dateFormat.js":
/*!*******************************************!*\
  !*** ./src/js/lib/external/dateFormat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateFormat": () => (/* binding */ dateFormat)
/* harmony export */ });
/* */

/*! Date Format 1.2.4
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by:
 * Scott Trenda <scott.trenda.net>
 * Kris Kowal <cixar.com/~kris.kowal/>
 * Theodore Kruczek
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to formats.masks.default.
 */
var pad = (val, len) => {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
};

var formats = {
  masks: {
    // Common Formats
    default: 'ddd mmm dd yyyy HH:MM:ss',
    shortDate: 'm/d/yy',
    mediumDate: 'mmm d, yyyy',
    longDate: 'mmmm d, yyyy',
    fullDate: 'dddd, mmmm d, yyyy',
    shortTime: 'h:MM TT',
    mediumTime: 'h:MM:ss TT',
    longTime: 'h:MM:ss TT Z',
    isoDate: 'yyyy-mm-dd',
    isoTime: 'HH:MM:ss',
    isoDateTime: "yyyy-mm-dd' 'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
  },
  i18n: {
    // Internationalization strings
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
}; // eslint-disable-next-line prefer-named-capture-group

var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HMThst])\1?|[LSZlo]|"(?:(?!")[\s\S])*"|'(?:(?!')[\s\S])*'/g;
var timezone = /\b(?:[ACEMP][DPS]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[\+\x2D][0-9]{4})?)\b/g;
var timezoneClip = /(?:(?![\+\x2D0-9A-Z])[\s\S])/g;

var dateFormat = function dateFormat(date, mask, utc) {
  // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
  if (arguments.length === 1 && Object.prototype.toString.call(date) === '[object String]' && !/[0-9]/.test(date)) {
    mask = date; // eslint-disable-next-line no-undefined

    date = undefined;
  } // Passing date through Date applies Date.parse, if necessary


  date = date ? new Date(date) : new Date();
  if (isNaN(date)) throw SyntaxError("invalid date - ".concat(date));
  mask = String(formats.masks[mask] || mask || formats.masks['default']); // Allow setting the utc argument via the mask

  if (mask.slice(0, 4) === 'UTC:') {
    mask = mask.slice(4);
    utc = true;
  }

  var _ = utc ? 'getUTC' : 'get';

  var d = date[_ + 'Date']();

  var D = date[_ + 'Day']();

  var m = date[_ + 'Month']();

  var y = date[_ + 'FullYear']();

  var H = date[_ + 'Hours']();

  var M = date[_ + 'Minutes']();

  var s = date[_ + 'Seconds']();

  var L = date[_ + 'Milliseconds']();

  var o = utc ? 0 : date.getTimezoneOffset();
  var flags = {
    d: d,
    dd: pad(d),
    ddd: formats.i18n.dayNames[D],
    dddd: formats.i18n.dayNames[D + 7],
    m: m + 1,
    mm: pad(m + 1),
    mmm: formats.i18n.monthNames[m],
    mmmm: formats.i18n.monthNames[m + 12],
    yy: String(y).slice(2),
    yyyy: y,
    h: H % 12 || 12,
    hh: pad(H % 12 || 12),
    H: H,
    HH: pad(H),
    M: M,
    MM: pad(M),
    s: s,
    ss: pad(s),
    l: pad(L, 3),
    L: pad(L > 99 ? Math.round(L / 10) : L),
    t: H < 12 ? 'a' : 'p',
    tt: H < 12 ? 'am' : 'pm',
    T: H < 12 ? 'A' : 'P',
    TT: H < 12 ? 'AM' : 'PM',
    Z: utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
    o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
    S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
  };
  return mask.replace(token, function ($0) {
    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
  });
};



/***/ }),

/***/ "./src/js/lib/external/file-saver.min.js":
/*!***********************************************!*\
  !*** ./src/js/lib/external/file-saver.min.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveAs": () => (/* binding */ saveAs)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs = saveAs || function (e) {
  'use strict';

  if (!(void 0 === e || 'undefined' != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
        n = function n() {
      return e.URL || e.webkitURL || e;
    },
        o = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
        r = ('download' in o),
        a = /constructor/i.test(e.HTMLElement) || e.safari,
        i = /CriOS\/[\d]+/.test(navigator.userAgent),
        d = function d(t) {
      (e.setImmediate || e.setTimeout)(function () {
        throw t;
      }, 0);
    },
        f = function f(e) {
      setTimeout(function () {
        'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
      }, 4e4);
    },
        s = function s(e, t, n) {
      for (var o = (t = [].concat(t)).length; o--;) {
        var r = e['on' + t[o]];
        if ('function' == typeof r) try {
          r.call(e, n || e);
        } catch (e) {
          d(e);
        }
      }
    },
        u = function u(e) {
      return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
        type: e.type
      }) : e;
    },
        c = function c(t, d, _c) {
      _c || (t = u(t));

      var l,
          p = this,
          v = 'application/octet-stream' === t.type,
          w = function w() {
        s(p, 'writestart progress write writeend'.split(' '));
      };

      if (p.readyState = p.INIT, r) return l = n().createObjectURL(t), void setTimeout(function () {
        o.href = l, o.download = d, function (e) {
          var t = new MouseEvent('click');
          e.dispatchEvent(t);
        }(o), w(), f(l), p.readyState = p.DONE;
      });
      !function () {
        if ((i || v && a) && e.FileReader) {
          var o = new FileReader();
          return o.onloadend = function () {
            var t = i ? o.result : o.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
            e.open(t, '_blank') || (e.location.href = t), t = void 0, p.readyState = p.DONE, w();
          }, o.readAsDataURL(t), void (p.readyState = p.INIT);
        }

        (l || (l = n().createObjectURL(t)), v) ? e.location.href = l : e.open(l, '_blank') || (e.location.href = l);
        p.readyState = p.DONE, w(), f(l);
      }();
    },
        l = c.prototype;

    return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, n) {
      return t = t || e.name || 'download', n || (e = u(e)), navigator.msSaveOrOpenBlob(e, t);
    } : (l.abort = function () {}, l.readyState = l.INIT = 0, l.WRITING = 1, l.DONE = 2, l.error = l.onwritestart = l.onprogress = l.onwrite = l.onabort = l.onerror = l.onwriteend = null, function (e, t, n) {
      return new c(e, t || e.name || 'download', n);
    });
  }
}('undefined' != typeof self && self || 'undefined' != typeof window && window || undefined.content);

 true && module.exports ? module.exports.saveAs = saveAs : 'undefined' != typeof define && null !== define && null !== __webpack_require__.amdO && define('FileSaver.js', function () {
  return saveAs;
});


/***/ }),

/***/ "./src/js/lib/lookangles.js":
/*!**********************************!*\
  !*** ./src/js/lib/lookangles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "satellite": () => (/* binding */ satellite)
/* harmony export */ });
/* harmony import */ var ootk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ootk */ "./node_modules/ootk/dist/ootk.js");
/* harmony import */ var ootk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ootk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants.js */ "./src/js/lib/constants.js");
/* harmony import */ var _helpers_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.ts */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/js/lib/external/dateFormat.js */ "./src/js/lib/external/dateFormat.js");
/* harmony import */ var _app_js_api_externalApi_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/js/api/externalApi.ts */ "./src/js/api/externalApi.ts");
/* harmony import */ var _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/js/timeManager/timeManager.ts */ "./src/js/timeManager/timeManager.ts");
/**
 * /////////////////////////////////////////////////////////////////////////////
 *
 * lookangles.js is an expansion library for satellite.js providing tailored
 * functions for calculating orbital data.
 * http://keeptrack.space
 *
 * @Copyright (C) 2016-2021 Theodore Kruczek
 * @Copyright (C) 2020 Heather Kruczek
 *
 * KeepTrack is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * KeepTrack is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with
 * KeepTrack. If not, see <http://www.gnu.org/licenses/>.
 *
 * /////////////////////////////////////////////////////////////////////////////
 */









var satellite = {}; // Constants

var TAU = 2 * Math.PI;
var DEG2RAD = TAU / 360;
var RAD2DEG = 360 / TAU;
var MINUTES_PER_DAY = 1440;
var MILLISECONDS_PER_DAY = 1.15741e-8;
var settingsManager; // Legacy API

satellite.sgp4 = ootk__WEBPACK_IMPORTED_MODULE_0__.Sgp4.propagate;
satellite.gstime = ootk__WEBPACK_IMPORTED_MODULE_0__.Sgp4.gstime;
satellite.twoline2satrec = ootk__WEBPACK_IMPORTED_MODULE_0__.Sgp4.createSatrec;
satellite.geodeticToEcf = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.lla2ecf;
satellite.ecfToEci = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.ecf2eci;
satellite.eciToEcf = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.eci2ecf;
satellite.eciToGeodetic = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.eci2lla;
satellite.degreesLat = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.getDegLat;
satellite.degreesLong = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.getDegLon;
satellite.ecfToLookAngles = ootk__WEBPACK_IMPORTED_MODULE_0__.Transforms.ecf2rae;
var satSet, satCruncher, sensorManager, groupsManager;

satellite.initLookangles = () => {
  satSet = _app_js_api_externalApi_ts__WEBPACK_IMPORTED_MODULE_5__.keepTrackApi.programs.satSet;
  satCruncher = _app_js_api_externalApi_ts__WEBPACK_IMPORTED_MODULE_5__.keepTrackApi.programs.satCruncher;
  sensorManager = _app_js_api_externalApi_ts__WEBPACK_IMPORTED_MODULE_5__.keepTrackApi.programs.sensorManager;
  groupsManager = _app_js_api_externalApi_ts__WEBPACK_IMPORTED_MODULE_5__.keepTrackApi.programs.groupsManager;
  settingsManager = _app_js_api_externalApi_ts__WEBPACK_IMPORTED_MODULE_5__.keepTrackApi.programs.settingsManager;
};

var _propagate = (propTempOffset, satrec, sensor) => {
  var now = new Date(); // Make a time variable

  now.setTime(Number(Date.now()) + propTempOffset); // Set the time variable to the time in the future

  var aer = satellite.getRae(now, satrec, sensor);
  var isInFOV = satellite.checkIsInFOV(sensor, aer);

  if (isInFOV) {
    if (satellite.isRiseSetLookangles) {
      // Previous Pass to Calculate first line of coverage
      var now1 = new Date();
      now1.setTime(Number(now) - 1000);
      var aer1 = satellite.getRae(now1, satrec, sensor);
      var isInFOV1 = satellite.checkIsInFOV(sensor, aer1); // Is in FOV and Wasn't Last Time so First Line of Coverage

      if (!isInFOV1) {
        return {
          time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(now, 'isoDateTime', true),
          rng: aer.rng,
          az: aer.az,
          el: aer.el
        };
      } else {
        // Next Pass to Calculate Last line of coverage
        now1.setTime(Number(now) + 1000);
        aer1 = satellite.getRae(now1, satrec, sensor);
        isInFOV1 = satellite.checkIsInFOV(sensor, aer1); // Is in FOV and Wont Be Next Time so Last Line of Coverage

        if (!isInFOV1) {
          return {
            time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(now, 'isoDateTime', true),
            rng: aer.rng,
            az: aer.az,
            el: aer.el
          };
        }
      }

      return false;
    }

    return {
      time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(now, 'isoDateTime', true),
      rng: aer.rng,
      az: aer.az,
      el: aer.el
    };
  }

  return false;
}; // Settings


satellite.lookanglesInterval = 5;
satellite.lookanglesLength = 2;
satellite.isRiseSetLookangles = false;

satellite.currentEpoch = currentDate => {
  currentDate = new Date(currentDate);
  var epochYear = currentDate.getUTCFullYear();
  epochYear = parseInt(epochYear.toString().substr(2, 2));
  var epochDay = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(_app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getDayOfYear(currentDate), 3);
  var timeOfDay = (currentDate.getUTCHours() * 60 + currentDate.getUTCMinutes()) / 1440;
  epochDay = (epochDay + timeOfDay).toFixed(8);
  epochDay = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(epochDay, 12);
  return [epochYear, epochDay];
};

satellite.distance = (hoverSat, selectedSat) => {
  if (hoverSat == null || selectedSat == null) return '';
  hoverSat = satSet.getSat(hoverSat.id);
  selectedSat = satSet.getSat(selectedSat.id);

  if (selectedSat == null || hoverSat == null) {
    return '';
  }

  if (selectedSat.type === 'Star' || hoverSat.type === 'Star') {
    return '';
  }

  var distanceApartX = Math.pow(hoverSat.position.x - selectedSat.position.x, 2);
  var distanceApartY = Math.pow(hoverSat.position.y - selectedSat.position.y, 2);
  var distanceApartZ = Math.pow(hoverSat.position.z - selectedSat.position.z, 2);
  var distanceApart = Math.sqrt(distanceApartX + distanceApartY + distanceApartZ).toFixed(0);
  var sameBeamStr = '';

  try {
    if (satellite.currentTEARR.inview) {
      if (distanceApart < satellite.currentTEARR.rng * Math.sin(DEG2RAD * sensorManager.currentSensor.beamwidth)) {
        if (satellite.currentTEARR.rng < sensorManager.currentSensor.obsmaxrange && satellite.currentTEARR.rng > 0) {
          sameBeamStr = ' (Within One Beam)';
        }
      }
    }
  } catch (_unused) {// Intentionally Blank
  }

  return '<br />Range: ' + distanceApart + ' km' + sameBeamStr;
}; // TODO: UI element changes/references should be moved to ui.js
// There are a series of referecnes, especially in satellite.obs, to ui elements.
// These should be moved to ui.js and then called before/after calling satellite.setobs


satellite.setobs = sensor => {
  try {
    if (typeof sensor == 'undefined' || sensor == null) {
      sensorManager.setCurrentSensor(sensorManager.defaultSensor);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.sensor-reset-menu').hide();
      return;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-sensor-info').removeClass('bmenu-item-disabled');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-fov-bubble').removeClass('bmenu-item-disabled');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-surveillance').removeClass('bmenu-item-disabled');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-planetarium').removeClass('bmenu-item-disabled');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('#menu-astronomy').removeClass('bmenu-item-disabled');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.sensor-reset-menu').show();
    }

    sensorManager.setCurrentSensor(sensor);
    sensorManager.currentSensor.observerGd = {
      // Array to calculate look angles in propagate()
      lat: sensor.lat * DEG2RAD,
      lon: sensor.lon * DEG2RAD,
      alt: parseFloat(sensor.alt) // Converts from string to number

    };
  } catch (error) {
    console.warn(error);
  }
};

satellite.calculateVisMag = (sat, sensor, propTime, sun) => {
  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var rae = satellite.getRae(propTime, satrec, sensor);
  var distanceToSatellite = rae.rng; //This is in KM

  var theta = Math.acos(self.numeric.dot([-sat.position.x, -sat.position.y, -sat.position.z], [sat.position.x + sun.eci.x, -sat.position.y + sun.eci.y, -sat.position.z + sun.eci.z]) / (Math.sqrt(Math.pow(-sat.position.x, 2) + Math.pow(-sat.position.y, 2) + Math.pow(-sat.position.z, 2)) * Math.sqrt(Math.pow(-sat.position.x + sun.eci.x, 2) + Math.pow(-sat.position.y + sun.eci.y, 2) + Math.pow(-sat.position.z + sun.eci.z, 2)))); // Note sometimes -1.3 is used for this calculation.
  //-1.8 is std. mag for iss

  var intrinsicMagnitude = -1.8;
  var term2 = 5.0 * Math.log10(distanceToSatellite);
  var arg = Math.sin(theta) + (Math.PI - theta) * Math.cos(theta);
  var term3 = -2.5 * Math.log10(arg);
  var apparentMagnitude = intrinsicMagnitude + term2 + term3;
  return apparentMagnitude;
};

satellite.altitudeCheck = (tle1, tle2, propOffset) => {
  var satrec = satellite.twoline2satrec(tle1, tle2); // perform and store sat init calcs

  var propTime = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
  var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(propTime.getUTCFullYear(), propTime.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
  propTime.getUTCDate(), propTime.getUTCHours(), propTime.getUTCMinutes(), propTime.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

  j += propTime.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
  var gmst = satellite.gstime(j);
  var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
  var positionEci = satellite.sgp4(satrec, m);
  var gpos;

  try {
    gpos = satellite.eciToGeodetic(positionEci.position, gmst);
  } catch (e) {
    return 0; // Auto fail the altitude check
  }

  return gpos.alt;
};

satellite.setTEARR = currentTEARR => {
  satellite.currentTEARR = currentTEARR;
};

satellite.getTEARR = (sat, sensor, propTime) => {
  var currentTEARR = {}; // Most current TEARR data that is set in satellite object and returned.
  // If no sensor passed to function then try to use the 'currentSensor'

  if (typeof sensor == 'undefined') {
    if (typeof sensorManager.currentSensor != 'undefined') {
      sensor = sensorManager.currentSensor;
    } else {
      throw new Error('getTEARR requires a sensor or for a sensor to be currently selected.');
    }
  } // If sensor's observerGd is not set try to set it using it parameters


  if (typeof sensor.observerGd == 'undefined') {
    try {
      sensor.observerGd = {
        alt: sensor.alt,
        lat: sensor.lat,
        lon: sensor.lon
      };
    } catch (e) {
      throw 'observerGd is not set and could not be guessed.';
    } // If it didn't work, try again


    if (typeof sensor.observerGd.lon == 'undefined') {
      try {
        sensor.observerGd = {
          alt: sensor.alt,
          lat: sensor.lat * DEG2RAD,
          lon: sensor.lon * DEG2RAD
        };
      } catch (e) {
        throw 'observerGd is not set and could not be guessed.';
      }
    }
  } // Set default timing settings. These will be changed to find look angles at different times in future.


  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var now;

  if (typeof propTime != 'undefined') {
    now = propTime;
  } else {
    now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime();
  }

  var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
  now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

  j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
  var gmst = satellite.gstime(j);
  var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
  var positionEci = satellite.sgp4(satrec, m);

  try {
    var gpos = satellite.eciToGeodetic(positionEci.position, gmst);
    currentTEARR.alt = gpos.alt;
    currentTEARR.lon = gpos.lon;
    currentTEARR.lat = gpos.lat;
    var positionEcf = satellite.eciToEcf(positionEci.position, gmst);
    var lookAngles = satellite.ecfToLookAngles(sensor.observerGd, positionEcf);
    currentTEARR.az = lookAngles.az * RAD2DEG;
    currentTEARR.el = lookAngles.el * RAD2DEG;
    currentTEARR.rng = lookAngles.rng;
  } catch (e) {
    currentTEARR.alt = 0;
    currentTEARR.lon = 0;
    currentTEARR.lat = 0;
    currentTEARR.az = 0;
    currentTEARR.el = 0;
    currentTEARR.rng = 0;
  }

  currentTEARR.inview = satellite.checkIsInFOV(sensor, {
    az: currentTEARR.az,
    el: currentTEARR.el,
    rng: currentTEARR.rng
  });
  satellite.currentTEARR = currentTEARR;
  return currentTEARR;
};

satellite.nextpassList = satArray => {
  var nextPassArray = [];

  for (var s = 0; s < satArray.length; s++) {
    var time = satellite.nextNpasses(satArray[s], null, 1000 * 60 * 60 * 24, satellite.lookanglesInterval, settingsManager.nextNPassesCount); // Only do 1 day looks

    for (var i = 0; i < time.length; i++) {
      nextPassArray.push({
        SCC_NUM: satArray[s].SCC_NUM,
        time: time[i]
      });
    }
  }

  return nextPassArray;
};

satellite.nextpass = (sat, sensor, searchLength, interval) => {
  // If no sensor passed to function then try to use the 'currentSensor'
  if (typeof sensor == 'undefined') {
    if (typeof sensorManager.currentSensor == 'undefined') {
      throw 'getTEARR requires a sensor or for a sensor to be currently selected.';
    } else {
      sensor = sensorManager.currentSensor;
    }
  } // If sensor's observerGd is not set try to set it using it parameters


  if (typeof sensor.observerGd == 'undefined') {
    try {
      sensor.observerGd = {
        alt: sensor.alt,
        lat: sensor.lat,
        lon: sensor.lon
      };
    } catch (e) {
      throw 'observerGd is not set and could not be guessed.';
    }
  } // If length and interval not set try to use defaults


  if (typeof searchLength == 'undefined') searchLength = satellite.lookanglesLength;
  if (typeof interval == 'undefined') interval = satellite.lookanglesInterval;
  var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset();
  var propTempOffset = 0;
  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  for (var i = 0; i < searchLength * 24 * 60 * 60; i += interval) {
    // 5second Looks
    propTempOffset = i * 1000 + propOffset; // Offset in seconds (msec * 1000)

    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propTempOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
    var aer = satellite.getRae(now, satrec, sensor);
    var isInFOV = satellite.checkIsInFOV(sensor, aer);

    if (isInFOV) {
      return (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(now, 'isoDateTime', true);
    }
  }

  return 'No Passes in ' + satellite.lookanglesLength + ' Days';
};

satellite.nextNpasses = (sat, sensor, searchLength, interval, numPasses) => {
  // If no sensor passed to function then try to use the 'currentSensor'
  if (typeof sensor == 'undefined' || sensor == null) {
    if (typeof sensorManager.currentSensor == 'undefined') {
      throw 'getTEARR requires a sensor or for a sensor to be currently selected.';
    } else {
      sensor = sensorManager.currentSensor;
    }
  } // If sensor's observerGd is not set try to set it using it parameters


  if (typeof sensor.observerGd == 'undefined') {
    try {
      sensor.observerGd = {
        alt: sensor.alt,
        lat: sensor.lat,
        lon: sensor.lon
      };
    } catch (e) {
      throw 'observerGd is not set and could not be guessed.';
    }
  } // If length and interval not set try to use defaults


  searchLength = searchLength || satellite.lookanglesLength;
  interval = interval || satellite.lookanglesInterval;
  numPasses = numPasses || 1;
  var passTimesArray = [];
  var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset();
  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var orbitalPeriod = MINUTES_PER_DAY / (satrec.no * MINUTES_PER_DAY / TAU); // Seconds in a day divided by mean motion

  for (var i = 0; i < searchLength * 24 * 60 * 60; i += interval) {
    // 5second Looks
    // Only pass a maximum of N passes
    if (passTimesArray.length >= numPasses) {
      return passTimesArray;
    }

    var propTempOffset = i + propOffset; // Offset in seconds (msec * 1000)

    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propTempOffset * 1000, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
    var aer = satellite.getRae(now, satrec, sensor);
    var isInFOV = satellite.checkIsInFOV(sensor, aer);

    if (isInFOV) {
      passTimesArray.push(now);
      i = i + orbitalPeriod * 60 * 0.75; // Jump 3/4th to the next orbit
    }
  }

  return passTimesArray;
};

satellite.lastlooksArray = [];

satellite.getlookangles = sat => {
  // Error Checking
  if (!sensorManager.checkSensorSelected()) {
    console.warn('satellite.getlookangles requires a sensor to be set!');
    return;
  }

  var sensor = sensorManager.currentSensor; // Set default timing settings. These will be changed to find look angles at different times in future.

  var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset();
  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs
  // const orbitalPeriod = MINUTES_PER_DAY / ((satrec.no * MINUTES_PER_DAY) / TAU); // Seconds in a day divided by mean motion
  // Use custom interval unless doing rise/set lookangles - then use 1 second

  var lookanglesInterval = satellite.isRiseSetLookangles ? 1 : satellite.lookanglesInterval;
  var looksArray = [];

  for (var i = 0; i < satellite.lookanglesLength * 24 * 60 * 60; i += lookanglesInterval) {
    var propTempOffset = i * 1000 + propOffset; // Offset in seconds

    var looksPass = _propagate(propTempOffset, satrec, sensor, lookanglesInterval);

    if (looksPass !== false) {
      looksArray.push(looksPass); // Update the table with looks for this 5 second chunk and then increase table counter by 1
      // i = i + (orbitalPeriod * 60 * 0.75); // Jump 3/4th to the next orbit
    }

    if (looksArray.length >= 1500) {
      // Maximum of 1500 lines in the look angles table
      break; // No more updates to the table (Prevent GEO object slowdown)
    }
  }

  looksArray.sort(function (a, b) {
    return new Date(a.time) - new Date(b.time);
  });
  satellite.lastlooksArray = looksArray; // Populate the Side Menu

  (function _populateSideMenu() {
    var tbl = document.getElementById('looks'); // Identify the table to update

    tbl.innerHTML = ''; // Clear the table from old object data

    var tr = tbl.insertRow();
    var tdT = tr.insertCell();
    tdT.appendChild(document.createTextNode('Time'));
    tdT.setAttribute('style', 'text-decoration: underline');
    var tdE = tr.insertCell();
    tdE.appendChild(document.createTextNode('El'));
    tdE.setAttribute('style', 'text-decoration: underline');
    var tdA = tr.insertCell();
    tdA.appendChild(document.createTextNode('Az'));
    tdA.setAttribute('style', 'text-decoration: underline');
    var tdR = tr.insertCell();
    tdR.appendChild(document.createTextNode('Rng'));
    tdR.setAttribute('style', 'text-decoration: underline');

    for (var _i = 0; _i < looksArray.length; _i++) {
      var _tr = void 0;

      if (tbl.rows.length > 0) {
        // console.log(tbl.rows[0].cells[0].textContent);
        for (var r = 0; r < tbl.rows.length; r++) {
          var dateString = tbl.rows[r].cells[0].textContent;
          var sYear = parseInt(dateString.substr(0, 4)); // UTC Year

          var sMon = parseInt(dateString.substr(5, 2)) - 1; // UTC Month in MMM prior to converting

          var sDay = parseInt(dateString.substr(8, 2)); // UTC Day

          var sHour = parseInt(dateString.substr(11, 2)); // UTC Hour

          var sMin = parseInt(dateString.substr(14, 2)); // UTC Min

          var sSec = parseInt(dateString.substr(17, 2)); // UTC Sec

          var topTime = new Date(sYear, sMon, sDay, sHour, sMin, sSec); // New Date object of the future collision
          // Date object defaults to local time.

          topTime.setUTCDate(sDay); // Move to UTC day.

          topTime.setUTCHours(sHour); // Move to UTC Hour

          if (looksArray[_i].time < topTime) {
            _tr = tbl.insertRow(_i);
            break;
          }
        }
      }

      if (_tr == null) {
        _tr = tbl.insertRow();
      }

      var _tdT = _tr.insertCell();

      _tdT.appendChild(document.createTextNode((0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(looksArray[_i].time, 'isoDateTime', false))); // tdT.style.border = '1px solid black';


      var _tdE = _tr.insertCell();

      _tdE.appendChild(document.createTextNode(looksArray[_i].el.toFixed(1)));

      var _tdA = _tr.insertCell();

      _tdA.appendChild(document.createTextNode(looksArray[_i].az.toFixed(0)));

      var _tdR = _tr.insertCell();

      _tdR.appendChild(document.createTextNode(looksArray[_i].rng.toFixed(0)));
    }
  })();
};

satellite.lastMultiSiteArray = [];

satellite.getlookanglesMultiSite = sat => {
  var isResetToDefault = false;

  if (!sensorManager.checkSensorSelected()) {
    isResetToDefault = true;
  }

  var _propagateMultiSite = (offset, satrec, sensor) => {
    // Setup Realtime and Offset Time
    var propRealTimeTemp = Date.now();
    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(offset, propRealTimeTemp);
    var aer = satellite.getRae(now, satrec, sensor);
    var isInFOV = satellite.checkIsInFOV(sensor, aer);

    if (isInFOV) {
      return {
        time: now.toISOString(),
        el: aer.el,
        az: aer.az,
        rng: aer.rng,
        name: sensor.shortName
      };
    }

    return;
  }; // Save Current Sensor


  sensorManager.tempSensor = sensorManager.currentSensor; // Determine time offset from real time

  var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset(); // Get Satellite Info

  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var orbitalPeriod = MINUTES_PER_DAY / (satrec.no * MINUTES_PER_DAY / TAU); // Seconds in a day divided by mean motion
  // Calculate Look Angles

  var multiSiteArray = [];

  for (var sensorIndex = 0; sensorIndex < sensorManager.sensorListUS.length; sensorIndex++) {
    satellite.setobs(sensorManager.sensorListUS[sensorIndex]);

    for (var i = 0; i < satellite.lookanglesLength * 24 * 60 * 60; i += satellite.lookanglesInterval) {
      // 5second Looks
      var propTempOffset = i * 1000 + propOffset; // Offset in seconds

      var multiSitePass = _propagateMultiSite(propTempOffset, satrec, sensorManager.sensorListUS[sensorIndex]);

      if (typeof multiSitePass != 'undefined') {
        multiSiteArray.push(multiSitePass); // Update the table with looks for this 5 second chunk and then increase table counter by 1

        i = i + orbitalPeriod * 60 * 0.75; // Jump 3/4th to the next orbit
      }
    }
  }

  multiSiteArray.sort(function (a, b) {
    return new Date(a.time) - new Date(b.time);
  });
  satellite.lastMultiSiteArray = multiSiteArray; // Populate the Side Menu

  (function _populateSideMenu() {
    var tbl = document.getElementById('looksmultisite'); // Identify the table to update

    tbl.innerHTML = ''; // Clear the table from old object data

    var tr = tbl.insertRow();
    var tdT = tr.insertCell();
    tdT.appendChild(document.createTextNode('Time'));
    tdT.setAttribute('style', 'text-decoration: underline');
    var tdE = tr.insertCell();
    tdE.appendChild(document.createTextNode('El'));
    tdE.setAttribute('style', 'text-decoration: underline');
    var tdA = tr.insertCell();
    tdA.appendChild(document.createTextNode('Az'));
    tdA.setAttribute('style', 'text-decoration: underline');
    var tdR = tr.insertCell();
    tdR.appendChild(document.createTextNode('Rng'));
    tdR.setAttribute('style', 'text-decoration: underline');
    var tdS = tr.insertCell();
    tdS.appendChild(document.createTextNode('Sensor'));
    tdS.setAttribute('style', 'text-decoration: underline');

    for (var _i2 = 0; _i2 < multiSiteArray.length; _i2++) {
      var _tr2 = void 0;

      if (tbl.rows.length > 0) {
        // console.log(tbl.rows[0].cells[0].textContent);
        for (var r = 0; r < tbl.rows.length; r++) {
          var dateString = tbl.rows[r].cells[0].textContent;
          var sYear = parseInt(dateString.substr(0, 4)); // UTC Year

          var sMon = parseInt(dateString.substr(5, 2)) - 1; // UTC Month in MMM prior to converting

          var sDay = parseInt(dateString.substr(8, 2)); // UTC Day

          var sHour = parseInt(dateString.substr(11, 2)); // UTC Hour

          var sMin = parseInt(dateString.substr(14, 2)); // UTC Min

          var sSec = parseInt(dateString.substr(17, 2)); // UTC Sec

          var topTime = new Date(sYear, sMon, sDay, sHour, sMin, sSec); // New Date object of the future collision
          // Date object defaults to local time.

          topTime.setUTCDate(sDay); // Move to UTC day.

          topTime.setUTCHours(sHour); // Move to UTC Hour

          if (multiSiteArray[_i2].time < topTime) {
            _tr2 = tbl.insertRow(_i2);
            break;
          }
        }
      }

      if (_tr2 == null) {
        _tr2 = tbl.insertRow();
      }

      var _tdT2 = _tr2.insertCell();

      _tdT2.appendChild(document.createTextNode((0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(multiSiteArray[_i2].time, 'isoDateTime', true))); // tdT.style.border = '1px solid black';


      var _tdE2 = _tr2.insertCell();

      _tdE2.appendChild(document.createTextNode(multiSiteArray[_i2].el.toFixed(1)));

      var _tdA2 = _tr2.insertCell();

      _tdA2.appendChild(document.createTextNode(multiSiteArray[_i2].az.toFixed(0)));

      var _tdR2 = _tr2.insertCell();

      _tdR2.appendChild(document.createTextNode(multiSiteArray[_i2].rng.toFixed(0)));

      var _tdS = _tr2.insertCell();

      _tdS.appendChild(document.createTextNode(multiSiteArray[_i2].name));
    }
  })();

  if (isResetToDefault) {
    sensorManager.setCurrentSensor(sensorManager.defaultSensor);
  } else {
    sensorManager.setCurrentSensor(sensorManager.tempSensor);
  }
}; // satellite.satSensorFOV = (sat1, sat2) => {
//   // Set default timing settings. These will be changed to find look angles at different times in future.
//   let propOffset, propRealTimeTemp, now;
//   try {
//     propOffset = timeManager.getPropOffset() || 0;
//     propRealTimeTemp = Date.now();
//     now = timeManager.propTimeCheck(propOffset, propRealTimeTemp);
//   } catch {
//     now = new Date();
//   }
//   let _getEcf = (now, satrec) => {
//     let j = _jday(
//       now.getUTCFullYear(),
//       now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
//       now.getUTCDate(),
//       now.getUTCHours(),
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     ); // Converts time to jday (TLEs use epoch year/day)
//     j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
//     let gmst = satellite.gstime(j);
//     let m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
//     let positionEci = satellite.sgp4(satrec, m);
//     return satellite.eciToEcf(positionEci.position, gmst); // positionEci.position is called positionEci originally
//   };
//   // let satrec1 = satellite.twoline2satrec(sat1.TLE1, sat1.TLE2); // perform and store sat init calcs
//   // let sat1Ecf = _getEcf(now, satrec1);
//   // let satrec2 = satellite.twoline2satrec(sat2.TLE1, sat2.TLE2); // perform and store sat init calcs
//   // let sat2Ecf = _getEcf(now, satrec2);
//   // console.log(sat1Ecf);
//   // console.log(sat2Ecf);
//   // Find the ECI position of the Selected Satellite
//   /*
//   satSelPosX = satPos[satelliteSelected[snum] * 3];
//   satSelPosY = satPos[satelliteSelected[snum] * 3 + 1];
//   satSelPosZ = satPos[satelliteSelected[snum] * 3 + 2];
//   satSelPosEcf = { x: satSelPosX, y: satSelPosY, z: satSelPosZ };
//     satSelPos = satellite.ecfToEci(satSelPosEcf, gmst);
//     // Find the Lat/Long of the Selected Satellite
//     satSelGeodetic = satellite.eciToGeodetic(satSelPos, gmst); // pv.position is called positionEci originally
//     satalt = satSelGeodetic.alt;
//     satSelPosEarth = {
//         lon: satSelGeodetic.lon,
//         lat: satSelGeodetic.lat,
//         alt: 1,
//     };
//     deltaLatInt = 1;
//     if (satalt < 2500 && objectManager.selectedSatFOV <= 60)
//         deltaLatInt = 0.5;
//     if (satalt > 7000 || objectManager.selectedSatFOV >= 90)
//         deltaLatInt = 2;
//     if (satelliteSelected.length > 1) deltaLatInt = 2;
//     for (deltaLat = -60; deltaLat < 60; deltaLat += deltaLatInt) {
//         lat =
//             Math.max(
//                 Math.min(
//                     Math.round(satSelGeodetic.lat * RAD2DEG) +
//                         deltaLat,
//                     90
//                 ),
//                 -90
//             ) * DEG2RAD;
//         if (lat > 90) continue;
//         deltaLonInt = 1; // Math.max((Math.abs(lat)*RAD2DEG/15),1);
//         if (satalt < 2500 && objectManager.selectedSatFOV <= 60)
//             deltaLonInt = 0.5;
//         if (satalt > 7000 || objectManager.selectedSatFOV >= 90)
//             deltaLonInt = 2;
//         if (satelliteSelected.length > 1) deltaLonInt = 2;
//         for (deltaLon = 0; deltaLon < 181; deltaLon += deltaLonInt) {
//             // //////////
//             // Add Long
//             // //////////
//             long = satSelGeodetic.lon + deltaLon * DEG2RAD;
//             satSelPosEarth = { lon: long, lat: lat, alt: 15 };
//             // Find the Az/El of the position on the earth
//             lookangles = satellite.ecfToLookAngles(
//                 satSelPosEarth,
//                 satSelPosEcf
//             );
//             // az = lookangles.az;
//             el = lookangles.el;
//             // rng = lookangles.rng;
//             if (
//                 el * RAD2DEG > 0 &&
//                 90 - el * RAD2DEG < objectManager.selectedSatFOV
//             ) {
//                 satSelPosEarth = satellite.geodeticToEcf(satSelPosEarth);
//                 if (i === len) {
//                     console.error('Ran out of Markers');
//                     continue; // Only get so many markers.
//                 }
//                 satCache[i].active = true;
//                 satPos[i * 3] = satSelPosEarth.x;
//                 satPos[i * 3 + 1] = satSelPosEarth.y;
//                 satPos[i * 3 + 2] = satSelPosEarth.z;
//                 satVel[i * 3] = 0;
//                 satVel[i * 3 + 1] = 0;
//                 satVel[i * 3 + 2] = 0;
//                 i++;
//             }
//             // //////////
//             // Minus Long
//             // //////////
//             if (deltaLon === 0 || deltaLon === 180) continue; // Don't Draw Two Dots On the Center Line
//             long = satSelGeodetic.lon - deltaLon * DEG2RAD;
//             satSelPosEarth = { lon: long, lat: lat, alt: 15 };
//             // Find the Az/El of the position on the earth
//             lookangles = satellite.ecfToLookAngles(
//                 satSelPosEarth,
//                 satSelPosEcf
//             );
//             // az = lookangles.az;
//             el = lookangles.el;
//             // rng = lookangles.rng;
//             if (
//                 el * RAD2DEG > 0 &&
//                 90 - el * RAD2DEG < objectManager.selectedSatFOV
//             ) {
//                 satSelPosEarth = satellite.geodeticToEcf(satSelPosEarth);
//                 if (i === len) {
//                     console.error('Ran out of Markers');
//                     continue; // Only get so many markers.
//                 }
//                 satCache[i].active = true;
//                 satPos[i * 3] = satSelPosEarth.x;
//                 satPos[i * 3 + 1] = satSelPosEarth.y;
//                 satPos[i * 3 + 2] = satSelPosEarth.z;
//                 satVel[i * 3] = 0;
//                 satVel[i * 3 + 1] = 0;
//                 satVel[i * 3 + 2] = 0;
//                 i++;
//             }
//             if (lat === 90 || lat === -90) break; // One Dot for the Poles
//         }
//     }
//     */
//   return;
// };


satellite.findCloseObjects = () => {
  var searchRadius = 50; // km

  var csoList = [];
  var satList = []; // Short internal function to find the satellites position

  var _getSatPos = (propTempOffset, satrec) => {
    var now = new Date(); // Make a time variable

    now.setTime(Number(Date.now()) + propTempOffset); // Set the time variable to the time in the future

    var j = _jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


    j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY; // let gmst = satellite.gstime(j);

    var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
    return satellite.sgp4(satrec, m);
  }; // Loop through all the satellites


  for (var i = 0; i < satSet.numSats; i++) {
    // Get the satellite
    var sat = satSet.getSat(i); // Avoid unnecessary errors

    if (typeof sat.TLE1 == 'undefined') continue; // Only look at satellites in LEO

    if (sat.apogee > 5556) continue; // Find where the satellite is right now

    sat.position = _getSatPos(0, sat.satrec, sensorManager.currentSensor, satellite.lookanglesInterval).position; // If it fails, skip it

    if (typeof sat.position == 'undefined') continue; // Add the satellite to the list

    satList.push(sat);
  } // Loop through all the satellites with valid positions


  for (var _i3 = 0; _i3 < satList.length; _i3++) {
    var sat1 = satList[_i3];
    var pos1 = sat1.position; // Calculate the area around the satellite

    var posXmin = pos1.x - searchRadius;
    var posXmax = pos1.x + searchRadius;
    var posYmin = pos1.y - searchRadius;
    var posYmax = pos1.y + searchRadius;
    var posZmin = pos1.z - searchRadius;
    var posZmax = pos1.z + searchRadius; // Loop through the list again

    for (var j = 0; j < satList.length; j++) {
      // Get the second satellite
      var sat2 = satList[j]; // Skip the same satellite

      if (sat1 == sat2) continue; // Get the second satellite's position

      var pos2 = sat2.position; // Check to see if the second satellite is in the search area

      if (pos2.x < posXmax && pos2.x > posXmin && pos2.y < posYmax && pos2.y > posYmin && pos2.z < posZmax && pos2.z > posZmin) {
        // Add the second satellite to the list if it is close
        csoList.push({
          sat1: sat1,
          sat2: sat2
        });
      }
    }
  }

  var csoListUnique = Array.from(new Set(csoList));
  csoList = []; // Clear CSO List

  satList = []; // Clear CSO List
  // Loop through the possible CSOs

  for (var _i4 = 0; _i4 < csoListUnique.length; _i4++) {
    // Calculate the first CSO's position 30 minutes later
    var _sat = csoListUnique[_i4].sat1;

    var pos = _getSatPos(1000 * 60 * 30, _sat.satrec, sensorManager.currentSensor, satellite.lookanglesInterval);

    csoListUnique[_i4].sat1.position = pos.position; // Calculate the second CSO's position 30 minutes later

    _sat = csoListUnique[_i4].sat2;
    pos = _getSatPos(1000 * 60 * 30, _sat.satrec, sensorManager.currentSensor, satellite.lookanglesInterval);
    _sat.position = pos.position;
    csoListUnique[_i4].sat2.position = pos.position;
  } // Remove duplicates


  satList = Array.from(new Set(satList)); // Loop through the CSOs

  for (var _i5 = 0; _i5 < csoListUnique.length; _i5++) {
    // Check the first CSO
    var _sat2 = csoListUnique[_i5].sat1;
    var _pos = _sat2.position;
    if (typeof _pos == 'undefined') continue; // Calculate the area around the CSO

    var _posXmin = _pos.x - searchRadius;

    var _posXmax = _pos.x + searchRadius;

    var _posYmin = _pos.y - searchRadius;

    var _posYmax = _pos.y + searchRadius;

    var _posZmin = _pos.z - searchRadius;

    var _posZmax = _pos.z + searchRadius; // Get the second CSO object


    var _sat3 = csoListUnique[_i5].sat2;
    var _pos2 = _sat3.position;
    if (typeof _pos2 == 'undefined') continue; // If it is still in the search area, add it to the list

    if (_pos2.x < _posXmax && _pos2.x > _posXmin && _pos2.y < _posYmax && _pos2.y > _posYmin && _pos2.z < _posZmax && _pos2.z > _posZmin) {
      csoList.push(_sat2.SCC_NUM);
      csoList.push(_sat3.SCC_NUM);
    }
  } // Generate the search string


  csoListUnique = Array.from(new Set(csoList));
  var searchStr = '';

  for (var _i6 = 0; _i6 < csoListUnique.length; _i6++) {
    if (_i6 == csoListUnique.length - 1) {
      searchStr += csoListUnique[_i6];
    } else {
      searchStr += csoListUnique[_i6] + ',';
    }
  }

  return searchStr; // csoListUnique;
}; // TODO: satellite.getOrbitByLatLon needs cleaned up badly


satellite.getOrbitByLatLon = (sat, goalLat, goalLon, upOrDown, propOffset, goalAlt, rascOffset) => {
  var mainTLE1;
  var mainTLE2;
  var mainMeana;
  var mainRasc;
  var mainArgPer;
  var argPerCalcResults;
  var meanACalcResults; // var meanAiValue;

  var lastLat;
  var isUpOrDown;
  var i;
  if (typeof rascOffset == 'undefined') rascOffset = 0;

  var argPerCalc = argPe => {
    var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

    var meana;

    if (typeof mainMeana == 'undefined') {
      meana = (satrec.mo * RAD2DEG).toPrecision(10);
    } else {
      meana = mainMeana;
    }

    meana = meana.split('.');
    meana[0] = meana[0].substr(-3, 3);
    meana[1] = meana[1].substr(0, 4);
    meana = (meana[0] + '.' + meana[1]).toString();
    meana = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(meana, 8);
    var rasc;

    if (typeof mainRasc == 'undefined') {
      rasc = (sat.raan * RAD2DEG).toPrecision(7);
    } else {
      rasc = mainRasc;
    }

    rasc = rasc.split('.');
    rasc[0] = rasc[0].substr(-3, 3);
    rasc[1] = rasc[1].substr(0, 4);
    rasc = (rasc[0] + '.' + rasc[1]).toString();
    rasc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(rasc, 8);
    mainRasc = rasc;
    var scc = sat.SCC_NUM;
    var intl = sat.TLE1.substr(9, 8);
    var inc = (sat.inclination * RAD2DEG).toPrecision(7);
    inc = inc.split('.');
    inc[0] = inc[0].substr(-3, 3);
    inc[1] = inc[1].substr(0, 4);
    inc = (inc[0] + '.' + inc[1]).toString();
    inc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(inc, 8);
    var epochyr = sat.TLE1.substr(18, 2);
    var epochday = sat.TLE1.substr(20, 12);
    var meanmo = sat.TLE2.substr(52, 11);
    var ecen = sat.eccentricity.toPrecision(7).substr(2, 7);
    argPe = argPe / 10;
    argPe = parseFloat(argPe).toPrecision(7);
    argPe = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(argPe, 8);
    var TLE1Ending = sat.TLE1.substr(32, 39);
    mainTLE1 = '1 ' + scc + 'U ' + intl + ' ' + epochyr + epochday + TLE1Ending; // M' and M'' are both set to 0 to put the object in a perfect stable orbit

    mainTLE2 = '2 ' + scc + ' ' + inc + ' ' + rasc + ' ' + ecen + ' ' + argPe + ' ' + meana + ' ' + meanmo + '    10';
    satrec = satellite.twoline2satrec(mainTLE1, mainTLE2);
    var propNewArgPe = getOrbitByLatLonPropagate(propOffset, satrec, 3); // if (propNewArgPe === 1) {

    sat.TLE1 = mainTLE1;
    sat.TLE2 = mainTLE2;
    mainArgPer = argPe; // }
    // 1 === If RASC within 0.15 degrees then good enough
    // 5 === If RASC outside 15 degrees then rotate RASC faster

    return propNewArgPe;
  };

  var meanaCalc = meana => {
    var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

    meana = meana / 10;
    meana = parseFloat(meana).toPrecision(7);
    meana = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(meana, 8);
    var rasc = (sat.raan * RAD2DEG).toPrecision(7);
    mainRasc = rasc;
    rasc = rasc.toString().split('.');
    rasc[0] = rasc[0].substr(-3, 3);
    rasc[1] = rasc[1].substr(0, 4);
    rasc = (rasc[0] + '.' + rasc[1]).toString();
    rasc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(rasc, 8);
    var scc = sat.SCC_NUM;
    var intl = sat.TLE1.substr(9, 8);
    var inc = (sat.inclination * RAD2DEG).toPrecision(7);
    inc = inc.split('.');
    inc[0] = inc[0].substr(-3, 3);
    inc[1] = inc[1].substr(0, 4);
    inc = (inc[0] + '.' + inc[1]).toString();
    inc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(inc, 8);
    var epochyr = sat.TLE1.substr(18, 2);
    var epochday = sat.TLE1.substr(20, 12);
    var meanmo = sat.TLE2.substr(52, 11);
    var ecen = sat.eccentricity.toPrecision(7).substr(2, 7);
    var argPe;

    if (typeof mainArgPer == 'undefined') {
      argPe = (sat.argPe * RAD2DEG).toPrecision(7);
    } else {
      argPe = mainArgPer;
    }

    argPe = argPe.split('.');
    argPe[0] = argPe[0].substr(-3, 3);
    argPe[1] = argPe[1].substr(0, 4);
    argPe = (argPe[0] + '.' + argPe[1]).toString();
    argPe = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(argPe, 8);
    var TLE1Ending = sat.TLE1.substr(32, 39);
    var TLE1 = '1 ' + scc + 'U ' + intl + ' ' + epochyr + epochday + TLE1Ending; // M' and M'' are both set to 0 to put the object in a perfect stable orbit

    var TLE2 = '2 ' + scc + ' ' + inc + ' ' + rasc + ' ' + ecen + ' ' + argPe + ' ' + meana + ' ' + meanmo + '    10';
    satrec = satellite.twoline2satrec(TLE1, TLE2);
    var propagateResults = getOrbitByLatLonPropagate(propOffset, satrec, 1);

    if (propagateResults === 1) {
      mainTLE1 = TLE1;
      mainTLE2 = TLE2;
      sat.TLE1 = TLE1;
      sat.TLE2 = TLE2;
      mainMeana = meana;
    }

    return propagateResults;
  };

  var rascCalc = (rasc, rascOffset) => {
    var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

    var meana = mainMeana;
    var rascNum = rasc;
    rasc = rasc / 100;

    if (rasc > 360) {
      rasc = rasc - 360; // angle can't be bigger than 360
    }

    rasc = rasc.toPrecision(7);
    rasc = rasc.split('.');
    rasc[0] = rasc[0].substr(-3, 3);
    rasc[1] = rasc[1].substr(0, 4);
    rasc = (rasc[0] + '.' + rasc[1]).toString();
    rasc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(rasc, 8);
    mainRasc = rasc;
    var scc = sat.SCC_NUM;
    var intl = sat.TLE1.substr(9, 8);
    var inc = (sat.inclination * RAD2DEG).toPrecision(7);
    inc = inc.split('.');
    inc[0] = inc[0].substr(-3, 3);
    inc[1] = inc[1].substr(0, 4);
    inc = (inc[0] + '.' + inc[1]).toString();
    inc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(inc, 8);
    var epochyr = sat.TLE1.substr(18, 2);
    var epochday = sat.TLE1.substr(20, 12);
    var meanmo = sat.TLE2.substr(52, 11);
    var ecen = sat.eccentricity.toPrecision(7).substr(2, 7);
    var argPe;

    if (typeof mainArgPer == 'undefined') {
      argPe = (sat.argPe * RAD2DEG).toPrecision(7);
    } else {
      argPe = mainArgPer;
    }

    argPe = argPe.split('.');
    argPe[0] = argPe[0].substr(-3, 3);
    argPe[1] = argPe[1].substr(0, 4);
    argPe = (argPe[0] + '.' + argPe[1]).toString();
    argPe = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(argPe, 8);
    var TLE1Ending = sat.TLE1.substr(32, 39);
    mainTLE1 = '1 ' + scc + 'U ' + intl + ' ' + epochyr + epochday + TLE1Ending; // M' and M'' are both set to 0 to put the object in a perfect stable orbit

    mainTLE2 = '2 ' + scc + ' ' + inc + ' ' + rasc + ' ' + ecen + ' ' + argPe + ' ' + meana + ' ' + meanmo + '    10';
    satrec = satellite.twoline2satrec(mainTLE1, mainTLE2);
    var propNewRasc = getOrbitByLatLonPropagate(propOffset, satrec, 2);

    if (propNewRasc === 1) {
      sat.TLE1 = mainTLE1;
      rasc = rascNum / 100 + rascOffset;

      if (rasc > 360) {
        rasc = rasc - 360; // angle can't be bigger than 360 with offset
      }

      if (rasc < 0) {
        rasc = rasc + 360; // angle can't be less than 360 with offset
      }

      rasc = rasc.toPrecision(7);
      rasc = rasc.split('.');
      rasc[0] = rasc[0].substr(-3, 3);
      rasc[1] = rasc[1].substr(0, 4);
      rasc = (rasc[0] + '.' + rasc[1]).toString();
      rasc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.pad0(rasc, 8);
      mainRasc = rasc;
      mainTLE2 = '2 ' + scc + ' ' + inc + ' ' + rasc + ' ' + ecen + ' ' + argPe + ' ' + meana + ' ' + meanmo + '    10';
      sat.TLE2 = mainTLE2;
    } // 1 === If RASC within 0.15 degrees then good enough
    // 5 === If RASC outside 15 degrees then rotate RASC faster


    return propNewRasc;
  };

  var getOrbitByLatLonPropagate = (propOffset, satrec, type) => {
    _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime = Date.now();
    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
    var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

    j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
    var gmst = satellite.gstime(j);
    var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
    var positionEci = satellite.sgp4(satrec, m);

    if (typeof positionEci == 'undefined') {
      console.log(satrec);
    }

    var gpos, lat, lon, alt;

    try {
      gpos = satellite.eciToGeodetic(positionEci.position, gmst);
    } catch (err) {
      console.warn(err);
      return 2;
    }

    lat = satellite.degreesLat(gpos.lat) * 1;
    lon = satellite.degreesLong(gpos.lon) * 1;
    alt = gpos.alt;

    if (lastLat == null) {
      // Set it the first time
      lastLat = lat;
    }

    if (type === 1) {
      if (lat === lastLat) {
        return 0; // Not enough movement, skip this
      }

      if (lat > lastLat) {
        isUpOrDown = 'N';
      }

      if (lat < lastLat) {
        isUpOrDown = 'S';
      }

      lastLat = lat;
    }

    if (lat > goalLat - 0.15 && lat < goalLat + 0.15 && type === 1) {
      // console.log('Lat: ' + lat);
      return 1;
    }

    if (lon > goalLon - 0.15 && lon < goalLon + 0.15 && type === 2) {
      // console.log('Lon: ' + lon);
      return 1;
    }

    if (alt > goalAlt - 30 && alt < goalAlt + 30 && type === 3) {
      return 1;
    } // If current latitude greater than 11 degrees off rotate meanA faster


    if (!(lat > goalLat - 11 && lat < goalLat + 11) && type === 1) {
      // console.log('Lat: ' + lat);
      return 5;
    } // If current longitude greater than 11 degrees off rotate RASC faster


    if (!(lon > goalLon - 11 && lon < goalLon + 11) && type === 2) {
      return 5;
    } // If current altitude greater than 100 km off rotate augPerigee faster


    if ((alt < goalAlt - 100 || alt > goalAlt + 100) && type === 3) {
      // console.log('Lat: ' + lat);
      // console.log('Alt: ' + alt + ' --- MeanMo: ' + satrec.mo * RAD2DEG + ' --- ArgPer: ' + satrec.argpo * RAD2DEG);
      return 5;
    }

    return 0;
  }; // ===== Mean Anomaly Loop =====


  for (i = 0; i < 520 * 10; i += 1) {
    /** Rotate Mean Anomaly 0.1 Degree at a Time for Up To 400 Degrees */
    meanACalcResults = meanaCalc(i);

    if (meanACalcResults === 1) {
      if (isUpOrDown !== upOrDown) {
        // If Object is moving opposite of the goal direction (upOrDown)
        i = i + 20; // Move 2 Degrees ahead in the orbit to prevent being close on the next lattiude check
      } else {
        // meanAiValue = i;
        break; // Stop changing the Mean Anomaly
      }
    }

    if (meanACalcResults === 5) {
      i += 10 * 10; // Change meanA faster
    }
  }

  if (meanACalcResults === 2) {
    console.warn("meanACalcResults failed after trying all combinations!");
    return ['Error', ''];
  } // Don't Bother Unless Specifically Requested
  // Applies to eccentric orbits
  // ===== Argument of Perigee Loop =====


  if (typeof goalAlt != 'undefined' && goalAlt !== 0) {
    meanACalcResults = 0; // Reset meanACalcResults

    for (i = 0; i < 360 * 10; i += 1) {
      /** Rotate ArgPer 0.1 Degree at a Time for Up To 400 Degrees */
      argPerCalcResults = argPerCalc(i);

      if (argPerCalcResults === 1) {
        // console.log('Found Correct Alt');
        if (meanACalcResults === 1) {
          // console.log('Found Correct Lat');
          // console.log('Up Or Down: ' + upOrDown);
          if (isUpOrDown === upOrDown) {
            // If Object is moving in the goal direction (upOrDown)
            break; // Stop changing ArgPer
          }
        } else {// console.log('Found Wrong Lat');
        }
      } else {// console.log('Failed Arg of Per Calc');
      }

      if (argPerCalcResults === 5) {
        i += 5 * 10; // Change ArgPer faster
      }

      if (argPerCalcResults === 2) {
        return ['Error', ''];
      } // ===== Mean Anomaly Loop =====


      for (var j = 0; j < 520 * 10; j += 1) {
        /** Rotate Mean Anomaly 0.1 Degree at a Time for Up To 400 Degrees */
        meanACalcResults = meanaCalc(j);

        if (meanACalcResults === 1) {
          if (isUpOrDown !== upOrDown) {
            // If Object is moving opposite of the goal direction (upOrDown)
            j = j + 20; // Move 2 Degrees ahead in the orbit to prevent being close on the next lattiude check
          } else {
            break; // Stop changing the Mean Anomaly
          }
        }

        if (meanACalcResults === 5) {
          j += 10 * 10; // Change meanA faster
        }

        if (meanACalcResults === 2) {
          return ['Error', ''];
        }
      }
    }
  } // ===== Right Ascension Loop =====


  for (i = 0; i < 5200 * 100; i += 1) {
    // 520 degress in 0.01 increments TODO More precise?
    var rascCalcResults = rascCalc(i, rascOffset);

    if (rascCalcResults === 1) {
      break;
    }

    if (rascCalcResults === 5) {
      i += 10 * 100;
    }
  }

  return [mainTLE1, mainTLE2];
};

satellite.calculateLookAngles = (sat, sensor, propOffset) => {
  (function _inputValidation() {
    // Check if there is a sensor
    if (typeof sensor == 'undefined') {
      // Try using the current sensor if there is one
      if (sensorManager.checkSensorSelected()) {
        sensor = sensorManager.currentSensor;
      } else {
        console.error('getlookangles2 requires a sensor!');
        return;
      } // Simple Error Checking

    } else {
      if (typeof sensor.obsminaz == 'undefined') {
        console.error('sensor format incorrect');
        return;
      }

      sensor.observerGd = {
        // Array to calculate look angles in propagate()
        lat: sensor.lat * DEG2RAD,
        lon: sensor.lon * DEG2RAD,
        alt: parseFloat(sensor.alt)
      };
    }

    if (typeof sat == 'undefined') {
      console.error('sat parameter required!');
    } else {
      if (typeof sat.TLE1 == 'undefined' || typeof sat.TLE2 == 'undefined') {
        console.error('sat parameter invalid format!');
      }
    }

    if (typeof propOffset == 'undefined') {
      propOffset = 0;
    }

    if (typeof satellite.isRiseSetLookangles == 'undefined') {
      satellite.isRiseSetLookangles = false;
    }
  })(); // Set default timing settings. These will be changed to find look angles at different times in future.


  if (typeof propOffset == 'undefined') propOffset = 0; // Could be used for changing the time start

  var propTempOffset = 0; // offset letting us propagate in the future (or past)

  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var lookanglesTable = []; // Iniially no rows to the table

  var tempLookanglesInterval;

  if (satellite.isRiseSetLookangles) {
    tempLookanglesInterval = satellite.lookanglesInterval;
    satellite.lookanglesInterval = 1;
  }

  for (var i = 0; i < satellite.lookanglesLength * 24 * 60 * 60; i += satellite.lookanglesInterval) {
    // satellite.lookanglesInterval in seconds
    propTempOffset = i * 1000 + propOffset; // Offset in seconds (msec * 1000)

    if (lookanglesTable.length <= 5000) {
      // Maximum of 1500 lines in the look angles table
      var lookanglesRow = _propagate(propTempOffset, satrec, sensor, satellite.lookanglesInterval);

      if (lookanglesRow == false) {
        lookanglesTable.push(lookanglesRow); // Update the table with looks for this 5 second chunk and then increase table counter by 1
      }
    }
  }

  if (satellite.isRiseSetLookangles) {
    satellite.lookanglesInterval = tempLookanglesInterval;
  }

  return lookanglesTable;
};

satellite.findBestPasses = (sats, sensor) => {
  sats = sats.replace(' ', ',');
  var satArray = sats.split(',');
  var tableSatTimes = [];

  for (var i = 0; i < satArray.length; i++) {
    try {
      var satId = satArray[i];
      if (typeof satId == 'undefined' || satId == null || satId == '' || satId == ' ') continue;
      var sat = satSet.getSatFromObjNum(parseInt(satId));
      var satPasses = satellite.findBestPass(sat, sensor, 0);

      for (var s = 0; s < satPasses.length; s++) {
        tableSatTimes.push(satPasses[s]); // }
      }
    } catch (e) {
      console.warn(e);
    }
  }

  var sortedTableSatTimes = tableSatTimes.sort((a, b) => b.sortTime - a.sortTime);
  sortedTableSatTimes.reverse();
  sortedTableSatTimes.forEach(function (v) {
    delete v.sortTime;
  });

  for (var _i7 = 0; _i7 < sortedTableSatTimes.length; _i7++) {
    sortedTableSatTimes[_i7].startDate = sortedTableSatTimes[_i7].startDate.toISOString().split('T')[0];
    sortedTableSatTimes[_i7].startTime = sortedTableSatTimes[_i7].startTime.toISOString().split('T')[1].split('.')[0];
    sortedTableSatTimes[_i7].stopDate = sortedTableSatTimes[_i7].stopDate.toISOString().split('T')[0];
    sortedTableSatTimes[_i7].stopTime = sortedTableSatTimes[_i7].stopTime.toISOString().split('T')[1].split('.')[0];
  }

  (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_2__.saveCsv)(sortedTableSatTimes, 'bestSatTimes');
};

satellite.findBestPass = (sat, sensor, propOffset) => {
  (function _inputValidation() {
    // Check if there is a sensor
    if (typeof sensor == 'undefined') {
      // Try using the current sensor if there is one
      if (sensorManager.checkSensorSelected()) {
        sensor = sensorManager.currentSensor;
      } else {
        console.error('findBestPass requires a sensor!');
        return;
      } // Simple Error Checking

    } else {
      if (typeof sensor.obsminaz == 'undefined') {
        console.error('sensor format incorrect');
        return;
      }

      sensor.observerGd = {
        // Array to calculate look angles in propagate()
        lat: sensor.lat * DEG2RAD,
        lon: sensor.lon * DEG2RAD,
        alt: parseFloat(sensor.alt)
      };
    }

    if (typeof sat == 'undefined') {
      console.error('sat parameter required!');
    } else {
      if (typeof sat.TLE1 == 'undefined' || typeof sat.TLE2 == 'undefined') {
        console.error('sat parameter invalid format!');
      }
    }
  })(); // Set default timing settings. These will be changed to find look angles at different times in future.


  if (typeof propOffset == 'undefined') propOffset = 0; // Could be used for changing the time start

  var propTempOffset = 0; // offset letting us propagate in the future (or past)

  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var lookanglesTable = []; // Iniially no rows to the table

  var looksInterval = 5;
  var looksLength = 7; // Setup flags for passes

  var score = 0;
  var sAz = null;
  var sEl = null;
  var srng = null;
  var sTime = null;
  var passMinrng = sensor.obsmaxrange; // This is set each look to find minimum rng (start at max rng)

  var passMaxEl = 0;
  var start3 = false;
  var stop3 = false;
  var orbitalPeriod = MINUTES_PER_DAY / (satrec.no * MINUTES_PER_DAY / TAU); // Seconds in a day divided by mean motion

  var _propagateBestPass = (propTempOffset, satrec) => {
    var now = new Date(); // Make a time variable

    now.setTime(Number(Date.now()) + propTempOffset); // Set the time variable to the time in the future

    var aer = satellite.getRae(now, satrec, sensor);
    var isInFOV = satellite.checkIsInFOV(sensor, aer);

    if (isInFOV) {
      // Previous Pass to Calculate first line of coverage
      var now1 = new Date();
      now1.setTime(Number(Date.now()) + propTempOffset - looksInterval * 1000);
      var aer1 = satellite.getRae(now1, satrec, sensor);
      var isInFOV1 = satellite.checkIsInFOV(sensor, aer1);

      if (!isInFOV1) {
        // if it starts around 3
        if (aer.el <= 3.5) {
          start3 = true;
        } // First Line of Coverage


        sTime = now;
        sAz = aer.az.toFixed(0);
        sEl = aer.el.toFixed(1);
        srng = aer.rng.toFixed(0);
      } else {
        // Next Pass to Calculate Last line of coverage
        now1.setTime(Number(Date.now()) + propTempOffset + looksInterval * 1000);
        aer1 = satellite.getRae(now1, satrec, sensor);
        isInFOV1 = satellite.checkIsInFOV(sensor, aer1);

        if (!isInFOV1) {
          // if it stops around 3
          stop3 = aer.el <= 3.5;
          score = Math.min((now - sTime) / 1000 / 60 * 10 / 8, 10); // 8 minute pass is max score

          var elScore = Math.min(passMaxEl / 50 * 10, 10); // 50 el or above is max score
          // elScore -= Math.max((passMaxEl - 50) / 5, 0); // subtract points for being over 50 el

          elScore *= start3 && stop3 ? 2 : 1; // Double points for start and stop at 3

          score += elScore;
          score += Math.min(10 * 750 / passMinrng, 10); // 750 or less is max score
          // score -= Math.max((750 - passMinrng) / 10, 0); // subtract points for being closer than 750

          var tic = 0;

          try {
            tic = (now - sTime) / 1000;
          } catch (e) {
            tic = 0;
          } // Skip pass if satellite is in track right now


          if (sTime == null) return; // Last Line of Coverage

          return {
            sortTime: sTime,
            scc: satrec.satnum,
            score: score,
            startDate: sTime,
            startTime: sTime,
            startAz: sAz,
            startEl: sEl,
            startrng: srng,
            stopDate: now,
            stopTime: now,
            stopAz: aer.az.toFixed(0),
            stopEl: aer.el.toFixed(1),
            stoprng: aer.rng.toFixed(0),
            tic: tic,
            minrng: passMinrng.toFixed(0),
            passMaxEl: passMaxEl.toFixed(1)
          };
        }
      } // Do this for any pass in coverage


      if (passMaxEl < aer.el) passMaxEl = aer.el;
      if (passMinrng > aer.rng) passMinrng = aer.rng;
    }

    return;
  };

  for (var i = 0; i < looksLength * 24 * 60 * 60; i += looksInterval) {
    // satellite.lookanglesInterval in seconds
    propTempOffset = i * 1000 + propOffset; // Offset in seconds (msec * 1000)

    if (lookanglesTable.length <= 5000) {
      // Maximum of 1500 lines in the look angles table
      var lookanglesRow = _propagateBestPass(propTempOffset, satrec); // If data came back...


      if (typeof lookanglesRow != 'undefined') {
        lookanglesTable.push(lookanglesRow); // Update the table with looks for this 5 second chunk and then increase table counter by 1
        // Reset flags for next pass

        score = 0;
        sAz = null;
        sEl = null;
        srng = null;
        sTime = null;
        passMinrng = sensor.obsmaxrange; // This is set each look to find minimum rng

        passMaxEl = 0;
        start3 = false;
        stop3 = false;
        i = i + orbitalPeriod * 60 * 0.75; // Jump 3/4th to the next orbit
      }
    }
  }

  return lookanglesTable;
}; // IDEA: standardize use of az, el, and rng (whatever satellite.js uses)


satellite.getRae = (now, satrec, sensor) => {
  var j = _jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
  now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


  j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
  var gmst = satellite.gstime(j);
  var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
  var positionEci = satellite.sgp4(satrec, m);

  if (typeof positionEci == 'undefined' || positionEci == null) {
    console.debug('positionEci failed in satellite.getRae()');
    return {
      az: 0,
      el: 0,
      rng: 0
    };
  }

  var positionEcf = satellite.eciToEcf(positionEci.position, gmst); // positionEci.position is called positionEci originally

  var lookAngles = satellite.ecfToLookAngles(sensor.observerGd, positionEcf);
  var az = lookAngles.az * RAD2DEG;
  var el = lookAngles.el * RAD2DEG;
  var rng = lookAngles.rng;
  return {
    az: az,
    el: el,
    rng: rng
  };
};

satellite.genMlData = {};
/* istanbul ignore next */

satellite.genMlData.eci2inc = (start, stop) => {
  var startTime = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime();
  var trainData = [];
  var trainTarget = [];
  var testData = [];
  var testTarget = [];
  var satEciData = []; //   let propLength = 1000 * 60 * 1440; //ms

  var satData = satSet.getSatData();
  var tt = 0;
  var badSat = false;

  for (var s = start; s < stop; s++) {
    if (satData[s].static) break;
    satEciData = []; // console.log(satData[s].SCC_NUM);

    for (var i = 0; i < 3; i++) {
      satEciData[i] = [];
      var now = new Date(startTime * 1 + 1000 * 60 * 2 * s * i);

      var j = _jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
      now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


      j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY; //   let gmst = satellite.gstime(j);

      var satrec = satellite.twoline2satrec(satData[s].TLE1, satData[s].TLE2); // perform and store sat init calcs

      var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
      var positionEci = satellite.sgp4(satrec, m);

      try {
        satEciData[i].push(now * 1, positionEci.position.x, positionEci.position.y, positionEci.position.z, positionEci.velocity.x, positionEci.velocity.y, positionEci.velocity.z);
      } catch (e) {
        badSat = true;
        break;
      }
    }

    if (badSat) {
      badSat = false;
      continue;
    }

    if (tt == 5) {
      tt = 0;
      testData.push(satEciData);
      testTarget.push([satData[s].inclination * RAD2DEG, satData[s].raan * RAD2DEG, satData[s].eccentricity, satData[s].argPe * RAD2DEG, satData[s].meanMotion]);
    } else {
      trainData.push(satEciData);
      trainTarget.push([satData[s].inclination * RAD2DEG, satData[s].raan * RAD2DEG, satData[s].eccentricity, satData[s].argPe * RAD2DEG, satData[s].meanMotion]);
    }

    tt++;
  }

  console.log(trainData.length);
  console.log(trainTarget.length);
  console.log(testData.length);
  console.log(testTarget.length);
  (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_2__.saveVariable)(trainData, 'train-data.json');
  (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_2__.saveVariable)(trainTarget, 'train-target.json');
  (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_2__.saveVariable)(testData, 'test-data.json');
  (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_2__.saveVariable)(testTarget, 'test-target.json');
};
/* istanbul ignore next */


satellite.genMlData.tlePredict = (start, stop) => {
  var startTime = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime();
  var satEciDataArray = [];
  var satEciData = []; //   let propLength = 1000 * 60 * 1440; //ms

  var satData = satSet.getSatData(); //   let tt = 0;

  var badSat = false;

  for (var s = start; s < stop; s++) {
    if (satData[s].static) break;
    satEciData = []; // console.log(satData[s].SCC_NUM);

    for (var i = 0; i < 3; i++) {
      satEciData[i] = [];
      var now = new Date(startTime * 1 + 1000 * 10 * i);

      var j = _jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
      now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


      j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY; //   let gmst = satellite.gstime(j);

      var satrec = satellite.twoline2satrec(satData[s].TLE1, satData[s].TLE2); // perform and store sat init calcs

      var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
      var positionEci = satellite.sgp4(satrec, m);

      try {
        satEciData[i].push(now * 1, positionEci.position.x, positionEci.position.y, positionEci.position.z, positionEci.velocity.x, positionEci.velocity.y, positionEci.velocity.z);
      } catch (e) {
        badSat = true;
        break;
      }
    }

    if (badSat) {
      badSat = false;
      continue;
    }

    satEciDataArray.push(satEciData);
  }

  console.log(satEciDataArray.length);
  (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_2__.saveVariable)(satEciDataArray, 'metObs.json');
};

satellite.eci2Rae = (now, eci, sensor) => {
  now = new Date(now);

  var j = _jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
  now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


  j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
  var gmst = satellite.gstime(j);
  var positionEcf = satellite.eciToEcf(eci.position, gmst); // positionEci.position is called positionEci originally

  var lookAngles = satellite.ecfToLookAngles(sensor.observerGd, positionEcf);
  var az = lookAngles.az * RAD2DEG;
  var el = lookAngles.el * RAD2DEG;
  var rng = lookAngles.rng;
  return {
    az: az,
    el: el,
    rng: rng
  };
};

satellite.getEci = (sat, propTime) => {
  var j = _jday(propTime.getUTCFullYear(), propTime.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
  propTime.getUTCDate(), propTime.getUTCHours(), propTime.getUTCMinutes(), propTime.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


  j += propTime.getUTCMilliseconds() * MILLISECONDS_PER_DAY; // let gmst = satellite.gstime(j);

  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
  return satellite.sgp4(satrec, m);
};

satellite.findNearbyObjectsByOrbit = sat => {
  if (typeof sat == 'undefined' || sat == null) return;
  var catalog = satSet.getSatData();
  var possibleMatches = [];
  var maxPeriod = sat.period * 1.05;
  var minPeriod = sat.period * 0.95;
  var maxInclination = sat.inclination * 1.025;
  var minInclination = sat.inclination * 0.975;
  var maxRaan = sat.raan * 1.025;
  var minRaan = sat.raan * 0.975;

  for (var ss = 0; ss < catalog.length; ss++) {
    var sat2 = catalog[ss];
    if (sat2.static) break;
    if (sat2.period > maxPeriod || sat2.period < minPeriod) continue;
    if (sat2.inclination > maxInclination || sat2.inclination < minInclination) continue;
    if (sat2.raan > maxRaan || sat2.raan < minRaan) continue;
    possibleMatches.push(sat2.id);
  }

  return possibleMatches;
};

satellite.findClosestApproachTime = (sat1, sat2, propOffset, propLength) => {
  var distArray = {};
  if (typeof propLength == 'undefined') propLength = 1440 * 60; // 1 Day

  var minDistance = 1000000;

  for (var t = 0; t < propLength; t++) {
    var propTempOffset = propOffset + t * 1000;
    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propTempOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
    var sat1Pos = satellite.getEci(sat1, now);
    var sat2Pos = satellite.getEci(sat2, now);
    var distance = Math.sqrt((sat1Pos.position.x - sat2Pos.position.x) ** 2 + (sat1Pos.position.y - sat2Pos.position.y) ** 2 + (sat1Pos.position.z - sat2Pos.position.z) ** 2);

    if (distance < minDistance) {
      minDistance = distance;
      distArray = {
        time: now,
        propOffset: propOffset + t * 1000,
        dist: distance,
        velX: sat1Pos.velocity.x - sat2Pos.velocity.x,
        velY: sat1Pos.velocity.y - sat2Pos.velocity.y,
        velZ: sat1Pos.velocity.z - sat2Pos.velocity.z
      };
    }
  } // Go to closest approach time
  // timeManager.propOffset = distArray.propOffset;
  // satCruncher.postMessage({
  //     // Tell satCruncher we have changed times for orbit calculations
  //     typ: 'offset',
  //     dat:
  //         timeManager.propOffset.toString() +
  //         ' ' +
  //         (1.0).toString(),
  // });
  // timeManager.propRealTime = Date.now(); // Reset realtime...this might not be necessary...
  // timeManager.propTime();


  return distArray;
};

satellite.createManeuverAnalyst = (satId, incVariation, meanmoVariation, rascVariation) => {
  // TODO This needs rewrote from scratch to bypass the satcruncher
  var mainsat = satSet.getSat(satId);
  var origsat = mainsat; // Launch Points are the Satellites Current Location

  var TEARR = mainsat.getTEARR();
  var launchLat, launchLon, alt;
  launchLat = satellite.degreesLat(TEARR.lat);
  launchLon = satellite.degreesLong(TEARR.lon);
  alt = TEARR.alt;
  var upOrDown = mainsat.getDirection();
  var currentEpoch = satellite.currentEpoch(_app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime());
  mainsat.TLE1 = mainsat.TLE1.substr(0, 18) + currentEpoch[0] + currentEpoch[1] + mainsat.TLE1.substr(32);
  var TLEs; // Ignore argument of perigee for round orbits OPTIMIZE

  if (mainsat.apogee - mainsat.perigee < 300) {
    TLEs = satellite.getOrbitByLatLon(mainsat, launchLat, launchLon, upOrDown, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propOffset);
  } else {
    TLEs = satellite.getOrbitByLatLon(mainsat, launchLat, launchLon, upOrDown, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propOffset, alt);
  }

  var TLE1 = TLEs[0];
  var TLE2 = TLEs[1]; //   var breakupSearchString = '';

  satId = satSet.getIdFromObjNum(80000);
  var sat = satSet.getSat(satId);
  sat = origsat;
  var iTLE1 = '1 ' + 80000 + TLE1.substr(7);
  var iTLEs; // Ignore argument of perigee for round orbits OPTIMIZE

  if (sat.apogee - sat.perigee < 300) {
    iTLEs = satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propOffset, 0, rascVariation);
  } else {
    iTLEs = satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propOffset, alt, rascVariation);
  }

  iTLE1 = iTLEs[0];
  iTLE2 = iTLEs[1]; // For the first 30

  var inc = TLE2.substr(8, 8);
  inc = (parseFloat(inc) + incVariation).toPrecision(7);
  inc = inc.split('.');
  inc[0] = inc[0].substr(-3, 3);

  if (inc[1]) {
    inc[1] = inc[1].substr(0, 4);
  } else {
    inc[1] = '0000';
  }

  inc = (inc[0] + '.' + inc[1]).toString();
  inc = _helpers_ts__WEBPACK_IMPORTED_MODULE_2__.stringPad.padEmpty(inc, 8); // For the second 30

  var meanmo = iTLE2.substr(52, 10);
  meanmo = parseFloat(meanmo * meanmoVariation).toPrecision(10); // meanmo = parseFloat(meanmo - (0.005 / 10) + (0.01 * ((meanmoIterat + 1) / 10))).toPrecision(10);

  meanmo = meanmo.split('.');
  meanmo[0] = meanmo[0].substr(-2, 2);

  if (meanmo[1]) {
    meanmo[1] = meanmo[1].substr(0, 8);
  } else {
    meanmo[1] = '00000000';
  }

  meanmo = (meanmo[0] + '.' + meanmo[1]).toString();
  var iTLE2 = '2 ' + 80000 + ' ' + inc + ' ' + iTLE2.substr(17, 35) + meanmo + iTLE2.substr(63);
  sat = satSet.getSat(satId);
  sat.TLE1 = iTLE1;
  sat.TLE2 = iTLE2;
  sat.active = true;

  if (satellite.altitudeCheck(iTLE1, iTLE2, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propOffset) > 1) {
    satCruncher.postMessage({
      typ: 'satEdit',
      id: satId,
      TLE1: iTLE1,
      TLE2: iTLE2
    }); // TODO: This belongs in main or uiManager
    // orbitManager.updateOrbitBuffer(satId, true, iTLE1, iTLE2);
  } else {
    console.warn('Breakup Generator Failed');
    return false;
  } // breakupSearchString += mainsat.SCC_NUM + ',Analyst Sat';
  // uiManager.doSearch(breakupSearchString);


  return true;
};

satellite.findChangeOrbitToDock = (sat, sat2, propOffset, propLength) => {
  var closestInc = 0;
  var closestRaan = 0;
  var closestMeanMo = 1;
  var minDistArray = {
    dist: 1000000
  };

  for (var incTemp = -1; incTemp <= 1; incTemp++) {
    for (var raanTemp = -1; raanTemp <= 1; raanTemp++) {
      for (var meanMoTemp = 0.95; meanMoTemp <= 1.05; meanMoTemp += 0.05) {
        if (satellite.createManeuverAnalyst(sat.id, incTemp, meanMoTemp, raanTemp)) {
          var minDistArrayTemp = satellite.findClosestApproachTime(satSet.getSatFromObjNum(80000), sat2, propOffset, propLength);

          if (minDistArrayTemp.dist < minDistArray.dist) {
            minDistArray = minDistArrayTemp; // let closestInc = incTemp;
            // let closestRaan = raanTemp;
            // let closestMeanMo = meanMoTemp;
            // console.log(`Distance: ${minDistArray.dist}`);
            // console.log(`Time: ${minDistArray.time}`);
            // console.log(satSet.getSatFromObjNum(80000));
          }
        }
      }
    }
  }

  console.log("".concat(sat.inclination + closestInc));
  console.log("".concat(sat.raan + closestRaan));
  console.log("".concat(sat.meanMotion * closestMeanMo));
  satellite.createManeuverAnalyst(sat.id, closestInc, closestMeanMo, closestRaan);
}; // NOTE: Better code is available for this


satellite.checkIsInFOV = (sensor, rae) => {
  var az = rae.az;
  var el = rae.el;
  var rng = rae.rng;

  if (sensor.obsminaz > sensor.obsmaxaz) {
    if ((az >= sensor.obsminaz || az <= sensor.obsmaxaz) && el >= sensor.obsminel && el <= sensor.obsmaxel && rng <= sensor.obsmaxrange && rng >= sensor.obsminrange || (az >= sensor.obsminaz2 || az <= sensor.obsmaxaz2) && el >= sensor.obsminel2 && el <= sensor.obsmaxel2 && rng <= sensor.obsmaxrange2 && rng >= sensor.obsminrange2) {
      return true;
    } else {
      return false;
    }
  } else {
    if (az >= sensor.obsminaz && az <= sensor.obsmaxaz && el >= sensor.obsminel && el <= sensor.obsmaxel && rng <= sensor.obsmaxrange && rng >= sensor.obsminrange || az >= sensor.obsminaz2 && az <= sensor.obsmaxaz2 && el >= sensor.obsminel2 && el <= sensor.obsmaxel2 && rng <= sensor.obsmaxrange2 && rng >= sensor.obsminrange2) {
      return true;
    } else {
      return false;
    }
  }
};

satellite.getDOPsTable = (lat, lon, alt) => {
  try {
    var now;
    var tbl = document.getElementById('dops'); // Identify the table to update

    tbl.innerHTML = ''; // Clear the table from old object data
    // let tblLength = 0;

    var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset();
    var propTempOffset = 0;
    var tr = tbl.insertRow();
    var tdT = tr.insertCell();
    tdT.appendChild(document.createTextNode('Time'));
    var tdH = tr.insertCell();
    tdH.appendChild(document.createTextNode('HDOP'));
    var tdP = tr.insertCell();
    tdP.appendChild(document.createTextNode('PDOP'));
    var tdG = tr.insertCell();
    tdG.appendChild(document.createTextNode('GDOP'));

    for (var t = 0; t < 1440; t++) {
      propTempOffset = t * 1000 * 60 + propOffset; // Offset in seconds (msec * 1000)

      now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propTempOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
      var dops = satellite.getDOPs(lat, lon, alt, now);
      tr = tbl.insertRow();
      tdT = tr.insertCell();
      tdT.appendChild(document.createTextNode((0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(now, 'isoDateTime', true)));
      tdH = tr.insertCell();
      tdH.appendChild(document.createTextNode(dops.HDOP));
      tdP = tr.insertCell();
      tdP.appendChild(document.createTextNode(dops.PDOP));
      tdG = tr.insertCell();
      tdG.appendChild(document.createTextNode(dops.GDOP));
    }
  } catch (error) {
    console.debug(error);
  }
};

satellite.getDOPs = (lat, lon, alt, propTime) => {
  try {
    if (typeof lat == 'undefined') {
      console.error('Latitude Required');
      return;
    }

    if (typeof lon == 'undefined') {
      console.error('Longitude Required');
      return;
    }

    alt = typeof alt != 'undefined' ? alt : 0;
    lat = lat * DEG2RAD;
    lon = lon * DEG2RAD;
    var sat;
    var lookAngles; // let az, el;
    // var azList = [];
    // var elList = [];

    var inViewList = [];

    if (typeof groupsManager.GPSGroup == 'undefined') {
      groupsManager.GPSGroup = groupsManager.createGroup('nameRegex', /NAV[S\u017F]TAR/i);
    }

    if (typeof propTime == 'undefined') propTime = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime();
    var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(propTime.getUTCFullYear(), propTime.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
    propTime.getUTCDate(), propTime.getUTCHours(), propTime.getUTCMinutes(), propTime.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

    j += propTime.getUTCMilliseconds() * 1.15741e-8;
    var gmst = satellite.gstime(j);

    for (var i = 0; i < groupsManager.GPSGroup.sats.length; i++) {
      sat = satSet.getSat(groupsManager.GPSGroup.sats[i].satId);
      lookAngles = satellite.ecfToLookAngles({
        lon: lon,
        lat: lat,
        alt: alt
      }, satellite.eciToEcf(sat.position, gmst));
      sat.az = lookAngles.az * RAD2DEG;
      sat.el = lookAngles.el * RAD2DEG;

      if (sat.el > settingsManager.gpsElevationMask) {
        inViewList.push(sat);
      }
    }

    return satellite.calculateDOPs(inViewList);
  } catch (error) {
    console.debug(error);
  }
};

satellite.calculateDOPs = satList => {
  var dops = {};
  var nsat = satList.length;

  if (nsat < 4) {
    dops.PDOP = 50;
    dops.HDOP = 50;
    dops.GDOP = 50;
    dops.VDOP = 50;
    dops.TDOP = 50; // console.error("Need More Satellites");

    return dops;
  }

  var A = window.numeric.rep([nsat, 4], 0);
  var azlist = [];
  var elvlist = [];

  for (var n = 1; n <= nsat; n++) {
    var cursat = satList[n - 1];
    var az = cursat.az;
    var elv = cursat.el;
    azlist.push(az);
    elvlist.push(elv);
    var B = [Math.cos(elv * Math.PI / 180.0) * Math.sin(az * Math.PI / 180.0), Math.cos(elv * Math.PI / 180.0) * Math.cos(az * Math.PI / 180.0), Math.sin(elv * Math.PI / 180.0), 1];
    window.numeric.setBlock(A, [n - 1, 0], [n - 1, 3], [B]);
  }

  var Q = window.numeric.dot(window.numeric.transpose(A), A);
  var Qinv = window.numeric.inv(Q);
  var pdop = Math.sqrt(Qinv[0][0] + Qinv[1][1] + Qinv[2][2]);
  var hdop = Math.sqrt(Qinv[0][0] + Qinv[1][1]);
  var gdop = Math.sqrt(Qinv[0][0] + Qinv[1][1] + Qinv[2][2] + Qinv[3][3]);
  var vdop = Math.sqrt(Qinv[2][2]);
  var tdop = Math.sqrt(Qinv[3][3]);
  dops.PDOP = parseFloat(Math.round(pdop * 100) / 100).toFixed(2);
  dops.HDOP = parseFloat(Math.round(hdop * 100) / 100).toFixed(2);
  dops.GDOP = parseFloat(Math.round(gdop * 100) / 100).toFixed(2);
  dops.VDOP = parseFloat(Math.round(vdop * 100) / 100).toFixed(2);
  dops.TDOP = parseFloat(Math.round(tdop * 100) / 100).toFixed(2);
  return dops;
};

satellite.radarMaxrng = (pW, aG, rcs, minSdB, fMhz) => {
  // let powerInWatts = 325 * 1792;
  // let antennaGain = 2613000000;
  // let minimumDetectableSignaldB;
  var minSW = Math.pow(10, (minSdB - 30) / 10); // let frequencyMhz = 435;

  var fHz = fMhz *= Math.pow(10, 6);
  var numer = pW * Math.pow(aG, 2) * rcs * Math.pow(3 * Math.pow(10, 8), 2);
  var denom = minSW * Math.pow(4 * Math.PI, 3) * Math.pow(fHz, 2);
  var rng = Math.sqrt(Math.sqrt(numer / denom));
  return rng;
};

satellite.radarMinSignal = (pW, aG, rcs, rng, fMhz) => {
  // let powerInWatts = 325 * 1792;
  // let antennaGain = 2613000000;
  // let minimumDetectableSignaldB;
  // let frequencyMhz = 435;
  var fHz = fMhz *= Math.pow(10, 6);
  var numer = pW * Math.pow(aG, 2) * rcs * Math.pow(3 * Math.pow(10, 8), 2);
  var denom = rng ** 4 * Math.pow(4 * Math.PI, 3) * Math.pow(fHz, 2);
  var minSW = numer / denom;
  var minSdB = Math.log10(minSW);
  return minSdB;
};

var getSunDirection = jd => {
  var n = jd - 2451545;
  var L = 280.46 + 0.9856474 * n; // mean longitude of sun

  var g = 357.528 + 0.9856003 * n; // mean anomaly

  L = L % 360.0;
  g = g % 360.0;
  var ecLon = L + 1.915 * Math.sin(g * DEG2RAD) + 0.02 * Math.sin(2 * g * DEG2RAD);
  var t = (jd - 2451545) / 3652500;
  var obliq = 84381.448 - 4680.93 * t - 1.55 * Math.pow(t, 2) + 1999.25 * Math.pow(t, 3) - 51.38 * Math.pow(t, 4) - 249.67 * Math.pow(t, 5) - 39.05 * Math.pow(t, 6) + 7.12 * Math.pow(t, 7) + 27.87 * Math.pow(t, 8) + 5.79 * Math.pow(t, 9) + 2.45 * Math.pow(t, 10);
  var ob = obliq / 3600.0;
  var x = 1000000 * Math.cos(ecLon * DEG2RAD);
  var y = 1000000 * Math.cos(ob * DEG2RAD) * Math.sin(ecLon * DEG2RAD);
  var z = 1000000 * Math.sin(ob * DEG2RAD) * Math.sin(ecLon * DEG2RAD);
  return [x, y, z];
};

satellite.getSunTimes = (sat, sensor, searchLength, interval) => {
  // If no sensor passed to function then try to use the 'currentSensor'
  if (typeof sensor == 'undefined') {
    if (typeof sensorManager.currentSensor == 'undefined') {
      throw 'getTEARR requires a sensor or for a sensor to be currently selected.';
    } else {
      sensor = sensorManager.currentSensor;
    }
  } // If sensor's observerGd is not set try to set it using it parameters


  if (typeof sensor.observerGd == 'undefined') {
    try {
      sensor.observerGd = {
        alt: sensor.alt,
        lat: sensor.lat,
        lon: sensor.lon
      };
    } catch (e) {
      throw 'observerGd is not set and could not be guessed.';
    }
  } // If length and interval not set try to use defaults


  if (typeof searchLength == 'undefined') searchLength = satellite.lookanglesLength;
  if (typeof interval == 'undefined') interval = satellite.lookanglesInterval;
  var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset();
  var propTempOffset = 0;
  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var minDistanceApart = 100000000000; // var minDistTime;

  for (var i = 0; i < searchLength * 24 * 60 * 60; i += interval) {
    // 5second Looks
    propTempOffset = i * 1000 + propOffset; // Offset in seconds (msec * 1000)

    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propTempOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
    var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

    j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
    var gmst = satellite.gstime(j);
    var [sunX, sunY, sunZ] = getSunDirection(j);
    var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
    var positionEci = satellite.sgp4(satrec, m);
    var positionEcf, lookAngles, az, el, rng;
    var distanceApartX = Math.pow(sunX - positionEci.position.x, 2);
    var distanceApartY = Math.pow(sunY - positionEci.position.y, 2);
    var distanceApartZ = Math.pow(sunZ - positionEci.position.z, 2);
    var distanceApart = Math.sqrt(distanceApartX + distanceApartY + distanceApartZ);
    positionEcf = satellite.eciToEcf(positionEci.position, gmst); // positionEci.position is called positionEci originally

    lookAngles = satellite.ecfToLookAngles(sensor.observerGd, positionEcf); // let gpos = satellite.eciToGeodetic(positionEci.position, gmst);
    // let alt = gpos.alt * 1000; // Km to m
    // let lon = gpos.lon;
    // let lat = gpos.lat;

    az = lookAngles.az * RAD2DEG;
    el = lookAngles.el * RAD2DEG;
    rng = lookAngles.rng;

    if (sensor.obsminaz > sensor.obsmaxaz) {
      if ((az >= sensor.obsminaz || az <= sensor.obsmaxaz) && el >= sensor.obsminel && el <= sensor.obsmaxel && rng <= sensor.obsmaxrange && rng >= sensor.obsminrange || (az >= sensor.obsminaz2 || az <= sensor.obsmaxaz2) && el >= sensor.obsminel2 && el <= sensor.obsmaxel2 && rng <= sensor.obsmaxrange2 && rng >= sensor.obsminrange2) {
        if (distanceApart < minDistanceApart) {
          minDistanceApart = distanceApart; // minDistTime = now;
        }
      }
    } else {
      if (az >= sensor.obsminaz && az <= sensor.obsmaxaz && el >= sensor.obsminel && el <= sensor.obsmaxel && rng <= sensor.obsmaxrange && rng >= sensor.obsminrange || az >= sensor.obsminaz2 && az <= sensor.obsmaxaz2 && el >= sensor.obsminel2 && el <= sensor.obsmaxel2 && rng <= sensor.obsmaxrange2 && rng >= sensor.obsminrange2) {
        if (distanceApart < minDistanceApart) {
          minDistanceApart = distanceApart; // minDistTime = now;
        }
      }
    }
  }
};

satellite.lookAnglesToEcf = (azDeg, elDeg, slantrng, obsLat, obsLong, obsAlt) => {
  // site ecef in meters
  var geodeticCoords = {};
  geodeticCoords.lat = obsLat;
  geodeticCoords.lon = obsLong;
  geodeticCoords.alt = obsAlt;
  var siteXYZ = satellite.geodeticToEcf(geodeticCoords);
  var sitex, sitey, sitez;
  sitex = siteXYZ.x;
  sitey = siteXYZ.y;
  sitez = siteXYZ.z; // some needed calculations

  var slat = Math.sin(obsLat);
  var slon = Math.sin(obsLong);
  var clat = Math.cos(obsLat);
  var clon = Math.cos(obsLong);
  var azRad = DEG2RAD * azDeg;
  var elRad = DEG2RAD * elDeg; // az,el,rng to sez convertion

  var south = -slantrng * Math.cos(elRad) * Math.cos(azRad);
  var east = slantrng * Math.cos(elRad) * Math.sin(azRad);
  var zenith = slantrng * Math.sin(elRad);
  var x = slat * clon * south + -slon * east + clat * clon * zenith + sitex;
  var y = slat * slon * south + clon * east + clat * slon * zenith + sitey;
  var z = -clat * south + slat * zenith + sitez;
  return {
    x: x,
    y: y,
    z: z
  };
}; // Requires timeManager


satellite.eci2ll = (x, y, z) => {
  var propTime = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime();
  var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(propTime.getUTCFullYear(), propTime.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
  propTime.getUTCDate(), propTime.getUTCHours(), propTime.getUTCMinutes(), propTime.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

  j += propTime.getUTCMilliseconds() * 1.15741e-8;
  var gmst = satellite.gstime(j);
  var latLon = satellite.eciToGeodetic({
    x: x,
    y: y,
    z: z
  }, gmst);
  latLon.lat = latLon.lat * RAD2DEG;
  latLon.lon = latLon.lon * RAD2DEG;
  latLon.lon = latLon.lon > 180 ? latLon.lon - 360 : latLon.lon;
  latLon.lon = latLon.lon < -180 ? latLon.lon + 360 : latLon.lon;
  return latLon;
}; // Specific to KeepTrack.


satellite.map = (sat, i) => {
  // Set default timing settings. These will be changed to find look angles at different times in future.
  var propOffset = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.getPropOffset();
  var satrec = satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var propTempOffset = i * sat.period / 50 * 60 * 1000 + propOffset; // Offset in seconds (msec * 1000)

  var propagate = (propOffset, satrec) => {
    var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTimeCheck(propOffset, _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propRealTime);
    var j = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in rng 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

    j += now.getUTCMilliseconds() * MILLISECONDS_PER_DAY;
    var gmst = satellite.gstime(j);
    var m = (j - satrec.jdsatepoch) * MINUTES_PER_DAY;
    var positionEci = satellite.sgp4(satrec, m);
    var gpos, lat, lon;
    gpos = satellite.eciToGeodetic(positionEci.position, gmst);
    lat = satellite.degreesLat(gpos.lat);
    lon = satellite.degreesLong(gpos.lon);
    var time = (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_4__.dateFormat)(now, 'isoDateTime', true);
    var positionEcf, lookAngles, az, el, rng;
    positionEcf = satellite.eciToEcf(positionEci.position, gmst); // positionEci.position is called positionEci originally

    lookAngles = satellite.ecfToLookAngles(sensorManager.currentSensor.observerGd, positionEcf);
    az = lookAngles.az * RAD2DEG;
    el = lookAngles.el * RAD2DEG;
    rng = lookAngles.rng;
    var inview = 0;

    if (sensorManager.currentSensor.obsminaz < sensorManager.currentSensor.obsmaxaz) {
      if (az >= sensorManager.currentSensor.obsminaz && az <= sensorManager.currentSensor.obsmaxaz && el >= sensorManager.currentSensor.obsminel && el <= sensorManager.currentSensor.obsmaxel && rng <= sensorManager.currentSensor.obsmaxrange && rng >= sensorManager.currentSensor.obsminrange || az >= sensorManager.currentSensor.obsminaz2 && az <= sensorManager.currentSensor.obsmaxaz2 && el >= sensorManager.currentSensor.obsminel2 && el <= sensorManager.currentSensor.obsmaxel2 && rng <= sensorManager.currentSensor.obsmaxrange2 && rng >= sensorManager.currentSensor.obsminrange2) {
        inview = 1;
      }
    } else {
      if ((az >= sensorManager.currentSensor.obsminaz || az <= sensorManager.currentSensor.obsmaxaz) && el >= sensorManager.currentSensor.obsminel && el <= sensorManager.currentSensor.obsmaxel && rng <= sensorManager.currentSensor.obsmaxrange && rng >= sensorManager.currentSensor.obsminrange || (az >= sensorManager.currentSensor.obsminaz2 || az <= sensorManager.currentSensor.obsmaxaz2) && el >= sensorManager.currentSensor.obsminel2 && el <= sensorManager.currentSensor.obsmaxel2 && rng <= sensorManager.currentSensor.obsmaxrange2 && rng >= sensorManager.currentSensor.obsminrange2) {
        inview = 1;
      }
    }

    return {
      lat: lat,
      lon: lon,
      time: time,
      inview: inview
    };
  };

  return propagate(propTempOffset, satrec); // Update the table with looks for this 5 second chunk and then increase table counter by 1
};

satellite.calculateSensorPos = sensor => {
  sensor = sensor || sensorManager.currentSensor;
  if (typeof sensor == 'undefined') return;
  var now = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_6__.timeManager.propTime();

  var jday = (year, mon, day, hr, minute, sec) => 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0; //  ut in days


  var j = jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // Note, this function requires months in rng 1-12.
  now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
  j += now.getUTCMilliseconds() * 1.15741e-8; // days per millisecond

  var gmst = satellite.gstime(j);
  var cosLat = Math.cos(sensor.lat * DEG2RAD);
  var sinLat = Math.sin(sensor.lat * DEG2RAD);
  var cosLon = Math.cos(sensor.lon * DEG2RAD + gmst);
  var sinLon = Math.sin(sensor.lon * DEG2RAD + gmst);
  var pos = {};
  pos.x = (_app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.RADIUS_OF_EARTH + _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.PLANETARIUM_DIST) * cosLat * cosLon;
  pos.y = (_app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.RADIUS_OF_EARTH + _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.PLANETARIUM_DIST) * cosLat * sinLon;
  pos.z = (_app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.RADIUS_OF_EARTH + _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.PLANETARIUM_DIST) * sinLat;
  pos.gmst = gmst;
  pos.lat = sensor.lat;
  pos.lon = sensor.lon;
  return pos;
}; // function _Nearest180(arr) {
//     let maxDiff = null;
//     for (let x = 0; x < arr.length; x++) {
//         for (let y = x + 1; y < arr.length; y++) {
//             if (arr[x] < arr[y] && maxDiff < arr[y] - arr[x]) {
//                 if (arr[y] - arr[x] > 180) {
//                     arr[y] = arr[y] - 180;
//                 }
//                 if (maxDiff < arr[y] - arr[x]) {
//                     maxDiff = arr[y] - arr[x];
//                 }
//             }
//         }
//     }
//     return maxDiff === null ? -1 : maxDiff;
// }


var _jday = (year, mon, day, hr, minute, sec) => {
  // from satellite.js
  if (!year) {
    // console.error('timeManager.jday should always have a date passed to it!');
    var now;
    now = new Date();
    var jDayStart = new Date(now.getFullYear(), 0, 0);
    var jDayDiff = now - jDayStart;
    return Math.floor(jDayDiff / MILLISECONDS_PER_DAY);
  } else {
    return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
    ;
  }
};

window.satellite = satellite;


/***/ }),

/***/ "./src/js/plugins/sensor/sensorList.js":
/*!*********************************************!*\
  !*** ./src/js/plugins/sensor/sensorList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sensorList": () => (/* binding */ sensorList)
/* harmony export */ });
var sensorList = {};
sensorList.COD = {
  name: 'Cape Cod AFS, Massachusetts',
  shortName: 'COD',
  type: 'Phased Array Radar',
  lat: 41.754785,
  lon: -70.539151,
  alt: 0.060966,
  obsminaz: 347,
  obsmaxaz: 227,
  obsminel: 3,
  obsmaxel: 85,
  obsminrange: 200,
  obsmaxrange: 5556,
  changeObjectInterval: 1000,
  beamwidth: 2.0,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  linkAehf: true,
  linkWgs: true,
  zoom: 'leo',
  url: 'http://www.radartutorial.eu/19.kartei/01.oth/karte004.en.html',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.BLE = {
  name: 'Beale AFB, California',
  shortName: 'BLE',
  type: 'Phased Array Radar',
  lat: 39.136064,
  lon: -121.351237,
  alt: 0.112,
  // Open Street Maps
  obsminaz: 126,
  obsmaxaz: 6,
  obsminel: 3,
  obsmaxel: 85,
  obsminrange: 200,
  obsmaxrange: 5556,
  changeObjectInterval: 1000,
  beamwidth: 2.0,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  linkAehf: true,
  linkWgs: true,
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.CLR = {
  name: 'Clear AFS, Alaska',
  shortName: 'CLR',
  type: 'Phased Array Radar',
  lat: 64.290556,
  lon: -149.186944,
  alt: 0.175,
  // Open Street Maps
  obsminaz: 184,
  obsmaxaz: 64,
  obsminel: 3,
  obsmaxel: 85,
  obsminrange: 200,
  obsmaxrange: 5556,
  changeObjectInterval: 1000,
  beamwidth: 2.0,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  linkAehf: true,
  linkWgs: true,
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.EGL = {
  name: 'Eglin AFB, Florida',
  shortName: 'EGL',
  type: 'Phased Array Radar',
  lat: 30.572411,
  lon: -86.214836,
  alt: 0.039,
  // Open Street Maps
  obsminaz: 120,
  obsmaxaz: 240,
  obsminel: 3,
  obsmaxel: 105,
  obsminrange: 200,
  obsmaxrange: 200000,
  changeObjectInterval: 1000,
  beamwidth: 1.4,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  url: 'http://www.radartutorial.eu/19.kartei/01.oth/karte002.en.html',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.FYL = {
  name: 'RAF Fylingdales, United Kingdom',
  shortName: 'FYL',
  type: 'Phased Array Radar',
  lat: 54.361758,
  lon: -0.670051,
  alt: 0.26,
  // Open Street Maps
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 3,
  obsmaxel: 85,
  obsminrange: 200,
  obsmaxrange: 5556,
  changeObjectInterval: 1000,
  beamwidth: 2.0,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  linkAehf: true,
  linkWgs: true,
  country: 'United Kingdom',
  sun: 'No Impact',
  volume: false
};
sensorList.CAV = {
  name: 'Cavalier AFS, North Dakota',
  shortName: 'CAV',
  type: 'Phased Array Radar',
  lat: 48.724567,
  lon: -97.899755,
  alt: 0.352,
  // Open Street Maps
  obsminaz: 298,
  obsmaxaz: 78,
  obsminel: 1.9,
  obsmaxel: 95,
  obsminrange: 200,
  obsmaxrange: 3300,
  // 1,780 Nm http://www.fortwiki.com/Cavalier_Air_Force_Station
  changeObjectInterval: 1000,
  beamwidth: 1.2,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  linkAehf: true,
  url: 'https://mostlymissiledefense.com/2012/04/12/parcs-cavalier-radar-april-12-2012/',
  country: 'United States',
  sun: 'No Impact',
  volume: true
};
sensorList.THL = {
  name: 'Thule AFB, Greenland',
  shortName: 'THL',
  type: 'Phased Array Radar',
  lat: 76.570322,
  lon: -68.299211,
  alt: 0.392,
  // Open Street Maps
  obsminaz: 297,
  obsmaxaz: 177,
  obsminel: 3,
  obsmaxel: 85,
  obsminrange: 200,
  obsmaxrange: 5556,
  changeObjectInterval: 1000,
  beamwidth: 2.0,
  // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
  linkAehf: true,
  linkWgs: true,
  url: 'http://www.radartutorial.eu/19.kartei/01.oth/karte004.en.html',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.CDN = {
  name: 'Cobra Dane, Alaska',
  shortName: 'CDN',
  type: 'Phased Array Radar',
  lat: 52.737,
  lon: 174.092,
  alt: 0.066,
  // Open Street Maps
  obsminaz: 259,
  obsmaxaz: 19,
  obsminel: 2,
  obsmaxel: 30,
  obsminrange: 200,
  obsmaxrange: 4200,
  obsminaz2: 251,
  obsmaxaz2: 27,
  obsminel2: 30,
  obsmaxel2: 80,
  obsminrange2: 200,
  obsmaxrange2: 4200,
  changeObjectInterval: 1000,
  linkWgs: true,
  url: 'http://www.radartutorial.eu/19.kartei/01.oth/karte004.en.html',
  country: 'United States',
  sun: 'No Impact',
  volume: true
};
sensorList.ALT = {
  name: 'ALTAIR, Kwajalein Atoll',
  shortName: 'ALT',
  type: 'Mechanical',
  lat: 8.716667,
  lon: 167.733333,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 200,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  linkAehf: true,
  linkWgs: true,
  url: 'http://www.radartutorial.eu/19.kartei/01.oth/karte005.en.html',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.MMW = {
  name: 'Millimeter Wave Radar, Kwajalein Atoll',
  shortName: 'MMW',
  type: 'Mechanical',
  lat: 8.756668,
  lon: 167.773334,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 2500,
  changeObjectInterval: 20000,
  linkAehf: false,
  linkWgs: false,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.ALC = {
  name: 'ALCOR Radar, Kwajalein Atoll',
  shortName: 'ALC',
  type: 'Mechanical',
  lat: 8.716668,
  lon: 167.773334,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 2300,
  changeObjectInterval: 20000,
  linkAehf: false,
  linkWgs: false,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.TDX = {
  name: 'TRADEX Radar, Kwajalein Atoll',
  shortName: 'TDX',
  type: 'Mechanical',
  lat: 8.756668,
  lon: 167.733334,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  linkAehf: false,
  linkWgs: false,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.MIL = {
  name: 'Millstone, Massachusetts',
  shortName: 'MIL',
  type: 'Mechanical',
  lat: 42.6233,
  lon: -71.4882,
  alt: 0.131,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 200,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: 'https://mostlymissiledefense.com/2012/05/05/space-surveillance-sensors-millstone-hill-radar/',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.DGC = {
  name: 'Diego Garcia',
  shortName: 'DGC',
  type: 'Optical',
  lat: -7.29648,
  lon: 72.390153,
  alt: 0.0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 20,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: 'https://mostlymissiledefense.com/2012/08/20/space-surveillance-sensors-geodss-ground-based-electro-optical-deep-space-surveillance-system-august-20-2012/',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.MAU = {
  name: 'Maui, Hawaii',
  shortName: 'MAU',
  type: 'Optical',
  lat: 20.70835,
  lon: -156.257595,
  alt: 3.0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 20,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: 'https://mostlymissiledefense.com/2012/08/20/space-surveillance-sensors-geodss-ground-based-electro-optical-deep-space-surveillance-system-august-20-2012/',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.SOC = {
  name: 'Socorro, New Mexico',
  shortName: 'SOC',
  type: 'Optical',
  lat: 33.817233,
  lon: -106.659961,
  alt: 1.24,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 20,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: 'https://mostlymissiledefense.com/2012/08/20/space-surveillance-sensors-geodss-ground-based-electro-optical-deep-space-surveillance-system-august-20-2012/',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.ASC = {
  name: 'Ascension Island, United Kingdom',
  shortName: 'ASC',
  type: 'Mechanical',
  lat: -7.969444,
  lon: -14.393889,
  alt: 0.0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 200,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.GLB = {
  name: 'Globus II, NOR',
  shortName: 'GLB',
  type: 'Mechanical',
  lat: 70.3671,
  lon: 31.1271,
  alt: 0.0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 200,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: '',
  country: 'Norway',
  sun: 'No Impact',
  volume: false
};
sensorList.HOL = {
  name: 'C-Band (Holt) Radar, Australia',
  shortName: 'HOL',
  type: 'Mechanical',
  lat: -21.816195,
  lon: 114.165637,
  alt: 0.0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1,
  obsmaxel: 90,
  obsminrange: 200,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: '',
  country: 'Australia',
  sun: 'No Impact',
  volume: false
}; // //////////////
// TPY-2 RADARS
// //////////////

sensorList.HAR = {
  name: 'Har Keren TPY-2, Israel',
  shortName: 'HAR',
  type: 'Phased Array Radar',
  lat: 30.995807,
  lon: 34.496062,
  alt: 0.173,
  obsminaz: 5,
  obsmaxaz: 125,
  obsminel: 5,
  obsmaxel: 95,
  obsminrange: 0,
  obsmaxrange: 2000,
  changeObjectInterval: 1000,
  url: '',
  country: 'Israel',
  sun: 'No Impact',
  volume: false
};
sensorList.QTR = {
  name: 'Centcom TPY-2, Qatar',
  shortName: 'QTR',
  type: 'Phased Array Radar',
  lat: 25.31598,
  lon: 51.146515,
  alt: 0.01,
  obsminaz: 335,
  obsmaxaz: 95,
  obsminel: 0,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 2000,
  changeObjectInterval: 1000,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.KUR = {
  name: 'Kürecik Radar Station, Turkey',
  shortName: 'KUR',
  type: 'Phased Array Radar',
  lat: 38.349444,
  lon: 37.793611,
  alt: 1.969,
  obsminaz: 40,
  obsmaxaz: 160,
  obsminel: 0,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 2000,
  changeObjectInterval: 1000,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.SHA = {
  name: 'Shariki Communication Site, Japan',
  shortName: 'SHA',
  type: 'Phased Array Radar',
  lat: 40.88809,
  lon: 140.337698,
  alt: 0.01,
  obsminaz: 230,
  obsmaxaz: 350,
  obsminel: 0,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 2000,
  changeObjectInterval: 1000,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.KCS = {
  name: 'Kyogamisaki Communication Site, Japan',
  shortName: 'KCS',
  type: 'Phased Array Radar',
  lat: 35.766667,
  lon: 135.195278,
  alt: 0.01,
  obsminaz: 210,
  obsmaxaz: 330,
  obsminel: 0,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 2000,
  changeObjectInterval: 1000,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.SBX = {
  name: 'Sea-Based X-Band Radar, Pacific Ocean',
  shortName: 'SBX',
  type: 'Phased Array Radar',
  lat: 36.5012,
  lon: 169.6941,
  alt: 0.0,
  obsminaz: 275,
  obsmaxaz: 300,
  obsminel: 0,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 4025,
  changeObjectInterval: 1000,
  url: '',
  country: 'United States',
  sun: 'No Impact',
  volume: false
}; // //////////////////////
// LEO LABS
// //////////////////////

sensorList.MSR = {
  name: 'Midland Space Radar, Texas',
  shortName: 'MSR',
  type: 'Phased Array Radar',
  lat: 31.9643,
  lon: -103.233245,
  alt: 0.855,
  obsminaz: 70,
  obsmaxaz: 72,
  obsminel: 30,
  obsmaxel: 91,
  // 91 to ensure visual overlap
  obsminrange: 100,
  obsmaxrange: 1800,
  obsminaz2: 250,
  obsmaxaz2: 252,
  obsminel2: 30,
  obsmaxel2: 91,
  // 91 to ensure visual overlap
  obsminrange2: 100,
  obsmaxrange2: 1800,
  changeObjectInterval: 1000,
  url: 'https://platform.leolabs.space/sites/msr',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.PFISR = {
  name: 'Poker Flat Incoherent Scatter Radar, Alaska',
  shortName: 'PFISR',
  type: 'Phased Array Radar',
  lat: 65.130029,
  lon: -147.470992,
  alt: 0.23,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 45,
  obsmaxel: 90,
  // 91 to ensure visual overlap
  obsminrange: 100,
  obsmaxrange: 1800,
  changeObjectInterval: 1000,
  url: 'https://platform.leolabs.space/sites/pfisr',
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.KSR = {
  name: 'Kiwi Space Radar, New Zealand',
  shortName: 'KSR',
  type: 'Phased Array Radar',
  lat: -45.038725,
  lon: 170.095673,
  alt: 0.0,
  obsminaz: 269,
  obsmaxaz: 271,
  obsminel: 20,
  obsmaxel: 91,
  obsminrange: 100,
  obsmaxrange: 1800,
  obsminaz2: 89,
  obsmaxaz2: 91,
  obsminel2: 20,
  obsmaxel2: 91,
  obsminrange2: 100,
  obsmaxrange2: 1800,
  changeObjectInterval: 1000,
  url: 'https://platform.leolabs.space/sites/ksr',
  country: 'United States',
  sun: 'No Impact',
  volume: false
}; // //////////////////////
// ESOC RADARS
// //////////////////////

sensorList.GRV = {
  name: 'Grand Réseau Adapté à la Veille Spatiale, France',
  shortName: 'GRV',
  type: 'Phased Array',
  lat: 47.347778,
  lon: 5.51638,
  alt: 0.0,
  obsminaz: 90,
  obsmaxaz: 270,
  obsminel: 20,
  obsmaxel: 40,
  obsminrange: 0,
  obsmaxrange: 1700,
  // http://emits.sso.esa.int/emits-doc/AO5059RD1.pdf
  changeObjectInterval: 20000,
  url: '',
  country: 'France',
  sun: 'No Impact',
  volume: true
};
sensorList.TIR = {
  name: 'Tracking and Imaging Radar, Germany',
  shortName: 'TIR',
  type: 'Mechanical',
  lat: 50.6166,
  lon: 7.1296,
  alt: 0.0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 1.5,
  // http://www.issfd.org/ISSFD_2012/ISSFD23_CRSD2_3.pdf
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  // http://emits.sso.esa.int/emits-doc/AO5059RD1.pdf
  changeObjectInterval: 20000,
  url: '',
  country: 'Germany',
  sun: 'No Impact',
  volume: false
};
sensorList.NRC = {
  name: 'Croce del Nord, Italy',
  shortName: 'NRC',
  type: 'Bistatic Radio Telescope',
  lat: 44.5208,
  lon: 11.6469,
  alt: 0.025,
  obsminaz: 89.1,
  obsmaxaz: 90.9,
  obsminel: 45,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 1700,
  obsminaz2: 179.1,
  obsmaxaz2: 180.9,
  obsminel2: 45,
  obsmaxel2: 90,
  obsminrange2: 0,
  obsmaxrange2: 1700,
  changeObjectInterval: 20000,
  url: '',
  country: 'Italy',
  sun: 'No Impact',
  volume: false
};
sensorList.TRO = {
  name: 'RAF Troodos, United Kingdom',
  shortName: 'TRO',
  type: 'Optical',
  lat: 34.912778,
  lon: 32.883889,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: '',
  country: 'United Kingdom',
  sun: 'No Impact',
  volume: false
};
sensorList.SDT = {
  name: 'ESA Space Debris Telescope, Spain',
  shortName: 'SDT',
  type: 'Optical',
  lat: 28.3,
  lon: -16.5097,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  url: '',
  country: 'Spain',
  sun: 'No Impact',
  volume: false
}; // //////////////////////
// RUSSIAN RADARS
// //////////////////////

sensorList.ARM = {
  name: 'Armavir, Russia',
  shortName: 'ARM',
  type: 'Phased Array Radar',
  lat: 44.925106,
  lon: 40.983894,
  alt: 0.0,
  obsminaz: 55,
  // All Information via russianforces.org
  obsmaxaz: 295,
  obsminel: 2,
  obsmaxel: 60,
  obsminrange: 100,
  obsmaxrange: 4200,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.BAL = {
  name: 'Balkhash, Russia',
  shortName: 'BAL',
  type: 'Phased Array Radar',
  lat: 46.603076,
  lon: 74.530985,
  alt: 0.0,
  obsminaz: 91,
  // All Information via russianforces.org
  obsmaxaz: 151,
  obsminel: 5.5,
  obsmaxel: 34.5,
  obsminrange: 385,
  obsmaxrange: 4600,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.GAN = {
  name: 'Gantsevichi, Russia',
  shortName: 'GAN',
  type: 'Phased Array Radar',
  lat: 52.85,
  lon: 26.48,
  alt: 0.0,
  obsminaz: 190,
  // All Information via russianforces.org
  obsmaxaz: 310,
  obsminel: 3,
  obsmaxel: 80,
  obsminrange: 300,
  obsmaxrange: 6500,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.LEK = {
  name: 'Lekhtusi, Russia',
  shortName: 'LEK',
  type: 'Phased Array Radar',
  lat: 60.275458,
  lon: 30.546017,
  alt: 0.0,
  obsminaz: 245,
  obsmaxaz: 355,
  obsminel: 2,
  obsmaxel: 70,
  obsminrange: 100,
  obsmaxrange: 4200,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.MIS = {
  name: 'Mishelevka-D, Russia',
  shortName: 'MIS',
  type: 'Phased Array Radar',
  lat: 52.8555,
  lon: 103.2317,
  alt: 0.0,
  obsminaz: 41,
  // All Information via russianforces.org
  obsmaxaz: 219,
  obsminel: 5.5,
  obsmaxel: 34.5,
  obsminrange: 250,
  obsmaxrange: 4600,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.OLE = {
  name: 'Olenegorsk, Russia',
  shortName: 'OLE',
  type: 'Phased Array Radar',
  lat: 68.1141,
  lon: 33.9102,
  alt: 0.0,
  obsminaz: 280,
  // All Information via russianforces.org
  obsmaxaz: 340,
  obsminel: 5.5,
  obsmaxel: 34.5,
  obsminrange: 250,
  obsmaxrange: 4600,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.PEC = {
  name: 'Pechora, Russia',
  shortName: 'PEC',
  type: 'Phased Array Radar',
  lat: 65.21,
  lon: 57.295,
  alt: 0.0,
  obsminaz: 305,
  // All Information via russianforces.org
  obsmaxaz: 55,
  obsminel: 2,
  obsmaxel: 55,
  obsminrange: 300,
  obsmaxrange: 7200,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.PIO = {
  name: 'Pionersky, Russia',
  shortName: 'PIO',
  type: 'Phased Array Radar',
  lat: 54.857294,
  lon: 20.18235,
  alt: 0.0,
  obsminaz: 187.5,
  // All Information via russianforces.org
  obsmaxaz: 292.5,
  obsminel: 2,
  obsmaxel: 60,
  obsminrange: 100,
  obsmaxrange: 4200,
  changeObjectInterval: 1000,
  country: 'Russia',
  sun: 'No Impact',
  volume: false
};
sensorList.XUA = {
  name: 'Xuanhua, China',
  shortName: 'XUA',
  type: 'Phased Array Radar',
  lat: 40.446944,
  lon: 115.116389,
  alt: 1.6,
  obsminaz: 300,
  // Information via global ssa sensors amos 2010.pdf (sinodefence.com/special/airdefense/project640.asp)
  obsmaxaz: 60,
  // Information via global ssa sensors amos 2010.pdf (sinodefence.com/special/airdefense/project640.asp)
  obsminel: 2,
  // Information via globalsecurity.org
  obsmaxel: 80,
  // Information via globalsecurity.org
  obsminrange: 300,
  obsmaxrange: 3000,
  // Information via global ssa sensors amos 2010.pdf (sinodefence.com/special/airdefense/project640.asp)
  changeObjectInterval: 1000,
  country: 'China',
  sun: 'No Impact',
  volume: false
}; // Telescopes

sensorList.MLS = {
  name: 'Mount Lemmon Survey, Arizona',
  shortName: 'MLS',
  type: 'Optical',
  lat: 32.442,
  lon: -110.789,
  alt: 2.791,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.PMO = {
  name: 'Purple Mountain Observatory, China',
  shortName: 'PMO',
  type: 'Optical',
  lat: 32.064946,
  lon: 118.829677,
  alt: 0.267,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  country: 'China',
  sun: 'No Impact',
  volume: false
};
sensorList.PO = {
  name: 'Palomar Observatory, California',
  shortName: 'PO',
  type: 'Optical',
  lat: 33.3564,
  lon: -116.865,
  alt: 1.712,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  country: 'United States',
  sun: 'No Impact',
  volume: false
};
sensorList.LSO = {
  name: 'La Sagra Observatory, Spain',
  shortName: 'LSO',
  type: 'Optical',
  lat: 37.9839,
  lon: -2.5644,
  alt: 0,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  country: 'Spain',
  sun: 'No Impact',
  volume: false
}; // ISON Sensors

sensorList.MAY = {
  name: 'Mayhill, New Mexico',
  shortName: 'MAY',
  type: 'Optical',
  lat: 32.9039,
  lon: -105.5289,
  alt: 2.225,
  obsminaz: 0,
  obsmaxaz: 360,
  obsminel: 10,
  obsmaxel: 90,
  obsminrange: 0,
  obsmaxrange: 200000,
  changeObjectInterval: 20000,
  country: 'USA',
  sun: 'No Impact',
  volume: false
};
sensorList.TAI = {
  name: 'Surveillance Radar Program, Taiwan',
  shortName: 'TAI',
  type: 'Phased Array Radar',
  lat: 24.499,
  lon: 121.072,
  alt: 0.060966,
  // Find accurate altitude
  obsminaz: 180,
  obsmaxaz: 60,
  obsminel: 3,
  obsmaxel: 85,
  obsminrange: 200,
  obsmaxrange: 5556,
  changeObjectInterval: 1000,
  linkAehf: false,
  linkWgs: false,
  zoom: 'leo',
  url: 'https://fas.org/man/eprint/leshan.pdf',
  country: 'Taiwan',
  sun: 'No Impact',
  volume: false
};


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/ootk/dist/ootk.js":
/*!****************************************!*\
  !*** ./node_modules/ootk/dist/ootk.js ***!
  \****************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 333:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_528__) => {

/* harmony export */ __nested_webpack_require_528__.d(__webpack_exports__, {
/* harmony export */   "Sgp4": () => /* binding */ Sgp4
/* harmony export */ });
/**
 * @author Theodore Kruczek.
 * @description Orbital Object ToolKit (OOTK) is a collection of tools for working
 * with satellites and other orbital objects.
 *
 * @file The Sgp4 module contains a TypeScript port of the 2020 version of
 * sgp4unit.cpp from "Fundamentals of Astrodynamics and Applications" by David
 * Vallado. All of the original comments and notes are inserted in the code below
 * in order provide context to the functions and clarify any adjustments made for
 * TypeScript/JavaScript compatibility.
 *
 * @copyright MIT License.
 * Copyright (c) 2020-2021 Theodore Kruczek
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*     ----------------------------------------------------------------
 *
 *                               sgp4unit.cpp
 *
 *    this file contains the sgp4 procedures for analytical propagation
 *    of a satellite. the code was originally released in the 1980 and 1986
 *    spacetrack papers. a detailed discussion of the theory and history
 *    may be found in the 2006 aiaa paper by vallado, crawford, hujsak,
 *    and kelso.
 *
 *                            companion code for
 *               fundamentals of astrodynamics and applications
 *                                    2013
 *                              by david vallado
 *
 *     (w) 719-573-2600, email dvallado@agi.com, davallado@gmail.com
 *
 *    current :
 *              12 mar 20  david vallado
 *                           chg satnum to string for alpha 5 or 9-digit
 *    changes :
 *               7 dec 15  david vallado
 *                           fix jd, jdfrac
 *               3 nov 14  david vallado
 *                           update to msvs2013 c++
 *              30 aug 10  david vallado
 *                           delete unused variables in initl
 *                           replace pow integer 2, 3 with multiplies for speed
 *               3 nov 08  david vallado
 *                           put returns in for error codes
 *              29 sep 08  david vallado
 *                           fix atime for faster operation in dspace
 *                           add operationmode for afspc (a) or improved (i)
 *                           performance mode
 *              16 jun 08  david vallado
 *                           update small eccentricity check
 *              16 nov 07  david vallado
 *                           misc fixes for better compliance
 *              20 apr 07  david vallado
 *                           misc fixes for constants
 *              11 aug 06  david vallado
 *                           chg lyddane choice back to strn3, constants, misc doc
 *              15 dec 05  david vallado
 *                           misc fixes
 *              26 jul 05  david vallado
 *                           fixes for paper
 *                           note that each fix is preceded by a
 *                           comment with "sgp4fix" and an explanation of
 *                           what was changed
 *              10 aug 04  david vallado
 *                           2nd printing baseline working
 *              14 may 01  david vallado
 *                           2nd edition baseline
 *                     80  norad
 *                           original baseline
 *       ----------------------------------------------------------------      */
var PI = Math.PI;
var TAU = PI * 2;
var DEG2RAD = PI / 180.0;
var x2o3 = 2.0 / 3.0;
var xpdotp = 1440.0 / (2.0 * PI); // 229.1831180523293;

var zes = 0.01675;
var zel = 0.0549;
var c1ss = 2.9864797e-6;
var c1l = 4.7968065e-7;
var zsinis = 0.39785416;
var zcosis = 0.91744867;
var zcosgs = 0.1945905;
var zsings = -0.98088458;
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
var zns = 1.19459e-5;
var temp4 = 1.5e-12;
var fasx2 = 0.13130908;
var fasx4 = 2.8843198;
var fasx6 = 0.37448087;
var g22 = 5.7686396;
var g32 = 0.95240898;
var g44 = 1.8014998;
var g52 = 1.050833;
var g54 = 4.4108898;
var stepp = 720.0;
var stepn = -720.0;
var step2 = 259200.0;
/**
 * Ootk code is run synchronously and often on super tight loops, so lets reuse the variables as much as possible.
 */
// prettier-ignore

var axnl, aynl, xl, u, ktr, vkmpersec, ecose, esine, el2, pl, rl, rdotl, rvdotl, betal, sinu, cosu, sin2u, coseo1, sineo1, cosip, sinip, cosisq, delm, delomg, eo1, argpm, argpp, su, t3, t4, tc, tem5, temp, tempa, tempe, templ, inclm, mm, nm, nodem, xincp, xlm, mp, nodep, xmdf, argpdf, nodedf, t2, delmtemp, em, dspaceOptions, dspaceResult, am, ep, cosim, sinim, dpperResult, dpperParameters, method, ts70, ds70, c1, tfrac, thgr70, fk5r, c1p2p, dndt, ft, delt, xndt, xldot, xnddt, x2omi, xomi, x2li, theta, tut1, snodm, cnodm, sinomm, cosomm, betasq, rtemsq, peo, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, cc, x1, x2, x3, x4, x5, x6, x7, x8, zcosg, zsing, zcosh, zsinh, zcosi, zsini, ss1, ss2, ss3, ss4, ss5, ss6, ss7, sz1, sz2, sz3, sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33, s1, s2, s3, s4, s5, s6, s7, z1, z2, z3, z11, z12, z13, z21, z22, z23, z31, z32, z33, f220, f221, f311, f321, f322, f330, f441, f442, f522, f523, f542, f543, g200, g201, g211, g300, g310, g322, g410, g422, g520, g521, g532, g533, sini2, temp1, xno2, ainv2, aonv, cos2u, mrt, temp2, xnode, xinc, mvt, rvdot, sinsu, cossu, snod, cnod, cosi, sini, xmx, xmy, ux, uy, uz, vx, vy, vz, r, v, year, satrec, dsinitResult, dsinitOptions, ao, mon, day, hr, minute, sec, ss, qzms24temp, qzms2ttemp, initlOptions, initlResult, cosio, delmotemp, dscomOptions, dscomResult, dpperOptions, sinio, qzms2t, con42, cosio2, lmonth, dayofyr, inttemp, i, eccsq, omeosq, rteosq, ak, d1, adel, po, ses, sis, sls, sghs, shs, sel, sil, sll, con41, ainv, posq, rp, sghl, shll, PInco, plo, pho, ctem, zcosil, zsinhl, stem, zsingl, zsinil, gam, zy, pgho, zcoshl, xnoi, zcosgl, zmol, zmos, se2, se3, si2, si3, sl2, sl3, sl4, sgh2, xnodce, sh3, sgh4, sh2, ee2, e3, xi2, xi3, xl2, xl3, xl4, sgh3, xgh2, xgh3, xgh4, xh2, xh3, sgs, emo, emsqo, eoc, alfdp, betdp, cosop, sinop, dalf, dbet, dls, f2, f3, pe, pgh, ph, PInc, sinzf, xls, xnoh, zf, zm, cc1sq, cc2, cc3, coef, coef1, cosio4, emsq, eeta, etasq, perige, PInvsq, psisq, qzms24, sfour, temp3, tsi, xPIdot, xhdot1, leadingChar, gsto, lsflg, j2, j3, j3oj2, j4, xke, mus, radiusearthkm, tumin;

var Sgp4 =
/** @class */
function () {
  function Sgp4() {}
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
  *    PInco       -
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
  *    PInc        -
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


  Sgp4.dpper = function (satrec, options) {
    var e3 = satrec.e3,
        ee2 = satrec.ee2,
        peo = satrec.peo,
        pgho = satrec.pgho,
        pho = satrec.pho,
        PInco = satrec.PInco,
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
    var ep = options.ep,
        inclp = options.inclp,
        nodep = options.nodep,
        argpp = options.argpp,
        mp = options.mp;
    var _a = options.opsmode,
        opsmode = _a === void 0 ? i : _a,
        init = options.init; //  ---------------------- constants -----------------------------

    /** Ootk -- Declared outside the class at the top */
    // zns = 1.19459e-5;
    // zes = 0.01675;
    // znl = 1.5835218e-4;
    // zel = 0.0549;
    //  --------------- calculate time varying periodics -----------

    zm = zmos + zns * t; // be sure that the initial call has time set to zero

    if (init === 'y') {
      zm = zmos;
    }

    zf = zm + 2.0 * zes * Math.sin(zm);
    sinzf = Math.sin(zf);
    f2 = 0.5 * sinzf * sinzf - 0.25;
    f3 = -0.5 * sinzf * Math.cos(zf);
    ses = se2 * f2 + se3 * f3;
    sis = si2 * f2 + si3 * f3;
    sls = sl2 * f2 + sl3 * f3 + sl4 * sinzf;
    sghs = sgh2 * f2 + sgh3 * f3 + sgh4 * sinzf;
    shs = sh2 * f2 + sh3 * f3;
    zm = zmol + znl * t;

    if (init === 'y') {
      zm = zmol;
    }

    zf = zm + 2.0 * zel * Math.sin(zm);
    sinzf = Math.sin(zf);
    f2 = 0.5 * sinzf * sinzf - 0.25;
    f3 = -0.5 * sinzf * Math.cos(zf);
    sel = ee2 * f2 + e3 * f3;
    sil = xi2 * f2 + xi3 * f3;
    sll = xl2 * f2 + xl3 * f3 + xl4 * sinzf;
    sghl = xgh2 * f2 + xgh3 * f3 + xgh4 * sinzf;
    shll = xh2 * f2 + xh3 * f3;
    pe = ses + sel;
    PInc = sis + sil;
    pl = sls + sll;
    pgh = sghs + sghl;
    ph = shs + shll;

    if (init === 'n') {
      pe -= peo;
      PInc -= PInco;
      pl -= plo;
      pgh -= pgho;
      ph -= pho;
      inclp += PInc;
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
        dalf = ph * cosop + PInc * cosip * sinop;
        dbet = -ph * sinop + PInc * cosip * cosop;
        alfdp += dalf;
        betdp += dbet;
        nodep %= TAU; //  sgp4fix for afspc written intrinsic functions
        //  nodep used without a trigonometric function ahead

        /* istanbul ignore next */

        if (nodep < 0.0 && opsmode === 'a') {
          nodep += TAU;
        }

        xls = mp + argpp + cosip * nodep;
        dls = pl + pgh - PInc * nodep * sinip;
        xls += dls;
        xnoh = nodep;
        nodep = Math.atan2(alfdp, betdp); //  sgp4fix for afspc written intrinsic functions
        //  nodep used without a trigonometric function ahead

        /* istanbul ignore next */

        if (nodep < 0.0 && opsmode === 'a') {
          nodep += TAU;
        }

        if (Math.abs(xnoh - nodep) > PI) {
          /* istanbul ignore next */
          if (nodep < xnoh) {
            nodep += TAU;
          } else {
            nodep -= TAU;
          }
        }

        mp += pl;
        argpp = xls - mp - cosip * nodep;
      }
    } // if init == 'n'


    return {
      ep: ep,
      inclp: inclp,
      nodep: nodep,
      argpp: argpp,
      mp: mp
    };
  }; // dpper

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
  *    PInco       -
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


  Sgp4.dscom = function (options) {
    var epoch = options.epoch,
        ep = options.ep,
        argpp = options.argpp,
        tc = options.tc,
        inclp = options.inclp,
        nodep = options.nodep,
        np = options.np; // -------------------------- constants -------------------------

    /** Ootk -- These are declared outside the class at the top of the file */
    // zes = 0.01675;
    // zel = 0.0549;
    // c1ss = 2.9864797e-6;
    // c1l = 4.7968065e-7;
    // zsinis = 0.39785416;
    // zcosis = 0.91744867;
    // zcosgs = 0.1945905;
    // zsings = -0.98088458;
    // TAU = 2.0 * Math.PI;
    //  --------------------- local variables ------------------------

    nm = np;
    em = ep;
    snodm = Math.sin(nodep);
    cnodm = Math.cos(nodep);
    sinomm = Math.sin(argpp);
    cosomm = Math.cos(argpp);
    sinim = Math.sin(inclp);
    cosim = Math.cos(inclp);
    emsq = em * em;
    betasq = 1.0 - emsq;
    rtemsq = Math.sqrt(betasq); //  ----------------- initialize lunar solar terms ---------------

    peo = 0.0;
    PInco = 0.0;
    plo = 0.0;
    pgho = 0.0;
    pho = 0.0;
    day = epoch + 18261.5 + tc / 1440.0;
    xnodce = (4.523602 - 9.2422029e-4 * day) % TAU;
    stem = Math.sin(xnodce);
    ctem = Math.cos(xnodce);
    zcosil = 0.91375164 - 0.03568096 * ctem;
    zsinil = Math.sqrt(1.0 - zcosil * zcosil);
    zsinhl = 0.089683511 * stem / zsinil;
    zcoshl = Math.sqrt(1.0 - zsinhl * zsinhl);
    gam = 5.8351514 + 0.001944368 * day;
    var zx = 0.39785416 * stem / zsinil;
    zy = zcoshl * ctem + 0.91744867 * zsinhl * stem;
    zx = Math.atan2(zx, zy);
    zx += gam - xnodce;
    zcosgl = Math.cos(zx);
    zsingl = Math.sin(zx); //  ------------------------- do solar terms ---------------------

    zcosg = zcosgs;
    zsing = zsings;
    zcosi = zcosis;
    zsini = zsinis;
    zcosh = cnodm;
    zsinh = snodm;
    cc = c1ss;
    xnoi = 1.0 / nm;

    for (lsflg = 1; lsflg <= 2; lsflg++) {
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

    zmol = (4.7199672 + (0.2299715 * day - gam)) % TAU;
    zmos = (6.2565837 + 0.017201977 * day) % TAU; //  ------------------------ do solar terms ----------------------

    se2 = 2.0 * ss1 * ss6;
    se3 = 2.0 * ss1 * ss7;
    si2 = 2.0 * ss2 * sz12;
    si3 = 2.0 * ss2 * (sz13 - sz11);
    sl2 = -2.0 * ss3 * sz2;
    sl3 = -2.0 * ss3 * (sz3 - sz1);
    sl4 = -2.0 * ss3 * (-21.0 - 9.0 * emsq) * zes;
    sgh2 = 2.0 * ss4 * sz32;
    sgh3 = 2.0 * ss4 * (sz33 - sz31);
    sgh4 = -18.0 * ss4 * zes;
    sh2 = -2.0 * ss2 * sz22;
    sh3 = -2.0 * ss2 * (sz23 - sz21); //  ------------------------ do lunar terms ----------------------

    ee2 = 2.0 * s1 * s6;
    e3 = 2.0 * s1 * s7;
    xi2 = 2.0 * s2 * z12;
    xi3 = 2.0 * s2 * (z13 - z11);
    xl2 = -2.0 * s3 * z2;
    xl3 = -2.0 * s3 * (z3 - z1);
    xl4 = -2.0 * s3 * (-21.0 - 9.0 * emsq) * zel;
    xgh2 = 2.0 * s4 * z32;
    xgh3 = 2.0 * s4 * (z33 - z31);
    xgh4 = -18.0 * s4 * zel;
    xh2 = -2.0 * s2 * z22;
    xh3 = -2.0 * s2 * (z23 - z21);
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
      PInco: PInco,
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
  }; // dscom

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
  *    xPIdot      -
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


  Sgp4.dsinit = function (options) {
    var // sgp4fix just send in xke as a constant and eliminate getgravconst call
    // gravconsttype whichconst,
    xke = options.xke,
        cosim = options.cosim,
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
        xPIdot = options.xPIdot,
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
    /* --------------------- local variables ------------------------ */

    /** Ootk -- these are declared at the top instead */
    // q22 = 1.7891679e-6;
    // q31 = 2.1460748e-6;
    // q33 = 2.2123015e-7;
    // root22 = 1.7891679e-6;
    // root44 = 7.3636953e-9;
    // root54 = 2.1765803e-9;
    // rptim = 4.37526908801129966e-3; // equates to 7.29211514668855e-5 rad/sec
    // root32 = 3.7393792e-7;
    // root52 = 1.1428639e-7;
    // x2o3 = 2.0 / 3.0;
    // znl = 1.5835218e-4;
    // zns = 1.19459e-5;
    // sgp4fix identify constants and allow alternate values
    // just xke is used here so pass it in rather than have multiple calls
    // getgravconst( whichconst, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2 );
    // -------------------- deep space initialization ------------

    irez = 0;

    if (nm < 0.0052359877 && nm > 0.0034906585) {
      irez = 1;
    }

    if (nm >= 8.26e-3 && nm <= 9.24e-3 && em >= 0.5) {
      irez = 2;
    } // ------------------------ do solar terms -------------------


    ses = ss1 * zns * ss5;
    sis = ss2 * zns * (sz11 + sz13);
    sls = -zns * ss3 * (sz1 + sz3 - 14.0 - 6.0 * emsq);
    sghs = ss4 * zns * (sz31 + sz33 - 6.0);
    var shs = -zns * ss2 * (sz21 + sz23); // sgp4fix for 180 deg incl

    if (inclm < 5.2359877e-2 || inclm > PI - 5.2359877e-2) {
      shs = 0.0;
    }

    if (sinim !== 0.0) {
      shs /= sinim;
    }

    sgs = sghs - cosim * shs; // ------------------------- do lunar terms ------------------

    dedt = ses + s1 * znl * s5;
    didt = sis + s2 * znl * (z11 + z13);
    dmdt = sls - znl * s3 * (z1 + z3 - 14.0 - 6.0 * emsq);
    sghl = s4 * znl * (z31 + z33 - 6.0);
    var shll = -znl * s2 * (z21 + z23); // sgp4fix for 180 deg incl

    if (inclm < 5.2359877e-2 || inclm > PI - 5.2359877e-2) {
      shll = 0.0;
    }

    domdt = sgs + sghl;
    dnodt = shs;

    if (sinim !== 0.0) {
      domdt -= cosim / sinim * shll;
      dnodt += shll / sinim;
    } // ----------- calculate deep space resonance effects --------


    dndt = 0.0;
    theta = (gsto + tc * rptim) % TAU;
    em += dedt * t;
    inclm += didt * t;
    argpm += domdt * t;
    nodem += dnodt * t;
    mm += dmdt * t; // sgp4fix for negative inclinations
    // the following if statement should be commented out
    // if (inclm < 0.0)
    // {
    //   inclm  = -inclm;
    //   argpm  = argpm - PI;
    //   nodem = nodem + PI;
    // }
    // -------------- initialize the resonance terms -------------

    if (irez !== 0) {
      aonv = Math.pow(nm / xke, x2o3); // ---------- geopotential resonance for 12 hour orbits ------

      if (irez === 2) {
        cosisq = cosim * cosim;
        emo = em;
        em = ecco;
        emsqo = emsq;
        emsq = eccsq;
        eoc = em * emsq;
        g201 = -0.306 - (em - 0.64) * 0.44;

        if (em <= 0.65) {
          g211 = 3.616 - 13.247 * em + 16.29 * emsq;
          g310 = -19.302 + 117.39 * em - 228.419 * emsq + 156.591 * eoc;
          g322 = -18.9068 + 109.7927 * em - 214.6334 * emsq + 146.5816 * eoc;
          g410 = -41.122 + 242.694 * em - 471.094 * emsq + 313.953 * eoc;
          g422 = -146.407 + 841.88 * em - 1629.014 * emsq + 1083.435 * eoc;
          g520 = -532.114 + 3017.977 * em - 5740.032 * emsq + 3708.276 * eoc;
        } else {
          g211 = -72.099 + 331.819 * em - 508.738 * emsq + 266.724 * eoc;
          g310 = -346.844 + 1582.851 * em - 2415.925 * emsq + 1246.113 * eoc;
          g322 = -342.585 + 1554.908 * em - 2366.899 * emsq + 1215.972 * eoc;
          g410 = -1052.797 + 4758.686 * em - 7193.992 * emsq + 3651.957 * eoc;
          g422 = -3581.69 + 16178.11 * em - 24462.77 * emsq + 12422.52 * eoc;

          if (em > 0.715) {
            g520 = -5149.66 + 29936.92 * em - 54087.36 * emsq + 31324.56 * eoc;
          } else {
            g520 = 1464.74 - 4664.75 * em + 3763.64 * emsq;
          }
        }

        if (em < 0.7) {
          g533 = -919.2277 + 4988.61 * em - 9064.77 * emsq + 5542.21 * eoc;
          g521 = -822.71072 + 4568.6173 * em - 8491.4146 * emsq + 5337.524 * eoc;
          g532 = -853.666 + 4690.25 * em - 8624.77 * emsq + 5341.4 * eoc;
        } else {
          g533 = -37995.78 + 161616.52 * em - 229838.2 * emsq + 109377.94 * eoc;
          g521 = -51752.104 + 218913.95 * em - 309468.16 * emsq + 146349.42 * eoc;
          g532 = -40023.88 + 170470.89 * em - 242699.48 * emsq + 115605.82 * eoc;
        }

        sini2 = sinim * sinim;
        f220 = 0.75 * (1.0 + 2.0 * cosim + cosisq);
        f221 = 1.5 * sini2;
        f321 = 1.875 * sinim * (1.0 - 2.0 * cosim - 3.0 * cosisq);
        f322 = -1.875 * sinim * (1.0 + 2.0 * cosim - 3.0 * cosisq);
        f441 = 35.0 * sini2 * f220;
        f442 = 39.375 * sini2 * sini2;
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
        xlamo = (mo + nodeo + nodeo - (theta + theta)) % TAU;
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
        xlamo = (mo + nodeo + argpo - theta) % TAU;
        xfact = mdot + xPIdot + dmdt + domdt + dnodt - (no + rptim);
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
  }; // dsinit

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


  Sgp4.dspace = function (options) {
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
    /** Ootk -- Declared at the top of the file instead */
    // fasx2 = 0.13130908;
    // fasx4 = 2.8843198;
    // fasx6 = 0.37448087;
    // g22 = 5.7686396;
    // g32 = 0.95240898;
    // g44 = 1.8014998;
    // g52 = 1.050833;
    // g54 = 4.4108898;
    // rptim = 4.37526908801129966e-3; // equates to 7.29211514668855e-5 rad/sec
    // stepp = 720.0;
    // stepn = -720.0;
    // step2 = 259200.0;
    //  ----------- calculate deep space resonance effects -----------

    dndt = 0.0;
    theta = (gsto + tc * rptim) % TAU;
    em += dedt * t;
    inclm += didt * t;
    argpm += domdt * t;
    nodem += dnodt * t;
    mm += dmdt * t; // sgp4fix for negative inclinations
    // the following if statement should be commented out
    // if (inclm < 0.0)
    // {
    //   inclm = -inclm;
    //   argpm = argpm - PI;
    //   nodem = nodem + PI;
    // }

    /* - update resonances : numerical (euler-maclaurin) integration - */

    /* ------------------------- epoch restart ----------------------  */
    //   sgp4fix for propagator problems
    //   the following integration works for negative time steps and periods
    //   the specific changes are unknown because the original code was so convoluted
    // sgp4fix take out atime = 0.0 and fix for faster operation
    // ft = 0.0; /** Ootk -- This has no value */

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
          // iret = 0; /** Ootk -- This has no value */
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
      } // while iretn = 381


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
  }; // dspace

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
  *    satn        - satellite number - not needed, placed in satrec
  *    xke         - reciprocal of tumin
  *    j2          - j2 zonal harmonic
  *    ecco        - eccentricity                           0.0 - 1.0
  *    epoch       - epoch time in days from jan 0, 1950. 0 hr
  *    inclo       - inclination of satellite
  *    no          - mean motion of satellite
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
  *    getgravconst- no longer used
  *    gstime      - find greenwich sidereal time from the julian date
  *
  *  references    :
  *    hoots, roehrich, norad spacetrack report #3 1980
  *    hoots, norad spacetrack report #6 1986
  *    hoots, schumacher and glover 2004
  *    vallado, crawford, hujsak, kelso  2006
  ----------------------------------------------------------------------------*/


  Sgp4.initl = function (options) {
    // sgp4fix satn not needed. include in satrec in case needed later
    // int satn,
    // sgp4fix just pass in xke and j2
    // gravconsttype whichconst,
    var opsmode = options.opsmode,
        ecco = options.ecco,
        epoch = options.epoch,
        inclo = options.inclo,
        xke = options.xke,
        j2 = options.j2;
    var no = options.no;
    /* --------------------- local variables ------------------------ */

    /** Ootk -- Declared at the top of the file */
    // sgp4fix use old way of finding gst

    /** Ootk -- Declared at the top of the file */
    // ----------------------- earth constants ---------------------
    // sgp4fix identify constants and allow alternate values
    // only xke and j2 are used here so pass them in directly
    // getgravconst( whichconst, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2 )
    // ------------- calculate auxillary epoch quantities ----------

    eccsq = ecco * ecco;
    omeosq = 1.0 - eccsq;
    rteosq = Math.sqrt(omeosq);
    cosio = Math.cos(inclo);
    cosio2 = cosio * cosio; // ------------------ un-kozai the mean motion -----------------

    ak = Math.pow(xke / no, x2o3);
    d1 = 0.75 * j2 * (3.0 * cosio2 - 1.0) / (rteosq * omeosq);
    var delPrime = d1 / (ak * ak);
    adel = ak * (1.0 - delPrime * delPrime - delPrime * (1.0 / 3.0 + 134.0 * delPrime * delPrime / 81.0));
    delPrime = d1 / (adel * adel);
    no = no / (1.0 + delPrime);
    ao = Math.pow(xke / no, x2o3);
    sinio = Math.sin(inclo);
    po = ao * omeosq;
    con42 = 1.0 - 5.0 * cosio2;
    con41 = -con42 - cosio2 - cosio2;
    ainv = 1.0 / ao;
    posq = po * po;
    rp = ao * (1.0 - ecco);
    method = 'n'; //  sgp4fix modern approach to finding sidereal time

    /** Ootk -- Continue allowing AFSPC mode for SGP4 Validation */

    if (opsmode == 'a') {
      //  sgp4fix use old way of finding gst
      //  count integer number of days from 0 jan 1970
      ts70 = epoch - 7305.0;
      ds70 = Math.floor(ts70 + 1.0e-8);
      tfrac = ts70 - ds70; //  find greenwich location at epoch

      c1 = 1.72027916940703639e-2;
      thgr70 = 1.7321343856509374;
      fk5r = 5.07551419432269442e-15;
      c1p2p = c1 + TAU;
      gsto = (thgr70 + c1 * ds70 + c1p2p * tfrac + ts70 * ts70 * fk5r) % TAU;
      /* istanbul ignore next | This is no longer possible*/

      if (gsto < 0.0) {
        gsto += TAU;
      }
    } else {
      gsto = Sgp4.gstime(epoch + 2433281.5);
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
  }; // initl

  /*-----------------------------------------------------------------------------
  *
  *                             procedure sgp4init
  *
  *  this procedure initializes variables for sgp4.
  *
  *  author        : david vallado                  719-573-2600   28 jun 2005
  *
  *  inputs        :
  *    opsmode     - mode of operation afspc or improved 'a', 'i'
  *    whichconst  - which set of constants to use  72, 84
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
  *    PInvsq      -
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
  *    xPIdot      -
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


  Sgp4.sgp4init = function (satrec, options) {
    /* eslint-disable no-param-reassign */
    var _a = options.whichconst,
        whichconst = _a === void 0 ? 'wgs72' : _a,
        _b = options.opsmode,
        opsmode = _b === void 0 ? i : _b,
        _c = options.satn,
        satn = _c === void 0 ? satrec.satnum : _c,
        epoch = options.epoch,
        xbstar = options.xbstar,
        xecco = options.xecco,
        xargpo = options.xargpo,
        xinclo = options.xinclo,
        xndot = options.xndot,
        xnddot = options.xnddot,
        xmo = options.xmo,
        xno = options.xno,
        xnodeo = options.xnodeo;
    /* --------------------- local variables ------------------------ */

    /** Ootk -- Declared at the top of the file */

    /* ------------------------ initialization --------------------- */
    // sgp4fix divisor for divide by zero check on inclination
    // the old check used 1.0 + Math.cos(PI-1.0e-9), but then compared it to
    // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistency
    // temp4 = 1.5e-12;
    // ----------- set all near earth variables to zero ------------

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
    satrec.PInco = 0.0;
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
    satrec.xni = 0.0;
    /* ------------------------ earth constants ----------------------- */
    // sgp4fix identify constants and allow alternate values
    // this is now the only call for the constants

    var gravResults = Sgp4.getgravconst(whichconst);
    satrec.tumin = gravResults.tumin;
    satrec.mus = gravResults.mus;
    satrec.radiusearthkm = gravResults.radiusearthkm;
    satrec.xke = gravResults.xke;
    satrec.j2 = gravResults.j2;
    satrec.j3 = gravResults.j3;
    satrec.j4 = gravResults.j4;
    satrec.j3oj2 = gravResults.j3oj2; //-------------------------------------------------------------------------

    satrec.error = 0;
    satrec.operationmode = opsmode; // new alpha5 or 9-digit number

    /** Ootk -- Using JS code for string manipulation but same effect
     * Ex. A2525 = 102525
     * Ex. Z1234 = 351234
     */

    leadingChar = satn.split('')[0].toLowerCase(); // Using uppercase will break the -96 math.

    if (isNaN(leadingChar)) {
      satrec.satnum = parseInt(leadingChar.charCodeAt(0) - 96 + 9 + satrec.satnum.slice(1, 5)).toString();
    } else {
      satrec.satnum = satn;
    } // sgp4fix - note the following variables are also passed directly via satrec.
    // it is possible to streamline the sgp4init call by deleting the "x"
    // variables, but the user would need to set the satrec.* values first. we
    // include the additional assignments in case twoline2rv is not used.


    satrec.bstar = xbstar; // sgp4fix allow additional parameters in the struct

    satrec.ndot = xndot;
    satrec.nddot = xnddot;
    satrec.ecco = xecco;
    satrec.argpo = xargpo;
    satrec.inclo = xinclo;
    satrec.mo = xmo; // sgp4fix rename variables to clarify which mean motion is intended

    satrec.no = xno;
    satrec.nodeo = xnodeo; // single averaged mean elements
    // satrec.am = satrec.em = satrec.im = satrec.Om = satrec.mm = satrec.nm = 0.0;
    // ------------------------ earth constants -----------------------
    // sgp4fix identify constants and allow alternate values
    // getgravconst( whichconst, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2 );

    ss = 78.0 / satrec.radiusearthkm + 1.0; // sgp4fix use multiply for speed instead of pow

    qzms2ttemp = (120.0 - 78.0) / satrec.radiusearthkm;
    qzms2t = qzms2ttemp * qzms2ttemp * qzms2ttemp * qzms2ttemp;
    satrec.init = 'y';
    satrec.t = 0.0; // sgp4fix remove satn as it is not needed in initl

    initlOptions = {
      ecco: satrec.ecco,
      epoch: epoch,
      inclo: satrec.inclo,
      no: satrec.no,
      method: satrec.method,
      opsmode: satrec.operationmode,
      xke: satrec.xke,
      j2: satrec.j2
    };
    initlResult = Sgp4.initl(initlOptions);
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
    satrec.a = Math.pow(satrec.no * satrec.tumin, -2.0 / 3.0);
    satrec.alta = satrec.a * (1.0 + satrec.ecco) - 1.0;
    satrec.altp = satrec.a * (1.0 - satrec.ecco) - 1.0;
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

      if (rp < 220.0 / satrec.radiusearthkm + 1.0) {
        satrec.isimp = 1;
      }

      sfour = ss;
      qzms24 = qzms2t;
      perige = (rp - 1.0) * satrec.radiusearthkm; // - for perigees below 156 km, s and qoms2t are altered -

      if (perige < 156.0) {
        sfour = perige - 78.0;

        if (perige < 98.0) {
          sfour = 20.0;
        } // sgp4fix use multiply for speed instead of pow


        qzms24temp = (120.0 - sfour) / satrec.radiusearthkm;
        qzms24 = qzms24temp * qzms24temp * qzms24temp * qzms24temp;
        sfour = sfour / satrec.radiusearthkm + 1.0;
      }

      PInvsq = 1.0 / posq;
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
      temp1 = 1.5 * j2 * PInvsq * satrec.no;
      temp2 = 0.5 * temp1 * j2 * PInvsq;
      temp3 = -0.46875 * j4 * PInvsq * PInvsq * satrec.no;
      satrec.mdot = satrec.no + 0.5 * temp1 * rteosq * satrec.con41 + 0.0625 * temp2 * rteosq * (13.0 - 78.0 * cosio2 + 137.0 * cosio4);
      satrec.argpdot = -0.5 * temp1 * con42 + 0.0625 * temp2 * (7.0 - 114.0 * cosio2 + 395.0 * cosio4) + temp3 * (3.0 - 36.0 * cosio2 + 49.0 * cosio4);
      xhdot1 = -temp1 * cosio;
      satrec.nodedot = xhdot1 + (0.5 * temp2 * (4.0 - 19.0 * cosio2) + 2.0 * temp3 * (3.0 - 7.0 * cosio2)) * cosio;
      xPIdot = satrec.argpdot + satrec.nodedot;
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

      delmotemp = 1.0 + satrec.eta * Math.cos(satrec.mo);
      satrec.delmo = delmotemp * delmotemp * delmotemp;
      satrec.sinmao = Math.sin(satrec.mo);
      satrec.x7thm1 = 7.0 * cosio2 - 1.0; // --------------- deep space initialization -------------

      if (TAU / satrec.no >= 225.0) {
        satrec.method = 'd';
        satrec.isimp = 1;
        tc = 0.0;
        inclm = satrec.inclo;
        dscomOptions = {
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
          PInco: satrec.PInco,
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
        dscomResult = Sgp4.dscom(dscomOptions);
        satrec.e3 = dscomResult.e3;
        satrec.ee2 = dscomResult.ee2;
        satrec.peo = dscomResult.peo;
        satrec.pgho = dscomResult.pgho;
        satrec.pho = dscomResult.pho;
        satrec.PInco = dscomResult.PInco;
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
        var sinim_1 = dscomResult.sinim,
            cosim_1 = dscomResult.cosim,
            em_1 = dscomResult.em,
            emsq_1 = dscomResult.emsq,
            s1_1 = dscomResult.s1,
            s2_1 = dscomResult.s2,
            s3_1 = dscomResult.s3,
            s4_1 = dscomResult.s4,
            s5_1 = dscomResult.s5,
            ss1_1 = dscomResult.ss1,
            ss2_1 = dscomResult.ss2,
            ss3_1 = dscomResult.ss3,
            ss4_1 = dscomResult.ss4,
            ss5_1 = dscomResult.ss5,
            sz1_1 = dscomResult.sz1,
            sz3_1 = dscomResult.sz3,
            sz11_1 = dscomResult.sz11,
            sz13_1 = dscomResult.sz13,
            sz21_1 = dscomResult.sz21,
            sz23_1 = dscomResult.sz23,
            sz31_1 = dscomResult.sz31,
            sz33_1 = dscomResult.sz33;
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
        nm = dscomResult.nm, z1 = dscomResult.z1, z3 = dscomResult.z3, z11 = dscomResult.z11, z13 = dscomResult.z13, z21 = dscomResult.z21, z23 = dscomResult.z23, z31 = dscomResult.z31, z33 = dscomResult.z33;
        dpperOptions = {
          inclo: inclm,
          init: satrec.init,
          ep: satrec.ecco,
          inclp: satrec.inclo,
          nodep: satrec.nodeo,
          argpp: satrec.argpo,
          mp: satrec.mo,
          opsmode: satrec.operationmode
        };
        dpperResult = Sgp4.dpper(satrec, dpperOptions);
        satrec.ecco = dpperResult.ep;
        satrec.inclo = dpperResult.inclp;
        satrec.nodeo = dpperResult.nodep;
        satrec.argpo = dpperResult.argpp;
        satrec.mo = dpperResult.mp;
        argpm = 0.0;
        nodem = 0.0;
        mm = 0.0;
        dsinitOptions = {
          xke: xke,
          cosim: cosim_1,
          emsq: emsq_1,
          argpo: satrec.argpo,
          s1: s1_1,
          s2: s2_1,
          s3: s3_1,
          s4: s4_1,
          s5: s5_1,
          sinim: sinim_1,
          ss1: ss1_1,
          ss2: ss2_1,
          ss3: ss3_1,
          ss4: ss4_1,
          ss5: ss5_1,
          sz1: sz1_1,
          sz3: sz3_1,
          sz11: sz11_1,
          sz13: sz13_1,
          sz21: sz21_1,
          sz23: sz23_1,
          sz31: sz31_1,
          sz33: sz33_1,
          t: satrec.t,
          tc: tc,
          gsto: satrec.gsto,
          mo: satrec.mo,
          mdot: satrec.mdot,
          no: satrec.no,
          nodeo: satrec.nodeo,
          nodedot: satrec.nodedot,
          xPIdot: xPIdot,
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
          em: em_1,
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
        dsinitResult = Sgp4.dsinit(dsinitOptions);
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
      } // if omeosq = 0 ...

      /* finally propogate to zero epoch to initialize all others. */
      // sgp4fix take out check to let satellites process until they are actually below earth surface
      // if(satrec.error == 0)

    }

    Sgp4.propagate(satrec, 0);
    satrec.init = 'n'; //sgp4fix return boolean. satrec.error contains any error codes
    // return satrec; -- no reason to return anything in JS
  }; // sgp4init

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


  Sgp4.propagate = function (satrec, tsince) {
    /* ------------------ set mathematical constants --------------- */
    // sgp4fix divisor for divide by zero check on inclination
    // the old check used 1.0 + cos(PI-1.0e-9), but then compared it to
    // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistency

    /** Ootk -- Declared at the top of the page */
    // temp4 = 1.5e-12;
    // sgp4fix identify constants and allow alternate values
    // getgravconst( whichconst, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2 );
    vkmpersec = satrec.radiusearthkm * satrec.xke / 60.0; // --------------------- clear sgp4 error flag -----------------

    satrec.t = tsince;
    satrec.error = 0; //  ------- update for secular gravity and atmospheric drag -----

    xmdf = satrec.mo + satrec.mdot * satrec.t;
    argpdf = satrec.argpo + satrec.argpdot * satrec.t;
    nodedf = satrec.nodeo + satrec.nodedot * satrec.t;
    argpm = argpdf;
    mm = xmdf;
    t2 = satrec.t * satrec.t;
    nodem = nodedf + satrec.nodecf * t2;
    tempa = 1.0 - satrec.cc1 * satrec.t;
    tempe = satrec.bstar * satrec.cc4 * satrec.t;
    templ = satrec.t2cof * t2;

    if (satrec.isimp !== 1) {
      delomg = satrec.omgcof * satrec.t; //  sgp4fix use mutliply for speed instead of pow

      delmtemp = 1.0 + satrec.eta * Math.cos(xmdf);
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
    em = satrec.ecco;
    inclm = satrec.inclo;

    if (satrec.method === 'd') {
      tc = satrec.t;
      dspaceOptions = {
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
      dspaceResult = Sgp4.dspace(dspaceOptions);
      em = dspaceResult.em, argpm = dspaceResult.argpm, inclm = dspaceResult.inclm, mm = dspaceResult.mm, nodem = dspaceResult.nodem, nm = dspaceResult.nm;
    } // if methjod = d


    if (nm <= 0.0) {
      // printf("// error nm %f\n", nm);
      satrec.error = 2; // sgp4fix add return

      return {
        position: false,
        velocity: false
      };
    }

    am = Math.pow(xke / nm, x2o3) * tempa * tempa;
    nm = xke / Math.pow(am, 1.5);
    em -= tempe; // fix tolerance for error recognition
    // sgp4fix am is fixed from the previous nm check

    /* istanbul ignore next | This is no longer possible*/

    if (em >= 1.0 || em < -0.001) {
      // || (am < 0.95)
      // printf("// error em %f\n", em);
      satrec.error = 1; // sgp4fix to return if there is an error in eccentricity

      return {
        position: false,
        velocity: false
      };
    } //  sgp4fix fix tolerance to avoid a divide by zero


    if (em < 1.0e-6) {
      em = 1.0e-6;
    }

    mm += satrec.no * templ;
    xlm = mm + argpm + nodem;
    nodem %= TAU;
    argpm %= TAU;
    xlm %= TAU;
    mm = (xlm - argpm - nodem) % TAU; // sgp4fix recover singly averaged mean elements

    satrec.am = am;
    satrec.em = em;
    satrec.im = inclm;
    satrec.Om = nodem;
    satrec.om = argpm;
    satrec.mm = mm;
    satrec.nm = nm; // ----------------- compute extra mean quantities -------------

    sinim = Math.sin(inclm);
    cosim = Math.cos(inclm); // -------------------- add lunar-solar periodics --------------

    ep = em;
    xincp = inclm;
    argpp = argpm;
    nodep = nodem;
    mp = mm;
    sinip = sinim;
    cosip = cosim;

    if (satrec.method === 'd') {
      dpperParameters = {
        inclo: satrec.inclo,
        init: 'n',
        ep: ep,
        inclp: xincp,
        nodep: nodep,
        argpp: argpp,
        mp: mp,
        opsmode: satrec.operationmode
      };
      dpperResult = Sgp4.dpper(satrec, dpperParameters);
      ep = dpperResult.ep, nodep = dpperResult.nodep, argpp = dpperResult.argpp, mp = dpperResult.mp;
      xincp = dpperResult.inclp;

      if (xincp < 0.0) {
        xincp = -xincp;
        nodep += PI;
        argpp -= PI;
      }

      if (ep < 0.0 || ep > 1.0) {
        //  printf("// error ep %f\n", ep);
        satrec.error = 3; //  sgp4fix add return

        return {
          position: false,
          velocity: false
        };
      }
    } //  -------------------- long period periodics ------------------


    if (satrec.method === 'd') {
      sinip = Math.sin(xincp);
      cosip = Math.cos(xincp);
      satrec.aycof = -0.5 * j3oj2 * sinip; //  sgp4fix for divide by zero for xincp = 180 deg

      /* istanbul ignore next | This is no longer possible*/

      if (Math.abs(cosip + 1.0) > 1.5e-12) {
        satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / (1.0 + cosip);
      } else {
        satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / temp4;
      }
    }

    axnl = ep * Math.cos(argpp);
    temp = 1.0 / (am * (1.0 - ep * ep));
    aynl = ep * Math.sin(argpp) + temp * satrec.aycof;
    xl = mp + argpp + nodep + temp * satrec.xlcof * axnl; // --------------------- solve kepler's equation ---------------

    u = (xl - nodep) % TAU;
    eo1 = u;
    tem5 = 9999.9;
    ktr = 1; //    sgp4fix for kepler iteration
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


    ecose = axnl * coseo1 + aynl * sineo1;
    esine = axnl * sineo1 - aynl * coseo1;
    el2 = axnl * axnl + aynl * aynl;
    pl = am * (1.0 - el2);

    if (pl < 0.0) {
      //  printf("// error pl %f\n", pl);
      satrec.error = 4; //  sgp4fix add return

      return {
        position: false,
        velocity: false
      };
    }

    rl = am * (1.0 - ecose);
    rdotl = Math.sqrt(am) * esine / rl;
    rvdotl = Math.sqrt(pl) / rl;
    betal = Math.sqrt(1.0 - el2);
    temp = esine / (1.0 + betal);
    sinu = am / rl * (sineo1 - aynl - axnl * temp);
    cosu = am / rl * (coseo1 - axnl + aynl * temp);
    su = Math.atan2(sinu, cosu);
    sin2u = (cosu + cosu) * sinu;
    cos2u = 1.0 - 2.0 * sinu * sinu;
    temp = 1.0 / pl;
    temp1 = 0.5 * j2 * temp;
    temp2 = temp1 * temp; // -------------- update for short period periodics ------------

    if (satrec.method === 'd') {
      cosisq = cosip * cosip;
      satrec.con41 = 3.0 * cosisq - 1.0;
      satrec.x1mth2 = 1.0 - cosisq;
      satrec.x7thm1 = 7.0 * cosisq - 1.0;
    }

    mrt = rl * (1.0 - 1.5 * temp2 * betal * satrec.con41) + 0.5 * temp1 * satrec.x1mth2 * cos2u;
    /** Moved this up to reduce unnecessary computation if you are going to return false anyway */
    // sgp4fix for decaying satellites

    if (mrt < 1.0) {
      // printf("// decay condition %11.6f \n",mrt);
      satrec.error = 6;
      return {
        position: false,
        velocity: false
      };
    }

    su -= 0.25 * temp2 * satrec.x7thm1 * sin2u;
    xnode = nodep + 1.5 * temp2 * cosip * sin2u;
    xinc = xincp + 1.5 * temp2 * cosip * sinip * cos2u;
    mvt = rdotl - nm * temp1 * satrec.x1mth2 * sin2u / xke;
    rvdot = rvdotl + nm * temp1 * (satrec.x1mth2 * cos2u + 1.5 * satrec.con41) / xke; // --------------------- orientation vectors -------------------

    sinsu = Math.sin(su);
    cossu = Math.cos(su);
    snod = Math.sin(xnode);
    cnod = Math.cos(xnode);
    sini = Math.sin(xinc);
    cosi = Math.cos(xinc);
    xmx = -snod * cosi;
    xmy = cnod * cosi;
    ux = xmx * sinsu + cnod * cossu;
    uy = xmy * sinsu + snod * cossu;
    uz = sini * sinsu;
    vx = xmx * cossu - cnod * sinsu;
    vy = xmy * cossu - snod * sinsu;
    vz = sini * cossu; // --------- position and velocity (in km and km/sec) ----------

    r = {
      x: mrt * ux * satrec.radiusearthkm,
      y: mrt * uy * satrec.radiusearthkm,
      z: mrt * uz * satrec.radiusearthkm
    };
    v = {
      x: (mvt * ux + rvdot * vx) * vkmpersec,
      y: (mvt * uy + rvdot * vy) * vkmpersec,
      z: (mvt * uz + rvdot * vz) * vkmpersec
    };
    return {
      position: r,
      velocity: v
    };
  };
  /* -----------------------------------------------------------------------------
  *
  *                           function getgravconst
  *
  *  this function gets constants for the propagator. note that mu is identified to
  *    facilitiate comparisons with newer models. the common useage is wgs72.
  *
  *  author        : david vallado                  719-573-2600   21 jul 2006
  *
  *  inputs        :
  *    whichconst  - which set of constants to use  wgs72old, wgs72, wgs84
  *
  *  outputs       :
  *    tumin       - minutes in one time unit
  *    mu          - earth gravitational parameter
  *    radiusearthkm - radius of the earth in km
  *    xke         - reciprocal of tumin
  *    j2, j3, j4  - un-normalized zonal harmonic values
  *    j3oj2       - j3 divided by j2
  *
  *  locals        :
  *
  *  coupling      :
  *    none
  *
  *  references    :
  *    norad spacetrack report #3
  *    vallado, crawford, hujsak, kelso  2006
  --------------------------------------------------------------------------- */


  Sgp4.getgravconst = function (whichconst) {
    switch (whichconst) {
      // -- wgs-72 low precision str#3 constants --
      case 'wgs72old':
        mus = 398600.79964; // in km3 / s2

        radiusearthkm = 6378.135; // km

        xke = 0.0743669161; // reciprocal of tumin

        tumin = 1.0 / xke;
        j2 = 0.001082616;
        j3 = -0.00000253881;
        j4 = -0.00000165597;
        j3oj2 = j3 / j2;
        break;
      // ------------ wgs-72 constants ------------

      case 'wgs72':
        mus = 398600.8; // in km3 / s2

        radiusearthkm = 6378.135; // km

        xke = 60.0 / Math.sqrt(radiusearthkm * radiusearthkm * radiusearthkm / mus);
        tumin = 1.0 / xke;
        j2 = 0.001082616;
        j3 = -0.00000253881;
        j4 = -0.00000165597;
        j3oj2 = j3 / j2;
        break;

      case 'wgs84':
        // ------------ wgs-84 constants ------------
        mus = 398600.5; // in km3 / s2

        radiusearthkm = 6378.137; // km

        xke = 60.0 / Math.sqrt(radiusearthkm * radiusearthkm * radiusearthkm / mus);
        tumin = 1.0 / xke;
        j2 = 0.00108262998905;
        j3 = -0.00000253215306;
        j4 = -0.00000161098761;
        j3oj2 = j3 / j2;
        break;

      default:
        throw new Error("unknown gravity option " + whichconst);
    }

    return {
      tumin: tumin,
      mus: mus,
      radiusearthkm: radiusearthkm,
      xke: xke,
      j2: j2,
      j3: j3,
      j4: j4,
      j3oj2: j3oj2
    };
  }; // getgravconst

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


  Sgp4.createSatrec = function (tleLine1, tleLine2, whichconst, opsmode) {
    if (whichconst === void 0) {
      whichconst = 'wgs72';
    }

    if (opsmode === void 0) {
      opsmode = 'i';
    } // xpdotp = 1440.0 / (2.0 * PI); // 229.1831180523293;


    year = 0;
    satrec = {}; // sgp4fix no longer needed
    // getgravconst( whichconst, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2 );

    satrec.error = 0;
    satrec.satnum = tleLine1.substring(2, 7);
    satrec.epochyr = parseInt(tleLine1.substring(18, 20));
    satrec.epochdays = parseFloat(tleLine1.substring(20, 32));
    satrec.ndot = parseFloat(tleLine1.substring(33, 43));
    satrec.nddot = parseFloat(tleLine1.substring(44, 45) + "." + tleLine1.substring(45, 50) + "E" + tleLine1.substring(50, 52));
    satrec.bstar = parseFloat(tleLine1.substring(53, 54) + "." + tleLine1.substring(54, 59) + "E" + tleLine1.substring(59, 61)); // satrec.satnum = tleLine2.substring(2, 7);

    satrec.inclo = parseFloat(tleLine2.substring(8, 16));
    satrec.nodeo = parseFloat(tleLine2.substring(17, 25));
    satrec.ecco = parseFloat("." + tleLine2.substring(26, 33));
    satrec.argpo = parseFloat(tleLine2.substring(34, 42));
    satrec.mo = parseFloat(tleLine2.substring(43, 51));
    satrec.no = parseFloat(tleLine2.substring(52, 63)); // ---- find no, ndot, nddot ----

    satrec.no /= xpdotp; //   rad/min

    /** Ootk -- nexp and ibexp are calculated above using template literals */
    // satrec.nddot = satrec.nddot * Math.pow(10.0, nexp);
    // satrec.bstar = satrec.bstar * Math.pow(10.0, ibexp);
    // ---- convert to sgp4 units ----
    // satrec.a = (satrec.no * tumin) ** (-2.0 / 3.0);

    /** Ootk -- Not sure why the following two lines are added. 1st and 2nd derivatives aren't even used anymore */
    // satrec.ndot /= xpdotp * 1440.0; // ? * minperday
    // satrec.nddot /= xpdotp * 1440.0 * 1440;
    // ---- find standard orbital elements ----

    satrec.inclo *= DEG2RAD;
    satrec.nodeo *= DEG2RAD;
    satrec.argpo *= DEG2RAD;
    satrec.mo *= DEG2RAD; // sgp4fix not needed here
    // satrec.alta = satrec.a * (1.0 + satrec.ecco) - 1.0;
    // satrec.altp = satrec.a * (1.0 - satrec.ecco) - 1.0;
    // ----------------------------------------------------------------
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

    var _a = Sgp4.days2mdhms(year, satrec.epochdays),
        mon = _a.mon,
        day = _a.day,
        hr = _a.hr,
        minute = _a.minute,
        sec = _a.sec;

    var jdayRes = Sgp4.jday(year, mon, day, hr, minute, sec);
    satrec.jdsatepoch = jdayRes.jd + jdayRes.jdFrac; //  ---------------- initialize the orbit at sgp4epoch -------------------

    Sgp4.sgp4init(satrec, {
      whichconst: whichconst,
      opsmode: opsmode,
      satn: satrec.satnum,
      epoch: satrec.jdsatepoch - 2433281.5,
      xbstar: satrec.bstar,
      xecco: satrec.ecco,
      xargpo: satrec.argpo,
      xinclo: satrec.inclo,
      xndot: satrec.ndot,
      xnddot: satrec.nddot,
      xmo: satrec.mo,
      xno: satrec.no,
      xnodeo: satrec.nodeo
    });
    return satrec;
  }; // twoline2rv

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
   *    gstime      - greenwich sidereal time        0 to 2PI rad
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


  Sgp4.gstime = function (jdut1) {
    tut1 = (jdut1 - 2451545.0) / 36525.0;
    var temp = -6.2e-6 * tut1 * tut1 * tut1 + 0.093104 * tut1 * tut1 + (876600.0 * 3600 + 8640184.812866) * tut1 + 67310.54841; // sec

    temp = temp * DEG2RAD / 240.0 % TAU; // 360/86400 = 1/240, to deg, to rad
    //  ------------------------ check quadrants ---------------------

    if (temp < 0.0) {
      temp += TAU;
    }

    return temp;
  };

  Sgp4.sgn = function (x) {
    if (x < 0.0) {
      return -1.0;
    } else {
      return 1.0;
    }
  }; // sgn

  /* -----------------------------------------------------------------------------
   *
   *                           function mag
   *
   *  this procedure finds the magnitude of a vector.
   *
   *  author        : david vallado                  719-573-2600    1 mar 2001
   *
   *  inputs          description                    range / units
   *    vec         - vector
   *
   *  outputs       :
   *    mag         - answer
   *
   *  locals        :
   *    none.
   *
   *  coupling      :
   *    none.
   * --------------------------------------------------------------------------- */


  Sgp4.mag = function (x) {
    return Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
  }; // mag

  /* -----------------------------------------------------------------------------
  *
  *                           procedure cross_SGP4
  *
  *  this procedure crosses two vectors.
  *
  *  author        : david vallado                  719-573-2600    1 mar 2001
  *
  *  inputs          description                    range / units
  *    vec1        - vector number 1
  *    vec2        - vector number 2
  *
  *  outputs       :
  *    outvec      - vector result of a x b
  *
  *  locals        :
  *    none.
  *
  *  coupling      :
  *    mag           magnitude of a vector
  ---------------------------------------------------------------------------- */


  Sgp4.cross = function (vec1, vec2) {
    var outvec = [0, 0, 0];
    outvec[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
    outvec[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
    outvec[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];
    return outvec;
  }; // end cross

  /* -----------------------------------------------------------------------------
   *
   *                           function dot_SGP4
   *
   *  this function finds the dot product of two vectors.
   *
   *  author        : david vallado                  719-573-2600    1 mar 2001
   *
   *  inputs          description                    range / units
   *    vec1        - vector number 1
   *    vec2        - vector number 2
   *
   *  outputs       :
   *    dot         - result
   *
   *  locals        :
   *    none.
   *
   *  coupling      :
   *    none.
   * --------------------------------------------------------------------------- */


  Sgp4.dot = function (x, y) {
    return x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
  }; // dot

  /* -----------------------------------------------------------------------------
   *
   *                           procedure angle_SGP4
   *
   *  this procedure calculates the angle between two vectors.  the output is
   *    set to 999999.1 to indicate an undefined value.  be sure to check for
   *    this at the output phase.
   *
   *  author        : david vallado                  719-573-2600    1 mar 2001
   *
   *  inputs          description                    range / units
   *    vec1        - vector number 1
   *    vec2        - vector number 2
   *
   *  outputs       :
   *    theta       - angle between the two vectors  -pi to pi
   *
   *  locals        :
   *    temp        - temporary real variable
   *
   *  coupling      :
   *    dot           dot product of two vectors
   * --------------------------------------------------------------------------- */


  Sgp4.angle = function (vec1, vec2) {
    var small = 0.00000001;
    var unknown = 999999.1;
    /** Ootk -- original 'undefined' is protected in JS */

    var magv1 = Sgp4.mag(vec1);
    var magv2 = Sgp4.mag(vec2);

    if (magv1 * magv2 > small * small) {
      temp = Sgp4.dot(vec1, vec2) / (magv1 * magv2);
      if (Math.abs(temp) > 1.0) temp = Sgp4.sgn(temp) * 1.0;
      return Math.acos(temp);
    } else return unknown;
  }; // angle

  /* -----------------------------------------------------------------------------
   *
   *                           function asinh_SGP4
   *
   *  this function evaluates the inverse hyperbolic sine function.
   *
   *  author        : david vallado                  719-573-2600    1 mar 2001
   *
   *  inputs          description                    range / units
   *    xval        - angle value                                  any real
   *
   *  outputs       :
   *    arcsinh     - result                                       any real
   *
   *  locals        :
   *    none.
   *
   *  coupling      :
   *    none.
   * --------------------------------------------------------------------------- */


  Sgp4.asinh = function (xval) {
    return Math.log(xval + Math.sqrt(xval * xval + 1.0));
  }; // asinh

  /* -----------------------------------------------------------------------------
   *
   *                           function newtonnu_SGP4
   *
   *  this function solves keplers equation when the true anomaly is known.
   *    the mean and eccentric, parabolic, or hyperbolic anomaly is also found.
   *    the parabolic limit at 168ø is arbitrary. the hyperbolic anomaly is also
   *    limited. the hyperbolic sine is used because it's not double valued.
   *
   *  author        : david vallado                  719-573-2600   27 may 2002
   *
   *  revisions
   *    vallado     - fix small                                     24 sep 2002
   *
   *  inputs          description                    range / units
   *    ecc         - eccentricity                   0.0  to
   *    nu          - true anomaly                   -2pi to 2pi rad
   *
   *  outputs       :
   *    e0          - eccentric anomaly              0.0  to 2pi rad       153.02 ø
   *    m           - mean anomaly                   0.0  to 2pi rad       151.7425 ø
   *
   *  locals        :
   *    e1          - eccentric anomaly, next value  rad
   *    sine        - sine of e
   *    cose        - cosine of e
   *    ktr         - index
   *
   *  coupling      :
   *    asinh       - arc hyperbolic sine
   *
   *  references    :
   *    vallado       2013, 77, alg 5
   * --------------------------------------------------------------------------- */


  Sgp4.newtonnu = function (ecc, nu) {
    // ---------------------  implementation   ---------------------
    var e0 = 999999.9;
    var m = 999999.9;
    var small = 0.00000001; // --------------------------- circular ------------------------

    if (Math.abs(ecc) < small) {
      m = nu;
      e0 = nu;
    } // ---------------------- elliptical -----------------------
    else if (ecc < 1.0 - small) {
        var sine = Math.sqrt(1.0 - ecc * ecc) * Math.sin(nu) / (1.0 + ecc * Math.cos(nu));
        var cose = (ecc + Math.cos(nu)) / (1.0 + ecc * Math.cos(nu));
        e0 = Math.atan2(sine, cose);
        m = e0 - ecc * Math.sin(e0);
      } // -------------------- hyperbolic  --------------------
      else if (ecc > 1.0 + small) {
          if (ecc > 1.0 && Math.abs(nu) + 0.00001 < PI - Math.acos(1.0 / ecc)) {
            var sine = Math.sqrt(ecc * ecc - 1.0) * Math.sin(nu) / (1.0 + ecc * Math.cos(nu));
            e0 = Sgp4.asinh(sine);
            m = ecc * Sgp4.sinh(e0) - e0;
          }
        } // ----------------- parabolic ---------------------
        else if (Math.abs(nu) < 168.0 * PI / 180.0) {
            e0 = Math.tan(nu * 0.5);
            m = e0 + e0 * e0 * e0 / 3.0;
          }

    if (ecc < 1.0) {
      m = m % (2.0 * PI);
      if (m < 0.0) m = m + 2.0 * PI;
      e0 = e0 % (2.0 * PI);
    }

    return {
      e0: e0,
      m: m
    };
  }; // newtonnu


  Sgp4.sinh = function (x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
  };
  /* -----------------------------------------------------------------------------
   *
   *                           function rv2coe_SGP4
   *
   *  this function finds the classical orbital elements given the geocentric
   *    equatorial position and velocity vectors.
   *
   *  author        : david vallado                  719-573-2600   21 jun 2002
   *
   *  revisions
   *    vallado     - fix special cases                              5 sep 2002
   *    vallado     - delete extra check in inclination code        16 oct 2002
   *    vallado     - add constant file use                         29 jun 2003
   *    vallado     - add mu                                         2 apr 2007
   *
   *  inputs          description                    range / units
   *    r           - ijk position vector            km
   *    v           - ijk velocity vector            km / s
   *    mu          - gravitational parameter        km3 / s2
   *
   *  outputs       :
   *    p           - semilatus rectum               km
   *    a           - semimajor axis                 km
   *    ecc         - eccentricity
   *    incl        - inclination                    0.0  to pi rad
   *    omega       - right ascension of ascending node    0.0  to 2pi rad
   *    argp        - argument of perigee            0.0  to 2pi rad
   *    nu          - true anomaly                   0.0  to 2pi rad
   *    m           - mean anomaly                   0.0  to 2pi rad
   *    arglat      - argument of latitude      (ci) 0.0  to 2pi rad
   *    truelon     - true longitude            (ce) 0.0  to 2pi rad
   *    lonper      - longitude of periapsis    (ee) 0.0  to 2pi rad
   *
   *  locals        :
   *    hbar        - angular momentum h vector      km2 / s
   *    ebar        - eccentricity     e vector
   *    nbar        - line of nodes    n vector
   *    c1          - v**2 - u/r
   *    rdotv       - r dot v
   *    hk          - hk unit vector
   *    sme         - specfic mechanical energy      km2 / s2
   *    i           - index
   *    e           - eccentric, parabolic,
   *                  hyperbolic anomaly             rad
   *    temp        - temporary variable
   *    typeorbit   - type of orbit                  ee, ei, ce, ci
   *
   *  coupling      :
   *    mag         - magnitude of a vector
   *    cross       - cross product of two vectors
   *    angle       - find the angle between two vectors
   *    newtonnu    - find the mean anomaly
   *
   *  references    :
   *    vallado       2013, 113, alg 9, ex 2-5
   * --------------------------------------------------------------------------- */


  Sgp4.rv2coe = function (r, v, mus) {
    var nbar = [0, 0, 0];
    var ebar = [0, 0, 0];
    var p;
    var a;
    var ecc;
    var incl;
    var omega;
    var argp;
    var nu;
    var m;
    var arglat;
    var truelon;
    var lonper;
    var rdotv;
    var magn;
    var hk;
    var sme;
    var i; // switch this to an integer msvs seems to have probelms with this and strncpy_s
    //char typeorbit[2];

    var typeorbit; // here
    // typeorbit = 1 = 'ei'
    // typeorbit = 2 = 'ce'
    // typeorbit = 3 = 'ci'
    // typeorbit = 4 = 'ee'

    var halfpi = 0.5 * PI;
    var small = 0.00000001;
    var unknown = 999999.1;
    /** Ootk -- original undefined is illegal in JS */

    var infinite = 999999.9; // -------------------------  implementation   -----------------

    var magr = Sgp4.mag(r);
    var magv = Sgp4.mag(v); // ------------------  find h n and e vectors   ----------------

    var hbar = Sgp4.cross(r, v);
    var magh = Sgp4.mag(hbar);

    if (magh > small) {
      nbar[0] = -hbar[1];
      nbar[1] = hbar[0];
      nbar[2] = 0.0;
      magn = Sgp4.mag(nbar);
      c1 = magv * magv - mus / magr;
      rdotv = Sgp4.dot(r, v);

      for (i = 0; i <= 2; i++) {
        ebar[i] = (c1 * r[i] - rdotv * v[i]) / mus;
      }

      ecc = Sgp4.mag(ebar); // ------------  find a e and semi-latus rectum   ----------

      sme = magv * magv * 0.5 - mus / magr;
      if (Math.abs(sme) > small) a = -mus / (2.0 * sme);else a = infinite;
      p = magh * magh / mus; // -----------------  find inclination   -------------------

      hk = hbar[2] / magh;
      incl = Math.acos(hk); // --------  determine type of orbit for later use  --------
      // ------ elliptical, parabolic, hyperbolic inclined -------

      typeorbit = 1;

      if (ecc < small) {
        // ----------------  circular equatorial ---------------
        if (incl < small || Math.abs(incl - PI) < small) {
          typeorbit = 2;
        } else {
          // --------------  circular inclined ---------------
          typeorbit = 3;
        }
      } else {
        // - elliptical, parabolic, hyperbolic equatorial --
        if (incl < small || Math.abs(incl - PI) < small) {
          typeorbit = 4;
        }
      } // ----------  find right ascension of the ascending node ------------


      if (magn > small) {
        temp = nbar[0] / magn;
        if (Math.abs(temp) > 1.0) temp = Sgp4.sgn(temp);
        omega = Math.acos(temp);
        if (nbar[1] < 0.0) omega = TAU - omega;
      } else omega = unknown; // ---------------- find argument of perigee ---------------


      if (typeorbit == 1) {
        argp = Sgp4.angle(nbar, ebar);
        if (ebar[2] < 0.0) argp = TAU - argp;
      } else argp = unknown; // ------------  find true anomaly at epoch    -------------


      if (typeorbit == 1 || typeorbit == 4) {
        nu = Sgp4.angle(ebar, r);
        if (rdotv < 0.0) nu = TAU - nu;
      } else nu = unknown; // ----  find argument of latitude - circular inclined -----


      if (typeorbit == 3) {
        arglat = Sgp4.angle(nbar, r);
        if (r[2] < 0.0) arglat = TAU - arglat;
        m = arglat;
      } else arglat = unknown;

      if (ecc > small && typeorbit == 4) {
        temp = ebar[0] / ecc;
        if (Math.abs(temp) > 1.0) temp = Sgp4.sgn(temp);
        lonper = Math.acos(temp);
        if (ebar[1] < 0.0) lonper = TAU - lonper;
        if (incl > halfpi) lonper = TAU - lonper;
      } else lonper = unknown; // -------- find true longitude - circular equatorial ------


      if (magr > small && typeorbit == 2) {
        temp = r[0] / magr;
        if (Math.abs(temp) > 1.0) temp = Sgp4.sgn(temp);
        truelon = Math.acos(temp);
        if (r[1] < 0.0) truelon = TAU - truelon;
        if (incl > halfpi) truelon = TAU - truelon;
        m = truelon;
      } else truelon = unknown; // ------------ find mean anomaly for all orbits -----------


      if (typeorbit == 1 || typeorbit == 4) m = Sgp4.newtonnu(ecc, nu).m;
    } else {
      p = unknown;
      a = unknown;
      ecc = unknown;
      incl = unknown;
      omega = unknown;
      argp = unknown;
      nu = unknown;
      m = unknown;
      arglat = unknown;
      truelon = unknown;
      lonper = unknown;
    }

    return {
      p: p,
      a: a,
      ecc: ecc,
      incl: incl,
      omega: omega,
      argp: argp,
      nu: nu,
      m: m,
      arglat: arglat,
      truelon: truelon,
      lonper: lonper
    };
  }; // rv2coe

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
   *    jdfrac      - julian date fraction into day  days from 4713 bc
   *
   *  locals        :
   *    none.
   *
   *  coupling      :
   *    none.
   *
   *  references    :
   *    vallado       2013, 183, alg 14, ex 3-4
   *
   * --------------------------------------------------------------------------- */


  Sgp4.jday = function (year, mon, day, hr, minute, sec) {
    var jd = 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5; // use - 678987.0 to go to mjd directly

    var jdFrac = (sec + minute * 60.0 + hr * 3600.0) / 86400.0; // check that the day and fractional day are correct

    if (Math.abs(jdFrac) > 1.0) {
      var dtt = Math.floor(jdFrac);
      jd = jd + dtt;
      jdFrac = jdFrac - dtt;
    } // - 0.5*sgn(100.0*year + mon - 190002.5) + 0.5;


    return {
      jd: jd,
      jdFrac: jdFrac
    };
  }; // jday

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
   *    lmonth[13]  - int array containing the number of days per month
   *
   *  coupling      :
   *    none.
   * --------------------------------------------------------------------------- */


  Sgp4.days2mdhms = function (year, days) {
    lmonth = [31, year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    dayofyr = Math.floor(days); //  ----------------- find month and day of month ----------------

    /** Ootk -- Incorporated in the above declaration */
    // if ((year % 4) == 0)
    // lmonth[2] = 29;

    i = 1;
    inttemp = 0;

    while (dayofyr > inttemp + lmonth[i - 1] && i < 12) {
      inttemp += lmonth[i - 1];
      i += 1;
    }

    mon = i;
    day = dayofyr - inttemp; //  ----------------- find hours minutes and seconds -------------

    temp = (days - dayofyr) * 24.0;
    hr = Math.floor(temp);
    temp = (temp - hr) * 60.0;
    minute = Math.floor(temp);
    sec = (temp - minute) * 60.0;
    return {
      mon: mon,
      day: day,
      hr: hr,
      minute: minute,
      sec: sec
    };
  }; // days2mdhms

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
   *    jdfrac      - julian date fraction into day  days from 4713 bc
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
   *    vallado       2013, 203, alg 22, ex 3-13
   * --------------------------------------------------------------------------- */


  Sgp4.invjday = function (jd, jdfrac) {
    var leapyrs;
    var days; // check jdfrac for multiple days

    if (Math.abs(jdfrac) >= 1.0) {
      jd = jd + Math.floor(jdfrac);
      jdfrac = jdfrac - Math.floor(jdfrac);
    } // check for fraction of a day included in the jd


    var dt = jd - Math.floor(jd) - 0.5;

    if (Math.abs(dt) > 0.00000001) {
      jd = jd - dt;
      jdfrac = jdfrac + dt;
    }
    /* --------------- find year and days of the year --------------- */


    var temp = jd - 2415019.5;
    var tu = temp / 365.25;
    year = 1900 + Math.floor(tu);
    leapyrs = Math.floor((year - 1901) * 0.25);
    days = Math.floor(temp - ((year - 1900) * 365.0 + leapyrs));
    /* ------------ check for case of beginning of a year ----------- */

    if (days + jdfrac < 1.0) {
      year = year - 1;
      leapyrs = Math.floor((year - 1901) * 0.25);
      days = Math.floor(temp - ((year - 1900) * 365.0 + leapyrs));
    }
    /* ----------------- find remaining data  ------------------------- */


    var _a = Sgp4.days2mdhms(year, days + jdfrac),
        mon = _a.mon,
        day = _a.day,
        hr = _a.hr,
        minute = _a.minute,
        sec = _a.sec;

    return {
      year: year,
      mon: mon,
      day: day,
      hr: hr,
      minute: minute,
      sec: sec
    };
  }; // invjday


  return Sgp4;
}();



/***/ }),

/***/ 679:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_114628__) => {

/* harmony export */ __nested_webpack_require_114628__.d(__webpack_exports__, {
/* harmony export */   "Transforms": () => /* binding */ Transforms
/* harmony export */ });
/**
 * @author Theodore Kruczek.
 * @description Orbital Object ToolKit (OOTK) is a collection of tools for working
 * with satellites and other orbital objects.
 *
 * @file The Transforms module contains a collection of conversions not contained
 * in the original SGP4 library such as ECI to ECF and ECF to RAE. This was based
 * on some of the functions in satellite.js.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var PI = Math.PI;
var TAU = PI * 2; //https://tauday.com/tau-manifesto

var Transforms =
/** @class */
function () {
  function Transforms() {}

  Transforms.getDegLat = function (radians) {
    if (radians < -PI / 2 || radians > PI / 2) {
      throw new RangeError('Latitude radians must be in range [-PI/2; PI/2].');
    }

    return Transforms.rad2deg(radians);
  };

  Transforms.getDegLon = function (radians) {
    if (radians < -PI || radians > PI) {
      throw new RangeError('Longitude radians must be in range [-PI; PI].');
    }

    return Transforms.rad2deg(radians);
  };

  Transforms.getRadLat = function (degrees) {
    if (degrees < -90 || degrees > 90) {
      throw new RangeError('Latitude degrees must be in range [-90; 90].');
    }

    return Transforms.deg2rad(degrees);
  };

  Transforms.getRadLon = function (degrees) {
    if (degrees < -180 || degrees > 180) {
      throw new RangeError('Longitude degrees must be in range [-180; 180].');
    }

    return Transforms.deg2rad(degrees);
  };

  Transforms.rad2deg = function (radians) {
    return radians * 180 / PI;
  };

  Transforms.deg2rad = function (degrees) {
    return degrees * PI / 180.0;
  };

  Transforms.ecf2eci = function (ecf, gmst) {
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
  };

  Transforms.ecf2rae = function (lla, ecf) {
    var sezCoords = Transforms.lla2sez(lla, ecf);
    return Transforms.sez2rae(sezCoords);
  };
  /** eciToGeodetic converts eci coordinates to lla coordinates
   * @param {{array}} eci takes xyz coordinates
   * @param {number} gmst takes a number in gmst time
   * @returns {array} array containing lla coordinates
   */


  Transforms.eci2lla = function (eci, gmst) {
    // http://www.celestrak.com/columns/v02n03/
    var a = 6378.137;
    var b = 6356.7523142;
    var R = Math.sqrt(eci.x * eci.x + eci.y * eci.y);
    var f = (a - b) / a;
    var e2 = 2 * f - f * f;
    var lon = Math.atan2(eci.y, eci.x) - gmst;

    while (lon < -PI) {
      lon += TAU;
    }

    while (lon > PI) {
      lon -= TAU;
    }

    var kmax = 20;
    var k = 0;
    var lat = Math.atan2(eci.z, Math.sqrt(eci.x * eci.x + eci.y * eci.y));
    var C;

    while (k < kmax) {
      C = 1 / Math.sqrt(1 - e2 * (Math.sin(lat) * Math.sin(lat)));
      lat = Math.atan2(eci.z + a * C * e2 * Math.sin(lat), R);
      k += 1;
    }

    var alt = R / Math.cos(lat) - a * C;
    return {
      lon: lon,
      lat: lat,
      alt: alt
    };
  };

  Transforms.eci2ecf = function (eci, gmst) {
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
  };

  Transforms.lla2ecf = function (lla) {
    var lon = lla.lon,
        lat = lla.lat,
        alt = lla.alt;
    var a = 6378.137;
    var b = 6356.7523142;
    var f = (a - b) / a;
    var e2 = 2 * f - f * f;
    var normal = a / Math.sqrt(1 - e2 * (Math.sin(lat) * Math.sin(lat)));
    var x = (normal + alt) * Math.cos(lat) * Math.cos(lon);
    var y = (normal + alt) * Math.cos(lat) * Math.sin(lon);
    var z = (normal * (1 - e2) + alt) * Math.sin(lat);
    return {
      x: x,
      y: y,
      z: z
    };
  };

  Transforms.lla2sez = function (lla, ecf) {
    // http://www.celestrak.com/columns/v02n02/
    // TS Kelso's method, except I'm using ECF frame
    // and he uses ECI.
    var lon = lla.lon,
        lat = lla.lat;
    var observerEcf = Transforms.lla2ecf(lla);
    var rx = ecf.x - observerEcf.x;
    var ry = ecf.y - observerEcf.y;
    var rz = ecf.z - observerEcf.z; // top is short for topocentric

    var south = Math.sin(lat) * Math.cos(lon) * rx + Math.sin(lat) * Math.sin(lon) * ry - Math.cos(lat) * rz;
    var east = -Math.sin(lon) * rx + Math.cos(lon) * ry;
    var zenith = Math.cos(lat) * Math.cos(lon) * rx + Math.cos(lat) * Math.sin(lon) * ry + Math.sin(lat) * rz;
    return {
      s: south,
      e: east,
      z: zenith
    };
  };

  Transforms.rae2sez = function (rae) {
    // az,el,range to sez convertion
    var south = -rae.rng * Math.cos(rae.el) * Math.cos(rae.az);
    var east = rae.rng * Math.cos(rae.el) * Math.sin(rae.az);
    var zenith = rae.rng * Math.sin(rae.el);
    return {
      s: south,
      e: east,
      z: zenith
    };
  };

  Transforms.rae2ecf = function (rae, lla) {
    var obsEcf = Transforms.lla2ecf(lla);
    var sez = Transforms.rae2sez(rae); // some needed calculations

    var slat = Math.sin(lla.lat);
    var slon = Math.sin(lla.lon);
    var clat = Math.cos(lla.lat);
    var clon = Math.cos(lla.lon);
    var x = slat * clon * sez.s + -slon * sez.e + clat * clon * sez.z + obsEcf.x;
    var y = slat * slon * sez.s + clon * sez.e + clat * slon * sez.z + obsEcf.y;
    var z = -clat * sez.s + slat * sez.z + obsEcf.z;
    return {
      x: x,
      y: y,
      z: z
    };
  };
  /**
   * @param {Object} sez Containing SEZ coordinates
   * @param {Number} sez.s Positive horizontal vector S due south.
   * @param {Number} sez.e Positive horizontal vector E due east.
   * @param {Number} sez.z Vector Z normal to the surface of the earth (up).
   * @returns {Object} Rng, Az, El array
   */


  Transforms.sez2rae = function (sez) {
    var rng = Math.sqrt(sez.s * sez.s + sez.e * sez.e + sez.z * sez.z);
    var el = Math.asin(sez.z / rng);
    var az = Math.atan2(-sez.e, sez.s) + PI;
    return {
      rng: rng,
      az: az,
      el: el
    };
  };

  return Transforms;
}();



/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_122399__) => {

/* harmony export */ __nested_webpack_require_122399__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => /* binding */ Utils
/* harmony export */ });
/**
 * @author Theodore Kruczek.
 * @description Orbital Object ToolKit (OOTK) is a collection of tools for working
 * with satellites and other orbital objects.
 *
 * @file The Utils module.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var Utils =
/** @class */
function () {
  function Utils() {}

  Utils.distance = function (pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2) + Math.pow(pos1.z - pos2.z, 2));
  };

  Utils.dopplerFactor = function (location, position, velocity) {
    var mfactor = 7.292115e-5;
    var c = 299792.458; // Speed of light in km/s

    var range = {
      x: position.x - location.x,
      y: position.y - location.y,
      z: position.z - location.z,
      w: 0
    };
    range.w = Math.sqrt(Math.pow(range.x, 2) + Math.pow(range.y, 2) + Math.pow(range.z, 2));
    var rangeVel = {
      x: velocity.x + mfactor * location.y,
      y: velocity.y - mfactor * location.x,
      z: velocity.z
    };

    var sign = function sign(value) {
      return value >= 0 ? 1 : -1;
    };

    var rangeRate = (range.x * rangeVel.x + range.y * rangeVel.y + range.z * rangeVel.z) / range.w;
    return 1 + rangeRate / c * sign(rangeRate);
  };

  return Utils;
}();



/***/ }),

/***/ 70:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_124921__) => {

__nested_webpack_require_124921__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_124921__.d(__webpack_exports__, {
/* harmony export */   "Sgp4": () => /* reexport safe */ _ootk_sgp4_js__WEBPACK_IMPORTED_MODULE_0__.Sgp4,
/* harmony export */   "Transforms": () => /* reexport safe */ _ootk_transforms_js__WEBPACK_IMPORTED_MODULE_1__.Transforms,
/* harmony export */   "Utils": () => /* reexport safe */ _ootk_utils_js__WEBPACK_IMPORTED_MODULE_2__.Utils
/* harmony export */ });
/* harmony import */ var _ootk_sgp4_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_124921__(333);
/* harmony import */ var _ootk_transforms_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_124921__(679);
/* harmony import */ var _ootk_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_124921__(2);
/**
 * @author Theodore Kruczek.
 * @description Orbital Object ToolKit (OOTK) is a collection of tools for working
 * with satellites and other orbital objects.
 *
 * @copyright MIT License.
 * Copyright (c) 2020-2021 Theodore Kruczek
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_127263__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_127263__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_127263__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_127263__.o(definition, key) && !__nested_webpack_require_127263__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_127263__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_127263__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_127263__(70);
/******/ })()
;
});

/***/ }),

/***/ "./src/js/api/externalApi.ts":
/*!***********************************!*\
  !*** ./src/js/api/externalApi.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keepTrackApi": () => (/* binding */ keepTrackApi)
/* harmony export */ });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var keepTrackApi = {
    html: function (strings) {
        var e_1, _a;
        var placeholders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeholders[_i - 1] = arguments[_i];
        }
        try {
            for (var placeholders_1 = __values(placeholders), placeholders_1_1 = placeholders_1.next(); !placeholders_1_1.done; placeholders_1_1 = placeholders_1.next()) {
                var placeholder = placeholders_1_1.value;
                if (typeof placeholder !== 'string') {
                    throw Error('Invalid input');
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (placeholders_1_1 && !placeholders_1_1.done && (_a = placeholders_1.return)) _a.call(placeholders_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return String.raw.apply(String, __spreadArray([strings], __read(placeholders)));
    },
    register: function (params) {
        // If this is a valid callback
        if (typeof keepTrackApi.callbacks[params.method] !== 'undefined') {
            // Add the callback
            keepTrackApi.callbacks[params.method].push({ name: params.cbName, cb: params.cb });
        }
        else {
            throw new Error("Invalid callback \"" + params.method + "\"!");
        }
        return;
    },
    unregister: function (params) {
        // If this is a valid callback
        if (typeof keepTrackApi.callbacks[params.method] !== 'undefined') {
            for (var i = 0; i < keepTrackApi.callbacks[params.method].length; i++) {
                if (keepTrackApi.callbacks[params.method][i].name == params.cbName) {
                    keepTrackApi.callbacks[params.method].splice(i, 1);
                    return;
                }
            }
            // If we got this far, it means we couldn't find the callback
            throw new Error("Callback \"" + params.cbName + " not found\"!");
        }
        else {
            // Couldn't find the method
            throw new Error("Invalid callback \"" + params.method + "\"!");
        }
    },
    callbacks: {
        selectSatData: [],
        updateSelectBox: [],
        onCruncherReady: [],
        onCruncherMessage: [],
        uiManagerInit: [],
        uiManagerOnReady: [],
        bottomMenuClick: [],
        hideSideMenus: [],
        nightToggle: [],
        orbitManagerInit: [],
        adviceReady: [],
        drawManagerLoadScene: [],
        drawOptionalScenery: [],
        updateLoop: [],
        rmbMenuActions: [],
        rightBtnMenuAdd: [],
        updateDateTime: [],
        uiManagerFinal: [],
    },
    methods: {
        selectSatData: function (sat, satId) {
            keepTrackApi.callbacks.selectSatData.forEach(function (cb) { return cb.cb(sat, satId); });
        },
        updateSelectBox: function (sat) {
            keepTrackApi.callbacks.updateSelectBox.forEach(function (cb) { return cb.cb(sat); });
        },
        onCruncherReady: function () {
            keepTrackApi.callbacks.onCruncherReady.forEach(function (cb) { return cb.cb(); });
        },
        onCruncherMessage: function () {
            keepTrackApi.callbacks.onCruncherMessage.forEach(function (cb) { return cb.cb(); });
        },
        uiManagerInit: function () {
            keepTrackApi.callbacks.uiManagerInit.forEach(function (cb) { return cb.cb(); });
        },
        uiManagerOnReady: function () {
            keepTrackApi.callbacks.uiManagerOnReady.forEach(function (cb) { return cb.cb(); });
        },
        bottomMenuClick: function (iconName) {
            keepTrackApi.callbacks.bottomMenuClick.forEach(function (cb) { return cb.cb(iconName); });
        },
        hideSideMenus: function () {
            keepTrackApi.callbacks.hideSideMenus.forEach(function (cb) { return cb.cb(); });
        },
        nightToggle: function (gl, nightTexture, texture) {
            keepTrackApi.callbacks.nightToggle.forEach(function (cb) { return cb.cb(gl, nightTexture, texture); });
        },
        orbitManagerInit: function () {
            keepTrackApi.callbacks.orbitManagerInit.forEach(function (cb) { return cb.cb(); });
        },
        adviceReady: function () {
            keepTrackApi.callbacks.adviceReady.forEach(function (cb) { return cb.cb(); });
        },
        drawManagerLoadScene: function () {
            keepTrackApi.callbacks.drawManagerLoadScene.forEach(function (cb) { return cb.cb(); });
        },
        drawOptionalScenery: function () {
            keepTrackApi.callbacks.drawOptionalScenery.forEach(function (cb) { return cb.cb(); });
        },
        updateLoop: function () {
            keepTrackApi.callbacks.updateLoop.forEach(function (cb) { return cb.cb(); });
        },
        rmbMenuActions: function (menuName) {
            keepTrackApi.callbacks.rmbMenuActions.forEach(function (cb) { return cb.cb(menuName); });
        },
        rightBtnMenuAdd: function () {
            keepTrackApi.callbacks.rightBtnMenuAdd.forEach(function (cb) { return cb.cb(); });
        },
        updateDateTime: function (date) {
            keepTrackApi.callbacks.updateDateTime.forEach(function (cb) { return cb.cb(date); });
        },
        uiManagerFinal: function () {
            keepTrackApi.callbacks.uiManagerFinal.forEach(function (cb) { return cb.cb(); });
        },
    },
    programs: {
        timeManager: {},
        settingsManager: {},
        ColorScheme: {},
        drawManager: {},
        mapManager: {},
        missileManager: {},
        objectManager: {},
        orbitManager: {},
        photoManager: {},
        satSet: {},
        satellite: {},
        searchBox: {},
        sensorManager: {},
        starManager: {},
        uiManager: {},
        uiInput: {},
    },
};
window.keepTrackApi = keepTrackApi;



/***/ }),

/***/ "./src/js/lib/helpers.ts":
/*!*******************************!*\
  !*** ./src/js/lib/helpers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveAs": () => (/* reexport safe */ _external_file_saver_min_js__WEBPACK_IMPORTED_MODULE_0__.saveAs),
/* harmony export */   "stringPad": () => (/* binding */ stringPad),
/* harmony export */   "saveVariable": () => (/* binding */ saveVariable),
/* harmony export */   "saveCsv": () => (/* binding */ saveCsv),
/* harmony export */   "parseRgba": () => (/* binding */ parseRgba),
/* harmony export */   "hex2RgbA": () => (/* binding */ hex2RgbA),
/* harmony export */   "rgbCss": () => (/* binding */ rgbCss),
/* harmony export */   "truncateString": () => (/* binding */ truncateString)
/* harmony export */ });
/* harmony import */ var _external_file_saver_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external/file-saver.min.js */ "./src/js/lib/external/file-saver.min.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var stringPad = {
    pad: function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len)
            val = '0' + val;
        return val;
    },
    padEmpty: function (num, size) {
        var s = '   ' + num;
        return s.substr(s.length - size);
    },
    pad0: function (str, max) { return (str.length < max ? stringPad.pad0('0' + str, max) : str); },
};
var saveVariable = function (variable, filename) {
    try {
        filename = typeof filename == 'undefined' ? 'variable.txt' : filename;
        variable = JSON.stringify(variable);
        var blob = new Blob([variable], { type: 'text/plain;charset=utf-8' });
        if (!_external_file_saver_min_js__WEBPACK_IMPORTED_MODULE_0__.saveAs)
            throw new Error('saveAs is unavailable!');
        (0,_external_file_saver_min_js__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, filename);
    }
    catch (e) {
        console.debug('Unable to Save File!');
    }
};
var saveCsv = function (items, name) {
    try {
        var replacer_1 = function (value) { return (value === null ? '' : value); }; // specify how you want to handle null values here
        var header_1 = Object.keys(items[0]);
        var csv = items.map(function (row) { return header_1.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer_1); }).join(','); });
        csv.unshift(header_1.join(','));
        csv = csv.join('\r\n');
        var blob = new Blob([csv], { type: 'text/plain;charset=utf-8' });
        if (!_external_file_saver_min_js__WEBPACK_IMPORTED_MODULE_0__.saveAs)
            throw new Error('saveAs is unavailable!');
        (0,_external_file_saver_min_js__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, name + ".csv");
    }
    catch (error) {
        console.debug('Unable to Save File!');
    }
};
var parseRgba = function (str) {
    // eslint-disable-next-line no-useless-escape
    var _a = __read(str.match(/[\d\.]+/gu), 4), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
    r = (parseInt(r) / 255);
    g = parseInt(g) / 255;
    b = parseInt(b) / 255;
    a = parseFloat(a);
    if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
        console.warn('Bad RGBA! Using White Instead.');
        return [1, 1, 1, 1];
    }
    else {
        return [r, g, b, a];
    }
};
var hex2RgbA = function (hex) {
    // eslint-disable-next-line prefer-named-capture-group
    if (/^#([A-Fa-f0-9]{3}){1,2}$/u.test(hex)) {
        var c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        var r = ((parseInt(c) >> 16) & 255) / 255;
        var g = ((parseInt(c) >> 8) & 255) / 255;
        var b = (parseInt(c) & 255) / 255;
        return [r, g, b, 1];
    }
    console.warn('Bad Hex! Using White Instead.');
    return [1, 1, 1, 1];
};
var rgbCss = function (values) { return "rgba(" + values[0] * 255 + "," + values[1] * 255 + "," + values[2] * 255 + "," + values[3] + ")"; };
/**
 *
 * @param {string} str Input string
 * @param {number} num Maximum length of the string
 * @returns {string} Trunicated string
 */
var truncateString = function (str, num) {
    if (typeof str == 'undefined')
        return 'Unknown';
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
        return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...';
};


/***/ }),

/***/ "./src/js/timeManager/timeManager.ts":
/*!*******************************************!*\
  !*** ./src/js/timeManager/timeManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeManager": () => (/* binding */ timeManager)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/constants.js */ "./src/js/lib/constants.js");
/* harmony import */ var _app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/external/dateFormat.js */ "./src/js/lib/external/dateFormat.js");
/* harmony import */ var _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/api/externalApi */ "./src/js/api/externalApi.ts");




var timeManager = {
    dateObject: null,
    propTimeVar: null,
    datetimeInputDOM: null,
    timeTextStr: null,
    timeTextStrEmpty: null,
    now: null,
    propRealTime: null,
    propOffset: null,
    propRate: null,
    dt: null,
    drawDt: null,
    updatePropTime: null,
    propTime: null,
    propTimeCheck: null,
    setNow: null,
    setLastTime: null,
    setSelectedDate: null,
    lastTime: null,
    selectedDate: null,
    setDrawDt: null,
    setPropRateZero: null,
    tDS: null,
    iText: null,
    propRate0: null,
    dateDOM: null,
    getPropOffset: null,
    dateToISOLikeButLocal: null,
    localToZulu: null,
    getDayOfYear: null,
    dateFromDay: null,
    jday: null,
    init: function () {
        var settingsManager = _app_js_api_externalApi__WEBPACK_IMPORTED_MODULE_3__.keepTrackApi.programs.settingsManager;
        // Variables pulled from timeManager.jday function to reduce garbage collection
        var jDayStart;
        var jDayDiff;
        timeManager.dateObject = new Date();
        timeManager.propTimeVar = timeManager.dateObject;
        timeManager.datetimeInputDOM = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#datetime-input-tb');
        timeManager.timeTextStr = '';
        timeManager.timeTextStrEmpty = '';
        var propFrozen = Date.now(); // for when propRate 0
        timeManager.now = propFrozen; // (initialized as Date.now)
        timeManager.propRealTime = propFrozen; // actual time we're running it (initialized as Date.now)
        timeManager.propOffset = 0.0; // offset we're propagating to, msec
        timeManager.propRate = 1.0; // time rate multiplier for propagation
        timeManager.dt = 0;
        timeManager.drawDt = 0;
        timeManager.updatePropTime = function (propTimeVar) {
            if (typeof propTimeVar !== 'undefined' && propTimeVar !== null) {
                timeManager.propTimeVar.setTime(propTimeVar);
                return;
            }
            if (timeManager.propRate === 0) {
                timeManager.propTimeVar.setTime(Number(timeManager.propRealTime) + timeManager.propOffset);
            }
            else {
                timeManager.propTimeVar.setTime(Number(timeManager.propRealTime) + timeManager.propOffset + (Number(timeManager.now) - Number(timeManager.propRealTime)) * timeManager.propRate);
            }
        };
        // Propagation Time Functions
        timeManager.propTime = function () {
            if (timeManager.propRate === 0) {
                timeManager.propTimeVar.setTime(Number(timeManager.propRealTime) + timeManager.propOffset);
            }
            else {
                timeManager.propTimeVar.setTime(Number(timeManager.propRealTime) + timeManager.propOffset + (Number(timeManager.now) - Number(timeManager.propRealTime)) * timeManager.propRate);
            }
            return timeManager.propTimeVar;
        };
        timeManager.propTimeCheck = function (propTempOffset, propRealTime) {
            var now = new Date(); // Make a time variable
            now.setTime(Number(propRealTime) + propTempOffset); // Set the time variable to the time in the future
            return now;
        };
        timeManager.setNow = function (now, dt) {
            timeManager.now = now;
            timeManager.dt = dt;
            timeManager.setLastTime(timeManager.propTimeVar);
            timeManager.updatePropTime();
            timeManager.setSelectedDate(timeManager.propTimeVar);
            // Passing datetimeInput eliminates needing jQuery in main module
            if (timeManager.lastTime - timeManager.propTimeVar < 300 && (settingsManager.isEditTime || !settingsManager.cruncherReady)) {
                if (settingsManager.plugins.datetime) {
                    timeManager.datetimeInputDOM.val(timeManager.selectedDate.toISOString().slice(0, 10) + ' ' + timeManager.selectedDate.toISOString().slice(11, 19));
                }
            }
        };
        timeManager.setDrawDt = function (drawDt) {
            timeManager.drawDt = drawDt;
        };
        timeManager.setPropRateZero = function () {
            timeManager.propRate = 0;
            propFrozen = Date.now();
        };
        timeManager.setLastTime = function (now) {
            timeManager.lastTime = now;
        };
        timeManager.setSelectedDate = function (selectedDate) {
            timeManager.selectedDate = selectedDate;
            // This function only applies when datetime plugin is enabled
            if (settingsManager.plugins.datetime) {
                if (timeManager.lastTime - timeManager.propTimeVar < 300) {
                    timeManager.tDS = timeManager.propTimeVar.toJSON();
                    timeManager.timeTextStr = timeManager.timeTextStrEmpty;
                    for (timeManager.iText = 11; timeManager.iText < 20; timeManager.iText++) {
                        if (timeManager.iText > 11)
                            timeManager.timeTextStr += timeManager.tDS[timeManager.iText - 1];
                    }
                    timeManager.propRate0 = timeManager.propRate;
                    settingsManager.isPropRateChange = false;
                }
                // textContent doesn't remove the Node! No unecessary DOM changes everytime time updates.
                if (timeManager.dateDOM == null)
                    timeManager.dateDOM = window.document.getElementById('datetime-text');
                if (timeManager.dateDOM == null) {
                    // console.warn('Cant find datetime-text!');
                    return;
                }
                timeManager.dateDOM.textContent = timeManager.timeTextStr;
                // Load the current JDAY
                var jday = timeManager.getDayOfYear(timeManager.propTime());
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#jday').html(jday);
            }
        };
        timeManager.getPropOffset = function () {
            // timeManager.selectedDate = $('#datetime-text').text().substr(0, 19);
            if (!timeManager.selectedDate) {
                // console.error(timeManager);
                return;
            }
            // selectedDate = selectedDate.split(' ');
            // selectedDate = new Date(selectedDate[0] + 'T' + selectedDate[1] + 'Z');
            var today = new Date();
            // Not using local scope caused time to drift backwards!
            var propOffset = timeManager.selectedDate - today.getTime();
            return propOffset;
        };
        timeManager.dateToISOLikeButLocal = function (date) {
            var offsetMs = date.getTimezoneOffset() * 60 * 1000;
            var msLocal = date.getTime() - offsetMs;
            var dateLocal = new Date(msLocal);
            var iso = dateLocal.toISOString();
            iso = iso.replace('T', ' ');
            var isoLocal = iso.slice(0, 19) + ' ' + dateLocal.toString().slice(25, 31);
            return isoLocal;
        };
        timeManager.localToZulu = function (date) {
            date = (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(date, 'isoDateTime', true);
            date = date.split(' ');
            date = new Date(date[0] + 'T' + date[1] + 'Z');
            return date;
        };
        // Get Day of Year
        timeManager.getDayOfYear = function (date) {
            date = date || new Date();
            var _isLeapYear = function (date) {
                var year = date.getFullYear();
                if ((year & 3) !== 0)
                    return false;
                return year % 100 !== 0 || year % 400 === 0;
            };
            var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            var mn = date.getMonth();
            var dn = date.getUTCDate();
            var dayOfYear = dayCount[mn] + dn;
            if (mn > 1 && _isLeapYear(date))
                dayOfYear++;
            return dayOfYear;
        };
        timeManager.dateFromDay = function (year, day) {
            var date = new Date(year, 0); // initialize a date in `year-01-01`
            return new Date(date.setDate(day)); // add the number of days
        };
        timeManager.jday = function (year, mon, day, hr, minute, sec) {
            // from satellite.js
            if (!year) {
                // console.error('timeManager.jday should always have a date passed to it!');
                var now = new Date();
                jDayStart = new Date(now.getFullYear(), 0, 0);
                jDayDiff = now.getDate() - jDayStart.getDate();
                return Math.floor(jDayDiff / _app_js_lib_constants_js__WEBPACK_IMPORTED_MODULE_1__.MILLISECONDS_PER_DAY);
            }
            else {
                return (367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor((275 * mon) / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
                );
            }
        };
        // Initialize
        timeManager.updatePropTime();
        timeManager.setSelectedDate(timeManager.propTimeVar);
    },
};


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./src/analysis/js/analysis-tools.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js_lib_external_Chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/lib/external/Chart.js */ "./src/js/lib/external/Chart.js");
/* harmony import */ var _app_js_lib_external_Chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_js_lib_external_Chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/js/lib/external/dateFormat.js */ "./src/js/lib/external/dateFormat.js");
/* harmony import */ var _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/js/lib/lookangles.js */ "./src/js/lib/lookangles.js");
/* harmony import */ var _app_js_plugins_sensor_sensorList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/js/plugins/sensor/sensorList.js */ "./src/js/plugins/sensor/sensorList.js");
/* harmony import */ var _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/js/timeManager/timeManager.ts */ "./src/js/timeManager/timeManager.ts");
/* /////////////////////////////////////////////////////////////////////////////

(c) 2016-2020, Theodore Kruczek
http://keeptrack.space

All code is Copyright © 2016-2020 by Theodore Kruczek. All rights reserved.
No part of this web site may be reproduced, published, distributed, displayed,
performed, copied or stored for public or private use, without written
permission of the author.

No part of this code may be modified or changed or exploited in any way used
for derivative works, or offered for sale, or used to construct any kind of database
or mirrored at any other location without the express written permission of the author.

///////////////////////////////////////////////////////////////////////////// */






var requestInfo = {};
var isDrawApogee = false;
var isDrawPerigee = false;
var isDrawInc = false;
var isDrawEcc = false;
var isDrawRAAN = false;
var isDrawPeriod = false;
var isDrawRng = false;
var isDrawAz = false;
var isDrawEl = false;
var sensor;
var TAU = 2 * Math.PI; // PI * 2 -- This makes understanding the formulas easier

var DEG2RAD = TAU / 360; // Used to convert degrees to radians

var RAD2DEG = 360 / TAU; // Used to convert radians to degrees

var minutesPerDay = 1440;
var millisecondsPerDay = 1.15741e-8;
var raeType = 1;
_app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval = 60;

_app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.calculateLookAngles = function (sat, sensor, tableType, offset) {
  var propOffset;

  (function _inputValidation() {
    // Check if there is a sensor
    if (typeof sensor == 'undefined') {
      // Try using the current sensor if there is one
      if (_app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.sensorSelected()) {
        sensor = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.currentSensor;
      } else {
        console.error('getlookangles2 requires a sensor!');
        return;
      } // Simple Error Checking

    } else {
      if (typeof sensor.obsminaz == 'undefined') {
        console.error('sensor format incorrect');
        return;
      }

      sensor.observerGd = {
        // Array to calculate look angles in propagate()
        latitude: sensor.lat * DEG2RAD,
        longitude: sensor.lon * DEG2RAD,
        height: sensor.alt * 1 // Converts from string to number TODO: Find correct way to convert string to integer

      };
    }

    if (typeof sat == 'undefined') {
      console.error('sat parameter required!');
    } else {
      if (typeof sat.TLE1 == 'undefined' || typeof sat.TLE2 == 'undefined') {
        console.error('sat parameter invalid format!');
      }
    }

    if (typeof propOffset == 'undefined') {
      propOffset = 0;
    }

    if (typeof tableType == 'undefined') {
      tableType = 1;
    }

    if (typeof _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.isRiseSetLookangles == 'undefined') {
      _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.isRiseSetLookangles = false;
    }

    if (typeof _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval == 'undefined') {
      _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval = 1;
    }
  })(); // Set default timing settings. These will be changed to find look angles at different times in future.


  var propTempOffset = 0; // offset letting us propagate in the future (or past)

  var satrec = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.twoline2satrec(sat.TLE1, sat.TLE2); // perform and store sat init calcs

  var lookanglesTable = []; // Iniially no rows to the table

  var propagate2 = (propTempOffset, satrec) => {
    // var lookAngleRecord = {};
    var now = new Date(); // Make a time variable

    now.setTime(Number(Date.now()) + propTempOffset); // Set the time variable to the time in the future

    var j = _jday(now.getUTCFullYear(), now.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
    now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)


    j += now.getUTCMilliseconds() * millisecondsPerDay;
    var gmst = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.gstime(j);
    var m = (j - satrec.jdsatepoch) * minutesPerDay;
    var positionEci = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.sgp4(satrec, m);
    var positionEcf, lookAngles, azimuth, elevation, range;
    positionEcf = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.eciToEcf(positionEci.position, gmst); // positionEci.position is called positionEci originally

    var lla = {
      lat: sensor.observerGd.latitude,
      lon: sensor.observerGd.longitude,
      alt: sensor.observerGd.height
    };
    lookAngles = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.ecfToLookAngles(lla, positionEcf);
    azimuth = lookAngles.az * RAD2DEG;
    elevation = lookAngles.el * RAD2DEG;
    range = lookAngles.rng;

    if (sensor.obsminaz < sensor.obsmaxaz) {
      if (!(azimuth >= sensor.obsminaz && azimuth <= sensor.obsmaxaz && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && range <= sensor.obsmaxrange && range >= sensor.obsminrange) || azimuth >= sensor.obsminaz2 && azimuth <= sensor.obsmaxaz2 && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && range <= sensor.obsmaxrange2 && range >= sensor.obsminrange2) {
        if (tableType == 1) {
          return {
            time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
            rng: range,
            az: azimuth,
            el: elevation
          };
        } else if (tableType == 2) {
          return {
            time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
            rng: null,
            az: null,
            el: null
          };
        } else {
          return;
        }
      }
    }

    if ((azimuth >= sensor.obsminaz || azimuth <= sensor.obsmaxaz) && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && range <= sensor.obsmaxrange && range >= sensor.obsminrange || (azimuth >= sensor.obsminaz2 || azimuth <= sensor.obsmaxaz2) && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && range <= sensor.obsmaxrange2 && range >= sensor.obsminrange2) {
      if (_app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.isRiseSetLookangles) {
        // Previous Pass to Calculate first line of coverage
        var now1 = new Date();
        now1.setTime(Number(Date.now()) + propTempOffset - _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval * 1000);
        var j1 = _app_js_timeManager_timeManager_ts__WEBPACK_IMPORTED_MODULE_5__.timeManager.jday(now1.getUTCFullYear(), now1.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
        now1.getUTCDate(), now1.getUTCHours(), now1.getUTCMinutes(), now1.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

        j1 += now1.getUTCMilliseconds() * millisecondsPerDay;
        var gmst1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.gstime(j1);
        var m1 = (j1 - satrec.jdsatepoch) * minutesPerDay;
        var positionEci1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.sgp4(satrec, m1);
        var positionEcf1, lookAngles1, azimuth1, elevation1, range1;
        var _lla = {
          lat: sensor.observerGd.latitude,
          lon: sensor.observerGd.longitude,
          alt: sensor.observerGd.height
        };
        positionEcf1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.eciToEcf(positionEci1.position, gmst1); // positionEci.position is called positionEci originally

        lookAngles1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.ecfToLookAngles(_lla, positionEcf1);
        azimuth1 = lookAngles1.az * RAD2DEG;
        elevation1 = lookAngles1.el * RAD2DEG;
        range1 = lookAngles1.rng;

        if (!((azimuth >= sensor.obsminaz || azimuth <= sensor.obsmaxaz) && elevation >= sensor.obsminel && elevation <= sensor.obsmaxel && range <= sensor.obsmaxrange && range >= sensor.obsminrange) || (azimuth >= sensor.obsminaz2 || azimuth <= sensor.obsmaxaz2) && elevation >= sensor.obsminel2 && elevation <= sensor.obsmaxel2 && range <= sensor.obsmaxrange2 && range >= sensor.obsminrange2) {
          return {
            time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
            rng: range,
            az: azimuth,
            el: elevation
          };
        } else {
          // Next Pass to Calculate Last line of coverage
          now1.setTime(Number(Date.now()) + propTempOffset - _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval * 1000);
          j1 = _jday(now1.getUTCFullYear(), now1.getUTCMonth() + 1, // NOTE:, this function requires months in range 1-12.
          now1.getUTCDate(), now1.getUTCHours(), now1.getUTCMinutes(), now1.getUTCSeconds()); // Converts time to jday (TLEs use epoch year/day)

          j1 += now1.getUTCMilliseconds() * millisecondsPerDay;
          gmst1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.gstime(j1);
          m1 = (j1 - satrec.jdsatepoch) * minutesPerDay;
          positionEci1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.sgp4(satrec, m1);
          var _lla2 = {
            lat: sensor.observerGd.latitude,
            lon: sensor.observerGd.longitude,
            alt: sensor.observerGd.height
          };
          positionEcf1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.eciToEcf(positionEci1.position, gmst1); // positionEci.position is called positionEci originally

          lookAngles1 = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.ecfToLookAngles(_lla2, positionEcf1);
          azimuth1 = lookAngles1.az * RAD2DEG;
          elevation1 = lookAngles1.el * RAD2DEG;
          range1 = lookAngles1.rng;

          if (!((azimuth1 >= sensor.obsminaz || azimuth1 <= sensor.obsmaxaz) && elevation1 >= sensor.obsminel && elevation1 <= sensor.obsmaxel && range1 <= sensor.obsmaxrange && range1 >= sensor.obsminrange) || (azimuth1 >= sensor.obsminaz2 || azimuth1 <= sensor.obsmaxaz2) && elevation1 >= sensor.obsminel2 && elevation1 <= sensor.obsmaxel2 && range1 <= sensor.obsmaxrange2 && range1 >= sensor.obsminrange2) {
            return {
              time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
              rng: range,
              az: azimuth,
              el: elevation
            };
          }
        }

        if (tableType == 1) {
          return {
            time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
            rng: range,
            az: azimuth,
            el: elevation
          };
        } else if (tableType == 2) {
          return {
            time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
            rng: null,
            az: null,
            el: null
          };
        } else {
          return;
        }
      }

      return {
        time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
        rng: range,
        az: azimuth,
        el: elevation
      };
    }

    if (tableType == 1) {
      return {
        time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
        rng: range,
        az: azimuth,
        el: elevation
      };
    } else if (tableType == 2) {
      return {
        time: (0,_app_js_lib_external_dateFormat_js__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(now, 'isoDateTime', true),
        rng: null,
        az: null,
        el: null
      };
    } else {
      return;
    }
  };

  var _jday = (year, mon, day, hr, minute, sec) => {
    // from satellite.js
    if (!year) {
      // console.error('timeManager.jday should always have a date passed to it!');
      var now;
      now = Date.now();
      var jDayStart = new Date(now.getFullYear(), 0, 0);
      var jDayDiff = now - jDayStart;
      return Math.floor(jDayDiff / millisecondsPerDay);
    } else {
      return 367.0 * year - Math.floor(7 * (year + Math.floor((mon + 9) / 12.0)) * 0.25) + Math.floor(275 * mon / 9.0) + day + 1721013.5 + ((sec / 60.0 + minute) / 60.0 + hr) / 24.0 //  ut in days
      ;
    }
  };

  var tempLookanglesInterval;

  if (_app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.isRiseSetLookangles) {
    tempLookanglesInterval = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval;
    _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval = 1;
  }

  if (typeof _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesLength == 'undefined') {
    _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesLength = 1.0;
  }

  for (var i = 0; i < _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesLength * 24 * 60 * 60; i += _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval) {
    // satellite.lookanglesInterval in seconds
    propTempOffset = i * 1000 + propOffset; // Offset in seconds (msec * 1000)

    if (lookanglesTable.length <= 15000) {
      // Maximum of 1500 lines in the look angles table
      var lookanglesRow = propagate2(propTempOffset, satrec);

      if (typeof lookanglesRow != 'undefined') {
        lookanglesTable.push(lookanglesRow); // Update the table with looks for this 5 second chunk and then increase table counter by 1
      }
    }
  }

  if (_app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.isRiseSetLookangles) {
    _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval = tempLookanglesInterval;
  }

  return lookanglesTable;
};

var drawChart = data => {
  var labelInfo = [];
  var inclinationInfo = [];
  var periodInfo = [];
  var apogeeInfo = [];
  var perigeeInfo = [];
  var raanInfo = [];
  var eccInfo = [];
  var rngInfo = [];
  var azInfo = [];
  var elInfo = [];
  var dataInfo = [];
  var satData = [];

  (function processTLEs() {
    var RADIUS_OF_EARTH = 6371; // Radius of Earth in kilometers

    var satrec;

    for (var i = 0; i < data.length; i++) {
      satrec = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.twoline2satrec( // replace old TLEs
      data[i].TLE1, data[i].TLE2);
      var extra = {};
      extra.year = data[i].TLE1.substr(18, 2);
      extra.jday = data[i].TLE1.substr(20, 12); // keplerian elements

      extra.inclination = satrec.inclo * RAD2DEG; // rads

      extra.eccentricity = satrec.ecco;
      extra.raan = satrec.nodeo * RAD2DEG; // rads

      extra.argPe = satrec.argpo * RAD2DEG; // rads

      extra.meanMotion = satrec.no * 60 * 24 / (2 * Math.PI); // convert rads/minute to rev/day
      // fun other data

      extra.semiMajorAxis = Math.pow(8681663.653 / extra.meanMotion, 2 / 3);
      extra.semiMinorAxis = extra.semiMajorAxis * Math.sqrt(1 - Math.pow(extra.eccentricity, 2));
      extra.apogee = extra.semiMajorAxis * (1 + extra.eccentricity) - RADIUS_OF_EARTH;
      extra.perigee = extra.semiMajorAxis * (1 - extra.eccentricity) - RADIUS_OF_EARTH;
      extra.period = 1440.0 / extra.meanMotion;
      extra.TLE1 = data[i].TLE1;
      extra.TLE2 = data[i].TLE2;
      satData[i] = extra;
    }
  })();

  (function setupDataInfo() {
    if (typeof sensor == 'undefined' || isDrawInc || isDrawApogee || isDrawEcc || isDrawInc || isDrawPerigee || isDrawPeriod || isDrawRAAN) {
      for (var _i = 0; _i < satData.length; _i++) {
        labelInfo.push("".concat(satData[_i].year, " ").concat(satData[_i].jday));
      }
    }

    for (var _i2 = 0; _i2 < satData.length; _i2++) {
      inclinationInfo.push({
        x: _i2,
        y: satData[_i2].inclination
      });
    }

    for (var _i3 = 0; _i3 < satData.length; _i3++) {
      periodInfo.push({
        x: _i3,
        y: satData[_i3].period
      });
    }

    for (var _i4 = 0; _i4 < satData.length; _i4++) {
      perigeeInfo.push({
        x: _i4,
        y: satData[_i4].perigee
      });
    }

    for (var _i5 = 0; _i5 < satData.length; _i5++) {
      apogeeInfo.push({
        x: _i5,
        y: satData[_i5].apogee
      });
    }

    for (var _i6 = 0; _i6 < satData.length; _i6++) {
      raanInfo.push({
        x: _i6,
        y: satData[_i6].raan
      });
    }

    for (var _i7 = 0; _i7 < satData.length; _i7++) {
      eccInfo.push({
        x: _i7,
        y: satData[_i7].eccentricity
      });
    }

    if (typeof sensor != 'undefined' && !isDrawInc && !isDrawApogee && !isDrawEcc && !isDrawInc && !isDrawPerigee && !isDrawPeriod && !isDrawRAAN) {
      var lookAngles = _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.calculateLookAngles({
        TLE1: data[data.length - 1].TLE1,
        TLE2: data[data.length - 1].TLE2
      }, sensor, raeType);

      for (var i = 0; i < lookAngles.length; i++) {
        if (i > 0) {
          if ((Date.parse(lookAngles[i].time) - Date.parse(lookAngles[i - 1].time)) / 1000 > _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval) {
            labelInfo.push('Gap');
            rngInfo.push({
              x: i,
              y: null
            });
            azInfo.push({
              x: i,
              y: null
            });
            elInfo.push({
              x: i,
              y: null
            });
          } else {
            labelInfo.push("".concat(lookAngles[i].time));
            if (lookAngles[i].rng > 0) lookAngles[i].rng = lookAngles[i].rng / 10;
            rngInfo.push({
              x: i,
              y: lookAngles[i].rng
            });

            if (sensor.obsminaz > sensor.obsmaxaz && lookAngles[i].az > sensor.obsmaxaz) {
              if (sensor.obsminaz > 180) lookAngles[i].az = lookAngles[i].az - 360;
            }

            azInfo.push({
              x: i,
              y: lookAngles[i].az
            });
            elInfo.push({
              x: i,
              y: lookAngles[i].el
            });
          }
        } else {
          labelInfo.push("".concat(lookAngles[i].time));
          if (lookAngles[i].rng > 0) lookAngles[i].rng = lookAngles[i].rng / 10;
          rngInfo.push({
            x: i,
            y: lookAngles[i].rng
          });

          if (sensor.obsminaz > sensor.obsmaxaz && lookAngles[i].az > sensor.obsmaxaz) {
            if (sensor.obsminaz > 180) lookAngles[i].az = lookAngles[i].az - 360;
          }

          azInfo.push({
            x: i,
            y: lookAngles[i].az
          });
          elInfo.push({
            x: i,
            y: lookAngles[i].el
          });
        }
      }
    }

    if (isDrawInc) {
      dataInfo.push({
        label: 'Inclination (deg)',
        data: inclinationInfo,
        backgroundColor: 'rgba(255, 20, 20, 0.8)',
        borderColor: 'rgba(255, 20, 20, 0.8)',
        borderWidth: 3,
        fill: false
      });
    }

    if (isDrawPerigee) {
      dataInfo.push({
        label: 'Perigee (km)',
        data: perigeeInfo,
        backgroundColor: 'rgba(20, 255, 20, 0.8)',
        borderColor: 'rgba(20, 255, 20, 0.8)',
        borderWidth: 1,
        fill: false
      });
    }

    if (isDrawApogee) {
      dataInfo.push({
        label: 'Apogee (km)',
        data: apogeeInfo,
        backgroundColor: 'rgba(20, 20, 255, 0.8)',
        borderColor: 'rgba(20, 20, 255, 0.8)',
        borderWidth: 1,
        fill: false
      });
    }

    if (isDrawPeriod) {
      dataInfo.push({
        label: 'Period (min)',
        data: periodInfo,
        backgroundColor: 'rgba(255, 20, 255, 0.8)',
        borderColor: 'rgba(255, 20, 255, 0.8)',
        borderWidth: 3,
        fill: false
      });
    }

    if (isDrawRAAN) {
      dataInfo.push({
        label: 'RAAN (deg)',
        data: raanInfo,
        backgroundColor: 'rgba(255, 100, 20, 0.8)',
        borderColor: 'rgba(255, 100, 20, 0.8)',
        borderWidth: 3,
        fill: false
      });
    }

    if (isDrawEcc) {
      dataInfo.push({
        label: 'Eccentricity',
        data: eccInfo,
        backgroundColor: 'rgba(100, 200, 255, 0.8)',
        borderColor: 'rgba(100, 200, 255, 0.8)',
        borderWidth: 3,
        fill: false
      });
    }

    if (isDrawRng) {
      dataInfo.push({
        label: 'Range (10 km)',
        data: rngInfo,
        backgroundColor: 'rgba(255, 200, 100, 0.8)',
        borderColor: 'rgba(255, 200, 100, 0.8)',
        borderWidth: 3,
        spanGaps: false,
        fill: false
      });
    }

    if (isDrawAz) {
      dataInfo.push({
        label: 'Azimuth',
        data: azInfo,
        backgroundColor: 'rgba(100, 200, 255, 0.8)',
        borderColor: 'rgba(100, 200, 255, 0.8)',
        borderWidth: 3,
        spanGaps: false,
        fill: false
      });
    }

    if (isDrawEl) {
      dataInfo.push({
        label: 'Elevation',
        data: elInfo,
        backgroundColor: 'rgba(100, 255, 200, 0.8)',
        borderColor: 'rgba(100, 255, 200, 0.8)',
        borderWidth: 3,
        spanGaps: false,
        fill: false
      });
    }
  })(); // Actually Draw the Charts


  var context = document.getElementById('satChart').getContext('2d'); // eslint-disable-next-line no-unused-vars

  var myChart = new Chart(context, {
    type: 'line',
    data: {
      labels: labelInfo,
      datasets: dataInfo
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  (function resize() {
    var isRedraw = false;
    var canvas = document.getElementById('satChart'); // let context = canvas.getContext('2d');
    // resize the canvas to fill browser window dynamically

    window.addEventListener('resize', resizeCanvas, false);

    var resizeCanvas = () => {
      if (isRedraw) return;
      isRedraw = true;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      /**
       * Your drawings need to be inside this function otherwise they will be reset when
       * you resize the browser window and the canvas goes will be cleared.
       */

      isRedraw = false;
    };

    resizeCanvas();
  })();
};

var loadJSON = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1__.get("sathist/".concat(requestInfo.sat, ".json")).done(function (resp) {
    // if the .json loads then use it
    drawChart(resp);
  }).fail(function () {
    console.error('Could Not Load JSON File!');
  });
};

(function initParseFromGETVariables() {
  // This is an initial parse of the GET variables
  // A satSet focused one happens later.
  var queryStr = window.location.search.substring(1);
  var params = queryStr.split('&');

  for (var i = 0; i < params.length; i++) {
    var key = params[i].split('=')[0];
    var val = params[i].split('=')[1];

    switch (key) {
      case 'sat':
        requestInfo.sat = val;
        break;

      case 'type':
        if (val == 'inc') isDrawInc = true;
        if (val == 'ap') isDrawApogee = true;
        if (val == 'pe') isDrawPerigee = true;
        if (val == 'e') isDrawEcc = true;
        if (val == 'per') isDrawPeriod = true;
        if (val == 'ra') isDrawRAAN = true;

        if (val == 'all') {
          isDrawApogee = true;
          isDrawPerigee = true;
          isDrawInc = true;
          isDrawEcc = true;
          isDrawRAAN = true;
          isDrawPeriod = true;
        }

        if (val == 'rng') {
          isDrawRng = true;
          raeType = 3;
        }

        if (val == 'az') {
          isDrawAz = true;
          raeType = 3;
        }

        if (val == 'el') {
          isDrawEl = true;
          raeType = 3;
        }

        if (val == 'rae') {
          isDrawRng = true;
          isDrawAz = true;
          isDrawEl = true;
          raeType = 3;
        }

        break;

      case 'sensor':
        if (val == 'BLE') sensor = _app_js_plugins_sensor_sensorList_js__WEBPACK_IMPORTED_MODULE_4__.sensorList.BLE;
        if (val == 'CLR') sensor = _app_js_plugins_sensor_sensorList_js__WEBPACK_IMPORTED_MODULE_4__.sensorList.CLR;
        if (val == 'COD') sensor = _app_js_plugins_sensor_sensorList_js__WEBPACK_IMPORTED_MODULE_4__.sensorList.COD;
        if (val == 'FYL') sensor = _app_js_plugins_sensor_sensorList_js__WEBPACK_IMPORTED_MODULE_4__.sensorList.FYL;
        break;

      case 'lookanglesLength':
        _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesLength = parseFloat(val);
        break;

      case 'lookanglesInterval':
        _app_js_lib_lookangles_js__WEBPACK_IMPORTED_MODULE_3__.satellite.lookanglesInterval = parseInt(val);
        break;

      case 'raeType':
        raeType = parseInt(val);
        break;
    }
  }

  loadJSON();
})();
})();

/******/ })()
;
//# sourceMappingURL=analysis-tools.js.map