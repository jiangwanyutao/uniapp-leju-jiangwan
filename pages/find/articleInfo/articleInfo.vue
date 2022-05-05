<template>
	<!-- 详情页 -->
	<view class="articlelofo">
		<view class="title">
            {{productArticle.title}}
		</view>
		<view class="auther">
			作者：{{productArticle.author}}
		</view>
		<view class="modifyTime">
			时间：{{productArticle.modifyTime}}
		</view>
		<view class="coverImg">
			概要描述
			<image :src="productArticle.coverImg"></image>
		</view>
		<mp-html :content="productArticle.content2" />
	</view>
</template>

<script>
	import {
		productArticle
	} from "../../../api/find/index.js"
	export default {
		data() {
			return {
				id: "",
				productArticle:[],
				
			}
		},
		methods: {
			init() {
				productArticle(
					this.id
				).then(res => {
					console.log(res)
					this.productArticle=res.data.productArticle
					this.total = res.data.total;
					uni.setNavigationBarTitle({
						title: res.data.productArticle.title
					})
				})
			}
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.init()
		}
	}
</script>

<style scoped lang="scss">
.articlelofo{
	padding:30px;
	.title{
		font-size:30px;
		margin: 5px;
	}.auther{
		margin: 5px;
	}
	.modifyTime{
		margin: 5px;
	}

}
</style>
