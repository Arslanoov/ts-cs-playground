import { HashTable } from "../hash-table/HashTable"

export class TreeNode<T, W = TreeNode<T>> {
  protected value: T | null = null
  protected meta: HashTable<T>

  public left: W | null = null
  public right: W | null = null
  public parent: W | null = null

  public constructor(value: T) {
    this.value = value
    this.meta = new HashTable()
  }

  public get leftHeight(): number {
    if (!this.left) {
      return 0
    }

    return this.left.height + 1
  }

  public get rightHeight(): number {
    if (!this.right) {
      return 0
    }

    return this.right.height + 1
  }

  public get height(): number {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  // Difference between the heights of the left and right subtrees of that node.
  public get balanceFactor(): number {
    return this.leftHeight - this.rightHeight
  }

  public get uncle(): W | void {
    if (!this.parent || !this.parent.parent || !this.parent.parent.left || !this.parent.parent.right) {
      return
    }

    if (this.parent === this.parent.parent.left) {
      return this.parent.parent.right
    }

    return this.parent.parent.left
  }

  public setValue(value: T): void {
    this.value = value
  }

  public setLeft(item: W): void {
    if (this.left) {
      this.left.parent = null
    }

    this.left = item

    if (this.left) {
      this.left.parent = this
    }
  }

  public setRight(item: W): void {
    if (this.right) {
      this.right.parent = null
    }

    this.right = item

    if (this.right) {
      this.right.parent = this
    }
  }

  public removeChild(item: W): boolean {
    if (this.left && this.left === item) {
      this.left = null
      return true
    }

    if (this.right && this.right === item) {
      this.right = null
      return true
    }

    return false
  }

  public replaceChild(itemToReplace: W, newItem: W): boolean {
    if (!itemToReplace || !newItem) {
      return false
    }

    if (this.left && this.left === itemToReplace) {
      this.left = newItem
      return true
    }

    if (this.right && this.right === itemToReplace) {
      this.right = newItem
      return true
    }

    return false
  }

  public static copy<T, W>(source: W, target: W) {
    target.setValue(source.value)
    target.setLeft(source.left)
    target.setRight(source.right)
  }

  public traverseInOrder(): T[] {
    let items: T[] = []

    if (this.left) {
      items = items.concat(this.left.traverseInOrder())
    }

    items.push(this.value)

    if (this.right) {
      items = items.concat(this.right.traverseInOrder())
    }

    return items
  }

  public toString(): string {
    return this.traverseInOrder().toString()
  }
}
