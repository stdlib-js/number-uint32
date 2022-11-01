// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,i=t.toString,a=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,e)||f.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=c):r[e]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(r,e,n.get),p&&o&&o.call(r,e,n.set),r};function l(r,e,n){c(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r){return r!=r}var p=Math.floor;function g(r){return p(r)===r}function y(r){return g(r/2)}function d(r){return y(r>0?r-1:r+1)}var h=Number.POSITIVE_INFINITY,v=Number,w=v.NEGATIVE_INFINITY;function b(r){return r===h||r===w}var m=Math.sqrt;function A(r){return Math.abs(r)}var E="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return E&&"symbol"==typeof Symbol.toStringTag}var S,j=Object.prototype.toString,U=Object.prototype.hasOwnProperty,x="function"==typeof Symbol?Symbol.toStringTag:"",T=_()?function(r){var e,n,t,i,a;if(null==r)return j.call(r);n=r[x],a=x,e=null!=(i=r)&&U.call(i,a);try{r[x]=void 0}catch(e){return j.call(r)}return t=j.call(r),e?r[x]=n:delete r[x],t}:function(r){return j.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,V="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,e,n;if("function"!=typeof O)return!1;try{e=new O(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(I&&n instanceof Uint32Array||"[object Uint32Array]"===T(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?V:function(){throw new Error("not implemented")};var F,k=S,N="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,$="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,e,n;if("function"!=typeof P)return!1;try{e=new P([1,3.14,-3.14,NaN]),n=e,r=(N&&n instanceof Float64Array||"[object Float64Array]"===T(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?$:function(){throw new Error("not implemented")};var G,R=F,H="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,C="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,e,n;if("function"!=typeof W)return!1;try{e=new W(e=[1,3.14,-3.14,256,257]),n=e,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===T(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?C:function(){throw new Error("not implemented")};var L,M=G,Z="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,B="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,e,n;if("function"!=typeof q)return!1;try{e=new q(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Z&&n instanceof Uint16Array||"[object Uint16Array]"===T(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var X,Y={uint16:L,uint8:M};(X=new Y.uint16(1))[0]=4660;var z,D,J=52===new Y.uint8(X.buffer)[0];!0===J?(z=1,D=0):(z=0,D=1);var K={HIGH:z,LOW:D},Q=new R(1),rr=new k(Q.buffer),er=K.HIGH,nr=K.LOW;function tr(r,e){return Q[0]=e,r[0]=rr[er],r[1]=rr[nr],r}function ir(r,e){return 1===arguments.length?tr([0,0],r):tr(r,e)}var ar=!0===J?0:1,or=new R(1),ur=new k(or.buffer);function fr(r,e){return or[0]=r,ur[ar]=e>>>0,or[0]}function cr(r){return 0|r}var lr,sr,pr=!0===J?1:0,gr=new R(1),yr=new k(gr.buffer);function dr(r){return gr[0]=r,yr[pr]}!0===J?(lr=1,sr=0):(lr=0,sr=1);var hr={HIGH:lr,LOW:sr},vr=new R(1),wr=new k(vr.buffer),br=hr.HIGH,mr=hr.LOW;function Ar(r,e){return wr[br]=r,wr[mr]=e,vr[0]}var Er=[0,0];function _r(r,e){var n,t;return ir(Er,r),n=Er[0],n&=2147483647,t=dr(e),Ar(n|=t&=2147483648,Er[1])}var Sr=!0===J?1:0,jr=new R(1),Ur=new k(jr.buffer);function xr(r,e){return jr[0]=r,Ur[Sr]=e>>>0,jr[0]}var Tr=1023,Ir=1048576,Or=[1,1.5],Vr=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function kr(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Nr(r,e,n,t){return s(r)||b(r)?(e[t]=r,e[t+n]=0,e):0!==r&&A(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}kr((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Pr=[0,0],$r=[0,0];function Gr(r,e){var n,t;return 0===e||0===r||s(r)||b(r)?r:(Nr(r,Pr,1,0),e+=Pr[1],e+=function(r){var e=dr(r);return(e=(2146435072&e)>>>20)-Tr|0}(r=Pr[0]),e<-1074?_r(0,r):e>1023?r<0?w:h:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ir($r,r),n=$r[0],n&=2148532223,t*Ar(n|=e+Tr<<20,$r[1])))}var Rr=2147483647,Hr=1048575,Wr=1048576,Cr=2147483647,Lr=1083179008,Mr=1e300,Zr=1e-300,qr=[0,0],Br=[0,0];function Xr(r,e){var n,t,i,a,o,u,f,c,l,p,y,v,E,_;if(s(r)||s(e))return NaN;if(ir(qr,e),o=qr[0],0===qr[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return m(r);if(-.5===e)return 1/m(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(b(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:A(r)<1==(e===h)?0:h}(r,e)}if(ir(qr,r),a=qr[0],0===qr[1]){if(0===a)return function(r,e){return e===w?h:e===h?0:e>0?d(e)?r:0:d(e)?_r(h,r):h}(r,e);if(1===r)return 1;if(-1===r&&d(e))return-1;if(b(r))return r===w?Xr(-0,-e):e<0?0:h}if(r<0&&!1===g(e))return(r-r)/(r-r);if(i=A(r),n=a&Cr|0,t=o&Cr|0,f=o>>>31|0,u=(u=a>>>31|0)&&d(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&dr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Mr*Mr:u*Zr*Zr;if(n>1072693248)return 0===f?u*Mr*Mr:u*Zr*Zr;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=fr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Br,i)}else y=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,g,y,d,h,v,w,b,m,A,E,_;return m=0,n<Ir&&(m-=53,n=dr(e*=9007199254740992)),m+=(n>>20)-Tr|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Ir),o=fr(i=(w=(e=xr(e,n))-(c=Or[E]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=xr(0,t+=E<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=fr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(g=-7.028461650952758e-9*(s=fr(s=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(s-w))+Fr[E])-((y=fr(y=(p=.9617967009544373*s)+g+(l=Vr[E])+(h=m),0))-h-l-p),r[0]=y,r[1]=d,r}(Br,i,n);if(p=(e-(c=fr(e,0)))*y[0]+e*y[1],l=c*y[0],ir(qr,v=p+l),E=cr(qr[0]),_=cr(qr[1]),E>=Lr){if(0!=(E-Lr|_))return u*Mr*Mr;if(p+8008566259537294e-32>v-l)return u*Mr*Mr}else if((E&Cr)>=1083231232){if(0!=(E-3230714880|_))return u*Zr*Zr;if(p<=v-l)return u*Zr*Zr}return v=function(r,e,n){var t,i,a,o,u,f,c,l,s,p;return s=((l=r&Rr|0)>>20)-Tr|0,c=0,l>1071644672&&(i=xr(0,((c=r+(Wr>>s+1)>>>0)&~(Hr>>(s=((c&Rr)>>20)-Tr|0)))>>>0),c=(c&Hr|Wr)>>20-s>>>0,r<0&&(c=-c),e-=i),r=cr(r=dr(f=1-((f=(a=.6931471824645996*(i=fr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Gr(f,c):xr(f,r)}(E,l,p),u*v}function Yr(r){return"number"==typeof r}function zr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Dr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+zr(i):zr(i)+r,t&&(r="-"+r)),r}var Jr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase;function Qr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Yr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Dr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Dr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Kr.call(r.specifier)?Kr.call(n):Jr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function re(r){return"string"==typeof r}var ee=Math.abs,ne=String.prototype.toLowerCase,te=String.prototype.toUpperCase,ie=String.prototype.replace,ae=/e\+(\d)$/,oe=/e-(\d)$/,ue=/^(\d+)$/,fe=/^(\d+)e/,ce=/\.0$/,le=/\.0*e/,se=/(\..*[^0])0*e/;function pe(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Yr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":ee(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=ie.call(n,se,"$1e"),n=ie.call(n,le,"e"),n=ie.call(n,ce,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=ie.call(n,ae,"e+0$1"),n=ie.call(n,oe,"e-0$1"),r.alternate&&(n=ie.call(n,ue,"$1."),n=ie.call(n,fe,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===te.call(r.specifier)?te.call(n):ne.call(n)}function ge(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function ye(r,e,n){var t=e-r.length;return t<0?r:r=n?r+ge(t):ge(t)+r}var de=String.fromCharCode,he=isNaN,ve=Array.isArray;function we(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function be(r){var e,n,t,i,a,o,u,f,c;if(!ve(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(re(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=we(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,he(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,he(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Qr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!he(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=he(a)?String(t.arg):de(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=pe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Dr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ye(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ae(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ee(r){var e,n,t,i;for(n=[],i=0,t=me.exec(r);t;)(e=r.slice(i,me.lastIndex-t[0].length)).length&&n.push(e),n.push(Ae(t)),i=me.lastIndex,t=me.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function _e(r){return"string"==typeof r}function Se(r){var e,n,t;if(!_e(r))throw new TypeError(Se("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ee(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return be.apply(null,n)}function je(r){return r>>>0}var Ue=je(31),xe=je(31);function Te(r){return"number"==typeof r}var Ie=v.prototype.toString,Oe=_();function Ve(r){return"object"==typeof r&&(r instanceof v||(Oe?function(r){try{return Ie.call(r),!0}catch(r){return!1}}(r):"[object Number]"===T(r)))}function Fe(r){return Te(r)||Ve(r)}function ke(r){return r<h&&r>w&&g(r)}function Ne(r){return Te(r)&&ke(r)}function Pe(r){return Ve(r)&&ke(r.valueOf())}function $e(r){return Ne(r)||Pe(r)}function Ge(r){return Ne(r)&&r>=0}function Re(r){return Pe(r)&&r.valueOf()>=0}function He(r){return Ge(r)||Re(r)}function We(r){return"string"==typeof r}kr(Fe,"isPrimitive",Te),kr(Fe,"isObject",Ve),kr($e,"isPrimitive",Ne),kr($e,"isObject",Pe),kr(He,"isPrimitive",Ge),kr(He,"isObject",Re);var Ce=String.prototype.valueOf,Le=_();function Me(r){return"object"==typeof r&&(r instanceof String||(Le?function(r){try{return Ce.call(r),!0}catch(r){return!1}}(r):"[object String]"===T(r)))}function Ze(r){return We(r)||Me(r)}kr(Ze,"isPrimitive",We),kr(Ze,"isObject",Me);var qe=9007199254740991;function Be(r,e){var n,t;if(!We(r))throw new TypeError(Se("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ge(e))throw new TypeError(Se("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>qe)throw new RangeError(Se("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n}var Xe=Math.ceil,Ye={};l(Ye,"fromBinaryStringUint32",(function(r){var e,n;if(32!==r.length)throw new Error(Se("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=Xr(2,32-n-1));return e>>>0})),l(Ye,"rotl32",(function(r,e){return je(r<<(e&=Ue)|r>>>(-e&Ue))})),l(Ye,"rotr32",(function(r,e){return je(r>>>(e&=xe)|r<<(-e&xe))})),l(Ye,"toBinaryStringUint32",(function(r){var e;return e=function(r){var e,n,t="";for(e=32;r>0&&e;)t=(n=r/2)===(r=p(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t,i;if(!We(r))throw new TypeError(Se("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ge(e))throw new TypeError(Se("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!We(i=n))throw new TypeError(Se("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>qe)throw new RangeError(Se("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(t=(e-r.length)/i.length)<=0?r:Be(i,t=Xe(t))+r}(e,32,"0"),e})),l(Ye,"uint32ToInt32",cr);var ze={};l(ze,"base",Ye),r.base=Ye,r.default=ze,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).ns={});
//# sourceMappingURL=browser.js.map
