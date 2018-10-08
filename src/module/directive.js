import Vue from 'vue';
Vue.directive("vis",(el,binding)=>{  //bind update
   var dis=Number(el.getAttribute("data-dis"));
   window.addEventListener("scroll",function(){
   	   var top=document.body.scrollTop||document.documentElement.scrollTop;
   	   if(top>dis){
   	   	   binding.value.vis=true;
   	   }
   	   else{
   	   	binding.value.vis=false;
   	   }
   })
})
Vue.directive('top',{
	bind(el){
		el.onclick=function(){
			document.body.scrollTop=0;
			document.documentElement.scrollTop=0;
		}
	}
})