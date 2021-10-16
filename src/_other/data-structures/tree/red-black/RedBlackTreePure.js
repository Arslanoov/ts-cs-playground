import { BinarySearchTree } from "../binary-search/BinarySearchTree"

const TREE_COLORS = {
  red: "red",
  black: "black"
}

const COLOR_PROP = "color"

export class RedBlackTree extends BinarySearchTree {
  insert(value) {
    const inserted =  super.insert(value)
    inserted === this.root ? this.makeNodeBlack(inserted) : this.makeNodeRed(inserted)
    this.balance(inserted)
    return inserted
  }

  remove(value) {
    // TODO: Implement
    return super.remove(value)
  }

  balance(node) {
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
        let newGrandpa
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

  rotateLeftLeft(grandpa) {
    const grandpaParent = grandpa.parent

    let grandpaIsLeft
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

  rotateLeftRight(grandpa) {
    const parent = grandpa.left
    const child = parent.right

    const childLeft = child.left
    child.setLeft(parent)
    parent.setRight(childLeft)
    grandpa.setLeft(child)

    return this.rotateLeftLeft(grandpa)
  }

  rotateRightLeft(grandpa) {
    const parent = grandpa.right
    const child = parent.left

    const childRight = child.right

    child.setRight(parent)
    parent.setLeft(childRight)
    grandpa.setRight(child)

    return this.rotateRightRight(grandpa)
  }

  rotateRightRight(grandpa) {
    const grandpaParent = grandpa.parent

    let grandpaIsLeft
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

  makeNodeBlack(node) {
    node.meta.set(COLOR_PROP, TREE_COLORS.black)
    return node
  }

  makeNodeRed(node) {
    node.meta.set(COLOR_PROP, TREE_COLORS.red)
    return node
  }

  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP) === TREE_COLORS.black
  }

  isNodeRed(node) {
    return node.meta.get(COLOR_PROP) === TREE_COLORS.red
  }

  isNodeColored(node) {
    return this.isNodeBlack(node) || this.isNodeRed(node)
  }

  swapColors(first, second) {
    const firstColor = first.meta.get(COLOR_PROP)
    const secondColor = second.meta.get(COLOR_PROP)

    first.meta.set(COLOR_PROP, secondColor)
    second.meta.set(COLOR_PROP, firstColor)
  }
}
