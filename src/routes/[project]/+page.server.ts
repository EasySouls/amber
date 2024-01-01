import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = prisma.project.findFirst({ where: { name: params.project } });
	const project = await data;

	if (!project) {
		// TODO Option to redirect to a project creation page
		error(404, 'Project not found');
	}

	return {
		project: {
			name: params.project,
			issues: 31
		}
	};
};
