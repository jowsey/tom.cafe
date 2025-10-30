<script lang="ts">
	import ProjectBox from '$lib/components/ProjectBox.svelte';
</script>

{#snippet socialListLink(title: string, href: string)}
	<li>
		<a {href} target="_blank" class="group">
			<span
				class="underline decoration-fuchsia-300 decoration-dotted group-hover:italic group-hover:underline group-hover:decoration-wavy"
			>
				{title}
			</span>
			<span class="ml-1 text-xs opacity-50">{href}</span>
		</a>
	</li>
{/snippet}

<div class="flex-1 pr-4 text-pretty">
	<div class="mb-8 border-l-4 border-fuchsia-300 pl-4 leading-relaxed">
		<p>Hey! I'm Tom, a programmer and designer based in the UK.</p>
		<p>I mainly work with games and the web—often at the same time!</p>
	</div>

	<p>Find me elsewhere:</p>
	<ul class="ml-4 list-disc">
		{@render socialListLink('Bluesky', 'https://bsky.app/profile/tom.cafe')}
		{@render socialListLink('GitHub', 'https://github.com/jowsey')}
		{@render socialListLink('LinkedIn', 'https://www.linkedin.com/in/jowsey/')}
	</ul>

	<hr class="my-8 border-neutral-500" />
</div>

<div class="flex w-80 flex-col gap-4 pl-4">
	<p class="font-light tracking-widest uppercase">Projects</p>

	<ProjectBox
		title="Overwatch 2 Data Tracking"
		subtitle="or: web scraping to visualize what Blizzard won't"
		imageSrc="/blog/ow2-hero.png"
		imageAlt="A graph detailing information about Overwatch 2 heroes."
		href="https://ow2.tom.cafe"
		linkText="Check it out"
	/>

	<ProjectBox
		title="httpunk"
		subtitle="a massively-multiplayer Cyberpunk web game"
		imageSrc="https://github.com/jowsey/httpunk/raw/main/.github/map-screenshot.png"
		imageAlt="A screenshot showing flashy, holographic 3D buildings."
		href="https://github.com/jowsey/httpunk"
		linkText="View the source"
	/>

	<ProjectBox
		title="Limit Break Inc."
		subtitle="an incremental web-game about power"
		imageSrc="https://github.com/jowsey/limit-break-inc/raw/main/.github/screenshot.png"
		imageAlt="A screenshot showing a sci-fi-themed purple game interface."
		href="https://github.com/jowsey/limit-break-inc"
		linkText="View the source"
	/>
</div>
