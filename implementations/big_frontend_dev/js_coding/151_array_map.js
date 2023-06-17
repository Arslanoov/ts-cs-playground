Array.prototype.myMap = function(cb, obj) {
    const result = [];

    this.forEach((item, i) => result[i] = cb.call(obj, item, i, this));

    return result;
}
