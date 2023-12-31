<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.user.email}'s profile</title>
</svelte:head>

<h1>{data.user.email}'s profile</h1>
