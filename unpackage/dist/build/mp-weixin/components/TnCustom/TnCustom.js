(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/TnCustom/TnCustom"],{4521:function(t,n,a){},"511c":function(t,n,a){"use strict";var e=a("4521"),u=a.n(e);u.a},"929d":function(t,n,a){"use strict";var e,u=function(){var t=this,n=t.$createElement;t._self._c},r=[];a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}))},9562:function(t,n,a){"use strict";(function(t){function a(t){throw new Error('"'+t+'" is read-only')}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"TnCustom",data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,e=this.bgImage,u="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(a("style"),u="".concat(u,"background-image:url(").concat(e,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},isLeft:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};n.default=e}).call(this,a("543d")["default"])},"9fca":function(t,n,a){"use strict";a.r(n);var e=a("9562"),u=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=u.a},c5d5:function(t,n,a){"use strict";a.r(n);var e=a("929d"),u=a("9fca");for(var r in u)"default"!==r&&function(t){a.d(n,t,(function(){return u[t]}))}(r);a("511c");var o,c=a("f0c5"),i=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,"668b00ce",null,!1,e["a"],o);n["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/TnCustom/TnCustom-create-component',
    {
        'components/TnCustom/TnCustom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c5d5"))
        })
    },
    [['components/TnCustom/TnCustom-create-component']]
]);
