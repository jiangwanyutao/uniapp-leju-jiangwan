<template>
	<!-- 注册页面 -->
	<view class="register">
		<!-- 头像 -->
		<view class="head">
			<image src="../../../static/icons/leju-logo.png"></image>
		</view>
		<view class="main">
			<uni-easyinput v-model="tel" placeholder="请输入手机号码" placeholderStyle="font-size:16px;"></uni-easyinput>
		</view>

		<view class="main">
			<uni-easyinput type="password" v-model="password" placeholder="请输入登录密码" class="ipt"
				placeholderStyle="font-size:16px;"></uni-easyinput>
		</view>

		<view class="main">
			<uni-easyinput v-model="username" placeholder="请输入用户名,该用户名用于登录" placeholderStyle="font-size:16px;">
			</uni-easyinput>
		</view>

		<view class="main">
			<uni-easyinput v-model="nickname" placeholder="请输入昵称" placeholderStyle="font-size:16px;"></uni-easyinput>
		</view>

		<view class="main">
			<uni-easyinput v-model="verCode" placeholder="请输入验证码" placeholderStyle="font-size:16px;"></uni-easyinput>
			<view>
				<view class="cap-text" @tap="sendCaptcha">{{!captchaTime?'获取验证码':captchaTime+'s'}}</view>
			</view>
		</view>

		<button type="default" @tap="submits" class="but">注册</button>
		<view class="footer">
			<checkbox-group @change="checkboxChange">
				<checkbox style="transform:scale(0.7)" />
			</checkbox-group>
			同意
			<navigator url="#" style="color:red">
				用户协议</navigator>
		</view>

	</view>
</template>

<script>
	import {
		register
	} from "../../../api/user/index.js"
	export default {
		data() {
			return {
				tel: '', // 用户/电话
				password: '', //密码
				verCode: '', //验证码
				nickname: '', // 昵称
				username: '', //用户名
				showAgree: false, //协议是否选择
				captchaTime: 0, //倒计时

			}
		},
		methods: {
			// 点击同意协议
			checkboxChange() {
				console.log("chufale ")
				this.showAgree = !this.showAgree
				console.log(this.showAgree)
			},
			// 验证码
			sendCaptcha() {
				// 判断手机号
				if (this.tel.length != 11) {
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
			// 点击注册
			submits() {
				if (this.showAgree == false) {
					uni.showToast({
						icon: 'error',
						title: '请先同意《用户协议》'
					});
					return false;
				}

				if (this.tel.length != 11) {
					uni.showToast({
						icon: 'error',
						title: '手机号格式不正确'
					});
					return false;
				}
				if (this.username.length < 2) {
					uni.showToast({
						icon: 'error',
						title: '用户名长度2~12'
					});
					return false;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'error',
						title: '密码最低6位'
					});
					return false;
				}
				if (this.verCode.length != 4) {
					uni.showToast({
						icon: 'error',
						title: '请输入4位验证码'
					});
					return false;
				}

				register({
					nickname: this.nickname,
					password: this.password,
					phone: this.tel,
					username: this.username,
				}).then(res => {
					console.log(res)
					setTimeout(() => {
						uni.switchTab({
							url: "../../mine/mine"
						})
					}, 1000)
					if (res.success) {
						//登录成功提示
						uni.showToast({
							title: "注册成功，即将跳转",
							icon: "success",
						});
					} else {
						uni.showToast({
							title: "请检查用户名是否已被注册或格式不正确",
							icon: "error",
							duration: 2000
						});
					}
				})


			}

		}
	}
</script>

<style scoped lang="scss">
	.register {
		display: flex;
		flex-direction: column;
		padding-left: 35px;
		padding-right: 35px;

		.head {
			width: 80px;
			height: 80px;
			box-shadow: 0px 0px 30px 0px #0000001a;
			border-radius: 50%;
			// background-color: #000;
			margin-top: 64px;
			margin-bottom: 36px;
			margin-left: auto;
			margin-right: auto;

			image {
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}
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

		.footer {
			display: flex;
			margin: 10px auto;
		}
	}
</style>
