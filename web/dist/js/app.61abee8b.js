(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"0f7d":function(t,e,n){},1793:function(t,e,n){"use strict";var i=n("3eb9"),o=n.n(i);o.a},"1c64":function(t,e,n){"use strict";var i=n("ca0c"),o=n.n(i);o.a},"3eb9":function(t,e,n){},"40a1":function(t,e,n){t.exports=n.p+"img/link.67f04a65.svg"},4582:function(t,e,n){"use strict";var i=n("ccc5"),o=n.n(i);o.a},"472c":function(t,e,n){},4938:function(t,e,n){"use strict";var i=n("472c"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("034f"),n("2877")),r={},l=Object(s["a"])(r,o,a,!1,null,null,null),c=l.exports,u=n("2f62");i["a"].use(u["a"]);var d=new u["a"].Store({state:{downloadOpen:!0,settingsOpen:!1,isDownloading:!1},mutations:{downloadOpen:function(t,e){t.downloadOpen=e},settingsOpen:function(t,e){t.settingsOpen=e},isDownloading:function(t,e){t.isDownloading=e}},getters:{downloadOpen:function(t){return t.downloadOpen},settingsOpen:function(t){return t.settingsOpen},isDownloading:function(t){return t.isDownloading}},actions:{},modules:{}}),f=n("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("Notification",{ref:"notificationComp"}),i("SettingsWindow",{attrs:{settings:t.settings,open:this.$store.state.settingsOpen}}),i("DownloadManager",{attrs:{open:this.$store.state.downloadOpen}}),t.settings?i("header",[i("div",{staticClass:"d-flex justify-content-center"},[t.searching?i("img",{staticClass:"header-icon",staticStyle:{"margin-top":"0px !important"},attrs:{src:n("8b1b"),alt:"search"},on:{click:function(){t.searching=!1}}}):i("img",{staticClass:"header-icon",attrs:{src:n("d103"),alt:"search"},on:{click:function(){t.searching=!0}}}),t.searching?i("SearchBar",{attrs:{items:t.items},on:{searchResults:t.searchResults}}):i("Header",{attrs:{defaultQuality:t.settings.defaultQuality}}),i("div",{staticClass:"d-flex align-self-center",staticStyle:{position:"absolute",right:"15px",cursor:"pointer"}},[i("svg",{staticClass:"icon gear-icon",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512","xml:space":"preserve"},on:{click:t.toggleSettingsOpen}},[i("g",[i("path",{attrs:{d:"M411.1,256c0-23.9,14.8-42.8,36.9-55.8c-4-13.3-9.3-26.2-15.8-38.2c-24.9,6.5-45-3.2-62-20.2c-16.9-16.9-22.1-37.1-15.6-62\n              C342.6,73.3,329.8,68,316.4,64c-13,22.2-36.4,36.9-60.4,36.9c-23.9,0-47.4-14.7-60.4-36.9c-13.4,4-26.2,9.3-38.2,15.8\n              c6.5,24.9,1.3,45-15.6,62c-16.9,16.9-37.1,26.7-61.9,20.2C73.3,174,68,186.8,64,200.2c22.2,13,37,31.9,37,55.8\n              c0,23.9-14.8,47.4-37,60.4c4,13.4,9.3,26.2,15.8,38.2c24.9-6.5,45-1.3,61.9,15.6c17,16.9,22.1,37.1,15.6,62\n              c12.1,6.5,24.8,11.8,38.2,15.8c13-22.2,36.5-36.9,60.4-36.9c23.9,0,47.4,14.7,60.4,36.9c13.4-4,26.2-9.3,38.2-15.8\n              c-6.5-24.9-1.3-45,15.6-62c16.9-16.9,37.1-26.7,62-20.2c6.5-12.1,11.8-24.9,15.8-38.2C425.8,298.8,411.1,279.9,411.1,256z\n              M256,354.3c-54.2,0-98.3-44-98.3-98.3c0-54.3,44-98.3,98.3-98.3c54.3,0,98.3,44,98.3,98.3C354.3,310.3,310.3,354.3,256,354.3z"}})])]),i("svg",{class:t.downloadIconStyle,staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512","xml:space":"preserve"},on:{click:t.toggleDownloadsOpen}},[i("path",{attrs:{d:"M383.6,322.7L278.6,423c-5.8,6-13.7,9-22.4,9c-8.7,0-16.5-3-22.4-9L128.4,322.7c-12.5-11.9-12.5-31.3,0-43.2\n          c12.5-11.9,32.7-11.9,45.2,0l50.4,48.2v-217c0-16.9,14.3-30.6,32-30.6c17.7,0,32,13.7,32,30.6v217l50.4-48.2\n          c12.5-11.9,32.7-11.9,45.2,0C396.1,291.4,396.1,310.7,383.6,322.7z"}})])])],1)]):t._e(),i("div",{staticStyle:{"margin-top":"75px"}},[i("div",{staticClass:"d-flex justify-content-center"},[t.items.length>0?i("div",t._l(t.items,(function(e,n){return i("VideoListItem",{key:n,attrs:{data:e},on:{deleted:t.removeDeletedItem}})})),1):i("div",[i("h2",[t._v("No downloads here")])])])])],1)},h=[],m=(n("4160"),n("a434"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center"},[n("div",{staticStyle:{position:"relative"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.url,expression:"options.url"}],attrs:{placeholder:"Paste video url",type:"url"},domProps:{value:t.options.url},on:{blur:t.getInfo,input:function(e){e.target.composing||t.$set(t.options,"url",e.target.value)}}}),t.canDownload?n("button",{on:{click:t.sendUrl}},[t._v("Download")]):t.isFetchingInfo?n("button",{attrs:{disabled:""}},[t._v("Loading..")]):t.canDownload?t._e():n("button",{attrs:{disabled:""}},[t._v("Download")])]),n("div",[t.options.audioOnly?n("button",{staticClass:"audio-button",attrs:{id:"audio-button-active"},on:{click:t.selectAudioOnly}},[t._v("Audio")]):t._e(),t.options.audioOnly?t._e():n("button",{staticClass:"audio-button",on:{click:t.selectAudioOnly}},[t._v("Audio")])]),t.info&&!t.options.audioOnly?n("select",{directives:[{name:"model",rawName:"v-model",value:t.options.videoQuality,expression:"options.videoQuality"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"videoQuality",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",selected:""}},[t._v("Quality")]),t._l(t.getFormats,(function(e,i){return n("option",{key:i,domProps:{value:e.formatId}},[t._v(t._s(e.formatNote))])}))],2):n("select",{directives:[{name:"model",rawName:"v-model",value:t.options.videoQuality,expression:"options.videoQuality"}],attrs:{disabled:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"videoQuality",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",selected:""}},[t._v("Quality")])])])}),g=[],v=(n("4d63"),n("ac1f"),n("25f0"),n("bc3a")),w=n.n(v),y={name:"Header",data:function(){return{info:null,options:{playlist:!1,url:"",videoQuality:"Quality",soundQuality:null,audioOnly:!1,target:""},canDownload:!1,isFetchingInfo:!1}},props:{defaultQuality:String},methods:{sendUrl:function(){var t=this;this.$store.commit("isDownloading",!0);var e=!0;if(null!==this.info&&(this.options.soundQuality=this.getBestAudio),"Quality"===this.options.videoQuality&&!this.options.audioOnly){var n,i=["144p","240p","360p","480p","720p","1080p"];i.forEach((function(e,o){i[o]===t.defaultQuality&&(n=o)}));var o=0;do{for(var a=0;a<this.getFormats.length;a++){var s=this.getFormats[a];if(s.formatNote===i[n-o]){this.options.videoQuality=s.formatId,console.log("Downloading quality: ".concat(s.formatNote)),e=!1;break}}if(!e)break;if(!(o<this.getFormats.length))break;o++}while(e);if(e)return this.$parent.$refs.notificationComp.open("Error","Error finding default quality. Please select manualy."),void this.$store.commit("isDownloading",!1);console.info("Downloading quality: ".concat(i[n-o]))}w.a.post("/download",this.options).then((function(e){switch(e.data.code){case 3:t.$parent.$refs.notificationComp.open("Success","Video '".concat(t.info.title,"' has been added to the queue."));break;case 2:t.$parent.$refs.notificationComp.open("Warning","Video already in libary.");break;case 1:t.$parent.$refs.notificationComp.open("Success","Video '".concat(t.info.title,"' has finished downloading."));break}t.info=null,t.canDownload=!0,t.options.url=""})).catch((function(e){t.$parent.$refs.notificationComp.open("Error","The server encountered an error while downloading. Please try again."),t.canDownload=!0,console.error(e)}))},getInfo:function(){var t=this;if(this.isFetchingInfo=!0,""!==this.options.url)if(this.options.audioOnly)this.canDownload=!0;else try{if(this.isPlaylist(this.options.url))return this.options.playlist=!0,this.canDownload=!1,this.options.url="",void this.$parent.$refs.notificationComp.open("Information","Playlists downloads are not available. (yet)");w.a.post("/info/",{url:this.options.url}).then((function(t){return t.data})).then((function(e){t.info=e,t.isFetchingInfo=!1,t.canDownload=!0})).catch((function(e){console.error(e),t.canDownload=!1,t.isFetchingInfo=!1,t.$parent.$refs.notificationComp.open("Error","The server could not fetch the video info. Check your url and try again.")}))}catch(e){this.isFetchingInfo=!1,this.$parent.$refs.notificationComp.open("Error","The server encountered an error."),console.error(e)}else this.canDownload=!1},selectAudioOnly:function(){this.options.audioOnly?this.options.audioOnly=!1:this.options.audioOnly=!0},isPlaylist:function(t){return RegExp(/list=([0-9a-zA-Z$-_.+!*'(),]+)/).test(t)}},computed:{getBestAudio:function(){var t=null;try{for(var e=0;e<this.info.formats.length;e++){var n=this.info.formats[e];"m4a"==n.ext&&(t=n.format_id)}}catch(i){console.log(i)}return t},getFormats:function(){var t=[];try{for(var e=0;e<this.info.formats.length;e++){var n=this.info.formats[e];if("mp4"==n.ext){0===t.length&&t.push({formatNote:n.format_note,tbr:n.tbr,formatId:n.format_id});for(var i=!1,o=0;o<t.length;o++)if(n.format_note===t[o].formatNote){i=!0,n.tbr>t[o].tbr&&t.splice(o,1,{formatNote:n.format_note,tbr:n.tbr,formatId:n.format_id});break}i||t.push({formatNote:n.format_note,tbr:n.tbr,formatId:n.format_id})}}}catch(a){console.log(a)}return t}}},b=y,_=(n("7915"),Object(s["a"])(b,m,g,!1,null,"67b5fc9a",null)),x=_.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"d-flex"},["mp3"==t.data.extention?i("img",{staticClass:"media-type-icon",staticStyle:{height:"25px !important"},attrs:{src:n("f079"),alt:"Audio"}}):i("img",{staticClass:"media-type-icon",staticStyle:{height:"25px !important"},attrs:{src:n("f3b6"),alt:"Video"}}),i("img",{staticClass:"yt-image",attrs:{alt:"image",src:t.imageLink}}),i("figcaption",[i("div",{staticClass:"d-flex"},[i("strong",[i("router-link",{attrs:{to:{name:"Watch",params:{id:t.data.id}}}},[t._v(" "+t._s(t.data.title)+" ")])],1)]),i("div",{staticClass:"d-flex justify-content-between"},[i("div",[i("span",[i("a",{attrs:{target:"_blank",href:t.data.uploaderUrl}},[t._v(t._s(t.data.uploader))])])]),i("div",[i("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:n("af22"),alt:"Download"},on:{click:function(){t.deleteItem(t.data.id)}}}),i("a",{attrs:{target:"_blank",href:t.data.videoUrl}},[i("img",{staticClass:"icon",attrs:{src:n("40a1"),alt:"Link"}})]),i("a",{attrs:{target:"_blank",href:"/file/"+t.data.id}},[i("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:n("f28e"),alt:"Download"}})])])]),i("p",[t._v(" "+t._s(t.data.description)+" ")])])])},$=[],O={name:"VideoListItem",props:{data:Object},methods:{deleteItem:function(t){var e=this;w.a.delete("/items/".concat(t)).then((function(){e.$emit("deleted",e.data)}))}},computed:{imageLink:function(){var t=null;return 0===this.data.thumbnails.length?t="@/assets/no-image.png":this.data.thumbnails.forEach((function(e){t=e.url})),t}}},k=O,S=(n("c4d3"),Object(s["a"])(k,C,$,!1,null,"96e89270",null)),D=S.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search-bar"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{placeholder:"Search for a video..",type:"search"},domProps:{value:t.searchQuery},on:{input:[function(e){e.target.composing||(t.searchQuery=e.target.value)},t.search]}})])},Q=[],j=(n("caad"),n("2532"),{name:"SearchBar",data:function(){return{searchQuery:null}},props:{items:Array},methods:{search:function(){var t=this,e=[];null!==this.searchQuery&&""!==this.searchQuery||this.$emit("searchResults",null),this.items.forEach((function(n){(n.title.includes(t.searchQuery)||n.title.toLowerCase().includes(t.searchQuery))&&e.push(n)})),this.$emit("searchResults",e)}}}),E=j,P=(n("1c64"),Object(s["a"])(E,I,Q,!1,null,"2af6cad6",null)),N=P.exports,F=function(){var t=this,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.divClass,on:{click:function(){t.close()}}},[i("div",[i("strong",[e._v(e._s(e.title))]),i("span",[e._v(e._s(e.messages))])])])},L=[],V={name:"Notification",data:function(){return{divClass:"notification-holder",isOpen:!1,title:"",messages:"",timeout:null}},methods:{open:function(t,e){var n=this;this.isOpen=!0,this.timeout=setTimeout((function(){n.close()}),5e3),this.title=t,this.messages=e,this.divClass="notification-holder in"},close:function(){this.isOpen=!1,this.divClass="notification-holder out"}}},A=V,q=(n("4938"),Object(s["a"])(A,F,L,!1,null,"003efdca",null)),B=q.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.open?n("div",{staticClass:"d-flex justify-content-center",attrs:{id:"settings-holder"}},[n("div",{staticClass:"align-self-center d-flex",attrs:{id:"settings-window"}},[t.settings?n("div",[n("h3",[t._v("Settings")]),n("div",[n("label",{attrs:{for:"port-number"}},[t._v("Application port")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.port,expression:"settings.port"}],attrs:{id:"port-number",type:"number",min:"1",max:"65535"},domProps:{value:t.settings.port},on:{input:function(e){e.target.composing||t.$set(t.settings,"port",e.target.value)}}}),n("label",{attrs:{for:"default-quality"}},[t._v("Default quality")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.settings.defaultQuality,expression:"settings.defaultQuality"}],attrs:{id:"default-quality"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.settings,"defaultQuality",e.target.multiple?n:n[0])}}},[n("option",[t._v("144p")]),n("option",[t._v("240p")]),n("option",[t._v("360p")]),n("option",[t._v("480p")]),n("option",[t._v("720p")]),n("option",[t._v("1080p")])])]),n("div",{staticClass:"d-flex justify-content-space-between",attrs:{id:"settings-buttons"}},[n("button",{on:{click:t.close}},[t._v("Close")]),n("button",{on:{click:t.update}},[t._v("Save")])])]):n("div",[n("h3",[t._v("Settings")]),t._m(0),n("div",{staticClass:"d-flex justify-content-space-between",attrs:{id:"settings-buttons"}},[n("button",{on:{click:t.close}},[t._v("Close")]),n("button",{attrs:{disabled:""}},[t._v("Save")])])])])]):t._e()},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"skeleton-label",staticStyle:{width:"150px"}}),n("div",{staticClass:"skeleton-input",staticStyle:{width:"250px"}}),n("div",{staticClass:"skeleton-label",staticStyle:{width:"110px"}}),n("div",{staticClass:"skeleton-input",staticStyle:{width:"200px"}}),n("div",{staticClass:"skeleton-label",staticStyle:{width:"150px"}}),n("div",{staticClass:"skeleton-input",staticStyle:{width:"250px"}})])}],R={name:"SettingsWindow",methods:{update:function(){var t=this;w.a.put("/settings",{port:this.settings.port,defaultQuality:this.settings.defaultQuality}).then((function(e){200===e.status&&t.$parent.$refs.notificationComp.open("Information","Settings has been updated")})).catch((function(e){console.error(e),t.$parent.$refs.notificationComp.open("Error","The server encountered an error while updating the settings. Please try again.")}))},close:function(){this.$store.commit("settingsOpen",!1)}},props:{open:Boolean,settings:Object}},W=R,H=(n("1793"),Object(s["a"])(W,M,T,!1,null,"df25d802",null)),z=H.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.windowClass,attrs:{id:"download-manager"}},[i("div",{staticClass:"d-flex justify-content-between"},[i("h5",{staticStyle:{cursor:"pointer"}},[t._v("Downloads")]),i("img",{staticClass:"icon",staticStyle:{height:"20px !important"},attrs:{src:n("af22"),alt:"Download"},on:{click:t.deleteList}})]),i("div",[t.isDownloading?i("ul",[i("li",[i("DownloadItem",{attrs:{showProgress:!0,title:t.item.title,progressValue:t.item.downloadStatus}})],1)]):t._e()]),i("div",[t.queueItems.length>0?i("ul",t._l(t.queueItems,(function(e,n){return i("li",{key:e.id},[n<=10?i("DownloadItem",{attrs:{showProgress:!1,title:e.title,progressValue:e.downloadStatus}}):t._e()],1)})),0):t._e()])])},J=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-holder"},[n("span",[t._v(t._s(t.title))]),t.showProgress?n("progress",{attrs:{max:"100"},domProps:{value:t.progressValue}}):t._e()])},G=[],K=(n("a9e3"),{name:"DownloadManager",props:{title:String,progressValue:Number,showProgress:Boolean}}),X=K,Y=(n("965d"),Object(s["a"])(X,Z,G,!1,null,"62c9cb53",null)),tt=Y.exports,et={name:"DownloadManager",sockets:{connect:function(){var t=this;this.$socket.emit("downloadStatus"),this.sockets.subscribe("downloadStatus",(function(e){t.data=e.downloads,t.checkIfFinished(),null!==e&&e.downloads.forEach((function(e){"downloading"===e.status&&(t.isDownloading=!0,t.item=e)}))}))}},data:function(){return{data:[],fetchInterval:null,isDownloading:!1,item:null,windowClass:""}},methods:{deleteList:function(){var t=this;w.a.delete("/download/status").then((function(e){200===e.status&&(t.data=[],t.$parent.$refs.notificationComp.open("Success","Download list has been deleted."))}))},checkIfFinished:function(){var t=this;null!==this.item&&this.data.forEach((function(e){t.item.id===e.id&&"finished"===e.status&&(t.isDownloading=!1,t.$store.commit("isDownloading",!1))}))}},watch:{open:function(t){this.windowClass=t?"close-manager":"open-manager"}},props:{open:Boolean},components:{DownloadItem:tt},computed:{queueItems:function(){var t=[];return this.data.forEach((function(e){"queued"===e.status&&t.push(e)})),t},finishedItems:function(){var t=[];return this.data.forEach((function(e){"finished"===e.status&&t.push(e)})),t}}},nt=et,it=(n("608d"),Object(s["a"])(nt,U,J,!1,null,"1f75989e",null)),ot=it.exports,at={name:"Home",mounted:function(){this.reloadVideos(),this.loadSettings()},components:{Header:x,VideoListItem:D,SearchBar:N,Notification:B,SettingsWindow:z,DownloadManager:ot},data:function(){return{items:[],searching:!1,gearIcon:n("f571"),settings:null}},methods:{toggleDownloadsOpen:function(){this.$store.state.downloadOpen?this.$store.commit("downloadOpen",!1):this.$store.commit("downloadOpen",!0)},toggleSettingsOpen:function(){this.$store.state.settingsOpen?this.$store.commit("settingsOpen",!1):this.$store.commit("settingsOpen",!0)},searchResults:function(){},loadData:function(){var t=this;w.a.get("/items").then((function(e){t.items=e.data.videos,t.searchResults(null)})).catch((function(e){console.error(e),t.$refs.notificationComp.open("Error","Could not fetch data from database. Please try again later.")}))},loadSettings:function(){var t=this;w.a.get("/settings").then((function(t){return t.data})).then((function(e){t.settings=e.settings})).catch((function(e){console.error(e),t.$refs.notificationComp.open("Error","The server encountered an error while fetshing the settings data. Please try again.")}))},removeDeletedItem:function(t){var e=this;this.items.forEach((function(n,i){n.id===t.id&&e.items.splice(i,1)}))},reloadVideos:function(){var t=this;this.sockets.subscribe("getVideos",(function(e){t.items=e})),this.$socket.emit("getVideos")}},computed:{downloadIconStyle:function(){return this.$store.state.isDownloading?"icon download-icon download-ani":"icon download-icon"}}},st=at,rt=(n("6422"),Object(s["a"])(st,p,h,!1,null,"46aa2d84",null)),lt=rt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Notification",{ref:"notificationComp"}),n("header",{staticClass:"d-flex align-items-center"},[n("router-link",{attrs:{to:{name:"Home"}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512",width:"25px",height:"25px",fill:"#FFF"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("polygon",{attrs:{points:"64.5,256.5 256.5,448.5 256.5,336.5 448.5,336.5 448.5,176.5 256.5,176.5 256.5,64.5 "}})])])],1),this.item?n("div",{staticClass:"d-flex justify-content-center",staticStyle:{"margin-top":"80px"}},[n("div",{staticStyle:{width:"1024px"}},["mp3"!=this.item.extention?n("video",{attrs:{src:"/media/videos/"+this.item.fileName,controls:""}}):n("video",{style:"background: url("+t.item.thumbnails[4].url+"); background-size:cover;",attrs:{src:"media/music/"+this.item.fileName,controls:""}}),n("h3",{staticStyle:{"margin-bottom":"0"}},[t._v(t._s(this.item.title))]),n("strong",[t._v(t._s(this.item.uploader))]),n("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.item.description))])])]):t._e()],1)},ut=[],dt=n("a38b"),ft=n.n(dt),pt={name:"Watch",components:{Notification:B},mounted:function(){var t=this;w.a.get("/items/".concat(this.$route.params.id)).then((function(e){t.item=e.data})).catch((function(e){console.error(e),t.$refs.notificationComp.open("Error","Could not media data from database. Please try again later.")}))},data:function(){return{item:null,arrowLeftIcon:ft.a}}},ht=pt,mt=(n("4582"),Object(s["a"])(ht,ct,ut,!1,null,"f09852e0",null)),gt=mt.exports;i["a"].use(f["a"]);var vt=[{path:"/",name:"Home",component:lt},{path:"/watch/:id",name:"Watch",component:gt}],wt=new f["a"]({routes:vt}),yt=wt,bt=n("5132"),_t=n.n(bt);i["a"].use(new _t.a({debug:!0,connection:"http://localhost:3000"})),i["a"].config.productionTip=!1,new i["a"]({router:yt,store:d,render:function(t){return t(c)}}).$mount("#app")},"608d":function(t,e,n){"use strict";var i=n("f356"),o=n.n(i);o.a},6422:function(t,e,n){"use strict";var i=n("0f7d"),o=n.n(i);o.a},7915:function(t,e,n){"use strict";var i=n("7fb1"),o=n.n(i);o.a},"7fb1":function(t,e,n){},"85ec":function(t,e,n){},"8b1b":function(t,e,n){t.exports=n.p+"img/close.1ee79cbd.svg"},"8da7":function(t,e,n){},"965d":function(t,e,n){"use strict";var i=n("8da7"),o=n.n(i);o.a},a38b:function(t,e,n){t.exports=n.p+"img/arrowleft.612cbcbd.svg"},af22:function(t,e,n){t.exports=n.p+"img/trash.46df62da.svg"},c4d3:function(t,e,n){"use strict";var i=n("d05c"),o=n.n(i);o.a},ca0c:function(t,e,n){},ccc5:function(t,e,n){},d05c:function(t,e,n){},d103:function(t,e,n){t.exports=n.p+"img/search.0ad4943b.svg"},f079:function(t,e,n){t.exports=n.p+"img/note.65fc3c34.svg"},f28e:function(t,e,n){t.exports=n.p+"img/download.28aa1a76.svg"},f356:function(t,e,n){},f3b6:function(t,e,n){t.exports=n.p+"img/videocamera.c14fd336.svg"},f571:function(t,e,n){t.exports=n.p+"img/gear.3fa5df5f.svg"}});
//# sourceMappingURL=app.61abee8b.js.map