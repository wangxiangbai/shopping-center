<template>
	<div class="register">
		<div class="register-account">
			<i class="el-icon-s-custom"></i>
			<el-input style="width: 95%; float: right;" placeholder="用户名" v-model="userName"></el-input>
		</div>
		<div class="register-password">
			<i class="el-icon-female"></i>
			<el-input style="width: 95%; float: right;" placeholder="密码" v-model="password"></el-input>
		</div>
		<el-button type="success" style="width: 100%; height: 20%;" @click="register">注册</el-button>
	</div>
</template>

<script>
	export default {
		name: 'register',
		data() {
			return {
				userName: '',
				password: ''
			}
		},
		methods: {
			register() {
				if (this.userName == "" || this.password == "") {
					alert("请输入用户名或密码")
				}else {
					let data = {
						'userName': this.userName,
						'password': this.password
					};
					this.http.get('http://vebcoder.cn:9527/api/register',data)
						.then((res) => {
							console.log(res.data.code);
							alert('注册成功')
							// console('注册成功')
							
							/*注册成功之后再跳回登录页*/
							setTimeout(function() {
								this.$router.push('/login')
							}.bind(this), 1000)
						
						
					})
				}
			}
		}
	}
</script>

<style scoped>
	.register {
		width: 400px;
		height: 180px;
		/* border: solid 1px #000000; */
		margin: 100px auto;
	}

	.register-account {
		width: 100%;
		height: 25%;
		margin-bottom: 15px;
		background-color: rgb(232, 240, 254);
		line-height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.register-password {
		width: 100%;
		height: 25%;
		margin-bottom: 15px;
		background-color: rgb(232, 240, 254);
		line-height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
