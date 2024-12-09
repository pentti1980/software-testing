import filter from '../src/filter.js';

describe('filter.js', () => {
  test('filters an array based on a predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  test('returns an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (n) => n > 10);
    expect(result).toEqual([]);
  });

  test('returns the original array if all elements match the predicate', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (n) => n > 0);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('returns an empty array if the input array is empty', () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  test('returns an empty array if input is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test('handles predicates that always return true', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, () => true);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('handles predicates that always return false', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, () => false);
    expect(result).toEqual([]);
  });

  test('handles non-array input gracefully', () => {
    const result = filter('not an array', () => true);
    expect(result).toEqual(['n', 'o', 't', ' ', 'a', 'n', ' ', 'a', 'r', 'r', 'a', 'y']);
  });

  test('does not mutate the original array', () => {
    const numbers = [1, 2, 3, 4];
    const original = [...numbers];
    filter(numbers, (n) => n > 2);
    expect(numbers).toEqual(original);
  });
});
