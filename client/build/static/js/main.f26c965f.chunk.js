(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(40),r=a.n(s),i=(a(120),a(4)),l=a(53),o=a(17),d=a(110),j=a(112),b=a(153),u=a(150),m=(a(121),a(5)),O=a(72),h=a(20),x=a(21),p=a(95),v=a.n(p),g=new(function(){function e(){Object(h.a)(this,e)}return Object(x.a)(e,[{key:"getUser",value:function(){return v()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return v()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),w=a(0),f=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("/"!==window.location.pathname),r=Object(m.a)(s,2),i=r[0],l=r[1],d=Object(o.f)();Object(n.useEffect)((function(){"/"===d.pathname?l(!1):l(!0)}),[d.pathname]),Object(n.useEffect)((function(){var e=function(){"/"===window.location.pathname&&(window.scrollY>=860?l(!0):l(!1))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return Object(w.jsx)("nav",{className:i?"znav znav-active":"znav",id:"nav",children:Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)(O.a,{to:"/#top",style:{textDecoration:"none"},children:Object(w.jsxs)("div",{className:"appTitle",children:[Object(w.jsx)("img",{src:"data:image/png;base64,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",width:"50",alt:"toy icon"})," ToySRC"]})}),Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsxs)("ul",{className:"navmenu grouper "+(a?"show":""),children:[Object(w.jsx)("li",{className:"navBtnShell",children:Object(w.jsx)(O.a,{to:"/#findtoys",className:"znavBtn",children:"Find Toys"})}),g.loggedIn()?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("li",{className:"navBtnShell",children:Object(w.jsx)(O.a,{to:"/users#reputations",className:"znavBtn",children:"User Reputations"})}),Object(w.jsx)("li",{className:"navBtnShell",children:Object(w.jsx)(O.a,{to:"/dashboard",className:"znavBtn",children:"Dashboard"})})]}):Object(w.jsx)(w.Fragment,{})]}),Object(w.jsx)("div",{onClick:function(){return c(!a)},className:"navBtnShell menu-hamburger",children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fillRule:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:Object(w.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})})]})]})})},y=function(){return Object(w.jsx)("footer",{className:"zfooter",children:Object(w.jsxs)("ul",{className:"footerMain",children:[Object(w.jsx)("li",{className:"appTitle",children:"ToySRC"}),Object(w.jsx)("li",{className:"footerItem",children:"A project by DavidIviMax&Jasper"}),Object(w.jsx)("li",{className:"footerItem",children:"2022"})]})})},A=a(151),N={width:"18rem",border:"solid rgb(199, 199, 199) 2px",display:"flex",overflow:"hidden",borderRadius:"5px"},C={width:"18rem",borderRadius:"2px"};var k,S,L,U=function(e){var t=e.name,a=e.imageURL,n=e.price,c=e.owner,s=e.description,r=e.showToyModal;return Object(w.jsxs)("div",{className:"card toyCard",style:N,onClick:function(){return r(t,a,n,c,s)},children:[Object(w.jsx)("div",{className:"polaroid",children:Object(w.jsx)("img",{className:"card-img-top cardImage",src:a,style:C,alt:"Auto Parts Website"})}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsxs)("h5",{className:"card-title",children:["Item: ",t]}),Object(w.jsxs)("h5",{className:"card-title",children:["Price: $",n]})]})]})},R=a(42),B=a(66),D=Object(B.b)(k||(k=Object(R.a)(["\nquery users {\n    users {\n        username\n        email\n        location\n        reputation\n        hasReview\n    }\n}\n"]))),F=Object(B.b)(S||(S=Object(R.a)(["\nquery toys {\n    toys {\n        name\n        price\n        imageURL\n        owner\n        description\n        comments {\n            comment\n            author\n        }\n    }\n}\n"]))),M=Object(B.b)(L||(L=Object(R.a)(["\nquery me {\n    me {\n        username\n        email\n        location\n        reputation\n        hasReview\n        reviewedUsers\n    }\n}\n"]))),T=a(145),E={maxHeight:"600px",width:"100%",marginBottom:"24px"},I={listStyleType:"none"};var P,H,Q,V,X,Z=function(){var e=Object(T.a)(F,{}),t=e.loading,a=e.data,c=(null===a||void 0===a?void 0:a.toys)||[],s=Object(n.useState)(""),r=Object(m.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(""),d=Object(m.a)(o,2),j=d[0],b=d[1],u=Object(n.useState)(""),O=Object(m.a)(u,2),h=O[0],x=O[1],p=Object(n.useState)(""),v=Object(m.a)(p,2),g=v[0],f=v[1],y=Object(n.useState)(""),N=Object(m.a)(y,2),C=N[0],k=N[1],S=Object(n.useState)([]),L=Object(m.a)(S,2),R=L[0],B=L[1],D=Object(n.useState)(!1),M=Object(m.a)(D,2),P=M[0],H=M[1],Q=Object(n.useState)(!1),V=Object(m.a)(Q,2),X=V[0],Z=V[1];return t?Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"LOADING CONTENT"})}):Object(w.jsxs)("section",{id:"findtoys",className:"mainSection container",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col text-center",children:Object(w.jsx)("h1",{className:"sectionTitle",children:"Toy Listings"})})}),Object(w.jsx)("div",{className:"row",children:c.map((function(e){return Object(w.jsx)("div",{className:"col",children:Object(w.jsx)(U,{name:e.name,imageURL:e.imageURL,price:e.price,owner:e.owner,description:e.description,showToyModal:function(){return function(e,t,a,n,c,s){l(e),b(a),x(t),f(n),k(c),H(!0),B(s)}(e.name,e.imageURL,e.price,e.owner,e.description,e.comments)}})},e.name+e.price+e.owner+e.imageURL)}))}),Object(w.jsx)(A.a,{size:"lg",show:P,className:"modal",tabIndex:"-1",role:"dialog",id:"toyModal",children:Object(w.jsx)("div",{className:"modal-dialog modal-xl w-100",role:"document",children:Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsxs)("div",{className:"modal-header",children:[Object(w.jsx)("h5",{className:"modal-title",id:"modalTitle",children:i}),Object(w.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){H(!1)},children:Object(w.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(w.jsxs)("div",{className:"modal-body text-center",children:[Object(w.jsx)("img",{src:h,alt:"toy Example",style:E}),Object(w.jsxs)("ul",{style:I,children:[Object(w.jsxs)("li",{children:["Price: $",j]},"id1"),Object(w.jsxs)("li",{children:["Owner: ",g]},"id2"),Object(w.jsxs)("li",{children:["Description: ",C]},"id3"),Object(w.jsx)("li",{children:Object(w.jsx)("button",{className:"btnBlack",onClick:function(){return Z(!0)},children:"Comments"})},"id4")]}),Object(w.jsx)("div",{})]})]})})}),Object(w.jsx)(A.a,{size:"md",show:X,className:"modal",tabIndex:"-1",role:"dialog",children:Object(w.jsx)("div",{className:"modal-dialog modal-xl w-100",role:"document",children:Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsxs)("div",{className:"modal-header",children:[Object(w.jsx)("h5",{className:"modal-title",id:"modalTitle",children:"Comments"}),Object(w.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){Z(!1)},children:Object(w.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(w.jsx)("div",{className:"modal-body text-center",children:R.map((function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:e.author}),": ",e.comment]},e.author+e.comment)}))}),Object(w.jsx)("textarea",{placeholder:"Write your comment..."}),Object(w.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){},children:Object(w.jsx)("span",{"aria-hidden":"true",children:"Post comment"})})]})})})]})},z=a(154),Y=a(155),q=a(44),K=a(15),G=a(26),J=a.n(G),W=a(152),$=a(148),_=a(149),ee=a(147),te=Object(B.a)(P||(P=Object(R.a)(["\n  mutation addUser($username: String!, $password: String!, $email: String!, $location: String!) {\n    addUser(username: $username, password: $password, email: $email, location: $location) {\n      token\n      user {\n        username\n        _id\n        email\n        location\n      }\n    }\n  }\n"]))),ae=Object(B.a)(H||(H=Object(R.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),ne=Object(B.a)(Q||(Q=Object(R.a)(["\nmutation lowerReputation($username: String!) {\n  lowerReputation(username: $username) {\n    username\n    reputation\n  }\n}\n"]))),ce=Object(B.a)(V||(V=Object(R.a)(["\nmutation increaseReputation($username: String!) {\n  increaseReputation(username: $username) {\n    username\n    reputation\n  }\n}\n"]))),se=Object(B.a)(X||(X=Object(R.a)(["\nmutation addToy($name: String!, $price: Int!, $imageURL: String!, $owner: String!, $description: String!) {\n  addToy(name: $name, price: $price, imageURL: $imageURL, owner: $owner, description: $description) {\n    name\n    price\n    imageURL\n    owner\n    description\n  }\n}\n"]))),re=function(){var e=Object(n.useState)({username:"",email:"",password:"",location:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(m.a)(s,1)[0],l=Object(n.useState)(!1),o=Object(m.a)(l,2),d=o[0],j=o[1],b=Object(ee.a)(te),u=Object(m.a)(b,2),O=u[0],h=u[1].error,x=function(e){var t=e.target,n=t.name,s=t.value;c(Object(i.a)(Object(i.a)({},a),{},Object(K.a)({},n,s)))},p=function(){var e=Object(q.a)(J.a.mark((function e(t){var n,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,O({variables:Object(i.a)({},a)});case 6:n=e.sent,s=n.data,g.login(s.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(h),j(!0);case 15:c({username:"",email:"",password:"",location:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(W.a,{noValidate:!0,validated:r,onSubmit:p,children:[Object(w.jsx)($.a,{dismissible:!0,onClose:function(){return j(!1)},show:d,variant:"danger",children:"Something went wrong with your signup!"}),Object(w.jsxs)(W.a.Group,{children:[Object(w.jsx)(W.a.Label,{htmlFor:"username",children:"Username"}),Object(w.jsx)(W.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:x,value:a.username,required:!0}),Object(w.jsx)(W.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(w.jsxs)(W.a.Group,{children:[Object(w.jsx)(W.a.Label,{htmlFor:"email",children:"Email"}),Object(w.jsx)(W.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:x,value:a.email,required:!0}),Object(w.jsx)(W.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(w.jsxs)(W.a.Group,{children:[Object(w.jsx)(W.a.Label,{htmlFor:"location",children:"location"}),Object(w.jsx)(W.a.Control,{type:"location",placeholder:"enter your city",name:"location",onChange:x,value:a.location,required:!0}),Object(w.jsx)(W.a.Control.Feedback,{type:"invalid",children:"location is required!"})]}),Object(w.jsxs)(W.a.Group,{children:[Object(w.jsx)(W.a.Label,{htmlFor:"password",children:"Password"}),Object(w.jsx)(W.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:x,value:a.password,required:!0}),Object(w.jsx)(W.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(w.jsx)(_.a,{disabled:!(a.username&&a.email&&a.password&&a.location),type:"submit",variant:"success",children:"Submit"})]})})},ie=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(ee.a)(ae),r=Object(m.a)(s,2),l=r[0],o=r[1].error,d=Object(n.useState)(!1),j=Object(m.a)(d,1)[0],b=Object(n.useState)(!1),u=Object(m.a)(b,2),O=u[0],h=u[1],x=function(e){var t=e.target,n=t.name,s=t.value;c(Object(i.a)(Object(i.a)({},a),{},Object(K.a)({},n,s)))},p=function(){var e=Object(q.a)(J.a.mark((function e(t){var n,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,l({variables:Object(i.a)({},a)});case 6:n=e.sent,s=n.data,g.login(s.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(o),h(!0);case 15:c({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(W.a,{noValidate:!0,validated:j,onSubmit:p,children:[Object(w.jsx)($.a,{dismissible:!0,onClose:function(){return h(!1)},show:O,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(w.jsxs)(W.a.Group,{children:[Object(w.jsx)(W.a.Label,{htmlFor:"email",children:"Email"}),Object(w.jsx)(W.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:x,value:a.email,required:!0}),Object(w.jsx)(W.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(w.jsxs)(W.a.Group,{children:[Object(w.jsx)(W.a.Label,{htmlFor:"password",children:"Password"}),Object(w.jsx)(W.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:x,value:a.password,required:!0}),Object(w.jsx)(W.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(w.jsx)(_.a,{disabled:!(a.email&&a.password),type:"submit",variant:"success",children:"Submit"})]})})};function le(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(m.a)(s,2),i=r[0],l=r[1];return Object(w.jsx)("div",{className:"splash",id:"top",children:Object(w.jsx)("section",{className:"section splash px-5 pb-5",style:{display:"flex"},children:Object(w.jsxs)("div",{className:"splashtxt",children:[Object(w.jsx)("h2",{style:{fontSize:42},children:"Sell. Trade. Play again!"}),Object(w.jsx)("p",{children:"A simple way to buy, sell or trade used toys locally"}),g.loggedIn()?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("button",{className:"nobg znavBtn",onClick:g.logout,children:"Logout"})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("button",{className:"nobg znavBtn",style:{float:"left",marginRight:10,marginLeft:0},eventkey:"login",onClick:function(){return l(!0)},children:"Signup!"}),Object(w.jsx)("button",{className:"nobg znavBtn",eventkey:"signup",onClick:function(){return c(!0)},children:"Login"})]}),Object(w.jsx)(A.a,{size:"lg",show:i,onHide:function(){return l(!1)},"aria-labelledby":"login-modal",children:Object(w.jsxs)(z.a.Container,{defaultActiveKey:"signup",children:[Object(w.jsx)(A.a.Header,{closeButton:!0,children:Object(w.jsx)(A.a.Title,{id:"login-modal",children:Object(w.jsx)(Y.a,{variant:"pills",children:Object(w.jsx)(Y.a.Item,{children:Object(w.jsx)(Y.a.Link,{eventKey:"signup",children:"Sign Up"})})})})}),Object(w.jsx)(A.a.Body,{children:Object(w.jsx)(z.a.Content,{children:Object(w.jsx)(z.a.Pane,{eventKey:"signup",children:Object(w.jsx)(re,{handleModalClose:function(){return l(!1)}})})})})]})}),Object(w.jsx)(A.a,{size:"lg",show:a,onHide:function(){return c(!1)},"aria-labelledby":"signup-modal",children:Object(w.jsxs)(z.a.Container,{defaultActiveKey:"login",children:[Object(w.jsx)(A.a.Header,{closeButton:!0,children:Object(w.jsx)(A.a.Title,{id:"signup-modal",children:Object(w.jsx)(Y.a,{variant:"pills",children:Object(w.jsx)(Y.a.Item,{children:Object(w.jsx)(Y.a.Link,{eventKey:"login",children:"Login"})})})})}),Object(w.jsx)(A.a.Body,{children:Object(w.jsx)(z.a.Content,{children:Object(w.jsx)(z.a.Pane,{eventKey:"login",children:Object(w.jsx)(ie,{handleModalClose:function(){return l(!1)}})})})})]})})]})})})}var oe=a.p+"static/media/star.9dd5489f.png",de={listStyleType:"none"};var je=function(){var e,t=Object(ee.a)(ce),a=Object(m.a)(t,1)[0],c=Object(ee.a)(ne),s=Object(m.a)(c,1)[0],r=Object(T.a)(D),i=Object(T.a)(M),l=Object(n.useState)(),o=Object(m.a)(l,2),d=o[0],j=o[1],b=Object(n.useState)(),u=Object(m.a)(b,2),O=u[0],h=u[1],x=Object(n.useState)(),p=Object(m.a)(x,2),v=p[0],g=p[1],f=Object(n.useState)(),y=Object(m.a)(f,2),N=y[0],C=y[1],k=Object(n.useState)(),S=Object(m.a)(k,2),L=S[0],U=S[1],R=Object(n.useState)(!1),B=Object(m.a)(R,2),F=B[0],E=B[1],I=function(){var e=Object(q.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({variables:{username:t}});case 2:a=e.sent,C(a.data.lowerReputation.reputation),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(q.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({variables:{username:t}});case 2:n=e.sent,C(n.data.increaseReputation.reputation),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H={height:"20px",width:"20px"},Q=function(e){return e>79?Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H})]}):e>59?Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H})]}):e>39?Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H})]}):e>19?Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:oe,alt:"star",style:H}),Object(w.jsx)("img",{src:oe,alt:"star",style:H})]}):Object(w.jsx)("img",{src:oe,alt:"star",style:H})},V=function(e){var t,a=(null===(t=i.data)||void 0===t?void 0:t.me)||[];if(!a.reviewedUsers)return"error";if(e===a.username)return"twin";for(var n=0;n<a.reviewedUsers.length;n++)if(e===a.reviewedUsers[n])return"reviewed"};return Object(w.jsxs)("section",{className:"container",id:"reputations",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("h1",{children:"Users"})}),null===(e=r.data)||void 0===e?void 0:e.users.map((function(e){return Object(w.jsx)("div",{className:"card userCard",onClick:function(){return j((t=e).username),h(t.email),g(t.location),C(t.reputation),U(t.hasReview),void E(!0);var t},children:Object(w.jsx)("div",{className:"card-body",children:Object(w.jsxs)("h2",{className:"card-title",children:["User:",Object(w.jsx)("div",{children:e.username}),"Reputation:",Object(w.jsx)("div",{children:0!==e.reputation||e.hasReview?Q(e.reputation):"User has no reviews"})]})})},e.username+e.email+e.location)})),Object(w.jsx)(A.a,{size:"lg",show:F,className:"modal",tabIndex:"-1",role:"dialog",children:Object(w.jsx)("div",{className:"modal-dialog modal-xl w-100",role:"document",children:Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsx)("div",{className:"modal-header",children:Object(w.jsx)("button",{type:"button",className:"btn btn-primary","aria-label":"Close",onClick:function(){E(!1)},children:Object(w.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(w.jsxs)("div",{className:"modal-body",children:[Object(w.jsxs)("ul",{style:de,children:[Object(w.jsxs)("li",{children:["Username: ",d]},"id1"),Object(w.jsxs)("li",{children:["Email: ",O]},"id2"),Object(w.jsxs)("li",{children:["Location: ",v]},"id3"),Object(w.jsxs)("li",{children:["Reputation: ",N]},"id4"),Object(w.jsxs)("li",{children:["Has Reviews: ",L?"Yes":"No"]},"id5")]}),Object(w.jsx)("div",{children:Object(w.jsx)("hr",{})}),Object(w.jsx)("div",{children:function(e,t){return t<=0?Object(w.jsx)("h1",{children:"Unable to lower reputation"}):"twin"===V(e)?Object(w.jsx)("h1",{children:"Unable to review self"}):"reviewed"===V(e)?Object(w.jsx)("h1",{children:"Already reviewed this user"}):Object(w.jsx)("button",{className:"btn btn-primary w-100",onClick:function(){return I(e)},children:"Lower Reputation"})}(d,N)}),Object(w.jsx)("div",{children:Object(w.jsx)("hr",{})}),Object(w.jsx)("div",{children:function(e,t){return t>=100?Object(w.jsx)("h1",{children:"Unable to raise reputation"}):"twin"===V(e)?Object(w.jsx)("h1",{children:"Unable to review self"}):"reviewed"===V(e)?Object(w.jsx)("h1",{children:"Already reviewed this user"}):Object(w.jsx)("button",{className:"btn btn-primary w-100",onClick:function(){return P(e)},children:"Increase Reputation"})}(d,N)})]})]})})})]})},be={width:"18rem",border:"solid rgb(199, 199, 199) 2px",display:"flex",overflow:"hidden",borderRadius:"5px"},ue={width:"18rem",borderRadius:"2px"};var me=function(){var e,t,a,n,c,s,r=Object(T.a)(M),i=Object(T.a)(F);return Object(w.jsxs)("section",{className:"container",children:[Object(w.jsx)("div",{className:"card toyCard",style:be,children:Object(w.jsx)("div",{className:"polaroid",children:Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsxs)("h5",{className:"card-title",children:["Username: ",null===(e=r.data)||void 0===e?void 0:e.me.username]}),Object(w.jsxs)("h5",{className:"card-title",children:["Email: ",null===(t=r.data)||void 0===t?void 0:t.me.email]}),Object(w.jsxs)("h5",{className:"card-title",children:["location: ",null===(a=r.data)||void 0===a?void 0:a.me.location]}),Object(w.jsxs)("h5",{className:"card-title",children:["reputation: ",null===(n=r.data)||void 0===n?void 0:n.me.reputation]}),Object(w.jsxs)("h5",{className:"card-title",children:["Reviews: ",null===(c=r.data)||void 0===c?void 0:c.me.hasReview]})]})})}),null===(s=i.data)||void 0===s?void 0:s.toys.map((function(e){return function(e){var t,a;return!(null===(t=r.data)||void 0===t||!t.me||e!==(null===(a=r.data)||void 0===a?void 0:a.me.username))}(e.owner)?Object(w.jsxs)("div",{className:"card toyCard",style:be,children:[Object(w.jsx)("div",{className:"polaroid",children:Object(w.jsx)("img",{className:"card-img-top cardImage",src:e.imageURL,style:ue,alt:"Auto Parts Website"})}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("h5",{className:"card-title",children:e.name})})]},e.name+e.description+e.price):Object(w.jsx)("div",{},e.name+e.description+e.price)}))]})};var Oe=function(){var e,t=Object(T.a)(M),a=Object(n.useState)(""),c=Object(m.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(),l=Object(m.a)(i,2),o=l[0],d=l[1],j=Object(n.useState)(""),b=Object(m.a)(j,2),u=b[0],O=b[1],h=Object(n.useState)(""),x=Object(m.a)(h,2),p=x[0],v=x[1],g=Object(ee.a)(se),f=Object(m.a)(g,1)[0],y=function(){var e=Object(q.a)(J.a.mark((function e(a){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f({variables:{name:s,price:parseInt(o),imageURL:u,owner:null===(n=t.data)||void 0===n?void 0:n.me.username,description:p}});case 3:e.sent,window.location="/dashboard";case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("section",{className:"container",children:[Object(w.jsxs)("h1",{children:["Add new listing for user: ",null===(e=t.data)||void 0===e?void 0:e.me.username]}),Object(w.jsxs)("form",{onSubmit:y,children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Name:"}),Object(w.jsx)("input",{required:!0,type:"text",onChange:function(e){return r(e.target.value)},className:"form-control",placeholder:"Enter the name of the toy",id:"addName"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Price:"}),Object(w.jsx)("input",{required:!0,type:"number",onChange:function(e){return d(e.target.value)},className:"form-control",placeholder:"Enter the price of the toy",id:"addPrice"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Image URL:"}),Object(w.jsx)("input",{required:!0,type:"text",onChange:function(e){return O(e.target.value)},className:"form-control",placeholder:"Enter the image URL of the toy",id:"addImage"})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Description: "}),Object(w.jsx)("input",{required:!0,type:"text",onChange:function(e){return v(e.target.value)},className:"form-control",placeholder:"Enter the description of the toy",id:"addDescription"})]}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Add Toy"})]}),Object(w.jsx)("h1",{id:"addListingErrors"})]})},he=a(109),xe=Object(d.a)({uri:"/graphql"}),pe=Object(he.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),ve=new j.a({link:pe.concat(xe),cache:new b.a});var ge=function(){return Object(w.jsx)(u.a,{client:ve,children:Object(w.jsx)(l.a,{children:Object(w.jsxs)("div",{id:"root",children:[Object(w.jsx)(f,{}),Object(w.jsxs)(o.c,{children:[Object(w.jsxs)(o.a,{exact:!0,path:"/",children:[Object(w.jsx)(le,{}),Object(w.jsx)(Z,{})]}),Object(w.jsx)(o.a,{exact:!0,path:"/users",children:Object(w.jsx)(je,{})}),Object(w.jsx)(o.a,{exact:!0,path:"/dashboard",children:Object(w.jsx)(me,{})}),Object(w.jsx)(o.a,{exact:!0,path:"/addListing",children:Object(w.jsx)(Oe,{})})]}),Object(w.jsx)(y,{})]})})})};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(ge,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.f26c965f.chunk.js.map