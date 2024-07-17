<script>
	export let title;
	export let links;
	export let description;
	export let thumbnail;
	export let tags;

	import LinkBadges from './LinkBadges.svelte';
</script>

<div
	class="group p-4 rounded-2xl shadow-transparent-white shadow-light transition-transform hover:scale-105"
>
	<div class="grid">
		{#if title == 'Portfolio'}
			<iframe
				class="col-start-1 row-start-1 mt-8 w-full h-36 rounded-md gradient-mask-t-0 -z-10"
				title="Inception"
				alt={thumbnail}
				src="/blank"
			/>
		{:else}
			<div class="w-full col-start-1 row-start-1 mt-8">
				<enhanced:img
					class="w-auto min-w-full max-w-full h-auto max-h-36 min-h-36 rounded-lg object-cover gradient-mask-t-0 -z-10"
					alt={title}
					src={thumbnail}
				/>
			</div>
		{/if}
		<div class="col-start-1 row-start-1 z-10">
			<h3 class="mb-2 leading-none">{title}</h3>
			<div class="drop-shadow-[0_1px_2px_#000000]">
				<p class="italic text-light-gray leading-tight">
					{description}
				</p>
			</div>
		</div>
		<div
			class="col-start-1 row-start-1 self-end w-fit z-10 transition-transform scale-0 group-hover:scale-102 bg-black rounded-bl-lg rounded-tr-lg"
		>
			<LinkBadges {links} />
		</div>
	</div>
	<p class="italic text-light-gray mt-2">
		<span class="not-italic font-black text-blue">↪</span>
		{tags.join(' / ')}
	</p>
</div>
