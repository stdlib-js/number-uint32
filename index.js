// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,I=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,A(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var U=Object.prototype,N=U.toString,$=U.__defineGetter__,P=U.__defineSetter__,C=U.__lookupGetter__,G=U.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function W(r,e,t){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r){return r!=r}var Z=Math.floor;function H(r){return Z(r)===r}function M(r){return H(r/2)}function X(r){return M(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J="function"==typeof Object.defineProperty?Object.defineProperty:null,K=Object.defineProperty,Q=Object.prototype,rr=Q.toString,er=Q.__defineGetter__,tr=Q.__defineSetter__,nr=Q.__lookupGetter__,ir=Q.__lookupSetter__,ar=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===rr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===rr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(nr.call(r,e)||ir.call(r,e)?(n=r.__proto__,r.__proto__=Q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(r,e,t.get),o&&tr&&tr.call(r,e,t.set),r};function or(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var cr,ur="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),fr=Object.prototype.toString,sr=Object.prototype.hasOwnProperty,lr="function"==typeof Symbol?Symbol.toStringTag:"",pr=ur&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return fr.call(r);t=r[lr],a=lr,e=null!=(i=r)&&sr.call(i,a);try{r[lr]=void 0}catch(e){return fr.call(r)}return n=fr.call(r),e?r[lr]=t:delete r[lr],n}:function(r){return fr.call(r)},gr="function"==typeof Uint32Array,dr="function"==typeof Uint32Array?Uint32Array:null,hr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(gr&&t instanceof Uint32Array||"[object Uint32Array]"===pr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var yr,vr=cr,br="function"==typeof Float64Array,wr="function"==typeof Float64Array?Float64Array:null,mr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,NaN]),t=e,r=(br&&t instanceof Float64Array||"[object Float64Array]"===pr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var _r,Er=yr,Sr="function"==typeof Uint8Array,Ar="function"==typeof Uint8Array?Uint8Array:null,Ir="function"==typeof Uint8Array?Uint8Array:void 0;_r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,256,257]),t=e,r=(Sr&&t instanceof Uint8Array||"[object Uint8Array]"===pr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var xr,jr=_r,kr="function"==typeof Uint16Array,Tr="function"==typeof Uint16Array?Uint16Array:null,Vr="function"==typeof Uint16Array?Uint16Array:void 0;xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(kr&&t instanceof Uint16Array||"[object Uint16Array]"===pr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Fr,Or={uint16:xr,uint8:jr};(Fr=new Or.uint16(1))[0]=4660;var Ur,Nr,$r=52===new Or.uint8(Fr.buffer)[0];!0===$r?(Ur=1,Nr=0):(Ur=0,Nr=1);var Pr={HIGH:Ur,LOW:Nr},Cr=new Er(1),Gr=new vr(Cr.buffer),Rr=Pr.HIGH,Wr=Pr.LOW;function Lr(r,e,t,n){return Cr[0]=r,e[n]=Gr[Rr],e[n+t]=Gr[Wr],e}function Zr(r){return Lr(r,[0,0],1,0)}or(Zr,"assign",Lr);var Hr=!0===$r?0:1,Mr=new Er(1),Xr=new vr(Mr.buffer);function Yr(r,e){return Mr[0]=r,Xr[Hr]=e>>>0,Mr[0]}function qr(r){return 0|r}var zr,Br,Dr=2147483647,Jr=!0===$r?1:0,Kr=new Er(1),Qr=new vr(Kr.buffer);function re(r){return Kr[0]=r,Qr[Jr]}!0===$r?(zr=1,Br=0):(zr=0,Br=1);var ee={HIGH:zr,LOW:Br},te=new Er(1),ne=new vr(te.buffer),ie=ee.HIGH,ae=ee.LOW;function oe(r,e){return ne[ie]=r,ne[ae]=e,te[0]}var ce=[0,0];function ue(r,e){var t,n;return Zr.assign(r,ce,1,0),t=ce[0],t&=Dr,n=re(e),oe(t|=n&=2147483648,ce[1])}var fe=!0===$r?1:0,se=new Er(1),le=new vr(se.buffer);function pe(r,e){return se[0]=r,le[fe]=e>>>0,se[0]}var ge=1023,de=1048576,he=[1,1.5],ye=[0,.5849624872207642],ve=[0,1.350039202129749e-8];function be(r,e,t,n){return L(r)||z(r)?(e[n]=r,e[n+t]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}or((function(r){return be(r,[0,0],1,0)}),"assign",be);var we=[0,0],me=[0,0];function _e(r,e){var t,n;return 0===e||0===r||L(r)||z(r)?r:(be(r,we,1,0),e+=we[1],e+=function(r){var e=re(r);return(e=(2146435072&e)>>>20)-ge|0}(r=we[0]),e<-1074?ue(0,r):e>1023?r<0?q:Y:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Zr.assign(r,me,1,0),t=me[0],t&=2148532223,n*oe(t|=e+ge<<20,me[1])))}var Ee=1048575,Se=1048576,Ae=1083179008,Ie=1e300,xe=1e-300,je=[0,0],ke=[0,0];function Te(r,e){var t,n,i,a,o,c,u,f,s,l,p,g,d,h;if(L(r)||L(e))return NaN;if(Zr.assign(e,je,1,0),o=je[0],0===je[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===Y)?0:Y}(r,e)}if(Zr.assign(r,je,1,0),a=je[0],0===je[1]){if(0===a)return function(r,e){return e===q?Y:e===Y?0:e>0?X(e)?r:0:X(e)?ue(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&X(e))return-1;if(z(r))return r===q?Te(-0,-e):e<0?0:Y}if(r<0&&!1===H(e))return(r-r)/(r-r);if(i=D(r),t=a&Dr|0,n=o&Dr|0,u=o>>>31|0,c=(c=a>>>31|0)&&X(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(re(r)&Dr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===u?c*Ie*Ie:c*xe*xe;if(t>1072693248)return 0===u?c*Ie*Ie:c*xe*xe;p=function(r,e){var t,n,i,a,o,c;return t=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333))*1.4426950408889634)-((n=Yr(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r}(ke,i)}else p=function(r,e,t){var n,i,a,o,c,u,f,s,l,p,g,d,h,y,v,b,w,m,_,E,S;return m=0,t<de&&(m-=53,t=re(e*=9007199254740992)),m+=(t>>20)-ge|0,t=1072693248|(_=1048575&t|0),_<=235662?E=0:_<767610?E=1:(E=0,m+=1,t-=de),o=Yr(i=(b=(e=pe(e,t))-(f=he[E]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),u=pe(0,n+=E<<18),v=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),u=Yr(u=3+(a=o*o)+(v+=(c=w*(b-o*u-o*(e-(u-f))))*(o+i)),0),h=(g=-7.028461650952758e-9*(l=Yr(l=(b=o*u)+(w=c*u+(v-(u-3-a))*i),0))+.9617966939259756*(w-(l-b))+ve[E])-((d=Yr(d=(p=.9617967009544373*l)+g+(s=ye[E])+(y=m),0))-y-s-p),r[0]=d,r[1]=h,r}(ke,i,t);if(g=(l=(e-(f=Yr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Zr.assign(g,je,1,0),d=qr(je[0]),h=qr(je[1]),d>=Ae){if(0!=(d-Ae|h))return c*Ie*Ie;if(l+8008566259537294e-32>g-s)return c*Ie*Ie}else if((d&Dr)>=1083231232){if(0!=(d-3230714880|h))return c*xe*xe;if(l<=g-s)return c*xe*xe}return g=function(r,e,t){var n,i,a,o,c,u,f,s,l,p;return l=((s=r&Dr|0)>>20)-ge|0,f=0,s>1071644672&&(i=pe(0,((f=r+(Se>>l+1)>>>0)&~(Ee>>(l=((f&Dr)>>20)-ge|0)))>>>0),f=(f&Ee|Se)>>20-l>>>0,r<0&&(f=-f),e-=i),r=qr(r=re(u=1-((u=(a=.6931471824645996*(i=Yr(i=t+e,0)))+(o=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((c=o-(u-a))+u*c)-u))),(r+=f<<20>>>0)>>20<=0?_e(u,f):pe(u,r)}(d,s,l),c*g}function Ve(r){return"number"==typeof r}function Fe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Oe(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Fe(i):Fe(i)+r,n&&(r="-"+r)),r}var Ue=String.prototype.toLowerCase,Ne=String.prototype.toUpperCase;function $e(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Ve(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Oe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Oe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ne.call(r.specifier)?Ne.call(t):Ue.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Pe(r){return"string"==typeof r}var Ce=Math.abs,Ge=String.prototype.toLowerCase,Re=String.prototype.toUpperCase,We=String.prototype.replace,Le=/e\+(\d)$/,Ze=/e-(\d)$/,He=/^(\d+)$/,Me=/^(\d+)e/,Xe=/\.0$/,Ye=/\.0*e/,qe=/(\..*[^0])0*e/;function ze(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Ve(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ce(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=We.call(t,qe,"$1e"),t=We.call(t,Ye,"e"),t=We.call(t,Xe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=We.call(t,Le,"e+0$1"),t=We.call(t,Ze,"e-0$1"),r.alternate&&(t=We.call(t,He,"$1."),t=We.call(t,Me,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Re.call(r.specifier)?Re.call(t):Ge.call(t)}function Be(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function De(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Be(n):Be(n)+r}var Je=String.fromCharCode,Ke=isNaN,Qe=Array.isArray;function rt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function et(r){var e,t,n,i,a,o,c,u,f;if(!Qe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(Pe(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=rt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ke(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ke(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=$e(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ke(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ke(a)?String(n.arg):Je(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ze(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Oe(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=De(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var tt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function nt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function it(r){var e,t,n,i;for(t=[],i=0,n=tt.exec(r);n;)(e=r.slice(i,tt.lastIndex-n[0].length)).length&&t.push(e),t.push(nt(n)),i=tt.lastIndex,n=tt.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function at(r){return"string"==typeof r}function ot(r){var e,t,n;if(!at(r))throw new TypeError(ot("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=it(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return et.apply(null,t)}function ct(r){return r>>>0}var ut=ct(31),ft=ct(31);function st(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function lt(r){return"number"==typeof r}var pt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function gt(){return pt&&"symbol"==typeof Symbol.toStringTag}var dt=Object.prototype.toString,ht=Object.prototype.hasOwnProperty,yt="function"==typeof Symbol?Symbol:void 0,vt="function"==typeof yt?yt.toStringTag:"",bt=gt()?function(r){var e,t,n,i,a;if(null==r)return dt.call(r);t=r[vt],a=vt,e=null!=(i=r)&&ht.call(i,a);try{r[vt]=void 0}catch(e){return dt.call(r)}return n=dt.call(r),e?r[vt]=t:delete r[vt],n}:function(r){return dt.call(r)},wt=Number,mt=wt.prototype.toString,_t=gt();function Et(r){return"object"==typeof r&&(r instanceof wt||(_t?function(r){try{return mt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===bt(r)))}function St(r){return lt(r)||Et(r)}st(St,"isPrimitive",lt),st(St,"isObject",Et);var At=Number.POSITIVE_INFINITY,It=wt.NEGATIVE_INFINITY,xt=Math.floor;function jt(r){return r<At&&r>It&&xt(e=r)===e;var e}function kt(r){return lt(r)&&jt(r)}function Tt(r){return Et(r)&&jt(r.valueOf())}function Vt(r){return kt(r)||Tt(r)}function Ft(r){return kt(r)&&r>=0}function Ot(r){return Tt(r)&&r.valueOf()>=0}function Ut(r){return Ft(r)||Ot(r)}function Nt(r){return"string"==typeof r}st(Vt,"isPrimitive",kt),st(Vt,"isObject",Tt),st(Ut,"isPrimitive",Ft),st(Ut,"isObject",Ot);var $t=String.prototype.valueOf,Pt=gt();function Ct(r){return"object"==typeof r&&(r instanceof String||(Pt?function(r){try{return $t.call(r),!0}catch(r){return!1}}(r):"[object String]"===bt(r)))}function Gt(r){return Nt(r)||Ct(r)}st(Gt,"isPrimitive",Nt),st(Gt,"isObject",Ct);var Rt=9007199254740991,Wt=void 0!==String.prototype.repeat,Lt=String.prototype.repeat,Zt=Wt?function(r,e){return Lt.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Ht=Math.ceil;function Mt(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Ht(n),Zt(t,n)+r)}var Xt={};W(Xt,"fromBinaryStringUint32",(function(r){var e,t;if(32!==r.length)throw new Error(ot("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(e=0,t=0;t<r.length;t++)"1"===r[t]&&(e+=Te(2,32-t-1));return e>>>0})),W(Xt,"rotl32",(function(r,e){return ct(r<<(e&=ut)|r>>>(-e&ut))})),W(Xt,"rotr32",(function(r,e){return ct(r>>>(e&=ft)|r<<(-e&ft))})),W(Xt,"toBinaryStringUint32",(function(r){var e;return e=function(r){var e,t,n="";for(e=32;r>0&&e;)n=(t=r/2)===(r=xt(t))?"0"+n:"1"+n,e-=1;return n}(r),e=function(r,e,t){var n;if(!Nt(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ft(e))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Nt(n=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Rt)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Mt(r,e,n)}(e,32,"0"),e})),W(Xt,"uint32ToInt32",(function(r){return 0|r}));var Yt={};return W(Yt,"base",Xt),Yt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=index.js.map
