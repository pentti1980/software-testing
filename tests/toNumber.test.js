import { jest } from '@jest/globals';
import toNumber from '../src/toNumber.js';

// Mock dependencies
jest.mock('../src/isObject.js', () => jest.fn((value) => typeof value === 'object' && value !== null));
jest.mock('../src/isSymbol.js', () => jest.fn((value) => typeof value === 'symbol'));

describe('toNumber.js', () => {
  test('returns the number as is for numeric inputs', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('converts decimal strings to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('0')).toBe(0);
    expect(toNumber('-123')).toBe(-123);
  });

  test('trims whitespace from string inputs', () => {
    expect(toNumber('   123   ')).toBe(123); // Trims whitespace
    expect(toNumber('   ')).toBe(0); // Only whitespace
  });

  test('handles valid and invalid binary strings', () => {
    expect(toNumber('0b101')).toBe(5); // Valid binary
    expect(toNumber('   0b101   ')).toBe(5); // Binary with spaces
    expect(toNumber('0b102')).toBeNaN(); // Invalid binary
    expect(toNumber('0bxyz')).toBeNaN(); // Invalid binary
  });

  test('handles valid and invalid octal strings', () => {
    expect(toNumber('0o123')).toBe(83); // Valid octal
    expect(toNumber('   0o123   ')).toBe(83); // Octal with spaces
    expect(toNumber('0o89')).toBeNaN(); // Invalid octal
  });

  test('handles invalid hexadecimal strings', () => {
    expect(toNumber('0x1g')).toBeNaN(); // Invalid hex
    expect(toNumber('   0x1g   ')).toBeNaN(); // Invalid hex with spaces
  });

  test('handles strings that are neither binary, octal, nor hexadecimal', () => {
    expect(toNumber('123')).toBe(123); // Valid decimal
    expect(toNumber('xyz')).toBeNaN(); // Invalid string
  });

  test('returns NaN for symbols', () => {
    expect(toNumber(Symbol('symbol'))).toBeNaN();
  });

  test('converts objects with valueOf method', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });

  test('converts objects without valueOf method', () => {
    const obj = { toString: () => '123' };
    expect(toNumber(obj)).toBe(123);
  });

  test('returns NaN for non-convertible objects', () => {
    const obj = {};
    expect(toNumber(obj)).toBeNaN();
  });

  test('handles null and undefined', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  test('handles empty strings and whitespace', () => {
    expect(toNumber('')).toBe(0);
    expect(toNumber('   ')).toBe(0);
  });

  test('handles edge cases', () => {
    expect(toNumber(true)).toBe(1); // Boolean `true` converts to 1
    expect(toNumber(false)).toBe(0); // Boolean `false` converts to 0
  });
});
