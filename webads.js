var FINN = FINN||{};FINN.data = FINN.data||{};FINN.data.banner = FINN.data.banner||{};if (FINN.data.banner.ext_logger == "true") {window.byburt_verticalSection = FINN.data.banner.score;(function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,_b,ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,a=function(a){try{for(var b=1;arguments[b];b++){var c=arguments[b];a=a[c]}return typeof a!="undefined"}catch(d){return!1}},b=function(){if(!a(document,"documentElement","getBoundingClientRect"))return;if(!window.setTimeout)return;if(a(window,"location","search")&&window.location.search&&window.location.search.indexOf("fb_xd_fragment")!=-1)return;return!0};"use strict";if(!b()){if(window.byburt_developmentMode)throw"Not compatible";return}c="byburt_placementToId",d="byburt_persistentReferer",e="byburt_click",f="byburt_write",g="byburt_afterAdCloserScript",h="byburt_pushWrite",i="byburt_popWrite",j="byburt_documentWritten",k="byburt_documentWrite",l="byburt_placementName",m="byburt_permanentDocumentWrite",n="byburt_recursiveScript",o="byburt_pixel",p="richSync",q="byburt_adtags",r="byburt_adapt",s="byburt_onmessage",t="byburt_messagebuffer",u="byburt_addMessageListener",v="byburt_sizzle",w="byburt_agentLoad",x="trackRichPlacement",y="byburt_auto",z="byburt_disable",A="byburt_syncCallback",B="byburt_random",C="byburt_configCallback",D=3,E=2,F=9,G=[D,E,F].join("."),H="w"+G+"-JS",I="burt_api",J="byburt_adid_",K="byburt_before_adtag",L="byburt_after_adtag",M=10,N=36,O=9,P=22,Q="@@@BURT_CLICK@@@",R="@@@BURT_PI@@@",S="@@@BURT_SI@@@",T="@@@BURT_STR_PLUS@@@",U="byburt_visibilityHandler",V=5,W=40,X=[1,2,4,8,15,20,25,30,90],Y=1e3,Z=5,$=1,_=10,ab=[1,1,2,4,6,8,10],bb=1,cb=45e3,db=300,eb=[15,15,30,30],fb="burt",gb=["IMG","OBJECT","IFRAME","EMBED"],hb="burt_"+G+"_",ib="http://sync.richmetrics.com/",jb=1,kb=[/x.com/],lb=["av","ct","mk","pi","rk","sn","ui","wn"],mb={click:["av","mk","pi","rk","si","ui","wn"],page:lb.concat(["ar","ca","cd","co","cp","eu","ln","lr","rf","sd","sr","tz","wd","ws"]),exposure:lb.concat(["ad","an","ap","ce","cks","ep","en","lu","mt","nc","pk","pn","sg","si","ti","tn","vz","wu","nz","vn"]),ping:lb.concat(["ad","ap","pd","si","vz","wd","ws","nz"]),pageping:lb.concat(["pd","wd","ws"]),event:lb.concat(["ad","ap","cl","mp","pd","si","ty","vl","vz","wd","ws","nz"]),activity:lb.concat(["ty","vl","wd","ws"]),error:lb.concat(["ms","md","eu","si","rf"]),sync:lb.concat(["ei","fs","ss","pr"]),rfa_sync:lb.concat(["ei","fs","si","ss","pr"]),customevent:lb.concat(["ac","cc","lb","cv"]),end:lb.concat(["et"])};mb.rfa_exposure=mb.exposure.concat(["co","eu","ln","lr","pd","sa","sd","sr","tz","wd","ws"]);nb=function(a){return typeof a=="undefined"},ob=function(a){return Object.prototype.toString.call(a)},pb=function(){var a=arguments[0]||{},b=1,c=arguments.length,d=!1,e,f,g,h;typeof a=="boolean"&&(d=a,a=arguments[1]||{},b=2),typeof a!="object"&&typeof a=="function"&&(a={});for(;b<c;b++)if((e=arguments[b])!==null)for(f in e){g=a[f],h=e[f];if(a===h)continue;h!==undefined&&(a[f]=h)}return a},qb=function(){return pb.apply(null,[{}].concat(Array.prototype.slice.call(arguments)))},rb=Array.prototype.forEach,sb=Array.prototype.map,tb={},ub=function(a){return a.slice().reverse()},vb=function(a,b,c){if(!a)return;if(rb&&a.forEach===rb)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,e=a.length;d<e;d++)if(d in a&&b.call(c,a[d],d,a)===tb)return}else for(var f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)===tb)return},wb=function(a,b,c){var d=[];return a?sb&&a.map===sb?a.map(b,c):(vb(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),a.length===+a.length&&(d.length=a.length),d):d},xb=function(a){var b=ob(a),c=a.length;return Ob(a)||c===c>>>0},yb=function(a,b){for(var c=0;c<a;c++)if(b(c))break},zb=function(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c))return!0;return!1},Ab=function(a,b){for(var c=0;c<a.length;c++)if(!b(a[c],c))return!1;return!0},Bb=function(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a},Cb=function(a,b){var c;if(xb(a))for(var d=0;d<a.length;d++){c=b(a[d]);if(c)return c}else for(var e in a)if(a.hasOwnProperty(e)){c=b(e,a[e]);if(c)return c}},Db=function(a,b){var c=[];return vb(a,function(a){b(a)&&c.push(a)}),c},Eb=function(a,b,c){var d=typeof c=="undefined"?a[0]:c;for(var e=typeof c=="undefined"?1:0;e<a.length;e++)d=b(d,a[e]);return d},Fb=function(a){return Eb(a,function(a,b){return a+b},0)},Gb=function(a){return Eb(a,function(a,b){return Math.max(a,b)})},Hb=function(a){return Eb(a,function(a,b){return Math.min(a,b)})},Ib=function(a){var b=[];return vb(a,function(a,c){b.push((b[c-1]||0)+a)}),b},Jb=function(a,b){var c={};for(var d=0;d<a.length;d++){var e=a[d][b];typeof e!="undefined"&&(c[e]=c[e]||[],c[e].push(a[d]))}return c},Kb=function(a,b,c){if(a.length===0)return[];var d=[],e=[a[0]],f=c(a[0]);for(var g=1;g<a.length;g++){var h=c(a[g]);f+h>b&&(d.push(e),e=[],f=0),e.push(a[g]),f+=h}return d.push(e),d},Lb=function(a,b){var c={};if(xb(a))for(var d=0;d<a.length;d++){var e=b(a[d]);c[e[0]]=e[1]}else for(var f in a)if(a.hasOwnProperty(f)){var g=b(f,a[f]);c[g[0]]=g[1]}return c},Mb=function(a){var b={};return Db(a,function(a){return b[a]?!1:(b[a]=!0,!0)})},Nb=function(a){return Db(a,function(a){return a})},Ob=function(a){return ob(a)==="[object Array]"},Pb=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},Qb=function(a,b){return Pb(a,b)!==-1},Rb=function(a,b){var c=Pb(a,b);return c>-1&&a.splice(c,1),c>-1};Sb=function(){function a(a,b,c,d,e){this.doc=a,this.node=b,this.nodes=c,this.localCacheCallback=d,this.getSessionId=e,this.lastMatch=void 0,this.lastResult=void 0}return a.prototype.matchPoint=function(a,b){var c,d,f,g,h,e=this.doc.elementFromPoint(a,b);if(!e)return!1;if(this.node===e)return this.lastMatch=e,this.lastResult=!0,!0;if(this.lastMatch&&e===this.lastMatch)return this.lastResult;if(e.tagName==="EMBED"){h=e.parentNode;if(h.tagName==="OBJECT"&&h===this.node)return this.lastMatch=e,this.lastResult=!0,!0}return e.className==="byburt-cover"&&e.getAttribute("id")?(g=e.getAttribute("id").match(/byburt_cover_([A-Z0-9]{12})/),g[1]&&g[1]===this.getSessionId()?(this.lastMatch=e,this.lastResult=!0,!0):!1):(c=this.localCacheCallback(e),c.isAd===void 0&&(f=function(a){return a===e||Oc(a,e)},d=f(this.node,e),d||(d=zb(this.nodes,f)),c.isAd=d,this.lastMatch=e,this.lastResult=c.isAd),c.isAd)},a}();Tb=function(a){return a.replace(/^\s+|\s+$/g,"")},Ub=function(a){return a?a.replace(/\$/g,"#{DOLLAR}"):""},Vb=function(a,b,c){var d=c;return a=Ub(a),typeof c=="string"?d=Ub(c):typeof c=="function"&&(d=function(){return Ub(c.apply({},arguments))}),typeof b=="string"&&(b=Ub(b)),a=a.replace(b,d),a=a.replace(/\#\{DOLLAR\}/g,"$"),a},Wb=function(){},Xb=function(a){return a},Yb=function(a){return function(b){return b[a]}},Zb=function(a){return a()},$b=function(a,b,c){return function(){return a.apply(b,(c||[]).concat(Array.prototype.slice.call(arguments,0)))}},_b=function(a,b){return $b(a,b||{})},ac=function(a,b,c){if(a.byburt_developmentMode)return b();try{return b()}catch(d){return c}},bc=function(a,b){return function(){return ac(a,b)}},cc=function(a,b){var c=a();return function(){var d=a();c!==d&&b(d),c=d}},dc=function(a){return function(){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}}()},ec=function(){var a={listeners:[],buffer:[],register:function(b){a.listeners.push(b),vb(a.buffer,function(c){b.apply(a,c)})},invoke:function(){var b=arguments;a.buffer.push(b),vb(a.listeners,function(c){c.apply(a,b)})},deregister:function(b){a.listeners.splice(Pb(a.listeners,b))}};return a},fc=function(a){var b,c=!1;return function(){return c||(b=a(),c=!0),b}},gc=function(a,b,c){var d=a[b];return d?a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}:a[b]=c,d},hc=function(a,b){vb(a,function(a){b.apply(this,a)})};ic||(ic={}),function(){var b,c,d,e,f,g;function h(a){return c.lastIndex=0,c.test(a)?'"'+a.replace(c,function(a){var b=f[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function i(a,b){var c,f,j,k,m,l=d,n=b[a];n&&typeof n=="object"&&typeof n.toJSON=="function"&&(n=n.toJSON(a)),typeof g=="function"&&(n=g.call(b,a,n));switch(typeof n){case"string":return h(n);case"number":return isFinite(n)?String(n):"null";case"boolean":case"null":return String(n);case"object":if(!n)return"null";d+=e,m=[];if(Object.prototype.toString.apply(n)==="[object Array]"){k=n.length;for(c=0;c<k;c+=1)m[c]=i(c,n)||"null";return j=m.length===0?"[]":d?"[\n"+d+m.join(",\n"+d)+"\n"+l+"]":"["+m.join(",")+"]",d=l,j}if(g&&typeof g=="object"){k=g.length;for(c=0;c<k;c+=1)typeof g[c]=="string"&&(f=g[c],j=i(f,n),j&&m.push(h(f)+(d?": ":":")+j))}else for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&(j=i(f,n),j&&m.push(h(f)+(d?": ":":")+j));return j=m.length===0?"{}":d?"{\n"+d+m.join(",\n"+d)+"\n"+l+"}":"{"+m.join(",")+"}",d=l,j}}b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};typeof ic.stringify!="function"&&(ic.stringify=function(a,b,c){var f;d="",e="";if(typeof c=="number")for(f=0;f<c;f+=1)e+=" ";else typeof c=="string"&&(e=c);g=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return i("",{"":a});throw new Error("JSON.stringify")}),typeof ic.parse!="function"&&(ic.parse=function(a,c){var d;function e(a,b){var d,f,g=a[b];if(g&&typeof g=="object")for(d in g)Object.prototype.hasOwnProperty.call(g,d)&&(f=e(g,d),f!==undefined?g[d]=f:delete g[d]);return c.call(a,b,g)}a=String(a),b.lastIndex=0,b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=window.eval("("+a+")"),typeof c=="function"?e({"":d},""):d;throw new SyntaxError("JSON.parse")})}();jc=function(){function a(a,b){this.rects=a,this.options=b!=null?b:{}}return a.prototype.getVisibilityFn=function(a,b,c){var d,e,f,g,h,i,j,k,l,m;return k=this.rects,j=this.options,l=Fb(wb(k,function(a){return a.w*a.h})),i=function(){return Math.floor((a(c).w-Fb(wb(k,Yb("w"))))/2)},d=function(){return wb(k,function(a){return{h:a.h,w:a.w}})},f=function(){return wb(k,function(a){return{x:a.x,y:a.y}})},h=function(){var d,e,f,g;return g=a(c),f=b(c),e=function(a){var b,c,d,e,h;return e=nc(a.w+i(),0,a.w),j.absoluteColumns?d=nc(a.h-f.y,0,Math.min(g.h,a.h)):d=Math.min(a.h,g.h),h=e*d,b=a.w*a.h,c=Math.round(h/b*100)},d=function(a){var b,c,d;return d=Math.min(a.w,g.w)*nc(a.h-f.y,0,a.h),b=a.w*a.h,c=Math.round(d/b*100)},[e(k[0]),d(k[1]),e(k[2])]},e=function(){var a;return a=Math.round(Math.sqrt(l)),[{w:a,h:a}]},g=function(){return[[{x:Math.max(0,i()),y:0}]]},m=function(){var a,b,c,i,j,k,l,m,n,o,p,q,r,s,t,u;return a=d(),c=f(),k=h(),b=e(),i=g(),j=Math.round(Fb(k)/3),l=function(){return a},p=function(){return c},t=function(){return k},u=function(){return!0},m=function(){return b},q=function(){return i},o=function(){return[j]},r=function(a,b){return Math.abs(a-b)>=20},s=function(){return j},n=function(){return"ht"},{partitions:{dimensions:l,positions:p,visibility:t},dimensions:m,positions:q,nodeVisibilities:o,visibilityHasChanged:u,significantVisibilityChange:r,visibility:s,name:n}},m},a}();kc=function(){function a(a,b,c,d,e){this.doc=a,this.node=b,this.nodes=c,this.localCacheCallback=d,this.getSessionId=e,this.nodeMatcher=new Sb(this.doc,this.node,this.nodes,this.localCacheCallback,this.getSessionId)}return a.prototype.shoot=function(a,b,c){var d,e,k,q,s,h=a.vw*a.vh/b,g=Math.max(P,Math.sqrt(h)),p=Math.max(Math.floor(a.vw/g),1),r=Math.max(Math.floor(a.vh/g),1),n=0,o=0,i=a.vw/p,f=a.vh/r,m=i/2+1,l=f/2+2,j=0;while(j<p){d=Math.round(a.vx+j*i),k=0;while(k<r){q=d+(1+k)*m%i,e=Math.round(a.vy+k*f),s=e+(1+j)*l%f,n++;if(this.nodeMatcher.matchPoint(q,s)){if(c)return 1;o++}k++}j++}return n>0?o/n:1},a}();lc=function(a){var b=function(){return a.navigator.appName=="Microsoft Internet Explorer"&&a.navigator.appVersion&&parseFloat(a.navigator.appVersion.split("MSIE")[1])<=8},c=function(){var b=a.navigator.userAgent;return!!(b&&b.match&&b.match(/webkit/i)&&b.match(/(iPad|iPhone|Android|Mobile)/))},d=function(){var b=a.navigator.userAgent;return b?/MSIE/.test(b)?"msie":/Firefox/.test(b)?"firefox":/Chrome/.test(b)?"chrome":/Safari/.test(b)?"safari":/Opera/.test(b)?"opera":"unknown":"unknown"};return{crazyScriptOrder:a.navigator.appName=="Microsoft Internet Explorer"||a.navigator.appName=="Opera",WebSocket:a.WebSocket||a.MozWebSocket,Image:a.Image,oldIE:b(),mobileWebkit:c(),browser:d()}},mc=function(a,b){if(a.end<a.start||b.end<b.start)throw"Intervals are malformatted";return b.end<a.start||a.end<b.start?{start:0,end:0}:{start:Math.max(b.start,a.start),end:Math.min(a.end,b.end)}},nc=function(a,b,c){return a<b?b:a>c?c:a},oc=function(a,b){var c=a.createElement("a");c.href=b;var d=c.pathname.charAt(0)==="/"?c.pathname:"/"+c.pathname;return{href:c.href,host:c.host,hostname:c.hostname,pathname:d,search:c.search,port:c.port}},pc=function(a,b,c,d){if(b&&c){var e;d?e=new RegExp("[?&]"+c+"=("+d+")"):e=new RegExp("[?&]"+c);var f=oc(a,b);return f.search.match(e)}return!1},qc=function(a){var b=document.createElement("a");return b.href=a,b.href.match(/^http/i)?b.href:rc(a)},rc=function(a){if(/^\s*http/i.test(Tb(a)))return a;var b=window.location.pathname,c=b.split("/");c.pop();var d=a.split("/"),e=d;d[0]!==""&&(e=c.concat(d));var f=[];return vb(e,function(a){a==".."?f.pop():a!==""&&f.push(a)}),f.unshift(window.location.protocol+"//"+window.location.host),f.join("/")},sc=function(a,b){var c=a.document,d=oc(c,b),e=c.getElementsByTagName("script");for(var f=0;f<e.length;f++){var g=oc(c,e[f].src);if(g.pathname===d.pathname&&g.hostname===d.hostname)return e[f]}return null},tc=function(a,b){var c=oc(a,b);return c.href.substring(0,c.href.length-c.search.length)},uc=function(a,b){var c=a.document;b=b||{};var d=function(b,d){var e=uc.parseCookies(a,c.cookie,!0);return d?e[b]:uc.decodeCookie(a,e[b])},e=function(a,f,g){g=qb(b,g)||{};var h=qb(g,{}),i=[];!f&&f!==0&&(f=""),i.push(encodeURIComponent(a)+"="+(g.raw?String(f):encodeURIComponent(String(f)))),g.expires||(g.expires=365);if(typeof g.expires=="number"){var j=b.expires||g.expires;g.expires=new Date,g.expires.setDate(g.expires.getDate()+j)}g.path||(g.path="/"),g.expires&&g.expires.toUTCString&&f&&i.push("expires="+g.expires.toUTCString()),g.path&&i.push("path="+g.path),g.domain&&i.push("domain="+g.domain),g.secure&&i.push("secure"),c.cookie=i.join("; ");var k=d(a);h.domain&&h.domain!==c.domain&&k===null&&e(a,f,qb(h,{domain:c.domain}))},f=function(){var a="burt_test",b="1";return d(a)===b?!0:(e(a,b),d(a)===b)};return{get:d,set:e,testSet:f}};uc.parseCookies=function(a,b,c){var d=b.split("; "),e={};return vb(d,function(b){var d=b.split("="),f=d[0],g=d[1];typeof g=="undefined"||g===""?e[uc.decodeCookie(a,f)]=null:e[uc.decodeCookie(a,f)]=c?g:uc.decodeCookie(a,g)}),e},uc.decodeCookie=function(a,b){try{return b===null||b===undefined?null:a.decodeURIComponent(b)}catch(c){return b}},uc.getTopCookieDomainFromDomain=function(a,b,c){return a==="msie"&&b===c&&b.match(/(\.|^)[^.]{2}\.[^\.]+$/)&&b.split(".").length===2?null:a==="msie"&&b.split(".").length<3&&b.match(/(\.|^)[^.]{2}\.[^\.]+$/)?"."+c:"."+b};vc=function(a,b,c){var d,e=function(){try{d=d||ic.parse(a.get(b))}catch(c){}d=d||{}},f=function(a){return e(),d[a]},g=function(f,g){return e(),d[f]=g,a.set(b,ic.stringify(d),c),d},h=function(){return a.get(b)};return{exists:h,get:f,set:g}};wc=function(){return(new Date).getTime()},xc=function(a,b,c,d,e){var f,g;return d=d||-1,f=typeof c=="function"?c:function(){return c},g=function(){var c=b();d--;if(!c&&d!==0)return a(g,f());if(e)return e()},a(g,f())},yc=function(a,b,c,d,e){var f,g;return d=d||-1,f=typeof c=="function"?c:function(){return c},g=function(){return d--,b(dc(function(b){if(!b&&d!==0)return a(g,f());if(e)return e()}))},a(g,f())};Ec=function(b){var c,d,e;return c=b.document,d=null,e=null,lc(b).oldIE&&a(b,"frameElement")&&b.frameElement?(d=b.frameElement.offsetWidth,e=b.frameElement.offsetHeight):(d=b.innerWidth||(c.documentElement&&c.documentElement.clientWidth!==0?c.documentElement.clientWidth:c.body.clientWidth),e=b.innerHeight||(c.documentElement&&c.documentElement.clientHeight!==0?c.documentElement.clientHeight:c.body.clientHeight)),{w:d,h:e}},Fc=function(a){var b,c,d,e,f;return b=a.document,c=a.pageXOffset||(b.documentElement?b.documentElement.scrollLeft:(e=b.body)!=null?e.scrollLeft:void 0),d=a.pageYOffset||(b.documentElement?b.documentElement.scrollTop:(f=b.body)!=null?f.d.body.scrollTop:void 0),{x:c,y:d}},zc=function(a){var d=null,e=null,b=void 0,c=void 0;vb(a,function(a){var f=a.y+a.h,g=a.x+a.w;if(d===null||d>a.x)d=a.x;if(e===null||e>a.y)e=a.y;if(!b||b<f)b=f;if(!c||c<g)return c=g}),c-=d,b-=e;if(d!==null&&e!==null&&c!==null&&b!==null)return{x:Math.round(d),y:Math.round(e),width:Math.round(c),height:Math.round(b)}},Ac=function(a){var b;return b=function(b){return Math.max(a.documentElement["client"+b],a.body["scroll"+b],a.documentElement["scroll"+b],a.body["offset"+b],a.documentElement["offset"+b])},{width:b("Width"),height:b("Height")}},Bc=function(a,b,c){var e,d=a.navigator;if(d&&d.appVersion){e=d.appVersion.match(/Version\/([\d\.]+)/);if(c.tagName==="OBJECT"&&!(b.browser==="msie"||b.browser==="safari"&&e&&e[1]<"5.1"))return Uc(c,"EMBED")||c}return c},Dc=function(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;return i=i||{},m=lc(b),q=b.navigator,c.length===0&&(c=[{}]),x=!1,q&&q.appVersion&&q.userAgent&&(v=q.appVersion.match(/Version\/([\d\.]+)/),s=q.userAgent.match(/Opera\/(\d+)/),x=!(m.browser==="safari"&&v&&v[1]<"5.0"||m.browser==="opera")),l=!x||!i.enableTony||!g,n=function(a){return a.frameElement||Bc(b,m,a)},D=wb(c,function(b){var g,i,j,k,m,o,p,q,r,s,t,u,v,w=this;return!a(b,"tagName")||!b.tagName?{x:[0],y:[0],w:[0],h:[0],sx:[0],sy:[0],ww:[0],wh:[0],rx:[0],ry:[0],rxa:[0],rya:[0],vix:[0],viy:[0],vpix:0,pix:0,vz:0,visibilityChangedForNode:function(){return!1}}:(q={x:[],y:[],w:[],h:[],sx:[],sy:[],ww:[],wh:[],rx:[],ry:[],rxa:[],rya:[],vix:[],viy:[]},j=e(b),j.windows||(j.windows=ub(d(Wc(b)).getFrames(b))),o=j.windows.slice(1,j.windows.length),o.push(b),vb(o,function(c,e){var g,h,i,j,k,l,m,o,p,r,s,t,u,v,w,x,y,z;return h=f(c),u=h.window||(h.window=Vc(c)?c:Wc(c)),i=h.observer||(h.observer=d(u)),j=d(a(u,"parent","document","firstChild")?u.parent:u),k=h.positionElement||(h.positionElement=n(c)),g=(b===c?i:j).elementGeo(k),q.x.push(g.x),q.y.push(g.y),q.w.push(g.w),q.h.push(g.h),r=(b===c?i:j).scroll(),s=r.x,t=r.y,q.sx.push(s),q.sy.push(t),v=void 0,e===0&&(v=j.dimension(),q.ww.push(v.w),q.wh.push(v.h)),l=g.x-s,o=g.y-t,m=l+(q.rxa[e-1]||0),p=o+(q.rya[e-1]||0),q.rx.push(l),q.ry.push(o),q.rxa.push(m),q.rya.push(p),w={start:m,end:m+g.w},x=q.vix[e-1]||{start:0,end:v.w},y={start:p,end:p+g.h},z=q.viy[e-1]||{start:0,end:v.h},q.vix.push(mc(w,x)),q.viy.push(mc(y,z))}),m=o.length-1,v=q.w[m],k=q.h[m],q.pix=v*k,r=q.vix[m],s=q.viy[m],q.vw=r.end-r.start,q.vh=s.end-s.start,q.vpix=q.vw*q.vh,t=Ib(ub(q.rx.slice(0,q.rx.length-1))),t=wb(t,function(a){return-a}),t.push(0),t.push(q.x[m]-q.sx[m]),q.vx=Math.max.apply(Math,t),u=Ib(ub(q.ry.slice(0,q.ry.length-1))),u=wb(u,function(a){return-a}),u.push(0),u.push(q.y[m]-q.sy[m]),q.vy=Math.max.apply(Math,u),q.vpix>0&&!l&&(p=new kc(b.ownerDocument,b,c,e,h),q.tony=p.shoot(q,N),q.vpix*=q.tony),g=!1,i=function(){return g=!0},vb(j.windows,function(a){var b;return b=d(a),j=e(a),j.visibilityChangedListenerId=b.attachWindowEvent(i,j.visibilityChangedListenerId)}),q.visibilityChangedForNode=function(){var a;return p=new kc(b.ownerDocument,b,c,e,h),g?!0:(a=function(){var a;return a=void 0,function(){return a!==undefined?a:(a=p.shoot(q,O,!0),a)}}(),x?q.vz>0?0===a():q.vw*q.vh>0?0!==a():!1:!1)},q.vz=q.vpix===0?0:q.vpix/q.pix,q)}),C=Eb(wb(D,function(a){return a.vpix}),function(a,b){return a+=b,a}),y=Eb(wb(D,function(a){return a.pix}),function(a,b){return a+=b,a}),j=function(){return wb(D,function(a){return{h:a.h[a.h.length-1],w:a.w[a.w.length-1]}})},t=function(){return wb(D,function(a){return wb(a.x,function(b,c){return{x:b,y:a.y[c]}})})},z=function(){return Math.round(100*(y===0?0:C/y))},r=function(){return wb(D,function(a){return Math.round(100*a.vz)})},o=function(){return Ab(c,function(b){return a(b,"ownerDocument")})},B=function(){return o()?zb(D,function(a){return a.visibilityChangedForNode()}):!0},w=function(){return!1},p=function(){return""},k=function(){return[j()[0]]},u=function(){var a,b;return a=0,b=0,vb(t()[0],function(c){return a+=c.x,b+=c.y}),[{x:a,y:b}]},A=function(){return[z()]},{partitions:{dimensions:k,positions:u,visibility:A},dimensions:j,positions:t,hasNodeAccess:o,nodeVisibilities:r,visibilityHasChanged:B,significantVisibilityChange:w,visibility:z,name:p}},Cc=function(a,b){var c;return c=new jc(a,b),c.getVisibilityFn(Ec,Fc,window)};Gc=function(a,b,c){var d="on"+b;if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent(d,c);else{var e=a[d];a[d]=function(){typeof e=="function"&&e.apply(this,arguments),c.apply(this,arguments)}}},Hc=function(a,b,c){var d="on"+b;a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent(d,c):delete a[d]},Ic=function(a){document.addEventListener?window.addEventListener("load",a,!1):document.attachEvent&&window.attachEvent("onload",a)},Jc=function(a,b){if(b.match(/<script/i))return null;var c=a.document.createElement("div");return c.innerHTML=b,Lc(c.childNodes)},Kc=function(a){var b=[];for(var c=0;c<a.length;c++)a[c].nodeType===3&&b.push(a[c]);return b},Lc=function(a){var b=[];for(var c=0;c<a.length;c++)a[c].nodeType!=3&&a[c].nodeType!=8&&b.push(a[c]);return b},Mc=function(a,b,c){if(a.length===0)return[];a=Nb(a);var d=[];for(var e=0;e<a.length;e++){var f=a[e];for(var g=0;g<b.length;g++)if(f.tagName===b[g]){d.push(f);if(!c)return d}d=d.concat(Mc(f.childNodes,b,c));if(!c&&d.length>0)return[d[0]]}return d},Nc=function(a,b){b===undefined&&(b=0);if(a.length===0)return 0;a=Nb(a);var c=wb(a,function(a){return a.childNodes?a.childNodes.length===0?0:1+Nc(a.childNodes,b):0});return b+Math.max.apply(Math,c)},Oc=function(a,b){var c=b.parentNode;while(c){if(c===a)return!0;var d=c.parentNode;if(c===d)return!1;c=d}return!1},Pc=function(a,b){var c=[];return vb(a,function(a){for(var d=0;d<b.length;d++)a.tagName===b[d]&&c.push(a)}),c},Qc=function(a,b){var c=[];return vb(a,function(a){var d=!1;for(var e=0;e<b.length;e++)a.tagName===b[e]&&(d=!0);d||c.push(a)}),c},Rc=function(a,b,c){var d=[],e=a,f=300;do{(!b||!b(e))&&d.push(e),e=e.nextSibling;if(--f<0)throw{ms:"Stuck in 'findSiblingsAndChildrenOfType'",md:"Current: "+e.tagName+" #"+e.id+" "+e.className}}while(e&&(!c||!c(e)));return d},Sc=function(a,b){return Pc(Rc(a),b)},Tc=function(a,b){var c=[];return vb(a,function(a){c=c.concat(Mc(a,b,!0))}),c},Uc=function(a,b){for(var c=0;c<a.childNodes.length;c++)if(a.childNodes[c].tagName===b)return a.childNodes[c];return null},Vc=function(a){return a&&typeof a=="object"&&"setInterval"in a},Wc=function(b){return b.ownerDocument&&(b=b.ownerDocument),Vc(b)?b:b.nodeType===9?b.defaultView||a(b,"parentWindow")&&b.parentWindow:!1},Xc=function(b){var c=[],d=b;for(var e=0;e<300;e++){c.push(d);if(d==b.top||!a(d,"parent","document","firstChild")||!d.parent)return c;d=d.parent}throw"Stuck in 'getFrames'"},Yc=function(a){var b=Xc(a);return b?b[b.length-1]:a},Zc=function(a,b){var c;return a.currentStyle?c=a.currentStyle[b]:window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b)),c},$c=function(a,b){typeof b=="string"&&(b=[b]);var c=[];for(var d=0;d<a.childNodes.length;d++){var e=a.childNodes[d];for(var f=0;f<b.length;f++)e.tagName=="PARAM"&&e.name.toLowerCase()==b[f].toLowerCase()&&c.push(e.value)}return c},_c=function(a,b){var c=300;while(a){var d=b(a);if(d)return d;a=a.parentNode;if(--c<0)throw"Stuck in 'traverseUp'"}},ad=function(a){var b=1,c=0,d=65521;for(var e=0;e<a.length;e++)b=(b+a.charCodeAt(e))%d,c=(c+b)%d;return c<<16|b},bd=function(a){var b=2636928640,c=4022730752,d=2147483648,e=624,f=2147483647,g=2567483615,h=1812433253,i=397,j=4294967296,k=65535,l=11,m=15,n=18,o=7,p=[],q=e,r={};return r.seed=function(a){q=e,p[0]=a>>>0;for(var b=1;b<e;b++)p[b]=p[b-1]^p[b-1]>>>30,p[b]=(h*((p[b]&k<<16)>>>16)<<16)+(p[b]&k)*h+b>>>0},r.random=function(){if(q>=e){for(var a=0;a<e;a++)p[a]=((p[(a+1)%e]&1)===1?g:0)^(p[a]&d|p[(a+1)%e]&f)>>>1^p[a+i-(a>=e-i?e:0)];q=0}var h=p[q];return h^=h>>>l,h^=h<<o&b,h^=h<<m&c,h^=h>>>n,q++,(h>>>0)*(1/j)},r.seed(a||(new Date).getTime()),r},cd=function(a,b,c){var d=0,e=function(){d<=0&&c(b)},f=function(){d--,e()};vb(b,function(b){var c=b.tagName;if(c==="IMG"&&!b.complete){d++;var e=dc(f);Gc(b,"load",e),xc(a.setTimeout,function(){return b.complete},200,50,e)}}),e()},dd=function(a,b,c,d){var e=0,f=function(){e<=0&&d(c)},g=function(){e--,f()},h=function(a){try{return a.PercentLoaded()!==undefined}catch(b){return!1}};vb(c,function(c){c=Bc(a,b,c);var d=c.tagName;if(d==="OBJECT"||d==="EMBED")if(!h(c)||c.PercentLoaded()<100)e++,xc(a.setTimeout,function(){return h(c)&&c.PercentLoaded()>=100},200,50,g)}),f()},ed=function(b,c,d){if(a(b.contentWindow,"frameElement")){var e=b.contentWindow.document;d=dc(d);var f=!1,g=function(){f=!0,d()};b.contentWindow.document.readyState||Gc(b.contentWindow,"load",g);var h=c(function(){if(f)return!0;if(e.readyState==="complete"&&e.URL!=="about:blank")return g(),!0});xc(window.setTimeout,h,50,100,g)}else d()},fd=function(a,b,c,d,e){e=e||{};var f={},g=e.syncUrl||ib,h=!1,i=function(d,e){var h=A+"_"+b.generateIDFromTime(),i=g+d+"?callback="+h;a[h]=function(b){f=uc.parseCookies(a,b),e()},c.get(i)},j=function(a,c,e){var g=a.provider,h=a.cookieName||a.provider,i=f[h];if(i)d.set(g,i),e(g,i,!0,!1);else{var j=d.get(g);if(j)e(g,j,!0,!1);else{var k=a.defaultId||b.generateIDFromTime();c(g,h,k,e)}}},k=function(a,b,c,e){if(h){e(a,undefined,!1,!1);return}if(d.exists()){e(a,undefined,!1,!1);return}var g="status";i(g,function(){var c=f[b];c&&d.set(a,c),e(a,c,!!c,!1)})},l=function(a,b){return j(a,k,b)},m=function(a,b,c,e){if(h){e(a,c,!1);return}var g="sync/"+b+"/"+c;i(g,function(){var g=f[b];g?(d.set(a,g),e(a,g,!0,g===c)):(h=!0,e(a,c,!1,!0))})},n=function(a,b){return j(a,m,b)},o=function(a,b){var c=a.cookieName||a.provider;return i("delete/"+c,function(){d.set(c,f[c]),b(a.provider,f[c],!f[c],!f[c])})};return{read:l,write:n,remove:o}},gd=function(){return{get:function(){},set:function(){}}},hd=function(a){var b=Yc(a),c=b.document.referrer,d=b.location.hostname;if(c&&d){var e=document.createElement("a");e.src=c;var f=d.replace(/^www\./i,""),g=new RegExp("^\\s*http(s)?://[^/]*"+f+"(:[0-9]*)?/","i");if(!g.test(c))return c}},id=function(a){return Yc(a).location.href},jd=function(a){if(a.outerHTML)return a.outerHTML;if(a.nodeType==3)return a.nodeValue;var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},kd=function(a){return Lb(a.split("?").slice(1).join("?").split("&"),function(a){var b=a.split("=");return[decodeURIComponent(b[0]),decodeURIComponent(b.slice(1).join("="))]})};ld=function(){function a(a,b,c,d){this.win=a,this.random=b,this.schema=c,this.onPing=d,this.pingState=0,this.id=0}return a.prototype.run=function(){var a,b,c,d=this;return a=function(){return d.onPing(),c()},b=function(){var a;return a=d.schema[d.pingState]*d.random()*1e3,d.pingState=nc(d.pingState+1,0,d.schema.length-1),a},c=function(){return d.id=d.win.setTimeout(a,b())},c()},a.prototype.reset=function(){return this.pingState=0,this.win.clearTimeout(this.id)},a}();md=function(a,b){if(!b||!a)return!0;var c=parseInt("00"+a.substring(0,6),36),d=parseInt("00"+a.substring(6,12),36);if(isNaN(c)||isNaN(d))throw new Error("Invalid ID-parts. Top half is "+c+" and bottom half is "+d);return(c+d)%b===0},nd=function(a,b){return"type="+a+"&"+wb(b,function(a,b){return b+"="+a}).join("&")},od=function(a,b,c,d,e,f,g,h,i){var j=a.escape;c&&d.escapeClickUrl&&(c=j(c)),c=c||"";var k={type:"click",si:e,pi:f};i.apiKey&&(k.rk=i.apiKey),g&&(k.ui=g),k.av=h,k.mk=i.mediaKey,i.siteName&&(k.wn=i.siteName);var l=function(a,b,d){b||(b="&"),d||(d="="),a||(a="?");var e=[];return vb(k,function(a,b){e.push(b+d+a)}),a+e.join(b)+b+"rd"+d+c},m;d.escapeAll?m=j(b)+l(j("?"),j("&"),j("=")):d.escapedAmps?m=b+l("?","%26"):m=b+l();if(d.escapes)for(var n=0;n<d.escapes;n++)m=j(m);return m},pd=function(a){var b=Mc(a,["SPAN"],!0);return b=Db(b,function(a){return a.className.match(/burt_cloud_key/)}),b.length==1?b[0].attributes.rel.value.split(","):[]},qd=function(a,b,c){var d="<"+a+' style="display:none" class="'+b+'"';return c&&(d+=' id="'+c+'"'),d+="></"+a+">",d},rd=function(a){var b;if(a.tagName==="OBJECT"){if(a.data)return a.data;var c=Uc(a,"EMBED");if(c)return a.data||c.src;var d=$c(a,"movie");if(d.length>0)return d[0]}else{if(a.tagName==="EMBED")return a.src;if(a.tagName==="IMG")return a.src}},sd=function(){var a=function(a){var b=a.match(/(clickTAG\d?|creativeURL\d?|linkurl)=([^&]*)/i);return b?encodeURIComponent(b[2]):null};return function(b){if(b.tagName&&b.tagName.toUpperCase()==="OBJECT"){var c=$c(b,["flashvars","movie"]);if(c.length>0)for(var d=0;d<c.length;d++){var e=a(c[d]);if(e)return e}var f=Uc(b,"EMBED");if(f){var g=a(f.src);if(g)return g}}else if(b.tagName&&b.tagName.toUpperCase()==="EMBED"){if(b.getAttribute("flashvars")){var h=a(b.getAttribute("flashvars"));if(h)return h}var i=a(b.src);if(i)return i}if(b.tagName&&(b.tagName.toUpperCase()==="IMG"||b.tagName.toUpperCase()==="DIV"))return _c(b,function(a){if(a.tagName&&a.tagName.toUpperCase()==="A")return encodeURIComponent(a.href)})}}(),td=function(a,b){var c=a.document,d=function(a){return a[b]?a:!1},e=function(a){return a.parentNode&&a.parentNode.tagName=="OBJECT"?a.parentNode:a},f=c.getElementsByTagName("embed"),g=Cb(f,d);return g?e(g):(f=c.getElementsByTagName("object"),g=Cb(f,d),g?e(g):null)},ud=function(a){return"//"+a+".log.richmetrics.com/log"},vd=function(a,b,c,d){var e,f,g,h,i=function(i,j){e||(e=ec(),f=fd(a,c,b,vc(gd(),"null")),f.write({provider:"rfa"},e.invoke),e.register(function(a,b,e,f){g=gd(),g.testSet=function(){return e},h={getUserId:function(){return b||c.generateIDFromTime()},getPageId:d.getPageId}})),e.register(function(a,b,c,d){j({cookieJar:g,sync:f,richId:h})})};return i},xd=function(a,b){return function(){return a.apply(b,arguments)}};wd=function(){function a(a){this.win=a,this.observe=xd(this.observe,this),this.checkForBreak=xd(this.checkForBreak,this),this.queue=[],this.timeout=void 0,this.interactionTimeout=100,this.interactionMaxTimeout=1e3,this.now=function(){return(new Date).getTime()},this.lastInteraction=this.now(),this.lastFlush=this.now(),this.checkForBreak()}return a.prototype.flush=function(){if(this.queue.length>0)return vb(this.queue,function(a){return a()}),this.queue=[]},a.prototype.checkForBreak=function(){var a=this;return this.clearTimeout(),this.timeout=this.win.setTimeout(function(){if(a.now()-a.lastInteraction>=a.interactionTimeout||a.now()-a.lastFlush>=a.interactionMaxTimeout)a.lastFlush=a.now(),a.flush();return a.checkForBreak()},this.interactionTimeout)},a.prototype.clearTimeout=function(){if(this.timeout)return this.win.clearTimeout(this.timeout)},a.prototype.observe=function(){return this.lastInteraction=this.now()},a.prototype.hookObserver=function(a){return a.attachWindowEvent(this.observe)},a.prototype.onBreak=function(a){return this.queue.push(a)},a}();yd=ic.stringify;zd=function(){function a(b,c,d){var e;d==null&&(d={}),d.getExternalReferrer||(d.getExternalReferrer=hd),e=new Date,e=new Date(e.setMinutes(e.getMinutes()+30)),this.externalReferrer=d.getExternalReferrer(b),this.externalReferrer||(this.externalReferrer=c.get(a.persistentReferrerIdentifier)),this.externalReferrer||(this.externalReferrer=""),this.externalReferrer&&c.set(a.persistentReferrerIdentifier,this.externalReferrer,{path:"/",expires:e})}return a.persistentReferrerIdentifier="byburt_persistentReferer",a}();Ad=function(){function a(b){this.cookieJar=b,this.persister=vc(this.cookieJar,a.cookieName,a.cookieJarOptions)}return a.prototype.set=function(a,b){return this.persister.set(a,b)},a.prototype.get=function(a){return this.persister.get(a)},a}(),Ad.cookieName="richVisit",Ad.cookieJarOptions={expires:{toUTCString:function(){return(new Date((new Date).getTime()+18e5)).toUTCString()}}};Bd=function(){function a(b,c){this.persister=b,this.idGenerator=c,this.id=this.persister.get(a.idIdentifier),this.count=this.persister.get(a.countIdentifier),this.bumped=!1;if(this.id==null||this.count==null)this.id=this.idGenerator.generateIDFromTime(),this.count=1,this.bumped=!0,this.persist()}return a.prototype.bump=function(){return this.bumped||(this.count+=1,this.bumped=!0),this.persist(),this},a.prototype.persist=function(){return this.persister.set(a.countIdentifier,this.count),this.persister.set(a.idIdentifier,this.id)},a.prototype.serializedCount=function(){var a;return a=this.count.toString(36).toUpperCase(),a.length<2&&(a="0"+a),a},a.prototype.serialize=function(){return""+this.id+this.serializedCount()},a.prototype.getId=function(){return this.serialize()},a}(),Bd.idIdentifier="id",Bd.countIdentifier="count";Cd=function(a,b,c){c=c||1900;var d=a.document;return{maxRequestLength:c,get:function(e,f,g){if(e.length>c)return;var h=!1,i=a.setTimeout(function(){h=!0,g&&g(b)},b),j=d.getElementsByTagName("script")[0],k=j.parentNode,l=d.createElement("script");l.type="text/javascript",l.src=e,l.onload=l.onerror=l.onreadystatechange=function(){a.clearTimeout(i);if(!l.readyState||/loaded|complete/.test(l.readyState))f&&!h&&f(),l.onload=l.onerror=l.onreadystatechange=null,l.parentNode&&l.parentNode.removeChild(l),l=undefined},k.insertBefore(l,j)}}},Dd=function(b,d,f,h){var i=h.document,j=!1,k=0,hostProtocol=d.CONST.protocol,l=1,m=b.env,o=function(e,o){var p,q,r,s,t,u=-1,v=e.mediaLogUrl||ud(e.apiKey),w,x=0;e.apiKey?(w=ec(),w.register(b.invoke)):w=b,e=e||{},o=o||{};var y=o.cookieJar||b.cookieJar,z=o.sync||b.sync,A=o.richId||b.richId;if(typeof e.parentAgent!="undefined"){var B=parseInt(e.parentAgent,10),C=h;for(var D=0;D<B;D++)C=h.parent;delete e.parentAgent;if(e.adId){var E=i.getElementById(e.adId);e.wrapperNode=E}C[d.global.identifier].push({version:G,invoke:e});return}var F=function(){return e.forceXframe||b.windowObserver.isCrossDomain()&&e.apiKey&&m.browser==="msie"},I=function(){return e.rfa&&b.windowObserver.isCrossDomain()&&!F()},N=function(){return r=e.sessionId=r||e.sessionId||d.idGenerator.generateIDFromTime(),r},O=function(){if(!e.rfa)return md(f.userId,e.sample);var a=e.apiKey,b=parseInt(a.substring(11,12),36),c=parseInt("00"+f.userId.substring(0,10),36);return c%Math.pow(2,b)===0},P=function(a){var c=b.nodeCache.getDataFromNode(a);return c[r]||(c[r]={sessionId:r,global:c}),c[r]},Q=function(){var a;return function(){return a=a||function(){return F()?b.xFrame.getXframeVisibilityForNodes:e.visibilityFn||Dc}(),a}}(),R=function(a){return a&&a.className&&a.className.match(K)},S=function(a){return a&&a.className&&a.className.match(L)},T=b.windowObserver.getFrames.apply(null,p&&p.length>0?[p[0]]:[]),U=wb(T,b.getObserver);vb(U,function(a){b.interactionObserver.hookObserver(a)});var Z=ec(),$=function(){var a={absolutePosition:e.placementKind=="absolute",xFrameUrl:e.xFrameUrl,enableTony:e.enableTony};return t=Q()(h,p,b.getObserver,P,b.nodeCache.getDataFromNode,b.ready.loaded,N,a),Z.invoke(t),t},ab=function(){return t||$()},bb=function(a,b){x<_&&(x++,ac(h,function(){eb("error",{ms:encodeURIComponent(a),md:encodeURIComponent(b)})}));if(h.byburt_developmentMode)throw new Error(a+" "+b)},cb=function(a,b){if(h.byburt_developmentMode)b();else try{return b()}catch(c){var d="Unknown error",e=null;return c&&c.ms&&c.md?(d=c.ms,e=c.md):c&&typeof c.toString=="function"&&(d=c.toString()),bb(a+": "+d,e),undefined}},db=function(a,b,c){return function(d){e[b]&&(d[a]=c||e[b])}};q=$b(function(a,b,c){var d={},e=this;return vb(b,function(b){c&&!h.byburt_developmentMode?ac(h,function(){e[b](d,a)}):cb("makeParams."+b,function(){e[b](d,a)})}),d},{ad:function(a){e.empty?a.ad="":e.dimensionCallback?a.ad=window[e.dimensionCallback](e,ab().dimensions()):a.ad=wb(ab().dimensions(),function(a){return Math.round(a.w)+"x"+Math.round(a.h)}).join(",")},ac:function(a,b){b&&b.action&&(a.ac=encodeURIComponent(b.action.toString()))},an:db("an","adName"),ap:function(a){if(!e.empty)if(e.positionCallback){var b=ab();a.ap=window[e.positionCallback](e,b.positions(),b.dimensions())}else a.ap=wb(ab().positions(),function(a){return ub(wb(a,function(a,b){return a.x+"x"+a.y}))}).join("|");else a.ap=""},av:function(a){var b=H;d.CONST.versionIdentifier&&(b+="-"+d.CONST.versionIdentifier),e.versionSuffix&&(b+="_"+e.versionSuffix),a.av=b},ar:function(a){var b=e.autoReload;b&&(a.ar=b?1:0)},ca:function(a,b){var c="",d=new RegExp(e.siteName+"$","i");d.test(h.location.hostname)||(c+="external-"),e.siteName&&(a.ca=c+(h.byburt_category||e.category||"unknown"))},cc:function(a,b){b&&b.category&&(a.cc=encodeURIComponent(b.category.toString()))},cd:function(a){a.cd=b.windowObserver.isCrossDomain()?1:0},ce:function(a){a.ce=e.clickEnabled?1:0},cks:function(a){var b=[];e.cloudKeys&&(b=b.concat(e.cloudKeys));if(e.cloudKeysByTag)if(e.searchNodes||e.adId){var c=e.searchNodes;if(!c){var d=h.document.getElementById(e.adId);if(d){var f=d.className&&d.className.indexOf("byburt_before_adtag")!==-1;c=f?Rc(d,R,S):[d]}}c&&c.length>0&&(b=b.concat(pd(c)))}b.length>0&&(a.cks=Mb(b).join(","))},cl:function(a){},co:function(a){a.co=f.cookieSupport?"1":"0"},cp:db("cp","canonicalPath"),ct:function(a,c){c&&typeof c.occurredTime!="undefined"?a.ct=c.occurredTime:a.ct=b.currentTime()},cv:function(a,b){b&&b.value&&(a.cv=encodeURIComponent(b.value.toString()))},ei:function(a,b){var c=b.value;typeof c!="undefined"&&c!==null&&(a.ei=c)},ep:db("ep","empty",1),en:function(a){e.adNetwork&&(a.en="AN")},eu:function(a){e.rfa&&b.windowObserver.isCrossDomain()?a.fu=encodeURIComponent(h.location.href):a.eu=encodeURIComponent(b.windowObserver.getTopFrame().location.href)},et:function(a){},fn:function(a){},fs:function(a,b){a.fs=b.fresh?1:0},fu:function(a){},lu:function(b){var c=function(a){return a.join(",").length>1400&&(a=wb(a,function(a){return tc(h.document,a)})),a.join(",")},d=!1,f=wb(p,function(b){return b.tagName==="IFRAME"&&a(b,"contentWindow","document","body","childNodes")?b.contentWindow.document.body:b}),g=Mc(f,["OBJECT","EMBED","IMG"],!0),i=wb(g,rd);i=Db(i,Xb),i=wb(i,function(a){return encodeURIComponent(qc(a))}),i=Mb(i);var j=Db(p,function(a){return a.tagName=="IFRAME"});i.length>0?b.lu=c(i):j.length>0?b.wu=c([encodeURIComponent(qc(j[0].src))]):!e.empty&&p.length>0&&(b.lu="")},lb:function(a,b){b&&b.label&&(a.lb=encodeURIComponent(b.label.toString()))},ln:function(a){h.navigator&&(a.ln=h.navigator.userLanguage||h.navigator.language)},md:function(a,b){a.md=b.md},mk:db("mk","mediaKey"),mp:function(a,c){if(!c)return;var d,e;if(c.pageX||c.pageY)d=c.pageX,e=c.pageY;else if(c.clientX||c.clientY)d=c.clientX+i.body.scrollLeft+i.documentElement.scrollLeft,e=c.clientY+i.body.scrollTop+i.documentElement.scrollTop;var f=Wc(p[0]),g=b.getObserver(f).elementGeo(p[0]);d-=g.x,e-=g.y,a.mp=d+"x"+e},ms:function(a,b){a.ms=b.ms},mt:function(a){var b;p.length>0&&Pb(["OBJECT","EMBED","IMG"],p[0].tagName)!==-1?b=p:b=Mc(p,["OBJECT","EMBED","IMG"],!0);var c=b.length>0?b:p;c=Nb(c),c=wb(c,function(a){return a.tagName}),c=Nb(c),c.length>0?a.mt=c.join(","):!e.empty&&p.length>0&&(a.mt="")},nc:function(a){var b=Mc(p,["OBJECT","EMBED","IMG"]),c=b.length>0?b:p;a.nc=c.length},nz:function(a){if(e.stopped){a.nz=0;return}if(I()||p.length===0)return;a.nz=ab().nodeVisibilities().join(",")},pd:function(a){a.pd=wb(b.observers,function(a){var b=a.getPageDimension();return b.width+"x"+b.height}).join(",")},pi:function(a){a.pi=f.pageId},pk:db("pk","placementKind"),pn:db("pn","placementName"),pr:function(a,b){a.pr=b.provider},rd:function(a){},rf:function(a){var b=f.referrer.externalReferrer;b&&(a.rf=h.encodeURIComponent(b))},lr:function(a){var c=b.windowObserver.getTopFrame().document.referrer;c&&(a.lr=encodeURIComponent(c))},rk:db("rk","apiKey"),sa:function(a){a.sa=b.windowObserver.isCrossDomain()?0:1},sd:function(a){h.screen&&!isNaN(h.screen.width)&&!isNaN(h.screen.height)&&(a.sd=h.screen.width+"x"+h.screen.height)},sg:function(a){var b=[];if(e.segments)for(var c in e.segments)e.segments.hasOwnProperty(c)&&b.push(c+":"+e.segments[c]);b.length>0&&(a.sg=b.join(","))},si:function(a){a.si=N()},sn:function(a){typeof a.sn=="undefined"&&(a.sn=l++)},sr:db("sr","sample"),ss:function(a,b){a.ss=b.success?1:0},ti:db("ti","adTagId"),ty:function(b,c){if(!c)return;a(c,"type")||(c={type:"mouseover"}),c.type==="mouseover"?b.ty="mouseEnter":c.type==="mouseout"?b.ty="mouseExit":b.ty=c.type},tn:function(a){e.tagName&&(a.tn=encodeURIComponent(e.tagName))},tz:function(a){a.tz=(new Date).getTimezoneOffset().toString()},ui:function(a){a.ui=f.userId},vi:function(a){},vl:function(a,b){if(!b)return;b.value&&(a.vl=b.value.toString())},vz:function(a){if(e.stopped){a.vz=0;return}if(I()||p.length===0)return;a.vz=ab().visibility()},vn:function(a){if(I()||p.length===0)return;a.vn=ab().name()},wd:function(a){var b=wb(U,function(a){return a.dimension()});b.length>0&&(a.wd=wb(b,function(a){return a.w+"x"+a.h}).join(","))},wn:db("wn","siteName"),ws:function(a){var b=wb(U,function(a){return a.scroll()});if(!b)return;b.length>0&&(a.ws=wb(b,function(a){return a.x+"x"+a.y}).join(","))},wu:function(a){}});var eb=function(a,c,d){var f=function(f){var g=mb[f||a];if(!g)throw"No such action "+a;var i=q(c||h.event,g,a==="error");ac(h,function(){w.invoke(a,i,e.adId)}),e.disableLogging||b.transport.enqueueMessage({kind:a,params:i,url:v,callback:d})};cb("sendMessage "+a,function(){a==="exposure"&&e.rfa?f("rfa_exposure"):a==="sync"&&e.rfa?f("rfa_sync"):f()})},fb=function(a,b,c,d){z[a](b,function(a,b,e,f){c&&c.apply(null,arguments),eb("sync",{provider:a,value:b,success:e,fresh:f},d)})},gb=function(){cb("startPagePingLogging",function(){var a,c=function(){return Math.round(V*1e3+1e3*W*b.random())},d=function(){var b=c();a&&h.clearTimeout(a),a=h.setTimeout(function(){eb("pageping")},b)};d(),b.register(d)})},hb=function(){cb("sendPing",function(){eb("ping")})},ib=function(){cb("forcePing",function(){$(),eb("ping")})},jb=function(){cb("startVisibilityProbing",function(){var a,c=new ld(h,b.random,e.pingTimes||X,ib),d=$();if(I())return;d.visibility()>0&&c.run();var f=function(a){var f=function(){if(d.visibilityHasChanged()||e.placementKind!=="absolute"&&d.visibility()>0&&b.random()<=.2){var f=$(),g=Math.ceil(f.visibility())!==Math.ceil(d.visibility());g&&(hb(),f.visibility()===0?c.reset():c.run()),d=f}e.stopped?($(),hb(),c.reset()):a()};e.flushBetweenInteractions?b.interactionObserver.onBreak(f):f()},g=function(){return Math.floor(b.random()*Y/2+Y/2)};yc(h.setTimeout,f,g)})},kb=function(){cb("startActivityLogging",function(){var a=function(a,b){b.occurredTime=a,eb("activity",b)};b.activity.onActive(a),b.activity.onPassive(a)})},lb=function(){cb("startEndLogging",function(){var a=dc(function(){b.transport.flush();var a=v+"?"+nd("end",q(null,mb.end));a+="&et=",a=a.replace(/.+?\/\//,"//");if(a.length+5>b.request.maxRequestLength)return;var c=new m.Image;c.src=hostProtocol+":"+a+"im",b.request.get(hostProtocol+":"+a+"gr")}),c=function(b){vb(["unload","beforeunload"],function(c){gc(b,"on"+c,a),Gc(b,c,a)})};vb([h,i],c),b.ready.onDomReady(function(){c(i.body)})})},nb=function(){cb("startSyncing",function(){b.syncStartedBySessionId=b.syncStartedBySessionId||{};var a=e.rfa?b.syncStartedBySessionId[N()]:b.syncStarted;a||(e.rfa?b.syncStartedBySessionId[N()]=!0:b.syncStarted=!0,b.hasStartedCookieSyncing=!0,b.ready.onDomReady(function(){fb("write",{provider:"burt",cookieName:"id"},b.burtSyncHooks.invoke)}))})},ob=function(){e.configCallback&&h[e.configCallback](e)},pb=function(){cb("startPageLogging",function(){j||(j=!0,p||(p=e.adNodes=[]),eb("page"),nb(),kb(),b.transport.flush(),gb(),lb())})},qb=function(){cb("startLogging",function(){if(e.clickCallback&&typeof e.clickCallback=="function"){var a=q(null,mb.click),b=nd("click",a),c=v+"?"+b+"&rd=";e.clickCallback(c)}ob(),eb("exposure"),nb();if(p.length!==0&&!e.empty){var d=function(a){eb("event",a)};vb(p,function(a){Gc(a,"click",d),Gc(a,"mouseover",d),Gc(a,"mouseout",d)}),jb()}e.rfa&&kb()})},rb=function(a){cb("fireCustomEvent",function(){if(typeof a=="undefined"||!a){if(!e.data)throw"Missing required attribute: data";a={category:e.data.category,action:e.data.action,label:e.data.label,value:e.data.value}}else vb(e.defaultEventData,function(b,c){a[c]||(a[c]=b)});if(!a.category)throw"Missing required event data: category";if(!a.action)throw"Missing required event data: action";eb("customevent",a,e.eventCallback)})},sb=function(){cb("startExternalSync",function(){b.ready.onDomReady(function(){fb(e.syncType,e.syncConfig,e.syncCallback)})})},tb=function(){cb("startVolatileSync",function(){b.ready.onDomReady(function(){var a={success:!0,fresh:!0,provider:e.syncConfig.provider,value:e.syncConfig.defaultId};eb("sync",a,e.syncCallback)})})},xb=function(b,c){e.adNodes=p=b,c==="empty"?e.empty=!0:c&&bb("onDomReady: Unable to determine which node is the ad:",c);var d=1,f=function(a){return function(){return cb("waitForCompletedDocument",a)}},g=function(){d--,d<=0&&qb()},h=vb(b,function(b){b.tagName==="IFRAME"&&a(b,"contentWindow","document","body","childNodes")&&(d++,ed(b,f,g))});g()},yb=function(){e.beforeCallback&&h[e.beforeCallback](e),e.empty?xb([]):e.adNodes?xb(e.adNodes):e.searchNodes?b.ready.onDomReady(function(){h.setTimeout(function(){b.adNodeFinder.find(e.searchNodes,xb)},1)}):e.wrapperNode||e.adId?b.ready.onDomReady(function(){h.setTimeout(function(){var a=e.wrapperNode||i.getElementById(e.adId);if(!a&&!e.searchNodes)bb("onDomReady: Could not find the wrapper node",e.adId),xb([]);else{var c=a.className.indexOf("byburt_before_adtag")!==-1?Rc(a,R,S):[a],d=["serving-sys.com"],f=Cb(Mc(c,["SCRIPT"],!0),function(a){return Cb(d,function(b){return a.src&&a.src.match(b)?{name:b,src:a.src}:!1})});if(f){var g=Lc(c),h=g[g.length-1];h.tagName==="EMBED"&&h.parentNode.tagName==="OBJECT"&&(h=h.parentNode),h.tagName==="OBJECT"?xb([h]):bb("Mediamind: "+f.name,f.src)}b.adNodeFinder.find(c,xb)}},1)}):bb("No ad node specification")};cb("richTracker",function(){e.onMessage&&(typeof e.onMessage=="string"&&(e.onMessage=h[e.onMessage]),w.register(e.onMessage));var a,j=N();if(!e.mediaKey||e.mediaKey.length!==12){bb("richTracker: Invalid media-key");return}var l=function(){typeof e.adId=="undefined"&&(e.adId=J+k+"_"+j,k++),e.noAroundTags=!0,e.enclosedCallback&&(e.noAroundTags=!1,e.callback=e.enclosedCallback),e.callback&&typeof e.callback=="string"&&(e.callback=h[e.callback]),e.placementName&&(h[c]=h[c]||{},h[c][e.placementName]=e.adId);var l=function(){O()&&(e.deferCallback?window[e.deferCallback](e,yb):yb())};if(e.callback&&typeof e.callback=="function"){var o=function(a){var b=a,c=e.clickEscapes-1,d=h.unescape;c<0&&(d=h.escape,c=-c);for(var f=0;f<c;f++)b=d(a);return b},p=!m.crazyScriptOrder||e.empty,q=function(a){return qd("span",K,a)};e.noAroundTags||i.write(q(e.adId));var r=function(){return qd("span",L)},s=od(h,v,"",{},N(),f.pageId,f.userId,H,e);e.callback(j,f.pageId,e.adId,a,o(e.click)||"",s);if(!e.noAroundTags){var t=b.dictionary.add(l),u="burt_api_rfa.instances['"+G+"'].agent.dictionary.get('"+t+"')();",w="if (window."+g+") { "+"document.write(window."+g+"); "+"window."+g+" = null; "+"} "+'document.write("<span style=\\"display:none;\\" class=\\"'+L+'\\"></span>"); ';i.write('<script type="text/javascript">window.'+n+" = {"+" counter: "+(m.crazyScriptOrder?M:0)+', url: "'+d.CONST.afterAdUrl+'",'+" callback: function() { "+w+u+" } "+" }; "+"</scr"+"ipt>"),i.write('<script type="text/javascript" src="'+d.CONST.afterAdUrl+'"></scr'+"ipt>")}}else l()},o=function(){if(e.placementName===undefined)return bb("Must supply placementName for RFM ads"),-1;if(e.placementKind===undefined)return bb("Must supply placementKind for RFM ads"),-1;l()},p=function(){e.rfa=!0;if(!e.apiKey||e.apiKey.length!==12)return bb("richTracker: Invalid API-key"),-1;l()},q=function(){b.page=e,O()&&pb()},r={ad:o,rfa:p,page:q,event:rb,sync:sb,volatileSync:tb},s=r[e.type];if(!s)throw"No action for invocation type: '"+e.type+"'";r[e.type]()});var zb=function(){e.stopped=!0,p=[]},Ab={ad:{visibility:ab,visibilityUpdate:Z.register}};return{exposed:{stop:zb,visibility:ab,messageObserver:w,pinger:ib},config:e}};h[e]=function(a){b.request.get(a)};var p=vd(h,b.request,b.idGenerator,b.richId),q=function(a){return a.test(i.domain)};return function(a){var c=function(a,c){var d=o(a,c);b.pushTracker(a,d)};a.noCookies||Cb(kb,q)?(a.noCookies=!0,p(a,function(b){c(a,b)})):c(a)}},Ed=function(a,b){var c=function(c,d){cd(a,c,function(){dd(a,b,c,function(){d(c)})})};return{load:c}},Fd=function(a,b,c){var d=function(a){return Db(a,function(a){return!(a.tagName==="IMG"&&a.width+a.height<3)})},e=function(a){return Db(a,function(a){return a.nodeType!==8})},f=function(a,b,c){var d=function(){c([],"empty")},e=Mc(a,["DIV"],!0);if(e.length>0)for(var f=0;f<e.length;f++)if(e[f].className=="openx_textblock")return c([e[f]]);if(b.length===1&&b[0].tagName==="IMG")return d();var g=Mc(a,["SCRIPT"]);if(g.length===1&&g[0].src&&g[0].src.match(/openx/i)&&e.length===0)return d();var h=Kc(a);if(e.length===0&&a.length-g.length===h.length&&!wb(h,function(a){return a.innerText||a.textContent||jd(a)}).join("").match(/[a-z0-9]/gi))return d();var i=function(){var a=wb(e,function(a){return a.textContent||a.innerText}).join("").replace(/\W/gi,"").length;if(a===0)return!1;var b=wb(g,function(a){return a.textContent||a.innerText}).join("").replace(/\W/gi,"").length;return a>b};if(g.length>0&&!i())return d();var j=Db(a,function(a){return a.tagName});j.length===0?c([],"No real nodes found: "+wb(a,jd).join("\n")):c(j)},g=function(a,g){a=e(a);var h=Mc(a,b,!0),i;h=Db(h,function(a){return i&&i.tagName==="OBJECT"&&a.tagName==="EMBED"&&a.parentNode===i?!1:(i=a,!0)}),c(h,function(b){var c=d(h);c.length==2&&c[0].tagName=="OBJECT"&&c[1].tagName=="EMBED"?g([c[0]]):c.length>=1?g(c):f(a,h,g)})};return{find:g}};Gd=function(){var a,b,c;return b={},a=0,c={add:function(c){return b[++a]=c,a},get:function(a){return b[a]}}};Hd=function(a,b,c,d){var e=lc(a),f=d,g=!1,h,i=0,j=0,k={},l=ec(),m=ec(),n=function(a){i=0,g||(j=0,g=!0,l.invoke(c(),a))},o=function(b){m.invoke(c(),b),g&&(g=!1,h!==undefined&&a.clearTimeout(h))},p=function(){h!==undefined&&a.clearTimeout(h),h=a.setTimeout(function(){j+=f[i]*1e3,o({type:"timeout",value:j}),i<f.length-1&&i++,p()},f[i]*1e3)},q=function(a){var b=a.type,c=k[b]===undefined;k[b]=!0;if(b=="mousemove"&&e.oldIE&&c)return;if(b=="focus"&&e.browser==="firefox"&&c)return;if(b=="resize"&&e.mobileWebkit&&c)return;g||n(a),p()},r=function(a){return e.browser==="msie"?a.document:a},s=function(b){var c=b,d=b.document,f=r(b),g=function(a,c){Gc(a,c,function(){var a={type:c,sourceFrame:b};q(a)})};g(f,"mousemove"),c===a&&g(c,"focus"),g(d,"keydown"),g(d,"mousedown"),g(c,"resize"),g(c,"mousewheel"),g(c,"DOMMouseScroll"),g(c,"touchmove"),e.mobileWebkit&&g(c,"scroll"),c===a&&Gc(c,"blur",function(){var a={type:"blur",sourceFrame:b};o(a)})};vb(b,s);var t=function(){return g},u=[];l.register(function(a,b){u.push({type:"active",time:a,event:b})}),m.register(function(a,b){u.push({type:"passive",time:a,event:b})});var v=function(){return u};return{getHistory:v,addFrame:s,isActive:t,onActive:l.register,onPassive:m.register}},Id=function(a,b){var c=a.document,d=c.documentElement,e=c.body,f={},g={},h=[],i=lc(a),j=function(){var a=1;return function(){return a++}}(),k=function(c,d,e,i,k,l){var m=[];k||(k=a);var n,o,p=b(),q=function(){var a=b();if(typeof n=="undefined"||d&&a>p+d)n=e(),p=a;return n};l||(l=function(a){n=undefined}),Gc(k,i,function(a){l(a),vb(h,function(a){var b=g[a];b(i)}),vb(m,function(a){var b=g[a];b()})}),f[c]=function(){return q()},f[c].attachEvent=function(a,b){return b||(b=j(),m.push(b)),g[b]=a,b}};f.attachEvent=function(a,b,c){return f[a].attachEvent(b,c)},f.attachWindowEvent=function(a,b){return b||(b=j(),h.push(b)),g[b]=a,b};var l=d.clientTop;l===undefined&&(l=e.clientTop),l===undefined&&(l=0);var m=d.clientLeft;m===undefined&&(m=e.clientLeft),m===undefined&&(m=0),k("scroll",null,$b(Fc,null,[a]),"scroll",a),k("dimension",500,$b(Ec,null,[a]),"resize",a);var n=!0;if(a.navigator.appVersion)if(i.browser!=="msie"){if(i.browser==="safari"){var o=a.navigator.appVersion.match(/Version\/([\d\.]+)/);o&&o[1]<"5.1"&&(n=!1)}}else n=!1;return f.elementGeo=function(a){var b=a.tagName;n&&b==="OBJECT"&&(a=Uc(a,"EMBED")||a);if(!a.getBoundingClientRect)throw new Error(a.tagName+" has no getBoundingClientRect");var c=a.getBoundingClientRect(),d=f.scroll(),e=c.top+d.y-l,g=c.left+d.x-m,h=c.width,i=c.height;return h===undefined&&(h=a.offsetWidth),i===undefined&&(i=a.offsetHeight),{x:Math.round(g),y:Math.round(e),w:Math.round(h),h:Math.round(i)}},f.getPageDimension=function(){return Ac(c)},f.getFrames=fc(function(){return Xc(a)}),f.getTopFrame=fc(function(){return Yc(a)}),f.isCrossDomain=fc(function(){return f.getTopFrame()!=a.top}),f.getWindow=function(){return a},f},Jd=function(a){var b={},c=1,d=function(){return c++},e=function(c){var e=c[a];if(e)return b[e];var f={nodeKey:e,cacheKey:a};return e=d(),c[a]=e,b[e]=f,f};return{getDataFromNode:e}},Kd=function(a,b,c){var d=function(d,e,f){var g="jsonpburt"+c.generateIDFromTime();a[g]=e;var h=oc(a.document,d),i="?";if(h.search||d.match(/\?/))i="&";b.get(d+i+"jsonp"+"="+g,f)};return d},Ld=function(a,b,c){var d=function(d){var e;return a!=d.major?e=a<d.major:b!=d.minor?e=b<d.minor:c!=d.patch?e=c<d.patch:e=!1,e};return{major:a,minor:b,patch:c,lt:d}};Ld.parse=function(a){var b=a.replace(/^[^0-9]/g,"").split(".");if(b.length!=3)throw"Invalid version string: "+a;return Ld.apply(null,wb(b,parseFloat))};Md=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&c!=="type"&&b.push("    "+c+": "+yd(a[c]));return b.join(",\n")},Nd={scriptTag:function(a){return['<script type="text/javascript">'].concat(a()).concat(["</script>"])},apiPushInvoke:function(a,b,c,d){var e=b.window||"window",f=e+"."+a.global.identifier;return[f+" = "+f+" || [];",f+".push({","  version: '"+a.fullVersion+"',","  invoke: {","    type: '"+c+"',"].concat(d()).concat(["  }","});"])}},Od=function(a,b){var c=b,hostProtocol=a.protocol,d=a.window,e=d.escape,f=d.document,g=d.unescape,h=function(a){return a.childNodes?Lc(a.children||a.childNodes):[]},i=function(a,b,c){var d=function(b){var c=a.match(b);return c?{index:c.index,length:c[0].length}:{index:-1}};for(;;){var e=d(new RegExp("[\\n\\r]?<"+b+"[^>]*>","i")).index,f=d(new RegExp("[\\n\\r]?</"+b+"\\s*>[\\n\\r]?","i"));if(e===-1||f===-1||e>f.index)break;var g=a.substring(e,f.index+f.length);a=a.replace(g,""),c(g)}},j=function(a){var b="";return i(a,"script",function(b){a=a.replace(b,"")}),i(a,"noscript",function(a){b+=a}),b},k=function(a){var b=[],c=0;i(a,"script",function(d){b.push(d),a=a.replace(d,"#{byburt_script}"+c++)}),i(a,"noscript",function(b){a=a.replace(b,"")});for(var d=0;d<b.length;d++)a=Vb(a,"#{byburt_script}"+d,b[d]);return a},l=function(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=typeof d.match=="string"?a.indexOf(d.match)>0:a.match(d.match);if(e){var f=typeof d.transformer=="object"?d.transformer:[d.transformer],g=null;for(var h=0;h<f.length;h++){g=f[h].call(d,a,e);if(typeof g!="undefined"&&g!==null)return g}}}},m=function(a,b){var c=[],d,e=a,f=5;d=e.match(/<scr.{0,7}ipt[^>]*src=(["']?)([^"'> ]+)(\1|>)/i)||e.match(/<scr.{0,7}ipt[^>]*src=(["']?)(.+?)(\1|>)/i);while(d&&--f>0)c.push(d[2]),e=e.replace(d[0],""),d=e.match(/<script[^>]*src=(["']?)([^"'> ]+)(\1|>)/i);var g=[],h;for(var i=0;i<c.length;i++){var j=c[i];if(j){var k=l(j,b);k&&g.push([j,k])}}if(g.length>0){var m=a;for(var n=0;n<g.length;n++)m=Vb(m,g[n][0],g[n][1]);return m}},n=function(a,b,e,f){if(a.match(/burt_noclick/gmi))return null;var g=/^http/.test(b)?"":d.location.protocol,i=function(a,h){h=h||{},!h.noClickUrl&&f.clickUrlPrefix&&(a=f.clickUrlPrefix+(a||""));var i=e.sessionId||f.sessionIdValue,j=c.pageId;return od(d,g+b,a,h,i,j,c.userId,H,e)},j,k,n;if(/ADM_PL.*clk.*External click-tracking here/.test(a)){j=a.match(/ADM_PL.*clk\:([^}]*)/);if(j)return Vb(a,j[1],"'"+i()+"'")}var o=a;if(a.match(/_version/)){var p=/^<script[^>]+><!--_version=10;\/\/--><\/sc[^>]+><script[^>]+><!--_version=11;\/\/ --><\/sc[^>]+><script[^>]+><!--[^<]+MSIE 3[^<]+<IFRAME.*\/\/--><\/scr[^>]+>/i;o=a.replace(p,"")}var q=Jc(d,o);if(q&&(q.length==1||q.length==2&&q[1].tagName=="IMG")&&q[0].tagName=="A"){var r=h(q[0]);if(r.length==1&&r[0].tagName=="IMG"){var s=r[0];try{return Vb(a,new RegExp('href="([^"]*)"',"i"),function(a,b){if(!b.match(/^https?/i))throw"Relative url";return'href="'+i(b)+'"'})}catch(t){return null}}}var u=function(a,b){return function(c,d){var e=a.test(Ub(c));if(e)return c=Vb(c,a,function(){var a=Array.prototype.slice.call(arguments),c=function(b,c){return a[parseFloat(c)]||""},d=(b.before||"").replace(/\$(\d)/,c);return d+=i(b.urlGroup?a[b.urlGroup]:null,b.urlOptions),d+=(b.after||"").replace(/\$(\d)/,c),d}),c}},v=function(a,b){return b.before=(b.before||"")+"window.byburt_click('",b.after="');"+(b.after||""),u(a,b)},w=[{name:"emediate",match:/^http:\/\/ad([0-9]+)\.emediate\.dk\/eas([^\;]*)/,transformer:[u(/(EASClick[0-9]?=)([^\;]*)(\?|\;|$)/,{urlGroup:2,before:"$1",after:"$3"}),u(/\/eas([^\;]*)/,{before:"$1;click=",after:""})]},{name:"doubleclick",match:/^http:\/\/ad([\-a-z\.]*).doubleclick.net(\/[^\/]+)?\/adj\/([^\;]*)/,transformer:[u(/(click[0-9]?=)([^\;]*)(\?|\;|$)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(adj\/.*\??)/,{before:"$1;click0=",after:""})]},{name:"adform",match:/http:\/\/track.adform.net\/adfscript\/\?bn=[0-9]+/,transformer:[u(/(\;click\=)([^;\"\'\>]*)(.*)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(adfscript\/\?bn=[0-9]+)/,{before:"$1;click=",after:""})]},{name:"atdmt",match:/http\:\/\/view.atdmt.com(.+?)/,transformer:[u(/(click=)(.*)$/,{urlGroup:2,before:"$1",after:"",urlOptions:{escapedAmps:!0}}),u(/(view.atdmt.com.+?)(\?)?$/,{before:"$1?click=",after:"",urlOptions:{escapedAmps:!0}})]},{name:"mediaplex alt",match:/http\:\/\/altfarm.mediaplex.com\/ad\/js\/.*mpvc.*/g,transformer:[u(/(mpvc\=)(.+\?)/,{urlGroup:2,before:"$1"})]},{name:"mediaplex ad",match:/http\:\/\/adfarm.mediaplex.com\/ad\/js\/.*mpvc.*/g,transformer:u(/(mpvc\=)/,{before:"$1",urlOptions:{escapes:2}})},{name:"de17a",match:/http:\/\/de17a.com\//,transformer:u(/(\?url=)(.*\.click)/,{urlGroup:2,before:"$1"})},{name:"openx",match:/http:\/\/openx\.bonniertidskrifter\.se\/www\/delivery\/ajs.php.*/g,transformer:u(/(ajs.php[^'\"]*)$/,{before:"$1&amp;ct0=",after:"",urlOptions:{escapeAll:!0}})},{name:"serving-sys",match:/bs\.serving-sys\.com\/BurstingPipe.+?ncu=/mig,transformer:[u(/(ncu=\#\{DOLLAR\}\#\{DOLLAR\})(.+?)(\#\{DOLLAR\}\#\{DOLLAR\})/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapedAmps:!0,escapeAll:!0,escapeClickUrl:!0}}),u(/(ncu=)/,{before:"$1$$",after:"$$",urlOptions:{escapedAmps:!0,escapeAll:!0,escapeClickUrl:!0}})]},{name:"adtech",match:/\/addyn([\/|\|])\d+.\d+\1/,transformer:[u(/(rdclick=)(.+?)(:|$)/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapeClickUrl:!0}}),u(/(.+)($)/,{before:"$1;rdclick=",after:"$2"})]},{name:"advertserve",match:/\.advertserve\./,transformer:[u(/(cturl=)(.*?)($)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(advertserve.+?)($)/,{before:"$1&cturl=",after:"$2"})]},{name:"smart",match:/http\:\/\/ww251\.smartadserver\.com\/call\/pubj\/\d+\/(.)+\/\d+\/[S|M]\/\d+\/\?/,transformer:u(/(.+\?)/,{before:"$1"})}],x=l(a,[{name:"mads",match:/eu2\.madsone\.com/,transformer:[u(/(.*)(http:\/\/eu2\.madsone\.com\/click\/.*\/index.php)(.*)/,{urlGroup:2,before:"$1",after:"$3"})]},{name:"TFSMFlash",type:"other",match:"var TFSMFlash_SWFCLICKVARIABLE",transformer:u(/(var TFSMFlash_SWFCLICKVARIABLE)/,{before:'TFSMFlash_OASCLICK = "',after:'" + encodeURIComponent(TFSMFlash_OASCLICK);\n$1',urlOptions:{escapedAmps:!0}})},{name:"adtoma",type:"other",match:/<a.*onclick\s*\=\s*\"window\.Fusion\.countAdvertEvent\(\d+.*<\/a\>/,transformer:v(/(onclick=")([^\"]*")/,{before:"$1",after:"$2",urlOptions:{noClickUrl:!0}})},{name:"eyewonder",type:"other",match:/\[ewclickthru\]/gmi,transformer:u(/(\[ewclickthru\])/gmi,{after:"$1",urlOptions:{noClickUrl:!0}})},{name:"tradedoubler",match:/anet\.tradedoubler\.com\/anet.+?preurl\((.+?)\)/,transformer:u(/(preurl\()(.+?)(\))/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapeClickUrl:!0}})},{name:"FusionGet",match:"window.Fusion.getAdvertEventUrl",transformer:function(a,b){var c=u(/(window\.Fusion\.getAdvertEventUrl.+?\?url=)/g,{before:"$1",urlOptions:{escapeAll:!0}})(a,b);if(c){var d=m(c,w);return d||c}return null}},{name:"Adtech document write",match:/document.write.+adtech/mig,transformer:[u(/(adtech.+?rdclick=)(.+?)(\"|')/mig,{before:"$1",urlGroup:2,after:"$3"}),u(/(adtech.+?\;grp='\+window.adgroupid\+'\;misc='\+new Date\(\)\.getTime\(\)\+')/mig,{before:"$1;rdclick="})]},{name:"admeta",match:/http:\/\/ai.admeta.com\/adserve\/public/,transformer:[u(/(\?url=)([^&]*)(&)/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapes:2}}),u(/(&urlPrefix=)(.+?\?)(&[^\"]+)/,{urlGroup:2,before:"$1",after:"",urlOptions:{escapedAmps:!0,escapes:1}})]},{name:"doubleclick iframe",match:/<iframe\s+src\=(['"])http:\/\/ad([\-a-z\.]*).doubleclick.net(\/[^\/]+)?\/adi\/([^\;]*)/,transformer:[u(/(click[0-9]?=)([^\;]*)(\?|\;|\"|\'|$)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(adi\/[^\'\"]*\??)([\"\'].+)/,{before:"$1;click0=",after:"$2"})]},{name:"VG flash",match:/swf ?: ?.+?flash\.vg\.no/gm,transformer:function(a,b){return Vb(a,/(flashvars ?: ?")(.+?)(")/,function(a,c,d,e){var f=u(/(clickTAG[0-9]?=)(.+?)(&|$)/gi,{before:"$1",urlGroup:2,after:"$3",urlOptions:{escapeAll:!0}}),g=f(d,b);if(g)return c+g+e})}}]);return x?x:(x=m(a,w),x)},o=function(a){return a===""?!1:a.match(/cheapoQ/)?!1:/\AdPlayTracking\d+langstner/.test(a)?!1:a.match(/biowebb/)?!1:4===(a.match(/document\.write\('<script type="text\/javascript" src="http:\/\/oas-se\.bonnierdigitalservices\.com\/3\/' \+ at_page \+ '\/\d+/g)||[]).length?!1:a.match(/div.+?class=\"at_ad\".+?at_k2a[1-4]/img)?!1:!0},p=function(a){var b,c;return a.currentStyle&&a.currentStyle.width&&a.currentStyle.height?(b=parseInt(a.currentStyle.width,10),c=parseInt(a.currentStyle.height,10)):(b=a.getAttribute("width"),c=a.getAttribute("height")),{width:b,height:c}},q=function(a,b){var c=Jc(d,a);if(c){if(c.length==1&&c[0].tagName=="A"){var e=h(c[0]);if(e.length==1&&e[0].tagName=="IMG"){var f=p(e[0]);if(f.width==1&&f.height==1)return!0}}if(c.length==1&&c[0].tagName=="DIV"&&c[0].className=="byburt_empty")return!0}return/eu2\.madsone\.(com|eu)/.test(a)&&!/\/click/.test(a)?!0:/<script.*navigator\.appversion\.indexof\(\'msie 3\'\).*iframe.*oas_url.*realmedia\/ads\/click_nx\.ads.*(<a.*empty\.gif.*<img.*width=1.*height=1.*)<\/a/i.test(a.replace(/\x0a|\x0d/g,""))||/<a.*?href=\"http:\/\/oas.*?\.gif.*?<img.*?width="*1"*.*?height="*1"*.*?/i.test(a.replace(/\x0a|\x0d/g,""))?!0:null},r=function(a,c,d){if(!c||!d)throw"Params and config required";if(typeof a=="undefined")throw"Must supply an ad tag";var e=!1,f=c.noscriptIgnore?null:j(a);a=k(a);var g,h=q(a);return h?(d.empty=!0,d.clickEnabled=!1):!c.logurl||c.noClick?d.clickEnabled=!1:(g=n(a,c.logurl,d,b),g?d.clickEnabled=!0:(d.clickEnabled=!1,e=!0,b.handleParsefail&&b.handleParsefail(a,c,d,b))),{adaptedTag:g,noscriptPart:f,config:d}};return{adapt:r}},Pd=function(a){var b=function(b,c){if(b&&!/^[A-Za-z0-9]*$/.test(b))throw new Error("Invalid seed-parameter: "+b);var d=b||"";c=c||12;while(d.length<c)d=Math.floor(Math.pow(36,5)*a()).toString(36)+d;var e=d.substring(d.length-c).toUpperCase();if(!/^[A-Z0-9]*$/.test(e))throw new Error("Invalid id generated: "+e);return e},c=function(){var a=new Date,c=Math.floor(a.getTime()/1e3).toString(36).toUpperCase(),d=b("",6),e=c+d;if(!/^[A-Z0-9]*$/.test(e))throw new Error("Invalid id generated from time: "+e);return e};return{generateID:b,generateIDFromTime:c}};Qd=function(){function a(b,c,d){this.pageId=c.generateIDFromTime(),this.userId=d.get(a.userIDIdentifier),this.userId||(this.userId=c.generateIDFromTime()),d.set(a.userIDIdentifier,this.userId),this.referrer=new zd(b,d),this.env=lc(b),this.cookieSupport=!!d.testSet()}return a.userIDIdentifier="richUserId",a}();Rd=function(a,b,c,d,e){var f=[],g=null,h,i=!1,j=function(){q=[],f=[],i=!0};e=e||{};var k=b.maxRequestLength,l=c,m=e.errorCallback||j,n=function(a){b.get(a.url,function(){o(a)})},o=function(a){a.load(),f.length>0?n(f.shift()):g=null},p=function(a){g?f.push(a):n(a)},q=[],r=function(a){a.finishedAt=wc(),a.callback&&a.callback(a)},s=function(){var a=q;q=[],vb(Jb(a,"url"),function(a,b){if(b){var c=b+"?",d=[];vb(a,function(a){d.push({msg:a.fragment,load:function(){r(a)}})});var e=Kb(d,k-c.length,function(a){return a.msg.length+1});vb(e,function(a){p({url:c+wb(a,Yb("msg")).join(";"),load:function(){vb(a,function(a){a.load()})}})})}})},t=function(b){if(i)return;b.enqueuedAt=wc();var c=k-(b.url+"?").length,e=nd(b.kind,b.params);if(e.length>c)throw new Error("Fragment was too large");b.fragment=e,q.push(b);if(q.length>=l)s(),h&&(a.clearTimeout(h),h=null);else if(!h){var f=(d.length==1?d[0]:d.shift())*1e3;h=a.setTimeout(function(){s(),h=null},f)}};return{enqueueMessage:t,disable:j,flush:s}},Sd=function(a){var b=lc(a),c=!1,d=[],e=a.document,f=function(){if(!e.body){setTimeout(f,13);return}for(var a=0;a<d.length;a++)d[a]();d=[]},g=function(){if(e.addEventListener){var b=function(){e.removeEventListener("DOMContentLoaded",b,!1),f()};e.addEventListener("DOMContentLoaded",b,!1),a.addEventListener("load",f,!1)}else if(e.attachEvent){var c=function(){e.readyState==="complete"&&(e.detachEvent("onreadystatechange",c),f())};e.attachEvent("onreadystatechange",c),a.attachEvent("onload",f);var g=!1;try{g=a.frameElement===null}catch(h){}if(e.documentElement.doScroll&&g){var i=function(){if(d.length===0)return;try{e.documentElement.doScroll("left")}catch(a){setTimeout(i,1);return}f()};i()}}},h={ready:!1};g(),h.onDomReady=function(a){e.readyState==="complete"||h.ready?a():d.push(a)},h.onDomReady(function(){h.ready=!0});var i=[];h.loaded=!1;var j=function(){h.loaded=!0;for(var a=0;a<i.length;a++)i[a]()};return b.browser=="msie"?h.onDomReady(j):Gc(a,"load",j),h.onDomLoad=function(a){h.loaded?a():i.push(a)},h},Td=function(){var a=0;return function(b,c,d){var e=function(){var e=[],f=function(a){a&&a.toString&&typeof a.toString=="function"&&(a=a.toString()),e.push(a)},g=function(a){for(var b in a)typeof a[b]!="function"&&f(a[b])},h=function(a,b){vb(b,function(b){var c=a;vb(b,function(a){try{c=c[a]}catch(b){}}),f(c)})};h(b,[["location","href"],["document","referrer"]]);var i=b.navigator;h(i,[["userAgent"],["language"],["product"],["appVersion"],["onLine"],["platform"],["vendor"],["appCodeName"],["cookieEnabled"],["geolocation"],["appName"],["productSub"],["vendorSub"]]),i.plugins&&vb(i.plugins,g),i.mimeTypes&&vb(i.mimeTypes,g),b.screen&&g(b.screen),b.history&&f(b.history.length),b.Math&&f(b.Math.random()),f(d),f(++a),f((new Date).getTimezoneOffset()),f(c),f(G);var j=wc();f(j),f(j-c);var k=e.join("|"),l=bd(ad(k));return l},f;return function(){return f||(f=e()),f.random()}}}(),Ud=function(a,b){var c=lc(a);return{CONST:{configCallbackIdentifier:C,persistentReferrerIdentifier:d,syncCookieIdentifier:p,fullVersion:G,versionString:H,PARAMS:mb},callOnceFactory:dc,CookieJar:uc,eachPair:Bb,each:vb,clamp:nc,browser:c.browser,attachEvent:Gc,detachEvent:Hc,findFlashByObjectCallback:td,paramPresent:pc,getVisibilityForHelmetFactory:Cc,getBoundingBoxForBoxes:zc}},Vd=function(a){return Gc(window,"message",function(b){var c=function(a){var b=document.createElement("a");b.href=a;var c=b.host.split(":")[0];if(!c)return!1;var d=c.split(".").slice(-2).join("."),e=["localhost","burthub.com","burthub.local","burthub.dev","burtcorp.com","richmetrics.com","byburt.com"];return Pb(e,d)!=-1};if(c(b.origin)&&b.data.slice(0,14)==="rich-inject-js"){var d=b.data.slice(15);a.get(d)}}),Gc(window,"load",function(a){window.top.postMessage&&window.top!=window&&window.top&&window.top.postMessage("rich-tracking","*")}),{}},Wd=function(a,b,c,d,e,f,g){var h=a.window,i=h.document,j=ec();j.state=b,j.env=b.env,j.startTime=(new Date).getTime(),j.currentTime=function(){return wc()-j.startTime},j.dictionary=Gd();var k=hb+a.idGenerator.generateID("",12);j.nodeCache=Jd(k),j.getObserver=function(a){var b=j.nodeCache.getDataFromNode(a);return b.observer=b.observer||Id(a,wc)},j.windowObserver=j.getObserver(h),j.frames=j.windowObserver.getFrames(),j.observers=wb(j.frames,j.getObserver),j.ready=c,j.transport=d,j.request=e,j.random=f,j.xFrame=g;var l=vc(a.defaultCookieJar,p,{expires:jb}),m=a.CONST.syncUrl;j.sync=fd(h,a.idGenerator,e,l,{syncUrl:m}),j.burtSyncHooks=ec(),j.onBurtSync=j.burtSyncHooks.register,j.jsonp=Kd(h,e,a.idGenerator),j.interactionObserver=new wd(h),j.activity=Hd(j.windowObserver.getTopFrame(),j.frames,j.currentTime,eb),j.nodeLoader=Ed(h,j.env),j.adNodeFinder=Fd(h,gb,j.nodeLoader.load);var n=Dd(j,a,b,h);return j.ads=[],j.trackers=[],j.pushTracker=function(a,b){(a.type==="ad"||a.type==="rfa")&&j.ads.push(b),j.trackers.push(b)},j.debug=function(){h.console&&h.console.log&&j.register(function(a,b){h.console.log(a,b,ic.stringify(b))})},j.getMessagesOfType=function(a,b){return Db(j.buffer,function(c){if(a===c[0])return b&&b.apply(null,c),!0})},j.getMessagesByType=function(a){var b={};return vb(j.buffer,function(a){var c=a[0];b[c]||(b[c]=[]),b[c].push(a[1])}),b},j.trackerInvoker=function(a){var b={page:!0,ad:!0,event:!0,eventListener:!0,rfa:!0,sync:!0,volatileSync:!0};b[a.type]&&n(a)},j},Xd=function(a,b){b=b||{};var c=b.protocol||"http",d=b.host,e=b.cookieDomain,f=I+(b.trackerArraySuffix?"_"+b.trackerArraySuffix:""),g=a[f],h=function(){var b=g,c=ec();return c.push=c.invoke,c.identifier=f,c.instances={},c.register(function(a){if(nb(a.version))throw"API calls must have version";if(nb(a.invoke))throw"API calls must have invoke";if(nb(a.invoke.type))throw"API calls must have invoke type"}),g=a[f]=c,b};if(!g||Ob(g)){var i=h()||[];vb(i,g.invoke)}var j=g.instances[G];if(!j){j=g.instances[G]=ec(),j.global=g,j.fullVersion=G,j.version=Ld.parse(j.fullVersion),j.versionString=H,g.register(function(a){a.version===G&&j.invoke(a.invoke,a)});var k={},l=function(a){return k[a]||(k[a]=ec()),k[a]};j.registerComponent=function(a,b,c){j[a]||(j[a]=b.call(null,j),c&&c(j[a]),l(a).invoke(j[a],j))},j.get=function(a,b){l(a).register(b)};var m=b.sourceHost||"measure.richmetrics.com",n=b.sslSourceHost||"d3q6px0y2suh5n.cloudfront.net",o=c+"://"+(d||(c==="https"?n:m));j.CONST={protocol:c,agentBaseURL:o,afterAdUrl:o+"/recursive.js",syncUrl:ib,cookieDomain:e,versionIdentifier:b.versionIdentifier},j.window=a,j.getAgentURL=function(){return j.CONST.agentBaseURL+"/agent/rich-v"+j.fullVersion+".js"}}if(!g.latest||(!g.latest.version||!g.latest.version.lt)&&j.version||g.latest.version.lt(j.version))g.latest=j;return j.register(function(a){a.type==="context"&&a.callback(j)}),j},Yd=function(a,b,c,d){var e=a.window,f=lc(e),h=e.escape,i=a.defaultCookieJar,j=a.idGenerator,k=2,l=0,m={rfm:!0,agentVersion:a.fullVersion,noAgent:!0,noscriptIgnore:!0,logurl:c.mediaLogUrl};m=qb(m,d);var o={pageId:b.pageId,userId:b.userId,defaultParams:m,handleParsefail:function(a,b,c,d){if(e.byburt_developmentMode)throw"PARSEFAIL: "+c.sessionId+" "+a}},p=function(a){return qd("span",K,a)},q=function(){return qd("span",L)},r=function(a){return a.replace(/(['"])<\/script>(['"])/g,"$1</scr$1 + $1ipt>$2")},s=function(a){return a},t=function(b,c){return Nd.scriptTag(function(){return Nd.apiPushInvoke(a,b,"ad",function(){var a=[];return a.push(Md(c)),a})}).join("\n")},u=function(a){return(a.match(/class="at_ad"/mg)||[]).length===4&&a.match(/Annonstorget/i)},v=Od(a,o),w=function(d,i,j){try{j=qb(c.getAdConfig(j.placementName),j),i=qb(m,i);if(!j.mediaKey)throw"Must supply a media key (RFM)";if(u(d)){var o=/<div class=\"at_ad\" id=\"([a-z0-9_]+)\"(.+\n)+?.+<\/div>/gm,x=Vb(d,o,function(a,b){var c=qb(j,{placementName:b,noAfterTag:!0});return w(a,i,c)});return x}j.sessionId=j.sessionId||a.idGenerator.generateIDFromTime(),j.adId=j.adId||J+ ++l+"_"+j.sessionId;if(!md(b.userId,j.sample))return d;var y=v.adapt(d,i,j),z=[];return z.push(p(j.adId)),z.push(r(y.adaptedTag||d)),!!j.noAfterTag||!!f.crazyScriptOrder&&!j.empty?z.push(""):z.push(q()),z.push(t(i,y.config)),!j.noAfterTag&&f.crazyScriptOrder&&!j.empty&&(z=z.concat(['<script type="text/javascript">window.'+n+" = { counter: "+M+', url: "'+a.CONST.afterAdUrl+'", callback: function() { if (window.'+g+") { document.write(window."+g+"); window."+g+' = null; } document.write("<span style=\\"display:none;\\" class=\\"'+L+'\\"></span>"); } };</scr'+"ipt>",'<script type="text/javascript" src="'+a.CONST.afterAdUrl+'"></scr'+"ipt>"])),s(z.join("\n"))}catch(A){if(i.raiseErrors||e.byburt_developmentMode)throw A;try{var B={av:k+"-adapt",eu:h(id()),wn:h(j.sitename),ms:h("adapt: "+(A.message?A.message:A))};return a.get("transport",function(a){a.enqueueMessage({kind:"error",params:B,url:i.logurl})}),d}catch(C){return d}}};return w},Zd=function(a,b,c){var d=a.handler.window,e=a.handler.window.document,f=qb(a.config);c=c||{};var g=function(a){return c[a]||"absolute"},h=f.mediaLogUrl,i=function(b){a.handler.global.push({version:G,invoke:b})},j={},k=function(a,b,c){c=c||{};if(!c.empty&&!a)throw"Rich must supply a node";if(j[b])throw"Rich has already started tracking a ad for the placement: "+b;j[b]=a;var d=s(b,{wrapperNode:a});c&&(typeof c=="function"&&(c=c(a)),d=pb(d,c)),i(d)},l=function(a,b){b=b||{};var c=s(a);typeof b=="function"?b(c):c=qb(c,b),i(c)},m=function(a,b){o(null,a,qb({empty:!0},b||{}))},n=function(b,c,e,f){e=e||{},f=f||{},a.onReady(function(){var a=d.document.getElementById(b);if(a)o(a,c,e);else if(typeof f.onNotFound=="function")f.onNotFound(c,e);else{if(f.onNotFound!="empty"){if(f.onNotFound=="discard")return;throw"Rich could not find dom element with id: "+b}m(c,e)}})},o=function(a,b,c){if(!c.empty&&!a.tagName)throw"First argument must be a node";if(!b)throw"Rich you need to supply a placement name";typeof b=="function"&&(b=b(a)),k(a,b,c)},p=function(){vb(arguments,function(a){n(a,a)})},q=function(){var a=0;return function(){return a+=1,"placement_"+a}}(),r=function(a,b){var c=e.write,d=e.writeln,f=[];e.write=function(a){f.push(a)},e.writeln=function(a){f.push(a+"\n")},a(),e.write=c,e.writeln=d;var g=function(a){e.write(a)};b(g,f,f.join(""))};d.jQuery&&(d.jQuery.fn[x]=function(a){d.jQuery.each(this,function(b){o(this,a)})});var s=function(a,b){var c={type:"ad",clickEnabled:!1};return a&&(c.placementName=a,c.placementKind=g(a)),pb({},f,c,b)},t=function(c,e,f){f=f||{};var g=s(c,e);return g.sessionId=b.generateIDFromTime(),g.clickUrl=od(d,f.clickUrl||a.config.mediaLogUrl,"",{},g.sessionId,a.state.pageId,a.state.userId,a.handler.versionString,a.config),g.clickEnabled=!0,g};return{captureWrite:r,trackById:n,track:o,trackPlacements:p,trackPlacement:l,placements:j,mediaLogUrl:h,getAdConfig:s,generateAdConfig:t}};$d=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;if(a.byburt_disable)return;if(a.burt_api&&a.burt_api.site&&b.networkMonitoring)return;return h=lc(a),b.cookieDomain=b.cookieDomain||uc.getTopCookieDomainFromDomain(h.browser,b.siteName,a.document.domain),b.shortName=b.shortName||b.siteName.replace(/\./g,"-"),m=wc(),g={sample:1,mediaLogUrl:"//"+b.shortName+".c.richmetrics.com/log",protocol:"http",cloudKeysByTag:!0},b=qb(g,b),j={protocol:b.protocol,sourceHost:b.sourceHost,sslSourceHost:b.sslSourceHost,cookieDomain:b.cookieDomain},i=Xd(a,j),i.registerComponent("defaultCookieJar",function(){return uc(a,{domain:b.cookieDomain})}),i.registerComponent("request",function(){return Cd(a,cb)}),i.registerComponent("random",function(){return Td(a,m)}),i.registerComponent("idGenerator",function(){return Pd(i.random)}),i.registerComponent("ready",function(){return Sd(a)}),i.registerComponent("injector",function(){return Vd(i.request)}),i.registerComponent("ready",function(){return Sd(a)}),i.registerComponent("lib",function(){return Ud(a,i.request)}),i.registerComponent("transport",function(){return Rd(a,i.request,Z,ab)}),n=new Qd(a,i.idGenerator,i.defaultCookieJar),d=i.agent,i.registerComponent("agent",function(){return Wd(i,n,i.ready,i.transport,i.request,i.random,null)}),d||i.register(i.agent.trackerInvoker),l=function(a){return i.global.push({version:G,invoke:{type:"context",callback:function(b){return b.get("ready",function(b){return b.onDomReady(a)})}}})},o=function(a,c,d){return i.global.push({version:G,invoke:qb(b,{type:"sync",syncType:a,syncConfig:c,syncCallback:d})})},k=function(d){var e,f,g,h,j;if(a.burt_api.site)return;b.networkMonitoring||(a.burt_api.site=i),e={type:"page"},e=qb(b,e,c),i.global.push({version:G,invoke:e});if(b.demographics){j=b.demographics;for(g=0,h=j.length;g<h;g++)f=j[g],o("read",{provider:f})}if(d)return ac(a,function(){return d(bc)})},f=function(c,d){return a.burt_api.push({version:G,invoke:qb(b,{type:"event",data:c,eventCallback:d})})},e=function(a,b){return a.type="conversion",f(a,b)},{handler:i,conversion:e,customEvent:f,config:b,onReady:l,sync:o,initialize:k,state:n}};_d=ac(window,function(){var b,a=window.location.hostname.split(".")[0];if(a!="www")return a;b=window.location.pathname.split("/");if(b.length>=2&&b[1]==="finn")return b[2]===""?"frontpage":b[2];if(b.length>=2)return b[1]===""?"frontpage":b[1]});ae={result:"FINNCKRESZZZ",object:"FINNCKOBJZZZ",map_object:"FINNCKMOBZZZ",image_object:"FINNCKIOBZZZ",searchpage_1:"FINNCKSP1ZZZ",searchpage_adv:"FINNCKSPAZZZ",map_search:"FINNCKMSEZZZ",searchpage_2:"FINNCKSP2ZZZ",frontpage_market:"FINNCKFPMZZZ",searchpage_resultpage_3:"FINNCKSPR3ZZ",searchpage_resultpage_2:"FINNCKSPR2ZZ",searchpage_3:"FINNCKSP3ZZZ",searchpage:"FINNCKSPZZZZ",lead_to_naringmarked:"FINNCKLTNZZZ"},be=function(a){return ae[a]?ae[a]:undefined},ce=function(a){if(!a)return!1;var b=String.prototype.split.call(a+"","/");if(b.length<3)return!1;var c={Resultatside:"result",Objektside:"object",_Kart:"map_object",Bildeside:"image_object",Soekeside_1:"searchpage_1",Avansert_soekeside:"searchpage_adv",Soekeside_2:"searchpage_2",Valg_av_land:"searchpage_1"},d=b[b.length-1];return c[d]?c[d]:!1},de=function(){if(!window.byburt_verticalSection)return!1;var a=ce(window.byburt_verticalSection);if(a)return be(a)}(),ee=$d(window,{mediaKey:"FINNEBDSCTTY",category:_d,siteName:"finn.no",cloudKeys:de?[de]:undefined});ee.initialize(function(){var d,e,f,a=Zd(ee,ee.handler.idGenerator,{Right2:"relative"}),b=Yd(ee.handler,ee.state,a,{}),c={};window.byburt_setFrameElement=function(a){a.searchNodes=[c[a.placementName].contentWindow.document.body]};d="byburt_adtech_callback",e="byburt_defer";window[e]=function(a,b){Sd(c[a.placementName].contentWindow).onDomReady(b)},window[d]=function(a){var b,c,d=a.adNodes;vb(d,function(a){var e,d=sd(a);yb(6,function(){d=window.unescape(d)});e=d.match(/AdId=(\d+).+?BnId=(\d+)/);e&&b===undefined&&c===undefined&&(c=e[1],b=e[2])}),b&&c&&(a.adTagId=c+"_"+b)};f=!1;ee.handler.trackFinnAd=function(a,g){var h={placementName:a.name||"unknown",beforeCallback:"byburt_setFrameElement",configCallback:d,deferCallback:e},i=Wc(a.doc);return i.burt_api=window.burt_api,Gc(i,"unload",function(){Cb(ee.handler.agent.ads,function(b){if(b.config.placementName==a.name&&!b.config.stopped)return b.exposed.stop(),!0})}),c[a.name]=i.frameElement,a.name=="Top"&&!f&&(f=!0,ac(window,function(){var c,d,a=window.FINN.webAds._getBanner("Top").plugin("contextData").keyvalues.split(";").map(function(a){return a.split("=")}),b=Eb(a,function(a,b){return a[b[0]]=b[1],a},{});b.kvuserid&&b.kvuserid!=="0"&&ee.handler.invoke({type:"volatileSync",mediaKey:"FINNEBDSCTTY",siteName:"finn.no",mediaLogUrl:ee.config.mediaLogUrl,syncConfig:{provider:"finn",defaultId:b.kvuserid}});c=window.FINN.webAds._getBanner("Top").plugin("contextData").segments,d=c.split("+");d=Nb(d),vb(d,function(a){ee.handler.invoke({type:"volatileSync",mediaKey:"FINNEBDSCTTY",siteName:"finn.no",mediaLogUrl:ee.config.mediaLogUrl,syncConfig:{provider:"finn_segment",defaultId:a}})})})),b(g,{},h)}})})()
}/*global document, window, jQuery, setTimeout, FINN */
(function(F, $) {
  "use strict";
  F.webAds = F.webAds || {};
  var Banner, Iframe;

  var IFRAME_VERSION = 7;
  var DEFAULTS = {
    RETRIES: 5,
    TIMEOUT: 200,
    MINSIZE: 39,
    ADCONTAINER: 'webAd'
  };

  Iframe = (function(document) {
    function Iframe(name, options) {
      this.name     = name;
      this.options  = options !== null ? options : {};
    }

    Iframe.prototype.remove = function() {
      this.$wrapper.remove();
      return this;
    };

    Iframe.prototype.getUrl = function(src){
      var url     = F.webAds.iframeUrl || '/html/banner/webad.html';
      var sep     = url.indexOf('?') !== -1 ? '&' : '?';
      var refresh = src && src.indexOf('refreshWebAd') === -1 ? 'refreshWebAd=true&' : '';
      return url +  (sep + 'ver=' + IFRAME_VERSION + '&' ) + refresh + "#banner_" + this.name;
    };


    Iframe.prototype.makeIframe = function() {
      var div       = document.createElement('div');
      var innerDiv  = document.createElement('div');
      var i         = document.createElement('iframe');
      innerDiv.className  = 'webad-inner';
      var divClasses = ['webad', 'webad-'+this.name];
      if (this.options.customClasses){
        divClasses.push(this.options.customClasses);
      }
      if (this.options.hidden) {
        divClasses.push('webad-hidden');
        div.style.display = "none";
      }
      if (this.options.sticky && F.webAds.getBannerFlag('disableSticky') !== true) {
        divClasses.push('webad-sticky');
      }
      div.className = (divClasses.join(' ')).toLowerCase();
      i.src        = this.options.remoteUrl||this.getUrl();
      i.scrolling  = 'no';
      i.setAttribute('data-automation-id', this.name);
      i.className  = 'webad-iframe';
      // IE 7-8
      i.marginWidth  = 0;
      i.marginHeight = 0;
      i.frameBorder  = '0';
      i.allowTransparency = 'true';
      //Safari will will not show iframe until scroll with width/height == 0px
      i.width         = this.options.width || 100;
      i.height        = this.options.height || 100;
      i.style.width   = (this.options.width || 100) + 'px';
      i.style.height  = (this.options.height || 100) + 'px';
      i.style.border  = '0px';
      // Wrap iframe inside 2 divs
      innerDiv.appendChild(i);
      div.appendChild(innerDiv);
      // Add reference for selecting injected iframe
      this.$iframe  = $(i);
      this.$wrapper = $(div).data('webad', this.name);
      return this;
    };
    return Iframe;
  })(document);



  Banner = (function() {
    function Banner(params, expose) {
      this.params         = params;
      this.exposeObj      = expose !== null ? expose : {};
      this.name           = this.params.name;
      this.url            = this.params.url;
      this.container      = this.params.container;
      this.adContainer    = this.params.adContainer||DEFAULTS.ADCONTAINER;
      this.minSize        = this.params.minSize||DEFAULTS.MINSIZE;
      this.width          = 0;
      this.height         = 0;
      this.refreshedTimes = 0;
      this.active         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = this.params.timer||DEFAULTS.TIMEOUT;
      this.resolved       = false;
      this.failed         = false;
      this.incomplete     = false;
      this.resized        = false;
      this.notValid       = false;
      this.ignoreOnload   = false;
      this.insertCalled   = false;
      this.responsive     = false;
      this.log(1, 'Banner init. (new Banner({}))');
    }

    Banner.prototype.log = function(level, msg) {
      if (!msg){
        msg   = level;
        level = 1;
      }
      if (this.params.log) this.params.log(this, level, msg);
    };

    Banner.prototype.config = function(key, value) {
      this.log(3, key+' updated');
      key = key.split('.');
      if (key[1] && this[key[0]]){
        this[key[0]][key[1]] = value;
      } else {
        this[key] = value;
      }
      return this;

    };

    
    Banner.prototype.isResponsive = function(height){
      height = height||this.$webAd.height();
      this.log(2, 'checking responsive height:'+ height);
      this.responsive = (height === 225);
      return this.responsive;
    };

    var css = [
      'object, embed, div, img, iframe { display: block; vertical-align:bottom;}',
      'body,html { overflow: hidden; background: transparent; display: inline; }',
      '#webAd {display: inline-block; vertical-align:bottom;}'
    ].join('\n');

    function insertCss(css, doc) {
        doc = doc||document;
        var head = doc.getElementsByTagName('head')[0];
        var style = doc.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(doc.createTextNode(css));
        }

        head.appendChild(style);
    }

    Banner.prototype.onload = function() {
      this.log(2, 'onload triggered on iframe');
      this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);

      if (!this.isResponsive()){
        // inject CSS so sizechecking works
        insertCss(css, this.doc);
      } else {
        this.responsive = true;
      }

      if(this.ignoreOnload === true){
        return this.resolve();
      }
      if (this.params.hidden || this.params.skipSizeCheck) {
        this.log(2, 'HIDDEN ignoreSizeCheck');
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        } else {
          this.resolve();
        }
      } else {
        this.processSize();
      }
      F.webAds.resolveOnload(this.name);
      return this;
    };

    Banner.prototype.isValidSize = function(w, h){
      return (w === null || w <= this.minSize || h === null || h <= this.minSize);
    };

    Banner.prototype.isEmptyPixel = function(){
      return !!($(this).attr('src').match(/.*(1x1|3x3|1x2).*/i));
    };

    Banner.prototype.hasEmptyPixel = function(){
      return (this.$webAd.find('img').filter(this.isEmptyPixel).length > 0);
    };

    Banner.prototype.processSize = function() {
      var w = this.params.staticAvailableWidth||this.$webAd.width();
      var h = this.$webAd.height();
      this.log(2, 'Checking if valid size: '+w+'x'+h);
      if (this.isValidSize(w, h)) {
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        }
        return this.pollForNewSize(w, h);
      }
      this.responsive = this.isResponsive(h);
      this.resizeIfNotDefault(w, h);
      this.resolve();
      return this;
    };

    Banner.prototype.resolve = function() {
      this.log(1, ' resolved as '+ (this.failed ? 'failed' : 'rendered'));
      if (this.params.bodyClass && !this.failed) {
        $("body").addClass(this.params.bodyClass);
      }
      if (this.params.done && typeof this.params.done === 'function') {
        this.params.done(this);
      }
      if (!this.resolved) {
        this.resolved = true;
        this.log(2, 'Calling FINN.webAds.resolve()');
        F.webAds.resolve(this.name);
      }
      // reset
      this.refreshCalled = false;
      return this;
    };

    Banner.prototype.fail = function(reason, dontSetClass) {
      this.log(1, 'Failed:' + reason);
      if (reason == 'timeout' && this.iframe && this.iframe.$iframe){
        var html = this.iframe.$iframe.contents()
          .find('#webAd').html().replace(/</gm, '&lt;').replace(/>/gmi, '&gt;');
        this.log(2, 'html: ' + html);
      }
      if (!dontSetClass && this.iframe && this.iframe.$wrapper) this.iframe.$wrapper.addClass('webad-failed');
      if (this.params.bodyFailClass) {
        $("body").addClass(this.params.bodyFailClass);
      }
      this.failed = true;
      return this.resolve();
    };

    Banner.prototype.pollForNewSize = function(width, height) {
      var banner, cb;
      this.log(2, 'pollForNewSize ' + this.timer + ' retries: ' + this.retries);
      this.timer += this.timer;
      this.retries -= 1;
      banner = this;
      if (this.retries > 0) {
        cb = function() { banner.processSize(); };
        setTimeout(cb, this.timer);
        //console.log(this.name, this.timer);
      } else {
        this.width  = width;
        this.height = height;
        this.fail("timeout");
      }
      return this;
    };

    Banner.prototype.isDefaultSize = function(width, height){
      if (this.resized){ return false; }
      if (this.params.width > 0 && this.params.width === width && this.params.height === height ){
        return true;
      }
    };

    Banner.prototype.resizeIfNotDefault = function(w, h){
      this.width  = w;
      this.height = h;
      if ( !this.isDefaultSize(w, h) ){ this.resize(); }
      return this;
    };

    Banner.prototype.resize = function(w, h) {
      if (typeof w !== 'undefined') this.width = w;
      if (typeof h !== 'undefined') this.height = h;
      var width = this.responsive ? '100%' : this.width;
      this.iframe.$iframe.css({ "height": this.height, "width": width}).attr('height', this.height).attr('width', width);
      this.resized = true;
      //console.log(this.name, 'resize', w, h, this.width, this.height);

      this.log(1, 'resized to height:' + this.height + ' and width:' + this.width);
      return this;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, { banner: this });
    };

    Banner.prototype.injectScript = function(idoc) {
      if (typeof this.params.before === 'function'){
        this.params.before(this);
      }
      this.log(3, 'injectScript');
      this.doc = idoc;
      var ad = '<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>';



      // Only run the tag through 3rd party Burt Tracking if it has been loaded
     if (this.params.trackBurt && window.burt_api && window.burt_api.site && typeof burt_api.site.trackFinnAd === 'function') {
       try {
         var _ad = ad;
         ad = burt_api.site.trackFinnAd(this, ad);
       } catch(err){
         ad = _ad;
       }
      }

      idoc.write(ad);
      return this;
    };

    Banner.prototype.refresh = function() {
      if (this.incomplete){
        this.fail('Cant refresh bacause of not valid config.');
      }
      this.refreshCalled  = true;
      this.resolved       = false;
      if (this.failed && this.iframe && this.iframe.$wrapper){
        this.iframe.$wrapper.removeClass('webad-failed');
      }
      this.failed         = false;
      this.retries        = DEFAULTS.RETRIES;
      this.timer          = this.params.timer||DEFAULTS.TIMEOUT;

      // if iframe is removed, this will throw
      try {
        var url = this.iframe.getUrl(this.doc.location.href);
        this.doc.location.replace(url);
      } catch (err) {
        if (this.active) {
          F.webAds.remove(this.name);
          F.webAds.render(this.name);
        }
      }
      this.refreshedTimes =  this.refreshedTimes + 1;
      return this;
    };

    Banner.prototype.remove = function() {
      this.active   = false;
      this.resolved = false;
      this.iframe.remove();
      return this;
    };

    Banner.prototype.isValid = function(){
      this.log(2, 'Not valid if '+this.params.windowWidth+' is less than '+this.params.threshold);
      if (typeof this.params.threshold !== 'undefined' && this.params.windowWidth <= this.params.threshold){
        return false;
      }
      return true;
    };

    Banner.prototype.getClassName = function(){
      return "webad-" + this.name.toLowerCase();
    };

    Banner.prototype.insert = function() {
      this.insertCalled = true;
      this.log(3, 'Insert()');
      if(!this.isValid()){
        this.notValid = true;
        this.fail('notValid');
        return this;
      }

      if(!this.container){
        this.incomplete = true;
        this.failed     = true;
        this.log(1, 'Missing container '+this.container);
        this.resolve();
        return this;
      }
      if (this.active && this.$webAd && $("."+this.getClassName()).length > 0) {
        this.log(1, 'iframe present in page');
        return this;
      }

      this.incomplete = false;
      this.failed     = false;
      this.resolved   = false;
      this.active     = true;
      var $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      if ($container.size() <= 0) {
        this.fail('Missing valid container on '+this.name, true);
        return this;
      }
      this.log(3, 'Creating and inserting iframe/banner');
      if (!this.iframe){
        this.iframe = new Iframe(this.name, this.params);
      }
      this.iframe.makeIframe();
      $container.data('webads-processed', 'processed');
      this.iframe.$wrapper.appendTo($container);
      return this;
    };

    Banner.prototype.getBannerFlag = function(key){
      return F.webAds.getBannerFlag(key);
    };

    Banner.prototype.setBannerFlag = function(key, value){
      return F.webAds.setBannerFlag(key, value);
    };

    Banner.prototype.plugin = function(name, a, b, c){
      var plugin = F.webAds.getPlugin(name);
      if (!plugin){ return plugin; }
      plugin.called[this.name] = plugin.called[this.name] ? plugin.called[this.name] + 1 : 1;
      return plugin.run.apply(plugin, [this, a, b, c]);
    };

    return Banner;
  })();

  F.webAds.Banner = Banner;
  F.webAds.Iframe = Iframe;

}).call(this, FINN, jQuery);
var FINN = FINN || {};

(function(F, $) {
  "use strict";

  FINN.webAds = FINN.webAds || {};
  FINN.data   = FINN.data   || {};

  FINN.webAds.extend = function(obj){
    if (typeof FINN.data.defaultConfig === 'undefined') {
      FINN.data.defaultConfig = obj;
    } else {
      $.each(obj, function(k,v){ FINN.data.defaultConfig[k] = $.extend(FINN.data.defaultConfig[k]||{}, v); });
    }
  };

  function fixTopPosition(banner) {
    banner.log(2, "cb fixTopPosition");
    if (banner.responsive === true){
      banner.$webAd.css({'display':'block', 'width':'100%'});
      banner.iframe.$wrapper.css({'width': '100%'});
      $('#banners').css({'max-width': '100%'});
      return;
    }
    if (banner.failed === true){
      return;
    }
    var width           = banner.width;
    var isSmallBanner   = width <= 768;
    var isNotCompanion  = width >= 800 && width < 992;
    var isDominant      = width > 992;

    if (banner.params.bodyFailClass) {
      $("body").removeClass(banner.params.bodyFailClass);
    }
    if (isSmallBanner || isNotCompanion) {
      banner.iframe.$wrapper.css("width", "980px");
    } else if (isDominant) {
      banner.setBannerFlag('disableSticky', true);
      banner.iframe.$wrapper.css("margin-left", "-12px");
    }
  }

  function fixLeftPosition(banner) {
    banner.log(2, "cb fixLeftBanner");
    if (!banner.failed && banner.width > 50) {
      banner.iframe.$wrapper.css("left", (-(banner.width + 12)) + "px");
    }
  }

  function fixWallpaper(banner) {
    banner.log(2, "cb fixWallpaper");
    if (banner.failed === true){ return;}
    var bgImage = banner.iframe.$iframe.contents().find("img");
    if (bgImage.size() > 0 && bgImage.width() !== 1) {
      var src = bgImage.attr("src");
      if (src !== "" && src.indexOf("empty.gif") === -1) {
        var css = {
          "background": " transparent url(\"" + src + "\") 50% 0% no-repeat",
          "background-attachment": "fixed"
        };
        $("body").css(css).addClass("has-dominant-wallpaper");
      }
    }
  }

  function addCloseButton(banner){
    banner.iframe.$wrapper.append('<button class=dismiss-sticky>X</button>');
    banner.iframe.$wrapper.on("click", '.dismiss-sticky', function(){
      banner.iframe.$wrapper.remove();
    });
  }

  function setMaxWidth(banner){
    if (banner.params.width){
      var $container = typeof banner.container === 'string' ? jQuery("#" + banner.container) : banner.container;
      var availWidth = banner.params.windowWidth - (banner.iframe.$wrapper.position().left + $container.position().left);
      banner.params.staticAvailableWidth = (availWidth-10) > banner.params.width ? (availWidth-10) : banner.params.width;
    }
  }

  FINN.webAds.extend({
    "Top": {
      "extends": "normal",
      width: 992,
      threshold: 769,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition,
      trackBurt: true
    },
    "Top_ipad": {
      "extends": "normal",
      width: 986,
      threshold: 769,
      height: 150,
      bodyFailClass: "top-position-collapsed",
      done: fixTopPosition,
      trackBurt: true
    },
    "Left1": {
      "extends": "normal",
      width: 240,
      threshold: 1050,
      height: 500,
      bodyClass: "has-dominant-campaign",
      done: fixLeftPosition,
      trackBurt: true
    },
    "Right1": {
      "extends": "normal",
      width: 240,
      threshold: 1025,
      trackBurt: true
    },
    "Right2": {
      "extends": "normal",
      threshold: 1025,
      sticky: true,
      width: 240,
      height: 500,
      before: setMaxWidth,
      trackBurt: true
    },
    "Right3": {
      threshold: 1025,
      "extends": "normal",
      width: 240,
      trackBurt: true
    },
    "Middle": {
      "extends": "normal",
      width: 580,
      height: 400,
      threshold: 291,
      container: "banners-middle",
      trackBurt: true
    },
    "Middle_ipad": {
      "extends": "normal",
      width: 580,
      height: 400,
      threshold: 291,
      container: "banners-middle",
      trackBurt: true
    },
    "Wallpaper": {
      "extends": "normal",
      hidden: true,
      threshold: 1050,
      done: fixWallpaper
    },
    "Survey": {
      "extends": "normal",
      hidden: true,
      done: $.noop
    },
    "Survey_ipad": {
      "extends": "normal",
      hidden: true,
      done: $.noop
    },
    "Inline1": {
      width: 320,
      container: "banners-inline1"
    },
    "Inline2": {
      width: 320,
      container: "banners-inline2"
    },
    "BottomLeft": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomLeft_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomMiddle": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomMiddle_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight2": {
      "extends": "bottomads",
      trackBurt: true
    },
    "BottomRight2_ipad": {
      "extends": "bottomads",
      trackBurt: true
    },
    "bottomads": {
      container: "banners-bottom"
    },
    "MobileBottom" : {
      width: 320,
      "extends": "normal",
      done: addCloseButton
    },
    "normal": {
      container : "banners"
    },
    "Bildekarusell": {
      width: 500,
      height: 320
    },
    "all": {
      backend   : "helios"
    }
  });

})(FINN, jQuery);var FINN=FINN||{};

(function(F, $){
  
  F.webAds = F.webAds||{};
  
  var MARGIN  = 10;
  var TIMER   = 15;
  
  function getBannersForHeight(list, height){
    var currPos       = MARGIN;
    var toBeRendered  = [];
    var stilSearch    = true;
    var fold          = 0;
    var b;
    var maxWidth = 0;

    // Search for position from bottom and up, and collect fold
    for(var i = list.length, g = i -1; i > 0; i--, g--){
      b = list[g];
      if (b.width > maxWidth) maxWidth = b.width;
      // check if height will outgrow avail window height
      if (stilSearch && (b.height + currPos + (MARGIN*toBeRendered.length)) <= height){
        toBeRendered.push(b);
        currPos   += (b.height + MARGIN);
      } else {
        stilSearch = false;
        fold      += (b.height + MARGIN);
      }
    }
    
    // Iterate positions to be rendered and set position from top when in sticky mode
    var currPosFromTop = MARGIN;
    for(i = toBeRendered.length, g = i -1; i > 0; i--, g--){
      b = toBeRendered[g];
      b.stickyPos = currPosFromTop + 0;
      currPosFromTop += b.height + MARGIN;      
    }
    
    return {
      alwaysSticky  : toBeRendered.length > 0 && toBeRendered.length === list.length,
      fold          : fold,
      sticky        : toBeRendered,
      maxWidth      : maxWidth
    };
  }
  
  var isSticky = false;
  function setSticky(list){
    if(isSticky) return true;
    isSticky = true;
    $.each(list, function(){
      this.log('activating sticky');
      this.iframe.$wrapper.addClass('webad-multiple-sticky').css({
        'position'  : 'fixed',
        'top'       : this.stickyPos + "px",
        'z-index' : '1'
      });
    });
    FINN.webAds.triggerEvent('webads-stickied', [list]);
  }
  
  function unsetSticky(list){
    if(!isSticky) return true;    
    isSticky = false;
    $.each(list, function(){
      this.log('de-activating sticky');      
      this.iframe.$wrapper.removeClass('webad-multiple-sticky').css({
        position  : 'static',
        top       : ''
      });
    });
  }
  
  F.webAds.sticky = function(elemId, pageSelector){
    var $elem =  $('#'+elemId);
    if ($elem.size() === 0) return false;
    var $webAds = $elem.find('.webad');
    if ($webAds.size() === 0) return false;

    var list    = $webAds.map(function(){
      return F.webAds._getBanner($(this).data('webad'));
    });
    var $win    = $(window);
    var result  = getBannersForHeight(list, $win.height());    
    
    function checker(){
      var current = $win.scrollTop();
      if (current >= result.fold){
        setSticky(result.sticky);
      } else {
        unsetSticky(result.sticky);        
      }      
    }
    
    if (pageSelector){
      var contentAndBanners = $(pageSelector).outerWidth() + (result.maxWidth / 2 );
      var isNoRoom = $win.width() <= contentAndBanners;
      if (isNoRoom){ return false; }
    }

    if (result.alwaysSticky) {
      checker();
    } else if (result.sticky.length > 0){
      var scrollTimer;
      // check if currently scrolled past fold;
      checker();

      $win.bind("scroll", function() {
        clearInterval(scrollTimer);
        scrollTimer = setTimeout(checker, TIMER);
      });
    }    
  };
    
})(FINN, jQuery);var FINN = FINN||{};

(function(F, $){
  var data          = F.data = F.data||{};
  var defaultConfig = data.defaultConfig = data.defaultConfig||{};
  var logger;
  var loggerConfig  = function(){
    if (logger) return logger;
    if (!FINN.webAds||!FINN.webAds.logger) return {log:function(){}};
    logger = FINN.webAds.logger('FINN WebAds');
    return logger;
  };

  // exports
  F.webAds = F.webAds||{};
  var w = F.webAds;
  w.renderContext         = renderContext;
  w.queue                 = queue;
  w.render                = render;
  w.renderAll             = renderAll;
  w.renderLazy            = renderLazy;
  w.expose                = expose;
  w.refresh               = refresh;
  w.refreshAll            = refreshAll;
  w.updateUrls            = updateUrls;
  w.remove                = remove;
  w.resolve               = resolve;
  w.resolveOnload         = resolveOnload;
  w.collectDataPositions  = collectDataPositions;
  w.config                = config;
  w.getFromServer         = getFromServer;
  w.cleanUp               = cleanUp;
  w.base                  = "/";

  w.getBannerFlag         = getBannerFlag;
  w.setBannerFlag         = setBannerFlag;
  w._length               = bannerMapLength;
  w._getBanner            = getBanner;
  w.defaultReady          = defaultReady;

  w.on = on;
  w.one = one;
  w.triggerEvent = triggerEvent;
  function on(key, callback){
    return $(document).on(key, callback);
  }

  function one(key, callback){
    return $(document).one(key, callback);
  }

  function defaultReady(){
    // Load banners
    FINN.webAds.queue(FINN.data.banners);
    // collect data
    FINN.webAds.collectDataPositions();
    FINN.webAds.renderAll('Top,Left1,Right2');
  }

  function triggerEvent(name, arg1){
    $(document).trigger(name.toLowerCase(), arg1);
  }

  var globalExpose = {
    _jQuery   : jQuery,
    inDapIf   : true,
    inFIF     : undefined,
    webAds    : w,
    helios_parameters : "", //TODO: remove this
    tf_recordClickToUrl: window.tf_recordClickToUrl
  };

  var bannerMap   = {};
  var bannerFlags = {};
  var callbacks   = {};
  var configMap   = {};
  var onloadCallbacks = {};

  function cleanUp(){
    bannerMap   = {};
    bannerFlags = {};
    callbacks   = {};
    configMap   = {};
    onloadCallbacks = {};
  }

  function getBanner(name){
    return bannerMap[name];
  }

  function getBannerFlag(key){
    return (bannerFlags[key]||null);
  }

  function setBannerFlag(key, value){
    if(!key) return null;
    return (bannerFlags[key] = value);
  }

  function bannerMapLength(){
    var i = 0;
    for(var g in bannerMap){i++;}
    return i;
  }

  function config(name, key, value){
    configMap[name]       = configMap[name]||{};
    var keys = key.split('.');
    if (keys[1]){
      configMap[name][keys[1]]  = value;
    } else {
      configMap[name][key]  = value;
    }


    if(bannerMap[name]){
      bannerMap[name].config(key, value);
    }
  }

  function updateUrls(urlMap){
    for(var key in urlMap){
      if (bannerMap[key]){
        bannerMap[key].url = urlMap[key];
      } else {
        queue({name: key, url: urlMap[key]});
      }
    }
  }

  function getFromServer(url, callback, dontQueue){
    var firstArgIsUsed = (typeof url === 'function');
    dontQueue   = firstArgIsUsed ? callback     : dontQueue;
    callback    = firstArgIsUsed ? url          : callback;
    url         = firstArgIsUsed ? '/heliosAds' : url ||'/heliosAds';

    $.getJSON(url, function(data){
      if (typeof dontQueue === 'undefined') { queue(data.webAds); }
      if (typeof callback == 'function') callback(null, data);
    }, function(err){
      if (typeof callback == 'function') callback(err, null);
    });
  }

  var windowWidth;
  function createConfig(obj){
    var extending = (defaultConfig[obj.name] && defaultConfig[obj.name]["extends"]);
    var defaults =  extending ? defaultConfig[extending] : null;
    return $.extend({
        windowWidth: windowWidth ? windowWidth : windowWidth = $(window).width()
      },
      loggerConfig(),
      defaults,
      defaultConfig.all,
      defaultConfig [obj.name],
      configMap     [obj.name],
      obj);
  }

  function addToMap(){
    var config = createConfig(this);
    var banner = new F.webAds.Banner(config, globalExpose);
    return (bannerMap[this.name] = banner);
  }

  function insertCallback(name, callback, list){
    list = list||callbacks;
    if (typeof callback === 'function'){
      if (list[name] && $.isArray(list[name])){
        list[name].push(callback);
      } else {
        list[name] = [callback];
      }
    }
  }

  function render(name, callback, force){
    var secondIsFn = typeof callback === 'function';
    force     = secondIsFn ? force : callback;
    callback  = secondIsFn ? callback : force;

    var banner = bannerMap[name];
    if (!banner){
      var error = new Error('Banner '+name+' not queued');
      if (callback && typeof callback === 'function') {
        callback(error, null);
      } else {
        resolveOnload(name, error);
      }
    } else if (!force && banner.active){
      banner.log(1, 'banner is active');
      if (callback && typeof callback === 'function') {
        if (banner.resolved) {
          banner.log(2, 'is resolved, calling callback direct');
          callback(null, banner);
        } else {
          banner.log(2, 'deferring callback');
          insertCallback(name, callback);
        }
      }
      return banner;
    } else {
      banner.insert();
      insertCallback(name, callback);
      return banner;
    }
  }

  function collectDataPositions(selector){
    selector = selector||"body";
    $(selector).find("div[data-webad-position]").each(function(){
      var $this = $(this);
      if ($this.data('webads') && $this.data('webads') !== 'lazy') {
        config($this.data('webad-position'), 'container', $this);
      }
    });
  }

  function resolveOnload(name, error){
    if (onloadCallbacks[name] && onloadCallbacks[name].length > 0){
      $.each(onloadCallbacks[name], function(){
        if (typeof this === 'function') {
          if (error){
            this(error, null);
          } else {
            this(null, bannerMap[name]);
          }
        }
      });
      onloadCallbacks[name] = null;
    }
    //triggerEvent('webad-onload-'+name, bannerMap[name]);
    //triggerEvent('webad-onload', bannerMap[name]);
  }

  function resolve(name){
    resolveOnload(name);
    if (callbacks[name] && callbacks[name].length > 0){
      $.each(callbacks[name], function(){
        if (typeof this === 'function') this(null, bannerMap[name]);
      });
      callbacks[name] = null;
    }
    triggerEvent('webad-resolved-'+name, bannerMap[name]);
    triggerEvent('webad-resolved', bannerMap[name]);
    resolveAll();
  }

  function resolveAll(){
    var allResolved = true;
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];
      if (banner.resolved !== true && banner.incomplete !== true){
        allResolved = false;
        break;
      }
    }
    if (allResolved){
      var callbacksToCall = callbacks.all; // copy out the callbacks
      callbacks.all = null; // reset map
      if (callbacksToCall && callbacksToCall.length > 0){
        $.each(callbacksToCall, function(){
          if (typeof this === 'function') {
            this(null, bannerMap);
          }
        });
      }
      triggerEvent('all-webads-resolved', bannerMap);
      loggerConfig().log({name: 'WEBADS'}, 1, 'All webAds processed.');
      return true;
    } else {
      return false;
    }
  }

  function renderUntouched(){
    var banner;
    for(var key in bannerMap){
      banner = bannerMap[key];
      if (banner.insertCalled === false){
        banner.insert();
      }
    }
  }

  function renderAll(commaList, callback){
    var swapArgs = commaList && typeof commaList === 'function';
    callback          = swapArgs ? commaList : callback;
    commaList         = swapArgs ? "Top" : (commaList||"Top");

    var priorityList  = commaList.split(',');
    function loop(){
      var name;
      if (priorityList.length <= 0){
        renderUntouched();
      } else {
        name = priorityList.shift();
        insertCallback(name, loop, onloadCallbacks);
        render(name);
      }
    }
    if (callback && typeof callback === 'function') insertCallback('all', callback);
    loop();
  }

  function renderLazy(parent, callback){
    $(parent).find('div[data-webads="lazy"]').attr('data-webads', 'true').data('webads', 'true');
    if (callback && typeof callback === 'function') insertCallback('all', callback);
    renderContext(parent, true);
  }

  function queue(obj){
    if ($.isArray(obj)){
      loggerConfig().log({name: 'WEBADS'},2, 'Queued '+obj.length+' positions');
      $.each(obj, addToMap);
    } else {
      loggerConfig().log({name: 'WEBADS'},2, 'Queued '+obj.name+'.');
      return addToMap.call(obj);
    }
  }

  function refresh(name, cb){
    var banner = bannerMap[name];
    // DO NOT render if banner is either incomplete or notvalid
    if (banner && !(banner.notValid === true || banner.incomplete === true)){
        banner.refresh();
        // .refresh command resets banner.resolved
        if (cb && typeof cb === 'function'){
          insertCallback(name, cb);
        }
    } else {
      if (banner) banner.log(1, 'Banner is ' + (banner.notValid ? ' out of threshold/notvalid' : ' incomplete') + ' and cannot be refreshed');
      if (cb && typeof cb === 'function'){
          cb();
      }
    }    
  }

  function refreshAll(commaList, callback){
    commaList         = commaList && typeof commaList === 'function' ? "Top" : (commaList||"Top");
    callback          = commaList && typeof commaList === 'function' ? commaList : callback;
    var priorityList  = commaList.split(',');
    var alreadyRendered = [];
    function shouldRefresh(key){
      var res = true;
      $.each(alreadyRendered, function(i,val){
        if (val == key){ return (res = false); }
      });
      return res;
    }

    function loop(){
      if (priorityList.length <= 0){
        for(var key in bannerMap){
          if (shouldRefresh(key)){
            refresh(key);
          }
        }
      } else {
        var name = priorityList.shift();
        alreadyRendered.push(name);
        refresh(name, loop);
      }
    }
    if (callback && typeof callback === 'function') insertCallback('all', callback);
    loop();
  }

  function remove(name){
    return bannerMap[name] && bannerMap[name].remove();
  }

//  function removeAll(){
//    for(var key in bannerMap){
//      if (bannerMap[key]) bannerMap[key].remove();
//    }
//  }

  function renderContext(selector, force){
    collectDataPositions(selector);

    $(selector).find("div[data-webads='true']").filter(function(){
      return (force === true ? true : $(this).data('webads-processed') !== 'processed');
    }).each(function(){
      var $this = $(this);
      $this.data('webads-processed', 'processed');
      var position = $this.data('webad-position');
      var id       = $this.attr('id');
      if (position){
        render(position, force);
      } else if (id) {
        renderAdsWithContainer(id, force);
      }
    });
  }

  function renderAdsWithContainer(container, force){
    for(var key in bannerMap){
      if (container === bannerMap[key].container){
        render(key, force);
      }
    }
  }

  function expose(idocument, iwindow){
    var name = idocument.location.hash.substring(8);
    var list = bannerMap[name].expose();
    $.each(list, function(k){ iwindow[k] = this; });
  }

})(FINN, jQuery);var FINN = FINN||{};

(function(F, $){
  "use strict";
  F.webAds = F.webAds||{};

  var plugins = {};
  F.webAds.registerPlugin = function(name, plug){
    if (typeof plug.init == 'function'){
      plug.init.call(plug);
    }
    plug.called = {};
    plugins[name] = plug;
  };

  F.webAds.getPlugin = function(name){
    return ((plugins[name] && plugins[name].run) ? plugins[name] : null);
  };

  F.webAds.registerPlugin('survey', {
    run: function(banner, options, callback){
      var daysForCookieToLive = 21;
      var percentageToHit     = options.percent;
      var cookieName          = options.surveyName||'qbFINN';
      var cookie              = getCookie(cookieName);


      function setExpDate(daysToLive) {
        var today = new Date();
        var expire = new Date(today.getTime() + daysToLive * 24 * 60 * 60 * 1000);
        expire = expire.toGMTString();
        return expire;
      }

      function setCookie(cookieName, cookieValue, daysToLive) {
        var cookieLife = setExpDate(daysToLive);
        document.cookie = cookieName + "=" + cookieValue + "; expires=" + cookieLife + "; domain=.finn.no; path=/";
      }

      function getCookie(name) {
        var currentCookie = document.cookie;
        var index = currentCookie.indexOf(name + "=");
        if (index == -1) return null;
        index = currentCookie.indexOf("=", index) + 1; // first character
        var endstr = currentCookie.indexOf(";", index);
        if (endstr == -1) endstr = currentCookie.length; // last character
        return unescape(currentCookie.substring(index, endstr));
      }

      function isValid() {
        var popRandom = (100 * Math.random());
        return  ((popRandom + percentageToHit) > 100) && !(cookie);
      }

      if (isValid()) {
        var newCookieValue = cookie ? cookie + 1 : 1;
        setCookie(cookieName, newCookieValue, daysForCookieToLive);
        //display questback
        banner.plugin('overlayOld', options);
      }

    }
  });

  /* parameters made available for third party networks */
  F.webAds.registerPlugin('contextData', {
    run: function(banner, callback){
      if (typeof callback === 'function'){
        callback(FINN.data.banner);
      } else {
        return FINN.data.banner;
      }
    }
  });

  F.webAds.registerPlugin('getAdData', {
    init : function(){
      this.dataUrl = "finn/advertising/banner/api/adinbannerdemo.json";
    },
    run: function(banner, options, callback) {
      try {
        options = $.parseJSON(options);
      } catch(e){
        return handleResult({
          "error":true,
          "message":"first plugin argument/options hash is not valid JSON"
        });
      }
      var params = { 'BANNER_ORGGROUPREF' : options.customer, 'BANNER_AREAID' : options.area, 'T' : (new Date).getTime()};
      var req    = $.getJSON(FINN.webAds.base + this.dataUrl, params);
      req.success(function(list){
        handleResult({'list': list});
      });
      req.error(  function(){
        handleResult({"error":true, "message": "request to server failed"});
      });

      function handleResult(obj){
        //console.log('Passing to flash=>', obj, typeof obj);
        if (typeof callback === 'string'){
          var flash         = banner.$webAd.find("embed").first().get()[0];
          if (!flash) flash = banner.$webAd.find("object").first().get()[0];
          if (flash){
            try {
              flash[callback](obj);
            } catch(e){
              if (console && console.log) console.log(e, callback, obj);
            }
          }
        } else if (typeof callback === 'function'){
          callback(obj);
        }
      }
    }
  });

  /* overlay with iframe content, or wrap ad iframe*/
  F.webAds.registerPlugin('overlayOld', {
    run: function(banner, options, callback){
      var w = options.width||'80%';
      var h = options.height||'400px';

      FINN.user.dialog.box({
        content: (options.url ? '<iframe style="width:'+w+';height:'+h+'" src="'+options.url+'"/>' : options.content)
      });
    }
  });

  F.webAds.registerPlugin('overlay', {
    getOrginElement: function(banner, s){
      var res;
      if (typeof s === 'string'){
        if (s === 'self'){
          res = banner.iframe.$wrapper;
        } else if (F.webAds._getBanner(s)) {
          res = F.webAds._getBanner(s).iframe.$wrapper;
        }
      } else {
        res = $(s);
      }
      return res;
    },
    run: function(banner, options, callback){
      var defaults = {
        width: 100,
        height: 100,
        modal: false,
        position: 'top left', // 'vertical horisontal'
        positionAgainst: 'self', // 'Top,Right1,Right' 'self'
        url: 'http://www.finn.no/finn/'
      };

      var name = 'overlayad'+banner.name;
      // Check if already loaded
      if ($(".webad-"+name.toLowerCase()).size() > 0){
        if (typeof callback === 'function') callback();
        return true;
      }

      options = $.extend({}, defaults, options);
      var sep = options.url.indexOf('?') != -1 ? '&' : '?';
      var remoteUrl = options.url + sep + 'width=' + options.width + '&height=' + options.height;
      var iframe = new F.webAds.Iframe(name, {
        remoteUrl: remoteUrl,
        width: options.width,
        height: options.height
      });
      iframe.makeIframe();
      iframe.$wrapper.appendTo('body');


      // position
      iframe.$wrapper.css({position: 'absolute', 'z-index': '101'}).position({
        my: 'right top',
        of: this.getOrginElement(banner, options.positionAgainst),
        at: 'left top',
        collision: 'none'
      });

      if (options.modal){
        options.modal = $("<div></div>").css({
          width: $(document).width(),
          height: $(document).height(),
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'white',
          opacity: '0.5',
          'z-index': '100'
        }).appendTo('body');
      }

      function remove(){
        $(window).off('keydown.'+banner.name);
        $("html").off('click.'+banner.name);
        if (options.modal){
          options.modal.remove();
        }
        iframe.remove();
      }

      $(window).on('keydown.'+banner.name, function(e){
        if (e.which === 27){
          remove();
        }
      });

      $("html").on('click.'+banner.name, function(e){
        remove();
      });



      if (typeof callback === 'function') {
        callback(function(){ remove(); });
      }  
      return true;

    }
  })


})(FINN, jQuery);