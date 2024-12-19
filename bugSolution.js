function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null

//Test Cases
describe('foo', () => {
  it('should return null if a is null', () => {
    expect(foo(null, 2)).toBe(null);
  });
  it('should return null if b is null', () => {
    expect(foo(1, null)).toBe(null);
  });
  it('should return null if both a and b are null', () => {
    expect(foo(null, null)).toBe(null);
  });
  it('should return the sum of a and b if both are numbers', () => {
    expect(foo(1, 2)).toBe(3);
  });
});