import { ceasarCipher } from "./cipher";

test("Ceasar cipher with a shift of 1. The string before the cipher: Hello world, I'm Chernysh Artem, the string after: Ifmmp xpsme, J'n Difsozti Bsufn", () => {
    expect(ceasarCipher("Hello world, I'm Chernysh Artem", 1)).toBe("Ifmmp xpsme, J'n Difsozti Bsufn");
})