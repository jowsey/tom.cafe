<script lang="ts">
	interface Props {
		href: string;
		label: string;
	}

	let { href, label }: Props = $props();

	const external = $derived(href.startsWith('http'));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	target={external ? '_blank' : undefined}
	class="underline decoration-zinc-500 decoration-wavy hover:italic hover:decoration-fuchsia-300"
>
	{label}
</a>
