class NodeStore {
  data

  constructor() {
    this.data = []
  }

  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node.key = Symbol()
    this.data[node.key] = value
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.data[node.key]
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.get(node)
  }
}