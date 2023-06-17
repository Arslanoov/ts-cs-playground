export interface WeightedGraphInterface {
  addVertex(key: string): void
  addEdge(vertex1: string, vertex2: string, weight: number): void
  removeEdge(vertex1: string, vertex2: string): void
  removeVertex(vertex: string): void
}

export class WeightedGraphNode<T> {
  public constructor(
    public value: T,
    public weight: number
  ) {
  }
}

export class WeightedGraph<T = any> implements WeightedGraphInterface {
  public list: {
    [key: string]: WeightedGraphNode<T>[]
  } = {}

  public addVertex(vertex: string): void {
    if (!this.list[vertex]) {
      this.list[vertex] = []
    }
  }

  public addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.list[vertex1].push(new WeightedGraphNode<T>(vertex2, weight))
    this.list[vertex2].push(new WeightedGraphNode<T>(vertex1, weight))
  }

  public removeEdge(vertex1: string, vertex2: string): void {
    this.list[vertex1] = this.list[vertex1].filter((item) => item.value !== vertex2) as WeightedGraphNode<T>[]
    this.list[vertex2] = this.list[vertex2].filter((item) => item.value !== vertex1) as WeightedGraphNode<T>[]
  }

  public removeVertex(vertex: string): void {
    for (let i = 0; i < this.list[vertex].length; i++) {
      const lastVertex = this.list[vertex].pop()
      this.removeEdge(vertex, lastVertex.value)
    }

    delete this.list[vertex]
  }
}