(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09ca":function(t,e,a){"use strict";a("8eb5")},"0a26":function(t){t.exports=JSON.parse('{"works":[["小程序","一个有趣的笑话","png"],["小程序","悦听音乐播放器","jpg"],["小程序","开心记事本","png"],["小程序","智能聊天、在线留言","jpg"]],"app":["Jokes","MusicPlayer","NoteBook","MessageBoard"],"page":{"name":["关于我","我的作品","和我联系"],"assembly":["HomePage","AboutMe","Applet","Contact"]},"information":[["bi-heart","我的爱好","二次元！二次元！(*/ω＼*)还有听歌也是一种享受~"],["bi-laptop","我学习的技能","有Web前端的基础HTML css和Javascript，还有vue Bootstrap框架等，不过还需要多加练习…ᕙ(⇀‸↼‶)ᕗ"],["bi-chat-dots","与他人交流","我喜欢与其他人交流！(ﾉﾟ▽ﾟ)ﾉ如果发现新事物或者有趣的事情会很开心的和其他人分享~"],["bi-gem","对待新事物","很乐意进行学习与尝试ヾ(ﾟ∀ﾟゞ)我觉得有创新就有进步~"]]}')},"0a4e":function(t,e,a){},"1ae1":function(t,e,a){"use strict";a("9844")},"20a1":function(t,e,a){},3518:function(t,e,a){"use strict";a("c244")},"477d":function(t,e,a){},"4a5d":function(t,e,a){"use strict";a("e52f")},"4dd6":function(t,e,a){"use strict";a("ddce")},5122:function(t,e,a){"use strict";a("20a1")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"app"}},[s("Navigation",{attrs:{current:e.page},on:{SwitchPages:e.SwitchPages}}),s("Return",{directives:[{name:"show",rawName:"v-show",value:e.Return(),expression:"Return()"}],on:{return:function(e){t.page=e}}}),s("transition",{attrs:{mode:"out-in"}},[s(e.page,{tag:"component",on:{chuan:e.SwitchPages}})],1),s("Footer")],1)},i=[],o=a("b85c"),l=a("0a26"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{class:"HomePage"==t.current?t.wushe:t.youshe,attrs:{id:"mainNav"}},[a("div",{staticClass:"container px-4 px-lg-5"},[a("a",{staticClass:"navbar-brand",on:{click:function(e){return t.huan(t.assembly[0])}}},[t._v("首页")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav ms-auto my-2 my-lg-0"},t._l(t.name,(function(e,s){return a("li",{key:s,staticClass:"nav-item"},[a("a",{staticClass:"nav-link",style:t.current==t.assembly[s+1]?t.yanshe:"",on:{click:function(e){return t.huan(t.assembly[s+1])}}},[t._v(t._s(e))])])})),0)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u=(a("b0c0"),{props:{current:String},name:"Navigation",data:function(){return{yanshe:{color:"#f4623a"},wushe:"navbar navbar-expand-lg navbar-light fixed-top py-3",youshe:"navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-shrink",assembly:l.page.assembly,name:l.page.name}},methods:{huan:function(t){this.$emit("SwitchPages",t)}}}),d=u,p=(a("dd1d"),a("2877")),m=Object(p["a"])(d,r,c,!1,null,"666f11b9",null),v=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"masthead"},[a("div",{staticClass:"container px-4 px-lg-5 h-100"},[a("div",{staticClass:"\n        row\n        gx-4 gx-lg-5\n        h-100\n        align-items-center\n        justify-content-center\n        text-center\n      "},[t._m(0),a("div",{staticClass:"col-lg-8 align-self-baseline"},[a("p",{staticClass:"text-white-75 mb-5"},[t._v(" 我想在这里放满我的作品，或者其他什么的︿(￣︶￣)︿ ")]),a("a",{staticClass:"btn btn-primary btn-xl",on:{click:t.huan}},[t._v("要看看我的作品吗？")])])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-8 align-self-end"},[a("h1",{staticClass:"text-white font-weight-bold"},[t._v("我的个性网站")]),a("hr",{staticClass:"divider"})])}],g={name:"Masthead",data:function(){return{}},methods:{huan:function(){this.$emit("chuan","Applet")}}},b=g,C=(a("a3bb"),Object(p["a"])(b,f,h,!1,null,null,null)),y=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section",attrs:{id:"services"}},[a("div",{staticClass:"container px-4 px-lg-5"},[a("h2",{staticClass:"text-center mt-0"},[t._v("喜欢二次元的宅宅程序员o(´^｀)o")]),a("hr",{staticClass:"divider"}),a("div",{staticClass:"row gx-4 gx-lg-5"},t._l(t.data,(function(e,s){return a("div",{key:s,staticClass:"col-lg-3 col-md-6 text-center"},[a("div",{staticClass:"mt-5"},[a("div",{staticClass:"mb-2"},[a("i",{class:e[0]+" fs-1 text-primary"})]),a("h3",{staticClass:"h4 mb-2"},[t._v(t._s(e[1]))]),a("p",{staticClass:"text-muted mb-0"},[t._v(t._s(e[2]))])])])})),0)])])},x=[],k={mame:"Services",data:function(){return{data:l.information}}},j=k,w=(a("4dd6"),Object(p["a"])(j,_,x,!1,null,"63853c54",null)),S=w.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"portfolio"}},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row g-0"},t._l(t.works,(function(e,s){return a("div",{key:s,staticClass:"col-lg-4 col-sm-6"},[a("a",{staticClass:"portfolio-box",attrs:{title:e[1]},on:{click:function(e){return t.huan(s)}}},[a("img",{staticClass:"img-fluid",attrs:{src:"assets/img/portfolio/"+s+"."+e[2],alt:"..."}}),a("div",{staticClass:"portfolio-box-caption"},[a("div",{staticClass:"project-category text-white-50"},[t._v(t._s(e[0]))]),a("div",{staticClass:"project-name"},[t._v(t._s(e[1]))])])])])})),0)])])},$=[],P={name:"Portfolio",data:function(){return{works:l.works,zhujian:l.app}},methods:{huan:function(t){this.$emit("chuan",this.zhujian[t])}}},A=P,E=(a("b0df"),Object(p["a"])(A,O,$,!1,null,"8734755c",null)),N=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section",attrs:{id:"contact"}},[a("div",{staticClass:"container px-4 px-lg-5"},[t._m(0),a("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center mb-5"},[a("div",{staticClass:"col-lg-6"},[a("form",{attrs:{id:"contactForm","data-sb-form-api-token":"API_TOKEN"}},[a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shuju.name,expression:"shuju.name"}],staticClass:"form-control",attrs:{id:"name",type:"text"},domProps:{value:t.shuju.name},on:{input:function(e){e.target.composing||t.$set(t.shuju,"name",e.target.value)}}}),a("label",{attrs:{for:"name"}},[t._v("名字")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shuju.email,expression:"shuju.email"}],staticClass:"form-control",attrs:{id:"email",type:"email"},domProps:{value:t.shuju.email},on:{input:function(e){e.target.composing||t.$set(t.shuju,"email",e.target.value)}}}),a("label",{attrs:{for:"email"}},[t._v("电子邮件")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shuju.phone,expression:"shuju.phone"}],staticClass:"form-control",attrs:{id:"phone",type:"tel"},domProps:{value:t.shuju.phone},on:{input:function(e){e.target.composing||t.$set(t.shuju,"phone",e.target.value)}}}),a("label",{attrs:{for:"phone"}},[t._v("电话号码")])]),a("div",{staticClass:"form-floating mb-3"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shuju.message,expression:"shuju.message"}],staticClass:"form-control",staticStyle:{height:"10rem"},attrs:{id:"message",type:"text"},domProps:{value:t.shuju.message},on:{input:function(e){e.target.composing||t.$set(t.shuju,"message",e.target.value)}}}),a("label",{attrs:{for:"message"}},[t._v("想和我说点什么吗？")])]),a("div",{staticClass:"d-grid"},[a("input",{staticClass:"btn-primary btn-xl disabled",attrs:{id:"submitButton",value:"提交",type:"button"},on:{click:t.post}})])])])]),a("div",{staticClass:"contact-information"},[t._v("其他联系方式")]),t._m(1)])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{staticClass:"col-lg-8 col-xl-6 text-center"},[a("h2",{staticClass:"mt-0"},[t._v("想说点什么吗？")]),a("hr",{staticClass:"divider"}),a("p",{staticClass:"text-muted mb-5"},[t._v("提交成功我就可以看到啦~")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{staticClass:"col-lg-4 text-center mb-5 mb-lg-0"},[a("i",{staticClass:"bi-phone fs-2 mb-3 text-muted"}),a("div",[t._v("+86 19934014819")])]),a("div",{staticClass:"col-lg-4 text-center mb-5 mb-lg-0"},[a("i",{staticClass:"fs-2 mb-3 text-muted bi-envelope"}),a("div",[t._v("1584059986@qq.com")])])])}],B=(a("ac1f"),a("00b4"),{name:"Contact",data:function(){return{shuju:{name:"",email:"",phone:"",message:""}}},methods:{post:function(){var t=/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;if(t.test(this.shuju.email)){var e=AV.Object.extend("ContactMe"),a=new e;a.set("title",this.shuju),a.save().then((function(){alert("提交成功！撒花花~")}),(function(){alert("可能出现了一些问题，没有提交过去呢")}))}else alert("请输入正确的邮箱格式啦！不然无法回信息啦！")}}}),R=B,z=(a("97f7"),Object(p["a"])(R,M,q,!1,null,"50788e03",null)),L=z.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bg-light py-5"},[a("div",{staticClass:"container px-4 px-lg-5"},[a("div",{staticClass:"small text-center text-muted"},[t._v("Copyright © 2021 - Creator Chen Yiwen")])])])}],J={name:"Footer"},D=J,T=Object(p["a"])(D,H,I,!1,null,"09159208",null),V=T.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xiaohua"},[a("div",{staticClass:"container px-4 px-lg-5"},[a("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{staticClass:"col-lg-8 text-center"},[a("h2",{staticClass:"text-white mt-0"},[t._v("开心一刻")]),a("hr",{staticClass:"divider divider-light"}),a("transition",{attrs:{name:"jokes",mode:"out-in"}},[a("div",{key:t.key,staticClass:"text-white-75 mb-4"},[t._v(" "+t._s(t.xiao)+" ")])]),a("input",{staticClass:"btn btn-light btn-xl",attrs:{type:"button",value:"换一个"},on:{click:t.qiehuan}})],1)])])])},U=[],W={name:"jokes",data:function(){return{xiao:"",key:""}},methods:{qiehuan:function(){var t=this;this.$http.get("https://autumnfish.cn/api/joke/list?num=1").then((function(e){t.xiao=e.data.jokes[0],t.key=e.data.jokes[0]}),(function(t){console.log(t)}))}},beforeCreate:function(){var t=this;this.$http.get("https://autumnfish.cn/api/joke/list?num=1").then((function(e){t.xiao=e.data.jokes[0],t.xiao=e.data.jokes[0]}),(function(t){console.log(t)}))}},Z=W,K=(a("f0d6"),Object(p["a"])(Z,F,U,!1,null,"8ba25ba4",null)),Q=K.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"music container-fluid"},[a("div",{staticClass:"head"},[a("div",{staticClass:"Header"},[t._v("悦听音乐")]),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"text",attrs:{placeholder:"搜索歌曲名或者作者",type:"text"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getmusic.apply(null,arguments)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("div",{staticClass:"button bi bi-search",on:{click:t.getmusic}})])]),a("div",{staticClass:"Interface"},[a("div",{staticClass:"list"},[a("ul",{staticStyle:{padding:"0"}},t._l(t.musiclist,(function(e,s){return a("li",{key:s,staticClass:"name"},[a("span",{staticClass:"bi bi-play-circle play",on:{click:function(e){return t.play(s)}}}),a("span",{attrs:{title:e.name}},[t._v(t._s(e.name))]),a("div",{staticClass:"singer"},[t._v(" 歌手："),t._l(e.artists,(function(e,s){return a("span",{key:s},[t._v(t._s(e.name)+";")])}))],2)])})),0)])]),a("div",{staticClass:"progres"},[a("audio",{staticClass:"Music-progress",attrs:{src:t.music,autoplay:"autoplay",controls:"controls"}})])])},X=[],Y={name:"music",data:function(){return{music:"no",query:"",musiclist:[],cover:""}},methods:{getmusic:function(){var t=this;this.$http.get("https://autumnfish.cn/search?keywords="+this.query).then((function(e){t.musiclist=e.data.result.songs,console.log(e.data.result.songs)}))},play:function(t){var e=this.musiclist[t].id;this.music="https://music.163.com/song/media/outer/url?id="+e+".mp3"}}},tt=Y,et=(a("5122"),Object(p["a"])(tt,G,X,!1,null,"628c380d",null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-section",attrs:{id:"notebook"}},[a("div",{attrs:{id:"packing"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.event,expression:"event"}],attrs:{id:"text",placeholder:"回车添加事件",type:"text"},domProps:{value:t.event},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.event=e.target.value)}}}),a("div",{attrs:{id:"hangInTheAir"}},[a("div",[t._v("未完成：")]),a("ul",{staticClass:"Store"},t._l(t.Store,(function(e,s){return a("li",{key:s,staticClass:"one"},[a("span",{staticClass:"label"},[t._v(t._s(s+1))]),a("span",{staticClass:"content"},[t._v(t._s(e))]),a("span",{staticClass:"delete",on:{click:function(e){return t.success(s)}}},[t._v("完成呐")])])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Store.length>0,expression:"Store.length > 0"}],staticClass:"BottomBar"},[a("div",{staticClass:"label"},[t._v("还有"+t._s(t.Store.length)+"件事要做哦")]),a("div",{staticClass:"delete",on:{click:t.successAll}},[t._v("全都完成呐!")])])]),a("div",{attrs:{id:"Completed"}},[a("div",[t._v("已完成：")]),a("ul",{staticClass:"Store"},t._l(t.Completed,(function(e,s){return a("li",{key:s,staticClass:"one"},[a("span",{staticClass:"label"},[t._v(t._s(s+1))]),a("span",{staticClass:"content"},[t._v(t._s(e))]),a("span",{staticClass:"delete",on:{click:function(e){return t.strikeOut(s)}}},[t._v("清除")])])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Completed.length>0,expression:"Completed.length > 0"}],staticClass:"BottomBar"},[a("div",{staticClass:"label"},[t._v("已经完成"+t._s(t.Completed.length)+"件事呐！")]),a("div",{staticClass:"delete",on:{click:t.clearAll}},[t._v("全部清除")])])])])])},nt=[],it=(a("1276"),a("a15b"),a("a434"),{name:"notebook",data:function(){return{event:"",Store:""==localStorage.local?[]:localStorage.local.split(" "),Completed:""==localStorage.Completed?[]:localStorage.Completed.split(" ")}},methods:{successAll:function(){this.Completed=this.Store,localStorage.Completed=localStorage.local,this.Store=[],localStorage.local=""},clearAll:function(){this.Completed=[],localStorage.Completed=""},add:function(){this.event?(this.Store.push(this.event),localStorage.local=this.Store.join(" "),this.event=""):alert("什么都没有写哦")},success:function(t){var e=this.Store.splice(t,1);this.Completed.push(e[0]),localStorage.local=this.Store.join(" "),localStorage.Completed=this.Completed.join(" ")},strikeOut:function(t){this.Completed.splice(t,1),localStorage.Completed=this.Completed.join(" ")}},beforeCreate:function(){localStorage.local||localStorage.Completed||(localStorage.local="",localStorage.Completed="")}}),ot=it,lt=(a("5743"),Object(p["a"])(ot,st,nt,!1,null,"7fbf3175",null)),rt=lt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-section container-fluid text-center MessageBoard"},[a("div",[a("div",{staticClass:"button"},[a("div",{style:t.pattern?"color:lightskyblue":"",on:{click:function(e){t.pattern=!0}}},[t._v(" 智能聊天 ")]),a("div",{style:t.pattern?"":"color:lightskyblue",on:{click:t.history}},[t._v(" 留言板 ")])]),a("transition",{attrs:{mode:"out-in"}},[a(t.pattern?"Intelligence":"LeavingAmessage",{tag:"component",attrs:{data1:t.data1,data2:t.data2},on:{data1:function(e){return t.data1=e},data2:function(e){return t.data2=e}}})],1)],1)])},ut=[],dt=(a("7db0"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chat"}},[a("div",{staticClass:"DisplayPanel"},t._l(t.data,(function(e,s){return a("div",{key:s,class:e[0]+" information"},[t._v(" "+t._s(e[1])+" ")])})),0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"input",attrs:{placeholder:"想聊什么呢？",type:"text"},domProps:{value:t.input},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.get.apply(null,arguments)},input:function(e){e.target.composing||(t.input=e.target.value)}}})])}),pt=[],mt={props:["data1","data2"],name:"intelligence",data:function(){return{input:"",data:this.data1}},methods:{get:function(){var t=this;this.data.push(["user",this.input]);var e=this.input;this.input="",this.$http.get("http://www.liulongbin.top:3006/api/robot?spoken="+e).then((function(e){t.data.push(["reply",e.data.data.info.text]),t.$emit("data1",t.data)}),(function(){t.data.push(["reply","目前该浏览器不支持该功能哦"])}))}}},vt=mt,ft=(a("09ca"),Object(p["a"])(vt,dt,pt,!1,null,"814b8ff8",null)),ht=ft.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LeavingAmessage"}},[a("div",{staticClass:"DisplayPanel"},t._l(t.data,(function(e,s){return a("div",{key:s,staticClass:"LeavingAmessage"},[a("div",{staticClass:"text"},[t._v(t._s(e[1]))]),a("div",{staticClass:"name"},[a("div",[t._v(t._s(e[0]))]),a("div",[t._v(t._s(e[2]))])])])})),0),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",attrs:{placeholder:"昵称",type:"text",autofocus:""},domProps:{value:t.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.texts.apply(null,arguments)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"text",staticClass:"text",attrs:{placeholder:"留言",type:"text"},domProps:{value:t.input},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.get.apply(null,arguments)},input:function(e){e.target.composing||(t.input=e.target.value)}}})])])},bt=[],Ct={props:["data1","data2"],name:"LeavingAmessage",data:function(){return{name:"",input:"",data:this.data2,text:""}},methods:{texts:function(){this.$refs.text.focus()},get:function(){var t=this;if(""==this.name||""==this.input)alert("昵称或留言没有填写，这样是不行的哦~");else{var e=this.input,a=(new Date).toLocaleDateString();this.input="";var s=AV.Object.extend("LeavingAmessage"),n=new s;n.set("title",[this.name,e,a]),n.save().then((function(s){t.data.push([t.name,e,a]),t.$emit("data2",t.data)}),(function(t){alert("网络出错啦！")}))}}}},yt=Ct,_t=(a("cc22"),Object(p["a"])(yt,gt,bt,!1,null,"6afb179b",null)),xt=_t.exports,kt={name:"MessageBoard",components:{LeavingAmessage:xt,Intelligence:ht},data:function(){return{pattern:!0,data1:[],data2:""}},methods:{history:function(){var t=this;if(this.data2)this.pattern=!1;else{var e=new AV.Query("LeavingAmessage");e.find().then((function(e){t.data2=[];var a,s=Object(o["a"])(e);try{for(s.s();!(a=s.n()).done;){var n=a.value;t.data2.push(n._serverData.title)}}catch(i){s.e(i)}finally{s.f()}t.pattern=!1}),(function(){alert("网络出错啦！")}))}this.pattern=!1}}},jt=kt,wt=(a("1ae1"),Object(p["a"])(jt,ct,ut,!1,null,null,null)),St=wt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button"},[a("input",{staticClass:"btn btn-close",attrs:{type:"button"},on:{click:function(e){return t.Return()}}})])},$t=[],Pt={name:"return",methods:{Return:function(){this.$emit("return","Applet")}}},At=Pt,Et=(a("4a5d"),Object(p["a"])(At,Ot,$t,!1,null,"5999c933",null)),Nt=Et.exports,Mt={name:"App",components:{Navigation:v,HomePage:y,AboutMe:S,Applet:N,Contact:L,Footer:V,Jokes:Q,MusicPlayer:at,NoteBook:rt,MessageBoard:St,Return:Nt},data:function(){return{page:"HomePage"}},methods:{SwitchPages:function(t){this.page=t},Return:function(){var t,e=Object(o["a"])(l.app);try{for(e.s();!(t=e.n()).done;){var a=t.value;if(this.page==a)return!0}}catch(s){e.e(s)}finally{e.f()}return!1}}},qt=Mt,Bt=(a("3518"),Object(p["a"])(qt,n,i,!1,null,"1967d97e",null)),Rt=Bt.exports,zt=a("bc3a"),Lt=a.n(zt),Ht=AV;Ht.Query,Ht.User;AV.init({appId:"coJvzqIgHkiuWHgUDuMtOC37-gzGzoHsz",appKey:"y9tnM5dWs5eC3ubS6OXIrSqm",serverURL:"https://cojvzqig.lc-cn-n1-shared.com"}),s["a"].config.assetsPublicPath="./",s["a"].prototype.$http=Lt.a,new s["a"]({render:function(t){return t(Rt)}}).$mount("#app")},5743:function(t,e,a){"use strict";a("0a4e")},"65f6":function(t,e,a){},"683a":function(t,e,a){},"86ae":function(t,e,a){},"8eb5":function(t,e,a){},"96b4":function(t,e,a){},"97f7":function(t,e,a){"use strict";a("65f6")},9844:function(t,e,a){},a3bb:function(t,e,a){"use strict";a("96b4")},b0df:function(t,e,a){"use strict";a("f117")},c244:function(t,e,a){},cc22:function(t,e,a){"use strict";a("86ae")},dd1d:function(t,e,a){"use strict";a("683a")},ddce:function(t,e,a){},e52f:function(t,e,a){},f0d6:function(t,e,a){"use strict";a("477d")},f117:function(t,e,a){}});
//# sourceMappingURL=app.8293bea8.js.map