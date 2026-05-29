import { describe, it } from 'node:test';
import assert from 'node:assert';
import { foodFacts, heroWords, getPersistentFact } from '../src/lib/data/facts.js';

describe('foodFacts data', () => {
	it('should be an array', () => {
		assert.strictEqual(Array.isArray(foodFacts), true);
	});

	it('should not be empty', () => {
		assert.strictEqual(foodFacts.length > 0, true);
	});

	it('should have the correct structure', () => {
		foodFacts.forEach((fact) => {
			assert.strictEqual(typeof fact.text, 'string');
			assert.strictEqual(fact.text.length > 0, true);
			if (fact.description) {
				assert.strictEqual(typeof fact.description, 'string');
				assert.strictEqual(fact.description.length > 0, true);
			}
			if (fact.sourceUrl) {
				assert.strictEqual(typeof fact.sourceUrl, 'string');
				assert.strictEqual(fact.sourceUrl.startsWith('http'), true);
			}
		});
	});

	it('should have some facts with descriptions and sourceUrls', () => {
		const withDescription = foodFacts.filter((f) => f.description);
		const withSource = foodFacts.filter((f) => f.sourceUrl);
		assert.ok(withDescription.length >= 3);
		assert.ok(withSource.length >= 3);
	});
});

describe('getPersistentFact', () => {
	it('should return a valid fact (or empty on SSR)', () => {
		const { fact, isNew } = getPersistentFact();
		if (typeof window === 'undefined') {
			assert.strictEqual(fact.text, '');
		} else {
			assert.ok(foodFacts.some((f) => f.text === fact.text));
		}
		assert.strictEqual(typeof isNew, 'boolean');
	});

	it('should persist the same fact on the same day', () => {
		// Simple mock for localStorage
		const storage = new Map<string, string>();
		const mockLocalStorage = {
			getItem: (key: string) => storage.get(key) || null,
			setItem: (key: string, value: string) => storage.set(key, value)
		};

		// Define window and localStorage on global
		const originalWindow = global.window;
		const originalLocalStorage = global.localStorage;

		// @ts-expect-error - mocking global for testing
		global.window = {};
		// @ts-expect-error - mocking global for testing
		global.localStorage = mockLocalStorage;

		try {
			const { fact: fact1, isNew: isNew1 } = getPersistentFact();
			const { fact: fact2, isNew: isNew2 } = getPersistentFact();

			assert.strictEqual(fact1.text, fact2.text);
			assert.strictEqual(isNew1, true);
			assert.strictEqual(isNew2, false);
			assert.ok(storage.has('munchbear_daily_fact'));

			const stored = JSON.parse(storage.get('munchbear_daily_fact')!);
			assert.strictEqual(stored.fact.text, fact1.text);
			assert.strictEqual(stored.date, new Date().toDateString());
		} finally {
			// Clean up
			global.window = originalWindow;
			global.localStorage = originalLocalStorage;
		}
	});
});

describe('heroWords data', () => {
	it('should be an array', () => {
		assert.strictEqual(Array.isArray(heroWords), true);
	});

	it('should not be empty', () => {
		assert.strictEqual(heroWords.length > 0, true);
	});

	it('should contain strings', () => {
		heroWords.forEach((word) => {
			assert.strictEqual(typeof word, 'string');
			assert.strictEqual(word.length > 0, true);
		});
	});
});
