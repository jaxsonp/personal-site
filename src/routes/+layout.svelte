<script lang="ts">
	import { browser } from '$app/environment';

	import '../app.css';
	import { initializeScene, configureScene, drawScene } from '$lib/backgroundScene/drawScene';

	if (browser) {
		window.onload = () => {
			console.debug('Window loaded');
			let backgroundCanvas = document.getElementById('background') as HTMLCanvasElement;
			if (backgroundCanvas != null) {
				function resizeBackground() {
					backgroundCanvas.width = window.innerWidth;
					backgroundCanvas.height = window.innerHeight;
					configureScene(backgroundCanvas);
				}
				window.addEventListener('resize', resizeBackground, false);
				resizeBackground();

				// initializing
				initializeScene();

				// loop for drawing background scene
				const drawLoop = () => {
					drawScene();
					window.requestAnimationFrame(drawLoop);
				};
				window.requestAnimationFrame(drawLoop);
			}
		};
	}
</script>

<div>
	<canvas class="background" id="background"></canvas>
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
	canvas.background {
		background: white;
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.page-footer {
		background-color: black;

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
