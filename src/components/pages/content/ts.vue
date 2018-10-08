<template>
	<div class="cs">
		<div class="cs-title">GPS定位你所在城市</div>
		<ul class="two">
			<li>深圳</li>
		</ul>
		<div class="cs-title">热门城市</div>
		<ul class="heat">
			<li>北京</li>
			<li>上海</li>
			<li>广州</li>
			<li>深圳</li>
		</ul>
		<ul class="zimu">
			<p>按字母排序</p>
			<li v-for="item in 26"  @click="jump(String.fromCharCode(65 + (item-1)))">{{String.fromCharCode(65 + (item-1))}}</li>
		</ul>
		<div  class="city">
			<ul>
				<li v-for="(item,index) in list">
					<h3 :ref="item.words" v-if="index==0||index!=0&&item.words!==list[index-1].words">{{item.words}}</h3>
					<router-link to="/home">
						<span class="text" @click="dd(item.name)">
							{{item.name}}
						</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import eventBus from '@/module/eventBus'
	export default{
		data(){
			return{
				list:[],
				obj:[]
			}
		},
		created(){
			this.$http.get('mz/v4/api/city',{
				__t:new Date().getTime()
			}).then((res)=>{
//				console.log(res)
				this.list = res.data.data.cities;
				this.list = this.list.sort((a,b)=>{
					return a.pinyin[0].charCodeAt()-b.pinyin[0].charCodeAt();
				}).map((item)=>{
					return {
						name:item.name,
						words:item.pinyin[0]
					}
				})
			})
		},
		methods:{
			jump(n){
				let pos = this.$refs[n][0].offsetTop;
//				console.log(n)
				document.documentElement.scrollTop = pos-70;
				document.body.scrollTop = pos-70;
			},
			dd(name){
//				console.log(name);
				eventBus.$emit("title",name)
				
			}
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.cs{
		.cs-title{
			font-size: 16px;
			height: 40/$sc+rem;
			text-align: left;
			line-height:40/$sc+rem ;
			padding-left:7px;
		}
		margin-top: 50/$sc+rem;
		.two{
			height: 40/$sc+rem;
			text-align: left;
			line-height:40/$sc+rem ;
			background: #fff;
			font-size: 16px;
			padding-left:7px;
		}
		.heat{
			li{
				float: left;
				height: 47/$sc+rem;
				line-height:47/$sc+rem ;
				width: 93/$sc+rem;
				background: #fff;
				font-size: 16px;
			}
		}
	}
	.zimu{
		height:380/$sc+rem;
		background: #fff;
		width:375/$sc+rem;
		clear: both;
		p{
			font-size: 16px;
			text-align: left;
			height:50/$sc+rem;
			line-height:50/$sc+rem;
			background: #ddd;
			padding-left:7px;
		}
		li{
			width:93/$sc+rem;
			height:47/$sc+rem;
			line-height:47/$sc+rem ;
			text-align: center;
			float:left;
			font-size: 14px;
			color: #838383;
			border-bottom: 1px solid #ddd;
		}
	}
	.city{
		background: #fff;
		h3{
			width: 375/$sc+rem;
			clear: both;
			text-align: left;
			background: #ddd;
			padding-left: 7px;
			color:#838383;
			font-size: 14px;
			line-height:50/$sc+rem ;
			margin-top: 0;
		}
		.text{
			width:93/$sc+rem;
			height: auto;
			line-height:47/$sc+rem ;
			text-align: center;
			float:left;
			font-size: 14px;
			color: #838383;
			background: #fff;
		}
	}
</style>