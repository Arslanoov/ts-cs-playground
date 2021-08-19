import { LinkedList } from "../linked-list/LinkedList"
import { hash as hashFunction } from "./hash";

interface Keys {
  [key: string]: number
}

// O(1) with perfect hash function
interface HashTableInterface<T> {
  // Search
  // O(n)
  get(key: string): T | null
  getKeys(): string[]
  getValues(): T[]

  has(key: string): boolean

  // Insertion
  // O(n)
  set(key: string, value: T): void

  // Deletion
  // O(n)
  delete(key: string): T | null
}

export class HashTable<T> implements HashTableInterface<T> {
  private readonly buckets: LinkedList<T>[]
  private keys: Keys = {}

  public constructor(size: number = 32) {
    this.buckets = Array(size).fill(null).map(() => new LinkedList<T>())
  }

  public get(key: string): T | null {
    const bucket = this.buckets[hashFunction(key, this.buckets.length)]
    const node = bucket.find(key, (item) => item.value.key === key)

    return node ? node.value.value : undefined
  }

  public getKeys(): string[] {
    return Object.keys(this.keys)
  }

  public getValues(): T[] {
    return this.buckets.reduce((values: T[], bucket) => {
      const bucketValues: T[] = bucket.toArray().map((node) => node.value)
      return values.concat(bucketValues)
    }, [])
  }

  public has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  public set(key: string, value: T): void {
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

  public delete(key: string): T | null {
    const hash = hashFunction(key, this.buckets.length)
    delete this.keys[key]

    const bucket = this.buckets[hash]
    const node = bucket.find(key, (item) => item.value.key === key)

    if (node) {
      return bucket.remove(node.value)
    }

    return null
  }

  public get bucketsCount(): number {
    return this.buckets.length
  }
}
