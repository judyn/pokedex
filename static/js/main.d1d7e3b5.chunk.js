(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(208)},126:function(e,t,a){},201:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=(a(126),a(28)),i=a(29),m=a(31),s=a(30),u=a(32),p=a(220),h=a(212),d=a(221),E=a(217),g=a(214),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),"Pokedex React was made with",r.a.createElement("a",{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer"}," Create React App"),",",r.a.createElement("a",{href:"https://ant.design/",target:"_blank",rel:"noopener noreferrer"}," Ant Design "),"and",r.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",rel:"noopener noreferrer"}," PokeApi"),".")}}]),t}(n.Component),k=a(66),b=a(207),y=a(215),v=a(218),x=a(186),w=a(191),j=a(213),O=a(219),S=a(12),I=b.a.TabPane,A=y.a.Search,T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={pokemon:[],loading:!0,team:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/?limit=151",{method:"GET"}).then(function(e){return e.json()}).then(function(t){return e.setState({pokemon:t.results,loading:!1})})}},{key:"addToTeam",value:function(e,t){var a=Object(k.a)(this.state.team);a.push({name:e,id:t}),this.setState({team:a}),v.a.success("Added ".concat(e," to team"))}},{key:"removeFromTeam",value:function(e,t){this.setState({team:this.state.team.filter(function(t,a){return a!==e})}),v.a.error("Removed ".concat(t," from team"))}},{key:"searchPokemon",value:function(e){window.location.assign("/p/".concat(e))}},{key:"render",value:function(){var e=this,t=this.state,a=t.pokemon,n=t.loading,o=t.team;return r.a.createElement("div",null,r.a.createElement(b.a,{type:"card"},r.a.createElement(I,{tab:"List",key:"1"},r.a.createElement(x.a,null,r.a.createElement(w.a,{span:8},r.a.createElement(A,{placeholder:"Search Pokemon",onSearch:function(t){return e.searchPokemon(t)},enterButton:!0,style:{marginBottom:20}}))),r.a.createElement(j.a,{loading:n,grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:4},dataSource:a,renderItem:function(t,a){return r.a.createElement(j.a.Item,null,r.a.createElement(O.a,{title:t.name,size:"small",hoverable:!0,extra:r.a.createElement(S.a,{type:"plus-circle",theme:"filled",onClick:function(){return e.addToTeam(t.name,a+1)}}),style:{marginBottom:10,textAlign:"center"},key:a},r.a.createElement(h.a,{to:"/p/".concat(t.name)},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a+1,".png"),alt:t.name}))))}})),r.a.createElement(I,{tab:"Team",key:"2"},r.a.createElement(j.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:4},dataSource:o,renderItem:function(t,a){return r.a.createElement(j.a.Item,null,r.a.createElement(O.a,{title:t.name,size:"small",hoverable:!0,extra:r.a.createElement(S.a,{type:"minus-circle",theme:"filled",onClick:function(){return e.removeFromTeam(a,t.name)}}),style:{marginBottom:10,textAlign:"center"},key:a},r.a.createElement(h.a,{to:"/p/".concat(t.name)},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.id,".png"),alt:t.name}))))}}))))}}]),t}(n.Component),P=a(209),B=a(222),C=a(216),z=O.a.Meta,_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={pokeStats:[],name:"",weight:null,height:null,sprite:"",stats:[],loading:!0,id:null,types:[],moves:[],xp:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://pokeapi.co/api/v2/pokemon/".concat(this.props.match.params.pokemon);fetch(t,{method:"GET"}).then(function(e){return e.json()}).then(function(t){return e.setState({pokeStats:t,name:t.name,height:t.height,weight:t.weight,xp:t.base_experience,sprite:t.sprites.front_default,stats:t.stats,loading:!1,id:t.id,types:t.types,moves:t.moves})})}},{key:"goBack",value:function(){window.history.back()}},{key:"render",value:function(){var e=this,t=this.state,a=t.types,n=t.stats,o=t.loading,c=t.moves,l=t.pokeStats;return console.log(this.state.pokeStats),r.a.createElement("div",{style:{textTransform:"capitalize"}},r.a.createElement(P.a,{type:"primary",style:{marginBottom:20},onClick:function(){return e.goBack()}},r.a.createElement(S.a,{type:"left"})),r.a.createElement(x.a,{gutter:24},r.a.createElement(w.a,{xs:24,xl:12},r.a.createElement(x.a,{gutter:16},r.a.createElement(w.a,{span:8,xs:24,xl:8},r.a.createElement(O.a,{loading:o},r.a.createElement("img",{src:this.state.sprite,alt:this.state.name}),r.a.createElement(z,{title:this.state.name+" #"+this.state.id}),r.a.createElement("div",{style:{marginTop:10}},a.map(function(e,t){return r.a.createElement(B.a,{className:e.type.name,color:!0,key:t},e.type.name)})))),r.a.createElement(w.a,{span:8,xs:24,xl:8},r.a.createElement(O.a,{title:"Height",bordered:!1},(this.state.height/3.048).toFixed(2)," ft / ",(.1*this.state.height).toFixed(2)," m")),r.a.createElement(w.a,{span:8,xs:24,xl:8},r.a.createElement(O.a,{title:"Weight",bordered:!1},(this.state.weight/4.536).toFixed(2)," lbs / ",(.1*this.state.weight).toFixed(2)," kg"))),r.a.createElement(O.a,{loading:o,size:"small",style:{marginTop:24},title:"Stats"},r.a.createElement(j.a,{size:"small"},r.a.createElement(j.a.Item,null,r.a.createElement(j.a.Item.Meta,{title:"Base XP",description:r.a.createElement(C.a,{percent:l.base_experience,size:"small",format:function(e){return e}})})),n.map(function(e,t){return r.a.createElement(j.a.Item,{key:t},r.a.createElement(j.a.Item.Meta,{title:e.stat.name,description:r.a.createElement(C.a,{percent:e.base_stat,size:"small",format:function(e){return e}}),key:t}))})))),r.a.createElement(w.a,{xs:24,xl:12},r.a.createElement(O.a,{loading:o,size:"small",title:"Moves"},r.a.createElement(j.a,null,c.map(function(e,t){return r.a.createElement(j.a.Item,{key:t},e.move.name)}))))))}}]),t}(n.Component),M=(a(201),E.a.Content),F=E.a.Sider,D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1,team:[]},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"App"},r.a.createElement(E.a,null,r.a.createElement(F,{breakpoint:"lg",collapsedWidth:"0"},r.a.createElement(g.a,{theme:"dark",mode:"inline"},r.a.createElement(g.a.Item,{key:"2"},r.a.createElement(h.a,{to:"/pokedex"},"Home")),r.a.createElement(g.a.Item,{key:"1"},r.a.createElement(h.a,{to:"/about"},"About")))),r.a.createElement(E.a,null,r.a.createElement(M,{style:{margin:"0 16px"}},r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:"100vh"}},r.a.createElement(d.a,{path:"/about/",component:f}),r.a.createElement(d.a,{path:"/pokedex/",component:T}),r.a.createElement(d.a,{path:"/p/:pokemon/",component:_}))))))}}]),t}(n.Component),W=a(118),H=a(46),N="ADD_POKEMON";var R=Object(H.b)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case function(e){return{type:N,name:e}}:return[].concat(Object(k.a)(e),[{name:t.name}]);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(H.c)(R);c.a.render(r.a.createElement(W.a,{store:G},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.d1d7e3b5.chunk.js.map