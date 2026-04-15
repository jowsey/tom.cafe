<script lang="ts">
	import MainPageProject from '$lib/components/MainPageProject.svelte';
	import MainPageProjectSection from '$lib/components/MainPageProjectSection.svelte';
</script>

<div class="flex w-full flex-col divide-y divide-zinc-700">
	<MainPageProject
		title="Loose Juice"
		subtitle="an online physics-based platformer"
		year={2026}
		href="https://fotb.itch.io/loose-juice"
		images={[
			'https://img.itch.zone/aW1hZ2UvNDI5OTA1NC8yNjE1NDA0MS5qcGc=/original/JursPs.jpg',
			'https://img.itch.zone/aW1hZ2UvNDI5OTA1NC8yNjE1NDA1MS5qcGc=/original/J7Jvso.jpg'
		]}
	>
		<div class="flex max-w-[80ch] flex-col gap-6">
			<p class="text-sm">
				Developed in Unity 6.3 with team
				<span class="whitespace-nowrap">Finch Outside the Box 🐦</span> at Abertay University.<br />
				Core contributor (programmer/generalist) in a team of 7 from concept to release.
			</p>

			<MainPageProjectSection
				title="Native voice chat pipeline"
				subtitle="Designed and implemented our custom voice chat solution"
			>
				<ul class="list-disc">
					<li>Heavily-profiled hot path with zero allocations & minimal GC pressure</li>
					<li>Built managed interop around SpeexDSP and RNNoise for resampling & noise suppression</li>
					<li>Integrated Opus codec for efficient network transfer</li>
					<li>Custom thread-safe ring buffer implementation for sample/frame processing</li>
					<li>Various quality features including jitter buffer and packet loss concealment</li>
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
				title="Various vendor API integrations"
				subtitle="Integrated a number of third-party APIs for features and services"
			>
				<p class="font-bold">Epic Online Services SDK</p>
				<ul class="list-disc">
					<li>Seamless peer-to-peer networking over NAT relay via EOS P2P Interface</li>
					<li>Lobby browsing, joining, and creation flow via EOS Sessions Interface</li>
				</ul>

				<br />
				<p class="font-bold">Discord Game SDK</p>
				<ul class="list-disc">
					<li>Integrated Discord Game SDK for branded rich presence features tracking game progress & player count</li>
				</ul>
			</MainPageProjectSection>

			<MainPageProjectSection title="Built internal editor tooling to support content workflows">
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection title="Implemented UI, focusing on UX and design language">
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection title="Led public-facing presentation — social presence, release notes and graphics">
				<p>placeholder content</p>
			</MainPageProjectSection>
		</div>
	</MainPageProject>

	<MainPageProject
		title="College Projects"
		subtitle="various college projects"
		year={2023}
		href="https://itch.io/c/3389461/college-projects"
	>
		<p>made these</p>
		<p>innit</p>
	</MainPageProject>
</div>
