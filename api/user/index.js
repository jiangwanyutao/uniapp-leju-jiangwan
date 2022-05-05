import request from "@/api/request.js"

// 登录接口
function updateMemberInfo(data){
	return request({
		url:`/lejuClient/member/updateMemberInfo`,
		method:"post",
		data
	})
}
// 重置密码
function resetPassword(username){
	return request({
		url:`/lejuClient/member/resetPassword/${username}`,
		method:"post",
	})
}
//注册账号
function register(data){
	return request({
		url:`/lejuClient/member/register`,
		method:"post",
		data
	})
}

export {
updateMemberInfo,
resetPassword,
register
}