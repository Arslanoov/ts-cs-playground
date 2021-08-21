import { TreeNode } from "../TreeNode"

export class BinarySearchTreeNode<T> extends TreeNode<T, BinarySearchTreeNode<T>> {
  public constructor(value: T | null = null) {
    super(value)
  }

  public insert(value: T): BinarySearchTreeNode<T> {
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

  public find(value: T): BinarySearchTreeNode<T> | null {
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

  public contains(value: T): boolean {
    return !!this.find(value)
  }

  public findMin(): BinarySearchTreeNode<T> {
    if (!this.left) {
      return this
    }

    return this.left.findMin()
  }

  public remove(value: T): boolean {
    const itemToRemove = this.find(value)
    if (!itemToRemove) {
      throw new Error("Item not found.")
    }

    const { parent } = itemToRemove
    if (!itemToRemove.left && !itemToRemove.right) {
      parent ? parent.removeChild(itemToRemove) : itemToRemove.setValue(undefined)
    } else if (itemToRemove.left && itemToRemove.right) {
      const nextBiggerNode = itemToRemove.right.findMin()
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
        BinarySearchTreeNode.copy<BinarySearchTreeNode<T>, BinarySearchTreeNode<T>>(child, itemToRemove)
    }

    itemToRemove.parent = null

    return true
  }
}

interface BinarySearchTreeInterface<T> {
  insert(value: T): BinarySearchTreeNode<T>
  contains(value: T): boolean
  remove(value: T): boolean
  toString(): string
}

export class BinarySearchTree<T> implements BinarySearchTreeInterface<T> {
  public root = new BinarySearchTreeNode<T>(null as T)

  public insert(value: T): BinarySearchTreeNode<T> {
    return this.root.insert(value)
  }

  public contains(value: T): boolean {
    return this.root.contains(value)
  }

  public remove(value: T): boolean {
    return this.root.remove(value)
  }

  public toString(): string {
    return this.root.toString()
  }
}
