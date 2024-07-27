<script>
	import { browser } from '$app/environment';
	function hideFooter() {
		//hiding the footer
		let footer = document.getElementById('footer');
		footer.style.display = 'none';
	}

	if (browser) {
		window.addEventListener('load', hideFooter, true);
	}
</script>
