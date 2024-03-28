<script>
	import '../app.css';
</script>

<header class="alert">
	<p>🚧 This page is currently a work on progress 🚧</p>
</header>
<div class="background">
	<slot />
</div>

<style>
	.background {
		background: rgb(105, 120, 87);
		background: linear-gradient(0deg, rgba(105, 120, 87, 1) 0%, rgba(173, 216, 230, 1) 66%);
		width: 100vw;
		min-height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.alert {
		background: #ff4d4d;
		display: flex;
		justify-content: center;
		padding: 0.5rem;
	}
	.alert > * {
		margin: 0;
	}
</style>
