(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7236],{1550:(t,e,o)=>{"use strict";o.d(e,{pP:()=>r,TR:()=>i,N7:()=>c,mq:()=>p,uv:()=>u,Qy:()=>a,IL:()=>l,Li:()=>s,OW:()=>f,ZO:()=>y,Um:()=>m,TF:()=>b,Ls:()=>h,Ec:()=>g,Eu:()=>E,JJ:()=>O,nZ:()=>v,YD:()=>_,GI:()=>d,Jb:()=>S,Uh:()=>x,LP:()=>T,xy:()=>P,o6:()=>C,FP:()=>N,Mo:()=>I,sO:()=>R,Px:()=>j,hd:()=>w,BV:()=>A,SO:()=>z,H0:()=>M,$X:()=>Z,ou:()=>G,NE:()=>L});var n=o(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",p="CHANGE_ZOOM_LVL",u="PAN_TO",a="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",m="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",h="UPDATE_VERSION",g="INIT_MAP",E="RESIZE_MAP",O="CHANGE_MAP_LIMITS",v="SET_MAP_RESOLUTIONS",_="REGISTER_EVENT_LISTENER",d="UNREGISTER_EVENT_LISTENER",S="MOUSE_MOVE",x="MOUSE_OUT";function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,n.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function P(t,e,o){return{type:l,pos:t,zoom:e,crs:o}}function C(t,e,o,n,i,c,p,u){return{type:r,center:t,zoom:e,bbox:o,size:n,mapStateSource:i,projection:c,viewerOptions:p,resolution:u}}function N(t,e){return{type:i,point:t,layer:e}}function I(t){return{type:c,pointer:t}}function R(t,e){return{type:p,zoom:t,mapStateSource:e}}function j(t,e,o){return{type:a,extent:t,crs:e,maxZoom:o}}function w(t,e){return{type:y,style:t,mapStateSource:e}}function A(t){var e=t.restrictedExtent,o=t.crs,n=t.minZoom;return{type:O,restrictedExtent:e,crs:o,minZoom:n}}function z(t){return{type:v,resolutions:t}}var M=function(t,e){return{type:_,eventName:t,toolName:e}},Z=function(t,e){return{type:d,eventName:t,toolName:e}},G=function(t){return{type:S,position:t}},L=function(){return{type:x}}},50966:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(61365),r=o(30294);const i=(0,n.Z)(r.OverlayTrigger)},61365:(t,e,o)=>{"use strict";o.d(e,{Z:()=>p});var n=o(24852),r=o.n(n),i=o(37275);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}const p=function(t){return function(e){return r().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},19461:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>k}),o(48966);var n=o(27418),r=o.n(n),i=o(24852),c=o.n(i),p=o(30294),u=o(71703),a=o(22222),l=o(1550),s=o(45697),f=o.n(s),y=o(38560),m=o(50966),b=o(52259),h=o(37275);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(u,t);var e,o,n,r,i=(n=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(r){var o=S(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return _(this,t)});function u(){var t;E(this,u);for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return x(d(t=i.call.apply(i,[this].concat(o))),"addTooltip",(function(e){var o=c().createElement(p.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return c().createElement(m.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:o},e)})),x(d(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,o=t.props.mapConfig.size,n=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(n=(0,b.getZoomForExtent)(e,o,0,21),0===(r=(0,b.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,h.qg)(r,"EPSG:4326")));var c=(0,b.getBbox)(r,n,o);t.props.changeMapView(r,n,c,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),x(d(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,o=(0,b.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,o,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=u,(o=[{key:"render",value:function(){var t=this;return this.addTooltip(c().createElement(y.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(p.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&O(e.prototype,o),u}(c().Component);x(T,"propTypes",{id:f().string,image:f().string,glyphicon:f().string,text:f().string,btnSize:f().oneOf(["large","small","xsmall"]),mapConfig:f().object,mapInitialConfig:f().object,changeMapView:f().func,btnType:f().oneOf(["normal","image"]),help:f().oneOfType([f().string,f().element]),tooltip:f().element,tooltipPlace:f().string,className:f().string,useInitialExtent:f().bool,bsStyle:f().string,style:f().object}),x(T,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const P=T;var C=o(5346),N=o(827);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=(0,a.P1)([N.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),G=(0,u.connect)(Z,{changeMapView:l.o6})(P),L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(p,t);var e,o,n,r,i=(n=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(n);if(r){var o=M(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return z(this,t)});function p(){return j(this,p),i.apply(this,arguments)}return e=p,(o=[{key:"render",value:function(){return c().createElement(G,R({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&w(e.prototype,o),p}(c().Component);const k={ZoomAllPlugin:r()(L,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:c().createElement(p.Glyphicon,{glyph:"resize-full"}),help:c().createElement(C.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},60536:(t,e,o)=>{(t.exports=o(9252)()).push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""])},48966:(t,e,o)=>{var n=o(60536);"string"==typeof n&&(n=[[t.id,n,""]]),o(14246)(n,{}),n.locals&&(t.exports=n.locals)}}]);