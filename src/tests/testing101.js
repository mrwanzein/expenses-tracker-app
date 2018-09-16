const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;
const substraction = (a, b) => a - b;

// test() initialize jest testing suites. 1 test file = 1 suite
test('should add two numbers', () => {
    const result = add(4,5);
    expect(result).toBe(9);
});

test('should generate a greeting message', () => {
    const result = generateGreeting('Joe');
    expect(result).toBe('Hello Joe!');
});

test('should substract two numbers', () => {
    const result = substraction(4, 6);
    expect(result).toBe(-2);
});

