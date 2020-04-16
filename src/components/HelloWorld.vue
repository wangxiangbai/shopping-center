<template>
	<div class="helloworld">
		
		<div class="hello">
			<!-- 商品类别表 -->
			<Goods_type></Goods_type>
			<!-- 轮播图 -->
			<div class="slideshow">
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="item in slideshow" :key="item">
						<h3><img :src="item" alt=""></h3>
					</el-carousel-item>
				</el-carousel>
			</div>
			<!-- 主页面 -->
			<div class="sample" v-for="img in list" @click="to_details(img.Id)">
				<div class="sample-border">
					<div class="tupian"><img :src="img.img_list_url" alt="" style="width: 100%;height: 100%;"></div>
					<div class="sample-name">{{img.title}}</div>
					<div class="sample-bottom">
						<span class="price" style="float: left; color: rgb(255,55,0)">￥{{img.price}}</span>
						<span class="buy" v-html="img.mack" style="float: right;"></span>
					</div>
				</div>

			</div>
			
			<!-- 	<div class="res_data" v-for="li in list">
				{{li.title}}
			</div> -->
		</div>
		<to_top></to_top>
	</div>

</template>

<script>
	import Goods_type from "./goods_types.vue";
	import to_top from "./turn_to_top.vue";
	export default {
		name: 'HelloWorld',
		components:{
			Goods_type,to_top
		},
		data() {
			return {
				list: [], //请求到的数据，
				// title: '',
				slideshow: {
					img1: require("../assets/a.jpg"),
					img2: require("../assets/b.jpg"),
					img3: require("../assets/c.jpg"),
					img4: require("../assets/d.jpg"),
					img5: require("../assets/e.jpg")
				},
				// border: 4
			}
		},
		methods: {
			to_details: function(e) {
				this.$router.push('/details/'+e)
			}
		},
		created() {
			var _this = this;
			
			this.http.get('http://vebcoder.cn:9527/api/goodList', {
					params: {
						page: this.page,
					},
				})
				

				.then(function(reponse) {
					// console.log(reponse.data);
					console.log("请求成功")
					// _this.$router.push({name:"login",params:{data:reponse.data}})
					_this.list = reponse.data;
					// _this.tupian = reponse.data[1].img_list_url
					// console.log(_this.list);
					// console.log(_this.tupian);

				})
				.catch(() => {})
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.helloworld {}

	.hello {
		width: 1200px;
		height: 3000px;
		border: solid 1px #000000;
		margin: 20px auto;
		border-radius: 20px;

	}

	/* 走马灯 */
	.slideshow {
		width: 100%;
		height: 300px;
		border: solid 2px darkcyan;
		border-radius: 20px;
		margin: 40px auto;

	}

	.el-carousel__item h3 {
		width: 1200px;
		height: 300px;
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 10%;
		margin: 0px;

	}

	h3,
	img {
		width: 100%;
		height: 100%;
		border-radius: 20px;

	}

	/* 商品展示区 */
	.sample {
		width: 19.6%;
		height: 8%;
		/* border: solid 2px red;
		background-color: #750075; */
		float: left;
	}

	.sample-border {
		width: 80%;
		height: 170px;
		/* border: solid 2px #008B8B;
		background-color: #008B8B; */
		/* margin-bottom: -400px; */
		margin: 0 auto;

	}
	.tupian {
		width: 100%;
		height: 100%;
		/* background-color: #808080; */
	}

	.sample-name {
		width: 110%;
		height: 20px;
		/* border: solid 1px #FFFFFF; */
	}

	.sample-bottom {
		width: 100%;
		height: 20px;
		/* border: solid 1px #FFFFFF; */
		margin: 15px auto;
	}
</style>
