webpackJsonp([2],{"./app/containers/HomePage/constants.js":function(e,r,n){"use strict";n.d(r,"g",function(){return t}),n.d(r,"h",function(){return s}),n.d(r,"i",function(){return a}),n.d(r,"j",function(){return i}),n.d(r,"k",function(){return o}),n.d(r,"l",function(){return u}),n.d(r,"m",function(){return d}),n.d(r,"f",function(){return m}),n.d(r,"c",function(){return c}),n.d(r,"d",function(){return f}),n.d(r,"e",function(){return I}),n.d(r,"b",function(){return l}),n.d(r,"a",function(){return g});var t="Home/ADD_STEAM_ID",s="HomePage/LOAD_LIBRARIES",a="HomePage/LOAD_LIBRARIES_SUCCESS",i="HomePage/LOAD_LIBRARIES_ERROR",o="HomePage/LOAD_GAME_INFO",u="HomePage/LOAD_GAME_INFO_SUCCESS",d="HomePage/LOAD_GAME_INFO_ERROR",m="HomePage/HIDE_MODAL",c="HomePage/LOAD_USER_FRIENDS",f="HomePage/LOAD_USER_FRIENDS_SUCCESS",I="HomePage/LOAD_USER_FRIENDS_ERROR",l="HomePage/CHANGE_USER_STEAM_ID",g="HomePage/TOGGLE_FRIEND"},"./app/containers/HomePage/reducer.js":function(e,r,n){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments[1];switch(r.type){case a.f:return e.set("modalOpen",!1);case a.h:return e.setIn(["loading","library"],!0).set("libraries",!1);case a.i:return e.set("libraries",n.i(s.fromJS)(r.library)).setIn(["loading","library"],!1).set("currentUser",r.username);case a.j:return e.setIn(["loading","library"],!1).set("error",r.error);case a.k:return e.set("error",!1).set("modalOpen",!0).setIn(["loading","modal"],!0).set("gameInfo",!1);case a.l:return e.set("gameInfo",n.i(s.fromJS)(r.gameInfo)).setIn(["loading","modal"],!1);case a.m:return e.set("error",r.error).setIn(["loading","modal"],!1);case a.c:return e.set("friends",!1).setIn(["loading","friends"],!0).set("steamIds",n.i(s.List)([]));case a.e:return e.set("friends",!1).setIn(["loading","friends"],!1).set("error",r.error);case a.d:return e.set("friends",n.i(s.fromJS)(r.friends)).setIn(["loading","friends"],!1).update("steamIds",function(e){return e.push(r.user.item)}).setIn(["user","avatar"],r.user.avatar).setIn(["user","item"],r.user.item);case a.b:return e.setIn(["user","id"],r.userSteamId).set("friends",!1).setIn(["user","avatar"],!1).set("steamIds",!1);case a.a:var t=e.get("steamIds");if(t.contains(r.userSteamId))t=t.filter(function(e){return e!==r.userSteamId});else{if(!(t.size<10))return e;t=t.concat(r.userSteamId)}return e.set("steamIds",t).set("libraries",!1).updateIn(["friends",r.idx,"selected"],function(e){return!e});default:return e}}Object.defineProperty(r,"__esModule",{value:!0});var s=n("./node_modules/immutable/dist/immutable.js"),a=(n.n(s),n("./app/containers/HomePage/constants.js")),i=n.i(s.fromJS)({steamIds:n.i(s.List)([]),libraries:!1,gameInfo:!1,loading:{modal:!1,library:!1,friends:!1},modalOpen:!1,user:{id:!1,avatar:!1,item:!1},friends:!1,error:!1});r.default=t}});