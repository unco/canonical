function g(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function j(){return Object.create(null)}function b(t){t.forEach(B)}function S(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function O(t,...n){if(t==null)return g;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t){let n;return O(t,e=>n=e)(),n}function mt(t,n,e){t.$$.on_destroy.push(O(n,e))}function pt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,o){if(r){const s=q(n,e,i,o);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t,n,e){return t.set(e),n}function $t(t){return t&&S(t.destroy)?t.destroy:g}let w=!1;function V(){w=!0}function X(){w=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:Y(1,r,$=>n[e[$]].claim_order,l))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);u>=c;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function tt(t,n){if(w){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){w&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function wt(){return C("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Nt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Mt(t){return t===""?null:+t}function it(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function St(t,n,e){return R(t,n,e,G)}function Ct(t,n,e){return R(t,n,e,I)}function rt(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Lt(t){return rt(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function kt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new P(void 0,n);z(t);const r=t.splice(e,i-e+1);E(r[0]),E(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(o,n)}function jt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ht(t,n){t.value=n??""}function Pt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Dt(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Bt(t){const n=t.querySelector(":checked");return n&&n.__value}function Ot(t,n,e){t.classList[e?"add":"remove"](n)}function st(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class ct{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=I(e.nodeName):this.e=G(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class P extends ct{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}function qt(t,n){return new t(n)}let x;function y(t){x=t}function p(){if(!x)throw new Error("Function called outside component initialization");return x}function Gt(t){p().$$.on_mount.push(t)}function It(t){p().$$.after_update.push(t)}function zt(t){p().$$.on_destroy.push(t)}function Ft(){const t=p();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=st(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function Rt(t,n){return p().$$.context.set(t,n),n}function Wt(t){return p().$$.context.get(t)}function Jt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],D=[];let m=[];const N=[],W=Promise.resolve();let A=!1;function J(){A||(A=!0,W.then(K))}function Kt(){return J(),W}function M(t){m.push(t)}function Qt(t){N.push(t)}const T=new Set;let _=0;function K(){if(_!==0)return;const t=x;do{try{for(;_<h.length;){const n=h[_];_++,y(n),lt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(y(null),h.length=0,_=0;D.length;)D.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];T.has(e)||(T.add(e),e())}m.length=0}while(h.length);for(;N.length;)N.pop()();A=!1,T.clear(),y(t)}function lt(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}function ot(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const v=new Set;let d;function Ut(){d={r:0,c:[],p:d}}function Vt(){d.r||b(d.c),d=d.p}function ut(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Xt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Yt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Zt(t){t&&t.c()}function tn(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||M(()=>{const s=t.$$.on_mount.map(B).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(M)}function ft(t,n){const e=t.$$;e.fragment!==null&&(ot(e.after_update),b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nn(t,n,e,i,r,o,s,u=[-1]){const c=x;y(t);const l=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:j(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,$,...L)=>{const k=L.length?L[0]:$;return l.ctx&&r(l.ctx[a],l.ctx[a]=k)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](k),f&&dt(t,a)),$}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){V();const a=it(n.target);l.fragment&&l.fragment.l(a),a.forEach(E)}else l.fragment&&l.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),X(),K()}y(c)}class en{$destroy(){ft(this,1),this.$destroy=g}$on(n,e){if(!S(e))return g;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Wt as $,at as A,ft as B,pt as C,gt as D,xt as E,yt as F,tt as G,g as H,mt as I,M as J,Dt as K,Tt as L,vt as M,Bt as N,I as O,Ct as P,Yt as Q,Qt as R,en as S,P as T,kt as U,ht as V,zt as W,Rt as X,$t as Y,b as Z,bt as _,Et as a,Ft as a0,Jt as a1,Ot as a2,Nt as a3,Ht as a4,Mt as a5,O as a6,S as a7,et as b,Lt as c,Xt as d,wt as e,Vt as f,ut as g,E as h,nn as i,It as j,G as k,St as l,it as m,At as n,Gt as o,Pt as p,C as q,rt as r,_t as s,Kt as t,jt as u,Ut as v,D as w,qt as x,Zt as y,tn as z};
