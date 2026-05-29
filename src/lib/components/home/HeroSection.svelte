<script lang="ts">
	import { Search, Sparkles, Star, Bookmark } from '@lucide/svelte';
	import { foodFacts, heroWords, getPersistentFact } from '$lib/data/facts';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const quickSearches = ['Matcha', 'Ramen', 'Croissant', 'Sushi', 'Tiramisu', 'Cold Brew'];

	let fact = $state(foodFacts[0]);
	let displayedChars = $state<string[]>([]);
	let wordIndex = $state(0);

	onMount(() => {
		const selectedFact = getPersistentFact();
		fact = selectedFact;

		const chars = selectedFact.text.split('');
		let i = 0;
		const factInterval = setInterval(() => {
			if (i < chars.length) {
				displayedChars = [...displayedChars, chars[i]];
				i++;
			} else {
				clearInterval(factInterval);
			}
		}, 30);

		const wordInterval = setInterval(() => {
			wordIndex = (wordIndex + 1) % heroWords.length;
		}, 2500);

		return () => {
			clearInterval(factInterval);
			clearInterval(wordInterval);
		};
	});
</script>

<section class="relative overflow-hidden px-6 py-10 lg:px-10 lg:py-16">
	<div class="mx-auto max-w-[1440px]">
		<div class="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
			<!-- LEFT -->
			<div class="flex flex-col justify-center">
				<div class="mb-8 min-h-9">
					<div
						class="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-all duration-300"
						class:gap-2={displayedChars.length > 0}
						aria-label="Food fact: {fact.text}"
					>
						<Sparkles size={14} class="shrink-0 fill-violet-500 text-violet-500" />
						<div class="flex items-center" aria-hidden="true">
							{#each displayedChars as char, idx (idx)}
								<span class="char-anim inline-block text-zinc-700">
									{char === ' ' ? '\u00A0' : char}
								</span>
							{/each}
						</div>
					</div>
				</div>

				<h1
					class="max-w-3xl text-5xl leading-[0.95] font-semibold tracking-tight text-zinc-950 lg:text-7xl"
				>
					Discover food
					<br />

					worth

					<span class="ml-[-0.056rem] inline-grid text-violet-600 italic">
						{#key wordIndex}
							<span
								class="col-start-1 row-start-1"
								in:fly={{ y: 20, duration: 400, delay: 100 }}
								out:fly={{ y: -20, duration: 400 }}
							>
								{heroWords[wordIndex]}
							</span>
						{/key}
					</span>
				</h1>

				<p class="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
					Curated gems, iconic classics, neighborhood favorites, and unforgettable drinks.
				</p>

				<!-- Search -->
				<div
					class="mt-10 flex items-center overflow-hidden rounded-full border border-zinc-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
				>
					<div class="pl-6 text-zinc-400">
						<Search size={22} />
					</div>

					<input
						type="text"
						placeholder="What are you craving today?"
						class="h-16 flex-1 border-none bg-transparent px-4 text-lg outline-none placeholder:text-zinc-400"
					/>

					<button
						class="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white transition hover:scale-105 hover:bg-violet-700"
					>
						<Search size={20} />
					</button>
				</div>

				<!-- Chips -->
				<div class="mt-6 flex flex-wrap gap-3">
					{#each quickSearches as item (item)}
						<button
							class="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700 transition hover:border-violet-300 hover:text-violet-700"
						>
							{item}
						</button>
					{/each}
				</div>
			</div>

			<!-- RIGHT -->
			<div class="grid gap-5 lg:grid-cols-[1fr_320px]">
				<!-- Main Feature Card -->
				<article
					class="group relative overflow-hidden rounded-[36px] bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
				>
					<img
						src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80"
						alt="Matcha latte"
						class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
					/>

					<div
						class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
					></div>

					<div class="absolute top-5 left-5">
						<span class="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
							Dish of the week
						</span>
					</div>

					<button
						class="absolute top-5 right-5 rounded-full bg-black/30 p-3 text-white backdrop-blur-md"
					>
						<Bookmark size={20} />
					</button>

					<div class="absolute right-6 bottom-6 left-6 text-white">
						<h3 class="text-4xl font-semibold">Matcha Latte</h3>

						<p class="mt-2 text-white/80">% Arabica Kyoto</p>

						<div class="mt-4 flex items-center gap-2 text-sm">
							<Star size={16} class="fill-amber-400 text-amber-400" />

							<span>4.8</span>
							<span class="text-white/60"> (980 reviews) </span>
						</div>
					</div>
				</article>

				<!-- Side Cards -->
				<div class="flex flex-col gap-5">
					{#each [{ title: 'Top Rated Near You', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80' }, { title: 'Community Favorite', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80' }] as card (card.title)}
						<article
							class="group relative h-[220px] overflow-hidden rounded-[30px] bg-black shadow-xl"
						>
							<img
								src={card.image}
								alt={card.title}
								class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
							/>

							<div
								class="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"
							></div>

							<div class="absolute inset-0 flex flex-col justify-between p-6 text-white">
								<h3 class="max-w-[180px] text-3xl leading-tight font-semibold">
									{card.title}
								</h3>

								<span class="text-sm text-white/70"> Explore → </span>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes clean-reveal {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.char-anim {
		opacity: 0;
		animation: clean-reveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}
</style>
