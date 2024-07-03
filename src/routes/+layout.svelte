<script lang="js">
	import { browser } from '$app/environment';

	// stylin
	import '../app.css';

	// background stuff
	import { initializeScene, updateCanvas, drawScene } from '$lib/backgroundScene/drawScene';

	if (browser) {
		window.onload = () => {
			console.log('Window loaded');
			let canvas = document.getElementById('background');
			const resizeBackground = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				updateCanvas(canvas);
			};
			const getScrollPercent = () => {
				var h = document.documentElement,
					b = document.body,
					st = 'scrollTop',
					sh = 'scrollHeight';
				return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
			};
			window.addEventListener('resize', resizeBackground, false);

			// initializing
			initializeScene(window.innerWidth, window.innerHeight);
			resizeBackground();

			// loop for drawing background scene
			const drawLoop = () => {
				drawScene();
				window.requestAnimationFrame(drawLoop);
			};
			//window.requestAnimationFrame(drawLoop);
		};
	}
</script>

<canvas
	id="background"
	class="fixed top-0 left-0 -z-50 w-full h-full"
	style="background: linear-gradient(
		0deg,
		rgba(46, 83, 148, 1) 0%,
		rgba(21, 49, 101, 1) 7%,
		rgba(5, 26, 69, 1) 15%,
		rgba(0, 0, 0, 1) 100%
	);"
></canvas>
<div>
	<slot />
</div>
<footer class="flex justify-end">
	<div class="bg-black rounded-t-md">
		<p class="mx-1 px-2 text-center text-gray italic">© 2024 Jaxson Pahukula</p>
	</div>
</footer>
