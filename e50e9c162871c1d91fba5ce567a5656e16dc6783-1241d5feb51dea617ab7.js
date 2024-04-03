(self.webpackChunkgatsby_starter_grayscale=self.webpackChunkgatsby_starter_grayscale||[]).push([[569],{5183:function(e){e.exports={siteTitle:"Seven North",manifestName:"Seven North",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-grayscale/",heading:"Seven North",subHeading:"Website Design",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/eveyv"},{icon:"fa-rebel",name:"Ev's Folio",url:"https://www.everettyeaw.com"}],email:"admin@sevennorthdesign.com",phone:"207-802-8097",address:"Maine Highlands, USA"}},772:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var r=n(5540),o=n(6540),i=n(8852),a=n(5183),l=n.n(a);let c=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleMenu=e=>{n.setState({openMenu:e})},n.handleScroll=()=>{const{visibilityClass:e}=n.state;window.pageYOffset>300?"navbar-shrink"!==e&&n.setState({visibilityClass:"navbar-shrink"}):"navbar-shrink"===e&&n.setState({visibilityClass:""})},n.state={openMenu:!1,visibilityClass:""},n}(0,r.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){const{openMenu:e,visibilityClass:t}=this.state;return o.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+t,id:"mainNav"},o.createElement("div",{className:"container"},o.createElement("a",{className:"navbar-brand",href:"#"},l().siteTitle),o.createElement("button",{onClick:t=>this.toggleMenu(!e),className:"navbar-toggler navbar-toggler-right "+(e?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":e,"aria-label":"Toggle navigation"},"Menu",o.createElement("i",{className:"fas fa-bars"})),o.createElement("div",{className:"collapse navbar-collapse "+(e?"show":""),id:"navbarResponsive"},o.createElement("ul",{className:"navbar-nav ml-auto"},o.createElement("li",{className:"nav-item"},o.createElement(i.A,{onClick:t=>this.toggleMenu(!e),type:"id",element:"about"},o.createElement("a",{className:"nav-link",href:"#about"},"About"))),o.createElement("li",{className:"nav-item"},o.createElement(i.A,{onClick:t=>this.toggleMenu(!e),type:"id",element:"projects"},o.createElement("a",{className:"nav-link",href:"#projects"},"Services"))),o.createElement("li",{className:"nav-item"},o.createElement(i.A,{onClick:t=>this.toggleMenu(!e),type:"id",element:"signup"},o.createElement("a",{className:"nav-link",href:"#signup"},"Contact")))))))},t}(o.Component)},7454:function(e,t,n){"use strict";n.d(t,{A:function(){return be}});var r,o,i,a,l=n(5540),c=n(6540),s=n(5556),u=n.n(s),f=n(2098),p=n.n(f),d=n(115),h=n.n(d),m=n(8828),y=n.n(m),v="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),C="cssText",E="href",S="http-equiv",A="innerHTML",O="itemprop",k="name",j="property",L="rel",x="src",N="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",I="defer",B="encodeSpecialCharacters",Y="onChangeClientState",R="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,T.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,M);return t||r||void 0},z=function(e){return Q(e,Y)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===t.indexOf(c)||n===L&&"canonical"===e[n].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==A&&l!==C&&l!==O||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=y()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),Z=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:n.g.cancelAnimationFrame||Z,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,r),le(T.HTML,o),ae(f,p);var d={baseTag:ce(T.BASE,n),linkTags:ce(T.LINK,i),metaTags:ce(T.META,a),noscriptTags:ce(T.NOSCRIPT,l),scriptTags:ce(T.SCRIPT,s),styleTags:ce(T.STYLE,u)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),c(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+H+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=ue(n,r),[c.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ie(t);return o?"<"+e+" "+H+'="true" '+o+">"+V(i,r)+"</"+e+">":"<"+e+" "+H+'="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return ue(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===C){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===C)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+" "+H+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(v,n,r),htmlAttributes:fe(b,o,r),link:fe(T.LINK,i,r),meta:fe(T.META,a,r),noscript:fe(T.NOSCRIPT,l,r),script:fe(T.SCRIPT,c,r),style:fe(T.STYLE,s,r),title:fe(T.TITLE,{title:f,titleAttributes:p},r)}},de=p()((function(e){return{baseTag:G([E,N],e),bodyAttributes:K(v,e),defer:Q(e,I),encode:Q(e,B),htmlAttributes:K(b,e),linkTags:$(T.LINK,[L,E],e),metaTags:$(T.META,[k,w,S,j,O],e),noscriptTags:$(T.NOSCRIPT,[A],e),onChangeClientState:z(e),scriptTags:$(T.SCRIPT,[x,A],e),styleTags:$(T.STYLE,[C],e),title:W(e),titleAttributes:K(g,e)}}),(function(e){re&&te(re),e.defer?re=ee((function(){oe(e,(function(){re=null}))})):(oe(e),re=null)}),pe)((function(){return null})),he=(o=de,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case T.BODY:return F({},o,{bodyAttributes:F({},i)});case T.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},X(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var me=he,ye=n(8007);let ve=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){const{children:e}=this.props;return c.createElement(ye.StaticQuery,{query:"3649515864",render:t=>c.createElement(c.Fragment,null,c.createElement(me,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Grayscale"},{name:"keywords",content:"site, web"}]},c.createElement("html",{lang:"en"})),c.createElement("div",{className:"page-top"},e))})},t}(c.Component);var be=ve},8852:function(e,t,n){"use strict";var r=n(5540),o=n(1196),i=n.n(o),a=n(6540);const l=e=>e.children;let c=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(t),t}(0,r.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){i().polyfill()},n.handleClick=function(e){e.preventDefault();const{onClick:t=(()=>{})}=this.props;let n=0,r=!0;const{type:o,element:i,offset:a,timeout:l}=this.props;if(o&&i)switch(o){case"class":n=document.getElementsByClassName(i)[0],r=!!n;break;case"id":n=document.getElementById(i),r=!!n}r?this.scrollTo(n,a,l):console.log("Element not found: "+i),t(e)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);const r=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((()=>{window.scroll({top:r+t,left:0,behavior:"smooth"})}),n):window.scroll({top:r+t,left:0,behavior:"smooth"})},n.render=function(){return a.createElement(l,null,"object"==typeof this.props.children?a.cloneElement(this.props.children,{onClick:this.handleClick}):a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.Component);t.A=c},115:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(e,t,n){"use strict";var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",l),f}}},1196:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=function(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect();n!==t.body?(h.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function f(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function p(e){var t=u(e,"Y")&&f(e,"Y"),n=u(e,"X")&&f(e,"X");return t||n}function d(t){var n,r,i,l,c=(a()-t.startTime)/o;l=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*l)),r=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,i),r===t.x&&i===t.y||e.requestAnimationFrame(d.bind(e,t))}function h(n,r,o){var l,s,u,f,p=a();n===t.body?(l=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=i.scroll):(l=n,s=n.scrollLeft,u=n.scrollTop,f=c),d({scrollable:l,method:f,startTime:p,startX:s,startY:u,x:r,y:o})}}}}()}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-1241d5feb51dea617ab7.js.map