<template>
	<!-- 地址 -->
	<view class="content">
		<view class="list">
			<view class="row" v-for="(item,index) in list" :key="index" @tap="select(item)">
				<view class="name">
					<view class="title">
						{{item.name}}
					</view>
					<view class="defult" v-if="item.defaultStatus">
						默认
					</view>
					<view class="tel">{{item.phoneNumber}}</view>
				</view>
				<view class="address" v-if="item.address">{{ item.province }}-{{ item.city }}-{{ item.region }}</view>
				<view class="right">
					<view class="icon" @tap.stop="edit(item)">
						<image src="../../../static/icons/edit.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="add">
			<view class="btn" @tap="add">
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	import {
		findAllAddress
	} from "../../../api/user/address/address.js"
	import mix from "../../mixins/index.js"
	export default {
		mixins: [mix],
		data() {
			return {
				list: [],
				isSelect: false,
			}
		},
		methods: {
			init() {
				findAllAddress().then(res => {
					console.log(res)
					this.list = res.data.items
				})
			},
			edit(item) {
				uni.navigateTo({
					url: "./add/add?addressId=" + item.id
				});
			},
			add() {
				uni.navigateTo({
					url: "./add/add"
				});
			},
			select(item) {
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if (!this.isSelect) {
					return;
				}
				uni.setStorageSync("selectAddress", item);
				
				uni.navigateBack({
					delta: 1
				});
				
				// uni.navigateTo({
				// 	url: "/pages/order/order"
				// });
			},
		},
		onLoad(e) {
			this.init()
			// console.log("1111111111111",e) 
			if (e.type == "select") {
				this.isSelect = true;
			}
		},
		onShow() {
			this.checkLogin(this.init());
		},
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;

		.list {
			width: 100%;
			// display: flex;
			justify-content: center;
			align-items: center;

			.row {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				width: 94%;
				padding: 10px 0;
				border-bottom: 1Px solid #ccc;
				margin: 0 auto;

				.name {
					display: flex;
					width: 70%;
					margin-left: 15px;
					align-items: baseline;
					margin-bottom: 10px;
					flex-wrap: wrap;

					.title {
						font-size: 14px;
					}

					.defult {
						font-size: 11px;
						background-color: #354e44;
						color: #fff;
						padding: 0 9px;
						border-radius: 4px;
						margin-left: 10px;
					}
				}

				.tel {
					width: 100%;
					margin-top: 5px;
					font-size: 12px;
					color: #999;
				}
			}

			.right {
				align-items: center;
				margin-left: 10px;

				.icon {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 40px;
					height: 30px;
					border-left: solid 0.5px #aaa;
					font-size: 20px;
					color: #777;

					image {
						width: 20px;
						height: 20px;
						opacity: .8;
					}
				}
			}


		}

		.add {
			position: fixed;
			display: flex;
			bottom: 0;
			width: 100%;
			height: 35px;
			justify-content: center;
			align-items: center;

			.btn {
				display: flex;
				box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
				width: 70%;
				height: 35px;
				border-radius: 80px;
				background-color: #354E44;
				color: #fff;
				justify-content: center;
				align-items: center;


			}
		}
	}
</style>
