/*
 * tagContainer Generator v103.8
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2026-08-17 17:03:28 Europe/Paris
 * ---
 * Version	: 259.00
 * IDTC 	: 10
 * IDS		: 5666
 */
/*!compressed by terser*/ "undefined"==typeof tC&&(void 0!==document.domain&&void 0!==document.referrer||(document=window.document),function(t,e){var n,i=t.document,o=(t.location,t.navigator,t.tC,t.$,Array.prototype.push,Array.prototype.slice,Array.prototype.indexOf,Object.prototype.toString),a=(Object.prototype.hasOwnProperty,String.prototype.trim,function(t,e){return new a.fn.init(t,e,n)}),c=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,r=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,s={};a.fn=a.prototype={constructor:a,init:function(t,e,n){var o,s,d;if(!t)return this;if(t.nodeType)return this.context=this[0]=t,this.length=1,this;if("string"==typeof t){if(!(o="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:c.exec(t))||!o[1]&&e)return!e||e.tC?(e||n).find(t):this.constructor(e).find(t);if(o[1])return d=(e=e instanceof a?e[0]:e)&&e.nodeType?e.ownerDocument||e:i,t=a.parseHTML(o[1],d,!0),r.test(o[1])&&a.isPlainObject(e)&&this.attr.call(t,e,!0),a.merge(this,t);if((s=i.getElementById(o[2]))&&s.parentNode){if(s.id!==o[2])return n.find(t);this.length=1,this[0]=s}return this.context=i,this.selector=t,this}return a.isFunction(t)?n.ready(t):(undefined!==t.selector&&(this.selector=t.selector,this.context=t.context),a.makeArray(t,this))},each:function(t,e){return a.each(this,t,e)},ready:function(t){return a.ready.promise(t),this}},a.fn.init.prototype=a.fn,a.extend=a.fn.extend=function(){var t,e,n,i,o,c,r=arguments[0]||{},s=1,d=arguments.length,u=!1;for("boolean"==typeof r&&(u=r,r=arguments[1]||{},s=2),"object"==typeof r||a.isFunction(r)||(r={}),d===s&&(r=this,--s);s<d;s++)if(null!=(t=arguments[s]))for(e in t)n=r[e],r!==(i=t[e])&&(u&&i&&(a.isPlainObject(i)||(o=a.isArray(i)))?(o?(o=!1,c=n&&a.isArray(n)?n:[]):c=n&&a.isPlainObject(n)?n:{},r[e]=a.extend(u,c,i)):undefined!==i&&(r[e]=i));return r},a.extend({ssl:"https://manager.",randOrd:function(){return Math.round(Math.random())-.5},nodeNames:"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rnocache:/<(?:script|object|embed|option|style)/i,rnoshimcache:new RegExp("<(?:"+a.nodeNames+")[\\s/>]","i"),rchecked:/checked\s*(?:[^=]|=\s*.checked.)/i,containersLaunched:{}}),a.extend({inArray:function(t,e,n){var i,o=Array.prototype.indexOf;if(e){if(o)return o.call(e,t,n);for(i=e.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in e&&e[n]===t)return n}return-1},isFunction:function(t){return"function"===a.type(t)},isArray:Array.isArray||function(t){return"array"===a.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},type:function(t){return null==t?String(t):s[o.call(t)]||"object"},each:function(t,e,n){var i,o=0,c=t.length,r=undefined===c||a.isFunction(t);if(n)if(r){for(i in t)if(!1===e.apply(t[i],n))break}else for(;o<c&&!1!==e.apply(t[o++],n););else if(r){for(i in t)if(!1===e.call(t[i],i,t[i]))break}else for(;o<c&&!1!==e.call(t[o],o,t[o++]););return t},log:function(t,e){try{a.getCookie("tCdebugLib")&&console&&console[e||"log"](t)}catch(t){}},warn:function(t){a.log(t,"warn")},error:function(t){a.log(t,"error")},clear:function(t){a.log(t,"clear")},debug:function(t){a.log(t,"debug")},dir:function(t){a.log(t,"dir")},info:function(t){a.log(t,"info")},trace:function(t){a.log(t,"trace")}}),a.each("Boolean Number String Function Array Date RegExp Object".split(" "),(function(t,e){s["[object "+e+"]"]=e.toLowerCase()})),n=a(i);a.buildFragment=function(t,e,n){var o,c,r,s=t[0];return e=(e=!(e=e||i).nodeType&&e[0]||e).ownerDocument||e,!(1===t.length&&"string"==typeof s&&s.length<512&&e===i&&"<"===s.charAt(0))||a.rnocache.test(s)||!a.support.checkClone&&a.rchecked.test(s)||!a.support.html5Clone&&a.rnoshimcache.test(s)||(c=!0,r=undefined!==(o=jQuery.fragments[s])),o||(o=e.createDocumentFragment(),a.clean(t,e,o,n),c&&(a.fragments[s]=r&&o)),{fragment:o,cacheable:c}},t.tC=a}(window)),function(){if(!tC.maindomain){var hostname=location.hostname,tb=hostname.split("."),ipregexp="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";tb.length<2||hostname.match(ipregexp)?tC.maindomain=hostname:tC.maindomain=tb[tb.length-2]+"."+tb[tb.length-1]}var currentContainer={id_container:String(10),id_site:String(5666),frequency:String(900),containerVersion:String(259),generatorVersion:String("103.8"),containerStart:Date.now(),sourceKey:String("a81848be-b53d-44a9-9a50-33493aa5a5e5"),defaultCdnDomain:String("cdn.trustcommander.net")};tC.config=tC.config||{},tC.extend({internalvars:void 0!==tC.internalvars?tC.internalvars:{},internalFunctions:void 0!==tC.internalFunctions?tC.internalFunctions:{},privacyVersion:tC.privacyVersion||"",id_container:currentContainer.id_container,id_site:currentContainer.id_site,containerVersion:currentContainer.containerVersion,generatorVersion:currentContainer.generatorVersion,defaultCdnDomain:currentContainer.defaultCdnDomain,dedup_done:void 0!==tC.dedup_done&&tC.dedup_done,containerStart:tC.containerStart||currentContainer.containerStart,config:tC.config});var internalvarsSite={},hitCounterExtend,containerIdExtend,container,containerApi;internalvarsSite["internalvars_"+currentContainer.id_site]=void 0!==tC["internalvars_"+currentContainer.id_site]?tC["internalvars_"+currentContainer.id_site]:{},tC.extend(internalvarsSite),window["tC_"+currentContainer.id_site+"_"+currentContainer.id_container]=currentContainer,tC.extend({launchTag:function(t,e,n,i,o,a){void 0===a&&(a=0),tC.array_launched_tags.push(e),tC.array_launched_tags_keys.push(t),tC.containersLaunched[i][o].t.push({id:t,label:e,idTpl:n}),window.top.postMessage('TC.EX:{"id":"'+t+'","idc":"'+o+'","idt":"'+n+'","ids":"'+i+'","lb":"'+e.replace(/"/g,'\\"')+'","idtr":"'+a+'"}',"*")}}),void 0===tC.containersLaunched&&(tC.containersLaunched={}),void 0===tC.containersLaunched[currentContainer.id_site]&&(tC.containersLaunched[currentContainer.id_site]={}),tC.containersLaunched[currentContainer.id_site][currentContainer.id_container]={v:currentContainer.containerVersion,t:[],g:currentContainer.generatorVersion},tC.coreReadyStandalone=!0,tC.isDOMReady&&(tC.coreReadyStandalone=!1),tC.domReady=tC.domReady||!1,tC.isDOMReady=tC.isDOMReady||function(){if("complete"===document.readyState||"loaded"===document.readyState)return!0;if("interactive"!==document.readyState)return!1;if(!document.documentElement.doScroll)return!0;try{return document.documentElement.doScroll("left"),!0}catch(t){return!1}},tC.waitingOnDomReadyCallBacks=tC.waitingOnDomReadyCallBacks||[],tC.excuteOnDomReadyCallBacks=tC.excuteOnDomReadyCallBacks||function(){for(var t=0;t<tC.waitingOnDomReadyCallBacks.length;t++)tC.waitingOnDomReadyCallBacks[t]();tC.waitingOnDomReadyCallBacks=[]},tC.onDomReady=tC.onDomReady||function(t){if(this.domReady)t();else{tC.waitingOnDomReadyCallBacks.push(t);var e=!1;document.addEventListener?(e=!0,document.addEventListener("DOMContentLoaded",(function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),tC.excuteOnDomReadyCallBacks()}),!1)):document.attachEvent&&(e=!0,document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),tC.excuteOnDomReadyCallBacks())})),document.documentElement.doScroll&&window===window.top&&function(){if(!tC.domReady){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}tC.excuteOnDomReadyCallBacks()}}()),e||(window.onload=tC.excuteOnDomReadyCallBacks)}},!0===tC.coreReadyStandalone&&(tC.isDOMReady()?tC.domReady=!0:tC.onDomReady((function(){tC.domReady=!0}))),function(){"use strict";tC.cactUtils={};var t=function(){};tC.cactUtils.formatArgumentsV2=function(e){var n={},i=0;return"string"==typeof e[i]&&(n.event=e[i++]),"object"==typeof e[i]&&(n.properties=Object.assign({},e[i++])),"object"==typeof e[i]&&(n.config=Object.assign({},e[i++])),"function"==typeof e[i]&&(n.callback=e[i++]),n.properties=n.properties||{},n.config=n.config||{},n.callback=n.callback||t,n}}(),function(){"use strict";var t=window.tC;if(!(null==t||t.cact&&t.cactInfo&&t.cactInfo.apiVersion>=2)){window.caReady=window.caReady||[],window.cact=window.cact||function(){window.caReady.push(arguments)},t.cact&&(window.caReady=window.caReady.map((function(t){if(function(t){return"[object Arguments]"===t.toString()||Array.isArray(t)}(t))return t;var e,n=JSON.parse(JSON.stringify(t)),i=n._done;return delete n.event,delete n.callback,delete n._done,e=0!==Object.keys(n).length?[t.event,n,t.callback]:[t.event,t.callback],i&&(e._tc_meta={done:i}),e}))),t.cact=t.cact||{},t.cactInfo={apiVersion:2};var e=function(e){e._tc_meta=e._tc_meta||{};var n=e[0];if(!e._tc_meta.done&&null!=t.cact[n]){e._tc_meta=e._tc_meta||{},e._tc_meta.done=!0;var o=t.cact[n]._tc_version;if(e=Array.prototype.slice.call(e,null==o?0:1),null==o){var a=i(e);t.cact[n](a,a.callback)}else t.cact[n].apply(t.cact,e)}},n=function(){},i=function(t){var e,i;return"object"==typeof t[1]?(e=t[1],i=t[2]):"function"==typeof t[1]?(e={},i=t[1]):e={},e.event=t[0],e.callback=i||n,e};t.cact.exec=function(){for(var n=0;n<window.caReady.length;++n)e(window.caReady[n]);var i=t.cactUtils.formatArgumentsV2(arguments);i&&i.callback&&i.callback()};Object.defineProperty(window.caReady,"push",{configurable:!0,value:function(t){Array.prototype.push.call(window.caReady,t),e(t)}}),t.cact.exec()}}(),function(){"use strict";tC.config=tC.config||{},tC.cact.config=function(){var t=tC.cactUtils.formatArgumentsV2(arguments),e=t.callback;Object.assign(tC.config,t.properties),e()},tC.cact.config._tc_version=3}(),function(){"use strict";var t=function(t){var e;return(e=t instanceof Event?t.target:t)instanceof Element?e:null};tC.cact.trigger=function(){var e=tC.cactUtils.formatArgumentsV2(arguments),n=e.event,i=Object.assign({},e.properties),o=e.config,a=e.callback;if("string"==typeof n&&""!==n){if(tC.trigger){var c=t(i.from);c&&(o.eventTarget=c,delete i.from),tC.trigger({event:n,properties:i,config:o})}return a(),tC.uniqueEventIndex}},tC.cact.trigger._tc_version=3,tC.cact.setProperty=function(t,e){tC.set&&"string"==typeof t&&(tC.config=tC.config||{},tC.config.eventData=tC.config.eventData||{},tC.set(tC.config.eventData,t,e))},tC.cact.setProperty._tc_version=3,tC.cact.dispatchEvent=function(){var e=tC.cactUtils.formatArgumentsV2(arguments),n=e.event,i=Object.assign({},e.properties),o=Object.assign({},e.config),a=e.callback;o.eventData=i;var c=t(i.from);c&&(o.eventTarget=c,delete i.from),tC.eventTarget.dispatchEvent(n,o),a()},tC.cact.dispatchEvent._tc_version=3,tC.cact.emit=tC.cact.dispatchEvent,tC.cact.addEventListener=function(){var t=tC.cactUtils.formatArgumentsV2(arguments),e=t.event,n=t.callback;return tC.eventTarget.addEventListener(e,n)},tC.cact.addEventListener._tc_version=3,tC.cact.on=tC.cact.addEventListener,tC.cact.once=function(){var t=tC.cactUtils.formatArgumentsV2(arguments),e=t.event,n=t.callback;return tC.eventTarget.once(e,n)},tC.cact.once._tc_version=3,tC.cact.removeEventListener=function(){var t=tC.cactUtils.formatArgumentsV2(arguments),e=t.event,n=t.callback;return tC.eventTarget.removeEventListener(e,n)},tC.cact.removeEventListener._tc_version=3,tC.cact.off=tC.cact.removeEventListener}(),tC.extend({isCurrentVersion:function(){if(!0===Boolean(tC.bypassBookmarklet))return!0;var t=tC.getCookie("tc_mode_test");return"1"!==t||"1"===t&&!1}}),tC.pixelTrack=tC.pixelTrack||{add:function(t,e){t=t||0,e=e||"img",tC.onDomReady((function(){var n;"iframe"===e?((n=document.createElement(e)).src=t,n.width=1,n.height=1,n.style.display="none",document.body.appendChild(n)):(n=new Image).src=t}))}},tC.setCookie=tC.setCookie||function(t,e,n,i,o,a,c){o||(o=tC.domain()),tC.config=tC.config||{},tC.cookieForceSameSite=tC.cookieForceSameSite||"",c=c||tC.config.cookieForceSameSite||tC.cookieForceSameSite,tC.isSameSiteContext()||(c="None"),c||(c=tC.isSubdomain(o)?"Lax":"None"),tC.cookieForceSecure=null!=tC.cookieForceSecure?tC.cookieForceSecure:"",null==a&&(a=tC.config.cookieForceSecure),null==a&&(a=tC.cookieForceSecure),a=Boolean(Number(a)),"none"===c.toLowerCase()&&(a=!0);var r=new Date;r.setTime(r.getTime()),n&&(n=1e3*n*60*60*24);var s=new Date(r.getTime()+n),d=t+"="+tC.cookieEncode(e)+(n?";expires="+s.toGMTString():"")+(i?";path="+i:";path=/")+(o?";domain="+o:"")+(a?";secure":"")+";SameSite="+c;document.cookie=d},tC.cookieEncode=tC.cookieEncode||function(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E"};return encodeURIComponent(t).replace(/[!~'()]/g,(function(t){return e[t]}))},tC.getCookie=tC.getCookie||function(t){if(null==t)return"";var e="@$".split("").some((function(e){return-1!==t.indexOf(e)}));t=e?t.replace("$","\\$"):encodeURIComponent(t);var n=new RegExp("(?:^|; )"+t+"=([^;]*)").exec(document.cookie);if(n){var i="";try{i=decodeURIComponent(n[1])}catch(t){i=unescape(n[1])}return i}return""},tC.cookieCheck=function(t){var e,n=(t=t||{}).domain?";domain="+t.domain:"",i=t.samesite?";samesite="+t.samesite:"",o=Math.random().toString(36).substr(2,9),a="tc_test_cookie="+o+";expires=0;path=/;"+i+n;document.cookie=a;var c=new RegExp("(?:^|; )tc_test_cookie=([^;]*)").exec(document.cookie);return c&&(c=c[1]),(e=c===o)&&(a="tc_test_cookie=;expires="+new Date(0).toUTCString()+";path=/;"+i+n,document.cookie=a),e},tC._samesite=tC._samesite||null,tC.isSameSiteContext=tC.isSameSiteContext||function(){return null!=tC._samesite||(tC.isCrossDomainContext()?tC._samesite=!1:tC._samesite=tC.cookieCheck({samesite:"lax"})),tC._samesite},tC.isCookieEnabled=function(){return!(!navigator.cookieEnabled||-1!==window.navigator.userAgent.indexOf("MSIE"))||tC.cookieCheck()},tC.removeCookie=tC.removeCookie||function(t,e){this.setCookie(t,"",-1,"/",e)},tC._domain=tC._domain||null,tC.domain=tC.domain||function(){if(null!=tC._domain)return tC._domain;var t=(tC.tc_hdoc.domain||"").toLowerCase().split("."),e=t.length;if(0===e)return"";for(var n,i=!1,o=2;!i&&o<=e;++o)n="."+t.slice(e-o,e).join("."),i=tC.cookieCheck({domain:n});return tC._domain=n||"",tC._domain},tC.getDomainLevels=tC.getDomainLevels||function(){var t=(tC.tc_hdoc.domain||"").toLowerCase().split("."),e=t.map((function(e,n){return"."+t.slice(n).join(".")}));return e.pop(),e.reverse(),e},tC.isSubdomain=tC.isSubdomain||function(t){return t&&"."===t[0]&&(t=t.substr(1,t.length-1)),new RegExp(t+"$").test(tC.tc_hdoc.domain)},tC.isCrossDomainContext=tC.isCrossDomainContext||function(){try{return window.top.document,!1}catch(t){return!0}},tC.tc_hdoc=tC.tc_hdoc||!1,tC.tc_hdoc||(tC.tc_hdoc=tC.isCrossDomainContext()?window.document:window.top.document),tC.isTcDns=function(t){return""!==(t=t||"")&&(-1!==t.indexOf(".commander1.com")||-1!==t.indexOf(".tagcommander.com"))},tC.isCustomDns=function(t){return""!==(t=t||"")&&!tC.isTcDns(t)},function(){tC.getCdnDomainList=tC.getCdnDomainList||function(){return[]||[]},tC.getClientDnsList=tC.getClientDnsList||function(){return["ss.dispart.fr","ss.cedeo.fr","ss.pointp.fr"]||[]},tC.getGatewaySettings=tC.getGatewaySettings||function(){var t=[],e=tC.clientCdnDomain;if(Array.isArray(t)&&t.length>0){var n=t.filter((function(t){return!!t.url&&t.url.indexOf(e)>-1}));if(n.length>0)return n[0]}return{}},tC.getGatewaySetting=tC.getGatewaySetting||function(t,e){var n=tC.getGatewaySettings();if(null!=n[t]){var i=n[t];return null!=e.prefix&&(i=e.prefix+i),null!=e.suffix&&(i+=e.suffix),i}return null!=e.defaultValue?e.defaultValue:""},tC.getCdnCommonFilesFolder=tC.getCdnCommonFilesFolder||function(){return tC.clientCdnDomain,""};var t=function(t,e){return function(){var n=t();if(n)return n;var i=tC.getDomainLevels().map((function(t){return new RegExp("^[\\w,\\d,\\-]*"+t.replace(".","\\.")+"$")}));return e().find((function(t){var e=t.split("/")[0];return i.find((function(t){return t.test(e)}))}))}};tC.getCachedClientCollectDns=function(){return tC.clientCollectDns},tC.getCachedClientCdnDomain=function(){return tC.clientCdnDomain},tC.getClientCollectDns=t(tC.getCachedClientCollectDns,tC.getClientDnsList),tC.clientCollectDns=tC.getClientCollectDns(),tC.getClientCdnDomain=t(tC.getCachedClientCdnDomain,tC.getCdnDomainList),tC.clientCdnDomain=tC.getClientCdnDomain(),tC.clientCampaignDns=tC.clientCampaignDns||"redirect5809.tagcommander.com",tC.getClientCampaignDns=function(){return tC.clientCampaignDns},tC.campaignForceCookieFirst=0,tC.getCdnDomain=function(t){var e=t.defaultDomain||tC.defaultCdnDomain;return window.tc_cdn_domain||tC.clientCdnDomain||e},tC.getPrivacyCdnDomain=function(){return tC.getCdnDomain({defaultDomain:(tC.privacy||{}).defaultCdnDomain})}}(),function(){"use strict";var t=window.tC;t.eventTarget=t.eventTarget||{_eventTarget:document.createElement("null"),addEventListener:function(t,e,n){this._eventTarget.addEventListener(t,e,n)},once:function(t,e,n){this.addEventListener(t,e,Object.assign({},n,{once:!0}))},removeEventListener:function(t,e){this._eventTarget.removeEventListener(t,e)},createEvent:function(t,e){var n;if(t instanceof Event&&null==t.target)n=t;else{if("string"!=typeof t||"*"===t)return;n=new Event(t)}return null!=e&&"object"==typeof e||(e={}),n.eventData=e,n},dispatchEvent:function(e,n){n=n||{};var i=t.eventTarget.createEvent(e,n.eventData);this._eventTarget.dispatchEvent(i);var o=new Event("*");o.originalEvent=i,this._eventTarget.dispatchEvent(o),t.eventTarget.callTagTrigger(i.type,n)},callTagTrigger:function(e,n){if(!0!==n.skipTrigger){var i=t.eventTarget.createEvent(e,n.eventData),o=n.tagTrigger;null==o&&(o=i.type.replace(/-/g,"_"));var a=n.eventTarget,c={};a&&a.getAttributeNames&&a.getAttributeNames().forEach((function(t){c[t]=a[t]})),Object.defineProperty(i,"target",{writable:!0,value:c}),Object.defineProperty(i,"target",{writable:!1}),null!=o&&null!=t.event&&"function"==typeof t.event[o]&&t.event[o](i,i.eventData)}},dispatchEventAsync:function(e,n){var i=0;(n=Object.assign({},n)).delay>0&&(i=Number(n.delay),delete n.delay),setTimeout((function(){t.eventTarget.dispatchEvent(e,n)}),i)}}}(),tC.set=function(t,e,n){if(!t||"object"!=typeof t)return t;"string"==typeof e&&(e=e.split(".").map((function(t){return t.indexOf("[")>-1?t.replace(/\]/g,"").split("["):t})).reduce((function(t,e){return t.concat(e)}),[]));for(var i=t,o=0;o<e.length;o++){var a=e[o];o===e.length-1?i[a]=n:(i[a]&&"object"==typeof i[a]||(i[a]=isNaN(Number(e[o+1]))?{}:[]),i=i[a])}return t},tC.deepMerge=function(){var t=function(t){return t&&"object"==typeof t&&!Array.isArray(t)},e=Array.from(arguments),n=e.shift();if(!e.length)return n;var i,o=e.shift();if(t(n)&&t(o))for(var a in o)t(o[a])?(n[a]||((i={})[a]={},Object.assign(n,i)),tC.deepMerge(n[a],o[a])):((i={})[a]=o[a],Object.assign(n,i));return tC.deepMerge.apply(tC,[n].concat(e))},tC.xhr=tC.xhr||function(t){var e=new XMLHttpRequest;if(!e)return!1;e.open(t.method||"GET",t.url),t.withCredentials&&(e.withCredentials=!0);var n=t.data;if(!0===t.json&&(e.setRequestHeader("Content-Type","application/json"),"string"!=typeof n))try{n=JSON.stringify(n)}catch(t){n="null"}t.headers&&Object.keys(t.headers).forEach((function(n){e.setRequestHeader(n,t.headers[n])}));var i=function(){if(e.readyState===XMLHttpRequest.DONE){var n=t[e.status>=200&&e.status<300?"done":"fail"];if(n){var i=e.response;if(!0===t.json)try{i=JSON.parse(i)}catch(t){}n(i,e.status)}}};e.onload=i,e.onerror=i,e.send(n)},function(){"use strict";tC.getCrossDomainCookie=tC.getCrossDomainCookie||function(t,e){e=e||function(){};var n=t.siteId,i=t.name,o=t.domain;tC.xhr({url:"https://"+o+"/get-cookie?tc_s="+n+"&name="+i,withCredentials:!0,json:!0,done:function(t){var n="";try{n=t[i]||""}catch(t){}e(n)},fail:function(t){tC.log&&tC.log("error occured retrieving cookie "+i,t),e("")}})}}(),function(){"use strict";var t={"cookie-serverside":{path:"css",serverId:"phoenix",defaultDomain:"collect.commander1.com",siteQueryArg:"tc_s",caidSync:!1},dms:{path:"dms",serverId:"data",defaultDomain:"engage.commander1.com",siteQueryArg:"tc_s"},events:{path:"events",serverId:"cdp",defaultDomain:"collect.commander1.com",siteQueryArg:"tc_s"},"measure-click-and-visit":{path:"cs3",serverId:"mix",defaultDomain:tC.clientCampaignDns||"mix.commander1.com",syncDomain:"collect.commander1.com",siteQueryArg:"tcs"},"measure-visit":{path:"s3",serverId:"mix",defaultDomain:tC.clientCampaignDns||"mix.commander1.com",syncDomain:"collect.commander1.com",siteQueryArg:"tcs"},"privacy-consent":{path:"privacy-consent",serverId:"trust",defaultDomain:"privacy.commander1.com",cookielessDomains:["privacy.trustcommander.net"],siteQueryArg:"site"}},e=function(){var t=new Date;return t.getFullYear()+("0"+(t.getMonth()+1)).slice(-2)+("0"+t.getDate()).slice(-2)+("0"+t.getHours()).slice(-2)+("0"+t.getMinutes()).slice(-2)+("0"+t.getSeconds()).slice(-2)+Math.floor(12345678942*Math.random()+1)},n=function(t,e){var n=!1;"function"!=typeof navigator.sendBeacon?n=!0:navigator.sendBeacon(t,e)||(n=!0),n&&tC.xhr({method:"POST",json:!0,url:t,data:e,withCredentials:!0})};null==tC.track&&(tC._trackVersion=5),tC.track=tC.track||function(i){var o=(i=i||{}).siteId||tC.config.siteId||tC.id_site,a=t[i.route];if(null==a)return null;var c=JSON.stringify(i.body||{}),r=a.defaultDomain,s=i.domain||window.tC_collect_dns||tC.config.collectionDomain||r;"/"===(s=s.split("://").slice(-1)[0])[s.length-1]&&(s=s.slice(0,-1));var d=tC.isCustomDns(s)&&!(a.cookielessDomains||[]).includes(s),u=i.isCookieless||(a.cookielessDomains||[]).includes(s),l={};u&&(l.tc_do_not_track=u),a.siteQueryArg&&o&&(l[a.siteQueryArg]=o),Object.assign(l,i.queryParams);var C=Object.keys(l).reduce((function(t,e){var n=l[e];return t.push(e+"="+n),t}),[]);(C=C.join("&"))&&(C="?"+C);var _="https://"+s+(d?"/"+a.serverId:"")+"/"+a.path+C,v=tC.getCookie("CAID"),g=!1!==a.caidSync;if(g&&(g=null!=tC.config.caidSync?tC.config.caidSync:g,g=null!=i.caidSync?i.caidSync:g),d&&!u&&!v){if(g){var p=a.syncDomain||r;tC.getCrossDomainCookie({name:"TCID",siteId:o,domain:p},(function(t){var i=t;i||(i=e()),tC.setCookie("CAID",i),n(_,c)}))}else{var f=e();tC.setCookie("CAID",f),n(_,c)}}else n(_,c)}}(),function(){"use strict";tC.uniqueEventIndex=tC.uniqueEventIndex||0,tC.triggeredEvents=tC.triggeredEvents||[],tC.config=tC.config||{};tC.config.collectionDomain=tC.config.collectionDomain||tC.clientCollectDns;var t=/[a-z0-9-.+_-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i,e=/(user|mail|pass(word|phrase)?|secret|((first|last)name))/i,n=function(e){return(e||"").replace(t,"*****")};tC.generateEventId=function(){for(var t=String(Date.now()).slice(2)+Math.round(1e13*Math.random());t.length<24;)t+="0";return t},tC.trigger=function(i){var o=(i=i||{}).event,a=Object.assign({},i.properties),c=i.config||{},r=a.url||function(i){try{var o=new URL(i);return o.pathname=n(o.pathname),o.searchParams.forEach((function(i,a){return t.test(i)?o.searchParams.set(a,n(i)):e.test(a)?o.searchParams.set(a,"*****"):void 0})),o.toString()}catch(t){return i}}(window.location.href);tC.uniqueEventIndex++,tC.uniqueEventId=tC.generateEventId();var s={},d=c.sourceKey||tC.config.sourceKey||"a81848be-b53d-44a9-9a50-33493aa5a5e5";d&&(s.token=d);var u,l=tC.config.eventData;if("object"==typeof l&&tC.deepMerge&&(a=tC.deepMerge({},l,a)),a.user=a.user||{},!a.user.consent_categories){var C=[];"privacy"in tC&&(C="getValidCategories"in tC.privacy?tC.privacy.getValidCategories():tC.privacy.getOptinCategories());var _=tC.getCookie(tC.privacy&&tC.privacy.getCN()||"TC_PRIVACY");/ALL/.test(_)&&(C=["1","2","3","4","5","6","7","8","9","10"]),a.user.consent_categories=C}if(!a.user.rejected_vendors){var v=[];tC.privacy&&(tC.privacy.checkOptoutAllVendors&&tC.privacy.checkOptoutAllVendors()?v="ALL":tC.privacy.checkOptinAllVendors&&!tC.privacy.checkOptinAllVendors()&&(v=tC.privacy.getOptoutVendors())),a.user.rejected_vendors=v}switch(a.revenue&&(a.amount=a.revenue),a.integrations=a.integrations||{},a.integrations.facebook=a.integrations.facebook||{},a.integrations.facebook.fbc=tC.getCookie("_fbc")||void 0,a.integrations.facebook.fbp=tC.getCookie("_fbp")||void 0,a.integrations.facebook.event_id=a.integrations.facebook.event_id||tC.uniqueEventId,o){case"page_view":a.title=document.title,a.path=location.pathname,a.url=r,""!==document.referrer&&(a.referrer=document.referrer),a.type=a.type||(window.tc_vars||{}).env_template||"other",a.page_type=a.page_type||(window.tc_vars||{}).env_template||"other";break;case"purchase":a.status=a.status||"in_progress",a.type=a.type||"online"}try{u=window.Intl&&window.Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}var g,p=document.documentElement||{},f=window.navigator||{},m={title:document.title,url:r,lang:p.lang,referrer:document.referrer||tC.storage&&tC.storage.get("TC_REFERRER"),viewport:{width:p.clientWidth,height:p.clientHeight}},h={cookie:(g=["_fbp","_fbc",/^_+(ga|gcl|opt_|utm)/,/^(pm_sess|VISITOR_INFO1|FPGCL|GA_)/,"__gsas","NID","DSID","test_cookie","id","GED_PLAYLIST_ACTIVITY","ACLK_DATA","aboutads_sessNNN","FPAU","ANID","AID","IDE","TAID","FLC","RUL","FCCDCF","FCNEC","CUID","1P_JAR","Conversion","YSC","FPLC","_gid","AMP_TOKEN","FPID","_dc_gtm_","PAIDCONTENT","atuserid","xtidc","crto_mapped_user_id","awc","tduid","kwks2s","_ttp",/^_pk_id\./,"_pcid","pa_vid","rmStore","_uetmsclkid",/^_dy.*/,/^ty_.*/,"amzn_consent"],(document.cookie||"").split("; ").filter((function(t){var e=t.split("=")[0];return g.find((function(t){return t.test?t.test(e):e===t}))})).join("; ")||""),lang:f.language||f.userLanguage,screen:{width:window.screen.width,height:window.screen.height},timezone:u};tC.internalvars.caEventData=a;var L={event_name:o,context:{page:m,device:h,eventId:c.eventId?String(c.eventId):tC.uniqueEventId,version:2,created:(new Date).toJSON(),generatorVersion:tC.generatorVersion,containerVersion:tC.containerVersion}};if(Object.assign(L,a),100<tC.triggeredEvents.length)for(;tC.triggeredEvents.length>100;)tC.triggeredEvents.shift();tC.triggeredEvents.push(L),tC.lastTriggeredEvent=tC.triggeredEvents[tC.triggeredEvents.length-1];var w=c.siteId||c.idSite,y=c.collectionDomain;if(tC.track({domain:y,route:"events",siteId:w,queryParams:s,body:L,caidSync:c.caidSync}),tC.eventTarget){var T={eventData:L,eventTarget:c.eventTarget};tC.eventTarget.dispatchEvent("track_"+o,T),tC.eventTarget.dispatchEvent("track_all_events",T)}return tC.uniqueEventIndex}}(),tC.storage={has:function(){try{return"localStorage"in window&&null!=window.localStorage&&(window.localStorage.setItem("TC_CHECK","1"),window.localStorage.removeItem("TC_CHECK"),!0)}catch(t){return!1}},isAvailable:function(){try{return window.localStorage,!0}catch(t){return!1}},get:function(t){if(this.isAvailable())return window.localStorage.getItem(t)},set:function(t,e){if(this.isAvailable())try{return window.localStorage.setItem(t,e)||!0}catch(t){return!1}},remove:function(t){if(this.isAvailable())return window.localStorage.removeItem(t)||!0},setWithExpiry:function(t,e,n){if(this.isAvailable()){var i=(new Date).getTime(),o=1e3*n*60*60*24,a=JSON.stringify({value:e,expires:i+o});try{window.localStorage.setItem(t,a)}catch(t){}}},getWithExpiry:function(t){if(this.isAvailable()){var e=window.localStorage.getItem(t);if(null==e)return null;var n=(new Date).getTime();return(e=JSON.parse(e)).expires<n?(this.remove(t),null):e.value}}},hitCounterExtend={},hitCounterExtend.hitCounter_5666_10=function(){var t=window.tC_5666_10;if(0===Math.floor(Math.random()*parseInt(t.frequency))){var e=window.tc_collect_dns||tC.clientCollectDns||"manager.tagcommander.com";tC.pixelTrack.add("https://"+e+"/utils/hit.php?id="+t.id_container+"&site="+t.id_site+"&version="+t.containerVersion+"&frequency="+t.frequency+"&position="+tC.container_position+"&rand="+Math.random())}},tC.extend(hitCounterExtend),tC.container_position="undefined"!=typeof tc_container_position?tc_container_position:void 0!==tC.container_position?tC.container_position:0,tC.container_position++,"undefined"!=typeof tc_container_position&&tc_container_position++,tC.hitCounter_5666_10(),tC.script={add:function(t,e,n){var i=document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode,o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=t,o.charset="utf-8",o.id="tc_script_"+Math.random(),i?(e&&(o.addEventListener?o.addEventListener("load",(function(){e()}),!1):o.onreadystatechange=function(){o.readyState in{loaded:1,complete:1}&&(o.onreadystatechange=null,e())}),n&&"number"==typeof n&&setTimeout((function(){i&&o.parentNode&&i.removeChild(o)}),n),i.insertBefore(o,i.firstChild)):tC.log("tC.script error : the element <script> or <body> is not found ! the file "+t+" is not implemented !","warn")}},tC.bypassBookmarklet=!0,tC.extend({addClass:function(t){var e,n,i,o,a,c,r;if(tC.isFunction(t))return this.each((function(e){jQuery(this).addClass(t.call(this,e,this.className))}));if(t&&"string"==typeof t)for(e=t.split(core_rspace),n=0,i=this.length;n<i;n++)if(1===(o=this[n]).nodeType)if(o.className||1!==e.length){for(a=" "+o.className+" ",c=0,r=e.length;c<r;c++)a.indexOf(" "+e[c]+" ")<0&&(a+=e[c]+" ");o.className=jQuery.trim(a)}else o.className=t;return this},removeClass:function(t){var e,n,i,o,a,c,r;if(tC.isFunction(t))return this.each((function(e){jQuery(this).removeClass(t.call(this,e,this.className))}));if(t&&"string"==typeof t||void 0===t)for(e=(t||"").split(core_rspace),c=0,r=this.length;c<r;c++)if(1===(i=this[c]).nodeType&&i.className){for(n=(" "+i.className+" ").replace(rclass," "),o=0,a=e.length;o<a;o++)for(;n.indexOf(" "+e[o]+" ")>=0;)n=n.replace(" "+e[o]+" "," ");i.className=t?jQuery.trim(n):""}return this},toggleClass:function(t,e){var n=typeof t,i="boolean"==typeof e;return tC.isFunction(t)?this.each((function(n){tC(this).toggleClass(t.call(this,n,this.className,e),e)})):this.each((function(){if("string"===n)for(var o,a=0,c=jQuery(this),r=e,s=t.split(core_rspace);o=s[a++];)r=i?r:!c.hasClass(o),c[r?"addClass":"removeClass"](o);else"undefined"!==n&&"boolean"!==n||(this.className&&jQuery._data(this,"__className__",this.className),this.className=this.className||!1===t?"":jQuery._data(this,"__className__")||"")}))},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(rclass," ").indexOf(e)>=0)return!0;return!1}}),tC.extend({crypt:function(t){for(var e,n="",i=0;i<t.length;i++){var o=t.charCodeAt(i);o>=32&&o<=126?((e=o+26)>126&&(e=e%126+32-1),n+=String.fromCharCode(e)):n+=t.charAt(i)}return n},uncrypt:function(t){for(var e,n="",i=0;i<t.length;i++)t.charCodeAt(i)>=32&&t.charCodeAt(i)<=126?(e=t.charCodeAt(i)>=58&&t.charCodeAt(i)<=126?t.charCodeAt(i)-26:t.charCodeAt(i)-26+94+1,n+=String.fromCharCode(e)):n+=t.charAt(i);return n}}),tC.extend({match:function(t,e,n){try{return t.match(new RegExp(e,n))}catch(i){tC.log("the tC.match error ! message : "+i.message,"data : "+t,"p : "+e,"flag : "+n,"warn")}}}),tC.extend({getParamURL:function(t,e){if(void 0===t)return"";t=t.toLowerCase();var n=new Array;if(!e){var i="";try{"undefined"!=typeof top&&void 0!==top.document&&(i=top.document)}catch(t){}""===i&&(i=document),e=void 0!==i.location?i.location.href:""}var o=0,a=(e=e.replace(/%23/g,"#")).indexOf("?"),c=e.indexOf("#");-1!==a?o=a:-1!==c&&(o=c);var r="";0!==o&&(r=e.substring(o+1,e.length).split("#").join("&"));for(var s=(r=r.replace(/%3d/g,"=")).split("&"),d=0;d<s.length;d++){var u=s[d].split("="),l=u.shift().toLowerCase(),C=u.join("=");n[l]=C}return void 0!==n[t]?n[t]:""}}),tC.isCurrentVersion()&&(void 0!==tC.dedup_done&&!1!==tC.dedup_done||(tC.extend({dedup:{crypted:Boolean(1),LeA:!1,LeAD:!1,LeC:!1,LeCD:!1,LeV:!1,LeVD:!1,FeA:!1,FeAD:!1,FeC:!1,FeCD:!1,FeV:!1,FeVD:!1,AeA:[],AeC:[],AeV:[],tc_hdoc:document,brands:null,d_tags:null,tc_scompshop:null,tc_scomnet:null,tc_ssearchv:null,tc_ssearche:null,cj_max:null,enable_dedup:null,ch_A:[],ch_C:[],ch_V:[],ch_0:null,detected_channel:"",detected_source:"",tc_scookcj_name:"tc_cj_v2",tc_scookcj_path:"/",tc_scookcj_days:365,tc_dm:tC.domain(),tc_scooksda_name:"tc_sdauid",tc_scooksda_path:"/",setup:function(t,e){return this[t]=e,this},checkCookieStatus:function(){var t=this.tc_scookcj_name,e=tC.getCookie(t),n=tC.getCookie(t+"_cmp"),i=tC.getCookie(t+"_med");!1===this.crypted&&e.match(/ZZZ/)&&!e.match(/@@@/)?(tC.setCookie(t,tC.uncrypt(e),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm),""!==n&&tC.setCookie(t+"_cmp",tC.uncrypt(n),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm),""!==i&&tC.setCookie(t+"_med",tC.uncrypt(i),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm)):this.crypted&&e.match(/@@@/)&&!e.match(/ZZZ/)&&(tC.setCookie(t,tC.crypt(e),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm),""!==n&&tC.setCookie(t+"_cmp",tC.crypt(n),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm),""!==i&&tC.setCookie(t+"_med",tC.crypt(i),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm))},init:function(){if("object"!=typeof window.tc_vars||!1!==window.tc_vars.external_consent_status){this.checkCookieStatus();if(!1,this.enable_dedup){var t=this,e="",n="",i=0;for(var o in t.cj=t.getCj(),t.cj_cmp=t.getCj("cmp"),t.cj_med=t.getCj("med"),t.ch_0){var a=t.ch_0[o];"c"!==a.t&&"a"!==a.t||t.ch_C.push(a),"v"!==a.t&&"a"!==a.t||t.ch_V.push(a),"0"!==a.t&&void 0!==a.l&&t.ch_A.push(a)}try{t.tc_hdoc=top.document}catch(t){}tC.dedup.is_tracking_legacy&&(""===tC.getCookie("TCID")&&tC.setCookie("TCID",t.rand(),365,"/",t.tc_dm),""===tC.getCookie("TCSESSION")&&tC.setCookie("TCSESSION",t.rand(),0,"/",t.tc_dm));tC.getParamURL;if(void 0!==e.l&&(e=e.l),void 0!==e&&null!=e&&""!==e&&(i=1),void 0!==n&&null!=n&&""!==n&&(i=1),!i){var c=t.meta_origin(t.tc_hdoc.referrer);c&&(e=c.split("@@@")[0],n=c.split("@@@")[1])}if("1"!==tC.dedup.redirect){if(e){var r=e+"@@@"+n+"@@@"+(new Date).getTime()+"@@@C",s=t.cj;if(s.length>0){var d=s[s.length-1].split("@@@"),u=void 0!==d[0]?d[0]:"",l=void 0!==d[1]?d[1]:"",C=void 0!==d[3]?d[3].replace("CLICK","C"):"";u===e&&l===n&&"C"===C&&t.cj.pop()}t.setCj(r),t.is_tracking_legacy||(""!==t.cj_cmp&&t.setCj("","cmp"),""!==t.cj_med&&t.setCj("","med")),t.is_tracking_third&&tC.pixelTrack.add(("http:"===document.location.protocol?"http:":"https:")+"//"+tC.clientCampaignDns+"/dc3/?chn="+e+"&src="+n+"&type=C&limit="+tC.dedup.cj_max+"&rand="+Math.random(),"img"),tC.dedup.detected_channel=e,tC.dedup.detected_source=n}}else tC.setCookie(tC.dedup.tc_scookredir_name,"0",0,"/",tC.domain()),t.cleanCj(),t.is_tracking_legacy||(t.cleanCj("cmp"),t.cleanCj("med"));t.cjx=t.cj.map((function(t,e){return t+"@@@"+(null!=tC.dedup.cj_cmp[e]?tC.dedup.cj_cmp[e]:"")+"@@@"+(null!=tC.dedup.cj_med[e]?tC.dedup.cj_med[e]:"")}))}}},getChannel:function(t){var e,n=t.t,i=tC.dedup;for(var o in e="C"===n||"click"===n?i.ch_C:"V"===n||"view"===n?i.ch_V:"A"===n||"all"===n?i.ch_A:i.ch_0,void 0!==t.l&&(t.l=t.l.replace("DIRECT_ACCESS","Direct Access").replace("EXTERNAL_LINK","External links"),"COM"===t.l&&(t.l="Community websites"),"CSS"===t.l&&(t.l="Comparison shopping services"),"BRAND"===t.l&&(t.l="Brand")),e)if(void 0!==t.i&&parseInt(t.i)===parseInt(e[o].i)||void 0!==t.l&&void 0!==e[o].l&&t.l.toLowerCase()===e[o].l.toLowerCase())return e[o];return!1},rand:function(){var t=new Date;return String(t.getYear())+(t.getMonth()+1)+t.getDay()+t.getHours()+t.getMinutes()+t.getSeconds()+parseInt(12345678942*Math.random())},getCj:function(t){var e=this.computeCjNames(t),n=this.crypted?tC.uncrypt(tC.getCookie(e.cookie)):tC.getCookie(e.cookie);return""===n?[]:n.split("|||")},setCj:function(t,e){var n=this[this.computeCjNames(e).variable];if(tC.isArray(t))for(var i in t)n.push(t[i]);else n.push(t);this.cleanCj(e)},removeCj:function(t){var e=this.computeCjNames(t);tC.setCookie(e.cookie,"",0,this.tc_scookcj_path,this.tc_dm)},cleanCj:function(t){for(var e=this.computeCjNames(t),n=this[e.variable];n.length>this.cj_max;)n.shift();return n.length>0&&tC.setCookie(e.cookie,this.crypted?tC.crypt(n.join("|||")):n.join("|||"),this.tc_scookcj_days,this.tc_scookcj_path,this.tc_dm),this},computeCjNames:function(t){var e="cj",n=this.tc_scookcj_name;return null!=t&&""!==t&&(e+="_"+t,n+="_"+t),{variable:e,cookie:n}},match:function(t,e,n){if(!t||"ignored"===t||""===n)return!0;switch(t){case"equals":if(n===e)return!0;break;case"different":if(n!==e)return!0;break;case"contains":if(tC.match(n,e))return!0;break;case"notcontains":if(!tC.match(n,e))return!0;break;default:return!0}return!1},contains_channel:function(t){for(var e in t.e){var n=t.e[e];if("object"==typeof n&&void 0!==n.c&&void 0!==t.c&&n.c.toLowerCase()===t.c.toLowerCase()&&this.match(t.m,t.s,n.d))return!0}return!1},ValidRules:function(id_tag){var rules=void 0!==this.d_tags[id_tag]&&this.d_tags[id_tag],self=this;if(!rules)return!0;for(var state_rules_string="",tab_length=rules.length,i=0;i<tab_length;i++){var rule=rules[i];if("object"==typeof rule){var res=self.test(rule);state_rules_string+=0===i?res:" "+rule.x+" "+res}}return eval(state_rules_string.replace(/and/g,"&&").replace(/or/g,"||"))},test:function(t){var e=[],n=t.t.toLowerCase(),i=t.w,o=t.m,a=t.s,c=String(t.f),r=t.c,s=e;for(var d in"all"===n?"any"===i?s=this.AeA:"last"===i?s=this.LeA?[{c:this.LeA,d:this.LeAD}]:[]:"first"===i&&(s=this.FeA?[{c:this.FeA,d:this.FeAD}]:[]):"click"===n?"any"===i?s=this.AeC:"last"===i?s=this.LeC?[{c:this.LeC,d:this.LeCD}]:[]:"first"===i&&(s=this.FeC?[{c:this.FeC,d:this.FeCD}]:[]):"view"===n&&("any"===i?s=this.AeV:"last"===i?s=this.LeV?[{c:this.LeV,d:this.LeVD}]:[]:"first"===i&&(s=this.FeV?[{c:this.FeV,d:this.FeVD}]:[])),r)if("function"!=typeof r[d]){var u=r[d],l=this.getChannel({i:u,t:n}).l;tC.dedup.contains_channel({c:l,e:s,m:o,s:a})&&e.push(u)}return"1"===c&&0!==e.length||"0"===c&&0===e.length},age:function(t){return(((new Date).getTime()+100-t)/3600/24/1e3).toFixed(2)},meta_origin:function(t){if("undefined"===t||!t)return"DIRECT_ACCESS@@@";t=t.toLowerCase();var e,n=this.tc_hdoc.domain.toLowerCase(),i="",o="",a="",c=this;if(""!==t){var r=(i=t.split("/")[2]).split(".");o=r[r.length-2]}if("co"!==o&&"com"!==o&&"org"!==o||(o=r[r.length-3]),""!==n){var s=n.split(".");"co"!==(a=s[s.length-2])&&"com"!==a&&"org"!==a||(a=s[s.length-3])}if(o===a)return!1;for(e=0;e<c.tc_ssearche.length;e++)if(o===c.tc_ssearche[e]){var d=tC.getParamURL(c.tc_ssearchv[e],t);for(var u in d=unescape(d.toLowerCase()),c.brands){var l=c.brands[u];for(var C in l){var _=l[C];if("string"==typeof _){_=!!_&&_.toLowerCase();var v="Regex"===u&&new RegExp(_,"g");if(_&&("Exact word"===u&&d===_||"Contain"===u&&-1!==d.indexOf(_)||"Regex"===u&&v.test(d)))return"BRAND@@@"+c.tc_ssearche[e]}}}return"SEO@@@"+c.tc_ssearche[e]}for(e=0;e<c.tc_scomnet.length;e++)if(o===c.tc_scomnet[e])return"COM@@@"+c.tc_scomnet[e];for(e=0;e<c.tc_scompshop.length;e++)if(o===c.tc_scompshop[e])return"CSS@@@"+c.tc_scompshop[e];return o!==a&&"EXTERNAL_LINK@@@"+i}}}),tC.dedup.redirect="undefined"!=typeof tc_redirect?tc_redirect:void 0!==tC.dedup.redirect?tC.dedup.redirect:tC.getCookie(tC.dedup.tc_scookredir_name)),"function"!=typeof tC.dedup.setEventList&&(tC.dedup.setEventList=function(){var t=tC.dedup;t.cj=t.getCj();for(var e=t.cj,n="",i=e.length-1;i>=0;i--){var o=e[i].split("@@@");if(4!==o.length);else{var a=o[0],c=o[1],r=t.age(o[2]);r=""!==r&&r;var s=o[3].replace("VIEW","V").replace("CLICK","C"),d=t.getChannel({l:a,t:"C"}),u=t.getChannel({l:a,t:"V"});(d||u)&&!1!==r&&(d&&"C"===s&&parseFloat(r)<=parseFloat(d.a)&&(t.LeC||(t.LeC=a,t.LeCD=c),t.FeC=a,t.FeCD=c,t.AeC.push({c:a,d:c}),t.LeA&&"V"!==n||(t.LeA=a,t.LeAD=c,n="C"),t.FeA=a,t.FeAD=c,t.AeA.push({c:a,d:c})),u&&"V"===s&&parseFloat(r)<=parseFloat(u.b)&&(t.LeV||(t.LeV=a,t.LeVD=c),t.FeV=a,t.FeVD=c,t.AeV.push({c:a,d:c}),t.LeA||(t.LeA=a,t.LeAD=c,n="V"),t.FeA=a,t.FeAD=c,t.AeA.push({c:a,d:c})))}}}),tC.dedup.mergeObjects=tC.dedup.mergeObjects||function(t,e){tC.dedup[t]=tC.dedup[t]||{};for(var n=Object.keys(e),i=0;i<n.length;i++)tC.dedup[t][n[i]]=e[n[i]];return tC.dedup},tC.dedup.mergeObjects("d_tags",[]).setup("ch_0",[]),void 0!==tC.dedup_done&&!1!==tC.dedup_done||(tC.dedup.run=function(){tC.dedup.is_tracking_legacy=null==tC.clientCollectDns&&!tC.campaignForceCookieFirst&&(tC.isCustomDns(tC.clientCampaignDns)||-1!==tC.clientCampaignDns.indexOf(".tagcommander.com")),tC.dedup.is_tracking_third=null==tC.clientCollectDns&&!tC.campaignForceCookieFirst&&-1!==tC.clientCampaignDns.indexOf(".commander1.com"),tC.dedup.setup("brands",[]).setup("tc_scompshop",["shopping","kelkoo"]).setup("tc_scomnet",["facebook","linkedin","viadeo","trombi","myspace","orkut","habbo","xing","yammer","twitter"]).setup("tc_ssearchv",["q","p","q","query","encquery","query","q","q","query","query","qt","terms","query","q","q","rdata","qs","q","wd","qs","text","q","q","query","query","q","q","szukaj","qt","q","q","q","k","q","searchExpr","q","q","query","query","q","q","search_for","q","q","search_word","query","q","words","qt","q","q","q","q","q","q","q","query","q","q","q"]).setup("tc_ssearche",["google","yahoo","msn","aol","aol","lycos","ask","altavista","netscape","cnn","looksmart","about","mamma","alltheweb","gigablast","voila","virgilio","live","baidu","alice","yandex","najdi","aol","club-internet","mama","seznam","search","wp","onet","netsprint","google.interia","szukacz","yam","pchome","kvasir","sesam","ozu","terra","nostrum","mynet","ekolay","search.ilse","bing","daum","eniro","naver","kvasir","rambler","onetcenter","szukacs","android","duckduckgo","gmx","web","benefind","ecosia","startpage","wow","t-online","qwant"]).setup("tc_scookredir_name",tC.dedup.is_tracking_legacy?"TCREDIRECT":"TCREDIRECT_DEDUP").setup("cj_max",10).setup("enable_dedup",tC.isCurrentVersion()).init(),tC.dedup.setEventList(),tC.dedup_done=!0},tC.dedup.run())),null!=tC.privacy&&!1===tC.privacy.initialized&&tC.privacy.init(),tC.extend({executeListener22_5666_10:function(t){window.top.postMessage('TC.EX.TRIGGER.FIRED:{"id":22,"name":"DOM ready","idcat":1,"cat":"DOM Ready"}',"*")},executeListener31_5666_10:function(t){window.top.postMessage('TC.EX.TRIGGER.FIRED:{"id":31,"name":"DOM ready","idcat":1,"cat":"DOM Ready"}',"*")},executeListener34_5666_10:function(t){window.top.postMessage('TC.EX.TRIGGER.FIRED:{"id":34,"name":"5% de scroll","idcat":4,"cat":"Scroll"}',"*");var e=void 0!==document.height?document.height:(document.documentElement.scrollHeight||document.body.scrollHeight)-document.documentElement.clientHeight,n=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0),i=parseInt(n/e*100),o=void 0!==document.width?document.width:(document.documentElement.scrollWidth||document.body.scrollWidth)-document.documentElement.clientWidth,a=window.scrollX||window.pageXOffset||document.body.scrollLeft+(document.documentElement&&document.documentElement.scrollLeft||0);parseInt(a/o*100);!tC.hasScrolled34_5666_10&&i>5&&(tC.hasScrolled34_5666_10=!0)},executeListener39_5666_10:function(t){window.top.postMessage('TC.EX.TRIGGER.FIRED:{"id":39,"name":"50%","idcat":4,"cat":"Scroll"}',"*");var e=void 0!==document.height?document.height:(document.documentElement.scrollHeight||document.body.scrollHeight)-document.documentElement.clientHeight,n=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0),i=parseInt(n/e*100),o=void 0!==document.width?document.width:(document.documentElement.scrollWidth||document.body.scrollWidth)-document.documentElement.clientWidth,a=window.scrollX||window.pageXOffset||document.body.scrollLeft+(document.documentElement&&document.documentElement.scrollLeft||0);parseInt(a/o*100);!tC.hasScrolled39_5666_10&&i>50&&(tC.hasScrolled39_5666_10=!0)}}),tC.event=tC.event||{},tC.event.page_viewListFunctions=tC.event.page_viewListFunctions||[],tC.event.page_viewListIdTags=tC.event.page_viewListIdTags||[],-1==tC.event.page_viewListIdTags.indexOf("258")&&(tC.event.page_viewListIdTags.push("258"),tC.event.page_viewListFunctions.push((function(t,e){tC.dedup.ValidRules("258")&&(-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.climplus.com".toLowerCase())||(tC.executeTag258_5666_10(t,e),tC.launchTag(258,"OneTag - page_view (virtual)",1867,5666,10,24)))}))),-1==tC.event.page_viewListIdTags.indexOf("237")&&(tC.event.page_viewListIdTags.push("237"),tC.event.page_viewListFunctions.push((function(t,e){tC.dedup.ValidRules("237")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag237_5666_10(t,e),tC.launchTag(237,"AutoTracking | Offre agir",26,5666,10,24))}))),-1==tC.event.page_viewListIdTags.indexOf("259")&&(tC.event.page_viewListIdTags.push("259"),tC.event.page_viewListFunctions.push((function(t,e){tC.dedup.ValidRules("259")&&(tC.executeTag259_5666_10(t,e),tC.launchTag(259,"AutoTracking | ODC, retrait flag sans achat",26,5666,10,24))}))),tC.event.page_view=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.page_viewListFunctions.length;n<i;n++)tC.event.page_viewListFunctions[n](t,e)},tC.event.generic_interactionListFunctions=tC.event.generic_interactionListFunctions||[],tC.event.generic_interactionListIdTags=tC.event.generic_interactionListIdTags||[],tC.event.generic_interaction=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.generic_interactionListFunctions.length;n<i;n++)tC.event.generic_interactionListFunctions[n](t,e)},tC.event.pageview_globalListFunctions=tC.event.pageview_globalListFunctions||[],tC.event.pageview_globalListIdTags=tC.event.pageview_globalListIdTags||[],-1==tC.event.pageview_globalListIdTags.indexOf("204")&&(tC.event.pageview_globalListIdTags.push("204"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("204")&&(-1==document.location.toString().toLowerCase().indexOf("cedeo".toLowerCase())&&-1!=document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())||(tC.executeTag204_5666_10(t,e),tC.launchTag(204,"AutoTracking | Ajout panier devis",26,5666,10,29)))}))),-1==tC.event.pageview_globalListIdTags.indexOf("214")&&(tC.event.pageview_globalListIdTags.push("214"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("214")&&(-1==document.location.toString().toLowerCase().indexOf("/commande/".toLowerCase())&&-1!=document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())||(tC.executeTag214_5666_10(t,e),tC.launchTag(214,"AutoTracking | Message erreur",26,5666,10,29)))}))),-1==tC.event.pageview_globalListIdTags.indexOf("228")&&(tC.event.pageview_globalListIdTags.push("228"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("228")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag228_5666_10(t,e),tC.launchTag(228,"AutoTracking | Product locator",26,5666,10,29))}))),-1==tC.event.pageview_globalListIdTags.indexOf("230")&&(tC.event.pageview_globalListIdTags.push("230"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("230")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag230_5666_10(t,e),tC.launchTag(230,"AutoTracking | Clic produit liste",26,5666,10,29))}))),-1==tC.event.pageview_globalListIdTags.indexOf("237")&&(tC.event.pageview_globalListIdTags.push("237"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("237")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag237_5666_10(t,e),tC.launchTag(237,"AutoTracking | Offre agir",26,5666,10,29))}))),-1==tC.event.pageview_globalListIdTags.indexOf("242")&&(tC.event.pageview_globalListIdTags.push("242"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("242")&&(tC.executeTag242_5666_10(t,e),tC.launchTag(242,"AutoTracking | prod loc infos",26,5666,10,29))}))),-1==tC.event.pageview_globalListIdTags.indexOf("252")&&(tC.event.pageview_globalListIdTags.push("252"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("252")&&(tC.executeTag252_5666_10(t,e),tC.launchTag(252,"AutoTracking | Event begin_checkout",26,5666,10,29))}))),-1==tC.event.pageview_globalListIdTags.indexOf("218")&&(tC.event.pageview_globalListIdTags.push("218"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("218")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag218_5666_10(t,e),tC.launchTag(218,"Fix | DSC - checkout horaires",26,5666,10,29))}))),-1==tC.event.pageview_globalListIdTags.indexOf("189")&&(tC.event.pageview_globalListIdTags.push("189"),tC.event.pageview_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("189")&&(tC.executeTag189_5666_10(t,e),tC.launchTag(189,"Fix | Update page EMC",26,5666,10,29))}))),tC.event.pageview_global=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.pageview_globalListFunctions.length;n<i;n++)tC.event.pageview_globalListFunctions[n](t,e)},tC.event.optinListFunctions=tC.event.optinListFunctions||[],tC.event.optinListIdTags=tC.event.optinListIdTags||[],-1==tC.event.optinListIdTags.indexOf("188")&&(tC.event.optinListIdTags.push("188"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("188")&&(tC.executeTag188_5666_10(t,e),tC.launchTag(188,"GA4 - 0.legacy lookup table",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("146")&&(tC.event.optinListIdTags.push("146"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("146")&&(tC.executeTag146_5666_10(t,e),tC.launchTag(146,"GA4 - 1.config",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("148")&&(tC.event.optinListIdTags.push("148"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("148")&&(tC.executeTag148_5666_10(t,e),tC.launchTag(148,"GA4 - 2.page_view",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("427")&&(tC.event.optinListIdTags.push("427"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("427")&&(tC.executeTag427_5666_10(t,e),tC.launchTag(427,"event container loaded dispatcher",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("208")&&(tC.event.optinListIdTags.push("208"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("208")&&-1!=document.location.toString().toLowerCase().indexOf("www.dispart.fr".toLowerCase())&&(tC.executeTag208_5666_10(t,e),tC.launchTag(208,"OneTag - GA4 config",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("245")&&(tC.event.optinListIdTags.push("245"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("245")&&(tC.executeTag245_5666_10(t,e),tC.launchTag(245,"Variabiliser optin pour event",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("217")&&(tC.event.optinListIdTags.push("217"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("217")&&(-1!=document.location.toString().toLowerCase().indexOf("commande".toLowerCase())&&-1!=document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())||(tC.executeTag217_5666_10(t,e),tC.launchTag(217,"AutoTracking | Collecte de la source de trafic",26,5666,10,32)))}))),-1==tC.event.optinListIdTags.indexOf("237")&&(tC.event.optinListIdTags.push("237"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("237")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag237_5666_10(t,e),tC.launchTag(237,"AutoTracking | Offre agir",26,5666,10,32))}))),-1==tC.event.optinListIdTags.indexOf("442")&&(tC.event.optinListIdTags.push("442"),tC.event.optinListFunctions.push((function(t,e){tC.dedup.ValidRules("442")&&(tC.executeTag442_5666_10(t,e),tC.launchTag(442,"[NEXTPULSE] - Actions view_promo & select_promo",26,5666,10,32))}))),tC.event.optin=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.optinListFunctions.length;n<i;n++)tC.event.optinListFunctions[n](t,e)},tC.event.ot_eventListFunctions=tC.event.ot_eventListFunctions||[],tC.event.ot_eventListIdTags=tC.event.ot_eventListIdTags||[],tC.event.ot_event=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.ot_eventListFunctions.length;n<i;n++)tC.event.ot_eventListFunctions[n](t,e)},tC.event.ot_ecommerceListFunctions=tC.event.ot_ecommerceListFunctions||[],tC.event.ot_ecommerceListIdTags=tC.event.ot_ecommerceListIdTags||[],tC.event.ot_ecommerce=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.ot_ecommerceListFunctions.length;n<i;n++)tC.event.ot_ecommerceListFunctions[n](t,e)},tC.event.event_globalListFunctions=tC.event.event_globalListFunctions||[],tC.event.event_globalListIdTags=tC.event.event_globalListIdTags||[],-1==tC.event.event_globalListIdTags.indexOf("212")&&(tC.event.event_globalListIdTags.push("212"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("212")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag212_5666_10(t,e),tC.launchTag(212,"AutoTracking (impulse) | Demande d'information",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("223")&&(tC.event.event_globalListIdTags.push("223"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("223")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag223_5666_10(t,e),tC.launchTag(223,"AutoTracking | Code promo",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("225")&&(tC.event.event_globalListIdTags.push("225"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("225")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag225_5666_10(t,e),tC.launchTag(225,"AutoTracking | script carrousel marketing",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("235")&&(tC.event.event_globalListIdTags.push("235"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("235")&&-1==document.location.toString().toLowerCase().indexOf("dispart.fr".toLowerCase())&&(tC.executeTag235_5666_10(t,e),tC.launchTag(235,"AutoTracking | Bug affichage panier",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("243")&&(tC.event.event_globalListIdTags.push("243"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("243")&&(tC.executeTag243_5666_10(t,e),tC.launchTag(243,"AutoTracking | offre elargie",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("269")&&(tC.event.event_globalListIdTags.push("269"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("269")&&(tC.executeTag269_5666_10(t,e),tC.launchTag(269,"AutoTracking | Visiteur search",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("272")&&(tC.event.event_globalListIdTags.push("272"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("272")&&(tC.executeTag272_5666_10(t,e),tC.launchTag(272,"AutoTracking | Dispo pdt ABtasty",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("273")&&(tC.event.event_globalListIdTags.push("273"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("273")&&(tC.executeTag273_5666_10(t,e),tC.launchTag(273,"AutoTracking | Contact agence",26,5666,10,37))}))),-1==tC.event.event_globalListIdTags.indexOf("440")&&(tC.event.event_globalListIdTags.push("440"),tC.event.event_globalListFunctions.push((function(t,e){tC.dedup.ValidRules("440")&&(tC.executeTag440_5666_10(t,e),tC.launchTag(440,"Ecoute_client - remontée CS",26,5666,10,37))}))),tC.event.event_global=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.event_globalListFunctions.length;n<i;n++)tC.event.event_globalListFunctions[n](t,e)},tC.event.info_produit_okListFunctions=tC.event.info_produit_okListFunctions||[],tC.event.info_produit_okListIdTags=tC.event.info_produit_okListIdTags||[],tC.event.info_produit_ok=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.info_produit_okListFunctions.length;n<i;n++)tC.event.info_produit_okListFunctions[n](t,e)},tC.event.purchaseListFunctions=tC.event.purchaseListFunctions||[],tC.event.purchaseListIdTags=tC.event.purchaseListIdTags||[],-1==tC.event.purchaseListIdTags.indexOf("257")&&(tC.event.purchaseListIdTags.push("257"),tC.event.purchaseListFunctions.push((function(t,e){tC.dedup.ValidRules("257")&&(-1==document.location.toString().toLowerCase().indexOf("www.sfic.com".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.asturienne.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.dispart.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.climplus.com".toLowerCase())||(tC.executeTag257_5666_10(t,e),tC.launchTag(257,"OneTag - purchase",1867,5666,10,40)))}))),tC.event.purchase=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.purchaseListFunctions.length;n<i;n++)tC.event.purchaseListFunctions[n](t,e)},tC.event._pageviewListFunctions=tC.event._pageviewListFunctions||[],tC.event._pageviewListIdTags=tC.event._pageviewListIdTags||[],-1==tC.event._pageviewListIdTags.indexOf("272")&&(tC.event._pageviewListIdTags.push("272"),tC.event._pageviewListFunctions.push((function(t,e){tC.dedup.ValidRules("272")&&(tC.executeTag272_5666_10(t,e),tC.launchTag(272,"AutoTracking | Dispo pdt ABtasty",26,5666,10,41))}))),-1==tC.event._pageviewListIdTags.indexOf("277")&&(tC.event._pageviewListIdTags.push("277"),tC.event._pageviewListFunctions.push((function(t,e){tC.dedup.ValidRules("277")&&("VAR"!=tc_vars.user_profile&&"VI"!=tc_vars.user_profile||-1!=document.location.toString().toLowerCase().indexOf("/p/".toLowerCase())&&(tC.executeTag277_5666_10(t,e),tC.launchTag(277,"AutoTracking | Bug quantité",26,5666,10,41)))}))),tC.event._pageview=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event._pageviewListFunctions.length;n<i;n++)tC.event._pageviewListFunctions[n](t,e)},tC.event.validation_odc_partListFunctions=tC.event.validation_odc_partListFunctions||[],tC.event.validation_odc_partListIdTags=tC.event.validation_odc_partListIdTags||[],tC.event.validation_odc_part=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.validation_odc_partListFunctions.length;n<i;n++)tC.event.validation_odc_partListFunctions[n](t,e)},tC.event.validation_odcListFunctions=tC.event.validation_odcListFunctions||[],tC.event.validation_odcListIdTags=tC.event.validation_odcListIdTags||[],-1==tC.event.validation_odcListIdTags.indexOf("263")&&(tC.event.validation_odcListIdTags.push("263"),tC.event.validation_odcListFunctions.push((function(t,e){tC.dedup.ValidRules("263")&&-1!=document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&(tC.executeTag263_5666_10(t,e),tC.launchTag(263,"OneTag - validation_odc (part/pro) - Point P excluded",2830,5666,10,43))}))),tC.event.validation_odc=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.validation_odcListFunctions.length;n<i;n++)tC.event.validation_odcListFunctions[n](t,e)},tC.event.add_to_cartListFunctions=tC.event.add_to_cartListFunctions||[],tC.event.add_to_cartListIdTags=tC.event.add_to_cartListIdTags||[],-1==tC.event.add_to_cartListIdTags.indexOf("264")&&(tC.event.add_to_cartListIdTags.push("264"),tC.event.add_to_cartListFunctions.push((function(t,e){tC.dedup.ValidRules("264")&&(-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.climplus.com".toLowerCase())||(tC.executeTag264_5666_10(t,e),tC.launchTag(264,"OneTag - add_to_cart",2830,5666,10,44)))}))),tC.event.add_to_cart=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.add_to_cartListFunctions.length;n<i;n++)tC.event.add_to_cartListFunctions[n](t,e)},tC.event.click_rdv_agenceListFunctions=tC.event.click_rdv_agenceListFunctions||[],tC.event.click_rdv_agenceListIdTags=tC.event.click_rdv_agenceListIdTags||[],-1==tC.event.click_rdv_agenceListIdTags.indexOf("265")&&(tC.event.click_rdv_agenceListIdTags.push("265"),tC.event.click_rdv_agenceListFunctions.push((function(t,e){tC.dedup.ValidRules("265")&&(-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.climplus.com".toLowerCase())||(tC.executeTag265_5666_10(t,e),tC.launchTag(265,"OneTag - click_rdv_agence",2830,5666,10,45)))}))),tC.event.click_rdv_agence=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.click_rdv_agenceListFunctions.length;n<i;n++)tC.event.click_rdv_agenceListFunctions[n](t,e)},tC.event.view_itemListFunctions=tC.event.view_itemListFunctions||[],tC.event.view_itemListIdTags=tC.event.view_itemListIdTags||[],-1==tC.event.view_itemListIdTags.indexOf("266")&&(tC.event.view_itemListIdTags.push("266"),tC.event.view_itemListFunctions.push((function(t,e){tC.dedup.ValidRules("266")&&(-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.climplus.com".toLowerCase())||(tC.executeTag266_5666_10(t,e),tC.launchTag(266,"OneTag - view_item",2830,5666,10,46)))}))),tC.event.view_item=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.view_itemListFunctions.length;n<i;n++)tC.event.view_itemListFunctions[n](t,e)},tC.event.EventListFunctions=tC.event.EventListFunctions||[],tC.event.EventListIdTags=tC.event.EventListIdTags||[],tC.event.Event=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.EventListFunctions.length;n<i;n++)tC.event.EventListFunctions[n](t,e)},tC.event.eventListFunctions=tC.event.eventListFunctions||[],tC.event.eventListIdTags=tC.event.eventListIdTags||[],-1==tC.event.eventListIdTags.indexOf("293")&&(tC.event.eventListIdTags.push("293"),tC.event.eventListFunctions.push((function(t,e){tC.dedup.ValidRules("293")&&(tC.executeTag293_5666_10(t,e),tC.launchTag(293,"[NEXTPULSE] - UA to GA4",26,5666,10,48))}))),tC.event.event=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.eventListFunctions.length;n<i;n++)tC.event.eventListFunctions[n](t,e)},tC.event.pageviewListFunctions=tC.event.pageviewListFunctions||[],tC.event.pageviewListIdTags=tC.event.pageviewListIdTags||[],-1==tC.event.pageviewListIdTags.indexOf("148")&&(tC.event.pageviewListIdTags.push("148"),tC.event.pageviewListFunctions.push((function(t,e){tC.dedup.ValidRules("148")&&(tC.executeTag148_5666_10(t,e),tC.launchTag(148,"GA4 - 2.page_view",26,5666,10,49))}))),-1==tC.event.pageviewListIdTags.indexOf("276")&&(tC.event.pageviewListIdTags.push("276"),tC.event.pageviewListFunctions.push((function(t,e){tC.dedup.ValidRules("276")&&("PUNCHOUT"!==tc_vars.user_subprofile||"int-punchout.pointp.fr"===window.location.hostname||"rec-punchout.pointp.fr"===window.location.hostname||String(tc_vars.env_site||"").toLowerCase().startsWith("nextpulse_")||(tC.executeTag276_5666_10(t,e),tC.launchTag(276,"Fix | PUNCHOUT",26,5666,10,49)))}))),tC.event.pageview=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.pageviewListFunctions.length;n<i;n++)tC.event.pageviewListFunctions[n](t,e)},tC.event.nl_subscribeListFunctions=tC.event.nl_subscribeListFunctions||[],tC.event.nl_subscribeListIdTags=tC.event.nl_subscribeListIdTags||[],tC.event.nl_subscribe=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.nl_subscribeListFunctions.length;n<i;n++)tC.event.nl_subscribeListFunctions[n](t,e)},tC.event._begin_checkoutListFunctions=tC.event._begin_checkoutListFunctions||[],tC.event._begin_checkoutListIdTags=tC.event._begin_checkoutListIdTags||[],tC.event._begin_checkout=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event._begin_checkoutListFunctions.length;n<i;n++)tC.event._begin_checkoutListFunctions[n](t,e)},tC.event.event_nextListFunctions=tC.event.event_nextListFunctions||[],tC.event.event_nextListIdTags=tC.event.event_nextListIdTags||[],-1==tC.event.event_nextListIdTags.indexOf("420")&&(tC.event.event_nextListIdTags.push("420"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("420")&&(tC.executeTag420_5666_10(t,e),tC.launchTag(420,"event_next dispatcher",26,5666,10,53))}))),-1==tC.event.event_nextListIdTags.indexOf("293")&&(tC.event.event_nextListIdTags.push("293"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("293")&&(tC.executeTag293_5666_10(t,e),tC.launchTag(293,"[NEXTPULSE] - UA to GA4",26,5666,10,53))}))),-1==tC.event.event_nextListIdTags.indexOf("289")&&(tC.event.event_nextListIdTags.push("289"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("289")&&(tC.executeTag289_5666_10(t,e),tC.launchTag(289,"[NEXTPULSE] - Actions",26,5666,10,53))}))),-1==tC.event.event_nextListIdTags.indexOf("418")&&(tC.event.event_nextListIdTags.push("418"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("418")&&(tC.executeTag418_5666_10(t,e),tC.launchTag(418,"NEXT-FIX-ODC Confirmation",26,5666,10,53))}))),-1==tC.event.event_nextListIdTags.indexOf("421")&&(tC.event.event_nextListIdTags.push("421"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("421")&&(tC.executeTag421_5666_10(t,e),tC.launchTag(421,"Nextpulse QA",26,5666,10,53))}))),-1==tC.event.event_nextListIdTags.indexOf("424")&&(tC.event.event_nextListIdTags.push("424"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("424")&&(-1==document.location.toString().toLowerCase().indexOf("/inscription/nouveau-client".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("/connexion".toLowerCase())||(tC.executeTag424_5666_10(t,e),tC.launchTag(424,"Distinction PRO/PART",26,5666,10,53)))}))),-1==tC.event.event_nextListIdTags.indexOf("440")&&(tC.event.event_nextListIdTags.push("440"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("440")&&(tC.executeTag440_5666_10(t,e),tC.launchTag(440,"Ecoute_client - remontée CS",26,5666,10,53))}))),-1==tC.event.event_nextListIdTags.indexOf("442")&&(tC.event.event_nextListIdTags.push("442"),tC.event.event_nextListFunctions.push((function(t,e){tC.dedup.ValidRules("442")&&(tC.executeTag442_5666_10(t,e),tC.launchTag(442,"[NEXTPULSE] - Actions view_promo & select_promo",26,5666,10,53))}))),tC.event.event_next=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.event_nextListFunctions.length;n<i;n++)tC.event.event_nextListFunctions[n](t,e)},tC.event.generate_leadListFunctions=tC.event.generate_leadListFunctions||[],tC.event.generate_leadListIdTags=tC.event.generate_leadListIdTags||[],tC.event.generate_lead=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.generate_leadListFunctions.length;n<i;n++)tC.event.generate_leadListFunctions[n](t,e)},tC.event.sign_upListFunctions=tC.event.sign_upListFunctions||[],tC.event.sign_upListIdTags=tC.event.sign_upListIdTags||[],-1==tC.event.sign_upListIdTags.indexOf("425")&&(tC.event.sign_upListIdTags.push("425"),tC.event.sign_upListFunctions.push((function(t,e){tC.dedup.ValidRules("425")&&(tC.executeTag425_5666_10(t,e),tC.launchTag(425,"event ODC PRO & PART",26,5666,10,86))}))),tC.event.sign_up=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.sign_upListFunctions.length;n<i;n++)tC.event.sign_upListFunctions[n](t,e)},tC.event.abonnement_easysavListFunctions=tC.event.abonnement_easysavListFunctions||[],tC.event.abonnement_easysavListIdTags=tC.event.abonnement_easysavListIdTags||[],tC.event.abonnement_easysav=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.abonnement_easysavListFunctions.length;n<i;n++)tC.event.abonnement_easysavListFunctions[n](t,e)},tC.event.cl_page_viewListFunctions=tC.event.cl_page_viewListFunctions||[],tC.event.cl_page_viewListIdTags=tC.event.cl_page_viewListIdTags||[],-1==tC.event.cl_page_viewListIdTags.indexOf("206")&&(tC.event.cl_page_viewListIdTags.push("206"),tC.event.cl_page_viewListFunctions.push((function(t,e){tC.dedup.ValidRules("206")&&(-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.climplus.com".toLowerCase())||(tC.executeTag206_5666_10(t,e),tC.launchTag(206,"OneTag - page_view",2830,5666,10,88)))}))),tC.event.cl_page_view=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.cl_page_viewListFunctions.length;n<i;n++)tC.event.cl_page_viewListFunctions[n](t,e)},tC.event.cl_begin_checkoutListFunctions=tC.event.cl_begin_checkoutListFunctions||[],tC.event.cl_begin_checkoutListIdTags=tC.event.cl_begin_checkoutListIdTags||[],-1==tC.event.cl_begin_checkoutListIdTags.indexOf("309")&&(tC.event.cl_begin_checkoutListIdTags.push("309"),tC.event.cl_begin_checkoutListFunctions.push((function(t,e){tC.dedup.ValidRules("309")&&(-1==document.location.toString().toLowerCase().indexOf("www.asturienne.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&-1==document.location.toString().toLowerCase().indexOf("www.pointp.fr".toLowerCase())||(tC.executeTag309_5666_10(t,e),tC.launchTag(309,"OneTag - begin_checkout",2830,5666,10,89)))}))),tC.event.cl_begin_checkout=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.cl_begin_checkoutListFunctions.length;n<i;n++)tC.event.cl_begin_checkoutListFunctions[n](t,e)},tC.event.media_validation_odc_proListFunctions=tC.event.media_validation_odc_proListFunctions||[],tC.event.media_validation_odc_proListIdTags=tC.event.media_validation_odc_proListIdTags||[],-1==tC.event.media_validation_odc_proListIdTags.indexOf("421")&&(tC.event.media_validation_odc_proListIdTags.push("421"),tC.event.media_validation_odc_proListFunctions.push((function(t,e){tC.dedup.ValidRules("421")&&(tC.executeTag421_5666_10(t,e),tC.launchTag(421,"Nextpulse QA",26,5666,10,90))}))),tC.event.media_validation_odc_pro=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.media_validation_odc_proListFunctions.length;n<i;n++)tC.event.media_validation_odc_proListFunctions[n](t,e)},tC.event.click_easysavListFunctions=tC.event.click_easysavListFunctions||[],tC.event.click_easysavListIdTags=tC.event.click_easysavListIdTags||[],-1==tC.event.click_easysavListIdTags.indexOf("435")&&(tC.event.click_easysavListIdTags.push("435"),tC.event.click_easysavListFunctions.push((function(t,e){tC.dedup.ValidRules("435")&&-1!=document.location.toString().toLowerCase().indexOf("www.cedeo.fr".toLowerCase())&&(tC.executeTag435_5666_10(t,e),tC.launchTag(435,"OneTag - click_easysav",2830,5666,10,91))}))),tC.event.click_easysav=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.click_easysavListFunctions.length;n<i;n++)tC.event.click_easysavListFunctions[n](t,e)},tC.event.validation_odc_pointp_cedeoproListFunctions=tC.event.validation_odc_pointp_cedeoproListFunctions||[],tC.event.validation_odc_pointp_cedeoproListIdTags=tC.event.validation_odc_pointp_cedeoproListIdTags||[],-1==tC.event.validation_odc_pointp_cedeoproListIdTags.indexOf("438")&&(tC.event.validation_odc_pointp_cedeoproListIdTags.push("438"),tC.event.validation_odc_pointp_cedeoproListFunctions.push((function(t,e){tC.dedup.ValidRules("438")&&(tC.executeTag438_5666_10(t,e),tC.launchTag(438,"OneTag - validation_odc (part/pro) - Point P included & Cedeo Pro",2830,5666,10,92))}))),tC.event.validation_odc_pointp_cedeopro=function(t,e){tc_array_events=tC.container_5666_10.init_tc_array_events(e);for(var n=0,i=tC.event.validation_odc_pointp_cedeoproListFunctions.length;n<i;n++)tC.event.validation_odc_pointp_cedeoproListFunctions[n](t,e)},tC.extend({container:{reload:function(){var t=arguments[0];tC.reload_events=!0,tC.container_position=0,tC.containerList&&tC.each(tC.containerList,(function(e,n){"object"==typeof tC["container_"+n]&&"function"==typeof tC["container_"+n].reload&&(tC["container_"+n].reload(t,!0),tC.reload_events=!1)}))}}}),containerIdExtend={},container=window.tC_5666_10||{},containerApi={load:function(t,e){tC.container_position++,tC.hitCounter_5666_10(),this.datalayer(),tC.array_launched_tags=[],tC.array_launched_tags_keys=[],"object"!=typeof t&&(t={}),"boolean"!=typeof e&&(e=!1),void 0===t.exclusions&&(t.exclusions=[]),-1===t.exclusions.indexOf("datastorage")&&this.datastorage(),-1===t.exclusions.indexOf("deduplication")&&this.deduplication(),-1===t.exclusions.indexOf("internalvars")&&this.internalvars(),-1===t.exclusions.indexOf("privacy")&&this.privacy(),-1===t.exclusions.indexOf("eventlisteners")&&this.eventlisteners(),!1!==tC.reload_events&&void 0!==t.events||(t.events={}),tC.each(t.events,(function(t,e){tC.event&&"function"==typeof tC.event[t]&&e.length>0&&(void 0===e[1]?tC.event[t](e[0]):tC.event[t](e[0],e[1]))}))},reload:function(t,e){"boolean"!=typeof e&&(e=!1),e||(tC.container_position=0,tC.reload_events=!0),this.load(arguments[0],!0)},datalayer:function(){"undefined"==typeof tc_vars&&(window.tc_vars=[]);var t="user_code_naf|user_type|AB_Test_Principal|email|attributionToken|googleFilters|info_banner|mandatory_fields|main_CTA|user_invoice_settings|commercials_list|commercial_type|commercial_name|commercial_position|commercial_creative|product_trademark|env_pwa|env_template|env_work|env_channel|env_language|env_country|env_dnt|env_site|order_email|user_code|account_id|visit_type|user_visitorId|user_newcustomer|user_rights|user_profile|user_subprofile|user_program|user_shop_attached_code|user_shop_attached_name|user_shop_attached_postalcode|user_shop_attached_city|user_area|user_id|user_gender|user_category|user_recency|user_frequency|user_amount|user_logged|user_postalcode|page_cat_id1|page_cat_id2|page_cat_id3|page_cat_id4|page_referrer|page_url|page_brand|page_agency|page_cat4|category_level|page_cat1|page_cat2|page_cat3|page_name|page_error|checkout_step|order_quantity_total|order_delivery_slot|order_shipping_amount|order_amount_tf|order_amount_ati|coupon_status|voucher_code|order_discount|order_delivery_date|order_id|order_amount_ati_without_sf|order_amount_ati_with_sf|order_discount_ati|order_ship_ati|order_amount_tf_without_sf|order_amount_tf_with_sf|order_ship_tf|order_newcustomer|order_tax|order_payment_methods|order_shipping_method|order_status|order_currency|order_email_optin|order_products_number|order_products|product_ean|product_category1|product_category2|product_category3|product_category4|product_category5|product_price|product_price_max|product_promo|product_variant|product_variant_quantity|product_id|product_name|product_category|product_unitprice_ati|product_unitprice_tf|product_currency|product_url_page|product_url_picture|product_breadcrumb_id|product_breadcrumb_label|product_instock|search_type|suggestion_term|suggestion_result|list_name|list_size|products|product_position|list_sorting|list_products|search_keywords|search_page_number|search_results_number|search_filters".split("|");for(var e in t)tc_vars.hasOwnProperty(t[e])||(tc_vars[t[e]]="");window.top.postMessage("TC.EX.EXT_VARS.RELOAD","*")},datastorage:function(){window.top.postMessage("TC.EX.DATASTORAGE.RELOAD","*")},deduplication:function(){tC.dedup&&(tC.dedup.LeA=!1,tC.dedup.LeAD=!1,tC.dedup.LeC=!1,tC.dedup.LeCD=!1,tC.dedup.LeV=!1,tC.dedup.LeVD=!1,tC.dedup.FeA=!1,tC.dedup.FeAD=!1,tC.dedup.FeC=!1,tC.dedup.FeCD=!1,tC.dedup.FeV=!1,tC.dedup.FeVD=!1,tC.dedup.AeA=[],tC.dedup.AeC=[],tC.dedup.AeV=[],tC.dedup.init(),tC.dedup.setEventList())},eventlisteners:function(){window.removeEventListener("scroll",tC.executeListener34_5666_10),window.addEventListener("scroll",tC.executeListener34_5666_10),window.removeEventListener("scroll",tC.executeListener39_5666_10),window.addEventListener("scroll",tC.executeListener39_5666_10)},internalvars:function(){var t=tC.internalvars_5666_10.listVar;if(t.length>0)for(var e=0;e<t.length;e++)tC.internalvars_5666.initiators["var"+t[e]]();window.top.postMessage("TC.EX.INT_VARS.RELOAD","*")},privacy:function(){tC.privacy&&tC.privacy.init()},init_tc_array_events:function(t){void 0===t&&(t={});var e="delivery_option|block_message|order_amount_tf|commercials_list|event_name|kpi_strategy|items|event_type|event_user_action|method|funnel_type|value|step_name|validation_status|search_term|search_method|search_field|filter|sharing_method|content_type|item_id|agency_name|file_name|transaction_id|tax|currency|shipping|affiliation|coupon|AB_Test_Principal|promo_code|email|btnDisponibilite|category|action|label|page_name|list_products|product_brand|product_id|product_name|product_price|product_quantity|product_promo|product_ean|commercial_type|commercial_name|commercial_position|commercial_creative|product|products|page_path|products_added|split_products|order_products|user|order_shipping_method|env_template|order_id|payment_method|searched_agency|number_agency_results|main_cta|POR_status|Days_since_POR|shipping_fees|order_type|id|buton_name|type".split("|");for(var n in e)t.hasOwnProperty(e[n])||(t[e[n]]="");return t},cact:function(){var t=arguments;"trigger"===t[0]&&(t[0]="trigger_5666_10"),window.caReady.push(t)},get_info:function(){var t=Object.assign({},container);return delete t.api,t},get_config:function(){return Object.assign({},tC.config)}},containerIdExtend.container_5666_10=containerApi,tC.extend(containerIdExtend),container.api=containerApi,void 0===tC.containerList&&(tC.containerList=[]),tC.containerList.push("5666_10"),window.tc_array_events=tC.container_5666_10.init_tc_array_events([]),tC.cact&&(tC.cact.trigger_5666_10=function(){var t=tC.cactUtils.formatArgumentsV2(arguments),e=t.event,n=Object.assign({},t.properties),i=Object.assign({},t.config),o=t.callback,a=tC.config||{};i.sourceKey||a.sourceKey||!container.sourceKey||(i.sourceKey=container.sourceKey),i.siteId||i.id_site||a.siteId||!container.id_site||(i.siteId=container.id_site),tC.cact.trigger(e,n,i,o)},tC.cact.trigger_5666_10._tc_version=2),window["tC"+currentContainer.id_site+"_"+currentContainer.id_container]=tC,window.postMessage('TC.EX.CONTAINER:{"id":'+currentContainer.id_container+',"ids":'+currentContainer.id_site+',"v":"'+currentContainer.containerVersion+'","g":'+currentContainer.generatorVersion+',"p":'+tC.container_position+',"url":"'+(document.currentScript?document.currentScript.src:"")+'"}',"*")}();
tC.container_5666_10.datalayer();tC.array_launched_tags=[];tC.array_launched_tags_keys=[];

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/
if(window.location.hostname.includes("punchout")&&!window.location.hostname.match(/^(rec-|int-)/)&&!window.location.hostname.includes(".loc")&&!["localhost","ppr.cedeo.fr"].includes(window.location.hostname))
{window.tc_vars.client_name="";switch(String(tc_vars["punchoutId"])){case"3f0e2b43-efab-4215-a120-99a3a729bbb6":case"65752009-2a94-4785-8a3c-284d5ecea1a4":tc_vars["client_name"]="BOUYGUES";break;case"4af7f667-98d4-4e35-9cc1-dcb34a02e8c9":case"7acb39fd-7cf9-4594-b168-8a5952ed4cd9":tc_vars["client_name"]="EIFFAGE";break;case"f9b88a23-627a-4844-bfbe-fb56cf490b12":case"30c9a26f-3f1c-4705-885a-72ffa871df20":tc_vars["client_name"]="EQUANS";break;case"09595cc4-b636-4572-887e-89d53cd0c307":tc_vars["client_name"]="SOLETANCHE BACHY";break;case"298e8cf4-2bbd-46eb-9e28-612caef02f74":case"9252fce2-211a-4308-bf58-fb9fa8ec2e4d":tc_vars["client_name"]="VEOLIA";break;case"fbd9ba9b-6e13-42bc-80d7-0e368bc768c9":tc_vars["client_name"]="KAEFER";break;default:tc_vars["client_name"]="";break;}}
tc_vars["tech_environment"]="";if(document.cookie.includes("nextpulse=true")||document.cookie.includes("AbTest_Cookie_nextpulse10=1")||document.cookie.includes("AbTest_Cookie_nextpulse30=1")||document.cookie.includes("AbTest_Cookie_nextpulse50=1")||document.cookie.includes("AbTest_Cookie_nextpulse75=1")){tc_vars["tech_environment"]="NextPulse";}else{tc_vars["tech_environment"]="Drupal";}
try{var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){cookies[i]=cookies[i].trim();}
var abTestCookie=cookies.find(function(c){return c.startsWith('AbTest_Cookie_nextpulse=')||c.startsWith('AbTest_Cookie_nextpulse10=')||c.startsWith('AbTest_Cookie_nextpulse30=')||c.startsWith('AbTest_Cookie_nextpulse50=')||c.startsWith('AbTest_Cookie_nextpulse75=');});if(abTestCookie&&abTestCookie.split('=')[1]==='1'&&typeof tc_vars==='object'&&typeof tc_vars["env_site"]==='string'&&!tc_vars["env_site"].startsWith('Nextpulse_')&&['Homepage','Fiche produit','Catalogue - Produits','Recherches'].includes(tc_vars["env_template"])){tc_vars["env_site"]="Nextpulse_"+tc_vars["env_site"];}}catch(e){}
try{var ref=document.referrer;tc_vars["previous_env_template"]=(ref&&new URL(ref).hostname===location.hostname)?localStorage.getItem("previous_env_template"):"";}catch(e){tc_vars["previous_env_template"]="";}
localStorage.setItem("previous_env_template",tc_vars["env_template"]);if(tc_vars["user_profile"]==="VI"||tc_vars["user_profile"]==="ATC"){try{var turnover=isNaN(parseFloat(tc_vars["user_stats_turnover"]))?null:parseFloat(tc_vars["user_stats_turnover"]);var sales=isNaN(parseFloat(tc_vars["user_stats_sales"]))?null:parseFloat(tc_vars["user_stats_sales"]);var webNum=isNaN(parseFloat(tc_vars["user_stats_totalTurnover"]))?null:parseFloat(tc_vars["user_stats_totalTurnover"]);if(turnover===null||sales===null||webNum===null){window.classificationResult="NA";}
var result;if(turnover>0&&turnover===sales&&webNum===1){window.classificationResult="WEB(1)_ONLY";}else if(turnover>0&&turnover===sales&&webNum>1){window.classificationResult="WEB(X)_ONLY";}else if(turnover===0&&sales>0&&webNum===0){window.classificationResult="AG_ONLY";}else if(turnover>0&&turnover<sales&&webNum===1){window.classificationResult="WEB(1)_AG";}else if(turnover>0&&turnover<sales&&webNum>1){window.classificationResult="WEB(X)_AG";}else if(turnover===0&&sales===0&&webNum===0){window.classificationResult="0 Commandes";}else if(turnover>sales){window.classificationResult="NA";}else if(webNum===0&&sales>0){window.classificationResult="AG_ONLY";}else if(webNum>0){window.classificationResult="Pas de Commandes récentes";}else{window.classificationResult="NA";}}catch(e){}}
if(tc_vars.user_profile==="VI"){try{localStorage.setItem('prev_user_id',tc_vars.user_id||"NA");localStorage.setItem('prev_user_code',tc_vars.user_code||"NA");localStorage.setItem('prev_user_subprofile',tc_vars.user_subprofile||"NA");tc_vars["prev_user_id"]=tc_vars["user_id"];tc_vars["prev_user_code"]=tc_vars["user_code"];tc_vars["prev_user_subprofile"]=tc_vars["user_subprofile"];}catch(e){}}
if(tc_vars.user_profile!=="VI"){try{tc_vars["prev_user_id"]=localStorage.getItem('prev_user_id')||"NA";tc_vars["prev_user_code"]=localStorage.getItem('prev_user_code')||"NA";tc_vars["prev_user_subprofile"]=localStorage.getItem('prev_user_subprofile')||"NA";}catch(e){}}
if(tc_vars["user_profile"]==="VI"){var CS_AchatWebRecent;if(parseFloat(tc_vars["user_stats_turnover"])>0){CS_AchatWebRecent=1}else{CS_AchatWebRecent=0}
var CS_AchatWebTotal;if(parseFloat(tc_vars["user_stats_totalNumOrders"])>0){CS_AchatWebTotal=parseFloat(tc_vars["user_stats_totalNumOrders"])}else{CS_AchatWebTotal=0}
var CS_AchatAgenceRecent;if(parseFloat(tc_vars["user_stats_sales"])>0){CS_AchatAgenceRecent=1}else{CS_AchatAgenceRecent=0}
var CS_AchatAgenceTotal;if(tc_vars["user_stats_firstDateCustomerDocument"]){if(!parseFloat(tc_vars["user_stats_totalNumOrders"])>0){CS_AchatAgenceTotal=1}else{CS_AchatAgenceTotal=0};}
var CS_statut_achat;if(CS_AchatWebTotal>0){if(CS_AchatWebTotal===1){CS_statut_achat="Avec_cmdWeb_1";}else if(CS_AchatWebTotal===2){CS_statut_achat="Avec_cmdWeb_2";}else{CS_statut_achat="Avec_cmdWeb_PlusDe2";}}else{CS_statut_achat="Sans_cmdWeb_Total";}
if(CS_AchatAgenceTotal>0){CS_statut_achat+="-Avec_cmdAgence_Total";}else{CS_statut_achat+="-Sans_cmdAgence_Total";}
if(CS_AchatWebRecent>0){CS_statut_achat+="_Avec_cmdWeb_Recent";}
if(CS_AchatAgenceRecent>0){CS_statut_achat+="_Avec_cmdAgence_Recent";}}
if(typeof(bidule)!=='string'){var bidule="";tc_vars["bidule"]="";}
window.addEventListener("mousedown",function(){try{if(window.event.target.innerText.toLowerCase().replaceAll(" ","_")==="achat_en_1_clic"||window.event.target.innerText.toLowerCase().replaceAll(" ","_")==="valider_mon_panier"||window.event.target.innerText.toLowerCase().replaceAll(" ","_")==="valider_ma_commande"){localStorage.setItem("validation_panier","encours")}}catch(e){}})
try{if(document.location.pathname.startsWith('/c/')){var position_pdt="";var elements=document.getElementsByClassName("js-product-card");for(var i=0;i<elements.length;i++){elements[i].setAttribute("onmousedown",'position_pdt = '+i+';')}}}catch(e){}
try{if(document.location.pathname.startsWith('/p/')){var ajout_list_name=setInterval(function(){try{if(document.getElementsByClassName("sg-instance-products-related-placeholder sg-instance-products-related-processed").length>0){nb_total_article=document.getElementsByClassName("sg-instance-products-related-placeholder sg-instance-products-related-processed").length
for(t=0;t<nb_total_article;t++){bidule="tc_vars['bidule']='"+document.getElementsByClassName("sg-instance-products-related-placeholder sg-instance-products-related-processed")[t].parentElement.firstElementChild.innerHTML+"'"
document.getElementsByClassName("sg-instance-products-related-placeholder sg-instance-products-related-processed")[t].setAttribute("onmousedown",bidule)
clearInterval(ajout_list_name);}}}catch(e){}},1000);}}catch(e){}
var achats_en_attente="";var devis_en_attente="";var panier_en_attente="";var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function(){},f=l.Base={extend:function(a){n.prototype=this;var b=new n;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)
a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},j=l.WordArray=f.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)
for(var e=0;e<a;e++)
b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);else if(65535<d.length)
for(e=0;e<a;e+=4)
b[c+e>>>2]=d[e>>>2];else
b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)
b.push(4294967296*h.random()|0);return new j.init(b,a)}}),m=k.enc={},s=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}
return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)
d[c>>>3]|=parseInt(a.substr(c,2),16)<<24-4*(c%8);return new j.init(d,b/2)}},p=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)
d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)
d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new j.init(d,b)}},t=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},q=l.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new j.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e)
this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}
return new j.init(g,c)},clone:function(){var a=f.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new u.HMAC.init(a,d)).finalize(b)}}});var u=k.algo={};return k}(Math);(function(Math){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;var H=[];var K=[];(function(){function isPrime(n){var sqrtN=Math.sqrt(n);for(var factor=2;factor<=sqrtN;factor++){if(!(n%factor)){return false;}}
return true;}
function getFractionalBits(n){return((n-(n|0))*0x100000000)|0;}
var n=2;var nPrime=0;while(nPrime<64){if(isPrime(n)){if(nPrime<8){H[nPrime]=getFractionalBits(Math.pow(n,1/2));}
K[nPrime]=getFractionalBits(Math.pow(n,1/3));nPrime++;}
n++;}}());var W=[];var SHA256=C_algo.SHA256=Hasher.extend({_doReset:function(){this._hash=new WordArray.init(H.slice(0));},_doProcessBlock:function(M,offset){var H=this._hash.words;var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];var f=H[5];var g=H[6];var h=H[7];for(var i=0;i<64;i++){if(i<16){W[i]=M[offset+i]|0;}else{var gamma0x=W[i-15];var gamma0=((gamma0x<<25)|(gamma0x>>>7))^((gamma0x<<14)|(gamma0x>>>18))^(gamma0x>>>3);var gamma1x=W[i-2];var gamma1=((gamma1x<<15)|(gamma1x>>>17))^((gamma1x<<13)|(gamma1x>>>19))^(gamma1x>>>10);W[i]=gamma0+W[i-7]+gamma1+W[i-16];}
var ch=(e&f)^(~e&g);var maj=(a&b)^(a&c)^(b&c);var sigma0=((a<<30)|(a>>>2))^((a<<19)|(a>>>13))^((a<<10)|(a>>>22));var sigma1=((e<<26)|(e>>>6))^((e<<21)|(e>>>11))^((e<<7)|(e>>>25));var t1=h+sigma1+ch+K[i]+W[i];var t2=sigma0+maj;h=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0;}
H[0]=(H[0]+a)|0;H[1]=(H[1]+b)|0;H[2]=(H[2]+c)|0;H[3]=(H[3]+d)|0;H[4]=(H[4]+e)|0;H[5]=(H[5]+f)|0;H[6]=(H[6]+g)|0;H[7]=(H[7]+h)|0;},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;dataWords[nBitsLeft>>>5]|=0x80<<(24-nBitsLeft%32);dataWords[(((nBitsLeft+64)>>>9)<<4)+14]=Math.floor(nBitsTotal/0x100000000);dataWords[(((nBitsLeft+64)>>>9)<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;this._process();return this._hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});C.SHA256=Hasher._createHelper(SHA256);C.HmacSHA256=Hasher._createHmacHelper(SHA256);}(Math));function tc_events_global(var1,var2,var3,var4,var5,var6,var7,var8,var9,var10,var11,var12){if(Object.keys(var3).length===1&&Object.values(var3)[0]===''&&Object.keys(var3)[0]==='main_cta'){}else{if(Array.isArray(var3.products_added)){var3.products_added=var3.products_added.filter(function(product){return product!==null;});}
if(var3.env_template==="Compte"&&var3.action==="Impression listes produits"){return;}
if(typeof document.referrer==='string'&&!document.referrer.includes("/mon-compte")&&var3&&var3.page_name==="Mon espace client"&&var3.page_path==="/mon-compte"){return;}
try{if(var3.env_template==="Tunnel de paiement - confirmation"&&var3.order_id===""){var3.order_id=var3.split_products[0].split_id}}catch(e){}
try{if(var2==='Pageview'){tC.event._pageview(null,var3);}
if(var3.category==="Engagement"&&var3.label==="j'essaye gratuitement"){tC.event.click_easysav(null,var3);}
if(var3.category==="Ecommerce"){if("Ajout au panier"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajout au panier variante"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajout rapide"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajout Rapide"===var3.action){tC.event._add_to_cart(null,var3);}
if("Mon compte - Ajout au panier"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajouter commande au panier"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajouter wishlist au panier"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajout au panier simplifié"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajout panier - SoluPlus"===var3.action){tC.event._add_to_cart(null,var3);}
if("Achat en 1 Clic"===var3.action){tC.event._add_to_cart(null,var3);}
if("Ajout rapide au panier"===var3.action){tC.event._add_to_cart(null,var3);}}
if(var3.env_template==="Tunnel de paiement - confirmation"){tC.event.purchase(null,var3);}
if(document.location.pathname.includes("nouveau-client")){if(tc_array_events.action.includes('Inscription nouveau PRO')){window.ODC_clientType='PRO';}else if(tc_array_events.action.includes('Inscription nouveau PART')){window.ODC_clientType='PART';}}
if(document.location.pathname.includes("nouveau-client")&&var3.event_name==="agency_select"){var3.action="Validation ODC"}
if(var3.action==="Validation ODC"){if(window.ODC_clientType==="PART")tC.event._validation_odc_part(null,var3);if(window.ODC_clientType==="PRO")tC.event._validation_odc_pro(null,var3);}
if(var3.action==="Validation ODC PART"&&'Success'===var3.label){tC.event._validation_odc_part(null,var3);}
if(var3.action==="Validation ODC PRO"&&'Success'===var3.label){tC.event._validation_odc_pro(null,var3);}
if(var3.action.indexOf("RDV_Agence")>-1){tC.event.click_rdv_agence(null,var3);}
if((var3.action==="RDV Showroom"&&var3.category==="Engagement")||(var3.action==="Accès Prendre RDV en showroom")||(var3.label&&var3.label.toLowerCase()==="prendre rdv en showroom")){tC.event._generate_lead(null,var3);}
if(var3.label.indexOf("abonn")>-1&&var3.label.indexOf("newsletter")>-1){tC.event._nl_subscribe(null,var3);}
if((var3.category=='Formulaire')&&(var3.action=='Envoi formulaire de contact')){tC.event._form_submit(null,var3);}
if((var3.category=='Interactions utilisateurs')&&(var3.action=='Validation formulaire')){tC.event._form_submit(null,var3);}
if((var3.category=='Footer')&&(var3.action=='Inscription Newsletter')){tC.event._form_submit(null,var3);}}catch(e){}
try{if(var3.average_time_delivery!==undefined){window.average_time_delivery=var3.average_time_delivery;}}catch(e){}
try{if(var3.main_CTA.startsWith('Valider mon panier')){try{if(tc_vars["user_profile"]==="VI"){document.getElementsByClassName("coupons")[0].lastElementChild.firstElementChild.setAttribute("onmousedown","var testAppearTmr = setInterval(function() {if(document.getElementsByClassName('coupons')[0].lastElementChild.lastElementChild !== null){if(document.getElementsByClassName('coupons')[0].lastElementChild.lastElementChild.lastChild.className !== 'btn-add disabled'){tc_events_global(this,'Event',{'category':'Page_panier','action':'Usage_promo','label':'Ecriture de code promo'});clearInterval(testAppearTmr);}}})")}}catch(e){}
if(document.getElementsByClassName("block block-outstanding-amounts-info")[0]!==undefined){if(document.getElementsByClassName("block block-outstanding-amounts-info")[0].childNodes.length>1){try{var contenu_mon_encours="";contenu_mon_encours=document.getElementsByClassName("block block-outstanding-amounts-info")[0].innerText.replaceAll(" ","_").replaceAll("\n","_")
tc_events_global(this,'Event',{'category':'Page_panier','action':'Encours','label':contenu_mon_encours});}catch(e){}}}}}catch(e){}
try{if((var1.className===undefined)&&(var3.page_path==="/voir-autres-modeles")){return;}}catch(e){}
try{if(var3.action==="Initier recherche"){if(typeof window.deja_trigger==='undefined'){window.deja_trigger='Nouvelle valeur';}else{return;}}
if(var3.action==="Voir gamme"&&var3.category==="Recherche produits"){window.deja_trigger_voir_gamme='Nouvelle valeur';}
if(var3.action==="Barre de recherche"&&var3.category==="Recherche produits"&&typeof window.deja_trigger_voir_gamme!=='undefined'){return;}}catch(e){}
try{if(var3.category==="Recherche produits"){var inputElement=document.querySelector(".form-text.multisearch-widget-input");var h4Element=var1.closest(".results-list").querySelector("h4");if(inputElement){var3.label=inputElement.value;}
if(var3.action==="Mot suggéré"&&h4Element){var3.action="Mot suggéré - "+h4Element.innerText;}}}catch(e){}
if((var2==='Pageview'&&(!var3.page_path||var3.page_path===''))){}
var CONTAINERS_LIMIT=30;for(var i=1;i<=CONTAINERS_LIMIT;i++){var fn='tc_events_'+i;if(typeof window[fn]==='function'){window[fn](var1,var2,var3,var4,var5,var6,var7,var8,var9,var10,var11,var12);}}}}
function isDefined(value){return typeof value!="undefined"&&value!==""&&value!==null&&value!='null';}
if(typeof Object.assign!='function'){Object.defineProperty(Object,"assign",{value:function assign(target,varArgs){'use strict';if(target==null){throw new TypeError('Cannot convert undefined or null to object');}
var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!=null){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey];}}}}
return to;},writable:true,configurable:true});}
String.prototype.includes=function(str){var returnValue=false;if(this.indexOf(str)!==-1){returnValue=true;}
return returnValue;}
function Helper_arrayFilter(arr){return Object.keys(arr).map(function(key){return arr[key]})}
function Helper_isEmpty(value){return(value==null||value==='');}
function getCookie(name){try{var arr=document.cookie.split('; ');for(var i=0;i<arr.length;i++){var split=arr[i].split('=');var cName=split.shift();var cValue=decodeURIComponent(split.join('='));if(name==cName)
return cValue;}
return undefined;}catch(e){}}
if(getCookie("TC_PRIVACY")!=undefined){window.consentState=getCookie("TC_PRIVACY").split("@")[2];}
function convertGA4toOTitems(items){items=items||[];var products=[];for(var i=0;i<items.length;i++){var item=items[i];var product={};product.id=item.item_id;product.price=parseFloat(item.price||1);product.quantity=parseInt(item.quantity||1);product.variant=item.item_variant;product.list_position=item.index;product.discount=parseFloat(item.discount);product.coupon=item.coupon;product.affiliation=item.affiliation;product.product={id:item.item_id,name:item.item_name,price:(item.price||1),currency:(item.currency||'EUR'),category_1:item.item_category,category_2:item.item_category2,category_3:item.item_category3,category_4:item.item_category4,category_5:item.item_category5,brand:item.item_brand,};products.push(product);}
return products}

/*END_CUSTOM_JS_BLOCK1*/
if(tC.privacyCookieDisallowed){tC.setCookie('TCPID','',-1,'',tC.domain());}
tC.id_site='5666';
/*VARIABLES_BLOCK*/
tC.internalvars_5666.initiators=tC.internalvars_5666.initiators||{};tC.internalvars_5666_10={listVar:[]}
tC.internalvars_5666.initiators.var282=function(){tC.internalvars.tc_containers_versions=(function(){var _tc=tC.containersLaunched;var res=[];for(var account in _tc){for(container in _tc[account]){var version=_tc[account][container]['v'];res.push('['+account+'_'+container+'=v'+version+']');}}
return res.join(' + ');})();}
tC.internalvars_5666.initiators.var282();tC.internalvars_5666_10.listVar.push(282);tC.internalvars_5666.initiators.var208=function(){tC.internalvars.user_id_sha256="";if(tc_vars.user_id!==""){tC.internalvars.user_id_sha256=CryptoJS.SHA256(tc_vars["user_id"]).toString()}}
tC.internalvars_5666.initiators.var208();tC.internalvars_5666_10.listVar.push(208);tC.internalvars_5666.initiators.var235=function(){tC.internalvars.user_zoom_level="";try{tC.internalvars.user_zoom_level=Math.round(window.devicePixelRatio*100)}catch(e){tC.internalvars.user_zoom_level="N/A"}}
tC.internalvars_5666.initiators.var235();tC.internalvars_5666_10.listVar.push(235);tC.internalvars_5666.initiators.var260=function(){tC.internalvars.ga4_ep_page_by_default={'env_template':''+tc_vars['env_template']+'','user_profile_page':''+tc_vars['user_profile']+'','env_pwa':''+tc_vars['env_pwa']+'','env_work':''+tc_vars['env_work']+'','env_channel':''+tc_vars['env_channel']+'','page_name':''+tc_vars['page_name']+'','page_brand':''+tc_vars['page_brand']+'','page_agency':''+tc_vars['page_agency']+'','env_site':''+tc_vars['env_site']+'','page_title':''+tc_vars['page_name']+'','page_error':''+tc_vars['page_error']+'','page_cat1':''+tc_vars['page_cat1']+'','page_cat2':''+tc_vars['page_cat2']+'','page_cat3':''+tc_vars['page_cat3']+'','page_cat4':''+tc_vars['page_cat4']+'','page_cat_id1':''+tc_vars['page_cat_id1']+'','page_cat_id2':''+tc_vars['page_cat_id2']+'','page_cat_id3':''+tc_vars['page_cat_id3']+'','page_cat_id4':''+tc_vars['page_cat_id4']+'','product_trademark':''+tc_vars['product_trademark']+'','product_id':''+tc_vars['product_id']+'','category_level':''+tc_vars['category_level']+'','search_results_number':''+tc_vars['search_results_number']+'','search_filters':''+tc_vars[' search_filters']+'','search_page_number':''+tc_vars['search_page_number']+'','product_review':''+tc_vars['product_review']+'','visit_type':''+tc_vars['visit_type']+'','product_lifetime':''+tc_vars['product_lifetime']+'','attributionToken':''+tc_vars['attributionToken']+'','googleFilters':''+tc_vars['googleFilters']+'','tc_containers_versions':tC.internalvars.tc_containers_versions,'debug_converteo':tC.getCookie('debug_converteo'),'user_visitorId':''+tc_vars['user_visitorId']+'','previous_env_template':''+tc_vars['previous_env_template']+'','prev_user_id':tc_vars["prev_user_id"],'prev_user_code':tc_vars["prev_user_code"],'prev_user_subprofile':tc_vars["prev_user_subprofile"]};}
tC.internalvars_5666.initiators.var260();tC.internalvars_5666_10.listVar.push(260);tC.internalvars_5666.initiators.var270=function(){tC.internalvars.ga4_debug_for_legacy_tracking='true';}
tC.internalvars_5666.initiators.var270();tC.internalvars_5666_10.listVar.push(270);tC.internalvars_5666.initiators.var272=function(){function pickStat(pluralKey,fallback){var v=tc_vars[pluralKey];if(v===''||v===undefined||v===null||v==='Invalid'){v=tc_vars[pluralKey.replace('user_stats_','user_stat_')];}
if(v===''||v===undefined||v===null||v==='Invalid'){v=fallback;}
return''+v;}
tC.internalvars.ga4_user_properties={'user_id':''+(tc_vars['user_id']||'')+'','user_rights':''+(tc_vars['user_rights']||'')+'','user_postalcode':''+(tc_vars['user_postalcode']||'')+'','user_profile':''+(tc_vars['user_profile']||'')+'','user_program':''+(tc_vars['user_program']||'')+'','user_area':''+(tc_vars['user_area']||'')+'','user_shop_attached_code':''+(tc_vars['user_shop_attached_code']||'')+'','user_shop_attached_name':''+(tc_vars['user_shop_attached_name']||'')+'','user_shop_attached_postalcode':''+(tc_vars['user_shop_attached_postalcode']||'')+'','user_shop_attached_city':''+(tc_vars['user_shop_attached_city']||'')+'','user_invoice_settings':''+(tc_vars['user_invoice_settings']||'')+'','user_type':''+(tc_vars['user_type']||'')+''};if(tc_vars['user_subprofile']==='PUNCHOUT'){tC.internalvars.ga4_user_properties['punchoutId']=''+(tc_vars['punchoutId']||'')+'';}
if(tc_vars['user_profile']==='VI'||tc_vars['user_profile']==='ATC'){tC.internalvars.ga4_user_properties['user_code_naf']=''+(tc_vars['user_code_naf']||'')+'';tC.internalvars.ga4_user_properties['user_stats_sales']=pickStat('user_stats_sales',0);tC.internalvars.ga4_user_properties['user_stats_turnover']=pickStat('user_stats_turnover',0);tC.internalvars.ga4_user_properties['user_origin_inscription']=''+(tc_vars['user_origin_inscription']||'')+'';tC.internalvars.ga4_user_properties['user_stats_appPart']=pickStat('user_stats_appPart',0);tC.internalvars.ga4_user_properties['user_stats_appTotal']=pickStat('user_stats_appTotal',0);tC.internalvars.ga4_user_properties['user_stats_quotePart']=pickStat('user_stats_quotePart',0);tC.internalvars.ga4_user_properties['user_stats_quoteTotal']=pickStat('user_stats_quoteTotal',0);tC.internalvars.ga4_user_properties['user_stats_webNum']=pickStat('user_stats_webNum',0);tC.internalvars.ga4_user_properties['user_stats_webPart']=pickStat('user_stats_webPart',0);tC.internalvars.ga4_user_properties['user_stats_webTotal']=pickStat('user_stats_webTotal',0);tC.internalvars.ga4_user_properties['purchaseSegmentLabel']=pickStat('user_stats_purchaseSegmentLabel','').substring(0,36);tC.internalvars.ga4_user_properties['purchaseSegmentCode']=pickStat('user_stats_purchaseSegmentCode','');tC.internalvars.ga4_user_properties['user_stats_segment_CA']=pickStat('user_stats_segment_CA',0);tC.internalvars.ga4_user_properties['user_historique_achat']=''+(tc_vars['user_historique_achat']||0)+'';tC.internalvars.ga4_user_properties['user_stats_promoCodePart']=pickStat('user_stats_promoCodePart',0);tC.internalvars.ga4_user_properties['user_stats_totalNumOrders']=pickStat('user_stats_totalNumOrders','');tC.internalvars.ga4_user_properties['account_id']=''+(tc_vars['user_id']||'')+'';tC.internalvars.ga4_user_properties['user_subprofile']=''+(tc_vars['user_subprofile']||'')+'';tC.internalvars.ga4_user_properties['company_id']=''+(tc_vars['user_code']||'')+'';tC.internalvars.ga4_user_properties['historique_achat']=''+(window.classificationResult||'')+'';tC.internalvars.ga4_user_properties['user_invoice_settings']=''+(tc_vars['user_invoice_settings']||'')+'';tC.internalvars.ga4_user_properties['payment_ease']=''+(tc_vars['payment_ease']||'')+'';}}
tC.internalvars_5666.initiators.var272();tC.internalvars_5666_10.listVar.push(272);tC.internalvars_5666.initiators.var278=function(){tC.internalvars.cookieConsent=tC.getCookie("TC_PRIVACY").split("@")[2];}
tC.internalvars_5666.initiators.var278();tC.internalvars_5666_10.listVar.push(278);tC.internalvars_5666.initiators.var280=function(){tC.internalvars.performanceConsent="";try{if(tC.privacy.cookieData&&tC.privacy.cookieData.length>0&&tC.privacy.cookieData[0]==='0'){tC.internalvars.performanceConsent="true";}else{tC.internalvars.performanceConsent="false";}}catch(e){}}
tC.internalvars_5666.initiators.var280();tC.internalvars_5666_10.listVar.push(280);tC.internalvars_5666.initiators.var268=function(){tC.internalvars.ga4_stream_id="";var env=(tc_vars&&tc_vars.env_site||"").toLowerCase().replace(/^nextpulse_/,"");var ID_BY_ENV={pointp:"G-BVJTCFY3CW",asturienne:"G-EDSELWYNNE",bphilibert:"G-VJ106VQR5H",bzhmx:"G-GR1NM0C2MJ",cbamx:"G-GXPM8NGY2X",cdlelec:"G-FNGN3LVDC7",cedeo:"G-J1LSTKZCYB",clim:"G-G8CT6B68FN",decoceram:"G-9V733HB96P",dispano:"G-B893C0BNZC",dispart:"G-8X685PN4Z4",sfic:"G-RE1QFZFVVF",panofr:"G-44K920BW20",cbc:"G-4KV97C1Y0H",fabre:"G-7B994BNZ2T"};if(ID_BY_ENV.hasOwnProperty(env)){tC.internalvars.ga4_stream_id=ID_BY_ENV[env];}
if(!tC.internalvars.ga4_stream_id){var host=(location.hostname||"").toLowerCase().replace(/\.$/,"");var HOST_MAP=[{re:/(^|\.)cedeo\.fr$/,id:"G-J1LSTKZCYB"},{re:/(^|\.)pointp\.fr$/,id:"G-BVJTCFY3CW"},{re:/(^|\.)dispano\.fr$/,id:"G-B893C0BNZC"},{re:/(^|\.)dispart\.fr$/,id:"G-8X685PN4Z4"},{re:/(^|\.)climplus\.com$/,id:"G-G8CT6B68FN"},{re:/(^|\.)asturienne\.fr$/,id:"G-EDSELWYNNE"},{re:/(^|\.)sfic\.com$/,id:"G-RE1QFZFVVF"},{re:/(^|\.)bretagne-materiaux\.fr$/,id:"G-GR1NM0C2MJ"},{re:/(^|\.)cdl-elec\.fr$/,id:"G-FNGN3LVDC7"},{re:/(^|\.)cba-materiaux\.fr$/,id:"G-GXPM8NGY2X"}];for(var i=0;i<HOST_MAP.length;i++){if(HOST_MAP[i].re.test(host)){tC.internalvars.ga4_stream_id=HOST_MAP[i].id;break;}}}}
tC.internalvars_5666.initiators.var268();tC.internalvars_5666_10.listVar.push(268);tC.internalvars_5666.initiators.var332=function(){tC.internalvars.ga4_ep_virtual_page={'user_profile_page':''+tc_vars['user_profile']+'','env_pwa':''+tc_vars['env_pwa']+'','env_work':''+tc_vars['env_work']+'','env_channel':''+tc_vars['env_channel']+'','page_name':''+tc_vars['page_name']+'','page_brand':''+tc_vars['page_brand']+'','page_agency':''+tc_vars['page_agency']+'','page_error':''+tc_vars['page_error']+'','page_cat1':''+tc_vars['page_cat1']+'','page_cat2':''+tc_vars['page_cat2']+'','page_cat3':''+tc_vars['page_cat3']+'','page_cat4':''+tc_vars['page_cat4']+'','category_level':''+tc_vars['category_level']+'','tc_containers_versions':tC.internalvars.tc_containers_versions,'visit_type':''+tc_vars['visit_type']+'','user_visitorId':''+tc_vars['user_visitorId']+''};}
tC.internalvars_5666.initiators.var332();tC.internalvars_5666_10.listVar.push(332);tC.internalvars_5666.initiators.var334=function(){tC.internalvars.ga3_stream_id="";switch(tc_vars["env_site"]){case"pointp":tC.internalvars.ga3_stream_id="UA-56970382-1";break;case"asturienne":tC.internalvars.ga3_stream_id="UA-66880357-8";break;case"bphilibert":tC.internalvars.ga3_stream_id="UA-66880357-17";break;case"bzhmx":tC.internalvars.ga3_stream_id="UA-66880357-9";break;case"cbamx":tC.internalvars.ga3_stream_id="UA-66880357-10";break;case"cdlelec":tC.internalvars.ga3_stream_id="UA-66880357-11";break;case"cedeo":tC.internalvars.ga3_stream_id="UA-66880357-12";break;case"clim":tC.internalvars.ga3_stream_id="UA-52501944-1";break;case"decoceram":tC.internalvars.ga3_stream_id="UA-97953291-1";break;case"dispano":tC.internalvars.ga3_stream_id="UA-66880357-13";break;case"dispart":tC.internalvars.ga3_stream_id="UA-66880357-7";break;case"sfic":tC.internalvars.ga3_stream_id="UA-66880357-14";break;case"cbc":tC.internalvars.ga3_stream_id="UA-66880357-40";break;case"fabre":tC.internalvars.ga3_stream_id="UA-66880357-41";break;default:tC.internalvars.ga3_stream_id="";break;}}
tC.internalvars_5666.initiators.var334();tC.internalvars_5666_10.listVar.push(334);tC.internalvars_5666.initiators.var336=function(){tC.internalvars.onetag_ep_by_default={'page_type':''+tc_vars['env_template']+'','user_profile_page':''+tc_vars['user_profile']+'','env_pwa':''+tc_vars['env_pwa']+'','env_work':''+tc_vars['env_work']+'','env_channel':''+tc_vars['env_channel']+'','page_name':''+tc_vars['page_name']+'','page_brand':''+tc_vars['page_brand']+'','page_agency':''+tc_vars['page_agency']+'','page_error':''+tc_vars['page_error']+'','page_cat1':''+tc_vars['page_cat1']+'','page_cat2':''+tc_vars['page_cat2']+'','page_cat3':''+tc_vars['page_cat3']+'','page_cat4':''+tc_vars['page_cat4']+'','category_level':''+tc_vars['category_level']+'','tc_containers_versions':tC.internalvars.tc_containers_versions};}
tC.internalvars_5666.initiators.var336();tC.internalvars_5666_10.listVar.push(336);tC.internalvars_5666.initiators.var337=function(){if(tc_vars['user_subprofile']==="PRO"){tC.internalvars.onetag_up={'id':''+tc_vars['user_id']+'','user_rights':''+tc_vars['user_rights']+'','user_postalcode':''+tc_vars['user_postalcode']+'','user_profile':''+tc_vars['user_profile']+'','user_subprofile':''+tc_vars['user_subprofile']+'','user_program':''+tc_vars['user_program']+'','user_area':''+tc_vars['user_area']+'','user_shop_attached_code':''+tc_vars['user_shop_attached_code']+'','user_shop_attached_name':''+tc_vars['user_shop_attached_name']+'','user_shop_attached_postalcode':''+tc_vars['user_shop_attached_postalcode']+'','user_shop_attached_city':''+tc_vars['user_shop_attached_city']+'','user_invoice_settings':''+tc_vars['user_invoice_settings']+'','user_type':''+tc_vars['user_type']+'','account_id':''+tc_vars['account_id']+'','user_code_naf':''+tc_vars['user_code_naf']+''};}else{tC.internalvars.onetag_up={'id':''+tc_vars['user_id']+'','user_rights':''+tc_vars['user_rights']+'','user_postalcode':''+tc_vars['user_postalcode']+'','user_profile':''+tc_vars['user_profile']+'','user_subprofile':''+tc_vars['user_subprofile']+'','user_program':''+tc_vars['user_program']+'','user_area':''+tc_vars['user_area']+'','user_shop_attached_code':''+tc_vars['user_shop_attached_code']+'','user_shop_attached_name':''+tc_vars['user_shop_attached_name']+'','user_shop_attached_postalcode':''+tc_vars['user_shop_attached_postalcode']+'','user_shop_attached_city':''+tc_vars['user_shop_attached_city']+'','user_invoice_settings':''+tc_vars['user_invoice_settings']+'','user_type':''+tc_vars['user_type']+'','account_id':'N/A','user_code_naf':''+tc_vars['user_code_naf']+''};}}
tC.internalvars_5666.initiators.var337();tC.internalvars_5666_10.listVar.push(337);tC.internalvars_5666.initiators.var341=function(){tC.internalvars.ss_collectDomain="collect.commander1.com";switch(true){case document.location.hostname.includes('dispart'):tC.internalvars.ss_collectDomain='ss.dispart.fr';break;case document.location.hostname.includes('cedeo'):tC.internalvars.ss_collectDomain='ss.cedeo.fr';break;case document.location.hostname.includes('pointp'):tC.internalvars.ss_collectDomain='ss.pointp.fr';break;}}
tC.internalvars_5666.initiators.var341();tC.internalvars_5666_10.listVar.push(341);tC.internalvars_5666.initiators.var351=function(){tC.internalvars._eventStatus=tC.internalvars._eventStatus||{};tC.internalvars.getSharedEventId=function(eventName,tagName){let status=tC.internalvars._eventStatus[eventName];if(!status){status={id:tC.generateEventId(),tags:{}};tC.internalvars._eventStatus[eventName]=status;}
if(status.tags[tagName]){delete tC.internalvars._eventStatus[eventName];status={id:tC.generateEventId(),tags:{}};tC.internalvars._eventStatus[eventName]=status;}
status.tags[tagName]=true;return status.id;};}
tC.internalvars_5666.initiators.var351();tC.internalvars_5666_10.listVar.push(351);tC.internalvars_5666.initiators.var353=function(){tC.internalvars.gads_event_name_customer_profile="";var isNewCustomer=tc_vars["user_stats_totalNumOrders"]>0?false:true;switch((tc_vars['user_subprofile']||"").toUpperCase()){case'PART':if(isNewCustomer===true)tC.internalvars.gads_event_name_customer_profile='Achat nouveaux clients Part';break;case'PRO':if(isNewCustomer===true)tC.internalvars.gads_event_name_customer_profile='Achat nouveaux clients Pro';break;}}
tC.internalvars_5666.initiators.var353();tC.internalvars_5666_10.listVar.push(353);tC.internalvars_5666.initiators.var354=function(){tC.internalvars.gads_event_name_prof="";switch((tc_vars['user_subprofile']||"").toUpperCase()){case'PART':tC.internalvars.gads_event_name_prof='Achat Part';break;case'PRO':tC.internalvars.gads_event_name_prof='Achat Pro';break;}}
tC.internalvars_5666.initiators.var354();tC.internalvars_5666_10.listVar.push(354);
/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/
function helper_staticjs_consentCategories(){var result=[];if('string'==typeof window.tcCategoriesConsent){result=window.tcCategoriesConsent;}
var TC_PRIVACY_CENTER=tC.getCookie('TC_PRIVACY_CENTER');if('string'==typeof TC_PRIVACY_CENTER){result=TC_PRIVACY_CENTER;}
result=result.split(',');for(var i=0;i<result.length;i++){result[i]=parseInt(result[i]);}
return result}
(function(g){var a=arguments;for(var i=1;i<a.length;i++){var e=a[i],f=g[e];if(typeof f=='function'){g[e]=function(){var p=arguments;var o={};o.event='function.'+e;o.parameters=p;window.dataLayer=window.dataLayer||[];window.dataLayer.push(o);return f.apply(g,arguments);}}}})(window,'tc_events_global');
/*END_CUSTOM_JS_BLOCK2*/
tC.container_5666_10.datastorage();

//----------------------------------------------------




//----
//
// Fjord Technologies - Tag Commander tc_exec.js
// Version : 1.2 (09/11/2010)
//

tC.extend({
executeTag258_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - page_view (virtual) ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - page_view (virtual)'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.email_sha256 = (tc_vars["email"] && tc_vars["email"] !== "undefined") ? tc_vars["email"] : tc_array_events["email"];  
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_array_events["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_array_events["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data.page_type = data.env_template;
cact('trigger', 'page_view', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_page_view");
tC.event.media_page_view(null, tc_array_events);
tC.log("Évenement déclenché avec succès");  
})()
}
});
tC.extend({
executeTag237_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Offre agir ***
if(window.location.pathname.includes("/p/") && window.agir_track_OK!=="OK"){
if(document.cookie.includes("TC_PRIVACY")){
window.agir_track_OK = "OK"}
var agir_track = document.querySelector(".tw-bg-success-50 img")
if(document.querySelectorAll(".tw-gap-3 .tw-bg-success-50 img").length>1){
window.agir_track_OKOK = "Selection Agir"}else{
window.agir_track_OKOK = "Offre Agir"}
if(document.querySelector(".tw-bg-success-50 img") && document.querySelector(".fa-hand-holding-seedling")){
//
if (document.querySelector(".tw-bg-success-50 img").closest('.tw-bg-success-50') && document.querySelector(".fa-hand-holding-seedling").closest(".c-accordion-item")) {
setTimeout(function(){
//1er evenemnt qui vient dire que l'élément ciblé est présent sur la page
tc_events_global(this,"Event",{"category":window.agir_track_OKOK,"action":"Affichage","label":"Vue_"+tc_vars["user_profile"]})
//2ème action, en fonction du profil des visiteurs on va ajouter des attributs onmousedown personnalisés au moment du clic sur l'élément ciblé (le badge carbone)
//Si visiteur VA -> attribut action  = 'Clic Connexion' & label = 'Vue_VA'
if(tc_vars["user_profile"]==="VA"){
document.querySelector(".tw-bg-success-50 img").closest('.tw-bg-success-50').setAttribute("onmousedown", "tc_events_global(this,'Event',{'category':'"+window.agir_track_OKOK+"','action':'Clic Connexion','label':'Vue_VA'})")
document.querySelector(".fa-hand-holding-seedling").closest(".c-accordion-item").setAttribute("onmousedown", "tc_events_global(this,'Event',{'category':'"+window.agir_track_OKOK+"','action':'Clic Connexion_zone_INIES','label':'Vue_VA'})")
} 
//Si visiteur VAR -> attribut action  = 'Clic Connexion' & label = 'Vue_VAR'
if(tc_vars["user_profile"]==="VAR"){
document.querySelector(".tw-bg-success-50 img").closest('.tw-bg-success-50').setAttribute("onmousedown", "tc_events_global(this,'Event',{'category':'"+window.agir_track_OKOK+"','action':'Clic Connexion','label':'Vue_VAR'})")
document.querySelector(".fa-hand-holding-seedling").closest(".c-accordion-item").setAttribute("onmousedown", "tc_events_global(this,'Event',{'category':'"+window.agir_track_OKOK+"','action':'Clic Connexion_zone_INIES','label':'Vue_VAR'})")
} 
//Si visiteur VI -> attribut action  = 'Clic Consultation' & label = 'Vue_VI'
if(tc_vars["user_profile"]==="VI"){
document.querySelector(".tw-bg-success-50 img").closest('.tw-bg-success-50').setAttribute("onmousedown", "tc_events_global(this,'Event',{'category':'"+window.agir_track_OKOK+"','action':'Clic Consultation','label':'Vue_VI'})")
document.querySelector(".fa-hand-holding-seedling").closest(".c-accordion-item").setAttribute("onmousedown", "tc_events_global(this,'Event',{'category':'"+window.agir_track_OKOK+"','action':'Clic Consultation_zone_INIES','label':'Vue_VI'})")
} 
}, 500);
}
}
}
}
});
tC.extend({
executeTag259_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | ODC, retrait flag sans achat ***
if(tc_array_events["page_path"] === "/commande/confirmation"){
if(localStorage.getItem("Nouveau_compte_ODC")){
localStorage.removeItem("Nouveau_compte_ODC")}
}
}
});
tC.extend({
executeTag204_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Ajout panier devis ***
if(document.location.pathname.match("^.*.mes-devis.*.[0-9]")){
var ajout_tracking_panier = setInterval(function() {
try{
if(document.getElementsByClassName("add-quote-article").length>0){   
var element_a_suivre = "";
element_a_suivre = document.getElementsByClassName("add-quote-article")[0].querySelector(".buttons");
element_a_suivre.setAttribute("onmousedown","if(this.lastChild.className === 'btn btn-add'){try{tc_events_global(this,'Event',{'category':'Ecommerce','action':'Ajout Rapide','label':''}); sessionStorage.setItem('Ajt_article_devis', 'OUI')}catch(e){};}");    
//ABTastyStartTest(1034478)
clearInterval(ajout_tracking_panier);
}
}catch(e){}
}, 500);
}
}
});
tC.extend({
executeTag214_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Message erreur ***
var detectElement = function(){
var elements = document.getElementsByClassName("c-message c-wysiwig is-variant-error has-icon is-closable");
if (elements.length > 0){
tC.log('Élément trouvé.');
var nb_elements = document.getElementsByClassName("c-message c-wysiwig is-variant-error has-icon is-closable").length
var page_elemnt = document.location.pathname
tc_events_global(this,"Event",{"category":"Compte","action":"Affichage message erreur","label":nb_elements+"_erreur_en_page_"+page_elemnt});
// Vous pouvez ajouter du code supplémentaire ici pour faire quelque chose avec l'élément
} 
};
setTimeout(detectElement, 1000);
}
});
tC.extend({
executeTag228_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Product locator ***
if(tc_array_events["page_path"]==="/product-locator"){
if(window.document.location.host.match("pointp|cedeo")){
if(window._uxa){
window._uxa.push(['trackPageview',  "/Popin_/product-locator" ]);}
//window._uxa.push(['trackPageview',  "/Popin_/product-locator" ]);
}
try{ trackProductLocationEvents() }catch(e){
}
}
}
});
tC.extend({
executeTag230_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Clic produit liste ***
if(document.location.pathname.startsWith("/mon-compte/mes-listes/")){
var elements = document.querySelectorAll('.line-items');
elements.forEach(function(element) {
element.addEventListener('mousedown', function(event) {
// Logique à exécuter lors du mousedown
if (typeof(window.abtasty) === 'object') {
if (typeof(window.abtasty.send) === 'function') {  
window.abtasty.send("event", { ec: "Action Tracking", ea: "Clic_produit_liste", ev: 1 });
}
}
});
});
}
}
});
tC.extend({
executeTag242_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | prod loc infos ***
if(tc_array_events["page_path"]==="/product-locator"){
var observer_prodloc = new MutationObserver(function(mutations, obs){
if(document.querySelector(".js-product-locator-form-suggestions")){
if (document.querySelector(".js-product-locator-form-suggestions").children.length>0){
//setTimeout(changeText, 100);
tC.log(document.querySelector(".product-locator .block-search-wrapper input").value)
var input_prodloc = document.querySelector(".product-locator .block-search-wrapper input").value
tc_events_global(this,"Event",{"category":"tracking_temporaire","action":"valeur_input","label":input_prodloc})
observer_prodloc.disconnect();
}
}
}
);
observer_prodloc.observe(document, {
childList: true,
subtree: true,
characterData: true
});
}
}
});
tC.extend({
executeTag252_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Event begin_checkout ***
if (tc_array_events["page_path"] === "/commande/livraison"){
var T = tc_array_events;
ep.items = GA4_CONVERTER.items_products(T);
// --- Flag split (begin_checkout) ---
var spBC = T["split_products"];
if (Array.isArray(spBC)) {
ep.is_split = spBC.length > 1 ? 1 : 0;
ep.split_count = spBC.length;
ep.order_shipping_method = T["order_shipping_method"] || "";
}
gtag('event', 'begin_checkout', ep);
}
}
});
tC.extend({
executeTag218_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Fix | DSC - checkout horaires ***
try{
var validHostnames = [
'www.cedeo.fr',
'www.cdl-elec.fr',
'www.climplus.com',
'www.dispart.fr'
];
if (document.location.pathname.startsWith("/commande") && validHostnames.includes(document.location.hostname)){
if(tc_array_events.page_path==="/commande/livraison"){
if (typeof tc_array_events !== 'undefined' && 
typeof tc_array_events.split_products !== 'undefined' && 
Array.isArray(tc_array_events.split_products) &&
tc_array_events.split_products.length > 0 &&
typeof tc_array_events.split_products[0].shipping_method !== 'undefined'){
if(tc_array_events.split_products[0].shipping_method.includes("groupé")){
var elements = document.querySelectorAll("div.tw-grid.tw-grid-cols-1.tw-text-sm span.tw-font-weight-600");
for (var i = 0; i < elements.length; i++){
var element = elements[i];
if (element.textContent.includes("0 - ")){
// Si l'élément contient "0 - ", masquez-le
element.style.display = "none";
}
if (element.textContent.includes("5 - ")){
// Si l'élément contient "0 - ", masquez-le
element.style.display = "none";
}
}
}
}
}
if(tc_array_events.page_path==="/commande/paiement"||tc_array_events.page_path==="/commande/confirmation"){
document.querySelector(".tw-text-success-600.tw-font-weight-700.tw-pr-1").style.display="none"
}
}
}catch(e){
}
}
});
tC.extend({
executeTag189_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Fix | Update page EMC ***
try {
// Check if the user is on the correct page
if (document.location.pathname === "/mon-compte/mes-informations") {
// Initialize interval to run code repeatedly
var update_EMC_quickfix = setInterval(function() {
// Check if the elements you want to modify exist on the page
var buttonElements = document.getElementsByClassName("buttons text-right");
if (buttonElements.length > 0) {
try {
var nb_total_column = document.getElementsByClassName("columns").length;
// Loop through all columns
for (var u = 0; u < nb_total_column; u++) {
var currentColumn = document.getElementsByClassName("columns")[u];
var boxTitle = currentColumn.getElementsByClassName("box-title")[0];
// Check if box-title exists and its innerText doesn't include "FACTURATION"
if (boxTitle && !boxTitle.innerText.includes("FACTURATION")) {
var nb_total_cta = currentColumn.getElementsByClassName("buttons text-right").length;
// Loop through all buttons and remove them
for (var t = 0; t < nb_total_cta; t++) {
currentColumn.getElementsByClassName("buttons text-right")[t].remove();
}
}
}
// Clear the interval as the job is done
clearInterval(update_EMC_quickfix);
} catch (e) {
tC.error("An error occurred: ", e);
}
}
}, 50);
}
} catch (e) {}
}
});
tC.extend({
executeTag188_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** GA4 - 0.legacy lookup table ***
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_name'] = function(data) {
var value = 'legacy_event'; // event_name by default
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> soluplus_interaction
case c == 'Compte' && a == 'Chiffrage Soluplus':
case c == 'Compte' && a == 'Clic lien externe' && l == 'Chiffrage Solu+':
value = 'soluplus_interaction';
break;
//*** RETURN ==> generic_interaction
case c == 'Header':
case c == 'Edito':
case c == 'Footer':
case c == 'Services':
case c == 'Page simple':
case c == 'Compte' && a == 'Clic lien externe':
case c == 'Compte' && a == 'Mon Parc':
case c == 'Interactions utilisateurs' && a == 'Ajouter à mon parc':
case c == 'Interactions utilisateurs' && a == 'Fiche produit':
case c == 'Interactions utilisateurs' && a == 'Onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Clic code barre':
case c == 'Interactions utilisateurs' && a == 'Clic page produit':
case c == 'Interactions utilisateurs' && a == 'Clic sur bloc service':
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Ecommerce' && a == 'Clic ensemble':
case c == 'Ecommerce' && a == 'Voir les ensembles avec ce produit':
case c == 'Mon compte' && a == 'Accéder au détail liste':
case c == 'Espace Fidélité' && a.includes('Clic sur'):
case c == 'Espace Fidélité' && a.includes('Interaction utilisateur - '):
case c == 'Marketing' && a == 'Clic univers':
value = 'generic_interaction';
break;
//*** RETURN ==> filter_interaction
case a == 'Accès RDVShowroom':
value = 'Accès_RDVShowroom';
break;
//*** RETURN ==> wts_interaction
case c == 'Engagement':
value = 'wts_interaction';
break;
//*** RETURN ==> ab_test
case c == 'AB test':
value = 'ab_test';
break;
//*** RETURN ==> validation_ODC_PRO
case c == 'Interactions utilisateurs' && a == 'Validation ODC PRO' && l == 'Success':
value = 'validation_ODC_PRO';
break;
//*** RETURN ==> validation_ODC_PART
case c == 'Interactions utilisateurs' && a == 'Validation ODC PART' && l == 'Success':
value = 'validation_ODC_PART';
break;
//*** RETURN ==> display_ATP_Check
case a == 'Affichage ATP check':
value = 'display_ATP_Check';
break;
//*** RETURN ==> clic_ATP_Check
case a == 'Affichage ATP check':
value = 'clic_ATP_Check';
break;
//*** RETURN ==> filter_interaction
case c == 'Filtres':
case c == 'Recherche catalogue' && a == 'Filtres' && l == 'Generique':
case c == 'Recherche catalogue' && a == 'Filtres personnalisés':
case c == 'Recherche catalogue' && a == 'Filtres perso activés':
case c == 'Recherche agence' && a == 'Recherche filtré':
value = 'filter_interaction';
break;
//*** RETURN ==> account_interaction
case c == 'Mon compte' && a == 'Dematerialisation de facture':
value = 'account_interaction';
break;
//*** RETURN ==> slider_interaction
case c == 'Espace Fidélité' && a == 'Clic sur onglet slider':
case c == 'Espace Fidélité' && a.includes('Navigation slider'):
value = 'slider_interaction';
break;
//*** RETURN ==> video_start
case c == 'Interactions utilisateurs' && a == 'Video' && l == 'Play':
value = 'video_start';
break;
//*** RETURN ==> pagination_navigation
case c == 'Recherche produits' && a == 'Pagination':
case c == 'Recherche catalogue' && a == 'Pagination':
case c == 'Recherche marque' && a == 'Pagination':
value = 'pagination_navigation';
break;
//*** RETURN ==> subscribe
case c == 'Espace Fidélité' && a == 'Inscription Boost':
case c == 'Espace Fidélité' && a == 'Navigation Inscription':
value = 'subscribe';
break;
//*** RETURN ==> unsubscribe
case c == 'Compte' && a == 'Désinscription' && l == 'Se désinscrire':
value = 'unsubscribe';
break;
//*** RETURN ==> discover
case c == 'Compte' && a == 'Espace fidélité' && l == 'Découvrir':
value = 'discover';
break;
/************************************
*** share events 
***********************************/
//*** RETURN ==> share
case c == 'Interactions utilisateurs' && a.includes('Partage'):
value = 'share';
break;
/************************************
*** downloads events 
***********************************/
//*** RETURN ==> file_download
case c == 'Compte' && a == 'Télécharger facture':
case c == 'Interactions utilisateurs' && a.includes('Téléchargement'):
value = 'file_download';
break;
//*** RETURN ==> app_reach
case c == 'Marketing' && a == 'Clic sur la bannière app':
value = 'app_reach';
break;
/************************************
*** search events 
***********************************/
//*** RETURN ==> search
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Recherche agence' && a == 'Géolocalisation':
case c == 'Recherche produits' && a == 'Mot suggéré - RECHERCHES RÉCENTES':
case c == 'Recherche produits' && a == 'Mot suggéré - CATÉGORIES':
case c == 'Recherche produits' && a == 'Voir tous les produits':
case c == 'Recherche produits' && a == 'Mot suggéré - MOTS CLÉS':
case c == 'Recherche produits' && a == 'Conseils experts':
case c == 'Recherche produits' && a == 'Mot suggéré - MARQUES':
case c == 'Recherche produits' && a == 'Voir top articles':
case c == 'Recherche produits' && a == 'Initier recherche':
case c == 'Recherche produits' && a == 'Afficher résultats barre':
value = 'search';
break;
//*** RETURN ==> view_search_results
case c == 'Ecommerce' && a == 'view_search_results':
value = 'view_search_results';
break;
/************************************
*** form events 
***********************************/
//*** RETURN ==> form_submit
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire':
case c == 'Footer' && a == 'Inscription Newsletter':
value = 'form_submit';
break;
/************************************
*** login/signup events 
***********************************/
//*** RETURN ==> login
case c == 'Compte' && a == 'Connexion':
value = 'login';
break;
//*** RETURN ==> login
case c == 'Interactions utilisateurs' && a == 'Affichage Connexion/Inscription':
value = 'login_view';
break;
//*** RETURN ==> sign_up_start
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Creer son compte':
case c == 'Compte' && a == 'Inscription nouveau PART - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PRO - Entrée':
value = 'sign_up_start';
break;
//*** RETURN ==> sign_up_error
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau client' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation' && l == 'Erreur':
value = 'sign_up_error';
break;
//*** RETURN ==> sign_up_step
case c == 'Compte' && a == 'Client Optin':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Association de compte email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Activation SMS':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par facture':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Validation mot de passe':
case c == 'Compte' && a.includes('Inscription nouveau PART - Etape'):
case c == 'Compte' && a.includes('Inscription nouveau PRO - Etape'):
value = 'sign_up_step';
break;
//*** RETURN ==> sign_up
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
value = 'sign_up';
break;
/************************************
*** agency events 
***********************************/
//*** RETURN ==> agency_contact
case c == 'Recherche agence' && a == 'Email | Agence':
case c == 'Recherche agence' && a == 'Contact agence':
case c == 'Recherche agence' && a == 'Contacter mon agence':
value = 'agency_contact';
//*** RETURN ==> agency_interaction
case c == 'Recherche agence' && a.includes(' | Agence') && !a.includes('Email'):
case c == 'Recherche agence' && a == 'Itineraires':
case c == 'Recherche agence' && a == 'Changement d\'agence':
case c == 'Recherche agence' && a == 'Fiche agence':
case c == 'Recherche agence' && a.includes('Page'):
value = 'agency_interaction';
break;
//*** RETURN ==> agency_select
case c == 'Recherche agence' && a.includes('Choix d\'agence sur'):
case c == 'Recherche agence' && a == 'Choix d\'agence':
case c == 'Rattachement Agence VA' && a == 'Choix d\'agence ':
value = 'agency_select';
break;
//*** RETURN ==> agency_add_to_wishlist
case c == 'Recherche agence' && a == 'Ajout favori':
value = 'agency_add_to_wishlist';
break;
//*** RETURN ==> agency_rdv
case c == 'Recherche agence' && a.includes('Prendre un rdv'):
value = 'agency_rdv';
/************************************
*** ecommerce events 
***********************************/
//*** RETURN ==> delete_wishlist
case c == 'Ecommerce' && a == 'Supprimer une liste':
value = 'delete_wishlist';
break;
//*** RETURN ==> ask_for_informations
case c == 'Ecommerce' && a == 'Demande d\'information':
case a.includes('Envoi demande'):
value = 'ask_for_informations';
break;
//*** RETURN ==> create_alert
case c == 'Ecommerce' && a == 'Alerte':
value = 'create_alert';
break;
//*** RETURN ==> brand_favorite
case c == 'Ecommerce' && a == 'Ajout favori':
value = 'brand_favorite';
break;
//*** RETURN ==> show_product_preview
case c == 'Interactions utilisateurs' && a == 'Aperçu':
value = 'show_product_preview';
break;
//*** RETURN ==> see_all_products
case c == 'Recherche produits' && a == 'Voir gamme':
case c == 'Ecommerce' && a == 'Voir gamme':
case c == 'Compte' && a == 'Mon Parc' && l == 'Tous les produits':
value = 'see_all_products';
break;
//*** RETURN ==> show_product_availability
case c == 'Recherche disponibilité' && a == 'Géolocalisation':
case c == 'Recherche disponibilité' && a == 'Choix d\'agence ':
case c == 'Interactions utilisateurs' && a == 'Disponibilité à proximité':
value = 'show_product_availability';
break;
//*** RETURN ==> export_to_quotation
case c == 'Compte' && a == 'Exporter dans un devis Tolteck':
value = 'export_to_quotation';
break;
//*** RETURN ==> validate_quotation
case c == 'Ecommerce' && a == 'Valider mon devis':
value = 'validate_quotation';
break;
//*** RETURN ==> validate_quotation_products
case c == 'Ecommerce' && a == 'Valider mon devis partiellement':
value = 'validate_quotation_products';
break;
//*** RETURN ==> error_quotation
case c == 'Ecommerce' && a == 'Erreur validation devis':
value = 'error_quotation';
break;
//*** RETURN ==> select_quantitative_price
case c == 'Ecommerce' && a == 'Selection prix quantitatif':
case c == 'Ecommerce' && a == 'Prix dégressifs':
value = 'select_quantitative_price';
break;
//*** RETURN ==> new_wishlist
case c == 'Ecommerce' && a == 'Créer une nouvelle liste':
value = 'new_wishlist';
break;
//*** RETURN ==> view_item_list
case c == 'Ecommerce' && a == 'Impression listes produits':
case c == 'Ecommerce' && a == 'Impression listes produit':
value = 'view_item_list';
break;
//*** RETURN ==> view_item
case c == 'Ecommerce' && a == 'view_item':
value = 'view_item';
break;
//*** RETURN ==> view_item
case c == 'Ecommerce' && a == 'Impression produit revetement':
value = 'view_item';
break;
//*** RETURN ==> add_to_wishlist
case c == 'Ecommerce' && a == 'Accès - Ajout liste':
case c == 'Ecommerce' && a == 'Mettre de côté':
case c == 'Ecommerce' && a == 'Ajouter à ma liste':
value = 'add_to_wishlist';
break;
//*** RETURN ==> view_promotion
case c == 'Marketing' && a == 'Vue encart promotionnel':
case c == 'Marketing' && a == 'Vue de la bannière':
case c == 'Ecommerce' && a == 'RDV Showroom::Bandeau':
case c == 'Marketing' && a == 'Vue de la bannière app':
case c == 'Marketing' && a == 'Vue encart marketing PDP':
case c == 'Marketing' && a == 'Vue encart panier simplifié':
value = 'view_promotion';
break;
//*** RETURN ==> emc_interaction
case c == 'Compte' && a == 'Actualiser les informations':
case c == 'Compte' && a == 'Clic lien externe':
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Interactions utilisateurs' && a == 'Clic onglet horizontal':
case c == 'Interactions utilisateurs' && a == 'Clic onglet vertical':
case c == 'Mon compte' && a == 'Gérer les droits':
case a == 'Clic CTA' && l.includes('Voir') :
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Clic CTA' && a == 'Consulter mon encours':
case c == 'Marketing' && a == 'Vue encart marketing EMC':
case c == 'Marketing' && a == 'Clic encart marketing EMC':    
value = 'emc_interaction';
break;
//*** RETURN ==> select_promotion
case c == 'Interactions utilisateurs' && a == 'Clic bannière':
case c == 'Marketing' && a == 'Clic encart promotionnel':
case c == 'Marketing' && a == 'Clic sur la bannière':
case c == 'Marketing' && a == 'Clic Frise Marque':
case c == 'Marketing' && a == 'Clic encart panier simplifié':
case c == 'Marketing' && a == 'Clic sur la bannière app':
case c == 'Marketing' && a == 'Clic encart marketing PDP':
value = 'select_promotion';
break;
//*** RETURN ==> select_item
case c == 'Recherche produits' && a == 'Clic produit':
case c == 'Ecommerce' && a == 'Clic produit':
value = 'select_item';
break;
//*** RETURN ==> view_cart
case c == 'Interactions utilisateurs' && a == 'Affichage du mini panier':
value = 'view_cart';
break;
//*** RETURN ==> increase_cart_quantity
case c == 'Ecommerce' && a == 'Ajouter quantité':
case c == 'Ecommerce' && a == 'Ajout quantité pop-in panier':
case c == 'Ecommerce' && a == 'Ajouter quantité - panier simplifié':
value = 'increase_cart_quantity';
break;
//*** RETURN ==> add_to_cart
case c == 'Ecommerce' && a == 'Ajout rapide':
case c == 'Ecommerce' && a == 'Ajout au panier variante':
case c == 'Ecommerce' && a == 'Mon compte - Ajout au panier':
case c == 'Ecommerce' && a == 'Ajout au panier':
case c == 'Ecommerce' && a == 'Immersif::Ajout au panier':
case c == 'Ecommerce' && a == 'Ajout au panier - ensemble':
case c == 'Ecommerce' && a == 'Ajout panier - SoluPlus':
case c == 'Ecommerce' && a == 'Ajout panier - retrait express':
case c == 'Ecommerce' && a == 'Ajout Panier Top Achat Carrousel':
case c == 'Ecommerce' && a == 'Ajout au panier simplifié':
value = 'add_to_cart';
break;
//*** RETURN ==> remove_from_cart
case c == 'Ecommerce' && a == 'Supprimer':
case c == 'Ecommerce' && a == 'Vider mon panier':
case c == 'Ecommerce' && a == 'Enlever quantité':
case c == 'Ecommerce' && a == 'Enlever quantité - panier simplifié':
value = 'remove_from_cart';
break;
//*** RETURN ==> begin_checkout
case c == 'Ecommerce' && a == 'Achat en 1 Clic':
value = 'buy_now_button';
break;
//*** RETURN ==> add_shipping_info
case c == 'Ecommerce' && a == 'Choix de livraison':
case c == 'Ecommerce' && a == 'Etape livraison':
value = 'add_shipping_info';
break;
//*** RETURN ==> add_payment_info
case c == 'Ecommerce' && a == 'Etape paiement':
value = 'add_payment_info';
break;
//*** RETURN ==> checkout_interaction
case c == 'Checkout' && a.includes('Référence'):
case c == 'Checkout' && a == 'Chargement du fichier':
case c == 'Checkout' && a == 'Champs complété':
case c == 'Checkout' && a == 'Champs en erreur':
value = 'checkout_interaction';
break;
//*** RETURN ==> cart_interaction
case c == 'Mon panier' && a == 'Continuer mes achats':
case c == 'Mon panier' && a == 'Consulter ma liste':
case c == 'Mon panier' && a == 'Ajout code promo':
case c == 'Recherche agence | Popin' && a == 'Changement d\'agence':
case c == 'Mon panier' && a == 'Navigation' && l == 'Modifier mon agence':
value = 'cart_interaction';
break;
//*** RETURN ==> purchase
case c == 'Ecommerce' && a == 'Créer une demande d\'achat':
value = 'purchase';
break;
//*** RETURN ==> refund
case c == 'Ecommerce' && a == 'Confirmer l\'annulation de demande d\'achat':
value = 'refund';
break;
//*** RETURN ==> order_request_interaction
case c == 'Ecommerce' && a.includes('Relancer une demande d\'achat'):
case c == 'Ecommerce' && a.includes('demande d\'achat') && a.includes('POR'):
case c == 'Ecommerce' && a.includes(' - demande d\'achat'):
value = 'order_request_interaction';
break;
//*** RETURN ==> validate_payment_facility
case c == 'Compte' && a.includes('Valider ma demande de Facilité de paiement'):
value = 'validate_payment_facility';
break;
//*** RETURN ==> add_promo_code
case c == 'Compte' && a == 'Ajout code promo':
value = 'add_promo_code';
break;
//*** RETURN ==> validate_price
case c == 'Gestion des tarifs' && a.includes('Validation tarifs'):
case c == 'Configuration des prix':
value = 'validate_price';
break;
//*** RETURN ==> checkout_option
case c == 'Tracking_complementaire' && a == 'Checkout_option':
value = 'checkout_option';
break;
//*** RETURN ==> validateCart_promo
case c == 'Ecommerce' && a == 'Validation panier avec promo':
value = 'validateCart_promo';
break;
//*** RETURN ==> checkoutField_completed
case c == 'Checkout' && a == 'Champ complété':
value = 'checkoutField_completed';
break;
//*** RETURN ==> promo_use
case c == 'Checkout' && a == 'Usage_promo':
value = 'promo_use';
break;
//*** RETURN ==> promoCode_success
case c == 'Ecommerce' && a == 'Ajout code promo succes':
value = 'promoCode_success';
break;
//*** RETURN ==> promoCode_failure
case c == 'Ecommerce' && a == 'Ajout code promo echec':
value = 'promoCode_failure';
break;
//*** RETURN ==> validate_paymentMethod
case c == 'Ecommerce' && a == 'Validation mode paiement':
value = 'validate_paymentMethod';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['funnel_type'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Formulaire::Contact
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
value = 'Formulaire::Contact';
break;
//*** RETURN ==> Formulaire::Pieces detachées
case c == 'Interactions utilisateurs' && a == 'Validation formulaire' && l =='Pièces détachées toutes marques':
value = 'Formulaire::Pieces detachées';
break;
//*** RETURN ==> Newsletter::Inscription
case c == 'Footer' && a == 'Inscription Newsletter':
value = 'Newsletter::Inscription';
break;
//*** RETURN ==> Signup
case c == 'Compte' && a.includes('Inscription nouveau PART'):
case c == 'Compte' && a.includes('Inscription nouveau PRO'):
case c == 'Compte' && a == 'Création de compte en ligne':
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Compte' && a == 'Client Optin':
value = 'Signup';
break;
//*** RETURN ==> Checkout
case c == 'Checkout':
value = 'Checkout';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['step_name'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Formulaire::Validation
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire' && l == 'Pièces détachées toutes marques':
case c == 'Footer' && a == 'Inscription Newsletter' && l == 'Succès':
case c == 'Footer' && a == 'Inscription Newsletter' && l == 'Erreur':
value = 'Formulaire::Validation';
break;
//*** RETURN ==> Signup::Optin
case c == 'Compte' && a == 'Client Optin':
value = 'Signup::Optin';
break;
//*** RETURN ==> Signup::{{label}}
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Association de compte email':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Activation SMS':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Inscription par facture':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Validation mot de passe':
value = 'Signup::'+l;
break;
//*** RETURN ==> Signup::{{action}}
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Erreur':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Inscription par email':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
case c == 'Compte' && a == 'Inscription nouveau PART - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PRO - Entrée':
case c == 'Compte' && a.includes('Inscription nouveau PART - Etape'):
case c == 'Compte' && a.includes('Inscription nouveau PRO - Etape'):
value = 'Signup::'+a;
break;
//*** RETURN ==> Checkout::{{action}}
case c == 'Checkout':
value = 'Checkout::'+a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['validation_status'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case l == 'Envoyé':
case l == 'Succès':
case l == 'Erreur':
value = l;
break;
//*** RETURN ==> Envoyé
case l.includes('envoyé'):
value = 'Envoyé';
break;
//*** RETURN ==> Succès
case l.includes('succès'):
value = 'Succès';
break;
//*** RETURN ==> Erreur
case l.includes('erreur'):
case c == 'Checkout' && a.includes('erreur'):
value = 'Erreur';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['search_term'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
value = l;
break;
//*** RETURN ==> {{action}}
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche agence' && a == 'Géolocalisation':
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['search_method'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{action}}
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche agence' && a == 'Géolocalisation':
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['search_field'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Recherche machine
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
value = 'Recherche machine';
break;
//*** RETURN ==> {{category}}
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche agence' && a == 'Géolocalisation':
value = c;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['filter'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Filtres':
case c == 'Recherche catalogue' && a.includes('Filtres'):
value = l;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['sharing_method'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{action}}
case c == 'Interactions utilisateurs' && a.includes('Partage'):
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['content_type'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Produit
case c == 'Interactions utilisateurs' && a.includes('Partager ::'):
value = 'Produit';
break;
//*** RETURN ==> Wishlist
case c == 'Interactions utilisateurs' && a == 'Partage Liste':
value = 'Wishlist';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['item_id'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Interactions utilisateurs' && a.includes('Partager ::'):
value = l;
break;
//*** RETURN ==> Wishlist
case c == 'Interactions utilisateurs' && a == 'Partage Liste':
value = 'Wishlist';
break;
//*** RETURN ==> expanded_offer
case c == 'Offre elargie':
value = 'expanded_offer';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['agency_name'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Recherche disponibilité' && a == 'Choix d\'agence ':
case c == 'Recherche disponibilité' && a == 'Choix d\'agence':
case c == 'Recherche agence' && a == 'Choix d\'agence':
case c == 'Recherche agence' && a.includes('Choix d\'agence sur'):
case c == 'Recherche agence' && a.includes(' | Agence'):
case c == 'Recherche agence' && a == 'Contact agence':
case c == 'Recherche agence' && a == 'Fiche agence':
case c == 'Recherche agence' && a == 'Ajout favori':
case c == 'Recherche agence' && a == 'Page agence | cette agence dispose d\'un showroom':
case c == 'Recherche agence' && a.includes('Prendre un rdv sur la'):
case c == 'Recherche agence' && a.includes('Page') && a.includes(' | Bloc Mktg'):
case c == 'Recherche agence | Popin' && a == 'Changement d\'agence':
value = l;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['file_name'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Interactions utilisateurs' && a.includes('Téléchargement'):
value = l;
break;
//*** RETURN ==> Facture
case c == 'Compte' && a == 'Télécharger facture':
value = 'Facture';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['method'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> SMS
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Activation SMS':
value = 'SMS';
break;
//*** RETURN ==> Facture
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'invoice registration':
value = 'Facture';
break;
//*** RETURN ==> Signup::PRO
case c == 'Compte' && a == 'Inscription nouveau PRO - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
case c == 'Compte' && a.includes('Inscription nouveau PRO - Etape '):
case c == 'Compte' && a == 'Client Optin' && l == 'PRO':
value = 'Signup::PRO';
break;
//*** RETURN ==> Signup::PART
case c == 'Compte' && a == 'Inscription nouveau PART - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a.includes('Inscription nouveau PART - Etape '):
case c == 'Compte' && a == 'Client Optin' && l == 'PART':
value = 'Signup::PART';
break;
//*** RETURN ==> Email
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Creer son compte':
case c == 'Compte' && a == 'Connexion' && l == 'Succès':
case c == 'Compte' && a == 'Connexion' && l == 'Erreur':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Succès':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Erreur':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Association de compte email':
value = 'Email';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['kpi_strategy'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
var u = ''+tc_vars['user_profile']+'' || '';
switch(true) {
//*** RETURN ==> Generic
case c == 'Services':
case c == 'Page simple':
case c == 'Header' && a == 'Navigation':
case c == 'Interactions utilisateurs' && a == 'Clic sur bloc service':
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Interactions utilisateurs' && a == 'Contacter mon agence':
case c == 'Interactions utilisateurs' && a == 'Clic bannière':
case c == 'Recherche catalogue' && a.includes('Filtres'):
case c == 'Compte' && a == 'Clic lien externe':
case c == 'Compte' && a == 'Client Optin':
case c == 'Checkout' && a == 'Chargement du fichier':
case c == 'Checkout' && a == 'Champs complété':
case c == 'Checkout' && a == 'Champs en erreur':
case c == 'Ecommerce' && a == 'Impression listes produits':
value = 'Generic';
break;
//*** RETURN ==> Reach
case c == 'Header' && a == 'MegaMenu':
case c == 'Marketing' && a.includes('bannière'):
case c == 'Marketing' && a.includes('encart promotionnel'):
case c == 'Filtres' && u == 'VA':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche produits' && u == 'VA':
case c == 'Recherche catalogue' && u == 'VA':
case c == 'Recherche marque' && u == 'VA':
case c == 'Recherche agence' && u == 'VA':
case c == 'Recherche disponibilité' && u == 'VA':
value = 'Reach';
break;
//*** RETURN ==> Activation
case c == 'Footer' && a == 'Inscription Newsletter':
case c == 'Interactions utilisateurs' && a == 'Disponibilité à proximité' && u == 'VAR':
case c == 'Interactions utilisateurs' && a.includes('Téléchargement::') && u == 'VAR':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
case c == 'Compte' && a == 'Création de compte en ligne':
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VAR':
case c == 'Ecommerce' && a.includes('Ajout') && u == 'VA':
case c == 'Ecommerce' && a.includes('Ajout') && u == 'VAR':
case c == 'Ecommerce' && a == 'Enlever quantité' && u == 'VA':
case c == 'Ecommerce' && a == 'Enlever quantité' && u == 'VAR':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VA':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VAR':
case c == 'Ecommerce' && a == 'Créer une demande d\'achat' && u == 'VA':
case c == 'Ecommerce' && a == 'Créer une demande d\'achat' && u == 'VAR':
case c == 'Recherche agence' && u == 'VA':
case c == 'Recherche agence' && u == 'VAR':
case c == 'Rattachement Agence VA' && u == 'VAR':
value = 'Activation';
break;
//*** RETURN ==> Engagement
case c == 'Edito':
case c == 'Interactions utilisateurs' && a == 'Aperçu':
case c == 'Interactions utilisateurs' && a == 'Video':
case c == 'Interactions utilisateurs' && a == 'Téléchargement':
case c == 'Interactions utilisateurs' && a == 'Téléchargement Page Conseil':
case c == 'Interactions utilisateurs' && a == 'Fiche produit':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Partage Liste':
case c == 'Interactions utilisateurs' && a == 'Clic code barre':
case c == 'Interactions utilisateurs' && a == 'Clic page produit':
case c == 'Configuration des prix':
case c == 'Gestion des tarifs':
case c == 'Footer' && a == 'Clic footer':
case c == 'Footer' && a == 'Réseaux sociaux':
case c == 'Filtres' && u == 'VI':
case c == 'Filtres' && u == 'VAR':
case c == 'Marketing' && a == 'Clic univers':
case c == 'Marketing' && a == 'Clic Frise Marque':
case c == 'Ecommerce' && a == 'Clic produit':
case c == 'Ecommerce' && a == 'Clic Univers':
case c == 'Ecommerce' && a == 'Clic ensemble':
case c == 'Ecommerce' && a == 'Voir les ensembles avec ce produit':
case c == 'Ecommerce' && a == 'Valider mon devis':
case c == 'Ecommerce' && a == 'Demande d\'information':
case c == 'Ecommerce' && a == 'Relancer une demande d\'achat - popin':
case c == 'Ecommerce' && a == 'Confirmer l\'annulation de demande d\'achat':
case c == 'Ecommerce' && a.includes(' - demande d\'achat'):
case c == 'Ecommerce' && a.includes('demande d\'achat') && a.includes('POR'):
case c == 'Recherche produits' && a == 'Historique' && u == 'VI':
case c == 'Recherche produits' && a == 'Historique' && u == 'VAR':
case c == 'Recherche produits' && a == 'Pagination' && u == 'VI':
case c == 'Recherche produits' && a == 'Pagination' && u == 'VAR':
case c == 'Recherche catalogue' && a == 'Pagination' && u == 'VI':
case c == 'Recherche catalogue' && a == 'Pagination' && u == 'VAR':
case c == 'Recherche marque' && a == 'Pagination' &&u == 'VI':
case c == 'Recherche marque' && a == 'Pagination' && u == 'VAR':
case c == 'Recherche disponibilité' && u == 'VI':
case c == 'Recherche disponibilité' && u == 'VAR':
case c == 'Recherche agence | Popin':
case c == 'Rattachement Agence VA' && u == 'VI':
case c == 'Compte' && a == 'Exporter dans un devis Tolteck':
case c == 'Compte' && a == 'Connexion':
case c == 'Compte' && a == 'Télécharger facture':
case c == 'Mon Compte' && a == 'Accéder au détail liste':
case c == 'Mon Compte' && a == 'Dematerialisation de facture':
case c == 'Mon compte' && a == 'Accéder au détail liste':
case c == 'Mon compte' && a == 'Dematerialisation de facture':
value = 'Engagement';
break;
//*** RETURN ==> Business specific
case c == 'Engagement':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire':
case c == 'Interactions utilisateurs' && a == 'Ajouter à mon parc':
case c == 'Interactions utilisateurs' && a == 'Affichage du mini panier':
case c == 'Interactions utilisateurs' && a == 'Disponibilité à proximité' && u == 'VI':
case c == 'Interactions utilisateurs' && a.includes('Téléchargement::') && u == 'VI':
case c == 'Compte' && a == 'Désinscription':
case c == 'Compte' && a == 'Ajout code promo':
case c == 'Compte' && a == 'Mon Parc':
case c == 'Compte' && a.includes('Valider ma demande de Facilité de paiement'):
case c == 'Mon panier':
case c == 'Checkout':
case c == 'Ecommerce' && a == 'Selection prix quantitatif':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VI':
case c == 'Ecommerce' && a == 'Impression produit revetement':
case c == 'Ecommerce' && a == 'Immersif::Ajout au panier':
case c == 'Ecommerce' && a == 'RDV Showroom::Bandeau':
case c == 'Ecommerce' && a == 'Mettre de côté':
case c == 'Ecommerce' && a == 'Ajouter à ma liste':
case c == 'Ecommerce' && a == 'Créer une nouvelle liste':
case c == 'Ecommerce' && a == 'Supprimer une liste':
case c == 'Ecommerce' && a == 'Vider mon panier':
case c == 'Ecommerce' && a == 'Alerte':
case c == 'Ecommerce' && a == 'Mettre de côté':
case c == 'Ecommerce' && a == 'Supprimer':
case c == 'Ecommerce' && a == 'Validation panier':
case c == 'Ecommerce' && a.includes('Relancer une demande d\'achat'):
case c == 'Ecommerce' && a.includes('Ajout') && u == 'VI':
case c == 'Ecommerce' && a == 'Enlever quantité' && u == 'VI':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VI':
case c == 'Ecommerce' && a == 'Créer une demande d\'achat' && u == 'VI':
case c == 'Recherche agence' && u == 'VI':
value = 'Business specific';
break;
//*** RETURN ==> Retention
case c == 'Espace Fidélité':
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
case c == 'Compte' && a == 'Espace fidélité' && l == 'Découvrir':
value = 'Retention';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_type'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Interactions utilisateurs
case c == 'Recherche disponibilité' && a == 'Choix d\'agence':
case c == 'Engagement':
case c == 'Services' && a == 'Clic lien externe':
case c == 'Services' && a == 'Clic lien interne':
value = 'Interactions utilisateurs';
break;
//*** RETURN ==> Compte
case c == 'Gestion des tarifs':
case c == 'Recherche produit' && a == 'Historique':
value = 'Compte';
break;
//*** RETURN ==> Navigation
// c
case c == 'Edito':
case c == 'Footer':
case c == 'Filtres':
case c == 'Services':
case c == 'Page simple':
case c == 'Configuration des prix':
case c == 'Header' && a == 'Navigation':
case c == 'Header' && a == 'MegaMenu':
value = 'Navigation';
break;
//*** RETURN ==> Ecommerce
case c == 'Mon panier':
case c == 'Checkout':
value = 'Ecommerce';
break;
//*** RETURN ==> Recherche agence
case c == 'Rattachement Agence VA':
value = 'Recherche agence';
break;
//*** RETURN ==> {{category}}
case c == 'Ecommerce':
case c == 'Marketing':
case c == 'Formulaire':
case c == 'Recherche produits':
case c == 'Recherche catalogue':
case c == 'Recherche marque':
case c == 'Recherche disponibilité':
case c == 'Recherche agence':
case c == 'Recherche agence | Popin':
case c == 'Interactions utilisateurs':
case c == 'Compte':
case c == 'Espace Fidélité':
value = c;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_user_action'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Interactions utilisateurs
case c == 'Header':
value = 'Interactions utilisateurs';
break;
//*** RETURN ==> Inscription
case c == 'Compte' && a.includes('Inscription nouveau PART'):
case c == 'Compte' && a.includes('Inscription nouveau PRO'):
value = 'Inscription';
break;
//*** RETURN ==> {{action}}::{{label}}
case c == 'Espace Fidélité':
case c == 'Rattachement Agence VA' && a == 'Choix d\'agence':
case c == 'Recherche catalogue' && a.includes('Filtres'):
case c == 'Mon panier' && a == 'Navigation' && l == 'Modifier mon agence':
case c == 'Ecommerce' && a == 'Ajout au panier' && l.includes('Commande Express'):
case c == 'Ecommerce' && a == 'Ajout au panier' && l == 'Vues éclatées':
case c == 'Ecommerce' && a == 'Ajouter à ma liste':
case c == 'Ecommerce' && a == 'Accès - Ajout liste':
case c == 'Interactions utilisateurs' && a == 'Fiche produit':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Téléchargement':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire' && l == 'Pièces détachées toutes marques':
case c == 'Engagement' && a == 'Quiz':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Validation mot de passe':
case c == 'Compte' && a == 'Mon Parc':
case c == 'Compte' && a == 'Ajout code promo':
case c == 'Services' && a == 'Clic lien externe':
value = a+'::'+l;
break;
//*** RETURN ==> {{category}}
case c == 'Configuration des prix':
value = c;
break;
//*** RETURN ==> {{label}}
case c == 'Compte' && a == 'Espace fidélité' && l == 'Découvrir':
case c == 'Compte' && a == 'Désinscription' && l == 'Se désinscrire':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Créer son compte':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Association de compte email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Activation SMS':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par facture':
value = l;
break;
//*** RETURN ==> {{action}}
case c == 'Interactions utilisateurs':
case c == 'Compte':
case c == 'Mon compte':
case c == 'Engagement':
case c == 'Ecommerce':
case c == 'Mon panier':
case c == 'Checkout':
case c == 'Marketing':
case c == 'Edito':
case c == 'Footer':
case c == 'Formulaire':
case c == 'Services':
case c == 'Recherche produits':
case c == 'Recherche catalogue':
case c == 'Recherche marque':
case c == 'Recherche disponibilité':
case c == 'Recherche agence':
case c == 'Filtres':
case c == 'Page simple':
case c == 'Gestion des tarifs':
case c == 'Compte' && a == 'Connexion':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Compte' && a == 'Télécharger facture':
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_context'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Banner
case c == 'Marketing' && a.includes('bannière'):
case c == 'Interactions utilisateurs' && a.includes('bannière'):
value = 'Banner';
break;
//*** RETURN ==> Forms
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
value = 'Forms';
break;
//*** RETURN ==> My account
case c == 'Compte':
value = 'My account';
break;
//*** RETURN ==> Cart
case c == 'Mon panier':
value = 'Cart';
break;
//*** RETURN ==> Checkout
case c == 'Checkout':
value = 'Checkout';
break;
//*** RETURN ==> Quiz
case c == 'Engagement' && a.includes('Quiz'):
value = 'Quiz';
break;
//*** RETURN ==> Soluplus
case c == 'Compte' && a.includes('Soluplus'):
case c == 'Ecommerce' && a.includes('Soluplus'):
value = 'Soluplus';
break;
//*** RETURN ==> {{category}}
// c
case c == 'Header':
case c == 'Edito':
case c == 'Footer':
value = c;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['items_products'] = function(data) {
var p,
value;
// specific cases for products arrays :
switch(true) {
// Mise à jour du 30/06/2026 suite à la suppression de la boucle produit, on va récupérer aussi dans la boucle item au lieu de produit//
case Array.isArray(data['items']):
var arr = data['items'];
p = [];
for (var i=0; i<arr.length; i++) {
p.push({
product_id: arr[i].item_id,
product_name: arr[i].item_name,
list_name: arr[i].item_list_name,
product_brand: arr[i].item_brand,
product_trademark: arr[i].item_trademark,
product_category1: arr[i].item_category1,
product_category2: arr[i].item_category2,
product_category3: arr[i].item_category3,
product_category4: arr[i].item_category4,
product_category5: arr[i].item_category5,
product_price: arr[i].price,
product_quantity: arr[i].quantity,
product_position: arr[i].index,
product_instock: arr[i].item_instock
});
}
break;      
case Array.isArray(data['split_products']):
var arr = data['split_products'];
p = [];
for (var i=0; i<arr.length; i++) {
p = p.concat(arr[i]['order_products']);
}
break;
case Array.isArray(data['products']):
p = data['products'];
break;
case Array.isArray(data['list_products']):;
p = data['list_products'];
break;
case Array.isArray(data['products_added']):
p = Helper_arrayFilter(data['products_added']); 
break;
case 'object' == typeof data['products']:
p = data['products']
break;
case 'object' == typeof data['list_products']:
p = Helper_arrayFilter(data['list_products']['products'])
break;
case 'object' == typeof tc_vars['order_products']:
p = Helper_arrayFilter(tc_vars['order_products']);
break;
case Array.isArray(tc_vars['list_products']):
p = tc_vars['list_products'];
break;
case '' != data['product_id']:
case '' != data['product_name']:
//case '' != data['product_trademark']:
//case '' != data['product_variant']:
//case '' != data['product_category1']:
//case '' != data['product_category2']:
//case '' != data['product_category3']:
//case '' != data['product_category4']:
//case '' != data['product_category5']:
//case '' != data['product_quantity']:
//case '' != data['product_position']:
//case '' != data['product_price']:
p = {};
p.product_id = data['product_id'];
p.product_name = data['product_name'];
p.product_brand = data['product_trademark'];
p.product_variant = data['product_variant'];
p.product_category1 = data['product_category1'];
p.product_category2 = data['product_category2'];
p.product_category3 = data['product_category3'];
p.product_category4 = data['product_category4'];
p.product_category5 = data['product_category5'];
p.product_quantity = data['product_quantity'];
p.product_position = data['product_position'];
p.product_price = data['product_price'];      
p.product_instock = data['product_instock'];
if(window.stock_suivi){
p.stock_suivi = window.stock_suivi};
break;
}
switch(true) {
case Array.isArray(p):
value = [];
for (var i=0; i<p.length; i++) {
var item = {};
item.item_id = ''+(p[i].product_id || p[i].id)+'';
item.item_name = p[i].product_name || p[i].name;
item.item_list_name = p[i].list_name;
item.item_list_id = undefined;
item.item_brand = p[i].product_brand || p[i].brand || p[i].product_trademark;
item.item_category = p[i].product_category1;
item.item_category2 = p[i].product_category2;
item.item_category3 = p[i].product_category3;
item.item_category4 = p[i].product_category4;
item.item_category5 = p[i].product_category5;
item.price = parseFloat( (''+(p[i].product_price || p[i].price)+'').replace(',', '.') );
item.quantity = p[i].product_quantity || p[i].quantity || 1;
item.index = p[i].product_position;
item.product_instock = p[i].product_instock;
if(window.stock_suivi){
item.stock_suivi = window.stock_suivi};
//item.__promo__ = p[i].product_promo; // custom product scoped dimensions currently unavailable in GA4
//item.__ean__ = p[i].product_ean.toString(); // custom product scoped dimensions currently unavailable in GA4
//item.__instock__ = p[i].product_instock; // custom product scoped dimensions currently unavailable in GA4
value.push(item);
}
break;
case 'object' == typeof p:
value = [];
var item = {};
item.item_id = ''+(p.product_id || p.id)+'';
item.item_name = p.product_name || p.name;
item.item_list_name = p.list_name;
item.item_list_id = undefined;
item.item_brand = p.product_brand || p.brand;
item.item_category = p.product_category1;
item.item_category2 = p.product_category2;
item.item_category3 = p.product_category3;
item.item_category4 = p.product_category4;
item.item_category5 = p.product_category5;
item.price = parseFloat( (''+(p.product_price || p.price)+'').replace(',', '.') );
item.quantity = p.product_quantity || p.quantity || 1;
item.index = p.product_position;
item.product_instock = p.product_instock;
if(window.stock_suivi){
item.stock_suivi = window.stock_suivi};
//item.__promo__ = p[i].product_promo; // custom product scoped dimensions currently unavailable in GA4
//item.__ean__ = p[i].product_ean.toString(); // custom product scoped dimensions currently unavailable in GA4
//item.__instock__ = p[i].product_instock; // custom product scoped dimensions currently unavailable in GA4
value.push(item);
break;
}
return value
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['items_promotions'] = function(data) {
var p,
value;
// specific cases for promotions arrays :
switch(true) {
case '' != data['commercial_name']:
case '' != data['commercial_creative']:
case '' != data['commercial_type']:
case '' != data['commercial_position']:
p = {};
p.commercial_name = data['commercial_name'];
p.commercial_creative = data['commercial_creative'];
p.commercial_position = data['commercial_position'];
break;
case Array.isArray(tc_vars['commercials_list']):
p = tc_vars['commercials_list'];
break;
case 'object' == typeof tc_vars['commercials_list']:
p = tc_vars['commercials_list'];
break;
}
switch(true) {
case Array.isArray(p):
value = [];
for (var i=0; i<p.length; i++) {
var item = {};
item.promotion_id = ''+p[i].commercial_name+'';
item.promotion_name = p[i].commercial_name;
item.creation_name = p[i].commercial_creative;
item.creation_slot = p[i].commercial_position;
//item.location_id = p[i].???;
item.index = p[i].commercial_position;
value.push(item);
}
break;
case 'object' == typeof p:
value = [];
var item = {};
item.promotion_id = ''+p.commercial_name+'';
item.promotion_name = p.commercial_name;
item.creation_name = p.commercial_creative;
item.creation_slot = p.commercial_position;
//item.location_id = p.???;
item.index = p.commercial_position;
value.push(item);
break;
}
return value
}
}
});
tC.extend({
executeTag146_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** GA4 - 1.config ***
if((document.cookie.split('TC_PRIVACY=')[1]?.[0]==='0')&&(document.cookie.includes('TC_PRIVACY_CENTER='))){
tC.scriptElt1 = document.createElement("script");
tC.scriptElt1.id = "tc_script_138_1";
tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id="+tC.internalvars.ga4_stream_id;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
(function () {
var rawCenter = document.cookie.split('TC_PRIVACY_CENTER=')[1]?.split(';')[0] || "";
var accepted = decodeURIComponent(rawCenter).split(','); // ex: ["11","12","13"]
var update = {};
// 11 = Cookies de mesure d’audience
if (accepted.includes("11")) {
update.analytics_storage = 'granted';
}
// 12 = Cookies de ciblage marketing
if (accepted.includes("12")) {
update.ad_storage = 'granted';
update.ad_user_data = 'granted';
update.ad_personalization = 'granted';
}
// 13 = Cookies de personnalisation
if (accepted.includes("13")) {
update.personalization_storage = 'granted';
update.functionality_storage = 'granted';
}
// On envoie l’update seulement si on a au moins une clé
if (Object.keys(update).length) {
gtag('consent', 'update', update);
}
})();
gtag('js', new Date());
var cfg = {};
cfg['send_page_view'] = false; // important
cfg['cookie_expires'] = 34190000;
cfg['allow_google_signals'] = false;
cfg['allow_ad_personalization_signals'] = false;
var up = tC.internalvars.ga4_user_properties;
if (window.location.hostname.includes("punchout")) {
if(tc_vars["client_name"]!== undefined){
up.client_name = tc_vars["client_name"]  
}
}        
gtag('set', 'user_properties', up);
gtag('config', tC.internalvars.ga4_stream_id, cfg);
}
}
});
tC.extend({
executeTag148_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** GA4 - 2.page_view ***
if((document.cookie.split('TC_PRIVACY=')[1]?.[0]==='0')&&(document.cookie.includes('TC_PRIVACY_CENTER='))) {
/* 
try{
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
gtag('consent','update',{
ad_storage:'granted',
analytics_storage:'granted',
ad_user_data:'granted',
ad_personalization:'granted',
functionality_storage:'granted',
personalization_storage:'granted',
security_storage:'granted'
});
gtag('set','url_passthrough', true);
gtag('js', new Date());
var cfg = {
send_page_view: false,
cookie_expires: 34190000,
allow_ad_personalization_signals: false,
allow_google_signals: false
// (Consent piloté par TagCommander ailleurs)
};
// (optionnel) si tu veux garder les user properties ici
try { gtag('set', 'user_properties', tC.internalvars.ga4_user_properties || {}); } catch(e){}
gtag('config', tC.internalvars.ga4_stream_id, cfg);
} catch(e){}
*/
var event_name = 'page_view';
var ep = {};
ep.event_tag = 'GA4 - 2.page_view / page_view'; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
ep.segment_searchVisit = sessionStorage.getItem('userSearchSegment');
// referrer : tc_vars.page_referrer (si non vide) sinon document.referrer
ep.page_referrer = (tc_vars.page_referrer && tc_vars.page_referrer.trim()) || document.referrer;
// default event parameters (all pages)
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page); // ep is a clone of params_default
if(tc_array_events["page_url"]!== undefined){
ep.env_template=tc_array_events["env_template"];
ep.page_location=tc_array_events["page_url"];
ep.page_name=tc_array_events["page_name"];
ep.page_title=tc_array_events["page_name"];
}   
if (tc_array_events["env_template"] === "Tunnel de paiement - livraison" || tc_array_events["env_template"] === "Tunnel de paiement - paiement" || tc_array_events["env_template"] === "Tunnel de paiement - confirmation") {
var sp = tc_array_events["split_products"];
if (Array.isArray(sp)) {
ep.is_split = sp.length > 1 ? 1 : 0;
ep.split_count = sp.length;
ep.order_shipping_method = tc_array_events["order_shipping_method"] || "";
}
}
// DEBUG
/* if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (GA4 - 2.page_view)';
//debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}*/
// DEBUG
gtag('event', event_name, ep);
// ADDITIONNAL ECOMMERCE EVENT
switch(true) {
// view_item
/* case tc_vars['env_template'] == 'Fiche produit' :
event_name = 'view_item';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'GA4 - 2.page_view / view_item'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(tc_vars);
// DEBUG
if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (GA4 - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
// DEBUG
gtag('event', event_name, ec);
break;
*/  
// view_item_list
case tc_vars['list_products'].length:
event_name = 'view_item_list';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'GA4 - 2.page_view / view_item_list'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(tc_vars);
// DEBUG
/*  if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (GA4 - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}*/
// DEBUG
gtag('event', event_name, ec);
break;
// view_promotion // Cette ligne de code est mis en pause le 27/07/2026, remplacé par le tag Action Nextpulse event view promo & select promo qui prend le relai.
//event_name = 'view_promotion';
// var ec = JSON.parse(JSON.stringify(ep)); // clone
// ec.event_tag = 'GA4 - 2.page_view / view_promotion'; // debug server-side tracking
// ✅ Garde-fou: si GA4_CONVERTER ou sa méthode n'existe pas, on ne casse pas
//if (typeof window.GA4_CONVERTER === 'object' && typeof window.GA4_CONVERTER.items_promotions === 'function') {
// ec.items = GA4_CONVERTER.items_promotions(tc_vars);
//} else {
// ec.items = []; // fallback neutre
//ec._warn = 'GA4_CONVERTER.items_promotions indisponible';
//}
// DEBUG
/* if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (GA4 - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}*/
// DEBUG
// gtag('event', event_name, ec);
// break;
}
}
}
});
tC.extend({
executeTag427_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** event container loaded dispatcher ***
(function() {
/**
* @name Event Router - Version Corrigée avec tC.event.trigger
* @description Utilise la méthode correcte tC.event.trigger() pour déclencher
* les événements internes de manière cohérente.
*/
try {
// --- 1. Définition des variables pour la logique de décision ---
var page_path = document.location.pathname || '';
// --- cl_page_view ---
tC.log("Router -> Déclenchement de l'événement 'cl_page_view'");
tC.event.cl_page_view(null, tc_array_events);
// --- cl_begin_checkout ---
if (page_path.includes('commande/livraison')) {
tC.log("Router -> Déclenchement de l'événement 'cl_begin_checkout'");
tC.event.cl_begin_checkout(null, tc_array_events);
}
} catch (e) {
tC.log("Erreur dans le router d'événements : " + e);
}
})();
}
});
tC.extend({
executeTag208_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - GA4 config ***
tC.scriptElt1 = document.createElement("script");
tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id="+'G-3NLGMSW9D4';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
window.dataLayer = window.dataLayer || [];
var gtag = function(){dataLayer.push(arguments);};
gtag('js', new Date());
var cfg = {};
cfg['send_page_view'] = false; // important
cfg['cookie_expires'] = 34190000;
cfg['allow_ad_personalization_signals'] = false;
cfg['allow_google_signals'] = false;
gtag('config', 'G-3NLGMSW9D4', cfg);
}
});
tC.extend({
executeTag245_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Variabiliser optin pour event ***
tC.internalvars.performanceConsent="true"
}
});
tC.extend({
executeTag217_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Collecte de la source de trafic ***
var getTrafficSource = function(){
var referrer = document.referrer.toLowerCase();
var refHost = referrer ? new URL(referrer).hostname.toLowerCase() : '';
var urlParams = new URLSearchParams(window.location.search.toLowerCase());
var sourceInfo;
if (/facebook|pinterest|instagram|influenceur|meta/i.test(refHost) || /facebook|pinterest|instagram|influenceur|meta/i.test(referrer)){
sourceInfo = 'Social source: ' + refHost;
} else if (/messagerie|mail|mail/i.test(refHost) || /messagerie|mail|mail/i.test(referrer)){
sourceInfo = 'Email Campaign non trackée source';
} else if (urlParams.has('gclid') || urlParams.has('cpc') || /gclid=|cpc=/.test(referrer)){
sourceInfo = 'Google Ads source';
} else if (urlParams.has('utm_source') || /utm_source=/.test(referrer)){
sourceInfo = 'UTM Source: ' + (urlParams.get('utm_source') || new URL(referrer).searchParams.get('utm_source')) + 
', UTM Medium: ' + (urlParams.get('utm_medium') || new URL(referrer).searchParams.get('utm_medium'));
} else if (referrer){
if (/google|lilo|bing|qwant|duckduck|ecosia|yahoo/i.test(refHost)){
sourceInfo = 'SEO source: ' + refHost;
} else if (/pointp/i.test(refHost)){
sourceInfo = 'Point.P source';
} else {
sourceInfo = 'Referral Source: ' + refHost;
}
} else {
sourceInfo = 'Direct';
}
sessionStorage.setItem('trafficSource', sourceInfo);
return sourceInfo;
};
var getMicroTrafficSource = function(){
var referrer_micro = document.referrer.toLowerCase();
var refHost_micro = location.search.toLowerCase();
var sourceInfoMicro;
if (refHost_micro) {
sourceInfoMicro = refHost_micro;
} else if (referrer_micro) {
sourceInfoMicro = referrer_micro;
} else {
sourceInfoMicro = 'Direct';
}
var paramsToReplace = ['gclid', 'key', 'msclkid'];
paramsToReplace.forEach(function(param) {
var regex = new RegExp(param + '=[^&]*', 'i');
if (sourceInfoMicro.match(regex)) {
sourceInfoMicro = sourceInfoMicro.replace(regex, param);
}
});
sessionStorage.setItem('trafficSourceMicro', sourceInfoMicro);
};
if (!sessionStorage.getItem('hasVisitedBeforeNew')){
sessionStorage.setItem('hasVisitedBeforeNew', 'true');
var trafficSource = getTrafficSource();
//tC.log('La source de trafic est: ' + trafficSource);
}
if (!sessionStorage.getItem('hasVisitedBeforeMicroNew')){
sessionStorage.setItem('hasVisitedBeforeMicroNew', 'true');
var trafficSourceMicro = getMicroTrafficSource();
//tC.log('La source de trafic est: ' + trafficSource);
}
}
});
tC.extend({
executeTag442_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** [NEXTPULSE] - Actions view_promo & select_promo ***
window.__pendingViewPromotions = window.__pendingViewPromotions || [];
window.__processedViewPromoEvents = window.__processedViewPromoEvents || new WeakSet();
window.__recentPromoSends = window.__recentPromoSends || {};
var hasConsent = (document.cookie.split('TC_PRIVACY=')[1]?.[0] === '0') && document.cookie.includes('TC_PRIVACY_CENTER=');
var processViewPromotion = function(evt){
try {
if (!tC.internalvars){
return; }
var stream_id = tC.internalvars.ga4_stream_id;
if (!stream_id){
return; }
var list = Array.isArray(evt['commercials_list']) ? evt['commercials_list'] : [];
var promoList;
if (list.length <= 1){
promoList = list;
} else {
var visibleNames = new Set();
document.querySelectorAll('[aria-roledescription="slide"] [data-sgt-name]').forEach(function(el){
var name = el.getAttribute('data-sgt-name');
if (name) { visibleNames.add(name.trim()); }
});
promoList = list.filter(function(promo){
return promo.commercial_name && visibleNames.has(promo.commercial_name.trim());
});
}
promoList.sort(function(a, b){
return (a.commercial_position || 0) - (b.commercial_position || 0);
});
if (promoList.length === 0){
//tC.log('[TC DEBUG] tag442 - aucune promo visible, event non envoyé');
return;
}
var now = Date.now();
var DEDUP_WINDOW_MS = 1000;
var batchKey = promoList.map(function(p){
return (p.commercial_name || '').trim(); }).join('|');
var lastSent = window.__recentPromoSends[batchKey];
if (lastSent && (now - lastSent) < DEDUP_WINDOW_MS){
// tC.log('[TC DEBUG] tag442 - doublon ignoré:', batchKey);
return;
}
window.__recentPromoSends[batchKey] = now;
var ga4_ep_vp = tC.internalvars.ga4_ep_page_by_default;
var action = '' + evt['action'] + '';
var labels = promoList.map(function(p){
return (p.commercial_name || '').trim(); }).join(' | ');
var ep = {};
ep.event_tag = '[NEXTPULSE] - Actions';
ep.items = promoList.map(function(promo){
var name = (promo.commercial_name || '').trim();
return {
'promotion_name': name,
'creative_name':  promo.commercial_creative || '',
'creative_slot':  promo.commercial_position || 0,
'location_id':    promo.commercial_type || '',
'promotion_id':   name
};
});
var ga4_ep_act = {
'env_template':      '' + tc_vars["env_template"]      + '',
'user_visitorId':    '' + tc_vars["user_visitorId"]    + '',
'event_category':    '' + evt['category']              + '',
'event_action':      action,
'event_label':       labels,
'kpi_strategy':      '' + evt['kpi_strategy']          + '',
'event_type':        '' + evt['event_type']            + '',
'event_user_action': action + '::' + labels
};
ep = Object.assign(ep, ga4_ep_vp, ga4_ep_act);
ep.send_to = stream_id;
ep.transport_type = 'beacon';
//tC.log('[TC DEBUG] tag442 - envoi gtag view_promotion (' + promoList.length + ' items):', ep);
gtag('event', 'view_promotion', ep);
} catch(e){
//tC.error('[TC DEBUG] tag442 - Erreur gtag:', e);
}
};
if (tc_array_events && tc_array_events['event_name'] === "view_promotion" && !window.__processedViewPromoEvents.has(tc_array_events)){
window.__processedViewPromoEvents.add(tc_array_events);
if (hasConsent){
//tC.log('[TC DEBUG] tag442 - consentement déjà présent, envoi immédiat');
processViewPromotion(tc_array_events);
} else {
window.__pendingViewPromotions.push(JSON.parse(JSON.stringify(tc_array_events)));
//tC.log('[TC DEBUG] tag442 - event mis en attente (pas de consentement):', tc_array_events['label']);
}
}
if (hasConsent && window.__pendingViewPromotions.length > 0){
//tC.log('[TC DEBUG] tag442 - optin détecté, rejeu de', window.__pendingViewPromotions.length, 'events en attente');
var toReplay = window.__pendingViewPromotions.slice();
window.__pendingViewPromotions = [];
toReplay.forEach(processViewPromotion);
}
if (tc_array_events && tc_array_events['event_name'] === "select_promotion"){
try {
if (!tC.internalvars){
return; }
var stream_id_sp = tC.internalvars.ga4_stream_id;
if (!stream_id_sp){
return; }
var matched = null;
var items_sp = Array.isArray(tc_array_events['items']) ? tc_array_events['items'] : [];
var list_sp = Array.isArray(tc_array_events['commercials_list']) ? tc_array_events['commercials_list'] : [];
if (items_sp.length > 0){
// Cas carrousel : items[] contient toutes les promos, on retrouve la cliquée via promotion_name racine
var clickedCreative = tc_array_events['promotion_name'];
var found = items_sp.find(function(item){
return item.creative_name === clickedCreative;
});
if (found){
matched = {
promotion_name: (found.promotion_name || '').trim(),
creative_name:  found.creative_name || '',
creative_slot:  found.creative_slot || 0,
location_id:    found.location_id || ''
};
}
} else if (list_sp.length > 0){
// Cas bandeau du bas : commercials_list avec une seule entrée, c'est la promo cliquée
var promo = list_sp[0];
matched = {
promotion_name: (promo.commercial_name || '').trim(),
creative_name:  promo.commercial_creative || '',
creative_slot:  promo.commercial_position || 0,
location_id:    promo.commercial_type || ''
};
}
if (!matched){
//tC.log('[TC DEBUG] tag442 - select_promotion: aucune promo identifiée');
} else {
var label_sp = matched.promotion_name;
var action_sp = '' + tc_array_events['action'] + '';
var ga4_ep_vp_sp = tC.internalvars.ga4_ep_page_by_default;
var ep_sp = {};
ep_sp.event_tag = '[NEXTPULSE] - Actions';
ep_sp.items = [{
'promotion_name': label_sp,
'creative_name':  matched.creative_name,
'creative_slot':  matched.creative_slot,
'location_id':    matched.location_id,
'promotion_id':   label_sp
}];
var ga4_ep_act_sp = {
'env_template':      '' + tc_vars["env_template"]      + '',
'user_visitorId':    '' + tc_vars["user_visitorId"]    + '',
'event_category':    '' + tc_array_events['category']      + '',
'event_action':      action_sp,
'event_label':       label_sp,
'kpi_strategy':      '' + tc_array_events['kpi_strategy']  + '',
'event_type':        '' + tc_array_events['event_type']    + '',
'event_user_action': action_sp + '::' + label_sp,
'creative_slot':     matched.creative_slot
};
ep_sp = Object.assign(ep_sp, ga4_ep_vp_sp, ga4_ep_act_sp);
ep_sp.send_to = stream_id_sp;
ep_sp.transport_type = 'beacon';
//tC.log('[TC DEBUG] tag442 - envoi gtag select_promotion:', ep_sp);
gtag('event', 'select_promotion', ep_sp);
}
} catch(e){
tC.error('[TC DEBUG] tag442 - Erreur select_promotion:', e);
}
}
}
});
tC.extend({
executeTag212_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking (impulse) | Demande d'information ***
//if(window.location.pathname.includes("/p/")){
if(tc_vars["env_template"]==="Fiche produit"){
if(tc_array_events["action"]==="Demande d'information"){
var pdt_info = ""
pdt_info = tc_vars["product_id"]
var validationInterval = setInterval(function(){
try{
var formElement = document.querySelector("#modal-request-info input[type='submit']");
if (formElement) { 
event_tagco = "try{tc_events_global(this,'Event',{'category':'Ecommerce','action':'Envoi de demande dinformation','label':'"+pdt_info+"'})}catch(e){}";
formElement.setAttribute("onmousedown",event_tagco)   
clearInterval(validationInterval);
}
}catch(e){
}
}, 100); 
}
}
}
});
tC.extend({
executeTag223_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Code promo ***
if(tc_array_events.action==='Ajout code promo'){
// Fonction pour vérifier l'état du coupon
var checkCouponStatus = function(){
// Sélection de l'élément avec la classe 'coupons'
var couponDiv = document.querySelector('.coupons');
// Vérification si la classe 'has-error' est présente dans la div 'text-input'
var hasError = couponDiv && couponDiv.querySelector('.text-input.has-error');
// Vérification si la classe 'is-applied' est présente dans la div 'text-input'
var isApplied = couponDiv && couponDiv.querySelector('.text-input.is-applied');
// Affichage dans la console selon l'état détecté et arrêt de la vérification si nécessaire
if (hasError){
tc_events_global(this,"Event",{"category":"Ecommerce","action":"Ajout code promo echec","label":hasError.querySelector("input")._value});
tC.log("KO - Une erreur a été détectée dans le champ du code promo.");
clearInterval(statusCheckInterval); // Arrêt de la vérification si KO
} else if (isApplied){
tc_events_global(this,"Event",{"category":"Ecommerce","action":"Ajout code promo succes","label":isApplied.querySelector("input")._value});
tC.log("OK - Le code promo a été appliqué avec succès.");
clearInterval(statusCheckInterval); // Arrêt de la vérification si OK
} else {
tC.log("En attente de l'état du code promo...");
}
};
var checkInterval = 500; // Toutes les 3 secondes
var statusCheckInterval = setInterval(checkCouponStatus, checkInterval);
}
}
});
tC.extend({
executeTag225_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | script carrousel marketing ***
if(tc_array_events.action==='Vue du carrousel marketing'){
// Fonction pour déclencher l'événement TagCommander
var triggerTagCommanderEvent = function(element){
var eventData = {
action: "Clic sur la bannière",
category: "Marketing",
commercial_creative: element.getAttribute('data-sgt-mb-creative'),
commercial_name: element.getAttribute('data-sgt-mb-name'),
commercial_position: element.getAttribute('index'), // Utilisation de l'attribut 'index'
commercial_type: "MEA Promo",
label: element.getAttribute('data-sgt-mb-name')
};
tc_events_global(this, "Event", eventData);
};
var elements = document.querySelectorAll(".section.section-home-banner a");
elements.forEach(function(element) {
element.onmousedown = function() {
triggerTagCommanderEvent(element);
};
});
/*
// Fonction pour déclencher l'événement TagCommander
var triggerTagCommanderEvent = function(element){
var eventData = {
action: "Clic sur la bannière",
category: "Marketing",
commercial_creative: element.getAttribute('data-sgt-mb-creative'),
commercial_name: element.getAttribute('data-sgt-mb-name'),
commercial_position: element.getAttribute('index'), // Utilisation de l'attribut 'index'
commercial_type: "MEA Promo",
label: element.getAttribute('data-sgt-mb-name')
};
tc_events_global(this, "Event", eventData);
};
var setupDynamicBannerClickEventListener = function(){
var parentElement = document.querySelector('.slick-list.draggable');
if (!parentElement || parentElement.hasAttribute('data-tracking-initialized')){
// Déjà initialisé ou élément parent non trouvé
return;
}
// Marquer comme initialisé
parentElement.setAttribute('data-tracking-initialized', 'true');
parentElement.addEventListener('mousedown', function(event){
var banner = event.target.closest('.sgt-mb-carrousel');
if (banner){
triggerTagCommanderEvent(banner);
}
});
};
if (document.readyState === 'loading'){
document.addEventListener('DOMContentLoaded', setupDynamicBannerClickEventListener);
} else {
setupDynamicBannerClickEventListener();
}*/
}
}
});
tC.extend({
executeTag235_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Bug affichage panier ***
if(tc_array_events["action"]==="Ajout au panier"){
var handleElementAppearance = function(mutationsList, observer) {
var sectionCartElement = document.querySelector('.section-cart.cart-loader');
if (sectionCartElement) {
tC.log("La section 'section-cart cart-loader' est apparue !");
// Arrêtez l'observateur car la section est apparue
observer.disconnect();
var maxWaitTime = 10000; // Maximum d'attente en millisecondes (10 secondes)
var intervalTime = 500; // Intervalle de vérification en millisecondes (0,5 seconde)
var elapsedTime = 0;
// Utilisez un intervalle pour vérifier périodiquement si l'élément .cols avec un élément a est apparu
var interval = setInterval(function() {
elapsedTime += intervalTime;
var colsElement = document.querySelector('.cols');
if (colsElement && colsElement.querySelector('a')) {
tC.log("L'élément 'cols' avec 'a' est apparu après " + (elapsedTime / 1000) + " secondes !");
clearInterval(interval); // Arrêtez l'intervalle une fois que l'élément est apparu
// Déclencher un événement ou effectuer une action ici après leur apparition
} else if (elapsedTime >= maxWaitTime) {
tC.log("Le délai maximum de 10 secondes est écoulé, mais l'élément n'est pas encore apparu.");
tc_events_global(this,"Event",{"category":"Ecoute client","action":"Pb affichage","label":"Affichage_Panier_>10secondes"})
clearInterval(interval); // Arrêtez l'intervalle en cas de dépassement du délai
}
}, intervalTime);
}
};
var targetNode = document.querySelector('.cart-wrapper');
var config = { childList: true, subtree: true };
var observer = new MutationObserver(handleElementAppearance);
observer.observe(targetNode, config);
}
}
});
tC.extend({
executeTag243_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | offre elargie ***
if(tc_array_events["action"]==="Demande d'information"){
setTimeout(function() {
var selectElement = document.querySelector(".js-form-item-nature select");
var submitButton = document.querySelector('input[value="Envoyer ma demande"]');
if (submitButton && selectElement) {
var fournisseur = "";
var refElements = document.querySelectorAll("span.text-references");
if (refElements && refElements.length > 1) {
fournisseur = refElements[1].innerText.split(":")[1].trim();
}
var detail = "ID_produit:" + (tc_vars["product_id"] || 'N/A') +
"&&_Marque:" + (tc_vars["product_trademark"] || 'N/A') +
"&&_Category:" + (tc_vars["page_cat1"] || 'N/A') +
"&&_ID_fournisseur:" + fournisseur;
// Using an inline function call for event handling
submitButton.onmousedown = function() {
tc_events_global(this, 'Event', {
'category': 'Offre elargie',
'action': 'Envoi demande - ' + selectElement.value,
'label': detail
});
};
} 
},1000)
}      
}
});
tC.extend({
executeTag269_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Visiteur search ***
if(tc_array_events["action"]==="Initier recherche"&&tc_array_events["category"]==="Recherche produits"){
sessionStorage.setItem("visiteur_recherche","oui")
}
}
});
tC.extend({
executeTag272_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Dispo pdt ABtasty ***
//Ajout panier
if(tc_array_events["action"]==="Ajout au panier"){
window.saveUserAction('add_to_cart');  
}
//Vue produit DISPO
try{
var main_cta = tc_array_events["main_cta"];
if (Array.isArray(main_cta)) {
// Si c'est un tableau, cherche "Ajouter au panier" dans les éléments
for (var i = 0; i < main_cta.length; i++) {
if (main_cta[i].indexOf("Ajouter au panier") !== -1) {
window.saveUserAction('view_pdp_dispo');
try{     window.abtasty.send("event", {
ec: "Action Tracking",
ea: "Produit-dispo",
ev: 1
});
}catch(e){
}
break; // Arrête la boucle dès qu'un élément est trouvé
}
}
} else if (typeof main_cta === "string" && main_cta.indexOf("Ajouter au panier") !== -1) {
// Si c'est une chaîne, vérifie qu'elle contient "Ajouter au panier"
window.saveUserAction('view_pdp_dispo');
try{     window.abtasty.send("event", {
ec: "Action Tracking",
ea: "Produit-dispo",
ev: 1
});
}catch(e){
}
}
}catch(e){
}
}
});
tC.extend({
executeTag273_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Contact agence ***
window.hasTriggeredContactAgence = window.hasTriggeredContactAgence || false;
if (!window.hasTriggeredContactAgence && tc_array_events["env_template"] && tc_array_events["page_name"]) {
if (tc_array_events["env_template"] === "popin" && tc_array_events["page_name"].startsWith("Votre demande à l'agence")) {
// Marque que l'événement a été déclenché
window.hasTriggeredContactAgence = true;
ep.event_action = "contact_agence";
ep.event_label = ep.product_id;
ep.event_category = "ecommerce";
gtag('event', 'contact_agence', ep);
}
}
}
});
tC.extend({
executeTag440_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Ecoute_client - remontée CS ***
if (tc_array_events["category"] === "Ecoute_client" && tc_array_events["action"].includes("Avis_")){  
if (window._uxa) { 
window._uxa.push(['trackPageview', 'Avis_NPS3_'+tc_array_events["label"]]);
window._uxa.push(['trackEventTriggerRecording', '@ETS@NPS']);
}
}
}
});
tC.extend({
executeTag257_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - purchase ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - purchase'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] =  tc_vars["user_profile"];
data['user_new_customer'] =  window.app_New_customer;
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data['media_event'] = 'media_purchase';
data['gads_event_name_customer_profile'] = tC.internalvars.gads_event_name_customer_profile;
data['gads_event_name_profile'] = tC.internalvars.gads_event_name_prof;
var SPLIT_PRODUCTS = tc_array_events["split_products"] || [];
if (SPLIT_PRODUCTS.length > 0 && SPLIT_PRODUCTS[0].split_id) {
data['id'] = SPLIT_PRODUCTS[0].split_id;
} else {
data['id'] = '';
}
data['currency'] = 'EUR';
data['type'] = 'online';
data['payment_method'] = 'other';
data['status'] = 'in_progress';
data['revenue'] = 0;
data['value'] = 0;
data['shipping_amount'] = 0;
data['tax_amount'] = 0;
data['items'] = [];
for (var s = 0; s < SPLIT_PRODUCTS.length; s++) {
var split = SPLIT_PRODUCTS[s] || {};
data['revenue'] += parseFloat((split.split_amount_tf || '0').replace(',', '.'));
data['value'] += parseFloat((split.split_amount_ati || '0').replace(',', '.'));
data['shipping_amount'] += parseFloat((split.split_shipping_amount || '0').replace(',', '.'));
data['tax_amount'] += parseFloat((split.split_tax || '0').replace(',', '.'));
var order_products = split.order_products || [];
for (var i = 0; i < order_products.length; i++) {
var product = order_products[i] || {};
var item = {};
item['id'] = product.product_id || '';
item['price'] = parseFloat((product.product_price || '0').replace(',', '.'));
item['quantity'] = parseInt(product.product_quantity || 0);
item['product'] = {
'id': product.product_id || '',
'name': product.product_name || '',
'price': parseFloat((product.product_price || '0').replace(',', '.')),
'currency': 'EUR',
'category_1': product.product_category1 || '',
'category_2': product.product_category2 || '',
'category_3': product.product_category3 || '',
'category_4': product.product_category4 || '',
'category_5': product.product_category5 || '',
'brand': product.product_trademark || ''
};
data['items'].push(item);
}
}
tc_array_events = tc_array_events || {};
tc_array_events.media_event = 'media_purchase';  
data.page_type = data.env_template;
cact('trigger', 'purchase', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_purchase");
tC.event.media_purchase(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
})()
}
});
tC.extend({
executeTag277_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** AutoTracking | Bug quantité ***
setTimeout(function(){
if(document.querySelector(".btn_disabled button.btn_enabled_backend") && document.querySelector(".sg-buybox-container-reskin .tw-text-success-700")){
tC.log("Avec Bug quantité min")
try {
var ep = {
event_category: 'Auto_track',
event_action: 'bug_min_quantity>stock_dispo',
event_label: tc_vars.product_id+"_"+tc_vars.user_shop_attached_code
};
gtag('event', 'bug_min_quantity', ep);
} catch (e) {}
}
},1500)
}
});
tC.extend({
executeTag263_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - validation_odc (part/pro) - Point P excluded ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - validation_odc (part/pro)'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];  
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_array_events["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data['media_event'] = 'media_validation_odc';
data['event_category'] = tc_array_events["category"];
data['event_action'] = tc_array_events["action"];
data['event_label'] = tc_array_events["label"];
data['lead_type'] = 'odc'; // requis pour Pinterest
tc_array_events = tc_array_events || {};
tc_array_events.media_event = 'media_validation_odc';
var clientType = tc_array_events['label']; // "PART" ou "PRO"
var event_name = clientType ? 'Validation ODC ' + clientType : 'Validation ODC';
if (clientType === "PART") {
data.page_type = data.env_template;
cact('trigger', event_name, data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_validation_odc");
tC.event.media_validation_odc(null, tc_array_events);
tC.log("Événement déclenché avec succès");
}
})()
}
});
tC.extend({
executeTag264_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - add_to_cart ***
(function() {
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - add_to_cart'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
var PRODUCTS = tc_array_events["products"];
data['value'] = 0;
data['items'] = [];
if (!Array.isArray(PRODUCTS)) { PRODUCTS = [PRODUCTS]; }
for (var i = 0; i < PRODUCTS.length; i++) {
var product = PRODUCTS[i];
var item = {};
item['id'] = product.product_id;
item['price'] = parseFloat(product.product_price);
data['value'] += item['price'];
item['quantity'] = parseInt(product.product_quantity);
item['product'] = {
'id': product.product_id,
'name': product.product_name,
'price': parseFloat(product.product_price),
'currency': 'EUR',
'category_1': product.product_category1,
'category_2': product.product_category2,
'category_3': product.product_category3,
'category_4': product.product_category4,
'category_5': product.product_category5,
'brand': product.product_trademark
};
data['items'].push(item);
}
data['currency'] = 'EUR';
data.page_type = data.env_template;
cact('trigger', 'add_to_cart', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_add_to_cart");
tC.event.media_add_to_cart(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
})();
}
});
tC.extend({
executeTag265_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - click_rdv_agence ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - click_rdv_agence'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data['event_category'] = tc_array_events["category"];
data['event_action'] = tc_array_events["action"];
data['event_label'] = tc_array_events["label"];
data['lead_type'] = 'rdv'; // requis pour Pinterest
data.page_type = data.env_template;
cact('trigger', 'click_rdv_agence', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_click_rdv_agence");
tC.event.media_click_rdv_agence(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
})()
}
});
tC.extend({
executeTag266_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - view_item ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - view_item';
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_path'] = tc_vars["page_url"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
var PRODUCTS = tc_array_events["products"];
data['value'] = 0;
data['items'] = [];
if (!Array.isArray(PRODUCTS)) { PRODUCTS = [PRODUCTS]; }
for (var i = 0; i < PRODUCTS.length; i++) {
var product = PRODUCTS[i];
var item = {};
item['id'] = product.product_id;
item['price'] = parseFloat(product.product_price);
data['value'] += item['price'];
item['quantity'] = parseInt(product.product_quantity);
item['product'] = {
'id': product.product_id,
'name': product.product_name,
'price': parseFloat(product.product_price),
'currency': 'EUR',
'category_1': product.product_category1,
'category_2': product.product_category2,
'category_3': product.product_category3,
'category_4': product.product_category4,
'category_5': product.product_category5,
'brand': product.product_trademark
};
data['items'].push(item);
}
data.page_type = data.env_template;
cact('trigger', 'view_item', data, ONETAG_CONFIG);
// Déclenchement client-side pour tags médias
tC.log("Déclenchement de l'événement client-side : media_view_item");
tC.event.media_view_item(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
})()
}
});
tC.extend({
executeTag293_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** [NEXTPULSE] - UA to GA4 ***
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['items_products'] = function(data){
var p, value;
var REVIEW_EVENTS = ['view_item_list', 'view_item', 'select_item', 'add_to_cart'];
var eventName = data['event_name'] || data['event'] || '';
var reviewAllowed = REVIEW_EVENTS.indexOf(eventName) > -1;
var setReview = function(item, src){
if (reviewAllowed && src && src.product_review !== undefined && src.product_review !== null && src.product_review !== ''){
item.product_review = src.product_review;
}
}
switch (true){
// Mise à jour du 30/06/2026 suite à la suppression de la boucle produit, on va récupérer aussi dans la boucle item au lieu de produit//
case Array.isArray(data['items']):
var arr = data['items'];
p = [];
for (var i=0; i<arr.length; i++) {
p.push({
product_id: arr[i].item_id,
product_name: arr[i].item_name,
list_name: arr[i].item_list_name,
product_brand: arr[i].item_brand,
product_trademark: arr[i].item_trademark,
product_category1: arr[i].item_category1,
product_category2: arr[i].item_category2,
product_category3: arr[i].item_category3,
product_category4: arr[i].item_category4,
product_category5: arr[i].item_category5,
product_price: arr[i].price,
product_quantity: arr[i].quantity,
product_position: arr[i].index,
product_instock: arr[i].item_instock
});
}
break;       
case Array.isArray(data['split_products']):
var arr = data['split_products'];
p = [];
for (var i = 0; i < arr.length; i++){
p = p.concat(arr[i]['order_products']);
}
break;
case Array.isArray(data['products']):
p = data['products'];
break;
case Array.isArray(data['list_products']):
p = data['list_products'];
break;
case Array.isArray(data['products_added']):
p = Helper_arrayFilter(data['products_added']);
break;
case 'object' == typeof data['products']:
p = data['products'];
break;
case 'object' == typeof data['list_products']:
p = Helper_arrayFilter(data['list_products']['products']);
break;
case 'object' == typeof tc_vars["order_products"]:
p = Helper_arrayFilter(tc_vars["order_products"]);
break;
case Array.isArray(tc_vars["list_products"]):
p = tc_vars["list_products"];
break;
case '' != data['product_id']:
case '' != data['product_name']:
p = {};
p.product_id = data['product_id'];
p.product_name = data['product_name'];
p.product_brand = data['product_trademark'];
p.product_variant = data['product_variant'];
p.product_category1 = data['product_category1'];
p.product_category2 = data['product_category2'];
p.product_category3 = data['product_category3'];
p.product_category4 = data['product_category4'];
p.product_category5 = data['product_category5'];
p.product_quantity = data['product_quantity'];
p.product_position = data['product_position'];
p.product_price = data['product_price'];
p.product_instock = data['product_instock'];
p.product_review = data['product_review'];
if (window.stock_suivi){
p.stock_suivi = window.stock_suivi;
}
break;
}
switch (true){
case Array.isArray(p):
value = [];
for (var i = 0; i < p.length; i++){
var item = {};
item.item_id = '' + (p[i].product_id || p[i].id) + '';
item.item_name = p[i].product_name || p[i].name;
item.item_list_name = p[i].list_name;
item.item_list_id = undefined;
item.item_brand = p[i].product_brand || p[i].brand || p[i].product_trademark;
item.item_category = p[i].product_category1;
item.item_category2 = p[i].product_category2;
item.item_category3 = p[i].product_category3;
item.item_category4 = p[i].product_category4;
item.item_category5 = p[i].product_category5;
item.price = parseFloat(('' + (p[i].product_price || p[i].price) + '').replace(',', '.'));
item.quantity = p[i].product_quantity || p[i].quantity || 1;
item.index = p[i].product_position;
item.product_instock = p[i].product_instock;
if (window.stock_suivi){
item.stock_suivi = window.stock_suivi;
}
setReview(item, p[i]);
value.push(item);
}
break;
case 'object' == typeof p:
value = [];
var item = {};
item.item_id = '' + (p.product_id || p.id) + '';
item.item_name = p.product_name || p.name;
item.item_list_name = p.list_name;
item.item_list_id = undefined;
item.item_brand = p.product_brand || p.brand;
item.item_category = p.product_category1;
item.item_category2 = p.product_category2;
item.item_category3 = p.product_category3;
item.item_category4 = p.product_category4;
item.item_category5 = p.product_category5;
item.price = parseFloat(('' + (p.product_price || p.price) + '').replace(',', '.'));
item.quantity = p.product_quantity || p.quantity || 1;
item.index = p.product_position;
item.product_instock = p.product_instock;
if (window.stock_suivi){
item.stock_suivi = window.stock_suivi;
}
setReview(item, p);
value.push(item);
break;
}
return value;
};
}
});
tC.extend({
executeTag276_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Fix | PUNCHOUT ***
var allowedHostnames = [
"rec-punchout.cedeo.fr",
"rec-punchout.climplus.com",
"rec-punchout.pointp.fr",
"rec-punchout.sfic.com",
"ppr-punchout.cedeo.fr",
"ppr-punchout.climplus.com",
"ppr-punchout.pointp.fr",
"ppr-punchout.sfic.com",
"punchout.cedeo.fr",
"punchout.climplus.com",
"punchout.pointp.fr",
"punchout.sfic.com"
];
if (allowedHostnames.includes(window.location.hostname)) {
setTimeout(() => {
// PUNCHOUT SETTINGS
const punchoutSettings = {
'rec': {
'cedeo': {
'007b4aca-c0cf-41dd-81d0-1534fc93e4ad': { // EQUANS
'logout': { 'url': 'https://equans.coupahost.com', 'label': 'Retour vers COUPA', 'method': 'GET' }
},
'df241a08-8a15-4f92-86c8-b7a453b46e4c': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'a0c4abc4-a9fc-4c11-8470-be4bab281d67': { // EIFFAGE
'carbonData': false
}
},
'clim': {
'6db16ffc-0ead-47c8-8de3-188abac80eb8': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
},
'pointp': {
'eace10ea-66fe-4fa9-ae6b-46b4f8f5c455': { // EIFFAGE
'carbonData': false
}
},
'sfic': {
'4a133f5c-4880-4587-80cd-04755aee422c': { 'url': '' }
}
},
'prd': {
'cedeo': {
'30c9a26f-3f1c-4705-885a-72ffa871df20': { // EQUANS
'logout': { 'url': 'https://equans.coupahost.com', 'label': 'Retour vers COUPA', 'method': 'GET' }
},
'298e8cf4-2bbd-46eb-9e28-612caef02f74': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'8ec52cbc-8475-4779-b89f-f24dbf54eade': { // VEOLIA VEP
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'7acb39fd-7cf9-4594-b168-8a5952ed4cd9': { // EIFFAGE
'carbonData': false
},
'default': { // EQUANS
'logout': { 'url': 'https://equans.coupahost.com', 'method': 'GET' }
},
},
'clim': {
'9252fce2-211a-4308-bf58-fb9fa8ec2e4d': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'306c9014-d9e4-4839-8937-6e6508e893f4': { // VEOLIA VEP
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
},
'pointp': {
'4af7f667-98d4-4e35-9cc1-dcb34a02e8c9': { // EIFFAGE
'carbonData': false
}
},
'sfic': {
'4a133f5c-4880-4587-80cd-04755aee422c': { 'url': '' }
}
}
}
let envPunchout = 'prd', brandPunchout = tc_vars.env_site.replace('Nextpulse_', '');
if (window.location.hostname.includes('rec')) {
envPunchout = 'rec';
}
// ADD/REMOVE A PUNCHOUT LOGOUT BUTTON IN USER MENU
if (envPunchout in punchoutSettings && brandPunchout in punchoutSettings[envPunchout]) {
const punchoutId = tc_vars.punchoutId || 'default';
if (punchoutId in punchoutSettings[envPunchout][brandPunchout] && 'logout' in punchoutSettings[envPunchout][brandPunchout][punchoutId]) {
const logoutDefaultLabel = 'Me dÃ©connecter';
const logoutURL = punchoutSettings[envPunchout][brandPunchout][punchoutId].logout.url || '';
const logoutLabel = punchoutSettings[envPunchout][brandPunchout][punchoutId].logout.label || logoutDefaultLabel;
const logoutMethod = punchoutSettings[envPunchout][brandPunchout][punchoutId].logout.method || 'GET';
if (logoutURL != 'DEFAULT') {
$('div.header ul.user-menu > li.submit-wrapper').remove();
if (logoutURL != '') {
let userMenu = $('div.header ul.user-menu');
if (userMenu.length) {
$('div.header ul.user-menu').append(`<li class="submit-wrapper"><a sg-tracking-label="${logoutLabel}" href="${logoutURL}" class="submit-wrapper submit user-logout" data-once="sgTrackingClickLinkEvent sgTrackingHoverLinkEvent">${logoutLabel}</a></li>`);
tC.log("Logout button added");
}
}
else {
tC.log("Logout button removed (if exists)");
}
} else {
$('div.header li.item-user.js-user-menu > div > ul > li.submit-wrapper > form > button').html(logoutLabel);
}
if (window.location.href.includes('mon-compte')) {
if (logoutURL != '') {
let logoutItemButton = $('#app aside footer form');
if (logoutItemButton.length) {
if (logoutURL != 'DEFAULT') logoutItemButton.attr('action', logoutURL);
$('#app aside footer form div').html(logoutLabel);
tC.log("Logout button modified");
}
else if (logoutURL != 'DEFAULT') {
$('#app aside>div').append(`<footer><div class="tw-p-3 tw-border-t tw-border-solid tw-border-gray-200"><form method="${logoutMethod}" action="${logoutURL}"><button class="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-w-full tw-p-3 tw-rounded-md hover:tw-bg-gray-100 tw-transition-all tw-duration-300 hover:tw-cursor-pointer" type="submit" data-once="sgTrackingClickLinkEvent sgTrackingClickButtonEvent"><div>${logoutLabel}</div><i class="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i></button></form></div></footer>`);
tC.log("Logout button added");
}
}
else {
$('#app aside footer').remove();
}
}
}
}
// PRODUCT PAGE - REMOVE CARBON DATA
if ('punchoutId' in tc_vars && envPunchout in punchoutSettings && brandPunchout in punchoutSettings[envPunchout] && tc_vars.punchoutId in punchoutSettings[envPunchout][brandPunchout] && 'carbonData' in punchoutSettings[envPunchout][brandPunchout][tc_vars.punchoutId]) {
if (punchoutSettings[envPunchout][brandPunchout][tc_vars.punchoutId].carbonData === false && $('div.product-detail-page').length) {
$('img[alt="Indicateur carbone"]').parents().eq(2).remove();
$('div[data-anchor-id="carbon_data"]').remove();
}
}
}, 2000);
}
}
});
tC.extend({
executeTag420_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** event_next dispatcher ***
(function() {
/**
* @name Event Router - Version Corrigée avec tC.event.trigger
* @description Utilise la méthode correcte tC.event.trigger() pour déclencher
* les événements internes de manière cohérente.
*/
try {
// --- 1. Définition des variables pour la logique de décision ---
var c = tc_array_events["category"] || '';
var a = tc_array_events["action"] || '';
var l = tc_array_events["label"] || '';
var event_name = tc_array_events["event_name"] || '';
// --- 2. Routage avec la structure switch(true) ---
switch (true) {
// --- page_view ---
case (event_name === 'page_view' || event_name === 'Pageview'):
tC.log("Router -> Déclenchement de l'événement 'page_view'");
tC.event.page_view(null, tc_array_events);
break;
// --- abonnement_easysav ---
case (event_name === 'Abonnement_easySav'):
tC.log("Router -> Déclenchement de l'événement 'abonnement_easysav'");
tC.event.abonnement_easysav(null, tc_array_events);
break;            
// --- view_item ---
case (event_name === 'view_item'):
tC.log("Router -> Déclenchement de l'événement 'view_item'");
tC.event.view_item(null, tc_array_events);
break;
// --- add_to_cart ---
case (c === "Ecommerce" && [
"Ajout au panier", "Ajout au panier variante", "Ajout rapide", "Ajout Rapide", 
"Mon compte - Ajout au panier", "Ajouter commande au panier", "Ajouter wishlist au panier", 
"Ajout au panier simplifié", "Ajout panier - SoluPlus", "Achat en 1 Clic", "Ajout rapide au panier"
].includes(a)):
tC.log("Router -> Déclenchement de l'événement 'add_to_cart'");
tC.event.add_to_cart(null, tc_array_events);
break;
// --- validation_odc (part/pro) ---
case (a === "Validation ODC"):
tC.log("Router -> Déclenchement de l'événement 'validation_odc'");
tC.event.validation_odc(null, tc_array_events);
break;            
// --- validation_odc (part/pro) only Point P & Cedeo Pro ---
case ((document.location.pathname.includes("nouveau-client") && event_name === "agency_select" && document.location.hostname === "www.pointp.fr") || (document.location.pathname.includes("nouveau-client") && event_name === "agency_select" && document.location.hostname === "www.cedeo.fr" && window.ODC_clientType === "PRO")):
tC.log("Router -> Déclenchement de l'événement 'validation_odc_pointp_cedeopro'");
tC.event.validation_odc_pointp_cedeopro(null, tc_array_events);
break;        
// --- generate_lead ---
case ((a === "RDV Showroom" && c === "Engagement") || a === "Accès Prendre RDV en showroom" || l.toLowerCase() === "prendre rdv en showroom"):
tC.log("Router -> Déclenchement de l'événement 'generate_lead'");
tC.event.generate_lead(null, tc_array_events);
break;
// --- nl_subscribe ---
case (l.indexOf("abonn") > -1 && l.indexOf("newsletter") > -1):
tC.log("Router -> Déclenchement de l'événement 'nl_subscribe'");
tC.event.nl_subscribe(null, tc_array_events);
break;
// --- Cas par défaut ---
default:
tC.log("Router: Événement non routé.", {cat: c, act: a, lab: l});
break;
}
} catch (e) {
tC.log("Erreur dans le router d'événements : " + e);
}
})();
}
});
tC.extend({
executeTag289_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** [NEXTPULSE] - Actions ***
if ((document.cookie.split('TC_PRIVACY=')[1]?.[0] === '0') && document.cookie.includes('TC_PRIVACY_CENTER=')){
if(tc_array_events['action'] !== "Affichage du carrousel marketing" && tc_array_events['event_name'] !== "view_promotion" && tc_array_events['event_name'] !== "select_promotion"){
try {
var event_name = tc_array_events['event_name'];
//ajout temporaire
if (
window.location.hostname.includes("punchout") &&
!window.location.hostname.match(/^(rec-|int-)/) &&
!window.location.hostname.includes(".loc") &&
!["localhost", "ppr.cedeo.fr"].includes(window.location.hostname) &&
event_name === "cart_interaction" &&
tc_array_events["category"] === "Mon panier" &&
tc_array_events["event_context"] === "Punchout" &&
!window.punchout_purchase_value
) {
var amountEl = document.querySelector('[data-testid="cart-summary/prices/total-ht-amount"]');
if (amountEl) {
window.punchout_purchase_value = parseFloat(amountEl.textContent.replace(/\s|€/g, "").replace(",", "."));
}
}
//fin ajout tempoaire
/*if (event_name === 'select_promotion'){
var stream_id = tC.internalvars && tC.internalvars.ga4_stream_id;
if (!stream_id){
return; }
gtag('event', 'select_promotion', {
send_to: stream_id,
transport_type: 'beacon',
promotion_name: tc_array_events['promotion_name'] || '',
creative_name:  tc_array_events['creative_name']  || '',
creative_slot:  tc_array_events['creative_slot']  || 0,
location_id:    tc_array_events['location_id']    || '',
promotion_id:   tc_array_events['promotion_id']   || '',
items:          Array.isArray(tc_array_events['items']) ? tc_array_events['items'] : []
});
return;
}
*/
// --- autres events ---
if (!tC.internalvars){
return; }
var up = tC.internalvars.ga4_user_properties;
gtag('set', 'user_properties', up);
var T = tc_array_events;
var ep = {};
ep.event_tag = '[NEXTPULSE] - Actions';
var ga4_ep_vp = tC.internalvars.ga4_ep_page_by_default;
var ga4_ep_act = {
'env_template':      '' + tc_vars["env_template"]      + '',
'user_visitorId':    '' + tc_vars["user_visitorId"]    + '',
'event_category':    '' + tc_array_events['category']          + '',
'event_action':      '' + tc_array_events['action']            + '',
'event_label':       '' + tc_array_events['label']             + '',
'kpi_strategy':      '' + tc_array_events['kpi_strategy']      + '',
'event_type':        '' + tc_array_events['event_type']        + '',
'event_user_action': '' + tc_array_events['event_user_action'] + ''
};
switch (event_name){
case 'view_item_list':
case 'view_item':
case 'add_to_wishlist':
case 'select_content':
case 'select_item':
case 'view_cart':
case 'add_to_cart':
case 'remove_from_cart':
case 'begin_checkout':
case 'purchase':
case 'refund':
ep.items = (typeof GA4_CONVERTER !== 'undefined') ? GA4_CONVERTER.items_products(T) : [];
break;
}
ep = Object.assign(ep, ga4_ep_vp, ga4_ep_act);
if (event_name === 'cart_interaction' || event_name === 'purchase') {
if (tc_array_events['event_context']) {
ep.event_context = tc_array_events['event_context'];
}
}
if (event_name === 'view_item_list'){
ep = Object.assign(ep, {
'page_cat1':             '' + tc_vars["page_cat1"]             + '',
'page_cat2':             '' + tc_vars["page_cat2"]             + '',
'page_cat3':             '' + tc_vars["page_cat3"]             + '',
'page_cat4':             '' + tc_vars["page_cat4"]             + '',
'page_cat_id1':             '' + tc_vars["page_cat_id1"]             + '',
'page_cat_id2':             '' + tc_vars["page_cat_id2"]             + '',
'page_cat_id3':             '' + tc_vars["page_cat_id3"]             + '',
'page_cat_id4':             '' + tc_vars["page_cat_id4"]             + '',
'attributionToken':      '' + tc_array_events['attributionToken'] + '',
'googleFilters':         tc_vars["googleFilters"] || '',
'env_channel':           '' + tc_vars["env_channel"]           + '',
'env_template':          '' + tc_vars["env_template"]          + '',
'search_results_number': '' + tc_vars["search_results_number"] + '',
'search_filters':        '' + tc_vars["search_filters"]        + '',
'search_page_number':    '' + tc_vars["search_page_number"]    + ''
});
}
if (event_name === 'add_to_cart' || event_name === 'select_item'){ ep = Object.assign(ep, { 'attributionToken': '' + tc_array_events['attributionToken'] + '' }); }
if (
window.location.hostname.includes("punchout") &&
!window.location.hostname.match(/^(rec-|int-)/) &&
!window.location.hostname.includes(".loc") &&
!["localhost", "ppr.cedeo.fr"].includes(window.location.hostname) &&
event_name === "purchase" &&
tc_array_events["category"] === "Ecommerce" &&
tc_array_events["action"] === "Export Panier" &&
tc_array_events["event_context"] === "Punchout"
) {
if (!window.punchout_purchase_value) {
var amountEl = document.querySelector('[data-testid="cart-summary/prices/total-ht-amount"]');
if (amountEl) {
window.punchout_purchase_value = parseFloat(amountEl.textContent.replace(/\s|€/g, "").replace(",", "."));
}
}
ep.value = window.punchout_purchase_value;
ep.currency = "EUR";
ep.transaction_id = tc_array_events["transaction_id"] || "punchout_" + Date.now();
}
ep.send_to = tC.internalvars.ga4_stream_id;
ep.transport_type = 'beacon';
gtag('event', event_name, ep);
} catch(e){
//tC.error('Erreur tag GA4', e);
}
}
}
}
});
tC.extend({
executeTag418_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** NEXT-FIX-ODC Confirmation ***
if(document.location.pathname.includes("nouveau-client")){
if (tc_array_events["action"].includes('Inscription nouveau PRO')) {
window.ODC_clientType = 'PRO';
} else if (tc_array_events["action"].includes('Inscription nouveau PART')) {
window.ODC_clientType = 'PART';
}
}
if(document.location.pathname.includes("nouveau-client") && tc_array_events["event_name"] === "agency_select"){
// Valeur dynamique (PART / PRO, etc.)
var ct = (window && window.ODC_clientType) ? window.ODC_clientType : 'unknown';
var ga4_ep_act_1 = {  
'event_action': 'Validation ODC',
'event_label': '' + ct + '',
'kpi_strategy': 'Activation',
'event_type': 'Inscription',
'event_user_action': 'Inscription nouveau ' + ct + ' - Etape confirmation'
};
var event_name = 'sign_up';
var ep = Object.assign({}, ga4_ep_act_1);
tC.log("GA4 event params:", event_name, ep);
gtag('event', event_name, ep);
var ga4_ep_act_2 = {  
'event_action': 'Validation ODC ' + ct,
'event_label': '' + ct + '',
'kpi_strategy': 'Activation',
'event_type': 'Inscription',
'event_user_action': 'Inscription nouveau ' + ct + ' - Etape confirmation'
};
ep = Object.assign({}, ga4_ep_act_2);
tC.log("GA4 event params:", event_name, ep);
gtag('event', event_name, ep);
//test ajout abtasty
if (window.abtasty && typeof window.abtasty.send === 'function'){
// Event spécifique PRO / PART
window.abtasty.send("event", {
ec: "Action Tracking",
ea: "Creation_ODC_Web_" + ct , // Creation_ODC_Web_PRO ou Creation_ODC_Web_PART
ev: 1
});
}
//test ajout abtasty
}
}
});
tC.extend({
executeTag421_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Nextpulse QA ***
(function(){
tC.setCookie("tCdebugLib",1)
var clone_event = JSON.parse(JSON.stringify(tc_array_events))
tC.log(clone_event)
})()
}
});
tC.extend({
executeTag424_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** Distinction PRO/PART ***
window.confirmationODC = function () {
// ====== GUARD : ne pas réinstaller ======
if (window.__confirmationODC_INSTALLED__) {
tC.log("[confirmationODC] déjà installé");
return;
}
window.__confirmationODC_INSTALLED__ = true;
// ====== ETAT GLOBAL (partagé) ======
var S = window.__confirmationODC_STATE__ || (window.__confirmationODC_STATE__ = {
cachedType: null,
seenVerify: false,
sentMail: false,
sentFinal: false,
prevPath: location.pathname
});
var STEP_FACTU = "/inscription/nouveau-client/facturation";
var STEP_VERIFY = "/inscription/nouveau-client/verifier-votre-email";
var STEP_CONFIRM = "/inscription/nouveau-client/confirmation";
var oldPush = history.pushState;
var oldReplace = history.replaceState;
var getPath = function (url) {
try { return new URL(url, location.href).pathname; }
catch (e) { return location.pathname; }
};
var getAuthStorage = function () {
try { return sessionStorage.getItem("auth-storage"); }
catch (e) { return null; }
};
var computeTypeFromStorage = function () {
var s = getAuthStorage();
if (!s) return "non-defini";
if (s.indexOf('"isPro":true') > -1) return "PRO";
return "PART";
};
var inFunnel = function (path) {
return (path || "").indexOf("/inscription/nouveau-client/") > -1;
};
var captureTypeIfOnFacturation = function (path) {
if (path && path.indexOf(STEP_FACTU) > -1) {
S.cachedType = computeTypeFromStorage();
}
};
var sendEvent = function (eventName, type) {
if (!window.tC || !tC.event || !tC.event.sign_up) return;
tC.event.sign_up(this, {
"event_name": eventName,
"category": "Interactions utilisateurs",
"action": eventName,
"label": type,
"event_type": "Inscription",
"event_user_action": type + "_" + eventName,
"event_context": "Login",
"kpi_strategy": "Activation"
});
};
var sendMailIfNeeded = function () {
if (S.sentMail) return;
var type = S.cachedType || "non-defini";
sendEvent("confirmation_mail_ODC", type);
S.sentMail = true;
};
var sendFinalIfNeeded = function () {
if (S.sentFinal) return;
var type = S.cachedType || "non-defini";
sendEvent("confirmation_finale_ODC", type);
S.sentFinal = true;
};
var resetState = function () {
S.cachedType = null;
S.seenVerify = false;
S.sentMail = false;
S.sentFinal = false;
};
var handle = function (nextPath) {
if (!inFunnel(nextPath)) {
resetState();
S.prevPath = nextPath;
return;
}
captureTypeIfOnFacturation(nextPath);
if (nextPath.indexOf(STEP_VERIFY) > -1) {
S.seenVerify = true;
setTimeout(function () {
if (location.pathname.indexOf(STEP_VERIFY) === -1) return;
sendMailIfNeeded();
}, 500);
}
if (nextPath.indexOf(STEP_CONFIRM) > -1) {
setTimeout(function () {
if (location.pathname.indexOf(STEP_CONFIRM) === -1) return;
if (!S.seenVerify) {
sendMailIfNeeded();
}
sendFinalIfNeeded();
}, 500);
}
S.prevPath = nextPath;
};
history.pushState = function (state, title, url) {
var nextPath = getPath(url);
var r = oldPush.apply(history, arguments);
handle(nextPath);
return r;
};
history.replaceState = function (state, title, url) {
var nextPath = getPath(url);
var r = oldReplace.apply(history, arguments);
handle(nextPath);
return r;
};
// init
captureTypeIfOnFacturation(location.pathname);
handle(location.pathname);
tC.log("[confirmationODC] installé (guard dans window)");
};
window.confirmationODC();
}
});
tC.extend({
executeTag425_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** event ODC PRO & PART ***
if (
tc_array_events["event_name"] === "confirmation_mail_ODC" &&
tc_array_events["event_type"] === "Inscription" &&
!window.hasTriggeredConfirmationMailODC
) {
window.hasTriggeredConfirmationMailODC = true;
ep.event_action = "confirmation_mail_ODC";
ep.event_category = "Interactions utilisateurs";
ep.event_label = tc_array_events["label"];      // PRO / PART / non-defini
ep.user_type  = tc_array_events["user_type"];   // PRO / PART / non-defini
gtag("event", "confirmation_mail_ODC", ep);
}
if (
tc_array_events["event_name"] === "confirmation_finale_ODC" &&
tc_array_events["event_type"] === "Inscription" &&
!window.hasTriggeredConfirmationFinaleODC
) {
window.hasTriggeredConfirmationFinaleODC = true;
ep.event_action = "confirmation_finale_ODC";
ep.event_category = "Interactions utilisateurs";
ep.event_label = tc_array_events["label"];      // PRO / PART / non-defini
ep.user_type  = tc_array_events["user_type"];   // PRO / PART / non-defini
gtag("event", "confirmation_finale_ODC", ep);
}
}
});
tC.extend({
executeTag206_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - page_view ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - page_view / page_view'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.email_sha256 = tc_vars["email"] || tc_array_events["email"];  
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_brand'] = tc_vars["page_brand"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data.page_type = data.env_template;
cact('trigger', 'page_view', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_page_view");
tC.event.media_page_view(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
// ADDITIONNAL ECOMMERCE EVENT
switch(true){
/*
case tc_vars["env_template"] == 'Fiche produit' :
event_name = 'view_item'; // test 14.12.23
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view / view_item'; // debug server-side tracking
ec.items = convertGA4toOTitems( GA4_CONVERTER.items_products(tc_vars) );
ec.value = 1
ec.currency = "EUR"
// DEBUG
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (Onetag - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
// DEBUG
cact('trigger',event_name, ec, ONETAG_CONFIG);
// test 2023.11.30 (maxime) correction 2023.12.11 :
cact('trigger','view_item', {
event_tag: 'OneTag - page_view / view_item',
debug_converteo: tC.getCookie('debug_converteo'),
value: 8.00,
currency: 'EUR',
items: [{
id: 'SKU_12345',
quantity: 1,
variant: 'red',
coupon: 'CHRISTMAS',
discount: 1.99,
product:{
id: '12345',
name: 'Trex tshirt',
category_1: 'clothes',
category_2: 't-shirts',
category_3: 'boy',
brand: 'Lacoste',
price: 9.99
}
}]//,
//user: {
//  id: '12356',
//  email:'toto@domain.fr',
//  consent_categories: [1,3]
//}
},
ONETAG_CONFIG);
break;
*/
/*
case tc_vars["list_products"].length:
event_name = 'view_item_list';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view / view_item_list'; // debug server-side tracking
ec.items = convertGA4toOTitems( GA4_CONVERTER.items_products(tc_vars) );
// one tag naming convention ADD product array in order to be received by TC server AND remove the prefix item_ 
for (i = 0; i < ec.items.length; i++){
ec.items[i].product = {
id: ""
}
// end 
var keys = Object.keys(ec.items[i]);
for (j = 0; j < keys.length; j++){
if (keys[j].includes("item_")){
var newKey = keys[j].slice(5);
ec.items[i][newKey] = ec.items[i][keys[j]];
delete ec.items[i][keys[j]];
}
}
}
// DEBUG
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (Onetag - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
// DEBUG
cact('trigger',event_name, ec, ONETAG_CONFIG);
break;
*/
/*
case tc_vars["commercials_list"].length:
event_name = 'view_promotion';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view / view_promotion'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_promotions(tc_vars);
// one tag naming convention ADD product array in order to be received by TC server AND remove the prefix item_ 
for (i = 0; i < ec.items.length; i++){
ec.items[i].product = {
id: ""
}
// end 
var keys = Object.keys(ec.items[i]);
for (j = 0; j < keys.length; j++){
if (keys[j].includes("item_")){
var newKey = keys[j].slice(5);
ec.items[i][newKey] = ec.items[i][keys[j]];
delete ec.items[i][keys[j]];
}
}
}
// DEBUG
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (Onetag - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
// DEBUG
cact('trigger',event_name, ec, ONETAG_CONFIG);
break;
*/
} // switch.end
})()
}
});
tC.extend({
executeTag309_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - begin_checkout ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - begin_checkout'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data['media_event'] = 'media_begin_checkout';
var SPLIT_PRODUCTS = tc_array_events["split_products"] || [];
if (SPLIT_PRODUCTS.length > 0 && SPLIT_PRODUCTS[0].split_id) {
data['id'] = SPLIT_PRODUCTS[0].split_id;
} else {
data['id'] = '';
}
data['currency'] = 'EUR';
data['type'] = 'online';
data['payment_method'] = 'other';
data['status'] = 'in_progress';
data['revenue'] = 0;
data['value'] = 0;
data['shipping_amount'] = 0;
data['tax_amount'] = 0;
data['items'] = [];
for (var s = 0; s < SPLIT_PRODUCTS.length; s++) {
var split = SPLIT_PRODUCTS[s] || {};
data['revenue'] += parseFloat((split.split_amount_tf || '0').replace(',', '.'));
data['value'] += parseFloat((split.split_amount_ati || '0').replace(',', '.'));
data['shipping_amount'] += parseFloat((split.split_shipping_amount || '0').replace(',', '.'));
data['tax_amount'] += parseFloat((split.split_tax || '0').replace(',', '.'));
var order_products = split.order_products || [];
for (var i = 0; i < order_products.length; i++) {
var product = order_products[i] || {};
var item = {};
item['id'] = product.product_id || '';
item['price'] = parseFloat((product.product_price || '0').replace(',', '.'));
item['quantity'] = parseInt(product.product_quantity || 0);
item['product'] = {
'id': product.product_id || '',
'name': product.product_name || '',
'price': parseFloat((product.product_price || '0').replace(',', '.')),
'currency': 'EUR',
'category_1': product.product_category1 || '',
'category_2': product.product_category2 || '',
'category_3': product.product_category3 || '',
'category_4': product.product_category4 || '',
'category_5': product.product_category5 || '',
'brand': product.product_trademark || ''
};
data['items'].push(item);
}
}
tc_array_events = tc_array_events || {};
tc_array_events.media_event = 'media_begin_checkout';
data.page_type = data.env_template;
cact('trigger', 'begin_checkout', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_begin_checkout");
tC.event.media_begin_checkout(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
})()
}
});
tC.extend({
executeTag435_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - click_easysav ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - click_easysav'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_vars["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat1"];
data['page_cat2'] = tc_vars["page_cat2"];
data['page_cat3'] = tc_vars["page_cat3"];
data['page_cat4'] = tc_vars["page_cat4"];
data['event_category'] = tc_array_events["category"];
data['event_action'] = tc_array_events["action"];
data['event_label'] = tc_array_events["label"];  
data.page_type = data.env_template;
cact('trigger', 'click_easysav', data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_click_easysav");
tC.event.media_click_easysav(null, tc_array_events);
tC.log("Évenement déclenché avec succès");
})()
}
});
tC.extend({
executeTag438_5666_10: function (el, p){
if (!el||!el.target){el={type:"no_event",target:{}}};
if(typeof p=="undefined"){p={};}
tc_array_events = tC.container_5666_10.init_tc_array_events(p);
var cact = tC.container_5666_10.cact || window.cact;
var cact_container = window.tC_5666_10;
var cact_event = el || {};
var cact_event_vars = Object.assign({}, tc_array_events);
var cact_event_attrs = cact_event.target || {};
// *** OneTag - validation_odc (part/pro) - Point P included & Cedeo Pro ***
(function(){
var ONETAG_CONFIG = {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: tC.internalvars.ss_collectDomain
};
var data = {};
data.event_tag = 'OneTag - validation_odc (part/pro)'; // debug server-side tracking
data.user = tc_array_events["user"] || {};
data.user.id = data.user.user_id || '';
data.user.email_sha256 = tc_vars["email"];  
data.user.consent_categories = helper_staticjs_consentCategories();
data['page_host'] = document.location.host;
data['env_template'] = tc_vars["env_template"];
data['user_profile_page'] = tc_vars["user_profile"];
data['env_work'] = tc_vars["env_work"];
data['page_name'] = tc_array_events["page_name"];
data['page_path'] = tc_array_events["page_path"];
data['page_cat1'] = tc_vars["page_cat_id1"];
data['page_cat2'] = tc_vars["page_cat_id2"];
data['page_cat3'] = tc_vars["page_cat_id3"];
data['page_cat4'] = tc_vars["page_cat_id4"];
data['media_event'] = 'media_validation_odc';
data['event_category'] = tc_array_events["category"];
data['event_action'] = tc_array_events["action"];
data['event_label'] = tc_array_events["label"];
data['lead_type'] = 'odc'; // requis pour Pinterest
tc_array_events = tc_array_events || {};
tc_array_events.media_event = 'media_validation_odc';
var clientType = window.ODC_clientType; // "PART" ou "PRO"
var event_name = clientType ? 'Validation ODC ' + clientType : 'Validation ODC';
data.page_type = data.env_template;
cact('trigger', event_name, data, ONETAG_CONFIG);
//
tC.log("Déclenchement de l'événement client-side : media_validation_odc");
tC.event.media_validation_odc(null, tc_array_events);
tC.log("Événement déclenché avec succès");
})()
}
});
if(tC.dedup.ValidRules('188')){
tC.launchTag(188, 'GA4 - 0.legacy lookup table', 26, 5666, 10, 18);
// *** GA4 - 0.legacy lookup table ***
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_name'] = function(data) {
var value = 'legacy_event'; // event_name by default
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> soluplus_interaction
case c == 'Compte' && a == 'Chiffrage Soluplus':
case c == 'Compte' && a == 'Clic lien externe' && l == 'Chiffrage Solu+':
value = 'soluplus_interaction';
break;
//*** RETURN ==> generic_interaction
case c == 'Header':
case c == 'Edito':
case c == 'Footer':
case c == 'Services':
case c == 'Page simple':
case c == 'Compte' && a == 'Clic lien externe':
case c == 'Compte' && a == 'Mon Parc':
case c == 'Interactions utilisateurs' && a == 'Ajouter à mon parc':
case c == 'Interactions utilisateurs' && a == 'Fiche produit':
case c == 'Interactions utilisateurs' && a == 'Onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Clic code barre':
case c == 'Interactions utilisateurs' && a == 'Clic page produit':
case c == 'Interactions utilisateurs' && a == 'Clic sur bloc service':
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Ecommerce' && a == 'Clic ensemble':
case c == 'Ecommerce' && a == 'Voir les ensembles avec ce produit':
case c == 'Mon compte' && a == 'Accéder au détail liste':
case c == 'Espace Fidélité' && a.includes('Clic sur'):
case c == 'Espace Fidélité' && a.includes('Interaction utilisateur - '):
case c == 'Marketing' && a == 'Clic univers':
value = 'generic_interaction';
break;
//*** RETURN ==> filter_interaction
case a == 'Accès RDVShowroom':
value = 'Accès_RDVShowroom';
break;
//*** RETURN ==> wts_interaction
case c == 'Engagement':
value = 'wts_interaction';
break;
//*** RETURN ==> ab_test
case c == 'AB test':
value = 'ab_test';
break;
//*** RETURN ==> validation_ODC_PRO
case c == 'Interactions utilisateurs' && a == 'Validation ODC PRO' && l == 'Success':
value = 'validation_ODC_PRO';
break;
//*** RETURN ==> validation_ODC_PART
case c == 'Interactions utilisateurs' && a == 'Validation ODC PART' && l == 'Success':
value = 'validation_ODC_PART';
break;
//*** RETURN ==> display_ATP_Check
case a == 'Affichage ATP check':
value = 'display_ATP_Check';
break;
//*** RETURN ==> clic_ATP_Check
case a == 'Affichage ATP check':
value = 'clic_ATP_Check';
break;
//*** RETURN ==> filter_interaction
case c == 'Filtres':
case c == 'Recherche catalogue' && a == 'Filtres' && l == 'Generique':
case c == 'Recherche catalogue' && a == 'Filtres personnalisés':
case c == 'Recherche catalogue' && a == 'Filtres perso activés':
case c == 'Recherche agence' && a == 'Recherche filtré':
value = 'filter_interaction';
break;
//*** RETURN ==> account_interaction
case c == 'Mon compte' && a == 'Dematerialisation de facture':
value = 'account_interaction';
break;
//*** RETURN ==> slider_interaction
case c == 'Espace Fidélité' && a == 'Clic sur onglet slider':
case c == 'Espace Fidélité' && a.includes('Navigation slider'):
value = 'slider_interaction';
break;
//*** RETURN ==> video_start
case c == 'Interactions utilisateurs' && a == 'Video' && l == 'Play':
value = 'video_start';
break;
//*** RETURN ==> pagination_navigation
case c == 'Recherche produits' && a == 'Pagination':
case c == 'Recherche catalogue' && a == 'Pagination':
case c == 'Recherche marque' && a == 'Pagination':
value = 'pagination_navigation';
break;
//*** RETURN ==> subscribe
case c == 'Espace Fidélité' && a == 'Inscription Boost':
case c == 'Espace Fidélité' && a == 'Navigation Inscription':
value = 'subscribe';
break;
//*** RETURN ==> unsubscribe
case c == 'Compte' && a == 'Désinscription' && l == 'Se désinscrire':
value = 'unsubscribe';
break;
//*** RETURN ==> discover
case c == 'Compte' && a == 'Espace fidélité' && l == 'Découvrir':
value = 'discover';
break;
/************************************
*** share events 
***********************************/
//*** RETURN ==> share
case c == 'Interactions utilisateurs' && a.includes('Partage'):
value = 'share';
break;
/************************************
*** downloads events 
***********************************/
//*** RETURN ==> file_download
case c == 'Compte' && a == 'Télécharger facture':
case c == 'Interactions utilisateurs' && a.includes('Téléchargement'):
value = 'file_download';
break;
//*** RETURN ==> app_reach
case c == 'Marketing' && a == 'Clic sur la bannière app':
value = 'app_reach';
break;
/************************************
*** search events 
***********************************/
//*** RETURN ==> search
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Recherche agence' && a == 'Géolocalisation':
case c == 'Recherche produits' && a == 'Mot suggéré - RECHERCHES RÉCENTES':
case c == 'Recherche produits' && a == 'Mot suggéré - CATÉGORIES':
case c == 'Recherche produits' && a == 'Voir tous les produits':
case c == 'Recherche produits' && a == 'Mot suggéré - MOTS CLÉS':
case c == 'Recherche produits' && a == 'Conseils experts':
case c == 'Recherche produits' && a == 'Mot suggéré - MARQUES':
case c == 'Recherche produits' && a == 'Voir top articles':
case c == 'Recherche produits' && a == 'Initier recherche':
case c == 'Recherche produits' && a == 'Afficher résultats barre':
value = 'search';
break;
//*** RETURN ==> view_search_results
case c == 'Ecommerce' && a == 'view_search_results':
value = 'view_search_results';
break;
/************************************
*** form events 
***********************************/
//*** RETURN ==> form_submit
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire':
case c == 'Footer' && a == 'Inscription Newsletter':
value = 'form_submit';
break;
/************************************
*** login/signup events 
***********************************/
//*** RETURN ==> login
case c == 'Compte' && a == 'Connexion':
value = 'login';
break;
//*** RETURN ==> login
case c == 'Interactions utilisateurs' && a == 'Affichage Connexion/Inscription':
value = 'login_view';
break;
//*** RETURN ==> sign_up_start
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Creer son compte':
case c == 'Compte' && a == 'Inscription nouveau PART - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PRO - Entrée':
value = 'sign_up_start';
break;
//*** RETURN ==> sign_up_error
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau client' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation' && l == 'Erreur':
value = 'sign_up_error';
break;
//*** RETURN ==> sign_up_step
case c == 'Compte' && a == 'Client Optin':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Association de compte email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Activation SMS':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par facture':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Validation mot de passe':
case c == 'Compte' && a.includes('Inscription nouveau PART - Etape'):
case c == 'Compte' && a.includes('Inscription nouveau PRO - Etape'):
value = 'sign_up_step';
break;
//*** RETURN ==> sign_up
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
value = 'sign_up';
break;
/************************************
*** agency events 
***********************************/
//*** RETURN ==> agency_contact
case c == 'Recherche agence' && a == 'Email | Agence':
case c == 'Recherche agence' && a == 'Contact agence':
case c == 'Recherche agence' && a == 'Contacter mon agence':
value = 'agency_contact';
//*** RETURN ==> agency_interaction
case c == 'Recherche agence' && a.includes(' | Agence') && !a.includes('Email'):
case c == 'Recherche agence' && a == 'Itineraires':
case c == 'Recherche agence' && a == 'Changement d\'agence':
case c == 'Recherche agence' && a == 'Fiche agence':
case c == 'Recherche agence' && a.includes('Page'):
value = 'agency_interaction';
break;
//*** RETURN ==> agency_select
case c == 'Recherche agence' && a.includes('Choix d\'agence sur'):
case c == 'Recherche agence' && a == 'Choix d\'agence':
case c == 'Rattachement Agence VA' && a == 'Choix d\'agence ':
value = 'agency_select';
break;
//*** RETURN ==> agency_add_to_wishlist
case c == 'Recherche agence' && a == 'Ajout favori':
value = 'agency_add_to_wishlist';
break;
//*** RETURN ==> agency_rdv
case c == 'Recherche agence' && a.includes('Prendre un rdv'):
value = 'agency_rdv';
/************************************
*** ecommerce events 
***********************************/
//*** RETURN ==> delete_wishlist
case c == 'Ecommerce' && a == 'Supprimer une liste':
value = 'delete_wishlist';
break;
//*** RETURN ==> ask_for_informations
case c == 'Ecommerce' && a == 'Demande d\'information':
case a.includes('Envoi demande'):
value = 'ask_for_informations';
break;
//*** RETURN ==> create_alert
case c == 'Ecommerce' && a == 'Alerte':
value = 'create_alert';
break;
//*** RETURN ==> brand_favorite
case c == 'Ecommerce' && a == 'Ajout favori':
value = 'brand_favorite';
break;
//*** RETURN ==> show_product_preview
case c == 'Interactions utilisateurs' && a == 'Aperçu':
value = 'show_product_preview';
break;
//*** RETURN ==> see_all_products
case c == 'Recherche produits' && a == 'Voir gamme':
case c == 'Ecommerce' && a == 'Voir gamme':
case c == 'Compte' && a == 'Mon Parc' && l == 'Tous les produits':
value = 'see_all_products';
break;
//*** RETURN ==> show_product_availability
case c == 'Recherche disponibilité' && a == 'Géolocalisation':
case c == 'Recherche disponibilité' && a == 'Choix d\'agence ':
case c == 'Interactions utilisateurs' && a == 'Disponibilité à proximité':
value = 'show_product_availability';
break;
//*** RETURN ==> export_to_quotation
case c == 'Compte' && a == 'Exporter dans un devis Tolteck':
value = 'export_to_quotation';
break;
//*** RETURN ==> validate_quotation
case c == 'Ecommerce' && a == 'Valider mon devis':
value = 'validate_quotation';
break;
//*** RETURN ==> validate_quotation_products
case c == 'Ecommerce' && a == 'Valider mon devis partiellement':
value = 'validate_quotation_products';
break;
//*** RETURN ==> error_quotation
case c == 'Ecommerce' && a == 'Erreur validation devis':
value = 'error_quotation';
break;
//*** RETURN ==> select_quantitative_price
case c == 'Ecommerce' && a == 'Selection prix quantitatif':
case c == 'Ecommerce' && a == 'Prix dégressifs':
value = 'select_quantitative_price';
break;
//*** RETURN ==> new_wishlist
case c == 'Ecommerce' && a == 'Créer une nouvelle liste':
value = 'new_wishlist';
break;
//*** RETURN ==> view_item_list
case c == 'Ecommerce' && a == 'Impression listes produits':
case c == 'Ecommerce' && a == 'Impression listes produit':
value = 'view_item_list';
break;
//*** RETURN ==> view_item
case c == 'Ecommerce' && a == 'view_item':
value = 'view_item';
break;
//*** RETURN ==> view_item
case c == 'Ecommerce' && a == 'Impression produit revetement':
value = 'view_item';
break;
//*** RETURN ==> add_to_wishlist
case c == 'Ecommerce' && a == 'Accès - Ajout liste':
case c == 'Ecommerce' && a == 'Mettre de côté':
case c == 'Ecommerce' && a == 'Ajouter à ma liste':
value = 'add_to_wishlist';
break;
//*** RETURN ==> view_promotion
case c == 'Marketing' && a == 'Vue encart promotionnel':
case c == 'Marketing' && a == 'Vue de la bannière':
case c == 'Ecommerce' && a == 'RDV Showroom::Bandeau':
case c == 'Marketing' && a == 'Vue de la bannière app':
case c == 'Marketing' && a == 'Vue encart marketing PDP':
case c == 'Marketing' && a == 'Vue encart panier simplifié':
value = 'view_promotion';
break;
//*** RETURN ==> emc_interaction
case c == 'Compte' && a == 'Actualiser les informations':
case c == 'Compte' && a == 'Clic lien externe':
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Interactions utilisateurs' && a == 'Clic onglet horizontal':
case c == 'Interactions utilisateurs' && a == 'Clic onglet vertical':
case c == 'Mon compte' && a == 'Gérer les droits':
case a == 'Clic CTA' && l.includes('Voir') :
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Clic CTA' && a == 'Consulter mon encours':
case c == 'Marketing' && a == 'Vue encart marketing EMC':
case c == 'Marketing' && a == 'Clic encart marketing EMC':    
value = 'emc_interaction';
break;
//*** RETURN ==> select_promotion
case c == 'Interactions utilisateurs' && a == 'Clic bannière':
case c == 'Marketing' && a == 'Clic encart promotionnel':
case c == 'Marketing' && a == 'Clic sur la bannière':
case c == 'Marketing' && a == 'Clic Frise Marque':
case c == 'Marketing' && a == 'Clic encart panier simplifié':
case c == 'Marketing' && a == 'Clic sur la bannière app':
case c == 'Marketing' && a == 'Clic encart marketing PDP':
value = 'select_promotion';
break;
//*** RETURN ==> select_item
case c == 'Recherche produits' && a == 'Clic produit':
case c == 'Ecommerce' && a == 'Clic produit':
value = 'select_item';
break;
//*** RETURN ==> view_cart
case c == 'Interactions utilisateurs' && a == 'Affichage du mini panier':
value = 'view_cart';
break;
//*** RETURN ==> increase_cart_quantity
case c == 'Ecommerce' && a == 'Ajouter quantité':
case c == 'Ecommerce' && a == 'Ajout quantité pop-in panier':
case c == 'Ecommerce' && a == 'Ajouter quantité - panier simplifié':
value = 'increase_cart_quantity';
break;
//*** RETURN ==> add_to_cart
case c == 'Ecommerce' && a == 'Ajout rapide':
case c == 'Ecommerce' && a == 'Ajout au panier variante':
case c == 'Ecommerce' && a == 'Mon compte - Ajout au panier':
case c == 'Ecommerce' && a == 'Ajout au panier':
case c == 'Ecommerce' && a == 'Immersif::Ajout au panier':
case c == 'Ecommerce' && a == 'Ajout au panier - ensemble':
case c == 'Ecommerce' && a == 'Ajout panier - SoluPlus':
case c == 'Ecommerce' && a == 'Ajout panier - retrait express':
case c == 'Ecommerce' && a == 'Ajout Panier Top Achat Carrousel':
case c == 'Ecommerce' && a == 'Ajout au panier simplifié':
value = 'add_to_cart';
break;
//*** RETURN ==> remove_from_cart
case c == 'Ecommerce' && a == 'Supprimer':
case c == 'Ecommerce' && a == 'Vider mon panier':
case c == 'Ecommerce' && a == 'Enlever quantité':
case c == 'Ecommerce' && a == 'Enlever quantité - panier simplifié':
value = 'remove_from_cart';
break;
//*** RETURN ==> begin_checkout
case c == 'Ecommerce' && a == 'Achat en 1 Clic':
value = 'buy_now_button';
break;
//*** RETURN ==> add_shipping_info
case c == 'Ecommerce' && a == 'Choix de livraison':
case c == 'Ecommerce' && a == 'Etape livraison':
value = 'add_shipping_info';
break;
//*** RETURN ==> add_payment_info
case c == 'Ecommerce' && a == 'Etape paiement':
value = 'add_payment_info';
break;
//*** RETURN ==> checkout_interaction
case c == 'Checkout' && a.includes('Référence'):
case c == 'Checkout' && a == 'Chargement du fichier':
case c == 'Checkout' && a == 'Champs complété':
case c == 'Checkout' && a == 'Champs en erreur':
value = 'checkout_interaction';
break;
//*** RETURN ==> cart_interaction
case c == 'Mon panier' && a == 'Continuer mes achats':
case c == 'Mon panier' && a == 'Consulter ma liste':
case c == 'Mon panier' && a == 'Ajout code promo':
case c == 'Recherche agence | Popin' && a == 'Changement d\'agence':
case c == 'Mon panier' && a == 'Navigation' && l == 'Modifier mon agence':
value = 'cart_interaction';
break;
//*** RETURN ==> purchase
case c == 'Ecommerce' && a == 'Créer une demande d\'achat':
value = 'purchase';
break;
//*** RETURN ==> refund
case c == 'Ecommerce' && a == 'Confirmer l\'annulation de demande d\'achat':
value = 'refund';
break;
//*** RETURN ==> order_request_interaction
case c == 'Ecommerce' && a.includes('Relancer une demande d\'achat'):
case c == 'Ecommerce' && a.includes('demande d\'achat') && a.includes('POR'):
case c == 'Ecommerce' && a.includes(' - demande d\'achat'):
value = 'order_request_interaction';
break;
//*** RETURN ==> validate_payment_facility
case c == 'Compte' && a.includes('Valider ma demande de Facilité de paiement'):
value = 'validate_payment_facility';
break;
//*** RETURN ==> add_promo_code
case c == 'Compte' && a == 'Ajout code promo':
value = 'add_promo_code';
break;
//*** RETURN ==> validate_price
case c == 'Gestion des tarifs' && a.includes('Validation tarifs'):
case c == 'Configuration des prix':
value = 'validate_price';
break;
//*** RETURN ==> checkout_option
case c == 'Tracking_complementaire' && a == 'Checkout_option':
value = 'checkout_option';
break;
//*** RETURN ==> validateCart_promo
case c == 'Ecommerce' && a == 'Validation panier avec promo':
value = 'validateCart_promo';
break;
//*** RETURN ==> checkoutField_completed
case c == 'Checkout' && a == 'Champ complété':
value = 'checkoutField_completed';
break;
//*** RETURN ==> promo_use
case c == 'Checkout' && a == 'Usage_promo':
value = 'promo_use';
break;
//*** RETURN ==> promoCode_success
case c == 'Ecommerce' && a == 'Ajout code promo succes':
value = 'promoCode_success';
break;
//*** RETURN ==> promoCode_failure
case c == 'Ecommerce' && a == 'Ajout code promo echec':
value = 'promoCode_failure';
break;
//*** RETURN ==> validate_paymentMethod
case c == 'Ecommerce' && a == 'Validation mode paiement':
value = 'validate_paymentMethod';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['funnel_type'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Formulaire::Contact
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
value = 'Formulaire::Contact';
break;
//*** RETURN ==> Formulaire::Pieces detachées
case c == 'Interactions utilisateurs' && a == 'Validation formulaire' && l =='Pièces détachées toutes marques':
value = 'Formulaire::Pieces detachées';
break;
//*** RETURN ==> Newsletter::Inscription
case c == 'Footer' && a == 'Inscription Newsletter':
value = 'Newsletter::Inscription';
break;
//*** RETURN ==> Signup
case c == 'Compte' && a.includes('Inscription nouveau PART'):
case c == 'Compte' && a.includes('Inscription nouveau PRO'):
case c == 'Compte' && a == 'Création de compte en ligne':
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Compte' && a == 'Client Optin':
value = 'Signup';
break;
//*** RETURN ==> Checkout
case c == 'Checkout':
value = 'Checkout';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['step_name'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Formulaire::Validation
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire' && l == 'Pièces détachées toutes marques':
case c == 'Footer' && a == 'Inscription Newsletter' && l == 'Succès':
case c == 'Footer' && a == 'Inscription Newsletter' && l == 'Erreur':
value = 'Formulaire::Validation';
break;
//*** RETURN ==> Signup::Optin
case c == 'Compte' && a == 'Client Optin':
value = 'Signup::Optin';
break;
//*** RETURN ==> Signup::{{label}}
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Association de compte email':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Activation SMS':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Inscription par facture':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Validation mot de passe':
value = 'Signup::'+l;
break;
//*** RETURN ==> Signup::{{action}}
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Erreur':
case c == 'Compte' && a == 'Création de compte en ligne' && l =='Inscription par email':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
case c == 'Compte' && a == 'Inscription nouveau PART - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PRO - Entrée':
case c == 'Compte' && a.includes('Inscription nouveau PART - Etape'):
case c == 'Compte' && a.includes('Inscription nouveau PRO - Etape'):
value = 'Signup::'+a;
break;
//*** RETURN ==> Checkout::{{action}}
case c == 'Checkout':
value = 'Checkout::'+a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['validation_status'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case l == 'Envoyé':
case l == 'Succès':
case l == 'Erreur':
value = l;
break;
//*** RETURN ==> Envoyé
case l.includes('envoyé'):
value = 'Envoyé';
break;
//*** RETURN ==> Succès
case l.includes('succès'):
value = 'Succès';
break;
//*** RETURN ==> Erreur
case l.includes('erreur'):
case c == 'Checkout' && a.includes('erreur'):
value = 'Erreur';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['search_term'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
value = l;
break;
//*** RETURN ==> {{action}}
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche agence' && a == 'Géolocalisation':
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['search_method'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{action}}
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche agence' && a == 'Géolocalisation':
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['search_field'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Recherche machine
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
value = 'Recherche machine';
break;
//*** RETURN ==> {{category}}
case c == 'Recherche produits' && a == 'Mot suggéré':
case c == 'Recherche produits' && a == 'Barre de recherche':
case c == 'Recherche produits' && a == 'Auto-suggestion':
case c == 'Recherche produits' && a == 'Historique':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche agence' && a == 'Géolocalisation':
value = c;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['filter'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Filtres':
case c == 'Recherche catalogue' && a.includes('Filtres'):
value = l;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['sharing_method'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{action}}
case c == 'Interactions utilisateurs' && a.includes('Partage'):
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['content_type'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Produit
case c == 'Interactions utilisateurs' && a.includes('Partager ::'):
value = 'Produit';
break;
//*** RETURN ==> Wishlist
case c == 'Interactions utilisateurs' && a == 'Partage Liste':
value = 'Wishlist';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['item_id'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Interactions utilisateurs' && a.includes('Partager ::'):
value = l;
break;
//*** RETURN ==> Wishlist
case c == 'Interactions utilisateurs' && a == 'Partage Liste':
value = 'Wishlist';
break;
//*** RETURN ==> expanded_offer
case c == 'Offre elargie':
value = 'expanded_offer';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['agency_name'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Recherche disponibilité' && a == 'Choix d\'agence ':
case c == 'Recherche disponibilité' && a == 'Choix d\'agence':
case c == 'Recherche agence' && a == 'Choix d\'agence':
case c == 'Recherche agence' && a.includes('Choix d\'agence sur'):
case c == 'Recherche agence' && a.includes(' | Agence'):
case c == 'Recherche agence' && a == 'Contact agence':
case c == 'Recherche agence' && a == 'Fiche agence':
case c == 'Recherche agence' && a == 'Ajout favori':
case c == 'Recherche agence' && a == 'Page agence | cette agence dispose d\'un showroom':
case c == 'Recherche agence' && a.includes('Prendre un rdv sur la'):
case c == 'Recherche agence' && a.includes('Page') && a.includes(' | Bloc Mktg'):
case c == 'Recherche agence | Popin' && a == 'Changement d\'agence':
value = l;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['file_name'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> {{label}}
case c == 'Interactions utilisateurs' && a.includes('Téléchargement'):
value = l;
break;
//*** RETURN ==> Facture
case c == 'Compte' && a == 'Télécharger facture':
value = 'Facture';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['method'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> SMS
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Activation SMS':
value = 'SMS';
break;
//*** RETURN ==> Facture
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'invoice registration':
value = 'Facture';
break;
//*** RETURN ==> Signup::PRO
case c == 'Compte' && a == 'Inscription nouveau PRO - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
case c == 'Compte' && a.includes('Inscription nouveau PRO - Etape '):
case c == 'Compte' && a == 'Client Optin' && l == 'PRO':
value = 'Signup::PRO';
break;
//*** RETURN ==> Signup::PART
case c == 'Compte' && a == 'Inscription nouveau PART - Entrée':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a.includes('Inscription nouveau PART - Etape '):
case c == 'Compte' && a == 'Client Optin' && l == 'PART':
value = 'Signup::PART';
break;
//*** RETURN ==> Email
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Creer son compte':
case c == 'Compte' && a == 'Connexion' && l == 'Succès':
case c == 'Compte' && a == 'Connexion' && l == 'Erreur':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Succès':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Erreur':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Association de compte email':
value = 'Email';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['kpi_strategy'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
var u = ''+tc_vars['user_profile']+'' || '';
switch(true) {
//*** RETURN ==> Generic
case c == 'Services':
case c == 'Page simple':
case c == 'Header' && a == 'Navigation':
case c == 'Interactions utilisateurs' && a == 'Clic sur bloc service':
case c == 'Interactions utilisateurs' && a == 'Clic accès rapide':
case c == 'Interactions utilisateurs' && a == 'Contacter mon agence':
case c == 'Interactions utilisateurs' && a == 'Clic bannière':
case c == 'Recherche catalogue' && a.includes('Filtres'):
case c == 'Compte' && a == 'Clic lien externe':
case c == 'Compte' && a == 'Client Optin':
case c == 'Checkout' && a == 'Chargement du fichier':
case c == 'Checkout' && a == 'Champs complété':
case c == 'Checkout' && a == 'Champs en erreur':
case c == 'Ecommerce' && a == 'Impression listes produits':
value = 'Generic';
break;
//*** RETURN ==> Reach
case c == 'Header' && a == 'MegaMenu':
case c == 'Marketing' && a.includes('bannière'):
case c == 'Marketing' && a.includes('encart promotionnel'):
case c == 'Filtres' && u == 'VA':
case c == 'Recherche produits' && a == 'Scan code barre':
case c == 'Recherche produits' && u == 'VA':
case c == 'Recherche catalogue' && u == 'VA':
case c == 'Recherche marque' && u == 'VA':
case c == 'Recherche agence' && u == 'VA':
case c == 'Recherche disponibilité' && u == 'VA':
value = 'Reach';
break;
//*** RETURN ==> Activation
case c == 'Footer' && a == 'Inscription Newsletter':
case c == 'Interactions utilisateurs' && a == 'Disponibilité à proximité' && u == 'VAR':
case c == 'Interactions utilisateurs' && a.includes('Téléchargement::') && u == 'VAR':
case c == 'Compte' && a == 'Inscription nouveau PART - Validation':
case c == 'Compte' && a == 'Inscription nouveau PRO - Validation':
case c == 'Compte' && a == 'Création de compte en ligne':
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VAR':
case c == 'Ecommerce' && a.includes('Ajout') && u == 'VA':
case c == 'Ecommerce' && a.includes('Ajout') && u == 'VAR':
case c == 'Ecommerce' && a == 'Enlever quantité' && u == 'VA':
case c == 'Ecommerce' && a == 'Enlever quantité' && u == 'VAR':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VA':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VAR':
case c == 'Ecommerce' && a == 'Créer une demande d\'achat' && u == 'VA':
case c == 'Ecommerce' && a == 'Créer une demande d\'achat' && u == 'VAR':
case c == 'Recherche agence' && u == 'VA':
case c == 'Recherche agence' && u == 'VAR':
case c == 'Rattachement Agence VA' && u == 'VAR':
value = 'Activation';
break;
//*** RETURN ==> Engagement
case c == 'Edito':
case c == 'Interactions utilisateurs' && a == 'Aperçu':
case c == 'Interactions utilisateurs' && a == 'Video':
case c == 'Interactions utilisateurs' && a == 'Téléchargement':
case c == 'Interactions utilisateurs' && a == 'Téléchargement Page Conseil':
case c == 'Interactions utilisateurs' && a == 'Fiche produit':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Partage Liste':
case c == 'Interactions utilisateurs' && a == 'Clic code barre':
case c == 'Interactions utilisateurs' && a == 'Clic page produit':
case c == 'Configuration des prix':
case c == 'Gestion des tarifs':
case c == 'Footer' && a == 'Clic footer':
case c == 'Footer' && a == 'Réseaux sociaux':
case c == 'Filtres' && u == 'VI':
case c == 'Filtres' && u == 'VAR':
case c == 'Marketing' && a == 'Clic univers':
case c == 'Marketing' && a == 'Clic Frise Marque':
case c == 'Ecommerce' && a == 'Clic produit':
case c == 'Ecommerce' && a == 'Clic Univers':
case c == 'Ecommerce' && a == 'Clic ensemble':
case c == 'Ecommerce' && a == 'Voir les ensembles avec ce produit':
case c == 'Ecommerce' && a == 'Valider mon devis':
case c == 'Ecommerce' && a == 'Demande d\'information':
case c == 'Ecommerce' && a == 'Relancer une demande d\'achat - popin':
case c == 'Ecommerce' && a == 'Confirmer l\'annulation de demande d\'achat':
case c == 'Ecommerce' && a.includes(' - demande d\'achat'):
case c == 'Ecommerce' && a.includes('demande d\'achat') && a.includes('POR'):
case c == 'Recherche produits' && a == 'Historique' && u == 'VI':
case c == 'Recherche produits' && a == 'Historique' && u == 'VAR':
case c == 'Recherche produits' && a == 'Pagination' && u == 'VI':
case c == 'Recherche produits' && a == 'Pagination' && u == 'VAR':
case c == 'Recherche catalogue' && a == 'Pagination' && u == 'VI':
case c == 'Recherche catalogue' && a == 'Pagination' && u == 'VAR':
case c == 'Recherche marque' && a == 'Pagination' &&u == 'VI':
case c == 'Recherche marque' && a == 'Pagination' && u == 'VAR':
case c == 'Recherche disponibilité' && u == 'VI':
case c == 'Recherche disponibilité' && u == 'VAR':
case c == 'Recherche agence | Popin':
case c == 'Rattachement Agence VA' && u == 'VI':
case c == 'Compte' && a == 'Exporter dans un devis Tolteck':
case c == 'Compte' && a == 'Connexion':
case c == 'Compte' && a == 'Télécharger facture':
case c == 'Mon Compte' && a == 'Accéder au détail liste':
case c == 'Mon Compte' && a == 'Dematerialisation de facture':
case c == 'Mon compte' && a == 'Accéder au détail liste':
case c == 'Mon compte' && a == 'Dematerialisation de facture':
value = 'Engagement';
break;
//*** RETURN ==> Business specific
case c == 'Engagement':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire':
case c == 'Interactions utilisateurs' && a == 'Ajouter à mon parc':
case c == 'Interactions utilisateurs' && a == 'Affichage du mini panier':
case c == 'Interactions utilisateurs' && a == 'Disponibilité à proximité' && u == 'VI':
case c == 'Interactions utilisateurs' && a.includes('Téléchargement::') && u == 'VI':
case c == 'Compte' && a == 'Désinscription':
case c == 'Compte' && a == 'Ajout code promo':
case c == 'Compte' && a == 'Mon Parc':
case c == 'Compte' && a.includes('Valider ma demande de Facilité de paiement'):
case c == 'Mon panier':
case c == 'Checkout':
case c == 'Ecommerce' && a == 'Selection prix quantitatif':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VI':
case c == 'Ecommerce' && a == 'Impression produit revetement':
case c == 'Ecommerce' && a == 'Immersif::Ajout au panier':
case c == 'Ecommerce' && a == 'RDV Showroom::Bandeau':
case c == 'Ecommerce' && a == 'Mettre de côté':
case c == 'Ecommerce' && a == 'Ajouter à ma liste':
case c == 'Ecommerce' && a == 'Créer une nouvelle liste':
case c == 'Ecommerce' && a == 'Supprimer une liste':
case c == 'Ecommerce' && a == 'Vider mon panier':
case c == 'Ecommerce' && a == 'Alerte':
case c == 'Ecommerce' && a == 'Mettre de côté':
case c == 'Ecommerce' && a == 'Supprimer':
case c == 'Ecommerce' && a == 'Validation panier':
case c == 'Ecommerce' && a.includes('Relancer une demande d\'achat'):
case c == 'Ecommerce' && a.includes('Ajout') && u == 'VI':
case c == 'Ecommerce' && a == 'Enlever quantité' && u == 'VI':
case c == 'Ecommerce' && a == 'Voir gamme' && u == 'VI':
case c == 'Ecommerce' && a == 'Créer une demande d\'achat' && u == 'VI':
case c == 'Recherche agence' && u == 'VI':
value = 'Business specific';
break;
//*** RETURN ==> Retention
case c == 'Espace Fidélité':
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
case c == 'Compte' && a == 'Espace fidélité' && l == 'Découvrir':
value = 'Retention';
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_type'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Interactions utilisateurs
case c == 'Recherche disponibilité' && a == 'Choix d\'agence':
case c == 'Engagement':
case c == 'Services' && a == 'Clic lien externe':
case c == 'Services' && a == 'Clic lien interne':
value = 'Interactions utilisateurs';
break;
//*** RETURN ==> Compte
case c == 'Gestion des tarifs':
case c == 'Recherche produit' && a == 'Historique':
value = 'Compte';
break;
//*** RETURN ==> Navigation
// c
case c == 'Edito':
case c == 'Footer':
case c == 'Filtres':
case c == 'Services':
case c == 'Page simple':
case c == 'Configuration des prix':
case c == 'Header' && a == 'Navigation':
case c == 'Header' && a == 'MegaMenu':
value = 'Navigation';
break;
//*** RETURN ==> Ecommerce
case c == 'Mon panier':
case c == 'Checkout':
value = 'Ecommerce';
break;
//*** RETURN ==> Recherche agence
case c == 'Rattachement Agence VA':
value = 'Recherche agence';
break;
//*** RETURN ==> {{category}}
case c == 'Ecommerce':
case c == 'Marketing':
case c == 'Formulaire':
case c == 'Recherche produits':
case c == 'Recherche catalogue':
case c == 'Recherche marque':
case c == 'Recherche disponibilité':
case c == 'Recherche agence':
case c == 'Recherche agence | Popin':
case c == 'Interactions utilisateurs':
case c == 'Compte':
case c == 'Espace Fidélité':
value = c;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_user_action'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Interactions utilisateurs
case c == 'Header':
value = 'Interactions utilisateurs';
break;
//*** RETURN ==> Inscription
case c == 'Compte' && a.includes('Inscription nouveau PART'):
case c == 'Compte' && a.includes('Inscription nouveau PRO'):
value = 'Inscription';
break;
//*** RETURN ==> {{action}}::{{label}}
case c == 'Espace Fidélité':
case c == 'Rattachement Agence VA' && a == 'Choix d\'agence':
case c == 'Recherche catalogue' && a.includes('Filtres'):
case c == 'Mon panier' && a == 'Navigation' && l == 'Modifier mon agence':
case c == 'Ecommerce' && a == 'Ajout au panier' && l.includes('Commande Express'):
case c == 'Ecommerce' && a == 'Ajout au panier' && l == 'Vues éclatées':
case c == 'Ecommerce' && a == 'Ajouter à ma liste':
case c == 'Ecommerce' && a == 'Accès - Ajout liste':
case c == 'Interactions utilisateurs' && a == 'Fiche produit':
case c == 'Interactions utilisateurs' && a == 'Clic onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Onglet Machines':
case c == 'Interactions utilisateurs' && a == 'Téléchargement':
case c == 'Interactions utilisateurs' && a == 'Validation formulaire' && l == 'Pièces détachées toutes marques':
case c == 'Engagement' && a == 'Quiz':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Validation mot de passe':
case c == 'Compte' && a == 'Mon Parc':
case c == 'Compte' && a == 'Ajout code promo':
case c == 'Services' && a == 'Clic lien externe':
value = a+'::'+l;
break;
//*** RETURN ==> {{category}}
case c == 'Configuration des prix':
value = c;
break;
//*** RETURN ==> {{label}}
case c == 'Compte' && a == 'Espace fidélité' && l == 'Découvrir':
case c == 'Compte' && a == 'Désinscription' && l == 'Se désinscrire':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Créer son compte':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Association de compte email':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par sms':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Activation SMS':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Inscription par facture':
value = l;
break;
//*** RETURN ==> {{action}}
case c == 'Interactions utilisateurs':
case c == 'Compte':
case c == 'Mon compte':
case c == 'Engagement':
case c == 'Ecommerce':
case c == 'Mon panier':
case c == 'Checkout':
case c == 'Marketing':
case c == 'Edito':
case c == 'Footer':
case c == 'Formulaire':
case c == 'Services':
case c == 'Recherche produits':
case c == 'Recherche catalogue':
case c == 'Recherche marque':
case c == 'Recherche disponibilité':
case c == 'Recherche agence':
case c == 'Filtres':
case c == 'Page simple':
case c == 'Gestion des tarifs':
case c == 'Compte' && a == 'Connexion':
case c == 'Compte' && a == 'Création de compte en ligne' && l == 'Erreur':
case c == 'Compte' && a == 'Inscription nouveau client':
case c == 'Compte' && a == 'Télécharger facture':
value = a;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['event_context'] = function(data) {
//data = data || tc_array_events;
var value = undefined;
var c = ''+data['category']+'' || '';
var a = ''+data['action']+'' || '';
var l = ''+data['label']+'' || '';
switch(true) {
//*** RETURN ==> Banner
case c == 'Marketing' && a.includes('bannière'):
case c == 'Interactions utilisateurs' && a.includes('bannière'):
value = 'Banner';
break;
//*** RETURN ==> Forms
case c == 'Formulaire' && a == 'Envoi formulaire de contact':
value = 'Forms';
break;
//*** RETURN ==> My account
case c == 'Compte':
value = 'My account';
break;
//*** RETURN ==> Cart
case c == 'Mon panier':
value = 'Cart';
break;
//*** RETURN ==> Checkout
case c == 'Checkout':
value = 'Checkout';
break;
//*** RETURN ==> Quiz
case c == 'Engagement' && a.includes('Quiz'):
value = 'Quiz';
break;
//*** RETURN ==> Soluplus
case c == 'Compte' && a.includes('Soluplus'):
case c == 'Ecommerce' && a.includes('Soluplus'):
value = 'Soluplus';
break;
//*** RETURN ==> {{category}}
// c
case c == 'Header':
case c == 'Edito':
case c == 'Footer':
value = c;
break;
}
return value;
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['items_products'] = function(data) {
var p,
value;
// specific cases for products arrays :
switch(true) {
// Mise à jour du 30/06/2026 suite à la suppression de la boucle produit, on va récupérer aussi dans la boucle item au lieu de produit//
case Array.isArray(data['items']):
var arr = data['items'];
p = [];
for (var i=0; i<arr.length; i++) {
p.push({
product_id: arr[i].item_id,
product_name: arr[i].item_name,
list_name: arr[i].item_list_name,
product_brand: arr[i].item_brand,
product_trademark: arr[i].item_trademark,
product_category1: arr[i].item_category1,
product_category2: arr[i].item_category2,
product_category3: arr[i].item_category3,
product_category4: arr[i].item_category4,
product_category5: arr[i].item_category5,
product_price: arr[i].price,
product_quantity: arr[i].quantity,
product_position: arr[i].index,
product_instock: arr[i].item_instock
});
}
break;      
case Array.isArray(data['split_products']):
var arr = data['split_products'];
p = [];
for (var i=0; i<arr.length; i++) {
p = p.concat(arr[i]['order_products']);
}
break;
case Array.isArray(data['products']):
p = data['products'];
break;
case Array.isArray(data['list_products']):;
p = data['list_products'];
break;
case Array.isArray(data['products_added']):
p = Helper_arrayFilter(data['products_added']); 
break;
case 'object' == typeof data['products']:
p = data['products']
break;
case 'object' == typeof data['list_products']:
p = Helper_arrayFilter(data['list_products']['products'])
break;
case 'object' == typeof tc_vars['order_products']:
p = Helper_arrayFilter(tc_vars['order_products']);
break;
case Array.isArray(tc_vars['list_products']):
p = tc_vars['list_products'];
break;
case '' != data['product_id']:
case '' != data['product_name']:
//case '' != data['product_trademark']:
//case '' != data['product_variant']:
//case '' != data['product_category1']:
//case '' != data['product_category2']:
//case '' != data['product_category3']:
//case '' != data['product_category4']:
//case '' != data['product_category5']:
//case '' != data['product_quantity']:
//case '' != data['product_position']:
//case '' != data['product_price']:
p = {};
p.product_id = data['product_id'];
p.product_name = data['product_name'];
p.product_brand = data['product_trademark'];
p.product_variant = data['product_variant'];
p.product_category1 = data['product_category1'];
p.product_category2 = data['product_category2'];
p.product_category3 = data['product_category3'];
p.product_category4 = data['product_category4'];
p.product_category5 = data['product_category5'];
p.product_quantity = data['product_quantity'];
p.product_position = data['product_position'];
p.product_price = data['product_price'];      
p.product_instock = data['product_instock'];
if(window.stock_suivi){
p.stock_suivi = window.stock_suivi};
break;
}
switch(true) {
case Array.isArray(p):
value = [];
for (var i=0; i<p.length; i++) {
var item = {};
item.item_id = ''+(p[i].product_id || p[i].id)+'';
item.item_name = p[i].product_name || p[i].name;
item.item_list_name = p[i].list_name;
item.item_list_id = undefined;
item.item_brand = p[i].product_brand || p[i].brand || p[i].product_trademark;
item.item_category = p[i].product_category1;
item.item_category2 = p[i].product_category2;
item.item_category3 = p[i].product_category3;
item.item_category4 = p[i].product_category4;
item.item_category5 = p[i].product_category5;
item.price = parseFloat( (''+(p[i].product_price || p[i].price)+'').replace(',', '.') );
item.quantity = p[i].product_quantity || p[i].quantity || 1;
item.index = p[i].product_position;
item.product_instock = p[i].product_instock;
if(window.stock_suivi){
item.stock_suivi = window.stock_suivi};
//item.__promo__ = p[i].product_promo; // custom product scoped dimensions currently unavailable in GA4
//item.__ean__ = p[i].product_ean.toString(); // custom product scoped dimensions currently unavailable in GA4
//item.__instock__ = p[i].product_instock; // custom product scoped dimensions currently unavailable in GA4
value.push(item);
}
break;
case 'object' == typeof p:
value = [];
var item = {};
item.item_id = ''+(p.product_id || p.id)+'';
item.item_name = p.product_name || p.name;
item.item_list_name = p.list_name;
item.item_list_id = undefined;
item.item_brand = p.product_brand || p.brand;
item.item_category = p.product_category1;
item.item_category2 = p.product_category2;
item.item_category3 = p.product_category3;
item.item_category4 = p.product_category4;
item.item_category5 = p.product_category5;
item.price = parseFloat( (''+(p.product_price || p.price)+'').replace(',', '.') );
item.quantity = p.product_quantity || p.quantity || 1;
item.index = p.product_position;
item.product_instock = p.product_instock;
if(window.stock_suivi){
item.stock_suivi = window.stock_suivi};
//item.__promo__ = p[i].product_promo; // custom product scoped dimensions currently unavailable in GA4
//item.__ean__ = p[i].product_ean.toString(); // custom product scoped dimensions currently unavailable in GA4
//item.__instock__ = p[i].product_instock; // custom product scoped dimensions currently unavailable in GA4
value.push(item);
break;
}
return value
}
window['GA4_CONVERTER'] = window['GA4_CONVERTER'] || {};
window['GA4_CONVERTER']['items_promotions'] = function(data) {
var p,
value;
// specific cases for promotions arrays :
switch(true) {
case '' != data['commercial_name']:
case '' != data['commercial_creative']:
case '' != data['commercial_type']:
case '' != data['commercial_position']:
p = {};
p.commercial_name = data['commercial_name'];
p.commercial_creative = data['commercial_creative'];
p.commercial_position = data['commercial_position'];
break;
case Array.isArray(tc_vars['commercials_list']):
p = tc_vars['commercials_list'];
break;
case 'object' == typeof tc_vars['commercials_list']:
p = tc_vars['commercials_list'];
break;
}
switch(true) {
case Array.isArray(p):
value = [];
for (var i=0; i<p.length; i++) {
var item = {};
item.promotion_id = ''+p[i].commercial_name+'';
item.promotion_name = p[i].commercial_name;
item.creation_name = p[i].commercial_creative;
item.creation_slot = p[i].commercial_position;
//item.location_id = p[i].???;
item.index = p[i].commercial_position;
value.push(item);
}
break;
case 'object' == typeof p:
value = [];
var item = {};
item.promotion_id = ''+p.commercial_name+'';
item.promotion_name = p.commercial_name;
item.creation_name = p.commercial_creative;
item.creation_slot = p.commercial_position;
//item.location_id = p.???;
item.index = p.commercial_position;
value.push(item);
break;
}
return value
}
}
if(tC.dedup.ValidRules('146')){
tC.launchTag(146, 'GA4 - 1.config', 26, 5666, 10, 18);
// *** GA4 - 1.config ***
if((document.cookie.split('TC_PRIVACY=')[1]?.[0]==='0')&&(document.cookie.includes('TC_PRIVACY_CENTER='))){
tC.scriptElt1 = document.createElement("script");
tC.scriptElt1.id = "tc_script_138_1";
tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id="+tC.internalvars.ga4_stream_id;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
(function () {
var rawCenter = document.cookie.split('TC_PRIVACY_CENTER=')[1]?.split(';')[0] || "";
var accepted = decodeURIComponent(rawCenter).split(','); // ex: ["11","12","13"]
var update = {};
// 11 = Cookies de mesure d’audience
if (accepted.includes("11")) {
update.analytics_storage = 'granted';
}
// 12 = Cookies de ciblage marketing
if (accepted.includes("12")) {
update.ad_storage = 'granted';
update.ad_user_data = 'granted';
update.ad_personalization = 'granted';
}
// 13 = Cookies de personnalisation
if (accepted.includes("13")) {
update.personalization_storage = 'granted';
update.functionality_storage = 'granted';
}
// On envoie l’update seulement si on a au moins une clé
if (Object.keys(update).length) {
gtag('consent', 'update', update);
}
})();
gtag('js', new Date());
var cfg = {};
cfg['send_page_view'] = false; // important
cfg['cookie_expires'] = 34190000;
cfg['allow_google_signals'] = false;
cfg['allow_ad_personalization_signals'] = false;
var up = tC.internalvars.ga4_user_properties;
if (window.location.hostname.includes("punchout")) {
if(tc_vars["client_name"]!== undefined){
up.client_name = tc_vars["client_name"]  
}
}        
gtag('set', 'user_properties', up);
gtag('config', tC.internalvars.ga4_stream_id, cfg);
}
}
if(tC.dedup.ValidRules('148')){
tC.launchTag(148, 'GA4 - 2.page_view', 26, 5666, 10, 18);
// *** GA4 - 2.page_view ***
if((document.cookie.split('TC_PRIVACY=')[1]?.[0]==='0')&&(document.cookie.includes('TC_PRIVACY_CENTER='))) {
/* 
try{
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
gtag('consent','update',{
ad_storage:'granted',
analytics_storage:'granted',
ad_user_data:'granted',
ad_personalization:'granted',
functionality_storage:'granted',
personalization_storage:'granted',
security_storage:'granted'
});
gtag('set','url_passthrough', true);
gtag('js', new Date());
var cfg = {
send_page_view: false,
cookie_expires: 34190000,
allow_ad_personalization_signals: false,
allow_google_signals: false
// (Consent piloté par TagCommander ailleurs)
};
// (optionnel) si tu veux garder les user properties ici
try { gtag('set', 'user_properties', tC.internalvars.ga4_user_properties || {}); } catch(e){}
gtag('config', tC.internalvars.ga4_stream_id, cfg);
} catch(e){}
*/
var event_name = 'page_view';
var ep = {};
ep.event_tag = 'GA4 - 2.page_view / page_view'; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
ep.segment_searchVisit = sessionStorage.getItem('userSearchSegment');
// referrer : tc_vars.page_referrer (si non vide) sinon document.referrer
ep.page_referrer = (tc_vars.page_referrer && tc_vars.page_referrer.trim()) || document.referrer;
// default event parameters (all pages)
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page); // ep is a clone of params_default
if(tc_array_events["page_url"]!== undefined){
ep.env_template=tc_array_events["env_template"];
ep.page_location=tc_array_events["page_url"];
ep.page_name=tc_array_events["page_name"];
ep.page_title=tc_array_events["page_name"];
}   
if (tc_array_events["env_template"] === "Tunnel de paiement - livraison" || tc_array_events["env_template"] === "Tunnel de paiement - paiement" || tc_array_events["env_template"] === "Tunnel de paiement - confirmation") {
var sp = tc_array_events["split_products"];
if (Array.isArray(sp)) {
ep.is_split = sp.length > 1 ? 1 : 0;
ep.split_count = sp.length;
ep.order_shipping_method = tc_array_events["order_shipping_method"] || "";
}
}
// DEBUG
/* if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (GA4 - 2.page_view)';
//debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}*/
// DEBUG
gtag('event', event_name, ep);
// ADDITIONNAL ECOMMERCE EVENT
switch(true) {
// view_item
/* case tc_vars['env_template'] == 'Fiche produit' :
event_name = 'view_item';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'GA4 - 2.page_view / view_item'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(tc_vars);
// DEBUG
if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (GA4 - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
// DEBUG
gtag('event', event_name, ec);
break;
*/  
// view_item_list
case tc_vars['list_products'].length:
event_name = 'view_item_list';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'GA4 - 2.page_view / view_item_list'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(tc_vars);
// DEBUG
/*  if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (GA4 - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}*/
// DEBUG
gtag('event', event_name, ec);
break;
// view_promotion // Cette ligne de code est mis en pause le 27/07/2026, remplacé par le tag Action Nextpulse event view promo & select promo qui prend le relai.
//event_name = 'view_promotion';
// var ec = JSON.parse(JSON.stringify(ep)); // clone
// ec.event_tag = 'GA4 - 2.page_view / view_promotion'; // debug server-side tracking
// ✅ Garde-fou: si GA4_CONVERTER ou sa méthode n'existe pas, on ne casse pas
//if (typeof window.GA4_CONVERTER === 'object' && typeof window.GA4_CONVERTER.items_promotions === 'function') {
// ec.items = GA4_CONVERTER.items_promotions(tc_vars);
//} else {
// ec.items = []; // fallback neutre
//ec._warn = 'GA4_CONVERTER.items_promotions indisponible';
//}
// DEBUG
/* if ('true' == 'true') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (GA4 - 2.page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}*/
// DEBUG
// gtag('event', event_name, ec);
// break;
}
}
}
if(tC.dedup.ValidRules('427')){
tC.launchTag(427, 'event container loaded dispatcher', 26, 5666, 10, 18);
// *** event container loaded dispatcher ***
(function() {
/**
* @name Event Router - Version Corrigée avec tC.event.trigger
* @description Utilise la méthode correcte tC.event.trigger() pour déclencher
* les événements internes de manière cohérente.
*/
try {
// --- 1. Définition des variables pour la logique de décision ---
var page_path = document.location.pathname || '';
// --- cl_page_view ---
tC.log("Router -> Déclenchement de l'événement 'cl_page_view'");
tC.event.cl_page_view(null, tc_array_events);
// --- cl_begin_checkout ---
if (page_path.includes('commande/livraison')) {
tC.log("Router -> Déclenchement de l'événement 'cl_begin_checkout'");
tC.event.cl_begin_checkout(null, tc_array_events);
}
} catch (e) {
tC.log("Erreur dans le router d'événements : " + e);
}
})();
}
if(tC.dedup.ValidRules('271')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(271, 'AutoTracking | Parcours search', 26, 5666, 10, 18);
// *** AutoTracking | Parcours search ***
try {
let styleElementApp = document.createElement("style");            
// Ajoute la règle CSS
styleElementApp.innerHTML = ".sg-smart-banner { display: none !important; }";
// Insère l'élément <style> dans le <head>
document.head.appendChild(styleElementApp);
} catch (e) {}
(function clearOldActions() {
const now = Date.now();
const twentyFourHours = 24 * 60 * 60 * 1000;
const actions = getUserActions();
if (actions.length > 0) {
const firstActionTimestamp = actions[0].timestamp; // Timestamp de la première action
if (now - firstActionTimestamp > twentyFourHours) {
sessionStorage.removeItem('userActions');
sessionStorage.removeItem('userSegment');
tC.log("Actions effacées au chargement de la page : plus de 24 heures depuis le premier 'search'.");
}
}
})();
function getUserActions() {
const actions = sessionStorage.getItem('userActions');
return actions ? JSON.parse(actions) : [];
}
function updateUserSegment(actions) {
const actionLabels = {
search: "search",
view_pdp: "PDP",
view_pdp_dispo: "PDP dispo",
add_to_cart: "Ajt panier",
checkout: "Checkout",
purchase: "Purchase"
};
// Générer le segment sous forme de chaîne
const segment = actions.map(action => actionLabels[action.action]).join(" > ");
// Stocker le segment dans un sessionStorage parallèle
sessionStorage.setItem('userSegment', segment || "Aucune action");
}
function updateUserSearchSegment(actions) {
const hasSearch = actions.some(action => action.action === "search");
sessionStorage.setItem('userSearchSegment', hasSearch ? "search effectué" : "aucune recherche");
}
function saveUserAction(action) {
if (!action) return;
let actions = getUserActions();
const actionOrder = ['search', 'view_pdp', 'view_pdp_dispo', 'add_to_cart', 'checkout', 'purchase'];
// Nettoyer les actions anciennes (plus de 24 heures)
const now = Date.now();
const twentyFourHours = 24 * 60 * 60 * 1000;
if (actions.length > 0) {
const firstActionTimestamp = actions[0].timestamp; // Timestamp de la première action
if (now - firstActionTimestamp > twentyFourHours) {
sessionStorage.removeItem('userActions');
sessionStorage.removeItem('userSegment');
sessionStorage.removeItem('userSearchSegment');
tC.log("Toutes les actions ont été effacées car plus de 24 heures se sont écoulées depuis le premier 'search'.");
actions = []; // Réinitialiser la liste des actions
}
}
// Vérifier si la première action est "search"
if (actions.length === 0 && action !== 'search') {
//tC.warn(`Action "${action}" ignorée car aucune recherche (search) n'a été effectuée en premier.`);
return;
}
// Vérifier si l'action est valide selon la séquence
const lastAction = actions.length > 0 ? actions[actions.length - 1].action : null;
const lastActionIndex = actionOrder.indexOf(lastAction);
const newActionIndex = actionOrder.indexOf(action);
if (newActionIndex > lastActionIndex) {
// Ajouter la nouvelle action
actions.push({ action: action, timestamp: now });
// Limiter à 20 actions pour éviter d'occuper trop d'espace
if (actions.length > 20) {
actions = actions.slice(actions.length - 20);
}
// Enregistrer de nouveau dans sessionStorage
sessionStorage.setItem('userActions', JSON.stringify(actions));
// Mettre à jour le segment utilisateur
updateUserSegment(actions);
updateUserSearchSegment(actions); // Mise à jour du segment "search"
// Vérifier la condition pour arrêter le MutationObserver
if (action === 'view_pdp' && hasSearchBeforeViewPDPWithin30Minutes(actions)) {
if (searchObserver) {
searchObserver.disconnect();
tC.log("MutationObserver arrêté : PDP atteinte dans les 30 minutes après une recherche.");
}
}
}
}
window.saveUserAction = saveUserAction;
function hasSearchBeforeViewPDPWithin30Minutes(actions) {
const now = Date.now();
const searchAction = actions.find(action => action.action === 'search');
const viewPDPAction = actions.find(action => action.action === 'view_pdp');
if (searchAction && viewPDPAction) {
const timeDifference = viewPDPAction.timestamp - searchAction.timestamp;
return timeDifference > 0 && timeDifference <= 5 * 60 * 1000; // 30 minutes en millisecondes
}
return false;
}
let searchObserver;
try {
// Déclaration du MutationObserver
searchObserver = new MutationObserver(() => {
// Sélectionner les éléments principaux pour le suivi des recherches
const form = document.getElementById('appSearchBar');
const searchInput = form?.querySelector('input');
const submitButton = form?.querySelector('[type="submit"]');
const suggestions = document.querySelectorAll('#appSearchBar a');
const seeAllResultsLink = document.querySelector('#appSearchBar [aria-label="Voir tous les produits"]');
// Écouteurs pour le formulaire
if (form && searchInput) {
form.addEventListener('keydown', function () {
const searchTerm = searchInput.value.trim();
if (searchTerm) saveUserAction('search');
});
}
// Écouteurs pour le bouton de recherche
if (submitButton && searchInput) {
submitButton.addEventListener('mousedown', function () {
const searchTerm = searchInput.value.trim();
if (searchTerm) saveUserAction('search');
});
}
// Écouteurs pour les clics sur les suggestions
suggestions.forEach((suggestion) => {
suggestion.addEventListener('mousedown', function () {
saveUserAction('search');
});
});
// Écouteur pour le lien "Voir tous les produits"
if (seeAllResultsLink && searchInput) {
seeAllResultsLink.addEventListener('mousedown', function () {
const searchTerm = searchInput.value.trim();
if (searchTerm) saveUserAction('search');
});
}
});
// Options du MutationObserver pour écouter les changements
searchObserver.observe(document.body, { attributes: true, childList: true, subtree: true });
} catch (e) {
tC.error('Erreur du MutationObserver pour le suivi des recherches :', e);
}
if (window.location.pathname.includes('/p/')) {
saveUserAction('view_pdp');
}
if (window.location.pathname.includes('/commande/livraison')) {
saveUserAction('checkout');
}
if (window.location.pathname.includes('/commande/confirmation')) {
// saveUserAction('purchase');
}
if (getUserActions().some(action => action.action === 'search')) {
tC.log('Une recherche a été effectuée au cours des dernières 24 heures.');
} else {
tC.log('Aucune recherche effectuée au cours des dernières 24 heures.');
}
updateUserSegment(getUserActions());
updateUserSearchSegment(getUserActions()); // Initialisation du segment "search"
}
}
if(tC.dedup.ValidRules('208')){
if(((document.location).toString().toLowerCase().indexOf(('www.dispart.fr').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if(tC.internalvars.performanceConsent == 'true'){
tC.launchTag(208, 'OneTag - GA4 config', 26, 5666, 10, 18);
// *** OneTag - GA4 config ***
tC.scriptElt1 = document.createElement("script");
tC.scriptElt1.src = "https://www.googletagmanager.com/gtag/js?id="+'G-3NLGMSW9D4';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.scriptElt1, null);
window.dataLayer = window.dataLayer || [];
var gtag = function(){dataLayer.push(arguments);};
gtag('js', new Date());
var cfg = {};
cfg['send_page_view'] = false; // important
cfg['cookie_expires'] = 34190000;
cfg['allow_ad_personalization_signals'] = false;
cfg['allow_google_signals'] = false;
gtag('config', 'G-3NLGMSW9D4', cfg);
}
}
}
}
if(tC.dedup.ValidRules('213')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(213, 'AutoTracking | Href inscription', 26, 5666, 10, 18);
// *** AutoTracking | Href inscription ***
if (window.location.pathname.startsWith('/inscription') || window.location.pathname.startsWith('/connexion')){
var pathName = window.location.pathname;
var currentReferer = document.referrer;
var refererPath = '';
if (currentReferer){
refererPath = new URL(currentReferer).pathname;
}
if (pathName.startsWith('/inscription') || pathName.startsWith('/connexion')){
// Vérifie si un referer est déjà stocké
var storedReferer = localStorage.getItem('storedReferer');
// Si aucun referer n'est stocké, et que le referer actuel ne commence pas par /connexion ou /inscription
if (!storedReferer && 
!refererPath.startsWith('/connexion') && 
!refererPath.startsWith('/inscription')){
localStorage.setItem('storedReferer', currentReferer);
tC.log("Referer stocké : " + currentReferer);
} else if (storedReferer){
tC.log("Referer précédemment stocké : " + storedReferer);
}
} else if (pathName.startsWith('/inscription')){
var storedReferer = localStorage.getItem('storedReferer');
if (storedReferer){
tC.log("Referer conservé : " + storedReferer);
}
}
}
}
}
}
if(tC.dedup.ValidRules('211')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(211, 'AutoTracking | ODC + Flag sans achat', 26, 5666, 10, 18);
// *** AutoTracking | ODC + Flag sans achat ***
var url_page_conf = window.location.pathname;
if (url_page_conf.includes("nouveau-client")){
var intervalCount = 0;
var maxIntervalCount = 20; // Adjust this value to control the maximum interval count
var validationInterval = setInterval(function(){
intervalCount++;
if (intervalCount > maxIntervalCount){
clearInterval(validationInterval);
}
var emailRelatedElements = document.querySelectorAll("[class*='svg-icon icon-email']"); // Sélectionne tous les éléments avec une classe contenant "svg-icon icon-email"
var blockElements = document.getElementsByClassName("block block-links-external");
var almostFinishedTitleElement = document.querySelector("h3.title");
var titleContainsKeywords = almostFinishedTitleElement && 
(almostFinishedTitleElement.textContent.includes("presque fini") || 
almostFinishedTitleElement.textContent.includes("Bienvenue"));
var foundCondition = blockElements.length > 0 || emailRelatedElements.length > 0 || 
titleContainsKeywords;
if (foundCondition){
var clientType = "";
if (url_page_conf.includes("pro")){
clientType = "PRO";
} else if (url_page_conf.includes("part")){
clientType = "PART";
} else {
clientType = "Inconnu";
}
try {
tc_events_global(this, 'Event', {
'category': 'Interactions utilisateurs',
'action': 'Validation ODC',
'label': clientType
});
localStorage.setItem('Nouveau_compte_client', 'sans_achat_web');
localStorage.setItem('Nouveau_compte_ODC', 'sans_achat_web');
localStorage.setItem('Nouveau_compte_clientV1', 'sans_achat_web');
localStorage.setItem('Nouveau_compte_clientV2', 'sans_achat_web');
} catch (e){
}
clearInterval(validationInterval);
}
}, 100); // Adjust the interval time (in milliseconds) as needed
}
}
}
}
if(tC.dedup.ValidRules('194')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(194, 'AutoTracking | RDV_agence & Prodloc', 26, 5666, 10, 18);
// *** AutoTracking | RDV_agence & Prodloc ***
window.addEventListener("mousedown", function (){
if((window.event.target.innerText==="Prendre rendez-vous")||(window.event.target.innerText==="JE PRENDS RENDEZ-VOUS")||(window.event.target.innerText==="Je prends RDV")||(window.event.target.innerText==="PRENDRE RDV EN SHOWROOM")){
try{
if (typeof (gtag) !== "undefined"){
var Tracking_GA = tC.internalvars.ga3_stream_id
tc_events_global(this,"Event",{"category":"Engagement","action":"RDV_Agence","label":window.event.target.innerText})
if(document.location.hostname==="www.pointp.fr"){
window.abtasty.send("event", { ec: "Action Tracking", ea: "RDV_agence", ev: 1 });
//Ajout de CS aussi
url_action = "/RDV_agence";
window._uxa.push(['trackPageview',  url_action ]);
}
if(document.location.hostname==="www.cedeo.fr"){
window.abtasty.send("event", { ec: "Action Tracking", ea: "RDV_agence", ev: 1 });
//Ajout de CS aussi
url_action = "/RDV_agence";
window._uxa.push(['trackPageview',  url_action ]);
}
}
}catch(e){
}
}
// Tracking prise RDV
if((window.event.target.innerText==="JE CRÉE MON PROJET")||(window.event.target.innerText==="Ouvrir le configurateur 3D")){
try{
window._uxa.push(['trackPageview',  'Config_3D' ]);    
}catch(e){
}
}
//fin tracking prise RDV
})
function trackProductLocationEvents() {  
try{
var loc_prod_loc = "";
var cpt_pdt_loc = 0; 
var cpt_pdt_loc_a = 0; 
var cpt_pdt_loc_b = 0; 
var cpt_pdt_loc_c = 0; 
var cpt_pdt_loc_d = 0; 
var cpt_pdt_loc_e = 0; 
var cpt_pdt_loc_f = 0; 
// Fonction pour gérer les mutations
function handleMutations(mutations) {
mutations.forEach(function (mutation) {
//cpt_pdt_loc résultat
try {
if (document.getElementsByClassName("product-locator")[0].querySelectorAll(".agency-info").length > 0 && cpt_pdt_loc === 0) {try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
if (typeof (gtag) !== "undefined"){
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_Recherche avec résultat","label":loc_prod_loc});
// window._uxa.push(['trackPageview',  "/Action_Prod_loc_Sélection_Recherche_avec_résultat" ]);
}else{
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_Recherche avec résultat","label":loc_prod_loc});
}  if(tc_vars["user_profile"]==="VA" && document.location.hostname === "www.pointp.fr" ){try{ABTastyStartTest(952622)}catch(e){}}
cpt_pdt_loc = cpt_pdt_loc +1;
}
} catch (e) {}
//cpt_pdt_loc sans résultat
try {
if (document.getElementById("modal-agencies-list").querySelector(".no-results").children.length>0 && cpt_pdt_loc_a === 0) 
{
try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
if (typeof (gtag) !== "undefined"){
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_Recherche sans résultat","label":loc_prod_loc});
window._uxa.push(['trackPageview',  "/Action_Prod_loc_Sélection_Recherche_sans_résultat" ]);
}else{
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_Recherche sans résultat","label":loc_prod_loc});
}
cpt_pdt_loc_a = cpt_pdt_loc_a +1;
}
} catch (e) {}  
try{if((document.getElementById("modal-agencies-list").querySelector(".no-results"))&&(cpt_pdt_loc_a===0))
{
try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
if (typeof (gtag) !== "undefined"){
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_Recherche sans résultat","label":loc_prod_loc});
}else{
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_Recherche sans résultat","label":loc_prod_loc});
}
cpt_pdt_loc_a = cpt_pdt_loc_a +1;
}}catch(e){}
});
}
var observer = new MutationObserver(handleMutations);
var config = { childList: true, subtree: true };
observer.observe(document.body, config);
window.addEventListener("mousedown", function ecoute_clic() { 
try{if((window.event.target.innerText === 'Sélectionner')&&(cpt_pdt_loc_b===0))
{
try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
if(window.fermeture_popin){  
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Fermeture","label":loc_prod_loc});
}
else{tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection_agence","label":loc_prod_loc});
}
cpt_pdt_loc_b = cpt_pdt_loc_b +1;
}}catch(e){};
try{if((window.event.target.className === 'glider')&&(cpt_pdt_loc_c===0))
{
try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Sélection dispo agence","label":loc_prod_loc});
cpt_pdt_loc_c = cpt_pdt_loc_c +1;
}}catch(e){};
try{if((window.event.target.innerText === 'Confirmer')&&(cpt_pdt_loc_d===0))
{
try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Confirmation de sélection agence","label":loc_prod_loc});
cpt_pdt_loc_d = cpt_pdt_loc_d +1;
}}catch(e){};
try{if((window.event.target.innerText === 'Voir plus')&&(cpt_pdt_loc_e===0))
{
try{loc_prod_loc = document.getElementsByClassName("js-form-item form-item js-form-type-textfield")[0].children[1].value}catch(e){}
tc_events_global(this,"Event",{"category":"Engagement","action":"Prod_loc_Voir plus","label":loc_prod_loc});
cpt_pdt_loc_e = cpt_pdt_loc_e +1;
}}catch(e){};
try{if((window.event.target.className === 'svg-icon icon-close')&&(cpt_pdt_loc_f===0))
{
cpt_pdt_loc = 0; 
cpt_pdt_loc_a = 0; 
cpt_pdt_loc_b = 0; 
cpt_pdt_loc_c = 0; 
cpt_pdt_loc_d = 0; 
cpt_pdt_loc_e = 0; 
cpt_pdt_loc_f = 0; 
window.fermeture_popin = "OK";
}}catch(e){};
})
}catch(e){}
}
}
}
}
if(tC.dedup.ValidRules('196')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(196, 'AutoTracking | Accès_solu+', 26, 5666, 10, 18);
// *** AutoTracking | Accès_solu+ ***
try{
window.addEventListener('mousedown', function(event) {
// On récupère l'élément <a> le plus proche contenant "/solup-redirect" dans son href
var anchor = event.target.closest('a[href*="/solup-redirect"]');
if (anchor) {
tc_events_global(this,'Event',{'category':'Engagement','action':'Accès SoluPlus','label':anchor.innerText})
}
});
}catch(e){}
try {
window.addEventListener('mousedown', function(event) {
var anchor = event.target.closest('a');
if (!anchor) return;
var anchorText = anchor.innerText.toLowerCase();
var anchorHref = anchor.getAttribute('href') || '';
var sameDomain = (anchor.hostname === window.location.hostname);
if (
(anchorText.includes('soluplus') ||
anchorText.includes('solu+') ||
anchorText.includes('solu +')) &&
(
sameDomain && 
/solu(\s|$|-|\+|plus)/i.test(anchorHref) // "solu" suivi d'un espace ou fin d'URL
)
) {
tc_events_global(this, 'Event', {
category: 'Engagement',
action: 'Accès page SoluPlus',
label: anchor.innerText
});
}
});
} catch (e) {}
}
}
}
if(tC.dedup.ValidRules('198')){
if(((document.location).toString().toLowerCase().indexOf(('www.asturienne.fr').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(198, 'AutoTracking | Clic Club Astu', 26, 5666, 10, 18);
// *** AutoTracking | Clic Club Astu ***
try{
nb_total_CTA = document.querySelectorAll("a[href*='asturienneleclub']").length;
for (t=0;t<nb_total_CTA;t++){
label_ga = "Club Astu";
element_ok = document.querySelectorAll("a[href*='asturienneleclub']")[t].parentElement;
element_enfant_ok = document.querySelectorAll("a[href*='asturienneleclub']")[t];
event_tagco = "try{tc_events_global(this,'Event',{'category':'Engagement','action':'Accès Club Asturienne','label':'"+label_ga+"'})}catch(e){};"
element_enfant_ok.setAttribute("onmousedown", event_tagco)
}
}catch(e){}
}
}
}
if(tC.dedup.ValidRules('202')){
if(((document.location).toString().toLowerCase().indexOf(('commande').toLowerCase()) == -1) || ((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if((document.location).toString().toLowerCase().indexOf(('pointp').toLowerCase()) != -1){
tC.launchTag(202, 'AutoTracking | clic lien header agence', 26, 5666, 10, 18);
// *** AutoTracking | clic lien header agence ***
var ajout_tracking_header_agence = setInterval(function(){
try{
if( document.getElementsByClassName("item-agency").length>0){
document.getElementsByClassName("item-agency")[0].setAttribute("onmousedown","try{tc_events_global(this,'Event',{'category':'Interactions utilisateurs','action':'Affichage header - infos agence','label':'Voir detail agence'})}catch(e){};")
document.getElementsByClassName('submit submit_outline go-to-agency')[0].setAttribute("onmousedown","try{tc_events_global(this,'Event',{'category':'Interactions utilisateurs','action':'Affichage header - clic lien agence','label':'Voir fiche agence'})}catch(e){}")
clearInterval(ajout_tracking_header_agence);}
}catch(e){}
}, 200);
}
}
}
}
if(tC.dedup.ValidRules('203')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if((document.location).toString().toLowerCase().indexOf(('/inscription/deja-client').toLowerCase()) != -1){
tC.launchTag(203, 'AutoTracking | Activation de compte avec erreur', 26, 5666, 10, 18);
// *** AutoTracking | Activation de compte avec erreur ***
if(document.getElementsByClassName("messages error").length>0){
try{
var etape_erreur = document.getElementsByClassName("tab-content active")[0].getElementsByClassName("subtitle")[0].innerText
var message_erreur = document.getElementsByClassName("tab-content active")[0].getElementsByClassName("messages error")[0].innerText.replaceAll("\n","")
try{tc_events_global(this,'Event',{'category':'Tunnel_Activation_erreur','action':'Etape:'+etape_erreur,'label':'Message:'+message_erreur})}catch(e){
}
}catch(e){
}
}
if(document.getElementsByClassName("account-name").length>3){
try{
var etape_erreur = document.getElementsByClassName("tab-content active")[0].getElementsByClassName("subtitle")[0].innerText
var message_erreur = "Reconnaissance multi_compte"
try{tc_events_global(this,'Event',{'category':'Tunnel_Activation_erreur','action':'Etape:'+etape_erreur,'label':'Message:'+message_erreur})}catch(e){
}
}catch(e){
}
}
}
}
}
}
if(tC.dedup.ValidRules('216')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(216, 'AutoTracking | Connexion', 26, 5666, 10, 18);
// *** AutoTracking | Connexion ***
var previousValue = sessionStorage.getItem('previous_user_profile');
var currentValue = tc_vars["user_profile"];
// Vérifie si l'utilisateur est devenu "VI"
if ((previousValue === 'VA' || previousValue === 'VAR') && currentValue === 'VI' ) {
sessionStorage.setItem('previous_user_profile', "VI"); 
previousValue="VI";
// Ajout du setTimeout ici
setTimeout(function() {
tc_events_global(this,"Event",{"category":"Compte","action":"Connexion","label":"Succès"});
}, 1000); // 2000 ms soit 2 secondes
}
// Si la valeur actuelle est 'VA' ou 'VAR', on active le suivi
if (currentValue === 'VA' || currentValue === 'VAR') {
sessionStorage.setItem('previous_user_profile', currentValue);
}
}
}
}
if(tC.dedup.ValidRules('217')){
if(((document.location).toString().toLowerCase().indexOf(('commande').toLowerCase()) == -1) || ((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(217, 'AutoTracking | Collecte de la source de trafic', 26, 5666, 10, 18);
// *** AutoTracking | Collecte de la source de trafic ***
var getTrafficSource = function(){
var referrer = document.referrer.toLowerCase();
var refHost = referrer ? new URL(referrer).hostname.toLowerCase() : '';
var urlParams = new URLSearchParams(window.location.search.toLowerCase());
var sourceInfo;
if (/facebook|pinterest|instagram|influenceur|meta/i.test(refHost) || /facebook|pinterest|instagram|influenceur|meta/i.test(referrer)){
sourceInfo = 'Social source: ' + refHost;
} else if (/messagerie|mail|mail/i.test(refHost) || /messagerie|mail|mail/i.test(referrer)){
sourceInfo = 'Email Campaign non trackée source';
} else if (urlParams.has('gclid') || urlParams.has('cpc') || /gclid=|cpc=/.test(referrer)){
sourceInfo = 'Google Ads source';
} else if (urlParams.has('utm_source') || /utm_source=/.test(referrer)){
sourceInfo = 'UTM Source: ' + (urlParams.get('utm_source') || new URL(referrer).searchParams.get('utm_source')) + 
', UTM Medium: ' + (urlParams.get('utm_medium') || new URL(referrer).searchParams.get('utm_medium'));
} else if (referrer){
if (/google|lilo|bing|qwant|duckduck|ecosia|yahoo/i.test(refHost)){
sourceInfo = 'SEO source: ' + refHost;
} else if (/pointp/i.test(refHost)){
sourceInfo = 'Point.P source';
} else {
sourceInfo = 'Referral Source: ' + refHost;
}
} else {
sourceInfo = 'Direct';
}
sessionStorage.setItem('trafficSource', sourceInfo);
return sourceInfo;
};
var getMicroTrafficSource = function(){
var referrer_micro = document.referrer.toLowerCase();
var refHost_micro = location.search.toLowerCase();
var sourceInfoMicro;
if (refHost_micro) {
sourceInfoMicro = refHost_micro;
} else if (referrer_micro) {
sourceInfoMicro = referrer_micro;
} else {
sourceInfoMicro = 'Direct';
}
var paramsToReplace = ['gclid', 'key', 'msclkid'];
paramsToReplace.forEach(function(param) {
var regex = new RegExp(param + '=[^&]*', 'i');
if (sourceInfoMicro.match(regex)) {
sourceInfoMicro = sourceInfoMicro.replace(regex, param);
}
});
sessionStorage.setItem('trafficSourceMicro', sourceInfoMicro);
};
if (!sessionStorage.getItem('hasVisitedBeforeNew')){
sessionStorage.setItem('hasVisitedBeforeNew', 'true');
var trafficSource = getTrafficSource();
//tC.log('La source de trafic est: ' + trafficSource);
}
if (!sessionStorage.getItem('hasVisitedBeforeMicroNew')){
sessionStorage.setItem('hasVisitedBeforeMicroNew', 'true');
var trafficSourceMicro = getMicroTrafficSource();
//tC.log('La source de trafic est: ' + trafficSource);
}
}
}
}
if(tC.dedup.ValidRules('220')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(220, 'AutoTracking | RDV POINTP', 26, 5666, 10, 18);
// *** AutoTracking | RDV POINTP ***
if(window.document.location.host.includes("pointp")){
try {
// Tracking pour les liens avec href contenant '/rdv.pointp.fr'
var hrefElements = document.querySelectorAll("a[href*='/rdv.pointp.fr']");
for (var i = 0; i < hrefElements.length; i++) {
var element = hrefElements[i];
var label_ga = element.innerText.substring(0, 20).toLowerCase();
var event_tagco = "try{tc_events_global(this,'Event',{'category':'Engagement','action':'Accès RDVShowroom','label':''})}catch(e){};try{window.abtasty.send('event', { ec: 'Action Tracking', ea: 'RDV_agence', ev: 1 })}catch(e){};";
element.setAttribute("onmousedown", event_tagco);
}
// Ajout du tracking pour les éléments <a> contenant des <use> avec xlink:href 'rdv'
var aElementsWithUse = document.querySelectorAll('a use[*|href*="rdv"]');
for (var j = 0; j < aElementsWithUse.length; j++) {
var parentLink = aElementsWithUse[j].closest('a');
if (parentLink) {
parentLink.setAttribute("onmousedown", event_tagco);
}
}
} catch (e) {
}
}
if(window.document.location.host.includes("cedeo")){
try {
// Tracking pour les liens avec href contenant '/rdv.pointp.fr'
var hrefElements = document.querySelectorAll("a[href*='/rdv.cedeo.fr']");
for (var i = 0; i < hrefElements.length; i++) {
var element = hrefElements[i];
var label_ga = element.innerText.substring(0, 20).toLowerCase();
var event_tagco = "try{tc_events_global(this,'Event',{'category':'Engagement','action':'Accès RDVShowroom','label':''})}catch(e){};try{window.abtasty.send('event', { ec: 'Action Tracking', ea: 'RDV_agence', ev: 1 })}catch(e){};";
element.setAttribute("onmousedown", event_tagco);
}
// Ajout du tracking pour les éléments <a> contenant des <use> avec xlink:href 'rdv'
var aElementsWithUse = document.querySelectorAll('a use[*|href*="rdv"]');
for (var j = 0; j < aElementsWithUse.length; j++) {
var parentLink = aElementsWithUse[j].closest('a');
if (parentLink) {
parentLink.setAttribute("onmousedown", event_tagco);
}
}
} catch (e) {
}
}
}
}
}
if(tC.dedup.ValidRules('229')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if((document.location).toString().toLowerCase().indexOf(('/commande/livraison').toLowerCase()) != -1){
tC.launchTag(229, 'AutoTracking | Chgt date checkout', 26, 5666, 10, 18);
// *** AutoTracking | Chgt date checkout ***
var changeText = function(){
// Retrieve the inner text of the child element
var textElement = document.querySelector('[class*="is-highlighted"] .text-h6.lg\\:tw-text-center.md\\:tw-text-left');
var labelText = textElement ? textElement.innerText : 'Default Label';
tc_events_global(this,"Event",{"category":"Checkout","action":"Changement_date","label":labelText});
var button_choisir = document.querySelector('.c-button.tw-flex.tw-justify-center.is-style-primary.is-size-md.is-fluid');
var eventSent = false; // Flag to track if the event has been sent
// Check if the button exists to avoid errors
if (button_choisir){
// Add the onmousedown event listener
button_choisir.onmousedown = function(){
if (!eventSent){
// Use labelText in the tc_events_global function
tc_events_global(this, "Event", {"category":"Checkout", "action":"Changement_date_validé", "label":labelText});
eventSent = true; // Set the flag to true after sending the event
}
};
}
};
var observer = new MutationObserver(function(mutations, obs){
if (document.querySelector('.tw-fixed.tw-inset-0.tw-z-2.tw-content-centered.tw-p-4')){
setTimeout(changeText, 100);
}
});
observer.observe(document, {
childList: true, // observe direct children
subtree: true, // and lower descendants too
characterData: true // observe text changes
});
}
}
}
}
if(tC.dedup.ValidRules('230')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(230, 'AutoTracking | Clic produit liste', 26, 5666, 10, 18);
// *** AutoTracking | Clic produit liste ***
if(document.location.pathname.startsWith("/mon-compte/mes-listes/")){
var elements = document.querySelectorAll('.line-items');
elements.forEach(function(element) {
element.addEventListener('mousedown', function(event) {
// Logique à exécuter lors du mousedown
if (typeof(window.abtasty) === 'object') {
if (typeof(window.abtasty.send) === 'function') {  
window.abtasty.send("event", { ec: "Action Tracking", ea: "Clic_produit_liste", ev: 1 });
}
}
});
});
}
}
}
}
if(tC.dedup.ValidRules('231')){
if(((document.location).toString().toLowerCase().indexOf(('/commande/livraison').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(231, 'AutoTracking | Infos checkout', 26, 5666, 10, 18);
// *** AutoTracking | Infos checkout ***
function processLabels() {
var badgeLabels = document.querySelectorAll('.tw-grid .c-badge__label');
var concatenatedResult = '';
window.pricesInEuros = null; // Global variable to hold numeric values in Euros
badgeLabels.forEach(function(label, index) {
// Navigating to the preceding sibling of the parent div of the label
var precedingDiv = label.parentElement.parentElement.previousElementSibling;
// Extracting the text from the specific child element
var precedingElementText = precedingDiv ? precedingDiv.querySelector('.text-h6').innerText : 'No preceding text found';
var labelContent = label.innerText;
var numericMatch = labelContent.match(/\d+,?\d*/);
var formattedLabelContent = numericMatch ? numericMatch[0].replace(',', '.') : labelContent;
if (labelContent.includes('€') && numericMatch) {
window.priceInEuros = parseFloat(numericMatch[0].replace(',', '.'));
}//else{window.priceInEuros= "GRATUIT"}
var totalAmount_basket = 0;
var productsAddedBask = tc_vars["order_products"];
productsAddedBask = Object.keys(productsAddedBask).map(function(key) {
return productsAddedBask[key];
});
for (var i = 0; i < productsAddedBask.length; i++) {
totalAmount_basket += (parseFloat(productsAddedBask [i].product_price)*parseFloat(productsAddedBask [i].product_quantity));
}
window.uniqueNumericValue = parseInt(totalAmount_basket);
// Formatting each pair as "Description: Price" using concatenation
concatenatedResult += precedingElementText + ": " + formattedLabelContent;
if (index < badgeLabels.length - 1) {
concatenatedResult += ' ; ';
}
});
var frais_de_transport = "";
if(window.priceInEuros!==undefined){
frais_de_transport = window.priceInEuros;
}else{frais_de_transport="GRATUIT"}
var montantPanierHT = Number(window.uniqueNumericValue) || 0;
var fraisLivraison = Number(frais_de_transport) || 0;
var ratioFraisLivraison = montantPanierHT > 0
? (fraisLivraison / montantPanierHT) * 100
: null;
var flagFraisLivraison;
if (ratioFraisLivraison === null) {
flagFraisLivraison = "non_calculable";
} else if (ratioFraisLivraison <= 20) {
flagFraisLivraison = "0-20%";
} else if (ratioFraisLivraison <= 40) {
flagFraisLivraison = "20-40%";
} else if (ratioFraisLivraison <= 60) {
flagFraisLivraison = "40-60%";
} else if (ratioFraisLivraison <= 80) {
flagFraisLivraison = "60-80%";
} else if (ratioFraisLivraison <= 100) {
flagFraisLivraison = "80-100%";
} else {
flagFraisLivraison = "+100%";
}
tc_events_global(this, "Event", {
"category": "Tracking_complementaire",
"action": "Checkout_option",
"label": concatenatedResult.trim(),
"frais_livraison": frais_de_transport,
"frais_livraison_metric": fraisLivraison,
"flag_frais_livraison": flagFraisLivraison,
"montant_panier": montantPanierHT,
"montant_panier_ttc": tc_vars["order_amount_ati"],
"delai_livraison": window.average_time_delivery,
"delai_livraison_metric": window.average_time_delivery
});
// tc_events_global(this, "Event", {"category": "Tracking_complementaire", "action":"Checkout_option", "label": concatenatedResult.trim(),"frais_livraison":frais_de_transport, "montant_panier":window.uniqueNumericValue, "delai_livraison":window.average_time_delivery});
setTimeout(function() {  
if(document.querySelector('[title="Contact"] .has-errors')){
tc_events_global(this, "Event", {"category": "Tracking_complementaire", "action":"Contact_erreur", "label":"champ_contact_erreur"}); 
}
}, 1000);
}
function checkForElement_out() {
var element = document.querySelector('.has-skeleton.tw-w-full.tw-grow.is-loaded');
if (element && window.average_time_delivery!==undefined) {
processLabels();
clearInterval(intervalId); // Arrêtez l'intervalle une fois trouvé
} 
}
var intervalId = setInterval(checkForElement_out, 500);
}
}
}
if(tC.dedup.ValidRules('232')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(232, 'AutoTracking | Rage clicks', 26, 5666, 10, 18);
// *** AutoTracking | Rage clicks ***
if (!window._rageClickDetectorInitialized){
window._rageClickDetectorInitialized = true;
// Fonction pour nettoyer l'innerText et retourner la className si l'innerText dépasse 10 caractères
var getElementDetails = function(element){
var text = element.innerText;
if (text){
// Suppression des espaces multiples et des sauts de ligne, puis vérification de la longueur
text = text.replace(/\s+/g, ' ').trim();
return text.length > 10 ? element.className : text;
}
return element.className;
};
// Fonction pour détecter les "rage clics"
var detectRageClicks = function(event){
this.lastClickTime = this.lastClickTime || 0;
this.clickCount = this.clickCount || 0;
var currentTime = Date.now();
if (currentTime - this.lastClickTime < 200){
// 200 ms entre les clics
this.clickCount++;
if (this.clickCount >= 4){
// 3 clics pour un "rage clic"
tc_events_global(this,"Event",{"category":"Ecoute client","action":"Rage click","label":getElementDetails(event.target)});
this.clickCount = 0;
}
} else {
this.clickCount = 1;
}
this.lastClickTime = currentTime;
};
// Ajouter l'écouteur d'événements sur l'objet window
window.addEventListener('mousedown', detectRageClicks);
}
}
}
if(tC.dedup.ValidRules('233')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if((document.location).toString().toLowerCase().indexOf(('/p/').toLowerCase()) != -1){
tC.launchTag(233, 'AutoTracking | Bug tps chgt PDP', 26, 5666, 10, 18);
// *** AutoTracking | Bug tps chgt PDP ***
window.tempsDebutObservation_PDP_CTA   = performance.now();
if(tc_vars["user_profile"]!=="VA"){
var elementParentProduit = document.querySelector('[class^="sg-instance-product"]');
if (elementParentProduit) {
// Programmer un timeout pour signaler l'absence de la classe "sg-product-refresh" après 5 secondes
setTimeout(function() {
if (!elementParentProduit.querySelector('.sg-product-refresh')) {
tC.log('Classe "sg-product-refresh" absente après 5 secondes');
tc_events_global(this,"Event",{"category":"Ecoute client","action":"Pb affichage","label":"Affichage_PDP_>5secondes"});
}
}, 5000);
// Programmer un autre timeout pour signaler l'absence de la classe "sg-product-refresh" après 10 secondes
setTimeout(function() {
if (!elementParentProduit.querySelector('.sg-product-refresh')) {
tC.log('Classe "sg-product-refresh" absente après 10 secondes');
tc_events_global(this,"Event",{"category":"Ecoute client","action":"Pb affichage","label":"Affichage_PDP_>10secondes"});
}
}, 10000);
} else {
tC.log('Élément parent produit non trouvé');
}
}
}
}
}
if(tC.dedup.ValidRules('238')){
if(((document.location).toString().toLowerCase().indexOf(('dispart.fr').toLowerCase()) == -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if((document.location).toString().toLowerCase().indexOf(('/commande/livraison').toLowerCase()) != -1){
tC.launchTag(238, 'AutoTracking | paiement', 26, 5666, 10, 18);
// *** AutoTracking | paiement ***
window.addEventListener("mousedown", function (){
if(window.event.target.innerText === "Régler ma commande"){
window.mode_paiement = document.querySelector(".is-checked").previousSibling.querySelector("span").innerText
try{tc_events_global(this,"Event",{"category":"Ecommerce","action":"Validation mode paiement","label":window.mode_paiement})}catch(e){
tC.log("Validation "+window.mode_paiement);
}
}
})
}
}
}
}
if(tC.dedup.ValidRules('239')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(239, 'AutoTracking | Achats', 26, 5666, 10, 18);
// *** AutoTracking | Achats ***
if (typeof(window.suivreAchatsAvecDistinction) !== "function") {
// Déclaration de la fonction suivreAchatsAvecDistinction sur l'objet global window
window.suivreAchatsAvecDistinction = function() {
// Condition pour vérifier le profil utilisateur (VI ou ATC) pour continuer le traitement
if (tc_vars["user_profile"] === "VI") {
// Vérifier que tc_vars["user_id"] et tc_vars["user_shop_attached_code"] sont définis et non vides
if (tc_vars["user_id"] && tc_vars["user_id"] !== null && tc_vars["user_id"] !== "" &&
tc_vars["user_shop_attached_code"] && tc_vars["user_shop_attached_code"] !== null && tc_vars["user_shop_attached_code"] !== "") {
// Générer la clé unique en concaténant les variables
var uniqueKey = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
var achat_init = "";
// Récupération des données précédentes d'achats web et agence à partir du localStorage avec la clé unique
var achatWebPrev = localStorage.getItem("Achat_web_V17_" + uniqueKey);
var achatAgencePrev = localStorage.getItem("Achat_agence_V17_" + uniqueKey);
var achatCumulWebPrev = localStorage.getItem("Achat_cumulWeb_V17_" + uniqueKey);
var ClientAchatPrev = localStorage.getItem("ClientAchat_V17_" + uniqueKey);
// Conversion en nombres si les valeurs existent, sinon initialisation à zéro
if (achatWebPrev !== null) {
achatWebPrev = parseFloat(achatWebPrev);
} else {
achatWebPrev = 0;
}
if (achatAgencePrev !== null) {
achatAgencePrev = parseFloat(achatAgencePrev);
} else {
achatAgencePrev = 0;
}
if (achatCumulWebPrev !== null) {
achatCumulWebPrev = parseFloat(achatCumulWebPrev);
} else {
achatCumulWebPrev = 0;
}
// Récupération des nouvelles valeurs
var achatWeb = parseFloat(tc_vars["user_stats_turnover"]);
var achatAgence = parseFloat(tc_vars["user_stats_sales"]);
var achatCumulWeb = parseFloat(tc_vars["user_stats_totalNumOrders"]);
var ClientAchat = tc_vars["user_shop_attached_name"];
// Initialisation à zéro si les valeurs sont NaN ou indéfinies
if (isNaN(achatWeb)) { achatWeb = 0; }
if (isNaN(achatAgence)) { achatAgence = 0; }
if (isNaN(achatCumulWeb)) { achatCumulWeb = 0; }
if (localStorage.getItem("Achat_web_V17_" + uniqueKey)) {
achat_init = "OK";
} else {
achat_init = "KO";
}
// Mise à jour des valeurs dans le localStorage uniquement si la nouvelle valeur est supérieure à la précédente
if (achatWeb >= achatWebPrev) {
localStorage.setItem("Achat_web_V17_" + uniqueKey, achatWeb.toString());
}
if (achatAgence > achatAgencePrev) {
localStorage.setItem("Achat_agence_V17_" + uniqueKey, achatAgence.toString());
}
if (achatCumulWeb >= achatCumulWebPrev) {
localStorage.setItem("Achat_cumulWeb_V17_" + uniqueKey, achatCumulWeb.toString());
}
localStorage.setItem("ClientAchat_V17_" + uniqueKey, ClientAchat);
var label = "CA_Agence_Avant_:" + achatAgencePrev + "OOO_CA_Agence_:" + achatAgence + "OOO_CA_Web_Avant_:" + achatWebPrev + "OOO_CA_Web_:" + achatWeb;
// Calcul de la différence
var label_value = achatAgence - achatAgencePrev;
if (achat_init === "OK" && ClientAchat === ClientAchatPrev) {
// Suivi des nouveaux achats web
if (achatWeb > achatWebPrev) {
if (achatCumulWeb === 2 && achatWebPrev == 1) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Deuxieme_Achat_Web',
'label': label
});
} 
if (achatCumulWeb > 2 && achatWebPrev > 1) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Web',
'label': label
});
}
}
// Suivi des nouveaux achats en agence
if ((achatWeb === achatWebPrev) && (achatAgence > achatAgencePrev) && (achatCumulWeb === achatCumulWebPrev)) {
if(achatCumulWebPrev>0){
if (achatCumulWeb === 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_V1',
'label': label
});
}
if (achatCumulWeb === 0 && achatWeb === 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_V2',
'label': label
});
} 
if (achatCumulWeb > 0 && achatWeb === 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_potentiel_V1',
'label': label
});
}
if (achatCumulWeb > 0 && achatWeb > 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_potentiel_V2',
'label': label,
'value': label_value
});
}
}
else
{
if (achatCumulWeb === 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_V11',
'label': label
});
}
if (achatCumulWeb === 0 && achatWeb === 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_V12',
'label': label,
'value': label_value
});
if (window.abtasty && typeof(window.abtasty.send) === 'function') {
try {
function generateRandom10DigitNumber() {
// Génère un nombre aléatoire à 10 chiffres
var randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
return randomNumber.toString();
}
// Exemple d'utilisation
var random10DigitNumber = generateRandom10DigitNumber();
window.abtasty.send("transaction", {
tid: random10DigitNumber,
ta: "Achat_agence",
tr: parseFloat(label_value),
ts: parseFloat(label_value),
tt: parseFloat(label_value),
tc: "EUR",
tcc: "",
pm: "",
sm: "",
icn: ""
});
}catch (e) {}
}
} 
if (achatCumulWeb > 0 && achatWeb === 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_potentiel_V11',
'label': label
});
}
if (achatCumulWeb > 0 && achatWeb > 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V17',
'action': 'Nouveau_Achat_Agence_potentiel_V12',
'label': label
});
}
}
}
}
} 
}
};
// Appel de la fonction suivreAchatsAvecDistinction lors du chargement du script
window.suivreAchatsAvecDistinction();
}
}
}
if(tC.dedup.ValidRules('241')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(241, 'AutoTracking | Premiers achats', 26, 5666, 10, 18);
// *** AutoTracking | Premiers achats ***
// Vérifier que la fonction n'est pas déjà définie
if (typeof(window.suivrePremierAchat) !== "function") {
// Déclaration de la fonction suivrePremierAchat sur l'objet global window
window.suivrePremierAchat = function() {
// Vérifier que le profil utilisateur est "VI" ou "ATC"
if (tc_vars["user_profile"] === "VI") {
// Vérifier que tc_vars["user_id"] et tc_vars["user_shop_attached_code"] sont définis et non vides
if (tc_vars["user_id"] && tc_vars["user_id"] !== null && tc_vars["user_id"] !== "" &&
tc_vars["user_shop_attached_code"] && tc_vars["user_shop_attached_code"] !== null && tc_vars["user_shop_attached_code"] !== "") {
// Générer la clé unique en concaténant les variables
var uniqueKey = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
// Récupérer les drapeaux précédents du localStorage
var nouveauCompteClient = localStorage.getItem('Nouveau_compte_clientV1');
var nouveauCompteODC = localStorage.getItem('Nouveau_compte_ODC');
var flagPremierAchatWebKey = 'Flag_premier_achat_web_' + uniqueKey;
var flagPremierAchatAgenceKey = 'Flag_premier_achat_agence_' + uniqueKey;
var flagPremierAchatWeb = localStorage.getItem(flagPremierAchatWebKey);
var flagPremierAchatAgence = localStorage.getItem(flagPremierAchatAgenceKey);
// Récupération des nouvelles valeurs
var userStatsSales = parseFloat(tc_vars["user_stats_sales"]);
var userStatsTotalTurnover = parseFloat(tc_vars["user_stats_totalTurnover"]);
// Initialisation à zéro si les valeurs sont NaN ou indéfinies
if (isNaN(userStatsSales)) { userStatsSales = 0; }
if (isNaN(userStatsTotalTurnover)) { userStatsTotalTurnover = 0; }
// Empêcher les valeurs de retomber à zéro ou de diminuer
// En s'assurant que les valeurs stockées sont les plus élevées
var maxUserStatsSalesKey = 'Max_user_stats_sales_' + uniqueKey;
var maxUserStatsTotalTurnoverKey = 'Max_user_stats_totalTurnover_' + uniqueKey;
var maxUserStatsSales = parseFloat(localStorage.getItem(maxUserStatsSalesKey)) || 0;
var maxUserStatsTotalTurnover = parseFloat(localStorage.getItem(maxUserStatsTotalTurnoverKey)) || 0;
if (userStatsSales > maxUserStatsSales) {
localStorage.setItem(maxUserStatsSalesKey, userStatsSales.toString());
} else {
userStatsSales = maxUserStatsSales;
}
if (userStatsTotalTurnover > maxUserStatsTotalTurnover) {
localStorage.setItem(maxUserStatsTotalTurnoverKey, userStatsTotalTurnover.toString());
} else {
userStatsTotalTurnover = maxUserStatsTotalTurnover;
}
// Vérifier si 'Nouveau_compte_client' est égal à 'sans_achat_web'
if (nouveauCompteClient === 'sans_achat_web') {
// Vérifier que user_stats_sales > 0
if (userStatsSales > 0) {
// Vérifier que user_stats_totalTurnover > 0
if (userStatsTotalTurnover > 0) {
// Vérifier que le flag 'Flag_premier_achat_web' n'est pas déjà défini
if (flagPremierAchatWeb !== 'OK') {
// Déclencher l'événement 'Premier_Achat_Web'
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V113',
'action': 'Premier_Achat_Web',
'label': 'Utilisateur: ' + tc_vars["user_id"]
});
// Mettre à jour le flag dans le localStorage avec la clé unique
localStorage.setItem(flagPremierAchatWebKey, 'OK');
}
} else {
// Vérifier que le flag 'Flag_premier_achat_agence' n'est pas déjà défini
if (flagPremierAchatAgence !== 'OK') {
// Calcul de la différence
var label_value = tc_vars["user_stats_sales"];
// Déclencher l'événement 'Premier_Achat_Agence'
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V113',
'action': 'Premier_Achat_Agence',
'label': 'Utilisateur: ' + tc_vars["user_id"],
'value': label_value
});
// Mettre à jour le flag dans le localStorage avec la clé unique
localStorage.setItem(flagPremierAchatAgenceKey, 'OK');
}
}
}
}
} 
}
};
// Appel de la fonction suivrePremierAchat lors du chargement du script
window.suivrePremierAchat();
}
}
}
if(tC.dedup.ValidRules('247')){
if(((document.location).toString().toLowerCase().indexOf(('/c/' ).toLowerCase()) != -1 || (document.location).toString().toLowerCase().indexOf(( '/search').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(247, 'AutoTracking (impulse) | PLP/Search', 26, 5666, 10, 18);
// *** AutoTracking (impulse) | PLP/Search ***
// Fonction pour convertir les produits pour GA4
var convertProductsForGA4 = function(products){
let value = [];
for (var i = 0; i < products.length; i++){
var item = {};
item.item_id = '' + (products[i].product_id || products[i].id) + '';
item.item_name = products[i].product_name || products[i].name;
item.item_list_name = products[i].list_name;
item.item_list_id = undefined;
item.item_brand = products[i].product_brand || products[i].brand || products[i].product_trademark;
item.item_category = products[i].product_category1;
item.item_category2 = products[i].product_category2;
item.item_category3 = products[i].product_category3;
item.item_category4 = products[i].product_category4;
item.item_category5 = products[i].product_category5;
item.price = parseFloat(('' + (products[i].product_price || products[i].price) + '').replace(',', '.'));
item.quantity = products[i].product_quantity || products[i].quantity || 1;
item.index = products[i].product_position;
item.product_instock = products[i].product_instock;
// Custom dimensions for GA4 can be added if needed
// item.__promo__ = products[i].product_promo;
// item.__ean__ = products[i].product_ean ? products[i].product_ean.toString() : '';
// item.__instock__ = products[i].product_instock;
if(window.stock_suivi){
item.stock_suivi = window.stock_suivi;
}
value.push(item);
}
return value;
};
var sendProductsEvent = function(){
if (window.productLists){
for (var listName in window.productLists){
if (window.productLists.hasOwnProperty(listName)){
var products_added = window.productLists[listName];
if (products_added.length > 0){
// façon classique
/*tc_events_global(this, "Event", {
category: "Ecommerce",
action: "Impression listes produits",
label: listName,
products_added: products_added
});*/
// façon directe
var ep = {};
ep.items = convertProductsForGA4(products_added);
// default event parameters (all pages)
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page); // ep is a clone of params_default
gtag('event', 'view_item_list', ep);
}
}
}
}
};
window.createGlobalVariablesForProducts = function(){
var elements = document.querySelectorAll('.sgt-product, .js-product-card'); // Assurez-vous que les sélecteurs couvrent tous les produits
var products_added = [];
var positionCounter = 1; // Compteur pour suivre la position des produits
elements.forEach(function(element){
var productId = element.dataset.productId;
var productElement = document.querySelector('.sgt-product[data-product_id="' + productId + '"]');
if (productElement){
var priceElement = element.querySelector('.sg-public-price') ||
element.querySelector('.sg-product-price-public') ||
element.querySelector('.price-processed');
var priceText = '';
if (priceElement){
if (priceElement.querySelector('.integer') && priceElement.querySelector('.decimal')){
priceText = priceElement.querySelector('.integer').textContent.trim() +
priceElement.querySelector('.decimal').textContent.trim();
priceText = priceText.replace(',', '.');
} else {
priceText = priceElement.textContent.trim().replace(/\s+/g, '').replace(',', '.');
}
}
var stockElement = element.querySelector('.js-plp-stock-status');
var stock = stockElement ? stockElement.innerText : '';
var listName = window.location.pathname.match("search") ? "Résultat_recherche" : "PLP";
var reviewElement = document.querySelector('.js-product-card[data-product-id="' + productId + '"]');
var review = 'Pas de note';
var nbReview = '0';
if (reviewElement && reviewElement.dataset && reviewElement.dataset.productReview){
review = reviewElement.dataset.productReview;
if (reviewElement.querySelector('.c-rating-stars__avis') && reviewElement.querySelector('.c-rating-stars__avis').innerText){
nbReview = parseFloat(reviewElement.querySelector('.c-rating-stars__avis').innerText).toString();
}
}
var regex = "[a-zA-Z0-9]";
if(stock===''){
window.stock_suivi ="KO"}
if (new RegExp(regex).test(stock)) {window.stock_suivi = "OK";}
var price = parseFloat(priceText);
var product = {
product_id: productElement.dataset.product_id || '',
product_name: productElement.dataset.product_name || '',
product_brand: productElement.dataset.product_trademark || '',
product_price: price,
product_position: positionCounter++, // Utilisation du compteur de position
quantity: productElement.dataset.product_variant_quantity || '',
product_instock: stock,
product_category1: tc_vars.page_cat1,
product_category2: tc_vars.page_cat2,
product_category3: tc_vars.page_cat3,
product_category4: tc_vars.page_cat4,
product_review: review,
product_nb_review: nbReview,
list_name: listName,
category: [
tc_vars.page_cat1,
tc_vars.page_cat2,
tc_vars.page_cat3,
tc_vars.page_cat4
].filter(Boolean).join('/')
};
products_added.push(product);
// Ajoute le produit à window sous une variable globale
if (!window.productLists){
window.productLists = {};
}
if (!window.productLists[product.list_name]){
window.productLists[product.list_name] = [];
}
// Vérifier si le produit existe déjà dans la liste
var existingProductIndex = window.productLists[product.list_name].findIndex(function(p){
return p.product_id === product.product_id;
});
if (existingProductIndex === -1){
// Ajouter le nouveau produit
window.productLists[product.list_name].push(product);
} else {
// Mettre à jour le produit existant
window.productLists[product.list_name][existingProductIndex] = product;
}
}
});
// Envoyer l'événement après avoir extrait les produits
sendProductsEvent();
};
}
}
}
if(tC.dedup.ValidRules('250')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(250, 'AutoTracking | barre search', 26, 5666, 10, 18);
// *** AutoTracking | barre search ***
}
}
if(tC.dedup.ValidRules('251')){
if(((document.location).toString().toLowerCase().indexOf(('/c/' ).toLowerCase()) != -1 || (document.location).toString().toLowerCase().indexOf(( '/search').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(251, 'AutoTracking (impulse) | clic PDT V2', 26, 5666, 10, 18);
// *** AutoTracking (impulse) | clic PDT V2 ***
window.handleProductClick = function(event, element) {
event.preventDefault();
// Vérifiez si l'élément cliqué est un bouton ou un descendant d'un bouton
if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
return; // Si c'est un bouton, ne rien faire
}
var productId = element.dataset.productId;
// Rechercher le produit dans window.productLists
var product = null;
for (var listName in window.productLists) {
var productList = window.productLists[listName];
for (var i = 0; i < productList.length; i++) {
if (productList[i].product_id === productId) {
product = productList[i];
break;
}
}
if (product) break;
}
if (product) {
var productRefElement = element.querySelector('[data-automation-id^="product-ref"]');
var productRefText = productRefElement ? productRefElement.textContent.trim() : '';
var productRef = productRefText.replace(/\D/g, ''); // Supprimer tous les caractères non numériques
tc_events_global(element, "Event", {
category: "Ecommerce",
action: "Clic produit",
label: productRef,
list_name: product.list_name,
products: product // Passer directement le produit
});
}
};
var articles = document.querySelectorAll('.js-product-card');
articles.forEach(function(article, index) {
article.dataset.productPosition = index + 1; // Définir la position dynamiquement en fonction de son index
article.setAttribute('onmousedown', 'handleProductClick(event, this)');
});
}
}
}
if(tC.dedup.ValidRules('253')){
if((tc_vars["env_template"] == 'Fiche produit'  || tc_vars["env_template"] ==  'Homepage'  || tc_vars["env_template"] ==  'Page Marque'  || tc_vars["env_template"] ==  'Catalogue - Catégorie'  || tc_vars["env_template"] ==  'Accueil Marques')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(253, 'AutoTracking (impulse) | PDP/HP/Marques', 26, 5666, 10, 18);
// *** AutoTracking (impulse) | PDP/HP/Marques ***
window.createGlobalVariablesForProducts = function() {
// Fonction pour extraire les informations des produits d'une liste
function extractProductsFromList(listElement, listTitle) {
var products_added = []; 
var elements = listElement.querySelectorAll('.sgt-product, .js-product-card');
var positionCounter = 1; // Compteur pour suivre la position des produits dans cette liste
elements.forEach(function(element, index) {
var productId = element.dataset.productId;
var productElement = document.querySelector('.sgt-product[data-product_id="' + productId + '"]');
if (productElement) {
var priceElement = element.querySelector('.sg-public-price') ||
element.querySelector('.sg-product-price-public') ||
element.querySelector('.price-processed');
var priceText = '';
if (priceElement) {
if (priceElement.querySelector('.integer') && priceElement.querySelector('.decimal')) {
priceText = priceElement.querySelector('.integer').textContent.trim() +
priceElement.querySelector('.decimal').textContent.trim();
priceText = priceText.replace(',', '.');
} else {
priceText = priceElement.textContent.trim().replace(/\s+/g, '').replace(',', '.');
}
}
var stockElement = element.querySelector('.js-plp-stock-status');
var stock = '';
if (stockElement) {
stock = stockElement.innerText;
}
var reviewElement = document.querySelector('.js-product-card[data-product-id="' + productId + '"]');
var review = 'Pas de note';
var nbReview = '0';
if (reviewElement && reviewElement.dataset && reviewElement.dataset.productReview) {
review = reviewElement.dataset.productReview;
if (reviewElement.querySelector('.c-rating-stars__avis') && reviewElement.querySelector('.c-rating-stars__avis').innerText) {
nbReview = parseFloat(reviewElement.querySelector('.c-rating-stars__avis').innerText).toString();
}
}
var price = parseFloat(priceText);
var product = {
product_id: productElement.dataset.product_id || '',
product_name: productElement.dataset.product_name || '',
product_brand: productElement.dataset.product_trademark || '',
product_price: price,
product_position: positionCounter++, // Utilisation de l'index de l'élément dans la liste
quantity: productElement.dataset.product_variant_quantity || '',
product_instock: stock,
product_category1: productElement.dataset.product_category1 || '',
product_category2: productElement.dataset.product_category2 || '',
product_category3: productElement.dataset.product_category3 || '',
product_category4: productElement.dataset.product_category4 || '',
product_review: review,
product_nb_review: nbReview,
list_name: listTitle,
category: [
productElement.dataset.product_category1,
productElement.dataset.product_category2,
productElement.dataset.product_category3,
productElement.dataset.product_category4
].filter(Boolean).join('/'),
targetAttribute: true // Ajout de l'attribut spécifique
};
products_added.push(product);
// Ajoute le produit à window sous une variable globale
if (!window.productLists) {
window.productLists = {};
}
if (!window.productLists[product.list_name]) {
window.productLists[product.list_name] = [];
}
// Vérifier si le produit existe déjà dans la liste
var existingProductIndex = window.productLists[product.list_name].findIndex(function(p) {
return p.product_id === product.product_id;
});
if (existingProductIndex === -1) {
// Ajouter le nouveau produit
window.productLists[product.list_name].push(product);
} else {
// Mettre à jour le produit existant
window.productLists[product.list_name][existingProductIndex] = product;
}
// Ajout de l'attribut à l'élément section le plus proche parent du produit
var closestSection = element.closest('.section');
if (closestSection) {
closestSection.setAttribute('data-list-name', listTitle);
}
}
});
return products_added;
}
// Fonction pour initialiser l'Intersection Observer
function initializeIntersectionObserver() {
var sections = document.querySelectorAll('.section');
sections.forEach(function(section, sectionIndex) {
var productLists = section.querySelectorAll('.splide__list, .tw-grid');
productLists.forEach(function(listElement, listIndex) {
var listTitleElement = section.querySelector('.section-title, .title');
var listTitle = listTitleElement ? listTitleElement.textContent.trim() : 'PLP_' + sectionIndex + '_' + listIndex;
var listId = 'list_' + sectionIndex + '_' + listIndex; // Ajout d'un identifiant unique pour chaque liste
listElement.setAttribute('data-list-id', listId); // Ajout de l'identifiant unique à l'élément de la liste
var observer = new IntersectionObserver(function(entries, observer) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
// Extraire les produits et envoyer l'événement
var products_added = extractProductsFromList(listElement, listTitle);
if (!window.sentEvents) {
window.sentEvents = {};
}
if (!window.sentEvents[listTitle]) {
if(!window.location.pathname.match("/mon-compte/")){
tc_events_global(this, "Event", {
category: "Ecommerce",
action: "Impression listes produits",
label: listTitle,
products_added: products_added
});
}
window.sentEvents[listTitle] = true;
}
observer.unobserve(entry.target);
}
});
});
observer.observe(listElement);
});
});
}
// Exécution de l'initialisation de l'observer après que le DOM est prêt
//document.addEventListener("DOMContentLoaded", function() {
initializeIntersectionObserver();
//});
};
// Appel de la fonction pour initialiser l'observation des produits
// window.createGlobalVariablesForProducts();
// Fonction pour surveiller le défilement
function monitorScroll() {
var lastScrollPosition = 0;
var scrollThreshold = 5; // En pourcentage
window.addEventListener('scroll', function() {
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
var scrollPercent = (scrollTop / scrollHeight) * 100;
if (scrollPercent >= lastScrollPosition + scrollThreshold) {
lastScrollPosition = scrollPercent;
setTimeout(function() {window.createGlobalVariablesForProducts();}, 1000);
}
});
}
// Initialisation de la surveillance du défilement
monitorScroll();
}
}
}
if(tC.dedup.ValidRules('254')){
if((tc_vars["env_template"] == 'Fiche produit'  || tc_vars["env_template"] ==  'Homepage'  || tc_vars["env_template"] ==  'Page Marque'  || tc_vars["env_template"] ==  'Catalogue - Catégorie'  || tc_vars["env_template"] ==  'Accueil Marques')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(254, 'AutoTracking (impulse) | Clic PDP/HP/Marques', 26, 5666, 10, 18);
// *** AutoTracking (impulse) | Clic PDP/HP/Marques ***
window.handleProductClick = function(event, element) {
event.preventDefault();
// Vérifiez si l'élément cliqué est un bouton ou un descendant d'un bouton
if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
return; // Si c'est un bouton, ne rien faire
}
var productId = element.dataset.productId;
// Trouver l'élément section parent le plus proche avec l'attribut data-list-name
var closestSection = element.closest('.section');
var listName = closestSection ? closestSection.getAttribute('data-list-name') : null;
if (listName && window.productLists[listName]) {
var productList = window.productLists[listName];
var product = productList.find(function(p) {
return p.product_id === productId;
});
if (product) {
var productRefElement = element.querySelector('[data-automation-id^="product-ref"]');
var productRefText = productRefElement ? productRefElement.textContent.trim() : '';
var productRef = productRefText.replace(/\D/g, ''); // Supprimer tous les caractères non numériques
tc_events_global(element, "Event", {
category: "Ecommerce",
action: "Clic produit",
label: productRef,
list_name: product.list_name,
products: product // Passer directement le produit
});
} else {
// tC.error('Produit non trouvé pour l\'ID:', productId);
}
} else {
//tC.error('Liste de produits non trouvée pour la liste:', listName);
}
};
function addOnMouseDownToProducts() {
var articles = document.querySelectorAll('.js-product-card');
articles.forEach(function(article, index) {
article.dataset.productPosition = index + 1; // Définir la position dynamiquement en fonction de son index
article.setAttribute('onmousedown', 'handleProductClick(event, this)');
});
}
}
}
}
if(tC.dedup.ValidRules('255')){
if((tc_vars["env_template"] == 'Fiche produit'  || tc_vars["env_template"] ==  'Catalogue - Produits'  || tc_vars["env_template"] ==  'Homepage'  || tc_vars["env_template"] ==  'Recherches'  || tc_vars["env_template"] ==  'Page Marque'  || tc_vars["env_template"] ==  'Catalogue - Catégorie'  || tc_vars["env_template"] ==  'Accueil Marques')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(255, 'AutoTracking | trigger auto-tracking', 26, 5666, 10, 18);
// *** AutoTracking | trigger auto-tracking ***
window.produit_ok = 0;
var bidule_pdt = "";
function Infos_produit_ok() {
if (document.querySelector(".js-product-card")&& window.produit_ok !== 1 )
{
if(tc_vars["user_profile"]!=="VA" && document.querySelector('.js-product-card .has-skeleton.is-loaded')){bidule_pdt="OK"}
if(tc_vars["user_profile"]==="VA" && document.querySelector('article button[data-once="sg-site-ajax sgTrackingClickLinkEvent sgTrackingClickButtonEvent"]')){bidule_pdt="OK"}
if(bidule_pdt==="OK"){
window.produit_ok = 1
setTimeout(function(){
createGlobalVariablesForProducts();
if (typeof addOnMouseDownToProducts === "function") {
addOnMouseDownToProducts();
}
}, 1000);
mutationObserverTwLink.disconnect();
}
}
}
mutationObserverTwLink = new MutationObserver(function (mutations) {
mutations.forEach(function (mutation) {
if (mutation.type === 'childList' || mutation.type === 'attributes') {
Infos_produit_ok();
}
});
});
configObservateur = { childList: true, subtree: true, attributes: false };
noeudCible = document.body; 
if (noeudCible) {
// Démarrage de l'observation
mutationObserverTwLink.observe(noeudCible, configObservateur);
// Initialisation de la variable produit_ok
window.produit_ok = 0;
window.suite = 1;
// Application initiale des modifications
Infos_produit_ok();
} 
}
}
}
if(tC.dedup.ValidRules('260')){
if(((document.location).toString().toLowerCase().indexOf(('/commande/livraison').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(260, 'AutoTracking | Code promo livraison', 26, 5666, 10, 18);
// *** AutoTracking | Code promo livraison ***
try {
// Mutation Observer pour surveiller le DOM
var promoObserverMutation = new MutationObserver(function (mutationsList, observer) {
for (var mutation of mutationsList) {
// Cas 1 : Échec - Détection des messages d'erreur
if (mutation.type === 'childList') {
// Gestion des erreurs dans '.c-message.is-variant-error'
document.querySelectorAll('.c-message.is-variant-error').forEach(function (errorElement) {
var errorMessage = errorElement.textContent.trim().toLowerCase();
if (errorMessage.includes('vous avez déjà effectué une commande')||errorMessage.includes('promo')) {
tc_events_global(this, "Event", {
"category": "Ecommerce",
"action": "Ajout code promo echec",
"label": "Code promo non applicable - commande Internet déjà effectuée"
});
//tC.log('Erreur détectée :', errorMessage);
observer.disconnect();
}
});
// Gestion des erreurs dans '.tw-text-error' pour "Ce code promo n'existe pas"
document.querySelectorAll('.tw-text-error').forEach(function (errorElement) {
var errorMessage = errorElement.textContent.trim().toLowerCase();
if (errorMessage.includes('ce code promo n\'existe pas')) {
tc_events_global(this, "Event", {
"category": "Ecommerce",
"action": "Ajout code promo echec",
"label": "Code promo invalide - n'existe pas"
});
tC.log('Erreur détectée :', errorMessage);
observer.disconnect();
}
});
}
// Cas 2 : Succès - Détection du bouton "Appliqué"
if (mutation.type === 'attributes' && mutation.target.tagName === 'BUTTON') {
var button = mutation.target;
var buttonLabel = button.querySelector('.c-button__label');
if (button.classList.contains('is-style-success') &&
buttonLabel && buttonLabel.textContent.trim() === 'Appliqué') {
tc_events_global(this, "Event", {
"category": "Ecommerce",
"action": "Ajout code promo succes",
"label": "Code promo appliqué avec succès"
});
// tC.log('Succès : Code promo appliqué avec succès.');
observer.disconnect();
}
}
}
});
// Configuration du MutationObserver
var promoObserverConfig = {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ['class', 'disabled'] // Observer les changements de classe et d'attributs
};
// Démarrer l'observation du DOM
promoObserverMutation.observe(document.body, promoObserverConfig);
// Écouteur de clic pour détecter les clics sur "Appliquer"
window.addEventListener('click', function (event) {
var clickedButton = event.target.closest('button');
if (clickedButton && clickedButton.textContent.trim() === 'Appliquer') {
// tC.log('Bouton "Appliquer" cliqué.');
}
});
} catch (e) {
tC.error('Erreur dans le script de suivi du code promo :', e);
}
}
}
}
if(tC.dedup.ValidRules('261')){
if((tc_vars["env_template"] == 'Homepage')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(261, 'AutoTracking | carroussel HP', 26, 5666, 10, 18);
// *** AutoTracking | carroussel HP ***
// Créer un ensemble pour garder une trace des commercial_name déjà observés
var trackedCommercialNames = new Set();
var debounceTimeout;
function initMutationObserver() {
// Sélectionner l'élément cible en utilisant ses classes
var targetNode = document.querySelector('.splide__track.splide__track--loop.splide__track--ltr.splide__track--draggable');
// Vérifier si l'élément existe
if (targetNode) {
// Options de l'observer (surveiller les attributs, les enfants et les sous-arbres)
var config = { attributes: true, childList: true, subtree: true };
// Callback exécutée lorsque des mutations sont observées
var callback = function(mutationsList, observer) {
for (var mutation of mutationsList) {
// Vérifier si des enfants ont été ajoutés ou supprimés
if (mutation.type === 'childList') {
// Sélectionner les éléments qui correspondent aux classes spécifiées
var activeSlides = targetNode.querySelectorAll('.splide__slide.tw-w-full.is-active.is-visible');
// Loguer uniquement ces éléments s'ils existent
if (activeSlides.length > 0) {
activeSlides.forEach(function(slide) {
// Trouver les éléments <a> à l'intérieur du slide et extraire les attributs `data`
var aTag = slide.querySelector('a.sgt-mb-carrousel[data-sgt-mb-id][data-sgt-mb-name][data-sgt-mb-creative]');
if (aTag) {
var commercialName = aTag.getAttribute('data-sgt-mb-name');
// Vérifier si ce commercial_name a déjà été traité
if (!trackedCommercialNames.has(commercialName)) {
// Utiliser un délai (debounce) pour éviter le double déclenchement rapide
if (debounceTimeout) clearTimeout(debounceTimeout);
debounceTimeout = setTimeout(function() {
// Ajouter commercial_name au set des éléments observés
trackedCommercialNames.add(commercialName);
var eventData = {
action: "Vue du carrousel marketing",
category: "Marketing",
commercial_creative: aTag.getAttribute('data-sgt-mb-creative'),
commercial_name: commercialName,
commercial_position: slide.getAttribute('id'), // Utiliser l'id du slide si nécessaire
commercial_type: "MEA Promo",
label: commercialName
};
// Déclencher ton événement ici
tc_events_global(this, "Event", eventData);
}, 100); // Ajuster le délai ici si nécessaire (en millisecondes)
}
}
});
}
}
}
};
// Créer une instance de MutationObserver
var observer = new MutationObserver(callback);
// Commencer à observer l'élément cible avec les options définies
observer.observe(targetNode, config);
// Stopper l'intervalle de vérification puisque l'élément est trouvé
clearInterval(checkInterval);
} else {
tC.log("Élément non trouvé, vérification dans 1 seconde...");
}
}
var checkInterval = setInterval(initMutationObserver, 1000);
}
}
}
if(tC.dedup.ValidRules('267')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(267, 'AutoTracking | Error message', 26, 5666, 10, 18);
// *** AutoTracking | Error message ***
if (window.location.pathname === '/inscription/nouveau-client-pro') {
try {
// Fonction pour vérifier s'il y a des messages d'erreur et renvoyer les innerText agrégés
function aggregateErrorMessages() {
var errorMessages = document.querySelectorAll(".field-messages .error-message");
var aggregatedMessages = "";
// Boucle sur chaque élément sélectionné et agréger leur innerText avec un séparateur barre verticale
errorMessages.forEach(function(messageElement) {
aggregatedMessages += messageElement.innerText + "|"; // Séparateur barre verticale
});
// Nettoyage : retirer les apostrophes, caractères spéciaux et remplacer les espaces par des underscores
aggregatedMessages = aggregatedMessages.trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '_');
return aggregatedMessages; // Retourner les messages agrégés
}
// Variable pour éviter les déclenchements trop rapides
var timeoutId = null;
var delay = 500; // 500ms de délai pour réduire la fréquence des logs
var observer = null; // Référence pour l'observer
// Vérifier si le chemin est '/inscription/nouveau-client-pro'
if (window.location.pathname === '/inscription/nouveau-client-pro') {
// Fonction pour arrêter l'observer
function stopObserver() {
if (observer) {
observer.disconnect(); // Arrêter l'observer
tC.log("Observer arrêté après détection d'erreur.");
}
}
// Déclaration du MutationObserver
observer = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
if (mutation.type === 'childList' || mutation.type === 'attributes') {
// Utiliser un timeout pour limiter la fréquence
if (timeoutId) {
clearTimeout(timeoutId);
}
timeoutId = setTimeout(function() {
// Vérifier les erreurs et envoyer les messages agrégés
var aggregatedMessages = aggregateErrorMessages();
if (aggregatedMessages !== "" && document.querySelector(".messages.error")) {
tC.log("Erreurs agrégées détectées: " + aggregatedMessages);
tc_events_global(this,"Event",{"category":"Auto_tracking","action":"ODC_PRO","label":aggregatedMessages});
stopObserver(); // Arrêter l'observer après la détection d'une erreur
} else {
tC.log("Aucune erreur détectée !");
}
}, delay);
}
});
});
// Options du MutationObserver pour écouter les changements dans le document
var observerConfig = { attributes: true, childList: true, subtree: true };
// Démarrer l'observation
observer.observe(document.body, observerConfig);
}
} catch(e) {
tC.error(e);
}
}
}
}
if(tC.dedup.ValidRules('269')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(269, 'AutoTracking | Visiteur search', 26, 5666, 10, 18);
// *** AutoTracking | Visiteur search ***
if(tc_array_events["action"]==="Initier recherche"&&tc_array_events["category"]==="Recherche produits"){
sessionStorage.setItem("visiteur_recherche","oui")
}
}
}
if(tC.dedup.ValidRules('270')){
if(((document.location).toString().toLowerCase().indexOf(('/mon-compte/').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(270, 'AutoTracking | download', 26, 5666, 10, 18);
// *** AutoTracking | download ***
(function() {
// Sélecteur pour l'élément ayant le titre "Télécharger"
var downloadSelector = '[title="Télécharger"]';
// Ajouter un écouteur d'événement 'mousedown' sur l'élément de téléchargement
document.addEventListener('mousedown', function(event) {
if (event.target.matches(downloadSelector)) {
// Trouver l'élément <a> avec l'URL juste après le bouton "Télécharger"
var closestTd = event.target.closest('td');
var nextAnchor = closestTd ? closestTd.querySelector('a[href*="/mon-compte/"]') : null;
// Extraire la partie de l'URL après "/mon-compte/" et avant le prochain "/"
var hrefPart = nextAnchor ? nextAnchor.href.split('/mon-compte/')[1].split('/')[0] : 'Texte non trouvé';
tC.log("Zone détectée (clic): Télécharger, Label dynamique: " + hrefPart);
const ep = {
event_category: 'Auto_track',
event_action: 'Telechargement document',
event_label: hrefPart
};
gtag('event', 'Telechargement document', ep);
}
});
})();
}
}
}
if(tC.dedup.ValidRules('274')){
if(((document.location).toString().toLowerCase().indexOf(('/p/').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(274, 'AutoTracking | Avis', 26, 5666, 10, 18);
// *** AutoTracking | Avis ***
// Fonction pour extraire les données et les variabiliser dans `window`
window.avis_client = function(){
try {
// Sélectionner l'élément contenant la note moyenne
var ratingElement = document.querySelector('#page section:first-of-type .c-rating-stars__average p');
var ratingText = ratingElement ? ratingElement.textContent.trim() : null;
// Extraire la note en tant que nombre
var ratingValue = ratingText ? parseFloat(ratingText.replace(/[()]/g, '')) : "pas de notes";
// Sélectionner l'élément contenant le nombre d'avis
var reviewsElement = document.querySelector('.c-rating-stars__avis a');
var reviewsText = reviewsElement ? reviewsElement.textContent.trim() : null;
// Extraire le nombre d'avis en tant que nombre
var reviewsCount = reviewsText ? parseInt(reviewsText.replace(/\D/g, ''), 10) : "pas de notes";
// Stocker dans des variables globales
window.ratingValue = ratingValue;
window.reviewsCount = reviewsCount;
tC.log('Note moyenne :', window.ratingValue);
tC.log('Nombre d\'avis :', window.reviewsCount);
} catch (error){
tC.error('Erreur lors de l\'extraction des données :', error);
}
};
}
}
}
if(tC.dedup.ValidRules('275')){
if((tc_vars["user_profile"] == 'VI')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if(tc_vars["env_template"] == 'Fiche produit'){
tC.launchTag(275, 'AutoTracking | Taux discount', 26, 5666, 10, 18);
// *** AutoTracking | Taux discount ***
try { 
// Déclaration du MutationObserver 
const observerPrices = new MutationObserver(() => { 
// Sélection des éléments nécessaires
let proPricesElement = document.querySelector(".js-quantity-widget-pdp-reskin-price-new.sg-product-price");
let publicPricesElement = document.querySelector(".sg-product-price-wrapper .sg-product-price-public");
// Vérification de la présence des éléments
if (proPricesElement && publicPricesElement) {
// Extraction du texte des prix
let publicPricesText = publicPricesElement.textContent.trim();
let proPricesText = proPricesElement.textContent.trim();
// Extraction des valeurs des prix (gère les espaces pour les milliers)
let publicPricesMatch = publicPricesText.match(/Prix catalogue\s*([0-9\s,.]+)/) 
|| publicPricesText.match(/Prix public\s*([0-9\s,.]+)/);
if (publicPricesMatch && publicPricesMatch[1]) {
let publicPricesValue = publicPricesMatch[1].trim();
// Conversion des valeurs en nombres
let proPrices = parseFloat(proPricesText.replace(/\s/g, '').replace(",", ".").replace(/[^0-9.]/g, ''));
let publicPrices = parseFloat(publicPricesValue.replace(/\s/g, '').replace(",", "."));
// Calcul de la remise en pourcentage
let discountPercentages = ((publicPrices - proPrices) / publicPrices) * 100;
discountPercentages = Math.round(discountPercentages);
// Envoi de l'événement de tracking
setTimeout(function() {
tc_events_global(this, "Event", {
"category": "Tracking temporaire",
"action": "Remise prix",
"label": "" + discountPercentages + ""
});
}, 1000);
}
observerPrices.disconnect(); 
}
});
// Options du MutationObserver pour écouter les changements 
observerPrices.observe(document.body, { attributes: true, childList: true, subtree: true }); 
} catch (e) { 
tC.error(e); 
} 
}
}
}
}
if(tC.dedup.ValidRules('278')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if((document.location).toString().toLowerCase().indexOf(('/p/').toLowerCase()) != -1){
tC.launchTag(278, 'AutoTracking | ProductLocator', 26, 5666, 10, 18);
// *** AutoTracking | ProductLocator ***
let isInitializod;
const observerConfigo = {
attributes: true,
childList: true,
subtree: true
};
function observeBody(callback) {
const observer = new MutationObserver(callback);
observer.observe(document.body, observerConfigo);
return observer;
}
function trackProductLocator(stepLabel, range) {
try {
var eventLabel = range ? stepLabel + "_" + range : stepLabel;
/* const ep = {
event_category: 'Auto_track',
event_action: 'Product_locator',
event_label: range ? `${stepLabel}_${range}` : stepLabel
};
// Appel à la fonction gtag standard
gtag('event', 'Product_locator', ep);*/
tc_events_global(this,"Event",{"category":"Auto_track","action":"Product_locator","label":eventLabel});
} catch (e) {
tC.error('Erreur lors de l’envoi de l’événement GA :', e);
}
}
window.initializeModalWatcher = () => {
try {
const modalWatcher = observeBody(() => {
const modalElement = document.querySelector(".app-product-locator .is-production:not(.tw-hidden)");
if (modalElement) {
tC.log("Modal détecté :", modalElement);
trackProductLocator("affichageModal");  // <== Evénement Analytics (affichage)
// Sur clic dans le champ de recherche, on lance initializeModalWatcher2
const searchField = modalElement.querySelector("input");
watchValidationButton();
let isInitializod = false; 
if (searchField) {
searchField.onmousedown = () => {
if(!isInitializod){
initializeModalWatcher2();
isInitializod = true;
}
const validationBtn = document.querySelector("footer button.is-style-primary");
if (validationBtn) {
// On retire le listener “sans recherche”
validationBtn.removeEventListener("mousedown", handleNoSearchValidation);
}
};
}
modalWatcher.disconnect();
}
});
} catch (e) {
tC.error("Erreur lors de l'initialisation du Modal Watcher :", e);
}
};
window.watchValidationButton = () => {
const observer = new MutationObserver((mutations, obs) => {
const validationBtn = document.querySelector(".app-product-locator .is-production:not(.tw-hidden) footer button.is-style-primary");
if (validationBtn) {
validationBtn.onmousedown = () => {
trackProductLocator("validation_choix_sans_recherche");
};
// On arrête l'observation une fois le bouton trouvé
obs.disconnect();
}
});
// On commence à observer la modale (ou document.body) selon tes besoins
observer.observe(document.body, observerConfigo);
}
window.initializeModalWatcher2 = () => {
try {
const modalWatcher2 = observeBody(() => {
// Recherche l'icône de "recherche en cours"
const searchingIcon = document.querySelector(".tw-relative .fa-duotone");
// Compte le nombre de liens de résultat
const linksCount = document.querySelectorAll(
".app-product-locator .is-production:not(.tw-hidden) a[href^='/infos-agence/']"
).length;
// S'il y a une icône et qu'aucun lien n'est encore présent, on attend l'arrivée des liens
if (searchingIcon && linksCount === 0) {
tC.log("Recherche en cours :", searchingIcon);
trackProductLocator("rechercheEnCours");  // <== Evénement Analytics (recherche)
initializeModalWatcher3();
modalWatcher2.disconnect();
}
});
} catch (e) {
tC.error("Erreur lors de l'initialisation du Modal Watcher 2 :", e);
}
};
window.initializeModalWatcher3 = () => {
try {
const modalWatcher3 = observeBody(() => {
// Compte le nombre de liens de résultat
const linksCount = document.querySelectorAll(
".app-product-locator .is-production:not(.tw-hidden) a[href^='/infos-agence/']"
).length;
// Dès qu'il y a au moins un lien présent, on extrait la distance
if (linksCount > 0) {
tC.log("Résultat détecté :", linksCount);
trackProductLocator("resultatDetecte"); // <== Evénement Analytics (résultat)
initializeModalWatcher4();
modalWatcher3.disconnect();
}
});
} catch (e) {
tC.error("Erreur lors de l'initialisation du Modal Watcher 3 :", e);
}
};
window.initializeModalWatcher4 = () => {
const spanElement = document.querySelector(".app-product-locator .is-production:not(.tw-hidden) span:not([class])");
if (!spanElement) {
tC.log("aucun_span_trouve");
return;
}
// Récupère la valeur du texte
const numericValueMatch = spanElement.innerText.match(/-?\d+([.,]\d+)?/g);
if (!numericValueMatch) {
tC.log("aucune_valeur_trouvee");
return;
}
const numericValue = parseFloat(numericValueMatch[0].replace(',', '.').trim());
let range;
if (numericValue < 10) {
range = "moins_de_10km";
} else if (numericValue < 20) {
range = "moins_de_20km";
} else if (numericValue > 30 && numericValue < 50) {
range = "entre_30_et_50km";
} else if (numericValue >= 50) {
range = "plus_de_50km";
} else {
// Sinon, on considère entre 20 et 30
range = "entre_20_et_30km";
}
const formattedOutput = `valeur_${numericValue}_${range}`;
tC.log(formattedOutput);
// Envoi de l’événement Analytics avec la tranche
trackProductLocator(range);
const confirmation_field = document.querySelector(".app-product-locator footer  button.is-style-primary");
confirmation_field.onmousedown = () => {
trackProductLocator("validation_choix_apres_recherche"); // <== Evénement Analytics (résultat)
}
};
initializeModalWatcher();
}
}
}
if(tC.dedup.ValidRules('279')){
if(((document.location).toString().toLowerCase().indexOf(('/mon-compte').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(279, 'AutoTracking | CTAdevis _ paloma', 26, 5666, 10, 18);
// *** AutoTracking | CTAdevis _ paloma ***
// Configuration partagée pour tous les MutationObserver
const observerConfigo1 = {
attributes: true,
childList: true,
subtree: true
};
function observeBody(callback) {
const observer = new MutationObserver(callback);
observer.observe(document.body, observerConfigo1);
return observer;
}
window.initializeCTADevis = () => {
try {
const CTAWatcher = observeBody(() => {
const CTAElement = document.querySelector("[title='Valider mon devis']");
if (CTAElement) {
tC.log("Bouton valider mon devis detecté");
var statu_bouton_devis ="";
if(document.querySelector(".is-disabled[title='Valider mon devis']")){
statu_bouton_devis = "deja_valide"
}else{statu_bouton_devis = "a_valide"}
tc_events_global(this,"Event",{"category":"Auto_track","action":"CTA_devis","label":statu_bouton_devis});
window.abtasty.send("event", { ec: "Action Tracking", ea: statu_bouton_devis, ev: 1 });
// auto_tracking_paloma("CTA_devis_"+statu_bouton_devis);  // <== Evénement Analytics (affichage)
CTAWatcher.disconnect();
}
});
} catch (e) {}
};
initializeCTADevis();
}
}
}
if(tC.dedup.ValidRules('280')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(280, 'AutoTracking | Achat_global', 26, 5666, 10, 18);
// *** AutoTracking | Achat_global ***
if (typeof(window.suivreAchatsAvecDistinctionGlobal) !== "function") {
// Déclaration de la fonction suivreAchatsAvecDistinction sur l'objet global window
window.suivreAchatsAvecDistinctionGlobal = function() {
// Condition pour vérifier le profil utilisateur (VI) pour continuer le traitement
if (tc_vars["user_profile"] === "VI") {
// Vérifier que tc_vars["user_id"] et tc_vars["user_shop_attached_code"] sont bien définis et non vides
if (tc_vars["user_id"] && tc_vars["user_id"] !== "" &&
tc_vars["user_shop_attached_code"] && tc_vars["user_shop_attached_code"] !== "") {
// Générer la clé unique en concaténant les variables
var uniqueKeyGlobal = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
// Récupération des valeurs précédentes stockées dans localStorage
var AchatGlobalPrev = localStorage.getItem("Achat_globalV2_" + uniqueKeyGlobal);
var AchatGlob_WebPrev = localStorage.getItem("AchatGlobV2_Web_" + uniqueKeyGlobal);
var ClientAchatGlobalPrev = localStorage.getItem("ClientAchatGlobalV2_" + uniqueKeyGlobal);
// Si les valeurs stockées n'existent pas encore, on utilise les valeurs actuelles pour initier le stockage
if (AchatGlobalPrev === null) {
AchatGlobalPrev = parseFloat(tc_vars["user_stats_sales"]) || 0;
localStorage.setItem("Achat_globalV2_" + uniqueKeyGlobal, AchatGlobalPrev.toString());
} else {
AchatGlobalPrev = parseFloat(AchatGlobalPrev);
}
if (AchatGlob_WebPrev === null) {
AchatGlob_WebPrev = parseFloat(tc_vars["user_stats_totalNumOrders"]) || 0;
localStorage.setItem("AchatGlobV2_Web_" + uniqueKeyGlobal, AchatGlob_WebPrev.toString());
} else {
AchatGlob_WebPrev = parseFloat(AchatGlob_WebPrev);
}
if (ClientAchatGlobalPrev === null) {
ClientAchatGlobalPrev = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
localStorage.setItem("ClientAchatGlobalV2_" + uniqueKeyGlobal, ClientAchatGlobalPrev);
}
// Récupération des nouvelles valeurs
var AchatGlobal = parseFloat(tc_vars["user_stats_sales"]);
var AchatGlob_Web = parseFloat(tc_vars["user_stats_totalNumOrders"]);
var ClientAchatGlobal = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
// Sauvegarde du client dans le localStorage
localStorage.setItem("ClientAchatGlobalV2_" + uniqueKeyGlobal, ClientAchatGlobal);
// Vérification si le client a déjà un historique d'achats
if (ClientAchatGlobal === ClientAchatGlobalPrev) {
// Vérification si AchatGlobal est NaN (ce qui pourrait arriver si la donnée est mal formatée)
if (isNaN(AchatGlobal)) { AchatGlobal = 0; }
// Vérification si AchatGlob_Web est NaN (ce qui pourrait arriver si la donnée est mal formatée)
if (isNaN(AchatGlob_Web)) { AchatGlob_Web = 0; }
// Calcul de la différence
var var_achat_global = AchatGlobalPrev > 0 ? AchatGlobal - AchatGlobalPrev : AchatGlobal;
var var_achat_web;
if (AchatGlob_Web === 0) {
var_achat_web = "Achat Web à 0";
} else if (AchatGlob_Web > AchatGlob_WebPrev) {
var_achat_web = "Achat Web en hausse";
} else {
var_achat_web = "Achat Web stable";
}
// Détection du premier achat (aucun CA précédent enregistré)
if (AchatGlobalPrev === 0 && AchatGlobal > 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V19',
'action': 'Premier_Achat_GlobalV2',
'label': var_achat_web,
'value': var_achat_global
});
}
// Détection d'un nouvel achat (CA qui a augmenté)
if (AchatGlobal > AchatGlobalPrev && AchatGlobalPrev > 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V19',
'action': 'Nouveau_Achat_GlobalV2',
'label': var_achat_web,
'value': var_achat_global
});
}
// Mise à jour du localStorage après l'envoi des événements
localStorage.setItem("Achat_globalV2_" + uniqueKeyGlobal, AchatGlobal.toString());
// Mise à jour du localStorage après l'envoi des événements
localStorage.setItem("AchatGlobV2_Web_" + uniqueKeyGlobal, AchatGlob_Web.toString());
}
}
}
};
// Appel de la fonction suivreAchatsAvecDistinction lors du chargement du script
window.suivreAchatsAvecDistinctionGlobal();
}
}
}
if(tC.dedup.ValidRules('282')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(282, 'AutoTracking | Suivre achats web', 26, 5666, 10, 18);
// *** AutoTracking | Suivre achats web ***
if (typeof(window.suivreAchatsWeb) !== "function") {
// Déclaration de la fonction suivreAchatsAvecDistinction sur l'objet global window
window.suivreAchatsWeb = function() {
// Condition pour vérifier le profil utilisateur (VI) pour continuer le traitement
if (tc_vars["user_profile"] === "VI") {
// Vérifier que tc_vars["user_id"] et tc_vars["user_shop_attached_code"] sont bien définis et non vides
if (tc_vars["user_id"] && tc_vars["user_id"] !== "" &&
tc_vars["user_shop_attached_code"] && tc_vars["user_shop_attached_code"] !== "") {
// Générer la clé unique en concaténant les variables
var uniqueKeyWeb = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
// Récupération des valeurs précédentes stockées dans localStorage
var AchatTotal_WebPrev = localStorage.getItem("AchatTotal_WebV2_" + uniqueKeyWeb);
var ClientWebPrev = localStorage.getItem("ClientWebV2_" + uniqueKeyWeb);
// Si les valeurs stockées n'existent pas encore, on utilise les valeurs actuelles pour initier le stockage
if (AchatTotal_WebPrev === null) {
AchatTotal_WebPrev = parseFloat(tc_vars["user_stats_totalTurnover"]) || 0;
localStorage.setItem("AchatTotal_WebV2_" + uniqueKeyWeb, AchatTotal_WebPrev.toString());
} else {
AchatTotal_WebPrev = parseFloat(AchatTotal_WebPrev);
}
if (ClientWebPrev === null) {
ClientWebPrev = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
localStorage.setItem("ClientWebV2_" + uniqueKeyWeb, ClientWebPrev);
}
// Récupération des nouvelles valeurs
var AchatTotal_Web = parseFloat(tc_vars["user_stats_totalTurnover"]) || 0;
var label = "CA_Web_Avant_:" + AchatTotal_WebPrev + "OOO_CA_Web_:" + AchatTotal_Web;
var ClientWeb = tc_vars["user_id"] + "_" + tc_vars["user_shop_attached_code"];
// Sauvegarde du client dans le localStorage
localStorage.setItem("ClientWebV2_" + uniqueKeyWeb, ClientWeb);
// Vérification si le client a déjà un historique d'achats
if (ClientWeb === ClientWebPrev) {
// Vérification si AchatGlob_Web est NaN (ce qui pourrait arriver si la donnée est mal formatée)
if (isNaN(AchatTotal_Web)) { AchatTotal_Web = 0; }
// Calcul de la différence
var var_achat_total_web = AchatTotal_WebPrev > 0 ? AchatTotal_Web - AchatTotal_WebPrev : (isNaN(AchatTotal_Web) ? 0 : AchatTotal_Web);
// Détection du premier achat (aucun CA précédent enregistré)
if (AchatTotal_WebPrev === 0 && AchatTotal_Web > 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V19',
'action': 'Premier_Achat_WeboV2',
'label': label,
'value': var_achat_total_web
});
}
// Détection d'un nouvel achat (CA qui a augmenté)
if (AchatTotal_Web > AchatTotal_WebPrev && AchatTotal_WebPrev > 0) {
tc_events_global(this, 'Event', {
'category': 'Ecommerce_V19',
'action': 'Nouveau_Achat_WeboV2',
'label': label,
'value': var_achat_total_web
});
}
// Mise à jour du localStorage après l'envoi des événements
localStorage.setItem("AchatTotal_WebV2_" + uniqueKeyWeb, AchatTotal_Web.toString());
}
}
}
};
// Appel de la fonction suivreAchatsAvecDistinction lors du chargement du script
window.suivreAchatsWeb();
}
}
}
if(tC.dedup.ValidRules('297')){
tC.launchTag(297, 'AutoTracking | Initier recherche', 26, 5666, 10, 18);
// *** AutoTracking | Initier recherche ***
var appSearchBarClicked = false;
window.addEventListener('click', function (event) {
if (appSearchBarClicked) return;
var appSearchBar = document.getElementById('appSearchBar');
if (!appSearchBar) return;
if (appSearchBar.contains(event.target)) {
appSearchBarClicked = true;
tc_events_global(this,"Event",{"category":"Recherche produits","action":"Initier recherche","label":""});
}
});
}
if(tC.dedup.ValidRules('298')){
if(((document.location).toString().toLowerCase().indexOf(('/commande/').toLowerCase()) != -1)){
if((document.location).toString().toLowerCase().indexOf(('pointp' ).toLowerCase()) != -1 || (document.location).toString().toLowerCase().indexOf(( 'cedeo').toLowerCase()) != -1){
tC.launchTag(298, 'AutoTracking | Erreurs checkout V2', 26, 5666, 10, 18);
// *** AutoTracking | Erreurs checkout V2 ***
window.addEventListener('click', function (event) {
// Ne rien faire si le clic n'est pas dans un <button>
if (!event.target.closest('button')) return;
setTimeout(() => {
const errors = document.querySelectorAll('div.tw-text-sm.tw-text-error');
const motifs = [];
errors.forEach(errorEl => {
let motif = errorEl.innerText.trim();
if (motif === 'Ce champ est obligatoire.') {
const container = errorEl.closest('[data-id]');
if (container) {
const label = container.querySelector('label.sg-label');
if (label) {
motif += ' — ' + label.innerText.trim();
}
}
}
motif = 'message_erreur_' + motif
.replace(/\*/g, '')
.replace(/\./g, '')
.replace(/[\s\u00A0]+/g, '_')
.replace(/_—_/g, '');
// supprimer le segment "_—_"
motifs.push(motif);
});
// tC.log(motifs.join('|'));
if (typeof window._uxa !== 'undefined' &&
typeof window._uxa.push === 'function' &&
motifs.length > 0) {
window._uxa.push(['trackPageview', motifs.join('|')]);
tc_events_global(this,"Event",{"category":"Erreurs","action":"Message_erreur_checkout","label":motifs.join('|')});
}
}, 800);
});
}
}
}
if(tC.dedup.ValidRules('299')){
if(((document.location).toString().toLowerCase().indexOf(('/commande/').toLowerCase()) != -1)){
if((document.location).toString().toLowerCase().indexOf(('pointp' ).toLowerCase()) != -1 || (document.location).toString().toLowerCase().indexOf(( 'cedeo').toLowerCase()) != -1){
tC.launchTag(299, 'AutoTracking | Erreurs checkout', 26, 5666, 10, 18);
// *** AutoTracking | Erreurs checkout ***
window.__isObservingErrorMessage = false;
window.observeErrorMessage = function() {
if (window.__isObservingErrorMessage) return;
window.__isObservingErrorMessage = true;
const targetNode = document.body;
const observer = new MutationObserver((mutationsList, observer) => {
for (const mutation of mutationsList) {
if (mutation.type === 'childList') {
const errorEl = document.querySelector('.c-message.c-wysiwig.is-variant-error.has-icon.is-closable')
|| document.querySelector('.tw-border-error');
if (errorEl) {
setTimeout(() => {
// ✅ Récupérer le message
let messageText = '';
if (errorEl.classList.contains('c-message')) {
const messageContainer = errorEl.querySelector('.tw-grow div');
messageText = messageContainer ? messageContainer.textContent.trim() : '';
} else {
messageText = errorEl.textContent.trim();
}
// ✅ Récupérer le data-id
const closestWithId = errorEl.closest('[data-id]');
const dataId = closestWithId ? closestWithId.getAttribute('data-id') : '';
// ✅ Fonction de nettoyage du label
const cleanLabel = (str) => {
return 'message_erreur_' + str
.replace(/\*/g, '')
.replace(/\./g, '')
.replace(/[\s\u00A0]+/g, '_')
.replace(/_—_/g, '')
.toLowerCase();
};
// ✅ Envoi message
if (messageText) {
if (typeof window._uxa !== 'undefined' &&
typeof window._uxa.push === 'function' &&
typeof motifs !== 'undefined' &&
motifs.length > 0) {
const cleaned = cleanLabel(messageText);
window._uxa.push(['trackPageview', cleaned]);
tc_events_global(this, "Event", {
category: "Erreurs",
action: "Message_erreur_checkout",
label: cleaned
});
}
}
// ✅ Envoi data-id
if (dataId) {
if (typeof window._uxa !== 'undefined' &&
typeof window._uxa.push === 'function' &&
typeof motifs !== 'undefined' &&
motifs.length > 0) {
const cleaned = cleanLabel(dataId);
window._uxa.push(['trackPageview', cleaned]);
tc_events_global(this, "Event", {
category: "Erreurs",
action: "Message_erreur_checkout",
label: cleaned
});
}
}
}, 500);
observer.disconnect();
window.__isObservingErrorMessage = false;
break;
}
}
}
});
observer.observe(targetNode, {
childList: true,
subtree: true,
});
setTimeout(() => {
observer.disconnect();
window.__isObservingErrorMessage = false;
}, 5000);
};
window.observeErrorMessage();
window.addEventListener('click', function() {
window.observeErrorMessage();
});
}
}
}
if(tC.dedup.ValidRules('429')){
tC.launchTag(429, 'FIX | Mobile Masquer Recherche guidée', 26, 5666, 10, 18);
// *** FIX | Mobile Masquer Recherche guidée ***
if (!window._hideSparklesInit && typeof tc_vars !== 'undefined' && tc_vars.env_channel === 'Mobile') {
window._hideSparklesInit = true;
const hide = () => {
document.querySelectorAll('.fa-duotone.fa-sparkles').forEach(icon => {
icon.closest('.mb-4')?.remove();
});
};
let timer;
const debouncedHide = () => {
clearTimeout(timer);
timer = setTimeout(hide, 50);
};
hide();
const observer = new MutationObserver(debouncedHide);
observer.observe(document.body, {
childList: true,
subtree: true
});
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;
history.pushState = function(...args) {
originalPushState.apply(this, args);
debouncedHide();
};
history.replaceState = function(...args) {
originalReplaceState.apply(this, args);
debouncedHide();
};
window.addEventListener('popstate', debouncedHide);
setInterval(hide, 2000);
}
}
if(tC.dedup.ValidRules('276')){
if(((tc_vars["user_subprofile"] === "PUNCHOUT" && window.location.hostname !== "int-punchout.pointp.fr" && window.location.hostname !== "rec-punchout.pointp.fr" && !String(tc_vars["env_site"] || "").toLowerCase().startsWith("nextpulse_")))){
tC.launchTag(276, 'Fix | PUNCHOUT', 26, 5666, 10, 18);
// *** Fix | PUNCHOUT ***
var allowedHostnames = [
"rec-punchout.cedeo.fr",
"rec-punchout.climplus.com",
"rec-punchout.pointp.fr",
"rec-punchout.sfic.com",
"ppr-punchout.cedeo.fr",
"ppr-punchout.climplus.com",
"ppr-punchout.pointp.fr",
"ppr-punchout.sfic.com",
"punchout.cedeo.fr",
"punchout.climplus.com",
"punchout.pointp.fr",
"punchout.sfic.com"
];
if (allowedHostnames.includes(window.location.hostname)) {
setTimeout(() => {
// PUNCHOUT SETTINGS
const punchoutSettings = {
'rec': {
'cedeo': {
'007b4aca-c0cf-41dd-81d0-1534fc93e4ad': { // EQUANS
'logout': { 'url': 'https://equans.coupahost.com', 'label': 'Retour vers COUPA', 'method': 'GET' }
},
'df241a08-8a15-4f92-86c8-b7a453b46e4c': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'a0c4abc4-a9fc-4c11-8470-be4bab281d67': { // EIFFAGE
'carbonData': false
}
},
'clim': {
'6db16ffc-0ead-47c8-8de3-188abac80eb8': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
},
'pointp': {
'eace10ea-66fe-4fa9-ae6b-46b4f8f5c455': { // EIFFAGE
'carbonData': false
}
},
'sfic': {
'4a133f5c-4880-4587-80cd-04755aee422c': { 'url': '' }
}
},
'prd': {
'cedeo': {
'30c9a26f-3f1c-4705-885a-72ffa871df20': { // EQUANS
'logout': { 'url': 'https://equans.coupahost.com', 'label': 'Retour vers COUPA', 'method': 'GET' }
},
'298e8cf4-2bbd-46eb-9e28-612caef02f74': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'8ec52cbc-8475-4779-b89f-f24dbf54eade': { // VEOLIA VEP
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'7acb39fd-7cf9-4594-b168-8a5952ed4cd9': { // EIFFAGE
'carbonData': false
},
'default': { // EQUANS
'logout': { 'url': 'https://equans.coupahost.com', 'method': 'GET' }
},
},
'clim': {
'9252fce2-211a-4308-bf58-fb9fa8ec2e4d': { // VEOLIA VED
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
'306c9014-d9e4-4839-8937-6e6508e893f4': { // VEOLIA VEP
'logout': { 'url': 'DEFAULT', 'label': 'RETOUR PANIER' }
},
},
'pointp': {
'4af7f667-98d4-4e35-9cc1-dcb34a02e8c9': { // EIFFAGE
'carbonData': false
}
},
'sfic': {
'4a133f5c-4880-4587-80cd-04755aee422c': { 'url': '' }
}
}
}
let envPunchout = 'prd', brandPunchout = tc_vars.env_site.replace('Nextpulse_', '');
if (window.location.hostname.includes('rec')) {
envPunchout = 'rec';
}
// ADD/REMOVE A PUNCHOUT LOGOUT BUTTON IN USER MENU
if (envPunchout in punchoutSettings && brandPunchout in punchoutSettings[envPunchout]) {
const punchoutId = tc_vars.punchoutId || 'default';
if (punchoutId in punchoutSettings[envPunchout][brandPunchout] && 'logout' in punchoutSettings[envPunchout][brandPunchout][punchoutId]) {
const logoutDefaultLabel = 'Me dÃ©connecter';
const logoutURL = punchoutSettings[envPunchout][brandPunchout][punchoutId].logout.url || '';
const logoutLabel = punchoutSettings[envPunchout][brandPunchout][punchoutId].logout.label || logoutDefaultLabel;
const logoutMethod = punchoutSettings[envPunchout][brandPunchout][punchoutId].logout.method || 'GET';
if (logoutURL != 'DEFAULT') {
$('div.header ul.user-menu > li.submit-wrapper').remove();
if (logoutURL != '') {
let userMenu = $('div.header ul.user-menu');
if (userMenu.length) {
$('div.header ul.user-menu').append(`<li class="submit-wrapper"><a sg-tracking-label="${logoutLabel}" href="${logoutURL}" class="submit-wrapper submit user-logout" data-once="sgTrackingClickLinkEvent sgTrackingHoverLinkEvent">${logoutLabel}</a></li>`);
tC.log("Logout button added");
}
}
else {
tC.log("Logout button removed (if exists)");
}
} else {
$('div.header li.item-user.js-user-menu > div > ul > li.submit-wrapper > form > button').html(logoutLabel);
}
if (window.location.href.includes('mon-compte')) {
if (logoutURL != '') {
let logoutItemButton = $('#app aside footer form');
if (logoutItemButton.length) {
if (logoutURL != 'DEFAULT') logoutItemButton.attr('action', logoutURL);
$('#app aside footer form div').html(logoutLabel);
tC.log("Logout button modified");
}
else if (logoutURL != 'DEFAULT') {
$('#app aside>div').append(`<footer><div class="tw-p-3 tw-border-t tw-border-solid tw-border-gray-200"><form method="${logoutMethod}" action="${logoutURL}"><button class="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-w-full tw-p-3 tw-rounded-md hover:tw-bg-gray-100 tw-transition-all tw-duration-300 hover:tw-cursor-pointer" type="submit" data-once="sgTrackingClickLinkEvent sgTrackingClickButtonEvent"><div>${logoutLabel}</div><i class="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i></button></form></div></footer>`);
tC.log("Logout button added");
}
}
else {
$('#app aside footer').remove();
}
}
}
}
// PRODUCT PAGE - REMOVE CARBON DATA
if ('punchoutId' in tc_vars && envPunchout in punchoutSettings && brandPunchout in punchoutSettings[envPunchout] && tc_vars.punchoutId in punchoutSettings[envPunchout][brandPunchout] && 'carbonData' in punchoutSettings[envPunchout][brandPunchout][tc_vars.punchoutId]) {
if (punchoutSettings[envPunchout][brandPunchout][tc_vars.punchoutId].carbonData === false && $('div.product-detail-page').length) {
$('img[alt="Indicateur carbone"]').parents().eq(2).remove();
$('div[data-anchor-id="carbon_data"]').remove();
}
}
}, 2000);
}
}
}
if(tC.dedup.ValidRules('287')){
if((tc_vars["user_profile"].toString().toLowerCase().indexOf(('VA').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
if(tc_vars["env_channel"] == 'Mobile'){
tC.launchTag(287, 'Fix | Règles affichage bannière App', 26, 5666, 10, 18);
// *** Fix | Règles affichage bannière App ***
// Configuration partagée pour tous les MutationObserver
const observerConfigo2 = {
attributes: true,
childList: true,
subtree: true
};
function observeBody(callback) {
const observer = new MutationObserver(callback);
observer.observe(document.body, observerConfigo2);
return observer;
}
window.initializeCTASticky = () => {
const CTAElement_init = document.querySelector(".sg-site-product-sticky-add-to-cart.is-visible");
const PDLOC_init = document.querySelector(".app-product-locator .is-production:not(.tw-hidden)");
if (PDLOC_init) {
if(document.querySelector(".banner-modern")){
document.querySelector(".banner-modern").style.display = "none";
}
}
if (CTAElement_init && (tc_vars["user_profile"]==="VAR" || tc_vars["user_profile"]==="VI")) {
if(document.querySelector(".banner-modern")){
document.querySelector(".banner-modern").style.display = "none";
}
}
try {
const CTAWatcher = observeBody(() => {
var banner = document.querySelector(".banner-modern");
if (!banner) return;
var CTAElement = document.querySelector(".sg-site-product-sticky-add-to-cart.is-visible");
var PDLOC = document.querySelector(".app-product-locator .is-production:not(.tw-hidden)");
var BURGERM = document.querySelector(".block-burger-menu.is-opened");
var SEARCH = document.querySelector(".opened-search");
if (PDLOC || CTAElement || BURGERM || SEARCH || 
(CTAElement && (tc_vars["user_profile"] === "VAR" || tc_vars["user_profile"] === "VI")) || (window.location.pathname.match(/\/c\//)) ) {
tC.log("Élément déclencheur détecté — masquage de la bannière");
banner.style.display = "none";
} else {
banner.style.display = "flex";
}
});
} catch (e) {}
};
initializeCTASticky();
}
}
}
}
if(tC.dedup.ValidRules('221')){
if(((document.location).toString().toLowerCase().indexOf(('/commande/livraison').toLowerCase()) != -1)){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(221, 'Fix | Checkout AStu/PP', 26, 5666, 10, 18);
// *** Fix | Checkout AStu/PP ***
if (document.location.pathname.startsWith("/commande")){
if (document.location.hostname.includes('pointp.fr') || document.location.hostname.includes('asturienne.fr')){
var interval;
var timeout;
var updateElement = function(){
try {
if (document.location.pathname === "/commande/livraison"){
var parentElement = document.querySelector('.c-wysiwyg');
if (parentElement){
var childElement = parentElement.querySelector('div');
if (childElement){
if (document.location.hostname.includes('pointp.fr')){
childElement.innerHTML = childElement.innerHTML.replace(/Distribution Sanitaire Chauffage/g, 'POINT.P');
clearInterval(interval);
clearTimeout(timeout);
}
if (document.location.hostname.includes('asturienne.fr')){
childElement.innerHTML = childElement.innerHTML.replace(/Distribution Sanitaire Chauffage/g, 'ASTURIENNE');
clearInterval(interval);
clearTimeout(timeout);
}
}
}
}
} catch (e){
}
};
var startTimers = function(){
interval = setInterval(updateElement, 400);
timeout = setTimeout(function(){
clearInterval(interval);
}, 4000);
};
startTimers(); // Initialisation des timers
window.addEventListener('mousedown', function(){
if (window.event.target.innerText === "Retour aux options"){
updateElement();
startTimers(); // Réinitialisation des timers
}
});
}
}
}
}
}
if(tC.dedup.ValidRules('189')){
if(!(tc_vars["env_site"] || "").includes("Nextpulse")){
tC.launchTag(189, 'Fix | Update page EMC', 26, 5666, 10, 18);
// *** Fix | Update page EMC ***
try {
// Check if the user is on the correct page
if (document.location.pathname === "/mon-compte/mes-informations") {
// Initialize interval to run code repeatedly
var update_EMC_quickfix = setInterval(function() {
// Check if the elements you want to modify exist on the page
var buttonElements = document.getElementsByClassName("buttons text-right");
if (buttonElements.length > 0) {
try {
var nb_total_column = document.getElementsByClassName("columns").length;
// Loop through all columns
for (var u = 0; u < nb_total_column; u++) {
var currentColumn = document.getElementsByClassName("columns")[u];
var boxTitle = currentColumn.getElementsByClassName("box-title")[0];
// Check if box-title exists and its innerText doesn't include "FACTURATION"
if (boxTitle && !boxTitle.innerText.includes("FACTURATION")) {
var nb_total_cta = currentColumn.getElementsByClassName("buttons text-right").length;
// Loop through all buttons and remove them
for (var t = 0; t < nb_total_cta; t++) {
currentColumn.getElementsByClassName("buttons text-right")[t].remove();
}
}
}
// Clear the interval as the job is done
clearInterval(update_EMC_quickfix);
} catch (e) {
tC.error("An error occurred: ", e);
}
}
}, 50);
}
} catch (e) {}
}
}
if(tC.dedup.ValidRules('417')){
if(((document.location).toString().toLowerCase().indexOf(('/connexion').toLowerCase()) != -1)){
tC.launchTag(417, 'Picto noir réassurance ODC', 26, 5666, 10, 18);
// *** Picto noir réassurance ODC ***
const pictovert = document.querySelectorAll('.fa-regular.fa-circle-check.text-success-500'); 
if (pictovert.length > 0){
pictovert.forEach(picto => {
picto.style.color = "rgb(10, 10, 10)";
});
}
}
}
if(tC.dedup.ValidRules('424')){
if(((document.location).toString().toLowerCase().indexOf(('/inscription/nouveau-client').toLowerCase()) != -1) || ((document.location).toString().toLowerCase().indexOf(('/connexion').toLowerCase()) != -1)){
tC.launchTag(424, 'Distinction PRO/PART', 26, 5666, 10, 18);
// *** Distinction PRO/PART ***
window.confirmationODC = function () {
// ====== GUARD : ne pas réinstaller ======
if (window.__confirmationODC_INSTALLED__) {
tC.log("[confirmationODC] déjà installé");
return;
}
window.__confirmationODC_INSTALLED__ = true;
// ====== ETAT GLOBAL (partagé) ======
var S = window.__confirmationODC_STATE__ || (window.__confirmationODC_STATE__ = {
cachedType: null,
seenVerify: false,
sentMail: false,
sentFinal: false,
prevPath: location.pathname
});
var STEP_FACTU = "/inscription/nouveau-client/facturation";
var STEP_VERIFY = "/inscription/nouveau-client/verifier-votre-email";
var STEP_CONFIRM = "/inscription/nouveau-client/confirmation";
var oldPush = history.pushState;
var oldReplace = history.replaceState;
var getPath = function (url) {
try { return new URL(url, location.href).pathname; }
catch (e) { return location.pathname; }
};
var getAuthStorage = function () {
try { return sessionStorage.getItem("auth-storage"); }
catch (e) { return null; }
};
var computeTypeFromStorage = function () {
var s = getAuthStorage();
if (!s) return "non-defini";
if (s.indexOf('"isPro":true') > -1) return "PRO";
return "PART";
};
var inFunnel = function (path) {
return (path || "").indexOf("/inscription/nouveau-client/") > -1;
};
var captureTypeIfOnFacturation = function (path) {
if (path && path.indexOf(STEP_FACTU) > -1) {
S.cachedType = computeTypeFromStorage();
}
};
var sendEvent = function (eventName, type) {
if (!window.tC || !tC.event || !tC.event.sign_up) return;
tC.event.sign_up(this, {
"event_name": eventName,
"category": "Interactions utilisateurs",
"action": eventName,
"label": type,
"event_type": "Inscription",
"event_user_action": type + "_" + eventName,
"event_context": "Login",
"kpi_strategy": "Activation"
});
};
var sendMailIfNeeded = function () {
if (S.sentMail) return;
var type = S.cachedType || "non-defini";
sendEvent("confirmation_mail_ODC", type);
S.sentMail = true;
};
var sendFinalIfNeeded = function () {
if (S.sentFinal) return;
var type = S.cachedType || "non-defini";
sendEvent("confirmation_finale_ODC", type);
S.sentFinal = true;
};
var resetState = function () {
S.cachedType = null;
S.seenVerify = false;
S.sentMail = false;
S.sentFinal = false;
};
var handle = function (nextPath) {
if (!inFunnel(nextPath)) {
resetState();
S.prevPath = nextPath;
return;
}
captureTypeIfOnFacturation(nextPath);
if (nextPath.indexOf(STEP_VERIFY) > -1) {
S.seenVerify = true;
setTimeout(function () {
if (location.pathname.indexOf(STEP_VERIFY) === -1) return;
sendMailIfNeeded();
}, 500);
}
if (nextPath.indexOf(STEP_CONFIRM) > -1) {
setTimeout(function () {
if (location.pathname.indexOf(STEP_CONFIRM) === -1) return;
if (!S.seenVerify) {
sendMailIfNeeded();
}
sendFinalIfNeeded();
}, 500);
}
S.prevPath = nextPath;
};
history.pushState = function (state, title, url) {
var nextPath = getPath(url);
var r = oldPush.apply(history, arguments);
handle(nextPath);
return r;
};
history.replaceState = function (state, title, url) {
var nextPath = getPath(url);
var r = oldReplace.apply(history, arguments);
handle(nextPath);
return r;
};
// init
captureTypeIfOnFacturation(location.pathname);
handle(location.pathname);
tC.log("[confirmationODC] installé (guard dans window)");
};
window.confirmationODC();
}
}
if(tC.dedup.ValidRules('434')){
tC.launchTag(434, 'Auto-tracking | Code promo', 26, 5666, 10, 18);
// *** Auto-tracking | Code promo ***
window.trackPromoCode = function () {
var STORAGE_KEY = 'tc_promo_code';
var TUNNEL_PATHS = ['/commande/livraison', '/commande/paiement', '/commande/confirmation'];
var currentPath = window.location.pathname;
var isInTunnel = TUNNEL_PATHS.some(function (p) {
return currentPath.indexOf(p) === 0;
});
if (!isInTunnel) {
localStorage.removeItem(STORAGE_KEY);
return;
}
window.tc_vars = window.tc_vars || {};
if (!tc_vars.promo_code && tc_vars.promo_code !== '') {
var storedPromo = localStorage.getItem(STORAGE_KEY);
tc_vars.promo_code = storedPromo || '';
}
if (currentPath.indexOf('/commande/livraison') === 0 && !window._trackPromoListenerSet) {
window._trackPromoListenerSet = true;
document.addEventListener('click', function (e) {
var btn = e.target.closest('button[title="Valider mes options"]');
if (btn) {
var promoInput = document.querySelector('input[placeholder="EX: FOOT5"]');
var promoValue = promoInput ? promoInput.value.trim() : '';
window.tc_vars = window.tc_vars || {};
tc_vars.promo_code = promoValue;
if (promoValue) {
localStorage.setItem(STORAGE_KEY, promoValue);
} else {
localStorage.removeItem(STORAGE_KEY);
}
}
}, true);
}
};
window.trackPromoCode();
}
if(tC.dedup.ValidRules('436')){
tC.launchTag(436, 'Plus de croix plus de bouton', 26, 5666, 10, 18);
// *** Plus de croix plus de bouton ***
window.hideSatisfactionCloseButton = function() {
if (document.getElementById('hide-satisfaction-close-style')) {
return;
}
var style = document.createElement('style');
style.id = 'hide-satisfaction-close-style';
style.type = 'text/css';
style.innerHTML = '[aria-label="Enquête de satisfaction"] button[aria-label="Fermer"] { display: none !important; }';
document.getElementsByTagName('head')[0].appendChild(style);
};
window.hideSatisfactionCloseButton();
window.hidePageExpectationCloseButton = function() {
if (document.getElementById('hide-page-expectation-close-style')) return;
var style = document.createElement('style');
style.id = 'hide-page-expectation-close-style';
style.type = 'text/css';
style.innerHTML = '.tw-bg-white.tw-border-primary > .tw-flex.tw-justify-between.tw-items-center:has(> p.tw-font-weight-600:only-of-type):has(> .tw-shrink-0 > button:nth-of-type(3):last-of-type) > .tw-shrink-0 > button:nth-of-type(3):has(> i.fa-x) { display: none !important; }';
document.head.appendChild(style);
};
window.hidePageExpectationCloseButton();
window.clear_reset = function () {
var KEYS = [
'nps-widget-pdp',
'nps-widget-plp-search',
'nps-widget-plp-category',
'nps-widget-plp-promotions'
];
function isTargeted(k) {
return KEYS.indexOf(String(k)) !== -1 || String(k).indexOf('nps-widget-') === 0;
}
var removed = [];
// 1) Purge des flags déjà posés (réponse OUI/NON ou fermeture)
[sessionStorage, localStorage].forEach(function (store) {
Object.keys(store).forEach(function (k) {
if (isTargeted(k)) { store.removeItem(k); removed.push(k); }
});
});
// 2) Neutralisation de la persistance, une seule fois
if (!Storage.prototype.__npsPatched) {
var nativeSetItem = Storage.prototype.setItem;
var nativeGetItem = Storage.prototype.getItem;
Storage.prototype.setItem = function (k, v) {
if (isTargeted(k)) { return; }
return nativeSetItem.call(this, k, v);
};
Storage.prototype.getItem = function (k) {
if (isTargeted(k)) { return null; }
return nativeGetItem.call(this, k);
};
Storage.prototype.__npsPatched = true;
}
return removed;
};
window.clear_reset();
}


//TAG KILLING


function tc_events_10(tc_elt,tc_id_event,tc_array_events){
tc_array_events["id"] = tc_id_event;
(function(){
var l = 'delivery_option|block_message|order_amount_tf|commercials_list|event_name|kpi_strategy|items|event_type|event_user_action|method|funnel_type|value|step_name|validation_status|search_term|search_method|search_field|filter|sharing_method|content_type|item_id|agency_name|file_name|transaction_id|tax|currency|shipping|affiliation|coupon|AB_Test_Principal|promo_code|email|btnDisponibilite|category|action|label|page_name|list_products|product_brand|product_id|product_name|product_price|product_quantity|product_promo|product_ean|commercial_type|commercial_name|commercial_position|commercial_creative|product|products|page_path|products_added|split_products|order_products|user|order_shipping_method|env_template|order_id|payment_method|searched_agency|number_agency_results|main_cta|POR_status|Days_since_POR|shipping_fees|order_type|id|buton_name|type'.split('|');
for(var k in l){if(!tc_array_events.hasOwnProperty(l[k])){tc_array_events[l[k]]='';}}
})();


if(tc_array_events["id"] == 'Event'){

tC.launchTag('eEvent', 'UA to GA4 - Event', '-1', '5666', '10');

try{
if ('true' == tC.internalvars.performanceConsent && 'pause'!='run') {
var T = tc_array_events;
var pagePath = window.location.pathname;
if ( Helper_isEmpty(T['event_name']) ) {
var event_name = GA4_CONVERTER.event_name(T);
var ep = {};
ep.event_tag = 'UA to GA4 - Event / '+event_name; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
ep.segment_searchVisit = sessionStorage.getItem('userSearchSegment');
if (GA4_CONVERTER.event_name(T) === 'view_item_list' && (pagePath.includes('/c/') || pagePath.includes('/search'))) {
return;
}
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page);
ep.event_category  = T['category'];
ep.event_action   = T['action'];
ep.event_label   = T['label'];
ep.kpi_strategy  = GA4_CONVERTER['kpi_strategy'](T);
ep.event_type   = GA4_CONVERTER['event_type'](T);
ep.event_user_action = GA4_CONVERTER['event_user_action'](T);
if (ep.event_action && (ep.event_action.includes('Nouveau_Achat_Agence')||ep.event_action.includes('Nouveau_Achat_GlobalV2')||ep.event_action.includes('Premier_Achat_GlobalV2'))) {
ep.value = T['value'];
}
switch(event_name){
case 'generic_interaction':
case 'wts_interaction':
case 'soluplus_interaction':
case 'account_interaction':
case 'slider_interaction':
case 'pagination_navigation':
case 'subscribe':
case 'unsubscribe':
case 'discover':
break;
case 'filter_interaction':
ep.filter = GA4_CONVERTER.filter(T);
break;
case 'video_start':
break;
case 'share':
ep.sharing_method = GA4_CONVERTER.sharing_method(T);
ep.content_type = GA4_CONVERTER.content_type(T);
ep.item_id = GA4_CONVERTER.item_id(T);
break;
case 'view_search_results':
ep.event_label = GA4_CONVERTER.event_label(T);
ep.event_action = GA4_CONVERTER.event_action(T);
ep.search_results_number = GA4_CONVERTER.search_results_number(T);
break;
case 'file_download':
ep.file_name = GA4_CONVERTER.file_name(T);
break;
case 'search':
ep.search_term = GA4_CONVERTER.search_term(T);
ep.search_method = GA4_CONVERTER.search_method(T);
ep.search_field = GA4_CONVERTER.search_field(T);
break;
case 'sign_up_start':
case 'sign_up_error':
case 'sign_up_step':
ep.funnel_type = GA4_CONVERTER.funnel_type(T);
ep.step_name = GA4_CONVERTER.step_name(T);
ep.validation_status = GA4_CONVERTER.validation_status(T); // erreur
ep.method = GA4_CONVERTER.method(T); // erreur
break;
case 'login':
case 'sign_up':
ep.method = GA4_CONVERTER.method(T);
ep.funnel_type = GA4_CONVERTER.funnel_type(T);
ep.step_name = GA4_CONVERTER.step_name(T);
ep.validation_status = GA4_CONVERTER.validation_status(T);
case 'form_submit':
ep.funnel_type = GA4_CONVERTER.funnel_type(T);
ep.step_name = GA4_CONVERTER.step_name(T);
ep.validation_status = GA4_CONVERTER.validation_status(T);
break;
case 'agency_interaction':
case 'agency_select':
case 'agency_add_to_wishlist':
case 'agency_contact':
case 'agency_rdv':
case 'show_product_availability':
ep.agency_name = GA4_CONVERTER.agency_name(T);
break;
case 'delete_wishlist':
case 'ask_for_informations':
case 'create_alert':
case 'brand_favorite':
case 'show_product_preview':
case 'see_all_products':
case 'export_to_quotation':
case 'validate_quotation':
case 'select_quantitative_price':
case 'new_wishlist':
case 'cart_interaction':
case 'order_request_interaction':
case 'validate_payment_facility':
case 'add_promo_code':
case 'validate_price':
break;
case 'checkout_interaction':
ep.funnel_type = GA4_CONVERTER.funnel_type(T);
ep.step_name = GA4_CONVERTER.step_name(T);
break;
case 'checkout_option':
ep.frais_livraison = T['frais_livraison'];
ep.delai_livraison = T['delai_livraison'];
ep.flag_frais_livraison = T['flag_frais_livraison'];
ep.frais_livraison_metric = Number(T['frais_livraison_metric']);
ep.delai_livraison_metric = Number(T['delai_livraison_metric']);
ep.montant_panier = Number(T['montant_panier']);
ep.montant_panier_ttc = Number(T['montant_panier_ttc']);
break;
case 'add_shipping_info':
case 'add_payment_info':
break;
case 'view_item_list':
case 'view_item':
case 'add_to_wishlist':
case 'select_content':
case 'select_item':
case 'view_cart':
case 'add_to_cart':
case 'remove_from_cart':
case 'begin_checkout':
case 'purchase':
case 'refund':   
ep.items = GA4_CONVERTER.items_products(T);
ep.AB_Test_Principal = window.cookieValue_Moteur;
if(ep.env_template === "Fiche produit" && ep.event_action ==="Ajout au panier"){
ep.items[0].quantity = "1"
ep.items[0].nb_avis = window.reviewsCount;
ep.items[0].note_avis = window.ratingValue;
}
if(ep.env_template === "Mon Compte" && ep.event_action ==="Mon compte - Ajout au panier"){
if(ep.items){ep.items[0].quantity = "1"}
}
if(window.stock_suivi){
ep.stock_suivi = window.stock_suivi}
break;
case 'view_promotion':
case 'select_promotion':
ep.items = GA4_CONVERTER.items_promotions(T);
break;
}
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (UA to GA4 - Event)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
gtag('event', event_name, ep);
} // fin du test si le tc_array_event contient la clé event_name
} // fin de cookie consent performance
}catch(e){
}



}


if(tc_array_events["id"] == 'Pageview'){

tC.launchTag('ePageview', 'UA to GA4 - Pageview', '-1', '5666', '10');

try{
if ('true' == tC.internalvars.performanceConsent) {
var T = tc_array_events;
if ( Helper_isEmpty(T['event_name']) ) {
var event_name = 'page_view'
var ep = {};
ep.event_tag = 'UA to GA4 - Pageview / page_view'; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
ep.segment_searchVisit = sessionStorage.getItem('userSearchSegment');
if(tc_array_events["env_template"] !== null) { 
if(tc_vars["env_template"]==="Tunnel de paiement - livraison"){
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;  
}else{
var ep_default_page = tC.internalvars.ga4_ep_virtual_page;}
ep.env_template = tc_array_events['env_template'];//tc_array_events["env_template"];
ep = Object.assign(ep, ep_default_page);}
else {var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page);}
ep.page_path = tc_array_events["page_path"];
ep.page_title = tc_array_events["page_name"];
if(ep.page_title.match("^Mon devis N.*")) { 
ep.main_cta = tc_array_events["Main_CTA"];}
else {ep.main_cta = tc_array_events["main_CTA"];}
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (UA to GA4 - Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
var _p = tc_array_events["page_path"] || "";
if (_p.indexOf("/commande/livraison") !== -1 || _p.indexOf("/commande/paiement") !== -1 || _p.indexOf("/commande/confirmation") !== -1) {
var spPV = tc_array_events["split_products"];
if (Array.isArray(spPV)) {
ep.is_split = spPV.length > 1 ? 1 : 0;
ep.split_count = spPV.length;
ep.order_shipping_method = tc_array_events["order_shipping_method"] || "";
}
}
if (document.location.hostname.includes('dispart') ) {
gtag('event', event_name, {
send_to: tC.internalvars.ga4_stream_id,
event_tag: 'UA to GA4 - Pageview / page_view'
});
} else {
gtag('event', event_name, ep);
}
switch(true) {
case '' != T['list_products'] && tc_vars['env_template'] == 'Fiche produit' :
window.avis_client();
event_name = 'view_item';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec = Object.assign({}, ec, ep); // Ajoute explicitement les propriétés de ep
ec.event_tag = 'UA to GA4 - Pageview / view_item'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(T);
ec.items[0].nb_avis = window.reviewsCount;
ec.items[0].note_avis = window.ratingValue;
if (tc_array_events.main_cta && Array.isArray(tc_array_events.main_cta) && tc_array_events.main_cta.length > 0) {
ec.main_cta = tc_array_events.main_cta[0];
ec.product_instock = tc_array_events.list_products[0].product_instock;
} else {
ec.main_cta = "Default Main CTA";
}
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 - Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
gtag('event', event_name, ec);
break;
case tc_vars['list_products'].length:
event_name = 'view_item_list';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec = Object.assign({}, ec, ep); // Ajoute explicitement les propriétés de ep
ec.event_tag = 'UA to GA4 - Pageview / view_item_list'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(window['tc_vars']);
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 - Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
gtag('event', event_name, ec);
break;
case tc_vars['commercials_list'].length:
event_name = 'view_promotion';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec = Object.assign({}, ec, ep); // Ajoute explicitement les propriétés de ep
ec.event_tag = 'UA to GA4 - Pageview / view_promotion'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_promotions(tc_array_events);
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 - Pageview)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
gtag('event', event_name, ec);
break;
case 'Tunnel de paiement - confirmation' == T['env_template']:
event_name = 'purchase';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec = Object.assign({}, ec, ep); // Ajoute explicitement les propriétés de ep
ec.event_tag = 'UA to GA4 - Pageview / purchase'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_products(T) || [];
var amount = 0;
for (var i=0; i<T['split_products'].length; i++) {
var a = T['split_products'][i]['split_amount_tf'].replace(',','.');
amount += parseFloat(a);
}
ec.transaction_id = T['order_id'];
ec.affiliation  = undefined;
ec.value   = amount;
ec.tax    = undefined;
ec.shipping  = undefined;
ec.currency  = 'EUR';
ec.coupon   = undefined;
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 - Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
ep = Object.assign(ep, ep_default_page)
var sp = T['split_products'];
if (Array.isArray(sp)) {
ec.is_split = sp.length > 1 ? 1 : 0;
ec.split_count = sp.length;
ec.order_shipping_method = T['order_shipping_method'] || "";
}
gtag('event', event_name, ec);
localStorage.setItem('Nouveau_compte_clientV2', 'avec_achat_web');
break;
}
} // fin du test si le tc_array_event contient la clé event_name
} // fin de cookie consent performance
}catch(e){
}



}


if(tc_array_events["id"] == 'Pageview'){

tC.launchTag('ePageview', 'GA4 - page_view', '-1', '5666', '10');

try{
if ('true' == tC.internalvars.performanceConsent) {
var event_name = tc_array_events["event_name"]
if ( !Helper_isEmpty(event_name)&& event_name == 'page_view') {
var ep = {};
ep.event_tag = 'GA4 - page_view / page_view'; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page);
ep.page_path = tc_array_events["page_path"];
ep.page_title = tc_array_events["page_name"];
ep.segment_search = sessionStorage.getItem('userSegment');
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (GA4 - page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
if (document.location.hostname.includes('dispart') ) {
gtag('event', event_name, {
send_to: tC.internalvars.ga4_stream_id,
event_tag: 'GA4 - page_view / page_view'
});
} else {
gtag('event', event_name, ep);
}
} // fin du test : SI la clé 'event_name' existe et que celle-ci == 'page_view'
} // fin de cookie consent performance
}catch(e){
}



}


if(tc_array_events["id"] == 'Event'){

tC.launchTag('eEvent', 'GA4 - events', '-1', '5666', '10');

try{
if ('true' == tC.internalvars.performanceConsent) {
var event_name = tc_array_events["event_name"];
if (location.hostname.indexOf('punchout') !== -1 &&
tc_array_events["action"] === "Export Panier" &&
document.querySelector('[data-automation-id="btn-export-cart"].btn_disabled')) throw 0;
if ( !Helper_isEmpty(event_name) && event_name != 'page_view') {
var ep = {};
ep.event_tag = 'GA4 - events / '+event_name; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page);
ep.event_category    = tc_array_events["category"];
ep.event_action    = tc_array_events["action"];
ep.event_label     = tc_array_events["label"];
ep.kpi_strategy    = tc_array_events["kpi_strategy"];
ep.event_type    = tc_array_events["event_type"];
ep.event_user_action  = tc_array_events["event_user_action"];
switch(event_name){
case 'generic_interaction':
case 'wts_interaction':
case 'soluplus_interaction':
case 'account_interaction':
case 'slider_interaction':
case 'pagination_navigation':
case 'subscribe':
case 'unsubscribe':
case 'discover':
break;
case 'filter_interaction':
ep.filter     = tc_array_events["filter"];
break;
case 'video_start':
break;
case 'share':
ep.sharing_method   = tc_array_events["sharing_method"];
ep.content_type   = tc_array_events["content_type"];
ep.item_id     = tc_array_events["item_id"];
break;
case 'view_search_results':
ep.event_label   = tc_array_events["label"];
ep.action   =  tc_array_events["action"];
ep.search_results_number  = tc_vars["search_results_number"];
break;        
case 'file_download':
ep.file_name    = tc_array_events["file_name"];
break;
case 'search':
ep.search_term    = tc_array_events["search_term"];
ep.search_method   = tc_array_events["search_method"];
ep.search_field   = tc_array_events["search_field"];
ep.search_results_number  = tc_vars["search_results_number"];
break;
case 'login':
case 'sign_up':
case 'sign_up_start':
case 'sign_up_error':
case 'sign_up_step':
ep.funnel_type    = tc_array_events["funnel_type"];
ep.step_name    = tc_array_events["step_name"];
ep.validation_status  = tc_array_events["validation_status"];
ep.method     = tc_array_events["method"];
break;
case 'form_submit':
ep.funnel_type    = tc_array_events["funnel_type"];
ep.step_name    = tc_array_events["step_name"];
ep.validation_status  = tc_array_events["validation_status"];
break;
case 'agency_interaction':
case 'agency_select':
case 'agency_add_to_wishlist':
case 'agency_contact':
case 'agency_rdv':
case 'show_product_availability':
ep.agency_name    = tc_array_events["agency_name"];
break;
case 'delete_wishlist':
case 'ask_for_informations':
case 'create_alert':
case 'brand_favorite':
case 'show_product_preview':
case 'see_all_products':
case 'export_to_quotation':
case 'validate_quotation':
case 'select_quantitative_price':
case 'new_wishlist':
case 'cart_interaction':
case 'order_request_interaction':
case 'validate_payment_facility':
case 'add_promo_code':
case 'validate_price':
break;
case 'checkout_interaction':
ep.funnel_type    = tc_array_events["funnel_type"]; //  'Checkout'
ep.step_name    = tc_array_events["step_name"];
break;
case 'add_shipping_info':
case 'add_payment_info':
break;
case 'view_item_list':
case 'view_item':
case 'add_to_wishlist':
case 'select_content':
case 'view_cart':
case 'add_to_cart':
case 'remove_from_cart':
case 'begin_checkout':
case 'view_promotion':
case 'select_promotion':
ep.items     = tc_array_events["items"];
break;
case 'purchase':
case 'refund':
ep.items     = tc_array_events["items"];
ep.transaction_id   = tc_array_events["transaction_id"];
ep.value     = tc_array_events["value"];
ep.tax      = tc_array_events["tax"];
ep.shipping    = tc_array_events["shipping"];
ep.currency    = tc_array_events["currency"];
ep.coupon     = tc_array_events["coupon"];
break;
}
if ('true' == 'false') {
(function() {
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (GA4 - events)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
})()
}
gtag('event', event_name, ep);
} // fin du test : SI la clé 'event_name' existe et que celle-ci != 'page_view'
} // fin de cookie consent performance
}catch(e){
}



}


if(tc_array_events["id"] == 'Pageview'){

tC.launchTag('ePageview', 'CommandersAct - Push new event - pageview', '-1', '5666', '10');

try {
if (this !== window){
JSON.stringify(this); // test de circularité
tC.event.pageview_global(this, tc_array_events);
} else {
tC.event.pageview_global({}, tc_array_events);
}
} catch (e){
tC.event.pageview_global({}, tc_array_events);
}



}


if(tc_array_events["id"] == 'Pageview'){

tC.launchTag('ePageview', 'Event_delai_livraison', '-1', '5666', '10');


}


if(tc_array_events["id"] == 'Event'){

tC.launchTag('eEvent', 'OneTag - event (version GA4 native)', '-1', '5666', '10');

var collectionDomain = tC.internalvars.ss_collectDomain;
}


if(tc_array_events["id"] == 'Pageview'){

tC.launchTag('ePageview', 'OneTag - page_view (version GA4 native)', '-1', '5666', '10');

var collectionDomain = tC.internalvars.ss_collectDomain;
var tag_pause = 'No' 
if (tag_pause == "No"){
if (tc_vars["env_site"] == "dispart"){
try{
if ('true' == tC.internalvars.performanceConsent){
var event_name = tc_array_events["event_name"]
if ( !Helper_isEmpty(event_name)&& event_name == 'page_view'){
var ep = {};
ep.event_tag = 'OneTag - page_view (version GA4 native) / page_view'; // debug server-side tracking
var ep_default_page = {
'env_template': ''+tc_vars['env_template']+'',
'user_profile_page': ''+tc_vars['user_profile']+'',  
'env_work': ''+tc_vars['env_work']+'',
'page_name': ''+tc_vars['page_name']+'',
'page_cat1': ''+tc_vars['page_cat1']+'',
'page_cat2': ''+tc_vars['page_cat2']+'',
'page_cat3': ''+tc_vars['page_cat3']+'',
'page_cat4': ''+tc_vars['page_cat4']+''
};
ep_default_page.page_type = ep_default_page.env_template;
ep = Object.assign(ep, ep_default_page);
ep.page_path = tc_array_events["page_path"];
ep.page_title = tc_array_events["page_name"];
if ('true' == 'false'){
(function(){
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (GA4 - Onetag page_view)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
cact('trigger','page_view', ep, 
{
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: collectionDomain
});
} // fin du test : SI la clé 'event_name' existe et que celle-ci == 'page_view'
} // fin de cookie consent performance
}catch(e){
}
}
}



}


if(tc_array_events["id"] == 'Event'){

tC.launchTag('eEvent', 'OneTag - event (version UA to GA4)', '-1', '5666', '10');

var collectionDomain = tC.internalvars.ss_collectDomain
}


if(tc_array_events["id"] == 'Pageview'){

tC.launchTag('ePageview', 'OneTag - page_view (version UA to GA4)', '-1', '5666', '10');

var collectionDomain = tC.internalvars.ss_collectDomain;
if (tag_pause != "pause"){
if (tc_vars["env_site"] == "dispart"){
try{
if ('true' == tC.internalvars.performanceConsent){
var T = tc_array_events;
tC.log(tc_array_events);
tC.log("UA to GA4 One tag Pageview ");
if ( Helper_isEmpty(T['event_name']) ){
var event_name = 'page_view';
var ep = {};
ep.event_tag = 'OneTag - page_view (version UA to GA4) / page_view'; // debug server-side tracking
if(tc_vars["env_template"] !== null){
var ep_default_page = tC.internalvars.ga4_ep_virtual_page;
ep_default_page.env_template = tc_array_events['env_template'];//tc_vars["env_template"];
ep_default_page.page_type = ep_default_page.env_template;
ep = Object.assign(ep, ep_default_page);
} else {
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep_default_page.page_type = ep_default_page.env_template;
ep = Object.assign(ep, ep_default_page);
}
ep.page_path = tc_array_events["page_path"];
ep.page_title = tc_array_events["page_name"];
if(ep.page_title.match("^Mon devis N.*")){
ep.main_cta = tc_array_events["Main_CTA"];
} else {
ep.main_cta = tc_array_events["main_CTA"];
}
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ep));
debug.event = event_name+' (UA to GA4 - Onetag Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})();
}
cact('trigger',event_name,{
event_tag: 'OneTag - page_view (version UA to GA4) / page_view',
page_type: tc_vars['env_template']
}, 
{
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: collectionDomain
});
switch(true){
case '' != T['list_products'] && tc_vars["env_template"] == 'Fiche produit' :
event_name = 'view_item';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view (version UA to GA4) / view_item'; // debug server-side tracking
ec.items = convertGA4toOTitems( GA4_CONVERTER.items_products(T) );
ec.currency = "EUR";
ec.value = ec.items[0].price;
var onetag_up = {user : tC.internalvars.onetag_up};
ec = Object.assign(ec,onetag_up);
tC.log("UA to GA4 One Tag Pageview - view_item");
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 -OneTag Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})();
}
cact('trigger',event_name, ec, {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: collectionDomain
}); // ONETAG EC
break;
case tc_vars["list_products"].length:
event_name = 'view_item_list';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view (version UA to GA4) / view_item_list'; // debug server-side tracking
ec.items = convertGA4toOTitems( GA4_CONVERTER.items_products(tc_vars) ); //GA4_CONVERTER.items_products(window['tc_vars']);
ec.value = 0 // should be the some of item price
ec.currency = "EUR"
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 -Onetag Pageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})();
}
cact('trigger',event_name, ec, {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: collectionDomain
});
break;
case tc_vars["commercials_list"].length:
event_name = 'view_promotion';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view (version UA to GA4) / view_promotion'; // debug server-side tracking
ec.items = GA4_CONVERTER.items_promotions(tc_array_events);
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 - Onetag Pageview)';
debug._tc_array_events = tc_array_events || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})();
}
cact('trigger',event_name, ec, {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: collectionDomain
});
break;
case 'Tunnel de paiement - confirmation' == T['env_template']:
event_name = 'purchase';
var ec = JSON.parse(JSON.stringify(ep)); // clone
ec.event_tag = 'OneTag - page_view (version UA to GA4) / purchase'; // debug server-side tracking
ec.items = convertGA4toOTitems( GA4_CONVERTER.items_products(T) ) || [];
var amount = 0;
for (var i=0; i<T['split_products'].length; i++){
var a = T['split_products'][i]['split_amount_tf'].replace(',','.');
amount += parseFloat(a);
}
ec.transaction_id = T['order_id'];
ec.affiliation  = undefined;
ec.value        = amount;
ec.tax          = undefined;
ec.shipping     = undefined;
ec.currency     = 'EUR';
ec.coupon       = undefined;
ec.type = "online";
ec.payment_method = "";
ec.status = "";
if ('true' == 'true'){
(function(){
var debug = JSON.parse(JSON.stringify(ec));
debug.event = event_name+' (UA to GA4 - OnetagPageview)';
debug._tc_array_events = T || {};
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(debug);
})()
}
cact('trigger',event_name, ec, {
siteId: "5666",
sourceKey: "a81848be-b53d-44a9-9a50-33493aa5a5e5",
collectionDomain: collectionDomain
});
break;
} // switch case
} // if event_name
} // if performance consent
} catch(e) {tC.log(e);}
} // if dispart
} // if tag pause



}


if(tc_array_events["id"] == 'Event'){

tC.launchTag('eEvent', 'Event_auto_track', '-1', '5666', '10');

}


if(tc_array_events["id"] == 'Event'){

tC.launchTag('eEvent', 'CommandersAct - Push new event - event', '-1', '5666', '10');

try {
if (this !== window){
JSON.stringify(this); // test de circularité
tC.event.event_global(this, tc_array_events);
} else {
tC.event.event_global({}, tc_array_events);
}
} catch (e){
tC.event.event_global({}, tc_array_events);
}



}


if(tc_array_events["id"] == 'event'){

tC.launchTag('eevent', 'Test', '-1', '5666', '10');

if((tc_vars["env_site"]).includes("Nextpulse")){
try{
var event_name = tc_array_events["event_name"];
var ep = {};
ep.event_tag = 'GA4 - events / '+event_name; // debug server-side tracking
ep.send_to = tC.internalvars.ga4_stream_id;
ep.segment_search = sessionStorage.getItem('userSegment');
var ep_default_page = tC.internalvars.ga4_ep_page_by_default;
ep = Object.assign(ep, ep_default_page);
ep.event_category    = tc_array_events["category"];
ep.event_action    = tc_array_events["action"];
ep.event_label     = tc_array_events["label"];
ep.kpi_strategy    = tc_array_events["kpi_strategy"];
ep.event_type    = tc_array_events["event_type"];
ep.event_user_action  = tc_array_events["event_user_action"];
switch(event_name){
case 'generic_interaction':
case 'wts_interaction':
case 'soluplus_interaction':
case 'account_interaction':
case 'slider_interaction':
case 'pagination_navigation':
case 'subscribe':
case 'unsubscribe':
case 'discover':
break;
case 'filter_interaction':
ep.filter     = tc_array_events["filter"];
break;
case 'video_start':
break;
case 'share':
ep.sharing_method   = tc_array_events["sharing_method"];
ep.content_type   = tc_array_events["content_type"];
ep.item_id     = tc_array_events["item_id"];
break;
case 'view_search_results':
ep.event_label   = tc_array_events["label"];
ep.action   =  tc_array_events["action"];
ep.search_results_number  = tc_vars["search_results_number"];
break;        
case 'file_download':
ep.file_name    = tc_array_events["file_name"];
break;
case 'search':
ep.search_term    = tc_array_events["search_term"];
ep.search_method   = tc_array_events["search_method"];
ep.search_field   = tc_array_events["search_field"];
ep.search_results_number  = tc_vars["search_results_number"];
break;
case 'login':
case 'sign_up':
case 'sign_up_start':
case 'sign_up_error':
case 'sign_up_step':
ep.funnel_type    = tc_array_events["funnel_type"];
ep.step_name    = tc_array_events["step_name"];
ep.validation_status  = tc_array_events["validation_status"];
ep.method     = tc_array_events["method"];
break;
case 'form_submit':
ep.funnel_type    = tc_array_events["funnel_type"];
ep.step_name    = tc_array_events["step_name"];
ep.validation_status  = tc_array_events["validation_status"];
break;
case 'agency_interaction':
case 'agency_select':
case 'agency_add_to_wishlist':
case 'agency_contact':
case 'agency_rdv':
case 'show_product_availability':
ep.agency_name    = tc_array_events["agency_name"];
break;
case 'delete_wishlist':
case 'ask_for_informations':
case 'create_alert':
case 'brand_favorite':
case 'show_product_preview':
case 'see_all_products':
case 'export_to_quotation':
case 'validate_quotation':
case 'select_quantitative_price':
case 'new_wishlist':
case 'cart_interaction':
case 'order_request_interaction':
case 'validate_payment_facility':
case 'add_promo_code':
case 'validate_price':
break;
case 'checkout_interaction':
ep.funnel_type    = tc_array_events["funnel_type"]; //  'Checkout'
ep.step_name    = tc_array_events["step_name"];
break;
case 'add_shipping_info':
case 'add_payment_info':
break;
case 'view_item_list':
case 'view_item':
case 'add_to_wishlist':
case 'select_content':
case 'view_cart':
case 'add_to_cart':
case 'remove_from_cart':
case 'begin_checkout':
case 'purchase':
case 'refund':
case 'view_promotion':
case 'select_promotion':
ep.items     = tc_array_events["items"];
break;
case 'purchase':
case 'refund':
ep.items     = tc_array_events["items"];
ep.transaction_id   = tc_array_events["transaction_id"];
ep.value     = tc_array_events["value"];
ep.tax      = tc_array_events["tax"];
ep.shipping    = tc_array_events["shipping"];
ep.currency    = tc_array_events["currency"];
ep.coupon     = tc_array_events["coupon"];
break;
}
gtag('event', event_name, ep);
}catch(e){
}
}



}


}

            tC.onDomReady(function() {
                tC.container_5666_10.eventlisteners();
tC.eventTarget.dispatchEvent('container-ready');
tC.eventTarget.dispatchEvent('container_5666_10_ready');
tC.executeListener22_5666_10();
tC.executeListener31_5666_10();

            });