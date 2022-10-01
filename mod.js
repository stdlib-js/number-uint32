// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,n=Object.prototype,t=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__;var c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,c){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===t.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((l="value"in c)&&(o.call(r,e)||u.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=c.value,r.__proto__=f):r[e]=c.value),s="get"in c,p="set"in c,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,e,c.get),p&&a&&a.call(r,e,c.set),r};function f(r,e,n){c(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r){return r!=r}var s=Math.floor;function p(r){return s(r)===r}function g(r){return p(r/2)}function v(r){return g(r>0?r-1:r+1)}var y=Number.POSITIVE_INFINITY,h=Number,d=h.NEGATIVE_INFINITY;function w(r){return r===y||r===d}var b=Math.sqrt;function m(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function E(){return A&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var S=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol.toStringTag:"";var j=E()?function(r){var e,n,t,i,a;if(null==r)return _.call(r);n=r[U],a=U,e=null!=(i=r)&&S.call(i,a);try{r[U]=void 0}catch(e){return _.call(r)}return t=_.call(r),e?r[U]=n:delete r[U],t}:function(r){return _.call(r)},I="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null;var O,T="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,e,n;if("function"!=typeof x)return!1;try{e=new x(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(I&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?T:function(){throw new Error("not implemented")};var V=O,F="function"==typeof Float64Array;var k="function"==typeof Float64Array?Float64Array:null;var N,P="function"==typeof Float64Array?Float64Array:void 0;N=function(){var r,e,n;if("function"!=typeof k)return!1;try{e=new k([1,3.14,-3.14,NaN]),n=e,r=(F&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?P:function(){throw new Error("not implemented")};var $=N,G="function"==typeof Uint8Array;var R="function"==typeof Uint8Array?Uint8Array:null;var H,W="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,e,n;if("function"!=typeof R)return!1;try{e=new R(e=[1,3.14,-3.14,256,257]),n=e,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?W:function(){throw new Error("not implemented")};var C=H,L="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var Z,q="function"==typeof Uint16Array?Uint16Array:void 0;Z=function(){var r,e,n;if("function"!=typeof M)return!1;try{e=new M(e=[1,3.14,-3.14,65536,65537]),n=e,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")};var B,X={uint16:Z,uint8:C};(B=new X.uint16(1))[0]=4660;var Y,z,D=52===new X.uint8(B.buffer)[0];!0===D?(Y=1,z=0):(Y=0,z=1);var J={HIGH:Y,LOW:z},K=new $(1),Q=new V(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return K[0]=e,r[0]=Q[rr],r[1]=Q[er],r}function tr(r,e){return 1===arguments.length?nr([0,0],r):nr(r,e)}var ir=!0===D?0:1,ar=new $(1),or=new V(ar.buffer);function ur(r,e){return ar[0]=r,or[ir]=e>>>0,ar[0]}function cr(r){return 0|r}var fr,lr,sr=!0===D?1:0,pr=new $(1),gr=new V(pr.buffer);function vr(r){return pr[0]=r,gr[sr]}!0===D?(fr=1,lr=0):(fr=0,lr=1);var yr={HIGH:fr,LOW:lr},hr=new $(1),dr=new V(hr.buffer),wr=yr.HIGH,br=yr.LOW;function mr(r,e){return dr[wr]=r,dr[br]=e,hr[0]}var Ar=[0,0];function Er(r,e){var n,t;return tr(Ar,r),n=Ar[0],n&=2147483647,t=vr(e),mr(n|=t&=2147483648,Ar[1])}var _r=!0===D?1:0,Sr=new $(1),Ur=new V(Sr.buffer);function jr(r,e){return Sr[0]=r,Ur[_r]=e>>>0,Sr[0]}var Ir=[1,1.5],xr=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Tr(r,e){return l(e)||w(e)?(r[0]=e,r[1]=0,r):0!==e&&m(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)}var Vr=[0,0],Fr=[0,0];function kr(r,e){var n,t;return 0===e||0===r||l(r)||w(r)?r:(function(r,e){1===arguments.length?Tr([0,0],r):Tr(r,e)}(Vr,r),e+=Vr[1],e+=function(r){var e=vr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Vr[0]),e<-1074?Er(0,r):e>1023?r<0?d:y:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,tr(Fr,r),n=Fr[0],n&=2148532223,t*mr(n|=e+1023<<20,Fr[1])))}var Nr=1e300,Pr=1e-300,$r=[0,0],Gr=[0,0];function Rr(r,e){var n,t,i,a,o,u,c,f,s,g,h,A,E,_;if(l(r)||l(e))return NaN;if(tr($r,e),o=$r[0],0===$r[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return b(r);if(-.5===e)return 1/b(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(w(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(e===y)?0:y}(r,e)}if(tr($r,r),a=$r[0],0===$r[1]){if(0===a)return function(r,e){return e===d?y:e===y?0:e>0?v(e)?r:0:v(e)?Er(y,r):y}(r,e);if(1===r)return 1;if(-1===r&&v(e))return-1;if(w(r))return r===d?Rr(-0,-e):e<0?0:y}if(r<0&&!1===p(e))return(r-r)/(r-r);if(i=m(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&v(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&vr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*Nr*Nr:u*Pr*Pr;if(n>1072693248)return 0===c?u*Nr*Nr:u*Pr*Pr;h=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ur(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Gr,i)}else h=function(r,e,n){var t,i,a,o,u,c,f,l,s,p,g,v,y,h,d,w,b,m,A,E,_;return m=0,n<1048576&&(m-=53,n=vr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=1048576),o=ur(i=(w=(e=jr(e,n))-(f=Ir[E]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=jr(0,t+=E<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=ur(c=3+(a=o*o)+(d+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),y=(g=-7.028461650952758e-9*(s=ur(s=(w=o*c)+(b=u*c+(d-(c-3-a))*i),0))+.9617966939259756*(b-(s-w))+Or[E])-((v=ur(v=(p=.9617967009544373*s)+g+(l=xr[E])+(h=m),0))-h-l-p),r[0]=v,r[1]=y,r}(Gr,i,n);if(g=(e-(f=ur(e,0)))*h[0]+e*h[1],s=f*h[0],tr($r,A=g+s),E=cr($r[0]),_=cr($r[1]),E>=1083179008){if(0!=(E-1083179008|_))return u*Nr*Nr;if(g+8008566259537294e-32>A-s)return u*Nr*Nr}else if((2147483647&E)>=1083231232){if(0!=(E-3230714880|_))return u*Pr*Pr;if(g<=A-s)return u*Pr*Pr}return A=function(r,e,n){var t,i,a,o,u,c,f,l,s,p,g;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(t=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),e-=a=jr(0,t)),r=cr(r=vr(f=1-((f=(o=.6931471824645996*(a=ur(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?kr(f,l):jr(f,r)}(E,s,g),u*A}function Hr(r){return"number"==typeof r}function Wr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Cr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+Wr(i):Wr(i)+r,t&&(r="-"+r)),r}var Lr=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase;function Zr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Hr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Cr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Cr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Mr.call(r.specifier)?Mr.call(n):Lr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function qr(r){return"string"==typeof r}var Br=Math.abs,Xr=String.prototype.toLowerCase,Yr=String.prototype.toUpperCase,zr=String.prototype.replace,Dr=/e\+(\d)$/,Jr=/e-(\d)$/,Kr=/^(\d+)$/,Qr=/^(\d+)e/,re=/\.0$/,ee=/\.0*e/,ne=/(\..*[^0])0*e/;function te(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Hr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Br(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=zr.call(n,ne,"$1e"),n=zr.call(n,ee,"e"),n=zr.call(n,re,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=zr.call(n,Dr,"e+0$1"),n=zr.call(n,Jr,"e-0$1"),r.alternate&&(n=zr.call(n,Kr,"$1."),n=zr.call(n,Qr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Yr.call(r.specifier)?Yr.call(n):Xr.call(n)}function ie(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function ae(r,e,n){var t=e-r.length;return t<0?r:r=n?r+ie(t):ie(t)+r}var oe=String.fromCharCode,ue=isNaN,ce=Array.isArray;function fe(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function le(r){var e,n,t,i,a,o,u,c,f;if(!ce(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(qr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,ue(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,ue(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Zr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!ue(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ue(a)?String(t.arg):oe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=te(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Cr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ae(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var se=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function pe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ge(r){var e,n,t,i;for(n=[],i=0,t=se.exec(r);t;)(e=r.slice(i,se.lastIndex-t[0].length)).length&&n.push(e),n.push(pe(t)),i=se.lastIndex,t=se.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function ve(r){return"string"==typeof r}function ye(r){var e,n,t;if(!ve(r))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ge(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return le.apply(null,n)}function he(r){return r>>>0}var de=he(31);var we=he(31);function be(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function me(r){return"number"==typeof r}var Ae=h.prototype.toString;var Ee=E();function _e(r){return"object"==typeof r&&(r instanceof h||(Ee?function(r){try{return Ae.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function Se(r){return me(r)||_e(r)}function Ue(r){return r<y&&r>d&&p(r)}function je(r){return me(r)&&Ue(r)}function Ie(r){return _e(r)&&Ue(r.valueOf())}function xe(r){return je(r)||Ie(r)}function Oe(r){return je(r)&&r>=0}function Te(r){return Ie(r)&&r.valueOf()>=0}function Ve(r){return Oe(r)||Te(r)}function Fe(r){return"string"==typeof r}be(Se,"isPrimitive",me),be(Se,"isObject",_e),be(xe,"isPrimitive",je),be(xe,"isObject",Ie),be(Ve,"isPrimitive",Oe),be(Ve,"isObject",Te);var ke=String.prototype.valueOf;var Ne=E();function Pe(r){return"object"==typeof r&&(r instanceof String||(Ne?function(r){try{return ke.call(r),!0}catch(r){return!1}}(r):"[object String]"===j(r)))}function $e(r){return Fe(r)||Pe(r)}be($e,"isPrimitive",Fe),be($e,"isObject",Pe);function Ge(r,e){var n,t;if(!Fe(r))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Oe(e))throw new TypeError(ye("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError(ye("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(n="",t=e;1==(1&t)&&(n+=r),0!==(t>>>=1);)r+=r;return n}var Re=Math.ceil;var He={};f(He,"fromBinaryStringUint32",(function(r){var e,n;if(32!==r.length)throw new Error(ye("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=Rr(2,32-n-1));return e>>>0})),f(He,"rotl32",(function(r,e){return he(r<<(e&=de)|r>>>(-e&de))})),f(He,"rotr32",(function(r,e){return he(r>>>(e&=we)|r<<(-e&we))})),f(He,"toBinaryStringUint32",(function(r){var e;return e=function(r){var e,n,t="";for(e=32;r>0&&e;)t=(n=r/2)===(r=s(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t,i;if(!Fe(r))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Oe(e))throw new TypeError(ye("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Fe(i=n))throw new TypeError(ye("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>9007199254740991)throw new RangeError(ye("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(t=(e-r.length)/i.length)<=0?r:Ge(i,t=Re(t))+r}(e,32,"0"),e})),f(He,"uint32ToInt32",cr);var We={};f(We,"base",He);export{He as base,We as default};
//# sourceMappingURL=mod.js.map
