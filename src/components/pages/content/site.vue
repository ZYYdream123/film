<template>
	<div class="ciname">
		<ul>
			<li v-for="item in obj" @click="add(item)">
					{{item}}
					<div  v-show="flag" class="content" v-for="item in list" v-if="item.district.name==dat">
						<router-link :to="{'name':'filmsite',params:{id:item.id}}">
							{{item.name}}<i class="fa fa-angle-right"></i>
							<p>{{item.address}}</p>
						</router-link>
					</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[],
				obj:[],
				dat:'',
				flag:false
			}
		},
		created(){
			this.$http.get('mz/v4/api/cinema',{
				params:{
					__t:new Date().getTime()
				}
			}).then((res)=>{
				this.list = res.data.data.cinemas;
				this.list.forEach((item,i)=>{
					if(this.obj.indexOf(item.district.name)== -1){
//						console.log(item.district.name)
						this.obj.push(item.district.name)
					}
				})
			})
		},
		methods:{
			add(n){
//				console.log(n)
				this.dat=n;
				this.flag=!this.flag;
			}
		}
	}
</script>
<style scoped lang="scss">
  $sc:25;
	.ciname{
		margin-top:50/$sc+rem;
		height: auto;
		li{
			height:auto;
		    line-height: 40/$sc+rem;
		    font-size: 16/$sc+rem;
		    padding-left: 16/$sc+rem;
		    background: #e1e1e1;
		    margin-bottom: 1px;
		    color: #636363;
		    cursor: pointer;
		    text-align: left;
		    padding-left: 7px;
		    border-bottom: 1px solid #fff;
		    .content{
		    	margin-left: -16/$sc+rem;
		    	height: auto;
		    	display: none;
		    	background: #FFFFFF;
		    	padding-left: 18px;
		    	p{
		    		color:#cfcfcf;
		    		font-size: 13px;
		    		width:170/$sc+rem;
		    		overflow:hidden;
				    white-space:nowrap;
				    text-overflow:ellipsis;
		    	}
		    	.fa{
		    		float: right;
		    		padding-right: 7px;
		    	}
		    	a{
		    		color: #000;
		    	}
		    }
		}
		li:hover .content{
			display: block;
		}
	}
</style>
