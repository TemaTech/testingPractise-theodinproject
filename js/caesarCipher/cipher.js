const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'
];

function shiftAlphabet(n) {
    const newAlphabet = [];

    for (let i = 0; i < alphabet.length; i++) {
        let index;
        i + n > 25 ? index = i + n - 26 : index = i + n;
        newAlphabet.push(alphabet[index]);
    }

    return newAlphabet;
}

export function ceasarCipher(string, n) {
    const shiftedAlphabet = shiftAlphabet(n);
    let message = string.split('');
    for (let i = 0; i < message.length; i++) {
        let isUpper = message[i] !== message[i].toLowerCase();
        if (/[a-zA-z]/.test(message[i])) {
          let indexInNormalAlphabet = alphabet.indexOf(message[i].toLowerCase());
          message[i] = shiftedAlphabet[indexInNormalAlphabet];
          if (isUpper) message[i] = message[i].toUpperCase();
        }
        if (isUpper) message[i] = message[i].toUpperCase();
      }      
    return message.join('');
}