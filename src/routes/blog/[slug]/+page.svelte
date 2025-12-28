<script lang="ts">
	import { page } from '$app/state';
	import { DATE_OPTIONS } from '$lib/date.js';

	let { data } = $props();

	const slug = page.url.pathname.split('/').pop();
</script>

<svelte:head>
	<title>{data.meta.title} • Thomas Jowsey</title>
	<meta name="description" content={data.meta.subtitle} />

	<meta name="author" content="Thomas Jowsey" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.subtitle} />
	<meta property="og:image" content={data.meta.imgSrc} />
	<meta property="og:image:alt" content={data.meta.imgAlt} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Thomas Jowsey" />
	<meta property="og:url" content={`https://tom.cafe/blog/${page.params.slug}`} />

	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.subtitle} />
	<meta name="twitter:image" content={data.meta.imgSrc} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta property="article:published_time" content={data.meta.date} />
</svelte:head>

<p class="text-3xl font-bold text-pretty">{data.meta.title}</p>
<p class="text-pretty">{data.meta.subtitle}</p>
<p class="mt-1 mb-4 text-sm opacity-50">{new Date(data.meta.date).toLocaleDateString(undefined, DATE_OPTIONS)}</p>

{#if data.meta.imgSrc && data.meta.useImageAsBanner}
	<div class="my-4 w-full">
		<img
			src={data.meta.imgSrc}
			alt={data.meta.imgAlt}
			class="corner-smoothed aspect-5/2 w-full rounded-xl object-cover"
		/>
	</div>
{/if}

<div class="mx-auto prose prose-sm mt-4 prose-neutral prose-invert prose-p:text-neutral-50">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.content}
</div>

<p class="mt-8 flex w-full justify-center text-sm">
	This post's source can be found on&nbsp;
	<a
		href="https://github.com/jowsey/tom.cafe/blob/main/src/posts/{slug}.md"
		target="_blank"
		class="underline decoration-dotted hover:italic hover:decoration-fuchsia-300 hover:decoration-wavy"
	>
		GitHub
	</a>
	.
</p>
