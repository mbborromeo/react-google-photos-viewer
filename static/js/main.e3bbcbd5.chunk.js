(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(16),c=n.n(l),i=(n(27),n(3)),r=(n(28),n(2)),u=Object(a.createContext)(void 0);var s=function(){var e=Object(a.useContext)(u),t=Object(a.useState)([]),n=Object(i.a)(t,2),l=n[0],c=n[1],s=Object(a.useState)(!0),m=Object(i.a)(s,2),d=m[0],h=m[1];Object(a.useEffect)(function(){e.loadAlbums().then(function(e){c(e),h(!1)})},[]);var b=l.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(r.b,{to:"/album/"+e.id},e.title,o.a.createElement("img",{src:e.coverPhotoBaseUrl})),o.a.createElement("br",null))});return o.a.createElement("div",null,b,d?"Loading":"Not loading")};var m=function(e){var t=e.match.params.id,n=Object(a.useContext)(u),l=Object(a.useState)(void 0),c=Object(i.a)(l,2),s=c[0],m=c[1],d=Object(a.useState)(!0),h=Object(i.a)(d,2),b=h[0],g=h[1];return Object(a.useEffect)(function(){n.loadAlbumDetail(t).then(function(e){console.log("promise finished",e),m(e),g(!1)})},[e.match]),b||s?o.a.createElement("div",null,b&&"Loading...",s&&o.a.createElement("div",null,o.a.createElement("h2",null,s.title),o.a.createElement("ul",null,s.mediaItems.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(r.b,{to:"/photo/"+e.id},o.a.createElement("img",{src:e.baseUrl,alt:""})))}))),o.a.createElement("hr",null),o.a.createElement(r.b,{to:"/"},"Back to Albums List")):o.a.createElement("div",null,o.a.createElement("h2",null,"Album not found"))};var d=function(e){console.log("props",e),console.log("props.match",e.match),console.log("props.match.params",e.match.params);var t=e.match.params.id,n=Object(a.useContext)(u),l=Object(a.useState)(void 0),c=Object(i.a)(l,2),s=c[0],m=c[1],d=Object(a.useState)(!0),h=Object(i.a)(d,2),b=h[0],g=h[1];return Object(a.useEffect)(function(){console.log("photoID",t),n.loadPhotoDetail(t).then(function(e){console.log("promise finished",e),m(e),g(!1)})},[e.match]),b||s?o.a.createElement("div",null,b&&"Loading...",s&&o.a.createElement("div",null,o.a.createElement("img",{src:s.baseUrl})),o.a.createElement("hr",null),o.a.createElement(r.b,{to:"/"},"Back to Albums List")):o.a.createElement("div",null,o.a.createElement("h2",null,"Photo not found"))};var h=function(){return o.a.createElement("div",null,"Lorem ipsom yada delour.",o.a.createElement("br",null),o.a.createElement(r.b,{to:"/"},"Back"))};var b=function(){return o.a.createElement("div",null,o.a.createElement(r.b,{to:"/"},"Albums List"),o.a.createElement("br",null),o.a.createElement(r.b,{to:"/about"},"About"))},g=n(7),p=n(21),v=n(19),f=n(20),E=function(){function e(t){Object(v.a)(this,e),this.gapiClient=t}return Object(f.a)(e,[{key:"loadAlbums",value:function(){return this.gapiClient.photoslibrary.albums.list({}).then(function(e){return e.result.albums})}},{key:"loadAlbumDetail",value:function(e){var t=this;return this.gapiClient.photoslibrary.albums.get({albumId:e}).then(function(e){return console.log("album gathered"),e.result}).then(function(n){return console.log("getting media items for",n),t.gapiClient.photoslibrary.mediaItems.search({albumId:e}).then(function(e){console.log("media search done",e);var t=e.result.mediaItems;return Object(p.a)({},n,{mediaItems:t})})}).catch(function(e){})}},{key:"loadPhotoDetail",value:function(e){return this.gapiClient.photoslibrary.mediaItems.get({mediaItemId:e}).then(function(e){return console.log("photo gathered"),console.log(e),e.result}).catch(function(e){})}}]),e}(),O="https://www.googleapis.com/auth/photoslibrary.readonly";var j=function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),l=n[0],c=n[1],p=Object(a.useState)(!1),v=Object(i.a)(p,2),f=v[0],j=v[1],I=Object(a.useState)(void 0),w=Object(i.a)(I,2),y=w[0],k=w[1];Object(a.useEffect)(function(){console.log("we've mounted");var t=setInterval(function(){console.log("is google api loaded?"),window.gapi?(console.log("gapi loaded!!"),clearInterval(t),gapi.load("client:auth2",function(){console.log("auth2 is loaded"),gapi.client.init({discoveryDocs:["https://photoslibrary.googleapis.com/$discovery/rest?version=v1"],clientId:e.gapiID,scope:O}).then(function(){console.log("we're initialised"),c(!1);var e=gapi.auth2.getAuthInstance();e.isSignedIn.listen(function(){console.log("signed in status changed"),j(t.hasGrantedScopes(O))});var t=e.currentUser.get(),n=t.hasGrantedScopes(O);console.log("has photos library permission?",n),k(new E(gapi.client)),j(n)})})):console.log("gapi not loaded yet")},100)},[]);var S=Object(a.useCallback)(function(){gapi.auth2.getAuthInstance().signOut()},[]),A=Object(a.useCallback)(function(){gapi.auth2.getAuthInstance().signIn()},[]);return l?o.a.createElement("div",null,"Initing..."):f?o.a.createElement("div",{className:"App"},o.a.createElement(u.Provider,{value:y},o.a.createElement(r.a,null,o.a.createElement(b,null),o.a.createElement("button",{onClick:S},"Sign Out"),o.a.createElement("div",null,o.a.createElement(g.a,{path:"/",exact:!0,component:s}),o.a.createElement(g.a,{path:"/album/:id",component:m}),o.a.createElement(g.a,{path:"/about",component:h}),o.a.createElement(g.a,{path:"/photo/:id",component:d}))))):o.a.createElement("button",{onClick:A},"Sign in")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,{gapiID:"101744662563-frd5q7291nvegithu7pi3i5dcmlp79ra.apps.googleusercontent.com"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.e3bbcbd5.chunk.js.map