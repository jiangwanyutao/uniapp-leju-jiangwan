<template>
	<!-- 推荐 -->
	<view class="home">
		<!-- 顶部导航栏 -->
		<view class="nav">
			<view class="chat">
				<image src="../../static/icons/chat.png"></image>
			</view>
			<view class="tui">
				<view class="tuijian" @tap="act">
					推荐
					<view :class="acte==0?'active':''">

					</view>
				</view>
				<view class="pinpai" @tap="acts">
					品牌
					<view :class="acte==1?'active':''">
					</view>
				</view>
			</view>
			<view class="cart">
				<view>
					<image src="../../static/icons/search.png"></image>
				</view>
				<view>
					<image src="../../static/icons/cart.png"></image>
				</view>
			</view>
		</view>
		<view class="home-c" v-if="isshow">

			<!-- 顶部轮播 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
				<swiper-item v-for="item in list" :key="item.id" class="swipers">
					<image :src="item.pic" class="img"></image>
					<view class="light">
						{{item.name}}家具系列
					</view>
				</swiper-item>
			</swiper>
			<!-- 品类推荐 -->
			<view class="category">
				<view class="categorya" v-for="item in category" :key="item.id"  @tap="golist(item.id)">
					<view>
						<view>
							<image :src="item.icon" class="img"></image>
						</view>
						<view>{{item.name}}</view>
					</view>

				</view>
			</view>
			<!-- 现时活动 -->
			<view class="section">
				<view class="icon-notify">
					<image src="../../static/icons/l.png" mode=""></image>
				</view>
				<view class="text">
					限时活动：
				</view>
				<swiper :autoplay="true" :interval="3000" :duration="1000" :vertical="true" class="swiper"
					:circular="true">
					<swiper-item v-for="item in items" :key="item.id">
						<view class="swiper-item">{{item.name}}
							<view class="shop">
								<view class="shop-a">
									原价:{{item.price}}元
								</view>
								<view class="shop-b">
									现价:{{item.promotionPrice}}元
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<!-- 热门推荐 -->
			<view class="hot">
				热门推荐
			</view>
			<swiper :autoplay="true" :interval="3000" :duration="1000" class="swiper-a" :circular="true">
				<swiper-item v-for="item in hots" :key="item.id">
					<view>
						<view>
							<image :src="item.pic" class="img"></image>
						</view>
						<view>{{item.name}}</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- 新品推荐 -->
			<view class="hot">
				新品推荐
			</view>
			<view class="xin">
				<view class="productList">
					<view class="productList-a" v-for="item in productList" :key="item.id">
						<view class="img">
							<image :src="item.pic"></image>
						</view>
						<view class="namess">
							<view class="name">
								{{item.name}}
							</view>
							<view class="price">
								价格:{{item.price}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 猜你喜欢 -->
			<view class="hot">
				猜你喜欢
			</view>
			<view class="saleMost">
				<view class="Products" v-for="item in saleMostProducts" :key='item.id'>
					<view class="img">
						<image :src="item.pic"></image>
					</view>
					<view class="name">
						{{item.brandName}}
					</view>
					<view class="shows">
						<view>
							￥{{item.price}}
						</view>
						<view>
							乐居
						</view>
					</view>

				</view>
			</view>
		</view>
		<!-- //品牌 -->
		<view class="brand-c" v-if="show">
			<view v-for="item in rows">
				<view>
					<image :src="item.coverImg" mode=""></image>
					
					{{item.title}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		bannerAds,
		categorys,
		recommendList,
		hotList,
		lejuLatestProducts,
		saleMostProducts,
		findArticleByPage
	} from "../../api/home/index.js"

	export default {
		data() {
			return {
				list: [],
				top: 0,
				acte: 0,
				category: [],
				items: [],
				hots: [],
				productList: [],
				saleMostProducts: [],
				isshow: true,
				show: false,
				rows:[]

			}
		},
		methods: {
			act() {
				this.acte = 0;
				this.isshow = true,
					this.show = false
			},
			acts() {
				this.acte = 1;
				this.isshow = false,
					this.show = true
			},
			init() {
				// 获取首页轮播数据
				bannerAds().then(res => {
					// console.log(res)
					this.list = res.data.items
				})
				// 查询分类列表
				categorys("1308336521604599809").then(res => {
					// console.log(res)
					this.category = res.data.category.children
				})
				//限时活动
				recommendList().then(res => {
					// console.log(res)
					this.items = res.data.items
				})
				// 热门活动
				hotList().then(res => {
					// console.log(res)
					this.hots = res.data.items
				})
				// 新品推荐
				lejuLatestProducts().then(res => {
					// console.log(res)
					this.productList = res.data.productList
				})
				// 猜你喜欢
				saleMostProducts().then(res => {
					// console.log(res)
					this.saleMostProducts = res.data.items
				})
				// 平牌列表
				findArticleByPage(1,10).then(res => {
					console.log(res)
					this.rows=res.data.rows
				})
			},
			// 跳转到详情页
			golist(id){
				uni.navigateTo({  
				    url:`../kind/list/list?id=${id}`
				});
			},
		},
		onLoad(options) {
			// 仅在weixin才会生效的代码块
			// #ifdef MP-WEIXIN
			var menu = uni.getMenuButtonBoundingClientRect();
			this.top = menu.height + menu.top;
			// #endif
			this.init()
		}
	}
</script>

<style scoped lang="scss">
	.home {
		height: 100vh;
		padding-bottom: 500px;

		.swiper {
			height: 198px;
		}

		.swipers {
			position: relative;
			width: 100%;

			.light {
				width: fit-comtent;
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 999;
				transform: translate(-50%, -50%);
				color: #FFFFFF;
				font-weight: 600;
			}
		}

		.img {
			width: 100%;
			height: 100%;

		}

		.nav {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			height: 60px;
			display: flex;
			justify-content: space-around;
			align-items: center;
         
			.chat {
				width: 20%;
				height: 21px;
				text-align: center;

				image {
					width: 21px;
					height: 21px;
				}
			}

			.tui {
				width: 60%;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;

				.tuijian {
					display: flex;
					align-items: center;
					flex-direction: column;
					width: 30%;
					height: 27.8px;
					text-align: center;
					color: #ffffff;
					// box-sizing: ;
				}

				.pinpai {
					display: flex;
					align-items: center;
					flex-direction: column;
					width: 30%;
					text-align: center;
					color: #ffffff;
					height: 27.8px;
				}

				.active {
					width: 30px;
					height: 2px;
					background: #FFFFFF;
					border-radius: 3px;
					text-align: center;
					margin-top: 5px;
				}

			}

			.cart {
				display: flex;
				width: 20%;
				margin-right: 10px;

				image {
					width: 21px;
					height: 21px;
					margin: 10px;
				}
			}
		}

		// 品类推荐
		.category {
			width: 100%;
			height: 100px;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.categorya {
				.img {
					width: 40px;
					height: 40px;
					border-radius: 2px;
				}
			}
		}
		// 现时活动
		.section {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 335px;
			height: 48px;
			margin: 20px auto;
			background-color: #fff;
			font-size: 14px;
			color: #3e3e3e;
			line-height: 48px;
			text-indent: 0.5em;

			.icon-notify {
				width: 24px;
				height: 24px;
				margin-left: 5px;
				animation: warn 0.5s ease-out 0s infinite;

				image {
					width: 100%;
					height: 100%;
					margin-bottom: 5px;
					margin-right: 10px;
				}

				// 动画时常
				@keyframes warn {
					0% {
						transform: scale(1);
						opacity: 1;
					}

					30% {
						opacity: 1;
					}

					100% {
						transform: scale(1);
						opacity: .5;
					}
				}
			}

			.text {
				font-weight: 600;
				color: #ffa500;
				margin-left: 5px;
			}

			.swiper {
				flex: 1;
				height: 100%;
				font-size: 14px;

				.swiper-item {
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: space-around;

					.shop {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						justify-content: center;

						.shop-a {
							flex: 1;
							font-size: 12px;
							line-height: 15px;
							text-decoration: line-through;
						}

						.shop-b {
							flex: 1;
							font-size: 12px;
							line-height: 15px;
							color: #f00;
							font-weight: 600;
						}
					}
				}
			}


		}

		// 热门推荐
		.hot {
			width: 100%;
			height: 20px;
			padding: 15px;
			font-size: 16px;
			color: #3e3e3e;
			letter-spacing: 1px;
			font-weight: 600;
		}

		// 推荐轮播
		.swiper-a {
			width: 100%;
			height: 115px;

			text-align: center::v-deep .uni-swiper-slides {
				width: 125px;
				height: 115px;
			}

			.img {
				width: 105px;
				height: 88px;
				margin: 0 10px 0 10px;
			}

		}

		// 新品推荐
		.xin {
			width: 100%;
			height: 140px;
			overflow: hidden;
		}

		.productList {
			width: 100%;
			height: 320px;
			display: flex;
			overflow: auto;

			.productList-a {
				width: 295px;
				height: 130px;
				display: flex;
				background: #FFFFFF;
				margin: 0 20px 0 20px;
				border-radius: 10px;

				.img {
					margin: 20px;
					width: 97px;
					height: 84px;

					image {
						width: 100%;
						height: 100%;
					}

				}

				.namess {
					flex: 1;
					width: 135px;
					height: 80px;
					padding-left: 15px;
					padding-top: 25px;
					padding-bottom: 25px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
				}
			}
		}

		// 猜你喜欢
		.saleMost {
			display: flex;
			width: 100%;
			height: 2000px;
			// flex-direction: column;
			flex-wrap: wrap;
			justify-content: space-around;	
			padding-bottom: 60px;

			.Products {
				width: 44%;
				box-sizing: border-box;
				background: #FFFFFF;
				margin: 5px;

				.img {
					width: 100%;
					height: 119px;

					image {
						width: 100%;
						height: 119px;
					}
				}

				.name {
					color: #3e3e3e;
					margin-top: 4px;
					font-weight: 400;
					margin-left: 10px;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}

				.shows {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 10px;
				}
			}
		}

		.brand-c {
			height: 100vh;
			padding-bottom: 500px;
			padding-top: 60px;
		}


	}
</style>
