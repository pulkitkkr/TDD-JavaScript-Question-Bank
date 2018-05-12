var calculateFactorial = require('@questions/Q2')
describe('Tesing Factorial Function', () => {
  test('Function Name should be "calculateFactorial".', () => {
    expect(typeof(calculateFactorial)).toBe('function');
  });
  test('Factorial of integer like 5 should return number (here 120)', () => {
    expect(calculateFactorial(5)).toBe(120);
  });
  test('Factorial of negative number should be null', () => {
    expect(calculateFactorial(-5)).toBeNull();
  });
  test('Factorial of 0 should be 1', () => {
    expect(calculateFactorial(0)).toBe(1);
  });
  test('Factorial of floating point number like 5.5 should be null', () => {
    expect(calculateFactorial(5.5)).toBeNull();
  });
  test('If a string is passed as parameter eg. calculateFactorial("abc"), it should return null', () => {
    expect(calculateFactorial('abc')).toBeNull();
  });
});
