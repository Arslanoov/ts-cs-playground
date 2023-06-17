/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
    let i = 0

    return new Observable((sub) => {
        setInterval(() => {
            sub.next(i++)
        }, period)
    })
}
