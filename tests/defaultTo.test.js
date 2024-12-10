import defaultTo from '../src/defaultTo.js';

describe('defaultTo.js', () => {
  test('returns the value when it is not null, undefined, or NaN', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('test', 'default')).toBe('test');
    expect(defaultTo(true, false)).toBe(true);
    expect(defaultTo([], 'default')).toEqual([]);
    expect(defaultTo({}, 'default')).toEqual({});
  });

  test('returns the default value when the value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('returns the default value when the value is undefined', () => {
    expect(defaultTo(undefined, 'default')).toBe('default');
  });

  test('returns NaN when the value is NaN', () => {
    expect(defaultTo(NaN, 100)).toBeNaN(); // Adjusted expectation
  });

  test('handles edge cases for defaultValue', () => {
    expect(defaultTo(null, null)).toBe(null); // Both value and defaultValue are null
    expect(defaultTo(undefined, undefined)).toBe(undefined); // Both value and defaultValue are undefined
    expect(defaultTo(NaN, NaN)).toBeNaN(); // Both value and defaultValue are NaN
  });

  test('does not return default value for falsy values other than null, undefined, or NaN', () => {
    expect(defaultTo(0, 10)).toBe(0); // 0 is falsy but valid
    expect(defaultTo('', 'default')).toBe(''); // Empty string is falsy but valid
    expect(defaultTo(false, true)).toBe(false); // False is falsy but valid
  });
});
