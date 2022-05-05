<template>
	<!-- 退单页面 -->
	<view class="order-back" v-if="orderInfo.orderBase">
		<div class="card">
			<div class="order-title">
				<view>订单编号: {{orderInfo.orderBase.orderSn}}</view>
			</div>
			<!-- skublock -->
			<div class="sku-block" v-for="item in orderInfo.orderItems">
				<image class="img" :src="item.productPic" mode=""></image>
				<div class="info">
					<div class="p1">
						<view class="title">{{item.productName}}</view>
						<view class="price">¥{{item.realAmount }}</view>
					</div>
					<div class="p2">
						<view>编号：{{item.productSn}}</view>
						<view>x {{item.productQuantity}}</view>
					</div>
					<div class="p3">
						<view style="margin-right: 10rpx;" v-for="(ele,idx) in item.productAttr" :key="idx">{{ ele.key }} : {{ ele.value }} </view>
					</div>
				</div>
			</div>
			<div class="total-price">
				<view>合计: ¥{{orderInfo.orderBase.totalAmount}}</view>
			</div>
		</div>
		<div class="per" v-if="companyList.size>0">
			<div class="title">请选择退单公司:</div>
			<picker mode="selector" :range="companyList" range-key="id" @change="selectAddress" :value="current">
				<view>{{companyList[current].addressName}}</view>
			</picker>
		</div>
		<div class="per" >
			<div class="title">请选择退单数量:</div>
			<view>{{orderInfo.orderItems[0].productQuantity}}</view>
		</div>
		<div class="per">
			<div class="title">请输入退货原因:</div>
			<input type="text"  v-model="reason" placeholder="请输入退货原因" />
		</div>
		<div class="per">
			<div class="title">请选择退货地址:</div>
			<picker @change="bindPickerChange" range-key="addressName" :value="current" :range="companyList">
				<view class="uni-input">{{current == "" ? "请选择退货地址" : companyList[current].addressName}}</view>
			</picker>
		</div>
		<div class="bak per">
			<div class="title">请输入问题描述:</div>
			<textarea class="text-area"  v-model="description"  placeholder="请输入问题描述" />
		</div>
		<view class="per upload">
			<view>
				<view class="title">
					<strong>温馨提醒:</strong>
					<view>
						上传图片总大小不能超过3m，单个文件大小不能超过1m，图片总个数不能超过3张
					</view>
				</view>
				<view class="uploadImg">
					<view class="uploadBtn" @tap="selectImg">
						<image src="../../../../static/icons/up.png" mode=""></image>
						上传图片
					</view>
					<view class="imgList">
						<view class="box" v-for="item in initImgList">
							<image  :src="item" mode=""></image>
							<image class="dels" @tap="delImg(item)" src="../../../../static/icons/shan1.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn-sub" @tap="doBack">提交</view>
	</view>
</template>

<script>
	import {
		addOrderReturnApply,
		getCompanyAddrss,
		uploadImg,
		orderReturn,
		getPreOrderById
	} from "../../../../api/order/Orderpage/index.js"
	import baseUrl from "@/api/baseUrl.js"
	export default {
		data(){
			return {
				product:{},
				status: '1',
				reason:'',
				description: '',
				companyList:[],
				current:0,
				count: 9,
				returnCount: 0,
				name: 'file',   //必填
				url: baseUrl + "/lejuClient/orderReturn/uploadImg",    //必填
				header: {} ,
				obj:{
					proofPics:""
				},
				backOrder:{
					
				},
				skuid:"",
				// 保存图片的数组
				initImgList:[],
				orderInfo:{}
			}
		},
		onLoad(val){
			if(!val.id){
				uni.showToast({
					title:'获取退单信息失败,请返回重试!'
				})
				return 
			}
			this.skuid = val.skuid
			//获取点击退单的详细列表
			this.orderReturnInfo(val.id)
			this.getCompanyList()
		},
		methods:{
			// 点击删除照片
			delImg(val){
				var index = this.initImgList.findIndex(ele =>ele == val);
				this.initImgList.splice(index,1);
			},
			// 上传图片
			selectImg(){
				var _this = this;
				//从本地选取图片进行上传 
				// 1 . 在data中定义数组保存上传的图片
				// 2. 选取成功的时候判断数量总数是否超过三张
				uni.chooseImage({
					// 一次选择的图片最多三张 但是h5端不支持 所以h5端需要单独做适配 手动限制数量count 
					// count:3,
					success(res){
						// 判断选择本地图片数量及尺寸
						const tempFilePaths = res.tempFiles;
						var val = tempFilePaths.find(ele =>ele.size > 1024*1024);
						if(tempFilePaths.length > 3){
							uni.showToast({
								title:"一次选择最多不能超过3张",
								icon:"none"
							})
							return
						}
						if(val){
							uni.showToast({
								title:"单个图片大小不能超过1m"
							})
							return
						}
						if(tempFilePaths.length + _this.initImgList.length > 3){
							uni.showToast({
								title:"图片总个数不能超过3张",
								icon:"none"
							})
							return
						}
						_this.initImgList.push(...res.tempFilePaths)
					}
				})
			},
			// 获取点击的退单列表,渲染页面
			orderReturnInfo(val){
				getPreOrderById(val)
				.then(res=>{
					console.log(".....",res);
					res.data.orderItems.forEach(ele =>{
						ele.productAttr = JSON.parse(ele.productAttr)
					});
					var result = res.data.orderItems.find(ele =>ele.id == this.skuid);
					res.data.orderItems = [result];
					this.orderInfo = res.data;
					
				})
			},
			bindPickerChange(e){
				this.current = e.detail.value
			},
			// 获取退单地址列表
			getCompanyList(){
				getCompanyAddrss()
				.then(res =>{
					this.companyList = res.data.items;
				})
			},
			selectAddress(e){
				var index = e.detail.value;
				this.current = index
			},
			// 上传图片
			upLoadImage(){
				var _this = this;
				uni.showLoading();
				// arr 保存全部异步操作结果  
				var arr = [];
				// 在这一步需要拿到全部的上传之后返回的图片地址
				// 因为上传图片是异步操作 也不知到什么时候上传成功
				// 所以用promise包裹起来 用promise.all 方法等待异步结果全部执行完成
				this.initImgList.forEach((item, index) => { //本地选中的图片组
					var val = new Promise((resolve,rej)=>{
						uni.uploadFile({ //上传图片
							url: _this.url, //上传接口地址
							filePath: item, //一张图
							name: _this.name,
							success: res => {
								resolve(res)
							},
							fail(res){
								rej(res)
							}
						});
					// uploadImg(item).then(res=>{
					// 	console.log(res)
					// })
					})
					arr.push(val);
				});
				return arr
			},
			// 提交退单地址
			async doBack(){
				var result = await this.upLoadImage();
				// 异步结果全部走完之后执行提交流程
				Promise.all(result)
				.then(res =>{
					uni.hideLoading() //关闭加载框
					res.forEach(ele =>{
						// 对数据执行解析操作
						ele.data = JSON.parse(ele.data)
					})
					// 判断是否有图片上传失败
					var val = res.filter(ele =>{
						return ele.data.success == false
					})
					if(val.length != 0 ){
						uni.showToast({
							title:"请检查网络之后重试!",
							icon:"none"
						})
					}else{
						// 筛选上传的数据
						const imgList = res.map(ele =>ele.data.data.fileUrl);
						console.log(imgList)
						var orderReturnObj = {
							"companyAddressId": this.companyList[this.current].id,
							"count": this.orderInfo.orderItems[0].productQuantity,
							"description": this.description,
							"orderId": this.orderInfo.orderBase.id,
							"orderItemId": this.orderInfo.orderItems[0].id,
							proofPics:imgList.join(","),
							"reason": this.reason
						}
						addOrderReturnApply(orderReturnObj).then(res=>{
							if(res.success == true){
								uni.showToast({
									title:"申请退货成功!"
								})
								uni.navigateTo({
									url:"/pages/mine/order/index?type=9"
								})
							}
						})
					}
					
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-back{
		box-sizing: border-box;
		padding:  30rpx 30rpx;
		.services{
			.title{
				color: #3E3E3E;
				font-size: 32rpx;
				line-height: 46rpx;
			}
			.btns{
				display: flex;
				justify-content: flex-start;
				.btn{
					
					width: 124rpx;
					height: 50rpx;
					border: 1px solid #354E44;
					border-radius: 10rpx;
					font-size: 22rpx;
					color: #354E44;
					text-align: center;
					line-height: 50rpx;
					margin: 10rpx 20rpx;
					
					&.active{
						background-color: #354E44;
						color: #fff;
					}
					radio{
						display: none;
					}
				}
			}
		}
		.card {
				// width: 672rpx;
				box-sizing: border-box;
				padding: 36rpx;
				border-radius: 24rpx;
				background-color: #fff;
				margin: 30rpx auto;
				font-size: 24rpx;
				color: #3E3E3E;
		
				.order-title {
					line-height: 33rpx;
					display: flex;
					justify-content: space-between;
		
					.status {
						color: #034C46;
					}
		
					border-bottom: 1px solid #F1ECE7;
					padding-bottom: 30rpx;
				}
		
				.sku-block {
					display: flex;
					justify-content: flex-start;
					border-bottom: 1px solid #F1ECE7;
					padding: 30rpx 0;
		
					.img {
						width: 162rpx;
						height: 162rpx;
						flex-shrink: 0;
						background-color: #8F8F94;
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
								color: #3E3E3E;
							}
		
							.price {
								colro: #8D8D8D;
							}
						}
		
						.p2,
						.p3 {
							font-size: 22rpx;
							color: #8D8D8D;
							line-height: 30rpx;
							margin-top: 5rpx;
						}
		
						.p4 {
							text-align: right;
							margin-top: 10rpx;
							color: #8D8D8D;
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
					justify-content: flex-end;
				}
		
				.btns {
					margin-top: 20rpx;
					display: flex;
					justify-content: flex-end;
		
					.btn {
						width: 124rpx;
						height: 50rpx;
						border: 1px solid #2D4F43;
						font-size: 26rpx;
						border-radius: 10rpx;
						color: #2D4F43;
						text-align: center;
						line-height: 50rpx;
						margin-left: 32rpx;
						&.btn-closed{
							width: auto;
							padding: 0 1em;
							border-color: #DD524D;
						}
					}
				}
		
			}
			.per{
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				font-size: 24rpx;
				padding: 30rpx;
				background: #fff;
				border-bottom: 1Px solid #F1ECE7;
				.title{
					font-size: 24rpx;
				}
				input{
					font-size: 24rpx;
					text-align: right;
				}
				textarea{
					width: 50%;
					font-size: 24rpx;
				}
			}
			.upload{
				.title{
					font-size: 12px;
					    padding: 15px 0;
				}
			}
			.uploadImg{
				display: flex;
				align-items: center;
				.imgList{
					display: flex;
					align-items: center;
					.box{
						width: 120rpx;
						height: 120rpx;
						background: rgba(0,0,0,0.1);
						border-radius: 8rpx;
						
						margin-left: 20rpx;
						position: relative;
						.dels{
							position: absolute;
							top: -10rpx;
							right: -10rpx;
							width: 34rpx;
							height: 34rpx;
						}
					}
					image{
						width: 100%;
						height: 100%;
					}
				}
				.uploadBtn{
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					flex-direction: column;
					font-size: 10px;
					    color: #666;
					width: 120rpx;
					height: 120rpx;
					image{
						width: 58rpx;
						height: 58rpx;
					}
				}
			}
			.btn-sub{
				margin: 120rpx auto;
				width: 536rpx;
				height: 94rpx;
				font-size: 30rpx;
				text-align: center;
				line-height: 94rpx;
				background: #354E44;
				color: #fff;
				border-radius: 14px;
				border-radius: 14px;
			}
		}
</style>
