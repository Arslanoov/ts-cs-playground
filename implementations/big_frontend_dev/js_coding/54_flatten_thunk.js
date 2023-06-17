/**
 * type Callback = (error: Error, result: any | Thunk) => void
 * type Thunk = (callback: Callback) => void
 * @param thunk
 */
function flattenThunk(thunk) {
    return function (cb) {
        thunk((err, res) => typeof res === 'function' ? flattenThunk(res)(cb) : cb(err, res))
    }
}
