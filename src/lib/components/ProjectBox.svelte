<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		imageSrc: string;
		imageAlt: string;
		href: string;
		linkText: string;
	}

	let { title, subtitle, imageSrc, imageAlt, href, linkText }: Props = $props();
</script>

<a
	class="corner-smoothed group w-full rounded-3xl bg-neutral-50 p-2 text-neutral-950 transition-all hover:scale-105"
	target={href.startsWith('http') ? '_blank' : '_self'}
	{href}
>
	<img src={imageSrc} alt={imageAlt} class="corner-smoothed w-full rounded-2xl object-contain" />

	<div class="p-1 pt-2">
		<p class="text-lg leading-tight font-bold tracking-tight uppercase">{title}</p>
		<p class="text-xs leading-tight tracking-tight text-pretty">{subtitle}</p>
		<p class="mt-2 text-sm font-bold">
			<span class="decoration-fuchsia-300 decoration-wavy group-hover:underline">{linkText}</span> →
		</p>
	</div>
</a>
