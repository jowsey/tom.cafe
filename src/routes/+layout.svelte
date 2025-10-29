<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-dvh w-full justify-center">
	<div class="w-36 border-x border-brand-dark/10 bg-brand-dark/5"></div>
	<div class="flex max-w-5xl flex-col">
		{@render children?.()}
	</div>
	<div class="w-36 border-x border-brand-dark/10 bg-brand-dark/5"></div>
</div>
