(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2514,9081],{57676:(e,t,r)=>{"use strict";r.d(t,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>c,iv:()=>u,cO:()=>a,br:()=>s,aA:()=>l,Xe:()=>p,Nb:()=>f,_V:()=>d,kq:()=>y,JU:()=>b,PQ:()=>v,cb:()=>g,KI:()=>m,M5:()=>h,w2:()=>O,w:()=>w,Z7:()=>P,p:()=>j,_e:()=>E});var n="TIMELINE:SELECT_TIME",o=function(e,t,r,o){return{type:n,time:e,group:t,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,r=e.end;return{type:i,start:t,end:r}},u="TIMELINE:RANGE_DATA_LOADED",a=function(e,t,r,n){return{type:u,layerId:e,range:t,histogram:r,domain:n}},s="TIMELINE:LOADING",l=function(e,t){return{type:s,layerId:e,loading:t}},p="TIMELINE:INIT_SELECT_LAYER",f=function(e){return{type:p,layerId:e}},d="TIMELINE:SELECT_LAYER",y=function(e){return{type:d,layerId:e}},b="TIMELINE:ENABLE_OFFSET",v=function(e){return{type:b,enabled:e}},g="TIMELINE:AUTOSELECT",m=function(){return{type:g}},h="TIMELINE:SET_COLLAPSED",O=function(e){return{type:h,collapsed:e}},w="TIMELINE:SET_MAP_SYNC",P=function(e){return{type:w,mapSync:e}},j="TIMELINE:INIT_TIMELINE",E=function(e){return{type:j,showHiddenLayers:e}}},32425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(45697),o=r.n(n),i=r(67294),c=r.n(i);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:a({width:t,height:t,overflow:"hidden"},n)},!i&&c().createElement("div",{className:"mapstore-".concat(l(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},12610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),o=r.n(n),i=r(2479),c=r(57557),u=r.n(c),a=r(15135);const s=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),a.Z,(function(e){return function(t){return o().createElement(e,u()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},17252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(67294),o=r.n(n),i=r(2479),c=r(45697),u=r.n(c),a=r(57557),s=r.n(a),l=r(57588),p=r(50966);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h=(0,i.branch)((function(e){return e.popover}),(function(e){var t,r;return r=t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(f,t);var r,n,c,u,a=(c=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(c);if(u){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function f(){return d(this,f),a.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(l.Popover,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&y(r.prototype,n),f}(o().Component),m(t,"propTypes",{popover:u().object}),m(t,"defaultProps",{popover:{trigger:!0}}),r}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(67294),o=r.n(n),i=r(19081),c=r.n(i),u=r(57588),a=r(90085),s=["visible","Element","renderButton"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,d=void 0===f?{}:f,y=e.transitionProps,b=void 0===y?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:y,v=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,c=e.renderButton,u=p(e,s);return n?c||i&&o().createElement(i,l({key:u.key||t},u))||o().createElement(a.Z,l({key:u.key||t},d,u)):null}))};return o().createElement(u.ButtonGroup,i,b?o().createElement(c(),b,v()):v())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(67294),o=r.n(n),i=r(2479),c=r(5346),u=r(57557),a=r.n(u),s=r(57588),l=r(32425),p=r(12610),f=r(17252),d=r(82467),y=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const g=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,u=e.textId,p=e.glyphClassName,f=void 0===p?"":p,g=e.loaderProps,m=void 0===g?{}:g,h=e.children,O=v(e,y);return o().createElement(d.Z,a()(O,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(s.Glyphicon,{glyph:t,className:f}):null,u?o().createElement(c.Z,{msgId:u}):i,r?o().createElement(l.Z,b({className:"ms-loader".concat(O.bsStyle&&" ms-loader-"+O.bsStyle||"").concat(O.bsSize&&" ms-loader-"+O.bsSize||"")},m)):null,h)}))},69901:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>de});var n=r(67294),o=r.n(n),i=r(45697),c=r.n(i),u=r(33664),a=r(2479),s=r(22222),l=r(15135),p=r(57588),f=r(1757),d=r(57579),y=r(13311),b=r.n(y),v=r(30998),g=r.n(v),m=r(89734),h=r.n(m);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){return!e.dataGrid||!e.dataGrid.static},E=(0,s.P1)(f.zm,f.YR,f.yZ,f.lF,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return h()(e.filter(j).map((function(e){return g()(t,(function(t){return t===e.id}))>=0?w(w({},e),{},{collapsed:!0}):e})),(function(e){var t=n[e.id]&&n[e.id].layout,o=b()(r,{i:e.id})||t||{},i=o.x,c=void 0===i?0:i,u=o.y;return 100*(void 0===u?0:u)+c}))})),S=r(10473),T=(0,a.compose)((0,a.defaultProps)({toolsOptions:{seeHidden:"user.role===ADMIN"}}),(0,S.Z)("toolsOptions",{asObject:!0}),(0,a.withProps)((function(e){var t=e.widgets,r=e.toolsOptions;return{widgets:(void 0===r?{seeHidden:!1}:r).seeHidden?t:t.filter((function(e){return!e.hide}))}}))),I=r(65539),k=r(80717);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgetType,r=e.type,n=t&&"chart"!==t?t:r;switch(n){case"text":return"sheet";case"table":return"features-grid";case"pie":return"pie-chart";case"line":return"1-line";case"map":return"1-map";case"counter":return"counter";default:return"stats"}};const _=(0,a.compose)((0,a.withPropsOnChange)(["btnGroupProps"],(function(e){var t=e.btnGroupProps;return{btnGroupProps:C(C({},t),{},{className:"widgets-bar"+(t&&t.className?" ".concat(t.className):"")})}})),(0,a.withPropsOnChange)(["widgets","onClick"],(function(e){var t=e.widgets,r=void 0===t?[]:t,n=e.onClick,o=void 0===n?function(){}:n;return{buttons:r.map((function(e){return{glyph:N(e),tooltip:e.title,className:e.collapsed?"btn-tray":"btn-tray active",onClick:function(){return o(e)}}}))}})))(k.Z);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Z=(0,a.compose)((0,u.connect)((0,s.P1)(E,(function(e){return{widgets:e}})),{onClick:d.f}),(0,a.defaultProps)({btnGroupProps:{className:"widgets-toolbar",style:{marginLeft:2,marginRight:2}}}),T,(0,a.withProps)((function(e){var t=e.btnGroupProps,r=void 0===t?{}:t,n=e.btnDefaultProps,o=void 0===n?{}:n;return{btnGroupProps:M({bsSize:"xsmall"},r),btnDefaultProps:M({bsSize:"xsmall"},o||{})}})))(_);var R=r(82467);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=(0,l.Z)(R.Z),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expanded,r=e.onClick,n=void 0===r?function(){}:r;return o().createElement(U,{tooltipId:t?"widgets.tray.collapseTray":"widgets.tray.expandTray",bsSize:"xsmall",bsStyle:"default",style:{borderColor:"transparent"},onClick:n},o().createElement(p.Glyphicon,{glyph:t?"chevron-right":"chevron-left"}))},q=(0,a.compose)((0,u.connect)((0,s.P1)(f.E5,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{onClick:function(){return(0,d.Ff)()}}),T,(0,a.withProps)((function(e){var t=e.widgets;return{shouldExpand:0===(void 0===t?[]:t).length}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,r=void 0===t?function(){}:t,n=e.shouldExpand,i=void 0!==n&&n;return o().createElement(U,{tooltipId:i?"widgets.tray.expandAll":"widgets.tray.collapseAll",bsStyle:i?"primary":"success active",bsSize:"xsmall",onClick:r},o().createElement(p.Glyphicon,{glyph:"list"}))})),$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(u,e);var t,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(n);if(i){var r=H(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function u(){return V(this,u),c.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e,t=this;return this.props.enabled?o().createElement("div",{className:"widgets-tray",style:{marginBottom:32,marginRight:80,bottom:0,right:0,position:"absolute"}},o().createElement(I.Z,{columns:[o().createElement(Y,{key:"collapse-tray",toolsOptions:this.props.toolsOptions,expanded:this.props.expanded,onClick:function(){return t.props.setExpanded(!t.props.expanded)}}),o().createElement(q,{key:"collapse-all",toolsOptions:this.props.toolsOptions})].concat((e=this.props.items.map((function(e){return e.tool}))||[],function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},this.props.expanded?o().createElement(Z,{toolsOptions:this.props.toolsOptions}):null)):null}}])&&W(t.prototype,r),u}(o().Component);J($,"propTypes",{enabled:c().bool,toolsOptions:c().object,items:c().array,expanded:c().bool,setExpanded:c().func}),J($,"defaultProps",{enabled:!0,items:[],expanded:!1,setExpanded:function(){}});const K=(0,a.compose)((0,a.withState)("expanded","setExpanded",!1),(0,u.connect)((0,s.P1)(E,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{toggleTray:d.ep}),T,(0,a.withProps)((function(e){var t=e.widgets,r=void 0===t?[]:t;return{hasCollapsedWidgets:r.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapsed;return t})).length>0,hasTrayWidgets:r.length>0}})),(0,a.lifecycle)({componentDidMount:function(){this.props.toggleTray&&this.props.toggleTray(!0)},componentWillUnmount:function(){this.props.toggleTray&&this.props.toggleTray(!1)}}),(0,a.mapPropsStream)((function(e){return e.merge(e.distinctUntilKeyChanged("hasCollapsedWidgets").do((function(e){var t=e.setExpanded;return(void 0===t?function(){}:t)(e.hasCollapsedWidgets)})).ignoreElements())})),(0,a.withProps)((function(e){var t=e.enabled,r=e.hasTrayWidgets;return{enabled:t&&r}})))($);var Q=r(54414),X=r(89255),ee=r(27361),te=r.n(ee),re=r(57676),ne=r(81808),oe=r(97395),ie=r(80416),ce=r(97291);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var le=function(e){return((0,f.E5)(e)||[]).filter((function(e){return!te()(e,"dataGrid.static")})).length>0},pe=function(e){return function(t){return t.take(1).switchMap((function(){return X.Observable.of((0,oe.um)(ae(ae({},e),{},{autoDismiss:8,position:"tr",uid:"timeline-collapsed"})))})).merge(t)}};const fe={collapseTimelineOnWidgetsEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return X.Observable.merge(e.ofType(d.Ym,d.uU,ne.ok,d.$A,d.Jm).filter((function(){return le(n())&&(0,ce.pn)(n())}))).switchMap((function(){return X.Observable.of((0,re.w2)(!0))})).let(pe({title:"widgets.tray.notifications.collapsed.timelineTitle",message:"widgets.tray.notifications.collapsed.message"}))},collapseWidgetsOnTimelineEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return X.Observable.merge(e.ofType(re.M5).filter((function(e){return!e.collapsed})),e.ofType(ie.yS).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.newProperties,r=void 0===t?{}:t;return r.dimensions}))).filter((function(){return le(n())&&(0,ce.qJ)(n())&&(0,ce.pn)(n())})).switchMap((function(){return X.Observable.of((0,d.Ff)())})).let(pe({title:"widgets.tray.notifications.collapsed.widgetsTitle",message:"widgets.tray.notifications.collapsed.message"}))},expandTimelineIfCollapsedOnTrayUnmount:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(d.yY,d.$A,ne.ok).filter((function(){return!(0,ce.pn)(n())&&(0,ce.qJ)(n())})).filter((function(){return!le(n())})).switchMap((function(){return X.Observable.of((0,re.w2)(!1))}))}},de={WidgetsTrayPlugin:(0,Q.Z)(K),epics:fe}},54414:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(22222),o=r(33664),i=r(55105),c=r(93152);const u=(0,o.connect)((0,n.P1)(i.Jz,i.VM,c.c0,(function(e,t,r){return{enabled:!e&&!t&&!r}})))},10473:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(2479),o=r(33664),i=r(22222),c=r(827),u=r(74621),a=r(27361),s=r.n(a),l=r(84596),p=r.n(l),f=r(66604),d=r.n(f),y=r(47037),b=r.n(y),v=r(1469),g=r.n(v);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function e(t){var r=t.accessInfo,n=t.postProcessValue,o=t.reduceFun;return function(t){var i=p()(t),c=o;return i.length>1&&"__OR__"===i[0]&&(c=function(e,t){return e||t},i=i.slice(1)),i.map((function(t){var i=t;if(g()(i))return e({accessInfo:r,postProcessValue:n,reduceFun:o})(i);var c=!1;i&&b()(i)&&i.startsWith("!")&&(c=!0,i=i.substr(1));var u=function(e){return c?!e:e},a=b()(i)&&i.split(":");if(a&&a[0]){var l=a[0].split(/\!\=\=?/),p=a[0].split(/\=\=?\=?/);return l.length>1?u(n(s()(r,l[0]),i)!==l[1]):p.length>1?u(n(s()(r,p[0]),i)===p[1]):u(n(s()(r,a[0]),i))}return i})).reduce(c||function(e,t){return e&&t})}};const O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.asObject,o=void 0!==r&&r,i=t.postProcessValue,c=void 0===i?function(e){return e}:i,u=t.reduceFun,a=t.accessInfo,s=void 0===a?"accessInfo":a;return(0,n.withPropsOnChange)([e,s],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m({},e,o?d()(t[e],h({accessInfo:t[s],postProcessValue:c,reduceFun:u})):h({accessInfo:t[s],postProcessValue:c,reduceFun:u})(t[e]))}))},w=function(){return(0,n.compose)((0,o.connect)((0,i.P1)(c.J9,c._H,u.np,(function(e,t,r){return{accessInfo:{mapId:e,mapInfo:t,user:r}}}))),O.apply(void 0,arguments))}},55105:(e,t,r)=>{"use strict";r.d(t,{Nr:()=>p,ic:()=>f,Jz:()=>y,VM:()=>b,CF:()=>v});var n=r(91175),o=r.n(n),i=r(827),c=r(52259);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=l(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return a(a({},e),{},s({},t,r[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=l(e),n=!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})));return n},y=function(e){return d(e,[{key:"right",value:658}])},b=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},v=function(e){var t=(0,i.Od)(e),r=p(e);return r&&t&&t.size&&{left:(0,c.parseLayoutValue)(r.left,t.size.width),bottom:(0,c.parseLayoutValue)(r.bottom,t.size.height),right:(0,c.parseLayoutValue)(r.right,t.size.width),top:(0,c.parseLayoutValue)(r.top,t.size.height)}}},19081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);