<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>Error 😭</h1>
	<br />
	<h2>{$page.status}: {$page.error != null ? $page.error.message : ''}</h2>
</div>

<style>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	* {
		text-align: center;
	}
</style>
