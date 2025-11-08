<script lang="ts">
	let { children } = $props();
</script>

<p class="text-xl font-bold">Post title</p>
<div class="flex flex-wrap gap-x-2 text-sm opacity-50">
	<p>{new Date().toLocaleDateString()}</p>
</div>

<div class="mt-2">
	{@render children?.()}
</div>
