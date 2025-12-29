<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		href: string;
	}

	const { href, children, ...attribs }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<a
	{href}
	target={href.startsWith('http') ? '_blank' : undefined}
	class="underline decoration-dotted hover:italic hover:decoration-fuchsia-300 hover:decoration-wavy"
	{...attribs}
>
	{@render children?.()}
</a>
