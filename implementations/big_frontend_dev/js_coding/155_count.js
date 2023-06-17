const count = (() => {
  let val = 0

  const increase = () => ++val
  increase.reset = () => val = 0

  return increase
})()