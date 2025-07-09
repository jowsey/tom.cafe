<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...buttonAttribs }: HTMLButtonAttributes = $props();
</script>

<button
	class="mb-8 block cursor-pointer rounded-md border-2 border-neutral-400 px-4 py-2 text-xl transition-all duration-75 select-none hover:bg-neutral-300 hover:shadow-sm"
	{...buttonAttribs}
>
	{@render children?.()}
</button>
