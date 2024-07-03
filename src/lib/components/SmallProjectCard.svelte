<script>
	export let title;
	export let links;
	export let description;
	export let thumbnailFile;
	export let tags;

	import githubIcon from '$lib/assets/icons/github.svg';
	import cargoIcon from '$lib/assets/icons/cargo.svg';
</script>

<div
	class="group p-4 rounded-2xl shadow-transparent-white shadow-light transition-transform hover:scale-105"
>
	<div class="grid">
		{#if title == 'Portfolio'}
			<iframe
				class="col-start-1 row-start-1 mt-8 w-full h-40 gradient-mask-t-0 -z-10"
				title="Inception"
				alt={thumbnailFile}
				src="/blank"
			/>
		{:else}
			<img
				class="col-start-1 row-start-1 mt-8 w-full h-40 object-cover gradient-mask-t-0 -z-10"
				alt={thumbnailFile}
				src="/src/lib/assets/thumbnails/{thumbnailFile}"
			/>
		{/if}

		<div class="col-start-1 row-start-1 z-10">
			<h3 class="mb-2 leading-none">{title}</h3>
			<p class="italic text-light-gray leading-tight drop-shadow-[0_2px_4px_black]">
				{description}
			</p>
		</div>
		<div class="col-start-1 row-start-1 self-end z-10 flex drop-shadow-[0_0_6px_6px]">
			{#each Object.entries(links) as [name, link]}
				<a
					href={link}
					title={name}
					target="_blank"
					class="transition-transform scale-0 group-hover:scale-102"
				>
					{#if name == 'github'}
						<img class="h-8 lg:h-6 m-1" src={githubIcon} alt="Source" />
					{:else if name == 'crates.io'}
						<img class="h-9 lg:h-7 m-1" src={cargoIcon} alt="Source" />
					{/if}
				</a>
			{/each}
		</div>
	</div>
	<p class="italic text-light-gray mt-2">
		<span class="not-italic font-black text-blue">↪</span>
		{tags.join(' / ')}
	</p>
</div>
