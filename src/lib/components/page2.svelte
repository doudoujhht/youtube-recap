<script lang="ts">
	import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
	let container: HTMLDivElement;
	const fadeOut = ({ duration, delay }: { duration: number; delay: number }) => {
		const o = +getComputedStyle(container).opacity;
		return {
			delay: delay ?? 0,
			duration: duration ?? 400,
			easing: (t: number) => t,
			css: (t: number) => `opacity: ${t * o};
                                transform: translateY(${
																	(100 - t * 100) * -1
																}px) rotateX(0) rotateY(0);
                                position:fixed;
                                right:0;
                                left:0;
                                margin:0;
                                padding:0
                                `
		};
	};
</script>

<div
	class="max-w-[96vw] w-[96vw] max-h-[100vh] h-[100vh] flex justify-center items-center "
	bind:this={container}
	in:slide={{ delay: 500 }}
	out:fadeOut
>
	<p>your most watched creator was <span>penguinsz0</span></p>
</div>
