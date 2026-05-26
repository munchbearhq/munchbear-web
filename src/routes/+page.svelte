<script lang="ts">
	import { version } from '../../package.json';
</script>

<svelte:head>
	<title>MunchBear — Community Catalog for Food & Beverages</title>

	<meta
		name="description"
		content="Discover, explore, and contribute to a community-driven catalog of food and beverages."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col px-6 pt-6">
	<div class="prose flex-1">
		<h1 class="mb-0">
			Welcome to
			<span class="text-[#4f46e5]"> MunchBear </span>
		</h1>
		<p class="mt-0">The community-driven food and beverage catalog.</p>
	</div>

	<footer class="flex flex-col gap-1 py-6 text-xs text-muted-foreground">
		<p>Made with Coffee and Love.</p>
		<div class="font-mono text-[10px]">
			<a
				href="https://github.com/munchbearhq/munchbear-web"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:underline"
			>
				munchbear-web
			</a>
			v{version}
		</div>
	</footer>
</div>
