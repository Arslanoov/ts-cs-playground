import { TreeNode } from "../TreeNodePure"

export class BinarySearchTreeNode extends TreeNode {
  constructor(value = null) {
    super(value)
  }

  insert(value) {
    if (this.value === null) {
      this.value = value
      return this
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value)
      }

      const node = new BinarySearchTreeNode(value)
      this.setLeft(node)

      return node
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value)
      }

      const node = new BinarySearchTreeNode(value)
      this.setRight(node)

      return node
    }
  }

  find(value) {
    if (this.value === value) {
      return this
    }

    if (value < this.value && this.left) {
      return this.left.find(value)
    }

    if (value > this.value && this.right) {
      return this.right.find(value)
    }

    return null
  }

  contains(value) {
    return !!this.find(value)
  }

  findMin() {
    if (!this.left) {
      return this
    }

    return this.left.findMin()
  }

  remove(value) {
    const itemToRemove = this.find(value)
    if (!itemToRemove) {
      throw new Error("Item not found.")
    }

    const { parent } = itemToRemove
    if (!itemToRemove.left && !itemToRemove.right) {
      parent ? parent.removeChild(itemToRemove) : itemToRemove.setValue(undefined)
    } else if (itemToRemove.left && itemToRemove.right) {
      const nextBiggerNode = this.right.findMin()
      if (nextBiggerNode !== itemToRemove.right) {
        this.remove(nextBiggerNode.value)
        itemToRemove.setValue(nextBiggerNode.value)
      } else {
        itemToRemove.setValue(itemToRemove.right.value)
        itemToRemove.setRight(itemToRemove.right.right)
      }
    } else {
      const child = itemToRemove.left || itemToRemove.right
      parent ?
        parent.replaceChild(itemToRemove, child) :
        BinarySearchTreeNode.copy(child, itemToRemove)
    }

    itemToRemove.parent = null

    return true
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null)
  }

  insert(value) {
    return this.root.insert(value)
  }

  contains(value) {
    return this.root.contains(value)
  }

  remove(value) {
    return this.root.remove(value)
  }

  toString() {
    return this.root.toString()
  }
}
