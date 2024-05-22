import{a as Se,j as ge}from"./jsx-runtime-913be41c.js";import{_ as q}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";import{_ as he}from"./objectWithoutPropertiesLoose-4f48578a.js";import{r as W,R as ve}from"./index-2506bfc3.js";import{c as We,a as Te}from"./index.esm-f81faee8.js";import{B as Ve}from"./Button-68b4c09e.js";import{F as He}from"./FieldTextarea-51366082.js";import{F as Oe,c as Ye}from"./theme-ui-components.esm-600c41e5.js";var pe={},Ge=/[.[\]]+/,Pe=function(e){if(e==null||!e.length)return[];if(typeof e!="string")throw new Error("toPath() expects a string");return pe[e]==null&&(pe[e]=e.split(Ge).filter(Boolean)),pe[e]},R=function(e,a){for(var u=Pe(a),o=e,c=0;c<u.length;c++){var d=u[c];if(o==null||typeof o!="object"||Array.isArray(o)&&isNaN(d))return;o=o[d]}return o};function Je(i){var e=Qe(i,"string");return typeof e=="symbol"?e:String(e)}function Qe(i,e){if(typeof i!="object"||i===null)return i;var a=i[Symbol.toPrimitive];if(a!==void 0){var u=a.call(i,e||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}var Xe=function i(e,a,u,o,c){if(a>=u.length)return o;var d=u[a];if(isNaN(d)){var f;if(e==null){var p,r=i(void 0,a+1,u,o,c);return r===void 0?void 0:(p={},p[d]=r,p)}if(Array.isArray(e))throw new Error("Cannot set a non-numeric property on an array");var y=i(e[d],a+1,u,o,c);if(y===void 0){var N=Object.keys(e).length;if(e[d]===void 0&&N===0)return;if(e[d]!==void 0&&N<=1)return!isNaN(u[a-1])&&!c?{}:void 0;e[d];var P=he(e,[d].map(Je));return P}return q({},e,(f={},f[d]=y,f))}var A=Number(d);if(e==null){var U=i(void 0,a+1,u,o,c);if(U===void 0)return;var z=[];return z[A]=U,z}if(!Array.isArray(e))throw new Error("Cannot set a numeric property on an object");var E=e[A],L=i(E,a+1,u,o,c),C=[].concat(e);if(c&&L===void 0){if(C.splice(A,1),C.length===0)return}else C[A]=L;return C},H=function(e,a,u,o){if(o===void 0&&(o=!1),e==null)throw new Error("Cannot call setIn() with "+String(e)+" state");if(a==null)throw new Error("Cannot call setIn() with "+String(a)+" key");return Xe(e,0,Pe(a),u,o)},we="FINAL_FORM/form-error",ce="FINAL_FORM/array-error";function Le(i,e){var a=i.errors,u=i.initialValues,o=i.lastSubmittedValues,c=i.submitErrors,d=i.submitFailed,f=i.submitSucceeded,p=i.submitting,r=i.values,y=e.active,N=e.blur,P=e.change,A=e.data,U=e.focus,z=e.modified,E=e.modifiedSinceLastSubmit,L=e.name,C=e.touched,M=e.validating,x=e.visited,K=R(r,L),I=R(a,L);I&&I[ce]&&(I=I[ce]);var B=c&&R(c,L),S=u&&R(u,L),b=e.isEqual(S,K),ie=!!(o&&!e.isEqual(R(o,L),K)),re=!I&&!B;return{active:y,blur:N,change:P,data:A,dirty:!b,dirtySinceLastSubmit:ie,error:I,focus:U,initial:S,invalid:!re,length:Array.isArray(K)?K.length:void 0,modified:z,modifiedSinceLastSubmit:E,name:L,pristine:b,submitError:B,submitFailed:d,submitSucceeded:f,submitting:p,touched:C,valid:re,value:K,visited:x,validating:M}}var Be=["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","value","visited","validating"],J=function(e,a){if(e===a)return!0;if(typeof e!="object"||!e||typeof a!="object"||!a)return!1;var u=Object.keys(e),o=Object.keys(a);if(u.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(a),d=0;d<u.length;d++){var f=u[d];if(!c(f)||e[f]!==a[f])return!1}return!0};function ze(i,e,a,u,o,c){var d=!1;return o.forEach(function(f){u[f]&&(i[f]=e[f],(!a||(~c.indexOf(f)?!J(e[f],a[f]):e[f]!==a[f]))&&(d=!0))}),d}var Ze=["data"],_e=function(e,a,u,o){var c={blur:e.blur,change:e.change,focus:e.focus,name:e.name},d=ze(c,e,a,u,Be,Ze)||!a;return d||o?c:void 0},xe=["active","dirty","dirtyFields","dirtyFieldsSinceLastSubmit","dirtySinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitting","submitError","submitErrors","submitFailed","submitSucceeded","touched","valid","validating","values","visited"],et=["touched","visited"];function Re(i,e,a,u){var o={},c=ze(o,i,e,a,xe,et)||!e;return c||u?o:void 0}var je=function(e){var a,u;return function(){for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d];return(!a||c.length!==a.length||c.some(function(f,p){return!J(a[p],f)}))&&(a=c,u=e.apply(void 0,c)),u}},ye=function(i){return!!i&&(typeof i=="object"||typeof i=="function")&&typeof i.then=="function"},tt="4.20.2",it=function(e,a){return e===a},ne=function i(e){return Object.keys(e).some(function(a){var u=e[a];return u&&typeof u=="object"&&!(u instanceof Error)?i(u):typeof u<"u"})};function rt(i){var e=i.active,a=i.dirtySinceLastSubmit,u=i.modifiedSinceLastSubmit,o=i.error,c=i.errors,d=i.initialValues,f=i.pristine,p=i.submitting,r=i.submitFailed,y=i.submitSucceeded,N=i.submitError,P=i.submitErrors,A=i.valid,U=i.validating,z=i.values;return{active:e,dirty:!f,dirtySinceLastSubmit:a,modifiedSinceLastSubmit:u,error:o,errors:c,hasSubmitErrors:!!(N||P&&ne(P)),hasValidationErrors:!!(o||ne(c)),invalid:!A,initialValues:d,pristine:f,submitting:p,submitFailed:r,submitSucceeded:y,submitError:N,submitErrors:P,valid:A,validating:U>0,values:z}}function Ie(i,e,a,u,o,c){var d=o(a,u,e,c);return d?(i(d),!0):!1}function qe(i,e,a,u,o){var c=i.entries;Object.keys(c).forEach(function(d){var f=c[Number(d)];if(f){var p=f.subscription,r=f.subscriber,y=f.notified;Ie(r,p,e,a,u,o||!y)&&(f.notified=!0)}})}function at(i){if(!i)throw new Error("No config specified");var e=i.debug,a=i.destroyOnUnregister,u=i.keepDirtyOnReinitialize,o=i.initialValues,c=i.mutators,d=i.onSubmit,f=i.validate,p=i.validateOnBlur;if(!d)throw new Error("No onSubmit function specified");var r={subscribers:{index:0,entries:{}},fieldSubscribers:{},fields:{},formState:{dirtySinceLastSubmit:!1,modifiedSinceLastSubmit:!1,errors:{},initialValues:o&&q({},o),invalid:!1,pristine:!0,submitting:!1,submitFailed:!1,submitSucceeded:!1,resetWhileSubmitting:!1,valid:!0,validating:0,values:o?q({},o):{}},lastFormState:void 0},y=0,N=!1,P=!1,A=!1,U=0,z={},E=function(t){return function(n){return delete z[t],n}},L=function(t,n,s){var l=R(t.formState.values,n),v=s(l);t.formState.values=H(t.formState.values,n,v)||{}},C=function(t,n,s){if(t.fields[n]){var l,v;t.fields=q({},t.fields,(l={},l[s]=q({},t.fields[n],{name:s,blur:function(){return $.blur(s)},change:function(F){return $.change(s,F)},focus:function(){return $.focus(s)},lastFieldState:void 0}),l)),delete t.fields[n],t.fieldSubscribers=q({},t.fieldSubscribers,(v={},v[s]=t.fieldSubscribers[n],v)),delete t.fieldSubscribers[n];var g=R(t.formState.values,n);t.formState.values=H(t.formState.values,n,void 0)||{},t.formState.values=H(t.formState.values,s,g),delete t.lastFormState}},M=function(t){return function(){if(c){for(var n={formState:r.formState,fields:r.fields,fieldSubscribers:r.fieldSubscribers,lastFormState:r.lastFormState},s=arguments.length,l=new Array(s),v=0;v<s;v++)l[v]=arguments[v];var g=c[t](l,n,{changeValue:L,getIn:R,renameField:C,resetFieldState:$.resetFieldState,setIn:H,shallowEqual:J});return r.formState=n.formState,r.fields=n.fields,r.fieldSubscribers=n.fieldSubscribers,r.lastFormState=n.lastFormState,S(void 0,function(){b(),w()}),g}}},x=c?Object.keys(c).reduce(function(m,t){return m[t]=M(t),m},{}):{},K=function(t){var n=[];if(f){var s=f(q({},r.formState.values));ye(s)?n.push(s.then(t)):t(s)}return n},I=function(t){return Object.keys(t.validators).reduce(function(n,s){var l=t.validators[Number(s)]();return l&&n.push(l),n},[])},B=function(t,n){var s=[],l=I(r.fields[t]);if(l.length){var v;l.forEach(function(g){var V=g(R(r.formState.values,t),r.formState.values,g.length===0||g.length===3?Le(r.formState,r.fields[t]):void 0);if(V&&ye(V)){r.fields[t].validating=!0;var F=V.then(function(O){r.fields[t].validating=!1,n(O)});s.push(F)}else v||(v=V)}),n(v)}return s},S=function(t,n){if(N){P=!0,n();return}var s=r.fields,l=r.formState,v=q({},s),g=Object.keys(v);if(!f&&!g.some(function(ee){return I(v[ee]).length})){n();return}var V=!1;if(t){var F=v[t];if(F){var O=F.validateFields;O&&(V=!0,g=O.length?O.concat(t):[t])}}var j={},T={},Y=[].concat(K(function(ee){j=ee||{}}),g.reduce(function(ee,G){return ee.concat(B(G,function(be){T[G]=be}))},[])),oe=Y.length>0,D=++U,k=Promise.all(Y).then(E(D));oe&&(z[D]=k);var ae=function(){var G=q({},V?l.errors:{},j),be=function(te){g.forEach(function(Q){if(s[Q]){var fe=R(j,Q),Ce=R(G,Q),Me=I(v[Q]).length,Ke=T[Q];te(Q,Me&&Ke||f&&fe||(!fe&&!V?Ce:void 0))}})};be(function(de,te){G=H(G,de,te)||{}}),be(function(de,te){if(te&&te[ce]){var Q=R(G,de),fe=[].concat(Q);fe[ce]=te[ce],G=H(G,de,fe)}}),J(l.errors,G)||(l.errors=G),l.error=j[we]};if(ae(),n(),oe){r.formState.validating++,n();var Ee=function(){r.formState.validating--,n()};k.then(function(){U>D||ae()}).then(Ee,Ee)}},b=function(t){if(!y){var n=r.fields,s=r.fieldSubscribers,l=r.formState,v=q({},n),g=function(F){var O=v[F],j=Le(l,O),T=O.lastFieldState;O.lastFieldState=j;var Y=s[F];Y&&qe(Y,j,T,_e,T===void 0)};t?g(t):Object.keys(v).forEach(g)}},ie=function(){Object.keys(r.fields).forEach(function(t){r.fields[t].touched=!0})},re=function(){return!!(r.formState.error||ne(r.formState.errors))},Z=function(){var t=r.fields,n=r.formState,s=r.lastFormState,l=q({},t),v=Object.keys(l),g=!1,V=v.reduce(function(D,k){var ae=!l[k].isEqual(R(n.values,k),R(n.initialValues||{},k));return ae&&(g=!0,D[k]=!0),D},{}),F=v.reduce(function(D,k){var ae=n.lastSubmittedValues||{};return l[k].isEqual(R(n.values,k),R(ae,k))||(D[k]=!0),D},{});n.pristine=!g,n.dirtySinceLastSubmit=!!(n.lastSubmittedValues&&Object.values(F).some(function(D){return D})),n.modifiedSinceLastSubmit=!!(n.lastSubmittedValues&&Object.keys(l).some(function(D){return l[D].modifiedSinceLastSubmit})),n.valid=!n.error&&!n.submitError&&!ne(n.errors)&&!(n.submitErrors&&ne(n.submitErrors));var O=rt(n),j=v.reduce(function(D,k){return D.modified[k]=l[k].modified,D.touched[k]=l[k].touched,D.visited[k]=l[k].visited,D},{modified:{},touched:{},visited:{}}),T=j.modified,Y=j.touched,oe=j.visited;return O.dirtyFields=s&&J(s.dirtyFields,V)?s.dirtyFields:V,O.dirtyFieldsSinceLastSubmit=s&&J(s.dirtyFieldsSinceLastSubmit,F)?s.dirtyFieldsSinceLastSubmit:F,O.modified=s&&J(s.modified,T)?s.modified:T,O.touched=s&&J(s.touched,Y)?s.touched:Y,O.visited=s&&J(s.visited,oe)?s.visited:oe,s&&J(s,O)?s:O},ue=function(){return e&&!0&&e(Z(),Object.keys(r.fields).reduce(function(t,n){return t[n]=r.fields[n],t},{}))},se=!1,h=!1,w=function m(){if(se)h=!0;else{if(se=!0,ue(),!y&&!(N&&A)){var t=r.lastFormState,n=Z();n!==t&&(r.lastFormState=n,qe(r.subscribers,n,t,Re))}se=!1,h&&(h=!1,m())}},le=function(){return Object.keys(r.fields).some(function(t){return r.fields[t].beforeSubmit&&r.fields[t].beforeSubmit()===!1})},me=function(){return Object.keys(r.fields).forEach(function(t){return r.fields[t].afterSubmit&&r.fields[t].afterSubmit()})},_=function(){return Object.keys(r.fields).forEach(function(t){return r.fields[t].modifiedSinceLastSubmit=!1})};S(void 0,function(){w()});var $={batch:function(t){y++,t(),y--,b(),w()},blur:function(t){var n=r.fields,s=r.formState,l=n[t];l&&(delete s.active,n[t]=q({},l,{active:!1,touched:!0}),p?S(t,function(){b(),w()}):(b(),w()))},change:function(t,n){var s=r.fields,l=r.formState;if(R(l.values,t)!==n){L(r,t,function(){return n});var v=s[t];v&&(s[t]=q({},v,{modified:!0,modifiedSinceLastSubmit:!!l.lastSubmittedValues})),p?(b(),w()):S(t,function(){b(),w()})}},get destroyOnUnregister(){return!!a},set destroyOnUnregister(m){a=m},focus:function(t){var n=r.fields[t];n&&!n.active&&(r.formState.active=t,n.active=!0,n.visited=!0,b(),w())},mutators:x,getFieldState:function(t){var n=r.fields[t];return n&&n.lastFieldState},getRegisteredFields:function(){return Object.keys(r.fields)},getState:function(){return Z()},initialize:function(t){var n=r.fields,s=r.formState,l=q({},n),v=typeof t=="function"?t(s.values):t;u||(s.values=v);var g=u?Object.keys(l).reduce(function(V,F){var O=l[F],j=O.isEqual(R(s.values,F),R(s.initialValues||{},F));return j||(V[F]=R(s.values,F)),V},{}):{};s.initialValues=v,s.values=v,Object.keys(g).forEach(function(V){s.values=H(s.values,V,g[V])}),S(void 0,function(){b(),w()})},isValidationPaused:function(){return N},pauseValidation:function(t){t===void 0&&(t=!0),N=!0,A=t},registerField:function(t,n,s,l){s===void 0&&(s={}),r.fieldSubscribers[t]||(r.fieldSubscribers[t]={index:0,entries:{}});var v=r.fieldSubscribers[t].index++;r.fieldSubscribers[t].entries[v]={subscriber:je(n),subscription:s,notified:!1},r.fields[t]||(r.fields[t]={active:!1,afterSubmit:l&&l.afterSubmit,beforeSubmit:l&&l.beforeSubmit,blur:function(){return $.blur(t)},change:function(T){return $.change(t,T)},data:l&&l.data||{},focus:function(){return $.focus(t)},isEqual:l&&l.isEqual||it,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,name:t,touched:!1,valid:!0,validateFields:l&&l.validateFields,validators:{},validating:!1,visited:!1});var g=!1,V=l&&l.silent,F=function(){V?b(t):(w(),b())};if(l){g=!!(l.getValidator&&l.getValidator()),l.getValidator&&(r.fields[t].validators[v]=l.getValidator);var O=R(r.formState.values,t)===void 0;l.initialValue!==void 0&&O&&(R(r.formState.values,t)===void 0||R(r.formState.values,t)===R(r.formState.initialValues,t))&&(r.formState.initialValues=H(r.formState.initialValues||{},t,l.initialValue),r.formState.values=H(r.formState.values,t,l.initialValue),S(void 0,F)),l.defaultValue!==void 0&&l.initialValue===void 0&&R(r.formState.initialValues,t)===void 0&&O&&(r.formState.values=H(r.formState.values,t,l.defaultValue))}return g?S(void 0,F):F(),function(){var j=!1;r.fields[t]&&(j=!!(r.fields[t].validators[v]&&r.fields[t].validators[v]()),delete r.fields[t].validators[v]);var T=!!r.fieldSubscribers[t];T&&delete r.fieldSubscribers[t].entries[v];var Y=T&&!Object.keys(r.fieldSubscribers[t].entries).length;Y&&(delete r.fieldSubscribers[t],delete r.fields[t],j&&(r.formState.errors=H(r.formState.errors,t,void 0)||{}),a&&(r.formState.values=H(r.formState.values,t,void 0,!0)||{})),V||(j?S(void 0,function(){w(),b()}):Y&&w())}},reset:function(t){t===void 0&&(t=r.formState.initialValues),r.formState.submitting&&(r.formState.resetWhileSubmitting=!0),r.formState.submitFailed=!1,r.formState.submitSucceeded=!1,delete r.formState.submitError,delete r.formState.submitErrors,delete r.formState.lastSubmittedValues,$.initialize(t||{})},resetFieldState:function(t){r.fields[t]=q({},r.fields[t],{active:!1,lastFieldState:void 0,modified:!1,touched:!1,valid:!0,validating:!1,visited:!1}),S(void 0,function(){b(),w()})},restart:function(t){t===void 0&&(t=r.formState.initialValues),$.batch(function(){for(var n in r.fields)$.resetFieldState(n),r.fields[n]=q({},r.fields[n],{active:!1,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,touched:!1,valid:!0,validating:!1,visited:!1});$.reset(t)})},resumeValidation:function(){N=!1,A=!1,P&&S(void 0,function(){b(),w()}),P=!1},setConfig:function(t,n){switch(t){case"debug":e=n;break;case"destroyOnUnregister":a=n;break;case"initialValues":$.initialize(n);break;case"keepDirtyOnReinitialize":u=n;break;case"mutators":c=n,n?(Object.keys(x).forEach(function(s){s in n||delete x[s]}),Object.keys(n).forEach(function(s){x[s]=M(s)})):Object.keys(x).forEach(function(s){delete x[s]});break;case"onSubmit":d=n;break;case"validate":f=n,S(void 0,function(){b(),w()});break;case"validateOnBlur":p=n;break;default:throw new Error("Unrecognised option "+t)}},submit:function(){var t=r.formState;if(!t.submitting){if(delete t.submitErrors,delete t.submitError,t.lastSubmittedValues=q({},t.values),re()){ie(),r.formState.submitFailed=!0,w(),b();return}var n=Object.keys(z);if(n.length){Promise.all(n.map(function(F){return z[Number(F)]})).then($.submit,console.error);return}var s=le();if(!s){var l,v=!1,g=function(O){t.submitting=!1;var j=t.resetWhileSubmitting;return j&&(t.resetWhileSubmitting=!1),O&&ne(O)?(t.submitFailed=!0,t.submitSucceeded=!1,t.submitErrors=O,t.submitError=O[we],ie()):(j||(t.submitFailed=!1,t.submitSucceeded=!0),me()),w(),b(),v=!0,l&&l(O),O};t.submitting=!0,t.submitFailed=!1,t.submitSucceeded=!1,t.lastSubmittedValues=q({},t.values),_();var V=d(t.values,$,g);if(!v){if(V&&ye(V))return w(),b(),V.then(g,function(F){throw g(),F});if(d.length>=3)return w(),b(),new Promise(function(F){l=F});g(V)}}}},subscribe:function(t,n){if(!t)throw new Error("No callback given.");if(!n)throw new Error("No subscription provided. What values do you want to listen to?");var s=je(t),l=r.subscribers,v=l.index++;l.entries[v]={subscriber:s,subscription:n,notified:!1};var g=Z();return Ie(s,n,g,g,Re,!0),function(){delete l.entries[v]}}};return $}function $e(i,e,a){var u=i.render,o=i.children,c=i.component,d=he(i,["render","children","component"]);if(c)return W.createElement(c,Object.assign(e,d,{children:o,render:u}));if(u)return u(o===void 0?Object.assign(e,d):Object.assign(e,d,{children:o}));if(typeof o!="function")throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+a);return o(Object.assign(e,d))}function X(i,e,a){a===void 0&&(a=function(c,d){return c===d});var u=ve.useRef(i);ve.useEffect(function(){a(i,u.current)||(e(),u.current=i)})}function nt(i){var e=ve.useRef();return e.current||(e.current=i()),e.current}var Ae=function(e,a){if(e===a)return!0;if(typeof e!="object"||!e||typeof a!="object"||!a)return!1;var u=Object.keys(e),o=Object.keys(a);if(u.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(a),d=0;d<u.length;d++){var f=u[d];if(!c(f)||e[f]!==a[f])return!1}return!0},ut=function(e){return!!(e&&typeof e.stopPropagation=="function")},ke=W.createContext();function De(i){var e=ve.useRef(i);return ve.useEffect(function(){e.current=i}),e}var st="6.5.3",Ue=function(e,a,u){u.forEach(function(o){Object.defineProperty(e,o,{get:function(){return a[o]},enumerable:!0})})},lt=function(e,a){return Ue(e,a,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},ot=function(e,a){return Ue(e,a,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])},dt={"final-form":tt,"react-final-form":st},ft=xe.reduce(function(i,e){return i[e]=!0,i},{});function ct(i){var e=i.debug,a=i.decorators,u=i.destroyOnUnregister,o=i.form,c=i.initialValues,d=i.initialValuesEqual,f=i.keepDirtyOnReinitialize,p=i.mutators,r=i.onSubmit,y=i.subscription,N=y===void 0?ft:y,P=i.validate,A=i.validateOnBlur,U=he(i,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),z={debug:e,destroyOnUnregister:u,initialValues:c,keepDirtyOnReinitialize:f,mutators:p,onSubmit:r,validate:P,validateOnBlur:A},E=nt(function(){var B=o||at(z);return B.pauseValidation(),B}),L=W.useState(function(){var B={};return E.subscribe(function(S){B=S},N)(),B}),C=L[0],M=L[1],x=De(C);W.useEffect(function(){E.isValidationPaused()&&E.resumeValidation();var B=[E.subscribe(function(S){Ae(S,x.current)||M(S)},N)].concat(a?a.map(function(S){return S(E)}):[]);return function(){E.pauseValidation(),B.reverse().forEach(function(S){return S()})}},[a]),X(e,function(){E.setConfig("debug",e)}),X(u,function(){E.destroyOnUnregister=!!u}),X(f,function(){E.setConfig("keepDirtyOnReinitialize",f)}),X(c,function(){E.setConfig("initialValues",c)},d||Ae),X(p,function(){E.setConfig("mutators",p)}),X(r,function(){E.setConfig("onSubmit",r)}),X(P,function(){E.setConfig("validate",P)}),X(A,function(){E.setConfig("validateOnBlur",A)});var K=function(S){return S&&(typeof S.preventDefault=="function"&&S.preventDefault(),typeof S.stopPropagation=="function"&&S.stopPropagation()),E.submit()},I={form:q({},E,{reset:function(S){ut(S)?E.reset():E.reset(S)}}),handleSubmit:K};return lt(I,C),W.createElement(ke.Provider,{value:E},$e(q({},U,{__versions:dt}),I,"ReactFinalForm"))}function vt(i){var e=W.useContext(ke);if(!e)throw new Error((i||"useForm")+" must be used inside of a <Form> component");return e}var mt=typeof window<"u"&&window.navigator&&window.navigator.product&&window.navigator.product==="ReactNative",bt=function(e){var a=[];if(e)for(var u=0;u<e.length;u++){var o=e[u];o.selected&&a.push(o.value)}return a},St=function(e,a,u,o){if(!o&&e.nativeEvent&&e.nativeEvent.text!==void 0||o&&e.nativeEvent)return e.nativeEvent.text;var c=e,d=c.target,f=d.type,p=d.value,r=d.checked;switch(f){case"checkbox":if(u!==void 0){if(r)return Array.isArray(a)?a.concat(u):[u];if(!Array.isArray(a))return a;var y=a.indexOf(u);return y<0?a:a.slice(0,y).concat(a.slice(y+1))}else return!!r;case"select-multiple":return bt(e.target.options);default:return p}},ht=Be.reduce(function(i,e){return i[e]=!0,i},{}),Fe=function(e,a){return e===void 0?"":e},gt=function(e,a){return e===""?void 0:e},pt=function(e,a){return e===a};function yt(i,e){e===void 0&&(e={});var a=e,u=a.afterSubmit,o=a.allowNull,c=a.component,d=a.data,f=a.defaultValue,p=a.format,r=p===void 0?Fe:p,y=a.formatOnBlur,N=a.initialValue,P=a.multiple,A=a.parse,U=A===void 0?gt:A,z=a.subscription,E=z===void 0?ht:z,L=a.type,C=a.validateFields,M=a.value,x=vt("useField"),K=De(e),I=function(w,le){return x.registerField(i,w,E,{afterSubmit:u,beforeSubmit:function(){var _=K.current,$=_.beforeSubmit,m=_.formatOnBlur,t=_.format,n=t===void 0?Fe:t;if(m){var s=x.getFieldState(i),l=s.value,v=n(l,i);v!==l&&x.change(i,v)}return $&&$()},data:d,defaultValue:f,getValidator:function(){return K.current.validate},initialValue:N,isEqual:function(_,$){return(K.current.isEqual||pt)(_,$)},silent:le,validateFields:C})},B=W.useRef(!0),S=W.useState(function(){var h={},w=x.destroyOnUnregister;return x.destroyOnUnregister=!1,I(function(le){h=le},!0)(),x.destroyOnUnregister=w,h}),b=S[0],ie=S[1];W.useEffect(function(){return I(function(h){B.current?B.current=!1:ie(h)},!1)},[i,d,f,N]);var re={onBlur:W.useCallback(function(h){if(b.blur(),y){var w=x.getFieldState(b.name);b.change(r(w.value,b.name))}},[b.blur,b.name,r,y]),onChange:W.useCallback(function(h){var w=h&&h.target?St(h,b.value,M,mt):h;b.change(U(w,i))},[M,i,U,b.change,b.value,L]),onFocus:W.useCallback(function(h){b.focus()},[b.focus])},Z={};ot(Z,b);var ue=q({name:i,get value(){var h=b.value;return y?c==="input"&&(h=Fe(h)):h=r(h,i),h===null&&!o&&(h=""),L==="checkbox"||L==="radio"?M:c==="select"&&P?h||[]:h},get checked(){var h=b.value;if(L==="checkbox")return h=r(h,i),M===void 0?!!h:!!(Array.isArray(h)&&~h.indexOf(M));if(L==="radio")return r(h,i)===M}},re);P&&(ue.multiple=P),L!==void 0&&(ue.type=L);var se={input:ue,meta:Z};return se}var Ft=W.forwardRef(function(e,a){var u=e.afterSubmit,o=e.allowNull,c=e.beforeSubmit,d=e.children,f=e.component,p=e.data,r=e.defaultValue,y=e.format,N=e.formatOnBlur,P=e.initialValue,A=e.isEqual,U=e.multiple,z=e.name,E=e.parse,L=e.subscription,C=e.type,M=e.validate,x=e.validateFields,K=e.value,I=he(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),B=yt(z,{afterSubmit:u,allowNull:o,beforeSubmit:c,children:d,component:f,data:p,defaultValue:r,format:y,formatOnBlur:N,initialValue:P,isEqual:A,multiple:U,parse:E,subscription:L,type:C,validate:M,validateFields:x,value:K});if(typeof d=="function")return d(q({},B,I));if(typeof f=="string")return W.createElement(f,q({},B.input,{children:d,ref:a},I));if(!z)throw new Error("prop name cannot be undefined in <Field> component");return $e(q({children:d,component:f,ref:a},I),B,"Field("+z+")")});const Ne=i=>{const{comment:e,isReply:a}=i,u=We({comment:Te().required("Make sure this field is filled correctly")}),o=f=>f!=null&&f.trim()?void 0:"Comment cannot be blank",c=f=>{f!=null&&f.trim()&&(i==null||i.handleSubmit(f))};return Se(ct,{onSubmit:()=>{},initialValues:{comment:e},validate:async f=>{try{await u.validate(f,{abortEarly:!1})}catch(p){return p.inner.reduce((r,y)=>({...r,[y.path]:y.message}),{})}},render:({invalid:f,handleSubmit:p,values:r})=>ge(Oe,{as:"form",sx:{flexDirection:"column"},p:2,onSubmit:p,children:[ge(Ye,{as:"label",htmlFor:"comment",sx:{marginBottom:"6px",fontSize:3},children:["Edit ",a?"Reply":"Comment"]}),Se(Ft,{component:He,"data-cy":"edit-comment",id:"comment",validate:o,name:"comment"}),ge(Oe,{mt:4,ml:"auto",children:[Se(Ve,{small:!0,mr:4,variant:"secondary",onClick:()=>i==null?void 0:i.handleCancel(),children:"Cancel"}),Se(Ve,{"data-cy":"edit-comment-submit","data-testid":"edit-comment-submit",type:"submit","aria-label":"Save changes",small:!0,disabled:f,onClick:()=>{c(r.comment)},children:"Save"})]})]})})};try{Ne.displayName="EditComment",Ne.__docgenInfo={description:"",displayName:"EditComment",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"string"}},handleCancel:{defaultValue:null,description:"",name:"handleCancel",required:!0,type:{name:"() => void"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!0,type:{name:"(commentText: string) => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}}}}}catch{}export{Ne as E};
//# sourceMappingURL=EditComment-d83f36be.js.map
