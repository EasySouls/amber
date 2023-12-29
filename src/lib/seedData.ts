import prisma from './prisma';

export const seedUsers = [
	{
		email: 'gadakhd@gmail.com',
		password: 'jnlajh837ukjnfe',
		username: 'Maxwell',
		post: {
			title: 'First title',
			content: 'Content of the first post'
		}
	},
	{
		email: 'thomaslux@gmail.com',
		password: '87z3iurhandllkajsd',
		username: 'Thomas',
		post: {
			title: 'Second title',
			content: 'Content of the second post'
		}
	},
	{
		email: 'johnsonpowell@gmail.com',
		password: 'adéawdjn73grkjan',
		username: 'Johnson',
		post: {
			title: 'Third title',
			content: 'Content of the third post'
		}
	}
];
