export function setLoading (state, value) {
  state.isLoading += value
}

export function setState (state, { key, value }) {
  state[key] = value
}
