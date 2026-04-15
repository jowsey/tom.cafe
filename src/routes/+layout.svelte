<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import StyledLink from '$lib/components/StyledLink.svelte';
	import { resolve } from '$app/paths';
	import SidebarBlock from '$lib/components/SidebarBlock.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Thomas Jowsey</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-dvh w-dvw">
	<div
		class="flex h-full w-36 shrink-0 flex-col divide-y divide-solid divide-zinc-700 border-r border-zinc-700 transition-all lg:w-72"
	>
		<a
			href={resolve('/')}
			class="p-4 text-xl font-bold text-cyan-50 transition-all hover:bg-zinc-50/2 hover:font-extrabold hover:text-fuchsia-100 active:bg-zinc-50/4 lg:p-6 lg:text-5xl"
		>
			THOMAS<br />JOWSEY
		</a>

		<div class="flex gap-4 p-4 max-lg:flex-col lg:items-center">
			<img src="/me.png" alt="it's me!" class="size-12 rounded-full" />
			<p class="text-sm">Programmer & generalist based in Dundee, UK.</p>
		</div>

		<SidebarBlock title="find me online">
			<ul>
				<li><StyledLink href="https://github.com/jowsey" label="github" /></li>
				<li><StyledLink href="https://bsky.app/profile/tom.cafe" label="bluesky" /></li>
				<li><StyledLink href="https://linkedin.com/in/jowsey" label="linkedin" /></li>
				<li><StyledLink href="https://jowsey.itch.io" label="itch" /></li>
				<li><StyledLink href="mailto:tomjowsey@gmail.com" label="e-mail" /></li>
			</ul>
		</SidebarBlock>

		<SidebarBlock title="projects">
			<p>placeholder</p>
		</SidebarBlock>
	</div>

	<div class="min-h-full grow overflow-auto">
		{@render children()}
	</div>
</div>
