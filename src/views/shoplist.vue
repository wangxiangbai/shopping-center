<template>
	<div id="shoplist">
		<Goods_types></Goods_types>
		<div class="shop-conent">购物车界面</div>
	</div>
</template>

<script>
	import Goods_types from "../components/goods_types";
	export default {
		name: "shoplist",
		components: {
			Goods_types
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	#shoplist {
		width: 1200px;
		position: relative;
		top: 35px;
		margin: 0 auto;
		/*设置内容均匀显示*/
		display: flex;
		justify-content: space-around;
		/*超出一行就换行*/
		flex-wrap: wrap;
	}
	.shop-conent{
		width: 500px;
		height: 500px;
		margin: 50px;
		border: solid 2px darkblue;
	}
</style>
