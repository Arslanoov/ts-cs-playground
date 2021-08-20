import { LinkedList } from "../linked-list/LinkedList"
import { hash as hashFunction } from "./hashPure"

export class HashTable {
  keys = {}

  constructor(size = 32) {
    this.buckets = Array(size).fill(null).map(() => new LinkedList())
  }

  get(key) {
    const bucket = this.buckets[hashFunction(key, this.buckets.length)]
    const node = bucket.find(key, (item) => item.value.key === key)

    return node ? node.value.value : undefined
  }

  getKeys() {
    return Object.keys(this.keys)
  }

  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray().map((node) => node.value)
      return values.concat(bucketValues)
    }, [])
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  set(key, value) {
    const hash = hashFunction(key, this.buckets.length)
    this.keys[key] = hash

    const bucket = this.buckets[hash]
    const node = bucket.find(key, (item) => item.value.key === key)

    if (node) {
      node.value.value = value
      return
    }

    bucket.append({
      key,
      value,
    })
  }

  delete(key) {
    const hash = hashFunction(key, this.buckets.length)
    delete this.keys[key]

    const bucket = this.buckets[hash]
    const node = bucket.find(key, (item) => item.value.key === key)

    if (node) {
      return bucket.remove(node.value)
    }

    return null
  }

  get bucketsCount() {
    return this.buckets.length
  }
}
