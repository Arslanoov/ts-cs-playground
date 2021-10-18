import { GraphVertexInterface } from "./graphVertex"
import { GraphEdgeInterface } from "./graphEdge"

type Indices = {
  [key: string]: number
}

export interface GraphInterface<T> {
  addVertex(vertex: GraphVertexInterface<T>)
  getVertexByKey(key: string): GraphVertexInterface<T> | null
  getNeighbors(vertex: GraphVertexInterface<T>): GraphVertexInterface<T>[]
  getAllVertices(): GraphVertexInterface<T>[]
  getAllEdges(): GraphEdgeInterface<T>[]
  addEdge(edge: GraphEdgeInterface<T>): void
  removeEdge(edge: GraphEdgeInterface<T>): void
  findEdge(startVertex: GraphVertexInterface<T>, endVertex: GraphVertexInterface<T>): GraphEdgeInterface<T> | null
  getWeight(): number
  reverse(): void
  getVerticesIndices(): Indices
  getAdjacencyMatrix(): T[][]
  toString(): string
}

export class Graph<T> implements GraphInterface<T> {
  private readonly vertices: { [key: string]: GraphVertexInterface<T> }
  private readonly edges: { [key: string]: GraphEdgeInterface<T> }
  private readonly isDirected: boolean

  public constructor(isDirected: boolean = false) {
    this.vertices = {}
    this.edges = {}
    this.isDirected = isDirected
  }

  public addVertex(vertex: GraphVertexInterface<T>) {
    this.vertices[vertex.getKey()] = vertex
  }

  public getVertexByKey(key: string): GraphVertexInterface<T> | null {
    return this.vertices[key] ?? null
  }

  public getNeighbors(vertex: GraphVertexInterface<T>): GraphVertexInterface<T>[] {
    return vertex.getNeighbors()
  }

  public getAllVertices(): GraphVertexInterface<T>[] {
    return Object.values(this.vertices)
  }

  public getAllEdges(): GraphEdgeInterface<T>[] {
    return Object.values(this.edges)
  }
  
  public addEdge(edge: GraphEdgeInterface<T>): void {
    let start = this.getVertexByKey(edge.start.getKey())
    let end = this.getVertexByKey(edge.end.getKey())

    if (!start) {
      this.addVertex(edge.start)
      start = this.getVertexByKey(edge.start.getKey())
    }

    if (!end) {
      this.addVertex(edge.end)
      end = this.getVertexByKey(edge.end.getKey())
    }

    if (this.edges[edge.getKey()]) {
      throw new Error("Vertex already added")
    }

    this.edges[edge.getKey()] = edge

    if (this.isDirected) {
      start.addEdge(edge)
    } else {
      start.addEdge(edge)
      end.addEdge(edge)
    }
  }

  public removeEdge(edge: GraphEdgeInterface<T>): void {
    if (!this.edges[edge.getKey()]) {
      throw new Error("Edge not found")
    }

    delete this.edges[edge.getKey()]

    const start = this.getVertexByKey(edge.start.getKey())
    const end = this.getVertexByKey(edge.end.getKey())

    start.deleteEdge(edge)
    end.deleteEdge(edge)
  }

  public findEdge(
    startVertex: GraphVertexInterface<T>,
    endVertex: GraphVertexInterface<T>
  ): GraphEdgeInterface<T> | null {
    const vertex = this.getVertexByKey(startVertex.getKey())

    if (!vertex) {
      return null
    }

    return vertex.findEdge(endVertex)
  }

  public getWeight(): number {
    return this.getAllEdges().reduce((weight: number, edge: GraphEdgeInterface<T>) => weight + edge.weight, 0)
  }

  public reverse() {
    this.getAllEdges().forEach((edge: GraphEdgeInterface<T>) => {
      this.removeEdge(edge)
      edge.reverse()
      this.addEdge(edge)
    })
  }

  public getVerticesIndices(): Indices {
    const indices = {}
    this.getAllVertices().forEach((vertex: GraphVertexInterface<T>, index: number) => {
      indices[vertex.getKey()] = index
    })
    return indices
  }

  public getAdjacencyMatrix(): T[][] {
    const vertices = this.getAllVertices()
    const indices = this.getVerticesIndices()

    const matrix = Array(vertices.length).fill(null).map(() => Array(vertices.length).fill(Infinity))

    vertices.forEach((vertex: GraphVertexInterface<T>, index: number) => {
      vertex.getNeighbors().forEach((neighbor: GraphVertexInterface<T>) => {
        matrix[index][indices[neighbor.getKey()]] = this.findEdge(vertex, neighbor).weight
      })
    })

    return matrix
  }

  public toString(): string {
    return Object.keys(this.vertices).toString()
  }
}