export function capitalize(string) {
    const array = string.split('');
    const firstLetter = array[0].toUpperCase();
    array[0] = firstLetter;
    const output = array.join('');
    return output;
}