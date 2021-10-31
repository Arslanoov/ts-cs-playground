import { UnweightedGraph } from "../../../../data-structures/graph/unweighted/unweightedGraph"
import { WeightedGraph } from "../../../../data-structures/graph/weighted/weightedGraph"
import { Stack } from "../../../../data-structures/stack/from-linked-list/Stack"

export const dfsRecursive = (graph: UnweightedGraph | WeightedGraph, startVertex: string) => {
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

export const dfsIterative = (graph: UnweightedGraph | WeightedGraph, startVertex: string) => {
  const list = graph.list
  const results = []
  const visited: {
    [key: string]: boolean
  } = {}

  // Stack solution
  const stack = new Stack<string>()
  stack.push(startVertex)

  let currentVertex: string
  visited[startVertex] = true
  while (!stack.isEmpty()) {
    currentVertex = stack.pop()
    results.push(currentVertex)

    list[currentVertex].forEach((vertexItem) => {
      if (!visited[vertexItem]) {
        visited[vertexItem] = true
        stack.push(vertexItem)
      }
    })
  }

  return results
}