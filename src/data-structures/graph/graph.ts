export interface GraphInterface {
  addVertex(key: string): void
  addEdge(vertex1: string, vertex2: string): void
  removeEdge(vertex1: string, vertex2: string): void
  removeVertex(vertex: string): void
}

type List<T> = {
  [key: string]: T[]
}

export class Graph<T = any> implements GraphInterface {
  public list: List<T> = {}

  public addVertex(vertex: string): void {
    if (!this.list[vertex]) {
      this.list[vertex] = []
    }
  }

  public addEdge(vertex1: string, vertex2: string): void {
    this.list[vertex1].push(vertex2)
    this.list[vertex2].push(vertex1)
  }

  public removeEdge(vertex1: string, vertex2: string): void {
    this.list[vertex1] = this.list[vertex1].filter((item) => item !== vertex2)
    this.list[vertex2] = this.list[vertex2].filter((item) => item !== vertex1)
  }

  public removeVertex(vertex: string): void {
    for (let i = 0; i < this.list[vertex].length; i++) {
      const lastVertex = this.list[vertex].pop()
      this.removeEdge(vertex, lastVertex)
    }

    delete this.list[vertex]
  }
}