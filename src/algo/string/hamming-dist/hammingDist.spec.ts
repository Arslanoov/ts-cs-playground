import { hammingDist } from "./hammingDist";

describe("Algo: Hamming Dist", () => {
  it("works", () => {
    expect(hammingDist("test1111test", "test2222test")).toEqual(4)
    expect(hammingDist("karolin", "kathrin")).toEqual(3)
    expect(hammingDist("1234567", "1234555")).toEqual(2)
  })
})
