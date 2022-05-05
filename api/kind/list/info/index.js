import request from "@/api/request.js"



//商品详情
function productDetail(productId){
	return request({
		url:`/lejuClient/product/productDetail/${productId}`,
	})
}
//添加购物车
function addCart(data){
	return request({
		url:`/lejuClient/cart/addCart`,
		method:"post",
		data
	})
}
export {
productDetail,
addCart
}