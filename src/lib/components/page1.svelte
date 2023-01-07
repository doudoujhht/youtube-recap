<script lang="ts">

	import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
	import { fadeOut, fadeIn } from '$lib/transition';
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';
	export let numberOfVideoWatched: number;
	export let numberOfCreators: number;
	let text: HTMLParagraphElement;
	let container: HTMLDivElement;
	let first: HTMLHeadingElement;
	let second: HTMLHeadingElement;
	let third: HTMLHeadingElement;
	const containerFadeOut = (e: any) => fadeOut(container, { duration: 400, delay: 0 });
	const firstFadeout = (e: any) => fadeIn(first, { duration: 400, delay: 600 });
	const secondFadeout = (e: any) => fadeIn(second, { duration: 400, delay: 1000 });
	const thirdFadeout = (e: any) => fadeIn(third, { duration: 400, delay: 1400 });

	let tiltElement: HTMLDivElement;

	onMount(() => {
		VanillaTilt.init(container, {
			max: 20,
			speed: 300,
			reset: false
		});
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore missing-declaration -->
<div
	class="max-w-[960vw] w-[96vw] max-h-[100vh] h-[100vh] flex justify-center items-center fade-out cursor-default"
	bind:this={container}
	in:slide={{ delay: 500 }}
	out:containerFadeOut
>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div class="text-[72px]" bind:this={text} id="container">
		<p class="transform-none" in:firstFadeout>this year, you watched</p>
		<p class="transform-none" in:secondFadeout>
			<span
				class="text-primary text-[54px] mr-2 md:text-[100px] md:mr-4 lg:text-[200px] tracking-[-.05em] leading-tight lg:mr-6 inline"
				>{numberOfVideoWatched}</span
			>
			videos
		</p>
		<p class="transform-none" in:thirdFadeout>
			from
			<span class="text-secondary">{numberOfCreators}</span> different creators
		</p>
	</div>
</div>

<style>
	p {
		font-weight: 700;
		letter-spacing: -0.05em;
		line-height: 1.2;
		transition: all 0.3s 0s;
		transform-style: preserve-3d;
		transform-origin: center;
	}
	#container {
		perspective: 1000px;
	}
	@media only screen and (min-width: 900px) {
		#container {
			perspective: 1300px;
		}
	}
	@media only screen and (min-width: 1200px) {
		#container {
			perspective: 1600px;
		}
	}
	@media only screen and (min-width: 1580px) {
		#container {
			perspective: 1750px;
		}
	}
	@media only screen and (min-width: 2000px) {
		#container {
			perspective: 2500px;
		}
	}
	.fade-out {
		transition: all 0.4s ease-out;
		opacity: 1;
	}

	.inactive {
		opacity: 0;
		transform: translateY(-100px);
	}
</style>
