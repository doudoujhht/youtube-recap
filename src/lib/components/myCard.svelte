<script lang="ts">
	let card: HTMLDivElement;
	function handleHover(e: MouseEvent) {
		let rect = card.getBoundingClientRect();
		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;
		// console.log(`${e.clientX} , ${e.clientY}`);
		// console.log(rect);
		// console.log(`x:${x / 40.22} y${y}`);
		let nombreX = (x / card.clientWidth) * 25;
		// nombreX = (nombreX * 14.71834) / 100 - 7.35917;
		let nombreY = (y / card.clientHeight) * 25;
		// nombreY = (nombreY * 33.75) / 100 - 16.875;
		// console.log(nombre);
		// console.log(nombreY);
		if (nombreX < 12.5) nombreX -= 25;
		if (nombreY < 15) nombreY -= 30;
		// console.log(nombreY);
		card.style.transform = 'rotateY(' + nombreX * 0.5 + 'deg) rotateX(' + nombreY * 0.7 + 'deg)';
		console.log(card.style.transform);
	}
	function handleLeave() {
		card.style.transition = '';
		card.style.transform = '';
	}
</script>

<div
	class="w-[100vw] h-[100vh] flex flex-col lg:flex-row justify-center items-center px-10"
	id="container"
>
	<div
		class="card mx-auto my-4 mb-8 drop-shadow-[0px_0px_30px_rgba(0,0,0,0.25)] shadow-lg bg-white rounded-lg relative"
		style=""
		bind:this={card}
		on:mousemove={(e) => handleHover(e)}
		on:focus={null}
		on:mouseleave={handleLeave}
	>
		<p class="w-4/5 m-auto font-bold text-3xl pt-4">
			<span class="text-primary">12330</span> videos.
		</p>
		<p class="w-4/5 m-auto font-bold text-3xl"><span class="text-secondary">3276</span> creator.</p>
		<div class="pt-5 h-max">
			<img src="assets/image1.webp" alt="" class="m-auto rounded-full w-3/5 " />
			<div class="flex justify-around">
				<img src="assets/image.webp" alt="" class="rounded-full w-1/3" />
				<div class="w-1/3 flex items-center">
					<img src="assets/image2.webp" alt="" class="rounded-full w-3/4" />
				</div>
			</div>
		</div>
		<div class="w-4/5 m-auto pt-5">
			<h1 class="text-3xl font-bold">Top creators</h1>
			<div class="flex justify-between pt-5 font-bold">
				<div class="flex flex-col">
					<span>dream</span>
					<span>penguiz0</span>
					<span>Mr beast</span>
					<span>Ludwig</span>
					<span>Ludwin Clips</span>
				</div>
				<div class="flex flex-col">
					<span>Atrioc</span>
					<span>Mogul Mail</span>
					<span>NBC Sports</span>
					<span>ESPN FC</span>
					<span>xQc Clips</span>
				</div>
			</div>
		</div>
	</div>
	<div class="w-1/2 text-center flex flex-col items-center">
		<h1
			class="text-[40px] lg:text-[70px] font-bold mt-4 lg:mt-0 text-center leading-[1.2] tracking-tighter pb-7"
		>
			Think "Wrapped" for YouTube
		</h1>
		<p>
			How did you spend your 2022? Retrieve your YouTube data and get your year in review in under
			five minutes.
		</p>
		<a href="/demo">
			<button
				class="w-[400px] h-[92px] bg-[#EEF2F3] hover:bg-[#ddd] flex items-center font-semibold text-xl text-left rounded-lg mt-10 px-4"
			>
				<img src="assets/image3.webp" alt="" class="w-[15%]" />
				Show me a preview of what it's look like
				<svg
					viewBox="64 64 896 896"
					focusable="false"
					data-icon="arrow-right"
					width="1em"
					height="1em"
					fill="currentColor"
					aria-hidden="true"
					><path
						d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
					/></svg
				></button
			>
		</a>
	</div>
</div>

<style>
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
	.card {
		cursor: pointer;
		height: 650px;
		width: 350px;
		opacity: 1;
		transition: all 0.3s ease-out 0s;
		transform-style: preserve-3d;
	}
</style>
