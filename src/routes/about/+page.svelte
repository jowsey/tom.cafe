<script lang="ts">
	import InlineLink from '$lib/components/InlineLink.svelte';
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
			Hey! I'm Tom, a {@render topic('games systems programmer')} and {@render topic('full-stack web developer')} based in
			Dundee, UK.
		</p>
		<br />
		<p>
			I'm currently in my final year of study at Abertay University. I will graduate {@render topic('Summer 2027')}.
			<br />I'm {@render topic('actively seeking graduate roles')}—feel free to
			<InlineLink href="https://linkedin.com/in/jowsey" label="get in touch" />!
		</p>
		<br />
		<p>
			I frequently work on developer tooling, infrastructure, profiling and optimisation, rendering and graphics, and
			engines/systems as a whole. I have experience with modern console platforms including the PlayStation 5, and
			graphics APIs including DirectX 11 and Vulkan.
		</p>
		<br />
		<p>
			I recently participated in {@render topic('DARE Academy 2026')} with team Finch&nbsp;Outside&nbsp;the&nbsp;Box (Loose&nbsp;Juice),
			winning the competition as well as the Audience Choice award!
		</p>
		<br />
		<p>
			I also take part in game jams! Since 2023, I've worked with teams on the PS2-inspired racer
			<InlineLink href="https://jowsey.itch.io/underglow" label="Underglow" />; the factory-builder
			<InlineLink href="https://enoshade.itch.io/goober-cloner" label="Goober Cloner" />; the incremental clicker
			<InlineLink href="https://jowsey.itch.io/infectious" label="Infectious" />; the action spell-caster
			<InlineLink href="https://jowsey.itch.io/sincantation" label="Sincantation" />; the aquatic tower-defence
			<InlineLink href="https://kahoneki.itch.io/pondemonium" label="Pondemonium" />, and the whimsical multiplayer
			racer
			<InlineLink href="https://jowsey.itch.io/bathtime-blitz" label="Bathtime Blitz" />!
		</p>
		<br />
		<StyledLink href="/" label="View my portfolio ↗" />
	</div>
</Page>
