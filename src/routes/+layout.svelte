<script lang="ts">
	import './layout.css';
	import StyledLink from '$lib/components/StyledLink.svelte';
	import { resolve } from '$app/paths';
	import SidebarBlock from '$lib/components/SidebarBlock.svelte';

	let { children } = $props();
</script>

<div class="flex h-dvh w-full max-sm:flex-col">
	<div
		class="flex shrink-0 flex-col divide-y divide-solid divide-zinc-700 border-zinc-700 transition-all max-sm:border-b sm:h-full sm:w-36 sm:border-r lg:w-72"
	>
		<a
			href={resolve('/')}
			class="p-4 text-xl font-bold text-cyan-50 transition-all hover:bg-zinc-50/2 hover:font-extrabold hover:text-fuchsia-100 active:bg-zinc-50/4 lg:p-6 lg:text-5xl"
		>
			THOMAS JOWSEY
		</a>

		<SidebarBlock>
			<div class="flex items-center gap-4 sm:max-lg:flex-col sm:max-lg:items-start">
				<img src="/favicon.webp" alt="it's me!" class="size-12 rounded-full" />
				<p class="text-sm text-pretty">Programmer & generalist based in Dundee, UK.</p>
			</div>
		</SidebarBlock>

		<SidebarBlock title="find me online">
			<ul class="flex-wrap max-sm:flex max-sm:gap-x-6 max-sm:gap-y-2">
				<li><StyledLink href="https://bsky.app/profile/tom.cafe" label="bluesky" /></li>
				<li><StyledLink href="https://linkedin.com/in/jowsey" label="linkedin" /></li>
				<li><StyledLink href="https://github.com/jowsey" label="github" /></li>
				<li><StyledLink href="https://jowsey.itch.io" label="itch" /></li>
				<li><StyledLink href="mailto:tomjowsey@gmail.com" label="mail" /></li>
			</ul>
		</SidebarBlock>
	</div>

	<div class="min-h-full max-w-7xl grow border-zinc-700 sm:overflow-auto sm:border-r">
		{@render children()}

		<div
			class="flex w-full flex-col items-center justify-center gap-y-2 border-t border-zinc-700 pt-16 pb-64 text-sm text-pretty text-zinc-500"
		>
			<p>that's all for now!</p>
			<p>🐈</p>
		</div>
	</div>
</div>
