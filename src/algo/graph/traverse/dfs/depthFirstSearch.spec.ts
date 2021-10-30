import { Graph } from "../../../../data-structures/graph/graph"
import { dfsRecursive, dfsIterative } from "./depthFirstSearch"

describe("Graph traversal: DFS", () => {
  test("recursive way", () => {
    const graph = new Graph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2")
    graph.addEdge("some2", "some3")
    graph.addEdge("some3", "some")

    expect(dfsRecursive(graph, "some2")).toStrictEqual(["some2", "some", "some3"])
  })

  test("iterative way", () => {
    const graph = new Graph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2")
    graph.addEdge("some2", "some3")
    graph.addEdge("some3", "some")

    expect(dfsIterative(graph, "some2")).toStrictEqual(["some2", "some3", "some"])
  })
})