(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kind-list-list"],{"11d8":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.findProductList=a;var s=i(n("edf2"));function a(t,e,n){return(0,s.default)({url:"/lejuClient/product/findProductList/".concat(t,"/").concat(e),method:"post",data:n})}},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var i=o(n("6005")),s=o(n("db90")),a=o(n("06c5")),r=o(n("3427"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,i.default)(t)||(0,s.default)(t)||(0,a.default)(t)||(0,r.default)()}},3427:function(t,e,n){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"3cab":function(t,e,n){"use strict";var i=n("8a28"),s=n.n(i);s.a},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=s(n("6b75"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t))return(0,i.default)(t)}},"65a8":function(t,e,n){"use strict";n.r(e);var i=n("e4f0"),s=n("797f");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("3cab");var r,o=n("f0c5"),u=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"252e6047",null,!1,i["a"],r);e["default"]=u.exports},"797f":function(t,e,n){"use strict";n.r(e);var i=n("95d8"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"8a28":function(t,e,n){var i=n("9617");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("323a6936",i,!0,{sourceMap:!1,shadowMode:!1})},"95d8":function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("2909")),a=(n("26cb"),n("11d8")),r={data:function(){return{id:"",rows:[],currentIndex:0,start:1,total:0,isDesc:"",sortBy:"",queryId:"",tabList:[{name:"新品",current:"default"},{name:"销量",current:"default"},{name:"价格",current:"default"},{name:"筛选",current:"default"}]}},methods:{init:function(){var t=this;(0,a.findProductList)(this.start,10,{brandId:"",categoryId:this.id,isDesc:this.isDesc,keywords:"",sortBy:this.sortBy}).then((function(e){var n;(n=t.rows).push.apply(n,(0,s.default)(e.data.rows)),t.total=e.data.total,uni.stopPullDownRefresh()}))},golist:function(t){uni.navigateTo({url:"./info/info?id=".concat(t)})},tabEvents:function(t){this.rows=[],this.start=1,this.currentIndex=t,this.tabList.forEach((function(e,n){n!=t&&(e.current="default")})),"default"==this.tabList[t].current?(this.tabList[t].current="up",this.isDesc=1):"up"==this.tabList[t].current?(this.tabList[t].current="down",this.isDesc=0):(this.tabList[t].current="up",this.isDesc=1),1==t?this.sortBy="sale":2==t?this.sortBy="price":(this.sortBy="",this.isDesc=""),this.init()}},onLoad:function(t){this.id=t.id,this.init()},onPullDownRefresh:function(){this.sortBy="",this.isDesc="",this.rows=[],this.start=1,this.init()},onReachBottom:function(){this.start++,this.rows.length<this.total&&this.init()}};e.default=r},9617:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tabBox[data-v-252e6047]{position:fixed;z-index:99;display:flex;width:100%;align-items:center;justify-content:space-around;padding:10px 0;background:#354e44;color:#fff;margin:0}.tabBox .item[data-v-252e6047]{display:flex;align-items:center}.tabBox .item .iconBox[data-v-252e6047]{display:flex;align-items:center;flex-direction:column}.tabBox .active[data-v-252e6047]{color:red}.saleMost[data-v-252e6047]{display:flex;width:100%;flex-wrap:wrap;justify-content:space-between;align-items:center;padding-bottom:60px;margin-top:-1px;padding-top:60px}.saleMost .Products[data-v-252e6047]{width:45%;box-sizing:border-box;background:#fff;margin:5px}.saleMost .Products .img[data-v-252e6047]{width:100%;height:119px}.saleMost .Products .img uni-image[data-v-252e6047]{width:100%;height:119px}.saleMost .Products .name[data-v-252e6047]{color:#3e3e3e;margin-top:4px;font-weight:400;margin-left:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.saleMost .Products .shows[data-v-252e6047]{display:flex;justify-content:space-between;align-items:center;margin:10px}',""]),t.exports=e},db90:function(t,e,n){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},e4f0:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("08a0").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"tabBox"},t._l(t.tabList,(function(e,i){return n("v-uni-view",{key:e.name,staticClass:"item ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabEvents(i)}}},[n("v-uni-view",{class:i==t.currentIndex?"active":""},[t._v(t._s(e.name))]),"销量"==e.name||"价格"==e.name?n("v-uni-view",{staticClass:"iconBox"},[n("uni-icons",{attrs:{type:"top",size:"12",color:"up"==e.current?"red":""}}),n("uni-icons",{attrs:{type:"bottom",color:"down"==e.current?"red":"",size:"12"}})],1):t._e()],1)})),1),n("v-uni-view",{staticClass:"saleMost"},t._l(t.rows,(function(e){return n("v-uni-view",{key:e.id,staticClass:"Products",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.golist(e.id)}}},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:e.pic}})],1),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"shows"},[n("v-uni-view",[t._v("￥"+t._s(e.price))]),n("v-uni-view",[t._v("乐居")])],1)],1)})),1)],1)},a=[]}}]);