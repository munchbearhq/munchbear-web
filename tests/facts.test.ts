import { describe, it } from 'node:test';
import assert from 'node:assert';
import { foodFacts, heroWords } from '../src/lib/data/facts.js';

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
