import { DigitalTreeNode as TrieNode, DigitalTree as Trie } from "./DigitalTreePure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie/__test__/TrieNode.test.js
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie/__test__/Trie.test.js
 * TODO: Write own tests
 */
describe("DigitalTreeNode with Vanilla JS", () => {
  it("should create trie node", () => {
    const trieNode = new TrieNode("c", true)

    expect(trieNode.character).toBe("c")
    expect(trieNode.isCompleteWord).toBe(true)
    expect(trieNode.toString()).toBe("c*")
  })

  it("should add child nodes", () => {
    const trieNode = new TrieNode("c")

    trieNode.addChild("a", true)
    trieNode.addChild("o")

    expect(trieNode.toString()).toBe("c:a,o")
  })

  it("should get child nodes", () => {
    const trieNode = new TrieNode("c")

    trieNode.addChild("a")
    trieNode.addChild("o")

    expect(trieNode.getChild("a").toString()).toBe("a")
    expect(trieNode.getChild("a").character).toBe("a")
    expect(trieNode.getChild("o").toString()).toBe("o")
    expect(trieNode.getChild("b")).toBeUndefined()
  })

  it("should check if node has children", () => {
    const trieNode = new TrieNode("c")

    expect(trieNode.hasChildren()).toBe(false)

    trieNode.addChild("a")

    expect(trieNode.hasChildren()).toBe(true)
  })

  it("should check if node has specific child", () => {
    const trieNode = new TrieNode("c")

    trieNode.addChild("a")
    trieNode.addChild("o")

    expect(trieNode.hasChild("a")).toBe(true)
    expect(trieNode.hasChild("o")).toBe(true)
    expect(trieNode.hasChild("b")).toBe(false)
  })

  it("should suggest next children", () => {
    const trieNode = new TrieNode("c")

    trieNode.addChild("a")
    trieNode.addChild("o")

    expect(trieNode.suggestChildren()).toEqual(["a", "o"])
  })

  it("should delete child node if the child node has NO children", () => {
    const trieNode = new TrieNode("c")
    trieNode.addChild("a")
    expect(trieNode.hasChild("a")).toBe(true)

    trieNode.removeChild("a")
    expect(trieNode.hasChild("a")).toBe(false)
  })

  it("should NOT delete child node if the child node has children", () => {
    const trieNode = new TrieNode("c")
    trieNode.addChild("a")
    const childNode = trieNode.getChild("a")
    childNode.addChild("r")

    trieNode.removeChild("a")
    expect(trieNode.hasChild("a")).toEqual(true)
  })

  it("should NOT delete child node if the child node completes a word", () => {
    const trieNode = new TrieNode("c")
    const IS_COMPLETE_WORD = true
    trieNode.addChild("a", IS_COMPLETE_WORD)

    trieNode.removeChild("a")
    expect(trieNode.hasChild("a")).toEqual(true)
  })
})

describe("DigitalTree with Vanilla JS", () => {
  it("should create trie", () => {
    const trie = new Trie()

    expect(trie).toBeDefined()
    expect(trie.head.toString()).toBe("*")
  })

  it("should add words to trie", () => {
    const trie = new Trie()

    trie.addWord("cat")

    expect(trie.head.toString()).toBe("*:c")
    expect(trie.head.getChild("c").toString()).toBe("c:a")

    trie.addWord("car")
    expect(trie.head.toString()).toBe("*:c")
    expect(trie.head.getChild("c").toString()).toBe("c:a")
    expect(trie.head.getChild("c").getChild("a").toString()).toBe("a:t,r")
    expect(trie.head.getChild("c").getChild("a").getChild("t").toString()).toBe("t*")
  })

  it("should delete words from trie", () => {
    const trie = new Trie()

    trie.addWord("carpet")
    trie.addWord("car")
    trie.addWord("cat")
    trie.addWord("cart")
    expect(trie.doesWordExist("carpet")).toBe(true)
    expect(trie.doesWordExist("car")).toBe(true)
    expect(trie.doesWordExist("cart")).toBe(true)
    expect(trie.doesWordExist("cat")).toBe(true)

    // Try to delete not-existing word first.
    trie.deleteWord("carpool")
    expect(trie.doesWordExist("carpet")).toBe(true)
    expect(trie.doesWordExist("car")).toBe(true)
    expect(trie.doesWordExist("cart")).toBe(true)
    expect(trie.doesWordExist("cat")).toBe(true)

    trie.deleteWord("carpet")
    expect(trie.doesWordExist("carpet")).toEqual(false)
    expect(trie.doesWordExist("car")).toEqual(true)
    expect(trie.doesWordExist("cart")).toBe(true)
    expect(trie.doesWordExist("cat")).toBe(true)

    trie.deleteWord("cat")
    expect(trie.doesWordExist("car")).toEqual(true)
    expect(trie.doesWordExist("cart")).toBe(true)
    expect(trie.doesWordExist("cat")).toBe(false)

    trie.deleteWord("car")
    expect(trie.doesWordExist("car")).toEqual(false)
    expect(trie.doesWordExist("cart")).toBe(true)

    trie.deleteWord("cart")
    expect(trie.doesWordExist("car")).toEqual(false)
    expect(trie.doesWordExist("cart")).toBe(false)
  })

  it("should suggests next characters", () => {
    const trie = new Trie()

    trie.addWord("cat")
    trie.addWord("cats")
    trie.addWord("car")
    trie.addWord("caption")

    expect(trie.suggestNextChars("ca")).toEqual(["t", "r", "p"])
    expect(trie.suggestNextChars("cat")).toEqual(["s"])
    expect(trie.suggestNextChars("cab")).toBeNull()
  })

  it("should check if word exists", () => {
    const trie = new Trie()

    trie.addWord("cat")
    trie.addWord("cats")
    trie.addWord("carpet")
    trie.addWord("car")
    trie.addWord("caption")

    expect(trie.doesWordExist("cat")).toBe(true)
    expect(trie.doesWordExist("cats")).toBe(true)
    expect(trie.doesWordExist("carpet")).toBe(true)
    expect(trie.doesWordExist("car")).toBe(true)
    expect(trie.doesWordExist("cap")).toBe(false)
    expect(trie.doesWordExist("call")).toBe(false)
  })
})
