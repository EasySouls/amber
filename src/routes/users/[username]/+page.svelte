<script lang="ts">
	import type { PageData } from './$types';
	import avatar from '$lib/assets/user-solid.svg';
	import Post from '$lib/components/Post.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.user.name}'s profile</title>
</svelte:head>

<main class="user-page">
	<div class="main">
		{#each data.user.posts as { title, content }}
			<Post {title} {content} author={data.user.name || ''} />
		{/each}
	</div>
	<div class="info">
		<div class="avatar-container">
			{#if data.user.image}
				<img src={data.user.image} alt="avatar" class:avatar />
			{:else}
				<img src={avatar} alt="avatar" class:avatar />
			{/if}
		</div>
		<h2 class="text-2xl">{data.user.name}</h2>
	</div>
</main>

<style lang="postcss">
	.user-page {
		@apply w-full h-full flex flex-col;
	}
	.info {
		@apply flex w-1/4 h-full items-center flex-col gap-2;
	}
	.main {
		@apply w-3/4 h-full bg-slate-600;
	}
	.avatar {
		@apply w-2/3 aspect-square;
	}
	.avatar-container {
		@apply w-60 h-60 flex items-center justify-center bg-white border border-black p-4 rounded-full overflow-hidden;
	}
</style>
