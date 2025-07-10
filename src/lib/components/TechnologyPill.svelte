<script lang="ts">
	interface Props {
		name: string;
		iconPath?: string;
		colour: string;
		theme: 'dark' | 'light';
	}

	let { name, iconPath, colour, theme }: Props = $props();
</script>

<div
	style={`background: ${colour}`}
	class={[
		'flex items-center justify-center gap-x-2 rounded-full px-3.5 py-1',
		theme === 'dark' ? 'text-neutral-900' : 'text-neutral-50'
	]}
>
	{#if iconPath}
		<img src={iconPath} alt={name} class={['size-5', theme === 'light' && 'invert']} />
		<p class="font-semibold">{name}</p>
	{/if}
</div>
