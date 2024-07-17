<script>
	export let links;

	import githubIcon from '$lib/assets/icons/github.svg';
	import cargoIcon from '$lib/assets/icons/cargo.svg';
</script>

<div class="[&>*]:z-10">
	{#each Object.entries(links) as [name, link]}
		{#if name == 'github'}
			<a href={link} title="Github" target="_blank">
				<img
					class="inline h-8 min-w-6 lg:h-6 m-1"
					src={githubIcon}
					alt="Github"
					title="Github repository"
				/>
			</a>
		{:else if name == 'crates.io'}
			<a href={link} title="crates.io" target="_blank">
				<img class="inline h-9 lg:h-7 m-1" src={cargoIcon} alt="Source" title="crates.io page" />
			</a>
		{:else}
			{console.warn('TODO: implement', name, 'links and icon')}
		{/if}
	{/each}
</div>
