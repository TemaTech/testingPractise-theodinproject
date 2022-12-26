import { reverseString } from "./reverseString";

test('"hello" has to become "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('"1234" has to become "4321"', () => {
    expect(reverseString('1234')).toBe('4321');
});