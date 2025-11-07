<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import type { RouteId } from '$app/types';

	interface Props {
		title: string;
		subtitle?: string;
		imgSrc?: string;
		imgAlt?: string;
		date: Date;
		href: RouteId | Pathname;
	}

	let { title, subtitle, date, href, imgSrc, imgAlt }: Props = $props();
</script>

<a href={resolve(href)}>
	<div class="corner-smoothed flex gap-x-2 rounded-3xl border border-neutral-700 bg-neutral-900 p-4">
		<div>
			<p class="leading-tight font-bold text-pretty">{title}</p>
			{#if subtitle}
				<p class="mt-1 text-sm leading-tight font-light text-pretty">{subtitle}</p>
			{/if}
			<p class="mt-2 text-sm text-neutral-400">{date.toLocaleDateString()}</p>
		</div>

		{#if imgSrc}
			<img src={imgSrc} alt={imgAlt} class="ml-auto h-16 rounded-2xl object-cover" />
		{/if}
	</div>
</a>
