
import request from "@/api/request.js"

// 轮播
function bannerAds(){
	return request({
		url:"/lejuClient/home/bannerAds"
	})
}
// 分类名称
function categorys(parentId){
	return request({
		url:`/lejuClient/home/categorys/${parentId}`
	})
}
//现实活动
function recommendList(){
	return request({
		url:`/lejuClient/home/recommendList`
	})
}
//最热推荐
function hotList(){
	return request({
		url:`/lejuClient/home/hotList`
	})
}
// 推荐新品
function lejuLatestProducts(){
	return request({
		url:`/lejuClient/home/lejuLatestProducts`
	})
}
// 猜你喜欢 销量最高
function saleMostProducts(){
	return request({
		url:`/lejuClient/home/saleMostProducts`
	})
}
//平拍管理
function findArticleByPage(start,limit){
	return request({
		url:`/lejuClient/productArticle/findArticleByPage/${start}/${limit}`
	})
}
export {
	bannerAds,
	categorys,
	recommendList,
	hotList,
	lejuLatestProducts,
	saleMostProducts,
	findArticleByPage
}