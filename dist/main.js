(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var e=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},n=function(){function t(t){void 0===t&&(t={}),this.opts=e({},o,t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),r(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var o=Math.round(e.corners*e.width*500)/1e3+"px",n="none";!0===e.shadow?n="0 2px 4px #000":"string"==typeof e.shadow&&(n=e.shadow);for(var a=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,o=[],n=0,r=t.split(",");n<r.length;n++){var i=r[n].match(e);if(null!==i){var s=+i[2],a=+i[5],l=i[4],c=i[7];0!==s||l||(l=c),0!==a||c||(c=l),l===c&&o.push({prefix:i[1]||"",x:s,y:a,xUnits:l,yUnits:c,end:i[8]})}}return o}(n),l=0;l<e.lines;l++){var c=~~(360/e.lines*l+e.rotate),d=r(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:i(e.fadeColor,l),borderRadius:o,transformOrigin:"left",transform:"rotate("+c+"deg) translateX("+e.radius+"px)"}),f=l*e.direction/e.lines/e.speed;f-=1/e.speed;var u=r(document.createElement("div"),{width:"100%",height:"100%",background:i(e.color,l),borderRadius:o,boxShadow:s(a,c),animation:1/e.speed+"s linear "+f+"s infinite "+e.animation});d.appendChild(u),t.appendChild(d)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function r(t,e){for(var o in e)t.style[o]=e[o];return t}function i(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t,e){for(var o=[],n=0,r=t;n<r.length;n++){var i=r[n],s=a(i.x,i.y,e);o.push(i.prefix+s[0]+i.xUnits+" "+s[1]+i.yUnits+i.end)}return o.join(", ")}function a(t,e,o){var n=o*Math.PI/180,r=Math.sin(n),i=Math.cos(n);return[Math.round(1e3*(t*i+e*r))/1e3,Math.round(1e3*(-t*r+e*i))/1e3]}function l(t){let e=0;for(let n=0;n<t.length;n++)e+=(o=t.charCodeAt(n))>=0&&o<129||63728==o||o>=65377&&o<65440||o>=63729&&o<63732?.5:1;var o;return e}function c(t){!function(t,e){const o={to_zip:[3.5,1],to_tel1:[2,1],to_tel2:[2,1],to_tel3:[2,1],from_zip:[3.5,1],from_tel1:[2,1],from_tel2:[2,1],from_tel3:[2,1],to_add:[14,4],to_name:[13,2],from_add:[20,2],from_name:[20,2],desc:[19,2],plus_or_light:[2.5,1]},n=t.split("__")[0];if(!(n in o))return!1;const r=o[n],i=e.split("\n");return function(t,e){for(let o=0,n=t.length;o<n;o++)if(l(t[o])>e)return!0;return!1}(i,r[0])||i.length>r[1]}(t.id,t.value)?t.style.backgroundColor="":t.style.backgroundColor="#eeabaf"}function d(){c(this);const t=p();sessionStorage.rows=JSON.stringify(t)}function f(t,e){null==e&&(e=document);const o=e.querySelectorAll(t);return Array.prototype.slice.call(o,0)}function u(t){if(0==t.length)return;let e="";e+="<tr>\n<th></th>\n";for(let o in t[0])e+="\t<th>"+o+"</th>\n";e+="</tr>\n";for(let o=0;o<t.length;o++){const n=t[o];e+="<tr>\n";const r=o+1;e+=`<th>${r}</th>\n`;for(let t in n){const o=n[t];let i="wide";(t.indexOf("_zip")>-1||t.indexOf("_tel")>-1||t.indexOf("_or_")>-1)&&(i="narrow"),e+=`<td>\n                <textarea rows=4 class="${i} ${t}" id="${t}__${r}">${o}</textarea>\n            </td>`}e+="\n</tr>\n"}const o=document.getElementById("table1");o.innerHTML=e,f("textarea",o).forEach((function(t,e){c(t)})),f("textarea",o).forEach((function(t,e){t.onkeyup=d})),function(t){const e={to_zip:[7,1],to_tel1:[4,1],to_tel2:[4,1],to_tel3:[4,1],from_zip:[7,1],from_tel1:[4,1],from_tel2:[4,1],from_tel3:[4,1],plus_or_light:[5,1]};f("textarea.narrow",t).forEach((function(t,o){const n=t.id.split("__")[0],r=e[n][0];t.title=`半角${r}文字以下`}))}(o),function(t){const e={to_add:[14,4],to_name:[13,2],from_add:[20,2],from_name:[20,2],desc:[19,2]};f("textarea.wide",t).forEach((function(t,o){const n=t.id.split("__")[0],r=e[n][0],i=e[n][1];t.title=`${r}文字x${i}行以下`}))}(o),function(t){const e={to_zip:"お届け先郵便番号",to_add:"お届け先住所",to_name:"お届け先おなまえ",to_tel1:"お届け先電話番号1",to_tel2:"お届け先電話番号2",to_tel3:"お届け先電話番号3",from_zip:"ご依頼主郵便番号",from_add:"ご依頼主住所",from_name:"ご依頼主おなまえ",from_tel1:"ご依頼主電話番号1",from_tel2:"ご依頼主電話番号2",from_tel3:"ご依頼主電話番号3",desc:"品名",plus_or_light:"プラス or ライト"},o=Object.keys(e);f("th:nth-of-type(n+2)",t).forEach((function(t,n){const r=o[n];t.title=e[r]}))}(o)}function p(){const t=document.getElementById("table1"),e=[];f("tr:nth-of-type(1) th:nth-of-type(n+2)",t).forEach((function(t,o){e.push(t.innerText)}));var o=[];return f("tr:nth-of-type(n+2)",t).forEach((function(t,n){const r={};f("textarea",t).forEach((function(t,o){const n=e[o];r[n]=t.value})),o.push(r)})),o}function m(t){if(!window.Worker)throw alert("このブラウザでは利用できません。"),window.Worker;const e=window.URL||window.webkitURL,o=new e("./",function(){if(document.currentScript)return document.currentScript.src;var t=document.getElementsByTagName("script"),e=t[t.length-1];return e.src?e.src:void 0}()).href;let n="?210413.054745";0==o.indexOf("file://")&&(n="?"+Math.random());let r={};try{r=function(t){const r=new Blob(['importScripts("'+o+t+n+'");'],{type:"text/javascript"}),i=e.createObjectURL(r);return new Worker(i)}(t)}catch(e){console.log(e),r=new Worker(t)}return r.info={},r.info.baseURL=o,r.info.q=n,r.info.c=0,r}const _=4==parseInt("00100",2),h=m("myCsvLib/csvread_worker.js"),w=["to_zip","to_add","to_name","to_tel1","to_tel2","to_tel3","from_zip","from_add","from_name","from_tel1","from_tel2","from_tel3","desc","plus_or_light"].join(" ");function g(t){const e=t.target.files[0];window.sp_spin(),h.postMessage({file:e,info:h.info}),h.info.c++}h.onmessage=function(t){if(!t.data)throw window.sp_stop(),alert("Error: "+t.data),"error: "+t.data;let e=t.data;const o=Object.keys(e[0]);if(o.join(" ")!=w)throw window.sp_stop(),alert("フォーマットが違います。"),o;_&&(e=e.slice(0,5)),u(e),sessionStorage.rows=JSON.stringify(e),h.info.c=0,window.sp_stop()};var y=function(){try{return Function("return this")()||(0,eval)("this")}catch(e){return"object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t.g&&t.g.global===t.g?t.g:this}}();function v(t,e,o){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){x(n.response,e,o)},n.onerror=function(){console.error("could not download file")},n.send()}function b(t){var e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),e.status>=200&&e.status<=299}function E(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var x=y.saveAs||"object"!=typeof window||window!==y?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,o){var n=y.URL||y.webkitURL,r=document.createElement("a");e=e||t.name||"download",r.download=e,r.rel="noopener","string"==typeof t?(r.href=t,r.origin!==location.origin?b(r.href)?v(t,e,o):E(r,r.target="_blank"):E(r)):(r.href=n.createObjectURL(t),setTimeout((function(){n.revokeObjectURL(r.href)}),4e4),setTimeout((function(){E(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,e,o){if(e=e||t.name||"download","string"==typeof t)if(b(t))v(t,e,o);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){E(n)}))}else navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Depricated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,o),e)}:function(t,e,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return v(t,e,o);var r="application/octet-stream"===t.type,i=/constructor/i.test(y.HTMLElement)||y.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&i)&&"object"==typeof FileReader){var a=new FileReader;a.onloadend=function(){var t=a.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},a.readAsDataURL(t)}else{var l=y.URL||y.webkitURL,c=l.createObjectURL(t);n?n.location=c:location.href=c,n=null,setTimeout((function(){l.revokeObjectURL(c)}),4e4)}};const k=m("myCsvLib/csvsave_worker.js");function j(){const t=p();0!=t.length?(sessionStorage.rows=JSON.stringify(t),window.sp_spin(),k.postMessage({rows:t,info:k.info}),k.info.c++):alert("データがありません")}k.onmessage=function(t){if(!t.data)throw window.sp_stop(),alert("Error: "+t.data),"error: "+t.data;const e=t.data;x(e,"labels.csv"),k.info.c=0,window.sp_stop()};const z=[{to_zip:"9999999",to_add:"埼玉県北葛飾郡杉戸町\n木津内4-3-6\n木津内アパート316",to_name:"遠藤栄三郎様方\n遠藤栄四郎",to_tel1:"888",to_tel2:"8206",to_tel3:"5103",from_zip:"9999999",from_add:"依頼主県依頼主市依頼主町\n1-23-45",from_name:"依頼田 主雄\n主子",from_tel1:"888",from_tel2:"1234",from_tel3:"5678",desc:"インフィニティ\nジェム",plus_or_light:"plus"},{to_zip:"9999999",to_add:"徳島県吉野川市\n美郷月野\n3-6-12\n美郷月野マンション113",to_name:"伊藤沙也香",to_tel1:"888",to_tel2:"8207",to_tel3:"5104",from_zip:"9999999",from_add:"依頼主県依頼主市依頼主町\n1-23-45",from_name:"依頼田 主雄\n主子",from_tel1:"888",from_tel2:"1234",from_tel3:"5678",desc:"インフィニティ\nジェム",plus_or_light:"light"},{to_zip:"9999999",to_add:"大阪府堺市南区\n高尾1-15-18",to_name:"皆川孝次",to_tel1:"888",to_tel2:"8208",to_tel3:"5105",from_zip:"9999999",from_add:"依頼主県依頼主市依頼主町\n1-23-45",from_name:"依頼田 主雄\n主子",from_tel1:"888",from_tel2:"1234",from_tel3:"5678",desc:"インフィニティ\nジェム",plus_or_light:"plus"},{to_zip:"9999999",to_add:"福島県二本松市\n下山田2-14-3\nステージ下山田418",to_name:"田代完治",to_tel1:"888",to_tel2:"8209",to_tel3:"5106",from_zip:"9999999",from_add:"依頼主県依頼主市依頼主町\n1-23-45",from_name:"依頼田 主雄\n主子",from_tel1:"888",from_tel2:"1234",from_tel3:"5678",desc:"インフィニティ\nジェム",plus_or_light:"light"},{to_zip:"9999999",to_add:"和歌山県有田郡有田川町\n上六川4-1-11",to_name:"筒井宗雄",to_tel1:"888",to_tel2:"8210",to_tel3:"5107",from_zip:"9999999",from_add:"依頼主県依頼主市依頼主町\n1-23-45",from_name:"依頼田 主雄\n主子",from_tel1:"888",from_tel2:"1234",from_tel3:"5678",desc:"インフィニティ\nジェム",plus_or_light:"plus"}];function O(){u(z)}function B(){f("textarea").forEach((function(t,e){if(t.style.backgroundColor.length>0)throw alert("赤いセルの文字数を修正してください。"),"over length"}));let t=p();if(_&&(t=t.slice(0,5)),0===t.length)return void alert("データがありません");sessionStorage.rows=JSON.stringify(t),window.sp_spin(document.getElementById("spin"));const e=m("myPdfLib/pdf_worker.js");e.postMessage({rows:t,info:e.info}),e.info.c++,e.onmessage=function(t){if(t.data.err)throw window.sp_stop(),alert("Error: "+t.data.result),"error: "+t.data.result;x(t.data.result,"labels.pdf"),e.info.c=0,window.sp_stop()}}const S=new n({length:38,width:17,radius:45,top:"50%",position:"fixed",lines:8});window.sp_spin=function(){S.spin(document.getElementById("spin")),document.getElementById("mask").style.visibility="visible"},window.sp_stop=function(){S.stop(),document.getElementById("mask").style.visibility="hidden"},document.onreadystatechange=function(t){var e=document.readyState;if("interactive"==e)window.sp_spin();else if("complete"==e){_||(document.getElementById("adv").style.visibility="hidden"),document.getElementById("sample_link").onclick=O,document.getElementById("foot_title").onclick=function(){open("https://www.post.japanpost.jp/service/letterpack/")};const t=document.getElementById("file1");t.onchange=g,document.getElementById("load_btn").onclick=function(e){t.click()},document.getElementById("make_btn").onclick=B,document.getElementById("save_btn").onclick=j,document.getElementById("help_btn").onclick=function(){open("https://hamada2029.github.io/letterpack_label_csv/HELP.html")},null!==sessionStorage.getItem("rows")&&u(JSON.parse(sessionStorage.rows)),window.sp_stop(),document.getElementById("base_div").style.visibility="visible"}}})();