import Vue from 'vue'

Vue.filter("time",(value,type)=>{
	console.log(type)
	 var d = new Date(value);
	 return (d.getMonth()+1) +"月"+d.getDate()+"日"
})