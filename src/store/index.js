import Vuex from 'vuex'
import Vue from 'vue'
import { apiSearchPosts } from './api'

Vue.use(Vuex)

const state = {
  // aboutInfo: null,
  isContentLoaded: false,
  sessions: null
}

const actions = {
  async GET_SESSIONS ({state, commit}) {
    try {
      const results = await apiSearchPosts()
      setTimeout(function () {
        state.isContentLoaded = true
        console.log('loaded?', state.isContentLoaded, results, 'results from store')
      }, 1000)

      commit('SET_SESSIONS', { data: results.data })

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
  isContentLoaded: state => state.isContentLoaded,
  sessions (state) {
    return (state.sessions || []).map(el => {
      const { slug, title, about, gallery } = el.acf.session[0]
      return {
        title,
        about,
        gallery,
        slug
      }
    })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
