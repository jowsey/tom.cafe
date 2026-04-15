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
		<div class="flex max-w-[80ch] flex-col gap-4">
			<p class="text-sm italic">
				Worked with a team of 7 as a programmer and generalist from concept to release.
			</p>

			<MainPageProjectSection title="Built networked gameplay features in Unity 6">
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection
				title="Implemented lobbies & peer-to-peer architecture via Epic Online Services SDK"
			>
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection
				title="Developed our low-latency, zero-allocation VoIP pipeline, building native interop around Speex and RNNoise, integrating resampling, noise suppression, and Opus codec"
			>
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection title="Built internal editor tooling to support content workflows">
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection title="Implemented UI, focusing on UX and design language">
				<p>placeholder content</p>
			</MainPageProjectSection>

			<MainPageProjectSection
				title="Led public-facing presentation — social presence, release notes and graphics"
			>
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
