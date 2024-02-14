// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,g,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function S(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+S(e):S(e)+r}var E=String.fromCharCode,_=isNaN,j=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,f,l,s,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=I.exec(r);e;)(t=r.slice(i,I.lastIndex-e[0].length)).length&&n.push(t),n.push(O(e)),i=I.lastIndex,e=I.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){return"string"==typeof r}function k(r){var t,n;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||H.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,n.get),a&&$&&$.call(r,t,n.set),r};function W(r,t,n){R(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function q(r){return Z(r>0?r-1:r+1)}var B=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===B||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}function K(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Q(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var rr=Q(),tr=Object.prototype.toString,nr=Object.prototype.hasOwnProperty;function er(r,t){return null!=r&&nr.call(r,t)}var ir,or="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof or?or.toStringTag:"",ur=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return tr.call(r);n=r[ar],t=er(r,ar);try{r[ar]=void 0}catch(t){return tr.call(r)}return e=tr.call(r),t?r[ar]=n:delete r[ar],e}:function(r){return tr.call(r)},cr="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,lr="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(cr&&n instanceof Uint32Array||"[object Uint32Array]"===ur(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr,pr=ir,gr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr([1,3.14,-3.14,NaN]),n=t,r=(gr&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr,br=sr,hr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===ur(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Sr,Ar=dr,Er="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,jr="function"==typeof Uint16Array?Uint16Array:void 0;Sr=function(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Er&&n instanceof Uint16Array||"[object Uint16Array]"===ur(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Tr,Ur={uint16:Sr,uint8:Ar};(Tr=new Ur.uint16(1))[0]=4660;var Ir,Or,xr=52===new Ur.uint8(Tr.buffer)[0];!0===xr?(Ir=1,Or=0):(Ir=0,Or=1);var Fr={HIGH:Ir,LOW:Or},kr=new br(1),Vr=new pr(kr.buffer),Nr=Fr.HIGH,Pr=Fr.LOW;function $r(r,t,n,e){return kr[0]=r,t[e]=Vr[Nr],t[e+n]=Vr[Pr],t}function Gr(r){return $r(r,[0,0],1,0)}K(Gr,"assign",$r);var Hr=!0===xr?0:1,Rr=new br(1),Wr=new pr(Rr.buffer);function Cr(r,t){return Rr[0]=r,Wr[Hr]=t>>>0,Rr[0]}function Lr(r){return 0|r}var Mr,Zr,qr=2147483647,Br=!0===xr?1:0,Xr=new br(1),Yr=new pr(Xr.buffer);function zr(r){return Xr[0]=r,Yr[Br]}!0===xr?(Mr=1,Zr=0):(Mr=0,Zr=1);var Dr={HIGH:Mr,LOW:Zr},Jr=new br(1),Kr=new pr(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var nt=[0,0];function et(r,t){var n,e;return Gr.assign(r,nt,1,0),n=nt[0],n&=qr,e=zr(t),tt(n|=e&=2147483648,nt[1])}var it=!0===xr?1:0,ot=new br(1),at=new pr(ot.buffer);function ut(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}var ct=1023,ft=1048576,lt=[1,1.5],st=[0,.5849624872207642],pt=[0,1.350039202129749e-8];function gt(r,t,n,e){return C(r)||z(r)?(t[e]=r,t[e+n]=0,t):0!==r&&J(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}K((function(r){return gt(r,[0,0],1,0)}),"assign",gt);var yt=[0,0],vt=[0,0];function dt(r,t){var n,e;return 0===t||0===r||C(r)||z(r)?r:(gt(r,yt,1,0),t+=yt[1],t+=function(r){var t=zr(r);return(t=(2146435072&t)>>>20)-ct|0}(r=yt[0]),t<-1074?et(0,r):t>1023?r<0?Y:B:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Gr.assign(r,vt,1,0),n=vt[0],n&=2148532223,e*tt(n|=t+ct<<20,vt[1])))}var bt=1048575,ht=1048576,wt=1083179008,mt=1e300,St=1e-300,At=[0,0],Et=[0,0];function _t(r,t){var n,e,i,o,a,u,c,f,l,s,p,g,y,v;if(C(r)||C(t))return NaN;if(Gr.assign(t,At,1,0),a=At[0],0===At[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return D(r);if(-.5===t)return 1/D(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(z(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(t===B)?0:B}(r,t)}if(Gr.assign(r,At,1,0),o=At[0],0===At[1]){if(0===o)return function(r,t){return t===Y?B:t===B?0:t>0?q(t)?r:0:q(t)?et(B,r):B}(r,t);if(1===r)return 1;if(-1===r&&q(t))return-1;if(z(r))return r===Y?_t(-0,-t):t<0?0:B}if(r<0&&!1===M(t))return(r-r)/(r-r);if(i=J(r),n=o&qr|0,e=a&qr|0,c=a>>>31|0,u=(u=o>>>31|0)&&q(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(zr(r)&qr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?u*mt*mt:u*St*St;if(n>1072693248)return 0===c?u*mt*mt:u*St*St;p=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(Et,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,g,y,v,d,b,h,w,m,S,A,E;return m=0,n<ft&&(m-=53,n=zr(t*=9007199254740992)),m+=(n>>20)-ct|0,n=1072693248|(S=1048575&n|0),S<=235662?A=0:S<767610?A=1:(A=0,m+=1,n-=ft),a=Cr(i=(h=(t=ut(t,n))-(f=lt[A]))*(w=1/(t+f)),0),e=524288+(n>>1|536870912),c=ut(0,e+=A<<18),b=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Cr(c=3+(o=a*a)+(b+=(u=w*(h-a*c-a*(t-(c-f))))*(a+i)),0),v=(g=-7.028461650952758e-9*(s=Cr(s=(h=a*c)+(w=u*c+(b-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+pt[A])-((y=Cr(y=(p=.9617967009544373*s)+g+(l=st[A])+(d=m),0))-d-l-p),r[0]=y,r[1]=v,r}(Et,i,n);if(g=(s=(t-(f=Cr(t,0)))*p[0]+t*p[1])+(l=f*p[0]),Gr.assign(g,At,1,0),y=Lr(At[0]),v=Lr(At[1]),y>=wt){if(0!=(y-wt|v))return u*mt*mt;if(s+8008566259537294e-32>g-l)return u*mt*mt}else if((y&qr)>=1083231232){if(0!=(y-3230714880|v))return u*St*St;if(s<=g-l)return u*St*St}return g=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&qr|0)>>20)-ct|0,f=0,l>1071644672&&(i=ut(0,((f=r+(ht>>s+1)>>>0)&~(bt>>(s=((f&qr)>>20)-ct|0)))>>>0),f=(f&bt|ht)>>20-s>>>0,r<0&&(f=-f),t-=i),r=Lr(r=zr(c=1-((c=(o=.6931471824645996*(i=Cr(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?dt(c,f):ut(c,r)}(y,l,s),u*g}function jt(r){return r>>>0}var Tt=jt(31),Ut=jt(31);function It(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ot(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function xt(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ft(r){return"number"==typeof r}var kt=Q();function Vt(){return kt&&"symbol"==typeof Symbol.toStringTag}var Nt=Object.prototype.toString,Pt="function"==typeof Symbol?Symbol:void 0,$t="function"==typeof Pt?Pt.toStringTag:"",Gt=Vt()?function(r){var t,n,e;if(null==r)return Nt.call(r);n=r[$t],t=er(r,$t);try{r[$t]=void 0}catch(t){return Nt.call(r)}return e=Nt.call(r),t?r[$t]=n:delete r[$t],e}:function(r){return Nt.call(r)},Ht=X.prototype.toString,Rt=Vt();function Wt(r){return"object"==typeof r&&(r instanceof X||(Rt?function(r){try{return Ht.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Gt(r)))}function Ct(r){return Ft(r)||Wt(r)}function Lt(r){return r<B&&r>Y&&M(r)}function Mt(r){return Ft(r)&&Lt(r)}function Zt(r){return Wt(r)&&Lt(r.valueOf())}function qt(r){return Mt(r)||Zt(r)}function Bt(r){return Mt(r)&&r>=0}function Xt(r){return Zt(r)&&r.valueOf()>=0}function Yt(r){return Bt(r)||Xt(r)}function zt(r){return"string"==typeof r}xt(Ct,"isPrimitive",Ft),xt(Ct,"isObject",Wt),Ot(qt,"isPrimitive",Mt),Ot(qt,"isObject",Zt),It(Yt,"isPrimitive",Bt),It(Yt,"isObject",Xt);var Dt=Q();function Jt(){return Dt&&"symbol"==typeof Symbol.toStringTag}var Kt=Object.prototype.toString,Qt="function"==typeof Symbol?Symbol:void 0,rn="function"==typeof Qt?Qt.toStringTag:"",tn=Jt()?function(r){var t,n,e;if(null==r)return Kt.call(r);n=r[rn],t=er(r,rn);try{r[rn]=void 0}catch(t){return Kt.call(r)}return e=Kt.call(r),t?r[rn]=n:delete r[rn],e}:function(r){return Kt.call(r)},nn=String.prototype.valueOf,en=Jt();function on(r){return"object"==typeof r&&(r instanceof String||(en?function(r){try{return nn.call(r),!0}catch(r){return!1}}(r):"[object String]"===tn(r)))}function an(r){return zt(r)||on(r)}It(an,"isPrimitive",zt),It(an,"isObject",on);var un=9007199254740991,cn=void 0!==String.prototype.repeat,fn=String.prototype.repeat,ln=cn?function(r,t){return fn.call(r,t)}:function(r,t){var n,e;if(0===r.length||0===t)return"";for(n="",e=t;1==(1&e)&&(n+=r),0!=(e>>>=1);)r+=r;return n},sn=Math.ceil;function pn(r,t,n){var e=(t-r.length)/n.length;return e<=0?r:(e=sn(e),ln(n,e)+r)}var gn=Math.floor,yn={};W(yn,"fromBinaryStringUint32",(function(r){var t,n;if(32!==r.length)throw new Error(k("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(t=0,n=0;n<r.length;n++)"1"===r[n]&&(t+=_t(2,32-n-1));return t>>>0})),W(yn,"rotl32",(function(r,t){return jt(r<<(t&=Tt)|r>>>(-t&Tt))})),W(yn,"rotr32",(function(r,t){return jt(r>>>(t&=Ut)|r<<(-t&Ut))})),W(yn,"toBinaryStringUint32",(function(r){var t;return t=function(r){var t,n,e="";for(t=32;r>0&&t;)e=(n=r/2)===(r=gn(n))?"0"+e:"1"+e,t-=1;return e}(r),t=function(r,t,n){var e;if(!zt(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Bt(t))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!zt(e=n))throw new TypeError(k("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(t>un)throw new RangeError(k("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return pn(r,t,e)}(t,32,"0"),t})),W(yn,"uint32ToInt32",Lr);var vn={};return W(vn,"base",yn),vn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=t();
//# sourceMappingURL=browser.js.map
