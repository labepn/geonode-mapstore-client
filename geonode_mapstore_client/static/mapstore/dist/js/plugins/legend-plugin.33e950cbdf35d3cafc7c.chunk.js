(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[91063],{735913:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i),l=r(757588),a=r(950966),u=r(805346);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(s,e);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function s(){return p(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this,t=this.props.className?" "+this.props.className:"",r=c().createElement(l.Glyphicon,{className:"toc-layer-tool"+t,style:this.props.style,glyph:this.props.glyph,onClick:function(){return e.props.onClick(e.props.node)}});return this.props.tooltip?c().createElement(a.Z,{placement:"bottom",overlay:c().createElement(l.Tooltip,{id:"Tooltip-"+this.props.tooltip},c().createElement("strong",null,c().createElement(u.Z,{msgId:this.props.tooltip})))},r):r}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(c().Component);b(m,"propTypes",{node:o().object,onClick:o().func,style:o().object,glyph:o().string,tooltip:o().string,className:o().string}),b(m,"defaultProps",{onClick:function(){}});const g=m},497844:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),l=r(1036),a=r(414293),u=r.n(a),s=r(701469),p=r.n(s);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,r,n,i,c=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(i){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function a(){return y(this,a),c.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this;return o().createElement("div",{className:"mapstore-slider ".concat(this.props.hideTooltip?"":"with-tooltip"),onClick:function(e){e.stopPropagation()}},this.props.hideTooltip&&o().createElement(l.Z,{disabled:this.props.disabled,start:[u()(this.props.opacity)?100:Math.round(100*this.props.opacity)],range:{min:0,max:100},onChange:function(t){p()(t)&&t[0]&&e.props.onChange(parseFloat(t[0].replace(" %","")/100))}})||o().createElement(l.Z,{disabled:this.props.disabled,start:[u()(this.props.opacity)?100:Math.round(100*this.props.opacity)],tooltips:[!0],format:{from:function(e){return Math.round(e)},to:function(e){return Math.round(e)+" %"}},range:{min:0,max:100},onChange:function(t){return e.props.onChange(parseFloat(t[0].replace(" %",""))/100)}}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);g(v,"propTypes",{opacity:c().number,disabled:c().bool,hideTooltip:c().bool,onChange:c().func}),g(v,"defaultProps",{opacity:1,onChange:function(){},visibility:!0});const w=v},314181:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),l=r(623560),a=r.n(l),u=r(735913);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(i){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function l(){var e;p(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(d(e=c.call.apply(c,[this].concat(r))),"changeVisibility",(function(){e.props.propertiesChangeHandler(e.props.node.id,{visibility:!e.props.node.visibility})})),e}return t=l,(r=[{key:"render",value:function(){return"glyph"===this.props.checkType?o().createElement(u.Z,{tooltip:this.props.tooltip,style:this.props.style,className:"visibility-check"+(this.props.node.visibility?" checked":""),"data-position":this.props.node.storeIndex,glyph:this.props.node.visibility?this.props.glyphChecked:this.props.glyphUnchecked,onClick:this.changeVisibility}):o().createElement("input",{className:"visibility-check",style:this.props.style,"data-position":this.props.node.storeIndex,type:a()(this.props.checkType)?this.props.checkType(this.props.node):this.props.checkType,checked:this.props.node.visibility?"checked":"",onChange:this.changeVisibility})}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);m(g,"propTypes",{node:c().object,tooltip:c().string,propertiesChangeHandler:c().func,style:c().object,checkType:c().oneOfType([c().string,c().func]),glyphChecked:c().string,glyphUnchecked:c().string}),m(g,"defaultProps",{style:{},checkType:"glyph",glyphChecked:"eye-open",tooltip:"toc.toggleLayerVisibility",glyphUnchecked:"eye-close"});const v=g},490079:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(472500),o=r.n(n),i=r(701469),c=r.n(i),l=r(727418),a=r.n(l),u=r(675263),s=r.n(u),p=r(124852),f=r.n(p),y=r(233044),h=r(805346);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,r,n,i,l=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(i){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function u(){var e;b(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(w(e=l.call.apply(l,[this].concat(r))),"state",{error:!1}),j(w(e),"onImgError",(function(){e.setState((function(){return{error:!0}}))})),j(w(e),"getUrl",(function(e,t){if(e.layer&&"wms"===e.layer.type&&e.layer.url){var r=e.layer,n=t||c()(r.url)&&Math.floor(Math.random()*r.url.length),i=c()(r.url)?r.url[n]:r.url.replace(/[?].*$/g,""),l=o().parse(i),u=(0,y.clearNilValuesForParams)(r.params),s=a()({},{service:"WMS",request:"GetLegendGraphic",format:"image/png",height:e.legendHeight,width:e.legendWidth,layer:r.name,style:r.style||null,version:r.version||"1.3.0",SLD_VERSION:"1.1.0",LEGEND_OPTIONS:e.legendOptions},r.legendParams||{},e.language&&r.localizedLayerStyles?{LANGUAGE:e.language}:{},(0,y.addAuthenticationToSLD)(u||{},e.layer),u&&u.SLD_BODY?{SLD_BODY:u.SLD_BODY}:{},e.scales&&e.currentZoomLvl&&e.scaleDependent?{SCALE:Math.round(e.scales[e.currentZoomLvl])}:{});return(0,y.addAuthenticationParameter)(i,s),o().format({host:l.host,protocol:l.protocol,pathname:l.pathname,query:s})}return""})),j(w(e),"validateImg",(function(t){t.height<=1&&t.width<=2&&e.onImgError()})),e}return t=u,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.state.error&&this.getUrl(e,0)!==this.getUrl(this.props,0)&&this.setState((function(){return{error:!1}}))}},{key:"render",value:function(){var e=this;return!this.state.error&&this.props.layer&&"wms"===this.props.layer.type&&this.props.layer.url?f().createElement("img",{onError:this.onImgError,onLoad:function(t){return e.validateImg(t.target)},src:this.getUrl(this.props),style:this.props.style}):f().createElement(h.Z,{msgId:"layerProperties.legenderror"})}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f().Component);j(E,"propTypes",{layer:s().object,legendHeight:s().number,legendWidth:s().number,legendOptions:s().string,style:s().object,currentZoomLvl:s().number,scales:s().array,scaleDependent:s().bool,language:s().string}),j(E,"defaultProps",{legendHeight:12,legendWidth:12,legendOptions:"forceLabels:on",style:{maxWidth:"100%"},scaleDependent:!0});const P=E},1036:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(618446),o=r.n(n);const i=(0,r(867076).shouldUpdate)((function(e,t){return!o()(e.start,t.start)||e.disabled!==t.disabled}))(r(185552))},426379:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(124852),o=r.n(n),i=r(322843),c=r(171703),l=r(22222),a=r(490079),u=r(675110),s=r(497844),p=r(580416),f=r(314181);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=(0,c.connect)((0,l.P1)([u.l2],(function(e){return{layers:e.filter((function(e){return"background"!==e.group&&"wms"===e.type}))}})),{onUpdateNode:p.tV})((function(e){var t,r,i=e.layers,c=e.onUpdateNode,l=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],p=l[1];return i.length>0&&o().createElement("div",{className:"shadow gn-legend-wrapper",style:{width:u?"auto":"80px"}},o().createElement("div",{onClick:function(){p((function(e){return!e}))},className:"gn-legend-head"},o().createElement("span",{role:"button",className:"identify-icon glyphicon glyphicon-chevron-".concat(u?"down":"right"),title:"Expand layer legend"}),o().createElement("span",{className:"gn-legend-list-item"},"Legend")),o().createElement("ul",{className:"gn-legend-list",style:{display:u?"inline-block":"none"}},i.map((function(e,t){return o().createElement(n.Fragment,{key:t},o().createElement("li",{className:"gn-legend-list-item"},o().createElement(f.Z,{key:"visibilitycheck",tooltip:"Warning"===e.loadingError?"toc.toggleLayerVisibilityWarning":"toc.toggleLayerVisibility",node:e,propertiesChangeHandler:function(e,t){return c(e,"layers",t)}}),o().createElement("p",null,e.name||e.title)),o().createElement("li",{className:"gn-legend-bottom"},o().createElement(s.Z,{opacity:e.opacity,disabled:!e.visibility,onChange:function(t){return c(e.id,"layers",{opacity:t})}}),o().createElement(a.Z,{layer:e})))}))))}));const d=(0,i.rx)("Legend",{component:h,containers:{},epics:{},reducers:{}})}}]);