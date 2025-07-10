<script lang="ts">
	import { onMount } from 'svelte';
	import QuoteBox from '$lib/components/QuoteBox.svelte';
	import Container from '$lib/components/Container.svelte';
	import PrettyButton from '$lib/components/PrettyButton.svelte';
	import PortfolioPiece from '$lib/components/PortfolioPiece.svelte';
	import PortfolioDate from '$lib/components/PortfolioDate.svelte';
	import TechnologyPill from '$lib/components/TechnologyPill.svelte';

	let stripesColourScheme = $state(0);
	const colors = [
		['bg-orange-300', 'bg-orange-400', 'bg-rose-400'],
		['bg-lime-400', 'bg-green-500', 'bg-emerald-600'],
		['bg-pink-400', 'bg-fuchsia-500', 'bg-purple-500']
	];

	let portfolioTitle: HTMLParagraphElement;
	let portfolioVisible = $state(true);

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
	class="sticky top-0 mb-8 flex h-6 w-full cursor-pointer flex-col *:flex-1 *:transition-colors *:duration-300"
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
				top: portfolioTitle.offsetTop - 56,
				behavior: 'smooth'
			});
		}}
	>
		Skip to <span class="font-semibold text-blue-600">Portfolio</span> ⤵️
	</PrettyButton>

	<QuoteBox class="mb-8">
		👋 Hi, I'm Tom — a generalist programmer working with games and the web. <br />
		I enjoy building tools, systems, and experiences that are intuitive and delightful to interact with.
	</QuoteBox>

	<QuoteBox class="mb-8">
		I'm currently studying games tech at Abertay University in Dundee, Scotland. <br />
		I also release games under the pseudonym <i>compiledcat</i>.
	</QuoteBox>

	<p>I'm comfortable working with (non-exhaustive):</p>
	<div class="mt-4 mb-6 flex flex-wrap items-center gap-2">
		<TechnologyPill name="C++" iconPath="/icons/cplusplus.svg" colour="#00599C" theme="light" />
		<TechnologyPill name="C#" iconPath="/icons/dotnet.svg" colour="#512BD4" theme="light" />
		<TechnologyPill name="TypeScript" iconPath="/icons/typescript.svg" colour="#3178C6" theme="light" />
		<TechnologyPill name="Svelte" iconPath="/icons/svelte.svg" colour="#FF3E00" theme="light" />
		<TechnologyPill name="React" iconPath="/icons/react.svg" colour="#61DAFB" theme="dark" />
		<TechnologyPill name="Unity" iconPath="/icons/unity.svg" colour="#FFFFFF" theme="dark" />
		<TechnologyPill name="Linux" iconPath="/icons/linux.svg" colour="#FCC624" theme="dark" />
	</div>
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
	<p bind:this={portfolioTitle} class="mb-4 text-4xl font-semibold">Portfolio</p>

	<PortfolioDate>2025</PortfolioDate>
	<!-- todo bathtime blitz (january) -->

	<PortfolioDate>2024</PortfolioDate>
	<!-- todo pondemonium (september) -->
	<!-- todo sincantation (february) -->

	<!-- todo infectious (january) -->
	<PortfolioPiece
		title="Infectious"
		subtitle="A short incremental web-game about taking over the world with laughter."
		img="https://img.itch.zone/aW1nLzE0ODI3NTU5LnBuZw==/315x250%23c/%2FLQbw%2B.png"
		imgAlt="Pixel art of a green and yellow planet with bold yellow text reading &quot;Infectious&quot; on a gray checkered background."
		publicLink="https://compiled.itch.io/infectious"
	>
		Web game built in Unity.
	</PortfolioPiece>

	<PortfolioDate>2023</PortfolioDate>

	<!-- todo goober cloner (october) -->

	<PortfolioPiece
		title="Freeroam"
		subtitle="An open-world 64-player combat/racing sandbox."
		img="/portfolio/freeroam/cover.png"
		imgAlt="Low-poly render of a character wearing blue and pink clothes, standing next to a pink sports car in front of shipping containers. The &quot;freeroam&quot; wordmark can be seen interweaved with objects in the scene."
		publicLink="https://compiled.itch.io/freeroam"
		codeLink="https://github.com/jowsey/freeroam"
	>
		<p>Sole developer on a Unity project.</p>

		<p class="text-lg font-semibold">Highlights</p>
		<ul class="list-inside list-disc">
			<li>64-player networking using the industry-standard Epic Online Services (EOS) SDK</li>
			<li>Robust network sync with state machines</li>
			<li>Data-driven content pipeline with Addressables and Scriptable Objects</li>
			<li>Multi-platform gamepad support</li>
		</ul>
	</PortfolioPiece>

	<!-- todo revolt (february) -->

	<PortfolioDate>2022</PortfolioDate>

	<!-- todo underglow (june) -->

	<PortfolioPiece
		title="Endovelicus"
		subtitle="A procedurally-generated RTS game."
		img="/portfolio/endovelicus/cover.png"
		imgAlt="Pixel art of several top-down characters battling on a green field, below bold, medieval-style text reading &quot;Endovelicus Strategy RTS&quot;."
		publicLink="https://compiled.itch.io/endovelicus"
		codeLink="https://github.com/jowsey/endovelicus"
	>
		<p>Sole developer on a Unity project.</p>

		<p class="text-lg font-semibold">Highlights</p>
		<ul class="list-inside list-disc">
			<li>Procedural map generator combining noise & manual landmarks</li>
			<li>Data-driven backend with reflection & generics</li>
			<li>Integration with the Discord rich-presence SDK</li>
			<li>Context-aware, async/coroutine-driven units & player AI</li>
		</ul>
	</PortfolioPiece>
</Container>

<Container>
	<div id="badges" class="my-4 flex justify-center gap-x-2.5 **:h-[35px]">
		<img src="/88x31/thomasjowsey.png" alt="thomas jowsey 88x31 badge" />
		<img src="https://cyber.dabamos.de/88x31/bestviewed16bit.gif" alt="best viewed 1024x768 16bit color 88x31 badge" />
		<img src="https://cyber.dabamos.de/88x31/anybrowser6.gif" alt="best viewed in any browser 88x31 badge" />
		<a href="https://kahoneki.com" target="_blank" class="shadow-red-300 transition-shadow duration-75 hover:shadow-sm">
			<img src="/88x31/kahoneki.png" alt="kahoneki 88x31 badge" />
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
