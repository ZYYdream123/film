<template>
<div>
    <div class="all">
        <ul class="topNav">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <li><router-link to="/city/heat">正在上映</router-link></li>
            <li><router-link to="/show">即将上映</router-link></li>
            <router-view/>
        </ul>
    </div>
</div>
</template>
<script>

</script>
<style scoped lang="scss">
$sc:25;
    .all{ 
        box-sizing:border-box;
        padding:0 10px;
        background: #fff;
        margin-top:50/$sc+rem;
    }
   .topNav{
       height: 46px;
       border-bottom: solid #fe6e00 1px;
       li{
           float:left;
            width: 50%;
            height: 100%;
            text-align: center;
            font-size: 16px;
            line-height: 46px;
            color: #6a6a6a;
            a:hover{
            	color:#fe6e00;
            	display: block;
            	border-bottom: 3px solid #fe6e00;
            }
       }
   }
</style>
<script>

</script>
