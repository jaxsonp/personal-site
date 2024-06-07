<script>
	import { goto } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';

	import HeadshotPic from '$lib/assets/headshot.jpg';

	import projects from '../projects.json';
	let featuredProjects = projects['featured'];
	let otherProjects = projects['other'];
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
	<div style="height: 100vh; display: flex; flex-direction: column; justify-content: center;">
		<p style="margin: 0; font-size: 3rem;">Hi, I'm</p>
		<h1 id="title">
			Jaxson<br />Pahukula
		</h1>
	</div>
	<div class="content">
		<!-- Intro section -->
		<div style="display: flex; justify-content: space-between;">
			<p style="font-size: 1.5rem; margin: 3rem 10%;">
				I'm a computer science student at Purdue University with a passion for creating and
				problem-solving. Welcome to my website!
			</p>
			<img id="headshot" src={HeadshotPic} alt="Jaxson's headshot" />
		</div>

		<!-- Contact links -->
		<div style="display: flex; justify-content: center;">
			<a href="./resume.pdf"><button>Resume</button></a>
			<a href="./github"><button>Github</button></a>
			<a href="./linkedin"><button>Linkedin</button></a>
		</div>

		<SectionTitle>Featured Projects</SectionTitle>
		<div style="width: 80%;">
			{#each featuredProjects as { title, link, description, imagePath }}
				<LargeProjectCard {title} {description} {link} {imagePath} />
			{/each}
		</div>

		<SectionTitle>All Projects</SectionTitle>
		<div style="width: 90%; display: flex; flex-wrap: wrap;">
			{#each otherProjects as { title, link, description, imagePath }}
				<SmallProjectCard {title} {description} {link} {imagePath} />
			{/each}
		</div>
	</div>
</div>

<style>
	.content {
		width: 1000px;
		max-width: 100vw;
		min-height: calc(100vh - 4rem);

		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#title {
		font-size: 8rem;
		margin-bottom: 2rem;
		text-decoration: underline;
		text-decoration-color: dodgerblue;
	}
	#headshot {
		/* TODO fix dynamic sizing and replace img */
		width: 300px;
		border-radius: 2px;
		margin: 2rem;
		object-fit: cover;
		box-shadow: 8px 8px dodgerblue;
	}
</style>
