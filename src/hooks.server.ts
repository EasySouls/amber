import { SvelteKitAuth } from '@auth/sveltekit';

import Google from '@auth/sveltekit/providers/google';
import Github from '@auth/sveltekit/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';

import prisma from '$lib/prisma';

import {
	GITHUB_ID_DEV,
	GITHUB_SECRET_DEV,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET
} from '$env/static/private';

export const handleAuth = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
		Github({ clientId: GITHUB_ID_DEV, clientSecret: GITHUB_SECRET_DEV })
	]
});
