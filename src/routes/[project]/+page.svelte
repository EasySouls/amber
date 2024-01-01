<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.project.name} - Amber</title>
</svelte:head>

<div>
	<h3>{data.project.name}</h3>
	<p>Issues: {data.project.issues}</p>
</div>
