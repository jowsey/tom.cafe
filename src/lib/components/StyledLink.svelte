<script lang="ts">
	interface Props {
		href: string;
		label: string;
	}

	let { label, href }: Props = $props();

	const external = $derived(href.startsWith('http'));
	const prettyLink = $derived.by(() => {
		if (external) {
			const url = new URL(href);
			if (url.pathname === '/') return url.hostname;
			return url.pathname;
		}

		if (href.startsWith('mailto:')) return href.replace('mailto:', '');
		return href;
	});
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} target={external ? '_blank' : undefined} class="group flex cursor-pointer items-end justify-between gap-2">
	<span
		class="underline decoration-zinc-700 decoration-wavy transition-all duration-75 group-hover:italic group-hover:decoration-fuchsia-300 group-hover:sm:indent-2.5"
	>
		{label}
	</span>

	<span class="text-right text-sm text-zinc-700 italic group-hover:text-zinc-600 max-lg:hidden">{prettyLink}</span>
</a>
