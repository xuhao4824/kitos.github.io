(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{397:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});var r=n(1),a=(n(13),n(0)),o=n.n(a),i=n(4),c=n(404);function u(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return u=function(){return e},e}var l=function(e){return function(){return[{"@context":"http://schema.org","@type":"CollectionPage",mainEntity:{"@type":"ItemList",name:"Videos",itemListOrder:"http://schema.org/ItemListOrderDescending",itemListElement:e.map(function(e){var t=e.title,n=e.url,r=e.snippet,a=e.contentDetails;return{"@type":"VideoObject",name:t,contentUrl:n,uploadDate:r.publishedAt,duration:a.duration,thumbnailUrl:r.thumbnails.maxres.url}})}}]}},s="3829654637";t.default=function(e){var t=e.data,n=(t=void 0===t?{}:t).resp,r=(n=void 0===n?{}:n).edges,a=void 0===r?[]:r;return a=a.map(function(e){return Object.assign({},e.node,{},e.node.fields.snippet,{slug:e.node.fields.slug})}),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.c,{title:"Public activity",schemaOrgItems:l(a)}),o.a.createElement("h2",null,"Talks"),o.a.createElement(m,{as:"ul",m:"0 -20px",flexWrap:"wrap",_css:{listStyle:"none"}},a.map(function(e){return o.a.createElement(i.Box,{as:"li",id:e.slug,key:e.id,width:[1,"calc(50% - 20px)"],m:10},o.a.createElement(c.e,{video:e}))})))};var m=Object(r.default)(i.Flex)(u(),function(e){return e._css})},399:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(1).default.span.withConfig({displayName:"badge__Badge",componentId:"sc-3q6c1o-0"})(["white-space:nowrap;color:#2369cf;background:#ecf5fe;border-radius:4px;padding:5px 10px;&:hover{background:#def;}"]);t.b=r},400:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r=n(0),a=function(e,t,n){void 0===n&&(n=[]),Object(r.useEffect)(function(){var n=function(n){n.target.closest(t)||e()};return document.addEventListener("mouseup",n,!0),function(){return document.removeEventListener("mouseup",n,!0)}},n)};t.a=a},401:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),a=function(){return Object(r.useEffect)(function(){var e=new IntersectionObserver(function(t){t.filter(function(e){return e.isIntersecting}).forEach(function(t){var n=t.target;n.setAttribute("src",n.getAttribute("data-src")),e.unobserve(n)})},{rootMargin:"10%"});return document.querySelectorAll("iframe[data-src]").forEach(function(t){return e.observe(t)}),function(){return e.disconnect()}},[])}},402:function(e,t,n){"use strict";n(406);var r=n(1).default.small.withConfig({displayName:"tag__Tag",componentId:"sc-1of2opv-0"})(["text-decoration:underline;color:grey;&:hover{color:#4078c0;}",""],function(e){return e.active?"color: #4078c0;":""});t.a=r},403:function(e){e.exports={data:{site:{siteMetadata:{title:"Nikita Kirsanov",description:"Personal blog of software engineer - Nikita Kirsanov",siteUrl:"https://www.nikitakirsanov.com",img:"https://www.nikitakirsanov.com/icons/icon-512x512.png",keywords:["blog","personal","software engineer","CV","portfolio"],social:{twitter:"@kitos_kirsanov"}}}}}},404:function(e,t,n){"use strict";var r=n(399),a=n(0),o=n.n(a),i=(n(83),n(97),n(1)),c=n(168),u=i.default.div.withConfig({displayName:"drawer__Container",componentId:"n2xd01-0"})(["position:fixed;top:0;right:0;height:100%;width:60%;background:#fff;will-change:transform;"]),l=Object(i.default)(u).withConfig({displayName:"drawer__Overlay",componentId:"n2xd01-1"})(["width:100%;background:#141a28a8;"]),s=function(e){var t=e.open,n=e.children,r=e.onOuterClick;return o.a.createElement(c.b,{items:t,from:{transform:"translateX(100%)",opacity:0},enter:{transform:"translateX(0)",opacity:1},leave:{transform:"translateX(100%)",opacity:0}},function(e){return e&&function(e){var t=e.transform,a=e.opacity;return o.a.createElement(l,{style:{opacity:a},onClick:r},o.a.createElement(u,{style:{transform:t},onClick:function(e){return e.stopPropagation()}},n))}})},m=(n(167),n(164),n(122),n(248),n(401),n(165),n(400),n(54),function(e){var t=void 0===e?{}:e,n=t.shadowColor,r=void 0===n?"rgba(20, 26, 40, 0.25)":n,o=t.shadowK,i=void 0===o?5:o,c=t.rotationK,u=void 0===c?7:c,l=[0,0],s=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)({}),r=n[0],o=n[1];return Object(a.useEffect)(function(){var n=e||t.current,r=function(){return o(n.getBoundingClientRect())},a=function(){return requestAnimationFrame(r)};return r(),window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}},[e]),[r,t]}(),m=s[0],d=s[1],f=Object(a.useState)(l),p=f[0],g=p[0],v=p[1],b=f[1];return Object(a.useEffect)(function(){var e=d.current,t=m.left,n=m.top,r=m.width,a=m.height,o=function(e){var o=2*((e.clientX-t)/r-.5),i=2*((e.clientY-n)/a-.5);b([o,i])},i=function(){b(l)};return e.addEventListener("mousemove",o),e.addEventListener("mouseout",i),function(){e.removeEventListener("mousemove",o),e.removeEventListener("mouseout",i)}},[m]),{ref:d,style:{willChange:"transform",boxShadow:r+" "+-g*i+"px "+-v*i+"px 30px",transform:"perspective(1000px) "+("rotateX("+-v*u+"deg)")+" "+("rotateY("+g*u+"deg)")}}}),d=(n(82),n(163),n(46),n(3),n(40),n(25),n(12),n(403)),f=n(410),p=n.n(f),g=n(47);function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b=function(e){var t=e.title,n=e.isBlogPost,r=e.schemaOrgItems,a=void 0===r?function(){return[]}:r;return o.a.createElement(g.b,{query:"2644843236",render:function(e){var r=e.site.siteMetadata,i=r.siteUrl,c={"@context":"http://schema.org","@type":"WebSite",url:i,name:t};return o.a.createElement(p.a,null,o.a.createElement("html",{lang:"en"}),o.a.createElement("title",null,(t?t+" | ":"")+r.title),o.a.createElement("meta",{name:"description",content:r.description}),o.a.createElement("meta",{name:"image",content:r.img}),o.a.createElement("meta",{name:"keywords",content:r.keywords.join(", ")}),o.a.createElement("meta",{property:"og:url",content:i}),n?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:r.description}),o.a.createElement("meta",{property:"og:image",content:r.img}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:r.social.twitter}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:r.description}),o.a.createElement("meta",{name:"twitter:image",content:r.img}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify([c].concat(v(a({url:i,author:{"@type":"Person",name:"Nikita Kirsanov"}}))))))},data:d})},h=n(4),y=i.default.span.withConfig({displayName:"shield__Label",componentId:"sc-1kyh6no-0"})(["background:#555;color:#fff;padding:5px 10px;font-size:12px;"]),w=Object(i.default)(y).withConfig({displayName:"shield__Value",componentId:"sc-1kyh6no-1"})(["background:#a2c63e;"]),E=function(e){var t=e.label,n=e.value;return o.a.createElement(h.Flex,null,o.a.createElement(y,null,t),o.a.createElement(w,null,n))},x=(n(166),n(402),n(13),n(8),n(98),n(411)),k=n.n(x),O=n(412),_=n.n(O),j=new k.a(_.a);j.rhythm;var C=j.scale,I=i.default.button.withConfig({displayName:"youtube-play-button__YouTubePlayButton",componentId:"ff68p8-0"})(["position:relative;font-size:1em;width:4em;height:3em;padding:0;background:#000;border-radius:50% / 10%;color:#fff;text-align:center;text-indent:0.1em;transition:all 150ms ease-out;border:none;&:hover{background:#ff0000;}&::before{position:absolute;background:inherit;border-radius:5% / 50%;bottom:9%;content:'';left:-5%;right:-5%;top:9%;}&::after{position:absolute;border-style:solid;border-width:1em 0 1em 1.732em;border-color:transparent transparent transparent rgba(255,255,255,0.75);content:' ';font-size:0.75em;height:0;margin:-1em 0 0 -0.75em;top:50%;width:0;}"]);function A(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["",""]);return A=function(){return e},e}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var S=i.default.a.withConfig({displayName:"video-card__VideoLink",componentId:"sc-1t2xide-0"})(["display:block;position:relative;","{opacity:0.8;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}"],I),L=i.default.img.withConfig({displayName:"video-card__Img",componentId:"sc-1t2xide-1"})(["width:100%;object-fit:cover;@media screen and (min-width:40em){height:178px;}"]),P=function(e){var t,n=e.video,a=(n.id,n.title),i=n.url,c=n.tags,u=n.snippet,l=u.thumbnails,s=u.tags,d=e.className,f=m(),p=l.medium,g=l.high,v=l.maxres;return t=[].concat(N(c||[]),N(s||[])),c=Array.from(new Set(t)),o.a.createElement("section",{className:d},o.a.createElement(S,Object.assign({},f,{href:i,target:"_blank",rel:"noopener noreferrer"}),o.a.createElement(L,{src:p.url,srcSet:p.url+", "+g.url+" 1.5x, "+v.url+" 3x",alt:a}),o.a.createElement(I,null)),o.a.createElement("h3",{style:C(.1)},o.a.createElement("a",{href:i},a)),c.length>0&&o.a.createElement(B,{as:"ul",flexWrap:"wrap",mx:"-5px",_css:{listStyle:"none"}},c.map(function(e){return o.a.createElement(h.Box,{as:"li",key:e,m:"5px 2px",fontSize:"12px"},o.a.createElement(r.b,null,"#",e))})))},B=Object(i.default)(h.Flex)(A(),function(e){return e._css});n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return E}),n.d(t,"e",function(){return P})}}]);
//# sourceMappingURL=component---src-pages-public-activity-js-16f66889a3d4d50d1fbe.js.map