(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{N8AN:function(e,a,t){"use strict";var r=t("jT3O"),o=t("nKUr"),n=t("wx14"),l=t("Ff2n"),i=t("q1tI"),c=(t("17x9"),t("iuhU")),p=t("5AJ6"),s=Object(p.a)(i.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),u=t("H2TA"),d=t("ye/S"),g=t("bfFb"),m=t("NqtD"),b=t("VD++");function y(e){return"Backspace"===e.key||"Delete"===e.key}var h=i.forwardRef((function(e,a){var t=e.avatar,r=e.classes,o=e.className,p=e.clickable,u=e.color,d=void 0===u?"default":u,h=e.component,f=e.deleteIcon,v=e.disabled,C=void 0!==v&&v,O=e.icon,k=e.label,S=e.onClick,w=e.onDelete,j=e.onKeyDown,x=e.onKeyUp,T=e.size,A=void 0===T?"medium":T,R=e.variant,D=void 0===R?"default":R,L=Object(l.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=i.useRef(null),E=Object(g.a)(I,a),N=function(e){e.stopPropagation(),w&&w(e)},P=!(!1===p||!S)||p,$="small"===A,M=h||(P?b.a:"div"),G=M===b.a?{component:"div"}:{},z=null;if(w){var W=Object(c.a)("default"!==d&&("default"===D?r["deleteIconColor".concat(Object(m.a)(d))]:r["deleteIconOutlinedColor".concat(Object(m.a)(d))]),$&&r.deleteIconSmall);z=f&&i.isValidElement(f)?i.cloneElement(f,{className:Object(c.a)(f.props.className,r.deleteIcon,W),onClick:N}):i.createElement(s,{className:Object(c.a)(r.deleteIcon,W),onClick:N})}var B=null;t&&i.isValidElement(t)&&(B=i.cloneElement(t,{className:Object(c.a)(r.avatar,t.props.className,$&&r.avatarSmall,"default"!==d&&r["avatarColor".concat(Object(m.a)(d))])}));var K=null;return O&&i.isValidElement(O)&&(K=i.cloneElement(O,{className:Object(c.a)(r.icon,O.props.className,$&&r.iconSmall,"default"!==d&&r["iconColor".concat(Object(m.a)(d))])})),i.createElement(M,Object(n.a)({role:P||w?"button":void 0,className:Object(c.a)(r.root,o,"default"!==d&&[r["color".concat(Object(m.a)(d))],P&&r["clickableColor".concat(Object(m.a)(d))],w&&r["deletableColor".concat(Object(m.a)(d))]],"default"!==D&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[d]],C&&r.disabled,$&&r.sizeSmall,P&&r.clickable,w&&r.deletable),"aria-disabled":!!C||void 0,tabIndex:P||w?0:void 0,onClick:S,onKeyDown:function(e){e.currentTarget===e.target&&y(e)&&e.preventDefault(),j&&j(e)},onKeyUp:function(e){e.currentTarget===e.target&&(w&&y(e)?w(e):"Escape"===e.key&&I.current&&I.current.blur()),x&&x(e)},ref:E},G,L),B||K,i.createElement("span",{className:Object(c.a)(r.label,$&&r.labelSmall)},k),z)})),f=Object(u.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(d.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(h),v=t("vOnD");function C(){var e=Object(r.a)(['\n  display: "flex";\n  justify-content: "center";\n  flex-wrap: "wrap";\n  & > * {\n    margin: 3px;\n  }\n']);return C=function(){return e},e}a.a=function(e){return Object(o.jsx)(O,{children:e.tags.map((function(e){return Object(o.jsx)(f,{label:e},e)}))})};var O=v.a.div(C())},NbfU:function(e,a,t){"use strict";t.d(a,"f",(function(){return d})),t.d(a,"e",(function(){return g})),t.d(a,"a",(function(){return m})),t.d(a,"c",(function(){return b})),t.d(a,"d",(function(){return y})),t.d(a,"b",(function(){return h}));var r=t("jT3O"),o=t("vOnD"),n=t("xVSB");function l(){var e=Object(r.a)(["\n  background-color: ",";\n"]);return l=function(){return e},e}function i(){var e=Object(r.a)(["\n  width: 100%;\n  cursor: pointer;\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  margin-bottom: 5px;\n"]);return c=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: ",";\n"]);return p=function(){return e},e}function s(){var e=Object(r.a)(["\n  font-size: 20px;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)([""]);return u=function(){return e},e}var d=o.a.h1(u()),g=o.a.a(s()),m=o.a.h3(p(),n.a.subTextBlack),b=o.a.h2(c()),y=o.a.img(i()),h=o.a.div(l(),n.a.whiteColor)},juxa:function(e,a,t){"use strict";var r,o;t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return n})),t.d(a,"c",(function(){return l})),function(e){e.machineLearning="\u6a5f\u68b0\u5b66\u7fd2",e.python="Python",e.dataAnalysis="\u30c7\u30fc\u30bf\u5206\u6790",e.R="R",e.Selenium="Selenium",e.scraping="\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0",e.deepLearning="\u30c7\u30a3\u30fc\u30d7\u30e9\u30fc\u30cb\u30f3\u30b0",e.swift="Swift",e.AR="AR",e.physic="\u7269\u7406\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",e.iOS="iOS",e.android="android",e.kotlin="kotlin",e.webApp="Web\u30a2\u30d7\u30ea",e.mobile="mobile",e.vue="Vue",e.react="React",e.speechToText="\u97f3\u58f0\u8a8d\u8b58",e.imageRecognition="\u753b\u50cf\u8a8d\u8b58",e.cleanArchitecture="\u30af\u30ea\u30fc\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",e.TDD="\u30c6\u30b9\u30c8\u99c6\u52d5\u958b\u767a",e.naturalLanguage="\u81ea\u7136\u8a00\u8a9e\u51e6\u7406",e.twitter="Twitter",e.SPA="\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",e.serverless="\u30b5\u30fc\u30d0\u30ec\u30b9",e.dynamo="DynamoDB",e.lambda="Lambda",e.S3="S3 hosting",e.AWS="AWS",e.APIGateway="API Gateway",e.MySQL="MySQL",e.TypeScript="TypeScript",e.redux="Redux",e.team="\u30c1\u30fc\u30e0\u958b\u767a",e.solo="\u4e00\u4eba\u958b\u767a",e.highLoad="\u9ad8\u8ca0\u8377",e.GCP="GCP",e.speed="\u30b9\u30d4\u30fc\u30c9\u958b\u767a",e.agile="\u30a2\u30b8\u30e3\u30a4\u30eb\u958b\u767a",e.AppEngine="GoogleAppEngine",e.express="Express/RoutingController",e.TypeORM="TypeORM",e.automation="\u81ea\u52d5\u5316",e.nuxt="Nuxt.js",e.next="Next.js",e.EC2="EC2",e.CICD="CI/CD",e.reactNative="ReactNative",e.heroku="heroku",e.netlify="Netlify",e.websocket="Websocket",e.puppeteer="Puppeteer",e.firebase="Firebase",e.realTimeDB="RealTimeDB",e.OAuth="OAuth",e.docker="Docker",e.GoogleAnalytics="Google Analytics",e.consultant="\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8"}(r||(r={})),function(e){e.intern="\u30a4\u30f3\u30bf\u30fc\u30f3",e.personal="\u500b\u4eba\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",e.work="\u696d\u52d9"}(o||(o={}));var n=[{name:"\u6a5f\u68b0\u5b66\u7fd2\u306b\u3088\u308b\u682a\u5f0f\u58f2\u8cb7\u306e\u6700\u9069\u5316/\u81ea\u52d5\u5316",type:o.personal,slug:"auto-trading",image:"/auto-trading.png",tags:[r.machineLearning,r.python,r.R,r.dataAnalysis,r.Selenium,r.scraping,r.solo,r.automation]},{name:"DeepLearning\u306b\u3088\u308bjpeg\u753b\u50cf\u306e\u52a3\u5316\u5fa9\u5143",type:o.intern,slug:"jpeg-resolution",image:"/jpeg-resolution.jpg",tags:[r.machineLearning,r.python,r.deepLearning,r.solo]},{name:"AR\u3092\u6d3b\u7528\u3057\u305f\u6559\u80b2\u30a2\u30d7\u30ea",type:o.intern,slug:"ar-education",image:"/ar-education.png",tags:[r.swift,r.AR,r.physic,r.iOS,r.mobile,r.team]},{name:"TOEIC/\u82f1\u8a9e\u5b66\u7fd2\u30a2\u30d7\u30ea abceed",type:o.work,slug:"abceed",image:"/abceed.png",tags:[r.swift,r.kotlin,r.android,r.iOS,r.python,r.vue,r.mobile,r.webApp,r.dataAnalysis,r.speechToText,r.imageRecognition,r.cleanArchitecture,r.TDD,r.naturalLanguage,r.automation,r.docker]},{name:"\u30d1\u30f3\u30c4\u30b7\u30a7\u30a2\u30a2\u30d7\u30ea",type:o.personal,slug:"panty-share",image:"/panty-share.png",tags:[r.vue,r.twitter,r.SPA,r.serverless,r.webApp,r.solo,r.firebase,r.realTimeDB,r.OAuth]},{name:"\u5ba3\u4f1d\u30a2\u30d7\u30ea \u3042\u3069\u3042\u3063\u3077(1)",type:o.personal,slug:"adapp1",image:"/adapp1.png",tags:[r.react,r.twitter,r.serverless,r.redux,r.S3,r.lambda,r.APIGateway,r.team,r.netlify,r.OAuth]},{name:"\u62bd\u9078\u30a2\u30d7\u30ea \u3042\u3069\u3042\u3063\u3077(2)",type:o.personal,slug:"adapp2",image:"/adapp2.jpeg",tags:[r.react,r.twitter,r.serverless,r.redux,r.lambda,r.APIGateway,r.solo,r.highLoad,r.netlify]},{name:"Change the world",type:o.personal,slug:"changeTheWorld",image:"/changeTheWorld.png",tags:[r.react,r.serverless,r.GCP,r.solo,r.speed]},{name:"\u4e88\u7d04\u30b5\u30a4\u30c8\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9 Campwill",type:o.work,slug:"campwill",image:"/campwill.png",tags:[r.react,r.TypeScript,r.GCP,r.AppEngine,r.scraping,r.express,r.TypeORM,r.MySQL,r.highLoad,r.automation,r.TDD,r.CICD,r.puppeteer]},{name:"\u30b9\u30de\u30db\u3067\u97f3\u58f0\u30ac\u30a4\u30c9 smartguide",type:o.work,slug:"smartguide",image:"/smartguide.png",tags:[r.nuxt,r.vue,r.TypeScript,r.AWS,r.EC2,r.express,r.TypeORM,r.MySQL,r.TDD,r.agile,r.CICD,r.puppeteer,r.automation,r.GoogleAnalytics]},{name:"\u81ea\u5206\u7528\u76ee\u6a19\u9054\u6210\u30a2\u30d7\u30ea",type:o.personal,slug:"goal-achivement",image:"/goal-achivement.png",tags:[r.reactNative,r.mobile,r.TypeScript,r.agile]},{name:"\u30c6\u30b9\u30c8\u30e1\u30fc\u30ab\u30fc",type:o.personal,slug:"test-maker",image:"/test-maker.png",tags:[r.react,r.webApp,r.TypeScript,r.express,r.MySQL,r.heroku,r.TypeORM,r.CICD,r.team,r.agile,r.speed]},{name:"\u30b7\u30a7\u30a2\u30b5\u30a4\u30af\u30eb",type:o.personal,slug:"share-cycle",image:"/share-cycle.jpg",tags:[r.react,r.webApp,r.TypeScript,r.express,r.MySQL,r.EC2,r.TypeORM,r.CICD,r.solo,r.agile,r.websocket]},{name:"\u30a2\u30b8\u30e3\u30a4\u30eb\u958b\u767a\u5c0e\u5165\u652f\u63f4",type:o.work,slug:"agile",image:"/agile.png",tags:[r.agile,r.consultant]},{name:"\u30c8\u30e9\u30d9\u30eb\u30b9\u30eb\u30fc",type:o.work,slug:"travel-thru",image:"/travel-thru.png",tags:[r.agile,r.next,r.iOS,r.mobile,r.webApp]}];function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t={};e.forEach((function(e){e.tags.forEach((function(e){t[e]?t[e]+=1:t[e]=1}))}));var r=[];for(var o in t)t[o]>=a&&r.push(o);return r}}}]);