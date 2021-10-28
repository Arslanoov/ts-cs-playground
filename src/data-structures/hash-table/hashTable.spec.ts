import { HashTable } from "./hashTable"

describe("Hash table", () => {
  test("set and get", () => {
    const hashTable = new HashTable()

    hashTable.set("key1", "value1")
    hashTable.set("key2", "value2")
    hashTable.set("key4", "value4")
    hashTable.set("key100", "value100")

    expect(hashTable.get("key1")).toBe("value1")
    expect(hashTable.get("key2")).toBe("value2")
    expect(hashTable.get("key4")).toBe("value4")
    expect(hashTable.get("key100")).toBe("value100")
  })
})