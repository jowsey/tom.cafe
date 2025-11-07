<script lang="ts">
	let { children } = $props();
</script>

<p class="text-xl font-bold">Post title</p>
<div class="flex flex-wrap gap-x-2 text-sm">
	<p>{new Date().toLocaleDateString()}</p>
</div>
{@render children?.()}
