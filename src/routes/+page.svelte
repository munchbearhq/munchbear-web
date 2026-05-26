<script lang="ts">
	import { version } from '../../package.json';
	import HeroSection from '$lib/components/home/HeroSection.svelte';
</script>

<svelte:head>
	<title>MunchBear — Community Catalog for Food & Beverages</title>

	<meta
		name="description"
		content="Discover, explore, and contribute to a community-driven catalog of food and beverages."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<!-- <div class="prose px-6 pt-6">
		<h1 class="mb-0">
			Welcome to
			<span class="text-[#4f46e5]"> MunchBear </span>
		</h1>
		<p class="mt-0">The community-driven food and beverage catalog.</p>
	</div> -->

	<main class="flex-1">
		<HeroSection />
	</main>

	<footer class="mt-auto px-6 py-10 lg:px-10">
		<div
			class="mx-auto flex max-w-[1440px] flex-col items-center justify-between border-t border-zinc-100 pt-8 text-sm text-zinc-500 sm:flex-row"
		>
			<p class="flex items-center gap-1.5">
				Crafted with <span class="text-amber-900">☕</span> and
				<span class="text-violet-600">💜</span>
			</p>
			<div class="mt-2 font-mono text-[10px] tracking-wider text-zinc-400 uppercase sm:mt-0">
				<a
					href="https://github.com/munchbearhq/munchbear-web"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-violet-600 hover:underline"
				>
					munchbear-web
				</a>
				v{version}
			</div>
		</div>
	</footer>
</div>
