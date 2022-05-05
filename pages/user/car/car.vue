<template>
	<!-- 购物车页面 -->
	<view class="car">
		<view class="product-card" v-for="item in list" :key="item.id">
			<view class="buycart-main">
				<view class="checks">
					<label>
						<evan-checkbox v-model="item.isCollected"></evan-checkbox>
					</label>
				</view>
				<view class="img">
					<image :src="item.productPic"></image>
				</view>
				<view class="info">
					<view class="name">
						{{item.productName}}
					</view>
					<view class="skuid">
						编号:{{item.productSkuId}}
					</view>
					<view class="price">
						价格:{{item.price}}
					</view>
					<view class="quantity">
						数量:{{item.quantity}}
					</view>
				</view>
				<view class="steps">
					<view class="reduce" @tap="btnReduce(item)">
						-
					</view>
					<view class="step-text">
						{{item.quantity}}
					</view>
					<view class="add" @tap="btnAdd(item)">
						+
					</view>
				</view>
			</view>


		</view>
		<view class="footer">
			<view class="sel">

				<evan-checkbox v-model="allChecked">全选</evan-checkbox>
			</view>
			<view class="prices">
				<view class="text">
					合计：￥{{allPrice}}
				</view>
				<view class="btn">
					<button type="default" class="jie" @tap="goPay">结算</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		findAllCartItem,
		delCartItems,
		addPreOrder
	} from "../../../api/user/car/index.js"
	export default {
		data() {
			return {
				list: [],
			}
		},
		computed: {
			// 判断全选按钮
			allChecked: {
				get() {
					if (this.list.length == 0) {
						return false;
					}
					// every 判断每一项的isCollected = true
					return this.list.every(item => item.isCollected);
				},
				set(val) {
					this.list.forEach(ele => (ele.isCollected = val));
				}
			},
			allPrice() {
				if (this.list.length == 0) return 0;
				return this.list.reduce((a, b) => {
					if (b.isCollected) {
						a += b.quantity * b.price;
					}
					return a;
				}, 0);
			}
		},
		methods: {
			// 初始化购物车列表
			init() {
				findAllCartItem().then(res => {
					console.log(res)
					res.data.items.forEach(ele => {
						ele.isCollected = false
					})
					this.list = res.data.items
					// console.log(this.list)
				})
			},
			// 点击数量增减
			btnReduce(val) {
				var _this = this;
				if (val.quantity > 1) {
					val.quantity--;
				} else {
					uni.showModal({
						title: '是否删除该商品?',
						success: function(res) {
							if (res.confirm) {
								// console.log('用户点击确定');
								delCartItems([val.id]).then(res => {
									if (res.success) {
										uni.showToast({
											title: '删除成功'
										});
										_this.init();
									} else {
										uni.showToast({
											title: '删除失败',
											icon: 'none'
										});
									}
								});
							} else if (res.cancel) {
								// console.log('用户点击取消');
								uni.showToast({
									title: '取消操作',
									icon: 'none'
								});
							}
						}
					});
				}
			},
			btnAdd(item) {
				item.quantity++;
			},
			// 结算
			goPay() {
				// 选中的商品列表
				var checkedList = this.list.filter(ele => ele.isCollected);
				//构建提交对象
				var orderInfoVo = {
					orderItemList: []
				};
				for (var i = 0; i < checkedList.length; i++) {
					var checkedOne = checkedList[i];
					orderInfoVo.orderItemList.push({
						cartId: checkedOne.id,
						productId: checkedOne.productId,
						productQuantity: checkedOne.quantity,
						productSkuId: checkedOne.productSkuId
					});
				}
				// 提交数据
				addPreOrder(orderInfoVo).then(res => {
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
		},
		onLoad(options) {
			this.init()
		}
	}
</script>

<style scoped lang="scss">
	.car {
		.buycart-main {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
			width: 336px;
			margin: 25px auto;
			background-color: #fff;
			border-radius: 12px;
			padding: 10px 10px;
			box-sizing: border-box;

			.checks {}
		}

		.img {
			width: 68px;
			height: 68px;

			image {
				width: 68px;
				height: 68px;
			}
		}

		.info {
			// margin-left: 10px;
		}

		.name {
			font-size: 13px;
			color: #3e3e3e;
		}

		.skuid {
			font-size: 11px;
			color: #8d8d8d;
		}

		.price {
			font-size: 11px;
			color: #8d8d8d;
		}

		.quantity {
			font-size: 11px;
			color: #8d8d8d;
		}

		.steps {
			width: 100%;
			display: flex;
			background-color: #fff;
			justify-content: flex-end;

			.reduce {
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
				height: 30px;
				background: #f1ece7;
				text-align: center;
				line-height: 30px;
				font-size: 15px;
				margin: 0 3px;
			}

			.add {
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

		.footer {
			position: fixed;
			display: flex;
			justify-content: space-around;
			align-items: center;
			// margin: 5px;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 75px;
			background-color: #fff;

			.prices {
				display: flex;
				align-items: center;
			}

			.jie {
				display: inline-block;
				width: 104px;
				height: 40px;
				background: #354e44;
				border-radius: 14px;
				color: #fff;
				font-size: 18px;
				line-height: 40px;
				text-align: center;
				margin-left: 10px;
			}

			.ck {
				margin-left: 10px;
			}
		}
	}
</style>
