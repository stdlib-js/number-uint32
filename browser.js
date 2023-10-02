// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,I=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,A(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var U=Object.prototype,N=U.toString,$=U.__defineGetter__,P=U.__defineSetter__,C=U.__lookupGetter__,G=U.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function W(r,e,t){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r){return r!=r}var Z=Math.floor;function H(r){return Z(r)===r}function M(r){return H(r/2)}function X(r){return M(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J="function"==typeof Object.defineProperty?Object.defineProperty:null,K=Object.defineProperty,Q=Object.prototype,rr=Q.toString,er=Q.__defineGetter__,tr=Q.__defineSetter__,nr=Q.__lookupGetter__,ir=Q.__lookupSetter__,ar=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===rr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===rr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(nr.call(r,e)||ir.call(r,e)?(n=r.__proto__,r.__proto__=Q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(r,e,t.get),o&&tr&&tr.call(r,e,t.set),r};function or(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ur(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var cr,fr=ur(),sr=Object.prototype.toString,lr=Object.prototype.hasOwnProperty,pr="function"==typeof Symbol?Symbol.toStringTag:"",gr=fr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return sr.call(r);t=r[pr],a=pr,e=null!=(i=r)&&lr.call(i,a);try{r[pr]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[pr]=t:delete r[pr],n}:function(r){return sr.call(r)},dr="function"==typeof Uint32Array,hr="function"==typeof Uint32Array?Uint32Array:null,yr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===gr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr,wr=cr,br="function"==typeof Float64Array,mr="function"==typeof Float64Array?Float64Array:null,_r="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr([1,3.14,-3.14,NaN]),t=e,r=(br&&t instanceof Float64Array||"[object Float64Array]"===gr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Sr=vr,Ar="function"==typeof Uint8Array,Ir="function"==typeof Uint8Array?Uint8Array:null,xr="function"==typeof Uint8Array?Uint8Array:void 0;Er=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,256,257]),t=e,r=(Ar&&t instanceof Uint8Array||"[object Uint8Array]"===gr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var jr,kr=Er,Tr="function"==typeof Uint16Array,Vr="function"==typeof Uint16Array?Uint16Array:null,Fr="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Tr&&t instanceof Uint16Array||"[object Uint16Array]"===gr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Or,Ur={uint16:jr,uint8:kr};(Or=new Ur.uint16(1))[0]=4660;var Nr,$r,Pr=52===new Ur.uint8(Or.buffer)[0];!0===Pr?(Nr=1,$r=0):(Nr=0,$r=1);var Cr={HIGH:Nr,LOW:$r},Gr=new Sr(1),Rr=new wr(Gr.buffer),Wr=Cr.HIGH,Lr=Cr.LOW;function Zr(r,e,t,n){return Gr[0]=r,e[n]=Rr[Wr],e[n+t]=Rr[Lr],e}function Hr(r){return Zr(r,[0,0],1,0)}or(Hr,"assign",Zr);var Mr=!0===Pr?0:1,Xr=new Sr(1),Yr=new wr(Xr.buffer);function qr(r,e){return Xr[0]=r,Yr[Mr]=e>>>0,Xr[0]}function zr(r){return 0|r}var Br,Dr,Jr=2147483647,Kr=!0===Pr?1:0,Qr=new Sr(1),re=new wr(Qr.buffer);function ee(r){return Qr[0]=r,re[Kr]}!0===Pr?(Br=1,Dr=0):(Br=0,Dr=1);var te={HIGH:Br,LOW:Dr},ne=new Sr(1),ie=new wr(ne.buffer),ae=te.HIGH,oe=te.LOW;function ue(r,e){return ie[ae]=r,ie[oe]=e,ne[0]}var ce=[0,0];function fe(r,e){var t,n;return Hr.assign(r,ce,1,0),t=ce[0],t&=Jr,n=ee(e),ue(t|=n&=2147483648,ce[1])}var se=!0===Pr?1:0,le=new Sr(1),pe=new wr(le.buffer);function ge(r,e){return le[0]=r,pe[se]=e>>>0,le[0]}var de=1023,he=1048576,ye=[1,1.5],ve=[0,.5849624872207642],we=[0,1.350039202129749e-8];function be(r,e,t,n){return L(r)||z(r)?(e[n]=r,e[n+t]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}or((function(r){return be(r,[0,0],1,0)}),"assign",be);var me=[0,0],_e=[0,0];function Ee(r,e){var t,n;return 0===e||0===r||L(r)||z(r)?r:(be(r,me,1,0),e+=me[1],e+=function(r){var e=ee(r);return(e=(2146435072&e)>>>20)-de|0}(r=me[0]),e<-1074?fe(0,r):e>1023?r<0?q:Y:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Hr.assign(r,_e,1,0),t=_e[0],t&=2148532223,n*ue(t|=e+de<<20,_e[1])))}var Se=1048575,Ae=1048576,Ie=1083179008,xe=1e300,je=1e-300,ke=[0,0],Te=[0,0];function Ve(r,e){var t,n,i,a,o,u,c,f,s,l,p,g,d,h;if(L(r)||L(e))return NaN;if(Hr.assign(e,ke,1,0),o=ke[0],0===ke[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===Y)?0:Y}(r,e)}if(Hr.assign(r,ke,1,0),a=ke[0],0===ke[1]){if(0===a)return function(r,e){return e===q?Y:e===Y?0:e>0?X(e)?r:0:X(e)?fe(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&X(e))return-1;if(z(r))return r===q?Ve(-0,-e):e<0?0:Y}if(r<0&&!1===H(e))return(r-r)/(r-r);if(i=D(r),t=a&Jr|0,n=o&Jr|0,c=o>>>31|0,u=(u=a>>>31|0)&&X(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(ee(r)&Jr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===c?u*xe*xe:u*je*je;if(t>1072693248)return 0===c?u*xe*xe:u*je*je;p=function(r,e){var t,n,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=qr(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r}(Te,i)}else p=function(r,e,t){var n,i,a,o,u,c,f,s,l,p,g,d,h,y,v,w,b,m,_,E,S;return m=0,t<he&&(m-=53,t=ee(e*=9007199254740992)),m+=(t>>20)-de|0,t=1072693248|(_=1048575&t|0),_<=235662?E=0:_<767610?E=1:(E=0,m+=1,t-=he),o=qr(i=(w=(e=ge(e,t))-(f=ye[E]))*(b=1/(e+f)),0),n=524288+(t>>1|536870912),c=ge(0,n+=E<<18),v=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=qr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),h=(g=-7.028461650952758e-9*(l=qr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+we[E])-((d=qr(d=(p=.9617967009544373*l)+g+(s=ve[E])+(y=m),0))-y-s-p),r[0]=d,r[1]=h,r}(Te,i,t);if(g=(l=(e-(f=qr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Hr.assign(g,ke,1,0),d=zr(ke[0]),h=zr(ke[1]),d>=Ie){if(0!=(d-Ie|h))return u*xe*xe;if(l+8008566259537294e-32>g-s)return u*xe*xe}else if((d&Jr)>=1083231232){if(0!=(d-3230714880|h))return u*je*je;if(l<=g-s)return u*je*je}return g=function(r,e,t){var n,i,a,o,u,c,f,s,l,p;return l=((s=r&Jr|0)>>20)-de|0,f=0,s>1071644672&&(i=ge(0,((f=r+(Ae>>l+1)>>>0)&~(Se>>(l=((f&Jr)>>20)-de|0)))>>>0),f=(f&Se|Ae)>>20-l>>>0,r<0&&(f=-f),e-=i),r=zr(r=ee(c=1-((c=(a=.6931471824645996*(i=qr(i=t+e,0)))+(o=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Ee(c,f):ge(c,r)}(d,s,l),u*g}function Fe(r){return"number"==typeof r}function Oe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ue(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Oe(i):Oe(i)+r,n&&(r="-"+r)),r}var Ne=String.prototype.toLowerCase,$e=String.prototype.toUpperCase;function Pe(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Fe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ue(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ue(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===$e.call(r.specifier)?$e.call(t):Ne.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ce(r){return"string"==typeof r}var Ge=Math.abs,Re=String.prototype.toLowerCase,We=String.prototype.toUpperCase,Le=String.prototype.replace,Ze=/e\+(\d)$/,He=/e-(\d)$/,Me=/^(\d+)$/,Xe=/^(\d+)e/,Ye=/\.0$/,qe=/\.0*e/,ze=/(\..*[^0])0*e/;function Be(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Fe(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ge(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Le.call(t,ze,"$1e"),t=Le.call(t,qe,"e"),t=Le.call(t,Ye,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Le.call(t,Ze,"e+0$1"),t=Le.call(t,He,"e-0$1"),r.alternate&&(t=Le.call(t,Me,"$1."),t=Le.call(t,Xe,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===We.call(r.specifier)?We.call(t):Re.call(t)}function De(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Je(r,e,t){var n=e-r.length;return n<0?r:r=t?r+De(n):De(n)+r}var Ke=String.fromCharCode,Qe=isNaN,rt=Array.isArray;function et(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function tt(r){var e,t,n,i,a,o,u,c,f;if(!rt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(Ce(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=et(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Qe(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Qe(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Pe(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Qe(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Qe(a)?String(n.arg):Ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Be(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ue(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Je(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var nt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function it(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function at(r){var e,t,n,i;for(t=[],i=0,n=nt.exec(r);n;)(e=r.slice(i,nt.lastIndex-n[0].length)).length&&t.push(e),t.push(it(n)),i=nt.lastIndex,n=nt.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ot(r){return"string"==typeof r}function ut(r){var e,t,n;if(!ot(r))throw new TypeError(ut("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=at(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return tt.apply(null,t)}function ct(r){return r>>>0}var ft=ct(31),st=ct(31);function lt(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function pt(r){return"number"==typeof r}var gt=ur();function dt(){return gt&&"symbol"==typeof Symbol.toStringTag}var ht=Object.prototype.toString,yt=Object.prototype.hasOwnProperty,vt="function"==typeof Symbol?Symbol:void 0,wt="function"==typeof vt?vt.toStringTag:"",bt=dt()?function(r){var e,t,n,i,a;if(null==r)return ht.call(r);t=r[wt],a=wt,e=null!=(i=r)&&yt.call(i,a);try{r[wt]=void 0}catch(e){return ht.call(r)}return n=ht.call(r),e?r[wt]=t:delete r[wt],n}:function(r){return ht.call(r)},mt=Number,_t=mt.prototype.toString,Et=dt();function St(r){return"object"==typeof r&&(r instanceof mt||(Et?function(r){try{return _t.call(r),!0}catch(r){return!1}}(r):"[object Number]"===bt(r)))}function At(r){return pt(r)||St(r)}lt(At,"isPrimitive",pt),lt(At,"isObject",St);var It=Number.POSITIVE_INFINITY,xt=mt.NEGATIVE_INFINITY,jt=Math.floor;function kt(r){return r<It&&r>xt&&jt(e=r)===e;var e}function Tt(r){return pt(r)&&kt(r)}function Vt(r){return St(r)&&kt(r.valueOf())}function Ft(r){return Tt(r)||Vt(r)}function Ot(r){return Tt(r)&&r>=0}function Ut(r){return Vt(r)&&r.valueOf()>=0}function Nt(r){return Ot(r)||Ut(r)}function $t(r){return"string"==typeof r}lt(Ft,"isPrimitive",Tt),lt(Ft,"isObject",Vt),lt(Nt,"isPrimitive",Ot),lt(Nt,"isObject",Ut);var Pt=String.prototype.valueOf,Ct=dt();function Gt(r){return"object"==typeof r&&(r instanceof String||(Ct?function(r){try{return Pt.call(r),!0}catch(r){return!1}}(r):"[object String]"===bt(r)))}function Rt(r){return $t(r)||Gt(r)}lt(Rt,"isPrimitive",$t),lt(Rt,"isObject",Gt);var Wt=9007199254740991,Lt=void 0!==String.prototype.repeat,Zt=String.prototype.repeat,Ht=Lt?function(r,e){return Zt.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Mt=Math.ceil;function Xt(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Mt(n),Ht(t,n)+r)}var Yt={};W(Yt,"fromBinaryStringUint32",(function(r){var e,t;if(32!==r.length)throw new Error(ut("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(e=0,t=0;t<r.length;t++)"1"===r[t]&&(e+=Ve(2,32-t-1));return e>>>0})),W(Yt,"rotl32",(function(r,e){return ct(r<<(e&=ft)|r>>>(-e&ft))})),W(Yt,"rotr32",(function(r,e){return ct(r>>>(e&=st)|r<<(-e&st))})),W(Yt,"toBinaryStringUint32",(function(r){var e;return e=function(r){var e,t,n="";for(e=32;r>0&&e;)n=(t=r/2)===(r=jt(t))?"0"+n:"1"+n,e-=1;return n}(r),e=function(r,e,t){var n;if(!$t(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ot(e))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!$t(n=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Wt)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Xt(r,e,n)}(e,32,"0"),e})),W(Yt,"uint32ToInt32",(function(r){return 0|r}));var qt={};return W(qt,"base",Yt),qt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=browser.js.map
