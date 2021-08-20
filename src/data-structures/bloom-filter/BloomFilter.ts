interface StorageInterface {
  getValue(index: number): boolean,
  setValue(index: number): void,
}

export const createStore = (size: number): StorageInterface => {
  const storage = []
  for (let i = 0; i < size; i++) {
    storage.push(false)
  }

  return {
    getValue: (index: number) => storage[index],
    setValue: (index: number) => storage[index] = true,
  }
}

interface BloomFilterInterface {
  insert(item: string): void
  mayContain(item: string): boolean
  hash1(item: string): number
  hash2(item: string): number
  hash3(item: string): number
  getHashValues(item: string): number[]
}

export class BloomFilter implements BloomFilterInterface {
  private readonly size: number
  private storage: StorageInterface

  public constructor(size = 100) {
    this.size = size
    this.storage = createStore(size)
  }

  public insert(item: string) {
    const values = this.getHashValues(item)
    values.forEach((value) => this.storage.setValue(value))
  }

  public mayContain(item: string): boolean {
    const values = this.getHashValues(item)
    for (let i = 0; i < values.length; i++) {
      if (!this.storage.getValue(values[i])) {
        return false
      }
    }

    return true
  }

  /*
  * See https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/bloom-filter/BloomFilter.js
  */
  public hash1(item: string): number {
    let hash = 0
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) + hash + char
      hash &= hash
      hash = Math.abs(hash)
    }

    return hash % this.size
  }

  public hash2(item: string): number {
    let hash = 5381
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) + hash + char
    }

    return Math.abs(hash % this.size)
  }

  public hash3(item: string): number {
    let hash = 0
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) - hash
      hash += char
      hash &= hash
    }

    return Math.abs(hash % this.size)
  }

  public getHashValues(item: string): number[] {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ]
  }
}
