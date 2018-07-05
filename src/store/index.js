import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const store = () => {
  return new Vuex.Store({
    state: {
      isLoading: 0,
      addressSelected: '0xb21FD5878D1e1B5Dbe1b702781AD1C2B53CEEa57'
    },
    actions,
    mutations,
    getters
  })
}

export default store
