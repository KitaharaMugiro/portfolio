(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"1V/r":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");t.default=a},"23aj":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("rt45"),i=r("KQm4"),c=r("wx14"),p=(r("17x9"),r("2+6g"));var l=function(e,t){return t?Object(p.a)(e,t,{clone:!1}):e};var d=function(e){var t=function(t){var r=e(t);return t.css?Object(c.a)({},l(r,e(Object(c.a)({theme:t.theme},t.css))),{},function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(i.a)(e.filterProps)),t};var u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?l(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},s=r("rePB"),f=r("U8pU"),m={xs:0,sm:600,md:960,lg:1280,xl:1920},b={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(m[e],"px)")}};function h(e,t,r){if(Array.isArray(t)){var n=e.theme.breakpoints||b;return t.reduce((function(e,o,a){return e[n.up(n.keys[a])]=r(t[a]),e}),{})}if("object"===Object(f.a)(t)){var o=e.theme.breakpoints||b;return Object.keys(t).reduce((function(e,n){return e[o.up(n)]=r(t[n]),e}),{})}return r(t)}function y(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var g=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=y(e.theme,o)||{};return h(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=y(i,e)||e,a&&(t=a(t))),!1===n?t:Object(s.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function v(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var x=u(g({prop:"border",themeKey:"borders",transform:v}),g({prop:"borderTop",themeKey:"borders",transform:v}),g({prop:"borderRight",themeKey:"borders",transform:v}),g({prop:"borderBottom",themeKey:"borders",transform:v}),g({prop:"borderLeft",themeKey:"borders",transform:v}),g({prop:"borderColor",themeKey:"palette"}),g({prop:"borderRadius",themeKey:"shape"})),O=u(g({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),g({prop:"display"}),g({prop:"overflow"}),g({prop:"textOverflow"}),g({prop:"visibility"}),g({prop:"whiteSpace"})),j=u(g({prop:"flexBasis"}),g({prop:"flexDirection"}),g({prop:"flexWrap"}),g({prop:"justifyContent"}),g({prop:"alignItems"}),g({prop:"alignContent"}),g({prop:"order"}),g({prop:"flex"}),g({prop:"flexGrow"}),g({prop:"flexShrink"}),g({prop:"alignSelf"}),g({prop:"justifyItems"}),g({prop:"justifySelf"})),S=u(g({prop:"position"}),g({prop:"zIndex",themeKey:"zIndex"}),g({prop:"top"}),g({prop:"right"}),g({prop:"bottom"}),g({prop:"left"})),k=u(g({prop:"color",themeKey:"palette"}),g({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),w=g({prop:"boxShadow",themeKey:"shadows"});function z(e){return e<=1?"".concat(100*e,"%"):e}var C=g({prop:"width",transform:z}),R=g({prop:"maxWidth",transform:z}),T=g({prop:"minWidth",transform:z}),P=g({prop:"height",transform:z}),E=g({prop:"maxHeight",transform:z}),I=g({prop:"minHeight",transform:z}),N=(g({prop:"size",cssProperty:"width",transform:z}),g({prop:"size",cssProperty:"height",transform:z}),u(C,R,T,P,E,I)),H=r("ODXe");var A={m:"margin",p:"padding"},V={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},_={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},B=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){if(e.length>2){if(!_[e])return[e];e=_[e]}var t=e.split(""),r=Object(H.a)(t,2),n=r[0],o=r[1],a=A[n],i=V[o]||"";return Array.isArray(i)?i.map((function(e){return a+e})):[a+i]})),K=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function L(e,t){return function(r){return e.reduce((function(e,n){return e[n]=function(e,t){if("string"===typeof t)return t;var r=e(Math.abs(t));return t>=0?r:"number"===typeof r?-r:"-".concat(r)}(t,r),e}),{})}}function q(e){var t=function(e){var t=e.spacing||8;return"number"===typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"===typeof t?t:function(){}}(e.theme);return Object.keys(e).map((function(r){if(-1===K.indexOf(r))return null;var n=L(B(r),t),o=e[r];return h(e,o,n)})).reduce(l,{})}q.propTypes={},q.filterProps=K;var M=q,$=u(g({prop:"fontFamily",themeKey:"typography"}),g({prop:"fontSize",themeKey:"typography"}),g({prop:"fontStyle",themeKey:"typography"}),g({prop:"fontWeight",themeKey:"typography"}),g({prop:"letterSpacing"}),g({prop:"lineHeight"}),g({prop:"textAlign"})),D=r("Ff2n"),W=r("iuhU"),U=r("2mql"),X=r.n(U),J=r("RD7I");function Y(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var F=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.name,a=Object(D.a)(r,["name"]);var i,p=n,l="function"===typeof t?function(e){return{root:function(r){return t(Object(c.a)({theme:e},r))}}}:{root:t},d=Object(J.a)(l,Object(c.a)({Component:e,name:n||e.displayName,classNamePrefix:p},a));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var u=o.a.forwardRef((function(t,r){var n=t.children,a=t.className,p=t.clone,l=t.component,u=Object(D.a)(t,["children","className","clone","component"]),s=d(t),f=Object(W.a)(s.root,a),m=u;if(i&&(m=Y(m,i)),p)return o.a.cloneElement(n,Object(c.a)({className:Object(W.a)(n.props.className,f)},m));if("function"===typeof n)return n(Object(c.a)({className:f},m));var b=l||e;return o.a.createElement(b,Object(c.a)({ref:r,className:f},m),n)}));return X()(u,e),u}},G=r("cNwE"),Q=function(e){var t=F(e);return function(e,r){return t(e,Object(c.a)({defaultTheme:G.a},r))}},Z=d(u(x,O,j,S,k,w,N,M,$)),ee=Q("div")(Z,{name:"MuiBox"}),te=r("H2TA"),re=r("ye/S"),ne=r("VD++"),oe=r("NqtD"),ae=o.a.forwardRef((function(e,t){var r=e.children,n=e.classes,a=e.className,i=e.color,p=void 0===i?"default":i,l=e.component,d=void 0===l?"button":l,u=e.disabled,s=void 0!==u&&u,f=e.disableElevation,m=void 0!==f&&f,b=e.disableFocusRipple,h=void 0!==b&&b,y=e.endIcon,g=e.focusVisibleClassName,v=e.fullWidth,x=void 0!==v&&v,O=e.size,j=void 0===O?"medium":O,S=e.startIcon,k=e.type,w=void 0===k?"button":k,z=e.variant,C=void 0===z?"text":z,R=Object(D.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),T=S&&o.a.createElement("span",{className:Object(W.a)(n.startIcon,n["iconSize".concat(Object(oe.a)(j))])},S),P=y&&o.a.createElement("span",{className:Object(W.a)(n.endIcon,n["iconSize".concat(Object(oe.a)(j))])},y);return o.a.createElement(ne.a,Object(c.a)({className:Object(W.a)(n.root,n[C],a,"inherit"===p?n.colorInherit:"default"!==p&&n["".concat(C).concat(Object(oe.a)(p))],"medium"!==j&&[n["".concat(C,"Size").concat(Object(oe.a)(j))],n["size".concat(Object(oe.a)(j))]],m&&n.disableElevation,s&&n.disabled,x&&n.fullWidth),component:d,disabled:s,focusRipple:!h,focusVisibleClassName:Object(W.a)(n.focusVisible,g),ref:t,type:w},R),o.a.createElement("span",{className:n.label},T,r,P))})),ie=Object(te.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(re.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(re.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(re.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(re.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(re.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(re.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(re.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(ae),ce=r("nOHt"),pe=r("Buh+"),le=r("vOnD"),de=r("xVSB"),ue="mugiro",se="I'm an application engineer",fe=r("kpu4"),me=o.a.createElement;function be(){var e=Object(a.a)(["\n  height: 20px;\n"]);return be=function(){return e},e}function he(){var e=Object(a.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n"]);return he=function(){return e},e}function ye(){var e=Object(a.a)(["\n  text-align: center;\n"]);return ye=function(){return e},e}function ge(){var e=Object(a.a)(["\n  color: ",";\n"]);return ge=function(){return e},e}function ve(){var e=Object(a.a)(["\n  color: ",";\n"]);return ve=function(){return e},e}var xe=function(){var e=Object(ce.useRouter)();return me("div",null,me(Se,null,me(Oe,null,ue),me(je,null,se)),me(we,null),me(we,null),me(we,null),me(ke,null,me(ee,{display:"flex",flexDirection:"row"},pe.a.filter((function(e){return e.displayAtHome})).map((function(t){return me(ee,{m:2,key:t.name},me(ie,{variant:"contained",color:"primary",onClick:function(){return e.push(t.link,Object(fe.a)(t.link))}},t.name))})))),me(we,null))},Oe=le.a.h1(ve(),de.a.mainTextBlack),je=le.a.h3(ge(),de.a.subTextBlack),Se=le.a.div(ye()),ke=le.a.div(he()),we=le.a.div(be()),ze=o.a.createElement;t.default=function(){return ze("div",null,ze(xe,null))}},"8/g6":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default.memo(a.default.forwardRef((function(t,r){return a.default.createElement(i.default,(0,o.default)({ref:r},t),e)})));0;return r.muiName=i.default.muiName,r};var o=n(r("pVnL")),a=n(r("q1tI")),i=n(r("UJJ5"))},"Buh+":function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("q1tI"),o=r.n(n),a=r("i7oR"),i=r.n(a),c=r("1V/r"),p=r.n(c),l=r("gUCY"),d=r.n(l),u=r("Rme4"),s=r.n(u),f=o.a.createElement,m=[{name:"Home",link:"/",icon:function(){return f(s.a,null)},displayAtHome:!1},{name:"Profile",link:"/profile",icon:function(){return f(i.a,null)},displayAtHome:!0},{name:"Products",link:"/products",icon:function(){return f(p.a,null)},displayAtHome:!0},{name:"History",link:"/history",icon:function(){return f(d.a,null)},displayAtHome:!0}]},Rme4:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=a},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UJJ5:function(e,t,r){"use strict";r.r(t);var n=r("HR5l");r.d(t,"default",(function(){return n.a}))},gUCY:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("defs",null,o.default.createElement("path",{id:"a",d:"M0 0h24v24H0V0z"})),o.default.createElement("path",{d:"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"})),"Timeline");t.default=a},i7oR:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}),"AccountBox");t.default=a},pVnL:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r}},[["/EDR",0,1,2,3,4,5]]]);