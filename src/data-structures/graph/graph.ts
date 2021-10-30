export interface GraphInterface {
  addVertex(key: string): void
  addEdge(vertex1: string, vertex2: string): void
}

type List<T> = {
  [key: string]: T[]
}

export class Graph<T> implements GraphInterface {
  public list: List<T> = {}

  public addVertex(vertex: string) {
    if (!this.list[vertex]) {
      this.list[vertex] = []
    }
  }

  public addEdge(vertex1: string, vertex2: string) {
    this.list[vertex1].push(vertex2)
    this.list[vertex2].push(vertex1)
  }
}