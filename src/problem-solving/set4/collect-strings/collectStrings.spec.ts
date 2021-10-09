import { collectStrings } from "./collectStrings"

/**
 * Should return array of all strings in object
 */

describe("Collect strings function", () => {
  it("works", () => {
    expect(collectStrings({
      stuff: "foo",
      data: {
        val: {
          thing: {
            info: "bar",
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: "baz"
              }
            }
          }
        }
      }
    })).toStrictEqual(["foo", "bar", "baz"])
  })
})
