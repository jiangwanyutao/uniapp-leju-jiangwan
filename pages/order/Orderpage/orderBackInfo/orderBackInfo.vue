<template>
	<view class="order-back">
		<view class="card">
			<view class="order-title">
				<view>订单编号: {{info.orderSn}}</view>
			</view>
			<!-- skublock -->
			<view class="sku-block">
				<image class="img" :src="info.productPic" mode=""></image>
				<view class="info">
					<view class="p1">
						<view class="title">{{info.productName}}</view>
						<view class="price">¥{{info.productPrice }}</view>
					</view>
					<view class="p2">
						<view>编号：{{info.productSn}}</view>
						<view>x {{info.productCount}}</view>
					</view>
					<view class="p3">
						<view style="margin-right: 10rpx;" v-for="(ele,idx) in info.productAttr" :key="idx">{{ ele.key }} : {{ ele.value }} </view>
					</view>
				</view>
			</view>
			<view class="total-price">
				<view>合计: ¥{{info.returnAmount}}</view>
			</view>
		</view>
		<view class="per">
			<view class="title">退单数量:</view>
			<view>{{info.productCount}}</view>
		</view>
		<view class="per">
			<view class="title">退货原因:</view>
			<input type="view" disabled v-model="info.reason" placeholder="退货原因" />
		</view>
		<view class="per">
			<view class="title">退货公司:</view>
			<view>{{companyName}}</view>
			
		</view>
		<view class="bak per">
			<view class="title">问题描述:</view>
			<input type="view" disabled v-model="info.description" placeholder="问题描述" />
			
		</view>
		<view class="per upload">
			<view>
				<view class="title">
					<strong>温馨提醒:</strong>
					<view>
						上传图片总大小不能超过3m，单个文件大小不能超过1m，图片总个数不能超过3张
					</view>
				</view>
				<view class="uploadImg">
					<view class="imgList">
						<view class="box" v-for="item in info.proofPics">
							<image  :src="item" mode=""></image>	
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="split" style="padding: 10px 0;"> </view>
		<view class="per">
			<view class="title">订单状态:</view>
			<view>{{info.status | orderProcessText}}</view>
		</view>
		<view class="per">
			<view class="title">处理人:</view>
			<view>{{info.handleMan}}</view>
		</view>
		<view class="per">
			<view class="title">处理时间:</view>
			<view>{{info.handleTime}}</view>
		</view>
		<view class="per">
			<view class="title">处理意见:</view>
			<view>{{info.handleNote}}</view>
		</view>
		<view class="per">
			<view class="title">接收人:</view>
			<view>{{info.receiveMan}}</view>
		</view>
		<view class="per">
			<view class="title">接收时间:</view>
			<view>{{info.receiveTime}}</view>
		</view>
		<view class="per">
			<view class="title">备注:</view>
			<view>{{info.receiveNote}}</view>
		</view>
		<view class="per">
			<view class="title">客服电话:</view>
			<view>(0371) 5560 2883</view>
		</view>
	</view>
</template>

<script>
	import {
		addOrderReturnApply,
		getCompanyAddrss,
		orderReturn,
	} from "../../../../api/order/Orderpage/index.js"
	export default {
		name: 'OrderBack',
		data(){
			return {
				companyList:[],
				info:{}
			}
		},
		computed:{
			// 筛选退货公司,根据id判断渲染页面
			companyName(){
				var item = this.companyList.find(ele =>ele.id == this.info.companyAddressId);
				if(item){
					return item.addressName
				}else{
					return ""
				}
			}
		},
		filters:{
			orderProcessText(process) {
				var text = '等待处理';
				switch (JSON.stringify(process)) {
					case '0':
						text = '等待处理';
						break;
					case '1':
						text = '确认退货,等待发货';
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
		onLoad(val){
			if(!val.backOrder){
				uni.showToast({
					title:'获取退单信息失败,请返回重试!'
				})
				return 
			}
			this.orderReturn(val.backOrder);
			this.getCompanyList();
		},
		methods:{
			// 获取收货地址
			getCompanyList(){
				getCompanyAddrss()
				.then(res =>{
					this.companyList = res.data.items;
				})
			},
			//获取退单明细
			orderReturn(val){
				orderReturn(val)
				.then(res=>{
					res.data.orderReturnApply.productAttr = JSON.parse(res.data.orderReturnApply.productAttr);
					res.data.orderReturnApply.proofPics = res.data.orderReturnApply.proofPics == "" ? [] :res.data.orderReturnApply.proofPics.split(",");
					this.info = res.data.orderReturnApply;
				})
			},
			
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
						overflow: hidden;
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