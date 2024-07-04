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
	class="p-4 flex shadow-transparent-white shadow-light rounded-2xl transition-transform hover:scale-102"
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
	<div class="hidden md:block min-w-[10rem]">
		<enhanced:img
			class="w-auto h-[10rem] object-cover object-top rounded-lg gradient-mask-l-0"
			src={thumbnail}
			alt={title}
		/>
	</div>
</div>
