(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-column-notice/u-column-notice"],{"02ec":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},direction:{type:String,default:"row"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},duration:{type:[Number,String],default:2e3},volumeSize:{type:[Number,String],default:34},speed:{type:Number,default:160},isCircular:{type:Boolean,default:!0},mode:{type:String,default:"horizontal"},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},padding:{type:[Number,String],default:"18rpx 24rpx"}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},vertical:function(){return"horizontal"!=this.mode},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},data:function(){return{}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},change:function(t){var e=t.detail.current;e==this.list.length-1&&this.$emit("end")}}};e.default=o},5036:function(t,e,n){"use strict";var o=n("c948"),u=n.n(o);u.a},"84ff":function(t,e,n){"use strict";n.r(e);var o=n("88c8"),u=n("d9d4");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("5036");var i,l=n("f0c5"),c=Object(l["a"])(u["default"],o["b"],o["c"],!1,null,"2cd65de2",null,!1,o["a"],i);e["default"]=c.exports},"88c8":function(t,e,n){"use strict";var o={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"2f58"))}},u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.textStyle]));t.$mp.data=Object.assign({},{$root:{s0:n}})},r=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},c948:function(t,e,n){},d9d4:function(t,e,n){"use strict";n.r(e);var o=n("02ec"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-column-notice/u-column-notice-create-component',
    {
        'uview-ui/components/u-column-notice/u-column-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("84ff"))
        })
    },
    [['uview-ui/components/u-column-notice/u-column-notice-create-component']]
]);
