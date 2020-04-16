import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login';
import register from '@/views/register';
import details from '../views/details';
import search from '@/views/search';
import list from "../views/list";
import shoplist from"../views/shoplist";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/login',
	  name: 'login',
	  component: login
	},
	{
		path:'/register',
		name:'register',
		component:register
	},
	{
		path:'/details/:type',
		name:'detail',
		component:details
	},
	{
		path:'/list/:type',
		name:"List",
		component: list
	},
	{
	  path:'/search',
	  name:"search",
	  component: search
	},
	{
		path:'/shoplist/:type',
		name:"shoplist",
		component:shoplist
	}
  ]
})
	