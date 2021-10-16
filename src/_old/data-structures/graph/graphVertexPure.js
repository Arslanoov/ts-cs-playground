import { LinkedList } from "../linked-list/LinkedListPure";

export class GraphVertex {
  constructor(value) {
    if (value === undefined) {
      throw new Error("Graph vertex can't be empty")
    }
  
    this.value = value
    this.edges = new LinkedList()
  }

  addEdge(edge) {
    this.edges.append(edge)
  }

  deleteEdge(edge) {
    this.edges.remove(edge)
  }

  deleteAllEdges() {
    this.edges.toArray().forEach((edge) => this.deleteEdge(edge))
  }

  getNeighbors() {
    const edges = this.edges.toArray()
    return edges.map((edge) => edge.start === this ? edge.end : edge.start)
  }

  getEdges() {
    return this.edges.toArray()
  }

  getDegree() {
    return this.getEdges().length
  }

  hasEdge(edge) {
    return !!this.edges.find(edge)
  }

  hasNeighbor(vertex) {
    return !!this.edges.find(
      vertex,
      (node) => node.value.start === vertex || node.value.end === vertex
    )
  }

  findEdge(vertex) {
    const edge = this.edges.find(
      vertex,
      (node) => node.value.start === vertex || node.value.end === vertex
    )

    return edge ? edge.value : null
  }

  toString() {
    return `${this.value}`
  }

  getKey() {
    return this.value
  }
}
