<script>
	export let title;
	export let link;
	export let description;
	export let imagePath;

	import githubIcon from '$lib/assets/github.svg';
	import cargoIcon from '$lib/assets/cargo.svg';
</script>

<div
	class="mx-0 my-8 p-4 h-40 rounded-2xl flex shadow-transparent-white shadow-light transition-transform hover:scale-[102%]"
>
	<div class="grow">
		<div class="flex justify-between">
			<h2>{title}</h2>
		</div>

		<p class="text-md text-light-gray mt-2">{description}</p>
	</div>
	<div class="w-[25%] min-w-[25%] grid">
		<img
			class="w-full h-full col-start-1 row-start-1 object-cover object-top rounded-lg gradient-mask-l-0"
			alt={imagePath}
			src="/src/lib/assets/projectThumbnails/{imagePath}"
		/>
		<div class="col-start-1 row-start-1 self-end z-10">
			<a href={link} title="Github" target="_blank">
				<img class="w-8" src={githubIcon} alt="Source" />
			</a>
		</div>
	</div>
</div>
