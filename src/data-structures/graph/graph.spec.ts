import { Graph } from "./graph"

describe("Graph", () => {
  test("add vertex", () => {
    const graph = new Graph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    expect(graph.list).toStrictEqual({
      "some": [],
      "some2": [],
      "some3": []
    })
  })

  test("add edge", () => {
    const graph = new Graph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2")

    expect(graph.list).toStrictEqual({
      "some": ["some2"],
      "some2": ["some"],
      "some3": []
    })
  })
})