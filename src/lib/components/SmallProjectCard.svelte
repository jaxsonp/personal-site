<script>
	export let title;
	export let links;
	export let description;
	export let thumbnail;
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
				class="col-start-1 row-start-1 mt-8 w-full h-40 rounded-md gradient-mask-t-0 -z-10"
				title="Inception"
				alt={thumbnail}
				src="/blank"
			/>
		{:else}
			<div class="w-full col-start-1 row-start-1 mt-8">
				<enhanced:img
					class="w-auto h-40 rounded-md object-cover gradient-mask-t-0 -z-10"
					alt={title}
					src={thumbnail}
				/>
			</div>
		{/if}
		<div class="col-start-1 row-start-1 z-10">
			<h3 class="mb-2 leading-none">{title}</h3>
			<p class="italic text-light-gray leading-tight drop-shadow-[0_2px_4px_black]">
				{description}
			</p>
		</div>
		<div
			class="col-start-1 row-start-1 self-end w-fit z-10 transition-transform scale-0 group-hover:scale-102 bg-black rounded-bl-md rounded-tr-md"
		>
			{#each Object.entries(links) as [name, link]}
				<a href={link} title={name} target="_blank" class="">
					{#if name == 'github'}
						<img class="h-8 lg:h-6 m-1 inline" src={githubIcon} alt="Source" />
					{:else if name == 'crates.io'}
						<img class="h-9 lg:h-7 m-1 inline" src={cargoIcon} alt="Source" />
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
