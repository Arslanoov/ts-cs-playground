import { rabinKarp } from "./rabinKarpPure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/rabin-karp/__test__/rabinKarp.test.js
 * TODO: Write my own tests
 */
describe("Algo: Rabin Karp with Vanilla JS", () => {
  it("should find substring in a string", () => {
    expect(rabinKarp("", "")).toBe(0)
    expect(rabinKarp("a", "")).toBe(0)
    expect(rabinKarp("a", "a")).toBe(0)
    expect(rabinKarp("ab", "b")).toBe(1)
    expect(rabinKarp("abcbcglx", "abca")).toBe(-1)
    expect(rabinKarp("abcbcglx", "bcgl")).toBe(3)
    expect(rabinKarp("abcxabcdabxabcdabcdabcy", "abcdabcy")).toBe(15)
    expect(rabinKarp("abcxabcdabxabcdabcdabcy", "abcdabca")).toBe(-1)
    expect(rabinKarp("abcxabcdabxaabcdabcabcdabcdabcy", "abcdabca")).toBe(12)
    expect(rabinKarp("abcxabcdabxaabaabaaaabcdabcdabcy", "aabaabaaa")).toBe(11)
    expect(rabinKarp("^ !/\"#\"pp", " !/\"#\"pp")).toBe(1)
  })

  it("should work with bigger texts", () => {
    const text = "Lorem Ipsum is simply dummy text of the printing and "
      + "typesetting industry. Lorem Ipsum has been the industry\"s standard "
      + "dummy text ever since the 1500s, when an unknown printer took a "
      + "galley of type and scrambled it to make a type specimen book. It "
      + "has survived not only five centuries, but also the leap into "
      + "electronic typesetting, remaining essentially unchanged. It was "
      + "popularised in the 1960s with the release of Letraset sheets "
      + "containing Lorem Ipsum passages, and more recently with desktop"
      + "publishing software like Aldus PageMaker including versions of Lorem "
      + "Ipsum."

    expect(rabinKarp(text, "Lorem")).toBe(0)
    expect(rabinKarp(text, "versions")).toBe(549)
    expect(rabinKarp(text, "versions of Lorem Ipsum.")).toBe(549)
    expect(rabinKarp(text, "versions of Lorem Ipsum:")).toBe(-1)
    expect(rabinKarp(text, "Lorem Ipsum passages, and more recently with")).toBe(446)
  })
})