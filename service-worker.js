"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/SSUIAssignment4/index.html","e428e820aeeb9d7c1ab75e9d699e2512"],["/SSUIAssignment4/static/css/main.2cdda097.css","ab1897ebe065927a96699df35b78e8b0"],["/SSUIAssignment4/static/js/main.42bf8f03.js","64c706019ce636ac3b27e7e96e24b966"],["/SSUIAssignment4/static/media/blueHead.7013bb2f.png","7013bb2fae123e0a35510449ab91d010"],["/SSUIAssignment4/static/media/blueKnit.12ae2afc.png","12ae2afc164634c4fe031f74cf066d0b"],["/SSUIAssignment4/static/media/bluePrint.5b5a44cb.png","5b5a44cbc220a6f4ab00a2a8a97aa918"],["/SSUIAssignment4/static/media/greenHead.393607a5.png","393607a5b1aefa2f69aa3a8bcd2ec37b"],["/SSUIAssignment4/static/media/greenKnit.81a8b410.png","81a8b410093c8b1cc620884a1e7481e6"],["/SSUIAssignment4/static/media/greenPrint.a522e991.png","a522e9916ee721fdc5f1439e1ed97503"],["/SSUIAssignment4/static/media/hero.99433c32.png","99433c32b528ac056ecdda256a4dbb75"],["/SSUIAssignment4/static/media/redHead.68ca3b95.png","68ca3b9545eb64b6bd7014c903d9db15"],["/SSUIAssignment4/static/media/redKnit.b01e92ec.png","b01e92ecda8dfad600f701734ea0a87f"],["/SSUIAssignment4/static/media/redPrint.ed7d6569.png","ed7d6569e07f7d7f45671b0c3fc9b17f"],["/SSUIAssignment4/static/media/yellowHead.c7e914bc.png","c7e914bc6366e1f462c91c8d26e7227f"],["/SSUIAssignment4/static/media/yellowKnit.64d4bd5c.png","64d4bd5cdba3fa5a15842fedc2d2d12b"],["/SSUIAssignment4/static/media/yellowPrint.b3823e77.png","b3823e779a24294c94a258b424eed86e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/SSUIAssignment4/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});