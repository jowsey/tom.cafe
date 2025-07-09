<script lang="ts">
	import QuoteBox from '$lib/components/QuoteBox.svelte';
	import PrettyButton from '$lib/components/PrettyButton.svelte';
	import Container from '$lib/components/Container.svelte';

	let portfolioTitle: HTMLParagraphElement;

	let stripesColourScheme = $state(0);
	const colors = [
		['bg-orange-300', 'bg-orange-400', 'bg-rose-400'],
		['bg-pink-500', 'bg-fuchsia-600', 'bg-purple-600']
	];
</script>

<div
	class="fixed bottom-4 left-4 flex flex-col rounded-md border border-neutral-400 bg-neutral-300 px-4 py-4 shadow-sm max-sm:hidden"
>
	<p class="text-lg font-bold">reach out</p>
	<a class="underline decoration-dotted" href="mailto:tomjowsey@gmail.com">tomjowsey@gmail.com</a>
</div>

<Container>
	<div class="my-8">
		<p class="cursor-crosshair text-4xl font-medium hover:font-semibold hover:italic md:text-7xl">thomas jowsey</p>
		<p>generalist games & web engineer</p>
	</div>
</Container>

<button
	aria-label="change stripes colour scheme"
	onclick={() => (stripesColourScheme = (stripesColourScheme + 1) % colors.length)}
	class="mb-8 flex h-6 w-full cursor-pointer flex-col *:flex-1 *:transition-colors"
>
	<span class={colors[stripesColourScheme][0]}></span>
	<span class={colors[stripesColourScheme][1]}></span>
	<span class={colors[stripesColourScheme][2]}></span>
</button>

<Container>
	<PrettyButton
		onclick={() => {
			window.scrollTo({
				top: portfolioTitle.offsetTop - 96,
				behavior: 'smooth'
			});
		}}
	>
		Skip to <span class="font-semibold text-blue-600">Portfolio</span> ⤵️
	</PrettyButton>

	<QuoteBox class="mb-8">
		👋 Hi, I'm Tom — a generalist programmer working with games and the web. <br />
		I'm a big fan of building tools, systems, and experiences that are intuitive and delightful to use.
	</QuoteBox>

	<QuoteBox class="mb-8">I'm currently studying games tech at Abertay University in Dundee, Scotland.</QuoteBox>

	<p bind:this={portfolioTitle} class="text-4xl font-medium">Portfolio</p>

	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
	<p>placeholder</p>
</Container>
