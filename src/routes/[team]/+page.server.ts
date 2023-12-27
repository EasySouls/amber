import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// TODO return the current team's data based on the params

	return {
		team: {
			name: params.team,
			projects: 2,
			issues: 31
		}
	};
};
