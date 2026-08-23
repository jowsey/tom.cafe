<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<PageTitle {title} />

<div class="flex w-full flex-col">
	{@render children()}
</div>
