import { WeightedGraph } from "../../../data-structures/graph/weighted/weightedGraph"
import { PriorityQueue } from "../../../data-structures/queue/priority/priorityQueue"

export const dijkstraAlgo = (graph: WeightedGraph, startVertex: string, endVertex: string) => {
  const queue = new PriorityQueue()
  const dist = {}
  const prev = {}
  const path: string[] = []

  // initial state
  for (let vertex in graph.list) {
    if (startVertex === vertex) {
      dist[vertex] = 0
      queue.enqueue(vertex, 0)
    } else {
      dist[vertex] = Infinity
      queue.enqueue(vertex, Infinity)
    }
    prev[vertex] = null
  }

  // as long as there is something to visit
  let smallestNode
  while (!queue.isEmpty()) {
    smallestNode = queue.dequeue().value
    if (endVertex === smallestNode) {
      while (prev[smallestNode]) {
        path.push(smallestNode)
        smallestNode = prev[smallestNode]
      }
      break
    }

    if (smallestNode || dist[smallestNode] !== Infinity) {
      for (let neighbor in graph.list[smallestNode]) {
        // find neighbor node
        let nextNode = graph.list[smallestNode][neighbor]
        // calculate new distance
        let candidate = dist[smallestNode] + nextNode.weight
        if (candidate < dist[nextNode.value]) {
          // updating new smallest distance to neighbor
          dist[nextNode.value] = candidate
          // updating previous - How we got to neighbor
          prev[nextNode.value] = smallestNode
          // enqueue in priority queue with new priority
          queue.enqueue(nextNode.value, candidate)
        }
      }
    }
  }

  return path.concat(smallestNode).reverse()
}