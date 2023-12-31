import { PrismaClient } from '@prisma/client';
import seedUsers from '../src/lib/seedData.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	console.log('Started seeding...');

	for (const u of seedUsers) {
		const user = await prisma.user.create({
			data: {
				email: u.email,
				password: u.password,
				username: u.username,
				posts: {
					create: {
						title: u.post.title,
						content: u.post.content
					}
				}
			}
		});
		console.log(`Created user with username: ${user.username}`);
	}
	console.log('Seeding finished.');
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
