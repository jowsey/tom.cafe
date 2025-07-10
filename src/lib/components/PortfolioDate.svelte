<script lang="ts">
    let { children } = $props();
</script>

<p class="mt-4 font-serif text-xl font-semibold">{@render children?.()}</p>
<hr class="mt-1 mb-4 border-neutral-400">