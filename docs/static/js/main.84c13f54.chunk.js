(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),o=a.n(c),r=(a(28),a(1)),i=a(5),u=Object(n.createContext)(void 0);var s=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,e.albumDetails&&e.albumDetails.title?l.a.createElement(i.b,{to:"/"},"Albums"):"Albums",e.albumDetails&&e.albumDetails.title&&l.a.createElement("span",null,"\xa0\xbb\xa0",e.albumDetails.title)))};var m=function(){var e=Object(n.useContext)(u),t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(!0),b=Object(r.a)(m,2),d=b[0],h=b[1];Object(n.useEffect)(function(){e.loadAlbums().then(function(e){o(e),h(!1)})},[e]);var p=c.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(i.b,{to:"/album/"+e.id},l.a.createElement("figure",null,l.a.createElement("img",{src:e.coverPhotoBaseUrl,alt:""}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,e.title)))),l.a.createElement("br",null))});return l.a.createElement("div",null,d&&"Loading...",c.length>0&&l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement("ul",{className:"albums"},p)),l.a.createElement("hr",null),l.a.createElement(i.b,{to:"/"},"Back to Albums List"))},b=a(21);var d=function(e){var t=e.photoID,a=e.photoNumber,c=e.photosTotal;console.log("ViewPhoto -",t,a,c);var o=Object(n.useContext)(u),i=Object(n.useState)(void 0),s=Object(r.a)(i,2),m=s[0],b=s[1],d=Object(n.useState)(!0),h=Object(r.a)(d,2),p=h[0],f=h[1];return Object(n.useEffect)(function(){o.loadPhotoDetail(t).then(function(e){b(e),f(!1)})},[e.match,o,t]),l.a.createElement("div",null,p&&l.a.createElement("figure",null,l.a.createElement("figcaption",null,"'Loading...'")),!p&&m&&l.a.createElement("figure",null,l.a.createElement("img",{src:m.baseUrl,alt:""}),l.a.createElement("figcaption",null,a," of ",c)),!p&&!m&&l.a.createElement("figure",null,l.a.createElement("figcaption",null,"Photo not found")))},h=document.getElementById("root");var p=function(e){var t=document.createElement("div");return t.setAttribute("id","modal"),Object(n.useEffect)(function(){return h.appendChild(t),function(){h.removeChild(t)}}),o.a.createPortal(e.children,t)};var f=function(e){return l.a.createElement(p,null,l.a.createElement("div",{className:"wrapper",onClick:function(t){e.handleClose(t)}},l.a.createElement("div",{className:"inner"},e.children)))};var g=function(e){var t=e.match.params.aid,a=Object(n.useContext)(u),c=Object(n.useState)(void 0),o=Object(r.a)(c,2),m=o[0],h=o[1],p=Object(n.useState)(!0),g=Object(r.a)(p,2),v=g[0],E=g[1],O=Object(n.useState)(!1),j=Object(r.a)(O,2),k=j[0],I=j[1],w=Object(n.useState)(void 0),C=Object(r.a)(w,2),S=C[0],D=C[1],A=Object(n.useState)(void 0),y=Object(r.a)(A,2),P=y[0],x=y[1],N=Object(n.useState)(1),T=Object(r.a)(N,2),B=T[0],L=T[1],U=Object(n.useState)(void 0),G=Object(r.a)(U,2),J=G[0],W=G[1],$=Object(n.useState)([void 0]),q=Object(r.a)($,2),M=q[0],R=q[1],V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;e.preventDefault();var n=e.target.className;k?"inner"!==n&&"wrapper"!==n||I(!1):(D(t),x(parseInt(a)+1),I(!0))};return Object(n.useEffect)(function(){a.loadAlbumDetail(t,J).then(function(e){h(e),E(!1)})},[e.match,a,t,J]),l.a.createElement("div",null,v&&l.a.createElement("span",null,"'Loading...'"),!v&&m&&l.a.createElement("div",null,l.a.createElement(s,{albumDetails:m}),l.a.createElement("ul",null,m.result.mediaItems.map(function(e,t){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#",onClick:function(a){V(a,e.id,t)}},l.a.createElement("figure",null,l.a.createElement("img",{src:e.baseUrl,alt:""}))))})),k&&l.a.createElement(f,{handleClose:V,shown:k},l.a.createElement(d,{photoID:S,photoNumber:P,photosTotal:m.mediaItemsCount})),l.a.createElement("div",{id:"pagination"},J&&l.a.createElement("span",null,l.a.createElement("a",{href:"#",onClick:function(e){!function(e){e.preventDefault(),console.log("prev page token",M[B-1]),W(M[B-1]),L(B-1)}(e)}},"Prev"),"\xa0"),l.a.createElement("span",null,B," of ",Math.ceil(m.mediaItemsCount/25)),m.result.nextPageToken&&l.a.createElement("span",null,"\xa0",l.a.createElement("a",{href:"#",onClick:function(e){!function(e){e.preventDefault(),console.log("handleClickNext albumDetails.nextPageToken",m.result.nextPageToken),R([].concat(Object(b.a)(M),[J])),console.log("previousPageTokenArray",M),W(m.result.nextPageToken),L(B+1)}(e)}},"Next")))),!v&&!m&&l.a.createElement("span",null,"Album not found"),l.a.createElement("hr",null),l.a.createElement(i.b,{to:"/"},"Back to Albums List"))};var v=function(){return l.a.createElement("div",null,"This site was made with React 16.8, Google Photos API, and SASS.",l.a.createElement("br",null),l.a.createElement(i.b,{to:"/"},"Back"))},E=a(7),O=a(22),j=a(19),k=a(20),I=function(){function e(t){Object(j.a)(this,e),this.gapiClient=t}return Object(k.a)(e,[{key:"loadAlbums",value:function(){return this.gapiClient.photoslibrary.albums.list({}).then(function(e){return e.result.albums})}},{key:"loadAlbumDetail",value:function(e,t){var a=this;return this.gapiClient.photoslibrary.albums.get({albumId:e}).then(function(e){return e.result}).then(function(n){return console.log("loadAlbumDetail album",n),a.gapiClient.photoslibrary.mediaItems.search({albumId:e,pageToken:t}).then(function(e){return console.log("loadAlbumDetail then response",e),Object(O.a)({},n,{result:e.result})})}).catch(function(e){})}},{key:"loadPhotoDetail",value:function(e){return this.gapiClient.photoslibrary.mediaItems.get({mediaItemId:e}).then(function(e){return e.result}).catch(function(e){})}}]),e}(),w="https://www.googleapis.com/auth/photoslibrary.readonly";var C=function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),b=Object(r.a)(s,2),d=b[0],h=b[1],p=Object(n.useState)(void 0),f=Object(r.a)(p,2),O=f[0],j=f[1];Object(n.useEffect)(function(){console.log("we've mounted");var t=setInterval(function(){window.gapi&&(clearInterval(t),gapi.load("client:auth2",function(){gapi.client.init({discoveryDocs:["https://photoslibrary.googleapis.com/$discovery/rest?version=v1"],clientId:e.gapiID,scope:w}).then(function(){o(!1);var e=gapi.auth2.getAuthInstance();e.isSignedIn.listen(function(){h(t.hasGrantedScopes(w))});var t=e.currentUser.get(),a=t.hasGrantedScopes(w);j(new I(gapi.client)),h(a)})}))},100)},[e.gapiID]);var k=Object(n.useCallback)(function(){gapi.auth2.getAuthInstance().signOut()},[]),C=Object(n.useCallback)(function(){gapi.auth2.getAuthInstance().signIn()},[]);return c?l.a.createElement("div",null,"Initialising..."):d?l.a.createElement("div",{className:"App"},l.a.createElement(u.Provider,{value:O},l.a.createElement(i.a,null,l.a.createElement("button",{onClick:k},"Sign Out"),l.a.createElement(E.a,{path:"/",exact:!0,component:m}),l.a.createElement(E.a,{path:"/album/:aid",component:g}),l.a.createElement(E.a,{path:"/about",component:v})))):l.a.createElement("button",{onClick:C},"Sign in")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(C,{gapiID:"101744662563-frd5q7291nvegithu7pi3i5dcmlp79ra.apps.googleusercontent.com"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.84c13f54.chunk.js.map