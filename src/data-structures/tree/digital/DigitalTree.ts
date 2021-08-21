import { HashTable } from "../../hash-table/HashTable";

interface DigitalTreeNodeInterface {
  getChild(char: string): DigitalTreeNode
  addChild(char: string, isComplete: boolean): DigitalTreeNode
  removeChild(char: string): void
  hasChild(char: string): boolean
  hasChildren(): boolean
  suggestChildren(): string[]
  toString(): string
}

export class DigitalTreeNode implements DigitalTreeNodeInterface {
  private readonly char: string
  private isComplete: boolean
  private children: HashTable<DigitalTreeNode>

  public constructor(char: string, isComplete = false) {
    this.char = char
    this.isComplete = isComplete
    this.children = new HashTable<DigitalTreeNode>()
  }

  public get character(): string {
    return this.char
  }

  public get isCompleteWord(): boolean {
    return this.isComplete
  }

  public set isCompleteWord(isComplete) {
     this.isComplete = isComplete
  }

  public getChild(char: string): DigitalTreeNode {
    return this.children.get(char)
  }

  public addChild(char: string, isComplete: boolean = false): DigitalTreeNode {
    if (!this.children.has(char)) {
      this.children.set(char, new DigitalTreeNode(char, isComplete))
    }

    const child = this.getChild(char)
    child.isCompleteWord = child.isCompleteWord || isComplete

    return child
  }

  public removeChild(char: string): void {
    const child = this.getChild(char)
    if (
      child &&
      !child.isCompleteWord &&
      !child.hasChildren()
    ) {
      this.children.delete(char)
    }
  }

  public hasChild(char: string): boolean {
    return this.children.has(char)
  }

  public hasChildren(): boolean {
    return this.children.getKeys().length > 0
  }

  public suggestChildren(): string[] {
    return [...this.children.getKeys()]
  }

  public toString(): string {
    let childrenString = this.suggestChildren().toString()
    childrenString = childrenString ? `:${childrenString}` : ""
    const isComplete = this.isComplete ? "*" : ""
    return `${this.char}${isComplete}${childrenString}`
  }
}

/////////////////

export const HEAD = "*"

export interface DigitalTreeInterface {
  addWord(word: string): void
  deleteWord(word: string): void
  suggestNextChars(word: string): string[]
  doesWordExist(word: string): boolean
  getLastCharNode(word: string): DigitalTreeNode
}

export class DigitalTree implements DigitalTreeInterface {
  public head = new DigitalTreeNode(HEAD)

  public addWord(word: string) {
    const chars = Array.from(word)
    let current = this.head

    for (let i = 0; i < chars.length; i++) {
      current = current.addChild(chars[i], i === (chars.length - 1))
    }
  }

  public deleteWord(word: string) {
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

  public suggestNextChars(word: string): string[] {
    const lastChar = this.getLastCharNode(word)
    return lastChar ? lastChar.suggestChildren() : null
  }

  public doesWordExist(word: string): boolean {
    const lastChar = this.getLastCharNode(word)
    return !!lastChar && lastChar.isCompleteWord
  }

  public getLastCharNode(word: string): DigitalTreeNode {
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
