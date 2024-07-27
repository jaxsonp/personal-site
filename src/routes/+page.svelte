<script>
	import { browser } from '$app/environment';

	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import SmallProjectCard from '$lib/components/SmallProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	import headshotPic from '$lib/assets/headshot.jpg';
	import projects from '$lib/projects.json';

	let featuredProjects = projects['featured'];
	let allProjects = projects['all'];
	allProjects.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase());

	// project carousel stuff
	const nProjectRows = 2;
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
			if (container.clientWidth > 600) {
				projectsPerPage = 3 * nProjectRows;
			} else if (container.clientWidth > 350) {
				projectsPerPage = 2 * nProjectRows;
			} else {
				projectsPerPage = nProjectRows;
			}
			if (curPage >= nPages) {
				curPage = nPages - 1;
			}
		};
		window.addEventListener('resize', handleWindowResize, false);
		window.addEventListener('load', handleWindowResize, false);
		window.addEventListener('load', checkDisableCarouselButtons, false);
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

<div class="flex flex-col items-center">
	<main
		class="lg:flex lg:w-full lg:max-w-[832px] xl:max-w-[1180px] px-2 mx-1 lg:ml-[20%] lg:mr-[10%] contain-layout"
	>
		<!-- side card -->
		<section class="mt-16 lg:m-0 lg:absolute lg:left-[-100px] lg:h-full lg:w-[300px]">
			<div class="lg:sticky lg:top-0 lg:h-screen flex justify-center items-center z-10">
				<div class="flex flex-col justify-center items-center p-2 rounded-2xl lg:black-glass">
					<!-- Masked shadow -->
					<div
						class="hidden lg:block w-full h-full absolute clip-side-card-shadow shadow-transparent-white shadow-light rounded-2xl pointer-events-none"
					/>
					<img
						class="w-[160px] rounded-full border-black border-4"
						src={headshotPic}
						alt="Me pic"
					/>
					<div class="m-8 mb-0 lg:mb-8">
						<p class="text-[1.5rem]">Hi, I'm</p>
						<h1
							class="leading-none m-0 font-bold decoration-blue decoration-8 underline underline-offset-2"
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
			</div>
		</section>
		<!-- Main content -->
		<div class="my-8 lg:pl-[216px] fle x flex-col gap-12 rounded-2xl black-glass">
			<section class=" w-full p-4 lg:px-12">
				<SectionHeader>About Me</SectionHeader>
				<p class="my-4">TODO put stuff here</p>
			</section>
			<section class="w-full p-4 lg:px-8 lg:mt-8">
				<SectionHeader>Projects</SectionHeader>
				<h2 class="text-center">My Current Favorites</h2>
				<div class="mt-4 flex justify-center">
					<div class="flex flex-col gap-8 w-full xl:max-w-[80%]">
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
				<br class="m-4" />
				<!-- all projects carousel -->
				<section class="hidden md:inline-block w-full px-4 lg:px-8">
					<h2 class="text-center">All Projects</h2>
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
			</section>
			<section class="w-full p-4 lg:px-8">
				<SectionHeader>My Experience</SectionHeader>
				<p class="my-4">TODO put stuff here (I have experience i swear)</p>
			</section>
		</div>
	</main>
</div>

<style>
	.clip-side-card-shadow {
		/* To clip the shadow on the left side card */
		clip-path: xywh(132px -100px 100% 100vh);
	}
</style>
