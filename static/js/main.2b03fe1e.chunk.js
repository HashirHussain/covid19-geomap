(this["webpackJsonpcovid19-geomap"]=this["webpackJsonpcovid19-geomap"]||[]).push([[0],{27:function(e,t,a){e.exports=a(37)},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(21),i=a.n(o),c=(a(32),a(5)),s=a(4),l=a(7),u=a(6),d=a(3),p=a(8),f=a(12),m=a.n(f),h=a(22),v=a(16),b=a(24),g={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,"#3288bd"],[1,"#66c2a5"],[2,"#abdda4"],[3,"#e6f598"],[4,"#ffffbf"],[5,"#fee08b"],[6,"#fdae61"],[7,"#f46d43"],[8,"#d53e4f"]]},"fill-opacity":.6}},y=a(18),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!0},a._toggleMenu=a._toggleMenu.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"_toggleMenu",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"information-icon",onClick:this._toggleMenu},this.state.isOpen?r.a.createElement(y.b,null):r.a.createElement(y.a,null)),this.state.isOpen?r.a.createElement("div",{className:"information-panel"},r.a.createElement("h4",null,"COVID19 geographical outbreaks Country wise"),r.a.createElement("ul",null,r.a.createElement("li",{style:{background:"#d53e4f"}},"Highest confirmed cases"),r.a.createElement("li",{style:{background:"#f46d43"}},"\xa0"),r.a.createElement("li",{style:{background:"#fee08b"}},"\xa0"),r.a.createElement("li",{style:{background:"#ffffbf",color:"#908a8a"}},"outbreak situation start"),r.a.createElement("li",{style:{background:"#e6f598"}},"\xa0"),r.a.createElement("li",{style:{background:"#abdda4"}},"\xa0"),r.a.createElement("li",{style:{background:"#66c2a5"}},"\xa0"),r.a.createElement("li",{style:{background:"#3288bd"}},"Lowest confirmed cases"),r.a.createElement("li",{style:{background:"#000000"}},"Records not available")),r.a.createElement("p",null,"Developed by"," ",r.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/hashir-hussain/",target:"_blank"},"Hashir Hussain"))):r.a.createElement("div",null))}}]),t}(n.PureComponent),O=a(15),k=a(40),_=a(41);var w=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?timelines=0");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j={width:"100%",height:"100vh",latitude:21,longitude:78,zoom:2,bearing:0,pitch:0},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._loadData=function(e){return a.setState({data:e})},a._setViewport=function(e){return a.setState({viewport:e})},a._onHover=function(e){var t=e.features,n=e.srcEvent,r=n.offsetX,o=n.offsetY,i=t&&t.find((function(e){return"data"===e.layer.id}));a.setState({hoveredFeature:i,x:r,y:o})},a.state={data:null,hoveredFeature:null,viewport:j},a._setViewport=a._setViewport.bind(Object(d.a)(a)),a._onHover=a._onHover.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(b.a)("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",(function(t,a){t||w().then((function(t){var n=function(e,t){var a=e.features,n=function(e){var t=e.locations,a={};return t.forEach((function(e){a.hasOwnProperty(e.country_code)?(a[e.country_code].confirmed+=e.latest.confirmed,a[e.country_code].deaths+=e.latest.deaths):a[e.country_code]={confirmed:e.latest.confirmed,deaths:e.latest.deaths,last_updated:e.last_updated}})),a}(t),r=Object(_.a)().domain(Object.keys(n).map((function(e){return n[e].confirmed}))).range(Object(k.a)(9));return{type:"FeatureCollection",features:a.map((function(e){var t={};if(n[e.properties.ISO_A2]){var a=n[e.properties.ISO_A2].confirmed;t=Object(O.a)({},e.properties,{name:e.properties.ADMIN,hasRecords:!0,deaths:n[e.properties.ISO_A2].deaths,last_updated:n[e.properties.ISO_A2].last_updated,confirmed:a,percentile:r(a)})}else t=Object(O.a)({},e.properties,{name:e.properties.ADMIN,hasRecords:!1});return Object(O.a)({},e,{properties:t})}))}}(a,t);e._loadData(n)}))}))}},{key:"_renderTooltip",value:function(){var e=this.state,t=e.hoveredFeature,a=e.x,n=e.y;if(t){if(t.properties.hasRecords){var o=t.properties,i=o.name,c=o.confirmed,s=o.deaths,l=o.last_updated,u=new Date(l);return t&&r.a.createElement("div",{className:"tooltip",style:{left:a,top:n}},r.a.createElement("div",null,"Country: ",i),r.a.createElement("div",null,"Confirmed Cases: ",c),r.a.createElement("div",null,"Deaths: ",s),r.a.createElement("div",null,"Last Update: ",u.toUTCString()))}return r.a.createElement("div",{className:"tooltip",style:{left:a,top:n}},"Records not found for ",t.properties.name)}}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.data;return a?r.a.createElement("div",{style:{height:"100vh",position:"relative"}},r.a.createElement(v.c,Object.assign({mapboxApiAccessToken:"pk.eyJ1IjoiaGFzaGlyaHVzc2FpbiIsImEiOiJjazgxaDZzODEwcnVzM2tsbmsxZXgzZW1lIn0.yNbZXvkCJc77xIg6EHHfUw"},t,{onViewportChange:this._setViewport,onHover:this._onHover}),r.a.createElement(v.b,{type:"geojson",data:a},r.a.createElement(v.a,g)),this._renderTooltip()),r.a.createElement(E,null)):r.a.createElement("div",null,"Fetching records, this may take upto 45 seconds for the first time...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2b03fe1e.chunk.js.map