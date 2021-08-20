export const createStore = (size) => {
  const storage = []
  for (let i = 0; i < size; i++) {
    storage.push(false)
  }

  return {
    getValue: (index) => storage[index],
    setValue: (index) => storage[index] = true,
  }
}

export class BloomFilter {
  constructor(size = 100) {
    this.size = size
    this.storage = createStore(size)
  }

  insert(item) {
    const values = this.getHashValues(item)
    values.forEach((value) => this.storage.setValue(value))
  }

  mayContain(item) {
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
  hash1(item) {
    let hash = 0
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) + hash + char
      hash &= hash
      hash = Math.abs(hash)
    }

    return hash % this.size
  }

  hash2(item) {
    let hash = 5381
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) + hash + char
    }

    return Math.abs(hash % this.size)
  }

  hash3(item) {
    let hash = 0
    for (let i = 0; i < item.length; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) - hash
      hash += char
      hash &= hash
    }

    return Math.abs(hash % this.size)
  }

  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ]
  }
}
