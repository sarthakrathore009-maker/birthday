import{N as fo,A as Tl,a as kn,D as El,K as _l,E as es,G as Rl,T as Et,V as yt,M as q,B as Cl,F as Ll,b as Gi,P as ti,S as Oi,c as _,d as Nn,e as go,f as xn,g as vo,X as Il,h as $l,i as Dl,j as yo,k as bo,R as be,L as it,C as st,l as ei,O as Vn,H as We,m as Mn,W as qe,U as Wi,n as wo,o as Ol,p as Rt,q as Xe,I as Pl,r as Fl,s as kl,t as Nl,u as An,v as ii,w as Vl,x as Ul,y as Bl,z as jn,J as is,Q as So,Y as xo,Z as Gn,_ as Un,$ as zl,a0 as Hl,a1 as jl,a2 as Gl,a3 as Wl,a4 as Wn,a5 as ql,a6 as qi,a7 as Mo,a8 as ss,a9 as Ao,aa as To,ab as Eo,ac as _o,ad as Ro,ae as Xl,af as Kl,ag as Yl,ah as Zl,ai as Co,aj as Jl,ak as Ql,al as Lo,am as th,an as eh,ao as ih,ap as de,aq as qn,ar as sh,as as nh,at as ah,au as li,av as Io,aw as $o,ax as rh,ay as oh}from"../three-CTEC2lWo.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"95e1769021e1d462accb45343f9ff58c8082e2ad"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="653dda09-f10c-4ecd-8169-535f43ff6996",o._sentryDebugIdIdentifier="sentry-dbid-653dda09-f10c-4ecd-8169-535f43ff6996")})()}catch{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lh=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},hh=(o,t,e)=>{t.constructor.createProperty(e,o)};function S(o){return(t,e)=>e!==void 0?hh(o,t,e):lh(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hs;((hs=window.HTMLSlotElement)===null||hs===void 0?void 0:hs.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=window,Bn=Pi.ShadowRoot&&(Pi.ShadyCSS===void 0||Pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Do=Symbol(),Xn=new WeakMap;let ch=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Do)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Bn&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Xn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Xn.set(e,t))}return t}toString(){return this.cssText}};const uh=o=>new ch(typeof o=="string"?o:o+"",void 0,Do),dh=(o,t)=>{Bn?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Pi.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},Kn=Bn?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return uh(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cs;const Xi=window,Yn=Xi.trustedTypes,ph=Yn?Yn.emptyScript:"",Zn=Xi.reactiveElementPolyfillSupport,Tn={toAttribute(o,t){switch(t){case Boolean:o=o?ph:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Oo=(o,t)=>t!==o&&(t==t||o==o),us={attribute:!0,type:String,converter:Tn,reflect:!1,hasChanged:Oo},En="finalized";let Ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=us){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||us}static finalize(){if(this.hasOwnProperty(En))return!1;this[En]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Kn(s))}else t!==void 0&&e.push(Kn(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return dh(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=us){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const a=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Tn).toAttribute(e,i.type);this._$El=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const a=s.getPropertyOptions(n),r=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Tn;this._$El=n,this[n]=r.fromAttribute(e,a.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Oo)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ht[En]=!0,Ht.elementProperties=new Map,Ht.elementStyles=[],Ht.shadowRootOptions={mode:"open"},Zn?.({ReactiveElement:Ht}),((cs=Xi.reactiveElementVersions)!==null&&cs!==void 0?cs:Xi.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ds;const Ki=window,we=Ki.trustedTypes,Jn=we?we.createPolicy("lit-html",{createHTML:o=>o}):void 0,_n="$lit$",Mt=`lit$${(Math.random()+"").slice(9)}$`,Po="?"+Mt,mh=`<${Po}>`,Gt=document,Ke=()=>Gt.createComment(""),Ye=o=>o===null||typeof o!="object"&&typeof o!="function",Fo=Array.isArray,fh=o=>Fo(o)||typeof o?.[Symbol.iterator]=="function",ps=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qn=/-->/g,ta=/>/g,Dt=RegExp(`>|${ps}(?:([^\\s"'>=/]+)(${ps}*=${ps}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,ia=/"/g,ko=/^(?:script|style|textarea|title)$/i,gh=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),ns=gh(1),Se=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),sa=new WeakMap,jt=Gt.createTreeWalker(Gt,129,null,!1);function No(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jn!==void 0?Jn.createHTML(t):t}const vh=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",a=Te;for(let r=0;r<e;r++){const l=o[r];let h,d,c=-1,u=0;for(;u<l.length&&(a.lastIndex=u,d=a.exec(l),d!==null);)u=a.lastIndex,a===Te?d[1]==="!--"?a=Qn:d[1]!==void 0?a=ta:d[2]!==void 0?(ko.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=Dt):d[3]!==void 0&&(a=Dt):a===Dt?d[0]===">"?(a=s??Te,c=-1):d[1]===void 0?c=-2:(c=a.lastIndex-d[2].length,h=d[1],a=d[3]===void 0?Dt:d[3]==='"'?ia:ea):a===ia||a===ea?a=Dt:a===Qn||a===ta?a=Te:(a=Dt,s=void 0);const p=a===Dt&&o[r+1].startsWith("/>")?" ":"";n+=a===Te?l+mh:c>=0?(i.push(h),l.slice(0,c)+_n+l.slice(c)+Mt+p):l+Mt+(c===-2?(i.push(void 0),r):p)}return[No(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class Ze{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const r=t.length-1,l=this.parts,[h,d]=vh(t,e);if(this.el=Ze.createElement(h,i),jt.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=jt.nextNode())!==null&&l.length<r;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(_n)||u.startsWith(Mt)){const p=d[a++];if(c.push(u),p!==void 0){const m=s.getAttribute(p.toLowerCase()+_n).split(Mt),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:y[2],strings:m,ctor:y[1]==="."?bh:y[1]==="?"?Sh:y[1]==="@"?xh:as})}else l.push({type:6,index:n})}for(const u of c)s.removeAttribute(u)}if(ko.test(s.tagName)){const c=s.textContent.split(Mt),u=c.length-1;if(u>0){s.textContent=we?we.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ke()),jt.nextNode(),l.push({type:2,index:++n});s.append(c[u],Ke())}}}else if(s.nodeType===8)if(s.data===Po)l.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(Mt,c+1))!==-1;)l.push({type:7,index:n}),c+=Mt.length-1}n++}}static createElement(t,e){const i=Gt.createElement("template");return i.innerHTML=t,i}}function xe(o,t,e=o,i){var s,n,a,r;if(t===Se)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=Ye(t)?void 0:t._$litDirective$;return l?.constructor!==h&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,i)),i!==void 0?((a=(r=e)._$Co)!==null&&a!==void 0?a:r._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=xe(o,l._$AS(o,t.values),l,i)),t}class yh{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:Gt).importNode(i,!0);jt.currentNode=n;let a=jt.nextNode(),r=0,l=0,h=s[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new si(a,a.nextSibling,this,t):h.type===1?d=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(d=new Mh(a,this,t)),this._$AV.push(d),h=s[++l]}r!==h?.index&&(a=jt.nextNode(),r++)}return jt.currentNode=Gt,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class si{constructor(t,e,i,s){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xe(this,t,e),Ye(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==Se&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):fh(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==N&&Ye(this._$AH)?this._$AA.nextSibling.data=t:this.$(Gt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ze.createElement(No(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const a=new yh(n,this),r=a.u(this.options);a.v(i),this.$(r),this._$AH=a}}_$AC(t){let e=sa.get(t.strings);return e===void 0&&sa.set(t.strings,e=new Ze(t)),e}T(t){Fo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new si(this.k(Ke()),this.k(Ke()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class as{constructor(t,e,i,s,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=xe(this,t,e,0),a=!Ye(t)||t!==this._$AH&&t!==Se,a&&(this._$AH=t);else{const r=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=xe(this,r[i+l],e,l),h===Se&&(h=this._$AH[l]),a||(a=!Ye(h)||h!==this._$AH[l]),h===N?t=N:t!==N&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bh extends as{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const wh=we?we.emptyScript:"";class Sh extends as{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,wh):this.element.removeAttribute(this.name)}}class xh extends as{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=xe(this,t,e,0))!==null&&i!==void 0?i:N)===Se)return;const s=this._$AH,n=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==N&&(s===N||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Mh{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){xe(this,t)}}const na=Ki.litHtmlPolyfillSupport;na?.(Ze,si),((ds=Ki.litHtmlVersions)!==null&&ds!==void 0?ds:Ki.litHtmlVersions=[]).push("2.8.0");const Vo=(o,t,e)=>{var i,s;const n=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let a=n._$litPart$;if(a===void 0){const r=(s=e?.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=a=new si(t.insertBefore(Ke(),r),r,void 0,e??{})}return a._$AI(o),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ms,fs;class Fi extends Ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vo(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Se}}Fi.finalized=!0,Fi._$litElement$=!0,(ms=globalThis.litElementHydrateSupport)===null||ms===void 0||ms.call(globalThis,{LitElement:Fi});const aa=globalThis.litElementPolyfillSupport;aa?.({LitElement:Fi});((fs=globalThis.litElementVersions)!==null&&fs!==void 0?fs:globalThis.litElementVersions=[]).push("3.3.3");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,Bo=Uo&&self.XRSession.prototype.requestHitTestSource!=null,gs=self.ResizeObserver!=null,vs=self.IntersectionObserver!=null,zo=Bo;(()=>{const o=navigator.userAgent||navigator.vendor||self.opera;let t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4)))&&(t=!0),t})();const Ah=/android/i.test(navigator.userAgent),Th=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Eh=/firefox/i.test(navigator.userAgent),_h=/OculusBrowser/.test(navigator.userAgent),Rh=Ah&&!Eh&&!_h,Ch=!!(window.webkit&&window.webkit.messageHandlers),ra=(()=>{if(Th){if(Ch)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const o=document.createElement("a");return!!(o.relList&&o.relList.supports&&o.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=o=>o&&o!=="null"?Lh(o):null,oa=()=>{if(zo)return;const o=[];throw Uo||o.push("WebXR Device API"),Bo||o.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${o.join(", ")}`)},Lh=o=>new URL(o,window.location.toString()).toString(),Ih=(o,t)=>{let e=null;const i=(...s)=>{e==null&&(o(...s),e=self.setTimeout(()=>e=null,t))};return i.flush=()=>{e!=null&&(self.clearTimeout(e),e=null)},i},la=(o,t)=>{let e=null;return(...i)=>{e!=null&&self.clearTimeout(e),e=self.setTimeout(()=>{e=null,o(...i)},t)}},et=(o,t,e)=>Math.max(t,Math.min(e,o)),$h=1,Rn=(()=>{const o=(()=>{var t;if(!((t=document.documentElement.getAttribute("itemtype"))===null||t===void 0)&&t.includes("schema.org/SearchResultsPage")||window.self!==window.top)return!0;const e=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const i of e)if(i.name==="viewport")return!0;return!1})();return o||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>o?window.devicePixelRatio:$h})(),ha=(()=>{const o="model-viewer-debug-mode",t=new RegExp(`[?&]${o}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(t)})(),Dh=(o=0)=>new Promise(t=>setTimeout(t,o)),Oh=(o,t,e=null)=>new Promise(i=>{function s(n){(!e||e(n))&&(i(n),o.removeEventListener(t,s))}o.addEventListener(t,s)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};const Ph=.5,Fh=0,kh=1,Nh=1,Ue=Symbol("currentEnvironmentMap"),Be=Symbol("currentBackground"),Yi=Symbol("updateEnvironment"),hi=Symbol("cancelEnvironmentUpdate"),Vh=o=>{var t,e,i;class s extends o{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=Fh,this.shadowSoftness=kh,this.exposure=Nh,this.toneMapping="auto",this.skyboxHeight="0",this[t]=null,this[e]=null,this[i]=null}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[g].setShadowIntensity(this.shadowIntensity*Ph),this[B]()),a.has("shadowSoftness")&&(this[g].setShadowSoftness(this.shadowSoftness),this[B]()),a.has("exposure")&&(this[g].exposure=this.exposure,this[B]()),a.has("toneMapping")&&(this[g].toneMapping=this.toneMapping==="commerce"||this.toneMapping==="neutral"?fo:this.toneMapping==="agx"?Tl:kn,this[B]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[Me]()&&this[Yi](),a.has("skyboxHeight")&&(this[g].setGroundedSkybox(),this[B]())}hasBakedShadow(){return this[g].bakedShadows.size>0}async[(t=Ue,e=Be,i=hi,Yi)](){const{skyboxImage:a,environmentImage:r}=this;this[hi]!=null&&(this[hi](),this[hi]=null);const{textureUtils:l}=this[C];if(l==null)return;const h=this[Wt].beginActivity("environment-update");try{const{environmentMap:d,skybox:c}=await l.generateEnvironmentMapAndSkybox(Ho(a),r,u=>h(et(u,0,1)));this[Ue]!==d&&(this[Ue]=d,this.dispatchEvent(new CustomEvent("environment-change"))),c!=null?this[Be]=c.name===d.name?d:c:this[Be]=null,this[g].setEnvironmentAndSkybox(this[Ue],this[Be])}catch(d){if(d instanceof Error)throw this[g].setEnvironmentAndSkybox(null,null),d}finally{h(1)}}}return Ot([S({type:String,attribute:"environment-image"})],s.prototype,"environmentImage",void 0),Ot([S({type:String,attribute:"skybox-image"})],s.prototype,"skyboxImage",void 0),Ot([S({type:Number,attribute:"shadow-intensity"})],s.prototype,"shadowIntensity",void 0),Ot([S({type:Number,attribute:"shadow-softness"})],s.prototype,"shadowSoftness",void 0),Ot([S({type:Number})],s.prototype,"exposure",void 0),Ot([S({type:String,attribute:"tone-mapping"})],s.prototype,"toneMapping",void 0),Ot([S({type:String,attribute:"skybox-height"})],s.prototype,"skyboxHeight",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=ns`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=ns`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=ns`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=ns`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${zh}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${Bh}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${Uh}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,jh=o=>{Vo(Hh,o)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ca,ua;const Y=Symbol("retainerCount"),ct=Symbol("recentlyUsed"),ci=Symbol("evict"),Ee=Symbol("evictionThreshold"),ys=Symbol("cache");class Gh{constructor(t,e=5){this[ca]=new Map,this[ua]=[],this[ys]=t,this[Ee]=e}set evictionThreshold(t){this[Ee]=t,this[ci]()}get evictionThreshold(){return this[Ee]}get cache(){return this[ys]}retainerCount(t){return this[Y].get(t)||0}reset(){this[Y].clear(),this[ct]=[]}retain(t){this[Y].has(t)||this[Y].set(t,0),this[Y].set(t,this[Y].get(t)+1);const e=this[ct].indexOf(t);e!==-1&&this[ct].splice(e,1),this[ct].unshift(t),this[ci]()}release(t){this[Y].has(t)&&this[Y].set(t,Math.max(this[Y].get(t)-1,0)),this[ci]()}[(ca=Y,ua=ct,ci)](){if(!(this[ct].length<this[Ee]))for(let t=this[ct].length-1;t>=this[Ee];--t){const e=this[ct][t];this[Y].get(e)===0&&(this[ys].delete(e),this[ct].splice(t,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=o=>{const t=[],e=new Set;for(const i of o){let s=i,n=0;for(;e.has(s);)s=i+"."+ ++n;e.add(s),t.push(s)}return t},qh=o=>{const t=new Map;for(const e of o.mappings)for(const i of e.variants)t.set(i,{material:null,gltfMaterialIndex:e.material});return t};class Xh{constructor(t){this.parser=t,this.name="KHR_materials_variants"}afterRoot(t){const e=this.parser,i=e.json;if(i.extensions===void 0||i.extensions[this.name]===void 0)return null;const n=i.extensions[this.name].variants||[],a=Wh(n.map(r=>r.name));for(const r of t.scenes)r.traverse(l=>{const h=l;if(!h.material)return;const d=e.associations.get(h);if(d==null||d.meshes==null||d.primitives==null)return;const m=i.meshes[d.meshes].primitives[d.primitives].extensions;!m||!m[this.name]||(h.userData.variantMaterials=qh(m[this.name]))});return t.userData.variants=a,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo,da;Et.DEFAULT_ANISOTROPY=4;const Kh=(o,t,e=()=>{})=>{const i=s=>{const n=s.loaded/s.total;e(Math.max(0,Math.min(1,isFinite(n)?n:1)))};return new Promise((s,n)=>{t.load(o,s,i,n)})},Yh=o=>new Promise((t,e)=>{const i=document.createElement("script");document.body.appendChild(i),i.onload=t,i.onerror=e,i.async=!0,i.src=o}),ut=new Map,bs=new Map;let pa;const ma=new El;let fa;const ws=new _l;let Ss,xs;const Nt=Symbol("loader"),xt=Symbol("evictionPolicy"),ga=Symbol("GLTFInstance");class k extends es{constructor(t){super(),this[da]=new Rl().register(e=>new Xh(e)),this[ga]=t,this[Nt].setDRACOLoader(ma),this[Nt].setKTX2Loader(ws)}static setDRACODecoderLocation(t){pa=t,ma.setDecoderPath(t)}static getDRACODecoderLocation(){return pa}static setKTX2TranscoderLocation(t){fa=t,ws.setTranscoderPath(t)}static getKTX2TranscoderLocation(){return fa}static setMeshoptDecoderLocation(t){Ss!==t&&(Ss=t,xs=Yh(t).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Ss}static initializeKTX2Loader(t){ws.detectSupport(t)}static get cache(){return ut}static clearCache(){ut.forEach((t,e)=>{this.delete(e)}),this[xt].reset()}static has(t){return ut.has(t)}static async delete(t){if(!this.has(t))return;const e=ut.get(t);bs.delete(t),ut.delete(t),(await e).dispose()}static hasFinishedLoading(t){return!!bs.get(t)}get[(jo=xt,da=Nt,xt)](){return this.constructor[xt]}async preload(t,e,i=()=>{}){if(this[Nt].setWithCredentials(k.withCredentials),this.dispatchEvent({type:"preload",element:e,src:t}),!ut.has(t)){xs!=null&&this[Nt].setMeshoptDecoder(await xs);const s=Kh(t,this[Nt],r=>{i(r*.8)}),n=this[ga],a=s.then(r=>n.prepare(r)).then(r=>(i(.9),new n(r))).catch(r=>(console.error(r),new n));ut.set(t,a)}await ut.get(t),bs.set(t,!0),i&&i(1)}async load(t,e,i=()=>{}){await this.preload(t,e,i);const n=await(await ut.get(t)).clone();return this[xt].retain(t),n.dispose=()=>{this[xt].release(t)},n}}k[jo]=new Gh(k);/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=o=>o.material!==void 0&&o.userData&&o.userData.variantMaterials&&!!Array.from(o.userData.variantMaterials.values()).filter(t=>ki(t.material)),ki=o=>o&&o.isMaterial&&!Array.isArray(o);class Zh{constructor(t){this.writer=t,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(t){const e=new Set;for(const i of t)i.traverse(s=>{if(!va(s))return;const n=s.userData.variantMaterials,a=s.userData.variantData;for(const[r,l]of a){const h=n.get(l.index);h&&ki(h.material)&&e.add(r)}});e.forEach(i=>this.variantNames.push(i))}writeMesh(t,e){if(!va(t))return;const i=t.userData,s=i.variantMaterials,n=i.variantData,a=new Map,r=new Map,l=Array.from(n.values()).sort((c,u)=>c.index-u.index);for(const[c,u]of l.entries())r.set(u.index,c);for(const c of n.values()){const u=s.get(c.index);if(!u||!ki(u.material))continue;const p=this.writer.processMaterial(u.material);a.has(p)||a.set(p,{material:p,variants:[]}),a.get(p).variants.push(r.get(c.index))}const h=Array.from(a.values()).map(c=>c.variants.sort((u,p)=>u-p)&&c).sort((c,u)=>c.material-u.material);if(h.length===0)return;const d=ki(i.originalMaterial)?this.writer.processMaterial(i.originalMaterial):-1;for(const c of e.primitives)d>=0&&(c.material=d),c.extensions=c.extensions||{},c.extensions[this.name]={mappings:h}}afterParse(){if(this.variantNames.length===0)return;const t=this.writer.json;t.extensions=t.extensions||{};const e=this.variantNames.map(i=>({name:i}));t.extensions[this.name]={variants:e},this.writer.extensionsUsed[this.name]=!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=1e4,Jh=.001,Wo=50;class W{constructor(t=Wo){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(t)}setDecayTime(t){this.naturalFrequency=1/Math.max(Jh,t)}update(t,e,i,s){const n=2e-4*this.naturalFrequency;if(t==null||s===0||t===e&&this.velocity===0)return e;if(i<0)return t;const a=t-e,r=this.velocity+this.naturalFrequency*a,l=a+i*r,h=Math.exp(-this.naturalFrequency*i),d=(r-this.naturalFrequency*l)*h,c=-this.naturalFrequency*(d+r*h);return Math.abs(d)<n*Math.abs(s)&&c*a>=0?(this.velocity=0,e):(this.velocity=d,e+l*h)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=.2,ya=.03,Qh=.75,qo=12,tc=Math.PI/(2*qo),ba=new yt,ui=(o,t,e)=>{let i=t>0?e>0?0:-Math.PI/2:e>0?Math.PI/2:Math.PI;for(let s=0;s<=qo;++s)o.push(t+(me-ya)*Math.cos(i),e+(me-ya)*Math.sin(i),0,t+me*Math.cos(i),e+me*Math.sin(i),0),i+=tc};class wa extends q{constructor(t,e){const i=new Cl,s=[],n=[],{size:a,boundingBox:r}=t,l=a.x/2,h=(e==="back"?a.y:a.z)/2;ui(n,l,h),ui(n,-l,h),ui(n,-l,-h),ui(n,l,-h);const d=n.length/3;for(let p=0;p<d-2;p+=2)s.push(p,p+1,p+3,p,p+3,p+2);const c=d-2;s.push(c,c+1,1,c,1,0),i.setAttribute("position",new Ll(n,3)),i.setIndex(s),super(i),this.side=e;const u=this.material;switch(u.side=Gi,u.transparent=!0,u.opacity=0,this.goalOpacity=0,this.opacityDamper=new W,this.hitPlane=new q(new ti(2*(l+me),2*(h+me))),this.hitPlane.visible=!1,this.hitPlane.material.side=Gi,this.add(this.hitPlane),r.getCenter(this.position),e){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=r.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=r.min.z,this.position.z=this.shadowHeight}t.target.add(this),this.offsetHeight=0}getHit(t,e,i){ba.set(e,-i),this.hitPlane.visible=!0;const s=t.positionAndNormalFromPoint(ba,this.hitPlane);return this.hitPlane.visible=!1,s==null?null:s.position}getExpandedHit(t,e,i){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const s=this.getHit(t,e,i);return this.hitPlane.scale.set(1,1,1),s}set offsetHeight(t){t-=.001,this.side==="back"?this.position.z=this.shadowHeight+t:this.position.y=this.shadowHeight+t}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?Qh:0}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0}dispose(){var t;const{geometry:e,material:i}=this.hitPlane;e.dispose(),i.dispose(),this.geometry.dispose(),this.material.dispose(),(t=this.parent)===null||t===void 0||t.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=(o,t)=>({type:"number",number:o,unit:t}),vt=(()=>{const o={};return e=>{const i=e;if(i in o)return o[i];const s=[];let n=0;for(;e;){if(++n>1e3){e="";break}const a=Xo(e),r=a.nodes[0];if(r==null||r.terms.length===0)break;s.push(r),e=a.remainingInput}return o[i]=s}})(),Xo=(()=>{const o=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,e=/^[\),]/,i="(",s="#";return n=>{const a=[];for(;n.length&&(n=n.trim(),!e.test(n));)if(n[0]===i){const{nodes:r,remainingInput:l}=Sa(n);n=l,a.push({type:"function",name:{type:"ident",value:"calc"},arguments:r})}else if(o.test(n)){const r=ec(n),l=r.nodes[0];if(n=r.remainingInput,n[0]===i){const{nodes:h,remainingInput:d}=Sa(n);a.push({type:"function",name:l,arguments:h}),n=d}else a.push(l)}else if(t.test(n))a.push({type:"operator",value:n[0]}),n=n.slice(1);else{const{nodes:r,remainingInput:l}=n[0]===s?sc(n):ic(n);if(r.length===0)break;a.push(r[0]),n=l}return{nodes:[{type:"expression",terms:a}],remainingInput:n}}})(),ec=(()=>{const o=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{const e=t.match(o),i=e==null?t:t.substr(0,e.index),s=e==null?"":t.substr(e.index);return{nodes:[{type:"ident",value:i}],remainingInput:s}}})(),ic=(()=>{const o=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,e=/^(m|mm|cm|rad|deg|[%])$/;return i=>{const s=i.match(o),n=s==null?"0":s[0];i=n==null?i:i.slice(n.length);const a=i.match(t);let r=a!=null&&a[0]!==""?a[0]:null;const l=a==null?i:i.slice(r.length);return r!=null&&!e.test(r)&&(r=null),{nodes:[{type:"number",number:parseFloat(n)||0,unit:r}],remainingInput:l}}})(),sc=(()=>{const o=/^[a-f0-9]*/i;return t=>{t=t.slice(1).trim();const e=t.match(o);return{nodes:e==null?[]:[{type:"hex",value:e[0]}],remainingInput:e==null?t:t.slice(e[0].length)}}})(),Sa=o=>{const t=[];for(o=o.slice(1).trim();o.length;){const e=Xo(o);if(t.push(e.nodes[0]),o=e.remainingInput.trim(),o[0]===",")o=o.slice(1).trim();else if(o[0]===")"){o=o.slice(1);break}}return{nodes:t,remainingInput:o}},xa=Symbol("visitedTypes");class nc{constructor(t){this[xa]=t}walk(t,e){const i=t.slice();for(;i.length;){const s=i.shift();switch(this[xa].indexOf(s.type)>-1&&e(s),s.type){case"expression":i.unshift(...s.terms);break;case"function":i.unshift(s.name,...s.arguments);break}}}}const Lt=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=(o,t=0)=>{let{number:e,unit:i}=o;if(!isFinite(e))e=t,i="rad";else if(o.unit==="rad"||o.unit==null)return o;return{type:"number",number:(i==="deg"&&e!=null?e:0)*Math.PI/180,unit:"rad"}},Ma=(o,t=0)=>{let{number:e,unit:i}=o;if(!isFinite(e))e=t,i="m";else if(o.unit==="m")return o;let s;switch(i){default:s=1;break;case"cm":s=1/100;break;case"mm":s=1/1e3;break}return{type:"number",number:s*e,unit:"m"}},nt=(()=>{const o=e=>e,t={rad:o,deg:rs,m:o,mm:Ma,cm:Ma};return(e,i=Lt)=>{isFinite(e.number)||(e.number=i.number,e.unit=i.unit);const{unit:s}=e;if(s==null)return e;const n=t[s];return n==null?i:n(e)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ko,Aa,Ta;const Ae=Symbol("evaluate"),Ni=Symbol("lastValue");class ${constructor(){this[Ko]=null}static evaluatableFor(t,e=Lt){if(t instanceof $)return t;if(t.type==="number")return t.unit==="%"?new ac(t,e):t;switch(t.name.value){case"calc":return new lc(t,e);case"env":return new rc(t)}return Lt}static evaluate(t){return t instanceof $?t.evaluate():t}static isConstant(t){return t instanceof $?t.isConstant:!0}static applyIntrinsics(t,e){const{basis:i,keywords:s}=e,{auto:n}=s;return i.map((a,r)=>{const l=n[r]==null?a:n[r];let h=t[r]?t[r]:l;if(h.type==="ident"){const d=h.value;d in s&&(h=s[d][r])}return(h==null||h.type==="ident")&&(h=l),h.unit==="%"?z(h.number/100*a.number,a.unit):(h=nt(h,a),h.unit!==a.unit?a:h)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[Ni]==null)&&(this[Ni]=this[Ae]()),this[Ni]}}Ko=Ni;const Ea=Symbol("percentage"),Ms=Symbol("basis");class ac extends ${constructor(t,e){super(),this[Ea]=t,this[Ms]=e}get isConstant(){return!0}[Ae](){return z(this[Ea].number/100*this[Ms].number,this[Ms].unit)}}const di=Symbol("identNode");class rc extends ${constructor(t){super(),this[Aa]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;e!=null&&e.type==="ident"&&(this[di]=e)}get isConstant(){return!1}[(Aa=di,Ae)](){if(this[di]!=null)switch(this[di].value){case"window-scroll-y":const t=window.pageYOffset,e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:t/(e-window.innerHeight)||0,unit:null}}return Lt}}const oc=/[\*\/]/,Zt=Symbol("evaluator");class lc extends ${constructor(t,e=Lt){if(super(),this[Ta]=null,t.arguments.length!==1)return;const i=t.arguments[0].terms.slice(),s=[];for(;i.length;){const n=i.shift();if(s.length>0){const a=s[s.length-1];if(a.type==="operator"&&oc.test(a.value)){const r=s.pop(),l=s.pop();if(l==null)return;s.push(new Ra(r,$.evaluatableFor(l,e),$.evaluatableFor(n,e)));continue}}s.push(n.type==="operator"?n:$.evaluatableFor(n,e))}for(;s.length>2;){const[n,a,r]=s.splice(0,3);if(a.type!=="operator")return;s.unshift(new Ra(a,$.evaluatableFor(n,e),$.evaluatableFor(r,e)))}s.length===1&&(this[Zt]=s[0])}get isConstant(){return this[Zt]==null||$.isConstant(this[Zt])}[(Ta=Zt,Ae)](){return this[Zt]!=null?$.evaluate(this[Zt]):Lt}}const _a=Symbol("operator"),As=Symbol("left"),Ts=Symbol("right");class Ra extends ${constructor(t,e,i){super(),this[_a]=t,this[As]=e,this[Ts]=i}get isConstant(){return $.isConstant(this[As])&&$.isConstant(this[Ts])}[Ae](){const t=nt($.evaluate(this[As])),e=nt($.evaluate(this[Ts])),{number:i,unit:s}=t,{number:n,unit:a}=e;if(a!=null&&s!=null&&a!=s)return Lt;const r=s||a;let l;switch(this[_a].value){case"+":l=i+n;break;case"-":l=i-n;break;case"/":l=i/n;break;case"*":l=i*n;break;default:return Lt}return{type:"number",number:l,unit:r}}}const Es=Symbol("evaluatables"),Ca=Symbol("intrinsics");class Yo extends ${constructor(t,e){super(),this[Ca]=e;const i=t[0],s=i!=null?i.terms:[];this[Es]=e.basis.map((n,a)=>{const r=s[a];return r==null?{type:"ident",value:"auto"}:r.type==="ident"?r:$.evaluatableFor(r,n)})}get isConstant(){for(const t of this[Es])if(!$.isConstant(t))return!1;return!0}[Ae](){const t=this[Es].map(e=>$.evaluate(e));return $.applyIntrinsics(t,this[Ca]).map(e=>e.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zo,Jo,Qo,tl;const Jt=Symbol("instances"),La=Symbol("activateListener"),Ia=Symbol("deactivateListener"),_s=Symbol("notifyInstances"),$a=Symbol("notify"),Da=Symbol("callback");class tt{constructor(t){this[Da]=t}static[_s](){for(const t of tt[Jt])t[$a]()}static[(Zo=Jt,La)](){window.addEventListener("scroll",this[_s],{passive:!0})}static[Ia](){window.removeEventListener("scroll",this[_s])}observe(){tt[Jt].size===0&&tt[La](),tt[Jt].add(this)}disconnect(){tt[Jt].delete(this),tt[Jt].size===0&&tt[Ia]()}[$a](){this[Da]()}}tt[Zo]=new Set;const Oa=Symbol("computeStyleCallback"),el=Symbol("astWalker"),ze=Symbol("dependencies"),il=Symbol("onScroll");class hc{constructor(t){this[Jo]={},this[Qo]=new nc(["function"]),this[tl]=()=>{this[Oa]({relatedState:"window-scroll"})},this[Oa]=t}observeEffectsFor(t){const e={},i=this[ze];this[el].walk(t,s=>{const{name:n}=s,r=s.arguments[0].terms[0];if(!(n.value!=="env"||r==null||r.type!=="ident"))switch(r.value){case"window-scroll-y":if(e["window-scroll"]==null){const l="window-scroll"in i?i["window-scroll"]:new tt(this[il]);l.observe(),delete i["window-scroll"],e["window-scroll"]=l}break}});for(const s in i)i[s].disconnect();this[ze]=e}dispose(){for(const t in this[ze])this[ze][t].disconnect()}}Jo=ze,Qo=el,tl=il;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=o=>{const t=o.observeEffects||!1,e=o.intrinsics instanceof Function?o.intrinsics:()=>o.intrinsics;return(i,s)=>{const n=i.updated,a=i.connectedCallback,r=i.disconnectedCallback,l=Symbol(`${s}StyleEffector`),h=Symbol(`${s}StyleEvaluator`),d=Symbol(`${s}UpdateEvaluator`),c=Symbol(`${s}EvaluateAndSync`);Object.defineProperties(i,{[l]:{value:null,writable:!0},[h]:{value:null,writable:!0},[d]:{value:function(){const u=vt(this[s]);this[h]=new Yo(u,e(this)),this[l]==null&&t&&(this[l]=new hc(()=>this[c]())),this[l]!=null&&this[l].observeEffectsFor(u)}},[c]:{value:function(){if(this[h]==null)return;const u=this[h].evaluate();this[o.updateHandler](u)}},updated:{value:function(u){u.has(s)&&(this[d](),this[c]()),n.call(this,u)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(s,this[s])}},disconnectedCallback:{value:function(){r.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=o=>o<.5?2*o*o:-1+(4-2*o)*o,cc=(o,t,e=sl)=>i=>o+(t-o)*e(i),uc=(o,t)=>{const e=s=>n=>s+=n,i=t.map(e(0));return s=>{s=et(s,0,1),s*=i[i.length-1];const n=i.findIndex(l=>l>=s),a=n<1?0:i[n-1],r=i[n];return o[n]((s-a)/(r-a))}},fe=o=>{const t=[],e=[];let i=o.initialValue;for(let s=0;s<o.keyframes.length;++s){const n=o.keyframes[s],{value:a,frames:r}=n,l=n.ease||sl,h=cc(i,a,l);t.push(h),e.push(r),i=a}return uc(t,e)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};const dc=5e3,pc=fe({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),mc=fe({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),fc=30,gc=12,nl="0deg 75deg 105%",vc="auto auto auto",yc="auto",bc=2.2,wc=["front","right","back","left"],Sc=["upper-","","lower-"],xc=3e3,Mc=". Use mouse, touch or arrow keys to move.",pi={AUTO:"auto",NONE:"none"},Rs={BASIC:"basic",WIGGLE:"wiggle"},Ac={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},Pa=()=>({basis:[rs(z(fc,"deg"))],keywords:{auto:[null]}}),Tc=()=>({basis:[rs(z(gc,"deg"))],keywords:{auto:[null]}}),al=(()=>{const o=vt(nl)[0].terms,t=nt(o[0]),e=nt(o[1]);return i=>{const s=i[g].idealCameraDistance();return{basis:[t,e,z(s,"m")],keywords:{auto:[null,null,z(105,"%")]}}}})(),Ec=o=>{const t=bc*o[g].boundingSphere.radius;return{basis:[z(-1/0,"rad"),z(Math.PI/8,"rad"),z(t,"m")],keywords:{auto:[null,null,null]}}},_c=o=>{const t=al(o),i=new Yo([],t).evaluate()[2];return{basis:[z(1/0,"rad"),z(Math.PI-Math.PI/8,"rad"),z(i,"m")],keywords:{auto:[null,null,null]}}},Rc=o=>{const t=o[g].boundingBox.getCenter(new _);return{basis:[z(t.x,"m"),z(t.y,"m"),z(t.z,"m")],keywords:{auto:[null,null,null]}}},rl=Math.PI/2,Cc=Math.PI/3,Lc=rl/2,Ic=2*Math.PI,L=Symbol("controls"),Vi=Symbol("panElement"),Cs=Symbol("promptElement"),mi=Symbol("promptAnimatedContainer"),Ls=Symbol("fingerAnimatedContainers"),fi=Symbol("deferInteractionPrompt"),Fa=Symbol("updateAria"),dt=Symbol("a11y"),ka=Symbol("updateA11y"),Na=Symbol("updateCameraForRadius"),Qt=Symbol("cancelPrompts"),Is=Symbol("onChange"),_e=Symbol("onPointerChange"),Pt=Symbol("waitingToPromptUser"),gi=Symbol("userHasInteracted"),te=Symbol("promptElementVisibleTime"),Re=Symbol("lastPromptOffset"),vi=Symbol("cancellationSource"),$s=Symbol("lastSpherical"),Ce=Symbol("jumpCamera"),Ds=Symbol("initialized"),Le=Symbol("maintainThetaPhi"),Va=Symbol("syncCameraOrbit"),Ua=Symbol("syncFieldOfView"),Ba=Symbol("syncCameraTarget"),za=Symbol("syncMinCameraOrbit"),Ha=Symbol("syncMaxCameraOrbit"),ja=Symbol("syncMinFieldOfView"),Ga=Symbol("syncMaxFieldOfView"),$c=o=>{var t,e,i,s,n,a,r,l,h,d,c,u,p,m,y,v,M,F;class A extends o{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=nl,this.cameraTarget=vc,this.fieldOfView=yc,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=xc,this.interactionPrompt=pi.AUTO,this.interactionPromptStyle=Rs.WIGGLE,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=Ac.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=Wo,this.a11y=null,this[t]=this.shadowRoot.querySelector(".interaction-prompt"),this[e]=this.shadowRoot.querySelector("#prompt"),this[i]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[s]=this.shadowRoot.querySelector(".pan-target"),this[n]=0,this[a]=1/0,this[r]=!1,this[l]=!1,this[h]=D.AUTOMATIC,this[d]=new Fc(this[g].camera,this[Z],this[g]),this[c]=new Oi,this[u]=!1,this[p]=!1,this[m]=!1,this[y]={},this[v]=()=>{const f=this[L].changeSource;this[vi]=f,f===D.USER_INTERACTION&&(this[gi]=!0,this[fi]())},this[M]=()=>{this[Fa](),this[B]();const f=this[L].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:f}}))},this[F]=f=>{this[ji].classList.toggle("pointer-tumbling",f.type==="pointer-change-start")}}get inputSensitivity(){return this[L].inputSensitivity}set inputSensitivity(f){this[L].inputSensitivity=f}getCameraOrbit(){const{theta:f,phi:w,radius:E}=this[$s];return{theta:f,phi:w,radius:E,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return Tt(this[C].isPresenting?this[C].arRenderer.target:this[g].getTarget())}getFieldOfView(){return this[L].getFieldOfView()}getMinimumFieldOfView(){return this[L].options.minimumFieldOfView}getMaximumFieldOfView(){return this[L].options.maximumFieldOfView}getIdealAspect(){return this[g].idealAspect}jumpCameraToGoal(){this[Ce]=!0,this.requestUpdate(Ce,!1)}resetInteractionPrompt(){this[Re]=0,this[te]=1/0,this[gi]=!1,this[Pt]=this.interactionPrompt===pi.AUTO&&this.cameraControls}zoom(f){const w=new WheelEvent("wheel",{deltaY:-30*f});this[Z].dispatchEvent(w)}connectedCallback(){super.connectedCallback(),this[L].addEventListener("user-interaction",this[Qt]),this[L].addEventListener("pointer-change-start",this[_e]),this[L].addEventListener("pointer-change-end",this[_e])}disconnectedCallback(){super.disconnectedCallback(),this[L].removeEventListener("user-interaction",this[Qt]),this[L].removeEventListener("pointer-change-start",this[_e]),this[L].removeEventListener("pointer-change-end",this[_e])}updated(f){super.updated(f);const w=this[L],E=this[g];if(f.has("cameraControls")&&(this.cameraControls?(w.enableInteraction(),this.interactionPrompt===pi.AUTO&&(this[Pt]=!0)):(w.disableInteraction(),this[fi]()),this[Z].setAttribute("aria-label",this[ve])),f.has("disableZoom")&&(w.disableZoom=this.disableZoom),f.has("disablePan")&&(w.enablePan=!this.disablePan),f.has("disableTap")&&(w.enableTap=!this.disableTap),(f.has("interactionPrompt")||f.has("cameraControls")||f.has("src"))&&(this.interactionPrompt===pi.AUTO&&this.cameraControls&&!this[gi]?this[Pt]=!0:this[fi]()),f.has("interactionPromptStyle")&&(this[mi].style.opacity=this.interactionPromptStyle==Rs.BASIC?"1":"0"),f.has("touchAction")){const O=this.touchAction;w.applyOptions({touchAction:O}),w.updateTouchActionStyle()}f.has("orbitSensitivity")&&(w.orbitSensitivity=this.orbitSensitivity),f.has("zoomSensitivity")&&(w.zoomSensitivity=this.zoomSensitivity),f.has("panSensitivity")&&(w.panSensitivity=this.panSensitivity),f.has("interpolationDecay")&&(w.setDamperDecayTime(this.interpolationDecay),E.setTargetDamperDecayTime(this.interpolationDecay)),f.has("a11y")&&this[ka](),this[Ce]===!0&&Promise.resolve().then(()=>{w.jumpToGoal(),E.jumpToGoal(),this[Is](),this[Ce]=!1})}async updateFraming(){const f=this[g],w=f.adjustedFoV(f.framedFoVDeg);await f.updateFraming();const E=f.adjustedFoV(f.framedFoVDeg),O=this[L].getFieldOfView()/w;this[L].setFieldOfView(E*O),this[Le]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(f,w,E){const O=this[Z],K=this[Ls];if(K[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const G=new Array;G.push({x:fe(w.x),y:fe(w.y)});const bt=[{x:G[0].x(0),y:G[0].y(0)}];E!=null&&(G.push({x:fe(E.x),y:fe(E.y)}),bt.push({x:G[1].x(0),y:G[1].y(0)}));let ot=performance.now();const{width:$t,height:ri}=this[g],oi=this.getBoundingClientRect(),Xt=lt=>{for(const[Kt,ht]of bt.entries()){const{style:Yt}=K[Kt];Yt.transform=`translateX(${$t*ht.x}px) translateY(${ri*ht.y}px)`,lt==="pointerdown"?Yt.opacity="1":lt==="pointerup"&&(Yt.opacity="0");const Al={pointerId:Kt-5678,pointerType:"touch",target:O,clientX:$t*ht.x+oi.x,clientY:ri*ht.y+oi.y,altKey:!0};O.dispatchEvent(new PointerEvent(lt,Al))}},Hn=()=>{const lt=this[vi];if(lt!==D.AUTOMATIC||!O.isConnected){for(const ht of this[Ls])ht.style.opacity="0";Xt("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:lt}})),document.removeEventListener("visibilitychange",ls);return}const Kt=Math.min(1,(performance.now()-ot)/f);for(const[ht,Yt]of bt.entries())Yt.x=G[ht].x(Kt),Yt.y=G[ht].y(Kt);Xt("pointermove"),Kt<1?requestAnimationFrame(Hn):(Xt("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:D.AUTOMATIC}})),document.removeEventListener("visibilitychange",ls))},ls=()=>{let lt=0;document.visibilityState==="hidden"?lt=performance.now()-ot:ot=performance.now()-lt};document.addEventListener("visibilitychange",ls),Xt("pointerdown"),this[vi]=D.AUTOMATIC,requestAnimationFrame(Hn)}[(t=Cs,e=mi,i=Ls,s=Vi,n=Re,a=te,r=gi,l=Pt,h=vi,d=L,c=$s,u=Ce,p=Ds,m=Le,y=dt,Ua)](f){const w=this[L],E=this[g];E.framedFoVDeg=f[0]*180/Math.PI,w.changeSource=D.NONE,w.setFieldOfView(E.adjustedFoV(E.framedFoVDeg)),this[Qt]()}[Va](f){const w=this[L];if(this[Le]){const{theta:E,phi:O}=this.getCameraOrbit();f[0]=E,f[1]=O,this[Le]=!1}w.changeSource=D.NONE,w.setOrbit(f[0],f[1],f[2]),this[Qt]()}[za](f){this[L].applyOptions({minimumAzimuthalAngle:f[0],minimumPolarAngle:f[1],minimumRadius:f[2]}),this.jumpCameraToGoal()}[Ha](f){this[L].applyOptions({maximumAzimuthalAngle:f[0],maximumPolarAngle:f[1],maximumRadius:f[2]}),this[Na](f[2]),this.jumpCameraToGoal()}[ja](f){this[L].applyOptions({minimumFieldOfView:f[0]*180/Math.PI}),this.jumpCameraToGoal()}[Ga](f){const w=this[g].adjustedFoV(f[0]*180/Math.PI);this[L].applyOptions({maximumFieldOfView:w}),this.jumpCameraToGoal()}[Ba](f){const[w,E,O]=f;this[C].arRenderer.isPresenting||this[g].setTarget(w,E,O),this[L].changeSource=D.NONE,this[C].arRenderer.updateTarget(),this[Qt]()}[at](f,w){if(super[at](f,w),this[C].isPresenting||!this[qt]())return;const E=this[L],O=this[g],K=performance.now();if(this[Pt]&&this.loaded&&K>this[Ge]+this.interactionPromptThreshold&&(this[Pt]=!1,this[te]=K,this[Cs].classList.add("visible")),isFinite(this[te])&&this.interactionPromptStyle===Rs.WIGGLE){const ot=(K-this[te])/dc%1,$t=pc(ot),ri=mc(ot);if(this[mi].style.opacity=`${ri}`,$t!==this[Re]){const oi=$t*O.width*.05,Xt=($t-this[Re])*Math.PI/16;this[mi].style.transform=`translateX(${oi}px)`,E.changeSource=D.AUTOMATIC,E.adjustOrbit(Xt,0,0),this[Re]=$t}}const G=E.update(f,w),bt=O.updateTarget(w);(G||bt)&&this[Is]()}[fi](){this[Pt]=!1,this[Cs].classList.remove("visible"),this[te]=1/0}[Na](f){const w=Math.max(this[g].farRadius(),f),E=0,O=Math.abs(2*w);this[L].updateNearFar(E,O)}[Fa](){const{theta:f,phi:w}=this[L].getCameraSpherical(this[$s]),E=(4+Math.floor((f%Ic+Lc)/rl))%4,O=Math.floor(w/Cc),K=wc[E],bt=`${Sc[O]}${K}`,ot=bt;ot in this[dt]?this[ts](this[dt][ot]):this[ts](`View from stage ${bt}`)}get[ve](){let f=Mc;return"interaction-prompt"in this[dt]&&(f=`. ${this[dt]["interaction-prompt"]}`),super[ve].replace(/\.$/,"")+(this.cameraControls?f:"")}async[Qe](f){const w=this[L],E=this[g],O=E.adjustedFoV(E.framedFoVDeg);super[Qe](f);const K=E.adjustedFoV(E.framedFoVDeg)/O,G=w.getFieldOfView()*(isFinite(K)?K:1);w.updateAspect(this[g].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[L].setFieldOfView(G),this.jumpCameraToGoal()}[It](){super[It](),this[Ds]?this[Le]=!0:this[Ds]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(v=Qt,M=Is,F=_e,ka)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[dt]=JSON.parse(this.a11y)}catch(f){console.warn("Error parsing a11y JSON:",f)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[dt]={};else typeof this.a11y=="object"&&this.a11y!=null?this[dt]=Object.assign({},this.a11y):this[dt]={};this[Z].setAttribute("aria-label",this[ve])}}return P([S({type:Boolean,attribute:"camera-controls"})],A.prototype,"cameraControls",void 0),P([St({intrinsics:al,observeEffects:!0,updateHandler:Va}),S({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],A.prototype,"cameraOrbit",void 0),P([St({intrinsics:Rc,observeEffects:!0,updateHandler:Ba}),S({type:String,attribute:"camera-target",hasChanged:()=>!0})],A.prototype,"cameraTarget",void 0),P([St({intrinsics:Pa,observeEffects:!0,updateHandler:Ua}),S({type:String,attribute:"field-of-view",hasChanged:()=>!0})],A.prototype,"fieldOfView",void 0),P([St({intrinsics:Ec,updateHandler:za}),S({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],A.prototype,"minCameraOrbit",void 0),P([St({intrinsics:_c,updateHandler:Ha}),S({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],A.prototype,"maxCameraOrbit",void 0),P([St({intrinsics:Tc,updateHandler:ja}),S({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],A.prototype,"minFieldOfView",void 0),P([St({intrinsics:Pa,updateHandler:Ga}),S({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],A.prototype,"maxFieldOfView",void 0),P([S({type:Number,attribute:"interaction-prompt-threshold"})],A.prototype,"interactionPromptThreshold",void 0),P([S({type:String,attribute:"interaction-prompt"})],A.prototype,"interactionPrompt",void 0),P([S({type:String,attribute:"interaction-prompt-style"})],A.prototype,"interactionPromptStyle",void 0),P([S({type:Number,attribute:"orbit-sensitivity"})],A.prototype,"orbitSensitivity",void 0),P([S({type:Number,attribute:"zoom-sensitivity"})],A.prototype,"zoomSensitivity",void 0),P([S({type:Number,attribute:"pan-sensitivity"})],A.prototype,"panSensitivity",void 0),P([S({type:String,attribute:"touch-action"})],A.prototype,"touchAction",void 0),P([S({type:Boolean,attribute:"disable-zoom"})],A.prototype,"disableZoom",void 0),P([S({type:Boolean,attribute:"disable-pan"})],A.prototype,"disablePan",void 0),P([S({type:Boolean,attribute:"disable-tap"})],A.prototype,"disableTap",void 0),P([S({type:Number,attribute:"interpolation-decay"})],A.prototype,"interpolationDecay",void 0),P([S()],A.prototype,"a11y",void 0),A};/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=.018,Wa=2,Oc=300,Pc=new yt,qa=new _,Xa=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),yi=Math.PI/8,bi=.04,wi=10,D={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class Fc extends es{constructor(t,e,i){super(),this.camera=t,this.element=e,this.scene=i,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.inputSensitivity=1,this.changeSource=D.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new Nn,this.panPerPixel=0,this.spherical=new Oi,this.goalSpherical=new Oi,this.thetaDamper=new W,this.phiDamper=new W,this.radiusDamper=new W,this.logFov=Math.log(Xa.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new W,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=s=>{if(this.enablePan)s.preventDefault();else for(const n of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:n.id})))},this.touchModeZoom=(s,n)=>{if(!this._disableZoom){const a=this.twoTouchDistance(this.pointers[0],this.pointers[1]),r=bi*this.zoomSensitivity*(this.lastSeparation-a)*50/this.scene.height;this.lastSeparation=a,this.userAdjustOrbit(0,0,r)}this.panPerPixel>0&&this.movePan(s,n)},this.disableScroll=s=>{s.preventDefault()},this.touchModeRotate=(s,n)=>{const{touchAction:a}=this._options;if(!this.touchDecided&&a!=="none"){this.touchDecided=!0;const r=Math.abs(s),l=Math.abs(n);if(this.changeSource===D.USER_INTERACTION&&(a==="pan-y"&&l>r||a==="pan-x"&&r>l)){this.touchMode=null;return}else this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(s,n)},this.onPointerDown=s=>{if(this.pointers.length>2)return;const{element:n}=this;this.pointers.length===0&&(n.addEventListener("pointermove",this.onPointerMove),n.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=s.clientX,this.startPointerPosition.clientY=s.clientY,this.startTime=performance.now());try{n.setPointerCapture(s.pointerId)}catch{}this.pointers.push({clientX:s.clientX,clientY:s.clientY,id:s.pointerId}),this.isUserPointing=!1,s.pointerType==="touch"?(this.changeSource=s.altKey?D.AUTOMATIC:D.USER_INTERACTION,this.onTouchChange(s)):(this.changeSource=D.USER_INTERACTION,this.onMouseDown(s)),this.changeSource===D.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=s=>{const n=this.pointers.find(h=>h.id===s.pointerId);if(n==null)return;if(s.pointerType==="mouse"&&s.buttons===0){this.onPointerUp(s);return}const a=this.pointers.length,r=(s.clientX-n.clientX)/a,l=(s.clientY-n.clientY)/a;r===0&&l===0||(n.clientX=s.clientX,n.clientY=s.clientY,s.pointerType==="touch"?(this.changeSource=s.altKey?D.AUTOMATIC:D.USER_INTERACTION,this.touchMode!==null&&this.touchMode(r,l)):(this.changeSource=D.USER_INTERACTION,this.panPerPixel>0?this.movePan(r,l):this.handleSinglePointerMove(r,l)))},this.onPointerUp=s=>{const{element:n}=this,a=this.pointers.findIndex(r=>r.id===s.pointerId);a!==-1&&this.pointers.splice(a,1),this.panPerPixel>0&&!s.altKey&&this.resetRadius(),this.pointers.length===0?(n.removeEventListener("pointermove",this.onPointerMove),n.removeEventListener("pointerup",this.onPointerUp),n.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(s)):this.touchMode!==null&&this.onTouchChange(s),this.scene.element[Vi].style.opacity=0,n.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=s=>{this.changeSource=D.USER_INTERACTION;const n=s.deltaY*(s.deltaMode==1?18:1)*bi*this.zoomSensitivity/30;this.userAdjustOrbit(0,0,n),s.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=s=>{const{changeSource:n}=this;this.changeSource=D.USER_INTERACTION,(s.shiftKey&&this.enablePan?this.panKeyCodeHandler(s):this.orbitZoomKeyCodeHandler(s))?(s.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=n},this._options=Object.assign({},Xa),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:t}=this;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchmove",()=>{},{passive:!1}),t.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:t}=this;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("contextmenu",this.onContext),t.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(t){this._disableZoom!=t&&(this._disableZoom=t,t===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(t=new Oi){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(t,e){this.camera.far=e===0?2:e,this.camera.near=Math.max(t,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,i=this.goalSpherical.radius){const{minimumAzimuthalAngle:s,maximumAzimuthalAngle:n,minimumPolarAngle:a,maximumPolarAngle:r,minimumRadius:l,maximumRadius:h}=this._options,{theta:d,phi:c,radius:u}=this.goalSpherical,p=et(t,s,n);!isFinite(s)&&!isFinite(n)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-p)+p);const m=et(e,a,r),y=et(i,l,h);return p===d&&m===c&&y===u||!isFinite(p)||!isFinite(m)||!isFinite(y)?!1:(this.goalSpherical.theta=p,this.goalSpherical.phi=m,this.goalSpherical.radius=y,this.goalSpherical.makeSafe(),!0)}setRadius(t){this.goalSpherical.radius=t,this.setOrbit()}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:i}=this._options;t=et(t,e,i),this.goalLogFov=Math.log(t)}setDamperDecayTime(t){this.thetaDamper.setDecayTime(t),this.phiDamper.setDecayTime(t),this.radiusDamper.setDecayTime(t),this.fovDamper.setDecayTime(t)}adjustOrbit(t,e,i){const{theta:s,phi:n,radius:a}=this.goalSpherical,{minimumRadius:r,maximumRadius:l,minimumFieldOfView:h,maximumFieldOfView:d}=this._options,c=this.spherical.theta-s,u=Math.PI-.001,p=s-et(t,-u-c,u-c),m=n-e,y=i===0?0:((i>0?l:r)-a)/(Math.log(i>0?d:h)-this.goalLogFov),v=a+i*(isFinite(y)?y:(l-r)*2);if(this.setOrbit(p,m,v),i!==0){const M=this.goalLogFov+i;this.setFieldOfView(Math.exp(M))}}jumpToGoal(){this.update(0,Go)}update(t,e){if(this.isStationary())return!1;const{maximumPolarAngle:i,maximumRadius:s}=this._options,n=this.spherical.theta-this.goalSpherical.theta;return Math.abs(n)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(n)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,i),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,s),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:t}=this.element;if(this._interactionEnabled){const{touchAction:e}=this._options;this._disableZoom&&e!=="none"?t.touchAction="manipulation":t.touchAction=e}else t.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new go(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(t,e,i){this.adjustOrbit(t*this.orbitSensitivity*this.inputSensitivity,e*this.orbitSensitivity*this.inputSensitivity,i*this.inputSensitivity)}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI);return(e-Math.floor(e))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.scene.height}twoTouchDistance(t,e){const{clientX:i,clientY:s}=t,{clientX:n,clientY:a}=e,r=n-i,l=a-s;return Math.sqrt(r*r+l*l)}handleSinglePointerMove(t,e){const i=this.pixelLengthToSphericalAngle(t),s=this.pixelLengthToSphericalAngle(e);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(i,s,0)}initializePan(){const{theta:t,phi:e}=this.spherical,i=t-this.scene.yaw;this.panPerPixel=Dc*this.panSensitivity/this.scene.height,this.panProjection.set(-Math.cos(i),-Math.cos(e)*Math.sin(i),0,0,Math.sin(e),0,Math.sin(i),-Math.cos(e)*Math.cos(i),0)}movePan(t,e){const{scene:i}=this,s=qa.set(t,e,0).multiplyScalar(this.inputSensitivity),n=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;s.multiplyScalar(n);const a=i.getTarget();a.add(s.applyMatrix3(this.panProjection)),i.boundingSphere.clampPoint(a,a),i.setTarget(a.x,a.y,a.z)}recenter(t){if(performance.now()>this.startTime+Oc||Math.abs(t.clientX-this.startPointerPosition.clientX)>Wa||Math.abs(t.clientY-this.startPointerPosition.clientY)>Wa)return;const{scene:e}=this,i=e.positionAndNormalFromPoint(e.getNDC(t.clientX,t.clientY));if(i==null){const{cameraTarget:s}=e.element;e.element.cameraTarget="",e.element.cameraTarget=s,this.userAdjustOrbit(0,0,1)}else e.target.worldToLocal(i.position),e.setTarget(i.position.x,i.position.y,i.position.z)}resetRadius(){const{scene:t}=this,e=t.positionAndNormalFromPoint(Pc.set(0,0));if(e==null)return;t.target.worldToLocal(e.position);const i=t.getTarget(),{theta:s,phi:n}=this.spherical,a=s-t.yaw,r=qa.set(Math.sin(n)*Math.sin(a),Math.cos(n),Math.sin(n)*Math.cos(a)),l=r.dot(e.position.sub(i));i.add(r.multiplyScalar(l)),t.setTarget(i.x,i.y,i.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(t){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener("touchmove",this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),t.altKey||(this.scene.element[Vi].style.opacity=1))}}onMouseDown(t){this.panPerPixel=0,this.enablePan&&(t.button===2||t.ctrlKey||t.metaKey||t.shiftKey)&&(this.initializePan(),this.scene.element[Vi].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(t){let e=!0;switch(t.key){case"PageUp":this.userAdjustOrbit(0,0,bi*this.zoomSensitivity);break;case"PageDown":this.userAdjustOrbit(0,0,-1*bi*this.zoomSensitivity);break;case"ArrowUp":this.userAdjustOrbit(0,-yi,0);break;case"ArrowDown":this.userAdjustOrbit(0,yi,0);break;case"ArrowLeft":this.userAdjustOrbit(-yi,0,0);break;case"ArrowRight":this.userAdjustOrbit(yi,0,0);break;default:e=!1;break}return e}panKeyCodeHandler(t){this.initializePan();let e=!0;switch(t.key){case"ArrowUp":this.movePan(0,-1*wi);break;case"ArrowDown":this.movePan(0,wi);break;case"ArrowLeft":this.movePan(-1*wi,0);break;case"ArrowRight":this.movePan(wi,0);break;default:e=!1;break}return e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=30,Nc=.8,Ka=1.5,Vc=20,ol=1.3,Uc=1/ol,Bc=.25,zc=10,At={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},Cn={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},Si=new _,Hc=new vo,jc=new _,Gc=new xn(45,1,.1,100);class Wc extends es{constructor(t){super(),this.renderer=t,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new _,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new _,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new _,this.goalYaw=0,this.goalScale=1,this.xDamper=new W,this.yDamper=new W,this.zDamper=new W,this.yawDamper=new W,this.scaleDamper=new W,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new wa(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=e=>{const i=this.transientHitTestSource;if(i==null)return;const s=this.frame.getHitTestResultsForTransientInput(i),n=this.presentedScene,a=this.placementBox;if(s.length===1){this.inputSource=e.inputSource;const{axes:r}=this.inputSource.gamepad,l=a.getHit(this.presentedScene,r[0],r[1]);a.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=r[0]*Ka)}else if(s.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:r}=this.fingerPolar(s);this.firstRatio=r/n.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=t.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){oa();const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(t),this.threeRenderer.xr.cameraAutoUpdate=!1,t}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return oa(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return console.warn("Request to present in WebXR denied:"),console.warn(t),console.warn("Falling back to next ar-mode"),!1}}async present(t,e=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let i=new Promise((h,d)=>{requestAnimationFrame(()=>h())});t.setHotspotsVisibility(!1),t.queueRender(),await i,this._presentedScene=t,this.overlay=t.element.shadowRoot.querySelector("div.default"),e===!0&&(this.xrLight=new Il(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const h=this.presentedScene;h.add(this.xrLight),h.environment=this.xrLight.environment}));const s=await this.resolveARSession();s.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const n=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");n.classList.add("enabled"),n.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=n;const a=await s.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=t.yaw,this.goalYaw=t.yaw,this.goalScale=1,t.setBackground(null),this.oldShadowIntensity=t.shadowIntensity,t.setShadowIntensity(.01),this.oldTarget.copy(t.getTarget()),t.element.addEventListener("load",this.onUpdateScene);const r=Vc*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(r),z:-Math.cos(r)});s.requestHitTestSource({space:a,offsetRay:l}).then(h=>{this.initialHitSource=h}),this.currentSession=s,this.placementBox=new wa(t,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:At.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise(e=>{this.resolveCleanup=e});try{await this.currentSession.end(),await t}catch(e){console.warn("Error while trying to end WebXR AR session"),console.warn(e),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const t=this.presentedScene;if(t!=null){const e=t.getTarget();this.oldTarget.copy(e),this.placeOnWall?e.z=t.boundingBox.min.z:e.y=t.boundingBox.min.y,t.setTarget(e.x,e.y,e.z)}}postSessionCleanup(){const t=this.currentSession;t!=null&&(t.removeEventListener("selectstart",this.onSelectStart),t.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const e=this.presentedScene;if(this._presentedScene=null,e!=null){const{element:a}=e;this.xrLight!=null&&(e.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),e.position.set(0,0,0),e.scale.set(1,1,1),e.setShadowOffset(0);const r=this.turntableRotation;r!=null&&(e.yaw=r);const l=this.oldShadowIntensity;l!=null&&e.setShadowIntensity(l),e.setEnvironmentAndSkybox(a[Ue],a[Be]);const h=this.oldTarget;e.setTarget(h.x,h.y,h.z),e.xrCamera=null,e.element.removeEventListener("load",this.onUpdateScene),e.orientHotspots(0),a.requestUpdate("cameraTarget"),a.requestUpdate("maxCameraOrbit"),a[Qe](a.getBoundingClientRect()),requestAnimationFrame(()=>{e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:D.NONE}}))})}this.renderer.height=0;const i=this.exitWebXRButtonContainer;i!=null&&(i.classList.remove("enabled"),i.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const s=this.transientHitTestSource;s!=null&&(s.cancel(),this.transientHitTestSource=null);const n=this.initialHitSource;n!=null&&(n.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:At.NOT_PRESENTING})}updateView(t){const e=this.presentedScene,i=this.threeRenderer.xr;i.updateCamera(Gc),e.xrCamera=i.getCamera();const{elements:s}=e.getCamera().matrixWorld;if(e.orientHotspots(Math.atan2(s[1],s[5])),this.initialized||(this.placeInitially(),this.initialized=!0),t.requestViewportScale&&t.recommendedViewportScale){const a=t.recommendedViewportScale;t.requestViewportScale(Math.max(a,Bc))}const n=i.getBaseLayer();if(n!=null){const a=n instanceof XRWebGLLayer?n.getViewport(t):i.getBinding().getViewSubImage(n,t).viewport;this.threeRenderer.setViewport(a.x,a.y,a.width,a.height)}}placeInitially(){const t=this.presentedScene,{position:e,element:i}=t,s=t.getCamera(),{width:n,height:a}=this.overlay.getBoundingClientRect();t.setSize(n,a),s.projectionMatrixInverse.copy(s.projectionMatrix).invert();const{theta:r,radius:l}=i.getCameraOrbit(),h=s.getWorldDirection(Si);t.yaw=Math.atan2(-h.x,-h.z)-r,this.goalYaw=t.yaw,e.copy(s.position).add(h.multiplyScalar(l)),this.updateTarget();const d=t.getTarget();e.add(d).sub(this.oldTarget),this.goalPosition.copy(e),t.setHotspotsVisibility(!0);const{session:c}=this.frame;c.addEventListener("selectstart",this.onSelectStart),c.addEventListener("selectend",this.onSelectEnd),c.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(u=>{this.transientHitTestSource=u})}getTouchLocation(){const{axes:t}=this.inputSource.gamepad;let e=this.placementBox.getExpandedHit(this.presentedScene,t[0],t[1]);return e!=null&&(Si.copy(e).sub(this.presentedScene.getCamera().position),Si.length()>zc)?null:e}getHitPoint(t){const e=this.threeRenderer.xr.getReferenceSpace(),i=t.getPose(e);if(i==null)return null;const s=Hc.fromArray(i.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(s.elements[4],s.elements[6])),s.elements[5]>.75!==this.placeOnWall?jc.setFromMatrixPosition(s):null}moveToFloor(t){const e=this.initialHitSource;if(e==null)return;const i=t.getHitTestResults(e);if(i.length==0)return;const s=i[0],n=this.getHitPoint(s);n!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(n):this.goalPosition.y=n.y),e.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:At.OBJECT_PLACED}))}fingerPolar(t){const e=t[0].inputSource.gamepad.axes,i=t[1].inputSource.gamepad.axes,s=i[0]-e[0],n=i[1]-e[1],a=Math.atan2(n,s);let r=this.lastAngle-a;return r>Math.PI?r-=2*Math.PI:r<-Math.PI&&(r+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(s*s+n*n),deltaYaw:r}}processInput(t){const e=this.transientHitTestSource;if(e==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const i=t.getHitTestResultsForTransientInput(e),s=this.presentedScene,n=s.scale.x;if(this.isTwoFingering){if(i.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:r}=this.fingerPolar(i);if(this.placeOnWall===!1&&(this.goalYaw+=r),s.canScale){const l=a/this.firstRatio;this.goalScale=l<ol&&l>Uc?1:l}}return}else if(i.length===2){this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(i);this.firstRatio=a/n;return}if(this.isRotating){const a=this.inputSource.gamepad.axes[0]*Ka;this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&i.forEach(a=>{if(a.inputSource!==this.inputSource)return;let r=null;if(a.results.length>0&&(r=this.getHitPoint(a.results[0])),r==null&&(r=this.getTouchLocation()),r!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=r.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/n,this.presentedScene.setShadowOffset(l);const h=Si.copy(s.getCamera().position),d=-l/(h.y-r.y);h.multiplyScalar(d),r.multiplyScalar(1-d).add(h)}}this.goalPosition.add(r),this.lastDragPosition.copy(r)}})}moveScene(t){const e=this.presentedScene,{position:i,yaw:s}=e,n=e.boundingSphere.radius,a=this.goalPosition,r=e.scale.x,l=this.placementBox;let h=D.NONE;if(!a.equals(i)||this.goalScale!==r){h=D.USER_INTERACTION;let{x:d,y:c,z:u}=i;d=this.xDamper.update(d,a.x,t,n),c=this.yDamper.update(c,a.y,t,n),u=this.zDamper.update(u,a.z,t,n),i.set(d,c,u);const p=this.scaleDamper.update(r,this.goalScale,t,1);if(e.scale.set(p,p,p),!this.isTranslating){const m=a.y-c;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=m/p,e.setShadowOffset(m)):m===0&&(this.placementComplete=!0,l.show=!1,e.setShadowIntensity(Nc))}}l.updateOpacity(t),e.updateTarget(t),e.yaw=this.yawDamper.update(s,this.goalYaw,t,Math.PI),e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:h}}))}onWebXRFrame(t,e){this.frame=e,++this.frames;const i=this.threeRenderer.xr.getReferenceSpace(),s=e.getViewerPose(i);s==null&&this.tracking===!0&&this.frames>kc&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:Cn.NOT_TRACKING}));const n=this.presentedScene;if(s==null||n==null||!n.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:Cn.TRACKING}));let a=!0;for(const r of s.views){if(this.updateView(r),a){this.moveToFloor(e),this.processInput(e);const l=t-this.lastTick;this.moveScene(l),this.renderer.preRender(n,t,l),this.lastTick=t,n.renderShadow(this.threeRenderer)}this.threeRenderer.render(n,n.getCamera()),a=!1}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=Symbol("prepared"),Zi=Symbol("prepare"),Q=Symbol("preparedGLTF"),Ji=Symbol("clone");class qc{constructor(t){this[Q]=t}static prepare(t){if(t.scene==null)throw new Error("Model does not have a scene");if(t[Ya])return t;const e=this[Zi](t);return e[Ya]=!0,e}static[Zi](t){const{scene:e}=t,i=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:i})}get parser(){return this[Q].parser}get animations(){return this[Q].animations}get scene(){return this[Q].scene}get scenes(){return this[Q].scenes}get cameras(){return this[Q].cameras}get asset(){return this[Q].asset}get userData(){return this[Q].userData}clone(){const t=this.constructor,e=this[Ji]();return new t(e)}dispose(){this.scenes.forEach(t=>{t.traverse(e=>{const i=e;if(!i.material)return;(Array.isArray(i.material)?i.material:[i.material]).forEach(n=>{for(const a in n){const r=n[a];if(r instanceof Et){const l=r.source.data;l.close!=null&&l.close(),r.dispose()}}n.dispose()}),i.geometry.dispose()})})}[Ji](){const t=this[Q],e=$l(this.scene);Xc(e,this.scene);const i=[e],s=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:i,userData:s})}}const Xc=(o,t)=>{ll(o,t,(e,i)=>{i.userData.variantMaterials!==void 0&&(e.userData.variantMaterials=new Map(i.userData.variantMaterials)),i.userData.variantData!==void 0&&(e.userData.variantData=i.userData.variantData),i.userData.originalMaterial!==void 0&&(e.userData.originalMaterial=i.userData.originalMaterial)})},ll=(o,t,e)=>{e(o,t);for(let i=0;i<o.children.length;i++)ll(o.children[i],t.children[i],e)},Za=Symbol("threeGLTF"),Ja=Symbol("gltf"),Qa=Symbol("gltfElementMap"),tr=Symbol("threeObjectMap"),er=Symbol("parallelTraverseThreeScene"),ir=Symbol("correlateOriginalThreeGLTF"),sr=Symbol("correlateCloneThreeGLTF");class Je{constructor(t,e,i,s){this[Za]=t,this[Ja]=e,this[Qa]=s,this[tr]=i}static from(t,e){return e!=null?this[sr](t,e):this[ir](t)}static[ir](t){const e=t.parser.json,i=t.parser.associations,s=new Map,n={name:"Default"},a={type:"materials",index:-1};for(const r of i.keys())r instanceof Dl&&i.get(r)==null&&(a.index<0&&(e.materials==null&&(e.materials=[]),a.index=e.materials.length,e.materials.push(n)),r.name=n.name,i.set(r,{materials:a.index}));for(const[r,l]of i){l&&(r.userData=r.userData||{},r.userData.associations=l);for(const h in l)if(h!=null&&h!=="primitives"){const d=h,u=(e[d]||[])[l[d]];if(u==null)continue;let p=s.get(u);p==null&&(p=new Set,s.set(u,p)),p.add(r)}}return new Je(t,e,i,s)}static[sr](t,e){const i=e.threeGLTF,s=e.gltf,n=JSON.parse(JSON.stringify(s)),a=new Map,r=new Map;for(let l=0;l<i.scenes.length;l++)this[er](i.scenes[l],t.scenes[l],(h,d)=>{const c=e.threeObjectMap.get(h);if(c!=null){for(const u in c)if(u!=null&&u!=="primitives"){const p=u,m=c[p],y=n[p][m],v=a.get(d)||{};v[p]=m,a.set(d,v);const M=r.get(y)||new Set;M.add(d),r.set(y,M)}}});return new Je(t,n,a,r)}static[er](t,e,i){const s=(n,a)=>{if(i(n,a),n.isObject3D){const r=n,l=a;if(r.material)if(Array.isArray(r.material))for(let h=0;h<r.material.length;++h)i(r.material[h],l.material[h]);else i(r.material,l.material);for(let h=0;h<n.children.length;++h)s(n.children[h],a.children[h])}};s(t,e)}get threeGLTF(){return this[Za]}get gltf(){return this[Ja]}get gltfElementMap(){return this[Qa]}get threeObjectMap(){return this[tr]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=Symbol("correlatedSceneGraph");class Kc extends qc{static[Zi](t){const e=super[Zi](t);e[Ie]==null&&(e[Ie]=Je.from(e));const{scene:i}=e,s=new yo(void 0,1/0);return i.traverse(n=>{n.renderOrder=1e3,n.frustumCulled=!1,n.name||(n.name=n.uuid);const a=n;if(a.material){const{geometry:r}=a;a.castShadow=!0,a.isSkinnedMesh&&(r.boundingSphere=s,r.boundingBox=null);const l=a.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=bo,l.aoMap){const{gltf:h,threeObjectMap:d}=e[Ie],c=d.get(l);if(h.materials!=null&&c!=null&&c.materials!=null){const u=h.materials[c.materials];u.occlusionTexture&&u.occlusionTexture.texCoord===0&&r.attributes.uv!=null&&r.setAttribute("uv2",r.attributes.uv)}}}}),e}get correlatedSceneGraph(){return this[Q][Ie]}[Ji](){const t=super[Ji](),e=new Map;return t.scene.traverse(i=>{const s=i;if(s.material){const a=s.material;if(a!=null){if(e.has(a.uuid)){s.material=e.get(a.uuid);return}s.material=a.clone(),e.set(a.uuid,s.material)}}const n=i;n.target!==void 0&&n.add(n.target)}),t[Ie]=Je.from(t,this.correlatedSceneGraph),t}}const hl=(o,t,e)=>{let i;switch(o){case An:i=new Uint8ClampedArray(t*e*4);break;case We:i=new Uint16Array(t*e*4);break;case Nl:i=new Uint32Array(t*e*4);break;case kl:i=new Int8Array(t*e*4);break;case Fl:i=new Int16Array(t*e*4);break;case Pl:i=new Int32Array(t*e*4);break;case Mn:i=new Float32Array(t*e*4);break;default:throw new Error("Unsupported data type")}return i};let xi;const Yc=(o,t,e,i)=>{if(xi!==void 0)return xi;const s=new qe(1,1,i);t.setRenderTarget(s);const n=new q(new ti,new ii({color:16777215}));t.render(n,e),t.setRenderTarget(null);const a=hl(o,s.width,s.height);return t.readRenderTargetPixels(s,0,0,s.width,s.height,a),s.dispose(),n.geometry.dispose(),n.material.dispose(),xi=a[0]!==0,xi};class zn{constructor(t){var e,i,s,n,a,r,l,h,d,c,u,p,m,y,v,M;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(A){throw this._renderer.setRenderTarget(null),A}this._renderer.setRenderTarget(null)},this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;const F={format:be,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((e=t.renderTargetOptions)===null||e===void 0?void 0:e.anisotropy)!==void 0?(i=t.renderTargetOptions)===null||i===void 0?void 0:i.anisotropy:1,generateMipmaps:((s=t.renderTargetOptions)===null||s===void 0?void 0:s.generateMipmaps)!==void 0?(n=t.renderTargetOptions)===null||n===void 0?void 0:n.generateMipmaps:!1,magFilter:((a=t.renderTargetOptions)===null||a===void 0?void 0:a.magFilter)!==void 0?(r=t.renderTargetOptions)===null||r===void 0?void 0:r.magFilter:it,minFilter:((l=t.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(h=t.renderTargetOptions)===null||h===void 0?void 0:h.minFilter:it,samples:((d=t.renderTargetOptions)===null||d===void 0?void 0:d.samples)!==void 0?(c=t.renderTargetOptions)===null||c===void 0?void 0:c.samples:void 0,wrapS:((u=t.renderTargetOptions)===null||u===void 0?void 0:u.wrapS)!==void 0?(p=t.renderTargetOptions)===null||p===void 0?void 0:p.wrapS:st,wrapT:((m=t.renderTargetOptions)===null||m===void 0?void 0:m.wrapT)!==void 0?(y=t.renderTargetOptions)===null||y===void 0?void 0:y.wrapT:st};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=zn.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new ei,this._camera=new Vn,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!Yc(this._type,this._renderer,this._camera,F)){let A;switch(this._type){case We:A=this._renderer.extensions.has("EXT_color_buffer_float")?Mn:void 0;break}A!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Mn}`),this._type=A):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new q(new ti,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new qe(this.width,this.height,F),this._renderTarget.texture.mapping=((v=t.renderTargetOptions)===null||v===void 0?void 0:v.mapping)!==void 0?(M=t.renderTargetOptions)===null||M===void 0?void 0:M.mapping:Wi}static instantiateRenderer(){const t=new wo;return t.setSize(128,128),t}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const t=hl(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,t),t}toDataTexture(t){const e=new Ol(this.toArray(),this.width,this.height,be,this._type,t?.mapping||Wi,t?.wrapS||st,t?.wrapT||st,t?.magFilter||it,t?.minFilter||it,t?.anisotropy||1,Rt);return e.generateMipmaps=t?.generateMipmaps!==void 0?t?.generateMipmaps:!1,e}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(t){this.disposeOnDemandRenderer(),t&&this.renderTarget.dispose(),this.material instanceof Xe&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof Et&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof Et&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(t){this._width=t,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(t){this._height=t,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(t){this._renderTarget=t,this._width=t.width,this._height=t.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}const Zc=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Jc=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class Qc extends Xe{constructor({gamma:t,offsetHdr:e,offsetSdr:i,gainMapMin:s,gainMapMax:n,maxDisplayBoost:a,hdrCapacityMin:r,hdrCapacityMax:l,sdr:h,gainMap:d}){super({name:"GainMapDecoderMaterial",vertexShader:Zc,fragmentShader:Jc,uniforms:{sdr:{value:h},gainMap:{value:d},gamma:{value:new _(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new _().fromArray(e)},offsetSdr:{value:new _().fromArray(i)},gainMapMin:{value:new _().fromArray(s)},gainMapMax:{value:new _().fromArray(n)},weightFactor:{value:(Math.log2(a)-r)/(l-r)}},blending:So,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=r,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const e=this.uniforms.gamma.value;e.x=1/t[0],e.y=1/t[1],e.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class cl extends Error{}class ul extends Error{}const $e=(o,t,e)=>{var i;let s;const n=(i=o.attributes.getNamedItem(t))===null||i===void 0?void 0:i.nodeValue;if(n)s=n;else{const a=o.getElementsByTagName(t)[0];if(a){const r=a.getElementsByTagName("rdf:li");if(r.length===3)s=Array.from(r).map(l=>l.innerHTML);else throw new Error(`Gainmap metadata contains an array of items for ${t} but its length is not 3`)}else{if(e)return e;throw new Error(`Can't find ${t} in gainmap metadata`)}}return s},tu=o=>{var t,e;let i;typeof TextDecoder<"u"?i=new TextDecoder().decode(o):i=o.toString();let s=i.indexOf("<x:xmpmeta");const n=new DOMParser;for(;s!==-1;){const a=i.indexOf("x:xmpmeta>",s);i.slice(s,a+10);const r=i.slice(s,a+10);try{const h=n.parseFromString(r,"text/xml").getElementsByTagName("rdf:Description")[0],d=$e(h,"hdrgm:GainMapMin","0"),c=$e(h,"hdrgm:GainMapMax"),u=$e(h,"hdrgm:Gamma","1"),p=$e(h,"hdrgm:OffsetSDR","0.015625"),m=$e(h,"hdrgm:OffsetHDR","0.015625");let y=(t=h.attributes.getNamedItem("hdrgm:HDRCapacityMin"))===null||t===void 0?void 0:t.nodeValue;y||(y="0");const v=(e=h.attributes.getNamedItem("hdrgm:HDRCapacityMax"))===null||e===void 0?void 0:e.nodeValue;if(!v)throw new Error("Incomplete gainmap metadata");return{gainMapMin:Array.isArray(d)?d.map(M=>parseFloat(M)):[parseFloat(d),parseFloat(d),parseFloat(d)],gainMapMax:Array.isArray(c)?c.map(M=>parseFloat(M)):[parseFloat(c),parseFloat(c),parseFloat(c)],gamma:Array.isArray(u)?u.map(M=>parseFloat(M)):[parseFloat(u),parseFloat(u),parseFloat(u)],offsetSdr:Array.isArray(p)?p.map(M=>parseFloat(M)):[parseFloat(p),parseFloat(p),parseFloat(p)],offsetHdr:Array.isArray(m)?m.map(M=>parseFloat(M)):[parseFloat(m),parseFloat(m),parseFloat(m)],hdrCapacityMin:parseFloat(y),hdrCapacityMax:parseFloat(v)}}catch{}s=i.indexOf("<x:xmpmeta",a)}};class eu{constructor(t){this.options={debug:t&&t.debug!==void 0?t.debug:!1,extractFII:t&&t.extractFII!==void 0?t.extractFII:!0,extractNonFII:t&&t.extractNonFII!==void 0?t.extractNonFII:!0}}extract(t){return new Promise((e,i)=>{const s=this.options.debug,n=new DataView(t.buffer);if(n.getUint16(0)!==65496){i(new Error("Not a valid jpeg"));return}const a=n.byteLength;let r=2,l=0,h;for(;r<a;){if(++l>250){i(new Error(`Found no marker after ${l} loops 😵`));return}if(n.getUint8(r)!==255){i(new Error(`Not a valid marker at offset 0x${r.toString(16)}, found: 0x${n.getUint8(r).toString(16)}`));return}if(h=n.getUint8(r+1),s&&console.log(`Marker: ${h.toString(16)}`),h===226){s&&console.log("Found APP2 marker (0xffe2)");const d=r+4;if(n.getUint32(d)===1297106432){const c=d+4;let u;if(n.getUint16(c)===18761)u=!1;else if(n.getUint16(c)===19789)u=!0;else{i(new Error("No valid endianness marker found in TIFF header"));return}if(n.getUint16(c+2,!u)!==42){i(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const p=n.getUint32(c+4,!u);if(p<8){i(new Error("Not valid TIFF data! (First offset less than 8)"));return}const m=c+p,y=n.getUint16(m,!u),v=m+2;let M=0;for(let f=v;f<v+12*y;f+=12)n.getUint16(f,!u)===45057&&(M=n.getUint32(f+8,!u));const A=m+2+y*12+4,rt=[];for(let f=A;f<A+M*16;f+=16){const w={MPType:n.getUint32(f,!u),size:n.getUint32(f+4,!u),dataOffset:n.getUint32(f+8,!u),dependantImages:n.getUint32(f+12,!u),start:-1,end:-1,isFII:!1};w.dataOffset?(w.start=c+w.dataOffset,w.isFII=!1):(w.start=0,w.isFII=!0),w.end=w.start+w.size,rt.push(w)}if(this.options.extractNonFII&&rt.length){const f=new Blob([n]),w=[];for(const E of rt){if(E.isFII&&!this.options.extractFII)continue;const O=f.slice(E.start,E.end+1,"image/jpeg");w.push(O)}e(w)}}}r+=2+n.getUint16(r+2)}})}}const iu=async o=>{const t=tu(o);if(!t)throw new ul("Gain map XMP metadata not found");const i=await new eu({extractFII:!0,extractNonFII:!0}).extract(o);if(i.length!==2)throw new cl("Gain map recovery image not found");return{sdr:new Uint8Array(await i[0].arrayBuffer()),gainMap:new Uint8Array(await i[1].arrayBuffer()),metadata:t}},nr=o=>new Promise((t,e)=>{const i=document.createElement("img");i.onload=()=>{t(i)},i.onerror=s=>{e(s)},i.src=URL.createObjectURL(o)});class su extends Ul{constructor(t,e){super(e),t&&(this._renderer=t),this._internalLoadingManager=new Bl}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=new Qc({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new Et,sdr:new Et});return new zn({width:16,height:16,type:We,colorSpace:Rt,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(t,e,i,s){const n=s?new Blob([s],{type:"image/jpeg"}):void 0,a=new Blob([i],{type:"image/jpeg"});let r,l,h=!1;if(typeof createImageBitmap>"u"){const u=await Promise.all([n?nr(n):Promise.resolve(void 0),nr(a)]);l=u[0],r=u[1],h=!0}else{const u=await Promise.all([n?createImageBitmap(n,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(a,{imageOrientation:"flipY"})]);l=u[0],r=u[1]}const d=new Et(l||new ImageData(2,2),Wi,st,st,it,jn,be,An,1,Rt);d.flipY=h,d.needsUpdate=!0;const c=new Et(r,Wi,st,st,it,jn,be,An,1,is);c.flipY=h,c.needsUpdate=!0,t.width=r.width,t.height=r.height,t.material.gainMap=d,t.material.sdr=c,t.material.gainMapMin=e.gainMapMin,t.material.gainMapMax=e.gainMapMax,t.material.offsetHdr=e.offsetHdr,t.material.offsetSdr=e.offsetSdr,t.material.gamma=e.gamma,t.material.hdrCapacityMin=e.hdrCapacityMin,t.material.hdrCapacityMax=e.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,e.hdrCapacityMax),t.material.needsUpdate=!0,t.render()}}class nu extends su{load(t,e,i,s){const n=this.prepareQuadRenderer(),a=new Vl(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(t),a.load(t,async r=>{if(typeof r=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(r);let h,d,c;try{const u=await iu(l);h=u.sdr,d=u.gainMap,c=u.metadata}catch(u){if(u instanceof ul||u instanceof cl)console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),c={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},h=l;else throw u}try{await this.render(n,c,h,d)}catch(u){this.manager.itemError(t),typeof s=="function"&&s(u),n.disposeOnDemandRenderer();return}typeof e=="function"&&e(n),this.manager.itemEnd(t),n.disposeOnDemandRenderer()},i,r=>{this.manager.itemError(t),typeof s=="function"&&s(r)}),n}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au={topLight:{intensity:500,position:[.418,16.199,.3]},room:{position:[-.757,13.219,.717],scale:[31.713,28.305,28.591]},boxes:[{position:[-10.906,2.009,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,.857,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:50,position:[-16.116,14.37,8.208],scale:[.1,2.428,2.739]},{intensity:50,position:[-16.109,18.021,-8.207],scale:[.1,2.425,2.751]},{intensity:17,position:[14.904,12.198,-1.832],scale:[.15,4.265,6.331]},{intensity:43,position:[-.462,8.89,14.52],scale:[4.38,5.441,.088]},{intensity:20,position:[3.235,11.486,-12.541],scale:[2.5,2,.1]},{intensity:100,position:[0,20,0],scale:[1,.1,1]}]},ru={topLight:{intensity:400,position:[.5,14,.5]},room:{position:[0,13.2,0],scale:[31.5,28.5,31.5]},boxes:[{position:[-10.906,-1,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,-.16,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:80,position:[-14,10,8],scale:[.1,2.5,2.5]},{intensity:80,position:[-14,14,-4],scale:[.1,2.5,2.5]},{intensity:23,position:[14,12,0],scale:[.1,5,5]},{intensity:16,position:[0,9,14],scale:[5,5,.1]},{intensity:80,position:[7,8,-14],scale:[2.5,2.5,.1]},{intensity:80,position:[-7,16,-14],scale:[2.5,2.5,.1]},{intensity:1,position:[0,20,0],scale:[.1,.1,.1]}]};class ar extends ei{constructor(t){super(),this.position.y=-3.5;const e=new xo;e.deleteAttribute("uv");const i=new Gn({metalness:0,side:Un}),s=new Gn({metalness:0}),n=t=="legacy"?au:ru,a=new zl(16777215,n.topLight.intensity,28,2);a.position.set(...n.topLight.position),this.add(a);const r=new q(e,i);r.position.set(...n.room.position),r.scale.set(...n.room.scale),this.add(r);for(const l of n.boxes){const h=new q(e,s);h.position.set(...l.position),h.rotation.set(0,l.rotation,0),h.scale.set(...l.scale),this.add(h)}for(const l of n.lights){const h=new q(e,this.createAreaLightMaterial(l.intensity));h.position.set(...l.position),h.scale.set(...l.scale),this.add(h)}}createAreaLightMaterial(t){const e=new ii;return e.color.setScalar(t),e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=.04,ee=20,lu=/\.hdr(\.js)?$/;class rr{constructor(t){this.threeRenderer=t,this.lottieLoaderUrl="",this.withCredentials=!1,this._ldrLoader=null,this._imageLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}get ldrLoader(){return this._ldrLoader==null&&(this._ldrLoader=new Hl),this._ldrLoader.setWithCredentials(this.withCredentials),this._ldrLoader}get imageLoader(){return this._imageLoader==null&&(this._imageLoader=new nu(this.threeRenderer)),this._imageLoader.setWithCredentials(this.withCredentials),this._imageLoader}get hdrLoader(){return this._hdrLoader==null&&(this._hdrLoader=new jl,this._hdrLoader.setDataType(We)),this._hdrLoader.setWithCredentials(this.withCredentials),this._hdrLoader}async getLottieLoader(){if(this._lottieLoader==null){const{LottieLoader:t}=await import(this.lottieLoaderUrl);this._lottieLoader=new t}return this._lottieLoader.setWithCredentials(this.withCredentials),this._lottieLoader}async loadImage(t){const e=await new Promise((i,s)=>this.ldrLoader.load(t,i,()=>{},s));return e.name=t,e.flipY=!1,e}async loadLottie(t,e){const i=await this.getLottieLoader();i.setQuality(e);const s=await new Promise((n,a)=>i.load(t,n,()=>{},a));return s.name=t,s}async loadEquirect(t,e=()=>{}){try{const i=lu.test(t),s=i?this.hdrLoader:this.imageLoader,n=await new Promise((a,r)=>s.load(t,l=>{const{renderTarget:h}=l;if(h!=null){const{texture:d}=h;l.dispose(!1),a(d)}else a(l)},l=>{e(l.loaded/l.total*.9)},r));return e(1),n.name=t,n.mapping=Gl,i||(n.colorSpace=is),n}finally{e&&e(1)}}async generateEnvironmentMapAndSkybox(t=null,e=null,i=()=>{}){const s=e!=="legacy";(e==="legacy"||e==="neutral")&&(e=null),e=Ho(e);let n=Promise.resolve(null),a;t&&(n=this.loadEquirectFromUrl(t,i)),e?a=this.loadEquirectFromUrl(e,i):t?a=this.loadEquirectFromUrl(t,i):a=s?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[r,l]=await Promise.all([a,n]);if(r==null)throw new Error("Failed to load environment map.");return{environmentMap:r,skybox:l}}async loadEquirectFromUrl(t,e){if(!this.skyboxCache.has(t)){const i=this.loadEquirect(t,e);this.skyboxCache.set(t,i)}return this.skyboxCache.get(t)}async GenerateEnvironmentMap(t,e){await Dh();const i=this.threeRenderer,s=new Wl(256,{generateMipmaps:!1,type:We,format:be,colorSpace:Rt,depthBuffer:!0}),n=new Wn(.1,100,s),a=n.renderTarget.texture;a.name=e;const r=i.outputColorSpace,l=i.toneMapping;return i.toneMapping=ql,i.outputColorSpace=Rt,n.update(i,t),this.blurCubemap(s,ou),i.toneMapping=l,i.outputColorSpace=r,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new ar("legacy"),"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new ar("neutral"),"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(t,e){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(ee);const s=new xo,n=new q(s,this.blurMaterial);this.blurScene=new ei,this.blurScene.add(n)}const i=t.clone();this.halfblur(t,i,e,"latitudinal"),this.halfblur(i,t,e,"longitudinal")}halfblur(t,e,i,s){const a=t.width,r=isFinite(i)?Math.PI/(2*a):2*Math.PI/(2*ee-1),l=i/r,h=isFinite(i)?1+Math.floor(3*l):ee;h>ee&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ee}`);const d=[];let c=0;for(let m=0;m<ee;++m){const y=m/l,v=Math.exp(-y*y/2);d.push(v),m==0?c+=v:m<h&&(c+=2*v)}for(let m=0;m<d.length;m++)d[m]=d[m]/c;const u=this.blurMaterial.uniforms;u.envMap.value=t.texture,u.samples.value=h,u.weights.value=d,u.latitudinal.value=s==="latitudinal",u.dTheta.value=r,new Wn(.1,100,e).update(this.threeRenderer,this.blurScene)}getBlurShader(t){const e=new Float32Array(t),i=new _(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:i}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:So,depthTest:!1,depthWrite:!1,side:Un})}async dispose(){for(const[,t]of this.skyboxCache)(await t).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=.2,Os=40,Ps=60,or=5,ie=[1,.79,.62,.5,.4,.31,.25],cu=3,lr="high-performance",uu=1.3;class J extends es{constructor(t){super(),this.loader=new k(Kc),this.width=0,this.height=0,this.dpr=1,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=cu,this.avgFrameDuration=(Ps+Os)/2,this.onWebGLContextLost=e=>{this.dispatchEvent({type:"contextlost",sourceEvent:e})},this.onWebGLContextRestored=()=>{var e;(e=this.textureUtils)===null||e===void 0||e.dispose(),this.textureUtils=new rr(this.threeRenderer);for(const i of this.scenes)i.element[Yi]()},this.dpr=Rn(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new wo({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:t.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.debug={checkShaderErrors:!!t.debug,onShaderError:null},this.threeRenderer.toneMapping=kn}catch(e){console.warn(e)}this.arRenderer=new Wc(this),this.textureUtils=this.canRender?new rr(this.threeRenderer):null,k.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton||(this._singleton=new J({powerPreference:(self.ModelViewerElement||{}).powerPreference||lr,debug:ha()})),this._singleton}static resetSingleton(){const t=this._singleton.dispose();for(const e of t)e.disconnectedCallback();this._singleton=new J({powerPreference:(self.ModelViewerElement||{}).powerPreference||lr,debug:ha()});for(const e of t)e.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return ie[this.scaleStep]}set minScale(t){let e=1;for(;e<ie.length&&!(ie[e]<t);)++e;this.lastStep=e-1}registerScene(t){this.scenes.add(t),t.forceRescale();const e=new yt;this.threeRenderer.getSize(e),t.canvas.width=e.x,t.canvas.height=e.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((i,s)=>this.render(i,s))}unregisterScene(t){this.scenes.delete(t),this.canvas3D.parentElement===t.canvas.parentElement&&t.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null)}displayCanvas(t){return t.element.modelIsVisible&&!this.multipleScenesVisible?this.canvas3D:t.element[Pn]}countVisibleScenes(){const{canvas3D:t}=this;let e=0,i=null;for(const n of this.scenes){const{element:a}=n;a.modelIsVisible&&n.externalRenderer==null&&++e,t.parentElement===n.canvas.parentElement&&(i=n)}const s=e>1;if(i!=null){const n=s&&!this.multipleScenesVisible,a=!i.element.modelIsVisible;if(n||a){const{width:r,height:l}=this.sceneSize(i);this.copyPixels(i,r,l),t.parentElement.removeChild(t)}}this.multipleScenesVisible=s}updateRendererSize(){var t;const e=Rn();if(e!==this.dpr)for(const n of this.scenes){const{element:a}=n;a[pe](a.getBoundingClientRect())}let i=0,s=0;for(const n of this.scenes)i=Math.max(i,n.width),s=Math.max(s,n.height);if(!(i===this.width&&s===this.height&&e===this.dpr)){this.width=i,this.height=s,this.dpr=e,i=Math.ceil(i*e),s=Math.ceil(s*e),this.canRender&&this.threeRenderer.setSize(i,s,!1);for(const n of this.scenes){const{canvas:a}=n;a.width=i,a.height=s,n.forceRescale(),(t=n.effectRenderer)===null||t===void 0||t.setSize(i,s)}}}updateRendererScale(t){const e=this.scaleStep;this.avgFrameDuration+=et(hu*(t-this.avgFrameDuration),-or,or),this.avgFrameDuration>Ps?++this.scaleStep:this.avgFrameDuration<Os&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e!==this.scaleStep&&(this.avgFrameDuration=(Ps+Os)/2)}shouldRender(t){if(t.shouldRender())t.scaleStep!=this.scaleStep&&(t.scaleStep=this.scaleStep,this.rescaleCanvas(t));else if(t.scaleStep!=0)t.scaleStep=0,this.rescaleCanvas(t);else return!1;return!0}rescaleCanvas(t){const e=ie[t.scaleStep],i=Math.ceil(this.width/e),s=Math.ceil(this.height/e),{style:n}=t.canvas;n.width=`${i}px`,n.height=`${s}px`,this.canvas3D.style.width=`${i}px`,this.canvas3D.style.height=`${s}px`;const a=this.dpr*e,r=e<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";t.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*ie[this.lastStep],pixelWidth:Math.ceil(t.width*a),pixelHeight:Math.ceil(t.height*a),reason:r}}))}sceneSize(t){const{dpr:e}=this,i=ie[t.scaleStep],s=Math.min(Math.ceil(t.width*i*e),this.canvas3D.width),n=Math.min(Math.ceil(t.height*i*e),this.canvas3D.height);return{width:s,height:n}}copyPixels(t,e,i){const s=t.context;if(s==null){console.log("could not acquire 2d context");return}s.clearRect(0,0,e,i),s.drawImage(this.canvas3D,0,0,e,i,0,0,e,i),t.canvas.classList.add("show")}orderedScenes(){const t=[];for(const e of[!1,!0])for(const i of this.scenes)i.element.modelIsVisible===e&&t.push(i);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,i){const{element:s,exposure:n,toneMapping:a}=t;s[at](e,i);const r=typeof n=="number"&&!Number.isNaN(n),l=s.environmentImage,h=s.skyboxImage,d=a===fo&&(l==="neutral"||l==="legacy"||!l&&!h);this.threeRenderer.toneMappingExposure=(r?n:1)*(d?uu:1)}render(t,e){if(e!=null){this.arRenderer.onWebXRFrame(t,e);return}const i=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(i),this.renderedLastFrame=!1);const{canvas3D:s}=this;for(const n of this.orderedScenes()){const{element:a}=n;if(!a.loaded||!a.modelIsVisible&&n.renderCount>0||(this.preRender(n,t,i),!this.shouldRender(n)))continue;if(n.externalRenderer!=null){const h=n.getCamera();h.updateMatrix();const{matrix:d,projectionMatrix:c}=h,u=d.elements.slice(),p=n.getTarget();u[12]+=p.x,u[13]+=p.y,u[14]+=p.z,n.externalRenderer.render({viewMatrix:u,projectionMatrix:c.elements});continue}if(!a.modelIsVisible&&!this.multipleScenesVisible)for(const h of this.scenes)h.element.modelIsVisible&&h.queueRender();const{width:r,height:l}=this.sceneSize(n);n.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,r,l),n.effectRenderer!=null?n.effectRenderer.render(i):(this.threeRenderer.autoClear=!0,this.threeRenderer.toneMapping=n.toneMapping,this.threeRenderer.render(n,n.camera)),this.multipleScenesVisible||!n.element.modelIsVisible&&n.renderCount===0?this.copyPixels(n,r,l):s.parentElement!==n.canvas.parentElement&&(n.canvas.parentElement.appendChild(s),n.canvas.classList.remove("show")),n.hasRendered(),++n.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const t=[];for(const e of this.scenes)t.push(e.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),t}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=Symbol("correlatedObjects"),R=Symbol("onUpdate");class ni{constructor(t,e=null){this[R]=t,this[T]=e}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new ii,du=new ti(2,2);let pu=0;const H=Symbol("threeTexture"),cr=Symbol("threeTextures");class mu extends ni{get[H](){var t;return(t=this[T])===null||t===void 0?void 0:t.values().next().value}get[cr](){return this[T]}constructor(t,e){super(t,new Set(e?[e]:[])),this[H].image.src||(this[H].image.src=e.name?e.name:"adhoc_image"+pu++),this[H].image.name||(this[H].image.name=e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image")}get name(){return this[H].image.name||""}get uri(){return this[H].image.src}get bufferView(){return this[H].image.bufferView}get element(){const t=this[H];if(t&&(t.isCanvasTexture||t.isVideoTexture))return t.image}get animation(){const t=this[H];if(t&&t.isCanvasTexture&&t.animation)return t.animation}get type(){return this.uri!=null?"external":"embedded"}set name(t){for(const e of this[cr])e.image.name=t}update(){const t=this[H];t&&t.isCanvasTexture&&!t.animation&&(this[H].needsUpdate=!0,this[R]())}async createThumbnail(t,e){const i=new ei;hr.map=this[H];const s=new q(du,hr);i.add(s);const n=new Vn(-1,1,1,-1,0,1),{threeRenderer:a}=J.singleton,r=new qe(t,e);a.setRenderTarget(r),a.render(i,n),a.setRenderTarget(null);const l=new Uint8Array(t*e*4);a.readRenderTargetPixels(r,0,0,t,e,l),_t.width=t,_t.height=e;const h=_t.getContext("2d"),d=h.createImageData(t,e);return d.data.set(l),h.putImageData(d,0,0),new Promise(async(c,u)=>{_t.toBlob(p=>{if(!p)return u("Failed to capture thumbnail.");c(URL.createObjectURL(p))},"image/png")})}}var V;(function(o){o[o.Nearest=9728]="Nearest",o[o.Linear=9729]="Linear",o[o.NearestMipmapNearest=9984]="NearestMipmapNearest",o[o.LinearMipmapNearest=9985]="LinearMipmapNearest",o[o.NearestMipmapLinear=9986]="NearestMipmapLinear",o[o.LinearMipmapLinear=9987]="LinearMipmapLinear"})(V||(V={}));var Ct;(function(o){o[o.ClampToEdge=33071]="ClampToEdge",o[o.MirroredRepeat=33648]="MirroredRepeat",o[o.Repeat=10497]="Repeat"})(Ct||(Ct={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map([[Ct.Repeat,qi],[Ct.ClampToEdge,st],[Ct.MirroredRepeat,Mo]]),Ln=new Map([[qi,Ct.Repeat],[st,Ct.ClampToEdge],[Mo,Ct.MirroredRepeat]]),fu=new Map([[V.Nearest,ss],[V.Linear,it],[V.NearestMipmapNearest,Ao],[V.LinearMipmapNearest,To],[V.NearestMipmapLinear,Eo],[V.LinearMipmapLinear,_o]]),dl=new Map([[ss,V.Nearest],[it,V.Linear],[Ao,V.NearestMipmapNearest],[To,V.LinearMipmapNearest],[Eo,V.NearestMipmapLinear],[_o,V.LinearMipmapLinear]]),gu=new Map([[V.Nearest,ss],[V.Linear,it]]),pl=new Map([[ss,V.Nearest],[it,V.Linear]]),vu=o=>dl.has(o),yu=o=>pl.has(o),bu=o=>Ln.has(o),wu=(o,t)=>{switch(o){case"minFilter":return vu(t);case"magFilter":return yu(t);case"wrapS":case"wrapT":return bu(t);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${o}" on Sampler`)}},pt=Symbol("threeTexture"),dr=Symbol("threeTextures"),wt=Symbol("setProperty");class Su extends ni{get[pt](){var t;return(t=this[T])===null||t===void 0?void 0:t.values().next().value}get[dr](){return this[T]}constructor(t,e){super(t,new Set(e?[e]:[]))}get name(){return this[pt].name||""}get minFilter(){return dl.get(this[pt].minFilter)}get magFilter(){return pl.get(this[pt].magFilter)}get wrapS(){return Ln.get(this[pt].wrapS)}get wrapT(){return Ln.get(this[pt].wrapT)}get rotation(){return this[pt].rotation}get scale(){return Fn(this[pt].repeat)}get offset(){return Fn(this[pt].offset)}setMinFilter(t){this[wt]("minFilter",fu.get(t))}setMagFilter(t){this[wt]("magFilter",gu.get(t))}setWrapS(t){this[wt]("wrapS",ur.get(t))}setWrapT(t){this[wt]("wrapT",ur.get(t))}setRotation(t){t==null&&(t=0),this[wt]("rotation",t)}setScale(t){t==null&&(t={u:1,v:1}),this[wt]("repeat",new yt(t.u,t.v))}setOffset(t){t==null&&(t={u:0,v:0}),this[wt]("offset",new yt(t.u,t.v))}[wt](t,e){if(wu(t,e))for(const i of this[dr])i[t]=e,i.needsUpdate=!0;this[R]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=Symbol("image"),mr=Symbol("sampler"),fr=Symbol("threeTexture");class ml extends ni{constructor(t,e){super(t,new Set(e?[e]:[])),this[mr]=new Su(t,e),this[pr]=new mu(t,e)}get[fr](){var t;return(t=this[T])===null||t===void 0?void 0:t.values().next().value}get name(){return this[fr].name||""}set name(t){for(const e of this[T])e.name=t}get sampler(){return this[mr]}get source(){return this[pr]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fl,gl,vl;const Vt=Symbol("texture"),Ut=Symbol("transform"),Fs=Symbol("materials"),gr=Symbol("usage"),se=Symbol("onUpdate"),He=Symbol("activeVideo");var x;(function(o){o[o.Base=0]="Base",o[o.MetallicRoughness=1]="MetallicRoughness",o[o.Normal=2]="Normal",o[o.Occlusion=3]="Occlusion",o[o.Emissive=4]="Emissive",o[o.Clearcoat=5]="Clearcoat",o[o.ClearcoatRoughness=6]="ClearcoatRoughness",o[o.ClearcoatNormal=7]="ClearcoatNormal",o[o.SheenColor=8]="SheenColor",o[o.SheenRoughness=9]="SheenRoughness",o[o.Transmission=10]="Transmission",o[o.Thickness=11]="Thickness",o[o.Specular=12]="Specular",o[o.SpecularColor=13]="SpecularColor",o[o.Iridescence=14]="Iridescence",o[o.IridescenceThickness=15]="IridescenceThickness",o[o.Anisotropy=16]="Anisotropy"})(x||(x={}));class ge{constructor(t,e,i,s){this[fl]=null,this[gl]={rotation:0,scale:new yt(1,1),offset:new yt(0,0)},this[vl]=!1,i&&(this[Ut].rotation=i.rotation,this[Ut].scale.copy(i.repeat),this[Ut].offset.copy(i.offset),this[Vt]=new ml(t,i)),this[se]=t,this[Fs]=s,this[gr]=e}get texture(){return this[Vt]}setTexture(t){var e,i;const s=t!=null?t.source[H]:null,n=(e=this[Vt])===null||e===void 0?void 0:e.source[H];if(n!=null&&n.isVideoTexture?this[He]=!1:!((i=this[Vt])===null||i===void 0)&&i.source.animation&&this[Vt].source.animation.removeEventListener("enterFrame",this[se]),this[Vt]=t,s!=null&&s.isVideoTexture){const r=s.image;if(this[He]=!0,r.requestVideoFrameCallback!=null){const l=()=>{this[He]&&(this[se](),r.requestVideoFrameCallback(l))};r.requestVideoFrameCallback(l)}else{const l=()=>{this[He]&&(this[se](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else t?.source.animation!=null&&t.source.animation.addEventListener("enterFrame",this[se]);let a=is;if(this[Fs])for(const r of this[Fs]){switch(this[gr]){case x.Base:r.map=s;break;case x.MetallicRoughness:a=Rt,r.metalnessMap=s,r.roughnessMap=s;break;case x.Normal:a=Rt,r.normalMap=s;break;case x.Occlusion:a=Rt,r.aoMap=s;break;case x.Emissive:r.emissiveMap=s;break;case x.Clearcoat:r.clearcoatMap=s;break;case x.ClearcoatRoughness:r.clearcoatRoughnessMap=s;break;case x.ClearcoatNormal:r.clearcoatNormalMap=s;break;case x.SheenColor:r.sheenColorMap=s;break;case x.SheenRoughness:r.sheenRoughnessMap=s;break;case x.Transmission:r.transmissionMap=s;break;case x.Thickness:r.thicknessMap=s;break;case x.Specular:r.specularIntensityMap=s;break;case x.SpecularColor:r.specularColorMap=s;break;case x.Iridescence:r.iridescenceMap=s;break;case x.IridescenceThickness:r.iridescenceThicknessMap=s;break;case x.Anisotropy:r.anisotropyMap=s;break}r.needsUpdate=!0}s&&(s.colorSpace=a,s.rotation=this[Ut].rotation,s.repeat=this[Ut].scale,s.offset=this[Ut].offset),this[se]()}}fl=Vt,gl=Ut,vl=He;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=Symbol("threeMaterial"),Mi=Symbol("threeMaterials"),vr=Symbol("baseColorTexture"),yr=Symbol("metallicRoughnessTexture");class xu extends ni{constructor(t,e){super(t,e);const{map:i,metalnessMap:s}=e.values().next().value;this[vr]=new ge(t,x.Base,i,e),this[yr]=new ge(t,x.MetallicRoughness,s,e)}get[Mi](){return this[T]}get[De](){var t;return(t=this[T])===null||t===void 0?void 0:t.values().next().value}get baseColorFactor(){const t=[0,0,0,this[De].opacity];return this[De].color.toArray(t),t}get metallicFactor(){return this[De].metalness}get roughnessFactor(){return this[De].roughness}get baseColorTexture(){return this[vr]}get metallicRoughnessTexture(){return this[yr]}setBaseColorFactor(t){const e=new Ro;t instanceof Array?e.fromArray(t):e.set(t);for(const i of this[Mi])i.color.set(e),t instanceof Array&&t.length>3?i.opacity=t[3]:(t=[0,0,0,i.opacity],e.toArray(t));this[R]()}setMetallicFactor(t){for(const e of this[Mi])e.metalness=t;this[R]()}setRoughnessFactor(t){for(const e of this[Mi])e.roughness=t;this[R]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br,wr;const Sr=Symbol("pbrMetallicRoughness"),xr=Symbol("normalTexture"),Mr=Symbol("occlusionTexture"),Ar=Symbol("emissiveTexture"),I=Symbol("backingThreeMaterial"),Tr=Symbol("applyAlphaCutoff"),ks=Symbol("getAlphaMode"),ne=Symbol("lazyLoadGLTFInfo"),Ns=Symbol("initialize"),In=Symbol("getLoadedMaterial"),b=Symbol("ensureMaterialIsLoaded"),Er=Symbol("gltfIndex"),je=Symbol("setActive"),Ui=Symbol("variantIndices"),Vs=Symbol("isActive"),Bi=Symbol("variantSet"),_r=Symbol("modelVariants"),Us=Symbol("name"),j=Symbol("pbrTextures");class Bs extends ni{constructor(t,e,i,s,n,a,r=void 0){super(t,n),this[br]=new Set,this[wr]=new Map,this[Er]=e,this[Vs]=i,this[_r]=s,this[Us]=a,r==null?this[Ns]():this[ne]=r}get[(br=Bi,wr=j,I)](){return this[T].values().next().value}[Ns](){const t=this[R],e=this[T];this[Sr]=new xu(t,e);const{normalMap:i,aoMap:s,emissiveMap:n}=e.values().next().value;this[xr]=new ge(t,x.Normal,i,e),this[Mr]=new ge(t,x.Occlusion,s,e),this[Ar]=new ge(t,x.Emissive,n,e);const a=r=>{this[j].set(r,new ge(t,r,null,e))};a(x.Clearcoat),a(x.ClearcoatRoughness),a(x.ClearcoatNormal),a(x.SheenColor),a(x.SheenRoughness),a(x.Transmission),a(x.Thickness),a(x.Specular),a(x.SpecularColor),a(x.Iridescence),a(x.IridescenceThickness),a(x.Anisotropy)}async[In](){if(this[ne]!=null){const{set:t,material:e}=await this[ne].doLazyLoad();return this[T]=t,this[Ns](),this[ne]=void 0,this.ensureLoaded=async()=>{},e}return this[T].values().next().value}colorFromRgb(t){const e=new Ro;return t instanceof Array?e.fromArray(t):e.set(t),e}[b](){if(this[ne]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[In]()}get isLoaded(){return this[ne]==null}get isActive(){return this[Vs]}[je](t){this[Vs]=t}get name(){return this[Us]||""}set name(t){if(this[Us]=t,this[T]!=null)for(const e of this[T])e.name=t}get pbrMetallicRoughness(){return this[b](),this[Sr]}get normalTexture(){return this[b](),this[xr]}get occlusionTexture(){return this[b](),this[Mr]}get emissiveTexture(){return this[b](),this[Ar]}get emissiveFactor(){return this[b](),this[I].emissive.toArray()}get index(){return this[Er]}[Ui](){return this[Bi]}hasVariant(t){const e=this[_r].get(t);return e!=null&&this[Bi].has(e.index)}setEmissiveFactor(t){this[b]();const e=this.colorFromRgb(t);for(const i of this[T])i.emissive.set(e);this[R]()}[ks](){return this[I].transparent?"BLEND":this[I].alphaTest>0?"MASK":"OPAQUE"}[Tr](){this[b]();for(const t of this[T])this[ks]()==="MASK"?t.alphaTest==null&&(t.alphaTest=.5):t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(t){this[b]();for(const e of this[T])e.alphaTest=t,e.needsUpdate=!0;this[Tr](),this[R]()}getAlphaCutoff(){return this[b](),this[I].alphaTest}setDoubleSided(t){this[b]();for(const e of this[T])e.side=t?Gi:bo,e.needsUpdate=!0;this[R]()}getDoubleSided(){return this[b](),this[I].side==Gi}setAlphaMode(t){this[b]();const e=(i,s)=>{i.transparent=s,i.depthWrite=!s};for(const i of this[T])e(i,t==="BLEND"),t==="MASK"?i.alphaTest=.5:i.alphaTest=void 0,i.needsUpdate=!0;this[R]()}getAlphaMode(){return this[b](),this[ks]()}get emissiveStrength(){return this[b](),this[I].emissiveIntensity}setEmissiveStrength(t){this[b]();for(const e of this[T])e.emissiveIntensity=t;this[R]()}get clearcoatFactor(){return this[b](),this[I].clearcoat}get clearcoatRoughnessFactor(){return this[b](),this[I].clearcoatRoughness}get clearcoatTexture(){return this[b](),this[j].get(x.Clearcoat)}get clearcoatRoughnessTexture(){return this[b](),this[j].get(x.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[b](),this[j].get(x.ClearcoatNormal)}get clearcoatNormalScale(){return this[b](),this[I].clearcoatNormalScale.x}setClearcoatFactor(t){this[b]();for(const e of this[T])e.clearcoat=t;this[R]()}setClearcoatRoughnessFactor(t){this[b]();for(const e of this[T])e.clearcoatRoughness=t;this[R]()}setClearcoatNormalScale(t){this[b]();for(const e of this[T])e.clearcoatNormalScale=new yt(t,t);this[R]()}get ior(){return this[b](),this[I].ior}setIor(t){this[b]();for(const e of this[T])e.ior=t;this[R]()}get sheenColorFactor(){return this[b](),this[I].sheenColor.toArray()}get sheenColorTexture(){return this[b](),this[j].get(x.SheenColor)}get sheenRoughnessFactor(){return this[b](),this[I].sheenRoughness}get sheenRoughnessTexture(){return this[b](),this[j].get(x.SheenRoughness)}setSheenColorFactor(t){this[b]();const e=this.colorFromRgb(t);for(const i of this[T])i.sheenColor.set(e),i.sheen=1;this[R]()}setSheenRoughnessFactor(t){this[b]();for(const e of this[T])e.sheenRoughness=t,e.sheen=1;this[R]()}get transmissionFactor(){return this[b](),this[I].transmission}get transmissionTexture(){return this[b](),this[j].get(x.Transmission)}setTransmissionFactor(t){this[b]();for(const e of this[T])e.transmission=t;this[R]()}get thicknessFactor(){return this[b](),this[I].thickness}get thicknessTexture(){return this[b](),this[j].get(x.Thickness)}get attenuationDistance(){return this[b](),this[I].attenuationDistance}get attenuationColor(){return this[b](),this[I].attenuationColor.toArray()}setThicknessFactor(t){this[b]();for(const e of this[T])e.thickness=t;this[R]()}setAttenuationDistance(t){this[b]();for(const e of this[T])e.attenuationDistance=t;this[R]()}setAttenuationColor(t){this[b]();const e=this.colorFromRgb(t);for(const i of this[T])i.attenuationColor.set(e);this[R]()}get specularFactor(){return this[b](),this[I].specularIntensity}get specularTexture(){return this[b](),this[j].get(x.Specular)}get specularColorFactor(){return this[b](),this[I].specularColor.toArray()}get specularColorTexture(){return this[b](),this[j].get(x.SheenColor)}setSpecularFactor(t){this[b]();for(const e of this[T])e.specularIntensity=t;this[R]()}setSpecularColorFactor(t){this[b]();const e=this.colorFromRgb(t);for(const i of this[T])i.specularColor.set(e);this[R]()}get iridescenceFactor(){return this[b](),this[I].iridescence}get iridescenceTexture(){return this[b](),this[j].get(x.Iridescence)}get iridescenceIor(){return this[b](),this[I].iridescenceIOR}get iridescenceThicknessMinimum(){return this[b](),this[I].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[b](),this[I].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[b](),this[j].get(x.IridescenceThickness)}setIridescenceFactor(t){this[b]();for(const e of this[T])e.iridescence=t;this[R]()}setIridescenceIor(t){this[b]();for(const e of this[T])e.iridescenceIOR=t;this[R]()}setIridescenceThicknessMinimum(t){this[b]();for(const e of this[T])e.iridescenceThicknessRange[0]=t;this[R]()}setIridescenceThicknessMaximum(t){this[b]();for(const e of this[T])e.iridescenceThicknessRange[1]=t;this[R]()}get anisotropyStrength(){return this[b](),this[I].anisotropy}get anisotropyRotation(){return this[b](),this[I].anisotropyRotation}get anisotropyTexture(){return this[b](),this[j].get(x.Anisotropy)}setAnisotropyStrength(t){this[b]();for(const e of this[T])e.anisotropy=t;this[R]()}setAnisotropyRotation(t){this[b]();for(const e of this[T])e.anisotropyRotation=t;this[R]()}}let yl=class{constructor(t){this.name="",this.children=new Array,this.name=t}};class zs extends yl{constructor(t,e,i,s){super(t.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=t;const{gltf:n,threeGLTF:a,threeObjectMap:r}=s;this.parser=a.parser,this.modelVariants=i,this.mesh.userData.variantData=i;const l=r.get(t.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const h=t.userData.associations||{};if(h.meshes==null){console.error("Mesh is missing primitive index association");return}const u=((n.meshes||[])[h.meshes].primitives||[])[h.primitives];if(u==null){console.error("Mesh primitive definition is missing.");return}if(u.material!=null)this.materials.set(u.material,e[u.material]);else{const p=e.findIndex(m=>m.name==="Default");p>=0?this.materials.set(p,e[p]):console.warn("gltfPrimitive has no material!")}if(u.extensions&&u.extensions.KHR_materials_variants){const p=u.extensions.KHR_materials_variants,y=a.parser.json.extensions.KHR_materials_variants.variants;for(const v of p.mappings){const M=e[v.material];this.materials.set(v.material,M);for(const F of v.variants){const{name:A}=y[F];this.variantToMaterialMap.set(F,M),M[Ui]().add(F),i.has(A)||i.set(A,{name:A,index:F})}}}}async setActiveMaterial(t){const e=this.materials.get(t);if(e!=null&&t!==this.activeMaterialIdx){this.mesh.material=await e[In]();const{normalScale:i}=this.mesh.material;i!=null&&i.y*i.x<0!=(this.mesh.geometry.attributes.tangent==null)&&this.parser.assignFinalMaterial(this.mesh),this.activeMaterialIdx=t}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(t){return this.materials.get(t)}async enableVariant(t){if(t==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(t)){const e=this.modelVariants.get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(this.variantToMaterialMap!=null&&t!=null){const e=this.variantToMaterialMap.get(t);if(e!=null)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const t of this.variantToMaterialMap.keys()){const e=this.mesh.userData.variantMaterials.get(t);if(e.material!=null)continue;const i=await this.enableVariantHelper(t);i!=null&&(e.material=i)}}get variantInfo(){return this.variantToMaterialMap}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this.modelVariants.has(e)||this.modelVariants.set(e,{name:e,index:this.modelVariants.size});const s=this.modelVariants.get(e).index;return t[Ui]().add(s),this.variantToMaterialMap.set(s,t),this.materials.set(t.index,t),this.updateVariantUserData(s,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;e?.delete(t)}}updateVariantUserData(t,e){e[Ui]().add(t),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(t,{material:e[T].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this.modelVariants.get(t);return e!=null&&this.variantInfo.has(e.index)?(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1):!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rr,Cr,Lr,Ir,$r,Dr;const Ft=Symbol("materials"),Ai=Symbol("hierarchy"),Or=Symbol("roots"),mt=Symbol("primitives"),bl=Symbol("prepareVariantsForExport"),wl=Symbol("switchVariant"),Sl=Symbol("materialFromPoint"),$n=Symbol("nodeFromPoint"),xl=Symbol("nodeFromIndex"),U=Symbol("variantData"),Dn=Symbol("availableVariants"),Hs=Symbol("modelOnUpdate"),Pr=Symbol("cloneMaterial");class Mu{constructor(t,e,i,s){this.gltf=t,this.gltfElementMap=e,this.mapKey=i,this.doLazyLoad=s}}class Au{constructor(t,e=()=>{}){this[Rr]=new Array,this[Cr]=new Array,this[Lr]=new Array,this[Ir]=new Array,this[$r]=()=>{},this[Dr]=new Map,this[Hs]=e;const{gltf:i,threeGLTF:s,gltfElementMap:n}=t;for(const[l,h]of i.materials.entries()){const d=n.get(h);if(d!=null)this[Ft].push(new Bs(e,l,!0,this[U],d,h.name));else{const u=(i.materials||[])[l],p=l,m=async()=>{const y=await s.parser.getDependency("material",p),v=new Set;return n.set(u,v),v.add(y),{set:v,material:y}};this[Ft].push(new Bs(e,l,!1,this[U],d,h.name,new Mu(i,n,u,m)))}}const a=new Map,r=new Array;for(const l of s.scene.children)r.push(l);for(;r.length>0;){const l=r.pop();let h=null;l instanceof q?(h=new zs(l,this.materials,this[U],t),this[mt].push(h)):h=new yl(l.name);const d=a.get(l);d!=null?d.children.push(h):this[Or].push(h),this[Ai].push(h);for(const c of l.children)r.push(c),a.set(l,h)}}get materials(){return this[Ft]}[(Rr=Ft,Cr=Ai,Lr=Or,Ir=mt,$r=Hs,Dr=U,Dn)](){const t=Array.from(this[U].values());return t.sort((e,i)=>e.index-i.index),t.map(e=>e.name)}getMaterialByName(t){const e=this[Ft].filter(i=>i.name===t);return e.length>0?e[0]:null}[xl](t,e){const i=this[Ai].find(s=>{if(s instanceof zs){const{meshes:n,primitives:a}=s.mesh.userData.associations;if(n==t&&a==e)return!0}return!1});return i??null}[$n](t){return this[Ai].find(e=>e instanceof zs&&e.mesh===t.object)}[Sl](t){return this[$n](t).getActiveMaterial()}async[wl](t){for(const e of this[mt])await e.enableVariant(t);for(const e of this.materials)e[je](!1);for(const e of this[mt])this.materials[e.getActiveMaterial().index][je](!0)}async[bl](){const t=new Array;for(const e of this[mt])t.push(e.instantiateVariants());await Promise.all(t)}[Pr](t,e){const i=this.materials[t];i.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const s=i[T],n=new Set;for(const[r,l]of s.entries()){const h=l.clone();h.name=e+(s.size>1?"_inst"+r:""),n.add(h)}const a=new Bs(this[Hs],this[Ft].length,!1,this[U],n,e);return this[Ft].push(a),a}createMaterialInstanceForVariant(t,e,i,s=!0){let n=null;for(const a of this[mt]){const r=this[U].get(i);r!=null&&a.variantInfo.has(r.index)||a.getMaterial(t)!=null&&(this.hasVariant(i)||this.createVariant(i),n==null&&(n=this[Pr](t,e)),a.addVariant(n,i))}if(s&&n!=null){n[je](!0),this.materials[t][je](!1);for(const a of this[mt])a.enableVariant(i)}return n}createVariant(t){this[U].has(t)?console.warn(`Variant '${t}'' already exists`):this[U].set(t,{name:t,index:this[U].size})}hasVariant(t){return this[U].has(t)}setMaterialToVariant(t,e){if(this[Dn]().find(i=>i===e)==null){console.warn(`Can't add material to '${e}', the variant does not exist.'`);return}if(t<0||t>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const i of this[mt]){const s=i.getMaterial(t);s!=null&&i.addVariant(s,e)}}updateVariantName(t,e){const i=this[U].get(t);i!=null&&(i.name=e,this[U].set(e,i),this[U].delete(t))}deleteVariant(t){const e=this[U].get(t);if(e!=null){for(const i of this.materials)i.hasVariant(t)&&i[Bi].delete(e.index);for(const i of this[mt])i.deleteVariant(e.index);this[U].delete(t)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var js=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};const zi=Symbol("currentGLTF"),Hi=Symbol("originalGltfJson"),Bt=Symbol("model"),Gs=Symbol("getOnUpdateMethod"),Oe=Symbol("buildTexture"),Tu=o=>{var t,e,i;class s extends o{constructor(){super(...arguments),this[t]=void 0,this[e]=null,this[i]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Bt]}get availableVariants(){return this.model?this.model[Dn]():[]}get originalGltfJson(){return this[Hi]}[(t=Bt,e=zi,i=Hi,Gs)](){return()=>{this[B]()}}[Oe](a){return a.colorSpace=is,a.wrapS=qi,a.wrapT=qi,new ml(this[Gs](),a)}async createTexture(a,r="image/png"){const{textureUtils:l}=this[C],h=await l.loadImage(a);return h.userData.mimeType=r,this[Oe](h)}async createLottieTexture(a,r=1){const{textureUtils:l}=this[C],h=await l.loadLottie(a,r);return this[Oe](h)}createVideoTexture(a){const r=document.createElement("video");r.crossOrigin=this.withCredentials?"use-credentials":"anonymous",r.src=a,r.muted=!0,r.playsInline=!0,r.loop=!0,r.play();const l=new Xl(r);return this[Oe](l)}createCanvasTexture(){const a=document.createElement("canvas"),r=new Kl(a);return this[Oe](r)}async updated(a){if(super.updated(a),a.has("variantName")){const r=this[Wt].beginActivity("variant-update");r(.1);const l=this[Bt],{variantName:h}=this;l!=null&&(await l[wl](h),this[B](),this.dispatchEvent(new CustomEvent("variant-applied"))),r(1)}if(a.has("orientation")||a.has("scale")){if(!this.loaded)return;const r=this[g];r.applyTransform(),r.updateBoundingBox(),r.updateShadow(),this[C].arRenderer.onUpdateScene(),this[B]()}}[It](){super[It]();const{currentGLTF:a}=this[g];if(a!=null){const{correlatedSceneGraph:r}=a;r!=null&&a!==this[zi]&&(this[Bt]=new Au(r,this[Gs]()),this[Hi]=JSON.parse(JSON.stringify(r.gltf))),"variants"in a.userData&&this.requestUpdate("variantName")}this[zi]=a}async exportScene(a){const r=this[g];return new Promise(async(l,h)=>{const d={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(d,a),d.animations=r.animations,d.truncateDrawRange=!0;const c=r.shadow;let u=!1;c!=null&&(u=c.visible,c.visible=!1),await this[Bt][bl](),new Yl().register(m=>new Zh(m)).parse(r.model,m=>l(new Blob([d.binary?m:JSON.stringify(m)],{type:d.binary?"application/octet-stream":"application/json"})),()=>h("glTF export failed"),d),c!=null&&(c.visible=u)})}materialFromPoint(a,r){const l=this[Bt];if(l==null)return null;const h=this[g],d=h.getNDC(a,r),c=h.hitFromPoint(d);return c==null||c.face==null?null:l[Sl](c)}}return js([S({type:String,attribute:"variant-name"})],s.prototype,"variantName",void 0),js([S({type:String,attribute:"orientation"})],s.prototype,"orientation",void 0),js([S({type:String,attribute:"scale"})],s.prototype,"scale",void 0),s};/* @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends q{constructor(){super(void 0,new ii({depthWrite:!1})),this.height=0,this.radius=0,this.resolution=0,this.userData.noHit=!0}get map(){return this.material.map}set map(t){this.material.map=t}isUsable(){return this.height>0&&this.radius>0&&this.geometry!=null&&this.map!=null}updateGeometry(t=this.height,e=this.radius,i=128){(t!=this.height||e!=this.radius||i!=this.resolution)&&(this.height=t,this.radius=e,this.resolution=i,t>0&&e>0&&(this.geometry.dispose(),this.geometry=_u(t,e,i)))}}function _u(o,t,e){const i=new Zl(t,2*e,e);i.scale(1,1,-1);const s=i.getAttribute("position"),n=new _;for(let a=0;a<s.count;++a)if(n.fromBufferAttribute(s,a),n.y<0){const r=-o*3/2,l=n.y<r?-o/n.y:1-n.y*n.y/(3*r*r);n.multiplyScalar(l),n.toArray(s.array,3*a)}return s.needsUpdate=!0,i}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new _,Ws=new _,qs=new _,Ei=new Nn,Fr=new Co,kr=new Ql;class Ml extends Jl{constructor(t){super(document.createElement("div")),this.normal=new _(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal),this.surface=t.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(t){if(t==null)return;const e=vt(t)[0].terms;for(let i=0;i<3;++i)this.position.setComponent(i,nt(e[i]).number);this.updateMatrixWorld()}updateNormal(t){if(t==null)return;const e=vt(t)[0].terms;for(let i=0;i<3;++i)this.normal.setComponent(i,e[i].number)}updateSurface(t){if(!t&&this.initialized)return;const{mesh:e,tri:i,bary:s}=this;if(e==null||i==null||s==null)return;e.getVertexPosition(i.x,Ti),e.getVertexPosition(i.y,Ws),e.getVertexPosition(i.z,qs),Ti.toArray(Ei.elements,0),Ws.toArray(Ei.elements,3),qs.toArray(Ei.elements,6),this.position.copy(s).applyMatrix3(Ei);const n=this.parent;n.worldToLocal(e.localToWorld(this.position)),Fr.set(Ti,Ws,qs),Fr.getNormal(this.normal).transformDirection(e.matrixWorld);const a=n.parent;kr.setFromAxisAngle(Ti.set(0,1,0),-a.yaw),this.normal.applyQuaternion(kr)}orient(t){this.pivot.style.transform=`rotate(${t}rad)`}updateVisibility(t){this.element.classList.toggle("hide",!t),this.slot.assignedNodes().forEach(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const i=e,s=i.dataset.visibilityAttribute;if(s!=null){const n=`data-${s}`;i.toggleAttribute(n,t)}i.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}))}),this.initialized=!0}}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=9,Ru=6,Xs=2,Cu=.3;class Lu extends Lo{constructor(t,e,i){super(),this.camera=new Vn,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new th,this.horizontalBlurMaterial=new Xe(eh),this.verticalBlurMaterial=new Xe(ih),this.intensity=0,this.softness=1,this.boundingBox=new de,this.size=new _,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:s}=this;s.rotation.x=Math.PI/2,s.left=-.5,s.right=.5,s.bottom=-.5,s.top=.5,this.add(s);const n=new ti,a=new ii({opacity:1,transparent:!0,side:Un});this.floor=new q(n,a),this.floor.userData.noHit=!0,s.add(this.floor),this.blurPlane=new q(n),this.blurPlane.visible=!1,s.add(this.blurPlane),t.target.add(this),this.depthMaterial.onBeforeCompile=function(r){r.fragmentShader=r.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(t,e,i)}setScene(t,e,i){const{boundingBox:s,size:n,rotation:a,position:r}=this;if(this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size),this.maxDimension=Math.max(n.x,n.y,n.z)*(this.isAnimated?Xs:1),this.boundingBox.getCenter(r),i==="back"){const{min:l,max:h}=s;[l.y,l.z]=[l.z,l.y],[h.y,h.z]=[h.z,h.y],[n.y,n.z]=[n.z,n.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const l=s.min.y,h=s.max.y;n.y=this.maxDimension,s.expandByVector(n.subScalar(this.maxDimension).multiplyScalar(-.5)),s.min.y=l,s.max.y=h,n.set(this.maxDimension,h-l,this.maxDimension)}i==="bottom"?r.y=s.min.y:r.z=s.min.y,this.setSoftness(e)}setSoftness(t){this.softness=t;const{size:e,camera:i}=this,s=this.isAnimated?Xs:1,n=s*Math.pow(2,Nr-t*(Nr-Ru));this.setMapSize(n);const a=e.y/2,r=e.y*s;i.near=0,i.far=qn(r,a,t),this.depthMaterial.opacity=1/t,i.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(t){const{size:e}=this;this.isAnimated&&(t*=Xs);const i=Math.floor(e.x>e.z?t:t*e.x/e.z),s=Math.floor(e.x>e.z?t*e.z/e.x:t),n=10,a=n+i,r=n+s;if(this.renderTarget!=null&&(this.renderTarget.width!==a||this.renderTarget.height!==r)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const l={format:be};this.renderTarget=new qe(a,r,l),this.renderTargetBlur=new qe(a,r,l),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(e.x*(1+n/i),e.z*(1+n/s),1),this.needsUpdate=!0}setIntensity(t){this.intensity=t,t>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=t*qn(Cu,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(t){this.floor.position.z=-t+this.gap()}gap(){return .001*this.maxDimension}render(t,e){e.overrideMaterial=this.depthMaterial;const i=t.getClearAlpha();t.setClearAlpha(0),this.floor.visible=!1;const s=t.xr.enabled;t.xr.enabled=!1;const n=t.getRenderTarget();t.setRenderTarget(this.renderTarget),t.render(e,this.camera),e.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(t),t.xr.enabled=s,t.setRenderTarget(n),t.setClearAlpha(i)}blurShadow(t){const{camera:e,horizontalBlurMaterial:i,verticalBlurMaterial:s,renderTarget:n,renderTargetBlur:a,blurPlane:r}=this;r.visible=!0,r.material=i,i.uniforms.h.value=1/this.renderTarget.width,i.uniforms.tDiffuse.value=this.renderTarget.texture,t.setRenderTarget(a),t.render(r,e),r.material=s,s.uniforms.v.value=1/this.renderTarget.height,s.uniforms.tDiffuse.value=this.renderTargetBlur.texture,t.setRenderTarget(n),t.render(r,e),r.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=10,Ks=100,Ys=new _,Ur=new _,Br=new _,Zs=new sh,Iu=new _,Pe=new yt;class $u extends ei{constructor({canvas:t,element:e,width:i,height:s}){super(),this.annotationRenderer=new nh,this.effectRenderer=null,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new xn(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Lo,this.animationNames=[],this.boundingBox=new de,this.boundingSphere=new yo,this.size=new _,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.toneMapping=kn,this.canScale=!0,this.isDirty=!1,this.goalTarget=new _,this.targetDamperX=new W,this.targetDamperY=new W,this.targetDamperZ=new W,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.groundedSkybox=new Eu,this.name="ModelScene",this.element=e,this.canvas=t,this.camera=new xn(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(i,s),this.target.name="Target",this.mixer=new ah(this.target);const{domElement:n}=this.annotationRenderer,{style:a}=n;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(n),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(t){this.reset(),this._model=t,this.target.add(t),await this.setupScene()}async setSource(t,e=()=>{}){if(!t||t===this.url){e(1);return}if(this.reset(),this.url=t,this.externalRenderer!=null){const r=await this.externalRenderer.load(e);this.boundingSphere.radius=r.framedRadius,this.idealAspect=r.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let i;try{i=await new Promise(async(r,l)=>{this.cancelPendingSourceChange=()=>l();try{const h=await this.element[C].loader.load(t,this.element,e);r(h)}catch(h){l(h)}})}catch(r){if(r==null)return;throw r}this.cancelPendingSourceChange=null,this.reset(),this.url=t,this._currentGLTF=i,i!=null&&(this._model=i.scene,this.target.add(i.scene));const{animations:s}=i,n=new Map,a=[];for(const r of s)n.set(r.name,r),a.push(r.name);this.animations=s,this.animationsByName=n,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.setGroundedSkybox()}reset(){this.url=null,this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:t}=this;t!=null&&(t.removeFromParent(),this._model=null);const e=this._currentGLTF;e!=null&&(e.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[zi]=null,this.element[Hi]=null,this.element[Bt]=null}get currentGLTF(){return this._currentGLTF}setSize(t,e){if(!(this.width===t&&this.height===e)){if(this.width=Math.max(t,1),this.height=Math.max(e,1),this.annotationRenderer.setSize(t,e),this.aspect=this.width/this.height,this.externalRenderer!=null){const i=Rn();this.externalRenderer.resize(t*i,e*i)}this.queueRender()}}markBakedShadow(t){t.userData.noHit=!0,this.bakedShadows.add(t)}unmarkBakedShadow(t){t.userData.noHit=!1,t.visible=!0,this.bakedShadows.delete(t),this.boundingBox.expandByObject(t)}findBakedShadows(t){const e=new de;t.traverse(i=>{const s=i;if(!s.material||!s.material.transparent)return;e.setFromObject(s);const a=e.getSize(Iu),r=Math.min(a.x,a.y,a.z);Math.max(a.x,a.y,a.z)<Ks*r||this.markBakedShadow(s)})}checkBakedShadows(){const{min:t,max:e}=this.boundingBox,i=new de;this.boundingBox.getSize(this.size);for(const s of this.bakedShadows)i.setFromObject(s),!(i.min.y<t.y+this.size.y/Ks&&i.min.x<=t.x&&i.max.x>=e.x&&i.min.z<=t.z&&i.max.z>=e.z)&&(i.min.z<t.z+this.size.z/Ks&&i.min.x<=t.x&&i.max.x>=e.x&&i.min.y<=t.y&&i.max.y>=e.y||this.unmarkBakedShadow(s))}applyTransform(){const{model:t}=this;if(t==null)return;const e=vt(this.element.orientation)[0].terms,i=nt(e[0]).number,s=nt(e[1]).number,n=nt(e[2]).number;t.quaternion.setFromEuler(new go(s,n,i,"YXZ"));const a=vt(this.element.scale)[0].terms;t.scale.set(a[0].number,a[1].number,a[2].number)}updateBoundingBox(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.findBakedShadows(t);const e=(i,s)=>i.expandByPoint(s);this.setBakedShadowVisibility(!1),this.boundingBox=li(t,e,new de),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(i=>this.unmarkBakedShadow(i)),this.boundingBox=li(t,e,new de)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(t)}async updateFraming(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.setBakedShadowVisibility(!1);const{center:e}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,e.copy(this.getTarget());const i=(n,a)=>Math.max(n,e.distanceToSquared(a));this.boundingSphere.radius=Math.sqrt(li(t,i,0));const s=(n,a)=>{a.sub(e);const r=Math.sqrt(a.x*a.x+a.z*a.z);return Math.max(n,r/(this.idealCameraDistance()-Math.abs(a.y)))};this.idealAspect=li(t,s,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(t)}setBakedShadowVisibility(t=this.shadowIntensity<=0){for(const e of this.bakedShadows)e.visible=t}idealCameraDistance(){const t=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(t)}adjustedFoV(t){const e=Math.tan(t/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(e)*180/Math.PI}getNDC(t,e){if(this.xrCamera!=null)Pe.set(t/window.screen.width,e/window.screen.height);else{const i=this.element.getBoundingClientRect();Pe.set((t-i.x)/this.width,(e-i.y)/this.height)}return Pe.multiplyScalar(2).subScalar(1),Pe.y*=-1,Pe}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(t,e){this.element[C].arRenderer.presentedScene!==this&&(this.environment=t,this.setBackground(e),this.queueRender())}setBackground(t){this.groundedSkybox.map=t,this.groundedSkybox.isUsable()?(this.target.add(this.groundedSkybox),this.background=null):(this.target.remove(this.groundedSkybox),this.background=t)}farRadius(){return this.boundingSphere.radius*(this.groundedSkybox.parent!=null?Vr:1)}setGroundedSkybox(){const t=vt(this.element.skyboxHeight)[0].terms[0],e=nt(t).number,i=Vr*this.boundingSphere.radius;this.groundedSkybox.updateGeometry(e,i),this.groundedSkybox.position.y=e-(this.shadow?2*this.shadow.gap():0),this.setBackground(this.groundedSkybox.map)}setTarget(t,e,i){this.goalTarget.set(-t,-e,-i)}setTargetDamperDecayTime(t){this.targetDamperX.setDecayTime(t),this.targetDamperY.setDecayTime(t),this.targetDamperZ.setDecayTime(t)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(Go)}updateTarget(t){const e=this.goalTarget,i=this.target.position;if(e.equals(i))return!1;{const s=this.boundingSphere.radius/10;let{x:n,y:a,z:r}=i;return n=this.targetDamperX.update(n,e.x,t,s),a=this.targetDamperY.update(a,e.y,t,s),r=this.targetDamperZ.update(r,e.z,t,s),this.groundedSkybox.position.x=-n,this.groundedSkybox.position.z=-r,this.target.position.set(n,a,r),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(t,e){const{x:i,z:s}=this.position;this.yaw=Math.atan2(t-i,e-s)}get model(){return this._model}set yaw(t){this.rotation.y=t,this.groundedSkybox.rotation.y=-t,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(t){this.mixer.setTime(t),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const t=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===Io&&(t&1)===1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(t){this.mixer.timeScale=t}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(t=null,e=0,i=$o,s=1/0){if(this._currentGLTF==null)return;const{animations:n}=this;if(n==null||n.length===0)return;let a=null;if(t!=null&&(a=this.animationsByName.get(t),a==null)){const r=parseInt(t);!isNaN(r)&&r>=0&&r<n.length&&(a=n[r])}a==null&&(a=n[0]);try{const{currentAnimationAction:r}=this,l=this.mixer.clipAction(a,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,r!=null&&l!==r?l.crossFadeFrom(r,e,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(i,s),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(r){console.error(r)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(t){this.mixer.update(t),this.queueShadowRender()}subscribeMixerEvent(t,e){this.mixer.addEventListener(t,e)}updateShadow(){const t=this.shadow;if(t!=null){const e=this.element.arPlacement==="wall"?"back":"bottom";t.setScene(this,this.shadowSoftness,e),t.needsUpdate=!0}}renderShadow(t){const e=this.shadow;e!=null&&e.needsUpdate==!0&&(e.render(t,this),e.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(t){if(this.shadowIntensity=t,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(t<=0&&this.shadow==null))){if(this.shadow==null){const e=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new Lu(this,this.shadowSoftness,e)}this.shadow.setIntensity(t)}}setShadowSoftness(t){this.shadowSoftness=t;const e=this.shadow;e?.setSoftness(t)}setShadowOffset(t){const e=this.shadow;e?.setOffset(t)}hitFromPoint(t,e=this){return Zs.setFromCamera(t,this.getCamera()),Zs.intersectObject(e,!0).find(s=>s.object.visible&&!s.object.userData.noHit)}positionAndNormalFromPoint(t,e=this){var i;const s=this.hitFromPoint(t,e);if(s==null)return null;const n=s.point,a=s.face!=null?s.face.normal.clone().applyNormalMatrix(new Nn().getNormalMatrix(s.object.matrixWorld)):Zs.ray.direction.clone().multiplyScalar(-1),r=(i=s.uv)!==null&&i!==void 0?i:null;return{position:n,normal:a,uv:r}}surfaceFromPoint(t,e=this){const i=this.element.model;if(i==null)return null;const s=this.hitFromPoint(t,e);if(s==null||s.face==null)return null;const n=i[$n](s),{meshes:a,primitives:r}=n.mesh.userData.associations,l=new _,h=new _,d=new _,{a:c,b:u,c:p}=s.face,m=s.object;m.getVertexPosition(c,l),m.getVertexPosition(u,h),m.getVertexPosition(p,d);const y=new Co(l,h,d),v=new _;return y.getBarycoord(m.worldToLocal(s.point),v),`${a} ${r} ${c} ${u} ${p} ${v.x.toFixed(3)} ${v.y.toFixed(3)} ${v.z.toFixed(3)}`}addHotspot(t){this.target.add(t),this.annotationRenderer.domElement.appendChild(t.element)}removeHotspot(t){this.target.remove(t)}forHotspots(t){const{children:e}=this.target;for(let i=0,s=e.length;i<s;i++){const n=e[i];n instanceof Ml&&t(n)}}initializeSurface(t){if(t.surface!=null&&t.mesh==null){const e=vt(t.surface)[0].terms;if(e.length!=8){console.warn(t.surface+" does not have exactly 8 numbers.");return}const i=this.element.model[xl](e[0].number,e[1].number),s=new _(e[2].number,e[3].number,e[4].number);if(i==null){console.warn(t.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");return}const n=i.mesh.geometry.attributes.position.count;if(s.x>=n||s.y>=n||s.z>=n){console.warn(t.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");return}const a=new _(e[5].number,e[6].number,e[7].number);t.mesh=i.mesh,t.tri=s,t.bary=a}}updateSurfaceHotspots(){const t=!this.element.paused;this.forHotspots(e=>{this.initializeSurface(e),e.updateSurface(t)})}updateHotspotsVisibility(t){this.forHotspots(e=>{Ys.copy(t),Ur.setFromMatrixPosition(e.matrixWorld),Ys.sub(Ur),Br.copy(e.normal).transformDirection(this.target.matrixWorld),Ys.dot(Br)<0?e.hide():e.show()})}orientHotspots(t){this.forHotspots(e=>{e.orient(t)})}setHotspotsVisibility(t){this.forHotspots(e=>{e.visible=t})}updateSchema(t){var e;const{schemaElement:i,element:s}=this,{alt:n,poster:a,iosSrc:r}=s;if(t!=null){const l=[{"@type":"MediaObject",contentUrl:t,encodingFormat:((e=t.split(".").pop())===null||e===void 0?void 0:e.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];r&&l.push({"@type":"MediaObject",contentUrl:r,encodingFormat:"model/vnd.usdz+zip"});const h={"@context":"http://schema.org/","@type":"3DModel",image:a??void 0,name:n??void 0,encoding:l};i.textContent=JSON.stringify(h),document.head.appendChild(i)}else i.parentElement!=null&&i.parentElement.removeChild(i)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(t){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0,t),i=>{let s;return s=Math.max(et(i,0,1),e.progress),s!==e.progress&&this.announceTotalProgress(e,s,t),e.progress}}announceTotalProgress(t,e,i){let s=0,n=0;e==1&&(t.completed=!0);for(const l of this.ongoingActivities){const{progress:h}=l;s+=1-h,l.completed&&n++}const a=t.progress;t.progress=e,this.totalProgress+=(e-a)*(1-this.totalProgress)/s;const r=n===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:r,reason:i}})),n===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var os=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},zr,Hr,jr,Gr,Wr,qr,Xr,Kr,Yr,Zr,Jr,Qr,to;const Ou=10,Pu=50,Fu=0,ku=300,Nu=150,_t=document.createElement("canvas"),Js=Symbol("fallbackResizeHandler"),eo=Symbol("defaultAriaLabel"),_i=Symbol("resizeObserver"),ae=Symbol("clearModelTimeout"),Qs=Symbol("onContextLost"),re=Symbol("loaded"),tn=Symbol("status"),en=Symbol("onFocus"),sn=Symbol("onBlur"),pe=Symbol("updateSize"),Ri=Symbol("intersectionObserver"),zt=Symbol("isElementInViewport"),Qi=Symbol("announceModelVisibility"),ve=Symbol("ariaLabel"),On=Symbol("altDefaulted"),Fe=Symbol("statusElement"),ts=Symbol("updateStatus"),Ge=Symbol("loadedTime"),ye=Symbol("updateSource"),io=Symbol("markLoaded"),ji=Symbol("container"),Z=Symbol("input"),Pn=Symbol("canvas"),g=Symbol("scene"),B=Symbol("needsRender"),at=Symbol("tick"),It=Symbol("onModelLoad"),Qe=Symbol("onResize"),C=Symbol("renderer"),Wt=Symbol("progressTracker"),so=Symbol("getLoaded"),qt=Symbol("getModelIsVisible"),Me=Symbol("shouldAttemptPreload"),Tt=o=>({x:o.x,y:o.y,z:o.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Fn=o=>({u:o.x,v:o.y,toString(){return`${this.u} ${this.v}`}});class ai extends Ht{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[zr]=!1,this[Hr]=!1,this[jr]=0,this[Gr]="",this[Wr]=null,this[qr]=la(()=>{const s=this.getBoundingClientRect();this[pe](s)},Pu),this[Xr]=la(s=>{const n=this.modelIsVisible;n!==s&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:n}}))},Fu),this[Kr]=null,this[Yr]=null,this[Zr]=new Du,this[Jr]=()=>{this[Fe].textContent=this[tn]},this[Qr]=()=>{this[Fe].textContent=""},this[to]=s=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:s.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;jh(t),this[ji]=t.querySelector(".container"),this[Z]=t.querySelector(".userInput"),this[Pn]=t.querySelector("canvas"),this[Fe]=t.querySelector("#status"),this[eo]=this[Z].getAttribute("aria-label");let e,i;if(this.isConnected){const s=this.getBoundingClientRect();e=s.width,i=s.height}else e=ku,i=Nu;this[g]=new $u({canvas:this[Pn],element:this,width:e,height:i}),Promise.resolve().then(()=>{this[pe](this.getBoundingClientRect())}),gs&&(this[_i]=new ResizeObserver(s=>{if(!this[C].isPresenting)for(let n of s)n.target===this&&this[pe](n.contentRect)})),vs?this[Ri]=new IntersectionObserver(s=>{for(let n of s)if(n.target===this){const a=this.modelIsVisible;this[zt]=n.isIntersecting,this[Qi](a),this[zt]&&!this.loaded&&this[ye]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[zt]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){k[xt].evictionThreshold=t}static get modelCacheSize(){return k[xt].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),J.singleton.minScale=t}static get minimumRenderScale(){return J.singleton.minScale}get loaded(){return this[so]()}get[(zr=zt,Hr=re,jr=Ge,Gr=tn,Wr=ae,qr=Js,Xr=Qi,Kr=_i,Yr=Ri,Zr=Wt,C)](){return J.singleton}get modelIsVisible(){return this[qt]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),gs?this[_i].observe(this):self.addEventListener("resize",this[Js]),vs&&this[Ri].observe(this),this.addEventListener("focus",this[en]),this.addEventListener("blur",this[sn]);const t=this[C];t.addEventListener("contextlost",this[Qs]),t.registerScene(this[g]),this[ae]!=null&&(self.clearTimeout(this[ae]),this[ae]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),gs?this[_i].unobserve(this):self.removeEventListener("resize",this[Js]),vs&&this[Ri].unobserve(this),this.removeEventListener("focus",this[en]),this.removeEventListener("blur",this[sn]);const t=this[C];t.removeEventListener("contextlost",this[Qs]),t.unregisterScene(this[g]),this[ae]=self.setTimeout(()=>{this[g].dispose(),this[ae]=null},Ou)}updated(t){super.updated(t),t.has("src")&&(this.src==null?(this[re]=!1,this[Ge]=0,this[g].reset()):this.src!==this[g].url&&(this[re]=!1,this[Ge]=0,this[ye]())),t.has("alt")&&this[Z].setAttribute("aria-label",this[ve]),t.has("withCredentials")&&(k.withCredentials=this.withCredentials,this[C].textureUtils.withCredentials=this.withCredentials),t.has("generateSchema")&&(this.generateSchema?this[g].updateSchema(this.src):this[g].updateSchema(null))}toDataURL(t,e){return this[C].displayCanvas(this[g]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,i=t?t.qualityArgument:void 0,s=t?t.idealAspect:void 0,{width:n,height:a,idealAspect:r,aspect:l}=this[g],{dpr:h,scaleFactor:d}=this[C];let c=n*d*h,u=a*d*h,p=0,m=0;if(s===!0)if(r>l){const y=u;u=Math.round(c/r),m=(y-u)/2}else{const y=c;c=Math.round(u*r),p=(y-c)/2}_t.width=c,_t.height=u;try{return new Promise(async(y,v)=>{_t.getContext("2d").drawImage(this[C].displayCanvas(this[g]),p,m,c,u,0,0,c,u),_t.toBlob(M=>{if(!M)return v(new Error("Unable to retrieve canvas blob"));y(M)},e,i)})}finally{this[pe]({width:n,height:a})}}registerEffectComposer(t){t.setRenderer(this[C].threeRenderer),t.setMainCamera(this[g].getCamera()),t.setMainScene(this[g]),this[g].effectRenderer=t}unregisterEffectComposer(){this[g].effectRenderer=null}registerRenderer(t){this[g].externalRenderer=t}unregisterRenderer(){this[g].externalRenderer=null}get[ve](){return this[On]}get[On](){return this.alt==null||this.alt==="null"?this[eo]:this.alt}[so](){return this[re]}[qt](){return this.loaded&&this[zt]}[Me](){return!!this.src&&this[zt]}[pe]({width:t,height:e}){t===0||e===0||(this[ji].style.width=`${t}px`,this[ji].style.height=`${e}px`,this[Qe]({width:t,height:e}))}[at](t,e){var i;(i=this[g].effectRenderer)===null||i===void 0||i.beforeRender(t,e)}[io](){this[re]||(this[re]=!0,this[Ge]=performance.now())}[B](){this[g].queueRender()}[It](){}[ts](t){this[tn]=t;const e=this.getRootNode();e!=null&&e.activeElement===this&&this[Fe].textContent!=t&&(this[Fe].textContent=t)}[(Jr=en,Qr=sn,Qe)](t){this[g].setSize(t.width,t.height)}async[(to=Qs,ye)](){const t=this[g];if(this.loaded||!this[Me]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[ts]("Loading"),t.stopAnimation();const e=this[Wt].beginActivity("model-load"),i=this.src;try{const s=t.setSource(i,a=>e(et(a,0,1)*.95)),n=this[Yi]();await Promise.all([s,n]),this[io](),this[It](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("before-render"))}),await new Promise(a=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:i}})),a()})})})}catch(s){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:s}}))}finally{e(1)}}}os([S({type:String})],ai.prototype,"alt",void 0);os([S({type:String})],ai.prototype,"src",void 0);os([S({type:Boolean,attribute:"with-credentials"})],ai.prototype,"withCredentials",void 0);os([S({type:Boolean,attribute:"generate-schema"})],ai.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};const no=1e3,Ci=Symbol("changeAnimation"),ft=Symbol("paused"),Vu={repetitions:1/0,pingpong:!1},Uu=o=>{var t;class e extends o{constructor(...s){super(s),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[g].subscribeMixerEvent("loop",n=>{const a=n.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:a}}))}),this[g].subscribeMixerEvent("finished",()=>{this[ft]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[g].animationNames:[]}get duration(){return this[g].duration}get paused(){return this[ft]}get currentTime(){return this[g].animationTime}set currentTime(s){this[g].animationTime=s,this[B]()}get timeScale(){return this[g].animationTimeScale}set timeScale(s){this[g].animationTimeScale=s}pause(){this[ft]||(this[ft]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(s){this.availableAnimations.length>0&&(this[ft]=!1,this[Ci](s),this.dispatchEvent(new CustomEvent("play")))}[(t=ft,It)](){super[It](),this[ft]=!0,this.animationName!=null&&this[Ci](),this.autoplay&&this.play()}[at](s,n){super[at](s,n),!(this[ft]||!this[qt]()&&!this[C].isPresenting)&&(this[g].updateAnimation(n/no),this[B]())}updated(s){super.updated(s),s.has("autoplay")&&this.autoplay&&this.play(),s.has("animationName")&&this[Ci]()}[Ci](s=Vu){var n;const a=(n=s.repetitions)!==null&&n!==void 0?n:1/0,r=s.pingpong?Io:a===1?rh:$o;this[g].playAnimation(this.animationName,this.animationCrossfadeDuration/no,r,a),this[ft]&&(this[g].updateAnimation(0),this[B]())}}return nn([S({type:Boolean})],e.prototype,"autoplay",void 0),nn([S({type:String,attribute:"animation-name"})],e.prototype,"animationName",void 0),nn([S({type:Number,attribute:"animation-crossfade-duration"})],e.prototype,"animationCrossfadeDuration",void 0),e};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=Symbol("hotspotMap"),an=Symbol("mutationCallback"),ke=Symbol("observer"),rn=Symbol("addHotspot"),ao=Symbol("removeHotspot"),on=new vo,Bu=o=>{var t,e,i;class s extends o{constructor(){super(...arguments),this[t]=new Map,this[e]=a=>{a.forEach(r=>{(!(r instanceof MutationRecord)||r.type==="childList")&&(r.addedNodes.forEach(l=>{this[rn](l)}),r.removedNodes.forEach(l=>{this[ao](l)}),this[B]())})},this[i]=new MutationObserver(this[an])}connectedCallback(){super.connectedCallback();for(let r=0;r<this.children.length;++r)this[rn](this.children[r]);const{ShadyDOM:a}=self;a==null?this[ke].observe(this,{childList:!0}):this[ke]=a.observeChildren(this,this[an])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[ke].disconnect():a.unobserveChildren(this[ke])}[(t=kt,e=an,i=ke,at)](a,r){super[at](a,r);const l=this[g],{annotationRenderer:h}=l,d=l.getCamera();l.shouldRender()&&(l.updateSurfaceHotspots(),l.updateHotspotsVisibility(d.position),h.domElement.style.display="",h.render(l,d))}updateHotspot(a){const r=this[kt].get(a.name);r!=null&&(r.updatePosition(a.position),r.updateNormal(a.normal),r.surface=a.surface,this[B]())}queryHotspot(a){const r=this[kt].get(a);if(r==null)return null;const l=Tt(r.position),h=Tt(r.normal),d=r.facingCamera,c=this[g],u=c.getCamera(),p=new _;p.setFromMatrixPosition(r.matrixWorld),p.project(u);const m=c.width/2,y=c.height/2;p.x=p.x*m+m,p.y=-(p.y*y)+y;const v=Tt(new _(p.x,p.y,p.z));return!Number.isFinite(v.x)||!Number.isFinite(v.y)?null:{position:l,normal:h,canvasPosition:v,facingCamera:d}}positionAndNormalFromPoint(a,r){const l=this[g],h=l.getNDC(a,r),d=l.positionAndNormalFromPoint(h);if(d==null)return null;on.copy(l.target.matrixWorld).invert();const c=Tt(d.position.applyMatrix4(on)),u=Tt(d.normal.transformDirection(on));let p=null;return d.uv!=null&&(p=Fn(d.uv)),{position:c,normal:u,uv:p}}surfaceFromPoint(a,r){const l=this[g],h=l.getNDC(a,r);return l.surfaceFromPoint(h)}[rn](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let r=this[kt].get(a.slot);r!=null?r.increment():(r=new Ml({name:a.slot,position:a.dataset.position,normal:a.dataset.normal,surface:a.dataset.surface}),this[kt].set(a.slot,r),this[g].addHotspot(r)),this[g].queueRender()}[ao](a){if(!(a instanceof HTMLElement))return;const r=this[kt].get(a.slot);r&&(r.decrement()&&(this[g].removeHotspot(r),this[kt].delete(a.slot)),this[g].queueRender())}}return s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=o=>t=>{try{const e=vt(t),i=(e.length?e[0].terms:[]).filter(s=>s&&s.type==="ident").map(s=>s.value).filter(s=>o.indexOf(s)>-1);return new Set(i)}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};let ro=!1,oo=!1;const lo="#model-viewer-no-ar-fallback",Hu=zu(["quick-look","scene-viewer","webxr","none"]),ju="webxr scene-viewer quick-look",X={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},gt=Symbol("arButtonContainer"),ho=Symbol("enterARWithWebXR"),co=Symbol("openSceneViewer"),uo=Symbol("openIOSARQuickLook"),Gu=Symbol("canActivateAR"),Li=Symbol("arMode"),ln=Symbol("arModes"),le=Symbol("arAnchor"),Ii=Symbol("preload"),$i=Symbol("onARButtonContainerClick"),hn=Symbol("onARStatus"),cn=Symbol("onARTracking"),un=Symbol("onARTap"),Ne=Symbol("selectARMode"),dn=Symbol("triggerLoad"),Wu=o=>{var t,e,i,s,n,a,r,l,h,d;class c extends o{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=ju,this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[e]=this.shadowRoot.querySelector(".ar-button"),this[i]=document.createElement("a"),this[s]=new Set,this[n]=X.NONE,this[a]=!1,this[r]=p=>{p.preventDefault(),this.activateAR()},this[l]=({status:p})=>{(p===At.NOT_PRESENTING||this[C].arRenderer.presentedScene===this[g])&&(this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}})),p===At.NOT_PRESENTING?this.removeAttribute("ar-tracking"):p===At.SESSION_STARTED&&this.setAttribute("ar-tracking",Cn.TRACKING))},this[h]=({status:p})=>{this.setAttribute("ar-tracking",p),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:p}}))},this[d]=p=>{p.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Li]!==X.NONE}connectedCallback(){super.connectedCallback(),this[C].arRenderer.addEventListener("status",this[hn]),this.setAttribute("ar-status",At.NOT_PRESENTING),this[C].arRenderer.addEventListener("tracking",this[cn]),this[le].addEventListener("message",this[un])}disconnectedCallback(){super.disconnectedCallback(),this[C].arRenderer.removeEventListener("status",this[hn]),this[C].arRenderer.removeEventListener("tracking",this[cn]),this[le].removeEventListener("message",this[un])}update(p){super.update(p),p.has("arScale")&&(this[g].canScale=this.arScale!=="fixed"),p.has("arPlacement")&&(this[g].updateShadow(),this[B]()),p.has("arModes")&&(this[ln]=Hu(this.arModes)),(p.has("ar")||p.has("arModes")||p.has("src")||p.has("iosSrc"))&&this[Ne]()}async activateAR(){switch(this[Li]){case X.QUICK_LOOK:await this[uo]();break;case X.WEBXR:await this[ho]();break;case X.SCENE_VIEWER:this[co]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(t=Gu,e=gt,i=le,s=ln,n=Li,a=Ii,r=$i,l=hn,h=cn,d=un,Ne)](){var p;let m=X.NONE;if(this.ar){if(this.src!=null)for(const y of this[ln]){if(y==="webxr"&&zo&&!ro&&await this[C].arRenderer.supportsPresentation()){m=X.WEBXR;break}if(y==="scene-viewer"&&!oo&&(Rh||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((p=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||p===void 0)&&p.includes("XR")))){m=X.SCENE_VIEWER;break}if(y==="quick-look"&&ra){m=X.QUICK_LOOK;break}}m===X.NONE&&this.iosSrc!=null&&ra&&(m=X.QUICK_LOOK)}if(m!==X.NONE)this[gt].classList.add("enabled"),this[gt].addEventListener("click",this[$i]);else if(this[gt].classList.contains("enabled")){this[gt].removeEventListener("click",this[$i]),this[gt].classList.remove("enabled");const y=At.FAILED;this.setAttribute("ar-status",y),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:y}}))}this[Li]=m}async[ho](){console.log("Attempting to present in AR with WebXR..."),await this[dn]();try{this[gt].removeEventListener("click",this[$i]);const{arRenderer:p}=this[C];p.placeOnWall=this.arPlacement==="wall",await p.present(this[g],this.xrEnvironment)}catch(p){console.warn("Error while trying to present in AR with WebXR"),console.error(p),await this[C].arRenderer.stopPresenting(),ro=!0,console.warn("Falling back to next ar-mode"),await this[Ne](),this.activateAR()}finally{this[Ne]()}}async[dn](){this.loaded||(this[Ii]=!0,this[ye](),await Oh(this,"load"),this[Ii]=!1)}[Me](){return super[Me]()||this[Ii]}[co](){const p=self.location.toString(),m=new URL(p),y=new URL(this.src,p);y.hash&&(y.hash="");const v=new URLSearchParams(y.search);if(m.hash=lo,v.set("mode","ar_preferred"),v.has("disable_occlusion")||v.set("disable_occlusion","true"),this.arScale==="fixed"&&v.set("resizable","false"),this.arPlacement==="wall"&&v.set("enable_vertical_placement","true"),v.has("sound")){const A=new URL(v.get("sound"),p);v.set("sound",A.toString())}if(v.has("link")){const A=new URL(v.get("link"),p);v.set("link",A.toString())}const M=`intent://arvr.google.com/scene-viewer/1.2?${v.toString()+"&file="+encodeURIComponent(y.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(m.toString())};end;`,F=()=>{self.location.hash===lo&&(oo=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[Ne]())};self.addEventListener("hashchange",F,{once:!0}),this[le].setAttribute("href",M),console.log("Attempting to present in AR with Scene Viewer..."),this[le].click()}async[uo](){const p=!this.iosSrc;this[gt].classList.remove("enabled");const m=p?await this.prepareUSDZ():this.iosSrc,y=new URL(m,self.location.toString());if(p){const F=self.location.toString(),A=new URL(F),rt=new URL(this.src,A);rt.hash&&(y.hash=rt.hash)}this.arScale==="fixed"&&(y.hash&&(y.hash+="&"),y.hash+="allowsContentScaling=0");const v=this[le];v.setAttribute("rel","ar");const M=document.createElement("img");v.appendChild(M),v.setAttribute("href",y.toString()),p&&v.setAttribute("download","model.usdz"),v.style.display="none",v.isConnected||this.shadowRoot.appendChild(v),console.log("Attempting to present in AR with Quick Look..."),v.click(),v.removeChild(M),p&&URL.revokeObjectURL(m),this[gt].classList.add("enabled")}async prepareUSDZ(){const p=this[Wt].beginActivity("usdz-conversion");await this[dn]();const{model:m,shadow:y,target:v}=this[g];if(m==null)return"";let M=!1;y!=null&&(M=y.visible,y.visible=!1),p(.2);const F=new oh;v.remove(m),m.position.copy(v.position),m.updateWorldMatrix(!1,!0);const A=await F.parse(m);m.position.set(0,0,0),v.add(m);const rt=new Blob([A],{type:"model/vnd.usdz+zip"}),f=URL.createObjectURL(rt);return p(1),y!=null&&(y.visible=M),f}}return oe([S({type:Boolean,attribute:"ar"})],c.prototype,"ar",void 0),oe([S({type:String,attribute:"ar-scale"})],c.prototype,"arScale",void 0),oe([S({type:String,attribute:"ar-placement"})],c.prototype,"arPlacement",void 0),oe([S({type:String,attribute:"ar-modes"})],c.prototype,"arModes",void 0),oe([S({type:String,attribute:"ios-src"})],c.prototype,"iosSrc",void 0),oe([S({type:Boolean,attribute:"xr-environment"})],c.prototype,"xrEnvironment",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};const qu=100,Xu="https://www.gstatic.com/draco/versioned/decoders/1.5.6/",Ku="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",Yu="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js",mn={AUTO:"auto",MANUAL:"manual"},po={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},he=Symbol("defaultProgressBarElement"),fn=Symbol("posterContainerElement"),ce=Symbol("defaultPosterElement"),Ve=Symbol("shouldDismissPoster"),gn=Symbol("hidePoster"),Di=Symbol("modelIsRevealed"),vn=Symbol("updateProgressBar"),Zu=Symbol("ariaLabelCallToAction"),yn=Symbol("onProgress"),Ju=o=>{var t,e,i,s,n,a,r,l;class h extends o{constructor(...c){super(...c),this.poster=null,this.reveal=mn.AUTO,this.loading=po.AUTO,this[t]=!1,this[e]=!1,this[i]=this.shadowRoot.querySelector(".slot.poster"),this[s]=this.shadowRoot.querySelector("#default-poster"),this[n]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[a]=this[ce].getAttribute("aria-label"),this[r]=Ih(v=>{const M=this[he].parentNode;requestAnimationFrame(()=>{this[he].style.transform=`scaleX(${v})`,v===0&&(M.removeChild(this[he]),M.appendChild(this[he])),this[he].classList.toggle("hide",v===1)})},qu),this[l]=v=>{const M=v.detail.totalProgress,F=v.detail.reason;M===1&&(this[vn].flush(),this.loaded&&(this[Ve]||this.reveal===mn.AUTO)&&this[gn]()),this[vn](M),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:M,reason:F}}))};const u=self.ModelViewerElement||{},p=u.dracoDecoderLocation||Xu;k.setDRACODecoderLocation(p);const m=u.ktx2TranscoderLocation||Ku;k.setKTX2TranscoderLocation(m),u.meshoptDecoderLocation&&k.setMeshoptDecoderLocation(u.meshoptDecoderLocation);const y=u.lottieLoaderLocation||Yu;J.singleton.textureUtils.lottieLoaderUrl=y}static set dracoDecoderLocation(c){k.setDRACODecoderLocation(c)}static get dracoDecoderLocation(){return k.getDRACODecoderLocation()}static set ktx2TranscoderLocation(c){k.setKTX2TranscoderLocation(c)}static get ktx2TranscoderLocation(){return k.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(c){k.setMeshoptDecoderLocation(c)}static get meshoptDecoderLocation(){return k.getMeshoptDecoderLocation()}static set lottieLoaderLocation(c){J.singleton.textureUtils.lottieLoaderUrl=c}static get lottieLoaderLocation(){return J.singleton.textureUtils.lottieLoaderUrl}static mapURLs(c){J.singleton.loader[Nt].manager.setURLModifier(c)}dismissPoster(){this.loaded?this[gn]():(this[Ve]=!0,this[ye]())}showPoster(){const c=this[fn];if(c.classList.contains("show"))return;c.classList.add("show"),this[Z].classList.remove("show");const u=this[ce];u.removeAttribute("tabindex"),u.removeAttribute("aria-hidden");const p=this.modelIsVisible;this[Di]=!1,this[Qi](p)}getDimensions(){return Tt(this[g].size)}getBoundingBoxCenter(){return Tt(this[g].boundingBox.getCenter(new _))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[Wt].addEventListener("progress",this[yn])}disconnectedCallback(){super.disconnectedCallback(),this[Wt].removeEventListener("progress",this[yn])}async updated(c){super.updated(c),c.has("poster")&&this.poster!=null&&(this[ce].style.backgroundImage=`url(${this.poster})`),c.has("alt")&&this[ce].setAttribute("aria-label",this[On]),(c.has("reveal")||c.has("loading"))&&this[ye]()}[(t=Di,e=Ve,i=fn,s=ce,n=he,a=Zu,r=vn,l=yn,Me)](){return!!this.src&&(this[Ve]||this.loading===po.EAGER||this.reveal===mn.AUTO&&this[zt])}[gn](){this[Ve]=!1;const c=this[fn];if(!c.classList.contains("show"))return;c.classList.remove("show"),this[Z].classList.add("show");const u=this.modelIsVisible;this[Di]=!0,this[Qi](u);const p=this.getRootNode();p&&p.activeElement===this&&this[Z].focus();const m=this[ce];m.setAttribute("aria-hidden","true"),m.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[qt](){return super[qt]()&&this[Di]}}return pn([S({type:String})],h.prototype,"poster",void 0),pn([S({type:String})],h.prototype,"reveal",void 0),pn([S({type:String})],h.prototype,"loading",void 0),h};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn=function(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(n=(s<3?a(n):s>3?a(t,e,n):a(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n};const Qu=Math.PI/32,td=3e3,ed={basis:[rs(z(Qu,"rad"))],keywords:{auto:[null]}},ue=Symbol("autoRotateStartTime"),wn=Symbol("radiansPerSecond"),mo=Symbol("syncRotationRate"),Sn=Symbol("onCameraChange"),id=o=>{var t,e,i;class s extends o{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=td,this.rotationPerSecond="auto",this[t]=performance.now(),this[e]=0,this[i]=a=>{this.autoRotate&&a.detail.source==="user-interaction"&&(this[ue]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Sn]),this[ue]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Sn]),this[ue]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[ue]=performance.now())}[(t=ue,e=wn,mo)](a){this[wn]=a[0]}[at](a,r){if(super[at](a,r),!this.autoRotate||!this[qt]()||this[C].isPresenting)return;const l=Math.min(r,a-this[ue]-this.autoRotateDelay);l>0&&(this[g].yaw=this.turntableRotation+this[wn]*l*.001)}get turntableRotation(){return this[g].yaw}resetTurntableRotation(a=0){this[g].yaw=a}}return i=Sn,bn([S({type:Boolean,attribute:"auto-rotate"})],s.prototype,"autoRotate",void 0),bn([S({type:Number,attribute:"auto-rotate-delay"})],s.prototype,"autoRotateDelay",void 0),bn([St({intrinsics:ed,updateHandler:mo}),S({type:String,attribute:"rotation-per-second"})],s.prototype,"rotationPerSecond",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=Bu(Tu(id(Vh($c(Wu(Ju(Uu(ai))))))));customElements.define("model-viewer",sd);export{sd as M};
//# sourceMappingURL=model-viewer-DoHqVT8O.js.map
