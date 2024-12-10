import castArray from '../src/castArray.js';

describe('castArray.js', () => {
  test('wraps a number in an array', () => {
    const result = castArray(1);
    expect(result).toEqual([1]);
  });

  test('wraps a string in an array', () => {
    const result = castArray('abc');
    expect(result).toEqual(['abc']);
  });

  test('wraps an object in an array', () => {
    const obj = { a: 1 };
    const result = castArray(obj);
    expect(result).toEqual([obj]);
  });

  test('wraps null in an array', () => {
    const result = castArray(null);
    expect(result).toEqual([null]);
  });

  test('wraps undefined in an array', () => {
    const result = castArray(undefined);
    expect(result).toEqual([undefined]);
  });

  test('returns an empty array if no arguments are passed', () => {
    const result = castArray();
    expect(result).toEqual([]);
  });

  test('returns the same array if the input is already an array', () => {
    const array = [1, 2, 3];
    const result = castArray(array);
    expect(result).toBe(array); // Ensure it's the same reference
  });

  test('handles an empty array', () => {
    const array = [];
    const result = castArray(array);
    expect(result).toBe(array); // Ensure it's the same reference
  });
});
