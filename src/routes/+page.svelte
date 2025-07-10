<script lang="ts">
	import { onMount } from 'svelte';
	import QuoteBox from '$lib/components/QuoteBox.svelte';
	import Container from '$lib/components/Container.svelte';
	import PrettyButton from '$lib/components/PrettyButton.svelte';

	let stripesColourScheme = $state(0);
	const colors = [
		['bg-orange-300', 'bg-orange-400', 'bg-rose-400'],
		['bg-lime-400', 'bg-green-500', 'bg-emerald-600'],
		['bg-pink-400', 'bg-fuchsia-500', 'bg-purple-500']
	];

	let portfolioTitle: HTMLParagraphElement;
	let portfolioVisible = $state(false);

	onMount(() => {
		const checkPortfolioVisibility = () => {
			portfolioVisible = portfolioTitle.offsetTop < window.innerHeight;
		};

		checkPortfolioVisibility();
		window.addEventListener('resize', checkPortfolioVisibility);
		return () => {
			window.removeEventListener('resize', checkPortfolioVisibility);
		};
	});
</script>

<Container>
	<div class="my-8">
		<p class="cursor-crosshair text-4xl font-medium md:text-7xl">thomas jowsey</p>
		<p>generalist games & web engineer</p>
	</div>
</Container>

<button
	aria-label="change stripes colour scheme"
	onclick={() => (stripesColourScheme = (stripesColourScheme + 1) % colors.length)}
	class="sticky top-0 mb-8 flex h-6 w-full cursor-pointer flex-col *:flex-1 *:transition-colors"
>
	<span class={colors[stripesColourScheme][0]}></span>
	<span class={colors[stripesColourScheme][1]}></span>
	<span class={colors[stripesColourScheme][2]}></span>
</button>

<Container>
	<PrettyButton
		class={{ hidden: portfolioVisible }}
		onclick={() => {
			window.scrollTo({
				top: portfolioTitle.offsetTop - 64,
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
</Container>

<div class="mb-8 border border-neutral-400 bg-neutral-300 py-4 shadow-xs">
	<Container>
		<p class="text-lg font-bold">Get in touch!</p>
		<!-- todo: would be nice to have these be components, but tailwind might purge classes since they'd be dynamically generated -->
		<div class="flex flex-wrap justify-stretch gap-x-6 *:underline *:decoration-dotted *:transition-colors">
			<a class="text-lg decoration-green-900 hover:text-green-900" target="_blank" href="mailto:tomjowsey@gmail.com">
				tomjowsey@gmail.com
			</a>
			<a class="decoration-blue-900 hover:text-blue-900" target="_blank" href="https://linkedin.com/in/jowsey">
				linkedin
			</a>
			<a class="decoration-neutral-800 hover:text-neutral-800" target="_blank" href="https://github.com/jowsey">
				github (code)
			</a>
			<a class="decoration-red-900 hover:text-red-900" target="_blank" href="https://compiled.itch.io">
				itch (games)
			</a>
			<a class="decoration-sky-900 hover:text-sky-900" target="_blank" href="https://bsky.app/profile/tom.cafe">
				bluesky (social)
			</a>
		</div>
	</Container>
</div>

<Container>
	<p bind:this={portfolioTitle} class="text-4xl font-semibold">Portfolio</p>

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

	<div id="badges" class="my-4 flex justify-center gap-x-4 **:h-[35px]">
		<img src="/88x31/thomasjowsey.png" alt="thomas jowsey" />
		<img src="https://cyber.dabamos.de/88x31/bestviewed16bit.gif" alt="best viewed 1024x768 16bit color" />
		<img src="https://cyber.dabamos.de/88x31/anybrowser6.gif" alt="best viewed in any browser" />
		<a href="https://kahoneki.com" target="_blank" class="shadow-red-300 transition-shadow duration-75 hover:shadow-sm">
			<img src="/88x31/kahoneki.png" alt="kahoneki" />
		</a>
	</div>

	<div class="mb-4 flex justify-center">
		<p>
			Source available on
			<a class="underline" href="https://github.com/jowsey/tom.cafe">GitHub</a>
		</p>
	</div>
</Container>

<style lang="postcss">
	#badges img {
		image-rendering: pixelated;
	}
</style>
