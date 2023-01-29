(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),l=t(667),c=t.n(l),d=new URL(t(36),t.b),s=a()(r()),u=c()(d);s.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-image: url("+u+");\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.mainContainer {\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.introductionContainer {\n    padding: 5rem;\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n    height: auto;\n    border-radius: 1rem;\n    width: 50vw;\n    background-color: rgb(246, 233, 201, 0.8);\n    align-self: center;\n}\n\n.introduction {\n    font-size: 1.3rem;\n}\n\n.menu {\n    width: 100%;\n    padding: 1rem;\n    height: 13%;\n    background-color: rgb(0, 0, 0, 0.4);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.menuLi {\n    display: flex;\n    justify-content: center;\n    width: 15%;\n    padding: 1rem;\n    color: black;\n    font-size: 2rem;\n    font-weight: bold;\n    background-color: rgb(246, 233, 201, 0.8);\n    border-radius: 1rem;\n}\n\n.menuLi:hover {\n    cursor: pointer;\n    background-color: rgba(248, 248, 248, 0.4);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.menusContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 5px solid red;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.menusContainerLunch,\n.menusContainerDinner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 35vh;\n    width: 75%;\n    border: 5px solid black;\n    padding: 1rem;\n    gap: 1rem;\n    background-color: rgb(246, 233, 201, 0.8);\n}\n\n.titleContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.mealContainer {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    gap: 1rem;\n    justify-content: space-evenly;\n}\n\n.mealDiv {\n    border: 5px solid purple;\n    width: 33%;\n}",""]);const p=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);i&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],l=0;l<n.length;l++){var c=n[l],d=i.base?c[0]+i.base:c[0],s=o[d]||0,u="".concat(d," ").concat(s);o[d]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,i);i.byIndex=l,e.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var l=t(o[a]);e[l].references--}for(var c=i(n,r),d=0;d<o.length;d++){var s=t(o[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},36:(n,e,t)=>{n.exports=t.p+"16df162bc73af82e1905.jpg"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),o=t(569),a=t.n(o),l=t(565),c=t.n(l),d=t(216),s=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};function h(){const n=document.querySelector(".mainContainer");let e=n.lastElementChild;for(;e;)n.removeChild(e),e=n.lastElementChild;n.remove()}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const b=(n,e,t)=>({build:()=>{let i=document.createElement(n);for(let n in e)i.setAttribute(n,e[n]);return i.textContent=t,i}});function g(){let n=document.querySelectorAll("li");return n.forEach((n=>{n.addEventListener("click",(()=>{1==n.id?(h(),(()=>{const n=b("div",{class:"mainContainer"}).build();document.body.appendChild(n);const e=b("lu",{class:"menu"}).build();for(let n=1;n<=3;n++)if(1===n){const n=b("li",{class:"menuLi",id:1},"Menu").build();e.appendChild(n)}else if(2===n){const n=b("li",{class:"menuLi",id:2},"Location").build();e.appendChild(n)}else{const n=b("li",{class:"menuLi",id:3},"Contact us").build();e.appendChild(n)}n.appendChild(e);const t=b("div",{class:"menusContainer"}).build();n.appendChild(t);const i=b("div",{class:"menusContainerLunch"}).build();t.appendChild(i);const r=b("div",{class:"menusContainerDinner"}).build();t.appendChild(r);const o=b("div",{class:"titleContainer"}).build();i.appendChild(o);const a=b("h2").build();a.textContent="Lunch",o.appendChild(a);const l=b("p").build();l.textContent="11:30am - 4pm",o.appendChild(l);const c=b("div",{class:"mealContainer"}).build();i.append(c);for(let n=1;n<=3;n++){const e=b("div",{class:"mealDiv",id:n}).build();c.appendChild(e)}const d=b("div",{class:"titleContainer"}).build();r.appendChild(d);const s=b("h2").build();s.textContent="Dinner",d.appendChild(s);const u=b("p").build();u.textContent="6pm - 23pm",d.appendChild(u);const p=b("div",{class:"mealContainer"}).build();r.append(p);for(let n=1;n<=3;n++){const e=b("div",{class:"mealDiv",id:n}).build();p.appendChild(e)}g()})(),console.log("Menu content will be displayed ...")):2==n.id?(h(),v(),console.log("Location content will be displayed ...")):3==n.id?console.log("Contact us content will be displayed ..."):console.log("Load page")}))})),{liNode:n}}const v=()=>{const n=b("div",{class:"mainContainer"}).build();document.body.appendChild(n);const e=b("lu",{class:"menu"}).build();for(let n=1;n<=3;n++)if(1===n){const n=b("li",{class:"menuLi",id:1},"Menu").build();e.appendChild(n)}else if(2===n){const n=b("li",{class:"menuLi",id:2},"Location").build();e.appendChild(n)}else{const n=b("li",{class:"menuLi",id:3},"Contact us").build();e.appendChild(n)}n.appendChild(e),g()};v()})()})();