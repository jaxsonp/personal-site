<script>
	export let title;
	export let link;
	export let description;
	export let imagePath;
</script>

<div class="m-2 p-4 w-[calc(33%-1rem)] rounded-2xl shadow-transparent-white shadow-light grid">
	<img
		class="col-start-1 row-start-1 mt-8 w-full h-40 object-cover gradient-mask-t-0"
		alt={imagePath}
		src="/src/lib/assets/projectThumbnails/{imagePath}"
	/>
	<div class="col-start-1 row-start-1 z-10">
		<a href={link}><h3 class="mb-2 leading-none">{title}</h3></a>
		<p class="italic leading-tight drop-shadow-[0_2px_4px_black]">{description}</p>
	</div>
</div>
