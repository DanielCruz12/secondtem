(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9498:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[H]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(e)||Array.isArray(e)||!!e[W]||!!e.constructor[W]||p(e)||d(e))}function u(e,t,r){void 0===r&&(r=!1),0===c(e)?(r?Object.keys:q)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function c(e){var t=e[H];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:p(e)?2:d(e)?3:0}function a(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,r){var n=c(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){return U&&e instanceof Map}function d(e){return K&&e instanceof Set}function y(e){return e.o||e.t}function v(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=J(e);delete t[H];for(var r=q(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function b(e,t){return void 0===t&&(t=!1),m(e)||o(e)||!i(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=h),Object.freeze(e),t&&u(e,(function(e,t){return b(t,!0)}),!0)),e}function h(){n(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function g(e){var t=G[e];return t||n(18,e),t}function w(e,t){G[e]||(G[e]=t)}function S(){return B}function O(e,t){t&&(g("Patches"),e.u=[],e.s=[],e.v=t)}function P(e){j(e),e.p.forEach(x),e.p=null}function j(e){e===B&&(B=e.l)}function E(e){return B={p:[],l:B,h:e,m:!0,_:0}}function x(e){var t=e[H];0===t.i||1===t.i?t.j():t.O=!0}function _(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.g||g("ES5").S(t,e,o),o?(r[H].P&&(P(t),n(4)),i(e)&&(e=A(t,e),t.l||k(t,e)),t.u&&g("Patches").M(r[H].t,e,t.u,t.s)):e=A(t,r,[]),P(t),t.u&&t.v(t.u,t.s),e!==X?e:void 0}function A(e,t,r){if(m(t))return t;var n=t[H];if(!n)return u(t,(function(o,i){return M(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return k(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=v(n.k):n.o;u(3===n.i?new Set(o):o,(function(t,i){return M(e,n,o,t,i,r)})),k(e,o,!1),r&&e.u&&g("Patches").R(n,r,e.u,e.s)}return n.o}function M(e,t,r,n,u,c){if(o(u)){var f=A(e,u,c&&t&&3!==t.i&&!a(t.D,n)?c.concat(n):void 0);if(s(r,n,f),!o(f))return;e.m=!1}if(i(u)&&!m(u)){if(!e.h.F&&e._<1)return;A(e,u),t&&t.A.l||k(e,u)}}function k(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&b(t,r)}function I(e,t){var r=e[H];return(r?y(r):e)[t]}function D(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function T(e){e.P||(e.P=!0,e.l&&T(e.l))}function C(e){e.o||(e.o=v(e.t))}function N(e,t,r){var n=p(t)?g("MapSet").N(t,r):d(t)?g("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:S(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=Q;r&&(o=[n],i=Y);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return n.k=a,n.j=c,a}(t,r):g("ES5").J(t,r);return(r?r.A:S()).p.push(n),n}function $(e){return o(e)||n(22,e),function e(t){if(!i(t))return t;var r,n=t[H],o=c(t);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=L(t,o),n.I=!1}else r=L(t,o);return u(r,(function(t,o){n&&f(n.t,t)===o||s(r,t,e(o))})),3===o?new Set(r):r}(e)}function L(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return v(e)}function R(){function e(e,t){var r=i[e];return r?r.enumerable=t:i[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[H];return Q.get(t,e)},set:function(t){var r=this[H];Q.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][H];if(!o.P)switch(o.i){case 5:n(o)&&T(o);break;case 4:r(o)&&T(o)}}}function r(e){for(var t=e.t,r=e.k,n=q(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==H){var u=t[i];if(void 0===u&&!a(t,i))return!0;var c=r[i],f=c&&c[H];if(f?f.t!==u:!l(c,u))return!0}}var s=!!t[H];return n.length!==q(t).length+(s?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var i={};w("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=J(r);delete i[H];for(var u=q(i),c=0;c<u.length;c++){var a=u[c];i[a]=e(a,t||!!i[a].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:S(),P:!1,I:!1,D:{},l:r,t:t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,H,{value:i,writable:!0}),o},S:function(e,r,i){i?o(r)&&r[H].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[H];if(r){var o=r.t,i=r.k,c=r.D,f=r.i;if(4===f)u(i,(function(t){t!==H&&(void 0!==o[t]||a(o,t)?c[t]||e(i[t]):(c[t]=!0,T(r)))})),u(o,(function(e){void 0!==i[e]||a(i,e)||(c[e]=!1,T(r))}));else if(5===f){if(n(r)&&(T(r),c.length=!0),i.length<o.length)for(var s=i.length;s<o.length;s++)c[s]=!1;else for(var l=o.length;l<i.length;l++)c[l]=!0;for(var p=Math.min(i.length,o.length),d=0;d<p;d++)i.hasOwnProperty(d)||(c[d]=!0),void 0===c[d]&&e(i[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}r.d(t,{xC:function(){return De},oM:function(){return Ne}});var F,B,z="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),U="undefined"!=typeof Map,K="undefined"!=typeof Set,V="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,X=z?Symbol.for("immer-nothing"):((F={})["immer-nothing"]=!0,F),W=z?Symbol.for("immer-draftable"):"__$immer_draftable",H=z?Symbol.for("immer-state"):"__$immer_state",Z=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,J=Object.getOwnPropertyDescriptors||function(e){var t={};return q(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},G={},Q={get:function(e,t){if(t===H)return e;var r=y(e);if(!a(r,t))return function(e,t,r){var n,o=D(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!i(n)?n:n===I(e.t,t)?(C(e),e.o[t]=N(e.A.h,n,e)):n},has:function(e,t){return t in y(e)},ownKeys:function(e){return Reflect.ownKeys(y(e))},set:function(e,t,r){var n=D(y(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=I(y(e),t),i=null==o?void 0:o[H];if(i&&i.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(l(r,o)&&(void 0!==r||a(e.t,t)))return!0;C(e),T(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==I(e.t,t)||t in e.t?(e.D[t]=!1,C(e),T(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=y(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},Y={};u(Q,(function(e,t){Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)},Y.set=function(e,t,r){return Q.set.call(this,e[0],t,r,e[0])};var ee=function(){function e(e){var t=this;this.g=V,this.F=!0,this.produce=function(e,r,o){if("function"==typeof e&&"function"!=typeof r){var u=r;r=e;var c=t;return function(e){var t=this;void 0===e&&(e=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(o))}))}}var a;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(e)){var f=E(t),s=N(t,e,void 0),l=!0;try{a=r(s),l=!1}finally{l?P(f):j(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return O(f,o),_(e,f)}),(function(e){throw P(f),e})):(O(f,o),_(a,f))}if(!e||"object"!=typeof e){if(void 0===(a=r(e))&&(a=e),a===X&&(a=void 0),t.F&&b(a,!0),o){var p=[],d=[];g("Patches").M(e,a,p,d),o(p,d)}return a}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))};var n,o,i=t.produce(e,r,(function(e,t){n=e,o=t}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return[e,n,o]})):[i,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){i(e)||n(8),o(e)&&(e=$(e));var t=E(this),r=N(this,e,void 0);return r[H].C=!0,j(t),r},t.finishDraft=function(e,t){var r=(e&&e[H]).A;return O(r,t),_(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!V&&n(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var i=g("Patches").$;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t)}))},e}(),te=new ee,re=te.produce,ne=(te.produceWithPatches.bind(te),te.setAutoFreeze.bind(te),te.setUseProxies.bind(te),te.applyPatches.bind(te),te.createDraft.bind(te),te.finishDraft.bind(te),re);function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ae="function"===typeof Symbol&&Symbol.observable||"@@observable",fe=function(){return Math.random().toString(36).substring(7).split("").join(".")},se={INIT:"@@redux/INIT"+fe(),REPLACE:"@@redux/REPLACE"+fe(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+fe()}};function le(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function pe(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(ce(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(ce(1));return r(pe)(e,t)}if("function"!==typeof e)throw new Error(ce(2));var o=e,i=t,u=[],c=u,a=!1;function f(){c===u&&(c=u.slice())}function s(){if(a)throw new Error(ce(3));return i}function l(e){if("function"!==typeof e)throw new Error(ce(4));if(a)throw new Error(ce(5));var t=!0;return f(),c.push(e),function(){if(t){if(a)throw new Error(ce(6));t=!1,f();var r=c.indexOf(e);c.splice(r,1),u=null}}}function p(e){if(!le(e))throw new Error(ce(7));if("undefined"===typeof e.type)throw new Error(ce(8));if(a)throw new Error(ce(9));try{a=!0,i=o(i,e)}finally{a=!1}for(var t=u=c,r=0;r<t.length;r++){(0,t[r])()}return e}function d(e){if("function"!==typeof e)throw new Error(ce(10));o=e,p({type:se.REPLACE})}function y(){var e,t=l;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(ce(11));function r(){e.next&&e.next(s())}return r(),{unsubscribe:t(r)}}})[ae]=function(){return this},e}return p({type:se.INIT}),(n={dispatch:p,subscribe:l,getState:s,replaceReducer:d})[ae]=y,n}function de(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:se.INIT}))throw new Error(ce(12));if("undefined"===typeof r(void 0,{type:se.PROBE_UNKNOWN_ACTION()}))throw new Error(ce(13))}))}(r)}catch(c){i=c}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var a=u[c],f=r[a],s=e[a],l=f(s,t);if("undefined"===typeof l){t&&t.type;throw new Error(ce(14))}o[a]=l,n=n||l!==s}return(n=n||u.length!==Object.keys(e).length)?o:e}}function ye(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function ve(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(ce(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return n=ye.apply(void 0,i)(r.dispatch),ue(ue({},r),{},{dispatch:n})}}}function be(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var he=be();he.withExtraArgument=be;var me=he,ge=(r(3454),function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),we=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Se=Object.defineProperty,Oe=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),Pe=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Ee=function(e,t,r){return t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},xe=function(e,t){for(var r in t||(t={}))Pe.call(t,r)&&Ee(e,r,t[r]);if(Oe)for(var n=0,o=Oe(t);n<o.length;n++){r=o[n];je.call(t,r)&&Ee(e,r,t[r])}return e},_e="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?ye:ye.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function Ae(e){if("object"!==typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}var Me=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return ge(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,we([void 0],e[0].concat(this)))):new(t.bind.apply(t,we([void 0],e.concat(this))))},t}(Array);function ke(e){return i(e)?ne(e,(function(){})):e}function Ie(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t,n=(e.immutableCheck,e.serializableCheck,new Me);r&&(!function(e){return"boolean"===typeof e}(r)?n.push(me.withExtraArgument(r.extraArgument)):n.push(me));0;return n}(e)}}function De(e){var t,r=Ie(),n=e||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,c=void 0===u?r():u,a=n.devTools,f=void 0===a||a,s=n.preloadedState,l=void 0===s?void 0:s,p=n.enhancers,d=void 0===p?void 0:p;if("function"===typeof i)t=i;else{if(!Ae(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=de(i)}var y=c;"function"===typeof y&&(y=y(r));var v=ve.apply(void 0,y),b=ye;f&&(b=_e(xe({trace:!1},"object"===typeof f&&f)));var h=[v];return Array.isArray(d)?h=we([v],d):"function"===typeof d&&(h=d(h)),pe(t,l,b.apply(void 0,h))}function Te(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return xe(xe({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function Ce(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"===typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}function Ne(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof e.initialState?e.initialState:ke(e.initialState),u=e.reducers||{},c=Object.keys(u),a={},f={},s={};function l(){var t="function"===typeof e.extraReducers?Ce(e.extraReducers):[e.extraReducers],r=t[0],u=void 0===r?{}:r,c=t[1],a=void 0===c?[]:c,s=t[2],l=void 0===s?void 0:s,p=xe(xe({},u),f);return function(e,t,r,n){void 0===r&&(r=[]);var u,c="function"===typeof t?Ce(t):[t,r,n],a=c[0],f=c[1],s=c[2];if(function(e){return"function"===typeof e}(e))u=function(){return ke(e())};else{var l=ke(e);u=function(){return l}}function p(e,t){void 0===e&&(e=u());var r=we([a[t.type]],f.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[s]),r.reduce((function(e,r){if(r){var n;if(o(e))return void 0===(n=r(e,t))?e:n;if(i(e))return ne(e,(function(e){return r(e,t)}));if(void 0===(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}return p.getInitialState=u,p}(n,p,a,l)}return c.forEach((function(e){var r,n,o=u[e],i=t+"/"+e;"reducer"in o?(r=o.reducer,n=o.prepare):r=o,a[e]=r,f[i]=r,s[e]=n?Te(i,n):Te(i)})),{name:t,reducer:function(e,t){return r||(r=l()),r(e,t)},actions:s,caseReducers:a,getInitialState:function(){return r||(r=l()),r.getInitialState()}}}Object.assign;var $e="listenerMiddleware";Te($e+"/add"),Te($e+"/removeAll"),Te($e+"/remove");R()},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(e){return n.isMemo(e)?u:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var u=s(r);l&&(u=u.concat(l(r)));for(var c=a(t),v=a(r),b=0;b<u.length;++b){var h=u[b];if(!i[h]&&(!n||!n[h])&&(!v||!v[h])&&(!c||!c[h])){var m=p(r,h);try{f(t,h,m)}catch(g){}}}}return t}},3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"===typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5110)}])},5110:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}r.r(t),r.d(t,{default:function(){return d}});var i=r(5893),u=(r(7294),r(9008)),c=r.n(u),a=r(9498),f=r(5859),s=r(1891),l=(0,a.xC)({reducer:{style:f.ZP,main:s.ZP}}),p=r(9473);r(7787);var d=function(e){var t=e.Component,r=e.pageProps,n=t.getLayout||function(e){return e};return(0,i.jsx)(p.zt,{store:l,children:n((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c(),{children:(0,i.jsx)("link",{rel:"icon",href:"/admin-one-react-tailwind/favicon.png"})}),(0,i.jsx)(t,o({},r))]}))})}},6704:function(e,t,r){"use strict";r.d(t,{DV:function(){return i},Ks:function(){return o},MO:function(){return n},xw:function(){return u}});var n="darkMode",o="style",i="xl:max-w-6xl xl:mx-auto",u="Free Tailwind 3 React Next Typescript dashboard template"},1891:function(e,t,r){"use strict";r.d(t,{av:function(){return o}});var n=(0,r(9498).oM)({name:"main",initialState:{userName:"",userEmail:null,userAvatar:null,isFieldFocusRegistered:!1},reducers:{setUser:function(e,t){e.userName=t.payload.name,e.userEmail=t.payload.email,e.userAvatar=t.payload.avatar}}}),o=n.actions.setUser;t.ZP=n.reducer},5859:function(e,t,r){"use strict";r.d(t,{ZP:function(){return d},C8:function(){return l},A_:function(){return p}});var n={};r.r(n),r.d(n,{basic:function(){return i},white:function(){return u}});var o=r(9498),i={aside:"bg-gray-800",asideScrollbars:"aside-scrollbars-gray",asideBrand:"bg-gray-900 text-white",asideMenuItem:"text-gray-300 hover:text-white",asideMenuItemActive:"font-bold text-white",asideMenuDropdown:"bg-gray-700/50",navBarItemLabel:"text-black",navBarItemLabelHover:"hover:text-blue-500",navBarItemLabelActiveColor:"text-blue-600",overlay:"from-gray-700 via-gray-900 to-gray-700"},u={aside:"bg-white",asideScrollbars:"aside-scrollbars-light",asideBrand:"",asideMenuItem:"text-blue-600 hover:text-black dark:text-white",asideMenuItemActive:"font-bold text-black dark:text-white",asideMenuDropdown:"bg-gray-100/75",navBarItemLabel:"text-blue-600",navBarItemLabelHover:"hover:text-black",navBarItemLabelActiveColor:"text-black",overlay:"from-white via-gray-100 to-white"},c=r(6704),a={asideStyle:i.aside,asideScrollbarsStyle:i.asideScrollbars,asideBrandStyle:i.asideBrand,asideMenuItemStyle:i.asideMenuItem,asideMenuItemActiveStyle:i.asideMenuItemActive,asideMenuDropdownStyle:i.asideMenuDropdown,navBarItemLabelStyle:i.navBarItemLabel,navBarItemLabelHoverStyle:i.navBarItemLabelHover,navBarItemLabelActiveColorStyle:i.navBarItemLabelActiveColor,overlayStyle:i.overlay,darkMode:!1},f=(0,o.oM)({name:"style",initialState:a,reducers:{setDarkMode:function(e,t){e.darkMode=null!==t.payload?t.payload:!e.darkMode,"undefined"!==typeof localStorage&&localStorage.setItem(c.MO,e.darkMode?"1":"0"),"undefined"!==typeof document&&(document.body.classList[e.darkMode?"add":"remove"]("dark-scrollbars"),document.documentElement.classList[e.darkMode?"add":"remove"]("dark-scrollbars-compat"))},setStyle:function(e,t){if(n[t.payload]){"undefined"!==typeof localStorage&&localStorage.setItem(c.Ks,t.payload);var r=n[t.payload];for(var o in r)e["".concat(o,"Style")]=r[o]}}}}),s=f.actions,l=s.setDarkMode,p=s.setStyle,d=f.reducer},7787:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,a=[],f=!1,s=-1;function l(){f&&c&&(f=!1,c.length?a=c.concat(a):s=-1,a.length&&p())}function p(){if(!f){var e=u(l);f=!0;for(var t=a.length;t;){for(c=a,a=[];++s<t;)c&&c[s].run();s=-1,t=a.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new d(e,t)),1!==a.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},u=!0;try{t[e](i,i.exports,n),u=!1}finally{u&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},9008:function(e,t,r){e.exports=r(5443)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case l:case i:case c:case u:case d:return e;default:switch(e=e&&e.$$typeof){case f:case p:case b:case v:case a:return e;default:return t}}case o:return t}}}function O(e){return S(e)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=a,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=b,t.Memo=v,t.Portal=o,t.Profiler=c,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return O(e)||S(e)===s},t.isConcurrentMode=O,t.isContextConsumer=function(e){return S(e)===f},t.isContextProvider=function(e){return S(e)===a},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===p},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===b},t.isMemo=function(e){return S(e)===v},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===u},t.isSuspense=function(e){return S(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===c||e===u||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===a||e.$$typeof===f||e.$$typeof===p||e.$$typeof===m||e.$$typeof===g||e.$$typeof===w||e.$$typeof===h)},t.typeOf=S},9864:function(e,t,r){"use strict";e.exports=r(9921)},9473:function(e,t,r){"use strict";r.d(t,{zt:function(){return g},I0:function(){return P},v9:function(){return y}});var n=r(1688),o=r(2798),i=r(3935);let u=function(e){e()};const c=()=>u;var a=r(7294);const f=a.createContext(null);function s(){return(0,a.useContext)(f)}let l=()=>{throw new Error("uSES not initialized!")};const p=(e,t)=>e===t;function d(e=f){const t=e===f?s:()=>(0,a.useContext)(e);return function(e,r=p){const{store:n,subscription:o,getServerState:i}=t(),u=l(o.addNestedSub,n.getState,i||n.getState,e,r);return(0,a.useDebugValue)(u),u}}const y=d();r(8679),r(2973);const v={notify(){},get:()=>[]};function b(e,t){let r,n=v;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){const e=c();let t=null,r=null;return{clear(){t=null,r=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const u={addNestedSub:function(e){return i(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=v)},getListeners:()=>n};return u}const h=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?a.useLayoutEffect:a.useEffect;let m=null;var g=function({store:e,context:t,children:r,serverState:n}){const o=(0,a.useMemo)((()=>{const t=b(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0}}),[e,n]),i=(0,a.useMemo)((()=>e.getState()),[e]);h((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),i!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,i]);const u=t||f;return a.createElement(u.Provider,{value:o},r)};function w(e=f){const t=e===f?s:()=>(0,a.useContext)(e);return function(){const{store:e}=t();return e}}const S=w();function O(e=f){const t=e===f?S:w(e);return function(){return t().dispatch}}const P=O();var j,E;j=o.useSyncExternalStoreWithSelector,l=j,(e=>{m=e})(n.useSyncExternalStore),E=i.unstable_batchedUpdates,u=E},8359:function(e,t){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),f=Symbol.for("react.context"),s=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function h(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case c:case u:case p:case d:return e;default:switch(e=e&&e.$$typeof){case s:case f:case l:case v:case y:case a:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference")},2973:function(e,t,r){"use strict";r(8359)},3250:function(e,t,r){"use strict";var n=r(7294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=n.useState,u=n.useEffect,c=n.useLayoutEffect,a=n.useDebugValue;function f(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,s=n[1];return c((function(){o.value=r,o.getSnapshot=t,f(o)&&s({inst:o})}),[e,r,t]),u((function(){return f(o)&&s({inst:o}),e((function(){f(o)&&s({inst:o})}))}),[e]),a(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:s},139:function(e,t,r){"use strict";var n=r(7294),o=r(1688);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},u=o.useSyncExternalStore,c=n.useRef,a=n.useEffect,f=n.useMemo,s=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var l=c(null);if(null===l.current){var p={hasValue:!1,value:null};l.current=p}else p=l.current;l=f((function(){function e(e){if(!a){if(a=!0,u=e,e=n(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return c=t}return c=e}if(t=c,i(u,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(u=e,c=r)}var u,c,a=!1,f=void 0===r?null:r;return[function(){return e(t())},null===f?void 0:function(){return e(f())}]}),[t,r,n,o]);var d=u(e,l[0],l[1]);return a((function(){p.hasValue=!0,p.value=d}),[d]),s(d),d}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var r=e.O();_N_E=r}]);