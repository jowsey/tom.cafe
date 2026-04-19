<script lang="ts">
	import './layout.css';
	import StyledLink from '$lib/components/StyledLink.svelte';
	import SidebarBlock from '$lib/components/SidebarBlock.svelte';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<div class="flex w-full max-sm:flex-col sm:justify-center">
	<div
		class="flex shrink-0 flex-col gap-2 overflow-y-auto p-2 transition-all sm:sticky sm:top-0 sm:h-dvh sm:w-46 lg:w-70 lg:p-4"
	>
		<a
			href={resolve('/')}
			class="rounded-xl p-4 text-2xl font-bold text-cyan-50 transition-all hover:bg-zinc-50/2 hover:font-extrabold hover:text-fuchsia-100 active:bg-zinc-50/4 lg:py-6 lg:text-5xl"
		>
			THOMAS JOWSEY
		</a>

		<SidebarBlock>
			<div class="flex items-center gap-x-4 gap-y-2 sm:max-lg:flex-col sm:max-lg:items-start">
				<img src="/favicon.webp" alt="it's me!" class="size-12 rounded-full" />
				<p class="text-sm text-pretty">Games programmer <br class="max-lg:hidden" /> based in Dundee, UK.</p>
			</div>
		</SidebarBlock>

		<SidebarBlock>
			<ul class="flex-wrap max-sm:flex max-sm:gap-x-2.5 max-sm:gap-y-2">
				<li><StyledLink href="https://bsky.app/profile/tom.cafe" label="Bluesky" /></li>
				<li><StyledLink href="https://linkedin.com/in/jowsey" label="LinkedIn" /></li>
				<li><StyledLink href="https://github.com/jowsey" label="GitHub" /></li>
				<li><StyledLink href="https://jowsey.itch.io" label="itch.io" /></li>
				<li><StyledLink href="mailto:tomjowsey@gmail.com" label="Email" /></li>
			</ul>
		</SidebarBlock>
	</div>

	<div class="min-h-full max-w-6xl grow">
		{@render children()}

		<div class="flex w-full flex-col items-center justify-center gap-y-2 pt-16 pb-64 text-sm text-pretty text-zinc-500">
			<p>that's all for now!</p>
			<p>🐈</p>

			<p class="mt-8 text-xs text-zinc-700">Thomas Jowsey {new Date().getFullYear()} - CC0</p>
		</div>
	</div>
</div>
