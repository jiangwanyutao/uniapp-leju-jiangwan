<template>
	<view class="login">
		<view class="login-item">
			<image src="../../../static/icons/leju-logo.png"></image>
		</view>
		<view class="main">
			<input type="text" value="username" class="inp" placeholder="请输入手机号/邮箱" v-model="username" />
			<input type="password" value="password" class="inp" placeholder="请输入密码" maxlength="10" v-model="password" />
		</view>

		<view class="buts">
			<view class="but-txt" @tap="init">
				登录
			</view>
		</view>
		<view class="footer">
			<view class="find" @tap="reset">
				找回密码
			</view>
			<view class="tit">
				|
			</view>
			<view class="find" @tap="register">
				注册账号
			</view>
		</view>
	</view>
</template>

<script>
	import {
		doLogin,
		getMemberInfo
	} from "../../../api/mine/login/index.js"
	export default {
		data() {
			return {
				username: "18337600696",
				password: "123456",
			}
		},
		methods: {
			// 找回密码
			reset() {
				uni.navigateTo({
					url: "../../user/resetPassword/resetPassword"
				})
			},
			//注册账号
			register() {
				uni.navigateTo({
					url: "/pages/user/register/register"
				})
			},

			init() {
				console.log(this.password)
				// 登录
				doLogin({
					username: this.username,
					password: this.password
				}).then(res => {
					console.log(res)
					if (res.success) {
						// 登录成功存储token  封装的请求头携带
						uni.setStorageSync("token", res.data.token);
						// 获取登陆的用户信息
						getMemberInfo().then(result => {
							console.log(result)
							uni.setStorageSync("userInfo", result.data.userInfo);
							//关闭提示后跳转
							setTimeout(() => {
								uni.switchTab({
									url: "../mine"
								})
							}, 1000)
						})
						//登录成功提示
						uni.showToast({
							title: "登录成功，即将跳转",
							icon: "success",
						});
					} else {
						uni.showToast({
							title: "请检查账号或者密码是否正确，未注册，需要先注册登录",
							icon: "error",
							duration: 2000
						});
					}

				})
			}

		},
		onLoad() {
		}
	}
</script>

<style scoped lang="scss">
	.login {
		width: 100%;

		.login-item {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			background-color: #000;
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
			flex-direction: column;
			padding-left: 35px;
			padding-right: 35px;

			.inp {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				height: 18px;
				color: #333;
				padding: 16px;
				margin-top: 12px;
				margin-bottom: 12px;
				box-shadow: 0 0 30px 0 #2b56701a;
				border-radius: 10px;
			}
		}

		.buts {
			width: 100%;
			width: 50px;
			padding-top: 40px;
			text-align: center;
			color: #fff;

			.but-txt {
				width: 305px;
				height: 50px;
				line-height: 50px;
				text-align: center;
				background: #354e44;
				margin-left: 20px;
				padding-right: 20px;
				border-radius: 2.5rem;
			}
		}

		.footer {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			margin-top: 32px;
			color: #000000b3;
			text-align: center;
			height: 20px;
			line-height: 20px;

			.find {
				margin-left: 5px;
				margin-right: 5px;
			}
		}
	}
</style>
