import { jest } from '@jest/globals'; // Import Jest globals for mocking
import reduce from '../src/reduce.js'; // Import the function to test



// Tests
describe('reduce.js', () => {
  test('sums numbers in an array', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).toBe(10);
  });

  test('concatenates strings in an array', () => {
    const result = reduce(['a', 'b', 'c'], (concat, char) => concat + char, '');
    expect(result).toBe('abc');
  });

  test('sums values in an object', () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  test('groups keys by values in an object', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });

  test('returns undefined for empty array without accumulator', () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).toBeUndefined();
  });

  test('uses first element as accumulator if not provided (array)', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
    expect(result).toBe(10); // Same as sum([1, 2, 3, 4])
  });

  test('returns accumulator for empty array with initial value', () => {
    const result = reduce([], (sum, n) => sum + n, 10);
    expect(result).toBe(10);
  });

  test('returns accumulator for empty object with initial value', () => {
    const result = reduce({}, (sum, n) => sum + n, 5);
    expect(result).toBe(5);
  });

  test('throws or returns undefined for null or undefined input', () => {
    expect(() => reduce(null, (sum, n) => sum + n)).toThrow();
    expect(() => reduce(undefined, (sum, n) => sum + n)).toThrow();
  });
});
