<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="w-full p-8">
	<p class="text-center text-5xl font-bold tracking-tighter">THOMAS JOWSEY</p>
</div>

<div class="sticky top-0 z-10 w-full bg-brand-light">
	<div class="flex h-12 w-full items-center divide-x divide-brand-dark/10 overflow-x-auto">
		<a class="px-4 decoration-wavy hover:underline" target="_blank" href={resolve('/')}>/</a>
		<a class="px-4 decoration-wavy hover:underline" target="_blank" href="https://github.com/jowsey">GitHub</a>
		<a class="px-4 decoration-wavy hover:underline" target="_blank" href="https://bsky.app/profile/tom.cafe">Bluesky</a>
	</div>
	<div class="size-full h-8 bg-[url('/svg/diagonal-stripes.svg')] bg-repeat"></div>
</div>

<div class="flex flex-1 gap-x-4">
	<div class="flex-1 p-4 text-justify">
		{#each { length: 50 } as _, i (i)}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nostrum nemo dolorem quidem quaerat facere
				aspernatur cum assumenda! Quaerat nesciunt perspiciatis ex repellat iusto quos deleniti animi quis laudantium
				vitae?
			</p>
		{/each}
	</div>

	<div class="sticky top-0 w-64 border-l border-brand-dark/10 p-4">
		<p>this is a sidebar</p>
	</div>
</div>
