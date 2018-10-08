<template>
	<div class="heat">
		<ul  v-for="item in heatlist">
			<router-link :to="{'name':'detail',params:{id:item.id}}">
			<li>
				<img :src="item.cover.origin"/>
			</li>
			<li class="text">
				<p>{{item.name}}
					<span>{{item.grade}}<i class="fa fa-angle-right"></i></span>
				</p>
				<p>{{item.intro}}</p>
			</li>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				heatlist:[]
			}
		},
		created(){
			this.$http.get('mz/v4/api/film/now-playing',{
				params:{
					page:1,
					count:7
				}
			}).then((res)=>{
				this.heatlist=res.data.data.films;
				console.log(this.heatlist)
			})
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.heat{
		/*margin-top: 100/$sc+rem;*/
		ul{
			border: 1px dotted #ccc;
			clear:both;
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
				
			}
		}
	}
</style>