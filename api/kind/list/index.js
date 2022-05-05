import request from "@/api/request.js"

// 详情
function findProductList(start,limit,data){
	return request({
		url:`/lejuClient/product/findProductList/${start}/${limit}`,
		method:"post",
		data
	})
}


export {
findProductList,
}