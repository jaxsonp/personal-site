<script>
	export let badges;

	import rustIcon from '$lib/assets/icons/rust.svg';
	import pythonIcon from '$lib/assets/icons/python.svg';
	import flaskIcon from '$lib/assets/icons/flask.svg';
</script>

<div class="flex [&>*]:z-10">
	{#each badges as badge}
		{#if badge == 'Rust'}
			<img class="h-8 m-1" src={rustIcon} alt="Rust" title="Rust" />
		{:else if badge == 'Python'}
			<img class="h-7 m-1" src={pythonIcon} alt="Python" title="Python" />
		{:else if badge == 'Flask'}
			<div class="m-1 p-1 rounded-full bg-light-gray">
				<img class="h-6 w-6 object-contain" src={flaskIcon} alt="Flask" title="Flask" />
			</div>
		{:else}
			<p>{badge}</p>
		{/if}
	{/each}
</div>
