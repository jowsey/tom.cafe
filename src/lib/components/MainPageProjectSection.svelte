<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div>
	<p class="text-lg font-semibold underline decoration-fuchsia-300 decoration-wavy">{title}</p>
	{@render children?.()}
</div>
