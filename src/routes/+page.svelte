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
		<h1 class="underline decoration-blue md:text-[8rem] font-bold leading-none">
			Jaxson<br />Pahukula
		</h1>
	</div>
	<div
		class="black-glass w-full py-8 md:p-8 lg:w-[1000px] lg:p-12 lg:rounded-t-[2rem] flex flex-col items-center"
	>
		<!-- Intro section -->
		<div class="flex justify-between">
			<img
				class="hidden lg:block w-[300px] min-w-[300px] m-4 object-cover rounded-xl"
				src={HeadshotPic}
				alt="Jaxson's headshot"
			/>
			<div class="flex flex-col items-center">
				<img
					class="w-3/4 md:w-1/2 lg:hidden my-8 object-cover rounded-xl"
					src={HeadshotPic}
					alt="Jaxson's headshot"
				/>
				<p class="mx-8 text-xl md:text-3xl text-light-gray leading-normal">
					I'm a computer science student at Purdue University with a passion for creating and
					problem-solving. Welcome to my site!
				</p>
				<!-- <div class="flex flex-col items-center *:m-2 *:">
					<LinkButton link="./resume.pdf">Resume</LinkButton>
					<LinkButton link="./linkedin">Linkedin</LinkButton>
					<LinkButton link="./github" img={githubIcon}>Github</LinkButton>
				</div> -->
			</div>
		</div>

		<SectionTitle>Featured Projects</SectionTitle>
		<div class="flex flex-col gap-8 p-4 lg:w-4/5">
			{#each featuredProjects as { title, links, description, imagePath }}
				<LargeProjectCard {title} {description} {links} {imagePath} />
			{/each}
		</div>

		<div class="hidden md:block">
			<SectionTitle>All Projects</SectionTitle>
			<div class="m-12 grid grid-cols-3">
				{#each otherProjects as { title, link, description, imagePath }}
					<SmallProjectCard {title} {description} {link} {imagePath} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
</style>
