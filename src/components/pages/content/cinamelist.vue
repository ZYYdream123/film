<template>
<div>
	<div class="box" v-infinite-scroll="jzgd"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="100">
		<ul  v-for="item in list">
			<router-link :to="{'name':'detail',params:{id:item.id}}">
			<li>
				<img :src="item.cover.origin"/>
			</li>
			<li class="text">
				<p>{{item.name}}
					<span>{{item.grade}}<i class="fa fa-angle-right"></i></span>
				</p>
				<p class="txt">{{item.intro}}</p>
			</li>
			</router-link>
		</ul>
	</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
	export default{
		data(){
			return{
				list:[],
				page:1,
				count:7,
				type:'now-playing',
				loading:false,
   	 		 	hashMore:true
			}
		},
		watch:{
			$route:{
				handler(n){
					this.type=n.params.type;
					this.list=[];
	   	  			this.page=1;
	   	  			this.loading=false; //false表示没有请求，可以发请求
	   	  			this.hashMore=true;
	   	  			this.getdata(this.type);
				},
				immediate:true
			}
		},
		methods:{
			getdata(type){
				if(!this.hashMore){
   	  	  	 	var t =Toast({
   	  	  	   	message:"已经到最后一页了",
				  position: 'middle',
				  duration:1500
	   	  	  	 })
	   	  	  	 	return;
	   	  	  	 }
				this.loading=true;
				 var t =Toast({
   	  	  	 	 iconClass:'fa fa-spinner fa-pulse',
				  position: 'middle',
				  duration: -1
	   	  	  	 })
				this.$http.get('mz/v4/api/film/'+type,{
					params:{
						page:this.page,
						count:this.count
					}
				}).then((res)=>{
					console.log(res);
					this.list =this.list.concat(res.data.data.films);
					var total=res.data.data.page.total;
	   	 			var current=res.data.data.page.current;
	   	 			this.hashMore=total!==current;
	   	 			this.page+=this.hashMore?1:0;
	   	 			this.loading=false;
					t.close();
				})
			},
			jzgd(){
				console.log('loding more....');
				this.getdata(this.type)
			}
		}
	}
</script>
<style scoped lang="scss">
$sc:25;
	.box{
		top:100/$sc+rem;
		left:0;
		right:0;
		bottom: 0;
		position: fixed;
		overflow:auto;
		/*margin-top: 100/$sc+rem;*/
		ul{
			width:350/$sc+rem;
			border: 1px dotted #ccc;
			clear:both;
			margin: 0 auto;
			a{
				color:#000;
			}
			li{
				width:62/$sc+rem;
				height:100/$sc+rem;
				margin-top:20/$sc+rem;
				float: left;
				img{
					width:62/$sc+rem;
					height:82/$sc+rem;
				}
				span{
					color:#F78360;
					float: right;
				}
			}
			.text{
				width:243/$sc+rem;
				font-size:14px;
				text-align: left;
				p{
					height:23/$sc+rem;
					line-height:30/$sc+rem ;
					padding-left:9/$sc+rem;
					box-sizing: border-box;
				}
				.fa{
					color:#000;
					padding-left:3px;
				}
				.txt{
					font-size: 13px;
					color:#ccc;
				}
				
			}
		}
}
</style>
