(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[64830],{988753:(e,n,t)=>{"use strict";t.d(n,{Yf:()=>h,jU:()=>x,LR:()=>S,RP:()=>w,mr:()=>O,bf:()=>j,cX:()=>C,xp:()=>E,BP:()=>N,zr:()=>T,N:()=>P,UC:()=>L,IN:()=>A,Lz:()=>k});var r=t(178598),o=t.n(r),i=t(997995),a=t.n(i),u=t(279003),c=t.n(u),l=t(489597),m=t.n(l),s=t(763036),f=t.n(s),p=t(882702),d=t(727418),y=t.n(d),v=t(972163),b=t(370415),g=new DOMParser,h={avi:"video/avi",gpx:"application/gpx+xml",kmz:"application/vnd.google-earth.kmz",kml:"application/vnd.google-earth.kml+xml",zip:"application/zip",json:"application/json",geojson:"application/json",wmc:"application/vnd.wmc"},x=function(e){return e.split(".").slice(-1)[0]},S=function(e,n,t){var r=new Blob([e],{type:t});o().saveAs(r,n)},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"snapshot.png",t=arguments.length>2?arguments[2]:void 0;S(a()(e),n,t)},O=function(e){return[].concat(c().parseZip(e))},j=function(e){var n=function(e){return[].slice.call(e.documentElement.getElementsByTagName("StyleMap")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("Style")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("LineStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("PointStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("PolyStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("IconStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("LabelStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("ListStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("BallonStyle")).map((function(e){return e.parentNode.removeChild(e)})),[].slice.call(e.documentElement.getElementsByTagName("styleUrl")).map((function(e){return e.parentNode.removeChild(e)})),e}(e);return[].concat(m().kml(n)).map((function(e){return y()({},e,{fileName:n.getElementsByTagName("name")[0].innerHTML})}))},C=function(e,n){return[].concat(m().gpx(e)).map((function(t){return y()({},t,{fileName:e.getElementsByTagName("name")[0]&&e.getElementsByTagName("name")[0].innerHTML||n})}))},E=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){n(r.result)},r.onerror=function(){t(r.error.name)},r.readAsArrayBuffer(e)}))},N=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){n(g.parseFromString(r.result,"text/xml"))},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},T=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){try{n(JSON.parse(r.result))}catch(e){t(e)}},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},P=function(e){var n=new(f());return new p.Promise((function(t,r){n.loadAsync(e).then((function(e){e.filter((function(e){return-1!==e.indexOf("kml")})).forEach((function(e){return e.async("string").then((function(e){t(g.parseFromString(e,"text/xml"))})).catch((function(e){r(e.message)}))}))}))}))},L=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new p.Promise((function(t,r){var o=new FileReader;o.onload=function(){try{var e=JSON.parse(o.result);t({geoJSON:e,errors:(0,v.$)(e).filter((function(e){return n||"message"!==e.level}))})}catch(e){r(e)}},o.onerror=function(){r(o.error.name)},o.readAsText(e)}))},A=function(e){return new p.Promise((function(n,t){var r=new FileReader;r.onload=function(){(0,b.H)(r.result,!0).then((function(e){return n(e)})).catch((function(e){return t(e)}))},r.onerror=function(){t(r.error.name)},r.readAsText(e)}))},k=function(e){var n=new(f());return new p.Promise((function(t){n.loadAsync(e).then((function(e){var n=e.files,r=void 0===n?{}:n,o=Object.keys(r).filter((function(e){return!r[e].dir&&0!==e.indexOf("__MACOSX")&&e.indexOf(".shp")===e.length-4})).map((function(e){return e.slice(0,-4)})).reduce((function(e,n){return e.concat(!r["".concat(n,".prj")]&&n||[])}),[]);t(o)}))}))}},370415:(e,n,t)=>{"use strict";t.d(n,{H:()=>Se,Y:()=>je});var r=t(505055),o=t(3674),i=t.n(o),a=t(252628),u=t.n(a),c=t(227361),l=t.n(c),m=t(91175),s=t.n(m),f=t(66604),p=t.n(f),d=t(187185),y=t.n(d),v=t(630998),b=t.n(v),g=t(478718),h=t.n(g),x=t(218721),S=t.n(x),w=t(493220),O=t.n(w),j=t(409062),C=t.n(j),E=t(957557),N=t.n(E),T=t(747037),P=t.n(T),L=t(385564),A=t.n(L),k=t(313311),B=t.n(k),F=t(406557),D=t.n(F);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(u.push(r.value),u.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||U(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==R(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n);if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===R(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,n){if(e){if("string"==typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$(e,n):void 0}}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=l()(n,"childObject",n);return i()(r).filter((function(e){return"$"!==e&&"_"!==e&&"$ns"!==e})).reduce((function(n,o){return[].concat(G(n),G(A()(r[o].map((function(n){var r=l()(n,"$ns",{});return r.uri!==e||r.local!==t?[]:[{params:l()(n,"$",{}),charContent:l()(n,"_"),childObject:N()(n,"$","_","$ns")}]})))))}),[])},q=function(e,n,t){return s()(J(e,n,t))},H=function(e,n,t){return u()(l()(n,"params",{})).reduce((function(n,r){return n||r.local===t&&r.uri===e&&r.value}),void 0)},X=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return u()(l()(e,"params",{})).reduce((function(e,n){var r=t.reduce((function(e,t){var r=P()(t)?{local:t,paramName:t,uri:""}:t,o=r.local,i=r.uri,a=r.paramName;return e||o===n.local&&i===n.uri&&a}),null);return r?z(z({},e),{},_({},r,n.value)):e}),{})},V=function(e,n,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return A()([[[/\&/g,"&amp;"]],e?[]:[[/\"/g,"&quot;"]],n?[]:[[/\'/g,"&apos;"]],t?[]:[[/\>/g,"&gt;"]],r?[]:[[/\</g,"&lt;"]]]).reduce((function(e,n){var t=M(n,2),r=t[0],o=t[1];return e.replace(r,o)}),o)},W=V.bind(null,!0,!0,!0,!1),Y=V.bind(null,!1,!1,!0,!1),Z=function(e){var n=e.ns,t=e.prefix;return"xmlns".concat(t?":".concat(t):"",'="').concat(n,'"')},K=function(e){var n=e.xmlns,t=e.name,r=e.value;return"".concat(n&&n.prefix?"".concat(n.prefix,":"):"").concat(t,'="').concat(Y(r.toString()),'"')},Q=function e(n){var t=n.name,r=n.xmlns,o=n.textContent,i=void 0===o?"":o,a=n.attributes,u=void 0===a?[]:a,c=n.children,m=void 0===c?[]:c,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\n",d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,v=function(e){return"".concat(p).concat(" ".repeat(d*f)).concat(e)},b="".concat(r&&r.prefix?"".concat(r.prefix,":"):"").concat(t),g=s.length>0?s:y()([r].concat(G(u.map((function(e){return e.xmlns})))).filter((function(e){return!!e})),(function(e,n){return e.ns===n.ns})),h=(s.length>0&&0===d||0===s.length)&&g.length>0;return(0===d?'<?xml version="1.0" encoding="UTF-8"?>'.concat(p):"")+" ".repeat(d*f)+"<".concat(b)+"".concat(h?" ".concat(g.map(Z).join(" ")):"").concat(u.length>0?" ":"")+u.map((function(e){return K(z(z({},e),{},{xmlns:e.xmlns&&z(z({},e.xmlns),{},{prefix:l()(B()(g,{ns:e.xmlns.ns}),"prefix")})}))})).join(" ")+(i.length>0||m.length>0?">".concat(W(i))+"".concat(m.map((function(n){return"".concat(p).concat(e(n,s,f,p,d+1))})).join(""))+(m.length>0?v:D())("</".concat(b,">")):"/>")},ee=function e(n){var t=n.children||[],r=n.attributes||[];return z(z({},n),{},{attributes:r.filter((function(e){return!!e})),children:t.filter((function(e){return!!e})).map(e)})},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return i()(e).filter((function(n){return void 0!==e[n]})).map((function(t){return{name:t,value:e[t],xmlns:n}}))},te=function(e,n){return e.filter((function(e){return!!e})).map((function(e){return z(z({},e),{},{xmlns:n})}))},re=t(624262),oe=t(162507);function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(u.push(r.value),u.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||ce(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ce(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,n){if(e){if("string"==typeof e)return le(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?le(e,n):void 0}}function le(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(Object(t),!0).forEach((function(n){fe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function fe(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==ie(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n);if("object"!==ie(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===ie(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var pe={maxExtent:[0,0,1e4,1e4],projection:"EPSG:900913",layerType:"wms"},de={root:{ns:"http://www.opengis.net/context"},xsi:{ns:"http://www.w3.org/2001/XMLSchema-instance",prefix:"xsi"},xlink:{ns:"http://www.w3.org/1999/xlink",prefix:"xlink"},ol:{ns:"http://openlayers.org/context",prefix:"ol"},ms:{ns:"http://geo-solutions.it/mapstore/context",prefix:"ms"}},ye={group:"background",id:"empty_background",source:"ol",title:"Empty Background",type:"empty",visibility:!0},ve=function(e){return"OGC:WMS"===e?"wms":pe.layerType},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.toLowerCase();return"true"===n||"1"===n},ge=function(e){return i()(e).filter((function(n){return void 0!==e[n]})).reduce((function(n,t){return se(se({},n),{},fe({},t,e[t]))}),{})},he=function(e){return!!(e&&e.minx&&e.miny&&e.maxx&&e.maxy)},xe=function(e){return!!(e&&he(e.bounds)&&e.crs)},Se=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new r.Parser({explicitRoot:!1,xmlns:!0});return new Promise((function(r){t.parseString(e,(function(e,t){if(e)throw new Error("General XML parsing error");var o=q.bind(null,de.root.ns),i=J.bind(null,de.root.ns),a=q.bind(null,de.ol.ns),u=q.bind(null,de.ms.ns),c=J.bind(null,de.ms.ns),m=H.bind(null,""),f=H.bind(null,de.xlink.ns),d=function(e){var n,t=X(e,"name","type"),r=t.name,o=t.type;switch(o){case"number":n=parseFloat(e.charContent);break;case"object":n=JSON.parse(e.charContent);break;case"boolean":n=be(e.charContent);break;default:n=e.charContent}return{name:r,type:o,value:n}},v=o({root:[t]},"ViewContext"),b=o(v,"General"),g=o(v,"LayerList"),h=m(v,"version");if(!v||!h)throw new Error("Not a WMC file!");var x=l()(o(b,"Title"),"charContent"),w=o(b,"Extension"),O=a(w,"maxExtent"),j=o(b,"BoundingBox"),E=p()(O&&X(O,"minx","miny","maxx","maxy")||X(j,"minx","miny","maxx","maxy"),parseFloat),N=he(E)&&[E.minx,E.miny,E.maxx,E.maxy]||pe.maxExtent,T=m(j,"SRS")||pe.projection,P={bounds:p()(X(j,"minx","miny","maxx","maxy"),parseFloat),crs:m(j,"SRS")},L=xe(P)?P:void 0,A=n?C()():void 0,k=i(g,"Layer").map((function(e){var n=o(e,"Extension"),t=o(e,"Server"),r=s()(i(o(e,"StyleList"),"Style").filter((function(e){return be(m(e,"current"))}))),d=l()(a(n,"transparent"),"charContent"),v=l()(a(n,"opacity"),"charContent"),b={maxExtent:p()(X(a(n,"maxExtent"),"minx","maxx","miny","maxy"),parseFloat),tileSize:p()(X(a(n,"tileSize"),"width","height"),parseInt),transparent:d&&be(d),isBaseLayer:be(l()(a(n,"isBaseLayer"),"charContent")),singleTile:be(l()(a(n,"singleTile"),"charContent")),opacity:v&&parseFloat(v)},g=u(n,"search"),h=c(u(n,"DimensionList"),"Dimension"),x=l()(u(n,"filter"),"charContent"),S={group:l()(u(n,"group"),"charContent"),search:g&&{url:f(g,"href"),type:m(g,"type")},dimensions:h.map((function(e){return{name:m(e,"name"),source:{type:m(e,"type"),url:f(e,"href")}}})),filter:x&&function(){try{return JSON.parse(x)}catch(e){return null}}()||void 0},w=i(o(e,"DimensionList"),"Dimension").map((function(e){return{name:m(e,"name"),units:m(e,"units"),unitSymbol:m(e,"unitSymbol"),default:m(e,"default"),values:l()(e,"charContent","").split(",")}})),O={id:C()(),visibility:!be(m(e,"hidden")),type:ve(m(t,"service")),url:f(o(t,"OnlineResource"),"href"),name:l()(o(e,"Name"),"charContent"),title:l()(o(e,"Title"),"charContent"),format:l()(s()(i(o(e,"FormatList"),"Format").filter((function(e){return be(m(e,"current"))}))),"charContent"),style:l()(o(r,"Name"),"charContent"),singleTile:b.singleTile,queryable:be(m(e,"queryable")),bbox:he(b.maxExtent)?{bounds:b.maxExtent,crs:T}:void 0,group:S.group||(b.isBaseLayer?"background":A),opacity:b.opacity,search:S.search,layerFilter:S.filter,dimensions:y()([].concat(ue(S.dimensions),ue(w)),(function(e,n){return e.name===n.name}))};return se(se({},ge(O)),{},{params:ge(O.params)})})),B=[].concat(ue(k.filter((function(e){return"background"===e.group}))),ue(k.filter((function(e){return"background"!==e.group})))),F=0===B.filter((function(e){return"background"===e.group&&e.visibility})).length?[ye].concat(ue(B)):B,D=u(w,"GroupList"),R=c(D,"Group").map((function(e){return{id:m(e,"id"),title:m(e,"title"),expanded:be(m(e,"expanded"))}})),M=D&&R||[].concat(ue(F.filter((function(e){return!e.group||"Default"===e.group})).length>0?[{id:"Default",title:"Default",expanded:!0}]:[]),ue(n?[{id:A,title:x||A}]:[])),I=u(w,"center"),z=se(se({},p()(X(I,"x","y"),parseFloat)),{},{crs:m(I,"crs")}),_=parseFloat(l()(u(w,"zoom"),"charContent")),G=u(w,"CatalogServices"),U=m(G,"selectedService"),$=c(G,"Service").map((function(e){return[m(e,"serviceName"),c(e,"Attribute")]})).reduce((function(e,n){var t=ae(n,2),r=t[0],o=t[1];return se(se({},e),{},fe({},r,o.map(d).reduce((function(e,n){var t=n.name,r=n.value;return se(se({},e),{},fe({},t,r))}),{})))}),{}),V={catalogServices:G&&{selectedService:U,services:$},map:{maxExtent:N,bbox:_?void 0:L,projection:T,backgrounds:[],groups:M,layers:F,center:S()(z,"x","y","crs")?z:void 0,zoom:_},version:2};r(V)}))}))},we=function(e){return e?"1":"0"},Oe={wms:"OGC:WMS"},je=function(e,n){var t=e.map,r=e.catalogServices,o=n.title,a=void 0===o?"MapStore Context":o,c=n.abstract,m=void 0===c?"This is a map exported from MapStore2.":c,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\n",d=function(e){return ne({type:"simple",href:e},de.xlink)},y=function(e){return{name:"OnlineResource",attributes:d(e)}},v=t.maxExtent,g=t.bbox,x=t.projection,S=t.layers,w=t.groups,j=t.center,C=t.zoom,E=function(e){var n=(0,oe.reprojectBbox)(e.bounds,e.crs,x);return{name:"maxExtent",attributes:ne({minx:n[0],miny:n[1],maxx:n[2],maxy:n[3]})}},N=te([{name:"maxExtent",attributes:ne({minx:v[0],miny:v[1],maxx:v[2],maxy:v[3]})}],de.ol),T=te([w.length>0?{name:"GroupList",children:w.map((function(e){return{name:"Group",xmlns:de.ms,attributes:ne({id:e.id,title:e.title,expanded:e.expanded})}}))}:null,r&&{name:"CatalogServices",attributes:r.selectedService&&ne({selectedService:r.selectedService}),children:O()(r.services).map((function(e){var n=ae(e,2),t=n[0],r=n[1];return{name:"Service",xmlns:de.ms,attributes:ne({serviceName:t}),children:i()(r).filter((function(e){return void 0!==r[e]&&null!==r[e]&&("string"==typeof r[e]||"boolean"==typeof r[e]||"number"==typeof r[e]||"bigint"==typeof r[e]||"object"===ie(r[e]))})).map((function(e){return{name:"Attribute",xmlns:de.ms,attributes:ne({name:e,type:ie(r[e])}),textContent:"object"===ie(r[e])?JSON.stringify(r[e]):r[e].toString()}}))}}))},j&&{name:"center",attributes:ne(j)},C&&{name:"zoom",textContent:C.toString()}],de.ms),P={name:"LayerList",children:S.filter((function(e){return"wms"===e.type})).map((function(e){var n=e.capabilities||{},t=(e.dimensions||[]).filter((function(e){return!!e.source})),r=[].concat(ue((e.dimensions||[]).filter((function(e){return!e.source}))),ue(l()(n,"dimension",[]).filter((function(e){var n=e.name;return b()(t,(function(e){return e.name===n}))>-1})).map((function(e){var n=e._default,t=e.name,r=e.units,o=e.unitSymbol,i=e.value;return{name:t,units:r,unitSymbol:o,values:(void 0===i?"":i).split(","),default:n}})))),o=l()(n,"style",[]).map((function(n){var t=n.name,r=n.title,o=n.legendURL,i=void 0===o?[]:o;return{name:t,title:r,legendURL:i[0]&&h()(i[0],"width","height","format","onlineResource"),current:t===e.style}})),i=te([e.bbox?E(e.bbox):null,{name:"singleTile",textContent:(e.singleTile||!1).toString()},{name:"transparent",textContent:(void 0===e.transparent||e.transparent).toString()},{name:"isBaseLayer",textContent:("background"===e.group).toString()},{name:"opacity",textContent:(void 0===e.opacity?1:e.opacity).toString()}],de.ol),a=te([{name:"group",textContent:e.group||"Default"},e.search&&{name:"search",attributes:[{name:"type",value:e.search.type}].concat(ue(d(e.search.url)))},e.layerFilter&&{name:"filter",textContent:JSON.stringify(e.layerFilter)},t.length>0&&{name:"DimensionList",children:t.map((function(e){var n=e.source,t=n.type,r=n.url,o=e.name;return{name:"Dimension",xmlns:de.ms,attributes:[].concat(ue(ne({name:o,type:t})),ue(d(r)))}}))}],de.ms);return{name:"Layer",attributes:ne(p()({queryable:e.queryable,hidden:!e.visibility},we)),children:[{name:"Name",textContent:e.name},{name:"Title",textContent:e.title},{name:"Server",attributes:ne({service:Oe[e.type],version:"1.3.0"}),children:[y((0,re.Hi)(e))]},r.length>0&&{name:"DimensionList",children:r.map((function(e){var n=e.name,t=e.units,r=e.unitSymbol,o=e.values,i=void 0===o?[]:o,a=e.default;return{name:"Dimension",attributes:ne({name:n,units:t,unitSymbol:r,default:a,multipleValues:i.length>1?"1":void 0}),textContent:i.toString()}}))},e.format&&{name:"FormatList",children:[{name:"Format",attributes:[{name:"current",value:"1"}],textContent:e.format}]},o.length>0&&{name:"StyleList",children:o.map((function(e){var n=e.name,t=e.title,r=e.current,o=e.legendURL,i=l()(o,"onlineResource.href");return{name:"Style",attributes:r&&ne({current:r})||[],children:[{name:"Name",textContent:n},{name:"Title",textContent:t},o&&{name:"LegendURL",attributes:ne(se({},h()(o,"width","height","format"))),children:i&&[y(i)]}]}}))},{name:"Extension",children:[].concat(ue(i),ue(a))}]}}))};return Q(ee({name:"ViewContext",xmlns:de.root,attributes:[{name:"version",value:"1.1.0"},{name:"schemaLocation",value:"http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd",xmlns:de.xsi}],children:[{name:"General",children:[{name:"Title",textContent:a},{name:"Abstract",textContent:m},{name:"BoundingBox",attributes:ne(xe(g)?se(se({},g.bounds),{},{SRS:g.crs}):{minx:v[0],miny:v[1],maxx:v[2],maxy:v[3],SRS:x})},{name:"Extension",children:[].concat(ue(N),ue(T))}]},P]}),u()(de),s,f)}},272810:()=>{},486799:()=>{}}]);