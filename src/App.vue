<template>
	<div id="app">

		<div class="hello-head">
			<div class="hello-head-top">
				<div class="mall-logo"></div>
				<div class="mall-logo-right">
					<input type="text" style="width: 300px; height: 30px;" placeholder="请输入想要的商品" @keyup.enter="search" v-model="search_content">
					<el-button style="height: 38px; background-color: rgb(242,230,242);">
						<li class="el-icon-search" @click="search">搜索</li>
					</el-button>
				</div>
			</div>
			<div class="hello-head-bottom">
				<div class="mall-router"><b>
					<router-link to="/" style="text-decoration: none;">
						首页
					</router-link>
					<router-link to="./login" style="text-decoration: none;">登录</router-link>
					<router-link to="./register" style="text-decoration: none;">注册</router-link></b>
				</div>
				<!-- <div class="sample-label">
					<el-button @click="coffee" round>咖啡</el-button>
					<el-button @click="cooking" round>饮食</el-button>
					<el-button @click="dinner" round>正餐</el-button>
					<el-button @click="man" round>男装</el-button>
					<el-button @click="woman" round>女装</el-button>
					<el-button @click="glasses" round>眼镜</el-button>
					<el-button @click="boot" round>鞋靴</el-button>
				</div> -->
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				// 搜索关键字
				search_content:'',
			}
		},
		methods:{
			search:function(){
				this.$router.push({
					path:"./search",
					query:{word:this.search_content}
				});
			}
		}
	}
</script>

<style>
	#app {
		width: 100%;
		margin: 0 auto;
		height: 1000px;
		/* border: solid 2px saddlebrown; */
	}

	.hello-head {
		width: 100%;
		height: 150px;
		/* border: solid 1px #fff; */
		box-shadow: 10px 10px 10px -10px grey;
	}

	.hello-head-top {
		width: 64%;
		height: 70%;
		margin: 0 auto;
		/* border: solid 1px magenta; */
	}

	.hello-head-bottom {
		width: 65%;
		height: 30%;
		margin: 0 auto;
		/* border: solid 1px #000; */
	}

	.mall-logo {
		width: 110px;
		height: 110px;
		margin: -5px 10px;
		float: left;
		background-image: url(assets/logo.57933597.png);
		background-position: center;
		background-size: 150%;
		background-repeat: no-repeat;
	}

	.mall-logo-right {
		width: 50%;
		height: 100%;
		/* border: solid 1px black; */
		float: right;
		position: relative;
		right: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mall-router {
		font-size: 17px;
		text-decoration: none;
		/* letter-spacing: 0px; */
		line-height: 45px;


	}

	.mall-router a {
		margin: 15px;
		text-decoration: none;
		color: #000000;
		/* border-bottom: 2px; */
	}

	a:hover {
		text-decoration: underline;
		color: #750075;
		border-bottom: 2px solid #750075;
		font-weight: bold;
	}
	
	/* 商品标签跳转 */
	.sample-label{
		width: 1200px;
		height: 50px;
		/* border: solid 2px #000000; */
		margin: 0 auto;
	}
	.sample-label button{
		width: 120px;
		height: 30px;
		margin: 10px 33px;
		line-height: 5px;
	}
	
</style>
