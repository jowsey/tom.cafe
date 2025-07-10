<script lang="ts">
	import PortfolioPieceButton from '$lib/components/PortfolioPieceButton.svelte';

	interface Props {
		children?: import('svelte').Snippet;
		title: string;
		subtitle?: string;
		img: string;
		imgAlt: string;
		publicLink?: string;
		codeLink?: string;
	}

	let { children, title, subtitle, img, imgAlt, publicLink, codeLink }: Props = $props();
</script>

<div class="mb-4 flex items-start gap-4 max-md:flex-col">
	<img src={img} alt={imgAlt} class="aspect-[630/500] w-48 rounded-lg object-cover" />

	<div class="flex flex-col">
		<p class="text-2xl font-bold">{title}</p>
		{#if subtitle}
			<p class="font-serif">{subtitle}</p>
		{/if}

		{#if children}
			<div class="my-4">
				{@render children?.()}
			</div>
		{/if}

		<div class="flex gap-x-2">
			{#if publicLink}
				<PortfolioPieceButton href={publicLink}>View Project</PortfolioPieceButton>
			{/if}

			{#if codeLink}
				<PortfolioPieceButton href={codeLink}>
					<img src="/icons/github.svg" alt="GitHub logo" class="size-4" />
					View Code
				</PortfolioPieceButton>
			{/if}
		</div>
	</div>
</div>
