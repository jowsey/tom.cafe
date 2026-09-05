<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import StyledLink from '$lib/components/StyledLink.svelte';
</script>

<svelte:head>
	<title>About me • Thomas Jowsey</title>
</svelte:head>

{#snippet topic(text: string)}
	<i class="text-fuchsia-200">{text}</i>
{/snippet}

<Page title="About me">
	<div class="max-w-[80ch] px-4 text-pretty sm:px-8">
		<p>
			Hey! I'm Tom
			<span
				class="ml-0.5 rounded-md bg-zinc-800 px-2 py-1 align-middle text-xs outline -outline-offset-1 outline-zinc-700"
			>
				he/him
			</span>
			, a {@render topic('games systems programmer')} and {@render topic('full-stack web developer')} based in Dundee, UK.
		</p>
		<br />
		<p>
			I'm entering my final year of study at Abertay University. I will graduate {@render topic('Summer 2027')}. <br />
			I'm {@render topic('actively seeking graduate roles')}—feel free to
			<a
				href="https://linkedin.com/in/jowsey"
				target="_blank"
				class="underline decoration-zinc-500 decoration-wavy hover:italic hover:decoration-fuchsia-300"
			>
				get in touch
			</a>!
		</p>
		<br />
		<p>
			I frequently work on developer tooling, infrastructure, profiling and optimisation, rendering and graphics, and
			engines/systems as a whole. I have experience with modern console platforms including the PlayStation 5 (AGC). I
			am currently working on a cross-platform Vulkan rendering engine in C++.
		</p>
		<br />
		<p>
			I recently participated in {@render topic('DARE Academy 2026')} with team Finch&nbsp;Outside&nbsp;the&nbsp;Box (Loose&nbsp;Juice),
			winning the competition as well as the Audience Choice award!
		</p>
		<br />
		<StyledLink href="/" label="View my portfolio ↗" />
	</div>
</Page>
