/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map();

  return function () {
    const key = resolver ? resolver(...arguments) : Array.from(arguments).join(',');

    const cacheItem = cache.get(key);
    if (!cacheItem) {
      const value = func.apply(this, arguments);
      cache.set(key, new Map([[ this, value ]]));
      return value;
    }

    if (cacheItem.has(this)) {
      return cacheItem.get(this);
    }

    const value = func.apply(this, arguments);
    cacheItem.set(this, value);

    return value;
  }
}