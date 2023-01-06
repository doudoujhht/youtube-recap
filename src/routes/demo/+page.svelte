<script>
	import Page1 from '$lib/components/page1.svelte';
	import Page2 from '$lib/components/page2.svelte';
	import Page3 from '$lib/components/page3.svelte';
	import Test from '$lib/components/test.svelte';
	import { page } from '../store';
</script>

{#if $page == 1}
	<Page1 />
{:else if $page == 2}
	<Page2 />
{:else}
	<Page3 />
{/if}
