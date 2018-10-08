<template>
	<div class="deimg">
		<ul  v-for="item in delist">
			<li>
				<img :src="item.cover.origin"/>
			</li>
			<li><h3>影片简介</h3></li>
			<li>导演：{{item.director}}</li>
			<li>主演：<span  v-for="i in item.actors">{{i.name}}</span></li>
			<li>地区语言：{{item.nation}}({{item.language}})</li>
			<li>类型：{{item.category}}</li>
			<li>上映时间：{{item.premiereAt|time('a')}}</li>
			<li>{{item.synopsis}}<br />
				<button>立即购票</button>
			</li>
		</ul>
	</div>
</template>
<script>
import bus from '@/module/bus'
	export default{
		props:['id'],
		data(){
			return{
				delist:''
			}
		},
		mounted(){
			this.$http.get('mz/v4/api/film/'+this.id,{
				params:{
					__t:new Date().getTime()
				}
			}).then((res)=>{
				this.delist=res.data.data;
				bus.$emit("title",this.delist.film.name)
			})
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.deimg{
	overflow: hidden;
	ul{
		height:100%;
		li:nth-child(1){
			height:260/$sc+rem;
			padding: 0;
		}
		li:nth-child(8){
			height:227/$sc+rem;
			line-height: 20/$sc+rem;
		}
		li{
		font-size: 12px;
		text-align: left;
		height:30/$sc+rem;
		line-height: 30/$sc+rem;
		padding-top:20/$sc+rem;
		padding-left:20/$sc+rem;
		padding-right:20/$sc+rem;
		box-sizing: border-box;
		}
	}
	
	h3{
		text-align: left;
		font-weight: normal;
		font-size: 20px;
	}
	}
	img{
		width: 100%;
		margin-top:50/$sc+rem;
	}
	button{
		border-radius: 20px;
		width:156/$sc+rem;
		height: 36px;
		background: #fe6e00;
		margin-left:100/$sc+rem;
		margin-top:10px;
		color: #fff;
		border: none;
	}
</style>