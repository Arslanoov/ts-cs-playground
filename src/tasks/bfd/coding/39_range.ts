/**
 * @param {integer} from
 * @param {integer} to
 */
function* range(from, to) {
  while (from <= to) {
    yield from
    from++
  }
}