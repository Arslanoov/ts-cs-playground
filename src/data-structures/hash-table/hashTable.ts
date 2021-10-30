import { hash } from "./hash"

export const DEFAULT_SIZE = 17

export interface HashTableInterface<T> {
  set(key: string, value: T): void
  get(key: string): T | null
  keys(): string[]
  values(): T[]
}

interface KeyValue<T> {
  key: string
  value: T
}

export class HashTable<T> implements HashTableInterface<T> {
  private readonly map: KeyValue<T>[][]

  public constructor(size: number = DEFAULT_SIZE) {
    this.map = new Array(size).fill(null).map(() => [])
  }

  /**
   * Time Complexity (Average Case): O(1)
   */
  public set(key: string, value: T): void {
    const keyHash = hash(key, this.map.length)
    this.map[keyHash].push({
      key,
      value
    })
  }

  /**
   * Time Complexity (Average Case): O(1)
   */
  public get(key: string): T | null {
    const keyHash = hash(key, this.map.length)
    const bucket = this.map[keyHash]
    return bucket.find((item) => item.key === key)?.value || null
  }

  /**
   * Time Complexity: O(n)
   */
  public keys(): string[] {
    const keys = new Set()
    this.map.map((bucket) => bucket.map((item) => keys.add(item.key)))
    return Array.from(keys)
  }

  /**
   * Time Complexity: O(n)
   */
  public values(): T[] {
    const values = new Set()
    this.map.map((bucket) => bucket.map((item) => values.add(item.value)))
    return Array.from(values)
  }
}