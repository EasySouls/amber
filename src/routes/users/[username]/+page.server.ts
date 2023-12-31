import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// TODO search with findUnique
	const userData = await prisma.user.findFirst({
		where: { name: params.username },
		include: { posts: true, projects: true }
	});

	if (!userData) {
		throw error(404, 'User with this username not found!');
	}

	return {
		user: userData
	};
};
