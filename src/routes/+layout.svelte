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
<div class="grow">
	<slot />
</div>
<footer class="bg-black text-center py-8 [&_*]:italic [&_*]:text-gray">
	<p>© Jaxson Pahukula</p>
	<br />
	<p>
		Doc icon by
		<a href="//commons.wikimedia.org/wiki/User:Xavi" title="User:Xavi">
			J. Xavier Atero (for Bimetrical S.L.)
		</a>
		- <span class="int-own-work" lang="en">Own work</span>,
		<a
			href="https://creativecommons.org/licenses/by-sa/4.0"
			title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a
		>, <a href="https://commons.wikimedia.org/w/index.php?curid=110310218">Link</a>
	</p>
</footer>
