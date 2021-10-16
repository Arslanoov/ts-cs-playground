import { caesarCipherDecrypt, caesarCipherEncrypt } from "./caesarCipher"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/caesar-cipher/__test__/caesarCipher.test.js
 * TODO: Write my own tests
 */
describe("Crypto: Caesar cipher", () => {
  it("should not change a string with zero shift", () => {
    expect(caesarCipherEncrypt("abcd", 0)).toBe("abcd");
    expect(caesarCipherDecrypt("abcd", 0)).toBe("abcd");
  });

  it("should cipher a string with different shifts", () => {
    expect(caesarCipherEncrypt("abcde", 3)).toBe("defgh");
    expect(caesarCipherDecrypt("defgh", 3)).toBe("abcde");

    expect(caesarCipherEncrypt("abcde", 1)).toBe("bcdef");
    expect(caesarCipherDecrypt("bcdef", 1)).toBe("abcde");

    expect(caesarCipherEncrypt("xyz", 1)).toBe("yza");
    expect(caesarCipherDecrypt("yza", 1)).toBe("xyz");
  });

  it("should be case insensitive", () => {
    expect(caesarCipherEncrypt("ABCDE", 3)).toBe("DEFGH");
  });

  it("should correctly handle an empty strings", () => {
    expect(caesarCipherEncrypt("", 3)).toBe("");
  });

  it("should not cipher unknown chars", () => {
    expect(caesarCipherEncrypt("ab2cde", 3)).toBe("de2fgh");
    expect(caesarCipherDecrypt("de2fgh", 3)).toBe("ab2cde");
  });

  it("should encrypt and decrypt full phrases", () => {
    expect(caesarCipherEncrypt("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 23))
      .toBe("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD");

    expect(caesarCipherDecrypt("qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald", 23))
      .toBe("the quick brown fox jumps over the lazy dog");
  });
})
