import { describe, it } from 'node:test';
import assert from 'node:assert';
import { foodFacts } from '../src/lib/data/facts.js';

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
