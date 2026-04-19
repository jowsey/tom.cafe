<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="relative p-4">
	<p
		class="pointer-events-none absolute -top-[9.6px] -right-[5.9px] leading-none font-bold text-zinc-700 select-none max-sm:hidden"
	>
		+
	</p>

	{#if title}
		<p class="pb-2 pl-0.5 font-serif text-fuchsia-100 italic">{title}</p>
	{/if}

	{@render children?.()}
</div>
