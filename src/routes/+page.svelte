<script lang="ts">
	import BlogPostBox from '$lib/components/BlogPostBox.svelte';
	import ProjectBox from '$lib/components/ProjectBox.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Thomas Jowsey</title>
</svelte:head>

{#snippet socialListLink(title: string, href: string)}
	<li>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a {href} target="_blank" class="group">
			<span
				class="underline decoration-dotted group-hover:italic group-hover:underline group-hover:decoration-fuchsia-300 group-hover:decoration-wavy"
			>
				{title}
			</span>
			<span class="ml-1 text-xs opacity-50">{href}</span>
		</a>
	</li>
{/snippet}

<div class="flex flex-col gap-8 md:flex-row">
	<div class="flex-1 leading-relaxed text-pretty">
		<div class="flex gap-x-4">
			<img src="/tom.jpeg" alt="It's me" class="mr-0.5 inline aspect-square h-13 rounded-full" />
			<div class="mb-8 border-l-4 border-orange-300 pl-4">
				<p>Hey! I'm Tom, a programmer and designer based in Dundee, Scotland.</p>
				<p>I mainly work with games and the web—often at the same time!</p>
			</div>
		</div>

		<p class="mb-8">
			I'm currently in my third of four years studying at Abertay University—building fast, efficient gaming tech with
			C++. I'm interested in engines, developer tooling, infra, and more than anything, building cool stuff! :-)<span
				class="animate-blink text-fuchsia-300/75">▄</span
			>
		</p>

		<p>Find me elsewhere:</p>
		<ul class="mb-8 ml-4 list-disc">
			{@render socialListLink('Bluesky', 'https://bsky.app/profile/tom.cafe')}
			{@render socialListLink('GitHub', 'https://github.com/jowsey')}
			{@render socialListLink('LinkedIn', 'https://www.linkedin.com/in/jowsey/')}
			{@render socialListLink('Itch.io', 'https://compiled.itch.io/')}
			<li>
				Discord <span class="ml-1 text-xs opacity-50">@jowsey</span>
			</li>
		</ul>

		<hr class="my-8 border-neutral-500" />

		<p class="mb-4 font-light tracking-widest uppercase">Blog</p>
		<div class="flex flex-col gap-4">
			{#each data.posts as post (post.slug)}
				<BlogPostBox
					title={post.meta.title}
					subtitle={post.meta.subtitle}
					date={new Date(post.meta.date)}
					imgSrc={post.meta.imgSrc}
					imgAlt={post.meta.imgAlt}
					slug={post.slug}
				/>
			{/each}
		</div>
	</div>

	<div class="md:w-74">
		<p class="mb-4 font-light tracking-widest uppercase">Featured Stuff</p>

		<div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:flex-col">
			<ProjectBox
				title="Overwatch 2 Data Tracking"
				subtitle="or: web scraping to visualise what Blizzard won't"
				imgSrc="/blog/ow2-data-tracking/ow2-hero.webp"
				imgAlt="A graph detailing information about Overwatch 2 heroes."
				href="https://ow2.tom.cafe"
				linkText="Check it out"
			/>

			<ProjectBox
				title="httpunk"
				subtitle="a massively-multiplayer Cyberpunk web game"
				imgSrc="https://github.com/jowsey/httpunk/raw/main/.github/map-screenshot.webp"
				imgAlt="A screenshot showing flashy, holographic 3D buildings."
				href="https://github.com/jowsey/httpunk"
				linkText="View the source"
			/>

			<ProjectBox
				title="Limit Break Inc."
				subtitle="an incremental web-game about power"
				imgSrc="https://github.com/jowsey/limit-break-inc/raw/main/.github/screenshot.webp"
				imgAlt="A screenshot showing a sci-fi-themed purple game interface."
				href="https://github.com/jowsey/limit-break-inc"
				linkText="View the source"
			/>
		</div>
	</div>
</div>
