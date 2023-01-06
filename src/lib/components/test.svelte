<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import { onMount } from 'svelte';

	let tiltElement:HTMLDivElement;

	onMount(() => {
		VanillaTilt.init(tiltElement, {
			max: 25,
			speed: 400,
            "reset-to-start":false
		});
	});
</script>
<div bind:this={tiltElement} class="flex h-[100vh] w-[90vw] bg-black items-center text-center">This element will have a tilt effect</div>
