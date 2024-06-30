<script>
	export let title;
	export let description;
	export let thumbnail;
	export let links;
	export let badges;

	import githubIcon from '$lib/assets/icons/github.svg';
	import cargoIcon from '$lib/assets/icons/cargo.svg';
	import BadgeList from './BadgeList.svelte';
</script>

<div
	class="group p-4 rounded-2xl flex shadow-transparent-white shadow-light transition-transform hover:scale-102"
>
	<div class="grow">
		<div class="flex items-center justify-between pl-4 pr-8">
			<h2 class="mr-4 grow md:grow-0">{title}</h2>
			<BadgeList class="flex" {badges} />
		</div>
		<p class="text-md text-light-gray mt-2">{description}</p>
		<div class="grid md:hidden">
			<img
				class="w-full h-[12rem] col-start-1 row-start-1 object-cover object-top rounded-lg mt-4"
				src="/src/lib/assets/thumbnails/{thumbnail}"
				alt={thumbnail}
			/>
			<div class="col-start-1 row-start-1 self-end flex">
				{#each Object.entries(links) as [name, link]}
					{#if name == 'github'}
						<a href={link} title="Github" target="_blank">
							<img class="h-8 lg:h-6 m-1" src={githubIcon} alt="Source" />
						</a>
					{:else if name == 'crates.io'}
						<a href={link} title="crates.io" target="_blank">
							<img class="h-9 lg:h-7 m-1" src={cargoIcon} alt="Source" />
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
	<div class="hidden md:grid w-[25%] md:min-w-[25%] h-32">
		<img
			class=" w-full h-full col-start-1 row-start-1 object-cover object-top rounded-lg gradient-mask-l-0"
			src="/src/lib/assets/thumbnails/{thumbnail}"
			alt={thumbnail}
		/>
		<div class="col-start-1 row-start-1 self-end flex">
			{#each Object.entries(links) as [name, link]}
				{#if name == 'github'}
					<a href={link} title="Github" target="_blank">
						<img class="h-8 lg:h-6 m-1" src={githubIcon} alt="Github" title="Github repository" />
					</a>
				{:else if name == 'crates.io'}
					<a href={link} title="crates.io" target="_blank">
						<img class="h-9 lg:h-7 m-1" src={cargoIcon} alt="Source" title="crates.io page" />
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>
