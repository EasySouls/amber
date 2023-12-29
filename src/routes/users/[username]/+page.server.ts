import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// TODO search with findUnique
	const userData = await prisma.user.findFirst({
		where: { username: params.username }
	});

	if (!userData) {
		throw error(404, 'User with this username not found!');
	}

	const user = {
		email: userData.email,
		username: userData.username
	} as const;

	return {
		user: user
	};
};
