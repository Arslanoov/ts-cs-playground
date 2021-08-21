import { TreeNode } from "../TreeNode"

export interface BinarySearchTreeNodeInterface<T> {

}

export class BinarySearchTreeNode<T>
  extends TreeNode<T, BinarySearchTreeNode<T>>
  implements BinarySearchTreeNodeInterface<T> {

  public insert(value: T): void {
    if (this.value === null) {
      this.value = value
      return null
    }

    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value)
      }
    }
  }
}
