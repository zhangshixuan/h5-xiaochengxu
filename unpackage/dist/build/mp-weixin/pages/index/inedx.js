(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/inedx"],{"0bb3f":function(n,t,e){"use strict";var o,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}))},2393:function(n,t,e){"use strict";e.r(t);var o=e("2f55"),a=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=a.a},"2f55":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("fdc6"));function a(n){return n&&n.__esModule?n:{default:n}}var c=function(){e.e("components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip").then(function(){return resolve(e("aff9"))}.bind(null,e)).catch(e.oe)},r={components:{addTip:c},data:function(){return{tip:"点击「添加小程序」，下次访问更便捷",duration:1,scrollTop:0,old:{scrollTop:0},bannerList:[{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner3.png"},{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner1.png"},{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner2.png"},{imageUrl:"http://cdn.zhoukaiwen.com/zjx_banner.png"}],categories:[{cuIcon:"hotfill",color:"red",badge:"优惠",mid:"1",name:"学习技术"},{cuIcon:"colorlens",color:"orange",badge:1,mid:"2",name:"需求定制"},{cuIcon:"goodsnewfill",color:"yellow",badge:12,mid:"3",name:"商业项目"},{cuIcon:"calendar",color:"cyan",badge:22,mid:"4",name:"文章资讯"}],curriculum:[{name:"uniapp项目开发",content:"uniapp小程序商城系统开发，实战项目..."},{name:"后台管理系统",content:"vue+iview的后台管理系统建设系统开发..."},{name:"App模板",content:"基于uniapp开发的效率类APP，开发至上线..."},{name:"PC端官网开发",content:"html/css/jQuery建设的PC端官方门户网站..."},{name:"uniapp多端打包",content:"uniapp开发完成上线的打包流程，上架商店等..."}],projectList:o.default}},watch:{},mounted:function(){console.log(this.projectList)},methods:{scroll:function(n){console.log(n),this.old.scrollTop=n.detail.scrollTop},goCategorieslist:function(t){1==t.currentTarget.dataset.mid||2==t.currentTarget.dataset.mid?n.navigateTo({url:"../timeline?mid="+t.currentTarget.dataset.mid}):3==t.currentTarget.dataset.mid&&n.navigateTo({url:"../project/list"})},goProjectList:function(){n.navigateTo({url:"../project/list"})},goProject:function(){n.navigateTo({url:"../project/project"})},goVideo:function(){n.navigateTo({url:"../video"})}}};t.default=r}).call(this,e("543d")["default"])},"45bb":function(n,t,e){"use strict";var o=e("c6dd"),a=e.n(o);a.a},c1c6:function(n,t,e){"use strict";e.r(t);var o=e("0bb3f"),a=e("2393");for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("45bb");var r,i=e("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"408ec7eb",null,!1,o["a"],r);t["default"]=u.exports},c6dd:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/inedx-create-component',
    {
        'pages/index/inedx-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c1c6"))
        })
    },
    [['pages/index/inedx-create-component']]
]);