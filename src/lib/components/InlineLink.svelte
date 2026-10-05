<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		class?: string;
		children?: Snippet;
	}

	let { href, class: className, children }: Props = $props();

	const external = $derived(href.startsWith('http'));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	target={external ? '_blank' : undefined}
	class={['underline decoration-zinc-700 decoration-wavy hover:italic hover:decoration-fuchsia-300', className]}
>
	{@render children?.()}
</a>
