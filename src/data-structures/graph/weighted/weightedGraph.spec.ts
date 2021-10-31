import { WeightedGraph } from "./weightedGraph"

describe("Graph", () => {
  test("add vertex", () => {
    const graph = new WeightedGraph()

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
    const graph = new WeightedGraph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2", 5)

    expect(graph.list.some[0].value).toEqual("some2")
    expect(graph.list.some[0].weight).toEqual(5)
    expect(graph.list.some2[0].value).toEqual("some")
    expect(graph.list.some2[0].weight).toEqual(5)
    expect(graph.list.some3).toStrictEqual([])
  })

  test("remove edge", () => {
    const graph = new WeightedGraph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2", 2)

    graph.removeEdge("some", "some2")

    expect(graph.list).toStrictEqual({
      "some": [],
      "some2": [],
      "some3": []
    })
  })

  test("remove vertex", () => {
    const graph = new WeightedGraph()

    graph.addVertex("some")
    graph.addVertex("some2")
    graph.addVertex("some3")

    graph.addEdge("some", "some2", 4)

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