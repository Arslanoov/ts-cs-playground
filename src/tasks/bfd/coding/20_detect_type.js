

const dataTypes = [
  {
    obj: Map,
    name: 'map'
  },
  {
    obj: Array,
    name: 'array'
  },
  {
    obj: ArrayBuffer,
    name: 'arraybuffer'
  },
  {
    obj: Set,
    name: 'set'
  },
  {
    obj: Date,
    name: 'date'
  },
  {
    obj: Function,
    name: 'function'
  },
  {
    obj: Number,
    name: 'number'
  },
  {
    obj: String,
    name: 'string'
  },
  {
    obj: Boolean,
    name: 'boolean'
  },
];

/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  if (data === null) return 'null';

  if (typeof data !== 'object') {
    return typeof data;
  }

  for (const { obj, name } of dataTypes) {
    if (data instanceof obj) {
      return name;
    }
  }
}