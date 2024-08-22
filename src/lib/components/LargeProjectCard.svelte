<script>
	export let title;
	export let description;
	export let thumbnail;
	export let links;
	export let tags;

	import LinkBadges from '$lib/components/LinkBadges.svelte';
</script>

<div
	class="p-4 flex flex-col md:flex-row shadow-transparent-white shadow-light rounded-2xl transition-transform hover:scale-102"
>
	<div class="grow flex flex-col min-h-[10rem]">
		<div class="flex justify-between">
			<div class="flex justify-between items-center w-full">
				<h3>{title}</h3>
				<LinkBadges {links} />
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
