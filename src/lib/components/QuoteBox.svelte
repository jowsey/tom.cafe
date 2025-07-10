<script lang="ts">
	let { children, class: className = null } = $props();
</script>

<p class={['inline-block border-l-4 border-l-neutral-300 pl-4 text-lg text-pretty', className]}>
	{@render children?.()}
</p>
