
import request from "@/api/request.js"

// 轮播
function findCategory(id){
	return request({
		url:`/lejuClient/productCategory/findCategory/${id}`
	})
}

export {
findCategory
}