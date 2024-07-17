<script>
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';

	const thumbnailModules = import.meta.glob(
		'$lib/assets/thumbnails/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	import projectsFile from '$lib/projects.json';
	let projects = projectsFile['all'];
	projects.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase());
</script>

<div class="m-[6vw]">
	<a href="/" class="text-xl">{'<'} Back</a>
	<div class="black-glass p-6 rounded-2xl">
		<div class="mb-8">
			<h1>My Projects</h1>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each projects as { title, description, thumbnailFile, links, tags }}
				<SmallProjectCard
					{title}
					{description}
					thumbnail={thumbnailModules[`/src/lib/assets/thumbnails/${thumbnailFile}`].default}
					{links}
					{tags}
				/>
			{/each}
		</div>
	</div>
</div>
