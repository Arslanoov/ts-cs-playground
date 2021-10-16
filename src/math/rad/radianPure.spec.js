import { degToRad, radToDeg } from "./radianPure"

describe("Algo: deg with Vanilla JS", () => {
  test("degree to radian", () => {
    expect(degToRad(0)).toBe(0)
    expect(degToRad(45)).toBe(Math.PI / 4)
    expect(degToRad(90)).toBe(Math.PI / 2)
    expect(degToRad(180)).toBe(Math.PI)
    expect(degToRad(360)).toBe(2 * Math.PI)
  })

  test("radian to degree", () => {
    expect(radToDeg(0)).toBe(0)
    expect(radToDeg(Math.PI / 4)).toBe(45)
    expect(radToDeg(Math.PI / 2)).toBe(90)
    expect(radToDeg(Math.PI)).toBe(180)
    expect(radToDeg(2 * Math.PI)).toBe(360)
  })
})
