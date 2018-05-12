const findSum = require('@questions/Q1');

describe('test Q1: findSum', () => {
  it('function should be defined with name "findSum"', () => {
    expect(findSum).toBeDefined();
  });
  it('when both parameters findSum(10,20) are number should return number (30)', () => {
    expect(findSum(10, 20)).toBe(30);
  });
  it('if one param is NaN(Not a Number), it should return null eg: findSum(10,"hello") is null and not 10hello', () => {
    expect(findSum(10,'hello')).toBeNull();
  })
  it('if no param is passed, it should return null', () => {
    expect(findSum()).toBeNull();
  })
  it('if negative param is passed, it shoul evaluate eg: findSum(-20,-10) is -30 ', () => {
    expect(findSum(-20, -10)).toBe(-30);
  })
  it('if floating point param is passed, it should evaluate finSum(1.65,1.303) is 2.953', () => {
    expect(findSum(1.65, 1.303)).toBeCloseTo(2.953);
  })

});
