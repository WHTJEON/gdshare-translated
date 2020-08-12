const CONFIG = {
    PASSKEY: "this is your passkey", // 管理员网页登录密钥，请自行修改，尽量复杂
    HASHKEY: "this is your hash key", // 用于校验生成的下载链接和分享链接，请自行修改，尽量复杂。修改后之前生成的下载和分享链接都会失效
    RETRY_LIMIT: 5, // 有时调用 google drive api 读取目录时会报错，这里设置最多允许重试的次数
    PAGESIZE: 100, // 读取列表的单页对象数，官方限制最大 1000
    AUTH: {
        client_id: "insert_your_client_id", // 这三项是你的google帐号个人授权信息，和goindex相同
        client_secret: "insert_your_client_secret", // 同上必填
        refresh_token: "insert_your_refresh_token", // 同上必填
        expires: 0,
        access_token: "" // 可不填
    }
}

!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var i=n(1),r=n(10);function s(t,e){return 55296==(64512&t.charCodeAt(e))&&(!(e<0||e+1>=t.length)&&56320==(64512&t.charCodeAt(e+1)))}function o(t){return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}function a(t){return 1===t.length?"0"+t:t}function h(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}e.inherits=r,e.toArray=function(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var n=[];if("string"==typeof t)if(e){if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),r=0;r<t.length;r+=2)n.push(parseInt(t[r]+t[r+1],16))}else for(var i=0,r=0;r<t.length;r++){var o=t.charCodeAt(r);o<128?n[i++]=o:o<2048?(n[i++]=o>>6|192,n[i++]=63&o|128):s(t,r)?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++r)),n[i++]=o>>18|240,n[i++]=o>>12&63|128,n[i++]=o>>6&63|128,n[i++]=63&o|128):(n[i++]=o>>12|224,n[i++]=o>>6&63|128,n[i++]=63&o|128)}else for(r=0;r<t.length;r++)n[r]=0|t[r];return n},e.toHex=function(t){for(var e="",n=0;n<t.length;n++)e+=a(t[n].toString(16));return e},e.htonl=o,e.toHex32=function(t,e){for(var n="",i=0;i<t.length;i++){var r=t[i];"little"===e&&(r=o(r)),n+=h(r.toString(16))}return n},e.zero2=a,e.zero8=h,e.join32=function(t,e,n,r){var s=n-e;i(s%4==0);for(var o=new Array(s/4),a=0,h=e;a<o.length;a++,h+=4){var u;u="big"===r?t[h]<<24|t[h+1]<<16|t[h+2]<<8|t[h+3]:t[h+3]<<24|t[h+2]<<16|t[h+1]<<8|t[h],o[a]=u>>>0}return o},e.split32=function(t,e){for(var n=new Array(4*t.length),i=0,r=0;i<t.length;i++,r+=4){var s=t[i];"big"===e?(n[r]=s>>>24,n[r+1]=s>>>16&255,n[r+2]=s>>>8&255,n[r+3]=255&s):(n[r+3]=s>>>24,n[r+2]=s>>>16&255,n[r+1]=s>>>8&255,n[r]=255&s)}return n},e.rotr32=function(t,e){return t>>>e|t<<32-e},e.rotl32=function(t,e){return t<<e|t>>>32-e},e.sum32=function(t,e){return t+e>>>0},e.sum32_3=function(t,e,n){return t+e+n>>>0},e.sum32_4=function(t,e,n,i){return t+e+n+i>>>0},e.sum32_5=function(t,e,n,i,r){return t+e+n+i+r>>>0},e.sum64=function(t,e,n,i){var r=t[e],s=i+t[e+1]>>>0,o=(s<i?1:0)+n+r;t[e]=o>>>0,t[e+1]=s},e.sum64_hi=function(t,e,n,i){return(e+i>>>0<e?1:0)+t+n>>>0},e.sum64_lo=function(t,e,n,i){return e+i>>>0},e.sum64_4_hi=function(t,e,n,i,r,s,o,a){var h=0,u=e;return h+=(u=u+i>>>0)<e?1:0,h+=(u=u+s>>>0)<s?1:0,t+n+r+o+(h+=(u=u+a>>>0)<a?1:0)>>>0},e.sum64_4_lo=function(t,e,n,i,r,s,o,a){return e+i+s+a>>>0},e.sum64_5_hi=function(t,e,n,i,r,s,o,a,h,u){var c=0,l=e;return c+=(l=l+i>>>0)<e?1:0,c+=(l=l+s>>>0)<s?1:0,c+=(l=l+a>>>0)<a?1:0,t+n+r+o+h+(c+=(l=l+u>>>0)<u?1:0)>>>0},e.sum64_5_lo=function(t,e,n,i,r,s,o,a,h,u){return e+i+s+a+u>>>0},e.rotr64_hi=function(t,e,n){return(e<<32-n|t>>>n)>>>0},e.rotr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0},e.shr64_hi=function(t,e,n){return t>>>n},e.shr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0}},function(t,e){function n(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=n,n.equal=function(t,e,n){if(t!=e)throw new Error(n||"Assertion failed: "+t+" != "+e)}},function(t,e,n){"use strict";var i=n(0),r=n(1);function s(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}e.BlockHash=s,s.prototype.update=function(t,e){if(t=i.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){var n=(t=this.pending).length%this._delta8;this.pending=t.slice(t.length-n,t.length),0===this.pending.length&&(this.pending=null),t=i.join32(t,0,t.length-n,this.endian);for(var r=0;r<t.length;r+=this._delta32)this._update(t,r,r+this._delta32)}return this},s.prototype.digest=function(t){return this.update(this._pad()),r(null===this.pending),this._digest(t)},s.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,n=e-(t+this.padLength)%e,i=new Array(n+this.padLength);i[0]=128;for(var r=1;r<n;r++)i[r]=0;if(t<<=3,"big"===this.endian){for(var s=8;s<this.padLength;s++)i[r++]=0;i[r++]=0,i[r++]=0,i[r++]=0,i[r++]=0,i[r++]=t>>>24&255,i[r++]=t>>>16&255,i[r++]=t>>>8&255,i[r++]=255&t}else for(i[r++]=255&t,i[r++]=t>>>8&255,i[r++]=t>>>16&255,i[r++]=t>>>24&255,i[r++]=0,i[r++]=0,i[r++]=0,i[r++]=0,s=8;s<this.padLength;s++)i[r++]=0;return i}},function(t,e,n){"use strict";var i=n(0).rotr32;function r(t,e,n){return t&e^~t&n}function s(t,e,n){return t&e^t&n^e&n}function o(t,e,n){return t^e^n}e.ft_1=function(t,e,n,i){return 0===t?r(e,n,i):1===t||3===t?o(e,n,i):2===t?s(e,n,i):void 0},e.ch32=r,e.maj32=s,e.p32=o,e.s0_256=function(t){return i(t,2)^i(t,13)^i(t,22)},e.s1_256=function(t){return i(t,6)^i(t,11)^i(t,25)},e.g0_256=function(t){return i(t,7)^i(t,18)^t>>>3},e.g1_256=function(t){return i(t,17)^i(t,19)^t>>>10}},function(t,e,n){"use strict";var i=n(0),r=n(2),s=n(3),o=n(1),a=i.sum32,h=i.sum32_4,u=i.sum32_5,c=s.ch32,l=s.maj32,d=s.s0_256,p=s.s1_256,f=s.g0_256,g=s.g1_256,m=r.BlockHash,y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function w(){if(!(this instanceof w))return new w;m.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=y,this.W=new Array(64)}i.inherits(w,m),t.exports=w,w.blockSize=512,w.outSize=256,w.hmacStrength=192,w.padLength=64,w.prototype._update=function(t,e){for(var n=this.W,i=0;i<16;i++)n[i]=t[e+i];for(;i<n.length;i++)n[i]=h(g(n[i-2]),n[i-7],f(n[i-15]),n[i-16]);var r=this.h[0],s=this.h[1],m=this.h[2],y=this.h[3],w=this.h[4],v=this.h[5],_=this.h[6],b=this.h[7];for(o(this.k.length===n.length),i=0;i<n.length;i++){var x=u(b,p(w),c(w,v,_),this.k[i],n[i]),k=a(d(r),l(r,s,m));b=_,_=v,v=w,w=a(y,x),y=m,m=s,s=r,r=a(x,k)}this.h[0]=a(this.h[0],r),this.h[1]=a(this.h[1],s),this.h[2]=a(this.h[2],m),this.h[3]=a(this.h[3],y),this.h[4]=a(this.h[4],w),this.h[5]=a(this.h[5],v),this.h[6]=a(this.h[6],_),this.h[7]=a(this.h[7],b)},w.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(t,e,n){"use strict";var i=n(0),r=n(2),s=n(1),o=i.rotr64_hi,a=i.rotr64_lo,h=i.shr64_hi,u=i.shr64_lo,c=i.sum64,l=i.sum64_hi,d=i.sum64_lo,p=i.sum64_4_hi,f=i.sum64_4_lo,g=i.sum64_5_hi,m=i.sum64_5_lo,y=r.BlockHash,w=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function v(){if(!(this instanceof v))return new v;y.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=w,this.W=new Array(160)}function _(t,e,n,i,r){var s=t&n^~t&r;return s<0&&(s+=4294967296),s}function b(t,e,n,i,r,s){var o=e&i^~e&s;return o<0&&(o+=4294967296),o}function x(t,e,n,i,r){var s=t&n^t&r^n&r;return s<0&&(s+=4294967296),s}function k(t,e,n,i,r,s){var o=e&i^e&s^i&s;return o<0&&(o+=4294967296),o}function S(t,e){var n=o(t,e,28)^o(e,t,2)^o(e,t,7);return n<0&&(n+=4294967296),n}function $(t,e){var n=a(t,e,28)^a(e,t,2)^a(e,t,7);return n<0&&(n+=4294967296),n}function T(t,e){var n=o(t,e,14)^o(t,e,18)^o(e,t,9);return n<0&&(n+=4294967296),n}function A(t,e){var n=a(t,e,14)^a(t,e,18)^a(e,t,9);return n<0&&(n+=4294967296),n}function q(t,e){var n=o(t,e,1)^o(t,e,8)^h(t,e,7);return n<0&&(n+=4294967296),n}function E(t,e){var n=a(t,e,1)^a(t,e,8)^u(t,e,7);return n<0&&(n+=4294967296),n}function j(t,e){var n=o(t,e,19)^o(e,t,29)^h(t,e,6);return n<0&&(n+=4294967296),n}function R(t,e){var n=a(t,e,19)^a(e,t,29)^u(t,e,6);return n<0&&(n+=4294967296),n}i.inherits(v,y),t.exports=v,v.blockSize=1024,v.outSize=512,v.hmacStrength=192,v.padLength=128,v.prototype._prepareBlock=function(t,e){for(var n=this.W,i=0;i<32;i++)n[i]=t[e+i];for(;i<n.length;i+=2){var r=j(n[i-4],n[i-3]),s=R(n[i-4],n[i-3]),o=n[i-14],a=n[i-13],h=q(n[i-30],n[i-29]),u=E(n[i-30],n[i-29]),c=n[i-32],l=n[i-31];n[i]=p(r,s,o,a,h,u,c,l),n[i+1]=f(r,s,o,a,h,u,c,l)}},v.prototype._update=function(t,e){this._prepareBlock(t,e);var n=this.W,i=this.h[0],r=this.h[1],o=this.h[2],a=this.h[3],h=this.h[4],u=this.h[5],p=this.h[6],f=this.h[7],y=this.h[8],w=this.h[9],v=this.h[10],q=this.h[11],E=this.h[12],j=this.h[13],R=this.h[14],P=this.h[15];s(this.k.length===n.length);for(var z=0;z<n.length;z+=2){var D=R,O=P,H=T(y,w),L=A(y,w),N=_(y,w,v,q,E),I=b(y,w,v,q,E,j),C=this.k[z],W=this.k[z+1],B=n[z],G=n[z+1],U=g(D,O,H,L,N,I,C,W,B,G),J=m(D,O,H,L,N,I,C,W,B,G);D=S(i,r),O=$(i,r),H=x(i,r,o,a,h),L=k(i,r,o,a,h,u);var M=l(D,O,H,L),Y=d(D,O,H,L);R=E,P=j,E=v,j=q,v=y,q=w,y=l(p,f,U,J),w=d(f,f,U,J),p=h,f=u,h=o,u=a,o=i,a=r,i=l(U,J,M,Y),r=d(U,J,M,Y)}c(this.h,0,i,r),c(this.h,2,o,a),c(this.h,4,h,u),c(this.h,6,p,f),c(this.h,8,y,w),c(this.h,10,v,q),c(this.h,12,E,j),c(this.h,14,R,P)},v.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(t,e){function n(t){return[...t].reduce((t,e)=>{const n={};return n[e[0]]=e[1],{...t,...n}},{})}async function i(t,e=1048576){const n=[],i=t.getReader(),r=new TextDecoder;let s=0;for(;e&&s<e;){const{done:t,value:e}=await i.read();if(t)break;s+=e.byteLength,n.push(r.decode(e))}const o=n.join("");return e?o.substring(0,e):o}t.exports={parseRoute:function({host:t=".*",path:e=".*",excludePath:n=null,method:i=[".*"],handler:r,protocol:s=".*",handlerName:o,headers:a={},data:h}){const u=[],c=[],l=t.replace(/(:([^.]+))/g,(t,e,n)=>(u.push(n),"([^.]+)")),d=e.replace(/(:([^/]+))/g,(t,e,n)=>"*"===n.slice(-1)?(c.push(n.slice(0,n.length-1)),"(.*)"):(c.push(n),"([^/]*)")),p=new RegExp(`^${l}$`,"i"),f=new RegExp(`^${d}$`,"i"),g=n?new RegExp(`^${n}$`,"i"):null,m=new RegExp(`^${i.join("|")}$`,"i"),y=new RegExp(`^${s}$`,"i");return{hostVariables:u,pathVariables:c,host:p,path:f,excludePath:g,method:m,protocol:y,handler:r,handlerName:o,headers:a,data:h}},parseRequest:function(t){const e=new URL(t.url),r=n(e.searchParams),s=n(t.headers);return s.host&&(e.hostname=s.host),{body:t.body,headers:s,host:e.host,hostname:e.hostname,href:e.href,json:async e=>JSON.parse(await i(t.body,e)),method:t.method,origin:`${e.protocol}//${e.host}`,path:e.pathname,protocol:e.protocol.slice(0,-1),query:r,querystring:e.search.slice(1),search:e.search,text:async e=>{const n=await i(t.body,e);return"application/x-www-form-urlencoded"===t.headers.get("content-type")?decodeURIComponent(n):n}}}}},function(t,e){t.exports=CONFIG},function(t,e,n){const i=n(9),r=n(17),{wtf:s,bad:o,ok:a}=n(21),{find:h,download:u,get_file_info:c,check_belonging:l,get_all_ancestors:d,ls:p,ls_all:f}=n(22),g=n(23),{PASSKEY:m,HASHKEY:y}=n(7),w="application/vnd.google-apps.folder";function v(t){return i.hmac(i.sha256,y).update(t).digest("hex")}function _({expired:t,id:e,name:n}){const i=t?`expired=${t}&id=${e}`:"id="+e;return`/api/download/${n?encodeURIComponent(n):"noname"}?${i}&sig=${v(i)}`}const b=new r;b.use(async(t,e)=>{try{return await e(t)}catch(e){console.error(e.message);const n=e&&e.response&&e.response.data;n&&console.error(JSON.stringify(n)),o(t,e.message)}}),b.use((async function(t,e){if("post"!==t.request.method.toLowerCase())return e(t);try{t.request.body=await t.request.json()}catch(e){console.log("fail to parse request body to json",e),t.request.body={}}const{passkey:n}=t.request.body;if(t.request.path.startsWith("/api/admin")&&n!==m)return o(t,"invalid passkey");return e(t)})),b.post("/api/folder/link",async t=>{const{id:e,nextPageToken:n,root:i,code:r,expired:s,sig:h,name:u}=t.request.body;if(!(e&&i&&r&&h))return o(t,"invalid request");if(v(s?`expired=${s}&root=${i}&code=${r}`:`root=${i}&code=${r}`)!==h)return o(t,"提取码错误");if(!await l({root:i,id:e}))return o(t,"folder id does not belongs to root");const c=_({expired:s,id:e,name:u});a(t,{link:c})}),b.post("/api/folder/links",async t=>{const{id:e,root:n,code:i,expired:r,sig:s}=t.request.body;if(!(e&&n&&i&&s))return o(t,"invalid request");if(v(r?`expired=${r}&root=${n}&code=${i}`:`root=${n}&code=${i}`)!==s)return o(t,"提取码错误");if(!await l({root:n,id:e}))return o(t,"folder id does not belongs to root");let h=await f(e);h=h.filter(t=>t.mimeType!==w);const u=h.map(t=>_({expired:r,...t}));a(t,{links:u})}),b.post("/api/folder/ls",async t=>{const{id:e,nextPageToken:n,root:i,code:r,expired:s,sig:h}=t.request.body;if(!(e&&i&&r&&h))return o(t,"invalid request");if(v(s?`expired=${s}&root=${i}&code=${r}`:`root=${i}&code=${r}`)!==h)return o(t,"提取码错误");if(!await l({root:i,id:e}))return o(t,"folder id does not belongs to root");let u;if(!n&&(u=await c(e),u.mimeType!==w))return o(t,"未找到相关目录");const d=await p(e,n),f=u&&u.name;a(t,{name:f,list:d})}),b.post("/api/file/info",async t=>{const{id:e}=t.request.body;if(!e)return s(t,"invalid id");try{const n=await c(e);a(t,n)}catch(n){console.log("fail to get file",e,n.message),o(t,"获取文件信息失败")}}),b.post("/api/file/link",async t=>{const{code:e,id:n,expired:i,sig:r,name:h}=t.request.body;if(!n||!e||!r)return s(t,"invalid request");if(i&&Date.now()>Number(i))return o(t,"分享链接已过期");if(v(i?`expired=${i}&id=${n}&code=${e}`:`id=${n}&code=${e}`)!==r)return o(t,"提取码错误");const u=_({expired:i,id:n,name:h});a(t,{link:u})}),b.post("/api/admin/ancestors",async t=>{const{id:e}=t.request.body;if(!e)return o(t,"invalid id");const n=await d(e);a(t,n)}),b.post("/api/admin/link",t=>{let{expired:e,id:n,name:i}=t.request.body;if(!n)return o(t,"id can not be empty");const r=_({expired:e,id:n,name:i});a(t,{link:r})}),b.post("/api/admin/links",t=>{const{expired:e,files:n}=t.request.body;if(!Array.isArray(n))return o(t,"files must be an array");const i=n.map(t=>_({expired:e,...t}));a(t,{links:i})}),b.post("/api/admin/all",async t=>{const{id:e,expired:n}=t.request.body;if(!e)return o(t,"id can not be empty");let i=await f(e);i=i.filter(t=>t.mimeType!==w);const r=i.map(t=>_({expired:n,...t}));a(t,{links:r})}),b.post("/api/admin/auth",t=>{const{passkey:e}=t.request.body;if(e!==m)return o(t,"passkey 错误");a(t,"ok")}),b.post("/api/admin/search",async t=>{const{keyword:e,nextPageToken:n, range}=t.request.body;if(!e)return o(t,"搜索词不能为空");const i=await h(e,n, range);a(t,i)}),b.post("/api/admin/ls",async t=>{const{id:e,nextPageToken:n}=t.request.body;if(!e)return o(t,"invalid folder id");let i;if(!n&&(i=await c(e),i.mimeType!==w))return o(t,"ID对应文件不是目录: "+i.mimeType);const r=await p(e,n);r.name=i&&i.name,r.parent=i&&i.parents&&i.parents[0],a(t,r)}),b.post("/api/admin/share",t=>{const{expired:e,id:n,code:i,is_folder:r}=t.request.body;if(!n||!i)return o(t,"id or code can not be empty");let s=r?"root":"id",h=e?`expired=${e}&${s}=${n}`:`${s}=${n}`;h=h+"&sig="+v(h+"&code="+i),a(t,{link:h})}),b.use((t,e)=>{const{method:n,path:i}=t.request;"GET"!==n||i.startsWith("/api")||(t.status=200,t.set("Content-Type","text/html; charset=utf-8"),t.body=g)}),addEventListener("fetch",t=>{if(new URL(t.request.url).pathname.startsWith("/api/download"))return t.respondWith(function(t){const e=new URL(t.url),[n,i,r]=["expired","id","sig"].map(t=>e.searchParams.get(t));if(!i||!r)return new Response("invalid request",{status:403});if(n&&Date.now()>Number(n))return new Response("link expired",{status:403});if(r!==v(n?`expired=${n}&id=${i}`:"id="+i))return new Response("invalid sig",{status:403});const s=t.headers.get("Range");return u(i,s)}(t.request));t.respondWith(b.resolve(t))})},function(t,e,n){var i=e;i.utils=n(0),i.common=n(2),i.sha=n(11),i.ripemd=n(15),i.hmac=n(16),i.sha1=i.sha.sha1,i.sha256=i.sha.sha256,i.sha224=i.sha.sha224,i.sha384=i.sha.sha384,i.sha512=i.sha.sha512,i.ripemd160=i.ripemd.ripemd160},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}}},function(t,e,n){"use strict";e.sha1=n(12),e.sha224=n(13),e.sha256=n(4),e.sha384=n(14),e.sha512=n(5)},function(t,e,n){"use strict";var i=n(0),r=n(2),s=n(3),o=i.rotl32,a=i.sum32,h=i.sum32_5,u=s.ft_1,c=r.BlockHash,l=[1518500249,1859775393,2400959708,3395469782];function d(){if(!(this instanceof d))return new d;c.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}i.inherits(d,c),t.exports=d,d.blockSize=512,d.outSize=160,d.hmacStrength=80,d.padLength=64,d.prototype._update=function(t,e){for(var n=this.W,i=0;i<16;i++)n[i]=t[e+i];for(;i<n.length;i++)n[i]=o(n[i-3]^n[i-8]^n[i-14]^n[i-16],1);var r=this.h[0],s=this.h[1],c=this.h[2],d=this.h[3],p=this.h[4];for(i=0;i<n.length;i++){var f=~~(i/20),g=h(o(r,5),u(f,s,c,d),p,n[i],l[f]);p=d,d=c,c=o(s,30),s=r,r=g}this.h[0]=a(this.h[0],r),this.h[1]=a(this.h[1],s),this.h[2]=a(this.h[2],c),this.h[3]=a(this.h[3],d),this.h[4]=a(this.h[4],p)},d.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(t,e,n){"use strict";var i=n(0),r=n(4);function s(){if(!(this instanceof s))return new s;r.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}i.inherits(s,r),t.exports=s,s.blockSize=512,s.outSize=224,s.hmacStrength=192,s.padLength=64,s.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h.slice(0,7),"big"):i.split32(this.h.slice(0,7),"big")}},function(t,e,n){"use strict";var i=n(0),r=n(5);function s(){if(!(this instanceof s))return new s;r.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}i.inherits(s,r),t.exports=s,s.blockSize=1024,s.outSize=384,s.hmacStrength=192,s.padLength=128,s.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h.slice(0,12),"big"):i.split32(this.h.slice(0,12),"big")}},function(t,e,n){"use strict";var i=n(0),r=n(2),s=i.rotl32,o=i.sum32,a=i.sum32_3,h=i.sum32_4,u=r.BlockHash;function c(){if(!(this instanceof c))return new c;u.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function l(t,e,n,i){return t<=15?e^n^i:t<=31?e&n|~e&i:t<=47?(e|~n)^i:t<=63?e&i|n&~i:e^(n|~i)}function d(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function p(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}i.inherits(c,u),e.ripemd160=c,c.blockSize=512,c.outSize=160,c.hmacStrength=192,c.padLength=64,c.prototype._update=function(t,e){for(var n=this.h[0],i=this.h[1],r=this.h[2],u=this.h[3],c=this.h[4],w=n,v=i,_=r,b=u,x=c,k=0;k<80;k++){var S=o(s(h(n,l(k,i,r,u),t[f[k]+e],d(k)),m[k]),c);n=c,c=u,u=s(r,10),r=i,i=S,S=o(s(h(w,l(79-k,v,_,b),t[g[k]+e],p(k)),y[k]),x),w=x,x=b,b=s(_,10),_=v,v=S}S=a(this.h[1],r,b),this.h[1]=a(this.h[2],u,x),this.h[2]=a(this.h[3],c,w),this.h[3]=a(this.h[4],n,v),this.h[4]=a(this.h[0],i,_),this.h[0]=S},c.prototype._digest=function(t){return"hex"===t?i.toHex32(this.h,"little"):i.split32(this.h,"little")};var f=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],g=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],m=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],y=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(t,e,n){"use strict";var i=n(0),r=n(1);function s(t,e,n){if(!(this instanceof s))return new s(t,e,n);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(i.toArray(e,n))}t.exports=s,s.prototype._init=function(t){t.length>this.blockSize&&(t=(new this.Hash).update(t).digest()),r(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(e=0;e<t.length;e++)t[e]^=54;for(this.inner=(new this.Hash).update(t),e=0;e<t.length;e++)t[e]^=106;this.outer=(new this.Hash).update(t)},s.prototype.update=function(t,e){return this.inner.update(t,e),this},s.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},function(t,e,n){const i=n(6),r=n(18),s=n(19),o=n(20);t.exports=class{constructor(){this.routes=[]}get(t,e){const n=i.parseRoute({method:[s.methods.GET,s.methods.HEAD],path:t,handler:e});this.routes.push(n)}post(t,e){const n=i.parseRoute({method:[s.methods.POST],path:t,handler:e});this.routes.push(n)}patch(t,e){const n=i.parseRoute({method:[s.methods.PATCH],path:t,handler:e});this.routes.push(n)}del(t,e){const n=i.parseRoute({method:[s.methods.DELETE],path:t,handler:e});this.routes.push(n)}use(t){const e=i.parseRoute({handler:t,middleware:!0});this.routes.push(e)}add({host:t,path:e,excludePath:n,method:r,handlerName:s,headers:o,protocol:a},h){const u=i.parseRoute({method:r,host:t,path:e,excludePath:n,handler:h,headers:o,handlerName:s,protocol:a});this.routes.push(u)}async resolve(t){const e=new o(t);try{return await r.recurseRoutes(e,this.routes),new Response(e.body,{status:e.status,headers:e.response.headers})}catch(t){return new Response(t.message,{status:500})}}}},function(t,e){function n(t,e){return t.method.test(e.method)&&t.host.test(e.host)&&t.path.test(e.path)&&function(t,e){let n=!0;return Object.keys(t.headers).forEach(i=>{e.headers[i]!==t.headers[i]&&(n=!1)}),n}(t,e)&&function(t,e){return t.protocol.test(e.protocol)}(t,e)&&(!t.excludePath||!t.excludePath.test(e.path))}t.exports={recurseRoutes:async function t(e,i){const[r,...s]=i;if(!r)return new Response("NOT_FOUND",{status:404});if(!n(r,e.request))return t(e,s);e.state.handlers=e.state.handlers||[],e.state.handlers.push(r.handlerName||r.handler.name),e.params=function(t,e){const n={},i=e.host.exec(t.host);e.hostVariables.forEach((t,e)=>{n[t]=i[e+1]});const r=e.path.exec(t.path);return e.pathVariables.forEach((t,e)=>{n[t]=r[e+1]}),n}(e.request,r);try{return r.handler(e,async e=>t(e,s))}catch(t){throw t.route=r.handler.name,t}}}},function(t,e){t.exports={methods:{DELETE:"DELETE",GET:"GET",HEAD:"HEAD",OPTIONS:"OPTIONS",PATCH:"PATCH",POST:"POST"},statusMessages:{404:"Not found",429:"Rate limited"}}},function(t,e,n){const i=n(6);t.exports=class t{constructor(t){this.request=i.parseRequest(t.request),this.event=t,this.state={},this.cloned=!1,this.response={headers:{}},this.body="",this.status=404,this.query=this.request.query}header(t){return this.request.headers[t]}set(t,e){this.response.headers[t]=e}clone(){const e=new t(this.event);return e.cloned=!0,e}}},function(t,e){t.exports={ok:function(t,e={}){t.status=200,t.body=JSON.stringify({data:e})},bad:function(t,e){const n=e||"sorry, please try again later";t.status=200,t.body=JSON.stringify({message:n})},wtf:function(t,e){e=e||"no comment",console.error(new Error("wtf? "+e)),t.status=200,t.body=JSON.stringify({message:"FBI Warning"})}}},function(t,e,n){const{RETRY_LIMIT:i,PAGESIZE:r,AUTH:s}=n(7);async function o(t={},e="GET"){const n=await async function(){const{expires:t,access_token:e,client_id:n,client_secret:i,refresh_token:r}=s;if(t>Date.now())return e;const o={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:a({client_id:n,client_secret:i,refresh_token:r,grant_type:"refresh_token"})},h=await fetch("https://www.googleapis.com/oauth2/v4/token",o),u=await h.json();return s.access_token=u.access_token,s.expires=Date.now()+1e3*u.expires_in,u.access_token}();return t.authorization="Bearer "+n,{method:e,headers:t}}function a(t){const e=[];for(let n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}async function h(t){const e="https://www.googleapis.com/drive/v3/drives/"+t,n=await o();return(await fetch(e,n)).json()}async function u(t){let e="https://www.googleapis.com/drive/v3/files/"+t;e+="?"+a({includeItemsFromAllDrives:!0,supportsAllDrives:!0,corpora:"allDrives",fields:"id, name, size, mimeType, createdTime, parents"});const n=await o();return(await fetch(e,n)).json()}async function c(t,e,n){const s={includeItemsFromAllDrives:!0,supportsAllDrives:!0,q:`'${t}' in parents and trashed = false`,orderBy:"folder,createdTime desc",fields:"nextPageToken, files(id, name, mimeType, size, md5Checksum)",pageSize:Math.min(r,1e3)};e&&(s.pageToken=e),n&&(s.pageSize=n);const h="https://www.googleapis.com/drive/v3/files?"+a(s),u=await o();let c=0;for(;c<i;){const t=await fetch(h,u),e=await t.json();if(e.files)return e;c++}throw new Error("加载列表失败，请刷新重试")}t.exports={find:async function(t,e,n){let s="https://www.googleapis.com/drive/v3/files";const h={includeItemsFromAllDrives:!0,supportsAllDrives:!0,corpora:"allDrives"},u=n&&n.startsWith("0A")&&19===n.length;if(u&&(h.corpora="drive",h.driveId=n),e&&(h.pageToken=e),t.includes("-")){let e=t.replace(/-/g,"");e=e.split(/\s+/),e=`name contains '${e.join("' AND name contains '")}'`,t=`(${t=`name contains '${(t=t.split(/\s+/)).join("' AND name contains '")}'`}) OR (${e})`}else t=`name contains '${(t=t.split(/\s+/)).join("' AND name contains '")}'`;h.q=`trashed = false AND (${t})`,n&&!u&&(h.q=`'${n}' in parents AND ${h.q}`),h.fields="nextPageToken, files(id, name, mimeType, size, parents)",h.orderBy="folder",h.pageSize=r,s+="?"+a(h);const c=await o();let l=0;for(;l<i;){const t=await fetch(s,c),e=await t.json();if(e.files)return e;l++}throw new Error("搜索接口返回失败，请重试")},download:async function(t,e){const n=`https://www.googleapis.com/drive/v3/files/${t}?alt=media`,i=await o();return i.headers.Range=e||"",fetch(n,i)},get_file_info:u,ls:c,ls_all:async function(t){let{files:e,nextPageToken:n}=await c(t,null,1e3);for(;n;){const i=await c(t,n,1e3);n=i.nextPageToken,e=e.concat(i.files)}return e},check_belonging:async function({id:t,root:e}){if(t===e)return!0;let n=[t];do{if(n=await Promise.all(n.map(async t=>(await u(t)).parents)),n=[].concat(...n).filter(t=>t),n.includes(e))return!0}while(n.length);return!1},get_all_ancestors:async function(t){let e=await u(t);const n=[e];let i=e.parents&&e.parents[0];for(;i;){e=i.startsWith("0A")&&19===i.length?await h(i):await u(i),n.push(e),i=e.parents&&e.parents[0]}return n}}},function(t,e){t.exports='<!doctype html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1">\n    <title>GDShare</title>\n    <link rel="icon" href="data:,">\n    <link href="https://cdn.jsdelivr.net/gh/iwestlin/gdshare/dist/20200812.css" rel="stylesheet">\n</head>\n<body>\n    <div id="root"></div>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/iwestlin/gdshare/dist/20200812.js"><\/script>\n</body>\n</html>'}]);