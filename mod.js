// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,I=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,A(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var U=Object.prototype,N=U.toString,$=U.__defineGetter__,P=U.__defineSetter__,C=U.__lookupGetter__,G=U.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function W(r,e,t){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r){return r!=r}var Z=Math.floor;function H(r){return Z(r)===r}function M(r){return H(r/2)}function X(r){return M(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J="function"==typeof Object.defineProperty?Object.defineProperty:null;var K=Object.defineProperty,Q=Object.prototype,rr=Q.toString,er=Q.__defineGetter__,tr=Q.__defineSetter__,nr=Q.__lookupGetter__,ir=Q.__lookupSetter__;var ar=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===rr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===rr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(nr.call(r,e)||ir.call(r,e)?(n=r.__proto__,r.__proto__=Q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(r,e,t.get),o&&tr&&tr.call(r,e,t.set),r};function or(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var cr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var ur=Object.prototype.toString;var fr=Object.prototype.hasOwnProperty;var sr="function"==typeof Symbol?Symbol.toStringTag:"";var lr=cr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return ur.call(r);t=r[sr],a=sr,e=null!=(i=r)&&fr.call(i,a);try{r[sr]=void 0}catch(e){return ur.call(r)}return n=ur.call(r),e?r[sr]=t:delete r[sr],n}:function(r){return ur.call(r)},pr="function"==typeof Uint32Array;var gr="function"==typeof Uint32Array?Uint32Array:null;var dr,vr="function"==typeof Uint32Array?Uint32Array:void 0;dr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(pr&&t instanceof Uint32Array||"[object Uint32Array]"===lr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var hr=dr,yr="function"==typeof Float64Array;var wr="function"==typeof Float64Array?Float64Array:null;var br,mr="function"==typeof Float64Array?Float64Array:void 0;br=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,NaN]),t=e,r=(yr&&t instanceof Float64Array||"[object Float64Array]"===lr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var _r=br,Er="function"==typeof Uint8Array;var Sr="function"==typeof Uint8Array?Uint8Array:null;var Ar,Ir="function"==typeof Uint8Array?Uint8Array:void 0;Ar=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,256,257]),t=e,r=(Er&&t instanceof Uint8Array||"[object Uint8Array]"===lr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var xr=Ar,jr="function"==typeof Uint16Array;var kr="function"==typeof Uint16Array?Uint16Array:null;var Tr,Vr="function"==typeof Uint16Array?Uint16Array:void 0;Tr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(jr&&t instanceof Uint16Array||"[object Uint16Array]"===lr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Fr,Or={uint16:Tr,uint8:xr};(Fr=new Or.uint16(1))[0]=4660;var Ur,Nr,$r=52===new Or.uint8(Fr.buffer)[0];!0===$r?(Ur=1,Nr=0):(Ur=0,Nr=1);var Pr={HIGH:Ur,LOW:Nr},Cr=new _r(1),Gr=new hr(Cr.buffer),Rr=Pr.HIGH,Wr=Pr.LOW;function Lr(r,e,t,n){return Cr[0]=r,e[n]=Gr[Rr],e[n+t]=Gr[Wr],e}function Zr(r){return Lr(r,[0,0],1,0)}or(Zr,"assign",Lr);var Hr=!0===$r?0:1,Mr=new _r(1),Xr=new hr(Mr.buffer);function Yr(r,e){return Mr[0]=r,Xr[Hr]=e>>>0,Mr[0]}function qr(r){return 0|r}var zr,Br,Dr=!0===$r?1:0,Jr=new _r(1),Kr=new hr(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}!0===$r?(zr=1,Br=0):(zr=0,Br=1);var re={HIGH:zr,LOW:Br},ee=new _r(1),te=new hr(ee.buffer),ne=re.HIGH,ie=re.LOW;function ae(r,e){return te[ne]=r,te[ie]=e,ee[0]}var oe=[0,0];function ce(r,e){var t,n;return Zr.assign(r,oe,1,0),t=oe[0],t&=2147483647,n=Qr(e),ae(t|=n&=2147483648,oe[1])}var ue=!0===$r?1:0,fe=new _r(1),se=new hr(fe.buffer);function le(r,e){return fe[0]=r,se[ue]=e>>>0,fe[0]}var pe=[1,1.5],ge=[0,.5849624872207642],de=[0,1.350039202129749e-8];function ve(r,e,t,n){return L(r)||z(r)?(e[n]=r,e[n+t]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}or((function(r){return ve(r,[0,0],1,0)}),"assign",ve);var he=[0,0],ye=[0,0];function we(r,e){var t,n;return 0===e||0===r||L(r)||z(r)?r:(ve(r,he,1,0),e+=he[1],e+=function(r){var e=Qr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=he[0]),e<-1074?ce(0,r):e>1023?r<0?q:Y:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Zr.assign(r,ye,1,0),t=ye[0],t&=2148532223,n*ae(t|=e+1023<<20,ye[1])))}var be=1e300,me=1e-300,_e=[0,0],Ee=[0,0];function Se(r,e){var t,n,i,a,o,c,u,f,s,l,p,g,d,v;if(L(r)||L(e))return NaN;if(Zr.assign(e,_e,1,0),o=_e[0],0===_e[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===Y)?0:Y}(r,e)}if(Zr.assign(r,_e,1,0),a=_e[0],0===_e[1]){if(0===a)return function(r,e){return e===q?Y:e===Y?0:e>0?X(e)?r:0:X(e)?ce(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&X(e))return-1;if(z(r))return r===q?Se(-0,-e):e<0?0:Y}if(r<0&&!1===H(e))return(r-r)/(r-r);if(i=D(r),t=2147483647&a|0,n=2147483647&o|0,u=o>>>31|0,c=(c=a>>>31|0)&&X(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(2147483647&Qr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===u?c*be*be:c*me*me;if(t>1072693248)return 0===u?c*be*be:c*me*me;p=function(r,e){var t,n,i,a,o,c;return t=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333))*1.4426950408889634)-((n=Yr(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r}(Ee,i)}else p=function(r,e,t){var n,i,a,o,c,u,f,s,l,p,g,d,v,h,y,w,b,m,_,E,S;return m=0,t<1048576&&(m-=53,t=Qr(e*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?E=0:_<767610?E=1:(E=0,m+=1,t-=1048576),o=Yr(i=(w=(e=le(e,t))-(f=pe[E]))*(b=1/(e+f)),0),n=524288+(t>>1|536870912),u=le(0,n+=E<<18),y=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),u=Yr(u=3+(a=o*o)+(y+=(c=b*(w-o*u-o*(e-(u-f))))*(o+i)),0),v=(g=-7.028461650952758e-9*(l=Yr(l=(w=o*u)+(b=c*u+(y-(u-3-a))*i),0))+.9617966939259756*(b-(l-w))+de[E])-((d=Yr(d=(p=.9617967009544373*l)+g+(s=ge[E])+(h=m),0))-h-s-p),r[0]=d,r[1]=v,r}(Ee,i,t);if(g=(l=(e-(f=Yr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Zr.assign(g,_e,1,0),d=qr(_e[0]),v=qr(_e[1]),d>=1083179008){if(0!=(d-1083179008|v))return c*be*be;if(l+8008566259537294e-32>g-s)return c*be*be}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|v))return c*me*me;if(l<=g-s)return c*me*me}return g=function(r,e,t){var n,i,a,o,c,u,f,s,l,p,g;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(n=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=le(0,n)),r=qr(r=Qr(f=1-((f=(o=.6931471824645996*(a=Yr(a=t+e,0)))+(c=.6931471805599453*(t-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((u=c-(f-o))+f*u)-f))),(r+=s<<20>>>0)>>20<=0?we(f,s):le(f,r)}(d,s,l),c*g}function Ae(r){return"number"==typeof r}function Ie(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function xe(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Ie(i):Ie(i)+r,n&&(r="-"+r)),r}var je=String.prototype.toLowerCase,ke=String.prototype.toUpperCase;function Te(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Ae(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=xe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=xe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ke.call(r.specifier)?ke.call(t):je.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ve(r){return"string"==typeof r}var Fe=Math.abs,Oe=String.prototype.toLowerCase,Ue=String.prototype.toUpperCase,Ne=String.prototype.replace,$e=/e\+(\d)$/,Pe=/e-(\d)$/,Ce=/^(\d+)$/,Ge=/^(\d+)e/,Re=/\.0$/,We=/\.0*e/,Le=/(\..*[^0])0*e/;function Ze(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Ae(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Fe(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ne.call(t,Le,"$1e"),t=Ne.call(t,We,"e"),t=Ne.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ne.call(t,$e,"e+0$1"),t=Ne.call(t,Pe,"e-0$1"),r.alternate&&(t=Ne.call(t,Ce,"$1."),t=Ne.call(t,Ge,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ue.call(r.specifier)?Ue.call(t):Oe.call(t)}function He(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Me(r,e,t){var n=e-r.length;return n<0?r:r=t?r+He(n):He(n)+r}var Xe=String.fromCharCode,Ye=isNaN,qe=Array.isArray;function ze(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Be(r){var e,t,n,i,a,o,c,u,f;if(!qe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(Ve(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=ze(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ye(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ye(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Te(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ye(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ye(a)?String(n.arg):Xe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ze(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=xe(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Me(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var De=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Je(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ke(r){var e,t,n,i;for(t=[],i=0,n=De.exec(r);n;)(e=r.slice(i,De.lastIndex-n[0].length)).length&&t.push(e),t.push(Je(n)),i=De.lastIndex,n=De.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Qe(r){return"string"==typeof r}function rt(r){var e,t,n;if(!Qe(r))throw new TypeError(rt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ke(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Be.apply(null,t)}function et(r){return r>>>0}var tt=et(31);var nt=et(31);function it(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function at(r){return"number"==typeof r}var ot="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ct(){return ot&&"symbol"==typeof Symbol.toStringTag}var ut=Object.prototype.toString;var ft=Object.prototype.hasOwnProperty;var st="function"==typeof Symbol?Symbol:void 0,lt="function"==typeof st?st.toStringTag:"";var pt=ct()?function(r){var e,t,n,i,a;if(null==r)return ut.call(r);t=r[lt],a=lt,e=null!=(i=r)&&ft.call(i,a);try{r[lt]=void 0}catch(e){return ut.call(r)}return n=ut.call(r),e?r[lt]=t:delete r[lt],n}:function(r){return ut.call(r)},gt=Number,dt=gt.prototype.toString;var vt=ct();function ht(r){return"object"==typeof r&&(r instanceof gt||(vt?function(r){try{return dt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===pt(r)))}function yt(r){return at(r)||ht(r)}it(yt,"isPrimitive",at),it(yt,"isObject",ht);var wt=Number.POSITIVE_INFINITY,bt=gt.NEGATIVE_INFINITY,mt=Math.floor;function _t(r){return r<wt&&r>bt&&mt(e=r)===e;var e}function Et(r){return at(r)&&_t(r)}function St(r){return ht(r)&&_t(r.valueOf())}function At(r){return Et(r)||St(r)}function It(r){return Et(r)&&r>=0}function xt(r){return St(r)&&r.valueOf()>=0}function jt(r){return It(r)||xt(r)}function kt(r){return"string"==typeof r}it(At,"isPrimitive",Et),it(At,"isObject",St),it(jt,"isPrimitive",It),it(jt,"isObject",xt);var Tt=String.prototype.valueOf;var Vt=ct();function Ft(r){return"object"==typeof r&&(r instanceof String||(Vt?function(r){try{return Tt.call(r),!0}catch(r){return!1}}(r):"[object String]"===pt(r)))}function Ot(r){return kt(r)||Ft(r)}it(Ot,"isPrimitive",kt),it(Ot,"isObject",Ft);var Ut=void 0!==String.prototype.repeat;var Nt=String.prototype.repeat;var $t=Ut?function(r,e){return Nt.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Pt=Math.ceil;function Ct(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Pt(n),$t(t,n)+r)}var Gt={};W(Gt,"fromBinaryStringUint32",(function(r){var e,t;if(32!==r.length)throw new Error(rt("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(e=0,t=0;t<r.length;t++)"1"===r[t]&&(e+=Se(2,32-t-1));return e>>>0})),W(Gt,"rotl32",(function(r,e){return et(r<<(e&=tt)|r>>>(-e&tt))})),W(Gt,"rotr32",(function(r,e){return et(r>>>(e&=nt)|r<<(-e&nt))})),W(Gt,"toBinaryStringUint32",(function(r){var e;return e=function(r){var e,t,n="";for(e=32;r>0&&e;)n=(t=r/2)===(r=mt(t))?"0"+n:"1"+n,e-=1;return n}(r),e=function(r,e,t){var n;if(!kt(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!It(e))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!kt(n=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Ct(r,e,n)}(e,32,"0"),e})),W(Gt,"uint32ToInt32",(function(r){return 0|r}));var Rt={};W(Rt,"base",Gt);export{Gt as base,Rt as default};
//# sourceMappingURL=mod.js.map