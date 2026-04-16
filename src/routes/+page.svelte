<script lang="ts">
	import MainPageProject from '$lib/components/MainPageProject.svelte';
	import MainPageProjectSection from '$lib/components/MainPageProjectSection.svelte';
</script>

<div class="flex w-full flex-col divide-y divide-zinc-700">
	<MainPageProject
		title="Loose Juice"
		subtitle="an online physics-based platformer"
		year={2026}
		itchLink="https://fotb.itch.io/loose-juice"
		githubLink="https://github.com/jowsey/DES315_FinchOutsideTheBox"
		images={[
			'https://img.itch.zone/aW1hZ2UvNDI5OTA1NC8yNjE1NDA0MS5qcGc=/original/JursPs.jpg',
			'https://img.itch.zone/aW1hZ2UvNDI5OTA1NC8yNjE1NDA1MS5qcGc=/original/J7Jvso.jpg'
		]}
	>
		<div class="flex max-w-[80ch] flex-col gap-4 text-pretty">
			<p>
				Developed in Unity 6 with team
				<span class="whitespace-nowrap">Finch Outside the Box 🐦</span> at Abertay University.<br />
				Core contributor (programmer/generalist) in a team of 7 from concept to release.
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

			<MainPageProjectSection
				title="Third-party vendor SDK integrations"
				subtitle="Integrated APIs for third-party features and services"
			>
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
					<li>Strong maintained focus on consistency and detail</li>
				</ul>
			</MainPageProjectSection>

			<MainPageProjectSection title="Release management" subtitle="Managed our release process and messaging">
				<ul class="list-disc">
					<li>Designed release graphics and wrote release notes</li>
					<li>Owned brand voice and messaging</li>
				</ul>
			</MainPageProjectSection>
		</div>
	</MainPageProject>

	<MainPageProject
		title="College Projects"
		subtitle="various college projects"
		year={2023}
		itchLink="https://itch.io/c/3389461/college-projects"
	>
		<p>made these</p>
		<p>innit</p>
	</MainPageProject>
</div>
