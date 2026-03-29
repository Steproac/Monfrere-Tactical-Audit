!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const i of t)if("childList"===i.type)for(const t of i.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${o}`),n="$lit$";class s{constructor(t,e){this.parts=[],this.element=e;const o=[],s=[],l=document.createTreeWalker(e.content,133,null,!1);let d=0,u=-1,h=0;const{strings:m,values:{length:g}}=t;for(;h<g;){const t=l.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let o=0;for(let t=0;t<i;t++)r(e[t].name,n)&&o++;for(;o-- >0;){const e=m[h],i=p.exec(e)[2],o=i.toLowerCase()+n,s=t.getAttribute(o);t.removeAttribute(o);const r=s.split(a);this.parts.push({type:"attribute",index:u,name:i,strings:r}),h+=r.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(a),l=s.length-1;for(let e=0;e<l;e++){let o,a=s[e];if(""===a)o=c();else{const t=p.exec(a);null!==t&&r(t[2],n)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-5)+t[3]),o=document.createTextNode(a)}i.insertBefore(o,t),this.parts.push({type:"node",index:++u})}""===s[l]?(i.insertBefore(c(),t),o.push(t)):t.data=s[l],h+=l}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==d||(u++,e.insertBefore(c(),t)),d=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(o.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else l.currentNode=s.pop()}for(const i of o)i.parentNode.removeChild(i)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:i},parts:o}=t,a=document.createTreeWalker(i,133,null,!1);let n=h(o),s=o[n],r=-1,l=0;const c=[];let p=null;for(;a.nextNode();){r++;const t=a.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==s&&s.index===r;)s.index=null!==p?-1:s.index-l,n=h(o,n),s=o[n]}c.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},h=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),y={},f={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const i of this.__parts)void 0!==i&&i.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],o=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let n,s=0,r=0,c=a.nextNode();for(;s<o.length;)if(n=o[s],l(n)){for(;r<n.index;)r++,"TEMPLATE"===c.nodeName&&(i.push(c),a.currentNode=c.content),null===(c=a.nextNode())&&(a.currentNode=i.pop(),c=a.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),_=` ${i} `;class w{constructor(t,e,i,o){this.strings=t,this.values=e,this.type=i,this.processor=o}getHTML(){const t=this.strings.length-1;let e="",a=!1;for(let s=0;s<t;s++){const t=this.strings[s],r=t.lastIndexOf("\x3c!--");a=(r>-1||a)&&-1===t.indexOf("--\x3e",r+1);const l=p.exec(t);e+=null===l?t+(a?_:o):t.substr(0,l.index)+l[1]+l[2]+n+l[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let o="";for(let a=0;a<e;a++){o+=t[a];const e=i[a];if(void 0!==e){const t=e.value;if(x(t)||!S(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||x(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class q{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}const t=this.__pendingValue;t!==y&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===f?(this.value=f,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),o=i._clone();i.update(t.values),this.__commitNode(o),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,o=0;for(const a of t)i=e[o],void 0===i&&(i=new q(this.options),e.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(e[o-1])),i.setValue(a),i.commit(),o++;o<e.length&&(e.length=o,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class I{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}class $ extends z{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends k{}let D=!1;(()=>{try{const t={get capture(){return D=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class O{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(D?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function P(t){let e=C.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},C.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(i);return o=e.keyString.get(a),void 0===o&&(o=new s(t,t.getTemplateElement()),e.keyString.set(a,o)),e.stringsArray.set(t.strings,o),o}const C=new Map,A=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,o){const a=e[0];if("."===a){return new $(t,e.slice(1),i).parts}if("@"===a)return[new O(t,e.slice(1),o.eventContext)];if("?"===a)return[new I(t,e.slice(1),i)];return new z(t,e,i).parts}handleTextExpression(t){return new q(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const R=(t,...e)=>new w(t,e,"html",j),L=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let T=!0;(void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom)&&(T=!1);const B=t=>e=>{const o=L(e.type,t);let a=C.get(o);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},C.set(o,a));let n=a.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);if(n=a.keyString.get(r),void 0===n){const i=e.getTemplateElement();T&&window.ShadyCSS.prepareTemplateDom(i,t),n=new s(e,i),a.keyString.set(r,n)}return a.stringsArray.set(e.strings,n),n},V=["html","svg"],J=new Set,F=(t,e,i)=>{J.add(t);const o=i?i.element:document.createElement("template"),a=e.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,t);const s=document.createElement("style");for(let c=0;c<n;c++){const t=a[c];t.parentNode.removeChild(t),s.textContent+=t.textContent}(t=>{V.forEach(e=>{const i=C.get(L(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),d(t,i)})})})(t);const r=o.content;i?function(t,e,i=null){const{element:{content:o},parts:a}=t;if(null==i)return void o.appendChild(e);const n=document.createTreeWalker(o,133,null,!1);let s=h(a),r=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(r=u(e),i.parentNode.insertBefore(e,i));-1!==s&&a[s].index===l;){if(r>0){for(;-1!==s;)a[s].index+=r,s=h(a,s);return}s=h(a,s)}}(i,s,r.firstChild):r.insertBefore(s,r.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){r.insertBefore(s,r.firstChild);const t=new Set;t.add(s),d(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const U={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},M=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:M},W="finalized";class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const o=this._attributeNameForProperty(i,e);void 0!==o&&(this._attributeToPropertyMap.set(o,i),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const a=this[t];this[e]=o,this.requestUpdateInternal(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(W)||t.finalize(),this[W]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=M){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,o=e.converter||U,a="function"==typeof o?o:o.fromAttribute;return a?a(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,o=e.converter;return(o&&o.toAttribute||U.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=H){const o=this.constructor,a=o._attributeNameForProperty(t,i);if(void 0!==a){const t=o._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(a):this.setAttribute(a,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(t);if(void 0!==o){const t=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let o=!0;if(void 0!==t){const a=this.constructor;i=i||a.getPropertyOptions(t),a._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Q[W]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):K(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class tt{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,o)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]);return new tt(i,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const it={};class ot extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),o=[];i.forEach(t=>o.unshift(t)),this._styles=o}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Z){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}ot.finalized=!0,ot.render=(t,i,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const a=o.scopeName,n=A.has(i),s=T&&11===i.nodeType&&!!i.host,r=s&&!J.has(a),l=r?document.createDocumentFragment():i;if(((t,i,o)=>{let a=A.get(i);void 0===a&&(e(i,i.firstChild),A.set(i,a=new q(Object.assign({templateFactory:P},o))),a.appendInto(i)),a.setValue(t),a.commit()})(t,l,Object.assign({templateFactory:B(a)},o)),r){const t=A.get(l);A.delete(l);const o=t.value instanceof v?t.value.template:void 0;F(a,l,o),e(i,i.firstChild),i.appendChild(l),A.set(i,t)}!n&&s&&window.ShadyCSS.styleElement(i.host)},ot.shadowRootOptions={mode:"open"};var at=Object.getOwnPropertyDescriptor;let nt=class extends ot{constructor(){super()}setCookie(t,e,i){document.cookie=e+"="+i+";max-age=31536000;"}deleteCookie(t,e){document.cookie=e+"= ;expires=Thu, 01 Jan 1970 00:00:00 UTC;"}getCookieByName(t,e){for(var i=document.cookie.split(";"),o=0;o<i.length;o++){var a=i[o].split("=");if(e==a[0].trim())return decodeURIComponent(a[1])}return null}retriveCookieOnRetake(t,e){let i;for(var o=decodeURIComponent(document.cookie).split(";"),a=0;a<o.length;a++){for(var n=o[a];" "==n.charAt(0);)n=n.substring(1);0==n.indexOf(e)&&(i=n.split("=")[1])}if(i)return i}getCookieByNameNotJson(){for(var t=document.cookie.split(";"),e={},i=0;i<t.length;i++){var o=t[i].split("=");e[(o[0]+"").trim()]=unescape(o.slice(1).join("="))}return e}};nt=((t,e,i,o)=>{for(var a,n=o>1?void 0:o?at(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=a(n)||n);return n})([G("cookie-manager")],nt);var st=Object.getOwnPropertyDescriptor;let rt=class extends ot{constructor(){super()}setItem(t,e,i){const o={value:i,expiry:(new Date).getTime()+31536e6};localStorage.setItem(e,JSON.stringify(o))}deleteItem(t,e){localStorage.removeItem(e)}getItemByName(t,e){if(i=localStorage.getItem(e)){if((new Date).getTime()>JSON.parse(i).expiry){localStorage.removeItem(e);var i=localStorage.getItem(e)}else try{return JSON.parse(i).value}catch(o){}}return null}retriveDataOnRetake(t,e){var i;if(i=JSON.parse(localStorage.getItem(e))){return(new Date).getTime()>i.expiry?(localStorage.removeItem(e),null):i.value}return JSON.parse(i)}getCookieByNameNotJson(){for(var t=Object.keys(localStorage),e={},i=0;i<t.length;i++){var o=t[i];e[o]||(e[o]=localStorage.getItem(o))}return e}};rt=((t,e,i,o)=>{for(var a,n=o>1?void 0:o?st(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=a(n)||n);return n})([G("local-storage-manager")],rt);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var lt=function(t,e){return lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},lt(t,e)};function ct(t,e){function i(){this.constructor=t}lt(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i
/**
 * @license crypto-ts
 * MIT license
 */)}for(var pt=function(){function t(){}return t.stringify=function(t){for(var e=[],i=0;i<t.sigBytes;i++){var o=t.words[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},t.parse=function(t){for(var e=t.length,i=[],o=0;o<e;o+=2)i[o>>>3]|=parseInt(t.substr(o,2),16)<<24-o%8*4;return new dt(i,e/2)},t}(),dt=function(){function t(t,e){this.words=t||[],this.sigBytes=void 0!==e?e:4*this.words.length}return t.random=function(e){for(var i=[],o=function(t){var e=987654321,i=4294967295;return function(){var o=((e=36969*(65535&e)+(e>>16)&i)<<16)+(t=18e3*(65535&t)+(t>>16)&i)&i;return o/=4294967296,(o+=.5)*(Math.random()>.5?1:-1)}},a=0,n=void 0;a<e;a+=4){var s=o(4294967296*(n||Math.random()));n=987654071*s(),i.push(4294967296*s()|0)}return new t(i,e)},t.prototype.toString=function(t){return(t||pt).stringify(this)},t.prototype.concat=function(t){if(this.clamp(),this.sigBytes%4)for(var e=0;e<t.sigBytes;e++){var i=t.words[e>>>2]>>>24-e%4*8&255;this.words[this.sigBytes+e>>>2]|=i<<24-(this.sigBytes+e)%4*8}else for(e=0;e<t.sigBytes;e+=4)this.words[this.sigBytes+e>>>2]=t.words[e>>>2];return this.sigBytes+=t.sigBytes,this},t.prototype.clamp=function(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)},t.prototype.clone=function(){return new t(this.words.slice(0),this.sigBytes)},t}(),ut=function(){function t(){}return t.stringify=function(t){for(var e=[],i=0;i<t.sigBytes;i++){var o=t.words[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},t.parse=function(t){for(var e=t.length,i=[],o=0;o<e;o++)i[o>>>2]|=(255&t.charCodeAt(o))<<24-o%4*8;return new dt(i,e)},t}(),ht=function(){function t(){}return t.stringify=function(t){try{return decodeURIComponent(escape(ut.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},t.parse=function(t){return ut.parse(unescape(encodeURIComponent(t)))},t}(),mt=function(){function t(t){this._minBufferSize=0,this.cfg=Object.assign({blockSize:1},t),this._data=new dt,this._nDataBytes=0}return t.prototype.reset=function(){this._data=new dt,this._nDataBytes=0},t.prototype._append=function(t){"string"==typeof t&&(t=ht.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},t.prototype._process=function(t){if(!this.cfg.blockSize)throw new Error("missing blockSize in config");var e,i=4*this.cfg.blockSize,o=this._data.sigBytes/i,a=(o=t?Math.ceil(o):Math.max((0|o)-this._minBufferSize,0))*this.cfg.blockSize,n=Math.min(4*a,this._data.sigBytes);if(a){for(var s=0;s<a;s+=this.cfg.blockSize)this._doProcessBlock(this._data.words,s);e=this._data.words.splice(0,a),this._data.sigBytes-=n}return new dt(e,n)},t.prototype.clone=function(){var t=this.constructor();for(var e in this)this.hasOwnProperty(e)&&(t[e]=this[e]);return t._data=this._data.clone(),t},t}(),gt=function(t){function e(e){var i=t.call(this)||this;return i.ciphertext=e.ciphertext,i.key=e.key,i.iv=e.iv,i.salt=e.salt,i.algorithm=e.algorithm,i.mode=e.mode,i.padding=e.padding,i.blockSize=e.blockSize,i.formatter=e.formatter,i}return ct(e,t),e.prototype.extend=function(t){return void 0!==t.ciphertext&&(this.ciphertext=t.ciphertext),void 0!==t.key&&(this.key=t.key),void 0!==t.iv&&(this.iv=t.iv),void 0!==t.salt&&(this.salt=t.salt),void 0!==t.algorithm&&(this.algorithm=t.algorithm),void 0!==t.mode&&(this.mode=t.mode),void 0!==t.padding&&(this.padding=t.padding),void 0!==t.blockSize&&(this.blockSize=t.blockSize),void 0!==t.formatter&&(this.formatter=t.formatter),this},e.prototype.toString=function(t){if(t)return t.stringify(this);if(this.formatter)return this.formatter.stringify(this);throw new Error("cipher needs a formatter to be able to convert the result into a string")},e}(function(){}),yt=function(){function t(){}return t.stringify=function(t){t.clamp();for(var e=[],i=0;i<t.sigBytes;i+=3)for(var o=(t.words[i>>>2]>>>24-i%4*8&255)<<16|(t.words[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t.words[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;a<4&&i+.75*a<t.sigBytes;a++)e.push(this._map.charAt(o>>>6*(3-a)&63));var n=this._map.charAt(64);if(n)for(;e.length%4;)e.push(n);return e.join("")},t.parse=function(t){var e=t.length;if(void 0===this._reverseMap){this._reverseMap=[];for(var i=0;i<this._map.length;i++)this._reverseMap[this._map.charCodeAt(i)]=i}var o=this._map.charAt(64);if(o){var a=t.indexOf(o);-1!==a&&(e=a)}return this.parseLoop(t,e,this._reverseMap)},t.parseLoop=function(t,e,i){for(var o=[],a=0,n=0;n<e;n++)if(n%4){var s=i[t.charCodeAt(n-1)]<<n%4*2,r=i[t.charCodeAt(n)]>>>6-n%4*2;o[a>>>2]|=(s|r)<<24-a%4*8,a++}return new dt(o,a)},t._map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t._reverseMap=void 0,t}(),ft=function(){function t(){}return t.stringify=function(t){if(!t.ciphertext)throw new Error("missing ciphertext in params");var e,i=t.ciphertext,o=t.salt;if(o){if("string"==typeof o)throw new Error("salt is expected to be a WordArray");e=new dt([1398893684,1701076831]).concat(o).concat(i)}else e=i;return e.toString(yt)},t.parse=function(t){var e,i=yt.parse(t);return 1398893684===i.words[0]&&1701076831===i.words[1]&&(e=new dt(i.words.slice(2,4)),i.words.splice(0,4),i.sigBytes-=16),new gt({ciphertext:i,salt:e})},t}(),vt=function(){function t(){}return t.encrypt=function(t,e,i,o){var a=Object.assign({},this.cfg,o),n=t.createEncryptor(i,a),s=n.finalize(e);return new gt({ciphertext:s,key:i,iv:n.cfg.iv,algorithm:t,mode:n.cfg.mode,padding:n.cfg.padding,blockSize:n.cfg.blockSize,formatter:a.format})},t.decrypt=function(t,e,i,o){var a=Object.assign({},this.cfg,o);if(!a.format)throw new Error("could not determine format");if(!(e=this._parse(e,a.format)).ciphertext)throw new Error("could not determine ciphertext");return t.createDecryptor(i,a).finalize(e.ciphertext)},t._parse=function(t,e){return"string"==typeof t?e.parse(t):t},t.cfg={blockSize:4,iv:new dt([]),format:ft},t}(),bt=function(t){function e(e){var i=t.call(this,Object.assign({blockSize:16},e))||this;return i.reset(),i}return ct(e,t),e._createHelper=function(t){return function(e,i){return new t(i).finalize(e)}},e.prototype.update=function(t){return this._append(t),this._process(),this},e.prototype.finalize=function(t){return t&&this._append(t),this._doFinalize()},e}(mt),_t=[],wt=0;wt<64;wt++)_t[wt]=4294967296*Math.abs(Math.sin(wt+1))|0;var xt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.FF=function(t,e,i,o,a,n,s){var r=t+(e&i|~e&o)+a+s;return(r<<n|r>>>32-n)+e},e.GG=function(t,e,i,o,a,n,s){var r=t+(e&o|i&~o)+a+s;return(r<<n|r>>>32-n)+e},e.HH=function(t,e,i,o,a,n,s){var r=t+(e^i^o)+a+s;return(r<<n|r>>>32-n)+e},e.II=function(t,e,i,o,a,n,s){var r=t+(i^(e|~o))+a+s;return(r<<n|r>>>32-n)+e},e.prototype.reset=function(){t.prototype.reset.call(this),this._hash=new dt([1732584193,4023233417,2562383102,271733878])},e.prototype._doProcessBlock=function(t,i){for(var o=0;o<16;o++){var a=i+o,n=t[a];t[a]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var s=this._hash.words,r=t[i+0],l=t[i+1],c=t[i+2],p=t[i+3],d=t[i+4],u=t[i+5],h=t[i+6],m=t[i+7],g=t[i+8],y=t[i+9],f=t[i+10],v=t[i+11],b=t[i+12],_=t[i+13],w=t[i+14],x=t[i+15],S=s[0],z=s[1],k=s[2],q=s[3];S=e.FF(S,z,k,q,r,7,_t[0]),q=e.FF(q,S,z,k,l,12,_t[1]),k=e.FF(k,q,S,z,c,17,_t[2]),z=e.FF(z,k,q,S,p,22,_t[3]),S=e.FF(S,z,k,q,d,7,_t[4]),q=e.FF(q,S,z,k,u,12,_t[5]),k=e.FF(k,q,S,z,h,17,_t[6]),z=e.FF(z,k,q,S,m,22,_t[7]),S=e.FF(S,z,k,q,g,7,_t[8]),q=e.FF(q,S,z,k,y,12,_t[9]),k=e.FF(k,q,S,z,f,17,_t[10]),z=e.FF(z,k,q,S,v,22,_t[11]),S=e.FF(S,z,k,q,b,7,_t[12]),q=e.FF(q,S,z,k,_,12,_t[13]),k=e.FF(k,q,S,z,w,17,_t[14]),z=e.FF(z,k,q,S,x,22,_t[15]),S=e.GG(S,z,k,q,l,5,_t[16]),q=e.GG(q,S,z,k,h,9,_t[17]),k=e.GG(k,q,S,z,v,14,_t[18]),z=e.GG(z,k,q,S,r,20,_t[19]),S=e.GG(S,z,k,q,u,5,_t[20]),q=e.GG(q,S,z,k,f,9,_t[21]),k=e.GG(k,q,S,z,x,14,_t[22]),z=e.GG(z,k,q,S,d,20,_t[23]),S=e.GG(S,z,k,q,y,5,_t[24]),q=e.GG(q,S,z,k,w,9,_t[25]),k=e.GG(k,q,S,z,p,14,_t[26]),z=e.GG(z,k,q,S,g,20,_t[27]),S=e.GG(S,z,k,q,_,5,_t[28]),q=e.GG(q,S,z,k,c,9,_t[29]),k=e.GG(k,q,S,z,m,14,_t[30]),z=e.GG(z,k,q,S,b,20,_t[31]),S=e.HH(S,z,k,q,u,4,_t[32]),q=e.HH(q,S,z,k,g,11,_t[33]),k=e.HH(k,q,S,z,v,16,_t[34]),z=e.HH(z,k,q,S,w,23,_t[35]),S=e.HH(S,z,k,q,l,4,_t[36]),q=e.HH(q,S,z,k,d,11,_t[37]),k=e.HH(k,q,S,z,m,16,_t[38]),z=e.HH(z,k,q,S,f,23,_t[39]),S=e.HH(S,z,k,q,_,4,_t[40]),q=e.HH(q,S,z,k,r,11,_t[41]),k=e.HH(k,q,S,z,p,16,_t[42]),z=e.HH(z,k,q,S,h,23,_t[43]),S=e.HH(S,z,k,q,y,4,_t[44]),q=e.HH(q,S,z,k,b,11,_t[45]),k=e.HH(k,q,S,z,x,16,_t[46]),z=e.HH(z,k,q,S,c,23,_t[47]),S=e.II(S,z,k,q,r,6,_t[48]),q=e.II(q,S,z,k,m,10,_t[49]),k=e.II(k,q,S,z,w,15,_t[50]),z=e.II(z,k,q,S,u,21,_t[51]),S=e.II(S,z,k,q,b,6,_t[52]),q=e.II(q,S,z,k,p,10,_t[53]),k=e.II(k,q,S,z,f,15,_t[54]),z=e.II(z,k,q,S,l,21,_t[55]),S=e.II(S,z,k,q,g,6,_t[56]),q=e.II(q,S,z,k,x,10,_t[57]),k=e.II(k,q,S,z,h,15,_t[58]),z=e.II(z,k,q,S,_,21,_t[59]),S=e.II(S,z,k,q,d,6,_t[60]),q=e.II(q,S,z,k,v,10,_t[61]),k=e.II(k,q,S,z,c,15,_t[62]),z=e.II(z,k,q,S,y,21,_t[63]),s[0]=s[0]+S|0,s[1]=s[1]+z|0,s[2]=s[2]+k|0,s[3]=s[3]+q|0},e.prototype._doFinalize=function(){var t=this._data,e=t.words,i=8*this._nDataBytes,o=8*t.sigBytes;e[o>>>5]|=128<<24-o%32;var a=Math.floor(i/4294967296),n=i;e[15+(o+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),e[14+(o+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();for(var s=this._hash,r=s.words,l=0;l<4;l++){var c=r[l];r[l]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return s},e}(bt),St=function(){function t(t){this.cfg=Object.assign({keySize:4,hasher:xt,iterations:1},t)}return t.prototype.compute=function(t,e){for(var i,o=new this.cfg.hasher,a=new dt;a.words.length<this.cfg.keySize;){i&&o.update(i),i=o.update(t).finalize(e),o.reset();for(var n=1;n<this.cfg.iterations;n++)i=o.finalize(i),o.reset();a.concat(i)}return a.sigBytes=4*this.cfg.keySize,a},t}(),zt=function(){function t(){}return t.execute=function(t,e,i,o){o||(o=dt.random(8));var a=new St({keySize:e+i}).compute(t,o),n=new dt(a.words.slice(e),4*i);return a.sigBytes=4*e,new gt({key:a,iv:n,salt:o})},t}(),kt=function(){function t(){}return t.encrypt=function(t,e,i,o){var a=Object.assign({},this.cfg,o);if(void 0===a.kdf)throw new Error("missing kdf in config");var n=a.kdf.execute(i,t.keySize,t.ivSize);return void 0!==n.iv&&(a.iv=n.iv),vt.encrypt.call(this,t,e,n.key,a).extend(n)},t.decrypt=function(t,e,i,o){var a=Object.assign({},this.cfg,o);if(void 0===a.format)throw new Error("missing format in config");if(e=this._parse(e,a.format),void 0===a.kdf)throw new Error("the key derivation function must be set");var n=a.kdf.execute(i,t.keySize,t.ivSize,e.salt);return void 0!==n.iv&&(a.iv=n.iv),vt.decrypt.call(this,t,e,n.key,a)},t._parse=function(t,e){return"string"==typeof t?e.parse(t):t},t.cfg={blockSize:4,iv:new dt([]),format:ft,kdf:zt},t}(),qt=function(t){function e(e,i,o){var a=t.call(this,Object.assign({blockSize:1},o))||this;return a._xformMode=e,a._key=i,a.reset(),a}return ct(e,t),e.createEncryptor=function(t,e){return new this(this._ENC_XFORM_MODE,t,e)},e.createDecryptor=function(t,e){return new this(this._DEC_XFORM_MODE,t,e)},e._createHelper=function(t){return{encrypt:function(e,i,o){return"string"==typeof i?kt.encrypt(t,e,i,o):vt.encrypt(t,e,i,o)},decrypt:function(e,i,o){return"string"==typeof i?kt.decrypt(t,e,i,o):vt.decrypt(t,e,i,o)}}},e.prototype.process=function(t){return this._append(t),this._process()},e.prototype.finalize=function(t){return t&&this._append(t),this._doFinalize()},e._ENC_XFORM_MODE=1,e._DEC_XFORM_MODE=2,e.keySize=4,e.ivSize=4,e}(mt),It=function(){function t(t,e){this.init(t,e)}return t.prototype.init=function(t,e){this._cipher=t,this._iv=e},t}(),$t=function(){function t(){}return t.createEncryptor=function(t,e){return new(0,this.Encryptor)(t,e)},t.createDecryptor=function(t,e){return new(0,this.Decryptor)(t,e)},t.Encryptor=It,t.Decryptor=It,t}(),Nt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.prototype.processBlock=function(t,e){if(void 0===this._cipher.cfg.blockSize)throw new Error("missing blockSize in cipher config");this.xorBlock(t,e,this._cipher.cfg.blockSize),this._cipher.encryptBlock(t,e),this._prevBlock=t.slice(e,e+this._cipher.cfg.blockSize)},e.prototype.xorBlock=function(t,e,i){var o;if(this._iv?(o=this._iv,this._iv=void 0):o=this._prevBlock,void 0!==o)for(var a=0;a<i;a++)t[e+a]^=o[a]},e}(It),Dt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.prototype.processBlock=function(t,e){if(void 0===this._cipher.cfg.blockSize)throw new Error("missing blockSize in cipher config");var i=t.slice(e,e+this._cipher.cfg.blockSize);this._cipher.decryptBlock(t,e),this.xorBlock(t,e,this._cipher.cfg.blockSize),this._prevBlock=i},e.prototype.xorBlock=function(t,e,i){var o;if(this._iv?(o=this._iv,this._iv=void 0):o=this._prevBlock,void 0!==o)for(var a=0;a<i;a++)t[e+a]^=o[a]},e}(It),Ot=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.Encryptor=Nt,e.Decryptor=Dt,e}($t),Et=function(){function t(){}return t.pad=function(t,e){for(var i=4*e,o=i-t.sigBytes%i,a=o<<24|o<<16|o<<8|o,n=[],s=0;s<o;s+=4)n.push(a);var r=new dt(n,o);t.concat(r)},t.unpad=function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e},t}(),Pt=function(t){function e(e,i,o){return t.call(this,e,i,Object.assign({blockSize:4,mode:Ot,padding:Et},o))||this}return ct(e,t),e.prototype.reset=function(){if(t.prototype.reset.call(this),void 0===this.cfg.mode)throw new Error("missing mode in config");var e;this._xformMode===this.constructor._ENC_XFORM_MODE?e=this.cfg.mode.createEncryptor:(e=this.cfg.mode.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator===e?this._mode.init(this,this.cfg.iv&&this.cfg.iv.words):(this._mode=e.call(this.cfg.mode,this,this.cfg.iv&&this.cfg.iv.words),this._mode.__creator=e)},e.prototype._doProcessBlock=function(t,e){this._mode.processBlock(t,e)},e.prototype._doFinalize=function(){if(void 0===this.cfg.padding)throw new Error("missing padding in config");var t;if(this._xformMode===this.constructor._ENC_XFORM_MODE){if(void 0===this.cfg.blockSize)throw new Error("missing blockSize in config");this.cfg.padding.pad(this._data,this.cfg.blockSize),t=this._process(!0)}else t=this._process(!0),this.cfg.padding.unpad(t);return t},e}(qt),Ct=[],At=[],jt=[],Rt=[],Lt=[],Tt=[],Bt=[],Vt=[],Jt=[],Ft=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var i=0,o=0;for(e=0;e<256;e++){var a=o^o<<1^o<<2^o<<3^o<<4;a=a>>>8^255&a^99,Ct[i]=a,At[a]=i;var n=t[i],s=t[n],r=t[s],l=257*t[a]^16843008*a;jt[i]=l<<24|l>>>8,Rt[i]=l<<16|l>>>16,Lt[i]=l<<8|l>>>24,Tt[i]=l,l=16843009*r^65537*s^257*n^16843008*i,Bt[a]=l<<24|l>>>8,Vt[a]=l<<16|l>>>16,Jt[a]=l<<8|l>>>24,Ft[a]=l,i?(i=n^t[t[t[r^n]]],o^=t[t[o]]):i=o=1}}();var Ut=[0,1,2,4,8,16,32,64,128,27,54],Mt=function(t){function e(e,i,o){return t.call(this,e,i,o)||this}return ct(e,t),e.prototype.reset=function(){if(t.prototype.reset.call(this),!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,i=e.words,o=e.sigBytes/4,a=4*((this._nRounds=o+6)+1),n=this._keySchedule=[],s=0;s<a;s++)if(s<o)n[s]=i[s];else{var r=n[s-1];s%o?o>6&&s%o===4&&(r=Ct[r>>>24]<<24|Ct[r>>>16&255]<<16|Ct[r>>>8&255]<<8|Ct[255&r]):(r=Ct[(r=r<<8|r>>>24)>>>24]<<24|Ct[r>>>16&255]<<16|Ct[r>>>8&255]<<8|Ct[255&r],r^=Ut[s/o|0]<<24),n[s]=n[s-o]^r}for(var l=this._invKeySchedule=[],c=0;c<a;c++){s=a-c,r=void 0;r=c%4?n[s]:n[s-4],l[c]=c<4||s<=4?r:Bt[Ct[r>>>24]]^Vt[Ct[r>>>16&255]]^Jt[Ct[r>>>8&255]]^Ft[Ct[255&r]]}}},e.prototype.encryptBlock=function(t,e){this._doCryptBlock(t,e,this._keySchedule,jt,Rt,Lt,Tt,Ct)},e.prototype.decryptBlock=function(t,e){var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i,this._doCryptBlock(t,e,this._invKeySchedule,Bt,Vt,Jt,Ft,At),i=t[e+1],t[e+1]=t[e+3],t[e+3]=i},e.prototype._doCryptBlock=function(t,e,i,o,a,n,s,r){for(var l=t[e]^i[0],c=t[e+1]^i[1],p=t[e+2]^i[2],d=t[e+3]^i[3],u=4,h=1;h<this._nRounds;h++){var m=o[l>>>24]^a[c>>>16&255]^n[p>>>8&255]^s[255&d]^i[u++],g=o[c>>>24]^a[p>>>16&255]^n[d>>>8&255]^s[255&l]^i[u++],y=o[p>>>24]^a[d>>>16&255]^n[l>>>8&255]^s[255&c]^i[u++],f=o[d>>>24]^a[l>>>16&255]^n[c>>>8&255]^s[255&p]^i[u++];l=m,c=g,p=y,d=f}var v=(r[l>>>24]<<24|r[c>>>16&255]<<16|r[p>>>8&255]<<8|r[255&d])^i[u++],b=(r[c>>>24]<<24|r[p>>>16&255]<<16|r[d>>>8&255]<<8|r[255&l])^i[u++],_=(r[p>>>24]<<24|r[d>>>16&255]<<16|r[l>>>8&255]<<8|r[255&c])^i[u++],w=(r[d>>>24]<<24|r[l>>>16&255]<<16|r[c>>>8&255]<<8|r[255&p])^i[u++];t[e]=v,t[e+1]=b,t[e+2]=_,t[e+3]=w},e.keySize=8,e}(Pt),Ht=[],Wt=[],Qt=[],Gt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.prototype.reset=function(){t.prototype.reset.call(this),this._hash=new dt(Ht.slice(0))},e.prototype._doProcessBlock=function(t,e){for(var i=this._hash.words,o=i[0],a=i[1],n=i[2],s=i[3],r=i[4],l=i[5],c=i[6],p=i[7],d=0;d<64;d++){if(d<16)Qt[d]=0|t[e+d];else{var u=Qt[d-15],h=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,m=Qt[d-2],g=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;Qt[d]=h+Qt[d-7]+g+Qt[d-16]}var y=o&a^o&n^a&n,f=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),v=p+((r<<26|r>>>6)^(r<<21|r>>>11)^(r<<7|r>>>25))+(r&l^~r&c)+Wt[d]+Qt[d];p=c,c=l,l=r,r=s+v|0,s=n,n=a,a=o,o=v+(f+y)|0}i[0]=i[0]+o|0,i[1]=i[1]+a|0,i[2]=i[2]+n|0,i[3]=i[3]+s|0,i[4]=i[4]+r|0,i[5]=i[5]+l|0,i[6]=i[6]+c|0,i[7]=i[7]+p|0},e.prototype._doFinalize=function(){var t=8*this._nDataBytes,e=8*this._data.sigBytes;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[14+(e+64>>>9<<4)]=Math.floor(t/4294967296),this._data.words[15+(e+64>>>9<<4)]=t,this._data.sigBytes=4*this._data.words.length,this._process(),this._hash},e}(bt),Kt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.prototype.processBlock=function(t,e){this._cipher.encryptBlock(t,e)},e}(It),Yt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e.prototype.processBlock=function(t,e){this._cipher.decryptBlock(t,e)},e}(It);!function(t){function e(){return null!==t&&t.apply(this,arguments)||this}ct(e,t),e.Encryptor=Kt,e.Decryptor=Yt}($t);var Zt={BlockCipher:Pt,Hasher:bt},Xt={AES:Mt,SHA256:Gt},te={Utf8:ht},ee=Zt.BlockCipher._createHelper(Xt.AES);Zt.Hasher._createHelper(Xt.SHA256);const ie=200,oe="COMPLETED",ae="ERROR",ne="IN_PROCESS",se="FIT_QUIZ",re="MEASUREMENT_QUIZ",le="BODY_SCAN",ce="BODY_SCAN_FIT_QUIZ",pe="BODY_SCAN_QR_DESKTOP",de="BODY_SCAN_FIT_QR_MOBILE",ue="SPRHRA_BODY_SCAN",he="INVALID_KEYPOINTS",me="QR_CODE_SCANNED",ge="COMPLETED",ye="RESOURCE_LINK_TIMED_OUT",fe=1800,ve="side_image_url",be="front_image_url",_e="shirt_brand",we="pants_brand",xe="Unable to find person in the front or side image.",Se="l",ze="c",ke="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",qe="source/miscellaneous/cartupdate.js",Ie="quesPage",$e="optPage",Ne="signinPage",De="bestFitPage",Oe="signUpPage",Ee="signSucPage",Pe="errorPage",Ce="verifyUserPage",Ae="sizeNotFoundPage",je="forgotPassPage",Re="privacyPolicyPage",Le="resetPasswordPage",Te="accountInfo",Be="helpCenter",Ve="faqPage",Je="userprofile",Fe="userreviewprofile",Ue="cvCodePage",Me="sessionTimeout",He="qrcode_expired",We="quiz_error",Qe="processingErrorPage",Ge="dev",Ke="WOMEN",Ye="MEN",Ze="WOMEN",Xe="MEN",ti="dark",ei="light",ii="Yes",oi=13,ai=20,ni="true",si="false",ri="Not Offered",li="Custom",ci="QR code link expired due to timeout!",pi="QR code link already completed!";var di=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,hi=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?ui(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&di(e,i,n),n};let mi=class extends ot{constructor(){super(),this.cookienamejsondev={product_code:"product_code",QRS_RESPONSE:"QRS_RESPONSE",quiz_input_id:"quiz_input_id",fitquiz_answers:"fitquiz_answers",fit_quiz_qrs:"fit_quiz_qrs",cv_answers:"cv_answers",cv_quiz_qrs:"cv_quiz_qrs",cvft_answers:"cvft_answers",cvft_quiz_qrs:"cvft_quiz_qrs",measurement_answers:"measurement_answers",measurement_quiz_qrs:"measurement_quiz_qrs",loggedin:"loggedin",qrs_id:"qrs_id",login_time:"login_time",last_quiz_entry:"last_quiz_entry",best_fit_size:"best_fit_size"},this.cookienamejsonprod={product_code:"asdsddsdsyfy",QRS_RESPONSE:"QfgfhfhRS_fgf",quiz_input_id:"rtrrytytdgd",fitquiz_answers:"cknghdgdfdt",fit_quiz_qrs:"dfddfdgdfd",cv_answers:"mji33dgrrtr",cv_quiz_qrs:"hjbygererer37",cvft_answers:"sdsdjd",cvft_quiz_qrs:"dssdsd",measurement_answers:"345fff8dfd",measurement_quiz_qrs:"55fkdjfidf8",loggedin:"f4546fdfd9",qrs_id:"o990fdf9",login_time:"sdhjsj73",last_quiz_entry:"asdGFWETD"},this.cartPdpMessage={label1_no_taking_quiz:"Sizing concerns? ",link_label_no_taking_quiz:" Find My Fit ",label1_after_quiz:"Your best fit: "}}getCartText(){return this.cartPdpMessage}getQuizJson(t){return t===se?this.fitquizjson:t===re?this.measurementquizjson:t===ce?this.cvimgfitquizjson:t===le?this.cvimgquizjson:""}gettemplateJson(){return this.templateJson}getb2b2cJson(){return this.b2b2cJson}getCookieName(t){return t===Ge?this.cookienamejsondev:this.cookienamejsonprod}async loginUser(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user/login",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai"});return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(t){return t.json()}).catch(t=>{})}async requestQuizMetadataV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/partners/{{partner_id}}/quiz/v1?product_stub_id={{product_handle}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",product_handle:t.productHandle});return t.customer_id?e=e+"&customer_id="+t.customer_id+"&login_time="+t.login_time:t.quiz_input_id&&(e=e+"&quiz_input_id="+t.quiz_input_id),await fetch(e,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}async requestGetCategory(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/partners/{{partner_id}}/products/{{product_handle}}/category",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",product_handle:t.productHandle});return await fetch(e,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}async getQuizResponseByCustomerIdAndTypeNonLoginV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/quiz/{{quiz_input_id}}/get_quiz_input_data",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",quiz_input_id:t.quiz_input_id});return await fetch(e,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getQuizResponseByCustomerIdAndTypeV2(t,e){let i=this.replacePlaceholders("{{BASE_URL_API}}/user/{{customer_id}}/quiz_input?quiz_type={{quiz_type}}&category={{product_category}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",customer_id:t.cust_id,quiz_type:t.quiz_source,product_category:e});return await fetch(i,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getQuizSizeV2(t,e){let i,o=this.replacePlaceholders("{{BASE_URL_API}}/quiz/partners/{{partner_id}}/quiz",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c"});try{i=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(t=>t.json()).catch(t=>{})}catch(a){}return i}async getQuizSubmitStatus(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/quiz/{{quiz_id}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",quiz_id:t});return await fetch(e,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getImageUrlV2(t,e){let i=this.replacePlaceholders("{{BASE_URL_API}}/quiz/partner/{{partner_id}}/upload_image",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c"});return await fetch(i,{method:"POST",body:t}).then(t=>t.json()).catch(t=>{})}async getImageUrlQRFlow(t,e,i,o){let a=this.replacePlaceholders("{{BASE_URL_API}}/qr_code_image/partners/{{partner_id}}/qr_code_image/{{qr_code_id}}/image?image_file_flag={{image_pos}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",qr_code_id:o,image_pos:i});return await fetch(a,{method:"POST",body:t}).then(t=>t.json()).catch(t=>{})}async registerNewCustomerV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user/sign_up",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai"});return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(t){return t.json()}).catch(t=>{})}async validateUserV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user/confirm_sign_up",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai"});return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(t=>t.json()).catch(t=>{})}async resendOTPV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user/resend_verification_token",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai"}),i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(t=>t).catch(t=>{});return i.status==ie||i.error_msg}async forgotpassV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user/forgot_password",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai"});return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(t){return t.json()}).catch(t=>{})}async resetpasswordV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user/reset_password",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai"});return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(t){return t.json()}).catch(t=>{})}async getUserDataV2(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/user?user_id={{customer_id}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",customer_id:t});return await fetch(e,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getPantSizeV2(){let t="https://prod.lawsofmotion.b2b2c.montezuma.ai"+void 0;return await fetch(t,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}async getBraSizeV2(){let t="https://prod.lawsofmotion.b2b2c.montezuma.ai"+void 0;return await fetch(t,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}async getMasterDataSizes(t,e){let i=this.replacePlaceholders("{{BASE_URL_API}}/partners/{{partner_id}}/master_data/ui?category={{product_category}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",product_category:e});return await fetch(i,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}async getQuizInpitIDS(t,e,i){let o=this.replacePlaceholders("{{BASE_URL_API}}/user/{{customer_id}}/quiz_input_id/v1?partner_id={{partner_id}}&category={{product_category}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",customer_id:t,partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",product_category:i});return await fetch(o,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getQuizInpitIDSV1(t,e,i){let o=this.replacePlaceholders("{{BASE_URL_API}}/user/{{customer_id}}/quiz_input_id/v1?partner_id={{partner_id}}&category={{product_category}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",customer_id:t,partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",product_category:i});return await fetch(o,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getUserDataByCustIDAndType(t,e){let i=this.replacePlaceholders("{{BASE_URL_API}}/user/{{customer_id}}/quiz_input?quiz_type={{quiz_type}}&category={{product_category}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",customer_id:t.cust_id,quiz_type:t.quiz_type,product_category:e});return await fetch(i,{method:"GET"}).then(t=>t.json()).catch(t=>{})}async getQuizBase64CodeForQr(t,e){let i=this.replacePlaceholders("{{BASE_URL_API}}/qr_code_image/partners/{{partner_id}}/qr_code?category={{product_category}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",product_category:e});return await fetch(i,{method:"POST"}).then(t=>t.json()).catch(t=>{})}async getQrCodeStatus(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/qr_code_image/partners/{{partner_id}}/qr_code_image/{{qr_code_id}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",qr_code_id:t.qrcodeid});return await fetch(e,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}async updareQrCodeStatus(t){let e=this.replacePlaceholders("{{BASE_URL_API}}/qr_code_image/partners/{{partner_id}}/qr_code_image/{{qr_code_id}}",{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",qr_code_id:t.qrcodeid});return t.qr_code_image_status&&(e=e+"?qr_code_image_status="+t.qr_code_image_status),await fetch(e,{method:"PATCH"}).then(function(t){return t.json()}).catch(t=>{})}async checkZipCodeRestriction(t,e){let i=this.replacePlaceholders(void 0,{BASE_URL_API:"https://prod.lawsofmotion.b2b2c.montezuma.ai",partner_id:"0fe9bc0f-371a-48c4-abad-9efa280eba7c",zip_code:e});return await fetch(i,{method:"GET"}).then(function(t){return t.json()}).catch(t=>{})}replacePlaceholders(t,e){return t.replace(/{{(.*?)}}/g,(t,i)=>e[i]??"")}async wrapFunctionForgetQuizSizeV2(t,e){{var i=JSON.parse(t);const{product_stub_id:o,...a}=i;return i=JSON.stringify(a),this.getQuizSizeV2(t,e)}}async wrapFunctionLoginUser(t){{var e=JSON.parse(t);const{product_stub_id:i,...o}=e;return e=JSON.stringify(o),this.loginUser(e)}}};hi([Y({type:Object})],mi.prototype,"fitquizjson",2),hi([Y({type:Object})],mi.prototype,"measurementquizjson",2),hi([Y({type:Object})],mi.prototype,"cvimgquizjson",2),hi([Y({type:Object})],mi.prototype,"templateJson",2),hi([Y({type:Object})],mi.prototype,"cookienamejsondev",2),hi([Y({type:Object})],mi.prototype,"cookienamejsonprod",2),hi([Y({type:Object})],mi.prototype,"cvimgfitquizjson",2),hi([Y({type:Object})],mi.prototype,"cartPdpMessage",2),hi([Y({type:Object})],mi.prototype,"b2b2cJson",2),mi=hi([G("api-warehouse")],mi);var gi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,fi=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?yi(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&gi(e,i,n),n};let vi=class extends ot{constructor(){super(),this.storageFlag=Se,this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag)}getflag(){return this.storageFlag}setData(t,e,i){e!=this.cookieNameJson.loggedin&&(e=t==Ke?Ze+"_"+e:Xe+"_"+e);let o=ee.encrypt(i,e).toString();return this.storageFlag==ze?(new nt).setCookie(t,e,o):this.storageFlag==Se?(new rt).setItem(t,e,o):void 0}setDataWithoutCategory(t,e,i){let o=ee.encrypt(i,e).toString();return this.storageFlag==ze?(new nt).setCookie(t,e,o):this.storageFlag==Se?(new rt).setItem(t,e,o):void 0}deleteData(t,e){e!=this.cookieNameJson.loggedin&&(e=t==Ke?Ze+"_"+e:Xe+"_"+e),this.storageFlag==ze&&(new nt).deleteCookie(t,e),this.storageFlag==Se&&(new rt).deleteItem(t,e)}deleteDatWithoutCategory(t,e){this.storageFlag==ze&&(new nt).deleteCookie(t,e),this.storageFlag==Se&&(new rt).deleteItem(t,e)}getDataByName(t,e){if(e!=this.cookieNameJson.loggedin&&(e=t==Ke?Ze+"_"+e:Xe+"_"+e),this.storageFlag==ze){let i=(new nt).getCookieByName(t,e);if(i){return ee.decrypt(i,e).toString(te.Utf8)}return null}if(this.storageFlag==Se){let i=(new rt).getItemByName(t,e);if(i){return ee.decrypt(i,e).toString(te.Utf8)}return null}}getDataByNameWithoutCategory(t,e){if(this.storageFlag==ze){let i=(new nt).getCookieByName(t,e);if(i){return ee.decrypt(i,e).toString(te.Utf8)}return null}if(this.storageFlag==Se){let i=(new rt).getItemByName(t,e);if(i){return ee.decrypt(i,e).toString(te.Utf8)}return null}}retriveDataOnRetake(t,e){e=e=t==Ke?Ze+"_"+e:Xe+"_"+e;if(this.storageFlag==ze){let i=(new nt).retriveCookieOnRetake(t,e);if(i){let t=ee.decrypt(i,e).toString(te.Utf8);return JSON.parse(t)}return null}if(this.storageFlag==Se){let i=(new rt).retriveDataOnRetake(t,e);if(i){let t=ee.decrypt(i,e).toString(te.Utf8);return JSON.parse(t)}return null}}};fi([Y({type:String})],vi.prototype,"storageFlag",2),fi([Y({type:Object})],vi.prototype,"cookieNameJson",2),fi([Y({type:String})],vi.prototype,"envCookieFlag",2),fi([Y({type:String})],vi.prototype,"category",2),vi=fi([G("storage-handler")],vi);const bi=et`
  /* quiz-option page main div */
  .landingpage {
    display: flex;
    text-align: center;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--template-background)
  }
  /* page title */
  .landing_title {
    color: var(--template-landing-title-color);
    font-size: var(--template-landing-title-fsize);
    font-family: var(--template-landing-title-font);
    padding: 8px 12px;
    margin-bottom: 3%;
    width: 52%;
  }
  /* page description */
  .landing_desc {
    margin: 0;
    font-size: var(--template-desc-fsize);
    font-family: var(--template-desc-font);
    color: var(--template-desc-color);
  }
  /* quiz option section */
  .quiz_types_section {
    display: flex;
    flex-direction: column;
    /* height: 32vh; */
    place-content: space-evenly;
    align-content: center;
    align-items: center;
    width: 40%;
    margin-top: 5%;
  }
  .disable_quiz_option {
    opacity: 0.5;
    pointer-events: none;
  }
  .uppercase_txt{
    text-transform: uppercase;
  }
  /* quiz type btn */
  .quiz_types_btn {
    background-color: var(--template-landing-button-background);
    color: var(--template-landing-button-color);
    border: var(--template-landing-button-border);
    /* padding:2vh 0px; */
    height: 47px;
    font-size: var(--template-landing-button-fsize);
    width: 70%;
    margin: 3% 0px;
    font-family: var(--template-landing-button-font);
    cursor: pointer;
    border-radius: 5px
  }
    .rounded_rectangle{
      border-radius: 5px !important;
    }
    .rectangle{
    border-radius: 0px !important;
    }
  /* sign in section */
  .landing_signin {
    font-size: var(--template-landing-signin-hyperlink-fsize);
    color: var(--template-landing-signin-hyperlink-color);
    text-decoration: underline;
    font-family: var(--template-landing-signin-hyperlink-font);
    margin-top: 5%;
  }
  /* sign out and my profile text */
  .landing_signout {
    font-size: var(--template-landing-signin-hyperlink-fsize);
    color: var(--template-landing-signin-hyperlink-color);
    text-decoration: underline;
    font-family: var(--template-landing-signin-hyperlink-font);
    margin-top: 32px;
  }
  .element_hide {
    display: none;
  }
  .element_invisible {
    visibility: hidden;
  }

  /* Profile Menu */
  /* .menu_dropdown_content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 8%;
    right: 3%;
    border: 3px solid black;
    width: 40%;
  } */

  /* .show {
    display: block;
  } */

  /* .menu_dropdown_content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid black;
    background-color: #ddd;
  }

  .menu_dropdown_content a:hover {
    background-color: #ddd;
  } */

  @media screen and (max-width: 600px) {
    .landing_title {
      width: 85%;
    }
    .quiz_types_section {
      height: unset;
      width: 170px;
      margin-top: 15px;
    }
    .quiz_types_btn {
      margin-top: 15px;
      padding: 0px;
      height: 47px;
      width: 170px;
    }
    .landing_signin {
      margin-top: 8%;
    }
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    .landing_title {
      width: 70%;
    }
    .quiz_types_section {
      width: 60%;
      height: 20vh;
    }
    .quiz_types_btn {
      padding: 1vh 0px;
    }
  }
`;var _i=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,xi=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?wi(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&_i(e,i,n),n};let Si=class extends ot{constructor(){super()}_quizHandler(t){var e;this.quizType=t.target.id;for(let o of this.quizTypeStatus)o.quiz_type==this.quizType&&(e=o.display_quiz_type);var i={detail:{type:this.quizType,displayQuizType:e}};this.dispatchEvent(new CustomEvent("_checkQuizType",i))}_openLoginPage(t){this.dispatchEvent(new CustomEvent("_signIn",{detail:{issignin:!0}}))}_openProfilePage(){this.dispatchEvent(new CustomEvent("_openProfilePage",{detail:{isProfilePage:!0}}))}_logOut(){(new vi).deleteData(this.category,this.cookieNameJson.loggedin),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.category,this.cookieNameJson.login_time),(new vi).deleteData(this.category,this.cookieNameJson.last_quiz_entry);this.dispatchEvent(new CustomEvent("_afterlogOut",{detail:{value:!0}}))}render(){return R`
            <div class="landingpage fade">
                <!-- <div id="menuDropdown" class="menu_dropdown_content">
                    <a href="#profile">Profile</a>
                    <a href="#logout"  @click=${t=>this._logOut()}>Logout</a>
                </div> -->
                <div class="landing_title">${this.optionPageData.title}</div>
                ${this.optionPageData.info.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
                <div class="quiz_types_section">

                ${this.quizTypeStatus.map((t,e)=>R`               
                    <button id="${t.quiz_type}" class="quiz_types_btn ${"ACTIVE"==t.status?"":"disable_quiz_option"} ${this.optionPageData.quiz_option_btn_shape} ${1==Number("0")?"uppercase_txt":""} " @click=${this._quizHandler}>${t.label}</button>
           
                `)}
                </div>
                
                ${this.optionPageData.action_labels?R`
                        <a class="landing_signin ${""==this.loginData?"":"element_hide"} "  href="javascript:void(0);" @click=${t=>this._openLoginPage(t)}>${this.optionPageData.action_labels.signin}</a>
                <a class="landing_signout ${""==this.loginData?"element_hide":""}"  href="javascript:void(0);"  @click=${t=>this._openProfilePage()}>${this.optionPageData.action_labels.myprofile}</a>
                    `:""}
                
                
            </div>
        `}firstUpdated(t){let e=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin);this.optionPageData.action_labels&&(e?(this.shadowRoot?.querySelectorAll(".landing_signin")[0].classList.add("element_hide"),this.shadowRoot?.querySelectorAll(".landing_signout")[0].classList.remove("element_hide")):(this.shadowRoot?.querySelectorAll(".landing_signin")[0].classList.remove("element_hide"),this.shadowRoot?.querySelectorAll(".landing_signout")[0].classList.add("element_hide")))}};function zi(t){return zi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zi(t)}function ki(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qi(t){var e=function(t,e){if("object"!=zi(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e);if("object"!=zi(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==zi(e)?e:e+""}function Ii(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,qi(o.key),o)}}function $i(t,e,i){return e&&Ii(t.prototype,e),i&&Ii(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ni(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Di(t,e){return Di=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Di(t,e)}function Oi(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Di(t,e)}function Ei(t,e){if(e&&("object"==zi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Ni(t)}function Pi(t){return Pi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Pi(t)}function Ci(t,e,i){return(e=qi(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ai(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=Array(e);i<e;i++)o[i]=t[i];return o}function ji(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Ai(t,e);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Ai(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ri(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Li(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Ri(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ri(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}Si.styles=[bi],xi([Y({type:Object})],Si.prototype,"optionPageData",2),xi([Y({type:Object})],Si.prototype,"quizData",2),xi([Y({type:String})],Si.prototype,"category",2),xi([Y({type:String})],Si.prototype,"productHandle",2),xi([Y({type:String})],Si.prototype,"loginData",2),xi([Y({type:String})],Si.prototype,"partnerId",2),xi([Y({type:String})],Si.prototype,"quizType",2),xi([Y({type:String})],Si.prototype,"dissableclass",2),xi([Y({type:Object})],Si.prototype,"quizTypeStatus",2),xi([Y({type:Object})],Si.prototype,"cookieNameJson",2),xi([Y({type:String})],Si.prototype,"theme",2),Si=xi([G("t-quiz-option")],Si);var Ti={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,e){console&&console[t]}},Bi=new(function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ki(this,t),this.init(e,i)}return $i(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||Ti,this.options=e,this.debug=e.debug}},{key:"setDebug",value:function(t){this.debug=t}},{key:"log",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"log","",!0)}},{key:"warn",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","",!0)}},{key:"error",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"error","")}},{key:"deprecate",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(t,e,i,o){return o&&!this.debug?null:("string"==typeof t[0]&&(t[0]="".concat(i).concat(this.prefix," ").concat(t[0])),this.logger[e](t))}},{key:"create",value:function(e){return new t(this.logger,Li(Li({},{prefix:"".concat(this.prefix,":").concat(e,":")}),this.options))}},{key:"clone",value:function(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new t(this.logger,e)}}]),t}()),Vi=function(){function t(){ki(this,t),this.observers={}}return $i(t,[{key:"on",value:function(t,e){var i=this;return t.split(" ").forEach(function(t){i.observers[t]=i.observers[t]||[],i.observers[t].push(e)}),this}},{key:"off",value:function(t,e){this.observers[t]&&(e?this.observers[t]=this.observers[t].filter(function(t){return t!==e}):delete this.observers[t])}},{key:"emit",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach(function(t){t.apply(void 0,i)});this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(e){e.apply(e,[t].concat(i))})}}]),t}();function Ji(){var t,e,i=new Promise(function(i,o){t=i,e=o});return i.resolve=t,i.reject=e,i}function Fi(t){return null==t?"":""+t}function Ui(t,e,i){function o(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function a(){return!t||"string"==typeof t}for(var n="string"!=typeof e?[].concat(e):e.split(".");n.length>1;){if(a())return{};var s=o(n.shift());!t[s]&&i&&(t[s]=new i),t=Object.prototype.hasOwnProperty.call(t,s)?t[s]:{}}return a()?{}:{obj:t,k:o(n.shift())}}function Mi(t,e,i){var o=Ui(t,e,Object);o.obj[o.k]=i}function Hi(t,e){var i=Ui(t,e),o=i.obj,a=i.k;if(o)return o[a]}function Wi(t,e,i){var o=Hi(t,i);return void 0!==o?o:Hi(e,i)}function Qi(t,e,i){for(var o in e)"__proto__"!==o&&"constructor"!==o&&(o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof e[o]||e[o]instanceof String?i&&(t[o]=e[o]):Qi(t[o],e[o],i):t[o]=e[o]);return t}function Gi(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Ki={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Yi(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,function(t){return Ki[t]}):t}var Zi="undefined"!=typeof window&&window.navigator&&void 0===window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Xi=[" ",",","?","!",";"];function to(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function eo(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?to(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):to(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function io(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,o=Pi(t);if(e){var a=Pi(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Ei(this,i)}}function oo(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(t){if(t[e])return t[e];for(var o=e.split(i),a=t,n=0;n<o.length;++n){if(!a)return;if("string"==typeof a[o[n]]&&n+1<o.length)return;if(void 0===a[o[n]]){for(var s=2,r=o.slice(n,n+s).join(i),l=a[r];void 0===l&&o.length>n+s;)s++,l=a[r=o.slice(n,n+s).join(i)];if(void 0===l)return;if(null===l)return null;if(e.endsWith(r)){if("string"==typeof l)return l;if(r&&"string"==typeof l[r])return l[r]}var c=o.slice(n+s).join(i);return c?oo(l,c,i):void 0}a=a[o[n]]}return a}}var ao=function(){Oi(e,Vi);var t=io(e);function e(i){var o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return ki(this,e),o=t.call(this),Zi&&Vi.call(Ni(o)),o.data=i||{},o.options=a,void 0===o.options.keySeparator&&(o.options.keySeparator="."),void 0===o.options.ignoreJSONStructure&&(o.options.ignoreJSONStructure=!0),o}return $i(e,[{key:"addNamespaces",value:function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}},{key:"removeNamespaces",value:function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}},{key:"getResource",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,n=void 0!==o.ignoreJSONStructure?o.ignoreJSONStructure:this.options.ignoreJSONStructure,s=[t,e];i&&"string"!=typeof i&&(s=s.concat(i)),i&&"string"==typeof i&&(s=s.concat(a?i.split(a):i)),t.indexOf(".")>-1&&(s=t.split("."));var r=Hi(this.data,s);return r||!n||"string"!=typeof i?r:oo(this.data&&this.data[t]&&this.data[t][e],i,a)}},{key:"addResource",value:function(t,e,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},n=this.options.keySeparator;void 0===n&&(n=".");var s=[t,e];i&&(s=s.concat(n?i.split(n):i)),t.indexOf(".")>-1&&(o=e,e=(s=t.split("."))[1]),this.addNamespaces(e),Mi(this.data,s,o),a.silent||this.emit("added",t,e,i,o)}},{key:"addResources",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var a in i)"string"!=typeof i[a]&&"[object Array]"!==Object.prototype.toString.apply(i[a])||this.addResource(t,e,a,i[a],{silent:!0});o.silent||this.emit("added",t,e,i)}},{key:"addResourceBundle",value:function(t,e,i,o,a){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[t,e];t.indexOf(".")>-1&&(o=i,i=e,e=(s=t.split("."))[1]),this.addNamespaces(e);var r=Hi(this.data,s)||{};o?Qi(r,i,a):r=eo(eo({},r),i),Mi(this.data,s,r),n.silent||this.emit("added",t,e,i)}},{key:"removeResourceBundle",value:function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}},{key:"hasResourceBundle",value:function(t,e){return void 0!==this.getResource(t,e)}},{key:"getResourceBundle",value:function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?eo(eo({},{}),this.getResource(t,e)):this.getResource(t,e)}},{key:"getDataByLanguage",value:function(t){return this.data[t]}},{key:"hasLanguageSomeTranslations",value:function(t){var e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find(function(t){return e[t]&&Object.keys(e[t]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),e}(),no={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,i,o,a){var n=this;return t.forEach(function(t){n.processors[t]&&(e=n.processors[t].process(e,i,o,a))}),e}};function so(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function ro(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?so(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):so(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function lo(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,o=Pi(t);if(e){var a=Pi(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Ei(this,i)}}var co={},po=function(){Oi(e,Vi);var t=lo(e);function e(i){var o,a,n,s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ki(this,e),o=t.call(this),Zi&&Vi.call(Ni(o)),a=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],n=i,s=Ni(o),a.forEach(function(t){n[t]&&(s[t]=n[t])}),o.options=r,void 0===o.options.keySeparator&&(o.options.keySeparator="."),o.logger=Bi.create("translator"),o}return $i(e,[{key:"changeLanguage",value:function(t){t&&(this.language=t)}},{key:"exists",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==t)return!1;var i=this.resolve(t,e);return i&&void 0!==i.res}},{key:"extractFromKey",value:function(t,e){var i=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");var o=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,a=e.ns||this.options.defaultNS||[],n=i&&t.indexOf(i)>-1,s=!(this.options.userDefinedKeySeparator||e.keySeparator||this.options.userDefinedNsSeparator||e.nsSeparator||function(t,e,i){e=e||"",i=i||"";var o=Xi.filter(function(t){return e.indexOf(t)<0&&i.indexOf(t)<0});if(0===o.length)return!0;var a=new RegExp("(".concat(o.map(function(t){return"?"===t?"\\?":t}).join("|"),")")),n=!a.test(t);if(!n){var s=t.indexOf(i);s>0&&!a.test(t.substring(0,s))&&(n=!0)}return n}(t,i,o));if(n&&!s){var r=t.match(this.interpolator.nestingRegexp);if(r&&r.length>0)return{key:t,namespaces:a};var l=t.split(i);(i!==o||i===o&&this.options.ns.indexOf(l[0])>-1)&&(a=l.shift()),t=l.join(o)}return"string"==typeof a&&(a=[a]),{key:t,namespaces:a}}},{key:"translate",value:function(t,i,o){var a=this;if("object"!==zi(i)&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),i||(i={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);var n=void 0!==i.returnDetails?i.returnDetails:this.options.returnDetails,s=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,r=this.extractFromKey(t[t.length-1],i),l=r.key,c=r.namespaces,p=c[c.length-1],d=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&"cimode"===d.toLowerCase()){if(u){var h=i.nsSeparator||this.options.nsSeparator;return n?(m.res="".concat(p).concat(h).concat(l),m):"".concat(p).concat(h).concat(l)}return n?(m.res=l,m):l}var m=this.resolve(t,i),g=m&&m.res,y=m&&m.usedKey||l,f=m&&m.exactUsedKey||l,v=Object.prototype.toString.apply(g),b=void 0!==i.joinArrays?i.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject;if(_&&g&&("string"!=typeof g&&"boolean"!=typeof g&&"number"!=typeof g)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(v)<0&&("string"!=typeof b||"[object Array]"!==v)){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,g,ro(ro({},i),{},{ns:c})):"key '".concat(l," (").concat(this.language,")' returned an object instead of string.");return n?(m.res=w,m):w}if(s){var x="[object Array]"===v,S=x?[]:{},z=x?f:y;for(var k in g)if(Object.prototype.hasOwnProperty.call(g,k)){var q="".concat(z).concat(s).concat(k);S[k]=this.translate(q,ro(ro({},i),{joinArrays:!1,ns:c})),S[k]===q&&(S[k]=g[k])}g=S}}else if(_&&"string"==typeof b&&"[object Array]"===v)(g=g.join(b))&&(g=this.extendTranslation(g,t,i,o));else{var I=!1,$=!1,N=void 0!==i.count&&"string"!=typeof i.count,D=e.hasDefaultValue(i),O=N?this.pluralResolver.getSuffix(d,i.count,i):"",E=i["defaultValue".concat(O)]||i.defaultValue;!this.isValidLookup(g)&&D&&(I=!0,g=E),this.isValidLookup(g)||($=!0,g=l);var P=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&$?void 0:g,C=D&&E!==g&&this.options.updateMissing;if($||I||C){if(this.logger.log(C?"updateKey":"missingKey",d,p,l,C?E:g),s){var A=this.resolve(l,ro(ro({},i),{},{keySeparator:!1}));A&&A.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var j=[],R=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if("fallback"===this.options.saveMissingTo&&R&&R[0])for(var L=0;L<R.length;L++)j.push(R[L]);else"all"===this.options.saveMissingTo?j=this.languageUtils.toResolveHierarchy(i.lng||this.language):j.push(i.lng||this.language);var T=function(t,e,o){var n=D&&o!==g?o:P;a.options.missingKeyHandler?a.options.missingKeyHandler(t,p,e,n,C,i):a.backendConnector&&a.backendConnector.saveMissing&&a.backendConnector.saveMissing(t,p,e,n,C,i),a.emit("missingKey",t,p,e,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&N?j.forEach(function(t){a.pluralResolver.getSuffixes(t,i).forEach(function(e){T([t],l+e,i["defaultValue".concat(e)]||E)})}):T(j,l,E))}g=this.extendTranslation(g,t,i,m,o),$&&g===l&&this.options.appendNamespaceToMissingKey&&(g="".concat(p,":").concat(l)),($||I)&&this.options.parseMissingKeyHandler&&(g="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(p,":").concat(l):l,I?g:void 0):this.options.parseMissingKeyHandler(g))}return n?(m.res=g,m):g}},{key:"extendTranslation",value:function(t,e,i,o,a){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,ro(ro({},this.options.interpolation.defaultVariables),i),o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init(ro(ro({},i),{interpolation:ro(ro({},this.options.interpolation),i.interpolation)}));var s,r="string"==typeof t&&(i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(r){var l=t.match(this.interpolator.nestingRegexp);s=l&&l.length}var c=i.replace&&"string"!=typeof i.replace?i.replace:i;if(this.options.interpolation.defaultVariables&&(c=ro(ro({},this.options.interpolation.defaultVariables),c)),t=this.interpolator.interpolate(t,c,i.lng||this.language,i),r){var p=t.match(this.interpolator.nestingRegexp);s<(p&&p.length)&&(i.nest=!1)}!1!==i.nest&&(t=this.interpolator.nest(t,function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return a&&a[0]===o[0]&&!i.context?(n.logger.warn("It seems you are nesting recursively key: ".concat(o[0]," in key: ").concat(e[0])),null):n.translate.apply(n,o.concat([e]))},i)),i.interpolation&&this.interpolator.reset()}var d=i.postProcess||this.options.postProcess,u="string"==typeof d?[d]:d;return null!=t&&u&&u.length&&!1!==i.applyPostProcessor&&(t=no.handle(u,t,e,this.options&&this.options.postProcessPassResolved?ro({i18nResolved:o},i):i,this)),t}},{key:"resolve",value:function(t){var e,i,o,a,n,s=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.forEach(function(t){if(!s.isValidLookup(e)){var l=s.extractFromKey(t,r),c=l.key;i=c;var p=l.namespaces;s.options.fallbackNS&&(p=p.concat(s.options.fallbackNS));var d=void 0!==r.count&&"string"!=typeof r.count,u=d&&!r.ordinal&&0===r.count&&s.pluralResolver.shouldUseIntlApi(),h=void 0!==r.context&&("string"==typeof r.context||"number"==typeof r.context)&&""!==r.context,m=r.lngs?r.lngs:s.languageUtils.toResolveHierarchy(r.lng||s.language,r.fallbackLng);p.forEach(function(t){s.isValidLookup(e)||(n=t,!co["".concat(m[0],"-").concat(t)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(n)&&(co["".concat(m[0],"-").concat(t)]=!0,s.logger.warn('key "'.concat(i,'" for languages "').concat(m.join(", "),'" won\'t get resolved as namespace "').concat(n,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(function(i){if(!s.isValidLookup(e)){a=i;var n,l=[c];if(s.i18nFormat&&s.i18nFormat.addLookupKeys)s.i18nFormat.addLookupKeys(l,c,i,t,r);else{var p;d&&(p=s.pluralResolver.getSuffix(i,r.count,r));var m="".concat(s.options.pluralSeparator,"zero");if(d&&(l.push(c+p),u&&l.push(c+m)),h){var g="".concat(c).concat(s.options.contextSeparator).concat(r.context);l.push(g),d&&(l.push(g+p),u&&l.push(g+m))}}for(;n=l.pop();)s.isValidLookup(e)||(o=n,e=s.getResource(i,t,n,r))}}))})}}),{res:e,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:n}}},{key:"isValidLookup",value:function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}},{key:"getResource",value:function(t,e,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,i,o):this.resourceStore.getResource(t,e,i,o)}}],[{key:"hasDefaultValue",value:function(t){var e="defaultValue";for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&e===i.substring(0,12)&&void 0!==t[i])return!0;return!1}}]),e}();function uo(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ho=function(){function t(e){ki(this,t),this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Bi.create("languageUtils")}return $i(t,[{key:"getScriptPartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}},{key:"getLanguagePartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])}},{key:"formatLanguageCode",value:function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],i=t.split("-");return this.options.lowerCaseLng?i=i.map(function(t){return t.toLowerCase()}):2===i.length?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=uo(i[1].toLowerCase()))):3===i.length&&(i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(i[2]=i[2].toUpperCase()),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=uo(i[1].toLowerCase())),e.indexOf(i[2].toLowerCase())>-1&&(i[2]=uo(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}},{key:"isSupportedCode",value:function(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}},{key:"getBestMatchFromCodes",value:function(t){var e,i=this;return t?(t.forEach(function(t){if(!e){var o=i.formatLanguageCode(t);i.options.supportedLngs&&!i.isSupportedCode(o)||(e=o)}}),!e&&this.options.supportedLngs&&t.forEach(function(t){if(!e){var o=i.getLanguagePartFromCode(t);if(i.isSupportedCode(o))return e=o;e=i.options.supportedLngs.find(function(t){if(0===t.indexOf(o))return t})}}),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e):null}},{key:"getFallbackCodes",value:function(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),"string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var i=t[e];return i||(i=t[this.getScriptPartFromCode(e)]),i||(i=t[this.formatLanguageCode(e)]),i||(i=t[this.getLanguagePartFromCode(e)]),i||(i=t.default),i||[]}},{key:"toResolveHierarchy",value:function(t,e){var i=this,o=this.getFallbackCodes(e||this.options.fallbackLng||[],t),a=[],n=function(t){t&&(i.isSupportedCode(t)?a.push(t):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(t)))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&n(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&n(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&n(this.getLanguagePartFromCode(t))):"string"==typeof t&&n(this.formatLanguageCode(t)),o.forEach(function(t){a.indexOf(t)<0&&n(i.formatLanguageCode(t))}),a}}]),t}(),mo=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],go={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0==t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)}},yo=["v1","v2","v3"],fo={zero:0,one:1,two:2,few:3,many:4,other:5};var vo=function(){function t(e){var i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ki(this,t),this.languageUtils=e,this.options=o,this.logger=Bi.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(i={},mo.forEach(function(t){t.lngs.forEach(function(e){i[e]={numbers:t.nr,plurals:go[t.fc]}})}),i)}return $i(t,[{key:"addRule",value:function(t,e){this.rules[t]=e}},{key:"getRule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(t,{type:e.ordinal?"ordinal":"cardinal"})}catch(i){return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}},{key:"needsPlural",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getRule(t,e);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(t,i).map(function(t){return"".concat(e).concat(t)})}},{key:"getSuffixes",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.getRule(t,i);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort(function(t,e){return fo[t]-fo[e]}).map(function(t){return"".concat(e.options.prepend).concat(t)}):o.numbers.map(function(o){return e.getSuffix(t,o,i)}):[]}},{key:"getSuffix",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this.getRule(t,i);return o?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(o.select(e)):this.getSuffixRetroCompatible(o,e):(this.logger.warn("no plural rule found for: ".concat(t)),"")}},{key:"getSuffixRetroCompatible",value:function(t,e){var i=this,o=t.noAbs?t.plurals(e):t.plurals(Math.abs(e)),a=t.numbers[o];this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]&&(2===a?a="plural":1===a&&(a=""));var n=function(){return i.options.prepend&&a.toString()?i.options.prepend+a.toString():a.toString()};return"v1"===this.options.compatibilityJSON?1===a?"":"number"==typeof a?"_plural_".concat(a.toString()):n():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]?n():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}},{key:"shouldUseIntlApi",value:function(){return!yo.includes(this.options.compatibilityJSON)}}]),t}();function bo(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function _o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?bo(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):bo(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var wo=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ki(this,t),this.logger=Bi.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||function(t){return t},this.init(e)}return $i(t,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});var e=t.interpolation;this.escape=void 0!==e.escape?e.escape:Yi,this.escapeValue=void 0===e.escapeValue||e.escapeValue,this.useRawValueToEscape=void 0!==e.useRawValueToEscape&&e.useRawValueToEscape,this.prefix=e.prefix?Gi(e.prefix):e.prefixEscaped||"{{",this.suffix=e.suffix?Gi(e.suffix):e.suffixEscaped||"}}",this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||",",this.unescapePrefix=e.unescapeSuffix?"":e.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":e.unescapeSuffix||"",this.nestingPrefix=e.nestingPrefix?Gi(e.nestingPrefix):e.nestingPrefixEscaped||Gi("$t("),this.nestingSuffix=e.nestingSuffix?Gi(e.nestingSuffix):e.nestingSuffixEscaped||Gi(")"),this.nestingOptionsSeparator=e.nestingOptionsSeparator?e.nestingOptionsSeparator:e.nestingOptionsSeparator||",",this.maxReplaces=e.maxReplaces?e.maxReplaces:1e3,this.alwaysFormat=void 0!==e.alwaysFormat&&e.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var t="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(t,"g");var e="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(e,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(t,e,i,o){var a,n,s,r=this,l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(t){return t.replace(/\$/g,"$$$$")}var p=function(t){if(t.indexOf(r.formatSeparator)<0){var a=Wi(e,l,t);return r.alwaysFormat?r.format(a,void 0,i,_o(_o(_o({},o),e),{},{interpolationkey:t})):a}var n=t.split(r.formatSeparator),s=n.shift().trim(),c=n.join(r.formatSeparator).trim();return r.format(Wi(e,l,s),c,i,_o(_o(_o({},o),e),{},{interpolationkey:s}))};this.resetRegExp();var d=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,u=o&&o.interpolation&&void 0!==o.interpolation.skipOnVariables?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(t){return c(t)}},{regex:this.regexp,safeValue:function(t){return r.escapeValue?c(r.escape(t)):c(t)}}].forEach(function(e){for(s=0;a=e.regex.exec(t);){var i=a[1].trim();if(void 0===(n=p(i)))if("function"==typeof d){var l=d(t,a,o);n="string"==typeof l?l:""}else if(o&&o.hasOwnProperty(i))n="";else{if(u){n=a[0];continue}r.logger.warn("missed to pass in variable ".concat(i," for interpolating ").concat(t)),n=""}else"string"==typeof n||r.useRawValueToEscape||(n=Fi(n));var c=e.safeValue(n);if(t=t.replace(a[0],c),u?(e.regex.lastIndex+=n.length,e.regex.lastIndex-=a[0].length):e.regex.lastIndex=0,++s>=r.maxReplaces)break}}),t}},{key:"nest",value:function(t,e){var i,o,a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=_o({},n);function r(t,e){var i=this.nestingOptionsSeparator;if(t.indexOf(i)<0)return t;var o=t.split(new RegExp("".concat(i,"[ ]*{"))),a="{".concat(o[1]);t=o[0];var n=(a=this.interpolate(a,s)).match(/'/g),r=a.match(/"/g);(n&&n.length%2==0&&!r||r.length%2!=0)&&(a=a.replace(/'/g,'"'));try{s=JSON.parse(a),e&&(s=_o(_o({},e),s))}catch(l){return this.logger.warn("failed parsing options string in nesting for key ".concat(t),l),"".concat(t).concat(i).concat(a)}return delete s.defaultValue,t}for(s.applyPostProcessor=!1,delete s.defaultValue;i=this.nestingRegexp.exec(t);){var l=[],c=!1;if(-1!==i[0].indexOf(this.formatSeparator)&&!/{.*}/.test(i[1])){var p=i[1].split(this.formatSeparator).map(function(t){return t.trim()});i[1]=p.shift(),l=p,c=!0}if((o=e(r.call(this,i[1].trim(),s),s))&&i[0]===t&&"string"!=typeof o)return o;"string"!=typeof o&&(o=Fi(o)),o||(this.logger.warn("missed to resolve ".concat(i[1]," for nesting ").concat(t)),o=""),c&&(o=l.reduce(function(t,e){return a.format(t,e,n.lng,_o(_o({},n),{},{interpolationkey:i[1].trim()}))},o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}]),t}();function xo(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function So(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?xo(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):xo(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function zo(t){var e={};return function(i,o,a){var n=o+JSON.stringify(a),s=e[n];return s||(s=t(o,a),e[n]=s),s(i)}}var ko=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ki(this,t),this.logger=Bi.create("formatter"),this.options=e,this.formats={number:zo(function(t,e){var i=new Intl.NumberFormat(t,e);return function(t){return i.format(t)}}),currency:zo(function(t,e){var i=new Intl.NumberFormat(t,So(So({},e),{},{style:"currency"}));return function(t){return i.format(t)}}),datetime:zo(function(t,e){var i=new Intl.DateTimeFormat(t,So({},e));return function(t){return i.format(t)}}),relativetime:zo(function(t,e){var i=new Intl.RelativeTimeFormat(t,So({},e));return function(t){return i.format(t,e.range||"day")}}),list:zo(function(t,e){var i=new Intl.ListFormat(t,So({},e));return function(t){return i.format(t)}})},this.init(e)}return $i(t,[{key:"init",value:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||","}},{key:"add",value:function(t,e){this.formats[t.toLowerCase().trim()]=e}},{key:"addCached",value:function(t,e){this.formats[t.toLowerCase().trim()]=zo(e)}},{key:"format",value:function(t,e,i,o){var a=this;return e.split(this.formatSeparator).reduce(function(t,e){var n=function(t){var e=t.toLowerCase().trim(),i={};if(t.indexOf("(")>-1){var o=t.split("(");e=o[0].toLowerCase().trim();var a=o[1].substring(0,o[1].length-1);"currency"===e&&a.indexOf(":")<0?i.currency||(i.currency=a.trim()):"relativetime"===e&&a.indexOf(":")<0?i.range||(i.range=a.trim()):a.split(";").forEach(function(t){if(t){var e=ji(t.split(":")),o=e[0],a=e.slice(1).join(":").trim().replace(/^'+|'+$/g,"");i[o.trim()]||(i[o.trim()]=a),"false"===a&&(i[o.trim()]=!1),"true"===a&&(i[o.trim()]=!0),isNaN(a)||(i[o.trim()]=parseInt(a,10))}})}return{formatName:e,formatOptions:i}}(e),s=n.formatName,r=n.formatOptions;if(a.formats[s]){var l=t;try{var c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},p=c.locale||c.lng||o.locale||o.lng||i;l=a.formats[s](t,p,So(So(So({},r),o),c))}catch(d){a.logger.warn(d)}return l}return a.logger.warn("there was no format function for ".concat(s)),t},t)}}]),t}();function qo(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Io(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?qo(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):qo(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function $o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,o=Pi(t);if(e){var a=Pi(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Ei(this,i)}}var No=function(){Oi(e,Vi);var t=$o(e);function e(i,o,a){var n,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return ki(this,e),n=t.call(this),Zi&&Vi.call(Ni(n)),n.backend=i,n.store=o,n.services=a,n.languageUtils=a.languageUtils,n.options=s,n.logger=Bi.create("backendConnector"),n.waitingReads=[],n.maxParallelReads=s.maxParallelReads||10,n.readingCalls=0,n.maxRetries=s.maxRetries>=0?s.maxRetries:5,n.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,n.state={},n.queue=[],n.backend&&n.backend.init&&n.backend.init(a,s.backend,s),n}return $i(e,[{key:"queueLoad",value:function(t,e,i,o){var a=this,n={},s={},r={},l={};return t.forEach(function(t){var o=!0;e.forEach(function(e){var r="".concat(t,"|").concat(e);!i.reload&&a.store.hasResourceBundle(t,e)?a.state[r]=2:a.state[r]<0||(1===a.state[r]?void 0===s[r]&&(s[r]=!0):(a.state[r]=1,o=!1,void 0===s[r]&&(s[r]=!0),void 0===n[r]&&(n[r]=!0),void 0===l[e]&&(l[e]=!0)))}),o||(r[t]=!0)}),(Object.keys(n).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(n),pending:Object.keys(s),toLoadLanguages:Object.keys(r),toLoadNamespaces:Object.keys(l)}}},{key:"loaded",value:function(t,e,i){var o=t.split("|"),a=o[0],n=o[1];e&&this.emit("failedLoading",a,n,e),i&&this.store.addResourceBundle(a,n,i),this.state[t]=e?-1:2;var s={};this.queue.forEach(function(i){var o,r,l,c,p;o=i.loaded,r=n,l=Ui(o,[a],Object),c=l.obj,p=l.k,c[p]=c[p]||[],c[p].push(r),function(t,e){void 0!==t.pending[e]&&(delete t.pending[e],t.pendingCount--)}(i,t),e&&i.errors.push(e),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach(function(t){s[t]||(s[t]={});var e=i.loaded[t];e.length&&e.forEach(function(e){void 0===s[t][e]&&(s[t][e]=!0)})}),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(function(t){return!t.done})}},{key:"read",value:function(t,e,i){var o=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;return t.length?this.readingCalls>=this.maxParallelReads?void this.waitingReads.push({lng:t,ns:e,fcName:i,tried:a,wait:n,callback:s}):(this.readingCalls++,this.backend[i](t,e,function(r,l){if(o.readingCalls--,o.waitingReads.length>0){var c=o.waitingReads.shift();o.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}r&&l&&a<o.maxRetries?setTimeout(function(){o.read.call(o,t,e,i,a+1,2*n,s)},n):s(r,l)})):s(null,{})}},{key:"prepareLoading",value:function(t,e){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var n=this.queueLoad(t,e,o,a);if(!n.toLoad.length)return n.pending.length||a(),null;n.toLoad.forEach(function(t){i.loadOne(t)})}},{key:"load",value:function(t,e,i){this.prepareLoading(t,e,{},i)}},{key:"reload",value:function(t,e,i){this.prepareLoading(t,e,{reload:!0},i)}},{key:"loadOne",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=t.split("|"),a=o[0],n=o[1];this.read(a,n,"read",void 0,void 0,function(o,s){o&&e.logger.warn("".concat(i,"loading namespace ").concat(n," for language ").concat(a," failed"),o),!o&&s&&e.logger.log("".concat(i,"loaded namespace ").concat(n," for language ").concat(a),s),e.loaded(t,o,s)})}},{key:"saveMissing",value:function(t,e,i,o,a){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e)?this.logger.warn('did not save key "'.concat(i,'" as the namespace "').concat(e,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=i&&""!==i&&(this.backend&&this.backend.create&&this.backend.create(t,e,i,o,null,Io(Io({},n),{},{isUpdate:a})),t&&t[0]&&this.store.addResource(t[0],e,i,o))}}]),e}();function Do(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function Oo(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)}return i}function Eo(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Oo(Object(i),!0).forEach(function(e){Ci(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Oo(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function Po(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,o=Pi(t);if(e){var a=Pi(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Ei(this,i)}}function Co(){}var Ao=function(){Oi(e,Vi);var t=Po(e);function e(){var i,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(ki(this,e),i=t.call(this),Zi&&Vi.call(Ni(i)),i.options=Do(a),i.services={},i.logger=Bi,i.modules={external:[]},o=Ni(i),Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach(function(t){"function"==typeof o[t]&&(o[t]=o[t].bind(o))}),n&&!i.isInitialized&&!a.isClone){if(!i.options.initImmediate)return i.init(a,n),Ei(i,Ni(i));setTimeout(function(){i.init(a,n)},0)}return i}return $i(e,[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;"function"==typeof e&&(i=e,e={}),!e.defaultNS&&!1!==e.defaultNS&&e.ns&&("string"==typeof e.ns?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));var o={debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var e={};if("object"===zi(t[1])&&(e=t[1]),"string"==typeof t[1]&&(e.defaultValue=t[1]),"string"==typeof t[2]&&(e.tDescription=t[2]),"object"===zi(t[2])||"object"===zi(t[3])){var i=t[3]||t[2];Object.keys(i).forEach(function(t){e[t]=i[t]})}return e},interpolation:{escapeValue:!0,format:function(t,e,i,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}};function a(t){return t?"function"==typeof t?new t:t:null}if(this.options=Eo(Eo(Eo({},o),this.options),Do(e)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=Eo(Eo({},o.interpolation),this.options.interpolation)),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator),!this.options.isClone){var n;this.modules.logger?Bi.init(a(this.modules.logger),this.options):Bi.init(null,this.options),this.modules.formatter?n=this.modules.formatter:"undefined"!=typeof Intl&&(n=ko);var s=new ho(this.options);this.store=new ao(this.options.resources,this.options);var r=this.services;r.logger=Bi,r.resourceStore=this.store,r.languageUtils=s,r.pluralResolver=new vo(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!n||this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format||(r.formatter=a(n),r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new wo(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new No(a(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];t.emit.apply(t,[e].concat(o))}),this.modules.languageDetector&&(r.languageDetector=a(this.modules.languageDetector),r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=a(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new po(this.services,this.options),this.translator.on("*",function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];t.emit.apply(t,[e].concat(o))}),this.modules.external.forEach(function(e){e.init&&e.init(t)})}if(this.format=this.options.interpolation.format,i||(i=Co),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var l=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);l.length>0&&"dev"!==l[0]&&(this.options.lng=l[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(e){t[e]=function(){var i;return(i=t.store)[e].apply(i,arguments)}});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(function(e){t[e]=function(){var i;return(i=t.store)[e].apply(i,arguments),t}});var c=Ji(),p=function(){var e=function(e,o){t.isInitialized&&!t.initializedStoreOnce&&t.logger.warn("init: i18next is already initialized. You should call init just once!"),t.isInitialized=!0,t.options.isClone||t.logger.log("initialized",t.options),t.emit("initialized",t.options),c.resolve(o),i(e,o)};if(t.languages&&"v1"!==t.options.compatibilityAPI&&!t.isInitialized)return e(null,t.t.bind(t));t.changeLanguage(t.options.lng,e)};return this.options.resources||!this.options.initImmediate?p():setTimeout(p,0),c}},{key:"loadResources",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Co,o="string"==typeof t?t:this.language;if("function"==typeof t&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&"cimode"===o.toLowerCase())return i();var a=[],n=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach(function(t){a.indexOf(t)<0&&a.push(t)})};if(o)n(o);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(t){return n(t)});this.options.preload&&this.options.preload.forEach(function(t){return n(t)}),this.services.backendConnector.load(a,this.options.ns,function(t){t||e.resolvedLanguage||!e.language||e.setResolvedLanguage(e.language),i(t)})}else i(null)}},{key:"reloadResources",value:function(t,e,i){var o=Ji();return t||(t=this.languages),e||(e=this.options.ns),i||(i=Co),this.services.backendConnector.reload(t,e,function(t){o.resolve(),i(t)}),o}},{key:"use",value:function(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&no.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}},{key:"setResolvedLanguage",value:function(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1))for(var e=0;e<this.languages.length;e++){var i=this.languages[e];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}},{key:"changeLanguage",value:function(t,e){var i=this;this.isLanguageChangingTo=t;var o=Ji();this.emit("languageChanging",t);var a=function(t){i.language=t,i.languages=i.services.languageUtils.toResolveHierarchy(t),i.resolvedLanguage=void 0,i.setResolvedLanguage(t)},n=function(n){t||n||!i.services.languageDetector||(n=[]);var s="string"==typeof n?n:i.services.languageUtils.getBestMatchFromCodes(n);s&&(i.language||a(s),i.translator.language||i.translator.changeLanguage(s),i.services.languageDetector&&i.services.languageDetector.cacheUserLanguage(s)),i.loadResources(s,function(t){!function(t,n){n?(a(n),i.translator.changeLanguage(n),i.isLanguageChangingTo=void 0,i.emit("languageChanged",n),i.logger.log("languageChanged",n)):i.isLanguageChangingTo=void 0,o.resolve(function(){return i.t.apply(i,arguments)}),e&&e(t,function(){return i.t.apply(i,arguments)})}(t,s)})};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(n):n(t):n(this.services.languageDetector.detect()),o}},{key:"getFixedT",value:function(t,e,i){var o=this,a=function t(e,a){var n;if("object"!==zi(a)){for(var s=arguments.length,r=new Array(s>2?s-2:0),l=2;l<s;l++)r[l-2]=arguments[l];n=o.options.overloadTranslationOptionHandler([e,a].concat(r))}else n=Eo({},a);n.lng=n.lng||t.lng,n.lngs=n.lngs||t.lngs,n.ns=n.ns||t.ns,n.keyPrefix=n.keyPrefix||i||t.keyPrefix;var c=o.options.keySeparator||".",p=n.keyPrefix?"".concat(n.keyPrefix).concat(c).concat(e):e;return o.t(p,n)};return"string"==typeof t?a.lng=t:a.lngs=t,a.ns=e,a.keyPrefix=i,a}},{key:"t",value:function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)}},{key:"exists",value:function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)}},{key:"setDefaultNamespace",value:function(t){this.options.defaultNS=t}},{key:"hasLoadedNamespace",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var o=this.resolvedLanguage||this.languages[0],a=!!this.options&&this.options.fallbackLng,n=this.languages[this.languages.length-1];if("cimode"===o.toLowerCase())return!0;var s=function(t,i){var o=e.services.backendConnector.state["".concat(t,"|").concat(i)];return-1===o||2===o};if(i.precheck){var r=i.precheck(this,s);if(void 0!==r)return r}return!!this.hasResourceBundle(o,t)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!s(o,t)||a&&!s(n,t)))}},{key:"loadNamespaces",value:function(t,e){var i=this,o=Ji();return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach(function(t){i.options.ns.indexOf(t)<0&&i.options.ns.push(t)}),this.loadResources(function(t){o.resolve(),e&&e(t)}),o):(e&&e(),Promise.resolve())}},{key:"loadLanguages",value:function(t,e){var i=Ji();"string"==typeof t&&(t=[t]);var o=this.options.preload||[],a=t.filter(function(t){return o.indexOf(t)<0});return a.length?(this.options.preload=o.concat(a),this.loadResources(function(t){i.resolve(),e&&e(t)}),i):(e&&e(),Promise.resolve())}},{key:"dir",value:function(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Co,a=Eo(Eo(Eo({},this.options),i),{isClone:!0}),n=new e(a);void 0===i.debug&&void 0===i.prefix||(n.logger=n.logger.clone(i));return["store","services","language"].forEach(function(e){n[e]=t[e]}),n.services=Eo({},this.services),n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n.translator=new po(n.services,n.options),n.translator.on("*",function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];n.emit.apply(n,[t].concat(i))}),n.init(a,o),n.translator.options=n.options,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),e}();Ci(Ao,"createInstance",function(){return new Ao(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)});var jo=Ao.createInstance();jo.createInstance=Ao.createInstance,jo.createInstance,jo.init,jo.loadResources,jo.reloadResources,jo.use,jo.changeLanguage,jo.getFixedT,jo.t,jo.exists,jo.setDefaultNamespace,jo.hasLoadedNamespace,jo.loadNamespaces,jo.loadLanguages;const Ro=et`
  /* input alert section */
  .errorAlert {
    width: 180px;
    background-color: var(--question-numbox-alert-background);
    color: var(--question-numbox-alert-text-color);
    text-align: left;
    padding: 15px 8px;
    position: absolute;
    z-index: 501;
    animation: 1s ease 0s 1 normal none running fadeIn;
    margin-bottom: 60px;
    box-shadow: var(--question-numbox-alert-text-color);
    font-size: var(--question-numbox-alert-fsize);
    font-family: var(--question-numbox-alert-font);
  }
  .invalid_Alert {
    left: 25%;
  }
  @media screen and (max-width: 600px) {
    .errorAlert {
      width: 150px;
    }
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    .errorAlert {
      width: 150px;
    }
  }
`;var Lo=Object.defineProperty,To=Object.getOwnPropertyDescriptor,Bo=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?To(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Lo(e,i,n),n};let Vo=class extends ot{constructor(){super()}render(){return R`
            ${"invalid_Brand"==this.minmaxData.classContains?R`
                    <span class = "errorAlert invalid_Alert" style="top:${this.top}px; " for = ${this.minmaxData.eleID} id = "myPopup" >${jo.t("inputalert.invalid_brand")} </span>
                `:"invalid_Size"==this.minmaxData.classContains?R`
                        <span class = "errorAlert invalid_Alert" style="top:${this.top}px; right:${this.minmaxData.left}px left: unset" for = ${this.minmaxData.eleID} id = "myPopup" >${jo.t("inputalert.invalid_size")}</span>
                    `:R`
                        <span class = "errorAlert " style="top:${this.top}px; left:${this.minmaxData.left}px" for = ${this.minmaxData.eleID}
                            id = "myPopup" > ${jo.t("inputalert.pleaseenter")} ${"measurementInput"==this.minmaxData.classContains?"number":"value"}  ${jo.t("inputalert.between")} ${this.minmaxData.min}
                        ${jo.t("inputalert.and")} ${this.minmaxData.max} ${this.unitText}.</span>
                `} 
       `}firstUpdated(t){let e=this.shadowRoot?.querySelectorAll(".errorAlert")[0];var i=e.getBoundingClientRect();this.top=this.minmaxData.top-i.height}};Vo.styles=[Ro],Bo([Y({type:Object})],Vo.prototype,"minmaxData",2),Bo([Y({type:String})],Vo.prototype,"left",2),Bo([Y({type:String})],Vo.prototype,"width",2),Bo([Y({type:String})],Vo.prototype,"unitText",2),Bo([Y({type:String})],Vo.prototype,"top",2),Vo=Bo([G("c-input-alert")],Vo);const Jo=et`
  /* input numbox single  */  
  .age-num-box .num_box_single {
    height: 87px;
    text-align: center;
    font-size: var(--question-num-box-fsize);
    color: var(--question-num-box-color);
    background: var(--question-num-box-background);
    width: 30%;
    letter-spacing: 10px;
    border: var(--question-num-box-border);
    font-family: var(--question-num-box-font);
    border-radius: 0px;
    box-sizing: border-box;
  }
  /* input numbox */
  .age-num-box {
    width: 100%;
  }
  /* measurement question numbox */
  .measuerment_only_num {
    width: 100%;
    text-align: right;
  }
  /* input measurement  */
  .measuerment_only_num .num_box_single {
    width: 45%;
    height: 59px;
    text-align: center;
    text-align-last: center;
    font-size: var(--question-num-box-measurement-fsize);
    border: var(--question-num-box-border);
    background: var(--question-num-box-background);
    font-family: var(--question-num-box-font);
    color: var(--question-num-box-color);
    border-radius: 0px;
    box-sizing: border-box;
  }
  /* on focus border */
  .num_box_single:focus {
    outline: none;
    /* color: #000000; */
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  @media screen and (max-width: 600px) {
    .age-num-box .num_box_single {
      height: 90px;
      text-align: center;
      width: 200px;
      letter-spacing: 10px;
      border-radius: 0px;
      box-sizing: border-box;
    }
    .measuerment_only_num .num_box_single {
      width: 82%;
      height: 59px;
      text-align: center;
      text-align-last: center;
    }
    .measuerment_only_num {
      width: 100%;
      text-align: right;
    }
  }
  .afterErorLayer {
    height: 100vh;
    width: 100%;
    background-color: var(--question-numbox-alert-side-background);
    z-index: 500;
    top: -95px;
    position: absolute;
    display: none;
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    .age-num-box .num_box_single {
      height: 87px;
      text-align: center;
      font-size: 40px;
      width: 50%;
    }
    .measuerment_only_num .num_box_single {
      width: 75%;
      height: 59px;
      text-align: center;
      text-align-last: center;
    }
  }
`;var Fo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,Mo=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Uo(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Fo(e,i,n),n};let Ho=class extends ot{constructor(){super()}_foundInput(t){t.preventDefault();const e=t.target.value;if(e){const t={detail:{name:e,enable:!0,skiptext:!1},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{let t;t="measuerment_only_num"==this.className?{detail:{name:e,enable:!1,skiptext:!0},bubbles:!0,enable:!1}:{detail:{name:e,enable:!1},bubbles:!0,enable:!1},this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){let t=this.shadowRoot?.querySelector("#ip");var e=[],i=!0;let o;if(this.cmValue="",this.inValue="",t.checkValidity()||(o=t,e[0]=!1,e[1]=o,"measuerment_only_num"==this.className&&("CM"==this.switchVal?e[2]="centimeters":e[2]="inches"),i=!1),"age-num-box"==this.className&&(this.switchVal=""),i)if(""!=this.switchVal)if("CM"==this.switchVal){let i=Number(t.value)/2.54,o="0";i>0&&(o=i.toFixed(2)),e[0]=!0,e[1]=this.paramName,e[2]=o}else e[0]=!0,e[1]=this.paramName,e[2]=t.value;else e[0]=!0,e[1]=this.paramName,e[2]=t.value;return e}_keyPress(t){}_keyDown(t){"Backspace"!==t.key&&"Delete"!==t.key||1==t.srcElement.value.length&&(this.inputKeyPress="");["-","+","e","E"].includes(t.key)&&t.preventDefault()}_changeSize(t,e){let i,o=this.shadowRoot?.querySelector("#ip");if(this.switchVal=e,"CM"==this.switchVal){if(i=(2.54*Number(o.value)).toFixed(2),this.inValue=o.value,t.detail.min,t.detail.max,0!=i)if(t.detail.min>Number(i)){let e=Number(i).toFixed(0);t.detail.min>Number(e)?(this._handleVisibility(),o.value=""):o.value=Number(i).toFixed(0)}else Number(i)>t.detail.max?(o.value="",this._handleVisibility()):o.value=i;else this._handleVisibility(),o.value="",this.cmValue&&(o.value=this.cmValue,this._handleNext(o.value));o.min=t.detail.min,o.max=t.detail.max,o.step=t.detail.step,this.inputData.maxlength=t.detail.maxlength}else{if(i=(Number(o.value)/2.54).toFixed(2),this.cmValue=o.value,0!=i)if(t.detail.min>Number(i)){let e=Number(i).toFixed(0);t.detail.min>Number(e)?(this._handleVisibility(),o.value=""):o.value=Number(i).toFixed(0)}else if(Number(i)>t.detail.max){let e=Number(i).toFixed(0);Number(e)>t.detail.max?(this._handleVisibility(),o.value=""):o.value=Number(i).toFixed(0)}else o.value=i;else this._handleVisibility(),o.value="",this.inValue&&(o.value=this.inValue,this._handleNext(o.value));o.min=t.detail.min,o.max=t.detail.max,o.step=t.detail.step,this.inputData.maxlength=t.detail.maxlength}}_clearInputOnSwitch(t,e){this.switchVal=e;let i=this.shadowRoot?.querySelector("#ip");i.value="",i.min=t.detail.min,i.max=t.detail.max,i.step=t.detail.step,this.inputData.maxlength=t.detail.maxlength,this._handleVisibility()}_setInputValueBlank(){0==this.value?this.value="":this.value=Number(this.value)}_handleVisibility(){let t;t={detail:{name:"",enable:!1,skiptext:!0},bubbles:!0,enable:!1},this.dispatchEvent(new CustomEvent("_enableNext",t))}_handleNext(t){if(t){const t={detail:{name:name,enable:!0,skiptext:!1},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else if("measuerment_only_num"==this.className){const t={detail:{name:this.inputKeyPress,enable:!1,skiptext:!0},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}render(){return this._setInputValueBlank(),R`
            <div class="${this.className}">
                <input id="ip" value=${this.value} name="age" size="" 
                @keypress = ${this._keyPress} @keydown = ${this._keyDown} type=${this.inputData.type} step=${this.inputData.step} 
                @input=${this._foundInput} class="num_box_single ${"measuerment_only_num"==this.className?"measurementInput":""}" 
                min=${this.inputData.min} max=${this.inputData.max} data-maxlength="${this.inputData.maxlength}"
                oninput="javascript: if (this.value.length >${this.inputData.maxlength}) this.value = this.value.slice(0, ${this.inputData.maxlength});"/>
            </div>
        
      `}firstUpdated(t){this._setInputValueBlank()}};Ho.styles=[Jo],Mo([Y({type:Object})],Ho.prototype,"inputData",2),Mo([Y({type:String})],Ho.prototype,"className",2),Mo([Y({type:Number})],Ho.prototype,"min",2),Mo([Y({type:Number})],Ho.prototype,"max",2),Mo([Y({type:String})],Ho.prototype,"value",2),Mo([Y({type:String})],Ho.prototype,"paramName",2),Mo([Y({type:String})],Ho.prototype,"switchVal",2),Mo([Y({type:String})],Ho.prototype,"submitAction",2),Mo([Y({type:String})],Ho.prototype,"inputKeyPress",2),Mo([Y({type:String})],Ho.prototype,"cmValue",2),Mo([Y({type:String})],Ho.prototype,"inValue",2),Ho=Mo([G("c-number-box")],Ho);const Wo=et`
        /* main div  */
        .prev, .next {
            cursor: pointer;
            bottom: 0px;
                    /* color: white; */
            transition: all 0.6s ease 0s;
            user-select: none;
            text-decoration: none;
        }
        /* prev btn section */
        .prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            font-family: var(--template-iconbtn-font);
            background-color: var(--template-iconbtn-background);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            display: flex;
            place-content: center;
            align-items: center;
        }
        /* dissabled btn */
        .disabled {
            pointer-events: none;
        }

        @media screen and (max-width: 600px) {
            .prev, .next {
                cursor: pointer;
                bottom: 0px;
                /* width: 20%; */
                /* color: white; */
                transition: all 0.6s ease 0s;
                user-select: none;
                text-decoration: none;
            }

            .prev {
                text-align: center;
                width: 37px;
                height: 37px;
                border-radius: 50%;
                display: flex;
                place-content: center;
                align-items: center;
            }

            .disabled {
                pointer-events: none;
            }
        }

        @media screen and (max-width: 380px), screen and (max-height: 670px) {
        }
    `;var Qo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Ko=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Go(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Qo(e,i,n),n};let Yo=class extends ot{constructor(){super()}_goBack(t){t.preventDefault();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}render(){return R`<a class="prev ${this.prevNav}"  href="javascript:void(0);"  @click=${this._goBack}>${this.navigationIcon.icon_url}</a> `}};Yo.styles=[Wo],Ko([Y({type:Object})],Yo.prototype,"navigationIcon",2),Ko([Y({type:String})],Yo.prototype,"prevNav",2),Yo=Ko([G("c-icon-button")],Yo);const Zo=et`
    /* main div */
    .next {
      width: 50%;
      height: 37px;
      background-color: var(--template-textbtn-enable-background);
      display: flex;
      place-content: center;
      align-items: center;
      font-size: var(--question-textbtn-fsize);
      font-family: var(--question-textbtn-font);
    }
    /* common styles */
    .prev,
    .next {
      cursor: pointer;
      bottom: 0px;
      /* width: 20%; */
      color: var(--question-textbtn-color);
      transition: all 0.6s ease 0s;
      user-select: none;
      text-decoration: none;
    }
    .disabled {
      pointer-events: none;
      background-color: var(--template-textbtn-dissable-background) !important;
    }

    @media screen and (max-width: 600px) {
      .next {
        width: 53%;
        height: 37px;
        /* background-color: black; */
        display: flex;
        place-content: center;
        align-items: center;
        font-size: 12px;
      }
      .prev,
      .next {
        cursor: pointer;
        bottom: 0px;
        /* width: 20%; */
        color: white;
        transition: all 0.6s ease 0s;
        user-select: none;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 380px), screen and (max-height: 670px) {
    }
  `;var Xo=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,ea=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?ta(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Xo(e,i,n),n};let ia=class extends ot{constructor(){super()}_performValidation(t){t.preventDefault();const e="validate";if("1"==this.submitAction){const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateAndSubmit",t))}else{const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validate",t))}}render(){return"0"==this.submitAction?this.buttonText=this.navigationButton.text:"1"==this.submitAction?this.buttonText="SUBMIT":"2"==this.submitAction&&(this.buttonText="SKIP"),R`
            <a class="next ${this.nextNav}"   href="javascript:void(0);" @click=${this._performValidation} >${this.buttonText}</a>
 
        `}};ia.styles=[Zo],ea([Y({type:String})],ia.prototype,"nextNav",2),ea([Y({type:Object})],ia.prototype,"navigationButton",2),ea([Y({type:String})],ia.prototype,"submitAction",2),ea([Y({type:String})],ia.prototype,"buttonText",2),ia=ea([G("c-text-button")],ia);const oa=et`
        
        /* prev btn section */
        .prev_back_arrow {
            width: 12px;
            height: 12px;
            border: 2px solid;
            border-color: var(--cvimg-uploadimg-prev-back-arrow) transparent transparent var(--cvimg-uploadimg-prev-back-arrow);
            transform: rotate(-45deg);
            margin-left: 10px;
            margin-top: 10px;
            cursor: pointer;
            display: flex;
            position: absolute;
            top: 5%;
            left: 5%;
        }
        /* dissabled btn */
        .disabled {
            pointer-events: none;
        }
        .back_icon{
            display: block;
            width: 20px;
            height: 20px;
        }
        .back_icon img{
            width: 100%;
        }
        @media screen and (max-width: 600px) {
            
        }

        @media screen and (max-width: 380px), screen and (max-height: 670px) {
        }
    `;var aa=Object.defineProperty,na=Object.getOwnPropertyDescriptor,sa=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?na(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&aa(e,i,n),n};let ra=class extends ot{constructor(){super()}_goBack(t){t.preventDefault();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}render(){return R`
            ${""==this.navigationIcon.icon_url?R`
                <a class=" ${this.prevNav} prev_back_arrow"  href="javascript:void(0);"  @click=${this._goBack}></a>
                `:R`
                <a class="back_icon"  href="javascript:void(0);"  @click=${this._goBack}><img class="" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.theme+"/"+this.navigationIcon.icon_url}" /></a> 
                `}
         `}};ra.styles=[oa],sa([Y({type:Object})],ra.prototype,"navigationIcon",2),sa([Y({type:String})],ra.prototype,"prevNav",2),sa([Y({type:String})],ra.prototype,"theme",2),ra=sa([G("c-icon-withoutboarder-button")],ra);const la=et`
    /* nevigation footer section */
    .quiz_footer {
      display: flex;
      place-content: center space-between;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 50%;
      bottom: 0px;
      background-color: var(--question-nevigation-background);
    }
    /* .disabled {
      pointer-events: none;
      background-color: rgb(161, 160, 160);
    } */
    .full-width {
      width: 100%;
    }
    .right-side {
      text-align: -webkit-right;
    }
    .center{
      text-align: -webkit-center;
    }

    @media screen and (max-width: 600px) {
      .quiz_footer {
        display: flex;
        place-content: center space-between;
        align-items: center;
        /* position: absolute; */
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 80%;
        /* bottom: 22px; */
        background-color: var(--question-nevigation-background);
      }
      /* .disabled {
        pointer-events: none;
        background-color: rgb(161, 160, 160);
      } */
    }
    @media screen and (max-width: 380px), screen and (max-height: 670px) {
      .quiz_footer {
        bottom: 0px;
      }
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      .quiz_footer {
        width: 80%;
      }
    }
  `,ca=et`
    .disabled {
      pointer-events: none;
      color: var(--question-nev-button-disable-color) !important;
    }
    .back_icon img{
      width: 18px;
    }
    .back_icon {
        display: flex;
        font-size: var(--question-textbtn-fsize);
        font-family: var(--question-textbtn-font);
        color: var(--question-nev-button-enable-color);
        display: flex;
        justify-content: center;
        text-decoration: underline;
        cursor: pointer;
        bottom: 0px;
        color: var(--question-nev-button-enable-color);
        transition: all 0.6s ease 0s;
        user-select: none;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
    }

    @media screen and (max-width: 380px), screen and (max-height: 670px) {
    }
  `;var pa=Object.defineProperty,da=Object.getOwnPropertyDescriptor,ua=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?da(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&pa(e,i,n),n};let ha=class extends ot{constructor(){super()}_goBack(t){t.preventDefault();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}render(){return R`
            <a class="back_icon "  href="javascript:void(0);"  @click=${this._goBack}><img class="" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.theme+"/"+this.navigationButton.icon_url}" /> ${this.navigationButton.text}</a> 
        `}};ha.styles=[ca],ua([Y({type:String})],ha.prototype,"nextNav",2),ua([Y({type:Object})],ha.prototype,"navigationButton",2),ua([Y({type:String})],ha.prototype,"submitAction",2),ua([Y({type:String})],ha.prototype,"buttonText",2),ua([Y({type:String})],ha.prototype,"theme",2),ha=ua([G("c-icon-text-button")],ha);const ma=et`
    /* main div */
    .next {
      display: flex;
      place-content: center;
      align-items: center;
      font-size: var(--question-textbtn-fsize);
      font-family: var(--question-textbtn-font);
      justify-content: center;
      float: right;
      text-decoration: underline;
      cursor: pointer;
      bottom: 0px;
      color: var(--question-nev-button-enable-color);
      transition: all 0.6s ease 0s;
      user-select: none;
    }
    
    .disabled {
      pointer-events: none;
      color: var(--question-nev-button-disable-color) !important;
    }

    .next img{
      width: 18px;
    }

    @media screen and (max-width: 600px) {
      
    }

    @media screen and (max-width: 380px), screen and (max-height: 670px) {
    }
  `;var ga=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,fa=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?ya(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ga(e,i,n),n};let va=class extends ot{constructor(){super()}_performValidation(t){t.preventDefault();const e="validate";if("1"==this.submitAction){const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateAndSubmit",t))}else{const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validate",t))}}render(){var t;return"0"==this.submitAction?this.buttonText=this.navigationButton.text:"1"==this.submitAction?this.buttonText="Submit":"2"==this.submitAction&&(this.buttonText="Skip"),t="disabled"==this.nextNav?this.navigationButton.icon_url_disable:this.navigationButton.icon_url,R`
             <a class="next ${this.nextNav}"  href="javascript:void(0);"  @click=${this._performValidation}> ${this.buttonText} <img class="" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.theme+"/"+t}" /></a>
        `}};va.styles=[ma],fa([Y({type:String})],va.prototype,"nextNav",2),fa([Y({type:Object})],va.prototype,"navigationButton",2),fa([Y({type:String})],va.prototype,"submitAction",2),fa([Y({type:String})],va.prototype,"buttonText",2),fa([Y({type:String})],va.prototype,"theme",2),va=fa([G("c-text-icon-button")],va);var ba=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,wa=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?_a(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ba(e,i,n),n};let xa=class extends ot{constructor(){super()}render(){return R`
      
        <div class="quiz_footer">
          ${"cc_button_text_circle"==this.navigationValue.left.type?R`
                <c-icon-button navigationIcon=${JSON.stringify(this.navigationValue.left)} prevNav=${this.prevNav}></c-icon-button>`:"cc_button_text_rect"==this.navigationValue.left.type?R`
                <c-text-button navigationButton=${JSON.stringify(this.navigationValue.left)} nextNav=${this.nextNav} submitAction=${this.submitAction} class="full-width">
                </c-text-button>
              `:"cc_button_icon_without_border"==this.navigationValue.left.type?R`
                  <c-icon-withoutboarder-button navigationIcon=${JSON.stringify(this.navigationValue.left)} prevNav=${this.prevNav} theme=${this.theme}></c-icon-withoutboarder-button>`:"cc_button_icon_with_text"==this.navigationValue.left.type?R`
                  <c-icon-text-button navigationButton=${JSON.stringify(this.navigationValue.left)} prevNav=${this.prevNav} theme=${this.theme}> </c-icon-text-button>
                `:"cc_button_text_with_icon"==this.navigationValue.left.type?R`
                  <c-text-icon-button  navigationButton=${JSON.stringify(this.navigationValue.left)} prevNav=${this.prevNav}} submitAction=${this.submitAction} theme=${this.theme}> </c-text-icon-button>
                `:""}
          ${"cc_button_text_rect"==this.navigationValue.right.type?R` 
                <c-text-button navigationButton=${JSON.stringify(this.navigationValue.right)} nextNav=${this.nextNav} submitAction=${this.submitAction} class="full-width right-side">
                </c-text-button>`:"cc_button_text_circle"==this.navigationValue.right.type?R`
                  <c-icon-button navigationIcon=${JSON.stringify(this.navigationValue.right)} prevNav=${this.prevNav}></c-icon-button>
                `:"cc_button_icon_without_border"==this.navigationValue.right.type?R`
                      <c-icon-withoutboarder-button navigationIcon=${JSON.stringify(this.navigationValue.right)} prevNav=${this.prevNav}></c-icon-withoutboarder-button>`:"cc_button_icon_with_text"==this.navigationValue.right.type?R`
                    <c-icon-text-button  navigationIcon=${JSON.stringify(this.navigationValue.right)} nextNav=${this.nextNav} submitAction=${this.submitAction} class="full-width right-side" theme=${this.theme}> </c-icon-text-button>
                  `:"cc_button_text_with_icon"==this.navigationValue.right.type?R`
                    <c-text-icon-button  navigationButton=${JSON.stringify(this.navigationValue.right)} nextNav=${this.nextNav} submitAction=${this.submitAction} class="full-width right-side" theme=${this.theme}> </c-text-icon-button>
                  `:""} 
        </div>
      `}};xa.styles=[la],wa([Y({type:String})],xa.prototype,"nextNav",2),wa([Y({type:String})],xa.prototype,"prevNav",2),wa([Y({type:Object})],xa.prototype,"navigationValue",2),wa([Y({type:String})],xa.prototype,"submitAction",2),wa([Y({type:String})],xa.prototype,"theme",2),xa=wa([G("cc-navigation")],xa);const Sa=et`
    /* title alignment */
    .title_left {
      text-align: left;
    }
    .left {
      text-align: left;
    }
    .right{
      text-align: right
    }
    
    .dropdown_left{
      text-align: left;
      width: 73% !important;
    }
    .dropdown_right{
      text-align: right;
      width: 73% !important;
    }
    /* main div */
    .pant_quesTitle {
      padding: 8px 0px !important;
      margin: 0px !important;
      margin-bottom: 5% !important;
    }
    /* measurement ques title */
    .measurement_title {
      margin: 0;
      padding: 0px;
    }
    /* question title */
    .question_title {
      color: var(--question-title-color);
      font-size: var(--question-title-fsize);
      font-family: var(--question-title-font);
      padding: 8px 12px;
      width: 90%;
      margin: auto;
      margin-bottom: 5%;
    }
    /* question desrction */
    .measurement_desc {
      margin: 0px auto 1%;
      font-size: var(--question-measurementdesc-fsize);
      width: 75%;
      font-family: var(--question-measurementdesc-font);
    }
    .measurement_desc p {
      margin: 0px;
      font-family: var(--question-measurementdesc-font);
      color: var(--question-measurementdesc-color);
    }
    .measurement_title {
      margin-bottom: 0px !important;
      padding: 0px 8px 0px 0px !important;
    }
    .dependent_dropdown {
      width: 73%;
      padding: 0px;
    }
    .margin_none{
      margin: 0px !important;
    }
    @media screen and (max-width: 600px) {
      .measurement_desc {
        margin: 5% auto 6%;
      }
    }
  `;var za=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,qa=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?ka(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&za(e,i,n),n};let Ia=class extends ot{constructor(){super()}render(){return R`
        <div class="question_title ${this.className}">${this.title.title}</div>
          ${this.title.desc?R`
              <div class="measurement_desc">${this.title.desc.map(t=>R`<p>${t}</p>`)}
              </div>
            `:""}
      `}};Ia.styles=[Sa],qa([Y({type:Object})],Ia.prototype,"title",2),qa([Y({type:String})],Ia.prototype,"className",2),Ia=qa([G("c-title")],Ia);const $a=et`
        
        /*  instruction alignment and border  */
        .bottom_instruction {
            bottom: 0%;
            margin-top: auto;
            border-bottom: var(--question-instruction-borderline);
            border-top: var(--question-instruction-borderline);
            width: 100%;
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            padding-bottom: 2%;
        }

        /* instruction text */
        .bottom_instruction > p {
            width: 70%;
            font-size: var(--question-instruction-desc-fsize);
            margin: 0px;
            font-family: var(--question-instruction-desc-font);
            color: var(--question-instruction-desc-color);
        }
        /* instruction text title */
        .bottom_instruction > p:first-child {
            font-weight: 400;
            font-size: var(--question-instruction-title-fsize);
            margin-bottom: 2%;
            margin-top: 2%;
            font-family: var(--question-instruction-title-font);
            color: var(--question-instruction-title-color)
        }
        .bottom_margin_none > p:first-child{
            margin-bottom: 0% !important; 
        }

        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .bottom_instruction > p {
                width: 90%;
            }

            .bottom_instruction>p:first-child {
                font-weight: 400;
                margin: 10px;
            }

            .bottom_instruction>p {
                            /* width: 63%; */
                margin: 0px;
            }
        }

        @media screen and (max-width: 600px) {
            .bottom_instruction {
                margin-top: auto;
                width: 100%;
                        /* margin-bottom:20px; */
                padding-bottom: 10px;
                display: flex;
                flex-direction: column;
                align-content: center;
                align-items: center;
                        /* position: absolute; */
                        /* bottom: 15%; */
            }

            .bottom_instruction > p {
                width: 90%;
                margin: 0px;
            }
        }
    `;var Na=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Oa=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Da(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Na(e,i,n),n};let Ea=class extends ot{constructor(){super()}render(){return R`
      <div class="bottom_instruction ${0==Number("0")?"bottom_margin_none":""}">   
            ${this.instruction.map((t,e)=>R`<p>${t}</p>`)}
      </div>
    `}};Ea.styles=[$a],Oa([Y({type:Object})],Ea.prototype,"instruction",2),Ea=Oa([G("c-instruction")],Ea);const Pa=et`
        /* num box */
        .num_boxes {
            width: 100%;
        }
        /* age box */
        .age_boxes {
            align-self: center;
            width: 100%;
        }
        /* margin auto */
        .m_t_a {
            margin-top: auto;
        }
        .m_t_b {
            margin-bottom: auto;
        }
        /* instruction alignment */
        .instruction_margin {
            margin-top: auto;
            margin-bottom: 3%;
            padding-bottom: 5%;
        }
        @media screen and (max-width: 600px) {
            .instruction_margin {
            margin-bottom: 6%;
            }
        } 
    `;var Ca=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,ja=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Aa(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ca(e,i,n),n};let Ra=class extends ot{constructor(){super(),this.dataCollection=""}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){let t=this.shadowRoot?.getElementById("nb");var e=[];if((e[0]=t.validate(),this.dataCollection==ni)&&0==e[0][0]){const t={detail:{name:name,isAgeQuizErr:!0,isZipCodeError:!1},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("_showQuizErrorMsg",t))}return e}_handleNextAction(){""==this.value?this.nextNav="disabled":this.nextNav=""}render(){return R`
            <c-title class="redone_margin_top" title=${JSON.stringify(this.ageData.bc_data)}></c-title>
            <div class="num_boxes age_boxes">
                <c-number-box class="m_t_b" value=${this.value} id="nb" inputData=${JSON.stringify(this.ageData.bc_data.components[0].input)}
                paramName=${JSON.stringify(this.ageData.bc_data.components[0].param_name)} @_enableNext=${this._handleVisibility} className="age-num-box" > </c-number-box>
            </div>
            <c-instruction class="instruction_margin" instruction=${JSON.stringify(this.ageData.instr)}></c-instruction>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} theme=${this.theme}
            submitAction=${this.submitAction}></cc-navigation>
        `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"value"==e&&this._handleNextAction()})}};Ra.styles=[Pa],ja([Y({type:Object})],Ra.prototype,"ageData",2),ja([Y({type:String})],Ra.prototype,"val",2),ja([Y({type:String})],Ra.prototype,"nextNav",2),ja([Y({type:String})],Ra.prototype,"prevNav",2),ja([Y({type:String})],Ra.prototype,"value",2),ja([Y({type:Object})],Ra.prototype,"navigationData",2),ja([Y({type:String})],Ra.prototype,"submitAction",2),ja([Y({type:Object})],Ra.prototype,"minmaxData",2),ja([Y({type:Boolean})],Ra.prototype,"disabled",2),ja([Y({type:String})],Ra.prototype,"theme",2),ja([Y({type:String,reflect:!0})],Ra.prototype,"dataCollection",2),Ra=ja([G("bc-age")],Ra);const La=et`
    /* main div */
    .switch_div {
      display: flex;
      align-items: center;
      /* font-family: "Avenir Light"; */
    }
    /* unit section */
    .measuremet_unit {
      font-size: var(--question-unit-fsize);
      margin: 10px;
      color: var(--question-unit-color);
      font-family: var(--question-unit-font);
    }
    /* input to switch styles */
    .switch {
      position: relative;
      display: inline-block;
      width: 65px;
      height: 29px;
    }
    .switch input {
      opacity: 0;
      width: 0px;
      height: 0px;
    }
    input:checked + .switch_slider {
      background-color: var(--question-switch-rounder-background);
    }
    .switch_slider.switch_round {
      border-radius: 34px;
      border: var(--question-switch-rounder-border);
    }
    .switch_slider {
      position: absolute;
      cursor: pointer;
      inset: 0px;
      /* background-color: rgb(255, 255, 255); */
      transition: all 0.4s ease 0s;
    }
    input:checked + .switch_slider::before {
      transform: translateX(34px);
    }
    .switch_slider.switch_round::before {
      border-radius: 50%;
    }
    .switch_slider::before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 3px;
      bottom: 3px;
      background-color: var(--question-switch-rounder-thumb-background);
      transition: all 0.4s ease 0s;
    }

    @media screen and (max-width: 600px) {
      .measuremet_unit {  
        margin: 12px;
      }
      input:checked + .switch_slider::before {
        transform: translateX(32px);
      }
      .switch_slider::before {
        left: 5px;
      }
    }
  `;var Ta=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Va=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ba(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ta(e,i,n),n};let Ja=class extends ot{constructor(){super()}_foundInput(t){t.preventDefault();const e=t.srcElement.checked;this.val=e?this.switchData.c_switch.labels[1]:this.switchData.c_switch.labels[0];const i={detail:{name:e,val:this.val,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_changeUnit",i))}_setSwitch(){let t=this.shadowRoot?.querySelector("#waist_switch");t.checked?t.checked=!1:t.checked=!0}render(){return R`
            <div class="switch_div">
                <a class="measuremet_unit">${this.switchData.c_switch.labels[0]}</a>
                <label class="switch">
                    <input id="waist_switch" type="checkbox" checked @input=${this._foundInput} />
                    <span class="switch_slider switch_round"></span>
                </label>
                <a class="measuremet_unit">${this.switchData.c_switch.labels[1]}</a>
            </div>
        `}};Ja.styles=[La],Va([Y({type:Object})],Ja.prototype,"switchData",2),Va([Y({type:String})],Ja.prototype,"val",2),Ja=Va([G("c-switch")],Ja);const Fa=et`
    /* input box and switch main section */
    .measurement_div {
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 10%;
      /* position: absolute; */
      width: 100%;
      /* width: 90%; */
      gap: 4%;
      margin: auto;
    }
    .measurement_div div {
      width: 50%;
    }
    @media screen and (max-width: 600px) {
      .measurement_div {
        display: flex;
        justify-content: center;
        gap: 5%;
        padding: 5% 5%;
        align-items: center;
        margin-bottom: 20px;
        bottom: 5%;
        /* width: 100%; */
        width: 90%;
        background: var(--question-measurement-component-background-color);
      }
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      .measurement_div {
        display: flex;
        justify-content: center;
        gap: 5%;
        padding: 5%;
        align-items: center;
        margin-bottom: 20px;
        bottom: 5%;
        /* width: 100%; */
        width: 90%;
        background: var(--question-measurement-component-background-color);
      }
    }
    @media screen and (max-width: 430px) {
      .measurement_div {
        padding: 3% 5% !important;
      }
    }
  `;var Ua=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Ha=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ma(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ua(e,i,n),n};let Wa=class extends ot{constructor(){super()}_handleVisibility(t){this.dispatchEvent(new CustomEvent("_enableNext",t))}validate(){let t=this.shadowRoot?.getElementById("inputbox");return t.validate()}_handleUnitChange(t){let e=this.shadowRoot?.getElementById("inputbox");this.shadowRoot?.getElementById("switch");let i={};i="IN"==t.detail.val?{detail:{min:this.inputSwitchData.components[0].cc_input_switch.input_validations[0].min,max:this.inputSwitchData.components[0].cc_input_switch.input_validations[0].max,step:this.inputSwitchData.components[0].cc_input_switch.input_validations[0].step,maxlength:this.inputSwitchData.components[0].cc_input_switch.input_validations[0].maxlength}}:{detail:{min:this.inputSwitchData.components[0].cc_input_switch.input_validations[1].min,max:this.inputSwitchData.components[0].cc_input_switch.input_validations[1].max,step:this.inputSwitchData.components[0].cc_input_switch.input_validations[1].step,maxlength:this.inputSwitchData.components[0].cc_input_switch.input_validations[1].maxlength}},e._clearInputOnSwitch(i,t.detail.val)}render(){return R`
            <div class="measurement_div">
                <div>
                    <c-number-box id="inputbox" @_enableNext=${this._handleVisibility} inputData=${JSON.stringify(this.inputSwitchData.components[0].cc_input_switch.input_validations[0])} 
                    value=${this.value}  className="measuerment_only_num" paramName="${this.paramName}" switchVal="${this.inputData}" submitAction ="${this.submitAction}"></c-number-box></div>
                <div>
                    <c-switch id="switch"  @_changeUnit=${this._handleUnitChange} switchData=${JSON.stringify(this.inputSwitchData.components[0].cc_input_switch)}></c-switch></div>
            </div>
        `}firstUpdated(t){}};Wa.styles=[Fa],Ha([Y({type:Object})],Wa.prototype,"inputSwitchData",2),Ha([Y({type:Object})],Wa.prototype,"inputData",2),Ha([Y({type:String})],Wa.prototype,"paramName",2),Ha([Y({type:String})],Wa.prototype,"value",2),Ha([Y({type:String})],Wa.prototype,"submitAction",2),Wa=Ha([G("cc-input-switch")],Wa);const Qa=et`
        /* margin auto */
        .m_t_a{
            margin-top: auto;
        }
        .m_t_b{
            margin-bottom: auto;
        }
        /* height of measurement image section */
        .img_height{
            height: 50%
        }
    `;var Ga=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,Ya=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ka(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ga(e,i,n),n};let Za=class extends ot{constructor(){super()}switchValue(t){}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",""==this.measurementData.bc_data.components[0].cc_input_switch.c_input.required?(1!=this.submitAction&&(t.detail.name?this.submitAction=0:t.detail.skiptext?(this.submitAction=2,this.nextNav=""):this.submitAction=0),1==this.submitAction&&t.detail.skiptext&&(this.nextNav="")):t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){let t=this.shadowRoot?.getElementById("is");var e=[];return e[0]=t.validate(),e}_handleDataAndNextAction(){1!=this.submitAction&&(""==this.measurementData.bc_data.components[0].cc_input_switch.c_input.required?(this.nextNav="",0==this.measurementValue?(this.measurementValue="",this.submitAction=2):this.submitAction=0):(this.measurementValue?this.nextNav="":this.nextNav="disabled",this.measurementValue?this.nextNav="":this.nextNav="disabled"))}render(){return R`
            <c-title title=${JSON.stringify(this.measurementData.bc_data)} className='measurement_title'></c-title>
            <c-image class="img_height"  imgSrc=${this.theme==ei?this.measurementData.bc_data.light.image_url:this.measurementData.bc_data.dark.image_url}></c-image>
            <cc-input-switch id="is" @_changeUnit=${this.switchValue}
            @_enableNext=${this._handleVisibility} paramName = ${JSON.stringify(this.measurementData.bc_data.components[0].param_name)}
            submitAction=${this.submitAction} inputSwitchData=${JSON.stringify(this.measurementData.bc_data)} value=${this.measurementValue}></cc-input-switch>
            <cc-navigation submitAction=${this.submitAction} prevNav=${this.prevNav} theme=${this.theme}
            nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} skipNav=${this.skipNav}></cc-navigation>
        `}firstUpdated(t){0==this.submitAction&&(""==this.measurementData.bc_data.components[0].cc_input_switch.c_input.required?(this.nextNav="",this.measurementValue?this.submitAction=0:this.submitAction=2):this.measurementValue?this.nextNav="":this.nextNav="disabled")}updated(t){t.forEach((t,e)=>{"measurementValue"==e&&this._handleDataAndNextAction()})}};Za.styles=[Qa],Ya([Y({type:Object})],Za.prototype,"measurementData",2),Ya([Y({type:Object})],Za.prototype,"navigationData",2),Ya([Y({type:String})],Za.prototype,"nextNav",2),Ya([Y({type:String})],Za.prototype,"prevNav",2),Ya([Y({type:String})],Za.prototype,"skipNav",2),Ya([Y({type:String})],Za.prototype,"submitAction",2),Ya([Y({type:String})],Za.prototype,"measurementValue",2),Ya([Y({type:Boolean})],Za.prototype,"disabled",2),Ya([Y({type:String})],Za.prototype,"val",2),Ya([Y({type:String})],Za.prototype,"theme",2),Za=Ya([G("bc-measurement")],Za);const Xa=et`
        /* progressbar section */
        .progressbar_new{
            position: absolute;
            top: 0%;
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 0.7%;
            z-index: 99;
        }
        .progressbar_new img{
            width: 100%;
            height: 8px;
        }
        .progress-div{
            width: 100%;
            height: 8px;
            display: inline-flex;
        }
        /* progress bar by progress */
        .half-progress-dark{
            width: 50%;
            background: var(--progress-complete);
        }
        .half-progress-light{
            width: 50%;
            background: var(--progress-incomplete);
        }
        .progress-25-dark{
            width: 25%;
            background: var(--progress-complete);
        }
        .progress-75-light{
            width: 75%;
            background: var(--progress-incomplete);
        }
        .progress-75-dark{
            width: 75%;
            background: var(--progress-complete);
        }
        .progress-25-light{
            width: 25%;
            background: var(--progress-incomplete);
        }
        .progress-full-dark{
            width: 100%;
            background: var(--progress-complete);
        }
        .progress-full-light{
            width: 100%;
            background: var(--progress-incomplete);
        }   
    `;var tn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,on=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?en(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&tn(e,i,n),n};let an=class extends ot{constructor(){super()}render(){return R`
            <div id="progressbar_new" class="progressbar_new"></div>
      `}firstUpdated(t){let e,i=this.shadowRoot?.querySelectorAll("#progressbar_new")[0];e=this.progressData.highlighted;for(let o=0;o<this.progressData.total;o++)if(.5==e){const t=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");o.classList.add("half-progress-dark"),a.classList.add("half-progress-light"),t.appendChild(o),t.appendChild(a),e=0,t.classList.add("progress-div"),i.appendChild(t)}else if(.25==e){const t=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");o.classList.add("progress-25-dark"),a.classList.add("progress-75-light"),t.appendChild(o),t.appendChild(a),e=0,t.classList.add("progress-div"),i.appendChild(t)}else if(.75==e){const t=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");o.classList.add("progress-75-dark"),a.classList.add("progress-25-light"),t.appendChild(o),t.appendChild(a),e=0,t.classList.add("progress-div"),i.appendChild(t)}else if(e>.5){const t=document.createElement("div"),o=document.createElement("div");o.classList.add("progress-full-dark"),t.appendChild(o),e-=1,t.classList.add("progress-div"),i.appendChild(t)}else{const t=document.createElement("div"),e=document.createElement("div");e.classList.add("progress-full-light"),t.appendChild(e),t.classList.add("progress-div"),i.appendChild(t)}}};an.styles=[Xa],on([Y({type:Object})],an.prototype,"progressData",2),on([Y({type:Object})],an.prototype,"progressImg",2),an=on([G("c-progressbar")],an);const nn=et`
  /* question title section */
  .question_title {
    color: var(--question-multiline-color);
    font-size: var(--question-multiline-fsize);
    font-family: var(--question-multiline-font);
    padding: 8px 12px;
    margin-bottom: 5%;
    /* width: 90%; */
  }
  .question_title p {
    margin: 0px;
  }
`;var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,ln=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?rn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&sn(e,i,n),n};let cn=class extends ot{constructor(){super()}render(){return R`
            <div class="question_title question_center"> 
                ${this.titleData.info.map(t=>R`<p>${t}</p>`)}
            </div>
        `}};cn.styles=[nn],ln([Y({type:Object})],cn.prototype,"titleData",2),cn=ln([G("c-multiline-title")],cn);const pn=et`
  /* btn section */
  .yesno_buttons {
    width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 2%;
  }
  /* btn border */
  .button_radio {
    width: 26%;
    height: 45px;
    position: relative;
    border: var(--question-choicebtn-border);
    /* font-size: 10px; */
  }
  /* radio btn input and label styles */
  .button_radio input[type="radio"] {
    opacity: 0.011;
    z-index: 100;
    font-family: var(--question-choicebtn-font);
        cursor: pointer;
  }
  .button_radio label,
  .button_radio input {
    display: block;
    position: absolute;
    inset: 0px;
    font-size: var(--question-choicebtn-fsize); 
  }
  .button_radio input[type="radio"]:checked + label {
    background: var(--question-choicebtn-selected-background);
    color: var(--question-choicebtn-selected-color);
    font-family: var(--question-choicebtn-font);
  }
  .button_radio label {
    cursor: pointer;
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--question-choicebtn-font);
    color: var(--question-choicebtn-unselected-color)
  }
  @media screen and (max-width: 600px) {
    .yesno_buttons {
      place-content: center space-evenly;
      gap: 0%;
      justify-content: space-evenly;
      /* margin: initial; */
    }
    .button_radio {
      width: 40%;
      height: 45px;
      position: relative;
      /* border: 1px solid black;
      font-size: 12px;
      font-family: "Avenir Medium"; */
    }
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    .yesno_buttons {
      gap: 5%;
    }
    .button_radio {
      width: 36%;
    }
  }
`;var dn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,hn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?un(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&dn(e,i,n),n};let mn=class extends ot{constructor(){super()}_foundInput(t){t.preventDefault();const e=t.srcElement.value;if(this.selectButton=e,e){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){this.shadowRoot?.querySelector("#bg");var t=[];return""!=this.selectButton?(t[0]=!0,t[1]=this.paramName,t[2]=this.selectButton):t[0]=!1,t}_handleNextAction(){this.selectButton=this.buttonValue}render(){return R`  
            <div class="yesno_buttons" >
                ${this.choiceButtonData[0].choice_buttons.map(t=>R`
                        <div class="button_radio">
                            ${this.buttonValue==t.value?R`
                                    <input id="bg" type="radio" id="${t.value}" name="yesno" value="${t.value}" 
                                    @input=${this._foundInput} checked/>
                                    <label class="btn btn-default" for="${t.value}">${t.label}</label>   
                                `:R`
                                    <input id="bg" type="radio" id="${t.value}" name="yesno" value="${t.value}" 
                                    @input=${this._foundInput} />
                                    <label class="btn btn-default" for="${t.value}">${t.label}</label>
                                `}   
                        </div>  
                    `)}
            </div>
        `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"buttonValue"==e&&this._handleNextAction()})}};mn.styles=[pn],hn([Y({type:Object})],mn.prototype,"choiceButtonData",2),hn([Y({type:String})],mn.prototype,"paramName",2),hn([Y({type:String})],mn.prototype,"buttonValue",2),hn([Y({type:String})],mn.prototype,"selectButton",2),mn=hn([G("c-choice-button")],mn);const gn=et`
        /* margin auto */
        .m_t_a {
            margin-top: auto;
        }

        .m_t_b {
            margin-bottom: auto;
        }
        /* insruction section margin */
        .instruction_margin {
            margin-top: auto;
            margin-bottom: 3%;
            padding-bottom: 2%;
        }
        
        @media screen and (max-width: 600px) {
            .instruction_margin {
                margin-bottom: 6%;
            }
            
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
           
        }
    `;var yn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,vn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?fn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&yn(e,i,n),n};let bn=class extends ot{constructor(){super()}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test","Yes"==t.detail.name?this.submitAction=0:this.submitAction=1}_bcValidate(){let t=this.shadowRoot?.getElementById("cb");var e=[];return e[0]=t.validate(),e}_handleNextAction(){""==this.value?this.nextNav="disabled":(this.nextNav="","Yes"==this.value?this.submitAction=0:this.submitAction=1)}render(){return R`
            <c-multiline-title class="redone_margin_top" titleData=${JSON.stringify(this.guidedData.bc_data)}></c-multiline-title>
            <c-choice-button class="" id="cb"
            paramName=${JSON.stringify(this.guidedData.bc_data.components[0].param_name)}
            choiceButtonData=${JSON.stringify(this.guidedData.bc_data.components)} buttonValue =${this.value} 
            @_enableNext=${this._handleVisibility}></c-choice-button>
            <c-instruction  class="instruction_margin" instruction=${JSON.stringify(this.guidedData.instr)}></c-instruction>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} theme=${this.theme} submitAction=${this.submitAction}></cc-navigation>
        `}updated(t){t.forEach((t,e)=>{"value"==e&&this._handleNextAction()})}};bn.styles=[gn],vn([Y({type:Object})],bn.prototype,"guidedData",2),vn([Y({type:Object})],bn.prototype,"navigationData",2),vn([Y({type:String})],bn.prototype,"nextNav",2),vn([Y({type:String})],bn.prototype,"prevNav",2),vn([Y({type:String})],bn.prototype,"submitAction",2),vn([Y({type:String})],bn.prototype,"value",2),vn([Y({type:String})],bn.prototype,"val",2),vn([Y({type:Boolean})],bn.prototype,"disabled",2),vn([Y({type:String})],bn.prototype,"theme",2),bn=vn([G("bc-guided-choice")],bn);const _n=et`
  /* image main div */
  .question_images {
    width: 100%;
    height: 100%;
  }
  /* image section */
  .bodyshapes {
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    .bodyshapes {
      height: 85%;
    }
  }
`;var wn=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Sn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?xn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&wn(e,i,n),n};let zn=class extends ot{constructor(){super()}render(){return R`
      <div class="question_images">
        <img class="bodyshapes" src=" ${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.imgSrc}" alt="" />
      </div>
    `}};zn.styles=[_n],Sn([Y({type:String})],zn.prototype,"imgSrc",2),zn=Sn([G("c-image")],zn);const kn=et`
    /* main div */
    .slider_container {
        margin-top: auto;
        margin-bottom: auto;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }
    /* slider section  */
    .shape_slider {
        width: 50%;
    }

    .shape_slider {
        -webkit-appearance: none;
        width: 35%;
        height: 0;
        background: transparent;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        /* margin: 0 0 36px 0; */
        /* position: absolute; */
        padding-bottom: 34px;
        border-top: var(--question-slider-line);
        position: absolute;
        padding-bottom: 45px;
        border-radius: 0px;
    }

    .shape_slider:hover {
        opacity: 1;
    }
    /* selected postion thumbnail */
    .shape_slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        background: var(--question-slider-thumb-background);
        cursor: pointer;
        border: var(--question-slider-thumb-border);
        border-radius: 50%;
    }

    .shape_slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: var(--question-slider-thumb-background);
        cursor: pointer;
        border: var(--question-slider-thumb-border);
        border-radius: 50%;
    }
    /* slider label */
    .shapes_title {
        display: flex;
        place-content: space-between;
        justify-content: space-between;
        width: 90%;
        padding-top: 10px;
    }

    .shapes_title p {
        width: 33.3%;
        font-size: var(--question-slider-text-fsize);
        font-family: var(--question-slider-text-font);
        color: var(--question-slider-text-color);
    }

    @media screen and (max-width: 600px) {
        .slider_container {
            margin-top: auto;
            margin-bottom: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .shape_slider {
            width: 60%;
            padding-bottom: 45px;
        }

        .shapes_title {
            width: 80%;
        }
    }

    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
        .shape_slider {
            width: 50%;
        }

        .slider_container {
            width: 70%;
        }
    }
  `;var qn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,$n=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?In(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&qn(e,i,n),n};let Nn=class extends ot{constructor(){super()}validate(){let t=this.shadowRoot?.querySelector("#sl"),e=t.value;var i=[];return i[0]=!0,i[1]=t.name,i[2]=this.slider.list[Number(e)-1],i}_radioShapes(t){let e=this.shadowRoot?.querySelector("#sl"),i=e.value;const o={detail:{selectIndex:Number(i)-1}};this.dispatchEvent(new CustomEvent("_setimg",o))}render(){return R`
      <div class="slider_container">
        <input id="sl" name=${this.paramName} type="range" min="1" max="3" value=${this.shapeValue} class="shape_slider" @input="${this._radioShapes}"/>
        <div class="shapes_title">
          ${this.slider.list.map(t=>R`<p>${t}</p>`)}
        </div>
      </div>
    `}};Nn.styles=[kn],$n([Y({type:Object})],Nn.prototype,"slider",2),$n([Y({type:String})],Nn.prototype,"paramName",2),$n([Y({type:String})],Nn.prototype,"shapeValue",2),Nn=$n([G("c-slider")],Nn);const Dn=et`
  /* margin auto */
  .m_t_a {
    margin-top: auto;
  }
  .m_t_b {
    margin-bottom: auto;
  }
  /* shape img section height */
  .img_height {
    height: 50%;
  }
  /* space between image and slider */
  .slider-top {
    margin-top: 2%;
  }
  @media screen and (max-width: 600px) {
    .slider-top {
      margin-top: 5%;
    }
  }
`;var On=Object.defineProperty,En=Object.getOwnPropertyDescriptor,Pn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?En(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&On(e,i,n),n};let Cn=class extends ot{constructor(){super()}_bcSetImg(t){this.imgIndex=t.detail.selectIndex}_bcValidate(){let t=this.shadowRoot?.getElementById("sl");var e=[];return e[0]=t.validate(),e}_showSelectdValue(){var t=this.shapeData.bc_data.components[0].c_slider.list;if(this.value)for(let e=0;e<t.length;e++)t[e]===this.value&&(this.imgIndex=e,this.index=e+1);else this.imgIndex=1,this.index=2}render(){return this.paramName=this.shapeData.bc_data.components[0].param_name,R`
            <c-title class="" title=${JSON.stringify(this.shapeData.bc_data)}></c-title>
            <c-image class="img_height" imgSrc=${this.theme==ei?this.shapeData.bc_data.components[0].light.images[this.imgIndex]:this.shapeData.bc_data.components[0].dark.images[this.imgIndex]}></c-image>
            <c-slider class="slider-top" id="sl" paramName=${JSON.stringify(this.shapeData.bc_data.components[0].param_name)}
             slider=${JSON.stringify(this.shapeData.bc_data.components[0].c_slider)} shapeValue=${this.index} @_setimg=${this._bcSetImg}></c-slider>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav} navigationValue=${JSON.stringify(this.navigationData)} theme=${this.theme} submitAction=${this.submitAction}></cc-navigation>
        `}firstUpdated(t){this.imgIndex="0",this._showSelectdValue()}updated(t){t.forEach((t,e)=>{"value"==e&&this._showSelectdValue()})}};Cn.styles=[Dn],Pn([Y({type:Object})],Cn.prototype,"shapeData",2),Pn([Y({type:Object})],Cn.prototype,"navigationData",2),Pn([Y({type:Number})],Cn.prototype,"index",2),Pn([Y({type:String})],Cn.prototype,"paramName",2),Pn([Y({type:String})],Cn.prototype,"nextNav",2),Pn([Y({type:String})],Cn.prototype,"prevNav",2),Pn([Y({type:String})],Cn.prototype,"submitAction",2),Pn([Y({type:String})],Cn.prototype,"value",2),Pn([Y({type:String})],Cn.prototype,"imgIndex",2),Pn([Y({type:String})],Cn.prototype,"theme",2),Cn=Pn([G("bc-shape")],Cn);const An=et`
    /* question title */
    .question_title {
      color: var(--question-title-color);
      font-size: var(--question-title-fsize);
      font-family: var(--question-title-font);
       margin: 5px auto 10px auto;
    }
    /* height subtitle  */
    .question_subtitle {
      font-size: var(--question-subtitle-fsize);
      font-family: var(--question-subtitle-font);
      margin: 5px auto 10px auto;
      color: var(--question-subtitle-color);
    }
    /* input box section */
    .num_boxes {
      align-self: flex-start;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
    }
    .num_boxes > p {
      margin: 0px 8px;
      font-family: var(--question-num-box-unit-font);
      font-size: var(--question-num-box-unit-fsize);
      color: var(--question-num-box-unit-color);
    }
    .height {
      margin-left: 5%;
      width: 95% !important;
    }
    .height .num_box_single {
      height: 87px;
      text-align: center;
      font-size: var(--question-num-box-fsize);
      width: 30%;
      color: var(--question-num-box-color);
      background: var(--question-num-box-background);
      letter-spacing: unset;
      border: var(--question-num-box-border);
      font-family: var(--question-num-box-font);
      box-sizing: border-box;
    }
    .num_box_multiple {
      width: 13.5%;
      height: 87px;
      text-align: center;
      font-size: var(--question-num-box-fsize);
      border: var(--question-num-box-border);
      font-family: var(--question-num-box-font);
      border-radius: 0px;
      box-sizing: border-box;
      color: var(--question-num-box-color);
      background: var(--question-num-box-background);
    }

    .num_box_height:focus,
    .num_box_weight:focus,
    .num_box_single:focus,
    .num_box_multiple:focus,
    .measuerment_only_num:focus {
      outline: none;
    }
    .element_hide {
      display: none;
    }
    /* switch section */
    .ht_wt_switches {
      /* height: 20%; */
      display: flex;
      justify-content: center;
      margin-top: 15px !important;
      margin-bottom: 15px !important;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    @media screen and (max-width: 600px) {
      .height {
        margin-left: 8%;
        width: 92% !important;
      }
      .height .num_box_single {
        height: 90px;
        text-align: center;
        width: 50%;
        letter-spacing: unset;
        box-sizing: border-box;
      }
      .num_box_multiple {
        width: 25%;
        height: 90px;
        text-align: center;
        border-radius: 0px;
        box-sizing: border-box;
      }
      .ht_wt_switches {
        display: flex;
        margin: 30px !important;
      }
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      .num_box_multiple {
        width: 23%;
        height: 87px;
        box-sizing: border-box;
      }
      .height .num_box_single {
        width: 50%;
        height: 87px;
        box-sizing: border-box;
      }
      .ht_wt_switches {
        margin: 20px 0px;
      }
      .height {
        margin-left: 8%;
        width: 92% !important;
      }
    }
    @media screen and (max-width: 380px), screen and (max-height: 670px) {
      .ht_wt_switches {
        margin: 10px;
      }
    }

    .afterErorLayer {
      height: 100vh;
      width: 100%;
      background-color: var(--question-numbox-alert-side-background);
      z-index: 500;
      top: -95px;
      position: absolute;
      display: none;
    }
  `;var jn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Ln=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Rn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&jn(e,i,n),n};let Tn=class extends ot{constructor(){super(),this.switchValue="in"}_foundInput(t){t.preventDefault();const e=t.srcElement.value;if(this.cmData=e,e){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}_foundInputin(t){t.preventDefault();const e=t.srcElement.id;if("heightft"==e?this.ftData=t.srcElement.value:this.inchData=t.srcElement.value,""!=this.ftData&&""!=this.inchData){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){let t,e=this.shadowRoot?.querySelector(".height"),i=e?.querySelectorAll("input"),o=this.shadowRoot?.querySelectorAll("#heightcm"),a=i[0],n=i[1];this.shadowRoot?.querySelectorAll(".afterErorLayer");let s=[];var r=[];if("in"==this.switchValue)return this.minmaxData={},i.forEach((e,i)=>{let o=e;s.push(o.checkValidity()),o.checkValidity()||(t=e,"heightft"==o.id?r[2]="ft":r[2]="inches")}),this.convertValue=12*Number(a.value)+Number(n.value),s.includes(!1)?(r[0]=!1,r[1]=t):(r[0]=!0,r[1]=this.paramName,r[2]=String(this.convertValue)),r;if(this.minmaxData={},o.forEach((e,i)=>{let o=e;s.push(o.checkValidity()),o.checkValidity()||(t=o)}),s.includes(!1))r[0]=!1,r[1]=t,r[2]="cm";else{let t,e,i;t=Number(this.cmData)/30.48,e=String(t).split(".")[0],i=t%1,i=(12*i).toFixed(2),this.convertValue=12*e+Number(i),r[0]=!0,r[1]=this.paramName,r[2]=String(this.convertValue)}return r}_keyDown(t){["-","+","e","E"].includes(t.key)&&t.preventDefault()}_handleWindowClicks(t){let e=this.shadowRoot?.querySelectorAll("#inputAlert");e&&e.forEach(t=>{t.remove()}),t.target.style.display="none"}_dragValueStop(t){t.preventDefault()}_switchChange(t){"CM"==t.detail.val?(this.shadowRoot?.querySelectorAll(".height")[0].classList.add("element_hide"),this.shadowRoot?.querySelectorAll(".height")[1].classList.remove("element_hide"),this.switchValue="cm",this._setConvertedValue(this.switchValue)):(this.shadowRoot?.querySelectorAll(".height")[0].classList.remove("element_hide"),this.shadowRoot?.querySelectorAll(".height")[1].classList.add("element_hide"),this.switchValue="in",this._setConvertedValue(this.switchValue))}_setConvertedValue(t){if("in"==this.switchValue){let t,e,i,o=this.shadowRoot?.querySelector(".height"),a=o?.querySelectorAll("input"),n=a[0],s=a[1];if(t=Number(this.cmData)/30.48,e=String(t).split(".")[0],i=t%1,i=(12*i).toFixed(0),12==i&&(e=Number(e)+1,i=0),this.ftData=Number(e),this.inchData=Number(i),this.ftData){n.value=this.ftData,s.value=this.inchData;const t={detail:{name:name,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else n.value="",s.value=""}else{let t,i=this.shadowRoot?.querySelectorAll(".height"),o=i[1].querySelectorAll("input");var e;t=12*this.ftData+Number(this.inchData),t=(2.54*t).toFixed(2),this.cmData=Number(t),0==this.cmData?o[0].value="":o[0].value=this.cmData,""!=o[0].value?(e={detail:{name:name,enable:!0},bubbles:!0,enable:!0},this.dispatchEvent(new CustomEvent("_enableNext",e))):(e={detail:{name:name,enable:!1},bubbles:!0,enable:!0},this.dispatchEvent(new CustomEvent("_enableNext",e)))}}_handleNextAction(){let t=this.heightValue/12;if(this.ftData=String(t).split(".")[0],this.inchData=this.heightValue%12,this.inchData=this.inchData.toFixed(0),0==this.ftData){this.ftData="",this.inchData="";const t={detail:{name:name,enable:!1},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:name,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}}render(){return R`
            <div class="">
                <p class="question_title">${this.heightData.subtitle}</p>
            </div>
            <div class="num_boxes  height">
                <input id="heightft" name="heightft" size="1" type="${this.heightData.ft.type}" min="${this.heightData.ft.min}" max="${this.heightData.ft.max}" class="num_box_multiple"
                data-maxlength="${this.heightData.ft.maxlength}" oninput="javascript: if (this.value.length >${this.heightData.ft.maxlength}) this.value = this.value.slice(0, ${this.heightData.ft.maxlength});" @drop= ${this._dragValueStop}
                @keydown= ${this._keyDown} @input=${this._foundInputin} required value="${this.ftData}"/>
                <p>FT</p>
                <input id="heightinch" name="heightinch" size="1" type="${this.heightData.in.type}" min="${this.heightData.in.min}" max="${this.heightData.in.max}" class="num_box_multiple"
                data-maxlength="${this.heightData.in.maxlength}" oninput="javascript: if (this.value.length >${this.heightData.in.maxlength}) this.value = this.value.slice(0, ${this.heightData.in.maxlength});" 
                @input=${this._foundInputin} @keydown= ${this._keyDown} @drop= ${this._dragValueStop} onkeydown="if(event.key==='.'){event.preventDefault();}" required value="${this.inchData}" />
                <p>IN</p>
            </div>
            <div class="num_boxes element_hide height">
                <input id="heightcm" name="heightcm" size="1" type="${this.heightData.cm.type}" min="${this.heightData.cm.min}" max="${this.heightData.cm.max}"
                step="${this.heightData.cm.step}" class="num_box_single" @input=${this._foundInput} @keydown= ${this._keyDown} value="${this.cmData}"
                data-maxlength="${this.heightData.cm.maxlength}" oninput="javascript: if (this.value.length >${this.heightData.cm.maxlength}) this.value = this.value.slice(0, ${this.heightData.cm.maxlength});" />
                <p>CM</p>
            </div>
            <div class="ht_wt_switches">
                <c-switch id="switch"  @_changeUnit=${this._switchChange} switchData=${JSON.stringify(this.heightData.cc_input_switch)}></c-switch>
            </div>
            <div class="afterErorLayer" @click=${this._handleWindowClicks}>
            </div>
        `}firstUpdated(t){this._handleNextAction()}updated(t){t?.forEach((t,e)=>{"heightValue"==e&&this._handleNextAction()})}};Tn.styles=[An],Ln([Y({type:Object})],Tn.prototype,"heightData",2),Ln([Y({type:String})],Tn.prototype,"paramName",2),Ln([Y({type:String})],Tn.prototype,"heightValue",2),Ln([Y({type:String})],Tn.prototype,"inchData",2),Ln([Y({type:String})],Tn.prototype,"ftData",2),Ln([Y({type:String})],Tn.prototype,"cmData",2),Ln([Y({type:Object})],Tn.prototype,"minmaxData",2),Ln([Y({type:String})],Tn.prototype,"switchValue",2),Ln([Y({type:String})],Tn.prototype,"fitInput",2),Ln([Y({type:String})],Tn.prototype,"inchInput",2),Ln([Y({type:String})],Tn.prototype,"cmInput",2),Ln([Y({type:String})],Tn.prototype,"convertValue",2),Tn=Ln([G("cc-height")],Tn);const Bn=et`
    /* main section */
    .weight_scale {
      display: flex;
    }
    .element-hide {
      display: none;
    }
    /* scroll bar hide */
    .weight_scale::-webkit-scrollbar {
      width: 0 !important;
    }
    /* main scale section */
    .weight_scale {
      position: relative;
      padding: 10px 0px 0px 40%;
      margin: auto;
      overflow-x: scroll;
      overflow-y: hidden;
      scrollbar-width: none;
    }
    /* scale label section */
    .weight_scales_labels {
      position: absolute;
      margin-left: -9px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      margin-top: 51px;
    }
    /* label scale value */
    .scale_division_labels_n {
      width: 33px;
      text-align: left;
      font-size: var(--question-scalevalue-fsize);
      color: var(--question-scalevalue-color);
      font-family: var(--question-scalevalue-font);
    }
    /* scale design section */
    .weight_range {
      display: grid;
      justify-items: start;
      opacity: 0.1;
    }
    /* last secale section hide for scroll issue */
    .weight_range:last-child {
      padding-right: 60%;
      visibility: hidden;
    }
    .scale_division_labels_n:last-child {
      visibility: hidden;
    }
    
    .weight_label_kg {
      display: block;
      position: relative;
      margin-bottom: 35px;
      cursor: pointer;
      /* font-size: 22px; */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      float: right;
    }

    .weight_label_kg input:checked ~ .scale_divisions_larger_kg {
      z-index: 99;
    }
    .weight_label_kg input {
      opacity: 0;
      cursor: pointer;
      /* border: 1px solid; */
      height: 25px;
      width: 33px;
      margin: 0px;
    }

    .weight_label_kg input:checked ~ .scale_divisions_larger_kg {
      z-index: 99;
    }
    .weight_label input:checked ~ .scale_divisions_larger_kg {
      z-index: 99;
    }
    .scale_divisions_larger_kg {
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;
      border-left: var(--question-side-scalelines-border);
      border-right: var(--question-side-scalelines-border);
      width: 31px;
    }
    .scale_divisions_block_kg {
      display: flex;
      position: absolute;
      top: 0px;
      width: 33px;
      justify-content: space-evenly;
    }
    .scale_division {
      cursor: pointer;
      height: 15px;
      width: 2px;
      background: var(--question-middle-scalelines-color);
    }
  `;var Vn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Fn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Jn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Vn(e,i,n),n};let Un=class extends ot{constructor(){super()}_foundInput(t){t.preventDefault();const e=t.srcElement.value;if(e){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){let t=this.shadowRoot?.querySelector("#kgscale");var e=[];return e[0]=!0,e[0]=t.name,e[1]=t.value,e}_scrollScale(t){let e=this.shadowRoot?.querySelectorAll(".weight_range_kg"),i=innerWidth-110;for(let n=0;n<e.length;n++){var o=e[n];if(o.style.opacity="0.1",o.querySelector("input").checked=!1,o.getBoundingClientRect().x>i/2+10&&o.getBoundingClientRect().x<=i/2+43){o.style.opacity="1",o.querySelector("input").checked=!0;var a=this.shadowRoot?.querySelector("input[type=radio][name=weight]:checked");let t=a.value;const e={detail:{selectKGvalueIndex:n,selectKGvalue:this.smallScaleData.list[n],checkElementValue:t}};this.dispatchEvent(new CustomEvent("_selectedKGvalue",e))}}}_setSelectedScale(t){let e=this.shadowRoot?.querySelectorAll(".weight_range_kg"),i=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight]");i.forEach((i,o)=>{var a=e[o];a.style.opacity="0.1",o==t&&(a.querySelector("input").checked=!0,a.style.opacity="1",a.scrollIntoView({behavior:"auto",block:"center",inline:"center"}))})}_getSelectedValue(){let t=this.shadowRoot?.querySelector("input[type=radio][name=weight]:checked"),e=t.value,i=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight]"),o={};return i.forEach((t,i)=>{var a=t;a.value==e&&(o={detail:{selectkgvalueIndex:i,checkElementValue:a.value}})}),o}_getIndex(){let t=this.shadowRoot?.querySelector("input[type=radio][name=weight]:checked"),e=t.value,i=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight]");var o=[];return i.forEach((t,i)=>{t.value==e&&(o[0]=i)}),o}_scrollFunctionForScale(){const t=this.shadowRoot?.getElementById("scrollScaleskg");t.addEventListener("wheel",e=>{e.preventDefault(),t.scrollLeft+=e.deltaY/3,e.del});let e=this.shadowRoot?.querySelectorAll(".weight_range_kg");for(let i=0;i<e.length;i++){e[i].style.opacity="0.1"}}_dragAndScroll(){const t=this.shadowRoot?.querySelectorAll(".weight_scale");let e,i,o=!1;t.forEach(t=>{const a=t;a.addEventListener("mousedown",t=>{o=!0,e=t.pageX-a.offsetLeft,i=a.scrollLeft}),a.addEventListener("mouseleave",()=>{o=!1}),a.addEventListener("mouseup",()=>{o=!1}),a.addEventListener("mousemove",t=>{if(!o)return;t.preventDefault();const n=t.pageX-a.offsetLeft-e;a.scrollLeft=i-n})})}render(){return R`
      <div id="scrollScaleskg" class="weight_scale ${this.className}"  @scroll=${this._scrollScale}>
        <div class="weight_scales_labels">
          ${this.smallScaleData.list.map(t=>R`
              <label for="kg${t}" class="scale_division_labels_n" >${t}</label>`)}
        </div>
        ${this.smallScaleData.list.map((t,e)=>R`
            ${null!=this.smallScaleData.list[e+1]?R` 
                  <div class="weight_range weight_range_kg">
                    <label class="weight_label_kg">
                      <input class="weight_kg" id="kgscale" type="radio" value="${t}-${this.smallScaleData.list[e+1]}"
                        name="weight"  @input=${this._foundInput} disabled=""  />
                      <span class="scale_divisions_larger_kg"></span>
                      <div class="scale_divisions_block_kg">
                        <div class="scale_division "></div>
                      </div>
                    </label>
                  </div>`:""}
            `)}
      </div>
    `}firstUpdated(t){this._scrollFunctionForScale(),this._dragAndScroll(),this.shadowRoot?.querySelectorAll(".weight_range_kg")}updated(t){t.forEach((t,e)=>{"selectedKGIndex"==e&&this._setSelectedScale(this.selectedKGIndex)})}};Un.styles=[Bn],Fn([Y({type:Object})],Un.prototype,"smallScaleData",2),Fn([Y({type:String})],Un.prototype,"className",2),Fn([Y({type:String})],Un.prototype,"selectedKGIndex",2),Un=Fn([G("c-small-range-scale")],Un);const Mn=et`
    /* main div */
    .weight_scale {
      display: flex;
    }
    .element-hide {
      display: none;
    }
    .weight_scale::-webkit-scrollbar {
      width: 0 !important;
    }
    /* main div */
    .weight_scale {
      position: relative;
      padding: 10px 0px 0px 40%;
      margin: auto;
      overflow-x: scroll;
      overflow-y: hidden;
      scrollbar-width: none;
    }
    /* labels section */
    .weight_scales_labels {
      position: absolute;
      margin-left: -9px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      margin-top: 51px;
    }
    /* labels scale */
    .scale_division_labels_n_lbs {
      width: 51px;
      text-align: left;
      font-size: var(--question-scalevalue-fsize);
      color: var(--question-scalevalue-color);
      font-family: var(--question-scalevalue-font);
    }
    /* scale design section */
    .weight_range {
      display: grid;
      justify-items: start;
      opacity: 0.1;
    }
    /* last scale hide */
    .weight_range_lbs:last-child {
      padding-right: 45%;
      visibility: hidden;
    }
    .scale_division_labels_n_lbs:last-child {
      visibility: hidden;
    }
    /* main single main section */
    .weight_label {
      display: block;
      position: relative;
      margin-bottom: 35px;
      cursor: pointer;
      /* font-size: 22px; */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      float: right;
    }
    /* single scale input  */
    .weight_label input {
      opacity: 0;
      cursor: pointer;
      /* border: 1px solid; */
      height: 25px;
      width: 51px;
      margin: 0px;
    }

    .weight_label input:checked ~ .scale_divisions_larger {
      z-index: 99;
    }
    .scale_divisions_larger {
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;
      border-left: var(--question-side-scalelines-border);
      border-right: var(--question-side-scalelines-border);
      width: 49px;
    }
    /* scale line section */
    .scale_divisions_block {
      display: flex;
      position: absolute;
      top: 0px;
      width: 50px;
      justify-content: space-evenly;
    }
    /* scale line */
    .scale_division {
      cursor: pointer;
      height: 15px;
      width: 2px;
      background: var(--question-middle-scalelines-color);
    }

      /* .scale_division.click {
        background: black;
      } */
  `;var Hn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Qn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Wn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Hn(e,i,n),n};let Gn=class extends ot{constructor(){super()}_foundInput(t){t.preventDefault();const e=t.srcElement.value;if(e){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){let t=this.shadowRoot?.querySelector("#lbsscale");var e=[];return e[0]=t.name,e[1]=t.value,e}_scrollFunctionForScale(){const t=this.shadowRoot?.getElementById("scrollScaleslb");t.addEventListener("wheel",e=>{e.preventDefault(),t.scrollLeft+=e.deltaY/2});let e=this.shadowRoot?.querySelectorAll(".weight_range_lbs");for(let i=0;i<e.length;i++){e[i].style.opacity="0.1"}}_dragAndScroll(){const t=this.shadowRoot?.querySelectorAll(".weight_scale");let e,i,o=!1;t.forEach(t=>{const a=t;a.addEventListener("mousedown",t=>{o=!0,e=t.pageX-a.offsetLeft,i=a.scrollLeft}),a.addEventListener("mouseleave",()=>{o=!1}),a.addEventListener("mouseup",()=>{o=!1}),a.addEventListener("mousemove",t=>{if(!o)return;t.preventDefault();const n=t.pageX-a.offsetLeft-e;a.scrollLeft=i-n})})}_scrollScale(t){let e=this.shadowRoot?.querySelectorAll(".weight_range_lbs"),i=innerWidth-110;for(let s=0;s<e.length;s++){var o=e[s];if(o.style.opacity="0.1",o.getBoundingClientRect().x>i/2&&o.getBoundingClientRect().x<=i/2+51){o.style.opacity="1";var a=o.querySelector("input");a.checked=!0;let t=a.value;var n=this.shadowRoot?.querySelector("input[type=radio][name=weight_lbs]:checked");this.checkLbVal=n.value;const e={detail:{selectLBvalueIndex:s,selectLBvalue:this.wideScale.list[s],checkElementValue:t}};this.dispatchEvent(new CustomEvent("_selectedLBvalue",e))}}}_scaleSet(){let t=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight_lbs]"),e=this.shadowRoot?.querySelectorAll(".weight_range_lbs");var i;this.wideScaleData?t.forEach((t,i)=>{var o=t,a=e[i],n=a.querySelector("input");a.style.opacity="0.1",o.value==this.wideScaleData&&(n.checked=!0,a.style.opacity="1",a.scrollIntoView({behavior:"auto",block:"center",inline:"center"}))}):((i=this.category==Ke?e[oi]:e[ai]).querySelector("input").checked=!0,i.style.opacity="1",i.scrollIntoView({behavior:"auto",block:"center",inline:"center"}))}_setSelectedScale(t){if("undefined"!=String(t)&&null!=String(t)){let o=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight_lbs]"),a=this.shadowRoot?.querySelectorAll(".weight_range_lbs");for(let t=0;t<a.length;t++){(i=a[t]).style.opacity="0.1"}if("undefined"!=String(t)&&null!=String(t)){var e=o[t],i=a[t];e.checked=!0,i.style.opacity="1",i.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}}}_getSelectedValue(){let t=this.shadowRoot?.querySelector("input[type=radio][name=weight_lbs]:checked"),e=t.value;this.checkLbVal||(this.checkLbVal=e);let i=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight_lbs]"),o={};return i.forEach((t,e)=>{var i=t;i.value==this.checkLbVal&&(o={detail:{selectLBvalueIndex:e,checkElementValue:i.value}})}),o}_setScaleDeafult(){let t=this._getSelectedValue(),e=this.shadowRoot?.querySelectorAll("input[type=radio][name=weight_lbs]"),i=this.shadowRoot?.querySelectorAll(".weight_range_lbs");e.forEach((e,o)=>{var a=e,n=i[o],s=n.querySelector("input");n.style.opacity="0.1",a.value==t.detail.checkElementValue&&(s.checked=!0,n.style.opacity="1",n.scrollIntoView({behavior:"auto",block:"center",inline:"center"}))})}render(){return R`
      <div id="scrollScaleslb" class="weight_scale ${this.className}" @scroll=${this._scrollScale}>
        <div class="weight_scales_labels">
          ${this.wideScale.list.map(t=>R`
              <label for="lbs${t}" class="scale_division_labels_n_lbs" value=${t}>${t}</label>
            `)}
        </div>
        ${this.wideScale.list.map((t,e)=>R`
              ${null!=this.wideScale.list[e+1]?R` 
                  <div class="weight_range weight_range_lbs">
                    <label class="weight_label">
                      <input class="input_wscale" id="lbsscale" type="radio" value="${t}-${this.wideScale.list[e+1]}"
                        name="weight_lbs" @input=${this._foundInput} disabled=""  />
                      <span class="scale_divisions_larger"></span>
                      <div class="scale_divisions_block">
                        <div class="scale_division"></div>
                        <div class="scale_division"></div>
                        <div class="scale_division"></div>
                        <div class="scale_division"></div>
                      </div>
                    </label>
                  </div>`:""}
            `)}
      </div>
    `}firstUpdated(t){this._scrollFunctionForScale(),this._dragAndScroll(),this.shadowRoot?.querySelectorAll(".weight_range_lbs"),this._scaleSet()}updated(t){t.forEach((t,e)=>{"selectedLBIndex"==e&&this.selectedLBIndex&&this._setSelectedScale(this.selectedLBIndex),"wideScaleData"==e&&this._scaleSet()})}};Gn.styles=[Mn],Qn([Y({type:Object})],Gn.prototype,"wideScale",2),Qn([Y({type:String})],Gn.prototype,"className",2),Qn([Y({type:String})],Gn.prototype,"wideScaleData",2),Qn([Y({type:String})],Gn.prototype,"selectedLBIndex",2),Qn([Y({type:String})],Gn.prototype,"checkLbVal",2),Qn([Y({type:String})],Gn.prototype,"category",2),Gn=Qn([G("c-wide-range-scale")],Gn);const Kn=et`
    /* question title */
    .question_title {
      color: var(--question-title-color);
      font-size: var(--question-title-fsize);
      font-family: var(--question-title-font);
       margin: 5px auto 10px auto;
    }
    /* question title */
    .question_subtitle {
      font-size: var(--question-subtitle-fsize);
      font-family: var(--question-subtitle-font);
      margin: 5px auto 10px auto;
      color: var(--question-subtitle-color);
    }
    /* switch input section */
    .ht_wt_switches {
      display: flex;
      justify-content: center;
    }
    .element-hide {
      display: none;
    }
    /* scale section width manage */
    .full_width_Scale {
      width: 60% !important;
      margin: auto;
      overflow: hidden;
    }
    /* question description */
    .scale_scroll_note {
      font-size: var(--question-scaletitle-fsize);
      margin: 5px;
      font-family: var(--question-scaletitle-font);
      color: var(--question-scaletitle-color);
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      .full_width_Scale {
        width: 80% !important;
      }
    }
    @media screen and (max-width: 600px) {
      .ht_wt_switches {
        display: flex;
        margin: 30px;
      }

      .full_width_Scale {
        width: 75% !important;
        margin: 0px auto;
        height: 77px;
      }
      .scale_scroll_note {
        margin: 10px;
      }
    }
    @media screen and (max-width: 380px), screen and (max-height: 670px) {
      .ht_wt_switches {
        margin: 10px;
      }
      .question_subtitle {
        margin: 0px auto 5px;
      }
    }
  `;var Yn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xn=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Zn(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Yn(e,i,n),n};let ts=class extends ot{constructor(){super(),this.lbHideClass="",this.kgHideClass="element-hide"}_foundInput(t){t.preventDefault(),this.dispatchEvent(t)}validate(){this.shadowRoot?.querySelector("#weight-scale");var t=[];if(""==this.kgHideClass){let a=this.shadowRoot?.getElementById("small-range-scale");var e=a._getIndex()[0],i=this.weightData.c_wide_range_scale.list[e],o=this.weightData.c_wide_range_scale.list[e+1];this.kgScaleSelectedValue=i+"-"+o,t[0]=!0,t[1]=this.paramName,t[2]=this.kgScaleSelectedValue}else{let e=this.shadowRoot?.querySelector("#wide-range-scale"),i=e._getSelectedValue();this.lbScaleSelectedValue=i.detail.checkElementValue,t[0]=!0,t[1]=this.paramName,t[2]=this.lbScaleSelectedValue}return t}_handleUnitChange(t){if(1==t.detail.name){this.lbHideClass="",this.kgHideClass="element-hide";let t=this.shadowRoot?.querySelector("#small-range-scale");this.shadowRoot?.querySelector("#wide-range-scale");let e=t._getSelectedValue();this.selectedLBIndex=e.detail.selectkgvalueIndex}else{this.lbHideClass="element-hide",this.kgHideClass="";let t=this.shadowRoot?.querySelector("#wide-range-scale");this.shadowRoot?.querySelector("#small-range-scale");let e=t._getSelectedValue();this.selectedKGIndex=e.detail.selectLBvalueIndex}}_setScaleDefault(){let t=this.shadowRoot?.querySelector("#wide-range-scale");t._setScaleDeafult()}render(){return R`
            <div class="">
                <p class="question_title">${this.weightData.subtitle}</p>
                <p class="scale_scroll_note">${this.weightData.desc}</p>
            </div>
            <div class="num_boxes full_width_Scale">
                <c-small-range-scale id="small-range-scale"  selectedKGIndex=${this.selectedKGIndex}  category=${this.category}
                smallScaleData=${JSON.stringify(this.weightData.c_small_range_scale)} className=${this.kgHideClass} ></c-small-range-scale> 
                <c-wide-range-scale id="wide-range-scale" selectedLBIndex=${this.selectedLBIndex}  category=${this.category}
                wideScale=${JSON.stringify(this.weightData.c_wide_range_scale)} className=${this.lbHideClass} wideScaleData=${this.scaleData}  ></c-wide-range-scale>
            </div>
            <div class="ht_wt_switches">
                <c-switch  @_changeUnit=${this._handleUnitChange}  switchData=${JSON.stringify(this.weightData.cc_input_switch)}></c-switch>
            </div>
        `}};ts.styles=[Kn],Xn([Y({type:Object})],ts.prototype,"weightData",2),Xn([Y({type:String})],ts.prototype,"lbHideClass",2),Xn([Y({type:String})],ts.prototype,"kgHideClass",2),Xn([Y({type:String})],ts.prototype,"paramName",2),Xn([Y({type:String})],ts.prototype,"scaleData",2),Xn([Y({type:String})],ts.prototype,"lbScaleValue",2),Xn([Y({type:String})],ts.prototype,"kgScaleValue",2),Xn([Y({type:String})],ts.prototype,"lbScaleSelectedValue",2),Xn([Y({type:String})],ts.prototype,"kgScaleSelectedValue",2),Xn([Y({type:String})],ts.prototype,"selectedLBIndex",2),Xn([Y({type:String})],ts.prototype,"selectedKGIndex",2),Xn([Y({type:String})],ts.prototype,"category",2),ts=Xn([G("cc-weight")],ts);var es=Object.defineProperty,is=Object.getOwnPropertyDescriptor,os=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?is(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&es(e,i,n),n};let as=class extends ot{static get styles(){return et``}constructor(){super()}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled"}_showAlertLayer(t){t.preventDefault(),this.dispatchEvent(t)}_bcValidate(){let t=this.shadowRoot?.getElementById("ht"),e=this.shadowRoot?.getElementById("wt");var i=[];return t&&(i[0]=t.validate()),e&&(i[1]=e.validate()),i}_setScaleDefault(){let t=this.shadowRoot?.getElementById("wt");t&&t._setScaleDefault()}render(){return R`
      <cc-height id="ht" paramName = ${JSON.stringify(this.heightWeightData.bc_data.components[0].param_name)}
        heightData=${JSON.stringify(this.heightWeightData.bc_data.components[0])} heightValue=${this.heightValue} @_enableNext= ${this._handleVisibility}
      ></cc-height>
      <cc-weight  id="wt" paramName = ${JSON.stringify(this.heightWeightData.bc_data.components[1].param_name)}  weightData=${JSON.stringify(this.heightWeightData.bc_data.components[1])}
        scaleData=${this.scaleValue}  category=${this.category}
      ></cc-weight>
      <cc-navigation prevNav=${this.prevNav}  nextNav=${this.nextNav} theme=${this.theme} navigationValue=${JSON.stringify(this.navigationData)}  submitAction=${this.submitAction}
      ></cc-navigation>
     
    `}};os([Y({type:Object})],as.prototype,"heightWeightData",2),os([Y({type:Object})],as.prototype,"navigationData",2),os([Y({type:String})],as.prototype,"nextNav",2),os([Y({type:String})],as.prototype,"prevNav",2),os([Y({type:String})],as.prototype,"submitAction",2),os([Y({type:String})],as.prototype,"heightValue",2),os([Y({type:String})],as.prototype,"scaleValue",2),os([Y({type:String})],as.prototype,"category",2),os([Y({type:String})],as.prototype,"theme",2),as=os([G("bc-height-weight")],as);const ns=et`
  /* radion btn label */
  .for-checkbox_tools{
    font-family: var(--question-sizebox-text-font);
    font-size: var(--question-sizebox-text-fsize);
    color: var(--question-sizebox-unselecttext-color);
  }
  /* title question */
  .mini_title {
    font-size: var(--question-secoundsubtitle-fsize);
    margin-bottom: 2%;
    font-family: var(--question-secoundsubtitle-font);
    color: var(--question-secoundsubtitle-color);
    text-align: center;
  }
  /* radio btn input */
  .checkbox_tools:checked + label,
  .checkbox_tools:not(:checked) + label {
    position: relative;
    height: 45px;
    width: 16%;
    font-size: var(--question-sizebox-text-fsize);
    margin: 2% 1%;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    color: var(--question-sizebox-selecttext-color);
    transition: all 30ms linear 0s;
    border: var(--question-sizebox-border);
    align-items: center;
    place-content: center;
    display: inline-flex;
    border-radius: 2px;
  }
  .checkbox_tools:not(:checked) + label {
    background-color: var(--question-sizebox-unselect-background);
    color: var(--question-sizebox-unselecttext-color);
    border: var(--question-sizebox-border);
  }
  .checkbox_tools:checked + label::before,
  .checkbox_tools:not(:checked) + label::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    color: var(--question-sizebox-selecttext-color);
    z-index: -1;
    border-radius: 1px;
  }
  .checkbox_tools:checked,
  .checkbox_tools:not(:checked) {
    position: absolute;
    visibility: hidden;
  }
  .checkbox_tools:checked + label::before,
  .checkbox_tools:not(:checked) + label::before {
    background-color: var(--question-sizebox-select-background);
  }
  .cup_size{
    margin-top : 25px !important;
  }

   /* title alignment */
    .left {
      text-align: left !important;
    }
  
`;var ss=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,ls=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?rs(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ss(e,i,n),n};let cs=class extends ot{constructor(){super()}_foundInput(t){t.preventDefault();const e=t.srcElement.value;if(this.isChecked=e,e){const t={detail:{name:e,enable:!0,check:!0,changeData:this.changeData},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){this.shadowRoot?.querySelectorAll("#bg");var t=[];return""!=this.isChecked?(t[0]=!0,t[1]=this.paramName,t[2]=this.isChecked):t[0]=!1,t}_isCheck(){this.isChecked||(this.isChecked=this.buttonValue)}_checkIsPresent(){for(var t,e=0;e<this.groupData.length;e++){if(this.groupData[e]==this.buttonValue){t=!0;break}t=!1}if(!t){this.isChecked="",this.buttonValue="";const t={detail:{name:name,enable:!1,check:!1,changeData:this.changeData},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_sizeNotMatch",t))}}render(){return this._isCheck(),R`
      <div class="mini_title title_left ${this.className}">
        ${this.buttonGroupData.group_name}
      </div>
      ${this.groupData.map(t=>R`
            ${t==this.buttonValue?R` <input id="bg" class="checkbox_tools" type="radio" name="${this.buttonGroupData.group_name}"  value="${t}"
                    id="${this.buttonGroupData.group_name}-${t}" @input=${this._foundInput} checked />
                    <label class="for-checkbox_tools" for="${this.buttonGroupData.group_name}-${t}" >${t}</label>
                `:R` <input id="bg" class="checkbox_tools" type="radio" name="${this.buttonGroupData.group_name}" value="${t}"
                    id="${this.buttonGroupData.group_name}-${t}" @input=${this._foundInput} />
                    <label class="for-checkbox_tools" for="${this.buttonGroupData.group_name}-${t}" >${t}</label>
                  `}
          `)}
    `}firstUpdated(t){this.isChecked=this.buttonValue,this._checkIsPresent()}updated(t){t.forEach((t,e)=>{"buttonValue"==e&&this._checkIsPresent()})}};cs.styles=[ns],ls([Y({type:Object})],cs.prototype,"buttonGroupData",2),ls([Y({type:String})],cs.prototype,"paramName",2),ls([Y({type:String})],cs.prototype,"buttonValue",2),ls([Y({type:String})],cs.prototype,"isChecked",2),ls([Y({type:String})],cs.prototype,"className",2),ls([Y({type:Object})],cs.prototype,"groupData",2),ls([Y({type:String})],cs.prototype,"changeData",2),cs=ls([G("c-button-group")],cs);const ps=et`
        /* main div */
        .pants_question, .brand_cup_size {
            width: 51%;
            margin: auto;
            margin-top: 0px;
            height: 98%;
        }
        /* btn section */
        .sizes_section {
            overflow: hidden scroll;
            width: 100%;
            margin: auto;
            height: 80%;
            scrollbar-width: none;
        }
        
        .sizes_section::-webkit-scrollbar {
            display: none;
        /* Safari and Chrome */
        }
        /* btn section alignment */
        .size_rbtn {
            text-align: left;
                        /* font-family: "Avenir Light"; */
        }
        
        .size_rbtn .title_left {
            width: 100%;
        }
        
        @media screen and (max-width: 600px) {
            .pants_question, .brand_cup_size {
                width: 75%;
                margin: auto;
                height: 100%;
            }
        
            .sizes_section {
                width: 100%;
            }
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .pants_question, .brand_cup_size {
                width: 80%;
                margin: auto;
            }
        }
    `;var ds=Object.defineProperty,us=Object.getOwnPropertyDescriptor,hs=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?us(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ds(e,i,n),n};let ms=class extends ot{constructor(){super(),this.setSelect=!0}_handleVisibility(t){let e=this.shadowRoot?.getElementById("mbg1"),i=this.shadowRoot?.getElementById("mbg");var o=[];"true"==t.detail.changeData&&(this.changableSizeData=this.braBandCupSizeList.c_buttonGroup[t.detail.name]),o[0]=e.validate(),o[1]=i.validate(),1==o[0][0]&&1==o[1][0]&&(t.detail.enable?this.nextNav="":this.nextNav="disabled"),this.disabled=!1,this.val="test"}disableNext(t){t.detail.enable?this.nextNav="":this.nextNav="disabled"}_bcValidate(){let t=this.shadowRoot?.getElementById("mbg1"),e=this.shadowRoot?.getElementById("mbg");var i=[];return i[0]=t.validate(),i[1]=e.validate(),1==i[0][0]&&1==i[1][0]||(i[0][0]=!1,i[1][0]=!1),i}_handleNextAction(){""==this.cupValue||""==this.bandValue?(this.nextNav="disabled",this.changableSizeData=this.braBandCupSizeList.c_buttonGroup[this.braBandBandSizeList.c_buttonGroup[0]]):(this.nextNav="",this.braBandCupSizeList.c_buttonGroup[this.bandValue]?this.changableSizeData=this.braBandCupSizeList.c_buttonGroup[this.bandValue]:this.changableSizeData=this.braBandCupSizeList.c_buttonGroup[this.braBandBandSizeList.c_buttonGroup[0]])}render(){return R`
            <div class="pants_question">
                <c-title title=${JSON.stringify(this.buttonGroupObject.bc_data)} className=" ${this.buttonGroupObject.bc_data.title_alignment} m_p_0"></c-title>
                <div class="sizes_section">
                    <div class="size_rbtn" >
                    
                        <c-button-group id="mbg1" paramName= ${JSON.stringify(this.buttonGroupObject.bc_data.components[0].group_btns[0].param_name)}  groupData=${JSON.stringify(this.braBandBandSizeList.c_buttonGroup)} className="${this.buttonGroupObject.bc_data.title_alignment}"
                        buttonGroupData=${JSON.stringify(this.buttonGroupObject.bc_data.components[0].group_btns[0])} buttonValue=${this.bandValue} @_enableNext=${this._handleVisibility} changeData="true" @_sizeNotMatch=${this.disableNext} ></c-button-group>
                        
                        ${null!=this.changableSizeData?R`
                                <c-button-group id="mbg" className="cup_size ${this.buttonGroupObject.bc_data.title_alignment}" paramName= ${JSON.stringify(this.buttonGroupObject.bc_data.components[0].group_btns[1].param_name)}  groupData=${JSON.stringify(this.changableSizeData)}
                                buttonGroupData=${JSON.stringify(this.buttonGroupObject.bc_data.components[0].group_btns[1])} buttonValue=${this.cupValue} @_enableNext=${this._handleVisibility} changeData="false" @_sizeNotMatch=${this.disableNext} ></c-button-group>
                            `:R``}
                        
                    </div>
                </div>
            </div>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} theme=${this.theme} submitAction=${this.submitAction}></cc-navigation>
        `}firstUpdated(t){this.changableSizeData=this.braBandCupSizeList.c_buttonGroup[this.braBandBandSizeList.c_buttonGroup[1]],this._handleNextAction()}updated(t){t.forEach((t,e)=>{"cupValue"==e&&this._handleNextAction()})}};ms.styles=[ps],hs([Y({type:Object})],ms.prototype,"buttonGroupObject",2),hs([Y({type:Object})],ms.prototype,"navigationData",2),hs([Y({type:String})],ms.prototype,"nextNav",2),hs([Y({type:String})],ms.prototype,"prevNav",2),hs([Y({type:String})],ms.prototype,"submitAction",2),hs([Y({type:String})],ms.prototype,"bandValue",2),hs([Y({type:String})],ms.prototype,"cupValue",2),hs([Y({type:Boolean})],ms.prototype,"setSelect",2),hs([Y({type:Boolean})],ms.prototype,"disabled",2),hs([Y({type:String})],ms.prototype,"val",2),hs([Y({type:Object})],ms.prototype,"braBandCupSizeList",2),hs([Y({type:Object})],ms.prototype,"braBandBandSizeList",2),hs([Y({type:Object})],ms.prototype,"changableSizeData",2),hs([Y({type:String})],ms.prototype,"theme",2),ms=hs([G("bc-multiple-button-group")],ms);const gs=et`
  /* dropdown section */
  .select-wrapper {
    position: relative;
    user-select: none;
    height: 25px;
    margin: auto;
  }
  .pants_size_section {
   /* width: 75px; */
  }
  .select {
    position: relative;
    display: flex;
    flex-direction: column;
    border-bottom: var(--question-dropdown-bottom-border);
  }
  /* input section- selected size */
  .select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--question-dropdown-fsize) !important;
    font-family: var(--question-dropdown-font) !important;
    font-weight: 300;
    color: var(--question-dropdown-text-color);
    height: 25px;
    background: var(--question-dropdown-background);
    cursor: pointer;
  }
  .serachInput{
    height: 25px;
    text-overflow: ellipsis;
    border-radius: 0px;
    font-size: var(--question-dropdown-fsize) !important;
    font-family: var(--question-dropdown-font) !important;
    color: var(--question-dropdown-text-color);
    background: var(--question-dropdown-background);
    outline: none;
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
    cursor: pointer;
  }

  .dropdown_serch_icon{
    transform: rotate(270deg);
    font-size: 33px;
    position: absolute;
    width: fit-content;
    z-index: 99;
    top: -13px;
    margin: 0px;
    color: var(--question-dropdown-search-icon-color);
  }

  .select__trigger .left {
    width: 100%;
    text-align: left;
    padding-left: 25px;
  }
  .select__trigger .center {
    width: 100%;
    text-align: center;
  }
  .select__trigger input {
    border: none;
  }
  .arrow {
    position: relative;
    height: 100%;
    width: 100%;
    background: url("https://lom-quiz-app.s3.us-east-2.amazonaws.com/source/common/LawsofMotion-Icon-Arrow.png")
      no-repeat !important;
    background-size: 20px !important;
  }
  /* dropdown arrow section */
  .dropdown_custom_arrow{
            width: 7px;
            height: 7px;
            border: 2px solid;
            border-color: transparent transparent var(--question-dropdownlist-icon-color) var(--question-dropdownlist-icon-color);
            transform: rotate(315deg);
            /* margin-top: -5px; */
            position: absolute;
            right: 4px;
         }
  /* dropdown list section */
  .custom-options {
    position: absolute;
    display: none;
    top: 26px;
    left: 0px;
    right: 0px;
    border-top: 0px;
    background: var(--question-dropdownlist-background);
    transition: all 0.5s ease 0s;
    pointer-events: none;
    overflow: auto;
    max-height: 30vh;
  }
  /* dropdown option */
  .custom-option {
    position: relative;
    display: block;
    font-size: var(--question-dropdownlist-fsize) !important;
    font-weight: 300;
    color: var(--question-dropdownlist-text-color);
    font-family: var(--question-dropdownlist-font) !important;
    line-height: 25px;
    cursor: pointer;
    text-align: left;
    padding-left: 20px;
  }
  .custom-options::-webkit-scrollbar {
    display: none;
  }
  .custom-option.selected {
    color: var(--question-dropdownlist-selected-text-color);
    background-color: var(--question-dropdownlist-selected-backgound);
  }
  .select-wrapper.open .custom-options {
    opacity: 1;
    display: block;
    pointer-events: all;
  }
  /* main dropdown div 
  /* .mz_dropdown {
    width: 100%;
    margin: auto;
  } */

  .arrowImage {
    right: 0px;
    position: absolute;
    height: -webkit-fill-available;
  }

  .arrowImage img {
    height: 90%;
  }
  .custom-option:hover {
    background-color: var(--question-dropdownlist-hover-backgound);
    /* color:#FFFFFF; */
  }
  @media screen and (max-width: 600px) {
    .select__trigger span {
      width: 100%;
    }

   /* .mz_dropdown {
      width: 60%;
      margin: auto;
    } */
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    /* .mz_dropdown {
      width: 60%;
      margin: auto;
    } */
  }
`;var ys=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,vs=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?fs(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ys(e,i,n),n};let bs=class extends ot{constructor(){super()}validate(){let t=this.shadowRoot?.querySelector("input");var e=[];return this.selectedValue?(e[0]=!0,e[1]=this.paramName,e[2]=this.selectedValue):(e[0]=!1,e[1]=t),e}_foundInput(t){const e=t.target.closest(".custom-option").getAttribute("data-value");if(t.preventDefault(),this.selectedValue=e,this.dropdownValue=e,e){this.shadowRoot.querySelector("input").value=this.selectedValue;const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}_setBlankValue(){this.shadowRoot?.querySelector(".select__trigger span"),this.dropdownValue="",this.selectedValue="",this.shadowRoot.querySelector("input").value=""}_showDropdown(t){t.currentTarget.classList.toggle("open")}_customizedSelectOnBlurFunctionality(){const t=this.shadowRoot?.querySelectorAll(".select-wrapper");document.addEventListener("click",function(e){t.forEach(t=>{var i=t;i.contains(e.composedPath()[0])||i.classList.remove("open")})})}_handleNextAction(){this.selectedValue=this.dropdownValue}_filterFunction(){var t=this.shadowRoot.querySelectorAll(".custom-option"),e=this.shadowRoot.querySelector("#dd");this.selectedValue="",this.dropdownValue="";for(var i=0;i<t.length;i++){var o=t[i].getAttribute("data-value"),a=t[i];o.match(e.value)?a.style.display="block":a.style.display="none",o==e.value&&(this.selectedValue=o,this.dropdownValue=o)}const n={detail:{name:name,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",n))}render(){return R`
      <div class="mz_dropdown">
        <div class="select-wrapper ${this.className}" @click=${this._showDropdown} >
          <div class="select">
            <div class="select__trigger">
             <!--  <span class="${this.selectedPostion}">${this.dropdownValue}</span> -->
             <p class="dropdown_serch_icon">&#8981;</p>
              <input  @keyup=${this._filterFunction} type="text"  name="ethnicity" id="dd" required 
               value=${this.selectedValue} class="${this.selectedPostion} serachInput invalid_Size"/>
              <!-- <div class="arrowImage">&#8744;</div> -->
            </div>
            <div class="dropdown_custom_arrow"></div>
            <div class="custom-options" @click=${t=>this._foundInput(t)}>
              ${null!=this.dropDownData?R`
                  ${this.dropDownData.c_dropdown.list.map(t=>R`
                      <span class="custom-option ${this.dropdownValue==t?"selected":""} " data-value=${t} >${t}</span>
                    `)}
                `:""}
            </div>
          </div>
        </div>
      </div>
  `}firstUpdated(t){this._customizedSelectOnBlurFunctionality(),this._handleNextAction(),this.selectedValue=this.dropdownValue}updated(t){t.forEach((t,e)=>{"dropdownValue"==e&&this._handleNextAction()})}};bs.styles=[gs],vs([Y({type:Object})],bs.prototype,"dropDownData",2),vs([Y({type:String})],bs.prototype,"className",2),vs([Y({type:String})],bs.prototype,"paramName",2),vs([Y({type:String})],bs.prototype,"dropdownValue",2),vs([Y({type:String})],bs.prototype,"selectedValue",2),vs([Y({type:String})],bs.prototype,"name",2),vs([Y({type:String})],bs.prototype,"selectedPostion",2),bs=vs([G("c-search-dependent-dropdown")],bs);const _s=et`
    /* dorpdown section */
    .searchable__trigger {
      position: relative;
      align-items: center;
      justify-content: space-between;
      font-size: var(--question-dropdown-fsize) !important;
      font-family: var(--question-dropdown-font) !important;
      color: var(--question-dropdown-text-color);
      background: var(--question-dropdown-background);
      font-weight: 300;
      height: 25px;
      cursor: pointer;
    }
    /* Search input  */
    .serach_input {
      width: 100%;
      position: absolute;
      left: 0;
      z-index: 1;
    }
    /* dropdown section bottom border */
    .border-bottom {
      border-bottom: var(--question-dropdown-bottom-border);
    }
    /* dropdown value input */
    .custom_quiz_selects {
      border-image: initial;
      border: none;
      appearance: none;
      border-radius: 0px;
      font-size: var(--question-dropdown-fsize) !important;
      font-family: var(--question-dropdown-font) !important;
      color: var(--question-dropdown-text-color);
      background: var(--question-dropdown-background);
      font: inherit;
      line-height: 1.5em;
      padding: 0 0 0 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      position: relative;
      left: 0;
      z-index: 1;
      cursor: pointer;
    }

    .pants_size_section .custom_quiz_selects {
      width: 100%;
    }

    .pants_brand_section .custom_quiz_selects {
      width: 85%;
      height: 25px;
      text-overflow: ellipsis;
      float: left;
    }
    /* dropdown arrow */
    .dropdown_custom_arrow {
      width: 7px;
      height: 7px;
      border: 2px solid;
      border-color: transparent transparent var(--question-dropdownlist-icon-color) var(--question-dropdownlist-icon-color);
      transform: rotate(315deg);
      position: absolute;
      right: 4px;
    }
    /* search icon in dropdown */
    .dropdown_serch_icon {
      transform: rotate(270deg);
      font-size: 33px;
      position: absolute;
      width: fit-content;
      z-index: 99;
      top: -13px;
      margin: 0px;
      color: var(--question-dropdown-search-icon-color)
    }
    /* dropdown list */
    .dropdown_content {
      display: none;
      position: relative;
      overflow: auto;
      z-index: 1;
      text-align: left;
      width: 100%;
      max-height: 30vh;
      background-color: var(--question-dropdownlist-background);
      font-family: var(--question-dropdownlist-font);
    }

    .dropdown_content::-webkit-scrollbar {
      display: none;
    }

    .show {
      display: block;
    }

    .dropdown_content {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .dropdown_content a {
      color: black;
      text-decoration: none;
      display: block;
      padding-left: 25px;
      color: var(--question-dropdownlist-text-color);
      font-family: var(--question-dropdownlist-font);
      font-size: var(--question-dropdownlist-fsize);
    }

    .dropdown_content a:hover {
      background-color: #b2b2b2;
    }

    .pant_brand_textboxes_section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 13%;
      width: 90%;
      gap: 10%;
    }
    /* selected option background */
    .dropdown_selected {
      background-color: rgb(151, 149, 149) !important;
      color: white !important;
    }

    .pant_brand_search_icon {
      padding-left: 25px;
      /* background: url("https://lom-quiz-app.s3.us-east-2.amazonaws.com/source/searchIconoutline.png")
        no-repeat left !important;
      background-size: 20px !important; */
    }
  `;var ws=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Ss=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?xs(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ws(e,i,n),n};let zs=class extends ot{constructor(){super()}_foundInput(t){this.filterText="";const e=t.target.closest(".dropdown_selected").getAttribute("value");if(this.dropdownData.forEach(t=>{t.label==e&&(this.selectedVal=t.value)}),t.preventDefault(),e){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}validate(){const t=[this.filterText];let e=!0;e=!this.filterText||t.every(t=>Object.keys(this.dropdownData).includes(t)),this.filterText="";let i=this.shadowRoot?.querySelector("#pantBrand");var o=[];return e?""!=this.selectedVal?(o[0]=!0,o[1]=this.paramName,o[2]=this.selectedVal):o[0]=!1:(o[0]=!1,o[1]=i,this._clearingSelectedDropdown()),o}_showSearchableDropdown(t){getComputedStyle(t.target).webkitLogicalWidth;let e=this.shadowRoot?.querySelector("#myDropdown");e.classList.toggle("show")}_clearingSelectedDropdown(){let t,e,i;for(t=this.shadowRoot?.querySelector("#myDropdown"),e=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].style.display="";this.searchValue="";let o=this.shadowRoot?.querySelector("#pantBrand");o.value="",this.filterText="",this.selectedVal="",this.slideIndex=""}_filterFunction(){let t,e,i,o,a,n,s,r=this.shadowRoot?.querySelector("#myDropdown");for(r.classList.add("show"),t=this.shadowRoot?.querySelector("#pantBrand"),e=t.value.toUpperCase(),a=this.shadowRoot?.querySelector("#myDropdown"),i=a.querySelectorAll("a"),o=0;o<i.length;o++)n=i[o].textContent||i[o].innerText,s=n.split(" ")[0],e?(this.filterText=e,this.searchValue="",s.toUpperCase().match(e)&&s.toUpperCase().charAt(0)==e.charAt(0)?i[o].style.display="":i[o].style.display="none"):i[o].style.display="";const l={detail:{name:name,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_removeDepedentDd",l))}_customizedSelectOnBlurFunctionality(){const t=this.shadowRoot?.querySelectorAll(".dropdown_content")[0],e=this.shadowRoot?.querySelectorAll(".searchable__trigger");document.addEventListener("click",function(i){e.forEach(e=>{e.contains(i.composedPath()[0])||t.classList.remove("show")})})}_searchOptionClick(){let t=this.shadowRoot?.querySelectorAll(".pantbrands");t.forEach(e=>{e.addEventListener("click",i=>{t.forEach(t=>{t.classList.remove("dropdown_selected")}),i.target.classList.add("dropdown_selected"),this.searchValue=i.target.textContent,e.parentElement.previousElementSibling.querySelector("input").value=e.innerText,e.parentElement.classList.toggle("show");const o={detail:{value:this.searchValue}};this.dispatchEvent(new CustomEvent("_selectedDropdownValue",o))})})}render(){return R`
      <div class="pants_brand_section">
        <div class="searchable__trigger border-bottom" >
          <p class="dropdown_serch_icon">&#8981;</p>
          <div class="serach_input" @click=${this._showSearchableDropdown}>
            <input
              @keyup=${this._filterFunction} type="text" placeholder="Start typing a brand, i.e. Levi's"
              class="custom_quiz_selects invalid_Brand pant_brand_search_icon" name="pantBrand" id="pantBrand"
              required="" value=${this.searchValue} />
          </div>
          <div class="dropdown_custom_arrow"></div>
        </div>
        <div id="myDropdown" class="dropdown_content" @click=${t=>this._foundInput(t)} >
          ${this.dropdownData.map(t=>R`
              <a  href="javascript:void(0);"  class="pantbrands ${this.searchValue==t.label?"dropdown_selected":""}"
                href="#"  value=${this.searchValue} >${t.label}</a >
            `)}
        </div>
      </div>
    `}firstUpdated(t){this._searchOptionClick(),this._customizedSelectOnBlurFunctionality()}updated(t){t.forEach((t,e)=>{"searchValue"==e&&this.dropdownData.forEach(t=>{t.label==this.searchValue&&(this.searchValue=t.label,this.selectedVal=t.value)})})}};zs.styles=[_s],Ss([Y({type:Object})],zs.prototype,"searchDropdown",2),Ss([Y({type:Object})],zs.prototype,"dropdownData",2),Ss([Y({type:String})],zs.prototype,"paramName",2),Ss([Y({type:String})],zs.prototype,"searchValue",2),Ss([Y({type:String})],zs.prototype,"slideIndex",2),Ss([Y({type:String})],zs.prototype,"filterText",2),Ss([Y({type:String})],zs.prototype,"selectedVal",2),zs=Ss([G("c-searchable-dropdown")],zs);const ks=et`
  /* dropdown section */
  .select-wrapper {
    position: relative;
    user-select: none;
    height: 25px;
    margin: auto;
  }
  .pants_size_section {
    width: 75px;
  }
  .select {
    position: relative;
    display: flex;
    flex-direction: column;
    border-bottom: var(--question-dropdown-bottom-border);
  }
  /* input section- selected size */
  .select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--question-dropdown-fsize) !important;
    font-family: var(--question-dropdown-font) !important;
    font-weight: 300;
    color: var(--question-dropdown-text-color);
    height: 25px;
    background: var(--question-dropdown-background);
    cursor: pointer;
  }
  .select__trigger .left {
    width: 100%;
    text-align: left;
    padding-left: 4px;
  }
  .select__trigger .center {
    width: 100%;
    text-align: center;
  }
  .select__trigger input {
    position: absolute;
    z-index: -1;
    border: none;
    visibility: collapse;
  }
  .arrow {
    position: relative;
    height: 100%;
    width: 100%;
    background: url("https://lom-quiz-app.s3.us-east-2.amazonaws.com/source/common/LawsofMotion-Icon-Arrow.png")
      no-repeat !important;
    background-size: 20px !important;
  }
  /* dropdown arrow section */
  .dropdown_custom_arrow{
            width: 7px;
            height: 7px;
            border: 2px solid;
            border-color: transparent transparent var(--question-dropdownlist-icon-color) var(--question-dropdownlist-icon-color);
            transform: rotate(315deg);
            /* margin-top: -5px; */
            position: absolute;
            right: 4px;
         }
  /* dropdown list section */
  .custom-options {
    position: absolute;
    display: none;
    top: 26px;
    left: 0px;
    right: 0px;
    border-top: 0px;
    background: var(--question-dropdownlist-background);
    transition: all 0.5s ease 0s;
    pointer-events: none;
    overflow: auto;
    max-height: 30vh;
    z-index: 99;
  }
  /* dropdown option */
  .custom-option {
    position: relative;
    display: block;
    font-size: var(--question-dropdownlist-fsize) !important;
    font-weight: 300;
    color: var(--question-dropdownlist-text-color);
    font-family: var(--question-dropdownlist-font);
    line-height: 25px;
    cursor: pointer;
    text-align: left;
    padding-left: 7px;
    z-index: 99;
  }
  .custom-options::-webkit-scrollbar {
    display: none;
  }
  .custom-option.selected {
    color: var(--question-dropdownlist-selected-text-color);
    background-color: var(--question-dropdownlist-selected-backgound);
  }
  .select-wrapper.open .custom-options {
    opacity: 1;
    display: block;
    pointer-events: all;
  }
  /* main dropdown div */
  .mz_dropdown {
    width: 40%;
    margin: auto;
  }

  .arrowImage {
    right: 0px;
    position: absolute;
    height: -webkit-fill-available;
  }

  .arrowImage img {
    height: 90%;
  }
  .custom-option:hover {
    background-color: var(--question-dropdownlist-hover-backgound);
    /* color:#FFFFFF; */
  }
  .fit_pref span{
    font-size: var(--question-fitpref-dropdown-val-fsize) !important;
    color: var(--question-fitpref-dropdown-val-color);
    font-family: var(--question-fitpref-dropdown-val-font);
  }
  @media screen and (max-width: 600px) {
    .select__trigger span {
      width: 100%;
    }

    .mz_dropdown {
      width: 60%;
      margin: auto;
    }
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    .mz_dropdown {
      width: 60%;
    }
  }
`;var qs=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,$s=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Is(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&qs(e,i,n),n};let Ns=class extends ot{constructor(){super()}validate(){this.shadowRoot?.querySelector("#dd");var t=[];return this.selectedValue?(t[0]=!0,t[1]=this.paramName,t[2]=this.selectedValue):t[0]=!1,t}_foundInput(t){const e=t.target.closest(".custom-option").getAttribute("data-value");if(t.preventDefault(),this.selectedValue=e,this.dropdownValue=e,e){const t={detail:{name:e,enable:!0},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_enableNext",t))}else{const t={detail:{name:e,enable:!1},bubbles:!0,enable:!1};this.dispatchEvent(new CustomEvent("_enableNext",t))}}_setBlankValue(){this.shadowRoot?.querySelector(".select__trigger span"),this.dropdownValue="",this.selectedValue=""}_showDropdown(t){t.currentTarget.classList.toggle("open")}_customizedSelectOnBlurFunctionality(){const t=this.shadowRoot?.querySelectorAll(".select-wrapper");document.addEventListener("click",function(e){t.forEach(t=>{var i=t;i.contains(e.composedPath()[0])||i.classList.remove("open")})})}_handleNextAction(){this.selectedValue=this.dropdownValue}render(){return R`
      <div class="mz_dropdown">
        <div class="select-wrapper ${this.className}" @click=${this._showDropdown} >
          <div class="select">
            <div class="select__trigger">
              <span class="${this.selectedPostion} dropdown_value">${this.dropdownValue}</span>
              <input type="text" name="ethnicity" id="dd" required />
              <!-- <div class="arrowImage">&#8744;</div> -->
            </div>
            <div class="dropdown_custom_arrow"></div>
            <div class="custom-options" @click=${t=>this._foundInput(t)}>
              ${null!=this.dropDownData?R`
                  ${this.dropDownData.c_dropdown.list.map(t=>R`
                      <span class="custom-option ${this.dropdownValue==t?"selected":""} " data-value=${t} >${t}</span>
                    `)}
                `:""}
            </div>
          </div>
        </div>
      </div>
  `}firstUpdated(t){this._customizedSelectOnBlurFunctionality(),this._handleNextAction()}updated(t){t.forEach((t,e)=>{"dropdownValue"==e&&this._handleNextAction()})}};Ns.styles=[ks],$s([Y({type:Object})],Ns.prototype,"dropDownData",2),$s([Y({type:String})],Ns.prototype,"className",2),$s([Y({type:String})],Ns.prototype,"paramName",2),$s([Y({type:String})],Ns.prototype,"dropdownValue",2),$s([Y({type:String})],Ns.prototype,"selectedValue",2),$s([Y({type:String})],Ns.prototype,"name",2),$s([Y({type:String})],Ns.prototype,"selectedPostion",2),Ns=$s([G("c-dropdown")],Ns);const Ds=et`
    /* dropdown section */
    .pant_brand_textboxes_section {
      display: flex;
      /* justify-content: space-between; */
      /* margin-top: -8%; */
      margin-bottom: 13%;
      padding: 15px 0px 10px 0px;
      width: 73%;
      gap: 5%;
      margin: auto;
    }
    #searchdd {
      width: 100%;
    }
    #searchdd1{
      width : 35%;
    }
    @media screen and (max-width: 600px) {
      width : 45%;
    }
  `;var Os=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Ps=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Es(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Os(e,i,n),n};let Cs=class extends ot{constructor(){super()}_removeDepedentDd(t){let e=this.shadowRoot?.getElementById("searchdd1");e._setBlankValue(),this.dropdownList="";this.dispatchEvent(new CustomEvent("_enableNext",{detail:{firstd:!1,secound:!1}}))}_handleVisibility(t){for(var e=0;e<this.dropdownData.length;e++)this.dropdownData[e].label==t.detail.name&&(this.dropdownList=this.dropdownData[e]);let i=this.shadowRoot?.getElementById("searchdd1");i._setBlankValue();this.dispatchEvent(new CustomEvent("_enableNext",{detail:{firstd:!0,secound:!1}}))}_searchDropdownValue(t){}_checkSelectedDropdown(){let t=this.shadowRoot?.getElementById("searchdd"),e=this.shadowRoot?.getElementById("searchdd1");var i=[];i[0]=t.validate(),i[1]=e.validate();const o={detail:{firstd:i[0][0],secound:i[1][0]}};this.dispatchEvent(new CustomEvent("_enableNext",o))}validate(){let t=this.shadowRoot?.getElementById("searchdd"),e=this.shadowRoot?.getElementById("searchdd1");var i=[];if(i[0]=t.validate(),i[1]=e.validate(),1==i[0][0]&&1==i[1][0])return i;if(1==i[0][0]&&0==i[1][0]){var o=[];return o[0]=e.validate(),o[0][0]=!1,o[0][1]=i[1][1],o}return i[0][0]=!1,i[1][0]=!1,this.dropdownList="",this.searchDropdownData="",i}_handleSerchDropdown(){for(var t,e=0;e<this.dropdownData.length;e++)if(""!=this.searchableDropdownData){if(this.dropdownData[e].value==this.searchableDropdownData){this.dropdownList=this.dropdownData[e],this.searchVal=this.dropdownData[e].label,t=!0;break}t=!1}else this.searchVal="";if(!t){this.searchDropdownData="",this.searchVal="";const t={detail:{firstd:!1,secound:!1}};this.dispatchEvent(new CustomEvent("_enableNext",t))}}render(){return R`
      <div class="pant_brand_textboxes_section">
        <c-searchable-dropdown id="searchdd" paramName=${JSON.stringify(this.dependentDropdownData.components[0].param_name)} dropdownData=${JSON.stringify(this.dropdownData)} @_removeDepedentDd=${this._removeDepedentDd}
          @_enableNext=${this._handleVisibility} @_selectedDropdownValue=${this._searchDropdownValue} searchDropdown=${JSON.stringify(this.dependentDropdownData.components[0])} searchValue=${this.searchVal}></c-searchable-dropdown>
        ${this.dropdownList?R`
              <c-search-dependent-dropdown id="searchdd1" @_enableNext=${this._checkSelectedDropdown}
                paramName=${JSON.stringify(this.dependentDropdownData.components[0].c_searchable_dropdown.param_name)}
                selectedPostion=${this.dependentDropdownData.components[0].c_searchable_dropdown.selected_dropdown_pos} dropDownData=${JSON.stringify(this.dropdownList)}
                className="pants_size_section" dropdownValue=${this.searchDropdownData} ></c-search-dependent-dropdown>
            `:R`
              <c-search-dependent-dropdown id="searchdd1" @_enableNext=${this._checkSelectedDropdown}
                paramName=${JSON.stringify(this.dependentDropdownData.components[0].c_searchable_dropdown.param_name)}
                selectedPostion=${this.dependentDropdownData.components[0].c_searchable_dropdown.selected_dropdown_pos}
                className="pants_size_section" dropdownValue=${this.searchDropdownData}></c-search-dependent-dropdown>
            `}
      </div>
    `}firstUpdated(t){this.searchVal="",this._handleSerchDropdown()}updated(t){t.forEach((t,e)=>{"searchableDropdownData"==e&&this._handleSerchDropdown()})}};Cs.styles=[Ds],Ps([Y({type:Object})],Cs.prototype,"dependentDropdownData",2),Ps([Y({type:String})],Cs.prototype,"searchableDropdownData",2),Ps([Y({type:String})],Cs.prototype,"searchDropdownData",2),Ps([Y({type:String})],Cs.prototype,"searchVal",2),Ps([Y({type:Object})],Cs.prototype,"dropdownList",2),Ps([Y({type:Object})],Cs.prototype,"dropdownData",2),Cs=Ps([G("cc-searchable-dropdown")],Cs);const As=et`

  `;var js=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,Ls=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Rs(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&js(e,i,n),n};let Ts=class extends ot{constructor(){super()}_handleVisibility(t){1==t.detail.firstd&&1==t.detail.secound?this.nextNav="":this.nextNav="disabled"}_bcValidate(){let t=this.shadowRoot?.getElementById("pantBrand");return t.validate()}_handleNextAction(){""==this.value?this.nextNav="disabled":this.nextNav=""}render(){return R`
            <c-title class="redone_center_top" title=${JSON.stringify(this.dependentData.bc_data)}  className="${this.dependentData.bc_data.title_alignment}"
            ></c-title>
            <cc-searchable-dropdown id="pantBrand" @_enableNext=${this._handleVisibility} dependentDropdownData=${JSON.stringify(this.dependentData.bc_data)} dropdownData=${JSON.stringify(this.pantBrandSizeList)} searchableDropdownData=${this.value} searchDropdownData=${this.value1}
            ></cc-searchable-dropdown>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav} navigationValue=${JSON.stringify(this.navigationData)}  submitAction=${this.submitAction}
            theme=${this.theme} ></cc-navigation>
            <!-- @validate=$this . _handleChildValidation       Commented -->
        `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"value"==e&&this._handleNextAction()})}};Ts.styles=[As],Ls([Y({type:Object})],Ts.prototype,"dependentData",2),Ls([Y({type:Object})],Ts.prototype,"navigationData",2),Ls([Y({type:String})],Ts.prototype,"nextNav",2),Ls([Y({type:String})],Ts.prototype,"prevNav",2),Ls([Y({type:String})],Ts.prototype,"submitAction",2),Ls([Y({type:String})],Ts.prototype,"value",2),Ls([Y({type:String})],Ts.prototype,"value1",2),Ls([Y({type:Object})],Ts.prototype,"pantBrandSizeList",2),Ls([Y({type:String})],Ts.prototype,"theme",2),Ts=Ls([G("bc-dropdown")],Ts);const Bs=et`
    /* margin auto */
    .m_t_a {
        margin-top: auto;
    }
    .m_t_b {
        margin-bottom: auto;
    }
    /* instruction section margin */
    .instruction_margin {
        margin-top: auto;
        margin-bottom: 3%;
        padding-bottom: 5%;
    }
    /* margin */
    .mt2 {
        margin-top: 2%;
    }
    @media screen and (max-width: 600px) {
        .instruction_margin {
        margin-bottom: 6%;
        }
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
        
    }
   `;var Vs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Fs=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Js(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Vs(e,i,n),n};let Us=class extends ot{constructor(){super()}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){let t=this.shadowRoot?.getElementById("dd");var e=[];return e[0]=t.validate(),e}_handleNextAction(){if(""==this.value)this.nextNav="disabled";else{this.nextNav="";for(var t,e=this.ethnicityDropdownData.components[0].c_dropdown.list,i=0;i<e.length;i++){if(e[i]==this.value){this.nextNav="",t=!0;break}t=!1,this.nextNav="disabled"}t||(this.value="")}}render(){return R`
            <c-title class="redone_top_margin" title=${JSON.stringify(this.dropdownData.bc_data)}></c-title>
            <c-dropdown class="mt2 m_t_b" id="dd"
             @_enableNext=${this._handleVisibility} dropDownData=${JSON.stringify(this.ethnicityDropdownData.components[0])} dropdownValue=${this.value} 
              selectedPostion= ${this.dropdownData.bc_data.components[0].selected_dropdown_pos}  paramName=${JSON.stringify(this.dropdownData.bc_data.components[0].param_name)}></c-dropdown>
            <c-instruction class="instruction_margin" instruction=${JSON.stringify(this.dropdownData.instr)}></c-instruction>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} theme=${this.theme} submitAction=${this.submitAction}></cc-navigation>   
      `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"value"==e&&this._handleNextAction()})}};Us.styles=[Bs],Fs([Y({type:Object})],Us.prototype,"dropdownData",2),Fs([Y({type:Object})],Us.prototype,"navigationData",2),Fs([Y({type:String})],Us.prototype,"nextNav",2),Fs([Y({type:String})],Us.prototype,"prevNav",2),Fs([Y({type:String})],Us.prototype,"submitAction",2),Fs([Y({type:String})],Us.prototype,"value",2),Fs([Y({type:Boolean})],Us.prototype,"disabled",2),Fs([Y({type:String})],Us.prototype,"val",2),Fs([Y({type:String})],Us.prototype,"theme",2),Fs([Y({type:Object})],Us.prototype,"ethnicityDropdownData",2),Us=Fs([G("bc-ethnicity")],Us);const Ms=et`
    
    .cv_steps_title {
      font-size: var(--cvimg-landing-title-fsize);
      font-family: var(--cvimg-landing-title-font);
      width: 60%;
      font-weight: 500;
      padding: 0;
      letter-spacing: 2px;
      margin-bottom: 5%;
      text-align: center 
    }
    
    .cv_steps_title p {
      margin: 0;
    }
   
    .question_title {
      width: 100%;
    }
    .cvlanding .question_title {
      /*  width: 75%; */
      width: unset;
      
    }
    .question_title {
      color: black;
      font-size: var(--cvimg-landing-title-fsize);
      font-family: var(--cvimg-landing-title-font);
      color: var(--cvimg-landing-title-color);
      padding: 8px 12px;
      margin-bottom: 5%;
      width: 90%;
    }
    /* cv_steps section */
    .cv_steps {
      display: flex;
      align-items: center;
      gap: 7%;
      width: -webkit-fill-available;
      margin: 1.5% 0px 1.5% 33%;
      /* font-size: 15px; */
      -webkit-box-align: center;
      /* font-family: 'Avenir Light'; */
    }
    .cv_steps_center{
          margin: 1.5% auto 1.5% auto;
          justify-content: center;
    }
    .cv_steps_text {
      font-family: var(--cvimg-landing-step-font);
      font-size: var(--cvimg-landing-step-fsize);
      color: var(--cvimg-landing-step-color);
    }
    .cv_steps_index {
      color: var(--cvimg-landing-index-color);
      font-family: var(--cvimg-landing-index-font);
      font-size: var(--cvimg-landing-index-fsize);
    }
    .cv_steps_bottom {
      margin-bottom: 0;
      border: none;
      align-items: end;
      display: flex;
      flex-direction: unset;
      justify-content: space-between;
      width: 50%;
      position: absolute;
      bottom: 5%;
    }
    .cvlanding {
      display: flex;
      text-align: center;
      height: 85%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .center{
      text-align: center !important;
    }
    .left{
      text-align: left !important;
    }
    .right{
      text-align: right !important;
    }
    @media screen and (max-width: 600px) {
      .cv_steps {
        margin: 1.5% 0px 1.5% 25%;
      }
        .cv_steps_center{
          margin: 1.5% auto 1.5% auto;
          justify-content: center;
      }
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      .cv_steps {
        margin: 1.5% 0px 1.5% 23%;
      }
      .cv_steps_center{
          margin: 1.5% auto 1.5% auto;
          justify-content: center;
      }
    }
  `;var Hs=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,Qs=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ws(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Hs(e,i,n),n};let Gs=class extends ot{static get properties(){return{cvSteps:{type:Object},navigationData:{type:Object},nextNav:{type:String},prevNav:{type:String},submitAction:{type:String}}}constructor(){super()}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){this.shadowRoot?.getElementById("cvlanding");var t=[];return t[0]=!0,t}render(){return R`
      <div id="cvlanding" class="cvlanding fade">
        <div class="question_title cv_steps_title ${this.cvSteps.bc_data.components[0].title_alignment}">
          ${this.cvSteps.bc_data.components[0].inst_title.map(t=>R`<p>${t}</p>`)}
        </div>
        ${this.cvSteps.bc_data.components[0].cv_steps.map(t=>R`
          <div class="cv_steps cv_steps_${this.cvSteps.bc_data.components[0].title_alignment}">
            <!-- <div class="cv_steps_index">-</div>  -->
            <div class="cv_steps_text">${t.step_txt}</div>
          </div>
        `)} 
      </div>
      <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} theme=${this.theme} submitAction=${this.submitAction}></cc-navigation>
    `}};Gs.styles=[Ms],Qs([Y({type:Object})],Gs.prototype,"cvSteps",2),Qs([Y({type:Object})],Gs.prototype,"navigationData",2),Qs([Y({type:String})],Gs.prototype,"nextNav",2),Qs([Y({type:String})],Gs.prototype,"prevNav",2),Qs([Y({type:String})],Gs.prototype,"submitAction",2),Qs([Y({type:Boolean})],Gs.prototype,"disabled",2),Qs([Y({type:String})],Gs.prototype,"val",2),Qs([Y({type:String})],Gs.prototype,"theme",2),Gs=Qs([G("bc-cv-steps")],Gs);const Ks=et`
        /*  wave-loader page main div */
        .loaders {
            z-index: 10000;
            padding: 0;
            /* list-style: none; */
            display: none;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-flow: row wrap;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            height: 100vh;
            text-align: center;
            display: none;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            /* background-color: rgba(255, 255, 255, 0.9); */
            background: transparent;
            position: fixed;
            width: 100%;
        }
        
        .loaders .loader {
            position: relative;
        }
        /*  wave loader set to center */
        .pl-wave {
            display: flex;
            margin: 40vh auto auto;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        /* main loader section  */
        .loaders .pl-wave .loader {
            width: 50px;
            height: 30px;
        }
        /*  loader lines */
        .loaders .pl-wave .loader span,
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            position: absolute;
            display: block;
            width: 6px;
            height: 100%;
            background: var(--loader-line-color);
        }
        
        .loaders .pl-wave .loader span {
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.3s;
            animation: wave 0.9s linear infinite 0.3s;
        }
        
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            content: "";
        }
        
        .loaders .pl-wave .loader:before {
            top: 50%;
            left: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite;
            animation: wave 0.9s linear infinite;
        }
        
        .loaders .pl-wave .loader:after {
            top: 50%;
            right: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.6s;
            animation: wave 0.9s linear infinite 0.6s;
        }
        
        .loaders :after {
            display: block;
            clear: both;
            content: "";
            position: relative;
        }
        /* loader text description  */
        .loader_notifications {
            font-size: var(--loader-text-font);
            font-family: var(--loader-text-fsize);
            width: 100%;
            color: var(--loader-text-color);
            white-space: pre-line;
                text-align: center;
        }
        /* Animations */
        
        @-webkit-keyframes wave {
            0% {
            height: 100%;
            }
            40% {
            height: 10%;
            }
            80% {
            height: 100%;
            }
            100% {
            height: 100%;
            }
        }
        
        @keyframes wave {
            0% {
            height: 100%;
            }
            40% {
            height: 10%;
            }
            80% {
            height: 100%;
            }
            100% {
            height: 100%;
            }
        }
        
        @media screen and (max-width: 600px) {
            .loader_notifications {
            /* font-size: 24px; */
            width: 75%;
            }
        }
  
    `;var Ys=Object.getOwnPropertyDescriptor;let Zs=class extends ot{_startWaveLoader(){let t=document.querySelector("quidget-element")?.shadowRoot,e=t?.querySelector(".quiz_types_container");e.style.opacity="0.2",t?.querySelector("wave-loader");let i=t?.querySelector("wave-loader")?.shadowRoot,o=i?.querySelectorAll(".loader_notifications")[0];o.innerHTML="";let a=t?.querySelector("wave-loader")?.shadowRoot,n=a?.querySelector("#waveloader");return n.style.display="-webkit-box"}_setTextToaveLoader(t){let e=document.querySelector("quidget-element")?.shadowRoot,i=e?.querySelector("wave-loader")?.shadowRoot,o=i?.querySelectorAll(".loader_notifications")[0];o.innerHTML=t}_stopWaveLoader(){let t=document.querySelector("quidget-element")?.shadowRoot,e=t?.querySelector(".quiz_types_container");e&&(e.style.opacity="1");let i=t?.querySelector("wave-loader")?.shadowRoot;if(i){let t=i?.querySelector("#waveloader");return t.style.display="none"}return null}_startWaveLoaderMob(){let t=document.querySelector("quidget-element-mobile")?.shadowRoot,e=t?.querySelector(".quiz_types_container");e.style.opacity="0.2",t?.querySelector("wave-loader"),t?.querySelector("wave-loader");let i=t?.querySelector("wave-loader")?.shadowRoot,o=i?.querySelector("#waveloader");return o.style.display="-webkit-box"}_stopWaveLoaderMob(){let t=document.querySelector("quidget-element-mobile")?.shadowRoot,e=t?.querySelector(".quiz_types_container");e&&(e.style.opacity="1");let i=t?.querySelector("wave-loader")?.shadowRoot;if(i){let t=i?.querySelector("#waveloader");return t.style.display="none"}return null}render(){return R`
        <div id="waveloader" class="loaders">
          <div class="loftloader-wrapper pl-wave">
              <div class="loader">
                  <span></span>
              </div>
              <p class="loader_notifications"></p>
          </div>
        </div>        
      `}};Zs.styles=[Ks],Zs=((t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ys(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=a(n)||n);return n})([G("wave-loader")],Zs);const Xs=et`
        /* main section */
        .img_uppload_main {
            display: flex;
            height: 100%;
            width: 100%;
            z-index: 1;
        }
        /* 50% screen */
        .half_div {
            width: 50%;
            height: 100%;
            position: relative;
                    /* z-index: -1; */
        }
        /* left section */
        .left_side_img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
        }
        /* device wise img show hide */
        .cv_Desktop_img {
            display: block;
        }
        
        .cv_tab_img {
            display: none;
        }
        
        .cv_mob_img {
            display: none;
        }
        /* right section */
        .right_side_content {
            text-align: center;
            margin: 0;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            text-align: -webkit-center;
        }
        
        .right_side_content h2 {
            font-family: var(--cvimg-uploadimg-title-font);
            font-size: var(--cvimg-uploadimg-title-fsize);
            color: var(--cvimg-uploadimg-title-color);
            text-align: center;
        }
        
        .cv_img_upload {
            margin-bottom: 20px;
            width: -webkit-fill-available;
        }
        /* image instruction section */
        .instruction_img {
            display: flex;
            align-items: center;
            gap: 0% 5%;
        }
        
        .instruction_img h2 {
            font-size: var(--cvimg-uploadimg-instruction-count-fsize);
            margin: 0px;
            font-family: var(--cvimg-uploadimg-instruction-count-font) !important;
            color: var(--cvimg-uploadimg-instruction-count-color);
            font-weight: 400;
        }
        
        .text_instruction_img p {
            font-size: var(--cvimg-uploadimg-instruction-fsize);
            color: var(--cvimg-uploadimg-instruction-count-color);
            text-align: left;
            font-family: var(--cvimg-uploadimg-instruction-font) !important;
        }
                /* .text_instruction_img{
                    font-family: "Avenir Light";
                } */
        /* upload reupload section */
        .custom_file_input {
            --pseudo-upload-text: "UPLOAD";
            --psudo-upload-bg-color: var(--cvimg-uploadimg-upload-btn-background);
            --pseudo-upload-text-color: var(--cvimg-uploadimg-upload-btn-color);
            font-family: var(--cvimg-uploadimg-upload-btn-font);
        }
        
        .custom_file_input {
                    /* width: 100px; */
            background-color: var( --psudo-upload-bg-color);
            display: flex;
            width: 50%;
            height: 34px;
            outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            cursor: pointer;
            font-size: var(--cvimg-uploadimg-upload-btn-fsize);
            align-items: center;
            justify-content: center;
            font-family: var(--cvimg-uploadimg-upload-btn-font);
        }
        
        .custom_file_input_afterUpload {
            background-color: var(--cvimg-uploadimg-reupload-btn-background);
        }
        
        .custom_file_input_afterUpload:before {
            color: var(--cvimg-uploadimg-reupload-btn-color) !important;
            border: none !important;
        }
        
        .custom_file_input::-webkit-file-upload-button {
            visibility: hidden;
        }
        
        .custom_file_input::before {
            content: var(--pseudo-upload-text);
            color: var(--pseudo-upload-text-color);
            font-size: var(--cvimg-uploadimg-upload-btn-fsize);
            text-align: center;
            font-family: 'Avenir Medium';
        }
                
                /* .custom_file_input:hover::before {
                    border-color: black;
                } */
                
        .custom_file_input:active {
            outline: 0;
        }
        /* next btn for mobile */
        .next_img_btn {
            background-color: var(--template-textbtn-enable-background);
            color: var(--template-textbtn-color);
            border: var(--template-textbtn-enable-border);
            height: 34px;
            font-size: var(--template-textbtn-fsize);
            font-family: var(--template-textbtn-font);
            width: 50%;
            margin-top: 20px;
            display: flex;
            place-content: center;
            align-items: center;
            cursor: pointer;
        }
        
        .element_hide {
            display: none;
        }
        /* prev question section */
        .back_next_btn {
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 92%;
            z-index: 2;
            top: 2%;
            left: 3%;
        }
        
        .sign_smaller {
            margin-top: 10px;
            margin-left: 10px;
        }
        
        .sign_greater {
            margin-top: 10px;
            margin-right: 10px;
        }
        
        .front_img_bottom_btn {
            display: none;
        }
        
        .front_img_bottom_btn .prev {
            text-decoration: none;
        }
        
        .prev_back_arrow {
            width: 8px;
            height: 8px;
            border: 2px solid;
            border-color: var(--cvimg-uploadimg-prev-back-arrow) transparent transparent var(--cvimg-uploadimg-prev-back-arrow);
            transform: rotate(-45deg);
            margin-left: 0px;
            margin-top: 10px;
            cursor: pointer;
        }
        .front_img_bottom_btn .prev_back_arrow{
            width: 12px;
            height: 12px;
            color: var(--cvimg-iconbtn-color);
            border-color: var(--cvimg-iconbtn-color) transparent transparent var(--cvimg-iconbtn-color);
            transform: rotate(-45deg);
            display: flex;
            margin-top: 0px;
            place-content: center;
            
        }
        .back_icon{
            width: 25px;
                height: 25px;
        }
        .back_icon img{
            width: 100%;
        }
        
        .next_back_arrow {
            width: 8px;
            height: 8px;
            border: 2px solid;
            border-color: var(--cvimg-uploadimg-prev-back-arrow) transparent transparent var(--cvimg-uploadimg-prev-back-arrow);
            transform: rotate(136deg);
            margin-right: 0px;
            margin-top: 10px;
            cursor: pointer;
        }

        .center{
        text-align: center !important;
        }
        .left{
        text-align: left !important;
        }
        .right{
        text-align: right !important;
        }

        .next_icon_txt
        {
            display: flex;
            place-content: center;
            align-items: center;
            font-size: var(--question-textbtn-fsize);
            font-family: var(--question-textbtn-font);
            justify-content: center;
            float: right;
            text-decoration: underline;
            cursor: pointer;
            bottom: 0px;
            color: var(--question-nev-button-enable-color);
            transition: all 0.6s ease 0s;
            user-select: none;
        }
    
        .disabled {
            pointer-events: none;
            color: var(--question-nev-button-disable-color) !important;
         }

        .next_icon_txt img{
            width: 18px;
        }

        .back_icon_txt img{
             width: 18px;
        }
        .back_icon_txt {
            display: flex;
            font-size: var(--question-textbtn-fsize);
            font-family: var(--question-textbtn-font);
            color: var(--question-nev-button-enable-color);
            display: flex;
            justify-content: center;
            text-decoration: underline;
            cursor: pointer;
            bottom: 0px;
            color: var(--question-nev-button-enable-color);
            transition: all 0.6s ease 0s;
            user-select: none;
        }
        
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .left_side_img {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        
            .front_img_bottom_btn {
                bottom: 5%
            }
        }
        
        @media screen and (max-width: 600px) {
            .element_hide {
                display: none !important;
            }
        
            .cv_Desktop_img {
                display: none;
            }
        
            .cv_tab_img {
                display: none;
            }
        
            .cv_mob_img {
                display: block;
            }
        
            .left_side_img {
                width: 100%;
                height: 100%;
                        /* transform: scaleX(1.14); */
                margin-left: 1px;
            }
        
            .half_div {
                margin-top: 8px
            }
        
            .next_img_btn {
                display: none;
            }
        
            .back_next_btn {
                display: none;
            }
        
            .front_img_bottom_btn {
                display: flex;
                justify-content: space-between;
                width: 90%;
                position: absolute;
                bottom: 6%;
                margin-left: 5%;
                margin-right: 5%;
                z-index: 9999;
                align-items: center;
            }
        
            .front_img_bottom_btn .prev {
                text-align: center;
                width: 37px;
                height: 37px;
                border-radius: 50%;
                font-family: var(--cvimg-iconbtn-font);
                font-size: var(--cvimg-iconbtn-fsize);
                color: var(--cvimg-iconbtn-color);
                border: var(--cvimg-iconbtn-border);
                background: var(--cvimg-iconbtn-background);
                display: flex;
                place-content: center;
                align-items: center;
            }
        
             .front_img_bottom_btn .mobile_next_btn {
                width: 43%;
                height: 37px;
                background-color: var(--template-textbtn-enable-background);
                color: var(--template-textbtn-color);
                border: var(--template-textbtn-enable-border);
                display: flex;
                place-content: center;
                align-items: center;
                font-size: var(--template-textbtn-fsize);
                font-family: var(--template-textbtn-font);
                text-decoration: none;
                align-items: center;
            } 

            /* .front_img_bottom_btn .mobile_next_btn {
                width: 43%;
            } */
        
            .custom_file_input {
                width: 98%;
                        /* height: 37px; */
            }
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .left_side_img {
                border-bottom-left-radius: 20px;
            }
        
            .cv_Desktop_img {
                display: none
            }
        
            .cv_tab_img {
                display: block;
                object-fit: cover;
            }
        
            .cv_mob_img {
                display: none;
            }
        
            .custom_file_input {
                width: 62%;
            }
        
            .next_img_btn {
                width: 62%;
            }
        }
    `;var tr=Object.defineProperty,er=Object.getOwnPropertyDescriptor,ir=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?er(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&tr(e,i,n),n};let or=class extends ot{constructor(){super()}_uploadImages(t){var e=this.shadowRoot?.getElementById("pic_front"),i=e.files,o=this.shadowRoot?.querySelectorAll(".custom_file_input")[0],a=this.shadowRoot?.querySelectorAll(".mobile_next_btn")[0],n=o.nextElementSibling;"pic_front"==t.target.id&&null!=i[0]?(o.style.setProperty("--pseudo-upload-text",'i18Next.t("bcimg.button.reupload")'),o.classList.add("custom_file_input_afterUpload"),n.classList.remove("element_hide"),a.classList.remove("element_hide"),null!=i[0]&&this._imgUploadAPI(i)):"pic_front"==t.target.id&&null!=i[0]&&(o.classList.remove("custom_file_input_afterUpload"),o.style.setProperty("--pseudo-upload-text",'i18Next.t("bcimg.button.upload")'),n.classList.add("element_hide"),a[0].classList.add("element_hide"))}async _imgUploadAPI(t){const e=new FormData;e.append("image_file",t[0]);var i=this.shadowRoot?.querySelectorAll(".custom_file_input")[0],o=i.nextElementSibling,a=this.shadowRoot?.querySelectorAll(".mobile_next_btn")[0];(new Zs)._startWaveLoader();let n=await(new mi).getImageUrlV2(e,this.partnerId);n?(n.image_url&&(this.value=n.image_url),i.classList.remove("custom_file_input_afterUpload"),i.style.setProperty("--pseudo-upload-text",'"UPLOAD"'),o.classList.add("element_hide"),a.classList.add("element_hide")):(i.classList.remove("custom_file_input_afterUpload"),i.style.setProperty("--pseudo-upload-text",'"UPLOAD"'),o.classList.add("element_hide"),a.classList.add("element_hide")),(new Zs)._stopWaveLoader()}_performValidation(t){t.preventDefault();const e="validate";if("1"==this.submitAction){const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateAndSubmit",t))}else{const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validate",t))}}_goBack(t){t.preventDefault();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}_skipQuestion(t){t.preventDefault();if("1"==this.submitAction){const t={detail:{name:"validate"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateAndSubmit",t))}else{var e=this.paramName;if(this.paramName==be){const i={detail:{_name:e},bubbles:!0,composed:!0};this.value?this._performValidation(t):this.dispatchEvent(new CustomEvent("skipCvQuestion",i))}else{const t={detail:{_name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateCvQuiz",t))}}}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){this.shadowRoot?.getElementById("front_image");var t=[];return t[0]=this.validate(),t}validate(){var t=[];return this.value?(t[0]=!0,t[1]=this.paramName,t[2]=this.value):t[0]=!1,t}_showReuploadButton(){var t=this.shadowRoot?.querySelectorAll(".custom_file_input")[0],e=this.shadowRoot?.querySelectorAll(".mobile_next_btn")[0],i=t.nextElementSibling;""!=this.value&&(t.style.setProperty("--pseudo-upload-text",'"REUPLOAD"'),t.classList.add("custom_file_input_afterUpload"),i.classList.remove("element_hide"),e.classList.remove("element_hide"))}render(){return this.theme==ei?this.desktopImg=this.imageUpload.bc_data.components[0].light.cv_img_desktop:this.desktopImg=this.imageUpload.bc_data.components[0].dark.cv_img_desktop,this.theme==ei?this.tabImg=this.imageUpload.bc_data.components[0].light.cv_img_tab:this.tabImg=this.imageUpload.bc_data.components[0].dark.cv_img_tab,this.theme==ei?this.mobileImg=this.imageUpload.bc_data.components[0].light.cv_img_mob:this.mobileImg=this.imageUpload.bc_data.components[0].dark.cv_img_mob,"0"==this.submitAction?(this.buttonText=this.navigationData.text,this.navigationData.right.text&&(this.buttonText=this.navigationData.right.text)):"1"==this.submitAction?this.buttonText="SUBMIT":"2"==this.submitAction&&(this.buttonText="SKIP"),R`
            <div class="back_next_btn">
                <a class="prev_back_arrow" @click=${t=>this._goBack(t)}></a>
                <a class="next_back_arrow" @click=${t=>this._skipQuestion(t)}></a>
            </div> 
            <div id="front_image" class="fade img_uppload_main">
                <div class="half_div">
                    <img class="left_side_img cv_Desktop_img" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.desktopImg}" />
                    <img class="left_side_img cv_tab_img" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.tabImg}" />
                    <img class="left_side_img cv_mob_img" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.mobileImg}" />
                </div>
            
                <div class="half_div">
                    <div class="right_side_content">
                    <h2 class="${this.imageUpload.bc_data.components[0].title_alignment}">${this.imageUpload.bc_data.components[0].img_title}</h2>
                    <div class="cv_img_upload">
                        ${this.imageUpload.bc_data.components[0].inst_img.map(t=>R`
                                <div class="instruction_img">
                                    <div class="count_instruction_img">
                                        <h2>${t.inst_index}</h2>
                                    </div>
                                    <div class="text_instruction_img">
                                        <p>
                                        ${t.inst_txt}
                                        </p>
                                    </div>
                                </div>
                            `)}
                    </div>             
                    <input type="file" id="pic_front" name="pic_front" style="display: none"  accept="image/*,.heic"  @change=${this._uploadImages} required>
                    <!-- <input type="file" accept="image/*;capture=camera" capture="camera"/>
                    <input type="file" accept="image/*,.heic" capture="camera" />
                    <input type="file" accept="capture=camera,.heic" capture="camera" />
                    <input type="file" accept="capture=camera;.heic" capture="camera" />
                        <input type="file" accept="image/*" /> -->
                    <label id="front_button" for="pic_front" class="custom_file_input"></label>
                    <button class="next_img_btn element_hide" @click=${this._performValidation}>${this.buttonText}</button> 
                    </div>
                </div>
            </div>
            ${this.imageUpload.img__mob_nav?R`
                <div class="front_img_bottom_btn" >
                    ${""!=this.imageUpload.img__mob_nav.left.icon_url?R`
                    <a class="back_icon"  href="javascript:void(0);"  @click=${this._goBack}><img class="" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.theme+"/"+this.imageUpload.img__mob_nav.left.icon_url}" /></a> 
                    <!--  <a class="back_icon_txt "  href="javascript:void(0);"  @click=${this._goBack}><img class="" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.theme+"/"+this.imageUpload.img__mob_nav.left.icon_url}" /> ${this.imageUpload.img__mob_nav.left.text}</a>  -->
                    `:R`
                    <a class="prev_back_arrow"  href="javascript:void(0);"  @click=${this._goBack}></a> 
                    `}
                    <a class="mobile_next_btn element_hide"  href="javascript:void(0);" @click=${t=>this._performValidation(t)}>${this.buttonText}</a> 
                  
                </div>
                `:R`
                <div class="front_img_bottom_btn" >
                    <a class="prev"  href="javascript:void(0);" @click=${t=>this._goBack(t)}>❮</a>
                    <a class="mobile_next_btn element_hide"  href="javascript:void(0);" @click=${t=>this._performValidation(t)}>${this.buttonText}</a>
                </div>
                `}
            
    `}firstUpdated(t){this._showReuploadButton()}updated(t){t.forEach((t,e)=>{"value"==e&&this._showReuploadButton()})}};or.styles=[Xs],ir([Y({type:Object})],or.prototype,"imageUpload",2),ir([Y({type:Object})],or.prototype,"navigationData",2),ir([Y({type:String})],or.prototype,"paramName",2),ir([Y({type:String})],or.prototype,"nextNav",2),ir([Y({type:String})],or.prototype,"prevNav",2),ir([Y({type:String})],or.prototype,"submitAction",2),ir([Y({type:String})],or.prototype,"value",2),ir([Y({type:String})],or.prototype,"partnerId",2),ir([Y({type:String})],or.prototype,"disabled",2),ir([Y({type:Boolean})],or.prototype,"val",2),ir([Y({type:String})],or.prototype,"theme",2),ir([Y({type:String})],or.prototype,"desktopImg",2),ir([Y({type:String})],or.prototype,"tabImg",2),ir([Y({type:String})],or.prototype,"mobileImg",2),ir([Y({type:String})],or.prototype,"backArrowImg",2),ir([Y({type:String})],or.prototype,"buttonText",2),or=ir([G("bc-image-upload")],or);const ar=et`
        /* pdp page size section */
        #pdp_size_display {
            font-family: var(--pdpsize-font) !important;
            color: var(--pdpsize-color);
            cursor: pointer;
            margin: 0px;
            height: unset;   /* depend on partner */
            /* height: unset; height: 38px;  */
            display: flex;
            align-items: center;
            font-size: var(--pdpsize-fsize);
            text-transform : var(--pdpsize-txt-transform);
            line-height: calc(var(--pdpsize-fsize) + 1px);
            text-decoration : var(--pdpsize-text-decoration);
        }
        #pdp_size_display u{
            font-family: var(--pdpsize-font) !important;
        }
        #pdp_size_display b{
            font-family: var(--pdpsize-font) !important;
        }
        /* common font apply */
        * {
            font-family: var(--common-font-medium);
                font-weight: 500;
        }
        #pdp_size_display b{
            font-weight: bold !important;
        }
        /* main section of pop-up */
        .quidget_container {
            display: flex;
            /*  display:none; */
            width: 100%;
            height: 100vh;
            place-content: center;
            z-index: 1000;
            top: 0;
            left: 0;
            position: fixed;
        }
        /* pop-up design div */
        .quidget {
            display: flex;
            position: fixed;
        /* Stay in place */
            z-index: 999999999;
            position: fixed;
                /* margin: 2.5%; */
            flex-direction: column;
            top: 0;
            width: 100%;
        /* Full width */
            height: 100%;
        /* Full height */
                /* Enable scroll if needed */
            background-color: var(--popup-background-color);
        /* Fallback color */
            line-height: normal;
            overflow: hidden;
        }
        /* header section */
        .headerTag {
            height: 10% !important;
        }
        /* template main section */
        .quiz_types_container {
            width: 100%;
            position: absolute;
            z-index: 2;
            height: 90%;
            top: 10%;
        }
        /* full hight class */
        .full_height {
            height: 100% !important;
        }
        /* template section design */
        .quiz_container {
            width: 100%;
            height: 100%;
            text-align: -webkit-center;
        }
        /* fit btn section */
        .findPerfectFit_section {
            display: flex;
            /* margin: 20px 0px; */
            margin: 0px 0px;
        }
        
        .quidget_btn {
            height: unset;  
            /* height: unset; height: 38px;  */  /* depend on partner */
            /* border: var(--pdpbtn-border); */
            border: none;
            display: flex;
            align-items: center;
            gap: 5px;
            justify-content: center;
            background: var(--pdpbtn-backgound);
            color: var(--pdpbtn-color);
            font-size: var(--pdpbtn-fsize);
            font-family: var(--pdpbtn-font) !important;
            cursor: pointer;
            padding: 0px;
            
        }
        
        .quidget_btn img {
            width: var(--quidget-btn-image-width);
            height: var(--quidget-btn-image-height);
            margin-bottom: var(--quidget-btn-bottom-margin);
        }
        
        .quidget_btn p {
            text-decoration : var(--pdpbtn-text-decoration);
            text-decoration-line : var(--pdpbtn-text-decoration);
            line-height: calc(var(--pdpbtn-fsize) + 1px);
            font-family: var(--pdpbtn-font) !important;
            color: var(--pdpbtn-color);
            font-size: var(--pdpbtn-fsize);
             margin: 0px;   /* depend on partner */
            text-transform: var(--pdpbtn-txt-transform);
        }
        /* template components */
        #signIntag {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #bestfitag {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #signuptag {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #signupsuctag {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #errorpage {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #verifyuserpage {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #sizenotfoundpage {
                /* display: none; */
            width: 100%;
            height: 100%;
        }
        
        #forgotpage {
            width: 100%;
            height: 100%;
        }
        
            /* Input Alert Start */
        .errorAlert {
            width: 180px;
            background-color: rgb(255, 255, 255);
            color: rgb(0, 0, 0);
            text-align: left;
            padding: 15px 8px;
            position: absolute;
            z-index: 501;
            animation: 1s ease 0s 1 normal none running fadeIn;
            margin-bottom: 60px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }

        /* hide category wise  */
        .hideCategory{
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .quidget {
                /* width: 55%;
                top: 19%;
                height: 62%; */
                border-radius: 20px;
                width: 375px;
                height: 667px;
                position: relative;
            }
        
            .quidget_container {
                background-color: var(--pop-up-side-background );
                align-items: center;
            }
            
        
            .quiz_container {
                height: 95%;
            }
        }
        
            /* Input Alert End */
        @media only screen and (max-device-width: 600px) {
            .quiz_types_container {
                height: 92% !important;
                top: 8%;
            }
        
            .headerTag {
                height: 8% !important;
            }
        }
        
        @media only screen and (min-device-width: 900px) {
            .quidget {
                    /* width:38%;
                    top: 12%;
                height: 80%; */
                width: 636px;
                height: 600px;
                position: relative;
            }
        
            .quidget_container {
                background-color: var(--pop-up-side-background );
                justify-content: center;
                align-items: center;
            }
        
            .quidget_btn {
                left: 22px;
                top: 475px;
                font-style: normal;
            }
        }
        
        @media only screen and (max-device-width: 900px) {
                
        }
        
        
            /* Wave-loader */
        .loaders {
            /* z-index: 10000;
            padding: 0; */
            /* list-style: none; */
            display: none;
            position: relative;
            height: unset;  
            /*   height: unset;  height: 38px;   */ /* depend on partner */
            justify-content: center;
        }
        
        .loaders .loader {
            position: relative;
        }
        
        .pl-wave {
            display: flex;
            align-items: center;
            /* margin: 40vh auto auto;
            flex-direction: column;
            align-items: center;
            width:100%; */
        }
        
        /* .loaders .pl-wave .loader {
            width: 35px;
            height: 18px;
        } */

        .loaders .pl-wave .loader {
            width: var(--fit-btn-loader-width);
            height: var(--fit-btn-loader-height);
        }
        
        .loaders .pl-wave .loader span,
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            position: absolute;
            display: block;
            width: 6px;
            height: 100%;
            background: var(--loader-pdp-line-color);
        }
        
        .loaders .pl-wave .loader span {
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.3s;
            animation: wave 0.9s linear infinite 0.3s;
        }
        
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            content: "";
        }
        
        .loaders .pl-wave .loader:before {
            top: 50%;
            left: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite;
            animation: wave 0.9s linear infinite;
        }
        
        .loaders .pl-wave .loader:after {
            top: 50%;
            right: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.6s;
            animation: wave 0.9s linear infinite 0.6s;
        }
        
        .loaders :after {
            display: block;
            clear: both;
            content: "";
            position: relative;
        }
        
        .loader_notifications {
            font-size: 25px;
            width: 100%;
        }
        /* Animations */
        
        @-webkit-keyframes wave {
            0% {
                height: 100%;
            }
        
            40% {
                height: 10%;
            }
        
            80% {
                height: 100%;
            }
        
            100% {
                height: 100%;
            }
        }
        
        @keyframes wave {
            0% {
                height: 100%;
            }
        
            40% {
                height: 10%;
            }
        
            80% {
                height: 100%;
            }
        
            100% {
                height: 100%;
            }
        }
        
        @media screen and (max-width: 600px) {
            .loader_notifications {
                font-size: 24px;
                width: 75%;
            }
        }   
    `;var nr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,rr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?sr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&nr(e,i,n),n};let lr=class extends ot{constructor(){super();const t=document.createElement("script");if(window.jQuery){const e="2.2.4",i=window.jQuery.fn.jquery.split(".").map(Number),o=e.split(".").map(Number);this.isUserJqVersionGt(i,o)||(t.type="text/javascript",t.src=ke,document.head.appendChild(t))}else t.type="text/javascript",t.src=ke,document.head.appendChild(t);const e=document.createElement("script");e.type="text/javascript",e.src="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+qe,document.head.appendChild(e)}isUserJqVersionGt(t,e){for(let i=0;i<e.length;i++){if((t[i]||0)>(e[i]||0))return!0;if((t[i]||0)<(e[i]||0))return!1}return!0}async returnDataToPdp(){let t=(new vi).getDataByName(Ye,this.cookieNameJson.quiz_input_id),e=(new vi).getDataByName(Ke,this.cookieNameJson.quiz_input_id);this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);let i="",o="",a="";null==this.bestFitSize&&null==this.bestFitSize||(i=this.bestFitSize),null==this.loggedIn&&null==this.loggedIn||(o=this.loggedIn),null==t&&null==t||(a=t);return{detail:{size:i,custId:o,quizId:e,quizMenId:a}}}render(){return R`
            
        `}firstUpdated(t){this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag),this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.loggedIn?this.islogin=!0:this.islogin=!1}};lr.styles=[ar],rr([Y({type:String})],lr.prototype,"partnerId",2),rr([Y({type:String})],lr.prototype,"productHandle",2),rr([Y({type:String})],lr.prototype,"productCategory",2),rr([Y({type:Object})],lr.prototype,"cookieNameJson",2),rr([Y({type:String})],lr.prototype,"envCookieFlag",2),rr([Y({type:String})],lr.prototype,"loggedIn",2),rr([Y({type:Boolean})],lr.prototype,"islogin",2),rr([Y({type:String})],lr.prototype,"bestFitSize",2),lr=rr([G("blank-quidget")],lr);const cr=et`
        
        /* margin auto */
        .m_t_a {
            margin-top: auto;
        }
        .m_t_b {
            margin-bottom: auto;
        }
        .input_section {
            width: 60%;
            text-align: left;
            // margin-top: 24px;
            margin-left: auto;
            margin-right: auto;
            margin-top: -2%;
            height: 75%;
            overflow: scroll;
        }
        /* scroll bar hide */
        .input_section::-webkit-scrollbar {
            width: 0 !important;
        }
        .input_section input{
            width: -webkit-fill-available;
            height: 35px;
            border: var(--question-input-text-box-border);
            border-radius: 0px;
            font-size: var(--question-input-text-box-fsize);
            padding: 5px;
            background: var(--question-input-text-box-background);
            color: var(--question-input-text-box-color);
            font-family: var(--question-input-text-box-font)
        }
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="date"] {
               visibility: hidden;
                position: absolute;
        }
        .date_span{
            width: -webkit-fill-available;
            height: 35px;
            border: var(--question-input-text-box-border);
            border-radius: 0px;
            font-size: var(--question-input-text-box-fsize);
            padding: 5px;
            background: var(--question-input-text-box-background);
            color: var(--question-input-text-box-color);
            font-family: var(--question-input-text-box-font)
        }
        .input_error_tag {
            visibility: hidden;
            color: var(--question-error-txt-color);
            font-family: var(--question-error-txt-font);
            font-size: var(--question-error-txt-fsize);
            margin-bottom: 5px;
            margin-top: 5px;
        }
        /* on focus border */
        .input_section input:focus {
          outline: none;
        }

        .question_label{
            margin-bottom: 5px;
            font-size: var(--question-info-detail-quiz-fsize);
            font-family: var(--question-info-detail-quiz-font);
            color: var(--question-info-detail-quiz-color);
        }
        .button_group{
            display: flex;
            gap: 10px;
        }
        /* btn border */
        .button_radio {
            width: 65px;
            height: 25px;
            position: relative;
            border: var(--question-choicebtn-sport-border);
        }
        /* radio btn input and label styles */
        .button_radio input[type="radio"] {
            opacity: 0.011;
            z-index: 100;
            font-family: var(--question-choicebtn-font);
                cursor: pointer;
        }
        .button_radio label,
        .button_radio input {
            display: block;
            position: absolute;
            inset: 0px;
            font-size: var(--question-choicebtn-fsize); 
        }
        .button_radio input[type="radio"]:checked + label {
            background: var(--question-choicebtn-selected-background);
            color: var(--question-choicebtn-selected-color);
        }
        .button_radio label {
            cursor: pointer;
            z-index: 90;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--question-choicebtn-font);
            color: var(--question-sport-unselected-color)
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .input_section {
            margin-top: 0%;
        }
        }

        @media screen and (max-width: 600px) {
           .input_section {
            margin-top: 0%;
        }
        } 
    `;var pr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,ur=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?dr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&pr(e,i,n),n};let hr=class extends ot{constructor(){super()}_foundInput(t){t.target,t.target.id;let e=this.shadowRoot?.getElementById("first_name"),i=this.shadowRoot?.getElementById("last_name");this.shadowRoot?.getElementById("school_name");let o=this.shadowRoot?.getElementById("zip_code"),a=this.shadowRoot?.getElementById("email_id");""!=e.value&&""!=i.value&&""!=o.value&&""!=a.value?this.nextNav="":this.nextNav="disabled"}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}async checkZipCodeIsValid(t){return(new Zs)._startWaveLoader(),await(new mi).checkZipCodeRestriction(this.partnerId,t)}async _bcValidate(){var t=[],e=[],i=[],o=[],a=[],n=[];let s=this.shadowRoot?.getElementById("first_name"),r=this.shadowRoot?.getElementById("last_name"),l=this.shadowRoot?.getElementById("school_name"),c=this.shadowRoot?.getElementById("zip_code"),p=this.shadowRoot?.getElementById("email_id"),d=this.shadowRoot?.getElementById("first_name_error"),u=this.shadowRoot?.getElementById("last_name_error"),h=this.shadowRoot?.getElementById("school_name_error"),m=this.shadowRoot?.getElementById("zip_code_error"),g=this.shadowRoot?.getElementById("email_id_error");!(l.maxLength>0)||l.maxLength,d.style.visibility="hidden",u.style.visibility="hidden",h.style.visibility="hidden",m.style.visibility="hidden",g.style.visibility="hidden";var y=!1;const f=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{4,}.[a-zA-Z]{2,}$/,v=/^[A-Za-z\s\-.,\/_&"'()]{2,100}$/,b=/^[A-Za-z0-9\s\-.,\/_&"'()]{2,100}$/;if(l.value.trim()&&(y=!b.test(l.value.trim())),p.value.trim()&&f.test(p.value.trim()),v.test(s.value.trim()))if(v.test(r.value.trim()))if(y)h.style.visibility="visible";else if(f.test(p.value.trim()))if(/^\d{5,9}$/.test(c.value)){d.style.visibility="hidden",u.style.visibility="hidden",h.style.visibility="hidden",m.style.visibility="hidden";let g=await this.checkZipCodeIsValid(c.value);if((new Zs)._stopWaveLoader(),g){if(1==g.restricted){const e={detail:{name:name,isAgeQuizErr:!1,isZipCodeError:!0},bubbles:!0,composed:!0};return this.dispatchEvent(new CustomEvent("_showQuizErrorMsg",e)),t=""}return e[0]=!0,e[1]=this.organizationDeatilsdata.bc_data.components[0].param_name,e[2]=s.value.trim(),t[0]=e,i[0]=!0,i[1]=this.organizationDeatilsdata.bc_data.components[1].param_name,i[2]=r.value.trim(),t[1]=i,o[0]=!0,o[1]=this.organizationDeatilsdata.bc_data.components[2].param_name,o[2]=y?null:l.value.trim(),t[2]=o,a[0]=!0,a[1]=this.organizationDeatilsdata.bc_data.components[3].param_name,a[2]=c.value.trim(),t[3]=a,n[0]=!0,n[1]=this.organizationDeatilsdata.bc_data.components[4].param_name,n[2]=p.value.trim(),t[4]=n,t}}else m.style.visibility="visible";else g.style.visibility="visible";else u.style.visibility="visible";else d.style.visibility="visible"}_handleNextAction(){""==this.firstNmValue?this.nextNav="disabled":this.nextNav=""}render(){return R`
           <!-- <c-multiline-title class="" titleData=${JSON.stringify(this.organizationDeatilsdata.bc_data)}></c-multiline-title>  -->
            <c-title class="" title=${JSON.stringify(this.organizationDeatilsdata.bc_data)}></c-title>
            <div class="input_section">
                <input id="first_name" name="first_name" class="input_text organization_field" type=${this.organizationDeatilsdata.bc_data.components[0].input.type}
                placeholder="${this.organizationDeatilsdata.bc_data.components[0].label}"
                @input=${this._foundInput} value=${this.firstNmValue}
                onKeyPress="if(this.value.length==${this.organizationDeatilsdata.bc_data.components[0].input.maxlength})  return false;" required>
                <p id="first_name_error" class="input_error_tag">${this.organizationDeatilsdata.bc_data.components[0].input.validation_label}</p>

                <input id="last_name" name="last_name" class="input_text organization_field" type=${this.organizationDeatilsdata.bc_data.components[1].input.type}
                placeholder="${this.organizationDeatilsdata.bc_data.components[1].label}"
                @input=${this._foundInput}  value=${this.lastNmValue}
                onKeyPress="if(this.value.length==${this.organizationDeatilsdata.bc_data.components[1].input.maxlength})  return false;" required>
                <p id="last_name_error" class="input_error_tag">${this.organizationDeatilsdata.bc_data.components[1].input.validation_label}</p>
                
                 <input id="school_name" name="school_name" class="input_text organization_field" type=${this.organizationDeatilsdata.bc_data.components[2].input.type}
                placeholder="${this.organizationDeatilsdata.bc_data.components[2].label}"
                @input=${this._foundInput} value=${this.schoolNmValue}
                onKeyPress="if(this.value.length==${this.organizationDeatilsdata.bc_data.components[2].input.maxlength})  return false;" required>
                <p id="school_name_error" class="input_error_tag">${this.organizationDeatilsdata.bc_data.components[2].input.validation_label}</p>

                <input id="zip_code" name="zip_code" class="input_text organization_field" type=${this.organizationDeatilsdata.bc_data.components[3].input.type}
                placeholder="${this.organizationDeatilsdata.bc_data.components[3].label}"
                @input=${this._foundInput} value=${this.zipCodeValue}
                onKeyPress="if(this.value.length==${this.organizationDeatilsdata.bc_data.components[3].input.maxlength})  return false;" required>
                <p id="zip_code_error" class="input_error_tag">${this.organizationDeatilsdata.bc_data.components[3].input.validation_label}</p>

                <input id="email_id" name="email_id" class="input_text organization_field" type=${this.organizationDeatilsdata.bc_data.components[4].input.type}
                placeholder="${this.organizationDeatilsdata.bc_data.components[4].label}"
                @input=${this._foundInput} value=${this.zipCodeValue}
                onKeyPress="if(this.value.length==${this.organizationDeatilsdata.bc_data.components[4].input.maxlength})  return false;" required>
                <p id="email_id_error" class="input_error_tag">${this.organizationDeatilsdata.bc_data.components[4].input.validation_label}</p>

                

            </div>
            <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)}
            submitAction=${this.submitAction}></cc-navigation>
        `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"firstNmValue"==e&&this._handleNextAction()})}};hr.styles=[cr],ur([Y({type:Object})],hr.prototype,"organizationDeatilsdata",2),ur([Y({type:String})],hr.prototype,"val",2),ur([Y({type:String})],hr.prototype,"nextNav",2),ur([Y({type:String})],hr.prototype,"prevNav",2),ur([Y({type:String})],hr.prototype,"firstNmValue",2),ur([Y({type:Object})],hr.prototype,"navigationData",2),ur([Y({type:String})],hr.prototype,"submitAction",2),ur([Y({type:Object})],hr.prototype,"minmaxData",2),ur([Y({type:Boolean})],hr.prototype,"disabled",2),ur([Y({type:Boolean})],hr.prototype,"firstNmValid",2),ur([Y({type:Boolean})],hr.prototype,"lastNmValid",2),ur([Y({type:Boolean})],hr.prototype,"zipCodeValid",2),ur([Y({type:Boolean})],hr.prototype,"schoolNmValid",2),ur([Y({type:String})],hr.prototype,"lastNmValue",2),ur([Y({type:String})],hr.prototype,"zipCodeValue",2),ur([Y({type:String})],hr.prototype,"schoolNmValue",2),ur([Y({type:String})],hr.prototype,"dateValue",2),ur([Y({type:String})],hr.prototype,"partnerId",2),hr=ur([G("bc-informatio-detils")],hr);var mr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,yr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?gr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&mr(e,i,n),n};let fr=class extends ot{constructor(){super()}_uploadImages(t){var e=this.shadowRoot?.getElementById("pic_front"),i=e.files,o=this.shadowRoot?.querySelectorAll(".custom_file_input")[0],a=this.shadowRoot?.querySelectorAll(".mobile_next_btn")[0],n=o.nextElementSibling;"pic_front"==t.target.id&&null!=i[0]?(o.style.setProperty("--pseudo-upload-text",'i18Next.t("bcimg.button.reupload")'),o.classList.add("custom_file_input_afterUpload"),n.classList.remove("element_hide"),a.classList.remove("element_hide"),null!=i[0]&&this._imgUploadAPI(i)):"pic_front"==t.target.id&&null!=i[0]&&(o.classList.remove("custom_file_input_afterUpload"),o.style.setProperty("--pseudo-upload-text",'i18Next.t("bcimg.button.upload")'),n.classList.add("element_hide"),a[0].classList.add("element_hide"))}async _imgUploadAPI(t){const e=new FormData;e.append("image_file",t[0]);var i,o=this.shadowRoot?.querySelectorAll(".custom_file_input")[0],a=o.nextElementSibling,n=this.shadowRoot?.querySelectorAll(".mobile_next_btn")[0];this.paramName==ve?i="S":this.paramName==be&&(i="F"),(new Zs)._startWaveLoaderMob();let s=await(new mi).getImageUrlQRFlow(e,this.partnerId,i,this.qrCodeImageId);if((new Zs)._stopWaveLoaderMob(),s)if(s.error_msg)if(o.classList.remove("custom_file_input_afterUpload"),o.style.setProperty("--pseudo-upload-text",'"UPLOAD"'),a.classList.add("element_hide"),n.classList.add("element_hide"),s.error_msg==ci){const t={detail:{name:name,isTimeout:!0,isExpired:!1},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("imageUploadError",t))}else if(s.error_msg==pi){const t={detail:{name:name,isTimeout:!1,isExpired:!0},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("imageUploadError",t))}else{const t={detail:{name:name,isTimeout:!0,isExpired:!1},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("imageUploadError",t))}else s.qr_code_image_url_front&&(this.value=s.qr_code_image_url_front),o.innerHTML=this.imageUpload.bc_data.components[0].uplode_label[1],a.classList.remove("element_hide"),n.classList.remove("element_hide");else o.classList.remove("custom_file_input_afterUpload"),o.style.setProperty("--pseudo-upload-text",'"UPLOAD"'),a.classList.add("element_hide"),n.classList.add("element_hide")}_performValidation(t){t.preventDefault();const e="validate";if("1"==this.submitAction){const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateAndSubmit",t))}else{const t={detail:{name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validate",t))}}_goBack(t){t.preventDefault();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}_skipQuestion(t){t.preventDefault();if("1"==this.submitAction){if(this.value){const t={detail:{name:"validate"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateAndSubmit",t))}}else{var e=this.paramName;if(this.paramName==be){const i={detail:{_name:e},bubbles:!0,composed:!0};this.value?this._performValidation(t):this.dispatchEvent(new CustomEvent("skipCvQuestion",i))}else if(this.value){const t={detail:{_name:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("validateCvQuiz",t))}}}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){this.shadowRoot?.getElementById("front_image");var t=[];return t[0]=this.validate(),t}validate(){var t=[];return this.value?(t[0]=!0,t[1]=this.paramName,t[2]=this.value):t[0]=!1,t}_showReuploadButton(){var t=this.shadowRoot?.querySelectorAll(".custom_file_input")[0];this.shadowRoot?.querySelectorAll(".mobile_next_btn")[0],t.nextElementSibling}render(){return this.theme==ei?this.desktopImg=this.imageUpload.bc_data.components[0].light.cv_img_desktop:this.desktopImg=this.imageUpload.bc_data.components[0].dark.cv_img_desktop,this.theme==ei?this.tabImg=this.imageUpload.bc_data.components[0].light.cv_img_tab:this.tabImg=this.imageUpload.bc_data.components[0].dark.cv_img_tab,this.theme==ei?this.mobileImg=this.imageUpload.bc_data.components[0].light.cv_img_mob:this.mobileImg=this.imageUpload.bc_data.components[0].dark.cv_img_mob,R`
            <div class="back_next_btn">
                <a class="prev_back_arrow" @click=${t=>this._goBack(t)}></a>
                <a class="next_back_arrow" @click=${t=>this._skipQuestion(t)}></a>
            </div> 
            <div id="front_image" class="fade img_uppload_main">
                <div class="half_div">
                    <img class="left_side_img cv_Desktop_img" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.desktopImg}" />
                    <img class="left_side_img cv_tab_img" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.tabImg}" />
                    <img class="left_side_img cv_mob_img" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.mobileImg}" />
                </div>
            
                <div class="half_div">
                    <div class="right_side_content">
                    <h2>${this.imageUpload.bc_data.components[0].img_title}</h2>
                    <div class="cv_img_upload">
                        ${this.imageUpload.bc_data.components[0].inst_img.map(t=>R`
                                <div class="instruction_img">
                                    <div class="count_instruction_img">
                                        <h2>${t.inst_index}</h2>
                                    </div>
                                    <div class="text_instruction_img">
                                        <p>
                                        ${t.inst_txt}
                                        </p>
                                    </div>
                                </div>
                            `)}
                    </div>             
                    <input type="file" id="pic_front" name="pic_front" style="display: none"  accept="image/*,.heic"  @change=${this._uploadImages} required>
                    
                    <label id="front_button" for="pic_front" class="custom_file_input"></label>
                    <button class="next_img_btn element_hide" @click=${this._performValidation}>NEXT</button> 
                    </div>
                </div>
            </div>
            <div class="front_img_bottom_btn">
                <a class="prev"  href="javascript:void(0);" @click=${t=>this._goBack(t)}>❮</a>
                <a class="mobile_next_btn element_hide"  href="javascript:void(0);" @click=${t=>this._performValidation(t)}>NEXT</a>
            </div>
    `}firstUpdated(t){this._showReuploadButton()}updated(t){t.forEach((t,e)=>{"value"==e&&this._showReuploadButton()})}};fr.styles=[Xs],yr([Y({type:Object})],fr.prototype,"imageUpload",2),yr([Y({type:Object})],fr.prototype,"navigationData",2),yr([Y({type:String})],fr.prototype,"paramName",2),yr([Y({type:String})],fr.prototype,"nextNav",2),yr([Y({type:String})],fr.prototype,"prevNav",2),yr([Y({type:String})],fr.prototype,"submitAction",2),yr([Y({type:String})],fr.prototype,"value",2),yr([Y({type:String})],fr.prototype,"partnerId",2),yr([Y({type:String})],fr.prototype,"disabled",2),yr([Y({type:Boolean})],fr.prototype,"val",2),yr([Y({type:String})],fr.prototype,"theme",2),yr([Y({type:String})],fr.prototype,"desktopImg",2),yr([Y({type:String})],fr.prototype,"tabImg",2),yr([Y({type:String})],fr.prototype,"mobileImg",2),yr([Y({type:String})],fr.prototype,"qrCodeImageId",2),fr=yr([G("bc-image-upload-mob")],fr);const vr=et`
    .qrImage{
      width: 25%;
    }
    .cv_steps_title {
      color: var(--question-title-color);
      font-size: var(--question-title-fsize);
      font-family: var(--question-title-font);
      width: 60%;
      font-weight: 500;
      padding: 0;
      letter-spacing: 2px;
      font-weight: 400;
      margin-bottom: 5%;
    }
    
    .question_title p {
      margin: 0;
    }
   
    .question_title {
      width: 100%;
    }
    .cvlanding .question_title {
      width: 75%;
    }
    .question_title {
      color: black;
      color: var(--question-title-color);
      font-size: var(--question-title-fsize);
      font-family: var(--question-title-font);
      padding: 8px 12px;
      margin-bottom: 5%;
      width: 90%;
    }
    .qr_question_title{
      font-size: var(--question-qr-title-fsize) !important;
      font-family: var(--question-qr-title-font) !important;
      margin-bottom: 4% !important;
    }
    
    .cvlanding {
      display: flex;
      text-align: center;
      height: 85%;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .cvlanding .question_title {
      width: 75%;
    }

    .checkmark-container {
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 100px;
        // height: 100px;
    }
    
    /* .circle {
        width: 100px;
        height: 100px;
        border: 5px solid #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    } */
    
    .checkmark {
        width: 35%;
        background: var(--qr-checkmark-icon-background);
        border-radius: 50%;
    }
    
    .checkmark__circle {
        stroke: var(--qr-checkmark-icon-color);
        stroke-width: 3;
        stroke-miterlimit: 10;
    }
    
    .checkmark__check {
        stroke: var(--qr-checkmark-icon-color);
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: draw 2s forwards;
    }
    .bottom_info{
      margin-top: 5%;
    }
    .bottom_info a{
      color: var(--question-qr-hyperlinks-color);
      font-size: var(--question-qr-hyperlinks-fsize);
      font-family: var(--question-qr-hyperlinks-font);
      text-decoration: underline
    }
    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

  `;var br=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,wr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?_r(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&br(e,i,n),n};let xr=class extends ot{constructor(){super(),this.isCompleted=!1,this.timer=fe}_bcValidate(){this.shadowRoot?.getElementById("cvlanding");var t=[];return t[0]=this.validate(),t}validate(){var t=[];return""!=this.firstImageUrl&&""!=this.secoundImageUrl?(t[0]=!0,t[1]=this.firstImageUrl,t[2]=this.secoundImageUrl):t[0]=!1,t}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.val="test"}_setTimer(){let t=this.timer;this.timerInterval=setInterval(()=>{if(t--,t<0){this.stopTimer();const t="goBack";this.stopTimer(),this.stopApi=!0;{const e={detail:{name:t},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",e))}}},1e3)}stopTimer(){clearInterval(this.timerInterval)}async getStatusApi(){let t,e={partnerId:this.partnerId,qrcodeid:this.qrCodeImageId};(new Zs)._stopWaveLoader(),this.stopApi=!1;do{if(await this.delay(2e3),t=await this.getStatusScanned(e),t&&t.status&&t.status==me&&(new Zs)._startWaveLoader(),t.status==ge){this.isCompleted=!0,this.nextNav="",this.firstImageUrl=t.qr_code_image_url_front,this.secoundImageUrl=t.qr_code_image_url_side,this.stopTimer();break}if(t.status==ye){this.stopApi=!0,this.stopTimer(),this.returnBackSlide();break}if(this.stopApi)break}while(t.status!=ge||t.status!=ye);(new Zs)._stopWaveLoader()}returnBackSlide(){const t={detail:{name:name},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}async getStatusScanned(t){return await(new mi).getQrCodeStatus(t)}delay(t){return new Promise(e=>setTimeout(e,t))}_previousSlide(){this.stopApi=!0;this.stopTimer();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}_shoWImageupload(){this.stopApi=!0,this.stopTimer();const t={detail:{name:name},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("showSetBodyScanQuiz",t))}render(){return R`
      <div id="cvlanding" class="cvlanding fade">
        <div class="question_title qr_question_title">
          ${this.isCompleted?R` ${this.qrData.bc_data.components[0].qr_title_scanned.map(t=>R`<p>${t}</p>`)} `:R` ${this.qrData.bc_data.components[0].qr_title_qr.map(t=>R`<p>${t}</p>`)} 
          `}
        </div>
            ${this.isCompleted?R`
                <div class="checkmark-container">
                    <div class="circle">
                        <svg class="checkmark" viewBox="0 0 58 58">
                            <circle class="checkmark__circle" cx="29" cy="29" r="27" fill="none"/>
                            <path class="checkmark__check" fill="none" d="M14 27l10 10 16-16"/>
                        </svg>
                    </div>
                </div>
               
              `:R`
               <img class="qrImage" src="data:image/png;base64,${this.qrBase64}" />

               <div class="bottom_info">
                  <a href="javascript:void(0);" @click=${t=>this._shoWImageupload()} >${this.qrData.bc_data.components[0].bottom_info} </a>
               </div>

              `}           
      </div>
      
      <cc-navigation prevNav=${this.prevNav} nextNav=${this.nextNav} @backSlide=${this._previousSlide}  navigationValue=${JSON.stringify(this.navigationData)} submitAction=${this.submitAction}
      theme=${this.theme} ></cc-navigation>
       
    `}firstUpdated(t){this.getStatusApi(),this.nextNav="disabled",this._setTimer()}};xr.styles=[vr],wr([Y({type:Object})],xr.prototype,"qrData",2),wr([Y({type:Object})],xr.prototype,"navigationData",2),wr([Y({type:String})],xr.prototype,"nextNav",2),wr([Y({type:String})],xr.prototype,"prevNav",2),wr([Y({type:String})],xr.prototype,"submitAction",2),wr([Y({type:String})],xr.prototype,"val",2),wr([Y({type:String})],xr.prototype,"qrBase64",2),wr([Y({type:String})],xr.prototype,"partnerId",2),wr([Y({type:String})],xr.prototype,"qrCodeImageId",2),wr([Y({type:Boolean})],xr.prototype,"isCompleted",2),wr([Y({type:String})],xr.prototype,"firstImageUrl",2),wr([Y({type:String})],xr.prototype,"secoundImageUrl",2),wr([Y({type:String})],xr.prototype,"timer",2),wr([Y({type:Number})],xr.prototype,"timerInterval",2),wr([Y({type:Boolean})],xr.prototype,"stopApi",2),wr([Y({type:String})],xr.prototype,"theme",2),xr=wr([G("bc-qr-image")],xr);const Sr=et`
        /* main div */
        :host{
            text-align: -webkit-center;
        }
        .sport_section{
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                padding: 25px 0;
        }
        .input_section{
            display: flex;
            justify-content: space-evenly;
            width: 70%;
            margin-bottom: 10px;
            gap: 20px;
        }
        .sequence{
            display: inline-flex;
            align-items: center;
            gap: 10px;
            width: 55%;
            padding: 10px;
            border: var(--question-input-sport-border);
        }
        .sequence p{
            font-size: var(--question-checkbox-label-fsize);
            font-family: var(--question-checkbox-label-font);
            color: var(--question-checkbox-label-color);
            margin: 0px;
        }
 
        .input_div{
                align-self: center;
                border: var(--question-input-sport-border);
                display: flex;
                padding: 10px;
                width: 100%;
        }
        .textboxinput {
            font-size: var(--question-checkbox-label-fsize);
            font-family: var(--question-checkbox-label-font);
            color: var(--question-checkbox-label-color);
            border: none;
            background: var(--question-input-sport-background);
            width: 100%;
        }


        

        /* Custom box */
        .checkboxsection label {
            position: relative;
            padding-left: 28px;
            cursor: pointer;
            user-select: none;
            font-size: var(--question-checkbox-label-fsize);
            font-family: var(--question-checkbox-label-font);
            color: var(--question-checkbox-label-color);
        }
        .textboxinput{
            font-size: var(--question-checkbox-label-fsize);
            font-family: var(--question-checkbox-label-font);
            color: var(--question-checkbox-label-color);
            border: none;
            background: var(--question-input-sport-background);
        }
        /* on focus border */
        .textboxinput:focus {
            outline: none;
        }
        .textboxinput:disabled {
            border-bottom: var(--question-input-sport-dissable-border);
            background: var(--question-input-sport-background);
        }
        .checkboxsection label::before {
            content: "";
            position: absolute;
            left: 0;
            top: 1px;
            width: 18px;
            height: 18px;
            border: var(--question-checkbox-unchecked-border);
            background-color: var(--question-checkbox-unchecked-background);
            border-radius: 2px;
            box-sizing: border-box;
            transition: background-color 0.2s ease;
        }

        /* Fill black when checked */
        .checkboxsection input[type="checkbox"]:checked + label::before {
            background-color: var(--question-checkbox-checked-background);
        }
        .title_sports{
            width:100% !important;
        }

        .input_error_tag {
            visibility: hidden;
            color: var(--question-error-txt-color);
            font-family: var(--question-error-txt-font);
            font-size: var(--question-error-txt-fsize);
            margin-bottom: 5px;
            margin-top: -5px;
        }

         @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .input_section {
                width: 85%;
            }
            .sequence{
                width: 70%;
            }
        }

         @media screen and (max-width: 600px) {
            .check_box_group{
                margin-left: 10%;
            }
         }
        
    `;var zr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,qr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?kr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&zr(e,i,n),n};let Ir=class extends ot{constructor(){super()}_handleVisibility(t){t.detail.enable?this.nextNav="":this.nextNav="disabled",this.disabled=!1,this.val="test"}_bcValidate(){var t=[],e=[];let i=this.shadowRoot?.getElementById("inputtext0"),o=this.shadowRoot?.getElementById("inputtext1"),a=this.shadowRoot?.getElementById("sport_error0"),n=this.shadowRoot?.getElementById("sport_error1");var s;if(a.style.visibility="hidden",n.style.visibility="hidden",o.value&&(s=null==o.value.match(/^[A-Za-z\s\-.,\/_&"'()]{3,100}$/)),null==i.value.match(/^[A-Za-z\s\-.,\/_&"'()]{3,100}$/))a.style.visibility="visible";else{if(!s){a.style.visibility="hidden",n.style.visibility="hidden";let s={};this.multipleCheckBoxData.bc_data.components[0].input.enum,this.multipleCheckBoxData.bc_data.components[1].input.enum;const r=i.value,l=o.value;return s[this.multipleCheckBoxData.bc_data.param_name]={primary:r,secondary:""!=l?l:null},e[0]=!0,e[1]=this.multipleCheckBoxData.bc_data.param_name,e[2]=s.sport,t[0]=e,t}n.style.visibility="visible"}}_foundInput(t){t.target.id;let e=this.shadowRoot?.getElementById("inputtext0");""!=e.value?this.nextNav="":this.nextNav="disabled",t.target.value.length>t.target.max&&(t.target.value=t.target.value.slice(0,t.target.max))}_getInputVal(){const t=this.shadowRoot?.querySelectorAll('input[id^="inputtext"]');t?.forEach(t=>{if(t.value){const e=this.value.findIndex(t=>t.toLowerCase().startsWith("other"));-1!==e&&(this.value[e]=`Other: ${t.value}`)}})}_handleNextAction(){""==this.value?this.nextNav="disabled":this.nextNav=""}render(){return R`
            <c-title class="" title=${JSON.stringify(this.multipleCheckBoxData.bc_data)} className='margin_none title_sports'></c-title>
            <div class="sport_section">
                 ${this.multipleCheckBoxData.bc_data.components.map((t,e)=>R`
                        <div class="input_section">
                            <div class="sequence">
                                <img src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"}${"source/themes/monfrere-theme/"}${this.theme}${t.input.icon}">
                                <p>${t.input.label}</p>
                            </div>
                            <div class="input_div">
                                <input type="${t.input.type}"  onKeyPress="if(this.value.length==${t.input.maxlength})  return false;" max=${t.input.maxlength} data-maxlength="${t.input.maxlength}" 
                                placeholder="${t.input.place_holder}"  class="textboxinput" id="inputtext${e}" name="" value=""  @input=${this._foundInput}  >
                            </div>
                        </div>
                         <p id="sport_error${e}" class="input_error_tag">${t.input.error_msg}</p>
                    `)}
                
            </div>
            <cc-navigation submitAction=${this.submitAction} prevNav=${this.prevNav} theme=${this.theme}
            nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} skipNav=${this.skipNav}></cc-navigation>
        `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"value"==e&&this._handleNextAction()})}};Ir.styles=[Sr],qr([Y({type:Object})],Ir.prototype,"multipleCheckBoxData",2),qr([Y({type:String})],Ir.prototype,"val",2),qr([Y({type:String})],Ir.prototype,"nextNav",2),qr([Y({type:String})],Ir.prototype,"prevNav",2),qr([Y({type:String})],Ir.prototype,"value",2),qr([Y({type:Object})],Ir.prototype,"navigationData",2),qr([Y({type:String})],Ir.prototype,"submitAction",2),qr([Y({type:Object})],Ir.prototype,"minmaxData",2),qr([Y({type:Boolean})],Ir.prototype,"disabled",2),qr([Y({type:String})],Ir.prototype,"theme",2),qr([Y({type:String})],Ir.prototype,"skipNav",2),qr([Y({type:String})],Ir.prototype,"paramName",2),qr([Y({type:Object})],Ir.prototype,"sportListData",2),Ir=qr([G("bc-multiple-checkbox")],Ir);const $r=et`
        /* main div */
        :host{
            text-align: -webkit-center;
        }
        .main_section{
            margin-top: 0%;

        }
        .dropdown_section{
                margin-top: 4%;

        }
        .last_section{
            margin-top: 10%;
        }
        .dropdown_title{
            font-size: var(--question-fitpref-dropdown-fsize);
            color: var(--question-fitpref-dropdown-color);
            font-family: var(--question-fitpref-dropdown-font);
            margin: 0px 0px 10px 0px;
        }
         @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .dropdown_section{
                margin-top: 6%;

            }
            .last_section{
                margin-top: 14%;
            }
        }

         @media screen and (max-width: 600px) {
            
         }
        
    `;var Nr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Or=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Dr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Nr(e,i,n),n};let Er=class extends ot{constructor(){super()}_handleNextAction(){""==this.value?this.nextNav="disabled":this.nextNav=""}_handleVisibility(){let t=this.shadowRoot?.getElementById("dd_0"),e=this.shadowRoot?.getElementById("dd_1");var i=[];i[0]=t.validate(),i[1]=e.validate();i[0][0],i[1][0];1==i[0][0]&&1==i[1][0]?this.nextNav="":this.nextNav="disabled"}_bcValidate(){let t=this.shadowRoot?.getElementById("dd_0"),e=this.shadowRoot?.getElementById("dd_1");var i=[];return i[0]=t.validate(),i[1]=e.validate(),i}render(){var t=this.fitPrefData.bc_data.components;return R`
            <c-title class="" title=${JSON.stringify(this.fitPrefData.bc_data)} className='margin_none title_sports'></c-title>
            <div class="main_section">
                 ${this.fitPrefData.bc_data.components.map((e,i)=>R`
                    <div class="dropdown_section ${t.length-1==i?"last_section":""}">

                     <p id="dropdown_title_" class="dropdown_title">${this.fitPrefData.bc_data.quiz_label[i]}</p>
                        <c-dropdown class="mt2 m_t_b" id="dd_${i}"  className="fit_pref"
             @_enableNext=${this._handleVisibility} dropDownData=${JSON.stringify(e)} dropdownValue=${this.value} 
              selectedPostion= ${e.selected_dropdown_pos}  paramName=${JSON.stringify(e.param_name)}></c-dropdown>

                    </div>
                       
                         
                    `)}
                
            </div>
            <cc-navigation submitAction=${this.submitAction} prevNav=${this.prevNav} theme=${this.theme}
            nextNav=${this.nextNav}  navigationValue=${JSON.stringify(this.navigationData)} skipNav=${this.skipNav}></cc-navigation>
        `}firstUpdated(t){this._handleNextAction()}updated(t){t.forEach((t,e)=>{"value"==e&&this._handleNextAction()})}};Er.styles=[$r],Or([Y({type:Object})],Er.prototype,"fitPrefData",2),Or([Y({type:String})],Er.prototype,"val",2),Or([Y({type:String})],Er.prototype,"nextNav",2),Or([Y({type:String})],Er.prototype,"prevNav",2),Or([Y({type:String})],Er.prototype,"value",2),Or([Y({type:Object})],Er.prototype,"navigationData",2),Or([Y({type:String})],Er.prototype,"submitAction",2),Or([Y({type:Boolean})],Er.prototype,"disabled",2),Or([Y({type:String})],Er.prototype,"theme",2),Or([Y({type:String})],Er.prototype,"skipNav",2),Or([Y({type:String})],Er.prototype,"paramName",2),Er=Or([G("bc-fit-pref")],Er);const Pr=et`
        /* question main section */
        .slideshow_container {
            max-width: 100%;
            height: 94%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center; 
        }
        /* full height and weight */
        .full_height {
            max-width: 100%;
            height: 100% !important;
        }
        /* question class */
        .questionSlides {
            display: none;
                            /* display: block; */
            text-align: center;
            height: 85%;
            align-items: center;
            flex-direction: column;
            padding-top: 2%;
            width: 100%;
            margin-top: 4%;
        }
        /* cv question class */
        .cv_img_qusetion {
            height: 100%;
            padding-top: 0%;
        }
        /* height-weight question 
        .height_weight {
            padding-top: 2%;
            height: 90%;
        } */
        /* all bc-component for height and weight */
        .bc_tag {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        /* progrebar component width */
        .progress_tag {
            width: 100%;
        }

        @media screen and (max-width: 600px) {
            .slideshow_container {
                                /* max-width: 95%; */
                max-width: 100%;
                height: 90%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .height_weight {
                            /* padding-top: 5%; */
                /* height: unset; */
            }
        }

        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .slideshow_container {
                height: 95%;
            }

        }

        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .slideshow_container {
                max-width: 100%;
                height: 100%;
            }

            .height_weight {
                padding-top: 6%;
                height: 85%;
            }
        }

        .afterErorLayer {
            height: 100vh;
            width: 100%;
            background-color: var(--question-numbox-alert-side-background);
            z-index: 500;
            top: -95px;
            position: absolute;
            display: none;
        }
    `;var Cr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,jr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ar(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Cr(e,i,n),n};let Rr=class extends ot{constructor(){super(),this.quizAnswers="",this.isCookie=!0}async connectedCallback(){super.connectedCallback(),this.requestUpdate()}_showAlertLayer(t){let e=this.shadowRoot?.querySelectorAll(".afterErorLayer")[0];t.detail.showErrorLayer&&(e[0].style.display="flex")}async _validateCvQuiz(t){t.srcElement,""!=this.quizAnswers[be]&&this._handleChildValidation(t)}_validateCvQuizMobCv(t){t.srcElement,""!=this.quizAnswers[be]&&this._handleChildValidationMobCv(t)}_skipCvQuestion(t){var e=t.detail._name;this.quizAnswers?this.quizAnswers[e]="":this.quizAnswers=Object.assign({[e]:""},this.quizAnswers);const i=this.slideIndex+1;this._showSlides(i)}async _handleChildValidation(t){this.shadowRoot?.querySelectorAll(".afterErorLayer"),this.shadowRoot?.querySelectorAll(".slideshow_container");let e=t.srcElement;var i=await e._bcValidate();if(i)if(0==i[0][0]){const t={detail:{name:name,enable:!1}};e._handleVisibility(t),i[0][1]&&this._showInputAlert(i[0][1],i[0][2])}else if(i[0][1]==ve){if(""!=this.quizAnswers[be]){this._storeComponentData(i);const t=this.slideIndex+1;this._showSlides(t)}}else{this._storeComponentData(i);const t=this.slideIndex+1;this._showSlides(t)}}_handleChildValidationMobCv(t){this.shadowRoot?.querySelectorAll(".afterErorLayer"),this.shadowRoot?.querySelectorAll(".slideshow_container");var e=t.srcElement._bcValidate();if(e[0][1]==ve){if(""!=this.quizAnswers[be]){this._storeComponentData(e);const t=this.slideIndex+1;this._showSlides(t)}}else{this._storeComponentData(e);const t=this.slideIndex+1;this._showSlides(t)}}async _handleChildValidationQRcode(t){let e=t.srcElement;var i=e._bcValidate();if(0==i[0][0]){const t={detail:{name:name,enable:!1}};e._handleVisibility(t),i[0][1]&&this._showInputAlert(i[0][1],i[0][2])}else{var o=[];o[0]=[],o[0][0]=!0,o[0][1]=be,o[0][2]=i[0][1],await this._storeComponentData(o),o[0][0]=!0,o[0][1]=ve,o[0][2]=i[0][2],await this._storeComponentData(o);const t=this.slideIndex+1;this._showSlides(t)}}_showInputAlert(t,e){let i=document.querySelector("quidget-element")?.shadowRoot,o=i?.querySelector("question-template")?.shadowRoot,a=o?.querySelectorAll(".afterErorLayer")[0],n=o?.querySelectorAll(".slideshow_container")[0];var s=n.getBoundingClientRect().top,r=t.getBoundingClientRect();a.style.display="flex";let l=t.classList;null==e&&(e=""),this.minmaxData={},this.minmaxData=Object.assign({min:t.min},this.minmaxData),this.minmaxData=Object.assign({max:t.max},this.minmaxData),this.minmaxData=Object.assign({eleID:t.id},this.minmaxData),this.minmaxData=Object.assign({top:r.top-s},this.minmaxData),this.minmaxData=Object.assign({left:t.offsetLeft},this.minmaxData),l?t.classList.contains("invalid_Brand")?(this.minmaxData=Object.assign({classContains:"invalid_Brand"},this.minmaxData),this.minmaxData.left=this.minmaxData.left+70):t.classList.contains("invalid_Size")&&(this.minmaxData=Object.assign({classContains:"invalid_Size"},this.minmaxData),this.minmaxData.left=this.minmaxData.left+70):this.minmaxData=Object.assign({classContains:""},this.minmaxData),n.insertAdjacentHTML("afterend",'<c-input-alert id="inputAlert" class="input-alert"     minmaxData='+JSON.stringify(this.minmaxData)+" unitText="+e+"></c-input-alert>")}_handleWindowClicks(t){let e=this.shadowRoot?.querySelectorAll("#inputAlert");e&&e.forEach(t=>{t.remove()}),t.target.style.display="none"}_handleChildValidationAndSubmit(t){let e=t.srcElement;var i=e._bcValidate();if(i){if(0==i[0][0]){const t={detail:{name:name,enable:!1}};return e._handleVisibility(t),void this._showInputAlert(i[0][1],i[0][2])}this._storeComponentData(i),(new Zs)._startWaveLoader(),this.quizType==se?this._getFitQuizSize():this.quizType==re?this._getMeasurementQuizSize():this.quizType==le?this._getCvQuizSize():this.quizType==ce||this.quizType==pe?this._getCvFtQuizSize():this.quizType==ue&&this._getCvQuizSize()}}_handleChildValidationAndSubmitMobCv(t){let e=t.srcElement;if(""!=this.quizAnswers[be]){var i=e._bcValidate();this._storeComponentData(i);const t={detail:{isResult:!0}};this.dispatchEvent(new CustomEvent("_resultCVCodePgae",t))}}_previousSlide(){const t=this.slideIndex-1;this._showPreviousSlides(t)}_showSlides(t){let e=this.shadowRoot?.querySelectorAll(".questionSlides"),i=e[t];if(i.style.display="flex",0!=t){e[t-1].style.display="none"}this.slideIndex=t,this.shadowRoot?.querySelectorAll(".cv_img_qusetion");let o=this.shadowRoot?.querySelectorAll(".slideshow_container");var a;document.querySelector("quidget-element")?.shadowRoot&&(a=document.querySelector("quidget-element")?.shadowRoot),document.querySelector("quidget-element-mobile")?.shadowRoot&&(a=document.querySelector("quidget-element-mobile")?.shadowRoot);var n=a?.querySelectorAll(".quiz_container");if(i.classList.contains("height_weight")&&this._setScaleData(),i.classList.contains("cv_img_qusetion")){i.style.marginTop="0%",o[0].classList.add("full_height"),n[0].classList.add("full_height")}else{o[0].classList.remove("full_height"),n[0].classList.remove("full_height")}this.prevNav=""}_setScaleData(){const t=this.shadowRoot?.getElementById("height_weight_bc");t&&t._setScaleDefault()}_showPreviousSlides(t){if(t>=0){let a=this.shadowRoot?.querySelectorAll(".questionSlides"),n=a[t];n.style.display="flex",a[t+1].style.display="none",this.slideIndex=t;var e,i=this.shadowRoot?.querySelectorAll(".slideshow_container")[0];document.querySelector("quidget-element")?.shadowRoot&&(e=document.querySelector("quidget-element")?.shadowRoot),document.querySelector("quidget-element-mobile")?.shadowRoot&&(e=document.querySelector("quidget-element-mobile")?.shadowRoot);var o=e?.querySelectorAll(".quiz_container")[0];n.classList.contains("height_weight")&&this._setScaleData(),n.classList.contains("cv_img_qusetion")?(n.style.marginTop="0%",i.classList.add("full_height"),o.classList.add("full_height")):(i.classList.remove("full_height"),o.classList.remove("full_height")),0==t||(this.prevNav="")}else{const t={detail:{optionpg:!0}};this.dispatchEvent(new CustomEvent("optionSlide",t))}}_isLastQuestion(t,e){return e<t-1?0:1}_storeComponentData(t){for(var e=0;e<t.length;e++){if(t[e][1])var i=t[e][1].replaceAll('"',"");null==this.quizAnswers[i]?this.quizAnswers=Object.assign({[i]:t[e][2]},this.quizAnswers):this.quizAnswers[i]=t[e][2]}}_firstQueShow(){let t=this.shadowRoot?.querySelectorAll(".questionSlides");if(0!=t.length){this.slideIndex=0,t.forEach((t,e)=>{t.style.display="none"}),t[0].style.display="flex"}}_loadComponentData(t){var e="";return this.quizAnswersFromCookies&&(e=this.quizAnswersFromCookies[t]),String(e)}_validateAndSubmit(t){this._handleChildValidationAndSubmit(t)}_validateAndSubmitMobCv(t){this._handleChildValidationAndSubmitMobCv(t)}_measurementQuizSkip(){this.category==Ke?null==this.quizAnswers.bust||""!=this.quizAnswers.bust?this.quizAnswers=Object.assign({bust:"0"},this.quizAnswers):this.quizAnswers.bust="0":null==this.quizAnswers.chest||""!=this.quizAnswers.chest?this.quizAnswers=Object.assign({chest:"0"},this.quizAnswers):this.quizAnswers.chest="0",null==this.quizAnswers.bicep||""!=this.quizAnswers.bicep?this.quizAnswers=Object.assign({bicep:"0"},this.quizAnswers):this.quizAnswers.bicep="0",null==this.quizAnswers.waist||""!=this.quizAnswers.waist?this.quizAnswers=Object.assign({waist:"0"},this.quizAnswers):this.quizAnswers.waist="0",null==this.quizAnswers.hip||""!=this.quizAnswers.hip?this.quizAnswers=Object.assign({hip:"0"},this.quizAnswers):this.quizAnswers.hip="0"}async _getFitQuizSize(){this._measurementQuizSkip(),this.fitQuizAnswers=this.quizAnswers;let t,e=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin);t=Object.assign({input_data:this.fitQuizAnswers}),t=Object.assign({quiz_type:this.quizType},t),t=Object.assign({category:this.category},t),t=Object.assign({product_stub_id:this.productHandle},t),e&&(t=Object.assign({customer_id:e},t),t=Object.assign({partner_id:this.partnerId},t)),"null"!=this.quizSelectedInputId&&(t=Object.assign({quiz_input_id:this.quizSelectedInputId},t));let i=this.partnerId;t=JSON.stringify(t),this._commonApiQuizSubmit(t,i,this.quizType)}async _commonApiQuizSubmit(t,e,i){let o=await(new mi).wrapFunctionForgetQuizSizeV2(t,e);if((new vi).getDataByName(this.category,this.cookieNameJson.loggedin),o)if(this.dataCollection==ni)if((new Zs)._stopWaveLoader(),o.quiz_input_id){const t={detail:{isResult:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_resultPgae",t))}else this._processingError();else{if(o.status==he){const t={detail:{error:!0}};(new Zs)._stopWaveLoader(),this.dispatchEvent(new CustomEvent("_errorpage",t))}if(o.detail){if(o.detail==xe){const t={detail:{error:!0}};(new Zs)._stopWaveLoader(),this.dispatchEvent(new CustomEvent("_errorpage",t))}(new Zs)._stopWaveLoader(),this._processingError()}else o.error?this._processingError():this._getStatusQuizSubmit(o,i)}else(new Zs)._stopWaveLoader(),this.dataCollection,this._processingError()}async _getStatusQuizSubmit(t,e){let i,o=t.quiz_input_id;do{if(await this.delay(2e3),i=await(new mi).getQuizSubmitStatus(o),!i){(new Zs)._stopWaveLoader(),this._processingError();break}if(i.detail){(new Zs)._stopWaveLoader(),this._processingError();break}if(i.error){(new Zs)._stopWaveLoader(),this._processingError();break}i.status==oe&&this._responseData(i,e),i.status==ae&&((new Zs)._stopWaveLoader(),this._processingError())}while(i.status==ne)}delay(t){return new Promise(e=>setTimeout(e,t))}async _getMeasurementQuizSize(){let t,e=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin);this._measurementQuizSkip(),this.measurementQuizAnswers=this.quizAnswers,t=Object.assign({input_data:this.measurementQuizAnswers}),t=Object.assign({category:this.category},t),t=Object.assign({quiz_type:this.quizType},t),t=Object.assign({product_stub_id:this.productHandle},t),e&&(t=Object.assign({customer_id:e},t),t=Object.assign({partner_id:this.partnerId},t)),"null"!=this.quizSelectedInputId&&(t=Object.assign({quiz_input_id:this.quizSelectedInputId},t));let i=this.partnerId;t=JSON.stringify(t),this._commonApiQuizSubmit(t,i,this.quizType)}async _getCvQuizSize(){let t,e=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin);this.cvQuizAnswers=this.quizAnswers,t=Object.assign({input_data:this.cvQuizAnswers}),t=Object.assign({quiz_type:this.quizType},t),t=Object.assign({category:this.category},t),t=Object.assign({product_stub_id:this.productHandle},t),e&&(t=Object.assign({customer_id:e},t),t=Object.assign({partner_id:this.partnerId},t)),"null"!=this.quizSelectedInputId&&(t=Object.assign({quiz_input_id:this.quizSelectedInputId},t));let i=this.partnerId;t=JSON.stringify(t),new FormData,this._commonApiQuizSubmit(t,i,this.quizType),(new Zs)._setTextToaveLoader("Calculating body \n measurements..."),await this.delay(1e3),(new Zs)._setTextToaveLoader("Determining your \n best-fitting size..."),await this.delay(1e3),(new Zs)._setTextToaveLoader("Almost there...")}async _getCvFtQuizSize(){this._measurementQuizSkip();let t,e=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin);this.cvQuizAnswers=this.quizAnswers,this.cvQuizAnswers=Object.assign({ethnicity:""},this.cvQuizAnswers),t=Object.assign({input_data:this.cvQuizAnswers}),t=Object.assign({quiz_type:this.quizType},t),t=Object.assign({category:this.category},t),t=Object.assign({product_stub_id:this.productHandle},t),e&&(t=Object.assign({customer_id:e},t),t=Object.assign({partner_id:this.partnerId},t)),"null"!=this.quizSelectedInputId&&(t=Object.assign({quiz_input_id:this.quizSelectedInputId},t));let i=this.partnerId;t=JSON.stringify(t),this._commonApiQuizSubmit(t,i,this.quizType)}_responseData(t,e){this.quizAnswers="";let i=(new vi).getDataByName(this.category,this.cookieNameJson.product_code),o=t.output_data[i];if(this.fitSize=o,(new vi).getDataByName(this.category,this.cookieNameJson.loggedin)||this.dataCollection!=ni&&((new vi).setData(this.category,e,t.quiz_input_id),(new vi).setData(this.category,this.cookieNameJson.quiz_input_id,t.quiz_input_id)),o){const t={detail:{isResult:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_resultPgae",t))}else this._processingError();return null==o&&this._processingError(),(new Zs)._stopWaveLoader(),t}_showSizeNotFoundPage(){this.dispatchEvent(new CustomEvent("_openSizeNotPage",{detail:{isOpenSizenotFound:!0}}))}_processingError(){(new Zs)._stopWaveLoader();this.dispatchEvent(new CustomEvent("_openSizeNotPage",{detail:{isOpenProcessingError:!0}}))}_showSetBodyScanQuiz(){const t={detail:{name:name,quiz_type:this.quizType,displayQuizType:this.displayQuizType},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("showSetBodyScanQuiz",t))}render(){this.questions=this.quizData.q_template.questions;const t=this.quizData.q_template.nav;return R`
            <div id="slideshow_container" class="slideshow_container"> 
                ${this.questions.map((e,i)=>R`    
                    ${"bc_shape"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-shape  class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav} 
                                    @validate=${this._handleChildValidation} index=${i} shapeData=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} theme=${this.theme}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}
                                    ></bc-shape>    
                            </div> 
                    `:"bc_age"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-age  class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} agedata=${JSON.stringify(this.questions[i].qt_data)}
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} 
                                    @_showAlertLayer=${this._showAlertLayer}  theme=${this.theme}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-age>
                            </div> 
                    `:"bc_height_weight"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides height_weight"> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-height-weight id="height_weight_bc" class="bc_tag"   heightValue=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} scaleValue=${this._loadComponentData(e.qt_data.bc_data.components[1].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} heightWeightData=${JSON.stringify(this.questions[i].qt_data)}
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} 
                                    @_showAlertLayer=${this._showAlertLayer} category=${this.category}  theme=${this.theme}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-height-weight>
                            </div> 
                    `:"bc_group_btn"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-multiple-button-group class="bc_tag"  bandValue=${this._loadComponentData(e.qt_data.bc_data.components[0].group_btns[0].param_name)} 
                                cupValue=${this._loadComponentData(e.qt_data.bc_data.components[0].group_btns[1].param_name)}  theme=${this.theme}
                                prevNav=${this.prevNav} nextNav=${this.nextNav}  braBandCupSizeList=${JSON.stringify(this.braBandCupSizeList)}
                                    @validate=${this._handleChildValidation} buttonGroupObject=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} braBandBandSizeList=${JSON.stringify(this.braBandBandSizeList)} braSizesList=${this.braSizesList}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-multiple-button-group>
                            </div> 
                    `:"bc_dependDropdown"==e.qt_data.bc_data.bc_name?null!=this.pantBrandSizeList?R`
                                <div  class="questionSlides "> 
                                    <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                    <bc-dropdown class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} value1=${this._loadComponentData(e.qt_data.bc_data.components[0].c_searchable_dropdown.param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                        @validate=${this._handleChildValidation} dependentData=${JSON.stringify(this.questions[i].qt_data)}   theme=${this.theme}
                                        @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} pantBrandSizeList=${JSON.stringify(this.pantBrandSizeList[e.qt_data.bc_data.components[0].param_name])}
                                        @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-dropdown>
                                </div> 
                            
                        `:"":"bc_ethnicity"==e.qt_data.bc_data.bc_name?R`
                        ${null!=this.ethnicityDropdownData?R`
                                <div  class="questionSlides "> 
                                    <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                    <bc-ethnicity class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                        @validate=${this._handleChildValidation} dropdownData=${JSON.stringify(this.questions[i].qt_data)} ethnicityDropdownData=${JSON.stringify(this.ethnicityDropdownData)}
                                        @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)}   theme=${this.theme}
                                        @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-ethnicity>
                                </div> 
                            `:R`
                                <div  class="questionSlides "> 
                                    <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                    <bc-ethnicity class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                        @validate=${this._handleChildValidation} dropdownData=${JSON.stringify(this.questions[i].qt_data)} 
                                        @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)}   theme=${this.theme}
                                        @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-ethnicity>
                                </div> 
                            `}
                            
                    `:"bc_guided_choice"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-guided-choice class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} guidedData=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)}  theme=${this.theme}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-guided-choice>
                            </div> 
                    `:"bc_measurement"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-measurement class="bc_tag" measurementValue=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} measurementData=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} theme=${this.theme}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-measurement>
                            </div> 
                            
                    `:"bc_cv_instruction"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-cv-steps class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.bc_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} cvSteps=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} theme=${this.theme}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-cv-steps>
                            </div> 
                    `:"bc_cv_img"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides cv_img_qusetion"> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-image-upload  class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} imageUpload=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} 
                                    @validateAndSubmit=${this._validateAndSubmit} 
                                    submitAction=${this._isLastQuestion(this.questions.length,i)}
                                    paramName=${e.qt_data.bc_data.param_name} 
                                    @skipCvQuestion = ${this._skipCvQuestion}
                                    @validateCvQuiz=${this._validateCvQuiz}  theme=${this.theme}
                                    partnerId=${this.partnerId}></bc-image-upload>
                            </div>              
                    `:"bc_cv_img_mob"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides cv_img_qusetion"> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-image-upload-mob  class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidationMobCv} imageUpload=${JSON.stringify(this.questions[i].qt_data)} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} 
                                    @validateAndSubmit=${this._validateAndSubmitMobCv} 
                                    submitAction=${this._isLastQuestion(this.questions.length,i)}
                                    paramName=${e.qt_data.bc_data.param_name} 
                                    @skipCvQuestion = ${this._skipCvQuestion}  qrCodeImageId=${this.qrCodeImageId}
                                    @validateCvQuiz=${this._validateCvQuizMobCv}  theme=${this.theme}
                                    partnerId=${this.partnerId}></bc-image-upload-mob>
                            </div>              
                    `:"bc_qr_image"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-qr-image class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.bc_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidationQRcode} qrData=${JSON.stringify(this.questions[i].qt_data)} qrBase64=${this.qrBase64} 
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} qrCodeImageId=${this.qrCodeImageId} partnerId=${this.partnerId}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}  theme=${this.theme}
                                    @showSetBodyScanQuiz=${this._showSetBodyScanQuiz}></bc-qr-image>
                            </div> 
                    `:"bc_information_details"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-informatio-detils  class="bc_tag" firstNmvalue=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)}
                                    lastNmValue=${this._loadComponentData(e.qt_data.bc_data.components[1].param_name)} 
                                    schoolNmValue=${this._loadComponentData(e.qt_data.bc_data.components[2].param_name)}
                                    zipCodeValue=${this._loadComponentData(e.qt_data.bc_data.components[3].param_name)}
                                    prevNav=${this.prevNav} nextNav=${this.nextNav}.  partnerId=${this.partnerId}
                                    @validate=${this._handleChildValidation} organizationDeatilsdata=${JSON.stringify(this.questions[i].qt_data)}
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} 
                                    @_showAlertLayer=${this._showAlertLayer}
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-informatio-detils>
                            </div> 
                    `:"bc-multiple-checkbox"==e.qt_data.bc_data.bc_name?R`
                            <div  class="questionSlides "> 
                                <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                <bc-multiple-checkbox class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} 
                                    prevNav=${this.prevNav} nextNav=${this.nextNav}
                                    @validate=${this._handleChildValidation} multipleCheckBoxData=${JSON.stringify(this.questions[i].qt_data)}
                                    @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)} theme=${this.theme}
                                    @_showAlertLayer=${this._showAlertLayer}  
                                    @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-multiple-checkbox>
                            </div> 
                    `:"bc_fit_pref"==e.qt_data.bc_data.bc_name?R`
                                <div  class="questionSlides "> 
                                    <c-progressbar  class="progress_tag" progressData =${JSON.stringify(this.questions[i].qt_data.pbar)} ></c-progressbar>
                                    <bc-fit-pref class="bc_tag" value=${this._loadComponentData(e.qt_data.bc_data.components[0].param_name)} prevNav=${this.prevNav} nextNav=${this.nextNav}
                                        @validate=${this._handleChildValidation} fitPrefData=${JSON.stringify(this.questions[i].qt_data)}
                                        @backSlide=${this._previousSlide} navigationData=${JSON.stringify(t)}   theme=${this.theme}
                                        @validateAndSubmit=${this._validateAndSubmit} submitAction=${this._isLastQuestion(this.questions.length,i)}></bc-fit-pref>
                                </div> 
                            `:""}
                `)}          
                <div class="afterErorLayer" @click=${this._handleWindowClicks}></div>
            </div>
        `}firstUpdated(t){document.querySelectorAll(".slideshow_container");this.slideIndex=0,this._showSlides(this.slideIndex),this._firstQueShow()}updated(t){t.forEach((t,e)=>{"quizType"==e&&(this.slideIndex=0,this._showSlides(this.slideIndex),this._firstQueShow())}),t.forEach((t,e)=>{"displayQuizType"==e&&(this.slideIndex=0,this._showSlides(this.slideIndex))})}};Rr.styles=[Pr],jr([Y({type:Object})],Rr.prototype,"quizData",2),jr([Y({type:String})],Rr.prototype,"nextNav",2),jr([Y({type:String})],Rr.prototype,"prevNav",2),jr([Y({type:Object})],Rr.prototype,"fitQuizAnswers",2),jr([Y({type:String})],Rr.prototype,"quizAnswers",2),jr([Y({type:Object})],Rr.prototype,"fitQuizAnswersForCookies",2),jr([Y({type:Object})],Rr.prototype,"measurementQuizAnswers",2),jr([Y({type:String})],Rr.prototype,"partnerId",2),jr([Y({type:String})],Rr.prototype,"category",2),jr([Y({type:String})],Rr.prototype,"productHandle",2),jr([Y({type:String})],Rr.prototype,"quizType",2),jr([Y({type:Object})],Rr.prototype,"minmaxData",2),jr([Y({type:String})],Rr.prototype,"isFirstQuestion",2),jr([Y({type:String})],Rr.prototype,"showFirstQuestion",2),jr([Y({type:Object})],Rr.prototype,"quizAnswersFromCookies",2),jr([Y({type:String})],Rr.prototype,"cookieAnsType",2),jr([Y({type:Boolean})],Rr.prototype,"isCookie",2),jr([Y({type:Object})],Rr.prototype,"questions",2),jr([Y({type:String})],Rr.prototype,"slideIndex",2),jr([Y({type:Object})],Rr.prototype,"cvQuizAnswers",2),jr([Y({type:String})],Rr.prototype,"fitSize",2),jr([Y({type:Object})],Rr.prototype,"cookieNameJson",2),jr([Y({type:String})],Rr.prototype,"theme",2),jr([Y({type:Object})],Rr.prototype,"pantBrandSizeList",2),jr([Y({type:Object})],Rr.prototype,"braBandCupSizeList",2),jr([Y({type:Object})],Rr.prototype,"braBandBandSizeList",2),jr([Y({type:Object})],Rr.prototype,"braSizesList",2),jr([Y({type:String})],Rr.prototype,"quizSelectedInputId",2),jr([Y({type:String})],Rr.prototype,"dataCollection",2),jr([Y({type:Object})],Rr.prototype,"ethnicityDropdownData",2),jr([Y({type:String})],Rr.prototype,"qrBase64",2),jr([Y({type:String})],Rr.prototype,"qrCodeImageId",2),jr([Y({type:String})],Rr.prototype,"displayQuizType",2),jr([Y({type:String})],Rr.prototype,"sportListData",2),Rr=jr([G("question-template")],Rr);const Lr=et`
      /* sign in page main div */
      .login_page {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        height: inherit;
        align-items: center;
        z-index: 400;
        position: absolute;
        width: 100%;
        background-color: var(--template-background);
        top: 0;
        height: 100%;
        background: var(--template-background);
      }
      /* login section div */
      .login_section {
        width: 60%;
        text-align: left;
        margin-top: 24px;
        /* margin-bottom: 33px */
      }
      .login_section p {
        font-size: var(--template-error-txt-fsize);
        margin-bottom: 10px;
        font-family: var(--template-error-txt-font);
      }
      .login_section input:last-child {
        font-size: var(--template-input-box-fsize);
        margin-bottom: 20px;
        padding: 5px;
      }
      .login_text {
        width: -webkit-fill-available;
        height: 35px;
        border: var(--template-input-box-border);
        border-radius: 0px;
        font-size: var(--template-input-box-fsize);
        padding: 5px;
        background: var(--template-input-box-background);
        color: var(--template-input-box-color);
      }
      .login_text_password {
        width: -webkit-fill-available;
        height: 35px;
        font-size: var(--template-input-box-fsize);
        border-radius: 0px;
        padding: 5px;
        background: var(--template-input-box-background);
        border: none !important;
      }

      .login_text:focus {
        outline: none;
      }
      /* sign in btn */
      .sign_in_button {
        margin-top: 5%;
        margin-bottom: 5%;
        /* padding: 10px 20px; */
        background: var(--template-btn-enable-background);
        color: var(--template-btn-color);
        border: var(--template-btn-enable-border);
        width: 186px;
        height: 40px;
        font-size: var(--template-btn-fsize);
        font-family: var(--template-btn-font);
        cursor: pointer;
      }
      .dissable {
        background-color: var(--template-btn-dissable-background) !important;
        border: var(--template-btn-dissable-border) !important;
        pointer-events: none !important;
        cursor: none;
      }
      /* error messages */
      .login_error_msg {
        visibility: hidden;
        color: var(--template-error-txt-color);
        font-family: var(--template-error-txt-font);
        font-size: var(--template-error-txt-fsize);
        margin-bottom: 5px;
        margin-top: 5px;
      }
      /* SignUp*/
      .signInSection {
        display: block;
        margin: 0px;
        color: var(--template-before-hyperlink-color);
        font-family: var(--template-before-hyperlink-font);
        font-size: var(--template-before-hyperlink-fsize);
      }
      /* back to sign in btn  */
      .signIn {
        cursor: pointer;
        text-decoration: underline;
        margin-left: 3px;
        font-family: var(--template-hyperlink-font);
        font-size: var(--template-hyperlink-fsize);
        color: var(--template-hyperlink-color);
      }
      /* forgot pass btn */
      .forgotPass {
        font-family: var(--template-hyperlink-font);
        font-size: var(--template-hyperlink-fsize);
        color: var(--template-hyperlink-color);
        margin: 0;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 2%;
      }
      /* footer section  */
      .main_result_footer {
        /* display: flex;
                    align-content: center;
                    align-items: center; */
        position: absolute;
        width: 70%;
        /* justify-content: space-between; */
        /* background-color:white; */
        bottom: 5%;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 400;
      }
      .result_prev {
        text-align: center;
        width: 37px;
        height: 37px;
        border-radius: 50%;
        font-size: var(--template-iconbtn-fsize);
        color: var(--template-iconbtn-color);
        border: var(--template-iconbtn-border);
        background : var(--template-iconbtn-background);
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        transition: 0.6s ease;
        user-select: none;
        text-decoration: none;
        cursor: pointer;
        bottom: 0;
        float: left;
      }
      /* email validation */
      .email_valid {
        display: flex;
        align-items: center;
        color: var(--template-error-txt-color);
        font-family: var(--template-error-txt-font);
        font-size: var(--template-error-txt-fsize);
      }
      .email_valid p {
        color: var(--template-error-txt-color);
        font-family: var(--template-error-txt-font);
        font-size: var(--template-error-txt-fsize);
        margin: 5px 0px;;
      }
      .email_valid img {
        width: 10px !important;
        height: 16px !important;
        margin-right: 5px;
      }
      .hidden {
        /* display: none; */
        visibility: hidden;
      }
      /* page title */
      .signInTitle {
        font-size: var(--template-title-fsize);
        margin: 5px 0px;
        font-family: var(--template-title-font);
        color: var(--template-title-color);
      }
      /* password show and hide btn */
      .eyeButton {
        display: flex;
        border: var(--template-input-box-border);
        background: var(--template-input-box-background);
        /* margin-bottom: 8%; */
      }
      .eyeIcon {
        align-self: center;
        display: flex;
        padding: 0 12px;
        width: 20px;
        height: 20px;
      }
      @media screen and (max-width: 600px) {
        .main_result_footer {
          width: 80%;
        }
      }
  `,Tr=et`
        
        /* footer section */
        .main_result_footer {
            position: absolute;
            width: fit-content;
            margin: auto;
            z-index: 400;
        }
        .cc_button_icon_without_border{
            bottom: 6%;
            left: 15%;
        }
        .cc_button_text_circle{
            bottom: 5%;
            left: 15%;
        }
        .prev_back_arrow_with_circle {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }

        /* prev btn section */
        .prev_back_arrow_only_icon {
            width: 12px;
            height: 12px;
            border: 2px solid;
            border-color: var(--cvimg-uploadimg-prev-back-arrow) transparent transparent var(--cvimg-uploadimg-prev-back-arrow);
            transform: rotate(-45deg);
            margin-left: 10px;
            margin-top: 10px;
            cursor: pointer;
            display: flex;
            float: left;
        }
        
        .back_icon{
            display: block;
            width: 20px;
            height: 20px;
            margin-top: 10px;
            cursor: pointer;
            display: flex;
            float: left;
        }
        .back_icon img{
            width: 100%;
        }
        
        
        @media screen and (max-width: 600px) {
            
            .main_result_footer {
            width: 80%;
            }
            .cc_button_icon_without_border{
                left: 1%;
                right: 0;
            }
            .cc_button_text_circle{
                left: 0;
                right: 0;
            }
                
            
        }
        
        @media only screen and (min-width: 768px) {
            
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
            }
            .cc_button_icon_without_border{
               bottom: 6%;
            }
            .cc_button_text_circle{
                bottom: 4%;
            }
            
        }
       
  
    `;var Br=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,Jr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Vr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Br(e,i,n),n};let Fr=class extends ot{constructor(){super()}_goBack(t){t.preventDefault();{const t={detail:{name:"goBack"},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("backSlide",t))}}render(){return R`
        <div class="main_result_footer ${this.navigationIcon.type}">  
        ${"cc_button_icon_without_border"==this.navigationIcon.type?R`
            ${""==this.navigationIcon.icon_url?R`
            <a href="javascript:void(0);" class="prev_back_arrow_only_icon"  @click=${t=>this._backTo()} ></a>
            `:R`
            <a class="back_icon"  href="javascript:void(0);"  @click=${t=>this._backTo()} ><img class="" src="${"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.theme+"/"+this.navigationIcon.icon_url}" /></a> 
            `}
           
            `:R`
             <a href="javascript:void(0);" class="prev_back_arrow_with_circle"  @click=${t=>this._backTo()} >❮</a>
             `}
        `}_backTo(){this.dispatchEvent(new CustomEvent("backClick",{detail:{isback:!0}}))}};Fr.styles=[Tr],Jr([Y({type:Object})],Fr.prototype,"navigationIcon",2),Jr([Y({type:String})],Fr.prototype,"prevNav",2),Jr([Y({type:String})],Fr.prototype,"theme",2),Fr=Jr([G("c-temp-back-button")],Fr);var Ur=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Hr=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Mr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ur(e,i,n),n};let Wr=class extends ot{constructor(){super()}_togglePasswordAndImage(){const t=this.shadowRoot?.getElementById("password"),e=this.shadowRoot?.getElementById("eyeImage");"password"===t.type?(t.type="text",e.src=this.passwordShowImg):(t.type="password",e.src=this.passwordHideImg)}_foundInput(t){let e=t.target.id,i=this.shadowRoot?.getElementById("username"),o=this.shadowRoot?.getElementById("password");if("username"==e?this.emailId=i.value:o.checkValidity()?this.password=o.value:this.password="",this.shadowRoot?.querySelector(".sign_in_button"),this.emailId&&this.password){const t=this.shadowRoot?.querySelectorAll(".sign_in_button")[0];t.classList.remove("dissable")}else{const t=this.shadowRoot?.querySelectorAll(".sign_in_button")[0];t.classList.add("dissable")}}_forgotPassword(){this.dispatchEvent(new CustomEvent("_openForgot",{detail:{openforgotPage:!0}}))}containsEmoji(t){return/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}(?:\p{Emoji_Modifier})?|\p{Emoji}\u200D\p{Emoji_Modifier_Base}(?:\p{Emoji_Modifier})?)/gu.test(t)}async _loginUser(){let t=this.shadowRoot?.getElementById("login_error_msg"),e=this.shadowRoot?.querySelectorAll(".email_valid"),i=this.shadowRoot?.querySelectorAll(".emailError");new URL(location.href).pathname.split("/").pop();let o=this.shadowRoot?.getElementById("username"),a=this.shadowRoot?.getElementById("password");e[0].classList.add("hidden");if(!o.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{4,}.[a-zA-Z]{2,}$/))return t.style.visibility="visible",void(t.innerHTML=jo.t("sigin.error.email"));if(this.containsEmoji(a.value.trim())){e[0].classList.remove("hidden");i[0].innerHTML=jo.t("common.error.password.invalid")}else{t.style.visibility="hidden",(new Zs)._startWaveLoader();var n={email:o.value.trim(),password:a.value.trim(),partner_id:this.partnerId,product_stub_id:this.productHandle};let s=JSON.stringify(n);this.emailId=o.value;let r=await(new mi).wrapFunctionLoginUser(s);if(null!=r)if(r.error_msg)if((new Zs)._stopWaveLoader(),"User verification is pending."==r.error_msg){i[0].classList.add("hidden");const t={detail:{openVerify:!0,email:this.emailId,pageName:"signIn",responsedata:r,password:a.value.trim()}};this.dispatchEvent(new CustomEvent("_openVerifyPage",t))}else{e[0].classList.remove("hidden");i[0].innerHTML=r.error_msg}else(new vi).setData(this.category,this.cookieNameJson.qrs_id,r.sizes.quiz_input_id),(new vi).setDataWithoutCategory(this.category,this.cookieNameJson.login_time,r.login_time),this._afterSuccessfulLogin(r);else(new Zs)._stopWaveLoader()}}_afterSuccessfulLogin(t){document.body.style.overflow="auto",(new vi).setData(this.category,this.cookieNameJson.loggedin,t.authentication_result.customer_id);let e=(new vi).getDataByName(this.category,this.cookieNameJson.product_code),i=t.sizes[e];this.shadowRoot.querySelectorAll(".login_page")[0].style.display="none",(new Zs)._stopWaveLoader();const o={detail:{value:!0,size:i}};this.dispatchEvent(new CustomEvent("_closepopUp",o))}_backTo(){this.dispatchEvent(new CustomEvent("optionSlide",{detail:{optionpg:!0}}))}render(){var t=this.dynamicSourceVar;return"dark"==this.theme?this.passwordHideImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_HIDE_DARK:this.passwordHideImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_HIDE_LIGHT,"dark"==this.theme?this.passwordShowImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_SHOW_DARK:this.passwordShowImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_SHOW_LIGHT,R`
            <div class="login_page">
                <p class="signInTitle">${this.signIn.title}</p> 
                <div class="login_section">
                    <input id="username" name="username" class="login_text" type="email"
                    placeholder="${this.signIn.input.param1_label}" 
                    @input=${this._foundInput}
                    onKeyPress="if(this.value.length==${this.signIn.input.param1_maxlenght})  return false;" required>
                    <p id="login_error_msg" class="login_error_msg">a</p>
                    <div class="eyeButton" >
                        <input id="password" name="password" value="" class="login_text login_text_password" type="password" minlength="8"
                        placeholder="${this.signIn.input.param2_label}" 
                        @input=${this._foundInput}
                        oninput="javascript: if (this.value.length >${this.signIn.input.param2_maxlenght}) this.value = this.value.slice(0, ${this.signIn.input.param2_maxlenght});">
                        <span class="eyeIcon" @click=${this._togglePasswordAndImage}><img id="eyeImage" src= ${this.passwordHideImg} /></span>
                    </div>
                    <div class="email_valid hidden">
                        <p class="emailError">a</p>
                    </div>
                </div>
                <p class="forgotPass"  @click=${this._forgotPassword}>${this.signIn.action.link_label}</p>
                <button class="sign_in_button dissable" @click=${this._loginUser}>${this.signIn.action.button_label}</button>
            
                <p class="signInSection">${this.signIn.sign_up_section.label}
                    <b class="signIn"   @click=${t=>this._backTo()} >${this.signIn.sign_up_section.sign_inlabel}</b>
                </p>
                
            </div>
            

            ${this.signIn.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.signIn.back_nav)} @backClick=${this._backTo} theme =${this.theme}   > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div>
    `}};Wr.styles=[Lr],Hr([Y({type:Object})],Wr.prototype,"signIn",2),Hr([Y({type:String})],Wr.prototype,"partnerId",2),Hr([Y({type:String})],Wr.prototype,"category",2),Hr([Y({type:String})],Wr.prototype,"productHandle",2),Hr([Y({type:String})],Wr.prototype,"emailId",2),Hr([Y({type:String})],Wr.prototype,"password",2),Hr([Y({type:Object})],Wr.prototype,"cookieNameJson",2),Hr([Y({type:String})],Wr.prototype,"theme",2),Hr([Y({type:Object})],Wr.prototype,"dynamicSourceVar",2),Hr([Y({type:String})],Wr.prototype,"passwordShowImg",2),Hr([Y({type:String})],Wr.prototype,"passwordHideImg",2),Wr=Hr([G("t-sign-in")],Wr);const Qr=et`
        /* best fit page main div */

        .size_is_not_found h1 {
            font-size: var(--template-bestfit-customsize-fsize) !important;
            font-family: var(--template-bestfit-customsize-font) !important;
        }
        .resultpage_digit_size_page {
            /* display: none; */
            position: absolute;
            background-color: var(--template-background);
            z-index: 100;
            width: 100%;
            text-align: center;
            height: 100%;
            align-items: center;
            flex-direction: column;
            top: 0;
        }
        /* size section */
        .resultpage_digit_size {
            display: flex;
            position: absolute;
            background-color: var(--template-background);
            z-index: 100;
            width: 100%;
            text-align: center;
            height: 100%;
            align-items: center;
            flex-direction: column;
            /* top: 5%; */
            justify-content: space-evenly;
            /* justify-content: center; */
        }
        /* half section of top  */
        .best_fit_top_section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        /* title section */
        .resultpage_digit_size_title_div {
            display: flex;
            justify-content: center;
        }
        
        #resultpage_digit_size_title {
            margin: 5px 0px 5px 15px;
            color: var(--template-bestfit-title-color);
            font-family: var(--template-bestfit-title-font);
            font-size: var(--template-bestfit-tilte-fsize);
        }
        
        .resultpage_digit_size_title_icon {
            margin: 0px 0px 5px 5px;
            /* height: fit-content;
                        width: 3%; */
            /* height: fit-content; */
            width: 15px;
            cursor: pointer;
            height: 15px;
            font-size: 13px;
            color: var(--template-bestfit-infoicon-color);
            text-decoration: none;
        }
        /* title and size section */
        .timeline_digit_size_center h1 {
            margin: 10px 0px !important;
            font-size: var(--template-bestfit-size-fsize);
            font-family: var(--template-bestfit-size-font);
            color: var(--template-bestfit-size-color);
            /* font-size: xx-large; */
        }
        
        .size_not_foundDiv{
            margin: 2% 0px 18% 0px !important;
        }
        .size_not_found{
            margin: 0px 0px !important;
            font-family: var(--template-bestfit-nosize-font);
            font-size: var(--template-bestfit-nosize-fsize);
        }
        .guidance_tip {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 2% 0px 10% 0px;
        }
        .guidance_tip p, .guidance_tip p a {
            margin: 0px;
            font-size: var(--template-info-pop-up-txt-fsize);
            line-height: 16px;
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        .margin_between_tip{
            margin-bottom: 10px;
        }

        /* bottom description non-login section */
        .result_fit_desc {
            /* padding: 20px;
                        background-color: #d9d9d9; */
            /* padding: 6%; */
            background-color: var(--template-info-pop-up-background);
            width: 50%;
            display: flex;
            height: 20%;
            justify-content: center;
            flex-direction: column;
        }
        
        .result_fit_desc p {
            margin: 0px;
            font-size: var(--template-info-pop-up-txt-fsize);
            line-height: 16px;
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        /* shop btn  */
        .result_shop_btn {
            background-color: var(--template-bestfit-shopbtn-background);
            color: var(--template-bestfit-shopbtn-color);
            font-family: var(--template-bestfit-shopbtn-font);
            font-size: var(--template-bestfit-shopbtn-fsize);
            min-width: 100px;
            padding: 13px 33px;
            margin: 10px 0px 0px 0px;
            text-decoration: none;
        }
        /* retake btn section */
        .result_redo_section {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin-top: 3%;
        }
        /* retake quiz btn and last quiz time  */
        .result_redo_button {
            border: none;
            background-color: transparent;
            text-decoration: underline;
            font-size: var(--template-bestfit-redosize-text-fsize);
            color: var(--template-bestfit-redosize-text-color);
            cursor: pointer;
            font-family: var(--template-bestfit-redosize-text-font) !important;
        }
        .reviewbtn{
            margin: 10px 0px 0px;
        }
        /* signup section  non-login user */
        .result_signing_section {
            width: 50%;
            background-color: var(--template-bestfit-signup-background);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
            justify-content: center;
            font-family: "Avenir Light" !important;
        }
        
        .result_signing_section > p {
            font-size: var(--template-bestfit-signup-subtitle-fsize);
            width: 90%;
            margin: 0px auto;
            font-family: var(--template-bestfit-signup-text-font) !important;
            line-height: 20px;
            color: var(--template-bestfit-signup-text-color);
        }
        .bottom_margin_none{
                margin-bottom: 0px !important;
        }
        .result_signing_buttons {
            font-size: 12px;
            margin: 10px 0px 5px 0px;
        }
        
        .result_signing_buttons a {
            font-size: var(--template-bestfit-signup-title-fsize);
            font-family: var(--template-bestfit-signup-text-font) !important;
            color: var(--template-bestfit-signup-text-color);
        }
        /* footer section */
        .main_result_footer {
            /* display: flex;
                        align-content: center;
                        align-items: center; */
            position: absolute;
            width: 50%;
            /* justify-content: space-between; */
            background-color: white;
            bottom: 5%;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 400;
        }
        
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: 18px;
            background-color: transparent;
            color: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(0, 0, 0, 0.4);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
        }
        /* page info alert section */
        .bestFitInfo {
            display: none;
            position: absolute;
            /* background-color: rgba(217, 217, 217, 0.31); */
            align-items: center;
            justify-content: center;
            width: 100%;
            z-index: 999;
            /* height: 100%; */
            height: 92vh;
            top: -11%;
            background: var(--template-info-pop-up-sidebackground);
        }
        /* last option section login user */
        .result_options_section {
            width: 50%;
        }
        
        .result_option_border {
            border: var(--template-bordered-options-border);
            padding: 3px 10px 3px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            cursor: pointer;
        }
        
        .result_option_txt {
            color: var(--template-bordered-options-text-color);
            font-size: var(--template-bordered-options-txt-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        
        .result_option_icon {
            color: var(--template-bordered-options-icon-color);
            font-size: var(--template-bordered-options-icon-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        .middle_section{
                display: flex;
                flex-direction: column;
                align-items: center;
        }
        
        @media screen and (max-width: 380px) {
            
        }
        
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .result_signing_section {
                padding: 15px 0px !important;
                margin: 2% !important;
            }
        
            .result_redo_section {
                padding: 5px !important;
            }
        
            .result_fit_desc {
                margin-bottom: 4%;
            }
        }
        
        @media only screen and (max-width: 900px) {
            .resultpage_digit_size{
                    height: 90%;
            }
        }
        
        @media screen and (max-width: 600px) {
            .resultpage_digit_size_page {
                z-index: 300;
                display: block;
                align-content: center;
                align-items: center;
                justify-content: center;
            }
            
            #resultpage_digit_size_title {
                margin: 0px;
            }
        
            .resultpage_digit_size_title_icon {
                margin: -2px 0px 0px 5px;
            }
        
            .result_signing_section {
                width: 70%;
                padding: 20px 0px;
                margin: 15% 0px 0px 0px;
            }
        
            .main_result_footer {
                width: 80%;
            }
        
            .bestFitInfo {
                height: 100vh;
                top: -9%;
                background: #00000033;
            }
        
            .result_fit_desc {
                width: 85%;
                display: flex;
                height: 20%;
                justify-content: center;
                flex-direction: column;
            }
        
            .result_options_section {
                width: 80%;
            }

            .resultpage_digit_size {
                 top: 5%; 
            }
            .guidance_tip {
                margin: 2% 0px 10% 0px;
            }
            .resultpage_digit_size{
                height: 80%;
            }
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            
            .result_signing_section {
                width: 70%;
            }
        
            .result_fit_desc {
                margin: 10px 0px 4%;
                width: 85%;
                display: flex;
                height: 20%;
                justify-content: center;
                flex-direction: column;
            }
        
            .bestFitInfo {
                height: 66vh;
                top: -11%;
                background: #00000033;
            }
            .guidance_tip {
                margin: 2% 0px 10% 0px;
            }

            
        }
    `,Gr=new WeakMap,Kr=(Yr=t=>e=>{if(!(e instanceof q))throw new Error("unsafeHTML can only be used in text bindings");const i=Gr.get(e);if(void 0!==i&&x(t)&&t===i.value&&e.value===i.fragment)return;const o=document.createElement("template");o.innerHTML=t;const a=document.importNode(o.content,!0);e.setValue(a),Gr.set(e,{value:t,fragment:a})},(...t)=>{const e=Yr(...t);return m.set(e,!0),e});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Yr,Zr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,tl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Xr(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Zr(e,i,n),n};let el=class extends ot{constructor(){super()}_showBestFitInfo(t){let e=this.shadowRoot?.querySelectorAll(".bestFitInfo")[0];e.style.display=t}_signOut(t){(new vi).deleteData(this.category,this.cookieNameJson.loggedin),(new vi).deleteData(this.category,this.cookieNameJson.last_quiz_entry),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.category,this.cookieNameJson.login_time);this.dispatchEvent(new CustomEvent("_afterlogOut",{detail:{value:!0}}))}_letsShop(){this.dispatchEvent(new CustomEvent("_openpage",{detail:{isoptionpg:!1,isSignUp:!1,isclosePopup:!0}}))}_redoMyFit(){this.dispatchEvent(new CustomEvent("_openpage",{detail:{isoptionpg:!0,isSignUp:!1,isclosePopup:!1}}))}_userFlow(){this.dispatchEvent(new CustomEvent("_userflow",{detail:{openuserpage:!0}}))}_openSignUpPage(t){this.dispatchEvent(new CustomEvent("_openpage",{detail:{isoptionpg:!1,isSignUp:!0,isclosePopup:!1}}))}_openAccountInfoPage(t){this.dispatchEvent(new CustomEvent("_openAccountInfoPage",{detail:{isAccountInfo:!0}}))}_openHelpCenterPage(t){this.dispatchEvent(new CustomEvent("_openHelpCenterPage",{detail:{isHelpCenter:!0}}))}render(){if(this.lastEntry=(new vi).getDataByName(this.category,this.cookieNameJson.last_quiz_entry),null==this.lastEntry&&(this.lastEntry=(new vi).getDataByName(this.category,this.cookieNameJson.last_quiz_entry)),"undefined"!=this.lastEntry||""!=this.lastEntry){var t=new Date(this.lastEntry),e=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0"),o=t.getFullYear();this.datelstQuiz=e+"/"+i+"/"+o}return R`
            <div class="resultpage_digit_size_page">
                <div class="resultpage_digit_size">
                   <div class="best_fit_top_section">
                       <div class="timeline_digit_size_center resultpage_digit_size_title_div">
                           <p id="resultpage_digit_size_title">${this.bestFitData.title}</p>
                           <a href="javascript:void(0);"  @click=${t=>this._showBestFitInfo("flex")} class="resultpage_digit_size_title_icon">&#9432;</a>
                       </div>
                       <div class="timeline_digit_size_center ${this.resultSize==li||this.resultSize==ri?"size_is_not_found":""}">
                           <h1 id="returned_digit_size">${this.resultSize}</h1>
                           
                           ${""==this.resultSize||null==this.resultSize||null==this.resultSize?R`
                                <div class="size_not_foundDiv">
                                     ${this.bestFitData.size_not_info.map((t,e)=>R`<p class="size_not_found">${t}</p>`)}
                                </div>
                            `:""}
                           
                           <input type="hidden" id="returned_size" >
                       </div>
                       ${""==this.resultSize||null==this.resultSize||null==this.resultSize?R`
                        `:R`
                        
                        ${this.resultSize==li?R`
                                ${this.bestFitData.guidance_tip_custom?R`
                                        <div class="guidance_tip">
                                        ${this.bestFitData.guidance_tip_custom.map((t,e)=>R`<p class="landing_desc">${Kr(t)}</p>`)}
                                        
                                        <div>
                                    `:R`
                                    <div class="guidance_tip">
                                    ${this.bestFitData.guidance_tip_custom_p1.map((t,e)=>R`<p class="landing_desc">${Kr(t)}</p>`)}
                                    <div class="margin_between_tip"> </div>
                                    ${this.bestFitData.guidance_tip_custom_p2.map((t,e)=>R`<p class="landing_desc">${Kr(t)}</p>`)}
                                     <div>
                                    
                                `}
                                
                            `:this.resultSize==ri?R`
                                ${this.bestFitData.guidance_tip_not_offered?R`
                                        <div class="guidance_tip">
                                        ${this.bestFitData.guidance_tip_not_offered.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
                                        <div>
                                    `:""}    
                            `:R`
                            
                                ${this.bestFitData.guidance_tip?R`
                                        <div class="guidance_tip">
                                        ${this.bestFitData.guidance_tip.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
                                        <div>
                                    `:""}
                            `}

                        `}
                       
                       
                   </div>
                   <div class="middle_section">
                        <a class="result_shop_btn"  href="javascript:void(0);" @click=${t=>this._letsShop()}>${this.bestFitData.action.button_label}</a> 
                       
                       ${"null"==this.loginData?R` `:R`
                            ${""==this.resultSize||null==this.resultSize||null==this.resultSize?R`
                              <!--  <button class="result_redo_button">${this.bestFitData.label_last_entry} ${this.datelstQuiz}</button>  -->
                            `:R`
                                <button class="result_redo_button reviewbtn" @click=${this._userFlow} >${this.bestFitData.label_review_input}</button>
                            `}
                              
                               
                       `}
                       <div class="result_redo_section">
                           <button class="result_redo_button" @click=${this._redoMyFit}>${this.bestFitData.link1_label}</button>
                       </div> 
                   </div>
                   ${"null"==this.loginData?R`
                           <div class="result_signing_section"> 
                               <div class="result_signing_buttons ${0==Number("0")?"bottom_margin_none":""}"> <a @click=${t=>this._openSignUpPage(t)}  href="javascript:void(0);">${this.bestFitData.link2_label}</a></div>
                               ${this.bestFitData.bottom_info.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
                           </div>
                       `:R`
                           <div class="result_options_section">
                               <div class="result_option_border" @click=${t=>this._openAccountInfoPage(t)}>
                                   <a  href="javascript:void(0);" class="result_option_txt" >${this.bestFitData.link3_label_account_info}</a>
                                   <a  href="javascript:void(0);" class="result_option_icon">❯</a>
                               </div>
                               <div class="result_option_border" @click=${t=>this._openHelpCenterPage(t)}>
                                   <a  href="javascript:void(0);" class="result_option_txt">${this.bestFitData.link4_label_help_center}</a>
                                   <a  href="javascript:void(0);" class="result_option_icon">❯</a>
                               </div>
                               <div class="result_option_border"  @click=${t=>this._signOut(t)}>
                                   <a  href="javascript:void(0);" class="result_option_txt">${this.bestFitData.link5_lebel_sign_out}</a>
                                   <a  href="javascript:void(0);" class="result_option_icon">❯</a>
                               </div>
                           </div>
                   `}
                </div>  
                <div class="bestFitInfo"  @click=${t=>this._showBestFitInfo("none")}>
                    <div class="result_fit_desc">
                        ${this.bestFitData.top_info.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
                    </div>
                </div>
            </div>
        `}};el.styles=[Qr],tl([Y({type:Object})],el.prototype,"bestFitData",2),tl([Y({type:Object})],el.prototype,"cookieNameJson",2),tl([Y({type:String})],el.prototype,"partnerId",2),tl([Y({type:String})],el.prototype,"category",2),tl([Y({type:String})],el.prototype,"productHandle",2),tl([Y({type:String})],el.prototype,"resultSize",2),tl([Y({type:String})],el.prototype,"loginData",2),tl([Y({type:String})],el.prototype,"lastEntry",2),tl([Y({type:String})],el.prototype,"datelstQuiz",2),tl([Y({type:String})],el.prototype,"theme",2),el=tl([G("t-best-fit")],el);const il=et`
        /* main div */
        .logobar {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--header-background);
        }
        /* logo section */
        .lom_logo_svg {
            /* width: 44%; */
            height: 11px;
            /* height: 100%; */
            margin-left: 18px;
        }
        .lom_logo_svg_gray{
            height: 20px;
            margin-left: 13px;
        }
        /* close section */
        .popup_close_btn {
            margin-right: 20px;
        }
        /* close btn */
        .popup_close_btn p {
            padding: 5px;
            font-size: 20px;
            cursor: pointer;
            margin: 0px;
            color: var(--header-close-icon-color)
        }
        .show{
            display: block;
        }
        .hide{
            display: none;
        }
        
        @media only screen and (max-device-width: 900px) {
        
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
                          
        }
    `;var ol=Object.defineProperty,al=Object.getOwnPropertyDescriptor,nl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?al(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ol(e,i,n),n};let sl=class extends ot{constructor(){super()}_closeQuidget(){this.dispatchEvent(new CustomEvent("_closePopup",{detail:{value:!0}})),document.body.style.overflow="auto";let t=this.shadowRoot?.querySelectorAll(".signup_page")[0];t&&(t.style.display="none")}render(){return R`  
          <div class="logobar">
                <div class="logo">
                        <img class="lom_logo_svg" src="${this.headerImgs.header.logo_url}" />
                    </div>
                
                <div class="popup_close_btn ${this.isCloseicon}">
                    <p @click=${this._closeQuidget}>&#x2715;</p>
                </div>
            </div>  
        `}};sl.styles=[il],nl([Y({type:Object})],sl.prototype,"headerImgs",2),nl([Y({type:Object})],sl.prototype,"dynamicSourceVar",2),nl([Y({type:String})],sl.prototype,"renderPage",2),nl([Y({type:String})],sl.prototype,"theme",2),nl([Y({type:String})],sl.prototype,"isCloseicon",2),sl=nl([G("c-header")],sl);const rl=et`
        /* sign up page main div */
        .signup_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 0;
        }
        .signup_page > p {
            margin-top: 22px;
            /* font-family: "Avenir Light"; */
            /* font-size: 12px; */
        }
        /* page title */
        .signup_page_title {
            display: flex;
            margin-left: 15px;
        }
        .signup_page_title p {
            margin: 5px 0px;
            font-family: var(--template-title-font);
            font-size: var(--template-title-fsize);
            color: var(--template-title-color);
        }
        /* title icon for info */
        .resultpage_digit_size_title_icon {
            margin: 0px 0px 5px 5px !important;
            /* height: fit-content; */
            width: 15px !important;
            height: 15px !important;
            cursor: pointer;
            font-size: 13px !important;
            color: var(--template-bestfit-infoicon-color) !important;
            text-decoration: none;
        }
        /* error message */
        .login_error_msg {
            line-height: normal !important;
            width: 90%;
        }
        /* login section */
        .login_section {
            width: 60%;
            text-align: left;
            margin-top: 5px;
            margin-bottom: 15px;
        }
        .login_section p {
            /* font-size:11px; */
            margin: 0px;
            /* font-family: "Avenir"; */
        }
        .login_section input {
            font-size: var(--template-input-box-fsize);
            font-family: var(--template-input-box-font);
            padding: 5px;
        }
        .login_section .create_pass {
            /* font-size:12px; */
            margin-top: 0;
            padding: 5px;
            /* font-family: "Avenir"; */
            border: 0;
        }
        /* inputs */
        .login_text {
            width: -webkit-fill-available;
            height: 35px;
            border: var(--template-input-box-border);
            font-size: var(--template-input-box-fsize);
            background: var(--template-input-box-background);
            font-family: var(--template-input-box-font);
            color: var(--template-input-box-color);
            border-radius: 0px;
        }
        .login_text_password {
            width: -webkit-fill-available;
            height: 35px;
            /* font-size: 15px; */
            border: none !important;
            border-radius: 0px;
        }
        .login_text:focus {
            outline: none;
        }
        /* sign in btn */
        .sign_in_button {
            margin-top: 0%;
            /* padding: 10px 20px; */
            background-color: var(--template-btn-enable-background);
            color: var(--template-btn-color);
            border: var(--template-btn-enable-border);
            font-size: var(--template-btn-fsize);
            font-family: var(--template-btn-font);
            width: 186px;
            height: 40px;
            cursor: pointer;
        }
        .dissable {
            background-color: var(--template-btn-dissable-background) !important;
            border: var(--template-btn-dissable-border) !important;
            pointer-events: none !important;
            cursor: none;
        }
        /* error message */
        .signup_error_msg {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        .login_error_msg {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
            margin: 0px !important;
        }
        /* password validation section */
        .pass_validation {
            display: flex;
            align-items: center;
            margin: 2px 0px;
        }
        .pass_validation p {
            color: var(--template-password-validation-dissable-color);
            font-family: var(--template-password-validation-font);
            font-size: var(--template-password-validation-fsize);
        }
        .disablepassValidation {
            color: var(--template-password-validation-dissable-color) !important;
        }
        .enableValidation {
            color: var(--template-password-validation-enable-color) !important;
        }
        .validValidation {
            color: var(--template-password-validation-valid-color) !important;
        }
        /* email validation */
        .email_valid {
            /* display:none; */
            visibility: hidden;
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
            margin: 1px 0px;
        }
        .email_valid p {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        .email_valid img {
            width: 10px !important;
            height: 16px !important;
            margin-right: 5px;
        }
        .pass_validation img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
        }
        /* create Pass info*/
        .createPassInfo {
            display: none;
            position: absolute;
            width: 100%;
            /* height: 100%; */
            z-index: 999;
            /* display: flex; */
            justify-content: center;
            align-items: center;
            height: 92vh;
            top: -11%;
            background: var(--template-info-pop-up-sidebackground);
        }
        .pass_info {
            /* padding: 10px;
                    background-color: #d9d9d9; */
            /* padding: 6%; */
            background-color: var(--template-info-pop-up-background);
            width: 50%;
            display: flex;
            height: 20%;
            justify-content: center;
            flex-direction: column;
        }
        .pass_info p {
            margin: 0px;
            font-size: var(--template-info-pop-up-txt-fsize);
            line-height: 16px;
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        /* SifnIn */
        .signInSection {
            margin: 0px;
            color: var(--template-before-hyperlink-color);
            font-family: var(--template-before-hyperlink-font);
            font-size: var(--template-before-hyperlink-fsize);
        }
        .signIn {
            cursor: pointer;
            text-decoration: underline;
        }
        /* Bottom Info */
        .bottom_info_section {
            position: relative;
            margin-top: 2%;
        }
        .bottom_info_section p {
            margin: 0;
            font-size: var(--template-createpass-privacypolicy-fsize);
            color: var(--template-createpass-privacypolicy-color);
            font-family: var(--template-createpass-privacypolicy-font);
        }
        .bottom_info_section u {
            cursor: pointer;
        }
        /* footer section */
        .main_result_footer {
            position: absolute;
            width: fit-content;
            margin: auto;
            z-index: 400;
        }
        .cc_button_icon_without_border{
            bottom: 6%;
            left: 15%;
        }
        .cc_button_text_circle{
            bottom: 5%;
            left: 15%;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }

        /* prev btn section */
        .prev_back_arrow {
            width: 12px;
            height: 12px;
            border: 2px solid;
            border-color: var(--cvimg-uploadimg-prev-back-arrow) transparent transparent var(--cvimg-uploadimg-prev-back-arrow);
            transform: rotate(-45deg);
            margin-left: 10px;
            margin-top: 10px;
            cursor: pointer;
            display: flex;
            float: left;
        }
        
        /* #username_reg::placeholder:last-child {
                        color: red;
                    } */
        /* pass show and hide section */
        .eyeIcon {
            align-self: center;
            display: flex;
            padding: 0 12px;
            width: 20px;
            height: 20px;
        }
        
        .eyeButton {
            display: flex;
            border: var(--template-input-box-border);
            font-size: var(--template-input-box-fsize);
            font-family: var(--template-input-box-font);
            background: var(--template-input-box-background);
        }
        
        @media screen and (max-width: 600px) {
            .bottom_info_section {
            position: absolute;
            bottom: 0%;
            }
            .main_result_footer {
            width: 80%;
            }
            .cc_button_icon_without_border{
                left: 1%;
                right: 0;
            }
            .cc_button_text_circle{
                left: 0;
                right: 0;
            }
                
            /* .bottom_info_section{
                        bottom: 12%;
                    } */
            .login_section {
            width: 80%;
            margin-bottom: 30px;
            }
            /* .login_section p{
                        font-size: 8px;
                    } */
            .signup_page {
            height: 82%;
            }
            .createPassInfo {
            height: 100vh;
            top: -9%;
            }
            .pass_info {
            width: 85%;
            height: 20%;
            }
            .pass_validation {
            margin: 5px 0px;
            }
        }
        
        @media only screen and (min-width: 768px) {
            .signup_page {
            /* height: 96%;  */
            height: auto;
            margin-top: 2%;
            }
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
            }
            .cc_button_icon_without_border{
               bottom: 6%;
            }
            .cc_button_text_circle{
                bottom: 4%;
            }
            .login_section {
            width: 75%;
            }
            .createPassInfo {
            height: 66vh;
            top: -11%;
            }
            .pass_info {
            width: 85%;
            height: 20%;
            }
        }
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .bottom_info_section {
            margin-top: 2% !important;
            bottom: -8% !important;
            }
            .main_result_footer {
            }
            .cc_button_text_circle{
                bottom: 1%;
            }
            .cc_button_icon_without_border{
               bottom: 3% !important;
            }
            .login_section {
            margin-bottom: 10px;
            }
            .pass_validation {
            margin: 2px 0px;
            }
            .email_valid {
            margin: 1px 0px !important;
            }
        }
  
    `;var ll=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,pl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?cl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&ll(e,i,n),n};let dl=class extends ot{constructor(){super()}_togglePasswordAndImage(){const t=this.shadowRoot?.getElementById("password_reg"),e=this.shadowRoot?.getElementById("eyeImage");"password"===t.type?(t.type="text",e.src=this.passwordShowImg):(t.type="password",e.src=this.passwordHideImg)}_backTo(t){const e={detail:{isResult:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_resultPgae",e))}_showCreatePassInfo(t){let e=this.shadowRoot?.querySelectorAll(".createPassInfo")[0];e.style.display=t}_foundInput(t){let e=t.target.id,i=this.shadowRoot?.getElementById("first_name"),o=this.shadowRoot?.getElementById("last_name"),a=this.shadowRoot?.getElementById("username_reg"),n=this.shadowRoot?.getElementById("password_reg");if("first_name"==e&&(""!=i.value?this.firstNameValid=!0:this.firstNameValid=!1),"last_name"==e&&(""!=o.value?this.lastNameValid=!0:this.lastNameValid=!1),"username_reg"==e)""!=a.value?this.emailValid=!0:this.emailValid=!1;else{var s=n.value.trim();let t=this.shadowRoot?.querySelectorAll(".pass_valid"),e=this.shadowRoot?.querySelectorAll(".pass_valid_txt");var r=new RegExp("[A-Z]"),l=new RegExp("[a-z]"),c=new RegExp("[!@#$%^&*{}<>?();,.'?:|()_-`\"]"),p=new RegExp("[0-9]");if(""!=n.value){if(n.checkValidity()){let i=e[2];i.classList.remove("disablepassValidation"),i.classList.remove("enableValidation"),i.classList.add("validValidation"),t[2].firstElementChild.src=this.validationDoneImg}else t.forEach(t=>{let e=t.lastChild;e.classList.remove("disablepassValidation"),e.classList.add("enableValidation"),e.classList.remove("validValidation"),t.firstElementChild.src=this.validationWrongImg});if(" "!=n.value.charAt(0))if(r.test(s)&&l.test(s)){let i=e[0];i.classList.remove("disablepassValidation"),i.classList.remove("enableValidation"),i.classList.add("validValidation"),t[0].firstElementChild.src=this.validationDoneImg}else{let i=e[0];i.classList.remove("disablepassValidation"),i.classList.add("enableValidation"),i.classList.remove("validValidation"),t[0].firstElementChild.src=this.validationWrongImg}else{let i=e[0];i.classList.remove("disablepassValidation"),i.classList.add("enableValidation"),i.classList.remove("validValidation"),t[0].firstElementChild.src=this.validationWrongImg}if(c.test(s)&&p.test(s)){let i=e[1];i.classList.remove("disablepassValidation"),i.classList.remove("enableValidation"),i.classList.add("validValidation"),t[1].firstElementChild.src=this.validationDoneImg}else{let i=e[1];i.classList.remove("disablepassValidation"),i.classList.add("enableValidation"),i.classList.remove("validValidation"),t[1].firstElementChild.src=this.validationWrongImg}" "!=n.value.charAt(0)&&r.test(s)&&l.test(s)&&c.test(s)&&p.test(s)&&n.checkValidity()?this.passValid=!0:this.passValid=!1}else t.forEach((t,i)=>{let o=e[i];o.classList.add("disablepassValidation"),o.classList.remove("enableValidation"),o.classList.remove("validValidation"),t.firstElementChild.src=this.validationDissableImg})}this.emailValid&&this.passValid&&this.firstNameValid&&this.lastNameValid?this.shadowRoot?.querySelectorAll(".sign_in_button")[0].classList.remove("dissable"):this.shadowRoot?.querySelectorAll(".sign_in_button")[0].classList.add("dissable")}containsEmoji(t){return/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}(?:\p{Emoji_Modifier})?|\p{Emoji}\u200D\p{Emoji_Modifier_Base}(?:\p{Emoji_Modifier})?)/gu.test(t)}async _signUpUser(){let t=this.shadowRoot?.getElementById("signup_error_msg"),e=this.shadowRoot?.getElementById("first_name"),i=this.shadowRoot?.getElementById("last_name"),o=this.shadowRoot?.getElementById("username_reg"),a=this.shadowRoot?.getElementById("password_reg");new URL(location.href).pathname.split("/").pop();const n=/^[A-Za-z]+$/,s=this.shadowRoot?.querySelectorAll(".email_valid")[0],r=this.shadowRoot?.querySelectorAll(".email_valid")[1],l=this.shadowRoot?.querySelectorAll(".email_valid")[2],c=this.shadowRoot?.querySelectorAll(".email_valid")[0];if(s.style.visibility="hidden",r.style.visibility="hidden",l.style.visibility="hidden",c.style.visibility="hidden",e.checkValidity())if(this.containsEmoji(e.value))s.style.visibility="visible";else if(n.test(e.value.trim())){if(!i.checkValidity())return void(r.style.visibility="visible");if(this.containsEmoji(i.value))r.style.visibility="visible";else if(n.test(i.value.trim())){if(o&&!o.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{4,}.[a-zA-Z]{2,}$/)){l.style.visibility="visible";return void(o.style.border=" 1px solid #C80000")}if(!a.checkValidity())return void(t.innerHTML=jo.t("signup.error.password.char"));if(this.containsEmoji(a.value.trim()))t.innerHTML=jo.t("common.error.password.invalid");else{o.style.border="1px groove";var p=a.value.trim();if(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*{}<>?();,.'?:|()_-~`]).{8,}$").test(p)){(new Zs)._startWaveLoader();let n=this.shadowRoot?.getElementById("username_reg");this.emailId=n.value;let s=this.shadowRoot?.getElementById("username_reg"),r=this.shadowRoot?.getElementById("password_reg"),l={first_name:e.value.trim(),last_name:i.value.trim(),email:s.value.trim(),password:r.value.trim()},c=(new vi).getDataByName(this.category,this.cookieNameJson.quiz_input_id);l=Object.assign({quiz_input_id:c},l),l=JSON.stringify(l);let d=await(new mi).registerNewCustomerV2(l);if(null!=d)if(d.error_msg)if("User verification is pending."==d.error_msg){const t={detail:{openVerify:!0,email:this.emailId,pageName:"signUp",password:p,responsedata:d}};this.dispatchEvent(new CustomEvent("_openVerifyPage",t)),(new Zs)._stopWaveLoader()}else(new Zs)._stopWaveLoader(),t.innerHTML=d.error_msg;else{const t={detail:{openVerify:!0,email:this.emailId,pageName:"signUp",responsedata:d,password:a.value.trim()}};o.value="",a.value="",this.dispatchEvent(new CustomEvent("_openVerifyPage",t)),(new Zs)._stopWaveLoader()}else(new Zs)._stopWaveLoader()}else t.innerHTML=jo.t("signup.error.password.validation")}}else r.style.visibility="visible"}else s.style.visibility="visible";else s.style.visibility="visible"}_signInPage(){this.dispatchEvent(new CustomEvent("_signIn",{detail:{issignin:!0}}))}_policyOpen(){var t;let e=this.shadowRoot?.getElementById("username_reg"),i=this.shadowRoot?.getElementById("password_reg"),o=this.shadowRoot?.getElementById("first_name"),a=this.shadowRoot?.getElementById("last_name");t={detail:{isprivacypage:!0,isresetpage:!1,email:e.value.trim(),password:i.value.trim(),firstNm:o.value.trim(),lastNm:a.value.trim()}},this.dispatchEvent(new CustomEvent("_privacyPage",t))}_onFocusOut(){}_setEmailAndPass(t){let e=this.shadowRoot?.getElementById("first_name"),i=this.shadowRoot?.getElementById("last_name");if("show"==t){if(null!=this.emailId){let t=this.shadowRoot?.getElementById("username_reg");t.value=this.emailId}if(null!=this.password){let t=this.shadowRoot?.getElementById("password_reg");t.value=this.password}null!=this.firstName&&(e.value=this.firstName),null!=this.lastName&&(i.value=this.lastName),this.checkEmailAndPass()}else{let t=this.shadowRoot?.getElementById("username_reg");t.value="";let o=this.shadowRoot?.getElementById("password_reg");o.value="",e.value="",i.value=""}}checkEmailAndPass(){let t=this.shadowRoot?.getElementById("username_reg"),e=this.shadowRoot?.getElementById("password_reg");""!=t.value?this.emailValid=!0:this.emailValid=!1;var i=e.value.trim();let o=this.shadowRoot?.querySelectorAll(".pass_valid"),a=this.shadowRoot?.querySelectorAll(".pass_valid_txt");var n=new RegExp("[A-Z]"),s=new RegExp("[a-z]"),r=new RegExp("[!@#$%^&*{}<>?();,.'?:|()_-`\"]"),l=new RegExp("[0-9]");if(""!=e.value){if(i.length<8)o.forEach(t=>{let e=t.lastChild;e.style.color="#000000",e.classList.remove("disablepassValidation"),e.classList.add("enableValidation"),e.classList.remove("validValidation"),t.firstElementChild.src=this.validationWrongImg});else{let t=a[2];t.classList.remove("disablepassValidation"),t.classList.remove("enableValidation"),t.classList.add("validValidation"),o[2].firstElementChild.src=this.validationDoneImg}if(" "!=e.value.charAt(0))if(n.test(i)&&s.test(i)){let t=a[0];t.classList.remove("disablepassValidation"),t.classList.remove("enableValidation"),t.classList.add("validValidation"),o[0].firstElementChild.src=this.validationDoneImg}else{let t=a[0];t.classList.remove("disablepassValidation"),t.classList.add("enableValidation"),t.classList.remove("validValidation"),o[0].firstElementChild.src=this.validationWrongImg}else{let t=a[0];t.classList.remove("disablepassValidation"),t.classList.add("enableValidation"),t.classList.remove("validValidation"),o[0].firstElementChild.src=this.validationWrongImg}if(r.test(i)&&l.test(i)){let t=a[1];t.classList.remove("disablepassValidation"),t.classList.remove("enableValidation"),t.classList.add("validValidation"),o[1].firstElementChild.src=this.validationDoneImg}else{let t=a[1];t.classList.remove("disablepassValidation"),t.classList.add("enableValidation"),t.classList.remove("validValidation"),o[1].firstElementChild.src=this.validationWrongImg}" "!=e.value.charAt(0)&&n.test(i)&&s.test(i)&&r.test(i)&&l.test(i)&&i.length>7?this.passValid=!0:this.passValid=!1}else o.forEach((t,e)=>{this.passValid=!1;let i=a[e];i.classList.add("disablepassValidation"),i.classList.remove("enableValidation"),i.classList.remove("validValidation"),t.firstElementChild.src=this.validationDissableImg});this.emailValid&&this.passValid?this.shadowRoot?.querySelectorAll(".sign_in_button")[0].classList.remove("dissable"):this.shadowRoot?.querySelectorAll(".sign_in_button")[0].classList.add("dissable")}render(){var t=JSON.parse(this.dynamicSourceVar);return"dark"==this.theme?this.validationDoneImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DONE_DARK:this.validationDoneImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DONE_LIGHT,"dark"==this.theme?this.validationDissableImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DISABLE_DARK:this.validationDissableImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DISABLE_LIGHT,"dark"==this.theme?this.validationWrongImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_WRONG_DARK:this.validationWrongImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_WRONG_LIGHT,"dark"==this.theme?this.passwordHideImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_HIDE_DARK:this.passwordHideImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_HIDE_LIGHT,"dark"==this.theme?this.passwordShowImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_SHOW_DARK:this.passwordShowImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_SHOW_LIGHT,R`
        <div class="signup_page">
            <div class="signup_page_title">
                <p>${this.createPassword.title}</p>
                <a href="javascript:void(0);"  @click=${t=>this._showCreatePassInfo("flex")} class="resultpage_digit_size_title_icon">&#9432;</a>
                <!-- <img class="resultpage_digit_size_title_icon" @click=${t=>this._showCreatePassInfo("flex")} src="https://lom-quiz-app.s3.us-east-2.amazonaws.com/source/common/tipicone.png"> -->
            </div>
            <div class="login_section">
                <input id="first_name" name="first_name" class="login_text" type="text" 
                placeholder="${this.createPassword.input.param1_label}"
                @input=${this._foundInput} 
                onKeyPress="if(this.value.length==${this.createPassword.input.param1_maxlenght})  return false;" required>
                <div class="pass_validation email_valid">
                    <p>${this.createPassword.validation_text.firstnmLabel}</p>
                </div>
                <input id="last_name" name="last_name" class="login_text" type="text" 
                placeholder="${this.createPassword.input.param2_label}"
                @input=${this._foundInput} 
                onKeyPress="if(this.value.length==${this.createPassword.input.param2_maxlenght})  return false;" required>
                <div class="pass_validation email_valid">
                    <p>${this.createPassword.validation_text.lastnmLabel}</p>
                </div>


                <input id="username_reg" name="username_reg" class="login_text" type="email" 
                placeholder="${this.createPassword.input.param3_label}"
                @input=${this._foundInput} 
                onKeyPress="if(this.value.length==${this.createPassword.input.param3_maxlenght})  return false;" required>
                <div class="pass_validation email_valid">
                    <p>${this.createPassword.validation_text.emailLabel}</p>
                </div>
                <div class="eyeButton" >
                    <input id="password_reg" name="password_reg" value="" class="login_text login_text_password login_text_pass create_pass" minlength="8" type="password" 
                    placeholder="${this.createPassword.input.param4_label}"
                    @input=${this._foundInput} 
                    oninput="javascript: if (this.value.length >${this.createPassword.input.param4_maxlenght}) this.value = this.value.slice(0, ${this.createPassword.input.param2_maxlenght});">
                    <span class="eyeIcon" @click=${this._togglePasswordAndImage}><img id="eyeImage" src= ${this.passwordHideImg} /></span>
                </div>
             
             
                <div class="pass_validation_section">
                    <div class="pass_validation pass_valid">
                        <img src=  ${this.validationDissableImg}>
                        <p class="pass_valid_txt">${this.createPassword.validation_text.passlabel1}</p></div>
                    <div class="pass_validation pass_valid">
                        <img src=  ${this.validationDissableImg}> 
                        <p class="pass_valid_txt">${this.createPassword.validation_text.passlabel2}</p></div>
                    <div class="pass_validation pass_valid">
                        <img src=  ${this.validationDissableImg}>
                        <p class="pass_valid_txt">${this.createPassword.validation_text.passlabel3}</p></div>
                </div>
            </div>
            <button class="sign_in_button dissable" @click=${this._signUpUser}>${this.createPassword.action.button_label}</button>
            <p class="signInSection">${this.createPassword.sign_in_section.label}
                <b class="signIn"  @click=${this._signInPage}>${this.createPassword.sign_in_section.sign_inlabel}</b>
            </p>
            <p id="signup_error_msg" class="login_error_msg"></p>
            <div class="bottom_info_section">
                    <p>${this.createPassword.bootom_info.label1}</p>
                    <p><u  @click=${t=>this._policyOpen()}>${this.createPassword.bootom_info.underlinelabel1}</u>
                    ${this.createPassword.bootom_info.label2}
                    <u  @click=${t=>this._policyOpen()}>${this.createPassword.bootom_info.underlinelabel2}</u>
                    </p>
            </div>
        </div>
     
        <div class="createPassInfo"  @click=${t=>this._showCreatePassInfo("none")}>
            <div class="pass_info">
                ${this.createPassword.info.map((t,e)=>R`<p>${t}</p>`)}
            </div>
        </div>
       
        ${this.createPassword.back_nav?R`
            <c-temp-back-button navigationIcon=${JSON.stringify(this.createPassword.back_nav)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
            `:R`
                <div class="main_result_footer cc_button_text_circle">
                    <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo(t)} >❮</a>            
                </div> 
            `}
        </div>
    `}firstUpdated(t){1==this.isShowEmailPass||"true"==this.isShowEmailPass?this._setEmailAndPass("show"):this._setEmailAndPass("remove"),this.isShowEmailPass=!1}};dl.styles=[rl],pl([Y({type:Object})],dl.prototype,"createPassword",2),pl([Y({type:String})],dl.prototype,"partnerId",2),pl([Y({type:String})],dl.prototype,"category",2),pl([Y({type:String})],dl.prototype,"productHandle",2),pl([Y({type:String})],dl.prototype,"emailId",2),pl([Y({type:String})],dl.prototype,"firstNameValid",2),pl([Y({type:String})],dl.prototype,"lastNameValid",2),pl([Y({type:String})],dl.prototype,"emailValid",2),pl([Y({type:String})],dl.prototype,"passValid",2),pl([Y({type:String})],dl.prototype,"fitSize",2),pl([Y({type:String})],dl.prototype,"password",2),pl([Y({type:String})],dl.prototype,"firstName",2),pl([Y({type:String})],dl.prototype,"lastName",2),pl([Y({type:String})],dl.prototype,"isShowEmailPass",2),pl([Y({type:Object})],dl.prototype,"cookieNameJson",2),pl([Y({type:String})],dl.prototype,"theme",2),pl([Y({type:String})],dl.prototype,"validationDissableImg",2),pl([Y({type:String})],dl.prototype,"validationDoneImg",2),pl([Y({type:String})],dl.prototype,"validationWrongImg",2),pl([Y({type:String})],dl.prototype,"dynamicSourceVar",2),pl([Y({type:String})],dl.prototype,"passwordShowImg",2),pl([Y({type:String})],dl.prototype,"passwordHideImg",2),dl=pl([G("t-sign-up")],dl);const ul=et`
        /* sign up page */
        .after_signup_page {
            /* display: none; */
            display: flex;
            position: absolute;
            background-color: var(--template-background);
            z-index: 400;
            width: 100%;
            text-align: center;
            height: 90%;
            align-items: center;
            flex-direction: column;
            top: 0;
            justify-content: center;
        }
        /* success page desc */
        .after_signup_desc {
            width: 90%;
            text-align: center;
            margin-bottom: 50px;
            margin-bottom: 7%;
        }
        .after_signup_desc p {
            margin: 0px;
            font-family: var(--template-desc-font) !important;
            font-size: var(--template-desc-fsize);
            color: var(--template-desc-color);
        }
        /* shop btn */
        .result_shop_btn {
            /* background-color: #203842; */
            color: var(--template-btn-color);
            border: var(--template-btn-enable-border);
            background: var(--template-btn-enable-background);
            width: 186px;
            height: 40px;
            font-size: 12px;
            /* font-family: 'MSS' !important; */
        }
        .after_signup_title .title {
            font-size: var(--template-title-fsize);
            font-family: var(--template-title-font) !important;
            color: var(--template-subtitle-color);
        }
        .after_signup_title .subTitle {
            font-size: var(--template-subtitle-fsize);
            font-family: var(--template-subtitle-font) !important;
            color: var(--template-subtitle-color);
            margin: 10% 0px;
        }
  
    `;var hl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,gl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?ml(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&hl(e,i,n),n};let yl=class extends ot{constructor(){super()}_closeAfterSignUpPage(){if("Your new password is now saved."==this.createPasswordSuccessData.subtitle){this.dispatchEvent(new CustomEvent("_signIn",{detail:{issignin:!0}}))}else{const t={detail:{isSignUpSuc:!0}};this.dispatchEvent(new CustomEvent("_closeSignUpSuc",t))}}render(){return R`
            <div class="after_signup_page"> 
                <div class="after_signup_title">
                    <p class="title">${this.createPasswordSuccessData.title}</p>
                    <p class="subTitle">${this.createPasswordSuccessData.subtitle}</p>
                </div>
                <div class="after_signup_desc">
                    ${this.createPasswordSuccessData.info.map((t,e)=>R`<p>${t}</p>`)}   
                </div>
                <button class="result_shop_btn" @click=${t=>this._closeAfterSignUpPage()}>
                    ${this.createPasswordSuccessData.action.button_label}
                </button> 
            </div>
        `}};yl.styles=[ul],gl([Y({type:Object})],yl.prototype,"createPasswordSuccessData",2),gl([Y({type:String})],yl.prototype,"partnerId",2),gl([Y({type:String})],yl.prototype,"category",2),gl([Y({type:String})],yl.prototype,"productHandle",2),gl([Y({type:Object})],yl.prototype,"cookieNameJson",2),gl([Y({type:String})],yl.prototype,"theme",2),yl=gl([G("t-signup-success")],yl);const fl=et`
    /* error page main div */
    .quiz__no_result__container {
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    /* error page title */
    .quiz__no-result__title {
      width: 90%;
      /* margin: auto; */
      color: var(--template-title-color);
      font-family: var(--template-title-font);
      font-size: var(--template-title-fsize);
      margin-bottom: 30px;
    }
    /* error page description section */
    .quiz__no-result__description {
      font-size: var(--template-desc-fsize);
      font-family: var(--template-desc-font);
      color: var(--template-desc-color);
      width: 90%;
      /* margin: auto; */
      margin-bottom: 30px;
    }
    .article a,
    .link,
    .page a {
      text-decoration: underline;
    }
    /* quiz option btn */
    button {
      border: 0;
      border-radius: 0;
      padding: 0;
      background-color: transparent;
      color: var(--template-errorpage-btn-color);
      -webkit-appearance: none;
      font-size: var(--template-errorpage-btn-fsize);
      font-family: var(--template-errorpage-btn-font);
      cursor: pointer;
    }
    ._fitQuizbtn {
      margin-bottom: 10%;
    }
  `;var vl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,_l=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?bl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&vl(e,i,n),n};let wl=class extends ot{constructor(){super()}_cvQuiz(){const t={detail:{isoptionpg:!1,isSignUp:!1,isclosePopup:!1,iscvquiz:!0,quizType:this.quizType,displayQuizType:this.displayQuizType}};this.dispatchEvent(new CustomEvent("_openpage",t))}_fitQuiz(){const t={detail:{isfitquiz:!0,quizType:this.quizType,displayQuizType:this.displayQuizType}};this.dispatchEvent(new CustomEvent("_openFitpage",t))}render(){return R`
          <div class="quiz__no_result__container">
              <h1 class="h2 quiz__no-result__title mb075">${this.errorData.title}</h1>
              <div class="p quiz__no-result__description mb2">
                ${this.errorData.top_info.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
              </div>
              <button type="button" name="button" class="p link" @click=${this._cvQuiz}>
              ${this.errorData.action.button_label1}
              </button>
              <br />
              <button type="button" name="button" class="p link _fitQuizbtn" @click=${this._fitQuiz}>
              ${this.errorData.action.button_label2}
              </button>
          </div>
      `}};wl.styles=[fl],_l([Y({type:Object})],wl.prototype,"errorData",2),_l([Y({type:Object})],wl.prototype,"cookieNameJson",2),_l([Y({type:String})],wl.prototype,"theme",2),_l([Y({type:String})],wl.prototype,"displayQuizType",2),_l([Y({type:String})],wl.prototype,"quizType",2),wl=_l([G("t-error-template")],wl);const xl=et`
    /* verify page main div  */
    .verify_page {
      /* display: none; */
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      height: 87%;
      align-items: center;
      z-index: 400;
      position: absolute;
      width: 100%;
      background-color: var(--template-background);
      top: 0;
    }
    /*  page title */
    .verify_page_title {
      font-size: var(--template-verify-title-fsize) !important;
      font-family: var(--template-verify-title-font) !important;
      color: var(--template-verify-title-color) !important;
      margin-bottom: 0px;
    }
    .verify_page > p {
      font-family: var(--template-verify-desc-font);
      font-size: var(--template-verify-desc-fsize);
      color: var(--template-verify-desc-color);
    }
    /* otp input section  */
    .inputs_block input {
      width: 30px;
      height: 35px;
      margin: 3px;
      font-size: var(--template-verify-input-box-fsize);
      background: var(--template-verify-input-box-background);
      border: var(--template-verify-input-box-border);
      font-size: var(--template-verify-input-box-fsize);
      color: var(--template-verify-input-box-color);
      border-radius: 0px;
      text-align: -webkit-center;
      font-family: sans-serif;
    }
    .inputs_block input:focus {
      outline: none;
    }
    /* verify btn  */
    .verifyBtn {
      margin-top: 5%;
      /* padding: 10px 20px; */
      background-color: var(--template-btn-enable-background);
      color: var(--template-btn-color);
      border: var(--template-btn-enable-border);
      width: 186px;
      height: 40px;
      font-size: var(--template-btn-fsize);
      font-family: var(--template-btn-font);
      border-radius: 0px;
      cursor: pointer;
    }
    .dissable {
      background-color: var(--template-btn-dissable-background) !important;
      border: var(--template-btn-dissable-border) !important;
      pointer-events: none !important;
      cursor: none;
    }
    /* error message  */
    .login_error_msg {
      color: var(--template-error-txt-color) !important;
      font-family: var(--template-error-txt-font) !important;
      font-size: var(--template-error-txt-fsize) !important;
    }
    /* resend otp section  */
    .resendSection {
      margin: 10px 0px;
      font-size: 14px;
    }
    .resendtext {
      cursor: pointer;
      text-decoration: underline;
    }
    .noClick {
      pointer-events: none;
      cursor: default;
    }
    .hide {
      display: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    @media screen and (max-width: 320px) {
      .verify_page > p {
        align-items: center;
        margin: 0;
        padding: 2%;
      }

      .inputs_block {
        display: flex;
      }
    }
           
  `;var Sl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,kl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?zl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Sl(e,i,n),n};let ql=class extends ot{constructor(){super(),this.otpMaxLength=1}_onPaste(t){let e=this.shadowRoot.querySelectorAll(".otpInputs");const i=(t.clipboardData||window.Clipboard).getData("text");i.length>1&&t.preventDefault();var o,a=i;for(a=a.split(""),o=0;o<e.length;o++)if(""!=a[o]&&null!=a[o]&&" "!=a[o]){const t=e[o];t.value="",t.value=a[o],t.focus(),o==e.length-1?this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.remove("dissable"):this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")}}_keyDown(t){["-","+","e","E"].includes(t.key)&&t.preventDefault()}_dragValueStop(t){t.preventDefault()}_resendOTP(){var t=30,e=setInterval(function(){-1==t?(clearTimeout(e),i[0].classList.remove("hide"),o[0].innerHTML=""):(i[0].classList.add("hide"),o[0].innerHTML=jo.t("verify.otp.retry")+" "+t,t--)},1e3);let i=this.shadowRoot.querySelectorAll(".resendtext"),o=this.shadowRoot.querySelectorAll(".resendtextTimer")}async _sendOTP(){this._clearOTPInputs(),this._resendOTP();let t={email:this.emailId};t=JSON.stringify(t);let e=await(new mi).resendOTPV2(t),i=this.shadowRoot.getElementById("otp_error_msg");e.error_msg&&(i.innerHTML=e.error_msg)}_clearOTPInputs(){this.shadowRoot.querySelectorAll(".otpInputs").forEach(t=>{t.value=""}),this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")}_handleInputKeyUp(t){const e=t.target,i=e.value,o=t.key;let a=this.shadowRoot.querySelectorAll(".otpInputs");this.verifyCode="";for(let n=0;n<a.length;n++)this.verifyCode=""+this.verifyCode+a[n].value;if("Backspace"===o){if(0===i.length){const t=e.previousElementSibling;t&&t.classList.contains("otpInputs")?(t.focus(),this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")):this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")}}else if(i.length===e.maxLength){const t=e.nextElementSibling;t&&t.classList.contains("otpInputs")?(t.focus(),this.verifyCode.length==a.length?this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.remove("dissable"):this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")):this.verifyCode.length==a.length?this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.remove("dissable"):this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")}else this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable")}async _verifyUserV2(){if("forgotPass"==this.fromPage)this.__openResetPage();else if("accountInfo"==this.fromPage)this.__openResetPage();else{(new Zs)._startWaveLoader();let t=this.shadowRoot.getElementById("otp_error_msg"),e=this.shadowRoot.querySelectorAll(".otpInputs"),i="";for(let n=0;n<e.length;n++){i=""+i+e[n].value}let o={email:this.emailId,confirmation_code:i};o=JSON.stringify(o);let a=await(new mi).validateUserV2(o);for(let n=0;n<e.length;n++){e[n].value=""}if(null!=a)if(a.error_msg)t.innerHTML=a.error_msg,this.shadowRoot.querySelectorAll(".verifyBtn")[0].classList.add("dissable"),(new Zs)._stopWaveLoader();else{let t=(new vi).getDataByName(this.category,this.cookieNameJson.quiz_input_id);this._afterSuccessfulUserVerificationV2(a,t)}}}__openResetPage(){let t=this.shadowRoot.querySelectorAll(".otpInputs"),e="";for(let o=0;o<t.length;o++){e=""+e+t[o].value}var i={detail:{openresetpassword:!0,email:this.emailId,otp:e}};this.dispatchEvent(new CustomEvent("_resetPass",i))}_afterSuccessfulUserVerificationV2(t,e){this._sigInApi(),e==(new vi).getDataByName(this.category,this.cookieNameJson.fit_quiz_qrs)||(new vi).getDataByName(this.category,this.cookieNameJson.cv_answers)}async _sigInApi(){var t={email:this.emailId,password:this.password,partner_id:this.partnerId,product_stub_id:this.productHandle};let e=JSON.stringify(t),i=await(new mi).wrapFunctionLoginUser(e);null!=i?i.error_msg?((new Zs)._stopWaveLoader(),i.error_msg):((new vi).setData(this.category,this.cookieNameJson.qrs_id,i.sizes.quiz_input_id),(new vi).setDataWithoutCategory(this.category,this.cookieNameJson.login_time,i.login_time),this._afterSuccessfulLogin(i)):(new Zs)._stopWaveLoader()}async _afterSuccessfulLogin(t){document.body.style.overflow="auto",(new vi).setData(this.category,this.cookieNameJson.loggedin,t.authentication_result.customer_id);let e=(new vi).getDataByName(this.category,this.cookieNameJson.product_code),i=t.sizes[e];if(this.logginTime=t.login_time,(new Zs)._stopWaveLoader(),"signUp"==this.fromPage){this.loggedIn=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin),await this._requestQuizMetadataForUpdateDateLastQuiz(this.loggedIn);const e={detail:{isVerify:!0,responsedata:t,size:i,isSignUp:!0}};this.dispatchEvent(new CustomEvent("_openSignUpSuc",e))}else{const e={detail:{isVerify:!0,responsedata:t,size:i,isLogin:!0}};this.dispatchEvent(new CustomEvent("_openSignUpSuc",e))}}async _requestQuizMetadataForUpdateDateLastQuiz(t){(new Zs)._startWaveLoader();var e=(new vi).getDataByName(Ke,this.cookieNameJson.login_time);e?((new vi).setDataWithoutCategory(this.productCategory,this.cookieNameJson.login_time,e),(new vi).deleteData(Ke,this.cookieNameJson.login_time)):e=(new vi).getDataByNameWithoutCategory(this.productCategory,this.cookieNameJson.login_time);let i={domain:"test.com",partnerId:this.partnerId,productHandle:this.productHandle};t&&(i=Object.assign({customer_id:t},i)),this.logginTime&&(i=Object.assign({login_time:this.logginTime},i));let o=await(new mi).requestQuizMetadataV2(i);o&&(o.last_quiz_timestamp&&(new vi).setData(this.category,this.cookieNameJson.last_quiz_entry,o.last_quiz_timestamp),(new vi).getDataByName(this.category,this.cookieNameJson.last_quiz_entry)),(new Zs)._stopWaveLoader()}render(){return R`
      <div class="verify_page">
        ${"signUp"==this.fromPage?R`
        <p class="verify_page_title">${this.verifyUserData.verify_title}</p>
        `:"forgotPass"==this.fromPage||"accountInfo"==this.fromPage?R`
        <p class="verify_page_title">${this.verifyUserData.reset_otp_title}</p>
        `:R`
        <p class="nonverify_page_title">${this.verifyUserData.non_verify_title}</p>
        `}
        
        
        ${this.verifyUserData.top_info.map((t,e)=>R`<p>${t}</p>`)}
        <div class="inputs_block">
          <input id="otpInputsf" class="otpInputs" type="number" maxlength="1" @keyup=${this._handleInputKeyUp}
          @drop= ${this._dragValueStop}  
          @paste = ${this._onPaste}  data-maxlength="${this.otpMaxLength}"
        oninput="javascript: if (this.value.length >${this.otpMaxLength}) this.value = this.value.slice(0, ${this.otpMaxLength});"
        @keydown= ${this._keyDown}/>

          <input class="otpInputs" type="number" maxlength="1" @keyup=${this._handleInputKeyUp} 
          @drop= ${this._dragValueStop} @paste = ${this._onPaste} data-maxlength="${this.otpMaxLength}"
        oninput="javascript: if (this.value.length >${this.otpMaxLength}) this.value = this.value.slice(0, ${this.otpMaxLength});"
        @keydown= ${this._keyDown}/>

          <input class="otpInputs" type="number" maxlength="1" @keyup=${this._handleInputKeyUp} 
          @paste = ${this._onPaste}  @drop= ${this._dragValueStop} data-maxlength="${this.otpMaxLength}"
        oninput="javascript: if (this.value.length >${this.otpMaxLength}) this.value = this.value.slice(0, ${this.otpMaxLength});"
        @keydown= ${this._keyDown}/>

          <input class="otpInputs" type="number" maxlength="1" @keyup=${this._handleInputKeyUp} 
          @paste = ${this._onPaste}   @drop= ${this._dragValueStop} data-maxlength="${this.otpMaxLength}"
        oninput="javascript: if (this.value.length >${this.otpMaxLength}) this.value = this.value.slice(0, ${this.otpMaxLength});"
        @keydown= ${this._keyDown}/>

          <input class="otpInputs" type="number" maxlength="1" @keyup=${this._handleInputKeyUp} 
          @paste = ${this._onPaste}    @drop= ${this._dragValueStop} data-maxlength="${this.otpMaxLength}"
        oninput="javascript: if (this.value.length >${this.otpMaxLength}) this.value = this.value.slice(0, ${this.otpMaxLength});"
        @keydown= ${this._keyDown}/>

          <input class="otpInputs" type="number" maxlength="1" @keyup=${this._handleInputKeyUp} 
          @paste = ${this._onPaste}    @drop= ${this._dragValueStop} data-maxlength="${this.otpMaxLength}"
        oninput="javascript: if (this.value.length >${this.otpMaxLength}) this.value = this.value.slice(0, ${this.otpMaxLength});" 
        @keydown= ${this._keyDown}/>

        </div>
          <button class="verifyBtn dissable" @click=${this._verifyUserV2}>${this.verifyUserData.link1_label}</button>
          <p id="otp_error_msg" class="login_error_msg"></p>
          <p class="resendSection">${this.verifyUserData.resend_otp_section.label}
              <b class="resendtext"  @click=${this._sendOTP}>${this.verifyUserData.resend_otp_section.resendlabel}</b>
              <b class="resendtextTimer"></b>
          </p>
      </div>
    `}firstUpdated(t){let e=this.shadowRoot.getElementById("otp_error_msg");"undefined"!=this.verifyError&&null!=this.verifyError&&(e.innerHTML=this.verifyError)}};ql.styles=[xl],kl([Y({type:Object})],ql.prototype,"verifyUserData",2),kl([Y({type:String})],ql.prototype,"emailId",2),kl([Y({type:String})],ql.prototype,"category",2),kl([Y({type:String})],ql.prototype,"fromPage",2),kl([Y({type:Number})],ql.prototype,"otpMaxLength",2),kl([Y({type:String})],ql.prototype,"password",2),kl([Y({type:String})],ql.prototype,"partnerId",2),kl([Y({type:String})],ql.prototype,"verifyCode",2),kl([Y({type:Object})],ql.prototype,"cookieNameJson",2),kl([Y({type:String})],ql.prototype,"verifyError",2),kl([Y({type:String})],ql.prototype,"productCategory",2),kl([Y({type:String})],ql.prototype,"productHandle",2),kl([Y({type:String})],ql.prototype,"loggedIn",2),kl([Y({type:String})],ql.prototype,"logginTime",2),kl([Y({type:String})],ql.prototype,"theme",2),ql=kl([G("t-verify-user")],ql);const Il=et`
        /* size not found page */
        .size_error {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            height: 86%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 0;
        }
        /* shop btn */
        .shop_btn {
            background-color: var(--template-bestfit-shopbtn-background);
            color: var(--template-bestfit-shopbtn-color);
            font-family: var(--template-bestfit-shopbtn-font);
            font-size: var(--template-bestfit-shopbtn-fsize);
            min-width: 120px;
            padding: 17px 33px;
        }
        /* retake btn section */
        .redo_section {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin-top: 1%;
        }
        /* retake btn */
        .redo_button {
            border: none;
            background-color: transparent;
            font-size: var(--template-bestfit-redosize-text-fsize);
            color: var(--template-bestfit-redosize-text-color);
            text-decoration: underline;
            cursor: pointer;
            font-family: var(--template-bestfit-redosize-text-font) !important;
        }
        /* error desc section */
        .size_error_desc {
            width: 90%;
            text-align: center;
            margin-bottom: 50px;
            margin-bottom: 9%;
            margin-top: 4%;
        }
        .size_error_desc > P {
            margin: 0px;
            color: var(--template-sizenotfound-desc-color);
            font-family: var(--template-sizenotfound-desc-font);
            font-size: var(--template-sizenotfound-desc-fsize);
        }

        .result_text {
            font-size: 36px;
            color: var(--template-sizenotfound-notfound-color);
            font-family: var(--template-sizenotfound-notfound-font);
            font-size: var(--template-sizenotfound-notfound-fsize);
            margin-top: 0;
            margin-bottom: 3%;
        }
        /* title  */
        .best_fit_text {
            color: var(--template-bestfit-title-color);
            font-family: var(--template-bestfit-title-font);
            font-size: var(--template-bestfit-tilte-fsize);
        }
        
        @media screen and (max-width: 380px) {
            /* .size_error{
                        display: flex;
                        place-content: center space-evenly;
                        align-items: center;
                        height: 68%;
                        top: 16%;
                    } */
        }
        
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .redo_section {
            padding: 5px !important;
            }
            /* .redo_section{
                        padding: 5px  !important;
                        background: red;
                    }
                    .size_error{
                        display: flex;
                        place-content: center space-evenly;
                        align-items: center;
                        height: 68%;
                        top: 16%; 
                    }  */
        }
        
        @media screen and (max-width: 600px) {
            .redo_section {
            width: 80%;
            }
            /* .size_error{
                        display: flex;
                        place-content: center space-evenly;
                        align-items: center;
                        height: 68%;
                        top: 16%;
                    } */
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .redo_section {
            width: 80%;
            }
        }
  
    `;var $l=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,Dl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Nl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&$l(e,i,n),n};let Ol=class extends ot{constructor(){super()}_redoMyFit(){this.dispatchEvent(new CustomEvent("_optionPage",{detail:{isoptionpg:!0}}))}_letsShop(){this.dispatchEvent(new CustomEvent("_optionPage",{detail:{isoptionpg:!1,isclosePopup:!0}}))}render(){return R`
         <div class="size_error">
             <p class="best_fit_text">${this.sizeNotFound.title}</p>
             <h2 class="result_text">${this.sizeNotFound.heading}</h2>
             <div class="size_error_desc">
                ${this.sizeNotFound.top_info.map(t=>R`<p>${t}</p>`)}
             </div>
             <a  href="javascript:void(0);" class="shop_btn" href="#" @click=${t=>this._letsShop()}>${this.sizeNotFound.action.button_label}</a>
             <div class="redo_section">
                <button class="redo_button" @click=${this._redoMyFit}>${this.sizeNotFound.link1_label}</button>
             </div>
        </div>
        `}};Ol.styles=[Il],Dl([Y({type:Object})],Ol.prototype,"sizeNotFound",2),Dl([Y({type:Object})],Ol.prototype,"cookieNameJson",2),Dl([Y({type:String})],Ol.prototype,"theme",2),Ol=Dl([G("t-size-not-found")],Ol);const El=et`
        /* sign up page div */
        .signup_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: white;
            top: 0;
            background: var(--template-background);
        }
        /* p tag in page */
        .signup_page > p {
            margin: 0px;
            font-size: var(--template-desc-fsize);
            font-family: var(--template-desc-font);
            color: var(--template-desc-color);
        }
        /* title section */
        .signup_page_title {
            display: flex;
            margin-bottom: 10px;
        }

        .signup_page_title p {
            font-size: var(--template-title-fsize);
            font-family: var(--template-title-font);
            color: var(--template-title-color);
            margin: 5px 0px;
        }
        .signup_page_title img {
            margin: 5px 0px 5px 5px;
            height: fit-content;
        }
        /* error message */
        .login_error_msg {
            line-height: normal !important;
            width: 90%;
        }
        /* input section */
        .login_section {
            width: 60%;
            text-align: left;
            margin-top: 5px;
            margin-bottom: 33px;
        }
        .login_section p {
            font-size: var(--template-error-txt-fsize);
            margin: 0px;
            font-family: var(--template-error-txt-font);
        }
        .login_section input {
            margin-top: 15px;
            padding: 5px;
            font-size: var(--template-input-box-fsize);
            background: var(--template-input-box-background);
            color: var(--template-input-box-color);
        }
        /* input mail */
        .login_text {
            width: 100%;
            height: 35px;
            border: var(--template-input-box-border);
            font-size: var(--template-input-box-fsize);
            border-radius: 0px;
        }
        .login_text:focus {
            outline: none;
        }
        /* sign in btn */
        .sign_in_button {
            margin-top: 0%;
            /* padding: 10px 20px; */
            background-color: var(--template-btn-enable-background);
            color: var(--template-btn-color);
            border: var(--template-btn-enable-border);
            width: 186px;
            height: 40px;
            font-size: var(--template-btn-fsize);
            font-family: var(--template-btn-font);
            cursor: pointer;
        }
        .dissable {
            background-color: var(--template-btn-dissable-background) !important;
            border: var(--template-btn-dissable-border) !important;
            pointer-events: none !important;
            cursor: none;
        }
        /* Error message handle */
        .login_error_msg {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        .pass_validation {
            display: flex;
            align-items: center;
            margin: 5px 0px;
        }
        
        .pass_validation p {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        .pass_validation img {
            width: 10px !important;
            height: 16px !important;
            margin-right: 5px;
        }
        
        .errormessage {
            display: flex;
            align-items: center;
            margin: 5px 0px;
        }
        
        .errormessage p {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        
        .hide {
            display: none;
        }
        
        /* footer section */
        
        .main_result_footer {
            /* display: flex;
                        align-content: center;
                        align-items: center; */
            position: absolute;
            width: 70%;
            /* justify-content: space-between; */
            /* background-color:white; */
            bottom: 5%;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 400;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            font-family: var(--template-iconbtn-font);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
        
        @media screen and (max-width: 600px) {
            .login_section {
            width: 75%;
            }
            .main_result_footer {
            width: 80%;
            }
        }
  
    `;var Pl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,Al=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Cl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Pl(e,i,n),n};let jl=class extends ot{constructor(){super()}_backTo(){this.dispatchEvent(new CustomEvent("_signIn",{detail:{issignin:!0}}))}_foundInput(t){let e=this.shadowRoot?.getElementById("username_reg");e.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{4,}.[a-zA-Z]{2,}$/)?this.shadowRoot?.querySelectorAll(".sign_in_button")[0].classList.remove("dissable"):this.shadowRoot?.querySelectorAll(".sign_in_button")[0].classList.add("dissable")}async _forgotPassApi(){this.shadowRoot?.getElementById("signup_error_msg"),this.shadowRoot?.getElementById("username_reg"),(new Zs)._startWaveLoader();let t=this.shadowRoot?.getElementById("username_reg");this.emailId=t.value.trim();let e=this.shadowRoot?.getElementById("username_reg"),i={email:e.value};i=JSON.stringify(i);let o=await(new mi).forgotpassV2(i);if(o)if(o.error_msg){var a=this.shadowRoot?.querySelectorAll(".errormessage")[0];a.classList.remove("hide"),a.querySelector("p").innerHTML=o.error_msg}else{this.shadowRoot?.querySelectorAll(".pass_validation")[0].classList.add("hide");const t={detail:{openVerify:!0,email:this.emailId,pageName:"forgotPass"}};this.dispatchEvent(new CustomEvent("_openVerifyPage",t))}else this.shadowRoot?.querySelectorAll(".pass_validation")[0].classList.remove("hide");(new Zs)._stopWaveLoader()}_signUpPage(){this.dispatchEvent(new CustomEvent("_openpage",{detail:{isoptionpg:!1,isSignUp:!0,isclosePopup:!1}}))}render(){return R`
            <div class="signup_page">
                <div class="signup_page_title">
                    <p>${this.forgotPageData.title}</p>
                </div>
                ${this.forgotPageData.info.map((t,e)=>R`<p>${t}</p>`)}
                <div class="login_section">
                    <input id="username_reg" name="username_reg" class="login_text" type="email" 
                    placeholder="${this.forgotPageData.input.param1_label}"
                    @input=${this._foundInput} 
                    onKeyPress="if(this.value.length==${this.forgotPageData.input.param1_maxlenght})  return false;" required>
                    <div class="pass_validation hide">
                        <p class="signInSection">${this.forgotPageData.sign_up_section.label}
                            <b class="signUp"  @click=${this._signUpPage}>${this.forgotPageData.sign_up_section.sign_inlabel}</b>
                        </p>
                    </div>
                    <div class= "errormessage hide">
                        <p></p>
                    </div>
                </div>
                <button class="sign_in_button dissable" @click=${this._forgotPassApi}>${this.forgotPageData.action.button_label}</button>
                <p id="signup_error_msg" class="login_error_msg"></p> 
            </div>
            

            ${this.forgotPageData.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.forgotPageData.back_nav)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div>
        `}};jl.styles=[El],Al([Y({type:Object})],jl.prototype,"forgotPageData",2),Al([Y({type:String})],jl.prototype,"partnerId",2),Al([Y({type:String})],jl.prototype,"category",2),Al([Y({type:String})],jl.prototype,"productHandle",2),Al([Y({type:String})],jl.prototype,"emailId",2),Al([Y({type:String})],jl.prototype,"emailValid",2),Al([Y({type:String})],jl.prototype,"passValid",2),Al([Y({type:Object})],jl.prototype,"cookieNameJson",2),Al([Y({type:String})],jl.prototype,"theme",2),jl=Al([G("t-forgot-password")],jl);const Rl=et`
    /* footer section */
    .result_prev {
      text-align: center;
      width: 37px;
      height: 37px;
      border-radius: 50%;
      font-size: var(--template-iconbtn-fsize);
      color: var(--template-iconbtn-color);
      border: var(--template-iconbtn-border);
      background: var(--template-iconbtn-background);
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      transition: 0.6s ease;
      user-select: none;
      text-decoration: none;
      cursor: pointer;
      bottom: 0;
      float: left;
    }
    .main_result_footer {
      /* display: flex;
                    align-content: center;
                    align-items: center; */
      position: absolute;
      width: fit-content;
      /* justify-content: space-between; */
      /* background-color:white; */
      bottom: 5%;
      left: 15%;
      /* right: 0; */
      margin: auto;
      z-index: 400;
    }
    /*  */
    .privacy_policy {
      width: 90%;
      text-align: left;
      overflow-y: auto;
      max-height: 85%;
    }
    .privacy_policy::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    .privacy_policy::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    .privacy_policy li {
      font-family: var(--template-privacy-list-font) !important;
      font-size: var(--template-privacy-list-fsize);
      color: var(--template-privacy-list-color);
    }
    /* header section */
    .privacy_policy_head {
      margin-top: 3%;
      font-family: var(--template-privacy-title-font);
      font-size: var(--template-privacy-title-fsize);
      color: var(--template-privacy-title-color);
      margin-bottom: 3%;
    }
    /* Description title */
    .privacy_head {
      font-family: var(--template-privacy-header-font);
      font-size: var(--template-privacy-header-fsize);
      color: var(--template-privacy-header-color);
    }
    /* description */
    .privacy_desc {
      font-family: var(--template-privacy-desc-font);
      font-size: var(--template-privacy-desc-fsize);
      color: var(--template-privacy-desc-color);
      margin-top: 0;
    }
    .privacy_desc > a {
      color: var(--template-hyperlink-color);
    }

    @media screen and (max-width: 600px) {
      .main_result_footer {
        width: 80%;
        left: 0;
        right: 0;
      }
    }
    @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      .main_result_footer {
        bottom: 4%;
      }
      .privacy_policy {
        width: 90%;
        text-align: left;
        overflow-y: auto;
        max-height: 95%;
      }
    }
    @media screen and (max-width: 380px), screen and (max-height: 670px) {
      .main_result_footer {
        bottom: 3%;
      }
    }
  `;var Ll=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Bl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Tl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ll(e,i,n),n};let Vl=class extends ot{constructor(){super(),this.privacyPageData={backarrow:[{back_nav:{type:"cc_button_icon_without_border",icon_url:""}},{back_nav:{type:"cc_button_text_circle",icon_url:""}}]},1==Number("0")?this.privacyPageData={type:"cc_button_icon_without_border",icon_url:""}:this.privacyPageData={type:"cc_button_text_circle",icon_url:"❮"}}_backTo(){var t;t="resetPage"==this.fromToprivacy?{detail:{isSignUp:!1,isAccountInfo:!0}}:{detail:{isSignUp:!0,isAccountInfo:!1}},this.dispatchEvent(new CustomEvent("_backFromPrivacyPage",t))}render(){return R`
      <div class="privacy_policy">
        <div class="privacy_policy_head">${jo.t("privacypolicy.pagetitle")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.desc")}
          <a  href="https://lawsofmotion.com/">${jo.t("privacypolicy.desc.url")}</a> 
          ${jo.t("privacypolicy.desc.afterurl")}
        </p>
        <div class="privacy_head">${jo.t("privacypolicy.title1")}</div>

        <p class="privacy_desc">
          ${jo.t("privacypolicy.title1.desc1")}
        </p>
        <ul>
            <li>
              ${jo.t("privacypolicy.title1.desc1.li1")}
            </li>
            <li>
              ${jo.t("privacypolicy.title1.desc1.li2")}
            </li>
            <li>
              ${jo.t("privacypolicy.title1.desc1.li3")}
            </li>
        </ul>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title1.desc2")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title2")} </div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title2.desc1")} 
        </p>
        <ul>
            <li>${jo.t("privacypolicy.title2.desc1.li1")} </li>
            <li>
              ${jo.t("privacypolicy.title2.desc1.li2")} 
            <!-- <br />and -->
            </li>
            <li>
              ${jo.t("privacypolicy.title2.desc1.li3")} 
            </li>
        </ul>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title2.desc2")} 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title3")} </div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title3.desc1")} 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title4")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title4.desc1")} 
        </p>
        <ul>
            <li>${jo.t("privacypolicy.title4.desc1.li1")} </li>
            <li>${jo.t("privacypolicy.title4.desc1.li2")} </li>
            <li>${jo.t("privacypolicy.title4.desc1.li3")} </li>
        </ul>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title4.desc2")}  
          <a href="http://optout.aboutads.info/">${jo.t("privacypolicy.title4.desc2.url")} </a>. 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title5")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title5.desc1")} 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title6")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title6.desc1")} 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title7")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title7.desc1")} 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.title8")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title8.desc1")} 
        </p>


        <div class="privacy_policy_head">${jo.t("privacypolicy.term.condition.title")}</div>

        <div class="privacy_head">${jo.t("privacypolicy.title9")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.title9.desc1")} 
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section1")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section1.desc1")}
        </p>
        
        <div class="privacy_head">${jo.t("privacypolicy.section2")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section2.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section3")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section3.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section4")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section4.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section5")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section5.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section6")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section6.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section7")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section7.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section8")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section8.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section9")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section9.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section10")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section10.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section11")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section11.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section12")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section12.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section13")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section13.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section14")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section14.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section15")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section15.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section16")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section16.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section17")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section17.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section18")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section18.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section19")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section19.desc1")}
        </p>

        <div class="privacy_head">${jo.t("privacypolicy.section20")}</div>
        <p class="privacy_desc">
          ${jo.t("privacypolicy.section20.desc1")}
        </p>

    </div>

    

    ${this.privacyPageData?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.privacyPageData)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div> 

    
    `}};Vl.styles=[Rl],Bl([Y({type:String})],Vl.prototype,"fromToprivacy",2),Bl([Y({type:Object})],Vl.prototype,"privacyPageData",2),Bl([Y({type:String})],Vl.prototype,"theme",2),Vl=Bl([G("t-privacy-policy")],Vl);const Jl=et`
        /* reset pass page */
        .reset_pass_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            height: inherit;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 0;
            height: 90%;
        }
        /* reset pass title */
        .resetpass_Title {
            margin: 5px 0px;
            font-size: var(--template-title-fsize);
            font-family: var(--template-title-font);
            color: var(--template-title-color);
        }
        /* reset subtitle */
        .resetpass_subTitle {
            margin: 8px 0px;
            font-size: var(--template-subtitle-fsize);
            font-family: var(--template-subtitle-font);
            color: var(--template-subtitle-color);
        }
        /* password hide unhide icon section */
        .eyeButton {
            display: flex;
            border: var(--template-input-box-border);
            margin-top: 3%;
            width: 59%;
            background: var(--template-input-box-background);
        }
        .eyeButton2 {
            display: flex;
            border: var(--template-input-box-border);
            width: 59%;
            background: var(--template-input-box-background);
        }
        .eyeIcon {
            align-self: center;
            display: flex;
            padding: 0 12px;
            width: 20px;
            height: 20px;
        }
        /* .login_text{
                    width:-webkit-fill-available;
                    height: 35px;
                    border: 1px groove;
                    font-size: 15px;
                    border-radius: 0px;
                    font-size: 12px;
                    padding: 5px;
                } */
        /* password section */
        .login_text_password {
            width: -webkit-fill-available;
            height: 35px;
            border-radius: 0px;
            padding: 5px;
            font-size: var(--template-input-box-fsize);
            background: var(--template-input-box-background);
            font-family: var(--template-input-box-font);
            color: var(--template-input-box-color);
            border: none !important;
        }
        
        .login_text:focus {
            outline: none;
        }
        /* password validation section */
        .pass_validation {
            display: flex;
            align-items: center;
            margin: 5px 0px;
        }
        .pass_validation p {
            color: var(--template-password-validation-dissable-color);
            font-family: var(--template-password-validation-font);
            font-size: var(--template-password-validation-fsize);
            margin: 0px;
        }
        .pass_validation img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
        }
        .login_section {
            width: 60%;
            text-align: left;
            margin-top: 5px;
        }
        /* .login_section p{
                    font-size:11px;
                    margin: 0px;
                    font-family: "Avenir";
                } */
        .login_section input {
            font-size: var(--template-input-box-fsize);
            background: var(--template-input-box-background);
            font-family: var(--template-input-box-font);
            margin-top: 15px;
            padding: 5px;
        }
        .login_section .create_pass {
            font-size: var(--template-input-box-fsize);
            background: var(--template-input-box-background);
            font-family: var(--template-input-box-font);
            margin-top: 0;
            padding: 5px;
            border: 0;
        }
        /* sign in btn */
        .sign_in_button {
            margin-top: 4%;
            /* padding: 10px 20px; */
            background-color: var(--template-btn-enable-background);
            color: var(--template-btn-color);
            border: var(--template-btn-enable-border);
            font-size: var(--template-btn-fsize);
            font-family: var(--template-btn-font);
            width: 186px;
            height: 40px;
            cursor: pointer;
        }
        .dissable {
            background-color: var(--template-btn-dissable-background) !important;
            border: var(--template-btn-dissable-border) !important;
            pointer-events: none !important;
            cursor: none;
        }
        
        /* .login_error_msg{
                    color:red;
                    font-size: 14px;
                    color:#C80000;
                } */
        .pass_validation {
            display: flex;
            align-items: center;
            margin: 5px 0px;
        }
        .pass_validation p {
            color: #a1a0a0;
        }
        .email_valid {
            /* display:none; */
            visibility: hidden;
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        .email_valid p {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        .email_valid img {
            width: 10px !important;
            height: 16px !important;
            margin-right: 5px;
        }
        .pass_validation img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        /* footer section */
        .main_result_footer {
            /* display: flex;
                    align-content: center;
                    align-items: center; */
            position: absolute;
            width: 70%;
            /* justify-content: space-between; */
            /* background-color:white; */
            bottom: 5%;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 400;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: 18px;
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
        /* error message */
        .login_error_msg {
            visibility: hidden;
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
            margin-bottom: 5px;
            margin-top: 5px;
        }
        .disablepassValidation {
            color: var(--template-password-validation-dissable-color) !important;
        }
        .enableValidation {
            color: var(--template-password-validation-enable-color) !important;
        }
        .validValidation {
            color: var(--template-password-validation-valid-color) !important;
        }
        
        @media screen and (max-width: 600px) {
            .main_result_footer {
            width: 80%;
            }
        
            .eyeButton {
            width: 70%;
            }
            .eyeButton2 {
            width: 70%;
            }
            .login_section {
            width: 70%;
            }
            .otpTitle {
            width: 70% !important;
            }
            .inputs_block {
            width: 70%;
            }
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .eyeButton {
            width: 70%;
            }
            .eyeButton2 {
            width: 70%;
            }
            .login_section {
            width: 70%;
            }
            .otpTitle {
            width: 70% !important;
            }
            .inputs_block {
            width: 70%;
            }
        }
        @media screen and (max-width: 480px) {
        }
  
    `;var Fl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,Ml=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Ul(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Fl(e,i,n),n};let Hl=class extends ot{constructor(){super(),this.otpMaxLength=1}_togglePasswordAndImage(){const t=this.shadowRoot?.getElementById("password_reg"),e=this.shadowRoot?.getElementById("eyeImage");"password"===t.type?(t.type="text",e.src=this.passwordShowImg):(t.type="password",e.src=this.passwordShowImg)}_togglePasswordAndImageReset(){const t=this.shadowRoot?.getElementById("password2"),e=this.shadowRoot?.getElementById("eyeImagereset");"password"===t.type?(t.type="text",e.src=this.passwordShowImg):(t.type="password",e.src=this.passwordShowImg)}containsEmoji(t){return/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}(?:\p{Emoji_Modifier})?|\p{Emoji}\u200D\p{Emoji_Modifier_Base}(?:\p{Emoji_Modifier})?)/gu.test(t)}_foundInput(t){t.target.id;let e=this.shadowRoot?.getElementById("password_reg");this.shadowRoot?.getElementById("login_error_msg");var i=e.value.trim();let o=this.shadowRoot?.querySelectorAll(".pass_valid");var a=new RegExp("[A-Z]"),n=new RegExp("[a-z]"),s=new RegExp("[!@#$%^&*{}<>?();,.'?:|()_-`\"]"),r=new RegExp("[0-9]");if(""!=e.value){if(e.checkValidity()){let t=o[2].lastChild;t.classList.remove("disablepassValidation"),t.classList.remove("enableValidation"),t.classList.add("validValidation"),o[2].firstElementChild.src=this.validationDoneImg}else o.forEach(t=>{let e=t.lastChild;e.classList.remove("disablepassValidation"),e.classList.add("enableValidation"),e.classList.remove("validValidation"),t.firstElementChild.src=this.validationWrongImg});if(" "!=e.value.charAt(0))if(a.test(i)&&n.test(i)){let t=o[0].lastChild;t.classList.remove("disablepassValidation"),t.classList.remove("enableValidation"),t.classList.add("validValidation"),o[0].firstElementChild.src=this.validationDoneImg}else{let t=o[0].lastChild;t.classList.remove("disablepassValidation"),t.classList.add("enableValidation"),t.classList.remove("validValidation"),o[0].firstElementChild.src=this.validationWrongImg}else{let t=o[0].lastChild;t.classList.remove("disablepassValidation"),t.classList.add("enableValidation"),t.classList.remove("validValidation"),o[0].firstElementChild.src=this.validationDoneImg}if(s.test(i)&&r.test(i)){let t=o[1].lastChild;t.classList.remove("disablepassValidation"),t.classList.remove("enableValidation"),t.classList.add("validValidation"),o[1].firstElementChild.src=this.validationDoneImg}else{let t=o[1].lastChild;t.classList.remove("disablepassValidation"),t.classList.add("enableValidation"),t.classList.remove("validValidation"),o[1].firstElementChild.src=this.validationWrongImg}" "!=e.value.charAt(0)?a.test(i)&&n.test(i)&&s.test(i)&&r.test(i)&&e.checkValidity()?(this.newPass=e.value,this._checkValue()):(this.newPass="",this._checkValue()):this.newPass="",this._checkValue()}else o.forEach(t=>{let e=t.lastChild;e.classList.add("disablepassValidation"),e.classList.remove("enableValidation"),e.classList.remove("validValidation"),t.firstElementChild.src=this.validationDissableImg}),this.newPass="",this._checkValue()}_foundconformPass(t){this.shadowRoot?.getElementById("password_reg");let e=this.shadowRoot?.getElementById("password2");e instanceof HTMLInputElement&&(e.value.length>7?(this.conformPass=e.value,this._checkValue()):(this.conformPass="",this._checkValue()))}_backTo(){this.dispatchEvent(new CustomEvent("_openForgot",{detail:{openforgotPage:!0}}))}_checkValue(){""!=this.newPass&&""!=this.conformPass&&null!=this.newPass&&null!=this.conformPass?this._saveBtnShow("enable"):this._saveBtnShow("dissable")}_saveBtnShow(t){"enable"==t?this.shadowRoot?.querySelectorAll(".verifyBtn")[0].classList.remove("dissable"):this.shadowRoot?.querySelectorAll(".verifyBtn")[0].classList.add("dissable")}async _savePassword(){let t=this.shadowRoot.getElementById("login_error_msg");if(this.containsEmoji(this.newPass.trim()))t.style.visibility="visible",t.innerHTML=jo.t("common.error.password.invalid");else if(this.containsEmoji(this.conformPass.trim()))t.style.visibility="visible",t.innerHTML=jo.t("common.error.password.invalid");else if(this.newPass==this.conformPass){t.style.visibility="hidden",(new Zs)._startWaveLoader();var e={email:this.emailId,confirmation_code:this.verifyCode,password:this.newPass};let i=JSON.stringify(e),o=await(new mi).resetpasswordV2(i);if(null!=o||""!=o)if(o.error_msg)if((new Zs)._stopWaveLoader(),"User verification code is not matching."==o.error_msg){const t={detail:{openVerify:!0,email:this.emailId,pageName:"forgotPass",response:o.error_msg}};this.dispatchEvent(new CustomEvent("_openVerifyPage",t))}else if("Email confirmation token has expired."==o.error_msg){const t={detail:{openVerify:!0,email:this.emailId,pageName:"forgotPass",response:o.error_msg}};this.dispatchEvent(new CustomEvent("_openVerifyPage",t))}else t.style.visibility="visible",t.innerHTML=o.error_msg;else(new Zs)._stopWaveLoader(),this._afterSuccessfullReset(o);else(new Zs)._stopWaveLoader()}else t.style.visibility="visible",t.innerHTML=jo.t("resetpass.error.passwordmatch")}_afterSuccessfullReset(t){(new Zs)._stopWaveLoader();this.dispatchEvent(new CustomEvent("_openResetSuccess",{detail:{isReset:!0}}))}render(){var t=JSON.parse(this.dynamicSourceVar);return"dark"==this.theme?this.validationDoneImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DONE_DARK:this.validationDoneImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DONE_LIGHT,"dark"==this.theme?this.validationDissableImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DISABLE_DARK:this.validationDissableImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_DISABLE_LIGHT,"dark"==this.theme?this.validationWrongImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_WRONG_DARK:this.validationWrongImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_VALIDATION_WRONG_LIGHT,"dark"==this.theme?this.passwordHideImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_HIDE_DARK:this.passwordHideImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_HIDE_LIGHT,"dark"==this.theme?this.passwordShowImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_SHOW_DARK:this.passwordShowImg="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+t.IMAGE_PASSWORD_SHOW_LIGHT,R`
            <div class="reset_pass_page">
                <p class="resetpass_Title">${this.resetPassword.title}</p>
                <p class="resetpass_subTitle">${this.resetPassword.subtitle} <b> ${this.emailId}</b></p>
                <div class="eyeButton" >
                    <input id="password_reg" value="" name="password_reg" class="login_text login_text_password create_pass" type="password" minlength="8"
                    placeholder="${this.resetPassword.input.param1_label}" 
                    @input=${this._foundInput}
                    oninput="javascript: if (this.value.length >${this.resetPassword.input.param1_maxlenght}) this.value = this.value.slice(0, ${this.resetPassword.input.param1_maxlenght});">
                    <span class="eyeIcon" @click=${this._togglePasswordAndImage}><img id="eyeImage" src=" ${this.passwordHideImg}" /></span>
                </div>

                <div class="login_section">
                    <div class="pass_validation pass_valid">
                        <img src= ${this.validationDissableImg}>
                        <p>${this.resetPassword.validation_text.passlabel1}</p></div>
                    <div class="pass_validation pass_valid">
                        <img src= ${this.validationDissableImg}> 
                        <p>${this.resetPassword.validation_text.passlabel2}</p></div>
                    <div class="pass_validation pass_valid">
                        <img src= ${this.validationDissableImg}>
                        <p>${this.resetPassword.validation_text.passlabel3}</p></div>
                </div>
             
                <div class="eyeButton2" >
                    <input id="password2" value="" name="password" class="login_text login_text_password" type="password" minlength="8"
                    placeholder="${this.resetPassword.input.param2_label}" 
                    @input=${this._foundconformPass}
                    oninput="javascript: if (this.value.length >${this.resetPassword.input.param1_maxlenght}) this.value = this.value.slice(0, ${this.resetPassword.input.param1_maxlenght});">
                    <span class="eyeIcon" @click=${this._togglePasswordAndImageReset}><img id="eyeImagereset" src= "${this.passwordHideImg}" /></span>
                </div>
            
                <p id="login_error_msg" class="login_error_msg">Error</p>

                <button class="sign_in_button dissable verifyBtn"  @click=${t=>this._savePassword()}>${this.resetPassword.action.button_label}</button>
            </div>
            

            ${this.resetPassword.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.resetPassword.back_nav)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div> 
        `}};Hl.styles=[Jl],Ml([Y({type:Object})],Hl.prototype,"resetPassword",2),Ml([Y({type:Number})],Hl.prototype,"otpValue",2),Ml([Y({type:String})],Hl.prototype,"newPass",2),Ml([Y({type:String})],Hl.prototype,"conformPass",2),Ml([Y({type:String})],Hl.prototype,"emailId",2),Ml([Y({type:String})],Hl.prototype,"otpMaxLength",2),Ml([Y({type:String})],Hl.prototype,"verifyCode",2),Ml([Y({type:Object})],Hl.prototype,"cookieNameJson",2),Ml([Y({type:String})],Hl.prototype,"theme",2),Ml([Y({type:String})],Hl.prototype,"validationDissableImg",2),Ml([Y({type:String})],Hl.prototype,"validationDoneImg",2),Ml([Y({type:String})],Hl.prototype,"validationWrongImg",2),Ml([Y({type:String})],Hl.prototype,"dynamicSourceVar",2),Ml([Y({type:String})],Hl.prototype,"passwordShowImg",2),Ml([Y({type:String})],Hl.prototype,"passwordHideImg",2),Hl=Ml([G("t-reset-password")],Hl);const Wl=et`
        /* account page main div */
        .account_info_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            height: 100%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 4%;
        }
        /* p tag in page */
        .account_info_page > p {
            margin-top: 22px;
            /* font-family: "Avenir Light"; */
            /* font-size: 12px; */
        }
        /* page title section */
        .account_info_title {
            display: flex;
            margin-left: 15px;
        }
        
        .account_info_title p {
            margin: 5px 0px;
            font-family: var(--template-title-font);
            font-size: var(--template-title-fsize);
            color: var(--template-title-color);
        }
        /* input section */
        .input_section {
            width: 60%;
            text-align: left;
            margin-top: 5px;
            margin-bottom: 33px
        }
        
        .input_section input {
            font-size: var(--template-input-box-fsize);
            font-family: var(--template-input-box-font);
            margin-top: 15px;
            padding: 5px;
        }
        /* input text and email  */
        .login_text {
            width: -webkit-fill-available;
            height: 35px;
            border: var(--template-input-box-border);
            font-size: var(--template-input-box-fsize);
            background: var(--template-input-box-background);
            font-family: var(--template-input-box-font);
            color: var(--template-input-box-color);
            border-radius: 0px;
        }
        /* password input */
        .login_text_password {
            width: -webkit-fill-available;
            height: 35px;
            /* font-size: 15px; */
            border: none !important;
            border-radius: 0px;
        }
        
        .login_text:focus {
            outline: none;
        }
        /* Bottom Info */
        .bottom_info_section {
            position: relative;
            margin-top: 5%;
        }
        
        .bottom_info_section p {
            margin: 0;
            font-size: var(--template-createpass-privacypolicy-fsize);
            color: var(--template-createpass-privacypolicy-color);
            font-family: var(--template-createpass-privacypolicy-font);
        }
        
        .bottom_info_section u {
            cursor: pointer;
        }
        /* footer - prev btn section */
        .main_result_footer {
                /* display: flex;
                align-content: center;
                align-items: center; */
            position: absolute;
            width: fit-content;
                /* justify-content: space-between; */
                /* background-color:white; */
            bottom: 5%;
            left: 15%;
                /* right: 0; */
            margin: auto;
            z-index: 400;
        }
        
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
            
            /* ResetPass */
        .resetPassSection {
            margin: 0px;
            color: var(--template-before-hyperlink-color);
            font-family: var(--template-before-hyperlink-font);
            font-size: var(--template-before-hyperlink-fsize);
            text-decoration: underline;
            cursor: pointer;
        }
        
        .disabled {
            pointer-events: none;
        }
        
        .hide {
            display: none;
        }
        
        .hidden {
                /* display: none; */
            visibility: hidden;
        }
        /* validation section */
        .email_valid {
            display: flex;
            align-items: center;
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
        }
        
        .email_valid p {
            color: var(--template-error-txt-color);
            font-family: var(--template-error-txt-font);
            font-size: var(--template-error-txt-fsize);
            margin: 5px 0px;
            ;
        }
        
        .email_valid img {
            width: 10px !important;
            height: 16px !important;
            margin-right: 5px;
        }
        
        @media screen and (max-width: 600px) {
            .bottom_info_section {
                position: absolute;
                bottom: 5%;
            }
        
            .main_result_footer {
                width: 80%;
                left: 0;
                right: 0;
            }
            /* .bottom_info_section{
                bottom: 12%;
            } */
            .input_section {
                width: 80%
            }
        
            .account_info_page {
                height: 70%;
                top: 10%;
            }
        
            .createPassInfo {
                height: 100vh;
                top: -9%;
            }
        
            .pass_info {
                width: 85%;
                height: 20%;
            }
        }
        
        @media only screen and (min-width: 768px) {
            .account_info_page {
                height: 96%;
            }
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
                bottom: 4%;
            }
        
            .input_section {
                width: 75%
            }
        }
        
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .bottom_info_section {
                bottom: 3% !important;
            }
        
            .main_result_footer {
                
            }
        }
    `;var Ql=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,Kl=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Gl(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ql(e,i,n),n};let Yl=class extends ot{constructor(){super()}_foundInput(t){t.target.id}_backTo(){const t={detail:{isResult:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_resultPgae",t))}async __resetPass(){(new Zs)._startWaveLoader(),this.shadowRoot?.getElementById("username_reg");let t={email:this.emailId};t=JSON.stringify(t);let e=await(new mi).forgotpassV2(t);if(e)if(e.error_msg)(new Zs)._stopWaveLoader();else{const t={detail:{openVerify:!0,email:this.emailId,pageName:"accountInfo"}};this.dispatchEvent(new CustomEvent("_openVerifyPage",t))}(new Zs)._stopWaveLoader()}_policyOpen(){var t;t={detail:{isprivacypage:!0,isresetpage:!0}},this.dispatchEvent(new CustomEvent("_privacyPage",t))}async _getUserfData(){(new Zs)._startWaveLoader(),this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);let t=await(new mi).getUserDataV2(this.loggedIn),e=this.shadowRoot?.querySelectorAll(".email_valid"),i=this.shadowRoot?.querySelectorAll(".emailError");const o=e[0];o.classList.add("hidden");const a=i[0];if(t)if(t.error_msg)o.classList.remove("hidden"),a.innerHTML=t.error_msg;else{let e=this.shadowRoot?.getElementById("first_name"),i=this.shadowRoot?.getElementById("last_name"),o=this.shadowRoot?.getElementById("email_id");this.shadowRoot?.getElementById("password"),this.emailId=t.email,e.value=t.first_name,i.value=t.last_name,o.value=t.email}(new Zs)._stopWaveLoader()}render(){return R`
            <div class="account_info_page">
                <div class="account_info_title">
                    <p>${this.forgotPageData.title}</p>
                </div>
                <div class="input_section">
                    <input id="first_name" name="first_name" class="login_text disabled" type="text" 
                    placeholder="${this.forgotPageData.input.param1_label}"
                    @input=${this._foundInput} 
                    onKeyPress="if(this.value.length==${this.forgotPageData.input.param1_maxlenght})  return false;" required>
                    
                    <input id="last_name" name="last_name" class="login_text disabled" type="text" 
                    placeholder="${this.forgotPageData.input.param2_label}"
                    @input=${this._foundInput} 
                    onKeyPress="if(this.value.length==${this.forgotPageData.input.param2_maxlenght})  return false;" required>

                    <input id="email_id" name="email_id" class="login_text disabled"  type="email" 
                    placeholder="${this.forgotPageData.input.param3_label}"
                    @input=${this._foundInput} 
                    onKeyPress="if(this.value.length==${this.forgotPageData.input.param3_maxlenght})  return false;" required>

                    <input id="password" name="password" class="login_text disabled hide" type="password" 
                    placeholder="${this.forgotPageData.input.param4_label}"
                    @input=${this._foundInput} 
                    onKeyPress="if(this.value.length==${this.forgotPageData.input.param4_maxlenght})  return false;" required>
                </div>

                <div class="email_valid hidden">
                        <p class="emailError">a</p>
                </div>

                <p class="resetPassSection"><b class="signIn"   @click=${t=>this.__resetPass()} >${this.forgotPageData.action.button_label}</b>
                </p>
            
                <div class="bottom_info_section">
                        <!-- <p><u >${this.forgotPageData.bootom_info.underlinelabel1}</u></p> -->
                        <p><u  @click=${t=>this._policyOpen()}>${this.forgotPageData.bootom_info.underlinelabel2}</u></p>
                </div>
            </div>
        
            

            ${this.forgotPageData.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.forgotPageData.back_nav)} @backClick=${this._backTo} theme =${this.theme}> </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div>
        `}firstUpdated(t){this._getUserfData()}};Yl.styles=[Wl],Kl([Y({type:Object})],Yl.prototype,"forgotPageData",2),Kl([Y({type:String})],Yl.prototype,"fitSize",2),Kl([Y({type:String})],Yl.prototype,"emailId",2),Kl([Y({type:String})],Yl.prototype,"envCookieFlag",2),Kl([Y({type:Object})],Yl.prototype,"cookieNameJson",2),Kl([Y({type:String})],Yl.prototype,"loggedIn",2),Kl([Y({type:String})],Yl.prototype,"partnerId",2),Kl([Y({type:String})],Yl.prototype,"productHandle",2),Kl([Y({type:String})],Yl.prototype,"productCategory",2),Kl([Y({type:String})],Yl.prototype,"theme",2),Yl=Kl([G("t-account_info")],Yl);const Zl=et`
        /* hepl page main div */
        .help_center_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            height: 100%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 4%;
        }
        .help_center_page > p {
            margin-top: 22px;
        }
        .help_center_title {
            display: flex;
            margin-top: 5%;
        }
        .help_center_title p {
            margin: 5px 0px;
            font-family: var(--template-title-font);
            font-size: var(--template-title-fsize);
            color: var(--template-title-color);
        }
        .help_center_subtitle p {
            margin: 5px 0px;
            font-family: var(--template-subtitle-font);
            font-size: var(--template-subtitle-fsize);
            color: var(--template-subtitle-color);
        }
        /* footer section */
        .main_result_footer {
            /* display: flex;
                align-content: center;
                align-items: center; */
            position: absolute;
            width: fit-content;
            /* justify-content: space-between; */
            /* background-color:white; */
            bottom: 5%;
            left: 15%;
            /* right: 0; */
            margin: auto;
            z-index: 400;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
        /*  help option section  */
        .result_options_section {
            width: 50%;
            margin-top: 5%;
        }
        .result_option_border {
            border: var(--template-bordered-options-border);
            padding: 3px 10px 3px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            cursor: pointer;
        }
        .result_option_txt {
            color: var(--template-bordered-options-text-color);
            font-size: var(--template-bordered-options-txt-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        .result_option_icon {
            color: var(--template-bordered-options-icon-color);
            font-size: var(--template-bordered-options-icon-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        /* contact info alert */
        .contactInfo {
            display: none;
            position: absolute;
            align-items: center;
            justify-content: center;
            width: 100%;
            z-index: 99999;
            height: 92vh;
            top: -11%;
            background: var(--template-info-pop-up-sidebackground);
        }
        .contactNo {
            background-color: var(--template-info-pop-up-background);
            width: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .contactNo p {
            font-size: var(--template-info-pop-up-txt-fsize);
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        
        @media screen and (max-width: 600px) {
            .main_result_footer {
            width: 80%;
            left: 0;
            right: 0;
            }
        
            .help_center_page {
            height: 82%;
            top: 6%;
            }
            .result_options_section {
            width: 80%;
            margin-top: 10%;
            }
        }
        
        @media only screen and (min-width: 768px) {
            .help_center_page {
            height: 96%;
            }
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
            bottom: 4%;
            }
        }
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .main_result_footer {
            
            }
        }  
    `;var Xl=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,ec=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?tc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Xl(e,i,n),n};let ic=class extends ot{constructor(){super()}__gotoGmail(t){window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+this.helpCenterPageData.emailid)}__gotoCall(t){let e=navigator.userAgent,i=/android|iphone|kindle|ipad/i.test(e);const o=this.shadowRoot?.querySelector("#contactInfo");i?window.open("tel:"+this.helpCenterPageData.contactno):o.style.display="flex"}_hidecallInfo(){const t=this.shadowRoot?.querySelector("#contactInfo");t.style.display="none"}__gotoFaqPage(t){const e={detail:{isFaq:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_faqPage",e))}_backTo(){const t={detail:{isResult:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_resultPgae",t))}render(){return R`
            <div class="help_center_page">
                <div class="help_center_title">
                    <p>${this.helpCenterPageData.title}</p>
                </div>
                <div class="help_center_subtitle">
                    <p>${this.helpCenterPageData.subtitle}</p>
                </div>  
                <div class="result_options_section">
                        <div class="result_option_border" @click=${t=>this.__gotoGmail(t)} target="_blank" >
                            <a class="result_option_txt" >${this.helpCenterPageData.link1_label}</a>
                            <a  href="javascript:void(0);" class="result_option_icon">❯</a>
                        </div>
                        <div class="result_option_border" @click=${t=>this.__gotoCall(t)}>
                            <a  href="javascript:void(0);" class="result_option_txt" >${this.helpCenterPageData.link2_label}</a>
                            <a  href="javascript:void(0);" class="result_option_icon">❯</a>
                        </div>
                        <div class="result_option_border" @click=${t=>this.__gotoFaqPage(t)}>
                            <a  href="javascript:void(0);" class="result_option_txt">${this.helpCenterPageData.link3_label}</a>
                            <a  href="javascript:void(0);" class="result_option_icon">❯</a>
                        </div>
                </div>
            </div>
            <div class="contactInfo" id="contactInfo" @click=${t=>this._hidecallInfo()}>
                    <div class="contactNo">
                    <p> ${this.helpCenterPageData.contactno} </p>
                    </div>
            </div>
             

            ${this.helpCenterPageData.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.helpCenterPageData.back_nav)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div>
        `}};ic.styles=[Zl],ec([Y({type:Object})],ic.prototype,"helpCenterPageData",2),ec([Y({type:String})],ic.prototype,"fitSize",2),ec([Y({type:String})],ic.prototype,"theme",2),ic=ec([G("t-help-center")],ic);const oc={"signin.title":"Sign In","signin.input.param1_label":"E-MAIL ADDRESS",Password:"PASSWORD","signin.action.button_label":"SAVE PROFILE","qiidgetele.bestfitsize":"Your best fit:","qiidgetele.Size":"Size","qiidgetele.button":"Find my fit","inputalert.pleaseenter":"Please enter a","inputalert.between":"between","inputalert.and":"and","inputalert.invalid_brand":"Invalid Brand","inputalert.invalid_size":"Invalid Size","resetpass.error.passwordmatch":"Create password and confirm password do not match.","sigin.error.email":"Please enter a valid email address.","signup.error.firstname.invalid":"The first name is invalid.","signup.error.lastname.invalid":"The last name is invalid.","signup.error.password.char":"The password must contain 8 characters.","signup.error.password.validation":"Please enter a password which is atleast 8 characters long including 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special character.","common.error.password.invalid":"Emojis are not allowed in this field.","verify.otp.retry":"Retry After","bcimg.button.upload":"UPLOAD","bcimg.button.reupload":"REUPLOAD","privacypolicy.pagetitle":"Privacy Policy","privacypolicy.desc":"This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from","privacypolicy.desc.url":"https://lawsofmotion.com/","privacypolicy.desc.afterurl":" (the “Site”).","privacypolicy.title1":"PERSONAL INFORMATION WE COLLECT","privacypolicy.title1.desc1":"When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP  address, time zone, and some of the cookies that are installed on your  device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.We collect Device Information using the following technologies:","privacypolicy.title1.desc1.li1":"“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.","privacypolicy.title1.desc1.li2":"“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.","privacypolicy.title1.desc1.li3":"“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.","privacypolicy.title1.desc2":'Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information”. "Text Marketing and notifications (if applicable): By entering your phone number in the checkout and initializing a purchase, you agree that we may send you text notifications (for your order, including abandoned cart reminders) and text marketing offers. Text marketing messages will not exceed 10 per month. You can unsubscribe from further text messages by replying STOP. Message and data rates may apply. When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.',"privacypolicy.title2":"HOW DO WE USE YOUR PERSONAL INFORMATION?","privacypolicy.title2.desc1":"We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:","privacypolicy.title2.desc2.li1":"Communicate with you;","privacypolicy.title2.desc1.li2":"Screen our orders for potential risk or fraud; and","privacypolicy.title2.desc1.li3":" When in line with the preferences you have shared with us, provide you  with information or advertising relating to our products or services.","privacypolicy.title2.desc2":" We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).","privacypolicy.title3":"SHARING YOUR PERSONAL INFORMATION","privacypolicy.title3.desc1":" We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.","privacypolicy.title4":"BEHAVIORAL ADVERTISING","privacypolicy.title4.desc1":"As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.You can opt out of targeted advertising by using the links below:","privacypolicy.title4.desc2.li1":"Facebook: https://www.facebook.com/settings/?tab=ads","privacypolicy.title4.desc1.li2":"Google: https://www.google.com/settings/ads/anonymous","privacypolicy.title4.desc1.li3":"Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads","privacypolicy.title4.desc2":"Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: ","privacypolicy.title4.desc2.url":"http://optout.aboutads.info/","privacypolicy.title5":"DO NOT TRACK","privacypolicy.title5.desc1":"Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.","privacypolicy.title6":"YOUR RIGHTS","privacypolicy.title6.desc1":" If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.","privacypolicy.title7":"DATA RETENTION","privacypolicy.title7.desc1":"When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.CHANGESWe may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.","privacypolicy.title8":"CONTACT US","privacypolicy.title8.desc1":"For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at hello@lawsofmotion.com or by mail using the details provided below:  <br> Laws of MotionLaws of Motion, 175 Varick St. New York NY 10014, United States","privacypolicy.term.condition.title":"Terms & Conditions","privacypolicy.title9":"OVERVIEW","privacypolicy.title9.desc1":"This website is operated by Laws of Motion. Throughout the site, the terms “we”, “us” and “our” refer to Laws of Motion. Laws of Motion offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.","privacypolicy.section1":"SECTION 1 - ONLINE STORE TERMS","privacypolicy.section1.desc1":"By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).You must not transmit any worms or viruses or any code of a destructive nature.A breach or violation of any of the Terms will result in an immediate termination of your Services.","privacypolicy.section2":"SECTION 2 - GENERAL CONDITIONS","privacypolicy.section2.desc1":"We reserve the right to refuse service to anyone for any reason at any time.You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.","privacypolicy.section3":"SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION","privacypolicy.section3.desc1":"We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.","privacypolicy.section4":"SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES","privacypolicy.section4.desc1":"Prices for our products are subject to change without notice.We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.","privacypolicy.section5":"SECTION 5 - PRODUCTS OR SERVICES (if applicable)","privacypolicy.section5.desc1":"Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.","privacypolicy.section6":"SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION","privacypolicy.section6.desc1":"We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.For more detail, please review our Returns Policy.","privacypolicy.section7":"SECTION 7 - OPTIONAL TOOLS","privacypolicy.section7.desc1":"We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.","privacypolicy.section8":"SECTION 8 - THIRD-PARTY LINKS","privacypolicy.section8.desc1":"Certain content, products and services available via our Service may include materials from third-parties.Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.","privacypolicy.section9":"SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS","privacypolicy.section9.desc1":"If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, comments), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.","privacypolicy.section10":"SECTION 10 - PERSONAL INFORMATION","privacypolicy.section10.desc1":" Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.","privacypolicy.section11":"SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS","privacypolicy.section11.desc1":"Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.","privacypolicy.section12":"SECTION 12 - PROHIBITED USES","privacypolicy.section12.desc1":"In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.","privacypolicy.section13":"SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY","privacypolicy.section13.desc1":"We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided as is and as available for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.In no case shall Laws of Motion, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.","privacypolicy.section14":"SECTION 14 - INDEMNIFICATION","privacypolicy.section14.desc1":"You agree to indemnify, defend and hold harmless Laws of Motion and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.","privacypolicy.section15":"SECTION 15 - SEVERABILITY","privacypolicy.section15.desc1":"In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.","privacypolicy.section16":"SECTION 16 - TERMINATION","privacypolicy.section16.desc1":"The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).","privacypolicy.section17":"SECTION 17 - ENTIRE AGREEMENT","privacypolicy.section17.desc1":"The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.","privacypolicy.section18":"SECTION 18 - GOVERNING LAW","privacypolicy.section18.desc1":"These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United States.","privacypolicy.section19":"SECTION 19 - CHANGES TO TERMS OF SERVICE","privacypolicy.section19.desc1":"You can review the most current version of the Terms of Service at any time at this page.We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.","privacypolicy.section20":"SECTION 20 - CONTACT INFORMATION","privacypolicy.section20.desc1":"Questions about the Terms of Service should be sent to us at hello@lawsofmotion.com."},ac={"signin.title":"लॉगिन करा",Password:"पासवर्ड","signin.input.param1_label":"ई-मेल पत्ता","signin.action.button_label":"लॉगिन","qiidgetele.bestfitsize":"Your best fit:","qiidgetele.Size":"Size","qiidgetele.button":"Find my fit","inputalert.pleaseenter":"Please enter a","inputalert.between":"between","inputalert.and":"and","inputalert.invalid_brand":"Invalid Brand","inputalert.invalid_size":"Invalid Size","resetpass.error.passwordmatch":"Create password and confirm password do not match.","sigin.error.email":"Please enter a valid email address.","signup.error.firstname.invalid":"The first name is invalid.","signup.error.lastname.invalid":"The last name is invalid.","signup.error.password.char":"The password must contain 8 characters.","signup.error.password.validation":"Please enter a password which is atleast 8 characters long including 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special character.","common.error.password.invalid":"Emojis are not allowed in the password field.","verify.otp.retry":"Retry After","bcimg.button.upload":"UPLOAD","bcimg.button.reupload":"REUPLOAD","privacypolicy.pagetitle":"Privacy Policy","privacypolicy.desc":"This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from","privacypolicy.desc.url":"https://lawsofmotion.com/","privacypolicy.desc.afterurl":" (the “Site”).","privacypolicy.title1":"PERSONAL INFORMATION WE COLLECT","privacypolicy.title1.desc1":"When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP  address, time zone, and some of the cookies that are installed on your  device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.We collect Device Information using the following technologies:","privacypolicy.title1.desc1.li1":"“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.","privacypolicy.title1.desc1.li2":"“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.","privacypolicy.title1.desc1.li3":"“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.","privacypolicy.title1.desc2":'Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information”. "Text Marketing and notifications (if applicable): By entering your phone number in the checkout and initializing a purchase, you agree that we may send you text notifications (for your order, including abandoned cart reminders) and text marketing offers. Text marketing messages will not exceed 10 per month. You can unsubscribe from further text messages by replying STOP. Message and data rates may apply. When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.',"privacypolicy.title2":"HOW DO WE USE YOUR PERSONAL INFORMATION?","privacypolicy.title2.desc1":"We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:","privacypolicy.title2.desc2.li1":"Communicate with you;","privacypolicy.title2.desc1.li2":"Screen our orders for potential risk or fraud; and","privacypolicy.title2.desc1.li3":" When in line with the preferences you have shared with us, provide you  with information or advertising relating to our products or services.","privacypolicy.title2.desc2":" We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).","privacypolicy.title3":"SHARING YOUR PERSONAL INFORMATION","privacypolicy.title3.desc1":" We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.","privacypolicy.title4":"BEHAVIORAL ADVERTISING","privacypolicy.title4.desc1":"As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.You can opt out of targeted advertising by using the links below:","privacypolicy.title4.desc2.li1":"Facebook: https://www.facebook.com/settings/?tab=ads","privacypolicy.title4.desc1.li2":"Google: https://www.google.com/settings/ads/anonymous","privacypolicy.title4.desc1.li3":"Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads","privacypolicy.title4.desc2":"Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: ","privacypolicy.title4.desc2.url":"http://optout.aboutads.info/","privacypolicy.title5":"DO NOT TRACK","privacypolicy.title5.desc1":"Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.","privacypolicy.title6":"YOUR RIGHTS","privacypolicy.title6.desc1":" If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.","privacypolicy.title7":"DATA RETENTION","privacypolicy.title7.desc1":"When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.CHANGESWe may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.","privacypolicy.title8":"CONTACT US","privacypolicy.title8.desc1":"For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at hello@lawsofmotion.com or by mail using the details provided below:  <br> Laws of MotionLaws of Motion, 175 Varick St. New York NY 10014, United States","privacypolicy.term.condition.title":"Terms & Conditions","privacypolicy.title9":"OVERVIEW","privacypolicy.title9.desc1":"This website is operated by Laws of Motion. Throughout the site, the terms “we”, “us” and “our” refer to Laws of Motion. Laws of Motion offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.","privacypolicy.section1":"SECTION 1 - ONLINE STORE TERMS","privacypolicy.section1.desc1":"By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).You must not transmit any worms or viruses or any code of a destructive nature.A breach or violation of any of the Terms will result in an immediate termination of your Services.","privacypolicy.section2":"SECTION 2 - GENERAL CONDITIONS","privacypolicy.section2.desc1":"We reserve the right to refuse service to anyone for any reason at any time.You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.","privacypolicy.section3":"SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION","privacypolicy.section3.desc1":"We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.","privacypolicy.section4":"SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES","privacypolicy.section4.desc1":"Prices for our products are subject to change without notice.We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.","privacypolicy.section5":"SECTION 5 - PRODUCTS OR SERVICES (if applicable)","privacypolicy.section5.desc1":"Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.","privacypolicy.section6":"SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION","privacypolicy.section6.desc1":"We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.For more detail, please review our Returns Policy.","privacypolicy.section7":"SECTION 7 - OPTIONAL TOOLS","privacypolicy.section7.desc1":"We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.","privacypolicy.section8":"SECTION 8 - THIRD-PARTY LINKS","privacypolicy.section8.desc1":"Certain content, products and services available via our Service may include materials from third-parties.Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.","privacypolicy.section9":"SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS","privacypolicy.section9.desc1":"If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, comments), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.","privacypolicy.section10":"SECTION 10 - PERSONAL INFORMATION","privacypolicy.section10.desc1":" Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.","privacypolicy.section11":"SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS","privacypolicy.section11.desc1":"Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.","privacypolicy.section12":"SECTION 12 - PROHIBITED USES","privacypolicy.section12.desc1":"In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.","privacypolicy.section13":"SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY","privacypolicy.section13.desc1":"We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided as is and as available for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.In no case shall Laws of Motion, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.","privacypolicy.section14":"SECTION 14 - INDEMNIFICATION","privacypolicy.section14.desc1":"You agree to indemnify, defend and hold harmless Laws of Motion and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.","privacypolicy.section15":"SECTION 15 - SEVERABILITY","privacypolicy.section15.desc1":"In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.","privacypolicy.section16":"SECTION 16 - TERMINATION","privacypolicy.section16.desc1":"The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).","privacypolicy.section17":"SECTION 17 - ENTIRE AGREEMENT","privacypolicy.section17.desc1":"The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.","privacypolicy.section18":"SECTION 18 - GOVERNING LAW","privacypolicy.section18.desc1":"These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United States.","privacypolicy.section19":"SECTION 19 - CHANGES TO TERMS OF SERVICE","privacypolicy.section19.desc1":"You can review the most current version of the Terms of Service at any time at this page.We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.","privacypolicy.section20":"SECTION 20 - CONTACT INFORMATION","privacypolicy.section20.desc1":"Questions about the Terms of Service should be sent to us at hello@lawsofmotion.com."};class nc{setValue(t){this.langData=t}constructor(t){this.langData=t,jo.init({lng:this.langData,fallbackLng:"en",resources:{en:{translation:oc},mr:{translation:ac}}},function(t,e){jo.t("Password")})}}var sc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,lc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?rc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&sc(e,i,n),n};let cc=class extends ot{constructor(){super()}getCustomizationJson(){return this.baseUrl="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/",this.bundleBaseUrl="bundles/monfrere/",this.sourceThemeBaseUrl="source/themes/monfrere-theme/",{colorVarCss:this.baseUrl+this.sourceThemeBaseUrl+"colorvarcss/color-theme.css",fontVarCss:this.baseUrl+this.bundleBaseUrl+"fontvarcss/font-theme.css",variableJson:this.baseUrl+this.bundleBaseUrl+"sourcejs/source-dynamic-variable.json",b2b2cQuizJson:this.baseUrl+this.bundleBaseUrl+"sourcejs/source-b2b2c-quiz.json",bundleJs:this.baseUrl+this.bundleBaseUrl+"dist/mz-quidget_cart.js",externalCss:this.baseUrl+this.bundleBaseUrl+"sourcecss/source-b2b2c-element-css.css"}}};lc([Y({type:Object})],cc.prototype,"fontJson",2),lc([Y({type:String})],cc.prototype,"baseUrl",2),lc([Y({type:String})],cc.prototype,"bundleBaseUrl",2),lc([Y({type:String})],cc.prototype,"sourceThemeBaseUrl",2),cc=lc([G("theme-handler")],cc);const pc=et`
        /* pdp page size section */
        #pdp_size_display {
            display: none;
            font-family: var(--cartsize-font) !important;
            color: var(--cartsize-color);
            cursor: pointer;
            background: var(--cartbtn-backgound);
            padding: 4px 5px;
            font-size: var(--cartsize-fsize);
            margin: 0px;
            text-decoration: none;
            text-transform : var(--cartsize-txt-transform);
        }
        #pdp_size_display u{
            font-family: var(--cartsize-font) !important;
        }
        /* common font apply */
        * {
            font-family: var(--common-font-medium);
                font-weight: 500;
        }
        /* main section of pop-up */
        .quidget_container {
            display: flex;
            /*  display:none; */
            width: 100%;
            height: 100vh;
            place-content: center;
            z-index: 1000;
            top: 0;
            left: 0;
            position: fixed;
        }
        
        /* fit btn section */
        .findPerfectFit_section {
            display: flex;
            /* margin: 20px 0px; */
            margin: 0px 0px;
        }
        
        .quidget_btn {
                /* border: var(--pdpbtn-border); */
            border: none;
            display: none;
            align-items: center;
            gap: 5px;
            justify-content: center;
            background: var(--cartbtn-backgound);
            color: var(--cartbtn-color);
            font-size: var(--cartbtn-fsize);
            font-family: var(--carttn-font) !important;
            font-weight: 400;
           
            padding: 4px 5px;
        }
        
        .quidget_btn img {
            width: var(--cart-btn-image-width);
            height: var(--cart-btn-image-height);
            margin-bottom: var(--cart-btn-bottom-margin);
        }
        

        .mz-underline{
           font-family: var(--cartsize-font) !important;
            color: var(--cartsize-color);
            font-size: var(--cartsize-fsize);
            text-decoration : var(--cartbtn-text-decoration);
            
             margin: 0px 0px;
            line-height: calc(var(--cartbtn-fsize) + 1px);
        }
        .mz-underline a{
            text-decoration: none;
            color: var(--cartbtn-color);
            font-size: var(--cartbtn-fsize);
            font-family: var(--carttn-font) !important;
            text-transform : var(--cartBtn-txt-transform);
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .quidget {
                /* width: 55%;
                top: 19%;
                height: 62%; */
                border-radius: 20px;
                width: 375px;
                height: 667px;
                position: relative;
            }
        
        }
        
            /* Input Alert End */
        @media only screen and (max-device-width: 600px) {
           
        }
        
        @media only screen and (min-device-width: 900px) {
            .quidget {
                    /* width:38%;
                    top: 12%;
                height: 80%; */
                width: 636px;
                height: 600px;
                position: relative;
            }
        
            .quidget_btn {
                left: 22px;
                top: 475px;
                font-style: normal;
                font-weight: 400;
            }
        }
        
        @media only screen and (max-device-width: 900px) {
                
        }
        
        
            /* Wave-loader */
        .loaders {
            /* z-index: 10000;
            padding: 0; */
            /* list-style: none; */
            display: none;
            
            position: relative;
            /* height: 38px;
             width: 99%; 
            width: 97px; */
            justify-content: center;
        }
        
        .loaders .loader {
            position: relative;
        }
        
        .pl-wave {
            display: flex;
            align-items: center;
            /* margin: 40vh auto auto;
            flex-direction: column;
            align-items: center;
            width:100%; */
        }
        
        .loaders .pl-wave .loader {
            width: 35px;
            height: 18px;
        }
        
        .loaders .pl-wave .loader span,
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            position: absolute;
            display: block;
            width: 6px;
            height: 100%;
            background: var(--loader-pdp-line-color);
        }
        
        .loaders .pl-wave .loader span {
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.3s;
            animation: wave 0.9s linear infinite 0.3s;
        }
        
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            content: "";
        }
        
        .loaders .pl-wave .loader:before {
            top: 50%;
            left: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite;
            animation: wave 0.9s linear infinite;
        }
        
        .loaders .pl-wave .loader:after {
            top: 50%;
            right: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.6s;
            animation: wave 0.9s linear infinite 0.6s;
        }
        
        .loaders :after {
            display: block;
            clear: both;
            content: "";
            position: relative;
        }
        
        .loader_notifications {
            font-size: 25px;
            width: 100%;
        }
        /* Animations */
        
        @-webkit-keyframes wave {
            0% {
                height: 100%;
            }
        
            40% {
                height: 10%;
            }
        
            80% {
                height: 100%;
            }
        
            100% {
                height: 100%;
            }
        }
        
        @keyframes wave {
            0% {
                height: 100%;
            }
        
            40% {
                height: 10%;
            }
        
            80% {
                height: 100%;
            }
        
            100% {
                height: 100%;
            }
        }
        
        @media screen and (max-width: 600px) {
            
        }   
    `;var dc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,hc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?uc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&dc(e,i,n),n};let mc=class extends ot{constructor(){super(),this.dataMsc="",this.theme="light",document.createElement("script");const t=document.createElement("script");t.type="text/javascript",t.src="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+qe,document.head.appendChild(t),this.partnerId="0fe9bc0f-371a-48c4-abad-9efa280eba7c"}__getSourceVariable(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.dynamicSourceVar=t}).catch(t=>{})}__getQuizJson(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.quizTempJson=t,this.cartPdpMessage=t.cartpdp}).catch(t=>{})}returnDataToPdp(){let t=(new vi).getDataByName(this.productCategory,this.cookieNameJson.quiz_input_id),e="",i="";null==this.bestFitSize&&null==this.bestFitSize||(e=this.bestFitSize),null==this.loggedIn&&null==this.loggedIn||(i=this.loggedIn);return{detail:{size:e,custId:i,quizId:t}}}_showLoader(){let t=this.shadowRoot?.querySelector("#waveloader");t.style.display="flex"}_stopLoader(){let t=this.shadowRoot?.querySelector("#waveloader");t.style.display="none"}async handleButtonVisibility(t){await this.delay(100);let e=document.querySelectorAll("quidget-button");t==ni?e.forEach((t,e)=>{let i=t.shadowRoot?.querySelector("#pdp_size_display"),o=t.shadowRoot?.querySelector("#quidget_btn");o.style.display="flex",i.innerHTML=""}):e.forEach((t,e)=>{let i=t.shadowRoot?.querySelector("#pdp_size_display"),o=t.shadowRoot?.querySelector("#quidget_btn");o.style.display="none",i.innerHTML=""})}delay(t){return new Promise(e=>setTimeout(e,t))}async showElement(){await this.delay(100);let t=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0],e=this.shadowRoot?.querySelector("#quidget_btn");this.bestFitSize?(t.style.display="flex",1==Number("1")?t.innerHTML='<p class= "mz-underline">'+this.cartPdpMessage.label1_after_quiz+'<b class="pdpsize"> '+this.bestFitSize+"</b> </p>":t.innerHTML='<p class ="mz-underline" >'+this.cartPdpMessage.label1_after_quiz+" "+this.bestFitSize+"</p>",e.style.display="none"):(e.style.display="flex",t.innerHTML="")}async hideElement(){await this.delay(100);let t=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0],e=this.shadowRoot?.querySelector("#quidget_btn");e.style.display="none",t.style.display="none"}render(){return null!=this.dynamicSourceVar&&("dark"==this.theme?this.pdpBtnImage="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGES_CART_BTN_LINE_DARK:this.pdpBtnImage="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGES_CART_BTN_LINE_LIGHT),R`
            <link rel="stylesheet" href=${this.fontStyle} />
            <link rel="stylesheet" href=${this.colorStyle} />
           

            <div class="findPerfectFit_section">
                <button id="quidget_btn" class="quidget_btn" >
                    ${this.withIcon==ni?R`<img src="${this.pdpBtnImage}" />`:""}
                    ${null!=this.cartPdpMessage?R` <div class="mz-underline"> <a href="${this.pdpPageLink}" > ${this.cartPdpMessage.link_label_no_taking_quiz}</a>  </div> 
               `:""}
                </button>    
                <a class="abc" href="${this.pdpPageLink}" id="pdp_size_display" > </a>
                <div id="waveloader" class="loaders">
                    <div class="loftloader-wrapper pl-wave">
                        <div class="loader">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        `}async firstUpdated(t){this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag),this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.loggedIn?this.islogin=!0:this.islogin=!1,this.cartPdpMessage=(new mi).getCartText();var e=(new cc).getCustomizationJson();this.fontStyle=e.fontVarCss,this.colorStyle=e.colorVarCss,await this.__getSourceVariable(e.variableJson),await this.__getQuizJson(e.b2b2cQuizJson);var i=e.externalCss;if(i){const t=document.createElement("link");t.rel="stylesheet",t.href=i,document.head.appendChild(t)}this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag),this.showEle==ni?this.showElement():this.hideElement()}updated(t){t.forEach((t,e)=>{if("quizTempJson"==e)for(var i=this.quizTempJson.fontcss,o=0;o<i.length;o++){const t=document.createElement("link");t.rel="stylesheet",t.href="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+i[o],document.head.appendChild(t)}}),t.forEach((t,e)=>{"showEle"!=e&&"bestFitSize"!=e||(this.showEle==ni?this.showElement():this.hideElement())})}};mc.styles=[pc],hc([Y({type:String})],mc.prototype,"partnerId",2),hc([Y({type:String})],mc.prototype,"productHandle",2),hc([Y({type:String})],mc.prototype,"productCategory",2),hc([Y({type:Object})],mc.prototype,"cookieNameJson",2),hc([Y({type:String})],mc.prototype,"envCookieFlag",2),hc([Y({type:String})],mc.prototype,"loggedIn",2),hc([Y({type:Boolean})],mc.prototype,"islogin",2),hc([Y({type:String})],mc.prototype,"bestFitSize",2),hc([Y({type:String})],mc.prototype,"theme",2),hc([Y({type:String})],mc.prototype,"dynamicSourceVar",2),hc([Y({type:String})],mc.prototype,"pdpBtnImage",2),hc([Y({type:String})],mc.prototype,"fontStyle",2),hc([Y({type:String})],mc.prototype,"colorStyle",2),hc([Y({type:Object})],mc.prototype,"quizTempJson",2),hc([Y({type:Object})],mc.prototype,"cartPdpMessage",2),hc([Y({type:String})],mc.prototype,"pdpPageLink",2),hc([Y({type:String})],mc.prototype,"withIcon",2),hc([Y({type:String,attribute:"datamsc"})],mc.prototype,"dataMsc",2),hc([Y({type:Object})],mc.prototype,"dataMscObj",2),hc([Y({type:String})],mc.prototype,"btnLocation",2),hc([Y({type:String})],mc.prototype,"btnStyleUrl",2),hc([Y({type:String})],mc.prototype,"showEle",2),mc=hc([G("cart-quidget-btn")],mc);var gc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,fc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?yc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&gc(e,i,n),n};let vc=class extends ot{constructor(){super(),this.pdpBtnImage="",this.fontStyle="",this.colorStyle="",this.dataMsc="",this.theme="light",new nc("en");const t=document.createElement("script");if(window.jQuery){const e="2.2.4",i=window.jQuery.fn.jquery.split(".").map(Number),o=e.split(".").map(Number);this.isUserJqVersionGt(i,o)||(t.type="text/javascript",t.src=ke,document.head.appendChild(t))}else t.type="text/javascript",t.src=ke,document.head.appendChild(t);this.quidgetEle=document.createElement("quidget-element"),this.quidgetEle.addEventListener("_closePopUp",this.__closePopUp.bind(this)),this.quidgetEle.addEventListener("_updateSize",this.updatedSizeSet.bind(this)),this.quidgetEle.addEventListener("_updateSize",t=>this.updatedSizeSet),this.partnerId="0fe9bc0f-371a-48c4-abad-9efa280eba7c"}isUserJqVersionGt(t,e){for(let i=0;i<e.length;i++){if((t[i]||0)>(e[i]||0))return!0;if((t[i]||0)<(e[i]||0))return!1}return!0}__closePopUp(t){this.dataCollection!=ni&&(this.bestFitSize=t.detail.bestFitSize);var e=window.top.document.body.querySelector("quidget-element");if(e&&e.remove(),this.dataMscObj&&"sizeguide"==this.dataMscObj.simkhai){const t=new CustomEvent("sk-sizeguide-ev",{bubbles:!0,composed:!0});window.dispatchEvent(t)}}__getSourceVariable(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.dynamicSourceVar=t}).catch(t=>{})}__getDynamicVariable(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.baseUrLObject=t}).catch(t=>{})}async __getQuizJson(t){await fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.b2b2cJson=t}).catch(t=>{})}openModal(){const t=Array.from(document.querySelectorAll("*")).map(t=>parseFloat(getComputedStyle(t).zIndex)).filter(t=>!isNaN(t));t.length>0&&(this.popupZindex=Math.max(...t)),this.popupZindex=this.popupZindex+5,this.bestFitSize=(new vi).getDataByName(this.productCategory,this.cookieNameJson.best_fit_size),null==this.bestFitSize&&(this.bestFitSize=""),this.quidgetEle.setAttribute("partnerId",this.partnerId),this.quidgetEle.setAttribute("productHandle",this.productHandle),this.quidgetEle.setAttribute("productCategory",this.productCategory),this.quidgetEle.setAttribute("toRender",this.toRender),this.quidgetEle.setAttribute("quizTypeStatus",JSON.stringify(this.quizTypeStatus)),this.quidgetEle.setAttribute("bestFitSize",this.bestFitSize),this.quidgetEle.setAttribute("islogin",this.islogin),this.quidgetEle.setAttribute("colorStyle",this.colorStyle),this.quidgetEle.setAttribute("fontStyle",this.fontStyle),this.quidgetEle.setAttribute("cookieNameJson",JSON.stringify(this.cookieNameJson)),this.quidgetEle.setAttribute("dynamicSourceVar",JSON.stringify(this.dynamicSourceVar)),this.quidgetEle.setAttribute("theme",this.theme),this.quidgetEle.setAttribute("zindex",this.popupZindex),this.quidgetEle.setAttribute("b2b2cJson",JSON.stringify(this.b2b2cJson)),this.quidgetEle.setAttribute("dataCollection",this.dataCollection);const e=window.top.document.body;e.append(this.quidgetEle),this.element=e.querySelector("quidget-element"),this.element._rerenderPage(this.toRender)}__closeModal(){var t=window.top.document.body.querySelector("quidget-element");t&&t.remove()}_quizModeHandler(t){document.body.style.overflow="hidden",t&&(this.toRender=$e,this.bestFitSize="",this.openModal())}_retakeQuiz(t){document.body.style.overflow="hidden",(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.toRender=De,this.openModal()}async checkCategory(){document.querySelectorAll("quidget-button"),await this.handleButtonVisibility(si),this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.loggedIn?this.islogin=!0:this.islogin=!1;let t={partnerId:this.partnerId,productHandle:this.productHandle},e=await(new mi).requestGetCategory(t);if(e){if(!e.error)if(this.productCategory=e.category,null!=this.displayCategory)if(this.productCategory==this.displayCategory)await this._requestQuizMetadata(this.loggedIn);else{let t=this.shadowRoot?.querySelector("#pdp_size_display"),e=this.shadowRoot?.querySelector("#quidget_btn");t.classList.add("hideCategory"),e.classList.add("hideCategory")}else await this._requestQuizMetadata(this.loggedIn)}else this._stopLoader()}async _requestQuizMetadata(t){(new vi).deleteData(this.productCategory,this.cookieNameJson.best_fit_size),document.querySelectorAll("quidget-button"),this._showLoader();var e=(new vi).getDataByName(Ke,this.cookieNameJson.login_time);e?(this.dataCollection!=ni&&(new vi).setDataWithoutCategory(this.productCategory,this.cookieNameJson.login_time,e),(new vi).deleteData(Ke,this.cookieNameJson.login_time)):e=(new vi).getDataByNameWithoutCategory(this.productCategory,this.cookieNameJson.login_time);var i=(new vi).getDataByName(this.productCategory,this.cookieNameJson.quiz_input_id);let o={domain:"test.com",partnerId:this.partnerId,productHandle:this.productHandle};t&&(o=Object.assign({customer_id:t},o)),i&&(o=Object.assign({quiz_input_id:i},o)),e&&(o=Object.assign({login_time:e},o));let a=await(new mi).requestQuizMetadataV2(o);this._requestQuizMetadataSuccess(a),this._setHiddenInputData()}async _requestQuizMetadataSuccess(t){if(this.toRender=$e,this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.toRender="",document.querySelectorAll("quidget-button"),this._stopLoader(),t){if(t.error_msg)await this.handleButtonVisibility(si);else if(""==t.product_code||null==t.product_code)await this.handleButtonVisibility(si);else if(t.quiz_meta_data&&(this.quizTypeStatus=t.quiz_meta_data),await this.handleButtonVisibility(ni),t.sizes)if(1==t.session_timout)this._logOut();else{this.dataCollection!=ni&&(new vi).setData(this.productCategory,this.cookieNameJson.last_quiz_entry,t.last_quiz_timestamp),(new vi).setData(this.productCategory,this.cookieNameJson.product_code,t.product_code);let e=(new vi).getDataByName(this.productCategory,this.cookieNameJson.product_code);this.bestFitSize=t.sizes[e],await this.showPdpSize(),this._stopLoader()}t.product_code&&(new vi).setData(this.productCategory,this.cookieNameJson.product_code,t.product_code)}this._stopLoader(),this._cartupdateFromButton()}delay(t){return new Promise(e=>setTimeout(e,t))}_cartupdateFromButton(){let t=(new vi).getDataByName(Ye,this.cookieNameJson.quiz_input_id),e=(new vi).getDataByName(Ke,this.cookieNameJson.quiz_input_id),i="",o="",a="";null==this.bestFitSize&&null==this.bestFitSize||(i=this.bestFitSize),null==this.loggedIn&&null==this.loggedIn||(o=this.loggedIn),null==t&&null==t||(a=t);const n=new CustomEvent("cartjs-update",{detail:{size:i,custId:o,quizId:e,quizMenId:a},bubbles:!0,composed:!0});this.dispatchEvent(n)}async handleButtonVisibility(t){await this.delay(100);let e=document.querySelectorAll("quidget-button");t==ni?e.forEach((t,e)=>{let i=t.shadowRoot?.querySelector("#pdp_size_display"),o=t.shadowRoot?.querySelector("#quidget_btn");o.style.display="flex",i.innerHTML=""}):e.forEach((t,e)=>{let i=t.shadowRoot?.querySelector("#pdp_size_display"),o=t.shadowRoot?.querySelector("#quidget_btn");o.style.display="none",i.innerHTML=""})}async showPdpSize(){await this.delay(100),document.querySelectorAll("quidget-button").forEach(t=>{let e=t.shadowRoot?.querySelector("#pdp_size_display"),i=t.shadowRoot?.querySelector("#quidget_btn");this.bestFitSize?(this.dataCollection!=ni&&(new vi).setData(this.productCategory,this.cookieNameJson.best_fit_size,this.bestFitSize),e.style.display="flex",1==Number("1")?this.bestFitSize==li||this.bestFitSize==ri?1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+'&nbsp;<b class="pdpsize"> <u>'+this.bestFitSize+"</u></b> ":e.innerHTML=jo.t("qiidgetele.bestfitsize")+'&nbsp;<b class="pdpsize"> '+this.bestFitSize+"</b> ":1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp; <b>"+jo.t("qiidgetele.Size")+'</b><b class="pdpsize"> &nbsp;<u>'+this.bestFitSize+"</u></b> ":e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp; <b>"+jo.t("qiidgetele.Size")+'</b><b class="pdpsize"> &nbsp;'+this.bestFitSize+"</b> ":this.bestFitSize==li||this.bestFitSize==ri?1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;<u>"+this.bestFitSize+"</u>":e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;"+this.bestFitSize:1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;<u>"+jo.t("qiidgetele.Size")+"&nbsp;"+this.bestFitSize+"</u>":e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;"+jo.t("qiidgetele.Size")+"&nbsp;"+this.bestFitSize,i.style.display="none"):this.handleButtonVisibility(ni)})}_logOut(){(new vi).deleteData(this.productCategory,this.cookieNameJson.loggedin),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.productCategory,this.cookieNameJson.login_time),(new vi).deleteData(this.productCategory,this.cookieNameJson.last_quiz_entry)}_showLoader(){let t=this.shadowRoot?.querySelector("#waveloader");t.style.display="flex"}_stopLoader(){let t=this.shadowRoot?.querySelector("#waveloader");t.style.display="none"}async returnDataToPdp(){let t=(new vi).getDataByName(Ye,this.cookieNameJson.quiz_input_id),e=(new vi).getDataByName(Ke,this.cookieNameJson.quiz_input_id);this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);let i="",o="",a="";null==this.bestFitSize&&null==this.bestFitSize||(i=this.bestFitSize),null==this.loggedIn&&null==this.loggedIn||(o=this.loggedIn),null==t&&null==t||(a=t);return{detail:{size:i,custId:o,quizId:e,quizMenId:a}}}updatedSizeSet(t){}_setHiddenInputData(){let t=(new vi).getDataByName(Ye,this.cookieNameJson.quiz_input_id),e=(new vi).getDataByName(Ke,this.cookieNameJson.quiz_input_id);var i=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);let o=document.querySelector("#lom-quizdata");if(o)o.value=`_qrs_Men:${t??"-"},_qrs_Women:${e??"-"},_loggedin:${i??"-"}`;else{const o=document.querySelector('input[name="lom-quizdata"]');o&&(o.type="hidden",o.value=`_qrs_Men:${t??"-"},_qrs_Women:${e??"-"},_loggedin:${i??"-"}`)}}render(){return this.pdpBtnImage="",null!=this.dynamicSourceVar&&(this.theme==ti?this.pdpBtnImage="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGES_PDP_BTN_LINE_DARK:this.pdpBtnImage="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGES_PDP_BTN_LINE_LIGHT),R`
      <link rel="stylesheet" href=${this.btnStyleUrl} />
      <link rel="stylesheet" href=${this.fontStyle} />
      <link rel="stylesheet" href=${this.colorStyle} />

      <div class="findPerfectFit_section">
        <button
          id="quidget_btn"
          class="quidget_btn"
          @click=${this._quizModeHandler}
        >
          ${this.withIcon==ni?R` ${this.pdpBtnImage?R` <img src="${this.pdpBtnImage}" />`:""} `:""}
          <p>
            ${null!=this.b2b2cJson?R`
                  ${this.b2b2cJson.fmf_button?R` ${this.b2b2cJson.fmf_button.button} `:R` ${jo.t("qiidgetele.button")} `}
                `:""}
          </p>
        </button>
        <p class="abc" id="pdp_size_display" @click=${this._retakeQuiz}></p>
        <div id="waveloader" class="loaders">
          <div class="loftloader-wrapper pl-wave">
            <div class="loader">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    `}async firstUpdated(t){this.quidgetEle.addEventListener("_updateSize",t=>this.updatedSizeSet);const e=window.top?.document.body,i=Array.from(document.querySelectorAll("*")).map(t=>parseFloat(getComputedStyle(t).zIndex)).filter(t=>!isNaN(t));if(i.length>0&&(this.popupZindex=Math.max(...i)),await this.handleButtonVisibility(si),this.dataMsc)try{this.dataMscObj=JSON.parse(this.dataMsc),this.dataMscObj&&this.dataMscObj.btnloc&&(this.btnLocation=this.dataMscObj.btnloc)}catch(s){(this.dataMsc="sizeguide")&&(this.dataMscObj=Object.assign({simkhai:"sizeguide"}))}this.btnLocation?this.btnStyleUrl="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/sourcecss/"+this.btnLocation+"/style.css":this.btnStyleUrl="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/sourcecss/default/style.css",this.popupZindex=this.popupZindex+5;var o=(new cc).getCustomizationJson();this.fontStyle=o.fontVarCss,this.colorStyle=o.colorVarCss;var a=o.bundleJs;await this.__getSourceVariable(o.variableJson),await this.__getQuizJson(o.b2b2cQuizJson);var n=o.externalCss;if(n){const t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.appendChild(t)}if(""!=a||null!=a||null!=a){const t=document.createElement("script");t.type="module",t.src=a,e.append(t)}this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag),this.checkCategory()}updated(t){t.forEach((t,e)=>{if("bestFitSize"==e&&(this.bestFitSize?(this.dataCollection!=ni&&(new vi).setData(this.productCategory,this.cookieNameJson.best_fit_size,this.bestFitSize),this.showPdpSize()):this.handleButtonVisibility(ni)),"b2b2cJson"==e)for(var i=this.b2b2cJson.fontcss,o=0;o<i.length;o++){const t=document.createElement("link");t.rel="stylesheet",t.href="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+i[o],document.head.appendChild(t)}})}};vc.styles=[],fc([Y({type:String})],vc.prototype,"partnerId",2),fc([Y({type:String})],vc.prototype,"productHandle",2),fc([Y({type:String})],vc.prototype,"productCategory",2),fc([Y({type:String})],vc.prototype,"pdpBtnImage",2),fc([Y({type:String})],vc.prototype,"theme",2),fc([Y({type:String})],vc.prototype,"dynamicSourceVar",2),fc([Y({type:Object})],vc.prototype,"cookieNameJson",2),fc([Y({type:String})],vc.prototype,"toRender",2),fc([Y({type:String})],vc.prototype,"fontStyle",2),fc([Y({type:String})],vc.prototype,"colorStyle",2),fc([Y({type:String})],vc.prototype,"envCookieFlag",2),fc([Y({type:String})],vc.prototype,"loggedIn",2),fc([Y({type:Boolean})],vc.prototype,"islogin",2),fc([Y({type:String})],vc.prototype,"bestFitSize",2),fc([Y({type:Object})],vc.prototype,"quizTypeStatus",2),fc([Y({type:HTMLElement})],vc.prototype,"quidgetEle",2),fc([Y({type:HTMLElement})],vc.prototype,"element",2),fc([Y({type:String})],vc.prototype,"lastEntry",2),fc([Y({type:String})],vc.prototype,"popupZindex",2),fc([Y({type:Object})],vc.prototype,"b2b2cJson",2),fc([Y({type:String})],vc.prototype,"withIcon",2),fc([Y({type:String})],vc.prototype,"displayCategory",2),fc([Y({type:String,attribute:"datamsc"})],vc.prototype,"dataMsc",2),fc([Y({type:Object})],vc.prototype,"dataMscObj",2),fc([Y({type:String})],vc.prototype,"dataCollection",2),fc([Y({type:String})],vc.prototype,"baseApiURI",2),fc([Y({type:String})],vc.prototype,"baseAwsURI",2),fc([Y({type:Object})],vc.prototype,"baseUrLObject",2),fc([Y({type:String})],vc.prototype,"btnLocation",2),fc([Y({type:String})],vc.prototype,"btnStyleUrl",2),vc=fc([G("quidget-button")],vc);const bc=et`
        /* faq page main div */
        .faq_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            height: 100%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 4%;
        }
        /* p tag in page */
        .faq_page > p {
            margin-top: 22px;
        }
        /* page title section */
        .help_center_title {
            display: flex;
            margin-top: 5%;
        }
        .help_center_title p {
            margin: 5px 0px;
            font-family: var(--template-title-font);
            font-size: var(--template-title-fsize);
            color: var(--template-title-color);
        }
        /* page title subtitle */
        .help_center_subtitle p {
            margin: 5px 0px;
            font-family: var(--template-subtitle-font);
            font-size: var(--template-subtitle-fsize);
            color: var(--template-subtitle-color);
        }
        /* footer section */
        .main_result_footer {
            /* display: flex;
                align-content: center;
                align-items: center; */
            position: absolute;
            width: fit-content;
            /* justify-content: space-between; */
            /* background-color:white; */
            bottom: 5%;
            left: 15%;
            /* right: 0; */
            margin: auto;
            z-index: 400;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
        /* faq queation text */
        .question {
            margin: 0px 0px 5px 0px !important;
            color: var(--template-faq-question-text-color);
            font-size: var(--template-faq-question-txt-size);
            font-family: var(--template-faq-question-txt-font);
            text-decoration: none;
        }
        /* faq answer text */
        .answer {
            margin: 0px 0px 15px 0px;
            font-family: var(--template-faq-question-font);
            font-size: var(--template-faq-question-fsize);
            color: var(--template-faq-answer-text-color);
        }
        /* faq quation and answer section */
        .question_answer {
            width: 90%;
            height: 85%;
            overflow: scroll;
            margin-top: 15px;
            text-align: left;
            scrollbar-width: none;
        }
        
        @media screen and (max-width: 600px) {
            .main_result_footer {
            width: 80%;
            left: 0;
            right: 0;
            }
        
            .faq_page {
            height: 100%;
            top: 2%;
            }
            .result_options_section {
            width: 80%;
            margin-top: 10%;
            }
            .question_answer {
            width: 80%;
            height: 85%;
            }
        }
        
        @media only screen and (min-width: 768px) {
            .faq_page {
            height: 96%;
            }
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
            bottom: 4%;
            }
        }
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .main_result_footer {
            
            }
        }  
    `;var _c=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,xc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?wc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&_c(e,i,n),n};let Sc=class extends ot{constructor(){super()}_backTo(){const t={detail:{isHelpCenter:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_helpPgae",t))}render(){return R`
            <div class="faq_page">
                
                <div class="question_answer">
                    ${this.faqPageData.question.map((t,e)=>R`
                        <p class="question">${t.question}</p>
                        <p class="answer">${t.answer}</p>
                    `)}
                </div>
            </div>
    
              

            ${this.faqPageData.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.faqPageData.back_nav)} @backClick=${this._backTo} theme=${this.theme} > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div>

        `}};Sc.styles=[bc],xc([Y({type:Object})],Sc.prototype,"faqPageData",2),xc([Y({type:String})],Sc.prototype,"fitSize",2),xc([Y({type:String})],Sc.prototype,"theme",2),Sc=xc([G("t-faq-page")],Sc);const zc=et`
        /* pdp page size section */
        #pdp_size_display {
            font-family: var(--cartsize-font) !important;
            color: var(--cartsize-color);
            cursor: pointer;
            background: var(--cartbtn-backgound);
            padding: 4px 5px;
            font-size: var(--cartsize-fsize);
            margin: 0px;
            text-decoration: none;
            text-transform : var(--cartsize-txt-transform);
        }
        #pdp_size_display u{
            font-family: var(--cartsize-font) !important;
        }
        /* common font apply */
        * {
            font-family: var(--common-font-medium);
                font-weight: 500;
        }
        /* main section of pop-up */
        .quidget_container {
            display: flex;
            /*  display:none; */
            width: 100%;
            height: 100vh;
            place-content: center;
            z-index: 1000;
            top: 0;
            left: 0;
            position: fixed;
        }
        
        /* fit btn section */
        .findPerfectFit_section {
            display: flex;
            /* margin: 20px 0px; */
            margin: 0px 0px;
        }
        
        .quidget_btn {
                /* border: var(--pdpbtn-border); */
            border: none;
            display: none;
            align-items: center;
            gap: 5px;
            justify-content: center;
            background: var(--cartbtn-backgound);
            color: var(--cartbtn-color);
            font-size: var(--cartbtn-fsize);
            font-family: var(--carttn-font) !important;
            font-weight: 400;
           
            padding: 4px 5px;
        }
        
        .quidget_btn img {
            width: var(--cart-btn-image-width);
            height: var(--cart-btn-image-height);
            margin-bottom: var(--cart-btn-bottom-margin);
        }
        

        .mz-underline{
           font-family: var(--cartsize-font) !important;
            color: var(--cartsize-color);
            font-size: var(--cartsize-fsize);
            text-decoration : var(--cartbtn-text-decoration);
            
             margin: 0px 0px;
            line-height: calc(var(--cartbtn-fsize) + 1px);
        }
        .mz-underline a{
            text-decoration: none;
            color: var(--cartbtn-color);
            font-size: var(--cartbtn-fsize);
            font-family: var(--carttn-font) !important;
            text-transform : var(--cartBtn-txt-transform);
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .quidget {
                /* width: 55%;
                top: 19%;
                height: 62%; */
                border-radius: 20px;
                width: 375px;
                height: 667px;
                position: relative;
            }
        
        }
        
            /* Input Alert End */
        @media only screen and (max-device-width: 600px) {
           
        }
        
        @media only screen and (min-device-width: 900px) {
            .quidget {
                    /* width:38%;
                    top: 12%;
                height: 80%; */
                width: 636px;
                height: 600px;
                position: relative;
            }
        
            .quidget_btn {
                left: 22px;
                top: 475px;
                font-style: normal;
                font-weight: 400;
            }
        }
        
        @media only screen and (max-device-width: 900px) {
                
        }
        
        
            /* Wave-loader */
        .loaders {
            /* z-index: 10000;
            padding: 0; */
            /* list-style: none; */
            display: none;
            
            position: relative;
            /* height: 38px;
             width: 99%; 
            width: 97px; */
            justify-content: center;
        }
        
        .loaders .loader {
            position: relative;
        }
        
        .pl-wave {
            display: flex;
            align-items: center;
            /* margin: 40vh auto auto;
            flex-direction: column;
            align-items: center;
            width:100%; */
        }
        
        .loaders .pl-wave .loader {
            width: 35px;
            height: 18px;
        }
        
        .loaders .pl-wave .loader span,
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            position: absolute;
            display: block;
            width: 6px;
            height: 100%;
            background: var(--loader-pdp-line-color);
        }
        
        .loaders .pl-wave .loader span {
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.3s;
            animation: wave 0.9s linear infinite 0.3s;
        }
        
        .loaders .pl-wave .loader:before,
        .loaders .pl-wave .loader:after {
            content: "";
        }
        
        .loaders .pl-wave .loader:before {
            top: 50%;
            left: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite;
            animation: wave 0.9s linear infinite;
        }
        
        .loaders .pl-wave .loader:after {
            top: 50%;
            right: 0;
            -webkit-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-animation: wave 0.9s linear infinite 0.6s;
            animation: wave 0.9s linear infinite 0.6s;
        }
        
        .loaders :after {
            display: block;
            clear: both;
            content: "";
            position: relative;
        }
        
        .loader_notifications {
            font-size: 25px;
            width: 100%;
        }
        /* Animations */
        
        @-webkit-keyframes wave {
            0% {
                height: 100%;
            }
        
            40% {
                height: 10%;
            }
        
            80% {
                height: 100%;
            }
        
            100% {
                height: 100%;
            }
        }
        
        @keyframes wave {
            0% {
                height: 100%;
            }
        
            40% {
                height: 10%;
            }
        
            80% {
                height: 100%;
            }
        
            100% {
                height: 100%;
            }
        }
        
        @media screen and (max-width: 600px) {
            
        }   
    `;var kc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Ic=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?qc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&kc(e,i,n),n};let $c=class extends ot{constructor(){super(),this.dataMsc="",this.theme="light";const t=document.createElement("script");t.type="text/javascript",t.src="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+qe,document.head.appendChild(t),this.partnerId="0fe9bc0f-371a-48c4-abad-9efa280eba7c"}__getSourceVariable(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.dynamicSourceVar=t}).catch(t=>{})}__getQuizJson(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.quizTempJson=t,this.cartPdpMessage=t.cartpdp}).catch(t=>{})}returnDataToPdp(){let t=(new vi).getDataByName(this.productCategory,this.cookieNameJson.quiz_input_id),e="",i="";null==this.bestFitSize&&null==this.bestFitSize||(e=this.bestFitSize),null==this.loggedIn&&null==this.loggedIn||(i=this.loggedIn);return{detail:{size:e,custId:i,quizId:t}}}_showLoader(){let t=this.shadowRoot?.querySelector("#waveloader");t.style.display="flex"}_stopLoader(){let t=this.shadowRoot?.querySelector("#waveloader");t.style.display="none"}async checkCategory(){document.querySelectorAll("quidget-button"),this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.loggedIn?this.islogin=!0:this.islogin=!1;let t={partnerId:this.partnerId,productHandle:this.productHandle},e=await(new mi).requestGetCategory(t);e?e.error||(this.productCategory=e.category,this._requestQuizMetadata(this.loggedIn)):this._stopLoader()}async _requestQuizMetadata(t){const e=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0];e.style.display="none";const i=this.shadowRoot?.querySelectorAll("#quidget_btn")[0];i.style.display="none",this._showLoader();var o=(new vi).getDataByName(Ke,this.cookieNameJson.login_time);o?((new vi).setDataWithoutCategory(this.productCategory,this.cookieNameJson.login_time,o),(new vi).deleteData(Ke,this.cookieNameJson.login_time)):o=(new vi).getDataByNameWithoutCategory(this.productCategory,this.cookieNameJson.login_time);var a=(new vi).getDataByName(this.productCategory,this.cookieNameJson.quiz_input_id);let n={domain:"test.com",partnerId:this.partnerId,productHandle:this.productHandle};t&&(n=Object.assign({customer_id:t},n)),a&&(n=Object.assign({quiz_input_id:a},n)),o&&(n=Object.assign({login_time:o},n));let s=await(new mi).requestQuizMetadataV2(n);this._requestQuizMetadataSuccess(s)}_requestQuizMetadataSuccess(t){if(this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),t){if(t.error_msg){let t=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0],e=this.shadowRoot?.querySelector("#quidget_btn");e.style.display="none",t.innerHTML=""}else if(""==t.product_code||null==t.product_code){let t=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0],e=this.shadowRoot?.querySelector("#quidget_btn");e.style.display="none",t.innerHTML="",this._stopLoader()}else if(t.sizes)if(1==t.session_timout)this._logOut();else{(new vi).setData(this.productCategory,this.cookieNameJson.last_quiz_entry,t.last_quiz_timestamp),(new vi).setData(this.productCategory,this.cookieNameJson.product_code,t.product_code);let e=(new vi).getDataByName(this.productCategory,this.cookieNameJson.product_code);this.bestFitSize=t.sizes[e];let i=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0],o=this.shadowRoot?.querySelector("#quidget_btn");this.bestFitSize?(i.style.display="block",1==Number("1")?i.innerHTML='<p class= "mz-underline">'+this.cartPdpMessage.label1_after_quiz+'<b class="pdpsize"> '+this.bestFitSize+"</b> </p>":i.innerHTML='<p class ="mz-underline" >'+this.cartPdpMessage.label1_after_quiz+" "+this.bestFitSize+"</p>",o.style.display="none"):(o.style.display="flex",i.innerHTML=""),this._stopLoader()}else if(t.quiz_meta_data){let t=this.shadowRoot?.querySelectorAll("#pdp_size_display")[0],e=this.shadowRoot?.querySelector("#quidget_btn");e.style.display="flex",t.innerHTML=""}t.product_code&&(new vi).setData(this.productCategory,this.cookieNameJson.product_code,t.product_code),t.quiz_meta_data}this._stopLoader()}_logOut(){(new vi).deleteData(this.productCategory,this.cookieNameJson.loggedin),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.productCategory,this.cookieNameJson.login_time),(new vi).deleteData(this.productCategory,this.cookieNameJson.last_quiz_entry)}render(){return null!=this.dynamicSourceVar&&("dark"==this.theme?this.pdpBtnImage="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGES_CART_BTN_LINE_DARK:this.pdpBtnImage="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGES_CART_BTN_LINE_LIGHT),R`
            <link rel="stylesheet" href=${this.fontStyle} />
            <link rel="stylesheet" href=${this.colorStyle} />
           

            <div class="findPerfectFit_section">
                <button id="quidget_btn" class="quidget_btn" >
                    ${this.withIcon==ni?R`<img src="${this.pdpBtnImage}" />`:""}
                    ${null!=this.cartPdpMessage?R` <div class="mz-underline"> <a href="${this.pdpPageLink}" > ${this.cartPdpMessage.link_label_no_taking_quiz}</a>  </div> 
               `:""}
                </button>    
                <a class="abc" href="${this.pdpPageLink}" id="pdp_size_display" ></a>
                <div id="waveloader" class="loaders">
                    <div class="loftloader-wrapper pl-wave">
                        <div class="loader">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        `}async firstUpdated(t){this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag),this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.loggedIn?this.islogin=!0:this.islogin=!1,this.cartPdpMessage=(new mi).getCartText(),this.checkCategory();var e=(new cc).getCustomizationJson();this.fontStyle=e.fontVarCss,this.colorStyle=e.colorVarCss,await this.__getSourceVariable(e.variableJson),await this.__getQuizJson(e.b2b2cQuizJson);var i=e.externalCss;if(i){const t=document.createElement("link");t.rel="stylesheet",t.href=i,document.head.appendChild(t)}this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag)}updated(t){t.forEach((t,e)=>{if("quizTempJson"==e)for(var i=this.quizTempJson.fontcss,o=0;o<i.length;o++){const t=document.createElement("link");t.rel="stylesheet",t.href="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+i[o],document.head.appendChild(t)}})}};$c.styles=[zc],Ic([Y({type:String})],$c.prototype,"partnerId",2),Ic([Y({type:String})],$c.prototype,"productHandle",2),Ic([Y({type:String})],$c.prototype,"productCategory",2),Ic([Y({type:Object})],$c.prototype,"cookieNameJson",2),Ic([Y({type:String})],$c.prototype,"envCookieFlag",2),Ic([Y({type:String})],$c.prototype,"loggedIn",2),Ic([Y({type:Boolean})],$c.prototype,"islogin",2),Ic([Y({type:String})],$c.prototype,"bestFitSize",2),Ic([Y({type:String})],$c.prototype,"theme",2),Ic([Y({type:String})],$c.prototype,"dynamicSourceVar",2),Ic([Y({type:String})],$c.prototype,"pdpBtnImage",2),Ic([Y({type:String})],$c.prototype,"fontStyle",2),Ic([Y({type:String})],$c.prototype,"colorStyle",2),Ic([Y({type:Object})],$c.prototype,"quizTempJson",2),Ic([Y({type:Object})],$c.prototype,"cartPdpMessage",2),Ic([Y({type:String})],$c.prototype,"pdpPageLink",2),Ic([Y({type:String})],$c.prototype,"withIcon",2),Ic([Y({type:String,attribute:"datamsc"})],$c.prototype,"dataMsc",2),Ic([Y({type:Object})],$c.prototype,"dataMscObj",2),Ic([Y({type:String})],$c.prototype,"btnLocation",2),Ic([Y({type:String})],$c.prototype,"btnStyleUrl",2),$c=Ic([G("cart-quidget")],$c);const Nc=et`
    .userpage{
      height: 88%;
    }
    .userpage p {
      margin-top: 0px;
      font-family: var(--template-userflow-quiz-title) !important;
      color: var(--template-userflow-quiz-color);
      font-size: var(--template-userflow-quiz-title-size);
    }
    /* Style the tab */
    .tab {
      overflow: hidden;
      display: flex;
      justify-content: space-evenly;
    }
    
    /* Style the buttons that are used to open the tab content */
    .tab button {
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      transition: 0.3s;
    }
    
    /* Change background color of buttons on hover */
    .tab button:hover {
      border-bottom: 1px solid;
    }
    
    /* Create an active/current tablink class */
    .tab button.active {
      background-color: #ccc;
    }
    
    .showtab{
      display: block !important;
    }

    .answer_quiz{
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: scroll;
      height: 85%;
      width: 75%;
    }
    .answer_quiz::-webkit-scrollbar {
      display: none;
    }
    .quizcol{
      display: flex;
      width: 80%;
      justify-content: flex-start;
      /* margin-top: 3%; */
      margin-top: 15px;
      align-items: center;
      align-items: center;
    }
    .align-center{
      justify-content: center;
    }    
    .redo_fit{
      font-family: var(--template-userflow-redo-btn-font) !important;
      color: var(--template-userflow-redo-color);
      font-size: var(--template-userflow-redo-btn-size);
    }
    .quiz_label{
      width: 50%;
      text-align: left;
      font-family: var(--template-userflow-quiz-font) !important;
      color: var(--template-userflow-quiz-color);
      font-size: var(--template-userflow-quiz-size);
    }
    .center{
      text-align: center;
    }
    .quiz_ans{
      width: 100%;
      text-align: left;
    }
    .heightInput{
      height: 30px;
      width: 30px;
    }
    .weightInput{
      width: 90px;
      height: 30px;
    }
    .img_cv_div{
      width: 75%;
      border: 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90%;
      padding: 5px;
    }
    .img_cv_div img{
      width: 55%;
    }
    input:focus {
      outline: none;
    }
    .valBox{
      border: var(--template-userflow-ans-border);
      font-family: var(--template-userflow-answer-font) !important;
      color: var(--template-userflow-ans-color);
      font-size: var(--template-userflow-answer-size);
      margin: 0px 4px;
      text-align: center;
    }
    .unitNm{
      font-family: var(--template-userflow-unit-font) !important;
      color: var(--template-userflow-unit-color);
      font-size: var(--template-userflow-unit-size);
    }
    .doubleInput{
      display: flex;

    }
    .doubleInputNum{
      width: 65px;
      text-overflow: ellipsis;
    }
    .doubleInputTxt{
      width: 100%;
      height: 30px;
      text-align: left;
      padding: 0px 5px;
      text-overflow: ellipsis;
    }
    .singleInputTxt{
      width: 100%;
      height: 30px;
      
    }
    .txtLeft{
      text-align: left !important;
      padding: 0px 5px;       
    }
    .measurementInput{
      width: 65px;
      height: 30px;
    }
    .cvImgQuiz{
      display: flex;
      width: 100%;
    }
    .w_50{
      width: 50%;
    }
    .cv_center{
        display: flex;
      flex-direction: column;
      align-items: center;
      
    }
    /* footer section */
        .main_result_footer {
            /* display: flex;
                align-content: center;
                align-items: center; */
            position: absolute;
            width: fit-content;
            /* justify-content: space-between; */
            /* background-color:white; */
            bottom: 5%;
            left: 15%;
            /* right: 0; */
            margin: auto;
            z-index: 400;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
        @media screen and (max-width: 380px) {
            
        }
        
        
        @media screen and (max-width: 600px) {
            .answer_quiz{
              width: 100%;
            }
              .main_result_footer {
            width: 80%;
            left: 0;
            right: 0;
            }
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
            bottom: 4%;
            }
            
        }
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .main_result_footer {
            
            }
        }
  
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .main_result_footer {
           
            }
        }
    `;var Dc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Ec=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Oc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Dc(e,i,n),n};let Pc=class extends ot{constructor(){super()}_backTo(){const t={detail:{response:this.quizInputIDS}};this.dispatchEvent(new CustomEvent("_userProfilePage",t))}_quizHandler(){var t={detail:{type:this.quizReviewData.quiz_type,displayQuizType:this.displayQuizType,category:this.category}};this.dispatchEvent(new CustomEvent("_checkQuizType",t))}render(){return R`
          <div class="userpage">
                <p>${this.userPageData.title}</p>
                
                <div class="answer_quiz">
                  ${this.quizReviewData.input_data.height?R`
                    
                      <div class="quizcol">
                      <div class="quiz_label"> ${this.userPageData.quiz.height}</div>
                      <div class="quiz_ans">
                        <div>
                          <input id="ftHeightInput" class="heightInput  valBox" value=${this.heightFt} name="heightfy" disabled="" />
                          <a class="unitNm">ft</a>
                          <input id="inHeightInput" class="heightInput valBox" value=${this.heightInch} name="heightin" disabled="" />
                          <a class="unitNm">in</a>
                        </div>
                      </div>
                    </div>

                    `:""}
                  ${this.quizReviewData.input_data.weight?R`
                    <div class="quizcol">
                    <div class="quiz_label">${this.userPageData.quiz.weight}</div>
                    <div class="quiz_ans">
                      <div>
                        <input id="ftWeightInput" class="weightInput valBox" value=${this.quizReviewData.input_data.weight} name="weight" disabled="" />
                        <a class="unitNm">lbs</a>
                      </div>
                    </div>
                  </div>
                    `:""}
                  ${this.quizReviewData.input_data.age?R`
                    <div class="quizcol">
                    <div class="quiz_label">${this.userPageData.quiz.age}</div>
                    <div class="quiz_ans">
                      <div>
                        <input id="singleInputNum" class="weightInput valBox" value=${this.quizReviewData.input_data.age} name="singleInputNum" disabled="" />
                      </div>
                    </div>
                  </div>
                    `:""}

                    ${this.quizReviewData.input_data.belly_shape?R`
                      <div class="quizcol">
                      <div class="quiz_label">${this.userPageData.quiz.belly_shape}</div>
                      <div class="quiz_ans">
                        <div class="singleInputTxt" >
                          <input id="singleInputTxt" class="singleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.belly_shape}" name="doubleInputTxt_1" disabled="" />
                        </div>
                      </div>
                    </div>`:""}
                    ${this.quizReviewData.input_data.hip_shape?R`
                      <div class="quizcol">
                      <div class="quiz_label">${this.userPageData.quiz.hip_shape}</div>
                      <div class="quiz_ans">
                        <div class="singleInputTxt" >
                          <input id="singleInputTxt" class="singleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.hip_shape}" name="doubleInputTxt_1" disabled="" />
                        </div>
                      </div>
                    </div>`:""}
                    ${this.quizReviewData.input_data.seat_shape?R`
                      <div class="quizcol">
                      <div class="quiz_label">${this.userPageData.quiz.seat_shape}</div>
                      <div class="quiz_ans">
                        <div class="singleInputTxt" >
                          <input id="singleInputTxt" class="singleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.seat_shape}" name="doubleInputTxt_1" disabled="" />
                        </div>
                      </div>
                    </div>`:""}
                    
                  ${this.quizReviewData.input_data.bra_cup?R`
                    
                    <div class="quizcol">
                    <div class="quiz_label">${this.userPageData.quiz.bra_cup}</div>
                    <div class="quiz_ans">
                      <div class="doubleInput" >
                        <input id="doubleInputNum_1" class="doubleInputNum valBox" value="${this.quizReviewData.input_data.bra_cup}" name="doubleInputNum_1" disabled="" />
                        <input id="doubleInputNum_2" class="doubleInputNum valBox" value="${this.quizReviewData.input_data.bra_band}" name="doubleInputNum_2" disabled="" />
                      </div>
                    </div>
                  </div>

                    `:""}
                  ${this.quizReviewData.input_data.pants_brand?R`
                    <div class="quizcol">
                    <div class="quiz_label">${this.userPageData.quiz.pants_brand}</div>
                    <div class="quiz_ans">
                      <div class="doubleInput" >
                        <input id="doubleInputTxt_1" class="doubleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.pants_brand.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}" name="doubleInputTxt_1" disabled="" />
                        <input id="doubleInputTxt_2" class="doubleInputNum valBox" value="${this.quizReviewData.input_data.pants_size}" name="doubleInputTxt_2" disabled="" />
                      </div>
                    </div>
                  </div>`:""}

                  ${this.quizReviewData.input_data.shirt_brand?R`
                    <div class="quizcol">
                    <div class="quiz_label">${this.userPageData.quiz.shirt_brand}</div>
                    <div class="quiz_ans">
                      <div class="doubleInput" >
                        <input id="doubleInputTxt_1" class="doubleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.shirt_brand.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}" name="doubleInputTxt_1" disabled="" />
                        <input id="doubleInputTxt_2" class="doubleInputNum valBox" value="${this.quizReviewData.input_data.shirt_size}" name="doubleInputTxt_2" disabled="" />
                      </div>
                    </div>
                  </div>`:""}

                  ${this.quizReviewData.input_data.ethnicity?R`
                    <div class="quizcol">
                    <div class="quiz_label">${this.userPageData.quiz.ethnicity}</div>
                    <div class="quiz_ans">
                      <div class="singleInputTxt" >
                        <input id="singleInputTxt" class="singleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.ethnicity}" name="doubleInputTxt_1" disabled="" />
                      </div>
                    </div>
                  </div>`:""}

                  
                  
                  ${this.quizReviewData.input_data.body_measurements?R`
                      ${this.quizReviewData.input_data.body_measurements==ii?R`
                          <div class="quizcol">
                            <div class="quiz_label">${this.userPageData.quiz.body_measurements}</div>
                            <div class="quiz_ans">
                              <div class="singleInputTxt" >
                                <input id="singleInputTxt" class="singleInputTxt valBox txtLeft" value="${this.quizReviewData.input_data.body_measurements}" name="doubleInputTxt_1" disabled="" />
                              </div>
                            </div>
                          </div>

                          ${this.category==Ye?R`
                          
                          ${this.quizReviewData.input_data.chest?R`
                     <div class="quizcol">
                    <div class="quiz_label"> ${this.userPageData.quiz.chest}</div>
                    <div class="quiz_ans">
                      <div>
                        <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.chest?"":this.quizReviewData.input_data.chest} name="measurementInput" disabled="" />
                        <a class="unitNm">in</a>
                      </div>
                    </div>
                  </div>
                    `:""}
                          `:R`
                          
                           ${this.quizReviewData.input_data.bust?R`
                     <div class="quizcol">
                    <div class="quiz_label"> ${this.userPageData.quiz.bust}</div>
                    <div class="quiz_ans">
                      <div>
                        <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.bust?"":this.quizReviewData.input_data.bust} name="measurementInput" disabled="" />
                        <a class="unitNm">in</a>
                      </div>
                    </div>
                  </div>
                    `:""}
                          `}

                         

                     

                    ${this.quizReviewData.input_data.waist?R`
                      <div class="quizcol">
                     <div class="quiz_label">${this.userPageData.quiz.waist}</div>
                     <div class="quiz_ans">
                       <div>
                         <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.waist?"":this.quizReviewData.input_data.waist} name="measurementInput" disabled="" />
                         <a class="unitNm">in</a>
                       </div>
                     </div>
                   </div>
                     `:""}

                     ${this.quizReviewData.input_data.hip?R`
                      <div class="quizcol">
                     <div class="quiz_label">${this.userPageData.quiz.hip}</div>
                     <div class="quiz_ans">
                       <div>
                         <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.hip?"":this.quizReviewData.input_data.hip} name="measurementInput"  disabled="" />
                         <a class="unitNm">in</a>
                       </div>
                     </div>
                   </div>
                     `:""}

                     ${this.quizReviewData.input_data.bicep?R`
                      <div class="quizcol">
                     <div class="quiz_label">${this.userPageData.quiz.bicep}</div>
                     <div class="quiz_ans">
                       <div>
                         <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.bicep?"":this.quizReviewData.input_data.bicep} name="measurementInput" disabled="" />
                         <a class="unitNm">in</a>
                       </div>
                     </div>
                   </div>
                     `:""}
                        `:""}
                     `:R`

                     ${this.category==Ye?R`
                     ${this.quizReviewData.input_data.chest?R`
                     <div class="quizcol">
                    <div class="quiz_label"> ${this.userPageData.quiz.chest}</div>
                    <div class="quiz_ans">
                      <div>
                        <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.chest?"":this.quizReviewData.input_data.chest} name="measurementInput" disabled="" />
                        <a class="unitNm">in</a>
                      </div>
                    </div>
                  </div>
                    `:""}
                     `:R`
                     ${this.quizReviewData.input_data.bust?R`
               <div class="quizcol">
              <div class="quiz_label"> ${this.userPageData.quiz.bust}</div>
              <div class="quiz_ans">
                <div>
                  <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.bust?"":this.quizReviewData.input_data.bust} name="measurementInput" disabled="" />
                  <a class="unitNm">in</a>
                </div>
              </div>
            </div>
              `:""}
                     `}

                    

               

              ${this.quizReviewData.input_data.waist?R`
                <div class="quizcol">
               <div class="quiz_label">${this.userPageData.quiz.waist}</div>
               <div class="quiz_ans">
                 <div>
                   <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.waist?"":this.quizReviewData.input_data.waist} name="measurementInput" disabled="" />
                   <a class="unitNm">in</a>
                 </div>
               </div>
             </div>
               `:""}

               ${this.quizReviewData.input_data.hip?R`
                <div class="quizcol">
               <div class="quiz_label">${this.userPageData.quiz.hip}</div>
               <div class="quiz_ans">
                 <div>
                   <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.hip?"":this.quizReviewData.input_data.hip} name="measurementInput"  disabled="" />
                   <a class="unitNm">in</a>
                 </div>
               </div>
             </div>
               `:""}

               ${this.quizReviewData.input_data.bicep?R`
                <div class="quizcol">
               <div class="quiz_label">${this.userPageData.quiz.bicep}</div>
               <div class="quiz_ans">
                 <div>
                   <input id="measurementInput" class="measurementInput valBox" value=${0==this.quizReviewData.input_data.bicep?"":this.quizReviewData.input_data.bicep} name="measurementInput" disabled="" />
                   <a class="unitNm">in</a>
                 </div>
               </div>
             </div>
               `:""}
                  `}


                  ${this.quizReviewData.input_data.front_image_url?R`
                    <div class="quizcol">
                    <div class="cvImgQuiz">
                      <div class="w_50 cv_center">
                        <div class="quiz_label center">${this.userPageData.quiz.front_image_url}</div>
                        <div class="img_cv_div">
                          <img class="" src="${this.quizReviewData.pre_signed_front_image_url}" />
                        </div>
                      </div>
                      <div class="w_50 cv_center">
                        <div class="quiz_label center">${this.userPageData.quiz.side_image_url}</div>
                        <div class="img_cv_div">
                          <img class="" src="${this.quizReviewData.pre_signed_side_image_url}" />
                        </div>
                      </div>
                    </div>
                  </div>
                    `:""}
                  

                  <div class="quizcol align-center">
                    <a class="redo_fit" href="javascript:void(0);"  @click=${t=>this._quizHandler()}><u>${this.userPageData.retake_quiz_txt}</u></a>
                  </div>

                </div>
          </div> 

          ${this.userPageData.back_nav?R`
            <c-temp-back-button navigationIcon=${JSON.stringify(this.userPageData.back_nav)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
            `:R`
                <div class="main_result_footer cc_button_text_circle">
                    <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                </div> 
            `}
        </div> 
        `}firstUpdated(t){let e=this.quizReviewData.input_data.height/12;this.heightFt=String(e).split(".")[0],this.heightInch=this.quizReviewData.input_data.height%12,this.heightInch=this.heightInch.toFixed(0)}};Pc.styles=[Nc],Ec([Y({type:Object})],Pc.prototype,"userPageData",2),Ec([Y({type:Object})],Pc.prototype,"quizReviewData",2),Ec([Y({type:String})],Pc.prototype,"heightFt",2),Ec([Y({type:String})],Pc.prototype,"heightInch",2),Ec([Y({type:String})],Pc.prototype,"quizType",2),Ec([Y({type:Object})],Pc.prototype,"quizInputIDS",2),Ec([Y({type:String})],Pc.prototype,"category",2),Ec([Y({type:String})],Pc.prototype,"theme",2),Ec([Y({type:String})],Pc.prototype,"displayQuizType",2),Pc=Ec([G("t-user-review-page")],Pc);const Cc=et`
        /* hepl page main div */
        .user_profile_page {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            height: 100%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 4%;
        }
        .user_profile_page > p {
            margin-top: 22px;
        }
        .user_profile_title {
            display: flex;
            margin-top: 5%;
        }
        .user_profile_title p {
            margin: 5px 0px;
            font-family: var(--template-title-font);
            font-size: var(--template-title-fsize);
            color: var(--template-title-color);
        }
        .user_profile_subtitle p {
            margin: 5px 0px;
            font-family: var(--template-subtitle-font);
            font-size: var(--template-subtitle-fsize);
            color: var(--template-subtitle-color);
        }
        /* footer section */
        .main_result_footer {
            /* display: flex;
                align-content: center;
                align-items: center; */
            position: absolute;
            width: fit-content;
            /* justify-content: space-between; */
            /* background-color:white; */
            bottom: 5%;
            left: 15%;
            /* right: 0; */
            margin: auto;
            z-index: 400;
        }
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: var(--template-iconbtn-fsize);
            color: var(--template-iconbtn-color);
            border: var(--template-iconbtn-border);
            background: var(--template-iconbtn-background);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
            float: left;
        }
        /*  help option section  */
        .quiz_options_section {
            width: 60%;
            margin-top: 5%;
        }
        .quiz_options_border {
            border: var(--template-bordered-options-border);
            padding: 3px 10px 3px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            cursor: pointer;
        }
        .quiz_option_section{
            display: flex;
            align-items: center;    
        }
        .quiz_option_txt {
            color: var(--template-bordered-options-text-color);
            font-size: var(--template-bordered-options-txt-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        .quiz_option_icon {
            color: var(--template-bordered-options-icon-color);
            font-size: var(--template-bordered-options-icon-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        .quiz_option_status_icon{
            width: var(--template-bordered-options-icon-size);
            margin-right: 5px;
        }
        /* contact info alert */
        .contactInfo {
            display: none;
            position: absolute;
            align-items: center;
            justify-content: center;
            width: 100%;
            z-index: 99999;
            height: 92vh;
            top: -11%;
            background: var(--template-info-pop-up-sidebackground);
        }
        .contactNo {
            background-color: var(--template-info-pop-up-background);
            width: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .contactNo p {
            font-size: var(--template-info-pop-up-txt-fsize);
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        
        @media screen and (max-width: 600px) {
            .main_result_footer {
            width: 80%;
            left: 0;
            right: 0;
            }
        
            .user_profile_page {
            height: 82%;
            top: 6%;
            }
            .quiz_options_section {
            width: 85%;
            margin-top: 10%;
            }
        }
        
        @media only screen and (min-width: 768px) {
            .user_profile_page {
            height: 96%;
            }
        }
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .main_result_footer {
            bottom: 4%;
            }
        }
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .main_result_footer {
            
            }
        }  
    `;var Ac=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Rc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?jc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Ac(e,i,n),n};let Lc=class extends ot{constructor(){super()}_backTo(){const t={detail:{isResult:!0,fitsize:this.fitSize}};this.dispatchEvent(new CustomEvent("_resultPgae",t))}async __goToReview(t){let e={quiz_input_id:t.quiz_input_id,cust_id:this.loggedIn,quiz_type:t.quiz_type};if(null!=t.quiz_input_id){(new Zs)._startWaveLoader();let i=await(new mi).getUserDataByCustIDAndType(e,this.category);if(i){const e={detail:{response:i,displayQuizType:t.display_quiz_type}};(new Zs)._stopWaveLoader(),this.dispatchEvent(new CustomEvent("_userReviewPage",e))}(new Zs)._stopWaveLoader()}else this._quizHandler(t)}_quizHandler(t){var e={detail:{type:t.quiz_type,displayQuizType:t.display_quiz_type}};this.dispatchEvent(new CustomEvent("_checkQuizType",e))}render(){return this.dynamicSourceVar,"dark"==this.theme?this.quizTakenIcon="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGE_QUIZ_TAKEN_IMAGE_DARK:this.quizTakenIcon="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGE_QUIZ_TAKEN_IMAGE_LIGHT,"dark"==this.theme?this.quizNotTakenIcon="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGE_QUIZ_NOT_TAKEN_IMAGE_DARK:this.quizNotTakenIcon="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/source/themes/monfrere-theme/"+this.dynamicSourceVar.IMAGE_QUIZ_NOT_TAKEN_IMAGE_LIGHT,R`
            <div class="user_profile_page">
                <div class="user_profile_title">
                    <p>${this.userProfilePageData.title}</p>
                </div>  
                <div class="user_profile_subtitle">
                    <p>${this.userProfilePageData.subtitle}</p>
                </div>  
                <div class="quiz_options_section">
                ${this.quizInputIDS.map((t,e)=>R`
                    <div class="quiz_options_border" @click=${e=>this.__goToReview(t)} target="_blank" >
                        <div class="quiz_option_section">
                            ${null==t.quiz_input_id?R`
                                    <img class="quiz_option_status_icon" src="${this.quizNotTakenIcon}" />  
                                `:R`
                                    <img class="quiz_option_status_icon" src="${this.quizTakenIcon}" /> 
                                `}
                            <a class="quiz_option_txt" >${t.label}</a>
                        </div>
                        <a  href="javascript:void(0);" class="quiz_option_icon">❯</a>
                    </div>
                `)}      
                </div>
            </div>
            

             ${this.userProfilePageData.back_nav?R`
                <c-temp-back-button navigationIcon=${JSON.stringify(this.userProfilePageData.back_nav)} @backClick=${this._backTo}  theme=${this.theme} > </c-temp-back-button>
                `:R`
                    <div class="main_result_footer cc_button_text_circle">
                        <a href="javascript:void(0);" class="result_prev"  @click=${t=>this._backTo()} >❮</a>            
                    </div> 
                `}
            </div>
        `}};Lc.styles=[Cc],Rc([Y({type:Object})],Lc.prototype,"userProfilePageData",2),Rc([Y({type:String})],Lc.prototype,"fitSize",2),Rc([Y({type:Object})],Lc.prototype,"quizInputIDS",2),Rc([Y({type:String})],Lc.prototype,"quizTakenIcon",2),Rc([Y({type:String})],Lc.prototype,"quizNotTakenIcon",2),Rc([Y({type:String})],Lc.prototype,"theme",2),Rc([Y({type:Object})],Lc.prototype,"dynamicSourceVar",2),Rc([Y({type:String})],Lc.prototype,"category",2),Rc([Y({type:Object})],Lc.prototype,"cookieNameJson",2),Rc([Y({type:String})],Lc.prototype,"loggedIn",2),Rc([Y({type:String})],Lc.prototype,"displayQuizType",2),Lc=Rc([G("t-user-profile-page")],Lc);const Tc=et`
        /* best fit page main div */

        .size_is_not_found h1 {
            font-size: var(--template-bestfit-customsize-fsize) !important;
            font-family: var(--template-bestfit-customsize-font) !important;
        }
        .resultpage_digit_size_page {
            /* display: none; */
            position: absolute;
            background-color: var(--template-background);
            z-index: 100;
            width: 100%;
            text-align: center;
            height: 100%;
            align-items: center;
            flex-direction: column;
            top: 0;
        }
        /* size section */
        .resultpage_digit_size {
            display: flex;
            position: absolute;
            background-color: var(--template-background);
            z-index: 100;
            width: 100%;
            text-align: center;
            height: 100%;
            align-items: center;
            flex-direction: column;
            /* top: 5%; */
            justify-content: space-evenly;
            /* justify-content: center; */
        }
        /* half section of top  */
        .best_fit_top_section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        /* title section */
        .resultpage_digit_size_title_div {
            display: flex;
            justify-content: center;
        }
        
        #resultpage_digit_size_title {
            margin: 5px 0px 5px 0px;
            color: var(--template-bestfit-title-color);
            font-family: var(--template-bestfit-title-font);
            font-size: var(--template-bestfit-tilte-fsize);
        }
        
        .resultpage_digit_size_title_icon {
            margin: 0px 0px 5px 5px;
            /* height: fit-content;
                        width: 3%; */
            /* height: fit-content; */
            width: 15px;
            cursor: pointer;
            height: 15px;
            font-size: 13px;
            color: var(--template-bestfit-infoicon-color);
            text-decoration: none;
        }
        /* title and size section */
        .timeline_digit_size_center h1 {
            margin: 10px 0px !important;
            font-size: var(--template-bestfit-size-fsize);
            font-family: var(--template-bestfit-size-font);
            color: var(--template-bestfit-size-color);
            /* font-size: xx-large; */
        }
        
        .size_not_foundDiv{
            margin: 2% 0px 18% 0px !important;
        }
        .size_not_found{
            margin: 0px 0px !important;
            font-family: var(--template-bestfit-nosize-font);
            font-size: var(--template-bestfit-nosize-fsize);
        }
        .guidance_tip {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 2% 0px 10% 0px;
        }
        .guidance_tip p, .guidance_tip p a {
            margin: 0px;
            font-size: var(--template-info-pop-up-txt-fsize);
            line-height: 16px;
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        .margin_between_tip{
            margin-bottom: 10px;
        }

        /* bottom description non-login section */
        .result_fit_desc {
            /* padding: 20px;
                        background-color: #d9d9d9; */
            /* padding: 6%; */
            background-color: var(--template-info-pop-up-background);
            width: 50%;
            display: flex;
            height: 20%;
            justify-content: center;
            flex-direction: column;
        }
        
        .result_fit_desc p {
            margin: 0px;
            font-size: var(--template-info-pop-up-txt-fsize);
            line-height: 16px;
            color: var(--template-info-pop-up-txt-color);
            font-family: var(--template-info-pop-up--txt-font);
        }
        /* shop btn  */
        .result_shop_btn {
            background-color: var(--template-bestfit-shopbtn-background);
            color: var(--template-bestfit-shopbtn-color);
            font-family: var(--template-bestfit-shopbtn-font);
            font-size: var(--template-bestfit-shopbtn-fsize);
            min-width: 120px;
            padding: 13px 33px;
            margin: 10px 0px;
            text-decoration: none;
        }
        /* retake btn section */
        .result_redo_section {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin-top: 3%;
        }
        /* retake quiz btn and last quiz time  */
        .result_redo_button {
            border: none;
            background-color: transparent;
            text-decoration: underline;
            font-size: var(--template-bestfit-redosize-text-fsize);
            color: var(--template-bestfit-redosize-text-color);
            cursor: pointer;
            font-family: var(--template-bestfit-redosize-text-font) !important;
        }
        /* signup section  non-login user */
        .result_signing_section {
            width: 50%;
            background-color: var(--template-bestfit-signup-background);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
            justify-content: center;
            font-family: "Avenir Light" !important;
        }
        
        .result_signing_section > p {
            font-size: var(--template-bestfit-signup-subtitle-fsize);
            width: 90%;
            margin: 0px auto;
            font-family: var(--template-bestfit-signup-text-font) !important;
            line-height: 20px;
            color: var(--template-bestfit-signup-text-color);
        }
        .bottom_margin_none{
                margin-bottom: 0px !important;
        }
        .result_signing_buttons {
            font-size: 12px;
            margin: 10px 0px 5px 0px;
        }
        
        .result_signing_buttons a {
            font-size: var(--template-bestfit-signup-title-fsize);
            font-family: var(--template-bestfit-signup-text-font) !important;
            color: var(--template-bestfit-signup-text-color);
        }
        /* footer section */
        .main_result_footer {
            /* display: flex;
                        align-content: center;
                        align-items: center; */
            position: absolute;
            width: 50%;
            /* justify-content: space-between; */
            background-color: white;
            bottom: 5%;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 400;
        }
        
        .result_prev {
            text-align: center;
            width: 37px;
            height: 37px;
            border-radius: 50%;
            font-size: 18px;
            background-color: transparent;
            color: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(0, 0, 0, 0.4);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            transition: 0.6s ease;
            user-select: none;
            text-decoration: none;
            cursor: pointer;
            bottom: 0;
        }
        /* page info alert section */
        .bestFitInfo {
            display: none;
            position: absolute;
            /* background-color: rgba(217, 217, 217, 0.31); */
            align-items: center;
            justify-content: center;
            width: 100%;
            z-index: 999;
            /* height: 100%; */
            height: 92vh;
            top: -11%;
            background: var(--template-info-pop-up-sidebackground);
        }
        /* last option section login user */
        .result_options_section {
            width: 50%;
        }
        
        .result_option_border {
            border: var(--template-bordered-options-border);
            padding: 3px 10px 3px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            cursor: pointer;
        }
        
        .result_option_txt {
            color: var(--template-bordered-options-text-color);
            font-size: var(--template-bordered-options-txt-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        
        .result_option_icon {
            color: var(--template-bordered-options-icon-color);
            font-size: var(--template-bordered-options-icon-size);
            font-family: var(--template-bordered-options-txt-font);
            text-decoration: none;
        }
        
        @media screen and (max-width: 380px) {
            
        }
        
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .result_signing_section {
                padding: 15px 0px !important;
                margin: 2% !important;
            }
        
            .result_redo_section {
                padding: 5px !important;
            }
        
            .result_fit_desc {
                margin-bottom: 4%;
            }
        }
        
        @media screen and (max-width: 600px) {
            .resultpage_digit_size_page {
                z-index: 300;
                display: block;
                align-content: center;
                align-items: center;
                justify-content: center;
            }
            
            #resultpage_digit_size_title {
                margin: 0px;
            }
        
            .resultpage_digit_size_title_icon {
                margin: -2px 0px 0px 5px;
            }
        
            .result_signing_section {
                width: 70%;
                padding: 20px 0px;
                margin: 15% 0px 0px 0px;
            }
        
            .main_result_footer {
                width: 80%;
            }
        
            .bestFitInfo {
                height: 100vh;
                top: -9%;
                background: #00000033;
            }
        
            .result_fit_desc {
                width: 85%;
                display: flex;
                height: 20%;
                justify-content: center;
                flex-direction: column;
            }
        
            .result_options_section {
                width: 80%;
            }

            .resultpage_digit_size {
                 top: 0%; 
            }
            .guidance_tip {
                margin: 2% 0px 10% 0px;
            }
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            
            .result_signing_section {
                width: 70%;
            }
        
            .result_fit_desc {
                margin: 10px 0px 4%;
                width: 85%;
                display: flex;
                height: 20%;
                justify-content: center;
                flex-direction: column;
            }
        
            .bestFitInfo {
                height: 66vh;
                top: -11%;
                background: #00000033;
            }
            .guidance_tip {
                margin: 2% 0px 10% 0px;
            }
        }
    `;var Bc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Jc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Vc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Bc(e,i,n),n};let Fc=class extends ot{constructor(){super()}_showBestFitInfo(t){let e=this.shadowRoot?.querySelectorAll(".bestFitInfo")[0];e.style.display=t}_signOut(t){(new vi).deleteData(this.category,this.cookieNameJson.loggedin),(new vi).deleteData(this.category,this.cookieNameJson.last_quiz_entry),(new vi).deleteData(this.category,this.cookieNameJson.login_time);this.dispatchEvent(new CustomEvent("_afterlogOut",{detail:{value:!0}}))}_letsShop(){this.dispatchEvent(new CustomEvent("_openpage",{detail:{isoptionpg:!1,isSignUp:!1,isclosePopup:!0}}))}_redoMyFit(){this.dispatchEvent(new CustomEvent("_openpage",{detail:{isoptionpg:!0,isSignUp:!1,isclosePopup:!1}}))}render(){if(this.lastEntry=(new vi).getDataByName(this.category,this.cookieNameJson.last_quiz_entry),"undefined"!=this.lastEntry||""!=this.lastEntry){var t=new Date(this.lastEntry),e=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0"),o=t.getFullYear();this.datelstQuiz=i+"/"+e+"/"+o}return R`
            <div class="resultpage_digit_size_page">
                <div class="resultpage_digit_size">
                   <div class="best_fit_top_section">
                       <div class="timeline_digit_size_center resultpage_digit_size_title_div">
                           <p id="resultpage_digit_size_title">${this.bestFitData.title}</p>
                       </div>
                       <div class="guidance_tip">
                            ${this.bestFitData.desc.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}   
                        </div>
          
                        <a class="result_shop_btn"  href="javascript:void(0);" @click=${t=>this._letsShop()}>${this.bestFitData.action.button_label}</a> 
                       ${"null"==this.loginData?R`
                           
                           `:R`
                               ${"undefined"!=this.datelstQuiz?R`
                                   <button class="result_redo_button">${this.bestFitData.label_last_entry} ${this.datelstQuiz}</button>
                           `:""}
                               
                       `}
                       <div class="result_redo_section">
                           <button class="result_redo_button" @click=${this._redoMyFit}>${this.bestFitData.link1_label}</button>
                       </div> 
                   </div>
                  
                </div>  
            </div>
        `}};Fc.styles=[Tc],Jc([Y({type:Object})],Fc.prototype,"bestFitData",2),Jc([Y({type:Object})],Fc.prototype,"cookieNameJson",2),Jc([Y({type:String})],Fc.prototype,"partnerId",2),Jc([Y({type:String})],Fc.prototype,"category",2),Jc([Y({type:String})],Fc.prototype,"productHandle",2),Jc([Y({type:String})],Fc.prototype,"resultSize",2),Jc([Y({type:String})],Fc.prototype,"loginData",2),Jc([Y({type:String})],Fc.prototype,"lastEntry",2),Jc([Y({type:String})],Fc.prototype,"datelstQuiz",2),Fc=Jc([G("t-datacollection-sucess")],Fc);var Uc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,Hc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Mc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Uc(e,i,n),n};let Wc=class extends ot{constructor(){super()}_closeAfterSignUpPage(){this.dispatchEvent(new CustomEvent("_closeSignUpSuc",{detail:{isSignUpSuc:!0}}))}render(){return R`
            <div class="after_signup_page"> 
                <div class="after_signup_title">
                    <p class="title">${this.errrorPageData.title}</p>
                    <p class="subTitle">${this.errrorPageData.subtitle}</p>
                </div>
                <div class="after_signup_desc">
                    ${this.errrorPageData.info.map((t,e)=>R`<p>${t}</p>`)}   
                </div>
                <button class="result_shop_btn" @click=${t=>this._closeAfterSignUpPage()}>
                    ${this.errrorPageData.action.button_label}
                </button> 
            </div>
        `}};Wc.styles=[ul],Hc([Y({type:Object})],Wc.prototype,"errrorPageData",2),Hc([Y({type:String})],Wc.prototype,"partnerId",2),Hc([Y({type:String})],Wc.prototype,"category",2),Hc([Y({type:String})],Wc.prototype,"productHandle",2),Hc([Y({type:Object})],Wc.prototype,"cookieNameJson",2),Hc([Y({type:String})],Wc.prototype,"theme",2),Wc=Hc([G("t-quiz-error-page")],Wc);const Qc=et`
        /* size not found page */
        .size_error {
            /* display: none; */
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            height: 86%;
            align-items: center;
            z-index: 400;
            position: absolute;
            width: 100%;
            background-color: var(--template-background);
            top: 0;
        }
        /* shop btn */
        .shop_btn {
            background-color: var(--template-bestfit-shopbtn-background);
            color: var(--template-bestfit-shopbtn-color);
            font-family: var(--template-bestfit-shopbtn-font);
            font-size: var(--template-bestfit-shopbtn-fsize);
            min-width: 120px;
            padding: 17px 33px;
        }
        /* retake btn section */
        .redo_section {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin-top: 1%;
        }
        /* retake btn */
        .redo_button {
            border: none;
            background-color: transparent;
            font-size: var(--template-bestfit-redosize-text-fsize);
            color: var(--template-bestfit-redosize-text-color);
            text-decoration: underline;
            cursor: pointer;
            font-family: var(--template-bestfit-redosize-text-font) !important;
        }
        /* error desc section */
        .size_error_desc {
            width: 90%;
            text-align: center;
            margin-bottom: 50px;
            margin-bottom: 9%;
        }
        .size_error_desc > P {
            margin: 0px;
            color: var(--template-sizenotfound-desc-color);
            font-family: var(--template-sizenotfound-desc-font);
            font-size: var(--template-sizenotfound-desc-fsize);
        }

        .result_text {
            font-size: 36px;
            color: var(--template-sizenotfound-notfound-color);
            font-family: var(--template-sizenotfound-notfound-font);
            font-size: var(--template-sizenotfound-notfound-fsize);
            margin-top: 0;
            margin-bottom: 3%;
        }
        /* title  */
        .best_fit_text {
            color: var(--template-bestfit-title-color);
            font-family: var(--template-bestfit-title-font);
            font-size: var(--template-bestfit-tilte-fsize);
        }
        
        @media screen and (max-width: 380px) {
            /* .size_error{
                        display: flex;
                        place-content: center space-evenly;
                        align-items: center;
                        height: 68%;
                        top: 16%;
                    } */
        }
        
        @media screen and (max-width: 380px), screen and (max-height: 670px) {
            .redo_section {
            padding: 5px !important;
            }
            /* .redo_section{
                        padding: 5px  !important;
                        background: red;
                    }
                    .size_error{
                        display: flex;
                        place-content: center space-evenly;
                        align-items: center;
                        height: 68%;
                        top: 16%; 
                    }  */
        }
        
        @media screen and (max-width: 600px) {
            .redo_section {
            width: 80%;
            }
            /* .size_error{
                        display: flex;
                        place-content: center space-evenly;
                        align-items: center;
                        height: 68%;
                        top: 16%;
                    } */
        }
        
        @media only screen and (max-width: 900px) and (min-device-width: 600px) {
            .redo_section {
            width: 80%;
            }
        }
  
    `;var Gc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,Yc=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?Kc(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&Gc(e,i,n),n};let Zc=class extends ot{constructor(){super()}_redoMyFit(){this.dispatchEvent(new CustomEvent("_optionPage",{detail:{isoptionpg:!0}}))}_letsShop(){this.dispatchEvent(new CustomEvent("_optionPage",{detail:{isoptionpg:!1,isclosePopup:!0}}))}render(){return R`
         <div class="size_error">
             <p class="best_fit_text">${this.processingErrorData.title}</p>
             <div class="size_error_desc">
                ${this.processingErrorData.top_info.map(t=>R`<p>${t}</p>`)}
             </div>
             <a  href="javascript:void(0);" class="shop_btn" href="#" @click=${t=>this._redoMyFit()}>${this.processingErrorData.action.button_label}</a>
             
        </div>
        `}};Zc.styles=[Qc],Yc([Y({type:Object})],Zc.prototype,"processingErrorData",2),Yc([Y({type:Object})],Zc.prototype,"cookieNameJson",2),Yc([Y({type:String})],Zc.prototype,"theme",2),Zc=Yc([G("t-processing-error")],Zc);const Xc=et`
       .session_timeout_screen{
            display: flex;
            width: 100%;
            height: 95%;
            justify-content: center;
            align-items: center;
       }
       .timeout_title{
            font-weight: bold;
            margin: 5px 0px;
            font-family: var(--template-title-font);
            font-size: var(--template-title-fsize);
            color: var(--template-title-color);
       }
       .timeout_desc{
        font-family: var(--template-subtitle-font);
        font-size: var(--template-subtitle-fsize);
        color: var(--template-subtitle-color);
       }
    `;var tp=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,ip=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?ep(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&tp(e,i,n),n};let op=class extends ot{constructor(){super()}render(){return R`
           <div class="session_timeout_screen">
                <div class="timeout_content">
                    <p class="timeout_title">${this.timeoutData.title}</p>
                    <p class="timeout_desc">${this.timeoutData.subtitle}</p>
                </div>
           </div>
        `}firstUpdated(t){}};op.styles=[Xc],ip([Y({type:Object})],op.prototype,"timeoutData",2),op=ip([G("t-session-timeout")],op);const ap=et`
  /* best fit page main div */
  .resultpage_digit_size_page {
      /* display: none; */
      position: absolute;
      background-color: var(--template-background);
      z-index: 100;
      width: 100%;
      text-align: center;
      height: 100%;
      align-items: center;
      flex-direction: column;
      top: 0;
  }
  /* size section */
  .resultpage_digit_size {
      display: flex;
      position: absolute;
      background-color: var(--template-background);
      z-index: 100;
      width: 100%;
      text-align: center;
      height: 100%;
      align-items: center;
      flex-direction: column;
      /* top: 5%; */
      justify-content: space-evenly;
      /* justify-content: center; */
  }
  /* half section of top  */
  .best_fit_top_section {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  /* title section */
  .resultpage_digit_size_title_div {
      display: flex;
      justify-content: center;
  }
  
  #resultpage_digit_size_title {
      margin: 5px 0px 5px 0px;
      color: var(--template-bestfit-title-color);
      font-family: var(--qr-result-title-font);
      font-size: var(--qr-result-title-fsize);
  }
  
  .resultpage_digit_size_title_icon {
      margin: 0px 0px 5px 5px;
      /* height: fit-content;
                  width: 3%; */
      /* height: fit-content; */
      width: 15px;
      cursor: pointer;
      height: 15px;
      font-size: 13px;
      color: var(--template-bestfit-infoicon-color);
      text-decoration: none;
  }
  /* title and size section */
  .timeline_digit_size_center h1 {
      margin: 10px 0px !important;
      font-size: var(--template-bestfit-size-fsize);
      font-family: var(--template-bestfit-size-font);
      color: var(--template-bestfit-size-color);
      /* font-size: xx-large; */
  }
  .guidance_tip {
      width: 100%;
      display: flex;
      height: 20%;
      justify-content: center;
      flex-direction: column;
      margin: 0px 0px 20% 0px;
  }
  .guidance_tip p {
      margin: 0px;
      font-size: var(--template-info-pop-up-txt-fsize);
      line-height: 16px;
      color: var(--template-info-pop-up-txt-color);
      font-family: var(--template-info-pop-up--txt-font);
  }

  /* bottom description non-login section */
  .result_fit_desc {
      /* padding: 20px;
                  background-color: #d9d9d9; */
      /* padding: 6%; */
      background-color: var(--template-info-pop-up-background);
      width: 50%;
      display: flex;
      height: 20%;
      justify-content: center;
      flex-direction: column;
  }
  
  .result_fit_desc p {
      margin: 0px;
      font-size: var(--template-info-pop-up-txt-fsize);
      line-height: 16px;
      color: var(--template-info-pop-up-txt-color);
      font-family: var(--template-info-pop-up--txt-font);
  }
  /* shop btn  */
  .result_shop_btn {
      background-color: var(--template-bestfit-shopbtn-background);
      color: var(--template-bestfit-shopbtn-color);
      font-family: var(--template-bestfit-shopbtn-font);
      font-size: var(--template-bestfit-shopbtn-fsize);
      min-width: 120px;
      padding: 13px 33px;
      margin: 10px 0px;
      text-decoration: none;
  }
  /* retake btn section */
  .result_redo_section {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      margin-top: 3%;
  }
  /* retake quiz btn and last quiz time  */
  .result_redo_button {
      border: none;
      background-color: transparent;
      text-decoration: underline;
      font-size: var(--template-bestfit-redosize-text-fsize);
      color: var(--template-bestfit-redosize-text-color);
      cursor: pointer;
      font-family: var(--template-bestfit-redosize-text-font) !important;
  }
  /* signup section  non-login user */
  .result_signing_section {
      width: 50%;
      background-color: var(--template-bestfit-signup-background);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      justify-content: center;
      font-family: "Avenir Light" !important;
  }
  
  .result_signing_section > p {
      font-size: var(--template-bestfit-signup-subtitle-fsize);
      width: 90%;
      margin: 0px auto;
      font-family: var(--template-bestfit-signup-text-font) !important;
      line-height: 20px;
      color: var(--template-bestfit-signup-text-color);
  }
  
  .result_signing_buttons {
      font-size: 12px;
      margin: 10px 0px 5px 0px;
  }
  
  .result_signing_buttons a {
      font-weight: bold;
      font-size: var(--template-bestfit-signup-title-fsize);
      font-family: var(--template-bestfit-signup-text-font) !important;
      color: var(--template-bestfit-signup-text-color);
  }
  /* footer section */
  .main_result_footer {
      /* display: flex;
                  align-content: center;
                  align-items: center; */
      position: absolute;
      width: 50%;
      /* justify-content: space-between; */
      background-color: white;
      bottom: 5%;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 400;
  }
  
  .result_prev {
      text-align: center;
      width: 37px;
      height: 37px;
      border-radius: 50%;
      font-size: 18px;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(0, 0, 0, 0.4);
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      transition: 0.6s ease;
      user-select: none;
      text-decoration: none;
      cursor: pointer;
      bottom: 0;
  }
  /* page info alert section */
  .bestFitInfo {
      display: none;
      position: absolute;
      /* background-color: rgba(217, 217, 217, 0.31); */
      align-items: center;
      justify-content: center;
      width: 100%;
      z-index: 999;
      /* height: 100%; */
      height: 92vh;
      top: -11%;
      background: var(--template-info-pop-up-sidebackground);
  }
  /* last option section login user */
  .result_options_section {
      width: 50%;
  }
  
  .result_option_border {
      border: var(--template-bordered-options-border);
      padding: 3px 10px 3px 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      cursor: pointer;
  }
  
  .result_option_txt {
      color: var(--template-bordered-options-text-color);
      font-size: var(--template-bordered-options-txt-size);
      font-family: var(--template-bordered-options-txt-font);
      text-decoration: none;
  }
  
  .result_option_icon {
      color: var(--template-bordered-options-icon-color);
      font-size: var(--template-bordered-options-icon-size);
      font-family: var(--template-bordered-options-txt-font);
      text-decoration: none;
  }

  .result_label_top{
    font-size: var(--template-info-pop-up-txt-fsize);
    line-height: 16px;
    color: var(--template-info-pop-up-txt-color);
    font-family: var(--template-info-pop-up--txt-font);
    margin-bottom: 15%;
}
.result_label_bottom{
  font-size: var(--template-info-pop-up-txt-fsize);
  line-height: 16px;
  color: var(--template-info-pop-up-txt-color);
  font-family: var(--template-info-pop-up--txt-font);
  margin-top: 15%;
}
.result_label_bottom a{
  text-decoration: underline;
}
  @media screen and (max-width: 380px) {
      
  }
  
  @media screen and (max-width: 380px), screen and (max-height: 670px) {
      .result_signing_section {
          padding: 15px 0px !important;
          margin: 2% !important;
      }
  
      .result_redo_section {
          padding: 5px !important;
      }
  
      .result_fit_desc {
          margin-bottom: 4%;
      }
  }
  
  @media screen and (max-width: 600px) {
      .resultpage_digit_size_page {
          z-index: 300;
          display: block;
          align-content: center;
          align-items: center;
          justify-content: center;
      }
      
      #resultpage_digit_size_title {
          margin: 0px;
      }
  
      .resultpage_digit_size_title_icon {
          margin: -2px 0px 0px 5px;
      }
  
      .result_signing_section {
          width: 70%;
          padding: 20px 0px;
          margin: 15% 0px 0px 0px;
      }
  
      .main_result_footer {
          width: 80%;
      }
  
  
      .result_fit_desc {
          width: 85%;
          display: flex;
          height: 20%;
          justify-content: center;
          flex-direction: column;
      }
  
      .result_options_section {
          width: 80%;
      }

      .resultpage_digit_size {
        top: 0px;
      }
  }
  
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
      
      .result_signing_section {
          width: 70%;
      }
  
      .result_fit_desc {
          margin: 10px 0px 4%;
          width: 85%;
          display: flex;
          height: 20%;
          justify-content: center;
          flex-direction: column;
      }
  
  }
  `;var np=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,rp=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?sp(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&np(e,i,n),n};let lp=class extends ot{constructor(){super()}_backTo(){this.dispatchEvent(new CustomEvent("optionSlide",{detail:{optionpg:!0}}))}render(){return R`
        <div class="resultpage_digit_size_page">
        <div class="resultpage_digit_size">
           <div class="best_fit_top_section">
               <div class="timeline_digit_size_center resultpage_digit_size_title_div">
                  <p id="resultpage_digit_size_title">${this.cvCodeData.title}</p> 
                 
                  
               </div>
               <p class="result_label_top">${this.cvCodeData.bootom_info}</p>
           </div>
           
        </div>  
        
    </div>
    `}firstUpdated(t){}};lp.styles=[ap],rp([Y({type:String})],lp.prototype,"partnerId",2),rp([Y({type:String})],lp.prototype,"productHandle",2),rp([Y({type:String})],lp.prototype,"productCategory",2),rp([Y({type:Object})],lp.prototype,"cvCodeData",2),rp([Y({type:Object})],lp.prototype,"cookieNameJson",2),rp([Y({type:String})],lp.prototype,"theme",2),rp([Y({type:String})],lp.prototype,"qrCodeImageId",2),lp=rp([G("t-cvcode-result")],lp);var cp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,dp=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?pp(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&cp(e,i,n),n};let up=class extends ot{constructor(){super(),this.b2b2cEle="quidget-button",this.iframeTag="iframe",this.isEleFound=!1,this.quiz="",this.headerImg={header:{logo_url:"",logo_position:"left"}},this.isShowEmailPass,this.timer=fe,new nc("en"),this.theme=ei,this.handleSystemThemeChange=this.handleSystemThemeChange.bind(this)}_showLoader(){document.querySelector("quidget-button").shadowRoot.querySelector("#waveloader").style.display="flex"}_stopLoader(){document.querySelector("quidget-button").shadowRoot.querySelector("#waveloader").style.display="none"}_showErrorPage(t){alert(),this.toRender=Pe}_openSizeNotFound(t){alert(),t.detail.isOpenSizenotFound&&(this.toRender=Ae)}__getSourceVariable(t){fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.dynamicSourceVar=t}).catch(t=>{})}async __getQuizJson(t){await fetch(t).then(t=>{if(t.ok)return t.json();throw new Error("Network response was not ok")}).then(t=>{this.b2b2cJson=t}).catch(t=>{})}async scanedQrAPI(t){let e={partnerId:this.partnerId,qrcodeid:this.qrCodeImageId,qr_code_image_status:t},i=await(new mi).updareQrCodeStatus(e);i?i.error_msg?(i.error_msg==ci?this._openSessionTimeout():i.error_msg==pi?this._openQrCodeExpired():this._openSessionTimeout(),this.stopTimer()):i.status&&(i.status==ge?this.toRender=Ue:(this._setTimer(),this.toRender=Ie)):this.stopTimer(),(new Zs)._stopWaveLoaderMob()}_setTimer(){let t=this.timer;this.timerInterval=setInterval(()=>{Math.floor(t/60);t--,t<0&&(this.stopTimer(),this._openSessionTimeout())},1e3)}stopTimer(){clearInterval(this.timerInterval)}_openSessionTimeout(){this.toRender=Me}_openQrCodeExpired(){this.toRender=He}_imageUploadError(t){this.stopTimer(),t.detail.isTimeout?this._openSessionTimeout():t.detail.isExpired&&this._openQrCodeExpired()}_afterSubmitCodeResultPage(t){clearInterval(this.timerInterval),this.scanedQrAPI(ge)}render(){return this.dynamicSourceVar&&(this.theme==ti?this.headerImg={header:{logo_url:"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/"+this.dynamicSourceVar.IMAGES_HEADER_ICON_DARK}}:this.headerImg={header:{logo_url:"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/"+this.dynamicSourceVar.IMAGES_HEADER_ICON_LIGHT}}),this.b2b2cJson&&(this.templateJson=this.b2b2cJson.template,this.quiz=this.b2b2cJson.quiz[this.productCategory][this.quizType]),R`
            <link rel="stylesheet" href=${this.fontStyle} />
            <link rel="stylesheet" href=${this.colorStyle} />

            <wave-loader class="wave_loader" id="wave_loader"></wave-loader>
            <div class="quidget_container">
                <div class="quidget">
                    <c-header class="headerTag" headerImgs= ${JSON.stringify(this.headerImg)} isCloseicon="hide" ></c-header>
                    <div class="quiz_types_container">
                        <div class="quiz_container">
                            ${this.toRender==Ie?R`
                               ${""!=this.quiz?R`
                                     <question-template class="questiontag" id="questiontag" 
                                    partnerId=${this.partnerId}   theme=${this.theme}  qrCodeImageId=${this.qrCodeImageId}
                                    category=${this.productCategory}  quizSelectedInputId=${this.quizSelectedInputId}
                                    quizData=${JSON.stringify(this.quiz)}  quizType=${this.quizType}
                                    @_errorpage=${this._showErrorPage} @_resultCVCodePgae=${this._afterSubmitCodeResultPage}  
                                    @_openSizeNotPage = ${this._openSizeNotFound} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    isFirstQuestion = ${this.isFirstQuestion} @imageUploadError=${this._imageUploadError}></question-template> 
                                `:R`
                                      
                                `}       
                                `:this.toRender==Ue?R`
                                <t-cvcode-result cvCodeData=${JSON.stringify(this.templateJson.cvcode_result)} 
                                theme=${this.theme}  partnerId=${this.partnerId} qrCodeImageId=${this.qrCodeImageId}
                                category=${this.productCategory}  @imageUploadError=${this._imageUploadError} >
                                </t-cvcode-result>
                                `:this.toRender==Me?R`
                                <t-session-timeout timeoutData=${JSON.stringify(this.templateJson.session_timeout)} 
                                theme=${this.theme}  >
                                </session-timeout>
                                `:this.toRender==He?R`
                             <t-session-timeout timeoutData=${JSON.stringify(this.templateJson.qrcode_expired)} 
                                        theme=${this.theme}  >
                            </session-timeout>
                            `:""}
                        </div>
                    </div>
                </div>
            </div>      
            
        `}async firstUpdated(t){const e=window.location.search,i=new URLSearchParams(e);this.partnerId=i.get("partner_id"),this.qrCodeImageId=i.get("qr_code_image_id"),this.productCategory=i.get("category"),this.quizType=de;window.top.document.body;const o=Array.from(document.querySelectorAll("*")).map(t=>parseFloat(getComputedStyle(t).zIndex)).filter(t=>!isNaN(t));o.length>0&&(this.popupZindex=Math.max(...o));var a=(new cc).getCustomizationJson();this.fontStyle=a.fontVarCss,this.colorStyle=a.colorVarCss,await this.__getSourceVariable(a.variableJson),await this.__getQuizJson(a.b2b2cQuizJson);var n=a.externalCss;if(n){const t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.appendChild(t)}for(var s=this.b2b2cJson.fontcss,r=0;r<s.length;r++){const t=document.createElement("link");t.rel="stylesheet",t.href="https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/"+s[r],document.head.appendChild(t)}this.envCookieFlag=Ge,this.cookieNameJson=(new mi).getCookieName(this.envCookieFlag),(new Zs)._startWaveLoaderMob(),await this.scanedQrAPI(me)}connectedCallback(){super.connectedCallback(),this.updateThemeBasedOnSystemPreference(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.handleSystemThemeChange)}disconnectedCallback(){super.disconnectedCallback(),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.handleSystemThemeChange)}handleSystemThemeChange(t){this.updateThemeBasedOnSystemPreference()}updateThemeBasedOnSystemPreference(){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.theme=t?ti:ei,this.theme}};up.styles=[ar],dp([Y({type:Object})],up.prototype,"headerImg",2),dp([Y({type:String})],up.prototype,"quizType",2),dp([Y({type:Object})],up.prototype,"quiz",2),dp([Y({type:String})],up.prototype,"partnerId",2),dp([Y({type:String})],up.prototype,"productCategory",2),dp([Y({type:String})],up.prototype,"productHandle",2),dp([Y({type:String})],up.prototype,"quizAnswers",2),dp([Y({type:Object})],up.prototype,"templateJson",2),dp([Y({type:String})],up.prototype,"bestFitSize",2),dp([Y({type:Boolean})],up.prototype,"islogin",2),dp([Y({type:String})],up.prototype,"isFirstQuestion",2),dp([Y({type:Object})],up.prototype,"quizAnswersFromCookies",2),dp([Y({type:String})],up.prototype,"emailId",2),dp([Y({type:String})],up.prototype,"password",2),dp([Y({type:String})],up.prototype,"firstNm",2),dp([Y({type:String})],up.prototype,"lastNm",2),dp([Y({type:String})],up.prototype,"toRender",2),dp([Y({type:String})],up.prototype,"fromToVerify",2),dp([Y({type:String})],up.prototype,"verifyCode",2),dp([Y({type:Boolean})],up.prototype,"isShowEmailPass",2),dp([Y({type:Object})],up.prototype,"successPageData",2),dp([Y({type:String})],up.prototype,"loggedIn",2),dp([Y({type:Object})],up.prototype,"quizTypeStatus",2),dp([Y({type:Object})],up.prototype,"cookieNameJson",2),dp([Y({type:String})],up.prototype,"envCookieFlag",2),dp([Y({type:String})],up.prototype,"verifyError",2),dp([Y({type:Boolean})],up.prototype,"themeName",2),dp([Y({type:String})],up.prototype,"pdpBtnImage",2),dp([Y({type:String})],up.prototype,"fontStyle",2),dp([Y({type:String})],up.prototype,"colorStyle",2),dp([Y({type:Boolean})],up.prototype,"modeTheme",2),dp([Y({type:String})],up.prototype,"theme",2),dp([Y({type:Object})],up.prototype,"dynamicSourceVar",2),dp([Y({type:String})],up.prototype,"lastEntry",2),dp([Y({type:String})],up.prototype,"fromToprivacy",2),dp([Y({type:String})],up.prototype,"zindex",2),dp([Y({type:String})],up.prototype,"b2b2cEle",2),dp([Y({type:String})],up.prototype,"iframeTag",2),dp([Y({type:Boolean})],up.prototype,"isEleFound",2),dp([Y({type:Object})],up.prototype,"pantBrandSizeList",2),dp([Y({type:Object})],up.prototype,"braBandCupSizeList",2),dp([Y({type:Object})],up.prototype,"braBandBandSizeList",2),dp([Y({type:Object})],up.prototype,"braSizesList",2),dp([Y({type:Object})],up.prototype,"b2b2cJson",2),dp([Y({type:Object})],up.prototype,"quizInputIDS",2),dp([Y({type:Object})],up.prototype,"quizReviewData",2),dp([Y({type:String})],up.prototype,"quizSelectedInputId",2),dp([Y({type:String})],up.prototype,"qrCodeImageId",2),dp([Y({type:String})],up.prototype,"popupZindex",2),dp([Y({type:String})],up.prototype,"timer",2),dp([Y({type:Number})],up.prototype,"timerInterval",2),up=dp([G("quidget-element-mobile")],up);const hp=et`
  /* quiz-option page main div */
  .landingpage {
    display: flex;
    text-align: center;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--template-background)
  }
  /* page title */
  .landing_title {
    color: var(--template-landing-title-color);
    font-size: var(--template-landing-title-fsize);
    font-family: var(--template-landing-title-font);
    padding: 8px 12px;
    margin-bottom: 3%;
    width: 52%;
  }
  /* page description */
  .landing_desc {
    margin: 0;
    font-size: var(--template-desc-fsize);
    font-family: var(--template-desc-font);
    color: var(--template-desc-color);
  }
  .landing_desc:last-of-type {
    margin-top: 20px;
  }
  /* quiz option section */
  .quiz_types_section {
    display: flex;
    flex-direction: column;
    /* height: 32vh; */
    place-content: space-evenly;
    align-content: center;
    align-items: center;
    width: 40%;
    margin-top: 5%;
  }
  .disable_quiz_option {
    opacity: 0.5;
    pointer-events: none;
  }
  .uppercase_txt{
    text-transform: uppercase;
  }
  /* quiz type btn */
  .quiz_types_btn {
    background-color: var(--template-landing-button-background);
    color: var(--template-landing-button-color);
    border: var(--template-landing-button-border);
    /* padding:2vh 0px; */
    height: 47px;
    font-size: var(--template-landing-button-fsize);
    width: 70%;
    margin: 3% 0px;
    font-family: var(--template-landing-button-font);
    cursor: pointer;
    border-radius: 5px
  }
    .rounded_rectangle{
      border-radius: 5px !important;
    }
    .rectangle{
    border-radius: 0px !important;
    }
  /* sign in section */
  .landing_signin {
    font-size: var(--template-landing-signin-hyperlink-fsize);
    color: var(--template-landing-signin-hyperlink-color);
    text-decoration: underline;
    font-family: var(--template-landing-signin-hyperlink-font);
    margin-top: 5%;
  }
  /* sign out and my profile text */
  .landing_signout {
    font-size: var(--template-landing-signin-hyperlink-fsize);
    color: var(--template-landing-signin-hyperlink-color);
    text-decoration: underline;
    font-family: var(--template-landing-signin-hyperlink-font);
    margin-top: 32px;
  }
  .element_hide {
    display: none;
  }
  .element_invisible {
    visibility: hidden;
  }
  .tips{
    margin-top: 20px;
  }
  .bottom_desc{
     font-size: var(--optionpage-bottom-tips-fsize);
    color: var(--optionpage-bottom-tips-color);
    font-family: var(--optionpage-bottom-tips-font);
    font-style: italic;
    margin: 0px;
  }

  @media screen and (max-width: 600px) {
    .landing_title {
      width: 85%;
    }
    .quiz_types_section {
      height: unset;
      width: 170px;
      margin-top: 15px;
    }
    .quiz_types_btn {
      margin-top: 15px;
      padding: 0px;
      height: 47px;
      width: 170px;
    }
    .landing_signin {
      margin-top: 8%;
    }
  }
  @media only screen and (max-width: 900px) and (min-device-width: 600px) {
    .landing_title {
      width: 70%;
    }
    .quiz_types_section {
      width: 60%;
      height: 20vh;
    }
    .quiz_types_btn {
      padding: 1vh 0px;
    }
  }
`;var mp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,yp=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?gp(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&mp(e,i,n),n};let fp=class extends ot{constructor(){super()}_quizHandler(t){var e;this.quizType=t.target.id;for(let o of this.quizTypeStatus)o.quiz_type==this.quizType&&(e=o.display_quiz_type);var i={detail:{type:this.quizType,displayQuizType:e}};this.dispatchEvent(new CustomEvent("_checkQuizType",i))}_openLoginPage(t){this.dispatchEvent(new CustomEvent("_signIn",{detail:{issignin:!0}}))}_openProfilePage(){this.dispatchEvent(new CustomEvent("_openProfilePage",{detail:{isProfilePage:!0}}))}_logOut(){(new vi).deleteData(this.category,this.cookieNameJson.loggedin),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.category,this.cookieNameJson.login_time),(new vi).deleteData(this.category,this.cookieNameJson.last_quiz_entry);this.dispatchEvent(new CustomEvent("_afterlogOut",{detail:{value:!0}}))}render(){return R`
            <div class="landingpage fade">
                <!-- <div id="menuDropdown" class="menu_dropdown_content">
                    <a href="#profile">Profile</a>
                    <a href="#logout"  @click=${t=>this._logOut()}>Logout</a>
                </div> -->
                <div class="landing_title">${this.optionPageData.title}</div>
                ${this.optionPageData.info.map((t,e)=>R`<p class="landing_desc">${t}</p>`)}
                <div class="quiz_types_section">

                ${this.quizTypeStatus.map((t,e)=>R`               
                    <button id="${t.quiz_type}" class="quiz_types_btn ${"ACTIVE"==t.status?"":"disable_quiz_option"} ${this.optionPageData.quiz_option_btn_shape} ${1==Number("0")?"uppercase_txt":""} " @click=${this._quizHandler}>${t.label}</button>
           
                `)}
                </div>
                
                ${this.optionPageData.action_labels?R`
                        <a class="landing_signin ${""==this.loginData?"":"element_hide"} "  href="javascript:void(0);" @click=${t=>this._openLoginPage(t)}>${this.optionPageData.action_labels.signin}</a>
                <a class="landing_signout ${""==this.loginData?"element_hide":""}"  href="javascript:void(0);"  @click=${t=>this._openProfilePage()}>${this.optionPageData.action_labels.myprofile}</a>
                    `:""}
                
                <div class="tips">
                     ${this.optionPageData.bottom_tips.map((t,e)=>R`<p class="bottom_desc">${t}</p>`)}
                </div>
                
            </div>
        `}firstUpdated(t){let e=(new vi).getDataByName(this.category,this.cookieNameJson.loggedin);this.optionPageData.action_labels&&(e?(this.shadowRoot?.querySelectorAll(".landing_signin")[0].classList.add("element_hide"),this.shadowRoot?.querySelectorAll(".landing_signout")[0].classList.remove("element_hide")):(this.shadowRoot?.querySelectorAll(".landing_signin")[0].classList.remove("element_hide"),this.shadowRoot?.querySelectorAll(".landing_signout")[0].classList.add("element_hide")))}};fp.styles=[hp],yp([Y({type:Object})],fp.prototype,"optionPageData",2),yp([Y({type:Object})],fp.prototype,"quizData",2),yp([Y({type:String})],fp.prototype,"category",2),yp([Y({type:String})],fp.prototype,"productHandle",2),yp([Y({type:String})],fp.prototype,"loginData",2),yp([Y({type:String})],fp.prototype,"partnerId",2),yp([Y({type:String})],fp.prototype,"quizType",2),yp([Y({type:String})],fp.prototype,"dissableclass",2),yp([Y({type:Object})],fp.prototype,"quizTypeStatus",2),yp([Y({type:Object})],fp.prototype,"cookieNameJson",2),yp([Y({type:String})],fp.prototype,"theme",2),fp=yp([G("t-quiz-option-datacollection")],fp);var vp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,_p=(t,e,i,o)=>{for(var a,n=o>1?void 0:o?bp(e,i):e,s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&vp(e,i,n),n};let wp=class extends ot{constructor(){super(),this.b2b2cEle="quidget-button",this.iframeTag="iframe",this.isEleFound=!1,this.rerenderQuizTemp=!0,this.quiz="",this.headerImg={header:{logo_url:"",logo_position:"left"}},this.isShowEmailPass,new nc("en"),this.theme=ei,this.handleSystemThemeChange=this.handleSystemThemeChange.bind(this)}_showLoader(){let t=document.querySelector("quidget-button").shadowRoot,e=t?.querySelector("#waveloader");e.style.display="flex"}_stopLoader(){let t=document.querySelector("quidget-button").shadowRoot,e=t?.querySelector("#waveloader");e.style.display="none"}async _setQuiz(t){this.quizType=t.detail.type,this.displayQuizType=t.detail.displayQuizType,this.quiz=this.b2b2cJson.quiz[this.productCategory][this.displayQuizType],await this._getMasterDataSizes(),await this._cookiesQuizAnswers(),this.displayQuizType==pe&&((new Zs)._startWaveLoader(),await this._getBase64Code(t),this.quizAnswersFromCookies=""),this.toRender=Ie,this.shadowRoot?.querySelectorAll("#questiontag")}async _showSetBodyScanQuiz(t){this.rerenderQuizTemp=!1,this.displayQuizType=this.quizType,this.quizType=this.quizType,this.quiz=this.b2b2cJson.quiz[this.productCategory][this.displayQuizType],this.toRender=Ie,setTimeout(()=>{this.rerenderQuizTemp=!0})}async _getBase64Code(t){let e=await(new mi).getQuizBase64CodeForQr(this.partnerId,this.productCategory);(new Zs)._stopWaveLoader(),e&&(e.error_msg||e.qr_code_image&&(this.qrBase64=e.qr_code_image,this.qrCodeImageId=e.qr_code_image_id))}async _getMasterDataSizes(){(new Zs)._startWaveLoader();let t=await(new mi).getMasterDataSizes(this.partnerId,this.productCategory);if(t&&!t.error_msg){this.braSizesList=t.BRA_SIZE;var e=t.PANT_SIZE,i=t.SHIRT_SIZES,o=t.ETHNICITY;null!=this.braSizesList&&(this.braBandBandSizeList={c_buttonGroup:this.braSizesList.map(t=>t.name)},this.braBandCupSizeList={c_buttonGroup:this.braSizesList.reduce((t,e)=>{const i=Object.keys(e.size);return t[e.name]=i,t},{})});const n=t=>t.map(t=>({label:t.label,value:t.name,c_dropdown:{list:t.size_order}})),s=we,r=_e;if(e&&(e.error||(this.pantBrandSizeList=Object.assign({[s]:n(e)},this.pantBrandSizeList))),i?i.error||(this.pantBrandSizeList=Object.assign({[r]:n(i)},this.pantBrandSizeList)):this.pantBrandSizeList=Object.assign({[r]:n(e)},this.pantBrandSizeList),o){this.ethnicityDropdownData=o[0].ethnicity_order;const t={components:[{qc_name:"c_dropdown",param_name:"ethnicity",selected_dropdown_pos:"center",c_dropdown:{list:this.ethnicityDropdownData}}]};this.ethnicityDropdownData=t}if(t.SPORTS){var a=t.SPORTS[0].sports_order;this.sportListData=JSON.stringify(a)}}(new Zs)._startWaveLoader()}_signinOpen(t){t.detail.issignin&&(this.toRender=Ne)}_openProfilePage(t){this.toRender=De}_openAccountInfoPage(t){t.detail.isAccountInfo&&(this.toRender=Te)}_openHelpCenterPage(t){t.detail.isHelpCenter&&(this.toRender=Be)}_openFaqPage(t){t.detail.isFaq&&(this.toRender=Ve)}_afterSignclosepopup(t){if(this._cartupdateFromButton(),t.detail.value){document.body.style.overflow="scroll",this.toRender=De;const t={detail:{name:name,bestFitSize:this.bestFitSize},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_closePopUp",t))}this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this._requestQuizMetadata(this.loggedIn),this._setHiddenInputData()}_afterLogOut(t){if(t.detail.value){document.body.style.overflow="scroll",this.toRender=De,this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this._cartupdateFromButton(),this._requestQuizMetadata(this.loggedIn);const t={detail:{name:name,bestFitSize:this.bestFitSize},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_closePopUp",t)),this._setHiddenInputData()}}_afterSignUpclosepopup(t){if(t.detail.isSignUpSuc){document.body.style.overflow="scroll",this.toRender=De;const t={detail:{name:name,bestFitSize:this.bestFitSize},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_closePopUp",t))}}_afterSubmitResultPage(t){if(t.detail.isResult){this.toRender=De,this.bestFitSize=t.detail.fitsize,this._cartupdateFromButton();var e=Array.from(document.querySelectorAll("*"));this.isEleFound=!1,this._checkElement(e)}const i={detail:{name:name,bestFitSize:this.bestFitSize},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_updateCart",i)),this._setHiddenInputData()}_checkElement(t){for(var e of t){if(this.isEleFound)break;if(e.tagName.toLowerCase()===this.b2b2cEle.toLowerCase()){this.isEleFound=!0,this._quidgetBtnValChange(e);break}if(e.tagName.toLowerCase()===this.iframeTag.toLowerCase()){var i=e.contentWindow;try{if(i.document){var o=i.document,a={list:Array.from(o.querySelectorAll("*"))};this._checkElementAfterResultPage(a.list)}}catch(n){}}}}_checkElementAfterResultPage(t){for(var e of t){if(this.isEleFound)break;if(e.tagName.toLowerCase()===this.b2b2cEle.toLowerCase())this._quidgetBtnValChange(e);else if(e.tagName.toLowerCase()===this.iframeTag.toLowerCase()){var i=e.contentWindow;if(e.document){var o=i.document,a={list:Array.from(o.querySelectorAll("*"))};this._checkElement(a.list)}}}}_setval(t){this.bestFitSize=t}_quidgetBtnValChange(t){document.querySelectorAll("quidget-button"),this.bestFitSize?this.dataCollection!=ni&&((new vi).setData(this.productCategory,this.cookieNameJson.best_fit_size,this.bestFitSize),this.showPdpSize()):this.handleButtonVisibility(ni)}_backFromPrivacyPage(t){t.detail.isSignUp?(this.toRender=Oe,this.isShowEmailPass=!0):t.detail.isAccountInfo&&(this.toRender=Te)}async _openPage(t){if(this.isShowEmailPass=!1,t.detail.isSignUp&&(this.toRender=Oe),t.detail.isoptionpg&&(this.toRender=$e),t.detail.isclosePopup){document.body.style.overflow="scroll";const t={detail:{name:name,bestFitSize:this.bestFitSize},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_closePopUp",t))}t.detail.iscvquiz&&(this.quizType=t.detail.quizType,this.quiz=this.b2b2cJson.quiz[this.productCategory][t.detail.displayQuizType],this._cookiesQuizAnswers(),this.toRender=Ie)}_openFitPage(t){t.detail.isfitquiz&&(this.toRender=Ie,this.quizType=t.detail.quizType,this.quiz=this.b2b2cJson.quiz[this.productCategory][t.detail.displayQuizType],this._cookiesQuizAnswers())}_openSignUpSuc(t){this._cartupdateFromButton(),t.detail.isVerify&&(t.detail.isLogin?this.successPageData=this.templateJson.signin_suc:this.successPageData=this.templateJson.cr_pwd_suc,this.toRender=Ee),this.bestFitSize=t.detail.size,this._setHiddenInputData()}_openResetSuccess(t){t.detail.isReset&&(this.successPageData=this.templateJson.reset_pwd_suc,this.toRender=Ee,(new vi).deleteData(this.productCategory,this.cookieNameJson.loggedin),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.productCategory,this.cookieNameJson.login_time),(new vi).deleteData(this.productCategory,this.cookieNameJson.last_quiz_entry),(new vi).deleteData(this.productCategory,this.cookieNameJson.best_fit_size),this._cartupdateFromButton())}_openOptionPage(t){this.toRender=$e}_showErrorPage(t){this.toRender=Pe}_openVerifyPage(t){t.detail.openVerify&&(this.emailId=t.detail.email,this.fromToVerify=t.detail.pageName,this.password=t.detail.password,this.toRender=Ce,this.verifyError=t.detail.response)}_openSizeNotFound(t){t.detail.isOpenSizenotFound?this.toRender=Ae:t.detail.isOpenProcessingError&&(this.toRender=Qe)}_openForgotPage(t){t.detail.openforgotPage&&(this.toRender=je)}_openPrivacyPage(t){t.detail.isprivacypage&&(t.detail.isresetpage?this.fromToprivacy="resetPage":(this.emailId=t.detail.email,this.password=t.detail.password,this.firstNm=t.detail.firstNm,this.lastNm=t.detail.lastNm,this.fromToprivacy="signUppage"),this.toRender=Re)}_openResetPassword(t){t.detail.openresetpassword&&(this.emailId=t.detail.email,this.verifyCode=t.detail.otp,this.toRender=Le)}_closePopup(t){if(t.detail.value){this._cartupdateFromButton(),document.body.style.overflow="scroll";const t={detail:{name:name,bestFitSize:this.bestFitSize},bubbles:!0,enable:!0};this.dispatchEvent(new CustomEvent("_closePopUp",t))}}async _requestQuizMetadata(t){(new vi).deleteData(this.productCategory,this.cookieNameJson.best_fit_size),document.querySelectorAll("quidget-button"),this.handleButtonVisibility(si),this._showLoader();var e=(new vi).getDataByName(Ke,this.cookieNameJson.login_time);e?((new vi).setDataWithoutCategory(this.productCategory,this.cookieNameJson.login_time,e),(new vi).deleteData(Ke,this.cookieNameJson.login_time)):e=(new vi).getDataByNameWithoutCategory(this.productCategory,this.cookieNameJson.login_time);var i=(new vi).getDataByName(this.productCategory,this.cookieNameJson.quiz_input_id);let o={domain:"test.com",partnerId:this.partnerId,productHandle:this.productHandle};t&&(o=Object.assign({customer_id:t},o)),i&&(o=Object.assign({quiz_input_id:i},o)),e&&(o=Object.assign({login_time:e},o));let a=await(new mi).requestQuizMetadataV2(o);this.dataCollection!=ni&&this._requestQuizMetadataSuccess(a)}_requestQuizMetadataSuccess(t){if(this.toRender=$e,this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),this.toRender="",this.bestFitSize="",document.querySelectorAll("quidget-button"),this._stopLoader(),t){if(t.error_msg)this.handleButtonVisibility(si);else if(""==t.product_code||null==t.product_code)this.handleButtonVisibility(si);else if(this.handleButtonVisibility(ni),t.sizes)if(1==t.session_timout)this._logOut();else{this.dataCollection!=ni&&(new vi).setData(this.productCategory,this.cookieNameJson.last_quiz_entry,t.last_quiz_timestamp),(new vi).setData(this.productCategory,this.cookieNameJson.product_code,t.product_code);let e=(new vi).getDataByName(this.productCategory,this.cookieNameJson.product_code);this.bestFitSize=t.sizes[e],this.bestFitSize?this.showPdpSize():this.handleButtonVisibility(ni)}t.product_code&&(new vi).setData(this.productCategory,this.cookieNameJson.product_code,t.product_code),t.quiz_meta_data&&(this.quizTypeStatus=t.quiz_meta_data)}this._stopLoader(),this._cartupdateFromButton()}handleButtonVisibility(t){let e=document.querySelectorAll("quidget-button");t==ni?e.forEach(t=>{let e=t.shadowRoot?.querySelector("#pdp_size_display"),i=t.shadowRoot?.querySelector("#quidget_btn");i.style.display="flex",e.innerHTML=""}):e.forEach(t=>{let e=t.shadowRoot?.querySelector("#pdp_size_display"),i=t.shadowRoot?.querySelector("#quidget_btn");i.style.display="none",e.innerHTML=""})}showPdpSize(){document.querySelectorAll("quidget-button").forEach(t=>{let e=t.shadowRoot?.querySelector("#pdp_size_display"),i=t.shadowRoot?.querySelector("#quidget_btn");this.bestFitSize?(this.dataCollection!=ni&&(new vi).setData(this.productCategory,this.cookieNameJson.best_fit_size,this.bestFitSize),e.style.display="flex",1==Number("1")?this.bestFitSize==li||this.bestFitSize==ri?1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+'&nbsp;<b class="pdpsize"> <u>'+this.bestFitSize+"</u></b> ":e.innerHTML=jo.t("qiidgetele.bestfitsize")+'&nbsp;<b class="pdpsize"> '+this.bestFitSize+"</b> ":1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp; <b>"+jo.t("qiidgetele.Size")+'&nbsp;</b><b class="pdpsize"> <u>'+this.bestFitSize+"</u></b> ":e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp; <b>"+jo.t("qiidgetele.Size")+'</b><b class="pdpsize"> &nbsp;'+this.bestFitSize+"</b> ":this.bestFitSize==li||this.bestFitSize==ri?1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;<u>"+this.bestFitSize+"</u>":e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;"+this.bestFitSize:1==Number("0")?e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;<u>"+jo.t("qiidgetele.Size")+"&nbsp;"+this.bestFitSize+"</u>":e.innerHTML=jo.t("qiidgetele.bestfitsize")+"&nbsp;"+jo.t("qiidgetele.Size")+"&nbsp;"+this.bestFitSize,i.style.display="none"):(e.innerHTML="",i.style.display="flex")})}_cartupdateFromButton(){var t=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);let e=(new vi).getDataByName(Ye,this.cookieNameJson.quiz_input_id),i=(new vi).getDataByName(Ke,this.cookieNameJson.quiz_input_id),o="",a="",n="";null==this.bestFitSize&&null==this.bestFitSize||(o=this.bestFitSize),null==t&&null==this.loggedIn||(a=t),null==e&&null==e||(n=e);const s=new CustomEvent("cartjs-update",{detail:{size:o,custId:a,quizId:i,quizMenId:n},bubbles:!0,composed:!0});this.dispatchEvent(s)}_logOut(){(new vi).deleteData(this.productCategory,this.cookieNameJson.loggedin),(new vi).deleteData(Ke,this.cookieNameJson.login_time),(new vi).deleteDatWithoutCategory(this.productCategory,this.cookieNameJson.login_time),(new vi).deleteData(this.productCategory,this.cookieNameJson.last_quiz_entry),this._cartupdateFromButton()}_rerenderPage(t){this.toRender=t,this.render()}async _cookiesQuizAnswers(){this.quizAnswersFromCookies="";let t=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),e={quiz_input_id:""};if(this.quizSelectedInputId=null,t)await this._getQuizResponseByCustomerIdAndType(t);else{let t;(new Zs)._startWaveLoader(),e.quiz_input_id=(new vi).getDataByName(this.productCategory,this.quizType)??"",e.quiz_input_id&&(t=await(new mi).getQuizResponseByCustomerIdAndTypeNonLoginV2(e),t&&(t.input_data&&(this.quizAnswersFromCookies=t.input_data),t.quiz_input_id&&(this.quizSelectedInputId=t.quiz_input_id))),(new Zs)._stopWaveLoader()}}async _getQuizResponseByCustomerIdAndType(t){(new Zs)._startWaveLoader();let e={cust_id:t,quiz_source:this.quizType},i=await(new mi).getQuizResponseByCustomerIdAndTypeV2(e,this.productCategory);null!=i&&((new Zs)._stopWaveLoader(),i.error_msg||(this.quizAnswersFromCookies=i.input_data,this.shadowRoot?.querySelectorAll("#questiontag"),i.quiz_input_id&&(this.quizSelectedInputId=i.quiz_input_id))),(new Zs)._stopWaveLoader()}async _userflow(t){let e=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);(new Zs)._startWaveLoader();let i=await(new mi).getQuizInpitIDSV1(e,this.partnerId,this.productCategory);i&&(this.quizInputIDS=i,this.toRender=Je),(new Zs)._stopWaveLoader()}_openReviewPage(t){this.quizReviewData=t.detail.response,this.displayQuizType=t.detail.displayQuizType,this.toRender=Fe}_showQuizErrorMsg(t){t.detail.isAgeQuizErr?this.quizErrorPageData=this.templateJson.agequiz_error:this.quizErrorPageData=this.templateJson.zipcode_error,this.toRender=We}_setHiddenInputData(){let t=(new vi).getDataByName(Ye,this.cookieNameJson.quiz_input_id),e=(new vi).getDataByName(Ke,this.cookieNameJson.quiz_input_id);var i=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin);let o=document.querySelector("#lom-quizdata");if(o)o.value=`_qrs_Men:${t??"-"},_qrs_Women:${e??"-"},_loggedin:${i??"-"}`;else{const o=document.querySelector('input[name="lom-quizdata"]');o&&(o.type="hidden",o.value=`_qrs_Men:${t??"-"},_qrs_Women:${e??"-"},_loggedin:${i??"-"}`)}}render(){return this.templateJson=this.b2b2cJson.template,this.theme==ti?this.headerImg={header:{logo_url:"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/"+this.dynamicSourceVar.IMAGES_HEADER_ICON_DARK}}:this.headerImg={header:{logo_url:"https://lom-b2b2c-infra-upgrade-prod.s3.us-east-2.amazonaws.com/bundles/monfrere/"+this.dynamicSourceVar.IMAGES_HEADER_ICON_LIGHT}},R`
            <link rel="stylesheet" href=${this.fontStyle} />
            <link rel="stylesheet" href=${this.colorStyle} />

            <wave-loader class="wave_loader" id="wave_loader"></wave-loader>
            <div class="quidget_container">
                <div class="quidget">
                    <c-header class="headerTag" headerImgs= ${JSON.stringify(this.headerImg)} @_closePopup=${this._closePopup} isCloseicon="show"
                      theme=${this.theme} renderPage=${this.toRender} dynamicSourceVar=${JSON.stringify(this.dynamicSourceVar)} ></c-header>
                    <div class="quiz_types_container">
                        <div class="quiz_container">
                            ${this.toRender==Ie?R`
                    ${this.rerenderQuizTemp?R`
                     ${null!=this.braBandBandSizeList?R`
                                     <question-template class="questiontag" id="questiontag" 
                                    partnerId=${this.partnerId} productHandle=${this.productHandle}  theme=${this.theme} qrCodeImageId=${this.qrCodeImageId} qrBase64=${this.qrBase64}
                                    category=${this.productCategory}  quizSelectedInputId=${this.quizSelectedInputId}
                                    quizAnswersFromCookies=${JSON.stringify(this.quizAnswersFromCookies)}
                                    quizData=${JSON.stringify(this.quiz)} quizType=${this.quizType}  dataCollection=${this.dataCollection}
                                    @_resultPgae=${this._afterSubmitResultPage}  braBandBandSizeList=${JSON.stringify(this.braBandBandSizeList)}
                                    @optionSlide=${this._openOptionPage} braBandCupSizeList=${JSON.stringify(this.braBandCupSizeList)} 
                                    @_errorpage=${this._showErrorPage} pantBrandSizeList=${JSON.stringify(this.pantBrandSizeList)} ethnicityDropdownData=${JSON.stringify(this.ethnicityDropdownData)}
                                    @_openSizeNotPage = ${this._openSizeNotFound} cookieNameJson=${JSON.stringify(this.cookieNameJson)}  sportListData=${this.sportListData}
                                    isFirstQuestion = ${this.isFirstQuestion} @showSetBodyScanQuiz=${this._showSetBodyScanQuiz} displayQuizType=${this.displayQuizType} 
                                    @_showQuizErrorMsg = ${this._showQuizErrorMsg}> </question-template> 
                                `:R`
                                     <question-template class="questiontag" id="questiontag" 
                                    partnerId=${this.partnerId}  productHandle=${this.productHandle} theme=${this.theme}  qrCodeImageId=${this.qrCodeImageId} qrBase64=${this.qrBase64}
                                    category=${this.productCategory}  quizSelectedInputId=${this.quizSelectedInputId}
                                    quizAnswersFromCookies=${JSON.stringify(this.quizAnswersFromCookies)}
                                    quizData=${JSON.stringify(this.quiz)} quizType=${this.quizType}  dataCollection=${this.dataCollection}
                                    @_resultPgae=${this._afterSubmitResultPage}  ethnicityDropdownData=${JSON.stringify(this.ethnicityDropdownData)}
                                    @optionSlide=${this._openOptionPage} 
                                    @_errorpage=${this._showErrorPage} pantBrandSizeList=${JSON.stringify(this.pantBrandSizeList)}  sportListData=${this.sportListData}
                                    @_openSizeNotPage = ${this._openSizeNotFound} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    isFirstQuestion = ${this.isFirstQuestion} @showSetBodyScanQuiz=${this._showSetBodyScanQuiz} displayQuizType=${this.displayQuizType} 

                                    @_showQuizErrorMsg = ${this._showQuizErrorMsg}></question-template>

                                `}
                    `:""}
                                   
                                `:this.toRender==$e?this.dataCollection==ni?R`
                            <t-quiz-option-datacollection id="optiontag" optionPageData=${JSON.stringify(this.templateJson.options)} 
                            loginData=${this.loggedIn} quizTypeStatus=${JSON.stringify(this.quizTypeStatus)}  theme =${this.theme}
                            @_checkQuizType=${this._setQuiz} @_signIn=${this._signinOpen} @_openProfilePage=${this._openProfilePage}
                            @_afterlogOut=${this._afterLogOut} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                            partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle}></t-quiz-option-datacollection>
                        `:R`
                            <t-quiz-option id="optiontag" optionPageData=${JSON.stringify(this.templateJson.options)} 
                            loginData=${this.loggedIn} quizTypeStatus=${JSON.stringify(this.quizTypeStatus)}  theme =${this.theme}
                            @_checkQuizType=${this._setQuiz} @_signIn=${this._signinOpen} @_openProfilePage=${this._openProfilePage}
                            @_afterlogOut=${this._afterLogOut} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                            partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle}></t-quiz-option>
                        `:this.toRender==Ne?R`
                                    <t-sign-in id="signIntag" signIn=${JSON.stringify(this.templateJson.signin)} @_closepopUp = ${this._afterSignclosepopup}
                                    partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle}
                                    @_openVerifyPage=${this._openVerifyPage}  theme=${this.theme}
                                    @optionSlide=${this._openOptionPage} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    @_openForgot=${this._openForgotPage} dynamicSourceVar=${JSON.stringify(this.dynamicSourceVar)}></t-sign-in>
                                `:this.toRender==De?this.dataCollection==ni?R`
                                    <t-datacollection-sucess bestFitData=${JSON.stringify(this.templateJson.bestfit)} @_openpage=${this._openPage}
                                            @_openAccountInfoPage=${this._openAccountInfoPage} @_openHelpCenterPage=${this._openHelpCenterPage} @_afterlogOut=${this._afterLogOut}
                                            partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle} resultSize=${this.bestFitSize}
                                            loginData=${this.loggedIn}  cookieNameJson=${JSON.stringify(this.cookieNameJson)} theme =${this.theme}
                                            lastEntry=${this.lastEntry} @_userflow=${this._userflow}>
                                    
                                    </t-datacollection-sucess>
                                `:this.bestFitSize==ri?R`
                                            <t-best-fit id="bestfitag"  bestFitData=${JSON.stringify(this.templateJson.sizeNotOffered)} @_openpage=${this._openPage}
                                            @_openAccountInfoPage=${this._openAccountInfoPage} @_openHelpCenterPage=${this._openHelpCenterPage} @_afterlogOut=${this._afterLogOut}
                                            partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle} resultSize=${this.bestFitSize}
                                            loginData=${this.loggedIn}  cookieNameJson=${JSON.stringify(this.cookieNameJson)} theme =${this.theme}
                                            lastEntry=${this.lastEntry} @_userflow=${this._userflow} ></t-best-fit>
                            `:R`
                                            <t-best-fit id="bestfitag"  bestFitData=${JSON.stringify(this.templateJson.bestfit)} @_openpage=${this._openPage}
                                            @_openAccountInfoPage=${this._openAccountInfoPage} @_openHelpCenterPage=${this._openHelpCenterPage} @_afterlogOut=${this._afterLogOut}
                                            partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle} resultSize=${this.bestFitSize}
                                            loginData=${this.loggedIn}  cookieNameJson=${JSON.stringify(this.cookieNameJson)} theme =${this.theme}
                                            lastEntry=${this.lastEntry} @_userflow=${this._userflow} ></t-best-fit>
                            `:this.toRender==Oe?R`
                                    <t-sign-up id="signuptag" createPassword=${JSON.stringify(this.templateJson.cr_pwd)} @_openVerifyPage=${this._openVerifyPage}
                                    partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle}
                                    fitSize=${this.bestFitSize} isShowEmailPass=${this.isShowEmailPass}
                                    @_resultPgae=${this._afterSubmitResultPage}   cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    @_privacyPage = ${this._openPrivacyPage} password=${this.password} emailId=${this.emailId} firstName=${this.firstNm} lastName=${this.lastNm}
                                    @_signIn=${this._signinOpen}  theme=${this.theme} dynamicSourceVar=${JSON.stringify(this.dynamicSourceVar)}></t-sign-up>
                                `:this.toRender==Ee?R`
                                    <t-signup-success id="signupsuctag" createPasswordSuccessData=${JSON.stringify(this.successPageData)} theme =${this.theme}
                                    @_closeSignUpSuc=${this._afterSignUpclosepopup} @_signIn=${this._signinOpen} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle}></t-signup-success>
                                `:this.toRender==Pe?R`
                                    <t-error-template id="errorPage" errorData=${JSON.stringify(this.templateJson.imgerror)} theme =${this.theme} displayQuizType=${this.displayQuizType} quizType=${this.quizType}
                                    @_openpage=${this._openPage} @_openFitpage=${this._openFitPage} cookieNameJson=${JSON.stringify(this.cookieNameJson)}></t-error-template>            
                                `:this.toRender==Ce?R`
                                    <t-verify-user id="verifyUserPage" verifyUserData=${JSON.stringify(this.templateJson.verifyUser)} 
                                    @_openSignUpSuc=${this._openSignUpSuc}  @_resetPass=${this._openResetPassword}  theme =${this.theme}
                                    category=${this.productCategory}  partnerId=${this.partnerId} verifyError=${this.verifyError}
                                    fromPage = ${this.fromToVerify} password=${this.password}  cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    productHandle=${this.productHandle} emailId=${this.emailId}></t-verify-user>
                                `:this.toRender==Ae?R`
                                    <t-size-not-found id="sizeNotFoundPage" sizeNotFound=${JSON.stringify(this.templateJson.sizeNotFound)}  theme =${this.theme}
                                    @_optionPage=${this._openPage} cookieNameJson=${JSON.stringify(this.cookieNameJson)}></t-size-not-found>
                                `:this.toRender==Qe?R`
                                    <t-processing-error id="sizeNotFoundPage" processingErrorData=${JSON.stringify(this.templateJson.processingError)}  theme =${this.theme}
                                    @_optionPage=${this._openPage} cookieNameJson=${JSON.stringify(this.cookieNameJson)}></t-processing-error>
                                `:this.toRender==je?R`
                                    <t-forgot-password id="forgotpage"  forgotPageData=${JSON.stringify(this.templateJson.forgotpass)} theme =${this.theme}
                                    @_signIn=${this._signinOpen}  @_openpage=${this._openPage} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    @_resetPass=${this._openResetPassword}   @_openVerifyPage=${this._openVerifyPage}
                                    ></t-forgot-password>
                                `:this.toRender==Re?R`
                                    <t-privacy-policy id="privacypolicypage" @_backFromPrivacyPage=${this._backFromPrivacyPage} fromToprivacy=${this.fromToprivacy} theme =${this.theme}
                                    password=${this.password} cookieNameJson=${JSON.stringify(this.cookieNameJson)}></t-privacy-policy>
                                `:this.toRender==Le?R`
                                    <t-reset-password id="resetPasswordPage" @_openForgot=${this._openForgotPage} @_openResetSuccess=${this._openResetSuccess}
                                    @_closepopUp =${this._closePopup}  @_signIn=${this._signinOpen} verifyCode= ${this.verifyCode} @_openVerifyPage=${this._openVerifyPage}
                                    resetPassword=${JSON.stringify(this.templateJson.resetpassword)} emailId=${this.emailId}
                                    cookieNameJson=${JSON.stringify(this.cookieNameJson)} theme=${this.theme}
                                    dynamicSourceVar=${JSON.stringify(this.dynamicSourceVar)}></t-reset-password>
                                `:this.toRender==Te?R`
                                    <t-account_info id="accountinfoPage" cookieNameJson=${JSON.stringify(this.cookieNameJson)} 
                                    category=${this.productCategory}  partnerId=${this.partnerId} 
                                    theme=${this.theme}  fitSize=${this.bestFitSize}  @_openVerifyPage=${this._openVerifyPage} @_privacyPage = ${this._openPrivacyPage}
                                    forgotPageData=${JSON.stringify(this.templateJson.acc_info)}  @_resultPgae=${this._afterSubmitResultPage}
                                    @_backFromPrivacyPage=${this._backFromPrivacyPage}></t-account_info>
                                `:this.toRender==Be?R`
                                    <t-help-center id="accountinfoPage"  
                                    theme=${this.theme}  fitSize=${this.bestFitSize} @_faqPage=${this._openFaqPage}
                                    helpCenterPageData=${JSON.stringify(this.templateJson.help_center)}  @_resultPgae=${this._afterSubmitResultPage}></t-help-center>
                                `:this.toRender==Ve?R`
                                    <t-faq-page  id= "faqPage"
                                    theme=${this.theme}  fitSize=${this.bestFitSize} @_helpPgae=${this._openHelpCenterPage}
                                    faqPageData=${JSON.stringify(this.templateJson.faq_page)} ></t-faq-page>
                                `:this.toRender==Fe?R`
                                    <t-user-review-page  id= "tuserpage"  userPageData=${JSON.stringify(this.templateJson.user_profile)} quizInputIDS=${JSON.stringify(this.quizInputIDS)} 
                                    theme=${this.theme} quizReviewData=${JSON.stringify(this.quizReviewData)}  @_userProfilePage=${this._userflow} category=${this.productCategory}
                                     @_checkQuizType=${this._setQuiz} displayQuizType=${this.displayQuizType}  ></t-user-review-page>
                                `:this.toRender==Je?R`
                                    <t-user-profile-page  id= "tuserpage"  userProfilePageData=${JSON.stringify(this.templateJson.user_profile)} fitSize=${this.bestFitSize} @_checkQuizType=${this._setQuiz}
                                    theme=${this.theme} quizInputIDS=${JSON.stringify(this.quizInputIDS)} @_userReviewPage=${this._openReviewPage} loggedIn=${this.loggedIn}  
                                    @_resultPgae=${this._afterSubmitResultPage} dynamicSourceVar=${JSON.stringify(this.dynamicSourceVar)}  category=${this.productCategory} ></t-user-profile-page>
                                `:this.toRender==We?R`
                                    <t-quiz-error-page id="signupsuctag" errrorPageData=${JSON.stringify(this.quizErrorPageData)} theme =${this.theme}
                                    @_closeSignUpSuc=${this._afterSignUpclosepopup} @_signIn=${this._signinOpen} cookieNameJson=${JSON.stringify(this.cookieNameJson)}
                                    partnerId=${this.partnerId} category=${this.productCategory} productHandle=${this.productHandle}></t-quiz-error-page>
                                `:""}
                        </div>
                    </div>
                </div>
            </div>      
            
        `}firstUpdated(t){this.lastEntry=(new vi).getDataByName(this.productCategory,this.cookieNameJson.last_quiz_entry),this.style.zIndex=this.zindex,this.style.position="absolute"}updated(t){t.forEach((t,e)=>{if(this.loggedIn=(new vi).getDataByName(this.productCategory,this.cookieNameJson.loggedin),"bestFitSize"==e){var i=Array.from(document.querySelectorAll("*"));this.isEleFound=!1,this._checkElement(i)}})}connectedCallback(){super.connectedCallback(),this.updateThemeBasedOnSystemPreference(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.handleSystemThemeChange)}disconnectedCallback(){super.disconnectedCallback(),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.handleSystemThemeChange)}handleSystemThemeChange(t){this.updateThemeBasedOnSystemPreference()}updateThemeBasedOnSystemPreference(){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.theme=t?ti:ei,this.theme}};wp.styles=[ar],_p([Y({type:Object})],wp.prototype,"fitquizData",2),_p([Y({type:Object})],wp.prototype,"measurementData",2),_p([Y({type:Object})],wp.prototype,"cvData",2),_p([Y({type:String})],wp.prototype,"val",2),_p([Y({type:String})],wp.prototype,"val2",2),_p([Y({type:Boolean})],wp.prototype,"disabled",2),_p([Y({type:Object})],wp.prototype,"headerImg",2),_p([Y({type:String})],wp.prototype,"quizType",2),_p([Y({type:Object})],wp.prototype,"quiz",2),_p([Y({type:String})],wp.prototype,"partnerId",2),_p([Y({type:String})],wp.prototype,"productCategory",2),_p([Y({type:String})],wp.prototype,"productHandle",2),_p([Y({type:String})],wp.prototype,"quizAnswers",2),_p([Y({type:Object})],wp.prototype,"templateJson",2),_p([Y({type:String})],wp.prototype,"bestFitSize",2),_p([Y({type:Boolean})],wp.prototype,"islogin",2),_p([Y({type:String})],wp.prototype,"isFirstQuestion",2),_p([Y({type:Object})],wp.prototype,"quizAnswersFromCookies",2),_p([Y({type:String})],wp.prototype,"emailId",2),_p([Y({type:String})],wp.prototype,"password",2),_p([Y({type:String})],wp.prototype,"firstNm",2),_p([Y({type:String})],wp.prototype,"lastNm",2),_p([Y({type:String})],wp.prototype,"toRender",2),_p([Y({type:String})],wp.prototype,"fromToVerify",2),_p([Y({type:String})],wp.prototype,"verifyCode",2),_p([Y({type:Boolean})],wp.prototype,"isShowEmailPass",2),_p([Y({type:Object})],wp.prototype,"successPageData",2),_p([Y({type:String})],wp.prototype,"loggedIn",2),_p([Y({type:Object})],wp.prototype,"quizTypeStatus",2),_p([Y({type:Object})],wp.prototype,"cookieNameJson",2),_p([Y({type:String})],wp.prototype,"envCookieFlag",2),_p([Y({type:String})],wp.prototype,"verifyError",2),_p([Y({type:Boolean})],wp.prototype,"themeName",2),_p([Y({type:String})],wp.prototype,"pdpBtnImage",2),_p([Y({type:String})],wp.prototype,"fontStyle",2),_p([Y({type:String})],wp.prototype,"colorStyle",2),_p([Y({type:Boolean})],wp.prototype,"modeTheme",2),_p([Y({type:String})],wp.prototype,"theme",2),_p([Y({type:Object})],wp.prototype,"dynamicSourceVar",2),_p([Y({type:String})],wp.prototype,"lastEntry",2),_p([Y({type:String})],wp.prototype,"fromToprivacy",2),_p([Y({type:String})],wp.prototype,"zindex",2),_p([Y({type:String})],wp.prototype,"b2b2cEle",2),_p([Y({type:String})],wp.prototype,"iframeTag",2),_p([Y({type:Boolean})],wp.prototype,"isEleFound",2),_p([Y({type:Object})],wp.prototype,"pantBrandSizeList",2),_p([Y({type:Object})],wp.prototype,"braBandCupSizeList",2),_p([Y({type:Object})],wp.prototype,"braBandBandSizeList",2),_p([Y({type:Object})],wp.prototype,"braSizesList",2),_p([Y({type:Object})],wp.prototype,"b2b2cJson",2),_p([Y({type:Object})],wp.prototype,"quizInputIDS",2),_p([Y({type:Object})],wp.prototype,"quizReviewData",2),_p([Y({type:String})],wp.prototype,"quizSelectedInputId",2),_p([Y({type:String})],wp.prototype,"dataCollection",2),_p([Y({type:Object})],wp.prototype,"ethnicityDropdownData",2),_p([Y({type:String})],wp.prototype,"qrBase64",2),_p([Y({type:String})],wp.prototype,"qrCodeImageId",2),_p([Y({type:String})],wp.prototype,"displayQuizType",2),_p([Y({type:Boolean})],wp.prototype,"rerenderQuizTemp",2),_p([Y({type:String})],wp.prototype,"sportListData",2),_p([Y({type:Object})],wp.prototype,"quizErrorPageData",2),_p([Y({type:Object})],wp.prototype,"resultPageData",2),wp=_p([G("quidget-element")],wp);
