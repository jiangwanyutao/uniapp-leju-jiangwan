(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"0cd6":function(t,e,r){"use strict";var i=r("836f"),n=r.n(i);n.a},"13b7":function(t,e,r){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i="https://leju.bufan.cloud";var n=i;e.default=n},"57ac":function(t,e,r){"use strict";r("4160"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r("b2c8"),n={data:function(){return{id:"",order:[],list:[],sku:[],addressInfo:""}},filters:{statusText:function(t){return 0==t?"等待支付中":1==t?"确认付款,等待发货":2==t?"已发货":3==t?"已收货":4==t?"已退单":"无效订单"}},methods:{init:function(){var t=this;this.initSelAddress(),(0,i.getPreOrderById)(this.id).then((function(e){e.data.orderItems.forEach((function(t){t.productAttr=JSON.parse(t.productAttr)})),t.list=e.data.orderItems,t.sku=e.data.orderItems.productAttr,t.order=e.data.orderBase}))},initSelAddress:function(){var t=uni.getStorageSync("selectAddress");t&&(this.addressInfo=t)},gopay:function(){var t=[];this.list.forEach((function(e){var r={cartId:e.cartId,productId:e.productId,productQuantity:e.productQuantity,productSkuId:e.productSkuId};t.push(r)}));var e={addressId:this.addressInfo.id,orderId:this.id,orderItemList:t,payType:0,sourceType:1};(0,i.addConfirmOrder)(e).then((function(t){t.success&&uni.redirectTo({url:"/pages/order/payment/payment?orderId=".concat(t.data.orderId)})}))}},onLoad:function(t){this.id=t.id},onShow:function(){this.init()}};e.default=n},"5eb3":function(t,e,r){"use strict";r.r(e);var i=r("57ac"),n=r.n(i);for(var d in i)"default"!==d&&function(t){r.d(e,t,(function(){return i[t]}))}(d);e["default"]=n.a},"762f":function(t,e,r){"use strict";r.r(e);var i=r("dc32"),n=r("5eb3");for(var d in n)"default"!==d&&function(t){r.d(e,t,(function(){return n[t]}))}(d);r("0cd6");var s,a=r("f0c5"),o=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,"2f9cf9f1",null,!1,i["a"],s);e["default"]=o.exports},"836f":function(t,e,r){var i=r("ff8d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("34b2fc96",i,!0,{sourceMap:!1,shadowMode:!1})},b2c8:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getPreOrderById=d,e.addConfirmOrder=s,e.payConfirm=a;var n=i(r("edf2"));function d(t){return(0,n.default)({url:"/lejuClient/order/getPreOrderById/".concat(t)})}function s(t){return(0,n.default)({url:"/lejuClient/order/addConfirmOrder",method:"post",data:t})}function a(t){return(0,n.default)({url:"/lejuClient/order/payConfirm",method:"post",data:t})}},dc32:function(t,e,r){"use strict";var i;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return d})),r.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"order"},[r("v-uni-view",{staticClass:"wiet"},[t._v(t._s(t._f("statusText")(t.order.status)))]),t.addressInfo.name?r("v-uni-navigator",{staticClass:"address-block",attrs:{"open-type":"navigate",url:"/pages/user/address/address?type=select"}},[r("div",{staticClass:"send-name"},[t._v("姓名:"+t._s(t.addressInfo.name)+" 电话号码: "+t._s(t.addressInfo.phoneNumber))]),r("div",{staticClass:"address"},[t._v("收货地址:\n\t\t\t"+t._s(t.addressInfo.province)+"-"+t._s(t.addressInfo.city)+"-"+t._s(t.addressInfo.region)+t._s(t.addressInfo.detailAddress))])]):r("v-uni-navigator",{staticClass:"address-block",attrs:{"open-type":"navigate",url:"/pages/user/address/address?type=select"}},[r("v-uni-view",[t._v("去选择收货地址")])],1),r("v-uni-view",{staticClass:"order-card"},[r("v-uni-view",{staticClass:"order-title"},[r("v-uni-view",{staticClass:"title"},[t._v("订单编号:"+t._s(t.order.orderSn))]),r("v-uni-view",{staticClass:"status"},[t._v("等待支付")])],1),t._l(t.list,(function(e){return r("v-uni-view",{key:e.id,staticClass:"skulist"},[r("v-uni-image",{attrs:{src:e.productPic}}),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"info-a"},[r("v-uni-view",{staticClass:"title"},[t._v(t._s(e.productName))]),r("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(e.productPrice)+"元")])],1),r("v-uni-view",{staticClass:"info-b"},[r("v-uni-view",[t._v("编号:"+t._s(e.productSn))]),r("v-uni-view",[t._v("数量:X"+t._s(e.productQuantity))])],1),r("v-uni-view",{staticClass:"info-c"},[t._v("规格:"),t._l(e.productAttr,(function(e){return r("v-uni-view",{key:e.value,staticClass:"info-d"},[t._v(t._s(e.key)+":"+t._s(e.value)+",")])}))],2)],1)],1)})),r("v-uni-view",{staticClass:"total-price"},[t._v("合计:"+t._s(t.order.totalAmount)+"元")]),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"btns",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gopay.apply(void 0,arguments)}}},[t._v("确认付款")])],1)],2)],1)},d=[]},edf2:function(t,e,r){"use strict";var i=r("4ea4");r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r("13b7"));function d(t){return new Promise((function(e,r){uni.request({url:n.default+t.url,timeout:5e3,data:t.data,method:t.method,header:{token:uni.getStorageSync("token")},success:function(t){e(t.data)}})}))}var s=d;e.default=s},ff8d:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.order[data-v-2f9cf9f1]{margin:0 30px}.order .wiet[data-v-2f9cf9f1]{font-size:18px;color:#494949;height:44px;border-bottom:1px solid #ccc;line-height:44px;box-sizing:border-box}.order .address-block[data-v-2f9cf9f1]{font-size:%?28?%;color:#494949;border-bottom:1px solid #ccc;box-sizing:border-box;padding:%?30?% 0}.order .order-card[data-v-2f9cf9f1]{width:336px;box-sizing:border-box;padding:18px;border-radius:12px;background-color:#fff;margin:15px auto;font-size:12px;color:#3e3e3e}.order .order-title[data-v-2f9cf9f1]{width:100%;display:flex;justify-content:space-around;align-items:center;border-bottom:1px solid #f1ece7;padding-bottom:15px}.order .skulist[data-v-2f9cf9f1]{width:100%;display:flex;justify-content:flex-start;border-bottom:1px solid #f1ece7;padding:15px 0}.order .skulist uni-image[data-v-2f9cf9f1]{width:81px;height:81px}.order .skulist .info[data-v-2f9cf9f1]{width:235px;margin-left:14px}.order .skulist .info-a[data-v-2f9cf9f1]{display:flex;justify-content:space-between;align-items:center}.order .skulist .info-b[data-v-2f9cf9f1]{display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#8d8d8d;line-height:15px;margin-top:20px}.order .skulist .info-c[data-v-2f9cf9f1]{display:flex;font-size:11px;color:#8d8d8d;line-height:15px;margin-top:2px}.order .skulist .info-c .info-d[data-v-2f9cf9f1]{margin-left:5px}.order .total-price[data-v-2f9cf9f1]{width:100%;height:18px;text-align:right;font-size:13px;padding-top:10px;line-height:18px}.order .btn[data-v-2f9cf9f1]{width:100%;margin-top:10px;display:flex;flex-wrap:wrap;flex-direction:column;align-content:flex-end}.order .btn .btns[data-v-2f9cf9f1]{width:62px;height:25px;border:1px solid #2d4f43;font-size:13px;border-radius:5px;color:#2d4f43;text-align:center;line-height:25px;margin-left:16px}',""]),t.exports=e}}]);