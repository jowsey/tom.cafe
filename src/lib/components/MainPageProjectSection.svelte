<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subtitle?: string;
		children?: Snippet;
	}

	let { title, subtitle, children }: Props = $props();
</script>

<div>
	<p class="text-lg font-bold"><span class="mr-2 text-fuchsia-300">❱</span>{title}</p>
	{#if subtitle}
		<p class="text-sm text-zinc-300 italic">{subtitle}</p>
	{/if}

	<div class="mt-2">
		{@render children?.()}
	</div>
</div>
