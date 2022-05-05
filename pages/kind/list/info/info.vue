<template>
	<!-- 详情页 -->
	<view class="info">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper"
			:circular="true">
			<swiper-item v-for="item in banner">
				<view class="swiper-item">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="icon">
			<uni-icons type="star" :color="isCollected ? 'red' : '' " size="30" @tap="collected"></uni-icons>
		</view>
		<view class="shops">
			<view class="price">
				<view class="price-a">
					{{list.price}}
				</view>
				.00
			</view>
			<view class="yuan">
				没有促销使用原价
			</view>

		</view>
		<view class="name">
			{{list.name}}
		</view>
		<view class="namea">
			{{list.description}}
		</view>
		<mp-html :content="list.detailMobileHtml" />
		<!-- 底部tab栏 -->
		<view class="goods-nav">
			<uni-icons type="headphones" size="30"></uni-icons>
			<view class="buy-btns">
				<view class="btn-goods-cart" @tap="masks($event)" data-index='0'>
					添加到购物车
				</view>
				<view class="btn-goods-buy" @tap="masks($event)" data-index='1'>
					立即购买
				</view>

			</view>
		</view>

		<!-- 蒙层 -->
		<view class="sku-main" v-if="mask" @touchmove.stop.prevent>
			<view class="card">
				<uni-icons type="close" size="30" class="icons" @tap='close'></uni-icons>
				<image :src="skuList.pic" class="img" v-if="skushow"></image>
				<image :src="spulist.pic" class="img" v-if="spushow"></image>
				<view class="name">
					{{list.name}}
				</view>
				<view class="count" v-if="skushow">
					库存数量:{{skuList.stock}}
				</view>
				<view class="count" v-if="spushow">
					库存数量:{{spulist.stock}}
				</view>
				<view class="title">
					商品选择
				</view>

				<view :class="num == 0 ? 'active' : 'color-item'">
					<view class="num==0?'items':'active'" v-for="item in skuList.spData" :key="item.id"
						@tap="listitem(item.id)">
						{{item.key}}:{{item.value}}
					</view>
				</view>
				<view :class="num == 1 ? 'active' : 'color-item'">
					<view class="num==1?'items':'active'" v-for="item in spulist.spData" :key="item.id"
						@tap="spuitem(item.id)">
						{{item.key}}:{{item.value}}
					</view>
				</view>
				<view class="title">
					特色服务
				</view>
				<view class="works">
					<view class="work-item">
						送货上门
					</view>
					<view class="work-item">
						上门安装
					</view>
				</view>
				<view class="nine">

				</view>
				<view class="buy">
					<view class="buytitle">
						购买数量
					</view>
					<view class="buysteps">
						<view class="step-reduce" @tap="stepreduce">
							-
						</view>
						<view class="step-text">
							{{index}}
						</view>
						<view class="step-add" @tap="stepadd">
							+
						</view>
					</view>
				</view>
				<view class="btn" @tap="submitList">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		productDetail,
		addCart
	} from "../../../../api/kind/list/info/index.js"
	import {
		addPreOrder
	} from "../../../../api/user/car/index.js"
	import mix from "../../../mixins/index.js"
	export default {
		mixins: [mix],
		data() {
			return {
				id: "",
				list: [],
				isCollected: false,
				skuList: [],
				spulist: [],
				num: 0,
				mask: false,
				skushow: true,
				spushow: false,
				submit: "",
				skuId: "",
				index: 1
			}
		},
		computed:{
				banner(){
					return this.list.albumPics? this.list.albumPics.split(','):[]
				},
				},
		methods: {
			init() {
				productDetail(this.id).then(res => {
					console.log(res)
					this.list = res.data.product
					res.data.product.skuList.forEach(ele => {
						ele.spData = JSON.parse(ele.spData)
					});

					var sku = res.data.product.skuList
					// console.log(sku)
					for (var i = 0; i < sku.length - 1; i++) {
						this.skuList = sku[i];
					}
					this.skuId = this.skuList.id
					for (var i = 1; i < sku.length; i++) {
						this.spulist = sku[i];
					}
					// console.log(".............", this.skuId)
					uni.setNavigationBarTitle({
						title: res.data.product.name
					})
				})
			},
			collected() {
				// 点击收藏按钮之后 存储数据
				// 存储数据的格式是数组格式
				//
				// uni.setStorageSync("collectedList",[this.info.id])
				// 2. 取消收藏数据
				// 
				var collectedList = uni.getStorageSync("collectedList");
				if (!collectedList) {
					// 1. 收藏数据
					uni.setStorageSync("collectedList", [this.list])
					this.isCollected = true;
				} else {
					// 首先需要先判断本地是否有点击收藏按钮时的商品id
					var item = collectedList.find(ele => ele == this.list);
					var index = collectedList.findIndex(ele => ele == this.list);
					if (item) {
						//2.1 添加的商品id相同 取消收藏数据
						collectedList.splice(index, 1);
						uni.setStorageSync("collectedList", collectedList)
						this.isCollected = false
					} else {
						// 2.2 如果商品id不同  添加商品
						collectedList.push(this.list);
						uni.setStorageSync("collectedList", collectedList)
						this.isCollected = true
					}
				}
			}
			// 点击蒙层
			,
			masks(e) {
				console.log("点击了蒙层")
				this.mask = true
				// console.log(e.currentTarget.dataset.index)
				this.submit = e.currentTarget.dataset.index
				console.log(this.submit)
			},
			// 点击关闭
			close() {
				this.mask = false
			},
			// 点击sku选项
			listitem(Id) {
				this.skushow = true,
					this.spushow = false
				this.num = 0
				this.skuId = Id
			},
			spuitem(Id) {
				this.skushow = false,
					this.spushow = true
				this.num = 1
				this.skuId = Id
			},
			// 点击购物车加减
			stepreduce() {
				if (this.index <= 0) {
					this.index == 0;
				} else {
					this.index--;
				}
			},
			// 点击购物车加
			stepadd() {
				if (this.index >= 0) {
					this.index++;
				}
			},
			// 点击提交
			submitList() {
				// console.log(this.index)
				// 判断点击的是购物车还是立即购买
				if (this.submit == 0) {
					addCart({
						productId: this.id,
						productSkuId: this.skuId,
						quantity: this.index
					}).then(res => {
						console.log("添加购车", res)
						if (res.success == false) {
							this.checkLogin()
						} else {
							uni.showToast({
								title: '添加成功',
							});
						}

					})
				} else {
					// 提交数据
					var orderInfoVo = {
						orderItemList: [{
							productId: this.id,
							productQuantity: this.index,
							productSkuId: this.skuId
						}]
					};
					addPreOrder(orderInfoVo).then(res => {
						console.log((res))
						if (res.success) {
							uni.showToast({
								title: '购买成功,1s后跳转到订单确认页',
								icon: 'none'
							});
							setTimeout(() => {
								uni.navigateTo({
									url: `/pages/order/order?id=${res.data.orderId}`
								});
							}, 1000);
						}
					});
				}
			}
		},
		onLoad(options) {
			// console.log(options)
			this.id = options.id
			this.init()
			//页面加载判断本地是否有相同的收藏id
			// 如果本地有相同id的数据  isCollected  ==>true
			// 如果本地没有相同id的数据  isCollected  ==>false
			var collectedList = uni.getStorageSync("collectedList");
			if(collectedList){
				var item = collectedList.find(ele => ele == options.id);
				if (item) {
					this.isCollected = true
				} else {
					this.isCollected = false
				}
			}else{
				this.isCollected = false
			}
			
		},
		onShow() {
			// 页面加载是判断是否登录
			this.checkLogin(this.init())
		}
	}
</script>

<style scoped lang="scss">
	.info {


		.swiper {
			width: 100%;
			height: 317px;

			image {
				width: 100%;
				height: 317px;
			}
		}

		.icon {
			position: fixed;
			top: 50%;
			left: 80%;
			width: 50px;
			height: 50px;
			background-color: #354e44;
			text-align: center;
			line-height: 50px;
			border-radius: 50%;
		}

		.shops {
			display: flex;
			padding: 25px 34px;
			color: red;

			.price {
				display: flex;
				justify-content: center;
				align-items: baseline;
				width: 80px;

				.price-a {
					font-size: 28px;
				}
			}

			.yuan {
				width: 110px;
				height: 17px;
				text-align: center;
				line-height: 17px;
				background-color: red;
				color: #FFFFFF;
				font-size: 10px;
				margin: auto 10px;
			}
		}

		.name {
			padding: 0 0 0 34px;
			color: #262626;
			overflow: hidden;
			font-size: 16px;
			font-weight: 700;
		}

		.namea {
			padding: 10px 10px 0 34px;
			font-size: 11px;
		}

		::v-deep ._block {
			display: flex;
			width: 80%;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			// align-items: center;
			padding: 34px;

			::v-deep ._img {
				width: 107px;
				height: 107px;
			}
		}

		.goods-nav {
			position: fixed;
			justify-content: space-around;
			align-items: center;
			bottom: 0;
			display: flex;
			width: 100%;
			height: 60px;
			line-height: 60px;
			background-color: #FFFFFF;
			padding-bottom: 10px;

			.buy-btns {
				display: flex;
				width: 238px;
				height: 40px;
				margin-top: 10px;
				font-size: 15px;
				line-height: 40px;
				text-align: center;
				background-color: #354e44;
				text-align: center;

				.btn-goods-cart {
					width: 119px;
					background-color: #e2e2e2;
					color: #8f8f94;
				}

				.btn-goods-buy {
					width: 119px;
					color: #ffffff;
				}

			}
		}

		// 蒙层
		.sku-main {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-color: #00000080;
			z-index: 888;

			.card {
				position: absolute;
				left: 50%;
				top: 114px;
				margin-left: -157px;
				width: 314px;
				height: 463px;
				background: #fff;
				border-radius: 40px;
				border-radius: 40px;
				border-radius: 20px;

				.icons {
					float: right;
					margin-top: 30px;
					margin-right: 30px;
				}

				.img {
					position: absolute;
					width: 96px;
					height: 96px;
					background-color: #ffc0cb;
					left: 31px;
					top: -28px;
					border-radius: 5px;
				}

				.name {
					font-size: 14px;
					color: #3e3e3e;
					margin-left: 116px;
					margin-top: 42px;
					font-weight: 600;
					width: 130px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

				}

				.count {
					font-size: 12px;
					color: #b0b0b0;
					margin-top: 3px;
					line-height: 16px;
					margin-left: 152px;
				}

				.title {
					box-sizing: border-box;
					margin: 14px 28px;
					font-size: 14px;
					color: #3e3e3e;
					line-height: 20px;
					letter-spacing: 2px;
					font-weight: 600;
					// margin-top: 10px;
				}

				.active {
					display: flex;
					// justify-content: space-around;
					box-sizing: border-box;
					border: 2px solid #0000;
					float: left;
					width: 80%;
					padding-left: 5px;
					height: 30px;
					color: #3e3e3e;
					font-size: 13px;
					text-align: center;
					line-height: 30px;
					background: #f2f4f3;
					border-radius: 10px;
					margin: 5px 30px;
					border: 2px #354e44 solid;
				}

				.color-item {
					display: flex;
					// justify-content: space-around;
					box-sizing: border-box;
					border: 2px solid #0000;
					float: left;
					width: 80%;
					padding-left: 5px;
					height: 30px;
					color: #3e3e3e;
					font-size: 13px;
					text-align: center;
					line-height: 30px;
					background: #f2f4f3;
					border-radius: 10px;
					margin: 5px 30px;



					.items {
						width: 100%;
						margin-left: 10px;
					}
				}

				.works {
					width: 80%;
					margin: 5px 30px;

					.work-item {
						width: 100%;
						height: 30px;
						color: #3e3e3e;
						font-size: 13px;
						text-align: center;
						line-height: 30px;
						background: #f2f4f3;
						border-radius: 10px;
						border-radius: 10px;
						margin: 5px auto;
						text-align: left;
						text-indent: 1em;
					}
				}

				.nine {
					width: 265px;
					height: 1px;
					background-color: #f2f4f3;
					margin: 18px auto;
				}

				.buy {
					width: 80%;
					margin: 5px 30px;
					display: flex;
					justify-content: space-between;

					.buysteps {
						display: flex;

						.step-reduce {
							width: 30px;
							height: 30px;
							background: #f1ece7;
							border-radius: 50%;
							text-align: center;
							line-height: 30px;
							font-size: 15px;
							margin: 0 3px;
						}

						.step-text {
							width: 45px;
							border-radius: 15px;
							width: 30px;
							height: 30px;
							background: #f1ece7;
							border-radius: 50%;
							text-align: center;
							line-height: 30px;
							font-size: 15px;
							margin: 0 3px;
						}

						.step-add {
							width: 30px;
							height: 30px;
							background: #f1ece7;
							border-radius: 50%;
							text-align: center;
							line-height: 30px;
							font-size: 15px;
							margin: 0 3px;
						}
					}
				}

				.btn {
					width: 104px;
					height: 40px;
					background: #354e44;
					border-radius: 14px;
					border-radius: 14px;
					margin: 24px auto;
					color: #fff;
					font-size: 16px;
					text-align: center;
					line-height: 40px;
				}

			}
		}

	}
</style>
