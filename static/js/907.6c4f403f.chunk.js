(self.webpackChunkdoctors_office=self.webpackChunkdoctors_office||[]).push([[907],{176:function(e){"use strict";e.exports=function(e,t,r,n,i,o,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},888:function(e,t,r){"use strict";var n=r(47);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},907:function(e,t,r){"use strict";r.d(t,{ql:function(){return Z}});var n=r(791),i=r(7),o=r.n(i),a=r(121),s=r.n(a),c=r(176),u=r.n(c),l=r(613),f=r.n(l);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var m={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},T={rel:["amphtml","canonical","alternate"]},g={type:["application/ld+json"]},b={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},v=Object.keys(m).map((function(e){return m[e]})),A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),C=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},S=function(e){var t=C(e,m.TITLE),r=C(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,(function(){return t}));var n=C(e,"defaultTitle");return t||n||void 0},E=function(e){return C(e,"onChangeClientState")||function(){}},w=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return p({},e,t)}),{})},x=function(e,t){return t.filter((function(e){return void 0!==e[m.BASE]})).map((function(e){return e[m.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},P=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r,o=Object.keys(e),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var s=o[a],c=p({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},I=function(e,t){if(Array.isArray(e)&&e.length)for(var r=0;r<e.length;r+=1)if(e[r][t])return!0;return!1},j=function(e){return Array.isArray(e)?e.join(""):e},L=function(e,t){return Array.isArray(e)?e.reduce((function(e,r){return function(e,t){for(var r=Object.keys(e),n=0;n<r.length;n+=1)if(t[r[n]]&&t[r[n]].includes(e[r[n]]))return!0;return!1}(r,t)?e.priority.push(r):e.default.push(r),e}),{priority:[],default:[]}):{default:e}},k=function(e,t){var r;return p({},e,((r={})[t]=void 0,r))},M=[m.NOSCRIPT,m.SCRIPT,m.STYLE],R=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},N=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,r){return t[A[r]||r]=e[r],t}),t)},D=function(e,t){return t.map((function(t,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(t).forEach((function(e){var r=A[e]||e;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:o[r]=t[e]})),n.createElement(e,o)}))},_=function(e,t,r){switch(e){case m.TITLE:return{toComponent:function(){return r=t.titleAttributes,(i={key:e=t.title})["data-rh"]=!0,o=N(r,i),[n.createElement(m.TITLE,o,e)];var e,r,i,o},toString:function(){return function(e,t,r,n){var i=H(r),o=j(t);return i?"<"+e+' data-rh="true" '+i+">"+R(o,n)+"</"+e+">":"<"+e+' data-rh="true">'+R(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return N(t)},toString:function(){return H(t)}};default:return{toComponent:function(){return D(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+R(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===M.indexOf(e);return t+"<"+e+' data-rh="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},B=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.noscriptTags,a=e.styleTags,s=e.title,c=void 0===s?"":s,u=e.titleAttributes,l=e.linkTags,f=e.metaTags,p=e.scriptTags,d={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var h=function(e){var t=e.linkTags,r=e.scriptTags,n=e.encode,i=L(e.metaTags,b),o=L(t,T),a=L(r,g);return{priorityMethods:{toComponent:function(){return[].concat(D(m.META,i.priority),D(m.LINK,o.priority),D(m.SCRIPT,a.priority))},toString:function(){return _(m.META,i.priority,n)+" "+_(m.LINK,o.priority,n)+" "+_(m.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(e);d=h.priorityMethods,l=h.linkTags,f=h.metaTags,p=h.scriptTags}return{priority:d,base:_(m.BASE,t,n),bodyAttributes:_("bodyAttributes",r,n),htmlAttributes:_("htmlAttributes",i,n),link:_(m.LINK,l,n),meta:_(m.META,f,n),noscript:_(m.NOSCRIPT,o,n),script:_(m.SCRIPT,p,n),style:_(m.STYLE,a,n),title:_(m.TITLE,{title:c,titleAttributes:u},n)}},U=[],q=function(e,t){var r=this;void 0===t&&(t="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(e){r.context.helmet=e},helmetInstances:{get:function(){return r.canUseDOM?U:r.instances},add:function(e){(r.canUseDOM?U:r.instances).push(e)},remove:function(e){var t=(r.canUseDOM?U:r.instances).indexOf(e);(r.canUseDOM?U:r.instances).splice(t,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=B({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},Y=n.createContext({}),z=o().shape({setHelmet:o().func,helmetInstances:o().shape({get:o().func,add:o().func,remove:o().func})}),K="undefined"!=typeof document,F=function(e){function t(r){var n;return(n=e.call(this,r)||this).helmetData=new q(n.props.context,t.canUseDOM),n}return d(t,e),t.prototype.render=function(){return n.createElement(Y.Provider,{value:this.helmetData.value},this.props.children)},t}(n.Component);F.canUseDOM=K,F.propTypes={context:o().shape({helmet:o().shape()}),children:o().node.isRequired},F.defaultProps={context:{}},F.displayName="HelmetProvider";var V=function(e,t){var r,n=document.head||document.querySelector(m.HEAD),i=n.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&("innerHTML"===i?n.innerHTML=t.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText)):n.setAttribute(i,void 0===t[i]?"":t[i]));n.setAttribute("data-rh","true"),o.some((function(e,t){return r=t,n.isEqualNode(e)}))?o.splice(r,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},W=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s+=1){var c=a[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f-=1)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},G=function(e,t){var r=e.baseTag,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;W(m.BODY,e.bodyAttributes),W(m.HTML,n),function(e,t){void 0!==e&&document.title!==e&&(document.title=j(e)),W(m.TITLE,t)}(l,f);var p={baseTag:V(m.BASE,r),linkTags:V(m.LINK,i),metaTags:V(m.META,o),noscriptTags:V(m.NOSCRIPT,a),scriptTags:V(m.SCRIPT,c),styleTags:V(m.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,d,h)},$=null,J=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}d(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!f()(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t,r=this.props.context,n=r.setHelmet,i=null,o=(e=r.helmetInstances.get().map((function(e){var t=p({},e.props);return delete t.context,t})),{baseTag:x(["href"],e),bodyAttributes:w("bodyAttributes",e),defer:C(e,"defer"),encode:C(e,"encodeSpecialCharacters"),htmlAttributes:w("htmlAttributes",e),linkTags:P(m.LINK,["rel","href"],e),metaTags:P(m.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:P(m.NOSCRIPT,["innerHTML"],e),onChangeClientState:E(e),scriptTags:P(m.SCRIPT,["src","innerHTML"],e),styleTags:P(m.STYLE,["cssText"],e),title:S(e),titleAttributes:w("titleAttributes",e),prioritizeSeoTags:I(e,"prioritizeSeoTags")});F.canUseDOM?(t=o,$&&cancelAnimationFrame($),t.defer?$=requestAnimationFrame((function(){G(t,(function(){$=null}))})):(G(t),$=null)):B&&(i=B(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(n.Component);J.propTypes={context:z.isRequired},J.displayName="HelmetDispatcher";var Q=["children"],X=["children"],Z=function(e){function t(){return e.apply(this,arguments)||this}d(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!s()(k(this.props,"helmetData"),k(e,"helmetData"))},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.SCRIPT:case m.NOSCRIPT:return{innerHTML:t};case m.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return p({},n,((t={})[r.type]=[].concat(n[r.type]||[],[p({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case m.TITLE:return p({},i,((t={})[n.type]=a,t.titleAttributes=p({},o),t));case m.BODY:return p({},i,{bodyAttributes:p({},o)});case m.HTML:return p({},i,{htmlAttributes:p({},o)});default:return p({},i,((r={})[n.type]=p({},o),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=p({},t);return Object.keys(e).forEach((function(t){var n;r=p({},r,((n={})[t]=e[t],n))})),r},r.warnOnInvalidChildren=function(e,t){return u()(v.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+v.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),u()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,i={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,o=n.children,a=y(n,Q),s=Object.keys(a).reduce((function(e,t){return e[O[t]||t]=a[t],e}),{}),c=e.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(e,o),c){case m.FRAGMENT:t=r.mapChildrenToProps(o,t);break;case m.LINK:case m.META:case m.NOSCRIPT:case m.SCRIPT:case m.STYLE:i=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(i,t)},r.render=function(){var e=this.props,t=e.children,r=y(e,X),i=p({},r),o=r.helmetData;return t&&(i=this.mapChildrenToProps(t,i)),!o||o instanceof q||(o=new q(o.context,o.instances)),o?n.createElement(J,p({},i,{context:o.value,helmetData:void 0})):n.createElement(Y.Consumer,null,(function(e){return n.createElement(J,p({},i,{context:e}))}))},t}(n.Component);Z.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string,prioritizeSeoTags:o().bool,helmetData:o().object},Z.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Z.displayName="Helmet"},121:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!==c--;)if(!o(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!==c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!==c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!o(e[u[c]],a[u[c]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}}]);
//# sourceMappingURL=907.6c4f403f.chunk.js.map