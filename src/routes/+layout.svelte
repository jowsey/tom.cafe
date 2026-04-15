<script lang="ts">
	import '../app.css';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Link from '$lib/components/Link.svelte';

	let { children } = $props();
</script>

<div
	class="mx-auto flex min-h-dvh max-w-5xl flex-col border-x border-transparent bg-inherit px-4 transition-colors duration-300 lg:border-neutral-700"
>
	<a
		href={resolve('/')}
		class={[
			'my-6 w-full px-2 text-2xl font-bold transition-all md:my-8 md:text-4xl',
			page.url.pathname !== '/' && 'group'
		]}
	>
		✦
		<span class="ml-2 decoration-fuchsia-300 decoration-wavy group-hover:underline">
			<span class="group-hover:hidden">THOMAS JOWSEY</span>
			<span class="hidden whitespace-pre group-hover:inline">RETURN HOME &nbsp;&rarr;</span>
		</span>
	</a>
	<div class="mb-8 h-4 w-full bg-[url('/svg/diagonal-stripes.svg')] bg-contain bg-repeat"></div>

	<div class="flex flex-1 flex-col">
		{@render children?.()}

		<hr class="mt-8 mb-4 border-neutral-500" />
		<p class="text-sm">
			Source available at
			<a
				href="https://github.com/jowsey/tom.cafe"
				target="_blank"
				class="underline decoration-dotted hover:italic hover:decoration-fuchsia-300 hover:decoration-wavy"
			>
				https://github.com/jowsey/tom.cafe
			</a>
		</p>
		<p class="text-xs text-neutral-500">Engineered by The Jowsey Company of Dundee (me, in my living room)</p>

		<div class="my-3 flex flex-wrap gap-x-2">
			<a href="https://kahoneki.com" target="_blank">
				<img
					src="/88x31/kaho88x31.png"
					alt="Kahoneki"
					style="image-rendering: pixelated;"
					class="h-[31px] w-auto shadow-[#fdeef5] transition-all hover:shadow-sm"
				/>
			</a>
		</div>
	</div>
</div>
