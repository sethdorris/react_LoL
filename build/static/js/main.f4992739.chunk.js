(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},22:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),s=a.n(r),i=a(1),l=a(2),o=a(4),u=a(3),m=a(5),h=(a(12),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{id:"top-nav"},c.a.createElement("span",null,"Welcome, ",this.props.handle))}}]),t}(n.Component)),p=a(7),f=a.n(p),b=(a(39),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement(f.a.Toggle,{onClick:this.props.menuClick}),c.a.createElement(f.a.Nav,{defaultSelected:"home"},c.a.createElement(p.NavItem,{eventKey:"home"},c.a.createElement(p.NavIcon,{className:"flex p-l"},c.a.createElement("i",{className:"fa fa-fw fa-home jc",style:{fontSize:"1.75em"}})),c.a.createElement(p.NavText,null,"Summoner's Stats"))))}}]),t}(n.Component)),d=(a(8),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.isActive?"active backdrop":"backdrop"})}}]),t}(n.Component)),j=a(10),O=a.n(j),v=a(20),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"match-container"},c.a.createElement("h3",null,"This is a match."),c.a.createElement("p",null,"Game Id: ",this.props.match.gameId),c.a.createElement("p",null,"Teams: ",this.props.match.teams[0].teamId," vs. ",this.props.match.teams[1].teamId," "),c.a.createElement("p",null,"Result: ",this.props.match.teams[0].win," vs. ",this.props.match.teams[1].win," "))}}]),t}(n.Component),y=function(e){var t=e.matches;return c.a.createElement("div",{className:"container"},c.a.createElement("h3",null,"Match History"),t.map(function(e,t){return c.a.createElement(E,{key:t,match:e})}))},k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"stats-container"},c.a.createElement("h3",null,"BruiseR's Stats"),c.a.createElement(y,{matches:this.props.matches}))}}]),t}(n.Component),w=a(21),C=a.n(w),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={data:{},isLoaded:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/GetStats");case 2:t=e.sent,console.log(t.data),this.setState(function(e){return{isLoaded:!0,data:t.data}});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isLoaded,t=this.state.data.matchDetails;return e?c.a.createElement(k,{matches:t}):c.a.createElement("div",{className:"stats-container"},c.a.createElement("h6",null,"... fetching your data! "))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content-container"},c.a.createElement("h1",null,"Some Data Brah"),c.a.createElement(N,null))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={handle:"Summoner",showPanel:!1},a.menuClick=function(e){a.setState(function(e){return{showPanel:!e.showPanel}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(h,{handle:this.state.handle}),c.a.createElement(b,{menuClick:this.menuClick}),c.a.createElement(d,{isActive:this.state.showPanel}),c.a.createElement(S,null))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null))}}]),t}(n.Component);s.a.render(c.a.createElement(I,null),document.getElementById("root"))},8:function(e,t,a){}},[[22,2,1]]]);
//# sourceMappingURL=main.f4992739.chunk.js.map