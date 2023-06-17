/**
 * @param {int} from
 * @param {int} to
 */
function* range(from, to) {
  while (from <= to) {
    yield from
    from++
  }
}