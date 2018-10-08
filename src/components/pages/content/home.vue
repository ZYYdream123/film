<template>
	<div class="slideimg">
		<transition enter-active-class="animated fadeIn" 
        leave-active-class="animated fadeOut">
        	<button class="btn" v-show="btnobj.vis" v-vis="btnobj" 
        	data-dis="500" v-top>
        	<i class="fa fa-angle-up"></i>
        	</button> 
        </transition>
        <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in list" :key="item.id">
	        		<img :src="item.imageUrl" />
        	</div>        
    	</div>
    	<ul class="list-img">
	   	<li v-for="item in newlist" @click="dj(item.name)">
	   		<router-link :to="{'name':'detail',params:{id:item.id}}">
	   			<img :src="item.cover.origin"/>
	   		</router-link>
	   		<p>{{item.name}}<span>{{item.grade}}</span></p>
	   	</li>
	   </ul>
	   <coming :dj="dj"></coming>
  </div>
</template>
<script>
import coming from './coming'
import Swiper from "swiper"
import "../../../../node_modules/swiper/dist/css/swiper.css";
	export default{
		data(){
			return{
				list:[],
				newlist:[],
				btnobj:{
			  		vis:false
				}
			}
		},
		components:{
			coming
		},
		created(){
			this.$http.get('mz/v4/api/billboard/home',{
				params:{
					__t:new Date().getTime()
				}
			}).then((res)=>{
				this.list=res.data.data.billboards
			})
			this.$http.get('mz/v4/api/film/now-playing',{
				params:{
					__t:new Date().getTime()
				}
			}).then((res)=>{
				this.newlist=res.data.data.films;
			})
		},
		watch:{
			list(){
				this.$nextTick(()=>{
					new Swiper(".slideimg",{
					loop:true,
					autoplay: {
    					delay: 3000,
    					disableOnInteraction:false
    				},
					})
				})
			}
			
		},
		methods:{
			dj(n){
				this.$emit("track",n)
			}
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.slideimg{
		overflow-x: hidden;
		margin-top: 50/$sc+rem;
		.list-img{
			background:#ddd;
			p{
				width:350/$sc+rem;
				height:50/$sc+rem;
				line-height:50/$sc+rem ;
				font-size: 14px;
				text-align: left;
				background: #fff;
				margin: 0 auto;
				box-sizing: border-box;
				padding-left:7/$sc+rem;
				span{
					float: right;
					padding-right: 9/$sc+rem;
					color:#f78360;
					font-size: 20px;
				}
			}
			img{
			width: 100%;
			display: block;
			box-sizing: border-box;
			padding: 13/$sc+rem 13/$sc+rem 0 13/$sc+rem;
			}
		}
	}
	 img{
	 		display: block;
			max-width: 100%;
		}
	.btn{
	   position:fixed;
	   bottom:100px;
	   right:100px;
	   z-index:3000;
	   background:#ccc;
	   border-radius:50%;
	   width:50px;
	   height:50px;

	}
</style>