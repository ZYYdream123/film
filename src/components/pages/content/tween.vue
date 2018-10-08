<template>
    <div class="index">
       <!--<div v-bind:id="dynamicId"></div>-->
       <button v-bind:disabled="isButtonDisabled">Button</button>
    </div>
</template>
<script type="text/javascript">
    export default {
       data(){
       	return{
       		isButtonDisabled:true
       	}
       }
    }
</script>
<style lang="scss" scoped>
$sc:25;
    button{
    	margin-top: 50/$sc+rem;
    }
</style>