<script>
	export let link;
</script>

<a href={link}>
	<button class="border border-blue rounded-full p-2 shadow-[1px_1px_0_3px] shadow-blue">
		<slot />
	</button>
</a>
