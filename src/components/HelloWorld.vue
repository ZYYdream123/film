<template>
  <div class="hello">
    <p>hello</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.hello{
		font-weight: bold;
	}
	@mixin size($f:18px){
		font-size:$f;
	}
	div{
		$sc:25;
		p{
			color:red;
			@extend .hello;
			background: red;
			@include size(30px);
			width:100%;
			height:50/$sc+rem;
		}
	}
</style>
