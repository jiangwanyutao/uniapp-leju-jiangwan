import request from "@/api/request.js"

// 获取购物车
function findAllCartItem(){
	return request({
		url:`/lejuClient/cart/findAllCartItem`,
	})
}
// 删除单个购物车
function delCartItems(data){
	return request({
		url:`/lejuClient/cart/delCartItems`,
		method:"post",
		data
	})
}
//生成确认单
function addPreOrder(data){
	return request({
		url:`/lejuClient/order/addPreOrder`,
		method:"post",
		data
	})
}
export {
findAllCartItem,
delCartItems,
addPreOrder
}