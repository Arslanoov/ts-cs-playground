import { polynomialHash, polynomialRoll, BASE } from "./polynomialHashPure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/polynomial-hash/__test__/PolynomialHash.test.js
 * TODO: Write my own tests
 */
describe("Crypto: Polynomial hash with Vanilla JS", () => {
  it("should calculate new hash based on previous one", () => {
    const bases = [3, 79, 101, 3251, 13229, 122743, 3583213]
    const mods = [79, 101]
    const frameSizes = [5, 20]

    const text = "Lorem Ipsum is simply dummy text of the printing and "
      + "typesetting industry. Lorem Ipsum has been the industry\"s standard "
      + "galley of type and \u{ffff} scrambled it to make a type specimen book. It "
      + "electronic 耀 typesetting, remaining essentially unchanged. It was "
      // + "popularised in the \u{20005} \u{20000}1960s with the release of Letraset sheets "
      + "publishing software like Aldus PageMaker 耀 including versions of Lorem."

    // Check hashing for different prime base.
    bases.forEach((base) => {
      mods.forEach((modulus) => {
        frameSizes.forEach((frameSize) => {
          let previousWord = text.substr(0, frameSize)
          let previousHash = polynomialHash(previousWord, base, modulus)

          for (let frameShift = 1; frameShift < (text.length - frameSize); frameShift += 1) {
            const currentWord = text.substr(frameShift, frameSize)
            const currentHash = polynomialHash(currentWord, base, modulus)
            const currentRollingHash = polynomialRoll(previousHash, previousWord, currentWord, base, modulus)

            expect(currentRollingHash).toBe(currentHash)

            previousWord = currentWord
            previousHash = currentHash
          }
        })
      })
    })
  })

  it("should generate numeric hashed less than 100", () => {
    expect(polynomialHash("Some long text that is used as a key", BASE, 100)).toBe(41)
    expect(polynomialHash("Test", BASE, 100)).toBe(92)
    expect(polynomialHash("a", BASE, 100)).toBe(97)
    expect(polynomialHash("b", BASE, 100)).toBe(98)
    expect(polynomialHash("c", BASE, 100)).toBe(99)
    expect(polynomialHash("d", BASE, 100)).toBe(0)
    expect(polynomialHash("e", BASE, 100)).toBe(1)
    expect(polynomialHash("ab", BASE, 100)).toBe(87)
    expect(polynomialHash("\u{20000}", BASE, 100)).toBe(92)
  })
})