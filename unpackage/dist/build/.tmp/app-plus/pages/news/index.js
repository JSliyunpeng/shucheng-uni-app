(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/index"],{"17c4":function(t,e,n){},"28f6":function(t,e,n){"use strict";n.r(e);var o=n("706e"),c=n("8c15");for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);n("d6cb");var u,a=n("f0c5"),r=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,"1665c696",null,!1,o["a"],u);e["default"]=r.exports},"706e":function(t,e,n){"use strict";var o={"cl-tabs":()=>Promise.all([n.e("common/vendor"),n.e("components/cl-tabs/cl-tabs")]).then(n.bind(null,"0d17")),"uni-card":()=>n.e("components/uni-card/uni-card").then(n.bind(null,"9947"))},c=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.card_text_show=!t.card_text_show},t.e1=function(e){t.card_text_show=!t.card_text_show},t.e2=function(e){t.card_text_show=!t.card_text_show},t.e3=function(e){t.card_text_show=!t.card_text_show},t.e4=function(e){t.card_text_show=!t.card_text_show},t.e5=function(e){t.card_text_show=!t.card_text_show})},i=[];n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},"8c15":function(t,e,n){"use strict";n.r(e);var o=n("c54e"),c=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=c.a},c54e:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/cl-tabs/cl-tabs")]).then(n.bind(null,"0d17"))},i=function(){return n.e("components/uni-card/uni-card").then(n.bind(null,"9947"))},u={components:{clTabs:c,uniCard:i},data:function(){return{show_text:"查看全部",card_text_show:!1,tabBars:["消息","动态"],tabCurrentIndex:-1,sysWidth:0,source:"touch",fristTouch:!1,cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"VR"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}],modalName:null,gridCol:3,gridBorder:!1,menuBorder:!1,menuArrow:!1,menuCard:!1,skin:!1,listTouchStart:0,listTouchDirection:null}},onLoad:function(){this.sysWidth=t.getSystemInfoSync().screenWidth,this.fristTouch=!0},mounted:function(){this.tabCurrentIndex=1},methods:{scrolltolower:function(){o("log","111111111111"," at pages\\news\\index.vue:626")},tabChange:function(t){this.tabCurrentIndex=t,o("log",t," at pages\\news\\index.vue:630")},changeCurrent:function(t){this.source=t.detail.source},transition:function(t){""==this.source||(this.fristTouch?this.$refs.tabs2.move(t.detail.dx-this.tabCurrentIndex*this.sysWidth):this.$refs.tabs2.move(t.detail.dx))},animationfinish:function(t){this.fristTouch=!1,this.source="touch",this.tabCurrentIndex=t.detail.current},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},Gridchange:function(t){this.gridCol=t.detail.value},Gridswitch:function(t){this.gridBorder=t.detail.value},MenuBorder:function(t){this.menuBorder=t.detail.value},MenuArrow:function(t){this.menuArrow=t.detail.value},MenuCard:function(t){this.menuCard=t.detail.value},SwitchSex:function(t){this.skin=t.detail.value},ListTouchStart:function(t){this.listTouchStart=t.touches[0].pageX},ListTouchMove:function(t){this.listTouchDirection=t.touches[0].pageX-this.listTouchStart>0?"right":"left"},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},d6cb:function(t,e,n){"use strict";var o=n("17c4"),c=n.n(o);c.a},de14:function(t,e,n){"use strict";(function(t){n("567d"),n("921b");o(n("66fd"));var e=o(n("28f6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["de14","common/runtime","common/vendor"]]]);