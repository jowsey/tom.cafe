<script lang="ts">
	import type { Snippet } from 'svelte';

	type ExternalLinkType = 'Itch' | 'GitHub';

	interface Props {
		title: string;
		subtitle: string;
		year?: number | [number, number];
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
			<img src="/icons/itchdotio.png" alt="Itch.io" class="inline size-5" />
			View on itch.io
		{:else if type === 'GitHub'}
			<img src="/icons/github.png" alt="GitHub" class="inline size-5" />
			View source
		{/if}
	</a>
{/snippet}

<div class="@container">
	<div class="flex w-full gap-8 p-4 text-sm leading-snug text-pretty sm:p-8 sm:text-base @max-5xl:flex-col">
		{#if images}
			<div class="flex shrink-0 gap-4 overflow-auto @5xl:flex-col">
				{#each images as img (img)}
					<a href={img} target="_blank">
						<img
							src={img}
							alt={title}
							class="shrink-0 rounded-lg object-cover hover:brightness-115 @max-5xl:h-31.5 @5xl:w-56 @5xl:min-w-56"
						/>
					</a>
				{/each}
			</div>
		{/if}

		<div>
			<p class="font-bold">
				<span class="text-3xl">{title}</span>
				{#if year}
					<span class="text-xl text-zinc-700">
						({typeof year === 'number' ? year : `${year[0]}–${year[1]}`})
					</span>
				{/if}
			</p>
			<p class="text-lg text-zinc-300">{subtitle}</p>

			{#if itchLink || githubLink}
				<div class="mt-4 flex flex-wrap gap-2">
					{#if itchLink}
						{@render externalButton(itchLink, 'Itch')}
					{/if}
					{#if githubLink}
						{@render externalButton(githubLink, 'GitHub')}
					{/if}
				</div>
			{/if}

			<div class="mt-4 flex max-w-[80ch] flex-col gap-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
