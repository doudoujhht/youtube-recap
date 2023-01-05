<script lang="ts">
	import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
	let text: HTMLParagraphElement;
	let container: HTMLDivElement;
	function handleHover(e: MouseEvent) {
		let rect = text.getBoundingClientRect();
		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;

		let nombreX = (x / text.clientWidth) * 50;
		let nombreY = (y / text.clientHeight) * 40;
		nombreY -= 15;
		nombreX -= 13.25;
		text.style.transform = 'rotateY(' + nombreX + 'deg) rotateX(' + nombreY + 'deg)';
		console.log(text.style.transform);
	}
	const fadeOut = () => {
		const o = +getComputedStyle(container).opacity;
		return {
			delay: 0,
			duration: 400,
			easing: (t: number) => t,
			css: (t: number) => `opacity: ${t * o};
                                transform: translateY(${
																	(100 - t * 100) * -1
																}px) rotateX(0) rotateY(0);
                                position:fixed;
                                right:0;
                                left:0;
                                margin:0;
                                padding:0;`
		};
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore missing-declaration -->
<div
	class="max-w-[960vw] w-[96vw] max-h-[100vh] h-[100vh] flex justify-center items-center fade-out"
	bind:this={container}
	in:slide={{ delay: 500 }}
	out:fadeOut
>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<p class="text-[72px]" bind:this={text} on:mousemove={(e) => handleHover(e)} id="container">
		this year, you watched<br /><span
			class="text-primary text-[54px] mr-2 md:text-[100px] md:mr-4 lg:text-[200px] tracking-[-.05em] leading-tight lg:mr-6 inline"
			>12898</span
		>
		videos<br />from
		<span class="text-secondary">3587</span> different creators
		<button>jean</button>
		<span class="inactive">inactive</span>
	</p>
</div>

<style>
	p {
		font-weight: 700;
		letter-spacing: -0.05em;
		line-height: 1.2;
		width: 80%;
		transition: all 0.3s;
		transform-style: flat;
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
