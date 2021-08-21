import { HashTable } from "../hash-table/HashTablePure"

export class TreeNode {
  constructor(value) {
    this.left = null
    this.right = null
    this.parent = null
    this.value = value
    this.meta = new HashTable()
  }

  get leftHeight() {
    if (!this.left) {
      return 0
    }

    return this.left.height + 1
  }

  get rightHeight() {
    if (!this.right) {
      return 0
    }

    return this.right.height + 1
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  // Difference between the heights of the left and right subtrees of that node.
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  get uncle() {
    if (!this.parent || !this.parent.parent || !this.parent.parent.left || !this.parent.parent.right) {
      return
    }

    if (this.parent === this.parent.parent.left) {
      return this.parent.parent.right
    }

    return this.parent.parent.left
  }

  setValue(value) {
    this.value = value
  }

  setLeft(item) {
    if (this.left) {
      this.left.parent = null
    }

    this.left = item

    if (this.left) {
      this.left.parent = this
    }
  }

  setRight(item) {
    if (this.right) {
      this.right.parent = null
    }

    this.right = item

    if (this.right) {
      this.right.parent = this
    }
  }

  removeChild(item) {
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

  replaceChild(itemToReplace, newItem) {
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

  static copy(source, target) {
    target.setValue(source.value)
    target.setLeft(source.left)
    target.setRight(source.right)
  }

  traverseInOrder() {
    let items = []

    if (this.left) {
      items = items.concat(this.left.traverseInOrder())
    }

    items.push(this.value)

    if (this.right) {
      items = items.concat(this.right.traverseInOrder())
    }

    return items
  }
  
  toString() {
    return this.traverseInOrder().toString()
  }
}
