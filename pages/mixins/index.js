var obj = {
	// data(){
	// 	return {
	// 		name:"张三"
	// 	}
	// },
	methods: {
		checkLogin() {
			var token = uni.getStorageSync("token");
			if (token) {
				return true
			} else {
				uni.showModal({
					title: "登录提示",
					content: "暂未登录，是否跳转到登录界面",
					success(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: "/pages/mine/login/login"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.showToast({
								title: '您取消了',
								icon:"error"
							});
						}
					}
				})
				return false
			}
		}
	},
	// onLoad(){
	// 	console.log("多个页面会用到的钩子函数")
	// }
}


export default obj
