(this["webpackJsonpspace-dash"]=this["webpackJsonpspace-dash"]||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var n,a,s=c(1),r=c(0),i=c.n(r),l=c(22),o=c.n(l),u=(c(78),c(18)),d=c(12),j=c(17),h=c(4),b=c(117),m=c(112),O="UPCOMING",x="PAST",f="Misson Gallery",p="Crew",v="Payloads",g="Rocket",N="Cores",y="Launchpad",w="Landingzone",_="Ships",k="Launches",L="Cores",S="Ships",C="Crew",T="Launchpads",A="core",q="ship",M="upcoming",B="past",P="crew",I="launchpad",F={version:{spaceXApi:"v4"},api:{spaceXApi:"https://api.spacexdata.com"},mocks:{spaceXApi:!1}},$=function(e,t){return"/x/mocks/".concat(e,"/").concat(F.version[e].toUpperCase(),"_").concat(t,".json")},J="".concat(F.api.spaceXApi,"/").concat(F.version.spaceXApi),E={method:"POST",headers:{"Content-Type":"application/json"}},X={query:{},options:{populate:["payloads","rocket","landpad","launchpad","ships","crew"],sort:{flight_number:"desc"},limit:30}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X.options.limit,c=Object(h.a)(Object(h.a)({},X),{},{query:Object(h.a)(Object(h.a)({},X.query),{},{upcoming:!1}),options:Object(h.a)(Object(h.a)({},X.options),{},{limit:t,page:e})}),n=function(){return fetch("".concat(J,"/launches/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(c)})).then((function(e){return e.json()}))};return D(n,"launches_past")},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X.options.limit,c=Object(h.a)(Object(h.a)({},X),{},{query:Object(h.a)(Object(h.a)({},X.query),{},{upcoming:!0}),options:Object(h.a)(Object(h.a)({},X.options),{},{limit:t,sort:{flight_number:"asc"},page:e})}),n=function(){return fetch("".concat(J,"/launches/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(c)})).then((function(e){return e.json()}))};return D(n,"launches_upcoming")},R=function(e){return D((function(){return fetch("".concat(J,"/cores/").concat(e)).then((function(e){return e.json()}))}),"core_one")},D=function(e,t){return function(e,t,c){return F.mocks[t]?fetch($(t,c)).then((function(e){return e.json()})):e()}(e,"spaceXApi",t)},U=c(38),V=c.n(U),G=function(e){var t=e.date_utc;switch(e.date_precision){case"hour":return V()(t).local().format("lll");case"day":return V()(t).local().format("ll");case"month":return V()(t).local().format("MMM, YYYY");case"quarter":var c=V()(t).local(),n=c.format("YYYY"),a=c.quarter();return"Q".concat(a," ").concat(n);case"half":var s=V()(t).local(),r=s.format("YYYY"),i=s.quarter();return"Q".concat(i,"-Q").concat(i+1," ").concat(r);case"year":break;default:return"..."}},Q=c(111),W=c(113),z=function(e){var t=e.icon,c=e.title;return Object(s.jsx)(i.a.Fragment,{children:Object(s.jsx)(W.a,{placement:"top",delay:{show:250,hide:400},overlay:function(e){return function(e,t){return Object(s.jsxs)(Q.a,Object(h.a)(Object(h.a)({id:"button-tooltip"},e),{},{children:[" ",t]}))}(e,c)},children:Object(s.jsx)("i",{id:"icon-tooltip",className:t})})})},H=function(e){return e.cores.filter((function(e){return e.landing_attempt&&null!==e.landing_success})).map((function(e,t){return e.landing_success?Object(s.jsx)(z,{icon:"bi bi-bullseye p-1",title:"Landing Success ".concat(t+1)},e.core):Object(s.jsx)(z,{icon:"bi bi-slash-circle p-1",title:"Landing Failure ".concat(t+1)},e.core)}))},Z=function(e){var t=e.fairings;return t&&t.recovery_attempt&&null!==t.recovered?t.recovered?Object(s.jsx)(z,{icon:"bi bi-life-preserver p-1",title:"Fairings Recovered"}):Object(s.jsx)(z,{icon:"bi bi-slash-circle p-1",title:"Fairings not Recovered"}):null},ee=function(e){return e.success?Object(s.jsx)(z,{icon:"bi bi-check-circle p-1",title:"Mission Success"}):Object(s.jsx)(z,{icon:"bi bi-slash-circle p-1",title:"Mission Failure"})},te=function(e){var t=e.launch.success,c=e.launch,n=c.cores,a=c.fairings,r=[Object(s.jsx)(ee,{success:t},"mission"),Object(s.jsx)(H,{cores:n},"landing"),Object(s.jsx)(Z,{fairings:a},"fairing")];return Object(s.jsx)(i.a.Fragment,{children:r})},ce=function(e){var t=e.launch,c=t.id,n=t.name,a=t.date_utc,r=t.date_precision,i=t.success,l=t.payloads,o=(t.details,l.map((function(e){return e.customers.join(", ")})).flat()),u=Object(d.f)().push;return Object(s.jsxs)("li",{className:"list-group-item launch-card-row",onClick:function(t){return function(e,t,c,n){"icon-tooltip"!==e.target.id&&t("/launch/".concat(c),{launch:n})}(t,u,c,e.launch)},children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("h6",{className:"col",children:n}),null!==i&&Object(s.jsx)("div",{className:"col text-right",children:Object(s.jsx)(te,{launch:e.launch})})]}),Object(s.jsxs)("div",{className:"row",children:[o.length>0&&Object(s.jsx)("small",{className:"col text-muted",children:o}),Object(s.jsx)("small",{className:"col mr-auto text-right text-muted",children:"".concat(G({date_utc:a,date_precision:r}))})]})]})},ne=function(e){switch(e){case x:return"Previous Launches";case O:return"Upcoming Launches";default:return"Ooops something has gone wrong"}},ae=function(e,t,c){if(!t.hasLoaded&&!t.isLoading)return c(Object(h.a)(Object(h.a)({},t),{},{isLoading:!0})),function(e){switch(e){case x:return Y(1,7);case O:return K(1,7);default:return Promise.resolve([])}}(e).then((function(e){c(Object(h.a)(Object(h.a)({},t),{},{isLoading:!1,hasLoaded:!0,data:e}))})).catch((function(e){console.error(e),c(Object(h.a)(Object(h.a)({},t),{},{isLoading:!1,hasLoaded:!0,error:e}))}))},se=function(e){var t=Object(d.f)(),c=e.type,n=Object(r.useState)({data:{totalDocs:0,docs:[]},hasLoaded:!1,isLoading:!1,error:null}),a=Object(j.a)(n,2),i=a[0],l=a[1];return Object(r.useEffect)((function(){return ae(c,i,l)})),Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)(b.a.Title,{children:ne(c)}),Object(s.jsx)("ul",{className:"list-group",children:i.data.docs.map((function(e){return Object(s.jsx)(ce,{launch:e},e.id)}))}),i.data.totalDocs>7&&Object(s.jsxs)(m.a,{onClick:function(){return t.push(function(e){switch(e){case x:return"/launches/past";case O:return"/launches/upcoming";default:return"/"}}(c))},className:"ml-1 pl-0 mt-2",variant:"link",children:["View ",i.data.totalDocs-7," more"]})]})})},re=c(116),ie=function(e){var t=Object(d.f)(),c=t?function(){return t.push("/")}:null;return Object(s.jsxs)("div",{className:"app-main-layout",children:[Object(s.jsxs)(re.a,{sticky:"top",bg:"dark",variant:"dark",onClick:c,children:[Object(s.jsx)(re.a.Brand,{children:"spacexdash/x"}),Object(s.jsx)(re.a.Toggle,{"aria-controls":"basic-navbar-nav"})]}),Object(s.jsx)("div",{className:"container-fluid bg-light",children:e.children})]})},le=c(15),oe=c(35),ue=c(114),de=function(){return!0},je=function(e,t,c){return e().then((function(e){c(e),t(!1)})).catch((function(){return t(!1)}))},he=[k,L,T,C,S],be=(n={},Object(le.a)(n,k,"Search for a launch e.g. STP-2"),Object(le.a)(n,L,"Search for a launch by cores e.g. B1040"),Object(le.a)(n,T,"Search for a launch by pad e.g. SLC"),Object(le.a)(n,S,"Search for a launch by ships e.g. JRTI"),Object(le.a)(n,C,"Search for a launch by crew e.g. NASA"),n),me=function(e,t,c,n){switch(t){case k:return je((function(){return function(e){var t=Object(h.a)(Object(h.a)({},X),{},{query:Object(h.a)(Object(h.a)({},X.query),{},{$text:{$search:e}})});return D((function(){return fetch("".concat(J,"/launches/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(t)})).then((function(e){return e.json()}))}),"launches_search")}(e).then((function(e){return e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{type:k})}))}))}),c,n);case L:return je((function(){return function(e){var t={query:{serial:{$regex:e,$options:"si"}}};return D((function(){return fetch("".concat(J,"/cores/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(t)})).then((function(e){return e.json()}))}),"core_search")}(e).then((function(e){return e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{name:e.serial,type:L})}))}))}),c,n);case C:return je((function(){return function(e){var t={$regex:e,$options:"si"},c={query:{$or:[{name:t},{agency:t}]}};return D((function(){return fetch("".concat(J,"/crew/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(c)})).then((function(e){return e.json()}))}),"crew_search")}(e).then((function(e){return e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{type:C})}))}))}),c,n);case S:return je((function(){return function(e){var t={$regex:e,$options:"si"},c={query:{$or:[{name:t},{legacy_id:t},{model:t},{type:t},{home_port:t}]}};return D((function(){return fetch("".concat(J,"/ships/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(c)})).then((function(e){return e.json()}))}),"ship_search")}(e).then((function(e){return e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{type:S})}))}))}),c,n);case T:return je((function(){return function(e){var t={$regex:e,$options:"si"},c={query:{$or:[{name:t},{full_name:t}]}};return D((function(){return fetch("".concat(J,"/launchpads/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(c)})).then((function(e){return e.json()}))}),"launchpad_search")}(e).then((function(e){return e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{type:T})}))}))}),c,n);default:return console.log("Not implemented ",t),null}},Oe=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),i=Object(j.a)(a,2),l=i[0],o=i[1],u=Object(r.useState)(k),h=Object(j.a)(u,2),m=h[0],O=h[1],x=Object(d.f)();return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)(oe.a,{id:"search",filterBy:de,onSearch:function(e){return me(e,m,n,o)},minLength:0,labelKey:"name",options:l,placeholder:be[m],isLoading:c,renderMenuItemChildren:function(e,t){return Object(s.jsx)("span",{children:e.name})},onChange:function(e){if(e.length>0){var t=e[0];!function(e,t){switch(t.type){case k:e.push("/launch/".concat(t.id),{launch:t});break;case L:e.push("/core/".concat(t.id,"/launches"),{core:t});break;case C:e.push("/crew/".concat(t.id,"/launches"),{crew:t});break;case S:e.push("/ship/".concat(t.id,"/launches"),{ship:t});break;case T:e.push("/launchpad/".concat(t.id,"/launches"),{launchpad:t})}}(x,t)}}}),Object(s.jsx)("div",{className:"row pt-3",children:Object(s.jsxs)("div",{className:"col",children:["Search By: ",he.map((function(e){return Object(s.jsx)(ue.a.Check,{inline:!0,label:e,value:e,type:"radio",onChange:function(e){return O(e.target.value)},checked:m===e},e)}))]})})]})})},xe="col-sm-12 col-md-6 mt-2 mb-2 p-2",fe=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"text-muted",children:Object(s.jsxs)("small",{children:["We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners.","All data gathered here was provided by the community via\xa0",Object(s.jsx)("a",{href:"https://github.com/r-spacex/SpaceX-API",target:"_new",children:"r-spacex/SpaceX-API"}),". If you think there's inaccurate data or if you have information for an upcoming launch you can raise an issue\xa0",Object(s.jsx)("a",{href:"https://github.com/r-spacex/SpaceX-API/issues",target:"_new",children:"here"}),". For bugs and feature requests you can submit requests ",Object(s.jsx)("a",{href:"https://github.com/spacexdash/x/issues",target:"_new",children:"here"})]})})})},pe=c(33),ve=function(e,t,c,n,a){switch(console.log("Loading via pre-reqs",n),t){case A:return R(e).then((function(e){return ge(e.launches,c,n,a)}));case q:return function(e){return D((function(){return fetch("".concat(J,"/ships/").concat(e)).then((function(e){return e.json()}))}),"ship_one")}(e).then((function(e){return ge(e.launches,c,n,a)}));case P:return function(e){return D((function(){return fetch("".concat(J,"/crew/").concat(e)).then((function(e){return e.json()}))}),"crew_one")}(e).then((function(e){return ge(e.launches,c,n,a)}));case I:return function(e){return D((function(){return fetch("".concat(J,"/launchpads/").concat(e)).then((function(e){return e.json()}))}),"launchpad_one")}(e).then((function(e){return ge(e.launches,c,n,a)}));case M:return K(a).then((function(e){return c({isLoading:!1,hasLoaded:!0,data:Object(h.a)(Object(h.a)(Object(h.a)({},n.data),e),{},{docs:[].concat(Object(pe.a)(n.data.docs),Object(pe.a)(e.docs))})})}));case B:return Y(a).then((function(e){return c({isLoading:!1,hasLoaded:!0,data:Object(h.a)(Object(h.a)(Object(h.a)({},n.data),e),{},{docs:[].concat(Object(pe.a)(n.data.docs),Object(pe.a)(e.docs))})})}))}},ge=function(e,t,c,n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=Object(h.a)(Object(h.a)({},X),{},{query:Object(h.a)(Object(h.a)({},X.query),{},{_id:{$in:e}}),options:Object(h.a)(Object(h.a)({},X.options),{},{page:t})});return D((function(){return fetch("".concat(J,"/launches/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(c)})).then((function(e){return e.json()}))}),"launches_past")}(e,n).then((function(e){return t({isLoading:!1,hasLoaded:!0,error:null,data:Object(h.a)(Object(h.a)(Object(h.a)({},c.data),e),{},{docs:[].concat(Object(pe.a)(c.data.docs),Object(pe.a)(e.docs))})})}))},Ne=function(){var e=Object(d.g)(),t=Object(d.h)().id,c=Object(r.useState)({data:{docs:[],page:0,totalPages:2},hasLoaded:!1,isLoading:!1,error:null}),n=Object(j.a)(c,2),a=n[0],i=n[1],l=function(e){return e.pathname.includes(A)?A:e.pathname.includes(q)?q:e.pathname.includes(M)?M:e.pathname.includes(B)?B:e.pathname.includes(P)?P:e.pathname.includes(I)?I:void 0}(e);Object(r.useEffect)((function(){return function(e,t,c,n,a){if(!n.hasLoaded&&!n.isLoading){var s=c.state&&"launches"in c.state[t],r=n.data.page+1;return a(Object(h.a)(Object(h.a)({},n),{},{isLoading:!0})),s?ge(c.state[t].launches,a,n,r).catch((function(e){return a(Object(h.a)(Object(h.a)({},n),{},{isLoading:!1,hasLoaded:!0,error:e}))})):ve(e,t,a,n,r).catch((function(e){return a(Object(h.a)(Object(h.a)({},n),{},{isLoading:!1,hasLoaded:!0,error:e}))}))}}(t,l,e,a,i)}));var o=!a.isLoading&&a.data.page<a.data.totalPages;return Object(s.jsx)(ie,{children:Object(s.jsx)(b.a,{className:"mt-3",children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)(b.a.Title,{children:"Launches"}),a.data.docs.map((function(e){return Object(s.jsx)(ce,{launch:e},e.id)})),Object(s.jsxs)("div",{className:"mt-3",children:[o&&Object(s.jsx)(m.a,{onClick:function(){i(Object(h.a)(Object(h.a)({},a),{},{hasLoaded:!1}))},children:"More"}),a.isLoading&&Object(s.jsx)(oe.b,{})]})]})})})},ye=c(115),we=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},_e={webcast:"bi bi-youtube",presskit:"bi bi-info-circle-fill",article:"bi bi-newspaper",wikipedia:"bi bi-book-half",reddit:"bi bi-chat-right-quote-fill"},ke=function(e){var t=e.links,c=Object.keys(t).filter((function(e){return e in _e&&null!==t[e]})).sort().map((function(e){return Object(s.jsx)(ye.a.Item,{as:"li",onClick:function(){return window.open(function(e,t){return"reddit"==e?"launch"in t[e]?t[e].launch:"https://reddit.com/r/spacex":t[e]}(e,t))},children:Object(s.jsx)(z,{title:we(e),icon:"".concat(_e[e]," p-2")})},e)}));return Object(s.jsx)(ye.a,{as:"ul",children:c})},Le=[g,y,p,N,v,w,_,f],Se=(a={},Object(le.a)(a,f,(function(e){return"links"in e&&"flickr"in e.links&&e.links.flickr.original.length>0})),Object(le.a)(a,p,(function(e){return"crew"in e&&Array.isArray(e.crew)&&e.crew.length>0})),Object(le.a)(a,g,(function(e){return"rocket"in e&&"object"===typeof e.rocket})),Object(le.a)(a,N,(function(e){return"cores"in e&&typeof Array.isArray(e.cores)&&e.cores.length>0&&null!==e.cores[0].core})),Object(le.a)(a,v,(function(e){return"payloads"in e&&Array.isArray(e.payloads)&&e.payloads.length>0})),Object(le.a)(a,y,(function(e){return"launchpad"in e})),Object(le.a)(a,w,(function(e){return!1})),Object(le.a)(a,_,(function(e){return"ships"in e&&Array.isArray(e.ships)&&e.ships.length>0})),a),Ce=function(e){var t=e.setActiveContext,c=e.activeContext,n=e.launch,a=Le.filter((function(e){return Se[e](n)})).map((function(e){var n=e===c?Object(s.jsx)("u",{children:e}):e;return Object(s.jsx)(ye.a.Item,{as:"li",className:"",children:Object(s.jsx)(ye.a.Link,{onClick:function(){return t(e)},children:n})},e)}));return Object(s.jsx)(ye.a,{as:"ul",children:a})},Te=function(e){var t=e.enhancedCore,c=(e.serial,Object(d.f)()),n={core:t};return Object(s.jsx)("small",{children:Object(s.jsx)(m.a,{variant:"link",className:"ml-0 pl-0",onClick:function(){return c.push("/core/".concat(t.id,"/launches"),n)},children:Object(s.jsx)("small",{children:"More Launches from This Core"})})})},Ae=function(e,t){var c=1===e.data[t]?"once":"".concat(e.data[t]," times"),n="This first stage core has";if("asds_landings"===t){var a="on the automomous spaceport droneship";return 0===e.data[t]?"This first stage has never landed on the ".concat(a):"".concat(n," landed ").concat(c," ").concat(a)}var s="under a return to launch site configuration";return 0===e.data[t]?"This first stage has never landed ".concat(s):"".concat(n," landed ").concat(c," ").concat(s)},qe=function(e){return 1===e.flight?"This launch was the first time this core was used":e.flight>1?"This launch was the ".concat(function(e){var t=e%10,c=e%100;return 1==t&&11!=c?e+"st":2==t&&12!=c?e+"nd":3==t&&13!=c?e+"rd":e+"th"}(e.flight)," flight for this core"):null},Me=function(e){var t=e.core,c=e.index,n=t.core,a=Object(r.useState)({data:{},hasLoaded:!1,error:null}),i=Object(j.a)(a,2),l=i[0],o=i[1];Object(r.useEffect)((function(){return function(e){var t=e.id,c=e.enhancedCore,n=e.setEnhancedCore;return c.hasLoaded?null:R(t).then((function(e){return n({hasLoaded:!0,data:e,error:null})})).catch((function(e){return n({data:{},hasLoaded:!0,error:e})}))}({id:n,enhancedCore:l,setEnhancedCore:o})}));var u=l.hasLoaded&&!l.error,d=u?Object(s.jsxs)("small",{className:"text-muted",children:[" This core uses the serial number ",Object(s.jsx)("strong",{children:l.data.serial})]}):Object(s.jsx)(oe.b,{}),h=u&&l.data.reuse_count>0?Object(s.jsx)(Te,{enhancedCore:l.data}):null;return console.log("Enhanced Core",l.data),Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-6 col-md-6",children:["Core ",c+1]}),Object(s.jsx)("div",{className:"col-6 text-right",children:Object(s.jsx)(H,{cores:[t]})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("small",{className:"text-muted",children:["Landing Type: ",t.landing_attempt&&null!==t.landing_attempt&&t.landing_type]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("small",{className:"text-muted",children:qe(t)})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:d})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:u&&Object(s.jsxs)("small",{className:"text-muted",children:["This core is using block ",l.data.block," "]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:u&&Object(s.jsx)("small",{className:"text-muted",children:Ae(l,"rtls_landings")})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:u&&Object(s.jsx)("small",{className:"text-muted",children:Ae(l,"asds_landings")})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:u&&Object(s.jsxs)("small",{className:"text-muted",children:["The latest status on this booster: ",Object(s.jsx)("strong",{children:l.data.status})," "]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:h})})]})})},Be="col-sm-12 col-md-6",Pe=function(e){var t=e.engines;return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col",children:[we(t.type)," ",t.version," Engine"]}),Object(s.jsxs)("div",{className:"col text-right",children:[t.thrust_to_weight," TTW"]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Be),children:Object(s.jsxs)("small",{className:"text-muted",children:[we(t.propellant_1)," Propellant"]})}),Object(s.jsx)("div",{className:"".concat(Be," text-sm-left text-md-right"),children:Object(s.jsxs)("small",{className:"text-muted",children:[we(t.propellant_2)," Propellant"]})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Be),children:t.isp&&null!==t.isp.sea_level&&Object(s.jsxs)("small",{className:"text-muted",children:[t.isp.sea_level," ISP Sea Level"]})}),Object(s.jsx)("div",{className:"".concat(Be," text-sm-left text-md-right"),children:t.isp&&null!==t.isp.vacuum&&Object(s.jsxs)("small",{className:"text-muted",children:[t.isp.vacuum," ISP Vacuum"]})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Be),children:t.thrust_sea_level&&null!==t.thrust_sea_level.kN&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.kN," Kn Sea Level"]})}),Object(s.jsx)("div",{className:"".concat(Be," text-sm-left text-md-right"),children:t.thrust_sea_level&&null!==t.thrust_sea_level.lbf&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.lbf," lbf Sea Level"]})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Be),children:t.thrust_vacuum&&null!==t.thrust_vacuum.kN&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.kN," Kn Vacuum"]})}),Object(s.jsx)("div",{className:"".concat(Be," text-sm-left text-md-right"),children:t.thrust_vacuum&&null!==t.thrust_vacuum.lbf&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.lbf," lbf Vacuum"]})})]})]})})},Ie="col-sm-12 col-md-6",Fe=function(e){var t=e.stage,c=e.stageName,n=t.engines>1?"engines":"engine";return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:c}),Object(s.jsxs)("div",{className:"col text-right",children:[t.engines," ",n]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Ie),children:t.thrust_sea_level&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.kN," Kn Thrust at Sea Level"]})}),Object(s.jsx)("div",{className:"".concat(Ie," text-sm-left text-md-right"),children:t.thrust_sea_level&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.lbf," lbf Sea Level"]})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Ie),children:t.thrust_vacuum&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.kN," Kn Thrust in a Vacuum"]})}),Object(s.jsx)("div",{className:"".concat(Ie," text-sm-left text-md-right"),children:t.thrust_vacuum&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.lbf," lbf Vacuum"]})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Ie),children:t.thrust&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust.kN," Kn Thrust"]})}),Object(s.jsx)("div",{className:"".concat(Ie," text-sm-left text-md-right"),children:t.thrust&&Object(s.jsxs)("small",{className:"text-muted",children:[t.thrust.lbf," lbf"]})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"".concat(Ie),children:t.burn_time_sec&&Object(s.jsxs)("small",{className:"text-muted",children:[t.burn_time_sec," Burn Time (s)"]})}),Object(s.jsx)("div",{className:"".concat(Ie," text-sm-left text-md-right"),children:t.fuel_amount_tons&&Object(s.jsxs)("small",{className:"text-muted",children:[t.fuel_amount_tons," Tons of Fuel"]})})]})]})})},$e=function(e){var t=e.rocket;return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:t.name})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("small",{className:"text-muted",children:t.description})})})]})})},Je=function(e){var t=e.weights;return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:"Capacity"})}),t.map((function(e){return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(s.jsx)("small",{className:"text-muted",children:e.name})}),Object(s.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:Object(s.jsxs)("small",{className:"text-muted",children:[e.kg," KG"]})})]},e.name)}))]})})},Ee=function(e){var t=e.rocket;return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:"Geometry"})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(s.jsxs)("small",{className:"text-muted",children:["Height ",t.height.meters," M"]})}),Object(s.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:Object(s.jsxs)("small",{className:"text-muted",children:["Diameter ",t.diameter.meters," M"]})})]})]})})},Xe=function(e){var t=e.rocket;return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)($e,{rocket:t}),Object(s.jsx)(Fe,{stage:t.first_stage,stageName:"First Stage"}),Object(s.jsx)(Fe,{stage:t.second_stage,stageName:"Second Stage"}),Object(s.jsx)(Pe,{engines:t.engines}),Object(s.jsx)(Je,{weights:t.payload_weights}),Object(s.jsx)(Ee,{rocket:t})]})},Ye=function(e){var t=e.ship,c=Object(d.f)(),n={ship:t};return Object(s.jsx)("small",{children:Object(s.jsx)(m.a,{variant:"link",className:"ml-0 pl-0",onClick:function(){return c.push("/ship/".concat(t.id,"/launches"),n)},children:Object(s.jsx)("small",{children:"Other Launches That Used This Ship"})})})},Ke=function(e){var t=e.ship;return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-12 col-md-6",children:t.name}),Object(s.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:t.type})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("small",{children:["Mission Roles: ",t.roles.join(", ")]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("small",{children:["Home: ",t.home_port]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)(Ye,{ship:t})})})]})})},Re=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:null!==e[t]&&Object(s.jsxs)("small",{className:"text-muted",children:[c,": ",e[t]," ",n]})})})},De=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:null!==e[t]&&e[t].length>0&&Object(s.jsxs)("small",{className:"text-muted",children:[c,": ",e[t].join(", ")," ",n]})})})},Ue=function(e){var t=e.payload;return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:t.name}),Object(s.jsx)("div",{className:"col text-right",children:null!==t.type&&"".concat(t.type)})]}),De(t,"customers","Customers"),De(t,"manufacturers","Manufacturers"),Re(t,"lifespan_years","Lifespan","years"),Re(t,"reference_system","Reference System"),Re(t,"regime","Regime"),Re(t,"orbit","Orbit"),Re(t,"mass_kg","Mass","KG"),Re(t,"apoapsis_km","Apoapsis","KM"),Re(t,"arg_of_pericenter","Arg. Pericenter"),Re(t,"semi_major_axis_km","Semi Major Axis","KM"),Re(t,"periapsis_km","Periapsis","KM"),Re(t,"period_min","Period Min"),Re(t,"raan","RAAN"),Re(t,"eccentricity","Eccentricity"),Re(t,"inclination_deg","Inclination","Degrees"),Re(t,"mean_anomaly","Avg. Anomaly"),Re(t,"mean_motion","Avg. Motion"),De(t,"norad_ids","Norad IDs")]})})},Ve=function(e){var t=function(e,t){switch(t){case f:case N:return e.links.flickr.original;case g:return e.rocket.flickr_images;case _:return e.ships.map((function(e){return e.image}));case v:return e.links.flickr.original;case p:return e.crew.map((function(e){return e.image}));default:return[]}}(e.launch,e.context);return 0===t.length?null:Object(s.jsx)(b.a,{style:{backgroundColor:"snow"},children:Object(s.jsx)("div",{className:"row m-1",children:t.map((function(e){return Object(s.jsx)("div",{className:"col-12 text-center p-1",children:Object(s.jsx)("img",{src:e,style:{height:"auto",width:"100%"}})},e)}))})})},Ge=function(e){var t=e.crew,c=Object(d.f)();return Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:t.name}),Object(s.jsx)("div",{className:"col text-right",children:t.agency})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("small",{className:"text-muted",children:["Crew status: ",Object(s.jsx)("strong",{children:t.status})]})})}),t.launches&&t.launches.length>1&&Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("small",{children:Object(s.jsx)(m.a,{variant:"link",className:"ml-0 pl-0",onClick:function(){return c.push("/crew/".concat(t.id,"/launches"),{crew:t})},children:Object(s.jsx)("small",{children:"More SpaceX Launches from This Crew Member"})})})})})]})})},Qe=function(e,t,c){return t.hasLoaded?null:function(e){var t={query:{_id:{$in:e}}};return D((function(){return fetch("".concat(J,"/rockets/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(t)})).then((function(e){return e.json()}))}),"rocket_search")}(e).then((function(e){return c({hasLoaded:!0,data:e,error:null})})).catch((function(e){return c({data:{},hasLoaded:!0,error:e})}))},We=function(e){var t=e.launchpad,c=Object(d.f)(),n=Object(r.useState)({data:{},hasLoaded:!1,error:null}),a=Object(j.a)(n,2),i=a[0],l=a[1],o=i.hasLoaded&&!i.error&&i.data.docs.length>0;return Object(r.useEffect)((function(){return Qe(t.rockets,i,l)})),Object(s.jsx)(b.a,{children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:t.name}),Object(s.jsx)("div",{className:"col text-right",children:t.region})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("small",{className:"text-muted",children:t.full_name})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("small",{className:"text-muted",children:Object(s.jsx)("p",{children:t.details})})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("small",{className:"text-muted",children:["Latitude: ",t.latitude]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("small",{className:"text-muted",children:["Longitude: ",t.longitude]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("small",{className:"text-muted",children:["Status: ",Object(s.jsx)("strong",{children:t.status})]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:o&&Object(s.jsxs)("small",{className:"text-muted",children:["This launchpad supports launches for ",Object(s.jsx)("strong",{children:i.data.docs.map((function(e){return e.name})).join(", ")})]})})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("small",{children:Object(s.jsx)(m.a,{variant:"link",className:"ml-0 pl-0",onClick:function(){return c.push("/launchpad/".concat(t.id,"/launches"),{launchpad:t})},children:Object(s.jsx)("small",{children:"More Launches from This Pad"})})})})})]})})},ze=function(e){var t=e.fetchedLaunch,c=e.setFetchedLaunch,n=e.launchId;if(!t.loaded)return console.log("Using the network to load..."),function(e){var t=Object(h.a)(Object(h.a)({},X),{},{query:Object(h.a)(Object(h.a)({},X.query),{},{_id:e})});return D((function(){return fetch("".concat(J,"/launches/query"),Object(h.a)(Object(h.a)({},E),{},{body:JSON.stringify(t)})).then((function(e){return e.json()}))}),"launches_one").then((function(e){return e.docs[0]}))}(n).then((function(e){c({loaded:!0,data:e,error:null})})).catch((function(e){console.error(e),c({loaded:!1,error:e,data:{}})}))},He=function(e){return e&&e.state&&e.state.launch},Ze=function(e){return e.launch.cores.map((function(e,t){return Object(s.jsx)(Me,{core:e,index:t},e.core)}))},et=function(e){var t=e.launch;return Object(s.jsx)(Xe,{rocket:t.rocket})},tt=function(e){return e.launch.ships.map((function(e){return Object(s.jsx)(Ke,{ship:e},e.id)}))},ct=function(e){return e.launch.payloads.map((function(e){return Object(s.jsx)(Ue,{payload:e},e.id)}))},nt=function(e){return e.launch.crew.map((function(e){return Object(s.jsx)(Ge,{crew:e},e.id)}))},at=function(e){var t=e.launch;return Object(s.jsx)(We,{launchpad:t.launchpad})},st=function(e,t){switch(e){case f:return null;case N:return Object(s.jsx)(Ze,{launch:t});case g:return Object(s.jsx)(et,{launch:t});case _:return Object(s.jsx)(tt,{launch:t});case v:return Object(s.jsx)(ct,{launch:t});case p:return Object(s.jsx)(nt,{launch:t});case y:return Object(s.jsx)(at,{launch:t});default:return Object(s.jsx)("span",{children:"This context item is not implemented"})}},rt=function(){var e=Object(d.h)().launchId,t=Object(d.g)(),c=Object(r.useState)({loaded:He(t),error:null,data:{}}),n=Object(j.a)(c,2),a=n[0],i=n[1],l=Object(r.useState)(g),o=Object(j.a)(l,2),u=o[0],h=o[1],m=He(t)?t.state.launch:a.data,O=a.loaded&&!a.error,x=null!==m.details?m.details:Object(s.jsx)("span",{className:"text-muted",children:"We do not have enough details to provide more mission details right now. Check back later for more information."});return Object(r.useEffect)((function(){return ze({fetchedLaunch:a,setFetchedLaunch:i,launchId:e})})),console.log("Active launch",m),Object(s.jsxs)(ie,{children:[Object(s.jsx)(b.a,{className:"mt-3",children:Object(s.jsxs)(b.a.Body,{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 d-md-none text-center",children:O&&null!==m.links.patch.small&&Object(s.jsx)("img",{style:{height:"120px"},src:m.links.patch.small})}),Object(s.jsxs)("div",{className:"col-sm-12 col-md-9",children:[Object(s.jsxs)("div",{className:"row",children:[O&&Object(s.jsx)(b.a.Title,{className:"col-auto",children:m.name}),O&&!m.upcoming&&Object(s.jsx)("div",{className:"col-auto ml-auto text-left",children:Object(s.jsx)(te,{launch:m})})]}),Object(s.jsx)("div",{className:"row",children:O&&Object(s.jsx)("span",{className:" col",children:x})})]}),Object(s.jsx)("div",{className:"col-md-3 d-none d-md-block text-right",children:O&&null!==m.links.patch.small&&Object(s.jsx)("img",{style:{height:"150px"},src:m.links.patch.small})})]}),Object(s.jsx)("div",{className:"row pt-2 ",children:Object(s.jsx)("div",{className:"col",children:O&&Object(s.jsx)(ke,{links:m.links})})})]})}),Object(s.jsx)(b.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a.Body,{children:O&&Object(s.jsx)(Ce,{launch:m,activeContext:u,setActiveContext:h})})}),O&&st(u,m),O&&Object(s.jsx)(Ve,{launch:m,context:u})]})},it=Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/",component:function(e){return Object(s.jsxs)(ie,{children:[Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(Oe,{})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:xe,children:Object(s.jsx)(se,{type:O})}),Object(s.jsx)("div",{className:xe,children:Object(s.jsx)(se,{type:x})})]}),Object(s.jsx)(fe,{})]})}}),Object(s.jsx)(d.a,{exact:!0,path:"/launch/:launchId",component:rt}),Object(s.jsx)(d.a,{exact:!0,path:"/launch/:launchId",component:rt}),Object(s.jsx)(d.a,{exact:!0,path:"/core/:id/launches",component:Ne}),Object(s.jsx)(d.a,{exact:!0,path:"/ship/:id/launches",component:Ne}),Object(s.jsx)(d.a,{exact:!0,path:"/crew/:id/launches",component:Ne}),Object(s.jsx)(d.a,{exact:!0,path:"/launchpad/:id/launches",component:Ne}),Object(s.jsx)(d.a,{exact:!0,path:"/launches/upcoming",component:Ne}),Object(s.jsx)(d.a,{exact:!0,path:"/launches/past",component:Ne})]});var lt=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u.a,{children:it})})},ot=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(s.jsx)(lt,{}),document.getElementById("root")),ot()},78:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.21dd5172.chunk.js.map