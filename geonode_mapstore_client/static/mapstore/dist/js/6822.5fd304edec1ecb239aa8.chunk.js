(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6822],{574851:t=>{"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var o=t.indexOf(e);return-1===o?[t]:[t.slice(0,o),t.slice(o+e.length)]}},88951:t=>{"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},444020:t=>{"use strict";var e="%[a-f0-9]{2}",o=new RegExp("("+e+")|([^%]+?)","gi"),r=new RegExp("("+e+")+","gi");function n(t,e){try{return[decodeURIComponent(t.join(""))]}catch(t){}if(1===t.length)return t;e=e||1;var o=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],n(o),n(r))}function i(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(o)||[],r=1;r<e.length;r++)e=(t=n(e,r).join("")).match(o)||[];return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},o=r.exec(t);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(t){var n=i(o[0]);n!==o[0]&&(e[o[0]]=n)}o=r.exec(t)}e["%C2"]="�";for(var s=Object.keys(e),a=0;a<s.length;a++){var u=s[a];t=t.replace(new RegExp(u,"g"),e[u])}return t}(t)}}},887157:(t,e,o)=>{var r=o(640554),n=o(588958);t.exports=function(t,e,o,i){var s=t.length;for((o=r(o))<0&&(o=-o>s?0:s+o),(i=void 0===i||i>s?s:r(i))<0&&(i+=s),i=o>i?0:n(i);o<i;)t[o++]=e;return t}},819873:(t,e,o)=>{var r=o(887157),n=o(816612);t.exports=function(t,e,o,i){var s=null==t?0:t.length;return s?(o&&"number"!=typeof o&&n(t,e,o)&&(o=0,i=s),r(t,e,o,i)):[]}},410240:(t,e,o)=>{var r=o(829750),n=o(880531),i=o(640554),s=o(479833);t.exports=function(t,e,o){return t=s(t),o=null==o?0:r(i(o),0,t.length),e=n(e),t.slice(o,o+e.length)==e}},588958:(t,e,o)=>{var r=o(829750),n=o(640554);t.exports=function(t){return t?r(n(t),0,4294967295):0}},102712:(t,e,o)=>{"use strict";const r=o(88951),n=o(444020),i=o(574851);function s(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function a(t,e){return e.decode?n(t):t}function u(t){return Array.isArray(t)?t.sort():"object"==typeof t?u(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function l(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function c(t){const e=(t=l(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function d(t,e){const o=function(t){let e;switch(t.arrayFormat){case"index":return(t,o,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=o):r[t]=o};case"bracket":return(t,o,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],o):r[t]=[o]:r[t]=o};case"comma":return(t,e,o)=>{const r="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;o[t]=r};default:return(t,e,o)=>{void 0!==o[t]?o[t]=[].concat(o[t],e):o[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),r=Object.create(null);if("string"!=typeof t)return r;if(!(t=t.trim().replace(/^[?#&]/,"")))return r;for(const n of t.split("&")){let[t,s]=i(e.decode?n.replace(/\+/g," "):n,"=");s=void 0===s?null:a(s,e),o(a(t,e),s,r)}for(const t of Object.keys(r)){const o=r[t];if("object"==typeof o&&null!==o)for(const t of Object.keys(o))o[t]=h(o[t],e);else r[t]=h(o,e)}return!1===e.sort?r:(!0===e.sort?Object.keys(r).sort():Object.keys(r).sort(e.sort)).reduce(((t,e)=>{const o=r[e];return Boolean(o)&&"object"==typeof o&&!Array.isArray(o)?t[e]=u(o):t[e]=o,t}),Object.create(null))}e.extract=c,e.parse=d,e.stringify=(t,e)=>{if(!t)return"";const o=function(t){switch(t.arrayFormat){case"index":return e=>(o,r)=>{const n=o.length;return void 0===r||t.skipNull&&null===r?o:null===r?[...o,[s(e,t),"[",n,"]"].join("")]:[...o,[s(e,t),"[",s(n,t),"]=",s(r,t)].join("")]};case"bracket":return e=>(o,r)=>void 0===r||t.skipNull&&null===r?o:null===r?[...o,[s(e,t),"[]"].join("")]:[...o,[s(e,t),"[]=",s(r,t)].join("")];case"comma":return e=>(o,r)=>null==r||0===r.length?o:0===o.length?[[s(e,t),"=",s(r,t)].join("")]:[[o,s(r,t)].join(",")];default:return e=>(o,r)=>void 0===r||t.skipNull&&null===r?o:null===r?[...o,s(e,t)]:[...o,[s(e,t),"=",s(r,t)].join("")]}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),r=Object.assign({},t);if(e.skipNull)for(const t of Object.keys(r))void 0!==r[t]&&null!==r[t]||delete r[t];const n=Object.keys(r);return!1!==e.sort&&n.sort(e.sort),n.map((r=>{const n=t[r];return void 0===n?"":null===n?s(r,e):Array.isArray(n)?n.reduce(o(r),[]).join("&"):s(r,e)+"="+s(n,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>({url:l(t).split("?")[0]||"",query:d(c(t),e)})},900260:(t,e,o)=>{"use strict";var r,n=(r=o(151659))&&r.__esModule?r:{default:r};e.Z=n.default},151659:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),s=o(124852),a=l(s),u=l(o(423482));function l(t){return t&&t.__esModule?t:{default:t}}var c={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},h={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},d={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},f={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},p={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},o.overlayClicked=o.overlayClicked.bind(o),o.onTouchStart=o.onTouchStart.bind(o),o.onTouchMove=o.onTouchMove.bind(o),o.onTouchEnd=o.onTouchEnd.bind(o),o.onScroll=o.onScroll.bind(o),o.saveSidebarRef=o.saveSidebarRef.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":n(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=r({},h,this.props.styles.sidebar),e=r({},d,this.props.styles.content),o=r({},f,this.props.styles.overlay),n=this.state.dragSupported&&this.props.touch,i=this.isTouching(),s={className:this.props.rootClassName,style:r({},c,this.props.styles.root),role:"navigation"},u=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),o.opacity=l,o.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",o.opacity=1,o.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",o.transition="none"),n)if(this.props.open)s.onTouchStart=this.onTouchStart,s.onTouchMove=this.onTouchMove,s.onTouchEnd=this.onTouchEnd,s.onTouchCancel=this.onTouchEnd,s.onScroll=this.onScroll;else{var b=r({},p,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,u=a.default.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return a.default.createElement("div",s,a.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),a.default.createElement("div",{className:this.props.overlayClassName,style:o,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),a.default.createElement("div",{className:this.props.contentClassName,style:e},u,this.props.children))}}]),e}(s.Component);b.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=b},819081:(t,e,o)=>{"use strict";t.exports=o(1174)},93054:(t,e,o)=>{"use strict";e.__esModule=!0,e.default=function(t){if("function"!=typeof t)throw new TypeError("You must provide a valid moment object");var e="function"==typeof t().locale?"locale":"lang";if(!t.localeData)throw new TypeError("The Moment localizer depends on the `localeData` api, please provide a moment object v2.2.0 or higher");function o(o,r,n){return o?t(r,n)[e](o):t(r,n)}var r={formats:{date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:function(e,o,r){return r.format(e,"YYYY",o)+" - "+r.format(function(e){return t(e).add(10,"year").add(-1,"millisecond").toDate()}(e),"YYYY",o)},century:function(e,o,r){return r.format(e,"YYYY",o)+" - "+r.format(function(e){return t(e).add(100,"year").add(-1,"millisecond").toDate()}(e),"YYYY",o)}},firstOfWeek:function(e){return t.localeData(e).firstDayOfWeek()},parse:function(t,e,r){if(!t)return null;var n=o(r,t,e);return n.isValid()?n.toDate():null},format:function(t,e,r){return o(r,t).format(e)}};return n.default.setDateLocalizer(r),r};var r,n=(r=o(577036))&&r.__esModule?r:{default:r};t.exports=e.default},828878:(t,e,o)=>{"use strict";var r,n={fromESObservable:((r=o(49977))&&r.__esModule?r:{default:r}).default.Observable.from,toESObservable:function(t){return t}};e.Z=n},819412:(t,e,o)=>{var r=o(798098);t.exports=function(t,e){var o=new r.io.GeoJSONReader,n=o.read(JSON.stringify(t.geometry)),i=o.read(JSON.stringify(e.geometry)),s=n.union(i);return{type:"Feature",geometry:s=(new r.io.GeoJSONWriter).write(s),properties:t.properties}}}}]);