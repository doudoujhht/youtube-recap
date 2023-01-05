<script>
	import Page1 from '$lib/components/page1.svelte';
    import Page2 from '$lib/components/page2.svelte';
	import { page } from '../store';
</script>

{#if $page == 1}
	<Page1 />
{:else}
	<Page2 />
{/if}
