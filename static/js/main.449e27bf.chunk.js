(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t(0),i=t(13),c=t.n(i),a=(t(23),t(11)),l=t(17),s=t(5);var u=t(3),d=t(2);t(12);function h(){var n=Object(u.a)(["\n  color: red;\n\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  padding: 4px;\n  background: white;\n\n  & + & {\n    margin-left: 4px;\n  }\n\n  &:hover {\n    color: ",";\n    background: ",";\n    border-radius: 8px;\n    transition: border-radius 0.05s;\n  }\n\n  "," {\n    font-size: 20px;\n  }\n"]);return b=function(){return n},n}function f(){var n=Object(u.a)([""]);return f=function(){return n},n}function j(){var n=Object(u.a)(["\n  color: rgba(123, 50, 10);\n  font-size: 20px;\n\n  ","\n\n  ","\n"]);return j=function(){return n},n}function p(){var n=Object(u.a)(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  width: 70%;\n  border: 1px solid black;\n  & + & {\n    margin-top: 5px;\n  }\n"]);return p=function(){return n},n}var g=d.b.div(p()),m=d.b.div(j(),(function(n){return n.$isDone&&"\ntext-decoration: line-through;\n"}),(function(n){return"XL"===n.size&&"\nfont-size: 30px;\n"})),O=d.b.div(f()),x=d.b.button(b(),(function(n){return n.isDone,n.theme.colors.primary_white}),(function(n){return n.isDone?n.theme.colors.primary_red:n.theme.colors.primary_green}),"@media screen and (max-width: 760px)"),v=Object(d.b)(x)(h(),(function(n){return n.theme.colors.primary_white}),(function(n){return n.theme.colors.primary_red}));function D(n){var e=n.size,t=n.todo,r=n.handleDeleteTodo,i=n.handleToggleIsDone;return Object(o.jsxs)(g,{className:"todoList ".concat(t.isDone?"completed":""),"data-id":t.id,children:[Object(o.jsx)(m,{$isDone:t.isDone,size:e,children:t.content}),Object(o.jsxs)(O,{children:[Object(o.jsx)(x,{onClick:function(){i(t.id)},isDone:t.isDone,children:t.isDone?"\u672a\u5b8c\u6210":"\u5df2\u5b8c\u6210"}),Object(o.jsx)(v,{onClick:function(){r(t.id)},children:"\u522a\u9664"})]})]})}function C(){var n=Object(r.useRef)(1),e=Object(r.useState)((function(){var e=window.localStorage.getItem("todos")||"";return e?(e=JSON.parse(e)).length>0&&(n.current=e[0].id+1):e=[],e})),t=Object(s.a)(e,2),i=t[0],c=t[1];Object(r.useEffect)((function(){!function(n){window.localStorage.setItem("todos",JSON.stringify(n))}(i)}),[i]);var u=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],o=e[1];return{value:t,setValue:o,handleChange:function(n){o(n.target.value)}}}(),d=u.value,h=u.setValue,b=u.handleChange,f=Object(r.useState)("all"),j=Object(s.a)(f,2),p=j[0],g=j[1],m=function(n){c(i.filter((function(e){return e.id!==n})))},O=function(n){c(i.map((function(e){return e.id!==n?e:Object(a.a)(Object(a.a)({},e),{},{isDone:!e.isDone})})))};return{id:n,todos:i,setTodos:c,value:d,setValue:h,handleChange:b,handleButtonClick:function(){c([{id:n.current,content:d,isDone:!1}].concat(Object(l.a)(i))),h(""),n.current++},filter:p,setFilter:g,handleFilterAll:function(){g("all")},handleFilterDone:function(){g("done")},handleFilterNotDone:function(){g("notDone")},handleClearAll:function(){c([])},isFilterState:function(n,e){return"all"===n?e.map((function(n){return Object(o.jsx)(D,{todo:n,handleDeleteTodo:m,handleToggleIsDone:O},n.id)})):"done"===n?e.filter((function(n){return n.isDone})).map((function(n){return Object(o.jsx)(D,{todo:n,handleDeleteTodo:m,handleToggleIsDone:O},n.id)})):"notDone"===n?e.filter((function(n){return!n.isDone})).map((function(n){return Object(o.jsx)(D,{todo:n,handleDeleteTodo:m,handleToggleIsDone:O},n.id)})):void 0}}}var F=function(){var n=C(),e=n.todos,t=n.value,r=n.handleChange,i=n.handleButtonClick,c=n.filter,a=n.handleFilterAll,l=n.handleFilterDone,s=n.handleFilterNotDone,u=n.handleClearAll,d=n.isFilterState;function h(n){var e=n.className,t=n.onClick,r=n.children;return Object(o.jsx)("button",{className:e,onClick:t,style:{margin:"5px"},children:r})}return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)("input",{type:"text",placeholder:"todo",value:t,onChange:r,style:{width:"50%"}}),Object(o.jsx)(h,{className:"btn btn-primary",onClick:i,children:"Add todo"}),Object(o.jsx)(h,{className:"btn btn-info",onClick:a,children:"All"}),Object(o.jsx)(h,{className:"btn btn-success",onClick:l,children:"Done"}),Object(o.jsx)(h,{className:"btn btn-warning",onClick:s,children:"Not Done"}),Object(o.jsx)(h,{className:"btn btn-danger",onClick:u,children:"Clear All"}),d(c,e)]})})},y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};c.a.render(Object(o.jsx)(d.a,{theme:{colors:{primary_green:"#00AA00",primary_red:"#FF0000",primary_white:"#FFFFFF"}},children:Object(o.jsx)(F,{})}),document.getElementById("root")),y()}},[[26,1,2]]]);
//# sourceMappingURL=main.449e27bf.chunk.js.map