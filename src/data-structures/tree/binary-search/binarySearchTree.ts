export class BSTNode {
  public constructor(
    public value: number,
    public left: BSTNode | null = null,
    public right: BSTNode | null = null
  ) {
  }
}

export interface BinarySearchTreeInterface {
  insert(value: number): void
  toString(): string
}

export class BinarySearchTree implements BinarySearchTreeInterface {
  private root: BSTNode | null = null

  public insert(value: number): void {
    const node = new BSTNode(value)
    if (!this.root) {
      this.root = node
      return
    }

    let currentNode: BSTNode | null = this.root
    while (true) {
      if (currentNode.value >= value) {
        if (!currentNode.left) {
          currentNode.left = node
          return
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = node
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  public toString(node: BSTNode | null = this.root) {
    let items = []

    if (node.left) {
      items = items.concat(this.toString(node.left))
    }

    items.push(node.value)

    if (node.right) {
      items = items.concat(this.toString(node.right))
    }

    return items.toString()
  }
}