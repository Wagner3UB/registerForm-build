(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,a){e.exports=a(72)},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),u=a.n(r),c=a(105),m=a(103),i=(a(67),a(42)),o=a(11),d=a(101),s=a(104),E=a(100),b=a(99);var f=function(e){var t=e.sendForm,a=Object(n.useState)(""),r=Object(o.a)(a,2),u=r[0],c=r[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),d=i[0],s=i[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),v=f[0],p=f[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),j=g[0],O=g[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({street:u,houseNumber:d,additionalInfo:v,zipcode:j})}},l.a.createElement(b.a,{value:u,onChange:function(e){c(e.target.value)},type:"text",id:"street",label:"Street",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement(b.a,{value:d,onChange:function(e){s(e.target.value)},type:"number",id:"houseNumber",label:"Number",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement(b.a,{value:v,onChange:function(e){p(e.target.value)},type:"text",id:"addtionalInfo",label:"Addicional Info",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement(b.a,{value:j,onChange:function(e){O(e.target.value)},type:"number",id:"zipcode",label:"Zipcode",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement("button",{className:"button-next"},"Finish"))};var v=function(e){var t=e.fullData,a=e.sendForm;return l.a.createElement("ul",{className:"confirmation-list"},l.a.createElement("li",null,l.a.createElement("h4",null,"Name:"),l.a.createElement("p",null,t.name)),l.a.createElement("li",null,l.a.createElement("h4",null,"Surname:"),l.a.createElement("p",null,t.surname)),l.a.createElement("li",null,l.a.createElement("h4",null,"E-mail:"),l.a.createElement("p",null,t.email)),l.a.createElement("li",null,l.a.createElement("h4",null,"ID:"),l.a.createElement("p",null,t.idNumber)),l.a.createElement("li",null,l.a.createElement("h4",null,"Birthday:"),l.a.createElement("p",null,t.date)),l.a.createElement("li",null,l.a.createElement("h4",null,"Address:"),l.a.createElement("p",null,t.street,", ",t.houseNumber)),l.a.createElement("li",null,l.a.createElement("h4",null,"Additional info:"),l.a.createElement("p",null,t.additionalInfo)),l.a.createElement("li",null,l.a.createElement("h4",null,"Zipcode:"),l.a.createElement("p",null,t.zipcode)),l.a.createElement("button",{onClick:function(){a()}},"Complete"))};var p=function(e){var t=e.sendForm,a=Object(n.useState)(""),r=Object(o.a)(a,2),u=r[0],c=r[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),d=i[0],s=i[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({email:u,password:d})}},l.a.createElement(b.a,{value:u,onChange:function(e){c(e.target.value)},type:"email",id:"email",label:"Email",variant:"outlined",margin:"dense",fullWidth:!0,required:!0}),l.a.createElement(b.a,{value:d,onChange:function(e){s(e.target.value)},type:"password",id:"password",label:"Password",variant:"outlined",margin:"dense",fullWidth:!0,required:!0}),l.a.createElement("button",{className:"button-next"},"Next"))};var h=function(e){var t=e.sendForm,a=Object(n.useState)(""),r=Object(o.a)(a,2),u=r[0],c=r[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),d=i[0],s=i[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),v=f[0],p=f[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),j=g[0],O=g[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({name:u,surname:d,idNumber:v,date:j})}},l.a.createElement(b.a,{value:u,onChange:function(e){c(e.target.value)},type:"text",id:"name",label:"Name",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement(b.a,{value:d,onChange:function(e){s(e.target.value)},type:"text",id:"surname",label:"Surname",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement(b.a,{value:v,onChange:function(e){p(e.target.value)},type:"number",id:"idNumber",label:"ID Number",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement(b.a,{value:j,onChange:function(e){O(e.target.value)},type:"date",id:"date",variant:"outlined",margin:"dense",fullWidth:!0}),l.a.createElement("button",{className:"button-next"},"Next"))};var g=function(e){var t=e.completeForm,a=Object(n.useState)(0),r=Object(o.a)(a,2),u=r[0],c=r[1],b=Object(n.useState)({}),g=Object(o.a)(b,2),j=g[0],O=g[1],S=function(){c(u+1)},N=function(e){O(Object(i.a)({},j,e)),S()};Object(n.useEffect)(function(){u===F.length-1&&t(j)});var F=[l.a.createElement(p,{sendForm:N}),l.a.createElement(h,{sendForm:N}),l.a.createElement(f,{sendForm:N}),l.a.createElement(v,{fullData:j,sendForm:S}),l.a.createElement(m.a,{className:"form-completed_text",variant:"h5",component:"h1",align:"center"},"Your information was successfully sent!")];return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"stepper",activeStep:u},l.a.createElement(s.a,null,l.a.createElement(E.a,null,"Login")),l.a.createElement(s.a,null,l.a.createElement(E.a,null,"Personal")),l.a.createElement(s.a,null,l.a.createElement(E.a,null,"Address")),l.a.createElement(s.a,null,l.a.createElement(E.a,null,"Finaliza\xe7\xe3o")),l.a.createElement(s.a,null,l.a.createElement(E.a,null,"Done!"))),F[u])};function j(e){console.log(e)}var O=function(){return l.a.createElement(c.a,{component:"article",maxWidth:"sm"},l.a.createElement(m.a,{className:"title",variant:"h4",component:"h1"},"Register Form"),l.a.createElement(g,{completeForm:j}))};u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.12b47aa7.chunk.js.map