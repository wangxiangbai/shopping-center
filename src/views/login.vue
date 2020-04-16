<template>
	<div class="login">
		<div class="login-account">
			<i class="el-icon-s-custom"></i>
			<el-input style="width: 95%; float: right;"placeholder="用户名" v-model="userName"></el-input>
		</div>
		<div class="login-password">
			<i class="el-icon-female"></i>
			<el-input style="width: 95%; float: right;" placeholder="密码" v-model="password"></el-input>
		</div>
		<el-button type="success" style="width: 100%; height: 20%;" @click="login">登录</el-button>
	<!-- 	<div class="res_data" v-for="li in list">
			{{li.title}}
		</div> -->
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
		    return {
		      userName: '',
			  password:'',
			  // list:[]
		    }
		  },
		 methods:{
			login() {
				if (this.userName == "" || this.password == "") {
					alert("请输入用户名或密码")
				}else {
					let data = {
						'userName': this.userName,
						'password': this.password
					};
					this.http.get('http://vebcoder.cn:9527/api/login',data)
						.then((res) => {
							console.log(res);
							alert('登录成功')
							
							/*注册成功之后再跳回登录页*/
							setTimeout(function() {
								this.$router.push('/')
							}.bind(this), 1000)
						
						
					})
				}
			} 
		 },
		mounted() {
			// this.list = this.$route.params.data
			// console.log(this.list)
		}
	}
</script>

<style scoped>
	.login{
		width: 400px;
		height: 180px;
		/* border: solid 1px #000000; */
		margin: 100px auto;
	}
	.login-account{
		width: 100%;
		height: 25%;
		margin-bottom: 15px;
		background-color: rgb(232,240,254);
		line-height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login-password{
		width: 100%;
		height: 25%;
		margin-bottom: 15px;
		background-color: rgb(232,240,254);
		line-height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
