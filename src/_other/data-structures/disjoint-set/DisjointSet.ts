interface DisjointSetItemInterface<T> {
  getKey(): string
  getRoot(): DisjointSetItemInterface<T>
  isRoot(): boolean
  getRank(): number
  getChildren(): DisjointSetItemInterface<T>[]
  setParent(parent: DisjointSetItemInterface<T>, forceSettingChild: boolean): void
  addChild(child: DisjointSetItemInterface<T>): void
}

type KeyCallback<T> = (value: T) => string

export class DisjointSetItem<T> implements DisjointSetItemInterface<T> {
  private readonly value: T
  private readonly keyCallback?: KeyCallback<T>
  private parent: DisjointSetItemInterface<T> | null = null
  private children: {
    [key: string]: DisjointSetItemInterface<T>
  } = {}

  public constructor(value: T, keyCallback?: KeyCallback<T>) {
    this.value = value
    this.keyCallback = keyCallback
  }

  public getKey(): string {
    if (this.keyCallback) {
      return this.keyCallback(this.value)
    }
    return this.value as string
  }

  public getRoot(): DisjointSetItemInterface<T> {
    return this.isRoot() ? this : this.parent.getRoot()
  }

  public isRoot(): boolean {
    return this.parent === null
  }

  public getRank(): number {
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

  public getChildren(): DisjointSetItemInterface<T>[] {
    return Object.values(this.children)
  }

  public setParent(parent: DisjointSetItemInterface<T>, forceSettingChild: boolean = true) {
    this.parent = parent
    if (forceSettingChild) {
      parent.addChild(this)
    }
  }

  public addChild(child: DisjointSetItemInterface<T>) {
    this.children[child.getKey()] = child
    child.setParent(this, false)
  }
}

interface DisjointSetInterface<T> {
  makeSet(value: T): void
  find(item: T): string | null
  union(first: T, second: T): this
  inSameSet(first: T, second: T): boolean
}

export class DisjointSet<T> implements DisjointSetInterface<T> {
  private readonly keyCallback?: KeyCallback<T>
  private items: {
    [key: string]: DisjointSetItemInterface<T>
  } = {}

  public constructor(keyCallback?: KeyCallback<T>) {
    this.keyCallback = keyCallback
  }

  public makeSet(value: T): this {
    const item = new DisjointSetItem(value, this.keyCallback)
    if (!this.items[item.getKey()]) {
      this.items[item.getKey()] = item
    }

    return this
  }

  public find(value: T): string | null {
    const item = new DisjointSetItem(value, this.keyCallback)
    const requiredItems = this.items[item.getKey()]
    if (!requiredItems) {
      return null
    }

    return requiredItems.getRoot().getKey()
  }

  public union(first: T, second: T): DisjointSet<T> {
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

  public inSameSet(first: T, second: T): boolean {
    const firstRootKey = this.find(first)
    const secondRootKey = this.find(second)

    if ([firstRootKey, secondRootKey].includes(null)) {
      throw new Error("First and second elements aren't in sets")
    }

    return firstRootKey === secondRootKey
  }
}
