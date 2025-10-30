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

	<div class="flex flex-1 flex-col">
		{@render children?.()}

		<hr class="mt-8 mb-4 border-neutral-500" />
		<p class="text-sm">
			Source available at <a
				href="https://github.com/jowsey/tom.cafe"
				class="underline decoration-dotted hover:italic hover:decoration-fuchsia-300 hover:decoration-wavy"
			>
				https://github.com/jowsey/tom.cafe
			</a>
		</p>
		<p class="text-xs text-neutral-500">Engineered by The Jowsey Company of Dundee (me, in my living room)</p>
	</div>
</div>
