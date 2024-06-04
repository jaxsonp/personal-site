<script>
	import { goto } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import LargeProject from '$lib/components/LargeProject.svelte';

	import HeadshotPic from '$lib/images/headshot.jpg';

	import projects from '../projects.json';
	let featuredProjects = projects['featured'];
</script>

<div id="page">
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
		<div style="display: flex; justify-content: center;">
			<p style="font-size: 2rem; margin: 0 10%;">
				I'm a computer science student at Purdue University with a passion for creating and
				problem-solving. Welcome to my website!
			</p>
		</div>
		<!-- Contact links -->
		<div id="contact-buttons">
			<a href="./resume.pdf"><button>Resume</button></a>
			<a href="./github"><button>Github</button></a>
			<a href="./linkedin"><button>Linkedin</button></a>
		</div>

		<hr />
		<SectionTitle>Featured Projects</SectionTitle>
		<div style="display: flex; justify-content: center;">
			<div style="width: 80%;">
				{#each featuredProjects as { title, link, description, imagePath }}
					<LargeProject {title} {description} {link} {imagePath} />
				{/each}
			</div>
		</div>

		<hr />
		<SectionTitle>All Projects</SectionTitle>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.content {
		width: 1000px;
		max-width: 100vw;
		min-height: calc(100vh - 4rem);
		margin-top: 4rem;

		padding: 1rem;
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
	#contact-buttons {
		display: flex;
		justify-content: center;
	}
</style>
