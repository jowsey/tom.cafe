<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		onclick?: () => void;
		enabled?: boolean;
	}

	let { className, children, onclick, enabled = true }: Props = $props();
</script>

<button
	class={[
		'rounded-md border-2 border-neutral-300/5 bg-neutral-50/10 px-4 py-2 shadow-neutral-200/20 backdrop-blur-md transition-all duration-75',
		enabled && 'cursor-pointer hover:bg-neutral-50/20 hover:shadow',
		className
	]}
	{onclick}
	disabled={!enabled}
>
	{@render children?.()}
</button>
