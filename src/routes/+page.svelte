<script lang="ts">
	import MainPageProject from '$lib/components/MainPageProject.svelte';
	import MainPageProjectSection from '$lib/components/MainPageProjectSection.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<svelte:head>
	<title>Portfolio • Thomas Jowsey</title>
</svelte:head>

<Page title="Portfolio">
	<MainPageProject
		title="Loose Juice"
		subtitle="an online physics-based platformer"
		year={2026}
		itchLink="https://fotb.itch.io/loose-juice"
		githubLink="https://github.com/jowsey/DES315_FinchOutsideTheBox"
		images={[
			'/images/loosejuice-menu.webp',
			'/images/loosejuice-pause.webp',
			'/images/loosejuice-caravan.webp',
			'/images/loosejuice-cinematic.webp'
		]}
		skills={['unity', 'c#', 'networking', 'tooling', 'audio', 'ui/ux']}
	>
		<p>
			Developed in Unity 6 with team
			<span class="whitespace-nowrap">Finch Outside the Box</span> at Abertay University.<br />
			Programmer in a team of 7 from concept to release.
		</p>

		<!-- todo update with link to official article or post or something -->
		<a
			href="https://linkedin.com/in/jowsey"
			target="_blank"
			class="text-xl underline decoration-zinc-700 decoration-wavy hover:decoration-fuchsia-300"
		>
			<span class="font-semibold">🎉 New!</span> Loose Juice wins DARE Academy 2026 & Audience Choice awards!
		</a>

		<MainPageProjectSection
			title="Native voice chat pipeline"
			subtitle="Designed and implemented our custom voice chat solution"
		>
			<ul class="list-disc">
				<li>Heavily optimized and profiled hot path with zero allocations & minimal GC pressure</li>
				<li>Built managed interop around SpeexDSP and RNNoise for resampling and noise suppression</li>
				<li>Integrated Opus codec for efficient network transfer</li>
				<li>Custom thread-safe ring buffer implementation for sample/frame processing</li>
				<li>Adaptive jitter buffer and packet loss concealment to reduce audio artifacts</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Networked gameplay systems" subtitle="Owned a number of core features and systems">
			<ul class="list-disc">
				<li>Synchronized co-op vehicle physics, obstacle interactions, system states</li>
				<li>Seamless join-in-progress support with state machines</li>
				<li>Server-authoritative logic checks & events to prevent cheating</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Third-party vendor SDK integrations">
			<p class="font-bold">Epic Online Services SDK</p>
			<ul class="list-disc">
				<li>Seamless peer-to-peer networking over NAT relay via EOS P2P Interface</li>
				<li>Lobby browsing, joining, and creation flow via EOS Sessions Interface</li>
			</ul>

			<br />
			<p class="font-bold">Discord Game SDK</p>
			<ul class="list-disc">
				<li>Branded rich presence tracking player progress, game state, and player count</li>
			</ul>

			<br />
			<p class="font-bold">Audiokinetic Wwise</p>
			<ul class="list-disc">
				<li>Integrated Wwise audio middleware with game systems for dynamic effects, music</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection
			title="Internal asset pipeline & workflow tooling"
			subtitle="Built Unity editor tools to streamline content creation and iteration"
		>
			<ul class="list-disc">
				<li>Automated integration of new character skins; generating Unity assets, UI icons, and texture metadata</li>
				<li>Developed local network testing mode to reduce friction of developing multiplayer content</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection
			title="UI/UX, user flows, and design language"
			subtitle="Designed and implemented our UI/UX, design language, and user flows, working closely with artists"
		>
			<ul class="list-disc">
				<li>Designed UI flows, including main menu, lobby browser, pause menu, settings menu, and in-game HUD</li>
				<li>Implemented UI motion design in C# with modifiable Unity components</li>
				<li>Spearheaded our visual design language and brand alongside art team</li>
			</ul>
		</MainPageProjectSection>

		<p>
			Beyond my core responsibilities, I also led our brand voice, messaging, and release management, designing release
			graphics, and writing release notes.
		</p>

		<p>Our team used JIRA and Confluence extensively for project tracking, and practiced agile methodologies.</p>
	</MainPageProject>

	<MainPageProject
		title="BLUESHIFT: Command"
		subtitle="a space combat game with a custom engine for PlayStation 5"
		year={2025}
		images={['/images/blueshift-menu.webp', '/images/blueshift-gameplay.webp', '/images/blueshift-options.webp']}
		skills={['ps5', 'c++', 'networking', 'tooling', 'ui/ux', 'ai']}
	>
		<p>
			Developed in an in-house engine with team <span class="whitespace-nowrap">Overscope Inc.</span> at Abertay
			University. <br />
			Programmer in a team of 4 from concept to completion.
		</p>
		<p class="text-sm text-zinc-300 italic">
			This project's codebase is heavily integrated with the PlayStation 5 SDK, and cannot be shared.
		</p>

		<MainPageProjectSection
			title="Project features"
			subtitle="Worked in a performance-focused C++ codebase encompassing:"
		>
			<ul class="list-disc">
				<li>Data-oriented ECS architecture</li>
				<li>Online multiplayer with rollback netcode</li>
				<li>Multi-threaded physics integration with Jolt</li>
				<li>Custom render pipeline with post-processing and lighting</li>
				<li>Cross-platform OS abstraction layer for Windows and PS5</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection
			title="Performance and optimization"
			subtitle="Continued effort to ensure stable frame times on PS5 architecture"
		>
			<ul class="list-disc">
				<li>Resolved performance bottlenecks using PS5 profiling tools to maintain stable 60fps</li>
				<li>Empirically tweaked PS5 threading and memory configuration</li>
				<li>Cut ~100ms of overhead from repeated asset loads by caching filesystem methods</li>
				<li>
					Increased max stable entity count from ~150 to thousands by refactoring our broadphase layers and integrating
					multi-threading into the engine loop
				</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Gameplay, AI, and physics" subtitle="Implemented core gameplay features and systems">
			<ul class="list-disc">
				<li>Procedural map generation and game initialization</li>
				<li>Core player movement and interaction systems</li>
				<li>AI state machine with pathfinding, collision avoidance, and task queue</li>
				<li>Virtual camera system for seamless view mode transitions</li>
				<li>Extended physics system with transform interpolation</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="UI/UX">
			<ul class="list-disc">
				<li>Built custom node graph and branded design system on top of ImGui</li>
				<li>Built callback-based PS5 IME wrapper for text input</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Build system">
			<ul class="list-disc">
				<li>Simplified our build processes to resolve flaky cross-platform builds</li>
				<li>
					Cut PS5 iteration times from several minutes to seconds by refactoring asset conversion to avoid unnecessary
					work
				</li>
			</ul>
		</MainPageProjectSection>
	</MainPageProject>

	<MainPageProject
		title="Overwatch 2 Data Tracker"
		subtitle="a web app for tracking historical Overwatch 2 game data"
		year={2025}
		link="https://ow2.tom.cafe"
		githubLink="https://github.com/jowsey/ow2-data-frontend"
		images={['/images/ow2-listing.webp', '/images/ow2-chart.webp']}
		skills={['tooling', 'web', 'postgresql', 'typescript', 'node.js', 'svelte', 'ui/ux']}
	>
		<p>
			A data visualization app providing players with the tools to analyze and compare data direct from Blizzard.
			Maintained throughout Overwatch 2 Season 18, building a searchable historical dataset of millions of rows.
		</p>

		<MainPageProjectSection title="Backend data collection">
			<ul class="list-disc">
				<li>
					Bun <span class="text-xs">(like Node.js)</span> service running a cron job to periodically process snapshots of
					Blizzard's realtime API
				</li>
				<li>Runs as a systemd service on a Linux machine to minimize downtime</li>
				<li>Saves to a PostgreSQL database running locally via Docker</li>
				<li>Both app and backend interface with database using Drizzle ORM</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Frontend web-app">
			<ul class="list-disc">
				<li>Responsive full-stack SvelteKit app</li>
				<li>Custom filterable charts using Chart.js</li>
				<li>REST API with filters for data exploration</li>
				<li>Reactive filtering and search, no page reloads</li>
			</ul>
		</MainPageProjectSection>
	</MainPageProject>

	<MainPageProject
		title="College Projects"
		subtitle="a collection of solo game projects built in Unity"
		year={[2021, 2023]}
		itchLink="https://itch.io/c/3389461/college-projects"
		images={[
			'/images/freeroam-gameplay.webp',
			'/images/revolt-gameplay.webp',
			'/images/endovelicus-menu.webp',
			'/images/endovelicus-gameplay.webp'
		]}
		skills={['unity', 'c#', 'networking', 'ui/ux', 'ai']}
	>
		<p>From 2021 to 2023, I built several solo game projects in Unity at Wakefield College.</p>

		<MainPageProjectSection title="freeroam." subtitle="an online multiplayer sandbox game">
			<ul class="list-disc">
				<li>Peer-to-peer networking, lobby browser system</li>
				<li>
					Networked gameplay systems including PvP combat, vehicle physics, and customizable characters, weapons, and
					vehicles
				</li>
				<li>Automated tools for adding new vehicles, weapons, attachments, and skins</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Revolt" subtitle="a magical horde combat game">
			<ul class="list-disc">
				<li>Reduced spawning/destruction overhead with object pooling system for projectiles and entities</li>
				<li>First-class cross-platform gamepad support</li>
				<li>Data-driven spell and ability system</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Endovelicus" subtitle="a 2D strategy roguelike game">
			<ul class="list-disc">
				<li>Hybrid procedural noise & algorithmic map generation</li>
				<li>Extensible ability system built on C# reflection</li>
				<li>Async tasks for unit behaviour handling</li>
			</ul>
		</MainPageProjectSection>
	</MainPageProject>
</Page>
