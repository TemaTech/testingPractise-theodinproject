import { add, subtract, divide, multiply } from "./calculator";

test('Add: 1 + 2 returns 3', () => {
    expect(add(1, 2)).toBe(3);
})

test('Subtract: 2 - 1 returns 1', () => {
    expect(subtract(2, 1)).toBe(1);
})

test('Divide: 4 / 2 returns 2', () => {
    expect(divide(4, 2)).toBe(2);
})

test('Multiply: 3 * 2 returns 6', () => {
    expect(multiply(3, 2)).toBe(6);
})