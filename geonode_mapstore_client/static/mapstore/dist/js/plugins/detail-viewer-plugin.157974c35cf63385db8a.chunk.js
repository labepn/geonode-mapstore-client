(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5121],{32425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(45697),o=n.n(r),a=n(67294),l=n.n(a);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},d=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,a=e.hidden;return l().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},r)},!a&&l().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};d.propTypes={size:o().number,className:o().string,style:o().object};const m=d},14068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(67294),o=n.n(r),a=n(55033),l=n.n(a),i=n(32425),u=n(83139),c=n(80717);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const v=(0,r.forwardRef)((function(e,t){var n,a,f=e.className,v=void 0===f?"ms-thumbnail":f,p=e.label,b=e.loading,y=e.message,g=e.error,h=e.thumbnail,E=e.removeGlyph,w=void 0===E?"trash":E,O=e.removeTooltipId,j=void 0===O?"removeThumbnail":O,P=e.style,N=void 0===P?{}:P,Z=e.maxFileSize,I=void 0===Z?5e5:Z,S=e.supportedImageTypes,_=void 0===S?["image/png","image/jpeg","image/jpg"]:S,k=e.thumbnailOptions,A=e.dropZoneProps,x=void 0===A?{className:"ms-thumbnail-dropzone",activeClassName:"ms-thumbnail-dropzone-active",rejectClassName:"ms-thumbnail-dropzone-reject"}:A,C=e.onUpdate,T=void 0===C?function(){}:C,D=e.onError,R=void 0===D?function(){}:D,M=e.onRemove,L=e.toolbarButtons,z=(0,r.useRef)(),Y=(n=(0,r.useState)(),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(n,a)||m(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),F=Y[0],U=Y[1];if((0,r.useEffect)((function(){return z.current=!0,function(){z.current=!1}}),[]),b||F)return o().createElement("div",{className:"dropzone-thumbnail-container".concat(v?" ".concat(v):""," ms-loading")},o().createElement(i.Z,{size:70}));var q=o().createElement(c.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:L||[{glyph:w,visible:!(!M||!h),tooltipId:j,onClick:function(e){var t;null==e||null===(t=e.stopPropagation)||void 0===t||t.call(e),null==M||M()}}]});return o().createElement("div",{className:"dropzone-thumbnail-container".concat(v?" ".concat(v):""),style:N},p,o().createElement(l(),s({},x,{multiple:!1,onDrop:function(e){var t,n=null==e||null===(t=e[0])||void 0===t?void 0:t.type,r=-1!==_.indexOf(n);U(!0),function(e,t){return new Promise((function(n){var r=e;if(null!=r&&r[0]){var o=r[0],a=new FileReader;return a.onload=function(e){return n(t?(0,u.Xq)(e.target.result,t).then((function(e){return{data:e,size:e.length}})):{data:e.target.result,size:o.size})},a.readAsDataURL(o)}return n({data:null})}))}(e,k).then((function(t){var n=t.data,o=t.size;return z.current?(U(!1),r&&n&&o<I?T(n,e):R([].concat(d(r?[]:["FORMAT"]),d(n&&o>=I?["SIZE"]:[])),e)):null})).catch((function(e){return z.current?(U(!1),R(e)):null}))}}),h?o().createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},o().createElement("div",{ref:t,style:{position:"relative",width:"100%",height:"100%",backgroundImage:"url(".concat(h,")"),backgroundSize:null!=k&&k.contain?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),o().createElement("div",{className:"dropzone-content-image-added"},y),q):o().createElement("div",{className:"dropzone-content-image"},y,q,g&&o().createElement("div",{className:"dropzone-errors"},g))))}))},12610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(67294),o=n.n(r),a=n(2479),l=n(57557),i=n.n(l),u=n(15135);const c=(0,a.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=e.noTooltipWhenDisabled,r=void 0!==n&&n;return!(r&&t)}),u.Z,(function(e){return function(t){return o().createElement(e,i()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},17252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n.n(r),a=n(2479),l=n(45697),i=n.n(l),u=n(57557),c=n.n(u),s=n(57588),d=n(50966);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=(0,a.branch)((function(e){return e.popover}),(function(e){var t,n;return n=t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(m,t);var n,r,l,i,u=(l=m,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(l);if(i){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function m(){return f(this,m),u.apply(this,arguments)}return n=m,(r=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,c()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,a.toClass)(e);return o().createElement(t,c()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(d.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&v(n.prototype,r),m}(o().Component),g(t,"propTypes",{popover:i().object}),g(t,"defaultProps",{popover:{trigger:!0}}),n}))},80717:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),o=n.n(r),a=n(19081),l=n.n(a),i=n(57588),u=n(90085),c=["visible","Element","renderButton"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,n=void 0===t?[]:t,r=e.btnGroupProps,a=void 0===r?{}:r,m=e.btnDefaultProps,f=void 0===m?{}:m,v=e.transitionProps,p=void 0===v?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:v,b=function(){return n.map((function(e,t){var n=e.visible,r=void 0===n||n,a=e.Element,l=e.renderButton,i=d(e,c);return r?l||a&&o().createElement(a,s({key:i.key||t},i))||o().createElement(u.Z,s({key:i.key||t},f,i)):null}))};return o().createElement(i.ButtonGroup,a,p?o().createElement(l(),p,b()):b())}},90085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(67294),o=n.n(r),a=n(2479),l=n(5346),i=n(57557),u=n.n(i),c=n(57588),s=n(32425),d=n(12610),m=n(17252),f=n(82467),v=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const y=(0,a.compose)(d.Z,m.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,n=e.loading,r=e.text,a=void 0===r?"":r,i=e.textId,d=e.glyphClassName,m=void 0===d?"":d,y=e.loaderProps,g=void 0===y?{}:y,h=e.children,E=b(e,v);return o().createElement(f.Z,u()(E,["pullRight","confirmNo","confirmYes"]),t&&!n?o().createElement(c.Glyphicon,{glyph:t,className:m}):null,i?o().createElement(l.Z,{msgId:i}):a,n?o().createElement(s.Z,p({className:"ms-loader".concat(E.bsStyle&&" ms-loader-"+E.bsStyle||"").concat(E.bsSize&&" ms-loader-"+E.bsSize||"")},g)):null,h)}))},25108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(82904),o=n(27418),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,l({},t.control,a()({},e[t.control],l({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,l({},t.control,a()({},e[t.control],l({},t.property,void 0)))):a()({},e,l({},t.control,a()({},e[t.control],l({},t.property,t.value))));case r.dc:return a()({},e,l({},t.control,a()({},e[t.control],t.properties)));case r.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,n){return a()(t,l({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,i);default:return e}}},83139:(e,t,n)=>{"use strict";n.d(t,{Xq:()=>r,v9:()=>a});var r=function(e,t){return new Promise((function(n,r){var o=t||{},a=o.width,l=void 0===a?64:a,i=o.height,u=void 0===i?64:i,c=o.contain,s=o.type,d=void 0===s?"image/jpeg":s,m=o.quality,f=void 0===m?.5:m,v=new Image;v.crossOrigin="anonymous",v.onload=function(){var e=v.naturalWidth/v.naturalHeight,t=l,r=u,o=l/u,a=document.createElement("canvas");a.setAttribute("width",l),a.setAttribute("height",u),a.style.width=l+"px",a.style.height=u+"px";var i=a.getContext("2d"),s=!c&&e<o||c&&e>o?[t,t/e]:[r*e,r];i.save(),i.translate(t/2,r/2),i.drawImage(v,-s[0]/2,-s[1]/2,s[0],s[1]),i.restore();var m=a.toDataURL(d,f);n(m)},v.onerror=function(e){r(e)},v.src=e}))},o=function(e,t){return new Promise((function(n,r){var o=t||{},a=o.type,l=void 0===a?"image/jpeg":a,i=o.quality,u=void 0===i?.5:i,c=document.createElement("video");c.crossOrigin="anonymous";var s=document.createElement("source"),d=document.createElement("canvas");c.addEventListener("loadedmetadata",(function(){var e=c.videoWidth,t=c.videoHeight;d.setAttribute("width",e),d.setAttribute("height",t),d.style.width=e+"px",d.style.height=t+"px"}),!0),c.addEventListener("loadeddata",(function(){c.currentTime=1}),!0),c.addEventListener("seeked",(function(){d.getContext("2d").drawImage(c,0,0);try{var e=d.toDataURL(l,u);n(e)}catch(e){r(e)}}),!0),c.addEventListener("error",(function(e){r(e)}),!0),c.appendChild(s),c.setAttribute("src",e)}))},a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,a=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,l=null===(e=t.match(a))||void 0===e?void 0:e[1];return l?new Promise((function(e){return e("http://img.youtube.com/vi/".concat(l,"/sddefault.jpg"))})):t.match(/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i)?o(t).then((function(e){return r(e,n)})):new Promise((function(e,t){return t("Cannot create a thumbnail from the provided source")}))}},56845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>W});var r=n(67294),o=n.n(r),a=n(97842),l=n(93473),i=n(57588),u=n(45697),c=n.n(u),s=function(e){var t=e.itemsTab,n=e.transition,r=e.defaultActiveKey,a=t.map((function(e,t){return o().createElement(i.Tab,{key:t,eventKey:t,title:null==e?void 0:e.title},null==e?void 0:e.data)}));return o().createElement(i.Tabs,{defaultActiveKey:r,transition:n,className:"tabs-info",id:"tabs-info"},a)};s.propTypes={itemsTab:c().array,transition:c().bool,defaultActiveKey:c().number},s.defaultProps={itemsTab:[],transition:!0,defaultActiveKey:0};const d=s;var m=function(e){var t=e.itemslist,n=null==t?void 0:t.map((function(e){return e.value&&o().createElement(o().Fragment,null,o().createElement("dt",{className:"DList-cell DList-cell--medium"},o().createElement("strong",null,"".concat(e.label))),o().createElement("dd",{className:"DList-cell"},"".concat(e.value)))}));return o().createElement("dl",{className:"DList DList--2cols"},n)};m.propTypes={itemslist:c().array},m.defaultProps={itemslist:[]};const f=m;var v=function(e){var t=e.head,n=e.body,r=null==t?void 0:t.map((function(e){return e.value&&o().createElement(o().Fragment,null,o().createElement("th",null,e.value))})),a=null==n?void 0:n.map((function(e){return o().createElement("tr",null,t.map((function(t){return o().createElement("td",null,e[t.key])})))}));return o().createElement("table",{className:"table"},o().createElement("thead",null,o().createElement("tr",null,r)),o().createElement("tbody",null,a))};v.propTypes={head:c().array,body:c().array},v.defaultProps={head:[],body:[]};const p=v;var b=n(51605),y=n(5346),g=n(15135),h=n(30381),E=n.n(h),w=n(77593),O=n(35721),j=n(23279),P=n.n(j),N=n(74855),Z=n.n(N),I=n(42090),S=n.n(I);const _=(0,r.forwardRef)((function(e,t){var n=e.text,r=e.className,a=void 0===r?"gn-text-editable":r,l=e.tagName,i=e.disabled,u=e.onEdit,c=void 0===u?function(){}:u;return o().createElement(S(),{innerRef:t,className:a,html:n,tagName:l,disabled:i,onClick:function(e){e.stopPropagation()},onChange:function(e){c(e.target.value)}})}));var k=n(14068);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const x=function(e){var t,n,l=e.defaultImage,i=e.onEdit,u=void 0===i?function(){}:i,c=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],d=c[1];return(0,r.useEffect)((function(){d(l)}),[]),o().createElement(o().Fragment,null,o().createElement(k.Z,{thumbnail:s,onUpdate:function(e){d(e),u(e)},message:o().createElement(y.Z,{msgId:"gnviewer.uploadImage"})}),o().createElement("div",{className:"icon-image-preview"},o().createElement(a.Z,{name:"upload"})))};var C=n(89239),T=["src","style"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=(0,g.Z)(Z()),U=function(e){var t=e.title,n=e.onEdit,r=e.tagName,a=e.disabled;return o().createElement("div",{className:"editContainer"},o().createElement(_,{tagName:r,onEdit:n,text:t,disabled:a}))},q=function(e){var t=e.abstract,n=e.onEdit,r=e.tagName,a=e.disabled;return o().createElement("div",{className:"editContainer"},o().createElement(_,{tagName:r,onEdit:n,text:t,disabled:a}))},B=function(e){var t=e.image,n=e.onEdit;return o().createElement("div",{className:"editContainer imagepreview"},o().createElement(x,{onEdit:n,defaultImage:t}))};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 0===e.indexOf("http")?e:window.location.href}function H(e){var t=e.src,n=e.style,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,T),l=z((0,r.useState)(),2),i=l[0],u=l[1];return(0,r.useEffect)((function(){t&&!i&&u(!0)}),[t]),o().createElement("img",D({},a,{src:t,onLoad:function(){return u(!1)},onError:function(){return u(!1)},style:M(M(M({},n),i&&{backgroundColor:"transparent"}),{},{objectFit:"contain"})}))}var K=function(e){var t=e.itemslist,n=e.extraItemsList,a=z((0,r.useState)(!1),2),l=a[0],i=a[1];return o().createElement("div",{className:"DList-containner"},o().createElement(f,{itemslist:t}),n.length>0&&o().createElement("a",{className:"moreinfo",href:"javascript:void(0);",onClick:function(){i(!l)}},o().createElement(y.Z,{msgId:"gnviewer.moreinfo"})),n.length>0&&l&&o().createElement(f,{itemslist:n}))};function $(e){var t,n,i,u,c,s,m,f,v,g,h=e.resource,O=e.formatHref,j=e.linkHref,N=e.sectionStyle,Z=e.loading,I=e.getTypesInfo,S=e.editTitle,_=e.editAbstract,k=e.editThumbnail,A=e.activeEditMode,x=e.closePanel,T=e.favorite,D=e.onFavorite,R=e.enableFavorite,M=(0,r.useRef)(),L=(0,r.useRef)(),Y=z((0,r.useState)(!1),2),$=Y[0],W=Y[1];if((0,r.useEffect)((function(){return L.current=!0,function(){L.current=!1}}),[]),!h&&!Z)return null;var X=I(),G=h&&(X[h.subtype]||X[h.resource_type])||{},Q=G.formatEmbedUrl,J=void 0===Q?function(e){return null==e?void 0:e.embed_url}:Q,ee=G.formatDetailUrl,te=void 0===ee?function(e){return null==e?void 0:e.detail_url}:ee,ne=G.icon,re=G.name,oe=(null==h?void 0:h.embed_url)&&J(h),ae=(null==h?void 0:h.pk)&&te(h),le=null!=h&&h.href&&null!=h&&h.href.includes("download")?null==h?void 0:h.href:void 0,ie=null==h?void 0:h.attribute_set,ue=[{label:"Title",value:null==h?void 0:h.title},{label:"Abstract",value:null==h?void 0:h.raw_abstract},{label:"Owner",value:null==h||null===(t=h.owner)||void 0===t?void 0:t.username},{label:"Created",value:E()(null==h?void 0:h.created).format("MMMM Do YYYY")},{label:"Published",value:E()(null==h?void 0:h.date).format("MMMM Do YYYY")},{label:"Last Modified",value:E()(null==h?void 0:h.last_updated).format("MMMM Do YYYY")},{label:"Resource Type",value:null==h?void 0:h.resource_type},{label:"Category",value:null==h?void 0:h.category},{label:"Keywords",value:null==h||null===(n=h.keywords)||void 0===n?void 0:n.join(" ")},{label:"Regions",value:null==h||null===(i=h.regions)||void 0===i?void 0:i.map((function(e){return e.name+" "}))}],ce=[{label:"Point of Contact",value:(null==h||null===(u=h.poc)||void 0===u?void 0:u.first_name)+(null==h||null===(c=h.poc)||void 0===c?void 0:c.last_name)||(null==h||null===(s=h.poc)||void 0===s?void 0:s.username)},{label:"License",value:null==h||null===(m=h.license)||void 0===m?void 0:m.name_long},{label:"Attribution",value:null==h?void 0:h.attribution},{label:"Restriction",value:null==h||null===(f=h.restriction_code_type)||void 0===f?void 0:f.identifier},{label:"Edition",value:null==h?void 0:h.edition},{label:"Maintenance Frequency",value:null==h?void 0:h.maintenance_frequency},{label:"Language",value:null==h?void 0:h.language},{label:"Purpose",value:null==h?void 0:h.raw_purpose},{label:"Data Quality",value:null==h?void 0:h.raw_data_quality_statement},{label:"Temporal extent",value:null!=h&&h.temporal_extent_start?(null==h?void 0:h.temporal_extent_start)+" - ":void 0+(null==h?void 0:h.temporal_extent_end)?null==h?void 0:h.temporal_extent_end:void 0},{label:"Spatial Representation Type",value:null==h||null===(v=h.spatial_representation_type)||void 0===v?void 0:v.identifier},{label:"Supplemental Information",value:null==h?void 0:h.raw_supplemental_information}],se=[{title:o().createElement(y.Z,{msgId:"gnviewer.info"}),data:o().createElement(K,{itemslist:ue,extraItemsList:ce})}],de=[{key:"attribute",value:o().createElement(y.Z,{msgId:"gnviewer.attributeName"})},{key:"attribute_label",value:o().createElement(y.Z,{msgId:"gnviewer.label"})},{key:"description",value:o().createElement(y.Z,{msgId:"gnviewer.description"})}];return ie&&se.push({title:o().createElement(y.Z,{msgId:"gnviewer.attributes"}),data:o().createElement(p,{head:de,body:ie})}),o().createElement("div",{ref:M,className:"gn-details-panel".concat(Z?" loading":""),style:{width:null==N?void 0:N.width}},o().createElement("section",{style:N},o().createElement("div",{className:"gn-details-panel-header"},o().createElement(l.Z,{variant:"default",href:j(),onClick:x,size:"sm"},o().createElement(a.Z,{name:"times"}))),!A&&!k&&o().createElement("div",{className:"gn-details-panel-preview"},o().createElement("div",{className:"gn-loader-placeholder",style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(a.Z,{name:ne})),oe?o().createElement("iframe",{key:oe,src:oe,style:{position:"absolute",width:"100%",height:"100%"},frameBorder:"0"}):oe||k?void 0:o().createElement(H,{src:null==h?void 0:h.thumbnail_url,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,backgroundColor:"inherit"}}),Z&&o().createElement("div",{className:"gn-details-panel-preview-loader",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(b.Z,{animation:"border",role:"status"},o().createElement("span",{className:"sr-only"},"Loading resource detail...")))),o().createElement("div",{className:"gn-details-panel-content"},k&&o().createElement("div",{className:"gn-details-panel-content-img"},!A&&o().createElement(H,{src:null==h?void 0:h.thumbnail_url}),A&&o().createElement("div",{className:"gn-details-panel-preview inediting"}," ",o().createElement(B,{onEdit:k,image:null==h?void 0:h.thumbnail_url})," ")),o().createElement("div",{className:"gn-details-panel-content-text"},o().createElement("div",{className:"gn-details-panel-title"},o().createElement("span",{className:"gn-details-panel-title-icon"},o().createElement(a.Z,{name:ne})," ")," ",o().createElement(U,{disabled:!A,tagName:"h1",title:null==h?void 0:h.title,onEdit:S}),o().createElement("div",{className:"gn-details-panel-tools"},R&&o().createElement(l.Z,{variant:"default",onClick:P()((function(){D(!T)}),500)},o().createElement(a.Z,{name:T?"star":"star-o"})),le&&o().createElement(l.Z,{variant:"default",href:le},o().createElement(a.Z,{name:"download"})),ae&&o().createElement(F,{tooltipPosition:"top",tooltipId:$?"gnhome.copiedResourceUrl":"gnhome.copyResourceUrl",text:V(ae)},o().createElement(l.Z,{variant:"default",onClick:function(){W(!0),setTimeout((function(){L.current&&W(!1)}),700)}},o().createElement(a.Z,{name:"share-alt"}))),ae&&!k&&o().createElement(l.Z,{variant:"default",href:ae,rel:"noopener noreferrer"},o().createElement(y.Z,{msgId:"gnhome.view".concat(re||"")})))),(!(null!=h&&h.is_approved)||!(null!=h&&h.is_published))&&o().createElement("p",null,o().createElement(C.Z,{isApproved:null==h?void 0:h.is_approved,isPublished:null==h?void 0:h.is_published})),o().createElement("p",null,(null==h?void 0:h.owner)&&o().createElement(o().Fragment,null,o().createElement("a",{href:O({query:{"filter{owner.username.in}":h.owner.username}})},(0,w.vW)(h.owner))),(null==h?void 0:h.date_type)&&(null==h?void 0:h.date)&&o().createElement(o().Fragment,null," ","/"," ",E()(h.date).format("MMMM Do YYYY"))),o().createElement(q,{disabled:!A,tagName:"span",abstract:null==h?void 0:h.abstract,onEdit:_}),o().createElement("p",null,(null==h||null===(g=h.category)||void 0===g?void 0:g.identifier)&&o().createElement("div",null,o().createElement(y.Z,{msgId:"gnhome.category"}),":"," ",o().createElement("a",{href:O({query:{"filter{category.identifier.in}":h.category.identifier}})},h.category.identifier))))),S&&o().createElement("div",{className:"gn-details-panel-info"},o().createElement(d,{itemsTab:se}))))}$.defaultProps={onClose:function(){},formatHref:function(){return"#"},linkHref:function(){return"#"},width:696,getTypesInfo:O.NN};const W=$},824:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),o=n.n(r);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=(0,r.forwardRef)((function(e,t){var n=e.enabled,r=e.style,a=e.children;return n?o().createElement("div",{ref:t,className:"gn-overlay-container",style:l({position:"relative",width:"100%",height:"100%"},r)},a):null}))},99469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(67294),o=n.n(r),a=n(5346),l=n(45697),i=n.n(l),u=function(e){var t=e.isApproved,n=e.isPublished,r=t?t&&!n?{messageId:"gnviewer.unpublish",className:"unpublish"}:void 0:{messageId:"gnviewer.underApproval",className:"underApproval"};return o().createElement(o().Fragment,null,r&&o().createElement("span",{className:null==r?void 0:r.className},o().createElement(a.Z,{msgId:null==r?void 0:r.messageId})))};u.propTypes={isApproved:i().bool,isPublished:i().bool},u.defaultProps={isApproved:!0,isPublished:!0};const c=u},89239:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(99469)},28261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n.n(r),a=n(45697),l=n.n(a),i=["id","className","style","children"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.id,n=e.className,r=e.style,a=e.children,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),c=n?" "+n:"";return o().createElement(o().Fragment,null,o().createElement("div",u({},l,{id:t,className:"gn-spinner".concat(c),style:r}),o().createElement("div",null)),a)}c.propTypes={id:l().string,className:l().string,style:l().object},c.defaultProps={};const s=c},51605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(28261)},94228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(67294),o=n.n(r),a=n(22843),l=n(33664),i=n(22222),u=n(56845),c=n(74621),s=n(43892),d=n(25108),m=n(82904),f=n(72036),v=n(5346),p=n(3828),b=n(93473),y=n(45697),g=n.n(y);var h=n(824),E=(0,l.connect)((0,i.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.favorite)||!1}],(function(e,t,n){return{resource:e,loading:t,favorite:n}})),{closePanel:m.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:s.gw})(u.Z),w=(0,l.connect)((0,i.P1)([p.V$,p.fg],(function(e,t){return{hide:e||!t}})),{onClick:m.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var t=e.onClick,n=e.hide,r=e.variant,a=e.size;return n?null:o().createElement(b.Z,{variant:r,size:a,onClick:function(){t()}}," ",o().createElement(v.Z,{msgId:"gnviewer.details"}))}));function O(e){var t=e.enabled,n=e.onEditResource,a=e.onEditAbstractResource,l=e.onEditThumbnail,i=e.canEdit,u=e.width,c=e.hide,s=e.user,d=e.onClose,m=function(e){var t=e.disabled,n=e.onClickOut,o=(0,r.useRef)();return(0,r.useEffect)((function(){function e(e){var r;!t&&(null==o||null===(r=o.current)||void 0===r?void 0:r.contains)&&!o.current.contains(e.target)&&n()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[t,o,n]),o}({disabled:!t,onClickOut:function(){d()}});return c?null:o().createElement(h.Z,{enabled:t,ref:m,style:{width:u}},o().createElement(E,{editTitle:function(e){n(e)},editAbstract:function(e){a(e)},editThumbnail:function(e){l(e)},activeEditMode:t&&i,enableFavorite:!!s}))}O.propTypes={width:g().number},O.defaultProps={width:800};var j=(0,l.connect)((0,i.P1)([function(e){var t,n;return"DetailViewer"===(null==e||null===(t=e.controls)||void 0===t||null===(n=t.rightOverlay)||void 0===n?void 0:n.enabled)},p.il,p.V$,p.fg,c.np],(function(e,t,n,r,o){return{enabled:e,canEdit:t,hide:n||!r,user:o}})),{onEditResource:s.Br,onEditAbstractResource:s.bI,onEditThumbnail:s.U5,onClose:m.Xg.bind(null,"rightOverlay","enabled",!1)})(O);const P=(0,a.rx)("DetailViewer",{component:j,containers:{ViewerLayout:{name:"DetailViewer",target:"rightOverlay",priority:1},ActionNavbar:{name:"DetailViewerButton",Component:w,priority:1}},epics:{},reducers:{gnresource:f.Z,controls:d.Z}})}}]);