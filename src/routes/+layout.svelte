<script>
	// Tailwind directives
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main class="bg-slate-300 p-4">
	<slot />
</main>
<Footer />

<style lang="postcss">
	main {
		@apply overflow-scroll flex-auto;
	}
</style>
