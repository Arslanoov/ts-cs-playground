import { GraphVertexInterface } from "./graphVertex"

export interface GraphEdgeInterface<T> {
  start: GraphVertexInterface<T>
  end: GraphVertexInterface<T>
  weight: number

  getKey(): string
  reverse(): void
  toString(): void
}

export const edgeEq = <T>(a: GraphEdgeInterface<T>, b: GraphEdgeInterface<T>) => {
  if (a.getKey() === b.getKey()) {
    return 0
  }

  return a.getKey() < b.getKey() ? -1 : 1
}

export class GraphEdge<T> implements GraphEdgeInterface<T> {
  private startVertex: GraphVertexInterface<T>
  private endVertex: GraphVertexInterface<T>
  public weight: number

  public constructor(
    startVertex: GraphVertexInterface<T>,
    endVertex: GraphVertexInterface<T>,
    weight: number = 0
  ) {
    this.startVertex = startVertex
    this.endVertex = endVertex
    this.weight = weight
  }

  public get start(): GraphVertexInterface<T> {
    return this.startVertex
  }

  public get end(): GraphVertexInterface<T> {
    return this.endVertex
  }

  public getKey(): string {
    return `${this.startVertex.getKey()}_${this.endVertex.getKey()}`
  }

  public reverse(): void {
    const temp = this.startVertex
    this.startVertex = this.endVertex
    this.endVertex = temp
  }

  public toString(): string {
    return this.getKey()
  }
}