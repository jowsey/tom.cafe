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

<a href={resolve(href)} class="group">
	<div
		class="corner-smoothed flex gap-x-2 rounded-3xl border border-neutral-700 bg-neutral-900 p-2 transition-all group-hover:bg-neutral-800 max-sm:flex-col-reverse sm:p-4"
	>
		<div class="flex flex-1 flex-col">
			<p class="font-bold text-pretty">{title}</p>
			{#if subtitle}
				<p class="text-sm font-light text-pretty">{subtitle}</p>
			{/if}
			<!-- gives minimum margin to date -->
			<div class="mt-2"></div>
			<p class="mt-auto text-sm opacity-50">{date.toLocaleDateString()}</p>
		</div>

		{#if imgSrc}
			<div class="w-38 max-sm:mb-2 max-sm:w-full">
				<img src={imgSrc} alt={imgAlt} class="corner-smoothed ml-auto aspect-video rounded-xl object-cover" />
			</div>
		{/if}
	</div>
</a>
