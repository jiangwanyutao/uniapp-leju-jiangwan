<template>
	<view class="kind">
		<view class="kinds">
			<view v-for="item in list" :key="item.id" class="chuang" @tap="golist(item.id)">
				<view class="name">
					{{item.name}}
				</view>
				<view class="img">
					<image :src="item.icon"></image>
				</view>
			</view>
		</view>

<view class="show">
	<view class="shows" v-for="item in lists" :key="item.id" @tap="golist(item.id)">
		<view class="img">
			<image :src="item.icon" mode=""></image>
			<view class="name">
				{{item.name}}
			</view>
		</view>
	
	</view>
</view>
	</view>
</template>

<script>
	import {
		findCategory
	} from "../../api/kind/kind.js"
	export default {
		data() {
			return {
				list: [],
				lists: []
			}
		},
		methods: {
			init() {
				//查询分类
				findCategory("1308336521604599809").then(res => {
					// console.log(res)
					var datas = res.data.category.children
					for (var i = 0; i < datas.length - 4; i++) {
						this.list.push(datas[i])
					}
					for (var i = 2; i < datas.length - 2; i++) {
						this.lists.push(datas[i])
					}
				})
				// console.log(this.list)
				// console.log(this.lists)
			},
			// 跳转到详情页
		golist(id){
			uni.navigateTo({  
			    url: `./list/list?id=${id}`
			});
		},
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style scoped lang="scss">
	.kind {
		width: 100%;

		// padding-top: 60px;
		.kinds {
			.chuang {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 335px;
				height: 151px;
				background: #d5d5d5;
				border-radius: 20px;
				margin: 28px auto;
				margin-right: 0px;

				.img {
					width: 200px;
					height: 151px;

					image {
						width: 200px;
						height: 151px;
					}
				}
				.name {
					text-align: center;
					font-size: 28px;
					color: #3e3e3e;
					line-height: 100%;
					margin-left:20px;
				}
			}
		}
		.kinds :nth-child(2){
			background-color: #FFFFFF;
		}
		.show{
			  width: 335px;
			  display: flex;
			  margin: 0 auto;
			  margin-bottom: 24px;
			  justify-content: space-between;
			  
			.shows{
					margin-left: 20px;
			.img{
				position: relative;
				image{
					width: 156px;
					height: 221px;
				}
			}
			.name{
				position: absolute;
				top:30%;
				left:20%;
				font-size:24px;
				color: #3e3e3e;
			}
			}
		}
	}
</style>
