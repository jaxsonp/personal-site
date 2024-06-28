<script>
	export let title;
	export let links;
	export let description;
	export let imagePath;

	import LinkButton from '$lib/components/LinkButton.svelte';

	import githubIcon from '$lib/assets/github.svg';
	import cargoIcon from '$lib/assets/cargo.svg';
</script>

<div
	class="group p-4 rounded-2xl flex shadow-transparent-white shadow-light transition-transform hover:scale-102"
>
	<div class="grow">
		<div class="flex items-center">
			<h2 class="mr-4 grow md:grow-0">{title}</h2>
			{#each Object.entries(links) as [name, link]}
				{#if name == 'github'}
					<a href={link} title="Github" target="_blank">
						<img class="h-6 m-1" src={githubIcon} alt="Source" />
					</a>
				{:else if name == 'crates.io'}
					<a href={link} title="crates.io" target="_blank">
						<img class="h-7 m-1" src={cargoIcon} alt="Source" />
					</a>
				{/if}
			{/each}
		</div>
		<p class="text-md text-light-gray mt-2">{description}</p>
		<img
			class="block md:hidden w-full h-[12rem] col-start-1 row-start-1 object-cover object-top rounded-lg mt-4"
			alt={imagePath}
			src="/src/lib/assets/projectThumbnails/{imagePath}"
		/>
	</div>
	<div class="w-[25%] md:min-w-[25%] h-32 grid">
		<img
			class="hidden md:block w-full h-full col-start-1 row-start-1 object-cover object-top rounded-lg gradient-mask-l-0"
			alt={imagePath}
			src="/src/lib/assets/projectThumbnails/{imagePath}"
		/>
	</div>
</div>
