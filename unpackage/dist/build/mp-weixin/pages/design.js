(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/design"],{"55c7":function(t,e,n){},"81d8":function(t,e,n){"use strict";var a={uNoticeBar:function(){return n.e("uview-ui/components/u-notice-bar/u-notice-bar").then(n.bind(null,"2f71"))},uWaterfall:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-waterfall/u-waterfall")]).then(n.bind(null,"80cb"))},uLazyLoad:function(){return n.e("uview-ui/components/u-lazy-load/u-lazy-load").then(n.bind(null,"4aee"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"21bc"))}},u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},8641:function(t,e,n){"use strict";var a=n("dc77"),u=n.n(a);u.a},8723:function(t,e,n){"use strict";var a=n("55c7"),u=n.n(a);u.a},adb9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("e038"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{pageName:"全部设计",listBar:["APP/PC端设计图均有实体项目，如有需要请联系作者。注：Logo模版均有版权保护，请勿盗用，违者必究！"],loadStatus:"loadmore",flowList:[],list:null}},onLoad:function(t){console.log(t.type),0==t.type?(this.list=a.default[0].appImg,this.pageName="APP设计"):1==t.type?(this.list=a.default[0].pcImg,this.pageName="PC端设计"):2==t.type?(this.list=a.default[0].logoImg,this.pageName="Logo设计"):(this.list=a.default[0].posterImg,this.pageName="海报设计"),this.addRandomData()},onReachBottom:function(){var t=this;this.loadStatus="loading",setTimeout((function(){t.addRandomData(),t.loadStatus="loadmore"}),1e3)},methods:{addRandomData:function(){for(var t=0;t<8;t++){var e=this.$u.random(0,this.list.length-1),n=JSON.parse(JSON.stringify(this.list[e]));n.id=this.$u.guid(),this.flowList.push(n)}},remove:function(t){this.$refs.uWaterfall.remove(t)},seeImg:function(e){t.previewImage({urls:[e],longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){},fail:function(t){}}})}}};e.default=o}).call(this,n("543d")["default"])},cc86:function(t,e,n){"use strict";n.r(e);var a=n("81d8"),u=n("dff6");for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);n("8641"),n("8723");var i,r=n("f0c5"),l=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"59eb0594",null,!1,a["a"],i);e["default"]=l.exports},dc77:function(t,e,n){},dff6:function(t,e,n){"use strict";n.r(e);var a=n("adb9"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=u.a},e7f2:function(t,e,n){"use strict";(function(t){n("6847");a(n("66fd"));var e=a(n("cc86"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e7f2","common/runtime","common/vendor"]]]);