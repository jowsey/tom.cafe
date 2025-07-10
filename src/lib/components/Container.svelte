<script lang="ts">
	let { children, class: className = null } = $props();
</script>

<div class={['mx-auto w-full max-w-4xl px-4 sm:px-8', className]}>
	{@render children?.()}
</div>
