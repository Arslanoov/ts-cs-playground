export const edgeEq = (a, b) => {
  if (a.getKey() === b.getKey()) {
    return 0
  }

  return a.getKey() < b.getKey() ? -1 : 1
}

export class GraphEdge {
  constructor(
    startVertex,
    endVertex,
    weight = 0
  ) {
    this.startVertex = startVertex
    this.endVertex = endVertex
    this.weight = weight
  }

  get start() {
    return this.startVertex
  }

  get end() {
    return this.endVertex
  }

  getKey() {
    return `${this.startVertex.getKey()}_${this.endVertex.getKey()}`
  }

  reverse() {
    const temp = this.startVertex
    this.startVertex = this.endVertex
    this.endVertex = temp
  }

  toString() {
    return this.getKey()
  }
}