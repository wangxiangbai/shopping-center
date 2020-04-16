<template>
	<div id="box">
		<el-button class="back_button" @click="turn_to_back" ><i class="el-icon-back"></i>返回</el-button>
		<div id="detail_list">
			<!--            商品列表-->
			<div class="detail" v-bind:key="index" v-for="(detail,index) in detail_list">
				<div class="detail_img_div">
					<img class="detail_img" :src="detail.img_list_url">
				</div>
				<div class="detail_imgs">
					<div><img :src="imgs_list[0]" alt=""></div>
					<div><img :src="imgs_list[1]" alt=""></div>
					<div><img :src="imgs_list[2]" alt=""></div>
					<div><img :src="imgs_list[3]" alt=""></div>
					<div><img :src="imgs_list[4]" alt=""></div>
				</div>
				<div class="detail-right">
					<span style="font-size: 25px;"><strong>{{detail.title}}</strong></span><br>
					<span>{{detail.supplier}}</span><br>
					<span style="color: rgb(255,55,0)"><strong>￥{{detail.price}}</strong></span>
					<span>
						<el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}">
						</el-rate>
					</span>
					<el-button type="danger" style="width: 150px;" @click="shoppingBtn(detail.Id)">添加到购物车</el-button>

				</div>

			</div>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		name: "detail",
		data() {
			return {
				detail_list: [], //详情数据列表
				imgs_list: [], //图片列表
				value:3.7
			}
		},
		methods: {
			get_detail_list: function(e) {
				console.log(e);
				const self = this;
				axios.get('http://vebcoder.cn/api/detail', {
					params: {
						goodId: this.$route.params.type
					}
				}).then(
					function(response) {
						console.log(response.data);
						// console.log(response.data[0].imgs);
						self.detail_list = response.data;
						self.imgs_list = response.data[0].imgs.substring(2, response.data[0].imgs.length - 2).split('","');
						// console.log(self.imgs_list);
						// this.$forceUpdate()
					}
				)
			},
			turn_to_back: function () {
			    this.$router.back()
			},
			shoppingBtn:function(e){
				alert("添加成功");
				console.log(e);
				this.$router.push('/shoplist/'+e)
				
			}
		},
		mounted() {

			// console.log(this.$route.params.type)

			this.get_detail_list({
				"detail_one": this.$route.params.type
			})
		},
		watch: {
			$route: function() {
				this.get_detail_list({
					"detail_one": this.$route.params.type
				})
			}
		}
	}
</script>

<style scoped>
	#box {
		width: 1100px;
		margin: 0 auto;
		border: solid 2px lawngreen;
	}

	#detail_list {
		width: 1100px;
		height: 500px;
		/* position: relative; */
		/* top: 20px; */
		margin: 0 auto;
		/*设置内容均匀显示*/
		display: flex;
		justify-content: space-around;
		/*超出一行就换行*/
		flex-wrap: wrap;
		/* border: solid 2px #000000; */
	}

	.detail {
		height: 100%;
		width: 100%;
		/* border: solid 2px skyblue; */
	}

	.detail_img_div {
		width: 38%;
		height: 80%;
		/* border: solid 2px hotpink; */
	}

	img {
		height: 100%;
		width: 100%;
	}

	.detail_imgs {
		width: 38%;
		height: 18%;

	}

	.detail_imgs div {
		width: 19%;
		height: 95%;
		float: left;
		margin: 2px;

	}

	.detail-right {
		width: 30%;
		height: 50%;
		/* border: solid 1px #000000; */
		position: relative;
		top: -400px;
		right: -600px;
	}

	span {
		width: 100%;
		height: 17%;
		/* border: solid 2px #000000; */
		float: right;
		position: relative;
		line-height: 40px;
	}
</style>
