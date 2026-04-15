<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="relative p-4">
	<p class="pointer-events-none absolute -top-[13.7px] -right-1.5 font-bold opacity-50 select-none">
		+
	</p>
	<p class="pb-2 font-serif text-fuchsia-100 italic">{title}</p>
	{@render children()}
</div>
