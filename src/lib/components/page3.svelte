<script>
	import TopCreator from './topCreator.svelte';
</script>

<div class="w-[96vw] flex justify-center">
	<div id="subDiv" class="flex flex-col items-center mt-8 w-10/12 lg:w-8/12 max-w-[1000px]">
		<div class="mb-10">
			<h1 class="text-[72px] font-bold tracking-tighter lg:tracking-normal">Top Creators</h1>
			<p class="text-base text-center lg:text-lg">These creators made your year.</p>
		</div>
		<div class="flex justify-start w-full gap-1">
			<div class="w-3/5">
				<TopCreator numero="1" text="penguinz0" />
				<TopCreator numero="2" text="Atrioc" />
				<TopCreator numero="3" text="Moist Charlie Clips" />
				<TopCreator numero="4" text="Ludwin Clips" />
				<TopCreator numero="5" text="Sushi [Hololive and Vtubers]" />
				<TopCreator numero="6" text="Lyce Ch。" />
				<TopCreator numero="7" text="xQc Clips" />
				<TopCreator numero="8" text="NBC Sports" />
				<TopCreator numero="9" text="The Yard Clips" />
				<TopCreator numero="10" text="Sushi [Hololive and Vtubers]" />
			</div>
			<div class="flex flex-col items-center w-2/5">
				<div class="aspect-square w-[50%] xl:w-auto h-[45%] imgContainer">
					<img src="assets/image.webp" alt="" class="w-[full]" />
				</div>
				<div class="flex justify-between w-full ">
					<div class="aspect-square w-[145px] h-[170px] imgContainer xl:w-auto img2">
						<img src="assets/image2.webp" alt="" />
					</div>
					<div class="aspect-square w-[100px] h-[135px] imgContainer img3 xl:w-auto">
						<img src="assets/image2.webp" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		/* clip-path: inset(0 15% 0 15%); */
		max-width: 100%;
		height: 100%;
	}
	.imgContainer {
		overflow: hidden;
		border: 12px solid rgb(241 147 147);
		border-radius: 9999px;
	}
</style>
