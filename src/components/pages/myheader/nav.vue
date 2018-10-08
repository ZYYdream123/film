<template>
	<div>
		<div class="box">
			<div class="icon" @click="vis"><i class="fa fa-bars"></i></div>
			<!--<div class="title" @click="vis"><h1>{{$route.name=='detail'?this.dat:'卖场电影'}}</h1></div>-->
			<div class="title" @click="vis"><h1>{{tit}}</h1></div>
			<div class="site"><router-link to="/ts">{{word}}</router-link><i class="fa fa-angle-down"></i></div>
			<div class="user">
				<router-link to="/tween">
					<i class="fa fa-user-o"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import bus from "@/module/bus"
import eventBus from '@/module/eventBus'
	export default{
		props:['vis','dat'],
		data(){
			return{
				tit:'卖场电影',
				word:'北京'
			}
		},
		created(){
			bus.$on("title",(data)=>{
//				console.log(data)
	        	this.tit=data;
	    	})
			eventBus.$on("title",(data)=>{
//				console.log(data)
	        	this.word=data;
	    	})
		},
		mounted(){
			this.$router.beforeEach((to,from,next)=>{
				switch(to.path){
					case '/':
					case '/home':
					case '/city':this.tit="卖场电影";break;
					default: this.tit='卖场电影';
				}
				next()
			})
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.box{
		width:100%;
		height:50/$sc+rem;
		background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    line-height: 50/$sc+rem;
	    overflow: hidden;
	    .icon{
	    	float: left;
		    width: 48px;
		    text-align: center;
		    border-right: 1px solid #222;
		    box-shadow: 1px 0 1px #363636;
		    color: #999;
	    }
	    .title{
	    	width:84/$sc+rem;
	    	height:50/$sc+rem;
	    	line-height: 50/$sc+rem;
	    	float: left;
	    }
	    h1{
	    	color:#efefef;
	    	font-size: 14px;
	    	margin: 3px;
	    	width:130/$sc+rem;
	    }
	    .fa{
	    	color:#fff;
	    	font-size: 14px;
	    	color: #9A9A9A;
	    }
	    .site{
	    	float:left;
	    	width:53/$sc+rem;
	    	height:51/$sc+rem;
	    	margin-left:130/$sc+rem;
	    	text-align: right;
	    	a{
	    		font-size: 14px;
	    		color:#9A9A9A;
	    	}
	    }
	     .user{
	    	float:right;
	    	width:53/$sc+rem;
	    	height:51/$sc+rem;
	    	margin-left: 0;
	    }
	}
</style>