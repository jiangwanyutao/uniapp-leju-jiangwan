(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-address"],{"05ba":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-4498f0a0]{width:100%}.content .list[data-v-4498f0a0]{width:100%;justify-content:center;align-items:center}.content .list .row[data-v-4498f0a0]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;width:94%;padding:10px 0;border-bottom:1Px solid #ccc;margin:0 auto}.content .list .row .name[data-v-4498f0a0]{display:flex;width:70%;margin-left:15px;align-items:baseline;margin-bottom:10px;flex-wrap:wrap}.content .list .row .name .title[data-v-4498f0a0]{font-size:14px}.content .list .row .name .defult[data-v-4498f0a0]{font-size:11px;background-color:#354e44;color:#fff;padding:0 9px;border-radius:4px;margin-left:10px}.content .list .row .tel[data-v-4498f0a0]{width:100%;margin-top:5px;font-size:12px;color:#999}.content .list .right[data-v-4498f0a0]{align-items:center;margin-left:10px}.content .list .right .icon[data-v-4498f0a0]{display:flex;justify-content:center;align-items:center;width:40px;height:30px;border-left:solid .5px #aaa;font-size:20px;color:#777}.content .list .right .icon uni-image[data-v-4498f0a0]{width:20px;height:20px;opacity:.8}.content .add[data-v-4498f0a0]{position:fixed;display:flex;bottom:0;width:100%;height:35px;justify-content:center;align-items:center}.content .add .btn[data-v-4498f0a0]{display:flex;box-shadow:0 5px 10px rgba(0,0,0,.4);width:70%;height:35px;border-radius:80px;background-color:#354e44;color:#fff;justify-content:center;align-items:center}',""]),t.exports=e},"13b7":function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i="https://leju.bufan.cloud";var a=i;e.default=a},"7e2d":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.findAllAddress=s,e.updateAddressInfo=r,e.switchDefault=o,e.delAddressInfo=d,e.addAddressInfo=c;var a=i(n("edf2"));function s(){return(0,a.default)({url:"/lejuClient/address/findAllAddress"})}function r(t){return(0,a.default)({url:"/lejuClient/address/updateAddressInfo",method:"post",data:t})}function o(t,e){return(0,a.default)({url:"/lejuClient/address/switchDefault/".concat(t,"/").concat(e),method:"post"})}function d(t){return(0,a.default)({url:"/lejuClient/address/delAddressInfo/".concat(t),method:"DELETE"})}function c(t){return(0,a.default)({url:"/lejuClient/address/addAddressInfo",method:"post",data:t})}},"9cb9":function(t,e,n){var i=n("05ba");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("72319e53",i,!0,{sourceMap:!1,shadowMode:!1})},c21b:function(t,e,n){"use strict";n.r(e);var i=n("e29c"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},c4ed:function(t,e,n){"use strict";var i=n("9cb9"),a=n.n(i);a.a},e29c:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("7e2d"),s=i(n("f24e")),r={mixins:[s.default],data:function(){return{list:[],isSelect:!1}},methods:{init:function(){var t=this;(0,a.findAllAddress)().then((function(e){console.log(e),t.list=e.data.items}))},edit:function(t){uni.navigateTo({url:"./add/add?addressId="+t.id})},add:function(){uni.navigateTo({url:"./add/add"})},select:function(t){this.isSelect&&(uni.setStorageSync("selectAddress",t),uni.navigateBack({delta:1}))}},onLoad:function(t){this.init(),"select"==t.type&&(this.isSelect=!0)},onShow:function(){this.checkLogin(this.init())}};e.default=r},e51f:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"list"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"row",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select(e)}}},[i("v-uni-view",{staticClass:"name"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name))]),e.defaultStatus?i("v-uni-view",{staticClass:"defult"},[t._v("默认")]):t._e(),i("v-uni-view",{staticClass:"tel"},[t._v(t._s(e.phoneNumber))])],1),e.address?i("v-uni-view",{staticClass:"address"},[t._v(t._s(e.province)+"-"+t._s(e.city)+"-"+t._s(e.region))]):t._e(),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"icon",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.edit(e)}}},[i("v-uni-image",{attrs:{src:n("f758"),mode:""}})],1)],1)],1)})),1),i("v-uni-view",{staticClass:"add"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("新增地址")])],1)],1)},s=[]},ec5a:function(t,e,n){"use strict";n.r(e);var i=n("e51f"),a=n("c21b");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("c4ed");var r,o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"4498f0a0",null,!1,i["a"],r);e["default"]=d.exports},edf2:function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("13b7"));function s(t){return new Promise((function(e,n){uni.request({url:a.default+t.url,timeout:5e3,data:t.data,method:t.method,header:{token:uni.getStorageSync("token")},success:function(t){e(t.data)}})}))}var r=s;e.default=r},f24e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{checkLogin:function(){var t=uni.getStorageSync("token");return!!t||(uni.showModal({title:"登录提示",content:"暂未登录，是否跳转到登录界面",success:function(t){t.confirm?uni.navigateTo({url:"/pages/mine/login/login"}):t.cancel&&(console.log("用户点击取消"),uni.showToast({title:"您取消了",icon:"error"}))}}),!1)}}},a=i;e.default=a},f758:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD50lEQVRYR71XXWhcRRT+zt1IMOBDUAtSghQRwVYQVArSooI/DxUFf2JNG2nQpgazuTPZNKJQ3YiCitk5mw2oUURtbdViQZEWkbai+FekIjTqk30RiwhS1IiSnT1y4txws6Sxe/fiPN2ZO3O+7/zPEAAYY8oAbgdwpc7bGB8x8w3LnbfW3iwi14rI8Wq1+l6yh+I4vpuI3m4DNH10WQLGmCcA7Ept3M3M9+mcjDEnAKxN/fwDwFdZCTVbwFr7rIjsDPLeCFZeS0T7nXO9SkBSYBMAXmTmU1kJpM8ZY6YAFMPaBDOXS6XS5d57tbgqzWkCvzDzqjyAVYa1dkZEtgd5s4VCoXdycvJbnQcSswB+TBM4YwC1SsoY8zqAfgB1AB5AJ4BFEiHoH09iIHFB2wQGBwfP6erq2gvgLgBzRNRPRH83Go3XAFygJADsB6BZByLakZsFxsfHz5ufn98rIrcC+BXAVmY+pEBxHF8TRdFbIrJmMf2IdjnnnsyFQLFYvLBQKKjmNwI4FUXRlkqlcjTtOmvthIg8FjR/xDn3dC4uGB0d7Wk0Ggq+gYhOisgWZv68KRueATAe1nYy83OLlkilYcsxMDIycikR7SOiq4joeyLqq1QqXzeBs3ohrFlm1vniyOwCa+0VIrIv5PM33vu+Wq22kGbJiOP4eSJ6UOciUqxWq9PNGZWJgAaVag7gEgDHiOhe59wPTT5/RUQGgs+HnHMv6Lcx5noA14W91DIBa+3GoPlqAJ/U6/XN09PTP6Wtaq3dIyJ9YW07M7+c/A8EkgCdaIlAqVS6yXuvmp8P4EMi2uyc05RbGNbac0VkD4A7wtIAM7/aFBNqgdYJxHF8GwANuC4ien9ubu6emZmZPxPhQ0ND3Z2dnbsBbAo+769Wq0pmychkgXDoMIBIRN7p7u7uLZfLjZRZLwKg5VfrgFY4jYk3m8FTMdCaBay1j4rIU4lAItrmnNPyiuHh4TUdHR0KvkFE/iIirQMHlgPPTMAY8wWA9QC0XS80EXU5gA+C5lcDOB0q4MEzgWciMDY2tqper/8M4AAz35nuZCJygojWafkNtf/ISuCZCBhjHgDwUhRFmyqVysFSqXSx917z+992SnTSe791amrqs/8Cz0rgXSLqEZGHiOh+EdkGoBDAvgtmX1J+c3VB6BXq61sAqCuOAfgYwBFmPn42WrdVB+I4fpiI5gF8ycyftgqYSx1oF7QtC+QJnikI/08CvwO4LK83wQqVUC+kSTFb0g31TNl772q12m95a67yUu+BRPwCgVyfZisQ7wkXmPSWgbwfp60YbpaZ11GIzLye52dD4LTepJhZ7xf4B6FPHtliIbO9AAAAAElFTkSuQmCC"}}]);