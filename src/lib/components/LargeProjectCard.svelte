<script>
	export let title;
	export let description;
	export let thumbnail;
	export let links;
	export let tags;

	import githubIcon from '$lib/assets/icons/github.svg';
	import cargoIcon from '$lib/assets/icons/cargo.svg';
	import BadgeList from './BadgeList.svelte';
</script>

<div
	class="p-4 flex flex-col md:flex-row shadow-transparent-white shadow-light rounded-2xl transition-transform hover:scale-102"
>
	<div class="grow flex flex-col min-h-[10rem]">
		<div class="flex justify-between">
			<div class="flex justify-between items-center w-full">
				<h3>{title}</h3>
				<div class="flex">
					{#each Object.entries(links) as [name, link]}
						{#if name == 'github'}
							<a href={link} title="Github" target="_blank">
								<img
									class="h-8 min-w-6 lg:h-6 m-1"
									src={githubIcon}
									alt="Github"
									title="Github repository"
								/>
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
		<p class="ml-2 italic text-base">
			<span class="not-italic font-black text-blue">↪</span>
			{tags.join(' / ')}
		</p>
		<p class="text-light-gray">{description}</p>
	</div>
	<enhanced:img
		class="mt-2 md:mt-0 w-full md:min-w-40 md:max-w-40 h-auto min-h-40 max-h-40 object-cover object-top rounded-lg md:gradient-mask-l-0"
		src={thumbnail}
		alt={title}
	/>
</div>
