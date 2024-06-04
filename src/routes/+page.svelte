<script>
	import { goto } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';

	import HeadshotPic from '$lib/assets/headshot.jpg';

	function gotoResume() {
		goto('/resume.pdf');
	}
</script>

<div id="page">
	<div id="content">
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
			<h4 style="text-align: center; width: 75%">
				I'm a computer science student at Purdue University with a passion for creating and
				problem-solving. Welcome to my website!
			</h4>
		</div>
		<!-- Contact links -->
		<div id="contact-buttons">
			<a href="./resume.pdf"><button>Resume</button></a>
			<a href="./github"><button>Github</button></a>
			<a href="./linkedin"><button>Linkedin</button></a>
		</div>
		<hr />
		<SectionTitle>About Me</SectionTitle>
	</div>
</div>

<style>
	#page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#content {
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
	}
	#contact-buttons {
		display: flex;
		justify-content: center;
	}
	#contact-buttons > button {
		margin: 2rem 0.5rem;
	}
</style>
