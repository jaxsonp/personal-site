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
	<a href={link} target="_blank" style="max-width: 25%;">
		<img alt={imagePath} src="/src/lib/images/projects/{imagePath}" />
	</a>
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
		color: #fff3e9;
	}

	p {
		line-height: 1.5rem;
	}

	img {
		object-fit: cover;
		max-width: 100%;
		border-radius: 0.5rem;
	}
</style>
