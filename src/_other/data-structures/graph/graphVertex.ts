import {LinkedList, LinkedListNode} from "../linked-list/LinkedList";
import { GraphEdgeInterface } from "./graphEdge"

export interface GraphVertexInterface<T> {
  addEdge(edge: GraphEdgeInterface<T>): void
  deleteEdge(edge: GraphEdgeInterface<T>): void
  getNeighbors(): GraphVertexInterface<T>[]
  getEdges(): GraphEdgeInterface<T>[]
  getDegree(): number
  hasEdge(edge: GraphEdgeInterface<T>): boolean
  hasNeighbor(vertex: GraphVertexInterface<T>): boolean
  findEdge(vertex: GraphVertexInterface<T>): GraphEdgeInterface<T> | null
  getKey(): string
  deleteAllEdges(): void
  toString(): string
}

export class GraphVertex<T> implements GraphVertexInterface<T> {
  public value: T
  public edges: LinkedList<GraphEdgeInterface<T>> = new LinkedList()

  public constructor(value?: T) {
    if (value === undefined) {
      throw new Error("Graph vertex can't be empty")
    }

    this.value = value
  }

  public addEdge(edge: GraphEdgeInterface<T>) {
    this.edges.append(edge)
  }

  public deleteEdge(edge: GraphEdgeInterface<T>) {
    this.edges.remove(edge)
  }

  public deleteAllEdges(): void {
    this.edges.toArray().forEach((edge: T) => this.deleteEdge(edge))
  }

  public getNeighbors(): GraphVertexInterface<T>[] {
    const edges = this.edges.toArray()
    return edges.map((edge: GraphEdgeInterface<T>) => edge.start === this ? edge.end : edge.start)
  }

  public getEdges(): GraphEdgeInterface<T>[] {
    return this.edges.toArray()
  }

  public getDegree(): number {
    return this.getEdges().length
  }

  public hasEdge(edge: GraphEdgeInterface<T>): boolean {
    return !!this.edges.find(edge)
  }

  public hasNeighbor(vertex: GraphVertexInterface<T>): boolean {
    return !!this.edges.find(
      vertex,
      (node: LinkedListNode<GraphEdgeInterface<T>>) =>
        node.value.start === vertex || node.value.end === vertex
    )
  }

  public findEdge(vertex: GraphVertexInterface<T>): GraphEdgeInterface<T> | null {
    const edge = this.edges.find(
      vertex,
      (node: LinkedListNode<GraphEdgeInterface<T>>) =>
        node.value.start === vertex || node.value.end === vertex
    )

    return edge ? edge.value : null
  }

  public toString(): string {
    return `${this.value}`
  }

  public getKey(): string {
    return this.value as string
  }
}
