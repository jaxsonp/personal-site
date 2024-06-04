<script>
	export let title;
	export let link;
	export let description;
	export let imagePath;
</script>

<div class="card">
	<div style="flex-grow: 1;">
		<a href={link} target="_blank">
			<h3 id="title">{title}</h3>
		</a>

		<p id="description">{description}</p>
	</div>
	<img alt={imagePath} src="/src/lib/images/projects/{imagePath}" />
</div>

<style>
	.card {
		margin: 2rem 0;
		padding: 1rem;
		border-radius: 1rem;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(3px);

		display: flex;
	}

	#title {
		margin: 0;
		color: #fff3e9;
	}

	p {
		line-height: 1.5rem;
	}

	.card > img {
		object-fit: cover;
		max-width: 25%;

		border-radius: 0.5rem;
	}
</style>
