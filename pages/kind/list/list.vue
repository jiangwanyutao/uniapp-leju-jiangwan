<template>
	<!-- list页面 -->

	<view class="list">
		<!-- 顶部栏 -->
		<view class="tabBox">
			<view v-for="(item,index) in tabList" class="item " @tap="tabEvents(index)" :key="item.name">
				<view :class="index == currentIndex ? 'active' : ''">{{ item.name }} </view>
				<view class="iconBox" v-if="item.name == '销量' || item.name == '价格'">
					<uni-icons type="top" size="12" :color="item.current == 'up' ? 'red' : ''"></uni-icons>
					<uni-icons type="bottom" :color="item.current == 'down' ? 'red' : ''" size="12"></uni-icons>
				</view>
			</view>
		</view>
		<view class="saleMost">
			<view class="Products" v-for="item in rows" :key='item.id'  @tap="golist(item.id)">
				<view class="img">
					<image :src="item.pic"></image>
				</view>
				<view class="name">
					{{item.name}}
				</view>
				<view class="shows">
					<view>
						￥{{item.price}}
					</view>
					<view>
						乐居
					</view>
				</view>

			</view>
		</view>
	</view>
	</view>

</template>

<script>
	import {
		mapstate,
		mapMutations
	} from "vuex"
	import {
		findProductList
	} from "../../../api/kind/list/index.js"
	export default {
		data() {
			return {
				id: "",
				rows: [],
				currentIndex: 0,
				start: 1,
				total: 0,
				isDesc: "",
				sortBy: '',
				queryId: "",
				tabList: [{
						name: "新品",
						current: "default" // default up down
					},
					{
						name: "销量",
						current: "default" // default up down
					},
					{
						name: "价格",
						current: "default" // default up down
					},
					{
						name: "筛选",
						current: "default" // default up down
					}
				]
			};

		},
		methods: {
			init() {
				findProductList(this.start, 10, {
					"brandId": "",
					"categoryId": this.id,
					"isDesc": this.isDesc,
					"keywords": "",
					"sortBy": this.sortBy
				}).then(res => {
					// console.log(res)
					this.rows.push(...res.data.rows);
					this.total = res.data.total;
					uni.stopPullDownRefresh();
				})
			},
			// 跳转到详情页
			golist(id){
				uni.navigateTo({  
				    url: `./info/info?id=${id}`
				});
			},
			tabEvents(index) {
				// 重置
				this.rows = [];
				this.start = 1;
				this.currentIndex = index;
				this.tabList.forEach((ele, idx) => {
					// 重置的应是非当前点击tab栏的数据
					if (idx != index) {
						ele.current = "default"
					}
				})
				//切换下一个点击的数值
				if (this.tabList[index].current == "default") {
					this.tabList[index].current = "up";
					this.isDesc = 1;
				} else if (this.tabList[index].current == "up") {
					this.tabList[index].current = "down"
					this.isDesc = 0;
				} else {
					this.tabList[index].current = "up";
					this.isDesc = 1;
				}
				// 切换销量价格
				if (index == 1) {
					this.sortBy = "sale"
				} else if (index == 2) {
					this.sortBy = "price"
				} else {
					this.sortBy = "";
					this.isDesc = ""
				}
				this.init();
			},
		},
		onLoad(options) {
			this.id = options.id
			// console.log(this.id)
			this.init()
		},
		onPullDownRefresh() {
			// console.log("下拉刷新");
			// 请求页面最新的数据
			this.sortBy = "";
			this.isDesc = "";
			this.rows = [];
			this.start = 1;
			this.init();
		},
		onReachBottom() {
			// console.log("上拉加载");
			// 请求下一页数据
			this.start++;
			// 没数据之后  禁止发送网络请求
			if (this.rows.length < this.total) { // 9 9
				this.init();
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.tabBox {
		position: fixed;
		z-index: 99;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-around;
		padding: 10px 0;
		background: #354e44;
		color: #ffffff;
		margin: 0;

		.item {
			display: flex;
			align-items: center;

			.iconBox {
				display: flex;
				align-items: center;
				flex-direction: column;
			}
		}

		.active {
			color: red;
		}
	}

	.saleMost {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 60px;
	    margin-top: -1px;
	padding-top:60px;

		.Products {
			width: 45%;
			box-sizing: border-box;
			background: #FFFFFF;
			margin: 5px;

			.img {
				width: 100%;
				height: 119px;

				image {
					width: 100%;
					height: 119px;
				}
			}

			.name {
				color: #3e3e3e;
				margin-top: 4px;
				font-weight: 400;
				margin-left: 10px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}

			.shows {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 10px;
			}
		}
	}
	
</style>
