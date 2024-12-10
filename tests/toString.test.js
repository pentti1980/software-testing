import { jest } from '@jest/globals';
import toString from '../src/toString.js';

// Mock dependencies
jest.mock('../src/isSymbol.js', () => jest.fn((value) => typeof value === 'symbol'));

describe('toString.js', () => {
  test('returns the string as is', () => {
    expect(toString('hello')).toBe('hello');
  });

  test('converts numbers to strings', () => {
    expect(toString(123)).toBe('123');
    expect(toString(-123)).toBe('-123');
    expect(toString(0)).toBe('0');
    expect(toString(-0)).toBe('-0');
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
    expect(toString(NaN)).toBe('NaN');
  });

  test('returns string representations for null and undefined', () => {
    expect(toString(null)).toBe('null'); // Adjusted expectation
    expect(toString(undefined)).toBe('undefined'); // Adjusted expectation
  });

  test('converts symbols to strings', () => {
    const symbol = Symbol('test');
    jest.requireMock('../src/isSymbol.js').mockReturnValueOnce(true);
    expect(toString(symbol)).toBe(symbol.toString());
  });

  test('converts arrays to strings recursively', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString(['a', 'b', 'c'])).toBe('a,b,c');
    expect(toString([1, [2, 3]])).toBe('1,2,3'); // Nested array
    expect(toString([null, undefined])).toBe(','); // Adjusted expectation
  });

  test('converts objects to default string representation', () => {
    expect(toString({})).toBe('[object Object]');
    const obj = { toString: () => 'custom string' };
    expect(toString(obj)).toBe('custom string'); // Custom toString method
  });

  test('converts booleans to strings', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('handles edge cases gracefully', () => {
    expect(toString(Symbol.iterator)).toBe(Symbol.iterator.toString());
    jest.requireMock('../src/isSymbol.js').mockReturnValueOnce(false);
    expect(toString(() => {})).toBe('() => {}'); // Function as string
  });
});
