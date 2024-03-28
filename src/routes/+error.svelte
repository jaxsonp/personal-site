<script>
	import { page } from '$app/stores';
</script>

<h1>Error :(</h1>
<h1>{$page.status}: {$page.error != null ? $page.error.message : ''}</h1>
