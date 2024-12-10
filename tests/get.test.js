import get from '../src/get.js';

describe('get.js', () => {
  test('retrieves a value at a given path', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = get(obj, 'a.b.c');
    expect(result).toBe(42);
  });

  test('returns undefined for non-existent path', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = get(obj, 'a.b.x');
    expect(result).toBeUndefined();
  });

  test('returns default value if resolved value is undefined', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = get(obj, 'a.b.x', 'default');
    expect(result).toBe('default');
  });

  test('works with array paths', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = get(obj, ['a', 'b', 'c']);
    expect(result).toBe(42);
  });

  test('handles null or undefined object', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
    expect(get(null, 'a.b.c', 'default')).toBe('default');
  });

  test('retrieves top-level property', () => {
    const obj = { a: 42 };
    const result = get(obj, 'a');
    expect(result).toBe(42);
  });

  test('handles empty path', () => {
    const obj = { a: 42 };
    const result = get(obj, '');
    expect(result).toBeUndefined();
  });

  test('returns default value if object is null', () => {
    const result = get(null, 'a.b.c', 'default');
    expect(result).toBe('default');
  });
});
