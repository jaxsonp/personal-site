<script>
	import { page } from '$app/stores';
</script>

<div class="h-screen flex flex-col justify-center">
	<h1>Error 😭</h1>
	<br />
	<h2>{$page.status}: {$page.error != null ? $page.error.message : ''}</h2>
</div>

<style>
	* {
		text-align: center;
	}
</style>
