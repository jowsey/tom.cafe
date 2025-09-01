<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		enabled?: boolean;
		icon?: string;
		title?: string;
		content?: string;
	}

	let { enabled = true, icon, title, content, ...attribs }: Props = $props();
</script>

<a
	target="_blank"
	{...attribs}
	class={[
		'rounded-md border-2 border-neutral-300/5 bg-neutral-50/10 px-4 py-2 shadow-neutral-200/20 backdrop-blur-md transition-all duration-75',
		enabled && 'cursor-pointer hover:bg-neutral-50/20 hover:shadow',
		attribs.class
	]}
>
	<div class="flex items-center gap-x-3">
		{#if icon}
			<img src={icon} alt="Icon" class="size-5" />
		{/if}
		{#if title}
			<p class="font-bold">{title}</p>
		{/if}
	</div>

	{#if content}
		<p class="mt-2 text-sm text-neutral-300">{content}</p>
	{/if}
</a>
