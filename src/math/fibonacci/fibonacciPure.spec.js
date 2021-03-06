import { fib, fibValue, fibRecursionValue, fibFormula } from "./fibonacciPure"

describe("Algo: fib number with Vanilla JS", () => {
  test("iteration method with path", () => {
    expect(fib(1)).toEqual([1])
    expect(fib(2)).toEqual([1, 1])
    expect(fib(3)).toEqual([1, 1, 2])
    expect(fib(4)).toEqual([1, 1, 2, 3])
    expect(fib(5)).toEqual([1, 1, 2, 3, 5])
    expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(7)).toEqual([1, 1, 2, 3, 5, 8, 13])
    expect(fib(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21])
    expect(fib(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })

  test("iteration method without path", () => {
    expect(fibValue(1)).toEqual(1)
    expect(fibValue(2)).toEqual(1)
    expect(fibValue(3)).toEqual(2)
    expect(fibValue(4)).toEqual(3)
    expect(fibValue(5)).toEqual(5)
    expect(fibValue(6)).toEqual(8)
    expect(fibValue(7)).toEqual(13)
    expect(fibValue(8)).toEqual(21)
    expect(fibValue(9)).toEqual(34)
    expect(fibValue(10)).toEqual(55)
  })

  test("recursion method without path", () => {
    expect(fibRecursionValue(1)).toEqual(1)
    expect(fibRecursionValue(2)).toEqual(1)
    expect(fibRecursionValue(3)).toEqual(2)
    expect(fibRecursionValue(4)).toEqual(3)
    expect(fibRecursionValue(5)).toEqual(5)
    expect(fibRecursionValue(6)).toEqual(8)
    expect(fibRecursionValue(7)).toEqual(13)
    expect(fibRecursionValue(8)).toEqual(21)
    expect(fibRecursionValue(9)).toEqual(34)
    expect(fibRecursionValue(10)).toEqual(55)
  })

  test("formula", () => {
    expect(fibFormula(1)).toEqual(1)
    expect(fibFormula(2)).toEqual(1)
    expect(fibFormula(3)).toEqual(2)
    expect(fibFormula(4)).toEqual(3)
    expect(fibFormula(5)).toEqual(5)
    expect(fibFormula(6)).toEqual(8)
    expect(fibFormula(7)).toEqual(13)
    expect(fibFormula(8)).toEqual(21)
    expect(fibFormula(9)).toEqual(34)
    expect(fibFormula(10)).toEqual(55)
  })
})
