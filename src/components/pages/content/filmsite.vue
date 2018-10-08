<template>
	<div>
		<img src="http://static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png">
		<ul class="ding">
			<li>
				<p>订座票</p>
				<h4>选好场次及座位，到影院自助取票</h4>
			</li>
			<li>{{list.address}}</li>
			<li v-for="item in telephones">{{item}}</li>
		</ul>
		
		
		<div class="dingBox">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">取票</mt-tab-item>
			  <mt-tab-item id="2">3D</mt-tab-item>
			  <mt-tab-item id="3">取票</mt-tab-item>
			  <mt-tab-item id="4">3D</mt-tab-item>
			  <mt-tab-item id="5">取票</mt-tab-item>
			 
			</mt-navbar>
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	暂无信息
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    222
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			  	
			    333
			  </mt-tab-container-item>
			  <mt-tab-container-item id="4">
			    444
			  </mt-tab-container-item>
			  <mt-tab-container-item id="5">
			   555
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>
<script>
import bus from '@/module/bus';
	export default{
		props:['id'],
		data(){
			return {
				selected:'1',
				list:[],
				telephones:''
				
			}
		},
		created(){
			console.log(this.id)
			this.$http.get("/mz/v4/api/cinema/"+this.id,{
				params:{
			 		__t:new Date().getTime()
			 	}
			}).then((res)=>{
				console.log(res)
				this.list=res.data.data.cinema
				//console.log(this.allObj.name)
				this.telephones=res.data.data.cinema.telephones
				bus.$emit("filmname",this.list.name)
			})
		}	
	}
</script>

<style lang="scss">
	$sc:25;
	img{
		margin-top: 50/$sc+rem;
		width: 100%;
	}
	.ding{
		background: #fff;
		li{
			width: 80%;
			word-wrap:break-word;
		    word-break:break-all;
		    overflow: hidden;
			margin:0 auto;
			text-align: left;
			font-size: 16px;
			padding: 30/$sc+rem 0;
			border-bottom: 1px solid #CFCFCF;
			p{
				font-size:16/$sc+rem;
			}
			h4{
				margin-top: 10/$sc+rem;
				font-weight: normal;
				font-size: 12px;
				color: #838383;
			}
		}
	}
	.dingBox{
		margin-top: 20px;
		width: 100%;
		background: #fff;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
		.mint-navbar .mint-tab-item.is-selected {
		    border-bottom: 3px solid #FE6E00;
		    color: #FE6E00;
		    margin-bottom: -3px;
		}
		
	}
</style>
