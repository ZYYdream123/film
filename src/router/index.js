import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld's
import home from '@/components/pages/content/home'
import city from '@/components/pages/content/city'
import ciname from '@/components/pages/content/ciname'
import mine from '@/components/pages/content/mine'
import site from '@/components/pages/content/site'
import card from '@/components/pages/content/card'
import detail from '@/components/pages/content/detail'
import heat from '@/components/pages/content/heat'
import show from '@/components/pages/content/show'
import cinamelist from '@/components/pages/content/cinamelist'
import ts from '@/components/pages/content/ts'
import filmsite from '@/components/pages/content/filmsite'
import tween from '@/components/pages/content/tween'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{'name':'home'}
    },
    {
    	path:'/home',
    	name:'home',
    	component:home
    },
     {
    	path:'/city',
    	name:'city',
    	component:city,
    	redirect:{'name':'heat'},
    	children:[
    		{
    			path:'/city/heat',
    			name:'heat',
    			component:heat
    		},{
    			path:'/show',
    			name:'show',
    			component:show
    		}
    	]
    },
    {
			path:'/ciname',
    	name:'ciname',
    	component:ciname,
    	children:[
    		{
    			path:':type',
    			name:'cinamelist',
    			component:cinamelist
    		}
    	]
    },
    {
    	path:'/card',
    	name:'card',
    	component:card
    },
    {
    	path:'/mine',
    	name:'mine',
    	component:mine
    },
    {
    	path:'/site',
    	name:'site',
    	component:site
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component:detail,
    	props:true
    },
    {
    	path:'/ts',
    	name:'ts',
    	component:ts
    },
    {
    	path:'/filmsite/:id',
    	name:'filmsite',
    	component:filmsite,
    	props:true
    },
    {
    	path:'/tween',
    	name:'tween',
    	component:tween
    }
  ]
})
