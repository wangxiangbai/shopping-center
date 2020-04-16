import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex

Vue.use(Vuex); //使用

let store = new Vuex.Store({
	state: {
		num: 100,
		newslist: [] //接口请求到的天气数据
	},
	mutations: { //同步修改
		// //将token保存到sessionStorage里，token表示登陆状态
		getJson(state) {
			// var _this = this;
			Vue.http.get('http://vebcoder.cn:9527/api/goodList')
				.then(response => {
					state.newslist = response.data;
					console.log("请求")
				}).catch(err => {
                    console.log(err)
                })

		}
	},
	actions: { //异步修改
		newJson(obj) {
			obj.commit('getJson');
		}
	},
	modules: {},
})
export default store //导出store
