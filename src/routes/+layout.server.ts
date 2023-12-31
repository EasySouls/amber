import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	return {
		// Calling this as a functions seems to throw an error, but I don't know why.
		session: event.locals.getSession
	};
};
