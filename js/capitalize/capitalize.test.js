import { capitalize } from "./capitalize";

test('"hello" has to become "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('"Hello" has to become "Hello"', () => {
    expect(capitalize('Hello')).toBe('Hello');
});

test('"HELLO" has to become "HELLO"', () => {
    expect(capitalize('HELLO')).toBe('HELLO');
});

test('"hello world" has to become "Hello world"', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('"1234" has to become "1234"', () => {
    expect(capitalize('1234')).toBe('1234');
});