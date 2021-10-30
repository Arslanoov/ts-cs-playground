import { Graph } from "../../../../data-structures/graph/graph"
import { Queue } from "../../../../data-structures/queue/from-linked-list/Queue"

export const bfs = (graph: Graph, startVertex: string) => {
  const list = graph.list
  const results = []
  const visited: {
    [key: string]: boolean
  } = {}

  // Queue solution
  const queue = new Queue<string>()
  queue.enqueue(startVertex)

  let currentVertex: string
  visited[startVertex] = true
  while (!queue.isEmpty()) {
    currentVertex = queue.dequeue()
    results.push(currentVertex)

    list[currentVertex].forEach((vertexItem) => {
      if (!visited[vertexItem]) {
        visited[vertexItem] = true
        queue.enqueue(vertexItem)
      }
    })
  }

  return results
}