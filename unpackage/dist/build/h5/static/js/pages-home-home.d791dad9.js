(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"003f":function(t,i,e){"use strict";e.r(i);var a=e("20cb"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"13b7":function(t,i,e){"use strict";var a;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a="https://leju.bufan.cloud";var n=a;i.default=n},1410:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAnRJREFUWAntmD9MFEEUxu+If0gQorGAWrQQLUxMxJAIIdjQoI22xtaa1s7K3oZaOxso1MTqINHEhFAoRCoVKkzORIN/Exh/3/pG1tvbhdvM7DV+ycfbnff2vW9n3tzuUnPOzUPhPZyDQ7VuAgFeEIcJPvL3VDc1JbURMQIbiSTnXnRdkAQgZgA2TdTZbojqSRet1+tfOH9qY2NpHyIXTGhos0vC1/CO6h1KF7XjN2ZHWnw7nIuhUSfhefgAUdncDM5A4VnWG36EOj3whgqC9UwFBocTl3ObGWekAeods5pbmRI4pPibBQxkAiIMUGvK6i3/09SqRWPvYt5a3dY+suHgZtwyLmYEmWPVbFWCJqxeI0/QmgWcMxvNsFRHST4KtcWW8gRVOUOXENILV2mXZp6gymYIIX+Xi+P2YBq1075b5/e3jwozSo3nVudmYUaCVixQ6xsF5D8Mt63OoIrkLZl8vo9iNvZF6vTBdfon+VEsEuT7KObW9/2zqBkQigRVMUNX/8ioNczmG9b1tK3th/yo8h5yj8EdqB46vm8mgoLvNHLqIXoGzsLPULiXFqN3kVwQvILzAhyl6V75QMb1HnUCnuyQR3wOsw+xt+z52eJqc0rhR1C47d0cX4H+bUC+TqDleQcfw2s+Z9rqTouQ19hfuWgbfoLNg5KZ+ElseXAX16HwpHyWgFciRA0oRNlpHUtFiHbalhSByx0niHEBQu4ncpzbwOpVc7++iyFjLycCeuFLGBP+W7Dw0ZGoYmf84GAS3oXadTG+zX6R9z/CzACNMw03jdNls4bKo/+ISIxH6a9ZEhwoT9H7UNnJiHsdd1bpkv0Ge6Dl6AF6BLIAAAAASUVORK5CYII="},"20cb":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("98ec"),n={data:function(){return{list:[],top:0,acte:0,category:[],items:[],hots:[],productList:[],saleMostProducts:[],isshow:!0,show:!1,rows:[]}},methods:{act:function(){this.acte=0,this.isshow=!0,this.show=!1},acts:function(){this.acte=1,this.isshow=!1,this.show=!0},init:function(){var t=this;(0,a.bannerAds)().then((function(i){t.list=i.data.items})),(0,a.categorys)("1308336521604599809").then((function(i){t.category=i.data.category.children})),(0,a.recommendList)().then((function(i){t.items=i.data.items})),(0,a.hotList)().then((function(i){t.hots=i.data.items})),(0,a.lejuLatestProducts)().then((function(i){t.productList=i.data.productList})),(0,a.saleMostProducts)().then((function(i){t.saleMostProducts=i.data.items})),(0,a.findArticleByPage)(1,10).then((function(i){console.log(i),t.rows=i.data.rows}))},golist:function(t){uni.navigateTo({url:"../kind/list/list?id=".concat(t)})}},onLoad:function(t){this.init()}};i.default=n},"5abe":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home[data-v-d32a9998]{height:100vh;padding-bottom:500px}.home .swiper[data-v-d32a9998]{height:198px}.home .swipers[data-v-d32a9998]{position:relative;width:100%}.home .swipers .light[data-v-d32a9998]{width:fit-comtent;position:absolute;top:50%;left:50%;z-index:999;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-weight:600}.home .img[data-v-d32a9998]{width:100%;height:100%}.home .nav[data-v-d32a9998]{position:fixed;top:0;left:0;z-index:99;width:100%;height:60px;display:flex;justify-content:space-around;align-items:center}.home .nav .chat[data-v-d32a9998]{width:20%;height:21px;text-align:center}.home .nav .chat uni-image[data-v-d32a9998]{width:21px;height:21px}.home .nav .tui[data-v-d32a9998]{width:60%;display:flex;align-items:center;justify-content:center;text-align:center}.home .nav .tui .tuijian[data-v-d32a9998]{display:flex;align-items:center;flex-direction:column;width:30%;height:27.8px;text-align:center;color:#fff}.home .nav .tui .pinpai[data-v-d32a9998]{display:flex;align-items:center;flex-direction:column;width:30%;text-align:center;color:#fff;height:27.8px}.home .nav .tui .active[data-v-d32a9998]{width:30px;height:2px;background:#fff;border-radius:3px;text-align:center;margin-top:5px}.home .nav .cart[data-v-d32a9998]{display:flex;width:20%;margin-right:10px}.home .nav .cart uni-image[data-v-d32a9998]{width:21px;height:21px;margin:10px}.home .category[data-v-d32a9998]{width:100%;height:100px;display:flex;justify-content:space-around;align-items:center}.home .category .categorya .img[data-v-d32a9998]{width:40px;height:40px;border-radius:2px}.home .section[data-v-d32a9998]{display:flex;justify-content:flex-start;align-items:center;width:335px;height:48px;margin:20px auto;background-color:#fff;font-size:14px;color:#3e3e3e;line-height:48px;text-indent:.5em}.home .section .icon-notify[data-v-d32a9998]{width:24px;height:24px;margin-left:5px;-webkit-animation:warn-data-v-d32a9998 .5s ease-out 0s infinite;animation:warn-data-v-d32a9998 .5s ease-out 0s infinite}.home .section .icon-notify uni-image[data-v-d32a9998]{width:100%;height:100%;margin-bottom:5px;margin-right:10px}@-webkit-keyframes warn-data-v-d32a9998{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}30%{opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:.5}}@keyframes warn-data-v-d32a9998{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}30%{opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:.5}}.home .section .text[data-v-d32a9998]{font-weight:600;color:orange;margin-left:5px}.home .section .swiper[data-v-d32a9998]{flex:1;height:100%;font-size:14px}.home .section .swiper .swiper-item[data-v-d32a9998]{width:100%;height:100%;display:flex;justify-content:space-around}.home .section .swiper .swiper-item .shop[data-v-d32a9998]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.home .section .swiper .swiper-item .shop .shop-a[data-v-d32a9998]{flex:1;font-size:12px;line-height:15px;text-decoration:line-through}.home .section .swiper .swiper-item .shop .shop-b[data-v-d32a9998]{flex:1;font-size:12px;line-height:15px;color:red;font-weight:600}.home .hot[data-v-d32a9998]{width:100%;height:20px;padding:15px;font-size:16px;color:#3e3e3e;letter-spacing:1px;font-weight:600}.home .swiper-a[data-v-d32a9998]{width:100%;height:115px;text-align:center}.home .swiper-a[data-v-d32a9998]  .uni-swiper-slides{width:125px;height:115px}.home .swiper-a .img[data-v-d32a9998]{width:105px;height:88px;margin:0 10px 0 10px}.home .xin[data-v-d32a9998]{width:100%;height:140px;overflow:hidden}.home .productList[data-v-d32a9998]{width:100%;height:320px;display:flex;overflow:auto}.home .productList .productList-a[data-v-d32a9998]{width:295px;height:130px;display:flex;background:#fff;margin:0 20px 0 20px;border-radius:10px}.home .productList .productList-a .img[data-v-d32a9998]{margin:20px;width:97px;height:84px}.home .productList .productList-a .img uni-image[data-v-d32a9998]{width:100%;height:100%}.home .productList .productList-a .namess[data-v-d32a9998]{flex:1;width:135px;height:80px;padding-left:15px;padding-top:25px;padding-bottom:25px;display:flex;flex-direction:column;justify-content:space-around}.home .saleMost[data-v-d32a9998]{display:flex;width:100%;height:2000px;flex-wrap:wrap;justify-content:space-around;padding-bottom:60px}.home .saleMost .Products[data-v-d32a9998]{width:44%;box-sizing:border-box;background:#fff;margin:5px}.home .saleMost .Products .img[data-v-d32a9998]{width:100%;height:119px}.home .saleMost .Products .img uni-image[data-v-d32a9998]{width:100%;height:119px}.home .saleMost .Products .name[data-v-d32a9998]{color:#3e3e3e;margin-top:4px;font-weight:400;margin-left:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.home .saleMost .Products .shows[data-v-d32a9998]{display:flex;justify-content:space-between;align-items:center;margin:10px}.home .brand-c[data-v-d32a9998]{height:100vh;padding-bottom:500px;padding-top:60px}',""]),t.exports=i},"764d":function(t,i,e){"use strict";e.r(i);var a=e("d9fe"),n=e("003f");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("d3c9");var o,r=e("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d32a9998",null,!1,a["a"],o);i["default"]=d.exports},9586:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA45JREFUWAnFmE1IVUEUx32aEX1YWVL2pVlgbYIWfUFGEFKLsJZtgoIoW0SthNoItXBjuxSjthFUiygKQigIK6EvKCpsY2GWJUSWEWH5+v1rzmPeu+8+77Pr88DvnZk5Z86ZO3PvnbkvUZSHJJPJStwbYBsshUWwAL7CB3gPT+AqPEokEkl0/MJAGuA+jEJUeYfjSZiVz4gSuZwJtgF7K2zO8Bui3gOakY+gpJqtagcqJYOUTkE7M/Y71ZpvgcEchV9gMkyhHeqhNCwetlpogpfgSyeVuWH9QtvpVArnvUgjlDtA909kwb8EDkA/mLymUBs5iBzp4A9mkPqWvAJkONN/DtwCE91b0S4Ox2PWC/0KlmfEH1eVOJqtM2DSTWFazmA4bAS7ZzQzsQzGkhIvAZfApM1sWTVeXc5T98x/LVPWBDQSdzo8dXl08auz+mLY5ZykOrI6xdRIfK2EiV6gQcH6wHno0V4Y9Ii3hRxXXD6pVWnRaagEewPnXte0nuOvkG8dmBxPi0Rro1nQ9WnGCayQq8/l7U5LQ+NlZ/iCDn0Dp3WKoUKuNpdXq5Pa74qJvcTF72GvGYkhV9QQz52j9tPF1kkD0qYo0UZZSPHz2RiKNCCdZyTatQspfj4bw98B6XAlKfunCvabum/I+N2yaoZs6lLTZsYJ1v4G+8ly+QOqtsYC6RovT7+VNaDHrlLF45d9bzHvePUOF+4tT3efhdaA/P1ktxkmUnPhFcRf73J0BnLhYG/NHspTAg4xN5CjGUx2BsJjaTYrujHgEGMD8cthyOXTuVsvxnShcSYMOCfp8nSP+GrEPuvySO0PjYzxsOd4m3LsS0fMfV6Oe5RLcg2oGIebXodzlHXTxyLEWgE/XPxvaP+xz54DpzLwv6euUfffqNk7Rmglzl4w0VdwtBXAUVfSCyYvKGyNkDOnCzF0nn5oQdEXINoK4FgBd8GXG1TqYMwg+Oii9El1yB8l9fmgzyuTdt+ucvCRcx700GGtBY7AVNcspW/166DzjP7xGIDZoDPNMtgOa8Gkjjdxl1WIq/OX6lWurQX7CbOPqQlQAxfBzt0UI8szPOdlJqFtJdhrRsGaMn3GrNOpGrQMd8A+KCkGpJeWVtA/J6GCfQ18BpODcg5dstBIGIigJdTxQUcWHa50ptKO3c/0D6MjCXE24ai9bAaMwh6YXGFQ9fATJG8mdzQuOwPRP3S9cPoPNr//PT1GeEAAAAAASUVORK5CYII="},"98ec":function(t,i,e){"use strict";var a=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.bannerAds=s,i.categorys=o,i.recommendList=r,i.hotList=d,i.lejuLatestProducts=c,i.saleMostProducts=u,i.findArticleByPage=l;var n=a(e("edf2"));function s(){return(0,n.default)({url:"/lejuClient/home/bannerAds"})}function o(t){return(0,n.default)({url:"/lejuClient/home/categorys/".concat(t)})}function r(){return(0,n.default)({url:"/lejuClient/home/recommendList"})}function d(){return(0,n.default)({url:"/lejuClient/home/hotList"})}function c(){return(0,n.default)({url:"/lejuClient/home/lejuLatestProducts"})}function u(){return(0,n.default)({url:"/lejuClient/home/saleMostProducts"})}function l(t,i){return(0,n.default)({url:"/lejuClient/productArticle/findArticleByPage/".concat(t,"/").concat(i)})}},b644:function(t,i,e){var a=e("5abe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("2217576c",a,!0,{sourceMap:!1,shadowMode:!1})},b928:function(t,i){t.exports="data:image/png;base64,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"},c991:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABIlJREFUWAnNmF9oVnUYx/f6bxgOTbMyQgfO2kUXgUJ4UwQjxIuQKLzLK9HpEEwaYXbh7S6iq0JECha0GkGJZa0mKV3MyZiC4AYKu3G1DcZMNy2N0+d73t9z+r3nPaf3nO390wPf93l+z/P8nuf7/s55f+f3nkLTIiUIgseY+jLoAG3gKYcn0ZJpMOVwE/0zuFQoFBbQtRXINYP9YBA8AHlFczRXNZrzsC1kSaboGvIOgHfAMwlz5vD9DrSKgkQrKzwN1oG4TOL4EJxile/Fg7nHkNwDZoAv9xh8A7pAe6WiynG5mqO5vqj2nko1UuNMXg0+8StiT4MPwPrUiRUCmutqqJYv6rW6wvTSMBM2getelb+w3wf5CpWWLRmpFjgBVNtEPTeVJKYNSNwAfJJjjLen5S/Vr9pgHJio94b/rEtCC7hiM9A/Am1DNRX1cL1QoQzz2ZLalGBfMS/8/IXPql3q1KYuQC+RVU+TvsQ5RHdZBnoUaEuqq6in640KZVcJAVy6sW8VY8FD9IslCXUcqDcQB4k4/XtVGRyV10lPHXkltoJHj5FBH42SGIy4wB10zX88UeMUQxyAuEhGwjQMPTVMzqTMrbsbQmeMFLp9GQz2eix6PbvRps9lbxNs+x3zeXTiIQW/9ldtzOl7m/ta5DwnVPqWqgVSaxIrgAUg6RfRodAMgrGk4sR2A7tfpHen5K0i9h0wkb0qJTdrTT0VJUMiOhmaQTAQL4pf32rKxU1pXLby+A5bgqcPL7HmgKs1qXv0CVdsJl6U8ePATuwW1lj+uDwfdzBO8uWpOetqrhfRP9xgrdOR4kCrxGuRo2hcdf6Yu2kw7mBc5stZ0w7pk7r0dh+MJjRSvA1cAHed1v+jRCHeDXQrCd2JSTiJZapJ3gSQXNSkL0Oz+Nhq+GZvXw5Oeqzbo7RXl37YBVegX7HE/4F+HQ7iJLmsFd3qVlTqi6K/8Z9wOed4aVU3howwbC/9E7u10TThsBnYZf8+4oPzDWDyeRRokAGRs0YG/WZEg4E2dv8vyL4oWGcDHm8Bkwtl7YlsA9qCJHqj8VJZUo0d9NRJbhpIxCHpgRHub2+HKcWP26hna8wtKk8v/ajV0+REFEwyyOq1TPRvoOZbFj1eALa5Ywank7iV+EhaCT5TtpNH6PdA2UGkZOIiBqoJjoD7wKQPQ/t7NiH5pM10+lC2mdmyqLkD2OnIWulUvzJbBS+LSZ1WAX3MCy3KpMYy8BoYBL7MMfD/aZTVt0dUWcA5znuBR54dmTTQy9wFcIOT0bwF8C/H1hFSrx13gg7wKoi/YPsBXydzJ9CLE5q1ApMuvwpOnYDOW9Bp/Z3RD3AG/O18SUqxr0Hmd1qVVtTnFq4oxfVC4Dh4FzT7Cdg6faWdwB4SGwI/ga9YwXF0ZslDVKugF64fgS1eh1+xvwU6OOj0LwRgGkw53ERfhNxddPUFYv6l9zdjQuETZB+66ttW7m8CCZ8ow1C0sh+DpP9NuXtUZQJk4kSH8e2oSvFqFvGIzmIfBNmfGNUkUqkWxHSA/RQUT9iVJtQw/g/cUuwE1FyuQgAAAABJRU5ErkJggg=="},d3c9:function(t,i,e){"use strict";var a=e("b644"),n=e.n(a);n.a},d9fe:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"home"},[a("v-uni-view",{staticClass:"nav"},[a("v-uni-view",{staticClass:"chat"},[a("v-uni-image",{attrs:{src:e("c991")}})],1),a("v-uni-view",{staticClass:"tui"},[a("v-uni-view",{staticClass:"tuijian",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.act.apply(void 0,arguments)}}},[t._v("推荐"),a("v-uni-view",{class:0==t.acte?"active":""})],1),a("v-uni-view",{staticClass:"pinpai",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.acts.apply(void 0,arguments)}}},[t._v("品牌"),a("v-uni-view",{class:1==t.acte?"active":""})],1)],1),a("v-uni-view",{staticClass:"cart"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:e("9586")}})],1),a("v-uni-view",[a("v-uni-image",{attrs:{src:e("1410")}})],1)],1)],1),t.isshow?a("v-uni-view",{staticClass:"home-c"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.list,(function(i){return a("v-uni-swiper-item",{key:i.id,staticClass:"swipers"},[a("v-uni-image",{staticClass:"img",attrs:{src:i.pic}}),a("v-uni-view",{staticClass:"light"},[t._v(t._s(i.name)+"家具系列")])],1)})),1),a("v-uni-view",{staticClass:"category"},t._l(t.category,(function(i){return a("v-uni-view",{key:i.id,staticClass:"categorya",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.golist(i.id)}}},[a("v-uni-view",[a("v-uni-view",[a("v-uni-image",{staticClass:"img",attrs:{src:i.icon}})],1),a("v-uni-view",[t._v(t._s(i.name))])],1)],1)})),1),a("v-uni-view",{staticClass:"section"},[a("v-uni-view",{staticClass:"icon-notify"},[a("v-uni-image",{attrs:{src:e("b928"),mode:""}})],1),a("v-uni-view",{staticClass:"text"},[t._v("限时活动：")]),a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0,interval:3e3,duration:1e3,vertical:!0,circular:!0}},t._l(t.items,(function(i){return a("v-uni-swiper-item",{key:i.id},[a("v-uni-view",{staticClass:"swiper-item"},[t._v(t._s(i.name)),a("v-uni-view",{staticClass:"shop"},[a("v-uni-view",{staticClass:"shop-a"},[t._v("原价:"+t._s(i.price)+"元")]),a("v-uni-view",{staticClass:"shop-b"},[t._v("现价:"+t._s(i.promotionPrice)+"元")])],1)],1)],1)})),1)],1),a("v-uni-view",{staticClass:"hot"},[t._v("热门推荐")]),a("v-uni-swiper",{staticClass:"swiper-a",attrs:{autoplay:!0,interval:3e3,duration:1e3,circular:!0}},t._l(t.hots,(function(i){return a("v-uni-swiper-item",{key:i.id},[a("v-uni-view",[a("v-uni-view",[a("v-uni-image",{staticClass:"img",attrs:{src:i.pic}})],1),a("v-uni-view",[t._v(t._s(i.name))])],1)],1)})),1),a("v-uni-view",{staticClass:"hot"},[t._v("新品推荐")]),a("v-uni-view",{staticClass:"xin"},[a("v-uni-view",{staticClass:"productList"},t._l(t.productList,(function(i){return a("v-uni-view",{key:i.id,staticClass:"productList-a"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:i.pic}})],1),a("v-uni-view",{staticClass:"namess"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"price"},[t._v("价格:"+t._s(i.price))])],1)],1)})),1)],1),a("v-uni-view",{staticClass:"hot"},[t._v("猜你喜欢")]),a("v-uni-view",{staticClass:"saleMost"},t._l(t.saleMostProducts,(function(i){return a("v-uni-view",{key:i.id,staticClass:"Products"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:i.pic}})],1),a("v-uni-view",{staticClass:"name"},[t._v(t._s(i.brandName))]),a("v-uni-view",{staticClass:"shows"},[a("v-uni-view",[t._v("￥"+t._s(i.price))]),a("v-uni-view",[t._v("乐居")])],1)],1)})),1)],1):t._e(),t.show?a("v-uni-view",{staticClass:"brand-c"},t._l(t.rows,(function(i){return a("v-uni-view",[a("v-uni-view",[a("v-uni-image",{attrs:{src:i.coverImg,mode:""}}),t._v(t._s(i.title))],1)],1)})),1):t._e()],1)},s=[]},edf2:function(t,i,e){"use strict";var a=e("4ea4");e("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("13b7"));function s(t){return new Promise((function(i,e){uni.request({url:n.default+t.url,timeout:5e3,data:t.data,method:t.method,header:{token:uni.getStorageSync("token")},success:function(t){i(t.data)}})}))}var o=s;i.default=o}}]);