_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"1V/r":function(e,t,r){"use strict";var o=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("q1tI")),i=(0,o(r("8/g6")).default)(a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");t.default=i},"20a2":function(e,t,r){e.exports=r("nOHt")},"23aj":function(e,t,r){"use strict";r.r(t);var o=r("nKUr"),n=r("jT3O"),a=r("KQm4"),i=r("wx14"),c=(r("17x9"),r("bv9d"));var p=function(e){var t=function(t){var r=e(t);return t.css?Object(i.a)({},Object(c.a)(r,e(Object(i.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(a.a)(e.filterProps)),t};var u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(c.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},l=r("rePB"),d=r("LybE");function s(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var f=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=s(e.theme,n)||{};return Object(d.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=s(i,e)||e,a&&(t=a(t))),!1===o?t:Object(l.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function b(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var m=u(f({prop:"border",themeKey:"borders",transform:b}),f({prop:"borderTop",themeKey:"borders",transform:b}),f({prop:"borderRight",themeKey:"borders",transform:b}),f({prop:"borderBottom",themeKey:"borders",transform:b}),f({prop:"borderLeft",themeKey:"borders",transform:b}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),h=u(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),y=u(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),v=u(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),x=u(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),g=u(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),j=f({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var w=f({prop:"width",transform:O}),S=f({prop:"maxWidth",transform:O}),k=f({prop:"minWidth",transform:O}),C=f({prop:"height",transform:O}),z=f({prop:"maxHeight",transform:O}),R=f({prop:"minHeight",transform:O}),P=(f({prop:"size",cssProperty:"width",transform:O}),f({prop:"size",cssProperty:"height",transform:O}),u(w,S,k,C,z,R,f({prop:"boxSizing"}))),_=r("+Hmc"),T=u(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),N=r("Ff2n"),I=r("q1tI"),E=r.n(I),H=r("iuhU"),M=r("2mql"),A=r.n(M),K=r("RD7I");function V(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var B=r("cNwE"),D=function(e){var t=function(e){return function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.name,a=Object(N.a)(o,["name"]),c=n,p="function"===typeof t?function(e){return{root:function(r){return t(Object(i.a)({theme:e},r))}}}:{root:t},u=Object(K.a)(p,Object(i.a)({Component:e,name:n||e.displayName,classNamePrefix:c},a));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=E.a.forwardRef((function(t,o){var n=t.children,a=t.className,c=t.clone,p=t.component,l=Object(N.a)(t,["children","className","clone","component"]),d=u(t),s=Object(H.a)(d.root,a),f=l;if(r&&(f=V(f,r)),c)return E.a.cloneElement(n,Object(i.a)({className:Object(H.a)(n.props.className,s)},f));if("function"===typeof n)return n(Object(i.a)({className:s},f));var b=p||e;return E.a.createElement(b,Object(i.a)({ref:o,className:s},f),n)}));return A()(l,e),l}}(e);return function(e,r){return t(e,Object(i.a)({defaultTheme:B.a},r))}},W=p(u(m,h,y,v,x,g,j,P,_.b,T)),q=D("div")(W,{name:"MuiBox"}),L=r("H2TA"),$=r("ye/S"),F=r("VD++"),G=r("NqtD"),J=I.forwardRef((function(e,t){var r=e.children,o=e.classes,n=e.className,a=e.color,c=void 0===a?"default":a,p=e.component,u=void 0===p?"button":p,l=e.disabled,d=void 0!==l&&l,s=e.disableElevation,f=void 0!==s&&s,b=e.disableFocusRipple,m=void 0!==b&&b,h=e.endIcon,y=e.focusVisibleClassName,v=e.fullWidth,x=void 0!==v&&v,g=e.size,j=void 0===g?"medium":g,O=e.startIcon,w=e.type,S=void 0===w?"button":w,k=e.variant,C=void 0===k?"text":k,z=Object(N.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=O&&I.createElement("span",{className:Object(H.a)(o.startIcon,o["iconSize".concat(Object(G.a)(j))])},O),P=h&&I.createElement("span",{className:Object(H.a)(o.endIcon,o["iconSize".concat(Object(G.a)(j))])},h);return I.createElement(F.a,Object(i.a)({className:Object(H.a)(o.root,o[C],n,"inherit"===c?o.colorInherit:"default"!==c&&o["".concat(C).concat(Object(G.a)(c))],"medium"!==j&&[o["".concat(C,"Size").concat(Object(G.a)(j))],o["size".concat(Object(G.a)(j))]],f&&o.disableElevation,d&&o.disabled,x&&o.fullWidth),component:u,disabled:d,focusRipple:!m,focusVisibleClassName:Object(H.a)(o.focusVisible,y),ref:t,type:S},z),I.createElement("span",{className:o.label},R,r,P))})),U=Object(L.a)((function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object($.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object($.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object($.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object($.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object($.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object($.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object($.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(J),X=r("20a2"),Q=r("ha4H"),Y=r("vOnD"),Z=r("xVSB"),ee="mugiro",te="I'm an application engineer",re=r("kpu4");function oe(){var e=Object(n.a)(["\n  height: 20px;\n"]);return oe=function(){return e},e}function ne(){var e=Object(n.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n"]);return ne=function(){return e},e}function ae(){var e=Object(n.a)(["\n  text-align: center;\n"]);return ae=function(){return e},e}function ie(){var e=Object(n.a)(["\n  color: ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(n.a)(["\n  color: ",";\n"]);return ce=function(){return e},e}var pe=function(){var e=Object(X.useRouter)();return Object(o.jsxs)("div",{children:[Object(o.jsxs)(de,{children:[Object(o.jsx)(ue,{children:ee}),Object(o.jsx)(le,{children:te})]}),Object(o.jsx)(fe,{}),Object(o.jsx)(fe,{}),Object(o.jsx)(fe,{}),Object(o.jsx)(se,{children:Object(o.jsx)(q,{display:"flex",flexDirection:"row",children:Q.a.filter((function(e){return e.displayAtHome})).map((function(t){return Object(o.jsx)(q,{m:2,children:Object(o.jsx)(U,{variant:"contained",color:"primary",onClick:function(){return e.push(t.link,Object(re.a)(t.link))},children:t.name})},t.name)}))})}),Object(o.jsx)(fe,{})]})},ue=Y.a.h1(ce(),Z.a.mainTextBlack),le=Y.a.h3(ie(),Z.a.subTextBlack),de=Y.a.div(ae()),se=Y.a.div(ne()),fe=Y.a.div(oe());t.default=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(pe,{})})}},"284h":function(e,t,r){var o=r("cDf5").default;function n(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var p=i?Object.getOwnPropertyDescriptor(e,c):null;p&&(p.get||p.set)?Object.defineProperty(a,c,p):a[c]=e[c]}return a.default=e,r&&r.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},"8/g6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r("kNCj")},Rme4:function(e,t,r){"use strict";var o=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("q1tI")),i=(0,o(r("8/g6")).default)(a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=i},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},"g+pH":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("gk1O");function n(e){return Object(o.a)(e).defaultView||window}},gk1O:function(e,t,r){"use strict";function o(e){return e&&e.ownerDocument||document}r.d(t,"a",(function(){return o}))},ha4H:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("nKUr"),n=r("i7oR"),a=r.n(n),i=r("1V/r"),c=r.n(i),p=r("Rme4"),u=r.n(p),l=[{name:"Home",link:"/",icon:function(){return Object(o.jsx)(u.a,{})},displayAtHome:!1},{name:"Profile",link:"/profile",icon:function(){return Object(o.jsx)(a.a,{})},displayAtHome:!0},{name:"Products",link:"/products",icon:function(){return Object(o.jsx)(c.a,{})},displayAtHome:!0}]},i7oR:function(e,t,r){"use strict";var o=r("TqRt"),n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("q1tI")),i=(0,o(r("8/g6")).default)(a.createElement("path",{d:"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}),"AccountBox");t.default=i},kNCj:function(e,t,r){"use strict";r.r(t),r.d(t,"capitalize",(function(){return o.a})),r.d(t,"createChainedFunction",(function(){return n.a})),r.d(t,"createSvgIcon",(function(){return a.a})),r.d(t,"debounce",(function(){return i.a})),r.d(t,"deprecatedPropType",(function(){return c})),r.d(t,"isMuiElement",(function(){return p.a})),r.d(t,"ownerDocument",(function(){return u.a})),r.d(t,"ownerWindow",(function(){return l.a})),r.d(t,"requirePropFactory",(function(){return d})),r.d(t,"setRef",(function(){return s.a})),r.d(t,"unsupportedProp",(function(){return f.a})),r.d(t,"useControlled",(function(){return b.a})),r.d(t,"useEventCallback",(function(){return m.a})),r.d(t,"useForkRef",(function(){return h.a})),r.d(t,"unstable_useId",(function(){return y.a})),r.d(t,"useIsFocusVisible",(function(){return v.a}));var o=r("NqtD"),n=r("x6Ns"),a=r("5AJ6"),i=r("l3Wi");function c(e,t){return function(){return null}}var p=r("ucBr"),u=r("gk1O"),l=r("g+pH");function d(e){return function(){return null}}var s=r("GIek"),f=r("y6BH"),b=r("yCxk"),m=r("Ovef"),h=r("bfFb"),y=r("wRgb"),v=r("G7As")},l3Wi:function(e,t,r){"use strict";function o(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];var i=this,c=function(){e.apply(i,n)};clearTimeout(t),t=setTimeout(c,r)}return o.clear=function(){clearTimeout(t)},o}r.d(t,"a",(function(){return o}))},ucBr:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("q1tI");function n(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},wRgb:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("q1tI");function n(e){var t=o.useState(e),r=t[0],n=t[1],a=e||r;return o.useEffect((function(){null==r&&n("mui-".concat(Math.round(1e5*Math.random())))}),[r]),a}},x6Ns:function(e,t,r){"use strict";function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];e.apply(this,o),t.apply(this,o)}}),(function(){}))}r.d(t,"a",(function(){return o}))},y6BH:function(e,t,r){"use strict";function o(e,t,r,o,n){return null}r.d(t,"a",(function(){return o}))},yCxk:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("q1tI");function n(e){var t=e.controlled,r=e.default,n=(e.name,e.state,o.useRef(void 0!==t).current),a=o.useState(r),i=a[0],c=a[1];return[n?t:i,o.useCallback((function(e){n||c(e)}),[])]}}},[["/EDR",0,1,2,3,5]]]);