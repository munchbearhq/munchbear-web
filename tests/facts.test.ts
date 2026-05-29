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
		});
	});
});

describe('getPersistentFact', () => {
	it('should return a valid fact', () => {
		const fact = getPersistentFact();
		assert.ok(foodFacts.some((f) => f.text === fact.text));
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
			const fact1 = getPersistentFact();
			const fact2 = getPersistentFact();

			assert.strictEqual(fact1.text, fact2.text);
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
