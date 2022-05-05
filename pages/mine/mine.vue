<template>
	<view class="mine">
		<!-- 顶部登录 -->
		<view class="head" v-if="show">
			<view class="avatar-area">
				<image src="../../static/icons/page.png"></image>
			</view>
			<view class="user-info">
				<view class="name">
					Hi~
				</view>
				<view class="username">
					您还没有登陆呢
				</view>
			</view>
		</view>

		<view class="head" v-else @tap="userList">
			<view class="avatar-area">
				<image :src="userInfo.icon"></image>
			</view>
			<view class="user-info">
				<view class="name">
					{{userInfo.nickname}}
				</view>
				<view class="username">
					用户名：{{userInfo.username}}
				</view>
			</view>
		</view>
		<!-- 注册登录 -->
		<view class="btns" v-if="show">
			<view class="btn-reg" @tap="register">
				注册
			</view>
			<view class="btn-login" @tap="logon()">
				登录
			</view>
		</view>
		<!-- 我的订单区域 -->
		<view class="my-orders">
			<view class="title">
				我的订单
			</view>
			<view class="navs" @tap="">
				<navigator open-type="navigate" :url="`/pages/order/Orderpage/Orderpage?type=0`">
					<view class="nav-item">
						<view class="icon">
							<image src="../../static/icons/icon-pay.png"></image>

						</view>
						<view class="text">
							待付款
						</view>
					</view>
				</navigator>
				<navigator open-type="navigate" :url="`/pages/order/Orderpage/Orderpage?type=1`">
					<view class="nav-item">
						<view class="icon">
							<image src="../../static/icons/pay-done.png"></image>

						</view>
						<view class="text">
							已付款
						</view>
					</view>
				</navigator>
				<navigator open-type="navigate" :url="`/pages/order/Orderpage/Orderpage?type=2`">
					<view class="nav-item">
						<view class="icon">
							<image src="../../static/icons/icon-car.png"></image>

						</view>
						<view class="text">
							已发货
							</view>
				</view>
				</navigator>
				<navigator open-type="navigate" :url="`/pages/order/Orderpage/Orderpage?type=3`">
					<view class="nav-item">
						<view class="icon">
							<image src="../../static/icons/icon-done.png"></image>

						</view>
						<view class="text">
							已收货
						</view>
					</view>
				</navigator>
				<navigator open-type="navigate" :url="`/pages/order/Orderpage/Orderpage?type=4`">
					<view class="nav-item">
						<view class="icon">
							<image src="../../static/icons/icon-back.png"></image>

						</view>
						<view class="text">
							售后
						</view>
					</view>
				</navigator>
			</view>
		</view>

		<!-- 底部 -->
		<view class="grid-block">
			<view class="grid-item">
				<view class="icon" @tap="collected">
					<image src="../../static/icons/save.png" mode=""></image>

				</view>
				<view class="text">
					商品收藏
				</view>
			</view>

			<view class="grid-item" @tap="pin">
				<view class="icon">
					<image src="../../static/icons/brand.png" mode=""></image>

				</view>
				<view class="text">
					品牌
				</view>
			</view>

			<view class="grid-item">
				<view class="icon" @tap="articleList">
					<image src="../../static/icons/article.png" mode=""></image>

				</view>
				<view class="text">
					文章收藏

				</view>
			</view>

			<view class="grid-item" @tap="addres">
				<view class="icon">
					<image src="../../static/icons/address.png" mode=""></image>

				</view>
				<view class="text">
					地址
				</view>
			</view>

			<view class="grid-item" @tap="cart">
				<view class="icon">
					<image src="../../static/icons/card.png" mode=""></image>

				</view>
				<view class="text">
					卡包
				</view>
			</view>

			<view class="grid-item" @tap="car">
				<view class="icon">
					<image src="../../static/icons/cart2.png" mode=""></image>
				</view>
				<view class="text">
					购物车
				</view>
			</view>

			<view class="grid-item" @tap="tel">
				<view class="icon">
					<image src="../../static/icons/phone.png" mode=""></image>

				</view>
				<view class="text">
					联系客服
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mix from "../mixins/index.js"
	export default {
		mixins: [mix],
		data() {
			return {
				userInfo: [],
				show: true
			}
		},
		methods: {
			logon() {
				uni.navigateTo({
					url: "/pages/mine/login/login"
				})
			},
			register() {
				uni.navigateTo({
					url: "/pages/user/register/register"
				})
			},
			// 购物车
			car() {
				uni.navigateTo({
					url: "/pages/user/car/car"
				})
			},
			addres() {
				uni.navigateTo({
					url: "/pages/user/address/address"
				})
			},
			// 收藏
			collected() {
				uni.navigateTo({
					url: "../user/collected/collected"
				})
			},
			//文章收藏
			articleList() {
				uni.navigateTo({
					url: "../user/articleList/articleList"
				})
			},
			//品牌
			pin() {
				uni.showToast({
					image: '/static/icons/sorry.png',
					title: '品牌功能暂未开通 !'
				})
			},
			//卡包
			cart() {
				uni.showToast({
					image: '/static/icons/sorry.png',
					title: '卡包功能暂未开通 !'
				})
			},
			// 联系客服
			tel() {
				uni.makePhoneCall({
					phoneNumber: "18337600696"
				})
				},
				init() {
						// 获取用户信息
						// console.log("执行了")
						this.userInfo = uni.getStorageSync("userInfo");
						if (this.userInfo) {
							this.show = false
						}
						// console.log(this.userInfo)
					},
					// 跳转到头像页面
					userList() {
						uni.navigateTo({
							url: "../user/user"
						})
					}
			},
			onLoad(options) {

			},
			onShow() {
				// 页面加载是判断是否登录
				this.checkLogin(this.init())
				this.init()
				}
	}
</script>

<style scoped lang="scss">
	.mine {
		box-sizing: border-box;
		padding: 0 20px;

		.head {
			display: flex;
			height: 75px;
			padding-top: 30px;

			.avatar-area {
				border-radius: 50%;

				image {
					width: 75px;
					height: 75px;
					border-radius: 50%;
				}
			}

			.user-info {
				display: flex;
				margin-left: 16px;
				height: 75px;
				color: #3d4c46;
				font-size: 14px;
				flex-direction: column;
				justify-content: space-around;
				box-sizing: border-box;
				padding: 7px 0;

				.name {
					font-size: 20px;
					font-weight: 600;
				}
			}
		}

		.btns {
			margin: 20px auto;
			display: flex;
			justify-content: center;
			align-items: center;

			.btn-reg {
				width: 91px;
				height: 38px;
				box-sizing: border-box;
				border: 1px solid #354e44;
				color: #354e44;
				font-size: 15px;
				text-align: center;
				line-height: 38px;
				border-radius: 5px;
				margin: 0 15px;
			}

			.btn-login {
				width: 91px;
				height: 38px;
				box-sizing: border-box;
				border: 1px solid #354e44;
				background-color: #354e44;
				color: #fff;
				font-size: 15px;
				text-align: center;
				line-height: 38px;
				border-radius: 5px;
				margin: 0 15px;
			}
		}

		.my-orders {
			width: 335px;
			height: 104px;
			border-radius: 2px;
			background-color: #fff;
			margin-top: 30px;

			.title {
				height: 38px;
				font-size: 13px;
				line-height: 38px;
				border-bottom: 1px solid #ddd;
				box-sizing: border-box;
				margin: 0 27px;
			}

			.navs {
				padding: 0 27px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				text-align: center;
				margin-top: 5px;

				.nav-item {
					text-align: center;

					.icon {
						width: 20px;
						height: 20px;
						margin: 5px auto;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

				.text {
					font-size: 13px;
					line-height: 18px;
					text-align: center;
				}
			}
		}

		.grid-block {
			width: 335px;
			margin-top: 30px;
			background-color: #fff;
			border-radius: 10px;
			text-align: center;
			padding: 15px 0 30px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;

			.grid-item {
				width: 33.33%;
				min-height: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.icon {
					image {
						display: block;
						width: 25px;
						height: 25px;
						margin: 15px auto;
					}
				}
			}

			.text {
				font-size: 13px;
				line-height: 19px;

			}
		}
	}
</style>
