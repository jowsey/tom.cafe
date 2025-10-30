<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>tom's cafe</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="mx-auto flex min-h-dvh max-w-5xl flex-col border-x border-transparent bg-inherit px-4 py-4 transition-colors duration-300 lg:border-neutral-300"
>
	<p class="px-2 text-3xl font-bold">✦ THOMAS JOWSEY</p>
	<div class="mt-2 mb-8 h-4 w-full bg-[url('/svg/diagonal-stripes.svg')] bg-contain bg-repeat"></div>

	<div class="flex flex-1">
		{@render children?.()}
	</div>
</div>
