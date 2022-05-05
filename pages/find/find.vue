<template>
	<view class="find">
		<!-- 顶部tab栏 -->
		<view class="tui">
			<view class="tuijian" @tap="act">
				精选文章
				<view :class="acte==0?'active':''">

				</view>
			</view>
			<view class="pinpai" @tap="acts">
				品牌列表
				<view :class="acte==1?'active':''">
				</view>
			</view>
		</view>
		<!-- 精选文章 -->
		<view class="article-list" v-if="isshow">
			<view class="article-block" v-for="(item,idx) in rows">
				<view class="cover-img" @tap="articles(item.id)">
					<image :src="item.coverImg" class="img"></image>
					<view class="ctitle">
						<view class="etitle">
							{{item.title}}
						</view>
						<view class="dtitle">
							{{item.author}}
						</view>
					</view>
				</view>
				<view class="btns-bar">
					<view class="view-block">
						<uni-icons type="eye" size="30"></uni-icons>
						<view class="eye">
							{{item.viewCount}}
						</view>
					</view>
					<view class="share">
						<uni-icons type="star" size="30" :color="item.isCollected ? 'red' : '' "
							@tap="collected(item.id,idx)"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<!-- 品牌列表-->
		<view class="pin" v-if="show">
			<view class="ullsit" v-for="item in list" :key="item.id">
				<view class="pr">
					<image :src="item.bigPic" mode=""></image>
				</view>
				<view class="name">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		findArticleByPage,
		findBrandsByPage
	} from "../../api/find/index.js"
	export default {
		data() {
			return {
				acte: 0,
				start: 1,
				rows: [],
				isCollected: false,
				isshow: true,
				show: false,
				total: "",
				list: []
			}
		},
		methods: {
			act() {
				this.acte = 0;
				this.isshow = true,
					this.show = false
				uni.pageScrollTo({
					scrollTop: 0
				});
			},
			acts() {
				this.acte = 1;
				this.isshow = false,
					this.show = true
				uni.pageScrollTo({
					scrollTop: 0
				});
			},
			init() {
				// 页面初始值
				findArticleByPage(
					this.start,
					10
				).then(res => {
					// console.log(res)
					// 先判断本地存储是否有值
					var collectedList = uni.getStorageSync("articleList")
					// 遍历所有的文章添加可控属性
					res.data.rows.forEach(ele => {
						// 如果本地存储存在
						if (collectedList) {
							// 找到当前的点击的id将属性变成true
							var bol = collectedList.find(item => item.id == ele.id);
							ele.isCollected = bol ? true : false
						} else {
							ele.isCollected = false
						}
					})
					this.rows.push(...res.data.rows)
					this.total = res.data.total;
					// console.log("请求改变后的数据",this.rows)
				})
				//品牌列表
				findBrandsByPage(
					this.start,
					10).then(result => {
					console.log(result)
					this.list.push(...result.data.rows)
				})
			},
			// 点击收藏
			collected(id, idx) {
				//获取本地收藏
				var list = uni.getStorageSync("articleList");
				//找到当前点击收藏项
				var item = this.rows.find(ele => {
					return ele.id == id
				})
				if (list) { // 判断本地是否存在收藏数据
					// 获取本地id对应的下标
					const index = list.findIndex(ele => ele.id == id);
					if (index >= 0) { // 本地有收藏的id  取消收藏
						item.isCollected = false
						this.rows[idx].isCollected = false
						list.splice(index, 1);
						uni.setStorageSync("articleList", list);
						uni.showToast({
							title: "取消成功"
						})
						return
					} else { // 本地没收藏的id  收藏 
						item.isCollected = true
						this.rows[idx].isCollected = true
						list.push(item)
					}
				} else { // 本地暂时没有收藏数据  收藏 
					item.isCollected = true
					this.rows[idx].isCollected = true
					list = [];
					list.push(item);
				}
				uni.setStorageSync("articleList", list);
				uni.showToast({
					title: "收藏成功"
				})
			},
			// 点击进入详情页
			articles(id) {
				uni.navigateTo({
					url: `./articleInfo/articleInfo?id=${id}`
				});
			},
		},
		onLoad(options) {
			this.init()
		},
		onReachBottom() {
			// console.log("上拉加载");
			// 请求下一页数据
			this.start++;
			// 没数据之后  禁止发送网络请求
			if (this.rows.length < this.total) { // 9 9
				this.init();
			}
		}
	}
</script>

<style scoped lang="scss">
	.find {
		padding-top: 44px;
	}

	.tui {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 44px;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #354e44;

		.tuijian {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 20%;
			height: 27.8px;
			text-align: center;
			color: #ffffff;
			// box-sizing: ;
		}

		.pinpai {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 20%;
			text-align: center;
			color: #ffffff;
			height: 27.8px;
		}

		.active {
			width: 70px;
			height: 1px;
			background: #FFFFFF;
			border-radius: 3px;
			text-align: center;
			margin-top: 5px;
		}

	}

	// 精选文章
	.article-block {
		position: relative;
		width: 337px;
		height: 241px;
		border-radius: 12px;
		background-color: #fff;
		margin: 14px auto;
		overflow: hidden;

		.cover-img {
			position: relative;

			.img {
				width: 337px;
				height: 191px;
			}

			.ctitle {
				position: absolute;
				top: 60%;
				left: 10px;
				color: #FFFFFF;

				.etitle {
					font-size: 24px;
					line-height: 34px;
				}

				.dtitle {
					line-height: 34px;
				}
			}
		}

		.btns-bar {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.view-block {
				display: flex;
				justify-content: space-around;
				align-items: center;

				.eye {
					margin-left: 5px;
				}
			}
		}
	}

	// 品牌列表
	.ullsit {
		margin: 15px;
		background: #fff;
		border-radius: 4px;
		overflow: hidden;

		.pr {
			image {
				margin: 15px;
				background: #fff;
				border-radius: 4px;
				overflow: hidden;
			}
		}

		.name {
			margin: 15px;
			background: #fff;
			border-radius: 4px;
			overflow: hidden;
			font-size: 20px;
			line-height: 22px;
			color: #3e3e3e;
			font-weight: 600;
		}
	}
</style>
