<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		href: string;
	}
	let { children, href }: Props = $props();
</script>

<a
	{href}
	target="_blank"
	class="mt-2 flex w-fit cursor-pointer items-center justify-center gap-x-2 rounded-lg border border-neutral-400 bg-neutral-300 px-4 py-1 transition-all duration-75 hover:-translate-y-0.5 hover:shadow-sm"
>
	{@render children?.()}
</a>
