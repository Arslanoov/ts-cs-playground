import { Graph } from "../../../../data-structures/graph/graph"

export const dfsRecursive = (graph: Graph, startVertex: string) => {
  const list = graph.list
  const results = []
  const visited: {
    [key: string]: boolean
  } = {}

  const dfsRecursiveFunction = (vertex: string) => {
    if (!vertex) return null

    results.push(vertex)
    visited[vertex] = true

    list[vertex].forEach((vertexItem) => !visited[vertexItem] && dfsRecursiveFunction(vertexItem))
  }

  dfsRecursiveFunction(startVertex)

  return results
}