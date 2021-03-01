(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n.n(r),i=n(7),s=n.n(i),a=n(8),u=n(6),l=n(15),h=n(16),d=(n(27),n(2)),b=n(3),j=n(5),p=n(4),f=function(e){var t=e.id,n=e.name,r=e.email;return Object(o.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=150x150"),alt:"pic",height:"150px",width:"150px"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:r})]})]})},g=function(e){var t=e.robots;return console.log("CardList"),t.map((function(e,t){return Object(o.jsx)(f,{id:e.id,name:e.name,email:e.email},t)}))},O=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),Object(o.jsx)("div",{children:Object(o.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},v=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},w=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oops error"}):this.props.children}}]),n}(r.Component),x=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),Object(o.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count : ",this.state.count]})}}]),n}(r.Component),m=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return console.log("Header"),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"tc",children:"Robot Cards"}),Object(o.jsx)(x,{color:"red"})]})}}]),n}(r.Component),y="CHANGE_SEARCH_FIELD",C="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",k="REQUEST_ROBOTS_FAILED",S=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,c=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(m,{}),Object(o.jsx)(O,{searchChange:n}),Object(o.jsx)(v,{children:c?Object(o.jsx)("h1",{children:"Loading"}):Object(o.jsx)(w,{children:Object(o.jsx)(g,{robots:i})})})]})}}]),n}(c.a.Component),E=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,console.log(n),{type:y,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:C}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:k,payload:t})}))}))}}}))(S),P=(n(28),{searchField:""}),W={isPending:!1,robots:[],error:""},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(l.createLogger)();var T=Object(u.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case y:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!1});case k:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),U=Object(u.d)(T,Object(u.a)(h.a));s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(a.a,{store:U,children:Object(o.jsx)(E,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RobotCardsWithRedux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RobotCardsWithRedux","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.a9725d68.chunk.js.map