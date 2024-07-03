<script>
	export let title;
	export let description;
	export let thumbnailFile;
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
		<img
			class="h-[10rem] object-cover object-top rounded-lg gradient-mask-l-0"
			src="/src/lib/assets/thumbnails/{thumbnailFile}"
			alt={thumbnailFile}
		/>
	</div>
</div>

<!-- 
<div
	class="group p-4 rounded-2xl flex shadow-transparent-white shadow-light transition-transform hover:scale-102"
>
	<div class="grow">
		<h2 class="mr-4 grow md:grow-0">{title}</h2>
		<p class="text-md text-light-gray mt-2">{description}</p>
		<div class="grid md:hidden">
			<img
				class="w-full h-[12rem] col-start-1 row-start-1 object-cover object-top rounded-lg mt-4"
				src="/src/lib/assets/thumbnailFiles/{thumbnailFile}"
				alt={thumbnailFile}
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
	<div class="hidden md:grid w-1/4 min-w-[25%] h-32">
		<img
			class=" w-full h-full col-start-1 row-start-1 object-cover object-top rounded-lg gradient-mask-l-0"
			src="/src/lib/assets/thumbnailFiles/{thumbnailFile}"
			alt={thumbnailFile}
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
</div> -->
