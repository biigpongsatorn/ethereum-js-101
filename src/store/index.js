import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import whales from '../whales'

const store = () => {
  return new Vuex.Store({
    state: {
      isLoading: 0,
      addressSelected: whales[0]
    },
    actions,
    mutations,
    getters
  })
}

export default store
