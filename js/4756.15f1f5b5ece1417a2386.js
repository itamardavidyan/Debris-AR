"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[4756],{4756:(e,o,r)=>{r.r(o),r.d(o,{init:()=>A});var t=r(9755),n=r.n(t),a=r(9755);class c{constructor(e,o){var r=[],t=null,n=null,c=!1,d=document.createElement("video");d.style.display="none";var i=e=>{e.data&&e.data.size>0&&r.push(e.data)},s=e=>{console.log("Recorder stopped: ",e);var o=new Blob(r,{type:t});d.src=window.URL.createObjectURL(o)};this.checkIfRecording=()=>c,this.setIsRecording=e=>{c=e},this.start=()=>{new Promise((function(e,o){var r;e("https:"===window.location.protocol||settingsManager.offline?"getDisplayMedia"in navigator?navigator.getDisplayMedia(r).catch((e=>(console.warn("Error:"+e),null))):"getDisplayMedia"in navigator.mediaDevices?navigator.mediaDevices.getDisplayMedia(r).catch((e=>(console.warn("Error:"+e),null))):(console.error("No Recording Support"),c=!1,a("#menu-record").removeClass("bmenu-item-selected"),a("#menu-record").addClass("bmenu-item-disabled"),M.toast({html:"Compatibility Error with Recording"}),a("#menu-record:animated").length||a("#menu-record").effect("shake",{distance:10}),!1):(console.error("No Recording Support in Http! Try Https!"),c=!1,a("#menu-record").removeClass("bmenu-item-selected"),a("#menu-record").addClass("bmenu-item-disabled"),M.toast({html:"Recording Only Available with HTTPS"}),a("#menu-record:animated").length||a("#menu-record").effect("shake",{distance:10}),!1))})).then((function(e){if(0!=e){c=!0,a("#menu-record").addClass("bmenu-item-selected");var A=e;d.srcObject=e;var l=["video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm;codecs=h264","video/mpeg"];for(var m in l)if(MediaRecorder.isTypeSupported(l[m])){t=l[m];break}null==t&&console.log("No supported type found for MediaRecorder");var u={mimeType:t,videoBitsPerSecond:o||1e7};r=[];try{n=new MediaRecorder(A,u)}catch(e){return c=!1,a("#menu-record").removeClass("bmenu-item-selected"),void console.warn("Exception while creating MediaRecorder:",e)}console.log("Created MediaRecorder",n,"with options",u),n.onstop=s,n.ondataavailable=i,n.start(100),console.log("MediaRecorder started",n)}}))},this.stop=()=>{n.stop(),console.log("Recorded Blobs: ",r),d.controls=!0},this.save=e=>{var o=e||"recording.webm",n=new Blob(r,{type:t}),a=window.URL.createObjectURL(n),c=document.createElement("a");c.style.display="none",c.href=a,c.download=o,document.body.appendChild(c),c.click(),setTimeout((()=>{document.body.removeChild(c),window.URL.revokeObjectURL(a)}),100)}}}var d,i,s=r(3135),A=function(){s.b.register({method:"uiManagerInit",cbName:"recorderManager",cb:function(){var e,o;n()("#bottom-icons").append(s.b.html(i||(e=['\n      <div id="menu-record" class="bmenu-item">\n        <img alt="video" src="" delayedsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO3cPWwbdRjH8e/jvKA2qHuFCgtUFMcXqGOxgFAkBOUlXdkgEhuDB0AIwQILS8vQEAkWhFo21nRBUBBigcZHsZ2Il04FISQWBhApceyHBZh6vTv73ur8PqvvHv/1//n/v0d3OoOIiIiIiIiIiIiIiIjINLOyB5BUfcfnZ6+zMnKeMjjpcBw4AtyW5/f2l+3/OWp03Mc9N8rsOIMqUrPjh/egzS7tERwFSDULFVfpABpb/uQevAccK3sseamVPYAbcreg429hXGSKJx+quALca42Q9x3Wyh5KESq3AhohZzggkw8V64Iaoa/hfHCTQxzjko34cDhDZ/8vfv7hIfsjk++O6HCSdDKTqMwWtHTZ6yNnI+pzg2vUeL530i4VOa68VSKAoOsLowEfAQsRh3R9npV+YL8XOa4iVOIa4AM2gPtu+BlctTkem8bJhwoE0Ah9jeiL7vUZ55nekv1W3IiKVWoAS5e9zk32fYwXui27UuCQChd5hU9732Na5d0Flb4FHXQKoGSVaENvdUHXFxjwhsOLRPyoo7YyBTChIPRVBrzjcNc45yuAMd1/xe8Z7rPuzqlJ6qQOIO+uoCxJu75mxw8PnFeGQ17FJn8apxWQQhD66p6zgXFnVjUVQAJLX/vx4Qzr7jyedW21oTGCjp8dzbBtJJr8L9PWVwAxHF4C5mIO+9Wc5/pNHklbXwFMZmCwvrvPvb2WXcAs9e2bzK4Bed87qlr3ZfA5TrvXsu1J6uginN4v5rzWa9mFLIopgOQGBu8OD/H6Tt3+zKqoAkjC+NSh3W/ad1mXVgAx3FjdbtrFvOqrC4qR5+RDASsgbfdy0J7EaQWUTAGUTAGUTAGUTAGULPcu6KB1NWlpBZRMAZRMAZRMAZRMAZQssy6oak+sbhVaATEWQ386z/oKIIY5m43QP1kM/UQe9RVAEs6j5nSDjp+r7/jtWZZWAMnNObRru3wfbPmzWRVVAOnd4cb5oOOfBVu+OGkxBTAmhxU3vgk6fu7ur/zIuHUUwGTmHNqHZv/dltxTt+IKIIbB28Ag5rCjbpxvhHyRtr4CiNFbtpdrQxYdPk5w+MNp6yuABLoP2o/by3bKjNPAT1nWVgAp9Jq2OQ8nzHkT+DuLmnpTPkbUPa7/XtLDkr2kF1VHK2BM3z5gV/ste8KM0wbXxq2jACbUa9omc9QNzgKjtOdrC4qhP+uYcgpARERERERERERERERERHL0D2BAC2IfonfQAAAAAElFTkSuQmCC">\n        <span class="bmenu-title">Record Video</span>\n        <div class="status-icon"></div>\n      </div>     \n    '],o=['\n      <div id="menu-record" class="bmenu-item">\n        <img alt="video" src="" delayedsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADnElEQVR4nO3cPWwbdRjH8e/jvKA2qHuFCgtUFMcXqGOxgFAkBOUlXdkgEhuDB0AIwQILS8vQEAkWhFo21nRBUBBigcZHsZ2Il04FISQWBhApceyHBZh6vTv73ur8PqvvHv/1//n/v0d3OoOIiIiIiIiIiIiIiIjINLOyB5BUfcfnZ6+zMnKeMjjpcBw4AtyW5/f2l+3/OWp03Mc9N8rsOIMqUrPjh/egzS7tERwFSDULFVfpABpb/uQevAccK3sseamVPYAbcreg429hXGSKJx+quALca42Q9x3Wyh5KESq3AhohZzggkw8V64Iaoa/hfHCTQxzjko34cDhDZ/8vfv7hIfsjk++O6HCSdDKTqMwWtHTZ6yNnI+pzg2vUeL530i4VOa68VSKAoOsLowEfAQsRh3R9npV+YL8XOa4iVOIa4AM2gPtu+BlctTkem8bJhwoE0Ah9jeiL7vUZ55nekv1W3IiKVWoAS5e9zk32fYwXui27UuCQChd5hU9732Na5d0Flb4FHXQKoGSVaENvdUHXFxjwhsOLRPyoo7YyBTChIPRVBrzjcNc45yuAMd1/xe8Z7rPuzqlJ6qQOIO+uoCxJu75mxw8PnFeGQ17FJn8apxWQQhD66p6zgXFnVjUVQAJLX/vx4Qzr7jyedW21oTGCjp8dzbBtJJr8L9PWVwAxHF4C5mIO+9Wc5/pNHklbXwFMZmCwvrvPvb2WXcAs9e2bzK4Bed87qlr3ZfA5TrvXsu1J6uginN4v5rzWa9mFLIopgOQGBu8OD/H6Tt3+zKqoAkjC+NSh3W/ad1mXVgAx3FjdbtrFvOqrC4qR5+RDASsgbfdy0J7EaQWUTAGUTAGUTAGUTAGULPcu6KB1NWlpBZRMAZRMAZRMAZRMAZQssy6oak+sbhVaATEWQ386z/oKIIY5m43QP1kM/UQe9RVAEs6j5nSDjp+r7/jtWZZWAMnNObRru3wfbPmzWRVVAOnd4cb5oOOfBVu+OGkxBTAmhxU3vgk6fu7ur/zIuHUUwGTmHNqHZv/dltxTt+IKIIbB28Ag5rCjbpxvhHyRtr4CiNFbtpdrQxYdPk5w+MNp6yuABLoP2o/by3bKjNPAT1nWVgAp9Jq2OQ8nzHkT+DuLmnpTPkbUPa7/XtLDkr2kF1VHK2BM3z5gV/ste8KM0wbXxq2jACbUa9omc9QNzgKjtOdrC4qhP+uYcgpARERERERERERERERERHL0D2BAC2IfonfQAAAAAElFTkSuQmCC">\n        <span class="bmenu-title">Record Video</span>\n        <div class="status-icon"></div>\n      </div>     \n    '],Object.defineProperty?Object.defineProperty(e,"raw",{value:o}):e.raw=o,i=e)))}}),s.b.register({method:"uiManagerOnReady",cbName:"recorderManager",cb:function(){try{d=new c(document.getElementById("keeptrack-canvas"))}catch(e){console.log(e)}}}),s.b.register({method:"bottomMenuClick",cbName:"recordVideo",cb:function(e){if("menu-record"!==e);else{if(d.checkIfRecording())return d.stop(),d.save("keeptrack.webm"),d.setIsRecording(!1),void n()("#menu-record").removeClass("bmenu-item-selected");try{d.start()}catch(e){M.toast({html:"Compatibility Error with Recording"}),d.setIsRecording(!1),n()("#menu-record").removeClass("bmenu-item-selected"),n()("#menu-record").addClass("bmenu-item-disabled"),n()("#menu-record:animated").length||n()("#menu-record").effect("shake",{distance:10})}}}})}}}]);