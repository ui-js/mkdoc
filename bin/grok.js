Object.defineProperty(exports,"__esModule",{value:!0});const e=require("typedoc"),n=require("highlight.js"),t=require("path"),r=require("fs-extra"),i=new(require("markdown-it"))({html:!0,typographer:!0,highlight:function(e,t){if((t??"typescript")&&n.getLanguage(t))try{const r=n.highlight(t,e);return r.illegal&&(console.group(),console.error("Syntax error in sample code\n"),console.error(r.illegalBy.msg.replace("\n","\\n")),console.error("\n"+r.illegalBy.context),console.groupEnd()),r.value}catch(e){console.error(e)}return""}});function o(e,n){return n?'<span class="'+n+'">'+e+"</span>":"<span>"+e+"</span>"}function a(e,n){return n?'\n<div class="'+n+'">'+e+"</div>\n":"\n<div>"+e+"</div>\n"}function s(e){return'<span class="punctuation">'+e+"</span>"}function c(e){return'<span class="keyword">'+e+"</span>"}function l(e,n){let t="<section";return n?.keywords&&(t+=' data-keywords="'+n.keywords.toLowerCase()+'"'),n?.permalink?.anchor&&(t+=' id="'+encodeURIComponent(n.permalink.anchor)+'"'),n?.className&&(t+=' class="'+n.className+'"'),t+=">"+e,t+"\n</section>\n"}function d(e,n,t,r,i){const a="h"+Number(e).toString();let s=n?o(n,"subhead"):"";var c;return r?.anchor?(s+=(c=o(t,i?.deprecated?"head deprecated":"head"),o(c+'<svg class="highlighting-mark"><use xlink:href="#highlighting-mark-'+(Math.floor(3*Math.random())+1)+'"></use></svg>',"highlighting-mark-container")),s=o(s,"stack"),s+=S(r)):(s+=o(t,i?.deprecated?"head deprecated":"head"),s=o(s,"stack")),"<"+a+(i?.className?' class="'+i.className+'"':"")+">"+s+"</"+a+">"}function u(e,n=Q){if("reference"!==n.type&&n.id===e)return n;let t;return n.children?.some((n=>{t=u(e,n);return t!==null}))?t:null}function p(e,n){n||(n=Q);let t=[];return x(n)===e&&t.push(n),n.children&&n.children.forEach((n=>{t=[...t,...p(e,n)]})),t}function m(e,n,t){let r=[];if(r=p(e,n),r.length>0){if(r.sort(((e,n)=>n.kind-e.kind)),"number"==typeof t)r=r.filter((e=>0!=(e.kind&t)));else if("static"===t)r=r.filter((e=>2048===e.kind&&A(e,"isStatic")));else if("string"==typeof t){const e=f[t];r=r.filter((n=>0!=(n.kind&e)))}if(r.length>0)return r[0]}return null}const f={namespace:2,enum:4,variable:32,function:64,class:128,interface:256,instance:265216,static:3072,type:4194304};function g(e){const n=e.match(/^\(([^\:]+)(\:([^\)]+))?\)$/);return n?[n[1],n[3]]:[e,void 0]}function y(e,n){const t=e.split(".");if(1===t.length){const[e,r]=g(t[0]);return m(e,n,r)||m(e,k(n),r)||m(e,null,r)}const r=t.pop();let i=null;for(const e of t){const[n,t]=g(e);i=m(n,i,t)}return y(r,i)}function h(e,n=Q){if(!e)return null;if(e.id===n.id)return[n];if(n.children)for(const t of n.children){const r=h(e,t);if(r)return[...r,n]}return null}function k(e){return h(e)?.[1]??null}function b(e,n){return n.map((n=>e.children.filter((e=>e.id===n))[0]))}function x(e){return 1===e.kind?z(e):e.name}function v(e){return e.sort(((e,n)=>e.title===n.title?0:"Other"===e.title?1:"Other"===n.title||e.title<n.title?-1:1))}const w={1:0,512:1,64:2,2048:3,262144:3,524288:3,1048576:3,1024:4,32:5,256:6,128:7,2:8,4194304:9,4:10,16777216:11};function j(e){if(!(e=u(e.id))||0===e.kind)return null;if(e.sources?.[0]?.fileName.endsWith("/lib.dom.d.ts"))return{document:"https://developer.mozilla.org/en-US/docs/Web/API/"+e.name,anchor:"",title:e.name};const n=k(e);if(!n)return{anchor:"",title:e.name??""};let t;if(512===e.kind){const e=j(k(n));t=e?{anchor:(e.anchor?e.anchor+".":"")+n.name+":constructor",title:"new "+n.name+"()"}:{anchor:n.name+":constructor",title:"new "+n.name+"()"}}else{const r=function(e,n){if(0===n.kind)return"";if(1===n.kind)return console.assert(0===e.kind),1===e.children.length?"":'("'+z(n)+'":module)';if(2===n.kind)return/^"(.*)"$/.test(n.name)?'("'+N(n.name)+'":module)':"("+n.name+'":namespace)';"reference"===n.type&&(n=u(n.id));const t=n.name;let r={2:"namespace",4:"enum",32:"variable",16:"",64:"function",128:"class",256:"interface",1024:"",2048:"",4096:"function",262144:"instance",524288:"instance",4194304:"type",16777216:"reference"}[n.kind];if(console.assert(void 0!==r),512===n.kind)return":constructor";e&&128===e.kind?1024!==n.kind&&2048!==n.kind||(r=n.flags?.isStatic?"static":"instance"):256===e?.kind&&(r="");const i=E(n,"label");return i&&(r=i),r?`(${t}:${r})`:t}(n,e),i=j(n),o=x(e);t=i?{anchor:(i.anchor?i.anchor+".":"")+r,title:i.title+"."+o}:{anchor:r,title:o}}return V(e)&&(t.anchor=""),t}function $(e,n){return e?(n=n??e.title,e.document&&e.anchor?`<a href="${e.document}#${encodeURIComponent(e.anchor)}">${n}</a>`:e.document?`<a href="${e.document}">${n}</a>`:e.anchor?`<a href="#${encodeURIComponent(e.anchor)}">${n}</a>`:n):""}function S(e){return console.assert(!e.document),'<a class="permalink" href="#'+encodeURIComponent(e.anchor)+'" title="Permalink"><span class="sr-only"> Permalink </span><svg><use xlink:href="#link"></use></svg></a>'}function U(e,n,t,r){if(!t||0===t.length)return"";let i="";return n&&(i=d(3,C(e),n)),1===t.length&&D(M(t[0].children)).length<=1?i:(r=r||{symbolSuffix:""},i+t.map((e=>{let n="";e.title&&(n+=`\n\n<h4>${e.title}</h4>\n`);let t=e.children.map((e=>"number"==typeof e?u(e):e));return t=t.filter((e=>!e.inheritedFrom&&"#"!==e.name?.[0]&&!V(e)&&(!e.signatures||e.signatures.filter((e=>!V(e))).length>0))),n+='\n<div class="index">'+function(e,n){if(!e||0===e.length)return"";let t="";return Array.isArray(e[0])?(t+="\n<dl>\n",t+=e.map((e=>"\n<dt>"+e[0]+"</dt>\n<dd>"+e[1]+"</dd>\n")).join(""),t+="\n</dl>\n"):(t+="\n<ul>\n",t+=e.map((e=>"\n<li>"+e+"</li>\n")).join(""),t+="\n</ul>\n"),t}(t.map((e=>$(j(e),x(e)+r.symbolSuffix))))+"\n</div>\n",n})).join("\n"))}function A(e,n){return e?.flags?.[n]}function E(e,n){if(e?.comment?.tags){const t=e.comment.tags.filter((e=>e.tag===n));if(console.assert(t.length<=1),1===t.length)return t[0].text||""}return""}function T(e,n){return e?.comment?.tags&&e.comment.tags.filter((e=>e.tag===n)).length>0}function I(e){if(e.signatures&&!e.comment)return I(e.signatures[0]);let n=E(e,"keywords");!n&&T(e,"keyword")&&(console.warn('The tag for keywords is "@keywords", not "@keyword" ',C(e)),n=E(e,"keyword"));let t=(n??"").split(",");if(t.push({2:"namespace",4:"enum",32:"variable",16:"",64:"function",128:"class",256:"interface",1024:"",2048:"",4096:"function",262144:"instance",524288:"instance",4194304:"type"}[e.kind]??""),t.push(x(e)),T(e,"category")){const n=E(e,"category").split(" ").map((e=>e.toLowerCase().trim()));t=[...t,...n]}return t=[].concat(...t.map((e=>X.keywordSynonyms?.hasOwnProperty(e)?[e,...X.keywordSynonyms[e]]:[e]))),t=t.filter((e=>!!e)).map((e=>e.trim().toLowerCase())),[...new Set(t)]}function P(e,n="block"){if(!e)return"";let t="";e.flags&&(e.flags.isAbstract&&(t+=o("abstract","modifier-tag")),e.flags.isPrivate&&(t+=o("private","modifier-tag")),e.flags.isProtected&&(t+=o("protected","modifier-tag")),e.flags.isPublic&&(t+=o("public","modifier-tag")),e.flags.isExternal&&(t+=o("external","modifier-tag")),e.flags.isStatic&&(t+=o("static","modifier-tag")));const r={eventproperty:"",override:"",readonly:"",sealed:"",virtual:"",deprecated:"red modifier-tag",beta:"orange modifier-tag",alpha:"orange modifier-tag",experimental:"orange modifier-tag"},i={eventproperty:"event",readonly:"read only"};return t+=Object.keys(r).map((n=>T(e,n)?o(i[n]||n,r[n]||"modifier-tag"):"")).join(""),t?"block"===n?a(t,"flags"):o(t,"flags"):""}function R(e){return e.replace(/([^\\])'/g,"$1\\'")}function N(e){return e.replace(/(^")|("$)/g,"")}function O(e){return e.replace(/(\n+)$/g,"")}function C(e){return e&&0!==e.kind?128===e.kind&&A(e,"isAbstract")?c("abstract class ")+"<strong>"+x(e)+"</strong>":1===e.kind?c("module ")+'<strong>"'+x(e)+'"</strong>':c({256:"interface ",128:"class ",4:"enum ",2:"namespace ",1:"module "}[e.kind]??"")+"<strong>"+x(e)+"</strong>":""}function B(e,n){if(/^http[s]?:\/\//.test(n))return n;y(n,e)||console.warn('Unresolved link in "'+e.name+'": ',n);let t="";const r=n.split("#");r.length>1&&(t=r[0],n=r.slice(1).join(""));const i=n.split(".");let o=Q;return i.forEach((e=>{o=y(e,o)})),o?t+"#"+encodeURIComponent(j(o).anchor):t+"#"+i.join(".")}function F(e){return X.tutorialPath?X.tutorialPath.endsWith("/")?X.tutorialPath+e:X.tutorialPath+"/"+e:e}function M(e){return e.filter((e=>"#"!==e.name?.[0]))}function D(e){return e.filter((e=>!e.inheritedFrom))}function q(e,n){return(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/{@tutorial\s+(\S+?)[ \|]+(.+?)}/g,((e,n,t)=>`<a href="${F(n)}">${t}</a>`))).replace(/{@tutorial\s+(\S+?)}/g,((e,n)=>`<a href="${F(n)}">${n}</a>`))).replace(/{@linkcode\s+(\S+?)\s*\|\s*(.+?)}/g,((n,t,r)=>`<a href="${B(e,t)}"><code>${r}</code></a>`))).replace(/{@linkcode\s+(\S+?)}/g,((n,t)=>`<a href="${B(e,t)}"><code>${t}</code></a>`))).replace(/\[\[\`(\S+?)\`\s*\|\s*(.+?)\]\]/g,((n,t)=>`<a href="${B(e,t)}"><code>${t}</code></a>`))).replace(/\[\[\`(\S+?)\`\]\]/g,((n,t)=>`<a href="${B(e,t)}"><code>${t}</code></a>`))).replace(/{@(?:link|linkplain)\s+(\S+?)\s*\|\s*(.+?)}/g,((n,t,r)=>`<a href="${B(e,t)}">${r}</a>`))).replace(/{@(?:link|linkplain)\s+(\S+?)}/g,((n,t)=>`<a href="${B(e,t)}">${t}</a>`))).replace(/\[\[(\S+?)\s*\|\s*(.+?)\]\]/g,((n,t,r)=>`<a href="${B(e,t)}">${r}</a>`))).replace(/\[\[(\S+?)\]\]/g,((n,t)=>`<a href="${B(e,t)}">${t}</a>`))).replace(/({@(?:inheritDoc)\s+(\S+?)})/gi,((n,t,r)=>{t.startsWith("{@inheritDoc")||console.warn("Check capitalization of @inheritDoc",t);const i=y(r,e);return i?K(i,"block-inherit"):(console.warn('Unresolved link in "'+e.name+'": ',t),t)}))}function W(e,n){const t=n.split("\n"),r=[];let o=!1,s=!1,c=[],l="";return t.forEach((e=>{if(o)e.match(/^\s*$/i)?(c.length>0&&r.push({type:l,content:c.join("\n")}),o=!1,l="",c=[]):c.push(e);else if(s)/^[ ]{0,3}(\*\*\*|---)/.test(e)?(c.length>0&&r.push({type:l,content:c.join("\n")}),s=!1,l="",c=[]):c.push(e);else{let n=e.match(/\n*\*\*\(([^]+)\):?\s*\*\*\s*:?\s*([^]+)/i);n?(c.length>0&&r.push({type:l,content:c.join("\n")}),o=!0,l=n[1],c=[n[2]]):(n=e.match(/\n*\*\*\(([^]+)\):?\s*\*\*\s*:?\s*$/i),n?(c.length>0&&r.push({type:l,content:c.join("\n")}),s=!0,l=n[1],c=[]):c.push(e))}})),c.length>0&&r.push({type:l,content:c.join("\n")}),r.map((n=>{if(n.type){const t={danger:"danger",warning:"warning",caution:"warning"}[n.type.toLowerCase()]||"info";return a(`<h4>${n.type}</h4>\n`+i.render(q(e,n.content)),"notice--"+t)}return i.render(q(e,n.content))})).join("\n")}function L(e,t){if(!e)return"";if(e.signatures&&!e.comment)return L(e.signatures[0],t);if(!e.comment)return"";let r="";const o="\n";e.comment.shortText&&(r+=W(e,e.comment.shortText)+o),e.comment.text&&(r+=W(e,e.comment.text)+o);const a=E(e,"remarks");return a&&(r+=W(e,a)+o),"block-inherit"!==t&&e.comment.tags&&e.comment.tags.length>0&&(r+=o+e.comment.tags.map((t=>function(e,t,r){if(!t||!r)return"";let o="";switch(r=O(r.trim())||"",t){case"method":o+="<strong>Method:</strong> "+i.render(q(e,r));break;case"module":o+="<strong>Module:</strong> "+i.render(q(e,r));break;case"function":o+="<strong>Function:</strong> "+i.render(q(e,r));break;case"example":o+="\n<pre><code>"+n.highlight("typescript",r).value+"</code></pre>\n";break;case"typedef":case"type":case"property":case"param":case"returns":case"privateremarks":case"packageDocumentation":case"category":case"global":case"keywords":case"command":break;case"keyword":console.warn('Unexpected tag "@keyword" in '+e.name+'. Did you mean "@keywords"?');default:if(r){const n={eventproperty:"info",override:"info",public:"info",readonly:"info",sealed:"info",virtual:"info",alpha:"warning",beta:"warning",experimental:"warning",deprecated:"danger",internal:"danger"}[t]||"info";o+=l("<h4>"+({eventproperty:"event"}[t]||t)+"</h4>\n\n"+i.render(q(e,r)),{className:"notice--"+n})}else/alpha|beta|deprecated|eventproperty|experimental|internal|override|public|readonly|sealed|virtual/i.test(t)||(o+="<strong>"+t+"</strong>")}return o}(e,t.tag,t.text))).filter((e=>!!e)).join("\n\n")+o),r}function z(e){if(!e)return"";if(1===e.kind){const n=N(e.name).replace(/\.d$/,"");return n.match(/\/([a-z0-9_-]*[\/]?)$/)?.[1]??n}return z(k(e))}function V(e){return T(e,"hidden")||T(e,"ignore")||T(e,"internal")||"#"===e.name[0]}function _(e,n,t){const r=k(e);n||(n=`<strong>${x(e)}</strong>`,4!==e.kind&&32!==e.kind&&64!==e.kind&&128!==e.kind&&256!==e.kind&&1024!==e.kind&&2048!==e.kind||r&&(2===r.kind&&!/^"(.*)"$/.test(r.name)||128===r.kind||256===r.kind)&&(n=x(r)+s(".")+n),64===e.kind&&(n+=s("()")));const i=j(e);return console.assert(!i.document),l(d(3,C(r),n,i,{deprecated:T(e,"deprecated")})+t,{permalink:i,className:"card",keywords:I(e).join(", ")})}function G(e){if(V(e))return"";const n=J(e);if(n)return n;const t=k(e);let r="",i="";512===e.kind?(r=`${c("new ")}<strong>${t.name}</strong>`,i=r):(i=`<strong>${e.name}</strong>`,r=i);const o=e.signatures.filter((e=>!V(e)));return 0===o.length?"":_(e,r,L(e,"block")+a(o.map((e=>{let n=P(e);return n+=a(i+K(e,"inline"),"code"),n+=K(e,"block"),a(n)})).join("\n<hr>\n")))}function J(e){const n=k(e),t=(E(e,"command")||E(n,"command")).trim();if(!t)return"";let r;if(1024===e.kind){if(!e.type.declaration)return"";r=e.type.declaration.signatures[0]}else{if(2048!==e.kind)return"";r=e.signatures[0]}const i=[...r.parameters];let c=t+s("(");return i.shift(),i.length>0?(c+=s("["),c+=o('"'+e.name+'"',"string-literal"),c+=s(", "),c+=i.map((e=>K(e))).join(s(", ")),c+=s("]")):c+=o('"'+e.name+'"',"string-literal"),c+=s(")"),r.type&&(c+=s(": "),c+=K(r.type)),(i.length>0||r.type)&&(c+="\n<dl>\n",i.length>0&&(c+="\n<dt>\n"+i.map((e=>{let n="<strong><var>"+e.name+"</var></strong>";const t=K(e.type,"block");return t&&(n+=s(": ")+t),n+="\n</dt><dd>\n",n+=L(e,"block"),n})).join("\n</dd><dt>\n"),c+="\n</dd>\n"),r.type&&T(e,"returns")&&(c+="\n<dt>\n",c+="<strong>→ </strong>"+K(r.type),c+="\n</dt><dd>\n",T(e,"returns")&&(c+=W(e,E(e,"returns"))),c+="\n</dd>\n"),c+="\n</dl>\n"),c=a(c,"code"),_(e,o("command","modifier-tag")+"<strong>&#8203;"+e.name+"</strong>",c+L(e,"block"))}function H(e){if(!e.groups)return"";const n=function(e){const n=[];return e.forEach((e=>{const t=w[e.kind]??12;n[t]?n[t].push(e):n[t]=[e]})),n.filter((e=>!!e))}(e.groups);return L(e,"section")+n.map((n=>function(e,n){const t=[];if(n.forEach((n=>{(function(e,n){let t=[];const r=e.groups?.filter((e=>(e.kind&n)!==0));return r&&1===r.length?(r[0].categories?(t=r[0].categories.map((t=>({kind:n,title:t.title,children:b(e,t.children)}))),t=v(t)):(console.assert("number"==typeof r[0].children[0]),t=[{kind:n,title:"",children:b(e,r[0].children)}]),t):e.categories?v(e.categories):[{kind:n,title:"",children:e.children.filter((e=>0!=(e.kind&n)))}]})(e,n.kind).forEach((e=>{const n=t.find((n=>n.title===e.title));n?n.children=[...n.children,...e.children]:t.push(e)}))})),0===t.length)return"";let r="";const i=t[0].kind;512!==i&&262144!==i&&4!==i&&(1024!==i&&2048!==i||!T(e,"command")?0==(390&i)&&t.reduce(((e,n)=>e+n.children.length),0)>1&&(r+=U(e,{1:"Modules",2:"Namespaces",4:"Enums",32:"Variables",64:"Functions",128:"Classes",245:"Interfaces",4194304:"Types"}[i],t)):r+=U(e,"",t));const o=t.map((n=>{let t="";return n.title&&(t=d(3,"",n.title,null,{className:"category-title"})),t+=D(n.children).filter((n=>n.id!==e.extendedTypes?.[0].id??-1)).map((e=>K(e,"section"))).join(""),t})).join("");return o?l(r+o):""}(e,n))).filter((e=>!!e)).join("\n\n")}function K(e,n="inline"){if(void 0===e)return"";if("number"==typeof e&&(e=u(e)),"string"==typeof e&&(e=m(e)),"section"===n&&e.groups){if(128===e.kind||256===e.kind)return function(e){if(V(e)||!e.children)return"";if(1===e.groups.length&&0!=(3072&e.groups[0].kind)&&!T(e,"command"))return K(e,"card");const n=j(e),t=d(2,C(k(e)),C(e),n,{deprecated:T(e,"deprecated")})+P(e);let r="";if(e.extendedTypes&&(r+="<p>"+o("Extends","class-label")+e.extendedTypes.map((e=>K(e))).filter((e=>!!e)).join(", ")+"</p>"),e.implementedTypes&&e.implementedTypes.length>0&&e.implementedTypes.length>0&&(r+="<p>"+o("Implements","class-label")+e.implementedTypes.map((e=>K(e))).filter((e=>!!e)).join(", ")+"</p>"),e.extendedBy&&(r+="<p>"+o("Extended by","class-label")+e.extendedBy.map((e=>K(e))).filter((e=>!!e)).join(", ")+"</p>"),e.implementedBy){const n=e.implementedBy.filter((n=>n.id!==e.id));n.length>0&&(r+="<p>"+o("Implemented by","class-label")+n.map((e=>K(e))).filter((e=>!!e)).join(", ")+"</p>")}return l(t+a(r)+H(e),{permalink:n})}(e);if(4===e.kind)return function(e){if(V(e))return"";let n=L(e,"block"),t="";return e.children&&(n&&(n+="\n<hr>"),t+="\n<dl>",t+=e.children.map((e=>K(e,"block"))).join(""),t+="</dl>"),_(e,"",n+t)}(e);if(1===e.kind){const n=j(e);return l(d(2,"",C(e),n)+H(e),{permalink:n})}return H(e)}const t=k(e);if(void 0===e.kind){if("abstract"===e.type&&console.error("Unexpected node type ",e.type),"array"===e.type)return K(e.elementType,"inline")+s("[]");if("conditionals"===e.type&&console.error("Unexpected node type ",e.type),"index"===e.type&&console.error("Unexpected node type ",e.type),"indexedAccess"===e.type)return K(e.objectType)+s("[")+K(e.indexType)+s("]");if("inferred"===e.type&&console.error("Unexpected node type ",e.type),"intersection"===e.type)return"block"===n?'<ul class="type-block"><li>'+e.types.map((e=>K(e,"block"))).filter((e=>!!e)).join(s(" &amp; ")+"</li>\n<li>")+"</li></ul>":e.types.map((e=>K(e))).filter((e=>!!e)).join(s(" &amp; "));if("intrinsic"===e.type)return c(e.name);if("predicate"===e.type&&console.error("Unexpected node type ",e.type),"query"===e.type)return c("typeof ")+K(e.queryType);if("reference"===e.type){let n,r="";if(e.typeArguments&&(r=s("&lt;")+e.typeArguments.map((e=>K(e))).join(s(", "))+s("&gt;")),void 0!==e.id&&(n=u(e.id)),n||(n=m(e.name,t,4194692)),n)return $(j(n),16===n.kind?t.name+"."+e.name:e.name)+r;if(n=m(e.name,void 0,4194692),n)return $(j(n),e.name)+r;if(n)return e.name+r;if(["Object","Function","Boolean","Symbol","String","RegExp","Object","Number","BigInt","Math","Date","Infinity","NaN","globalThis","Error","AggregateError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","Array","Int8Array","Uint8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array","Map","Set","WeakMap","WeakSet","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Iterator","AsyncIterator","Reflect","Proxy","Intl","WebAssembly"].includes(e.name))return'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/'+e.name+'" class="externallink">'+e.name+'<svg><use xlink:href="#external-link"></use></svg></a>'+r;const i={Partial:"partialtype",Readonly:"readonlytype",Record:"recordtype",Pick:"picktype",Omit:"omitype",Exclude:"excludetype",Extract:"extracttype",NonNullable:"nonnullabletype",Parameters:"parameterestype",ConstructorParameters:"constructorparameterstype",ReturnType:"returntype",InstanceType:"instancetype",Required:"requiredtype",ThisParameterType:"thisparametertype",OmitThisParameter:"omitthisparametertype",ThisType:"thistypetype"}[e.name];return i?'<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#'+i+'" class="externallink">'+e.name+'<svg><use xlink:href="#external-link"></use></svg></a>'+r:'<a href="https://developer.mozilla.org/Web/API/'+e.name+'" class="externallink">'+e.name+'<svg><use xlink:href="#external-link"></use></svg></a>'+r}if("reflection"===e.type)return K(e.declaration,n);if("stringLiteral"===e.type)return o('"'+e.value+'"',"string-literal");if("tuple"===e.type)return s("[")+e.elements.map((e=>K(e))).filter((e=>!!e)).join(s(", "))+s("]");if("typeOperator"===e.type)return c(e.operator+" ")+K(e.target);if("typeParameter"===e.type){let n=$(j(e));return e.constraint&&(n+=c(" extends "),n+=K(e.constraint)),n}if("union"===e.type)return"block"!==n||e.types.every((e=>"stringLiteral"===e.type))?e.types.map((e=>K(e))).join(s(" | ")):'<ul class="type-block"><li>'+s("| ")+e.types.map((e=>K(e))).join("</li>\n<li>"+s("| "))+"</li></ul>";if("unknown"===e.type)return"";if("void"===e.type)return c("void")}let r="";switch(e.kind){case 0:case 1:case 2:case 4:console.assert("Unexpected node kind ",Number(e.kind).toString());break;case 16:r=`<dt id="${encodeURIComponent(j(e).anchor)}">`,r+="<strong>"+e.name+"</strong>","string"==typeof e.defaultValue&&(r+=s(" = ")+e.defaultValue),r+="</dt><dd>",r+=P(e),r+=L(e,n),r+="</dd>";break;case 32:"card"===n||"section"===n?r=_(e,"",a(K(e,"block"))+L(e,"block")):(r+="<strong>"+e.name+"</strong>",A(e,"isOptional")&&(r+=o("?","modifier")),"unknown"===e.type?.type&&(r+=s(" = "),r+=e.type.name||""),"unknown"!==e.type?.type&&(r+=s(": "),r+=K(e.type)));break;case 64:"card"===n||"section"===n?r=G(e):console.warn("Unexpected style, kind ",e.kind);break;case 128:case 256:r="card"===n||"section"===n?function(e){if(V(e)||!e.children)return"";let n=L(e,"block");n&&(n+="\n<hr>\n");let t="";return e.children&&(t='<dl><dt id="'+M(e.children).map((e=>{const n=j(e);let t=encodeURIComponent(n.anchor)+'">';return 2048===e.kind?t+=e.signatures.map((t=>{let r=P(e,"inline")+"<strong>"+e.name+"</strong>";return A(e,"isOptional")&&(r+=o("?","modifier")),r+=S(n)+K(t)+"</dt><dd>"+L(t,"block"),r})).join("</dd><dt>")+"</dd>":1024===e.kind?(t+="<strong>"+e.name+"</strong>",A(e,"isOptional")&&(t+=o("?","modifier")),t+=s(": ")+K(e.type)+S(n)+"</dt><dd>"+L(e,"block")):console.error('Unexpected item in a "short" class/interface'),t})).join('\n</dd><dt id="'),t+="\n</dd></dl>\n"),_(e,C(e),n+t)}(e):e.name;break;case 512:r="card"===n||"section"===n?G(e):"constructor"+K(e.signatures[0],n);break;case 1024:"card"===n||"section"===n?r=function(e){if(V(e))return"";const n=J(e);if(n)return n;const t=k(e);let r="",i="";return t&&0!=(391&t.kind)&&(i=`<strong>${e.name}</strong>`,r=t.name+"."+i),_(e,r,K(e.type,"block")+L(e,"block"))}(e):"#"!==e.name[0]&&(r=(t?t.name+".":"")+e.name+s(": ")+K(e.type,n));break;case 2048:r="card"===n||"section"===n?G(e):L(e,"block");break;case 4096:case 16384:"inline"===n?(r=s("("),e.parameters&&(r+=e.parameters.map((e=>K(e))).join(s(", "))),r+=s(")"),r+=s(": ")+K(e.type)):"block"===n?(e.parameters||e.type)&&(r+="\n<dl>\n",e.parameters&&(r+="\n<dt>\n"+e.parameters.map((e=>{let t="<strong><var>"+e.name+"</var></strong>";const r=K(e.type,"block");return r&&(t+=s(": ")+r),t+="\n</dt><dd>\n",t+=L(e,n),t})).join("\n</dd><dt>\n"),r+="\n</dd>\n"),!e.type||!e.comment?.returns&&function(e){return"void"===e.type||"intrinsic"===e.type&&"void"===e.name}(e.type)||(r+="\n<dt>\n",r+="<strong>→ </strong>"+K(e.type),r+="\n</dt><dd>\n",e.comment?.returns&&(r+=W(e,e.comment.returns)),r+="\n</dd>\n"),r+="\n</dl>\n"):console.error("Call signature style not supported");break;case 8192:r+=s("[")+e.parameters.map((e=>K(e))).join(s(", "))+s("]"),r+=s(": ")+K(e.type);break;case 32768:A(e,"isRest")&&(r+=o("...","modifier")),r+=`<var>${e.name}</var>`,A(e,"isOptional")&&(r+=o("?","modifier")),r+=s(": ")+K(e.type);break;case 65536:e.signatures?r+=e.signatures.map((e=>K(e))).join(s("; ")):(e.children||e.indexSignature)&&("block"===n||"block-inherit"===n?(r+="<div><dl>",e.children&&(r+="<dt>"+e.children.map((e=>{let t=K(e)+s(";");return T(e,"deprecated")&&(t=o(t,"deprecated")),t+"</dt><dd>"+(P(e)+L(e,n))})).join("</dd><dt>"),r+="</dd>"),e.indexSignature&&(r+="<dt>",r+=e.indexSignature.map((e=>K(e))).join(s(";")+"</dt><dd>"),r+="</dd>"),r+="</dl></div>"):"inline"===n?(r+=s("{"),e.children&&(r+=e.children.map((e=>K(e))).join(s("; "))),e.indexSignature&&(r+=e.indexSignature.map((e=>K(e))).join(s("; "))),r+=s("}")):console.error("Unexpected style for Type Literal"));break;case 131072:r+=e.name,e.type&&(r+=c(" extends "),r+=K(e.type));break;case 524288:case 1048576:console.warn(`Unexpected kind = ${e.kind} for ${C(e).replace(/<[^>]*>/g," ")}`);break;case 262144:"card"===n||"section"===n?r=function(e){if(V(e))return"";let n="";n=e.getSignature&&e.setSignature?c("get/set ")+`<strong>${e.name}</strong>`:e.getSignature?c("get ")+`<strong>${e.name}</strong>`:c("set ")+`<strong>${e.name}</strong>`;const t=e.getSignature?e.getSignature[0]:e.setSignature[0];let r=e.name+s(": ")+K(t.type,"inline");return e.getSignature&&!e.setSignature?r+="&nbsp;&nbsp;"+o("read only","modifier-tag"):!e.getSignature&&e.setSignature&&(r+="&nbsp;&nbsp;"+o("write only","modifier-tag")),_(e,n,a(r)+L(e,"block"))}(e):console.warn("Unexpected style, kind ",e.kind);break;case 2097152:console.warn("Unexpected style, kind ",e.kind);break;case 4194304:if("card"===n||"section"===n)r=function(e){if(V(e))return"";let n=L(e,"block");const t=K(e,"block");return t&&(n&&(n+="\n<hr>\n"),n+=a(t,"code")),_(e,"",n)}(e);else{const t=K(e.type,n);r="",e.typeParameter&&(r+=s("&lt;"),r+=e.typeParameter.map((e=>K(e))).join(s(", ")),r+=s("&gt;"),t&&(r+=s(" = "))),r+=t}break;case 8388608:console.warn("Unexpected style, kind ",e.kind);break;case 16777216:break;default:console.warn(`Unexpected kind = ${e.kind} for ${C(e).replace(/<[^>]*>/g," ")}`)}return r}let Q,X;exports.grok=function(n,i){try{X=i,Q=function(n,i){let o={};const a=new e.Application;a.options.addReader(new e.TSConfigReader),a.options.addReader(new e.TypeDocReader),a.bootstrap({logger:(e,n,t)=>console.log(e),mode:"modules",target:"es2019",module:"ESNext",experimentalDecorators:!0,moduleResolution:"node",noEmit:"true",stripInternal:!1,includeDeclarations:!0,excludeExternals:!0}),n=a.expandInputFiles(n.map((e=>{const n=t.resolve(t.normalize(e));return r.existsSync(n)||console.warn('File not found "'+n+'"'),n})));const s=a.converter.convert(n);if(s.errors?.length){if(a.logger.diagnostics(s.errors),!i.ignoreErrors)return;a.logger.resetErrors()}return s.project&&(o=a.serializer.projectToObject(s.project)),o}(n,i);const o=i.sdkName??"",a=i.sdkName??Q.name??"";let s;if(i.modules){const e=i.modules.map((e=>m(e,Q,1))).filter((e=>!!e));if(0===e.length)console.warn("Modules "+i.modules.join(", ")+' not found in "'+n+'"');else if(e.length!==i.modules.length){const t=e.map((e=>x(e)));console.warn("Module "+i.modules.filter((e=>!t.includes(e))).join(", ")+' in "'+n+'"')}s=U(Q,"Modules",[{kind:1,title:"",children:e}]),s+=e.map((e=>K(e,"section"))).join(""),s=l(s)}if(s||(s=K(Q,"section")),s)return{[i?.outFile??"index.html"]:function(e,n){return"string"==typeof e?(Object.keys(n).forEach((t=>{"string"==typeof n[t]&&(e=e.replace(new RegExp("{{"+t+"}}","g"),n[t]))})),e):"function"==typeof e?e(n):""}(i.documentTemplate,{packageName:R(a),sdkName:R(O(o)),cssVariables:i.cssVariables,content:s})}}catch(e){console.error(e)}return{}};
