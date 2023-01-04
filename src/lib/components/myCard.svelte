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

<div class="w-[100vw] h-[100vh] flex justify-center items-center" id="container">
	<div
		class="card mx-auto my-4 mb-8 drop-shadow-[0px_0px_30px_rgba(0,0,0,0.25)] shadow-lg bg-white rounded-lg relative"
		style=""
		bind:this={card}
		on:mousemove={(e) => handleHover(e)}
		on:focus={null}
		on:mouseleave={handleLeave}
	>
		<p class="w-4/5 m-auto font-bold text-2xl"><span class="text-primary">12330</span> videos.</p>
		<p class="w-4/5 m-auto font-bold text-2xl"><span class="text-secondary">3276</span> creator.</p>
		<div class="pt-5">
			<img src="assets/image1.webp" alt="" class="m-auto rounded-full w-3/5 " />
			<div class="flex justify-around">
				<img src="assets/image.webp" alt="" class="rounded-full w-1/3" />
				<img src="assets/image2.webp" alt="" class="rounded-full w-1/3" />
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
</div>

<style>
	#container {
		perspective: 1000px;
	}
	.card {
		cursor: pointer;
		height: 591.92px;
		width: 295.96px;
		opacity: 1;
		transition: all 0.3s ease-out 0s;
		transform-style: preserve-3d;
	}
</style>
