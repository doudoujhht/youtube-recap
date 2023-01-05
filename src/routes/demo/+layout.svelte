<script>
	import { page } from '../store';
	let pageNumero = $page;
</script>

<div class="flex">
	<slot />
	<aside class="flex flex-col h-[100vh] items-center justify-center w-[4vw]">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			src="assets/arrow.svg"
			alt=""
			class="rotate-90 cursor-pointer"
			on:click={() => ($page = $page > 1 ? $page - 1 : $page)}
		/>
		<p>{$page}/9</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			src="assets/arrow.svg"
			alt=""
			class="rotate-[270deg] cursor-pointer"
			on:click={() => ($page = $page < 8 ? $page + 1 : $page)}
		/>
	</aside>
</div>
