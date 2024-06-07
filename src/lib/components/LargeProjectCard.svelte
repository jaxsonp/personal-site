<script>
	export let title;
	export let link;
	export let description;
	export let imagePath;

	import sourceIcon from '$lib/assets/source-icon.svg';
</script>

<div class="mx-0 my-8 p-4 rounded-2xl flex shadow-transparent-white shadow-light">
	<div class="grow">
		<div class="flex justify-between">
			<h2>{title}</h2>
			<div>
				<a href={link} target="_blank">
					<img class="w-8" src={sourceIcon} alt="Source" />
				</a>
			</div>
		</div>

		<p class="text-md mt-2">{description}</p>
	</div>
	<img
		class="max-w-[25%] object-cover rounded-lg gradient-mask-l-0"
		alt={imagePath}
		src="/src/lib/assets/projectThumbnails/{imagePath}"
	/>
</div>
