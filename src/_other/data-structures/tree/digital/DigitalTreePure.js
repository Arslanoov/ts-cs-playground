import { HashTable } from "../../hash-table/HashTablePure";

export class DigitalTreeNode {
  constructor(char, isComplete = false) {
    this.char = char
    this.isComplete = isComplete
    this.children = new HashTable()
  }

  get character() {
    return this.char
  }

  get isCompleteWord() {
    return this.isComplete
  }

  set isCompleteWord(isComplete) {
     this.isComplete = isComplete
  }

  getChild(char) {
    return this.children.get(char)
  }

  addChild(char, isComplete = false) {
    if (!this.children.has(char)) {
      this.children.set(char, new DigitalTreeNode(char, isComplete))
    }

    const child = this.getChild(char)
    child.isCompleteWord = child.isCompleteWord || isComplete

    return child
  }

  removeChild(char) {
    const child = this.getChild(char)
    if (
      child &&
      !child.isCompleteWord &&
      !child.hasChildren()
    ) {
      this.children.delete(char)
    }
  }

  hasChild(char) {
    return this.children.has(char)
  }

  hasChildren() {
    return this.children.getKeys().length > 0
  }

  suggestChildren() {
    return [...this.children.getKeys()]
  }

  toString() {
    let childrenString = this.suggestChildren().toString()
    childrenString = childrenString ? `:${childrenString}` : ""
    const isComplete = this.isComplete ? "*" : ""
    return `${this.char}${isComplete}${childrenString}`
  }
}

/////////////////

export const HEAD = "*"

export class DigitalTree {
  head = new DigitalTreeNode(HEAD)

  addWord(word) {
    const chars = Array.from(word)
    let current = this.head

    for (let i = 0; i < chars.length; i++) {
      current = current.addChild(chars[i], i === (chars.length - 1))
    }
  }

  deleteWord(word) {
    const depthFirstDelete = (current, index = 0) => {
      if (index >= word.length) {
        return
      }

      const character = word[index]
      const nextNode = current.getChild(character)

      if (nextNode == null) {
        return
      }

      depthFirstDelete(nextNode, index + 1)

      if (index === (word.length - 1)) {
        nextNode.isCompleteWord = false
      }

      current.removeChild(character)
    }

    depthFirstDelete(this.head)
  }

  suggestNextChars(word) {
    const lastChar = this.getLastCharNode(word)
    return lastChar ? lastChar.suggestChildren() : null
  }

  doesWordExist(word) {
    const lastChar = this.getLastCharNode(word)
    return !!lastChar && lastChar.isCompleteWord
  }

  getLastCharNode(word) {
    const chars = Array.from(word)
    let current = this.head

    for (let i = 0; i < chars.length; i++) {
      if (!current.hasChild(chars[i])) {
        return null
      }

      current = current.getChild(chars[i])
    }

    return current
  }
}
