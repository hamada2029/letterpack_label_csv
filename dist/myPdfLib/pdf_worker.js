!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}({4:function(t,e){function o(t){return 1==t.length?["",t[0]]:t}function r(t){const e=t;return e.to_zip1=e.to_zip.slice(0,3),e.to_zip2=e.to_zip.slice(3,7),e.to_add=e.to_add.trim().split("\n"),1==e.to_add.length?e.to_add=["","","",e.to_add[0]]:2==e.to_add.length?e.to_add=["",e.to_add[0],"",e.to_add[1]]:3==e.to_add.length&&(e.to_add=["",e.to_add[0],e.to_add[1],e.to_add[2]]),e.to_add1=e.to_add[0],e.to_add2=e.to_add[1],e.to_add3=e.to_add[2],e.to_add4=e.to_add[3],e.to_name=e.to_name.trim().split("\n"),e.to_name=o(e.to_name),e.to_name1=e.to_name[0],e.to_name2=e.to_name[1],e.from_zip1=e.from_zip.slice(0,3),e.from_zip2=e.from_zip.slice(3,7),e.from_add=e.from_add.trim().split("\n"),e.from_add=o(e.from_add),e.from_add1=e.from_add[0],e.from_add2=e.from_add[1],e.from_name=e.from_name.trim().split("\n"),e.from_name=o(e.from_name),e.from_name1=e.from_name[0],e.from_name2=e.from_name[1],e.desc=e.desc.trim().split("\n"),e.desc=o(e.desc),e.desc1=e.desc[0],e.desc2=e.desc[1],e.df=""===e.desc[0]?3:0,e}onmessage=function(t){try{const e=t.data,o=e.info;if(o.c>0)return;const n=o.baseURL+"myPdfLib/static/",d=o.baseURL+"lib/static/";importScripts(n+"imagedata_plus.js"),importScripts(n+"imagedata_light.js"),importScripts(d+"pdfmake.min.js"),importScripts(n+"mplus-2m-regular.js"),importScripts(n+"position.js"+o.q),importScripts(n+"defineMultiDocCore.js"+o.q);const a={plus:imagedata_plus,light:imagedata_light},i=function(t){const e=[];for(let o=0;o<t.length;o++){const n=r(t[o]);e.push(n)}return e}(e.rows),s=_defineMultiDoc(i,a);pdfMake.fonts={mplus_2m:{normal:"mplus-2m-regular.ttf"}},pdfMake.createPdf(s).getBlob(function(t){postMessage({err:!1,result:t})})}catch(t){console.log(t),postMessage({err:!0,result:t})}}}});