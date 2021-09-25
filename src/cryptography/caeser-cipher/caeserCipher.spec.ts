import { caeserCipherEncrypt, caeserCipherDecrypt } from "./caeserCipher"

describe("Crypto: Caeser cipher", () => {
  it("works", () => {
    expect(caeserCipherEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 23)).toBe("XYZABCDEFGHIJKLMNOPQRSTUVW")
  })

  it('should not change a string with zero shift', () => {
    expect(caeserCipherEncrypt('abcd', 0)).toBe('abcd')
    expect(caeserCipherDecrypt('abcd', 0)).toBe('abcd')
  })

  it('should cipher a string with different shifts', () => {
    expect(caeserCipherEncrypt('abcde', 3)).toBe('defgh')
    expect(caeserCipherDecrypt('defgh', 3)).toBe('abcde')

    expect(caeserCipherEncrypt('abcde', 1)).toBe('bcdef')
    expect(caeserCipherDecrypt('bcdef', 1)).toBe('abcde')

    expect(caeserCipherEncrypt('xyz', 1)).toBe('yza')
    expect(caeserCipherDecrypt('yza', 1)).toBe('xyz')
  })

  it('should be case insensitive', () => {
    expect(caeserCipherEncrypt('ABCDE', 3)).toBe('defgh')
  })

  it('should correctly handle an empty strings', () => {
    expect(caeserCipherEncrypt('', 3)).toBe('')
  })

  it('should not cipher unknown chars', () => {
    expect(caeserCipherEncrypt('ab2cde', 3)).toBe('de2fgh')
    expect(caeserCipherDecrypt('de2fgh', 3)).toBe('ab2cde')
  })

  it('should encrypt and decrypt full phrases', () => {
    expect(caeserCipherEncrypt('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23))
      .toBe('qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald')

    expect(caeserCipherDecrypt('qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald', 23))
      .toBe('the quick brown fox jumps over the lazy dog')
  })
})
