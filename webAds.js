(function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,_b,ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,a=function(a){try{for(var b=1;arguments[b];b++){var c=arguments[b];a=a[c]}return typeof a!="undefined"}catch(d){return!1}},b=function(){if(!a(document,"documentElement","getBoundingClientRect"))return;if(!window.setTimeout)return;if(a(window,"location","search")&&window.location.search&&window.location.search.indexOf("fb_xd_fragment")!=-1)return;return!0};"use strict";if(!b()){if(window.byburt_developmentMode)throw"Not compatible";return}c="byburt_placementToId",d="byburt_persistentReferer",e="byburt_click",f="byburt_write",g="byburt_afterAdCloserScript",h="byburt_pushWrite",i="byburt_popWrite",j="byburt_documentWritten",k="byburt_documentWrite",l="byburt_placementName",m="byburt_permanentDocumentWrite",n="byburt_recursiveScript",o="byburt_pixel",p="richUserId",q="richSync",r="byburt_adtags",s="byburt_adapt",t="byburt_onmessage",u="byburt_messagebuffer",v="byburt_addMessageListener",w="byburt_sizzle",x="byburt_agentLoad",y="startRichAuto",z="trackRichPlacement",A="byburt_auto",B="byburt_disable",C="byburt_syncCallback",D="byburt_random",E="byburt_configCallback",F=2,G=0,H=9,I=[F,G,H].join("."),J="w"+I+"-JS",K="burt_api",L="byburt_pageid",M="byburt_adid_",N="byburt_before_adtag",O="byburt_after_adtag",P=10,Q=36,R=9,S=22,T="@@@BURT_CLICK@@@",U="@@@BURT_SI@@@",V="@@@BURT_STR_PLUS@@@",W="byburt_visibilityHandler",X=5,Y=40,Z=[1,2,4,8,15,20,25,30,90],$=1e3,_=5,ab=10,bb=[1,1,2,4,6,8,10],cb=1,db=45e3,eb=300,fb=[15,15,30,30],gb="burt",hb=["IMG","OBJECT","IFRAME","EMBED"],ib="burt_"+I+"_",jb="https://sync.richmetrics.com/",kb=1,lb=[/x.com/],mb=["av","ct","mk","pi","rk","sn","ui","wn"],nb={click:["av","mk","pi","rk","si","ui","wn"],page:mb.concat(["ar","ca","co","cp","eu","ln","lr","pd","rf","sd","sr","tz","wd","ws"]),exposure:mb.concat(["ad","an","ap","ce","ep","lu","mt","nc","pd","pk","pn","sg","si","ti","tn","vz","wu","nz","vn"]),ping:mb.concat(["ad","ap","pd","si","vz","wd","ws","nz"]),pageping:mb.concat(["sis","pd","wd","ws"]),event:mb.concat(["ad","ap","cl","mp","pd","si","ty","vl","vz","wd","ws","nz"]),activity:mb.concat(["sis","pd","ty","vl","wd","ws"]),error:mb.concat(["ms","md","eu","si","rf"]),sync:mb.concat(["ei","fs","sis","ss","pr"]),rfa_sync:mb.concat(["ei","fs","si","ss","pr"]),customevent:mb.concat(["ac","cc","lb","cv"]),end:mb.concat(["sis","et"])};nb.rfa_exposure=nb.exposure.concat(["co","eu","ln","lr","pd","sa","sd","sr","tz","wd","ws"]);ob=function(a){return typeof a=="undefined"},pb=function(a){return Object.prototype.toString.call(a)},qb=function(){var a=arguments[0]||{},b=1,c=arguments.length,d=!1,e,f,g,h;typeof a=="boolean"&&(d=a,a=arguments[1]||{},b=2),typeof a!="object"&&typeof a=="function"&&(a={});for(;b<c;b++)if((e=arguments[b])!==null)for(f in e){g=a[f],h=e[f];if(a===h)continue;h!==undefined&&(a[f]=h)}return a},rb=function(){return qb.apply(null,[{}].concat(Array.prototype.slice.call(arguments)))},sb=function(a){return a.replace(/^\s+|\s+$/g,"")},tb=function(a){return a?a.replace(/\$/g,"#{DOLLAR}"):""},ub=function(a,b,c){var d=c;return a=tb(a),typeof c=="string"?d=tb(c):typeof c=="function"&&(d=function(){return tb(c.apply({},arguments))}),typeof b=="string"&&(b=tb(b)),a=a.replace(b,d),a=a.replace(/\#\{DOLLAR\}/g,"$"),a},vb=Array.prototype.forEach,wb=Array.prototype.map,xb={},yb=function(a){return a.slice().reverse()},zb=function(a,b,c){if(!a)return;if(vb&&a.forEach===vb)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,e=a.length;d<e;d++)if(d in a&&b.call(c,a[d],d,a)===xb)return}else for(var f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)===xb)return},Ab=function(a,b,c){var d=[];return a?wb&&a.map===wb?a.map(b,c):(zb(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),a.length===+a.length&&(d.length=a.length),d):d},Bb=function(a){var b=pb(a),c=a.length;return Rb(a)||c===c>>>0},Cb=function(a,b){for(var c=0;c<a;c++)if(b(c))break},Db=function(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c))return!0;return!1},Eb=function(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a},Fb=function(a,b){var c;if(Bb(a))for(var d=0;d<a.length;d++){c=b(a[d]);if(c)return c}else for(var e in a)if(a.hasOwnProperty(e)){c=b(e,a[e]);if(c)return c}},Gb=function(a,b){var c=[];return zb(a,function(a){b(a)&&c.push(a)}),c},Hb=function(a,b,c){var d=typeof c=="undefined"?a[0]:c;for(var e=typeof c=="undefined"?1:0;e<a.length;e++)d=b(d,a[e]);return d},Ib=function(a){return Hb(a,function(a,b){return a+b},0)},Jb=function(a){return Hb(a,function(a,b){return Math.max(a,b)})},Kb=function(a){return Hb(a,function(a,b){return Math.min(a,b)})},Lb=function(a){var b=[];return zb(a,function(a,c){b.push((b[c-1]||0)+a)}),b},Mb=function(a,b){var c={};for(var d=0;d<a.length;d++){var e=a[d][b];typeof e!="undefined"&&(c[e]=c[e]||[],c[e].push(a[d]))}return c},Nb=function(a,b,c){if(a.length===0)return[];var d=[],e=[a[0]],f=c(a[0]);for(var g=1;g<a.length;g++){var h=c(a[g]);f+h>b&&(d.push(e),e=[],f=0),e.push(a[g]),f+=h}return d.push(e),d},Ob=function(a,b){var c={};if(Bb(a))for(var d=0;d<a.length;d++){var e=b(a[d]);c[e[0]]=e[1]}else for(var f in a)if(a.hasOwnProperty(f)){var g=b(f,a[f]);c[g[0]]=g[1]}return c},Pb=function(a){var b={};return Gb(a,function(a){return b[a]?!1:(b[a]=!0,!0)})},Qb=function(a){return Gb(a,function(a){return a})},Rb=function(a){return pb(a)==="[object Array]"},Sb=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},Tb=function(a,b){return Sb(a,b)!==-1},Ub=function(a,b){var c=Sb(a,b);return c>-1&&a.splice(c,1),c>-1};Vb||(Vb={}),function(){var b,c,d,e,f,g;function h(a){return c.lastIndex=0,c.test(a)?'"'+a.replace(c,function(a){var b=f[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function i(a,b){var c,f,j,k,m,l=d,n=b[a];n&&typeof n=="object"&&typeof n.toJSON=="function"&&(n=n.toJSON(a)),typeof g=="function"&&(n=g.call(b,a,n));switch(typeof n){case"string":return h(n);case"number":return isFinite(n)?String(n):"null";case"boolean":case"null":return String(n);case"object":if(!n)return"null";d+=e,m=[];if(Object.prototype.toString.apply(n)==="[object Array]"){k=n.length;for(c=0;c<k;c+=1)m[c]=i(c,n)||"null";return j=m.length===0?"[]":d?"[\n"+d+m.join(",\n"+d)+"\n"+l+"]":"["+m.join(",")+"]",d=l,j}if(g&&typeof g=="object"){k=g.length;for(c=0;c<k;c+=1)typeof g[c]=="string"&&(f=g[c],j=i(f,n),j&&m.push(h(f)+(d?": ":":")+j))}else for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&(j=i(f,n),j&&m.push(h(f)+(d?": ":":")+j));return j=m.length===0?"{}":d?"{\n"+d+m.join(",\n"+d)+"\n"+l+"}":"{"+m.join(",")+"}",d=l,j}}b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};typeof Vb.stringify!="function"&&(Vb.stringify=function(a,b,c){var f;d="",e="";if(typeof c=="number")for(f=0;f<c;f+=1)e+=" ";else typeof c=="string"&&(e=c);g=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return i("",{"":a});throw new Error("JSON.stringify")}),typeof Vb.parse!="function"&&(Vb.parse=function(a,c){var d;function e(a,b){var d,f,g=a[b];if(g&&typeof g=="object")for(d in g)Object.prototype.hasOwnProperty.call(g,d)&&(f=e(g,d),f!==undefined?g[d]=f:delete g[d]);return c.call(a,b,g)}a=String(a),b.lastIndex=0,b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=window.eval("("+a+")"),typeof c=="function"?e({"":d},""):d;throw new SyntaxError("JSON.parse")})}();Wb=function(a,b){if(a.end<a.start||b.end<b.start)throw"Intervals are malformatted";return b.end<a.start||a.end<b.start?{start:0,end:0}:{start:Math.max(b.start,a.start),end:Math.min(a.end,b.end)}},Xb=function(a,b,c){return a<b?b:a>c?c:a},Yb=function(a){var b=function(){return a.navigator.appName=="Microsoft Internet Explorer"&&a.navigator.appVersion&&parseFloat(a.navigator.appVersion.split("MSIE")[1])<=8},c=function(){var b=a.navigator.userAgent;return!!(b&&b.match&&b.match(/webkit/i)&&b.match(/(iPad|iPhone|Android|Mobile)/))},d=function(){var b=a.navigator.userAgent;return b?/MSIE/.test(b)?"msie":/Firefox/.test(b)?"firefox":/Chrome/.test(b)?"chrome":/Safari/.test(b)?"safari":/Opera/.test(b)?"opera":"unknown":"unknown"};return{crazyScriptOrder:a.navigator.appName=="Microsoft Internet Explorer"||a.navigator.appName=="Opera",WebSocket:a.WebSocket||a.MozWebSocket,oldIE:b(),mobileWebkit:c(),browser:d()}},Zb=function(a,b){var c=a.createElement("a");c.href=b;var d=c.pathname.charAt(0)==="/"?c.pathname:"/"+c.pathname;return{href:c.href,host:c.host,hostname:c.hostname,pathname:d,search:c.search,port:c.port}},$b=function(a,b,c,d){if(b&&c){var e;d?e=new RegExp("[?&]"+c+"=("+d+")"):e=new RegExp("[?&]"+c);var f=Zb(a,b);return f.search.match(e)}return!1},_b=function(a){var b=document.createElement("a");return b.href=a,b.href.match(/^http/i)?b.href:ac(a)},ac=function(a){if(/^\s*http/i.test(sb(a)))return a;var b=window.location.pathname,c=b.split("/");c.pop();var d=a.split("/"),e=d;d[0]!==""&&(e=c.concat(d));var f=[];return zb(e,function(a){a==".."?f.pop():a!==""&&f.push(a)}),f.unshift(window.location.protocol+"//"+window.location.host),f.join("/")},bc=function(a,b){var c=a.document,d=Zb(c,b),e=c.getElementsByTagName("script");for(var f=0;f<e.length;f++){var g=Zb(c,e[f].src);if(g.pathname===d.pathname&&g.hostname===d.hostname)return e[f]}return null},cc=function(a,b){var c=Zb(a,b);return c.href.substring(0,c.href.length-c.search.length)},dc=function(){},ec=function(a){return a},fc=function(a){return function(b){return b[a]}},gc=function(a){return a()},hc=function(a,b,c){return function(){return a.apply(b,(c||[]).concat(Array.prototype.slice.call(arguments,0)))}},ic=function(a,b){return hc(a,b||{})},jc=function(a,b,c){if(a.byburt_developmentMode)return b();try{return b()}catch(d){return c}},kc=function(a){return function(){jc(a)}},lc=function(a,b){var c=a();return function(){var d=a();c!==d&&b(d),c=d}},mc=function(a){return function(){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}}()},nc=function(){var a={listeners:[],buffer:[],register:function(b){a.listeners.push(b),zb(a.buffer,function(c){b.apply(a,c)})},invoke:function(){var b=arguments;a.buffer.push(b),zb(a.listeners,function(c){c.apply(a,b)})},deregister:function(b){a.listeners.splice(Sb(a.listeners,b))}};return a},oc=function(a){var b,c=!1;return function(){return c||(b=a(),c=!0),b}},pc=function(a,b,c){var d=a[b];return d?a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}:a[b]=c,d},qc=function(a,b){zb(a,function(a){b.apply(this,a)})},rc=function(a,b){var c,d=function(){try{c=c||Vb.parse(a.get(b))}catch(d){}c=c||{}},e=function(a){return d(),c[a]},f=function(e,f){return d(),c[e]=f,a.set(b,Vb.stringify(c)),c},g=function(){return a.get(b)};return{exists:g,get:e,set:f}},sc=function(b){var c=b.document,d=null,e=null;return Yb(b).oldIE&&a(b,"frameElement")&&b.frameElement?(d=b.frameElement.offsetWidth,e=b.frameElement.offsetHeight):(d=b.innerWidth?b.innerWidth:c.documentElement&&c.documentElement.clientWidth!==0?c.documentElement.clientWidth:c.body.clientWidth,e=b.innerHeight?b.innerHeight:c.documentElement&&c.documentElement.clientHeight!==0?c.documentElement.clientHeight:c.body.clientHeight),{w:d,h:e}},tc=function(a){var b=a.document,c=a.pageXOffset?a.pageXOffset:b.documentElement?b.documentElement.scrollLeft:b.body?b.body.scrollLeft:null,d=a.pageYOffset?a.pageYOffset:b.documentElement?b.documentElement.scrollTop:b.body?b.body.scrollTop:null;return{x:c,y:d}},uc=function(a){var b=null,c=null,d,e;zb(a,function(a){var f=a.y+a.h,g=a.x+a.w;if(b===null||b>a.x)b=a.x;if(c===null||c>a.y)c=a.y;if(!d||d<f)d=f;if(!e||e<g)e=g}),e-=b,d-=c;if(b!==null&&c!==null&&e!==null&&d!==null)return{x:Math.round(b),y:Math.round(c),width:Math.round(e),height:Math.round(d)}},vc=function(a){var b=function(b){return Math.max(a.documentElement["client"+b],a.body["scroll"+b],a.documentElement["scroll"+b],a.body["offset"+b],a.documentElement["offset"+b])};return{width:b("Width"),height:b("Height")}},wc=function(a,b,c){var d=a.vw*a.vh/b,e=Math.max(S,Math.sqrt(d)),f=Math.max(Math.floor(a.vw/e),1),g=Math.max(Math.floor(a.vh/e),1),h=0,i=0,j=a.vw/f,k=a.vh/g,l=j/2+1,m=k/2+2;for(var n=0;n<f;n++){var o=Math.round(a.vx+n*j);for(var p=0;p<g;p++){var q=o+(1+p)*l%j,r=Math.round(a.vy+p*k),s=r+(1+n)*m%k;h++;if(a.nodeMatcher(q,s)){if(c)return 1;i++}}}return h>0?i/h:1},xc=function(a,b,c){var d=a.navigator;if(d&&d.appVersion){var e=d.appVersion.match(/Version\/([\d\.]+)/);if(c.tagName=="OBJECT"&&!(b.browser==="msie"||b.browser==="safari"&&e&&e[1]<"5.1"))return Rc(c,"EMBED")||c}return c},yc=function(b,c,d,e,f,g,h){h=h||{};var i=Yb(b),j=b.navigator,k=!1;if(j&&j.appVersion&&j.userAgent){var l=j.appVersion.match(/Version\/([\d\.]+)/),m=j.userAgent.match(/Opera\/(\d+)/);k=!(i.browser==="safari"&&l&&l[1]<"5.0"||i.browser==="opera")}var n=!k||!h.enableTony||!g,o=function(a){return a.frameElement||xc(b,i,a)},p=Ab(c,function(b){var g=e(b);g.windows||(g.windows=yb(d(Tc(b)).getFrames(b)));var h=g.windows.slice(1,g.windows.length);h.push(b);var i={x:[],y:[],w:[],h:[],sx:[],sy:[],ww:[],wh:[],rx:[],ry:[],rxa:[],rya:[],vix:[],viy:[]};zb(h,function(c,e){var g=f(c),h=g.window||(g.window=Sc(c)?c:Tc(c)),j=g.observer||(g.observer=d(h)),k=d(a(h,"parent","document","firstChild")?h.parent:h),l=g.positionElement||(g.positionElement=o(c)),m=(b===c?j:k).elementGeo(l);i.x.push(m.x),i.y.push(m.y),i.w.push(m.w),i.h.push(m.h);var n=(b===c?j:k).scroll(),p=n.x,q=n.y;i.sx.push(p),i.sy.push(q);var r;e===0&&(r=k.dimension(),i.ww.push(r.w),i.wh.push(r.h));var s=m.x-p,t=m.y-q,u=s+(i.rxa[e-1]||0),v=t+(i.rya[e-1]||0);i.rx.push(s),i.ry.push(t),i.rxa.push(u),i.rya.push(v);var w={start:u,end:u+m.w},x=i.vix[e-1]||{start:0,end:r.w},y={start:v,end:v+m.h},z=i.viy[e-1]||{start:0,end:r.h};i.vix.push(Wb(w,x)),i.viy.push(Wb(y,z))});var j=h.length-1,l=i.w[j],m=i.h[j];i.pix=l*m;var p=i.vix[j],q=i.viy[j];i.vw=p.end-p.start,i.vh=q.end-q.start,i.vpix=i.vw*i.vh;var r,s,t=Lb(yb(i.rx.slice(0,i.rx.length-1)));t=Ab(t,function(a){return-a}),t.push(0),t.push(i.x[j]-i.sx[j]),i.vx=Math.max.apply(Math,t);var u=Lb(yb(i.ry.slice(0,i.ry.length-1)));u=Ab(u,function(a){return-a}),u.push(0),u.push(i.y[j]-i.sy[j]),i.vy=Math.max.apply(Math,u);var v=b.ownerDocument,w,x;i.nodeMatcher=function(a,d){var f=v.elementFromPoint(a,d);if(!f)return!1;if(b===f)return w=f,x=!0,!0;if(w&&f===w)return x;if(f.tagName==="EMBED"){var g=f.parentNode;if(g.tagName==="OBJECT"&&g===b)return w=f,x=!0,!0}var h=e(f);if(h.isAd===undefined){var i=function(a){return a===f||Lc(a,f)},j=i(b,f);j||(j=Db(c,i)),h.isAd=j,w=f,x=h.isAd}return h.isAd},i.vpix>0&&!n&&(i.tony=wc(i,Q),i.vpix*=i.tony);var y=!1,z=function(){y=!0};return zb(g.windows,function(a){var b=d(a),c=e(a);c.visibilityChangedListenerId=b.attachWindowEvent(z,c.visibilityChangedListenerId)}),i.visibilityChangedForNode=function(){if(y)return!0;var a=function(){var a;return function(){return a!==undefined?a:(a=wc(i,R,!0),a)}}();return k?i.vz>0?0===a():i.vw*i.vh>0?0!==a():!1:!1},i.vz=i.vpix===0?0:i.vpix/i.pix,i}),q=Hb(Ab(p,function(a){return a.vpix}),function(a,b){return a+=b,a}),r=Hb(Ab(p,function(a){return a.pix}),function(a,b){return a+=b,a}),s=function(){return Db(p,function(a){return a.visibilityChangedForNode()})},t=function(){return Ab(p,function(a){return{h:a.h[a.h.length-1],w:a.w[a.w.length-1]}})},u=function(){return Ab(p,function(a){return Ab(a.x,function(b,c){return{x:b,y:a.y[c]}})})},v=function(){return Math.round(100*(r===0?0:q/r))},w=function(){return Ab(p,function(a){return Math.round(100*a.vz)})},x=function(a,b){return!1},y=function(){return""};return{dimensions:t,positions:u,nodeVisibilities:w,visibilityHasChanged:s,significantVisibilityChange:x,visibility:v,name:y}},zc=function(a,b){b=b||{};var c=Ib(Ab(a,function(a){return a.w*a.h})),d=Math.round(Math.sqrt(c));return function(){var e=sc(window),f=Math.floor((e.w-Ib(Ab(a,fc("w"))))/2),g=a[0],h=tc(window),i,j=Xb(g.w+f,0,g.w);b.absoluteColumns?i=j*Xb(g.h-h.y,0,Math.min(e.h,g.h)):i=j*Math.min(g.h,e.h);var k=a[1],l=Math.min(k.w,e.w)*Xb(k.h-h.y,0,k.h),m=i*2+l,n=Math.round(m/c*100);return{dimensions:function(){return[{w:d,h:d}]},positions:function(){return[[{x:Math.max(0,f),y:0}]]},nodeVisibilities:function(){return[n]},visibilityHasChanged:function(){return!0},significantVisibilityChange:function(a,b){return Math.abs(a-b)>=20},visibility:function(){return n},name:function(){return"ht"}}}},Ac=function(){return(new Date).getTime()},Bc=function(a,b,c,d,e){d=d||-1;var f=typeof c=="function"?c:function(){return c},g=function(){var c=b();d--,c||d===0?e&&e():a(g,f())};a(g,f())},Cc=function(a,b,c,d,e){d=d||-1;var f=typeof c=="function"?c:function(){return c},g=function(){d--,b(mc(function(b){b||d===0?e&&e():a(g,f())}))};a(g,f())},Dc=function(a,b,c){var d="on"+b;if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent(d,c);else{var e=a[d];a[d]=function(){typeof e=="function"&&e.apply(this,arguments),c.apply(this,arguments)}}},Ec=function(a,b,c){var d="on"+b;a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent(d,c):delete a[d]},Fc=function(a){document.addEventListener?window.addEventListener("load",a,!1):document.attachEvent&&window.attachEvent("onload",a)},Gc=function(a,b){if(b.match(/<script/i))return null;var c=a.document.createElement("div");return c.innerHTML=b,Ic(c.childNodes)},Hc=function(a){var b=[];for(var c=0;c<a.length;c++)a[c].nodeType===3&&b.push(a[c]);return b},Ic=function(a){var b=[];for(var c=0;c<a.length;c++)a[c].nodeType!=3&&a[c].nodeType!=8&&b.push(a[c]);return b},Jc=function(a,b,c){if(a.length===0)return[];a=Qb(a);var d=[];for(var e=0;e<a.length;e++){var f=a[e];for(var g=0;g<b.length;g++)if(f.tagName===b[g]){d.push(f);if(!c)return d}d=d.concat(Jc(f.childNodes,b,c));if(!c&&d.length>0)return[d[0]]}return d},Kc=function(a,b){b===undefined&&(b=0);if(a.length===0)return 0;a=Qb(a);var c=Ab(a,function(a){return a.childNodes?a.childNodes.length===0?0:1+Kc(a.childNodes,b):0});return b+Math.max.apply(Math,c)},Lc=function(a,b){var c=b.parentNode;while(c){if(c===a)return!0;var d=c.parentNode;if(c===d)return!1;c=d}return!1},Mc=function(a,b){var c=[];return zb(a,function(a){for(var d=0;d<b.length;d++)a.tagName===b[d]&&c.push(a)}),c},Nc=function(a,b){var c=[];return zb(a,function(a){var d=!1;for(var e=0;e<b.length;e++)a.tagName===b[e]&&(d=!0);d||c.push(a)}),c},Oc=function(a,b,c){var d=[],e=a,f=300;do{(!b||!b(e))&&d.push(e),e=e.nextSibling;if(--f<0)throw{ms:"Stuck in 'findSiblingsAndChildrenOfType'",md:"Current: "+e.tagName+" #"+e.id+" "+e.className}}while(e&&(!c||!c(e)));return d},Pc=function(a,b){return Mc(Oc(a),b)},Qc=function(a,b){var c=[];return zb(a,function(a){c=c.concat(Jc(a,b,!0))}),c},Rc=function(a,b){for(var c=0;c<a.childNodes.length;c++)if(a.childNodes[c].tagName===b)return a.childNodes[c];return null},Sc=function(a){return a&&typeof a=="object"&&"setInterval"in a},Tc=function(b){return b.ownerDocument&&(b=b.ownerDocument),Sc(b)?b:b.nodeType===9?b.defaultView||a(b,"parentWindow")&&b.parentWindow:!1},Uc=function(b){var c=[],d=b;for(var e=0;e<300;e++){c.push(d);if(d==b.top||!a(d,"parent","document","firstChild")||!d.parent)return c;d=d.parent}throw"Stuck in 'getFrames'"},Vc=function(a){var b=Uc(a);return b?b[b.length-1]:a},Wc=function(a,b){var c;return a.currentStyle?c=a.currentStyle[b]:window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b)),c},Xc=function(a,b){typeof b=="string"&&(b=[b]);var c=[];for(var d=0;d<a.childNodes.length;d++){var e=a.childNodes[d];for(var f=0;f<b.length;f++)e.tagName=="PARAM"&&e.name.toLowerCase()==b[f].toLowerCase()&&c.push(e.value)}return c},Yc=function(a,b){var c=300;while(a){var d=b(a);if(d)return d;a=a.parentNode;if(--c<0)throw"Stuck in 'traverseUp'"}},Zc=function(a,b,c){var d=b.split("; "),e={};return zb(d,function(b){var d=b.split("="),f=d[0],g=d[1];typeof g=="undefined"||g===""?e[a.decodeURIComponent(f)]=null:e[a.decodeURIComponent(f)]=c?g:a.decodeURIComponent(g)}),e},$c=function(a,b){var c=a.document;b=b||{};var d=function(b,d){return Zc(a,c.cookie,d)[b]},e=function(a,d,e){e=rb(b,e)||{};var f=[];!d&&d!==0&&(d=""),f.push(encodeURIComponent(a)+"="+(e.raw?String(d):encodeURIComponent(String(d)))),e.expires||(e.expires=365);if(typeof e.expires=="number"){var g=b.expires||e.expires;e.expires=new Date,e.expires.setDate(e.expires.getDate()+g)}e.path||(e.path="/"),e.expires&&e.expires.toUTCString&&d&&f.push("expires="+e.expires.toUTCString()),e.path&&f.push("path="+e.path),e.domain&&f.push("domain="+e.domain),e.secure&&f.push("secure"),c.cookie=f.join("; ")},f=function(){var a="burt_test",b="1";return d(a)===b?!0:(e(a,b),d(a)===b)};return{get:d,set:e,testSet:f}},_c=function(a){var b=1,c=0,d=65521;for(var e=0;e<a.length;e++)b=(b+a.charCodeAt(e))%d,c=(c+b)%d;return c<<16|b},ad=function(a){var b=2636928640,c=4022730752,d=2147483648,e=624,f=2147483647,g=2567483615,h=1812433253,i=397,j=4294967296,k=65535,l=11,m=15,n=18,o=7,p=[],q=e,r={};return r.seed=function(a){q=e,p[0]=a>>>0;for(var b=1;b<e;b++)p[b]=p[b-1]^p[b-1]>>>30,p[b]=(h*((p[b]&k<<16)>>>16)<<16)+(p[b]&k)*h+b>>>0},r.random=function(){if(q>=e){for(var a=0;a<e;a++)p[a]=((p[(a+1)%e]&1)===1?g:0)^(p[a]&d|p[(a+1)%e]&f)>>>1^p[a+i-(a>=e-i?e:0)];q=0}var h=p[q];return h^=h>>>l,h^=h<<o&b,h^=h<<m&c,h^=h>>>n,q++,(h>>>0)*(1/j)},r.seed(a||(new Date).getTime()),r},bd=function(a,b){var c=0,d=function(){c<=0&&b(a)},e=function(){c--,d()};zb(a,function(a){var b=a.tagName;b==="IMG"&&!a.complete&&(c++,Dc(a,"load",e))}),d()},cd=function(a,b,c,d){var e=0,f=function(){e<=0&&d(c)},g=function(){e--,f()},h=function(a){try{return a.PercentLoaded()!==undefined}catch(b){return!1}};zb(c,function(c){c=xc(a,b,c);var d=c.tagName;if(d==="OBJECT"||d==="EMBED")if(!h(c)||c.PercentLoaded()<100)e++,Bc(a.setTimeout,function(){return h(c)&&c.PercentLoaded()>=100},200,50,g)}),f()},dd=function(b,c,d){var e=mc(d);b.contentWindow.document.readyState||Dc(b.contentWindow,"load",e),d=c(function(){if(a(b.contentWindow,"document")){var c=b.contentWindow.document;if(!a(c,"childNodes"))return e(),!0;if(c.readyState==="complete"&&c.URL!=="about:blank")return e(),!0}}),Bc(window.setTimeout,d,50,100,e)},ed=function(a,b,c,d,e){e=e||{};var f={},g=e.syncUrl||jb,h=!1,i=function(d,e){var h=C+"_"+b.generateIDFromTime(),i=g+d+"?callback="+h;a[h]=function(b){f=Zc(a,b),e()},c.get(i)},j=function(a,c,e){var g=a.provider,h=a.cookieName||a.provider,i=f[h];if(i)d.set(g,i),e(g,i,!0,!1);else{var j=d.get(g);if(j)e(g,j,!0,!1);else{var k=a.defaultId||b.generateIDFromTime();c(g,h,k,e)}}},k=function(a,b,c,e){if(h){e(a,c,!1,!1);return}if(d.exists()){e(a,c,!1,!1);return}var g="status";i(g,function(){var c=f[b];c&&d.set(a,c),e(a,c,!!c,!1)})},l=function(a,b){return j(a,k,b)},m=function(a,b,c,e){if(h){e(a,c,!1);return}var g="sync/"+b+"/"+c;i(g,function(){var g=f[b];g?(d.set(a,g),e(a,g,!0,g===c)):(h=!0,e(a,c,!1,!0))})},n=function(a,b){return j(a,m,b)},o=function(a,b){var c=a.cookieName||a.provider;return i("delete/"+c,function(){d.set(c,f[c]),b(a.provider,f[c],!f[c],!f[c])})};return{read:l,write:n,remove:o}},fd=function(){return{get:function(){},set:function(){}}},gd=function(a){var b=a.getTopFrame(),c=b.document.referrer,d=b.location.hostname;if(c&&d){var e=document.createElement("a");e.src=c;var f=d.replace(/^www\./i,""),g=new RegExp("^\\s*http(s)?://[^/]*"+f+"(:[0-9]*)?/","i");if(!g.test(c))return c}return""},hd=function(a){return Vc(a).location.href},id=function(a){if(a.outerHTML)return a.outerHTML;if(a.nodeType==3)return a.nodeValue;var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},jd=function(a){return Ob(a.split("?").slice(1).join("?").split("&"),function(a){var b=a.split("=");return[decodeURIComponent(b[0]),decodeURIComponent(b.slice(1).join("="))]})},kd=function(a,b){if(!b||!a)return!0;var c=parseInt("00"+a.substring(0,6),36),d=parseInt("00"+a.substring(6,12),36);if(isNaN(c)||isNaN(d))throw new Error("Invalid ID-parts. Top half is "+c+" and bottom half is "+d);return(c+d)%b===0},ld=function(a,b){return"type="+a+"&"+Ab(b,function(a,b){return b+"="+a}).join("&")},md=function(a,b,c,d,e,f,g,h,i){var j=a.escape;c&&d.escapeClickUrl&&(c=j(c)),c=c||"";var k={type:"click",si:e};i.apiKey&&(k.rk=i.apiKey),f&&(k.pi=f),g&&(k.ui=g),k.av=h,k.mk=i.mediaKey,i.siteName&&(k.wn=i.siteName);var l=function(a,b,d){b||(b="&"),d||(d="="),a||(a="?");var e=[];return zb(k,function(a,b){e.push(b+d+a)}),a+e.join(b)+b+"rd"+d+c},m;d.escapeAll?m=j(b)+l(j("?"),j("&"),j("=")):d.escapedAmps?m=b+l("?","%26"):m=b+l();if(d.escapes)for(var n=0;n<d.escapes;n++)m=j(m);return m},nd=function(a,b,c){var d="<"+a+' style="display:none" class="'+b+'"';return c&&(d+=' id="'+c+'"'),d+="></"+a+">",d},od=function(a){var b;if(a.tagName==="OBJECT"){if(a.data)return a.data;var c=Rc(a,"EMBED");if(c)return a.data||c.src;var d=Xc(a,"movie");if(d.length>0)return d[0]}else{if(a.tagName==="EMBED")return a.src;if(a.tagName==="IMG")return a.src}},pd=function(){var a=function(a){var b=a.match(/(clickTAG\d?|creativeURL\d?|linkurl)=([^&]*)/i);return b?encodeURIComponent(b[2]):null};return function(b){if(b.tagName&&b.tagName.toUpperCase()==="OBJECT"){var c=Xc(b,["flashvars","movie"]);if(c.length>0)for(var d=0;d<c.length;d++){var e=a(c[d]);if(e)return e}var f=Rc(b,"EMBED");if(f){var g=a(f.src);if(g)return g}}else if(b.tagName&&b.tagName.toUpperCase()==="EMBED"){if(b.getAttribute("flashvars")){var h=a(b.getAttribute("flashvars"));if(h)return h}var i=a(b.src);if(i)return i}if(b.tagName&&(b.tagName.toUpperCase()==="IMG"||b.tagName.toUpperCase()==="DIV"))return Yc(b,function(a){if(a.tagName&&a.tagName.toUpperCase()==="A")return encodeURIComponent(a.href)})}}(),qd=function(a,b){var c=a.document,d=function(a){return a[b]?a:!1},e=function(a){return a.parentNode&&a.parentNode.tagName=="OBJECT"?a.parentNode:a},f=c.embeds,g=Fb(f,d);return g?e(g):(f=c.getElementsByTagName("object"),g=Fb(f,d),g?e(g):null)},rd=function(a){return"//"+a+".log.richmetrics.com/log"},sd=function(a,b,c){var d=Vc(a);c=c||{};var e=function(a){return d[a]||b.get(a)},f=function(a,e){b.set(a,e,{path:"/",expires:c.expires||365}),d[a]=e};return{get:e,set:f}},td=function(a,b,c,d){var e,f,g,h,i=function(i,j){e||(e=nc(),f=ed(a,c,b,rc(fd(),"null")),f.write({provider:"rfa"},e.invoke),e.register(function(a,b,e,f){g=fd(),g.testSet=function(){return e},h={getUserId:function(){return b||c.generateIDFromTime()},getPageId:d.getPageId}})),e.register(function(a,b,c,d){j({cookieJar:g,sync:f,richId:h})})};return i},ud=function(a,b,c){var d=b||200,e=c||2e3,f=Ac(),g=[];a=a||[];var h,i=function(){zb(g,function(a){a()}),g=[]},j=function(){h&&clearTimeout(h),h=setTimeout(function(){i(),j()},d)},k=function(){g.length>0&&Ac()-f>e&&i(),j()};return zb(a,function(a){a.attachWindowEvent(k)}),j(),{hookObserver:function(b){Sb(a,b)!==-1&&(a.push(b),b.attachWindowEvent(k))},onBreak:function(a){g.push(a)}}},vd=Vb.stringify,wd=function(a,b,c){c=c||1900;var d=a.document;return{maxRequestLength:c,get:function(e,f,g){if(e.length>c)return;var h=!1,i=a.setTimeout(function(){h=!0,g&&g(b)},b),j=d.getElementsByTagName("script")[0],k=j.parentNode,l=d.createElement("script");l.type="text/javascript",l.src=e,l.onload=l.onerror=l.onreadystatechange=function(){a.clearTimeout(i);if(!l.readyState||/loaded|complete/.test(l.readyState))f&&!h&&f(),l.onload=l.onerror=l.onreadystatechange=null,l.parentNode&&l.parentNode.removeChild(l),l=undefined},k.insertBefore(l,j)}}};(function(a){var b,c,d,e,f,g,h,i;function j(){var g,a=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),a=!0,window.localStorage.removeItem("_tmptest")}catch(b){}if(a)try{window.localStorage&&(c=window.localStorage,h="localStorage")}catch(e){}else if("globalStorage"in window)try{window.globalStorage&&(c=window.globalStorage[window.location.hostname],h="globalStorage")}catch(f){}else{d=document.createElement("link");if(!d.addBehavior||!d.load){d=null;return}d.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(d),d.load("jStorage");g="{}";try{g=d.getAttribute("jStorage")}catch(i){}c.jStorage=g,h="userDataBehavior"}k(),n()}function k(){if(c.jStorage)try{b=g(String(c.jStorage))}catch(a){c.jStorage="{}"}else c.jStorage="{}";e=c.jStorage?String(c.jStorage).length:0}function l(){try{c.jStorage=f(b),d&&(d.setAttribute("jStorage",c.jStorage),d.save("jStorage")),e=c.jStorage?String(c.jStorage).length:0}catch(a){}}function m(a){if(!a||typeof a!="string"&&typeof a!="number")throw new TypeError("Key name must be string or numeric");if(a=="__jstorage_meta")throw new TypeError("Reserved key name");return!0}function n(){var a,c,d,e=Infinity,f=!1;clearTimeout(i);if(!b.__jstorage_meta||typeof b.__jstorage_meta.TTL!="object")return;a=+(new Date),d=b.__jstorage_meta.TTL;for(c in d)d.hasOwnProperty(c)&&(d[c]<=a?(delete d[c],delete b[c],f=!0):d[c]<e&&(e=d[c]));e!=Infinity&&(i=setTimeout(n,e-a)),f&&l()}b={},c={jStorage:"{}"},d=null,e=0,f=a.stringify,g=a.parse,h=!1;xd={version:"0.1.6.1",set:function(a,c){return m(a),typeof c=="function"?c=null:c&&typeof c=="object"&&(c=g(f(c))),b[a]=c,l(),c},get:function(a,c){return m(a),a in b?b[a]:typeof c=="undefined"?null:c},deleteKey:function(a){return m(a),a in b?(delete b[a],b.__jstorage_meta&&typeof b.__jstorage_meta.TTL=="object"&&a in b.__jstorage_meta.TTL&&delete b.__jstorage_meta.TTL[a],l(),!0):!1},setTTL:function(a,c){var d=+(new Date);return m(a),c=Number(c)||0,a in b?(b.__jstorage_meta||(b.__jstorage_meta={}),b.__jstorage_meta.TTL||(b.__jstorage_meta.TTL={}),c>0?b.__jstorage_meta.TTL[a]=d+c:delete b.__jstorage_meta.TTL[a],l(),n(),!0):!1},flush:function(){return b={},l(),!0},storageObj:function(){function a(){}return a.prototype=b,new a},index:function(){var c,a=[];for(c in b)b.hasOwnProperty(c)&&c!="__jstorage_meta"&&a.push(c);return a},storageSize:function(){return e},currentBackend:function(){return h},storageAvailable:function(){return!!h},reInit:function(){var a,b;if(d&&d.addBehavior){a=document.createElement("link"),d.parentNode.replaceChild(a,d),d=a,d.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(d),d.load("jStorage"),b="{}";try{b=d.getAttribute("jStorage")}catch(e){}c.jStorage=b,h="userDataBehavior"}k()}},j()})(Vb);yd=function(b,f,h){var i=h.document,j=!1,k=0,hostProtocol=f.CONST.protocol,l=1,m=Yb(h),o=function(e,o){var p,q,r,s,t,u,v=-1,w=e.mediaLogUrl||rd(e.apiKey),x=e.apiKey?nc():b,y=0;e=e||{},o=o||{};var z=o.cookieJar||b.cookieJar,A=o.sync||b.sync,B=o.richId||b.richId;if(typeof e.parentAgent!="undefined"){var C=parseInt(e.parentAgent,10),D=h;for(var E=0;E<C;E++)D=h.parent;delete e.parentAgent;if(e.adId){var F=i.getElementById(e.adId);e.wrapperNode=F}D[K].push({version:I,invoke:e});return}var G=function(){return e.forceXframe||b.windowObserver.isCrossDomain()&&e.apiKey&&m.browser==="msie"},H=function(){return e.rfa&&b.windowObserver.isCrossDomain()&&!G()},L=function(){return s=e.sessionId=s||e.sessionId||b.idGenerator.generateIDFromTime(),s},Q=function(){var a=B.getUserId();if(!e.rfa)return kd(a,e.sample);var b=e.apiKey,c=parseInt(b.substring(11,12),36),d=parseInt("00"+a.substring(0,10),36);return d%Math.pow(2,c)===0},R=function(a){var c=b.nodeCache.getDataFromNode(a);return c[s]||(c[s]={sessionId:s,global:c}),c[s]},S=function(){var a;return function(){return a=a||function(){return G()?b.xFrame.getXframeVisibilityForNodes:e.visibilityFn||yc}(),a}}(),T=b.windowObserver.getFrames.apply(null,p&&p.length>0?[p[0]]:[]),U=Ab(T,b.getObserver);zb(U,function(a){b.interactionObserver.hookObserver(a)});var V=nc(),W=function(){var a={absolutePosition:e.placementKind=="absolute",xFrameUrl:e.xFrameUrl,enableTony:e.enableTony};return u=S()(h,p,b.getObserver,R,b.nodeCache.getDataFromNode,b.ready.loaded,a),V.invoke(u),u},_=function(){return u||W()},bb=function(a,b){y<ab&&(y++,jc(h,function(){eb("error",{ms:encodeURIComponent(a),md:encodeURIComponent(b)})}));if(h.byburt_developmentMode)throw new Error(a+" "+b)},cb=function(a,b){if(h.byburt_developmentMode)b();else try{return b()}catch(c){var d="Unknown error",e=null;return c&&c.ms&&c.md?(d=c.ms,e=c.md):c&&typeof c.toString=="function"&&(d=c.toString()),bb(a+": "+d,e),undefined}},db=function(a,b,c){return function(d){e[b]&&(d[a]=c||e[b])}};r=hc(function(a,b,c){var d={},e=this;return zb(b,function(b){c&&!h.byburt_developmentMode?jc(h,function(){e[b](d,a)}):cb("makeParams."+b,function(){e[b](d,a)})}),d},{ad:function(a){a.ad=Ab(_().dimensions(),function(a){return Math.round(a.w)+"x"+Math.round(a.h)}).join(",")},ac:function(a,b){b&&b.action&&(a.ac=encodeURIComponent(b.action.toString()))},an:db("an","adName"),ap:function(a){a.ap=Ab(_().positions(),function(a){return yb(Ab(a,function(a,b){return a.x+"x"+a.y}))}).join("|")},av:function(a){var b=J;e.versionSuffix&&(b+="_"+e.versionSuffix),a.av=b},ar:function(a){var b=e.autoReload;b&&(a.ar=b?1:0)},ca:function(a,b){var c="",d=new RegExp(e.siteName+"$");d.test(h.location.hostname)||(c+="external-"),e.siteName&&(a.ca=c+(h.byburt_category||e.category||"unknown"))},cc:function(a,b){b&&b.category&&(a.cc=encodeURIComponent(b.category.toString()))},ce:function(a){a.ce=e.clickEnabled?1:0},cl:function(a){},co:function(a){a.co=z.testSet()?"1":"0"},cp:db("cp","canonicalPath"),ct:function(a,c){c&&typeof c.occurredTime!="undefined"?a.ct=c.occurredTime:a.ct=b.currentTime()},cv:function(a,b){b&&b.value&&(a.cv=encodeURIComponent(b.value.toString()))},ei:function(a,b){a.ei=b.value},ep:db("ep","empty",1),eu:function(a){e.rfa&&b.windowObserver.isCrossDomain()?a.fu=encodeURIComponent(h.location.href):a.eu=encodeURIComponent(b.windowObserver.getTopFrame().location.href)},et:function(a){},fn:function(a){},fs:function(a,b){a.fs=b.fresh?1:0},fu:function(a){},lu:function(b){var c=function(a){return a.join(",").length>1400&&(a=Ab(a,function(a){return cc(h.document,a)})),a.join(",")},d=!1,f=Ab(p,function(b){return b.tagName==="IFRAME"&&a(b,"contentWindow","document","body","childNodes")?b.contentWindow.document.body:b}),g=Jc(f,["OBJECT","EMBED","IMG"],!0),i=Ab(g,od);i=Gb(i,ec),i=Ab(i,function(a){return encodeURIComponent(_b(a))}),i=Pb(i);var j=Gb(p,function(a){return a.tagName=="IFRAME"});i.length>0?b.lu=c(i):j.length>0?b.wu=c([encodeURIComponent(_b(j[0].src))]):!e.empty&&p.length>0&&(b.lu="")},lb:function(a,b){b&&b.label&&(a.lb=encodeURIComponent(b.label.toString()))},ln:function(a){h.navigator&&(a.ln=h.navigator.userLanguage||h.navigator.language)},md:function(a,b){a.md=b.md},mk:db("mk","mediaKey"),mp:function(a,c){if(!c)return;var d,e;if(c.pageX||c.pageY)d=c.pageX,e=c.pageY;else if(c.clientX||c.clientY)d=c.clientX+i.body.scrollLeft+i.documentElement.scrollLeft,e=c.clientY+i.body.scrollTop+i.documentElement.scrollTop;var f=Tc(p[0]),g=b.getObserver(f).elementGeo(p[0]);d-=g.x,e-=g.y,a.mp=d+"x"+e},ms:function(a,b){a.ms=b.ms},mt:function(a){var b;p.length>0&&Sb(["OBJECT","EMBED","IMG"],p[0].tagName)!==-1?b=p:b=Jc(p,["OBJECT","EMBED","IMG"],!0);var c=b.length>0?b:p;c=Qb(c),c=Ab(c,function(a){return a.tagName}),c=Qb(c),c.length>0?a.mt=c.join(","):!e.empty&&p.length>0&&(a.mt="")},nc:function(a){var b=Jc(p,["OBJECT","EMBED","IMG"]),c=b.length>0?b:p;a.nc=c.length},nz:function(a){if(H()||p.length===0)return;a.nz=_().nodeVisibilities().join(",")},pd:function(a){a.pd=Ab(b.observers,function(a){var b=a.getPageDimension();return b.width+"x"+b.height}).join(",")},pi:function(a){var b=B.getPageId();b&&(a.pi=b)},pk:db("pk","placementKind"),pn:db("pn","placementName"),pr:function(a,b){a.pr=b.provider},rd:function(a){},rf:function(a){var c=new Date;c=new Date(c.setMinutes(c.getMinutes()+30));var f=gd(b.windowObserver);if(f.length>0){e.rfa||z.set(d,f,{path:"/",expires:c}),a.rf=encodeURIComponent(f);return}var g=z.get(d);if(g){a.rf=encodeURIComponent(g),z.set(d,g,{path:"/",expires:c});return}},lr:function(a){var c=b.windowObserver.getTopFrame().document.referrer;c&&(a.lr=encodeURIComponent(c))},rk:db("rk","apiKey"),sa:function(a){a.sa=b.windowObserver.isCrossDomain()?0:1},sd:function(a){h.screen&&!isNaN(h.screen.width)&&!isNaN(h.screen.height)&&(a.sd=h.screen.width+"x"+h.screen.height)},sg:function(a){var b=[];if(e.segments)for(var c in e.segments)e.segments.hasOwnProperty(c)&&b.push(c+":"+e.segments[c]);b.length>0&&(a.sg=b.join(","))},si:function(a){a.si=L()},sis:function(a){var c=Ab(b.ads,function(a){return a.config.sessionId});c.length>0&&(a.sis=c.join(","))},sn:function(a){typeof a.sn=="undefined"&&(a.sn=l++)},sr:db("sr","sample"),ss:function(a,b){a.ss=b.success?1:0},ti:db("ti","adTagId"),ty:function(b,c){if(!c)return;a(c,"type")||(c={type:"mouseover"}),c.type==="mouseover"?b.ty="mouseEnter":c.type==="mouseout"?b.ty="mouseExit":b.ty=c.type},tn:function(a){e.tagName&&(a.tn=encodeURIComponent(e.tagName))},tz:function(a){a.tz=(new Date).getTimezoneOffset().toString()},ui:function(a){var b=B.getUserId();if(!/^[A-Z0-9]*$/.test(b))throw"Invalid id for params.ui: "+b;a.ui=b},vl:function(a,b){if(!b)return;b.value&&(a.vl=b.value.toString())},vz:function(a){if(H()||p.length===0)return;a.vz=_().visibility()},vn:function(a){if(H()||p.length===0)return;a.vn=_().name()},wd:function(a){var b=Ab(U,function(a){return a.dimension()});b.length>0&&(a.wd=Ab(b,function(a){return a.w+"x"+a.h}).join(","))},wn:db("wn","siteName"),ws:function(a){var b=Ab(U,function(a){return a.scroll()});if(!b)return;b.length>0&&(a.ws=Ab(b,function(a){return a.x+"x"+a.y}).join(","))},wu:function(a){}});var eb=function(a,c,d){var f=function(f){var g=nb[f||a];if(!g)throw"No such action "+a;var i=r(c||h.event,g,a==="error");jc(h,function(){x.invoke(a,i,e.adId)}),e.disableLogging||b.transport.enqueueMessage({kind:a,params:i,url:w,callback:d})};cb("sendMessage "+a,function(){a==="exposure"&&e.rfa?f("rfa_exposure"):a==="sync"&&e.rfa?f("rfa_sync"):f()})},fb=function(a){cb("sendPing",function(){eb("ping");if(a===-1)q&&h.clearTimeout(q);else{var c=Math.floor(b.random()*1e3*Z[a]),d=Xb(a+1,0,Z.length-1);q=h.setTimeout(function(){var c=a;b.interactionObserver.onBreak(function(){c===a&&(W(),fb(d))})},c)}})},gb=function(a,b,c,d){A[a](b,function(a,b,e,f){c&&c.apply(null,arguments),eb("sync",{provider:a,value:b,success:e,fresh:f},d)})},hb=function(){cb("startPagePingLogging",function(){var a,c=function(){return Math.round(X*1e3+1e3*Y*b.random())},d=function(){var b=c();a&&h.clearTimeout(a),a=h.setTimeout(function(){eb("pageping")},b)};d(),b.register(d)})},ib=function(){cb("startVisibilityProbing",function(){if(H())return;var a=!0,c=_();Cc(h.setTimeout,function(d){b.interactionObserver.onBreak(function(){if(a)a=!1,c.visibility()>0&&fb(0);else if(c.visibilityHasChanged()||e.placementKind!=="absolute"&&c.visibility()>0&&b.random()<=.2){var f=W(),g=Math.ceil(f.visibility())!==Math.ceil(c.visibility());g&&fb(c.visibility()>0?-1:0),c=f}d()})},function(){return Math.floor(b.random()*$/2+$/2)})})},jb=function(){cb("startActivityLogging",function(){var a=function(a,b){b.occurredTime=a,eb("activity",b)};b.activity.onActive(a),b.activity.onPassive(a)})},kb=function(){cb("startEndLogging",function(){var a=b.jStorage.get("rich_ends"),c=function(){b.jStorage.set("rich_ends",a)};a||(a=[],c()),zb(a,function(d){b.request.get(d+"grp",function(){Ub(a,d),c()})});var d=mc(function(){var d=w+"?"+ld("end",r(null,nb.end));d+="&et=",d=d.replace(/.+?\/\//,"//");if(d.length+5>b.request.maxRequestLength)return;a.push(d),c();var e=new Image,f=mc(function(){Ub(a,d),c()});Dc(e,"load",f),e.onload=f,e.src=hostProtocol+":"+d+"im",b.request.get(hostProtocol+":"+d+"gr",f);var g=m.browser=="safari"&&h.navigator.userAgent&&h.navigator.userAgent.match(/\((iPhone|iPad)/);if(!g&&m.WebSocket)try{var i=new m.WebSocket("ws:"+d+"ws");i.onload=i.onerror=i.onclose=i.onmessage=f}catch(j){}});zb([h,h.document,i.body],function(a){zb(["unload","beforeunload"],function(b){pc(a,"on"+b,d),Dc(a,b,d)})})})},lb=function(){cb("startSyncing",function(){b.syncStartedBySessionId=b.syncStartedBySessionId||{};var a=e.rfa?b.syncStartedBySessionId[L()]:b.syncStarted;a||(e.rfa?b.syncStartedBySessionId[L()]=!0:b.syncStarted=!0,b.hasStartedCookieSyncing=!0,gb("write",{provider:"burt",cookieName:"id"},b.burtSyncHooks.invoke))})},mb=function(){e.configCallback&&h[e.configCallback](e)},ob=function(){cb("startPageLogging",function(){j||(j=!0,p||(p=e.adNodes=[]),mb(),eb("page"),lb(),jb(),hb(),kb())})},pb=function(){cb("startLogging",function(){if(e.clickCallback&&typeof e.clickCallback=="function"){var a=r(null,nb.click),b=ld("click",a),c=w+"?"+b+"&rd=";e.clickCallback(c)}mb(),eb("exposure"),lb();if(p.length!==0&&!e.empty){var d=function(a){eb("event",a)};zb(p,function(a){Dc(a,"click",d),Dc(a,"mouseover",d),Dc(a,"mouseout",d)}),ib()}e.rfa&&jb()})},qb=function(a){cb("fireCustomEvent",function(){if(typeof a=="undefined"||!a){if(!e.data)throw"Missing required attribute: data";a={category:e.data.category,action:e.data.action,label:e.data.label,value:e.data.value}}else zb(e.defaultEventData,function(b,c){a[c]||(a[c]=b)});if(!a.category)throw"Missing required event data: category";if(!a.action)throw"Missing required event data: action";eb("customevent",a,e.eventCallback)})},rb=function(){cb("startExternalSync",function(){gb(e.syncType,e.syncConfig,e.syncCallback)})},sb=function(){cb("startVolatileSync",function(){var a={success:!0,fresh:!0,provider:e.syncConfig.provider,value:e.syncConfig.defaultId};eb("sync",a,e.syncCallback)})},tb=function(b,c){e.adNodes=p=b,c==="empty"?e.empty=!0:c&&bb("onDomReady: Unable to determine which node is the ad:",c);var d=1,f=function(a){return function(){return cb("waitForCompletedDocument",a)}},g=function(){d--,d<=0&&pb()},h=zb(b,function(b){b.tagName==="IFRAME"&&a(b,"contentWindow","document","body","childNodes")&&(d++,dd(b,f,g))});g()},ub=function(){e.beforeCallback&&h[e.beforeCallback](e);var a=function(a){return a&&a.className&&a.className.match(N)},c=function(a){return a&&a.className&&a.className.match(O)};if(e.empty)tb([]);else if(e.adNodes)tb(e.adNodes);else{var d=e.wrapperNode||i.getElementById(e.adId);if(!d&&!e.searchNodes)bb("onDomReady: Could not find the wrapper node",e.adId),tb([]);else{var f=e.searchNodes;f||(f=d.className.indexOf("byburt_before_adtag")!==-1?Oc(d,a,c):[d]);var g=["serving-sys.com"],j=Fb(Jc(f,["SCRIPT"],!0),function(a){return Fb(g,function(b){return a.src&&a.src.match(b)?{name:b,src:a.src}:!1})});if(j){var k=Ic(f),l=k[k.length-1];l.tagName==="EMBED"&&l.parentNode.tagName==="OBJECT"&&(l=l.parentNode);if(l.tagName==="OBJECT"){tb([l]);return}bb("Mediamind: "+j.name,j.src)}b.adNodeFinder.find(f,tb)}}};cb("richTracker",function(){e.onMessage&&(typeof e.onMessage=="string"&&(e.onMessage=h[e.onMessage]),x.register(e.onMessage));var a,d=L();e.pingTimes&&(Z=e.pingTimes);if(!e.mediaKey||e.mediaKey.length!==12){bb("richTracker: Invalid media-key");return}var j=function(){typeof e.adId=="undefined"&&(e.adId=M+k+"_"+d,k++),e.noAroundTags=!0,e.enclosedCallback&&(e.noAroundTags=!1,e.callback=e.enclosedCallback),e.callback&&typeof e.callback=="string"&&(e.callback=h[e.callback]),e.placementName&&(h[c]=h[c]||{},h[c][e.placementName]=e.adId);if(e.callback&&typeof e.callback=="function"){var b=function(a){var b=a,c=e.clickEscapes-1,d=h.unescape;c<0&&(d=h.escape,c=-c);for(var f=0;f<c;f++)b=d(a);return b},j=!m.crazyScriptOrder||e.empty,l=function(a){return nd("span",N,a)};e.noAroundTags||i.write(l(e.adId));var o=function(){return nd("span",O)},p=md(h,w,"",{},L(),B.getPageId(),B.getUserId(),J,e);e.callback(d,e.adId,a,b(e.click)||"",p),e.noAroundTags||(j?i.write(o()):(i.write('<script type="text/javascript">window.'+n+" = { counter: "+P+', url: "'+f.CONST.afterAdUrl+'", callback: function() { if (window.'+g+") { document.write(window."+g+"); window."+g+' = null; } document.write("<span style=\\"display:none;\\" class=\\"'+O+'\\"></span>"); } };</scr'+"ipt>"),i.write('<script type="text/javascript" src="'+f.CONST.afterAdUrl+'"></scr'+"ipt>")))}if(!Q())return-1},l=function(){if(e.placementName===undefined)return bb("Must supply placementName for RFM ads"),-1;if(e.placementKind===undefined)return bb("Must supply placementKind for RFM ads"),-1;j()},o=function(){e.rfa=!0;if(!e.apiKey||e.apiKey.length!==12)return bb("richTracker: Invalid API-key"),-1;j()},p=function(){b.page=e;if(!Q())return-1},q={ad:l,rfa:o,page:p},r=q[e.type];if(r){var s=q[e.type]();if(s==-1)return}b.ready.onDomReady(function(){cb("onDomReady",function(){h.setTimeout(function(){var a={page:ob,ad:ub,rfa:ub,event:qb,sync:rb,volatileSync:sb};if(!a[e.type])throw"No action for invocation type: '"+e.type+"'";a[e.type]()},1)})})});var vb={ad:{visibility:_,visibilityUpdate:V.register}};return{exposed:{visibility:_,messageObserver:x},config:e}};h[e]=function(a){b.request.get(a)};var p=td(h,b.request,b.idGenerator,b.richId),q=function(a){return a.test(i.domain)};return function(a){var c=function(a,c){var d=o(a,c);b.pushTracker(a,d)};a.noCookies||Fb(lb,q)?(a.noCookies=!0,p(a,function(b){c(a,b)})):c(a)}},zd=function(a,b){var c=function(c,d){bd(c,function(){cd(a,b,c,function(){d(c)})})};return{load:c}},Ad=function(a,b,c){var d=function(a){return Gb(a,function(a){return!(a.tagName==="IMG"&&a.width+a.height<3)})},e=function(a){return Gb(a,function(a){return a.nodeType!==8})},f=function(a,b,c){var d=function(){c([],"empty")},e=Jc(a,["DIV"],!0);if(e.length>0)for(var f=0;f<e.length;f++)if(e[f].className=="openx_textblock")return c([e[f]]);if(b.length===1&&b[0].tagName==="IMG")return d();var g=Jc(a,["SCRIPT"]);if(g.length===1&&g[0].src&&g[0].src.match(/openx/i)&&e.length===0)return d();var h=Hc(a);if(e.length===0&&a.length-g.length===h.length&&!Ab(h,function(a){return a.innerText||a.textContent||id(a)}).join("").match(/[a-z0-9]/gi))return d();var i=function(){var a=Ab(e,function(a){return a.textContent||a.innerText}).join("").replace(/\W/gi,"").length;if(a===0)return!1;var b=Ab(g,function(a){return a.textContent||a.innerText}).join("").replace(/\W/gi,"").length;return a>b};if(g.length>0&&!i())return d();var j=Gb(a,function(a){return a.tagName});j.length===0?c([],"No real nodes found: "+Ab(a,id).join("\n")):c(j)},g=function(a,g){a=e(a);var h=Jc(a,b,!0),i;h=Gb(h,function(a){return i&&i.tagName==="OBJECT"&&a.tagName==="EMBED"&&a.parentNode===i?!1:(i=a,!0)}),c(h,function(b){var c=d(h);c.length==2&&c[0].tagName=="OBJECT"&&c[1].tagName=="EMBED"?g([c[0]]):c.length>=1?g(c):f(a,h,g)})};return{find:g}},Bd=function(a){var b=function(b,c){if(b&&!/^[A-Za-z0-9]*$/.test(b))throw new Error("Invalid seed-parameter: "+b);var d=b||"";c=c||12;while(d.length<c)d=Math.floor(Math.pow(36,5)*a()).toString(36)+d;var e=d.substring(d.length-c).toUpperCase();if(!/^[A-Z0-9]*$/.test(e))throw new Error("Invalid id generated: "+e);return e},c=function(){var a=new Date,c=Math.floor(a.getTime()/1e3).toString(36).toUpperCase(),d=b("",6),e=c+d;if(!/^[A-Z0-9]*$/.test(e))throw new Error("Invalid id generated from time: "+e);return e};return{generateID:b,generateIDFromTime:c}},Cd=function(a,b,c){var d=function(){if(!a[L]){var b=c.generateIDFromTime();a[L]=b}return a[L]},e=function(){var a;return function(){return a?a:(a=b.get(p),a||(a=c.generateIDFromTime()),b.set(p,a),a)}}();return{getPageId:d,getUserId:e}},Dd=function(a,b,c,d){var e=Yb(a),f=d,g=!1,h,i=0,j=0,k={},l=nc(),m=nc(),n=function(a){i=0,g||(j=0,g=!0,l.invoke(c(),a))},o=function(b){m.invoke(c(),b),g&&(g=!1,h!==undefined&&a.clearTimeout(h))},p=function(){h!==undefined&&a.clearTimeout(h),h=a.setTimeout(function(){j+=f[i]*1e3,o({type:"timeout",value:j}),i<f.length-1&&i++,p()},f[i]*1e3)},q=function(a){var b=a.type,c=k[b]===undefined;k[b]=!0;if(b=="mousemove"&&e.oldIE&&c)return;if(b=="focus"&&e.browser==="firefox"&&c)return;if(b=="resize"&&e.mobileWebkit&&c)return;g||n(a),p()},r=function(a){return e.browser==="msie"?a.document:a},s=function(b){var c=b,d=b.document,f=r(b),g=function(a,c){Dc(a,c,function(){var a={type:c,sourceFrame:b};q(a)})};g(f,"mousemove"),c===a&&g(c,"focus"),g(d,"keydown"),g(d,"mousedown"),g(c,"resize"),g(c,"mousewheel"),g(c,"DOMMouseScroll"),g(c,"touchmove"),e.mobileWebkit&&g(c,"scroll"),c===a&&Dc(c,"blur",function(){var a={type:"blur",sourceFrame:b};o(a)})};zb(b,s);var t=function(){return g},u=[];l.register(function(a,b){u.push({type:"active",time:a,event:b})}),m.register(function(a,b){u.push({type:"passive",time:a,event:b})});var v=function(){return u};return{getHistory:v,addFrame:s,isActive:t,onActive:l.register,onPassive:m.register}},Ed=function(a){var b=a.document,c=b.documentElement,d=b.body,e={},f={},g=[],h=Yb(a),i=function(){var a=1;return function(){return a++}}(),j=function(b,c,d,h,j){var k=[];h||(h=a);var l,m,n=function(){return typeof l=="undefined"&&(l=c()),l};j||(j=function(a){l=undefined}),Dc(h,d,function(a){zb(g,function(a){var b=f[a];b(d)}),zb(k,function(a){var b=f[a];b()}),j(a)}),e[b]=function(){return n()},e[b].attachEvent=function(a,b){return b||(b=i(),k.push(b)),f[b]=a,b}};e.attachEvent=function(a,b,c){return e[a].attachEvent(b,c)},e.attachWindowEvent=function(a,b){return b||(b=i(),g.push(b)),f[b]=a,b};var k=c.clientTop;k===undefined&&(k=d.clientTop),k===undefined&&(k=0);var l=c.clientLeft;l===undefined&&(l=d.clientLeft),l===undefined&&(l=0),j("dimension",hc(sc,null,[a]),"resize",a),j("scroll",hc(tc,null,[a]),"scroll",a);var m=!0;if(a.navigator.appVersion)if(h.browser!=="msie"){if(h.browser==="safari"){var n=a.navigator.appVersion.match(/Version\/([\d\.]+)/);n&&n[1]<"5.1"&&(m=!1)}}else m=!1;return e.elementGeo=function(a){var b=a.tagName;m&&b==="OBJECT"&&(a=Rc(a,"EMBED")||a);if(!a.getBoundingClientRect)throw a.tagName+" has no getBoundingClientRect";var c=a.getBoundingClientRect(),d=e.scroll(),f=c.top+d.y-k,g=c.left+d.x-l,h=c.width,i=c.height;return h===undefined&&(h=a.offsetWidth),i===undefined&&(i=a.offsetHeight),{x:Math.round(g),y:Math.round(f),w:Math.round(h),h:Math.round(i)}},e.getPageDimension=function(){return vc(b)},e.getFrames=oc(function(){return Uc(a)}),e.getTopFrame=oc(function(){return Vc(a)}),e.isCrossDomain=oc(function(){return e.getTopFrame()!=a.top}),e.getWindow=function(){return a},e},Fd=function(a){var b={},c=1,d=function(){return c++},e=function(c){var e=c[a];if(e)return b[e];var f={nodeKey:e,cacheKey:a};return e=d(),c[a]=e,b[e]=f,f};return{getDataFromNode:e}},Gd=function(a,b,c){var d=function(d,e,f){var g="jsonpburt"+c.generateIDFromTime();a[g]=e;var h=Zb(a.document,d),i="?";if(h.search||d.match(/\?/))i="&";b.get(d+i+"jsonp"+"="+g,f)};return d},Hd=function(a,b,c){var d=function(d){var e;return a!=d.major?e=a<d.major:b!=d.minor?e=b<d.minor:c!=d.patch?e=c<d.patch:e=!1,e};return{major:a,minor:b,patch:c,lt:d}};Hd.parse=function(a){var b=a.replace(/^[^0-9]/g,"").split(".");if(b.length!=3)throw"Invalid version string: "+a;return Hd.apply(null,Ab(b,parseFloat))};Id=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&c!=="type"&&b.push("    "+c+": "+vd(a[c]));return b.join(",\n")},Jd={scriptTag:function(a){return['<script type="text/javascript">'].concat(a()).concat(["</script>"])},apiPushInvoke:function(a,b,c,d){var e=b.window||"window",f=e+"."+K;return[f+" = "+f+" || [];",f+".push({","  version: '"+a+"',","  invoke: {","    type: '"+c+"',"].concat(d()).concat(["  }","});"])}},Kd=function(a,b,c){var d=c,hostProtocol=a.protocol,e=a.window,f=e.escape,g=e.document,h=2,i=e.unescape,j=function(a){return a.childNodes?Ic(a.children||a.childNodes):[]},k=function(a,b,c){var d=function(b){var c=a.match(b);return c?{index:c.index,length:c[0].length}:{index:-1}};for(;;){var e=d(new RegExp("[\\n\\r]?<"+b+"[^>]*>","i")).index,f=d(new RegExp("[\\n\\r]?</"+b+"\\s*>[\\n\\r]?","i"));if(e===-1||f===-1||e>f.index)break;var g=a.substring(e,f.index+f.length);a=a.replace(g,""),c(g)}},l=function(a){var b="";return k(a,"script",function(b){a=a.replace(b,"")}),k(a,"noscript",function(a){b+=a}),b},m=function(a){var b=[],c=0;k(a,"script",function(d){b.push(d),a=a.replace(d,"#{byburt_script}"+c++)}),k(a,"noscript",function(b){a=a.replace(b,"")});for(var d=0;d<b.length;d++)a=ub(a,"#{byburt_script}"+d,b[d]);return a},n=function(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=typeof d.match=="string"?a.indexOf(d.match)>0:a.match(d.match);if(e){var f=typeof d.transformer=="object"?d.transformer:[d.transformer],g=null;for(var h=0;h<f.length;h++){g=f[h].call(d,a,e);if(typeof g!="undefined"&&g!==null)return g}}}},o=function(a,b){var c=[],d,e=a,f=5;d=e.match(/<scr.{0,7}ipt[^>]*src=(["']?)([^"'> ]+)(\1|>)/i)||e.match(/<scr.{0,7}ipt[^>]*src=(["']?)(.+?)(\1|>)/i);while(d&&--f>0)c.push(d[2]),e=e.replace(d[0],""),d=e.match(/<script[^>]*src=(["']?)([^"'> ]+)(\1|>)/i);var g=[],h;for(var i=0;i<c.length;i++){var j=c[i];if(j){var k=n(j,b);k&&g.push([j,k])}}if(g.length>0){var l=a;for(var m=0;m<g.length;m++)l=ub(l,g[m][0],g[m][1]);return l}},p=function(a,b,c,f){if(a.match(/burt_noclick/gmi))return null;var g=/^http/.test(b)?"":e.location.protocol,h=function(a,h){h=h||{},!h.noClickUrl&&f.clickUrlPrefix&&(a=f.clickUrlPrefix+(a||""));var i=c.sessionId||f.sessionIdValue;return md(e,g+b,a,h,i,d.pageId,d.userId,J,c)},i,k,l;if(/ADM_PL.*clk.*External click-tracking here/.test(a)){i=a.match(/ADM_PL.*clk\:([^}]*)/);if(i)return ub(a,i[1],"'"+h()+"'")}var m=a;if(a.match(/_version/)){var p=/^<script[^>]+><!--_version=10;\/\/--><\/sc[^>]+><script[^>]+><!--_version=11;\/\/ --><\/sc[^>]+><script[^>]+><!--[^<]+MSIE 3[^<]+<IFRAME.*\/\/--><\/scr[^>]+>/i;m=a.replace(p,"")}var q=Gc(e,m);if(q&&(q.length==1||q.length==2&&q[1].tagName=="IMG")&&q[0].tagName=="A"){var r=j(q[0]);if(r.length==1&&r[0].tagName=="IMG"){var s=r[0];try{return ub(a,new RegExp('href="([^"]*)"',"i"),function(a,b){if(!b.match(/^https?/i))throw"Relative url";return'href="'+h(b)+'"'})}catch(t){return null}}}var u=function(a,b){return function(c,d){var e=a.test(tb(c));if(e)return c=ub(c,a,function(){var a=Array.prototype.slice.call(arguments),c=function(b,c){return a[parseFloat(c)]||""},d=(b.before||"").replace(/\$(\d)/,c);return d+=h(b.urlGroup?a[b.urlGroup]:null,b.urlOptions),d+=(b.after||"").replace(/\$(\d)/,c),d}),c}},v=function(a,b){return b.before=(b.before||"")+"window.byburt_click('",b.after="');"+(b.after||""),u(a,b)},w=[{name:"emediate",match:/^http:\/\/ad([0-9]+)\.emediate\.dk\/eas([^\;]*)/,transformer:[u(/(EASClick[0-9]?=)([^\;]*)(\?|\;|$)/,{urlGroup:2,before:"$1",after:"$3"}),u(/\/eas([^\;]*)/,{before:"$1;click=",after:""})]},{name:"doubleclick",match:/^http:\/\/ad([\-a-z\.]*).doubleclick.net(\/[^\/]+)?\/adj\/([^\;]*)/,transformer:[u(/(click[0-9]?=)([^\;]*)(\?|\;|$)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(adj\/.*\??)/,{before:"$1;click0=",after:""})]},{name:"adform",match:/http:\/\/track.adform.net\/adfscript\/\?bn=[0-9]+/,transformer:[u(/(\;click\=)([^;\"\'\>]*)(.*)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(adfscript\/\?bn=[0-9]+)/,{before:"$1;click=",after:""})]},{name:"atdmt",match:/http\:\/\/view.atdmt.com(.+?)/,transformer:[u(/(click=)(.*)$/,{urlGroup:2,before:"$1",after:"",urlOptions:{escapedAmps:!0}}),u(/(view.atdmt.com.+?)(\?)?$/,{before:"$1?click=",after:"",urlOptions:{escapedAmps:!0}})]},{name:"mediaplex alt",match:/http\:\/\/altfarm.mediaplex.com\/ad\/js\/.*mpvc.*/g,transformer:[u(/(mpvc\=)(.+\?)/,{urlGroup:2,before:"$1"})]},{name:"mediaplex ad",match:/http\:\/\/adfarm.mediaplex.com\/ad\/js\/.*mpvc.*/g,transformer:u(/(mpvc\=)/,{before:"$1",urlOptions:{escapes:2}})},{name:"de17a",match:/http:\/\/de17a.com\//,transformer:u(/(\?url=)(.*\.click)/,{urlGroup:2,before:"$1"})},{name:"openx",match:/http:\/\/openx\.bonniertidskrifter\.se\/www\/delivery\/ajs.php.*/g,transformer:u(/(ajs.php[^'\"]*)$/,{before:"$1&amp;ct0=",after:"",urlOptions:{escapeAll:!0}})},{name:"serving-sys",match:/bs\.serving-sys\.com\/BurstingPipe.+?ncu=/mig,transformer:[u(/(ncu=\#\{DOLLAR\}\#\{DOLLAR\})(.+?)(\#\{DOLLAR\}\#\{DOLLAR\})/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapedAmps:!0,escapeAll:!0,escapeClickUrl:!0}}),u(/(ncu=)/,{before:"$1$$",after:"$$",urlOptions:{escapedAmps:!0,escapeAll:!0,escapeClickUrl:!0}})]},{name:"adtech",match:/\/addyn([\/|\|])\d+.\d+\1/,transformer:[u(/(rdclick=)(.+?)(:|$)/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapeClickUrl:!0}}),u(/(.+)($)/,{before:"$1;rdclick=",after:"$2"})]},{name:"advertserve",match:/\.advertserve\./,transformer:[u(/(cturl=)(.*?)($)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(advertserve.+?)($)/,{before:"$1&cturl=",after:"$2"})]}],x=n(a,[{name:"mads",match:/eu2\.madsone\.com/,transformer:[u(/(.*)(http:\/\/eu2\.madsone\.com\/click\/.*\/index.php)(.*)/,{urlGroup:2,before:"$1",after:"$3"})]},{name:"TFSMFlash",type:"other",match:"var TFSMFlash_SWFCLICKVARIABLE",transformer:u(/(var TFSMFlash_SWFCLICKVARIABLE)/,{before:'TFSMFlash_OASCLICK = "',after:'" + encodeURIComponent(TFSMFlash_OASCLICK);\n$1',urlOptions:{escapedAmps:!0}})},{name:"adtoma",type:"other",match:/<a.*onclick\s*\=\s*\"window\.Fusion\.countAdvertEvent\(\d+.*<\/a\>/,transformer:v(/(onclick=")([^\"]*")/,{before:"$1",after:"$2",urlOptions:{noClickUrl:!0}})},{name:"eyewonder",type:"other",match:/\[ewclickthru\]/gmi,transformer:u(/(\[ewclickthru\])/gmi,{after:"$1",urlOptions:{noClickUrl:!0}})},{name:"tradedoubler",match:/anet\.tradedoubler\.com\/anet.+?preurl\((.+?)\)/,transformer:u(/(preurl\()(.+?)(\))/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapeClickUrl:!0}})},{name:"FusionGet",match:"window.Fusion.getAdvertEventUrl",transformer:function(a,b){var c=u(/(window\.Fusion\.getAdvertEventUrl.+?\?url=)/g,{before:"$1",urlOptions:{escapeAll:!0}})(a,b);if(c){var d=o(c,w);return d||c}return null}},{name:"Adtech document write",match:/document.write.+adtech/mig,transformer:[u(/(adtech.+?rdclick=)(.+?)(\"|')/mig,{before:"$1",urlGroup:2,after:"$3"}),u(/(adtech.+?\;grp='\+window.adgroupid\+'\;misc='\+new Date\(\)\.getTime\(\)\+')/mig,{before:"$1;rdclick="})]},{name:"admeta",match:/http:\/\/ai.admeta.com\/adserve\/public/,transformer:[u(/(\?url=)([^&]*)(&)/,{urlGroup:2,before:"$1",after:"$3",urlOptions:{escapes:2}}),u(/(&urlPrefix=)(.+?\?)(&[^\"]+)/,{urlGroup:2,before:"$1",after:"",urlOptions:{escapedAmps:!0,escapes:1}})]},{name:"doubleclick iframe",match:/<iframe\s+src\=(['"])http:\/\/ad([\-a-z\.]*).doubleclick.net(\/[^\/]+)?\/adi\/([^\;]*)/,transformer:[u(/(click[0-9]?=)([^\;]*)(\?|\;|\"|\'|$)/,{urlGroup:2,before:"$1",after:"$3"}),u(/(adi\/[^\'\"]*\??)([\"\'].+)/,{before:"$1;click0=",after:"$2"})]},{name:"VG flash",match:/swf ?: ?.+?flash\.vg\.no/gm,transformer:function(a,b){return ub(a,/(flashvars ?: ?")(.+?)(")/,function(a,c,d,e){var f=u(/(clickTAG[0-9]?=)(.+?)(&|$)/gi,{before:"$1",urlGroup:2,after:"$3",urlOptions:{escapeAll:!0}}),g=f(d,b);if(g)return c+g+e})}}]);return x?x:(x=o(a,w),x)},q=function(a){return a===""?!1:a.match(/cheapoQ/)?!1:/\AdPlayTracking\d+langstner/.test(a)?!1:a.match(/biowebb/)?!1:4===(a.match(/document\.write\('<script type="text\/javascript" src="http:\/\/oas-se\.bonnierdigitalservices\.com\/3\/' \+ at_page \+ '\/\d+/g)||[]).length?!1:a.match(/div.+?class=\"at_ad\".+?at_k2a[1-4]/img)?!1:!0},r=function(a){var b,c;return a.currentStyle&&a.currentStyle.width&&a.currentStyle.height?(b=parseInt(a.currentStyle.width,10),c=parseInt(a.currentStyle.height,10)):(b=a.getAttribute("width"),c=a.getAttribute("height")),{width:b,height:c}},s=function(a,b){var c=Gc(e,a);if(c){if(c.length==1&&c[0].tagName=="A"){var d=j(c[0]);if(d.length==1&&d[0].tagName=="IMG"){var f=r(d[0]);if(f.width==1&&f.height==1)return!0}}if(c.length==1&&c[0].tagName=="DIV"&&c[0].className=="byburt_empty")return!0}return/eu2\.madsone\.(com|eu)/.test(a)&&!/\/click/.test(a)?!0:/<script.*navigator\.appversion\.indexof\(\'msie 3\'\).*iframe.*oas_url.*realmedia\/ads\/click_nx\.ads.*(<a.*empty\.gif.*<img.*width=1.*height=1.*)<\/a/i.test(a.replace(/\x0a|\x0d/g,""))||/<a.*?href=\"http:\/\/oas.*?\.gif.*?<img.*?width="*1"*.*?height="*1"*.*?/i.test(a.replace(/\x0a|\x0d/g,""))?!0:null},t=function(a,b,d){if(!b||!d)throw"Params and config required";if(typeof a=="undefined")throw"Must supply an ad tag";var e=!1,f=b.noscriptIgnore?null:l(a);a=m(a);var g,h=s(a);return h?(d.empty=!0,d.clickEnabled=!1):!b.logurl||b.noClick?d.clickEnabled=!1:(g=p(a,b.logurl,d,c),g?d.clickEnabled=!0:(d.clickEnabled=!1,e=!0,c.handleParsefail(a,b,d,c))),{adaptedTag:g,noscriptPart:f,config:d}};return{adapt:t}},Ld=function(a){var b=$c(window,{domain:a}),c="richDomainMigrated";if(!b.get(c)){var d=["richUserId","richSyncId","burt_test"];zb(d,function(a){var c=b.get(a);c&&b.set(a,c)}),b.set(c,"1")}},Md=function(a,b,c,d,e,f){var g=[],h=null,i,j=!1,k=function(){r=[],g=[],j=!0};f=f||{};var l=c.maxRequestLength,m=d,n=f.errorCallback||k,o=function(a){c.get(a.url,function(){p(a)})},p=function(a){a.load(),g.length>0?o(g.shift()):h=null},q=function(a){h?g.push(a):o(a)},r=[],s=function(a){a.finishedAt=Ac(),a.callback&&a.callback(a)},t=function(){if(!b.ready)return;var a=r;r=[],zb(Mb(a,"url"),function(a,b){if(b){var c=b+"?",d=[];zb(a,function(a){d.push({msg:a.fragment,load:function(){s(a)}})});var e=Nb(d,l-c.length,function(a){return a.msg.length+1});zb(e,function(a){q({url:c+Ab(a,fc("msg")).join(";"),load:function(){zb(a,function(a){a.load()})}})})}})},u=function(c){if(j)return;c.enqueuedAt=Ac();var d=l-(c.url+"?").length,f=ld(c.kind,c.params);if(f.length>d)throw new Error("Fragment was too large");c.fragment=f,r.push(c);if(r.length>=m)t(),i&&(a.clearTimeout(i),i=null);else if(!i&&b.ready){var g=(e.length==1?e[0]:e.shift())*1e3;i=a.setTimeout(function(){t(),i=null},g)}};return b.onDomReady(t),{enqueueMessage:u,disable:k,flush:t}},Nd=function(a){var b=Yb(a),c=!1,d=[],e=a.document,f=function(){if(!e.body){setTimeout(f,13);return}for(var a=0;a<d.length;a++)d[a]();d=[]},g=function(){if(e.addEventListener){var b=function(){e.removeEventListener("DOMContentLoaded",b,!1),f()};e.addEventListener("DOMContentLoaded",b,!1),a.addEventListener("load",f,!1)}else if(e.attachEvent){var c=function(){e.readyState==="complete"&&(e.detachEvent("onreadystatechange",c),f())};e.attachEvent("onreadystatechange",c),a.attachEvent("onload",f);var g=!1;try{g=a.frameElement===null}catch(h){}if(e.documentElement.doScroll&&g){var i=function(){if(d.length===0)return;try{e.documentElement.doScroll("left")}catch(a){setTimeout(i,1);return}f()};i()}}},h={ready:!1};g(),h.onDomReady=function(a){e.readyState==="complete"||h.ready?a():d.push(a)},h.onDomReady(function(){h.ready=!0});var i=[];h.loaded=!1;var j=function(){h.loaded=!0;for(var a=0;a<i.length;a++)i[a]()};return b.browser=="msie"?h.onDomReady(j):Dc(a,"load",j),h.onDomLoad=function(a){h.loaded?a():i.push(a)},h},Od=function(){var a=0;return function(b,c,d){var e=function(){var e=[],f=function(a){a&&a.toString&&typeof a.toString=="function"&&(a=a.toString()),e.push(a)},g=function(a){for(var b in a)typeof a[b]!="function"&&f(a[b])},h=function(a,b){zb(b,function(b){var c=a;zb(b,function(a){try{c=c[a]}catch(b){}}),f(c)})};h(b,[["location","href"],["document","referrer"]]);var i=b.navigator;h(i,[["userAgent"],["language"],["product"],["appVersion"],["onLine"],["platform"],["vendor"],["appCodeName"],["cookieEnabled"],["geolocation"],["appName"],["productSub"],["vendorSub"]]),i.plugins&&zb(i.plugins,g),i.mimeTypes&&zb(i.mimeTypes,g),b.screen&&g(b.screen),b.history&&f(b.history.length),b.Math&&f(b.Math.random()),f(d),f(++a),f((new Date).getTimezoneOffset()),f(c),f(I);var j=Ac();f(j),f(j-c);var k=e.join("|"),l=ad(_c(k));return l},f;return function(){return f||(f=e()),f.random()}}}(),Pd=function(a,b){var c=Yb(a);return{CONST:{configCallbackIdentifier:E,persistentReferrerIdentifier:d,syncCookieIdentifier:q,fullVersion:I,versionString:J,PARAMS:nb},callOnceFactory:mc,CookieJar:$c,Persist:sd,eachPair:Eb,each:zb,clamp:Xb,browser:c.browser,attachEvent:Dc,detachEvent:Ec,findFlashByObjectCallback:qd,paramPresent:$b,getVisibilityForHelmetFactory:zc,getBoundingBoxForBoxes:uc}},Qd=function(a){return Dc(window,"message",function(b){var c=function(a){var b=document.createElement("a");b.href=a;var c=b.host.split(":")[0];if(!c)return!1;var d=c.split(".").slice(-2).join("."),e=["localhost","burthub.com","burthub.local","burthub.dev","burtcorp.com","richmetrics.com","byburt.com"];return Sb(e,d)!=-1};if(c(b.origin)&&b.data.slice(0,14)==="rich-inject-js"){var d=b.data.slice(15);a.get(d)}}),Dc(window,"load",function(a){window.top.postMessage&&window.top!=window&&window.top&&window.top.postMessage("rich-tracking","*")}),{}},Rd=function(a,b,c,d,e,f){var g=a.window,h=g.document,i=Yb(g),j=nc();j.startTime=(new Date).getTime(),j.currentTime=function(){return Ac()-j.startTime},j.idGenerator=Bd(e);var k=ib+j.idGenerator.generateID("",12);j.nodeCache=Fd(k),j.getObserver=function(a){var b=j.nodeCache.getDataFromNode(a);return b.observer=b.observer||Ed(a)},j.windowObserver=j.getObserver(g),j.frames=j.windowObserver.getFrames(),j.observers=Ab(j.frames,j.getObserver),j.ready=b,j.transport=c,j.request=d,j.random=e,j.xFrame=f;var l=a.CONST.cookieDomain;j.cookieJar=$c(g,{domain:l}),j.persister=sd(g,j.cookieJar),j.richId=Cd(g,j.persister,j.idGenerator);var m=$c(g,{domain:l,expires:kb}),n=rc(m,q),o=a.CONST.syncUrl;j.sync=ed(g,j.idGenerator,d,n,{syncUrl:o}),j.burtSyncHooks=nc(),j.onBurtSync=j.burtSyncHooks.register,j.jsonp=Gd(g,d,j.idGenerator),j.interactionObserver=ud(),j.activity=Dd(j.windowObserver.getTopFrame(),j.frames,j.currentTime,fb),j.nodeLoader=zd(g,i),j.adNodeFinder=Ad(g,hb,j.nodeLoader.load),j.jStorage=xd;var p=yd(j,a,g);return j.ads=[],j.trackers=[],j.pushTracker=function(a,b){(a.type==="ad"||a.type==="rfa")&&j.ads.push(b),j.trackers.push(b)},j.debug=function(){g.console&&g.console.log&&j.register(function(a,b){g.console.log(a,b,Vb.stringify(b))})},j.getMessagesOfType=function(a,b){return Gb(j.buffer,function(c){if(a===c[0])return b&&b.apply(null,c),!0})},j.getMessagesByType=function(a){var b={};return zb(j.buffer,function(a){var c=a[0];b[c]||(b[c]=[]),b[c].push(a[1])}),b},j.trackerInvoker=function(a){var b={page:!0,ad:!0,event:!0,eventListener:!0,rfa:!0,sync:!0,volatileSync:!0};b[a.type]&&p(a)},j},Sd=function(a,b){b=b||{};var c=b.protocol||"http",d=b.host,e=b.cookieDomain,f=a[K],g=function(){var b=f,c=nc();return c.push=c.invoke,c.instances={},c.register(function(a){if(ob(a.version))throw"API calls must have version";if(ob(a.invoke))throw"API calls must have invoke";if(ob(a.invoke.type))throw"API calls must have invoke type"}),f=a[K]=c,b};if(!f||Rb(f)){var h=g()||[];zb(h,f.invoke)}var i=f.instances[I];if(!i){i=f.instances[I]=nc(),i.global=f,i.fullVersion=I,i.version=Hd.parse(i.fullVersion),f.register(function(a){a.version===I&&i.invoke(a.invoke,a)});var j={},k=function(a){return j[a]||(j[a]=nc()),j[a]};i.registerComponent=function(a,b,c){i[a]||(i[a]=b.call(null,i),c&&c(i[a]),k(a).invoke(i[a],i))},i.get=function(a,b){k(a).register(b)};var l=b.sourceHost||"measure.richmetrics.com",m=b.sslSourceHost||"d3q6px0y2suh5n.cloudfront.net",n=c+"://"+(d||(c==="https"?m:l));i.CONST={protocol:c,agentBaseURL:n,afterAdUrl:n+"/recursive.js",syncUrl:jb,cookieDomain:e},i.window=a,i.getAgentURL=function(){return i.CONST.agentBaseURL+"/agent/rich-v"+i.fullVersion+".js"}}if(!f.latest||(!f.latest.version||!f.latest.version.lt)&&i.version||f.latest.version.lt(i.version))f.latest=i;return i.register(function(a){a.type==="context"&&a.callback(i)}),i},Td=function(a,b,c,d){var e=a.window,f=Yb(e),h=e.escape,i=$c(e),j=sd(e,i),k=Bd(b),l=Cd(e,j,k),m=2,o=0,p={rfm:!0,agentVersion:a.fullVersion,noAgent:!0,noscriptIgnore:!0,logurl:c.mediaLogUrl};p=rb(p,d);var q={pageId:l.getPageId(),userId:l.getUserId(),defaultParams:p,handleParsefail:function(a,b,c,d){if(e.byburt_developmentMode)throw"PARSEFAIL: "+c.sessionId+" "+a}},r=function(a){return nd("span",N,a)},s=function(){return nd("span",O)},t=function(a){return a.replace(/(['"])<\/script>(['"])/g,"$1</scr$1 + $1ipt>$2")},u=function(a){return a},v=function(b,c){return Jd.scriptTag(function(){return Jd.apiPushInvoke(a.fullVersion,b,"ad",function(){var a=[];return a.push(Id(c)),a})}).join("\n")},w=function(a){return(a.match(/class="at_ad"/mg)||[]).length===4&&a.match(/Annonstorget/i)},x=Kd(a,b,q),y=function(b,d,i){try{i=rb(c.getAdConfig(i.placementName),i),d=rb(p,d);if(!i.mediaKey)throw"Must supply a media key (RFM)";if(w(b)){var j=/<div class=\"at_ad\" id=\"([a-z0-9_]+)\"(.+\n)+?.+<\/div>/gm,q=ub(b,j,function(a,b){var c=rb(i,{placementName:b,noAfterTag:!0});return y(a,d,c)});return q}i.sessionId=i.sessionId||k.generateIDFromTime(),i.adId=i.adId||M+ ++o+"_"+i.sessionId;if(!kd(l.getUserId(),i.sample))return b;var z=x.adapt(b,d,i),A=[];return A.push(r(i.adId)),A.push(t(z.adaptedTag||b)),!!i.noAfterTag||!!f.crazyScriptOrder&&!i.empty?A.push(""):A.push(s()),A.push(v(d,z.config)),!i.noAfterTag&&f.crazyScriptOrder&&!i.empty&&(A=A.concat(['<script type="text/javascript">window.'+n+" = { counter: "+P+', url: "'+a.CONST.afterAdUrl+'", callback: function() { if (window.'+g+") { document.write(window."+g+"); window."+g+' = null; } document.write("<span style=\\"display:none;\\" class=\\"'+O+'\\"></span>"); } };</scr'+"ipt>",'<script type="text/javascript" src="'+a.CONST.afterAdUrl+'"></scr'+"ipt>"])),u(A.join("\n"))}catch(B){if(d.raiseErrors||e.byburt_developmentMode)throw B;try{var C={av:m+"-adapt",eu:h(hd()),wn:h(i.sitename),ms:h("adapt: "+(B.message?B.message:B))};return a.get("transport",function(a){a.enqueueMessage({kind:"error",params:C,url:d.logurl})}),b}catch(D){return b}}};return y},Ud=function(a,b){var c=a.handler.window,d=a.handler.window.document,e=rb(a.config);b=b||{};var f=function(a){return b[a]||"absolute"},g=e.mediaLogUrl,h=function(b){a.handler.global.push({version:I,invoke:b})},i={},j=function(a,b,c){c=c||{};if(!c.empty&&!a)throw"Rich must supply a node";if(i[b])throw"Rich has already started tracking a ad for the placement: "+b;i[b]=a;var d=r(b,{wrapperNode:a});c&&(typeof c=="function"&&(c=c(a)),d=qb(d,c)),h(d)},k=function(a,b){b=b||{};var c=r(a);typeof b=="function"?b(c):c=rb(c,b),h(c)},l=function(a,b){n(null,a,rb({empty:!0},b||{}))},m=function(b,d,e,f){e=e||{},f=f||{},a.onReady(function(){var a=c.document.getElementById(b);if(a)n(a,d,e);else if(typeof f.onNotFound=="function")f.onNotFound(d,e);else{if(f.onNotFound!="empty"){if(f.onNotFound=="discard")return;throw"Rich could not find dom element with id: "+b}l(d,e)}})},n=function(a,b,c){if(!c.empty&&!a.tagName)throw"First argument must be a node";if(!b)throw"Rich you need to supply a placement name";typeof b=="function"&&(b=b(a)),j(a,b,c)},o=function(){zb(arguments,function(a){m(a,a)})},p=function(){var a=0;return function(){return a+=1,"placement_"+a}}(),q=function(a,b){var c=d.write,e=d.writeln,f=[];d.write=function(a){f.push(a)},d.writeln=function(a){f.push(a+"\n")},a(),d.write=c,d.writeln=e;var g=function(a){d.write(a)};b(g,f,f.join(""))};c.jQuery&&(c.jQuery.fn[z]=function(a){c.jQuery.each(this,function(b){n(this,a)})});var r=function(a,b){var c={type:"ad",clickEnabled:!1};return a&&(c.placementName=a,c.placementKind=f(a)),qb({},e,c,b)};return{captureWrite:q,trackById:m,track:n,trackPlacements:o,trackPlacement:k,placements:i,mediaLogUrl:g,getAdConfig:r}},Vd=function(a,b,c){if(a.byburt_disable)return;b.cookieDomain=b.cookieDomain||"."+b.siteName,Ld(b.cookieDomain),b.shortName=b.shortName||b.siteName.replace(".","-");var d=Ac(),e={sample:1,mediaLogUrl:"//"+b.shortName+".c.richmetrics.com/log",protocol:"http"};b=rb(e,b);var f={protocol:b.protocol,sourceHost:b.sourceHost,sslSourceHost:b.sslSourceHost,cookieDomain:b.cookieDomain},g=Sd(a,f);g.registerComponent("request",function(){return wd(a,db)}),g.registerComponent("random",function(){return Od(a,d)}),g.registerComponent("ready",function(){return Nd(window)}),g.registerComponent("injector",function(){return Qd(g.request)}),g.registerComponent("ready",function(){return Nd(window)}),g.registerComponent("lib",function(){return Pd(window,g.request)}),g.registerComponent("transport",function(){return Md(window,g.ready,g.request,_,bb)});var h=g.agent;g.registerComponent("agent",function(){return Rd(g,g.ready,g.transport,g.request,g.random,null)}),h||g.register(g.agent.trackerInvoker);var i=function(a){g.global.push({version:I,invoke:{type:"context",callback:function(b){b.get("ready",function(b){b.onDomReady(a)})}}})},j=function(a,c,d){g.global.push({version:I,invoke:rb(b,{type:"sync",syncType:a,syncConfig:c,syncCallback:d})})},k=function(d){if(a.burt_api.site)return;a.burt_api.site=g;var e={type:"page"};e=rb(b,e,c),g.global.push({version:I,invoke:e}),j("read",{provider:"cint"}),d&&jc(a,function(){d(kc)})},l=function(c,d){a.burt_api.push({version:I,invoke:rb(b,{type:"event",data:c,eventCallback:d})})},m=function(a,b){a.type="conversion",l(a,b)};return{handler:g,conversion:m,customEvent:l,config:b,onReady:i,sync:j,initialize:k}};Wd=jc(window,function(){var b,a=window.location.hostname.split(".")[0];if(a!="www")return a;b=window.location.pathname.split("/");if(b.length>=2&&b[1]==="finn")return b[2]===""?"frontpage":b[2];if(b.length>=2)return b[1]===""?"frontpage":b[1]});Xd=Vd(window,{mediaKey:"FINNEBDSCTTY",category:Wd,siteName:"finn.no"});Xd.initialize(function(){var a=Ud(Xd,{Right2:"relative"}),b=Td(Xd.handler,Xd.handler.random,a,{}),c={};window.byburt_setFrameElement=function(a){a.searchNodes=[c[a.placementName]]},Xd.handler.trackFinnAd=function(a,d){var f,e=Tc(a.doc);e.burt_api=window.burt_api,c[a.name]=e.frameElement;f={placementName:a.name||"unknown",beforeCallback:"byburt_setFrameElement"};return a.name=="Top"&&jc(window,function(){var c,d,a=window.FINN.webAds._getBanner("Top").plugin("contextData").keyvalues.split(";").map(function(a){return a.split("=")}),b=Hb(a,function(a,b){return a[b[0]]=b[1],a},{});b.kvuserid&&b.kvuserid!=="0"&&Xd.handler.invoke({type:"volatileSync",mediaKey:"FINNEBDSCTTY",siteName:"finn.no",syncConfig:{provider:"finn",defaultId:b.kvuserid}});c=window.FINN.webAds._getBanner("Top").plugin("contextData").segments,d=c.split("+");d=Qb(d),zb(d,function(a){Xd.handler.invoke({type:"volatileSync",mediaKey:"FINNEBDSCTTY",siteName:"finn.no",syncConfig:{provider:"finn_segment",defaultId:a}})})}),b(d,{},f)}})})()
;/*global document, window, console, jQuery, setTimeout, FINN */
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
      this.options  = options != null ? options : {};
    }

    Iframe.prototype.remove = function() {
      this.$wrapper.remove();
      return this;
    };
    
    Iframe.prototype.getUrl = function(src){
      var url     = F.webAds.iframeUrl || '/html/banner/webad.html';
      var sep     = url.indexOf('?') !== -1 ? '&' : '?';
      var refresh = src && src.indexOf('refreshWebAd') === -1 ? 'refreshWebAd=true&' : '';
      return url +  (sep + 'ver=' + IFRAME_VERSION + '&' ) + refresh + "#_" + this.name;
    };

  
    Iframe.prototype.makeIframe = function() {
      var div       = document.createElement('div');
      var innerDiv  = document.createElement('div');
      var i         = document.createElement('iframe');      
      innerDiv.className  = 'webad-inner';      
      var divClasses = ['webad', 'webad-'+this.name];
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
      this.iframe         = new Iframe(this.name, this.params);
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
      return (this[key] = value);
    };

    Banner.prototype.onload = function() {
      this.log(2, 'onload triggered on iframe');
      this.$webAd = this.iframe.$iframe.contents().find("#"+this.adContainer);
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
      //console.log('extracting size',this.name, w, h);
      this.log(2, 'Checking if valid size: '+w+'x'+h);
      if (this.isValidSize(w, h)) {
        if (this.retries === DEFAULTS.RETRIES && this.hasEmptyPixel()){
          return this.fail('pixel');
        }
        return this.pollForNewSize(w, h);
      }            
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
      if (!dontSetClass && this.iframe.$wrapper) this.iframe.$wrapper.addClass('webad-failed');      
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
      this.iframe.$iframe.css({ "height": this.height, "width": this.width}).attr('height', this.height).attr('width', this.width);
      this.resized = true;
      //console.log(this.name, 'resize', w, h, this.width, this.height);

      this.log(1, 'resized to height:' + this.height + ' and width:' + this.width);
      return this;
    };

    Banner.prototype.expose = function() {
      return $.extend({}, this.exposeObj, { banner: this });
    };

    Banner.prototype.injectScript = function(idoc, iwin) {
      if (typeof this.params.before === 'function'){
        this.params.before(this);
      }
      this.log(3, 'injectScript');
      this.doc = idoc;
      var ad = '<scr' + 'ipt type="text/javascript" src="' + this.url + '"></scr' + 'ipt>';

      // Only run the tag through 3rd party Burt Tracking if it has been loaded
      if (this.trackBurt && window.burt_api && window.burt_api.site && typeof burt_api.site.trackFinnAd === 'function') {
        ad = burt_api.site.trackFinnAd(this, ad);
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
			}
			catch (err) {
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
      this.log(2, 'Not valid if '+this.params.threshold+' is less than '+this.params.windowWidth);
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
      this.resolved   = false;
      this.active     = true;
      var $container = typeof this.container === 'string' ? jQuery("#" + this.container) : this.container;
      if ($container.size() <= 0) {
        this.fail('Missing valid container on '+this.name, true);
        return this;
      }
      this.log(3, 'Inserting iframe/banner');      
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
    
    Banner.prototype.plugin = function(name){
      var plugin = F.webAds.getPlugin(name);
      if (!plugin){ return plugin; }
      var args = Array.prototype.slice.call(arguments, 1);
      return plugin.apply(this, args);
    };
    
    return Banner;
  })();
  
  F.webAds.Banner = Banner;
  F.webAds.Iframe = Iframe;

}).call(this, FINN, jQuery);
;var FINN = FINN || {};

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
      banner.params.staticAvailableWidth = (availWidth-10) > banner.params.width ? (availWidth-10) : banner.params.width;;
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
    "Left1": {
      "extends": "normal",
      width: 240,
      threshold: 1050,
      height: 500,
      bodyClass: "has-dominant-campaign",
      done: fixLeftPosition
    },
    "Right1": {
      "extends": "normal",
      width: 240,
      threshold: 1025      
    },
    "Right2": {
      "extends": "normal",
      threshold: 1025,            
      sticky: true,
      width: 240,
      height: 500,
      before: setMaxWidth
    },
    "Right3": {
      threshold: 1025,                  
      "extends": "normal",
      width: 240
    },
    "Middle": {
      "extends": "tracking",
      width: 580,
      height: 400,
      threshold: 291,                  
      container: "banners-middle"
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
		"Inline1": {
			width: 320,
			container: "banners-inline1"
		},
		"Inline2": {
			width: 320,
			container: "banners-inline2"
		},
    "BottomLeft": { 
      "extends": "bottomads"       
    },
    "BottomMiddle": { 
      "extends": "bottomads" 
    },
    "BottomRight": { 
      "extends": "bottomads" 
    },
    "BottomRight2": {
      "extends": "bottomads"       
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
    "tracking": {
      "extends": "normal",
      trackingScriptUrl: "http://measure.richmetrics.com/rfm/finn-eval/rich-finn-eval.js"
    },
    "all": {
      backend   : "helios"
    }
  });

})(FINN, jQuery);
;var FINN=FINN||{};

(function(F, $){
  
  F.webAds = F.webAds||{};
  
  var MARGIN  = 10;
  var TIMER   = 15;
  
  function getBannersForHeight(list, height, index){
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
      this.iframe.$wrapper.css({
        position  : 'fixed',
        top       : this.stickyPos + "px"
      });
    });
  }
  
  function unsetSticky(list){
    if(!isSticky) return true;    
    isSticky = false;
    $.each(list, function(){
      this.log('de-activating sticky');      
      this.iframe.$wrapper.css({
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

    var list    = $webAds.map(function(i){ return F.webAds._getBanner($(this).data('webad')); });    
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
      var contentAndBanners = $(pageSelector).outerWidth() + 12 + 10 + result.maxWidth;
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
    
})(FINN, jQuery);;var FINN = FINN||{};

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
  //w.refreshFromServer     = refreshFromServer;    //TODO
  //w.refreshAllFromServer  = refreshAllFromServer; //TODO
  //w.renderWhenVisible     = renderWhenVisible     //TODO
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
  
  var eventMap = {};
  
  w.on = on;
  w.one = one;
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
    
  function refreshFromServer(){}// TODO
  function refreshAllFromServer(){}//TODO
  
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
    configMap[name][key]  = value;
    
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
      if (callback && typeof callback === 'function') callback(null, data.webAds);
    }, function(err){
      if (callback && typeof callback === 'function') callback(err, null);
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
    function loop(err){
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
    bannerMap[name].refresh();
    // .refresh command resets banner.resolved
    if (cb && typeof cb === 'function'){    
      insertCallback(name, cb);      
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
        if(!bannerMap[name]){
          return loop();
        }
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
  
  function removeAll(){
    for(var key in bannerMap){
      if (bannerMap[key]) bannerMap[key].remove();
    }
  }
  
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
    var name = idocument.location.hash.substring(2);
    var list = bannerMap[name].expose();
    $.each(list, function(k){ iwindow[k] = this; });
  }
  
})(FINN, jQuery);;var FINN = FINN||{};

(function(F, $){
    "use strict";
    F.webAds = F.webAds||{};

    var plugins = {};
    F.webAds.registerPlugin = function(name, plug){
        var plugin = {};
        plugin.run = plug.run||$.noop;
        if (typeof plug.init === 'function'){
            plug.init(plugin);
        }
        plugins[name] = plugin;
    };

    F.webAds.getPlugin = function(name){
        return (plugins[name].run||null);
    };

    F.webAds.registerPlugin('survey', {
        run: function(options, callback){
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
                this.plugin('overlayOld', options);
            }

        }
    });
    
    /* parameters made available for third party networks */
    F.webAds.registerPlugin('contextData', {
        init: function(){},
        run: function(callback){ 
            if (typeof callback === 'function'){
                callback(FINN.data.banner);
            } else {
                return FINN.data.banner;
            }            
        }
    });
    
    var url = "/finn/advertising/banner/api/adinbannerdemo.json";
    F.webAds.registerPlugin('getAdData', {
        init: function(plugin){},
        run: function(options, callback) {
          var banner = this;
          try {
            options = $.parseJSON(options);
          } catch(e){
            return handleResult({"error":true,"message":"first plugin argument/options hash is not valid JSON"});
          }
          //var params = { areaId : options.customer, orgid : options.area };
          var params = { 'BANNER_ORGGROUPREF' : "kjede_privatmegleren", 'BANNER_AREAID' : "20045" };
          var req    = $.getJSON(url, params);
          req.success(function(list){ handleResult({'list': list}); });         
          req.error(  function(){     handleResult({"error":true, "message": "request to server failed"}); });
          
          function handleResult(obj){
            //console.log('Passing to flash=>', obj, typeof obj);
            if (typeof callback === 'string'){
              // TODO, not production ready? Do not know what element is correct in which browser.
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
        init: function(plugin){},
        run: function(options, callback){
            var w = options.width||'80%';
            var h = options.height||'400px';

            FINN.user.dialog.box({ 
                content: (options.url ? '<iframe style="width:'+w+';height:'+h+'" src="'+options.url+'"/>' : options.content)
            });
        }
    });
    
    
    /*! jQuery UI - v1.8.23 - 2012-08-15
    * https://github.com/jquery/jquery-ui
    * Includes: jquery.ui.position.js
    * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
    (function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),a.curCSS||(a.curCSS=a.css),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;
    
    F.webAds.registerPlugin('overlay', {
      run: function(options, callback){
        var banner = this;
        var defaults = {
          width: 100,
          height: 100,
          modal: false,
          position: 'top left', // 'vertical horisontal'
          positionAgainst: 'self', // 'Top,Right1,Right' 'self'
          url: 'http://www.finn.no/finn/'
        };
        
        /*
          -> 
          -> new iframe , name= overlayAd_(this.name)
                       remoteUrl= url
          -> append to page
            -> modal? append fullpagebackground
          -> position
          -> handle ESC && click outside container
          -> double click, == only one
          
          TODO: -> iframe must be able to close itself
        */
        var name = 'overlayad'+banner.name;
        if ($(".webad-"+name.toLowerCase()).size() > 0){
          if (typeof callback === 'function') callback()
          return true;
        }
        options = $.extend({}, defaults, options);
        var iframe = new F.webAds.Iframe(name, {
          remoteUrl: options.url,
          width: options.width,
          height: options.height
        });
        iframe.makeIframe();
        iframe.$wrapper.appendTo('body');
        
        function getOrginElement(s){
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
        }
        
        iframe.$wrapper.css({position: 'absolute', 'z-index': '101'}).position({
          my: 'right top',
          of: getOrginElement(options.positionAgainst),          
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
        
        
        
        if (typeof callback === 'function') callback(function(){
          remove()
        })
        return true;
        
      }
    })


})(FINN, jQuery);