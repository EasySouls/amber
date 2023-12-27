<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.team.name} - Amber</title>
</svelte:head>

<div>
	<h3>{data.team.name}</h3>
	<p>Projects: {data.team.projects}</p>
	<p>Issues: {data.team.issues}</p>
</div>
