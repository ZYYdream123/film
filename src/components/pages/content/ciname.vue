<template>
	<!--<div class="ra">
		<router-link to="/ciname/now-playing">正在上映</router-link>
	    <router-link to="/ciname/coming-soon">即将上映</router-link>
	    <router-view></router-view>
	</div>-->
	 <div class="all">
         <router-link to="/ciname/now-playing" :class="[$route.path=='/ciname/now-playing'?'choosing':'']">正在上映</router-link>
         <router-link to="/ciname/coming-soon" :class="[$route.path=='/ciname/coming-soon'?'choosing':'']">即将上映</router-link>
      
         <router-view></router-view>
  	</div>
</template>
<script>
import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				classa:'classa',
				classb:'classb'
			}
		}
	}
</script>
<style scoped lang="scss">
    $sc:25;
    .all{
    	margin-top: 50/$sc+rem;
        box-sizing:border-box; 
        padding:0 10px;
        border-bottom:1px solid #fe6e00;
        height:49/$sc+rem;
        background: #fff;
        a{
            display:block;
            float:left;
            width: 50%;
            height: 100%;
            text-align: center;
            font-size: 16px;
            line-height: 46px;
            color: #6a6a6a;
       }
       .choosing {
           display:block;
            overflow: hidden;
            color: #fe6e00;
            height: 44px;
            border-bottom: solid #fe6e00 3px;
        }

    }
</style>
