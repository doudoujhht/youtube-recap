<script lang="ts">
	import Thumbnail from './thumbnail.svelte';
	export let title: string;
	export let image: string;
	export let videoTitle: string;
</script>

<div class="flex flex-col items-center gap-6">
	<p class="mt-6 font-semibold text-[18px] max-w-[300px] text-center mx-auto">
		{title}
	</p>
	<Thumbnail {image} {videoTitle} />
</div>
