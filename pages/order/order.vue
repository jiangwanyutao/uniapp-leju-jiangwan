<template>
	<!-- 订单生成叶页 -->
	<view class="order">
		<view class="wiet">
		{{order.status | statusText}}
		</view>
		<navigator v-if="!addressInfo.name" class="address-block" open-type="navigate"
			:url="`/pages/user/address/address?type=select`">
			<view>去选择收货地址</view>
		</navigator>
		<navigator v-else class="address-block" open-type="navigate" :url="`/pages/user/address/address?type=select`">
			<div class="send-name">姓名:{{addressInfo.name}} 电话号码: {{addressInfo.phoneNumber}}</div>
			<div class="address">收货地址:
				{{addressInfo.province}}-{{addressInfo.city}}-{{addressInfo.region}}{{addressInfo.detailAddress}}
			</div>
		</navigator>
		<view class="order-card">
			<!-- 订单号显示 -->
			<view class="order-title">
				<view class="title">
					订单编号:{{order.orderSn}}
				</view>
				<view class="status">
					等待支付
				</view>
			</view>
			<view class="skulist" v-for="item in list" :key="item.id">
				<image :src="item.productPic"></image>
				<view class="info">
					<view class="info-a">
						<view class="title">
							{{item.productName}}
						</view>
						<view class="price">
							¥{{item.productPrice}}元
						</view>
					</view>
					<view class="info-b">
						<view>
							编号:{{item.productSn}}
						</view>
						<view>
							数量:X{{item.productQuantity}}
						</view>
					</view>
					<view class="info-c">
						规格:
						<view v-for="item in item.productAttr" :key="item.value" class="info-d">
							{{item.key}}:{{item.value}},
						</view>
					</view>
				</view>

			</view>
			<view class="total-price">
				合计:{{order.totalAmount}}元
			</view>
			<view class="btn">
				<button type="default" class="btns" @tap="gopay">确认付款</button>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		getPreOrderById,
		addConfirmOrder
	} from "../../api/order/index.js"
	export default {
		data() {
			return {
				id: "",
				order: [],
				list: [],
				sku: [],
				addressInfo: ""
			}
		},
		filters: {
			statusText(val) {
				if (val == 0) {
					return "等待支付中"
				} else if (val == 1) {
					return "确认付款,等待发货"
				} else if (val == 2) {
					return "已发货"
				} else if (val == 3) {
					return "已收货"
				} else if (val == 4) {
					return "已退单"
				} else {
					return "无效订单"
				}
			}
		},
		methods: {
			init() {
				// * 进入订单确认页 
				// 		 * 1. 先判断本地是否有以前存储过的地址选择的数据
				// 		 * 2. 如果有 那就使用本地的数据
				// 		 * 3. 如果没有  去地址列表页选择数据
				this.initSelAddress();
				getPreOrderById(
					this.id
				).then(res => {
					// console.log(res)
					res.data.orderItems.forEach(ele => {
						ele.productAttr = JSON.parse(ele.productAttr)
					});
					this.list = res.data.orderItems
					this.sku = res.data.orderItems.productAttr
					// console.log(this.sku)
					this.order = res.data.orderBase
				})
			},
			// 初始化预选地址
			initSelAddress() {
				var addressInfo = uni.getStorageSync("selectAddress");
				if (addressInfo) {
					this.addressInfo = addressInfo
				}
			}, 
			//提交订单
			gopay() {
				var orderItemList = [];
				this.list.forEach(ele => {
					var obj = {
						"cartId": ele.cartId,
						"productId": ele.productId,
						"productQuantity": ele.productQuantity,
						"productSkuId": ele.productSkuId
					}
					orderItemList.push(obj)
				})
				var obj = {
					"addressId": this.addressInfo.id,
					"orderId": this.id,
					"orderItemList": orderItemList,
					"payType": 0,
					"sourceType": 1
				}
				addConfirmOrder(obj)
					.then(res => {
						if (res.success) {
							// console.log(res)
							uni.redirectTo({
								url: `/pages/order/payment/payment?orderId=${res.data.orderId}`
							})
						}
					})
			}
		},
		onLoad(options) {
			this.id = options.id
			// console.log(options)

		},
		onShow() {
			this.init()
		}
	}
</script>

<style scoped lang="scss">
	.order {
		margin: 0 30px;

		.wiet {
			font-size: 18px;
			color: #494949;
			height: 44px;
			border-bottom: 1px solid #ccc;
			line-height: 44px;
			box-sizing: border-box;
		}

		.address-block {
			font-size: 28rpx;
			color: #494949;
			border-bottom: 1px solid #ccc;
			box-sizing: border-box;
			padding: 30rpx 0;
		}

		.order-card {
			width: 336px;
			box-sizing: border-box;
			padding: 18px;
			border-radius: 12px;
			background-color: #fff;
			margin: 15px auto;
			font-size: 12px;
			color: #3e3e3e;
		}

		.order-title {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid #f1ece7;
			padding-bottom: 15px;
		}

		.skulist {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			border-bottom: 1px solid #f1ece7;
			padding: 15px 0;

			image {
				width: 81px;
				height: 81px;
			}

			.info {
				width: 235px;
				margin-left: 14px;
			}

			.info-a {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.info-b {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 11px;
				color: #8d8d8d;
				line-height: 15px;
				margin-top: 20px;
			}

			.info-c {
				display: flex;
				font-size: 11px;
				color: #8d8d8d;
				line-height: 15px;
				margin-top: 2px;

				.info-d {
					margin-left: 5px;
				}
			}
		}

		.total-price {
			width: 100%;
			height: 18px;
			text-align: right;
			font-size: 13px;
			padding-top: 10px;
			line-height: 18px;
		}

		.btn {
			width: 100%;
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			align-content: flex-end;

			.btns {
				width: 62px;
				height: 25px;
				border: 1px solid #2d4f43;
				font-size: 13px;
				border-radius: 5px;
				color: #2d4f43;
				text-align: center;
				line-height: 25px;
				margin-left: 16px;

			}
		}
	}
</style>
