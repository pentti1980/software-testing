import every from '../src/every.js';

describe('every.js', () => {
  test('returns true for an empty array (vacuous truth)', () => {
    expect(every([], Boolean)).toBe(true);
  });

  test('returns true when all elements satisfy the predicate', () => {
    expect(every([1, 2, 3, 4], (n) => n > 0)).toBe(true); // All positive numbers
    expect(every(['a', 'b', 'c'], (char) => typeof char === 'string')).toBe(true); // All strings
  });

  test('returns false when at least one element does not satisfy the predicate', () => {
    expect(every([1, 2, 3, -1], (n) => n > 0)).toBe(false); // Contains a negative number
    expect(every(['a', 'b', 3], (char) => typeof char === 'string')).toBe(false); // Contains a number
  });

  test('handles null or undefined input gracefully', () => {
    expect(every(null, Boolean)).toBe(true); // Null input
    expect(every(undefined, Boolean)).toBe(true); // Undefined input
  });

  test('handles arrays with falsy values correctly', () => {
    expect(every([0, 1, 2], (n) => n >= 0)).toBe(true); // 0 satisfies predicate
    expect(every([false, true], (bool) => typeof bool === 'boolean')).toBe(true); // Both are booleans
    expect(every([0, false, null], Boolean)).toBe(false); // Contains falsy values
  });

  test('handles custom predicates', () => {
    const isEven = (n) => n % 2 === 0;
    expect(every([2, 4, 6], isEven)).toBe(true); // All even
    expect(every([2, 3, 6], isEven)).toBe(false); // Contains an odd number
  });
});
