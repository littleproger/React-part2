(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(11),n=s(5),r=s(3),i=s(2),d="CHAT/ADD_NEW_MESSAGE",l="CHAT/DELETE_MESSAGE",o="CHAT/FETCHED_MESSAGES",j="CHAT/SHOW_EDIT",u="CHAT/HIDE_EDIT",m="CHAT/EDIT_MESSAGE",h="HEADER/CHANGE_HEADER_DATA",x={roomName:"My chat",numberUsers:0,numberMessages:0,lastMessageDate:"0"};var b=s(13),g={messages:[],myInform:{userId:"61325",avatar:"https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",user:"Yaroslav"},editMsg:{id:"",editMsg:!1,text:""}};var p=Object(n.b)({header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var s=t.payload,a=s.map((function(e){return e.userId})),c=s.length,n=new Set(a),r=new Date(s[c-1].createdAt).toLocaleDateString().split("."),d=(new Date).toLocaleDateString().split("."),l=r.join(".").slice(0,5);return r[2]!==d[2]&&(l=r.join(".")),Object(i.a)(Object(i.a)({},e),{},{numberUsers:n.size,numberMessages:c,lastMessageDate:l});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var s={id:t.payload.id,userId:e.myInform.userId,avatar:e.myInform.avatar,user:e.myInform.user,text:t.payload.text,createdAt:t.payload.createdAt,editedAt:""};return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),[s])});case o:return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),Object(b.a)(t.payload))});case l:return Object(i.a)(Object(i.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.payload}))});case j:if(console.log(t.payload),t.payload){var a=e.messages.filter((function(e){return e.id===t.payload}));return Object(i.a)(Object(i.a)({},e),{},{editMsg:{id:t.payload,editMsg:!0,text:a[0].text}})}var c=e.messages.filter((function(t){return e.myInform.userId===t.userId})),n=c[c.length-1];if(n)return Object(i.a)(Object(i.a)({},e),{},{editMsg:{id:n.id,editMsg:!0,text:n.text}});alert("You must write message first!\nThis button for edit last message!");case u:return Object(i.a)(Object(i.a)({},e),{},{editMsg:{id:"",editMsg:!1,text:""}});case m:return Object(i.a)(Object(i.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload.id&&(e.text=t.payload.text,e.editedAt=(new Date).toString()),e}))});default:return e}}}),O=(s(29),s(30),s(0));var f=function(){return Object(O.jsx)("div",{className:"logo-div",children:Object(O.jsx)("h1",{children:"Logo"})})},v=s(6),M=s(7),N=s(9),y=s(8),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:j,payload:e}};var E=function(e){var t=e.roomInfo;return Object(O.jsxs)("div",{className:"room-header flex pos-right flex-spcbtwn flex-vertCntr pad-t_20px",children:[Object(O.jsxs)("div",{className:"flex flex-spcbtwn width_30prc pad-lr_30px",children:[Object(O.jsx)("h3",{children:t.roomName}),Object(O.jsxs)("h3",{children:[t.numberUsers," participants"]}),Object(O.jsxs)("h3",{children:[t.numberMessages," message"]})]}),Object(O.jsx)("div",{className:"pad-lr_30px",children:Object(O.jsxs)("h3",{children:["last message at ",t.lastMessageDate]})})]})},w=s(4);var _=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("svg",{viewBox:"0 0 15 15",width:"20px",height:"20px",stroke:"black",fill:"none",className:"like",children:Object(O.jsx)("path",{d:"M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75 C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"})})})};var A=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("svg",{onClick:e.func,className:"msg-icon",viewBox:"0 0 64 58.67",children:[Object(O.jsx)("path",{d:"M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z"}),Object(O.jsx)("path",{class:"cls-1",d:"M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z"}),Object(O.jsx)("path",{class:"cls-1",d:"M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z"})]})})};var C=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("svg",{onClick:e.func,className:"msg-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:Object(O.jsx)("polygon",{points:"16 3 21 8 8 21 3 21 3 16 16 3"})})})};var I=function(e){return Object(O.jsx)("div",{id:e.data.id,className:" flex flex-vertCntr flex-drctCol marg-t_20px pos_right pad-r_10px",children:Object(O.jsxs)("div",{className:"chat-msg chat-msg_rightDIV",children:[Object(O.jsxs)("div",{className:"chat-msg_right",children:[Object(O.jsx)("div",{className:"font-mid",children:e.data.text}),Object(O.jsx)("div",{className:"msg-date flex flex-spcbtwn",children:e.newMsg?"".concat(e.time.hour,":").concat(e.time.minute):"".concat(e.time.hour,":").concat(e.time.minute," (edited)")})]}),Object(O.jsxs)("div",{className:"flex flex-vertCntr flex-spcbtwn width_100prc msg-iconDiv marg-t_20px",children:[Object(O.jsx)("div",{className:"like-right_size marg-l_20px",children:Object(O.jsx)(_,{})}),Object(O.jsxs)("div",{className:"flex flex-vertCntr flex-spcbtwn smartIcon",children:[Object(O.jsx)("div",{className:"flex flex-vertCntr edit-button ",children:Object(O.jsx)(C,{func:function(){return e.clickToEdit(e.data.id)}})}),Object(O.jsx)(A,{func:function(){return e.deleteMessage(e.data.id)}})]})]})]})})};var k=function(e){return Object(O.jsx)("div",{className:"avatarDIV flex flex-vertCntr",children:Object(O.jsx)("img",{className:"avatar",src:e.src,alt:"Avatar"})})};var S=function(e){return Object(O.jsxs)("div",{className:" flex flex-vertCntr pos_left marg-t_20px pad-l_10px",children:[Object(O.jsx)(k,{src:e.data.avatar}),Object(O.jsxs)("div",{className:"chat-msg chat-msg_left",children:[Object(O.jsx)("div",{className:"font-small",children:e.data.user}),Object(O.jsx)("div",{className:"font-mid",children:e.data.text}),Object(O.jsx)("div",{className:"msg-date",children:e.newMsg?"".concat(e.time.hour,":").concat(e.time.minute):"".concat(e.time.hour,":").concat(e.time.minute," (edited)")}),Object(O.jsx)("div",{className:"msg-iconDiv",children:Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"likeDiv visible-hide"}),Object(O.jsx)(_,{})]})})]})]})};var T=function(e){var t=Object(w.a)("",2),s=t[0],a=t[1],c=!0;if(e.data.editedAt){var n=new Date(e.data.editedAt).toLocaleTimeString().split(":"),r=Object(w.a)(n,2);s=r[0],a=r[1],c=!1}else{var i=new Date(e.data.createdAt).toLocaleTimeString().split(":"),d=Object(w.a)(i,2);s=d[0],a=d[1]}return Object(O.jsx)("div",{children:e.data.userId===e.myId?Object(O.jsx)(I,{clickToEdit:e.clickToEdit,deleteMessage:e.deleteMessage,time:{hour:s,minute:a},newMsg:c,data:e.data}):Object(O.jsx)(S,{time:{hour:s,minute:a},newMsg:c,data:e.data})})};function H(e,t){return Object(O.jsx)("div",{className:"flex flex-horCntr pad-t_30px",children:Object(O.jsx)("div",{className:"flex flex-centered ".concat(t),children:Object(O.jsx)("h3",{children:e})})})}function z(e){var t=(new Date).toLocaleDateString(),s=new Date(e.data.createdAt).toLocaleDateString(),a=(new Date).toLocaleDateString().split("."),c=Object(w.a)(a,3),n=(c[0],c[1]),r=c[2],i=new Date(e.data.createdAt).toLocaleDateString().split("."),d=Object(w.a)(i,3),l=d[0],o=d[1],j=d[2],u=new Date(e.data.createdAt).toDateString().split(" "),m=Object(w.a)(u,3),h=m[0],x=m[1];m[2];return e.prevDate===s?null:s===t?H("Today",e.cls):r!==j?H("".concat(l," ").concat(o," ").concat(j),e.cls):n!==o?H("".concat(h," ").concat(x),e.cls):void 0}var L={changeHeaderData:function(e){return{type:h,payload:e}}},V=Object(r.b)(null,L)((function(e){var t,s=new Date,a="";return e.changeHeaderData(e.messages),Object(O.jsx)("div",{className:"full-size flex-drctCol",children:e.messages.map((function(c){return s!==new Date(c.createdAt).toLocaleDateString()&&(t=Object(O.jsx)(z,{data:c,prevDate:a,cls:"date-block"},new Date),a=new Date(c.createdAt).toLocaleDateString()),Object(O.jsxs)(O.Fragment,{children:[t,Object(O.jsx)(T,{data:c,myId:e.myId,deleteMessage:e.deleteMessage,clickToEdit:e.clickToEdit},c.id)]})}))})})),B=s(35),F=function(e){Object(N.a)(s,e);var t=Object(y.a)(s);function s(e){var a;return Object(v.a)(this,s),(a=t.call(this,e)).inputHandlerNew=function(e){var t=e.target.value.trim(),s=Object(B.a)(),c=new Date;a.setState({msg:{text:t,id:s,createdAt:c.toString()}})},a.sendText=function(){a.state.msg.text&&(a.props.addMessage(a.state.msg),a.state.msg.text="")},a.state={msg:{id:"",text:"",createdAt:""},editedMsg:{id:"",text:""}},a}return Object(M.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"pad-lr_30px chat-msg_submit flex flex-vertCntr",children:[Object(O.jsx)("input",{className:"chat-msg_input",type:"text",name:"message",placeholder:"Message",value:this.state.msg.text,onChange:function(t){return e.inputHandlerNew(t)}}),Object(O.jsx)("button",{className:"chat-msg_button",onClick:this.sendText,children:"Send"}),Object(O.jsx)("button",{className:"chat-msg_button editButton_size",onClick:function(){return e.props.showEdit()},children:"\u2b06"})]})})}}]),s}(a.Component),U={addMessage:function(e){return{type:d,payload:e}},showEdit:D},G=Object(r.b)((function(e){return{messages:e.chat.messages}}),U)(F),J=function(e){Object(N.a)(s,e);var t=Object(y.a)(s);function s(e){var a;return Object(v.a)(this,s),(a=t.call(this,e)).inputHandlerEdit=function(e){var t=e.target.value;a.setState({editedMsg:{id:a.props.editMsg.id,text:t}})},a.editText=function(){a.props.editMessage(a.state.editedMsg),a.props.hideEdit(),a.state.editedMsg.text=""},a.state={editedMsg:{id:"",text:""}},a}return Object(M.a)(s,[{key:"componentDidMount",value:function(){this.setState({editedMsg:{id:"",text:this.props.editMsg.text}})}},{key:"render",value:function(){var e=this;return this.props.editMsg&&this.props.editMsg.editMsg?Object(O.jsxs)("div",{className:"modal flex flex-drctCol flex-vertCntr flex-spcarrnd flex-horCntr",children:[Object(O.jsx)("h2",{children:"Edit message"}),Object(O.jsx)("input",{className:"editMsg-input",type:"textarea",name:"Edit message",placeholder:this.props.editMsg.text,onChange:function(t){return e.inputHandlerEdit(t)}}),Object(O.jsxs)("div",{className:"editMsg-buttonDiv flex flex-vertCntr flex-spcbtwn ",children:[Object(O.jsx)("button",{className:"editMsg-button chat-msg_button",type:"button",onClick:this.editText,children:"Ok"}),Object(O.jsx)("button",{className:"editMsg-button chat-msg_button",type:"button",onClick:this.props.hideEdit,children:"Cancel"})]})]}):null}}]),s}(a.Component),R={hideEdit:function(){return{type:u}},editMessage:function(e){return{type:m,payload:e}}},W=Object(r.b)((function(e){return{editMsg:e.chat.editMsg}}),R)(J);s(32);function X(){return Object(O.jsx)("div",{className:"flex flex-centered full-size",children:Object(O.jsx)("div",{className:"spiner"})})}var Y=function(e){Object(N.a)(s,e);var t=Object(y.a)(s);function s(e){var a;return Object(v.a)(this,s),(a=t.call(this,e)).state={roomInform:{roomName:"My chat",numberUsers:0,numberMessages:0,lastMessageDate:"0"},messages:[],myInform:{userId:"61325",avatar:"https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",user:"Wendy"},edtMsg:{id:"",editMsg:!1,text:""}},a}return Object(M.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://edikdolynskyi.github.io/react_sources/messages.json").then((function(e){return e.json()})).then((function(t){e.props.addFetchedMessage(t)}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"pad-lr_chat",children:[Object(O.jsx)(W,{}),Object(O.jsx)(E,{roomInfo:this.props.headerInform}),Object(O.jsx)("div",{className:"chat-messageWndw marg-t_20px",children:0!==this.props.messages.length?Object(O.jsx)(V,{messages:this.props.messages,myId:this.props.myInform.userId,deleteMessage:this.props.deleteMessage,clickToEdit:this.props.showEdit}):Object(O.jsx)(X,{})}),Object(O.jsx)(G,{addMessage:this.props.addMessage})]})}}]),s}(a.Component),Z={addFetchedMessage:function(e){return{type:o,payload:e}},deleteMessage:function(e){return{type:l,payload:e}},showEdit:D},q=Object(r.b)((function(e){return{messages:e.chat.messages,myInform:e.chat.myInform,headerInform:e.header}}),Z)(Y);var K=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(f,{}),Object(O.jsx)(q,{})]})},Q=Object(n.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),P=Object(O.jsx)(r.a,{store:Q,children:Object(O.jsx)(K,{})});Object(c.render)(P,document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d721965.chunk.js.map