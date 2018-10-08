<template>
	<div>
	<router-link to="/ciname/now-playing">
		<button class="coming">更多上映电影</button>
	</router-link>
	<div class="dividing-line" data-reactid=".0.1.$IndexView-.2.0">
		<div class="upcoming" data-reactid=".0.1.$IndexView-.2.0.0">
			即将上映
		</div>
	</div>
	<ul class="com-img">
	   	<li v-for="item in com" @click="dj(item.name)">
	   		<router-link :to="{'name':'detail',params:{id:item.id}}">
	   			<img :src="item.cover.origin"/>
	   		</router-link>
	   		<p>{{item.name}}<span>{{item.grade}}</span></p>
	   	</li>
	  </ul>
	  <router-link to="/ciname/coming-soon">
	  	<button class="coming">更多即将上映电影</button>
	  </router-link>
	</div>
</template>
<script>
	export default{
		props:['dj'],
		data(){
			return{
				com:[]
			}
		},
		created(){
			this.$http.get('mz/v4/api/film/coming-soon',{
				params:{
					__t:new Date().getTime()
				}
			}).then((res)=>{
				this.com=res.data.data.films
			})
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.dividing-line {
    position: relative;
    border-bottom: 1px solid #a8a8a8;
    background:#ddd;
    height: 50/$sc+rem;
    margin-bottom: 30/$sc+rem;
    .upcoming {
    width: 65/$sc+rem;
    height: 20/$sc+rem;
    position: absolute;
    top:40/$sc+rem;
    left:170/$sc+rem;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20/$sc+rem;
    text-align: center;
    color: #eee;
    background-color: #ccc;
}
}
	.com-img{
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
		.coming{
			border-radius: 20px;
			width:156/$sc+rem;
			height: 36px;
			background: #ddd;
			margin-left:50/$sc+rem;
			margin-top:10px;
			margin-bottom: 10px;
			border: 1px solid #ccc;
		}
</style>