<script>
	import '../app.css';
</script>

<div class="background">
	<slot />
</div>

<style>
	.background {
		background: rgb(105, 120, 87);
		background: linear-gradient(0deg, rgba(105, 120, 87, 1) 0%, rgba(173, 216, 230, 1) 75%);
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		min-height: 100vh;
	}
</style>
