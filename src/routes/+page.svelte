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

<div class="flex flex-col items-center">
	<div class="h-screen flex flex-col justify-center">
		<p class="text-4xl">Hi, I'm</p>
		<h1 class="underline decoration-accent text-[8rem] font-bold leading-none">
			Jaxson<br />Pahukula
		</h1>
	</div>
	<div class="black-glass w-[1000px] px-4 flex flex-col items-center">
		<!-- Intro section -->
		<div class="flex justify-between p-8">
			<div>
				<p class="text-3xl m-4">
					I'm a computer science student at Purdue University with a passion for creating and
					problem-solving. Welcome to my website!
				</p>
				<!-- Contact links -->
				<div style="display: flex; justify-content: center;">
					<a href="./resume.pdf"><button>Resume</button></a>
					<a href="./github"><button>Github</button></a>
					<a href="./linkedin"><button>Linkedin</button></a>
				</div>
			</div>
			<img class="w-[300px] m-4" src={HeadshotPic} alt="Jaxson's headshot" />
		</div>

		<SectionTitle>Featured Projects</SectionTitle>
		<div class="w-4/5">
			{#each featuredProjects as { title, link, description, imagePath }}
				<LargeProjectCard {title} {description} {link} {imagePath} />
			{/each}
		</div>

		<SectionTitle>All Projects</SectionTitle>
		<div class="w-[90%] flex flex-wrap">
			{#each otherProjects as { title, link, description, imagePath }}
				<SmallProjectCard {title} {description} {link} {imagePath} />
			{/each}
		</div>
	</div>
</div>
