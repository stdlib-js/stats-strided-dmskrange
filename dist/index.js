"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var d=c(function(G,y){
var p=require('@stdlib/math-base-assert-is-nan/dist');function E(r,e,i,q,t,f,m){var o,n,v,s,u,a;if(r<=0)return NaN;for(v=q,s=m,a=0;a<r&&t[s]!==0;a++)v+=i,s+=f;if(a===r)return NaN;if(n=e[v],p(n))return n;for(o=n,a+=1,a;a<r;a++)if(v+=i,s+=f,!t[s]){if(u=e[v],p(u))return u;u<n?n=u:u>o&&(o=u)}return o-n}y.exports=E
});var l=c(function(H,j){
var g=require('@stdlib/strided-base-stride2offset/dist'),O=d();function h(r,e,i,q,t){var f=g(r,i),m=g(r,t);return O(r,e,i,f,q,t,m)}j.exports=h
});var _=c(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=l(),z=d();w(k,"ndarray",z);R.exports=k
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),x,b=B(A(__dirname,"./native.js"));C(b)?x=D:x=b;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
