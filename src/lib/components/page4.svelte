<script>
	import VideoElement from './videoElement.svelte';
</script>

<div class="w-[96vw] flex justify-center">
	<div class="flex flex-col items-center mt-8 w-10/12 lg:w-8/12 max-w-[1000px]">
		<h1 class="text-[48px] lg:text-[72px] font-bold">
			Let's talk <span class="text-primary">videos...</span>
		</h1>
		<div class="flex w-full flex-col lg:flex-row gap-6 lg:gap-12 justify-center mt-4 lg:mt-12">
			<VideoElement
				title="On 18/01/2022, this was the first video you watched this year..."
				image="assets/image5.webp"
				videoTitle="Why Is Boba Fett Saying “Like A Bantha”?"
			/>
			<VideoElement
				title="...and this was the video you watched the most. 6 times total.."
				image="assets/image6.webp"
				videoTitle="w-full w-[288px] text-left font-semibold text-xl h-14 text-ellipsis overflow-hidden?"
			/>
		</div>
	</div>
</div>
