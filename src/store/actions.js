export function setIsLoading ({ commit }, value) {
  commit('setLoading', value)
}

export function setAddressSelected ({ commit }, value) {
  commit('setState', { key: 'addressSelected', value })
}
