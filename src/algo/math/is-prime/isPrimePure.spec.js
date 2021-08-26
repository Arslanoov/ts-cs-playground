import { isPrime } from "./isPrimePure"

describe("Algo: is prime with Vanilla JS", () => {
  it("works", () => {
    expect(isPrime(1)).toBe(false)
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(11)).toBe(true)

    expect(isPrime(0.5)).toBe(false)
    expect(isPrime(-1)).toBe(false)
    expect(isPrime(0)).toBe(false)
    expect(isPrime(4)).toBe(false)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(12)).toBe(false)
    expect(isPrime(14)).toBe(false)
  })
})
