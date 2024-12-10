import words from '../src/words.js';

describe('words.js', () => {
  test('splits a string into words (default behavior)', () => {
    const result = words('fred, barney, & pebbles');
    expect(result).toEqual(['fred,', 'barney,', '&', 'pebbles']);
  });

  test('splits a string using a custom pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(result).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('handles Unicode strings', () => {
    const result = words('你好，世界');
    expect(result).toEqual(['你好，世界']);
  });

  test('returns an empty array for empty strings', () => {
    const result = words('');
    expect(result).toEqual([]);
  });

  test('returns an empty array for null or undefined inputs', () => {
    expect(words(null || '')).toEqual([]);
    expect(words(undefined || '')).toEqual([]);
  });

  test('splits a string with numbers and special characters', () => {
    const result = words('foo123bar!@#', /[a-z]+/g);
    expect(result).toEqual(['foo', 'bar']);
  });

  test('handles ASCII-only mixed-case strings', () => {
    const result = words('CamelCase and snake_case');
    expect(result).toEqual(['CamelCase', 'and', 'snake_case']);
  });

  test('handles Unicode mixed-case strings', () => {
    const result = words('你好世界 and helloWorld');
    expect(result).toEqual(['你好世界', 'and', 'helloWorld']);
  });

  test('handles ASCII words without Unicode characters', () => {
    const result = words('simple text');
    expect(result).toEqual(['simple', 'text']);
  });

  test('handles a custom pattern for splitting', () => {
    const result = words('one-two-three', /[^-]+/g);
    expect(result).toEqual(['one', 'two', 'three']);
  });

  test('splits an empty string with a custom pattern', () => {
    const result = words('', /[^-]+/g);
    expect(result).toEqual([]);
  });
});
