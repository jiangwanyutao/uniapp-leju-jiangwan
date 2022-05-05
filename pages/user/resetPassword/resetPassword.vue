<template>
	<!-- 重置密码页面 -->
	<view class="reset">
		<view class="reset-s">
			若你忘记了密码，可在此重置新密码。
		</view>
		<view class="main">
			<uni-easyinput v-model="phoneData" placeholder="请输入手机号码" placeholderStyle="font-size:16px;"></uni-easyinput>
		</view>

		<view class="main">
			<uni-easyinput type="password" v-model="passData" placeholder="请输入密码" class="ipt"
				placeholderStyle="font-size:16px;"></uni-easyinput>
		</view>
		<view class="main">
			<uni-easyinput v-model="verCode" placeholder="请输入验证码" placeholderStyle="font-size:16px;"></uni-easyinput>
			<view class="sendCaptcha">
				<view class="verticalLine"></view>
				<view class="cap-text" @tap="sendCaptcha">{{!captchaTime?'获取验证码':captchaTime+'s'}}</view>
			</view>
		</view>
		<button type="default" @tap="submits" class="but" v-if="show">重置密码</button>
		<button type="default" loading class="buts" v-else></button>
	</view>
</template>

<script>
	import {
		resetPassword
	} from "../../../api/user/index.js"
	export default {
		data() {
			return {
				phoneData: "", //电话
				passData: "", //密码
				verCode: "", //验证码
				captchaTime: 0, //倒计时
				show:true

			}
		},
		methods: {
			sendCaptcha() {
				// 判断手机号
				if (this.phoneData.length != 11) {
					uni.showToast({
						icon: 'error',
						title: '手机号格式不正确'
					});
					return;
				}
				/* 验证码倒计时*/
				if (this.captchaTime > 0) {
					uni.showToast({
						title: '不能点击重复获取',
						icon: 'error'
					})
				} else {
					this.captchaTime = 60;
					let timer = setInterval(() => {
						this.captchaTime--;
						// console.log(this.captchaTime)
						if (this.captchaTime < 1) {
							clearInterval(timer);
							this.captchaTime = 0
						}
					}, 1000)
				}

			},
			submits() {
				// 判断手机号
				if (this.phoneData.length != 11) {
					uni.showToast({
						icon: 'error',
						title: '手机号格式不正确'
					});
					return;
				}
				// 判断密码
				if (this.passData.length < 6) {
					uni.showToast({
						icon: 'error',
						position: 'bottom',
						title: '密码最低6位数'
					});
					return;
				}
				// 验证码
				if (this.verCode.length != 4) {
					uni.showToast({
						icon: 'error',
						title: '请输入4位验证码'
					});
					return;
				}
					this.show=false;
				// 重置密码
				resetPassword(this.phoneData).then(res => {
					// console.log(res)
					setTimeout(() => {
					uni.navigateTo({
						url: "/pages/mine/login/login"
					})
					}, 1000)
				})
				uni.showToast({
					icon: 'success',
					title: '修改成功'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.reset {
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 35px;
		padding-right: 35px;

		.reset-s {
			color: #999;
			font-size: 14px;
			margin-top: 32px;
			margin-left: 24px;
		}

		.main {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 8px;
			color: #333;
			padding: 16px;
			margin-top: 12px;
			margin-bottom: 12px;
			border: none;
			border-radius: 2.5rem;
			-webkit-box-shadow: 0 0 30px 0 #2b56701a;
		}

		::v-deep.is-input-border {
			width: 100%;
			height: 20px;
			border: none;
			font-size: 20px;
		}

		.cap-text {
			font-size: 16px;
			color: #333;
		}

		.but {
			width: 100%;
			background: #354e44;
			color: #fff;
			margin-top: 20px;
		}
		.buts {
			width: 20%;
			background: #354e44;
			color: #fff;
			margin-top: 20px;
		}
	}
</style>
