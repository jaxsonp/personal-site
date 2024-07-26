<script>
	import { browser } from '$app/environment';

	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';

	import headshotPic from '$lib/assets/headshot.jpg';
	import projects from '$lib/projects.json';

	let featuredProjects = projects['featured'];
	let allProjects = projects['all'];
	allProjects.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase());

	// project carousel stuff
	const nProjectRows = 3;
	$: projectsPerPage = 0;
	//$: console.log(projectsPerPage / nProjectRows);
	$: nPages = Math.ceil(allProjects.length / projectsPerPage);
	$: curPage = 0;

	// checks if next or previous buttons need to be disabled on the carousel
	const checkDisableCarouselButtons = () => {
		console.log(curPage);
		if (browser) {
			let nextButton = document.getElementById('carousel-next-button');
			nextButton.disabled = curPage >= nPages - 1;
			let prevButton = document.getElementById('carousel-prev-button');
			prevButton.disabled = curPage <= 0;
		}
	};
	const goToNextPage = () => {
		curPage++;
		checkDisableCarouselButtons();
	};
	const goToPrevPage = () => {
		curPage--;
		checkDisableCarouselButtons();
	};

	if (browser) {
		// dynamically changing number of projects shown
		const handleWindowResize = () => {
			let container = document.getElementById('project-container');
			if (container.clientWidth > 500) {
				projectsPerPage = 3 * nProjectRows;
			} else if (container.clientWidth > 375) {
				projectsPerPage = 2 * nProjectRows;
			} else {
				projectsPerPage = nProjectRows;
			}
			if (curPage >= nPages) {
				curPage = nPages - 1;
			}
			checkDisableCarouselButtons();
		};
		window.addEventListener('resize', handleWindowResize, false);
		window.addEventListener('load', handleWindowResize, false);
	}
	$: displayedProjects = allProjects.slice(
		curPage * projectsPerPage,
		(curPage + 1) * projectsPerPage
	);

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

<main class="flex justify-center">
	<div class="grid lg:grid-cols-4 px-2 lg:w-full lg:max-w-[1280px]">
		<section
			class="mt-16 lg:mt-0 lg:fixed lg:top-0 lg:h-screen lg:w-[400px] flex flex-col lg:flex-row"
		>
			<div class="flex flex-col justify-center items-center lg:h-screen">
				<img class="w-[160px] rounded-full border-black border-4" src={headshotPic} alt="Me pic" />
				<div class="m-8 mb-0 lg:mb-8">
					<p class="text-[1.5rem]">Hi, I'm</p>
					<h1
						class="leading-none font-bold decoration-blue decoration-8 underline underline-offset-2"
					>
						Jaxson<br />Pahukula
					</h1>
				</div>
				<div class="text-xl text-center flex flex-col gap-2 m-4 mt-16 lg:mt-4">
					<a href="/resume.pdf">My Resume 🗋</a>
					<a href="mailto:jaxpahu@gmail.com">jaxpahu@gmail.com 🖂</a>
					<a href="https://github.com/jaxsonp">Github {'>'}</a>
					<a href="https://www.linkedin.com/in/jaxsonp/">LinkedIn {'>'}</a>
				</div>
			</div>
		</section>

		<div class="lg:col-span-1"><!-- spacer div  --></div>
		<div class="lg:col-span-3 mx-4 my-8 flex flex-col gap-12">
			<section class="black-glass w-full p-4 lg:px-12 rounded-2xl">
				<h2 id="about-me">About Me</h2>
				<p class="my-4">TODO put stuff here</p>
			</section>
			<section class="black-glass w-full p-4 lg:px-8 lg:mt-8 rounded-2xl">
				<h2 id="featured-projects">Some Projects</h2>
				<div class="mt-4 flex justify-center">
					<div class="flex flex-col gap-8 w-full lg:max-w-[50%]">
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
				</div>
			</section>
			<section class="black-glass w-2/3 p-4 lg:px-8 rounded-2xl">
				<h2 id="experience">My Experience</h2>
				<p class="my-4">TODO put stuff here (I have experience i swear)</p>
			</section>
			<section class="black-glass w-full p-4 lg:px-8 rounded-2xl">
				<div class="mb-4 flex flex-col md:flex-row justify-between items-end">
					<h2 id="all-projects">All Projects</h2>
					<a href="/projects" class="underline text-xl">See them all {'>'}</a>
				</div>
				<p class="text-center text-base italic text-light-gray">Page {curPage + 1} of {nPages}</p>
				<div class="flex pb-4 justify-center text-lg text-light-gray">
					<button
						id="carousel-prev-button"
						class="px-3 disabled:line-through disabled:italic disabled:text-gray"
						on:click={goToPrevPage}>{'<'} Prev</button
					>
					<button
						id="carousel-next-button"
						class="px-3 disabled:line-through disabled:italic disabled:text-gray"
						on:click={goToNextPage}>Next {'>'}</button
					>
				</div>
				<div id="project-container" class="grid gap-4 grid-cols-{projectsPerPage / nProjectRows}">
					{#each displayedProjects as { title, description, thumbnailFile, links, tags }}
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
	</div>
</main>
