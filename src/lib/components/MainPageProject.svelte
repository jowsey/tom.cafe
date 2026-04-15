<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subtitle: string;
		year?: number;
		href?: string;
		images?: string[];
		children?: Snippet;
	}

	let { title, subtitle, year, href, images, children }: Props = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} target="_blank" class={['@container', { 'hover:bg-zinc-50/2': href }]}>
	<div class="flex w-full gap-8 p-8 @max-5xl:flex-col">
		{#if images}
			<div class="flex shrink-0 gap-4 overflow-auto @5xl:flex-col">
				{#each images as img (img)}
					<img
						src={img}
						alt={title}
						class="aspect-video min-w-56 shrink-0 rounded-lg object-cover @max-5xl:h-31.5 @5xl:w-56"
					/>
				{/each}
			</div>
		{/if}

		<div>
			<p class="font-bold">
				<span class="text-3xl">{title}</span>
				{#if year}
					<span class="text-xl text-zinc-700">({year})</span>
				{/if}
			</p>
			<p class="text-lg text-zinc-300">{subtitle}</p>

			<div class="mt-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</a>
