<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		title: string;
		subtitle?: string;
		date: Date;
		imgSrc?: string;
		imgAlt?: string;
		slug: string;
	}

	let { title, subtitle, date, imgSrc, imgAlt, slug }: Props = $props();
</script>

<a href={resolve('/blog/[slug]', { slug })} class="group">
	<div
		class="corner-smoothed flex gap-x-4 rounded-3xl border border-neutral-700 bg-neutral-900 p-2 transition-all group-hover:bg-neutral-800 max-sm:flex-col-reverse sm:p-4"
	>
		<div class="flex flex-1 flex-col max-sm:px-1">
			<p class="leading-tight font-bold text-pretty">{title}</p>
			{#if subtitle}
				<p class="mt-1 text-sm leading-tight font-light text-pretty">{subtitle}</p>
			{/if}
			<!-- gives minimum margin to date -->
			<div class="h-2"></div>
			<p class="mt-auto text-sm opacity-50">{date.toLocaleDateString()}</p>
		</div>

		{#if imgSrc}
			<div class="w-full max-sm:mb-2 sm:w-38">
				<img src={imgSrc} alt={imgAlt} class="corner-smoothed ml-auto aspect-video size-full rounded-xl object-cover" />
			</div>
		{/if}
	</div>
</a>
