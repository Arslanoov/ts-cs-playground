import { BinarySearchTree, BinarySearchTreeNode } from "../binary-search/BinarySearchTree"

const TREE_COLORS = {
  red: "red",
  black: "black"
}

const COLOR_PROP = "color"

interface RedBlackTreeInterface<T> {
  insert(value: T): BinarySearchTreeNode<T>
  remove(value: T): boolean
  balance(node: BinarySearchTreeNode<T>): void

  rotateLeftRight(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>
  rotateLeftLeft(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>
  rotateRightLeft(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>
  rotateRightRight(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>

  makeNodeBlack(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>
  makeNodeRed(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>

  isNodeBlack(node: BinarySearchTreeNode<T>): boolean
  isNodeRed(node: BinarySearchTreeNode<T>): boolean
  isNodeColored(node: BinarySearchTreeNode<T>): boolean

  swapColors(first: BinarySearchTreeNode<T>, second: BinarySearchTreeNode<T>): void
}

export class RedBlackTree<T> extends BinarySearchTree<T> implements RedBlackTreeInterface<T> {
  public insert(value: T): BinarySearchTreeNode<T> {
    const inserted =  super.insert(value)
    inserted === this.root ? this.makeNodeBlack(inserted) : this.makeNodeRed(inserted)
    this.balance(inserted)
    return inserted
  }

  public remove(value: T): boolean {
    // TODO: Implement
    return super.remove(value)
  }

  public balance(node: BinarySearchTreeNode<T>): void {
    if (node === this.root || this.isNodeBlack(node.parent)) return

    const grandpa = node.parent.parent
    if (node.uncle && this.isNodeRed(node.uncle)) {
      this.makeNodeBlack(node.uncle)
      this.makeNodeBlack(node.parent)

      if (grandpa === this.root) return

      this.makeNodeRed(grandpa)
      this.balance(grandpa)
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
      if (grandpa) {
        let newGrandpa: BinarySearchTreeNode<T>| null
        if (grandpa.left === node.parent) {
          newGrandpa = node.parent.left === node ? this.rotateLeftLeft(grandpa) : this.rotateLeftRight(grandpa)
        } else {
          newGrandpa = node.parent.right === node ? this.rotateRightRight(grandpa) : this.rotateRightLeft(grandpa)
        }

        if (newGrandpa && newGrandpa.parent === null) {
          this.root = newGrandpa
          this.makeNodeBlack(this.root)
        }

        this.balance(newGrandpa)
      }
    }
  }

  public rotateLeftLeft(grandpa: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    const grandpaParent = grandpa.parent

    let grandpaIsLeft: boolean
    if (grandpaParent) {
      grandpaIsLeft = grandpaParent.left === grandpa
    }

    const parent = grandpa.left
    const parentRightNode = parent.right

    parent.setRight(grandpa)

    grandpa.setLeft(parentRightNode)

    if (grandpaParent) {
      grandpaIsLeft ? grandpaParent.setLeft(parent) : grandpaParent.setRight(parent)
    } else {
      parent.parent = null
    }

    this.swapColors(parent, grandpa)

    return parent
  }

  public rotateLeftRight(grandpa: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    const parent = grandpa.left
    const child = parent.right

    const childLeft = child.left
    child.setLeft(parent)
    parent.setRight(childLeft)
    grandpa.setLeft(child)

    return this.rotateLeftLeft(grandpa)
  }

  public rotateRightLeft(grandpa: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    const parent = grandpa.right
    const child = parent.left

    const childRight = child.right

    child.setRight(parent)
    parent.setLeft(childRight)
    grandpa.setRight(child)

    return this.rotateRightRight(grandpa)
  }

  public rotateRightRight(grandpa: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    const grandpaParent = grandpa.parent

    let grandpaIsLeft: boolean
    if (grandpaParent) {
      grandpaIsLeft = grandpaParent.left === grandpa
    }

    const parent = grandpa.right
    const parentLeft = parent.left

    parent.setLeft(grandpa)
    grandpa.setRight(parentLeft)

    if (grandpaParent) {
      grandpaIsLeft ? grandpaParent.setLeft(parent) : grandpaParent.setRight(parent)
    } else {
      parent.parent = null
    }

    this.swapColors(parent, grandpa)

    return parent
  }

  public makeNodeBlack(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    node.meta.set(COLOR_PROP, TREE_COLORS.black)
    return node
  }

  public makeNodeRed(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    node.meta.set(COLOR_PROP, TREE_COLORS.red)
    return node
  }

  public isNodeBlack(node: BinarySearchTreeNode<T>): boolean {
    return node.meta.get(COLOR_PROP) === TREE_COLORS.black
  }

  public isNodeRed(node: BinarySearchTreeNode<T>): boolean {
    return node.meta.get(COLOR_PROP) === TREE_COLORS.red
  }

  public isNodeColored(node: BinarySearchTreeNode<T>): boolean {
    return this.isNodeBlack(node) || this.isNodeRed(node)
  }

  public swapColors(first: BinarySearchTreeNode<T>, second: BinarySearchTreeNode<T>): void {
    const firstColor = first.meta.get(COLOR_PROP)
    const secondColor = second.meta.get(COLOR_PROP)

    first.meta.set(COLOR_PROP, secondColor)
    second.meta.set(COLOR_PROP, firstColor)
  }
}
