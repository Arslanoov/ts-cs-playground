import { BinarySearchTree, BinarySearchTreeNode } from "../binary-search/BinarySearchTree";

interface AvlTreeInterface<T> {
  insert(value: T): BinarySearchTreeNode<T>
  remove(value: T): boolean
  balance(node: BinarySearchTreeNode<T>): void
  rotateLeftLeft(root: BinarySearchTreeNode<T>): void
  rotateLeftRight(root: BinarySearchTreeNode<T>): void
  rotateRightRight(root: BinarySearchTreeNode<T>): void
  rotateRightLeft(root: BinarySearchTreeNode<T>): void
}

export class AvlTree<T> extends BinarySearchTree<T> implements AvlTreeInterface<T> {
  public insert(value: T): BinarySearchTreeNode<T> {
    const inserted = super.insert(value);

    let current = this.root.find(value)
    while (current) {
      this.balance(current)
      current = current.parent
    }

    return inserted
  }

  public remove(value: T): boolean {
    const removed = super.remove(value);
    this.balance(this.root)
    return removed
  }

  public balance(node: BinarySearchTreeNode<T>): void {
    if (node.balanceFactor > 1) {
      node.left?.balanceFactor > 0 ? this.rotateLeftLeft(node) : false
      node.left?.balanceFactor < 0 ? this.rotateLeftRight(node) : false
    }

    if (node.balanceFactor < -1) {
      node.right?.balanceFactor > 0 ? this.rotateRightLeft(node) : false
      node.right?.balanceFactor < 0 ? this.rotateRightRight(node) : false
    }
  }

  public rotateLeftLeft(root: BinarySearchTreeNode<T>): void {
    const left = root.left
    root.setLeft(null)

    if (root.parent) {
      root.parent.setLeft(left)
    } else if (root === this.root) {
      this.root = left
    }

    if (left.right) {
      root.setLeft(left.right)
    }

    left.setRight(root)
  }

  public rotateLeftRight(root: BinarySearchTreeNode<T>): void {
    const left = root.left
    root.setLeft(null)

    const leftRight = left.right
    left.setRight(null)

    if (left.left) {
      left.setRight(leftRight.left)
      leftRight.setLeft(null)
    }

    root.setLeft(leftRight)
    leftRight.setLeft(left)
    this.rotateLeftLeft(root)
  }

  public rotateRightRight(root: BinarySearchTreeNode<T>): void {
    const right = root.right
    root.setRight(null)

    if (root.parent) {
      root.parent.setRight(right)
    } else if (root === this.root) {
      this.root = right
    }

    if (right.left) {
      root.setRight(right.left)
    }

    right.setLeft(root)
  }

  public rotateRightLeft(root: BinarySearchTreeNode<T>): void {
    const right = root.right
    root.setRight(null)

    const rightLeft = right.left
    right.setLeft(null)

    if (rightLeft.right) {
      right.setLeft(rightLeft.right)
      rightLeft.setRight(null)
    }

    root.setRight(rightLeft)
    rightLeft.setRight(right)

    this.rotateRightRight(root)
  }
}
