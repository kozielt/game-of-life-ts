(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(24)},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a,r=t(0),c=t.n(r),i=t(13),o=(t(22),t(3)),l=t(4),u=t(1),s=t(5),m={MIN_SIZE:1,MAX_SIZE:20,MIN_INTERVAL:50,MAX_INTERVAL:6e4},f=[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!1,!1],[!0,!0,!1,!1,!1,!1,!1,!1,!1],[!1,!0,!1,!1,!1,!0,!0,!0,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],d=1e3,b=8,E="aquamarine",v="aliceblue",g="lightgray",O="1em";!function(e){e.TICK="tick",e.CONFIGURATION_UPDATE="configuration_update",e.START_GAME="start_game",e.STOP_GAME="stop_game",e.RESET_GAME="reset_game",e.EDIT_GAME="edit_game",e.EDIT_CELL="edit_cell"}(a||(a={}));var j=t(9);function p(){var e=Object(l.a)(["\n  border-radius: 20px;\n  padding: 8px 20px;\n  font-size: ",";\n  background-color: ",";\n  transition: all 0.2s;\n  cursor: pointer;\n  white-space: nowrap;\n\n  &:hover {\n    transform: translateY(-5px);\n  }\n"]);return p=function(){return e},e}var x=Object(u.a)(p(),O,g),N=function(e){var n=e.className,t=Object(j.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:Object(u.b)(x,n)},t))};function S(){var e=Object(l.a)(["\n  color: ",";\n  font-size: ",";\n  font-weight: bold;\n"]);return S=function(){return e},e}var h=Object(u.a)(S(),g,O),I=function(e){var n=e.className,t=Object(j.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:Object(u.b)(h,n)},t))};function w(){var e=Object(l.a)(["\n  width: 100%;\n  text-align: center;\n  color: ",";\n"]);return w=function(){return e},e}var A=Object(u.a)(w(),g),y=function(){return c.a.createElement("div",{className:A},c.a.createElement("h1",null,"Configuration Deploy Worked"))};function T(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return T=function(){return e},e}function _(){var e=Object(l.a)(["\n  width: 70px;\n  padding: 6px 10px;\n  border-radius: 10px;\n  font-size: ",";\n"]);return _=function(){return e},e}function C(){var e=Object(l.a)(["\n  flex-grow: 1;\n"]);return C=function(){return e},e}function G(){var e=Object(l.a)(["\n  display: flex;\n  margin: 0 20px 20px 20px;\n  align-items: center;\n"]);return G=function(){return e},e}var R,M=Object(u.a)(G()),k=Object(u.a)(C()),P=Object(u.a)(_(),O),D=Object(u.a)(T()),U=function(e,n){return e>m.MAX_SIZE||e<m.MIN_SIZE||(n>m.MAX_INTERVAL||n<m.MIN_INTERVAL)},z=function(){var e=Object(r.useState)(b),n=Object(o.a)(e,2),t=n[0],i=n[1],l=Object(r.useState)(d),u=Object(o.a)(l,2),s=u[0],f=u[1],E=Object(r.useContext)(Re);return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("div",null,c.a.createElement("div",{className:M},c.a.createElement("label",{htmlFor:"boardSize",className:k},c.a.createElement(I,null,"Board Size")),c.a.createElement("input",{className:P,id:"boardSize",type:"number",min:m.MIN_SIZE,max:m.MAX_SIZE,value:t,onChange:function(e){return i(Number(e.target.value))}})),c.a.createElement("div",{className:M},c.a.createElement("label",{htmlFor:"interval",className:k},c.a.createElement(I,null,"Interval")),c.a.createElement("input",{className:P,id:"interval",type:"number",min:m.MIN_INTERVAL,max:m.MAX_INTERVAL,value:s,onChange:function(e){return f(Number(e.target.value))}})),c.a.createElement("div",{className:D},c.a.createElement(N,{disabled:U(t,s),onClick:function(){var e,n;E((e=s,n=t,{type:a.CONFIGURATION_UPDATE,newInterval:e,newBoardSize:n})),i(b),f(d)}},"Save Changes"))))},L=t(6);function V(e,n){switch(n.type){case a.TICK:var t=e.boardState,r=e.round,c=t.map(function(e,n){return e.map(function(a,r){var c=t[n-1],i=t[n+1];return function(e,n,t,a){var r=function(e,n){return[e-1,e,e+1].filter(function(e){return e>=0&&e<n.length})}(e,t),c=[t,n,a].filter(Boolean).reduce(function(e,n){return e+r.map(function(e){return n[e]}).filter(Boolean).length},0);return t[e]?3===c||4===c:3===c}(r,c,e,i)})});return Object(L.a)({},e,{boardState:c,round:r+1});case a.CONFIGURATION_UPDATE:var i=n.newInterval||d,o=n.newBoardSize||b;if(e.config.boardSize!==o){var l=function(e){return new Array(e).fill(new Array(e).fill(!1))}(o);return Object(L.a)({},e,{boardState:l,config:Object(L.a)({},e.config,{interval:i,boardSize:o})})}return Object(L.a)({},e,{config:Object(L.a)({},e.config,{interval:i})});case a.START_GAME:return Object(L.a)({},e,{config:Object(L.a)({},e.config,{gameState:R.RUNNING})});case a.STOP_GAME:return Object(L.a)({},e,{config:Object(L.a)({},e.config,{gameState:R.PAUSED})});case a.RESET_GAME:return Object(L.a)({},e,{boardState:f,round:0});case a.EDIT_GAME:return Object(L.a)({},e,{config:Object(L.a)({},e.config,{gameState:R.EDIT})});case a.EDIT_CELL:var u=e.boardState,s=n.cellCoordinate;return s?Object(L.a)({},e,{boardState:u.map(function(e,n){return n===s.rowIndex?e.map(function(e,n){return s.cellIndex===n?!e:e}):e})}):e;default:return e}}function B(){var e=Object(l.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  & > button {\n    margin-bottom: 10px;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    flex-direction: row;\n    align-items: flex-end;\n\n    & > button {\n      max-height: 36px;\n\n      :not(:last-child) {\n        margin-right: 10px;\n      }\n    }\n  }\n"]);return B=function(){return e},e}function F(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-grow: 1;\n\n  & > * {\n    margin-bottom: 10px;\n  }\n"]);return F=function(){return e},e}!function(e){e.EDIT="edit",e.PAUSED="paused",e.RUNNING="running"}(R||(R={}));var X=Object(u.a)(F()),Z=Object(u.a)(B()),K=function(e){var n=e.gameState,t=Object(r.useContext)(Re);return c.a.createElement("div",{className:X},c.a.createElement("div",{className:Z},n===R.RUNNING&&c.a.createElement(N,{onClick:function(){return t({type:a.STOP_GAME})}},"Pause Game"),n!==R.RUNNING&&c.a.createElement(N,{onClick:function(){return t({type:a.START_GAME})}},"Start Game"),n!==R.EDIT&&c.a.createElement(N,{onClick:function(){return t({type:a.EDIT_GAME})}},"Edit Game"),c.a.createElement(N,{onClick:function(){return t({type:a.RESET_GAME})}},"Reset Game")))};function W(){var e=Object(l.a)(["\n  margin-left: -450px;\n\n  @media only screen and (max-width: 1200px) {\n    margin-left: -300px;\n  }\n"]);return W=function(){return e},e}function J(){var e=Object(l.a)(["\n  width: 450px;\n  background-color: #363a42;\n  transition: width 1s, margin 1s ease-in-out;\n\n  display: flex;\n  flex-direction: column;\n\n  @media only screen and (max-width: 1200px) {\n    width: 300px;\n  }\n"]);return J=function(){return e},e}var q=Object(u.a)(J()),Y=Object(u.a)(W()),$=function(e){var n=e.gameState,t=e.isVisible;return c.a.createElement("div",{className:Object(u.b)(q,Object(s.a)({},Y,!t))},c.a.createElement(z,null),c.a.createElement(K,{gameState:n}))};function H(){var e=Object(l.a)(["\n  cursor: pointer;\n"]);return H=function(){return e},e}function Q(){var e=Object(l.a)(["\n  background-color: ",";\n"]);return Q=function(){return e},e}function ee(){var e=Object(l.a)(["\n  background-color: ",";\n"]);return ee=function(){return e},e}function ne(){var e=Object(l.a)(["\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n"]);return ne=function(){return e},e}var te=Object(u.a)(ne()),ae=Object(u.a)(ee(),E),re=Object(u.a)(Q(),v),ce=Object(u.a)(H()),ie=function(e){var n=e.isActive,t=e.isEdit,a=e.editAction;return c.a.createElement("div",{onClick:function(){return t&&a()},className:Object(u.b)(te,n?ae:re,t?ce:null)})};function oe(){var e=Object(l.a)(["\n  display: flex;\n"]);return oe=function(){return e},e}var le=Object(u.a)(oe()),ue=function(e){var n=e.isEdit,t=e.rowIndex,i=e.rowState,o=Object(r.useContext)(Re);return c.a.createElement("div",{className:le},i.map(function(e,r){return c.a.createElement(ie,{isActive:e,key:"".concat(r),editAction:function(){var e;o((e={rowIndex:t,cellIndex:r},{type:a.EDIT_CELL,cellCoordinate:e}))},isEdit:n})}))};function se(){var e=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 30px;\n"]);return se=function(){return e},e}var me=Object(u.a)(se()),fe=function(e){var n=e.boardState,t=e.isEdit;return c.a.createElement("div",{className:me},n.map(function(e,n){return c.a.createElement(ue,{rowState:e,key:n,rowIndex:n,isEdit:t})}))};function de(){var e=Object(l.a)(["\n  display: inline-block;\n  margin-right: 10px;\n"]);return de=function(){return e},e}function be(){var e=Object(l.a)(["\n  color: orange;\n"]);return be=function(){return e},e}function Ee(){var e=Object(l.a)(["\n  color: lime;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(l.a)(["\n  width: 100%;\n  text-align: center;\n  color: ",";\n"]);return ve=function(){return e},e}var ge=Object(u.a)(ve(),g),Oe=Object(u.a)(Ee()),je=Object(u.a)(be()),pe=Object(u.a)(de()),xe=function(e){var n=e.gameConfig,t=e.round,a=n.gameState,r=n.interval,i=n.boardSize;return c.a.createElement("div",{className:ge},c.a.createElement("h1",null,"Game Status:"," ",a===R.RUNNING&&c.a.createElement("span",{className:Oe},"Running"),a===R.PAUSED&&c.a.createElement("span",{className:je},"Paused"),a===R.EDIT&&c.a.createElement("span",{className:je},"Edit")),c.a.createElement(I,{className:pe},"Round: ",t),c.a.createElement(I,{className:pe},"Board Size: ",i),c.a.createElement(I,null,"Interval: ",r," ms"))};function Ne(){var e=Object(l.a)(["\n  font-weight: bold;\n"]);return Ne=function(){return e},e}function Se(){var e=Object(l.a)(["\n  position: absolute;\n  bottom: 20px;\n  left: 30px;\n"]);return Se=function(){return e},e}var he=Object(u.a)(Se()),Ie=Object(u.a)(Ne()),we=function(e){var n=e.isSidePanelVisible,t=e.switchSidePanel;return c.a.createElement("div",{className:he},c.a.createElement(N,{onClick:t,className:Ie},n?"\u2190":"\u2192"))};function Ae(){var e=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 3;\n"]);return Ae=function(){return e},e}var ye=Object(u.a)(Ae()),Te=function(e){var n=e.boardState,t=e.gameConfig,a=e.isSidePanelVisible,r=e.round,i=e.switchSidePanel;return c.a.createElement("div",{className:ye},c.a.createElement(xe,{gameConfig:t,round:r}),c.a.createElement(fe,{boardState:n,isEdit:R.EDIT===t.gameState}),c.a.createElement(we,{isSidePanelVisible:a,switchSidePanel:i}))};function _e(){var e=Object(l.a)(["\n  min-height: 100vh;\n  display: flex;\n  align-items: stretch;\n"]);return _e=function(){return e},e}var Ce=Object(u.a)(_e()),Ge={boardState:f,round:0,config:{interval:d,gameState:R.PAUSED,boardSize:b}},Re=c.a.createContext(Function.prototype),Me=function(){var e=Object(r.useReducer)(V,Ge),n=Object(o.a)(e,2),t=n[0],i=n[1],l=Object(r.useState)(!0),u=Object(o.a)(l,2),s=u[0],m=u[1],f=t.boardState,d=t.round,b=t.config,E=b.interval,v=b.gameState;return Object(r.useEffect)(function(){var e=setInterval(function(){v===R.RUNNING&&i({type:a.TICK})},E);return function(){return clearInterval(e)}},[v,E]),c.a.createElement(Re.Provider,{value:i},c.a.createElement("div",{className:Ce},c.a.createElement($,{gameState:v,isVisible:s}),c.a.createElement(Te,{boardState:f,gameConfig:b,round:d,isSidePanelVisible:s,switchSidePanel:function(){return m(!s)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=t(11),Pe=Object(ke.b)([{path:"/",element:c.a.createElement(Me,null)},{path:"about",element:c.a.createElement(function(){return c.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white"}},c.a.createElement("div",null,"Some text"))},null)},{path:"next",element:c.a.createElement(function(){return c.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white"}},c.a.createElement("div",null,"Next"))},null)}]);Object(i.createRoot)(document.getElementById("root")).render(c.a.createElement(ke.a,{router:Pe})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.3914ab2e.chunk.js.map