(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{393:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});n(12),n(8),n(3),n(19),n(13);var r=n(0),a=n.n(r),o=n(4),i=n(65),c=n(422),l=n(404);t.default=function(e){var t=e.pageContext.tag,n=e.data.posts;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.c,{title:"Blog"}),a.a.createElement(i.a,null,a.a.createElement("h2",null,"Blog")),a.a.createElement(o.Box,{mt:10},0===n.edges.length?a.a.createElement(o.Box,{as:"b",style:{display:"block",textAlign:"center"}},"Some posts might be here..."):n.edges.map(function(e){var t=e.node,n=(t.id,t.frontmatter),r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["id","frontmatter"]);return Object.assign({},n,{},r)}).map(function(e){return a.a.createElement(c.b,{key:e.slug,post:e,selectedTag:t})})))};var u="2092629236"},399:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(1).default.span.withConfig({displayName:"badge__Badge",componentId:"sc-3q6c1o-0"})(["white-space:nowrap;color:#2369cf;background:#ecf5fe;border-radius:4px;padding:5px 10px;&:hover{background:#def;}"]);t.b=r},400:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r=n(0),a=function(e,t,n){void 0===n&&(n=[]),Object(r.useEffect)(function(){var n=function(n){n.target.closest(t)||e()};return document.addEventListener("mouseup",n,!0),function(){return document.removeEventListener("mouseup",n,!0)}},n)};t.a=a},401:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),a=function(){return Object(r.useEffect)(function(){var e=new IntersectionObserver(function(t){t.filter(function(e){return e.isIntersecting}).forEach(function(t){var n=t.target;n.setAttribute("src",n.getAttribute("data-src")),e.unobserve(n)})},{rootMargin:"10%"});return document.querySelectorAll("iframe[data-src]").forEach(function(t){return e.observe(t)}),function(){return e.disconnect()}},[])}},402:function(e,t,n){"use strict";n(406);var r=n(1).default.small.withConfig({displayName:"tag__Tag",componentId:"sc-1of2opv-0"})(["text-decoration:underline;color:grey;&:hover{color:#4078c0;}",""],function(e){return e.active?"color: #4078c0;":""});t.a=r},403:function(e){e.exports={data:{site:{siteMetadata:{title:"Nikita Kirsanov",description:"Personal blog of software engineer - Nikita Kirsanov",siteUrl:"https://www.nikitakirsanov.com",img:"https://www.nikitakirsanov.com/icons/icon-512x512.png",keywords:["blog","personal","software engineer","CV","portfolio"],social:{twitter:"@kitos_kirsanov"}}}}}},404:function(e,t,n){"use strict";var r=n(399),a=n(0),o=n.n(a),i=(n(83),n(97),n(1)),c=n(168),l=i.default.div.withConfig({displayName:"drawer__Container",componentId:"n2xd01-0"})(["position:fixed;top:0;right:0;height:100%;width:60%;background:#fff;will-change:transform;"]),u=Object(i.default)(l).withConfig({displayName:"drawer__Overlay",componentId:"n2xd01-1"})(["width:100%;background:#141a28a8;"]),s=function(e){var t=e.open,n=e.children,r=e.onOuterClick;return o.a.createElement(c.b,{items:t,from:{transform:"translateX(100%)",opacity:0},enter:{transform:"translateX(0)",opacity:1},leave:{transform:"translateX(100%)",opacity:0}},function(e){return e&&function(e){var t=e.transform,a=e.opacity;return o.a.createElement(u,{style:{opacity:a},onClick:r},o.a.createElement(l,{style:{transform:t},onClick:function(e){return e.stopPropagation()}},n))}})},f=(n(167),n(164),n(122),n(248),n(401),n(165),n(400),n(54),function(e){var t=void 0===e?{}:e,n=t.shadowColor,r=void 0===n?"rgba(20, 26, 40, 0.25)":n,o=t.shadowK,i=void 0===o?5:o,c=t.rotationK,l=void 0===c?7:c,u=[0,0],s=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)({}),r=n[0],o=n[1];return Object(a.useEffect)(function(){var n=e||t.current,r=function(){return o(n.getBoundingClientRect())},a=function(){return requestAnimationFrame(r)};return r(),window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}},[e]),[r,t]}(),f=s[0],m=s[1],d=Object(a.useState)(u),p=d[0],g=p[0],b=p[1],h=d[1];return Object(a.useEffect)(function(){var e=m.current,t=f.left,n=f.top,r=f.width,a=f.height,o=function(e){var o=2*((e.clientX-t)/r-.5),i=2*((e.clientY-n)/a-.5);h([o,i])},i=function(){h(u)};return e.addEventListener("mousemove",o),e.addEventListener("mouseout",i),function(){e.removeEventListener("mousemove",o),e.removeEventListener("mouseout",i)}},[f]),{ref:m,style:{willChange:"transform",boxShadow:r+" "+-g*i+"px "+-b*i+"px 30px",transform:"perspective(1000px) "+("rotateX("+-b*l+"deg)")+" "+("rotateY("+g*l+"deg)")}}}),m=(n(82),n(163),n(46),n(3),n(40),n(25),n(12),n(403)),d=n(410),p=n.n(d),g=n(47);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e){var t=e.title,n=e.isBlogPost,r=e.schemaOrgItems,a=void 0===r?function(){return[]}:r;return o.a.createElement(g.b,{query:"2644843236",render:function(e){var r=e.site.siteMetadata,i=r.siteUrl,c={"@context":"http://schema.org","@type":"WebSite",url:i,name:t};return o.a.createElement(p.a,null,o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,(t?t+" | ":"")+r.title),o.a.createElement("meta",{name:"description",content:r.description}),o.a.createElement("meta",{name:"image",content:r.img}),o.a.createElement("meta",{name:"keywords",content:r.keywords.join(", ")}),o.a.createElement("meta",{property:"og:url",content:i}),n?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:r.description}),o.a.createElement("meta",{property:"og:image",content:r.img}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:r.social.twitter}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:r.description}),o.a.createElement("meta",{name:"twitter:image",content:r.img}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify([c].concat(b(a({url:i,author:{"@type":"Person",name:"Nikita Kirsanov"}}))))))},data:m})},v=n(4),y=i.default.span.withConfig({displayName:"shield__Label",componentId:"sc-1kyh6no-0"})(["background:#555;color:#fff;padding:5px 10px;font-size:12px;"]),w=Object(i.default)(y).withConfig({displayName:"shield__Value",componentId:"sc-1kyh6no-1"})(["background:#a2c63e;"]),E=function(e){var t=e.label,n=e.value;return o.a.createElement(v.Flex,null,o.a.createElement(y,null,t),o.a.createElement(w,null,n))},x=(n(166),n(402),n(13),n(8),n(98),n(411)),k=n.n(x),O=n(412),j=n.n(O),_=new k.a(j.a);_.rhythm;var C=_.scale,S=i.default.button.withConfig({displayName:"youtube-play-button__YouTubePlayButton",componentId:"ff68p8-0"})(["position:relative;font-size:1em;width:4em;height:3em;padding:0;background:#000;border-radius:50% / 10%;color:#fff;text-align:center;text-indent:0.1em;transition:all 150ms ease-out;border:none;&:hover{background:#ff0000;}&::before{position:absolute;background:inherit;border-radius:5% / 50%;bottom:9%;content:'';left:-5%;right:-5%;top:9%;}&::after{position:absolute;border-style:solid;border-width:1em 0 1em 1.732em;border-color:transparent transparent transparent rgba(255,255,255,0.75);content:' ';font-size:0.75em;height:0;margin:-1em 0 0 -0.75em;top:50%;width:0;}"]);function N(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return N=function(){return e},e}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var A=i.default.a.withConfig({displayName:"video-card__VideoLink",componentId:"sc-1t2xide-0"})(["display:block;position:relative;","{opacity:0.8;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}"],S),B=i.default.img.withConfig({displayName:"video-card__Img",componentId:"sc-1t2xide-1"})(["width:100%;object-fit:cover;@media screen and (min-width:40em){height:178px;}"]),L=function(e){var t,n=e.video,a=(n.id,n.title),i=n.url,c=n.tags,l=n.snippet,u=l.thumbnails,s=l.tags,m=e.className,d=f(),p=u.medium,g=u.high,b=u.maxres;return t=[].concat(I(c||[]),I(s||[])),c=Array.from(new Set(t)),o.a.createElement("section",{className:m},o.a.createElement(A,Object.assign({},d,{href:i,target:"_blank",rel:"noopener noreferrer"}),o.a.createElement(B,{src:p.url,srcSet:p.url+", "+g.url+" 1.5x, "+b.url+" 3x",alt:a}),o.a.createElement(S,null)),o.a.createElement("h3",{style:C(.1)},o.a.createElement("a",{href:i},a)),c.length>0&&o.a.createElement(M,{as:"ul",flexWrap:"wrap",mx:"-5px",_css:{listStyle:"none"}},c.map(function(e){return o.a.createElement(v.Box,{as:"li",key:e,m:"5px 2px",fontSize:"12px"},o.a.createElement(r.b,null,"#",e))})))},M=Object(i.default)(v.Flex)(N(),function(e){return e._css});n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return E}),n.d(t,"e",function(){return L})},413:function(e,t,n){"use strict";n(13);var r=n(1),a=n(0),o=n.n(a),i=n(405),c=n(168),l=n(54);function u(){var e=f(["\n          transform: rotate(180deg);\n          margin: 0 0 -","px 0;\n          top: auto;\n          bottom: 0;\n        "]);return u=function(){return e},e}function s(){var e=f(["\n          margin: -","px 0 0 0;\n          top: 0;\n          bottom: auto;\n        "]);return s=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=r.default.div.withConfig({displayName:"tooltip__Arrow",componentId:"v88v0t-0"})(["position:absolute;",";width:20px;height:10px;margin-top:-","px;&::before,&::after{content:'';display:block;position:absolute;width:0;height:0;border-style:solid;}&::before{border-width:0 ","px ","px ","px;border-color:transparent transparent #000 transparent;}&::after{border-width:0 ","px ","px ","px;border-color:transparent transparent #fff transparent;}"],function(e){return"bottom"===e.placement?Object(r.css)(s(),6):Object(r.css)(u(),6)},5,6,6,6,6,6,6),d=function(e){var t=e.isOpen,n=e.className,r=e.children,a=e.referenceElement;return o.a.createElement(i.b,{referenceElement:a},function(e){var a=e.ref,i=e.style,u=e.placement,s=e.arrowProps,f="bottom"===u?"-":"";return o.a.createElement(c.b,{unique:!0,reset:!0,items:t,from:{transform:"translateY("+f+"30px) scale(0.9)",opacity:0},enter:{transform:"translateY(0) scale(1)",opacity:1},leave:{transform:"translateY("+f+"30px) scale(0.9)",opacity:0}},function(e){return e&&function(e){return o.a.createElement("div",{ref:a,style:i,"data-placement":u,className:n},o.a.createElement(l.d,{style:e},r),o.a.createElement(m,Object.assign({},Object.assign({},s,{placement:u}),{style:Object.assign({},s.style,{opacity:e.opacity})})))}})})};n(12),n(8),n(3),n(19);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(e){this.selection=e}var t,n,r;return e.prototype.getBoundingClientRect=function(){var e=this.selection.getRangeAt(0).getBoundingClientRect();return new Proxy(e,{get:function(e,t){return"top"===t?e.top-10:"bottom"===t?e.bottom+10:e[t]}})},t=e,(n=[{key:"clientWidth",get:function(){return this.getBoundingClientRect().width}},{key:"clientHeight",get:function(){return this.getBoundingClientRect().height}}])&&p(t.prototype,n),r&&p(t,r),e}(),b=function(e){var t=e.onSelect,n=e.children;return o.a.createElement(i.c,null,function(e){var r=e.ref;return n(function(e){var n=void 0===e?{}:e,a=n.onMouseUp,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["onMouseUp"]);return Object.assign({},o,{onMouseUp:function(){for(var e=window.getSelection(),n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];e.isCollapsed||(r(new g(e)),t&&t.apply(void 0,[e].concat(o))),a&&a.apply(void 0,o)}})})})};n.d(t,"b",function(){return d}),n.d(t,"a",function(){return b})},422:function(e,t,n){"use strict";n(13),n(46),n(3);var r=n(1),a=n(0),o=n.n(a),i=n(4),c=n(405),l=(n(389),n(413)),u=n(95),s=n(83),f=n(400),m=n(180),d=n(401);function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n              display: block;\n              line-height: 0;\n              padding-right: 5px;\n              margin-right: 10px;\n              border-right: 1px solid lightgray;\n            "]);return p=function(){return e},e}var g=function(e){var t=e.post,n=t.title,r=t.postUrl,p=t.html,g=Object(a.useState)(null),h=g[0],v=g[1];return Object(f.b)(function(){return v(null)},".tooltip"),Object(d.a)(),o.a.createElement(c.a,null,o.a.createElement(l.a,{onSelect:function(e){e&&!e.isCollapsed&&v(e.toString())}},function(e){return o.a.createElement("div",Object.assign({},e(),{dangerouslySetInnerHTML:{__html:p}}))}),o.a.createElement(l.b,{isOpen:!!h,className:"tooltip"},o.a.createElement(i.Flex,null,o.a.createElement(b,{href:"https://twitter.com/intent/tweet?text=“"+h+"” — @kitos_kirsanov&url="+r,target:"_blank",rel:"noopener noreferrer",title:"tweet","aria-label":"tweet",style:{lineHeight:0,display:"block"}},o.a.createElement(u.d,{width:30,mode:"blueOnWhite"})),o.a.createElement(m.a,null,function(e){return o.a.createElement(s.a,{title:"Report typo/mistake","aria-label":"Report typo/mistake",onClick:function(){return e({type:"typo",post:{title:n,link:r},typo:h})}},"✏️")}))))},b=Object(r.default)("a")(p()),h=(n(406),n(47)),v=n(464),y=n(402),w=function(e){var t=e.tags,n=e.selectedTag;return o.a.createElement(x,{as:"ul",m:0},t.map(function(e){return o.a.createElement(i.Box,{as:"li",key:e,mr:"5px"},o.a.createElement(h.a,{to:"/blog/tag/"+e},o.a.createElement(y.a,{active:e===n},"#",e)))}))},E=w,x=Object(r.default)(i.Flex).withConfig({displayName:"blog-tags___StyledFlex",componentId:"sc-579mkt-0"})(["list-style:none;"]),k=n(70);function O(){var e=C(["",""]);return O=function(){return e},e}function j(){var e=C(["display: none;"]);return j=function(){return e},e}function _(){var e=C(["\n    display: flex;\n    border-right: 2px solid #e1e4e8;\n  "]);return _=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),e.raw=t,e}var S=r.default.small.withConfig({displayName:"blog-post-snippet__DateWithTimeline",componentId:"sc-16p2cwc-0"})(["position:relative;padding-right:20px;min-width:150px;display:none;align-items:center;justify-content:flex-end;"," &:after{margin-top:-6px;position:absolute;right:-7px;top:50%;height:12px;width:12px;background-color:#e1e4e8;border:2px solid #fff;border-radius:6px;box-sizing:border-box;content:' ';display:block;}"],k.c.tablet(_())),N=function(e){return Object(v.a)("MMMM dd, yyyy",new Date(e))},I=function(e){var t=e.post,n=t.slug,r=t.title,a=t.date,c=t.preface,l=t.timeToRead,u=t.tags,s=e.selectedTag;return o.a.createElement(i.Flex,{as:"section",alignItems:"stretch"},o.a.createElement(S,null,N(a)),o.a.createElement(i.Box,{pl:[0,20]},o.a.createElement("h2",null,o.a.createElement(h.a,{to:"/blog/"+n+"/"},r)),o.a.createElement("small",null,l," min read"," ",o.a.createElement(A,{_css:k.c.tablet(j())},"• ",N(a))),o.a.createElement("p",null,c),o.a.createElement(E,{tags:u,selectedTag:s})))},A=Object(r.default)("span")(O(),function(e){return e._css});n.d(t,"a",function(){return g}),n.d(t,"b",function(){return I}),n.d(t,"c",function(){return w})}}]);
//# sourceMappingURL=component---src-templates-blog-post-list-js-d1b8cdcfc6a55706efe8.js.map