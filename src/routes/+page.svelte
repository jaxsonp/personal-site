<script>
	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';

	import headshotPic from '$lib/assets/headshot.jpg';

	import projects from '../projects.json';
	let featuredProjects = projects['featured'];
	let otherProjects = projects['other'];

	// preloading thumbnails, svelte enhanced:img moment
	const thumbnailModules = import.meta.glob(
		'$lib/assets/thumbnails/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
</script>

<main class="flex flex-col lg:flex-row px-2 lg:pl-[10vw] lg:pr-[5vw]">
	<section
		class="mt-16 lg:mt-0 lg:fixed lg:top-0 lg:h-screen lg:w-[400px] flex flex-col lg:flex-row"
	>
		<div class="flex flex-col justify-center items-center lg:h-screen">
			<img class="w-[200px] rounded-full border-black border-4" src={headshotPic} alt="Me pic" />
			<div class="m-8 mb-0 lg:mb-8">
				<p class="text-[1.5rem]">Hi, I'm</p>
				<h1
					class="leading-none font-bold decoration-blue decoration-8 underline underline-offset-2"
				>
					Jaxson<br />Pahukula
				</h1>
			</div>
			<div class="text-xl text-center flex flex-col gap-2 m-4 mt-16 lg:mt-4">
				<a href="/resume.pdf" class="group hover:text-blue">My Resume 🗋</a>
				<a href="mailto:jaxpahu@gmail.com" class="hover:text-blue">jaxpahu@gmail.com 🖂</a>
				<a href="https://github.com/jaxsonp" class="hover:text-blue">Github {'>'}</a>
				<a href="https://www.linkedin.com/in/jaxsonp/" class="hover:text-blue">LinkedIn {'>'}</a>
			</div>
		</div>
		<hr class="lg:hidden m-16" />
		<div class="lg:ml-6 lg:mt-16 flex justify-center">
			<div class="flex flex-col gap-2 text-nowrap text-center lg:text-right leading-none text-base">
				<h3 class="md:mb-4 text-2x md:text-3xl lg:text-xl text-left">Jump to...</h3>
				<a href="#about-me" class="hover:text-blue">About Me {'>'}</a>
				<a href="#featured-projects" class="hover:text-blue">Featured Projects {'>'}</a>
				<a href="#experience" class="hover:text-blue">My Experience {'>'}</a>
				<a href="#projects" class="hover:text-blue">All Projects {'>'}</a>
			</div>
		</div>
	</section>
	<!-- spacer div  -->
	<div class="lg:min-w-[525px]" />
	<div class="mx-4 my-8 flex flex-col gap-12">
		<section class="black-glass w-full p-4 lg:px-12 rounded-2xl">
			<h2 id="about-me">About Me</h2>
			<p class="my-4">TODO put stuff here</p>
		</section>
		<section class="black-glass w-full p-4 lg:px-8 lg:mt-8 rounded-2xl">
			<h2 id="featured-projects">Featured Projects</h2>
			<div class="mt-4 flex flex-col gap-8">
				{#each featuredProjects as { title, description, thumbnailFile, links, tags }}
					<LargeProjectCard
						{title}
						{description}
						thumbnail={thumbnailModules[`/src/lib/assets/thumbnails/${thumbnailFile}`].default}
						{links}
						{tags}
					/>
				{/each}
			</div>
		</section>
		<section class="black-glass w-full p-4 lg:px-8 rounded-2xl">
			<h2 id="experience">My Experience</h2>
			<p class="my-4">TODO put stuff here (I have experience i swear)</p>
		</section>
		<section class="black-glass w-full p-4 lg:px-8 rounded-2xl">
			<h2 id="projects">All Projects</h2>
			<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
				{#each otherProjects as { title, description, thumbnailFile, links, tags }}
					<SmallProjectCard
						{title}
						{description}
						thumbnail={thumbnailModules[`/src/lib/assets/thumbnails/${thumbnailFile}`].default}
						{links}
						{tags}
					/>
				{/each}
			</div>
		</section>
	</div>
</main>
