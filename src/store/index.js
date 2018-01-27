import Vuex from 'vuex'
import Vue from 'vue'
import { apiSearchPosts } from './api'

Vue.use(Vuex)

const state = {
  sessions: null
}

const actions = {
  async GET_SESSIONS ({state, commit}) {
    try {
      const results = await apiSearchPosts()
      console.log(results, 'results from store')

      commit('SET_SESSIONS', { data: results })

      return results
    } catch (error) {
      console.error(error, 'error from store')
    }
  }
}

const mutations = {
  SET_SESSIONS (state, { data }) {
    state.sessions = data
  }
}

const getters = {
  sessions: state => state.sessions
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
