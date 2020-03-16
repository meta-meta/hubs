!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=u(p);l=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new h(t,e)),1!==c.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){(function(e,n){var o,i,a,u,s=(o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var i,a=void 0!==(t=t||{})?t:{},u={};for(i in a)a.hasOwnProperty(i)&&(u[i]=a[i]);var s,c,l=[],f=!1,p=!1;f="object"==typeof window,p="function"==typeof importScripts,s="object"==typeof e&&"object"==typeof e.versions&&"string"==typeof e.versions.node&&!f&&!p,c=!f&&!s&&!p;var d,h,y,v,m="";s?(m=n+"/",d=function(t,e){var n;return y||(y=r(2)),v||(v=r(3)),t=v.normalize(t),n=y.readFileSync(t),e?n:n.toString()},h=function(t){var e=d(t,!0);return e.buffer||(e=new Uint8Array(e)),P(e.buffer),e},e.argv.length>1&&e.argv[1].replace(/\\/g,"/"),l=e.argv.slice(2),e.on("uncaughtException",function(t){if(!(t instanceof function(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}))throw t}),e.on("unhandledRejection",xe),a.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(d=function(t){return read(t)}),h=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(P("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs?l=scriptArgs:void 0!==arguments&&(l=arguments),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(f||p)&&(p?m=self.location.href:document.currentScript&&(m=document.currentScript.src),o&&(m=o),m=0!==m.indexOf("blob:")?m.substr(0,m.lastIndexOf("/")+1):"",d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},p&&(h=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var g=a.print||console.log.bind(console),b=a.printErr||console.warn.bind(console);for(i in u)u.hasOwnProperty(i)&&(a[i]=u[i]);u=null,a.arguments&&(l=a.arguments),a.thisProgram&&a.thisProgram,a.quit&&a.quit;var w,T,C={"f64-rem":function(t,e){return t%e},debugger:function(){}};new Array(0),a.wasmBinary&&(w=a.wasmBinary),a.noExitRuntime&&a.noExitRuntime,"object"!=typeof WebAssembly&&b("no native wasm support detected");var $=!1;function P(t,e){t||xe("Assertion failed: "+e)}var _,A,E,F,S,O,j,W,k,x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(t,e,r){for(var n=e+r,o=e;t[o]&&!(o>=n);)++o;if(o-e>16&&t.subarray&&x)return x.decode(t.subarray(e,o));for(var i="";e<o;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function R(t,e){return t?I(E,t,e):""}function D(t,e){return t%e>0&&(t+=e-t%e),t}function U(t){_=t,a.HEAP8=A=new Int8Array(t),a.HEAP16=F=new Int16Array(t),a.HEAP32=O=new Int32Array(t),a.HEAPU8=E=new Uint8Array(t),a.HEAPU16=S=new Uint16Array(t),a.HEAPU32=j=new Uint32Array(t),a.HEAPF32=W=new Float32Array(t),a.HEAPF64=k=new Float64Array(t)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var B=a.TOTAL_MEMORY||16777216;function M(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?a.dynCall_v(r):a.dynCall_vi(r,e.arg):r(void 0===e.arg?null:e.arg)}else e()}}(T=a.wasmMemory?a.wasmMemory:new WebAssembly.Memory({initial:B/65536}))&&(_=T.buffer),B=_.byteLength,U(_),O[59864]=5482368;var L=[],N=[],H=[],z=[],V=0,q=null,G=null;a.preloadedImages={},a.preloadedAudios={};var Z="data:application/octet-stream;base64,";function X(t){return String.prototype.startsWith?t.startsWith(Z):0===t.indexOf(Z)}var J,Y="basis_transcoder.wasm";function K(){try{if(w)return new Uint8Array(w);if(h)return h(Y);throw"both async and sync fetching of the wasm failed"}catch(t){xe(t)}}function Q(t){var e={env:t,wasi_unstable:t,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:C};function r(t,e){var r=t.exports;a.asm=r,function(t){if(V--,a.monitorRunDependencies&&a.monitorRunDependencies(V),0==V&&(null!==q&&(clearInterval(q),q=null),G)){var e=G;G=null,e()}}()}function n(t){r(t.instance)}function o(t){return(w||!f&&!p||"function"!=typeof fetch?new Promise(function(t,e){t(K())}):fetch(Y,{credentials:"same-origin"}).then(function(t){if(!t.ok)throw"failed to load wasm binary file at '"+Y+"'";return t.arrayBuffer()}).catch(function(){return K()})).then(function(t){return WebAssembly.instantiate(t,e)}).then(t,function(t){b("failed to asynchronously prepare wasm: "+t),xe(t)})}if(V++,a.monitorRunDependencies&&a.monitorRunDependencies(V),a.instantiateWasm)try{return a.instantiateWasm(e,r)}catch(t){return b("Module.instantiateWasm callback failed with error: "+t),!1}return function(){if(w||"function"!=typeof WebAssembly.instantiateStreaming||X(Y)||"function"!=typeof fetch)return o(n);fetch(Y,{credentials:"same-origin"}).then(function(t){return WebAssembly.instantiateStreaming(t,e).then(n,function(t){b("wasm streaming compile failed: "+t),b("falling back to ArrayBuffer instantiation"),o(n)})})}(),{}}X(Y)||(J=Y,Y=a.locateFile?a.locateFile(J,m):m+J),a.asm=function(t,e,r){return e.memory=T,e.table=new WebAssembly.Table({initial:342,maximum:342,element:"anyfunc"}),e.__memory_base=1024,e.__table_base=0,Q(e)},N.push({func:function(){We()}});var tt={},et={buffers:[null,[],[]],printChar:function(t,e){var r=et.buffers[t];0===e||10===e?((1===t?g:b)(I(r,0)),r.length=0):r.push(e)},varargs:0,get:function(t){return et.varargs+=4,O[et.varargs-4>>2]},getStr:function(){return R(et.get())},get64:function(){var t=et.get();return et.get(),t},getZero:function(){et.get()}};function rt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var nt=void 0;function ot(t){for(var e="",r=t;E[r];)e+=nt[E[r++]];return e}var it={},at={},ut={},st=48,ct=57;function lt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=st&&e<=ct?"_"+t:t}function ft(t,e){return t=lt(t),new Function("body","return function "+t+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)}function pt(t,e){var r=ft(e,function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var dt=void 0;function ht(t){throw new dt(t)}var yt=void 0;function vt(t){throw new yt(t)}function mt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&vt("Mismatched type converter count");for(var o=0;o<t.length;++o)gt(t[o],n[o])}t.forEach(function(t){ut[t]=e});var o=new Array(e.length),i=[],a=0;e.forEach(function(t,e){at.hasOwnProperty(t)?o[e]=at[t]:(i.push(t),it.hasOwnProperty(t)||(it[t]=[]),it[t].push(function(){o[e]=at[t],++a===i.length&&n(o)}))}),0===i.length&&n(o)}function gt(t,e,r){if(r=r||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||ht('type "'+n+'" must have a positive integer typeid pointer'),at.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;ht("Cannot register type '"+n+"' twice")}if(at[t]=e,delete ut[t],it.hasOwnProperty(t)){var o=it[t];delete it[t],o.forEach(function(t){t()})}}function bt(t){if(!(this instanceof Wt))return!1;if(!(t instanceof Wt))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,o=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return e===n&&r===o}function wt(t){ht(t.$$.ptrType.registeredClass.name+" instance already deleted")}var Tt=!1;function Ct(t){}function $t(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function Pt(t){return"undefined"==typeof FinalizationGroup?(Pt=function(t){return t},t):(Tt=new FinalizationGroup(function(t){for(var e=t.next();!e.done;e=t.next()){var r=e.value;r.ptr?$t(r):console.warn("object already deleted: "+r.ptr)}}),Ct=function(t){Tt.unregister(t.$$)},(Pt=function(t){return Tt.register(t,t.$$,t.$$),t})(t))}function _t(){if(this.$$.ptr||wt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=Pt(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function At(){this.$$.ptr||wt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),Ct(this),$t(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Et(){return!this.$$.ptr}var Ft=void 0,St=[];function Ot(){for(;St.length;){var t=St.pop();t.$$.deleteScheduled=!1,t.delete()}}function jt(){return this.$$.ptr||wt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),St.push(this),1===St.length&&Ft&&Ft(Ot),this.$$.deleteScheduled=!0,this}function Wt(){}var kt={};function xt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||ht("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function It(t,e,r){a.hasOwnProperty(t)?((void 0===r||void 0!==a[t].overloadTable&&void 0!==a[t].overloadTable[r])&&ht("Cannot register public name '"+t+"' twice"),xt(a,t,t),a.hasOwnProperty(r)&&ht("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),a[t].overloadTable[r]=e):(a[t]=e,void 0!==r&&(a[t].numArguments=r))}function Rt(t,e,r,n,o,i,a,u){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Dt(t,e,r){for(;e!==r;)e.upcast||ht("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function Ut(t,e){if(null===e)return this.isReference&&ht("null is not a valid "+this.name),0;e.$$||ht('Cannot pass "'+he(e)+'" as a '+this.name),e.$$.ptr||ht("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return Dt(e.$$.ptr,r,this.registeredClass)}function Bt(t,e){var r;if(null===e)return this.isReference&&ht("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||ht('Cannot pass "'+he(e)+'" as a '+this.name),e.$$.ptr||ht("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&ht("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=Dt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&ht("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:ht("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var o=e.clone();r=this.rawShare(r,de(function(){o.delete()})),null!==t&&t.push(this.rawDestructor,r)}break;default:ht("Unsupporting sharing policy")}return r}function Mt(t,e){if(null===e)return this.isReference&&ht("null is not a valid "+this.name),0;e.$$||ht('Cannot pass "'+he(e)+'" as a '+this.name),e.$$.ptr||ht("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&ht("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return Dt(e.$$.ptr,r,this.registeredClass)}function Lt(t){return this.fromWireType(j[t>>2])}function Nt(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function Ht(t){this.rawDestructor&&this.rawDestructor(t)}function zt(t){null!==t&&t.delete()}function Vt(){return Object.keys(Zt).length}function qt(){var t=[];for(var e in Zt)Zt.hasOwnProperty(e)&&t.push(Zt[e]);return t}function Gt(t){Ft=t,St.length&&Ft&&Ft(Ot)}var Zt={};function Xt(t,e){return e=function(t,e){for(void 0===e&&ht("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),Zt[e]}function Jt(t,e){return e.ptrType&&e.ptr||vt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&vt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Pt(Object.create(t,{$$:{value:e}}))}function Yt(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=Xt(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function o(){return this.isSmartPointer?Jt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):Jt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var i,a=this.registeredClass.getActualType(e),u=kt[a];if(!u)return o.call(this);i=this.isConst?u.constPointerType:u.pointerType;var s=function t(e,r,n){if(r===n)return e;if(void 0===n.baseClass)return null;var o=t(e,r,n.baseClass);return null===o?null:n.downcast(o)}(e,this.registeredClass,i.registeredClass);return null===s?o.call(this):this.isSmartPointer?Jt(i.registeredClass.instancePrototype,{ptrType:i,ptr:s,smartPtrType:this,smartPtr:t}):Jt(i.registeredClass.instancePrototype,{ptrType:i,ptr:s})}function Kt(t,e,r,n,o,i,a,u,s,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,o||void 0!==e.baseClass?this.toWireType=Bt:n?(this.toWireType=Ut,this.destructorFunction=null):(this.toWireType=Mt,this.destructorFunction=null)}function Qt(t,e,r){a.hasOwnProperty(t)||vt("Replacing nonexistant public symbol"),void 0!==a[t].overloadTable&&void 0!==r?a[t].overloadTable[r]=e:(a[t]=e,a[t].argCount=r)}function te(t,e){var r;if(t=ot(t),void 0!==a["FUNCTION_TABLE_"+t])r=a["FUNCTION_TABLE_"+t][e];else if("undefined"!=typeof FUNCTION_TABLE)r=FUNCTION_TABLE[e];else{var n=a["dynCall_"+t];void 0===n&&void 0===(n=a["dynCall_"+t.replace(/f/g,"d")])&&ht("No dynCall invoker for signature: "+t),r=function(r){for(var n=[],o=1;o<t.length;++o)n.push("a"+o);var i="return function dynCall_"+t+"_"+e+"("+n.join(", ")+") {\n";return i+="    return dynCall(rawFunction"+(n.length?", ":"")+n.join(", ")+");\n",i+="};\n",new Function("dynCall","rawFunction",i)(r,e)}(n)}return"function"!=typeof r&&ht("unknown function pointer with signature "+t+": "+e),r}var ee=void 0;function re(t){var e=Se(t),r=ot(e);return Oe(e),r}function ne(t,e){var r=[],n={};throw e.forEach(function t(e){n[e]||at[e]||(ut[e]?ut[e].forEach(t):(r.push(e),n[e]=!0))}),new ee(t+": "+r.map(re).join([", "]))}function oe(t,e){for(var r=[],n=0;n<t;n++)r.push(O[(e>>2)+n]);return r}function ie(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function ae(t,e){if(!(t instanceof Function))throw new TypeError("new_ called with constructor type "+typeof t+" which is not a function");var r=ft(t.name||"unknownFunctionName",function(){});r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return o instanceof Object?o:n}function ue(t,e,r,n,o){var i=e.length;i<2&&ht("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var c="void"!==e[0].name,l="",f="";for(s=0;s<i-2;++s)l+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+lt(t)+"("+l+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+t+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",h=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],y=[ht,n,o,ie,e[0],e[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<i-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+e[s+2].name+"\n",h.push("argType"+s),y.push(e[s+2]);if(a&&(f="thisWired"+(f.length>0?", ":"")+f),p+=(c?"var rv = ":"")+"invoker(fn"+(f.length>0?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<e.length;++s){var v=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==e[s].destructorFunction&&(p+=v+"_dtor("+v+"); // "+e[s].name+"\n",h.push(v+"_dtor"),y.push(e[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",h.push(p),ae(Function,h).apply(null,y)}var se=[],ce=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function le(t){t>4&&0==--ce[t].refcount&&(ce[t]=void 0,se.push(t))}function fe(){for(var t=0,e=5;e<ce.length;++e)void 0!==ce[e]&&++t;return t}function pe(){for(var t=5;t<ce.length;++t)if(void 0!==ce[t])return ce[t];return null}function de(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=se.length?se.pop():ce.length;return ce[e]={refcount:1,value:t},e}}function he(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function ye(t,e){switch(e){case 2:return function(t){return this.fromWireType(W[t>>2])};case 3:return function(t){return this.fromWireType(k[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function ve(t,e,r){switch(e){case 0:return r?function(t){return A[t]}:function(t){return E[t]};case 1:return r?function(t){return F[t>>1]}:function(t){return S[t>>1]};case 2:return r?function(t){return O[t>>2]}:function(t){return j[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function me(t){return t||ht("Cannot use deleted val. handle = "+t),ce[t].value}function ge(t,e){var r=at[t];return void 0===r&&ht(e+" has unknown type "+re(t)),r}var be={};function we(t){var e=be[t];return void 0===e?ot(t):e}var Te=[];function Ce(){return"object"==typeof globalThis?globalThis:Function("return this")()}var $e={};function Pe(){return A.length}!function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);nt=t}(),dt=a.BindingError=pt(Error,"BindingError"),yt=a.InternalError=pt(Error,"InternalError"),Wt.prototype.isAliasOf=bt,Wt.prototype.clone=_t,Wt.prototype.delete=At,Wt.prototype.isDeleted=Et,Wt.prototype.deleteLater=jt,Kt.prototype.getPointee=Nt,Kt.prototype.destructor=Ht,Kt.prototype.argPackAdvance=8,Kt.prototype.readValueFromPointer=Lt,Kt.prototype.deleteObject=zt,Kt.prototype.fromWireType=Yt,a.getInheritedInstanceCount=Vt,a.getLiveInheritedInstances=qt,a.flushPendingDeletes=Ot,a.setDelayFunction=Gt,ee=a.UnboundTypeError=pt(Error,"UnboundTypeError"),a.count_emval_handles=fe,a.get_first_emval=pe;var _e={c:xe,A:function(t){},i:function(t){return je(t)},I:function(){throw $=!0,"Pure virtual function called!"},h:function(t,e,r){throw tt[t]={ptr:t,adjusted:[t],type:e,destructor:r,refcount:0,caught:!1,rethrown:!1},"uncaught_exception"in Fe?Fe.uncaught_exceptions++:Fe.uncaught_exceptions=1,t},z:function(){return Fe.uncaught_exceptions},m:function(t){return a.___errno_location&&(O[a.___errno_location()>>2]=t),t},y:function(t,e){et.varargs=e;try{return et.getStreamFromFD(),et.get(),et.get(),et.get(),et.get(),0}catch(t){return"undefined"!=typeof FS&&t instanceof FS.ErrnoError||xe(t),-t.errno}},x:function(t,e){et.varargs=e;try{return et.getStreamFromFD(),0}catch(t){return"undefined"!=typeof FS&&t instanceof FS.ErrnoError||xe(t),-t.errno}},w:function(){return function(t,e,r,n){try{for(var o=0,i=0;i<r;i++){for(var a=O[e+8*i>>2],u=O[e+(8*i+4)>>2],s=0;s<u;s++)et.printChar(t,E[a+s]);o+=u}return O[n>>2]=o,0}catch(t){return"undefined"!=typeof FS&&t instanceof FS.ErrnoError||xe(t),-t.errno}}.apply(null,arguments)},v:function(t,e,r,n,o){var i=rt(r);gt(t,{name:e=ot(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:o},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=A;else if(2===r)n=F;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=O}return this.fromWireType(n[t>>i])},destructorFunction:null})},N:function(t,e,r,n,o,i,a,u,s,c,l,f,p){l=ot(l),i=te(o,i),u&&(u=te(a,u)),c&&(c=te(s,c)),p=te(f,p);var d=lt(l);It(d,function(){ne("Cannot construct "+l+" due to unbound types",[n])}),mt([t,e,r],n?[n]:[],function(e){var r,o;e=e[0],o=n?(r=e.registeredClass).instancePrototype:Wt.prototype;var a=ft(d,function(){if(Object.getPrototypeOf(this)!==s)throw new dt("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new dt(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new dt("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)}),s=Object.create(o,{constructor:{value:a}});a.prototype=s;var f=new Rt(l,a,s,p,r,i,u,c),h=new Kt(l,f,!0,!1,!1),y=new Kt(l+"*",f,!1,!1,!1),v=new Kt(l+" const*",f,!1,!0,!1);return kt[t]={pointerType:y,constPointerType:v},Qt(d,a),[h,y,v]})},M:function(t,e,r,n,o,i){var a=oe(e,r);o=te(n,o),mt([],[t],function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new dt("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){ne("Cannot construct "+t.name+" due to unbound types",a)},mt([],a,function(n){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&ht(r+" called with "+arguments.length+" arguments, expected "+(e-1));var t=[],a=new Array(e);a[0]=i;for(var u=1;u<e;++u)a[u]=n[u].toWireType(t,arguments[u-1]);var s=o.apply(null,a);return ie(t),n[0].fromWireType(s)},[]}),[]})},g:function(t,e,r,n,o,i,a,u){var s=oe(r,n);e=ot(e),i=te(o,i),mt([],[t],function(t){var n=(t=t[0]).name+"."+e;function o(){ne("Cannot call "+n+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(o.argCount=r-2,o.className=t.name,c[e]=o):(xt(c,e,n),c[e].overloadTable[r-2]=o),mt([],s,function(o){var u=ue(n,o,t,i,a);return void 0===c[e].overloadTable?(u.argCount=r-2,c[e]=u):c[e].overloadTable[r-2]=u,[]}),[]})},L:function(t,e){gt(t,{name:e=ot(e),fromWireType:function(t){var e=ce[t].value;return le(t),e},toWireType:function(t,e){return de(e)},argPackAdvance:8,readValueFromPointer:Lt,destructorFunction:null})},u:function(t,e,r){var n=rt(r);gt(t,{name:e=ot(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+he(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:ye(e,n),destructorFunction:null})},K:function(t,e,r,n,o,i){var a=oe(e,r);t=ot(t),o=te(n,o),It(t,function(){ne("Cannot call "+t+" due to unbound types",a)},e-1),mt([],a,function(r){var n=[r[0],null].concat(r.slice(1));return Qt(t,ue(t,n,null,o,i),e-1),[]})},f:function(t,e,r,n,o){e=ot(e),-1===o&&(o=4294967295);var i=rt(r),a=function(t){return t};if(0===n){var u=32-8*r;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");gt(t,{name:e,fromWireType:a,toWireType:function(t,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+he(r)+'" to '+this.name);if(r<n||r>o)throw new TypeError('Passing a number "'+he(r)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+n+", "+o+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:ve(e,i,0!==n),destructorFunction:null})},e:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(t){var e=j,r=e[t>>=2],o=e[t+1];return new n(e.buffer,o,r)}gt(t,{name:r=ot(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},t:function(t,e){var r="std::string"===(e=ot(e));gt(t,{name:e,fromWireType:function(t){var e,n=j[t>>2];if(r){var o=E[t+4+n],i=0;0!=o&&(i=o,E[t+4+n]=0);for(var a=t+4,u=0;u<=n;++u){var s=t+4+u;if(0==E[s]){var c=R(a);void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),a=s+1}}0!=i&&(E[t+4+n]=i)}else{var l=new Array(n);for(u=0;u<n;++u)l[u]=String.fromCharCode(E[t+4+u]);e=l.join("")}return Oe(t),e},toWireType:function(t,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var n="string"==typeof e;n||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||ht("Cannot pass non-string to std::string");var o=(r&&n?function(){return function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&t.charCodeAt(++r)),n<=127?++e:e+=n<=2047?2:n<=65535?3:4}return e}(e)}:function(){return e.length})(),i=je(4+o+1);if(j[i>>2]=o,r&&n)!function(t,e,r,n){if(!(n>0))return 0;for(var o=r+n-1,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),a<=127){if(r>=o)break;e[r++]=a}else if(a<=2047){if(r+1>=o)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=o)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=o)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,E,i+4,o+1);else if(n)for(var a=0;a<o;++a){var u=e.charCodeAt(a);u>255&&(Oe(i),ht("String has UTF-16 code units that do not fit in 8 bits")),E[i+4+a]=u}else for(a=0;a<o;++a)E[i+4+a]=e[a];return null!==t&&t.push(Oe,i),i},argPackAdvance:8,readValueFromPointer:Lt,destructorFunction:function(t){Oe(t)}})},J:function(t,e,r){var n,o;r=ot(r),2===e?(n=function(){return S},o=1):4===e&&(n=function(){return j},o=2),gt(t,{name:r,fromWireType:function(t){for(var e=n(),r=j[t>>2],i=new Array(r),a=t+4>>o,u=0;u<r;++u)i[u]=String.fromCharCode(e[a+u]);return Oe(t),i.join("")},toWireType:function(t,r){var i=n(),a=r.length,u=je(4+a*e);j[u>>2]=a;for(var s=u+4>>o,c=0;c<a;++c)i[s+c]=r.charCodeAt(c);return null!==t&&t.push(Oe,u),u},argPackAdvance:8,readValueFromPointer:Lt,destructorFunction:function(t){Oe(t)}})},H:function(t,e){gt(t,{isVoid:!0,name:e=ot(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},s:function(t,e,r){t=me(t),e=ge(e,"emval::as");var n=[],o=de(n);return O[r>>2]=o,e.toWireType(n,t)},r:function(t,e,r,n){(t=Te[t])(e=me(e),r=we(r),null,n)},b:le,G:function(t){return 0===t?de(Ce()):(t=we(t),de(Ce()[t]))},q:function(t,e){for(var r=function(t,e,r){for(var n=new Array(t),o=0;o<t;++o)n[o]=ge(O[(e>>2)+o],"parameter "+o);return n}(t,e),n=r[0],o=n.name+"_$"+r.slice(1).map(function(t){return t.name}).join("_")+"$",i=["retType"],a=[n],u="",s=0;s<t-1;++s)u+=(0!==s?", ":"")+"arg"+s,i.push("argType"+s),a.push(r[1+s]);var c="return function "+lt("methodCaller_"+o)+"(handle, name, destructors, args) {\n",l=0;for(s=0;s<t-1;++s)c+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=r[s+1].argPackAdvance;for(c+="    var rv = handle[name]("+u+");\n",s=0;s<t-1;++s)r[s+1].deleteObject&&(c+="    argType"+s+".deleteObject(arg"+s+");\n");n.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",i.push(c);var f,p,d=ae(Function,i).apply(null,a);return f=d,p=Te.length,Te.push(f),p},p:function(t){return t=we(t),de(a[t])},k:function(t,e){return de((t=me(t))[e=me(e)])},l:function(t){t>4&&(ce[t].refcount+=1)},o:function(t,e,r,n){t=me(t);var o=$e[e];return o||(o=function(t){for(var e="",r=0;r<t;++r)e+=(0!==r?", ":"")+"arg"+r;var n="return function emval_allocator_"+t+"(constructor, argTypes, args) {\n";for(r=0;r<t;++r)n+="var argType"+r+" = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + "+r+'], "parameter '+r+'");\nvar arg'+r+" = argType"+r+".readValueFromPointer(args);\nargs += argType"+r+"['argPackAdvance'];\n";return n+="var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",n)(ge,a,de)}(e),$e[e]=o),o(t,r,n)},j:function(t){return de(we(t))},n:function(t){ie(ce[t].value),le(t)},d:function(){a.abort()},F:Pe,E:function(t,e,r){E.set(E.subarray(e,e+r),t)},D:function(t){var e=Pe();if(t>2147418112)return!1;for(var r=Math.max(e,16777216);r<t;)r=r<=536870912?D(2*r,65536):Math.min(D((3*r+2147483648)/4,65536),2147418112);return!!function(t){try{return T.grow(t-_.byteLength+65535>>16),U(T.buffer),1}catch(t){}}(r)},C:function(){xe("trap!")},B:function(t){xe("OOM")},a:239456},Ae=a.asm({},_e,_);a.asm=Ae;var Ee,Fe=a.__ZSt18uncaught_exceptionv=function(){return a.asm.O.apply(null,arguments)},Se=(a.___embind_register_native_and_builtin_types=function(){return a.asm.P.apply(null,arguments)},a.___errno_location=function(){return a.asm.Q.apply(null,arguments)},a.___getTypeName=function(){return a.asm.R.apply(null,arguments)}),Oe=a._free=function(){return a.asm.S.apply(null,arguments)},je=a._malloc=function(){return a.asm.T.apply(null,arguments)},We=a.globalCtors=function(){return a.asm.ha.apply(null,arguments)};function ke(t){function e(){Ee||(Ee=!0,$||(M(N),M(H),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)t=a.postRun.shift(),z.unshift(t);var t;M(z)}()))}t=t||l,V>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)t=a.preRun.shift(),L.unshift(t);var t;M(L)}(),V>0||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),e()},1)):e()))}function xe(t){throw a.onAbort&&a.onAbort(t),g(t+=""),b(t),$=!0,"abort("+t+"). Build with -s ASSERTIONS=1 for more info."}if(a.dynCall_ii=function(){return a.asm.U.apply(null,arguments)},a.dynCall_iidiiii=function(){return a.asm.V.apply(null,arguments)},a.dynCall_iii=function(){return a.asm.W.apply(null,arguments)},a.dynCall_iiii=function(){return a.asm.X.apply(null,arguments)},a.dynCall_iiiii=function(){return a.asm.Y.apply(null,arguments)},a.dynCall_iiiiii=function(){return a.asm.Z.apply(null,arguments)},a.dynCall_iiiiiiii=function(){return a.asm._.apply(null,arguments)},a.dynCall_iiiiiiiii=function(){return a.asm.$.apply(null,arguments)},a.dynCall_jiji=function(){return a.asm.aa.apply(null,arguments)},a.dynCall_v=function(){return a.asm.ba.apply(null,arguments)},a.dynCall_vi=function(){return a.asm.ca.apply(null,arguments)},a.dynCall_vii=function(){return a.asm.da.apply(null,arguments)},a.dynCall_viiii=function(){return a.asm.ea.apply(null,arguments)},a.dynCall_viiiii=function(){return a.asm.fa.apply(null,arguments)},a.dynCall_viiiiii=function(){return a.asm.ga.apply(null,arguments)},a.asm=Ae,a.then=function(t){if(Ee)t(a);else{var e=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){e&&e(),t(a)}}return a},G=function t(){Ee||ke(),Ee||(G=t)},a.run=ke,a.abort=xe,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return ke(),t});t.exports=s,onmessage=function(t){var e,r,n=t.data;switch(n.type){case"init":i=n.config,e=n.transcoderBinary,a=new Promise(t=>{s(r={wasmBinary:e,onRuntimeInitialized:t})}).then(()=>{var{BasisFile:t,initializeBasis:e}=r;u=t,e()});break;case"transcode":a.then(()=>{try{for(var{width:t,height:e,hasAlpha:r,mipmaps:o,format:a}=function(t){var e=new u(new Uint8Array(t)),r=e.getImageWidth(0,0),n=e.getImageHeight(0,0),o=e.getNumLevels(0),a=e.getHasAlpha();function s(){e.close(),e.delete()}if(!a)switch(i.format){case 9:i.format=8}if(!r||!n||!o)throw s(),new Error("THREE.BasisTextureLoader:  Invalid .basis file");if(!e.startTranscoding())throw s(),new Error("THREE.BasisTextureLoader: .startTranscoding failed");for(var c=[],l=0;l<o;l++){var f=e.getImageWidth(0,l),p=e.getImageHeight(0,l),d=new Uint8Array(e.getImageTranscodedSizeInBytes(0,l,i.format)),h=e.transcodeImage(d,0,l,i.format,a,0);if(!h)throw s(),new Error("THREE.BasisTextureLoader: .transcodeImage failed.");c.push({data:d,width:f,height:p})}return s(),{width:r,height:n,hasAlpha:a,mipmaps:c,format:i.format}}(n.buffer),s=[],c=0;c<o.length;++c)s.push(o[c].data.buffer);i.returnBuffer&&s.push(n.buffer),self.postMessage({type:"transcode",id:n.id,width:t,height:e,hasAlpha:r,mipmaps:o,format:a,buffer:i.returnBuffer?n.buffer:null},s)}catch(t){console.error(t),self.postMessage({type:"error",id:n.id,error:t.message})}})}}}).call(this,r(0),"/")},function(t,e){},function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,n="/"===a.charAt(0))}return(n?"/":"")+(e=r(i(e.split("/"),function(t){return!!t}),!n).join("/"))||"."},e.normalize=function(t){var n=e.isAbsolute(t),o="/"===a(t,-1);return(t=r(i(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),u=a,s=0;s<a;s++)if(o[s]!==i[s]){u=s;break}var c=[];for(s=u;s<o.length;s++)c.push("..");return(c=c.concat(i.slice(u))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(0))}]);
//# sourceMappingURL=basis_transcoder.worker-6ab8198cbc98ff5446d2.js.map