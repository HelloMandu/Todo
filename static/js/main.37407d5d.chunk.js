(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(45)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(10),r=n.n(o),l=(n(28),n(14)),i=n(22),u=(n(29),function(e){var t=e.children;return c.a.createElement("div",{className:"TodoTemplate"},c.a.createElement("div",{className:"app-title"},"\uc77c\uc815 \uad00\ub9ac"),c.a.createElement("div",{className:"content"},t))}),s=n(12),m=(n(30),function(e){var t=e.onInsert,n=Object(a.useState)(""),o=Object(l.a)(n,2),r=o[0],i=o[1],u=Object(a.useCallback)((function(e){i(e.target.value)}),[]),m=Object(a.useCallback)((function(e){t(r),i(""),e.preventDefault()}),[t,r]);return c.a.createElement("form",{className:"TodoInsert",onSubmit:m},c.a.createElement("input",{type:"text",placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:r,onChange:u}),c.a.createElement("button",{type:"submit"},c.a.createElement(s.a,null)))}),d=n(21),f=n(20),v=n.n(f),E=(n(43),c.a.memo((function(e){var t=e.todo,n=e.onRemove,a=e.onToggle,o=e.style,r=t.id,l=t.text,i=t.checked;return c.a.createElement("div",{className:"TodoListItem-virtualized",style:o},c.a.createElement("div",{className:"TodoListItem"},c.a.createElement("div",{className:v()("checkbox",{checked:i}),onClick:function(){return a(r)}},i?c.a.createElement(s.b,null):c.a.createElement(s.c,null),c.a.createElement("div",{className:"text"},l)),c.a.createElement("div",{className:"remove",onClick:function(){return n(r)}},c.a.createElement(s.d,null))))}))),h=(n(44),c.a.memo((function(e){var t=e.todos,n=e.onRemove,o=e.onToggle,r=Object(a.useCallback)((function(e){var a=e.index,r=e.key,l=e.style,i=t[a];return c.a.createElement(E,{todo:i,key:r,onRemove:n,onToggle:o,style:l})}),[n,o,t]);return c.a.createElement(d.a,{className:"TodoList",width:512,height:513,rowCount:t.length,rowHeight:57,rowRenderer:r,list:t,style:{outline:"none"}})})));function b(){for(var e=[],t=1;t<=10;t++)e.push({id:t,text:"\ud560 \uc77c ".concat(t),checked:!1});return e}function p(e,t){switch(t.type){case"INSERT":return e.concat(t.todo);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(i.a)({},e,{checked:!e.checked}):e}));default:return e}}var k=function(){var e=Object(a.useReducer)(p,void 0,b),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useRef)(11),i=Object(a.useCallback)((function(e){var t={id:r.current,text:e,checked:!1};o({type:"INSERT",todo:t}),r.current+=1}),[]),s=Object(a.useCallback)((function(e){o({type:"REMOVE",id:e})}),[]),d=Object(a.useCallback)((function(e){o({type:"TOGGLE",id:e})}),[]);return c.a.createElement(u,null,c.a.createElement(m,{onInsert:i}),c.a.createElement(h,{todos:n,onRemove:s,onToggle:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.37407d5d.chunk.js.map