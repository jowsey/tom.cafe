<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="relative rounded-2xl bg-zinc-900 p-4 [corner-shape:squircle]">
	<p
		class="pointer-events-none absolute top-[-9.6px] right-[-5.9px] leading-none font-bold text-zinc-700 select-none max-sm:hidden"
	>
		+
	</p>

	{@render children?.()}
</div>
