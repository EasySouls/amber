import{s as B,n as y}from"../chunks/scheduler.V7bLW0bx.js";import{S as F,i as G,s as H,g as P,m as u,A as J,f as m,c as V,h as A,j as I,n as h,a as z,y as a,o as k}from"../chunks/index.J1rn3Mn3.js";function K(l){let s,i,e,n,_=l[0].team.name+"",v,b,r,g,p=l[0].team.projects+"",j,q,c,S,f=l[0].team.issues+"",E;return document.title=s=l[0].team.name+" - Amber",{c(){i=H(),e=P("div"),n=P("h3"),v=u(_),b=H(),r=P("p"),g=u("Projects: "),j=u(p),q=H(),c=P("p"),S=u("Issues: "),E=u(f)},l(t){J("svelte-mpq2ms",document.head).forEach(m),i=V(t),e=A(t,"DIV",{});var d=I(e);n=A(d,"H3",{});var w=I(n);v=h(w,_),w.forEach(m),b=V(d),r=A(d,"P",{});var C=I(r);g=h(C,"Projects: "),j=h(C,p),C.forEach(m),q=V(d),c=A(d,"P",{});var D=I(c);S=h(D,"Issues: "),E=h(D,f),D.forEach(m),d.forEach(m)},m(t,o){z(t,i,o),z(t,e,o),a(e,n),a(n,v),a(e,b),a(e,r),a(r,g),a(r,j),a(e,q),a(e,c),a(c,S),a(c,E)},p(t,[o]){o&1&&s!==(s=t[0].team.name+" - Amber")&&(document.title=s),o&1&&_!==(_=t[0].team.name+"")&&k(v,_),o&1&&p!==(p=t[0].team.projects+"")&&k(j,p),o&1&&f!==(f=t[0].team.issues+"")&&k(E,f)},i:y,o:y,d(t){t&&(m(i),m(e))}}}function L(l,s,i){let{data:e}=s;return l.$$set=n=>{"data"in n&&i(0,e=n.data)},[e]}class O extends F{constructor(s){super(),G(this,s,L,K,B,{data:0})}}export{O as component};