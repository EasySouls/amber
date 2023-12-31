<script lang="ts">
	export let title: string;
	export let content: string;
	export let author: string;
</script>

<div class="bg-slate-800 border border-white rounded-lg">
	<h4>{title}</h4>
	<p>
		By
		{#if author === ''}
			Anonymous
		{:else}
			<i>{author}</i>
		{/if}
	</p>
	<p>{content}</p>
</div>
