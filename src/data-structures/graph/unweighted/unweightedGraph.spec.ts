import { UnweightedGraph } from "./unweightedGraph"

describe("Graph", () => {
  test("add vertex", () => {
    const graph = new UnweightedGraph()

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
    const graph = new UnweightedGraph()

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

  test("remove edge", () => {
    const graph = new UnweightedGraph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2")

    graph.removeEdge("some", "some2")

    expect(graph.list).toStrictEqual({
      "some": [],
      "some2": [],
      "some3": []
    })
  })

  test("remove vertex", () => {
    const graph = new UnweightedGraph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2")

    graph.removeVertex("some2")

    expect(graph.list).toStrictEqual({
      "some": [],
      "some3": []
    })

    graph.removeVertex("some")

    expect(graph.list).toStrictEqual({
      "some3": []
    })
  })
})