/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
    function fn() {}
    fn.prototype = proto.prototype || proto;
    return new fn();
}
