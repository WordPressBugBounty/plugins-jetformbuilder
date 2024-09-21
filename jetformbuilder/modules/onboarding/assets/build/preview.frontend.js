(()=>{"use strict";var e={996:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(168),o=r.n(n),a=r(433),i=r.n(a)()(o());i.push([e.id,"header.page-header,header.entry-header,.jfb-use-form-container{align-items:center;display:flex;justify-content:flex-start;flex-wrap:wrap;gap:2em}header.page-header h1,header.entry-header h1,.jfb-use-form-container h1{flex:0;text-wrap:nowrap}header.page-header .jfb-use-form-wrapper,header.entry-header .jfb-use-form-wrapper,.jfb-use-form-container .jfb-use-form-wrapper{flex:1}",""]);const s=i},433:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},168:e=>{e.exports=function(e){return e[1]}},673:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},262:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},357:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},657:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},598:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},626:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;const n=window.React,o=window.wp.element,a=window.wp.components,i=window.wp.i18n,s=window.wp.primitives,c=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})),u=window.jfb.useForm,d=window.wp.url,l=window.wp.data,p=+(0,d.getQueryArg)(window.location.href,"p"),f=document.createElement("div");f.classList.add("jfb-use-form-wrapper"),(0,o.createRoot)(f).render((0,n.createElement)((function(){const[e,t]=(0,o.useState)(!1),r=(0,l.useSelect)((e=>{const t=e("core").getEntityRecord("postType","jet-form-builder",p);return t?.meta?JSON.parse(t.meta._jf_args):{}}),[]);return(0,n.createElement)(a.SlotFillProvider,null,(0,n.createElement)(a.Button,{variant:"secondary",icon:c,onClick:()=>t(!0)},(0,i.__)("Use the form","jet-form-builder")),e&&(0,n.createElement)(u.ResponsiveModal,{title:(0,i.__)("Use the form","jet-form-builder"),onRequestClose:()=>t(!1)},(0,n.createElement)(u.FormAttributesContext.Provider,{value:{formId:p,args:r,shouldUpdateForm:!1}},(0,n.createElement)(u.UseFormRoot,null))))}),null));var m=r(673),v=r.n(m),h=r(598),w=r.n(h),y=r(262),b=r.n(y),g=r(657),x=r.n(g),j=r(357),E=r.n(j),S=r(626),A=r.n(S),C=r(996),M={};M.styleTagTransform=A(),M.setAttributes=x(),M.insert=b().bind(null,"head"),M.domAPI=w(),M.insertStyleElement=E(),v()(C.A,M),C.A&&C.A.locals&&C.A.locals;const{addAction:T}=JetPlugins.hooks;T("jet.fb.observe.after","jet-form-builder/use-form",(function(e){if(e.parent)return;const t=e.rootNode.ownerDocument,r=t.querySelector("header.page-header, header.entry-header");if(r)return void r.append(f);const n=t.querySelector(".wp-block-post-title");if(n){const e=document.createElement("div");return e.classList.add("jfb-use-form-container"),n.parentElement.insertBefore(e,n),e.append(n),void e.append(f)}e.rootNode.parentElement.insertBefore(f,e.rootNode)}))})();