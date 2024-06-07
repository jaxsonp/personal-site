<script>
	export let title;
	export let link;
	export let description;
	export let imagePath;

	import sourceIcon from '$lib/assets/source-icon.svg';

	let style = $$props.style;
</script>

<div class="card" {style}>
	<div style="flex-grow: 1;">
		<div style="display: flex; justify-content: space-between;">
			<h3 id="title">{title}</h3>
			<div class="expanding-button">
				<a href={link} target="_blank">
					<img class="icon" src={sourceIcon} alt="Source" />
				</a>
			</div>
		</div>

		<p id="description">{description}</p>
	</div>
	<img id="thumbnail" alt={imagePath} src="/src/lib/assets/projectThumbnails/{imagePath}" />
</div>

<style>
	.card {
		margin: 2rem 0;
		padding: 1rem;
		border-radius: 1rem;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		box-shadow: 0 0 32px -12px rgba(255, 255, 255, 0.2);
	}

	#title {
		margin: 0;
	}

	#description {
		line-height: 1.5rem;
		margin-top: 0.5rem;
	}

	#thumbnail {
		object-fit: cover;
		max-width: 25%;
		border-radius: 0.5rem;

		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			right top,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	.expanding-button {
		margin: 6px;
	}

	.icon {
		height: 2rem;
	}
</style>
