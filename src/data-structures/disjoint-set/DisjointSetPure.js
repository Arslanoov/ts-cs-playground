export class DisjointSetItem {
  constructor(value, keyCallback) {
    this.value = value
    this.keyCallback = keyCallback
    this.parent = null
    this.children = {}
  }

  getKey() {
    if (this.keyCallback) {
      return this.keyCallback(this.value)
    }
    return this.value
  }

  getRoot() {
    return this.isRoot() ? this : this.parent.getRoot()
  }

  isRoot() {
    return this.parent === null
  }

  getRank() {
    if (this.getChildren().length === 0) {
      return 0
    }

    let rank = 0
    this.getChildren().forEach((child) => {
      rank += 1
      rank += child.getRank()
    })

    return rank
  }

  getChildren() {
    return Object.values(this.children)
  }

  setParent(parent, forceSettingChild = true) {
    this.parent = parent
    if (forceSettingChild) {
      parent.addChild(this)
    }
  }

  addChild(child) {
    this.children[child.getKey()] = child
    child.setParent(this, false)
  }
}

export class DisjointSet {
  constructor(keyCallback) {
    this.keyCallback = keyCallback
    this.items = {}
  }

  makeSet(value) {
    const item = new DisjointSetItem(value, this.keyCallback)
    if (!this.items[item.getKey()]) {
      this.items[item.getKey()] = item
    }

    return this
  }

  find(value) {
    const item = new DisjointSetItem(value, this.keyCallback)
    const requiredItems = this.items[item.getKey()]
    if (!requiredItems) {
      return null
    }

    return requiredItems.getRoot().getKey()
  }

  union(first, second) {
    const firstRootKey = this.find(first)
    const secondRootKey = this.find(second)

    if ([firstRootKey, secondRootKey].includes(null)) {
      throw new Error("First and second elements aren't in sets")
    }

    if (firstRootKey === secondRootKey) {
      return this
    }

    const firstRoot = this.items[firstRootKey]
    const secondRoot = this.items[secondRootKey]

    if (firstRoot.getRank() < secondRoot.getRank()) {
      secondRoot.addChild(firstRoot)
      return
    }

    firstRoot.addChild(secondRoot)

    return this
  }

  inSameSet(first, second) {
    const firstRootKey = this.find(first)
    const secondRootKey = this.find(second)

    if ([firstRootKey, secondRootKey].includes(null)) {
      throw new Error("First and second elements aren't in sets")
    }

    return firstRootKey === secondRootKey
  }
}
