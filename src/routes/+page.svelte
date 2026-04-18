<script lang="ts">
	import MainPageProject from '$lib/components/MainPageProject.svelte';
	import MainPageProjectSection from '$lib/components/MainPageProjectSection.svelte';
</script>

<p class="px-4 pt-6 pb-2 text-3xl font-bold underline decoration-fuchsia-300 decoration-wavy sm:px-8">Projects</p>

<div class="flex w-full flex-col divide-y divide-zinc-700">
	<MainPageProject
		title="Loose Juice"
		subtitle="an online physics-based platformer"
		year={2026}
		itchLink="https://fotb.itch.io/loose-juice"
		githubLink="https://github.com/jowsey/DES315_FinchOutsideTheBox"
		images={[
			'/images/loosejuice-menu.png',
			'/images/loosejuice-pause.png',
			'/images/loosejuice-caravan.jpg',
			'/images/loosejuice-cinematic.png'
		]}
	>
		<p>
			Developed in Unity 6 with team
			<span class="whitespace-nowrap">Finch Outside the Box 🐦</span> at Abertay University.<br />
			Programmer and designer in a team of 7 from concept to release.
		</p>

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
				<li>Owned UI flows, including main menu, lobby browser, pause menu, settings menu, and in-game HUD</li>
				<li>Implemented UI motion design in C# with modifiable Unity components</li>
				<li>Spearheaded our visual design language and brand alongside art team</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Release management" subtitle="Managed our release process and messaging">
			<ul class="list-disc">
				<li>Designed release graphics and wrote release notes</li>
				<li>Owned brand voice and messaging</li>
			</ul>
		</MainPageProjectSection>
	</MainPageProject>

	<MainPageProject
		title="BLUESHIFT: Command"
		subtitle="a space combat game with a custom engine for Windows & PS5"
		year={2025}
		images={['/images/blueshift-menu.png', '/images/blueshift-gameplay.png', '/images/blueshift-options.png']}
	>
		<p>
			Developed in an in-house engine with team Overscope Inc. 🏢 at Abertay University. <br />
			Programmer in a team of 4 from concept to release.
		</p>
		<p class="text-sm text-zinc-300 italic">
			This project's codebase is heavily integrated with the PlayStation 5 SDK, and cannot be shared.
		</p>

		<MainPageProjectSection
			title="Project features"
			subtitle="Worked in a highly-technical, performance-focused cross-platform C++ codebase"
		>
			<ul class="list-disc">
				<li>Data-oriented ECS architecture</li>
				<li>Online multiplayer with rollback netcode</li>
				<li>Multi-threaded physics integration with Jolt</li>
				<li>Custom render pipeline with post-processing and lighting</li>
				<li>Cross-platform OS abstraction layer for Windows and PS5</li>
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
				<li>Owned all UI flows, visual design language</li>
				<li>Built custom node graph and branded design system on top of ImGui</li>
				<li>Built callback-based PS5 IME wrapper for text input</li>
				<li>Responsible for iterative polish and consistency passes</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection
			title="Performance and optimization"
			subtitle="Continued effort to ensure stable performance on PS5 architecture"
		>
			<ul class="list-disc">
				<li>Heavily profiled performance bottlenecks using PS5 profiling tools</li>
				<li>Empirically tweaked PS5 threading and memory configuration</li>
				<li>Reduced initial loading times by adding a caching layer to asset path verification</li>
				<li>
					Drastically improved physics performance by implementing custom broadphase layers and integrating
					multi-threading into the engine loop
				</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Build system">
			<ul class="list-disc">
				<li>Resolved flaky cross-platform builds</li>
				<li>Reduced PS5 iteration times by introducing a cache layer for processed assets</li>
			</ul>
		</MainPageProjectSection>
	</MainPageProject>

	<MainPageProject
		title="College Projects"
		subtitle="a collection of game projects built in Unity"
		year={[2021, 2023]}
		itchLink="https://itch.io/c/3389461/college-projects"
		images={[
			'https://img.itch.zone/aW1hZ2UvMTk3MDkwNC8xMjI1NTAxOC5wbmc=/original/Pmf5Y3.png',
			'https://img.itch.zone/aW1hZ2UvMTQ2MDkyNi84OTk4MDE3LnBuZw==/original/EIblxB.png',
			'https://img.itch.zone/aW1hZ2UvMTkwMzYxMi8xMTI4MjAzMC5wbmc=/original/%2FG1L6n.png'
		]}
	>
		<p>From 2021 to 2023, I built several solo game projects with Unity at Wakefield College.</p>

		<MainPageProjectSection title="freeroam." subtitle="an online multiplayer sandbox game">
			<ul class="list-disc">
				<li>Peer-to-peer networking</li>
				<li>Networked gameplay systems including PvP combat and vehicle physics</li>
				<li>Data-driven pipeline for vehicles, weapons, attachments, and skins</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Revolt" subtitle="an apocalyptic mage combat game">
			<ul class="list-disc">
				<li>Dynamic object pooling system for spells, projectiles, and entities</li>
				<li>First-class cross-platform gamepad support</li>
				<li>Data-driven spell and ability system</li>
			</ul>
		</MainPageProjectSection>

		<MainPageProjectSection title="Endovelicus" subtitle="a 2D strategy roguelike game">
			<ul class="list-disc">
				<li>Procedural hybrid noise & algorithm-based map generation</li>
				<li>Interweaved gameplay systems; upgrades, abilities, unit classes, buildings</li>
				<li>Progressive AI opponent that scales with player ability</li>
			</ul>
		</MainPageProjectSection>
	</MainPageProject>
</div>
