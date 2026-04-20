<script lang="ts">
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	type ExternalLinkType = 'Itch' | 'GitHub';

	type Skill = 'ai' | 'audio' | 'c++' | 'c#' | 'ps5' | 'networking' | 'tooling' | 'ui/ux' | 'unity' | 'web';

	const skillMeta: Record<Skill, { name: string; icon?: string }> = {
		ps5: { name: 'PS5', icon: 'playstation' },
		unity: { name: 'Unity', icon: 'unity' },
		'c++': { name: 'C++' },
		'c#': { name: 'C#' },
		networking: { name: 'Networking', icon: 'network' },
		tooling: { name: 'Tools', icon: 'nut' },
		audio: { name: 'Audio/DSP', icon: 'waveform' },
		web: { name: 'Web', icon: 'browser' },
		'ui/ux': { name: 'UI/UX', icon: 'layout' },
		ai: { name: 'AI', icon: 'ghost' }
	} as const;

	interface Props {
		title: string;
		subtitle: string;
		year?: number | [number, number];
		images?: string[];
		itchLink?: string;
		githubLink?: string;
		skills?: Skill[];
		children?: Snippet;
	}

	let { title, subtitle, year, images, itchLink, githubLink, skills, children }: Props = $props();

	const collapsedHeight = 704;
	const transitionPxPerSecond = 750;

	let contentHeight = $state(Infinity);
	let expanded = $state(false);

	const transitionDuration = $derived((contentHeight - collapsedHeight) / transitionPxPerSecond);
	const needsExpandButton = $derived(contentHeight > collapsedHeight);
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

<div
	style="max-height: {expanded ? contentHeight : collapsedHeight}px; transition-duration: {transitionDuration}s;"
	class="@container relative overflow-hidden transition-[max-height]"
>
	{#if needsExpandButton}
		<div
			class={[
				'pointer-events-none absolute bottom-0 left-0 z-10 flex h-40 w-full items-end justify-center from-zinc-950 from-5% to-transparent select-none',
				{ 'bg-linear-to-t': !expanded }
			]}
		>
			<button
				class="pointer-events-auto w-full cursor-pointer mask-t-from-60% pt-4 pb-2 font-semibold backdrop-blur-md hover:bg-zinc-50/2"
				onclick={() => (expanded = !expanded)}
			>
				{expanded ? '▴ show less' : '▾ show more'}
			</button>
		</div>
	{/if}

	<div
		bind:clientHeight={contentHeight}
		class={[
			'flex w-full gap-8 p-4 text-sm leading-snug text-pretty sm:p-8 lg:text-base @max-5xl:flex-col',
			{ 'pb-16!': needsExpandButton && browser }
		]}
	>
		{#if images}
			<div class="flex shrink-0 gap-4 overflow-auto @5xl:flex-col">
				{#each images as img (img)}
					<a href={img} target="_blank" class="shrink-0">
						<img
							src={img}
							alt={title}
							class="rounded-lg object-cover hover:brightness-115 @max-5xl:h-31.5 @5xl:w-56 @5xl:min-w-56"
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

			{#if skills}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each skills as skill (skill)}
						{@const meta = skillMeta[skill]}
						<div class="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1 text-sm font-bold">
							{#if meta.icon}
								<img src="/icons/{meta.icon}.png" alt={meta.name} class="inline size-4 invert" />
							{/if}
							{meta.name}
						</div>
					{/each}
				</div>
			{/if}

			<div class="mt-4 flex max-w-[80ch] flex-col gap-4">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
