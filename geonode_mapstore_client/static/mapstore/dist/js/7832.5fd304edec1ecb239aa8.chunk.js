(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7832],{911766:(e,t,r)=>{"use strict";r.d(t,{H:()=>P,Z:()=>E});var n=r(124852),o=r.n(n),c=r(212961),i=r(513218),a=r.n(i),l=r(717621),u=r.n(l),s=r(480681),f=r(38560),p=r(725288),m=r(145869),d=r(805346),y=r(615402),b=r(815135),g=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===v(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=(0,b.Z)(f.Z);function w(e){var t=e.themeStyle,r=e.disableBackgroundPicker,i=void 0!==r&&r,a=e.disableBackgroundAlpha,l=e.disableTextColor,f=e.disableShadow,b=e.onChange,v=void 0===b?function(){}:b,h=e.onOpen,S=void 0===h?function(){}:h,w=e.placement,P=(0,n.useRef)(),E=null==t?void 0:t.backgroundColor,C=null==t?void 0:t.color,k=!l&&E&&C&&!u().isReadable(C,E)?u().mostReadable(E,[C,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!i&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(c.Z,{placement:w,key:E,onOpen:S,color:E,format:a?"hex":"rgb",disableAlpha:a,presetColors:[],onChangeColor:function(e){var r=u()(e).isLight()?u()(e).darken(10).toHexString():u()(e).lighten(15).toHexString(),n=!l&&!(null!=t&&t.color)&&{color:u().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};v(O(O({},t),{},{backgroundColor:e,borderColor:r},!l&&n))}}))),!l&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(p.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(P.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(y.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:k}}),o().createElement(j,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;v(O(O({},t),{},{color:k})),null===(e=P.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(d.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},k&&o().createElement(j,{className:"square-button-md no-border",style:{display:k?"block":"none"}},o().createElement(s.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(c.Z,{placement:w,key:C,color:C,onOpen:S,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){v(O(O({},t),{},{color:e}))}}))),!f&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(m.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,g));v(r?O({},n):O(O({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function P(e){var t=e.selected,r=e.value,n=e.storyTheme,c=e.onUpdate,i=e.onActive,l=e.disableBackgroundAlpha,u=e.disableTextColor,f=e.disableShadow,p=function(e,n){var o=a()(t)&&t;return c("theme",O(O({},o),{},n?S({value:e},r,O({},n)):{value:e}))},m=n||{},y=m.color,b=m.backgroundColor,g=b&&{backgroundColor:b},v=O(O({},!u&&y&&{color:y}),g),h=(null==t?void 0:t.value)===r,P=(null==t?void 0:t[r])||v;return o().createElement(o().Fragment,null,h?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(j,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),p("")}},o().createElement(s.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(s.MenuItem,{active:h,onClick:function(){return p(r,P)}},o().createElement(d.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),h&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(w,{disableBackgroundAlpha:l,disableTextColor:u,disableShadow:f,themeStyle:P,onChange:function(e){return p(r,e)},onOpen:i})))}const E=w},725288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),c=r(423482),i=r.n(c),a=r(480681),l=r(737275);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function m(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,r,n,c,i=(n=u,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(c){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function u(){var e;s(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(d(e=i.call.apply(i,[this].concat(r))),"getContainerNode",(function(t){return t?document.body:e.parentNode||document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return t=u,(r=[{key:"render",value:function(){var e=this,t=this.getContainerNode(this.props.useBody);return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(a.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:t,placement:this.props.placement,rootClose:!0,overlay:o().createElement(a.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);b(v,"propTypes",{id:i().string,style:i().object,className:i().string,popoverClassName:i().string,placement:i().string,title:i().node,content:i().node,useBody:i().bool}),b(v,"defaultProps",{id:"",useBody:!1});const h=v},625311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(124852),o=r.n(n),c=r(590937),i=r(867076),a=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}};const m=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDraggable;return t}),(0,i.compose)((0,c.Ej)("row",p,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,c.GR)("row",{drop:function(e,t){var r=t.getItem();r.sortId!==e.sortId&&e.onSort(e.sortId,r.sortId,{id:e.id,containerId:e.containerId},{id:r.id,containerId:r.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var r=t.connectDragSource,n=t.connectDragPreview,c=t.connectDropTarget,i=t.isDragging,l=t.isOver,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),f=s.draggingItem&&s.draggingItem.sortId<s.sortId,p=s.draggingItem&&s.draggingItem.containerId===s.containerId,m=p&&i?" ms-dragging":"",d=p&&l?" ms-over":"",y=p&&f?" ms-above":" ms-below";return n(c(o().createElement("div",{className:"ms-dragg".concat(m).concat(d," ").concat(y)},o().createElement("div",null,o().createElement(e,u({},s,{connectDragSource:r,isDragging:i,isOver:l,onDrop:function(e){return e.stopPropagation()}}))))))}})))},245567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),c=r(867076);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=["onSort","isDraggable","items","containerId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=(0,c.compose)((0,c.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var r=t.onSort,n=t.isDraggable,c=t.items,i=void 0===c?[]:c,u=t.containerId,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),p=i.map((function(e,t){return s(s({},e),{},{onSort:r,isDraggable:n,sortId:t,key:e.id||t,containerId:u})}));return o().createElement(e,l({},s(s({},f),{},{isDraggable:n}),{items:p}))}})))},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),c=r(423482),i=r.n(c);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===a(t)?t:String(t)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,r,n,c,i=(n=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(c){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){return l(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);m(y,"propTypes",{disabled:i().bool,className:i().string,checked:i().bool,onChange:i().func,onClick:i().func}),m(y,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const b=y},212961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),c=r(423482),i=r.n(c),a=r(480681),l=r(857037);function u(e){var t=e.color,r=e.format,n=e.line,c=e.onChangeColor,i=e.disableAlpha,u=e.containerNode,s=e.onOpen,f=e.disabled,p=e.presetColors,m=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(l.Z,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:c,pickerProps:{disableAlpha:i,presetColors:p},containerNode:u,disabled:f,onOpen:s,placement:m}))}u.propTypes={color:i().oneOfType([i().string,i().shape({r:i().number,g:i().number,b:i().number,a:i().number})]),format:i().string,line:i().bool,onChangeColor:i().func,disableAlpha:i().bool,containerNode:i().node,disabled:i().bool,onOpen:i().func,presetColors:i().array,placement:i().string},u.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const s=u},166190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var n=r(227361),o=r.n(n),c=r(747037),i=r.n(c),a=r(281763),l=r.n(a),u=r(630998),s=r.n(u),f=r(313311),p=r.n(f),m=r(968630),d=r.n(m),y=r(701469),b=r.n(y),g=r(984596),v=r.n(g),h=r(545578),O=r.n(h),S=r(761868),j=r(192579),w=r(134990);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===P(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),i()(t)?n=s()(e,{id:t})+1:l()(t)&&(n=Math.min(t,e.length)),n},x=function e(t,r,n){var o=n.contents,c=n.background,i=n.id,a=n.resourceId,l=[],u=r+'{"id": "'.concat(i,'"}]');return a===t?[u]:(c&&c.resourceId===t&&l.push(u+".background"),o?o.reduce((function(r,n){return[].concat(I(r),I(e(t,u+".contents[",n)))}),l):l)},N={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.D7:var r=t.id,n=t.path,c=t.position,a=t.element,l=(0,j.Ll)("currentStory.".concat(n),e),u=o()(e,l,[]),s=D(u,c),f=u.slice();return f.splice(s,0,C({id:r},a)),(0,S.t8)(l,f,e);case w.mN:var m=t.id,y=t.mediaType,g=t.data;return(0,S.t8)("currentStory.resources",O()([{id:m,type:y,data:g}].concat(I(e.currentStory&&e.currentStory.resources||[])),"id"),e);case w.vb:return(0,S.t8)("mode",t.mode,e);case w.QK:var h=t.id,P=t.mediaType,E=t.data,T=(0,S.cc)("currentStory.resources",{id:h,type:P,data:E},{id:h},e);return P===j.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==j.ID.CAROUSEL})).reduce((function(e,t){return[].concat(I(e),I(x(h,"sections[",t)))}),[]).map((function(t){var r=(0,j.Ll)("currentStory.".concat(t,".map"),e);T=(0,S.t8)(r,void 0,T)})),T;case w.Ro:var Z=t.id,A=t.mediaType,R=(0,S.z6)("currentStory.resources",{id:Z},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(I(e),I(x(Z,"sections[",t)))}),[]).map((function(t){var r=(0,j.Ll)("currentStory.".concat(t,".resourceId"),e);if(R=(0,S.zN)(r,R),A===j.Tr.MAP){var n=(0,j.Ll)("currentStory.".concat(t,".map"),e);R=(0,S.zN)(n,R)}})),R;case w.lX:return(0,S.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,S.t8)("loading",t.value,e));case w.Dq:var _=t.path,z=(0,j.Ll)("currentStory.".concat(_),e),B=I(z),L=B.pop(),F=o()(e,B);return b()(F)?(i()(L)&&(L=parseInt(L,10)),(0,S.t8)(B,[].concat(I(F.slice(0,L)),I(F.slice(L+1))),e)):(0,S.zN)(z,e);case w.ij:var M,q,U,H,G,W=e.defaultSettings||{},K=t.story.settings||W,Q=(null===(M=K)||void 0===M||null===(q=M.theme)||void 0===q?void 0:q.fontFamilies)||[],Y=null===(U=e.currentStory)||void 0===U||null===(H=U.settings)||void 0===H||null===(G=H.theme)||void 0===G?void 0:G.fontFamilies;return Y&&Y.length>0&&(K=(0,S.t8)("theme.fontFamilies",O()([].concat(I(Y),I(Q)),"family"),K)),(0,S.t8)("currentStory",C(C({},t.story),{},{settings:K}),e);case w.i2:return(0,S.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case w.IY:var $=t.control,X=t.value;return(0,S.t8)("controls.".concat($),X,e);case w.Zf:var J=t.resource,V=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",J),(0,S.t8)("currentStory.settings.storyTitle",V.storyTitle||J.name))(e);case w.si:case w.KT:return(0,S.zN)("errors.save",e);case w.SW:return(0,S.t8)("errors.save",v()(t.error),e);case w.Mk:return(0,S.t8)("isCollapsed",!e.isCollapsed,e);case w.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,S.t8)("currentStory.settings.".concat(t.option),!ee,e);case w.c:var te=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",te),(0,S.t8)("oldSettings",te?re:{}),(0,S.t8)("currentStory.settings",te?C({},re):t.withSave?re:e.oldSettings))(e);case w.wb:var ne=t.path,oe=t.mode,ce=t.element,ie=(0,j.Ll)("currentStory.".concat(ne),e),ae=o()(e,ie);return d()(ae)&&d()(ce)&&"merge"===oe&&(ce=C(C({},ae),ce)),b()(ae)&&b()(ce)&&"merge"===oe&&(ce=[].concat(I(ae),I(ce))),(0,S.t8)(ie,ce,e);case w.km:return(0,S.t8)("currentStory.settings.".concat(t.prop),t.value,e);case w.un:if(t.columnId){var le=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.columnId})}));return le&&p()(le.contents,{id:t.columnId})?(0,S.t8)("currentPage",C(C({},e.currentPage),{},{columns:C(C({},e.currentPage.columns),{},k({},le.id,t.columnId))}),e):e}return(0,S.t8)("currentPage",C(C({},e.currentPage),{},{sectionId:t.sectionId}),e);case w.Cx:var ue=t.status,se=t.target,fe=t.selector,pe=void 0===fe?"":fe,me=t.hideContent,de=void 0!==me&&me,ye=t.path,be=ue?{target:se,selector:pe,hideContent:de,path:ye}:void 0;return(0,S.t8)("focusedContent",be,e);case w.jr:return(0,S.t8)("pendingChanges",t.value,e);case w.ZY:return(0,S.t8)("updateUrlOnScroll",t.value,e);case w.EQ:return(0,S.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case w.W$:if(t.sectionId){var ge=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.showContentId})}));return ge&&p()(ge.contents,{id:t.showContentId})?(0,S.t8)("currentStory",C(C({},e.currentStory),{},{sections:(0,j.eI)(e.currentStory.sections,t)}),e):e}return e;case w.mk:return(0,S.t8)("drawOptions",t.drawOptions,e);default:return e}}},531398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(197395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,c=void 0===o?6:o,i=e.position,a=void 0===i?"tc":i,l=e.message,u=void 0===l?"Error":l;return(0,n.vU)({title:r,autoDismiss:c,position:a,message:u})}}}]);