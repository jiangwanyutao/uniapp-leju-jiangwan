(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-find-find"],{2909:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=s;var n=o(e("6005")),a=o(e("db90")),c=o(e("06c5")),r=o(e("3427"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,n.default)(t)||(0,a.default)(t)||(0,c.default)(t)||(0,r.default)()}},3427:function(t,i,e){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(i,"__esModule",{value:!0}),i.default=n},"3da8":function(t,i,e){"use strict";e.r(i);var n=e("532a"),a=e("49f8");for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);e("b6a1");var r,o=e("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"bbb0cadc",null,!1,n["a"],r);i["default"]=s.exports},"41bf":function(t,i,e){"use strict";var n=e("4ea4");e("7db0"),e("c740"),e("4160"),e("a434"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2909")),c=e("e4b0"),r={data:function(){return{acte:0,start:1,rows:[],isCollected:!1,isshow:!0,show:!1,total:"",list:[]}},methods:{act:function(){this.acte=0,this.isshow=!0,this.show=!1,uni.pageScrollTo({scrollTop:0})},acts:function(){this.acte=1,this.isshow=!1,this.show=!0,uni.pageScrollTo({scrollTop:0})},init:function(){var t=this;(0,c.findArticleByPage)(this.start,10).then((function(i){var e,n=uni.getStorageSync("articleList");i.data.rows.forEach((function(t){if(n){var i=n.find((function(i){return i.id==t.id}));t.isCollected=!!i}else t.isCollected=!1})),(e=t.rows).push.apply(e,(0,a.default)(i.data.rows)),t.total=i.data.total})),(0,c.findBrandsByPage)(this.start,10).then((function(i){var e;console.log(i),(e=t.list).push.apply(e,(0,a.default)(i.data.rows))}))},collected:function(t,i){var e=uni.getStorageSync("articleList"),n=this.rows.find((function(i){return i.id==t}));if(e){var a=e.findIndex((function(i){return i.id==t}));if(a>=0)return n.isCollected=!1,this.rows[i].isCollected=!1,e.splice(a,1),uni.setStorageSync("articleList",e),void uni.showToast({title:"取消成功"});n.isCollected=!0,this.rows[i].isCollected=!0,e.push(n)}else n.isCollected=!0,this.rows[i].isCollected=!0,e=[],e.push(n);uni.setStorageSync("articleList",e),uni.showToast({title:"收藏成功"})},articles:function(t){uni.navigateTo({url:"./articleInfo/articleInfo?id=".concat(t)})}},onLoad:function(t){this.init()},onReachBottom:function(){this.start++,this.rows.length<this.total&&this.init()}};i.default=r},"49f8":function(t,i,e){"use strict";e.r(i);var n=e("41bf"),a=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=a.a},"532a":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var n={uniIcons:e("08a0").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"find"},[e("v-uni-view",{staticClass:"tui"},[e("v-uni-view",{staticClass:"tuijian",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.act.apply(void 0,arguments)}}},[t._v("精选文章"),e("v-uni-view",{class:0==t.acte?"active":""})],1),e("v-uni-view",{staticClass:"pinpai",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.acts.apply(void 0,arguments)}}},[t._v("品牌列表"),e("v-uni-view",{class:1==t.acte?"active":""})],1)],1),t.isshow?e("v-uni-view",{staticClass:"article-list"},t._l(t.rows,(function(i,n){return e("v-uni-view",{staticClass:"article-block"},[e("v-uni-view",{staticClass:"cover-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.articles(i.id)}}},[e("v-uni-image",{staticClass:"img",attrs:{src:i.coverImg}}),e("v-uni-view",{staticClass:"ctitle"},[e("v-uni-view",{staticClass:"etitle"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"dtitle"},[t._v(t._s(i.author))])],1)],1),e("v-uni-view",{staticClass:"btns-bar"},[e("v-uni-view",{staticClass:"view-block"},[e("uni-icons",{attrs:{type:"eye",size:"30"}}),e("v-uni-view",{staticClass:"eye"},[t._v(t._s(i.viewCount))])],1),e("v-uni-view",{staticClass:"share"},[e("uni-icons",{attrs:{type:"star",size:"30",color:i.isCollected?"red":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collected(i.id,n)}}})],1)],1)],1)})),1):t._e(),t.show?e("v-uni-view",{staticClass:"pin"},t._l(t.list,(function(i){return e("v-uni-view",{key:i.id,staticClass:"ullsit"},[e("v-uni-view",{staticClass:"pr"},[e("v-uni-image",{attrs:{src:i.bigPic,mode:""}})],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.name))])],1)})),1):t._e()],1)},c=[]},6005:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=c;var n=a(e("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){if(Array.isArray(t))return(0,n.default)(t)}},b53f:function(t,i,e){var n=e("d1f9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("be149044",n,!0,{sourceMap:!1,shadowMode:!1})},b6a1:function(t,i,e){"use strict";var n=e("b53f"),a=e.n(n);a.a},d1f9:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.find[data-v-bbb0cadc]{padding-top:44px}.tui[data-v-bbb0cadc]{position:fixed;top:0;left:0;width:100%;height:44px;z-index:99;display:flex;align-items:center;justify-content:center;text-align:center;background:#354e44}.tui .tuijian[data-v-bbb0cadc]{display:flex;align-items:center;flex-direction:column;width:20%;height:27.8px;text-align:center;color:#fff}.tui .pinpai[data-v-bbb0cadc]{display:flex;align-items:center;flex-direction:column;width:20%;text-align:center;color:#fff;height:27.8px}.tui .active[data-v-bbb0cadc]{width:70px;height:1px;background:#fff;border-radius:3px;text-align:center;margin-top:5px}.article-block[data-v-bbb0cadc]{position:relative;width:337px;height:241px;border-radius:12px;background-color:#fff;margin:14px auto;overflow:hidden}.article-block .cover-img[data-v-bbb0cadc]{position:relative}.article-block .cover-img .img[data-v-bbb0cadc]{width:337px;height:191px}.article-block .cover-img .ctitle[data-v-bbb0cadc]{position:absolute;top:60%;left:10px;color:#fff}.article-block .cover-img .ctitle .etitle[data-v-bbb0cadc]{font-size:24px;line-height:34px}.article-block .cover-img .ctitle .dtitle[data-v-bbb0cadc]{line-height:34px}.article-block .btns-bar[data-v-bbb0cadc]{width:100%;display:flex;justify-content:space-around;align-items:center}.article-block .btns-bar .view-block[data-v-bbb0cadc]{display:flex;justify-content:space-around;align-items:center}.article-block .btns-bar .view-block .eye[data-v-bbb0cadc]{margin-left:5px}.ullsit[data-v-bbb0cadc]{margin:15px;background:#fff;border-radius:4px;overflow:hidden}.ullsit .pr uni-image[data-v-bbb0cadc]{margin:15px;background:#fff;border-radius:4px;overflow:hidden}.ullsit .name[data-v-bbb0cadc]{margin:15px;background:#fff;border-radius:4px;overflow:hidden;font-size:20px;line-height:22px;color:#3e3e3e;font-weight:600}',""]),t.exports=i},db90:function(t,i,e){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=n},e4b0:function(t,i,e){"use strict";var n=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.findArticleByPage=c,i.productArticle=r,i.findBrandsByPage=o;var a=n(e("edf2"));function c(t,i){return(0,a.default)({url:"/lejuClient/productArticle/findArticleByPage/".concat(t,"/").concat(i)})}function r(t){return(0,a.default)({url:"/lejuClient/productArticle/productArticle/".concat(t)})}function o(t,i){return(0,a.default)({url:"/lejuClient/brand/findBrandsByPage/".concat(t,"/").concat(i)})}}}]);