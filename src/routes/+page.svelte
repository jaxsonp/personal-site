<script>
	import { goto } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';

	import HeadshotPic from '$lib/assets/headshot.jpg';
	import docIcon from '$lib/assets/doc.svg';

	import projects from '../projects.json';
	let featuredProjects = projects['featured'];
	let otherProjects = projects['other'];
</script>

<div class="flex flex-col items-center">
	<!-- Title section -->
	<div class="h-screen flex flex-col justify-center">
		<p class="text-4xl">Hi, I'm</p>
		<h1 class="underline decoration-blue text-[8rem] font-bold leading-none">
			Jaxson<br />Pahukula
		</h1>
	</div>
	<div class="black-glass w-[1000px] px-4 flex flex-col items-center">
		<!-- Intro section -->
		<div class="flex justify-between p-8">
			<div>
				<p class="text-3xl text-light-gray leading-normal m-4">
					I'm a computer science student at Purdue University with a passion for creating and
					problem-solving. Welcome to my site!
				</p>
				<!-- <div class="flex flex-col items-center *:m-2 *:">
					<LinkButton link="./resume.pdf">Resume</LinkButton>
					<LinkButton link="./linkedin">Linkedin</LinkButton>
					<LinkButton link="./github" img={githubIcon}>Github</LinkButton>
				</div> -->
			</div>
			<div class="m-4 shadow-transparent-white shadow-sm-light rounded-b-xl">
				<img
					class="w-[300px] min-w-[300px] object-cover rounded-t-xl"
					src={HeadshotPic}
					alt="Jaxson's headshot"
				/>
				<div class="flex justify-center">
					<button class="py-2 px-4 flex text-xl">
						<img src={docIcon} alt="doc" class="h-6 m-1 mr-4 brightness-90" />
						Resume
					</button>
				</div>
			</div>
		</div>

		<SectionTitle>Featured Projects</SectionTitle>
		<div class="w-4/5">
			{#each featuredProjects as { title, link, description, imagePath }}
				<LargeProjectCard {title} {description} {link} {imagePath} />
			{/each}
		</div>

		<SectionTitle>All Projects</SectionTitle>
		<div class="m-12 grid grid-cols-3">
			{#each otherProjects as { title, link, description, imagePath }}
				<SmallProjectCard {title} {description} {link} {imagePath} />
			{/each}
		</div>
	</div>
</div>

<style>
</style>
