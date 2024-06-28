<script>
	export let badges;

	import rustIcon from '$lib/assets/icons/rust.svg';
</script>

<div class="col-start-1 row-start-1 self-end">
	{#each badges as badge}
		{#if badge == 'Rust'}
			<img class="h-7 m-1" src={rustIcon} alt="Source" />
		{:else if badge == 'Python'}
			<img class="h-7 m-1" src={rustIcon} alt="Source" />
		{/if}
	{/each}
</div>
