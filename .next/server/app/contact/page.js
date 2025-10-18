(()=>{var e={};e.id=327,e.ids=[327],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2190:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=r(482),s=r(9108),n=r(2563),i=r.n(n),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5153)),"C:\\Users\\Lenovo\\Desktop\\workspace\\my-app\\my-app\\src\\app\\contact\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"C:\\Users\\Lenovo\\Desktop\\workspace\\my-app\\my-app\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Lenovo\\Desktop\\workspace\\my-app\\my-app\\src\\app\\contact\\page.jsx"],u="/contact/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1884:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},2822:(e,t,r)=>{Promise.resolve().then(r.bind(r,8328))},9381:(e,t,r)=>{Promise.resolve().then(r.bind(r,7703))},1900:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let a=r(9694),s=r(7824),n=r(5344),i=s._(r(3729)),o=a._(r(1202)),l=a._(r(1758)),d=r(3855),c=r(3053),u=r(4187);r(837);let p=r(6150),m=a._(r(4931)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,a,s,n){let i=null==e?void 0:e.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function h(e){let[t,r]=i.version.split(".",2),a=parseInt(t,10),s=parseInt(r,10);return a>18||18===a&&s>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let b=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:s,height:o,width:l,decoding:d,className:c,style:u,fetchPriority:p,placeholder:m,loading:f,unoptimized:b,fill:x,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:w,onLoad:_,onError:N,...S}=e;return(0,n.jsx)("img",{...S,...h(p),loading:f,width:l,height:o,decoding:d,"data-nimg":x?"fill":"1",className:c,style:u,sizes:s,srcSet:a,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&g(e,m,v,y,j,b))},[r,m,v,y,j,N,b,t]),onLoad:e=>{g(e.currentTarget,m,v,y,j,b)},onError:e=>{w(!0),"empty"!==m&&j(!0),N&&N(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,a),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(p.RouterContext),a=(0,i.useContext)(u.ImageConfigContext),s=(0,i.useMemo)(()=>{let e=f||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:o,onLoadingComplete:l}=e,g=(0,i.useRef)(o);(0,i.useEffect)(()=>{g.current=o},[o]);let h=(0,i.useRef)(l);(0,i.useEffect)(()=>{h.current=l},[l]);let[v,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),{props:_,meta:N}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:s,blurComplete:v,showAltText:j});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{..._,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:w,ref:t}),N.priority?(0,n.jsx)(x,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7637:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.AmpContext},2158:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.HeadManagerContext},4187:(e,t,r)=>{"use strict";e.exports=r(6372).vendored.contexts.ImageConfigContext},3126:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||r&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(837);let a=r(3990),s=r(3053);function n(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:c,sizes:u,unoptimized:p=!1,priority:m=!1,loading:f,className:g,quality:h,width:b,height:x,fill:v=!1,style:y,onLoad:j,onLoadingComplete:w,placeholder:_="empty",blurDataURL:N,fetchPriority:S,layout:P,objectFit:C,objectPosition:k,lazyBoundary:O,lazyRoot:E,...A}=e,{imgConf:M,showAltText:z,blurComplete:I,defaultLoader:D}=t,q=M||s.imageConfigDefault;if("allSizes"in q)o=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t);o={...q,allSizes:e,deviceSizes:t}}let R=A.loader||D;delete A.loader,delete A.srcSet;let L="__next_img_default"in R;if(L){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:r,...a}=t;return e(a)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!u&&(u=t)}let $="",U=i(b),T=i(x);if("object"==typeof(r=c)&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,N=N||e.blurDataURL,$=e.src,!v){if(U||T){if(U&&!T){let t=U/e.width;T=Math.round(e.height*t)}else if(!U&&T){let t=T/e.height;U=Math.round(e.width*t)}}else U=e.width,T=e.height}}let G=!m&&("lazy"===f||void 0===f);(!(c="string"==typeof c?c:$)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,G=!1),o.unoptimized&&(p=!0),L&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(p=!0),m&&(S="high");let F=i(h),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:k}:{},z?{}:{color:"transparent"},y),B=I||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:U,heightInt:T,blurWidth:l,blurHeight:d,blurDataURL:N||"",objectFit:W.objectFit})+'")':'url("'+_+'")',H=B?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},V=function(e){let{config:t,src:r,unoptimized:a,width:s,quality:n,sizes:i,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:a,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,i),c=l.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:l.map((e,a)=>o({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:a+1)+d).join(", "),src:o({config:t,src:r,quality:n,width:l[c]})}}({config:o,src:c,unoptimized:p,width:U,quality:F,sizes:u,loader:R});return{props:{...A,loading:G?"lazy":f,fetchPriority:S,width:U,height:T,decoding:"async",className:g,style:{...W,...H},sizes:V.sizes,srcSet:V.srcSet,src:V.src},meta:{unoptimized:p,priority:m,placeholder:_,fill:v}}}},1758:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return g}});let a=r(9694),s=r(7824),n=r(5344),i=s._(r(3729)),o=a._(r(7984)),l=r(7637),d=r(2158),c=r(3126);function u(e){void 0===e&&(e=!1);let t=[(0,n.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(837);let m=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,a={};return s=>{let n=!0,i=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){i=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?n=!1:t.add(s.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?n=!1:r.add(t);else{let e=s.props[t],r=a[t]||new Set;("name"!==t||!i)&&r.has(e)?n=!1:(r.add(e),a[t]=r)}}}}return n}}()).reverse().map((e,t)=>{let a=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:a})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),a=(0,i.useContext)(d.HeadManagerContext);return(0,n.jsx)(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3990:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:s,blurDataURL:n,objectFit:i}=e,o=a?40*a:t,l=s?40*s:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3053:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return a}});let r=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return o},default:function(){return l}});let a=r(9694),s=r(3855),n=r(1900),i=a._(r(4931)),o=e=>{let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=n.Image},4931:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:a,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},7984:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=r(3729),s=()=>{},n=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function o(){if(r&&r.mountedInstances){let t=a.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),n(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},8328:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(5344),s=r(8986),n=r.n(s);r(3824);var i=r(3729);function o(){return a.jsx("nav",{className:"navbar navbar-expand-md shadow-sm py-1",children:(0,a.jsxs)("div",{className:"container",children:[a.jsx("img",{src:"/lol.png",className:" rounded-2",width:45,height:35,alt:""}),a.jsx("a",{href:"/",className:"navbar-brand fw-bolder text-uppercase",children:"Bako`s e n t"}),a.jsx("button",{className:"navbar-toggler shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-nav","aria-controls":"main-nav","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("div",{className:"collapse navbar-collapse justify-content-end align-center",id:"main-nav",children:(0,a.jsxs)("ul",{className:"navbar-nav",children:[a.jsx("li",{className:"nav-item",children:a.jsx("a",{href:"/about",className:"nav-link fw-bold",children:"About"})}),a.jsx("ul",{className:"navbar-nav"}),a.jsx("li",{className:"nav-item",children:a.jsx("a",{href:"/tutorials",className:"nav-link fw-bold",children:"Tutorials"})}),a.jsx("ul",{className:"navbar-nav"}),a.jsx("li",{className:"nav-item",children:a.jsx("a",{href:"/project",className:"nav-link fw-bold",children:"Project"})}),a.jsx("ul",{className:"navbar-nav"}),a.jsx("li",{className:"nav-item",children:a.jsx("a",{href:"/contact",className:"nav-link fw-bold",children:"Contact"})}),a.jsx("ul",{className:"navbar-nav"}),a.jsx("li",{className:"nav-item",children:a.jsx("a",{href:"/home",className:"nav-link fw-bold",children:"Home"})})]})})]})})}function l({children:e}){return(0,i.useEffect)(()=>{r.e(525).then(r.t.bind(r,2525,23))},[]),a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:n().className,children:[a.jsx(o,{}),e]})})}r(6506)},7703:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var a,s=r(5344);r(6506);var n=r(7412),i=r.n(n),o=r(3729);let l={data:""},d=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,m=(e,t)=>{let r="",a="",s="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":a+="f"==n[1]?m(i,n):n+"{"+m(i,"k"==n[1]?"":t)+"}":"object"==typeof i?a+=m(i,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(n,i):n+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},f={},g=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+g(e[r]);return t}return e},h=(e,t,r,a,s)=>{let n=g(e),i=f[n]||(f[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!f[i]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(p," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(p," ").trim();return a[0]})(e);f[i]=m(s?{["@keyframes "+i]:t}:t,r?"":"."+i)}let o=r&&f.g?f.g:null;return r&&(f.g=f[i]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(f[i],t,a,o),i},b=(e,t,r)=>e.reduce((e,a,s)=>{let n=t[s];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,d(t.target),t.g,t.o,t.k)}x.bind({g:1});let v,y,j,w=x.bind({k:1});function _(e,t){let r=this||{};return function(){let a=arguments;function s(n,i){let o=Object.assign({},n),l=o.className||s.className;r.p=Object.assign({theme:y&&y()},o),r.o=/ *go\d+/.test(l),o.className=x.apply(r,a)+(l?" "+l:""),t&&(o.ref=i);let d=e;return e[0]&&(d=o.as||e,delete o.as),j&&d[0]&&j(o),v(d,o)}return t?t(s):s}}var N=e=>"function"==typeof e,S=(e,t)=>N(e)?e(t):e,P=(()=>{let e=0;return()=>(++e).toString()})(),C=((()=>{let e;return()=>e})(),"default"),k=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return k(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},O=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},M=(e,t=C)=>{A[t]=k(A[t]||E,e),O.forEach(([e,r])=>{e===t&&r(A[t])})},z=e=>Object.keys(A).forEach(t=>M(e,t)),I=e=>Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===e)),D=(e=C)=>t=>{M(t,e)},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||P()}),L=e=>(t,r)=>{let a=R(t,e,r);return D(a.toasterId||I(a.id))({type:2,toast:a}),a.id},$=(e,t)=>L("blank")(e,t);$.error=L("error"),$.success=L("success"),$.loading=L("loading"),$.custom=L("custom"),$.dismiss=(e,t)=>{let r={type:3,toastId:e};t?D(t)(r):z(r)},$.dismissAll=e=>$.dismiss(void 0,e),$.remove=(e,t)=>{let r={type:4,toastId:e};t?D(t)(r):z(r)},$.removeAll=e=>$.remove(void 0,e),$.promise=(e,t,r)=>{let a=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?S(t.success,e):void 0;return s?$.success(s,{id:a,...r,...null==r?void 0:r.success}):$.dismiss(a),e}).catch(e=>{let s=t.error?S(t.error,e):void 0;s?$.error(s,{id:a,...r,...null==r?void 0:r.error}):$.dismiss(a)}),e};var U=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=(_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),W=(_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),B=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=(_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,_("div")`
  position: absolute;
`,_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,a=o.createElement,m.p=void 0,v=a,y=void 0,j=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;let V=()=>{let[e,t]=(0,o.useState)(""),[r,a]=(0,o.useState)(""),[n,l]=(0,o.useState)(""),[d,c]=(0,o.useState)(""),[u,p]=(0,o.useState)(!1),m=async s=>{s.preventDefault(),p(!0);try{let s=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:r,phone:n,message:d})}),i=await s.json();i.success?($.success(i.message||"Message sent successfully!"),t(""),a(""),l(""),c("")):$.error(i.message||"Something went wrong")}catch(e){$.error("Server error: "+e.message)}finally{p(!1)}};return(0,s.jsxs)(s.Fragment,{children:["...",(0,s.jsxs)("div",{className:"row justify-content-center align-items-center text-light",children:[s.jsx("div",{className:"col-12 col-lg-4 mb-4",children:s.jsx("div",{className:"card bg-secondary h-100",children:(0,s.jsxs)("div",{className:"card-body text-center",children:[s.jsx("a",{href:"https://wa.me/2349164675884",target:"_blank",rel:"noopener noreferrer",children:s.jsx(i(),{src:"/lp.jpeg",alt:"Chat on WhatsApp",width:160,height:100,className:"mb-3 rounded-circle"})}),s.jsx("a",{href:"tel:+2349164675884",target:"_blank",rel:"noopener noreferrer",className:"btn w-100 rounded-3 bg-primary fw-bold getbtn",children:"call me"})]})})}),s.jsx("div",{className:"col-12 col-lg-4 mb-4",children:s.jsx("div",{className:"card bg-secondary h-100",children:(0,s.jsxs)("div",{className:"card-body text-center",children:[s.jsx("a",{href:"https://wa.me/2349164675884",target:"_blank",rel:"noopener noreferrer",children:s.jsx(i(),{src:"/kkk.webp",alt:"Chat on WhatsApp",width:160,height:100,className:"mb-3 rounded-circle"})}),s.jsx("a",{href:"https://wa.me/2349164675884",target:"_blank",rel:"noopener noreferrer",className:"btn w-100 rounded-3 bg-primary fw-bold getbtn",children:"Chat on WhatsApp"})]})})}),s.jsx("div",{className:"col-12 col-lg-4 mb-4",children:s.jsx("div",{className:"card bg-secondary h-100",children:(0,s.jsxs)("div",{className:"card-body text-center",children:[s.jsx("a",{href:"https://wa.me/2349164675884",target:"_blank",rel:"noopener noreferrer",children:s.jsx(i(),{src:"/R.png",alt:"Chat on WhatsApp ",width:100,height:100,className:"mb-3 rounded-circle"})}),s.jsx("a",{href:"mailto:mubarakadambako@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"btn w-100 rounded-3 bg-primary fw-bold getbtn",children:"message me on email"})]})})})]}),s.jsx("div",{className:"container py-5",children:(0,s.jsxs)("div",{className:"row align-items-center justify-content-center",children:[s.jsx("div",{className:"col-lg-6 text-center mb-4 mb-md-0",children:s.jsx("img",{src:"/abdull.jpg",alt:"Contact illustration",ange:!0,to:!0,actual:!0,image:!0,height:!0,className:"img-fluid rounded"})}),s.jsx("div",{className:"col-lg-6",children:s.jsx("div",{className:"card bg-dark  ",children:s.jsx("div",{className:"card-body rounded-8",children:(0,s.jsxs)("div",{className:"col-lg-12",children:[s.jsx("h2",{className:"text-center text-primary mb-4",children:"Contact Us"}),(0,s.jsxs)("form",{onSubmit:m,children:[(0,s.jsxs)("div",{className:"mb-3 text-danger",children:[s.jsx("label",{className:"form-label",children:"Name"}),s.jsx("input",{type:"text",className:"form-control",placeholder:"Enter your name",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"mb-3 text-danger",children:[s.jsx("label",{className:"form-label",children:"Email"}),s.jsx("input",{type:"email",className:"form-control",placeholder:"Enter your email",value:r,onChange:e=>a(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"mb-3 text-danger",children:[s.jsx("label",{className:"form-label",children:"Phone"}),s.jsx("input",{type:"text",className:"form-control",placeholder:"Enter your phone number",value:n,onChange:e=>l(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"mb-3 text-danger",children:[s.jsx("label",{className:"form-label",children:"Message"}),s.jsx("textarea",{className:"form-control",rows:"4",placeholder:"Write your message here...",value:d,onChange:e=>c(e.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"btn btn-warning w-100",disabled:u,children:u?"Sending...":"Send Message"})]})]})})})})]})})]})}},5153:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(5036);let s=(0,r(6843).createProxy)(String.raw`C:\Users\Lenovo\Desktop\workspace\my-app\my-app\src\components\ContactUs.jsx`),{__esModule:n,$$typeof:i}=s,o=s.default;function l(){return a.jsx(a.Fragment,{children:a.jsx(o,{})})}},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>i});let a=(0,r(6843).createProxy)(String.raw`C:\Users\Lenovo\Desktop\workspace\my-app\my-app\src\app\layout.js`),{__esModule:s,$$typeof:n}=a,i=a.default},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3824:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,907,337],()=>r(2190));module.exports=a})();