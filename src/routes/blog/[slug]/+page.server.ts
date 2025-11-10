import type { PostMetadata } from '$lib/blog/types';
import { render } from 'svelte/server';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
	const postFiles = import.meta.glob('/src/posts/*.md');
	const slugs: { slug: string }[] = [];

	for (const path in postFiles) {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		slugs.push({ slug });
	}

	return slugs;
};

export const load: PageServerLoad = async ({ params }) => {
	const post = await import(`../../../posts/${params.slug}.md`);

	const { body } = render(post.default);

	return {
		meta: post.metadata as PostMetadata,
		content: body
	};
};
