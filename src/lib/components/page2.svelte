<script lang="ts">
	import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
	import { fadeOut, fadeIn } from '$lib/transition';
	export let title: string;
	export let thumbnail: string;
	export let numberOfviews: number;
	let container: HTMLDivElement;
	let image: HTMLImageElement;
	let paragraph: HTMLParagraphElement;
	let titre: HTMLHeadingElement;
	let containerFadeOut = (e: any) => fadeOut(container, { duration: 400, delay: 0 });
	let imageFadeIn = (e: any) => fadeIn(image, { duration: 400, delay: 600 });
	let titreFadeIn = (e: any) => fadeIn(image, { duration: 400, delay: 1000 });
	let paragraphFadeIn = (e: any) => fadeIn(image, { duration: 400, delay: 1400 });
</script>

<div
	class="w-[96vw] max-h-[100vh] h-[100vh] flex justify-center text-center"
	bind:this={container}
	out:containerFadeOut
>
	<div class="mt-8 flex flex-col items-center">
		<h1 class="text-[72px] mb-8" bind:this={titre} in:titreFadeIn>
			Your most watched creator was <span class="text-primary">{title}</span>
		</h1>
		<p bind:this={paragraph} in:paragraphFadeIn>
			you watched their videos <span class="text-primary font-bold">{numberOfviews} times</span> this
			year
		</p>
		<img
			src={thumbnail}
			bind:this={image}
			alt=""
			class="w-[250px] rounded-full mt-10"
			in:imageFadeIn
		/>
	</div>
</div>

<style>
	div div {
		width: min(932px, 100%);
	}
	h1 {
		font-weight: 700;
		letter-spacing: -0.05em;
		line-height: 1;
	}
</style>
