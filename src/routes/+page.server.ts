import type { PostMetadata } from '$lib/blog/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const postFiles = import.meta.glob('/src/posts/*.md');
	const posts: { slug: string; meta: PostMetadata }[] = [];

	for (const path in postFiles) {
		const post = (await postFiles[path]()) as { metadata: PostMetadata };
		const slug = path.split('/').pop()?.replace('.md', '') || '';

		posts.push({ slug, meta: post.metadata });
	}

	return { posts };
};
