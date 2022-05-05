import request from "@/api/request.js"

// 登录接口
function doLogin(data){
	return request({
		url:`/lejuClient/login/doLogin`,
		method:"post",
		data
	})
}
// 获取登录的用户信息，根据返回的token
function getMemberInfo(){
	return request({
		url:`/lejuClient/login/getMemberInfo`,
	})
}

export {
doLogin,
getMemberInfo
}