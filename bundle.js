// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,i=e.toString,u=e.__defineGetter__,o=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,t.get),y&&o&&o.call(r,n,t.set),r},l=n()?c:v,y=l;var p=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})};var s=function(r){return r!=r},m=Math.floor,g=m;var b=function(r){return g(r)===r},w=b;var h=function(r){return w(r/2)};var d=function(r){return h(r>0?r-1:r+1)},A=Number.POSITIVE_INFINITY,_=Number,j=_.NEGATIVE_INFINITY,O=A,U=j;var S=function(r){return r===O||r===U},E=Math.sqrt;var T=function(r){return Math.abs(r)};var P=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return P&&"symbol"==typeof Symbol.toStringTag},F=Object.prototype.toString,N=F;var V=function(r){return N.call(r)},H=Object.prototype.hasOwnProperty;var x=function(r,n){return null!=r&&H.call(r,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",L=x,M=G,W=F;var R=V,k=function(r){var n,t,e;if(null==r)return W.call(r);t=r[M],n=L(r,M);try{r[M]=void 0}catch(n){return W.call(r)}return e=W.call(r),n?r[M]=t:delete r[M],e},q=I()?k:R,B=q,Y="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===B(r)},D=C;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var K="function"==typeof Uint32Array?Uint32Array:void 0,Q=function(){throw new Error("not implemented")},X=J()?K:Q,Z=q,$="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null,nr=function(r){return $&&r instanceof Float64Array||"[object Float64Array]"===Z(r)},tr=rr;var er=function(){var r,n;if("function"!=typeof tr)return!1;try{n=new tr([1,3.14,-3.14,NaN]),r=nr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var ir="function"==typeof Float64Array?Float64Array:void 0,ur=function(){throw new Error("not implemented")},or=er()?ir:ur,ar=q,fr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null,vr=function(r){return fr&&r instanceof Uint8Array||"[object Uint8Array]"===ar(r)},lr=cr;var yr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,256,257]),r=vr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var pr="function"==typeof Uint8Array?Uint8Array:void 0,sr=function(){throw new Error("not implemented")},mr=yr()?pr:sr,gr=q,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,hr=function(r){return br&&r instanceof Uint16Array||"[object Uint16Array]"===gr(r)},dr=wr;var Ar=function(){var r,n;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),r=hr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var _r,jr="function"==typeof Uint16Array?Uint16Array:void 0,Or=function(){throw new Error("not implemented")},Ur={uint16:Ar()?jr:Or,uint8:mr};(_r=new Ur.uint16(1))[0]=4660;var Sr,Er,Tr=52===new Ur.uint8(_r.buffer)[0];!0===Tr?(Sr=1,Er=0):(Sr=0,Er=1);var Pr=X,Ir={HIGH:Sr,LOW:Er},Fr=new or(1),Nr=new Pr(Fr.buffer),Vr=Ir.HIGH,Hr=Ir.LOW;var xr=function(r,n){return Fr[0]=n,r[0]=Nr[Vr],r[1]=Nr[Hr],r};var Gr=function(r,n){return 1===arguments.length?xr([0,0],r):xr(r,n)},Lr=Gr,Mr=X,Wr=!0===Tr?0:1,Rr=new or(1),kr=new Mr(Rr.buffer);var qr=function(r,n){return Rr[0]=r,kr[Wr]=n>>>0,Rr[0]},Br=qr;var Yr=function(r){return 0|r},Cr=X,zr=!0===Tr?1:0,Dr=new or(1),Jr=new Cr(Dr.buffer);var Kr,Qr,Xr=function(r){return Dr[0]=r,Jr[zr]};!0===Tr?(Kr=1,Qr=0):(Kr=0,Qr=1);var Zr=X,$r={HIGH:Kr,LOW:Qr},rn=new or(1),nn=new Zr(rn.buffer),tn=$r.HIGH,en=$r.LOW;var un=function(r,n){return nn[tn]=r,nn[en]=n,rn[0]},on=un,an=Lr,fn=Xr,cn=on,vn=[0,0];var ln=function(r,n){var t,e;return an(vn,r),t=vn[0],t&=2147483647,e=fn(n),cn(t|=e&=2147483648,vn[1])},yn=d,pn=ln,sn=j,mn=A;var gn=function(r,n){return n===sn?mn:n===mn?0:n>0?yn(n)?r:0:yn(n)?pn(mn,r):mn},bn=Xr;var wn=function(r,n){return(2147483647&bn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},hn=T,dn=A;var An=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:hn(r)<1==(n===dn)?0:dn},_n=X,jn=!0===Tr?1:0,On=new or(1),Un=new _n(On.buffer);var Sn=function(r,n){return On[0]=r,Un[jn]=n>>>0,On[0]};var En=Xr,Tn=Br,Pn=Sn,In=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Fn=1048576,Nn=[1,1.5],Vn=[0,.5849624872207642],Hn=[0,1.350039202129749e-8];var xn=Br,Gn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Ln=S,Mn=s,Wn=T;var Rn=function(r,n){return Mn(n)||Ln(n)?(r[0]=n,r[1]=0,r):0!==n&&Wn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var kn=function(r,n){return 1===arguments.length?Rn([0,0],r):Rn(r,n)},qn=Xr;var Bn=function(r){var n=qn(r);return(n=(2146435072&n)>>>20)-1023|0},Yn=A,Cn=j,zn=s,Dn=S,Jn=ln,Kn=kn,Qn=Bn,Xn=Lr,Zn=on,$n=[0,0],rt=[0,0];var nt=function(r,n){var t,e;return 0===n||0===r||zn(r)||Dn(r)?r:(Kn($n,r),n+=$n[1],(n+=Qn(r=$n[0]))<-1074?Jn(0,r):n>1023?r<0?Cn:Yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Xn(rt,r),t=rt[0],t&=2148532223,e*Zn(t|=n+1023<<20,rt[1])))};var tt=Xr,et=Sn,it=Br,ut=Yr,ot=nt,at=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},ft=2147483647,ct=1048575,vt=1048576;var lt=s,yt=d,pt=S,st=b,mt=E,gt=T,bt=Lr,wt=Br,ht=Yr,dt=j,At=A,_t=gn,jt=wn,Ot=An,Ut=function(r,n,t){var e,i,u,o,a,f,c,v,l,y,p,s,m,g,b,w,h,d,A,_;return d=0,t<Fn&&(d-=53,t=En(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,d+=1,t-=Fn),e=524288+(t>>1|536870912),a=(h=1/((n=Pn(n,t))+(c=Nn[_])))*((w=n-c)-(o=Tn(i=w*h,0))*(f=Pn(0,e+=_<<18))-o*(n-(f-c))),b=(u=i*i)*u*In(u),f=Tn(f=3+(u=o*o)+(b+=a*(o+i)),0),m=(p=-7.028461650952758e-9*(l=Tn(l=(w=o*f)+(h=a*f+(b-(f-3-u))*i),0))+.9617966939259756*(h-(l-w))+Hn[_])-((s=Tn(s=(y=.9617967009544373*l)+p+(v=Vn[_])+(g=d),0))-g-v-y),r[0]=s,r[1]=m,r},St=function(r,n){var t,e,i,u,o;return t=(o=1.9259629911266175e-8*(i=n-1)-1.4426950408889634*(i*i*Gn(i)))-((e=xn(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=t,r},Et=function(r,n,t){var e,i,u,o,a,f,c,v,l;return l=((v=r&ft|0)>>20)-1023|0,c=0,v>1071644672&&(i=et(0,((c=r+(vt>>l+1)>>>0)&~(ct>>(l=((c&ft)>>20)-1023|0)))>>>0),c=(c&ct|vt)>>20-l>>>0,r<0&&(c=-c),n-=i),a=(o=.6931471805599453*(t-((i=it(i=t+n,0))-n))+-1.904654299957768e-9*i)-((f=(u=.6931471824645996*i)+o)-u),e=f-(i=f*f)*at(i),r=tt(f=1-(f*e/(e-2)-(a+f*a)-f)),r=ut(r),f=(r+=c<<20>>>0)>>20<=0?ot(f,c):et(f,r)},Tt=2147483647,Pt=1083179008,It=1e300,Ft=1e-300,Nt=[0,0],Vt=[0,0];var Ht=function r(n,t){var e,i,u,o,a,f,c,v,l,y,p,s,m,g;if(lt(n)||lt(t))return NaN;if(bt(Nt,t),a=Nt[0],0===Nt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return mt(n);if(-.5===t)return 1/mt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(pt(t))return Ot(n,t)}if(bt(Nt,n),o=Nt[0],0===Nt[1]){if(0===o)return _t(n,t);if(1===n)return 1;if(-1===n&&yt(t))return-1;if(pt(n))return n===dt?r(-0,-t):t<0?0:At}if(n<0&&!1===st(t))return(n-n)/(n-n);if(u=gt(n),e=o&Tt|0,i=a&Tt|0,c=a>>>31|0,f=(f=o>>>31|0)&&yt(t)?-1:1,i>1105199104){if(i>1139802112)return jt(n,t);if(e<1072693247)return 1===c?f*It*It:f*Ft*Ft;if(e>1072693248)return 0===c?f*It*It:f*Ft*Ft;p=St(Vt,u)}else p=Ut(Vt,u,e);if(y=(t-(v=wt(t,0)))*p[0]+t*p[1],l=v*p[0],bt(Nt,s=y+l),m=ht(Nt[0]),g=ht(Nt[1]),m>=Pt){if(0!=(m-Pt|g))return f*It*It;if(y+8008566259537294e-32>s-l)return f*It*It}else if((m&Tt)>=1083231232){if(0!=(m-3230714880|g))return f*Ft*Ft;if(y<=s-l)return f*Ft*Ft}return f*(s=Et(m,l,y))};var xt=Ht,Gt=function(r){return r>>>0};var Lt=function(r){var n,t;if(32!==r.length)throw new Error("invalid argument. Input string must have a length equal to 32. Value: `"+r+"`.");for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=xt(2,32-t-1));return Gt(n)};var Mt=function(r){return r>>>0},Wt=Mt,Rt=Wt(31);var kt=function(r,n){return Wt(r<<(n&=Rt)|r>>>(-n&Rt))},qt=Mt,Bt=qt(31);var Yt=function(r,n){return qt(r>>>(n&=Bt)|r<<(-n&Bt))},Ct=l;var zt=function(r,n,t){Ct(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var Dt=function(r){return"number"==typeof r},Jt=_.prototype.toString;var Kt=q,Qt=_,Xt=function(r){try{return Jt.call(r),!0}catch(r){return!1}},Zt=I();var $t=function(r){return"object"==typeof r&&(r instanceof Qt||(Zt?Xt(r):"[object Number]"===Kt(r)))},re=Dt,ne=$t;var te=zt,ee=function(r){return re(r)||ne(r)},ie=$t;te(ee,"isPrimitive",Dt),te(ee,"isObject",ie);var ue=A,oe=j,ae=b;var fe=function(r){return r<ue&&r>oe&&ae(r)},ce=ee.isPrimitive,ve=fe;var le=function(r){return ce(r)&&ve(r)},ye=ee.isObject,pe=fe;var se=function(r){return ye(r)&&pe(r.valueOf())},me=le,ge=se;var be=zt,we=function(r){return me(r)||ge(r)},he=se;be(we,"isPrimitive",le),be(we,"isObject",he);var de=we.isPrimitive;var Ae=function(r){return de(r)&&r>=0},_e=we.isObject;var je=function(r){return _e(r)&&r.valueOf()>=0},Oe=Ae,Ue=je;var Se=zt,Ee=function(r){return Oe(r)||Ue(r)},Te=je;Se(Ee,"isPrimitive",Ae),Se(Ee,"isObject",Te);var Pe=Ee;var Ie=function(r){return"string"==typeof r},Fe=String.prototype.valueOf;var Ne=q,Ve=function(r){try{return Fe.call(r),!0}catch(r){return!1}},He=I();var xe=function(r){return"object"==typeof r&&(r instanceof String||(He?Ve(r):"[object String]"===Ne(r)))},Ge=Ie,Le=xe;var Me=zt,We=function(r){return Ge(r)||Le(r)},Re=xe;Me(We,"isPrimitive",Ie),Me(We,"isObject",Re);var ke=We,qe=9007199254740991,Be=Pe.isPrimitive,Ye=ke.isPrimitive;var Ce=function(r,n){var t,e;if(!Ye(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Be(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(0===r.length||0===n)return"";if(r.length*n>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",e=n;1==(1&e)&&(t+=r),0!==(e>>>=1);)r+=r;return t},ze=Math.ceil,De=Pe.isPrimitive,Je=ke.isPrimitive,Ke=Ce,Qe=ze,Xe=qe;var Ze=function(r,n,t){var e,i;if(!Je(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!De(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(arguments.length>2){if(!Je(i=t))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(n>Xe)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(e=(n-r.length)/i.length)<=0?r:(e=Qe(e),Ke(i,e)+r)},$e=m;var ri=Ze,ni=function(r){var n,t,e="";for(n=32;r>0&&n;)e=(t=r/2)===(r=$e(t))?"0"+e:"1"+e,n-=1;return e};var ti=function(r){var n;return n=ni(r),n=ri(n,32,"0")},ei=p,ii={};ei(ii,"fromBinaryStringUint32",Lt),ei(ii,"rotl32",kt),ei(ii,"rotr32",Yt),ei(ii,"toBinaryStringUint32",ti),ei(ii,"uint32ToInt32",Yr);var ui={};return p(ui,"base",ii),ui}));
//# sourceMappingURL=bundle.js.map
