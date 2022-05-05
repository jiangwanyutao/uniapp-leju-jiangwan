import request from "@/api/request.js"

// 获取购物车
function getPreOrderById(orderId){
	return request({
		url:`/lejuClient/order/getPreOrderById/${orderId}`,
	})
}
//提交确认订单
function addConfirmOrder(data){
	return request({
		url:`/lejuClient/order/addConfirmOrder`,
		method:"post",
		data
	})
}
//确认支付
function payConfirm(data){
	return request({
		url:`/lejuClient/order/payConfirm`,
		method:"post",
		data
	})
}
export {
getPreOrderById,
addConfirmOrder,
payConfirm
}