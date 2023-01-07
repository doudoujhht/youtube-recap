<script lang="ts">
	export let numero: number;
	export let text: string;
</script>

<div class="flex w-full text-[20px] lg:text-[30px] gap-4 font-bold tracking-tighter">
	<h4 class="basis-16 grow-0 shrink-0 text-secondary ">{numero}.</h4>
	<h4 class="text-ellipsis whitespace-nowrap overflow-hidden">{text}</h4>
</div>
