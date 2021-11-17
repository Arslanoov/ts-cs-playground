function maxProfit(prices: number[]): number {
  let min = Infinity
  let max = 0

  prices.forEach((price) => {
    if (price < min) {
      min = price
    } else if ((price - min) > max) {
      max = price - min
    }
  })

  return max
}