import { UnweightedGraph } from "../../../../data-structures/graph/unweighted/unweightedGraph"
import { bfs } from "./breadthFirstSearch"

describe("Graph traversal: BFS", () => {
  it("works", () => {
    const graph = new UnweightedGraph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")
    graph.addVertex("some4")

    graph.addEdge("some", "some2")
    graph.addEdge("some2", "some3")
    graph.addEdge("some3", "some")
    graph.addEdge("some4", "some")

    expect(bfs(graph, "some")).toStrictEqual(["some", "some2", "some3", "some4"])
  })
})