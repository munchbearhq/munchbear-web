export const foodFacts = [
	{ text: 'Ketchup was sold as medicine in the 1830s' },
	{ text: 'Honey is the only food that never expires' },
	{ text: 'Apples float in water because they are 25% air' },
	{ text: 'Carrots were originally purple, not orange' },
	{ text: "White chocolate isn't technically chocolate" },
	{ text: "The world's most expensive pizza costs $12,000" },
	{ text: 'Ripe cranberries will bounce like rubber balls' },
	{ text: 'Peanuts are not nuts; they are legumes' },
	{ text: 'The sticker on fruit is technically edible' },
	{ text: 'Strawberries are not berries, but bananas are' },
	{ text: 'Pound cake is named after its original recipe' },
	{ text: "McDonald's sells 75 hamburgers every second" },
	{ text: "Nutella uses 25% of the world's hazelnuts" },
	{ text: 'Pearls melt in vinegar' },
	{ text: 'Froot Loops are all the same flavor' },
	{ text: "Pistachios and almonds aren't technically nuts" },
	{ text: 'Cashews grow on "apples" called cashew apples' },
	{ text: 'Raspberries are part of the rose family' },
	{ text: 'Cotton candy was co-invented by a dentist' },
	{ text: 'TV dinners were created due to a Thanksgiving turkey surplus' },
	{ text: 'Applesauce was the first food eaten in space' },
	{ text: 'Potatoes were the first vegetable grown in space' },
	{ text: 'Peanuts can be used as an ingredient in dynamite' },
	{ text: 'A single strand of spaghetti is called a spaghetto' },
	{ text: 'Cheese is the most stolen food in the world' },
	{ text: 'Lemons float, but limes sink' },
	{ text: 'Caesar Salad was actually invented in Tijuana, Mexico' },
	{ text: 'French Fries likely originated in Belgium, not France' },
	{ text: 'Rhubarb grows so fast that you can actually hear it' },
	{ text: 'Green gummy bears are actually strawberry flavored' },
	{ text: 'Ripe oranges can stay green in warmer climates' },
	{ text: 'Doritos were originally invented at Disneyland' },
	{ text: 'Chocolate chip cookies were created by accident in the 1930s' },
	{ text: 'Japanese farmers grow square watermelons for easier storage' },
	{ text: 'Pringles are technically "potato crisps," not chips' },
	{ text: 'Broccoli is actually a cluster of unopened flower buds' },
	{ text: 'The red food dye in many snacks comes from crushed bugs' },
	{ text: "The first oranges weren't orange" },
	{ text: 'There are over 7,500 varieties of apples' },
	{ text: 'Avocados are berries' },
	{ text: 'Honeybees must visit 2 million flowers to make one pound of honey' },
	{ text: "The word 'apple' used to refer to any fruit" },
	{ text: 'A cluster of bananas is called a hand, and a single banana is called a finger' },
	{ text: 'Chocolate was once used as currency' },
	{ text: 'The oldest evidence of soup dates back to 6,000 B.C.' },
	{ text: 'Pineapples take about two years to grow' },
	{ text: 'Fig wasps pollinate most figs' },
	{ text: 'A watermelon is both a fruit and a vegetable' },
	{ text: 'Peaches and nectarines are the same fruit' },
	{ text: 'Coffee beans are actually seeds of a cherry-like fruit' }
];

export const heroWords = [
	'obsessing over',
	'savoring',
	'craving',
	'dreaming of',
	'celebrating',
	'sharing',
	'exploring',
	'traveling for',
	'waiting for',
	'searching for'
];

export function getPersistentFact() {
	if (typeof window === 'undefined') return { fact: { text: '' }, isNew: false };

	const STORAGE_KEY = 'munchbear_daily_fact';
	const today = new Date().toDateString();

	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const { fact, date } = JSON.parse(stored);
			if (date === today) {
				const factExists = foodFacts.find((f) => f.text === fact.text);
				if (factExists) return { fact: factExists, isNew: false };
			}
		}
	} catch {
		// Fallback to random
	}

	const newFact = foodFacts[Math.floor(Math.random() * foodFacts.length)];
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ fact: newFact, date: today }));
	} catch {
		// Ignore storage errors
	}

	return { fact: newFact, isNew: true };
}
