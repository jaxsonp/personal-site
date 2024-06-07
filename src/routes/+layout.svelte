<script lang="js">
	import { browser } from '$app/environment';

	import '../app.css';
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
			initializeScene();
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

<canvas class="background" id="background"></canvas>
<div style="flex-grow: 1;">
	<slot />
</div>
<footer class="page-footer">
	<!-- Credit for icons from flaticon -->
	<p>Made with aloha by Jaxson (me)</p>
	<br />
	<a href="https://www.flaticon.com/free-icons/json-file" title="json file icons">
		Json file icons created by Assetwave - Flaticon
	</a>
</footer>

<style>
	canvas.background {
		background: rgb(46, 83, 148);
		background: linear-gradient(
			0deg,
			rgba(46, 83, 148, 1) 0%,
			rgba(21, 49, 101, 1) 7%,
			rgba(5, 26, 69, 1) 15%,
			rgba(0, 0, 0, 1) 100%
		);
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.page-footer {
		background-color: black;
		text-align: center;
		padding: 3rem;
		margin-top: auto;
	}

	.page-footer * {
		color: #777;
		font-style: italic;
	}
</style>
