import type { PageServerLoad } from './$types';

const getPost = async (slug: string) => {
	// console.log({ slug, files });
};

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	return {
		post: await getPost(slug)
	};
};
