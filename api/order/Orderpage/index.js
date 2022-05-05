import request from "@/api/request.js"

// 查询订单列表
function findAllOrders(){
	return request({
		url:`/lejuClient/order/findAllOrders`,
	})
}
// 取消订单后,不会删除订单
function cancelOrder(orderId){
	return request({
		url:`/lejuClient/order/cancelOrder/${orderId}`,
		method:"post"
	})
}
// 确认收货
function receiveDone(data){
	return request({
		url:`/lejuClient/order/receiveDone`,
		method:"post",
		data
	})
}
// 删除订单
function _clearOrderFocus(id){
	return request({
		url:`/lejuClient/order/_clearOrderFocus?orderId=${id}`,
		method:"post",
	})
}
//查看退单列表 用于售后 申请状态：0->待处理；1->退货中；2->已完成；3->已拒绝
function orderReturnApplys(){
	return request({
		url:`/lejuClient/orderReturn/orderReturnApplys`,
	})
}

// 申请退单
function addOrderReturnApply(data){
	return request({
		url:`/lejuClient/orderReturn/addOrderReturnApply`,
		method:"post",
		data
	})
}
// 获取退单地址
function getCompanyAddrss(){
	return request({
		url:`/lejuClient/orderReturn/getCompanyAddrss`,
	})
}
//退单图片上传
function uploadImg(data){
	return request({
		url:`/lejuClient/orderReturn/uploadImg`,
		method:"post",
		data
	})
}
//查看退单明细
function orderReturn(id){
	return request({
		url:`/lejuClient/orderReturn/${id}`,
	})
}
// 获取订单明细
function getPreOrderById(orderId){
	return request({
		url:`/lejuClient/order/getPreOrderById/${orderId}`,
	})
}
export {
findAllOrders,
cancelOrder,
receiveDone,
_clearOrderFocus,
orderReturnApplys,
addOrderReturnApply,
getCompanyAddrss,
uploadImg,
orderReturn,
getPreOrderById
}