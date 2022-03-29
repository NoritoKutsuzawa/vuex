export const increment = state => {
  console.log("using mutations.js!");

  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  console.log("using mutations.js!");
  state.count--
  state.history.push('decrement')
}
