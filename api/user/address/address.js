import request from "@/api/request.js"

// 获取地址
function findAllAddress(){
	return request({
		url:`/lejuClient/address/findAllAddress`,
	})
}
//获取详细地址信息
function updateAddressInfo(data){
	return request({
		url:`/lejuClient/address/updateAddressInfo`,
		method:"post",
		data
		
	})
}
// 更改默认地址
function switchDefault(addressId,defaultStatus){
	return request({
		url:`/lejuClient/address/switchDefault/${addressId}/${defaultStatus}`,
		method:"post",
		
	})
}
// 删除地址
function delAddressInfo(addressId){
	return request({
		url:`/lejuClient/address/delAddressInfo/${addressId}`,
		method:"DELETE",
	})
}
// 新增地址
function addAddressInfo(data){
	return request({
		url:`/lejuClient/address/addAddressInfo`,
		method:"post",
		data
	})
}
export {
findAllAddress,
updateAddressInfo,
switchDefault,
delAddressInfo,
addAddressInfo
}