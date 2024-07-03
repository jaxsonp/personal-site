<script>
	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';

	import headshotPic from '$lib/assets/headshot.jpg';

	import projects from '../projects.json';
	let featuredProjects = projects['featured'];
	let otherProjects = projects['other'];
</script>

<main class="flex flex-col lg:flex-row px-2 lg:pl-[10vw] lg:pr-[5vw]">
	<section class="lg:fixed lg:top-0 lg:h-screen md:grow lg:w-[400px] flex flex-col lg:flex-row">
		<div class="flex flex-col justify-center items-center h-[96vh] lg:h-screen">
			<img class="w-[200px] rounded-full border-black border-4" src={headshotPic} alt="Me pic" />
			<div class="mx-8 md:my-8">
				<p class="text-[1.5rem]">Hi, I'm</p>
				<h1
					class="leading-none font-bold decoration-blue decoration-8 underline underline-offset-2"
				>
					Jaxson<br />Pahukula
				</h1>
			</div>
			<p class="mx-16 lg:mx-0 my-8 text-lg">
				I am computer science student at Purdue university, blah blah blah. Welcome to my site!
			</p>
			<a href="mailto:jaxpahu@gmail.com">jaxpahu@gmail.com</a>
		</div>
		<div class="lg:ml-6 lg:mt-16 flex justify-center">
			<div class="flex flex-col gap-2 text-nowrap text-center lg:text-right leading-none text-base">
				<h3 class="md:mb-4 text-2x md:text-3xl lg:text-xl text-left">Jump to...</h3>
				<a href="#featured-projects" class="hover:text-blue">Featured Projects {'>'}</a>
				<a href="#experience" class="hover:text-blue">My Experience {'>'}</a>
				<a href="#projects" class="hover:text-blue">All Projects {'>'}</a>
			</div>
		</div>
	</section>
	<!-- spacer div  -->
	<div class="lg:min-w-[525px]" />
	<div class="mx-4 mt-8 flex flex-col gap-16">
		<section class="black-glass w-full p-4 lg:px-8 lg:mt-8 rounded-2xl">
			<h2 id="featured-projects" class="mx-4">Featured Projects</h2>
			<div class="mt-4 flex flex-col gap-8">
				{#each featuredProjects as { title, description, thumbnailFile, links, tags }}
					<LargeProjectCard {title} {description} {thumbnailFile} {links} {tags} />
				{/each}
			</div>
		</section>
		<section class="black-glass w-full p-4 lg:px-12 rounded-2xl">
			<h2 id="experience" class="">My Experience</h2>
			<p class="my-4">TODO put stuff here (I have experience i swear)</p>
		</section>
		<section class="black-glass w-full p-4 lg:px-8 rounded-2xl">
			<h2 id="projects" class="mx-4">All Projects</h2>
			<div class="mt-4 grid grid-cols-2 xl:grid-cols-3 gap-4">
				{#each otherProjects as { title, description, thumbnailFile, links, tags }}
					<SmallProjectCard {title} {description} {thumbnailFile} {links} {tags} />
				{/each}
			</div>
		</section>
	</div>
</main>
