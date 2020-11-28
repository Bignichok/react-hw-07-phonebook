(this["webpackJsonpreact-hw-07-phonebook"]=this["webpackJsonpreact-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={phoneBookForm:"ContactForm_phoneBookForm__1XE02",formLabel:"ContactForm_formLabel__2duWw",formInput:"ContactForm_formInput___WXnP"}},12:function(t,e,n){t.exports={appear:"fade_appear__2VM2Q",appearActive:"fade_appearActive__3mQ-U",enter:"fade_enter__1xbmd",enterActive:"fade_enterActive__2z2PD",exit:"fade_exit__1DlMN",exitActive:"fade_exitActive__13LN7"}},19:function(t,e,n){t.exports={wrp:"Filter_wrp__3XZtv",filterLabel:"Filter_filterLabel__1V7sX",filterInput:"Filter_filterInput__2oNvj"}},25:function(t,e,n){t.exports={contactList:"ContactList_contactList__2iaAo",enter:"ContactList_enter__2ICE9",enterActive:"ContactList_enterActive__Yho7K",exit:"ContactList_exit__1o8xr",exitActive:"ContactList_exitActive__tVlU8"}},39:function(t,e,n){t.exports={error:"Error_error__3UQuN"}},40:function(t,e,n){t.exports={enter:"errorFadeStyles_enter__2AMpK",enterActive:"errorFadeStyles_enterActive__pEf7_",exit:"errorFadeStyles_exit__hos6a",exitActive:"errorFadeStyles_exitActive__1JsRm"}},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),a=n.n(c),o=n(7),i=n.n(o),u=n(3),s=n(8),l=n(35),b=n(36),f=n(20),j=n(2),d=n(37),m=n.n(d).a.create({baseURL:"http://localhost:2000/"}),p=function(){return m.get("contacts").then((function(t){return t.data}))},h=function(t,e){return m.post("contacts",{name:t,number:e}).then((function(t){return t.data}))},O=function(t){return m.delete("contacts/".concat(t)).then((function(t){return t}))},_="FETCH_CONTACTS_SUCCESS",x="FETCH_FAILURE",v="ADD_CONTACT",C="DELETE_CONTACT",y="CHANGE_FILTER",N="TOGGLE_ERROR",E="TOGGLE_LOADING",A={contacts:[],filter:"",showError:!1,loading:!1,error:{}},g=function(t){return{type:x,payload:{error:t}}},F=function(t){return{type:N,payload:{showError:t}}},L=function(t){return{type:E,payload:{loading:t}}},w=function(t,e){return function(n){n(L(!0)),h(t,e).then((function(t){n(function(t){var e=t.id,n=t.name,r=t.number;return{type:v,payload:{contact:{id:e,name:n,number:r},showError:!1}}}(t)),n(L(!1))})).catch((function(t){return n(g(t))}))}},T=function(t){return function(e){O(t).then((function(){return e(function(t){return{type:C,payload:{id:t}}}(t))})).catch((function(t){return e(g(t))}))}},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case _:return Object(j.a)(Object(j.a)({},t),{},{contacts:[].concat(Object(f.a)(t.contacts),Object(f.a)(r.contacts))});case x:return Object(j.a)(Object(j.a)({},t),{},{error:r.error});case v:var c={id:r.contact.id,name:r.contact.name,number:r.contact.number};return Object(j.a)(Object(j.a)({},t),{},{contacts:[].concat(Object(f.a)(t.contacts),[c])});case C:return Object(j.a)(Object(j.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==r.id}))});case y:return Object(j.a)(Object(j.a)({},t),{},{filter:r.filter});case N:return Object(j.a)(Object(j.a)({},t),{},{showError:r.showError});case E:return Object(j.a)(Object(j.a)({},t),{},{loading:r.loading});default:return t}},S=Object(s.combineReducers)({phoneBook:k}),D=Object(s.createStore)(S,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(b.a))),I=n(15),H=n(16),B=n(18),R=n(17),P=n(73),G=n(38),M=function(t){return t.phoneBook.showError},U=function(t){return t.phoneBook.contacts},X=function(t){return t.phoneBook.filter},J=Object(G.a)([U,X],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),Q=n(74),V=function(t){var e=t.name,n=t.number,c=t.onDeleteContact;return Object(r.jsxs)("li",{className:"basic",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Name:"})," ",e]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Number:"})," ",n]})]}),Object(r.jsx)("button",{type:"button",onClick:c})]})};V.defaultProps={name:"anonymous",number:"888888888",onDeleteContact:function(){}};var W=Object(u.b)((function(t,e){return function(t,e){var n=U(t).find((function(t){return t.id===e}));return Object(j.a)({},n)}(t,e.id)}),(function(t,e){return{onDeleteContact:function(){return t(T(e.id))}}}))(V),q=n(25),K=n.n(q),z=function(t){var e=t.contacts;return Object(r.jsx)(Q.a,{component:"ul",className:"".concat(K.a.contactList," "),children:e.map((function(t){var e=t.id;return Object(r.jsx)(P.a,{timeout:250,classNames:K.a,children:Object(r.jsx)(W,{id:e})},e)}))})};z.defaultProps={contacts:[],onDeleteContact:function(){}};var Y=Object(u.b)((function(t){return{contacts:J(t)}}),null)(z),Z=n(14),$=n(11),tt=n.n($),et=function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(I.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChangeHandler=function(e,n){t.setState(Object(Z.a)({},n,e.target.value))},t.submitHandler=function(e){e.preventDefault();var n=t.state,r=n.name,c=n.number,a=t.props,o=a.contacts,i=a.onToggleError,u=a.onAddContact;t.setState({name:"",number:""}),o&&o.some((function(t){return t.name===r}))?(i(!0),setTimeout((function(){return i(!1)}),3e3)):u(r,c)},t}return Object(H.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("form",{onSubmit:this.submitHandler,className:"".concat(tt.a.phoneBookForm," basic"),children:[Object(r.jsxs)("label",{htmlFor:"formName",className:tt.a.formLabel,children:["Name",Object(r.jsx)("input",{className:tt.a.formInput,required:!0,id:"formName",type:"text",name:"name",value:this.state.name,onChange:function(e){return t.inputChangeHandler(e,"name")}})]}),Object(r.jsxs)("label",{htmlFor:"formNumber",className:tt.a.formLabel,children:["Number",Object(r.jsx)("input",{className:tt.a.formInput,id:"formNumber",type:"number",name:"number",value:this.state.number,required:!0,onChange:function(e){return t.inputChangeHandler(e,"number")}})]}),Object(r.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component);et.defaultProps={onAddContact:function(){}};var nt=Object(u.b)((function(t){return{contacts:U(t)}}),(function(t){return{onAddContact:function(e,n){return t(w(e,n))},onToggleError:function(e){return t(F(e))}}}))(et),rt=n(19),ct=n.n(rt),at=function(t){var e=t.filter,n=t.onChangeFilter;return Object(r.jsxs)("div",{className:"".concat(ct.a.wrp," basic"),children:[Object(r.jsx)("label",{className:ct.a.filterLabel,children:"Find Contacts by name"}),Object(r.jsx)("input",{className:ct.a.filterInput,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})};at.defaultProps={onChangeFilter:function(){}};var ot=Object(u.b)((function(t){return{filter:X(t)}}),(function(t){return{onChangeFilter:function(e){return t(function(t){return{type:y,payload:{filter:t}}}(e))}}}))(at),it=n(39),ut=n.n(it),st=Object(u.b)(null,(function(t){return{closeHandler:function(e){return t(F(e))}}}))((function(t){var e=t.closeHandler;return Object(r.jsxs)("div",{className:ut.a.error,children:[Object(r.jsx)("button",{onClick:function(){return e(!1)}}),Object(r.jsx)("p",{children:"Contact is already existed"})]})})),lt=n(12),bt=n.n(lt),ft=n(40),jt=n.n(ft),dt=(n(70),function(t){Object(B.a)(n,t);var e=Object(R.a)(n);function n(){return Object(I.a)(this,n),e.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.showError,n=t.contacts,c=t.filter;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(P.a,{in:e,timeout:250,classNames:jt.a,unmountOnExit:!0,children:Object(r.jsx)(st,{})}),Object(r.jsx)(P.a,{in:!0,appear:!0,timeout:400,classNames:bt.a,unmountOnExit:!0,children:Object(r.jsx)("h1",{className:"main-title",children:"PhoneBook"})}),Object(r.jsx)(nt,{}),Object(r.jsx)(P.a,{in:n&&n.length>0,appear:!0,timeout:400,classNames:bt.a,unmountOnExit:!0,children:Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(P.a,{in:n&&n.length>1,appear:!0,timeout:400,classNames:bt.a,unmountOnExit:!0,children:Object(r.jsx)(ot,{value:c})}),Object(r.jsx)(P.a,{in:0===n.length,appear:!0,timeout:400,classNames:bt.a,unmountOnExit:!0,children:Object(r.jsx)("p",{children:"no results were found for your search"})}),Object(r.jsx)(Y,{contacts:n})]})})]})}}]),n}(c.Component)),mt={onFetchContacts:function(){return function(t){t({type:"FETCH_CONTACTS_START"}),t(L(!0)),p().then((function(e){t({type:_,payload:{contacts:e}}),t(L(!1))})).catch((function(e){return t(g(e))}))}}},pt=Object(u.b)((function(t){return{contacts:U(t),showError:M(t)}}),mt)(dt);n(71);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{store:D,children:Object(r.jsx)(pt,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.3a738d39.chunk.js.map