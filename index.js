// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,w,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):s.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var S=String.fromCharCode,j=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,a,o,l,s,p,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,p=0;p<e.length;p++)if(u(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,j(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function O(e){var r,t,n;if(!F(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var $,P=Object.prototype,U=P.toString,C=P.__defineGetter__,N=P.__defineSetter__,R=P.__lookupGetter__,G=P.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var W,Z=$,L="function"==typeof Object.defineProperty?Object.defineProperty:null,M=Object.defineProperty,H=Object.prototype,X=H.toString,z=H.__defineGetter__,Y=H.__defineSetter__,q=H.__lookupGetter__,B=H.__lookupSetter__;W=function(){try{return L({},"x",{}),!0}catch(e){return!1}}()?M:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===X.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(q.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=H,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&z&&z.call(e,r,t.get),o&&Y&&Y.call(e,r,t.set),e};var D=W;function J(e,r,t){D(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function K(e){return e!=e}var Q=Math.floor;function ee(e){return Q(e)===e}function re(e){return ee(e/2)}function te(e){return re(e>0?e-1:e+1)}var ne=Number.POSITIVE_INFINITY,ie=Number.NEGATIVE_INFINITY;function ae(e){return e===ne||e===ie}var oe=Math.sqrt;function ce(e){return Math.abs(e)}var ue,le="function"==typeof Object.defineProperty?Object.defineProperty:null,se=Object.defineProperty,pe=Object.prototype,fe=pe.toString,ge=pe.__defineGetter__,de=pe.__defineSetter__,he=pe.__lookupGetter__,ye=pe.__lookupSetter__;ue=function(){try{return le({},"x",{}),!0}catch(e){return!1}}()?se:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===fe.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===fe.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(he.call(e,r)||ye.call(e,r)?(n=e.__proto__,e.__proto__=pe,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ge&&ge.call(e,r,t.get),o&&de&&de.call(e,r,t.set),e};var be=ue;function we(e,r,t){be(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ve(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var me=ve(),_e=Object.prototype.toString,Ee=Object.prototype.hasOwnProperty;function Se(e,r){return null!=e&&Ee.call(e,r)}var je,ke="function"==typeof Symbol?Symbol.toStringTag:"",xe=me&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return _e.call(e);t=e[ke],r=Se(e,ke);try{e[ke]=void 0}catch(r){return _e.call(e)}return n=_e.call(e),r?e[ke]=t:delete e[ke],n}:function(e){return _e.call(e)},Ae="function"==typeof Uint32Array,Te="function"==typeof Uint32Array?Uint32Array:null,Ve="function"==typeof Uint32Array?Uint32Array:void 0;je=function(){var e,r,t;if("function"!=typeof Te)return!1;try{r=new Te(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Ae&&t instanceof Uint32Array||"[object Uint32Array]"===xe(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ve:function(){throw new Error("not implemented")};var Ie,Fe=je,Oe="function"==typeof Float64Array,$e="function"==typeof Float64Array?Float64Array:null,Pe="function"==typeof Float64Array?Float64Array:void 0;Ie=function(){var e,r,t;if("function"!=typeof $e)return!1;try{r=new $e([1,3.14,-3.14,NaN]),t=r,e=(Oe&&t instanceof Float64Array||"[object Float64Array]"===xe(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Pe:function(){throw new Error("not implemented")};var Ue,Ce=Ie,Ne="function"==typeof Uint8Array,Re="function"==typeof Uint8Array?Uint8Array:null,Ge="function"==typeof Uint8Array?Uint8Array:void 0;Ue=function(){var e,r,t;if("function"!=typeof Re)return!1;try{r=new Re(r=[1,3.14,-3.14,256,257]),t=r,e=(Ne&&t instanceof Uint8Array||"[object Uint8Array]"===xe(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ge:function(){throw new Error("not implemented")};var We,Ze=Ue,Le="function"==typeof Uint16Array,Me="function"==typeof Uint16Array?Uint16Array:null,He="function"==typeof Uint16Array?Uint16Array:void 0;We=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Le&&t instanceof Uint16Array||"[object Uint16Array]"===xe(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?He:function(){throw new Error("not implemented")};var Xe,ze={uint16:We,uint8:Ze};(Xe=new ze.uint16(1))[0]=4660;var Ye,qe,Be=52===new ze.uint8(Xe.buffer)[0];!0===Be?(Ye=1,qe=0):(Ye=0,qe=1);var De={HIGH:Ye,LOW:qe},Je=new Ce(1),Ke=new Fe(Je.buffer),Qe=De.HIGH,er=De.LOW;function rr(e,r,t,n){return Je[0]=e,r[n]=Ke[Qe],r[n+t]=Ke[er],r}function tr(e){return rr(e,[0,0],1,0)}we(tr,"assign",rr);var nr=!0===Be?0:1,ir=new Ce(1),ar=new Fe(ir.buffer);function or(e,r){return ir[0]=e,ar[nr]=r>>>0,ir[0]}function cr(e){return 0|e}var ur,lr,sr=2147483647,pr=!0===Be?1:0,fr=new Ce(1),gr=new Fe(fr.buffer);function dr(e){return fr[0]=e,gr[pr]}!0===Be?(ur=1,lr=0):(ur=0,lr=1);var hr={HIGH:ur,LOW:lr},yr=new Ce(1),br=new Fe(yr.buffer),wr=hr.HIGH,vr=hr.LOW;function mr(e,r){return br[wr]=e,br[vr]=r,yr[0]}var _r=[0,0];function Er(e,r){var t,n;return tr.assign(e,_r,1,0),t=_r[0],t&=sr,n=dr(r),mr(t|=n&=2147483648,_r[1])}var Sr=!0===Be?1:0,jr=new Ce(1),kr=new Fe(jr.buffer);function xr(e,r){return jr[0]=e,kr[Sr]=r>>>0,jr[0]}var Ar=1023,Tr=1048576,Vr=[1,1.5],Ir=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Or(e,r,t,n){return K(e)||ae(e)?(r[n]=e,r[n+t]=0,r):0!==e&&ce(e)<22250738585072014e-324?(r[n]=4503599627370496*e,r[n+t]=-52,r):(r[n]=e,r[n+t]=0,r)}we((function(e){return Or(e,[0,0],1,0)}),"assign",Or);var $r=[0,0],Pr=[0,0];function Ur(e,r){var t,n;return 0===r||0===e||K(e)||ae(e)?e:(Or(e,$r,1,0),r+=$r[1],r+=function(e){var r=dr(e);return(r=(2146435072&r)>>>20)-Ar|0}(e=$r[0]),r<-1074?Er(0,e):r>1023?e<0?ie:ne:(r<=-1023?(r+=52,n=2220446049250313e-31):n=1,tr.assign(e,Pr,1,0),t=Pr[0],t&=2148532223,n*mr(t|=r+Ar<<20,Pr[1])))}var Cr=1048575,Nr=1048576,Rr=1083179008,Gr=1e300,Wr=1e-300,Zr=[0,0],Lr=[0,0];function Mr(e,r){var t,n,i,a,o,c,u,l,s,p,f,g,d,h;if(K(e)||K(r))return NaN;if(tr.assign(r,Zr,1,0),o=Zr[0],0===Zr[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return oe(e);if(-.5===r)return 1/oe(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(ae(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:ce(e)<1==(r===ne)?0:ne}(e,r)}if(tr.assign(e,Zr,1,0),a=Zr[0],0===Zr[1]){if(0===a)return function(e,r){return r===ie?ne:r===ne?0:r>0?te(r)?e:0:te(r)?Er(ne,e):ne}(e,r);if(1===e)return 1;if(-1===e&&te(r))return-1;if(ae(e))return e===ie?Mr(-0,-r):r<0?0:ne}if(e<0&&!1===ee(r))return(e-e)/(e-e);if(i=ce(e),t=a&sr|0,n=o&sr|0,u=o>>>31|0,c=(c=a>>>31|0)&&te(r)?-1:1,n>1105199104){if(n>1139802112)return function(e,r){return(dr(e)&sr)<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,r);if(t<1072693247)return 1===u?c*Gr*Gr:c*Wr*Wr;if(t>1072693248)return 0===u?c*Gr*Gr:c*Wr*Wr;f=function(e,r){var t,n,i,a,o,c;return t=(o=1.9259629911266175e-8*(i=r-1)-i*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333))*1.4426950408889634)-((n=or(n=(a=1.4426950216293335*i)+o,0))-a),e[0]=n,e[1]=t,e}(Lr,i)}else f=function(e,r,t){var n,i,a,o,c,u,l,s,p,f,g,d,h,y,b,w,v,m,_,E,S;return m=0,t<Tr&&(m-=53,t=dr(r*=9007199254740992)),m+=(t>>20)-Ar|0,t=1072693248|(_=1048575&t|0),_<=235662?E=0:_<767610?E=1:(E=0,m+=1,t-=Tr),o=or(i=(w=(r=xr(r,t))-(l=Vr[E]))*(v=1/(r+l)),0),n=524288+(t>>1|536870912),u=xr(0,n+=E<<18),b=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),u=or(u=3+(a=o*o)+(b+=(c=v*(w-o*u-o*(r-(u-l))))*(o+i)),0),h=(g=-7.028461650952758e-9*(p=or(p=(w=o*u)+(v=c*u+(b-(u-3-a))*i),0))+.9617966939259756*(v-(p-w))+Fr[E])-((d=or(d=(f=.9617967009544373*p)+g+(s=Ir[E])+(y=m),0))-y-s-f),e[0]=d,e[1]=h,e}(Lr,i,t);if(g=(p=(r-(l=or(r,0)))*f[0]+r*f[1])+(s=l*f[0]),tr.assign(g,Zr,1,0),d=cr(Zr[0]),h=cr(Zr[1]),d>=Rr){if(0!=(d-Rr|h))return c*Gr*Gr;if(p+8008566259537294e-32>g-s)return c*Gr*Gr}else if((d&sr)>=1083231232){if(0!=(d-3230714880|h))return c*Wr*Wr;if(p<=g-s)return c*Wr*Wr}return g=function(e,r,t){var n,i,a,o,c,u,l,s,p,f;return p=((s=e&sr|0)>>20)-Ar|0,l=0,s>1071644672&&(i=xr(0,((l=e+(Nr>>p+1)>>>0)&~(Cr>>(p=((l&sr)>>20)-Ar|0)))>>>0),l=(l&Cr|Nr)>>20-p>>>0,e<0&&(l=-l),r-=i),e=cr(e=dr(u=1-((u=(a=.6931471824645996*(i=or(i=t+r,0)))+(o=.6931471805599453*(t-(i-r))+-1.904654299957768e-9*i))*(n=u-(i=u*u)*(0===(f=i)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((c=o-(u-a))+u*c)-u))),(e+=l<<20>>>0)>>20<=0?Ur(u,l):xr(u,e)}(d,s,p),c*g}function Hr(e){return"number"==typeof e}function Xr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function zr(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Xr(i):Xr(i)+e,n&&(e="-"+e)),e}var Yr=String.prototype.toLowerCase,qr=String.prototype.toUpperCase;function Br(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Hr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=zr(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=zr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===qr.call(e.specifier)?qr.call(t):Yr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Dr(e){return"string"==typeof e}var Jr=Math.abs,Kr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase,et=String.prototype.replace,rt=/e\+(\d)$/,tt=/e-(\d)$/,nt=/^(\d+)$/,it=/^(\d+)e/,at=/\.0$/,ot=/\.0*e/,ct=/(\..*[^0])0*e/;function ut(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Hr(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Jr(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=et.call(t,ct,"$1e"),t=et.call(t,ot,"e"),t=et.call(t,at,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=et.call(t,rt,"e+0$1"),t=et.call(t,tt,"e-0$1"),e.alternate&&(t=et.call(t,nt,"$1."),t=et.call(t,it,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Qr.call(e.specifier)?Qr.call(t):Kr.call(t)}function lt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function st(e,r,t){var n=r-e.length;return n<0?e:e=t?e+lt(n):lt(n)+e}var pt=String.fromCharCode,ft=isNaN,gt=Array.isArray;function dt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ht(e){var r,t,n,i,a,o,c,u,l;if(!gt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(Dr(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=dt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ft(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ft(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Br(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ft(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ft(a)?String(n.arg):pt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=ut(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=zr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=st(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function bt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function wt(e){var r,t,n,i;for(t=[],i=0,n=yt.exec(e);n;)(r=e.slice(i,yt.lastIndex-n[0].length)).length&&t.push(r),t.push(bt(n)),i=yt.lastIndex,n=yt.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function vt(e){return"string"==typeof e}function mt(e){var r,t,n;if(!vt(e))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=wt(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return ht.apply(null,t)}function _t(e){return e>>>0}var Et,St=_t(31),jt=_t(31),kt="function"==typeof Object.defineProperty?Object.defineProperty:null,xt=Object.defineProperty,At=Object.prototype,Tt=At.toString,Vt=At.__defineGetter__,It=At.__defineSetter__,Ft=At.__lookupGetter__,Ot=At.__lookupSetter__;Et=function(){try{return kt({},"x",{}),!0}catch(e){return!1}}()?xt:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Tt.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===Tt.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(Ft.call(e,r)||Ot.call(e,r)?(n=e.__proto__,e.__proto__=At,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vt&&Vt.call(e,r,t.get),o&&It&&It.call(e,r,t.set),e};var $t=Et;function Pt(e,r,t){$t(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Ut,Ct="function"==typeof Object.defineProperty?Object.defineProperty:null,Nt=Object.defineProperty,Rt=Object.prototype,Gt=Rt.toString,Wt=Rt.__defineGetter__,Zt=Rt.__defineSetter__,Lt=Rt.__lookupGetter__,Mt=Rt.__lookupSetter__;Ut=function(){try{return Ct({},"x",{}),!0}catch(e){return!1}}()?Nt:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Gt.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===Gt.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(Lt.call(e,r)||Mt.call(e,r)?(n=e.__proto__,e.__proto__=Rt,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Wt&&Wt.call(e,r,t.get),o&&Zt&&Zt.call(e,r,t.set),e};var Ht=Ut;function Xt(e,r,t){Ht(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function zt(e){return"number"==typeof e}var Yt=ve();function qt(){return Yt&&"symbol"==typeof Symbol.toStringTag}var Bt=Object.prototype.toString,Dt="function"==typeof Symbol?Symbol.toStringTag:"",Jt=qt()?function(e){var r,t,n;if(null==e)return Bt.call(e);t=e[Dt],r=Se(e,Dt);try{e[Dt]=void 0}catch(r){return Bt.call(e)}return n=Bt.call(e),r?e[Dt]=t:delete e[Dt],n}:function(e){return Bt.call(e)},Kt=Number,Qt=Kt.prototype.toString,en=qt();function rn(e){return"object"==typeof e&&(e instanceof Kt||(en?function(e){try{return Qt.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Jt(e)))}function tn(e){return zt(e)||rn(e)}Xt(tn,"isPrimitive",zt),Xt(tn,"isObject",rn);var nn=Number.POSITIVE_INFINITY,an=Kt.NEGATIVE_INFINITY,on=Math.floor;function cn(e){return e<nn&&e>an&&on(r=e)===r;var r}function un(e){return zt(e)&&cn(e)}function ln(e){return rn(e)&&cn(e.valueOf())}function sn(e){return un(e)||ln(e)}function pn(e){return un(e)&&e>=0}function fn(e){return ln(e)&&e.valueOf()>=0}function gn(e){return pn(e)||fn(e)}function dn(e,r,t){D(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function hn(e){return"string"==typeof e}Xt(sn,"isPrimitive",un),Xt(sn,"isObject",ln),Pt(gn,"isPrimitive",pn),Pt(gn,"isObject",fn);var yn=ve();function bn(){return yn&&"symbol"==typeof Symbol.toStringTag}var wn=Object.prototype.toString,vn="function"==typeof Symbol?Symbol.toStringTag:"",mn=bn()?function(e){var r,t,n;if(null==e)return wn.call(e);t=e[vn],r=Se(e,vn);try{e[vn]=void 0}catch(r){return wn.call(e)}return n=wn.call(e),r?e[vn]=t:delete e[vn],n}:function(e){return wn.call(e)},_n=String.prototype.valueOf,En=bn();function Sn(e){return"object"==typeof e&&(e instanceof String||(En?function(e){try{return _n.call(e),!0}catch(e){return!1}}(e):"[object String]"===mn(e)))}function jn(e){return hn(e)||Sn(e)}dn(jn,"isPrimitive",hn),dn(jn,"isObject",Sn);var kn,xn="function"==typeof Object.defineProperty?Object.defineProperty:null,An=Object.defineProperty,Tn=Object.prototype,Vn=Tn.toString,In=Tn.__defineGetter__,Fn=Tn.__defineSetter__,On=Tn.__lookupGetter__,$n=Tn.__lookupSetter__;kn=function(){try{return xn({},"x",{}),!0}catch(e){return!1}}()?An:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Vn.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===Vn.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(On.call(e,r)||$n.call(e,r)?(n=e.__proto__,e.__proto__=Tn,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&In&&In.call(e,r,t.get),o&&Fn&&Fn.call(e,r,t.set),e};var Pn=kn;function Un(e,r,t){Pn(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Cn(e){return"string"==typeof e}var Nn=ve();function Rn(){return Nn&&"symbol"==typeof Symbol.toStringTag}var Gn=Object.prototype.toString,Wn="function"==typeof Symbol?Symbol.toStringTag:"",Zn=Rn()?function(e){var r,t,n;if(null==e)return Gn.call(e);t=e[Wn],r=Se(e,Wn);try{e[Wn]=void 0}catch(r){return Gn.call(e)}return n=Gn.call(e),r?e[Wn]=t:delete e[Wn],n}:function(e){return Gn.call(e)},Ln=String.prototype.valueOf,Mn=Rn();function Hn(e){return"object"==typeof e&&(e instanceof String||(Mn?function(e){try{return Ln.call(e),!0}catch(e){return!1}}(e):"[object String]"===Zn(e)))}function Xn(e){return Cn(e)||Hn(e)}Un(Xn,"isPrimitive",Cn),Un(Xn,"isObject",Hn);var zn=9007199254740991;function Yn(e){return"number"==typeof e}function qn(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Bn(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+qn(i):qn(i)+e,n&&(e="-"+e)),e}var Dn=String.prototype.toLowerCase,Jn=String.prototype.toUpperCase;function Kn(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Yn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Bn(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Bn(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Jn.call(e.specifier)?Jn.call(t):Dn.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Qn(e){return"string"==typeof e}var ei=Math.abs,ri=String.prototype.toLowerCase,ti=String.prototype.toUpperCase,ni=String.prototype.replace,ii=/e\+(\d)$/,ai=/e-(\d)$/,oi=/^(\d+)$/,ci=/^(\d+)e/,ui=/\.0$/,li=/\.0*e/,si=/(\..*[^0])0*e/;function pi(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Yn(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":ei(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=ni.call(t,si,"$1e"),t=ni.call(t,li,"e"),t=ni.call(t,ui,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ni.call(t,ii,"e+0$1"),t=ni.call(t,ai,"e-0$1"),e.alternate&&(t=ni.call(t,oi,"$1."),t=ni.call(t,ci,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ti.call(e.specifier)?ti.call(t):ri.call(t)}function fi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function gi(e,r,t){var n=r-e.length;return n<0?e:e=t?e+fi(n):fi(n)+e}var di=String.fromCharCode,hi=isNaN,yi=Array.isArray;function bi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wi(e){var r,t,n,i,a,o,c,u,l;if(!yi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(Qn(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=bi(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,hi(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,hi(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Kn(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!hi(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=hi(a)?String(n.arg):di(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=pi(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Bn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=gi(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var vi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _i(e){var r,t,n,i;for(t=[],i=0,n=vi.exec(e);n;)(r=e.slice(i,vi.lastIndex-n[0].length)).length&&t.push(r),t.push(mi(n)),i=vi.lastIndex,n=vi.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Ei(e){return"string"==typeof e}function Si(e){var r,t,n;if(!Ei(e))throw new TypeError(Si("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=_i(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return wi.apply(null,t)}function ji(e,r){var t,n;if(!Cn(e))throw new TypeError(Si("invalid argument. First argument must be a string. Value: `%s`.",e));if(!pn(r))throw new TypeError(Si("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(0===e.length||0===r)return"";if(e.length*r>zn)throw new RangeError(Si("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e.length*r));for(t="",n=r;1==(1&n)&&(t+=e),0!=(n>>>=1);)e+=e;return t}var ki=Math.ceil;function xi(e){return"number"==typeof e}function Ai(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ti(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ai(i):Ai(i)+e,n&&(e="-"+e)),e}var Vi=String.prototype.toLowerCase,Ii=String.prototype.toUpperCase;function Fi(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!xi(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Ti(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Ti(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ii.call(e.specifier)?Ii.call(t):Vi.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Oi(e){return"string"==typeof e}var $i=Math.abs,Pi=String.prototype.toLowerCase,Ui=String.prototype.toUpperCase,Ci=String.prototype.replace,Ni=/e\+(\d)$/,Ri=/e-(\d)$/,Gi=/^(\d+)$/,Wi=/^(\d+)e/,Zi=/\.0$/,Li=/\.0*e/,Mi=/(\..*[^0])0*e/;function Hi(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!xi(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":$i(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Ci.call(t,Mi,"$1e"),t=Ci.call(t,Li,"e"),t=Ci.call(t,Zi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ci.call(t,Ni,"e+0$1"),t=Ci.call(t,Ri,"e-0$1"),e.alternate&&(t=Ci.call(t,Gi,"$1."),t=Ci.call(t,Wi,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ui.call(e.specifier)?Ui.call(t):Pi.call(t)}function Xi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function zi(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Xi(n):Xi(n)+e}var Yi=String.fromCharCode,qi=isNaN,Bi=Array.isArray;function Di(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ji(e){var r,t,n,i,a,o,c,u,l;if(!Bi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(Oi(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=Di(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,qi(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,qi(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Fi(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!qi(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=qi(a)?String(n.arg):Yi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Hi(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ti(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=zi(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ki=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ea(e){var r,t,n,i;for(t=[],i=0,n=Ki.exec(e);n;)(r=e.slice(i,Ki.lastIndex-n[0].length)).length&&t.push(r),t.push(Qi(n)),i=Ki.lastIndex,n=Ki.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function ra(e){return"string"==typeof e}function ta(e){var r,t,n;if(!ra(e))throw new TypeError(ta("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ea(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Ji.apply(null,t)}var na=Math.floor,ia={};J(ia,"fromBinaryStringUint32",(function(e){var r,t;if(32!==e.length)throw new Error(mt("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,e));for(r=0,t=0;t<e.length;t++)"1"===e[t]&&(r+=Mr(2,32-t-1));return r>>>0})),J(ia,"rotl32",(function(e,r){return _t(e<<(r&=St)|e>>>(-r&St))})),J(ia,"rotr32",(function(e,r){return _t(e>>>(r&=jt)|e<<(-r&jt))})),J(ia,"toBinaryStringUint32",(function(e){var r;return r=function(e){var r,t,n="";for(r=32;e>0&&r;)n=(t=e/2)===(e=na(t))?"0"+n:"1"+n,r-=1;return n}(e),r=function(e,r,t){var n,i;if(!hn(e))throw new TypeError(ta("invalid argument. First argument must be a string. Value: `%s`.",e));if(!pn(r))throw new TypeError(ta("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!hn(i=t))throw new TypeError(ta("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(r>zn)throw new RangeError(ta("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return(n=(r-e.length)/i.length)<=0?e:ji(i,n=ki(n))+e}(r,32,"0"),r})),J(ia,"uint32ToInt32",(function(e){return 0|e}));var aa={};return Z(aa,"base",{configurable:!1,enumerable:!0,writable:!1,value:ia}),aa},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=index.js.map