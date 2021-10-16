import { hillCipherEncrypt } from "./hillCipherPure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/hill-cipher/_test_/hillCipher.test.js
 * TODO: Write my own tests
 */
describe("Crypto: Hill cipher with Vanilla JS", () => {
  it("should throw an error when message or keyString contains none letter character", () => {
    const invalidCharacterInMessage = () => {
      hillCipherEncrypt("hell3", "helloworld")
    }

    const invalidCharacterInKeyString = () => {
      hillCipherEncrypt("hello", "hel12world")
    }

    expect(invalidCharacterInMessage).toThrowError("Message and key should contain only cover letter")
    expect(invalidCharacterInKeyString).toThrowError("Message and key should contain only cover letter")
  })

  it(
    "should throw an error when the length of the keyString has a square root which is not integer",
    () => {
    const invalidLengthOfKeyString = () => {
      hillCipherEncrypt("ab", "ab")
    }

    expect(invalidLengthOfKeyString).toThrowError("Invalid key",)
  })

  it(
    "should throw an error when the length of the keyString does not equal to the power of length of the message",
    () => {
    const invalidLengthOfKeyString = () => {
      hillCipherEncrypt("ab", "aaabbbccc")
    }

    expect(invalidLengthOfKeyString).toThrowError("Incorrect key length")
  })

  it("should encrypt passed message using Hill Cipher", () => {
    expect(hillCipherEncrypt("ACT", "GYBNQKURP")).toBe("POH")
    expect(hillCipherEncrypt("CAT", "GYBNQKURP")).toBe("FIN")
    expect(hillCipherEncrypt("GFG", "HILLMAGIC")).toBe("SWK")
  })
})
