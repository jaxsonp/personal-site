<script>
	export let title;
	export let link;
	export let description;
	export let imagePath;

	let style = $$props.style;
</script>

<div class="card" {style}>
	<a href={link}><h5 id="title">{title}</h5></a>
	<div style="display: grid;">
		<img id="thumbnail" alt={imagePath} src="/src/lib/assets/projectThumbnails/{imagePath}" />
		<p id="description">{description}</p>
	</div>
</div>

<style>
	.card {
		margin: 0.5rem;
		padding: 1rem;
		width: calc(33% - 3rem);

		border-radius: 1rem;
		background: rgba(0, 0, 0, 0.2);
		box-shadow: 0 0 32px -12px rgba(255, 255, 255, 0.2);
	}

	#title {
		margin: 0;
	}

	#description {
		margin: 0.5rem 0;
		grid-column: 1;
		grid-row: 1;
	}

	#thumbnail {
		grid-column: 1;
		grid-row: 1;
		z-index: -1;
		margin-top: 2rem;
		width: 100%;
		height: 10rem;
		object-fit: cover;

		-webkit-mask-image: -webkit-gradient(
			linear,
			left bottom,
			left top,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
		mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
</style>
