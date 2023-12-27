<script lang="ts">
	import Routes from '$lib/routes';

	type Route = {
		name: string;
		destination: string;
	};

	const routes: Route[] = [
		{
			name: 'Főoldal',
			destination: Routes.HOME
		},
		{
			name: 'Irányítópult',
			destination: Routes.DASHBOARD
		}
	];
</script>

<header>
	<div>
		<h1 class="title">Amber</h1>
	</div>
	<nav>
		{#each routes as { destination, name }}
			<a href={destination}>{name}</a>
		{/each}
	</nav>
</header>

<style lang="postcss">
	header {
		@apply flex justify-between items-center;
		@apply bg-slate-700 min-h-16 px-4;
	}

	.title {
		@apply font-semibold text-3xl text-amber-500;
	}

	nav {
		@apply flex gap-2;
	}

	nav > a {
		@apply border border-black rounded-lg px-2 py-1 bg-amber-600;
		@apply hover:bg-amber-700 hover:border-white hover:text-white transition-all duration-300;
	}
</style>
