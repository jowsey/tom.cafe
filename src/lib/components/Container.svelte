<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto w-full max-w-5xl px-4 sm:px-8">
	{@render children?.()}
</div>
