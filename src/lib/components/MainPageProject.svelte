<script lang="ts">
	import type { Snippet } from 'svelte';

	type ExternalLinkType = 'Itch' | 'GitHub';

	interface Props {
		title: string;
		subtitle: string;
		year?: number;
		images?: string[];
		itchLink?: string;
		githubLink?: string;
		children?: Snippet;
	}

	let { title, subtitle, year, images, itchLink, githubLink, children }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#snippet externalButton(href: string, type: ExternalLinkType)}
	<a
		{href}
		target="_blank"
		class="flex items-center gap-2 rounded-xl bg-cyan-50 px-3 py-2 text-sm font-semibold text-zinc-950 transition-all hover:bg-fuchsia-50"
	>
		{#if type === 'Itch'}
			<img src="/itchdotio.png" alt="Itch.io" class="inline size-6" />
			View project
		{:else if type === 'GitHub'}
			<img src="/github.png" alt="GitHub" class="inline size-6" />
			View source
		{/if}
	</a>
{/snippet}

<div class="@container">
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

			{#if itchLink || githubLink}
				<div class="mt-4 flex gap-2">
					{#if itchLink}
						{@render externalButton(itchLink, 'Itch')}
					{/if}
					{#if githubLink}
						{@render externalButton(githubLink, 'GitHub')}
					{/if}
				</div>
			{/if}

			<div class="mt-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
