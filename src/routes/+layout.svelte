<script>
	import '../app.css';
</script>

<div>
	<div class="background"></div>
	<!-- <header class="alert">
		<p>🚧 This page is currently a work on progress 🚧</p>
	</header> -->
	<div class="content">
		<slot />
	</div>
	<footer class="page-footer">
		<p>Placeholder footer</p>
	</footer>
</div>

<style>
	.background {
		background: rgb(105, 120, 87);
		background: linear-gradient(0deg, rgba(105, 120, 87, 1) 0%, rgba(173, 216, 230, 1) 66%);
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.page-footer {
		background-color: black;
		position: static;
		opacity: 0.99;

		padding: 0.5rem;
	}

	.alert {
		background: #ff4d4d;
		opacity: 0.75;

		display: flex;
		justify-content: center;
		padding: 0.5rem;
	}
	.alert > * {
		margin: 0;
	}
</style>
