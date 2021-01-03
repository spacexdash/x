(this["webpackJsonpspace-dash"]=this["webpackJsonpspace-dash"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var s,a=c(1),n=c(0),r=c.n(n),l=c(20),i=c.n(l),o=(c(74),c(28)),j=c(12),d=c(21),u=c(113),h=c(109),m="UPCOMING",b="PAST",x="Crew",O="Payloads",f="Rocket",v="Cores",p="Launchpad",N="Launchpad",g="Ships",y="Launches",_=c(10),w={version:{spaceXApi:"v4"},api:{spaceXApi:"https://api.spacexdata.com"},mocks:{spaceXApi:!1}},k=function(e,t){return"/mocks/".concat(e,"/").concat(w.version[e].toUpperCase(),"_").concat(t,".json")},S="".concat(w.api.spaceXApi,"/").concat(w.version.spaceXApi),A={method:"POST",headers:{"Content-Type":"application/json"}},L={query:{},options:{populate:["payloads","rocket","landpad","ships"],sort:{flight_number:"desc"},limit:7}},C=function(e,t){return function(e,t,c){return w.mocks[t]?fetch(k(t,c)).then((function(e){return e.json()})):e()}(e,"spaceXApi",t)},M=c(36),B=c.n(M),T=function(e){var t=e.date_utc;switch(e.date_precision){case"hour":return B()(t).local().format("lll");case"day":return B()(t).local().format("ll");case"month":return B()(t).local().format("MMM, YYYY");case"quarter":var c=B()(t).local(),s=c.format("YYYY"),a=c.quarter();return"Q".concat(a," ").concat(s);case"half":var n=B()(t).local(),r=n.format("YYYY"),l=n.quarter();return"Q".concat(l,"-Q").concat(l+1," ").concat(r);case"year":break;default:return"..."}},q=c(108),I=c(110),F=function(e){var t=e.icon,c=e.title;return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)(I.a,{placement:"top",delay:{show:250,hide:400},overlay:function(e){return function(e,t){return Object(a.jsxs)(q.a,Object(_.a)(Object(_.a)({id:"button-tooltip"},e),{},{children:[" ",t]}))}(e,c)},children:Object(a.jsx)("i",{id:"icon-tooltip",className:t})})})},P=function(e){return e.cores.filter((function(e){return e.landing_attempt&&null!==e.landing_success})).map((function(e,t){return e.landing_success?Object(a.jsx)(F,{icon:"bi bi-bullseye p-1",title:"Landing Success ".concat(t+1)},e.core):Object(a.jsx)(F,{icon:"bi bi-slash-circle p-1",title:"Landing Failure ".concat(t+1)},e.core)}))},Y=function(e){var t=e.fairings;return t&&t.recovery_attempt&&null!==t.recovered?t.recovered?Object(a.jsx)(F,{icon:"bi bi-life-preserver p-1",title:"Fairings Recovered"}):Object(a.jsx)(F,{icon:"bi bi-slash-circle p-1",title:"Fairings not Recovered"}):null},K=function(e){return e.success?Object(a.jsx)(F,{icon:"bi bi-check-circle p-1",title:"Mission Success"}):Object(a.jsx)(F,{icon:"bi bi-slash-circle p-1",title:"Mission Failure"})},X=function(e){var t=e.launch.success,c=e.launch,s=c.cores,n=c.fairings,l=[Object(a.jsx)(K,{success:t},"mission"),Object(a.jsx)(P,{cores:s},"landing"),Object(a.jsx)(Y,{fairings:n},"fairing")];return Object(a.jsx)(r.a.Fragment,{children:l})},D=function(e){var t=e.launch,c=t.id,s=t.name,n=t.date_utc,r=t.date_precision,l=t.success,i=t.payloads.map((function(e){return e.customers.join(", ")})).flat(),o=Object(j.f)().push;return Object(a.jsxs)("li",{className:"list-group-item",onClick:function(t){return function(e,t,c,s){"icon-tooltip"!==e.target.id&&t("/launch/".concat(c),{launch:s})}(t,o,c,e.launch)},children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h6",{className:"col",children:s}),null!==l&&Object(a.jsx)("div",{className:"col text-right",children:Object(a.jsx)(X,{launch:e.launch})})]}),Object(a.jsxs)("div",{className:"row",children:[i.length>0&&Object(a.jsx)("small",{className:"col text-muted",children:i}),Object(a.jsx)("small",{className:"col mr-auto text-right text-muted",children:"".concat(T({date_utc:n,date_precision:r}))})]})]})},R=function(e){switch(e){case b:return"Previous Launches";case m:return"Upcoming Launches";default:return"Ooops something has gone wrong"}},E=function(e){switch(e){case b:return function(){var e=Object(_.a)(Object(_.a)({},L),{},{query:Object(_.a)(Object(_.a)({},L.query),{},{upcoming:!1})});return C((function(){return fetch("".concat(S,"/launches/query"),Object(_.a)(Object(_.a)({},A),{},{body:JSON.stringify(e)})).then((function(e){return e.json()}))}),"launches_past")}();case m:return function(){var e=Object(_.a)(Object(_.a)({},L),{},{query:Object(_.a)(Object(_.a)({},L.query),{},{upcoming:!0}),options:Object(_.a)(Object(_.a)({},L.options),{},{sort:{flight_number:"asc"}})});return C((function(){return fetch("".concat(S,"/launches/query"),Object(_.a)(Object(_.a)({},A),{},{body:JSON.stringify(e)})).then((function(e){return e.json()}))}),"launches_upcoming")}();default:return Promise.resolve([])}},J=function(e){var t=e.type,c=Object(n.useState)(!1),s=Object(d.a)(c,2),r=s[0],l=s[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),j=o[0],m=o[1];return Object(n.useEffect)((function(){return function(e){var t=e.type,c=e.hasLoaded,s=e.setHasLoaded,a=e.setLaunchData;if(!c)return E(t).then((function(e){a(e.docs),s(!0)})).catch((function(e){console.error(e),s(!0)}))}({type:t,hasLoaded:r,setLaunchData:m,setHasLoaded:l})}),[r,t]),Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsx)(u.a.Title,{children:R(t)}),Object(a.jsx)("ul",{className:"list-group",children:j.slice(0,7).map((function(e){return Object(a.jsx)(D,{launch:e},e.id)}))}),j.length>7&&Object(a.jsxs)(h.a,{disabled:!0,className:"ml-1 pl-0 mt-2",variant:"link",children:["View ",j.length-7," more"]})]})})},V=c(112),U=function(e){var t=Object(j.f)(),c=t?function(){return t.push("/")}:null;return Object(a.jsxs)("div",{className:"app-main-layout",children:[Object(a.jsxs)(V.a,{sticky:"top",bg:"dark",variant:"dark",onClick:c,children:[Object(a.jsx)(V.a.Brand,{children:"spacexdash/x"}),Object(a.jsx)(V.a.Toggle,{"aria-controls":"basic-navbar-nav"})]}),Object(a.jsx)("div",{className:"container-fluid bg-light",children:e.children})]})},G=c(17),H=c(68),Q=function(){return!0},W=Object(G.a)({},y,"Search for a launch e.g. Crew"),$=function(e,t,c,s){switch(t){case y:return function(e,t,c){return e().then((function(e){c(e.docs),t(!1)})).catch((function(){return t(!1)}))}((function(){return function(e){var t=Object(_.a)(Object(_.a)({},L),{},{query:Object(_.a)(Object(_.a)({},L.query),{},{$text:{$search:e}})});return C((function(){return fetch("".concat(S,"/launches/query"),Object(_.a)(Object(_.a)({},A),{},{body:JSON.stringify(t)})).then((function(e){return e.json()}))}),"launches_search")}(e)}),c,s);default:return console.log("Not implemented ",t),null}},z=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),l=Object(d.a)(r,2),i=l[0],o=l[1],h=Object(n.useState)(y),m=Object(d.a)(h,2),b=m[0],x=(m[1],Object(j.f)());return Object(a.jsx)(u.a,{children:Object(a.jsx)(u.a.Body,{children:Object(a.jsx)(H.a,{id:"search",filterBy:Q,onSearch:function(e){return $(e,b,s,o)},minLength:3,labelKey:"name",options:i,placeholder:W[b],isLoading:c,renderMenuItemChildren:function(e,t){return Object(a.jsx)("span",{children:e.name})},onChange:function(e){e.length>0&&(console.log("wahahahahah"),x.push("/launch/".concat(e[0].id),{launch:e[0]}))}})})})},Z="col-sm-12 col-md-6 mt-2 mb-2 p-2",ee=function(e){return Object(a.jsxs)(U,{children:[Object(a.jsx)("div",{className:"row mt-3",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(z,{})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:Z,children:Object(a.jsx)(J,{type:m})}),Object(a.jsx)("div",{className:Z,children:Object(a.jsx)(J,{type:b})})]}),Object(a.jsx)("small",{children:"".concat("We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners."," ").concat("All data gathered here was provided by the community via r-spacex/SpaceX-API.")}),Object(a.jsx)("br",{}),Object(a.jsx)("small",{children:"".concat("More updates coming soon...")})]})},te=c(111),ce=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},se={webcast:"bi bi-youtube",presskit:"bi bi-info-circle-fill",article:"bi bi-newspaper",wikipedia:"bi bi-book-half",reddit:"bi bi-chat-right-quote-fill"},ae=function(e){var t=e.links,c=Object.keys(t).filter((function(e){return e in se&&null!==t[e]})).sort().map((function(e){return Object(a.jsx)(te.a.Item,{as:"li",onClick:function(){return window.open(function(e,t){return"reddit"==e?"launch"in t[e]?t[e].launch:"https://reddit.com/r/spacex":t[e]}(e,t))},children:Object(a.jsx)(F,{title:ce(e),icon:"".concat(se[e]," p-2")})},e)}));return Object(a.jsx)(te.a,{as:"ul",children:c})},ne=[v,f,x,O,p,N,g],re=(s={},Object(G.a)(s,x,(function(e){return"crew"in e&&Array.isArray(e.crew)&&e.crew.length>0})),Object(G.a)(s,f,(function(e){return"rocket"in e&&"object"===typeof e.rocket})),Object(G.a)(s,v,(function(e){return"cores"in e&&typeof Array.isArray(e.cores)&&e.cores.length>0})),Object(G.a)(s,O,(function(e){return"payloads"in e&&Array.isArray(e.payloads)&&e.payloads.length>0})),Object(G.a)(s,p,(function(e){return!1})),Object(G.a)(s,N,(function(e){return!1})),Object(G.a)(s,g,(function(e){return"ships"in e&&Array.isArray(e.ships)&&e.ships.length>0})),s),le=function(e){var t=e.setActiveContext,c=e.activeContext,s=e.launch,n=ne.filter((function(e){return re[e](s)})).map((function(e){var s=e===c?Object(a.jsx)("u",{children:e}):e;return Object(a.jsx)(te.a.Item,{as:"li",className:"",children:Object(a.jsx)(te.a.Link,{onClick:function(){return t(e)},children:s})},e)}));return Object(a.jsx)(te.a,{as:"ul",children:n})},ie=function(e){var t=e.core,c=e.index;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-12 col-md-6",children:["Booster ",c+1]}),Object(a.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:Object(a.jsx)(P,{cores:[t]})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("small",{className:"text-muted",children:t.landing_attempt&&null!==t.landing_attempt&&t.landing_type})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("small",{className:"text-muted",children:["Flights: ",t.flight]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("small",{className:"text-muted",children:["ID: ",t.core]})})})]})})},oe="col-sm-12 col-md-6",je=function(e){var t=e.engines;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col",children:[ce(t.type)," ",t.version," Engine"]}),Object(a.jsxs)("div",{className:"col text-right",children:[t.thrust_to_weight," TTW"]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(oe),children:Object(a.jsxs)("small",{className:"text-muted",children:[ce(t.propellant_1)," Propellant"]})}),Object(a.jsx)("div",{className:"".concat(oe," text-sm-left text-md-right"),children:Object(a.jsxs)("small",{className:"text-muted",children:[ce(t.propellant_2)," Propellant"]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(oe),children:t.isp&&null!==t.isp.sea_level&&Object(a.jsxs)("small",{className:"text-muted",children:[t.isp.sea_level," ISP Sea Level"]})}),Object(a.jsx)("div",{className:"".concat(oe," text-sm-left text-md-right"),children:t.isp&&null!==t.isp.vacuum&&Object(a.jsxs)("small",{className:"text-muted",children:[t.isp.vacuum," ISP Vacuum"]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(oe),children:t.thrust_sea_level&&null!==t.thrust_sea_level.kN&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.kN," Kn Sea Level"]})}),Object(a.jsx)("div",{className:"".concat(oe," text-sm-left text-md-right"),children:t.thrust_sea_level&&null!==t.thrust_sea_level.lbf&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.lbf," lbf Sea Level"]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(oe),children:t.thrust_vacuum&&null!==t.thrust_vacuum.kN&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.kN," Kn Vacuum"]})}),Object(a.jsx)("div",{className:"".concat(oe," text-sm-left text-md-right"),children:t.thrust_vacuum&&null!==t.thrust_vacuum.lbf&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.lbf," lbf Vacuum"]})})]})]})})},de="col-sm-12 col-md-6",ue=function(e){var t=e.stage,c=e.stageName,s=t.engines>1?"engines":"engine";return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:c}),Object(a.jsxs)("div",{className:"col text-right",children:[t.engines," ",s]})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(de),children:t.thrust_sea_level&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.kN," Kn Thrust at Sea Level"]})}),Object(a.jsx)("div",{className:"".concat(de," text-sm-left text-md-right"),children:t.thrust_sea_level&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_sea_level.lbf," lbf Sea Level"]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(de),children:t.thrust_vacuum&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.kN," Kn Thrust in a Vacuum"]})}),Object(a.jsx)("div",{className:"".concat(de," text-sm-left text-md-right"),children:t.thrust_vacuum&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust_vacuum.lbf," lbf Vacuum"]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(de),children:t.thrust&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust.kN," Kn Thrust"]})}),Object(a.jsx)("div",{className:"".concat(de," text-sm-left text-md-right"),children:t.thrust&&Object(a.jsxs)("small",{className:"text-muted",children:[t.thrust.lbf," lbf"]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"".concat(de),children:t.burn_time_sec&&Object(a.jsxs)("small",{className:"text-muted",children:[t.burn_time_sec," Burn Time (s)"]})}),Object(a.jsx)("div",{className:"".concat(de," text-sm-left text-md-right"),children:t.fuel_amount_tons&&Object(a.jsxs)("small",{className:"text-muted",children:[t.fuel_amount_tons," Tons of Fuel"]})})]})]})})},he=function(e){var t=e.rocket;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:t.name})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("small",{className:"text-muted",children:t.description})})})]})})},me=function(e){var t=e.weights;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:"Capacity"})}),t.map((function(e){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(a.jsx)("small",{className:"text-muted",children:e.name})}),Object(a.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:Object(a.jsxs)("small",{className:"text-muted",children:[e.kg," KG"]})})]},e.name)}))]})})},be=function(e){var t=e.rocket;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:"Geometry"})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(a.jsxs)("small",{className:"text-muted",children:["Height ",t.height.meters," M"]})}),Object(a.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:Object(a.jsxs)("small",{className:"text-muted",children:["Diameter ",t.diameter.meters," M"]})})]})]})})},xe=function(e){var t=e.rocket;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(he,{rocket:t}),Object(a.jsx)(ue,{stage:t.first_stage,stageName:"First Stage"}),Object(a.jsx)(ue,{stage:t.second_stage,stageName:"Second Stage"}),Object(a.jsx)(je,{engines:t.engines}),Object(a.jsx)(me,{weights:t.payload_weights}),Object(a.jsx)(be,{rocket:t})]})},Oe=function(e){var t=e.ship;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-12 col-md-6",children:t.name}),Object(a.jsx)("div",{className:"col-sm-12 col-md-6 text-sm-left text-md-right",children:t.type})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsxs)("small",{children:["Mission Roles: ",t.roles.join(", ")]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12",children:Object(a.jsxs)("small",{children:["Home: ",t.home_port]})})})]})})},fe=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:null!==e[t]&&Object(a.jsxs)("small",{className:"text-muted",children:[c,": ",e[t]," ",s]})})})},ve=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:null!==e[t]&&e[t].length>0&&Object(a.jsxs)("small",{className:"text-muted",children:[c,": ",e[t].join(", ")," ",s]})})})},pe=function(e){var t=e.payload;return Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:t.name}),Object(a.jsx)("div",{className:"col text-right",children:null!==t.type&&"".concat(t.type)})]}),ve(t,"customers","Customers"),ve(t,"manufacturers","Manufacturers"),fe(t,"lifespan_years","Lifespan","years"),fe(t,"reference_system","Reference System"),fe(t,"regime","Regime"),fe(t,"orbit","Orbit"),fe(t,"mass_kg","Mass","KG"),fe(t,"apoapsis_km","Apoapsis","KM"),fe(t,"arg_of_pericenter","Arg. Pericenter"),fe(t,"semi_major_axis_km","Semi Major Axis","KM"),fe(t,"periapsis_km","Periapsis","KM"),fe(t,"period_min","Period Min"),fe(t,"raan","RAAN"),fe(t,"eccentricity","Eccentricity"),fe(t,"inclination_deg","Inclination","Degrees"),fe(t,"mean_anomaly","Avg. Anomaly"),fe(t,"mean_motion","Avg. Motion"),ve(t,"norad_ids","Norad IDs")]})})},Ne=function(e){var t=e.fetchedLaunch,c=e.setFetchedLaunch,s=e.launchId;if(!t.loaded)return console.log("Using the network to load..."),function(e){var t=Object(_.a)(Object(_.a)({},L),{},{query:Object(_.a)(Object(_.a)({},L.query),{},{_id:e})});return C((function(){return fetch("".concat(S,"/launches/query"),Object(_.a)(Object(_.a)({},A),{},{body:JSON.stringify(t)})).then((function(e){return e.json()}))}),"launches_one").then((function(e){return e.docs[0]}))}(s).then((function(e){c({loaded:!0,data:e,error:null})})).catch((function(e){console.error(e),c({loaded:!1,error:e,data:{}})}))},ge=function(e){return e&&e.state&&e.state.launch},ye=function(e){return e.launch.cores.map((function(e,t){return Object(a.jsx)(ie,{core:e,index:t},e.core)}))},_e=function(e){var t=e.launch;return Object(a.jsx)(xe,{rocket:t.rocket})},we=function(e){return e.launch.ships.map((function(e){return Object(a.jsx)(Oe,{ship:e},e.id)}))},ke=function(e){return e.launch.payloads.map((function(e){return Object(a.jsx)(pe,{payload:e},e.id)}))},Se=function(e,t){switch(e){case v:return Object(a.jsx)(ye,{launch:t});case f:return Object(a.jsx)(_e,{launch:t});case g:return Object(a.jsx)(we,{launch:t});case O:return Object(a.jsx)(ke,{launch:t});default:return Object(a.jsx)("span",{children:"This context item is not implemented"})}},Ae=Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:ee}),Object(a.jsx)(j.a,{exact:!0,path:"/x",component:ee}),Object(a.jsx)(j.a,{exact:!0,path:"/launch/:launchId",component:function(){var e=Object(j.h)().launchId,t=Object(j.g)(),c=Object(n.useState)({loaded:ge(t),error:null,data:{}}),s=Object(d.a)(c,2),r=s[0],l=s[1],i=Object(n.useState)(v),o=Object(d.a)(i,2),h=o[0],m=o[1],b=ge(t)?t.state.launch:r.data,x=r.loaded&&!r.error;return Object(n.useEffect)((function(){return Ne({fetchedLaunch:r,setFetchedLaunch:l,launchId:e})})),console.log("Active launch",b),Object(a.jsxs)(U,{children:[Object(a.jsx)(u.a,{children:Object(a.jsxs)(u.a.Body,{children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-12 col-md-9",children:[Object(a.jsxs)("div",{className:"row",children:[x&&Object(a.jsx)(u.a.Title,{className:"col-auto",children:b.name}),x&&Object(a.jsx)("div",{className:"col-auto text-left",children:Object(a.jsx)(X,{launch:b})})]}),Object(a.jsx)("div",{className:"row",children:x&&Object(a.jsx)("span",{className:" col",children:b.details})})]}),Object(a.jsx)("div",{className:"col-sm-12 col-md-3 text-right",children:x&&Object(a.jsx)("img",{style:{height:"150px"},src:b.links.patch.small})})]}),Object(a.jsx)("div",{className:"row pt-2 ",children:Object(a.jsx)("div",{className:"col",children:x&&Object(a.jsx)(ae,{links:b.links})})})]})}),Object(a.jsx)(u.a,{className:"mt-2 mb-2",children:Object(a.jsx)(u.a.Body,{children:x&&Object(a.jsx)(le,{launch:b,activeContext:h,setActiveContext:m})})}),x&&Se(h,b)]})}})]});var Le=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{children:Ae})})},Ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(a.jsx)(Le,{}),document.getElementById("root")),Ce()},74:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.14f92486.chunk.js.map