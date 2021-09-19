export class Graph {
  constructor(isDirected) {
    this.vertices = {}
    this.edges = {}
    this.isDirected = isDirected
  }

  addVertex(vertex) {
    this.vertices[vertex.getKey()] = vertex
  }

  getVertexByKey(key) {
    return this.vertices[key] ?? null
  }

  getNeighbors(vertex) {
    return vertex.getNeighbors()
  }

  getAllVertices() {
    return Object.values(this.vertices)
  }

  getAllEdges() {
    return Object.values(this.edges)
  }
  
  addEdge(edge) {
    let start = this.getVertexByKey(edge.start.getKey())
    let end = this.getVertexByKey(edge.end.getKey())

    if (!start) {
      this.addVertex(edge.start)
      start = this.getVertexByKey(edge.start.getKey())
    }

    if (!end) {
      this.addVertex(edge.end)
      end = this.getVertexByKey(edge.end.getKey())
    }

    if (this.edges[edge.getKey()]) {
      throw new Error("Vertex already added")
    }

    this.edges[edge.getKey()] = edge

    if (this.isDirected) {
      start.addEdge(edge)
    } else {
      start.addEdge(edge)
      end.addEdge(edge)
    }
  }

  removeEdge(edge) {
    if (!this.edges[edge.getKey()]) {
      throw new Error("Edge not found")
    }

    delete this.edges[edge.getKey()]

    const start = this.getVertexByKey(edge.start.getKey())
    const end = this.getVertexByKey(edge.end.getKey())

    start.deleteEdge(edge)
    end.deleteEdge(edge)
  }

  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey())

    if (!vertex) {
      return null
    }

    return vertex.findEdge(endVertex)
  }

  getWeight() {
    return this.getAllEdges().reduce((weight, edge) => weight + edge.weight, 0)
  }

  reverse() {
    this.getAllEdges().forEach((edge) => {
      this.removeEdge(edge)
      edge.reverse()
      this.addEdge(edge)
    })
  }

  getVerticesIndices() {
    const indices = {}
    this.getAllVertices().forEach((vertex, index) => {
      indices[vertex.getKey()] = index
    })
    return indices
  }

  getAdjacencyMatrix() {
    const vertices = this.getAllVertices()
    const indices = this.getVerticesIndices()

    const matrix = Array(vertices.length).fill(null).map(() => Array(vertices.length).fill(Infinity))

    vertices.forEach((vertex, index) => {
      vertex.getNeighbors().forEach((neighbor) => {
        matrix[index][indices[neighbor.getKey()]] = this.findEdge(vertex, neighbor).weight
      })
    })

    return matrix
  }

  toString() {
    return Object.keys(this.vertices).toString()
  }
}