<template>
	<!-- 订单页面 -->
	<view class="order">
		<!-- 导航栏 -->
		<view class="head-bar">
			<view class="label" @tap="selectTab(item.value)" :class="{ active: item.value == current }"
				v-for="(item, index) in headItems" :key="item.value">
				<view>{{ item.name }}</view>
			</view>
		</view>
		<!-- 渲染页面 -->
		<view class="cart" v-if="current != 4">
			<view v-for="(item,index) in orderLists" :key="index" class="cart-c">
				<!-- 渲染订单头部 -->
				<view class="order-title">
					<view>订单编号: {{ item.order.orderSn }}</view>
					<view class="status">{{ item.order.status | statusText }}</view>
				</view>

				<!-- 渲染订单内容 -->
				<view class="sku-block" v-for="(sku, index) in item.items" :key="index">
					<navigator :url="'/pages/kind/list/info/info?id=' + sku.productId">
						<image class="img" :src="sku.productPic" mode=""></image>
					</navigator>
					<view class="info">
						<view class="p1">
							<view class="title">{{ sku.productName }}</view>
							<view class="price">¥{{ sku.productPrice }}</view>
						</view>
						<view class="p2">
							<!-- 是商品编号,非商品id!! -->
							<view>编号：{{ sku.id }}</view>
							<view>x {{ sku.productQuantity }}</view>
						</view>
						<view class="p3">
							<view>
								规格：<br />
								<view style="margin-right: 10rpx;" v-for="(ele,idx) in sku.productAttr"
									:key="idx">{{ ele.key }} : {{ ele.value }}
								</view>
							</view>
						</view>
						<!-- 显示退货状态 -->
						<view v-show="item.order.status == 2" class="p4">
							<view v-if="sku.isReturn == 0" @tap="goOrderBack(sku)" style="color: red;">申请退货</view>
							<view v-if="sku.isReturn == 1" style="color: red;">退货中</view>
						</view>
					</view>
				</view>
				<view class="total-price">
					<view>时间: {{ item.order.createTime }}</view>
					<view>合计: ¥{{ item.order.totalAmount }}</view>
				</view>
				<!-- 根据状态显示不同的按钮 -->
				<view class="btns">
					<div class="btn btn-cancel-order" @tap="cancleOrder(item.order.id)" v-if="current == 0">取消订单</div>
					<div class="btn btn-pay" @tap="goPay(item)" v-if="current == 0">付款</div>
					<div class="btn btn-receive" @tap="allDone(item)" v-if="current == 2">确认收货</div>
					<div class="btn btn-closed" @tap="del(item)" v-if="item.order.status >= 3">订单已关闭,删除记录</div>
				</view>
				<view v-if="orderLists.length <= 0">
					暂无数据
				</view>

			</view>
		</view>
		<!-- //显示退单 -->
		<view class="cart" v-else>
			<view v-for="(item,index) in orderLists" :key="index" v-if="orderLists.length > 0" class="cart-c">
				<!-- 渲染订单头部 -->
				<view class="order-title">
					<view>订单编号: {{ item.orderSn }}</view>
					<view class="status" @tap="goBackInfo(item.id)"
						:style="{color:(item.status == 2 || item.status ==3) ? 'red' : '' }">{{ item.status | orderProcessText  }}</view>
				</view>

				<!-- 渲染订单内容 -->
				<view class="sku-block">
					<navigator :url="'/pages/kind/list/info/info?id=' + item.productId">
						<image class="img" :src="item.productPic"></image>
					</navigator>
					<view class="info">
						<view class="p1">
							<view class="title">{{ item.productName }}</view>
							<view class="price">¥{{ item.productPrice }}</view>
						</view>
						<view class="p2">
							<view>编号：{{ item.id }}</view>
							<view>x {{ item.productCount}}</view>
						</view>
						<view class="p3">
							<view>
								规格
								<view style="margin-right: 10rpx;" v-for="(ele,idx) in item.productAttr"
									:key="idx">{{ ele.key }} : {{ ele.value }}
								</view>

							</view>
						</view>
					</view>
				</view>
				<view class="total-price">
					<view>时间: {{ item.createTime }}</view>
					<view>合计: ¥{{ item.returnAmount }}</view>
				</view>
				<view v-if="orderLists.length == 0">
					暂无数据
				</view>

			</view>
		</view>
		<!-- 显示加载更多 -->
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import {
		findAllOrders,
		cancelOrder,
		receiveDone,
		_clearOrderFocus,
		orderReturnApplys
	} from "../../../api/order/Orderpage/index.js"
	import mix from "../../mixins/index.js"
	export default {
		mixins: [mix],
		data() {
			return {
				current: "",
				headItems: [{
						name: '待付款',
						value: '0'
					},
					{
						name: '已付款',
						value: '1'
					},
					{
						name: '已发货',
						value: '2'
					},
					{
						name: '已收货',
						value: '3'
					},
					{
						name: '售后',
						value: '4'
					}
				],
				orderList: [],
				more: "more",
				orderReturnList: []
			}
		},
		filters: {
			statusText(val) {
				if (val == 0) {
					return "未付款"
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
			},
			//已退款和已拒绝颜色需要展示成红色
			orderProcessText(process) {
				var text = '等待处理';
				switch (JSON.stringify(process)) {
					case '0':
						text = '等待处理';
						break;
					case '1':
						text = '确认退货,等待用户发货';
						break;
					case '2':
						text = '已退款';
						break;
					case '3':
						text = '已拒绝';
						break;
					case '9':
						text = '拒绝退货';
						break;
					default:
						break;
				}
				return text;
			}

		},
		methods: {
			// 切换状态栏
			selectTab(val) {
				this.current = val;
				this.checkLogin(this.init())
			},
			//初始化页面
			async init() {
				// 请求加载
				uni.showLoading({
					title: "加载中...."
				})
				//请求数据
				this.more = "loading"
				var list = (await findAllOrders()).data;
				//订单状态为未付款,需要将sku转成JSON.parse渲染未付款页面
				var info = list.orderList
				info.forEach(ele => {
					ele.items.forEach(ite => {
						if (ite.productAttr != "string") {
							ite.productAttr = JSON.parse(ite.productAttr);
						}
					})
				})
				this.orderList = info
				// console.log(this.orderList)
				// 请求退单数据
				var orderReturnList = (await orderReturnApplys()).data.items;
				orderReturnList.forEach(ele => {
					if (ele.productAttr != "string") {
						ele.productAttr = JSON.parse(ele.productAttr);
					}
				});
				this.orderReturnList = orderReturnList
				// console.log(this.orderReturnList)
				//没有更多了
				this.more = "noMore"
				// 关闭加载
				uni.hideLoading()
			},
			// 取消订单
			cancleOrder(orderId) {
				// console.log(orderId)
				cancelOrder(orderId).then(res => {
					if (res.success) {
						uni.showToast({
							title: '取消订单成功!',
							duration: 1000
						});
						this.init();
					}
				});
			},
			// 付款  跳转到结算页 的传入订单id
			goPay(val) {
				uni.navigateTo({
					url: '/pages/order/order?id=' + val.order.id
				});
			},
			// 确认收货
			allDone(orderId) {
				receiveDone({
						orderId: orderId.order.id
					})
					.then(res => {
						if (res.success) {
							uni.showToast({
								title: '确认收货成功!',
								duration: 1000
							})
							setTimeout(() => {
								this.init();
							}, 1000)

						}
					});
			},
			// 删除用户订单 这里的api请求需要个上面的的收货一致的格式，不然会报错
			del(val) {
				// console.log(val.order.id)
				_clearOrderFocus(
						val.order.id
					)
					.then(res => {
						if (res.success == true) {
							uni.showToast({
								title: "删除成功"
							});
							setTimeout(() => {
								this.init();
							}, 1000)
						}
					})
			},
			// 申请退货 
			goOrderBack(sku) {
				uni.navigateTo({
					url: `/pages/order/Orderpage/orderBack/orderBack?id=${sku.orderId}&skuid=${sku.id}`
				})
			},
			//查看退货状态明细
			goBackInfo(val) {
				uni.navigateTo({
					url: `/pages/order/Orderpage/orderBackInfo/orderBackInfo?backOrder=${val}`
				})
			},
		},
		computed: {
			// 对订单进行筛选  选择符合条件的数据
			orderLists() {
				if (this.current == 4) {
					return this.orderReturnList
				} else {
					return this.orderList.filter(ele => {
						if (this.current == 3) {
							return ele.order.status == 3 || ele.order.status == 4
						} else {
							return ele.order.status == this.current
						}
					})
				}
			}
		},
		onLoad(e) {
			// console.log(e)
			this.current = e.type
		},
		onShow() {
			this.checkLogin(this.init())
		}
	}
</script>

<style scoped lang="scss">
	.order {
		width: 100%;
		height: 100vh;

		.head-bar {
			width: 100%;
			overflow-y: auto;
			position: fixed;
			left: 0;
			top: 0;
			// #ifdef H5
			top: 80rpx;
			// #endif
			display: flex;
			justify-content: space-around;
			width: 100%;
			height: 62rpx;
			padding-top: 14rpx;
			background-color: #354e44;
			color: #fff;
			font-size: 30rpx;
			line-height: 62rpx;
			z-index: 999;

			.label {
				radio {
					display: none;
				}

				&.active {
					border-bottom: 2rpx solid #dd524d;
					color: #dd524d;
				}
			}
		}

		.cart {
			padding-top: 62px;

			.cart-c {
				width: 336px;
				box-sizing: border-box;
				padding: 18px;
				border-radius: 12px;
				background-color: #fff;
				margin: 15px auto;
				font-size: 12px;
				color: #3e3e3e;

				.order-title {
					line-height: 16px;
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #f1ece7;
					padding-bottom: 15px;

					.status {
						color: #034c46;
					}

					border-bottom: 1px solid #f1ece7;
					padding-bottom: 30rpx;
				}
			}

			.sku-block {
				display: flex;
				justify-content: flex-start;
				border-bottom: 1px solid #f1ece7;
				padding: 30rpx 0;

				.img {
					width: 162rpx;
					height: 162rpx;
					flex-shrink: 0;
					background-color: #8f8f94;
				}

				.info {
					width: 470rpx;
					margin-left: 28rpx;

					.p1,
					.p2 {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.p1 {
						font-size: 26rpx;
						line-height: 37px;

						.title {
							color: #3e3e3e;
						}

						.price {
							colro: #8d8d8d;
						}
					}

					.p2,
					.p3 {
						font-size: 22rpx;
						color: #8d8d8d;
						line-height: 30rpx;
						margin-top: 5rpx;
					}

					.p4 {
						text-align: right;
						margin-top: 10rpx;
						color: #8d8d8d;
						text-decoration: underline;
					}
				}
			}

			.total-price {
				font-size: 26rpx;
				line-height: 37rpx;
				text-align: right;
				margin-top: 14rpx;
				display: flex;
				justify-content: space-between;
			}
		}

		.btns {
			margin-top: 20rpx;
			display: flex;
			justify-content: flex-end;

			.btn {
				width: 124rpx;
				height: 50rpx;
				border: 1px solid #2d4f43;
				font-size: 26rpx;
				border-radius: 10rpx;
				color: #2d4f43;
				text-align: center;
				line-height: 50rpx;
				margin-left: 32rpx;

				&.btn-closed {
					width: auto;
					padding: 0 1em;
					border-color: #dd524d;
				}
			}
		}

	}
</style>
