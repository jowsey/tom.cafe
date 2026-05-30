<script lang="ts">
	interface Props {
		title: string;
		class?: string;
	}

	let { title, class: className }: Props = $props();
</script>

<p
	class={[
		'px-4 pt-6 pb-4 text-3xl font-bold underline decoration-fuchsia-300 decoration-wavy sm:px-8 lg:pt-10',
		className
	]}
>
	{title}
</p>
