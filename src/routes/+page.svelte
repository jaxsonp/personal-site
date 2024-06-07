<script>
	import { goto } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';

	import HeadshotPic from '$lib/assets/headshot.jpg';

	import projects from '../projects.json';
	import SmallProjectCard from '../lib/components/SmallProjectCard.svelte';
	let featuredProjects = projects['featured'];
	let otherProjects = projects['other'];
</script>

<div class="content">
	<!-- Intro section -->
	<div style="display: flex; justify-content: space-between;">
		<div style="flex-grow: 1">
			<h4 style="margin-bottom: 0;">Hi, I'm</h4>
			<h1 id="title">
				Jaxson<br />Pahukula
			</h1>
		</div>
		<img id="headshot" src={HeadshotPic} alt="Jaxson's headshot" />
	</div>
	<p style="font-size: 1.5rem; margin: 3rem 10%;">
		I'm a computer science student at Purdue University with a passion for creating and
		problem-solving. Welcome to my website!
	</p>
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

<style>
	.content {
		width: 1000px;
		max-width: 100vw;
		min-height: calc(100vh - 4rem);
		margin-top: 4rem;

		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#title {
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
