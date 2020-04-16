<template>
	<div>
		<div id="goods_type_list">
			<span v-bind:key="index" v-for="(one_type,index) in goods_type" class="goods_type" @click="turn_to_type(one_type)">
				<el-button round style="height: 30px; width: 100px; line-height: 5px;">{{one_type}}</el-button>
			</span>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "goods_types",
		data() {
			return {
				goods_type: [],
			}
		},
		methods: {
			turn_to_type: function(e) {
				// console.log(e);
				this.$router.push('/list/' + e)
			}
		},
		mounted() {
			//获取首页商品分类
			const self = this;
			axios.get('http://vebcoder.cn/api/getTypeone').then(
				function(response) {
					self.goods_type = response.data;
				}
			);
		}
	}
</script>

<style scoped>
	#goods_type_list {
		width: 1200px;
		margin: -20px auto;
		/* border: solid 5px #008B8B; */
		/*设置下移20px*/
		position: relative;
		top: 20px;
		/*设置内部div均匀显示*/
		display: flex;
		justify-content: space-around;
	}

	.goods_type {
		/*width: 100%;*/
		border-radius: 20px;
		float: contour;
		width: 110px;
		/*设置文字上下居中*/
		line-height: 35px;
		height: 35px;
		/*文字左右居中*/
		text-align: center;
		color: #666;
		margin: 10px;
		/* border: solid 5px #008B8B; */
	}

	.goods_type:hover {
		/*设置鼠标移上去时的动画*/
		/*  transition: all 2s;
        background-color: rgb(134, 18, 171);
        color: white; */
	}
</style>
