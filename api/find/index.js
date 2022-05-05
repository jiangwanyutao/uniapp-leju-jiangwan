import request from "@/api/request.js"

//文章列表展示
function findArticleByPage(start,limit){
	return request({
		url:`/lejuClient/productArticle/findArticleByPage/${start}/${limit}`,
	})
}
// 文章列表详情
function productArticle(id){
	return request({
		url:`/lejuClient/productArticle/productArticle/${id}`,
	})
}
// 品牌列表
// 文章列表详情
function findBrandsByPage(start,limit){
	return request({
		url:`/lejuClient/brand/findBrandsByPage/${start}/${limit}`,
	})
}
export {
findArticleByPage,
productArticle,
findBrandsByPage
}