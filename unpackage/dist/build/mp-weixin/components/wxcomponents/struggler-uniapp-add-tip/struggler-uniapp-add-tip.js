(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip"],{"2d51":function(t,n,e){},4720:function(t,n,e){"use strict";var u,r=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}))},"7c02":function(t,n,e){"use strict";var u=e("2d51"),r=e.n(u);r.a},aff9:function(t,n,e){"use strict";e.r(n);var u=e("4720"),r=e("b57a");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("7c02");var a,c=e("f0c5"),o=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,"3c41912e",null,!1,u["a"],a);n["default"]=o.exports},b57a:function(t,n,e){"use strict";e.r(n);var u=e("ec8f"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=r.a},ec8f:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e="SHOW_TIP",u={data:function(){return{showTip:!1}},mounted:function(){this.showTip=!t.getStorageInfoSync().keys.includes(e)},props:{tip:{type:String,default:"点击「添加小程序」，下次访问更便捷",required:!0},duration:{type:Number,default:5,required:!1}},methods:{hideTip:function(){t.setStorageSync(e,!0),this.showTip=!1}}};n.default=u}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component',
    {
        'components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("aff9"))
        })
    },
    [['components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component']]
]);
