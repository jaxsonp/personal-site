import SectionHeader from "components/SectionHeader";

import headshotPic from "assets/headshot.png";

export default function RootPage() {
	return (
		<div className="flex flex-col items-center">
			<main className="lg:flex lg:w-full lg:max-w-[832px] xl:max-w-[1180px] px-2 mx-1 lg:ml-[20%] lg:mr-[10%] contain-layout">
				{/* Side card */}
				<section className="mt-16 lg:m-0 lg:absolute lg:left-[-100px] lg:h-full lg:w-[300px] lg:min-w-[300px]">
					<div className="lg:sticky lg:top-0 lg:h-screen flex justify-center items-center z-10">
						<div className="flex flex-col justify-center items-center p-2 rounded-2xl lg:black-glass">
							{/* Masked shadow
					<div
						className="hidden lg:block w-full h-full absolute clip-side-card-shadow shadow-transparent-white shadow-light rounded-2xl pointer-events-none"
					/> */}
							<img className="w-[160px] rounded-full border-black border-4" src={headshotPic} alt="Me pic" />
							<div className="m-8 mb-0 lg:mb-8">
								<p className="text-[1.5rem]">Hi, I'm</p>
								<h1 className="leading-none my-0 font-bold decoration-blue decoration-8 underline underline-offset-2">
									Jaxson
									<br />
									Pahukula
								</h1>
							</div>
							<div className="text-xl text-center flex flex-col gap-2 m-4 mt-16 lg:mt-4">
								<a href="/resume.pdf">My Resume 🗋</a>
								<a href="mailto:jaxpahu@gmail.com">jaxpahu@gmail.com 🖂</a>
								<a href="https://github.com/jaxsonp">Github {">"}</a>
								<a href="https://www.linkedin.com/in/jaxsonp/">LinkedIn {">"}</a>
							</div>
						</div>
					</div>
				</section>
				{/* Main content */}
				<div className="my-8 lg:pl-[216px] rounded-2xl black-glass">
					<section className=" w-full p-4 lg:px-12">
						<SectionHeader>About Me</SectionHeader>
						<p className="my-4">TODO put stuff here</p>
					</section>
					<section className="w-full p-4 lg:px-8 lg:mt-8">
						<SectionHeader>Projects</SectionHeader>
						<h2 className="text-center">My Current Favorites</h2>
						<div className="mt-4 flex justify-center">
							<div className="flex flex-col gap-8 w-full xl:max-w-[80%]">
								{/* {#each featuredProjects as { title, description, thumbnailFile, links, tags }}
							<LargeProjectCard
								{title}
								{description}
								thumbnail={thumbnailModules[`/src/lib/assets/thumbnails/${thumbnailFile}`].default}
								{links}
								{tags}
							/>
						{/each} */}
							</div>
						</div>
						<br className="m-4" />
						{/* all projects carousel */}
						<section className="hidden md:inline-block w-full px-4 lg:px-8">
							<h2 className="text-center">All Projects</h2>
							{/* <p className="text-center text-base italic text-light-gray">
								Page {curPage + 1} of {nPages}
							</p> */}
							{/* <div className="flex pb-4 justify-center text-lg text-light-gray">
						<button
							id="carousel-prev-button"
							className="px-3 disabled:line-through disabled:italic disabled:text-gray"
							on:click={goToPrevPage}>{'<'} Prev</button
						>
						<button
							id="carousel-next-button"
							className="px-3 disabled:line-through disabled:italic disabled:text-gray"
							on:click={goToNextPage}>Next {'>'}</button
						>
					</div>
					<div id="project-container" className="grid gap-4 grid-cols-{projectsPerPage / nProjectRows}">
						{#each displayedProjects as { title, description, thumbnailFile, links, tags }}
							<SmallProjectCard
								{title}
								{description}
								thumbnail={thumbnailModules[`/src/lib/assets/thumbnails/${thumbnailFile}`].default}
								{links}
								{tags}
							/>
						{/each}
					</div> */}
						</section>
					</section>
					<section className="w-full p-4 lg:px-8">
						<SectionHeader>My Experience</SectionHeader>
						<p className="my-4">TODO put stuff here (I have experience i swear)</p>
					</section>
				</div>
			</main>
		</div>
	);
}
