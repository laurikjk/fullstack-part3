(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),l=t.n(r),c=(t(19),t(2)),u=function(e){return o.a.createElement("form",null,o.a.createElement("div",null,"filter shown with ",o.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange})))},s=t(3),i=t.n(s),m="/api/persons",h=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},g=function(e){return o.a.createElement("form",{onSubmit:function(n){n.preventDefault();var t={name:e.newName,number:e.newNumber},a=!1,o=0;e.persons.forEach((function(e){e.name===t.name&&(a=!0,o=e.id)})),!0===a&&window.confirm("".concat(e.newName," is already added to phonebook, replace the old number with a new one?"))?(f(o,t).then((function(e){return console.log(e)})),e.setMessage("Changed the number of ".concat(t.name," to ").concat(t.number)),setTimeout((function(){e.setMessage(null)}),5e3)):!0!==a&&(d(t).then((function(n){e.setPersons(e.persons.concat(n))})),e.setMessage("Added ".concat(t.name)),setTimeout((function(){e.setMessage(null)}),5e3)),h().then((function(n){e.setPersons(n),e.setShow(n)})),e.setNewName(""),e.setNewNumber(""),console.log("clikedi",n.target)}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},w=function(e){return o.a.createElement("p",null,e.name," ",e.number,o.a.createElement("button",{onClick:function(){return e.handler(e.id,e.name)}},"delete"))},p=function(e){return o.a.createElement("ul",null,e.personsToShow.map((function(n){return o.a.createElement("li",{key:n.id},o.a.createElement(w,{name:n.name,number:n.number,id:n.id,handler:e.handler}))})))},E=function(e){var n=e.message,t=e.type;return null===n?null:o.a.createElement("div",{className:t},n)},v=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),s=Object(c.a)(l,2),i=s[0],m=s[1],d=Object(a.useState)(""),f=Object(c.a)(d,2),w=f[0],v=f[1],N=Object(a.useState)(""),j=Object(c.a)(N,2),O=j[0],S=j[1],C=Object(a.useState)([]),k=Object(c.a)(C,2),y=k[0],M=k[1],T=Object(a.useState)(null),F=Object(c.a)(T,2),P=F[0],B=F[1],D=Object(a.useState)(null),J=Object(c.a)(D,2),W=J[0],x=J[1];return Object(a.useEffect)((function(){h().then((function(e){console.log("response",e),r(e),M(e)}))}),[]),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{message:P,type:"message"}),o.a.createElement(E,{message:W,type:"error"}),o.a.createElement(u,{newFilter:O,handleFilterChange:function(e){console.log(e.target.value),S(e.target.value);var n=e.target.value;console.log("filter",n),M(null===n?t:t.filter((function(e){return e.name.toLowerCase().includes(n)})))}}),o.a.createElement("h3",null,"add a new"),o.a.createElement(g,{newName:i,handleNameChange:function(e){m(e.target.value)},newNumber:w,handleNumberChange:function(e){v(e.target.value)},setNewName:m,setNewNumber:v,setPersons:r,persons:t,setShow:M,setMessage:B}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(p,{personsToShow:y,handler:function(e,n){window.confirm('Delete "'.concat(n,'"?'))&&(b(e).then((function(e){console.log("after delete responde: ",e)})).catch((function(e){x("".concat(n," was already deleted")),setTimeout((function(){x(null)}),5e3)})),h().then((function(e){r(e),M(e)})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8460728c.chunk.js.map