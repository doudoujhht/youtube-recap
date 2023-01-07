<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';
	export let image: string;
	export let videoTitle: string;
	let tiltElement: HTMLDivElement;

	onMount(() => {
		VanillaTilt.init(tiltElement, {
			max: 3.5,
			speed: 300,
			reset: false
		});
	});
</script>

<div>
	<div
		class="w-[320px] flex flex-col gap-2 bg-white drop-shadow-[0px_0px_30px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4 mt-4 "
		bind:this={tiltElement}
	>
		<img src={image} width="288" height="200.25" alt="" class="rounded-lg" />
		<p class="text-left font-semibold text-xl h-14 text-ellipsis overflow-hidden">
			{videoTitle}
		</p>
	</div>
</div>

<style>
	img {
		height: 162px;
		object-fit: cover;
		/* width: auto; */
		margin: 0;
	}
</style>
