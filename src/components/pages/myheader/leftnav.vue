<template>
<div>
	<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
	<div class="nav" v-show="flag">
	
		<ul class="leftnav">
			<li v-for="item in arr" :key="item.id" @click="vis">
				<router-link :to="item.path">
					{{item.name}}
				</router-link>
			</li>
		</ul>
	</div>
	</transition>
	<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
		<div class="mask" v-show="flag" @click="vis">
		
		</div>
	</transition>
	<!--<router-view/>-->
</div>
</template>
<script>
	export default{
		props:['flag','vis'],
		data(){
			return{
				arr:[
				{
					name:'首页',
					path:'/home',
					id:1
				},
				{
					name:'影片',
					path:'/ciname/now-playing',
					id:2
				},
				{
					name:'影院',
					path:'/city',
					id:3
				},
				{
					name:'影座',
					path:'/site',
					id:4
				},
				{
					name:'我的',
					path:'/mine',
					id:5
				},
				{
					name:'卖座卡',
					path:'/card',
					id:6
				}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	li{
		list-style: none;
	}
	.nav{
		z-index: 300;
		width:265/$sc+rem;
		/*height:617/$sc+rem;*/
		background: #282828;
		margin-top:50/$sc+rem;
		border-top: 1px solid #222;
	    box-shadow: 0 1px 1px #363636 inset;
	    position: fixed;
	    display: block;
	    top: 0;
	    right: 110px;
	    bottom: 0;
	    left: 0;
	    transition: all ease 0.4s;
	    -webkit-transition: all ease 0.4s;
		.leftnav{
			
		}
		li{
			font-size: 14px;
			height: 51/$sc+rem;
			line-height:51/$sc+rem;
			text-align: left;
			padding-left:8/$sc+rem;
			a{
				color:#efefef;
			}
		}
	}
	.mask{
		z-index: 200;
		position: fixed;
	    width:100%;
	    height: 100%;
	    top:0;
	    background: rgba(0,0,0,.5);
	}
	
</style>