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
<a {href} target="_blank" class={{ 'hover:bg-zinc-50/2': href }}>
	<div class="flex w-full gap-x-8 p-8">
		{#if images}
			<div class="flex flex-col gap-4">
				{#each images as img (img)}
					<div class="w-56">
						<img src={img} alt={title} class="h-full rounded-lg object-contain" />
					</div>
				{/each}
			</div>
		{/if}

		<div>
			<div class="flex items-end gap-2">
				<p class="text-3xl font-bold">
					{title}
				</p>
				{#if year}<p class="font-black text-zinc-700">{year}</p>{/if}
			</div>
			<p class="text-lg text-zinc-300">{subtitle}</p>

			<div class="mt-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</a>
