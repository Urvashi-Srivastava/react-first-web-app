(this.webpackJsonpnode_webapp=this.webpackJsonpnode_webapp||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},22:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(6),r=a.n(o),c=(a(22),a(7)),i=a.n(c),l=a(4),m=a(8),u=a(9),p=a(16),g=a(15),h=a(14),d=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={messageList:[]},n}return Object(u.a)(a,[{key:"_onMessageWasSent",value:function(e){this.setState({messageList:[].concat(Object(l.a)(this.state.messageList),[e])})}},{key:"_sendMessage",value:function(e){e.length>0&&this.setState({messageList:[].concat(Object(l.a)(this.state.messageList),[{author:"them",type:"text",data:{text:e}}])})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,{agentProfile:{teamName:"react-chat-window",imageUrl:"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"},onMessageWasSent:this._onMessageWasSent.bind(this),messageList:this.state.messageList,showEmoji:!0}))}}]),a}(s.a.Component);a(45);var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),s.a.createElement("p",null,"Edit ",s.a.createElement("code",null,"src/App.tsx")," and save to reload."),s.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),s.a.createElement("p",null,s.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[17,1,2]]]);
//# sourceMappingURL=main.719ef3a4.chunk.js.map