<script lang="ts">
	import Page1 from '$lib/components/page1.svelte';
	import Page2 from '$lib/components/page2.svelte';
	import Page3 from '$lib/components/page3.svelte';
	import Page4 from '$lib/components/page4.svelte';
	import Test from '$lib/components/test.svelte';
	import { page } from '../store';
	export let data: {
		numberOfVideoWatched: number;
		numberOfCreators: number;
		mostViewed: {
			first: {
				thumbnail: string;
				title: string;
				numberOfviews: number;
			};
			second: {
				thumbnail: string;
				title: string;
			};
			third: {
				thumbnail: string;
				title: string;
			};
			numberOfviews: number;
			tenBest: {
				name: string;
				times: number;
			}[];
		};
	};
	if (data) {
		console.log(data);
		console.log(data.mostViewed.tenBest);
	} else console.log('jss');
</script>

{#if $page == 1}
	<Page1 {...data} />
{:else if $page == 2}
	<Page2 {...data.mostViewed.first} />
{:else if $page == 3}
	<Page3
		tenBest={data.mostViewed.tenBest}
		photo1={data.mostViewed.first.thumbnail}
		photo2={data.mostViewed.second.thumbnail}
		photo3={data.mostViewed.third.thumbnail}
	/>
{:else if $page == 4}
	<Page4 />
{:else if $page == 5}
	<Test />
{:else if $page == 6}
	<Test />
{:else if $page == 7}
	<Test />
{/if}
