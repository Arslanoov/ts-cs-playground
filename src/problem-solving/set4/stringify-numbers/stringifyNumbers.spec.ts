import { stringifyNumbers } from "./stringifyNumbers"

/**
 * Should convert all number values in object to string
 */

describe("Stringify numbers function", () => {
  it("works", () => {
    expect(stringifyNumbers({
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66
        }
      }
    })).toStrictEqual({
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66"
        }
      }
    })
  })
})
