import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const store = () => {
  return new Vuex.Store({
    state: {
      isLoading: 0
    },
    actions,
    mutations,
    getters
  })
}

export default store
