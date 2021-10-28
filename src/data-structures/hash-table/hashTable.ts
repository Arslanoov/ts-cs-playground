import { hash } from "./hash"

export const DEFAULT_SIZE = 17

export interface HashTableInterface<T> {
  set(key: string, value: T): void
  get(key: string): T | null
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

  public set(key: string, value: T): void {
    const keyHash = hash(key, this.map.length)
    this.map[keyHash].push({
      key,
      value
    })
  }

  public get(key: string): T | null {
    const keyHash = hash(key, this.map.length)
    const bucket = this.map[keyHash]
    return bucket.find((item) => item.key === key)?.value || null
  }
}