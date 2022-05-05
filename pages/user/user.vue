<template>
	<view class="user">
		<button type="default" plain="true" class="btn" @tap="btn">修改用户信息</button>
		<!-- 初始样式 -->
		<view class="user-center" v-if="show">
			<view class="item">
				<view class="label">
					头像
				</view>
				<view>
					<image :src="userInfo.icon"></image>
				</view>
			</view>
			<view class="item">
				<view class="label">
					用户名
				</view>
				<view class="ipt">
					{{userInfo.username}}
				</view>
			</view>
			<view class="item">
				<view class="label">
					昵称
				</view>
				<view class="ipt">
					{{userInfo.nickname}}
				</view>
			</view>
			<view class="item">
				<view class="label">
					手机号
				</view>
				<view class="ipt">
					{{userInfo.phone}}
				</view>
			</view>
		</view>
		<!-- 点击显示样式 -->
		<view class="user-center" v-else>
			<view class="item">
				<view class="label">
					头像
				</view>
				<view>
					<button type="default" @tap="uploadImg" plain="true" v-if="imgshow" class="upimg">
						上传图片
					</button>
					<image :src="imgPath" v-else></image>
				</view>
			</view>
			<view class="item">
				<view class="label">
					用户名
				</view>
				<view class="ipt">
					登录id无法修改
				</view>
			</view>
			<view class="item">
				<view class="label">
					昵称
				</view>
				<view>
					<input type="text" value="nickname" v-model="nickname" class="ipt" />
				</view>
			</view>
			<view class="item">
				<view class="label">
					手机号
				</view>
				<view>
					<input type="text" value="phone" v-model="phone" class="ipt" />
				</view>
			</view>
		</view>
		<button type="default" @tap="login" class="back" v-if="show">退出登录</button>
		<button type="default" @tap="lmessge" class="back" v-else>更新信息</button>
	</view>
</template>

<script>
	import {updateMemberInfo} from "../../api/user/index.js"
	export default {
		data() {
			return {
				userInfo: [],
				imgPath: "",
				imgshow: true,
				show:true,
				nickname: "",
				phone: ""
			}
		},
		methods: {
			init() {
				this.userInfo = uni.getStorageSync("userInfo");
				this.nickname = this.userInfo.nickname
				this.phone = this.userInfo.phone
				console.log(this.userInfo)
			},
			// 退出登录
			login() {
				uni.removeStorageSync('token');
				uni.removeStorageSync('userInfo');
				this.userInfo=""
				this.nickname = ""
				this.phone = ""
				uni.navigateTo({
					url: "/pages/mine/login/login"
				})
			},
			btn(){
				this.show = false
			},
			// 上传照片
			uploadImg() {
				var _this = this;
				uni.chooseImage({
					sourceType: ["album"],
					success(res) {
						if (res.tempFiles.length > 1) {
							uni.showToast({
								title: "一次性只能选择一张图片",
								icon: "none"
							})
							return
						}
						uni.uploadFile({
							url: "https://leju.bufan.cloud/lejuClient/login/uploadAvatar",
							filePath: res.tempFilePaths[0],
							name: "file",
							success(result) {
								console.log(result);
								_this.imgPath = JSON.parse(result.data).data.fileUrl;
								if (_this.imgPath) {
									_this.imgshow = !_this.imgshow
								}
							}
						})

					}
				})
			},
			// 更新信息
			lmessge(){
				console.log(this.imgPath)
				updateMemberInfo({
					birthday:"",
					city:"",
					icon:this.imgPath,
					id:this.userInfo.id,
					nickname:this.nickname,
					phone:this.phone,
					personalizedSignature:"",
					sex:""
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title: '更新成功，即将跳转重新登录',
						icon:"success"
					});
					uni.removeStorageSync('token');
					uni.removeStorageSync('userInfo');
				})
				// 跳转重新登录
				setTimeout(() => {
				uni.navigateTo({
					url: "/pages/mine/login/login"
				})
				}, 2000)
				
			}
		
		},
		onLoad(option) {
			this.init()
		}
	}
</script>

<style scoped lang="scss">
	.user {
		.btn {
			width: 130px;
			height: 30px;
			margin: 10px auto;
			margin-left: 210px;
			text-align: center;
			line-height: 30px;
			font-size: 14px;
		}

		.item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 16px;
			line-height: 47px;
			box-sizing: border-box;
			padding: 5px 15px;
			border-bottom: 1px solid #e5e5e5;
			text-align: right;

			image {
				width: 60px;
				height: 60px;
				border-radius: 50%;
			}
		}

		.ipt {
			color: #a1a1a1;
		}

		.upimg {
			width: 100px;
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-size: 15px;
		}

		.back {
			width: 200px;
			background-color: #354e44;
			color: #ffffff;
			margin-top: 100px;
		}
	}
</style>
