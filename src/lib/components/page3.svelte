<script lang="ts">
	import TopCreator from './topCreator.svelte';
	export let tenBest: {
		name: string;
		times: number;
	}[];
	export let photo1:string;
	export let photo2:string;
	export let photo3:string;
</script>

<div class="w-[96vw] flex justify-center">
	<div id="subDiv" class="flex flex-col items-center mt-8 px-10 w-full max-w-[1300px]">
		<div class="mb-10">
			<h1 class="text-[72px] font-bold tracking-tighter lg:tracking-normal">Top Creators</h1>
			<p class="text-base text-center lg:text-lg">These creators made your year.</p>
		</div>
		<div class="flex justify-start w-full gap-1">
			<div class="w-4/5">
				{#each tenBest as { name, times }, i}
					<TopCreator numero={i + 1} text={`${name} (${times} Times)`} />
				{/each}
			</div>
			<div class="flex flex-col items-center w-2/5">
				<div class="aspect-square w-[50%] xl:w-auto h-[45%] imgContainer">
					<img src={photo1} alt="" class="w-[full]" />
				</div>
				<div class="flex justify-between w-full ">
					<div class="aspect-square w-[145px] h-[170px] imgContainer xl:w-auto img2">
						<img src={photo2} alt="" />
					</div>
					<div class="aspect-square w-[100px] h-[135px] imgContainer img3 xl:w-auto">
						<img src={photo3} alt="" />
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
