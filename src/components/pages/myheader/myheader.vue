<template>
	<div>
		<Nav :flag="flag" :dat='dat' :vis="vis"/>
		<leftnav :flag="flag" :vis="vis"/>
		<router-view @track="dt"/>
	</div>
</template>
<script>
import Nav from './nav'
import leftnav from './leftnav'
export default{
	data(){
		return{
			flag:false,
			dat:''
		}
	},
	components:{
		Nav,leftnav
	},
	methods:{
		vis(){
			this.flag=!this.flag;
		},
		dt(n){
			this.dat=n;
		}
	}
}
</script>