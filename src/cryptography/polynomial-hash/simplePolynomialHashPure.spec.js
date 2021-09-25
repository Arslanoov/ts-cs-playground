import { simplePolynomialHash, simplePolynomialRoll } from "./simplePolynomialHashPure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/polynomial-hash/__test__/SimplePolynomialHash.test.js
 * TODO: Write my own tests
 */
describe("Crypto: Simple Polynomial hash with Vanilla JS", () => {
  it('should calculate new hash based on previous one', () => {
    const bases = [3, 5]
    const frameSizes = [5, 10]

    const text = 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s standard '
      + 'galley of type and \u{ffff} scrambled it to make a type specimen book. It '
      + 'electronic 耀 typesetting, remaining essentially unchanged. It was '
      + 'popularised in the 1960s with the release of Letraset sheets '
      + 'publishing software like Aldus 耀 PageMaker including versions of Lorem.'

    bases.forEach((base) => {
      frameSizes.forEach((frameSize) => {
        let previousWord = text.substr(0, frameSize)
        let previousHash = simplePolynomialHash(previousWord, base)

        for (let frameShift = 1; frameShift < (text.length - frameSize); frameShift += 1) {
          const currentWord = text.substr(frameShift, frameSize)
          const currentHash = simplePolynomialHash(currentWord, base)
          const currentRollingHash = simplePolynomialRoll(previousHash, previousWord, currentWord, base)

          expect(currentRollingHash).toBe(currentHash)

          previousWord = currentWord
          previousHash = currentHash
        }
      })
    })
  })

  it('should generate numeric hashed', () => {
    expect(simplePolynomialHash('Test')).toBe(604944)
    expect(simplePolynomialHash('a')).toBe(97)
    expect(simplePolynomialHash('b')).toBe(98)
    expect(simplePolynomialHash('c')).toBe(99)
    expect(simplePolynomialHash('d')).toBe(100)
    expect(simplePolynomialHash('e')).toBe(101)
    expect(simplePolynomialHash('ab')).toBe(1763)
    expect(simplePolynomialHash('abc')).toBe(30374)
  })
})