export interface FoodFact {
	text: string;
	description?: string;
	sourceUrl?: string;
}

export const foodFacts: FoodFact[] = [
	/* INVALID SOURCE
	{
		text: 'Ketchup was sold as medicine in the 1830s',
		description:
			'In 1834, Dr. John Cook Bennett promoted ketchup as a cure for indigestion and diarrhea. It was even sold in pill form before becoming a condiment.',
		sourceUrl: 'https://www.nationalgeographic.com/culture/article/ketchup-history'
	},
	*/
	{
		text: 'Honey is the only food that never expires',
		description:
			'Archaeologists have found edible honey in ancient Egyptian tombs that is over 3,000 years old. Its low moisture and high acidity keep it preserved.',
		sourceUrl:
			'https://www.smithsonianmag.com/science-nature/the-science-behind-honeys-eternal-shelf-life-1218690/'
	},
	/* INVALID SOURCE
	{
		text: 'Apples float in water because they are 25% air',
		description:
			'The low density of an apple is caused by millions of tiny air pockets trapped between its cells, providing enough buoyancy to keep it afloat.',
		sourceUrl: 'https://web.extension.illinois.edu/apples/facts.cfm'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Carrots were originally purple, not orange',
		description:
			'The modern orange carrot was selectively bred in the Netherlands during the 17th century, likely for its sweeter taste and better resistance to pests.',
		sourceUrl: 'https://www.nationalgeographic.com/culture/article/carrots-history-color'
	},
	*/

	/* MISTAKE: amount is incorrect
	{
		text: "The world's most expensive pizza costs $12,000",
		description:
			'The Louis XIII pizza, created by Chef Renato Viola, features three types of rare caviar, Norwegian lobster, and is served at your home with a catering team.',
		sourceUrl: 'https://www.guinnessworldrecords.com/world-records/most-expensive-pizza'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Ripe cranberries will bounce like rubber balls',
		description:
			'Fresh cranberries contain four small air pockets that allow them to float and bounce. Farmers use "bounce boards" to separate firm berries from soft ones.',
		sourceUrl: 'https://today.tamu.edu/2023/11/09/the-botany-of-the-cranberry/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Peanuts are not nuts; they are legumes',
		description:
			'Botanically, peanuts are related to beans and lentils as they grow in pods underground. Peanut oil can also be used as an ingredient in dynamite.',
		sourceUrl: 'https://www.nationalpeanutboard.org/peanut-info/is-a-peanut-a-nut.htm'
	},
	*/

	/* INVALID SOURCE
	{
		text: 'Strawberries are not berries, but bananas are',
		description:
			'Botanically, a berry must have seeds on the inside. Strawberries are aggregate fruits with seeds on the outside, while bananas meet the true berry criteria.',
		sourceUrl:
			'https://www.mcgill.ca/oss/article/did-you-know/bananas-are-berries-strawberries-are-not'
	},
	*/
	{
		text: 'Pound cake is named after its original recipe',
		description:
			'The traditional recipe from the 1700s called for exactly one pound each of four ingredients: flour, butter, sugar, and eggs.',
		sourceUrl: 'https://whatscookingamerica.net/history/cakes/poundcake.htm'
	},
	{
		text: "McDonald's sells 75 hamburgers every second",
		description:
			"Globally, McDonald's sells approximately 4,500 burgers per minute, which adds up to over 6.4 million burgers every single day.",
		sourceUrl:
			'https://www.marketplace.org/2017/05/26/how-many-burgers-has-mcdonalds-actually-sold/'
	},
	/* MISTAKE: ferrero uses
	{
		text: "Nutella uses 25% of the world's hazelnuts",
		description:
			"Ferrero, the maker of Nutella, is the world's largest hazelnut consumer. Each 13-ounce jar contains approximately 52 hazelnuts.",
		sourceUrl: 'https://www.bbc.com/news/magazine-27443414'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Pearls melt in vinegar',
		description:
			'The acetic acid in vinegar reacts with the calcium carbonate in pearls, breaking them down into soluble calcium acetate and carbon dioxide.',
		sourceUrl: 'https://www.britannica.com/story/one-good-fact-about-dissolving-pearls'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Froot Loops are all the same flavor',
		description:
			"Despite their different colors, every loop is made from the same fruit-blend flavor, which Kellogg's describes simply as 'frooty.'",
		sourceUrl: 'https://www.foodrepublic.com/1483445/froot-loops-colors-same-flavor/'
	},
	*/
	{
		text: "Pistachios and almonds aren't technically nuts",
		description:
			'Botanically, these are classified as drupes (stone fruits). The part we eat is the seed found inside a hard pit, similar to a peach or cherry.',
		sourceUrl: 'https://www.healthline.com/nutrition/are-pistachios-nuts'
	},
	{
		text: 'Cashews grow on "apples" called cashew apples',
		description:
			'The cashew nut is a seed that grows outside a fleshy, pear-shaped accessory fruit known as the cashew apple, which is often used for juices and jams.',
		sourceUrl: 'https://edis.ifas.ufl.edu/publication/HS377'
	},
	{
		text: 'Raspberries are part of the rose family',
		description:
			'Raspberries belong to the Rosaceae family, making them relatives of roses, apples, and pears. They are aggregate fruits, not true berries.',
		sourceUrl: 'https://www.britannica.com/plant/raspberry'
	},
	{
		text: 'Cotton candy was co-invented by a dentist',
		description:
			"In 1897, dentist William Morrison and confectioner John C. Wharton invented the machine-spun treat, originally calling it 'Fairy Floss.'",
		sourceUrl: 'https://www.britannica.com/topic/How-Was-Cotton-Candy-Invented'
	},
	/* INVALID SOURCE
	{
		text: 'TV dinners were created due to a Thanksgiving turkey surplus',
		description:
			'In 1953, Swanson had 260 tons of leftover turkey. Salesman Gerry Thomas suggested packaging it in aluminum trays with sides, creating the first TV dinner.',
		sourceUrl:
			'https://www.smithsonianmag.com/arts-culture/tray-bon-the-history-of-the-tv-dinner-11302374/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Applesauce was the first food eaten in space',
		description:
			'In 1962, astronaut John Glenn became the first American to eat in space, consuming applesauce from a collapsible tube to test swallowing in microgravity.',
		sourceUrl:
			'https://www.nasa.gov/history/60-years-ago-john-glenn-becomes-the-first-american-to-orbit-the-earth/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Potatoes were the first vegetable grown in space',
		description:
			'In 1995, NASA and the University of Wisconsin-Madison successfully grew potato plants aboard the Space Shuttle Columbia, proving food could be grown in microgravity.',
		sourceUrl: 'https://www.nasa.gov/history/25-years-ago-potatoes-in-space/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Peanuts can be used as an ingredient in dynamite',
		description:
			'Peanut oil can be processed to produce glycerol, which is a key ingredient used to make nitroglycerin, the explosive component in dynamite.',
		sourceUrl: 'https://www.nationalpeanutboard.org/peanut-info/fun-facts.htm'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'A single strand of spaghetti is called a spaghetto',
		description:
			"In Italian, 'spaghetti' is the plural form of 'spaghetto,' which comes from the word 'spago,' meaning thin string or twine.",
		sourceUrl: 'https://www.interestingfacts.com/fact/spaghetto-singular-spaghetti'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Cheese is the most stolen food in the world',
		description:
			'According to the Center for Retail Research, approximately 4% of all cheese produced globally is stolen, often targeted for its high value and resale potential.',
		sourceUrl:
			'https://www.theguardian.com/lifeandstyle/shortcuts/2012/jan/10/cheese-most-shoplifted-food-item'
	},
	*/
	{
		text: 'Lemons float, but limes sink',
		description:
			'Lemons have a lower density than water due to their porous rinds, while limes are denser and lack the same air pockets, causing them to sink.',
		sourceUrl: 'https://www.stevespangler.com/experiments/floating-lemons-and-sinking-limes/'
	},
	{
		text: 'Caesar Salad was actually invented in Tijuana, Mexico',
		description:
			'Restaurateur Caesar Cardini created the salad in 1924 after a Fourth of July rush depleted his kitchen supplies, forcing him to improvise with remaining ingredients.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Caesar_salad'
	},
	/* INVALID SOURCE
	{
		text: 'French Fries likely originated in Belgium, not France',
		description:
			"American soldiers in Belgium during WWI nicknamed them 'French fries' because the Belgian army's official language was French.",
		sourceUrl: 'https://www.nationalgeographic.com/culture/article/are-french-fries-truly-french'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Rhubarb grows so fast that you can actually hear it',
		description:
			"In the 'Yorkshire Rhubarb Triangle,' forced rhubarb grows so quickly in dark sheds that the buds popping open and stalks rubbing together can be heard.",
		sourceUrl:
			'https://www.smithsonianmag.com/travel/the-english-farmers-who-harvest-rhubarb-by-candlelight-180979841/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Green gummy bears are actually strawberry flavored',
		description:
			'Despite their color, the green Haribo Goldbears are strawberry-flavored, while the white ones are pineapple and the red ones are raspberry.',
		sourceUrl: 'https://www.haribo.com/en-us/products/goldbears'
	},
	*/
	{
		text: 'Ripe oranges can stay green in warmer climates',
		description:
			'In tropical regions, chlorophyll stays in the skin of oranges even after they are ripe. In cooler climates, the chill breaks down the chlorophyll to reveal orange.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Orange_(fruit)#Degreening'
	},
	/* INVALID SOURCE
	{
		text: 'Doritos were originally invented at Disneyland',
		description:
			"The chips were first created at Casa de Fritos in Disneyland's Frontierland in the 1960s using leftover tortillas that were fried and seasoned.",
		sourceUrl:
			'https://disneyparks.disney.go.com/blog/2011/10/the-history-of-doritos-at-disneyland-park/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Chocolate chip cookies were created by accident in the 1930s',
		description:
			'Ruth Wakefield of the Toll House Inn added broken chocolate pieces to cookie dough, expecting them to melt. Instead, they held their shape, creating a classic.',
		sourceUrl: 'https://www.verybestbaking.com/toll-house/history/'
	},
	*/
	{
		text: 'Japanese farmers grow square watermelons for easier storage',
		description:
			'Grown in tempered glass cases to force a cubic shape, these watermelons were originally designed to fit more efficiently into small refrigerators.',
		sourceUrl: 'https://www.atlasobscura.com/foods/square-watermelons-japan'
	},
	/* INVALID SOURCE
	{
		text: 'Pringles are technically "potato crisps," not chips',
		description:
			"Because Pringles are made from a dough of potato flakes rather than sliced whole potatoes, the FDA ruled they must be called 'potato crisps.'",
		sourceUrl: 'https://www.fda.gov/media/71755/download'
	},
	*/
	{
		text: 'Broccoli is actually a cluster of unopened flower buds',
		description:
			'The green head we eat is made of thousands of tiny immature flower buds. If left unharvested, they would eventually bloom into small yellow flowers.',
		sourceUrl: 'https://www.britannica.com/plant/broccoli'
	},
	{
		text: 'The red food dye in many snacks comes from crushed bugs',
		description:
			'Carmine, a common red food coloring, is made from crushed cochineal insects. It takes about 70,000 of these tiny bugs to produce one pound of dye.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Carmine'
	},
	/* INVALID SOURCE
	{
		text: "The first oranges weren't orange",
		description:
			'Original oranges from Southeast Asia were hybrids that remained green even when ripe. They only turn orange in cooler climates.',
		sourceUrl: 'https://historyfacts.com/science-industry/article/the-origins-of-oranges/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'There are over 7,500 varieties of apples',
		description:
			'If you ate a different variety of apple every day, it would take you more than 20 years to try every kind grown across the world.',
		sourceUrl:
			'https://extension.colostate.edu/topic-areas/nutrition-food-safety-health/apples-the-versatile-fruit-9-317/'
	},
	*/
	{
		text: 'Avocados are berries',
		description:
			'Botanically, avocados are single-seeded berries. They meet the criteria of having a fleshy middle layer and an outer skin, with the "pit" being the seed.',
		sourceUrl: 'https://www.healthline.com/nutrition/is-avocado-a-fruit-or-a-vegetable'
	},
	/* INVALID SOURCE
	{
		text: 'Honeybees must visit 2 million flowers to make one pound of honey',
		description:
			'To gather enough nectar for a single pound of honey, a colony of bees flies about 55,000 miles, which is twice the circumference of the Earth.',
		sourceUrl:
			'https://news.wisc.edu/curiosities-how-many-flowers-must-a-bee-visit-to-make-one-pound-of-honey/'
	},
	*/
	{
		text: "The word 'apple' used to refer to any fruit",
		description:
			"In Old English, 'apple' was a generic term for any fruit that wasn't a berry. This is why potatoes are called 'apples of the earth' in French.",
		sourceUrl: 'https://www.etymonline.com/word/apple'
	},
	{
		text: 'A cluster of bananas is called a hand, and a single banana is called a finger',
		description:
			'Bananas grow in bunches made of "hands," which contain 10 to 20 individual "fingers." The word banana likely comes from the Arabic word for finger.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Banana'
	},
	/* INVALID SOURCE
	{
		text: 'Chocolate was once used as currency',
		description:
			'The Aztecs and Mayans valued cacao beans so highly they used them as money to pay for goods, services, and even taxes.',
		sourceUrl: 'https://legacychocolates.com/blogs/news/the-history-of-chocolate'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'The oldest evidence of soup dates back to 6,000 B.C.',
		description:
			'While soup is ancient, the oldest archaeological evidence of soup-making was found in 20,000-year-old pottery in China, marked by scorch marks from boiling.',
		sourceUrl: 'https://www.campbellsoup.co.uk/blog/history-of-soup/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Pineapples take about two years to grow',
		description:
			'It typically takes 18 to 24 months for a pineapple plant to produce a single fruit. Each plant only produces one pineapple at a time.',
		sourceUrl: 'https://thursd.com/articles/how-long-does-it-take-to-grow-a-pineapple'
	},
	*/
	{
		text: 'Fig wasps pollinate most figs',
		description:
			'Figs and fig wasps have a symbiotic relationship where the wasp pollinates the internal flowers. The fig then uses enzymes to completely digest the wasp.',
		sourceUrl: 'https://www.britannica.com/animal/fig-wasp'
	},
	/* INVALID SOURCE
	{
		text: 'A watermelon is both a fruit and a vegetable',
		description:
			'Botanically a fruit because it grows from a flower and contains seeds, it is also considered a vegetable as a member of the gourd family.',
		sourceUrl: 'https://www.watermelon.org/faqs/'
	},
	*/

	{
		text: 'Coffee beans are actually seeds of a cherry-like fruit',
		description:
			'The "beans" we grind are the seeds of the coffee cherry. The fruit itself is sweet and can be brewed into a tea called cascara.',
		sourceUrl: 'https://www.ncausa.org/About-Coffee/What-is-Coffee'
	},
	{
		text: 'Nutmeg can be a hallucinogen in large doses',
		description:
			'Nutmeg contains myristicin, which can cause hallucinations and delirium in large doses, though it is perfectly safe in culinary amounts.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Myristicin'
	},
	/* INVALID SOURCE
	{
		text: 'The filling in Kit Kats is made from crushed, rejected Kit Kats',
		description:
			'Imperfect Kit Kats are pulled from the line, ground into a paste, and recycled as the "praline" filling between the wafers of new bars.',
		sourceUrl: 'https://thetakeout.com/what-is-kit-kat-filling-made-of-broken-kit-kats-1849688345'
	},
	*/
	{
		text: 'Bananas are slightly radioactive',
		description:
			'Bananas contain high levels of potassium, including the natural isotope Potassium-40, making them slightly radioactive (but safe to eat).',
		sourceUrl: 'https://en.wikipedia.org/wiki/Banana_equivalent_dose'
	},
	/* INVALID SOURCE
	{
		text: 'Broccoli contains more protein than steak per calorie',
		description:
			'While broccoli is high in protein for a vegetable (about 30% of its calories), you would have to eat roughly 18 cups of it to match the protein in a single steak.',
		sourceUrl: 'https://www.thedailymeal.com/1333814/broccoli-vs-steak-protein-content/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Pears are denser than apples and will sink in water',
		description:
			'Apples float because they are about 25% air, but pears are much denser and lack the same internal air pockets, causing them to sink.',
		sourceUrl:
			'https://www.washingtonpost.com/archive/lifestyle/food/2003/10/15/the-density-of-dinner/68888888-8888-8888-8888-888888888888/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Genetically, mushrooms are more closely related to humans than plants',
		description:
			'Fungi and animals share a common ancestor that split from plants about 1.1 billion years ago. Like humans, mushrooms are heterotrophs that store energy as glycogen.',
		sourceUrl: 'https://www.britannica.com/story/is-a-mushroom-a-plant'
	},
	*/
	/* INVALID SOURCE
	{
		text: "Native Americans called blueberries 'star berries' due to their blossom shape",
		description:
			'The blossom end of a blueberry forms a perfect five-pointed star. According to legend, the Great Spirit sent "star berries" to relieve hunger during a famine.',
		sourceUrl: 'https://berkeleyhort.com/blueberries-star-berries/'
	},
	*/
	{
		text: 'Cinnamon is the dried inner bark of trees in the Cinnamomum family',
		description:
			'Cinnamon is harvested by peeling away the inner bark of specific trees. As it dries, it naturally curls into the familiar rolls known as quills.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Cinnamon'
	},
	{
		text: "The 'Miracle Berry' makes sour foods taste sweet for about 30 minutes",
		description:
			'A protein called miraculin binds to your taste buds and "switches on" sweet receptors when exposed to acids, making lemons taste like candy.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Synsepalum_dulcificum'
	},
	{
		text: 'Tonic water glows bright blue under UV light because it contains quinine',
		description:
			'Quinine, a compound used to treat malaria, is highly fluorescent. It absorbs ultraviolet light and re-emits it as a visible bright blue glow.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Tonic_water'
	},
	{
		text: 'Hawaiian pizza was actually invented in Ontario, Canada',
		description:
			'Greek immigrant Sam Panopoulos created the pineapple-topped pizza in 1962 and named it "Hawaiian" after the brand of canned fruit he used.',
		sourceUrl: 'https://www.bbc.com/news/world-us-canada-40230407'
	},

	{
		text: 'German Chocolate Cake is named after an American named Sam German',
		description:
			'In 1852, Sam German created a "Sweet Baking Chocolate" for the Baker Chocolate Company. The cake recipe using his chocolate was named in his honor.',
		sourceUrl: 'https://en.wikipedia.org/wiki/German_chocolate_cake'
	},
	/* INVALID SOURCE
	{
		text: 'The California Roll was actually invented in Vancouver, Canada',
		description:
			'Chef Hidekazu Tojo created the "inside-out" roll to appeal to Western customers who were hesitant about raw fish and visible seaweed.',
		sourceUrl:
			'https://vancouver.citynews.ca/2024/09/26/vancouver-sushi-chef-california-roll-career/'
	},
	*/
	{
		text: 'The Popsicle was invented by an 11-year-old boy by accident in 1905',
		description:
			"Frank Epperson left a cup of soda and water with a stirring stick on his porch overnight during a cold snap. He originally named his discovery the 'Epsicle.'",
		sourceUrl:
			'https://www.npr.org/2015/07/22/425294957/how-an-11-year-old-boy-invented-the-popsicle'
	},
	/* INVALID SOURCE
	{
		text: 'Farm-raised salmon is naturally grey and is dyed pink with astaxanthin',
		description:
			'Unlike wild salmon that eat shrimp and krill, farm-raised salmon are naturally grey. Farmers add astaxanthin to their feed to achieve the familiar pink color.',
		sourceUrl: 'https://www.asc-aqua.org/blog/is-farmed-salmon-dyed/'
	},
	*/
	{
		text: 'The shiny coating on many jellybeans is made from shellac, a bug resin',
		description:
			"Known as 'confectioner's glaze,' shellac is a resin secreted by female lac bugs. It is used to give candies and some pills their glossy finish.",
		sourceUrl: 'https://en.wikipedia.org/wiki/Shellac'
	},
	/* INVALID SOURCE
	{
		text: 'Bird’s Nest Soup is made from the dried, solidified saliva of swiftlets',
		description:
			'Male swiftlets weave their nests entirely from gummy saliva strands that harden in the air. These nests are highly prized and can cost up to $10,000 per kilogram.',
		sourceUrl: 'https://www.audubon.org/news/the-bird-spit-soup-business-booming-southeast-asia'
	},
	*/
	{
		text: "Pule is the world's most expensive cheese and is made from donkey milk",
		description:
			'Produced in Serbia, it takes 25 liters of Balkan donkey milk to make just one kilogram of this cheese, which can cost over $600 per pound.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Pule_cheese'
	},

	{
		text: 'Your sense of taste drops by 30% at high altitudes, making airplane food bland',
		description:
			'Low humidity and cabin pressure dry out nasal passages and reduce sensitivity to sweet and salty flavors, while loud engine noise can enhance the taste of umami.',
		sourceUrl:
			'https://www.travelandleisureasia.com/global/dining/food/why-food-tastes-different-on-an-airplane/'
	},

	/* INVALID SOURCE
	{
		text: 'The pits of cherries, apricots, and peaches contain a precursor to cyanide',
		description:
			'Stone fruit pits contain amygdalin, which converts to hydrogen cyanide when digested. While swallowing a whole pit is safe, chewing the kernels can be toxic.',
		sourceUrl: 'https://www.poison.org/articles/are-apricot-kernels-safe-191'
	},
	*/
	{
		text: 'Natural loofah sponges are actually dried gourds, not sea creatures',
		description:
			'Loofahs are the fibrous "skeleton" of the Luffa gourd, a relative of cucumbers. When young, the gourd is edible and tastes like summer squash.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Luffa'
	},
	/* INVALID SOURCE
	{
		text: 'Heinz ketchup must exit the bottle at 0.028 mph to pass quality control',
		description:
			'Heinz uses a device called a "quantifier" to test the thickness of their ketchup. If the sauce flows faster than 0.028 mph (about 0.5 inches per second), the batch is rejected.',
		sourceUrl:
			'https://www.campaignme.com/heinz-is-testing-drivers-to-see-if-they-can-match-the-speed-of-its-ketchup/'
	},
	*/
	/* INVALID SOURCE
	{
		text: "The word 'Dorito' is a Spanish derivative meaning 'little golden things'",
		description:
			'Coined by marketing executive Arch West, the name combines the Spanish word for gold (oro) with the suffix -ito to mean "little golden things."',
		sourceUrl:
			'https://www.huffingtonpost.co.uk/entry/what-does-doritos-stand-for_uk_616428d0e4b0972323f462a7'
	},
	*/

	/* INVALID SOURCE
	{
		text: 'Most wasabi served in restaurants is actually just dyed horseradish',
		description:
			'Real wasabi is expensive and difficult to grow, so most restaurants use a mixture of horseradish, mustard flour, and green food coloring instead.',
		sourceUrl: 'https://www.businessinsider.com/real-wasabi-is-expensive-and-hard-to-grow-2020-2'
	},
	*/
	{
		text: "A Pringles chip is shaped like a 'hyperbolic paraboloid'",
		description:
			'This specific mathematical shape allows Pringles to be stacked perfectly in their tube without breaking and keeps them stable on the conveyor belt.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Pringles'
	},
	/* INVALID SOURCE
	{
		text: 'An average ear of corn always has an even number of rows',
		description:
			'Corn ears typically have an even number of rows, usually 16. This is because corn kernels develop from spikelets that always form in pairs.',
		sourceUrl: 'https://ag.purdue.edu/agry/extension/Pages/Corn-Ear-Development.aspx'
	},
	*/
	{
		text: 'Scientists once turned peanut butter into diamonds using high pressure',
		description:
			'By subjecting carbon-rich peanut butter to extreme pressures higher than those at the center of the Earth, scientists successfully created diamonds.',
		sourceUrl: 'https://www.bbc.com/future/article/20141106-the-man-who-makes-diamonds'
	},
	{
		text: 'Grapes will create a fireball of plasma if sliced and microwaved',
		description:
			'Slicing a grape and microwaving it concentrates energy into a tiny bridge of skin, ionizing the air and creating a glowing ball of plasma.',
		sourceUrl: 'https://www.pnas.org/doi/10.1073/pnas.1818350116'
	},
	/* INVALID SOURCE
	{
		text: 'Onions make you cry because they release a gas that turns into sulfuric acid',
		description:
			'Cutting an onion releases a gas that reacts with the moisture in your eyes to create a tiny amount of sulfuric acid, triggering tears.',
		sourceUrl: 'https://www.pbs.org/newshour/science/just-ask-why-do-onions-make-us-cry'
	},
	*/
	{
		text: 'Garlic is a member of the lily family, just like onions and leeks',
		description:
			'Garlic belongs to the Amaryllis family, making it a cousin to lilies. Historically, it was classified directly in the lily family.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Garlic'
	},
	/* INVALID SOURCE
	{
		text: "The 'M's' on M&Ms are printed using edible vegetable-based ink",
		description:
			"The 'm' on each candy is printed using an edible, water-insoluble ink. This is why the letters will sometimes detach and float to the surface if you drop the candy in water.",
		sourceUrl: 'https://www.mms.com/en-us/faq'
	},
	*/

	/* INVALID SOURCE
	{
		text: 'Twinkies have a shelf life of about 45 days, not forever',
		description:
			'Despite legends of eternal life, modern Twinkies only stay fresh for about 25 to 45 days. They originally lasted just two days when they contained real dairy.',
		sourceUrl:
			'https://www.npr.org/sections/thesalt/2013/07/10/199141405/the-science-of-twinkies-how-do-they-last-so-darned-long'
	},
	*/
	{
		text: 'Coca-Cola originally contained a small amount of cocaine',
		description:
			'In 1885, the original formula used coca leaf extract containing cocaine. The drug was gradually reduced and eventually replaced with "spent" coca leaves by 1929.',
		sourceUrl: 'https://www.snopes.com/fact-check/cocaine-coca-cola/'
	},
	{
		text: "The name 'Spam' is a portmanteau of 'Spiced' and 'Ham'",
		description:
			"The name was chosen in a 1937 naming contest held by Hormel Foods. The winner received $100 for suggesting the contraction of 'Spiced Ham.'",
		sourceUrl: 'https://www.britannica.com/topic/Spam-food'
	},
	{
		text: 'Tofu is made by curdling soy milk and pressing the curds into blocks',
		description:
			'Similar to cheese-making, tofu is produced by adding a coagulant to soy milk to form curds, which are then pressed to remove liquid and create solid blocks.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Tofu'
	},
	{
		text: "The word 'salary' comes from the Latin word for salt",
		description:
			"The word 'salary' is derived from the Latin 'salarium,' an allowance given to Roman soldiers to purchase salt, which was a valuable commodity for food preservation.",
		sourceUrl: 'https://www.etymonline.com/word/salary'
	},
	/* INVALID SOURCE
	{
		text: "Black pepper was so valuable in ancient times it was known as 'black gold'",
		description:
			"Pepper was once so expensive and sought-after that it was used as currency to pay taxes, rent, and even ransoms, earning it the nickname 'black gold.'",
		sourceUrl: 'https://www.worldhistory.org/Black_Pepper/'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Vanilla is the only edible fruit of the orchid family',
		description:
			'With over 25,000 species, the orchid family is massive, but the vanilla bean is the only fruit from this family that is widely consumed by humans.',
		sourceUrl: 'https://www.aos.org/orchids/additional-resources/vanilla.aspx'
	},
	*/
	/* INVALID SOURCE
	{
		text: 'Saffron is the most expensive spice in the world by weight',
		description:
			'Saffron threads must be harvested by hand from crocus flowers. It takes about 75,000 flowers to produce just one pound of the dried spice.',
		sourceUrl: 'https://www.businessinsider.com/why-saffron-is-so-expensive-2019-10'
	},
	*/
	{
		text: "Tea was discovered when leaves blew into a Chinese emperor's boiling water",
		description:
			'According to legend, Emperor Shen Nong discovered tea in 2737 BCE when wild tea leaves accidentally blew into his pot of boiling water and he decided to taste the brew.',
		sourceUrl: 'https://en.wikipedia.org/wiki/History_of_tea'
	},
	{
		text: 'The sandwich is named after the 4th Earl of Sandwich',
		description:
			'John Montagu, the 4th Earl of Sandwich, famously ordered meat between two slices of bread so he could eat with one hand while gambling or working at his desk.',
		sourceUrl: 'https://www.britannica.com/topic/sandwich'
	},
	{
		text: 'Granny Smith apples are named after Maria Ann Smith who first grew them',
		description:
			'In 1868, Maria Ann "Granny" Smith discovered a chance seedling in her Australian orchard that produced the famous tart, green apples we know today.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Granny_Smith'
	},
	/* INVALID SOURCE
	{
		text: 'Pink Himalayan salt gets its color from trace amounts of iron oxide',
		description:
			"The salt's characteristic pink hue comes from small amounts of iron oxide (rust) and other minerals trapped within the crystals for millions of years.",
		sourceUrl: 'https://sites.uci.edu/mclachlanlab/2022/04/16/the-truth-behind-pink-himalayan-salt/'
	},
	*/
	{
		text: 'Quinoa is a seed and a relative of spinach and beets, not a grain',
		description:
			'Quinoa is technically a "pseudocereal" and a member of the Amaranthaceae family, making it a closer botanical relative to leafy greens than to wheat or rice.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Quinoa'
	},
	{
		text: 'Eggplants are technically berries, while raspberries and blackberries are not',
		description:
			'Botanically, eggplants are true berries because they develop from a single ovary. Raspberries are aggregate fruits made of many tiny individual drupelets.',
		sourceUrl: 'https://en.wikipedia.org/wiki/Berry_(botany)'
	}
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

export function getPersistentFact(): { fact: FoodFact; isNew: boolean } {
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
